import {
  window, commands, ViewColumn, Disposable,
  Event, Uri, CancellationToken, TextDocumentContentProvider,
  EventEmitter, workspace, CompletionItemProvider, ProviderResult,
  TextDocument, Position, CompletionItem, CompletionList, CompletionItemKind,
  SnippetString, Range, HoverProvider, Hover, Selection, TextLine, DefinitionProvider, Definition, Location
} from 'vscode';
import Resource from './resource';
import TAGS from './vue-tags'
import ATTRS from './vue-attributes'
import Documents from './documents'
import DocumentsAttr from './documents-attr'
import { activate } from './extension';

const prettyHTML = require('pretty');
const Path = require('path');
const fs = require('fs');

export const SCHEME = 'element-helper';

export interface Query {
  keyword: string
};

export interface TagObject {
  text: string,
  offset: number
};

export function encodeDocsUri(query?: Query): Uri {
  return Uri.parse(`${SCHEME}://search?${JSON.stringify(query)}`);
}

export function decodeDocsUri(uri: Uri): Query {
  return <Query>JSON.parse(uri.query);
}

export class App {
  private _disposable: Disposable;
  public WORD_REG: RegExp = /(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/gi;

  // 获取光标选中范围内容
  getSeletedText() {
    let editor = window.activeTextEditor;

    if (!editor) { return; }

    let selection = editor.selection;

    if (selection.isEmpty) {
      let text = [];
      let range = editor.document.getWordRangeAtPosition(selection.start, this.WORD_REG);

      return editor.document.getText(range);
    } else {
      return editor.document.getText(selection);
    }
  }

  // 获取本行内容
  getLineText() {
    let editor = window.activeTextEditor;
    if (!editor) { return; }
    let txt = editor.document.lineAt(editor.selection.anchor.line).text
    if(editor.document.lineCount <= editor.selection.anchor.line + 1) { return; }
    let nextLineTxt = editor.document.lineAt(editor.selection.anchor.line + 1).text
    let baseEmpty = txt.replace(/(\s)\S.*/gi, '$1')
    let replaceTxt = ' {\n' + baseEmpty + '\t\n' + baseEmpty +  '}'
    // 本行全是空
    if(/^\s*$/gi.test(txt) || txt === '') {
      replaceTxt = 'name (params)' + replaceTxt
    } else if(txt.indexOf(')') === -1) {
      replaceTxt = ' (params)' + replaceTxt
    }
    // 判断下一行是否是单行注释
    if(/\s*\/\/\s+.*/gi.test(nextLineTxt)) {
      if(editor.document.lineCount <= editor.selection.anchor.line + 2) { return; }
      nextLineTxt = editor.document.lineAt(editor.selection.anchor.line + 2).text
    }
    // 下一行是一个函数
    if (/.*(.*).*{.*/gi.test(nextLineTxt)) {
      replaceTxt += ','
    }
    editor.edit((editBuilder) => {
      editBuilder.insert(new Position(editor.selection.anchor.line, txt.length + 1), replaceTxt);
    });
    let newPosition = editor.selection.active.translate(1, (baseEmpty + '\t').length)
    editor.selection = new Selection(newPosition, newPosition);
  }

  // backspace删除处理
  deleteComplete() {
    let editor = window.activeTextEditor;
    if(!editor) { return; }
    // 多选择点删除处理
    if(window.activeTextEditor.selections.length > 1) {
      let selections = window.activeTextEditor.selections
      let selectionList: Array<Selection> = []
      for (let index = 0; index < selections.length; index++) {
        const selection = selections[index];
        if(selection.start.line === selection.end.line && selection.start.character === selection.end.character) {
          if(selection.anchor.character > 0) {
            selectionList.push(new Selection(new Position(selection.anchor.line, selection.anchor.character - 1), selection.anchor))
          } else if (selection.anchor.line > 0) {
            let len = editor.document.lineAt(selection.anchor.line - 1).text.length
            selectionList.push(new Selection(new Position(selection.anchor.line - 1, len), selection.anchor))
          }
        } else {
          selectionList.push(selection)
        }
      }
      editor.edit((editBuilder) => {
        for (let i = 0; i < selectionList.length; i++) {
          editBuilder.delete(selectionList[i]) 
        }
      })
      return
    }
    if(window.activeTextEditor.selection.start.line === window.activeTextEditor.selection.end.line 
      && window.activeTextEditor.selection.start.character === window.activeTextEditor.selection.end.character) {
      // 首行
      if(editor.selection.anchor.line === 0) {
        if(editor.selection.anchor.character > 0) {
          editor.edit((editBuilder) => {
            editBuilder.delete(new Selection(new Position(editor.selection.anchor.line, editor.selection.anchor.character - 1), editor.selection.anchor))
          })
        }
      } else {
        let isLineEmpty = editor.document.lineAt(editor.selection.anchor.line).text.trim() === ''
        // 整行都是空格
        if(isLineEmpty) {
          let preText = ''
          let line = editor.selection.anchor.line
          while(preText.trim() === '' && line >= 0) {
            line -= 1
            preText = editor.document.lineAt(line).text
          }
          editor.edit((editBuilder) => {
            editBuilder.delete(new Selection(new Position(line, preText.length), editor.selection.anchor))
          })
        } else {
          let startPosition
          let endPosition: Position = editor.selection.anchor
          let preLineText = editor.document.getText(new Range(new Position(editor.selection.anchor.line, 0), editor.selection.anchor))
          if(editor.selection.anchor.character === 0 || preLineText.trim() === '') {
            startPosition = new Position(editor.selection.anchor.line - 1, editor.document.lineAt(editor.selection.anchor.line - 1).text.length)
          } else {
            startPosition = new Position(editor.selection.anchor.line, editor.selection.anchor.character - 1)
            // 对{}, (), [], '', "", <>进行成对删除处理
            let txt = editor.document.getText(new Range(new Position(editor.selection.anchor.line, editor.selection.anchor.character - 1), editor.selection.anchor))
            if(editor.document.lineAt(editor.selection.anchor.line).text.length > editor.selection.anchor.character) {
              let nextTxt = editor.document.getText(new Range(editor.selection.anchor, new Position(editor.selection.anchor.line, editor.selection.anchor.character + 1)))
              if((txt === '{' && nextTxt === '}') 
              || (txt === '(' && nextTxt === ')') 
              || (txt === '\'' && nextTxt === '\'') 
              || (txt === '"' && nextTxt === '"') 
              || (txt === '[' && nextTxt === ']') 
              || (txt === '<' && nextTxt === '>')) {
                endPosition = new Position(editor.selection.anchor.line, editor.selection.anchor.character + 1)
              }
            }
          }
          editor.edit((editBuilder) => {
            editBuilder.delete(new Selection(startPosition, endPosition))
          })
        }
      }
    } else {
      // 选择块
      editor.edit((editBuilder) => {
        editBuilder.delete(window.activeTextEditor.selection)
      })
    }
  }

  setConfig() {
    // https://github.com/Microsoft/vscode/issues/24464
    const config = workspace.getConfiguration('editor');
    const quickSuggestions = config.get('quickSuggestions');
    if (!quickSuggestions["strings"]) {
      config.update("quickSuggestions", { "strings": true }, true);
    }
  }

  openHtml(uri: Uri, title) {
    return commands.executeCommand('vscode.previewHtml', uri, ViewColumn.Two, title)
      .then((success) => {
      }, (reason) => {
        window.showErrorMessage(reason);
      });
  }

  openDocs(query?: Query, title = 'Element-helper', editor = window.activeTextEditor) {
    this.openHtml(encodeDocsUri(query), title)
  }

  dispose() {
    this._disposable.dispose();
  }
}

const HTML_CONTENT = (query: Query) => {
  const filename = Path.join(__dirname, '..', '..', 'package.json');
  const data = fs.readFileSync(filename, 'utf8');
  const content = JSON.parse(data);
  const versions = content.contributes.configuration.properties['element-helper.version']['enum'];
  const lastVersion = versions[versions.length - 1];
  const config = workspace.getConfiguration('element-helper');
  const language = <string>config.get('language');
  const version = config.get('version');

  let versionText = `${version}/`;
  // if (version === lastVersion) {
  //   versionText = '';
  // }

  let opts = ['<select class="docs-version">'];
  let selected = '';
  versions.forEach(item => {
    selected = item === version ? ' selected="selected"' : '';
    // if language is spanish, verison < 2.0 no documents
    if (language === 'es' && item < '2.0') {
    } else {
      opts.push(`<option${selected} value ="${item}">${item}</option>`);
    }
  });
  opts.push('</select>');
  const html = opts.join('');

  const path = query.keyword;
  const style = fs.readFileSync(Path.join(Resource.RESOURCE_PATH, 'style.css'), 'utf-8');

  const componentPath = `${versionText}main.html#/${language}/component/${path}`;
  const href = Resource.ELEMENT_HOME_URL + componentPath.replace('main.html', 'index.html');
  const iframeSrc = 'file://' + Path.join(Resource.ELEMENT_PATH, componentPath).split(Path.sep).join('/');

  const notice = ({
    'zh-CN': `版本：${html}，在线示例请在浏览器中<a href="${href}">查看</a>`,
    'en-US': `Version: ${html}, view online examples in <a href="${href}">browser</a>`,
    'es': `Versión: ${html}, ejemplo en línea en la <a href="${href}">vista</a> del navegador`
  })[language];

  return `
  <style type="text/css">${style}</style>
  <body class="element-helper-docs-container">
  <div class="element-helper-move-mask"></div>
  <div class="element-helper-loading-mask">
    <div class="element-helper-loading-spinner">
      <svg viewBox="25 25 50 50" class="circular">
        <circle cx="50" cy="50" r="20" fill="none" class="path"></circle>
      </svg>
    </div>
  </div>
  <div class="docs-notice">${notice}</div>
  <iframe id="docs-frame" src="${iframeSrc}"></iframe>
  <script>
    var iframe = document.querySelector('#docs-frame');
    var link = document.querySelector('.docs-notice a');
    window.addEventListener('message', (e) => {
      e.data.loaded && (document.querySelector('.element-helper-loading-mask').style.display = 'none');
      if(e.data.hash) {
        var pathArr = link.href.split('#');
        pathArr.pop();
        pathArr.push(e.data.hash);
        link.href = pathArr.join('#');
        var srcArr = iframe.src.split('#');
        srcArr.pop();
        srcArr.push(e.data.hash);
        iframe.src = srcArr.join('#');
      }
    }, false);
    document.querySelector('.docs-version').addEventListener('change', function() {
      var version = this.options[this.selectedIndex].value;
      var originalSrc = iframe.src;
      var arr = originalSrc.split(new RegExp('/?[0-9.]*/main.html'));
      iframe.src = arr.join('/' + version + '/main.html');
      link.href = link.href.replace(new RegExp('/?[0-9.]*/index.html'), '/' + version + '/index.html');
    }, false);
  </script>
  </body>`;
};

export class ElementDocsContentProvider implements TextDocumentContentProvider {
  private _onDidChange = new EventEmitter<Uri>();

  get onDidChange(): Event<Uri> {
    return this._onDidChange.event;
  }

  public update(uri: Uri) {
    this._onDidChange.fire(uri);
  }

  provideTextDocumentContent(uri: Uri, token: CancellationToken): string | Thenable<string> {
    return HTML_CONTENT(decodeDocsUri(uri));
  }
}

export class ElementCompletionItemProvider implements CompletionItemProvider {
  private _document: TextDocument;
  private _position: Position;
  private tagReg: RegExp = /<([\w-]+)\s+/g;
  private attrReg: RegExp = /(?:\(|\s*)((\w(-)?)*)=['"][^'"]*/;  // 能够匹配 left-right 属性
  private tagStartReg: RegExp = /<([\w-]*)$/;
  private size: number;
  private quotes: string;

  // 获取预览标签
  getPreTag(): TagObject | undefined {
    let line = this._position.line;
    let tag: TagObject | string;
    let txt = this.getTextBeforePosition(this._position);

    while (this._position.line - line < 10 && line >= 0) {
      if (line !== this._position.line) {
        txt = this._document.lineAt(line).text;
      }
      tag = this.matchTag(this.tagReg, txt, line);

      if (tag === 'break') return;
      if (tag) return <TagObject>tag;
      line--;
    }
    return;
  }

  // 获取预览属性
  getPreAttr(): string | undefined {
    let txt = this.getTextBeforePosition(this._position).replace(/"[^'"]*(\s*)[^'"]*$/, '');
    let end = this._position.character;
    let start = txt.lastIndexOf(' ', end) + 1;
    let parsedTxt = this._document.getText(new Range(this._position.line, start, this._position.line, end));

    return this.matchAttr(this.attrReg, parsedTxt);
  }

  // 匹配属性
  matchAttr(reg: RegExp, txt: string): string {
    let match: RegExpExecArray;
    match = reg.exec(txt);
    return !/"[^"]*"/.test(txt) && match && match[1];
  }

  // 匹配标签
  matchTag(reg: RegExp, txt: string, line: number): TagObject | string {
    let match: RegExpExecArray;
    let arr: TagObject[] = [];

    if (/<\/?[-\w]+[^<>]*>[\s\w]*<?\s*[\w-]*$/.test(txt) || (this._position.line === line && (/^\s*[^<]+\s*>[^<\/>]*$/.test(txt) || /[^<>]*<$/.test(txt[txt.length - 1])))) {
      return 'break';
    }
    while ((match = reg.exec(txt))) {
      arr.push({
        text: match[1],
        offset: this._document.offsetAt(new Position(line, match.index))
      });
    }
    return arr.pop();
  }

  // 获取本行位置前的文本
  getTextBeforePosition(position: Position): string {
    var start = new Position(position.line, 0);
    var range = new Range(start, position);
    return this._document.getText(range);
  }
  // 获取建议标签
  getTagSuggestion() {
    let suggestions = [];

    let id = 100;
    for (let tag in TAGS) {
      suggestions.push(this.buildTagSuggestion(tag, TAGS[tag], id));
      id++;
    }
    return suggestions;
  }

  // 获取建议属性值
  getAttrValueSuggestion(tag: string, attr: string): CompletionItem[] {
    let suggestions = [];
    const values = this.getAttrValues(tag, attr);
    values.forEach(value => {
      suggestions.push({
        label: value,
        kind: CompletionItemKind.Value
      });
    });
    return suggestions;
  }

  // 获取建议属性
  getAttrSuggestion(tag: string) {
    let suggestions = [];
    let tagAttrs = this.getTagAttrs(tag);
    let preText = this.getTextBeforePosition(this._position);
    let prefix = preText.replace(/['"]([^'"]*)['"]$/, '').split(/\s|\(+/).pop();
    // 方法属性
    const method = prefix[0] === '@';
    // 绑定属性
    const bind = prefix[0] === ':';

    prefix = prefix.replace(/[:@]/, '');
    if (/[^@:a-zA-z\s]/.test(prefix[0])) {
      return suggestions;
    }

    tagAttrs.forEach(attr => {
      const attrItem = this.getAttrItem(tag, attr);
      if (attrItem && (!prefix.trim() || this.firstCharsEqual(attr, prefix))) {
        const sug = this.buildAttrSuggestion({ attr, tag, bind, method }, attrItem);
        sug && suggestions.push(sug);
      }
    });
    for (let attr in ATTRS) {
      const attrItem = this.getAttrItem(tag, attr);
      if (attrItem && attrItem.global && (!prefix.trim() || this.firstCharsEqual(attr, prefix))) {
        const sug = this.buildAttrSuggestion({ attr, tag: null, bind, method }, attrItem);
        sug && suggestions.push(sug);
      }
    }
    return suggestions;
  }

  // 编译建议标签
  buildTagSuggestion(tag, tagVal, id) {
    const snippets = [];
    let index = 0;
    let that = this;
    function build(tag, { subtags, defaults }, snippets) {
      let attrs = '';
      defaults && defaults.forEach((item, i) => {
        attrs += ` ${item}=${that.quotes}$${index + i + 1}${that.quotes}`;
      });
      snippets.push(`${index > 0 ? '<' : ''}${tag}${attrs}>`);
      index++;
      subtags && subtags.forEach(item => build(item, TAGS[item], snippets));
      snippets.push(`</${tag}>`);
    };
    build(tag, tagVal, snippets);

    return {
      label: tag,
      sortText: `0${id}${tag}`,
      insertText: new SnippetString(prettyHTML('<' + snippets.join(''), { indent_size: this.size }).substr(1)),
      kind: CompletionItemKind.Snippet,
      detail: `vue component`,
      documentation: tagVal.description
    };
  }

  buildAttrSuggestion({ attr, tag, bind, method }, { description, type, global, framework}) {
    if ((method && type === "method") || (bind && type !== "method") || (!method && !bind)) {
      let detail = ''
      // detail 指定标签所属框架（目前主要有 element-ui，vux， iview2）
      if(TAGS[tag] && TAGS[tag].framework){
        detail += TAGS[tag].framework
      }
      if (global) {
        detail += `${framework}(global)`
      }
      return {
        label: attr,
        insertText: (type && (type === 'flag')) ? `${attr} ` : new SnippetString(`${attr}=${this.quotes}$1${this.quotes}$0`),
        kind: (type && (type === 'method')) ? CompletionItemKind.Method : CompletionItemKind.Property,
        detail,
        documentation: description
      };
    } else { return; }
  }

  // 获取属性值
  getAttrValues(tag, attr) {
    let attrItem = this.getAttrItem(tag, attr);
    let options = attrItem && attrItem.options;
    if (!options && attrItem) {
      if (attrItem.type === 'boolean') {
        options = ['true', 'false'];
      } else if (attrItem.type === 'icon') {
        options = ATTRS['icons'];
      } else if (attrItem.type === 'shortcut-icon') {
        options = [];
        ATTRS['icons'].forEach(icon => {
          options.push(icon.replace(/^el-icon-/, ''));
        });
      }
    }
    return options || [];
  }

  // 获取标签包含的属性
  getTagAttrs(tag: string) {
    return (TAGS[tag] && TAGS[tag].attributes) || [];
  }

  // 获取属性项
  getAttrItem(tag: string | undefined, attr: string | undefined) {
    return ATTRS[`${tag}/${attr}`] || ATTRS[attr];
  }

  // 属性值开始
  isAttrValueStart(tag: Object | string | undefined, attr) {
    return tag && attr;
  }

  // 属性开始
  isAttrStart(tag: TagObject | undefined) {
    return tag;
  }

  // 是否是标签开始
  isTagStart() {
    let txt = this.getTextBeforePosition(this._position);
    return this.tagStartReg.test(txt);
  }

  // 是否是关闭标签
  isCloseTag() {
    let txt = this._document.getText(new Range(new Position(this._position.line, 0), this._position)).trim()
    if(!txt.endsWith('>') || /.*=("[^"]*>|'[^']*>)$/gi.test(txt) || txt.endsWith('/>')) {
      return false
    }
    let txtArr = txt.match(/<([\w-]+)(\s*|(\s+[\w-_:@]+(=("[^"]*"|'[^']*'))?)+)\s*>/gim)
    if(Array.isArray(txtArr) && txtArr.length > 0) {
      let txtStr = txtArr[txtArr.length - 1]
      return /<([\w-]+)(\s*|(\s+[\w-_:@]+(=("[^"]*"|'[^']*'))?)+)\s*>$/gi.test(txtStr)
    }
    return false
  }

  firstCharsEqual(str1: string, str2: string) {
    if (str2 && str1) {
      return str1[0].toLowerCase() === str2[0].toLowerCase();
    }
    return false;
  }
  // vue文件只在template里面提示，已script作为标记
  notInTemplate(): boolean {
    let line = this._position.line;
    while (line) {
      if (/^\s*<script.*>\s*$/.test(<string>this._document.lineAt(line).text)) {
        return true;
      }
      line--;
    }
    return false;
  }

  // 自动补全关闭标签
  getCloseTagSuggestion() {
    let txtInfo = this._document.lineAt(this._position.line)
    let txtArr = txtInfo.text.match(/<([\w-]+)(\s*|(\s+[\w-_:@]+(=("[^"]*"|'[^']*'))?)+)\s*>/gim)
    let tag = 'div'
    if(txtArr) {
      tag = txtArr[txtArr.length - 1].replace(/<([\w-]+)(\s*|(\s+[\w-_:@]+(=("[^"]*"|'[^']*'))?)+)\s*>/gim, '$1')
    }
    window.activeTextEditor.edit((editBuilder) => {
      editBuilder.insert(this._position, '</' + tag + '>');
    });
    let newPosition = window.activeTextEditor.selection.active.translate(0, 0)
    window.activeTextEditor.selection = new Selection(newPosition, newPosition);
  }

  // 判断是否是{}括号开始
  isBrace() {
    let startPosition = new Position(this._position.line, this._position.character - 2)
    return /[^{]{/gi.test(this._document.getText(new Range(startPosition, this._position)))
  }

  // {}括号自动补全，只有行内html标签的地方需要补全
  braceSuggestion() {
    let txt = this.getTextBeforePosition(this._position).trim()
    let lineTxt = this._document.lineAt(this._position.line).text.trim()
    if(/<\w.*$/.test(txt) && lineTxt !== (txt + '}')) {
      window.activeTextEditor.edit((editBuilder) => {
        editBuilder.insert(this._position, '}');
      });
      let newPosition = window.activeTextEditor.selection.active.translate(0, 0)
      window.activeTextEditor.selection = new Selection(newPosition, newPosition);
    }
  }

  // 提供完成项(提示入口)
  provideCompletionItems(document: TextDocument, position: Position, token: CancellationToken): ProviderResult<CompletionItem[] | CompletionList> {
    this._document = document;
    this._position = position;

    // {}补全处理
    if(this.isBrace()) {
      this.braceSuggestion()
      return null
    }
    if (this.isCloseTag()) { // 标签关闭标签
      this.getCloseTagSuggestion()
      return null
    }
    const config = workspace.getConfiguration('element-helper');
    this.size = config.get('indent-size');
    this.quotes = config.get('quotes') === 'double' ? '"' : "'";

    // 标签、属性
    let tag: TagObject | string | undefined = this.getPreTag();
    let attr = this.getPreAttr();
    if (this.isAttrValueStart(tag, attr)) { // 属性值开始
      return this.getAttrValueSuggestion(tag.text, attr);
    } else if (this.isAttrStart(tag)) { // 属性开始
      return this.getAttrSuggestion(tag.text);
    } else if (this.isTagStart()) { // 标签开始
      switch (document.languageId) {
        case 'vue':
          return this.notInTemplate() ? [] : this.getTagSuggestion();
        case 'html':
          // todo
          return this.getTagSuggestion();
      }
    } else { return []; }
  }
}

// 文档通过 hover 形式查看
export class DocumentHoverProvider implements HoverProvider {
  // 获取属性所属标签
  static getTag(document, position): String {
    let line = position.line
    let tagName = ''

    while(line > 0 && !tagName) {
      let lineInfo: TextLine = document.lineAt(line)
      let text = lineInfo.text.trim()
      // 本行则获取光标位置前文本
      if(line === position.line) {
        text = text.substring(0, position.character)
      }
      let txtArr = text.match(/<[^(>/)]+/gim)
      if(txtArr) {
        for (let i = (txtArr.length - 1); i >= 0; i--) {
          if(txtArr[i][0] === '<' && txtArr[i][1] !== '/') {
            if(txtArr[i].indexOf(' ') !== -1) {
              tagName = txtArr[i].replace(/^<(\S*)(\s.*|\s*)/gi, '$1');
            } else {
              tagName = txtArr[i].replace(/^<(.*)/gi, '$1');
            }
            break
          }
        }
      }
      --line
    }
    return tagName
  }
  provideHover(document: TextDocument, position: Position, token: CancellationToken): ProviderResult<import("vscode").Hover> {
    const line = document.lineAt(position.line)
    const textSplite = [' ', '<', '>', '"', '\'', '.', '\\', "=", ":"]
    // 通过前后字符串拼接成选择文本
    let posIndex = position.character
    let textMeta = line.text.substr(posIndex, 1)
    let selectText = ''
    // 前向获取符合要求的字符串
    while(textSplite.indexOf(textMeta) === -1 && posIndex <= line.text.length) {
      selectText += textMeta
      textMeta = line.text.substr(++posIndex, 1)
    }
    // 往后获取符合要求的字符串
    posIndex = position.character - 1
    textMeta = line.text.substr(posIndex, 1)
    while(textSplite.indexOf(textMeta) === -1 && posIndex > 0) {
      selectText = textMeta + selectText
      textMeta = line.text.substr(--posIndex, 1)
    }
    textMeta = line.text.substr(posIndex, 1)

    // tag标签便利
    if(Documents[selectText]) {
      return new Hover(Documents[selectText])
    }

    // 在不是标签元素情况下才获取标签名称
    if(textMeta !== "<") {
      let tagName = DocumentHoverProvider.getTag(document, position)
      if(tagName && DocumentsAttr[tagName + '/' + selectText]) {
        return new Hover(DocumentsAttr[tagName + '/' + selectText])
      }
    }

    return null
  }
}

// 跳转到定义位置
export class vueHelperDefinitionProvider implements DefinitionProvider {
  provideDefinition(document: TextDocument, position: Position, token: CancellationToken): ProviderResult<Definition> {
    // 获取定义word
    const line = document.lineAt(position.line)
    const textSplite = [' ', '<', '>', '"', '\'', '.', '\\', "=", ":", "@", "(", ")", "[", "]", "{", "}", ",", "!"]
    // 通过前后字符串拼接成选择文本
    let posIndex = position.character
    let textMeta = line.text.substr(posIndex, 1)
    let selectText = ''
    // 前向获取符合要求的字符串
    while(textSplite.indexOf(textMeta) === -1 && posIndex <= line.text.length) {
      selectText += textMeta
      textMeta = line.text.substr(++posIndex, 1)
    }
    // 往后获取符合要求的字符串
    posIndex = position.character - 1
    textMeta = line.text.substr(posIndex, 1)
    while(textSplite.indexOf(textMeta) === -1 && posIndex > 0) {
      selectText = textMeta + selectText
      textMeta = line.text.substr(--posIndex, 1)
    }

    // 查找字符串位置
    let pos = 0
    let begin = false
    let lineText = ''
    let braceLeftCount = 0
    let attr = ''
    while(pos < document.lineCount && !/^\s*<\/script>\s*$/g.test(lineText)) {
      lineText = document.lineAt(++pos).text
      if(!begin) {
        if(/^\s*<script.*>\s*$/g.test(lineText)) {
          begin = true
        }
        continue; 
      }
      // data具有return，单独处理
      let vueAttr = {
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
      // 判断现在正在哪个属性进行遍历
      let keyWord = lineText.replace(/\s*(\w*)\s*(\(\s*\)|:)\s*{\s*/gi, '$1')
      // braceLeftCount <= 3 用于去除data属性中包含vue其他属性从而不能定义问题
      if(vueAttr[keyWord] !== undefined && braceLeftCount <= 3) {
        attr = keyWord
        braceLeftCount = 0
      }

      // data属性匹配
      if(attr === 'data' && braceLeftCount >= 2) {
        let matchName = lineText.replace(/\s*(\w+):.+/gi, '$1')
        if(selectText === matchName && braceLeftCount === 2) {
          return Promise.resolve(new Location(document.uri, new Position(pos, lineText.indexOf(matchName) + matchName.length)))
        }
        let braceLeft = lineText.match("{") ? lineText.match("{").length : 0
        let braceRight = lineText.match("}") ? lineText.match("}").length : 0
        braceLeftCount += braceLeft - braceRight
      } else if(attr) {
        let matchName = lineText.replace(/\s*(\w*)\s*(:|\().*/gi, '$1')
        if(selectText === matchName && braceLeftCount === 1) {
          return Promise.resolve(new Location(document.uri, new Position(pos, lineText.indexOf(matchName) + matchName.length)))
        }
        let braceLeft = lineText.match("{") ? lineText.match("{").length : 0
        let braceRight = lineText.match("}") ? lineText.match("}").length : 0
        braceLeftCount += braceLeft - braceRight
      }

      // data取return的属性值
      if(attr === 'data') {
        if(/\s*return\s*{\s*/gi.test(lineText)) {
          braceLeftCount = 2
        }
      }
    }
    return Promise.resolve(null);
  }

}