import { TextDocument, Position, CancellationToken, ProviderResult, DefinitionProvider, 
  Definition, Location, TextLine, Range, Uri } from 'vscode'
const fs = require('fs')
const path = require('path');
  
// 跳转到定义位置
export class vueHelperDefinitionProvider implements DefinitionProvider {
  /**
   * 判断是文件内跳转还是文件外跳转
   */
  getDefinitionPosition(lineText: string) {
    const pathRegs = [
      /import\s+.*\s+from\s+['"](.*)['"]/,
      /import\s*\(['"](.*)['"]\)/,
      /require\s*\(['"](.*)['"]\)/,
      /import\s+['"](.*)['"]/
    ];
    let execResult: RegExpMatchArray;
    for (const pathReg of pathRegs) {
      execResult = pathReg.exec(lineText);
      if (execResult && execResult[1]) {
        const filePath = execResult[1];
        const filePathIndex = execResult[0].indexOf(filePath);
        const start = execResult.index + filePathIndex;
        const end = start + filePath.length;
        return {
          path: filePath
        }
      }
    }
  }
  
  /**
   * 文件内跳转
   */
  definitionInFile(document: TextDocument, position: Position, line: TextLine) {
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
    // 判断选择文件是否是标签
    if (textMeta === '<') {
      attr = 'components'
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
      // 判断现在正在对哪个属性进行遍历
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
        let braceLeft = lineText.match(/{/gi) ? lineText.match(/{/gi).length : 0
        let braceRight = lineText.match(/}/gi) ? lineText.match(/}/gi).length : 0
        braceLeftCount += braceLeft - braceRight
      } else if (attr === 'components') {
        // component组件，直接跳转到相关文件
        let tag = selectText.toLowerCase().replace(/-/gi, '')
        if (lineText.toLowerCase().includes(tag) && (lineText.trim().indexOf('import') === 0 || lineText.trim().indexOf('require') === 0)) {
          return this.definitionOutFile(document, this.getDefinitionPosition(lineText))
        }
      } else if(attr) {
        let matchName = lineText.replace(/\s*(\w*)\s*(:|\().*/gi, '$1')
        if(selectText === matchName && braceLeftCount === 1) {
          return Promise.resolve(new Location(document.uri, new Position(pos, lineText.indexOf(matchName) + matchName.length)))
        }
        let braceLeft = lineText.match(/{/gi) ? lineText.match(/{/gi).length : 0
        let braceRight = lineText.match(/}/gi) ? lineText.match(/}/gi).length : 0
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
  
  /**
   * 文件外跳转
   * @param document 
   * @param position 
   * @param line 
   */
  definitionOutFile(document: TextDocument, file: any) {
    let filePath = file.path
    // 支持的前缀、后缀
    const prefix = ['@']
    const postfix = ['vue', 'js', 'css', 'scss', 'less']
    for (let i = 0; i < prefix.length; i++) {
      const pre = prefix[i]
      if (file.path.indexOf(pre) === 0) {
        filePath = filePath.replace(pre, '.')
      }
    }
    // 通过package.json文件来判断文件目录
    const judge = 'package.json'
    let fileName = document.fileName
    let isBasic = false
    while(fileName.length > 0 && !isBasic) {
      fileName = fileName.replace(/(.*)\/[^\/]*$/gi, '$1')
      isBasic = fs.existsSync(fileName + path.sep + judge)
    }

    // 添加后缀，判断文件是否存在
    let isFileExist = false
    for (let i = 0; i < postfix.length; i++) {
      const post = postfix[i]
      let tempFile = path.resolve(fileName, filePath) + '.' + post
      isFileExist = fs.existsSync(tempFile)
      if (isFileExist) {
        return Promise.resolve(new Location(Uri.file(tempFile), new Position(0, 0)))
      }
    }

    return Promise.resolve(null)
  }

  provideDefinition(document: TextDocument, position: Position, token: CancellationToken): ProviderResult<Definition> {
    // 获取定义word
    const line = document.lineAt(position.line)
    // 判断是文件内跳转还是文件外跳转
    let file = this.getDefinitionPosition(line.text)
    if (file) {
      return this.definitionOutFile(document, file)
    } else {
      return this.definitionInFile(document, position, line)
    }
  }
}