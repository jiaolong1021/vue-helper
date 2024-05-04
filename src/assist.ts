import { commands, window, Position, TextEditor, Selection } from 'vscode'
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