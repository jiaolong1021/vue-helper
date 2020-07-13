# vue-helper
this plugin main enhance ability for write vue and extension for Element-UI, VUX, IVIEW
## detail function can see change log.

## release 2.4.7 notes
resolve issue [14](https://github.com/jiaolong1021/vue-helper/issues/14)
resolve issue [15](https://github.com/jiaolong1021/vue-helper/issues/15)
resolve issue [16](https://github.com/jiaolong1021/vue-helper/issues/16)
optimize block select function.

## release 2.4.6 notes
add $refs tips

## release 2.4.4 notes
resolve issue [11](https://github.com/jiaolong1021/vue-helper/issues/11) <br>
optimize some bug.

## release 2.3.8 notes
support local file property and methods tips through showQuickFix (default ctrl + space).
![](https://common.xxpie.com/local-tips.gif)

## release 2.3.6 notes
support router definition jump
![](https://common.xxpie.com/router-jump.gif)

## release 2.3.4 notes
fixed bug
[issue9](https://github.com/jiaolong1021/vue-helper/issues/9)

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

## release 2.1.16 notes
optimize jump to definition

## release 2.1.11 notes
+ object key value optimize. [alt + shift + enter]
![](https://common.xxpie.com/helper-key-value.gif)

## release 2.1.0 notes
add common code snippets for vue
all begin with v

| prefix | vue html snippet |
| --- | --- |
| vfor | v-for="(item, index) in items" :key="index" |
| vcomponent | &lt;component :is="componentId">&lt;/component> |
| vka | &lt;keep-alive>&lt;/keep-alive> |
| vtransition | &lt;transition>&lt;/transition> |
| vtg |  &lt;transition-group>&lt;/transition-group> |
| vrl | &lt;router-link>&lt;/router-link> |
| vrlt | &lt;router-link to=''>&lt;/router-link> |
| vrv | &lt;router-view>&lt;/router-view> |

| prefix | vue javascript snippet |
| --- | --- |
| vsilent | Vue.config.silent = true |
| veh | Vue.config.errorHandler = function (err, vm, info) {} |
| vwh | Vue.config.warnHandler = function (msg, vm, trace) {} |
| vextend | Vue.extend({template: template}) |
| vset | Vue.set(target, key, value) |
| vdelete | Vue.delete(target, key) |
| vdirective | Vue.directive({id, [definition]}) |
| vfilter | Vue.filter({id, [definition]}) |
| vcomponent | Vue.component({id, [definition]}) |
| vnt | Vue.nextTick({}) |
| vuse | Vue.use(plugin) |
| vmixin | Vue.mixin({mixin}) |
| vcompile | Vue.compile(template) |
| vdata | data() { return {} } |
| vmounted | mounted () {} |
| vbm | beforeMount () {} |
| vcreated | created () {} |
| vbc | beforeCreate () {} |
| vupdated | updated () {} |
| vbu | beforeUpdate () {} |
| vactivated | activated () {} |
| vdeactivated | deactivated () {} |
| vbd | beforeDestroy () {} |
| vdestroyed | destroyed () {} |
| vprops | props: {} |
| vpd | propsData: {} |
| vcomputed | computed: {} |
| vmethods | methods: {} |
| vwatch | watch: {} |
| vwo | key: { deep: true, immediate: true, handler: function (val, oldVal}) { } } |
| vdirectives | directives: {} |
| vfilters | filters: {} |
| vcomponents | components: {} |
| vmixins | mixins:[] |
| vprovide | provide: {} |
| vinject | inject: [] |
| vmodel | model: {prop: '', event: ''} |
| vrender | render(h) {} |
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

### release 1.7.1 notes
enhance go to definition in javascript file.
detail config see release 1.4.2 notes

### release 1.7.0 notes
1. optimize choice for code block
2. add vue html attr select function. shortkey(**alt + x**)
![](https://common.xxpie.com/helper-choice-attr.gif)

### release 1.6.9 notes
add snippets for element-ui [prefix with el-]

### release 1.6.0 notes
add select block fucntion. shortkey(**alt + x**) <br>
now support function, html tag, if, for, while, json, array block select
![](https://common.xxpie.com/helper-selectBlock.gif)

### release 1.5.0 notes
exchange rem to px or exchange px to rem for all file 
through command
![](https://common.xxpie.com/helper-rem-file.gif)

### release 1.4.5 notes
rem px exchange, shortkey (**alt + z**)
![](https://common.xxpie.com/helper-rem.gif)
rem px exchange setting
![](https://common.xxpie.com/helper-rem-config.png)

### release 1.4.2 notes
support add alias through user settings. (use for jump to definition function)
alias support relative path
![](https://common.xxpie.com/helper-setting-alias.png)
support iview, element-ui tag jump to definition
![](https://common.xxpie.com/helper-iview-jump.gif)

### release 1.4.0 notes
jump to definition function support self define component.
not supoort global component, must import by import or require.
the jump path support begin with @ and relation path
![](https://common.xxpie.com/helper-definition-file-jump.gif)

### release 1.3.1 notes
property or method go to definiton in current page (keyword: cmd(mac) | ctrl(win))
![](https://common.xxpie.com/helper-go-to-define.gif)

### release 1.2.0 notes
1. now support element tag see document through hover.
![](https://common.xxpie.com/helper-element-tag.gif)
2. enhance tag close function
![](https://common.xxpie.com/helper-tag-slip.gif)
3. fix bugs

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
 