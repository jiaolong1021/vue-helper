export default (tabSize: string) => {
  return {
"vnew": `new Vue({
${tabSize}$1
})`,
"vgsilent": `Vue.config.silent = \${1:true}`,
"vgeh": `Vue.config.errorHandler = function (err, vm, info) {
${tabSize}\${1:// handle error}
}`,
"vgwh": `Vue.config.warnHandler = function (msg, vm, trace) {
${tabSize}\${1:// handle warn}
}`,
"vgextend": `Vue.extend({
${tabSize}template:\${1:template}
})`,
"vgnt": `Vue.nextTick({
${tabSize}$1
})`,
"vgset": `Vue.set(\${2:target}, \${3:key}, \${4:value})`,
"vgdelete": `Vue.delete(\${2:target}, \${3:key})`,
"vgdirective": `Vue.directive(\${2:id}\${3:, [definition]})`,
"vgfilter": `Vue.filter(\${1:id}\${2:, [definition]})`,
"vgcomponent": `Vue.component(\${1:id}\${2:, [definition]})$0`,
"vguse": `Vue.use(\${1:plugin})$0`,
"vgmixin": `Vue.mixin({\${1:mixin}})`,
"vgcompile": `Vue.compile(\${1:template})`,
"vdata": `data() {
${tabSize}return {
${tabSize}${tabSize}$1
${tabSize}}
},$0`,
"vmounted": `mounted () {
${tabSize}$1
}`,
"vbm": `beforeMount () {
${tabSize}$1
}`,
"vcreated": `created () {
${tabSize}$1
}`,
"vbc": `beforeCreate () {
${tabSize}$1
}`,
"vupdated": `updated () {
${tabSize}$1
}`,
"vbu": `beforeUpdate () {
${tabSize}$1
}`,
"vactivated": `activated () {
${tabSize}$1
}`,
"vdeactivated": `deactivated () {
${tabSize}$1
}`,
"vbd": `beforeDestroy () {
${tabSize}$1
}`,
"vdestroyed": `destroyed () {
${tabSize}$1
}`,
"vprops": `props: {
${tabSize}$1
}`,
"vpd": `propsData: {
${tabSize}$1
}`,
"vcomputed": `computed: {
${tabSize}$1
}`,
"vmethods": `methods: {
${tabSize}$1
}`,
"vwatch": `watch: {
${tabSize}$1
}`,
"vwo": `\${1:key}: {
${tabSize}deep: \${2:true},
${tabSize}immediate: \${3:true},
${tabSize}handler: function (\${4:val}, \${5:oldVal}) {
${tabSize}${tabSize}$6
${tabSize}}
},$0`,
"vdirectives": `directives: {
${tabSize}$1
}`,
"vfilters": `filters: {
${tabSize}$1
}`,
"vcomponents": `components: {
${tabSize}$1
}`,
"vmixins": `mixins:[$1],`,
"vprovide": `provide: {
${tabSize}$1
}`,
"vinject": `inject: [$1],`,
"vmodel": `model: {
${tabSize}prop: $1,
${tabSize}event: $2
}`,
"vrender": `render(h) {
${tabSize}$1
},`,
"vel": `\${1|this,vm|}.$el$2`,
"voptions": `\${1|this,vm|}.$options$2`,
"vparent": `\${1|this,vm|}.$parent$2`,
"vroot": `\${1|this,vm|}.$root$2`,
"vchildren": `\${1|this,vm|}.$children$2`,
"vslots": `\${1|this,vm|}.$slots$2`,
"vss": `\${1|this,vm|}.$scopedSlots.default({
${tabSize}$2
})`,
"vrefs": `\${1|this,vm|}.$refs$2`,
"vis": `\${1|this,vm|}.$isServer$2`,
"vattrs": `\${1|this,vm|}.$attrs$2`,
"vlisteners": `\${1|this,vm|}.$listeners$2`,
"vset": `\${1|this,vm|}.$set(\${2:target}, \${3:key}, \${4:value})`,
"vdelete": `\${1|this,vm|}.$delete(\${2:target}, \${3:key})`,
"von": `\${1|this,vm|}.$on('\${2:event}', \${3:callback})$4`,
"vonce": `\${1|this,vm|}.$once('\${2:event}', \${3:callback})$4`,
"voff": `\${1|this,vm|}.$off('\${2:event}', \${3:callback})$4`,
"vemit": `\${1|this,vm|}.$emit('\${2:event}'\${3:, args})$4`,
"vmount": `\${1|this,vm|}.$mount('$2')`,
"vfu": `\${1|this,vm|}.$forceUpdate()`,
"vdestroy": `\${1|this,vm|}.$destroy()$2`,
"vnt": `\${1|this,vm|}.$nextTick(() => {
${tabSize}$2
})`,
  }
}