import { window, Position, Range, workspace } from 'vscode';

export class PxRem {
  handle() {
    let editor = window.activeTextEditor;
    if (!editor) { return; }
    let config = workspace.getConfiguration('vue-helper')
    let px = config['rem-px']
    if (px === 0) {
      return;
    }
    let len = config['rem-decimal-length']
    let select: string = editor.document.getText(new Range(editor.selection.start, editor.selection.end))
    if (/^[0-9]*(\.[0-9]*)?rem$/gi.test(select)) {
      // rem
      let val: any = parseFloat(select.replace(/rem/gi, '')) * parseFloat(px)
      editor.edit((editBuilder) => {
        editBuilder.replace(new Range(editor.selection.start, editor.selection.end), Math.round(val) + 'px')
      });
    } else if (/^[0-9]*(\.[0-9]*)?px$/gi.test(select)) {
      // px
      let val: any = parseFloat(select.replace(/px/gi, '')) / parseFloat(px)
      let decimal = (val + '').split('.')
      if (decimal.length > 1 && decimal[1].length > len) {
        val = decimal[0] + '.' + decimal[1].substr(0, len - 1)
      }
      editor.edit((editBuilder) => {
        editBuilder.replace(new Range(editor.selection.start, editor.selection.end), val + 'rem')
      });
    } else {
      return;
    }
  }

  // 整个文件px替换成rem
  handlePxToRem(type: string) {
    let editor = window.activeTextEditor;
    if (!editor) { return; }
    let config = workspace.getConfiguration('vue-helper')
    let px = config['rem-px']
    if (px === 0) {
      return;
    }
    let len = config['rem-decimal-length']
    let lineCount = editor.document.lineCount

    // 1。 获取所有px的位置
    let rangeArr = []
    let index: any = -1
    for (let i = 0; i < lineCount; i++) {
      let textLine = editor.document.lineAt(i)
      let reg = /[0-9]*(\.[0-9]*)?px/gi
      if (type === 'rem') {
        reg = /[0-9]*(\.[0-9]*)?rem/gi
      }
      let pxArr = textLine.text.match(reg)
      if (pxArr) {
        for (let j = 0; j < pxArr.length; j++) {
          const pxItem = pxArr[j];
          let pos = textLine.text.indexOf(pxItem, index + 1)
          rangeArr.push({
            val: pxItem,
            range: new Range(new Position(textLine.lineNumber, pos), new Position(textLine.lineNumber, pos + pxItem.length))
          })
          index = pos
        }
        index = -1
      }
    }

    // 2. 全文件替换px值
    editor.edit((editBuilder) => {
      if (type === 'rem') {
        for (let i = 0; i < rangeArr.length; i++) {
          const range = rangeArr[i];
          let val: any = parseFloat(range.val.replace(/rem/gi, '')) * parseFloat(px)
          editBuilder.replace(range.range, Math.round(val) + 'px')
        }
      } else {
        for (let i = 0; i < rangeArr.length; i++) {
          const range = rangeArr[i];
          let val: any = parseFloat(range.val.replace(/px/gi, '')) / parseFloat(px)
          let decimal = (val + '').split('.')
          if (decimal.length > 1 && decimal[1].length > len) {
            val = decimal[0] + '.' + decimal[1].substr(0, len - 1)
          }
          editBuilder.replace(range.range, val + 'rem')
        }
      }
    });
  }
}