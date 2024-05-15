import { ExtensionContext } from 'vscode';
import ExplorerProvider from './explorer';
import FrameworkProvider from './framework';
import Assist from './assist';
import MonitorProvider from './monitor'

export function activate(context: ExtensionContext) {
  init(context)
}

function init(context: ExtensionContext) {
  const explorer = new ExplorerProvider(context)

  const framework = new FrameworkProvider(explorer)
  framework.register()

  const assist = new Assist(explorer)
  assist.register()

  new MonitorProvider(explorer)
}