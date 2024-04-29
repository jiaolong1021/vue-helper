import element from "./element";
import elementPlus from "./element-plus";
import vue from "./vue";
import vant from "./vant";

export function getGlobalAttrs(version: string[]) {
  let ret = {
    ...vue
  }
  if (version.includes('element-ui')) {
    ret = Object.assign(ret, element)
  }
  if (version.includes('element-plus')) {
    ret = Object.assign(ret, elementPlus)
  }
  // if (version.includes('ant-design-vue')) {
  //   ret = Object.assign(ret, ant)
  // }
  if (version.includes('vant')) {
    ret = Object.assign(ret, vant)
  }
  
  return ret
}