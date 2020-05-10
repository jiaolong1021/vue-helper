import { CompletionItemProvider, workspace, TextDocument, Position, CancellationToken, SnippetString, 
  ProviderResult, CompletionItem, CompletionList, CompletionItemKind, Range} from "vscode";
const fs = require('fs')
const path = require('path')
const _  = require('lodash')

export class JsCompletionItemProvider implements CompletionItemProvider {
  public static document = null
  // 获取refs方法
  getRefMethods(documentText, tagName) {
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
        tagPath = path.join(JsCompletionItemProvider.document.fileName, '../', tagPath)
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
      let propIndex = docText.indexOf('methods')
      let propStack = 0
      if (propIndex) {
        docText = docText.substr(propIndex, docText.length)
        let braceBeforeIndex = docText.indexOf('{')
        let braceAfterIndex = 0
        if (braceBeforeIndex) {
          ++propStack
          docText = docText.substr(braceBeforeIndex + 1, docText.length)
        }
        let propText = []
        while(propStack > 0 && docText.length > 0) {
          braceBeforeIndex = docText.indexOf('{')
          braceAfterIndex = docText.indexOf('}')
          if (braceBeforeIndex === -1) {
            docText = ''
          } else if (braceBeforeIndex < braceAfterIndex) {
            if (propStack === 1) {
              propText.push(docText.substr(0, braceBeforeIndex))
            }
            ++propStack
            docText = docText.substr(braceBeforeIndex > 0 ? braceBeforeIndex + 1 : 1, docText.length)
          } else {
            --propStack
            docText = docText.substr(braceAfterIndex > 0 ? braceAfterIndex + 1 : 1, docText.length)
          }
        }
        if (propText.length > 0) {
          propText.forEach((propItem, propIndex) => {
            let protName = propItem.replace(/\s*(async\s*)?(\w*)\s*(:|\().*/gi, '$2')
            protName = protName.replace(/,/gi, '')
            props.push({
              label: protName,
              sortText: '0' + propIndex,
              insertText: new SnippetString(`${protName}($1)$0`),
              kind: CompletionItemKind.Method,
              documentation: ''
            })
          })
        }
      }
    }
    return props
  }

 // 获取对象属性和方法
 getFieldMethod(content, objName) {
    let fieldObj = _.get(content, objName, '')
    if (typeof fieldObj === 'object') {
      let ret = []
      for (const fieldKey in fieldObj.field) {
        if (fieldObj.field.hasOwnProperty(fieldKey)) {
          // ret.push(new CompletionItem(fieldKey, CompletionItemKind.Field))
          ret.push({
            label: fieldKey,
            sortText: `00` + (ret.length),
            insertText: fieldKey,
            kind: CompletionItemKind.Field
          })
        }
      }
      for (const methodKey in fieldObj.method) {
        if (fieldObj.method.hasOwnProperty(methodKey)) {
          ret.push({
            label: methodKey,
            sortText: `00` + (ret.length),
            insertText: methodKey,
            kind: CompletionItemKind.Method
          })
          // ret.push(new CompletionItem(methodKey, CompletionItemKind.Method))
        }
      }
      return ret
    }
    return null
 }

  provideCompletionItems(document: TextDocument, position: Position, token: CancellationToken): ProviderResult<CompletionItem[] | CompletionList> {
    let text = document.lineAt(position.line).text.trim()
    JsCompletionItemProvider.document = document
    // refs处理
    if (/\.\$refs..+/gi.test(text)) {
      // 获取相应组件, 用于获取组件名
      let docText = document.getText(new Range(new Position(0, 0), new Position(document.lineCount, 0)))
      let refName = text.replace(/.*\$refs\.([^\.]*).*/, '$1')
      let tag = docText.match(new RegExp("<([^<]*)\\s[^<]*ref=\"" + refName + "\""))
      if (Array.isArray(tag) && tag.length >= 2) {
        return this.getRefMethods(docText, tag[1])
      } else {
        return null
      }
    } else if (text.includes('.$refs.')) {
      let docText = document.getText(new Range(new Position(0, 0), new Position(document.lineCount, 0)))
      let matchResult = docText.match(/\sref="[^"]*"/gi)
      let res = []
      matchResult.forEach(item => {
        res.push({
          label: item.replace(/ ref="(.*)"/gi, '$1'),
          sortText: `00` + (res.length),
          insertText: item.replace(/ ref="(.*)"/gi, '$1'),
          kind: CompletionItemKind.Property
        })
      })
      return res
    }
    let config = workspace.getConfiguration('vue-helper')
    if (config.tips) {
      let filePath = path.resolve(workspace.rootPath, config.tips)
      if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, 'utf8');
        const content = JSON.parse(data);
        let prevText = document.lineAt(position.line).text.trim()
        if (prevText.endsWith(')')) {
          // 方法参数提示
          let ret = prevText.replace(/.*\.(.*)\(\)$/gi, '$1')
          for (const key in content) {
            if (content.hasOwnProperty(key)) {
              const obj = content[key];
              for (const keyMethod in obj.method) {
                if (obj.method.hasOwnProperty(keyMethod)) {
                  if (keyMethod === ret && obj.method[keyMethod].params) {
                    if (Array.isArray(obj.method[keyMethod].params)) {
                      return obj.method[keyMethod].params.map(keyItem => {
                        return {
                          label: keyItem,
                          sortText: `00` + (ret.length),
                          insertText: new SnippetString(keyItem),
                          kind: CompletionItemKind.Field
                        }
                      })
                    } else {
                      return [{
                        label: obj.method[keyMethod].params,
                        sortText: `00` + (ret.length),
                        insertText: new SnippetString(obj.method[keyMethod].params),
                        kind: CompletionItemKind.Field
                      }]
                    }
                  }
                }
              }
            }
          }
        }
        prevText = prevText.substring(0, prevText.length - 1)
        let lineText = ''
        if (prevText.includes('.')) {
          lineText = prevText.replace(/.*\.(.*)$/gi, '$1')
        } else {
          lineText = prevText
        }
        if (lineText.endsWith(')')) {
          // 匹配到方法
          lineText = lineText.replace(/\(.*\)/, '')
          for (const key in content) {
            if (content.hasOwnProperty(key)) {
              const obj = content[key];
              for (const keyMethod in obj.method) {
                if (obj.method.hasOwnProperty(keyMethod)) {
                  if (keyMethod === lineText && obj.method[keyMethod].return && obj.method[keyMethod].returnType && obj.method[keyMethod].returnType === 'object') {
                    return this.getFieldMethod(content, obj.method[keyMethod].return)
                  }
                }
              }
            }
          }
        } else {
          // 域
          return this.getFieldMethod(content, lineText)
        }
      }
    }
    return null
  }
}