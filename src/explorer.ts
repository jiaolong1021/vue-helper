import { ExtensionContext } from 'vscode'
import { getTabSize, getWorkspaceRoot } from './util/util'
import Traverse from './util/traverse'

export default class ExplorerProvider {
  // 全局变量
  public context: ExtensionContext
  // 工程根目录
  public projectRootPath: string = ''
  public tabSize = ''
  public traverse: Traverse
  
  constructor(context: ExtensionContext) {
    this.context = context
    this.projectRootPath = getWorkspaceRoot('')
    this.traverse = new Traverse(this.projectRootPath)
    this.tabSize = getTabSize()
  }

  register() {
  }
}