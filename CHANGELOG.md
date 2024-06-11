## version 3.5.0
1. 表单生成器位置调整问题修复
2. 表单生成器生成代码冲突问题解决
3. alt + enter生成重复方法处理
4. 增强api接口生成兼容性

# version 3.0.0
* 增加Pro功能
* 通过swagger一键生成后端对接接口
![swagger](https://www.80fight.cn/helper/swagger.gif)

# version 2.5.0

1. underlying refactoring to completely solve performance problems.
2. support [Element Plus](/document/element-plus.md) framework，247 code blocks are supported。
3. resolve issue [71](https://github.com/jiaolong1021/vue-helper/issues/71)、[64](https://github.com/jiaolong1021/vue-helper/issues/64)、
   [57](https://github.com/jiaolong1021/vue-helper/issues/57)、[54](https://github.com/jiaolong1021/vue-helper/issues/54)、[40](https://github.com/jiaolong1021/vue-helper/issues/40)

## release 2.4.7 notes
resolve issue [14](https://github.com/jiaolong1021/vue-helper/issues/14)
resolve issue [15](https://github.com/jiaolong1021/vue-helper/issues/15)
resolve issue [16](https://github.com/jiaolong1021/vue-helper/issues/16)
optimize block select function.

## release 2.4.6 notes
add $refs tips

## release 2.4.5 notes
optimize some bug.

## release 2.4.4 notes
resolve issue [11](https://github.com/jiaolong1021/vue-helper/issues/11) <br>
optimize some bug.

## release 2.4.3 notes
vue file support js tips

## release 2.4.0 notes
optimize local file import

## release 2.3.8 notes
support local file property and methods tips through showQuickFix (default ctrl + space).
![](https://common.xxpie.com/local-tips.gif)

## release 2.3.7 notes
support local file property and methods tips through showQuickFix (default ctrl + space).
![](https://common.xxpie.com/local-tips.gif)

## release 2.3.6 notes
support router definition jump
![](https://common.xxpie.com/router-jump.gif)

## release 2.3.5 notes
optimize html block select

## release 2.3.4 notes
fixed bug
[issue9](https://github.com/jiaolong1021/vue-helper/issues/9)

## release 2.3.3 notes
fixed bug
[issue9](https://github.com/jiaolong1021/vue-helper/issues/9)

## release 2.3.2 notes
alt + shift + enter to auto import
bug fixed

## release 2.3.1 notes
1. support internal component tips.
alt + shift + enter to auto import
![](https://common.xxpie.com/helps-internalComponent.gif)
2. support import file tips
![](https://common.xxpie.com/helps-import.gif)
you can set vue-helper.componentIgnore to ignore files to search component.<br>
set vue-helper.componentPath to assign the search dir. <br>
set vue-helper.componentPrefix to replace prefix in file path.
![](https://common.xxpie.com/helps-componentSet.png)

## release 2.3.0 notes
support internal component tips.
![](https://common.xxpie.com/helper-components.png)
alt + shift + enter to auto import
![](https://common.xxpie.com/helper-components-auto.png)

## release 2.2.6 notes
support internal component tips.
![](https://common.xxpie.com/helper-components.png)

## release 2.2.5 notes
solve short cut (backspace) can not delete in seach extention, or search.

## release 2.2.4 notes
optimize  block selection

## release 2.2.3 notes
solve short cut (backspace) can not delete in seach extention, or search.
now only work in editor.

## release 2.2.0 notes
1. optimize block select function.
2. remove some unused code.

## release 2.1.16 notes
optimize jump to definition

## release 2.1.15 notes
solve issue #5 [definition jump feature can't jump to async function ](https://github.com/jiaolong1021/vue-helper/issues/5)

## release 2.1.14 notes
optimize rem transfer to px

## release 2.1.13 notes
optimize some bugs.

## release 2.1.11 notes
+ enhance element-ui tips.
[el-timeline, el-timeline-item, el-divider, el-calendar, el-image, el-backtop, el-drawer]
+ object key value optimize. [alt + shift + enter]
![](https://common.xxpie.com/helper-key-value.gif)

## release 2.1.10 notes
add common code snippets for vue

## release 2.1.9 notes
optimize img, br complete tag

## release 2.1.8 notes
remove jquery
add el-table-column tips
optimize block select

## release 2.1.7 notes
optimize iview tag,

## release 2.1.6 notes
use webpack to Bundle Extension

## release 2.1.4 notes
optimize iview tag

## release 2.1.3 notes
modify snippets short cut, remove begin with vg or vo. all begin with v

## release 2.1.0 notes
add common code snippets for vue
all begin with v
| prefix | vue html snippet |
| --- | --- |
| vfor | v-for="(item, index) in items" :key="index" |
| vcomponent | \<component :is="componentId">\</component> |
| vka | \<keep-alive>\</keep-alive> |
| vtransition | \<transition>\</transition> |
| vtg |  \<transition-group>\</transition-group> |
| vrl | \<router-link>\</router-link> |
| vrlt | \<router-link to=\"\">\</router-link> |
| vrv | \<router-view>\</router-view> |

| prefix | vue javascript snippet |
| --- | --- |
| vgsilent | Vue.config.silent = true |
| vgeh | Vue.config.errorHandler = function (err, vm, info) {} |
| vgwh | Vue.config.warnHandler = function (msg, vm, trace) {} |
| vgextend | Vue.extend({template: template}) |
| vgset | Vue.set(target, key, value) |
| vgdelete | Vue.delete(target, key) |
| vgdirective | Vue.directive({id, [definition]}) |
| vgfilter | Vue.filter({id, [definition]}) |
| vgcomponent | Vue.component({id, [definition]}) |
| vgnt | Vue.nextTick({}) |
| vguse | Vue.use(plugin) |
| vgmixin | Vue.mixin({mixin}) |
| vgcompile | Vue.compile(template) |
| vodata | data() { return {} } |
| vomounted | mounted () {} |
| vobm | beforeMount () {} |
| vocreated | created () {} |
| vobc | beforeCreate () {} |
| voupdated | updated () {} |
| vobu | beforeUpdate () {} |
| voactivated | activated () {} |
| vodeactivated | deactivated () {} |
| vobd | beforeDestroy () {} |
| vodestroyed | destroyed () {} |
| voprops | props: {} |
| vopd | propsData: {} |
| vocomputed | computed: {} |
| vomethods | methods: {} |
| vowatch | watch: {} |
| vowo | key: { deep: true, immediate: true, handler: function (val, oldVal}) { } } |
| vodirectives | directives: {} |
| vofilters | filters: {} |
| vocomponents | components: {} |
| vomixins | mixins:[] |
| voprovide | provide: {} |
| voinject | inject: [] |
| vomodel | model: {prop: '', event: ''} |
| vorender | render(h) {} |
| vnew | new Vue({}) |
| vnt | this.$nextTick(() => {}) |
| vdata | this.$data |
| vprops| this.$props |
| vel | this.$el |
| voptions | this.$options |
| vparent | this.$parent |
| vroot | this.$root |
| vchildren | this.$children |
| vslots | this.$slots |
| vss | this.$scopedSlots.default({}) |
| vrefs | this.$refs |
| vis | this.$isServer |
| vattrs | this.$attrs |
| vlisteners | this.$listeners |
| vwatch | this.$watch(expOrFn, callback, [opitons]) |
| vset | this.$set(target, key, value) |
| vdelete | this.$delete |
| von | this.$on(event, callback) |
| vonce | this.$once(event, callback) |
| voff | this.$off(event, callback) |
| vemit | this.$emit(event, args) |
| vmount | this.$mount() |
| vfu | this.$forceUpdate() |
| vdestroy | this.$destroy() |

## release 2.0.4 notes
optimize block select function.

## release 2.0.3 notes
optimize block select function.

## release 2.0.1 notes
optimize tips for javascript
![](https://common.xxpie.com/helper-tips-opt.gif)
tips.json
```
{
  "plus": {
    "field": {
      "ROUTE_SPEASKER": ""
    },
    "method": {
      "getRecorder": {
        "params": ["url, id, styles, extras", "url, id, styles"],
        "returnType": "object",
        "return": "name"
      },
      "get": {
        "params": "url, id, styles, extras",
        "returnType": "object",
        "return": "name"
      }
    }
  },
  "name": {
    "field": {
      "hello": ""
    }
  }
}
```
### release 2.0.0 notes
support tips for javascript through local json file.
you can config like this:
![](https://common.xxpie.com/helper-tips-config.png)
tips result like this:
![](https://common.xxpie.com/helper-tips.gif)

### release 1.7.2 notes
go to definition supports auto add index path

### release 1.7.1 notes
enhance go to definition in javascript file.
detail config see release 1.4.2 notes

### release 1.7.0 notes 
1. optimize choice for code block
2. add vue html attr select function. shortkey(**alt + x**)
![](https://common.xxpie.com/helper-choice-attr.gif)

### release 1.6.12 notes
optimize write snippet

### release 1.6.11 notes
optimize write snippet

### release 1.6.10 notes
add snippet for pagination and regExp for phone and email [prefix with reg-]

### release 1.6.9 notes
add snippets for element-ui

### release 1.6.8 notes
optimize jump definition function

### release 1.6.7 notes
optimize jump definition function

### release 1.6.6 notes
enhance select block ability for css select.

### release 1.6.5 notes
support select variable for obj and array.  shortkey(**alt + x**)
![](https://common.xxpie.com/helper-variable-block.gif)

### release 1.6.4 notes
optimize select function

### release 1.6.3 notes
support global vue component jump

### release 1.6.2 notes
fixed relative path jump.

### release 1.6.1 notes
fixed relative path jump.

### release 1.6.0 notes
add select block fucntion. shortkey(**alt + x**) <br>
now support function, html tag, if, for, while, json, array block select
![](https://common.xxpie.com/helper-selectBlock.gif)

### release 1.5.1 notes
fix bug jump to definition with postfix

### release 1.5.0 notes
exchange rem to px or exchange px to rem for all file through command
![](https://common.xxpie.com/helper-rem-file.gif)

### release 1.4.5 notes
rem px exchange, shortkey (**alt + z**)
![](https://common.xxpie.com/helper-rem.gif)
rem px exchange setting
![](https://common.xxpie.com/helper-rem-config.png)

### release 1.4.4 notes
1. optimize go to definition function
2. optimize alias setting.

### release 1.4.3 notes
1. support path ignore index
![](https://common.xxpie.com/helper-path-index.gif)
2. iview Input add on-search method tip

 ### release 1.4.2 notes
support add alias through user settings. (use for jump to definition function)
alias support relative path
![](https://common.xxpie.com/helper-setting-alias.png)
support iview, element-ui tag jump to definition
![](https://common.xxpie.com/helper-iview-jump.gif)

### release 1.4.1 notes
solve issue: 
[#2 Move to Definition function does not work](https://github.com/jiaolong1021/vue-helper/issues/2)

### release 1.4.0 notes
jump to definition function support self define component.
not supoort global component, must import by import or require.
the jump path support begin with @ and relation path
![](https://common.xxpie.com/helper-definition-file-jump.gif)

### release 1.3.10 notes
optimize jump to definition function

### release 1.3.9 notes
add iview page snippets. iv-page, iv-page-data, iv-page-method

### release 1.3.8 notes
close tag support tag attributu name include .

### release 1.3.7 notes
1. close tag support tag attributu name include : or @
2. iview split, cell, divider snippet.

### release 1.3.6 notes
close tag support tag attributu name include : or @

### release 1.3.5 notes
add iview icon tip, optimize close tag function

### release 1.3.4 notes
add iview modal snippets

### release 1.3.3 notes
add iview form, rules snippets

### release 1.3.2 notes
1. optimize go to definition method
2. add iview form code snippets.
![](https://common.xxpie.com/helper-iv-form.gif)

### release 1.3.0 notes
property or method go to definiton in current page (keyword: cmd(mac) | ctrl(win))
![](https://common.xxpie.com/helper-go-to-define.gif)

### release 1.2.1 notes
optimize backspace handle

### release 1.2.0 notes
1. now support element tag see document through hover.
![](https://common.xxpie.com/helper-element-tag.gif)
2. enhance tag close function
![](https://common.xxpie.com/helper-tag-slip.gif)
3. fix bugs

### release 1.1.8 notes
1. optimize attribute hover
2. add line empty delete funciton(enter backspace key).
![](https://common.xxpie.com/helper-line-delete.gif)

### release 1.1.5 notes
optimize close tag function、 {{}} function, add change log.

### release 1.1.4 notes
optimize columns tip and message snippet show

### 1.1.3
---
auto close tag optinize, table columns attribute tips
![](https://common.xxpie.com/helper-columns.gif)
![](https://common.xxpie.com/helper-columns2.gif)

### version 1.1.2
#### 1. vue hook function tip
![](https://common.xxpie.com/helper-hook-function.gif)
#### 2. method completion snippets (keyboard shortcut: alt + shift + enter)
![](https://common.xxpie.com/helper-methods.gif)
#### 3. autoclose html tag
![](https://common.xxpie.com/helper-autoclose.gif)
#### 4. {{}} completion in vue template
![](https://common.xxpie.com/helper-{{}}.gif)

### version 1.0.0
## basic functions introduce
---
### 1. see document detail through hover tag (**now only support iview**)
![](https://common.xxpie.com/helper-document.gif)

### 2. edit through tag name (friendly tip tag name about framework <code>element-ui</code>、<code>vux</code>、<code>iview</code>)
![](https://common.xxpie.com/helper-tag.gif)

### 3. tag attribute tip
![](https://common.xxpie.com/helper-attr.gif)

### 4. method tip (tip begin: element -> <code>el-</code>、iview -> <code>iv-</code>)
![](https://common.xxpie.com/helper-method.gif)

### questions feedback 
if you has any questions or good idea, you can feedback through issue.

**Enjoy!**