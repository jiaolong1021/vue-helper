import * as fs from 'fs'
import * as path from 'path'
import ExplorerProvider, { Prefix } from '../explorer'

export default class Traverse {
  public explorer: ExplorerProvider
  public prefix: Prefix
  public constructor(explorer: ExplorerProvider, prefix: Prefix) {
    this.explorer = explorer
    this.prefix = prefix
  }

  // 遍历组件
  search(poster: any, searchName: any, usePrefix: boolean) {
    let files: any[] = [];
    let cond: Function;
    let componentPath = ''
    let prefix = usePrefix ? this.prefix : {}
    // if (this.explorer.config.rootPath) {
    //   componentPath = this.explorer.config.rootPath.component
    //   let pathAlias = this.explorer.config.rootPath.root.split('=')
    //   if (pathAlias.length === 2) {
    //     prefix = {
    //       alias: pathAlias[0],
    //       path: pathAlias[1],
    //     }
    //   }
    // }
    if (!this.explorer.projectRootPath) {
      // 未打开工程
      return []
    }

    if (componentPath && Array.isArray(componentPath) && componentPath.length > 0) {
      cond = function (rootPath: any) {
        return componentPath.indexOf(rootPath) !== -1;
      };
    } else {
      let ignore: string[] = ['node_modules', 'dist', 'build'];
      cond = function (rootPath: any) {
        return !(rootPath.charAt(0) === '.' || ignore.indexOf(rootPath) !== -1);
      };
    }
    let rootPathes = fs.readdirSync(this.explorer.projectRootPath || '');
    
    for (let i = 0; i < rootPathes.length; i++) {
      const rootPath = rootPathes[i];
      if (cond(rootPath)) {
        let stat = fs.statSync(path.join(this.explorer.projectRootPath || '', rootPath));
        if (stat.isDirectory()) {
          this.traverseHandle(rootPath, files, prefix, poster, searchName);
        } else {
          this.traverseAdd(rootPath, rootPath, files, prefix, poster, searchName);
        }
      }
    }
    return files;
  }

  // 遍历添加
  traverseAdd(rootPath: string, dir: string, files: any[], prefix: any, poster: string, search: string) {
    if (rootPath.endsWith(poster)) {
      let posterReg = new RegExp('-?(.*)' + (poster ? poster : '\\.\\w*') + '$', 'gi');
      let name = rootPath;
      name = name.replace(posterReg, '$1'); 
      if (!search || (search && dir.includes(search))) {
        files.push({
          name: name,
          path: dir.replace(new RegExp(`^${prefix.path}`, 'gi'), prefix.alias).replace(/\\/gi, '/')
        });
        if (name === 'index') {
          name = dir.replace(/\\/gi, '/').replace(/.*\/(\w*)\/\w*.\w*/gi, '$1')
          files.push({
            name: name,
            path: dir.replace(new RegExp(`^${prefix.path}`, 'gi'), prefix.alias).replace(/\\/gi, '/')
          })
        }
      }
    }
  }

  // 遍历处理
  traverseHandle(postPath: string, files: any [], prefix: any, poster: string, search: string) {
    let fileDirs = fs.readdirSync(path.join(this.explorer.projectRootPath || '', postPath));
    for (let i = 0; i < fileDirs.length; i++) {
      const rootPath = fileDirs[i];
      if (!(rootPath.charAt(0) === '.')) {
        let dir = path.join(postPath, rootPath);
        let stat = fs.statSync(path.join(this.explorer.projectRootPath || '', dir));
        if (stat.isDirectory()) {
          this.traverseHandle(dir, files, prefix, poster, search);
        } else {
          this.traverseAdd(rootPath, dir, files, prefix, poster, search);
        }
      }
    }
  }
}