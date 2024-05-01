import ant from './ant-desigin-vue-text';
import elementPlus from './element-plus-text';
import element from './element-text';

export function getSnippets(frameworks: string[], tabSize: string) {
  let ret = {}
  if (frameworks.includes('element-ui')) {
    ret = Object.assign(ret, element)
  }
  if (frameworks.includes('element-plus')) {
    ret = Object.assign(ret, elementPlus(tabSize))
  }
  if (frameworks.includes('ant-design-vue')) {
    ret = Object.assign(ret, ant)
  }
  // if (frameworks.includes('vant')) {
  //   ret = Object.assign(ret, vant)
  // }
  return ret
}

// export function getJsTip(frameworks: string) {
//   return {}
// }