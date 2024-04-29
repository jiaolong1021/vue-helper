// 文档入口
import element from './element-ui';
import elementPlus from './element-plus-doc';
import vant from './vant';
import ant from './ant-desigin-vue-doc'

export function getDocuments(version: string[]) {
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
  if (version.includes('vant')) {
    ret = Object.assign(ret, vant)
  }
  return ret
}