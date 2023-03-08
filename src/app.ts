import {
  window, commands, Disposable,
  Uri, CancellationToken, workspace, CompletionItemProvider, ProviderResult,
  TextDocument, Position, CompletionItem, CompletionList, CompletionItemKind,
  SnippetString, Range, HoverProvider, Hover, Selection, TextLine, TextEditor
} from 'vscode';
import TAGS from './vue-tags'
import ATTRS from './vue-attributes'
import Documents from './documents'
import DocumentsAttr from './documents-attr'
const fs = require('fs')
const path = require('path')

const prettyHTML = require('pretty');
export const SCHEME = 'vue-helper';
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
  public static vueFiles = []
  public static tagNameWay = 'kebabCase'

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

  // 组件自动导入
  autoImport(txt, editor: TextEditor, line) {
    let tag = txt.trim().replace(/<([\w-]*)[\s>].*/gi, '$1')
    for (let i = 0; i < App.vueFiles.length; i++) {
      const vf = App.vueFiles[i];
      if (tag === vf.name) {
        let countLine = editor.document.lineCount
        // 找script位置
        while (!/^\s*<script.*>\s*$/.test(<string>editor.document.lineAt(line).text)) {
          if (countLine > line) {
            line++
          } else {
            break
          }
        }
        line += 2
        if (countLine < line) {
          return
        }
        // 找import位置
        while (/import /gi.test(editor.document.lineAt(line).text.trim())) {
          if (countLine > line) {
            line++
          } else {
            break
          }
        }
        let name = vf.name.replace(/(-[a-z])/g, (_, c) => {
          return c ? c.toUpperCase() : ''
        }).replace(/-/gi, '')
        let importString = `import ${name} from '${vf.path}'\n`
        let importLine = line

        // if (line < countLine) {
        //   editor.edit((editBuilder) => {
        //     editBuilder.insert(new Position(line, 0), importString);
        //   });
        // }
        if (line < countLine) {
          let prorityInsertLine = 0
          let secondInsertLine = 0
          let hasComponents = false
          let baseEmpty = ''
          while(!/\s*<\/script>\s*/gi.test(editor.document.lineAt(line).text.trim())) {
            if (/\s*components\s*:\s*{.*}.*/gi.test(editor.document.lineAt(line).text.trim())) {
              let text = editor.document.lineAt(line).text
              let preText = text.replace(/\s*}.*$/, '')
              let insertPos = preText.length
              editor.edit((editBuilder) => {
                importString = importString.replace(/\\/gi, '/')
                editBuilder.insert(new Position(importLine, 0), importString);
                editBuilder.insert(new Position(line, insertPos), ', ' + name);
              });
              break
            }
            if (hasComponents && /\s*},?\s*$/gi.test(editor.document.lineAt(line).text.trim())) {
              let text = editor.document.lineAt(line - 1).text
              let insertPos = text.indexOf(text.trim())
              let empty = ''
              for (let i = 0; i < insertPos; i++) {
                empty += ' '         
              }
              editor.edit((editBuilder) => {
                importString = importString.replace(/\\/gi, '/')
                editBuilder.insert(new Position(importLine, 0), importString);
                editBuilder.insert(new Position(line - 1, editor.document.lineAt(line - 1).text.length), ',\n' + empty + name);
              });
              break
            }
            if (/\s*components\s*:\s*{\s*$/gi.test(editor.document.lineAt(line).text.trim())) {
              hasComponents = true
            }
            if (/\s*export\s*default\s*{\s*/gi.test(editor.document.lineAt(line).text.trim())) {
              secondInsertLine = line
            }
            if (/\s*data\s*\(\s*\)\s*{\s*/gi.test(editor.document.lineAt(line).text.trim())) {
              let text = editor.document.lineAt(line).text
              let insertPos = text.indexOf(text.trim())
              for (let i = 0; i < insertPos; i++) {
                baseEmpty += ' '         
              }
              prorityInsertLine = line
            }
            if (countLine > line) {
              line++
            } else {
              break
            }
          }
          if (prorityInsertLine > 0) {
            editor.edit((editBuilder) => {
              importString = importString.replace(/\\/gi, '/')
              editBuilder.insert(new Position(importLine - 1, 0), importString);
              editBuilder.insert(new Position(prorityInsertLine - 1, editor.document.lineAt(prorityInsertLine - 1).text.length), `\n\t${baseEmpty}components: { ${name} },`);
            });
            break
          }
          if (secondInsertLine > 0) {
            let veturConfig = workspace.getConfiguration('vetur')
            const tabSize = workspace.getConfiguration('editor').tabSize
            let spaceAdd = ''
            if (veturConfig) {
              for (let i = 0; i < veturConfig.format.options.tabSize; i++) {
                spaceAdd += ' '
              }
            } else {
              for (let i = 0; i < tabSize; i++) {
                spaceAdd += ' '
              }
            }
            editor.edit((editBuilder) => {
              importString = importString.replace(/\\/gi, '/')
              editBuilder.insert(new Position(importLine, 0), importString);
              editBuilder.insert(new Position(secondInsertLine, editor.document.lineAt(secondInsertLine).text.length),  `\n${spaceAdd}components: { ${name} },`);
            });
          }
        }

        break
      }
    }
  }

  // 遍历组件
  static traverse(poster, search) {
    const config = workspace.getConfiguration('vue-helper')
    let vueFiles = []
    let cond = null
    if (config.componentPath && Array.isArray(config.componentPath) && config.componentPath.length > 0) {
      cond = function (rootPath) {
        return config.componentPath.indexOf(rootPath) !== -1
      }
    } else {
      let ignore = config.componentIgnore || []
      if (!Array.isArray(ignore)) {
        ignore = [ignore]
      }
      ignore = ignore.concat(['node_modules', 'dist', 'build'])
      cond = function (rootPath) {
        return !(rootPath.charAt(0) === '.' || ignore.indexOf(rootPath) !== -1)
      }
    }
    let rootPathes = fs.readdirSync(workspace.rootPath)
    let prefix = config.componentPrefix
    App.tagNameWay = config.tagNameWay
    
    for (let i = 0; i < rootPathes.length; i++) {
      const rootPath = rootPathes[i]
      if (cond(rootPath)) {
        let stat = fs.statSync(path.join(workspace.rootPath, rootPath))
        if (stat.isDirectory()) {
          App.traverseHandle(rootPath, vueFiles, prefix, poster, search)
        } else {
          App.traverseAdd(rootPath, rootPath, vueFiles, prefix, poster, search)
        }
      }
    }
    return vueFiles;
  }

  // 遍历处理
  static traverseHandle(postPath: String, vueFiles, prefix, poster, search) {
    let fileDirs = fs.readdirSync(path.join(workspace.rootPath, postPath))
    for (let i = 0; i < fileDirs.length; i++) {
      const rootPath = fileDirs[i]
      if (!(rootPath.charAt(0) === '.')) {
        let dir = path.join(postPath, rootPath)
        let stat = fs.statSync(path.join(workspace.rootPath, dir))
        if (stat.isDirectory()) {
          App.traverseHandle(dir, vueFiles, prefix, poster, search)
        } else {
          App.traverseAdd(rootPath, dir, vueFiles, prefix, poster, search)
        }
      }
    }
  }

  // 遍历添加
  static traverseAdd(rootPath, dir, vueFiles, prefix, poster, search) {
    if (rootPath.endsWith(poster)) {
      let posterReg = new RegExp('-?(.*)' + (poster ? poster : '\\.\\w*') + '$', 'gi')
      let name = rootPath
      if (poster === '.vue') {
        if (App.tagNameWay === 'kebabCase') {
          name = name.replace(/([A-Z_])/g, (_, c) => {
            if (c === '_') {
              return '-'
            } else {
              return c ? ('-' + c.toLowerCase()) : ''
            }
          }).replace(posterReg, '$1') 
        } else if (App.tagNameWay === 'camelCase') {
          name = name.replace(/(-[a-z])/g, (_, c) => {
            return c ? c.toUpperCase() : ''
          }).replace(/-/gi, '').replace(posterReg, '$1')
        }  else if (App.tagNameWay === 'CamelCase') {
          name = name.replace(/(-[a-z])/g, (_, c) => {
            return c ? c.toUpperCase() : ''
          }).replace(/-/gi, '').replace(posterReg, '$1')
          if (name && name.length > 0) {
            name = name[0].toUpperCase() + name.substr(1, name.length)
          }
        }
      } else {
        name = name.replace(posterReg, '$1')
      } 
      dir = dir.replace(posterReg, '$1')
      if (!search || (search && dir.includes(search))) {
        if (prefix.path === './' || prefix.path === '') {
          vueFiles.push({
            name: name,
            path: prefix.alias + '/' + dir
          })
        } else {
          vueFiles.push({
            name: name,
            path: dir.replace(new RegExp('^' + prefix.path), prefix.alias)
          })
        }
      }
    }
  }

  // 自动补全
  autoComplement() {
    let editor = window.activeTextEditor;
    if (!editor) { return; }
    let txt = editor.document.lineAt(editor.selection.anchor.line).text
    if(editor.document.lineCount <= editor.selection.anchor.line + 1) { return; }
    // 组件自动导入
    if (/<.*>\s?<\/.*>/gi.test(txt.trim()) || /<.*\/>/gi.test(txt.trim())) {
      this.autoImport(txt, editor, editor.selection.anchor.line)
      return
    }
    // 本地文件自动导入
    let line = editor.selection.anchor.line
    let isLocalImport = line === 0
    let prevExplore = line > 3 ? 3 : line
    for (let i = 0; i < prevExplore; i++) {
      if (/.*(<script|import|require).*/.test(editor.document.lineAt(line - i).text)) {
        isLocalImport = true
        break
      }
    }
    if (isLocalImport) {
      let search = editor.document.lineAt(line).text.trim()
      if (search) {
        let vueFiles = App.traverse('', search)
        let suggestions = []
        vueFiles.forEach(vf => {
          suggestions.push({
            label: vf.name,
            sortText: `1000${vf.name}`,
            insertText: new SnippetString(`${vf.name}$0></${vf.name}>`),
            kind: CompletionItemKind.Module,
            detail: 'import internal file',
            documentation: 'import internal file: ' + vf.path
          })
        })
      }
      return
    }

    let nextLineTxt = editor.document.lineAt(editor.selection.anchor.line + 1).text
    let veturConfig = workspace.getConfiguration('vetur')
    const tabSize = workspace.getConfiguration('editor').tabSize
    let spaceAdd = ''
    if (veturConfig) {
      for (let i = 0; i < veturConfig.format.options.tabSize; i++) {
        spaceAdd += ' '
      }
    } else {
      for (let i = 0; i < tabSize; i++) {
        spaceAdd += ' '
      }
    }
    let baseEmpty = txt.replace(/(\s)\S.*/gi, '$1')
    let replaceTxt = ` {\n${baseEmpty}${spaceAdd}\n${baseEmpty}}`
    // 本行全是空
    if(/^\s*$/gi.test(txt) || txt === '') {
      replaceTxt = 'name (params)' + replaceTxt
    } else if (/[0-9a-zA-Z]\s{0,1}:\s{0,1}[\w\"\']/gi.test(txt)) {
      // key: value
      replaceTxt = ',\n' + baseEmpty
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
      let isCond = false
      let txtTrim = txt.trim()
      const condList = ['if', 'for', 'while', 'switch']
      condList.forEach(cond => {
        if (txtTrim.indexOf(cond) === 0) {
          isCond = true
        }
      })
      if (!isCond) {
        replaceTxt += ','
      }
    }
    editor.edit((editBuilder) => {
      editBuilder.insert(new Position(editor.selection.anchor.line, txt.length + 1), replaceTxt);
    });
    let newPosition = editor.selection.active.translate(1, (baseEmpty + spaceAdd).length)
    editor.selection = new Selection(newPosition, newPosition);
  }

  // backspace删除处理
  async deleteComplete() {
    let editor = window.activeTextEditor;
    if(!editor) {
      this.asNormal('backspace')
      return; 
    }
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
      await editor.edit((editBuilder) => {
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
          await editor.edit((editBuilder) => {
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
          await editor.edit((editBuilder) => {
            editBuilder.delete(new Selection(new Position(line, preText.length), editor.selection.anchor))
          })
        } else {
          let startPosition
          let endPosition: Position = editor.selection.anchor
          let preLineText = editor.document.getText(new Range(new Position(endPosition.line, 0), endPosition))
          if(endPosition.character === 0 || preLineText.trim() === '') {
            startPosition = new Position(endPosition.line - 1, editor.document.lineAt(endPosition.line - 1).text.length)
          } else {
            startPosition = new Position(endPosition.line, endPosition.character - 1)
            // 对{}, (), [], '', "", <>进行成对删除处理
            let txt = editor.document.getText(new Range(new Position(endPosition.line, endPosition.character - 1), endPosition))
            if(editor.document.lineAt(endPosition.line).text.length > endPosition.character) {
              let nextTxt = editor.document.getText(new Range(endPosition, new Position(endPosition.line, endPosition.character + 1)))
              if((txt === '{' && nextTxt === '}') 
              || (txt === '(' && nextTxt === ')') 
              || (txt === '\'' && nextTxt === '\'') 
              || (txt === '"' && nextTxt === '"') 
              || (txt === '[' && nextTxt === ']') 
              || (txt === '<' && nextTxt === '>')) {
                endPosition = new Position(endPosition.line, endPosition.character + 1)
              }
            }
          }
          // return commands.executeCommand('deleteLeft')
          await editor.edit((editBuilder) => {
            editBuilder.delete(new Selection(startPosition, endPosition))
          })
        }
      }
    } else {
      // 选择块
      this.asNormal('backspace')
    }
  }

  // 强化格式化html标签
  tagFormat() {
    let editor = window.activeTextEditor;
    if(!editor) { 
      this.asNormal('enter')
      return; 
    }
    if (window.activeTextEditor.selections.length === 1) {
      let veturConfig = workspace.getConfiguration('vetur')
      const tabSize = workspace.getConfiguration('editor').tabSize
      let spaceAdd = ''
      if (veturConfig) {
        for (let i = 0; i < veturConfig.format.options.tabSize; i++) {
          spaceAdd += ' '
        }
      } else {
        for (let i = 0; i < tabSize; i++) {
          spaceAdd += ' '
        }
      }
      const spaceAddLen = spaceAdd.length
      let text = editor.document.lineAt(editor.selection.anchor.line).text
      if (/^\s*<[A-Z][A-Za-z0-9_-]*.*>.*<\/[A-Z][A-Za-z0-9_-]*>\s*$/g.test(text)) {
        let space = text.replace(/^(\s*)[a-zA-Z-_<].*/g, '$1')
        let content = `\n${space}${spaceAdd}\n${space}`
        editor.edit((editBuilder) => {
          editBuilder.insert(editor.selection.anchor, content)
        })
        let newPosition = editor.selection.active.translate(1, space.length + spaceAddLen)
        editor.selection = new Selection(newPosition, newPosition);
      } else {
        this.asNormal('enter')
      }
    } else {
      this.asNormal('enter')
    }
  }

  // 选择html代码块
  selectHtmlBlock(editor, lineText, startPosition) {
    const ncname = '[a-zA-Z_][\\w\\-\\.]*'
    const qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')'
    const startTagOpen = new RegExp('^<' + qnameCapture)
    const endTag = new RegExp('^(<\\/' + qnameCapture + '[^>]*>)')
    const comment = /^<!--/
    const commentEnd = '-->'
    const lineCount = editor.document.lineCount
    let lineCurrent = startPosition.line

    let isNoIncludeTag = false
    let tagStack = null
    let col = lineText.indexOf(lineText.trim()) + startPosition.character
    let beginPosition = new Position(startPosition.line, startPosition.character + lineText.length - lineText.replace(/\s*(.*)/, '$1').length)
    lineText = lineText.trim()
    let noIncludeTags = ['input', 'img']

    while(lineText) {
      let textTagPos = lineText.indexOf('<')
      if (textTagPos === 0) {
        let hasEndTag = false
        let hasTag = false
        if (comment.test(lineText)) {
          let commentIndex = lineText.indexOf(commentEnd)
          while(commentIndex === -1 && lineCurrent < lineCount) {
            lineText = editor.document.lineAt(++lineCurrent).text
            commentIndex = lineText.indexOf(commentEnd)
          }
          lineText = lineText.substr(commentIndex + 3, lineText.length)
        }
        const endTagMatch = lineText.match(endTag)
        if (endTagMatch) {
          hasEndTag = true
          if (Array.isArray(tagStack)) {
            let tagIndex = tagStack.length
            if (tagIndex > 0) {
              let isTagMatch = false
              while(tagIndex > 0 && !isTagMatch) {
                let tag = tagStack[tagIndex - 1]
                if (tag === endTagMatch[2]) {
                  isTagMatch = true
                }
                tagStack.pop()
                --tagIndex
              }
            }
          }
          let endAdvance = lineText.indexOf(endTagMatch[1]) + endTagMatch[1].length
          col += endAdvance
          lineText = lineText.substr(endAdvance, lineText.length)
        }

        if (Array.isArray(tagStack) && tagStack.length === 0) {
          editor.selection = new Selection(beginPosition, new Position(lineCurrent, col))
          break
        }

        const startTagMatch = lineText.match(startTagOpen)
        if (startTagMatch) {
          hasTag = true
          if (isNoIncludeTag) {
            let lineTextCur = editor.document.lineAt(lineCurrent).text
            lineText = lineTextCur.substr(0, col)
            let indexLast = lineText.lastIndexOf('>')
            while (indexLast === -1  && lineCurrent > 0) {
              --lineCurrent
              lineText = editor.document.lineAt(lineCurrent).text
              indexLast = lineText.lastIndexOf('>')
            }
            editor.selection = new Selection(beginPosition, new Position(lineCurrent, indexLast + 2))
            break
          }
          if (Array.isArray(tagStack)) {
            tagStack.push(startTagMatch[1])
          } else {
            tagStack = [startTagMatch[1]]
            if (noIncludeTags.indexOf(startTagMatch[1]) !== -1) {
              isNoIncludeTag = true
            }
          }
          const startAdvance = lineText.indexOf(startTagMatch[1]) + startTagMatch[1].length
          col += startAdvance
          lineText = lineText.substr(startAdvance, lineText.length)
        }
        if (lineText.indexOf('/>') !== -1 && Array.isArray(tagStack) && tagStack.length === 1) {
          let tagCloseIndex = lineText.indexOf('/>')
          let prevText = lineText.substr(0, tagCloseIndex + 2)
          let tagReg = /<([\w-]+)(\s*|(\s+[\w-_:@\.]+(=("[^"]*"|'[^']*'))?)+)\s*(\/)?>/gim
          if (!tagReg.test(prevText)) {
            tagStack.pop()
          }
          editor.selection = new Selection(beginPosition, new Position(lineCurrent, col + tagCloseIndex + 2))
          break
        }
        if (!lineText && lineCurrent < lineCount && tagStack.length > 0) {
          do {
            ++lineCurrent
            lineText = editor.document.lineAt(lineCurrent).text
          } while (!lineText && lineCurrent < lineCount)
          col = lineText.indexOf(lineText.trim())
          lineText = lineText.trim()
          continue
        }
        if (!hasTag && !hasEndTag && lineText.length > 0) {
          let noTagIndex = lineText.indexOf(lineText, 1)
          if (noTagIndex === -1) {
            if (lineCurrent < lineCount) {
              do {
                ++lineCurrent
                lineText = editor.document.lineAt(lineCurrent).text
              } while (!lineText && lineCurrent < lineCount)
              col = lineText.indexOf(lineText.trim())
              lineText = lineText.trim()
            } else {
              break
            }
          } else {
            lineText = lineText.substr(noTagIndex, lineText.length)
          }
        }
      } else if (textTagPos > 0) {
        lineText = lineText.substr(textTagPos, lineText.length)
        col += textTagPos
      } else if (textTagPos < 0) {
        if (lineCurrent < lineCount) {
          // 一行最前面是否有 />
          if (lineText.indexOf('/>') !== -1 && Array.isArray(tagStack) && tagStack.length > 0) {
            let tagCloseIndex = lineText.indexOf('/>')
            let prevText = lineText.substr(0, tagCloseIndex + 2)
            let tagReg = /<([\w-]+)(\s*|(\s+[\w-_:@\.]+(=("[^"]*"|'[^']*'))?)+)\s*(\/)?>/gim
            if (!tagReg.test(prevText)) {
              tagStack.pop()
            }
            if(tagStack.length === 0) {
              editor.selection = new Selection(beginPosition, new Position(lineCurrent, col + tagCloseIndex + 2))
              break
            }
          }
          do {
            ++lineCurrent
            lineText = editor.document.lineAt(lineCurrent).text
            if (lineText.replace(/\s/gi, '') === '') {
              lineText = ''
            }
          } while (!lineText && lineCurrent < lineCount)
          col = lineText.indexOf(lineText.trim())
          lineText = lineText.trim()
        } else {
          lineText = ''
        }
      }
    }
  }

  // 选择函数块
  selectJsBlock(editor, lineText, startPosition, type) {
  	let lineCount = editor.document.lineCount
    let lineCurrent = startPosition.line
    let braceLeftCount = 0
    let tagLeft = '{'
    let tagRight = '}'
    if (type === 'array') {
      tagLeft = '['
      tagRight = ']'
    }
    while(lineCurrent <= lineCount) {
      let pos: number = 0
      while((lineText.indexOf(tagLeft, pos) !== -1 || lineText.indexOf(tagRight, pos) !== -1) && pos < lineText.length) {
        let i = -1
        // 左标签
        if (lineText.indexOf(tagLeft, pos) !== -1) {
          i = lineText.indexOf(tagLeft, pos)
        }
        // 右标签
        if (lineText.indexOf(tagRight, pos) !== -1) {
          if (i === -1 || i > lineText.indexOf(tagRight, pos)) {
            // 左标签不存在、左右标签都存在，右标签在前
            --braceLeftCount
            pos = lineText.indexOf(tagRight, pos) + 1
          } else {
            ++braceLeftCount
            pos = i + 1
          }
        } else {
          // 存在左标签
          if (i !== -1) {
            ++braceLeftCount
            pos = i + 1
          }
        }
        if (braceLeftCount === 0) {
          break
        }
      }

      if (braceLeftCount === 0) {
        let extra = 0
        let textExtra = editor.document.lineAt(lineCurrent).text
        if (lineCurrent === startPosition.line) {
          extra = textExtra.indexOf(lineText)
        }
        if (type === 'function' && textExtra[pos + extra - 1] === '}' && textExtra[pos + extra] === ')') {
          extra += 1
        }
        editor.selection = new Selection(startPosition, new Position(lineCurrent, pos + extra))
        return
      }

      ++lineCurrent
      if (lineCount >= lineCurrent) {
        lineText = editor.document.lineAt(lineCurrent).text
      }
    }
    return
  }

  selectLineBlock(editor: TextEditor, lineText: String, startPosition: Position) {
    // "" '' () {}, >< 空格
    // 1. 遍历左侧查询结束标签
    let TAGS = ["\"", "'", "(", "{", "[", " ", "`", ">"]
    let TAGS_CLOSE = {
      "\"": "\"",
      "'": "'",
      "(": ")",
      "{": "}",
      "[": "]",
      " ": " ",
      "`": "`",
      ">": "<"
    }
    let pos = startPosition.character - 1
    let endTag = '',
    beginPos = 0,
    endPos = 0,
    inBeginTags = [],
    includeTags = false
    beginPos = pos
    while (pos >= 0) {
      if (TAGS.indexOf(lineText[pos]) !== -1) {
        endTag = lineText[pos]
        break
      }
      --pos
    }
    if (beginPos === pos) {
      includeTags = true
      beginPos = pos
    } else {
      beginPos = pos + 1
    }
    // 存在结束标签
    if (endTag.length > 0) {
      pos = startPosition.character
      if (endTag === '>') {
        while (pos <= lineText.length && pos >= 0) {
          let txt = lineText[pos]
          if ((txt === TAGS_CLOSE[endTag] || txt === '>') && pos > beginPos) {
            break
          }
          ++pos
        }
      } else {
        while (pos <= lineText.length && pos >= 0) {
          let txt = lineText[pos]
          if (inBeginTags.length === 0 && (txt === TAGS_CLOSE[endTag] || txt === '>') && pos > beginPos) {
            break
          }
          if (inBeginTags.length > 0 && TAGS_CLOSE[inBeginTags[inBeginTags.length - 1]] === txt) {
            inBeginTags.pop()
          } else if (TAGS.indexOf(txt) !== -1 && txt !== ' ') {
            inBeginTags.push(txt)
          }
  
          ++pos
        }
      }
    }
    includeTags ? (endPos = pos + 1) : (endPos = pos)
    editor.selection = new Selection(new Position(startPosition.line, beginPos), new Position(startPosition.line, endPos))
  }

  // 块选择
  blockSelect() {
    let editor = window.activeTextEditor;
    if(!editor) { return; }

    let startPosition = editor.selection.start
    let lineTextObj = editor.document.lineAt(startPosition.line)
    let lineText = lineTextObj.text
    if (lineText.length > 0 && startPosition.character === 0 && lineText[startPosition.character] === '[') {
      this.selectJsBlock(editor, lineText.substring(startPosition.character, lineText.length), startPosition, 'array')
    } else if (lineText.length > 0 && startPosition.character > 0 && lineText[startPosition.character - 1] === '[') {
      this.selectJsBlock(editor, lineText.substring(startPosition.character - 1, lineText.length), new Position(startPosition.line, startPosition.character - 1), 'array')
    } else if (lineText.length > 0 && startPosition.character < lineText.length && lineText[startPosition.character] === '[') {
      this.selectJsBlock(editor, lineText.substring(startPosition.character, lineText.length), startPosition, 'array')
    } else if (lineText.length > 0 && startPosition.character === 0 && lineText[startPosition.character] === '{') {
      this.selectJsBlock(editor, lineText.substring(startPosition.character, lineText.length), startPosition, 'json')
    } else if (lineText.length > 0 && startPosition.character > 0 && lineText[startPosition.character - 1] === '{') {
      this.selectJsBlock(editor, lineText.substring(startPosition.character - 1, lineText.length), new Position(startPosition.line, startPosition.character - 1), 'json')
    } else if (lineText.length > 0 && startPosition.character < lineText.length && lineText[startPosition.character] === '{') {
      this.selectJsBlock(editor, lineText.substring(startPosition.character, lineText.length), startPosition, 'json')
    } else if (lineText.trim().length > 0 && lineText.trim()[0] === '<' && startPosition.character <= lineText.indexOf('<')) {
      lineText = lineText.substring(startPosition.character, lineText.length)
      this.selectHtmlBlock(editor, lineText, startPosition)
    } else if (lineText.trim().length > 0 && lineText.trim()[0] === '<' && startPosition.character <= lineText.indexOf('<')) {
      lineText = lineText.substring(startPosition.character, lineText.length)
      this.selectHtmlBlock(editor, lineText, startPosition)
    } else if (/^\s*[\sa-zA-Z:_-]*\s*\[\s*$/gi.test(lineText)) {
      this.selectJsBlock(editor, lineText, new Position(startPosition.line, lineText.length - lineText.replace(/\s*/, '').length), 'array')
    } else if ((lineText.trim().length > 0 && /(function|if|for|while)?.+\(.*\)\s*{/gi.test(lineText) && /^\s*(function|if|for|while)?\s*$/g.test(lineText.substr(0, startPosition.character)))
      || (/^(\s*[\sa-zA-Z_-]*\([\sa-zA-Z_-]*\)\s*{\s*)|(\s*[\sa-zA-Z:_-]*\s*{\s*)$/gi.test(lineText)) && /^\s*(function|if|for|while)?\s*$/g.test(lineText.substr(0, startPosition.character))) {
      this.selectJsBlock(editor, lineText, new Position(startPosition.line, lineText.length - lineText.replace(/\s*/, '').length), 'function')
    } else {
      // 在本行选择
      this.selectLineBlock(editor, lineText, startPosition)
    }
    return ;
  }

  dispose() {
    this._disposable.dispose();
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
    // 添加vue组件提示
    let vueFiles = App.traverse('.vue', '')
    App.vueFiles = vueFiles
    for (let i = 0; i < vueFiles.length; i++) {
      const vf = vueFiles[i]
      suggestions.push({
        label: vf.name,
        sortText: `1000${i}${vf.name}`,
        insertText: new SnippetString(`${vf.name}$0></${vf.name}>`),
        kind: CompletionItemKind.Module,
        detail: 'vue component',
        documentation: 'internal component: ' + vf.path
      })
    }

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
      // 属性
      let attrs = '';
      defaults && defaults.forEach((item, i) => {
        attrs += ` ${item}=${that.quotes}$${index + i + 1}${that.quotes}`;
      });
      // 开始标签
      snippets.push(`${index > 0 ? '<' : ''}${tag}${attrs}>`);
      defaults && (index += defaults.length)
      index++;
      // 子标签
      if (subtags) {
        subtags.forEach(item => build(item, TAGS[item], snippets));
        snippets.push(`</${tag}>`);
      } else {
        // 关闭标签
        snippets.push(`$${index}</${tag}>`);
      }
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
    let txtArr = txt.match(/<([\w-]+)(\s*|(\s+[\w-_:@\.]+(=("[^"]*"|'[^']*'))?)+)\s*>/gim)
    if(Array.isArray(txtArr) && txtArr.length > 0) {
      let txtStr = txtArr[txtArr.length - 1]
      return /<([\w-]+)(\s*|(\s+[\w-_:@\.]+(=("[^"]*"|'[^']*'))?)+)\s*>$/gi.test(txtStr)
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
    let txtArr = txtInfo.text.match(/<([\w-]+)(\s*|(\s+[\w-_:@\.]+(=("[^"]*"|'[^']*'))?)+)\s*>/gim)
    let tag = 'div'
    if(txtArr) {
      tag = txtArr[txtArr.length - 1].replace(/<([\w-]+)(\s*|(\s+[\w-_:@\.]+(=("[^"]*"|'[^']*'))?)+)\s*>/gim, '$1')
    }
    let exclude = ['br', 'img']
    if (exclude.indexOf(tag) === -1) {
      window.activeTextEditor.edit((editBuilder) => {
        editBuilder.insert(this._position, '</' + tag + '>');
      });
      let newPosition = window.activeTextEditor.selection.active.translate(0, 0)
      window.activeTextEditor.selection = new Selection(newPosition, newPosition);
    }
  }

  // 判断是否是导入
  isImport() {
    let lineTxt = this._document.lineAt(this._position.line).text.trim()
    return /^import.*/.test(lineTxt)
  }

  // 导入建议
  importSuggestion() {
    let search = this._document.lineAt(this._position.line).text.trim()
    search = search.replace(/^import/, '').trim()
    let suggestions = []
    if (search) {
      let vueFiles = App.traverse('', search)
      vueFiles.forEach(vf => {
        let filePath = vf.path.replace(/\\/gi, '/')
        let camelName = vf.name.replace(/(-[a-z])/g, (_, c) => {
          return c ? c.toUpperCase() : ''
        }).replace(/-/gi, '')
        suggestions.push({
          label: vf.name,
          sortText: `0${vf.name}`,
          insertText: new SnippetString(`${camelName} from '${filePath}'`),
          kind: CompletionItemKind.Folder,
          detail: vf.name,
          documentation: `import ${camelName} from ${filePath}`
        })
      })
    }
    return suggestions
  }

  // 获取props属性值
  getPropAttr(documentText, tagName) {
    // 1. 找出标签所在路径
    let tagNameUpper = tagName.replace(/(-[a-z])/g, (_, c) => {
      return c ? c.toUpperCase() : ''
    }).replace(/-/gi, '')
    let pathReg = RegExp('import\\\s+(' + tagName + '|' + tagNameUpper + ')\\\s+from\\\s+[\'\"]([^\'\"]*)', 'g')
    let pathRegArr = documentText.match(pathReg)
    if (pathRegArr && pathRegArr.length > 0) {
      let tagPath = pathRegArr[0]
      tagPath = tagPath.replace(/(.*['"])/, '')
      const config = workspace.getConfiguration('vue-helper')
      tagPath = tagPath.replace(config.componentPrefix.alias, config.componentPrefix.path)
      if (!tagPath.endsWith('.vue')) {
        tagPath += '.vue'
      }
      if (tagPath.indexOf('./') > 0 || tagPath.indexOf('../') > 0) {
        tagPath = path.join(this._document.fileName, '../', tagPath)
      } else {
        tagPath = path.join(workspace.rootPath, tagPath)
      }
      documentText = fs.readFileSync(tagPath, 'utf8')
    } else {
      return
    }

    // 2. 获取标签文件中的prop属性
    let props = []
    let scriptIndex = documentText.indexOf('<script')
    if (scriptIndex) {
      let docText = documentText.substr(scriptIndex, documentText.length)
      let propIndex = docText.indexOf('props')
      let propStack = 0
      if (propIndex) {
        docText = docText.substr(propIndex, docText.length)
        let braceBeforeIndex = docText.indexOf('{')
        let braceAfterIndex = 0
        if (braceBeforeIndex) {
          ++propStack
          docText = docText.substr(braceBeforeIndex + 1, docText.length)
        }
        let propText = ''
        while(propStack > 0 && docText.length > 0) {
          braceBeforeIndex = docText.indexOf('{')
          braceAfterIndex = docText.indexOf('}')
          if (braceBeforeIndex === -1) {
            docText = ''
          } else if (braceBeforeIndex < braceAfterIndex) {
            if (propStack === 1) {
              propText += docText.substr(0, braceBeforeIndex)
            }
            ++propStack
            docText = docText.substr(braceBeforeIndex > 0 ? braceBeforeIndex + 1 : 1, docText.length)
          } else {
            --propStack
            docText = docText.substr(braceAfterIndex > 0 ? braceAfterIndex + 1 : 1, docText.length)
          }
        }
        let propMatch = propText.match(/\s[\w-]*:/gi)
        if (propMatch.length > 0) {
          propMatch.forEach((propItem, propIndex) => {
            propItem = propItem.substr(1, propItem.length - 2)
            propItem = propItem.replace(/([A-Z])/g, (_, c) => {
              return c ? '-' + c.toLowerCase() : ''
            })
            props.push({
              label: propItem,
              sortText: '0' + propIndex,
              insertText: new SnippetString(`:${propItem}="$0"`),
              kind: CompletionItemKind.Property,
              documentation: ''
            })
          })
        }
      }
    }
    let emitReg = documentText.match(/\$emit\(\s?['"](\w*)/g)
    if (emitReg && emitReg.length > 0) {
      for (let i = 0; i < emitReg.length; i++) {
        let emitName = emitReg[i];
        emitName = emitName.replace(/(.*['"])/, '')
        props.push({
          label: emitName,
          sortText: '0' + (props.length + 1),
          insertText: new SnippetString(`@${emitName}="$0"`),
          kind: CompletionItemKind.Method,
          documentation: ''
        })
      }
    }
    return props
  }

  // 提供完成项(提示入口)
  provideCompletionItems(document: TextDocument, position: Position, token: CancellationToken): ProviderResult<CompletionItem[] | CompletionList> {
    this._document = document;
    this._position = position;

    if (this.isCloseTag()) { // 标签关闭标签
      this.getCloseTagSuggestion()
      return null
    }
    const config = workspace.getConfiguration('vue-helper');
    this.size = config.get('indent-size');
    this.quotes = config.get('quotes') === 'double' ? '"' : "'";

    // 标签、属性
    let tag: TagObject | string | undefined = this.getPreTag();
    let attr = this.getPreAttr();
    if (this.isAttrValueStart(tag, attr)) { // 属性值开始
      return this.getAttrValueSuggestion(tag.text, attr);
    } else if (this.isAttrStart(tag)) { // 属性开始
      if (TAGS[tag.text]) {
        // 插件提供
        return this.getAttrSuggestion(tag.text);
      } else {
        return this.getPropAttr(this._document.getText(), tag.text)
      }
    } else if (this.isTagStart()) { // 标签开始
      switch (document.languageId) {
        case 'vue':
          return this.notInTemplate() ? [] : this.getTagSuggestion();
        case 'html':
          // todo
          return this.getTagSuggestion();
      }
    } else if (this.isImport()) {
      return this.importSuggestion()
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