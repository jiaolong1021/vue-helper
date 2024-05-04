import { ExtensionContext, workspace } from 'vscode';
import ExplorerProvider from './explorer';
import FrameworkProvider from './framework';
import Assist from './assist';

export function activate(context: ExtensionContext) {
  if (workspace.workspaceFolders) {
    init(context)
  }
}

function init(context: ExtensionContext) {
  const explorer = new ExplorerProvider(context)

  const framework = new FrameworkProvider(explorer)
  framework.register()

  const assist = new Assist(explorer)
  assist.register()
}