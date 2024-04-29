import { ExtensionContext, workspace, l10n, window } from 'vscode';

export function activate(context: ExtensionContext) {
  const message = l10n.t('Hello');
  window.showInformationMessage(message)
  if (workspace.workspaceFolders) {
    init(context)
  }
}

function init(context: ExtensionContext) {
  console.log(context)
}