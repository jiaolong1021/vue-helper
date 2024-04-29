import ant from './ant-desigin-vue-text';
import elementPlus from './element-plus-text';
import element from './element-text';

export function getSnippets(version: string[]) {
  let ret = {}
  if (version.includes('element-ui')) {
    ret = Object.assign(ret, element)
  }
  if (version.includes('element-plus')) {
    ret = Object.assign(ret, elementPlus)
  }
  if (version.includes('ant-design-vue')) {
    ret = Object.assign(ret, ant)
  }
  // if (version.includes('vant')) {
  //   ret = Object.assign(ret, vant)
  // }
  return ret
}

// export function getJsTip(version: string) {
//   return {}
// }