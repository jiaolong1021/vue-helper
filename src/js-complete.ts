import { CompletionItemProvider, workspace, TextDocument, Position, CancellationToken, CompletionContext, 
  ProviderResult, CompletionItem, CompletionList, CompletionItemKind} from "vscode";
const fs = require('fs')
const path = require('path')
const _  = require('lodash')

export class JsCompletionItemProvider implements CompletionItemProvider {
  provideCompletionItems(document: TextDocument, position: Position, token: CancellationToken): ProviderResult<CompletionItem[] | CompletionList> {
    let config = workspace.getConfiguration('vue-helper')
    if (config.tips) {
      let filePath = path.resolve(workspace.rootPath, config.tips)
      if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, 'utf8');
        const content = JSON.parse(data);
        let lineText = document.lineAt(position.line).text.substring(0, position.character).replace(/.*[^a-zA-Z.]([a-zA-Z.]*)$/, '$1')
        lineText = lineText.substr(0, lineText.length - 1)
        let ret = _.get(content, lineText, '')
        if (Array.isArray(ret)) {
          return ret.map(retItem => {
              return new CompletionItem(retItem, CompletionItemKind.Field);
          })
        } else if (typeof ret === 'object') {
          let keys = Object.keys(ret)
          return keys.map(keyItem => {
            return new CompletionItem(keyItem, CompletionItemKind.Field);
          })
        } else if (typeof ret === 'string') {
          return [new CompletionItem(ret, CompletionItemKind.Field)];
        }
      }
    }
    return null
  }
}