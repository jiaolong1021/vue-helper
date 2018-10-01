'use strict';
import * as vscode from 'vscode';
import {App, ElementDocsContentProvider, SCHEME, ElementCompletionItemProvider, DocumentHoverProvider} from './app';
import Library from './library';

export function activate(context: vscode.ExtensionContext) {
    let library = new Library(context);
    let app = new App();
    app.setConfig();
    let docs = new ElementDocsContentProvider();
    let completionItemProvider = new ElementCompletionItemProvider();
    let registration = vscode.workspace.registerTextDocumentContentProvider(SCHEME, docs);
    let registrationHover = vscode.languages.registerHoverProvider('vue', new DocumentHoverProvider)

    // 为标签、属性提示提供自动完成功能, 关闭标签功能
    let completion = vscode.languages.registerCompletionItemProvider(['vue', 'html'], completionItemProvider, '', ' ', ':', '<', '"', "'", '/', '@', '(', '>', '{');
    let vueLanguageConfig = vscode.languages.setLanguageConfiguration('vue', {wordPattern: app.WORD_REG});

    // 注册文档搜索命令
    let disposable = vscode.commands.registerCommand('vue-helper.searchUnderCursor', () => {
        if (context.workspaceState.get('element-helper.loading', false)) {
            vscode.window.showInformationMessage('Document is initializing, please wait a minute depend on your network.');
            return;
        }

        // 获取选中文本
        const selection =  app.getSeletedText();
        let items = library.queryAll().map((item) => {
            return {
                label: item.tag,
                detail: item.name,
                path: item.path,
                description: item.type
            };
        });
        
        if (items.length < 1) {
            vscode.window.showInformationMessage('Initializing。。。, please try again.');
            return;
        }
        let find = items.filter(item => item.label === selection);
        if (find.length) {
            app.openDocs({keyword: find[0].path}, find[0].label);
            return;
        }
        const a = vscode.window.showQuickPick(items).then(selected => {
            selected && app.openDocs({keyword: selected.path}, selected.label);
        })
    });

    let functionCompletionDisposable = vscode.commands.registerCommand('vue-helper.functionCompletion', () => {
        app.getLineText()
    })

    context.subscriptions.push(app, disposable, registration, completion, vueLanguageConfig, registrationHover, functionCompletionDisposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}