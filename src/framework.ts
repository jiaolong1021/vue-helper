import { CancellationToken, CompletionContext, CompletionItem, CompletionItemProvider, CompletionList, Position, ProviderResult, TextDocument, 
  languages, workspace, Range, window, Selection, CompletionItemKind, SnippetString } from "vscode";
import ExplorerProvider from './explorer'
import * as fs from 'fs'
import * as path from 'path'
import { winRootPathHandle } from './util/util'
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
  public pathAlias = {
    alias: '',
    path: ''
  }

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

   // 属性值建议值
   getAttrValueSuggestion(tag: string, attr: string): CompletionItem[] {
    console.log('tag', tag)
    let suggestions: CompletionItem[] = [];
    const values = this.getAttrValues(tag, attr);
    values.forEach((value: string) => {
      suggestions.push({
        sortText: `000${value}`,
        label: value,
        kind: CompletionItemKind.Value,
        detail: 'vue-helper detail',
        documentation: 'vue-helper document'
      });
    });
    return suggestions;
  }

  // 属性建议值
  getAttrSuggestion(tag: string, document: TextDocument, position: Position) {
    let suggestions: any[] = [];
    let tagAttrs = this.getTagAttrs(tag);

    let preText = this.getTextBeforePosition(position, document);
    let prefix: any = preText.replace(/['"]([^'"]*)['"]$/, '').split(/\s|\(+/).pop();
    // 方法属性
    const type = prefix[0] === '@' ? 'method' : 'attribute';

    tagAttrs.forEach((attr: any) => {
      if (attr.type === type) {
        suggestions.push(this.buildAttrSuggestion(attr))
      }
    });

    for (let attr in this.GlobalAttrs) {
      let gAttr = this.GlobalAttrs[attr]
      if (gAttr.type === type) {
        suggestions.push(this.buildAttrSuggestion({
          name: attr,
          ...gAttr
        }))
      }
    }
    return suggestions;
  }

  buildAttrSuggestion(attr: any) {
    const completionItem = new CompletionItem(attr.name)
    completionItem.sortText = `000${attr.name}`
    completionItem.insertText = attr.name
    completionItem.kind = attr.type === 'method' ? CompletionItemKind.Method : CompletionItemKind.Property
    completionItem.documentation = attr.description
    return completionItem
  }

  // 获取标签包含的属性
  getTagAttrs(tag: string) {
    let attrs: any = []
    if (this.TAGS[tag]) {
      for (const key in this.TAGS[tag]) {
        if (key !== '_self') {
          attrs.push({
            name: key,
            ...this.TAGS[tag][key]
          })
        }
      }
    }
    return attrs
  }

  // 获取props属性值
  getPropAttr(document: TextDocument, tagName: any) {
    let documentText = document.getText()
    // 1. 找出标签所在路径
    let tagNameUpper = tagName.replace(/(-[a-z])/g, (_: any, c: any) => {
      return c ? c.toUpperCase() : '';
    }).replace(/-/gi, '');
    let pathReg = RegExp('import\\\s+(' + tagName + '|' + tagNameUpper + ')\\\s+from\\\s+[\'\"]([^\'\"]*)', 'g');
    let pathRegArr = documentText.match(pathReg);
    if (pathRegArr && pathRegArr.length > 0) {
      let tagPath = pathRegArr[0];
      tagPath = tagPath.replace(/(.*['"])/, '');
      tagPath = tagPath.replace(this.frameworkProvider.pathAlias.alias, this.frameworkProvider.pathAlias.path);
      if (!tagPath.endsWith('.vue')) {
        tagPath += '.vue';
      }
      if (tagPath.indexOf('./') > 0 || tagPath.indexOf('../') > 0) {
        tagPath = path.join(document.fileName, '../', tagPath);
      } else {
        tagPath = path.join(workspace.rootPath || '', tagPath);
      }
      documentText = fs.readFileSync(tagPath, 'utf8');
    } else {
      return;
    }

    // 2. 获取标签文件中的prop属性
    let props: CompletionItem[] = [];
    let scriptIndex = documentText.indexOf('<script');
    if (scriptIndex) {
      let docText = documentText.substr(scriptIndex, documentText.length);
      let propIndex = docText.indexOf('props');
      let propStack = 0;
      if (propIndex) {
        docText = docText.substr(propIndex, docText.length);
        let braceBeforeIndex = docText.indexOf('{');
        let braceAfterIndex = 0;
        if (braceBeforeIndex) {
          ++propStack;
          docText = docText.substr(braceBeforeIndex + 1, docText.length);
        }
        let propText = '';
        while(propStack > 0 && docText.length > 0) {
          braceBeforeIndex = docText.indexOf('{');
          braceAfterIndex = docText.indexOf('}');
          if (braceBeforeIndex === -1) {
            docText = '';
          } else if (braceBeforeIndex < braceAfterIndex) {
            if (propStack === 1) {
              propText += docText.substr(0, braceBeforeIndex);
            }
            ++propStack;
            docText = docText.substr(braceBeforeIndex > 0 ? braceBeforeIndex + 1 : 1, docText.length);
          } else {
            --propStack;
            docText = docText.substr(braceAfterIndex > 0 ? braceAfterIndex + 1 : 1, docText.length);
          }
        }
        let propMatch = propText.match(/\s[\w-]*:/gi);
        if (propMatch && propMatch.length > 0) {
          propMatch.forEach((propItem, propIndex) => {
            propItem = propItem.substr(1, propItem.length - 2);
            propItem = propItem.replace(/([A-Z])/g, (_, c) => {
              return c ? '-' + c.toLowerCase() : '';
            });
            props.push({
              label: propItem,
              sortText: '0' + propIndex,
              insertText: new SnippetString(`:${propItem}="$0"`),
              kind: CompletionItemKind.Property,
              documentation: ''
            });
          });
        }
      }
    }
    let emitReg = documentText.match(/\$emit\(\s?['"](\w*)/g);
    if (emitReg && emitReg.length > 0) {
      for (let i = 0; i < emitReg.length; i++) {
        let emitName = emitReg[i];
        emitName = emitName.replace(/(.*['"])/, '');
        props.push({
          label: emitName,
          sortText: '0' + (props.length + 1),
          insertText: new SnippetString(`@${emitName}="$0"`),
          kind: CompletionItemKind.Method,
          documentation: ''
        });
      }
    }
    return props;
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
    // let word = getCurrentWord(document, position)
    // let hasSquareQuote = document.lineAt(position.line).text.includes('<')
    console.log(tag, attr)

    if (tag && attr && this.isAttrValueStart(tag, attr)) {
      // 属性值开始
      return this.getAttrValueSuggestion(tag.text, attr);
    } else if (tag) {
      // 属性开始
      if (this.TAGS[tag.text]) {
        return this.getAttrSuggestion(tag.text, document, position);
      } else {
        return this.getPropAttr(document, tag.text);
      }
    }

    return []
  }
  resolveCompletionItem?(item: CompletionItem, token: CancellationToken): ProviderResult<CompletionItem> {
    console.log('resolveCompletionItem', item)
    console.log(token)
    throw new Error("Method not implemented.");
  }

}