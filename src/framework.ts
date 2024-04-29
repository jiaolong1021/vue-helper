import { CancellationToken, CompletionContext, CompletionItem, CompletionItemProvider, CompletionList, Position, ProviderResult, TextDocument, 
  languages, workspace, Range, window, Selection, CompletionItemKind } from "vscode";
import ExplorerProvider from './explorer'
import * as fs from 'fs'
import * as path from 'path'
import { winRootPathHandle, getCurrentWord } from './util/util'
import { getJsTags, getTags } from './tags/index'
import { getSnippets } from "./snippets";
import { getGlobalAttrs } from './globalAttribute/index'

export interface TagObject {
  text: string,
  offset: number
};

export default class FrameworkProvider {
  public explorer: ExplorerProvider
  public frameworks: string[] = []

  constructor(explorer: ExplorerProvider) {
    this.explorer = explorer
    try {
      const pkg = fs.readFileSync(winRootPathHandle(path.join(this.explorer.projectRootPath, 'package.json')), 'utf-8')
      pkg.includes('element-plus') && this.frameworks.push('element-plus')
      pkg.includes('element-ui') && this.frameworks.push('element-ui')
      pkg.includes('ant-design-vue') && this.frameworks.push('ant-design-vue')
    } catch (error) {
    }
  }

  register() {
    this.explorer.context.subscriptions.push(languages.registerCompletionItemProvider(['vue', 'javascript', 'typescript', 'html', 'wxml'], new FrameworkCompletionItemProvider(this), '', ':', '<', '"', "'", '/', '@', '(', '>', '{'))
  }

}

class FrameworkCompletionItemProvider implements CompletionItemProvider {
  public frameworkProvider: FrameworkProvider
  public vueFiles: any = []
  public TAGS: any = {}
  public TAGSJs: any = {}
  public SNIPPETS: any = {}
  public GlobalAttrs: any = {}
  public tagReg: RegExp = /<([\w-]+)\s+/g;
  public attrReg: RegExp = /(?:\(|\s*)((\w(-)?)*)=['"][^'"]*/;  // 能够匹配 left-right 属性

  constructor(frameworkProvider: FrameworkProvider) {
    this.frameworkProvider = frameworkProvider
    this.vueFiles = this.frameworkProvider.explorer.traverse.search('.vue', '')
    this.TAGS = getTags(this.frameworkProvider.frameworks)
    this.SNIPPETS = getSnippets(this.frameworkProvider.frameworks)
    this.TAGSJs = getJsTags(this.frameworkProvider.frameworks)
    this.GlobalAttrs = getGlobalAttrs(this.frameworkProvider.frameworks)
    if (workspace.workspaceFolders) {
      const watcher = workspace.createFileSystemWatcher('**/*.vue')
      watcher.onDidCreate(() => { this.vueFiles = this.frameworkProvider.explorer.traverse.search('.vue', '') })
      watcher.onDidDelete(() => { this.vueFiles = this.frameworkProvider.explorer.traverse.search('.vue', '') })
    }
  }

  isCloseTag(document: TextDocument, position: Position) {
    let txt = document.getText(new Range(new Position(position.line, 0), position)).trim();
    if(!txt.endsWith('>') || /.*=("[^"]*>|'[^']*>)$/gi.test(txt) || txt.endsWith('/>')) {
      return false;
    }
    let txtArr = txt.match(/<([\w-]+)(\s*|(\s+[\w-_:@\.]+(=("[^"]*"|'[^']*'))?)+)\s*>/gim);
    if(Array.isArray(txtArr) && txtArr.length > 0) {
      let txtStr = txtArr[txtArr.length - 1];
      return /<([\w-]+)(\s*|(\s+[\w-_:@\.]+(=("[^"]*"|'[^']*'))?)+)\s*>$/gi.test(txtStr);
    }
    return false;
  }

  // 自动补全关闭标签
  getCloseTagSuggestion(document: TextDocument, position: Position) {
    let txtInfo = document.lineAt(position.line);
    let txtArr = txtInfo.text.match(/<([\w-]+)(\s*|(\s+[\w-_:@\.]+(=("[^"]*"|'[^']*'))?)+)\s*>/gim);
    let tag = 'div';
    if(txtArr) {
      tag = txtArr[txtArr.length - 1].replace(/<([\w-]+)(\s*|(\s+[\w-_:@\.]+(=("[^"]*"|'[^']*'))?)+)\s*>/gim, '$1');
    }
    let exclude = ['br', 'img'];
    if (exclude.indexOf(tag) === -1 && window.activeTextEditor) {
      window.activeTextEditor.edit((editBuilder) => {
        editBuilder.insert(position, '</' + tag + '>');
      });
      let newPosition = window.activeTextEditor.selection.active.translate(0, 0);
      if (newPosition) {
        window.activeTextEditor.selection = new Selection(newPosition, newPosition);
      }
    }
  }

  // 获取本行位置前的文本
  getTextBeforePosition(position: Position, document: TextDocument): string {
    var start = new Position(position.line, 0);
    var range = new Range(start, position);
    return document.getText(range);
  }

  // 匹配标签
  matchTag(reg: RegExp, txt: string, line: number, document: TextDocument, position: Position): TagObject | string {
    let match: any;
    let arr: any[] = [];
    if (/<\/?[-\w]+[^<>]*>[\s\w]*<?\s*[\w-]*$/.test(txt) || (position.line === line && (/^\s*[^<]+\s*>[^<\/>]*$/.test(txt) || /[^<>]*<$/.test(txt[txt.length - 1])))) {
      return 'break';
    }
    while ((match = reg.exec(txt))) {
      arr.push({
        text: match[1],
        offset: document.offsetAt(new Position(line, match.index))
      });
    }
    return arr.pop();
  }

  getPreTag(document: TextDocument, position: Position): TagObject | undefined {
    let line = position.line;
    let tag: TagObject | string;
    let txt = this.getTextBeforePosition(position, document);

    while (position.line - line < 10 && line >= 0) {
      if (line !== position.line) {
        txt = document.lineAt(line).text;
      }
      tag = this.matchTag(this.tagReg, txt, line, document, position);

      if (tag === 'break') {return;}
      if (tag) {return <TagObject>tag;}
      line--;
    }
    return;
  }

  // 获取预览属性
  getPreAttr(document: TextDocument, position: Position): string | undefined {
    let txt = this.getTextBeforePosition(position, document).replace(/"[^'"]*(\s*)[^'"]*$/, '');
    let end = position.character;
    let start = txt.lastIndexOf(' ', end) + 1;
    let parsedTxt = document.getText(new Range(position.line, start, position.line, end));

    return this.matchAttr(this.attrReg, parsedTxt);
  }

  // 匹配属性
  matchAttr(reg: RegExp, txt: string): string {
    let match: any;
    match = reg.exec(txt);
    return !/"[^"]*"/.test(txt) && match && match[1];
  }

  // 属性值开始
  isAttrValueStart(tag: Object | string | undefined, attr: any) {
    return tag && attr;
  }

  // 获取属性值
  getAttrValues(tag: string, attr: string) {
    let attrValues: string[] = []
    // 全局
    if (this.GlobalAttrs[attr]) {
      attrValues = this.GlobalAttrs[attr].values
    }

    if (this.TAGS[tag] && this.TAGS[tag][attr]) {
      attrValues = this.TAGS[tag][attr].values
    }

    return attrValues
  }

   // 获取建议属性值
   getAttrValueSuggestion(tag: string, attr: string): CompletionItem[] {
    let suggestions: any[] = [];
    const values = this.getAttrValues(tag, attr);
    values.forEach((value: string) => {
      suggestions.push({
        sortText: `000${value}`,
        label: value,
        kind: CompletionItemKind.Value
      });
    });
    return suggestions;
  }

  provideCompletionItems(document: TextDocument, position: Position, token: CancellationToken, context: CompletionContext): ProviderResult<CompletionItem[] | CompletionList<CompletionItem>> {
    console.log(token)
    console.log(context)

    // 关闭标签
    if (this.isCloseTag(document, position)) {
      this.getCloseTagSuggestion(document, position);
      return [];
    }

    // 标签、属性
    let tag: TagObject | string | undefined = this.getPreTag(document, position);
    let attr = this.getPreAttr(document, position);
    let word = getCurrentWord(document, position)
    let hasSquareQuote = document.lineAt(position.line).text.includes('<')

    if (tag && attr && this.isAttrValueStart(tag, attr)) {
      // 属性值开始
      return this.getAttrValueSuggestion(tag.text, attr);
    }

    return []
  }
  resolveCompletionItem?(item: CompletionItem, token: CancellationToken): ProviderResult<CompletionItem> {
    console.log('resolveCompletionItem', item)
    console.log(token)
    throw new Error("Method not implemented.");
  }

}