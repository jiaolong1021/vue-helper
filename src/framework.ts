import { CancellationToken, CompletionContext, CompletionItem, CompletionItemProvider, CompletionList, Position, ProviderResult, TextDocument, 
  languages, workspace, Range, window, Selection, CompletionItemKind, SnippetString, 
  l10n} from "vscode";
import ExplorerProvider from './explorer'
import * as fs from 'fs'
import * as path from 'path'
import { winRootPathHandle, getRelativePath, getCurrentWord } from './util/util'
import { getJsTag, getTag, getAttribute, getGlobalAttribute } from "./frameworks";

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
  public attribute: any = {}
  public jsTag: any = {}
  public tag: any = {}
  public globalAttribute: any = {}
  public tagReg: RegExp = /<([\w-]+)\s+/g;
  public attrReg: RegExp = /(?:\(|\s*)((\w(-)?)*)=['"][^'"]*/;  // 能够匹配 left-right 属性

  constructor(frameworkProvider: FrameworkProvider) {
    this.frameworkProvider = frameworkProvider
    this.vueFiles = this.frameworkProvider.explorer.traverse.search('.vue', '')
    this.attribute = getAttribute(this.frameworkProvider.frameworks, this.frameworkProvider.explorer.tabSize)
    this.tag = getTag(this.frameworkProvider.frameworks, this.frameworkProvider.explorer.tabSize)
    this.jsTag = getJsTag(this.frameworkProvider.frameworks, this.frameworkProvider.explorer.tabSize)
    this.globalAttribute = getGlobalAttribute(this.frameworkProvider.frameworks, this.frameworkProvider.explorer.tabSize)
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
    if (this.globalAttribute[attr]) {
      attrValues = this.globalAttribute[attr].values
    }

    if (this.attribute[tag] && this.attribute[tag][attr]) {
      attrValues = this.attribute[tag][attr].values
    }

    return attrValues
  }

   // 属性值建议值
   getAttrValueSuggestion(tag: string, attr: string): CompletionItem[] {
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

    for (let attr in this.globalAttribute) {
      let gAttr = this.globalAttribute[attr]
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
    completionItem.documentation = l10n.t(attr.description)
    return completionItem
  }

  // 获取标签包含的属性
  getTagAttrs(tag: string) {
    let attrs: any = []
    if (this.attribute[tag]) {
      for (const key in this.attribute[tag]) {
        if (key !== '_self') {
          attrs.push({
            name: key,
            ...this.attribute[tag][key]
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

  // 判断是否是导入
  isImport(document: TextDocument, position: Position) {
    let lineTxt = document.lineAt(position.line).text.trim();
    return /^\s*import.*/.test(lineTxt);
  }

  // 导入建议
  importSuggestion(document: TextDocument, position: Position) {
    let search = document.lineAt(position.line).text.trim();
    search = search.replace(/^import/, '').trim();
    let suggestions: CompletionItem[] = [];
    if (search) {
      let files = this.frameworkProvider.explorer.traverse.search('', search);
      let pathAlias = this.frameworkProvider.pathAlias
      files.forEach(vf => {
        let filePath = '';
        if (pathAlias.alias) {
          filePath = vf.path
        } else {
          filePath = getRelativePath(document.uri.path, path.join(this.frameworkProvider.explorer.projectRootPath, vf.path))
        }
        let camelName = vf.name
        let insertPath = filePath
        if (filePath.endsWith('.ts')) {
          insertPath = filePath.substring(0, filePath.length - 3)
        }
        suggestions.push({
          label: vf.name,
          sortText: `0${vf.name}`,
          insertText: new SnippetString(`\${1:${camelName}} from '${insertPath}'`),
          kind: CompletionItemKind.Reference,
          detail: vf.name,
          documentation: `import ${camelName} from ${filePath}`
        });
      });
    }
    return suggestions;
  }

  // vue文件只在template里面提示，已script作为标记
  notInTemplate(document: TextDocument, position: Position): boolean {
    let line = position.line;
    while (line) {
      if (/^\s*<script.*>\s*$/.test(<string>document.lineAt(line).text)) {
        return true;
      }
      line--;
    }
    return false;
  }

   // 编译建议标签
   buildTagSuggestion(tag: string, tagVal: any, id: number): CompletionItem {
    return {
      label: tag,
      sortText: `00${id}${tag}`,
      insertText: new SnippetString(tagVal),
      kind: CompletionItemKind.Snippet,
      detail: '',
      documentation: ''
    };
  }

  // 获取js代码提示
  getTagJsSuggestion() {
    let suggestions: any[] = [];
    let id = 1;
    try {
      for (let tag in this.jsTag) {
        const tagItem = this.jsTag[tag]
        suggestions.push({
          label: tag,
          sortText: `00${id}${tag}`,
          insertText: new SnippetString(tagItem),
          kind: CompletionItemKind.Snippet,
          detail: 'vue-helper',
          documentation: tagItem
        })
        id++;
      }
    } catch (error) {
      console.log(error)
    }
    return suggestions
  }

  // 添加工程内vue组件提示
  addLocalComponentSuggestions() {
    let suggestions: CompletionItem[] = [];
    for (let i = 0; i < this.vueFiles.length; i++) {
      const vf = this.vueFiles[i];
      suggestions.push({
        label: vf.name,
        sortText: `0${i}${vf.name}`,
        insertText: new SnippetString(`${vf.name}$0></${vf.name}>`),
        kind: CompletionItemKind.Folder,
        detail: 'vue-helper',
        documentation: `import ${vf.name} from '${vf.path}'`,
        command: { command: 'vue-helper.funcEnhance', title: 'vue-helper: funcEnhance' }
      });
    }
    return suggestions
  }
  

  // 标签提示项
  getTagSuggestion() {
    let suggestions: CompletionItem[] = this.addLocalComponentSuggestions();
    let id = 1;

    try {
      for (let tag in this.tag) {
        suggestions.push(this.buildTagSuggestion(tag, this.tag[tag], id));
        id++;
      }
    } catch (error) {
      console.log(error)
    }
    return suggestions;
  }

  getElementTagLabelSuggestion() {
    let suggestions: CompletionItem[] = [];
    let id = 1;
    // 添加vue组件提示
    for (let i = 0; i < this.vueFiles.length; i++) {
      const vf = this.vueFiles[i];
      suggestions.push({
        label: vf.name,
        sortText: `0${i}${vf.name}`,
        insertText: new SnippetString(`${vf.name}$0></${vf.name}>`),
        kind: CompletionItemKind.Folder,
        detail: 'vue-helper',
        documentation: `import ${vf.name} from '${vf.path}'`,
        command: { command: 'vue-helper.funcEnhance', title: 'vue-helper: funcEnhance' }
      });
    }

    try {
      let labels: string[] = []
      for (let tag in this.attribute) {
        let label = tag.replace(/:.*/gi, '')
        if (!labels.includes(label)) {
          labels.push(label)
          suggestions.push({
            label: label,
            sortText: `00${id}${label}`,
            insertText: new SnippetString(`${label}$0></${label}>`),
            kind: CompletionItemKind.Snippet,
            detail: `vue-helper`,
            documentation: this.attribute[tag]._self.description
          });
          id++;
        }
      }
    } catch (error) {
      console.log(error)
    }
    return suggestions;
  }

  provideCompletionItems(document: TextDocument, position: Position, _token: CancellationToken, _context: CompletionContext): ProviderResult<CompletionItem[] | CompletionList<CompletionItem>> {
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
      console.log(1)
      // 属性值开始
      return this.getAttrValueSuggestion(tag.text, attr);
    } else if (tag) {
      console.log(2)
      // 属性开始
      if (this.attribute[tag.text]) {
        // 框架属性
        return this.getAttrSuggestion(tag.text, document, position);
      } else {
        return this.getPropAttr(document, tag.text);
      }
    } else if (this.isImport(document, position)) {
      console.log(3)
      return this.importSuggestion(document, position);
    } else if (word[0] === 'e' || word[0] === 'a') {
      // 标签
      console.log(4)
      return this.notInTemplate(document, position) ? this.getTagJsSuggestion() : this.getTagSuggestion()
    } else if (word.includes('v')) {
      console.log(5)
      return this.getTagSuggestion()
    } else if (!tag && hasSquareQuote) {
      console.log(6)
      return this.notInTemplate(document, position) ? [] : this.getElementTagLabelSuggestion()
    }

    return []
  }
  // resolveCompletionItem?(_item: CompletionItem, _token: CancellationToken): ProviderResult<CompletionItem> {
  //   console.log('resolveCompletionItem')
  //   throw new Error("Method not implemented.");
  // }

}