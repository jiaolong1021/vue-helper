export default (tabSize: string) => {
  return {
    "el-button": `<el-button type="primary">$1</el-button>`,
    "el-button:plain": `<el-button type="primary" plain>$1</el-button>`,
    "el-button:round": `<el-button type="primary" round>$1</el-button>`,
    "el-button:circle": `<el-button type="primary" circle>$1</el-button>`,
    "el-button:disabled": `<el-button type="primary" disabled>$1</el-button>`,
    "el-button:link": `<el-button type="primary" link>$1</el-button>`,
    "el-button:text": `<el-button type="primary" text>$1</el-button>`,
    "el-button:icon": `<el-button type="primary" :icon="$1">$2</el-button>`,
    "el-button:loading": `<el-button type="primary" :loading="$1">$2</el-button>`,
    "el-button-group": `<el-button-group>
${tabSize}<el-button type="primary">$1</el-button>
${tabSize}<el-button type="primary">$2</el-button>
</el-button-group>`
  }
}