'use strict';
import * as vscode from 'vscode';
import {App, ElementDocsContentProvider, SCHEME, ElementCompletionItemProvider, DocumentHoverProvider } from './app';
import { vueHelperDefinitionProvider } from './definitionProvider'
import { PxRem } from './px-rem';
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
    let completion = vscode.languages.registerCompletionItemProvider(['vue', 'html'], completionItemProvider, '' ,':', '<', '"', "'", '/', '@', '(', '>', '{');
    let vueLanguageConfig = vscode.languages.setLanguageConfiguration('vue', {wordPattern: app.WORD_REG});

    // 函数补全函数
    let functionCompletionDisposable = vscode.commands.registerCommand('vue-helper.functionCompletion', () => {
        app.getLineText()
    })

    // 删除处理函数
    let deleteCompleteDisposable = vscode.commands.registerCommand('vue-helper.deleteComplete', () => {
        app.deleteComplete()
    })

    // px、rem转化函数
    let pxRemDisposable = vscode.commands.registerCommand('vue-helper.pxRem', () => {
        new PxRem().handle()
    })

    // 到达定义函数
    let vueHelperDefinition = vscode.languages.registerDefinitionProvider(['vue', 'html'], new vueHelperDefinitionProvider())

    context.subscriptions.push(app, registration, completion, vueLanguageConfig, registrationHover, functionCompletionDisposable, deleteCompleteDisposable, vueHelperDefinition, pxRemDisposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}