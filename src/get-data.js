// 从iview获取数据函数
setTimeout(function(){
  let anchorList = document.querySelectorAll('.api .anchor h3')
  let tag = '', vueTags = {}, vueAttributes = {}
  for (let index = 0; index < anchorList.length; index++) {
    const element = anchorList[index];
    // 属性
    if(element.innerHTML.indexOf('props') !== -1) {
      tag = element.innerHTML.replace(/ props/, '')
      console.log('tag: ' + tag)
      vueTags[tag] = {}
      let propsTable = element.parentNode.nextSibling
      while(propsTable.nodeType === 3) {
        propsTable = propsTable.nextSibling
      }
      let propsTds = propsTable.querySelectorAll('tbody tr td')
      let TD_LEN = 4
      vueTags[tag]['attributes'] = []
      vueTags[tag]['framework'] = "iview2"
      let attrName = ''
      for(let i = 0; i < propsTds.length; i++) {
        if(i % TD_LEN === 0) { // 属性
          attrName = tag + '/' + propsTds[i].textContent
          vueTags[tag]['attributes'].push(propsTds[i].textContent.trim())
          vueAttributes[attrName] = {}
        }
        if(i % TD_LEN === 1) {
          vueAttributes[attrName].description = propsTds[i].textContent.trim()
        }
        if(i % TD_LEN === 2 && propsTds[i].textContent.trim() === 'Boolean') {
          vueAttributes[attrName].type = 'boolean'
        }
      }
    }
    // 事件
    if(element.innerHTML.indexOf('events') !== -1) {
      let propsTable = element.parentNode.nextSibling
      while(propsTable.nodeType === 3) {
        propsTable = propsTable.nextSibling
      }
      let propsTds = propsTable.querySelectorAll('tbody tr td')
      let TD_LEN = 3
      let attrName = ''
      for(let i = 0; i < propsTds.length; i++) {
        if(i % TD_LEN === 0) { // 属性
          attrName = tag + '/' + propsTds[i].textContent.trim()
          vueTags[tag]['attributes'].push(propsTds[i].textContent.trim())
          vueAttributes[attrName] = {type: 'method'}
        }
        if(i % TD_LEN === 1) {
          vueAttributes[attrName].description = propsTds[i].textContent.trim()
        }
      }
    }
    // slot
    if(element.innerHTML.indexOf('slot') !== -1) {
      let propsTable = element.parentNode.nextSibling
      while(propsTable.nodeType === 3) {
        propsTable = propsTable.nextSibling
      }
      let propsTds = propsTable.querySelectorAll('tbody tr td')
      let TD_LEN = 2
      let attrName = ''
      vueTags[tag].description = 'slot：'
      for(let i = 0; i < propsTds.length; i++) {
        if(i % TD_LEN === 0) { // 属性
          vueTags[tag].description += propsTds[i].textContent.trim()
        }
        if(i % TD_LEN === 1) {
          vueTags[tag].description += `（${propsTds[i].textContent.trim()}） `
        }
      }
    }
    // 方法
    if(element.innerHTML.indexOf('methods') !== -1) {
      let propsTable = element.parentNode.nextSibling
      while(propsTable.nodeType === 3) {
        propsTable = propsTable.nextSibling
      }
      let propsTds = propsTable.querySelectorAll('tbody tr td')
      let TD_LEN = 3
      let attrName = ''
      for(let i = 0; i < propsTds.length; i++) {
        if(i % TD_LEN === 0) { // 属性
          attrName = tag + '/' + propsTds[i].textContent.trim()
          vueTags[tag]['attributes'].push(propsTds[i].textContent.trim())
          vueAttributes[attrName] = {type: 'method'}
        }
        if(i % TD_LEN === 1) {
          vueAttributes[attrName].description = propsTds[i].textContent.trim()
        }
      }
    }
  }
  console.log('vue-tags: ', JSON.stringify(vueTags))
  console.log('vue-attributes: ', JSON.stringify(vueAttributes))
}, 500)