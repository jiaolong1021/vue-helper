import { commands, window, Position, TextEditor, Selection, workspace, Range } from 'vscode'
import ExplorerProvider from './explorer'

export default class Assist {
  private explorer: ExplorerProvider

  constructor(explorer: ExplorerProvider) {
    this.explorer = explorer
  }

  public register() {
    this.explorer.context.subscriptions.push(commands.registerCommand('vue-helper.blockSelect', () => {
      this.blockSelect()
    }))
    this.explorer.context.subscriptions.push(commands.registerCommand('vue-helper.funcEnhance', () => {
      this.funcEnhance()
    }))
    this.explorer.context.subscriptions.push(commands.registerCommand('vue-helper.backspace', () => {
      this.backspce()
    }))
    this.explorer.setContext('vue-helper.backspace', true)
  }

  asNormal(key: string, modifiers?: string) {
    switch (key) {
      case 'enter':
        if (modifiers === 'ctrl') {
          return commands.executeCommand('editor.action.insertLineAfter');
        } else {
          return commands.executeCommand('type', { source: 'keyboard', text: '\n' });
        }
      case 'tab':
          if (workspace.getConfiguration('emmet').get<boolean>('triggerExpansionOnTab')) {
            return commands.executeCommand('editor.emmet.action.expandAbbreviation');
          } else if (modifiers === 'shift') {
            return commands.executeCommand('editor.action.outdentLines');
          } else {
            return commands.executeCommand('tab');
          }
      case 'backspace':
        return commands.executeCommand('deleteLeft');
    }
  }

  // 回退删除处理
  async backspce() {
    let editor: any = window.activeTextEditor;
    if(!editor) {
      this.asNormal('backspace');
      return; 
    }
    // 多选择点删除处理
    if(window.activeTextEditor?.selections.length && window.activeTextEditor?.selections.length > 1) {
      let selections = window.activeTextEditor?.selections;
      let selectionList: Array<Selection> = [];
      for (let index = 0; index < selections.length; index++) {
        const selection = selections[index];
        if(selection.start.line === selection.end.line && selection.start.character === selection.end.character) {
          if(selection.anchor.character > 0) {
            selectionList.push(new Selection(new Position(selection.anchor.line, selection.anchor.character - 1), selection.anchor));
          } else if (selection.anchor.line > 0) {
            let len = editor.document.lineAt(selection.anchor.line - 1).text.length;
            selectionList.push(new Selection(new Position(selection.anchor.line - 1, len), selection.anchor));
          }
        } else {
          selectionList.push(selection);
        }
      }
      await editor.edit((editBuilder: any) => {
        for (let i = 0; i < selectionList.length; i++) {
          editBuilder.delete(selectionList[i]); 
        }
      });
      return;
    }
    if(window.activeTextEditor?.selection.start.line === window.activeTextEditor?.selection.end.line 
      && window.activeTextEditor?.selection.start.character === window.activeTextEditor?.selection.end.character) {
      // 首行
      if(editor.selection.anchor.line === 0) {
        if(editor.selection.anchor.character > 0) {
          await editor.edit((editBuilder: any) => {
            editBuilder.delete(new Selection(new Position(editor.selection.anchor.line, editor.selection.anchor.character - 1), editor.selection.anchor));
          });
        }
      
      } else {
        let isLineEmpty = editor.document.lineAt(editor.selection.anchor.line).text.trim() === '';
        // 整行都是空格
        if(isLineEmpty) {
          let preText = '';
          let line = editor.selection.anchor.line;
          while(preText.trim() === '' && line >= 0) {
            line -= 1;
            preText = editor.document.lineAt(line).text;
          }
          await editor.edit((editBuilder: any) => {
            editBuilder.delete(new Selection(new Position(line, preText.length), editor.selection.anchor));
          });
        } else {
          let startPosition: Position;
          let endPosition: Position = editor.selection.anchor;
          let preLineText = editor.document.getText(new Range(new Position(endPosition.line, 0), endPosition));
          if(endPosition.character === 0 || preLineText.trim() === '') {
            startPosition = new Position(endPosition.line - 1, editor.document.lineAt(endPosition.line - 1).text.length);
          } else {
            startPosition = new Position(endPosition.line, endPosition.character - 1);
            // 对{}, (), [], '', "", <>进行成对删除处理
            let txt = editor.document.getText(new Range(new Position(endPosition.line, endPosition.character - 1), endPosition));
            if(editor.document.lineAt(endPosition.line).text.length > endPosition.character) {
              let nextTxt = editor.document.getText(new Range(endPosition, new Position(endPosition.line, endPosition.character + 1)));
              if((txt === '{' && nextTxt === '}') 
              || (txt === '(' && nextTxt === ')') 
              || (txt === '\'' && nextTxt === '\'') 
              || (txt === '"' && nextTxt === '"') 
              || (txt === '[' && nextTxt === ']') 
              || (txt === '<' && nextTxt === '>')) {
                endPosition = new Position(endPosition.line, endPosition.character + 1);
              }
            }
          }
          await editor.edit((editBuilder: any) => {
            editBuilder.delete(new Selection(startPosition, endPosition));
          });
        }
      }
    } else {
      // 选择块
      this.asNormal('backspace');
    }
  }

  // 函数增强
  public funcEnhance() {
    let editor = window.activeTextEditor;
    if (!editor) { return; }
    let character = (window.activeTextEditor?.selection.anchor.character || 0) - 1;
    let txt = window.activeTextEditor?.document.lineAt(window.activeTextEditor?.selection.anchor.line).text;
    let word: string = '';
    let isWordEnd = false
    let type = '' // '0': 变量 '1': 函数
    if (txt && txt.includes('"')) {
      type = '0'
    }
    while(txt && character && character > 0) {
      let wordSingle = txt[character]
      if (wordSingle === '"') {
        type = '0'
        isWordEnd = true
      }
      if (wordSingle === ' ') {
        break
      }
      if (!isWordEnd) {
        word = wordSingle + word;
      }
      if (wordSingle === '@') {
        type = '1'
      }
      --character;
    }
    // 没有参数往后找
    character = (window.activeTextEditor?.selection.anchor.character || 0);
    while(txt && character && txt.length > character) {
      if (txt[character] === '"') {
        break;
      }
      word = word + txt[character];
      ++character;
    }
    // 如果是函数引用方式，则认为是生成函数
    if (word.includes(')')) {
      type = '1'
    }
    console.log('type' + type)

    switch (type) {
      default:
        this.autoEnhance()
        break;
    }
  }

  public autoEnhance() {
    let editor: any = window.activeTextEditor;
    if (!editor) { return; }
    let txt = editor.document.lineAt(editor.selection.anchor.line).text;
    if(editor.document.lineCount <= editor.selection.anchor.line + 1) { return; }
    // 组件自动导入
    if (/<.*>\s?<\/.*>/gi.test(txt.trim()) || /<.*\/>/gi.test(txt.trim())) {
      this.autoImportComponent(txt, editor, editor.selection.anchor.line);
      return;
    }
    // 本地文件自动导入
    let nextLineTxt = editor.document.lineAt(editor.selection.anchor.line + 1).text;
    
    let baseEmpty = txt.replace(/(\s)\S.*/gi, '$1');
    let replaceTxt = ` {\n${baseEmpty}${this.explorer.tabSize}\n${baseEmpty}}`;
    // 本行全是空
    if(/^\s*$/gi.test(txt) || txt === '') {
      replaceTxt = 'name (params)' + replaceTxt;
    } else if (/[0-9a-zA-Z]\s{0,1}:\s{0,1}[\w\"\']/gi.test(txt)) {
      // key: value
      replaceTxt = ',\n' + baseEmpty;
    } else if(txt.indexOf(')') === -1) {
      replaceTxt = ' (params)' + replaceTxt;
    }
    // 判断下一行是否是单行注释
    if(/\s*\/\/\s+.*/gi.test(nextLineTxt)) {
      if(editor.document.lineCount <= editor.selection.anchor.line + 2) { return; }
      nextLineTxt = editor.document.lineAt(editor.selection.anchor.line + 2).text;
    }
    // 下一行是一个函数
    if (/.*(.*).*{.*/gi.test(nextLineTxt)) {
      let isCond = false;
      let txtTrim = txt.trim();
      const condList = ['if', 'for', 'while', 'switch'];
      condList.forEach(cond => {
        if (txtTrim.indexOf(cond) === 0) {
          isCond = true;
        }
      });
      if (!isCond) {
        replaceTxt += ',';
      }
    }
    editor.edit((editBuilder: any) => {
      editBuilder.insert(new Position(editor.selection.anchor.line, txt.length + 1), replaceTxt);
    });
    let newPosition = editor.selection.active.translate(1, (baseEmpty + this.explorer.tabSize).length);
    editor.selection = new Selection(newPosition, newPosition);
  }

  // 组件自动导入
  autoImportComponent(txt: string, editor: TextEditor, line: number) {
    let tag = txt.trim().replace(/<([\w-]*)[\s>].*/gi, '$1');
    for (let i = 0; i < this.explorer.vueFiles.length; i++) {
      const vf : any = this.explorer.vueFiles[i];
      if (tag === vf.name) {
        let name = vf.name;
        // 不重复插入引入
        if (editor.document.getText().includes(`import ${name}`)) {
          return
        }
        let countLine = editor.document.lineCount;
        // 找script位置
        while (!/^\s*<script.*>\s*$/.test(<string>editor.document.lineAt(line).text)) {
          if (countLine > line) {
            line++;
          } else {
            break;
          }
        }
        let activeEditorPath = this.explorer.getActiveEditorDir(editor.document.uri.path)
        let importString = `import ${name} from '${this.explorer.getVueRelativePath(activeEditorPath, vf.path)}'\n`;
        if (editor.document.lineAt(line).text.includes('setup')) {
          // 组合式
          editor.edit((editBuilder) => {
            importString = importString.replace(/\\/gi, '/');
            editBuilder.insert(new Position(line + 1, 0), importString);
          });
          return
        }
        if (editor.document.lineAt(line + 1).text.includes('export default')) {
          line += 1;
        } else {
          line += 1;
          if (countLine < line) {
            return;
          }
          // 找import位置
          while (/import /gi.test(editor.document.lineAt(line).text.trim())) {
            if (countLine > line) {
              line++;
            } else {
              break;
            }
          }
        }
        let importLine = line;
        if (line < countLine) {
          let prorityInsertLine = 0;
          let secondInsertLine = 0;
          let hasComponents = false;
          let baseEmpty = '';
          while(!/\s*<\/script>\s*/gi.test(editor.document.lineAt(line).text.trim())) {
            if (/\s*components\s*:\s*{.*}.*/gi.test(editor.document.lineAt(line).text.trim())) {
              let text = editor.document.lineAt(line).text;
              let preText = text.replace(/\s*}.*$/, '');
              let insertPos = preText.length;
              editor.edit((editBuilder) => {
                importString = importString.replace(/\\/gi, '/');
                editBuilder.insert(new Position(importLine, 0), importString);
                editBuilder.insert(new Position(line, insertPos), ', ' + name);
              });
              break;
            }
            if (hasComponents && /\s*},?\s*$/gi.test(editor.document.lineAt(line).text.trim())) {
              let text = editor.document.lineAt(line - 1).text;
              let insertPos = text.indexOf(text.trim());
              let empty = '';
              for (let i = 0; i < insertPos; i++) {
                empty += ' ';
              }
              editor.edit((editBuilder) => {
                importString = importString.replace(/\\/gi, '/');
                editBuilder.insert(new Position(importLine, 0), importString);
                editBuilder.insert(new Position(line - 1, editor.document.lineAt(line - 1).text.length), ',\n' + empty + name);
              });
              break;
            }
            if (/\s*components\s*:\s*{\s*$/gi.test(editor.document.lineAt(line).text.trim())) {
              hasComponents = true;
            }
            if (/\s*export\s*default\s*{\s*/gi.test(editor.document.lineAt(line).text.trim())) {
              secondInsertLine = line;
            }
            if (/\s*data\s*\(\s*\)\s*{\s*/gi.test(editor.document.lineAt(line).text.trim())) {
              let text = editor.document.lineAt(line).text;
              let insertPos = text.indexOf(text.trim());
              for (let i = 0; i < insertPos; i++) {
                baseEmpty += '';
              }
              prorityInsertLine = line;
            }
            if (countLine > line) {
              line++;
            } else {
              break;
            }
          }
          if (prorityInsertLine > 0) {
            editor.edit((editBuilder) => {
              importString = importString.replace(/\\/gi, '/');
              editBuilder.insert(new Position(importLine - 1, 0), importString);
              editBuilder.insert(new Position(prorityInsertLine - 1, editor.document.lineAt(prorityInsertLine - 1).text.length), `\n\t${baseEmpty}components: { ${name} },`);
            });
            break;
          }
          if (secondInsertLine > 0) {
            editor.edit((editBuilder) => {
              importString = importString.replace(/\\/gi, '/');
              editBuilder.insert(new Position(importLine, 0), importString);
              editBuilder.insert(new Position(secondInsertLine, editor.document.lineAt(secondInsertLine).text.length),  `\n${this.explorer.tabSize}components: { ${name} },`);
            });
          }
        }

        break;
      }
    }
  }

  // 代码块选择
  public blockSelect() {
    let editor = window.activeTextEditor;
    if(!editor) { return; }

    let startPosition = editor.selection.start;
    let lineTextObj = editor.document.lineAt(startPosition.line);
    let lineText = lineTextObj.text;
    if (lineText.length > 0 && startPosition.character === 0 && lineText[startPosition.character] === '[') {
      this.selectJsBlock(editor, lineText.substring(startPosition.character, lineText.length), startPosition, 'array');
    } else if (lineText.length > 0 && startPosition.character > 0 && lineText[startPosition.character - 1] === '[') {
      this.selectJsBlock(editor, lineText.substring(startPosition.character - 1, lineText.length), new Position(startPosition.line, startPosition.character - 1), 'array');
    } else if (lineText.length > 0 && startPosition.character < lineText.length && lineText[startPosition.character] === '[') {
      this.selectJsBlock(editor, lineText.substring(startPosition.character, lineText.length), startPosition, 'array');
    } else if (lineText.length > 0 && startPosition.character === 0 && lineText[startPosition.character] === '{') {
      this.selectJsBlock(editor, lineText.substring(startPosition.character, lineText.length), startPosition, 'json');
    } else if (lineText.length > 0 && startPosition.character > 0 && lineText[startPosition.character - 1] === '{') {
      this.selectJsBlock(editor, lineText.substring(startPosition.character - 1, lineText.length), new Position(startPosition.line, startPosition.character - 1), 'json');
    } else if (lineText.length > 0 && startPosition.character < lineText.length && lineText[startPosition.character] === '{') {
      this.selectJsBlock(editor, lineText.substring(startPosition.character, lineText.length), startPosition, 'json');
    } else if (lineText.trim().length > 0 && lineText.trim()[0] === '<' && startPosition.character <= lineText.indexOf('<')) {
      lineText = lineText.substring(startPosition.character, lineText.length);
      this.selectHtmlBlock(editor, lineText, startPosition);
    } else if (lineText.trim().length > 0 && lineText.trim()[0] === '<' && startPosition.character <= lineText.indexOf('<')) {
      lineText = lineText.substring(startPosition.character, lineText.length);
      this.selectHtmlBlock(editor, lineText, startPosition);
    } else if (/^\s*[\sa-zA-Z:_-]*\s*\[\s*$/gi.test(lineText)) {
      this.selectJsBlock(editor, lineText, new Position(startPosition.line, lineText.length - lineText.replace(/\s*/, '').length), 'array');
    } else if ((lineText.trim().length > 0 && /(function|if|for|while)?.+\(.*\)\s*{/gi.test(lineText) && /^\s*(function|if|for|while)?\s*$/g.test(lineText.substr(0, startPosition.character)))
      || (/^(\s*[\sa-zA-Z_-]*\([\sa-zA-Z_-]*\)\s*{\s*)|(\s*[\sa-zA-Z:_-]*\s*{\s*)$/gi.test(lineText)) && /^\s*(function|if|for|while)?\s*$/g.test(lineText.substr(0, startPosition.character))) {
      this.selectJsBlock(editor, lineText, new Position(startPosition.line, lineText.length - lineText.replace(/\s*/, '').length), 'function');
    } else {
      // 在本行选择
      this.selectLineBlock(editor, lineText, startPosition);
    }
    return ;
  }

  // 选择函数块
  selectJsBlock(editor: any, lineText: string, startPosition: Position, type: string) {
  	let lineCount = editor.document.lineCount;
    let lineCurrent = startPosition.line;
    let braceLeftCount = 0;
    let tagLeft = '{';
    let tagRight = '}';
    if (type === 'array') {
      tagLeft = '[';
      tagRight = ']';
    }
    while(lineCurrent <= lineCount) {
      let pos: number = 0;
      while((lineText.indexOf(tagLeft, pos) !== -1 || lineText.indexOf(tagRight, pos) !== -1) && pos < lineText.length) {
        let i = -1;
        // 左标签
        if (lineText.indexOf(tagLeft, pos) !== -1) {
          i = lineText.indexOf(tagLeft, pos);
        }
        // 右标签
        if (lineText.indexOf(tagRight, pos) !== -1) {
          if (i === -1 || i > lineText.indexOf(tagRight, pos)) {
            // 左标签不存在、左右标签都存在，右标签在前
            --braceLeftCount;
            pos = lineText.indexOf(tagRight, pos) + 1;
          } else {
            ++braceLeftCount;
            pos = i + 1;
          }
        } else {
          // 存在左标签
          if (i !== -1) {
            ++braceLeftCount;
            pos = i + 1;
          }
        }
        if (braceLeftCount === 0) {
          break;
        }
      }

      if (braceLeftCount === 0) {
        let extra = 0;
        let textExtra = editor.document.lineAt(lineCurrent).text;
        if (lineCurrent === startPosition.line) {
          extra = textExtra.indexOf(lineText);
        }
        if (type === 'function' && textExtra[pos + extra - 1] === '}' && textExtra[pos + extra] === ')') {
          extra += 1;
        }
        editor.selection = new Selection(startPosition, new Position(lineCurrent, pos + extra));
        return;
      }

      ++lineCurrent;
      if (lineCount >= lineCurrent) {
        lineText = editor.document.lineAt(lineCurrent).text;
      }
    }
    return;
  }

  // 选择html代码块
  selectHtmlBlock(editor: any, lineText: string, startPosition: Position) {
    const ncname = '[a-zA-Z_][\\w\\-\\.]*';
    const qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')';
    const startTagOpen = new RegExp('^<' + qnameCapture);
    const endTag = new RegExp('^(<\\/' + qnameCapture + '[^>]*>)');
    const comment = /^<!--/;
    const commentEnd = '-->';
    const lineCount = editor.document.lineCount;
    let lineCurrent = startPosition.line;

    let isNoIncludeTag = false;
    let tagStack: any = null;
    let col = lineText.indexOf(lineText.trim()) + startPosition.character;
    let beginPosition = new Position(startPosition.line, startPosition.character + lineText.length - lineText.replace(/\s*(.*)/, '$1').length);
    lineText = lineText.trim();
    let noIncludeTags = ['input', 'img'];

    while(lineText) {
      let textTagPos = lineText.indexOf('<');
      if (textTagPos === 0) {
        let hasEndTag = false;
        let hasTag = false;
        if (comment.test(lineText)) {
          let commentIndex = lineText.indexOf(commentEnd);
          while(commentIndex === -1 && lineCurrent < lineCount) {
            lineText = editor.document.lineAt(++lineCurrent).text;
            commentIndex = lineText.indexOf(commentEnd);
          }
          lineText = lineText.substr(commentIndex + 3, lineText.length);
        }
        const endTagMatch = lineText.match(endTag);
        if (endTagMatch) {
          hasEndTag = true;
          if (Array.isArray(tagStack)) {
            let tagIndex = tagStack.length;
            if (tagIndex > 0) {
              let isTagMatch = false;
              while(tagIndex > 0 && !isTagMatch) {
                let tag = tagStack[tagIndex - 1];
                if (tag === endTagMatch[2]) {
                  isTagMatch = true;
                }
                tagStack.pop();
                --tagIndex;
              }
            }
          }
          let endAdvance = lineText.indexOf(endTagMatch[1]) + endTagMatch[1].length;
          col += endAdvance;
          lineText = lineText.substr(endAdvance, lineText.length);
        }

        if (Array.isArray(tagStack) && tagStack.length === 0) {
          editor.selection = new Selection(beginPosition, new Position(lineCurrent, col));
          break;
        }

        const startTagMatch = lineText.match(startTagOpen);
        if (startTagMatch) {
          hasTag = true;
          if (isNoIncludeTag) {
            let lineTextCur = editor.document.lineAt(lineCurrent).text;
            lineText = lineTextCur.substr(0, col);
            let indexLast = lineText.lastIndexOf('>');
            while (indexLast === -1  && lineCurrent > 0) {
              --lineCurrent;
              lineText = editor.document.lineAt(lineCurrent).text;
              indexLast = lineText.lastIndexOf('>');
            }
            editor.selection = new Selection(beginPosition, new Position(lineCurrent, indexLast + 2));
            break;
          }
          if (Array.isArray(tagStack)) {
            tagStack.push(startTagMatch[1]);
          } else {
            tagStack = [startTagMatch[1]];
            if (noIncludeTags.indexOf(startTagMatch[1]) !== -1) {
              isNoIncludeTag = true;
            }
          }
          const startAdvance = lineText.indexOf(startTagMatch[1]) + startTagMatch[1].length;
          col += startAdvance;
          lineText = lineText.substr(startAdvance, lineText.length);
        }
        if (lineText.indexOf('/>') !== -1 && Array.isArray(tagStack) && tagStack.length === 1) {
          let tagCloseIndex = lineText.indexOf('/>');
          let prevText = lineText.substr(0, tagCloseIndex + 2);
          let tagReg = /<([\w-]+)(\s*|(\s+[\w-_:@\.]+(=("[^"]*"|'[^']*'))?)+)\s*(\/)?>/gim;
          if (!tagReg.test(prevText)) {
            tagStack.pop();
          }
          editor.selection = new Selection(beginPosition, new Position(lineCurrent, col + tagCloseIndex + 2));
          break;
        }
        if (!lineText && lineCurrent < lineCount && tagStack.length > 0) {
          do {
            ++lineCurrent;
            lineText = editor.document.lineAt(lineCurrent).text;
          } while (!lineText && lineCurrent < lineCount);
          col = lineText.indexOf(lineText.trim());
          lineText = lineText.trim();
          continue;
        }
        if (!hasTag && !hasEndTag && lineText.length > 0) {
          let noTagIndex = lineText.indexOf(lineText, 1);
          if (noTagIndex === -1) {
            if (lineCurrent < lineCount) {
              do {
                ++lineCurrent;
                lineText = editor.document.lineAt(lineCurrent).text;
              } while (!lineText && lineCurrent < lineCount);
              col = lineText.indexOf(lineText.trim());
              lineText = lineText.trim();
            } else {
              break;
            }
          } else {
            lineText = lineText.substr(noTagIndex, lineText.length);
          }
        }
      } else if (textTagPos > 0) {
        lineText = lineText.substr(textTagPos, lineText.length);
        col += textTagPos;
      } else if (textTagPos < 0) {
        if (lineCurrent < lineCount) {
          // 一行最前面是否有 />
          if (lineText.indexOf('/>') !== -1 && Array.isArray(tagStack) && tagStack.length > 0) {
            let tagCloseIndex = lineText.indexOf('/>');
            let prevText = lineText.substr(0, tagCloseIndex + 2);
            let tagReg = /<([\w-]+)(\s*|(\s+[\w-_:@\.]+(=("[^"]*"|'[^']*'))?)+)\s*(\/)?>/gim;
            if (!tagReg.test(prevText)) {
              tagStack.pop();
            }
            if(tagStack.length === 0) {
              editor.selection = new Selection(beginPosition, new Position(lineCurrent, col + tagCloseIndex + 2));
              break;
            }
          }
          do {
            ++lineCurrent;
            lineText = editor.document.lineAt(lineCurrent).text;
            if (lineText.replace(/\s/gi, '') === '') {
              lineText = '';
            }
          } while (!lineText && lineCurrent < lineCount);
          col = lineText.indexOf(lineText.trim());
          lineText = lineText.trim();
        } else {
          lineText = '';
        }
      }
    }
  }

  selectLineBlock(editor: TextEditor, lineText: String, startPosition: Position) {
    // "" '' () {}, >< 空格
    // 1. 遍历左侧查询结束标签
    let TAGS = ["\"", "'", "(", "{", "[", " ", "`", ">"];
    let TAGS_CLOSE: any = {
      "\"": "\"",
      "'": "'",
      "(": ")",
      "{": "}",
      "[": "]",
      " ": " ",
      "`": "`",
      ">": "<"
    };
    let pos = startPosition.character - 1;
    let endTag = '',
    beginPos = 0,
    endPos = 0,
    inBeginTags: any [] = [],
    includeTags = false;
    beginPos = pos;
    while (pos >= 0) {
      if (TAGS.indexOf(lineText[pos]) !== -1) {
        endTag = lineText[pos];
        break;
      }
      --pos;
    }
    if (beginPos === pos) {
      includeTags = true;
      beginPos = pos;
    } else {
      beginPos = pos + 1;
    }
    // 存在结束标签
    if (endTag.length > 0) {
      pos = startPosition.character;
      if (endTag === '>') {
        while (pos <= lineText.length && pos >= 0) {
          let txt = lineText[pos];
          if ((txt === TAGS_CLOSE[endTag] || txt === '>') && pos > beginPos) {
            break;
          }
          ++pos;
        }
      } else {
        while (pos <= lineText.length && pos >= 0) {
          let txt = lineText[pos];
          if (inBeginTags.length === 0 && (txt === TAGS_CLOSE[endTag] || txt === '>') && pos > beginPos) {
            break;
          }
          if (inBeginTags.length > 0 && TAGS_CLOSE[inBeginTags[inBeginTags.length - 1]] === txt) {
            inBeginTags.pop();
          } else if (TAGS.indexOf(txt) !== -1 && txt !== ' ') {
            inBeginTags.push(txt);
          }
  
          ++pos;
        }
      }
    }
    includeTags ? (endPos = pos + 1) : (endPos = pos);
    editor.selection = new Selection(new Position(startPosition.line, beginPos), new Position(startPosition.line, endPos));
  }
}