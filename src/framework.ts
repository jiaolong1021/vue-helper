import { CancellationToken, CompletionContext, CompletionItem, CompletionItemProvider, CompletionList, Position, ProviderResult, TextDocument, 
  languages, workspace, Range, window, Selection, CompletionItemKind, SnippetString, 
  l10n, HoverProvider, Hover, TextLine, DefinitionProvider, Definition, Uri, Location } from "vscode";
import ExplorerProvider from './explorer'
import * as fs from 'fs'
import * as path from 'path'
import { winRootPathHandle, getRelativePath, getCurrentWord, getWord } from './util/util'
import { getJsTag, getTag, getAttribute, getGlobalAttribute, getDocument } from "./frameworks";
const paramCamse = require('param-case')
const glob = require('glob')

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
  public vueFiles: any = []

  constructor(explorer: ExplorerProvider) {
    this.explorer = explorer
    try {
      const pkg = fs.readFileSync(winRootPathHandle(path.join(this.explorer.projectRootPath, 'package.json')), 'utf-8')
      pkg.includes('element-plus') && this.frameworks.push('element-plus')
      pkg.includes('element-ui') && this.frameworks.push('element-ui')
      pkg.includes('ant-design-vue') && this.frameworks.push('ant-design-vue')
      this.vueFiles = this.explorer.traverse.search('.vue', '')
      if (workspace.workspaceFolders) {
        const watcher = workspace.createFileSystemWatcher('**/*.vue')
        watcher.onDidCreate(() => { this.vueFiles = this.explorer.traverse.search('.vue', '') })
        watcher.onDidDelete(() => { this.vueFiles = this.explorer.traverse.search('.vue', '') })
      }
    } catch (error) {
    }
  }

  register() {
    this.explorer.context.subscriptions.push(languages.registerCompletionItemProvider(['vue', 'javascript', 'typescript', 'html', 'wxml'], new FrameworkCompletionItemProvider(this), '', ':', '<', '"', "'", '/', '@', '(', '>', '{'))
    this.explorer.context.subscriptions.push(languages.registerHoverProvider(['vue', 'wxml'], new FrameworkHoverProvider(this)))
    this.explorer.context.subscriptions.push(languages.registerDefinitionProvider(['vue', 'javascript', 'html', 'wxml'], new vueHelperDefinitionProvider(this)))
  }

}

class FrameworkCompletionItemProvider implements CompletionItemProvider {
  public frameworkProvider: FrameworkProvider
  public attribute: any = {}
  public jsTag: any = {}
  public tag: any = {}
  public globalAttribute: any = {}
  public tagReg: RegExp = /<([\w-]+)\s+/g;
  public attrReg: RegExp = /(?:\(|\s*)((\w(-)?)*)=['"][^'"]*/;  // 能够匹配 left-right 属性

  constructor(frameworkProvider: FrameworkProvider) {
    this.frameworkProvider = frameworkProvider
    this.attribute = getAttribute(this.frameworkProvider.frameworks, this.frameworkProvider.explorer.tabSize)
    this.tag = getTag(this.frameworkProvider.frameworks, this.frameworkProvider.explorer.tabSize)
    this.jsTag = getJsTag(this.frameworkProvider.frameworks, this.frameworkProvider.explorer.tabSize)
    this.globalAttribute = getGlobalAttribute(this.frameworkProvider.frameworks, this.frameworkProvider.explorer.tabSize)
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
        detail: 'vue-helper',
        kind: CompletionItemKind.Value,
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
    completionItem.detail = 'vue-helper'
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
      detail: 'vue-helper',
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
    for (let i = 0; i < this.frameworkProvider.vueFiles.length; i++) {
      const vf = this.frameworkProvider.vueFiles[i];
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
    for (let i = 0; i < this.frameworkProvider.vueFiles.length; i++) {
      const vf = this.frameworkProvider.vueFiles[i];
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
            detail: `vue-helper`
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
      console.log(2, tag.text)
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

// 文档通过 hover 形式查看
class FrameworkHoverProvider implements HoverProvider {
  public frameworkProvider: FrameworkProvider
  public document: any

  constructor(frameworkProvider: FrameworkProvider) {
    this.frameworkProvider = frameworkProvider
    this.document = getDocument(this.frameworkProvider.frameworks, this.frameworkProvider.explorer.tabSize)
  }

  // 获取属性所属标签
  public getTag(document: any, position: any): String {
    let line = position.line;
    let tagName = '';

    while(line > 0 && !tagName) {
      let lineInfo: TextLine = document.lineAt(line);
      let text = lineInfo.text.trim();
      // 本行则获取光标位置前文本
      if(line === position.line) {
        text = text.substring(0, position.character);
      }
      let txtArr = text.match(/<[^(>/)]+/gim);
      if(txtArr) {
        for (let i = (txtArr.length - 1); i >= 0; i--) {
          if(txtArr[i][0] === '<' && txtArr[i][1] !== '/') {
            if(txtArr[i].indexOf(' ') !== -1) {
              tagName = txtArr[i].replace(/^<(\S*)(\s.*|\s*)/gi, '$1');
            } else {
              tagName = txtArr[i].replace(/^<(.*)/gi, '$1');
            }
            break;
          }
        }
      }
      --line;
    }
    return tagName;
  }
  provideHover(document: TextDocument, position: Position): ProviderResult<import("vscode").Hover> {
    let word = getWord(document, position, [' ', '<', '>', '"', '\'', '.', '\\', "=", ":"])

    // tag标签遍历
    if(this.document[word.selectText]) {
      return new Hover(this.document[word.selectText]);
    }

    return null
  }
}

// 跳转到定义位置
export class vueHelperDefinitionProvider implements DefinitionProvider {
  public frameworkProvider: FrameworkProvider

  constructor(frameworkProvider: FrameworkProvider) {
    this.frameworkProvider = frameworkProvider
  }

  public VUE_ATTR: any = {
    props: 1,
    computed: 2,
    methods: 3,
    watch: 4,
    beforeCreate: 5,
    created: 6,
    beforeMount: 7,
    mounted: 8,
    beforeUpdate: 9,
    updated: 10,
    activated: 11,
    deactivated: 12,
    beforeDestroy: 13,
    destroyed: 14,
    directives: 15,
    filters: 16,
    components: 17,
    data: 18
  }

  /**
   * 判断是文件内跳转还是文件外跳转
   */
  getDefinitionPosition(lineText: string) {
    const pathRegs = [
      /import\s+.*\s+from\s+['"](.*)['"]/,
      /import\s*[^'"]*\(['"](.*)['"]\)[^'"]*/,
      /.*require\s*\([^'"]*['"](.*)['"][^'"]*\)/,
      /import\s+['"](.*)['"]/,
      /import\s*\([^'"]*(?:\/\*.*\*\/)\s*['"](.*)['"][^'"]\)*/
    ];
    let execResult: RegExpMatchArray | null;
    for (const pathReg of pathRegs) {
      execResult = pathReg.exec(lineText);
      if (execResult && execResult[1]) {
        const filePath = execResult[1];
        return {
          path: filePath
        }
      }
    }
  }

  /**
   * 获取框架
   * @param plugin 数组则是获取框架，字符串则为获取插件
   */
  async getPlugin(plugin: any) {
    return await new Promise((resolve, reject) => {
      fs.readFile(workspace.rootPath + path.sep + 'package.json', 'utf8', (err, data) => {
        if (err) reject(err)
        // 数组则是获取框架
        let ret = ''
        let p: any = {}
        try {
          p = JSON.parse(data)
        } catch(e) {
          console.log('e:', e)
        }
        if (Array.isArray(plugin)) {
          let framework = plugin
          for (let i = 0; i < framework.length; i++) {
            const frame = framework[i]
            if ((p.dependencies && p.dependencies[frame]) || (p.devDependencies && p.devDependencies[frame])) {
              ret = frame
            }
          }
        } else {
          let pluginArr = plugin.split('/')
          if (pluginArr.length === 1 && (p.dependencies && p.dependencies[plugin]) || (p.devDependencies && p.devDependencies[plugin])) {
            ret = plugin
          } else if (pluginArr.length > 1 &&  (p.dependencies && p.dependencies[pluginArr[0]]) || (p.devDependencies && p.devDependencies[pluginArr[0]])) {
            ret = plugin
          }
        }
        
        if (ret) {
          resolve(ret)
        } else {
          resolve('')
        }
      })
    })
  }

  async readDir(dir:string, selectText: string, frame: string) {
    return await new Promise((resolve, reject) => {
      fs.readdir(dir, 'utf8', (err, files) => {
        if (err) reject(err)
        if (files.indexOf(selectText.toLowerCase()) !== -1) {
          if (frame === 'iview') {
            let prePath = dir + path.sep + selectText.toLowerCase() + path.sep
            let vuePath = prePath + selectText.toLowerCase() + '.vue'
            let indexPath = prePath + 'index.js'
            if (fs.existsSync(vuePath)) {
              resolve(vuePath)
            } else if (fs.existsSync(indexPath)) {
              resolve(indexPath)
            } else {
              resolve('')
            }
          } else if (frame === 'element-ui') {
            let prePath = dir + path.sep + selectText.replace(/^el-/gi, '') + path.sep
            let mainPath = prePath + 'src' + path.sep + 'main.vue'
            let vuePath = prePath + 'src' + path.sep + selectText + '.vue'
            let indexPath = prePath + 'index.js'
            if (fs.existsSync(mainPath)) {
              resolve(mainPath)
            } else if (fs.existsSync(vuePath)) {
              resolve(vuePath)
            } else if (fs.existsSync(indexPath)) {
              resolve(indexPath)
            } else {
              resolve('')
            }
          }
        } else {
          resolve('')
        }
      })
    })
  }

  /**
  * 在node_modules目录下去查找
  * @param selectText 
  */
  async definitionPlugin(selectText: string) {
    // 获取框架
    let frame: any = await this.getPlugin(['iview', 'element-ui'])
    if (frame === 'iview') {
      return await this.readDir(workspace.rootPath + path.sep + 'node_modules' + path.sep + 'iview' + path.sep + 'src' + path.sep + 'components', paramCamse(selectText), frame)
    } else if (frame === 'element-ui') {
      return await this.readDir(workspace.rootPath + path.sep + 'node_modules' + path.sep + 'element-ui' + path.sep + 'packages', paramCamse(selectText).replace(/^el-/gi, ''), frame)
    } else {
      return ''
    }
  }

  /**
   * 获取node_modules下package.json文件中的main字段
   * @param path 
   */
  async getMain(rootPath:string) {
    return await new Promise((resolve, reject) => {
      fs.readFile(rootPath + 'package.json', 'utf8', (err, data) => {
        if (err) reject(err)
        let p: any = {}
        try {
          p = JSON.parse(data)
        } catch(e) {
          console.log('e:', e)
        }
        if (p.main) {
          resolve(p.main)
        } else {
          resolve('')
        }
      })
    })
  }

  /**
   * 文件外跳转
   * 处理方式
   * 1. 根据文件目录查询是否存在相应文件
   * 2. 通过package.json判断是否存在安装插件
   * @param document 
   * @param position 
   * @param line 
   */
  async definitionOutFile(document: TextDocument, file: any) {
    let filePath = file.path

    // 1. 根据文件目录查询是否存在相应文件
    filePath = filePath.replace(this.frameworkProvider.explorer.prefix.alias, this.frameworkProvider.explorer.prefix.path)
    
    // 文件存在后缀，则直接查找
    if (/(.*\/.*|[^.]+)\..*$/gi.test(filePath)) {
      let tempFile = path.resolve(document.uri.fsPath || '', '../', filePath)
      if (fs.existsSync(tempFile)) {
        return Promise.resolve(new Location(Uri.file(tempFile), new Position(0, 0)))
      }
    } else {
      // 添加后缀，判断文件是否存在
      const postfix = ['vue', 'js', 'css', 'scss', 'less']
      for (let i = 0; i < postfix.length; i++) {
        const post = postfix[i]
        // 相对路径处理
        let tempFile = path.resolve(document.uri.fsPath || '', '../', filePath)
        if (tempFile.endsWith('/')) {
          tempFile = tempFile + 'index.' + post
          if (fs.existsSync(tempFile)) {
            return Promise.resolve(new Location(Uri.file(tempFile), new Position(0, 0)))
          }
        } else {
          let indexFile = tempFile + path.sep + 'index.' + post
          tempFile += '.' + post
          if (fs.existsSync(tempFile)) {
            return Promise.resolve(new Location(Uri.file(tempFile), new Position(0, 0)))
          }
          // index文件判断
          if(fs.existsSync(indexFile)) {
            return Promise.resolve(new Location(Uri.file(indexFile), new Position(0, 0)))
          }
        }
      }
    }

    // 2. 通过package.json判断是否存在安装插件, 插件可能有目录，获取最前一节作为插件进行判断
    let plugin = await this.getPlugin(filePath)
    let pluginRootPath = workspace.rootPath + path.sep + 'node_modules' + path.sep + plugin + path.sep
    let pluginOwn = workspace.rootPath + path.sep + 'node_modules' + path.sep + plugin + '.js'
    let pluginPath = pluginRootPath + 'index.js'
    if (fs.existsSync(pluginOwn)) {
      return Promise.resolve(new Location(Uri.file(pluginOwn), new Position(0, 0)))
    } else if (fs.existsSync(pluginPath)) {
      return Promise.resolve(new Location(Uri.file(pluginPath), new Position(0, 0)))
    }
    let main = await this.getMain(pluginRootPath)
    if (main) {
      return Promise.resolve(new Location(Uri.file(pluginRootPath + main), new Position(0, 0)))
    }

    return Promise.resolve(null)
  }

  /**
   * 文件内跳转
   */
  async definitionInFile(document: TextDocument, position: Position) {
    const word = getWord(document, position, [' ', '<', '>', '"', '\'', '.', '\\', "=", ":", "@", "(", ")", "[", "]", "{", "}", ",", "!"])

    // 查找字符串位置
    let pos = 0
    let begin = false
    let lineText = ''
    let braceLeftCount = 0
    let attr = ''
    // 搜索类型，主要用于判断在哪个属性中去搜索内容，目前主要用于区分是否是组件
    let searchType = ''
    // 判断选择文件搜索类型，是否是标签
    if (word.startText === '<') {
      searchType = 'components'
    }
    while(pos < document.lineCount && !/^\s*<\/script>\s*$/g.test(lineText)) {
      lineText = document.lineAt(++pos).text
      // 从script标签开始查找
      if(!begin) {
        if(/^\s*<script.*>\s*$/g.test(lineText)) {
          begin = true
        }
        continue;
      }
      // 判断现在正在对哪个属性进行遍历
      let keyWord = lineText.replace(/\s*(\w*)\s*(\(\s*\)|:|(:\s*function\s*\(\s*\)))\s*{\s*/gi, '$1')
      // braceLeftCount <= 3 用于去除data属性中包含vue其他属性从而不能定义问题
      if(this.VUE_ATTR[keyWord] !== undefined && braceLeftCount === 0) {
        attr = keyWord
        braceLeftCount = 0
      }

      if (searchType === 'components') {
        /**
         * component组件跳转处理方式
         * 1. 文件内import，require引入判断
         * 2. iview, element组件判断
         */
        // attr存在，说明已遍历过import内容
        let tag = word.selectText.toLowerCase().replace(/-/gi, '')
        if (attr) {
          // 全局组件
          for (let i = 0; i < this.frameworkProvider.vueFiles.length; i++) {
            const vueFile = this.frameworkProvider.vueFiles[i];
            const vueFileName = vueFile.name.toLowerCase().replace(/-/gi, '')
            if (vueFileName === tag) {
              return Promise.resolve(new Location(Uri.file(path.join(this.frameworkProvider.explorer.projectRootPath, vueFile.path.replace(this.frameworkProvider.explorer.prefix.alias, this.frameworkProvider.explorer.prefix.path))), new Position(0, 0)))
            }
          }

          let retPath: any = await this.definitionPlugin(word.selectText)
          if (retPath) {
            return Promise.resolve(new Location(Uri.file(retPath), new Position(0, 0)))
          }
          break;
        } else {
          if (lineText.toLowerCase().includes(tag) && (lineText.trim().indexOf('import') === 0 || lineText.trim().indexOf('require') === 0)) {
            return this.definitionOutFile(document, this.getDefinitionPosition(lineText))
          }
        }
      } else {
        // data属性匹配, data具有return，单独处理
        let braceLeftList = lineText.match(/{/gi)
        let braceRightList = lineText.match(/}/gi)
        if(attr === 'data' && braceLeftCount >= 2) {
          let matchName = lineText.replace(/\s*(\w+):.+/gi, '$1')
          if(word.selectText === matchName && braceLeftCount === 2) {
            return Promise.resolve(new Location(document.uri, new Position(pos, lineText.indexOf(matchName) + matchName.length)))
          }
          let braceLeft = braceLeftList ? braceLeftList.length : 0
          let braceRight = braceRightList ? braceRightList.length : 0
          braceLeftCount += braceLeft - braceRight
        } else if(attr) {
          let matchName = lineText.replace(/\s*(async\s*)?(\w*)\s*(:|\().*/gi, '$2')
          if(word.selectText === matchName && braceLeftCount === 1) {
            return Promise.resolve(new Location(document.uri, new Position(pos, lineText.indexOf(matchName) + matchName.length)))
          }
          let braceLeft = braceLeftList ? braceLeftList.length : 0
          let braceRight = braceRightList ? braceRightList.length : 0
          braceLeftCount += braceLeft - braceRight
        }

        // data取return的属性值
        if(attr === 'data') {
          if(/\s*return\s*{\s*/gi.test(lineText)) {
            braceLeftCount = 2
          }
        }
      }
    }

    // 全目录搜索看是否存在改文件
    let files = glob.sync(workspace.rootPath + '/!(node_modules)/**/*.vue')
    for (let i = 0; i < files.length; i++) {
      const vueFile = files[i];
      let vueChangeFile = vueFile.replace(/-/gi, '').toLowerCase().replace(/\.vue$/, '')
      if (vueChangeFile.endsWith('/' + word.selectText.toLowerCase().replace(/-/gi, ''))) {
        return Promise.resolve(new Location(Uri.file(vueFile), new Position(0, 0)))
      }
    }
   
    return Promise.resolve(null);
  }

  provideDefinition(document: TextDocument, position: Position, _token: CancellationToken): ProviderResult<Definition> {
    let docText = document.getText()
    // vue2跳转
    // 获取定义word
    const line = document.lineAt(position.line)
    // // 判断是文件内跳转还是文件外跳转
    let file = this.getDefinitionPosition(line.text)
    if (file) {
      return this.definitionOutFile(document, file)
    } else {
      if (!(docText.includes('lang="ts"') || this.frameworkProvider.explorer.isTs)) {
        return this.definitionInFile(document, position)
      }
    }
    return []
  }
}