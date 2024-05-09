import { ExtensionContext, workspace, ConfigurationTarget, commands } from 'vscode'
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
  public name: string = 'vue-helper'
  public context: ExtensionContext
  // 工程根目录
  public projectRootPath: string = ''
  public projectRootPathReg: RegExp
  public tabSize = ''
  public traverse: Traverse
  public isTs = false
  public prefix: Prefix = {
    alias: '@',
    path: 'src'
  }
  public vueFiles: any = []
  public store = {
    set: (key: string, value: any) => {
      workspace.getConfiguration(this.name).update(key, value, ConfigurationTarget.Global);
    },
    get: (key: string) => {
      return workspace.getConfiguration(this.name).get(key);
    }
  }

  public setContext(name: string, value: boolean) {
    commands.executeCommand('setContext', name, value);
  }

  public getActiveEditorDir(activePath: string, ) {
    return activePath.replace(this.projectRootPathReg, '').replace(/[\/|\\]\w*\.\w*$/gi, '')
  }

  public getActiveEditorPath(activePath: string, ) {
    return activePath.replace(this.projectRootPathReg, '')
  }

  public getVueRelativePath(activeEditorPath: string, vuePath: string) {
    let vfPath = path.relative(activeEditorPath, vuePath)
    vfPath = './' + vfPath
    return vfPath.replace(/\\/gi, '/')
  }
  
  constructor(context: ExtensionContext) {
    this.context = context
    this.projectRootPath = getWorkspaceRoot('')
    this.projectRootPathReg = new RegExp(`.*${this.projectRootPath}/`, 'gi')
    this.traverse = new Traverse(this.projectRootPath, this.prefix)
    this.tabSize = getTabSize()
    const tsconfigPath = winRootPathHandle(path.join(this.projectRootPath, 'tsconfig.json'))
    this.isTs = fs.existsSync(tsconfigPath)
    this.vueFiles = this.traverse.search('.vue', '', false)
    if (workspace.workspaceFolders) {
      const watcher = workspace.createFileSystemWatcher('**/*.vue')
      watcher.onDidCreate(() => { this.vueFiles = this.traverse.search('.vue', '', false) })
      watcher.onDidDelete(() => { this.vueFiles = this.traverse.search('.vue', '', false) })
    }
  }

  register() {
  }
}