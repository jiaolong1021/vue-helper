import { CancellationToken, CompletionContext, CompletionItem, CompletionItemProvider, CompletionList, Position, ProviderResult, TextDocument, 
  languages, workspace, Range } from "vscode";
import ExplorerProvider from './explorer'
import * as fs from 'fs'
import * as path from 'path'
import { winRootPathHandle } from './util/util'
import { getJsTags, getTags } from './tags/index'
import { getSnippets } from "./snippets";
import { getGlobalAttrs } from './globalAttribute/index'

export default class FrameworkProvider {
  public explorer: ExplorerProvider
  public frameworks: string[] = []

  constructor(explorer: ExplorerProvider) {
    this.explorer = explorer
    try {
      const pkg = fs.readFileSync(winRootPathHandle(path.join(this.explorer.projectRootPath, 'package.json')), 'utf-8')
      pkg.includes('element-plus') && this.frameworks.push('element-plus')
      pkg.includes('element-ui') && this.frameworks.push('element-ui')
      pkg.includes('ant-design-vue') && this.frameworks.push('ant-design-vue')
    } catch (error) {
    }
  }

  register() {
    this.explorer.context.subscriptions.push(languages.registerCompletionItemProvider(['vue', 'javascript', 'typescript', 'html', 'wxml'], new FrameworkCompletionItemProvider(this), '', ':', '<', '"', "'", '/', '@', '(', '>', '{'))
  }

}

class FrameworkCompletionItemProvider implements CompletionItemProvider {
  public frameworkProvider: FrameworkProvider
  public vueFiles: any = []
  public TAGS: any = {}
  public TAGSJs: any = {}
  public SNIPPETS: any = {}
  public GlobalAttrs: any = {}

  constructor(frameworkProvider: FrameworkProvider) {
    this.frameworkProvider = frameworkProvider
    this.vueFiles = this.frameworkProvider.explorer.traverse.search('.vue', '')
    this.TAGS = getTags(this.frameworkProvider.frameworks)
    this.SNIPPETS = getSnippets(this.frameworkProvider.frameworks)
    this.TAGSJs = getJsTags(this.frameworkProvider.frameworks)
    this.GlobalAttrs = getGlobalAttrs(this.frameworkProvider.frameworks)
    if (workspace.workspaceFolders) {
      const watcher = workspace.createFileSystemWatcher('**/*.vue')
      watcher.onDidCreate(() => { this.vueFiles = this.frameworkProvider.explorer.traverse.search('.vue', '') })
      watcher.onDidDelete(() => { this.vueFiles = this.frameworkProvider.explorer.traverse.search('.vue', '') })
    }
  }

  isCloseTag(document: TextDocument, position: Position) {
    let txt = document.getText(new Range(new Position(position.line, 0), position)).trim();
    if(!txt.endsWith('>') || /.*=("[^"]*>|'[^']*>)$/gi.test(txt) || txt.endsWith('/>')) {
      return false;
    }
    let txtArr = txt.match(/<([\w-]+)(\s*|(\s+[\w-_:@\.]+(=("[^"]*"|'[^']*'))?)+)\s*>/gim);
    if(Array.isArray(txtArr) && txtArr.length > 0) {
      let txtStr = txtArr[txtArr.length - 1];
      return /<([\w-]+)(\s*|(\s+[\w-_:@\.]+(=("[^"]*"|'[^']*'))?)+)\s*>$/gi.test(txtStr);
    }
    return false;
  }

  provideCompletionItems(document: TextDocument, position: Position, token: CancellationToken, context: CompletionContext): ProviderResult<CompletionItem[] | CompletionList<CompletionItem>> {
    console.log(token)
    console.log(context)
    if (this.isCloseTag(document, position)) {

    }

    return []
  }
  resolveCompletionItem?(item: CompletionItem, token: CancellationToken): ProviderResult<CompletionItem> {
    console.log('resolveCompletionItem', item)
    console.log(token)
    throw new Error("Method not implemented.");
  }

}