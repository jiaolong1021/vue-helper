import { workspace, TextDocument, Position } from 'vscode'
import * as os from 'os'
import * as path from 'path'

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

export function getCurrentWord(document: TextDocument, position: Position) {
  let i = position.character - 1;
  const text = document.lineAt(position.line).text;
  while (i >= 0 && ' \t\n\r\v":{[,'.indexOf(text.charAt(i)) === -1) {
    i--;
  }
  return text.substring(i + 1, position.character);
}

export function getRelativePath(src: string, dist: string) {
  let vfPath = path.relative(winRootPathHandle(src), dist)
  vfPath = vfPath.replace(/\\/gi, '/')
  if (vfPath.startsWith('../')) {
    vfPath = vfPath.substr(1, vfPath.length)
  }
  return vfPath
}