import element from './element';
import elementJs from './element-js';
import elementPlus from './element-plus-tag';
import elementPlusJs from './element-plus-js';
import ant from "./ant-desigin-vue-tag";
import vant from './vant';
// import vue from './vue';
// import vant from './vant';

export function getTags(version: string[]) {
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

export function getVantTags() {
  return vant
}

export function getJsTags(version: string[]) {
  let ret = {}
  if (version.includes('element-ui')) {
    ret = Object.assign(ret, elementJs)
  }
  if (version.includes('element-plus')) {
    ret = Object.assign(ret, elementPlusJs)
  }
  // if (version.includes('ant-design-vue')) {
  //   ret = Object.assign(ret, ant)
  // }
  // if (version.includes('vant')) {
  //   ret = Object.assign(ret, vant)
  // }
  return ret
}