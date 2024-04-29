import { workspace } from 'vscode'
import * as os from 'os'

// windows根路径处理
export function winRootPathHandle(pagePath: string) {
  if (os.platform().includes("win") && pagePath.length > 0 && (pagePath[0] === "\\" || pagePath[0] === "/")) {
    return pagePath.substr(1, pagePath.length);
  } else {
    return pagePath;
  }
}

export function getWorkspaceRoot(documentUrl: string) {
  let url: string = '';
  if (workspace.workspaceFolders?.length === 1) {
    return winRootPathHandle(workspace.workspaceFolders[0].uri.path)
  }
  workspace.workspaceFolders?.forEach((workspaceFolder) => {
    if(documentUrl.includes(workspaceFolder.uri.path)) {
      url = workspaceFolder.uri.path
    }
  })
  return winRootPathHandle(url)
}

export function getTabSize() {
  const tabSize = workspace.getConfiguration('editor').tabSize;
  let space = '';
  for (let i = 0; i < tabSize; i++) {
    space += ' ';
  }
  if (space.length === 0) {
    space = '  '
  }
  return space
}