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
    if (/^[0-9]*.[0-9]*rem$/gi.test(select)) {
      // rem
      let val: any = parseFloat(select.replace(/rem/gi, '')) * parseFloat(px)
      editor.edit((editBuilder) => {
        editBuilder.replace(new Range(editor.selection.start, editor.selection.end), Math.round(val) + 'px')
      });
    } else if (/^[0-9]*.[0-9]*px$/gi.test(select)) {
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
}