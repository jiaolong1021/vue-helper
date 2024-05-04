import { ExtensionContext } from 'vscode'
import { getTabSize, getWorkspaceRoot, winRootPathHandle } from './util/util'
import Traverse from './util/traverse'
import * as path from 'path'
import * as fs from 'fs'

export interface Prefix {
  alias: string
  path: string
}

export default class ExplorerProvider {
  // 全局变量
  public context: ExtensionContext
  // 工程根目录
  public projectRootPath: string = ''
  public tabSize = ''
  public traverse: Traverse
  public isTs = false
  public prefix: Prefix = {
    alias: '@',
    path: 'src'
  }
  
  constructor(context: ExtensionContext) {
    this.context = context
    this.projectRootPath = getWorkspaceRoot('')
    this.traverse = new Traverse(this.projectRootPath, this.prefix)
    this.tabSize = getTabSize()
    const tsconfigPath = winRootPathHandle(path.join(this.projectRootPath, 'tsconfig.json'))
    this.isTs = fs.existsSync(tsconfigPath)
  }

  register() {
  }
}