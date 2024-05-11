import elementUI from './element-ui/index'
import elementPlus from './element-plus/index'
import antDesignVue from './ant-design-vue/index'

const framework: any = {
  'element-ui': elementUI,
  'element-plus': elementPlus,
  'ant-design-vue': antDesignVue
} 

export function getTag(frameworks: string[], tabSize: string) {
  let ret = {}
  frameworks.forEach((frameworkName) => {
    if (framework[frameworkName]) {
      ret = Object.assign(ret, framework[frameworkName].tag(tabSize))
    }
  })
  return ret
}

export function getJsTag(frameworks: string[], tabSize: string) {
  let ret = {}
  frameworks.forEach((frameworkName) => {
    if (framework[frameworkName]) {
      ret = Object.assign(ret, framework[frameworkName].jsTag(tabSize))
    }
  })
  return ret
}

export function getAttribute(frameworks: string[], tabSize: string) {
  let ret = {}
  frameworks.forEach((frameworkName) => {
    if (framework[frameworkName]) {
      ret = Object.assign(ret, framework[frameworkName].attribute(tabSize))
    }
  })
  return ret
}

export function getGlobalAttribute(frameworks: string[], tabSize: string) {
  let ret = {}
  frameworks.forEach((frameworkName) => {
    if (framework[frameworkName]) {
      ret = Object.assign(ret, framework[frameworkName].globalAttribute(tabSize))
    }
  })
  return ret
}

export function getDocument(frameworks: string[], tabSize: string) {
  let ret = {}
  frameworks.forEach((frameworkName) => {
    if (framework[frameworkName]) {
      ret = Object.assign(ret, framework[frameworkName].document(tabSize))
    }
  })
  return ret
}