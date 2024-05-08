"use strict";var bt=Object.defineProperty;var Wr=Object.getOwnPropertyDescriptor;var Ur=Object.getOwnPropertyNames;var Gr=Object.prototype.hasOwnProperty;var Hr=(i,e,t)=>e in i?bt(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var rs=(i,e)=>()=>(i&&(e=i(i=0)),e);var P=(i,e)=>()=>(e||i((e={exports:{}}).exports,e),e.exports),Vr=(i,e)=>{for(var t in e)bt(i,t,{get:e[t],enumerable:!0})},Kr=(i,e,t,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Ur(e))!Gr.call(i,r)&&r!==t&&bt(i,r,{get:()=>e[r],enumerable:!(s=Wr(e,r))||s.enumerable});return i};var Jr=i=>Kr(bt({},"__esModule",{value:!0}),i);var os=(i,e,t)=>(Hr(i,typeof e!="symbol"?e+"":e,t),t),ai=(i,e,t)=>{if(!e.has(i))throw TypeError("Cannot "+t)};var w=(i,e,t)=>(ai(i,e,"read from private field"),t?t.call(i):e.get(i)),q=(i,e,t)=>{if(e.has(i))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(i):e.set(i,t)},N=(i,e,t,s)=>(ai(i,e,"write to private field"),s?s.call(i,t):e.set(i,t),t);var be=(i,e,t)=>(ai(i,e,"access private method"),t);var ni=P(Q=>{"use strict";Object.defineProperty(Q,"__esModule",{value:!0});Q.getWord=Q.getRelativePath=Q.getCurrentWord=Q.getTabSize=Q.getWorkspaceRoot=Q.winRootPathHandle=void 0;var ft=require("vscode"),Yr=require("os"),Zr=require("path");function vt(i){return Yr.platform().includes("win")&&i.length>0&&(i[0]==="\\"||i[0]==="/")?i.substr(1,i.length):i}Q.winRootPathHandle=vt;function Qr(i){var e,t;let s="";return((e=ft.workspace.workspaceFolders)===null||e===void 0?void 0:e.length)===1?vt(ft.workspace.workspaceFolders[0].uri.path):((t=ft.workspace.workspaceFolders)===null||t===void 0||t.forEach(r=>{i.includes(r.uri.path)&&(s=r.uri.path)}),vt(s))}Q.getWorkspaceRoot=Qr;function Xr(){let i=ft.workspace.getConfiguration("editor").tabSize,e="";for(let t=0;t<i;t++)e+=" ";return e.length===0&&(e="  "),e}Q.getTabSize=Xr;function zr(i,e){let t=e.character-1,s=i.lineAt(e.line).text;for(;t>=0&&` 	
\r\v":{[,`.indexOf(s.charAt(t))===-1;)t--;return s.substring(t+1,e.character)}Q.getCurrentWord=zr;function eo(i,e){let t=Zr.relative(vt(i),e);return t=t.replace(/\\/gi,"/"),t.startsWith("../")&&(t=t.substr(1,t.length)),t}Q.getRelativePath=eo;function to(i,e,t){let s=i.lineAt(e.line),r=e.character,o=s.text.substring(r,r+1),a="";for(;t.indexOf(o)===-1&&r<=s.text.length;)a+=o,++r,o=s.text.substring(r,r+1);for(r=e.character-1,o=s.text.substring(r,r+1);t.indexOf(o)===-1&&r>0;)a=o+a,--r,o=s.text.substring(r,r+1);return o=s.text.substring(r,r+1),{selectText:a,startText:o}}Q.getWord=to});var as=P(ci=>{"use strict";Object.defineProperty(ci,"__esModule",{value:!0});var yt=require("fs"),wt=require("path"),li=class{constructor(e,t){this.rootPath=e,this.prefix=t}search(e,t,s){let r=[],o,a="",l=s?this.prefix:{};if(a&&Array.isArray(a)&&a.length>0)o=function(d){return a.indexOf(d)!==-1};else{let d=["node_modules","dist","build"];o=function(c){return!(c.charAt(0)==="."||d.indexOf(c)!==-1)}}let n=yt.readdirSync(this.rootPath||"");for(let d=0;d<n.length;d++){let c=n[d];o(c)&&(yt.statSync(wt.join(this.rootPath||"",c)).isDirectory()?this.traverseHandle(c,r,l,e,t):this.traverseAdd(c,c,r,l,e,t))}return r}traverseAdd(e,t,s,r,o,a){if(e.endsWith(o)){let l=new RegExp("-?(.*)"+(o||"\\.\\w*")+"$","gi"),n=e;n=n.replace(l,"$1"),(!a||a&&t.includes(a))&&(s.push({name:n,path:t.replace(new RegExp(`^${r.path}`,"gi"),r.alias).replace(/\\/gi,"/")}),n==="index"&&(n=t.replace(/\\/gi,"/").replace(/.*\/(\w*)\/\w*.\w*/gi,"$1"),s.push({name:n,path:t.replace(new RegExp(`^${r.path}`,"gi"),r.alias).replace(/\\/gi,"/")})))}}traverseHandle(e,t,s,r,o){let a=yt.readdirSync(wt.join(this.rootPath||"",e));for(let l=0;l<a.length;l++){let n=a[l];if(n.charAt(0)!=="."){let d=wt.join(e,n);yt.statSync(wt.join(this.rootPath||"",d)).isDirectory()?this.traverseHandle(d,t,s,r,o):this.traverseAdd(n,d,t,s,r,o)}}}};ci.default=li});var ls=P(ui=>{"use strict";Object.defineProperty(ui,"__esModule",{value:!0});var We=require("vscode"),pi=ni(),io=as(),ns=require("path"),so=require("fs"),di=class{getActiveEditorDir(e){return e.replace(this.projectRootPathReg,"").replace(/[\/|\\]\w*\.\w*$/gi,"")}getActiveEditorPath(e){return e.replace(this.projectRootPathReg,"")}getVueRelativePath(e,t){let s=ns.relative(e,t);return s="./"+s,s.replace(/\\/gi,"/")}constructor(e){this.name="vue-helper",this.projectRootPath="",this.tabSize="",this.isTs=!1,this.prefix={alias:"@",path:"src"},this.vueFiles=[],this.store={set:(s,r)=>{We.workspace.getConfiguration(this.name).update(s,r,We.ConfigurationTarget.Global)},get:s=>We.workspace.getConfiguration(this.name).get(s)},this.context=e,this.projectRootPath=(0,pi.getWorkspaceRoot)(""),this.projectRootPathReg=new RegExp(`.*${this.projectRootPath}/`,"gi"),this.traverse=new io.default(this.projectRootPath,this.prefix),this.tabSize=(0,pi.getTabSize)();let t=(0,pi.winRootPathHandle)(ns.join(this.projectRootPath,"tsconfig.json"));if(this.isTs=so.existsSync(t),this.vueFiles=this.traverse.search(".vue","",!1),We.workspace.workspaceFolders){let s=We.workspace.createFileSystemWatcher("**/*.vue");s.onDidCreate(()=>{this.vueFiles=this.traverse.search(".vue","",!1)}),s.onDidDelete(()=>{this.vueFiles=this.traverse.search(".vue","",!1)})}}register(){}};ui.default=di});var cs=P(hi=>{"use strict";Object.defineProperty(hi,"__esModule",{value:!0});hi.default=i=>({"el-alert":`this.$alert('\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9', '\u6807\u9898\u540D\u79F0', {
${i}confirmButtonText: '\u786E\u5B9A',
${i}callback: action => {
${i}${i}
${i}}
})`,"el-conform":`this.$confirm('\u6B64\u64CD\u4F5C\u5C06\u6C38\u4E45\u5220\u9664\u8BE5\u6587\u4EF6, \u662F\u5426\u7EE7\u7EED?', '\u63D0\u793A', {
${i}confirmButtonText: '\u786E\u5B9A',
${i}cancelButtonText: '\u53D6\u6D88',
${i}type: 'warning'
}).then(() => {
${i}this.$message({
${i}${i}type: 'success',
${i}${i}message: '\u5220\u9664\u6210\u529F!'
${i}})
}).catch(() => {
${i}this.$message({
${i}${i}type: 'info',
${i}${i}message: '\u5DF2\u53D6\u6D88\u5220\u9664'
${i}})
})`,"el-form:clear":"this.$refs['${1:form}'].clearValidate()","el-form:valid":`this.$refs['\${1:formName}'].validate((valid) => {
${i}if (valid) {
${i}${i}$2
${i}} else {
${i}${i}return false
${i}}
})`,"el-message":`this.$message({
${i}message: '\u606D\u559C\u4F60\uFF0C\u8FD9\u662F\u4E00\u6761\u6210\u529F\u6D88\u606F',
${i}type: 'success'
})`,"el-message:close":`this.$message({
${i}message: '\u606D\u559C\u4F60\uFF0C\u8FD9\u662F\u4E00\u6761\u6210\u529F\u6D88\u606F',
${i}showClose: true,
${i}type: 'success'
})`,"el-notify":`this.$notify({
${i}title: '\u6807\u9898\u540D\u79F0',
${i}message: h('i', {style: 'color: teal'}, 'notify')
})`,"el-notify:noclose":`this.$notify({
${i}title: '\u63D0\u793A',
${i}message: '\u4E0D\u4F1A\u81EA\u52A8\u5173\u95ED\u7684\u6D88\u606F',
${i}duration: 0
})`,"el-notify:success":`this.$notify({
${i}title: '\u6210\u529F',
${i}message: '\u8FD9\u662F\u4E00\u6761\u6210\u529F\u7684\u63D0\u793A\u6D88\u606F',
${i}type: 'success'
})`,"el-prompt":`this.$prompt('\u8BF7\u8F93\u5165\u90AE\u7BB1', '\u63D0\u793A', {
${i}confirmButtonText: '\u786E\u5B9A',
${i}cancelButtonText: '\u53D6\u6D88',
${i}inputPattern: '',
${i}inputErrorMessage: ''
}).then(({ value }) => {
${i}
}).catch(() => {
${i}
});`,"el-rules:array":"{ type: 'array', required: true, message: '\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A', trigger: 'change' }","el-rules:date":"{ type: 'date', required: true, message: '\u8BF7\u9009\u62E9\u65E5\u671F', trigger: 'change' }","el-rules:minMax":"{require: true, min: 3, max: 5, message: '\u957F\u5EA6\u5728 3 \u5230 5 \u4E2A\u5B57\u7B26', trigger: 'blur' }","el-rules:required":"{required: true, message:'\u8BF7\u8F93\u5165', trigger: 'blur'}","el-rules:self":"{ validator: validatePass, trigger: 'blur' }","el-rules:selfmethod":`var validatePass = (rule, value, callback) => {
${i}if (value === '') {
${i}${i}callback(new Error(''));
${i}} else {
${i}${i}callback();
${i}}
}`,"el-pagination":`handleCurrentChange (pageNum) {
${i}this.pageNum = pageNum
${i}this.fetchList()
},
handleSizeChange(pageSize) {
${i}this.pageSize = pageSize
${i}this.fetchList()
}`,"reg-phone":"/^[1][3,4,5,7,8][0-9]{9}$/","reg-email":"/^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,4}$/"})});var ps=P(gi=>{"use strict";Object.defineProperty(gi,"__esModule",{value:!0});gi.default=i=>({"el-col":'<el-col :span="$1">$2</el-col>',"el-checkbox":'<el-checkbox label="$1">$2</el-checkbox>',"el-checkbox-group":`<el-checkbox-group v-model="$1">
${i}<el-checkbox label="$2">$3</el-checkbox>
</el-checkbox-group>`,"el-checkbox-button":'<el-checkbox-button label="$1">$2</el-checkbox-button>',"el-input":'<el-input v-model="$1" placeholder="$2">$3</el-input>',"el-option":'<el-option :label="$1" :value="$2">$3</el-option>',"el-option-group":`<el-option-group v-for="$1" :key="$2">
<el-option :label="$3" :value="$4"></el-option>$5
</el-option-group>`,"el-cascader":'<el-cascader :options="$1" v-model="$2">$3</el-cascader>',"el-color-picker":'<el-color-picker v-model="$1">$2</el-color-picker>',"el-form-item":'<el-form-item label="$1">$2</el-form-item>',"el-alert":'<el-alert type="$1" title="$2">$3</el-alert>',"el-submenu":`<el-submenu index="$1">
${i}<el-menu-item index="$2">$3</el-menu-item>$4
</el-submenu>`,"el-menu-item-group":`<el-menu-item-group>
${i}<el-menu-item index="$1">$2</el-menu-item>$3
</el-menu-item-group>`,"el-menu-item":'<el-menu-item index=""></el-menu-item>',"el-tab-pane":"<el-tab-pane>$1</el-tab-pane>","el-breadcrumb-item":"<el-breadcrumb-item></el-breadcrumb-item>","el-dropdown-menu":"<el-dropdown-menu></el-dropdown-menu>","el-step":'<el-step title="$1">$2</el-step>',"el-carousel":`<el-carousel>
${i}<el-carousel-item>$1</el-carousel-item>
</el-carousel>`,"el-carousel-item":"<el-carousel-item>$1</el-carousel-item>","el-collapse-item":'<el-collapse-item name="$1" title="$2">$3</el-collapse-item>',"el-timeline-item":"<el-timeline-item>$1</el-timeline-item>","el-divider":"<el-divider>$1</el-divider>","el-alert:icon":`<el-alert
${i}title="success"
${i}type="success"
${i}show-icon>
</el-alert>`,"el-autocomplete":`<el-autocomplete v-model="$1" placeholder="" :fetch-suggestions="fetchSuggestions" @select="handleSelect">
</el-autocomplete>`,"el-badge":'<el-badge :value="$1"/>',"el-badge:button":`<el-badge :value="$1">
${i}<el-button size="small">$2</el-button>
</el-badge>`,"el-badge:dot":"<el-badge is-dot>$1</el-badge>","el-breadcrumb":`<el-breadcrumb separator="/">
${i}<el-breadcrumb-item :to="{ path: '/' }"></el-breadcrumb-item>
${i}<el-breadcrumb-item></el-breadcrumb-item>
</el-breadcrumb>`,"el-button":'<el-button type="primary">$1</el-button>',"el-button-group":`<el-button-group>
${i}<el-button type="primary">$1</el-button>
${i}<el-button type="primary">$2</el-button>
</el-button-group>`,"el-card":`<el-card>
${i}<div slot="header">$1</div>
${i}<div></div>
</el-card>`,"el-carousel:card":`<el-carousel type="card" height="150px">
${i}<el-carousel-item>
${i}${i}$1
${i}</el-carousel-item>
</el-carousel>`,"el-cascadar":`<el-cascader
${i}:options="$1"
${i}v-model="$2"
${i}@change="$3">
</el-cascader>`,"el-collapse":`<el-collapse v-model="\${1:activeName}" @change="\${2:collapseChange}">
${i}<el-collapse-item title="\${3:title}" name="\${4:name}">
${i}${i}<div>$5</div>
${i}</el-collapse-item>
</el-collapse>`,"el-date-picker":'<el-date-picker v-model="$1" type="date" placeholder="${2:date}"></el-date-picker>',"el-date-picker:datetime":'<el-date-picker v-model="$1" type="datetime" placeholder="${2:datetime}"></el-date-picker>',"el-dialog":`<el-dialog
${i}title=""
${i}:visible.sync="\${1:dialogVisible}"
${i}width="\${2:width}"
${i}:before-close="\${3:dialogBeforeClose}">
${i}<div>$4</div>
${i}<div slot="footer">
${i}${i}<el-button @click="dialogVisible = false">\u53D6 \u6D88</el-button>
${i}${i}<el-button type="primary" @click="dialogVisible = false">\u786E \u5B9A</el-button>
${i}</div>
</el-dialog>`,"el-dialog:form":`<el-dialog
${i}title=""
${i}:visible.sync="\${1:dialogVisible}"
${i}width="\${2:width}"
${i}:before-close="\${3:dialogBeforeClose}">
${i}<el-form :model="form">
${i}${i}<el-form-item label="" :label-width="">
${i}${i}${i}<el-input v-model=""></el-input>
${i}${i}</el-form-item>
${i}</el-form>
${i}<div slot="footer">
${i}${i}<el-button @click="dialogVisible = false">\u53D6 \u6D88</el-button>
${i}${i}<el-button type="primary" @click="dialogVisible = false">\u786E \u5B9A</el-button>
${i}</div>
</el-dialog>`,"el-dropdown":`<el-dropdown>
${i}<el-button type="primary">
${i}${i}\u4E0B\u62C9\u83DC\u5355<i class="el-icon-arrow-down el-icon--right"></i>
${i}</el-button>
${i}<el-dropdown-menu slot="dropdown">
${i}${i}<el-dropdown-item>\u9EC4\u91D1\u7CD5</el-dropdown-item>
${i}</el-dropdown-menu>
</el-dropdown>`,"el-form":`<el-form ref="\${1:form}" :model="\${2:form}" label-width="\${3:80px}">
${i}$4
</el-form>`,"el-form:inline":`<el-form :inline="true" ref="\${1:form}" :model="\${2:form}" label-width="\${3:80px}">
${i}$4
</el-form>`,"el-form-item:input":`<el-form-item label="\${1:label}">
${i}<el-input v-model="\${2:model}"></el-input>
</el-form-item>`,"el-form-item:checkbox":`<el-form-item label="\${1:label}">
${i}<el-checkbox-group v-model="\${2:model}">
${i}${i}<el-checkbox label="\${3:label}" name="\${4:name}"></el-checkbox>
${i}</el-checkbox-group>
</el-form-item>`,"el-form-item:radio":`<el-form-item label="\${1:label}">
${i}<el-radio-group v-model="\${2:model}">
${i}${i}<el-radio label="\${3:label}"></el-radio>
${i}</el-radio-group>
</el-form-item>`,"el-form-item:select":`<el-form-item label="\${1:label}">
${i}<el-select v-model="\${2:model}" placeholder="\${3:placeholder}">
${i}${i}<el-option label="\${4:label}" value="\${5:value}"></el-option>
${i}</el-select>
</el-form-item>`,"el-form-item:switch":'<el-form-item label="${1:label}">\n<el-switch v-model="${2:model}"></el-switch>\n</el-form-item>',"el-form-item:textarea":'<el-form-item label="${1:label}">\n<el-input type="textarea" v-model="${2:model}"></el-input>\n</el-form-item>',"el-input-number":'<el-input-number v-model="$1" @change="${2:inputChange}" :min="${3:1}" :max="${4:10}" label="${5:label}"></el-input-number>',"el-input:textarea":'<el-input type="textarea" v-model="$1" placeholder="$2"></el-input>',"el-menu":`<el-menu :default-active="\${1:activeIndex}" mode="horizontal" @select="\${2:menuSelect}">
${i}<el-menu-item index="\${3:index}">$4</el-menu-item>
</el-menu>`,"el-menu:submenu":`<el-menu :default-active="\${1:activeIndex}" mode="horizontal" @select="handleSelect">
${i}<el-menu-item index="1"></el-menu-item>
${i}<el-submenu index="2">
${i}${i}<template slot="title"></template>
${i}${i}<el-menu-item index="2-1"></el-menu-item>
${i}</el-submenu>
</el-menu>`,"el-pagination":`<el-pagination
${i}layout="prev, pager, next"
${i}:total="50">
</el-pagination>`,"el-pagination:full":`<el-pagination
${i}@size-change="handleSizeChange"
${i}@current-change="handleCurrentChange"
${i}:current-page="pageNum"
${i}:page-sizes="[10, 20, 50]"
${i}:page-size="pageSize"
${i}layout="total, sizes, prev, pager, next, jumper"
${i}:total="totalCount">
</el-pagination>`,"el-popover":`<el-popover
${i}ref="popover1"
${i}placement="top-start"
${i}title="\u6807\u9898"
${i}width="200"
${i}trigger="hover"
${i}content="\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9">
</el-popover>`,"el-popover:insert":`<el-popover
${i}ref="popover4"
${i}placement="right"
${i}width="400"
${i}trigger="click">
${i}<div></div>
</el-popover>`,"el-progress":'<el-progress :percentage="${1:30}"></el-progress>',"el-progress:circle":'<el-progress type="circle" :percentage="${1:30}"></el-progress>',"el-progress:inside":'<el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>',"el-radio":'<el-radio v-model="radio" label="${1:label}">$2</el-radio>',"el-radio-button":'<el-radio-button label="${1:label}"></el-radio-button>',"el-radio-group":`<el-radio-group v-model="\${1:model}">
${i}<el-radio :label="\${2:label}">$3</el-radio>
</el-radio-group>`,"el-rate":'<el-rate v-model="$1"></el-rate>',"el-rate:color":`<el-rate
${i}v-model="\${1:model}"
${i}:colors="['#99A9BF', '#F7BA2A', '#FF9900']">
</el-rate>`,"el-rate:half":`<el-rate
${i}v-model="3.7"
${i}disabled
${i}show-score
${i}text-color="#ff9900"
${i}score-template="{value}">
</el-rate>`,"el-row":`<el-row :gutter="\${1:10}">
${i}<el-col :span="\${2:6}">$3</el-col>
</el-row>`,"el-select":`<el-select v-model="model" placeholder="">
${i}<el-option
${i}${i}v-for="item in options"
${i}${i}:key="item.value"
${i}${i}:label="item.label"
${i}${i}:value="item.value">
${i}</el-option>
</el-select>`,"el-slider":'<el-slider v-model="${1:30}"></el-slider>',"el-steps":`<el-steps :active="active" finish-status="success">
${i}<el-step title="step1"></el-step>
</el-steps>`,"el-steps:simple":`<el-steps simple>
${i}<el-step title="step1"></el-step>
</el-steps>`,"el-steps:icon":`<el-steps :active="active" finish-status="success">
${i}<el-step title="step1" icon="el-icon-edit"></el-step>
</el-steps>`,"el-switch":'<el-switch v-model="${1:model}" active-color="${2:#13ce66}" inactive-color="${3:#ff4949}"></el-switch>',"el-tabs":`<el-tabs v-model="\${1:activeName}" @tab-click="\${2:handleClick}">
${i}<el-tab-pane label="\${3:label}" name="\${4:name}">$5</el-tab-pane>
</el-tabs>`,"el-tabs:card":`<el-tabs type="card" v-model="\${1:activeName}" @tab-click="\${2:handleClick}">
${i}<el-tab-pane label="\${3:label}" name="\${4:name}">$5</el-tab-pane>
</el-tabs>`,"el-table":`<el-table
${i}:data="\${1:data}"
${i}style="width: 100%">
${i}<el-table-column
${i}${i}prop="\${2:prop}"
${i}${i}label="\${3:label}"
${i}${i}width="\${4:width}">
${i}</el-table-column>
</el-table>`,"el-table-column":`<el-table-column
${i}header-align="center"
${i}align="center"
${i}prop="\${1:prop}"
${i}label="\${2:label}" >
</el-table-column>`,"el-table-column:left":`<el-table-column
${i}header-align="left"
${i}align="left"
${i}prop="\${1:prop}"
${i}label="\${2:label}" >
</el-table-column>`,"el-table-column:slot":`<template slot-scope="scope">
${i}{{scope.row.status}}
</template>`,"el-tag":'<el-tag type="${1:success}">$2</el-tag>',"el-tag:close":'<el-tag closable type="${1:success}">$2</el-tag>',"el-time-picker":`<el-time-picker
${i}v-model="$1"
${i}:picker-options="\${2:{ selectableRange: '18:30:00 - 20:30:00' }}"
${i}placeholder="$3">
</el-time-picker>`,"el-time-select":`<el-time-select
${i}v-model="$1"
${i}:picker-options="\${2:{start: '08:30',step: '00:15',end: '18:30'}}"
${i}placeholder="$3">
</el-time-select>`,"el-tooltip":`<el-tooltip effect="dark" content="$1" placement="\${2:top}">
${i}<el-button>$3</el-button>
</el-tooltip>`,"el-tooltip:content":`<el-tooltip effect="dark" content="$1" placement="\${2:top}">
<div slot="content">$3</div>
${i}<el-button>$4</el-button>
</el-tooltip>`,"el-transfer":`<el-transfer
${i}v-model="$1"
${i}:data="$2">
</el-transfer>`,"el-transfer:search":`<el-transfer
${i}v-model="$1"
${i}:data="$2">
${i}filterable
${i}:filter-method=""
${i}filter-placeholder="">
</el-transfer>`,"el-tree":`<el-tree
${i}:data="$1"
${i}:props="$2"
${i}@node-click="$3">
</el-tree>`,"el-tree:select":`<el-tree
${i}show-checkbox
${i}:data="$1"
${i}:props="$2"
${i}@node-click="$3">
</el-tree>`,"el-upload":`<el-upload
${i}action=""
${i}:on-preview=""
${i}:on-remove=""
${i}:before-remove=""
${i}multiple
${i}:limit="3"
${i}:on-exceed=""
${i}:file-list="[{name: 'name', url: 'url'}]">
${i}<el-button size="small" type="primary">\u70B9\u51FB\u4E0A\u4F20</el-button>
${i}<div slot="tip" class="el-upload__tip">\u53EA\u80FD\u4E0A\u4F20jpg/png\u6587\u4EF6\uFF0C\u4E14\u4E0D\u8D85\u8FC7500kb</div>
</el-upload>`,"el-upload:avatar":`<el-upload
${i}action=""
${i}:show-file-list="false"
${i}:on-success=""
${i}:before-upload="">
${i}<img v-if="imageUrl" :src="imageUrl">
${i}<i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>`,"el-timeline":`<el-timeline :reverse="reverse">
${i}<el-timeline-item
${i}${i}v-for="(activity, index) in activities"
${i}${i}:key="index"
${i}${i}:timestamp="activity.timestamp">
${i}${i}{{activity.content}}
${i}</el-timeline-item>
</el-timeline>`,"el-calendar":'<el-calendar v-model="${1:value}"></el-calendar>',"el-image":`<el-image
${i}style="\${1:width: 100px; height: 100px}"
${i}:src="\${2:url}"
${i}:fit="\${3:fit}">$4</el-image>`,"el-backtop":'<el-backtop target="${1:.page-component__scroll .el-scrollbar__wrap}">$2</el-backtop>',"el-infinite-scroll":`<ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
${i}<li v-for="i in count" class="infinite-list-item">{{ i }}</li>
</ul>`,"el-drawer":`<el-drawer
${i}title="\${1:\u6211\u662F\u6807\u9898}"
${i}:visible.sync="\${2:drawer}"
${i}:direction="\${3:direction}"
${i}:before-close="\${4:handleClose}">
${i}\${5:<span>\u6211\u6765\u5566!</span>}
</el-drawer>`})});var ds=P(mi=>{"use strict";Object.defineProperty(mi,"__esModule",{value:!0});mi.default=()=>({"v-loading":{type:"attribute",values:["string"],description:"el-loading"}})});var us=P(bi=>{"use strict";Object.defineProperty(bi,"__esModule",{value:!0});bi.default=()=>({"el-row":{gutter:{type:"attribute",description:"grid spacing",values:[]},type:{type:"attribute",description:"layout mode, you can use 'flex', works in modern browsers",values:["flex"]},justify:{type:"attribute",description:"horizontal alignment of flex layout",values:["start","end","center","space-around","space-between"]},align:{type:"attribute",description:"vertical alignment of flex layout",values:["top","middle","bottom"]},tag:{type:"attribute",description:"custom element tag",values:[]}},"el-col":{span:{type:"attribute",description:"number of column the grid spans",values:[]},offset:{type:"attribute",description:"",values:[]},push:{type:"attribute",description:"number of columns that grid moves to the right",values:[]},pull:{type:"attribute",description:"number of columns that grid moves to the left",values:[]},xs:{type:"attribute",description:"<768px Responsive columns or column props object",values:[]},sm:{type:"attribute",description:"\u2265768px Responsive columns or column props object",values:[]},md:{type:"attribute",description:"\u2265992 Responsive columns or column props object",values:[]},lg:{type:"attribute",description:"\u22651200 Responsive columns or column props object",values:[]},xl:{type:"attribute",description:"\u22651200px Responsive columns or column props object, version >= 2",values:[]},tag:{type:"attribute",description:"custom element tag",values:[]}},"el-button":{type:{type:"attribute",description:"button type",values:["primary","success","warning","danger","info","text"]},size:{type:"attribute",description:"",values:["medium","small","mini"]},plain:{type:"attribute",description:"determine whether it's a plain button",values:[]},loading:{type:"attribute",description:"",values:[]},disabled:{type:"attribute",description:"",values:[]},icon:{type:"attribute",description:"",values:[]},autofocus:{type:"attribute",description:"",values:[]},"native-type":{type:"attribute",description:"same as native button's type",values:["button","submit","reset"]},round:{type:"attribute",description:"determine whether it's a round button, default: false",values:[]},circle:{type:"attribute",description:"",values:[]}},"el-radio":{label:{type:"attribute",description:"",values:[]},disabled:{type:"attribute",description:"",values:[]},border:{type:"attribute",description:"",values:[]},size:{type:"attribute",description:"",values:["medium","small","mini"]},name:{type:"attribute",description:"native 'name' attribute",values:[]}},"el-radio-group":{"v-model":{type:"attribute",description:"",values:[]},size:{type:"attribute",description:"",values:["medium","small","mini"]},fill:{type:"attribute",description:"border and background color when button is active",values:[]},"text-color":{type:"attribute",description:"",values:[]},change:{type:"method",description:"",values:[]}},"el-radio-button":{label:{type:"attribute",description:"",values:[]},disabled:{type:"attribute",description:"",values:[]}},"el-checkbox":{label:{type:"attribute",description:"",values:[]},"true-label":{type:"attribute",description:"value of the checkbox if it's checked",values:[]},"false-label":{type:"attribute",description:"value of the checkbox if it's not checked",values:[]},border:{type:"attribute",description:"",values:[]},size:{type:"attribute",description:"",values:["medium","small","mini"]},name:{type:"attribute",description:"native 'name' attribute",values:[]},checked:{type:"attribute",description:"",values:[]},indeterminate:{type:"attribute",description:"same as indeterminate in native checkbox",values:[]},disabled:{type:"attribute",description:"",values:[]}},"el-checkbox-group":{"v-model":{type:"attribute",description:"",values:[]},size:{type:"attribute",description:"",values:["medium","small","mini"]},fill:{type:"attribute",description:"border and background color when button is active",values:[]},"text-color":{type:"attribute",description:"",values:[]},min:{type:"attribute",description:"minimum number of checkbox checked",values:[]},max:{type:"attribute",description:"maximum number of checkbox checked",values:[]},change:{type:"method",description:"",values:[]}},"el-checkbox-button":{label:{type:"attribute",description:"",values:[]}},"el-input":{"v-model":{type:"attribute",description:"",values:[]},placeholder:{type:"attribute",description:"",values:[]},type:{type:"attribute",description:"Same as the 'type' attribute of native input, except that it can be 'textarea'",values:[]},value:{type:"attribute",description:"",values:[]},maxlength:{type:"attribute",description:"maximum Input text length",values:[]},minlength:{type:"attribute",description:"minimum Input text length",values:[]},disabled:{type:"attribute",description:"",values:[]},size:{type:"attribute",description:"",values:["medium","small","mini"]},icon:{type:"attribute",description:"icon name",values:[]},"prefix-icon":{type:"attribute",description:"prefix icon class",values:[]},"suffix-icon":{type:"attribute",description:"suffix icon class",values:[]},rows:{type:"attribute",description:"number of rows of textarea, only works when type is 'textarea'",values:[]},autosize:{type:"attribute",description:"whether textarea has an adaptive height, only works when type is 'textarea'. Can accept an object, e.g. { minRows: 2, maxRows: 6 }",values:[]},"auto-complete":{type:"attribute",description:"",values:["one","off"]},name:{type:"attribute",description:"native 'name' attribute",values:[]},readonly:{type:"attribute",description:"",values:[]},max:{type:"attribute",description:"",values:[]},min:{type:"attribute",description:"",values:[]},step:{type:"attribute",description:"same as step in native input",values:[]},resize:{type:"attribute",description:"control the resizability",values:["none","both","horizontal","vertical"]},autofocus:{type:"attribute",description:"",values:[]},form:{type:"attribute",description:"same as 'form' in native input",values:[]},label:{type:"attribute",description:"",values:[]},tabindex:{type:"attribute",description:"input tabindex",values:[]},clearable:{type:"attribute",description:"",values:[]},"on-icon-click":{type:"attribute",description:"hook function when clicking on the input icon",values:[]},click:{type:"method",description:"",values:[]},blur:{type:"method",description:"",values:[]},focus:{type:"method",description:"",values:[]},change:{type:"method",description:"",values:[]},clear:{type:"method",description:"triggers when the Input is cleared by the button which generated by the 'clearable' attribute",values:[]}},"el-autocomplete":{"v-model":{type:"attribute",description:"",values:[]},placeholder:{type:"attribute",description:"",values:[]},value:{type:"attribute",description:"",values:[]},debounce:{type:"attribute",description:"debounce delay when typing, in milliseconds, default: 300",values:[]},disabled:{type:"attribute",description:"",values:[]},props:{type:"attribute",description:"",values:[]},"custom-item":{type:"attribute",description:"component name of your customized suggestion list item",values:[]},icon:{type:"attribute",description:"",values:[]},"fetch-suggestions":{type:"attribute",description:"a method to fetch input suggestions. When suggestions are ready, invoke callback(data:[]) to return them to Autocomplete",values:[]},"popper-class":{type:"attribute",description:"",values:[]},"trigger-on-focus":{type:"attribute",description:"whether show suggestions when input focus",values:[]},"on-icon-click":{type:"attribute",description:"hook function when clicking on the input icon",values:[]},"select-when-unmatched":{type:"attribute",description:"whether to emit a 'select' event on enter when there is no autocomplete match",values:[]},label:{type:"attribute",description:"",values:[]},"prefix-icon":{type:"attribute",description:"prefix icon class",values:[]},"suffix-icon":{type:"attribute",description:"suffix icon class",values:[]},select:{type:"method",description:"",values:[]}},"el-input-number":{"v-model":{type:"attribute",description:"",values:[]},placeholder:{type:"attribute",description:"",values:[]},value:{type:"attribute",description:"",values:[]},min:{type:"attribute",description:"the minimum allowed value",values:[]},max:{type:"attribute",description:"the maximum allowed value",values:[]},step:{type:"attribute",description:"incremental step",values:[]},size:{type:"attribute",description:"",values:["medium","small","mini"]},disabled:{type:"attribute",description:"",values:[]},"controls-position":{type:"attribute",description:"position of the control buttons",values:["right"]},controls:{type:"attribute",description:"",values:[]},debounce:{type:"attribute",description:"debounce delay when typing, in millisecond",values:[]},change:{type:"method",description:"",values:[]}},"el-select":{"v-model":{type:"attribute",description:"",values:[]},placeholder:{type:"attribute",description:"",values:[]},multiple:{type:"attribute",description:"",values:[]},disabled:{type:"attribute",description:"",values:[]},"value-key":{type:"attribute",description:"unique identity key name for value, required when value is an object",values:[]},size:{type:"attribute",description:"",values:["medium","small","mini"]},clearable:{type:"attribute",description:"",values:[]},"collapse-tags":{type:"attribute",description:"whether to collapse tags to a text when multiple selecting",values:[]},"multiple-limit":{type:"attribute",description:"maximum number of options user can select when multiple is true. No limit when set to 0",values:[]},name:{type:"attribute",description:"native 'name' attribute",values:[]},"auto-complete":{type:"attribute",description:"",values:["one","off"]},filterable:{type:"attribute",description:"",values:[]},"allow-create":{type:"attribute",description:"",values:[]},"filter-method":{type:"attribute",description:"",values:[]},remote:{type:"attribute",description:"",values:[]},"remote-method":{type:"attribute",description:"",values:[]},loading:{type:"attribute",description:"",values:[]},"loading-text":{type:"attribute",description:"displayed text while loading data from server",values:[]},"no-match-text":{type:"attribute",description:"displayed text when no data matches the filtering query",values:[]},"no-data-text":{type:"attribute",description:"displayed text when there is no options",values:[]},"popper-class":{type:"attribute",description:"",values:[]},"reserve-keyword":{type:"attribute",description:"when 'multiple' and 'filter' is true, whether to reserve current keyword after selecting an option",values:[]},"default-first-option":{type:"attribute",description:"select first matching option on enter key. Use with 'filterable' or 'remote'",values:[]},"popper-append-to-body":{type:"attribute",description:"whether to append the popper menu to body. If the positioning of the popper is wrong, you can try to set this prop to false, default: true",values:[]},change:{type:"method",description:"",values:[]},"visible-change":{type:"method",description:"",values:[]},"remote-tag":{type:"attribute",description:"",values:[]},clear:{type:"method",description:"triggers when the clear icon is clicked in a clearable Select",values:[]},blur:{type:"method",description:"",values:[]},focus:{type:"method",description:"",values:[]}},"el-option-group":{"v-for":{type:"attribute",description:"",values:[]},key:{type:"attribute",description:"",values:[]},label:{type:"attribute",description:"",values:[]},disabled:{type:"attribute",description:"",values:[]}},"el-option":{label:{type:"attribute",description:"",values:[]},value:{type:"attribute",description:"",values:[]},disabled:{type:"attribute",description:"",values:[]}},"el-cascader":{options:{type:"attribute",description:"",values:[]},"v-model":{type:"attribute",description:"",values:[]},props:{type:"attribute",description:"",values:[]},value:{type:"attribute",description:"",values:[]},separator:{type:"attribute",description:"separator character, default: '/'",values:[]},"popper-class":{type:"attribute",description:"",values:[]},placeholder:{type:"attribute",description:"",values:[]},disabled:{type:"attribute",description:"",values:[]},clearable:{type:"attribute",description:"",values:[]},"expand-trigger":{type:"attribute",description:"trigger mode of expanding current item",values:["click","hover"]},"show-all-levels":{type:"attribute",description:"whether to display all levels of the selected value in the input",values:[]},filterable:{type:"attribute",description:"",values:[]},debounce:{type:"attribute",description:"debounce delay when typing, in millisecond",values:[]},"change-on-select":{type:"attribute",description:"whether selecting an option of any level is permitted",values:[]},size:{type:"attribute",description:"",values:["medium","small","mini"]},change:{type:"method",description:"",values:[]},"active-item-change":{type:"method",description:"triggers when active option changes, only works when 'change-on-select' is 'false'",values:[]},blur:{type:"method",description:"",values:[]},focus:{type:"method",description:"",values:[]}},"el-switch":{"v-model":{type:"attribute",description:"",values:[]},disabled:{type:"attribute",description:"",values:[]},width:{type:"attribute",description:"",values:[]},"active-icon-class":{type:"attribute",description:"class name of the icon displayed when in on state, overrides 'active-text', version >= 2",values:[]},"inactive-icon-class":{type:"attribute",description:"class name of the icon displayed when in off state, overrides 'inactive-text', version >= 2",values:[]},"active-text":{type:"attribute",description:"text displayed when in on state, version >= 2",values:[]},"inactive-text":{type:"attribute",description:"text displayed when in off state, version >= 2",values:[]},"active-value":{type:"attribute",description:"switch value when in on state, default: true, version >= 2",values:[]},"inactive-value":{type:"attribute",description:"switch value when in off state, default: false, version >= 2",values:[]},"active-color":{type:"attribute",description:"background color when in on state, default: #409EFF, version >= 2",values:[]},"inactive-color":{type:"attribute",description:"background color when in off state, default: #C0CCDA, version >= 2",values:[]},"on-icon-class":{type:"attribute",description:"class name of the icon displayed when in on state, overrides 'on-text', version < 2",values:[]},"off-icon-class":{type:"attribute",description:"class name of the icon displayed when in off state, overrides 'off-text', version < 2",values:[]},"on-text":{type:"attribute",description:"text displayed when in on state, version < 2",values:[]},"off-text":{type:"attribute",description:"text displayed when in off state, version < 2",values:[]},"on-value":{type:"attribute",description:"switch value when in on state, default: true, version < 2",values:[]},"off-value":{type:"attribute",description:"switch value when in off state, default: false, version < 2",values:[]},"on-color":{type:"attribute",description:"background color when in on state, default: #20A0FF, version < 2",values:[]},"off-color":{type:"attribute",description:"background color when in off state, default: #C0CCDA, version < 2",values:[]},name:{type:"attribute",description:"input name of Switch",values:[]},change:{type:"method",description:"",values:[]}},"el-slider":{"v-model":{type:"attribute",description:"",values:[]},min:{type:"attribute",description:"minimum value, defalult: 0",values:[]},max:{type:"attribute",description:"maximum value, defalult: 100",values:[]},disabled:{type:"attribute",description:"",values:[]},step:{type:"attribute",description:"",values:[]},"show-input":{type:"attribute",description:"whether to display an input box, works when 'range' is false, default: false",values:[]},"show-input-controls":{type:"attribute",description:"whether to display control buttons when 'show-input' is true, default: true",values:[]},"input-size":{type:"attribute",description:"size of the input box, default: small",values:["large","medium","small","mini"]},"show-stops":{type:"attribute",description:"whether to display breakpoints, default: false",values:[]},"show-tooltip":{type:"attribute",description:"whether to display tooltip value, default: true",values:[]},"format-tooltip":{type:"attribute",description:"",values:[]},range:{type:"attribute",description:"whether to select a range",values:[]},vertical:{type:"attribute",description:"defaults: false",values:[]},height:{type:"attribute",description:"Slider height, required in vertical mode",values:[]},debounce:{type:"attribute",description:"debounce delay when typing, in millisecond, works when 'show-input' is true, default: 300",values:[]},"tooltip-class":{type:"attribute",description:"custom class name for the tooltip",values:[]},change:{type:"method",description:"",values:[]}},"el-time-select":{"v-model":{type:"attribute",description:"",values:[]},placeholder:{type:"attribute",description:"",values:[]},readonly:{type:"attribute",description:"",values:[]},editable:{type:"attribute",description:"",values:[]},disabled:{type:"attribute",description:"",values:[]},clearable:{type:"attribute",description:"",values:[]},size:{type:"attribute",description:"",values:["medium","small","mini"]},value:{type:"attribute",description:"value of the picker, default: HH:mm:ss",values:[]},align:{type:"attribute",description:"",values:["left","center","right"]},"popper-class":{type:"attribute",description:"",values:[]},"picker-options":{type:"attribute",description:"additional options, type is object",values:["start","end","step","minTime","maxTime"]},vertical:{type:"attribute",description:"defaults: false",values:[]},height:{type:"attribute",description:"",values:[]},change:{type:"method",description:"",values:[]}},"el-time-picker":{"v-model":{type:"attribute",description:"",values:[]},placeholder:{type:"attribute",description:"",values:[]},readonly:{type:"attribute",description:"",values:[]},editable:{type:"attribute",description:"",values:[]},disabled:{type:"attribute",description:"",values:[]},clearable:{type:"attribute",description:"",values:[]},size:{type:"attribute",description:"",values:["medium","small","mini"]},"start-placeholder":{type:"attribute",description:"placeholder for the start time in range mode",values:[]},"end-placeholder":{type:"attribute",description:"placeholder for the end time in range mode",values:[]},value:{type:"attribute",description:"",values:[]},align:{type:"attribute",description:"",values:["left","center","right"]},"picker-options":{type:"attribute",description:"additional options, type is object",values:["format","selectableRange"]},"range-separator":{type:"attribute",description:"default: '-'",values:[]},"popper-class":{type:"attribute",description:"",values:[]},"is-range":{type:"attribute",description:"",values:[]},"arrow-control":{type:"attribute",description:"whether to pick time using arrow buttons, only works with <el-time-picker>",values:[]},"value-format":{type:"attribute",description:"optional, format of binding value. If not specified, the binding value will be a Date object",values:[]},"default-value":{type:"attribute",description:"optional default time of the picker, type: Date",values:[]},change:{type:"method",description:"",values:[]},blur:{type:"method",description:"",values:[]},focus:{type:"method",description:"",values:[]}},"el-date-picker":{"v-model":{type:"attribute",description:"",values:[]},placeholder:{type:"attribute",description:"",values:[]},readonly:{type:"attribute",description:"",values:[]},editable:{type:"attribute",description:"",values:[]},disabled:{type:"attribute",description:"",values:[]},clearable:{type:"attribute",description:"",values:[]},size:{type:"attribute",description:"",values:["medium","small","mini"]},"start-placeholder":{type:"attribute",description:"placeholder for the start time in range mode",values:[]},"end-placeholder":{type:"attribute",description:"placeholder for the end time in range mode",values:[]},"time-arrow-control":{type:"attribute",description:"whether to pick time using arrow buttons",values:[]},type:{type:"attribute",description:"type of the picker, default: date",values:["year","month","date","week","datetime","datetimerange","daterange"]},format:{type:"attribute",description:"year yyyy month MM day dd, hour HH, minute mm, second ss, default: yyyy-MM-dd",values:[]},align:{type:"attribute",description:"",values:["left","center","right"]},"popper-class":{type:"attribute",description:"",values:[]},"picker-options":{type:"attribute",description:"additional options, type is object",values:["shortcuts","disabledDate","firstDayOfWeek","onPick"]},"range-separator":{type:"attribute",description:"default: '-'",values:[]},"default-value":{type:"attribute",description:"optional default time of the picker, type: Date",values:[]},"default-time":{type:"attribute",description:"The time value to use when selecting date range, type: string[]",values:[]},"value-format":{type:"attribute",description:"optional, format of binding value. If not specified, the binding value will be a Date object",values:[]},name:{type:"attribute",description:"native 'name' attribute",values:[]},"unlink-panels":{type:"attribute",description:"unlink two date-panels in range-picker",values:[]},"prefix-icon":{type:"attribute",description:"Custom prefix icon class, default: 'el-icon-date",values:[]},"clear-icon":{type:"attribute",description:"Custom clear icon class, default: 'el-icon-circle-close",values:[]},change:{type:"method",description:"",values:[]}},"el-upload":{action:{type:"attribute",description:"required, upload URL",values:[]},headers:{type:"attribute",description:"request headers",values:[]},multiple:{type:"attribute",description:"",values:[]},data:{type:"attribute",description:"",values:[]},name:{type:"attribute",description:"key name for uploaded file, default: 'file'",values:[]},width:{type:"attribute",description:"",values:[]},"with-credentials":{type:"attribute",description:"whether cookies are sent",values:[]},"show-file-list":{type:"attribute",description:"",values:[]},drag:{type:"attribute",description:"whether to activate drag and drop mode",values:[]},accept:{type:"attribute",description:"accepted file types, will not work when thumbnail-mode is true",values:[]},"on-preview":{type:"attribute",description:"hook function when clicking the uploaded files, type: function(file)",values:[]},"on-remove":{type:"attribute",description:"hook function when files are removed, type: function(file, fileList)",values:[]},"on-success":{type:"attribute",description:"hook function when uploaded successfully, type: function(response, file, fileList)",values:[]},"on-error":{type:"attribute",description:"hook function when some errors occurs, type: function(err, file, fileList)",values:[]},"on-progress":{type:"attribute",description:"hook function when some progress occurs, type: function(event, file, fileList)",values:[]},"on-change":{type:"attribute",description:"hook function when select file or upload file success or upload file fail, type: function(file, fileList)",values:[]},"before-upload":{type:"attribute",description:"hook function before uploading with the file to be uploaded as its parameter. If false is returned or a Promise is returned and then is rejected, uploading will be aborted, type: function(file)",values:[]},"before-remove":{type:"attribute",description:"hook function before removing a file with the file and file list as its parameters. If false is returned or a Promise is returned and then is rejected, removing will be aborted. type: function(file, fileList)",values:[]},"list-type":{type:"attribute",description:"type of fileList, default: 'text'",values:["text","picture","picture-card"]},"auto-upload":{type:"attribute",description:"",values:[]},"file-list":{type:"attribute",description:"default uploaded files, e.g. [{name: '*.jpeg', url: '*'}]",values:[]},"http-request":{type:"attribute",description:"override default xhr behavior, allowing you to implement your own upload-file's request",values:[]},disabled:{type:"attribute",description:"",values:[]},limit:{type:"attribute",description:"maximum number of uploads allowed",values:[]},"on-exceed":{type:"attribute",description:"hook function when limit is exceeded",values:[]}},"el-rate":{"v-model":{type:"attribute",description:"",values:[]},max:{type:"attribute",description:"max rating score, default: 5",values:[]},disabled:{type:"attribute",description:"",values:[]},"allow-half":{type:"attribute",description:"whether picking half start is allowed",values:[]},"low-threshold":{type:"attribute",description:"hreshold value between low and medium level. The value itself will be included in low level, default: 2",values:[]},"high-threshold":{type:"attribute",description:"threshold value between medium and high level. The value itself will be included in high level, default: 4",values:[]},colors:{type:"attribute",description:"color array for icons. It should have 3 elements, each of which corresponds with a score level, default: ['#F7BA2A', '#F7BA2A', '#F7BA2A']",values:[]},"void-color":{type:"attribute",description:"color of unselected icons, default: #C6D1DE",values:[]},"disabled-void-color":{type:"attribute",description:"color of unselected read-only icons, default: #EFF2F7",values:[]},"icon-classes":{type:"attribute",description:"array of class names of icons. It should have 3 elements, each of which corresponds with a score level, default: ['el-icon-star-on', 'el-icon-star-on','el-icon-star-on']",values:[]},"void-icon-class":{type:"attribute",description:"class name of unselected icons, default: el-icon-star-off",values:[]},"disabled-void-icon-class":{type:"attribute",description:"class name of unselected read-only icons, default: el-icon-star-on",values:[]},"show-text":{type:"attribute",description:"",values:[]},"show-score":{type:"attribute",description:"whether to display current score. show-score and show-text cannot be true at the same time",values:[]},"text-color":{type:"attribute",description:"",values:[]},texts:{type:"attribute",description:"text array",values:[]},"score-template":{type:"attribute",description:"score template, default: {value}",values:[]},change:{type:"method",description:"",values:[]}},"el-color-picker":{"v-model":{type:"attribute",description:"",values:[]},disabled:{type:"attribute",description:"",values:[]},size:{type:"attribute",description:"",values:["medium","small","mini"]},"show-alpha":{type:"attribute",description:"whether to display the alpha slider",values:[]},"color-format":{type:"attribute",description:"color format of v-model, default: hex(when show-alpha is false)/rgb(when show-alpha is true)",values:["hsl","hsv","hex","rgb"]},"popper-class":{type:"attribute",description:"",values:[]},predefine:{type:"attribute",description:"predefined color options, type: array",values:[]},change:{type:"method",description:"",values:[]},"active-change":{type:"method",description:"",values:[]}},"el-transfer":{"v-model":{type:"attribute",description:"",values:[]},data:{type:"attribute",description:"",values:[]},filterable:{type:"attribute",description:"",values:[]},"filter-placeholder":{type:"attribute",description:"",values:[]},"filter-method":{type:"attribute",description:"",values:[]},"target-order":{type:"attribute",description:"order strategy for elements in the target list. If set to 'original', the elements will keep the same order as the data source. If set to 'push', the newly added elements will be pushed to the bottom. If set to 'unshift', the newly added elements will be inserted on the top, default: original",values:["original","push","unshift"]},titles:{type:"attribute",description:"custom list titles, default: ['List 1', 'List 2']",values:[]},"button-texts":{type:"attribute",description:"custom button texts, default: []",values:[]},"render-content":{type:"attribute",description:"custom render function for data items",values:[]},format:{type:"attribute",description:"texts for checking status in list footer, default: { noChecked: '${total} items', hasChecked: '${checked}/${total} checked' }",values:[]},props:{type:"attribute",description:"",values:[]},"left-default-checked":{type:"attribute",description:"key array of initially checked data items of the left list, default: []",values:[]},"right-default-checked":{type:"attribute",description:"key array of initially checked data items of the right list, default: []",values:[]},change:{type:"method",description:"",values:[]},"left-check-change":{type:"method",description:"triggers when end user changes the checked state of any data item in the left list",values:[]},"right-check-change":{type:"method",description:"triggers when end user changes the checked state of any data item in the right list",values:[]}},"el-form":{model:{type:"attribute",description:"data of form component, type: object",values:[]},rules:{type:"attribute",description:"validation rules of form",values:[]},inline:{type:"attribute",description:"whether the form is inline",values:[]},"label-position":{type:"attribute",description:"position of label, default: 'right'",values:["left","right","top"]},"label-width":{type:"attribute",description:"",values:[]},"label-suffix":{type:"attribute",description:"",values:[]},"show-message":{type:"attribute",description:"",values:[]},"inline-message":{type:"attribute",description:"whether to display the error message inline with the form item",values:[]},"status-icon":{type:"attribute",description:"",values:[]},"validate-on-rule-change":{type:"attribute",description:"whether to trigger validation when the 'rules' prop is changed, default: true",values:[]},size:{type:"attribute",description:"",values:["medium","small","mini"]},disabled:{type:"attribute",description:"",values:[]},validate:{type:"method",description:"triggers after a form item is validated",values:[]}},"el-form-item":{label:{type:"attribute",description:"",values:[]},prop:{type:"attribute",description:"a key of model. In the use of validate and resetFields method, the attribute is required",values:[]},"label-width":{type:"attribute",description:"",values:[]},required:{type:"attribute",description:"",values:[]},rules:{type:"attribute",description:"validation rules of form",values:[]},error:{type:"attribute",description:"field error message, set its value and the field will validate error and show this message immediately",values:[]},"show-message":{type:"attribute",description:"",values:[]},"inline-message":{type:"attribute",description:"inline style validate message",values:[]},size:{type:"attribute",description:"",values:["medium","small","mini"]}},"el-table":{data:{type:"attribute",description:"",values:[]},height:{type:"attribute",description:"Table's height. By default it has an auto height. If its value is a number, the height is measured in pixels; if its value is a string, the height is affected by external styles",values:[]},"max-height":{type:"attribute",description:"Table's max-height. The height of the table starts from 'auto' until it reaches the maxHeight limit. The 'maxHeight' is measured in pixels, same as 'heigh't",values:[]},stripe:{type:"attribute",description:"",values:[]},border:{type:"attribute",description:"",values:[]},fit:{type:"attribute",description:"whether width of column automatically fits its container",values:[]},"show-header":{type:"attribute",description:"",values:[]},"highlight-current-row":{type:"attribute",description:"",values:[]},"current-row-key":{type:"attribute",description:"key of current row, a set only prop",values:[]},"row-class-name":{type:"attribute",description:"function that returns custom class names for a row, or a string assigning class names for every row",values:[]},"cell-class-name":{type:"attribute",description:"function that returns custom class names for a cell, or a string assigning class names for every cell",values:[]},"cell-style":{type:"attribute",description:"function that returns custom style for a cell, or an object assigning custom style for every cell",values:[]},"header-row-class-name":{type:"attribute",description:"function that returns custom class names for a row in table header, or a string assigning class names for every row in table header",values:[]},"header-row-style":{type:"attribute",description:"function that returns custom style for a row in table header, or an object assigning custom style for every row in table header",values:[]},"header-cell-name":{type:"attribute",description:"",values:[]},"header-cell-style":{type:"attribute",description:"function that returns custom style for a cell in table header, or an object assigning custom style for every cell in table header",values:[]},"row-style":{type:"attribute",description:"function that returns custom style for a row, or a string assigning custom style for every row",values:[]},"row-key":{type:"attribute",description:"key of row data, used for optimizing rendering. Required if 'reserve-selection' is on",values:[]},"empty-text":{type:"attribute",description:"Displayed text when data is empty. You can customize this area with slot='empty'",values:[]},"default-expand-all":{type:"attribute",description:"",values:[]},"expand-row-keys":{type:"attribute",description:"set expanded rows by this prop, prop's value is the keys of expand rows, you should set row-key before using this prop, type: Array",values:[]},"default-sort":{type:"attribute",description:"set the default sort column and order. property prop is used to set default sort column, property order is used to set default sort order",values:[]},"tooltip-effect":{type:"attribute",description:"tooltip 'effect' property",values:["dark","light"]},"show-summary":{type:"attribute",description:"",values:[]},"sum-text":{type:"attribute",description:"displayed text for the first column of summary row, default: Sum",values:[]},"summary-method":{type:"attribute",description:"custom summary method",values:[]},"span-method":{type:"attribute",description:"method that returns rowspan and colspan",values:[]},"select-on-indeterminate":{type:"attribute",description:"controls the behavior of master checkbox in multi-select tables when only some rows are selected (but not all). If true, all rows will be selected, else deselected. default: true",values:[]},select:{type:"method",description:"triggers when user clicks the checkbox in a row, arg: selection, row",values:[]},"select-all":{type:"method",description:"triggers when user clicks the checkbox in table header, arg: selection",values:[]},"selection-change":{type:"method",description:"triggers when selection changes, arg: selection",values:[]},"cell-mouse-enter":{type:"method",description:"triggers when hovering into a cell, arg: row, column, cell, event",values:[]},"cell-mouse-leave":{type:"method",description:"triggers when hovering out of a cell, arg: row column, cell, event",values:[]},"cell-click":{type:"method",description:"triggers when clicking a cell, arg: row, column, cell, event",values:[]},"cell-dbclick":{type:"method",description:"triggers when double clicking a cell, arg: row, column, cell, event",values:[]},"row-click":{type:"method",description:"triggers when clicking a row, arg: row, event, column",values:[]},"row-contextmenu":{type:"method",description:"triggers when user right clicks on a row, arg: row, event",values:[]},"row-dbclick":{type:"method",description:"triggers when double clicking a row, arg: row, event",values:[]},"header-click":{type:"method",description:"triggers when clicking a column header, arg: column, event",values:[]},"sort-change":{type:"method",description:"triggers when Table's sorting changes, arg: { column, prop, order }",values:[]},"filter-change":{type:"method",description:"column's key. If you need to use the filter-change event, this attribute is mandatory to identify which column is being filtered, arg: filters",values:[]},"current-change":{type:"method",description:"triggers when current row changes, arg: currentRow, oldCurrentRow",values:[]},"header-draggend":{type:"method",description:"triggers when finish dragging header, arg: newWidth, oldWidth, column, event",values:[]},expand:{type:"method",description:"triggers when user expands or collapses a row, arg: row, expanded",values:[]},"expand-change":{type:"method",description:"triggers when user expands or collapses a row, arg: row, expanded",values:[]}},"el-table-column":{label:{type:"attribute",description:"",values:[]},type:{type:"attribute",description:"type of the column. If set to 'selection', the column will display checkbox. If set to 'index', the column will display index of the row (staring from 1). If set to 'expand', the column will display expand icon.",values:["selection","index","expand"]},"column-key":{type:"attribute",description:"column's key. If you need to use the filter-change event, you need this attribute to identify which column is being filtered",values:[]},index:{type:"attribute",description:"",values:[]},prop:{type:"attribute",description:"field name. You can also use its alias: property",values:[]},width:{type:"attribute",description:"",values:[]},"min-width":{type:"attribute",description:"column minimum width. Columns with width has a fixed width, while columns with min-width has a width that is distributed in proportion",values:[]},fixed:{type:"attribute",description:"whether column is fixed at left/right. Will be fixed at left if 'true'",values:["ture","left","right"]},"render-header":{type:"attribute",description:"render function for table header of this column",values:[]},sortable:{type:"attribute",description:"",values:[]},"sort-method":{type:"attribute",description:"sorting method, works when 'sortable' is true. Should return a number, just like Array.sort, type: Function(a, b)",values:[]},"sort-by":{type:"attribute",description:"specify which property to sort by, works when 'sortable' is true and 'sort-method' is undefined. If set to an Array, the column will sequentially sort by the next property if the previous one is equal, type: Function(row, index)/String/Array",values:[]},resizable:{type:"attribute",description:"whether column width can be resized, works when border of 'el-table' is 'true'",values:[]},formatter:{type:"attribute",description:"function that formats content",values:[]},"show-overflow-tooltip":{type:"attribute",description:"whether to hide extra content and show them in a tooltip when hovering on the cell",values:[]},align:{type:"attribute",description:"",values:["left","center","right"]},"header-align":{type:"attribute",description:"alignment of the table header. If omitted, the value of the 'align' attribute will be applied",values:["left","center","right"]},"class-name":{type:"attribute",description:"",values:[]},"label-class-name":{type:"attribute",description:"class name of the label of this column",values:[]},selectable:{type:"attribute",description:"function that determines if a certain row can be selected, works when type is 'selection' Function(row, index)",values:[]},"reserve-selection":{type:"attribute",description:"whether to reserve selection after data refreshing, works when type is 'selection'",values:[]},filters:{type:"attribute",description:"an array of data filtering options. For each element in this array, 'text' and 'value' are required",values:[]},"filter-placement":{type:"attribute",description:"placement for the filter dropdown",values:[]},"filter-multiple":{type:"attribute",description:"whether data filtering supports multiple options",values:[]},"filter-method":{type:"attribute",description:"",values:[]},"filtered-value":{type:"attribute",description:"filter value for selected data, might be useful when table header is rendered with 'render-header'",values:[]}},"el-tag":{type:{type:"attribute",description:"theme",values:["info","success","warning","danger"]},closable:{type:"attribute",description:"",values:[]},"close-transition":{type:"attribute",description:"whether the removal animation is disabled",values:[]},hit:{type:"attribute",description:"whether Tag has a highlighted border",values:[]},color:{type:"attribute",description:"",values:[]},size:{type:"attribute",description:"",values:["medium","small","mini"]},close:{type:"method",description:"triggers when Tab is removed",values:[]}},"el-progress":{percentage:{type:"attribute",description:"percentage, required, default: 0",values:[]},type:{type:"attribute",description:"the type of progress bar, default: line",values:["line","circle"]},"stroke-width":{type:"attribute",description:"the width of progress bar, default: 6",values:[]},"text-inside":{type:"attribute",description:"whether to place the percentage inside progress bar, only works when type is 'line'",values:[]},status:{type:"attribute",description:"the current status of progress bar",values:["success","exception"]},color:{type:"attribute",description:"",values:[]},width:{type:"attribute",description:"",values:[]},"show-text":{type:"attribute",description:"",values:[]}},"el-tree":{data:{type:"attribute",description:"",values:[]},"empty-text":{type:"attribute",description:"text displayed when data is void",values:[]},"node-key":{type:"attribute",description:"unique identity key name for nodes, its value should be unique across the whole tree",values:[]},props:{type:"attribute",description:"",values:[]},load:{type:"attribute",description:"method for loading subtree data",values:[]},"render-content":{type:"attribute",description:"render function for tree node",values:[]},"highlight-current":{type:"attribute",description:"",values:[]},"current-node-key":{type:"attribute",description:"key of current node, a set only prop",values:[]},"default-expand-all":{type:"attribute",description:"",values:[]},"expand-on-click-node":{type:"attribute",description:"whether to expand or collapse node when clicking on the node, if false, then expand or collapse node only when clicking on the arrow icon, default: true",values:[]},"auto-expand-parent":{type:"attribute",description:"whether to expand father node when a child node is expanded, default: true",values:[]},"default-expanded-keys":{type:"attribute",description:"array of keys of initially expanded nodes",values:[]},"show-checkbox":{type:"attribute",description:"whether node is selectable",values:[]},"check-strictly":{type:"attribute",description:"whether checked state of a node not affects its father and child nodes when 'show-checkbox' is 'true'",values:[]},"default-checked-keys":{type:"attribute",description:"array of keys of initially checked nodes",values:[]},"filter-node-method":{type:"attribute",description:"this function will be executed on each node when use filter method. if return 'false', tree node will be hidden.",values:[]},accordion:{type:"attribute",description:"whether only one node among the same level can be expanded at one time, default: false",values:[]},indent:{type:"attribute",description:"horizontal indentation of nodes in adjacent levels in pixels, default: 16",values:[]},"check-descendants":{type:"attribute",description:"",values:[]},draggable:{type:"attribute",description:"whether enable tree nodes drag and drop",values:[]},"allow-drag":{type:"attribute",description:"this function will be executed before dragging a node. If false is returned, the node can not be dragged, type: Function",values:[]},"allow-drop":{type:"attribute",description:"this function will be executed before the dragging node is dropped. If false is returned, the dragging node can not be dropped at the target node, type: Function",values:[]},"node-click":{type:"method",description:"triggers when a node is clicked",values:[]},"node-contextmenu":{type:"method",description:"triggers when a node is clicked by right button",values:[]},"check-change":{type:"method",description:"triggers when the selected state of the node changes",values:[]},check:{type:"method",description:"triggers after clicking the checkbox of a node",values:[]},"current-change":{type:"method",description:"triggers when current node changes",values:[]},"node-expand":{type:"method",description:"triggers when current node open",values:[]},"node-collapse":{type:"method",description:"triggers when current node close",values:[]},"node-drag-start":{type:"method",description:"triggers when dragging starts",values:[]},"node-drag-enter":{type:"method",description:"triggers when the dragging node enters another node",values:[]},"node-drag-leave":{type:"method",description:"triggers when the dragging node leaves a node",values:[]},"node-drag-over":{type:"method",description:"triggers when dragging over a node (like mouseover event)",values:[]},"node-drag-end":{type:"method",description:"triggers when dragging ends",values:[]},"node-drop":{type:"method",description:"triggers after the dragging node is dropped",values:[]}},"el-pagination":{total:{type:"attribute",description:"total item count",values:[]},"current-page":{type:"attribute",description:"current page number, supports the .sync modifier, default: 1",values:[]},"page-size":{type:"attribute",description:"item count of each page, default: 10",values:[]},"current-change":{type:"method",description:"triggers when 'current-page' changes",values:[]},layout:{type:"attribute",description:"layout of Pagination, elements separated with a comma",values:["sizes","prev","pager","next","jumper","->","total","slot"]},small:{type:"attribute",description:"",values:[]},background:{type:"attribute",description:"whether the buttons have a background color",values:[]},"page-count":{type:"attribute",description:"total page count. Set either 'total' or 'page-count' and pages will be displayed; if you need 'page-sizes', total is required",values:[]},"page-sizes":{type:"attribute",description:"options of item count per page, example: [10, 20]",values:[]},"popper-class":{type:"attribute",description:"",values:[]},"prev-text":{type:"attribute",description:"text for the prev button",values:[]},"next-text":{type:"attribute",description:"text for the next button",values:[]},disabled:{type:"attribute",description:"",values:[]},"size-change":{type:"attribute",description:"",values:[]}},"el-badge":{value:{type:"attribute",description:"",values:[]},max:{type:"attribute",description:"maximum value, shows '{max}+' when exceeded. Only works if 'value' is a Number",values:[]},"is-dot":{type:"attribute",description:"a little dot is displayed",values:[]},hidden:{type:"attribute",description:"",values:[]},type:{type:"attribute",description:"type",values:["primary","success","warning","danger","info"]}},"el-alert":{type:{type:"attribute",description:"component type",values:["success","warning","info","danger"]},title:{type:"attribute",description:"",values:[]},description:{type:"attribute",description:"",values:[]},closable:{type:"attribute",description:"",values:[]},center:{type:"attribute",description:"whether to center the text",values:[]},"close-text":{type:"attribute",description:"customized close button text",values:[]},"show-icon":{type:"attribute",description:"if a type icon is displayed",values:[]},close:{type:"method",description:"",values:[]}},"el-menu":{"default-active":{type:"attribute",description:"index of currently active menu",values:[]},mode:{type:"attribute",description:"",values:[]},collapse:{type:"attribute",description:"whether the menu is collapsed (available only in vertical mode)",values:[]},"background-color":{type:"attribute",description:"background color of Menu (hex format), default: #ffffff",values:[]},"text-color":{type:"attribute",description:"text color of Menu (hex format), default: #2d2f33",values:[]},"active-text-color":{type:"attribute",description:"text color of currently active menu item (hex format), default: #409EFF",values:[]},theme:{type:"attribute",description:"theme color, default: light",values:["light","dark"]},"default-openeds":{type:"attribute",description:"array that contains keys of currently active sub-menus",values:[]},"unique-opened":{type:"attribute",description:"whether only one sub-menu can be active",values:[]},"menu-trigger":{type:"attribute",description:"how sub-menus are triggered, only works when mode is 'horizontal', default: hover",values:[]},router:{type:"attribute",description:"whether vue-router mode is activated. If true, index will be used as 'path' to activate the route action",values:[]},"collapse-transition":{type:"attribute",description:"whether to enable the collapse transition, default: true",values:[]},select:{type:"method",description:"",values:[]},open:{type:"method",description:"",values:[]},close:{type:"method",description:"",values:[]}},"el-submenu":{},"el-menu-item-group":{title:{type:"attribute",description:"",values:[]}},"el-menu-item":{index:{type:"attribute",description:"",values:[]},route:{type:"attribute",description:"Vue Router object",values:[]},disabled:{type:"attribute",description:"",values:[]}},"el-tabs":{type:{type:"attribute",description:"type of Tab",values:["card","border-card"]},closable:{type:"attribute",description:"",values:[]},addable:{type:"attribute",description:"",values:[]},editable:{type:"attribute",description:"",values:[]},value:{type:"attribute",description:"",values:[]},"activate-name":{type:"attribute",description:"name of the selected tab(deprecated)",values:[]},"tab-position":{type:"attribute",description:"position of tabs, default: top",values:["top","right","bottom","left"]},"tab-click":{type:"method",description:"triggers when a tab is clicked",values:[]},"tab-remove":{type:"method",description:"triggers when tab-remove button is clicked",values:[]},"tab-add":{type:"method",description:"triggers when tab-add button is clicked",values:[]},edit:{type:"method",description:"triggers when tab-add button or tab-remove is clicked",values:[]}},"el-tab-pane":{label:{type:"attribute",description:"",values:[]},disabled:{type:"attribute",description:"",values:[]},name:{type:"attribute",description:"native 'name' attribute",values:[]},closable:{type:"attribute",description:"",values:[]}},"el-breadcrumb":{separator:{type:"attribute",description:"separator character, default: '/'",values:[]},"separator-class":{type:"attribute",description:"iconfont-separator's class",values:[]}},"el-breadcrumb-item":{to:{type:"attribute",description:"target route of the link, same as to of vue-router",values:[]},replace:{type:"attribute",description:"if 'true', the navigation will not leave a history record, default: false",values:[]}},"el-dropdown":{type:{type:"attribute",description:"menu button type, refer to Button Component, only works when 'split-button' is true",values:[]},szie:{type:"attribute",description:"",values:[]},"split-button":{type:"attribute",description:"whether a button group is displayed",values:[]},placement:{type:"attribute",description:"default: bottom",values:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"]},trigger:{type:"attribute",description:"default: hover",values:["hover","click"]},"hide-on-click":{type:"attribute",description:"whether to hide menu after clicking menu-item",values:[]},"show-timeout":{type:"attribute",description:"Delay time before show a dropdown, default: 250",values:[]},"hide-timeout":{type:"attribute",description:"Delay time before hide a dropdown, default: 150",values:[]},click:{type:"method",description:"",values:[]},command:{type:"method",description:"triggers when a dropdown item is clicked",values:[]},"visible-change":{type:"method",description:"",values:[]}},"el-dropdown-menu":{command:{type:"attribute",description:"a command to be dispatched to Dropdown's 'command' callback",values:[]},disabled:{type:"attribute",description:"",values:[]},divided:{type:"attribute",description:"",values:[]}},"el-steps":{space:{type:"attribute",description:"the spacing of each step, will be responsive if omitted. Support percentage.",values:[]},active:{type:"attribute",description:"current activation step",values:[]},direction:{type:"attribute",description:"display direction, default: horizontal",values:["vertical","horizontal"]},"process-status":{type:"attribute",description:"status of current step, default: process",values:["wait","process","finish","error","success"]},"finish-status":{type:"attribute",description:"status of end step, default: finish",values:["wait","process","finish","error","success"]},"align-center":{type:"attribute",description:"whether step description is centered",values:[]},center:{type:"attribute",description:"center whole Steps component",values:[]},simple:{type:"attribute",description:"",values:[]}},"el-step":{title:{type:"attribute",description:"",values:[]},description:{type:"attribute",description:"",values:[]},icon:{type:"attribute",description:"",values:[]},status:{type:"attribute",description:"current status. It will be automatically set by Steps if not configured.",values:["wait","process","finish","error","success"]}},"el-dialog":{title:{type:"attribute",description:"",values:[]},top:{type:"attribute",description:"value for top of Dialog CSS, works when size is not full, default: 15%",values:[]},visible:{type:"attribute",description:"visibility of Dialog, supports the '.sync' modifier, default: false",values:[]},width:{type:"attribute",description:"",values:[]},fullscreen:{type:"attribute",description:"whether the Dialog takes up full screen, default: false",values:[]},modal:{type:"attribute",description:"whether a mask is displayed, default: true",values:[]},"modal-append-to-body":{type:"attribute",description:"whether to append modal to body element. If false, the modal will be appended to Dialog's parent element, default: true",values:[]},"append-to-body":{type:"attribute",description:"whether to append Dialog itself to body. A nested Dialog should have this attribute set to 'true', default: false",values:[]},"lock-scroll":{type:"attribute",description:"whether scroll of body is disabled while Dialog is displayed, default: true",values:[]},"custom-class":{type:"attribute",description:"custom class names for Dialog",values:[]},"close-on-click-modal":{type:"attribute",description:"whether the Dialog can be closed by clicking the mask, default: true",values:[]},"show-close":{type:"attribute",description:"whether to show a close button, default: true",values:[]},"before-close":{type:"attribute",description:"callback before Dialog closes, and it will prevent Dialog from closing",values:[]},center:{type:"attribute",description:"whether to align the header and footer in center",values:[]},close:{type:"method",description:"",values:[]},open:{type:"method",description:"",values:[]}},"el-tooltip":{content:{type:"attribute",description:"display content, can be overridden by slot#content",values:[]},placement:{type:"attribute",description:"default: bottom",values:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"]},effect:{type:"attribute",description:"Tooltip theme",values:["dark","light"]},value:{type:"attribute",description:"",values:[]},disabled:{type:"attribute",description:"",values:[]},offset:{type:"attribute",description:"offset of the Tooltip, default: 0",values:[]},transition:{type:"attribute",description:"animation name, default: 'el-fade-in-linear'",values:[]},"visible-arrow":{type:"attribute",description:"",values:[]},"popper-options":{type:"attribute",description:"",values:[]},"open-delay":{type:"attribute",description:"delay of appearance, in millisecond, default: 0",values:[]},manual:{type:"attribute",description:"whether to control Tooltip manually. mouseenter and mouseleave won't have effects if set to 'true', default: false",values:[]},"popper-class":{type:"attribute",description:"",values:[]},enterable:{type:"attribute",description:"enterable whether the mouse can enter the tooltip, default: true",values:[]},"hide-after":{type:"attribute",description:"timeout in milliseconds to hide tooltip, default: 0",values:[]}},"el-popover":{placement:{type:"attribute",description:"default: bottom",values:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"]},trigger:{type:"attribute",description:"how the popover is triggered, default: click",values:["click","focus","hover","manual"]},title:{type:"attribute",description:"",values:[]},content:{type:"attribute",description:"popover content, can be replaced with a default slot",values:[]},width:{type:"attribute",description:"",values:[]},disabled:{type:"attribute",description:"",values:[]},value:{type:"attribute",description:"",values:[]},offset:{type:"attribute",description:"",values:[]},transition:{type:"attribute",description:"animation name, default: 'el-fade-in-linear'",values:[]},"visible-arrow":{type:"attribute",description:"",values:[]},"popper-options":{type:"attribute",description:"",values:[]},"popper-class":{type:"attribute",description:"",values:[]},"open-delay":{type:"attribute",description:"delay of appearance when trigger is hover, in milliseconds",values:[]},show:{type:"method",description:"triggers when popover shows",values:[]},hide:{type:"method",description:"triggers when popover hides",values:[]},"after-enter":{type:"method",description:"triggers when the entering transition ends",values:[]},"after-leave":{type:"method",description:"triggers when the leaving transition ends",values:[]}},"el-card":{header:{type:"attribute",description:"Title of the card. Also accepts a DOM passed by slot#header",values:[]},"body-style":{type:"attribute",description:"CSS style of body,type: object, default: {padding: '20px'}",values:[]}},"el-carousel":{height:{type:"attribute",description:"",values:[]},"initial-index":{type:"attribute",description:"index of the initially active slide (starting from 0), default: 0",values:[]},trigger:{type:"attribute",description:"default: hover",values:["hover","click"]},autoplay:{type:"attribute",description:"whether automatically loop the slides, default: true",values:[]},interval:{type:"attribute",description:"interval of the auto loop, in milliseconds, default: 30000",values:[]},"indicator-position":{type:"attribute",description:"position of the indicators",values:["outside","none"]},arrow:{type:"attribute",description:"when arrows are shown, default: hover",values:["always","hover","nerver"]},type:{type:"attribute",description:"type of the Carousel",values:["card"]},change:{type:"method",description:"",values:[]}},"el-carousel-item":{name:{type:"attribute",description:"name of the item, can be used in 'setActiveItem'",values:[]},label:{type:"attribute",description:"",values:[]}},"el-collapse":{accordion:{type:"attribute",description:"whether to activate accordion mode, default: false",values:[]},value:{type:"attribute",description:"",values:[]},change:{type:"method",description:"",values:[]}},"el-collapse-item":{name:{type:"attribute",description:"native 'name' attribute",values:[]},title:{type:"attribute",description:"",values:[]}},"el-timeline":{reverse:{type:"attribute",description:"",values:[]}},"el-timeline-item":{timestamp:{type:"attribute",description:"",values:[]},"hide-timestamp":{type:"attribute",description:"",values:[]},placement:{type:"attribute",description:"",values:[]},type:{type:"attribute",description:"",values:[]},color:{type:"attribute",description:"",values:[]},size:{type:"attribute",description:"",values:[]},icon:{type:"attribute",description:"",values:[]}},"el-divider":{direction:{type:"attribute",description:"",values:[]},"content-position":{type:"attribute",description:"",values:[]}},"el-calendar":{"v-model":{type:"attribute",description:"",values:[]},range:{type:"attribute",description:"whether to select a range",values:[]},"first-day-of-week":{type:"attribute",description:"",values:[]},date:{type:"attribute",description:"",values:[]},data:{type:"attribute",description:"",values:[]}},"el-image":{src:{type:"attribute",description:"",values:[]},fit:{type:"attribute",description:"",values:[]},alt:{type:"attribute",description:"",values:[]},"referrer-policy":{type:"attribute",description:"",values:[]},lazy:{type:"attribute",description:"",values:[]},"scroll-container":{type:"attribute",description:"",values:[]},"preview-src-list":{type:"attribute",description:"",values:[]},"z-index":{type:"attribute",description:"",values:[]},load:{type:"attribute",description:"method for loading subtree data",values:[]},error:{type:"attribute",description:"field error message, set its value and the field will validate error and show this message immediately",values:[]}},"el-backtop":{target:{type:"attribute",description:"",values:[]},"visibility-height":{type:"attribute",description:"",values:[]},right:{type:"attribute",description:"",values:[]},bottom:{type:"attribute",description:"",values:[]},click:{type:"method",description:"",values:[]}},"el-drawer":{"append-to-body":{type:"attribute",description:"whether to append Dialog itself to body. A nested Dialog should have this attribute set to 'true', default: false",values:[]},"before-close":{type:"attribute",description:"callback before Dialog closes, and it will prevent Dialog from closing",values:[]},"close-on-press-escape":{type:"attribute",description:"whether the Dialog can be closed by pressing ESC, default: true",values:[]},"custom-class":{type:"attribute",description:"custom class names for Dialog",values:[]},"destroy-on-close":{type:"attribute",description:"",values:[]},modal:{type:"attribute",description:"whether a mask is displayed, default: true",values:[]},"modal-append-to-body":{type:"attribute",description:"whether to append modal to body element. If false, the modal will be appended to Dialog's parent element, default: true",values:[]},direction:{type:"attribute",description:"display direction, default: horizontal",values:["vertical","horizontal"]},"show-close":{type:"attribute",description:"whether to show a close button, default: true",values:[]},size:{type:"attribute",description:"",values:["medium","small","mini"]},title:{type:"attribute",description:"",values:[]},visible:{type:"attribute",description:"visibility of Dialog, supports the '.sync' modifier, default: false",values:[]},wrapperClosable:{type:"attribute",description:"",values:[]},open:{type:"method",description:"",values:[]},opened:{type:"attribute",description:"",values:[]},close:{type:"method",description:"",values:[]},closed:{type:"attribute",description:"",values:[]}}})});var hs=P(fi=>{"use strict";Object.defineProperty(fi,"__esModule",{value:!0});var m="http://element.eleme.io";fi.default=()=>({"el-row":`[element\uFF1A${m}/#/zh-CN/component/layout](${m}/#/zh-CN/component/layout) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| gutter | \u6805\u683C\u95F4\u9694 | number | \u2014 | 0 |
| type | \u5E03\u5C40\u6A21\u5F0F\uFF0C\u53EF\u9009 flex\uFF0C\u73B0\u4EE3\u6D4F\u89C8\u5668\u4E0B\u6709\u6548 | string | \u2014 | \u2014 |
| justify | flex \u5E03\u5C40\u4E0B\u7684\u6C34\u5E73\u6392\u5217\u65B9\u5F0F | string | start/end/center/space-around/space-between | start |
| align | flex \u5E03\u5C40\u4E0B\u7684\u5782\u76F4\u6392\u5217\u65B9\u5F0F | string | top/middle/bottom | top |
| tag | \u81EA\u5B9A\u4E49\u5143\u7D20\u6807\u7B7E | string | * | div |`,"el-col":`[element\uFF1A${m}/#/zh-CN/component/layout](${m}/#/zh-CN/component/layout) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| span | \u6805\u683C\u5360\u636E\u7684\u5217\u6570 | number | \u2014 | 24 |
| offset | \u6805\u683C\u5DE6\u4FA7\u7684\u95F4\u9694\u683C\u6570 | number | \u2014 | 0 |
| push | \u6805\u683C\u5411\u53F3\u79FB\u52A8\u683C\u6570 | number | \u2014 | 0 |
| pull | \u6805\u683C\u5411\u5DE6\u79FB\u52A8\u683C\u6570 | number | \u2014 | 0 |
| xs | <768px \u54CD\u5E94\u5F0F\u6805\u683C\u6570\u6216\u8005\u6805\u683C\u5C5E\u6027\u5BF9\u8C61 | number/object (\u4F8B\u5982\uFF1A {span: 4, offset: 4}) | \u2014 | \u2014 |
| sm | \u2265768px \u54CD\u5E94\u5F0F\u6805\u683C\u6570\u6216\u8005\u6805\u683C\u5C5E\u6027\u5BF9\u8C61 | number/object (\u4F8B\u5982\uFF1A {span: 4, offset: 4}) | \u2014 | \u2014 |
| md | \u2265992px \u54CD\u5E94\u5F0F\u6805\u683C\u6570\u6216\u8005\u6805\u683C\u5C5E\u6027\u5BF9\u8C61 | number/object (\u4F8B\u5982\uFF1A {span: 4, offset: 4}) | \u2014 | \u2014 |
| lg | \u22651200px \u54CD\u5E94\u5F0F\u6805\u683C\u6570\u6216\u8005\u6805\u683C\u5C5E\u6027\u5BF9\u8C61 | number/object (\u4F8B\u5982\uFF1A {span: 4, offset: 4}) | \u2014 | \u2014 |
| xl | \u22651920px \u54CD\u5E94\u5F0F\u6805\u683C\u6570\u6216\u8005\u6805\u683C\u5C5E\u6027\u5BF9\u8C61 | number/object (\u4F8B\u5982\uFF1A {span: 4, offset: 4}) | \u2014 | \u2014 |
| tag | \u81EA\u5B9A\u4E49\u5143\u7D20\u6807\u7B7E | string | * | div |`,"el-container":`[element\uFF1A${m}/#/zh-CN/component/container](${m}/#/zh-CN/component/container) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| direction | \u5B50\u5143\u7D20\u7684\u6392\u5217\u65B9\u5411 | string | horizontal / vertical | \u5B50\u5143\u7D20\u4E2D\u6709 el-header \u6216 el-footer \u65F6\u4E3A vertical\uFF0C\u5426\u5219\u4E3A horizontal |`,"el-header":`[element\uFF1A${m}/#/zh-CN/component/container](${m}/#/zh-CN/component/container) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| height | \u9876\u680F\u9AD8\u5EA6 | string | \u2014 | 60px |`,"el-aside":`[element\uFF1A${m}/#/zh-CN/component/container](${m}/#/zh-CN/component/container) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| width | \u4FA7\u8FB9\u680F\u5BBD\u5EA6 | string | \u2014 | 300px |`,"el-footer":`[element\uFF1A${m}/#/zh-CN/component/layout](${m}/#/zh-CN/component/layout) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| height | \u5E95\u680F\u9AD8\u5EA6 | string | \u2014 | 60px |`,"el-button":`[element\uFF1A${m}/#/zh-CN/component/button](${m}/#/zh-CN/component/button) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| size | \u5C3A\u5BF8 | string | medium / small / mini | \u2014 |
| type | \u7C7B\u578B | string | primary / success / warning / danger / info / text | \u2014 |
| plain | \u662F\u5426\u6734\u7D20\u6309\u94AE | boolean | \u2014 | false |
| round | \u662F\u5426\u5706\u89D2\u6309\u94AE | boolean | \u2014 | false |
| circle | \u662F\u5426\u5706\u5F62\u6309\u94AE | boolean | \u2014 | false |
| loading | \u662F\u5426\u52A0\u8F7D\u4E2D\u72B6\u6001 | boolean | \u2014 | false |
| disabled | \u662F\u5426\u7981\u7528\u72B6\u6001 | boolean | \u2014 | false |
| icon | \u56FE\u6807\u7C7B\u540D | string | \u2014 | \u2014 |
| autofocus | \u662F\u5426\u9ED8\u8BA4\u805A\u7126 | boolean | \u2014 | false |
| native-type | \u539F\u751F type \u5C5E\u6027 | string | button / submit / reset | button |
| \u4E8B\u4EF6\u540D\u79F0 | \u8BF4\u660E | \u56DE\u8C03\u53C2\u6570 |
| :--- | :--- | :--- |
| click | \u70B9\u51FB\u65F6\u89E6\u53D1\u4E8B\u4EF6 | event |`,"el-radio":`[element\uFF1A${m}/#/zh-CN/component/radio](${m}/#/zh-CN/component/radio) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| label | Radio \u7684 value | string / number / boolean | \u2014 | \u2014 |
| disabled | \u662F\u5426\u7981\u7528 | boolean | \u2014 | false |
| border | \u662F\u5426\u663E\u793A\u8FB9\u6846 | boolean | \u2014 | false |
| size | Radio \u7684\u5C3A\u5BF8\uFF0C\u4EC5\u5728 border \u4E3A\u771F\u65F6\u6709\u6548 | string | medium / small / mini | \u2014 |
| name | \u539F\u751F name \u5C5E\u6027 | string | \u2014 | \u2014 |

| \u4E8B\u4EF6\u540D\u79F0 | \u8BF4\u660E | \u56DE\u8C03\u53C2\u6570 |
| :--- | :--- | :--- |
| change | \u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6 | \u9009\u4E2D\u7684 Radio label \u503C |`,"el-radio-group":`[element\uFF1A${m}/#/zh-CN/component/radio](${m}/#/zh-CN/component/radio) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| size | \u5355\u9009\u6846\u7EC4\u5C3A\u5BF8\uFF0C\u4EC5\u5BF9\u6309\u94AE\u5F62\u5F0F\u7684 Radio \u6216\u5E26\u6709\u8FB9\u6846\u7684 Radio \u6709\u6548 | string | medium / small / mini | \u2014 |
| disabled | \u662F\u5426\u7981\u7528 | boolean | \u2014 | false |
| text-color | \u6309\u94AE\u5F62\u5F0F\u7684 Radio \u6FC0\u6D3B\u65F6\u7684\u6587\u672C\u989C\u8272 | string | \u2014 | #ffffff |
| fill | \u6309\u94AE\u5F62\u5F0F\u7684 Radio \u6FC0\u6D3B\u65F6\u7684\u586B\u5145\u8272\u548C\u8FB9\u6846\u8272 | string | \u2014 | #409EFF | 

| \u4E8B\u4EF6\u540D\u79F0 | \u8BF4\u660E | \u56DE\u8C03\u53C2\u6570 |
| :--- | :--- | :--- |
| change | \u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6 | \u9009\u4E2D\u7684 Radio label \u503C |`,"el-radio-button":`[element\uFF1A${m}/#/zh-CN/component/radio](${m}/#/zh-CN/component/radio) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| label | Radio \u7684 value | string / number | \u2014 | \u2014 |
| disabled | \u662F\u5426\u7981\u7528 | boolean | \u2014 | false |
| name | \u539F\u751F name \u5C5E\u6027 | string | \u2014 | \u2014 |`,"el-checkbox":`[element\uFF1A${m}/#/zh-CN/component/checkbox](${m}/#/zh-CN/component/checkbox) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| label | \u9009\u4E2D\u72B6\u6001\u7684\u503C\uFF08\u53EA\u6709\u5728checkbox-group\u6216\u8005\u7ED1\u5B9A\u5BF9\u8C61\u7C7B\u578B\u4E3Aarray\u65F6\u6709\u6548\uFF09 | string / number / boolean | \u2014 | \u2014 |
| true-label | \u9009\u4E2D\u65F6\u7684\u503C | string / number | \u2014 | \u2014 |
| false-label | \u6CA1\u6709\u9009\u4E2D\u65F6\u7684\u503C | string / number | \u2014 | \u2014 |
| disabled | \u662F\u5426\u7981\u7528 | boolean | \u2014 | false |
| border | \u662F\u5426\u663E\u793A\u8FB9\u6846 | boolean | \u2014 | false |
| size | Checkbox \u7684\u5C3A\u5BF8\uFF0C\u4EC5\u5728 border \u4E3A\u771F\u65F6\u6709\u6548 | string | medium / small / mini | \u2014 |
| name | \u539F\u751F name \u5C5E\u6027 | string | \u2014 | \u2014 |
| checked | \u5F53\u524D\u662F\u5426\u52FE\u9009 | boolean | \u2014 | false |
| indeterminate | \u8BBE\u7F6E indeterminate \u72B6\u6001\uFF0C\u53EA\u8D1F\u8D23\u6837\u5F0F\u63A7\u5236 | boolean | \u2014 | false | 

| \u4E8B\u4EF6\u540D\u79F0 | \u8BF4\u660E | \u56DE\u8C03\u53C2\u6570 |
| :--- | :--- | :--- |
| change | \u5F53\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6 | \u66F4\u65B0\u540E\u7684\u503C |`,"el-checkbox-group":`[element\uFF1A${m}/#/zh-CN/component/checkbox](${m}/#/zh-CN/component/checkbox) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| size | \u591A\u9009\u6846\u7EC4\u5C3A\u5BF8\uFF0C\u4EC5\u5BF9\u6309\u94AE\u5F62\u5F0F\u7684 Checkbox \u6216\u5E26\u6709\u8FB9\u6846\u7684 Checkbox \u6709\u6548 | string | medium / small / mini | \u2014 |
| disabled | \u662F\u5426\u7981\u7528 | boolean | \u2014 | false |
| min | \u53EF\u88AB\u52FE\u9009\u7684 checkbox \u7684\u6700\u5C0F\u6570\u91CF | number | \u2014 | \u2014 |
| max | \u53EF\u88AB\u52FE\u9009\u7684 checkbox \u7684\u6700\u5927\u6570\u91CF | number | \u2014 | \u2014 |
| text-color | \u6309\u94AE\u5F62\u5F0F\u7684 Checkbox \u6FC0\u6D3B\u65F6\u7684\u6587\u672C\u989C\u8272 | string | \u2014 | #ffffff |
| fill | \u6309\u94AE\u5F62\u5F0F\u7684 Checkbox \u6FC0\u6D3B\u65F6\u7684\u586B\u5145\u8272\u548C\u8FB9\u6846\u8272 | string | \u2014 | #409EFF |

| \u4E8B\u4EF6\u540D\u79F0 | \u8BF4\u660E | \u56DE\u8C03\u53C2\u6570 |
| :--- | :--- | :--- |
| change | \u5F53\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6 | \u66F4\u65B0\u540E\u7684\u503C |`,"el-checkbox-button":`[element\uFF1A${m}/#/zh-CN/component/checkbox](${m}/#/zh-CN/component/checkbox) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| label | \u9009\u4E2D\u72B6\u6001\u7684\u503C\uFF08\u53EA\u6709\u5728checkbox-group\u6216\u8005\u7ED1\u5B9A\u5BF9\u8C61\u7C7B\u578B\u4E3Aarray\u65F6\u6709\u6548\uFF09 | string / number / boolean | \u2014 | \u2014 |
| true-label | \u9009\u4E2D\u65F6\u7684\u503C | string / number | \u2014 | \u2014 |
| false-label | \u6CA1\u6709\u9009\u4E2D\u65F6\u7684\u503C | string / number | \u2014 | \u2014 |
| disabled | \u662F\u5426\u7981\u7528 | boolean | \u2014 | false |
| name | \u539F\u751F name \u5C5E\u6027 | string | \u2014 | \u2014 |
| checked | \u5F53\u524D\u662F\u5426\u52FE\u9009 | boolean | \u2014 | false |`,"el-input":`[element\uFF1A${m}/#/zh-CN/component/input](${m}/#/zh-CN/component/input) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| type | \u7C7B\u578B | string | text\uFF0Ctextarea \u548C\u5176\u4ED6 \u539F\u751F input \u7684 type \u503C | text |
| value | \u7ED1\u5B9A\u503C | string / number | \u2014 | \u2014 |
| maxlength | \u539F\u751F\u5C5E\u6027\uFF0C\u6700\u5927\u8F93\u5165\u957F\u5EA6 | number | \u2014 | \u2014 |
| minlength | \u539F\u751F\u5C5E\u6027\uFF0C\u6700\u5C0F\u8F93\u5165\u957F\u5EA6 | number | \u2014 | \u2014 |
| placeholder | \u8F93\u5165\u6846\u5360\u4F4D\u6587\u672C | string | \u2014 | \u2014 |
| clearable | \u662F\u5426\u53EF\u6E05\u7A7A | boolean | \u2014 | false |
| disabled | \u7981\u7528 | boolean | \u2014 | false |
| size | \u8F93\u5165\u6846\u5C3A\u5BF8\uFF0C\u53EA\u5728 type!="textarea" \u65F6\u6709\u6548 | string | medium / small / mini | \u2014 |
| prefix-icon | \u8F93\u5165\u6846\u5934\u90E8\u56FE\u6807 | string | \u2014 | \u2014 |
| suffix-icon | \u8F93\u5165\u6846\u5C3E\u90E8\u56FE\u6807 | string | \u2014 | \u2014 |
| rows | \u8F93\u5165\u6846\u884C\u6570\uFF0C\u53EA\u5BF9 type="textarea" \u6709\u6548 | number | \u2014 | 2 |
| autosize | \u81EA\u9002\u5E94\u5185\u5BB9\u9AD8\u5EA6\uFF0C\u53EA\u5BF9 type="textarea" \u6709\u6548\uFF0C\u53EF\u4F20\u5165\u5BF9\u8C61\uFF0C\u5982\uFF0C{ minRows: 2, maxRows: 6 } | boolean / object | \u2014 | false |
| autocomplete | \u539F\u751F\u5C5E\u6027\uFF0C\u81EA\u52A8\u8865\u5168 | string | on, off | off |
| auto-complete | \u4E0B\u4E2A\u4E3B\u7248\u672C\u5F03\u7528 | string | on, off | off |
| name | \u539F\u751F\u5C5E\u6027 | string | \u2014 | \u2014 |
| readonly | \u539F\u751F\u5C5E\u6027\uFF0C\u662F\u5426\u53EA\u8BFB | boolean | \u2014 | false |
| max | \u539F\u751F\u5C5E\u6027\uFF0C\u8BBE\u7F6E\u6700\u5927\u503C | \u2014 | \u2014 | \u2014 |
| min | \u539F\u751F\u5C5E\u6027\uFF0C\u8BBE\u7F6E\u6700\u5C0F\u503C | \u2014 | \u2014 | \u2014 |
| step | \u539F\u751F\u5C5E\u6027\uFF0C\u8BBE\u7F6E\u8F93\u5165\u5B57\u6BB5\u7684\u5408\u6CD5\u6570\u5B57\u95F4\u9694 | \u2014 | \u2014 | \u2014 |
| resize | \u63A7\u5236\u662F\u5426\u80FD\u88AB\u7528\u6237\u7F29\u653E | string | none, both, horizontal, vertical | \u2014 |
| autofocus | \u539F\u751F\u5C5E\u6027\uFF0C\u81EA\u52A8\u83B7\u53D6\u7126\u70B9 | boolean | true, false | false |
| form | \u539F\u751F\u5C5E\u6027 | string | \u2014 | \u2014 |
| label | \u8F93\u5165\u6846\u5173\u8054\u7684label\u6587\u5B57 | string | \u2014 | \u2014 |
| tabindex | \u8F93\u5165\u6846\u7684tabindex | string | - | - |

| name | \u8BF4\u660E |
| :--- | :--- |
| prefix | \u8F93\u5165\u6846\u5934\u90E8\u5185\u5BB9\uFF0C\u53EA\u5BF9 type="text" \u6709\u6548 |
| suffix | \u8F93\u5165\u6846\u5C3E\u90E8\u5185\u5BB9\uFF0C\u53EA\u5BF9 type="text" \u6709\u6548 |
| prepend | \u8F93\u5165\u6846\u524D\u7F6E\u5185\u5BB9\uFF0C\u53EA\u5BF9 type="text" \u6709\u6548 |
| append | \u8F93\u5165\u6846\u540E\u7F6E\u5185\u5BB9\uFF0C\u53EA\u5BF9 type="text" \u6709\u6548 |

| \u4E8B\u4EF6\u540D\u79F0 | \u8BF4\u660E | \u56DE\u8C03\u53C2\u6570 |
| :--- | :--- | :--- |
| blur | \u5728 Input \u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1 | (event: Event) |
| focus | \u5728 Input \u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1 | (event: Event) |
| change | \u5728 Input \u503C\u6539\u53D8\u65F6\u89E6\u53D1 | (value: string | number) |
| clear | \u5728\u70B9\u51FB\u7531 clearable \u5C5E\u6027\u751F\u6210\u7684\u6E05\u7A7A\u6309\u94AE\u65F6\u89E6\u53D1 | \u2014 |

| \u65B9\u6CD5\u540D | \u8BF4\u660E | \u53C2\u6570 |
| :--- | :--- | :--- |
| focus | \u4F7F input \u83B7\u53D6\u7126\u70B9 | \u2014 |
| blur | \u4F7F input \u5931\u53BB\u7126\u70B9 | \u2014 |
| select | \u9009\u4E2D input \u4E2D\u7684\u6587\u5B57 | \u2014 |`,"el-autocomplete":`[element\uFF1A${m}/#/zh-CN/component/input](${m}/#/zh-CN/component/input) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| placeholder | \u8F93\u5165\u6846\u5360\u4F4D\u6587\u672C | string | \u2014 | \u2014 |
| disabled | \u7981\u7528 | boolean | \u2014 | false |
| value-key | \u8F93\u5165\u5EFA\u8BAE\u5BF9\u8C61\u4E2D\u7528\u4E8E\u663E\u793A\u7684\u952E\u540D | string | \u2014 | value |
| value | \u5FC5\u586B\u503C\uFF0C\u8F93\u5165\u7ED1\u5B9A\u503C | string | \u2014 | \u2014 |
| debounce | \u83B7\u53D6\u8F93\u5165\u5EFA\u8BAE\u7684\u53BB\u6296\u5EF6\u65F6 | number | \u2014 | 300 |
| placement | \u83DC\u5355\u5F39\u51FA\u4F4D\u7F6E | string | top / top-start / top-end / bottom / bottom-start / bottom-end | bottom-start |
| fetch-suggestions | \u8FD4\u56DE\u8F93\u5165\u5EFA\u8BAE\u7684\u65B9\u6CD5\uFF0C\u4EC5\u5F53\u4F60\u7684\u8F93\u5165\u5EFA\u8BAE\u6570\u636E resolve \u65F6\uFF0C\u901A\u8FC7\u8C03\u7528 callback(data:[]) \u6765\u8FD4\u56DE\u5B83 | Function(queryString, callback) | \u2014 | \u2014 |
| popper-class | Autocomplete \u4E0B\u62C9\u5217\u8868\u7684\u7C7B\u540D | string | \u2014 | \u2014 |
| trigger-on-focus | \u662F\u5426\u5728\u8F93\u5165\u6846 focus \u65F6\u663E\u793A\u5EFA\u8BAE\u5217\u8868 | boolean | \u2014 | true |
| name | \u539F\u751F\u5C5E\u6027 | string | \u2014 | \u2014 |
| select-when-unmatched | \u5728\u8F93\u5165\u6CA1\u6709\u4EFB\u4F55\u5339\u914D\u5EFA\u8BAE\u7684\u60C5\u51B5\u4E0B\uFF0C\u6309\u4E0B\u56DE\u8F66\u662F\u5426\u89E6\u53D1 select \u4E8B\u4EF6 | boolean | \u2014 | false |
| label | \u8F93\u5165\u6846\u5173\u8054\u7684label\u6587\u5B57 | string | \u2014 | \u2014 |
| prefix-icon | \u8F93\u5165\u6846\u5934\u90E8\u56FE\u6807 | string | \u2014 | \u2014 |
| suffix-icon | \u8F93\u5165\u6846\u5C3E\u90E8\u56FE\u6807 | string | \u2014 | \u2014 |
| hide-loading | \u662F\u5426\u9690\u85CF\u8FDC\u7A0B\u52A0\u8F7D\u65F6\u7684\u52A0\u8F7D\u56FE\u6807 | boolean | \u2014 | false |
| popper-append-to-body | \u662F\u5426\u5C06\u4E0B\u62C9\u5217\u8868\u63D2\u5165\u81F3 body \u5143\u7D20\u3002\u5728\u4E0B\u62C9\u5217\u8868\u7684\u5B9A\u4F4D\u51FA\u73B0\u95EE\u9898\u65F6\uFF0C\u53EF\u5C06\u8BE5\u5C5E\u6027\u8BBE\u7F6E\u4E3A false | boolean | - | true |

| name | \u8BF4\u660E |
| :--- | :--- |
| prefix | \u8F93\u5165\u6846\u5934\u90E8\u5185\u5BB9 |
| suffix | \u8F93\u5165\u6846\u5C3E\u90E8\u5185\u5BB9 |
| prepend | \u8F93\u5165\u6846\u524D\u7F6E\u5185\u5BB9 |
| append | \u8F93\u5165\u6846\u540E\u7F6E\u5185\u5BB9 |

| name | \u8BF4\u660E |
| :--- | :--- |
| \u2014 | \u81EA\u5B9A\u4E49\u8F93\u5165\u5EFA\u8BAE\uFF0C\u53C2\u6570\u4E3A { item } |

| \u4E8B\u4EF6\u540D\u79F0 | \u8BF4\u660E | \u56DE\u8C03\u53C2\u6570 |
| :--- | :--- | :--- |
| select | \u70B9\u51FB\u9009\u4E2D\u5EFA\u8BAE\u9879\u65F6\u89E6\u53D1 | \u9009\u4E2D\u5EFA\u8BAE\u9879 |

| \u65B9\u6CD5\u540D | \u8BF4\u660E | \u53C2\u6570 |
| :--- | :--- | :--- |
| focus | \u4F7F input \u83B7\u53D6\u7126\u70B9 | - |`,"el-input-number":`[element\uFF1A${m}/#/zh-CN/component/input-number](${m}/#/zh-CN/component/input-number) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| value | \u7ED1\u5B9A\u503C | number | \u2014 | \u2014 |
| min | \u8BBE\u7F6E\u8BA1\u6570\u5668\u5141\u8BB8\u7684\u6700\u5C0F\u503C | number | \u2014 | -Infinity |
| max | \u8BBE\u7F6E\u8BA1\u6570\u5668\u5141\u8BB8\u7684\u6700\u5927\u503C | number | \u2014 | Infinity |
| step | \u8BA1\u6570\u5668\u6B65\u957F | number | \u2014 | 1 |
| precision | \u6570\u503C\u7CBE\u5EA6 | number | \u2014 | \u2014 |
| size | \u8BA1\u6570\u5668\u5C3A\u5BF8 | string | large, small | \u2014 |
| disabled | \u662F\u5426\u7981\u7528\u8BA1\u6570\u5668 | boolean | \u2014 | false |
| controls | \u662F\u5426\u4F7F\u7528\u63A7\u5236\u6309\u94AE | boolean | \u2014 | true |
| controls-position | \u63A7\u5236\u6309\u94AE\u4F4D\u7F6E | string | right | - |
| name | \u539F\u751F\u5C5E\u6027 | string | \u2014 | \u2014 |
| label | \u8F93\u5165\u6846\u5173\u8054\u7684label\u6587\u5B57 | string | \u2014 | \u2014 |

| \u4E8B\u4EF6\u540D\u79F0 | \u8BF4\u660E | \u56DE\u8C03\u53C2\u6570 |
| :--- | :--- | :--- |
| change | \u7ED1\u5B9A\u503C\u88AB\u6539\u53D8\u65F6\u89E6\u53D1 | \u6700\u540E\u53D8\u66F4\u7684\u503C |
| blur | \u5728\u7EC4\u4EF6 Input \u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1 | (event: Event) |
| focus | \u5728\u7EC4\u4EF6 Input \u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1 | (event: Event)

| \u65B9\u6CD5\u540D | \u8BF4\u660E | \u53C2\u6570 |
| :--- | :--- | :--- |
| focus | \u4F7F input \u83B7\u53D6\u7126\u70B9 | - |`,"el-select":`[element\uFF1A${m}/#/zh-CN/component/select](${m}/#/zh-CN/component/select) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| multiple | \u662F\u5426\u591A\u9009 | boolean | \u2014 | false |
| disabled | \u662F\u5426\u7981\u7528 | boolean | \u2014 | false |
| value-key | \u4F5C\u4E3A value \u552F\u4E00\u6807\u8BC6\u7684\u952E\u540D\uFF0C\u7ED1\u5B9A\u503C\u4E3A\u5BF9\u8C61\u7C7B\u578B\u65F6\u5FC5\u586B | string | \u2014 | value |
| size | \u8F93\u5165\u6846\u5C3A\u5BF8 | string | medium/small/mini | \u2014 |
| clearable | \u5355\u9009\u65F6\u662F\u5426\u53EF\u4EE5\u6E05\u7A7A\u9009\u9879 | boolean | \u2014 | false |
| collapse-tags | \u591A\u9009\u65F6\u662F\u5426\u5C06\u9009\u4E2D\u503C\u6309\u6587\u5B57\u7684\u5F62\u5F0F\u5C55\u793A | boolean | \u2014 | false |
| multiple-limit | \u591A\u9009\u65F6\u7528\u6237\u6700\u591A\u53EF\u4EE5\u9009\u62E9\u7684\u9879\u76EE\u6570\uFF0C\u4E3A 0 \u5219\u4E0D\u9650\u5236 | number | \u2014 | 0 |
| name | select input \u7684 name \u5C5E\u6027 | string | \u2014 | \u2014 |
| autocomplete | select input \u7684 autocomplete \u5C5E\u6027 | string | \u2014 | off |
| auto-complete | \u4E0B\u4E2A\u4E3B\u7248\u672C\u5F03\u7528 | string | \u2014 | off |
| placeholder | \u5360\u4F4D\u7B26 | string | \u2014 | \u8BF7\u9009\u62E9 |
| filterable | \u662F\u5426\u53EF\u641C\u7D22 | boolean | \u2014 | false |
| allow-create | \u662F\u5426\u5141\u8BB8\u7528\u6237\u521B\u5EFA\u65B0\u6761\u76EE\uFF0C\u9700\u914D\u5408 filterable \u4F7F\u7528 | boolean | \u2014 | false |
| filter-method | \u81EA\u5B9A\u4E49\u641C\u7D22\u65B9\u6CD5 | function | \u2014 | \u2014 |
| remote | \u662F\u5426\u4E3A\u8FDC\u7A0B\u641C\u7D22 | boolean | \u2014 | false |
| remote-method | \u8FDC\u7A0B\u641C\u7D22\u65B9\u6CD5 | function | \u2014 | \u2014 |
| loading | \u662F\u5426\u6B63\u5728\u4ECE\u8FDC\u7A0B\u83B7\u53D6\u6570\u636E | boolean | \u2014 | false |
| loading-text | \u8FDC\u7A0B\u52A0\u8F7D\u65F6\u663E\u793A\u7684\u6587\u5B57 | string | \u2014 | \u52A0\u8F7D\u4E2D |
| no-match-text | \u641C\u7D22\u6761\u4EF6\u65E0\u5339\u914D\u65F6\u663E\u793A\u7684\u6587\u5B57 | string | \u2014 | \u65E0\u5339\u914D\u6570\u636E |
| no-data-text | \u9009\u9879\u4E3A\u7A7A\u65F6\u663E\u793A\u7684\u6587\u5B57 | string | \u2014 | \u65E0\u6570\u636E |
| popper-class | Select \u4E0B\u62C9\u6846\u7684\u7C7B\u540D | string | \u2014 | \u2014 |
| reserve-keyword | \u591A\u9009\u4E14\u53EF\u641C\u7D22\u65F6\uFF0C\u662F\u5426\u5728\u9009\u4E2D\u4E00\u4E2A\u9009\u9879\u540E\u4FDD\u7559\u5F53\u524D\u7684\u641C\u7D22\u5173\u952E\u8BCD | boolean | \u2014 | false |
| default-first-option | \u5728\u8F93\u5165\u6846\u6309\u4E0B\u56DE\u8F66\uFF0C\u9009\u62E9\u7B2C\u4E00\u4E2A\u5339\u914D\u9879\u3002\u9700\u914D\u5408 filterable \u6216 remote \u4F7F\u7528 | boolean | - | false |
| popper-append-to-body | \u662F\u5426\u5C06\u5F39\u51FA\u6846\u63D2\u5165\u81F3 body \u5143\u7D20\u3002\u5728\u5F39\u51FA\u6846\u7684\u5B9A\u4F4D\u51FA\u73B0\u95EE\u9898\u65F6\uFF0C\u53EF\u5C06\u8BE5\u5C5E\u6027\u8BBE\u7F6E\u4E3A false | boolean | - | true |
| automatic-dropdown | \u5BF9\u4E8E\u4E0D\u53EF\u641C\u7D22\u7684 Select\uFF0C\u662F\u5426\u5728\u8F93\u5165\u6846\u83B7\u5F97\u7126\u70B9\u540E\u81EA\u52A8\u5F39\u51FA\u9009\u9879\u83DC\u5355 | boolean | - | false |

| \u4E8B\u4EF6\u540D\u79F0 | \u8BF4\u660E | \u56DE\u8C03\u53C2\u6570 |
| :--- | :--- | :--- |
| change | \u9009\u4E2D\u503C\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1 | \u76EE\u524D\u7684\u9009\u4E2D\u503C |
| visible-change | \u4E0B\u62C9\u6846\u51FA\u73B0/\u9690\u85CF\u65F6\u89E6\u53D1 | \u51FA\u73B0\u5219\u4E3A true\uFF0C\u9690\u85CF\u5219\u4E3A false |
| remove-tag | \u591A\u9009\u6A21\u5F0F\u4E0B\u79FB\u9664tag\u65F6\u89E6\u53D1 | \u79FB\u9664\u7684tag\u503C |
| clear | \u53EF\u6E05\u7A7A\u7684\u5355\u9009\u6A21\u5F0F\u4E0B\u7528\u6237\u70B9\u51FB\u6E05\u7A7A\u6309\u94AE\u65F6\u89E6\u53D1 | \u2014 |
| blur | \u5F53 input \u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1 | (event: Event) |
| focus | \u5F53 input \u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1 | (event: Event) |

| name | \u8BF4\u660E |
| :--- | :--- |
| \u2014 | Option \u7EC4\u4EF6\u5217\u8868 |
| prefix | Select \u7EC4\u4EF6\u5934\u90E8\u5185\u5BB9 |`,"el-option-group":`[element\uFF1A${m}/#/zh-CN/component/select](${m}/#/zh-CN/component/select) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| label | \u5206\u7EC4\u7684\u7EC4\u540D | string | \u2014 | \u2014 |
| disabled | \u662F\u5426\u5C06\u8BE5\u5206\u7EC4\u4E0B\u6240\u6709\u9009\u9879\u7F6E\u4E3A\u7981\u7528 | boolean | \u2014 | false |`,"el-option":`[element\uFF1A${m}/#/zh-CN/component/select](${m}/#/zh-CN/component/select) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| value | \u9009\u9879\u7684\u503C | string/number/object | \u2014 | \u2014 |
| label | \u9009\u9879\u7684\u6807\u7B7E\uFF0C\u82E5\u4E0D\u8BBE\u7F6E\u5219\u9ED8\u8BA4\u4E0E value \u76F8\u540C | string/number | \u2014 | \u2014 |
| disabled | \u662F\u5426\u7981\u7528\u8BE5\u9009\u9879 | boolean | \u2014 | false |`,"el-cascader":`[element\uFF1A${m}/#/zh-CN/component/cascader](${m}/#/zh-CN/component/cascader) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| options | \u53EF\u9009\u9879\u6570\u636E\u6E90\uFF0C\u952E\u540D\u53EF\u901A\u8FC7 props \u5C5E\u6027\u914D\u7F6E | array | \u2014 | \u2014 |
| props | \u914D\u7F6E\u9009\u9879\uFF0C\u5177\u4F53\u89C1\u4E0B\u8868 | object | \u2014 | \u2014 |
| value | \u9009\u4E2D\u9879\u7ED1\u5B9A\u503C | array | \u2014 | \u2014 |
| separator | \u9009\u9879\u5206\u9694\u7B26 | string | \u2014 | \u659C\u6760'/' |
| popper-class | \u81EA\u5B9A\u4E49\u6D6E\u5C42\u7C7B\u540D | string | \u2014 | \u2014 |
| placeholder | \u8F93\u5165\u6846\u5360\u4F4D\u6587\u672C | string | \u2014 | \u8BF7\u9009\u62E9 |
| disabled | \u662F\u5426\u7981\u7528 | boolean | \u2014 | false |
| clearable | \u662F\u5426\u652F\u6301\u6E05\u7A7A\u9009\u9879 | boolean | \u2014 | false |
| expand-trigger | \u6B21\u7EA7\u83DC\u5355\u7684\u5C55\u5F00\u65B9\u5F0F | string | click / hover | click |
| show-all-levels | \u8F93\u5165\u6846\u4E2D\u662F\u5426\u663E\u793A\u9009\u4E2D\u503C\u7684\u5B8C\u6574\u8DEF\u5F84 | boolean | \u2014 | true |
| filterable | \u662F\u5426\u53EF\u641C\u7D22\u9009\u9879 | boolean | \u2014 | \u2014 |
| debounce | \u641C\u7D22\u5173\u952E\u8BCD\u8F93\u5165\u7684\u53BB\u6296\u5EF6\u8FDF\uFF0C\u6BEB\u79D2 | number | \u2014 | 300 |
| change-on-select | \u662F\u5426\u5141\u8BB8\u9009\u62E9\u4EFB\u610F\u4E00\u7EA7\u7684\u9009\u9879 | boolean | \u2014 | false |
| size | \u5C3A\u5BF8 | string | medium / small / mini | \u2014 |
| before-filter | \u7B5B\u9009\u4E4B\u524D\u7684\u94A9\u5B50\uFF0C\u53C2\u6570\u4E3A\u8F93\u5165\u7684\u503C\uFF0C\u82E5\u8FD4\u56DE false \u6216\u8005\u8FD4\u56DE Promise \u4E14\u88AB reject\uFF0C\u5219\u505C\u6B62\u7B5B\u9009 | function(value) | \u2014 | \u2014 |

| \u4E8B\u4EF6\u540D\u79F0 | \u8BF4\u660E | \u56DE\u8C03\u53C2\u6570 |
| :--- | :--- | :--- |
| change | \u5F53\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6 | \u5F53\u524D\u503C |
| active-item-change | \u5F53\u7236\u7EA7\u9009\u9879\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6\uFF0C\u4EC5\u5728 change-on-select \u4E3A false \u65F6\u53EF\u7528 | \u5404\u7236\u7EA7\u9009\u9879\u7EC4\u6210\u7684\u6570\u7EC4 |
| blur | \u5728 Cascader \u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1 | (event: Event) |
| focus | \u5728 Cascader \u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1 | (event: Event) |`,"el-switch":`[element\uFF1A${m}/#/zh-CN/component/switch](${m}/#/zh-CN/component/switch) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| disabled | \u662F\u5426\u7981\u7528 | boolean | \u2014 | false |
| width | switch \u7684\u5BBD\u5EA6\uFF08\u50CF\u7D20\uFF09 | number | \u2014 | 40 |
| active-icon-class | switch \u6253\u5F00\u65F6\u6240\u663E\u793A\u56FE\u6807\u7684\u7C7B\u540D\uFF0C\u8BBE\u7F6E\u6B64\u9879\u4F1A\u5FFD\u7565 active-text | string | \u2014 | \u2014 |
| inactive-icon-class | switch \u5173\u95ED\u65F6\u6240\u663E\u793A\u56FE\u6807\u7684\u7C7B\u540D\uFF0C\u8BBE\u7F6E\u6B64\u9879\u4F1A\u5FFD\u7565 inactive-text | string | \u2014 | \u2014 |
| active-text | switch \u6253\u5F00\u65F6\u7684\u6587\u5B57\u63CF\u8FF0 | string | \u2014 | \u2014 |
| inactive-text | switch \u5173\u95ED\u65F6\u7684\u6587\u5B57\u63CF\u8FF0 | string | \u2014 | \u2014 |
| active-value | switch \u6253\u5F00\u65F6\u7684\u503C | boolean / string / number | \u2014 | true |
| inactive-value | switch \u5173\u95ED\u65F6\u7684\u503C | boolean / string / number | \u2014 | false |
| active-color | switch \u6253\u5F00\u65F6\u7684\u80CC\u666F\u8272 | string | \u2014 | #409EFF |
| inactive-color | switch \u5173\u95ED\u65F6\u7684\u80CC\u666F\u8272 | string | \u2014 | #C0CCDA |
| name | switch \u5BF9\u5E94\u7684 name \u5C5E\u6027 | string | \u2014 | \u2014 |

| \u4E8B\u4EF6\u540D\u79F0 | \u8BF4\u660E | \u56DE\u8C03\u53C2\u6570 |
| :--- | :--- | :--- |
| change | switch \u72B6\u6001\u53D1\u751F\u53D8\u5316\u65F6\u7684\u56DE\u8C03\u51FD\u6570 | \u65B0\u72B6\u6001\u7684\u503C |

| \u65B9\u6CD5\u540D | \u8BF4\u660E | \u53C2\u6570 |
| :--- | :--- | :--- |
| focus | \u4F7F Switch \u83B7\u53D6\u7126\u70B9 | - |`,"el-slider":`[element\uFF1A${m}/#/zh-CN/component/slider](${m}/#/zh-CN/component/slider) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| min | \u6700\u5C0F\u503C | number | \u2014 | 0 |
| max | \u6700\u5927\u503C | number | \u2014 | 100 |
| disabled | \u662F\u5426\u7981\u7528 | boolean | \u2014 | false |
| step | \u6B65\u957F | number | \u2014 | 1 |
| show-input | \u662F\u5426\u663E\u793A\u8F93\u5165\u6846\uFF0C\u4EC5\u5728\u975E\u8303\u56F4\u9009\u62E9\u65F6\u6709\u6548 | boolean | \u2014 | false |
| show-input-controls | \u5728\u663E\u793A\u8F93\u5165\u6846\u7684\u60C5\u51B5\u4E0B\uFF0C\u662F\u5426\u663E\u793A\u8F93\u5165\u6846\u7684\u63A7\u5236\u6309\u94AE | boolean | \u2014 | true |
| input-size | \u8F93\u5165\u6846\u7684\u5C3A\u5BF8 | string | large / medium / small / mini | small |
| show-stops | \u662F\u5426\u663E\u793A\u95F4\u65AD\u70B9 | boolean | \u2014 | false |
| show-tooltip | \u662F\u5426\u663E\u793A tooltip | boolean | \u2014 | true |
| format-tooltip | \u683C\u5F0F\u5316 tooltip message | function(value) | \u2014 | \u2014 |
| range | \u662F\u5426\u4E3A\u8303\u56F4\u9009\u62E9 | boolean | \u2014 | false |
| vertical | \u662F\u5426\u7AD6\u5411\u6A21\u5F0F | boolean | \u2014 | false |
| height | Slider \u9AD8\u5EA6\uFF0C\u7AD6\u5411\u6A21\u5F0F\u65F6\u5FC5\u586B | string | \u2014 | \u2014 |
| label | \u5C4F\u5E55\u9605\u8BFB\u5668\u6807\u7B7E | string | \u2014 | \u2014 |
| debounce | \u8F93\u5165\u65F6\u7684\u53BB\u6296\u5EF6\u8FDF\uFF0C\u6BEB\u79D2\uFF0C\u4EC5\u5728show-input\u7B49\u4E8Etrue\u65F6\u6709\u6548 | number | \u2014 | 300 |
| tooltip-class | tooltip \u7684\u81EA\u5B9A\u4E49\u7C7B\u540D | string | \u2014 | \u2014 |

| \u4E8B\u4EF6\u540D\u79F0 | \u8BF4\u660E | \u56DE\u8C03\u53C2\u6570 |
| :--- | :--- | :--- |
| change | \u503C\u6539\u53D8\u65F6\u89E6\u53D1\uFF08\u4F7F\u7528\u9F20\u6807\u62D6\u66F3\u65F6\uFF0C\u53EA\u5728\u677E\u5F00\u9F20\u6807\u540E\u89E6\u53D1\uFF09 | \u6539\u53D8\u540E\u7684\u503C |`,"el-time-picker":`[element\uFF1A${m}/#/zh-CN/component/time-picker](${m}/#/zh-CN/component/time-picker) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| readonly | \u5B8C\u5168\u53EA\u8BFB | boolean | \u2014 | false |
| disabled | \u7981\u7528 | boolean | \u2014 | false |
| editable | \u6587\u672C\u6846\u53EF\u8F93\u5165 | boolean | \u2014 | true |
| clearable | \u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE | boolean | \u2014 | true |
| size | \u8F93\u5165\u6846\u5C3A\u5BF8 | string | medium / small / mini | \u2014 |
| placeholder | \u975E\u8303\u56F4\u9009\u62E9\u65F6\u7684\u5360\u4F4D\u5185\u5BB9 | string | \u2014 | \u2014 |
| start-placeholder | \u8303\u56F4\u9009\u62E9\u65F6\u5F00\u59CB\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9 | string | \u2014 | \u2014 |
| end-placeholder | \u8303\u56F4\u9009\u62E9\u65F6\u5F00\u59CB\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9 | string | \u2014 | \u2014 |
| is-range | \u662F\u5426\u4E3A\u65F6\u95F4\u8303\u56F4\u9009\u62E9\uFF0C\u4EC5\u5BF9<el-time-picker>\u6709\u6548 | boolean | \u2014 | false |
| arrow-control | \u662F\u5426\u4F7F\u7528\u7BAD\u5934\u8FDB\u884C\u65F6\u95F4\u9009\u62E9\uFF0C\u4EC5\u5BF9<el-time-picker>\u6709\u6548 | boolean | \u2014 | false |
| value | \u7ED1\u5B9A\u503C | date(TimePicker) / string(TimeSelect) | \u2014 | \u2014 |
| align | \u5BF9\u9F50\u65B9\u5F0F | string | left / center / right | left |
| popper-class | TimePicker \u4E0B\u62C9\u6846\u7684\u7C7B\u540D | string | \u2014 | \u2014 |
| picker-options | \u5F53\u524D\u65F6\u95F4\u65E5\u671F\u9009\u62E9\u5668\u7279\u6709\u7684\u9009\u9879\u53C2\u8003\u4E0B\u8868 | object | \u2014 | {} |
| range-separator | \u9009\u62E9\u8303\u56F4\u65F6\u7684\u5206\u9694\u7B26 | string | - | '-' |
| value-format | \u53EF\u9009\uFF0C\u4EC5TimePicker\u65F6\u53EF\u7528\uFF0C\u7ED1\u5B9A\u503C\u7684\u683C\u5F0F\u3002\u4E0D\u6307\u5B9A\u5219\u7ED1\u5B9A\u503C\u4E3A Date \u5BF9\u8C61 | string | \u89C1\u65E5\u671F\u683C\u5F0F | \u2014 |
| default-value | \u53EF\u9009\uFF0C\u9009\u62E9\u5668\u6253\u5F00\u65F6\u9ED8\u8BA4\u663E\u793A\u7684\u65F6\u95F4 | Date(TimePicker) / string(TimeSelect) | \u53EF\u88ABnew Date()\u89E3\u6790(TimePicker) / \u53EF\u9009\u503C(TimeSelect) | \u2014 |
| name | \u539F\u751F\u5C5E\u6027 | string | \u2014 | \u2014 |
| prefix-icon | \u81EA\u5B9A\u4E49\u5934\u90E8\u56FE\u6807\u7684\u7C7B\u540D | string | \u2014 | el-icon-time |
| clear-icon | \u81EA\u5B9A\u4E49\u6E05\u7A7A\u56FE\u6807\u7684\u7C7B\u540D | string | \u2014 | el-icon-circle-close |

| \u4E8B\u4EF6\u540D | \u8BF4\u660E | \u53C2\u6570 |
| :--- | :--- | :--- |
| change | \u7528\u6237\u786E\u8BA4\u9009\u5B9A\u7684\u503C\u65F6\u89E6\u53D1 | \u7EC4\u4EF6\u7ED1\u5B9A\u503C |
| blur | \u5F53 input \u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1 | \u7EC4\u4EF6\u5B9E\u4F8B |
| focus | \u5F53 input \u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1 | \u7EC4\u4EF6\u5B9E\u4F8B |

| \u65B9\u6CD5\u540D | \u8BF4\u660E | \u53C2\u6570 |
| :--- | :--- | :--- |
| focus | \u4F7F input \u83B7\u53D6\u7126\u70B9 | - |`,"el-date-picker":`[element\uFF1A${m}/#/zh-CN/component/date-picker](${m}/#/zh-CN/component/date-picker) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| readonly | \u5B8C\u5168\u53EA\u8BFB | boolean | \u2014 | false |
| disabled | \u7981\u7528 | boolean | \u2014 | false |
| editable | \u6587\u672C\u6846\u53EF\u8F93\u5165 | boolean | \u2014 | true |
| clearable | \u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE | boolean | \u2014 | true |
| size | \u8F93\u5165\u6846\u5C3A\u5BF8 | string | large, small, mini | \u2014 |
| placeholder | \u975E\u8303\u56F4\u9009\u62E9\u65F6\u7684\u5360\u4F4D\u5185\u5BB9 | string | \u2014 | \u2014 |
| start-placeholder | \u8303\u56F4\u9009\u62E9\u65F6\u5F00\u59CB\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9 | string | \u2014 | \u2014 |
| end-placeholder | \u8303\u56F4\u9009\u62E9\u65F6\u7ED3\u675F\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9 | string | \u2014 | \u2014 |
| type | \u663E\u793A\u7C7B\u578B | string | year/month/date/dates/ week/datetime/datetimerange/daterange | date |
| format | \u663E\u793A\u5728\u8F93\u5165\u6846\u4E2D\u7684\u683C\u5F0F | string | \u89C1\u65E5\u671F\u683C\u5F0F | yyyy-MM-dd |
| align | \u5BF9\u9F50\u65B9\u5F0F | string | left, center, right | left |
| popper-class | DatePicker \u4E0B\u62C9\u6846\u7684\u7C7B\u540D | string | \u2014 | \u2014 |
| picker-options | \u5F53\u524D\u65F6\u95F4\u65E5\u671F\u9009\u62E9\u5668\u7279\u6709\u7684\u9009\u9879\u53C2\u8003\u4E0B\u8868 | object | \u2014 | {} |
| range-separator | \u9009\u62E9\u8303\u56F4\u65F6\u7684\u5206\u9694\u7B26 | string | \u2014 | '-' |
| default-value | \u53EF\u9009\uFF0C\u9009\u62E9\u5668\u6253\u5F00\u65F6\u9ED8\u8BA4\u663E\u793A\u7684\u65F6\u95F4 | Date | \u53EF\u88ABnew Date()\u89E3\u6790 | \u2014 |
| default-time | \u8303\u56F4\u9009\u62E9\u65F6\u9009\u4E2D\u65E5\u671F\u6240\u4F7F\u7528\u7684\u5F53\u65E5\u5185\u5177\u4F53\u65F6\u523B | string[] | \u6570\u7EC4\uFF0C\u957F\u5EA6\u4E3A 2\uFF0C\u6BCF\u9879\u503C\u4E3A\u5B57\u7B26\u4E32\uFF0C\u5F62\u598212:00:00\uFF0C\u7B2C\u4E00\u9879\u6307\u5B9A\u5F00\u59CB\u65E5\u671F\u7684\u65F6\u523B\uFF0C\u7B2C\u4E8C\u9879\u6307\u5B9A\u7ED3\u675F\u65E5\u671F\u7684\u65F6\u523B\uFF0C\u4E0D\u6307\u5B9A\u4F1A\u4F7F\u7528\u65F6\u523B 00:00:00 | \u2014 |
| value-format | \u53EF\u9009\uFF0C\u7ED1\u5B9A\u503C\u7684\u683C\u5F0F\u3002\u4E0D\u6307\u5B9A\u5219\u7ED1\u5B9A\u503C\u4E3A Date \u5BF9\u8C61 | string | \u89C1\u65E5\u671F\u683C\u5F0F | \u2014 |
| name | \u539F\u751F\u5C5E\u6027 | string | \u2014 | \u2014 |
| unlink-panels | \u5728\u8303\u56F4\u9009\u62E9\u5668\u91CC\u53D6\u6D88\u4E24\u4E2A\u65E5\u671F\u9762\u677F\u4E4B\u95F4\u7684\u8054\u52A8 | boolean | \u2014 | false |
| prefix-icon | \u81EA\u5B9A\u4E49\u5934\u90E8\u56FE\u6807\u7684\u7C7B\u540D | string | \u2014 | el-icon-date |
| clear-icon | \u81EA\u5B9A\u4E49\u6E05\u7A7A\u56FE\u6807\u7684\u7C7B\u540D | string | \u2014 | el-icon-circle-close |

| \u4E8B\u4EF6\u540D\u79F0 | \u8BF4\u660E | \u56DE\u8C03\u53C2\u6570 |
| :--- | :--- | :--- |
| change | \u7528\u6237\u786E\u8BA4\u9009\u5B9A\u7684\u503C\u65F6\u89E6\u53D1 | \u7EC4\u4EF6\u7ED1\u5B9A\u503C\u3002\u683C\u5F0F\u4E0E\u7ED1\u5B9A\u503C\u4E00\u81F4\uFF0C\u53EF\u53D7 value-format \u63A7\u5236 |
| blur | \u5F53 input \u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1 | \u7EC4\u4EF6\u5B9E\u4F8B |
| focus | \u5F53 input \u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1 | \u7EC4\u4EF6\u5B9E\u4F8B |

| \u65B9\u6CD5\u540D | \u8BF4\u660E | \u53C2\u6570 |
| :--- | :--- | :--- |
| focus | \u4F7F input \u83B7\u53D6\u7126\u70B9 | \u2014 |`,"el-upload":`[element\uFF1A${m}/#/zh-CN/component/upload](${m}/#/zh-CN/component/upload) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| action | \u5FC5\u9009\u53C2\u6570\uFF0C\u4E0A\u4F20\u7684\u5730\u5740 | string | \u2014 | \u2014 |
| headers | \u8BBE\u7F6E\u4E0A\u4F20\u7684\u8BF7\u6C42\u5934\u90E8 | object | \u2014 | \u2014 |
| multiple | \u662F\u5426\u652F\u6301\u591A\u9009\u6587\u4EF6 | boolean | \u2014 | \u2014 |
| data | \u4E0A\u4F20\u65F6\u9644\u5E26\u7684\u989D\u5916\u53C2\u6570 | object | \u2014 | \u2014 |
| name | \u4E0A\u4F20\u7684\u6587\u4EF6\u5B57\u6BB5\u540D | string | \u2014 | file |
| with-credentials | \u652F\u6301\u53D1\u9001 cookie \u51ED\u8BC1\u4FE1\u606F | boolean | \u2014 | false |
| show-file-list | \u662F\u5426\u663E\u793A\u5DF2\u4E0A\u4F20\u6587\u4EF6\u5217\u8868 | boolean | \u2014 | true |
| drag | \u662F\u5426\u542F\u7528\u62D6\u62FD\u4E0A\u4F20 | boolean | \u2014 | false |
| accept | \u63A5\u53D7\u4E0A\u4F20\u7684\u6587\u4EF6\u7C7B\u578B\uFF08thumbnail-mode \u6A21\u5F0F\u4E0B\u6B64\u53C2\u6570\u65E0\u6548\uFF09 | string | \u2014 | \u2014 |
| on-preview | \u70B9\u51FB\u6587\u4EF6\u5217\u8868\u4E2D\u5DF2\u4E0A\u4F20\u7684\u6587\u4EF6\u65F6\u7684\u94A9\u5B50 | function(file) | \u2014 | \u2014 |
| on-remove | \u6587\u4EF6\u5217\u8868\u79FB\u9664\u6587\u4EF6\u65F6\u7684\u94A9\u5B50 | function(file, fileList) | \u2014 | \u2014 |
| on-success | \u6587\u4EF6\u4E0A\u4F20\u6210\u529F\u65F6\u7684\u94A9\u5B50 | function(response, file, fileList) | \u2014 | \u2014 |
| on-error | \u6587\u4EF6\u4E0A\u4F20\u5931\u8D25\u65F6\u7684\u94A9\u5B50 | function(err, file, fileList) | \u2014 | \u2014 |
| on-progress | \u6587\u4EF6\u4E0A\u4F20\u65F6\u7684\u94A9\u5B50 | function(event, file, fileList) | \u2014 | \u2014 |
| on-change | \u6587\u4EF6\u72B6\u6001\u6539\u53D8\u65F6\u7684\u94A9\u5B50\uFF0C\u6DFB\u52A0\u6587\u4EF6\u3001\u4E0A\u4F20\u6210\u529F\u548C\u4E0A\u4F20\u5931\u8D25\u65F6\u90FD\u4F1A\u88AB\u8C03\u7528 | function(file, fileList) | \u2014 | \u2014 |
| before-upload | \u4E0A\u4F20\u6587\u4EF6\u4E4B\u524D\u7684\u94A9\u5B50\uFF0C\u53C2\u6570\u4E3A\u4E0A\u4F20\u7684\u6587\u4EF6\uFF0C\u82E5\u8FD4\u56DE false \u6216\u8005\u8FD4\u56DE Promise \u4E14\u88AB reject\uFF0C\u5219\u505C\u6B62\u4E0A\u4F20\u3002 | function(file) | \u2014 | \u2014 |
| before-remove | \u5220\u9664\u6587\u4EF6\u4E4B\u524D\u7684\u94A9\u5B50\uFF0C\u53C2\u6570\u4E3A\u4E0A\u4F20\u7684\u6587\u4EF6\u548C\u6587\u4EF6\u5217\u8868\uFF0C\u82E5\u8FD4\u56DE false \u6216\u8005\u8FD4\u56DE Promise \u4E14\u88AB reject\uFF0C\u5219\u505C\u6B62\u4E0A\u4F20\u3002 | function(file, fileList) | \u2014 | \u2014 |
| list-type | \u6587\u4EF6\u5217\u8868\u7684\u7C7B\u578B | string | text/picture/picture-card | text |
| auto-upload | \u662F\u5426\u5728\u9009\u53D6\u6587\u4EF6\u540E\u7ACB\u5373\u8FDB\u884C\u4E0A\u4F20 | boolean | \u2014 | true |
| file-list | \u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868, \u4F8B\u5982: [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}] | array | \u2014 | [] |
| http-request | \u8986\u76D6\u9ED8\u8BA4\u7684\u4E0A\u4F20\u884C\u4E3A\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u4E0A\u4F20\u7684\u5B9E\u73B0 | function | \u2014 | \u2014 |
| disabled | \u662F\u5426\u7981\u7528 | boolean | \u2014 | false |
| limit | \u6700\u5927\u5141\u8BB8\u4E0A\u4F20\u4E2A\u6570 | number | \u2014 | \u2014 |
| on-exceed | \u6587\u4EF6\u8D85\u51FA\u4E2A\u6570\u9650\u5236\u65F6\u7684\u94A9\u5B50 | function(files, fileList) | \u2014 | - |

| name | \u8BF4\u660E |
| :--- | :--- |
| trigger | \u89E6\u53D1\u6587\u4EF6\u9009\u62E9\u6846\u7684\u5185\u5BB9 |
| tip | \u63D0\u793A\u8BF4\u660E\u6587\u5B57 |

| \u65B9\u6CD5\u540D | \u8BF4\u660E | \u53C2\u6570 |
| :--- | :--- | :--- |
| clearFiles | \u6E05\u7A7A\u5DF2\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868\uFF08\u8BE5\u65B9\u6CD5\u4E0D\u652F\u6301\u5728 before-upload \u4E2D\u8C03\u7528\uFF09 | \u2014 |
| abort | \u53D6\u6D88\u4E0A\u4F20\u8BF7\u6C42 | \uFF08 file: fileList \u4E2D\u7684 file \u5BF9\u8C61 \uFF09 |
| submit | \u624B\u52A8\u4E0A\u4F20\u6587\u4EF6\u5217\u8868 | \u2014 |`,"el-rate":`[element\uFF1A${m}/#/zh-CN/component/rate](${m}/#/zh-CN/component/rate) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| max | \u6700\u5927\u5206\u503C | number | \u2014 | 5 |
| disabled | \u662F\u5426\u4E3A\u53EA\u8BFB | boolean | \u2014 | false |
| allow-half | \u662F\u5426\u5141\u8BB8\u534A\u9009 | boolean | \u2014 | false |
| low-threshold | \u4F4E\u5206\u548C\u4E2D\u7B49\u5206\u6570\u7684\u754C\u9650\u503C\uFF0C\u503C\u672C\u8EAB\u88AB\u5212\u5206\u5728\u4F4E\u5206\u4E2D | number | \u2014 | 2 |
| high-threshold | \u9AD8\u5206\u548C\u4E2D\u7B49\u5206\u6570\u7684\u754C\u9650\u503C\uFF0C\u503C\u672C\u8EAB\u88AB\u5212\u5206\u5728\u9AD8\u5206\u4E2D | number | \u2014 | 4 |
| colors | icon \u7684\u989C\u8272\u6570\u7EC4\uFF0C\u5171\u6709 3 \u4E2A\u5143\u7D20\uFF0C\u4E3A 3 \u4E2A\u5206\u6BB5\u6240\u5BF9\u5E94\u7684\u989C\u8272 | array | \u2014 | ['#F7BA2A', '#F7BA2A', '#F7BA2A'] |
| void-color | \u672A\u9009\u4E2D icon \u7684\u989C\u8272 | string | \u2014 | #C6D1DE |
| disabled-void-color | \u53EA\u8BFB\u65F6\u672A\u9009\u4E2D icon \u7684\u989C\u8272 | string | \u2014 | #EFF2F7 |
| icon-classes | icon \u7684\u7C7B\u540D\u6570\u7EC4\uFF0C\u5171\u6709 3 \u4E2A\u5143\u7D20\uFF0C\u4E3A 3 \u4E2A\u5206\u6BB5\u6240\u5BF9\u5E94\u7684\u7C7B\u540D | array | \u2014 | ['el-icon-star-on', 'el-icon-star-on','el-icon-star-on'] |
| void-icon-class | \u672A\u9009\u4E2D icon \u7684\u7C7B\u540D | string | \u2014 | el-icon-star-off |
| disabled-void-icon-class | \u53EA\u8BFB\u65F6\u672A\u9009\u4E2D icon \u7684\u7C7B\u540D | string | \u2014 | el-icon-star-on |
| show-text | \u662F\u5426\u663E\u793A\u8F85\u52A9\u6587\u5B57\uFF0C\u82E5\u4E3A\u771F\uFF0C\u5219\u4F1A\u4ECE texts \u6570\u7EC4\u4E2D\u9009\u53D6\u5F53\u524D\u5206\u6570\u5BF9\u5E94\u7684\u6587\u5B57\u5185\u5BB9 | boolean | \u2014 | false |
| show-score | \u662F\u5426\u663E\u793A\u5F53\u524D\u5206\u6570\uFF0Cshow-score \u548C show-text \u4E0D\u80FD\u540C\u65F6\u4E3A\u771F | boolean | \u2014 | false |
| text-color | \u8F85\u52A9\u6587\u5B57\u7684\u989C\u8272 | string | \u2014 | #1F2D3D |
| texts | \u8F85\u52A9\u6587\u5B57\u6570\u7EC4 | array | \u2014 | ['\u6781\u5DEE', '\u5931\u671B', '\u4E00\u822C', '\u6EE1\u610F', '\u60CA\u559C'] |
| score-template | \u5206\u6570\u663E\u793A\u6A21\u677F | string | \u2014 | {value} |

| \u4E8B\u4EF6\u540D\u79F0 | \u8BF4\u660E | \u56DE\u8C03\u53C2\u6570 |
| :--- | :--- | :--- |
| change | \u5206\u503C\u6539\u53D8\u65F6\u89E6\u53D1 | \u6539\u53D8\u540E\u7684\u5206\u503C |`,"el-color-picker":`[element\uFF1A${m}/#/zh-CN/component/color-picker](${m}/#/zh-CN/component/color-picker) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| disabled | \u662F\u5426\u7981\u7528 | boolean | \u2014 | false |
| size | \u5C3A\u5BF8 | string | \u2014 | medium / small / mini |
| show-alpha | \u662F\u5426\u652F\u6301\u900F\u660E\u5EA6\u9009\u62E9 | boolean | \u2014 | false |
| color-format | \u5199\u5165 v-model \u7684\u989C\u8272\u7684\u683C\u5F0F | string | hsl / hsv / hex / rgb | hex\uFF08show-alpha \u4E3A false\uFF09/ rgb\uFF08show-alpha \u4E3A true\uFF09 |
| popper-class | ColorPicker \u4E0B\u62C9\u6846\u7684\u7C7B\u540D | string | \u2014 | \u2014 |
| predefine | \u9884\u5B9A\u4E49\u989C\u8272 | array | \u2014 | \u2014 |

| \u4E8B\u4EF6\u540D\u79F0 | \u8BF4\u660E | \u56DE\u8C03\u53C2\u6570 |
| :--- | :--- | :--- |
| change | \u5F53\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1 | \u5F53\u524D\u503C |
| active-change | \u9762\u677F\u4E2D\u5F53\u524D\u663E\u793A\u7684\u989C\u8272\u53D1\u751F\u6539\u53D8\u65F6\u89E6\u53D1 | \u5F53\u524D\u663E\u793A\u7684\u989C\u8272\u503C |`,"el-transfer":`[element\uFF1A${m}/#/zh-CN/component/transfer](${m}/#/zh-CN/component/transfer) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| data | Transfer \u7684\u6570\u636E\u6E90 | array[{ key, label, disabled }] | \u2014 | [ ] |
| filterable | \u662F\u5426\u53EF\u641C\u7D22 | boolean | \u2014 | false |
| filter-placeholder | \u641C\u7D22\u6846\u5360\u4F4D\u7B26 | string | \u2014 | \u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9 |
| filter-method | \u81EA\u5B9A\u4E49\u641C\u7D22\u65B9\u6CD5 | function | \u2014 | \u2014 |
| target-order | \u53F3\u4FA7\u5217\u8868\u5143\u7D20\u7684\u6392\u5E8F\u7B56\u7565\uFF1A\u82E5\u4E3A original\uFF0C\u5219\u4FDD\u6301\u4E0E\u6570\u636E\u6E90\u76F8\u540C\u7684\u987A\u5E8F\uFF1B\u82E5\u4E3A push\uFF0C\u5219\u65B0\u52A0\u5165\u7684\u5143\u7D20\u6392\u5728\u6700\u540E\uFF1B\u82E5\u4E3A unshift\uFF0C\u5219\u65B0\u52A0\u5165\u7684\u5143\u7D20\u6392\u5728\u6700\u524D | string | original / push / unshift | original |
| titles | \u81EA\u5B9A\u4E49\u5217\u8868\u6807\u9898 | array | \u2014 | ['\u5217\u8868 1', '\u5217\u8868 2'] |
| button-texts | \u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u6848 | array | \u2014 | [ ] |
| render-content | \u81EA\u5B9A\u4E49\u6570\u636E\u9879\u6E32\u67D3\u51FD\u6570 | function(h, option) | \u2014 | \u2014 |
| format | \u5217\u8868\u9876\u90E8\u52FE\u9009\u72B6\u6001\u6587\u6848 | object{noChecked, hasChecked} | \u2014 | { noChecked: '\${checked}/\${total}', hasChecked: '\${checked}/\${total}' } |
| props | \u6570\u636E\u6E90\u7684\u5B57\u6BB5\u522B\u540D | object{key, label, disabled} | \u2014 | \u2014 |
| left-default-checked | \u521D\u59CB\u72B6\u6001\u4E0B\u5DE6\u4FA7\u5217\u8868\u7684\u5DF2\u52FE\u9009\u9879\u7684 key \u6570\u7EC4 | array | \u2014 | [ ] |
| right-default-checked | \u521D\u59CB\u72B6\u6001\u4E0B\u53F3\u4FA7\u5217\u8868\u7684\u5DF2\u52FE\u9009\u9879\u7684 key \u6570\u7EC4 | array | \u2014 | [ ] |

| name | \u8BF4\u660E |
| :--- | :--- |
| left-footer | \u5DE6\u4FA7\u5217\u8868\u5E95\u90E8\u7684\u5185\u5BB9 |
| right-footer | \u53F3\u4FA7\u5217\u8868\u5E95\u90E8\u7684\u5185\u5BB9 |

| \u65B9\u6CD5\u540D | \u8BF4\u660E | \u53C2\u6570 |
| :--- | :--- | :--- |
| clearQuery | \u6E05\u7A7A\u67D0\u4E2A\u9762\u677F\u7684\u641C\u7D22\u5173\u952E\u8BCD | 'left' / 'right'\uFF0C\u6307\u5B9A\u9700\u8981\u6E05\u7A7A\u7684\u9762\u677F |

| \u4E8B\u4EF6\u540D\u79F0 | \u8BF4\u660E | \u56DE\u8C03\u53C2\u6570 |
| :--- | :--- | :--- |
| change | \u53F3\u4FA7\u5217\u8868\u5143\u7D20\u53D8\u5316\u65F6\u89E6\u53D1 | \u5F53\u524D\u503C\u3001\u6570\u636E\u79FB\u52A8\u7684\u65B9\u5411\uFF08'left' / 'right'\uFF09\u3001\u53D1\u751F\u79FB\u52A8\u7684\u6570\u636E key \u6570\u7EC4 |
| left-check-change | \u5DE6\u4FA7\u5217\u8868\u5143\u7D20\u88AB\u7528\u6237\u9009\u4E2D / \u53D6\u6D88\u9009\u4E2D\u65F6\u89E6\u53D1 | \u5F53\u524D\u88AB\u9009\u4E2D\u7684\u5143\u7D20\u7684 key \u6570\u7EC4\u3001\u9009\u4E2D\u72B6\u6001\u53D1\u751F\u53D8\u5316\u7684\u5143\u7D20\u7684 key \u6570\u7EC4 |
| right-check-change | \u53F3\u4FA7\u5217\u8868\u5143\u7D20\u88AB\u7528\u6237\u9009\u4E2D / \u53D6\u6D88\u9009\u4E2D\u65F6\u89E6\u53D1 | \u5F53\u524D\u88AB\u9009\u4E2D\u7684\u5143\u7D20\u7684 key \u6570\u7EC4\u3001\u9009\u4E2D\u72B6\u6001\u53D1\u751F\u53D8\u5316\u7684\u5143\u7D20\u7684 key \u6570\u7EC4 |`,"el-form":`element\uFF1A${m}/#/zh-CN/component/form](${m}/#/zh-CN/component/form) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| model | \u8868\u5355\u6570\u636E\u5BF9\u8C61 | object | \u2014 | \u2014 |
| rules | \u8868\u5355\u9A8C\u8BC1\u89C4\u5219 | object | \u2014 | \u2014 |
| inline | \u884C\u5185\u8868\u5355\u6A21\u5F0F | boolean | \u2014 | false |
| label-position | \u8868\u5355\u57DF\u6807\u7B7E\u7684\u4F4D\u7F6E\uFF0C\u5982\u679C\u503C\u4E3A left \u6216\u8005 right \u65F6\uFF0C\u5219\u9700\u8981\u8BBE\u7F6E label-width | string | right/left/top | right |
| label-width | \u8868\u5355\u57DF\u6807\u7B7E\u7684\u5BBD\u5EA6\uFF0C\u4F5C\u4E3A Form \u76F4\u63A5\u5B50\u5143\u7D20\u7684 form-item \u4F1A\u7EE7\u627F\u8BE5\u503C | string | \u2014 | \u2014 |
| label-suffix | \u8868\u5355\u57DF\u6807\u7B7E\u7684\u540E\u7F00 | string | \u2014 | \u2014 |
| hide-required-asterisk | \u662F\u5426\u663E\u793A\u5FC5\u586B\u5B57\u6BB5\u7684\u6807\u7B7E\u65C1\u8FB9\u7684\u7EA2\u8272\u661F\u53F7 | boolean | \u2014 | false |
| show-message | \u662F\u5426\u663E\u793A\u6821\u9A8C\u9519\u8BEF\u4FE1\u606F | boolean | \u2014 | true |
| inline-message | \u662F\u5426\u4EE5\u884C\u5185\u5F62\u5F0F\u5C55\u793A\u6821\u9A8C\u4FE1\u606F | boolean | \u2014 | false |
| status-icon | \u662F\u5426\u5728\u8F93\u5165\u6846\u4E2D\u663E\u793A\u6821\u9A8C\u7ED3\u679C\u53CD\u9988\u56FE\u6807 | boolean | \u2014 | false |
| validate-on-rule-change | \u662F\u5426\u5728 rules \u5C5E\u6027\u6539\u53D8\u540E\u7ACB\u5373\u89E6\u53D1\u4E00\u6B21\u9A8C\u8BC1 | boolean | \u2014 | true |
| size | \u7528\u4E8E\u63A7\u5236\u8BE5\u8868\u5355\u5185\u7EC4\u4EF6\u7684\u5C3A\u5BF8 | string | medium / small / mini | \u2014 |
| disabled | \u662F\u5426\u7981\u7528\u8BE5\u8868\u5355\u5185\u7684\u6240\u6709\u7EC4\u4EF6\u3002\u82E5\u8BBE\u7F6E\u4E3A true\uFF0C\u5219\u8868\u5355\u5185\u7EC4\u4EF6\u4E0A\u7684 disabled \u5C5E\u6027\u4E0D\u518D\u751F\u6548 | boolean | \u2014 | false |

| \u65B9\u6CD5\u540D | \u8BF4\u660E | \u53C2\u6570 |
| :--- | :--- | :--- |
| validate | \u5BF9\u6574\u4E2A\u8868\u5355\u8FDB\u884C\u6821\u9A8C\u7684\u65B9\u6CD5\uFF0C\u53C2\u6570\u4E3A\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u3002\u8BE5\u56DE\u8C03\u51FD\u6570\u4F1A\u5728\u6821\u9A8C\u7ED3\u675F\u540E\u88AB\u8C03\u7528\uFF0C\u5E76\u4F20\u5165\u4E24\u4E2A\u53C2\u6570\uFF1A\u662F\u5426\u6821\u9A8C\u6210\u529F\u548C\u672A\u901A\u8FC7\u6821\u9A8C\u7684\u5B57\u6BB5\u3002\u82E5\u4E0D\u4F20\u5165\u56DE\u8C03\u51FD\u6570\uFF0C\u5219\u4F1A\u8FD4\u56DE\u4E00\u4E2A promise | Function(callback: Function(boolean, object)) |
| validateField | \u5BF9\u90E8\u5206\u8868\u5355\u5B57\u6BB5\u8FDB\u884C\u6821\u9A8C\u7684\u65B9\u6CD5 | Function(prop: string, callback: Function(errorMessage: string)) |
| resetFields | \u5BF9\u6574\u4E2A\u8868\u5355\u8FDB\u884C\u91CD\u7F6E\uFF0C\u5C06\u6240\u6709\u5B57\u6BB5\u503C\u91CD\u7F6E\u4E3A\u521D\u59CB\u503C\u5E76\u79FB\u9664\u6821\u9A8C\u7ED3\u679C | \u2014 |
| clearValidate | \u79FB\u9664\u8868\u5355\u9879\u7684\u6821\u9A8C\u7ED3\u679C\u3002\u4F20\u5165\u5F85\u79FB\u9664\u7684\u8868\u5355\u9879\u7684 prop \u5C5E\u6027\u7EC4\u6210\u7684\u6570\u7EC4\uFF0C\u5982\u4E0D\u4F20\u5219\u79FB\u9664\u6574\u4E2A\u8868\u5355\u7684\u6821\u9A8C\u7ED3\u679C | Function(props: array) |

| \u4E8B\u4EF6\u540D\u79F0 | \u8BF4\u660E | \u56DE\u8C03\u53C2\u6570 |
| :--- | :--- | :--- |
| validate | \u4EFB\u4E00\u8868\u5355\u9879\u88AB\u6821\u9A8C\u540E\u89E6\u53D1 | \u88AB\u6821\u9A8C\u7684\u8868\u5355\u9879 prop \u503C\uFF0C\u6821\u9A8C\u662F\u5426\u901A\u8FC7\uFF0C\u9519\u8BEF\u6D88\u606F\uFF08\u5982\u679C\u5B58\u5728\uFF09 |`,"el-form-item":`[element\uFF1A${m}/#/zh-CN/component/form](${m}/#/zh-CN/component/form) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| prop | \u8868\u5355\u57DF model \u5B57\u6BB5\uFF0C\u5728\u4F7F\u7528 validate\u3001resetFields \u65B9\u6CD5\u7684\u60C5\u51B5\u4E0B\uFF0C\u8BE5\u5C5E\u6027\u662F\u5FC5\u586B\u7684 | string | \u4F20\u5165 Form \u7EC4\u4EF6\u7684 model \u4E2D\u7684\u5B57\u6BB5 | \u2014 |
| label | \u6807\u7B7E\u6587\u672C | string | \u2014 | \u2014 |
| label-width | \u8868\u5355\u57DF\u6807\u7B7E\u7684\u7684\u5BBD\u5EA6\uFF0C\u4F8B\u5982 '50px' | string | \u2014 | \u2014 |
| required | \u662F\u5426\u5FC5\u586B\uFF0C\u5982\u4E0D\u8BBE\u7F6E\uFF0C\u5219\u4F1A\u6839\u636E\u6821\u9A8C\u89C4\u5219\u81EA\u52A8\u751F\u6210 | boolean | \u2014 | false |
| rules | \u8868\u5355\u9A8C\u8BC1\u89C4\u5219 | object | \u2014 | \u2014 |
| error | \u8868\u5355\u57DF\u9A8C\u8BC1\u9519\u8BEF\u4FE1\u606F, \u8BBE\u7F6E\u8BE5\u503C\u4F1A\u4F7F\u8868\u5355\u9A8C\u8BC1\u72B6\u6001\u53D8\u4E3Aerror\uFF0C\u5E76\u663E\u793A\u8BE5\u9519\u8BEF\u4FE1\u606F | string | \u2014 | \u2014 |
| show-message | \u662F\u5426\u663E\u793A\u6821\u9A8C\u9519\u8BEF\u4FE1\u606F | boolean | \u2014 | true |
| inline-message | \u4EE5\u884C\u5185\u5F62\u5F0F\u5C55\u793A\u6821\u9A8C\u4FE1\u606F | boolean | \u2014 | false |
| size | \u7528\u4E8E\u63A7\u5236\u8BE5\u8868\u5355\u57DF\u4E0B\u7EC4\u4EF6\u7684\u5C3A\u5BF8 | string | medium / small / mini | - |

| name | \u8BF4\u660E |
| :--- | :--- |
| \u2014 | Form Item \u7684\u5185\u5BB9 |
| label | \u6807\u7B7E\u6587\u672C\u7684\u5185\u5BB9 |

| name | \u8BF4\u660E |
| :--- | :--- |
| error | \u81EA\u5B9A\u4E49\u8868\u5355\u6821\u9A8C\u4FE1\u606F\u7684\u663E\u793A\u65B9\u5F0F\uFF0C\u53C2\u6570\u4E3A { error } |

| \u65B9\u6CD5\u540D | \u8BF4\u660E | \u53C2\u6570 |
| :--- | :--- | :--- |
| resetField | \u5BF9\u8BE5\u8868\u5355\u9879\u8FDB\u884C\u91CD\u7F6E\uFF0C\u5C06\u5176\u503C\u91CD\u7F6E\u4E3A\u521D\u59CB\u503C\u5E76\u79FB\u9664\u6821\u9A8C\u7ED3\u679C | - |
| clearValidate | \u79FB\u9664\u8BE5\u8868\u5355\u9879\u7684\u6821\u9A8C\u7ED3\u679C | - |`,"el-table":`[element\uFF1A${m}/#/zh-CN/component/table](${m}/#/zh-CN/component/table) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| data | \u663E\u793A\u7684\u6570\u636E | array | \u2014 | \u2014 |
| height | Table \u7684\u9AD8\u5EA6\uFF0C\u9ED8\u8BA4\u4E3A\u81EA\u52A8\u9AD8\u5EA6\u3002\u5982\u679C height \u4E3A number \u7C7B\u578B\uFF0C\u5355\u4F4D px\uFF1B\u5982\u679C height \u4E3A string \u7C7B\u578B\uFF0C\u5219\u8FD9\u4E2A\u9AD8\u5EA6\u4F1A\u8BBE\u7F6E\u4E3A Table \u7684 style.height \u7684\u503C\uFF0CTable \u7684\u9AD8\u5EA6\u4F1A\u53D7\u63A7\u4E8E\u5916\u90E8\u6837\u5F0F\u3002 | string/number | \u2014 | \u2014 |
| max-height | Table \u7684\u6700\u5927\u9AD8\u5EA6 | string/number | \u2014 | \u2014 |
| stripe | \u662F\u5426\u4E3A\u6591\u9A6C\u7EB9 table | boolean | \u2014 | false |
| border | \u662F\u5426\u5E26\u6709\u7EB5\u5411\u8FB9\u6846 | boolean | \u2014 | false |
| size | Table \u7684\u5C3A\u5BF8 | string | medium / small / mini | \u2014 |
| fit | \u5217\u7684\u5BBD\u5EA6\u662F\u5426\u81EA\u6491\u5F00 | boolean | \u2014 | true |
| show-header | \u662F\u5426\u663E\u793A\u8868\u5934 | boolean | \u2014 | true |
| highlight-current-row | \u662F\u5426\u8981\u9AD8\u4EAE\u5F53\u524D\u884C | boolean | \u2014 | false |
| current-row-key | \u5F53\u524D\u884C\u7684 key\uFF0C\u53EA\u5199\u5C5E\u6027 | String,Number | \u2014 | \u2014 |
| row-class-name | \u884C\u7684 className \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\u4E3A\u6240\u6709\u884C\u8BBE\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684 className\u3002 | Function({row, rowIndex})/String | \u2014 | \u2014 |
| row-style | \u884C\u7684 style \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u56FA\u5B9A\u7684 Object \u4E3A\u6240\u6709\u884C\u8BBE\u7F6E\u4E00\u6837\u7684 Style\u3002 | Function({row, rowIndex})/Object | \u2014 | \u2014 |
| cell-class-name | \u5355\u5143\u683C\u7684 className \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\u4E3A\u6240\u6709\u5355\u5143\u683C\u8BBE\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684 className\u3002 | Function({row, column, rowIndex, columnIndex})/String | \u2014 | \u2014 |
| cell-style | \u5355\u5143\u683C\u7684 style \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u56FA\u5B9A\u7684 Object \u4E3A\u6240\u6709\u5355\u5143\u683C\u8BBE\u7F6E\u4E00\u6837\u7684 Style\u3002 | Function({row, column, rowIndex, columnIndex})/Object | \u2014 | \u2014 |
| header-row-class-name | \u8868\u5934\u884C\u7684 className \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\u4E3A\u6240\u6709\u8868\u5934\u884C\u8BBE\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684 className\u3002 | Function({row, rowIndex})/String | \u2014 | \u2014 |
| header-row-style | \u8868\u5934\u884C\u7684 style \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u56FA\u5B9A\u7684 Object \u4E3A\u6240\u6709\u8868\u5934\u884C\u8BBE\u7F6E\u4E00\u6837\u7684 Style\u3002 | Function({row, rowIndex})/Object | \u2014 | \u2014 |
| header-cell-class-name | \u8868\u5934\u5355\u5143\u683C\u7684 className \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\u4E3A\u6240\u6709\u8868\u5934\u5355\u5143\u683C\u8BBE\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684 className\u3002 | Function({row, column, rowIndex, columnIndex})/String | \u2014 | \u2014 |
| header-cell-style | \u8868\u5934\u5355\u5143\u683C\u7684 style \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u56FA\u5B9A\u7684 Object \u4E3A\u6240\u6709\u8868\u5934\u5355\u5143\u683C\u8BBE\u7F6E\u4E00\u6837\u7684 Style\u3002 | Function({row, column, rowIndex, columnIndex})/Object | \u2014 | \u2014 |
| row-key | \u884C\u6570\u636E\u7684 Key\uFF0C\u7528\u6765\u4F18\u5316 Table \u7684\u6E32\u67D3\uFF1B\u5728\u4F7F\u7528 reserve-selection \u529F\u80FD\u7684\u60C5\u51B5\u4E0B\uFF0C\u8BE5\u5C5E\u6027\u662F\u5FC5\u586B\u7684\u3002\u7C7B\u578B\u4E3A String \u65F6\uFF0C\u652F\u6301\u591A\u5C42\u8BBF\u95EE\uFF1Auser.info.id\uFF0C\u4F46\u4E0D\u652F\u6301 user.info[0].id\uFF0C\u6B64\u79CD\u60C5\u51B5\u8BF7\u4F7F\u7528 Function\u3002 | Function(row)/String | \u2014 | \u2014 |
| empty-text | \u7A7A\u6570\u636E\u65F6\u663E\u793A\u7684\u6587\u672C\u5185\u5BB9\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 slot="empty" \u8BBE\u7F6E | String | \u2014 | \u6682\u65E0\u6570\u636E |
| default-expand-all | \u662F\u5426\u9ED8\u8BA4\u5C55\u5F00\u6240\u6709\u884C\uFF0C\u5F53 Table \u4E2D\u5B58\u5728 type="expand" \u7684 Column \u7684\u65F6\u5019\u6709\u6548 | Boolean | \u2014 | false |
| expand-row-keys | \u53EF\u4EE5\u901A\u8FC7\u8BE5\u5C5E\u6027\u8BBE\u7F6E Table \u76EE\u524D\u7684\u5C55\u5F00\u884C\uFF0C\u9700\u8981\u8BBE\u7F6E row-key \u5C5E\u6027\u624D\u80FD\u4F7F\u7528\uFF0C\u8BE5\u5C5E\u6027\u4E3A\u5C55\u5F00\u884C\u7684 keys \u6570\u7EC4\u3002 | Array | \u2014 | |
| default-sort | \u9ED8\u8BA4\u7684\u6392\u5E8F\u5217\u7684 prop \u548C\u987A\u5E8F\u3002\u5B83\u7684prop\u5C5E\u6027\u6307\u5B9A\u9ED8\u8BA4\u7684\u6392\u5E8F\u7684\u5217\uFF0Corder\u6307\u5B9A\u9ED8\u8BA4\u6392\u5E8F\u7684\u987A\u5E8F | Object | order: ascending, descending | \u5982\u679C\u53EA\u6307\u5B9A\u4E86prop, \u6CA1\u6709\u6307\u5B9Aorder, \u5219\u9ED8\u8BA4\u987A\u5E8F\u662Fascending |
| tooltip-effect | tooltip effect \u5C5E\u6027 | String | dark/light | |
| show-summary | \u662F\u5426\u5728\u8868\u5C3E\u663E\u793A\u5408\u8BA1\u884C | Boolean | \u2014 | false |
| sum-text | \u5408\u8BA1\u884C\u7B2C\u4E00\u5217\u7684\u6587\u672C | String | \u2014 | \u5408\u8BA1 |
| summary-method | \u81EA\u5B9A\u4E49\u7684\u5408\u8BA1\u8BA1\u7B97\u65B9\u6CD5 | Function({ columns, data }) | \u2014 | \u2014 |
| span-method | \u5408\u5E76\u884C\u6216\u5217\u7684\u8BA1\u7B97\u65B9\u6CD5 | Function({ row, column, rowIndex, columnIndex }) | \u2014 | \u2014 |
| select-on-indeterminate | \u5728\u591A\u9009\u8868\u683C\u4E2D\uFF0C\u5F53\u4EC5\u6709\u90E8\u5206\u884C\u88AB\u9009\u4E2D\u65F6\uFF0C\u70B9\u51FB\u8868\u5934\u7684\u591A\u9009\u6846\u65F6\u7684\u884C\u4E3A\u3002\u82E5\u4E3A true\uFF0C\u5219\u9009\u4E2D\u6240\u6709\u884C\uFF1B\u82E5\u4E3A false\uFF0C\u5219\u53D6\u6D88\u9009\u62E9\u6240\u6709\u884C | Boolean | \u2014 | true |

| \u4E8B\u4EF6\u540D | \u8BF4\u660E | \u53C2\u6570 |
| :--- | :--- | :--- |
| select | \u5F53\u7528\u6237\u624B\u52A8\u52FE\u9009\u6570\u636E\u884C\u7684 Checkbox \u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6 | selection, row |
| select-all | \u5F53\u7528\u6237\u624B\u52A8\u52FE\u9009\u5168\u9009 Checkbox \u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6 | selection |
| selection-change | \u5F53\u9009\u62E9\u9879\u53D1\u751F\u53D8\u5316\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6 | selection |
| cell-mouse-enter | \u5F53\u5355\u5143\u683C hover \u8FDB\u5165\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6 | row, column, cell, event |
| cell-mouse-leave | \u5F53\u5355\u5143\u683C hover \u9000\u51FA\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6 | row, column, cell, event |
| cell-click | \u5F53\u67D0\u4E2A\u5355\u5143\u683C\u88AB\u70B9\u51FB\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6 | row, column, cell, event |
| cell-dblclick | \u5F53\u67D0\u4E2A\u5355\u5143\u683C\u88AB\u53CC\u51FB\u51FB\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6 | row, column, cell, event |
| row-click | \u5F53\u67D0\u4E00\u884C\u88AB\u70B9\u51FB\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6 | row, event, column |
| row-contextmenu | \u5F53\u67D0\u4E00\u884C\u88AB\u9F20\u6807\u53F3\u952E\u70B9\u51FB\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6 | row, event |
| row-dblclick | \u5F53\u67D0\u4E00\u884C\u88AB\u53CC\u51FB\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6 | row, event |
| header-click | \u5F53\u67D0\u4E00\u5217\u7684\u8868\u5934\u88AB\u70B9\u51FB\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6 | column, event |
| header-contextmenu | \u5F53\u67D0\u4E00\u5217\u7684\u8868\u5934\u88AB\u9F20\u6807\u53F3\u952E\u70B9\u51FB\u65F6\u89E6\u53D1\u8BE5\u4E8B\u4EF6 | column, event |
| sort-change | \u5F53\u8868\u683C\u7684\u6392\u5E8F\u6761\u4EF6\u53D1\u751F\u53D8\u5316\u7684\u65F6\u5019\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6 | { column, prop, order } |
| filter-change | \u5F53\u8868\u683C\u7684\u7B5B\u9009\u6761\u4EF6\u53D1\u751F\u53D8\u5316\u7684\u65F6\u5019\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6\uFF0C\u53C2\u6570\u7684\u503C\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5BF9\u8C61\u7684 key \u662F column \u7684 columnKey\uFF0C\u5BF9\u5E94\u7684 value \u4E3A\u7528\u6237\u9009\u62E9\u7684\u7B5B\u9009\u6761\u4EF6\u7684\u6570\u7EC4\u3002 | filters |
| current-change | \u5F53\u8868\u683C\u7684\u5F53\u524D\u884C\u53D1\u751F\u53D8\u5316\u7684\u65F6\u5019\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6\uFF0C\u5982\u679C\u8981\u9AD8\u4EAE\u5F53\u524D\u884C\uFF0C\u8BF7\u6253\u5F00\u8868\u683C\u7684 highlight-current-row \u5C5E\u6027 | currentRow, oldCurrentRow |
| header-dragend | \u5F53\u62D6\u52A8\u8868\u5934\u6539\u53D8\u4E86\u5217\u7684\u5BBD\u5EA6\u7684\u65F6\u5019\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6 | newWidth, oldWidth, column, event |
| expand-change | \u5F53\u7528\u6237\u5BF9\u67D0\u4E00\u884C\u5C55\u5F00\u6216\u8005\u5173\u95ED\u7684\u65F6\u5019\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6 | row, expandedRows |

| \u65B9\u6CD5\u540D | \u8BF4\u660E | \u53C2\u6570 |
| :--- | :--- | :--- |
| clearSelection | \u7528\u4E8E\u591A\u9009\u8868\u683C\uFF0C\u6E05\u7A7A\u7528\u6237\u7684\u9009\u62E9 | \u2014 |
| toggleRowSelection | \u7528\u4E8E\u591A\u9009\u8868\u683C\uFF0C\u5207\u6362\u67D0\u4E00\u884C\u7684\u9009\u4E2D\u72B6\u6001\uFF0C\u5982\u679C\u4F7F\u7528\u4E86\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u5219\u662F\u8BBE\u7F6E\u8FD9\u4E00\u884C\u9009\u4E2D\u4E0E\u5426\uFF08selected \u4E3A true \u5219\u9009\u4E2D\uFF09 | row, selected |
| toggleAllSelection | \u7528\u4E8E\u591A\u9009\u8868\u683C\uFF0C\u5207\u6362\u6240\u6709\u884C\u7684\u9009\u4E2D\u72B6\u6001 | - |
| toggleRowExpansion | \u7528\u4E8E\u53EF\u5C55\u5F00\u8868\u683C\uFF0C\u5207\u6362\u67D0\u4E00\u884C\u7684\u5C55\u5F00\u72B6\u6001\uFF0C\u5982\u679C\u4F7F\u7528\u4E86\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u5219\u662F\u8BBE\u7F6E\u8FD9\u4E00\u884C\u5C55\u5F00\u4E0E\u5426\uFF08expanded \u4E3A true \u5219\u5C55\u5F00\uFF09 | row, expanded |
| setCurrentRow | \u7528\u4E8E\u5355\u9009\u8868\u683C\uFF0C\u8BBE\u5B9A\u67D0\u4E00\u884C\u4E3A\u9009\u4E2D\u884C\uFF0C\u5982\u679C\u8C03\u7528\u65F6\u4E0D\u52A0\u53C2\u6570\uFF0C\u5219\u4F1A\u53D6\u6D88\u76EE\u524D\u9AD8\u4EAE\u884C\u7684\u9009\u4E2D\u72B6\u6001\u3002 | row |
| clearSort | \u7528\u4E8E\u6E05\u7A7A\u6392\u5E8F\u6761\u4EF6\uFF0C\u6570\u636E\u4F1A\u6062\u590D\u6210\u672A\u6392\u5E8F\u7684\u72B6\u6001 | \u2014 |
| clearFilter | \u7528\u4E8E\u6E05\u7A7A\u8FC7\u6EE4\u6761\u4EF6\uFF0C\u6570\u636E\u4F1A\u6062\u590D\u6210\u672A\u8FC7\u6EE4\u7684\u72B6\u6001 | \u2014 |
| doLayout | \u5BF9 Table \u8FDB\u884C\u91CD\u65B0\u5E03\u5C40\u3002\u5F53 Table \u6216\u5176\u7956\u5148\u5143\u7D20\u7531\u9690\u85CF\u5207\u6362\u4E3A\u663E\u793A\u65F6\uFF0C\u53EF\u80FD\u9700\u8981\u8C03\u7528\u6B64\u65B9\u6CD5 | \u2014 |
| sort | \u624B\u52A8\u5BF9 Table \u8FDB\u884C\u6392\u5E8F\u3002\u53C2\u6570prop\u5C5E\u6027\u6307\u5B9A\u6392\u5E8F\u5217\uFF0Corder\u6307\u5B9A\u6392\u5E8F\u987A\u5E8F\u3002 | prop: string, order: string |

| name | \u8BF4\u660E |
| :--- | :--- |
| append | \u63D2\u5165\u81F3\u8868\u683C\u6700\u540E\u4E00\u884C\u4E4B\u540E\u7684\u5185\u5BB9\uFF0C\u5982\u679C\u9700\u8981\u5BF9\u8868\u683C\u7684\u5185\u5BB9\u8FDB\u884C\u65E0\u9650\u6EDA\u52A8\u64CD\u4F5C\uFF0C\u53EF\u80FD\u9700\u8981\u7528\u5230\u8FD9\u4E2A slot\u3002\u82E5\u8868\u683C\u6709\u5408\u8BA1\u884C\uFF0C\u8BE5 slot \u4F1A\u4F4D\u4E8E\u5408\u8BA1\u884C\u4E4B\u4E0A\u3002 |`,"el-table-column":`[element\uFF1A${m}/#/zh-CN/component/table](${m}/#/zh-CN/component/table) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| type | \u5BF9\u5E94\u5217\u7684\u7C7B\u578B\u3002 selection \u663E\u793A\u591A\u9009\u6846\uFF0Cindex \u663E\u793A\u8BE5\u884C\u7684\u7D22\u5F15, expand \u663E\u793A\u53EF\u5C55\u5F00\u7684\u6309\u94AE | string | selection/index/expand | - |
| index | \u5982\u679C\u8BBE\u7F6E\u4E86 type=index\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4F20\u9012 index \u5C5E\u6027\u6765\u81EA\u5B9A\u4E49\u7D22\u5F15 | number, Function(index) | - | - |
| column-key | column \u7684 key\uFF0C\u5982\u679C\u9700\u8981\u4F7F\u7528 filter-change \u4E8B\u4EF6\uFF0C\u5219\u9700\u8981\u6B64\u5C5E\u6027\u6807\u8BC6\u662F\u54EA\u4E2A column \u7684\u7B5B\u9009\u6761\u4EF6	| string | - | - |
| label | \u663E\u793A\u7684\u6807\u9898 | string | - | - |
| prop | \u5BF9\u5E94\u5217\u5185\u5BB9\u7684\u5B57\u6BB5\u540D\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528 property \u5C5E\u6027 | string | - | - |
| width | \u5BF9\u5E94\u5217\u7684\u5BBD\u5EA6 | string | - | - |
| min-width | \u5BF9\u5E94\u5217\u7684\u6700\u5C0F\u5BBD\u5EA6 | string | - | - |
| fixed | \u5217\u662F\u5426\u56FA\u5B9A\u5728\u5DE6\u4FA7\u6216\u8005\u53F3\u4FA7\uFF0Ctrue \u8868\u793A\u56FA\u5B9A\u5728\u5DE6\u4FA7 | string, boolean | true, left, right | - |
| render-header | \u5217\u6807\u9898 Label \u533A\u57DF\u6E32\u67D3\u4F7F\u7528\u7684 Function | Function(h, { column, $index }) | - | - |
| sortable | \u5BF9\u5E94\u5217\u662F\u5426\u6392\u5E8F\uFF0C'custom'\u4EE3\u8868\u5E0C\u671B\u8FDC\u7A0B\u6392\u5E8F\uFF0C\u9700\u76D1\u542CTable\u7684sort-change\u4E8B\u4EF6 | boolean, string | true, false, 'custom' | false |
| sort-method | \u6392\u5E8F\u4F7F\u7528\u65B9\u6CD5\uFF0C\u4EC5sortable\u4E3Atrue\u65F6\u6709\u6548\uFF0C\u9700\u8FD4\u56DE\u4E00\u6570\u5B57 | Function(a, b) | - | - |
| sort-by | \u6307\u5B9A\u6392\u5E8F\u5C5E\u6027\uFF0Csortable\u4E3Atrue\u4E14\u6CA1\u6709sort-method\u6709\u6548\u3002sort-by\u53EF\u4E3A\u6570\u7EC4 | String/Array/Function(row, index) | - | - |
| sort-orders | \u8F6E\u8F6C\u987A\u5E8F\uFF0Csortable\u4E3Atrue\u6709\u6548\u3002\u9700\u4F20\u5165\u4E00\u4E2A\u6570\u7EC4 | array | ascending/descending/null | ['ascending', 'descending', null] |
| resizable | \u5BF9\u5E94\u5217\u662F\u5426\u53EF\u4EE5\u901A\u8FC7\u62D6\u52A8\u6539\u53D8\u5BBD\u5EA6\uFF08\u9700\u8981\u5728 el-table \u4E0A\u8BBE\u7F6E border \u5C5E\u6027\u4E3A\u771F\uFF09| boolean | - | true |
| formatter | \u7528\u6765\u683C\u5F0F\u5316\u5185\u5BB9 | Function(row, column, cellValue, index) | - | - |
| show-overflow-tooltip | \u5F53\u5185\u5BB9\u8FC7\u957F\u88AB\u9690\u85CF\u65F6\u663E\u793A tooltip | Boolean | - | false |
| align | \u5BF9\u9F50\u65B9\u5F0F | String | left/center/right | left |
| header-align | \u8868\u5934\u5BF9\u9F50\u65B9\u5F0F | String | left/center/right | - |
| class-name | \u5217\u7684className | string | \u2014 | \u2014 |
| label-class-name | \u5F53\u524D\u5217\u6807\u9898\u7684\u81EA\u5B9A\u4E49\u7C7B\u540D | string | \u2014 | - |
| selectable | \u4EC5\u5BF9 type=selection \u7684\u5217\u6709\u6548\uFF0C\u7C7B\u578B\u4E3A Function | Function(row, index) | \u2014 | \u2014 |
| reserve-selection | \u4EC5\u5BF9 type=selection \u7684\u5217\u6709\u6548\uFF0C\u7C7B\u578B\u4E3A Boolean | Boolean | \u2014 | false |
| filters | \u6570\u636E\u8FC7\u6EE4\u7684\u9009\u9879\uFF0C\u5143\u7D20\u9700\u8981\u6709 text \u548C value \u5C5E\u6027 | Array[{ text, value }] |  | \u2014 |
| filter-placement | \u8FC7\u6EE4\u5F39\u51FA\u6846\u7684\u5B9A\u4F4D | String | - | \u2014 |
| filter-multiple | \u6570\u636E\u8FC7\u6EE4\u7684\u9009\u9879\u662F\u5426\u591A\u9009 | Boolean | \u2014 | true |
| filter-method | \u6570\u636E\u8FC7\u6EE4\u4F7F\u7528\u7684\u65B9\u6CD5 | Function(value, row, column) | \u2014 | \u2014 |
| filtered-value | \u9009\u4E2D\u7684\u6570\u636E\u8FC7\u6EE4\u9879 | Array | \u2014 | \u2014 |
| slot name | \u8BF4\u660E |
| :--- | :--- |
| \u2014 | \u81EA\u5B9A\u4E49\u5217\u7684\u5185\u5BB9\uFF0C\u53C2\u6570\u4E3A { row, column, $index } |
| header | \u81EA\u5B9A\u4E49\u8868\u5934\u7684\u5185\u5BB9. \u53C2\u6570\u4E3A { column, $index } |
`,"el-tag":`[element\uFF1A${m}/#/zh-CN/component/tag](${m}/#/zh-CN/component/tag) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| type | \u4E3B\u9898 | string | success/info/warning/danger | \u2014 |
| closable | \u662F\u5426\u53EF\u5173\u95ED | boolean | \u2014 | false |
| disable-transitions | \u662F\u5426\u7981\u7528\u6E10\u53D8\u52A8\u753B | boolean | \u2014 | false |
| hit | \u662F\u5426\u6709\u8FB9\u6846\u63CF\u8FB9 | boolean | \u2014 | false |
| color | \u80CC\u666F\u8272 | string | \u2014 | \u2014 |
| size | \u5C3A\u5BF8 | string | medium / small / mini | \u2014 |

| \u4E8B\u4EF6\u540D\u79F0 | \u8BF4\u660E | \u56DE\u8C03\u53C2\u6570 |
| :--- | :--- | :--- |
| close | \u5173\u95ED Tag \u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6 | \u2014 |`,"el-progress":`[element\uFF1A${m}/#/zh-CN/component/progress](${m}/#/zh-CN/component/progress) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| percentage | \u767E\u5206\u6BD4\uFF08\u5FC5\u586B\uFF09 | number | 0-100 | 0 |
| type | \u8FDB\u5EA6\u6761\u7C7B\u578B | string | line/circle | line |
| stroke-width | \u8FDB\u5EA6\u6761\u7684\u5BBD\u5EA6\uFF0C\u5355\u4F4D px | number | \u2014 | 6 |
| text-inside | \u8FDB\u5EA6\u6761\u663E\u793A\u6587\u5B57\u5185\u7F6E\u5728\u8FDB\u5EA6\u6761\u5185\uFF08\u53EA\u5728 type=line \u65F6\u53EF\u7528\uFF09 | boolean | \u2014 | false |
| status | \u8FDB\u5EA6\u6761\u5F53\u524D\u72B6\u6001 | string | success/exception | \u2014 |
| color | \u8FDB\u5EA6\u6761\u80CC\u666F\u8272\uFF08\u4F1A\u8986\u76D6 status \u72B6\u6001\u989C\u8272\uFF09 | string | \u2014 | \u2014 |
| width | \u73AF\u5F62\u8FDB\u5EA6\u6761\u753B\u5E03\u5BBD\u5EA6\uFF08\u53EA\u5728 type=circle \u65F6\u53EF\u7528\uFF09 | number | | 126 |
| show-text | \u662F\u5426\u663E\u793A\u8FDB\u5EA6\u6761\u6587\u5B57\u5185\u5BB9 | boolean | \u2014 | true |`,"el-tree":`[element\uFF1A${m}/#/zh-CN/component/tree](${m}/#/zh-CN/component/tree) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| data | \u5C55\u793A\u6570\u636E | array | \u2014 | \u2014 |
| empty-text | \u5185\u5BB9\u4E3A\u7A7A\u7684\u65F6\u5019\u5C55\u793A\u7684\u6587\u672C | String | \u2014 | \u2014 |
| node-key | \u6BCF\u4E2A\u6811\u8282\u70B9\u7528\u6765\u4F5C\u4E3A\u552F\u4E00\u6807\u8BC6\u7684\u5C5E\u6027\uFF0C\u6574\u68F5\u6811\u5E94\u8BE5\u662F\u552F\u4E00\u7684 | String | \u2014 | \u2014 |
| props | \u914D\u7F6E\u9009\u9879\uFF0C\u5177\u4F53\u770B\u4E0B\u8868 | object | \u2014 | \u2014 |
| render-after-expand | \u662F\u5426\u5728\u7B2C\u4E00\u6B21\u5C55\u5F00\u67D0\u4E2A\u6811\u8282\u70B9\u540E\u624D\u6E32\u67D3\u5176\u5B50\u8282\u70B9 | boolean | \u2014 | true |
| load | \u52A0\u8F7D\u5B50\u6811\u6570\u636E\u7684\u65B9\u6CD5\uFF0C\u4EC5\u5F53 lazy \u5C5E\u6027\u4E3Atrue \u65F6\u751F\u6548 | function(node, resolve) | \u2014 | \u2014 |
| render-content | \u6811\u8282\u70B9\u7684\u5185\u5BB9\u533A\u7684\u6E32\u67D3 Function | Function(h, { node, data, store } | \u2014 | \u2014 |
  | highlight-current | \u662F\u5426\u9AD8\u4EAE\u5F53\u524D\u9009\u4E2D\u8282\u70B9\uFF0C\u9ED8\u8BA4\u503C\u662F false\u3002 | boolean | \u2014 | false |
  | default-expand-all | \u662F\u5426\u9ED8\u8BA4\u5C55\u5F00\u6240\u6709\u8282\u70B9 | boolean | \u2014 | false |
  | expand-on-click-node | \u662F\u5426\u5728\u70B9\u51FB\u8282\u70B9\u7684\u65F6\u5019\u5C55\u5F00\u6216\u8005\u6536\u7F29\u8282\u70B9\uFF0C \u9ED8\u8BA4\u503C\u4E3A true\uFF0C\u5982\u679C\u4E3A false\uFF0C\u5219\u53EA\u6709\u70B9\u7BAD\u5934\u56FE\u6807\u7684\u65F6\u5019\u624D\u4F1A\u5C55\u5F00\u6216\u8005\u6536\u7F29\u8282\u70B9\u3002 | boolean | \u2014 | true |
  | check-on-click-node | \u662F\u5426\u5728\u70B9\u51FB\u8282\u70B9\u7684\u65F6\u5019\u9009\u4E2D\u8282\u70B9\uFF0C\u9ED8\u8BA4\u503C\u4E3A false\uFF0C\u5373\u53EA\u6709\u5728\u70B9\u51FB\u590D\u9009\u6846\u65F6\u624D\u4F1A\u9009\u4E2D\u8282\u70B9\u3002 | boolean | \u2014 | false |
  | auto-expand-parent | \u5C55\u5F00\u5B50\u8282\u70B9\u7684\u65F6\u5019\u662F\u5426\u81EA\u52A8\u5C55\u5F00\u7236\u8282\u70B9 | boolean | \u2014 | true |
  | default-expanded-keys | \u9ED8\u8BA4\u5C55\u5F00\u7684\u8282\u70B9\u7684 key \u7684\u6570\u7EC4 | array | \u2014 | \u2014 |
  | show-checkbox | \u8282\u70B9\u662F\u5426\u53EF\u88AB\u9009\u62E9 | boolean | \u2014 | false |
  | check-strictly | \u5728\u663E\u793A\u590D\u9009\u6846\u7684\u60C5\u51B5\u4E0B\uFF0C\u662F\u5426\u4E25\u683C\u7684\u9075\u5FAA\u7236\u5B50\u4E0D\u4E92\u76F8\u5173\u8054\u7684\u505A\u6CD5\uFF0C\u9ED8\u8BA4\u4E3A false | boolean | \u2014 | false |
  | default-checked-keys | \u9ED8\u8BA4\u52FE\u9009\u7684\u8282\u70B9\u7684 key \u7684\u6570\u7EC4 | array | \u2014 | \u2014 |
  | filter-node-method | \u5BF9\u6811\u8282\u70B9\u8FDB\u884C\u7B5B\u9009\u65F6\u6267\u884C\u7684\u65B9\u6CD5\uFF0C\u8FD4\u56DE true \u8868\u793A\u8FD9\u4E2A\u8282\u70B9\u53EF\u4EE5\u663E\u793A\uFF0C\u8FD4\u56DE false \u5219\u8868\u793A\u8FD9\u4E2A\u8282\u70B9\u4F1A\u88AB\u9690\u85CF | Function(value, data, node) | \u2014 | \u2014 |
  | accordion | \u662F\u5426\u6BCF\u6B21\u53EA\u6253\u5F00\u4E00\u4E2A\u540C\u7EA7\u6811\u8282\u70B9\u5C55\u5F00 | boolean | \u2014 | false |
  | indent | \u76F8\u90BB\u7EA7\u8282\u70B9\u95F4\u7684\u6C34\u5E73\u7F29\u8FDB\uFF0C\u5355\u4F4D\u4E3A\u50CF\u7D20 | number | \u2014 | 16 |
  | lazy | \u662F\u5426\u61D2\u52A0\u8F7D\u5B50\u8282\u70B9\uFF0C\u9700\u4E0E load \u65B9\u6CD5\u7ED3\u5408\u4F7F\u7528 | boolean | \u2014 | false |
  | draggable | \u662F\u5426\u5F00\u542F\u62D6\u62FD\u8282\u70B9\u529F\u80FD | boolean | \u2014 | false |
  | allow-drag | \u5224\u65AD\u8282\u70B9\u80FD\u5426\u88AB\u62D6\u62FD | Function(node) | \u2014 | \u2014 |
  | allow-drop | \u62D6\u62FD\u65F6\u5224\u5B9A\u76EE\u6807\u8282\u70B9\u80FD\u5426\u88AB\u653E\u7F6E\u3002type \u53C2\u6570\u6709\u4E09\u79CD\u60C5\u51B5\uFF1A'prev'\u3001'inner' \u548C 'next'\uFF0C\u5206\u522B\u8868\u793A\u653E\u7F6E\u5728\u76EE\u6807\u8282\u70B9\u524D\u3001\u63D2\u5165\u81F3\u76EE\u6807\u8282\u70B9\u548C\u653E\u7F6E\u5728\u76EE\u6807\u8282\u70B9\u540E | Function(draggingNode, dropNode, type) | \u2014 | \u2014 |

  | \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
  | :--- | :--- | :--- | :--- | :--- |
  | label | \u6307\u5B9A\u8282\u70B9\u6807\u7B7E\u4E3A\u8282\u70B9\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C | string, function(data, node) | \u2014 | \u2014 |
  | children | \u6307\u5B9A\u5B50\u6811\u4E3A\u8282\u70B9\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C | string | \u2014 | \u2014 |
  | disabled | \u6307\u5B9A\u8282\u70B9\u9009\u62E9\u6846\u662F\u5426\u7981\u7528\u4E3A\u8282\u70B9\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C | boolean, function(data, node) | \u2014 | \u2014 |
  | isLeaf | \u6307\u5B9A\u8282\u70B9\u662F\u5426\u4E3A\u53F6\u5B50\u8282\u70B9\uFF0C\u4EC5\u5728\u6307\u5B9A\u4E86 lazy \u5C5E\u6027\u7684\u60C5\u51B5\u4E0B\u751F\u6548 | boolean, function(data, node) | \u2014 | \u2014 |`,"el-pagination":`[element\uFF1A${m}/#/zh-CN/component/pagination](${m}/#/zh-CN/component/pagination) 

  | \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
  | :--- | :--- | :--- | :--- | :--- |
  | small | \u662F\u5426\u4F7F\u7528\u5C0F\u578B\u5206\u9875\u6837\u5F0F | boolean | \u2014 | false |
  | background | \u662F\u5426\u4E3A\u5206\u9875\u6309\u94AE\u6DFB\u52A0\u80CC\u666F\u8272 | boolean | \u2014 | false |
  | page-size | \u6BCF\u9875\u663E\u793A\u6761\u76EE\u4E2A\u6570\uFF0C\u652F\u6301 .sync \u4FEE\u9970\u7B26 | number | \u2014 | 10 |
  | total | \u603B\u6761\u76EE\u6570 | number | \u2014 | \u2014 |
  | page-count | \u603B\u9875\u6570\uFF0Ctotal \u548C page-count \u8BBE\u7F6E\u4EFB\u610F\u4E00\u4E2A\u5C31\u53EF\u4EE5\u8FBE\u5230\u663E\u793A\u9875\u7801\u7684\u529F\u80FD\uFF1B\u5982\u679C\u8981\u652F\u6301 page-sizes \u7684\u66F4\u6539\uFF0C\u5219\u9700\u8981\u4F7F\u7528 total \u5C5E\u6027 | Number | \u2014 | \u2014 |
  | pager-count | \u9875\u7801\u6309\u94AE\u7684\u6570\u91CF\uFF0C\u5F53\u603B\u9875\u6570\u8D85\u8FC7\u8BE5\u503C\u65F6\u4F1A\u6298\u53E0 | number | \u5927\u4E8E\u7B49\u4E8E 5 \u4E14\u5C0F\u4E8E\u7B49\u4E8E 21 \u7684\u5947\u6570 | 7 |
  | current-page | \u5F53\u524D\u9875\u6570\uFF0C\u652F\u6301 .sync \u4FEE\u9970\u7B26 | number | \u2014 | 1 |
  | layout | \u7EC4\u4EF6\u5E03\u5C40\uFF0C\u5B50\u7EC4\u4EF6\u540D\u7528\u9017\u53F7\u5206\u9694 | String | sizes, prev, pager, next, jumper, ->, total, slot | 'prev, pager, next, jumper, ->, total' |
  | page-sizes | \u6BCF\u9875\u663E\u793A\u4E2A\u6570\u9009\u62E9\u5668\u7684\u9009\u9879\u8BBE\u7F6E | number[] | \u2014 | [10, 20, 30, 40, 50, 100] |
  | popper-class | \u6BCF\u9875\u663E\u793A\u4E2A\u6570\u9009\u62E9\u5668\u7684\u4E0B\u62C9\u6846\u7C7B\u540D | string | \u2014 | \u2014 |
  | prev-text | \u66FF\u4EE3\u56FE\u6807\u663E\u793A\u7684\u4E0A\u4E00\u9875\u6587\u5B57 | string | \u2014 | \u2014 |
  | next-text | \u66FF\u4EE3\u56FE\u6807\u663E\u793A\u7684\u4E0B\u4E00\u9875\u6587\u5B57 | string | \u2014 | \u2014 |
  | disabled | \u662F\u5426\u7981\u7528 | boolean | \u2014 | false |`,"el-badge":`[element\uFF1A${m}/#/zh-CN/component/badge](${m}/#/zh-CN/component/badge) 

  | \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
  | value | \u663E\u793A\u503C | string, number | \u2014 | \u2014 |
  | max | \u6700\u5927\u503C\uFF0C\u8D85\u8FC7\u6700\u5927\u503C\u4F1A\u663E\u793A '{max}+'\uFF0C\u8981\u6C42 value \u662F Number \u7C7B\u578B | number | \u2014 | \u2014 |
  | is-dot | \u5C0F\u5706\u70B9 | boolean | \u2014 | false |
  | hidden | \u9690\u85CF badge | boolean | \u2014 | false |
  | type |	\u7C7B\u578B | string |	primary / success / warning / danger / info |	\u2014 `,"el-alert":`[element\uFF1A${m}/#/zh-CN/component/alert](${m}/#/zh-CN/component/alert) 

  | \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
  | :--- | :--- | :--- | :--- | :--- |
  | title | \u6807\u9898\uFF0C\u5FC5\u9009\u53C2\u6570 | string | \u2014 | \u2014 |
  | type | \u4E3B\u9898 | string | success/warning/info/error | info |
  | description | \u8F85\u52A9\u6027\u6587\u5B57\u3002\u4E5F\u53EF\u901A\u8FC7\u9ED8\u8BA4 slot \u4F20\u5165 | string | \u2014 | \u2014 |
  | closable | \u662F\u5426\u53EF\u5173\u95ED | boolean | \u2014 | true |
  | center | \u6587\u5B57\u662F\u5426\u5C45\u4E2D | boolean | \u2014 | true |
  | close-text | \u5173\u95ED\u6309\u94AE\u81EA\u5B9A\u4E49\u6587\u672C | string | \u2014 | \u2014 |
  | show-icon | \u662F\u5426\u663E\u793A\u56FE\u6807 | boolean | \u2014 | false |

  | \u4E8B\u4EF6\u540D\u79F0 | \u8BF4\u660E | \u56DE\u8C03\u53C2\u6570 |
  | :--- | :--- | :--- |
  | close | \u5173\u95EDalert\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6 | \u2014 |`,"el-menu":`[element\uFF1A${m}/#/zh-CN/component/menu](${m}/#/zh-CN/component/menu) 

  | \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
  | :--- | :--- | :--- | :--- | :--- |
  | mode | \u6A21\u5F0F | string | horizontal / vertical | vertical |
  | collapse | \u662F\u5426\u6C34\u5E73\u6298\u53E0\u6536\u8D77\u83DC\u5355\uFF08\u4EC5\u5728 mode \u4E3A vertical \u65F6\u53EF\u7528\uFF09 | boolean | \u2014 | false |
  | background-color | \u83DC\u5355\u7684\u80CC\u666F\u8272\uFF08\u4EC5\u652F\u6301 hex \u683C\u5F0F\uFF09 | string | \u2014 | #ffffff |
  | text-color | \u83DC\u5355\u7684\u6587\u5B57\u989C\u8272\uFF08\u4EC5\u652F\u6301 hex \u683C\u5F0F\uFF09 | string | \u2014 | #303133 |
  | active-text-color | \u5F53\u524D\u6FC0\u6D3B\u83DC\u5355\u7684\u6587\u5B57\u989C\u8272\uFF08\u4EC5\u652F\u6301 hex \u683C\u5F0F\uFF09 | string | \u2014 | #409EFF |
  | default-active | \u5F53\u524D\u6FC0\u6D3B\u83DC\u5355\u7684 index | string | \u2014 | \u2014 |
  | default-openeds | \u5F53\u524D\u6253\u5F00\u7684 sub-menu \u7684 index \u7684\u6570\u7EC4 | Array | \u2014 | \u2014 |
  | unique-opened | \u662F\u5426\u53EA\u4FDD\u6301\u4E00\u4E2A\u5B50\u83DC\u5355\u7684\u5C55\u5F00 | boolean | \u2014 | false |
  | menu-trigger | \u5B50\u83DC\u5355\u6253\u5F00\u7684\u89E6\u53D1\u65B9\u5F0F(\u53EA\u5728 mode \u4E3A horizontal \u65F6\u6709\u6548) | string | hover / click | hover |
  | router | \u662F\u5426\u4F7F\u7528 vue-router \u7684\u6A21\u5F0F\uFF0C\u542F\u7528\u8BE5\u6A21\u5F0F\u4F1A\u5728\u6FC0\u6D3B\u5BFC\u822A\u65F6\u4EE5 index \u4F5C\u4E3A path \u8FDB\u884C\u8DEF\u7531\u8DF3\u8F6C | boolean | \u2014 | false |
  | collapse-transition | \u662F\u5426\u5F00\u542F\u6298\u53E0\u52A8\u753B | boolean | \u2014 | true |

  | \u4E8B\u4EF6\u540D\u79F0 | \u8BF4\u660E | \u53C2\u6570 |
  | :--- | :--- | :--- |
  | open | \u5C55\u5F00\u6307\u5B9A\u7684 sub-menu | index: \u9700\u8981\u6253\u5F00\u7684 sub-menu \u7684 index |
  | close | \u6536\u8D77\u6307\u5B9A\u7684 sub-menu | index: \u9700\u8981\u6536\u8D77\u7684 sub-menu \u7684 index |

  | \u4E8B\u4EF6\u540D\u79F0 | \u8BF4\u660E | \u56DE\u8C03\u53C2\u6570 |
  | :--- | :--- | :--- |
  | select | \u83DC\u5355\u6FC0\u6D3B\u56DE\u8C03 | index: \u9009\u4E2D\u83DC\u5355\u9879\u7684 index, indexPath: \u9009\u4E2D\u83DC\u5355\u9879\u7684 index path |
  | open | sub-menu \u5C55\u5F00\u7684\u56DE\u8C03 | index: \u6253\u5F00\u7684 sub-menu \u7684 index\uFF0C indexPath: \u6253\u5F00\u7684 sub-menu \u7684 index path |
  | close | sub-menu \u6536\u8D77\u7684\u56DE\u8C03 | index: \u6536\u8D77\u7684 sub-menu \u7684 index\uFF0C indexPath: \u6536\u8D77\u7684 sub-menu \u7684 index path |`,"el-submenu":`[element\uFF1A${m}/#/zh-CN/component/menu](${m}/#/zh-CN/component/menu) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| index | \u552F\u4E00\u6807\u5FD7 | string | \u2014 | \u2014 |
| popper-class | \u5F39\u51FA\u83DC\u5355\u7684\u81EA\u5B9A\u4E49\u7C7B\u540D | string | \u2014 | \u2014 |
| show-timeout | \u5C55\u5F00 sub-menu \u7684\u5EF6\u65F6 | number | \u2014 | 300 |
| hide-timeout | \u6536\u8D77 sub-menu \u7684\u5EF6\u65F6 | number | \u2014 | 300 |
| disabled | \u662F\u5426\u7981\u7528 | boolean | \u2014 | false |
| popper-append-to-body | \u662F\u5426\u5C06\u5F39\u51FA\u83DC\u5355\u63D2\u5165\u81F3 body \u5143\u7D20\u3002\u5728\u83DC\u5355\u7684\u5B9A\u4F4D\u51FA\u73B0\u95EE\u9898\u65F6\uFF0C\u53EF\u5C1D\u8BD5\u4FEE\u6539\u8BE5\u5C5E\u6027 | boolean | \u2014 | \u4E00\u7EA7\u5B50\u83DC\u5355\uFF1Atrue / \u975E\u4E00\u7EA7\u5B50\u83DC\u5355\uFF1Afalse |`,"el-menu-item":`[element\uFF1A${m}/#/zh-CN/component/menu](${m}/#/zh-CN/component/menu) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| index | \u552F\u4E00\u6807\u5FD7 | string | \u2014 | \u2014 |
| route | Vue Router \u8DEF\u5F84\u5BF9\u8C61 | Object | \u2014 | \u2014 |
| disabled | \u662F\u5426\u7981\u7528 | boolean | \u2014 | false |`,"el-menu-group":`[element\uFF1A${m}/#/zh-CN/component/menu](${m}/#/zh-CN/component/menu) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| title | \u5206\u7EC4\u6807\u9898 | string | \u2014 | \u2014 |`,"el-tabs":`[element\uFF1A${m}/#/zh-CN/component/tabs](${m}/#/zh-CN/component/tabs) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| type | \u98CE\u683C\u7C7B\u578B | string | card/border-card | \u2014 |
| closable | \u6807\u7B7E\u662F\u5426\u53EF\u5173\u95ED | boolean | \u2014 | false |
| addable | \u6807\u7B7E\u662F\u5426\u53EF\u589E\u52A0 | boolean | \u2014 | false |
| editable | \u6807\u7B7E\u662F\u5426\u540C\u65F6\u53EF\u589E\u52A0\u548C\u5173\u95ED | boolean | \u2014 | false |
| value | \u7ED1\u5B9A\u503C\uFF0C\u9009\u4E2D\u9009\u9879\u5361\u7684 name | string | \u2014 | \u7B2C\u4E00\u4E2A\u9009\u9879\u5361\u7684 name |
| tab-position | \u9009\u9879\u5361\u6240\u5728\u4F4D\u7F6E | string | top/right/bottom/left | top |
| stretch | \u6807\u7B7E\u7684\u5BBD\u5EA6\u662F\u5426\u81EA\u6491\u5F00 | boolean | - | false |
| before-leave | \u5207\u6362\u6807\u7B7E\u4E4B\u524D\u7684\u94A9\u5B50\uFF0C\u82E5\u8FD4\u56DE false \u6216\u8005\u8FD4\u56DE Promise \u4E14\u88AB reject\uFF0C\u5219\u963B\u6B62\u5207\u6362\u3002 | Function(activeName, oldActiveName) | \u2014 | \u2014 |

| \u4E8B\u4EF6\u540D\u79F0 | \u8BF4\u660E | \u56DE\u8C03\u53C2\u6570 |
| :--- | :--- | :--- |
| tab-click | tab \u88AB\u9009\u4E2D\u65F6\u89E6\u53D1 | \u88AB\u9009\u4E2D\u7684\u6807\u7B7E tab \u5B9E\u4F8B |
| tab-remove | \u70B9\u51FB tab \u79FB\u9664\u6309\u94AE\u540E\u89E6\u53D1 | \u88AB\u5220\u9664\u7684\u6807\u7B7E\u7684 name |
| tab-add | \u70B9\u51FB tabs \u7684\u65B0\u589E\u6309\u94AE\u540E\u89E6\u53D1 | \u2014 |
| edit | \u70B9\u51FB tabs \u7684\u65B0\u589E\u6309\u94AE\u6216 tab \u88AB\u5173\u95ED\u540E\u89E6\u53D1 | (targetName, action) |`,"el-tab-pane":`[element\uFF1A${m}/#/zh-CN/component/tabs](${m}/#/zh-CN/component/tabs) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| label | \u9009\u9879\u5361\u6807\u9898 | string | \u2014 | \u2014 |
| disabled | \u662F\u5426\u7981\u7528 | boolean | \u2014 | false |
| name | \u4E0E\u9009\u9879\u5361 activeName \u5BF9\u5E94\u7684\u6807\u8BC6\u7B26\uFF0C\u8868\u793A\u9009\u9879\u5361\u522B\u540D | string | \u2014 | \u8BE5\u9009\u9879\u5361\u5728\u9009\u9879\u5361\u5217\u8868\u4E2D\u7684\u987A\u5E8F\u503C\uFF0C\u5982\u7B2C\u4E00\u4E2A\u9009\u9879\u5361\u5219\u4E3A'1' |
| closable | \u6807\u7B7E\u662F\u5426\u53EF\u5173\u95ED | boolean | \u2014 | false |
| lazy | \u6807\u7B7E\u662F\u5426\u5EF6\u8FDF\u6E32\u67D3 | boolean | \u2014 | false |`,"el-breadcrumb":`[element\uFF1A${m}/#/zh-CN/component/breadcrumb](${m}/#/zh-CN/component/breadcrumb) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| separator | \u5206\u9694\u7B26 | string | \u2014 | \u659C\u6760'/' |
| separator-class | \u56FE\u6807\u5206\u9694\u7B26 class | string | \u2014 | - |
| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| to | \u8DEF\u7531\u8DF3\u8F6C\u5BF9\u8C61\uFF0C\u540C vue-router \u7684 to | string/object | \u2014 | \u2014 |
| replace | \u5728\u4F7F\u7528 to \u8FDB\u884C\u8DEF\u7531\u8DF3\u8F6C\u65F6\uFF0C\u542F\u7528 replace \u5C06\u4E0D\u4F1A\u5411 history \u6DFB\u52A0\u65B0\u8BB0\u5F55 | boolean | \u2014 | false |`,"el-dropdown":`[element\uFF1A${m}/#/zh-CN/component/dropdown](${m}/#/zh-CN/component/dropdown) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| type | \u83DC\u5355\u6309\u94AE\u7C7B\u578B\uFF0C\u540C Button \u7EC4\u4EF6(\u53EA\u5728split-button\u4E3A true \u7684\u60C5\u51B5\u4E0B\u6709\u6548) | string | \u2014 | \u2014 |
| size | \u83DC\u5355\u5C3A\u5BF8\uFF0C\u5728split-button\u4E3A true \u7684\u60C5\u51B5\u4E0B\u4E5F\u5BF9\u89E6\u53D1\u6309\u94AE\u751F\u6548 | string | medium / small / mini | \u2014 |
| split-button | \u4E0B\u62C9\u89E6\u53D1\u5143\u7D20\u5448\u73B0\u4E3A\u6309\u94AE\u7EC4 | boolean | \u2014 | false |
| placement | \u83DC\u5355\u5F39\u51FA\u4F4D\u7F6E | string | top/top-start/top-end/bottom/bottom-start/bottom-end | bottom-end |
| trigger | \u89E6\u53D1\u4E0B\u62C9\u7684\u884C\u4E3A | string | hover, click | hover |
| hide-on-click | \u662F\u5426\u5728\u70B9\u51FB\u83DC\u5355\u9879\u540E\u9690\u85CF\u83DC\u5355 | boolean | \u2014 | true |
| show-timeout | \u5C55\u5F00\u4E0B\u62C9\u83DC\u5355\u7684\u5EF6\u65F6\uFF08\u4EC5\u5728 trigger \u4E3A hover \u65F6\u6709\u6548\uFF09 | number | \u2014 | 250 |
| hide-timeout | \u6536\u8D77\u4E0B\u62C9\u83DC\u5355\u7684\u5EF6\u65F6\uFF08\u4EC5\u5728 trigger \u4E3A hover \u65F6\u6709\u6548\uFF09 | number | \u2014 | 150 |

| \u4E8B\u4EF6\u540D\u79F0 | \u8BF4\u660E | \u56DE\u8C03\u53C2\u6570 |
| :--- | :--- | :--- |
| click | split-button \u4E3A true \u65F6\uFF0C\u70B9\u51FB\u5DE6\u4FA7\u6309\u94AE\u7684\u56DE\u8C03 | \u2014 |
| command | \u70B9\u51FB\u83DC\u5355\u9879\u89E6\u53D1\u7684\u4E8B\u4EF6\u56DE\u8C03 | dropdown-item \u7684\u6307\u4EE4 |
| visible-change | \u4E0B\u62C9\u6846\u51FA\u73B0/\u9690\u85CF\u65F6\u89E6\u53D1 | \u51FA\u73B0\u5219\u4E3A true\uFF0C\u9690\u85CF\u5219\u4E3A false |

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| command | \u6307\u4EE4 | string/number/object | \u2014 | \u2014 |
| disabled | \u7981\u7528 | boolean | \u2014 | false |
| divided | \u663E\u793A\u5206\u5272\u7EBF | boolean | \u2014 | false |`,"el-steps":`[element\uFF1A${m}/#/zh-CN/component/steps](${m}/#/zh-CN/component/steps) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| space | \u6BCF\u4E2A step \u7684\u95F4\u8DDD\uFF0C\u4E0D\u586B\u5199\u5C06\u81EA\u9002\u5E94\u95F4\u8DDD\u3002\u652F\u6301\u767E\u5206\u6BD4\u3002 | number / string | \u2014 | \u2014 |
| direction | \u663E\u793A\u65B9\u5411 | string | vertical/horizontal | horizontal |
| active | \u8BBE\u7F6E\u5F53\u524D\u6FC0\u6D3B\u6B65\u9AA4 | number | \u2014 | 0 |
| process-status | \u8BBE\u7F6E\u5F53\u524D\u6B65\u9AA4\u7684\u72B6\u6001 | string | wait / process / finish / error / success | process |
| finish-status | \u8BBE\u7F6E\u7ED3\u675F\u6B65\u9AA4\u7684\u72B6\u6001 | string | wait / process / finish / error / success | finish |
| align-center | \u8FDB\u884C\u5C45\u4E2D\u5BF9\u9F50 | boolean | - | false |
| simple | \u662F\u5426\u5E94\u7528\u7B80\u6D01\u98CE\u683C | boolean | - | false |`,"el-step":`[element\uFF1A${m}/#/zh-CN/component/steps](${m}/#/zh-CN/component/steps) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| title | \u6807\u9898 | string | \u2014 | \u2014 |
| description | \u63CF\u8FF0\u6027\u6587\u5B57 | string | \u2014 | \u2014 |
| icon | \u56FE\u6807 | \u4F20\u5165 icon \u7684 class \u5168\u540D\u6765\u81EA\u5B9A\u4E49 icon\uFF0C\u4E5F\u652F\u6301 slot \u65B9\u5F0F\u5199\u5165 | string | \u2014 |
| status | \u8BBE\u7F6E\u5F53\u524D\u6B65\u9AA4\u7684\u72B6\u6001\uFF0C\u4E0D\u8BBE\u7F6E\u5219\u6839\u636E steps \u786E\u5B9A\u72B6\u6001 | wait / process / finish / error / success | - | - |

| name | \u8BF4\u660E |
| :--- | :--- |
| icon | \u56FE\u6807 |
| title | \u6807\u9898 |
| description | \u63CF\u8FF0\u6027\u6587\u5B57 |`,"el-dialog":`[element\uFF1A${m}/#/zh-CN/component/dialog](${m}/#/zh-CN/component/dialog) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| visible | \u662F\u5426\u663E\u793A Dialog\uFF0C\u652F\u6301 .sync \u4FEE\u9970\u7B26 | boolean | \u2014 | false |
| title | Dialog \u7684\u6807\u9898\uFF0C\u4E5F\u53EF\u901A\u8FC7\u5177\u540D slot \uFF08\u89C1\u4E0B\u8868\uFF09\u4F20\u5165 | string | \u2014 | \u2014 |
| width | Dialog \u7684\u5BBD\u5EA6 | string | \u2014 | 50% |
| fullscreen | \u662F\u5426\u4E3A\u5168\u5C4F Dialog | boolean | \u2014 | false |
| top | Dialog CSS \u4E2D\u7684 margin-top \u503C | string | \u2014 | 15vh |
| modal | \u662F\u5426\u9700\u8981\u906E\u7F69\u5C42 | boolean | \u2014 | true |
| modal-append-to-body | \u906E\u7F69\u5C42\u662F\u5426\u63D2\u5165\u81F3 body \u5143\u7D20\u4E0A\uFF0C\u82E5\u4E3A false\uFF0C\u5219\u906E\u7F69\u5C42\u4F1A\u63D2\u5165\u81F3 Dialog \u7684\u7236\u5143\u7D20\u4E0A | boolean | \u2014 | true |
| append-to-body | Dialog \u81EA\u8EAB\u662F\u5426\u63D2\u5165\u81F3 body \u5143\u7D20\u4E0A\u3002\u5D4C\u5957\u7684 Dialog \u5FC5\u987B\u6307\u5B9A\u8BE5\u5C5E\u6027\u5E76\u8D4B\u503C\u4E3A true | boolean | \u2014 | false |
| lock-scroll | \u662F\u5426\u5728 Dialog \u51FA\u73B0\u65F6\u5C06 body \u6EDA\u52A8\u9501\u5B9A | boolean | \u2014 | true |
| custom-class | Dialog \u7684\u81EA\u5B9A\u4E49\u7C7B\u540D | string | \u2014 | \u2014 |
| close-on-click-modal | \u662F\u5426\u53EF\u4EE5\u901A\u8FC7\u70B9\u51FB modal \u5173\u95ED Dialog | boolean | \u2014 | true |
| close-on-press-escape | \u662F\u5426\u53EF\u4EE5\u901A\u8FC7\u6309\u4E0B ESC \u5173\u95ED Dialog | boolean | \u2014 | true |
| show-close | \u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE | boolean | \u2014 | true |
| before-close | \u5173\u95ED\u524D\u7684\u56DE\u8C03\uFF0C\u4F1A\u6682\u505C Dialog \u7684\u5173\u95ED | function(done)\uFF0Cdone \u7528\u4E8E\u5173\u95ED Dialog | \u2014 | \u2014 |
| center | \u662F\u5426\u5BF9\u5934\u90E8\u548C\u5E95\u90E8\u91C7\u7528\u5C45\u4E2D\u5E03\u5C40 | boolean | \u2014 | false |

| name | \u8BF4\u660E |
| :--- | :--- |
| \u2014 | Dialog \u7684\u5185\u5BB9 |
| title | Dialog \u6807\u9898\u533A\u7684\u5185\u5BB9 |
| footer | Dialog \u6309\u94AE\u64CD\u4F5C\u533A\u7684\u5185\u5BB9 |

| \u4E8B\u4EF6\u540D\u79F0 | \u8BF4\u660E | \u56DE\u8C03\u53C2\u6570 |
| :--- | :--- | :--- |
| open | Dialog \u6253\u5F00\u7684\u56DE\u8C03 | \u2014 |
| opened | Dialog \u6253\u5F00\u52A8\u753B\u7ED3\u675F\u65F6\u7684\u56DE\u8C03 | \u2014 |
| close | Dialog \u5173\u95ED\u7684\u56DE\u8C03 | \u2014 |
| closed | Dialog \u5173\u95ED\u52A8\u753B\u7ED3\u675F\u65F6\u7684\u56DE\u8C03 | \u2014 |`,"el-tooltip":`[element\uFF1A${m}/#/zh-CN/component/tooltip](${m}/#/zh-CN/component/tooltip) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| effect | \u9ED8\u8BA4\u63D0\u4F9B\u7684\u4E3B\u9898 | String | dark/light | dark |
| content | \u663E\u793A\u7684\u5185\u5BB9\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 slot#content \u4F20\u5165 DOM | String | \u2014 | \u2014 |
| placement | Tooltip \u7684\u51FA\u73B0\u4F4D\u7F6E | String | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom |
| value(v-model) | \u72B6\u6001\u662F\u5426\u53EF\u89C1 | Boolean | \u2014 | false |
| disabled | Tooltip \u662F\u5426\u53EF\u7528 | Boolean | \u2014 | false |
| offset | \u51FA\u73B0\u4F4D\u7F6E\u7684\u504F\u79FB\u91CF | Number | \u2014 | 0 |
| transition | \u5B9A\u4E49\u6E10\u53D8\u52A8\u753B | String | \u2014 | el-fade-in-linear |
| visible-arrow | \u662F\u5426\u663E\u793A Tooltip \u7BAD\u5934\uFF0C\u66F4\u591A\u53C2\u6570\u53EF\u89C1Vue-popper | Boolean | \u2014 | true |
| popper-options | popper.js \u7684\u53C2\u6570 | Object | \u53C2\u8003 popper.js \u6587\u6863 | { boundariesElement: 'body', gpuAcceleration: false } |
| open-delay | \u5EF6\u8FDF\u51FA\u73B0\uFF0C\u5355\u4F4D\u6BEB\u79D2 | Number | \u2014 | 0 |
| manual | \u624B\u52A8\u63A7\u5236\u6A21\u5F0F\uFF0C\u8BBE\u7F6E\u4E3A true \u540E\uFF0Cmouseenter \u548C mouseleave \u4E8B\u4EF6\u5C06\u4E0D\u4F1A\u751F\u6548 | Boolean | \u2014 | false |
| popper-class | \u4E3A Tooltip \u7684 popper \u6DFB\u52A0\u7C7B\u540D | String | \u2014 | \u2014 |
| enterable | \u9F20\u6807\u662F\u5426\u53EF\u8FDB\u5165\u5230 tooltip \u4E2D | Boolean | \u2014 | true |
| hide-after | Tooltip \u51FA\u73B0\u540E\u81EA\u52A8\u9690\u85CF\u5EF6\u65F6\uFF0C\u5355\u4F4D\u6BEB\u79D2\uFF0C\u4E3A 0 \u5219\u4E0D\u4F1A\u81EA\u52A8\u9690\u85CF | number | \u2014 | 0 |`,"el-popover":`[element\uFF1A${m}/#/zh-CN/component/popover](${m}/#/zh-CN/component/popover) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| trigger | \u89E6\u53D1\u65B9\u5F0F | String | click/focus/hover/manual | click |
| title | \u6807\u9898 | String | \u2014 | \u2014 |
| content | \u663E\u793A\u7684\u5185\u5BB9\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 slot \u4F20\u5165 DOM | String | \u2014 | \u2014 |
| width | \u5BBD\u5EA6 | String, Number | \u2014 | \u6700\u5C0F\u5BBD\u5EA6 150px |
| placement | \u51FA\u73B0\u4F4D\u7F6E | String | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom |
| disabled | Popover \u662F\u5426\u53EF\u7528 | Boolean | \u2014 | false |
| value(v-model) | \u72B6\u6001\u662F\u5426\u53EF\u89C1 | Boolean | \u2014 | false |
| offset | \u51FA\u73B0\u4F4D\u7F6E\u7684\u504F\u79FB\u91CF | Number | \u2014 | 0 |
| transition | \u5B9A\u4E49\u6E10\u53D8\u52A8\u753B | String | \u2014 | fade-in-linear |
| visible-arrow | \u662F\u5426\u663E\u793A Tooltip \u7BAD\u5934\uFF0C\u66F4\u591A\u53C2\u6570\u53EF\u89C1Vue-popper | Boolean | \u2014 | true |
| popper-options | popper.js \u7684\u53C2\u6570 | Object | \u53C2\u8003 popper.js \u6587\u6863 | { boundariesElement: 'body', gpuAcceleration: false } |
| popper-class | \u4E3A popper \u6DFB\u52A0\u7C7B\u540D | String | \u2014 | \u2014 |
| open-delay | \u89E6\u53D1\u65B9\u5F0F\u4E3A hover \u65F6\u7684\u663E\u793A\u5EF6\u8FDF\uFF0C\u5355\u4F4D\u4E3A\u6BEB\u79D2 | Number | \u2014 | \u2014 | 

| \u53C2\u6570 | \u8BF4\u660E |
| :--- | :--- |
| \u2014 | Popover \u5185\u5D4C HTML \u6587\u672C |
| reference | \u89E6\u53D1 Popover \u663E\u793A\u7684 HTML \u5143\u7D20 |

| \u4E8B\u4EF6\u540D\u79F0 | \u8BF4\u660E | \u56DE\u8C03\u53C2\u6570 |
| :--- | :--- | :--- |
| show | \u663E\u793A\u65F6\u89E6\u53D1 | \u2014 |
| after-enter | \u663E\u793A\u52A8\u753B\u64AD\u653E\u5B8C\u6BD5\u540E\u89E6\u53D1 | \u2014 |
| hide | \u9690\u85CF\u65F6\u89E6\u53D1 | \u2014 |
| after-leave | \u9690\u85CF\u52A8\u753B\u64AD\u653E\u5B8C\u6BD5\u540E\u89E6\u53D1 | \u2014 |`,"el-card":`[element\uFF1A${m}/#/zh-CN/component/card](${m}/#/zh-CN/component/card) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| header | \u8BBE\u7F6E header\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 slot#header \u4F20\u5165 DOM | string | \u2014 | \u2014 |
| body-style | \u8BBE\u7F6E body \u7684\u6837\u5F0F | object | \u2014 | { padding: '20px' } |
| shadow | \u8BBE\u7F6E\u9634\u5F71\u663E\u793A\u65F6\u673A | string | always / hover / never | always |`,"el-carousel":`[element\uFF1A${m}/#/zh-CN/component/carousel](${m}/#/zh-CN/component/carousel) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| height | \u8D70\u9A6C\u706F\u7684\u9AD8\u5EA6 | string | \u2014 | \u2014 |
| initial-index | \u521D\u59CB\u72B6\u6001\u6FC0\u6D3B\u7684\u5E7B\u706F\u7247\u7684\u7D22\u5F15\uFF0C\u4ECE 0 \u5F00\u59CB | number | \u2014 | 0 |
| trigger | \u6307\u793A\u5668\u7684\u89E6\u53D1\u65B9\u5F0F | string | click | \u2014 |
| autoplay | \u662F\u5426\u81EA\u52A8\u5207\u6362 | boolean | \u2014 | true |
| interval | \u81EA\u52A8\u5207\u6362\u7684\u65F6\u95F4\u95F4\u9694\uFF0C\u5355\u4F4D\u4E3A\u6BEB\u79D2 | number | \u2014 | 3000 |
| indicator-position | \u6307\u793A\u5668\u7684\u4F4D\u7F6E | string | outside/none | \u2014 |
| arrow | \u5207\u6362\u7BAD\u5934\u7684\u663E\u793A\u65F6\u673A | string | always/hover/never | hover |
| type | \u8D70\u9A6C\u706F\u7684\u7C7B\u578B | string | card | \u2014 |

| \u4E8B\u4EF6\u540D\u79F0 | \u8BF4\u660E | \u56DE\u8C03\u53C2\u6570 |
| :--- | :--- | :--- |
| change | \u5E7B\u706F\u7247\u5207\u6362\u65F6\u89E6\u53D1 | \u76EE\u524D\u6FC0\u6D3B\u7684\u5E7B\u706F\u7247\u7684\u7D22\u5F15\uFF0C\u539F\u5E7B\u706F\u7247\u7684\u7D22\u5F15 |
| \u65B9\u6CD5\u540D | \u8BF4\u660E | \u53C2\u6570 |
| :--- | :--- | :--- |
| setActiveItem | \u624B\u52A8\u5207\u6362\u5E7B\u706F\u7247 | \u9700\u8981\u5207\u6362\u7684\u5E7B\u706F\u7247\u7684\u7D22\u5F15\uFF0C\u4ECE 0 \u5F00\u59CB\uFF1B\u6216\u76F8\u5E94 el-carousel-item \u7684 name \u5C5E\u6027\u503C |
| prev | \u5207\u6362\u81F3\u4E0A\u4E00\u5F20\u5E7B\u706F\u7247 | \u2014 |
| next | \u5207\u6362\u81F3\u4E0B\u4E00\u5F20\u5E7B\u706F\u7247 | \u2014 |`,"el-carousel-item":`[element\uFF1A${m}/#/zh-CN/component/carousel](${m}/#/zh-CN/component/carousel) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| name | \u5E7B\u706F\u7247\u7684\u540D\u5B57\uFF0C\u53EF\u7528\u4F5C setActiveItem \u7684\u53C2\u6570 | string | \u2014 | \u2014 |
| label | \u8BE5\u5E7B\u706F\u7247\u6240\u5BF9\u5E94\u6307\u793A\u5668\u7684\u6587\u672C | string | \u2014 | \u2014 |`,"el-collapse":`[element\uFF1A${m}/#/zh-CN/component/collapse](${m}/#/zh-CN/component/collapse) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| accordion | \u662F\u5426\u624B\u98CE\u7434\u6A21\u5F0F | boolean | \u2014 | false |
| value | \u5F53\u524D\u6FC0\u6D3B\u7684\u9762\u677F(\u5982\u679C\u662F\u624B\u98CE\u7434\u6A21\u5F0F\uFF0C\u7ED1\u5B9A\u503C\u7C7B\u578B\u9700\u8981\u4E3Astring\uFF0C\u5426\u5219\u4E3Aarray) | string/array | \u2014 | \u2014 |

| \u4E8B\u4EF6\u540D\u79F0 | \u8BF4\u660E | \u56DE\u8C03\u53C2\u6570 |
| :--- | :--- | :--- |
| change | \u5F53\u524D\u6FC0\u6D3B\u9762\u677F\u6539\u53D8\u65F6\u89E6\u53D1(\u5982\u679C\u662F\u624B\u98CE\u7434\u6A21\u5F0F\uFF0C\u53C2\u6570 activeNames \u7C7B\u578B\u4E3Astring\uFF0C\u5426\u5219\u4E3Aarray) | (activeNames: array|string) |

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| name | \u552F\u4E00\u6807\u5FD7\u7B26 | string/number | \u2014 | \u2014 |
| title | \u9762\u677F\u6807\u9898 | string | \u2014 | \u2014 |`,"el-timeline":`[element:https://element.eleme.cn/#/zh-CN/component/timeline](https://element.eleme.cn/#/zh-CN/component/timeline) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| reverse | \u6307\u5B9A\u8282\u70B9\u6392\u5E8F\u65B9\u5411\uFF0C\u9ED8\u8BA4\u4E3A\u6B63\u5E8F | boolean | \u2014 | false |`,"el-timeline-item":`[element:https://element.eleme.cn/#/zh-CN/component/timeline](https://element.eleme.cn/#/zh-CN/component/timeline) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| timestamp | \u65F6\u95F4\u6233 | string | \u2014 | - |
| hide-timestamp | \u662F\u5426\u9690\u85CF\u65F6\u95F4\u6233 | boolean | \u2014 | false |
| placement | \u65F6\u95F4\u6233\u4F4D\u7F6E | string | top / bottom | bottom |
| type | \u8282\u70B9\u7C7B\u578B | string | primary / success / warning / danger / info | - |
| color | \u8282\u70B9\u989C\u8272 | string | hsl / hsv / hex / rgb | - |
| size | \u8282\u70B9\u5C3A\u5BF8 | string | normal / large | - |
| icon | \u8282\u70B9\u56FE\u6807 | string | \u2014 | - |

| name | \u8BF4\u660E |
| :--- | :--- |
| - | Timeline-Item \u7684\u5185\u5BB9 |
| dot | \u81EA\u5B9A\u4E49\u8282\u70B9 |`,"el-divider":`[element\uFF1Ahttps://element.eleme.cn/#/zh-CN/component/divider](https://element.eleme.cn/#/zh-CN/component/divider) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| direction | \u8BBE\u7F6E\u5206\u5272\u7EBF\u65B9\u5411 | string | horizontal / vertical | horizontal |
| content-position | \u8BBE\u7F6E\u5206\u5272\u7EBF\u6587\u6848\u7684\u4F4D\u7F6E | string | left / right / center | center |`,"el-calendar":`[element\uFF1Ahttps://element.eleme.cn/#/zh-CN/component/calendar](https://element.eleme.cn/#/zh-CN/component/calendar) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| value / v-model | \u7ED1\u5B9A\u503C | string | Date/string/number | - |
| range | \u65F6\u95F4\u8303\u56F4\uFF0C\u5305\u62EC\u5F00\u59CB\u65F6\u95F4\u4E0E\u7ED3\u675F\u65F6\u95F4.\u5F00\u59CB\u65F6\u95F4\u5FC5\u987B\u662F\u5468\u4E00\uFF0C\u7ED3\u675F\u65F6\u95F4\u5FC5\u987B\u662F\u5468\u65E5\uFF0C\u4E14\u65F6\u95F4\u8DE8\u5EA6\u4E0D\u80FD\u8D85\u8FC7\u4E24\u4E2A\u6708\u3002 | Array | - |
| first-day-of-week | \u5468\u8D77\u59CB\u65E5 | Number | 1 \u5230 7 | 1 |`,"el-image":`[element\uFF1Ahttps://element.eleme.cn/#/zh-CN/component/image](https://element.eleme.cn/#/zh-CN/component/image) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| src | \u56FE\u7247\u6E90\uFF0C\u540C\u539F\u751F | string | - | - |
| fit | \u786E\u5B9A\u56FE\u7247\u5982\u4F55\u9002\u5E94\u5BB9\u5668\u6846\uFF0C\u540C\u539F\u751F object-fit | string | fill / contain / cover / none / scale-down | - |
| alt | \u539F\u751F alt | string | - | - |
| referrer-policy | \u539F\u751F referrerPolicy | string | - | - |
| lazy | \u662F\u5426\u5F00\u542F\u61D2\u52A0\u8F7D | boolean | - | false |
| scroll-container | \u5F00\u542F\u61D2\u52A0\u8F7D\u540E\uFF0C\u76D1\u542C scroll \u4E8B\u4EF6\u7684\u5BB9\u5668 | string / HTMLElement | - | \u6700\u8FD1\u4E00\u4E2A overflow \u503C\u4E3A auto \u6216 scroll \u7684\u7236\u5143\u7D20 |
| preview-src-list | \u5F00\u542F\u56FE\u7247\u9884\u89C8\u529F\u80FD | Array | - | - |
| z-index | \u8BBE\u7F6E\u56FE\u7247\u9884\u89C8\u7684 z-index | Number | - | - |

| \u4E8B\u4EF6\u540D\u79F0 | \u8BF4\u660E | \u56DE\u8C03\u51FD\u6570 |
| :--- | :--- | :--- |
| load | \u56FE\u7247\u52A0\u8F7D\u6210\u529F\u89E6\u53D1 | (e: Event) |
| error | \u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u89E6\u53D1 | (e: Error) |

| slot\u540D\u79F0 | \u8BF4\u660E |
| :--- | :--- |
| placeholder | \u56FE\u7247\u672A\u52A0\u8F7D\u7684\u5360\u4F4D\u5185\u5BB9 |
| error | \u52A0\u8F7D\u5931\u8D25\u7684\u5185\u5BB9 |`,"el-backtop":`[element\uFF1Ahttps://element.eleme.cn/#/zh-CN/component/backtop](https://element.eleme.cn/#/zh-CN/component/backtop) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| target | \u89E6\u53D1\u6EDA\u52A8\u7684\u5BF9\u8C61 | string | Date/string/number | - |
| visibility-height | \u6EDA\u52A8\u9AD8\u5EA6\u8FBE\u5230\u6B64\u53C2\u6570\u503C\u624D\u51FA\u73B0 | number | 200 |
| right | \u63A7\u5236\u5176\u663E\u793A\u4F4D\u7F6E, \u8DDD\u79BB\u9875\u9762\u53F3\u8FB9\u8DDD | number | 40 |
| bottom | \u63A7\u5236\u5176\u663E\u793A\u4F4D\u7F6E, \u8DDD\u79BB\u9875\u9762\u5E95\u90E8\u8DDD\u79BB | number | 40 |

| \u4E8B\u4EF6 | \u8BF4\u660E | \u56DE\u8C03\u53C2\u6570 |
| :--- | :--- | :--- |
| click | \u70B9\u51FB\u6309\u94AE\u89E6\u53D1\u7684\u4E8B\u4EF6 | \u70B9\u51FB\u4E8B\u4EF6 |`,"el-drawer":`[element\uFF1Ahttps://element.eleme.cn/#/zh-CN/component/drawer](https://element.eleme.cn/#/zh-CN/component/drawer) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| append-to-body | Drawer \u81EA\u8EAB\u662F\u5426\u63D2\u5165\u81F3 body \u5143\u7D20\u4E0A\u3002\u5D4C\u5957\u7684 Drawer \u5FC5\u987B\u6307\u5B9A\u8BE5\u5C5E\u6027\u5E76\u8D4B\u503C\u4E3A true | boolean | - | false |
| before-close | \u5173\u95ED\u524D\u7684\u56DE\u8C03\uFF0C\u4F1A\u6682\u505C Drawer \u7684\u5173\u95ED | function(done)\uFF0Cdone \u7528\u4E8E\u5173\u95ED Drawer | - | - |
| close-on-press-escape | \u662F\u5426\u53EF\u4EE5\u901A\u8FC7\u6309\u4E0B ESC \u5173\u95ED Drawer | boolean | - | true |
| custom-class	 | Drawer \u7684\u81EA\u5B9A\u4E49\u7C7B\u540D | string | - | - |
| destroy-on-close | \u63A7\u5236\u662F\u5426\u5728\u5173\u95ED Drawer \u4E4B\u540E\u5C06\u5B50\u5143\u7D20\u5168\u90E8\u9500\u6BC1 | boolean | - | false |
| modal | \u662F\u5426\u9700\u8981\u906E\u7F69\u5C42 | boolean | - | true |
| modal-append-to-body | \u906E\u7F69\u5C42\u662F\u5426\u63D2\u5165\u81F3 body \u5143\u7D20\u4E0A\uFF0C\u82E5\u4E3A false\uFF0C\u5219\u906E\u7F69\u5C42\u4F1A\u63D2\u5165\u81F3 Drawer \u7684\u7236\u5143\u7D20\u4E0A | boolean | - | true |
| direction | Drawer \u6253\u5F00\u7684\u65B9\u5411 | Direction | rtl / ltr / ttb / tbb | rtl |
| show-close | \u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE | boolean | - | true |
| size | Drawer \u7A97\u4F53\u7684\u5927\u5C0F, \u5F53\u4F7F\u7528 number \u7C7B\u578B\u65F6, \u4EE5\u50CF\u7D20\u4E3A\u5355\u4F4D, \u5F53\u4F7F\u7528 string \u7C7B\u578B\u65F6, \u8BF7\u4F20\u5165 'x%', \u5426\u5219\u4FBF\u4F1A\u4EE5 number \u7C7B\u578B\u89E3\u91CA | number / string | - | 30% |
| title | Drawer \u7684\u6807\u9898\uFF0C\u4E5F\u53EF\u901A\u8FC7\u5177\u540D slot \uFF08\u89C1\u4E0B\u8868\uFF09\u4F20\u5165 | string | - | - |
| visible | \u662F\u5426\u663E\u793A Drawer\uFF0C\u652F\u6301 .sync \u4FEE\u9970\u7B26 | boolean | - | false |
| wrapperClosable | \u70B9\u51FB\u906E\u7F69\u5C42\u662F\u5426\u53EF\u4EE5\u5173\u95ED Drawer | boolean | - | true |

| slot\u540D\u79F0 | \u8BF4\u660E |
| :--- | :--- |
| - | Drawer \u7684\u5185\u5BB9 |
| title | Drawer \u6807\u9898\u533A\u7684\u5185\u5BB9 |

| \u4E8B\u4EF6 | \u8BF4\u660E | \u56DE\u8C03\u53C2\u6570 |
| :--- | :--- | :--- |
| open | Drawer \u6253\u5F00\u7684\u56DE\u8C03 | - |
| opened | Drawer \u6253\u5F00\u52A8\u753B\u7ED3\u675F\u65F6\u7684\u56DE\u8C03 | - |
| close | Drawer \u5173\u95ED\u7684\u56DE\u8C03 | - |
| closed | Drawer \u5173\u95ED\u52A8\u753B\u7ED3\u675F\u65F6\u7684\u56DE\u8C03 | - |`})});var gs=P(vi=>{"use strict";Object.defineProperty(vi,"__esModule",{value:!0});var ro=cs(),oo=ps(),ao=ds(),no=us(),lo=hs();vi.default={tag:oo.default,jsTag:ro.default,globalAttribute:ao.default,attribute:no.default,document:lo.default}});var ms=P(yi=>{"use strict";Object.defineProperty(yi,"__esModule",{value:!0});var A=require("vscode");yi.default=i=>({"el-button":'<el-button type="primary">$1</el-button>',"el-button:plain":'<el-button type="primary" plain>$1</el-button>',"el-button:round":'<el-button type="primary" round>$1</el-button>',"el-button:circle":'<el-button type="primary" circle>$1</el-button>',"el-button:disabled":'<el-button type="primary" disabled>$1</el-button>',"el-button:link":'<el-button type="primary" link>$1</el-button>',"el-button:text":'<el-button type="primary" text>$1</el-button>',"el-button:icon":'<el-button type="primary" :icon="$1">$2</el-button>',"el-button:loading":'<el-button type="primary" :loading="$1">$2</el-button>',"el-button-group":`<el-button-group>
${i}<el-button type="primary">$1</el-button>
${i}<el-button type="primary">$2</el-button>
</el-button-group>`,"el-container":"<el-container>$1</el-container>","el-header":"<el-header>$1</el-header>","el-main":"<el-main>$1</el-main>","el-footer":"<el-footer>$1</el-footer>","el-aside":'<el-aside width="200px">$1</el-aside>',"el-row":`<el-row>
${i}<el-col :span="\${1:24}">$2</el-col>
</el-row>`,"el-col":'<el-col :span="${1:8}">$2</el-col>',"el-link":'<el-link type="primary">$1</el-link>',"el-text":"<el-text>$1</el-text>","el-text:truncated":"<el-text truncated>$1</el-text>","el-scrollbar":`<el-scrollbar height="\${1:400px}" @scroll="\${2:scroll}">
${i}$3
</el-scrollbar>`,"el-space":`<el-space wrap>
${i}$1
</el-space>`,"el-space:vertical":`<el-space direction="vertical">
${i}$1
</el-space>`,"el-space:size":`<el-space :size="\${1:size}">
${i}$2
</el-space>`,"el-space:spacer":`<el-space spacer="\${1:|}">
${i}$2
</el-space>`,"el-space:fill":`<el-space :fill="\${1:fill}" wrap>
${i}$2
</el-space>`,"el-config-provider":`<el-config-provider :locale="\${1:locale}">
${i}$2
</el-config-provider>`,"el-autocomplete":`<el-autocomplete v-model="\${1:value}" :fetch-suggestions="querySearch" clearable placeholder="${A.l10n.t("placeholder")}" @select="handleSelect" />`,"el-autocomplete:template":`<el-autocomplete
${i}v-model="\${1:value}"
${i}:fetch-suggestions="querySearch"
${i}placeholder="${A.l10n.t("placeholder")}"
${i}@select="handleSelect"
>
${i}<template #default="{ item }">
${i}</template>
</el-autocomplete>`,"el-cascader":'<el-cascader v-model="${1:value}" :options="options" @change="handleChange" clearable filterable />',"el-cascader:last-level":'<el-cascader v-model="${1:value}" :options="options" @change="handleChange" clearable filterable :show-all-levels="false" />',"el-cascader:multiple":'<el-cascader v-model="${1:value}" :options="options" @change="handleChange" clearable filterable :props="{ multiple: true }" />',"el-cascader:strictly":'<el-cascader v-model="${1:value}" :options="options" @change="handleChange" clearable filterable :props="{ checkStrictly: true }" />',"el-checkbox":'<el-checkbox v-model="${1:checked}">$2</el-checkbox>',"el-checkbox:disabled":'<el-checkbox v-model="${1:checked}" disabled>$2</el-checkbox>',"el-checkbox-group":`<el-checkbox-group v-model="\${1:checkList}">
${i}<el-checkbox label="\${2:label}" value="\${3:value}"></el-checkbox>
</el-checkbox-group>`,"el-checkbox-group:for":`<el-checkbox-group v-model="\${1:checkList}">
${i}<el-checkbox v-for="item in \${2:options}" :label="item.label" :value="item.value"></el-checkbox>
</el-checkbox-group>`,"el-color-picker":'<el-color-picker v-model="${1:color}" />',"el-color-picker:alpha":'<el-color-picker v-model="${1:color}" show-alpha />',"el-color-picker:predefine":'<el-color-picker v-model="${1:color}" show-alpha :predefine="${2:predefineColors}" />',"el-date-picker":`<el-date-picker v-model="\${1:value}" type="\${2:date}" placeholder="${A.l10n.t("el-date-picker:placeholder")}" />`,"el-date-picker:shortcuts":`<el-date-picker v-model="\${1:value}" type="\${2:date}" placeholder="${A.l10n.t("el-date-picker:placeholder")}" :shortcuts="\${3:shortcuts}" />`,"el-date-picker:range":`<el-date-picker v-model="\${1:value}" type="\${2:daterange}" range-separator="\${3:${A.l10n.t("el-date-picker.to")}}" start-placeholder="${A.l10n.t("el-date-picker.start-placeholder")}" end-placeholder="${A.l10n.t("el-date-picker.end-placeholder")}" />`,"el-datetime-picker":`<el-date-picker v-model="\${1:value}" type="\${2:datetime}" placeholder="${A.l10n.t("el-date-picker:placeholder")}" />`,"el-datetime-picker:shortcuts":`<el-date-picker v-model="\${1:value}" type="\${2:datetime}" placeholder="${A.l10n.t("el-date-picker:placeholder")}" :shortcuts="\${3:shortcuts}" />`,"el-datetime-picker:range":`<el-date-picker v-model="\${1:value}" type="\${2:datetimerange}" range-separator="\${3:${A.l10n.t("el-date-picker.to")}}" start-placeholder="${A.l10n.t("el-date-picker.start-placeholder")}" end-placeholder="${A.l10n.t("el-date-picker.end-placeholder")}" />`,"el-form":`<el-form :model="\${1:form}" :rules="\${2:rules}" label-width="auto">
${i}$3
</el-form>`,"el-form:inline":`<el-form :inline="true" :model="\${1:form}" :rules="\${2:rules}" label-width="auto">
${i}$3
</el-form>`,"el-form-item":`<el-form-item label="\${1:name}">
${i}$2
</el-form-item>`,"el-form-item:required":`<el-form-item label="\${1:name}" required>
${i}$2
</el-form-item>`,"el-input":`<el-input v-model="\${1:value}" placeholder="${A.l10n.t("placeholder")}" clearable>$2</el-input>`,"el-input:textarea":`<el-input v-model="\${1:textarea}" type="textarea" :rows="2" placeholder="${A.l10n.t("placeholder")}" clearable />`,"el-input:textarea.limit":`<el-input v-model="\${1:textarea}" type="textarea" :rows="2" placeholder="${A.l10n.t("placeholder")}" clearable maxlength="$2" show-word-limit />`,"el-input:prepend[slot]":"<template #prepend>$1</template>","el-input:append[slot]":"<template #append>$1</template>","el-input-number":'<el-input-number v-model="${1:num}" :min="${2:1}" :max="${3:10}" />',"el-input-number:step":'<el-input-number v-model="${1:num}" :min="${2:1}" :max="${3:10}" :step="${4:2}" />',"el-radio-group":`<el-radio-group v-model="\${1:radio}">
${i}<el-radio value="$2">$3</el-radio>
</el-radio-group>`,"el-radio-group:for":`<el-radio-group v-model="\${1:radio}">
${i}<el-radio v-for="item in \${2:radios}" :value="item.value">{{ item.label }}</el-radio>
</el-radio-group>`,"el-radio":'<el-radio :value="$1">$2</el-radio>',"el-radio-button":'<el-radio-button label="$1" value="$2"></el-radio-button>',"el-rate":'<el-rate v-model="${1:value}" />',"el-rate:show-text":`<el-rate v-model="\${1:value}" texts="['oops', 'disappointed', 'normal', 'good', 'great']" show-text />`,"el-rate:allow-half":'<el-rate v-model="${1:value}" allow-half />',"el-select":`<el-select v-model="\${1:value}" placeholder="${A.l10n.t("placeholder:select")}" filterable clearable>
${i}<el-option label="$2" value="$3" />$4
</el-select>`,"el-select:for":`<el-select v-model="\${1:value}" placeholder="${A.l10n.t("placeholder:select")}" filterable clearable>
${i}<el-option v-for="item in \${2:options}" :key="item.value" :label="item.label" :value="item.value" />
</el-select>`,"el-option":'<el-option label="$1" value="$2" />',"el-select:header[slot]":`<template #header>
${i}$1
</template>`,"el-select:footer[slot]":`<template #footer>
${i}$1
</template>`,"el-option-group":`<el-option-group v-for="group in \${1:options}" :key="group.label" :label="group.label">
${i}<el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value" />
</el-option-group>`,"el-select-v2":`<el-select-v2 v-model="\${1:value}" :options="\${2:options}" placeholder="${A.l10n.t("placeholder:select")}" filterable clearable >$3</el-select-v2>`,"el-select-v2:multiple":`<el-select-v2 v-model="\${1:value}" :options="\${2:options}" placeholder="${A.l10n.t("placeholder:select")}" filterable clearable multiple >$3</el-select-v2>`,"el-select-v2:header[slot]":`<template #header>
${i}$1
</template>`,"el-select-v2:footer[slot]":`<template #footer>
${i}$1
</template>`,"el-slider":'<el-slider v-model="${1:value}" />',"el-slider:show-input":'<el-slider v-model="${1:value}" show-input />',"el-slider:step":'<el-slider v-model="${1:value}" :step="${2:10}" />',"el-slider:range":'<el-slider v-model="${1:value}" range show-stops :max="${2:10}" />',"el-slider:marks":'<el-slider v-model="${1:value}" range :marks="${2:marks}" />',"el-switch":'<el-switch v-model="${1:value}" />',"el-switch:text":'<el-switch v-model="${1:value}" active-text="$2" inactive-text="$3" />',"el-switch:value":'<el-switch v-model="${1:value}" active-value="$2" inactive-value="$3" />',"el-time-picker":`<el-time-picker v-model="\${1:value}" placeholder="${A.l10n.t("placeholder:time")}" />`,"el-time-picker:range":`<el-time-picker v-model="\${1:value}" is-range range-separator="${A.l10n.t("el-time-picker.to")}" start-placeholder="${A.l10n.t("el-time-picker.start-placeholder")}" end-placeholder="${A.l10n.t("el-time-picker.end-placeholder")}" />`,"el-time-select":`<el-time-select v-model="\${1:value}" start="08:30" step="00:15" end="18:30" placeholder="${A.l10n.t("el-time-select.placeholder")}" />`,"el-transfer":'<el-transfer v-model="${1:value}" :data="${2:data}" />',"el-transfer:filter":`<el-transfer v-model="\${1:value}" filterable :filter-method="\${2:filterMethod}" filter-placeholder="${A.l10n.t("el-transfer.placeholder")}" :data="\${3:data}" />" />`,"el-upload":`<el-upload v-model:file-list="fileList" action="" multiple :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" :limit="3" :on-exceed="handleExceed" >
${i}<el-button type="primary">$1</el-button>$2
</el-upload>`,"el-upload:tip[slot]":`<template #tip>
${i}$1
</template>`,"el-upload:trigger[slot]":`<template #trigger>
${i}$1
</template>`,"el-upload:avatar":`<el-upload action="" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload" >
${i}<img v-if="imageUrl" :src="imageUrl" />
${i}<el-icon v-else><Plus /></el-icon>
</el-upload>`,"el-upload:list":`<el-upload v-model:file-list="fileList" action="" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove" >
${i}<el-icon><Plus /></el-icon>
</el-upload>`,"el-upload:drag":`<el-upload drag action="" multiple >
${i}<el-icon class="el-icon--upload"><upload-filled /></el-icon>
${i}<div class="el-upload__text"> ${A.l10n.t("el-upload.drop")} <em>${A.l10n.t("el-upload.click")}</em> </div>
</el-upload>`,"el-avatar":'<el-avatar :src="${1:url}">$2</el-avatar>',"el-avatar:square":'<el-avatar shape="square" :src="${1:url}">$2</el-avatar>',"el-badge":'<el-badge :value="$1">$2</el-badge>',"el-badge:is-dot":"<el-badge is-dot></el-badge>","el-calendar":'<el-calendar v-model="${1:value}">$2</el-calendar>',"el-calendar:cell[slot]":`<template #date-cell="{ data }">
${i}$1
</template>`,"el-card":`<el-card>
${i}$1
</el-card>`,"el-card:header[slot]":`<template #header>
${i}$1
</template>`,"el-card:footer[slot]":`<template #footer>
${i}$1
</template>`,"el-carousel":`<el-carousel :interval="4000" height="\${1:150px}">
${i}<el-carousel-item v-for="item in \${2:carouselList}" :key="item">
${i}${i}$3
${i}</el-carousel-item>
</el-carousel>`,"el-carousel:card":`<el-carousel :interval="4000" type="card" height="\${1:150px}">
${i}<el-carousel-item v-for="item in \${2:carouselList}" :key="item">
${i}${i}$3
${i}</el-carousel-item>
</el-carousel>`,"el-collapse":`<el-collapse v-model="\${1:activeNames}" @change="handleChange">
${i}<el-collapse-item title="$2" name="$3">
${i}${i}$4
${i}</el-collapse-item>$5
</el-collapse>`,"el-collapse:accordion":`<el-collapse v-model="\${1:activeNames}" accordion @change="handleChange">
${i}<el-collapse-item title="$2" name="$3">
${i}${i}$4
${i}</el-collapse-item>$5
</el-collapse>`,"el-collapse-item":`<el-collapse-item title="$1" name="$2">
${i}$3
</el-collapse-item>`,"el-descriptions":`<el-descriptions title="$1">
${i}<el-descriptions-item label="$2">$3</el-descriptions-item>$4
</el-descriptions>`,"el-descriptions:extra[slot]":`<template #extra>
${i}$1
</template>`,"el-descriptions-item":'<el-descriptions-item label="$1">$2</el-descriptions-item>',"el-descriptions-item:label[slot]":`<template #label>
${i}$1
</template>`,"el-empty":'<el-empty description="$1">$2</el-empty>',"el-image":'<el-image :src="$1" fit="fill" />',"el-image:placeholder[slot]":`<template #placeholder>
${i}$1
</template>`,"el-image:error[slot]":`<template #error>
${i}$1
</template>`,"el-image:lazy":'<el-image v-for="url in ${1:urls}" :key="url" :src="url" lazy />',"el-image:preview":'el-image :src="url" :zoom-rate="1.2" :max-scale="7" :min-scale="0.2" :preview-src-list="srcList" :initial-index="4" fit="cover" />',"el-pagination":`<el-pagination
${i}v-model:current-page="currentPage"
${i}v-model:page-size="pageSize"
${i}:page-sizes="[10, 20, 50, 100, 200]"
${i}layout="total, sizes, prev, pager, next, jumper"
${i}:total="total"
${i}@size-change="handleSizeChange"
${i}@current-change="handleCurrentChange">
</el-pagination>`,"el-progress":'<el-progress :percentage="$1"></el-progress>',"el-progress:inside":'<el-progress :text-inside="true" :stroke-width="$1" :percentage="$2"></el-progress>',"el-progress:circle":'<el-progress type="circle" :percentage="$1"></el-progress>',"el-progress:dashboard":'<el-progress type="dashboard" :percentage="${1:percentage}" :color="${2:colors}"></el-progress>',"el-progress:default[slot]":`<template #default="{ percentage }">
${i}$1
</template>`,"el-result":`<el-result icon="\${1:success}" title="\${2:Success}" sub-title="\${3:Please follow the instructions}">
${i}<template #extra>
${i}${i}<el-button type="primary">Back</el-button>
${i}</template>
</el-result>`,"el-result:extra[slot]":`<template #extra>
${i}$1
</template>`,"el-result:icon[slot]":`<template #icon>
${i}$1
</template>`,"el-skeleton":'<el-skeleton :rows="${1:5}">$2</el-skeleton>',"el-skeleton:template[slot]":`<template #template>
${i}$1
</template>`,"el-skeleton-item:circle":'<el-skeleton-item variant="circle" />',"el-skeleton-item:p":'<el-skeleton-item variant="p" />',"el-skeleton-item:text":'<el-skeleton-item variant="text" />',"el-skeleton-item:image":'<el-skeleton-item variant="image" />',"el-table":`<el-table :data="\${1:tableData}" style="width: 100%">
${i}<el-table-column label="$2" prop="$3" width="$4">$5</el-table-column>$6
</el-table>`,"el-table:stripe":`<el-table :data="\${1:tableData}" stripe style="width: 100%">
${i}<el-table-column label="$2" prop="$3" width="$4">$5</el-table-column>$6
</el-table>`,"el-table-column":'<el-table-column label="$1" prop="$2" width="$3">$4</el-table-column>',"el-table-column:filter":'<el-table-column label="$1" prop="$2" width="$3" :filters="${4:filters}" :filter-method="${5:filterHandler}">$6</el-table-column>',"el-table-column:sortable":'<el-table-column label="$1" prop="$2" width="$3" sortable>$4</el-table-column>',"el-table-column:fixed":'<el-table-column fixed="${1:left}" label="$2" prop="$3" width="$4">$5</el-table-column>',"el-table-column:select":`<el-table ref="multipleTableRef" :data="\${1:tableData}" style="width: 100%" @selection-change="\${2:handleSelectionChange}" >
${i}<el-table-column type="selection" width="55"></el-table-column>$3
</el-table>`,"el-table-column:default[slot]":`<template #default="scope">
${i}$1
</template>`,"el-table-column:header[slot]":`<template #header>
${i}$1
</template>`,"el-table-column:expand":`<el-table-column type="expand">
${i}<template #default="props">
${i}${i}$1
${i}</template>
</el-table-column>`,"el-table:tree":`<el-table :data="\${1:tableData}" style="width: 100%" row-key="\${2:id}" border lazy :load="load" :tree-props="{ children: 'children', hasChildren: 'hasChildren' }">
${i}$3
</el-table>`,"el-table-v2":'<el-table-v2 :columns="${1:columns}" :data="${2:data}" :width="700" :height="400" fixed>$3</el-table-v2>',"el-table-v2:row[slot]":`<template #row="props">
${i}$1
</template>`,"el-table-v2:header[slot]":`<template #header>
${i}$1
</template>`,"el-table-v2:header-cell[slot]":`<template #header-cell>
${i}$1
</template>`,"el-table-v2:footer[slot]":`<template #footer>
${i}$1
</template>`,"el-table-v2:empty[slot]":`<template #empty>
${i}$1
</template>`,"el-table-v2:overlay[slot]":`<template #overlay>
${i}$1
</template>`,"el-tag":' <el-tag type="${1:success}">$2</el-tag>',"el-tag:effect":' <el-tag type="${1:success}" effect="${2:dark}">$3</el-tag>',"el-tag:closable":' <el-tag type="${1:success}" closable>$2</el-tag>',"el-tag:round":' <el-tag type="${1:success}" round>$2</el-tag>',"el-check-tag":'<el-check-tag :checked="${1:checked}" @change="${2:onChange}">$3</el-check-tag>',"el-timeline":`<el-timeline>
${i}$1
</el-timeline>`,"el-timeline:for":`<el-timeline>
<el-timeline-item
  v-for="(activity, index) in \${1:activities}"
  :key="index"
  :timestamp="activity.timestamp"
>
  {{ \${2:activity.content} }}
</el-timeline-item>
</el-timeline>`,"el-timeline-item":`<el-timeline-item timestamp="$1">
${i}$2
</el-timeline-item>`,"el-timeline-item:center":`<el-timeline-item timestamp="$1" center>
${i}$2
</el-timeline-item>`,"el-tour":`<el-tour v-model="\${1:open}">
${i}$2
</el-tour>`,"el-tour-step":`<el-tour-step :target="\${1:tourRef}?.\\$el" title="$2">
${i}$3
</el-tour-step>`,"el-tour:indicators[slot]":`<template #indicators="{ current, total }">
${i}$1
</template>`,"el-tree":'<el-tree :data="${1:data}" :props="${2:treeProps}" @node-click="${3:handleNodeClick}">$4</el-tree>',"el-tree:accordion":'<el-tree :data="${1:data}" :props="${2:treeProps}" accordion @node-click="${3:handleNodeClick}">$4</el-tree>',"el-tree:show-checkbox":'<el-tree :data="${1:data}" :props="${2:treeProps}" show-checkbox @node-click="${3:handleNodeClick}">$4</el-tree>',"el-tree:lazy":'<el-tree :load="${1:loadNode}" lazy :props="${2:treeProps}" show-checkbox @node-click="${3:handleNodeClick}">$4</el-tree>',"el-tree:default[slot]":`<template #default="{ node, data }">
${i}$1
</template>`,"el-tree:draggable":`<el-tree :allow-drop="allowDrop" :allow-drag="allowDrag" :data="data" draggable default-expand-all node-key="id"
${i}@node-drag-start="handleDragStart" @node-drag-enter="handleDragEnter" @node-drag-leave="handleDragLeave" @node-drag-over="handleDragOver" @node-drag-end="handleDragEnd" @node-drop="handleDrop">
</el-tree>`,"el-tree-select":'<el-tree-select v-model="${1:value}" :data="${2:data}" :render-after-expand="false">$3</el-tree-select>',"el-tree-select:lazy":'<el-tree-select v-model="${1:value}" lazy :load="${2:load}" :props="${3:props}">$4</el-tree-select>',"el-tree-select:multiple":'<el-tree-select v-model="${1:value}" :data="${2:data}" filterable clearable multiple :render-after-expand="false">$3</el-tree-select>',"el-tree-select:check-strictly":'<el-tree-select v-model="${1:value}" :data="${2:data}" filterable clearable check-strictly :render-after-expand="false">$3</el-tree-select>',"el-tree-select:show-checkbox":'<el-tree-select v-model="${1:value}" :data="${2:data}" filterable clearable :render-after-expand="false" show-checkbox>$3</el-tree-select>',"el-tree-v2":'<el-tree-v2 :data="${1:data}" :props="${2:props}">$3</el-tree-v2>',"el-tree-v2:show-checkbox":'<el-tree-v2 :data="${1:data}" :props="${2:props}" show-checkbox>$3</el-tree-v2>',"el-tree-v2:default[slot]":`<template #default="{ node }">
${i}$1
</template>`,"el-statistic":'<el-statistic title="$1" :value="$2">$3</el-statistic>',"el-statistic:title[slot]":`<template #title>
${i}$1
</template>`,"el-statistic:suffix[slot]":`<template #suffix>
${i}$1
</template>`,"el-countdown":'<el-countdown title="$1" :value="$2">$3</el-countdown>',"el-countdown:format":'<el-countdown title="$1" :value="$2" format="HH:mm:ss">$3</el-countdown>',"el-countdown:title[slot]":`<template #title>
${i}$1
</template>`,"el-countdown:suffix[slot]":`<template #suffix>
${i}$1
</template>`,"el-segmented":'<el-segmented v-model="${1:value}" :options="${2:options}">$3</el-segmented>',"el-segmented:block":'<el-segmented v-model="${1:value}" :options="${2:options}" block>$3</el-segmented>',"el-segmented:default[slot]":`<template #default="{ item }">
${i}$1
</template>`,"el-affix":`<el-affix :offset="$1">
${i}$2
</el-affix>`,"el-affix:target":`<el-affix :offset="$1" target="$2">
${i}$3
</el-affix>`,"el-affix:position":`<el-affix :offset="$1" position="\${2:bottom}">
${i}$3
</el-affix>`,"el-anchor":`<el-anchor>
${i}<el-anchor-link :href="$1">
${i}${i}$2
${i}</el-anchor-link>$3
</el-anchor>`,"el-anchor:horizontal":`<el-anchor direction="horizontal">
${i}<el-anchor-link :href="$1">
${i}${i}$2
${i}</el-anchor-link>$3
</el-anchor>`,"el-anchor-link":`<el-anchor-link :href="$1">
${i}$2
</el-anchor-link>`,"el-anchor-link:sub-link[slot]":`<template #sub-link>
${i}$1
</template>`,"el-backtop":'<el-backtop :right="100" :bottom="100">$1</el-backtop>',"el-breadcrumb":`<el-breadcrumb separator="\${1:/}">
${i}$2
</el-breadcrumb>`,"el-breadcrumb-item":"<el-breadcrumb-item>$1</el-breadcrumb-item>","el-breadcrumb-item:to":`<el-breadcrumb-item :to="{ path: '\${1:/}' }">$2</el-breadcrumb-item>`,"el-dropdown":`<el-dropdown>
${i}$1<el-button type="primary">
${i}${i}Dropdown <el-icon class="el-icon--right"><arrow-down /></el-icon>
${i}</el-button>
${i}<template #dropdown>
${i}${i}<el-dropdown-menu>
${i}${i}${i}<el-dropdown-item>$2</el-dropdown-item>
${i}${i}</el-dropdown-menu>
${i}</template>
</el-dropdown>`,"el-dropdown:trigger":`<el-dropdown trigger="click">
${i}$1<el-button type="primary">
${i}${i}Dropdown <el-icon class="el-icon--right"><arrow-down /></el-icon>
${i}</el-button>
${i}<template #dropdown>
${i}${i}<el-dropdown-menu>
${i}${i}${i}<el-dropdown-item>$2</el-dropdown-item>
${i}${i}</el-dropdown-menu>
${i}</template>
</el-dropdown>`,"el-dropdown:command":`<el-dropdown @command="\${1:handleCommand}">
${i}$2<el-button type="primary">
${i}${i}Dropdown <el-icon class="el-icon--right"><arrow-down /></el-icon>
${i}</el-button>
${i}<template #dropdown>
${i}${i}<el-dropdown-menu>
${i}${i}${i}<el-dropdown-item command="$3">$4</el-dropdown-item>
${i}${i}</el-dropdown-menu>
${i}</template>
</el-dropdown>`,"el-dropdown-item":"<el-dropdown-item>$1</el-dropdown-item>","el-dropdown-item:command":'<el-dropdown-item command="$1">$2</el-dropdown-item>',"el-menu":`<el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
${i}$1
</el-menu>`,"el-menu-item":'<el-menu-item index="$1">$2</el-menu-item>',"el-sub-menu":'<el-sub-menu index="$1">$2</el-sub-menu>',"el-sub-menu:title[slot]":`<template #title>
${i}$1
</template>`,"el-menu:collapse":`<el-menu :default-active="activeIndex" mode="horizontal" :collapse="isCollapse" @open="handleOpen" @close="handleClose">
${i}$1
</el-menu>`,"el-page-header":`<el-page-header title="${A.l10n.t("el-page-header.title")}" @back="onBack">
${i}<template #content>
${i}${i}$1
${i}</template>
</el-page-header>`,"el-page-header:breadcrumb[slot]":`<template #breadcrumb>
${i}$1
</template>`,"el-page-header:content[slot]":`<template #content>
${i}$1
</template>`,"el-page-header:extra[slot]":`<template #extra>
${i}$1
</template>`,"el-steps":'<el-steps :active="${1:active}" finish-status="${2:success}">\n<el-step title="$3"></el-step>$4\n</el-steps>',"el-steps:align-center":'<el-steps :active="${1:active}" finish-status="${2:success}" align-center>\n<el-step title="$3"></el-step>$4\n</el-steps>',"el-steps:vertical":'<el-steps :active="${1:active}" finish-status="${2:success}" direction="vertical">\n<el-step title="$3"></el-step>$4\n</el-steps>',"el-step":'<el-step title="$1">$2</el-step>',"el-step:icon[slot]":`<template #icon>
${i}$1
</template>`,"el-step:title[slot]":`<template #title>
${i}$1
</template>`,"el-step:description[slot]":`<template #description>
${i}$1
</template>`,"el-tabs":`<el-tabs v-model="\${1:activeName}" @tab-click="\${2:handleClick}">
${i}<el-tab-pane label="$3" name="$4">$5</el-tab-pane>$6
</el-tabs>`,"el-tabs:card":`<el-tabs v-model="\${1:activeName}" type="card" @tab-click="\${2:handleClick}">
${i}<el-tab-pane label="$3" name="$4">$5</el-tab-pane>$6
</el-tabs>`,"el-tab-pane":'<el-tab-pane label="$1" name="$2">$3</el-tab-pane>',"el-tab-pane:label[slot]":`<template #label>
${i}$1
</template>`,"el-tabs:editable":`<el-tabs v-model="\${1:activeName}" editable @edit="\${2:handleTabsEdit}">
${i}<el-tab-pane label="$3" name="$4">$5</el-tab-pane>$6
</el-tabs>`,"el-tabs:add-icon[slot]":`<template #add-icon>
${i}$1
</template>`,"el-alert":'<el-alert title="$1" type="success">$2</el-alert>',"el-alert:show-icon":'<el-alert title="$1" type="success" show-icon>$2</el-alert>',"el-alert:effect":'<el-alert title="$1" type="success" effect="dark">$2</el-alert>',"el-alert:title[slot]":`<template #title>
${i}$1
</template>`,"el-dialog":`<el-dialog v-model="\${1:visible}" title="$2" width="600px" :before-close="handleClose" >
${i}$3
${i}<template #footer>
${i}${i}<div class="dialog-footer">
${i}${i}${i}<el-button @click="closeDialog">${A.l10n.t("el-dialog.cancel")}</el-button>
${i}${i}${i}<el-button type="primary" @click="confirmDialog">${A.l10n.t("el-dialog.confirm")}</el-button>
${i}${i}</div>
${i}</template>
</el-dialog>`,"el-dialog:draggable":`<el-dialog v-model="\${1:visible}" title="$2" width="600px" draggable :before-close="handleClose" >
${i}$3
${i}<template #footer>
${i}${i}<div class="dialog-footer">
${i}${i}${i}<el-button @click="closeDialog">${A.l10n.t("el-dialog.cancel")}</el-button>
${i}${i}${i}<el-button type="primary" @click="confirmDialog">${A.l10n.t("el-dialog.confirm")}</el-button>
${i}${i}</div>
${i}</template>
</el-dialog>`,"el-dialog:append-to-body":`<el-dialog v-model="\${1:visible}" title="$2" width="600px" append-to-body :before-close="handleClose" >
${i}$3
${i}<template #footer>
${i}${i}<div class="dialog-footer">
${i}${i}${i}<el-button @click="closeDialog">${A.l10n.t("el-dialog.cancel")}</el-button>
${i}${i}${i}<el-button type="primary" @click="confirmDialog">${A.l10n.t("el-dialog.confirm")}</el-button>
${i}${i}</div>
${i}</template>
</el-dialog>`,"el-dialog:header[slot]":`<template #header="{ close, titleId, titleClass }">
${i}$1
</template>`,"el-drawer":`<el-drawer v-model="\${1:drawer}" title="$2" direction="rtl">
${i}$3
</el-drawer>`,"el-drawer:append-to-body":`<el-drawer v-model="\${1:drawer}" title="$2" direction="rtl" :append-to-body="true">
${i}$3
</el-drawer>`,"el-drawer:default[slot]":`<template #default>
${i}$1
</template>`,"el-drawer:header[slot]":`<template #header>
${i}$1
</template>`,"el-drawer:footer[slot]":`<template #footer>
${i}$1
</template>`,"el-popconfirm":`<el-popconfirm title="${A.l10n.t("el-popconfirm.title")}" confirm-button-text="${A.l10n.t("el-popconfirm.confirm-text")}" cancel-button-text="${A.l10n.t("el-popconfirm.cancel-text")}" @confirm="confirmEvent" @cancel="cancelEvent">
${i}<template #reference>
${i}${i}<el-button type="danger" :icon="Delete">\${1:${A.l10n.t("el-popconfirm.button-text")}}</el-button>
${i}</template>
</el-popconfirm>`,"el-popover":`<el-popover placement="top-start" title="$1" :width="\${2:200}" trigger="\${3:hover}">
${i}<template #reference>
${i}${i}<el-button>$4</el-button>
${i}</template>
${i}<template #default>
${i}${i}$5
${i}</template>
</el-popover>`,"el-tooltip":`<el-tooltip effect="dark" content="$1" placement="\${2:top}">
${i}$3
</el-tooltip>`,"el-tooltip:content":`<el-tooltip effect="dark">
${i}$3
${i}<template #content>
${i}${i}$4
${i}</template>
</el-tooltip>`,"el-tooltip:content[slot]":`<template #content>
${i}$1
</template>`,"el-divider":"<el-divider>$1</el-divider>","el-divider:dashed":'<el-divider border-style="${1:dashed}">$2</el-divider>',"el-divider:vertical":'<el-divider direction="vertical">$1</el-divider>',"el-watermark":`<el-watermark :font="{ color: 'rgba(0, 0, 0, .15)' }">
${i}$1
</el-watermark>`,"el-watermark:image":`<el-watermark :width="$1" :height="$2" :image="$3">
${i}$4
</el-watermark>`})});var fs=P(wi=>{"use strict";Object.defineProperty(wi,"__esModule",{value:!0});var bs=require("vscode");wi.default=i=>({"el-rules:required":"{ required: true, message: '', trigger: 'blur' }","el-rules:max":"{ min: 3, max: 5, message: '', trigger: 'blur' }","el-form:submit":`const submitForm = async (formEl: FormInstance | undefined) => {
${i}if (!formEl) return
${i}await formEl.validate((valid, fields) => {
${i}${i}if (valid) {
${i}${i}${i}console.log('submit!')
${i}${i}} else {
${i}${i}${i}console.log('error submit!', fields)
${i}${i}}
${i}})
}`,"el-form:reset":`const resetForm = (formEl: FormInstance | undefined) => {
${i}if (!formEl) return
${i}formEl.resetFields()
}`,"el-upload":`const fileList = ref<UploadUserFile[]>([
])

const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
${i}console.log(file, uploadFiles)
}

const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
${i}console.log(uploadFile)
}

const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {

}

const beforeRemove: UploadProps['beforeRemove'] = (uploadFile, uploadFiles) => {
}`,"el-message":`ElMessage({
${i}type: '\${1:success}',
${i}message: '$2',
})`,"el-message:confirm":`ElMessageBox.confirm(
${i}'',
${i}'Warning',
${i}{
${i}${i}confirmButtonText: '${bs.l10n.t("el-popconfirm.confirm-text")}',
${i}${i}cancelButtonText: '${bs.l10n.t("el-popconfirm.cancel-text")}',
${i}${i}type: 'warning',
${i}}
).then(() => {
${i}
}).catch(() => {
${i}
})`,"el-notification":`ElNotification({
${i}title: '',
${i}message: '',
})`})});var vs=P($i=>{"use strict";Object.defineProperty($i,"__esModule",{value:!0});$i.default=()=>({"el-overview":{},"el-button":{size:{type:"attribute",description:"tags.el-button.size.description",values:["large","large","small"]},type:{type:"attribute",description:"tags.el-button.type.description",values:["primary","success","warning","danger","info"]},plain:{type:"attribute",description:"tags.el-button.plain.description",values:["boolean"]},text:{type:"attribute",description:"tags.el-button.text.description",values:["boolean"]},bg:{type:"attribute",description:"tags.el-button.bg.description",values:["boolean"]},link:{type:"attribute",description:"tags.el-button.link.description",values:["boolean"]},round:{type:"attribute",description:"tags.el-button.round.description",values:["boolean"]},circle:{type:"attribute",description:"tags.el-button.circle.description",values:["boolean"]},loading:{type:"attribute",description:"tags.el-button.loading.description",values:["boolean"]},"loading-icon":{type:"attribute",description:"tags.el-button.loading-icon.description",values:["string"]},disabled:{type:"attribute",description:"tags.el-button.disabled.description",values:["boolean"]},icon:{type:"attribute",description:"tags.el-button.icon.description",values:["string"]},autofocus:{type:"attribute",description:"tags.el-button.autofocus.description",values:["boolean"]},"native-type":{type:"attribute",description:"tags.el-button.native-type.description",values:["button","submit","reset"]},"auto-insert-space":{type:"attribute",description:"tags.el-button.auto-insert-space.description",values:["boolean"]},color:{type:"attribute",description:"tags.el-button.color.description",values:["string"]},dark:{type:"attribute",description:"tags.el-button.dark.description",values:["boolean"]},tag:{type:"attribute",description:"tags.el-button.tag.description",values:["string"]}},"el-button-group":{size:{type:"attribute",description:"tags.el-button-group.size.description",values:["large","large","small"]},type:{type:"attribute",description:"tags.el-button-group.type.description",values:["primary","success","warning","danger","info"]}},"el-border":{},"el-color":{},"el-container":{direction:{type:"attribute",description:"tags.el-container.direction.description",values:["horizontal","vertical"]}},"el-header":{height:{type:"attribute",description:"tags.el-header.height.description",values:["string"]}},"el-aside":{width:{type:"attribute",description:"tags.el-aside.width.description",values:["string"]}},"el-main":{},"el-footer":{height:{type:"attribute",description:"tags.el-footer.height.description",values:["string"]}},"el-icon":{color:{type:"attribute",description:"tags.el-icon.color.description",values:["string"]},size:{type:"attribute",description:"tags.el-icon.size.description",values:["number"]}},"el-layout":{},"el-row":{gutter:{type:"attribute",description:"tags.el-row.gutter.description",values:["number"]},justify:{type:"attribute",description:"tags.el-row.justify.description",values:["start","end","center","space-around","space-between","space-evenly"]},align:{type:"attribute",description:"tags.el-row.align.description",values:["top","middle","bottom"]},tag:{type:"attribute",description:"tags.el-row.tag.description",values:["string"]}},"el-col":{span:{type:"attribute",description:"tags.el-col.span.description",values:["number"]},offset:{type:"attribute",description:"tags.el-col.offset.description",values:["number"]},push:{type:"attribute",description:"tags.el-col.push.description",values:["number"]},pull:{type:"attribute",description:"tags.el-col.pull.description",values:["number"]},xs:{type:"attribute",description:"tags.el-col.xs.description",values:["number"]},sm:{type:"attribute",description:"tags.el-col.sm.description",values:["number"]},md:{type:"attribute",description:"tags.el-col.md.description",values:["number"]},lg:{type:"attribute",description:"tags.el-col.lg.description",values:["number"]},xl:{type:"attribute",description:"tags.el-col.xl.description",values:["number"]},tag:{type:"attribute",description:"tags.el-col.tag.description",values:["string"]}},"el-link":{type:{type:"attribute",description:"tags.el-link.type.description",values:["primary","success","warning","danger","info","default"]},underline:{type:"attribute",description:"tags.el-link.underline.description",values:["boolean"]},disabled:{type:"attribute",description:"tags.el-link.disabled.description",values:["boolean"]},href:{type:"attribute",description:"tags.el-link.href.description",values:["string"]},target:{type:"attribute",description:"tags.el-link.target.description",values:["_blank","_parent","_self","_top"]},icon:{type:"attribute",description:"tags.el-link.icon.description",values:["string"]}},"el-text":{type:{type:"attribute",description:"tags.el-text.type.description",values:["primary","success","warning","danger","info"]},size:{type:"attribute",description:"tags.el-text.size.description",values:["large","default","small"]},truncated:{type:"attribute",description:"tags.el-text.truncated.description",values:["boolean"]},"line-clamp":{type:"attribute",description:"tags.el-text.line-clamp.description",values:["string"]},tag:{type:"attribute",description:"tags.el-text.tag.description",values:["string"]}},"el-scrollbar":{height:{type:"attribute",description:"tags.el-scrollbar.height.description",values:["string"]},"max-height":{type:"attribute",description:"tags.el-scrollbar.max-height.description",values:["string"]},native:{type:"attribute",description:"tags.el-scrollbar.native.description",values:["boolean"]},"wrap-style":{type:"attribute",description:"tags.el-scrollbar.wrap-style.description",values:["string"]},"wrap-class":{type:"attribute",description:"tags.el-scrollbar.wrap-class.description",values:["string"]},"view-style":{type:"attribute",description:"tags.el-scrollbar.view-style.description",values:["string"]},"view-class":{type:"attribute",description:"tags.el-scrollbar.view-class.description",values:["string"]},noresize:{type:"attribute",description:"tags.el-scrollbar.noresize.description",values:["boolean"]},tag:{type:"attribute",description:"tags.el-scrollbar.tag.description",values:["string"]},always:{type:"attribute",description:"tags.el-scrollbar.always.description",values:["boolean"]},"min-size":{type:"attribute",description:"tags.el-scrollbar.min-size.description",values:["number"]},id:{type:"attribute",description:"tags.el-scrollbar.id.description",values:["string"]},roleay:{type:"attribute",description:"tags.el-scrollbar.roleay.description",values:["string"]},"aria-labelay":{type:"attribute",description:"tags.el-scrollbar.aria-labelay.description",values:["string"]},"aria-orientationay":{type:"attribute",description:"tags.el-scrollbar.aria-orientationay.description",values:["enum"]},scroll:{type:"method",description:"tags.el-scrollbar.scroll.description",values:[]}},"el-space":{alignment:{type:"attribute",description:"tags.el-space.alignment.description",values:["stretch","center","normal","start","end"]},class:{type:"attribute",description:"tags.el-space.class.description",values:["string"]},direction:{type:"attribute",description:"tags.el-space.direction.description",values:["vertical","horizontal"]},"prefix-cls":{type:"attribute",description:"tags.el-space.prefix-cls.description",values:["string"]},style:{type:"attribute",description:"tags.el-space.style.description",values:["string"]},spacer:{type:"attribute",description:"tags.el-space.spacer.description",values:["string"]},size:{type:"attribute",description:"tags.el-space.size.description",values:["default","small","large"]},wrap:{type:"attribute",description:"tags.el-space.wrap.description",values:["boolean"]},fill:{type:"attribute",description:"tags.el-space.fill.description",values:["boolean"]},"fill-ratio":{type:"attribute",description:"tags.el-space.fill-ratio.description",values:["number"]}},"el-typography":{},"el-config-provider":{locale:{type:"attribute",description:"tags.el-config-provider.locale.description",values:["object"]},size:{type:"attribute",description:"tags.el-config-provider.size.description",values:["large","default","small"]},zIndex:{type:"attribute",description:"tags.el-config-provider.zIndex.description",values:["number"]},namespace:{type:"attribute",description:"tags.el-config-provider.namespace.description",values:["string"]},button:{type:"attribute",description:"tags.el-config-provider.button.description",values:["object"]},message:{type:"attribute",description:"tags.el-config-provider.message.description",values:["object"]},"experimental-features":{type:"attribute",description:"tags.el-config-provider.experimental-features.description",values:["object"]},"empty-values":{type:"attribute",description:"tags.el-config-provider.empty-values.description",values:["array"]},"value-on-clear":{type:"attribute",description:"tags.el-config-provider.value-on-clear.description",values:["string"]}},"el-autocomplete":{"v-model":{type:"attribute",description:"tags.el-autocomplete.v-model.description",values:["string"]},placeholder:{type:"attribute",description:"tags.el-autocomplete.placeholder.description",values:["string"]},clearable:{type:"attribute",description:"tags.el-autocomplete.clearable.description",values:["boolean"]},disabled:{type:"attribute",description:"tags.el-autocomplete.disabled.description",values:["boolean"]},"value-key":{type:"attribute",description:"tags.el-autocomplete.value-key.description",values:["string"]},debounce:{type:"attribute",description:"tags.el-autocomplete.debounce.description",values:["number"]},placement:{type:"attribute",description:"tags.el-autocomplete.placement.description",values:["top","top- start","top-end","bottom","bottom-start","bottom-end"]},"fetch-suggestions":{type:"attribute",description:"tags.el-autocomplete.fetch-suggestions.description",values:["Function"]},"trigger-on-focus":{type:"attribute",description:"tags.el-autocomplete.trigger-on-focus.description",values:["boolean"]},"select-when-unmatched":{type:"attribute",description:"tags.el-autocomplete.select-when-unmatched.description",values:["boolean"]},name:{type:"attribute",description:"tags.el-autocomplete.name.description",values:["string"]},"aria-labelay":{type:"attribute",description:"tags.el-autocomplete.aria-labelay.description",values:["string"]},"hide-loading":{type:"attribute",description:"tags.el-autocomplete.hide-loading.description",values:["boolean"]},"popper-class":{type:"attribute",description:"tags.el-autocomplete.popper-class.description",values:["string"]},"popper-append-to-bodydeprecated":{type:"attribute",description:"tags.el-autocomplete.popper-append-to-bodydeprecated.description",values:["boolean"]},teleported:{type:"attribute",description:"tags.el-autocomplete.teleported.description",values:["boolean"]},"highlight-first-item":{type:"attribute",description:"tags.el-autocomplete.highlight-first-item.description",values:["boolean"]},"fit-input-width":{type:"attribute",description:"tags.el-autocomplete.fit-input-width.description",values:["boolean"]},select:{type:"method",description:"tags.el-autocomplete.select.description",values:[]},change:{type:"method",description:"tags.el-autocomplete.change.description",values:[]}},"el-cascader":{"v-model":{type:"attribute",description:"tags.el-cascader.v-model.description",values:["string"]},options:{type:"attribute",description:"tags.el-cascader.options.description",values:["object"]},props:{type:"attribute",description:"tags.el-cascader.props.description",values:["object"]},size:{type:"attribute",description:"tags.el-cascader.size.description",values:["large","default","small"]},placeholder:{type:"attribute",description:"tags.el-cascader.placeholder.description",values:["string"]},disabled:{type:"attribute",description:"tags.el-cascader.disabled.description",values:["boolean"]},clearable:{type:"attribute",description:"tags.el-cascader.clearable.description",values:["boolean"]},"show-all-levels":{type:"attribute",description:"tags.el-cascader.show-all-levels.description",values:["boolean"]},"collapse-tags":{type:"attribute",description:"tags.el-cascader.collapse-tags.description",values:["boolean"]},"collapse-tags-tooltip":{type:"attribute",description:"tags.el-cascader.collapse-tags-tooltip.description",values:["boolean"]},separator:{type:"attribute",description:"tags.el-cascader.separator.description",values:["string"]},filterable:{type:"attribute",description:"tags.el-cascader.filterable.description",values:["boolean"]},"filter-method":{type:"attribute",description:"tags.el-cascader.filter-method.description",values:["Function"]},debounce:{type:"attribute",description:"tags.el-cascader.debounce.description",values:["number"]},"before-filter":{type:"attribute",description:"tags.el-cascader.before-filter.description",values:["Function"]},"popper-class":{type:"attribute",description:"tags.el-cascader.popper-class.description",values:["string"]},teleported:{type:"attribute",description:"tags.el-cascader.teleported.description",values:["boolean"]},"popper-append-to-bodydeprecated":{type:"attribute",description:"tags.el-cascader.popper-append-to-bodydeprecated.description",values:["boolean"]},"tag-type":{type:"attribute",description:"tags.el-cascader.tag-type.description",values:["success","info","warning","danger"]},"validate-event":{type:"attribute",description:"tags.el-cascader.validate-event.description",values:["boolean"]},"max-collapse-tags":{type:"attribute",description:"tags.el-cascader.max-collapse-tags.description",values:["number"]},"empty-values":{type:"attribute",description:"tags.el-cascader.empty-values.description",values:["array"]},"value-on-clear":{type:"attribute",description:"tags.el-cascader.value-on-clear.description",values:["string"]},change:{type:"method",description:"tags.el-cascader.change.description",values:[]},"expand-change":{type:"method",description:"tags.el-cascader.expand-change.description",values:[]},blur:{type:"method",description:"tags.el-cascader.blur.description",values:[]},focus:{type:"method",description:"tags.el-cascader.focus.description",values:[]},"visible-change":{type:"method",description:"tags.el-cascader.visible-change.description",values:[]},"remove-tag":{type:"method",description:"tags.el-cascader.remove-tag.description",values:[]}},"el-cascader-panel":{"v-model":{type:"attribute",description:"tags.el-cascader-panel.v-model.description",values:["string"]},options:{type:"attribute",description:"tags.el-cascader-panel.options.description",values:["object"]},props:{type:"attribute",description:"tags.el-cascader-panel.props.description",values:["object"]},change:{type:"method",description:"tags.el-cascader-panel.change.description",values:[]},"expand-change":{type:"method",description:"tags.el-cascader-panel.expand-change.description",values:[]},close:{type:"method",description:"tags.el-cascader-panel.close.description",values:[]}},"el-checkbox":{"v-model":{type:"attribute",description:"tags.el-checkbox.v-model.description",values:["string"]},value:{type:"attribute",description:"tags.el-checkbox.value.description",values:["string"]},label:{type:"attribute",description:"tags.el-checkbox.label.description",values:["string"]},"true-value":{type:"attribute",description:"tags.el-checkbox.true-value.description",values:["string"]},"false-value":{type:"attribute",description:"tags.el-checkbox.false-value.description",values:["string"]},"true-labeldeprecated":{type:"attribute",description:"tags.el-checkbox.true-labeldeprecated.description",values:["string"]},"false-labeldeprecated":{type:"attribute",description:"tags.el-checkbox.false-labeldeprecated.description",values:["string"]},disabled:{type:"attribute",description:"tags.el-checkbox.disabled.description",values:["boolean"]},border:{type:"attribute",description:"tags.el-checkbox.border.description",values:["boolean"]},size:{type:"attribute",description:"tags.el-checkbox.size.description",values:["large","default","small"]},name:{type:"attribute",description:"tags.el-checkbox.name.description",values:["string"]},checked:{type:"attribute",description:"tags.el-checkbox.checked.description",values:["boolean"]},indeterminate:{type:"attribute",description:"tags.el-checkbox.indeterminate.description",values:["boolean"]},"validate-event":{type:"attribute",description:"tags.el-checkbox.validate-event.description",values:["boolean"]},tabindex:{type:"attribute",description:"tags.el-checkbox.tabindex.description",values:["string"]},id:{type:"attribute",description:"tags.el-checkbox.id.description",values:["string"]},controlsaydeprecated:{type:"attribute",description:"tags.el-checkbox.controlsaydeprecated.description",values:["string"]},"aria-controlsay":{type:"attribute",description:"tags.el-checkbox.aria-controlsay.description",values:["string"]},change:{type:"method",description:"tags.el-checkbox.change.description",values:[]}},"el-checkbox-group":{"v-model":{type:"attribute",description:"tags.el-checkbox-group.v-model.description",values:["object"]},size:{type:"attribute",description:"tags.el-checkbox-group.size.description",values:["large","default","small"]},disabled:{type:"attribute",description:"tags.el-checkbox-group.disabled.description",values:["boolean"]},min:{type:"attribute",description:"tags.el-checkbox-group.min.description",values:["number"]},max:{type:"attribute",description:"tags.el-checkbox-group.max.description",values:["number"]},labelaydeprecated:{type:"attribute",description:"tags.el-checkbox-group.labelaydeprecated.description",values:["string"]},"aria-labelay":{type:"attribute",description:"tags.el-checkbox-group.aria-labelay.description",values:["string"]},"text-color":{type:"attribute",description:"tags.el-checkbox-group.text-color.description",values:["string"]},fill:{type:"attribute",description:"tags.el-checkbox-group.fill.description",values:["string"]},tag:{type:"attribute",description:"tags.el-checkbox-group.tag.description",values:["string"]},"validate-event":{type:"attribute",description:"tags.el-checkbox-group.validate-event.description",values:["boolean"]},change:{type:"method",description:"tags.el-checkbox-group.change.description",values:[]}},"el-checkbox-button":{value:{type:"attribute",description:"tags.el-checkbox-button.value.description",values:["string"]},label:{type:"attribute",description:"tags.el-checkbox-button.label.description",values:["string"]},"true-value":{type:"attribute",description:"tags.el-checkbox-button.true-value.description",values:["string"]},"false-value":{type:"attribute",description:"tags.el-checkbox-button.false-value.description",values:["string"]},"true-labeldeprecated":{type:"attribute",description:"tags.el-checkbox-button.true-labeldeprecated.description",values:["string"]},"false-labeldeprecated":{type:"attribute",description:"tags.el-checkbox-button.false-labeldeprecated.description",values:["string"]},disabled:{type:"attribute",description:"tags.el-checkbox-button.disabled.description",values:["boolean"]},name:{type:"attribute",description:"tags.el-checkbox-button.name.description",values:["string"]},checked:{type:"attribute",description:"tags.el-checkbox-button.checked.description",values:["boolean"]}},"el-color-picker":{"v-model":{type:"attribute",description:"tags.el-color-picker.v-model.description",values:["string"]},disabled:{type:"attribute",description:"tags.el-color-picker.disabled.description",values:["boolean"]},size:{type:"attribute",description:"tags.el-color-picker.size.description",values:["large","default","small"]},"show-alpha":{type:"attribute",description:"tags.el-color-picker.show-alpha.description",values:["boolean"]},"color-format":{type:"attribute",description:"tags.el-color-picker.color-format.description",values:["enum"]},"popper-class":{type:"attribute",description:"tags.el-color-picker.popper-class.description",values:["string"]},predefine:{type:"attribute",description:"tags.el-color-picker.predefine.description",values:["object"]},"validate-event":{type:"attribute",description:"tags.el-color-picker.validate-event.description",values:["boolean"]},tabindex:{type:"attribute",description:"tags.el-color-picker.tabindex.description",values:["string"]},labelaydeprecated:{type:"attribute",description:"tags.el-color-picker.labelaydeprecated.description",values:["string"]},"aria-labelay":{type:"attribute",description:"tags.el-color-picker.aria-labelay.description",values:["string"]},id:{type:"attribute",description:"tags.el-color-picker.id.description",values:["string"]},teleported:{type:"attribute",description:"tags.el-color-picker.teleported.description",values:["boolean"]},change:{type:"method",description:"tags.el-color-picker.change.description",values:[]},"active-change":{type:"method",description:"tags.el-color-picker.active-change.description",values:[]},focus:{type:"method",description:"tags.el-color-picker.focus.description",values:[]},blur:{type:"method",description:"tags.el-color-picker.blur.description",values:[]}},"el-date-picker":{"v-model":{type:"attribute",description:"tags.el-date-picker.v-model.description",values:["number"]},readonly:{type:"attribute",description:"tags.el-date-picker.readonly.description",values:["boolean"]},disabled:{type:"attribute",description:"tags.el-date-picker.disabled.description",values:["boolean"]},size:{type:"attribute",description:"tags.el-date-picker.size.description",values:["large","default","small"]},editable:{type:"attribute",description:"tags.el-date-picker.editable.description",values:["boolean"]},clearable:{type:"attribute",description:"tags.el-date-picker.clearable.description",values:["boolean"]},placeholder:{type:"attribute",description:"tags.el-date-picker.placeholder.description",values:["string"]},"start-placeholder":{type:"attribute",description:"tags.el-date-picker.start-placeholder.description",values:["string"]},"end-placeholder":{type:"attribute",description:"tags.el-date-picker.end-placeholder.description",values:["string"]},type:{type:"attribute",description:"tags.el-date-picker.type.description",values:["primary","success","warning","danger","info"]},format:{type:"attribute",description:"tags.el-date-picker.format.description",values:["\u53C2\u89C1"]},"popper-class":{type:"attribute",description:"tags.el-date-picker.popper-class.description",values:["string"]},"popper-options":{type:"attribute",description:"tags.el-date-picker.popper-options.description",values:["object"]},"range-separator":{type:"attribute",description:"tags.el-date-picker.range-separator.description",values:["string"]},"default-value":{type:"attribute",description:"tags.el-date-picker.default-value.description",values:["object"]},"default-time":{type:"attribute",description:"tags.el-date-picker.default-time.description",values:["object"]},"value-format":{type:"attribute",description:"tags.el-date-picker.value-format.description",values:["\u53C2\u89C1"]},id:{type:"attribute",description:"tags.el-date-picker.id.description",values:["string"]},name:{type:"attribute",description:"tags.el-date-picker.name.description",values:["string"]},"unlink-panels":{type:"attribute",description:"tags.el-date-picker.unlink-panels.description",values:["boolean"]},"prefix-icon":{type:"attribute",description:"tags.el-date-picker.prefix-icon.description",values:["string"]},"clear-icon":{type:"attribute",description:"tags.el-date-picker.clear-icon.description",values:["string"]},"validate-event":{type:"attribute",description:"tags.el-date-picker.validate-event.description",values:["boolean"]},"disabled-date":{type:"attribute",description:"tags.el-date-picker.disabled-date.description",values:["Function"]},shortcuts:{type:"attribute",description:"tags.el-date-picker.shortcuts.description",values:["object"]},"cell-class-name":{type:"attribute",description:"tags.el-date-picker.cell-class-name.description",values:["Function"]},teleported:{type:"attribute",description:"tags.el-date-picker.teleported.description",values:["boolean"]},"empty-values":{type:"attribute",description:"tags.el-date-picker.empty-values.description",values:["array"]},"value-on-clear":{type:"attribute",description:"tags.el-date-picker.value-on-clear.description",values:["string"]},change:{type:"method",description:"tags.el-date-picker.change.description",values:[]},blur:{type:"method",description:"tags.el-date-picker.blur.description",values:[]},focus:{type:"method",description:"tags.el-date-picker.focus.description",values:[]},"calendar-change":{type:"method",description:"tags.el-date-picker.calendar-change.description",values:[]},"panel-change":{type:"method",description:"tags.el-date-picker.panel-change.description",values:[]},"visible-change":{type:"method",description:"tags.el-date-picker.visible-change.description",values:[]}},"el-datetime-picker":{"v-model":{type:"attribute",description:"tags.el-datetime-picker.v-model.description",values:["Date"]},readonly:{type:"attribute",description:"tags.el-datetime-picker.readonly.description",values:["boolean"]},disabled:{type:"attribute",description:"tags.el-datetime-picker.disabled.description",values:["boolean"]},editable:{type:"attribute",description:"tags.el-datetime-picker.editable.description",values:["boolean"]},clearable:{type:"attribute",description:"tags.el-datetime-picker.clearable.description",values:["boolean"]},size:{type:"attribute",description:"tags.el-datetime-picker.size.description",values:["string"]},placeholder:{type:"attribute",description:"tags.el-datetime-picker.placeholder.description",values:["string"]},"start-placeholder":{type:"attribute",description:"tags.el-datetime-picker.start-placeholder.description",values:["string"]},"end-placeholder":{type:"attribute",description:"tags.el-datetime-picker.end-placeholder.description",values:["string"]},"arrow-control":{type:"attribute",description:"tags.el-datetime-picker.arrow-control.description",values:["boolean"]},type:{type:"attribute",description:"tags.el-datetime-picker.type.description",values:["string"]},format:{type:"attribute",description:"tags.el-datetime-picker.format.description",values:["string"]},"popper-class":{type:"attribute",description:"tags.el-datetime-picker.popper-class.description",values:["string"]},"range-separator":{type:"attribute",description:"tags.el-datetime-picker.range-separator.description",values:["string"]},"default-value":{type:"attribute",description:"tags.el-datetime-picker.default-value.description",values:["Date"]},"default-time":{type:"attribute",description:"tags.el-datetime-picker.default-time.description",values:["Date"]},"value-format":{type:"attribute",description:"tags.el-datetime-picker.value-format.description",values:["string"]},"date-format":{type:"attribute",description:"tags.el-datetime-picker.date-format.description",values:["string"]},"time-format":{type:"attribute",description:"tags.el-datetime-picker.time-format.description",values:["string"]},id:{type:"attribute",description:"tags.el-datetime-picker.id.description",values:["string"]},name:{type:"attribute",description:"tags.el-datetime-picker.name.description",values:["string"]},"unlink-panels":{type:"attribute",description:"tags.el-datetime-picker.unlink-panels.description",values:["boolean"]},"prefix-icon":{type:"attribute",description:"tags.el-datetime-picker.prefix-icon.description",values:["string","Component"]},"clear-icon":{type:"attribute",description:"tags.el-datetime-picker.clear-icon.description",values:["string","Component"]},shortcuts:{type:"attribute",description:"tags.el-datetime-picker.shortcuts.description",values:["object[{"]},"disabled-date":{type:"attribute",description:"tags.el-datetime-picker.disabled-date.description",values:["function(Date)"]},"cell-class-name":{type:"attribute",description:"tags.el-datetime-picker.cell-class-name.description",values:["Function(Date)"]},teleported:{type:"attribute",description:"tags.el-datetime-picker.teleported.description",values:["boolean"]},"empty-values":{type:"attribute",description:"tags.el-datetime-picker.empty-values.description",values:["array"]},"value-on-clear":{type:"attribute",description:"tags.el-datetime-picker.value-on-clear.description",values:["string"]},change:{type:"method",description:"tags.el-datetime-picker.change.description",values:[]},blur:{type:"method",description:"tags.el-datetime-picker.blur.description",values:[]},focus:{type:"method",description:"tags.el-datetime-picker.focus.description",values:[]},"calendar-change":{type:"method",description:"tags.el-datetime-picker.calendar-change.description",values:[]},"visible-change":{type:"method",description:"tags.el-datetime-picker.visible-change.description",values:[]}},"el-form":{model:{type:"attribute",description:"tags.el-form.model.description",values:["object"]},rules:{type:"attribute",description:"tags.el-form.rules.description",values:["object"]},inline:{type:"attribute",description:"tags.el-form.inline.description",values:["boolean"]},"label-position":{type:"attribute",description:"tags.el-form.label-position.description",values:["enum"]},"label-width":{type:"attribute",description:"tags.el-form.label-width.description",values:["string"]},"label-suffix":{type:"attribute",description:"tags.el-form.label-suffix.description",values:["string"]},"hide-required-asterisk":{type:"attribute",description:"tags.el-form.hide-required-asterisk.description",values:["boolean"]},"require-asterisk-position":{type:"attribute",description:"tags.el-form.require-asterisk-position.description",values:["left","right"]},"show-message":{type:"attribute",description:"tags.el-form.show-message.description",values:["boolean"]},"inline-message":{type:"attribute",description:"tags.el-form.inline-message.description",values:["boolean"]},"status-icon":{type:"attribute",description:"tags.el-form.status-icon.description",values:["boolean"]},"validate-on-rule-change":{type:"attribute",description:"tags.el-form.validate-on-rule-change.description",values:["boolean"]},size:{type:"attribute",description:"tags.el-form.size.description",values:["large","default","small"]},disabled:{type:"attribute",description:"tags.el-form.disabled.description",values:["boolean"]},"scroll-to-error":{type:"attribute",description:"tags.el-form.scroll-to-error.description",values:["boolean"]},"scroll-into-view-options":{type:"attribute",description:"tags.el-form.scroll-into-view-options.description",values:["object"]},validate:{type:"method",description:"tags.el-form.validate.description",values:[]}},"el-form-item":{prop:{type:"attribute",description:"tags.el-form-item.prop.description",values:["string"]},label:{type:"attribute",description:"tags.el-form-item.label.description",values:["string"]},"label-width":{type:"attribute",description:"tags.el-form-item.label-width.description",values:["string"]},required:{type:"attribute",description:"tags.el-form-item.required.description",values:["boolean"]},rules:{type:"attribute",description:"tags.el-form-item.rules.description",values:["object"]},error:{type:"attribute",description:"tags.el-form-item.error.description",values:["string"]},"show-message":{type:"attribute",description:"tags.el-form-item.show-message.description",values:["boolean"]},"inline-message":{type:"attribute",description:"tags.el-form-item.inline-message.description",values:["string"]},size:{type:"attribute",description:"tags.el-form-item.size.description",values:["large","default","small"]},for:{type:"attribute",description:"tags.el-form-item.for.description",values:["string"]},"validate-status":{type:"attribute",description:"tags.el-form-item.validate-status.description",values:["error","validating","success"]}},"el-input":{type:{type:"attribute",description:"tags.el-input.type.description",values:["string"]},"v-model":{type:"attribute",description:"tags.el-input.v-model.description",values:["string"]},maxlength:{type:"attribute",description:"tags.el-input.maxlength.description",values:["string"]},minlength:{type:"attribute",description:"tags.el-input.minlength.description",values:["string"]},"show-word-limit":{type:"attribute",description:"tags.el-input.show-word-limit.description",values:["boolean"]},placeholder:{type:"attribute",description:"tags.el-input.placeholder.description",values:["string"]},clearable:{type:"attribute",description:"tags.el-input.clearable.description",values:["boolean"]},formatter:{type:"attribute",description:"tags.el-input.formatter.description",values:["Function"]},parser:{type:"attribute",description:"tags.el-input.parser.description",values:["Function"]},"show-password":{type:"attribute",description:"tags.el-input.show-password.description",values:["boolean"]},disabled:{type:"attribute",description:"tags.el-input.disabled.description",values:["boolean"]},size:{type:"attribute",description:"tags.el-input.size.description",values:["large","default","small"]},"prefix-icon":{type:"attribute",description:"tags.el-input.prefix-icon.description",values:["string"]},"suffix-icon":{type:"attribute",description:"tags.el-input.suffix-icon.description",values:["string"]},rows:{type:"attribute",description:"tags.el-input.rows.description",values:["number"]},autosize:{type:"attribute",description:"tags.el-input.autosize.description",values:["boolean"]},autocomplete:{type:"attribute",description:"tags.el-input.autocomplete.description",values:["string"]},name:{type:"attribute",description:"tags.el-input.name.description",values:["string"]},readonly:{type:"attribute",description:"tags.el-input.readonly.description",values:["boolean"]},max:{type:"attribute",description:"tags.el-input.max.description",values:[]},min:{type:"attribute",description:"tags.el-input.min.description",values:[]},step:{type:"attribute",description:"tags.el-input.step.description",values:[]},resize:{type:"attribute",description:"tags.el-input.resize.description",values:["none","both","horizontal","vertical"]},autofocus:{type:"attribute",description:"tags.el-input.autofocus.description",values:["boolean"]},form:{type:"attribute",description:"tags.el-input.form.description",values:["string"]},labelaydeprecated:{type:"attribute",description:"tags.el-input.labelaydeprecated.description",values:["string"]},"aria-labelay":{type:"attribute",description:"tags.el-input.aria-labelay.description",values:["string"]},tabindex:{type:"attribute",description:"tags.el-input.tabindex.description",values:["string"]},"validate-event":{type:"attribute",description:"tags.el-input.validate-event.description",values:["boolean"]},"input-style":{type:"attribute",description:"tags.el-input.input-style.description",values:["string"]},blur:{type:"method",description:"tags.el-input.blur.description",values:[]},focus:{type:"method",description:"tags.el-input.focus.description",values:[]},change:{type:"method",description:"tags.el-input.change.description",values:[]},input:{type:"method",description:"tags.el-input.input.description",values:[]},clear:{type:"method",description:"tags.el-input.clear.description",values:[]}},"el-input-number":{"v-model":{type:"attribute",description:"tags.el-input-number.v-model.description",values:["number"]},min:{type:"attribute",description:"tags.el-input-number.min.description",values:["number"]},max:{type:"attribute",description:"tags.el-input-number.max.description",values:["number"]},step:{type:"attribute",description:"tags.el-input-number.step.description",values:["number"]},"step-strictly":{type:"attribute",description:"tags.el-input-number.step-strictly.description",values:["boolean"]},precision:{type:"attribute",description:"tags.el-input-number.precision.description",values:["number"]},size:{type:"attribute",description:"tags.el-input-number.size.description",values:["large","default","small"]},readonly:{type:"attribute",description:"tags.el-input-number.readonly.description",values:["boolean"]},disabled:{type:"attribute",description:"tags.el-input-number.disabled.description",values:["boolean"]},controls:{type:"attribute",description:"tags.el-input-number.controls.description",values:["boolean"]},"controls-position":{type:"attribute",description:"tags.el-input-number.controls-position.description",values:["right"]},name:{type:"attribute",description:"tags.el-input-number.name.description",values:["string"]},labelaydeprecated:{type:"attribute",description:"tags.el-input-number.labelaydeprecated.description",values:["string"]},"aria-labelay":{type:"attribute",description:"tags.el-input-number.aria-labelay.description",values:["string"]},placeholder:{type:"attribute",description:"tags.el-input-number.placeholder.description",values:["string"]},id:{type:"attribute",description:"tags.el-input-number.id.description",values:["string"]},"value-on-clear":{type:"attribute",description:"tags.el-input-number.value-on-clear.description",values:["number"]},"validate-event":{type:"attribute",description:"tags.el-input-number.validate-event.description",values:["boolean"]},change:{type:"method",description:"tags.el-input-number.change.description",values:[]},blur:{type:"method",description:"tags.el-input-number.blur.description",values:[]},focus:{type:"method",description:"tags.el-input-number.focus.description",values:[]}},"el-radio":{"v-model":{type:"attribute",description:"tags.el-radio.v-model.description",values:["string"]},value:{type:"attribute",description:"tags.el-radio.value.description",values:["string"]},label:{type:"attribute",description:"tags.el-radio.label.description",values:["string"]},disabled:{type:"attribute",description:"tags.el-radio.disabled.description",values:["boolean"]},border:{type:"attribute",description:"tags.el-radio.border.description",values:["boolean"]},size:{type:"attribute",description:"tags.el-radio.size.description",values:["large","large","small"]},name:{type:"attribute",description:"tags.el-radio.name.description",values:["string"]},change:{type:"method",description:"tags.el-radio.change.description",values:[]}},"el-radio-group":{"v-model":{type:"attribute",description:"tags.el-radio-group.v-model.description",values:["string"]},size:{type:"attribute",description:"tags.el-radio-group.size.description",values:["string"]},disabled:{type:"attribute",description:"tags.el-radio-group.disabled.description",values:["boolean"]},"text-color":{type:"attribute",description:"tags.el-radio-group.text-color.description",values:["string"]},fill:{type:"attribute",description:"tags.el-radio-group.fill.description",values:["string"]},"validate-event":{type:"attribute",description:"tags.el-radio-group.validate-event.description",values:["boolean"]},labelaydeprecated:{type:"attribute",description:"tags.el-radio-group.labelaydeprecated.description",values:["string"]},"aria-labelay":{type:"attribute",description:"tags.el-radio-group.aria-labelay.description",values:["string"]},name:{type:"attribute",description:"tags.el-radio-group.name.description",values:["string"]},id:{type:"attribute",description:"tags.el-radio-group.id.description",values:["string"]},change:{type:"method",description:"tags.el-radio-group.change.description",values:[]}},"el-radio-button":{value:{type:"attribute",description:"tags.el-radio-button.value.description",values:["string"]},label:{type:"attribute",description:"tags.el-radio-button.label.description",values:["string"]},disabled:{type:"attribute",description:"tags.el-radio-button.disabled.description",values:["boolean"]},name:{type:"attribute",description:"tags.el-radio-button.name.description",values:["string"]}},"el-rate":{"v-model":{type:"attribute",description:"tags.el-rate.v-model.description",values:["number"]},max:{type:"attribute",description:"tags.el-rate.max.description",values:["number"]},size:{type:"attribute",description:"tags.el-rate.size.description",values:["large","large","small"]},disabled:{type:"attribute",description:"tags.el-rate.disabled.description",values:["boolean"]},"allow-half":{type:"attribute",description:"tags.el-rate.allow-half.description",values:["boolean"]},"low-threshold":{type:"attribute",description:"tags.el-rate.low-threshold.description",values:["number"]},"high-threshold":{type:"attribute",description:"tags.el-rate.high-threshold.description",values:["number"]},colors:{type:"attribute",description:"tags.el-rate.colors.description",values:["object"]},"void-color":{type:"attribute",description:"tags.el-rate.void-color.description",values:["string"]},"disabled-void-color":{type:"attribute",description:"tags.el-rate.disabled-void-color.description",values:["string"]},icons:{type:"attribute",description:"tags.el-rate.icons.description",values:["object"]},"void-icon":{type:"attribute",description:"tags.el-rate.void-icon.description",values:["string"]},"disabled-void-icon":{type:"attribute",description:"tags.el-rate.disabled-void-icon.description",values:["string"]},"show-text":{type:"attribute",description:"tags.el-rate.show-text.description",values:["boolean"]},"show-score":{type:"attribute",description:"tags.el-rate.show-score.description",values:["boolean"]},"text-color":{type:"attribute",description:"tags.el-rate.text-color.description",values:["string"]},texts:{type:"attribute",description:"tags.el-rate.texts.description",values:["array"]},"score-template":{type:"attribute",description:"tags.el-rate.score-template.description",values:["string"]},clearable:{type:"attribute",description:"tags.el-rate.clearable.description",values:["boolean"]},id:{type:"attribute",description:"tags.el-rate.id.description",values:["string"]},labelaydeprecated:{type:"attribute",description:"tags.el-rate.labelaydeprecated.description",values:["string"]},"aria-labelay":{type:"attribute",description:"tags.el-rate.aria-labelay.description",values:["string"]},change:{type:"method",description:"tags.el-rate.change.description",values:[]}},"el-select":{"v-model":{type:"attribute",description:"tags.el-select.v-model.description",values:["string"]},multiple:{type:"attribute",description:"tags.el-select.multiple.description",values:["boolean"]},disabled:{type:"attribute",description:"tags.el-select.disabled.description",values:["boolean"]},"value-key":{type:"attribute",description:"tags.el-select.value-key.description",values:["string"]},size:{type:"attribute",description:"tags.el-select.size.description",values:["large","large","small"]},clearable:{type:"attribute",description:"tags.el-select.clearable.description",values:["boolean"]},"collapse-tags":{type:"attribute",description:"tags.el-select.collapse-tags.description",values:["boolean"]},"collapse-tags-tooltip":{type:"attribute",description:"tags.el-select.collapse-tags-tooltip.description",values:["boolean"]},"multiple-limit":{type:"attribute",description:"tags.el-select.multiple-limit.description",values:["number"]},name:{type:"attribute",description:"tags.el-select.name.description",values:["string"]},effect:{type:"attribute",description:"tags.el-select.effect.description",values:["dark","light"]},autocomplete:{type:"attribute",description:"tags.el-select.autocomplete.description",values:["string"]},placeholder:{type:"attribute",description:"tags.el-select.placeholder.description",values:["string"]},filterable:{type:"attribute",description:"tags.el-select.filterable.description",values:["boolean"]},"allow-create":{type:"attribute",description:"tags.el-select.allow-create.description",values:["boolean"]},"filter-method":{type:"attribute",description:"tags.el-select.filter-method.description",values:["Function"]},remote:{type:"attribute",description:"tags.el-select.remote.description",values:["boolean"]},"remote-method":{type:"attribute",description:"tags.el-select.remote-method.description",values:["Function"]},"remote-show-suffix":{type:"attribute",description:"tags.el-select.remote-show-suffix.description",values:["boolean"]},loading:{type:"attribute",description:"tags.el-select.loading.description",values:["boolean"]},"loading-text":{type:"attribute",description:"tags.el-select.loading-text.description",values:["string"]},"no-match-text":{type:"attribute",description:"tags.el-select.no-match-text.description",values:["string"]},"no-data-text":{type:"attribute",description:"tags.el-select.no-data-text.description",values:["string"]},"popper-class":{type:"attribute",description:"tags.el-select.popper-class.description",values:["string"]},"reserve-keyword":{type:"attribute",description:"tags.el-select.reserve-keyword.description",values:["boolean"]},"default-first-option":{type:"attribute",description:"tags.el-select.default-first-option.description",values:["false"]},teleported:{type:"attribute",description:"tags.el-select.teleported.description",values:["boolean"]},persistent:{type:"attribute",description:"tags.el-select.persistent.description",values:["boolean"]},"automatic-dropdown":{type:"attribute",description:"tags.el-select.automatic-dropdown.description",values:["boolean"]},"clear-icon":{type:"attribute",description:"tags.el-select.clear-icon.description",values:["string"]},"fit-input-width":{type:"attribute",description:"tags.el-select.fit-input-width.description",values:["boolean"]},"suffix-icon":{type:"attribute",description:"tags.el-select.suffix-icon.description",values:["string"]},"suffix-transitiondeprecated":{type:"attribute",description:"tags.el-select.suffix-transitiondeprecated.description",values:["boolean"]},"tag-type":{type:"attribute",description:"tags.el-select.tag-type.description",values:["success","info","warning","danger"]},"validate-event":{type:"attribute",description:"tags.el-select.validate-event.description",values:["boolean"]},placement:{type:"attribute",description:"tags.el-select.placement.description",values:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"]},"fallback-placements":{type:"attribute",description:"tags.el-select.fallback-placements.description",values:["array"]},"max-collapse-tags":{type:"attribute",description:"tags.el-select.max-collapse-tags.description",values:["number"]},"popper-options":{type:"attribute",description:"tags.el-select.popper-options.description",values:["objectrefer"]},"aria-labelay":{type:"attribute",description:"tags.el-select.aria-labelay.description",values:["string"]},"empty-values":{type:"attribute",description:"tags.el-select.empty-values.description",values:["array"]},"value-on-clear":{type:"attribute",description:"tags.el-select.value-on-clear.description",values:["string"]},change:{type:"method",description:"tags.el-select.change.description",values:[]},"visible-change":{type:"method",description:"tags.el-select.visible-change.description",values:[]},"remove-tag":{type:"method",description:"tags.el-select.remove-tag.description",values:[]},clear:{type:"method",description:"tags.el-select.clear.description",values:[]},blur:{type:"method",description:"tags.el-select.blur.description",values:[]},focus:{type:"method",description:"tags.el-select.focus.description",values:[]}},"el-option":{value:{type:"attribute",description:"tags.el-option.value.description",values:["string"]},label:{type:"attribute",description:"tags.el-option.label.description",values:["string"]},disabled:{type:"attribute",description:"tags.el-option.disabled.description",values:["boolean"]}},"el-select-v2":{"v-model":{type:"attribute",description:"tags.el-select-v2.v-model.description",values:["string"]},multiple:{type:"attribute",description:"tags.el-select-v2.multiple.description",values:["boolean"]},disabled:{type:"attribute",description:"tags.el-select-v2.disabled.description",values:["boolean"]},"value-key":{type:"attribute",description:"tags.el-select-v2.value-key.description",values:["string"]},size:{type:"attribute",description:"tags.el-select-v2.size.description",values:["large","large","small"]},clearable:{type:"attribute",description:"tags.el-select-v2.clearable.description",values:["boolean"]},"collapse-tags":{type:"attribute",description:"tags.el-select-v2.collapse-tags.description",values:["boolean"]},"collapse-tags-tooltip":{type:"attribute",description:"tags.el-select-v2.collapse-tags-tooltip.description",values:["boolean"]},"multiple-limit":{type:"attribute",description:"tags.el-select-v2.multiple-limit.description",values:["number"]},name:{type:"attribute",description:"tags.el-select-v2.name.description",values:["string"]},effect:{type:"attribute",description:"tags.el-select-v2.effect.description",values:["dark","light"]},autocomplete:{type:"attribute",description:"tags.el-select-v2.autocomplete.description",values:["string"]},placeholder:{type:"attribute",description:"tags.el-select-v2.placeholder.description",values:["string"]},filterable:{type:"attribute",description:"tags.el-select-v2.filterable.description",values:["boolean"]},"allow-create":{type:"attribute",description:"tags.el-select-v2.allow-create.description",values:["boolean"]},"filter-method":{type:"attribute",description:"tags.el-select-v2.filter-method.description",values:["Function"]},remote:{type:"attribute",description:"tags.el-select-v2.remote.description",values:["boolean"]},"remote-method":{type:"attribute",description:"tags.el-select-v2.remote-method.description",values:["Function"]},"remote-show-suffix":{type:"attribute",description:"tags.el-select-v2.remote-show-suffix.description",values:["boolean"]},loading:{type:"attribute",description:"tags.el-select-v2.loading.description",values:["boolean"]},"loading-text":{type:"attribute",description:"tags.el-select-v2.loading-text.description",values:["string"]},"no-match-text":{type:"attribute",description:"tags.el-select-v2.no-match-text.description",values:["string"]},"no-data-text":{type:"attribute",description:"tags.el-select-v2.no-data-text.description",values:["string"]},"popper-class":{type:"attribute",description:"tags.el-select-v2.popper-class.description",values:["string"]},"reserve-keyword":{type:"attribute",description:"tags.el-select-v2.reserve-keyword.description",values:["boolean"]},"default-first-option":{type:"attribute",description:"tags.el-select-v2.default-first-option.description",values:["false"]},teleported:{type:"attribute",description:"tags.el-select-v2.teleported.description",values:["boolean"]},persistent:{type:"attribute",description:"tags.el-select-v2.persistent.description",values:["boolean"]},"automatic-dropdown":{type:"attribute",description:"tags.el-select-v2.automatic-dropdown.description",values:["boolean"]},"clear-icon":{type:"attribute",description:"tags.el-select-v2.clear-icon.description",values:["string"]},"fit-input-width":{type:"attribute",description:"tags.el-select-v2.fit-input-width.description",values:["boolean"]},"suffix-icon":{type:"attribute",description:"tags.el-select-v2.suffix-icon.description",values:["string"]},"suffix-transitiondeprecated":{type:"attribute",description:"tags.el-select-v2.suffix-transitiondeprecated.description",values:["boolean"]},"tag-type":{type:"attribute",description:"tags.el-select-v2.tag-type.description",values:["success","info","warning","danger"]},"validate-event":{type:"attribute",description:"tags.el-select-v2.validate-event.description",values:["boolean"]},placement:{type:"attribute",description:"tags.el-select-v2.placement.description",values:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"]},"fallback-placements":{type:"attribute",description:"tags.el-select-v2.fallback-placements.description",values:["array"]},"max-collapse-tags":{type:"attribute",description:"tags.el-select-v2.max-collapse-tags.description",values:["number"]},"popper-options":{type:"attribute",description:"tags.el-select-v2.popper-options.description",values:["objectrefer"]},"aria-labelay":{type:"attribute",description:"tags.el-select-v2.aria-labelay.description",values:["string"]},"empty-values":{type:"attribute",description:"tags.el-select-v2.empty-values.description",values:["array"]},"value-on-clear":{type:"attribute",description:"tags.el-select-v2.value-on-clear.description",values:["string"]},change:{type:"method",description:"tags.el-select-v2.change.description",values:[]},"visible-change":{type:"method",description:"tags.el-select-v2.visible-change.description",values:[]},"remove-tag":{type:"method",description:"tags.el-select-v2.remove-tag.description",values:[]},clear:{type:"method",description:"tags.el-select-v2.clear.description",values:[]},blur:{type:"method",description:"tags.el-select-v2.blur.description",values:[]},focus:{type:"method",description:"tags.el-select-v2.focus.description",values:[]}},"el-slider":{"v-model":{type:"attribute",description:"tags.el-slider.v-model.description",values:["number"]},min:{type:"attribute",description:"tags.el-slider.min.description",values:["number"]},max:{type:"attribute",description:"tags.el-slider.max.description",values:["number"]},disabled:{type:"attribute",description:"tags.el-slider.disabled.description",values:["boolean"]},step:{type:"attribute",description:"tags.el-slider.step.description",values:["number"]},"show-input":{type:"attribute",description:"tags.el-slider.show-input.description",values:["boolean"]},"show-input-controls":{type:"attribute",description:"tags.el-slider.show-input-controls.description",values:["boolean"]},size:{type:"attribute",description:"tags.el-slider.size.description",values:["large","large","small"]},"input-size":{type:"attribute",description:"tags.el-slider.input-size.description",values:["enum"]},"show-stops":{type:"attribute",description:"tags.el-slider.show-stops.description",values:["boolean"]},"show-tooltip":{type:"attribute",description:"tags.el-slider.show-tooltip.description",values:["boolean"]},"format-tooltip":{type:"attribute",description:"tags.el-slider.format-tooltip.description",values:["Function"]},range:{type:"attribute",description:"tags.el-slider.range.description",values:["boolean"]},vertical:{type:"attribute",description:"tags.el-slider.vertical.description",values:["boolean"]},height:{type:"attribute",description:"tags.el-slider.height.description",values:["string"]},labelaydeprecated:{type:"attribute",description:"tags.el-slider.labelaydeprecated.description",values:["string"]},"aria-labelay":{type:"attribute",description:"tags.el-slider.aria-labelay.description",values:["string"]},"range-start-label":{type:"attribute",description:"tags.el-slider.range-start-label.description",values:["string"]},"range-end-label":{type:"attribute",description:"tags.el-slider.range-end-label.description",values:["string"]},"format-value-text":{type:"attribute",description:"tags.el-slider.format-value-text.description",values:["Function"]},debounce:{type:"attribute",description:"tags.el-slider.debounce.description",values:["number"]},"tooltip-class":{type:"attribute",description:"tags.el-slider.tooltip-class.description",values:["string"]},placement:{type:"attribute",description:"tags.el-slider.placement.description",values:["enum"]},marks:{type:"attribute",description:"tags.el-slider.marks.description",values:["object"]},"validate-event":{type:"attribute",description:"tags.el-slider.validate-event.description",values:["boolean"]},change:{type:"method",description:"tags.el-slider.change.description",values:[]},input:{type:"method",description:"tags.el-slider.input.description",values:[]}},"el-switch":{"v-model":{type:"attribute",description:"tags.el-switch.v-model.description",values:["boolean"]},disabled:{type:"attribute",description:"tags.el-switch.disabled.description",values:["boolean"]},loading:{type:"attribute",description:"tags.el-switch.loading.description",values:["boolean"]},size:{type:"attribute",description:"tags.el-switch.size.description",values:["large","large","small"]},width:{type:"attribute",description:"tags.el-switch.width.description",values:["number"]},"inline-prompt":{type:"attribute",description:"tags.el-switch.inline-prompt.description",values:["boolean"]},"active-icon":{type:"attribute",description:"tags.el-switch.active-icon.description",values:["string"]},"inactive-icon":{type:"attribute",description:"tags.el-switch.inactive-icon.description",values:["string"]},"active-action-icon":{type:"attribute",description:"tags.el-switch.active-action-icon.description",values:["string"]},"inactive-action-icon":{type:"attribute",description:"tags.el-switch.inactive-action-icon.description",values:["string"]},"active-text":{type:"attribute",description:"tags.el-switch.active-text.description",values:["string"]},"inactive-text":{type:"attribute",description:"tags.el-switch.inactive-text.description",values:["string"]},"active-value":{type:"attribute",description:"tags.el-switch.active-value.description",values:["boolean"]},"inactive-value":{type:"attribute",description:"tags.el-switch.inactive-value.description",values:["boolean"]},"active-colordeprecated":{type:"attribute",description:"tags.el-switch.active-colordeprecated.description",values:["string"]},"inactive-colordeprecated":{type:"attribute",description:"tags.el-switch.inactive-colordeprecated.description",values:["string"]},"border-colordeprecated":{type:"attribute",description:"tags.el-switch.border-colordeprecated.description",values:["string"]},name:{type:"attribute",description:"tags.el-switch.name.description",values:["string"]},"validate-event":{type:"attribute",description:"tags.el-switch.validate-event.description",values:["boolean"]},"before-change":{type:"attribute",description:"tags.el-switch.before-change.description",values:["boolean"]},id:{type:"attribute",description:"tags.el-switch.id.description",values:["string"]},tabindex:{type:"attribute",description:"tags.el-switch.tabindex.description",values:["string"]},labelaydeprecated:{type:"attribute",description:"tags.el-switch.labelaydeprecated.description",values:["string"]},"aria-labelay":{type:"attribute",description:"tags.el-switch.aria-labelay.description",values:["string"]},change:{type:"method",description:"tags.el-switch.change.description",values:[]}},"el-time-picker":{"v-model":{type:"attribute",description:"tags.el-time-picker.v-model.description",values:["number"]},readonly:{type:"attribute",description:"tags.el-time-picker.readonly.description",values:["boolean"]},disabled:{type:"attribute",description:"tags.el-time-picker.disabled.description",values:["boolean"]},editable:{type:"attribute",description:"tags.el-time-picker.editable.description",values:["boolean"]},clearable:{type:"attribute",description:"tags.el-time-picker.clearable.description",values:["boolean"]},size:{type:"attribute",description:"tags.el-time-picker.size.description",values:["large","large","small"]},placeholder:{type:"attribute",description:"tags.el-time-picker.placeholder.description",values:["string"]},"start-placeholder":{type:"attribute",description:"tags.el-time-picker.start-placeholder.description",values:["string"]},"end-placeholder":{type:"attribute",description:"tags.el-time-picker.end-placeholder.description",values:["string"]},"is-range":{type:"attribute",description:"tags.el-time-picker.is-range.description",values:["boolean"]},"arrow-control":{type:"attribute",description:"tags.el-time-picker.arrow-control.description",values:["boolean"]},"popper-class":{type:"attribute",description:"tags.el-time-picker.popper-class.description",values:["string"]},"range-separator":{type:"attribute",description:"tags.el-time-picker.range-separator.description",values:["string"]},format:{type:"attribute",description:"tags.el-time-picker.format.description",values:["string"]},"default-value":{type:"attribute",description:"tags.el-time-picker.default-value.description",values:["Date"]},"value-format":{type:"attribute",description:"tags.el-time-picker.value-format.description",values:["string"]},id:{type:"attribute",description:"tags.el-time-picker.id.description",values:["string"]},name:{type:"attribute",description:"tags.el-time-picker.name.description",values:["string"]},labelaydeprecated:{type:"attribute",description:"tags.el-time-picker.labelaydeprecated.description",values:["string"]},"aria-labelay":{type:"attribute",description:"tags.el-time-picker.aria-labelay.description",values:["string"]},"prefix-icon":{type:"attribute",description:"tags.el-time-picker.prefix-icon.description",values:["string"]},"clear-icon":{type:"attribute",description:"tags.el-time-picker.clear-icon.description",values:["string"]},"disabled-hours":{type:"attribute",description:"tags.el-time-picker.disabled-hours.description",values:["Function"]},"disabled-minutes":{type:"attribute",description:"tags.el-time-picker.disabled-minutes.description",values:["Function"]},"disabled-seconds":{type:"attribute",description:"tags.el-time-picker.disabled-seconds.description",values:["Function"]},teleported:{type:"attribute",description:"tags.el-time-picker.teleported.description",values:["boolean"]},tabindex:{type:"attribute",description:"tags.el-time-picker.tabindex.description",values:["string"]},"empty-values":{type:"attribute",description:"tags.el-time-picker.empty-values.description",values:["array"]},"value-on-clear":{type:"attribute",description:"tags.el-time-picker.value-on-clear.description",values:["string"]},change:{type:"method",description:"tags.el-time-picker.change.description",values:[]},blur:{type:"method",description:"tags.el-time-picker.blur.description",values:[]},focus:{type:"method",description:"tags.el-time-picker.focus.description",values:[]},"visible-change":{type:"method",description:"tags.el-time-picker.visible-change.description",values:[]}},"el-time-select":{"v-model":{type:"attribute",description:"tags.el-time-select.v-model.description",values:["string"]},disabled:{type:"attribute",description:"tags.el-time-select.disabled.description",values:["boolean"]},editable:{type:"attribute",description:"tags.el-time-select.editable.description",values:["boolean"]},clearable:{type:"attribute",description:"tags.el-time-select.clearable.description",values:["boolean"]},size:{type:"attribute",description:"tags.el-time-select.size.description",values:["large","large","small"]},placeholder:{type:"attribute",description:"tags.el-time-select.placeholder.description",values:["string"]},name:{type:"attribute",description:"tags.el-time-select.name.description",values:["string"]},effect:{type:"attribute",description:"tags.el-time-select.effect.description",values:["string"]},"prefix-icon":{type:"attribute",description:"tags.el-time-select.prefix-icon.description",values:["string"]},"clear-icon":{type:"attribute",description:"tags.el-time-select.clear-icon.description",values:["string"]},start:{type:"attribute",description:"tags.el-time-select.start.description",values:["string"]},end:{type:"attribute",description:"tags.el-time-select.end.description",values:["string"]},step:{type:"attribute",description:"tags.el-time-select.step.description",values:["string"]},"min-time":{type:"attribute",description:"tags.el-time-select.min-time.description",values:["string"]},"max-time":{type:"attribute",description:"tags.el-time-select.max-time.description",values:["string"]},format:{type:"attribute",description:"tags.el-time-select.format.description",values:["string"]},"empty-values":{type:"attribute",description:"tags.el-time-select.empty-values.description",values:["array"]},"value-on-clear":{type:"attribute",description:"tags.el-time-select.value-on-clear.description",values:["string"]},change:{type:"method",description:"tags.el-time-select.change.description",values:[]},blur:{type:"method",description:"tags.el-time-select.blur.description",values:[]},focus:{type:"method",description:"tags.el-time-select.focus.description",values:[]}},"el-transfer":{"v-model":{type:"attribute",description:"tags.el-transfer.v-model.description",values:["object"]},data:{type:"attribute",description:"tags.el-transfer.data.description",values:["object"]},filterable:{type:"attribute",description:"tags.el-transfer.filterable.description",values:["boolean"]},"filter-placeholder":{type:"attribute",description:"tags.el-transfer.filter-placeholder.description",values:["string"]},"filter-method":{type:"attribute",description:"tags.el-transfer.filter-method.description",values:["Function"]},"target-order":{type:"attribute",description:"tags.el-transfer.target-order.description",values:["original","push","unshift"]},titles:{type:"attribute",description:"tags.el-transfer.titles.description",values:["object"]},"button-texts":{type:"attribute",description:"tags.el-transfer.button-texts.description",values:["object"]},"render-content":{type:"attribute",description:"tags.el-transfer.render-content.description",values:["object"]},format:{type:"attribute",description:"tags.el-transfer.format.description",values:["object"]},props:{type:"attribute",description:"tags.el-transfer.props.description",values:["object"]},"left-default-checked":{type:"attribute",description:"tags.el-transfer.left-default-checked.description",values:["object"]},"right-default-checked":{type:"attribute",description:"tags.el-transfer.right-default-checked.description",values:["object"]},"validate-event":{type:"attribute",description:"tags.el-transfer.validate-event.description",values:["boolean"]},change:{type:"method",description:"tags.el-transfer.change.description",values:[]},"left-check-change":{type:"method",description:"tags.el-transfer.left-check-change.description",values:[]},"right-check-change":{type:"method",description:"tags.el-transfer.right-check-change.description",values:[]}},"el-upload":{actionrequired:{type:"attribute",description:"tags.el-upload.actionrequired.description",values:["string"]},headers:{type:"attribute",description:"tags.el-upload.headers.description",values:["object"]},method:{type:"attribute",description:"tags.el-upload.method.description",values:["string"]},multiple:{type:"attribute",description:"tags.el-upload.multiple.description",values:["boolean"]},data:{type:"attribute",description:"tags.el-upload.data.description",values:["object"]},name:{type:"attribute",description:"tags.el-upload.name.description",values:["string"]},"with-credentials":{type:"attribute",description:"tags.el-upload.with-credentials.description",values:["boolean"]},"show-file-list":{type:"attribute",description:"tags.el-upload.show-file-list.description",values:["boolean"]},drag:{type:"attribute",description:"tags.el-upload.drag.description",values:["boolean"]},accept:{type:"attribute",description:"tags.el-upload.accept.description",values:["string"]},crossorigin:{type:"attribute",description:"tags.el-upload.crossorigin.description",values:["anonymous","use-credentials"]},"on-preview":{type:"attribute",description:"tags.el-upload.on-preview.description",values:["Function"]},"on-remove":{type:"attribute",description:"tags.el-upload.on-remove.description",values:["Function"]},"on-success":{type:"attribute",description:"tags.el-upload.on-success.description",values:["Function"]},"on-error":{type:"attribute",description:"tags.el-upload.on-error.description",values:["Function"]},"on-progress":{type:"attribute",description:"tags.el-upload.on-progress.description",values:["Function"]},"on-change":{type:"attribute",description:"tags.el-upload.on-change.description",values:["Function"]},"on-exceed":{type:"attribute",description:"tags.el-upload.on-exceed.description",values:["Function"]},"before-upload":{type:"attribute",description:"tags.el-upload.before-upload.description",values:["Function"]},"before-remove":{type:"attribute",description:"tags.el-upload.before-remove.description",values:["Function"]},"v-model:file-list":{type:"attribute",description:"tags.el-upload.v-model:file-list.description",values:["object"]},"list-type":{type:"attribute",description:"tags.el-upload.list-type.description",values:["text","picture","picture-card"]},"auto-upload":{type:"attribute",description:"tags.el-upload.auto-upload.description",values:["boolean"]},"http-request":{type:"attribute",description:"tags.el-upload.http-request.description",values:["Function"]},disabled:{type:"attribute",description:"tags.el-upload.disabled.description",values:["boolean"]},limit:{type:"attribute",description:"tags.el-upload.limit.description",values:["number"]}},"el-avatar":{icon:{type:"attribute",description:"tags.el-avatar.icon.description",values:["string"]},size:{type:"attribute",description:"tags.el-avatar.size.description",values:["number"]},shape:{type:"attribute",description:"tags.el-avatar.shape.description",values:["circle","square"]},src:{type:"attribute",description:"tags.el-avatar.src.description",values:["string"]},"src-set":{type:"attribute",description:"tags.el-avatar.src-set.description",values:["string"]},alt:{type:"attribute",description:"tags.el-avatar.alt.description",values:["string"]},fit:{type:"attribute",description:"tags.el-avatar.fit.description",values:["fill","contain","cover","none","scale-down"]},error:{type:"method",description:"tags.el-avatar.error.description",values:[]}},"el-badge":{value:{type:"attribute",description:"tags.el-badge.value.description",values:["string"]},max:{type:"attribute",description:"tags.el-badge.max.description",values:["number"]},"is-dot":{type:"attribute",description:"tags.el-badge.is-dot.description",values:["boolean"]},hidden:{type:"attribute",description:"tags.el-badge.hidden.description",values:["boolean"]},type:{type:"attribute",description:"tags.el-badge.type.description",values:["primary","success","warning","danger","info"]},"show-zero":{type:"attribute",description:"tags.el-badge.show-zero.description",values:["boolean"]},color:{type:"attribute",description:"tags.el-badge.color.description",values:["string"]},offset:{type:"attribute",description:"tags.el-badge.offset.description",values:["["]},"badge-style":{type:"attribute",description:"tags.el-badge.badge-style.description",values:["object"]},"badge-class":{type:"attribute",description:"tags.el-badge.badge-class.description",values:["string"]}},"el-calendar":{"v-model":{type:"attribute",description:"tags.el-calendar.v-model.description",values:["Date"]},range:{type:"attribute",description:"tags.el-calendar.range.description",values:["array"]}},"el-card":{header:{type:"attribute",description:"tags.el-card.header.description",values:["string"]},footer:{type:"attribute",description:"tags.el-card.footer.description",values:["string"]},"body-style":{type:"attribute",description:"tags.el-card.body-style.description",values:["object"]},"body-class":{type:"attribute",description:"tags.el-card.body-class.description",values:["string"]},shadow:{type:"attribute",description:"tags.el-card.shadow.description",values:["always","never","hover"]}},"el-carousel":{height:{type:"attribute",description:"tags.el-carousel.height.description",values:["string"]},"initial-index":{type:"attribute",description:"tags.el-carousel.initial-index.description",values:["number"]},trigger:{type:"attribute",description:"tags.el-carousel.trigger.description",values:["string"]},autoplay:{type:"attribute",description:"tags.el-carousel.autoplay.description",values:["boolean"]},interval:{type:"attribute",description:"tags.el-carousel.interval.description",values:["number"]},"indicator-position":{type:"attribute",description:"tags.el-carousel.indicator-position.description",values:["string"]},arrow:{type:"attribute",description:"tags.el-carousel.arrow.description",values:["string"]},type:{type:"attribute",description:"tags.el-carousel.type.description",values:["string"]},loop:{type:"attribute",description:"tags.el-carousel.loop.description",values:["boolean"]},direction:{type:"attribute",description:"tags.el-carousel.direction.description",values:["string"]},"pause-on-hover":{type:"attribute",description:"tags.el-carousel.pause-on-hover.description",values:["boolean"]},"motion-blur":{type:"attribute",description:"tags.el-carousel.motion-blur.description",values:["boolean"]},change:{type:"method",description:"tags.el-carousel.change.description",values:[]},name:{type:"attribute",description:"tags.el-carousel.name.description",values:["string"]},label:{type:"attribute",description:"tags.el-carousel.label.description",values:["string"]}},"el-collapse":{name:{type:"attribute",description:"tags.el-collapse.name.description",values:["string"]},title:{type:"attribute",description:"tags.el-collapse.title.description",values:["string"]},disabled:{type:"attribute",description:"tags.el-collapse.disabled.description",values:["boolean"]}},"el-descriptions":{border:{type:"attribute",description:"tags.el-descriptions.border.description",values:["boolean"]},column:{type:"attribute",description:"tags.el-descriptions.column.description",values:["number"]},direction:{type:"attribute",description:"tags.el-descriptions.direction.description",values:["horizontal","vertical"]},size:{type:"attribute",description:"tags.el-descriptions.size.description",values:["large","large","small"]},title:{type:"attribute",description:"tags.el-descriptions.title.description",values:["string"]},extra:{type:"attribute",description:"tags.el-descriptions.extra.description",values:["string"]}},"el-descriptions-item":{label:{type:"attribute",description:"tags.el-descriptions-item.label.description",values:["string"]},span:{type:"attribute",description:"tags.el-descriptions-item.span.description",values:["number"]},width:{type:"attribute",description:"tags.el-descriptions-item.width.description",values:["string"]},"min-width":{type:"attribute",description:"tags.el-descriptions-item.min-width.description",values:["string"]},align:{type:"attribute",description:"tags.el-descriptions-item.align.description",values:["enum"]},"label-align":{type:"attribute",description:"tags.el-descriptions-item.label-align.description",values:["enum"]},"class-name":{type:"attribute",description:"tags.el-descriptions-item.class-name.description",values:["string"]},"label-class-name":{type:"attribute",description:"tags.el-descriptions-item.label-class-name.description",values:["string"]}},"el-empty":{image:{type:"attribute",description:"tags.el-empty.image.description",values:["string"]},"image-size":{type:"attribute",description:"tags.el-empty.image-size.description",values:["number"]},description:{type:"attribute",description:"tags.el-empty.description.description",values:["string"]}},"el-image":{"url-list":{type:"attribute",description:"tags.el-image.url-list.description",values:["object"]},"z-index":{type:"attribute",description:"tags.el-image.z-index.description",values:["number"]},"initial-index":{type:"attribute",description:"tags.el-image.initial-index.description",values:["number"]},infinite:{type:"attribute",description:"tags.el-image.infinite.description",values:["boolean"]},"hide-on-click-modal":{type:"attribute",description:"tags.el-image.hide-on-click-modal.description",values:["boolean"]},teleported:{type:"attribute",description:"tags.el-image.teleported.description",values:["boolean"]},"zoom-rate":{type:"attribute",description:"tags.el-image.zoom-rate.description",values:["number"]},"min-scale":{type:"attribute",description:"tags.el-image.min-scale.description",values:["number"]},"max-scale":{type:"attribute",description:"tags.el-image.max-scale.description",values:["number"]},"close-on-press-escape":{type:"attribute",description:"tags.el-image.close-on-press-escape.description",values:["boolean"]},close:{type:"method",description:"tags.el-image.close.description",values:[]},switch:{type:"method",description:"tags.el-image.switch.description",values:[]},rotate:{type:"method",description:"tags.el-image.rotate.description",values:[]}},"el-infinite-scroll":{},"el-pagination":{small:{type:"attribute",description:"tags.el-pagination.small.description",values:["boolean"]},background:{type:"attribute",description:"tags.el-pagination.background.description",values:["boolean"]},"v-model:page-size":{type:"attribute",description:"tags.el-pagination.v-model:page-size.description",values:["number"]},"default-page-size":{type:"attribute",description:"tags.el-pagination.default-page-size.description",values:["number"]},total:{type:"attribute",description:"tags.el-pagination.total.description",values:["number"]},"page-count":{type:"attribute",description:"tags.el-pagination.page-count.description",values:["number"]},"pager-count":{type:"attribute",description:"tags.el-pagination.pager-count.description",values:["number"]},"v-model:current-page":{type:"attribute",description:"tags.el-pagination.v-model:current-page.description",values:["number"]},"default-current-page":{type:"attribute",description:"tags.el-pagination.default-current-page.description",values:["number"]},layout:{type:"attribute",description:"tags.el-pagination.layout.description",values:["string"]},"page-sizes":{type:"attribute",description:"tags.el-pagination.page-sizes.description",values:["object"]},"popper-class":{type:"attribute",description:"tags.el-pagination.popper-class.description",values:["string"]},"prev-text":{type:"attribute",description:"tags.el-pagination.prev-text.description",values:["string"]},"prev-icon":{type:"attribute",description:"tags.el-pagination.prev-icon.description",values:["string"]},"next-text":{type:"attribute",description:"tags.el-pagination.next-text.description",values:["string"]},"next-icon":{type:"attribute",description:"tags.el-pagination.next-icon.description",values:["string"]},disabled:{type:"attribute",description:"tags.el-pagination.disabled.description",values:["boolean"]},teleported:{type:"attribute",description:"tags.el-pagination.teleported.description",values:["boolean"]},"hide-on-single-page":{type:"attribute",description:"tags.el-pagination.hide-on-single-page.description",values:["boolean"]},"size-change":{type:"method",description:"tags.el-pagination.size-change.description",values:[]},"current-change":{type:"method",description:"tags.el-pagination.current-change.description",values:[]},change:{type:"method",description:"tags.el-pagination.change.description",values:[]},"prev-click":{type:"method",description:"tags.el-pagination.prev-click.description",values:[]},"next-click":{type:"method",description:"tags.el-pagination.next-click.description",values:[]}},"el-progress":{percentagerequired:{type:"attribute",description:"tags.el-progress.percentagerequired.description",values:["number"]},type:{type:"attribute",description:"tags.el-progress.type.description",values:["line","circle","dashboard"]},"stroke-width":{type:"attribute",description:"tags.el-progress.stroke-width.description",values:["number"]},"text-inside":{type:"attribute",description:"tags.el-progress.text-inside.description",values:["boolean"]},status:{type:"attribute",description:"tags.el-progress.status.description",values:["success","exception","warning"]},indeterminate:{type:"attribute",description:"tags.el-progress.indeterminate.description",values:["boolean"]},duration:{type:"attribute",description:"tags.el-progress.duration.description",values:["number"]},color:{type:"attribute",description:"tags.el-progress.color.description",values:["string"]},width:{type:"attribute",description:"tags.el-progress.width.description",values:["number"]},"show-text":{type:"attribute",description:"tags.el-progress.show-text.description",values:["boolean"]},"stroke-linecap":{type:"attribute",description:"tags.el-progress.stroke-linecap.description",values:["butt","round","square"]},format:{type:"attribute",description:"tags.el-progress.format.description",values:["Function"]},striped:{type:"attribute",description:"tags.el-progress.striped.description",values:["boolean"]},"striped-flow":{type:"attribute",description:"tags.el-progress.striped-flow.description",values:["boolean"]}},"el-result":{title:{type:"attribute",description:"tags.el-result.title.description",values:["string"]},"sub-title":{type:"attribute",description:"tags.el-result.sub-title.description",values:["string"]},icon:{type:"attribute",description:"tags.el-result.icon.description",values:["enum"]}},"el-skeleton":{animated:{type:"attribute",description:"tags.el-skeleton.animated.description",values:["boolean"]},count:{type:"attribute",description:"tags.el-skeleton.count.description",values:["number"]},loading:{type:"attribute",description:"tags.el-skeleton.loading.description",values:["boolean"]},rows:{type:"attribute",description:"tags.el-skeleton.rows.description",values:["number"]},throttle:{type:"attribute",description:"tags.el-skeleton.throttle.description",values:["number"]}},"el-skeleton-item":{variant:{type:"attribute",description:"tags.el-skeleton-item.variant.description",values:["p","text","h1","h3","caption","button","image","circle","rect"]}},"el-table":{data:{type:"attribute",description:"tags.el-table.data.description",values:["object"]},height:{type:"attribute",description:"tags.el-table.height.description",values:["string"]},"max-height":{type:"attribute",description:"tags.el-table.max-height.description",values:["string"]},stripe:{type:"attribute",description:"tags.el-table.stripe.description",values:["boolean"]},border:{type:"attribute",description:"tags.el-table.border.description",values:["boolean"]},size:{type:"attribute",description:"tags.el-table.size.description",values:["large","large","small"]},fit:{type:"attribute",description:"tags.el-table.fit.description",values:["boolean"]},"show-header":{type:"attribute",description:"tags.el-table.show-header.description",values:["boolean"]},"highlight-current-row":{type:"attribute",description:"tags.el-table.highlight-current-row.description",values:["boolean"]},"current-row-key":{type:"attribute",description:"tags.el-table.current-row-key.description",values:["string"]},"row-class-name":{type:"attribute",description:"tags.el-table.row-class-name.description",values:["Function"]},"row-style":{type:"attribute",description:"tags.el-table.row-style.description",values:["Function"]},"cell-class-name":{type:"attribute",description:"tags.el-table.cell-class-name.description",values:["Function"]},"cell-style":{type:"attribute",description:"tags.el-table.cell-style.description",values:["Function"]},"header-row-class-name":{type:"attribute",description:"tags.el-table.header-row-class-name.description",values:["Function"]},"header-row-style":{type:"attribute",description:"tags.el-table.header-row-style.description",values:["Function"]},"header-cell-class-name":{type:"attribute",description:"tags.el-table.header-cell-class-name.description",values:["Function"]},"header-cell-style":{type:"attribute",description:"tags.el-table.header-cell-style.description",values:["Function"]},"row-key":{type:"attribute",description:"tags.el-table.row-key.description",values:["function"]},"empty-text":{type:"attribute",description:"tags.el-table.empty-text.description",values:["string"]},"default-expand-all":{type:"attribute",description:"tags.el-table.default-expand-all.description",values:["boolean"]},"expand-row-keys":{type:"attribute",description:"tags.el-table.expand-row-keys.description",values:["object"]},"default-sort":{type:"attribute",description:"tags.el-table.default-sort.description",values:["object"]},"tooltip-effect":{type:"attribute",description:"tags.el-table.tooltip-effect.description",values:["dark","light"]},"tooltip-options":{type:"attribute",description:"tags.el-table.tooltip-options.description",values:["object"]},"show-summary":{type:"attribute",description:"tags.el-table.show-summary.description",values:["boolean"]},"sum-text":{type:"attribute",description:"tags.el-table.sum-text.description",values:["string"]},"summary-method":{type:"attribute",description:"tags.el-table.summary-method.description",values:["Function"]},"span-method":{type:"attribute",description:"tags.el-table.span-method.description",values:["Function"]},"select-on-indeterminate":{type:"attribute",description:"tags.el-table.select-on-indeterminate.description",values:["boolean"]},indent:{type:"attribute",description:"tags.el-table.indent.description",values:["number"]},lazy:{type:"attribute",description:"tags.el-table.lazy.description",values:["boolean"]},load:{type:"attribute",description:"tags.el-table.load.description",values:["Function"]},"tree-props":{type:"attribute",description:"tags.el-table.tree-props.description",values:["object"]},"table-layout":{type:"attribute",description:"tags.el-table.table-layout.description",values:["fixed","auto"]},"scrollbar-always-on":{type:"attribute",description:"tags.el-table.scrollbar-always-on.description",values:["boolean"]},"show-overflow-tooltip":{type:"attribute",description:"tags.el-table.show-overflow-tooltip.description",values:["boolean"]},flexible:{type:"attribute",description:"tags.el-table.flexible.description",values:["boolean"]},select:{type:"method",description:"tags.el-table.select.description",values:[]},"select-all":{type:"method",description:"tags.el-table.select-all.description",values:[]},"selection-change":{type:"method",description:"tags.el-table.selection-change.description",values:[]},"cell-mouse-enter":{type:"method",description:"tags.el-table.cell-mouse-enter.description",values:[]},"cell-mouse-leave":{type:"method",description:"tags.el-table.cell-mouse-leave.description",values:[]},"cell-click":{type:"method",description:"tags.el-table.cell-click.description",values:[]},"cell-dblclick":{type:"method",description:"tags.el-table.cell-dblclick.description",values:[]},"cell-contextmenu":{type:"method",description:"tags.el-table.cell-contextmenu.description",values:[]},"row-click":{type:"method",description:"tags.el-table.row-click.description",values:[]},"row-contextmenu":{type:"method",description:"tags.el-table.row-contextmenu.description",values:[]},"row-dblclick":{type:"method",description:"tags.el-table.row-dblclick.description",values:[]},"header-click":{type:"method",description:"tags.el-table.header-click.description",values:[]},"header-contextmenu":{type:"method",description:"tags.el-table.header-contextmenu.description",values:[]},"sort-change":{type:"method",description:"tags.el-table.sort-change.description",values:[]},"filter-change":{type:"method",description:"tags.el-table.filter-change.description",values:[]},"current-change":{type:"method",description:"tags.el-table.current-change.description",values:[]},"header-dragend":{type:"method",description:"tags.el-table.header-dragend.description",values:[]},"expand-change":{type:"method",description:"tags.el-table.expand-change.description",values:[]}},"el-table-column":{type:{type:"attribute",description:"tags.el-table-column.type.description",values:["default","selection","index","expand"]},index:{type:"attribute",description:"tags.el-table-column.index.description",values:["number"]},label:{type:"attribute",description:"tags.el-table-column.label.description",values:["string"]},"column-key":{type:"attribute",description:"tags.el-table-column.column-key.description",values:["string"]},prop:{type:"attribute",description:"tags.el-table-column.prop.description",values:["string"]},width:{type:"attribute",description:"tags.el-table-column.width.description",values:["string"]},"min-width":{type:"attribute",description:"tags.el-table-column.min-width.description",values:["string"]},fixed:{type:"attribute",description:"tags.el-table-column.fixed.description",values:["left","right"]},"render-header":{type:"attribute",description:"tags.el-table-column.render-header.description",values:["Function"]},sortable:{type:"attribute",description:"tags.el-table-column.sortable.description",values:["boolean"]},"sort-method":{type:"attribute",description:"tags.el-table-column.sort-method.description",values:["Function"]},"sort-by":{type:"attribute",description:"tags.el-table-column.sort-by.description",values:["Function"]},"sort-orders":{type:"attribute",description:"tags.el-table-column.sort-orders.description",values:["object"]},resizable:{type:"attribute",description:"tags.el-table-column.resizable.description",values:["boolean"]},formatter:{type:"attribute",description:"tags.el-table-column.formatter.description",values:["function"]},"show-overflow-tooltip":{type:"attribute",description:"tags.el-table-column.show-overflow-tooltip.description",values:["boolean"]},align:{type:"attribute",description:"tags.el-table-column.align.description",values:["left","center","right"]},"header-align":{type:"attribute",description:"tags.el-table-column.header-align.description",values:["left","center","right"]},"class-name":{type:"attribute",description:"tags.el-table-column.class-name.description",values:["string"]},"label-class-name":{type:"attribute",description:"tags.el-table-column.label-class-name.description",values:["string"]},selectable:{type:"attribute",description:"tags.el-table-column.selectable.description",values:["Function"]},"reserve-selection":{type:"attribute",description:"tags.el-table-column.reserve-selection.description",values:["boolean"]},filters:{type:"attribute",description:"tags.el-table-column.filters.description",values:["object"]},"filter-placement":{type:"attribute",description:"tags.el-table-column.filter-placement.description",values:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"]},"filter-class-name":{type:"attribute",description:"tags.el-table-column.filter-class-name.description",values:["string"]},"filter-multiple":{type:"attribute",description:"tags.el-table-column.filter-multiple.description",values:["boolean"]},"filter-method":{type:"attribute",description:"tags.el-table-column.filter-method.description",values:["function"]},"filtered-value":{type:"attribute",description:"tags.el-table-column.filtered-value.description",values:["object"]}},"el-table-v2":{data:{type:"attribute",description:"tags.el-table-v2.data.description",values:["object"]},height:{type:"attribute",description:"tags.el-table-v2.height.description",values:["string"]},"max-height":{type:"attribute",description:"tags.el-table-v2.max-height.description",values:["string"]},stripe:{type:"attribute",description:"tags.el-table-v2.stripe.description",values:["boolean"]},border:{type:"attribute",description:"tags.el-table-v2.border.description",values:["boolean"]},size:{type:"attribute",description:"tags.el-table-v2.size.description",values:["large","large","small"]},fit:{type:"attribute",description:"tags.el-table-v2.fit.description",values:["boolean"]},"show-header":{type:"attribute",description:"tags.el-table-v2.show-header.description",values:["boolean"]},"highlight-current-row":{type:"attribute",description:"tags.el-table-v2.highlight-current-row.description",values:["boolean"]},"current-row-key":{type:"attribute",description:"tags.el-table-v2.current-row-key.description",values:["string"]},"row-class-name":{type:"attribute",description:"tags.el-table-v2.row-class-name.description",values:["Function"]},"row-style":{type:"attribute",description:"tags.el-table-v2.row-style.description",values:["Function"]},"cell-class-name":{type:"attribute",description:"tags.el-table-v2.cell-class-name.description",values:["Function"]},"cell-style":{type:"attribute",description:"tags.el-table-v2.cell-style.description",values:["Function"]},"header-row-class-name":{type:"attribute",description:"tags.el-table-v2.header-row-class-name.description",values:["Function"]},"header-row-style":{type:"attribute",description:"tags.el-table-v2.header-row-style.description",values:["Function"]},"header-cell-class-name":{type:"attribute",description:"tags.el-table-v2.header-cell-class-name.description",values:["Function"]},"header-cell-style":{type:"attribute",description:"tags.el-table-v2.header-cell-style.description",values:["Function"]},"row-key":{type:"attribute",description:"tags.el-table-v2.row-key.description",values:["function"]},"empty-text":{type:"attribute",description:"tags.el-table-v2.empty-text.description",values:["string"]},"default-expand-all":{type:"attribute",description:"tags.el-table-v2.default-expand-all.description",values:["boolean"]},"expand-row-keys":{type:"attribute",description:"tags.el-table-v2.expand-row-keys.description",values:["object"]},"default-sort":{type:"attribute",description:"tags.el-table-v2.default-sort.description",values:["object"]},"tooltip-effect":{type:"attribute",description:"tags.el-table-v2.tooltip-effect.description",values:["dark","light"]},"tooltip-options":{type:"attribute",description:"tags.el-table-v2.tooltip-options.description",values:["object"]},"show-summary":{type:"attribute",description:"tags.el-table-v2.show-summary.description",values:["boolean"]},"sum-text":{type:"attribute",description:"tags.el-table-v2.sum-text.description",values:["string"]},"summary-method":{type:"attribute",description:"tags.el-table-v2.summary-method.description",values:["Function"]},"span-method":{type:"attribute",description:"tags.el-table-v2.span-method.description",values:["Function"]},"select-on-indeterminate":{type:"attribute",description:"tags.el-table-v2.select-on-indeterminate.description",values:["boolean"]},indent:{type:"attribute",description:"tags.el-table-v2.indent.description",values:["number"]},lazy:{type:"attribute",description:"tags.el-table-v2.lazy.description",values:["boolean"]},load:{type:"attribute",description:"tags.el-table-v2.load.description",values:["Function"]},"tree-props":{type:"attribute",description:"tags.el-table-v2.tree-props.description",values:["object"]},"table-layout":{type:"attribute",description:"tags.el-table-v2.table-layout.description",values:["fixed","auto"]},"scrollbar-always-on":{type:"attribute",description:"tags.el-table-v2.scrollbar-always-on.description",values:["boolean"]},"show-overflow-tooltip":{type:"attribute",description:"tags.el-table-v2.show-overflow-tooltip.description",values:["boolean"]},flexible:{type:"attribute",description:"tags.el-table-v2.flexible.description",values:["boolean"]},select:{type:"method",description:"tags.el-table-v2.select.description",values:[]},"select-all":{type:"method",description:"tags.el-table-v2.select-all.description",values:[]},"selection-change":{type:"method",description:"tags.el-table-v2.selection-change.description",values:[]},"cell-mouse-enter":{type:"method",description:"tags.el-table-v2.cell-mouse-enter.description",values:[]},"cell-mouse-leave":{type:"method",description:"tags.el-table-v2.cell-mouse-leave.description",values:[]},"cell-click":{type:"method",description:"tags.el-table-v2.cell-click.description",values:[]},"cell-dblclick":{type:"method",description:"tags.el-table-v2.cell-dblclick.description",values:[]},"cell-contextmenu":{type:"method",description:"tags.el-table-v2.cell-contextmenu.description",values:[]},"row-click":{type:"method",description:"tags.el-table-v2.row-click.description",values:[]},"row-contextmenu":{type:"method",description:"tags.el-table-v2.row-contextmenu.description",values:[]},"row-dblclick":{type:"method",description:"tags.el-table-v2.row-dblclick.description",values:[]},"header-click":{type:"method",description:"tags.el-table-v2.header-click.description",values:[]},"header-contextmenu":{type:"method",description:"tags.el-table-v2.header-contextmenu.description",values:[]},"sort-change":{type:"method",description:"tags.el-table-v2.sort-change.description",values:[]},"filter-change":{type:"method",description:"tags.el-table-v2.filter-change.description",values:[]},"current-change":{type:"method",description:"tags.el-table-v2.current-change.description",values:[]},"header-dragend":{type:"method",description:"tags.el-table-v2.header-dragend.description",values:[]},"expand-change":{type:"method",description:"tags.el-table-v2.expand-change.description",values:[]}},"el-tag":{type:{type:"attribute",description:"tags.el-tag.type.description",values:["primary","success","warning","danger","info"]},closable:{type:"attribute",description:"tags.el-tag.closable.description",values:["boolean"]},"disable-transitions":{type:"attribute",description:"tags.el-tag.disable-transitions.description",values:["boolean"]},hit:{type:"attribute",description:"tags.el-tag.hit.description",values:["boolean"]},color:{type:"attribute",description:"tags.el-tag.color.description",values:["string"]},size:{type:"attribute",description:"tags.el-tag.size.description",values:["large","large","small"]},effect:{type:"attribute",description:"tags.el-tag.effect.description",values:["dark","light"]},round:{type:"attribute",description:"tags.el-tag.round.description",values:["boolean"]},click:{type:"method",description:"tags.el-tag.click.description",values:[]},close:{type:"method",description:"tags.el-tag.close.description",values:[]}},"el-check-tag":{"v-model:checked":{type:"attribute",description:"tags.el-check-tag.v-model:checked.description",values:["boolean"]},type:{type:"attribute",description:"tags.el-check-tag.type.description",values:["primary","success","warning","danger","info"]},change:{type:"method",description:"tags.el-check-tag.change.description",values:[]}},"el-timeline":{},"el-timeline--item":{timestamp:{type:"attribute",description:"tags.el-timeline--item.timestamp.description",values:["string"]},"hide-timestamp":{type:"attribute",description:"tags.el-timeline--item.hide-timestamp.description",values:["boolean"]},center:{type:"attribute",description:"tags.el-timeline--item.center.description",values:["boolean"]},placement:{type:"attribute",description:"tags.el-timeline--item.placement.description",values:["enum"]},type:{type:"attribute",description:"tags.el-timeline--item.type.description",values:["primary","success","warning","danger","info"]},color:{type:"attribute",description:"tags.el-timeline--item.color.description",values:["enum"]},size:{type:"attribute",description:"tags.el-timeline--item.size.description",values:["large","large","small"]},icon:{type:"attribute",description:"tags.el-timeline--item.icon.description",values:["string"]},hollow:{type:"attribute",description:"tags.el-timeline--item.hollow.description",values:["boolean"]}},"el-tour":{"show-arrow":{type:"attribute",description:"tags.el-tour.show-arrow.description",values:["boolean"]},placement:{type:"attribute",description:"tags.el-tour.placement.description",values:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"]},"content-style":{type:"attribute",description:"tags.el-tour.content-style.description",values:["CSSProperties"]},mask:{type:"attribute",description:"tags.el-tour.mask.description",values:["boolean","Object"]},type:{type:"attribute",description:"tags.el-tour.type.description",values:["default","primary"]},"v-model":{type:"attribute",description:"tags.el-tour.v-model.description",values:["boolean"]},"v-model:current":{type:"attribute",description:"tags.el-tour.v-model:current.description",values:["number"]},"scroll-into-view-options":{type:"attribute",description:"tags.el-tour.scroll-into-view-options.description",values:["boolean","ScrollIntoViewOptions"]},"z-index":{type:"attribute",description:"tags.el-tour.z-index.description",values:["number"]},"show-close":{type:"attribute",description:"tags.el-tour.show-close.description",values:["boolean"]},"close-icon":{type:"attribute",description:"tags.el-tour.close-icon.description",values:["string","Component"]},"close-on-press-escape":{type:"attribute",description:"tags.el-tour.close-on-press-escape.description",values:["boolean"]},"target-area-clickable":{type:"attribute",description:"tags.el-tour.target-area-clickable.description",values:["boolean"]},close:{type:"method",description:"tags.el-tour.close.description",values:[]},finish:{type:"method",description:"tags.el-tour.finish.description",values:[]},change:{type:"method",description:"tags.el-tour.change.description",values:[]},target:{type:"attribute",description:"tags.el-tour.target.description",values:["HTMLElement","string","Function"]},title:{type:"attribute",description:"tags.el-tour.title.description",values:["string"]},description:{type:"attribute",description:"tags.el-tour.description.description",values:["string"]},"next-button-props":{type:"attribute",description:"tags.el-tour.next-button-props.description",values:["Object"]},"prev-button-props":{type:"attribute",description:"tags.el-tour.prev-button-props.description",values:["Object"]}},"el-tree":{data:{type:"attribute",description:"tags.el-tree.data.description",values:["array"]},"empty-text":{type:"attribute",description:"tags.el-tree.empty-text.description",values:["string"]},"node-key":{type:"attribute",description:"tags.el-tree.node-key.description",values:["string"]},props:{type:"attribute",description:"tags.el-tree.props.description",values:["object"]},"render-after-expand":{type:"attribute",description:"tags.el-tree.render-after-expand.description",values:["boolean"]},load:{type:"attribute",description:"tags.el-tree.load.description",values:["function(node,"]},"render-content":{type:"attribute",description:"tags.el-tree.render-content.description",values:["Function(h,"]},"highlight-current":{type:"attribute",description:"tags.el-tree.highlight-current.description",values:["boolean"]},"default-expand-all":{type:"attribute",description:"tags.el-tree.default-expand-all.description",values:["boolean"]},"expand-on-click-node":{type:"attribute",description:"tags.el-tree.expand-on-click-node.description",values:["boolean"]},"check-on-click-node":{type:"attribute",description:"tags.el-tree.check-on-click-node.description",values:["boolean"]},"auto-expand-parent":{type:"attribute",description:"tags.el-tree.auto-expand-parent.description",values:["boolean"]},"default-expanded-keys":{type:"attribute",description:"tags.el-tree.default-expanded-keys.description",values:["array"]},"show-checkbox":{type:"attribute",description:"tags.el-tree.show-checkbox.description",values:["boolean"]},"check-strictly":{type:"attribute",description:"tags.el-tree.check-strictly.description",values:["boolean"]},"default-checked-keys":{type:"attribute",description:"tags.el-tree.default-checked-keys.description",values:["array"]},"current-node-key":{type:"attribute",description:"tags.el-tree.current-node-key.description",values:["string"]},"filter-node-method":{type:"attribute",description:"tags.el-tree.filter-node-method.description",values:["Function(value,"]},accordion:{type:"attribute",description:"tags.el-tree.accordion.description",values:["boolean"]},indent:{type:"attribute",description:"tags.el-tree.indent.description",values:["number"]},icon:{type:"attribute",description:"tags.el-tree.icon.description",values:["string","Component"]},lazy:{type:"attribute",description:"tags.el-tree.lazy.description",values:["boolean"]},draggable:{type:"attribute",description:"tags.el-tree.draggable.description",values:["boolean"]},"allow-drag":{type:"attribute",description:"tags.el-tree.allow-drag.description",values:["Function(node)"]},"allow-drop":{type:"attribute",description:"tags.el-tree.allow-drop.description",values:["Function(draggingNode,"]},"node-click":{type:"method",description:"tags.el-tree.node-click.description",values:[]},"node-contextmenu":{type:"method",description:"tags.el-tree.node-contextmenu.description",values:[]},"check-change":{type:"method",description:"tags.el-tree.check-change.description",values:[]},check:{type:"method",description:"tags.el-tree.check.description",values:[]},"current-change":{type:"method",description:"tags.el-tree.current-change.description",values:[]},"node-expand":{type:"method",description:"tags.el-tree.node-expand.description",values:[]},"node-collapse":{type:"method",description:"tags.el-tree.node-collapse.description",values:[]},"node-drag-start":{type:"method",description:"tags.el-tree.node-drag-start.description",values:[]},"node-drag-enter":{type:"method",description:"tags.el-tree.node-drag-enter.description",values:[]},"node-drag-leave":{type:"method",description:"tags.el-tree.node-drag-leave.description",values:[]},"node-drag-over":{type:"method",description:"tags.el-tree.node-drag-over.description",values:[]},"node-drag-end":{type:"method",description:"tags.el-tree.node-drag-end.description",values:[]},"node-drop":{type:"method",description:"tags.el-tree.node-drop.description",values:[]}},"el-tree-select":{tree:{type:"attribute",description:"tags.el-tree-select.tree.description",values:["tree"]},select:{type:"attribute",description:"tags.el-tree-select.select.description",values:["select"]},cacheData:{type:"attribute",description:"tags.el-tree-select.cacheData.description",values:["object"]}},"el-tree-v2":{data:{type:"attribute",description:"tags.el-tree-v2.data.description",values:["array"]},"empty-text":{type:"attribute",description:"tags.el-tree-v2.empty-text.description",values:["string"]},props:{type:"attribute",description:"tags.el-tree-v2.props.description",values:["object"]},"highlight-current":{type:"attribute",description:"tags.el-tree-v2.highlight-current.description",values:["boolean"]},"expand-on-click-node":{type:"attribute",description:"tags.el-tree-v2.expand-on-click-node.description",values:["boolean"]},"check-on-click-node":{type:"attribute",description:"tags.el-tree-v2.check-on-click-node.description",values:["boolean"]},"default-expanded-keys":{type:"attribute",description:"tags.el-tree-v2.default-expanded-keys.description",values:["array"]},"show-checkbox":{type:"attribute",description:"tags.el-tree-v2.show-checkbox.description",values:["boolean"]},"check-strictly":{type:"attribute",description:"tags.el-tree-v2.check-strictly.description",values:["boolean"]},"default-checked-keys":{type:"attribute",description:"tags.el-tree-v2.default-checked-keys.description",values:["array"]},"current-node-key":{type:"attribute",description:"tags.el-tree-v2.current-node-key.description",values:["string"]},"filter-method":{type:"attribute",description:"tags.el-tree-v2.filter-method.description",values:["Function(value,"]},indent:{type:"attribute",description:"tags.el-tree-v2.indent.description",values:["number"]},icon:{type:"attribute",description:"tags.el-tree-v2.icon.description",values:["string","Component"]},"item-size":{type:"attribute",description:"tags.el-tree-v2.item-size.description",values:["number"]},"node-click":{type:"method",description:"tags.el-tree-v2.node-click.description",values:[]},"node-contextmenu":{type:"method",description:"tags.el-tree-v2.node-contextmenu.description",values:[]},"check-change":{type:"method",description:"tags.el-tree-v2.check-change.description",values:[]},check:{type:"method",description:"tags.el-tree-v2.check.description",values:[]},"current-change":{type:"method",description:"tags.el-tree-v2.current-change.description",values:[]},"node-expand":{type:"method",description:"tags.el-tree-v2.node-expand.description",values:[]},"node-collapse":{type:"method",description:"tags.el-tree-v2.node-collapse.description",values:[]}},"el-statistic":{value:{type:"attribute",description:"tags.el-statistic.value.description",values:["number"]},"decimal-separator":{type:"attribute",description:"tags.el-statistic.decimal-separator.description",values:["string"]},formatter:{type:"attribute",description:"tags.el-statistic.formatter.description",values:["Function"]},"group-separator":{type:"attribute",description:"tags.el-statistic.group-separator.description",values:["string"]},precision:{type:"attribute",description:"tags.el-statistic.precision.description",values:["number"]},prefix:{type:"attribute",description:"tags.el-statistic.prefix.description",values:["string"]},suffix:{type:"attribute",description:"tags.el-statistic.suffix.description",values:["string"]},title:{type:"attribute",description:"tags.el-statistic.title.description",values:["string"]},"value-style":{type:"attribute",description:"tags.el-statistic.value-style.description",values:["string"]}},"el-countdown":{value:{type:"attribute",description:"tags.el-countdown.value.description",values:["number"]},format:{type:"attribute",description:"tags.el-countdown.format.description",values:["string"]},prefix:{type:"attribute",description:"tags.el-countdown.prefix.description",values:["string"]},suffix:{type:"attribute",description:"tags.el-countdown.suffix.description",values:["string"]},title:{type:"attribute",description:"tags.el-countdown.title.description",values:["string"]},"value-style":{type:"attribute",description:"tags.el-countdown.value-style.description",values:["string"]},change:{type:"method",description:"tags.el-countdown.change.description",values:[]},finish:{type:"method",description:"tags.el-countdown.finish.description",values:[]}},"el-segmented":{"v-model":{type:"attribute",description:"tags.el-segmented.v-model.description",values:["string"]},options:{type:"attribute",description:"tags.el-segmented.options.description",values:["array"]},size:{type:"attribute",description:"tags.el-segmented.size.description",values:["large","large","small"]},block:{type:"attribute",description:"tags.el-segmented.block.description",values:["boolean"]},disabled:{type:"attribute",description:"tags.el-segmented.disabled.description",values:["boolean"]},"validate-event":{type:"attribute",description:"tags.el-segmented.validate-event.description",values:["boolean"]},name:{type:"attribute",description:"tags.el-segmented.name.description",values:["string"]},id:{type:"attribute",description:"tags.el-segmented.id.description",values:["string"]},"aria-labelay":{type:"attribute",description:"tags.el-segmented.aria-labelay.description",values:["string"]},change:{type:"method",description:"tags.el-segmented.change.description",values:[]}},"el-affix":{offset:{type:"attribute",description:"tags.el-affix.offset.description",values:["number"]},position:{type:"attribute",description:"tags.el-affix.position.description",values:["top","bottom"]},target:{type:"attribute",description:"tags.el-affix.target.description",values:["string"]},"z-index":{type:"attribute",description:"tags.el-affix.z-index.description",values:["number"]},change:{type:"method",description:"tags.el-affix.change.description",values:[]},scroll:{type:"method",description:"tags.el-affix.scroll.description",values:[]}},"el-anchor":{container:{type:"attribute",description:"tags.el-anchor.container.description",values:["string","HTMLElement","Window"]},offset:{type:"attribute",description:"tags.el-anchor.offset.description",values:["number"]},bound:{type:"attribute",description:"tags.el-anchor.bound.description",values:["number"]},duration:{type:"attribute",description:"tags.el-anchor.duration.description",values:["number"]},marker:{type:"attribute",description:"tags.el-anchor.marker.description",values:["boolean"]},type:{type:"attribute",description:"tags.el-anchor.type.description",values:["defalut","underline"]},direction:{type:"attribute",description:"tags.el-anchor.direction.description",values:["vertical","horizontal"]},change:{type:"method",description:"tags.el-anchor.change.description",values:[]},click:{type:"method",description:"tags.el-anchor.click.description",values:[]},title:{type:"attribute",description:"tags.el-anchor.title.description",values:["string"]},href:{type:"attribute",description:"tags.el-anchor.href.description",values:["string"]}},"el-backtop":{target:{type:"attribute",description:"tags.el-backtop.target.description",values:["string"]},"visibility-height":{type:"attribute",description:"tags.el-backtop.visibility-height.description",values:["number"]},right:{type:"attribute",description:"tags.el-backtop.right.description",values:["number"]},bottom:{type:"attribute",description:"tags.el-backtop.bottom.description",values:["number"]},click:{type:"method",description:"tags.el-backtop.click.description",values:[]}},"el-breadcrumb":{separator:{type:"attribute",description:"tags.el-breadcrumb.separator.description",values:["string"]},"separator-icon":{type:"attribute",description:"tags.el-breadcrumb.separator-icon.description",values:["string"]}},"el-breadcrumb-item":{to:{type:"attribute",description:"tags.el-breadcrumb-item.to.description",values:["string"]},replace:{type:"attribute",description:"tags.el-breadcrumb-item.replace.description",values:["boolean"]}},"el-dropdown":{type:{type:"attribute",description:"tags.el-dropdown.type.description",values:["string"]},size:{type:"attribute",description:"tags.el-dropdown.size.description",values:["string"]},"max-height":{type:"attribute",description:"tags.el-dropdown.max-height.description",values:["string"]},"split-button":{type:"attribute",description:"tags.el-dropdown.split-button.description",values:["boolean"]},disabled:{type:"attribute",description:"tags.el-dropdown.disabled.description",values:["boolean"]},placement:{type:"attribute",description:"tags.el-dropdown.placement.description",values:["string"]},trigger:{type:"attribute",description:"tags.el-dropdown.trigger.description",values:["string"]},"hide-on-click":{type:"attribute",description:"tags.el-dropdown.hide-on-click.description",values:["boolean"]},"show-timeout":{type:"attribute",description:"tags.el-dropdown.show-timeout.description",values:["number"]},"hide-timeout":{type:"attribute",description:"tags.el-dropdown.hide-timeout.description",values:["number"]},role:{type:"attribute",description:"tags.el-dropdown.role.description",values:["string"]},tabindex:{type:"attribute",description:"tags.el-dropdown.tabindex.description",values:["number"]},"popper-class":{type:"attribute",description:"tags.el-dropdown.popper-class.description",values:["string"]},"popper-options":{type:"attribute",description:"tags.el-dropdown.popper-options.description",values:["Object"]},teleported:{type:"attribute",description:"tags.el-dropdown.teleported.description",values:["boolean"]},click:{type:"method",description:"tags.el-dropdown.click.description",values:[]},command:{type:"attribute",description:"tags.el-dropdown.command.description",values:["string"]},"visible-change":{type:"method",description:"tags.el-dropdown.visible-change.description",values:[]},divided:{type:"attribute",description:"tags.el-dropdown.divided.description",values:["boolean"]},icon:{type:"attribute",description:"tags.el-dropdown.icon.description",values:["string","Component"]}},"el-menu":{mode:{type:"attribute",description:"tags.el-menu.mode.description",values:["string"]},collapse:{type:"attribute",description:"tags.el-menu.collapse.description",values:["boolean"]},ellipsis:{type:"attribute",description:"tags.el-menu.ellipsis.description",values:["boolean"]},"ellipsis-icon":{type:"attribute",description:"tags.el-menu.ellipsis-icon.description",values:["string","Component"]},"popper-offset":{type:"attribute",description:"tags.el-menu.popper-offset.description",values:["number"]},"background-color":{type:"attribute",description:"tags.el-menu.background-color.description",values:["string"]},"text-color":{type:"attribute",description:"tags.el-menu.text-color.description",values:["string"]},"active-text-color":{type:"attribute",description:"tags.el-menu.active-text-color.description",values:["string"]},"default-active":{type:"attribute",description:"tags.el-menu.default-active.description",values:["string"]},"default-openeds":{type:"attribute",description:"tags.el-menu.default-openeds.description",values:["Array"]},"unique-opened":{type:"attribute",description:"tags.el-menu.unique-opened.description",values:["boolean"]},"menu-trigger":{type:"attribute",description:"tags.el-menu.menu-trigger.description",values:["string"]},router:{type:"attribute",description:"tags.el-menu.router.description",values:["boolean"]},"collapse-transition":{type:"attribute",description:"tags.el-menu.collapse-transition.description",values:["boolean"]},"popper-effect":{type:"attribute",description:"tags.el-menu.popper-effect.description",values:["string"]},"close-on-click-outside":{type:"attribute",description:"tags.el-menu.close-on-click-outside.description",values:["boolean"]},"popper-class":{type:"attribute",description:"tags.el-menu.popper-class.description",values:["string"]},"show-timeout":{type:"attribute",description:"tags.el-menu.show-timeout.description",values:["number"]},"hide-timeout":{type:"attribute",description:"tags.el-menu.hide-timeout.description",values:["number"]},select:{type:"method",description:"tags.el-menu.select.description",values:[]},open:{type:"method",description:"tags.el-menu.open.description",values:[]},close:{type:"method",description:"tags.el-menu.close.description",values:[]},index:{type:"attribute",description:"tags.el-menu.index.description",values:["string"]},disabled:{type:"attribute",description:"tags.el-menu.disabled.description",values:["boolean"]},"popper-append-to-bodydeprecated":{type:"attribute",description:"tags.el-menu.popper-append-to-bodydeprecated.description",values:["boolean"]},teleported:{type:"attribute",description:"tags.el-menu.teleported.description",values:["boolean"]},"expand-close-icon":{type:"attribute",description:"tags.el-menu.expand-close-icon.description",values:["string","Component"]},"expand-open-icon":{type:"attribute",description:"tags.el-menu.expand-open-icon.description",values:["string","Component"]},"collapse-close-icon":{type:"attribute",description:"tags.el-menu.collapse-close-icon.description",values:["string","Component"]},"collapse-open-icon":{type:"attribute",description:"tags.el-menu.collapse-open-icon.description",values:["string","Component"]},route:{type:"attribute",description:"tags.el-menu.route.description",values:["object"]},click:{type:"method",description:"tags.el-menu.click.description",values:[]},title:{type:"attribute",description:"tags.el-menu.title.description",values:["string"]}},"el-page-header":{icon:{type:"attribute",description:"tags.el-page-header.icon.description",values:["string"]},title:{type:"attribute",description:"tags.el-page-header.title.description",values:["string"]},content:{type:"attribute",description:"tags.el-page-header.content.description",values:["string"]},back:{type:"method",description:"tags.el-page-header.back.description",values:[]}},"el-steps":{space:{type:"attribute",description:"tags.el-steps.space.description",values:["number"]},direction:{type:"attribute",description:"tags.el-steps.direction.description",values:["horizontal","vertical"]},active:{type:"attribute",description:"tags.el-steps.active.description",values:["number"]},"process-status":{type:"attribute",description:"tags.el-steps.process-status.description",values:["enum"]},"finish-status":{type:"attribute",description:"tags.el-steps.finish-status.description",values:["wait","process","finish","error","success"]},"align-center":{type:"attribute",description:"tags.el-steps.align-center.description",values:["boolean"]},simple:{type:"attribute",description:"tags.el-steps.simple.description",values:["boolean"]}},"el-step":{title:{type:"attribute",description:"tags.el-step.title.description",values:["string"]},description:{type:"attribute",description:"tags.el-step.description.description",values:["string"]},icon:{type:"attribute",description:"tags.el-step.icon.description",values:["string"]},status:{type:"attribute",description:"tags.el-step.status.description",values:["wait","process","finish","error","success"]}},"el-tabs":{"v-model":{type:"attribute",description:"tags.el-tabs.v-model.description",values:["string"]},type:{type:"attribute",description:"tags.el-tabs.type.description",values:["string"]},closable:{type:"attribute",description:"tags.el-tabs.closable.description",values:["boolean"]},addable:{type:"attribute",description:"tags.el-tabs.addable.description",values:["boolean"]},editable:{type:"attribute",description:"tags.el-tabs.editable.description",values:["boolean"]},"tab-position":{type:"attribute",description:"tags.el-tabs.tab-position.description",values:["string"]},stretch:{type:"attribute",description:"tags.el-tabs.stretch.description",values:["boolean"]},"before-leave":{type:"attribute",description:"tags.el-tabs.before-leave.description",values:["Function(activeName,"]},"tab-click":{type:"method",description:"tags.el-tabs.tab-click.description",values:[]},"tab-change":{type:"method",description:"tags.el-tabs.tab-change.description",values:[]},"tab-remove":{type:"method",description:"tags.el-tabs.tab-remove.description",values:[]},"tab-add":{type:"method",description:"tags.el-tabs.tab-add.description",values:[]},edit:{type:"method",description:"tags.el-tabs.edit.description",values:[]},label:{type:"attribute",description:"tags.el-tabs.label.description",values:["string"]},disabled:{type:"attribute",description:"tags.el-tabs.disabled.description",values:["boolean"]},name:{type:"attribute",description:"tags.el-tabs.name.description",values:["string"]},lazy:{type:"attribute",description:"tags.el-tabs.lazy.description",values:["boolean"]}},"el-alert":{title:{type:"attribute",description:"tags.el-alert.title.description",values:["string"]},type:{type:"attribute",description:"tags.el-alert.type.description",values:["primary","success","warning","danger","info"]},description:{type:"attribute",description:"tags.el-alert.description.description",values:["string"]},closable:{type:"attribute",description:"tags.el-alert.closable.description",values:["boolean"]},center:{type:"attribute",description:"tags.el-alert.center.description",values:["boolean"]},"close-text":{type:"attribute",description:"tags.el-alert.close-text.description",values:["string"]},"show-icon":{type:"attribute",description:"tags.el-alert.show-icon.description",values:["boolean"]},effect:{type:"attribute",description:"tags.el-alert.effect.description",values:["dark","light"]},close:{type:"method",description:"tags.el-alert.close.description",values:[]}},"el-dialog":{"v-model":{type:"attribute",description:"tags.el-dialog.v-model.description",values:["boolean"]},title:{type:"attribute",description:"tags.el-dialog.title.description",values:["string"]},width:{type:"attribute",description:"tags.el-dialog.width.description",values:["string"]},fullscreen:{type:"attribute",description:"tags.el-dialog.fullscreen.description",values:["boolean"]},top:{type:"attribute",description:"tags.el-dialog.top.description",values:["string"]},modal:{type:"attribute",description:"tags.el-dialog.modal.description",values:["boolean"]},"modal-class":{type:"attribute",description:"tags.el-dialog.modal-class.description",values:["string"]},"append-to-body":{type:"attribute",description:"tags.el-dialog.append-to-body.description",values:["boolean"]},"append-to":{type:"attribute",description:"tags.el-dialog.append-to.description",values:["string"]},"lock-scroll":{type:"attribute",description:"tags.el-dialog.lock-scroll.description",values:["boolean"]},"custom-classdeprecated":{type:"attribute",description:"tags.el-dialog.custom-classdeprecated.description",values:["string"]},"open-delay":{type:"attribute",description:"tags.el-dialog.open-delay.description",values:["number"]},"close-delay":{type:"attribute",description:"tags.el-dialog.close-delay.description",values:["number"]},"close-on-click-modal":{type:"attribute",description:"tags.el-dialog.close-on-click-modal.description",values:["boolean"]},"close-on-press-escape":{type:"attribute",description:"tags.el-dialog.close-on-press-escape.description",values:["boolean"]},"show-close":{type:"attribute",description:"tags.el-dialog.show-close.description",values:["boolean"]},"before-close":{type:"attribute",description:"tags.el-dialog.before-close.description",values:["Function"]},draggable:{type:"attribute",description:"tags.el-dialog.draggable.description",values:["boolean"]},overflow:{type:"attribute",description:"tags.el-dialog.overflow.description",values:["boolean"]},center:{type:"attribute",description:"tags.el-dialog.center.description",values:["boolean"]},"align-center":{type:"attribute",description:"tags.el-dialog.align-center.description",values:["boolean"]},"destroy-on-close":{type:"attribute",description:"tags.el-dialog.destroy-on-close.description",values:["boolean"]},"close-icon":{type:"attribute",description:"tags.el-dialog.close-icon.description",values:["string"]},"z-index":{type:"attribute",description:"tags.el-dialog.z-index.description",values:["number"]},"header-aria-levelay":{type:"attribute",description:"tags.el-dialog.header-aria-levelay.description",values:["string"]},open:{type:"method",description:"tags.el-dialog.open.description",values:[]},opened:{type:"method",description:"tags.el-dialog.opened.description",values:[]},close:{type:"method",description:"tags.el-dialog.close.description",values:[]},closed:{type:"method",description:"tags.el-dialog.closed.description",values:[]},"open-auto-focus":{type:"method",description:"tags.el-dialog.open-auto-focus.description",values:[]},"close-auto-focus":{type:"method",description:"tags.el-dialog.close-auto-focus.description",values:[]}},"el-drawer":{"v-model":{type:"attribute",description:"tags.el-drawer.v-model.description",values:["boolean"]},"append-to-body":{type:"attribute",description:"tags.el-drawer.append-to-body.description",values:["boolean"]},"lock-scroll":{type:"attribute",description:"tags.el-drawer.lock-scroll.description",values:["boolean"]},"before-close":{type:"attribute",description:"tags.el-drawer.before-close.description",values:["Function"]},"close-on-click-modal":{type:"attribute",description:"tags.el-drawer.close-on-click-modal.description",values:["boolean"]},"close-on-press-escape":{type:"attribute",description:"tags.el-drawer.close-on-press-escape.description",values:["boolean"]},"open-delay":{type:"attribute",description:"tags.el-drawer.open-delay.description",values:["number"]},"close-delay":{type:"attribute",description:"tags.el-drawer.close-delay.description",values:["number"]},"custom-classdeprecated":{type:"attribute",description:"tags.el-drawer.custom-classdeprecated.description",values:["string"]},"destroy-on-close":{type:"attribute",description:"tags.el-drawer.destroy-on-close.description",values:["boolean"]},modal:{type:"attribute",description:"tags.el-drawer.modal.description",values:["boolean"]},direction:{type:"attribute",description:"tags.el-drawer.direction.description",values:["rtl","ltr","ttb","btt","rtl"]},"show-close":{type:"attribute",description:"tags.el-drawer.show-close.description",values:["boolean"]},size:{type:"attribute",description:"tags.el-drawer.size.description",values:["number"]},title:{type:"attribute",description:"tags.el-drawer.title.description",values:["string"]},"with-header":{type:"attribute",description:"tags.el-drawer.with-header.description",values:["boolean"]},"modal-class":{type:"attribute",description:"tags.el-drawer.modal-class.description",values:["string"]},"z-index":{type:"attribute",description:"tags.el-drawer.z-index.description",values:["number"]},"header-aria-levelay":{type:"attribute",description:"tags.el-drawer.header-aria-levelay.description",values:["string"]},open:{type:"method",description:"tags.el-drawer.open.description",values:[]},opened:{type:"method",description:"tags.el-drawer.opened.description",values:[]},close:{type:"method",description:"tags.el-drawer.close.description",values:[]},closed:{type:"method",description:"tags.el-drawer.closed.description",values:[]},"open-auto-focus":{type:"method",description:"tags.el-drawer.open-auto-focus.description",values:[]},"close-auto-focus":{type:"method",description:"tags.el-drawer.close-auto-focus.description",values:[]}},"el-loading":{},"el-message":{},"el-message-box":{},"el-notification":{},"el-popconfirm":{title:{type:"attribute",description:"tags.el-popconfirm.title.description",values:["string"]},"confirm-button-text":{type:"attribute",description:"tags.el-popconfirm.confirm-button-text.description",values:["string"]},"cancel-button-text":{type:"attribute",description:"tags.el-popconfirm.cancel-button-text.description",values:["string"]},"confirm-button-type":{type:"attribute",description:"tags.el-popconfirm.confirm-button-type.description",values:["primary","success","warning","danger","info","text"]},"cancel-button-type":{type:"attribute",description:"tags.el-popconfirm.cancel-button-type.description",values:["primary","success","warning","danger","info","text"]},icon:{type:"attribute",description:"tags.el-popconfirm.icon.description",values:["string"]},"icon-color":{type:"attribute",description:"tags.el-popconfirm.icon-color.description",values:["string"]},"hide-icon":{type:"attribute",description:"tags.el-popconfirm.hide-icon.description",values:["boolean"]},"hide-after":{type:"attribute",description:"tags.el-popconfirm.hide-after.description",values:["number"]},teleported:{type:"attribute",description:"tags.el-popconfirm.teleported.description",values:["boolean"]},persistent:{type:"attribute",description:"tags.el-popconfirm.persistent.description",values:["boolean"]},width:{type:"attribute",description:"tags.el-popconfirm.width.description",values:["string"]},confirm:{type:"method",description:"tags.el-popconfirm.confirm.description",values:[]},cancel:{type:"method",description:"tags.el-popconfirm.cancel.description",values:[]}},"el-popover":{trigger:{type:"attribute",description:"tags.el-popover.trigger.description",values:["string"]},title:{type:"attribute",description:"tags.el-popover.title.description",values:["string"]},effect:{type:"attribute",description:"tags.el-popover.effect.description",values:["string"]},content:{type:"attribute",description:"tags.el-popover.content.description",values:["string"]},width:{type:"attribute",description:"tags.el-popover.width.description",values:["string"]},placement:{type:"attribute",description:"tags.el-popover.placement.description",values:["string"]},disabled:{type:"attribute",description:"tags.el-popover.disabled.description",values:["boolean"]},"v-model:visible":{type:"attribute",description:"tags.el-popover.v-model:visible.description",values:["Boolean"]},offset:{type:"attribute",description:"tags.el-popover.offset.description",values:["number"]},transition:{type:"attribute",description:"tags.el-popover.transition.description",values:["string"]},"show-arrow":{type:"attribute",description:"tags.el-popover.show-arrow.description",values:["boolean"]},"popper-options":{type:"attribute",description:"tags.el-popover.popper-options.description",values:["object"]},"popper-class":{type:"attribute",description:"tags.el-popover.popper-class.description",values:["string"]},"popper-style":{type:"attribute",description:"tags.el-popover.popper-style.description",values:["string"]},"show-after":{type:"attribute",description:"tags.el-popover.show-after.description",values:["number"]},"hide-after":{type:"attribute",description:"tags.el-popover.hide-after.description",values:["number"]},"auto-close":{type:"attribute",description:"tags.el-popover.auto-close.description",values:["number"]},tabindex:{type:"attribute",description:"tags.el-popover.tabindex.description",values:["number"]},teleported:{type:"attribute",description:"tags.el-popover.teleported.description",values:["boolean"]},persistent:{type:"attribute",description:"tags.el-popover.persistent.description",values:["boolean"]},show:{type:"method",description:"tags.el-popover.show.description",values:[]},"before-enter":{type:"method",description:"tags.el-popover.before-enter.description",values:[]},"after-enter":{type:"method",description:"tags.el-popover.after-enter.description",values:[]},hide:{type:"method",description:"tags.el-popover.hide.description",values:[]},"before-leave":{type:"method",description:"tags.el-popover.before-leave.description",values:[]},"after-leave":{type:"method",description:"tags.el-popover.after-leave.description",values:[]}},"el-tooltip":{"append-to":{type:"attribute",description:"tags.el-tooltip.append-to.description",values:["CSSSelector"]},effect:{type:"attribute",description:"tags.el-tooltip.effect.description",values:["dark","light"]},content:{type:"attribute",description:"tags.el-tooltip.content.description",values:["string"]},"raw-content":{type:"attribute",description:"tags.el-tooltip.raw-content.description",values:["boolean"]},placement:{type:"attribute",description:"tags.el-tooltip.placement.description",values:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"]},"fallback-placements":{type:"attribute",description:"tags.el-tooltip.fallback-placements.description",values:["array"]},"v-model:visible":{type:"attribute",description:"tags.el-tooltip.v-model:visible.description",values:["boolean"]},disabled:{type:"attribute",description:"tags.el-tooltip.disabled.description",values:["boolean"]},offset:{type:"attribute",description:"tags.el-tooltip.offset.description",values:["number"]},transition:{type:"attribute",description:"tags.el-tooltip.transition.description",values:["string"]},"popper-options":{type:"attribute",description:"tags.el-tooltip.popper-options.description",values:["object"]},"show-after":{type:"attribute",description:"tags.el-tooltip.show-after.description",values:["number"]},"show-arrow":{type:"attribute",description:"tags.el-tooltip.show-arrow.description",values:["boolean"]},"hide-after":{type:"attribute",description:"tags.el-tooltip.hide-after.description",values:["number"]},"auto-close":{type:"attribute",description:"tags.el-tooltip.auto-close.description",values:["number"]},"popper-class":{type:"attribute",description:"tags.el-tooltip.popper-class.description",values:["string"]},enterable:{type:"attribute",description:"tags.el-tooltip.enterable.description",values:["boolean"]},teleported:{type:"attribute",description:"tags.el-tooltip.teleported.description",values:["boolean"]},trigger:{type:"attribute",description:"tags.el-tooltip.trigger.description",values:["hover","click","focus","contextmenu"]},"virtual-triggering":{type:"attribute",description:"tags.el-tooltip.virtual-triggering.description",values:["boolean"]},"virtual-ref":{type:"attribute",description:"tags.el-tooltip.virtual-ref.description",values:["HTMLElement"]},"trigger-keys":{type:"attribute",description:"tags.el-tooltip.trigger-keys.description",values:["Array"]},persistent:{type:"attribute",description:"tags.el-tooltip.persistent.description",values:["boolean"]},"aria-labelay":{type:"attribute",description:"tags.el-tooltip.aria-labelay.description",values:["string"]}},"el-divider":{direction:{type:"attribute",description:"tags.el-divider.direction.description",values:["horizontal","vertical"]},"border-style":{type:"attribute",description:"tags.el-divider.border-style.description",values:["none","solid","hidden","dashed"]},"content-position":{type:"attribute",description:"tags.el-divider.content-position.description",values:["left","right","center"]}},"el-watermark":{width:{type:"attribute",description:"tags.el-watermark.width.description",values:["number"]},height:{type:"attribute",description:"tags.el-watermark.height.description",values:["number"]},rotate:{type:"attribute",description:"tags.el-watermark.rotate.description",values:["number"]},zIndex:{type:"attribute",description:"tags.el-watermark.zIndex.description",values:["number"]},image:{type:"attribute",description:"tags.el-watermark.image.description",values:["string"]},content:{type:"attribute",description:"tags.el-watermark.content.description",values:["string"]},font:{type:"attribute",description:"tags.el-watermark.font.description",values:["Font"]},gap:{type:"attribute",description:"tags.el-watermark.gap.description",values:["object"]},offset:{type:"attribute",description:"tags.el-watermark.offset.description",values:["object"]}}})});var ys=P(xi=>{"use strict";Object.defineProperty(xi,"__esModule",{value:!0});xi.default=()=>({"v-loading":{type:"attribute",values:["string"],description:"el-loading"}})});var ws=P(ki=>{"use strict";Object.defineProperty(ki,"__esModule",{value:!0});var f=require("vscode"),v="https://element-plus.org";ki.default=()=>({"el-button":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/button.html)

#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| size| \u5C3A\u5BF8| enum| \u2014 |
| type| \u7C7B\u578B| enum| \u2014 |
| plain| \u662F\u5426\u4E3A\u6734\u7D20\u6309\u94AE| boolean| false |
| text 2.2.0| \u662F\u5426\u4E3A\u6587\u5B57\u6309\u94AE| boolean| false |
| bg 2.2.0| \u662F\u5426\u663E\u793A\u6587\u5B57\u6309\u94AE\u80CC\u666F\u989C\u8272| boolean| false |
| link 2.2.1| \u662F\u5426\u4E3A\u94FE\u63A5\u6309\u94AE| boolean| false |
| round| \u662F\u5426\u4E3A\u5706\u89D2\u6309\u94AE| boolean| false |
| circle| \u662F\u5426\u4E3A\u5706\u5F62\u6309\u94AE| boolean| false |
| loading| \u662F\u5426\u4E3A\u52A0\u8F7D\u4E2D\u72B6\u6001| boolean| false |
| loading-icon| \u81EA\u5B9A\u4E49\u52A0\u8F7D\u4E2D\u72B6\u6001\u56FE\u6807\u7EC4\u4EF6| string / Component| Loading |
| disabled| \u6309\u94AE\u662F\u5426\u4E3A\u7981\u7528\u72B6\u6001| boolean| false |
| icon| \u56FE\u6807\u7EC4\u4EF6| string / Component| \u2014 |
| autofocus| \u539F\u751F autofocus \u5C5E\u6027| boolean| false |
| native-type| \u539F\u751F type \u5C5E\u6027| enum| button |
| auto-insert-space| \u81EA\u52A8\u5728\u4E24\u4E2A\u4E2D\u6587\u5B57\u7B26\u4E4B\u95F4\u63D2\u5165\u7A7A\u683C| boolean| \u2014 |
| color| \u81EA\u5B9A\u4E49\u6309\u94AE\u989C\u8272, \u5E76\u81EA\u52A8\u8BA1\u7B97 hover \u548C active \u89E6\u53D1\u540E\u7684\u989C\u8272| string| \u2014 |
| dark| dark \u6A21\u5F0F, \u610F\u5473\u7740\u81EA\u52A8\u8BBE\u7F6E color \u4E3A dark \u6A21\u5F0F\u7684\u989C\u8272| boolean| false |
| tag 2.3.4| \u81EA\u5B9A\u4E49\u5143\u7D20\u6807\u7B7E| string / Component| button |

#### Button \u63D2\u69FD

| \u63D2\u69FD\u540D| \u8BF4\u660E |
| :--- | :--- |
| default| \u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9 |
| loading| \u81EA\u5B9A\u4E49\u52A0\u8F7D\u4E2D\u7EC4\u4EF6 |
| icon| \u81EA\u5B9A\u4E49\u56FE\u6807\u7EC4\u4EF6 |

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B |
| :--- | :--- | :--- |
| ref| \u6309\u94AE html \u5143\u7D20| object |
| size| \u6309\u94AE\u5C3A\u5BF8| object |
| type| \u6309\u94AE\u7C7B\u578B| object |
| disabled| \u6309\u94AE\u5DF2\u7981\u7528| object |
| shouldAddSpace| \u662F\u5426\u5728\u4E24\u4E2A\u5B57\u7B26\u4E4B\u95F4\u63D2\u5165\u7A7A\u683C| object |
`,"el-button-group":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/button.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| size| \u7528\u4E8E\u63A7\u5236\u8BE5\u6309\u94AE\u7EC4\u5185\u6309\u94AE\u7684\u5927\u5C0F| enum| \u2014 |
| type| \u7528\u4E8E\u63A7\u5236\u8BE5\u6309\u94AE\u7EC4\u5185\u6309\u94AE\u7684\u7C7B\u578B| enum| \u2014 |

#### ButtonGroup \u63D2\u69FD

| \u63D2\u69FD\u540D| \u8BF4\u660E| \u5B50\u6807\u7B7E |
| :--- | :--- | :--- |
| default| \u81EA\u5B9A\u4E49\u6309\u94AE\u7EC4\u5185\u5BB9| Button |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-container":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/container.html)

#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| direction| \u5B50\u5143\u7D20\u7684\u6392\u5217\u65B9\u5411| enum| \u5B50\u5143\u7D20\u4E2D\u6709 el-header \u6216 el-footer \u65F6\u4E3A vertical\uFF0C\u5426\u5219\u4E3A horizontal |

#### Container \u63D2\u69FD

| \u63D2\u69FD\u540D| \u8BF4\u660E| \u5B50\u6807\u7B7E |
| :--- | :--- | :--- |
| default| \u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9| Container / Header / Aside / Main / Footer |
`,"el-header":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/container.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| height| \u9876\u680F\u9AD8\u5EA6| string| 60px |

#### Header Slots

| \u63D2\u69FD\u540D| \u8BF4\u660E |
| :--- | :--- |
| default| \u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9 |
`,"el-aside":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/container.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| width| \u4FA7\u8FB9\u680F\u5BBD\u5EA6| string| 300px |

#### Aside Slots

| \u63D2\u69FD\u540D| \u8BF4\u660E |
| :--- | :--- |
| default| \u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9 |
`,"el-main":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/container.html)

#### Main Slots

| \u63D2\u69FD\u540D| \u8BF4\u660E |
| :--- | :--- |
| default| \u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9 |
`,"el-footer":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/container.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| height| \u5E95\u680F\u9AD8\u5EA6| string| 60px |

#### Footer Slots

| \u63D2\u69FD\u540D| \u8BF4\u660E |
| :--- | :--- |
| default| \u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9 |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-icon":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/icon.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| color| svg \u7684 fill \u989C\u8272| string| \u7EE7\u627F\u989C\u8272 |
| size| SVG \u56FE\u6807\u7684\u5927\u5C0F\uFF0Csize x size| number / string| \u7EE7\u627F\u5B57\u4F53\u5927\u5C0F |

#### Slots

| \u540D\u79F0| \u8BF4\u660E |
| :--- | :--- |
| default| \u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9 |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-layout":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/layout.html)
`,"el-row":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/layout.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| gutter| \u6805\u683C\u95F4\u9694| number| 0 |
| justify| flex \u5E03\u5C40\u4E0B\u7684\u6C34\u5E73\u6392\u5217\u65B9\u5F0F| enum| start |
| align| flex \u5E03\u5C40\u4E0B\u7684\u5782\u76F4\u6392\u5217\u65B9\u5F0F| enum| \u2014 |
| tag| \u81EA\u5B9A\u4E49\u5143\u7D20\u6807\u7B7E| string| div |

#### Row Slots

| \u63D2\u69FD\u540D| \u8BF4\u660E| \u5B50\u6807\u7B7E |
| :--- | :--- | :--- |
| default| \u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9| Col |
`,"el-col":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/layout.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| span| \u6805\u683C\u5360\u636E\u7684\u5217\u6570| number| 24 |
| offset| \u6805\u683C\u5DE6\u4FA7\u7684\u95F4\u9694\u683C\u6570| number| 0 |
| push| \u6805\u683C\u5411\u53F3\u79FB\u52A8\u683C\u6570| number| 0 |
| pull| \u6805\u683C\u5411\u5DE6\u79FB\u52A8\u683C\u6570| number| 0 |
| xs| <768px \u54CD\u5E94\u5F0F\u6805\u683C\u6570\u6216\u8005\u6805\u683C\u5C5E\u6027\u5BF9\u8C61| number / object| \u2014 |
| sm| \u2265768px \u54CD\u5E94\u5F0F\u6805\u683C\u6570\u6216\u8005\u6805\u683C\u5C5E\u6027\u5BF9\u8C61| number / object| \u2014 |
| md| \u2265992px \u54CD\u5E94\u5F0F\u6805\u683C\u6570\u6216\u8005\u6805\u683C\u5C5E\u6027\u5BF9\u8C61| number / object| \u2014 |
| lg| \u22651200px \u54CD\u5E94\u5F0F\u6805\u683C\u6570\u6216\u8005\u6805\u683C\u5C5E\u6027\u5BF9\u8C61| number / object| \u2014 |
| xl| \u22651920px \u54CD\u5E94\u5F0F\u6805\u683C\u6570\u6216\u8005\u6805\u683C\u5C5E\u6027\u5BF9\u8C61| number / object| \u2014 |
| tag| \u81EA\u5B9A\u4E49\u5143\u7D20\u6807\u7B7E| string| div |

#### Col Slots

| \u63D2\u69FD\u540D| \u8BF4\u660E |
| :--- | :--- |
| default| \u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9 |

#### \u6E90\u4EE3\u7801
`,"el-link":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/link.html)

#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| type| \u7C7B\u578B| enum| default |
| underline| \u662F\u5426\u4E0B\u5212\u7EBF| boolean| true |
| disabled| \u662F\u5426\u7981\u7528\u72B6\u6001| boolean| false |
| href| \u539F\u751F href \u5C5E\u6027| string| \u2014 |
| target| \u540C\u539F\u751F target \u5C5E\u6027| enum| _self |
| icon| \u56FE\u6807\u7EC4\u4EF6| string / Component| \u2014 |

#### Slots

| \u63D2\u69FD\u540D| \u8BF4\u660E |
| :--- | :--- |
| default| \u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9 |
| icon| \u81EA\u5B9A\u4E49\u56FE\u6807\u7EC4\u4EF6 |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-text":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/text.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u63CF\u8FF0| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| type| \u7C7B\u578B| enum| \u2014 |
| size| \u5927\u5C0F| enum| default |
| truncated| \u663E\u793A\u7701\u7565\u53F7| boolean| false |
| line-clamp 2.4.0| \u6700\u5927\u884C\u6570| string / number| - |
| tag| \u81EA\u5B9A\u4E49\u5143\u7D20\u6807\u7B7E| string| span |

#### Slots

| \u540D\u79F0| \u8BE6\u60C5 |
| :--- | :--- |
| default| \u9ED8\u8BA4\u5185\u5BB9 |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-scrollbar":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/scrollbar.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| height| \u6EDA\u52A8\u6761\u9AD8\u5EA6| string / number| \u2014 |
| max-height| \u6EDA\u52A8\u6761\u6700\u5927\u9AD8\u5EA6| string / number| \u2014 |
| native| \u662F\u5426\u4F7F\u7528\u539F\u751F\u6EDA\u52A8\u6761\u6837\u5F0F| boolean| false |
| wrap-style| \u5305\u88F9\u5BB9\u5668\u7684\u81EA\u5B9A\u4E49\u6837\u5F0F| string / object| \u2014 |
| wrap-class| \u5305\u88F9\u5BB9\u5668\u7684\u81EA\u5B9A\u4E49\u7C7B\u540D| string| \u2014 |
| view-style| \u89C6\u56FE\u7684\u81EA\u5B9A\u4E49\u6837\u5F0F| string / object| \u2014 |
| view-class| \u89C6\u56FE\u7684\u81EA\u5B9A\u4E49\u7C7B\u540D| string| \u2014 |
| noresize| \u4E0D\u54CD\u5E94\u5BB9\u5668\u5C3A\u5BF8\u53D8\u5316\uFF0C\u5982\u679C\u5BB9\u5668\u5C3A\u5BF8\u4E0D\u4F1A\u53D1\u751F\u53D8\u5316\uFF0C\u6700\u597D\u8BBE\u7F6E\u5B83\u53EF\u4EE5\u4F18\u5316\u6027\u80FD| boolean| false |
| tag| \u89C6\u56FE\u7684\u5143\u7D20\u6807\u7B7E| string| div |
| always| \u6EDA\u52A8\u6761\u603B\u662F\u663E\u793A| boolean| false |
| min-size| \u6EDA\u52A8\u6761\u6700\u5C0F\u5C3A\u5BF8| number| 20 |
| id 2.4.0| \u89C6\u56FEID| string| \u2014 |
| role 2.4.0 a11y| \u89C6\u56FE\u7684\u89D2\u8272| string| \u2014 |
| aria-label 2.4.0 a11y| \u89C6\u56FE\u7684 aria-label| string| \u2014 |
| aria-orientation 2.4.0 a11y| \u89C6\u56FE\u7684 aria-orientation| enum| \u2014 |
#### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D| \u8BF4\u660E| \u7C7B\u578B |
| :--- | :--- | :--- |
| scroll| \u5F53\u89E6\u53D1\u6EDA\u52A8\u4E8B\u4EF6\u65F6\uFF0C\u8FD4\u56DE\u6EDA\u52A8\u7684\u8DDD\u79BB| Function |

#### Slots

| \u63D2\u69FD\u540D| \u8BF4\u660E |
| :--- | :--- |
| default| \u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9 |

#### Exposes

| \u540D\u79F0| \u8BF4\u660E| \u7C7B\u578B |
| :--- | :--- | :--- |
| handleScroll| \u89E6\u53D1\u6EDA\u52A8\u4E8B\u4EF6| Function |
| scrollTo| \u6EDA\u52A8\u5230\u4E00\u7EC4\u7279\u5B9A\u5750\u6807| Function |
| setScrollTop| \u8BBE\u7F6E\u6EDA\u52A8\u6761\u5230\u9876\u90E8\u7684\u8DDD\u79BB| Function |
| setScrollLeft| \u8BBE\u7F6E\u6EDA\u52A8\u6761\u5230\u5DE6\u8FB9\u7684\u8DDD\u79BB| Function |
| update| \u624B\u52A8\u66F4\u65B0\u6EDA\u52A8\u6761\u72B6\u6001| Function |
| wrapRef| \u6EDA\u52A8\u6761\u5305\u88F9\u7684 ref \u5BF9\u8C61| object |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-space":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/space.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| alignment| \u5BF9\u9F50\u7684\u65B9\u5F0F| enum align-items| center |
| class| \u7C7B\u540D| string / object / array| \u2014 |
| direction| \u6392\u5217\u7684\u65B9\u5411| enum| horizontal |
| prefix-cls| \u7ED9 space-items \u7684\u7C7B\u540D\u524D\u7F00| string| \u2014 |
| style| \u989D\u5916\u6837\u5F0F| string / object| \u2014 |
| spacer| \u95F4\u9694\u7B26| string / number / VNode| \u2014 |
| size| \u95F4\u9694\u5927\u5C0F| enum / number / array| small |
| wrap| \u8BBE\u7F6E\u662F\u5426\u81EA\u52A8\u6298\u884C| boolean| false |
| fill| \u5B50\u5143\u7D20\u662F\u5426\u586B\u5145\u7236\u5BB9\u5668| boolean| false |
| fill-ratio| \u586B\u5145\u7236\u5BB9\u5668\u7684\u6BD4\u4F8B| number| 100 |

#### Slots

| \u540D\u79F0| \u8BF4\u660E |
| :--- | :--- |
| default| \u9700\u8981\u6DFB\u52A0\u95F4\u9694\u7684\u5143\u7D20 |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-config-provider":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/config-provider.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| locale| \u7FFB\u8BD1\u6587\u672C\u5BF9\u8C61| object languages| en |
| size| \u5168\u5C40\u7EC4\u4EF6\u5927\u5C0F| enum| default |
| zIndex| \u5168\u5C40\u521D\u59CB\u5316 zIndex \u7684\u503C| number| \u2014 |
| namespace| \u5168\u5C40\u7EC4\u4EF6\u7C7B\u540D\u79F0\u524D\u7F00 (\u9700\u8981\u914D\u5408 namespace \u4F7F\u7528)| string| el |
| button| \u6309\u94AE\u76F8\u5173\u914D\u7F6E\uFF0C\u8BE6\u89C1\u4E0B\u8868| object| \u8BE6\u89C1\u4E0B\u8868 |
| message| \u6D88\u606F\u76F8\u5173\u914D\u7F6E\uFF0C \u8BE6\u89C1\u4E0B\u8868| object| \u8BE6\u89C1\u4E0B\u8868 |
| experimental-features| \u5C06\u8981\u6DFB\u52A0\u7684\u5B9E\u9A8C\u9636\u6BB5\u7684\u529F\u80FD\uFF0C\u6240\u6709\u529F\u80FD\u90FD\u662F\u9ED8\u8BA4\u8BBE\u7F6E\u4E3A false| object| \u2014 |

#### Button Attribute

| \u53C2\u6570| \u63CF\u8FF0| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| autoInsertSpace| \u81EA\u52A8\u5728\u4E24\u4E2A\u4E2D\u6587\u5B57\u7B26\u4E4B\u95F4\u63D2\u5165\u7A7A\u683C| boolean| false |

#### Message Attribute

| \u53C2\u6570| \u63CF\u8FF0| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| max| \u53EF\u540C\u65F6\u663E\u793A\u7684\u6D88\u606F\u6700\u5927\u6570\u91CF| number| \u2014 |

#### Config Provider Slots

| \u540D\u79F0| \u63CF\u8FF0| Scope |
| :--- | :--- | :--- |
| default| \u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9| config: \u63D0\u4F9B\u5168\u5C40\u914D\u7F6E\uFF08\u4ECE\u9876\u90E8\u7EE7\u627F\uFF09 |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-autocomplete":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/autocomplete.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| model-value / v-model| \u9009\u4E2D\u9879\u7ED1\u5B9A\u503C| string| \u2014 |
| placeholder| \u5360\u4F4D\u6587\u672C| string| \u2014 |
| clearable| \u662F\u5426\u53EF\u6E05\u7A7A| boolean| false |
| disabled| \u81EA\u52A8\u8865\u5168\u7EC4\u4EF6\u662F\u5426\u88AB\u7981\u7528| boolean| false |
| value-key| \u8F93\u5165\u5EFA\u8BAE\u5BF9\u8C61\u4E2D\u7528\u4E8E\u663E\u793A\u7684\u952E\u540D| string| value |
| debounce| \u83B7\u53D6\u8F93\u5165\u5EFA\u8BAE\u7684\u9632\u6296\u5EF6\u65F6\uFF0C\u5355\u4F4D\u4E3A\u6BEB\u79D2| number| 300 |
| placement| \u83DC\u5355\u5F39\u51FA\u4F4D\u7F6E| enum| bottom-start |
| fetch-suggestions| \u83B7\u53D6\u8F93\u5165\u5EFA\u8BAE\u7684\u65B9\u6CD5\uFF0C \u4EC5\u5F53\u4F60\u7684\u8F93\u5165\u5EFA\u8BAE\u6570\u636E resolve \u65F6\uFF0C\u901A\u8FC7\u8C03\u7528 callback(data:[])  \u6765\u8FD4\u56DE\u5B83| Function| \u2014 |
| trigger-on-focus| whether show suggestions when input focus| boolean| true |
| select-when-unmatched| \u5728\u8F93\u5165\u6CA1\u6709\u4EFB\u4F55\u5339\u914D\u5EFA\u8BAE\u7684\u60C5\u51B5\u4E0B\uFF0C\u6309\u4E0B\u56DE\u8F66\u662F\u5426\u89E6\u53D1 select \u4E8B\u4EF6| boolean| false |
| name| \u7B49\u4EF7\u4E8E\u539F\u751F input name \u5C5E\u6027| string| \u2014 |
| label| \u8F93\u5165\u6846\u5173\u8054\u7684 label \u6587\u5B57| string| \u2014 |
| hide-loading| \u662F\u5426\u9690\u85CF\u8FDC\u7A0B\u52A0\u8F7D\u65F6\u7684\u52A0\u8F7D\u56FE\u6807| boolean| false |
| popper-class| \u4E0B\u62C9\u5217\u8868\u7684\u7C7B\u540D| string| \u2014 |
| popper-append-to-body deprecated| \u662F\u5426\u5C06\u4E0B\u62C9\u5217\u8868\u63D2\u5165\u81F3 body \u5143\u7D20\u3002 \u5728\u4E0B\u62C9\u5217\u8868\u7684\u5B9A\u4F4D\u51FA\u73B0\u95EE\u9898\u65F6\uFF0C\u53EF\u5C06\u8BE5\u5C5E\u6027\u8BBE\u7F6E\u4E3A false| boolean| false |
| teleported| \u662F\u5426\u5C06\u4E0B\u62C9\u5217\u8868\u5143\u7D20\u63D2\u5165 append-to \u6307\u5411\u7684\u5143\u7D20\u4E0B| boolean| true |
| highlight-first-item| \u662F\u5426\u9ED8\u8BA4\u9AD8\u4EAE\u8FDC\u7A0B\u641C\u7D22\u7ED3\u679C\u7684\u7B2C\u4E00\u9879| boolean| false |
| fit-input-width| \u4E0B\u62C9\u6846\u7684\u5BBD\u5EA6\u662F\u5426\u4E0E\u8F93\u5165\u6846\u76F8\u540C| boolean| false |
#### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D| \u8BE6\u60C5| \u7C7B\u578B |
| :--- | :--- | :--- |
| select| \u70B9\u51FB\u9009\u4E2D\u5EFA\u8BAE\u9879\u65F6\u89E6\u53D1| Function |
| change| \u5728 Input \u503C\u6539\u53D8\u65F6\u89E6\u53D1| Function |

#### Slots

| \u63D2\u69FD\u540D| \u63CF\u8FF0\u8BF4\u660E| \u7C7B\u578B |
| :--- | :--- | :--- |
| default| \u81EA\u5B9A\u4E49\u8F93\u5165\u5EFA\u8BAE\u7684\u5185\u5BB9\u3002| object |
| prefix| \u8F93\u5165\u6846\u5934\u90E8\u5185\u5BB9| - |
| suffix| \u8F93\u5165\u6846\u5C3E\u90E8\u5185\u5BB9| - |
| prepend| \u8F93\u5165\u6846\u524D\u7F6E\u5185\u5BB9\uFF0C\u5728 prefix \u4E4B\u524D| - |
| append| \u8F93\u5165\u6846\u540E\u7F6E\u5185\u5BB9\uFF0C\u5728 suffix \u4E4B\u540E| - |
| loading 2.5.0| \u4FEE\u6539\u52A0\u8F7D\u533A\u57DF\u5185\u5BB9| - |

#### Exposes

| \u540D\u79F0| \u8BE6\u60C5| \u7C7B\u578B |
| :--- | :--- | :--- |
| activated| \u81EA\u52A8\u8865\u5168\u8F93\u5165\u6846\u662F\u5426\u88AB\u6FC0\u6D3B| object |
| blur| \u4F7F input \u5931\u53BB\u7126\u70B9| Function |
| close| \u6298\u53E0\u5EFA\u8BAE\u5217\u8868| Function |
| focus| \u4F7F input \u83B7\u53D6\u7126\u70B9| Function |
| handleSelect| \u624B\u52A8\u89E6\u53D1\u9009\u4E2D\u5EFA\u8BAE\u4E8B\u4EF6| Function |
| handleKeyEnter| \u624B\u52A8\u89E6\u53D1\u952E\u76D8\u56DE\u8F66\u4E8B\u4EF6| Function |
| highlightedIndex| \u5F53\u524D\u9AD8\u4EAE\u663E\u793A\u9009\u9879\u7684\u7D22\u5F15| object |
| highlight| \u5728\u5EFA\u8BAE\u4E2D\u9AD8\u4EAE\u663E\u793A\u4E00\u4E2A\u9879\u76EE| Function |
| inputRef| el-input \u7EC4\u4EF6\u5B9E\u4F8B| object |
| loading| \u8FDC\u7A0B\u83B7\u53D6\u63D0\u793A\u5185\u5BB9\u7684\u52A0\u8F7D\u72B6\u6001\u6307\u793A\u5668| object |
| popperRef| el-tooltip \u7EC4\u4EF6\u5B9E\u4F8B| object |
| suggestions| \u83B7\u53D6\u81EA\u52A8\u8865\u5168\u7ED3\u679C| object |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-cascader":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/cascader.html)

#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| model-value / v-model| \u9009\u4E2D\u9879\u7ED1\u5B9A\u503C| string/number/object| \u2014 |
| options| \u9009\u9879\u7684\u6570\u636E\u6E90\uFF0C value \u548C label \u53EF\u4EE5\u901A\u8FC7 CascaderProps \u81EA\u5B9A\u4E49.| object| \u2014 |
| props| \u914D\u7F6E\u9009\u9879, \u8BF7\u53C2\u9605\u4E0B\u9762 CascaderProps \u8868\u3002| object| \u2014 |
| size| \u5C3A\u5BF8| enum| \u2014 |
| placeholder| \u8F93\u5165\u6846\u5360\u4F4D\u6587\u672C| string| \u2014 |
| disabled| \u662F\u5426\u7981\u7528| boolean| \u2014 |
| clearable| \u662F\u5426\u652F\u6301\u6E05\u7A7A\u9009\u9879| boolean| \u2014 |
| show-all-levels| \u8F93\u5165\u6846\u4E2D\u662F\u5426\u663E\u793A\u9009\u4E2D\u503C\u7684\u5B8C\u6574\u8DEF\u5F84| boolean| true |
| collapse-tags| \u591A\u9009\u6A21\u5F0F\u4E0B\u662F\u5426\u6298\u53E0Tag| boolean| \u2014 |
| collapse-tags-tooltip| \u5F53\u9F20\u6807\u60AC\u505C\u4E8E\u6298\u53E0\u6807\u7B7E\u7684\u6587\u672C\u65F6\uFF0C\u662F\u5426\u663E\u793A\u6240\u6709\u9009\u4E2D\u7684\u6807\u7B7E\u3002 \u8981\u4F7F\u7528\u6B64\u5C5E\u6027\uFF0Ccollapse-tags\u5C5E\u6027\u5FC5\u987B\u8BBE\u5B9A\u4E3A true| boolean| false |
| separator| \u7528\u4E8E\u5206\u9694\u9009\u9879\u7684\u5B57\u7B26| string| ' / ' |
| filterable| \u8BE5\u9009\u9879\u662F\u5426\u53EF\u4EE5\u88AB\u641C\u7D22| boolean| \u2014 |
| filter-method| \u81EA\u5B9A\u4E49\u641C\u7D22\u903B\u8F91\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u662Fnode\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662Fkeyword\uFF0C\u8FD4\u56DE\u7684\u5E03\u5C14\u503C\u8868\u793A\u662F\u5426\u4FDD\u7559\u8BE5\u9009\u9879| Function| \u2014 |
| debounce| \u641C\u7D22\u5173\u952E\u8BCD\u6B63\u5728\u8F93\u5165\u65F6\u7684\u53BB\u6296\u5EF6\u8FDF\uFF0C\u5355\u4F4D\u4E3A\u6BEB\u79D2| number| 300 |
| before-filter| \u8FC7\u6EE4\u51FD\u6570\u8C03\u7528\u524D\uFF0C\u6240\u8981\u8C03\u7528\u7684\u94A9\u5B50\u51FD\u6570\uFF0C\u8BE5\u51FD\u6570\u63A5\u6536\u8981\u8FC7\u6EE4\u7684\u503C\u4F5C\u4E3A\u53C2\u6570\u3002 \u5982\u679C\u8BE5\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u662F false \u6216\u8005\u662F\u4E00\u4E2A\u88AB\u62D2\u7EDD\u7684 Promise\uFF0C\u90A3\u4E48\u63A5\u4E0B\u6765\u7684\u8FC7\u6EE4\u903B\u8F91\u4FBF\u4E0D\u4F1A\u6267\u884C\u3002| Function| \u2014 |
| popper-class| \u5F39\u51FA\u5185\u5BB9\u7684\u81EA\u5B9A\u4E49\u7C7B\u540D| string| '' |
| teleported| \u5F39\u5C42\u662F\u5426\u4F7F\u7528 teleport| boolean| true |
| popper-append-to-body deprecated| \u662F\u5426\u5C06\u5F39\u51FA\u7684\u5185\u5BB9\u76F4\u63A5\u63D2\u5165\u5230 body \u5143\u7D20\u3002 \u5728\u5F39\u51FA\u5185\u5BB9\u7684\u8FB9\u6846\u5B9A\u4F4D\u51FA\u73B0\u95EE\u9898\u65F6\uFF0C\u53EF\u5C06\u8BE5\u5C5E\u6027\u8BBE\u7F6E\u4E3A false| boolean| true |
| tag-type| \u6807\u7B7E\u7C7B\u578B| enum| info |
| validate-event| \u8F93\u5165\u65F6\u662F\u5426\u89E6\u53D1\u8868\u5355\u7684\u6821\u9A8C| boolean| true |
| max-collapse-tags 2.3.10| \u9700\u8981\u663E\u793A\u7684 Tag \u7684\u6700\u5927\u6570\u91CF \u53EA\u6709\u5F53 collapse-tags \u8BBE\u7F6E\u4E3A true \u65F6\u624D\u4F1A\u751F\u6548\u3002| number| 1 |
#### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D| \u8BF4\u660E| \u7C7B\u578B |
| :--- | :--- | :--- |
| change| \u5F53\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6| Function |
| expand-change| \u5F53\u5C55\u5F00\u8282\u70B9\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1| Function |
| blur| \u5F53\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1| Function |
| focus| \u5F53\u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1| Function |
| visible-change| \u4E0B\u62C9\u6846\u51FA\u73B0/\u9690\u85CF\u65F6\u89E6\u53D1| Function |
| remove-tag| \u5728\u591A\u9009\u6A21\u5F0F\u4E0B\uFF0C\u79FB\u9664Tag\u65F6\u89E6\u53D1| Function |

#### Cascader Slots

| \u63D2\u69FD\u540D| \u8BF4\u660E| \u4F5C\u7528\u57DF |
| :--- | :--- | :--- |
| default| \u81EA\u5B9A\u4E49\u5907\u9009\u9879\u7684\u8282\u70B9\u5185\u5BB9\uFF0C\u5206\u522B\u4E3A\u5F53\u524D\u8282\u70B9\u7684 Node \u5BF9\u8C61\u548C\u6570\u636E| object |
| empty| \u65E0\u5339\u914D\u9009\u9879\u65F6\u7684\u5185\u5BB9| \u2014 |

#### Cascader Exposes

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B |
| :--- | :--- | :--- |
| getCheckedNodes| \u83B7\u53D6\u4E00\u4E2A\u5F53\u524D\u9009\u4E2D\u8282\u70B9\u7684\u6570\u7EC4\u3002(\u4EC5\u4EC5\u662F\u4F20\u5355) \u662F\u5426\u53EA\u8FD4\u56DE\u53F6\u9009\u4E2D\u7684\u8282\u70B9\uFF0C\u9ED8\u8BA4\u662F false| Function |
| cascaderPanelRef| cascader \u9762\u677F\u7684 ref| object |
| togglePopperVisible 2.2.31| \u5207\u6362 popper \u53EF\u89C1\u72B6\u6001| Function |
| contentRef| cascader \u5185\u5BB9\u7684 ref| object |
`,"el-cascader-panel":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/cascader.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| model-value / v-model| \u9009\u4E2D\u9879\u7ED1\u5B9A\u503C| string/number/object| \u2014 |
| options| \u9009\u9879\u7684\u6570\u636E\u6E90\uFF0C value \u548C label \u53EF\u4EE5\u901A\u8FC7 CascaderProps \u81EA\u5B9A\u4E49.| object| \u2014 |
| props| \u914D\u7F6E\u9009\u9879, \u8BF7\u53C2\u9605\u4E0B\u9762 CascaderProps \u8868\u3002| object| \u2014 |
#### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D| \u8BF4\u660E| Type |
| :--- | :--- | :--- |
| change| \u5F53\u9009\u4E2D\u8282\u70B9\u53D8\u5316\u65F6\u89E6\u53D1| Function |
| expand-change| \u5F53\u5C55\u5F00\u8282\u70B9\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1| Function |
| close| \u9762\u677F\u7684\u5173\u95ED\u4E8B\u4EF6\uFF0C\u63D0\u4F9B\u7ED9 Cascader \u4EE5\u4FBF\u505A\u66F4\u597D\u7684\u5224\u65AD\u3002| Function |

#### CascaderPanel Slots

| \u63D2\u69FD\u540D| \u8BF4\u660E| Scope |
| :--- | :--- | :--- |
| default| \u4E0B\u7EA7\u8282\u70B9\u7684\u81EA\u5B9A\u4E49\u5185\u5BB9\uFF0C\u5B83\u4EEC\u5206\u522B\u662F\u5F53\u524D\u8282\u70B9\u5BF9\u8C61\u548C\u8282\u70B9\u6570\u636E\u3002| object |

#### CascaderPanel Exposes

| \u5C5E\u6027\u540D| \u8BF4\u660E| Type |
| :--- | :--- | :--- |
| getCheckedNodes| \u83B7\u53D6\u4E00\u4E2A\u5F53\u524D\u9009\u4E2D\u8282\u70B9\u7684\u6570\u7EC4\u3002(\u4EC5\u4EC5\u662F\u4F20\u5355) \u662F\u5426\u53EA\u8FD4\u56DE\u53F6\u9009\u4E2D\u7684\u8282\u70B9\uFF0C\u9ED8\u8BA4\u662F false| Function |
| clearCheckedNodes| \u6E05\u7A7A\u9009\u4E2D\u7684\u8282\u70B9| Function |

#### CascaderProps

| \u5C5E\u6027| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| expandTrigger| \u6B21\u7EA7\u83DC\u5355\u7684\u5C55\u5F00\u65B9\u5F0F| enum| click |
| multiple| \u662F\u5426\u591A\u9009| boolean| false |
| checkStrictly| \u662F\u5426\u4E25\u683C\u7684\u9075\u5B88\u7236\u5B50\u8282\u70B9\u4E0D\u4E92\u76F8\u5173\u8054| boolean| false |
| emitPath| \u5728\u9009\u4E2D\u8282\u70B9\u6539\u53D8\u65F6\uFF0C\u662F\u5426\u8FD4\u56DE\u7531\u8BE5\u8282\u70B9\u6240\u5728\u7684\u5404\u7EA7\u83DC\u5355\u7684\u503C\u6240\u7EC4\u6210\u7684\u6570\u7EC4\uFF0C\u82E5\u8BBE\u7F6E false\uFF0C\u5219\u53EA\u8FD4\u56DE\u8BE5\u8282\u70B9\u7684\u503C| boolean| true |
| lazy| \u662F\u5426\u52A8\u6001\u52A0\u8F7D\u5B50\u8282\u70B9\uFF0C\u9700\u4E0E lazyLoad \u65B9\u6CD5\u7ED3\u5408\u4F7F\u7528| boolean| false |
| lazyLoad| \u52A0\u8F7D\u52A8\u6001\u6570\u636E\u7684\u65B9\u6CD5\uFF0C\u4EC5\u5728 lazy \u4E3A true \u65F6\u6709\u6548| Function| \u2014 |
| value| \u6307\u5B9A\u9009\u9879\u7684\u503C\u4E3A\u9009\u9879\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C| string| value |
| label| \u6307\u5B9A\u9009\u9879\u6807\u7B7E\u4E3A\u9009\u9879\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C| string| label |
| children| \u6307\u5B9A\u9009\u9879\u7684\u5B50\u9009\u9879\u4E3A\u9009\u9879\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C| string| children |
| disabled| \u6307\u5B9A\u9009\u9879\u7684\u7981\u7528\u4E3A\u9009\u9879\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C| string| disabled |
| leaf| \u6307\u5B9A\u9009\u9879\u7684\u53F6\u5B50\u8282\u70B9\u7684\u6807\u5FD7\u4F4D\u4E3A\u9009\u9879\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C| string| leaf |
| hoverThreshold| hover \u65F6\u5C55\u5F00\u83DC\u5355\u7684\u7075\u654F\u5EA6\u9608\u503C| number| 500 |

#### \u7C7B\u578B\u58F0\u660E

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-checkbox":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/checkbox.html)

#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| model-value / v-model| \u9009\u4E2D\u9879\u7ED1\u5B9A\u503C| string / number / boolean| \u2014 |
| value 2.6.0| \u9009\u4E2D\u72B6\u6001\u7684\u503C\uFF08\u53EA\u6709\u5728checkbox-group\u6216\u8005\u7ED1\u5B9A\u5BF9\u8C61\u7C7B\u578B\u4E3Aarray\u65F6\u6709\u6548\uFF09| string / number / boolean / object| \u2014 |
| label| \u9009\u4E2D\u72B6\u6001\u7684\u503C\uFF0C\u53EA\u6709\u5728\u7ED1\u5B9A\u5BF9\u8C61\u7C7B\u578B\u4E3A array \u65F6\u6709\u6548\u3002 \u5982\u679C\u6CA1\u6709 value\uFF0C label\u5219\u4F5C\u4E3Avalue\u4F7F\u7528| string / number / boolean / object| \u2014 |
| true-value 2.6.0| \u9009\u4E2D\u65F6\u7684\u503C| string / number| \u2014 |
| false-value 2.6.0| \u6CA1\u6709\u9009\u4E2D\u65F6\u7684\u503C| string / number| \u2014 |
| true-label deprecated| \u9009\u4E2D\u65F6\u7684\u503C| string / number| \u2014 |
| false-label deprecated| \u6CA1\u6709\u9009\u4E2D\u65F6\u7684\u503C| string / number| \u2014 |
| disabled| \u662F\u5426\u7981\u7528| boolean| false |
| border| \u662F\u5426\u663E\u793A\u8FB9\u6846| boolean| false |
| size| Checkbox \u7684\u5C3A\u5BF8| enum| \u2014 |
| name| \u539F\u751F name \u5C5E\u6027| string| \u2014 |
| checked| \u5F53\u524D\u662F\u5426\u52FE\u9009| boolean| false |
| indeterminate| \u8BBE\u7F6E\u4E0D\u786E\u5B9A\u72B6\u6001\uFF0C\u4EC5\u8D1F\u8D23\u6837\u5F0F\u63A7\u5236| boolean| false |
| validate-event| \u8F93\u5165\u65F6\u662F\u5426\u89E6\u53D1\u8868\u5355\u7684\u6821\u9A8C| boolean| true |
| tabindex| \u8F93\u5165\u6846\u7684 tabindex| string / number| \u2014 |
| id| input id| string| \u2014 |
| controls a11y| \u4E0E aria-control\u4E00\u81F4, \u5F53 indeterminate\u4E3A true\u65F6\u751F\u6548| boolean| \u2014 |
#### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D| \u8BF4\u660E| \u7C7B\u578B |
| :--- | :--- | :--- |
| change| \u5F53\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6| Function |

#### Checkbox Slots

| \u63D2\u69FD\u540D| \u8BF4\u660E |
| :--- | :--- |
| default| \u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9 |
`,"el-checkbox-group":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/checkbox.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| model-value / v-model| \u7ED1\u5B9A\u503C| object| [] |
| size| \u591A\u9009\u6846\u7EC4\u5C3A\u5BF8| enum| \u2014 |
| disabled| \u662F\u5426\u7981\u7528| boolean| false |
| min| \u53EF\u88AB\u52FE\u9009\u7684 checkbox \u7684\u6700\u5C0F\u6570\u91CF| number| \u2014 |
| max| \u53EF\u88AB\u52FE\u9009\u7684 checkbox \u7684\u6700\u5927\u6570\u91CF| number| \u2014 |
| label| \u4E3A\u5C4F\u5E55\u9605\u8BFB\u5668\u51C6\u5907\u7684\u6807\u7B7E| string| \u2014 |
| text-color| \u5F53\u6309\u94AE\u4E3A\u6D3B\u8DC3\u72B6\u6001\u65F6\u7684\u5B57\u4F53\u989C\u8272| string| #ffffff |
| fill| \u5F53\u6309\u94AE\u4E3A\u6D3B\u8DC3\u72B6\u6001\u65F6\u7684\u8FB9\u6846\u548C\u80CC\u666F\u989C\u8272| string| #409EFF |
| tag| \u590D\u9009\u6846\u7EC4\u5143\u7D20\u6807\u7B7E| string| div |
| validate-event| \u662F\u5426\u89E6\u53D1\u8868\u5355\u9A8C\u8BC1| boolean| true |
#### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D| \u8BF4\u660E| \u7C7B\u578B |
| :--- | :--- | :--- |
| change| \u5F53\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6| Function |

#### CheckboxGroup Slots

| \u63D2\u69FD\u540D| \u8BF4\u660E| \u5B50\u6807\u7B7E |
| :--- | :--- | :--- |
| default| \u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9| Checkbox / Checkbox-button |
`,"el-checkbox-button":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/checkbox.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| value 2.6.0| \u9009\u4E2D\u72B6\u6001\u7684\u503C\uFF0C\u53EA\u6709\u5728\u7ED1\u5B9A\u5BF9\u8C61\u7C7B\u578B\u4E3A array \u65F6\u6709\u6548\u3002| string / number / boolean / object| \u2014 |
| label| \u9009\u4E2D\u72B6\u6001\u7684\u503C\uFF0C\u53EA\u6709\u5728\u7ED1\u5B9A\u5BF9\u8C61\u7C7B\u578B\u4E3A array \u65F6\u6709\u6548\u3002 \u5982\u679C\u6CA1\u6709 value\uFF0C label\u5219\u4F5C\u4E3Avalue\u4F7F\u7528| string / number / boolean / object| \u2014 |
| true-value 2.6.0| \u9009\u4E2D\u65F6\u7684\u503C| string / number| \u2014 |
| false-value 2.6.0| \u6CA1\u6709\u9009\u4E2D\u65F6\u7684\u503C| string / number| \u2014 |
| true-label deprecated| \u9009\u4E2D\u65F6\u7684\u503C| string / number| \u2014 |
| false-label deprecated| \u6CA1\u6709\u9009\u4E2D\u65F6\u7684\u503C| string / number| \u2014 |
| disabled| \u662F\u5426\u7981\u7528| boolean| false |
| name| \u539F\u751F name \u5C5E\u6027| string| \u2014 |
| checked| \u5F53\u524D\u662F\u5426\u52FE\u9009| boolean| false |

#### CheckboxButton Slots

| \u63D2\u69FD\u540D| \u63CF\u8FF0 |
| :--- | :--- |
| default| \u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9 |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-color-picker":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/color-picker.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| model-value / v-model| \u9009\u4E2D\u9879\u7ED1\u5B9A\u503C| string| \u2014 |
| disabled| \u662F\u5426\u7981\u7528| boolean| false |
| size| \u5C3A\u5BF8| enum| \u2014 |
| show-alpha| \u662F\u5426\u652F\u6301\u900F\u660E\u5EA6\u9009\u62E9| boolean| false |
| color-format| \u5199\u5165 v-model \u7684\u989C\u8272\u7684\u683C\u5F0F| enum| \u2014 |
| popper-class| ColorPicker \u4E0B\u62C9\u6846\u7684\u7C7B\u540D| string| \u2014 |
| predefine| \u9884\u5B9A\u4E49\u989C\u8272| object| \u2014 |
| validate-event| \u8F93\u5165\u65F6\u662F\u5426\u89E6\u53D1\u8868\u5355\u7684\u6821\u9A8C| boolean| true |
| tabindex| ColorPicker \u7684 tabindex| string / number| 0 |
| label a11y| ColorPicker \u7684 aria-label| string| \u2014 |
| id| ColorPicker \u7684 id| string| \u2014 |
#### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D| \u8BF4\u660E| \u7C7B\u578B |
| :--- | :--- | :--- |
| change| \u5F53\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1| Function |
| active-change| \u9762\u677F\u4E2D\u5F53\u524D\u663E\u793A\u7684\u989C\u8272\u53D1\u751F\u6539\u53D8\u65F6\u89E6\u53D1| Function |
| focus 2.4.0| \u5F53\u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1| Function |
| blur 2.4.0| \u5F53\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1| Function |

#### Exposes

| \u540D\u79F0| \u8BF4\u660E| \u7C7B\u578B |
| :--- | :--- | :--- |
| color| \u5F53\u524D\u8272\u5F69\u5BF9\u8C61| object |
| show 2.3.3| \u624B\u52A8\u663E\u793A\u989C\u8272\u9009\u62E9\u5668| Function |
| hide 2.3.3| \u624B\u52A8\u9690\u85CF\u989C\u8272\u9009\u62E9\u5668| Function |
| focus 2.3.13| \u4F7F picker \u83B7\u5F97\u7126\u70B9| Function |
| blur 2.3.13| \u4F7F picker \u5931\u53BB\u7126\u70B9| Function |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-date-picker":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/date-picker.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4 |
| :--- | :--- | :--- | :--- |
| model-value / v-model| \u7ED1\u5B9A\u503C\uFF0C\u5982\u679C\u5B83\u662F\u6570\u7EC4\uFF0C\u957F\u5EA6\u5E94\u8BE5\u662F 2| number / string / object| '' |
| readonly| \u53EA\u8BFB| boolean| false |
| disabled| \u7981\u7528| boolean| false |
| size| \u8F93\u5165\u6846\u5C3A\u5BF8| enum| \u2014 |
| editable| \u6587\u672C\u6846\u53EF\u8F93\u5165| boolean| true |
| clearable| \u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE| boolean| true |
| placeholder| \u975E\u8303\u56F4\u9009\u62E9\u65F6\u7684\u5360\u4F4D\u5185\u5BB9| string| '' |
| start-placeholder| \u8303\u56F4\u9009\u62E9\u65F6\u5F00\u59CB\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9| string| \u2014 |
| end-placeholder| \u8303\u56F4\u9009\u62E9\u65F6\u7ED3\u675F\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9| string| \u2014 |
| type| \u663E\u793A\u7C7B\u578B| enum| date |
| format| \u663E\u793A\u5728\u8F93\u5165\u6846\u4E2D\u7684\u683C\u5F0F| \u53C2\u89C1 date formats| YYYY-MM-DD |
| popper-class| DatePicker \u4E0B\u62C9\u6846\u7684\u7C7B\u540D| string| \u2014 |
| popper-options| \u81EA\u5B9A\u4E49 popper \u9009\u9879\uFF0C\u66F4\u591A\u8BF7\u53C2\u8003 popper.js| object| {} |
| range-separator| \u9009\u62E9\u8303\u56F4\u65F6\u7684\u5206\u9694\u7B26| string| '-' |
| default-value| \u53EF\u9009\uFF0C\u9009\u62E9\u5668\u6253\u5F00\u65F6\u9ED8\u8BA4\u663E\u793A\u7684\u65F6\u95F4| object| \u2014 |
| default-time| \u8303\u56F4\u9009\u62E9\u65F6\u9009\u4E2D\u65E5\u671F\u6240\u4F7F\u7528\u7684\u5F53\u65E5\u5185\u5177\u4F53\u65F6\u523B| object| \u2014 |
| value-format| \u53EF\u9009\uFF0C\u7ED1\u5B9A\u503C\u7684\u683C\u5F0F\u3002 \u4E0D\u6307\u5B9A\u5219\u7ED1\u5B9A\u503C\u4E3A Date \u5BF9\u8C61| \u53C2\u89C1 date formats| \u2014 |
| id| \u7B49\u4EF7\u4E8E\u539F\u751F input id \u5C5E\u6027| string / object| \u2014 |
| name| \u7B49\u4EF7\u4E8E\u539F\u751F input name \u5C5E\u6027| string / object| '' |
| unlink-panels| \u5728\u8303\u56F4\u9009\u62E9\u5668\u91CC\u53D6\u6D88\u4E24\u4E2A\u65E5\u671F\u9762\u677F\u4E4B\u95F4\u7684\u8054\u52A8| boolean| false |
| prefix-icon| \u81EA\u5B9A\u4E49\u524D\u7F00\u56FE\u6807 \u5982\u679C type\u7684\u503C\u662FTimeLikeType\uFF0C\u90A3\u4E48\u5C31\u662F Clock\uFF0C\u4E0D\u7136\u5C31\u662F Calendar| string / object| '' |
| clear-icon| \u81EA\u5B9A\u4E49\u6E05\u9664\u56FE\u6807| string / object| CircleClose |
| validate-event| \u662F\u5426\u89E6\u53D1\u8868\u5355\u9A8C\u8BC1| boolean| true |
| disabled-date| \u4E00\u4E2A\u7528\u6765\u5224\u65AD\u8BE5\u65E5\u671F\u662F\u5426\u88AB\u7981\u7528\u7684\u51FD\u6570\uFF0C\u63A5\u53D7\u4E00\u4E2A Date \u5BF9\u8C61\u4F5C\u4E3A\u53C2\u6570\u3002 \u5E94\u8BE5\u8FD4\u56DE\u4E00\u4E2A Boolean \u503C\u3002| Function| \u2014 |
| shortcuts| \u8BBE\u7F6E\u5FEB\u6377\u9009\u9879\uFF0C\u9700\u8981\u4F20\u5165\u6570\u7EC4\u5BF9\u8C61| object| [] |
| cell-class-name| \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u7C7B\u540D| Function| \u2014 |
| teleported| \u662F\u5426\u5C06 date-picker \u7684\u4E0B\u62C9\u5217\u8868\u63D2\u5165\u81F3 body \u5143\u7D20| boolean| true |
#### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D| \u8BF4\u660E| \u7C7B\u578B |
| :--- | :--- | :--- |
| change| \u7528\u6237\u786E\u8BA4\u9009\u5B9A\u7684\u503C\u65F6\u89E6\u53D1| Function |
| blur| \u5728\u7EC4\u4EF6 Input \u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1| Function |
| focus| \u5728\u7EC4\u4EF6 Input \u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1| Function |
| calendar-change| \u5728\u65E5\u5386\u6240\u9009\u65E5\u671F\u66F4\u6539\u65F6\u89E6\u53D1| Function |
| panel-change| \u5F53\u65E5\u671F\u9762\u677F\u6539\u53D8\u65F6\u89E6\u53D1\u3002| Function |
| visible-change| \u5F53 DatePicker \u7684\u4E0B\u62C9\u5217\u8868\u51FA\u73B0/\u6D88\u5931\u65F6\u89E6\u53D1| Function |

#### \u63D2\u69FD

| \u540D\u79F0| \u8BF4\u660E |
| :--- | :--- |
| default| \u81EA\u5B9A\u4E49\u5355\u5143\u683C\u5185\u5BB9 |
| range-separator| \u81EA\u5B9A\u4E49\u8303\u56F4\u5206\u5272\u7B26\u5185\u5BB9 |

#### \u66B4\u9732

| \u63D2\u69FD\u540D| \u8BF4\u660E| \u7C7B\u578B |
| :--- | :--- | :--- |
| focus| \u4F7F\u9009\u62E9\u5668\u7684\u8F93\u5165\u6846\u83B7\u53D6\u7126\u70B9| Function |
| handleOpen 2.2.16| \u6253\u5F00\u65E5\u671F\u9009\u62E9\u5668\u5F39\u7A97| Function |
| handleClose 2.2.16| \u5173\u95ED\u65E5\u671F\u9009\u62E9\u5668\u5F39\u7A97| Function |

#### \u7C7B\u578B\u58F0\u660E

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-datetime-picker":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/datetime-picker.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u53EF\u9009\u503C| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| model-value / v-model| \u7ED1\u5B9A\u503C\uFF0C\u5982\u679C\u5B83\u662F\u6570\u7EC4\uFF0C\u957F\u5EA6\u5E94\u8BE5\u662F 2| Date / number / string / Array| \u2014| \u2014 |
| readonly| \u53EA\u8BFB| boolean| \u2014| false |
| disabled| \u7981\u7528| boolean| \u2014| false |
| editable| \u6587\u672C\u6846\u53EF\u8F93\u5165| boolean| \u2014| true |
| clearable| \u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE| boolean| \u2014| true |
| size| \u8F93\u5165\u6846\u5C3A\u5BF8| string| large/default/small| default |
| placeholder| \u975E\u8303\u56F4\u9009\u62E9\u65F6\u7684\u5360\u4F4D\u5185\u5BB9| string| \u2014| \u2014 |
| start-placeholder| \u8303\u56F4\u9009\u62E9\u65F6\u5F00\u59CB\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9| string| \u2014| \u2014 |
| end-placeholder| \u8303\u56F4\u9009\u62E9\u65F6\u7ED3\u675F\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9| string| \u2014| \u2014 |
| arrow-control| \u662F\u5426\u4F7F\u7528\u7BAD\u5934\u8FDB\u884C\u65F6\u95F4\u9009\u62E9| boolean| \u2014| false |
| type| \u663E\u793A\u7C7B\u578B| string| year/month/date/datetime/ week/datetimerange/daterange| date |
| format| \u663E\u793A\u5728\u8F93\u5165\u6846\u4E2D\u7684\u683C\u5F0F| string| \u53C2\u89C1 date formats| YYYY-MM-DD HH:mm:ss |
| popper-class| DateTimePicker \u4E0B\u62C9\u6846\u7684\u7C7B\u540D| string| \u2014| \u2014 |
| range-separator| \u9009\u62E9\u8303\u56F4\u65F6\u7684\u5206\u9694\u7B26| string| \u2014| '-' |
| default-value| \u53EF\u9009\uFF0C\u9009\u62E9\u5668\u6253\u5F00\u65F6\u9ED8\u8BA4\u663E\u793A\u7684\u65F6\u95F4| Date / [Date, Date]| | \u2014 |
| default-time| \u9009\u62E9\u65E5\u671F\u540E\u7684\u9ED8\u8BA4\u65F6\u95F4\u503C\u3002 \u5982\u672A\u6307\u5B9A\u5219\u9ED8\u8BA4\u65F6\u95F4\u503C\u4E3A 00:00:00| Date / [Date, Date]| \u2014| \u2014 |
| value-format| \u53EF\u9009\uFF0C\u7ED1\u5B9A\u503C\u7684\u683C\u5F0F\u3002 \u4E0D\u6307\u5B9A\u5219\u7ED1\u5B9A\u503C\u4E3A Date \u5BF9\u8C61| string| \u67E5\u770B \u65E5\u671F\u683C\u5F0F| \u2014 |
| date-format 2.4.0| \u53EF\u9009\uFF0C\u65F6\u95F4\u9009\u62E9\u5668\u4E0B\u62C9\u5217\u8868\u4E2D\u663E\u793A\u7684\u65E5\u671F\u683C\u5F0F| string| \u53C2\u89C1 date formats| \u2014 |
| time-format 2.4.0| \u53EF\u9009\uFF0C\u65F6\u95F4\u9009\u62E9\u5668\u4E0B\u62C9\u5217\u8868\u4E2D\u663E\u793A\u7684\u65F6\u95F4\u683C\u5F0F| string| \u53C2\u89C1 date formats| \u2014 |
| id| \u7B49\u4EF7\u4E8E\u539F\u751F input id \u5C5E\u6027| string / [string, string]| \u2014| \u2014 |
| name| \u7B49\u4EF7\u4E8E\u539F\u751F input name \u5C5E\u6027| string| \u2014| \u2014 |
| unlink-panels| \u5728\u8303\u56F4\u9009\u62E9\u5668\u91CC\u53D6\u6D88\u4E24\u4E2A\u65E5\u671F\u9762\u677F\u4E4B\u95F4\u7684\u8054\u52A8| boolean| \u2014| false |
| prefix-icon| \u81EA\u5B9A\u4E49\u524D\u7F00\u56FE\u6807\u7EC4\u4EF6| string | Component| \u2014| Date |
| clear-icon| \u81EA\u5B9A\u4E49\u6E05\u9664\u56FE\u6807| string | Component| \u2014| CircleClose |
| shortcuts| \u8BBE\u7F6E\u5FEB\u6377\u9009\u9879\uFF0C\u9700\u8981\u4F20\u5165\u6570\u7EC4\u5BF9\u8C61| object[{ text: string, value: date / function }]| \u2014| \u2014 |
| disabled-date| \u4E00\u4E2A\u7528\u6765\u5224\u65AD\u8BE5\u65E5\u671F\u662F\u5426\u88AB\u7981\u7528\u7684\u51FD\u6570\uFF0C\u63A5\u53D7\u4E00\u4E2A Date \u5BF9\u8C61\u4F5C\u4E3A\u53C2\u6570\u3002 \u5E94\u8BE5\u8FD4\u56DE\u4E00\u4E2A Boolean \u503C\u3002| function(Date)| \u2014| \u2014 |
| cell-class-name| \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u7C7B\u540D| Function(Date)| \u2014| \u2014 |
| teleported| \u662F\u5426\u5C06 datetime-picker \u7684\u4E0B\u62C9\u5217\u8868\u63D2\u5165\u81F3 body \u5143\u7D20| boolean| true / false| true |
#### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D| \u8BF4\u660E| \u56DE\u8C03\u53C2\u6570 |
| :--- | :--- | :--- |
| change| \u7528\u6237\u786E\u8BA4\u9009\u5B9A\u7684\u503C\u65F6\u89E6\u53D1| value |
| blur| \u5728\u7EC4\u4EF6 Input \u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1| (e: FocusEvent) |
| focus| \u5728\u7EC4\u4EF6 Input \u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1| (e: FocusEvent) |
| calendar-change| \u5982\u679C\u7528\u6237\u6CA1\u6709\u9009\u62E9\u65E5\u671F\uFF0C\u90A3\u9ED8\u8BA4\u5C55\u793A\u5F53\u524D\u65E5\u7684\u6708\u4EFD\u3002 \u9009\u4E2D\u65E5\u5386\u65E5\u671F\u540E\u4F1A\u6267\u884C\u7684\u56DE\u8C03\uFF0C\u53EA\u6709\u5F53 datetimerange \u624D\u751F\u6548| [Date, Date] |
| visible-change| \u5F53 DateTimePicker \u7684\u4E0B\u62C9\u5217\u8868\u51FA\u73B0/\u6D88\u5931\u65F6\u89E6\u53D1| \u51FA\u73B0\u65F6\u4E3Atrue\uFF0C\u9690\u85CF\u65F6\u4E3Afalse |

| \u65B9\u6CD5\u540D| \u8BF4\u660E| \u53C2\u6570 |
| :--- | :--- | :--- |
| focus| \u4F7F input \u83B7\u53D6\u7126\u70B9| \u2014 |

#### Slots

| \u63D2\u69FD\u540D| \u8BF4\u660E |
| :--- | :--- |
| default| \u81EA\u5B9A\u4E49\u5355\u5143\u683C\u5185\u5BB9 |
| range-separator| \u81EA\u5B9A\u4E49\u8303\u56F4\u5206\u5272\u7B26\u5185\u5BB9 |

#### \u6E90\u4EE3\u7801
`,"el-form":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/form.html)

#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| model| \u8868\u5355\u6570\u636E\u5BF9\u8C61| object| \u2014 |
| rules| \u8868\u5355\u9A8C\u8BC1\u89C4\u5219| object| \u2014 |
| inline| \u884C\u5185\u8868\u5355\u6A21\u5F0F| boolean| false |
| label-position| \u8868\u5355\u57DF\u6807\u7B7E\u7684\u4F4D\u7F6E\uFF0C \u5F53\u8BBE\u7F6E\u4E3A left \u6216 right \u65F6\uFF0C\u5219\u4E5F\u9700\u8981\u8BBE\u7F6E label-width \u5C5E\u6027| enum| right |
| label-width| \u6807\u7B7E\u7684\u957F\u5EA6\uFF0C\u4F8B\u5982 '50px'\u3002 \u4F5C\u4E3A Form \u76F4\u63A5\u5B50\u5143\u7D20\u7684 form-item \u4F1A\u7EE7\u627F\u8BE5\u503C\u3002 \u53EF\u4EE5\u4F7F\u7528 auto\u3002| string / number| '' |
| label-suffix| \u8868\u5355\u57DF\u6807\u7B7E\u7684\u540E\u7F00| string| '' |
| hide-required-asterisk| \u662F\u5426\u9690\u85CF\u5FC5\u586B\u5B57\u6BB5\u6807\u7B7E\u65C1\u8FB9\u7684\u7EA2\u8272\u661F\u53F7\u3002| boolean| false |
| require-asterisk-position| \u661F\u53F7\u7684\u4F4D\u7F6E\u3002| enum| left |
| show-message| \u662F\u5426\u663E\u793A\u6821\u9A8C\u9519\u8BEF\u4FE1\u606F| boolean| true |
| inline-message| \u662F\u5426\u4EE5\u884C\u5185\u5F62\u5F0F\u5C55\u793A\u6821\u9A8C\u4FE1\u606F| boolean| false |
| status-icon| \u662F\u5426\u5728\u8F93\u5165\u6846\u4E2D\u663E\u793A\u6821\u9A8C\u7ED3\u679C\u53CD\u9988\u56FE\u6807| boolean| false |
| validate-on-rule-change| \u662F\u5426\u5728 rules \u5C5E\u6027\u6539\u53D8\u540E\u7ACB\u5373\u89E6\u53D1\u4E00\u6B21\u9A8C\u8BC1| boolean| true |
| size| \u7528\u4E8E\u63A7\u5236\u8BE5\u8868\u5355\u5185\u7EC4\u4EF6\u7684\u5C3A\u5BF8| enum| \u2014 |
| disabled| \u662F\u5426\u7981\u7528\u8BE5\u8868\u5355\u5185\u7684\u6240\u6709\u7EC4\u4EF6\u3002 \u5982\u679C\u8BBE\u7F6E\u4E3A true, \u5B83\u5C06\u8986\u76D6\u5185\u90E8\u7EC4\u4EF6\u7684 disabled \u5C5E\u6027| boolean| false |
| scroll-to-error| \u5F53\u6821\u9A8C\u5931\u8D25\u65F6\uFF0C\u6EDA\u52A8\u5230\u7B2C\u4E00\u4E2A\u9519\u8BEF\u8868\u5355\u9879| boolean| false |
| scroll-into-view-options 2.3.2| \u5F53\u6821\u9A8C\u6709\u5931\u8D25\u7ED3\u679C\u65F6\uFF0C\u6EDA\u52A8\u5230\u7B2C\u4E00\u4E2A\u5931\u8D25\u7684\u8868\u5355\u9879\u76EE \u53EF\u901A\u8FC7 scrollIntoView \u914D\u7F6E| object / boolean| \u2014 |
#### \u4E8B\u4EF6

| \u540D\u79F0| \u8BF4\u660E| \u7C7B\u578B |
| :--- | :--- | :--- |
| validate| \u4EFB\u4E00\u8868\u5355\u9879\u88AB\u6821\u9A8C\u540E\u89E6\u53D1| Function |

#### Form Slots

| \u4E8B\u4EF6\u540D| \u8BF4\u660E| \u5B50\u6807\u7B7E |
| :--- | :--- | :--- |
| default| \u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9| FormItem |

#### Form Exposes

| \u540D\u79F0| \u8BF4\u660E| \u7C7B\u578B |
| :--- | :--- | :--- |
| validate| \u5BF9\u6574\u4E2A\u8868\u5355\u7684\u5185\u5BB9\u8FDB\u884C\u9A8C\u8BC1\u3002 \u63A5\u6536\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\uFF0C\u6216\u8FD4\u56DE Promise\u3002| Function |
| validateField| \u9A8C\u8BC1\u5177\u4F53\u7684\u67D0\u4E2A\u5B57\u6BB5\u3002| Function |
| resetFields| \u91CD\u7F6E\u8BE5\u8868\u5355\u9879\uFF0C\u5C06\u5176\u503C\u91CD\u7F6E\u4E3A\u521D\u59CB\u503C\uFF0C\u5E76\u79FB\u9664\u6821\u9A8C\u7ED3\u679C| Function |
| scrollToField| \u6EDA\u52A8\u5230\u6307\u5B9A\u7684\u5B57\u6BB5| Function |
| clearValidate| \u6E05\u7406\u67D0\u4E2A\u5B57\u6BB5\u7684\u8868\u5355\u9A8C\u8BC1\u4FE1\u606F\u3002| Function |
`,"el-form-item":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/form.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| Default |
| :--- | :--- | :--- | :--- |
| prop| model \u7684\u952E\u540D\u3002 \u5B83\u53EF\u4EE5\u662F\u4E00\u4E2A\u5C5E\u6027\u7684\u503C(\u5982 a.b.0 \u6216 [a', 'b', '0'])\u3002 \u5728\u4F7F\u7528\u4E86 validate\u3001resetFields \u7684\u65B9\u6CD5\u65F6\uFF0C\u8BE5\u5C5E\u6027\u662F\u5FC5\u586B\u7684\u3002| string / string[]| \u2014 |
| label| \u6807\u7B7E\u6587\u672C| string| \u2014 |
| label-width| \u6807\u7B7E\u5BBD\u5EA6\uFF0C\u4F8B\u5982 '50px'\u3002 \u53EF\u4EE5\u4F7F\u7528 auto\u3002| string / number| '' |
| required| \u662F\u5426\u4E3A\u5FC5\u586B\u9879\uFF0C\u5982\u4E0D\u8BBE\u7F6E\uFF0C\u5219\u4F1A\u6839\u636E\u6821\u9A8C\u89C4\u5219\u786E\u8BA4| boolean| \u2014 |
| rules| \u8868\u5355\u9A8C\u8BC1\u89C4\u5219, \u5177\u4F53\u914D\u7F6E\u89C1\u4E0B\u8868, \u66F4\u591A\u5185\u5BB9\u53EF\u4EE5\u53C2\u8003async-validator| object| \u2014 |
| error| \u8868\u5355\u57DF\u9A8C\u8BC1\u9519\u8BEF\u65F6\u7684\u63D0\u793A\u4FE1\u606F\u3002\u8BBE\u7F6E\u8BE5\u503C\u4F1A\u5BFC\u81F4\u8868\u5355\u9A8C\u8BC1\u72B6\u6001\u53D8\u4E3A error\uFF0C\u5E76\u663E\u793A\u8BE5\u9519\u8BEF\u4FE1\u606F\u3002| string| \u2014 |
| show-message| \u662F\u5426\u663E\u793A\u6821\u9A8C\u9519\u8BEF\u4FE1\u606F| boolean| true |
| inline-message| \u662F\u5426\u5728\u884C\u5185\u663E\u793A\u6821\u9A8C\u4FE1\u606F| string / boolean| '' |
| size| \u7528\u4E8E\u63A7\u5236\u8BE5\u8868\u5355\u57DF\u4E0B\u7EC4\u4EF6\u7684\u9ED8\u8BA4\u5C3A\u5BF8| enum| \u2014 |
| for| \u548C\u539F\u751F\u6807\u7B7E\u76F8\u540C\u80FD\u529B| string| \u2014 |
| validate-status| formitem \u6821\u9A8C\u7684\u72B6\u6001| enum| \u2014 |

| \u540D\u79F0| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| trigger| \u9A8C\u8BC1\u903B\u8F91\u7684\u89E6\u53D1\u65B9\u5F0F| enum| \u2014 |

#### FormItem Slots

| \u63D2\u69FD\u540D| \u8BF4\u660E| \u7C7B\u578B |
| :--- | :--- | :--- |
| default| \u8868\u5355\u7684\u5185\u5BB9\u3002| \u2014 |
| label| \u6807\u7B7E\u4F4D\u7F6E\u663E\u793A\u7684\u5185\u5BB9| object |
| error| \u9A8C\u8BC1\u9519\u8BEF\u4FE1\u606F\u7684\u663E\u793A\u5185\u5BB9| object |

#### FormItem Exposes

| \u540D\u79F0| \u8BF4\u660E| \u7C7B\u578B |
| :--- | :--- | :--- |
| size| \u8868\u5355\u9879\u5927\u5C0F| object |
| validateMessage| \u6821\u9A8C\u6D88\u606F| object |
| validateState| \u6821\u9A8C\u72B6\u6001| object |
| validate| \u9A8C\u8BC1\u8868\u5355\u9879| Function |
| resetField| \u5BF9\u8BE5\u8868\u5355\u9879\u8FDB\u884C\u91CD\u7F6E\uFF0C\u5C06\u5176\u503C\u91CD\u7F6E\u4E3A\u521D\u59CB\u503C\u5E76\u79FB\u9664\u6821\u9A8C\u7ED3\u679C| Function |
| clearValidate| \u79FB\u9664\u8BE5\u8868\u5355\u9879\u7684\u6821\u9A8C\u7ED3\u679C| Function |

#### \u7C7B\u578B\u58F0\u660E

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-input":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/input.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| type| \u7C7B\u578B| string \u7B49\u539F\u751F input \u7C7B\u578B| text |
| model-value / v-model| \u7ED1\u5B9A\u503C| string / number| \u2014 |
| maxlength| \u540C\u539F\u751F maxlength \u5C5E\u6027| string / number| \u2014 |
| minlength| \u539F\u751F\u5C5E\u6027\uFF0C\u6700\u5C0F\u8F93\u5165\u957F\u5EA6| string / number| \u2014 |
| show-word-limit| \u662F\u5426\u663E\u793A\u7EDF\u8BA1\u5B57\u6570, \u53EA\u5728 type \u4E3A 'text' \u6216 'textarea' \u7684\u65F6\u5019\u751F\u6548| boolean| boolean |
| placeholder| \u8F93\u5165\u6846\u5360\u4F4D\u6587\u672C| string| \u2014 |
| clearable| \u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE\uFF0C\u53EA\u6709\u5F53 type \u4E0D\u662F textarea\u65F6\u751F\u6548| boolean| false |
| formatter| \u6307\u5B9A\u8F93\u5165\u503C\u7684\u683C\u5F0F\u3002(\u53EA\u6709\u5F53 type \u662F"text"\u65F6\u624D\u80FD\u5DE5\u4F5C)| Function| \u2014 |
| parser| \u6307\u5B9A\u4ECE\u683C\u5F0F\u5316\u5668\u8F93\u5165\u4E2D\u63D0\u53D6\u7684\u503C\u3002(\u4EC5\u5F53 type \u662F"text"\u65F6\u624D\u8D77\u4F5C\u7528)| Function| \u2014 |
| show-password| \u662F\u5426\u663E\u793A\u5207\u6362\u5BC6\u7801\u56FE\u6807| boolean| false |
| disabled| \u662F\u5426\u7981\u7528| boolean| false |
| size| \u8F93\u5165\u6846\u5C3A\u5BF8\uFF0C\u53EA\u5728 type \u4E0D\u4E3A 'textarea' \u65F6\u6709\u6548| enum| \u2014 |
| prefix-icon| \u81EA\u5B9A\u4E49\u524D\u7F00\u56FE\u6807| string / Component| \u2014 |
| suffix-icon| \u81EA\u5B9A\u4E49\u540E\u7F00\u56FE\u6807| string / Component| \u2014 |
| rows| \u8F93\u5165\u6846\u884C\u6570\uFF0C\u4EC5 type \u4E3A 'textarea' \u65F6\u6709\u6548| number| number |
| autosize| textarea \u9AD8\u5EA6\u662F\u5426\u81EA\u9002\u5E94\uFF0C\u4EC5 type \u4E3A 'textarea' \u65F6\u751F\u6548\u3002 \u53EF\u4EE5\u63A5\u53D7\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u6BD4\u5982: { minRows: 2, maxRows: 6 }| boolean / object| false |
| autocomplete| \u539F\u751F autocomplete \u5C5E\u6027| string| off |
| name| \u7B49\u4EF7\u4E8E\u539F\u751F input name \u5C5E\u6027| string| \u2014 |
| readonly| \u539F\u751F readonly \u5C5E\u6027\uFF0C\u662F\u5426\u53EA\u8BFB| boolean| false |
| max| \u539F\u751F max \u5C5E\u6027\uFF0C\u8BBE\u7F6E\u6700\u5927\u503C| \u2014| \u2014 |
| min| \u539F\u751F\u5C5E\u6027\uFF0C\u8BBE\u7F6E\u6700\u5C0F\u503C| \u2014| \u2014 |
| step| \u539F\u751F\u5C5E\u6027\uFF0C\u8BBE\u7F6E\u8F93\u5165\u5B57\u6BB5\u7684\u5408\u6CD5\u6570\u5B57\u95F4\u9694| \u2014| \u2014 |
| resize| \u63A7\u5236\u662F\u5426\u80FD\u88AB\u7528\u6237\u7F29\u653E| enum| \u2014 |
| autofocus| \u539F\u751F\u5C5E\u6027\uFF0C\u81EA\u52A8\u83B7\u53D6\u7126\u70B9| boolean| false |
| form| \u539F\u751F\u5C5E\u6027| string| \u2014 |
| label a11y| \u7B49\u4EF7\u4E8E\u539F\u751F input aria-label \u5C5E\u6027| string| \u2014 |
| tabindex| \u8F93\u5165\u6846\u7684 tabindex| string / number| \u2014 |
| validate-event| \u8F93\u5165\u65F6\u662F\u5426\u89E6\u53D1\u8868\u5355\u7684\u6821\u9A8C| boolean| true |
| input-style| input \u5143\u7D20\u6216 textarea \u5143\u7D20\u7684 style| string / object| {} |
#### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D| \u8BF4\u660E| \u7C7B\u578B |
| :--- | :--- | :--- |
| blur| \u5F53\u9009\u62E9\u5668\u7684\u8F93\u5165\u6846\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1| Function |
| focus| \u5F53\u9009\u62E9\u5668\u7684\u8F93\u5165\u6846\u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1| Function |
| change| \u4EC5\u5F53 modelValue \u6539\u53D8\u65F6\uFF0C\u5F53\u8F93\u5165\u6846\u5931\u53BB\u7126\u70B9\u6216\u7528\u6237\u6309Enter\u65F6\u89E6\u53D1| Function |
| input| \u5728 Input \u503C\u6539\u53D8\u65F6\u89E6\u53D1| Function |
| clear| \u5728\u70B9\u51FB\u7531 clearable \u5C5E\u6027\u751F\u6210\u7684\u6E05\u7A7A\u6309\u94AE\u65F6\u89E6\u53D1| Function |

#### Slots

| \u63D2\u69FD\u540D| \u8BF4\u660E |
| :--- | :--- |
| prefix| \u8F93\u5165\u6846\u5934\u90E8\u5185\u5BB9\uFF0C\u53EA\u5BF9\u975E type="textarea" \u6709\u6548 |
| suffix| \u8F93\u5165\u6846\u5C3E\u90E8\u5185\u5BB9\uFF0C\u53EA\u5BF9\u975E type="textarea" \u6709\u6548 |
| prepend| \u8F93\u5165\u6846\u524D\u7F6E\u5185\u5BB9\uFF0C\u53EA\u5BF9\u975E type="textarea" \u6709\u6548 |
| append| \u8F93\u5165\u6846\u540E\u7F6E\u5185\u5BB9\uFF0C\u53EA\u5BF9\u975E type="textarea" \u6709\u6548 |

#### Exposes

| \u540D\u79F0| \u8BF4\u660E| \u7C7B\u578B |
| :--- | :--- | :--- |
| blur| \u4F7F input \u5931\u53BB\u7126\u70B9| Function |
| clear| \u6E05\u9664 input \u503C| Function |
| focus| \u4F7F input \u83B7\u53D6\u7126\u70B9| Function |
| input| Input HTML \u5143\u7D20| object |
| ref| HTML\u5143\u7D20 input \u6216 textarea| object |
| resizeTextarea| \u6539\u53D8 textarea \u5927\u5C0F| Function |
| select| \u9009\u4E2D input \u4E2D\u7684\u6587\u5B57| Function |
| textarea| HTML textarea \u5143\u7D20| object |
| textareaStyle| textarea \u7684\u6837\u5F0F| object |

#### \u5E38\u89C1\u95EE\u9898

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-input-number":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/input-number.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| model-value / v-model| \u9009\u4E2D\u9879\u7ED1\u5B9A\u503C| number| \u2014 |
| min| \u8BBE\u7F6E\u8BA1\u6570\u5668\u5141\u8BB8\u7684\u6700\u5C0F\u503C| number| -Infinity |
| max| \u8BBE\u7F6E\u8BA1\u6570\u5668\u5141\u8BB8\u7684\u6700\u5927\u503C| number| Infinity |
| step| \u8BA1\u6570\u5668\u6B65\u957F| number| 1 |
| step-strictly| \u662F\u5426\u53EA\u80FD\u8F93\u5165 step \u7684\u500D\u6570| boolean| false |
| precision| \u6570\u503C\u7CBE\u5EA6| number| \u2014 |
| size| \u8BA1\u6570\u5668\u5C3A\u5BF8| enum| default |
| readonly 2.2.16| \u539F\u751F readonly \u5C5E\u6027\uFF0C\u662F\u5426\u53EA\u8BFB| boolean| false |
| disabled| \u662F\u5426\u7981\u7528\u72B6\u6001| boolean| false |
| controls| \u662F\u5426\u4F7F\u7528\u63A7\u5236\u6309\u94AE| boolean| true |
| controls-position| \u63A7\u5236\u6309\u94AE\u4F4D\u7F6E| enum| \u2014 |
| name| \u7B49\u4EF7\u4E8E\u539F\u751F input name \u5C5E\u6027| string| \u2014 |
| label| \u7B49\u4EF7\u4E8E\u539F\u751F input label \u5C5E\u6027| string| \u2014 |
| placeholder| \u7B49\u4EF7\u4E8E\u539F\u751F input placeholder \u5C5E\u6027| string| \u2014 |
| id| \u7B49\u4EF7\u4E8E\u539F\u751F input id \u5C5E\u6027| string| \u2014 |
| value-on-clear 2.2.0| \u5F53\u8F93\u5165\u6846\u88AB\u6E05\u7A7A\u65F6\u663E\u793A\u7684\u503C| number / null / enum| \u2014 |
| validate-event| \u662F\u5426\u89E6\u53D1\u8868\u5355\u9A8C\u8BC1| boolean| true |
#### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D| \u8BF4\u660E| \u7C7B\u578B |
| :--- | :--- | :--- |
| change| \u7ED1\u5B9A\u503C\u88AB\u6539\u53D8\u65F6\u89E6\u53D1| Function |
| blur| \u5728\u7EC4\u4EF6 Input \u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1| Function |
| focus| \u5728\u7EC4\u4EF6 Input \u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1| Function |

#### Exposes

| \u540D\u79F0| \u8BF4\u660E| \u7C7B\u578B |
| :--- | :--- | :--- |
| focus| \u4F7F input \u7EC4\u4EF6\u83B7\u5F97\u7126\u70B9| Function |
| blur| \u4F7F input \u7EC4\u4EF6\u5931\u53BB\u7126\u70B9| Function |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-radio":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/radio.html)

#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| model-value / v-model| \u9009\u4E2D\u9879\u7ED1\u5B9A\u503C| string / number / boolean| \u2014 |
| value 2.6.0| \u5355\u9009\u6846\u7684\u503C| string / number / boolean| \u2014 |
| label| \u5355\u9009\u6846\u7684 label \u5982\u679C\u6CA1\u6709 value\uFF0C label\u5219\u4F5C\u4E3Avalue\u4F7F\u7528| string / number / boolean| \u2014 |
| disabled| \u662F\u5426\u7981\u7528\u5355\u9009\u6846| boolean| false |
| border| \u662F\u5426\u663E\u793A\u8FB9\u6846| boolean| false |
| size| \u5355\u9009\u6846\u7684\u5C3A\u5BF8| enum| \u2014 |
| name| \u539F\u59CB name \u5C5E\u6027| string| \u2014 |
#### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D| \u8BF4\u660E| \u7C7B\u578B |
| :--- | :--- | :--- |
| change| \u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6| Function |

#### Radio Slots

| \u63D2\u69FD\u540D| \u8BF4\u660E |
| :--- | :--- |
| default| \u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9 |
`,"el-radio-group":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/radio.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| model-value / v-model| \u7ED1\u5B9A\u503C| string / number / boolean| \u2014 |
| size| \u5355\u9009\u6846\u6309\u94AE\u6216\u8FB9\u6846\u6309\u94AE\u7684\u5927\u5C0F| string| default |
| disabled| \u662F\u5426\u7981\u7528| boolean| false |
| text-color| \u6309\u94AE\u5F62\u5F0F\u7684 Radio \u6FC0\u6D3B\u65F6\u7684\u6587\u672C\u989C\u8272| string| #ffffff |
| fill| \u6309\u94AE\u5F62\u5F0F\u7684 Radio \u6FC0\u6D3B\u65F6\u7684\u586B\u5145\u8272\u548C\u8FB9\u6846\u8272| string| #409EFF |
| validate-event| \u8F93\u5165\u65F6\u662F\u5426\u89E6\u53D1\u8868\u5355\u7684\u6821\u9A8C| boolean| true |
| label a11y| \u4E0E RadioGroup \u4E2D\u7684 aria-label \u5C5E\u6027\u76F8\u540C| string| \u2014 |
| name| \u539F\u751F name \u5C5E\u6027| string| \u2014 |
| id| \u539F\u751F id \u5C5E\u6027| string| \u2014 |
#### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D| \u8BF4\u660E| \u7C7B\u578B |
| :--- | :--- | :--- |
| change| \u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6| Function |

#### RadioGroup Slots

| \u63D2\u69FD\u540D| \u8BF4\u660E| \u5B50\u6807\u7B7E |
| :--- | :--- | :--- |
| default| \u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9| Radio / RadioButton |
`,"el-radio-button":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/radio.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4 |
| :--- | :--- | :--- | :--- |
| value 2.6.0| \u5355\u9009\u6846\u7684\u503C| string / number / boolean| \u2014 |
| label| \u5355\u9009\u6846\u7684 label \u5982\u679C\u6CA1\u6709 value\uFF0C label\u5219\u4F5C\u4E3Avalue\u4F7F\u7528| string / number / boolean| \u2014 |
| disabled| \u662F\u5426\u7981\u7528\u5355\u9009\u6846| boolean| false |
| name| \u539F\u751F name \u5C5E\u6027| string| \u2014 |

#### RadioButton Slots

| \u63D2\u69FD\u540D| \u8BF4\u660E |
| :--- | :--- |
| default| \u9ED8\u8BA4\u63D2\u69FD\u5185\u5BB9 |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-rate":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/rate.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| model-value / v-model| \u9009\u4E2D\u9879\u7ED1\u5B9A\u503C| number| 0 |
| max| \u6700\u5927\u5206\u503C| number| 5 |
| size| \u5C3A\u5BF8| enum| \u2014 |
| disabled| \u662F\u5426\u4E3A\u53EA\u8BFB| boolean| false |
| allow-half| \u662F\u5426\u5141\u8BB8\u534A\u9009| boolean| false |
| low-threshold| \u4F4E\u5206\u548C\u4E2D\u7B49\u5206\u6570\u7684\u754C\u9650\u503C\uFF0C \u503C\u672C\u8EAB\u88AB\u5212\u5206\u5728\u4F4E\u5206\u4E2D| number| 2 |
| high-threshold| \u9AD8\u5206\u548C\u4E2D\u7B49\u5206\u6570\u7684\u754C\u9650\u503C\uFF0C \u503C\u672C\u8EAB\u88AB\u5212\u5206\u5728\u9AD8\u5206\u4E2D| number| 4 |
| colors| icon \u7684\u989C\u8272\u3002 \u82E5\u4F20\u5165\u6570\u7EC4\uFF0C\u5171\u6709 3 \u4E2A\u5143\u7D20\uFF0C\u4E3A 3 \u4E2A\u5206\u6BB5\u6240\u5BF9\u5E94\u7684\u989C\u8272\uFF1B\u82E5\u4F20\u5165\u5BF9\u8C61\uFF0C\u53EF\u81EA\u5B9A\u4E49\u5206\u6BB5\uFF0C\u952E\u540D\u4E3A\u5206\u6BB5\u7684\u754C\u9650\u503C\uFF0C\u952E\u503C\u4E3A\u5BF9\u5E94\u7684\u989C\u8272| object| ['#F7BA2A', '#F7BA2A', '#F7BA2A'] |
| void-color| \u672A\u9009\u4E2D icon \u7684\u989C\u8272| string| #C6D1DE |
| disabled-void-color| \u53EA\u8BFB\u65F6\u672A\u9009\u4E2D icon \u7684\u989C\u8272| string| #EFF2F7 |
| icons| \u56FE\u6807\u7EC4\u4EF6 \u82E5\u4F20\u5165\u6570\u7EC4\uFF0C\u5219\u9700\u8981\u4F20\u5165 3 \u4E2A\u5143\u7D20\uFF0C\u5206\u522B\u4E3A 3 \u4E2A\u90E8\u5206\u6240\u5BF9\u5E94\u7684\u7C7B\u540D\uFF1B\u82E5\u4F20\u5165\u5BF9\u8C61\uFF0C\u5219\u53EF\u81EA\u5B9A\u4E49\u5206\u6BB5\uFF0C\u952E\u540D\u4E3A\u5206\u6BB5\u7684\u754C\u9650\u503C\uFF0C\u952E\u503C\u4E3A\u5BF9\u5E94\u7684\u7C7B\u540D| object| [StarFilled, StarFilled, StarFilled] |
| void-icon| \u672A\u88AB\u9009\u4E2D\u7684\u56FE\u6807\u7EC4\u4EF6| string / Component| Star |
| disabled-void-icon| \u7981\u7528\u72B6\u6001\u7684\u672A\u9009\u62E9\u56FE\u6807| string / Component| StarFilled |
| show-text| \u662F\u5426\u663E\u793A\u8F85\u52A9\u6587\u5B57\uFF0C\u82E5\u4E3A\u771F\uFF0C\u5219\u4F1A\u4ECE texts \u6570\u7EC4\u4E2D\u9009\u53D6\u5F53\u524D\u5206\u6570\u5BF9\u5E94\u7684\u6587\u5B57\u5185\u5BB9| boolean| false |
| show-score| \u662F\u5426\u663E\u793A\u5F53\u524D\u5206\u6570\uFF0C show-score \u548C show-text \u4E0D\u80FD\u540C\u65F6\u4E3A\u771F| boolean| false |
| text-color| \u8F85\u52A9\u6587\u5B57\u7684\u989C\u8272| string| '' |
| texts| \u8F85\u52A9\u6587\u5B57\u6570\u7EC4| array| ['Extremely bad', 'Disappointed', 'Fair', 'Satisfied', 'Surprise'] |
| score-template| \u5206\u6570\u663E\u793A\u6A21\u677F| string|  |
| clearable 2.2.18| \u662F\u5426\u53EF\u4EE5\u91CD\u7F6E\u503C\u4E3A 0| boolean| false |
| id| \u539F\u751F id \u5C5E\u6027| string| \u2014 |
| label a11y| \u548C Rate \u7684 aria-label \u5C5E\u6027\u4FDD\u6301\u4E00\u81F4| string| \u2014 |
#### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D| \u63CF\u8FF0\u8BF4\u660E| \u7C7B\u578B |
| :--- | :--- | :--- |
| change| \u5206\u503C\u6539\u53D8\u65F6\u89E6\u53D1| Function |

#### Exposes

| \u540D\u79F0| \u63CF\u8FF0| \u7C7B\u578B |
| :--- | :--- | :--- |
| setCurrentValue| \u8BBE\u7F6E\u5F53\u524D\u503C| Function |
| resetCurrentValue| \u91CD\u7F6E\u5F53\u524D\u503C| Function |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-select":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/select.html)

#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| Default |
| :--- | :--- | :--- | :--- |
| model-value / v-model| \u9009\u4E2D\u9879\u7ED1\u5B9A\u503C| string / number / boolean / object / array| \u2014 |
| multiple| \u662F\u5426\u591A\u9009| boolean| false |
| disabled| \u662F\u5426\u7981\u7528| boolean| false |
| value-key| \u4F5C\u4E3A value \u552F\u4E00\u6807\u8BC6\u7684\u952E\u540D\uFF0C\u7ED1\u5B9A\u503C\u4E3A\u5BF9\u8C61\u7C7B\u578B\u65F6\u5FC5\u586B| string| value |
| size| \u8F93\u5165\u6846\u5C3A\u5BF8| enum| \u2014 |
| clearable| \u662F\u5426\u53EF\u4EE5\u6E05\u7A7A\u9009\u9879| boolean| false |
| collapse-tags| \u591A\u9009\u65F6\u662F\u5426\u5C06\u9009\u4E2D\u503C\u6309\u6587\u5B57\u7684\u5F62\u5F0F\u5C55\u793A| boolean| false |
| collapse-tags-tooltip 2.3.0| \u5F53\u9F20\u6807\u60AC\u505C\u4E8E\u6298\u53E0\u6807\u7B7E\u7684\u6587\u672C\u65F6\uFF0C\u662F\u5426\u663E\u793A\u6240\u6709\u9009\u4E2D\u7684\u6807\u7B7E\u3002 \u8981\u4F7F\u7528\u6B64\u5C5E\u6027\uFF0Ccollapse-tags\u5C5E\u6027\u5FC5\u987B\u8BBE\u5B9A\u4E3A true| boolean| false |
| multiple-limit| multiple \u5C5E\u6027\u8BBE\u7F6E\u4E3A true \u65F6\uFF0C\u4EE3\u8868\u591A\u9009\u573A\u666F\u4E0B\u7528\u6237\u6700\u591A\u53EF\u4EE5\u9009\u62E9\u7684\u9879\u76EE\u6570\uFF0C \u4E3A 0 \u5219\u4E0D\u9650\u5236| number| 0 |
| name| Select \u8F93\u5165\u6846\u7684\u539F\u751F name \u5C5E\u6027| string| \u2014 |
| effect| tooltip \u4E3B\u9898\uFF0C\u5185\u7F6E\u4E86 dark / light \u4E24\u79CD| enum / string| light |
| autocomplete| Select \u8F93\u5165\u6846\u7684\u539F\u751F autocomplete \u5C5E\u6027| string| off |
| placeholder| \u5360\u4F4D\u7B26\uFF0C\u9ED8\u8BA4\u4E3A\u201CSelect\u201D| string| \u2014 |
| filterable| Select \u7EC4\u4EF6\u662F\u5426\u53EF\u7B5B\u9009| boolean| false |
| allow-create| \u662F\u5426\u5141\u8BB8\u7528\u6237\u521B\u5EFA\u65B0\u6761\u76EE\uFF0C \u53EA\u6709\u5F53 filterable \u8BBE\u7F6E\u4E3A true \u65F6\u624D\u4F1A\u751F\u6548\u3002| boolean| false |
| filter-method| \u81EA\u5B9A\u4E49\u7B5B\u9009\u65B9\u6CD5| Function| \u2014 |
| remote| \u5176\u4E2D\u7684\u9009\u9879\u662F\u5426\u4ECE\u670D\u52A1\u5668\u8FDC\u7A0B\u52A0\u8F7D| boolean| false |
| remote-method| \u81EA\u5B9A\u4E49\u8FDC\u7A0B\u641C\u7D22\u65B9\u6CD5| Function| \u2014 |
| remote-show-suffix| \u8FDC\u7A0B\u641C\u7D22\u65B9\u6CD5\u663E\u793A\u540E\u7F00\u56FE\u6807| boolean| false |
| loading| \u662F\u5426\u6B63\u5728\u4ECE\u8FDC\u7A0B\u83B7\u53D6\u6570\u636E| boolean| false |
| loading-text| \u4ECE\u670D\u52A1\u5668\u52A0\u8F7D\u6570\u636E\u65F6\u663E\u793A\u7684\u6587\u672C\uFF0C\u9ED8\u8BA4\u4E3A\u201CLoading\u201D| string| \u2014 |
| no-match-text| \u641C\u7D22\u6761\u4EF6\u65E0\u5339\u914D\u65F6\u663E\u793A\u7684\u6587\u5B57\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528 empty \u63D2\u69FD\u8BBE\u7F6E\uFF0C\u9ED8\u8BA4\u662F \u201CNo matching data'\u201D| string| \u2014 |
| no-data-text| \u65E0\u9009\u9879\u65F6\u663E\u793A\u7684\u6587\u5B57\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528 empty \u63D2\u69FD\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u5185\u5BB9\uFF0C\u9ED8\u8BA4\u662F \u201CNo data\u201D| string| \u2014 |
| popper-class| \u9009\u62E9\u5668\u4E0B\u62C9\u83DC\u5355\u7684\u81EA\u5B9A\u4E49\u7C7B\u540D| string| '' |
| reserve-keyword| \u5F53 multiple \u548C filterable\u88AB\u8BBE\u7F6E\u4E3A true \u65F6\uFF0C\u662F\u5426\u5728\u9009\u4E2D\u4E00\u4E2A\u9009\u9879\u540E\u4FDD\u7559\u5F53\u524D\u7684\u641C\u7D22\u5173\u952E\u8BCD| boolean| true |
| default-first-option| \u662F\u5426\u5728\u8F93\u5165\u6846\u6309\u4E0B\u56DE\u8F66\u65F6\uFF0C\u9009\u62E9\u7B2C\u4E00\u4E2A\u5339\u914D\u9879\u3002 \u9700\u914D\u5408 filterable \u6216 remote \u4F7F\u7528| boolean| false |
| teleported| \u662F\u5426\u5C06\u4E0B\u62C9\u5217\u8868\u63D2\u5165\u81F3 body \u5143\u7D20| boolean| true |
| persistent| \u5F53\u4E0B\u62C9\u9009\u62E9\u5668\u672A\u88AB\u6FC0\u6D3B\u5E76\u4E14persistent\u8BBE\u7F6E\u4E3Afalse\uFF0C\u9009\u62E9\u5668\u4F1A\u88AB\u5220\u9664\u3002| boolean| true |
| automatic-dropdown| \u5BF9\u4E8E\u4E0D\u53EF\u641C\u7D22\u7684 Select\uFF0C\u662F\u5426\u5728\u8F93\u5165\u6846\u83B7\u5F97\u7126\u70B9\u540E\u81EA\u52A8\u5F39\u51FA\u9009\u9879\u83DC\u5355| boolean| false |
| clear-icon| \u81EA\u5B9A\u4E49\u6E05\u9664\u56FE\u6807| string / object| CircleClose |
| fit-input-width| \u4E0B\u62C9\u6846\u7684\u5BBD\u5EA6\u662F\u5426\u4E0E\u8F93\u5165\u6846\u76F8\u540C| boolean| false |
| suffix-icon| \u81EA\u5B9A\u4E49\u540E\u7F00\u56FE\u6807\u7EC4\u4EF6| string / object| ArrowDown |
| suffix-transition deprecated| \u4E0B\u62C9\u83DC\u5355\u663E\u793A/\u6D88\u5931\u65F6\u540E\u7F00\u56FE\u6807\u7684\u52A8\u753B| boolean| true |
| tag-type| \u6807\u7B7E\u7C7B\u578B| enum| info |
| validate-event| \u662F\u5426\u89E6\u53D1\u8868\u5355\u9A8C\u8BC1| boolean| true |
| placement 2.2.17| \u4E0B\u62C9\u6846\u51FA\u73B0\u7684\u4F4D\u7F6E| enum| bottom-start |
| fallback-placements 2.5.6| dropdown \u53EF\u7528\u7684 positions \u8BF7\u67E5\u770Bpopper.js \u6587\u6863| arrary| ['bottom-start', 'top-start', 'right', 'left'] |
| max-collapse-tags 2.3.0| \u9700\u8981\u663E\u793A\u7684 Tag \u7684\u6700\u5927\u6570\u91CF \u53EA\u6709\u5F53 collapse-tags \u8BBE\u7F6E\u4E3A true \u65F6\u624D\u4F1A\u751F\u6548\u3002| number| 1 |
| popper-options| popper.js \u53C2\u6570| objectrefer to popper.js doc| {} |
| aria-label a11y| \u7B49\u4EF7\u4E8E\u539F\u751F input aria-label \u5C5E\u6027| string| \u2014 |
#### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D| \u8BF4\u660E| Type |
| :--- | :--- | :--- |
| change| \u9009\u4E2D\u503C\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1| Function |
| visible-change| \u4E0B\u62C9\u6846\u51FA\u73B0/\u9690\u85CF\u65F6\u89E6\u53D1| Function |
| remove-tag| \u591A\u9009\u6A21\u5F0F\u4E0B\u79FB\u9664tag\u65F6\u89E6\u53D1| Function |
| clear| \u53EF\u6E05\u7A7A\u7684\u5355\u9009\u6A21\u5F0F\u4E0B\u7528\u6237\u70B9\u51FB\u6E05\u7A7A\u6309\u94AE\u65F6\u89E6\u53D1| Function |
| blur| \u5F53 input \u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1| Function |
| focus| \u5F53 input \u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1| Function |

#### Select Slots

| \u63D2\u69FD\u540D| \u8BF4\u660E| \u5B50\u6807\u7B7E |
| :--- | :--- | :--- |
| default| option \u7EC4\u4EF6\u5217\u8868| Option Group / Option |
| header 2.4.3| \u4E0B\u62C9\u5217\u8868\u9876\u90E8\u7684\u5185\u5BB9| \u2014 |
| footer 2.4.3| \u4E0B\u62C9\u5217\u8868\u5E95\u90E8\u7684\u5185\u5BB9| \u2014 |
| prefix| Select \u7EC4\u4EF6\u5934\u90E8\u5185\u5BB9| \u2014 |
| empty| \u65E0\u9009\u9879\u65F6\u7684\u5217\u8868| \u2014 |
| tag 2.5.0| select \u7EC4\u4EF6\u81EA\u5B9A\u4E49\u6807\u7B7E\u5185\u5BB9| \u2014 |
| loading 2.5.2| select \u7EC4\u4EF6\u81EA\u5B9A\u4E49 loading\u5185\u5BB9| \u2014 |

#### Select Exposes

| Method| \u8BF4\u660E| \u7C7B\u578B |
| :--- | :--- | :--- |
| focus| \u4F7F\u9009\u62E9\u5668\u7684\u8F93\u5165\u6846\u83B7\u53D6\u7126\u70B9| Function |
| blur| \u4F7F\u9009\u62E9\u5668\u7684\u8F93\u5165\u6846\u5931\u53BB\u7126\u70B9\uFF0C\u5E76\u9690\u85CF\u4E0B\u62C9\u6846| Function |
`,"el-option":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/select.html)
#### \u5C5E\u6027

| \u63D2\u69FD\u540D| \u8BF4\u660E| Type| Default |
| :--- | :--- | :--- | :--- |
| label| \u5206\u7EC4\u7684\u540D\u79F0| string| \u2014 |
| disabled| \u662F\u5426\u5C06\u8BE5\u5206\u7EC4\u4E0B\u6240\u6709\u9009\u9879\u7F6E\u4E3A\u7981\u7528| boolean| false |

#### Option Group Slots

| \u5C5E\u6027\u540D| \u8BF4\u660E| Subtags |
| :--- | :--- | :--- |
| default| \u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9| Option |

#### \u5C5E\u6027

| \u540D\u79F0| \u8BE6\u60C5| Type| Default |
| :--- | :--- | :--- | :--- |
| value| \u9009\u9879\u7684\u503C| string / number / boolean / object| \u2014 |
| label| \u9009\u9879\u7684\u6807\u7B7E\uFF0C\u82E5\u4E0D\u8BBE\u7F6E\u5219\u9ED8\u8BA4\u4E0Evalue\u76F8\u540C| string / number| \u2014 |
| disabled| \u662F\u5426\u7981\u7528\u8BE5\u9009\u9879| boolean| false |

#### Option Slots

| Name| \u8BF4\u660E |
| :--- | :--- |
| default| \u9ED8\u8BA4\u63D2\u69FD\u5185\u5BB9 |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-select-v2":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/select-v2.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| model-value / v-model| \u9009\u4E2D\u9879\u7ED1\u5B9A\u503C| string / number / boolean / object / array| \u2014 |
| options| \u9009\u9879\u7684\u6570\u636E\u6E90\uFF0C value \u7684 key \u548C label \u53EF\u4EE5\u901A\u8FC7 props\u81EA\u5B9A\u4E49.| array| \u2014 |
| props 2.4.2| \u914D\u7F6E\u9009\u9879\uFF0C\u5177\u4F53\u770B\u4E0B\u8868| object| \u2014 |
| multiple| \u662F\u5426\u591A\u9009| boolean| false |
| disabled| \u662F\u5426\u7981\u7528| boolean| false |
| value-key| \u4F5C\u4E3A value \u552F\u4E00\u6807\u8BC6\u7684\u952E\u540D\uFF0C\u7ED1\u5B9A\u503C\u4E3A\u5BF9\u8C61\u7C7B\u578B\u65F6\u5FC5\u586B| string| value |
| size| \u7EC4\u4EF6\u5927\u5C0F| enum| '' |
| clearable| \u662F\u5426\u53EF\u4EE5\u6E05\u7A7A\u9009\u9879| boolean| false |
| clear-icon| \u81EA\u5B9A\u4E49\u6E05\u9664\u56FE\u6807| string / object| CircleClose |
| collapse-tags| \u591A\u9009\u65F6\u662F\u5426\u5C06\u9009\u4E2D\u503C\u6309\u6587\u5B57\u7684\u5F62\u5F0F\u5C55\u793A| boolean| false |
| multiple-limit| \u591A\u9009\u65F6\u53EF\u88AB\u9009\u62E9\u7684\u6700\u5927\u6570\u76EE\u3002 \u5F53\u88AB\u8BBE\u7F6E\u4E3A0\u65F6\uFF0C\u53EF\u88AB\u9009\u62E9\u7684\u6570\u76EE\u4E0D\u8BBE\u9650\u3002| number| 0 |
| name| \u9009\u62E9\u5668\u7684\u539F\u751Fname\u5C5E\u6027| string| \u2014 |
| effect| tooltip \u4E3B\u9898\uFF0C\u5185\u7F6E\u4E86 dark / light \u4E24\u79CD| enum / string| light |
| autocomplete| \u81EA\u52A8\u5B8C\u6210\u9009\u62E9\u8F93\u5165| string| off |
| placeholder| \u5360\u4F4D\u6587\u5B57| string| Please select |
| filterable| \u662F\u5426\u53EF\u7B5B\u9009| boolean| false |
| allow-create| \u662F\u5426\u5141\u8BB8\u521B\u5EFA\u65B0\u6761\u76EE\uFF0C \u5F53\u4F7F\u7528\u8BE5\u5C5E\u6027\u65F6\uFF0Cfilterable\u5FC5\u987B\u8BBE\u7F6E\u4E3Atrue| boolean| false |
| filter-method| \u81EA\u5B9A\u4E49\u7B5B\u9009\u65B9\u6CD5| Function| \u2014 |
| loading| \u662F\u5426\u4ECE\u8FDC\u7A0B\u52A0\u8F7D\u6570\u636E| boolean| false |
| loading-text| \u4ECE\u670D\u52A1\u5668\u52A0\u8F7D\u6570\u636E\u65F6\u663E\u793A\u7684\u6587\u672C\uFF0C\u9ED8\u8BA4\u4E3A\u201CLoading\u201D| string| \u2014 |
| reserve-keyword| \u7B5B\u9009\u65F6\uFF0C\u662F\u5426\u5728\u9009\u62E9\u9009\u9879\u540E\u4FDD\u7559\u5173\u952E\u5B57| boolean| true |
| no-match-text| \u641C\u7D22\u6761\u4EF6\u65E0\u5339\u914D\u65F6\u663E\u793A\u7684\u6587\u5B57\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528 empty \u63D2\u69FD\u8BBE\u7F6E\uFF0C\u9ED8\u8BA4\u662F \u201CNo matching data'\u201D| string| \u2014 |
| no-data-text| \u5F53\u5728\u6CA1\u6709\u6570\u636E\u65F6\u663E\u793A\u7684\u6587\u5B57\uFF0C\u4F60\u540C\u65F6\u53EF\u4EE5\u4F7F\u7528empty\u63D2\u69FD\u8FDB\u884C\u8BBE\u7F6E\u3002| string| No Data |
| popper-class| \u9009\u62E9\u5668\u4E0B\u62C9\u83DC\u5355\u7684\u81EA\u5B9A\u4E49\u7C7B\u540D| string| '' |
| popper-append-to-body deprecated| \u662F\u5426\u5C06\u5F39\u51FA\u6846\u63D2\u5165\u81F3 body \u5143\u7D20 \u5F53\u5F39\u51FA\u6846\u7684\u4F4D\u7F6E\u51FA\u73B0\u95EE\u9898\u65F6\uFF0C\u4F60\u53EF\u4EE5\u5C1D\u8BD5\u5C06\u8BE5\u5C5E\u6027\u8BBE\u7F6E\u4E3Afalse\u3002| boolean| false |
| teleported| \u662F\u5426\u5C06\u4E0B\u62C9\u5217\u8868\u5143\u7D20\u63D2\u5165 append-to \u6307\u5411\u7684\u5143\u7D20\u4E0B| boolean| true |
| persistent| \u5F53\u4E0B\u62C9\u9009\u62E9\u5668\u672A\u88AB\u6FC0\u6D3B\u5E76\u4E14persistent\u8BBE\u7F6E\u4E3Afalse\uFF0C\u9009\u62E9\u5668\u4F1A\u88AB\u5220\u9664\u3002| boolean| true |
| popper-options| popper.js parameters| objectrefer to popper.js doc| {} |
| automatic-dropdown| \u5BF9\u4E8E\u4E0D\u53EF\u641C\u7D22\u7684 Select\uFF0C\u662F\u5426\u5728\u8F93\u5165\u6846\u83B7\u5F97\u7126\u70B9\u540E\u81EA\u52A8\u5F39\u51FA\u9009\u9879\u83DC\u5355| boolean| false |
| height| \u4E0B\u62C9\u83DC\u5355\u7684\u9AD8\u5EA6\uFF0C\u6BCF\u4E00\u4E2A\u9009\u9879\u4E3A34px| number| 274 |
| item-height| \u4E0B\u62C9\u9879\u7684\u9AD8\u5EA6| number| 34 |
| scrollbar-always-on| \u662F\u5426\u603B\u662F\u5C55\u793A\u6EDA\u52A8\u6761| boolean| false |
| remote| \u662F\u5426\u4ECE\u670D\u52A1\u5668\u83B7\u53D6\u6570\u636E| boolean| false |
| remote-method| \u5F53\u8F93\u5165\u503C\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u51FD\u6570\u3002 \u5B83\u7684\u53C2\u6570\u5C31\u662F\u5F53\u524D\u7684\u8F93\u5165\u503C\u3002 \u5F53filterable\u8BBE\u7F6E\u4E3A true \u65F6\u624D\u4F1A\u751F\u6548| Function| \u2014 |
| validate-event| \u662F\u5426\u89E6\u53D1\u8868\u5355\u9A8C\u8BC1| boolean| true |
| placement| \u4E0B\u62C9\u6846\u51FA\u73B0\u7684\u4F4D\u7F6E| enum| bottom-start |
| fallback-placements 2.5.6| dropdown \u53EF\u7528\u7684 positions \u8BF7\u67E5\u770Bpopper.js \u6587\u6863| arrary| ['bottom-start', 'top-start', 'right', 'left'] |
| collapse-tags-tooltip 2.3.0| \u5F53\u9F20\u6807\u60AC\u505C\u4E8E\u6298\u53E0\u6807\u7B7E\u7684\u6587\u672C\u65F6\uFF0C\u662F\u5426\u663E\u793A\u6240\u6709\u9009\u4E2D\u7684\u6807\u7B7E\u3002 \u53EA\u6709\u5F53 collapse-tags \u8BBE\u7F6E\u4E3A true \u65F6\u624D\u4F1A\u751F\u6548\u3002| boolean| false |
| max-collapse-tags 2.3.0| \u9700\u8981\u663E\u793A\u7684 Tag \u7684\u6700\u5927\u6570\u91CF \u53EA\u6709\u5F53 collapse-tags \u8BBE\u7F6E\u4E3A true \u65F6\u624D\u4F1A\u751F\u6548\u3002| number| 1 |
| tag-type 2.5.0| \u6807\u7B7E\u7C7B\u578B| enum| info |
| aria-label a11y 2.5.0| \u7B49\u4EF7\u4E8E\u539F\u751F input aria-label \u5C5E\u6027| string| \u2014 |

#### props

| Attribute| \u8BF4\u660E| Type| Default |
| :--- | :--- | :--- | :--- |
| value| \u6307\u5B9A\u9009\u9879\u7684\u503C\u4E3A\u9009\u9879\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C| string| value |
| label| \u6307\u5B9A\u8282\u70B9\u6807\u7B7E\u4E3A\u8282\u70B9\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C| string| label |
| options| \u6307\u5B9A\u9009\u9879\u7684\u5B50\u9009\u9879\u4E3A\u9009\u9879\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C| string| options |
| disabled| \u6307\u5B9A\u9009\u9879\u7684\u7981\u7528\u4E3A\u9009\u9879\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C| string| disabled |
#### \u4E8B\u4EF6

| \u63D2\u69FD\u540D| \u8BF4\u660E| \u7C7B\u578B |
| :--- | :--- | :--- |
| change| \u5F53\u6240\u9009\u503C\u66F4\u6539\u65F6\u89E6\u53D1\uFF0C\u53C2\u6570\u662F\u5F53\u524D\u9009\u4E2D\u7684\u503C| Function |
| visible-change| \u5F53\u4E0B\u62C9\u83DC\u5355\u51FA\u73B0/\u6D88\u5931\u65F6\u89E6\u53D1\u5668, \u5F53\u5B83\u51FA\u73B0\u65F6, \u53C2\u6570\u5C06\u662F\u771F\u7684, \u5426\u5219\u5C06\u662F\u5047\u7684| Function |
| remove-tag| \u5F53\u4E00\u4E2A\u6807\u7B7E\u5728\u591A\u4E2A\u6A21\u5F0F\u4E0B\u88AB\u79FB\u9664\u65F6\u89E6\u53D1\uFF0C\u53C2\u6570\u5C06\u88AB\u79FB\u9664\u6807\u7B7E\u503C| Function |
| clear| \u53EF\u6E05\u7A7A\u7684\u5355\u9009\u6A21\u5F0F\u4E0B\u7528\u6237\u70B9\u51FB\u6E05\u7A7A\u6309\u94AE\u65F6\u89E6\u53D1| Function |
| blur| \u5F53\u9009\u62E9\u5668\u7684\u8F93\u5165\u6846\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1| Function |
| focus| \u5F53\u9009\u62E9\u5668\u7684\u8F93\u5165\u6846\u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1| Function |

#### Slots

| \u540D\u79F0| \u8BE6\u60C5 |
| :--- | :--- |
| default| \u81EA\u5B9A\u4E49 Option \u6A21\u677F |
| header 2.5.2| \u4E0B\u62C9\u5217\u8868\u9876\u90E8\u7684\u5185\u5BB9 |
| footer 2.5.2| \u4E0B\u62C9\u5217\u8868\u5E95\u90E8\u7684\u5185\u5BB9 |
| empty| \u81EA\u5B9A\u4E49\u5F53\u9009\u9879\u4E3A\u7A7A\u65F6\u7684\u5185\u5BB9 |
| prefix| \u8F93\u5165\u6846\u7684\u524D\u7F00 |
| tag 2.5.0| select \u7EC4\u4EF6\u81EA\u5B9A\u4E49\u6807\u7B7E\u5185\u5BB9 |
| loading 2.5.2| select \u7EC4\u4EF6\u81EA\u5B9A\u4E49 loading\u5185\u5BB9 |

#### Exposes

| \u65B9\u6CD5| \u63CF\u8FF0| \u7C7B\u578B |
| :--- | :--- | :--- |
| focus| \u4F7F\u9009\u62E9\u5668\u7684\u8F93\u5165\u6846\u83B7\u53D6\u7126\u70B9| Function |
| blur| \u4F7F\u9009\u62E9\u5668\u7684\u8F93\u5165\u6846\u5931\u53BB\u7126\u70B9\uFF0C\u5E76\u9690\u85CF\u4E0B\u62C9\u6846| Function |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-slider":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/slider.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u63CF\u8FF0| \u7C7B\u578B| \u9ED8\u8BA4 |
| :--- | :--- | :--- | :--- |
| model-value / v-model| \u9009\u4E2D\u9879\u7ED1\u5B9A\u503C| number / object| 0 |
| min| \u6700\u5C0F\u503C| number| 0 |
| max| \u6700\u5927\u503C| number| 100 |
| disabled| \u662F\u5426\u7981\u7528| boolean| false |
| step| \u6B65\u957F| number| 1 |
| show-input| \u662F\u5426\u663E\u793A\u8F93\u5165\u6846\uFF0C\u4EC5\u5728\u975E\u8303\u56F4\u9009\u62E9\u65F6\u6709\u6548| boolean| false |
| show-input-controls| \u5728\u663E\u793A\u8F93\u5165\u6846\u7684\u60C5\u51B5\u4E0B\uFF0C\u662F\u5426\u663E\u793A\u8F93\u5165\u6846\u7684\u63A7\u5236\u6309\u94AE| boolean| true |
| size| slider \u5305\u88C5\u5668\u7684\u5927\u5C0F\uFF0C\u5782\u76F4\u6A21\u5F0F\u4E0B\u8BE5\u5C5E\u6027\u4E0D\u53EF\u7528| enum| default |
| input-size| \u8F93\u5165\u6846\u7684\u5927\u5C0F\uFF0C\u5982\u679C\u8BBE\u7F6E\u4E86 size \u5C5E\u6027\uFF0C\u9ED8\u8BA4\u503C\u81EA\u52A8\u53D6 size| enum| default |
| show-stops| \u662F\u5426\u663E\u793A\u95F4\u65AD\u70B9| boolean| false |
| show-tooltip| \u662F\u5426\u663E\u793A\u63D0\u793A\u4FE1\u606F| boolean| true |
| format-tooltip| \u683C\u5F0F\u5316\u63D0\u793A\u4FE1\u606F| Function| \u2014 |
| range| \u662F\u5426\u5F00\u542F\u9009\u62E9\u8303\u56F4| boolean| false |
| vertical| \u5782\u76F4\u6A21\u5F0F| boolean| false |
| height| \u6ED1\u5757\u9AD8\u5EA6\uFF0C\u5782\u76F4\u6A21\u5F0F\u5FC5\u586B| string| \u2014 |
| label| \u5C4F\u5E55\u9605\u8BFB\u5668\u6807\u7B7E| string| \u2014 |
| range-start-label| \u5F53 range \u4E3Atrue\u65F6\uFF0C\u5C4F\u5E55\u9605\u8BFB\u5668\u6807\u7B7E\u5F00\u59CB\u7684\u6807\u8BB0| string| \u2014 |
| range-end-label| \u5F53 range \u4E3Atrue\u65F6\uFF0C\u5C4F\u5E55\u9605\u8BFB\u5668\u6807\u7B7E\u7ED3\u5C3E\u7684\u6807\u8BB0| string| \u2014 |
| format-value-text| \u663E\u793A\u5C4F\u5E55\u9605\u8BFB\u5668\u7684 aria-valuenow \u5C5E\u6027\u7684\u683C\u5F0F| Function| \u2014 |
| debounce| \u8F93\u5165\u65F6\u7684\u53BB\u6296\u5EF6\u8FDF\uFF0C\u6BEB\u79D2\uFF0C\u4EC5\u5728 show-input \u7B49\u4E8E true \u65F6\u6709\u6548| number| 300 |
| tooltip-class| tooltip \u7684\u81EA\u5B9A\u4E49\u7C7B\u540D| string| \u2014 |
| placement| Tooltip \u51FA\u73B0\u7684\u4F4D\u7F6E| enum| top |
| marks| \u6807\u8BB0\uFF0C key \u7684\u7C7B\u578B\u5FC5\u987B\u4E3A number \u4E14\u53D6\u503C\u5728\u95ED\u533A\u95F4 [min, max] \u5185\uFF0C\u6BCF\u4E2A\u6807\u8BB0\u53EF\u4EE5\u5355\u72EC\u8BBE\u7F6E\u6837\u5F0F| object| \u2014 |
| validate-event| \u8F93\u5165\u65F6\u662F\u5426\u89E6\u53D1\u8868\u5355\u7684\u6821\u9A8C| boolean| true |
#### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D| \u8BF4\u660E| \u7C7B\u578B |
| :--- | :--- | :--- |
| change| \u503C\u6539\u53D8\u65F6\u89E6\u53D1\uFF08\u4F7F\u7528\u9F20\u6807\u62D6\u66F3\u65F6\uFF0C\u53EA\u5728\u677E\u5F00\u9F20\u6807\u540E\u89E6\u53D1\uFF09| Function |
| input| \u6570\u636E\u6539\u53D8\u65F6\u89E6\u53D1\uFF08\u4F7F\u7528\u9F20\u6807\u62D6\u66F3\u65F6\uFF0C\u6D3B\u52A8\u8FC7\u7A0B\u5B9E\u65F6\u89E6\u53D1\uFF09| Function |

#### \u7C7B\u578B\u58F0\u660E

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-switch":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/switch.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| Default |
| :--- | :--- | :--- | :--- |
| model-value / v-model| \u7ED1\u5B9A\u503C\uFF0C\u5FC5\u987B\u7B49\u4E8E active-value \u6216 inactive-value\uFF0C\u9ED8\u8BA4\u4E3A Boolean \u7C7B\u578B| boolean / string / number| false |
| disabled| \u662F\u5426\u7981\u7528| boolean| false |
| loading| \u662F\u5426\u663E\u793A\u52A0\u8F7D\u4E2D| boolean| false |
| size| switch \u7684\u5927\u5C0F| enum| '' |
| width| switch \u7684\u5BBD\u5EA6| number / string| '' |
| inline-prompt| \u65E0\u8BBA\u56FE\u6807\u6216\u6587\u672C\u662F\u5426\u663E\u793A\u5728\u70B9\u5185\uFF0C\u53EA\u4F1A\u5448\u73B0\u6587\u672C\u7684\u7B2C\u4E00\u4E2A\u5B57\u7B26| boolean| false |
| active-icon| switch \u72B6\u6001\u4E3A on \u65F6\u6240\u663E\u793A\u56FE\u6807\uFF0C\u8BBE\u7F6E\u6B64\u9879\u4F1A\u5FFD\u7565 active-text| string / Component| \u2014 |
| inactive-icon| switch \u72B6\u6001\u4E3A off \u65F6\u6240\u663E\u793A\u56FE\u6807\uFF0C\u8BBE\u7F6E\u6B64\u9879\u4F1A\u5FFD\u7565 inactive-text| string / Component| \u2014 |
| active-action-icon 2.3.9| on\u72B6\u6001\u4E0B\u663E\u793A\u7684\u56FE\u6807\u7EC4\u4EF6| string / Component| \u2014 |
| inactive-action-icon 2.3.9| off\u72B6\u6001\u4E0B\u663E\u793A\u7684\u56FE\u6807\u7EC4\u4EF6| string / Component| \u2014 |
| active-text| switch \u6253\u5F00\u65F6\u7684\u6587\u5B57\u63CF\u8FF0| string| '' |
| inactive-text| switch \u7684\u72B6\u6001\u4E3A off \u65F6\u7684\u6587\u5B57\u63CF\u8FF0| string| '' |
| active-value| switch \u72B6\u6001\u4E3A on \u65F6\u7684\u503C| boolean / string / number| true |
| inactive-value| switch\u7684\u72B6\u6001\u4E3A off \u65F6\u7684\u503C| boolean / string / number| false |
| active-color deprecated| \u5F53\u5728 on \u72B6\u6001\u65F6\u7684\u80CC\u666F\u989C\u8272(\u5DF2\u5E9F\u5F03\uFF0C\u8BF7\u4F7F\u7528 CSS var --el-switch-on-color )| string| '' |
| inactive-color deprecated| off \u72B6\u6001\u65F6\u7684\u80CC\u666F\u989C\u8272(\u5DF2\u5E9F\u5F03\uFF0C\u4F7F\u7528 CSS var --el-switch-off-color )| string| '' |
| border-color deprecated| \u5F00\u5173\u7684\u8FB9\u6846\u989C\u8272 ( \u5DF2\u5E9F\u5F03\uFF0C\u4F7F\u7528 CSS var --el-switch-border-color )| string| '' |
| name| switch \u5BF9\u5E94\u7684 name \u5C5E\u6027| string| '' |
| validate-event| \u662F\u5426\u89E6\u53D1\u8868\u5355\u9A8C\u8BC1| boolean| true |
| before-change| switch \u72B6\u6001\u6539\u53D8\u524D\u7684\u94A9\u5B50\uFF0C \u8FD4\u56DE false \u6216\u8005\u8FD4\u56DE Promise \u4E14\u88AB reject \u5219\u505C\u6B62\u5207\u6362| boolean / Function| \u2014 |
| id| input \u7684 id| string| \u2014 |
| tabindex| input \u7684 tabindex| string / number| \u2014 |
| label 2.4.1 a11y| \u7B49\u4EF7\u4E8E\u539F\u751F input aria-label \u5C5E\u6027| string| \u2014 |
#### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D| \u8BF4\u660E| Type |
| :--- | :--- | :--- |
| change| switch \u72B6\u6001\u53D1\u751F\u53D8\u5316\u65F6\u7684\u56DE\u8C03\u51FD\u6570| Function |

#### Switch Slots

| \u540D\u79F0| \u8BF4\u660E |
| :--- | :--- |
| active-action 2.4.4| \u81EA\u5B9A\u4E49 active \u884C\u4E3A |
| inactive-action 2.4.4| \u81EA\u5B9A\u4E49 inactive \u884C\u4E3A |

#### Exposes

| \u65B9\u6CD5| \u8BE6\u60C5| Type |
| :--- | :--- | :--- |
| focus| \u624B\u52A8 focus \u5230 switch \u7EC4\u4EF6| Function |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-time-picker":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/time-picker.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4 |
| :--- | :--- | :--- | :--- |
| model-value / v-model| \u7ED1\u5B9A\u503C\uFF0C\u5982\u679C\u5B83\u662F\u6570\u7EC4\uFF0C\u957F\u5EA6\u5E94\u8BE5\u662F 2| number / string / object| '' |
| readonly| \u5B8C\u5168\u53EA\u8BFB| boolean| false |
| disabled| \u7981\u7528| boolean| false |
| editable| \u6587\u672C\u6846\u53EF\u8F93\u5165| boolean| true |
| clearable| \u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE| boolean| true |
| size| \u8F93\u5165\u6846\u5C3A\u5BF8| enum| \u2014 |
| placeholder| \u975E\u8303\u56F4\u9009\u62E9\u65F6\u7684\u5360\u4F4D\u5185\u5BB9| string| '' |
| start-placeholder| \u8303\u56F4\u9009\u62E9\u65F6\u5F00\u59CB\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9| string| \u2014 |
| end-placeholder| \u8303\u56F4\u9009\u62E9\u65F6\u7ED3\u675F\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9| string| \u2014 |
| is-range| \u662F\u5426\u4E3A\u65F6\u95F4\u8303\u56F4\u9009\u62E9| boolean| false |
| arrow-control| \u662F\u5426\u4F7F\u7528\u7BAD\u5934\u8FDB\u884C\u65F6\u95F4\u9009\u62E9| boolean| false |
| popper-class| TimePicker \u4E0B\u62C9\u6846\u7684\u7C7B\u540D| string| '' |
| range-separator| \u9009\u62E9\u8303\u56F4\u65F6\u7684\u5206\u9694\u7B26| string| '-' |
| format| \u663E\u793A\u5728\u8F93\u5165\u6846\u4E2D\u7684\u683C\u5F0F| string see date formats| \u2014 |
| default-value| \u53EF\u9009\uFF0C\u9009\u62E9\u5668\u6253\u5F00\u65F6\u9ED8\u8BA4\u663E\u793A\u7684\u65F6\u95F4| Date / object| \u2014 |
| value-format| \u53EF\u9009\uFF0C\u7ED1\u5B9A\u503C\u7684\u683C\u5F0F\u3002 \u4E0D\u6307\u5B9A\u5219\u7ED1\u5B9A\u503C\u4E3A Date \u5BF9\u8C61| string \u53C2\u8003 \u65E5\u671F\u683C\u5F0F| \u2014 |
| id| \u7B49\u4EF7\u4E8E\u539F\u751F input id \u5C5E\u6027| string / object| \u2014 |
| name| \u7B49\u4EF7\u4E8E\u539F\u751F input name \u5C5E\u6027| string| '' |
| label a11y| \u7B49\u4EF7\u4E8E\u539F\u751F input aria-label \u5C5E\u6027| string| \u2014 |
| prefix-icon| \u81EA\u5B9A\u4E49\u524D\u7F00\u56FE\u6807| string / Component| Clock |
| clear-icon| \u81EA\u5B9A\u4E49\u6E05\u9664\u56FE\u6807| string / Component| CircleClose |
| disabled-hours| \u7981\u6B62\u9009\u62E9\u90E8\u5206\u5C0F\u65F6\u9009\u9879| Function| \u2014 |
| disabled-minutes| \u7981\u6B62\u9009\u62E9\u90E8\u5206\u5206\u949F\u9009\u9879| Function| \u2014 |
| disabled-seconds| \u7981\u6B62\u9009\u62E9\u90E8\u5206\u79D2\u9009\u9879| Function| \u2014 |
| teleported| \u662F\u5426\u5C06 popover \u7684\u4E0B\u62C9\u5217\u8868\u955C\u50CF\u81F3 body \u5143\u7D20| boolean| true |
| tabindex| \u8F93\u5165\u6846\u7684 tabindex| string / number| 0 |
#### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D| \u8BF4\u660E| \u7C7B\u578B |
| :--- | :--- | :--- |
| change| \u7528\u6237\u786E\u8BA4\u9009\u5B9A\u7684\u503C\u65F6\u89E6\u53D1| Function |
| blur| \u5728\u7EC4\u4EF6 Input \u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1| Function |
| focus| \u5728\u7EC4\u4EF6 Input \u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1| Function |
| visible-change| \u5F53 TimePicker \u7684\u4E0B\u62C9\u5217\u8868\u51FA\u73B0/\u6D88\u5931\u65F6\u89E6\u53D1| Function |

#### \u66B4\u9732

| \u540D\u79F0| \u8BF4\u660E| Type |
| :--- | :--- | :--- |
| focus| \u4F7F input \u83B7\u53D6\u7126\u70B9| Function |
| blur| \u4F7F input \u5931\u53BB\u7126\u70B9| Function |
| handleOpen 2.2.16| \u6253\u5F00\u65F6\u95F4\u9009\u62E9\u5668\u5F39\u7A97| Function |
| handleClose 2.2.16| \u5173\u95ED\u65F6\u95F4\u9009\u62E9\u5668\u5F39\u7A97| Function |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-time-select":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/time-select.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| model-value / v-model| \u9009\u4E2D\u9879\u7ED1\u5B9A\u503C| string| \u2014 |
| disabled| \u7981\u7528\u72B6\u6001| boolean| false |
| editable| \u6587\u672C\u6846\u53EF\u8F93\u5165| boolean| true |
| clearable| \u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE| boolean| true |
| size| \u8F93\u5165\u6846\u5C3A\u5BF8| enum| default |
| placeholder| \u975E\u8303\u56F4\u9009\u62E9\u65F6\u7684\u5360\u4F4D\u5185\u5BB9| string| \u2014 |
| name| \u539F\u751F\u5C5E\u6027| string| \u2014 |
| effect| Tooltip \u4E3B\u9898\uFF0C\u5185\u7F6E\u4E86 dark / light \u4E24\u79CD\u4E3B\u9898| string / enum| light |
| prefix-icon| \u81EA\u5B9A\u4E49\u524D\u7F00\u56FE\u6807| string / Component| Clock |
| clear-icon| \u81EA\u5B9A\u4E49\u6E05\u9664\u56FE\u6807| string / Component| CircleClose |
| start| \u5F00\u59CB\u65F6\u95F4| string| 09:00 |
| end| \u7ED3\u675F\u65F6\u95F4| string| 18:00 |
| step| \u95F4\u9694\u65F6\u95F4| string| 00:30 |
| min-time| \u6700\u65E9\u65F6\u95F4\u70B9\uFF0C\u65E9\u4E8E\u8BE5\u65F6\u95F4\u7684\u65F6\u95F4\u6BB5\u5C06\u88AB\u7981\u7528| string| \u2014 |
| max-time| \u6700\u665A\u65F6\u95F4\u70B9\uFF0C\u665A\u4E8E\u8BE5\u65F6\u95F4\u7684\u65F6\u95F4\u6BB5\u5C06\u88AB\u7981\u7528| string| \u2014 |
| format| \u8BBE\u7F6E\u65F6\u95F4\u683C\u5F0F| string see formats| HH:mm |
#### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D| \u8BF4\u660E| \u7C7B\u578B |
| :--- | :--- | :--- |
| change| \u7528\u6237\u786E\u8BA4\u9009\u5B9A\u7684\u503C\u65F6\u89E6\u53D1| Function |
| blur| \u5728\u7EC4\u4EF6 Input \u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1| Function |
| focus| \u5728\u7EC4\u4EF6 Input \u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1| Function |

#### Exposes

| \u65B9\u6CD5\u540D| \u8BF4\u660E| \u7C7B\u578B |
| :--- | :--- | :--- |
| focus| \u4F7F input \u83B7\u53D6\u7126\u70B9| Function |
| blur| \u4F7F input \u5931\u53BB\u7126\u70B9| Function |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-transfer":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/transfer.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| Default |
| :--- | :--- | :--- | :--- |
| model-value / v-model| \u9009\u4E2D\u9879\u7ED1\u5B9A\u503C| object| [] |
| data| Transfer \u7684\u6570\u636E\u6E90| object| [] |
| filterable| \u662F\u5426\u53EF\u641C\u7D22| boolean| false |
| filter-placeholder| \u641C\u7D22\u6846\u5360\u4F4D\u7B26| string| \u2014 |
| filter-method| \u81EA\u5B9A\u4E49\u641C\u7D22\u65B9\u6CD5| Function| \u2014 |
| target-order| \u53F3\u4FA7\u5217\u8868\u5143\u7D20\u7684\u6392\u5E8F\u7B56\u7565\uFF1A \u82E5\u4E3A original\uFF0C\u5219\u4FDD\u6301\u4E0E\u6570\u636E\u6E90\u76F8\u540C\u7684\u987A\u5E8F\uFF1B \u82E5\u4E3A push\uFF0C\u5219\u65B0\u52A0\u5165\u7684\u5143\u7D20\u6392\u5728\u6700\u540E\uFF1B \u82E5\u4E3A unshift\uFF0C\u5219\u65B0\u52A0\u5165\u7684\u5143\u7D20\u6392\u5728\u6700\u524D| enum| original |
| titles| \u81EA\u5B9A\u4E49\u5217\u8868\u6807\u9898| object| [] |
| button-texts| \u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u6848| object| [] |
| render-content| \u81EA\u5B9A\u4E49\u6570\u636E\u9879\u6E32\u67D3\u51FD\u6570| object| \u2014 |
| format| \u5217\u8868\u9876\u90E8\u52FE\u9009\u72B6\u6001\u6587\u6848| object| {} |
| props| \u6570\u636E\u6E90\u7684\u5B57\u6BB5\u522B\u540D| object| \u2014 |
| left-default-checked| \u521D\u59CB\u72B6\u6001\u4E0B\u5DE6\u4FA7\u5217\u8868\u7684\u5DF2\u52FE\u9009\u9879\u7684 key \u6570\u7EC4| object| [] |
| right-default-checked| \u521D\u59CB\u72B6\u6001\u4E0B\u53F3\u4FA7\u5217\u8868\u7684\u5DF2\u52FE\u9009\u9879\u7684 key \u6570\u7EC4| object| [] |
| validate-event| \u662F\u5426\u89E6\u53D1\u8868\u5355\u9A8C\u8BC1| boolean| true |
#### \u4E8B\u4EF6

| \u63D2\u69FD\u540D| \u8BF4\u660E| Type |
| :--- | :--- | :--- |
| change| \u53F3\u4FA7\u5217\u8868\u5143\u7D20\u53D8\u5316\u65F6\u89E6\u53D1| Function |
| left-check-change| \u5DE6\u4FA7\u5217\u8868\u5143\u7D20\u88AB\u7528\u6237\u9009\u4E2D / \u53D6\u6D88\u9009\u4E2D\u65F6\u89E6\u53D1| Function |
| right-check-change| \u53F3\u4FA7\u5217\u8868\u5143\u7D20\u88AB\u7528\u6237\u9009\u4E2D / \u53D6\u6D88\u9009\u4E2D\u65F6\u89E6\u53D1| Function |

#### Slots

| Name| \u8BF4\u660E |
| :--- | :--- |
| default| \u81EA\u5B9A\u4E49\u6570\u636E\u9879\u7684\u5185\u5BB9\uFF0C The scope parameter is |
| left-footer| \u5DE6\u4FA7\u5217\u8868\u5E95\u90E8\u7684\u5185\u5BB9 |
| right-footer| \u53F3\u4FA7\u5217\u8868\u5E95\u90E8\u7684\u5185\u5BB9 |

#### Exposes

| Method| \u8BF4\u660E| Type |
| :--- | :--- | :--- |
| clearQuery| \u6E05\u7A7A\u67D0\u4E2A\u9762\u677F\u7684\u641C\u7D22\u5173\u952E\u8BCD| Function |

#### Type Declarations

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-upload":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/upload.html)
#### \u5C5E\u6027

| \u540D\u79F0| \u63CF\u8FF0| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| action required| \u8BF7\u6C42 URL| string| # |
| headers| \u8BBE\u7F6E\u4E0A\u4F20\u7684\u8BF7\u6C42\u5934\u90E8| object| \u2014 |
| method| \u8BBE\u7F6E\u4E0A\u4F20\u8BF7\u6C42\u65B9\u6CD5| string| post |
| multiple| \u662F\u5426\u652F\u6301\u591A\u9009\u6587\u4EF6| boolean| false |
| data| \u4E0A\u4F20\u65F6\u9644\u5E26\u7684\u989D\u5916\u53C2\u6570 \u4ECE v2.3.13 \u652F\u6301 Awaitable \u6570\u636E\uFF0C\u548C Function| object / Function| {} |
| name| \u4E0A\u4F20\u7684\u6587\u4EF6\u5B57\u6BB5\u540D| string| file |
| with-credentials| \u652F\u6301\u53D1\u9001 cookie \u51ED\u8BC1\u4FE1\u606F| boolean| false |
| show-file-list| \u662F\u5426\u663E\u793A\u5DF2\u4E0A\u4F20\u6587\u4EF6\u5217\u8868| boolean| true |
| drag| \u662F\u5426\u542F\u7528\u62D6\u62FD\u4E0A\u4F20| boolean| false |
| accept| \u63A5\u53D7\u4E0A\u4F20\u7684\u6587\u4EF6\u7C7B\u578B\uFF08thumbnail-mode \u6A21\u5F0F\u4E0B\u6B64\u53C2\u6570\u65E0\u6548\uFF09| string| '' |
| crossorigin| \u539F\u751F\u5C5E\u6027 crossorigin| enum| \u2014 |
| on-preview| \u70B9\u51FB\u6587\u4EF6\u5217\u8868\u4E2D\u5DF2\u4E0A\u4F20\u7684\u6587\u4EF6\u65F6\u7684\u94A9\u5B50| Function| \u2014 |
| on-remove| \u6587\u4EF6\u5217\u8868\u79FB\u9664\u6587\u4EF6\u65F6\u7684\u94A9\u5B50| Function| \u2014 |
| on-success| \u6587\u4EF6\u4E0A\u4F20\u6210\u529F\u65F6\u7684\u94A9\u5B50| Function| \u2014 |
| on-error| \u6587\u4EF6\u4E0A\u4F20\u5931\u8D25\u65F6\u7684\u94A9\u5B50| Function| \u2014 |
| on-progress| \u6587\u4EF6\u4E0A\u4F20\u65F6\u7684\u94A9\u5B50| Function| \u2014 |
| on-change| \u6587\u4EF6\u72B6\u6001\u6539\u53D8\u65F6\u7684\u94A9\u5B50\uFF0C\u6DFB\u52A0\u6587\u4EF6\u3001\u4E0A\u4F20\u6210\u529F\u548C\u4E0A\u4F20\u5931\u8D25\u65F6\u90FD\u4F1A\u88AB\u8C03\u7528| Function| \u2014 |
| on-exceed| \u5F53\u8D85\u51FA\u9650\u5236\u65F6\uFF0C\u6267\u884C\u7684\u94A9\u5B50\u51FD\u6570| Function| \u2014 |
| before-upload| \u4E0A\u4F20\u6587\u4EF6\u4E4B\u524D\u7684\u94A9\u5B50\uFF0C\u53C2\u6570\u4E3A\u4E0A\u4F20\u7684\u6587\u4EF6\uFF0C \u82E5\u8FD4\u56DEfalse\u6216\u8005\u8FD4\u56DE Promise \u4E14\u88AB reject\uFF0C\u5219\u505C\u6B62\u4E0A\u4F20\u3002| Function| \u2014 |
| before-remove| \u5220\u9664\u6587\u4EF6\u4E4B\u524D\u7684\u94A9\u5B50\uFF0C\u53C2\u6570\u4E3A\u4E0A\u4F20\u7684\u6587\u4EF6\u548C\u6587\u4EF6\u5217\u8868\uFF0C \u82E5\u8FD4\u56DE false \u6216\u8005\u8FD4\u56DE Promise \u4E14\u88AB reject\uFF0C\u5219\u505C\u6B62\u5220\u9664\u3002| Function| \u2014 |
| file-list / v-model:file-list| \u9ED8\u8BA4\u4E0A\u4F20\u6587\u4EF6| object| [] |
| list-type| \u6587\u4EF6\u5217\u8868\u7684\u7C7B\u578B| enum| text |
| auto-upload| \u662F\u5426\u81EA\u52A8\u4E0A\u4F20\u6587\u4EF6| boolean| true |
| http-request| \u8986\u76D6\u9ED8\u8BA4\u7684 Xhr \u884C\u4E3A\uFF0C\u5141\u8BB8\u81EA\u884C\u5B9E\u73B0\u4E0A\u4F20\u6587\u4EF6\u7684\u8BF7\u6C42| Function| \u8BF7\u53C2\u8003ajaxUpload |
| disabled| \u662F\u5426\u7981\u7528\u4E0A\u4F20| boolean| false |
| limit| \u5141\u8BB8\u4E0A\u4F20\u6587\u4EF6\u7684\u6700\u5927\u6570\u91CF| number| \u2014 |

#### \u63D2\u69FD

| \u540D\u79F0| \u63CF\u8FF0| \u7C7B\u578B |
| :--- | :--- | :--- |
| default| \u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9| - |
| trigger| \u89E6\u53D1\u6587\u4EF6\u9009\u62E9\u6846\u7684\u5185\u5BB9| - |
| tip| \u63D0\u793A\u8BF4\u660E\u6587\u5B57| - |
| file| \u7F29\u7565\u56FE\u6A21\u677F\u7684\u5185\u5BB9| object |

| \u540D\u79F0| \u63CF\u8FF0| \u7C7B\u578B |
| :--- | :--- | :--- |
| abort| \u53D6\u6D88\u4E0A\u4F20\u8BF7\u6C42| Function |
| submit| \u624B\u52A8\u4E0A\u4F20\u6587\u4EF6\u5217\u8868| Function |
| clearFiles| \u6E05\u7A7A\u5DF2\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868\uFF08\u8BE5\u65B9\u6CD5\u4E0D\u652F\u6301\u5728 before-upload \u4E2D\u8C03\u7528\uFF09| Function |
| handleStart| \u624B\u52A8\u9009\u62E9\u6587\u4EF6| Function |
| handleRemove| \u624B\u52A8\u79FB\u9664\u6587\u4EF6\u3002 file \u548CrawFile \u5DF2\u88AB\u5408\u5E76\u3002 rawFile \u5C06\u5728 v2.2.0 \u4E2D\u79FB\u9664| Function |

#### \u7C7B\u578B\u58F0\u660E

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-avatar":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/avatar.html)
#### \u5C5E\u6027

| \u540D\u79F0| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| icon| \u8BBE\u7F6E Avatar \u7684\u56FE\u6807\u7C7B\u578B\uFF0C\u5177\u4F53\u53C2\u8003 Icon \u7EC4\u4EF6| string / Component| \u2014 |
| size| Avatar \u5927\u5C0F| number / enum| default |
| shape| Avatar \u5F62\u72B6| enum| circle |
| src| Avatar \u56FE\u7247\u7684\u6E90\u5730\u5740| string| \u2014 |
| src-set| \u56FE\u7247 Avatar \u7684\u539F\u751F srcset \u5C5E\u6027| string| \u2014 |
| alt| \u56FE\u7247 Avatar \u7684\u539F\u751F alt \u5C5E\u6027| string| \u2014 |
| fit| \u5F53\u5C55\u793A\u7C7B\u578B\u4E3A\u56FE\u7247\u7684\u65F6\u5019\uFF0C\u8BBE\u7F6E\u56FE\u7247\u5982\u4F55\u9002\u5E94\u5BB9\u5668| enum| cover |
#### \u4E8B\u4EF6

| \u540D\u79F0| \u8BF4\u660E| \u7C7B\u578B |
| :--- | :--- | :--- |
| error| \u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u65F6\u89E6\u53D1| Function |

#### Slots

| \u63D2\u69FD\u540D| \u8BF4\u660E |
| :--- | :--- |
| default| \u81EA\u5B9A\u4E49\u5934\u50CF\u5C55\u793A\u5185\u5BB9 |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-badge":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/badge.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| value| \u663E\u793A\u503C| string / number| '' |
| max| \u6700\u5927\u503C\uFF0C\u8D85\u8FC7\u6700\u5927\u503C\u4F1A\u663E\u793A {max}+\u3002 \u53EA\u6709\u5F53 value \u662F\u6570\u5B57\u7C7B\u578B\u65F6\u8D77\u4F5C\u7528\u3002| number| 99 |
| is-dot| \u662F\u5426\u663E\u793A\u5C0F\u5706\u70B9\u3002| boolean| false |
| hidden| \u662F\u5426\u9690\u85CF Badge\u3002| boolean| false |
| type| badge type.| enum| danger |
| show-zero 2.6.0| \u503C\u4E3A\u96F6\u65F6\u662F\u5426\u663E\u793A Badge| boolean| true |

#### Slots

| \u63D2\u69FD\u540D| \u8BF4\u660E |
| :--- | :--- |
| default| \u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9 |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-calendar":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/calendar.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| model-value / v-model| \u9009\u4E2D\u9879\u7ED1\u5B9A\u503C| Date| \u2014 |
| range| \u65F6\u95F4\u8303\u56F4\uFF0C\u5305\u62EC\u5F00\u59CB\u65F6\u95F4\u4E0E\u7ED3\u675F\u65F6\u95F4\u3002 \u5F00\u59CB\u65F6\u95F4\u5FC5\u987B\u662F\u5468\u8D77\u59CB\u65E5\uFF0C\u7ED3\u675F\u65F6\u95F4\u5FC5\u987B\u662F\u5468\u7ED3\u675F\u65E5\uFF0C\u4E14\u65F6\u95F4\u8DE8\u5EA6\u4E0D\u80FD\u8D85\u8FC7\u4E24\u4E2A\u6708\u3002| array| \u2014 |

#### Slots

| \u63D2\u69FD\u540D| \u8BF4\u660E| \u7C7B\u578B |
| :--- | :--- | :--- |
| date-cell| type \u8868\u793A\u8BE5\u65E5\u671F\u7684\u6240\u5C5E\u6708\u4EFD\uFF0C\u53EF\u9009\u503C\u6709 prev-month\u3001current-month \u548C next-month\uFF1BisSelected \u6807\u660E\u8BE5\u65E5\u671F\u662F\u5426\u88AB\u9009\u4E2D\uFF1Bday \u662F\u683C\u5F0F\u5316\u7684\u65E5\u671F\uFF0C\u683C\u5F0F\u4E3A yyyy-MM-dd\uFF1Bdate \u662F\u5355\u5143\u683C\u7684\u65E5\u671F| object |
| header| \u5361\u7247\u6807\u9898\u5185\u5BB9| object |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-card":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/card.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| header| \u5361\u7247\u7684\u6807\u9898 \u4F60\u65E2\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E header \u6765\u4FEE\u6539\u6807\u9898\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 slot#header \u4F20\u5165 DOM \u8282\u70B9| string| \u2014 |
| footer 2.4.3| \u5361\u7247\u9875\u811A\u3002 \u4F60\u65E2\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E header \u6765\u4FEE\u6539\u6807\u9898\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 slot#footer \u4F20\u5165 DOM \u8282\u70B9| string| \u2014 |
| body-style| body \u7684 CSS \u6837\u5F0F| object| \u2014 |
| body-class 2.3.10| body \u7684\u81EA\u5B9A\u4E49\u7C7B\u540D| string| \u2014 |
| shadow| \u5361\u7247\u9634\u5F71\u663E\u793A\u65F6\u673A| enum| always |

#### Slots

| \u63D2\u69FD\u540D| \u8BF4\u660E |
| :--- | :--- |
| default| \u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9 |
| header| \u5361\u7247\u6807\u9898\u5185\u5BB9 |
| footer| \u5361\u7247\u9875\u811A\u5185\u5BB9 |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-carousel":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/carousel.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u53EF\u9009\u503C| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| height| carousel \u7684\u9AD8\u5EA6| string| \u2014| \u2014 |
| initial-index| \u521D\u59CB\u72B6\u6001\u6FC0\u6D3B\u7684\u5E7B\u706F\u7247\u7684\u7D22\u5F15\uFF0C\u4ECE 0 \u5F00\u59CB| number| \u2014| 0 |
| trigger| \u6307\u793A\u5668\u7684\u89E6\u53D1\u65B9\u5F0F| string| hover/click| hover |
| autoplay| \u662F\u5426\u81EA\u52A8\u5207\u6362| boolean| \u2014| true |
| interval| \u81EA\u52A8\u5207\u6362\u7684\u65F6\u95F4\u95F4\u9694\uFF0C\u5355\u4F4D\u4E3A\u6BEB\u79D2| number| \u2014| 3000 |
| indicator-position| \u6307\u793A\u5668\u7684\u4F4D\u7F6E| string| outside/none| \u2014 |
| arrow| \u5207\u6362\u7BAD\u5934\u7684\u663E\u793A\u65F6\u673A| string| always/hover/never| hover |
| type| carousel \u7684\u7C7B\u578B| string| card| \u2014 |
| loop| \u662F\u5426\u5FAA\u73AF\u663E\u793A| boolean| -| true |
| direction| \u5C55\u793A\u7684\u65B9\u5411| string| horizontal/vertical| horizontal |
| pause-on-hover| \u9F20\u6807\u60AC\u6D6E\u65F6\u6682\u505C\u81EA\u52A8\u5207\u6362| boolean| -| true |
| motion-blur 2.6.0| \u6DFB\u52A0\u52A8\u6001\u6A21\u7CCA\u4EE5\u7ED9\u8D70\u9A6C\u706F\u6CE8\u5165\u6D3B\u529B\u548C\u6D41\u7545\u6027\u3002| boolean| -| false |
#### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D| \u8BF4\u660E| \u56DE\u8C03\u53C2\u6570 |
| :--- | :--- | :--- |
| change| \u5E7B\u706F\u7247\u5207\u6362\u65F6\u89E6\u53D1| \u76EE\u524D\u6FC0\u6D3B\u7684\u5E7B\u706F\u7247\u7684\u7D22\u5F15\uFF0C\u539F\u5E7B\u706F\u7247\u7684\u7D22\u5F15 |

| \u65B9\u6CD5\u540D| \u8BF4\u660E| \u53C2\u6570 |
| :--- | :--- | :--- |
| setActiveItem| \u624B\u52A8\u5207\u6362\u5E7B\u706F\u7247| \u9700\u8981\u5207\u6362\u7684\u5E7B\u706F\u7247\u7684\u7D22\u5F15\uFF0C\u4ECE 0 \u5F00\u59CB\uFF1B\u6216\u76F8\u5E94 el-carousel-item \u7684 name \u5C5E\u6027\u503C |
| prev| \u5207\u6362\u81F3\u4E0A\u4E00\u5F20\u5E7B\u706F\u7247| \u2014 |
| next| \u5207\u6362\u81F3\u4E0B\u4E00\u5F20\u5E7B\u706F\u7247| \u2014 |

#### Carousel Slots

| \u63D2\u69FD\u540D| \u8BF4\u660E| \u5B50\u6807\u7B7E |
| :--- | :--- | :--- |
| -| \u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9| Carousel-Item |
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u53EF\u9009\u503C| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| name| \u5E7B\u706F\u7247\u7684\u540D\u5B57\uFF0C\u53EF\u7528\u4F5C setActiveItem \u7684\u53C2\u6570| string| \u2014| \u2014 |
| label| \u8BE5\u5E7B\u706F\u7247\u6240\u5BF9\u5E94\u6307\u793A\u5668\u7684\u6587\u672C| string| \u2014| \u2014 |

#### Carousel-Item Slots

| \u63D2\u69FD\u540D| \u8BF4\u660E |
| :--- | :--- |
| \u2014| \u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9 |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-collapse":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/collapse.html)

#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BE6\u60C5| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| model-value / v-model| \u5F53\u524D\u6D3B\u52A8\u9762\u677F\uFF0C\u5728\u624B\u98CE\u7434\u6A21\u5F0F\u4E0B\u5176\u7C7B\u578B\u662Fstring\uFF0C\u5728\u5176\u4ED6\u6A21\u5F0F\u4E0B\u662Farray| string / array| [] |
| accordion| \u662F\u5426\u624B\u98CE\u7434\u6A21\u5F0F| boolean| boolean |
#### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D| \u8BF4\u660E| \u7C7B\u578B |
| :--- | :--- | :--- |
| change| \u5207\u6362\u5F53\u524D\u6D3B\u52A8\u9762\u677F\uFF0C\u5728\u624B\u98CE\u7434\u6A21\u5F0F\u4E0B\u5176\u7C7B\u578B\u662Fstring\uFF0C\u5728\u5176\u4ED6\u6A21\u5F0F\u4E0B\u662Farray| Function |

#### Collapse Slots

| \u63D2\u69FD\u540D| Description| \u5B50\u6807\u7B7E |
| :--- | :--- | :--- |
| default| \u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9| Collapse Item |

#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| name| \u552F\u4E00\u6807\u5FD7\u7B26| string / number| \u2014 |
| title| \u9762\u677F\u6807\u9898| string| '' |
| disabled| \u662F\u5426\u7981\u7528| boolean| false |

#### Collapse Item Slot

| \u63D2\u69FD\u540D| \u8BF4\u660E |
| :--- | :--- |
| default| Collapse Item \u7684\u5185\u5BB9 |
| title| Collapse Item \u7684\u6807\u9898 |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-descriptions":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/descriptions.html)

#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4 |
| :--- | :--- | :--- | :--- |
| border| \u662F\u5426\u5E26\u6709\u8FB9\u6846| boolean| false |
| column| \u4E00\u884C Descriptions Item \u7684\u6570\u91CF| number| 3 |
| direction| \u6392\u5217\u7684\u65B9\u5411| enum| horizontal |
| size| \u5217\u8868\u7684\u5C3A\u5BF8| enum| \u2014 |
| title| \u6807\u9898\u6587\u672C\uFF0C\u663E\u793A\u5728\u5DE6\u4E0A\u65B9| string| '' |
| extra| \u64CD\u4F5C\u533A\u6587\u672C\uFF0C\u663E\u793A\u5728\u53F3\u4E0A\u65B9| string| '' |

#### Descriptions Slots

| \u63D2\u69FD\u540D| \u8BF4\u660E| \u5B50\u6807\u7B7E |
| :--- | :--- | :--- |
| default| \u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9| Descriptions Item |
| title| \u81EA\u5B9A\u4E49\u6807\u9898\uFF0C\u663E\u793A\u5728\u5DE6\u4E0A\u65B9| \u2014 |
| extra| \u81EA\u5B9A\u4E49\u64CD\u4F5C\u533A\uFF0C\u663E\u793A\u5728\u53F3\u4E0A\u65B9| \u2014 |
`,"el-descriptions-item":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/descriptions.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4 |
| :--- | :--- | :--- | :--- |
| label| \u6807\u7B7E\u6587\u672C| string| '' |
| span| \u5217\u7684\u6570\u91CF| number| 1 |
| width| \u5217\u7684\u5BBD\u5EA6\uFF0C\u4E0D\u540C\u884C\u76F8\u540C\u5217\u7684\u5BBD\u5EA6\u6309\u6700\u5927\u503C\u8BBE\u5B9A\uFF08\u5982\u65E0 border \uFF0C\u5BBD\u5EA6\u5305\u542B\u6807\u7B7E\u4E0E\u5185\u5BB9\uFF09| string / number| '' |
| min-width| \u5217\u7684\u6700\u5C0F\u5BBD\u5EA6\uFF0C\u4E0E width \u7684\u533A\u522B\u662F width \u662F\u56FA\u5B9A\u7684\uFF0Cmin-width \u4F1A\u628A\u5269\u4F59\u5BBD\u5EA6\u6309\u6BD4\u4F8B\u5206\u914D\u7ED9\u8BBE\u7F6E\u4E86 min-width \u7684\u5217\uFF08\u5982\u65E0 border\uFF0C\u5BBD\u5EA6\u5305\u542B\u6807\u7B7E\u4E0E\u5185\u5BB9\uFF09| string / number| '' |
| align| \u5217\u7684\u5185\u5BB9\u5BF9\u9F50\u65B9\u5F0F\uFF08\u5982\u65E0 border\uFF0C\u5BF9\u6807\u7B7E\u548C\u5185\u5BB9\u5747\u751F\u6548\uFF09| enum| left |
| label-align| \u5217\u7684\u6807\u7B7E\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u82E5\u4E0D\u8BBE\u7F6E\u8BE5\u9879\uFF0C\u5219\u4F7F\u7528\u5185\u5BB9\u7684\u5BF9\u9F50\u65B9\u5F0F\uFF08\u5982\u65E0 border\uFF0C\u8BF7\u4F7F\u7528 align \u53C2\u6570\uFF09| enum| '' |
| class-name| \u5217\u7684\u5185\u5BB9\u81EA\u5B9A\u4E49\u7C7B\u540D| string| '' |
| label-class-name| column label custom class name| string| '' |

#### DescriptionsItem Slots

| \u63D2\u69FD\u540D| \u8BF4\u660E |
| :--- | :--- |
| default| \u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9 |
| label| \u81EA\u5B9A\u4E49\u6807\u7B7E |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-empty":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/empty.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| image| empty \u7EC4\u4EF6\u7684\u56FE\u50CF\u5730\u5740| string| '' |
| image-size| empty \u7EC4\u4EF6\u7684\u56FE\u50CF\u5C3A\u5BF8\uFF08\u5BBD\u5EA6\uFF09| number| \u2014 |
| description| empty \u7EC4\u4EF6\u7684\u63CF\u8FF0\u4FE1\u606F| string| '' |

#### \u63D2\u69FD

| \u63D2\u69FD\u540D| \u63CF\u8FF0\u8BF4\u660E |
| :--- | :--- |
| default| \u4F5C\u4E3A\u5E95\u90E8\u5185\u5BB9\u7684\u5185\u5BB9 |
| image| \u4F5C\u4E3A\u56FE\u50CF\u7684\u5185\u5BB9 |
| description| \u4F5C\u4E3A\u63CF\u8FF0\u7684\u5185\u5BB9 |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-image":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/image.html)

#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| src| \u56FE\u7247\u6E90\u5730\u5740\uFF0C\u540C\u539F\u751F\u5C5E\u6027\u4E00\u81F4| string| '' |
| fit| \u786E\u5B9A\u56FE\u7247\u5982\u4F55\u9002\u5E94\u5BB9\u5668\u6846\uFF0C\u540C\u539F\u751F object-fit| enum| '' |
| hide-on-click-modal| \u5F53\u5F00\u542F preview \u529F\u80FD\u65F6\uFF0C\u662F\u5426\u53EF\u4EE5\u901A\u8FC7\u70B9\u51FB\u906E\u7F69\u5C42\u5173\u95ED preview| boolean| false |
| loading 2.2.3| \u6D4F\u89C8\u5668\u52A0\u8F7D\u56FE\u50CF\u7684\u7B56\u7565\uFF0C\u548C \u6D4F\u89C8\u5668\u539F\u751F\u80FD\u529B\u4E00\u81F4| enum| \u2014 |
| lazy| \u662F\u5426\u4F7F\u7528\u61D2\u52A0\u8F7D| boolean| false |
| scroll-container| \u5F00\u542F\u61D2\u52A0\u8F7D\u529F\u80FD\u540E\uFF0C\u76D1\u542C scroll \u4E8B\u4EF6\u7684\u5BB9\u5668 \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5F00\u542F\u61D2\u52A0\u8F7D\u529F\u80FD\u540E\uFF0C\u76D1\u542C scroll \u4E8B\u4EF6\u7684\u5BB9\u5668| string / object| \u2014 |
| alt| \u539F\u751F\u5C5E\u6027 alt| string| \u2014 |
| referrerpolicy| \u539F\u751F\u5C5E\u6027 referrerPolicy\u3002| string| \u2014 |
| crossorigin| \u539F\u751F\u5C5E\u6027 crossorigin| enum| \u2014 |
| preview-src-list| \u5F00\u542F\u56FE\u7247\u9884\u89C8\u529F\u80FD| object| [] |
| z-index| \u8BBE\u7F6E\u56FE\u7247\u9884\u89C8\u7684 z-index| number| \u2014 |
| initial-index| \u521D\u59CB\u9884\u89C8\u56FE\u50CF\u7D22\u5F15\uFF0C\u5C0F\u4E8E url-list \u7684\u957F\u5EA6| number| 0 |
| close-on-press-escape| \u662F\u5426\u53EF\u4EE5\u901A\u8FC7\u6309\u4E0B ESC \u5173\u95ED Image Viewer| boolean| true |
| preview-teleported| image-viewer \u662F\u5426\u63D2\u5165\u81F3 body \u5143\u7D20\u4E0A\u3002 \u5D4C\u5957\u7684\u7236\u5143\u7D20\u5C5E\u6027\u4F1A\u53D1\u751F\u4FEE\u6539\u65F6\u5E94\u8BE5\u5C06\u6B64\u5C5E\u6027\u8BBE\u7F6E\u4E3A true| boolean| false |
| infinite| \u662F\u5426\u53EF\u4EE5\u65E0\u9650\u5FAA\u73AF\u9884\u89C8| boolean| true |
| zoom-rate| \u56FE\u50CF\u67E5\u770B\u5668\u7F29\u653E\u4E8B\u4EF6\u7684\u7F29\u653E\u901F\u7387\u3002| number| 1.2 |
| min-scale 2.4.0| \u56FE\u50CF\u67E5\u770B\u5668\u7F29\u653E\u4E8B\u4EF6\u7684\u6700\u5C0F\u7F29\u653E\u6BD4\u4F8B| number| 0.2 |
| max-scale 2.4.0| \u56FE\u50CF\u67E5\u770B\u5668\u7F29\u653E\u4E8B\u4EF6\u7684\u6700\u5927\u7F29\u653E\u6BD4\u4F8B| number| 7 |
#### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D| \u8BF4\u660E| \u7C7B\u578B |
| :--- | :--- | :--- |
| load| \u56FE\u7247\u52A0\u8F7D\u6210\u529F\u89E6\u53D1| Function |
| error| \u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u89E6\u53D1| Function |
| switch| \u5207\u6362\u56FE\u50CF\u65F6\u89E6\u53D1\u3002| Function |
| close| \u5F53\u70B9\u51FB X \u6309\u94AE\u6216\u8005\u5728hide-on-click-modal\u4E3A true \u65F6\u70B9\u51FB\u906E\u7F69\u5C42\u65F6\u89E6\u53D1| Function |
| show| \u5F53 Viewer \u663E\u793A\u65F6\u89E6\u53D1| Function |

#### Image Slots

| \u63D2\u69FD\u540D| \u8BF4\u660E |
| :--- | :--- |
| placeholder| \u5F53\u56FE\u50CF\u5C1A\u672A\u52A0\u8F7D\u65F6\uFF0C\u81EA\u5B9A\u4E49\u7684\u5360\u4F4D\u7B26\u5185\u5BB9 |
| error| \u81EA\u5B9A\u4E49\u56FE\u50CF\u52A0\u8F7D\u5931\u8D25\u7684\u5185\u5BB9 |
| viewer| \u5F53\u56FE\u50CF\u9884\u89C8\u65F6\u81EA\u5B9A\u4E49\u5185\u5BB9 |

#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| url-list| \u7528\u4E8E\u9884\u89C8\u7684\u56FE\u7247\u94FE\u63A5\u5217\u8868| object| [] |
| z-index| \u9884\u89C8\u65F6\u906E\u7F69\u5C42\u7684 z-index| number / string| \u2014 |
| initial-index| \u521D\u59CB\u9884\u89C8\u56FE\u50CF\u7D22\u5F15\uFF0C\u5C0F\u4E8E url-list \u7684\u957F\u5EA6| number| 0 |
| infinite| \u662F\u5426\u53EF\u4EE5\u65E0\u9650\u5FAA\u73AF\u9884\u89C8| boolean| true |
| hide-on-click-modal| \u662F\u5426\u53EF\u4EE5\u901A\u8FC7\u70B9\u51FB\u906E\u7F69\u5C42\u5173\u95ED\u9884\u89C8| boolean| false |
| teleported| image \u81EA\u8EAB\u662F\u5426\u63D2\u5165\u81F3 body \u5143\u7D20\u4E0A\u3002 \u5D4C\u5957\u7684\u7236\u5143\u7D20\u5C5E\u6027\u4F1A\u53D1\u751F\u4FEE\u6539\u65F6\u5E94\u8BE5\u5C06\u6B64\u5C5E\u6027\u8BBE\u7F6E\u4E3A true| boolean| false |
| zoom-rate 2.2.27| \u56FE\u50CF\u67E5\u770B\u5668\u7F29\u653E\u4E8B\u4EF6\u7684\u7F29\u653E\u901F\u7387\u3002| number| 1.2 |
| min-scale 2.4.0| \u56FE\u50CF\u67E5\u770B\u5668\u7F29\u653E\u4E8B\u4EF6\u7684\u6700\u5C0F\u7F29\u653E\u6BD4\u4F8B| number| 0.2 |
| max-scale 2.4.0| \u56FE\u50CF\u67E5\u770B\u5668\u7F29\u653E\u4E8B\u4EF6\u7684\u6700\u5927\u7F29\u653E\u6BD4\u4F8B| number| 7 |
| close-on-press-escape| \u662F\u5426\u53EF\u4EE5\u901A\u8FC7\u6309\u4E0B ESC \u5173\u95ED Image Viewer| boolean| true |
#### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D| \u8BF4\u660E| \u7C7B\u578B |
| :--- | :--- | :--- |
| close| \u5F53\u70B9\u51FB X \u6309\u94AE\u6216\u8005\u5728hide-on-click-modal\u4E3A true \u65F6\u70B9\u51FB\u906E\u7F69\u5C42\u65F6\u89E6\u53D1| Function |
| switch| \u5207\u6362\u56FE\u50CF\u65F6\u89E6\u53D1\u3002| Function |
| rotate 2.3.13| \u65CB\u8F6C\u56FE\u50CF\u65F6\u89E6\u53D1\u3002| Function |

#### Image Viewer Exposes

| Name| \u8BF4\u660E| Type |
| :--- | :--- | :--- |
| setActiveItem| \u624B\u52A8\u5207\u6362\u56FE\u7247| Function |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-pagination":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/pagination.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| small| \u662F\u5426\u4F7F\u7528\u5C0F\u578B\u5206\u9875\u6837\u5F0F| boolean| false |
| background| \u662F\u5426\u4E3A\u5206\u9875\u6309\u94AE\u6DFB\u52A0\u80CC\u666F\u8272| boolean| false |
| page-size / v-model:page-size| \u6BCF\u9875\u663E\u793A\u6761\u76EE\u4E2A\u6570| number| \u2014 |
| default-page-size| \u6BCF\u9875\u9ED8\u8BA4\u7684\u6761\u76EE\u4E2A\u6570\uFF0C\u4E0D\u8BBE\u7F6E\u65F6\u9ED8\u8BA4\u4E3A10| number| \u2014 |
| total| \u603B\u6761\u76EE\u6570| number| \u2014 |
| page-count| \u603B\u9875\u6570\uFF0C total \u548C page-count \u8BBE\u7F6E\u4EFB\u610F\u4E00\u4E2A\u5C31\u53EF\u4EE5\u8FBE\u5230\u663E\u793A\u9875\u7801\u7684\u529F\u80FD\uFF1B\u5982\u679C\u8981\u652F\u6301 page-sizes \u7684\u66F4\u6539\uFF0C\u5219\u9700\u8981\u4F7F\u7528 total \u5C5E\u6027| number| \u2014 |
| pager-count| \u8BBE\u7F6E\u6700\u5927\u9875\u7801\u6309\u94AE\u6570\u3002 \u9875\u7801\u6309\u94AE\u7684\u6570\u91CF\uFF0C\u5F53\u603B\u9875\u6570\u8D85\u8FC7\u8BE5\u503C\u65F6\u4F1A\u6298\u53E0| number| 7 |
| current-page / v-model:current-page| \u5F53\u524D\u9875\u6570| number| \u2014 |
| default-current-page| \u5F53\u524D\u9875\u6570\u7684\u9ED8\u8BA4\u521D\u59CB\u503C\uFF0C\u4E0D\u8BBE\u7F6E\u65F6\u9ED8\u8BA4\u4E3A 1| number| \u2014 |
| layout| \u7EC4\u4EF6\u5E03\u5C40\uFF0C\u5B50\u7EC4\u4EF6\u540D\u7528\u9017\u53F7\u5206\u9694| string| prev, pager, next, jumper, ->, total |
| page-sizes| \u6BCF\u9875\u663E\u793A\u4E2A\u6570\u9009\u62E9\u5668\u7684\u9009\u9879\u8BBE\u7F6E| object| [10, 20, 30, 40, 50, 100] |
| popper-class| \u6BCF\u9875\u663E\u793A\u4E2A\u6570\u9009\u62E9\u5668\u7684\u4E0B\u62C9\u6846\u7C7B\u540D| string| '' |
| prev-text| \u66FF\u4EE3\u56FE\u6807\u663E\u793A\u7684\u4E0A\u4E00\u9875\u6587\u5B57| string| '' |
| prev-icon| \u4E0A\u4E00\u9875\u7684\u56FE\u6807\uFF0C \u6BD4 prev-text \u4F18\u5148\u7EA7\u66F4\u9AD8| string / Component| ArrowLeft |
| next-text| \u66FF\u4EE3\u56FE\u6807\u663E\u793A\u7684\u4E0B\u4E00\u9875\u6587\u5B57| string| '' |
| next-icon| \u4E0B\u4E00\u9875\u7684\u56FE\u6807\uFF0C \u6BD4 next-text \u4F18\u5148\u7EA7\u66F4\u4F4E| string / Component| ArrowRight |
| disabled| \u662F\u5426\u7981\u7528\u5206\u9875| boolean| false |
| teleported 2.3.13| \u662F\u5426\u5C06\u4E0B\u62C9\u83DC\u5355teleport\u81F3 body| boolean| true |
| hide-on-single-page| \u53EA\u6709\u4E00\u9875\u65F6\u662F\u5426\u9690\u85CF| boolean| false |
#### \u4E8B\u4EF6

| \u540D\u79F0| \u8BF4\u660E| \u7C7B\u578B |
| :--- | :--- | :--- |
| size-change| page-size \u6539\u53D8\u65F6\u89E6\u53D1| Function |
| current-change| current-page \u6539\u53D8\u65F6\u89E6\u53D1| Function |
| change 2.4.4| current-page \u6216 page-size \u66F4\u6539\u65F6\u89E6\u53D1| Function |
| prev-click| \u7528\u6237\u70B9\u51FB\u4E0A\u4E00\u9875\u6309\u94AE\u6539\u53D8\u5F53\u524D\u9875\u65F6\u89E6\u53D1| Function |
| next-click| \u7528\u6237\u70B9\u51FB\u4E0B\u4E00\u9875\u6309\u94AE\u6539\u53D8\u5F53\u524D\u9875\u65F6\u89E6\u53D1| Function |

#### \u63D2\u69FD

| \u540D\u79F0| \u8BF4\u660E |
| :--- | :--- |
| default| \u81EA\u5B9A\u4E49\u5185\u5BB9 \u8BBE\u7F6E\u6587\u6848\uFF0C\u9700\u8981\u5728 layout \u4E2D\u5217\u51FA slot |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-progress":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/progress.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| percentage required| percentage| number| 0 |
| type| \u8FDB\u5EA6\u6761\u7C7B\u578B| enum| line |
| stroke-width| \u8FDB\u5EA6\u6761\u7684\u5BBD\u5EA6| number| 6 |
| text-inside| \u8FDB\u5EA6\u6761\u663E\u793A\u6587\u5B57\u5185\u7F6E\u5728\u8FDB\u5EA6\u6761\u5185\uFF08\u4EC5 type \u4E3A 'line' \u65F6\u53EF\u7528\uFF09| boolean| false |
| status| \u8FDB\u5EA6\u6761\u5F53\u524D\u72B6\u6001| enum| \u2014 |
| indeterminate| \u662F\u5426\u4E3A\u52A8\u753B\u8FDB\u5EA6\u6761| boolean| false |
| duration| \u63A7\u5236\u52A8\u753B\u8FDB\u5EA6\u6761\u901F\u5EA6\u548C\u6761\u7EB9\u8FDB\u5EA6\u6761\u6D41\u52A8\u901F\u5EA6| number| 3 |
| color| \u8FDB\u5EA6\u6761\u80CC\u666F\u8272 \u8FDB\u5EA6\u6761\u80CC\u666F\u8272 \uFF08\u4F1A\u8986\u76D6 status \u72B6\u6001\u989C\u8272\uFF09| string / function / Array| '' |
| width| \u73AF\u5F62\u8FDB\u5EA6\u6761\u753B\u5E03\u5BBD\u5EA6\uFF08\u53EA\u5728 type \u4E3A circle \u6216 dashboard \u65F6\u53EF\u7528\uFF09| number| 126 |
| show-text| \u662F\u5426\u663E\u793A\u8FDB\u5EA6\u6761\u6587\u5B57\u5185\u5BB9| boolean| true |
| stroke-linecap| circle/dashboard \u7C7B\u578B\u8DEF\u5F84\u4E24\u7AEF\u7684\u5F62\u72B6| enum| round |
| format| \u6307\u5B9A\u8FDB\u5EA6\u6761\u6587\u5B57\u5185\u5BB9| Function| \u2014 |
| striped 2.3.4| \u5728\u8FDB\u5EA6\u6761\u4E0A\u589E\u52A0\u6761\u7EB9| boolean| false |
| striped-flow 2.3.4| \u8BA9\u8FDB\u5EA6\u6761\u4E0A\u7684\u6761\u7EB9\u6D41\u52A8\u8D77\u6765| boolean| false |

#### Slots

| \u540D\u79F0| \u8BF4\u660E| \u7C7B\u578B |
| :--- | :--- | :--- |
| default| \u81EA\u5B9A\u4E49\u5185\u5BB9| object |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-result":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/result.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| title| result \u7EC4\u4EF6\u7684\u6807\u9898| string| '' |
| sub-title| result \u7EC4\u4EF6\u7684\u526F\u6807\u9898| string| '' |
| icon| result \u7EC4\u4EF6\u7684\u56FE\u6807\u7C7B\u578B| enum| info |

#### \u63D2\u69FD

| \u540D\u79F0| \u8BF4\u660E |
| :--- | :--- |
| icon| icon \u5185\u5BB9 |
| title| result title \u7684\u5185\u5BB9 |
| sub-title| sub title \u7684\u5185\u5BB9 |
| extra| \u5185\u5BB9\u989D\u5916\u533A\u57DF\u7684\u5185\u5BB9 |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-skeleton":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/skeleton.html)

#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| animated| \u662F\u5426\u4F7F\u7528\u52A8\u753B| boolean| false |
| count| \u6E32\u67D3\u591A\u5C11\u4E2A template, \u5EFA\u8BAE\u4F7F\u7528\u5C3D\u53EF\u80FD\u5C0F\u7684\u6570\u5B57| number| 1 |
| loading| \u662F\u5426\u663E\u793A\u52A0\u8F7D\u7ED3\u675F\u540E\u7684 DOM \u7ED3\u6784| boolean| false |
| rows| \u9AA8\u67B6\u5C4F\u6BB5\u843D\u6570\u91CF| number| 3 |
| throttle| \u6E32\u67D3\u5EF6\u8FDF\uFF08\u4EE5\u6BEB\u79D2\u4E3A\u5355\u4F4D\uFF09| number| 0 |

#### Skeleton \u63D2\u69FD

| \u63D2\u69FD\u540D| \u8BF4\u660E| \u4F5C\u7528\u57DF |
| :--- | :--- | :--- |
| default| \u771F\u6B63\u6E32\u67D3\u7684DOM| object |
| template| \u6E32\u67D3 skeleton \u6A21\u677F\u7684\u5185\u5BB9| object |
`,"el-skeleton-item":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/skeleton.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| variant| \u5F53\u524D\u6E32\u67D3 skeleton \u7C7B\u578B| enum| text |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-table":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/table.html)

#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| Default |
| :--- | :--- | :--- | :--- |
| data| \u8868\u6570\u636E| object| [] |
| height| table \u7684\u9AD8\u5EA6\u3002 \u9ED8\u8BA4\u4E3A\u81EA\u52A8\u9AD8\u5EA6\u3002 \u5982\u679C height \u4E3A number \u7C7B\u578B\uFF0C\u5355\u4F4D px\uFF1B\u5982\u679C height \u4E3A string \u7C7B\u578B\uFF0C\u5219\u8FD9\u4E2A\u9AD8\u5EA6\u4F1A\u8BBE\u7F6E\u4E3A Table \u7684 style.height \u7684\u503C\uFF0CTable \u7684\u9AD8\u5EA6\u4F1A\u53D7\u63A7\u4E8E\u5916\u90E8\u6837\u5F0F\u3002| string / number| \u2014 |
| max-height| table \u7684\u6700\u5927\u9AD8\u5EA6\u3002 \u5408\u6CD5\u7684\u503C\u4E3A\u6570\u5B57\u6216\u8005\u5355\u4F4D\u4E3A px \u7684\u9AD8\u5EA6\u3002| string / number| \u2014 |
| stripe| \u662F\u5426\u4E3A\u6591\u9A6C\u7EB9 table| boolean| false |
| border| \u662F\u5426\u5E26\u6709\u7EB5\u5411\u8FB9\u6846| boolean| false |
| size| Table \u7684\u5C3A\u5BF8| enum| \u2014 |
| fit| \u5217\u7684\u5BBD\u5EA6\u662F\u5426\u81EA\u6491\u5F00| boolean| true |
| show-header| \u662F\u5426\u663E\u793A\u8868\u5934| boolean| true |
| highlight-current-row| \u662F\u5426\u8981\u9AD8\u4EAE\u5F53\u524D\u884C| boolean| false |
| current-row-key| \u5F53\u524D\u884C\u7684 key\uFF0C\u53EA\u5199\u5C5E\u6027| string / number| \u2014 |
| row-class-name| \u884C\u7684 className \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\u4E3A\u6240\u6709\u884C\u8BBE\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684 className\u3002| Function / string| \u2014 |
| row-style| \u884C\u7684 style \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u56FA\u5B9A\u7684 Object \u4E3A\u6240\u6709\u884C\u8BBE\u7F6E\u4E00\u6837\u7684 Style\u3002| Function / object| \u2014 |
| cell-class-name| \u5355\u5143\u683C\u7684 className \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\u4E3A\u6240\u6709\u5355\u5143\u683C\u8BBE\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684 className\u3002| Function / string| \u2014 |
| cell-style| \u5355\u5143\u683C\u7684 style \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u56FA\u5B9A\u7684 Object \u4E3A\u6240\u6709\u5355\u5143\u683C\u8BBE\u7F6E\u4E00\u6837\u7684 Style\u3002| Function / object| \u2014 |
| header-row-class-name| \u8868\u5934\u884C\u7684 className \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\u4E3A\u6240\u6709\u8868\u5934\u884C\u8BBE\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684 className\u3002| Function / string| \u2014 |
| header-row-style| \u8868\u5934\u884C\u7684 style \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u56FA\u5B9A\u7684 Object \u4E3A\u6240\u6709\u8868\u5934\u884C\u8BBE\u7F6E\u4E00\u6837\u7684 Style\u3002| Function / object| \u2014 |
| header-cell-class-name| \u8868\u5934\u5355\u5143\u683C\u7684 className \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\u4E3A\u6240\u6709\u8868\u5934\u5355\u5143\u683C\u8BBE\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684 className\u3002| Function / string| \u2014 |
| header-cell-style| \u8868\u5934\u5355\u5143\u683C\u7684 style \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u56FA\u5B9A\u7684 Object \u4E3A\u6240\u6709\u8868\u5934\u5355\u5143\u683C\u8BBE\u7F6E\u4E00\u6837\u7684 Style\u3002| Function / object| \u2014 |
| row-key| \u884C\u6570\u636E\u7684 Key\uFF0C\u7528\u6765\u4F18\u5316 Table \u7684\u6E32\u67D3\uFF1B \u5728\u4F7F\u7528reserve-selection\u529F\u80FD\u4E0E\u663E\u793A\u6811\u5F62\u6570\u636E\u65F6\uFF0C\u8BE5\u5C5E\u6027\u662F\u5FC5\u586B\u7684\u3002 \u7C7B\u578B\u4E3A String \u65F6\uFF0C\u652F\u6301\u591A\u5C42\u8BBF\u95EE\uFF1Auser.info.id\uFF0C\u4F46\u4E0D\u652F\u6301 user.info[0].id\uFF0C\u6B64\u79CD\u60C5\u51B5\u8BF7\u4F7F\u7528 Function\u3002| function / string| \u2014 |
| empty-text| \u7A7A\u6570\u636E\u65F6\u663E\u793A\u7684\u6587\u672C\u5185\u5BB9\uFF0C \u4E5F\u53EF\u4EE5\u901A\u8FC7 #empty \u8BBE\u7F6E \u4E5F\u53EF\u4EE5\u901A\u8FC7 #empty \u8BBE\u7F6E| string| No Data |
| default-expand-all| \u662F\u5426\u9ED8\u8BA4\u5C55\u5F00\u6240\u6709\u884C\uFF0C\u5F53 Table \u5305\u542B\u5C55\u5F00\u884C\u5B58\u5728\u6216\u8005\u4E3A\u6811\u5F62\u8868\u683C\u65F6\u6709\u6548| boolean| false |
| expand-row-keys| \u53EF\u4EE5\u901A\u8FC7\u8BE5\u5C5E\u6027\u8BBE\u7F6E Table \u76EE\u524D\u7684\u5C55\u5F00\u884C\uFF0C\u9700\u8981\u8BBE\u7F6E row-key \u5C5E\u6027\u624D\u80FD\u4F7F\u7528\uFF0C\u8BE5\u5C5E\u6027\u4E3A\u5C55\u5F00\u884C\u7684 keys \u6570\u7EC4\u3002| object| \u2014 |
| default-sort| \u9ED8\u8BA4\u7684\u6392\u5E8F\u5217\u7684 prop \u548C\u987A\u5E8F\u3002 \u5B83\u7684 prop \u5C5E\u6027\u6307\u5B9A\u9ED8\u8BA4\u7684\u6392\u5E8F\u7684\u5217\uFF0Corder \u6307\u5B9A\u9ED8\u8BA4\u6392\u5E8F\u7684\u987A\u5E8F| object| if prop is set, and order is not set, then order is default to ascending |
| tooltip-effect| \u6EA2\u51FA\u7684 tooltip \u7684 effect| enum| dark |
| tooltip-options 2.2.28| \u6EA2\u51FA tooltip \u7684\u9009\u9879\uFF0C\u53C2\u89C1\u4E0B\u8FF0 tooltip \u7EC4\u4EF6| object| object |
| show-summary| \u662F\u5426\u5728\u8868\u5C3E\u663E\u793A\u5408\u8BA1\u884C| boolean| false |
| sum-text| \u663E\u793A\u6458\u8981\u884C\u7B2C\u4E00\u5217\u7684\u6587\u672C| string| Sum |
| summary-method| \u81EA\u5B9A\u4E49\u7684\u5408\u8BA1\u8BA1\u7B97\u65B9\u6CD5| Function| \u2014 |
| span-method| \u5408\u5E76\u884C\u6216\u5217\u7684\u8BA1\u7B97\u65B9\u6CD5| Function| \u2014 |
| select-on-indeterminate| \u5728\u591A\u9009\u8868\u683C\u4E2D\uFF0C\u5F53\u4EC5\u6709\u90E8\u5206\u884C\u88AB\u9009\u4E2D\u65F6\uFF0C\u70B9\u51FB\u8868\u5934\u7684\u591A\u9009\u6846\u65F6\u7684\u884C\u4E3A\u3002 \u82E5\u4E3A true\uFF0C\u5219\u9009\u4E2D\u6240\u6709\u884C\uFF1B\u82E5\u4E3A false\uFF0C\u5219\u53D6\u6D88\u9009\u62E9\u6240\u6709\u884C| boolean| true |
| indent| \u5C55\u793A\u6811\u5F62\u6570\u636E\u65F6\uFF0C\u6811\u8282\u70B9\u7684\u7F29\u8FDB| number| 16 |
| lazy| \u662F\u5426\u61D2\u52A0\u8F7D\u5B50\u8282\u70B9\u6570\u636E| boolean| false |
| load| \u52A0\u8F7D\u5B50\u8282\u70B9\u6570\u636E\u7684\u51FD\u6570\uFF0Clazy \u4E3A true \u65F6\u751F\u6548| Function| \u2014 |
| tree-props| \u6E32\u67D3\u5D4C\u5957\u6570\u636E\u7684\u914D\u7F6E\u9009\u9879| object| object |
| table-layout| \u8BBE\u7F6E\u8868\u683C\u5355\u5143\u3001\u884C\u548C\u5217\u7684\u5E03\u5C40\u65B9\u5F0F| enum| fixed |
| scrollbar-always-on| \u603B\u662F\u663E\u793A\u6EDA\u52A8\u6761| boolean| false |
| show-overflow-tooltip| \u662F\u5426\u9690\u85CF\u989D\u5916\u5185\u5BB9\u5E76\u5728\u5355\u5143\u683C\u60AC\u505C\u65F6\u4F7F\u7528 Tooltip \u663E\u793A\u5B83\u4EEC\u3002\u8FD9\u5C06\u5F71\u54CD\u5168\u90E8\u5217\u7684\u5C55\u793A\u3002, \u8BE6\u8BF7\u53C2\u8003tooltip-options| boolean / object 2.3.7| \u2014 |
| flexible 2.2.1| \u786E\u4FDD\u4E3B\u8F74\u7684\u6700\u5C0F\u5C3A\u5BF8\uFF0C\u4EE5\u4FBF\u4E0D\u8D85\u8FC7\u5185\u5BB9| boolean| false |
#### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D| \u8BF4\u660E| \u7C7B\u578B |
| :--- | :--- | :--- |
| select| \u5F53\u7528\u6237\u624B\u52A8\u52FE\u9009\u6570\u636E\u884C\u7684 Checkbox \u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6| Function |
| select-all| \u5F53\u7528\u6237\u624B\u52A8\u52FE\u9009\u5168\u9009 Checkbox \u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6| Function |
| selection-change| \u5F53\u9009\u62E9\u9879\u53D1\u751F\u53D8\u5316\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6| Function |
| cell-mouse-enter| \u5F53\u5355\u5143\u683C hover \u8FDB\u5165\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6| Function |
| cell-mouse-leave| \u5F53\u5355\u5143\u683C hover \u9000\u51FA\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6| Function |
| cell-click| \u5F53\u67D0\u4E2A\u5355\u5143\u683C\u88AB\u70B9\u51FB\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6| Function |
| cell-dblclick| \u5F53\u67D0\u4E2A\u5355\u5143\u683C\u88AB\u53CC\u51FB\u51FB\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6| Function |
| cell-contextmenu| \u5F53\u67D0\u4E2A\u5355\u5143\u683C\u88AB\u9F20\u6807\u53F3\u952E\u70B9\u51FB\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6| Function |
| row-click| \u5F53\u67D0\u4E00\u884C\u88AB\u70B9\u51FB\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6| Function |
| row-contextmenu| \u5F53\u67D0\u4E00\u884C\u88AB\u9F20\u6807\u53F3\u952E\u70B9\u51FB\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6| Function |
| row-dblclick| \u5F53\u67D0\u4E00\u884C\u88AB\u53CC\u51FB\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6| Function |
| header-click| \u5F53\u67D0\u4E00\u5217\u7684\u8868\u5934\u88AB\u70B9\u51FB\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6| Function |
| header-contextmenu| \u5F53\u67D0\u4E00\u5217\u7684\u8868\u5934\u88AB\u9F20\u6807\u53F3\u952E\u70B9\u51FB\u65F6\u89E6\u53D1\u8BE5\u4E8B\u4EF6| Function |
| sort-change| \u5F53\u8868\u683C\u7684\u6392\u5E8F\u6761\u4EF6\u53D1\u751F\u53D8\u5316\u7684\u65F6\u5019\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6| Function |
| filter-change| column \u7684 key\uFF0C \u5982\u679C\u9700\u8981\u4F7F\u7528 filter-change \u4E8B\u4EF6\uFF0C\u5219\u9700\u8981\u6B64\u5C5E\u6027\u6807\u8BC6\u662F\u54EA\u4E2A column \u7684\u7B5B\u9009\u6761\u4EF6| Function |
| current-change| \u5F53\u8868\u683C\u7684\u5F53\u524D\u884C\u53D1\u751F\u53D8\u5316\u7684\u65F6\u5019\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6\uFF0C\u5982\u679C\u8981\u9AD8\u4EAE\u5F53\u524D\u884C\uFF0C\u8BF7\u6253\u5F00\u8868\u683C\u7684 highlight-current-row \u5C5E\u6027| Function |
| header-dragend| \u5F53\u62D6\u52A8\u8868\u5934\u6539\u53D8\u4E86\u5217\u7684\u5BBD\u5EA6\u7684\u65F6\u5019\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6| Function |
| expand-change| \u5F53\u7528\u6237\u5BF9\u67D0\u4E00\u884C\u5C55\u5F00\u6216\u8005\u5173\u95ED\u7684\u65F6\u5019\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6\uFF08\u5C55\u5F00\u884C\u65F6\uFF0C\u56DE\u8C03\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3A expandedRows\uFF1B\u6811\u5F62\u8868\u683C\u65F6\u7B2C\u4E8C\u53C2\u6570\u4E3A expanded\uFF09| Function |

#### Table \u63D2\u69FD

| \u63D2\u69FD\u540D| \u8BF4\u660E| \u5B50\u6807\u7B7E |
| :--- | :--- | :--- |
| default| \u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9| Table-column |
| append| \u63D2\u5165\u81F3\u8868\u683C\u6700\u540E\u4E00\u884C\u4E4B\u540E\u7684\u5185\u5BB9\uFF0C \u5982\u679C\u9700\u8981\u5BF9\u8868\u683C\u7684\u5185\u5BB9\u8FDB\u884C\u65E0\u9650\u6EDA\u52A8\u64CD\u4F5C\uFF0C\u53EF\u80FD\u9700\u8981\u7528\u5230\u8FD9\u4E2A slot\u3002 \u82E5\u8868\u683C\u6709\u5408\u8BA1\u884C\uFF0C\u8BE5 slot \u4F1A\u4F4D\u4E8E\u5408\u8BA1\u884C\u4E4B\u4E0A\u3002| \u2014 |
| empty| \u5F53\u6570\u636E\u4E3A\u7A7A\u65F6\u81EA\u5B9A\u4E49\u7684\u5185\u5BB9| \u2014 |

#### Table Exposes

| \u65B9\u6CD5\u540D| \u8BF4\u660E| Type |
| :--- | :--- | :--- |
| clearSelection| \u7528\u4E8E\u591A\u9009\u8868\u683C\uFF0C\u6E05\u7A7A\u7528\u6237\u7684\u9009\u62E9| Function |
| getSelectionRows| \u8FD4\u56DE\u5F53\u524D\u9009\u4E2D\u7684\u884C| Function |
| toggleRowSelection| \u7528\u4E8E\u591A\u9009\u8868\u683C\uFF0C\u5207\u6362\u67D0\u4E00\u884C\u7684\u9009\u4E2D\u72B6\u6001\uFF0C \u5982\u679C\u4F7F\u7528\u4E86\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u5219\u53EF\u76F4\u63A5\u8BBE\u7F6E\u8FD9\u4E00\u884C\u9009\u4E2D\u4E0E\u5426| Function |
| toggleAllSelection| \u7528\u4E8E\u591A\u9009\u8868\u683C\uFF0C\u5207\u6362\u5168\u9009\u548C\u5168\u4E0D\u9009| Function |
| toggleRowExpansion| \u7528\u4E8E\u53EF\u6269\u5C55\u7684\u8868\u683C\u6216\u6811\u8868\u683C\uFF0C\u5982\u679C\u67D0\u884C\u88AB\u6269\u5C55\uFF0C\u5219\u5207\u6362\u3002 \u4F7F\u7528\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u60A8\u53EF\u4EE5\u76F4\u63A5\u8BBE\u7F6E\u8BE5\u884C\u5E94\u8BE5\u88AB\u6269\u5C55\u6216\u6298\u53E0\u3002| Function |
| setCurrentRow| \u7528\u4E8E\u5355\u9009\u8868\u683C\uFF0C\u8BBE\u5B9A\u67D0\u4E00\u884C\u4E3A\u9009\u4E2D\u884C\uFF0C \u5982\u679C\u8C03\u7528\u65F6\u4E0D\u52A0\u53C2\u6570\uFF0C\u5219\u4F1A\u53D6\u6D88\u76EE\u524D\u9AD8\u4EAE\u884C\u7684\u9009\u4E2D\u72B6\u6001\u3002| Function |
| clearSort| \u7528\u4E8E\u6E05\u7A7A\u6392\u5E8F\u6761\u4EF6\uFF0C\u6570\u636E\u4F1A\u6062\u590D\u6210\u672A\u6392\u5E8F\u7684\u72B6\u6001| Function |
| clearFilter| \u4F20\u5165\u7531columnKey \u7EC4\u6210\u7684\u6570\u7EC4\u4EE5\u6E05\u9664\u6307\u5B9A\u5217\u7684\u8FC7\u6EE4\u6761\u4EF6\u3002 \u5982\u679C\u6CA1\u6709\u53C2\u6570\uFF0C\u6E05\u9664\u6240\u6709\u8FC7\u6EE4\u5668| Function |
| doLayout| \u5BF9 Table \u8FDB\u884C\u91CD\u65B0\u5E03\u5C40\u3002 \u5F53\u8868\u683C\u53EF\u89C1\u6027\u53D8\u5316\u65F6\uFF0C\u60A8\u53EF\u80FD\u9700\u8981\u8C03\u7528\u6B64\u65B9\u6CD5\u4EE5\u83B7\u5F97\u6B63\u786E\u7684\u5E03\u5C40| Function |
| sort| \u624B\u52A8\u6392\u5E8F\u8868\u683C\u3002 \u53C2\u6570 prop \u5C5E\u6027\u6307\u5B9A\u6392\u5E8F\u5217\uFF0Corder \u6307\u5B9A\u6392\u5E8F\u987A\u5E8F\u3002| Function |
| scrollTo| \u6EDA\u52A8\u5230\u4E00\u7EC4\u7279\u5B9A\u5750\u6807| Function |
| setScrollTop| \u8BBE\u7F6E\u5782\u76F4\u6EDA\u52A8\u4F4D\u7F6E| Function |
| setScrollLeft| \u8BBE\u7F6E\u6C34\u5E73\u6EDA\u52A8\u4F4D\u7F6E| Function |
`,"el-table-column":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/table.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| Type| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| type| \u5BF9\u5E94\u5217\u7684\u7C7B\u578B\u3002 \u5982\u679C\u8BBE\u7F6E\u4E86selection\u5219\u663E\u793A\u591A\u9009\u6846\uFF1B \u5982\u679C\u8BBE\u7F6E\u4E86 index \u5219\u663E\u793A\u8BE5\u884C\u7684\u7D22\u5F15\uFF08\u4ECE 1 \u5F00\u59CB\u8BA1\u7B97\uFF09\uFF1B \u5982\u679C\u8BBE\u7F6E\u4E86 expand \u5219\u663E\u793A\u4E3A\u4E00\u4E2A\u53EF\u5C55\u5F00\u7684\u6309\u94AE| enum| default |
| index| \u5982\u679C\u8BBE\u7F6E\u4E86 type=index\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4F20\u9012 index \u5C5E\u6027\u6765\u81EA\u5B9A\u4E49\u7D22\u5F15| number / Function| \u2014 |
| label| \u663E\u793A\u7684\u6807\u9898| string| \u2014 |
| column-key| column \u7684 key\uFF0C column \u7684 key\uFF0C \u5982\u679C\u9700\u8981\u4F7F\u7528 filter-change \u4E8B\u4EF6\uFF0C\u5219\u9700\u8981\u6B64\u5C5E\u6027\u6807\u8BC6\u662F\u54EA\u4E2A column \u7684\u7B5B\u9009\u6761\u4EF6| string| \u2014 |
| prop| \u5B57\u6BB5\u540D\u79F0 \u5BF9\u5E94\u5217\u5185\u5BB9\u7684\u5B57\u6BB5\u540D\uFF0C \u4E5F\u53EF\u4EE5\u4F7F\u7528 property\u5C5E\u6027| string| \u2014 |
| width| \u5BF9\u5E94\u5217\u7684\u5BBD\u5EA6| string / number| '' |
| min-width| \u5BF9\u5E94\u5217\u7684\u6700\u5C0F\u5BBD\u5EA6\uFF0C \u5BF9\u5E94\u5217\u7684\u6700\u5C0F\u5BBD\u5EA6\uFF0C \u4E0E width \u7684\u533A\u522B\u662F width \u662F\u56FA\u5B9A\u7684\uFF0Cmin-width \u4F1A\u628A\u5269\u4F59\u5BBD\u5EA6\u6309\u6BD4\u4F8B\u5206\u914D\u7ED9\u8BBE\u7F6E\u4E86 min-width \u7684\u5217| string / number| '' |
| fixed| \u5217\u662F\u5426\u56FA\u5B9A\u5728\u5DE6\u4FA7\u6216\u8005\u53F3\u4FA7\u3002 true \u8868\u793A\u56FA\u5B9A\u5728\u5DE6\u4FA7| enum / boolean| false |
| render-header| \u5217\u6807\u9898 Label \u533A\u57DF\u6E32\u67D3\u4F7F\u7528\u7684 Function| Function| \u2014 |
| sortable| \u5BF9\u5E94\u5217\u662F\u5426\u53EF\u4EE5\u6392\u5E8F\uFF0C \u5982\u679C\u8BBE\u7F6E\u4E3A 'custom'\uFF0C\u5219\u4EE3\u8868\u7528\u6237\u5E0C\u671B\u8FDC\u7A0B\u6392\u5E8F\uFF0C\u9700\u8981\u76D1\u542C Table \u7684 sort-change \u4E8B\u4EF6| boolean / string| false |
| sort-method| \u6307\u5B9A\u6570\u636E\u6309\u7167\u54EA\u4E2A\u5C5E\u6027\u8FDB\u884C\u6392\u5E8F\uFF0C\u4EC5\u5F53sortable\u8BBE\u7F6E\u4E3Atrue\u7684\u65F6\u5019\u6709\u6548\u3002 \u5E94\u8BE5\u5982\u540C Array.sort \u90A3\u6837\u8FD4\u56DE\u4E00\u4E2A Number| Function| \u2014 |
| sort-by| \u6307\u5B9A\u6570\u636E\u6309\u7167\u54EA\u4E2A\u5C5E\u6027\u8FDB\u884C\u6392\u5E8F\uFF0C\u4EC5\u5F53 sortable \u8BBE\u7F6E\u4E3A true \u4E14\u6CA1\u6709\u8BBE\u7F6E sort-method \u7684\u65F6\u5019\u6709\u6548\u3002 \u5982\u679C sort-by \u4E3A\u6570\u7EC4\uFF0C\u5219\u5148\u6309\u7167\u7B2C 1 \u4E2A\u5C5E\u6027\u6392\u5E8F\uFF0C\u5982\u679C\u7B2C 1 \u4E2A\u76F8\u7B49\uFF0C\u518D\u6309\u7167\u7B2C 2 \u4E2A\u6392\u5E8F\uFF0C\u4EE5\u6B64\u7C7B\u63A8| Function / string / object| \u2014 |
| sort-orders| \u6570\u636E\u5728\u6392\u5E8F\u65F6\u6240\u4F7F\u7528\u6392\u5E8F\u7B56\u7565\u7684\u8F6E\u8F6C\u987A\u5E8F\uFF0C\u4EC5\u5F53 sortable \u4E3A true \u65F6\u6709\u6548\u3002 \u9700\u4F20\u5165\u4E00\u4E2A\u6570\u7EC4\uFF0C\u968F\u7740\u7528\u6237\u70B9\u51FB\u8868\u5934\uFF0C\u8BE5\u5217\u4F9D\u6B21\u6309\u7167\u6570\u7EC4\u4E2D\u5143\u7D20\u7684\u987A\u5E8F\u8FDB\u884C\u6392\u5E8F| object| ['ascending', 'descending', null] |
| resizable| \u5BF9\u5E94\u5217\u662F\u5426\u53EF\u4EE5\u901A\u8FC7\u62D6\u52A8\u6539\u53D8\u5BBD\u5EA6\uFF08\u9700\u8981\u5728 el-table \u4E0A\u8BBE\u7F6E border \u5C5E\u6027\u4E3A\u771F\uFF09| boolean| true |
| formatter| \u7528\u6765\u683C\u5F0F\u5316\u5185\u5BB9| function| \u2014 |
| show-overflow-tooltip| \u5F53\u5185\u5BB9\u8FC7\u957F\u88AB\u9690\u85CF\u65F6\u663E\u793A tooltip| boolean / object 2.2.28| undefined |
| align| \u5BF9\u9F50\u65B9\u5F0F| enum| left |
| header-align| \u8868\u5934\u5BF9\u9F50\u65B9\u5F0F\uFF0C \u82E5\u4E0D\u8BBE\u7F6E\u8BE5\u9879\uFF0C\u5219\u4F7F\u7528\u8868\u683C\u7684\u5BF9\u9F50\u65B9\u5F0F| enum| left |
| class-name| \u5217\u7684 className| string| \u2014 |
| label-class-name| \u5F53\u524D\u5217\u6807\u9898\u7684\u81EA\u5B9A\u4E49\u7C7B\u540D| string| \u2014 |
| selectable| \u4EC5\u5BF9 type=selection \u7684\u5217\u6709\u6548\uFF0C\u7C7B\u578B\u4E3A Function\uFF0CFunction \u7684\u8FD4\u56DE\u503C\u7528\u6765\u51B3\u5B9A\u8FD9\u4E00\u884C\u7684 CheckBox \u662F\u5426\u53EF\u4EE5\u52FE\u9009| Function| \u2014 |
| reserve-selection| \u6570\u636E\u5237\u65B0\u540E\u662F\u5426\u4FDD\u7559\u9009\u9879\uFF0C\u4EC5\u5BF9  type=selection \u7684\u5217\u6709\u6548\uFF0C \u8BF7\u6CE8\u610F\uFF0C \u9700\u6307\u5B9A row-key \u6765\u8BA9\u8FD9\u4E2A\u529F\u80FD\u751F\u6548\u3002| boolean| false |
| filters| \u6570\u636E\u8FC7\u6EE4\u7684\u9009\u9879\uFF0C \u6570\u7EC4\u683C\u5F0F\uFF0C\u6570\u7EC4\u4E2D\u7684\u5143\u7D20\u9700\u8981\u6709 text \u548C value \u5C5E\u6027\u3002 \u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A\u5143\u7D20\u90FD\u9700\u8981\u6709 text \u548C value \u5C5E\u6027\u3002| object| \u2014 |
| filter-placement| \u8FC7\u6EE4\u5F39\u51FA\u6846\u7684\u5B9A\u4F4D| enum| \u2014 |
| filter-class-name 2.5.0| \u8FC7\u6EE4\u5F39\u51FA\u6846\u7684 className| string| \u2014 |
| filter-multiple| \u6570\u636E\u8FC7\u6EE4\u7684\u9009\u9879\u662F\u5426\u591A\u9009| boolean| true |
| filter-method| \u6570\u636E\u8FC7\u6EE4\u4F7F\u7528\u7684\u65B9\u6CD5\uFF0C \u5982\u679C\u662F\u591A\u9009\u7684\u7B5B\u9009\u9879\uFF0C\u5BF9\u6BCF\u4E00\u6761\u6570\u636E\u4F1A\u6267\u884C\u591A\u6B21\uFF0C\u4EFB\u610F\u4E00\u6B21\u8FD4\u56DE true \u5C31\u4F1A\u663E\u793A\u3002| function| \u2014 |
| filtered-value| \u9009\u4E2D\u7684\u6570\u636E\u8FC7\u6EE4\u9879\uFF0C\u5982\u679C\u9700\u8981\u81EA\u5B9A\u4E49\u8868\u5934\u8FC7\u6EE4\u7684\u6E32\u67D3\u65B9\u5F0F\uFF0C\u53EF\u80FD\u4F1A\u9700\u8981\u6B64\u5C5E\u6027\u3002| object| \u2014 |

#### Table-column \u63D2\u69FD

| \u63D2\u69FD\u540D| \u8BF4\u660E| \u7C7B\u578B |
| :--- | :--- | :--- |
| default| \u81EA\u5B9A\u4E49\u5217\u7684\u5185\u5BB9| object |
| header| \u81EA\u5B9A\u4E49\u8868\u5934\u7684\u5185\u5BB9\uFF0C| object |

#### Type Declarations

#### \u5E38\u89C1\u95EE\u9898\u89E3\u7B54\uFF08FAQ\uFF09

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-tag":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/tag.html)

#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4 |
| :--- | :--- | :--- | :--- |
| type| Tag \u7684\u7C7B\u578B| enum| primary |
| closable| \u662F\u5426\u53EF\u5173\u95ED| boolean| false |
| disable-transitions| \u662F\u5426\u7981\u7528\u6E10\u53D8\u52A8\u753B| boolean| false |
| hit| \u662F\u5426\u6709\u8FB9\u6846\u63CF\u8FB9| boolean| false |
| color| \u80CC\u666F\u8272| string| \u2014 |
| size| Tag \u7684\u5C3A\u5BF8| enum| \u2014 |
| effect| Tag \u7684\u4E3B\u9898| enum| light |
| round| Tag \u662F\u5426\u4E3A\u5706\u5F62| boolean| false |
#### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D| \u8BF4\u660E| Type |
| :--- | :--- | :--- |
| click| \u70B9\u51FB Tag \u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6| Function |
| close| \u5173\u95ED Tag \u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6| Function |

#### Tag Slots

| \u540D\u79F0| \u8BF4\u660E |
| :--- | :--- |
| default| \u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9 |
`,"el-check-tag":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/tag.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4 |
| :--- | :--- | :--- | :--- |
| checked / v-model:checked| \u662F\u5426\u9009\u4E2D| boolean| false |
| type 2.5.4| CheckTag \u7C7B\u578B| enum| primary |
#### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D| \u8BF4\u660E| \u7C7B\u578B |
| :--- | :--- | :--- |
| change| \u70B9\u51FB Check Tag \u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6| Function |

#### CheckTag Slots

| \u540D\u79F0| \u8BF4\u660E |
| :--- | :--- |
| default| \u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9 |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-timeline":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/timeline.html)


#### Timeline Slots

| \u63D2\u69FD\u540D| \u8BF4\u660E| \u5B50\u6807\u7B7E |
| :--- | :--- | :--- |
| default| timeline \u7EC4\u4EF6\u7684\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9| Timeline-Item |
`,"el-timeline--item":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/timeline.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| timestamp| \u65F6\u95F4\u6233| string| '' |
| hide-timestamp| \u662F\u5426\u9690\u85CF\u65F6\u95F4\u6233| boolean| false |
| center| \u662F\u5426\u5782\u76F4\u5C45\u4E2D| boolean| false |
| placement| \u65F6\u95F4\u6233\u4F4D\u7F6E| enum| bottom |
| type| \u8282\u70B9\u7C7B\u578B| enum| '' |
| color| \u8282\u70B9\u989C\u8272| enum| '' |
| size| \u8282\u70B9\u5C3A\u5BF8| enum| normal |
| icon| \u81EA\u5B9A\u4E49\u56FE\u6807| string / Component| \u2014 |
| hollow| \u662F\u5426\u7A7A\u5FC3\u70B9| boolean| false |

#### Timeline-Item Slots

| \u63D2\u69FD\u540D| \u8BF4\u660E |
| :--- | :--- |
| default| customize default content for timeline item |
| dot| customize defined node for timeline item |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-tour":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/tour.html)

#### \u5C5E\u6027

| \u5C5E\u6027| \u63CF\u8FF0| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| show-arrow| \u662F\u5426\u663E\u793A\u7BAD\u5934| boolean| true |
| placement| \u5F15\u5BFC\u5361\u7247\u76F8\u5BF9\u4E8E\u76EE\u6807\u5143\u7D20\u7684\u4F4D\u7F6E| enum| bottom |
| content-style| \u4E3Acontent\u81EA\u5B9A\u4E49\u6837\u5F0F| CSSProperties| - |
| mask| \u662F\u5426\u542F\u7528\u906E\u7F69\uFF0C\u901A\u8FC7\u81EA\u5B9A\u4E49\u5C5E\u6027\u6539\u53D8\u906E\u7F69\u6837\u5F0F\u4EE5\u53CA\u586B\u5145\u7684\u989C\u8272| boolean | Object| true |
| type| \u7C7B\u578B\uFF0C\u5F71\u54CD\u5E95\u8272\u4E0E\u6587\u5B57\u989C\u8272| default | primary| default |
| model-value / v-model| \u6253\u5F00\u5F15\u5BFC| boolean| * |
| current / v-model:current| \u5F53\u524D\u503C| number| - |
| scroll-into-view-options| \u662F\u5426\u652F\u6301\u5F53\u524D\u5143\u7D20\u6EDA\u52A8\u5230\u89C6\u7A97\u5185\uFF0C\u4E5F\u53EF\u4F20\u5165\u914D\u7F6E\u6307\u5B9A\u6EDA\u52A8\u89C6\u7A97\u7684\u76F8\u5173\u53C2\u6570| boolean | ScrollIntoViewOptions| Object |
| z-index| Tour \u7684\u5C42\u7EA7| number| 2001 |
| show-close| \u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE| boolean| true |
| close-icon| \u81EA\u5B9A\u4E49\u5173\u95ED\u56FE\u6807\uFF0C\u9ED8\u8BA4Close| string | Component| * |
| close-on-press-escape| \u662F\u5426\u53EF\u4EE5\u901A\u8FC7\u6309\u4E0B ESC \u5173\u95ED\u5F15\u5BFC| boolean| true |
| target-area-clickable| \u542F\u7528\u8499\u5C42\u65F6\uFF0Ctarget \u5143\u7D20\u533A\u57DF\u662F\u5426\u53EF\u4EE5\u70B9\u51FB\u3002| boolean| true |

#### Tour \u63D2\u69FD

| \u63D2\u69FD\u540D| \u8BF4\u660E |
| :--- | :--- |
| default| tourStep \u7EC4\u4EF6\u5217\u8868 |
| indicators| \u81EA\u5B9A\u4E49\u6307\u793A\u5668, scope \u53C2\u6570\u662F { current, total } |
#### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D| \u63CF\u8FF0| \u7C7B\u578B |
| :--- | :--- | :--- |
| close| \u5173\u95ED\u5F15\u5BFC\u65F6\u7684\u56DE\u8C03\u51FD\u6570| Function |
| finish| \u5F15\u5BFC\u5B8C\u6210\u65F6\u7684\u56DE\u8C03| Function |
| change| \u6B65\u9AA4\u6539\u53D8\u65F6\u7684\u56DE\u8C03| Function |
#### \u5C5E\u6027

| \u5C5E\u6027| \u63CF\u8FF0| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| target| \u83B7\u53D6\u5F15\u5BFC\u5361\u7247\u6307\u5411\u7684\u5143\u7D20\uFF0C \u4E3A\u7A7A\u65F6\u5C45\u4E2D\u4E8E\u5C4F\u5E55\u3002 \u81EA2.5.2\u4EE5\u6765\u652F\u6301\u5B57\u7B26\u4E32\u548C\u51FD\u6570\u7C7B\u578B\u3002 \u5B57\u7B26\u4E32\u7C7B\u578B\u662F\u6587\u6863.querySelector\u7684\u9009\u62E9\u5668\u3002| HTMLElement | string | Function| - |
| show-arrow| \u662F\u5426\u663E\u793A\u7BAD\u5934| boolean| true |
| title| \u6807\u9898| string| * |
| description| \u4E3B\u8981\u63CF\u8FF0\u90E8\u5206| string| - |
| placement| \u5F15\u5BFC\u5361\u7247\u76F8\u5BF9\u4E8E\u76EE\u6807\u5143\u7D20\u7684\u4F4D\u7F6E| enum| bottom |
| content-style| \u4E3Acontent\u81EA\u5B9A\u4E49\u6837\u5F0F| CSSProperties| * |
| mask| \u662F\u5426\u542F\u7528\u8499\u5C42\uFF0C\u4E5F\u53EF\u4F20\u5165\u914D\u7F6E\u6539\u53D8\u8499\u5C42\u6837\u5F0F\u548C\u586B\u5145\u8272| boolean | Object| true |
| type| \u7C7B\u578B\uFF0C\u5F71\u54CD\u5E95\u8272\u4E0E\u6587\u5B57\u989C\u8272| default | primary| default |
| next-button-props| \u201C\u4E0B\u4E00\u6B65\u201D\u6309\u94AE\u7684\u5C5E\u6027| Object| - |
| prev-button-props| \u201C\u4E0A\u4E00\u6B65\u201D\u6309\u94AE\u7684\u5C5E\u6027| Object| * |
| scroll-into-view-options| \u662F\u5426\u652F\u6301\u5F53\u524D\u5143\u7D20\u6EDA\u52A8\u5230\u89C6\u7A97\u5185\uFF0C\u4E5F\u53EF\u4F20\u5165\u914D\u7F6E\u6307\u5B9A\u6EDA\u52A8\u89C6\u7A97\u7684\u76F8\u5173\u53C2\u6570\uFF0C\u9ED8\u8BA4\u8DDF\u968F Tour \u7684 scrollIntoViewOptions \u5C5E\u6027| boolean | ScrollIntoViewOptions| - |
| show-close| \u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE| boolean| true |
| close-icon| \u81EA\u5B9A\u4E49\u5173\u95ED\u56FE\u6807\uFF0C\u9ED8\u8BA4Close| string | Component| * |

#### TourStep \u63D2\u69FD

| \u63D2\u69FD\u540D| \u63CF\u8FF0 |
| :--- | :--- |
| default| \u4E3B\u8981\u63CF\u8FF0\u90E8\u5206 |
| header| \u5934\u90E8 |
#### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D| \u63CF\u8FF0| \u53C2\u6570 |
| :--- | :--- | :--- |
| close| \u5173\u95ED\u5F15\u5BFC\u65F6\u7684\u56DE\u8C03\u51FD\u6570| Function |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-tree-select":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/tree-select.html)
#### \u5C5E\u6027

| \u5C5E\u6027| \u65B9\u6CD5| \u4E8B\u4EF6| \u63D2\u69FD |
| :--- | :--- | :--- | :--- |
| tree| tree| tree| tree |
| select| select| select| select |
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BE6\u60C5| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| cacheData 2.2.26| \u61D2\u52A0\u8F7D\u8282\u70B9\u7684\u7F13\u5B58\u6570\u636E\uFF0C\u7ED3\u6784\u4E0E\u6570\u636E\u76F8\u540C\uFF0C\u7528\u4E8E\u83B7\u53D6\u672A\u52A0\u8F7D\u6570\u636E\u7684\u6807\u7B7E| object| [] |

#### \u7C7B\u578B\u58F0\u660E

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-statistic":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/statistic.html)

#### \u5C5E\u6027

| Attribute| \u63CF\u8FF0| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| value| \u6570\u5B57\u5185\u5BB9| number| 0 |
| decimal-separator| \u8BBE\u7F6E\u5C0F\u6570\u70B9\u7B26\u53F7| string| . |
| formatter| \u81EA\u5B9A\u4E49\u6570\u5B57\u683C\u5F0F\u5316| Function| \u2014 |
| group-separator| \u8BBE\u7F6E\u5343\u5206\u4F4D\u6807\u8BC6\u7B26| string| , |
| precision| \u6570\u5B57\u7CBE\u5EA6| number| 0 |
| prefix| \u8BBE\u7F6E\u6570\u5B57\u7684\u524D\u7F00| string| \u2014 |
| suffix| \u8BBE\u7F6E\u6570\u5B57\u7684\u540E\u7F00| string| \u2014 |
| title| \u6570\u5B57\u6807\u9898| string| \u2014 |
| value-style| \u6570\u5B57\u6837\u5F0F| string / object| \u2014 |

#### Statistic \u63D2\u69FD

| \u63D2\u69FD\u540D| \u8BE6\u60C5 |
| :--- | :--- |
| prefix| \u6570\u5B57\u533A\u4E4B\u524D |
| suffix| \u6570\u5B57\u533A\u4E4B\u540E |
| title| \u6570\u5B57\u6807\u9898 |

#### Statistic Exposes

| \u540D\u79F0| \u63CF\u8FF0| \u7C7B\u578B |
| :--- | :--- | :--- |
| displayValue| \u5F53\u524D\u663E\u793A\u503C| object |
`,"el-countdown":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/statistic.html)
#### \u5C5E\u6027

| \u5C5E\u6027| \u8BE6\u60C5| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| value| \u76EE\u6807\u65F6\u95F4| number / Dayjs| \u2014 |
| format| \u683C\u5F0F\u5316\u5012\u8BA1\u65F6| string| HH:mm:ss |
| prefix| \u8BBE\u7F6E\u5012\u8BA1\u65F6\u524D\u7F00| string| \u2014 |
| suffix| \u8BBE\u7F6E\u5012\u8BA1\u65F6\u7684\u540E\u7F00| string| \u2014 |
| title| \u5012\u8BA1\u65F6\u6807\u9898| string| \u2014 |
| value-style| \u5012\u8BA1\u65F6\u503C\u7684\u6837\u5F0F| string / object| \u2014 |
#### \u4E8B\u4EF6

| \u65B9\u6CD5| \u63CF\u8FF0| \u7C7B\u578B |
| :--- | :--- | :--- |
| change| \u65F6\u95F4\u5DEE\u6539\u53D8\u4E8B\u4EF6| Function |
| finish| \u5012\u8BA1\u65F6\u7ED3\u675F\u4E8B\u4EF6| Function |

#### Countdown \u63D2\u69FD

| \u4E8B\u4EF6\u540D| \u63CF\u8FF0 |
| :--- | :--- |
| prefix| \u5012\u8BA1\u65F6\u503C\u524D\u7F00 |
| suffix| \u5012\u8BA1\u65F6\u540E\u7F00 |
| title| \u5012\u8BA1\u65F6\u6807\u9898 |

#### Countdown Exposes

| \u540D\u79F0| \u8BE6\u60C5| \u7C7B\u578B |
| :--- | :--- | :--- |
| displayValue| \u5F53\u524D\u663E\u793A\u503C| object |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-affix":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/affix.html)
#### \u5C5E\u6027

| \u540D\u79F0| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| offset| \u504F\u79FB\u8DDD\u79BB| number| 0 |
| position| \u56FA\u9489\u4F4D\u7F6E| enum| top |
| target| \u6307\u5B9A\u5BB9\u5668\uFF08CSS \u9009\u62E9\u5668\uFF09| string| \u2014 |
| z-index| z-index| number| 100 |
#### \u4E8B\u4EF6

| \u540D\u79F0| \u8BF4\u660E| \u7C7B\u578B |
| :--- | :--- | :--- |
| change| \u56FA\u9489\u72B6\u6001\u6539\u53D8\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6| Function |
| scroll| \u6EDA\u52A8\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6| Function |

#### \u63D2\u69FD

| \u63D2\u69FD\u540D| \u8BF4\u660E |
| :--- | :--- |
| default| \u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9 |

#### \u66B4\u9732

| \u540D\u79F0| \u8BF4\u660E| \u7C7B\u578B |
| :--- | :--- | :--- |
| update| \u624B\u52A8\u66F4\u65B0\u56FA\u9489\u72B6\u6001| Function |
| updateRoot| \u624B\u52A8\u66F4\u65B0\u6839\u5143\u7D20\u7684\u76D2\u6A21\u578B\u4FE1\u606F| Function |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-anchor":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/anchor.html)

#### \u5C5E\u6027

| \u5C5E\u6027| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| container| \u6EDA\u52A8\u7684\u5BB9\u5668| string | HTMLElement | Window | \u2014 |
| offset| \u8BBE\u7F6E\u951A\u70B9\u6EDA\u52A8\u7684\u504F\u79FB\u91CF| number| 0 |
| bound| \u89E6\u53D1\u951A\u70B9\u7684\u5143\u7D20\u7684\u4F4D\u7F6E\u504F\u79FB\u91CF| number| 15 |
| duration| \u8BBE\u7F6E\u5BB9\u5668\u6EDA\u52A8\u6301\u7EED\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\u6BEB\u79D2\u3002| number| 300 |
| marker| \u662F\u5426\u663E\u793A\u6807\u8BB0| boolean| true |
| type| \u8BBE\u7F6E\u951A\u70B9\u7C7B\u578B| enum| default |
| direction| \u8BBE\u7F6E\u951A\u70B9\u65B9\u5411| enum| vertical |
#### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D| \u8BF4\u660E| \u7C7B\u578B |
| :--- | :--- | :--- |
| change| step \u6539\u53D8\u65F6\u7684\u56DE\u8C03| Function |
| click| \u5F53\u7528\u6237\u70B9\u51FB\u94FE\u63A5\u65F6\u89E6\u53D1| Function |

| \u540D\u79F0| \u8BF4\u660E| \u7C7B\u578B |
| :--- | :--- | :--- |
| scrollTo| \u624B\u52A8\u6EDA\u52A8\u5230\u7279\u5B9A\u4F4D\u7F6E\u3002| Function |

#### Anchor Slots

| \u540D\u79F0| \u8BF4\u660E |
| :--- | :--- |
| default| AnchorLink \u7EC4\u4EF6\u5217\u8868 |
#### \u5C5E\u6027

| \u5C5E\u6027| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| title| \u94FE\u63A5\u7684\u6587\u672C\u5185\u5BB9\u3002| string| \u2014 |
| href| \u94FE\u63A5\u7684\u5730\u5740\u3002| string| - |

#### AnchorLink Slots

| \u540D\u79F0| \u8BF4\u660E |
| :--- | :--- |
| default| \u94FE\u63A5\u7684\u5185\u5BB9 |
| sub-link| \u5B50\u94FE\u63A5\u7684\u69FD\u4F4D\u3002 |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-backtop":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/backtop.html)
#### \u5C5E\u6027

| \u540D\u79F0| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| target| \u89E6\u53D1\u6EDA\u52A8\u7684\u5BF9\u8C61| string| \u2014 |
| visibility-height| \u6EDA\u52A8\u9AD8\u5EA6\u8FBE\u5230\u6B64\u53C2\u6570\u503C\u624D\u51FA\u73B0| number| 200 |
| right| \u63A7\u5236\u5176\u663E\u793A\u4F4D\u7F6E\uFF0C\u8DDD\u79BB\u9875\u9762\u53F3\u8FB9\u8DDD| number| 40 |
| bottom| \u63A7\u5236\u5176\u663E\u793A\u4F4D\u7F6E\uFF0C\u8DDD\u79BB\u9875\u9762\u5E95\u90E8\u8DDD\u79BB| number| 40 |
#### \u4E8B\u4EF6

| \u540D\u79F0| \u8BF4\u660E| \u56DE\u8C03\u53C2\u6570 |
| :--- | :--- | :--- |
| click| \u70B9\u51FB\u6309\u94AE\u89E6\u53D1\u7684\u4E8B\u4EF6| Function |

#### Slots

| \u63D2\u69FD\u540D| \u8BF4\u660E |
| :--- | :--- |
| default| \u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9 |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-breadcrumb":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/breadcrumb.html)

#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| separator| \u5206\u9694\u7B26| string| / |
| separator-icon| \u56FE\u6807\u5206\u9694\u7B26\u7684\u7EC4\u4EF6\u6216\u7EC4\u4EF6\u540D| string / Component| \u2014 |

#### Breadcrumb Slots

| \u63D2\u69FD\u540D| \u8BF4\u660E| \u5B50\u6807\u7B7E |
| :--- | :--- | :--- |
| default| \u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9| Breadcrumb Item |
`,"el-breadcrumb-item":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/breadcrumb.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| to| \u8DEF\u7531\u8DF3\u8F6C\u76EE\u6807\uFF0C\u540C vue-router \u7684 to \u5C5E\u6027| string / object| '' |
| replace| \u5982\u679C\u8BBE\u7F6E\u8BE5\u5C5E\u6027\u4E3A true, \u5BFC\u822A\u5C06\u4E0D\u4F1A\u7559\u4E0B\u5386\u53F2\u8BB0\u5F55| boolean| false |

#### BreadcrumbItem Slots

| \u63D2\u69FD\u540D| \u8BF4\u660E |
| :--- | :--- |
| default| \u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9 |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-dropdown":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/dropdown.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u53EF\u9009\u503C| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| type| \u83DC\u5355\u6309\u94AE\u7C7B\u578B\uFF0C\u540C Button \u7EC4\u4EF6\u4E00\u6837\uFF0C\u4EC5\u5728 split-button \u4E3A true \u7684\u60C5\u51B5\u4E0B\u6709\u6548\u3002| string| \u2014| \u2014 |
| size| \u83DC\u5355\u5C3A\u5BF8\uFF0C\u5728 split-button \u4E3A true \u7684\u60C5\u51B5\u4E0B\u4E5F\u5BF9\u89E6\u53D1\u6309\u94AE\u751F\u6548\u3002| string| large / default / small| default |
| max-height| \u83DC\u5355\u6700\u5927\u9AD8\u5EA6| string / number| \u2014| \u2014 |
| split-button| \u4E0B\u62C9\u89E6\u53D1\u5143\u7D20\u5448\u73B0\u4E3A\u6309\u94AE\u7EC4| boolean| \u2014| false |
| disabled| \u662F\u5426\u7981\u7528| boolean| \u2014| false |
| placement| \u83DC\u5355\u5F39\u51FA\u4F4D\u7F6E| string| top/top-start/top-end/bottom/bottom-start/bottom-end| bottom |
| trigger| \u89E6\u53D1\u4E0B\u62C9\u7684\u884C\u4E3A| string| hover/click/contextmenu| hover |
| hide-on-click| \u662F\u5426\u5728\u70B9\u51FB\u83DC\u5355\u9879\u540E\u9690\u85CF\u83DC\u5355| boolean| \u2014| true |
| show-timeout| \u5C55\u5F00\u4E0B\u62C9\u83DC\u5355\u7684\u5EF6\u65F6\uFF0C\u4EC5\u5728 trigger \u4E3A hover \u65F6\u6709\u6548| number| \u2014| 250 |
| hide-timeout| \u6536\u8D77\u4E0B\u62C9\u83DC\u5355\u7684\u5EF6\u65F6\uFF08\u4EC5\u5728 trigger \u4E3A hover \u65F6\u6709\u6548\uFF09| number| \u2014| 150 |
| role| \u4E0B\u62C9\u83DC\u5355\u7684 ARIA \u5C5E\u6027\u3002 \u6839\u636E\u5177\u4F53\u573A\u666F\uFF0C\u60A8\u53EF\u80FD\u60F3\u8981\u5C06\u6B64\u66F4\u6539\u4E3A\u201Cnavigation\u201D| string| \u2014| 'menu' |
| tabindex| Dropdown \u7EC4\u4EF6\u7684 tabindex| number| \u2014| 0 |
| popper-class| \u81EA\u5B9A\u4E49\u6D6E\u5C42\u7C7B\u540D| string| \u2014| \u2014 |
| popper-options| popper.js \u53C2\u6570| Object| \u8BF7\u53C2\u8003 popper.js \u6587\u6863| {modifiers: [{name: 'computeStyles',options: {gpuAcceleration: false}}]} |
| teleported 2.2.20| \u662F\u5426\u5C06\u4E0B\u62C9\u5217\u8868\u63D2\u5165\u81F3 body \u5143\u7D20| boolean| \u2014| true |

#### Dropdown \u63D2\u69FD

| \u63D2\u69FD\u540D| \u8BF4\u660E| \u5B50\u6807\u7B7E |
| :--- | :--- | :--- |
| \u2014| \u4E0B\u62C9\u83DC\u5355\u7684\u5185\u5BB9\u3002 \u6CE8\u610F\uFF1A\u5FC5\u987B\u662F\u6709\u6548\u7684 html DOM \u5143\u7D20\uFF08\u4F8B\u5982 <span>\u3001<button> \u7B49\uFF09\u6216 el-component\uFF0C\u4EE5\u9644\u52A0\u76D1\u542C\u89E6\u53D1\u5668| \u2014 |
| dropdown| \u4E0B\u62C9\u5217\u8868\uFF0C\u901A\u5E38\u662F <el-dropdown-menu> \u7EC4\u4EF6| Dropdown-Menu |
#### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D| \u8BF4\u660E| \u53C2\u6570 |
| :--- | :--- | :--- |
| click| split-button \u4E3A true \u65F6\uFF0C\u70B9\u51FB\u5DE6\u4FA7\u6309\u94AE\u7684\u56DE\u8C03| \u2014 |
| command| \u70B9\u51FB\u83DC\u5355\u9879\u89E6\u53D1\u7684\u4E8B\u4EF6\u56DE\u8C03| dropdown-item \u7684\u6307\u4EE4 |
| visible-change| \u4E0B\u62C9\u6846\u51FA\u73B0/\u9690\u85CF\u65F6\u89E6\u53D1| \u51FA\u73B0\u5219\u4E3A true\uFF0C\u9690\u85CF\u5219\u4E3A false |

| \u65B9\u6CD5\u540D| \u8BF4\u660E| \u53C2\u6570 |
| :--- | :--- | :--- |
| handleOpen| \u6253\u5F00\u4E0B\u62C9\u83DC\u5355| \u2014 |
| handleClose| \u5173\u95ED\u4E0B\u62C9\u83DC\u5355| \u2014 |

#### Dropdown-Menu Slots

| \u63D2\u69FD\u540D| \u8BF4\u660E| \u5B50\u6807\u7B7E |
| :--- | :--- | :--- |
| \u2014| \u4E0B\u62C9\u83DC\u5355\u7684\u5185\u5BB9| Dropdown-Item |
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u53EF\u9009\u503C| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| command| \u6D3E\u53D1\u5230command\u56DE\u8C03\u51FD\u6570\u7684\u6307\u4EE4\u53C2\u6570| string/number/object| \u2014| \u2014 |
| disabled| \u662F\u5426\u7981\u7528| boolean| \u2014| false |
| divided| \u662F\u5426\u663E\u793A\u5206\u9694\u7B26| boolean| \u2014| false |
| icon| \u81EA\u5B9A\u4E49\u56FE\u6807| string | Component| \u2014| \u2014 |

#### Dropdown-Item Slots

| \u63D2\u69FD\u540D| \u8BF4\u660E |
| :--- | :--- |
| \u2014| \u81EA\u5B9A\u4E49Dropdown-Item\u5185\u5BB9 |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-menu":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/menu.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u53EF\u9009\u503C| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| mode| \u83DC\u5355\u5C55\u793A\u6A21\u5F0F| string| horizontal / vertical| vertical |
| collapse| \u662F\u5426\u6C34\u5E73\u6298\u53E0\u6536\u8D77\u83DC\u5355\uFF08\u4EC5\u5728 mode \u4E3A vertical \u65F6\u53EF\u7528\uFF09| boolean| \u2014| false |
| ellipsis| \u662F\u5426\u7701\u7565\u591A\u4F59\u7684\u5B50\u9879\uFF08\u4EC5\u5728\u6A2A\u5411\u6A21\u5F0F\u751F\u6548\uFF09| boolean| \u2014| true |
| ellipsis-icon 2.4.4| \u81EA\u5B9A\u4E49\u7701\u7565\u56FE\u6807 (\u4EC5\u5728\u6C34\u5E73\u6A21\u5F0F\u4E0B\u53EF\u7528)| string | Component| \u2014| \u2014 |
| popper-offset 2.4.4| \u5F39\u51FA\u5C42\u7684\u504F\u79FB\u91CF(\u5BF9\u6240\u6709\u5B50\u83DC\u5355\u6709\u6548)| number| \u2014| 6 |
| background-color| \u83DC\u5355\u7684\u80CC\u666F\u989C\u8272\uFF08\u5341\u516D\u8FDB\u5236\u683C\u5F0F\uFF09\uFF08\u5DF2\u88AB\u5E9F\u5F03\uFF0C\u4F7F\u7528--bg-color\uFF09| string| \u2014| #ffffff |
| text-color| \u6587\u5B57\u989C\u8272\uFF08\u5341\u516D\u8FDB\u5236\u683C\u5F0F\uFF09\uFF08\u5DF2\u88AB\u5E9F\u5F03\uFF0C\u4F7F\u7528--text-color\uFF09| string| \u2014| #303133 |
| active-text-color| \u6D3B\u52A8\u83DC\u5355\u9879\u7684\u6587\u672C\u989C\u8272\uFF08\u5341\u516D\u8FDB\u5236\u683C\u5F0F\uFF09\uFF08\u5DF2\u88AB\u5E9F\u5F03\uFF0C\u4F7F\u7528--active-color\uFF09| string| \u2014| #409EFF |
| default-active| \u9875\u9762\u52A0\u8F7D\u65F6\u9ED8\u8BA4\u6FC0\u6D3B\u83DC\u5355\u7684 index| string| \u2014| \u2014 |
| default-openeds| \u9ED8\u8BA4\u6253\u5F00\u7684 sub-menu \u7684 index \u7684\u6570\u7EC4| Array| \u2014| \u2014 |
| unique-opened| \u662F\u5426\u53EA\u4FDD\u6301\u4E00\u4E2A\u5B50\u83DC\u5355\u7684\u5C55\u5F00| boolean| \u2014| false |
| menu-trigger| \u5B50\u83DC\u5355\u6253\u5F00\u7684\u89E6\u53D1\u65B9\u5F0F\uFF0C\u53EA\u5728 mode \u4E3A horizontal \u65F6\u6709\u6548\u3002| string| hover / click| hover |
| router| \u662F\u5426\u542F\u7528 vue-router \u6A21\u5F0F\u3002 \u542F\u7528\u8BE5\u6A21\u5F0F\u4F1A\u5728\u6FC0\u6D3B\u5BFC\u822A\u65F6\u4EE5 index \u4F5C\u4E3A path \u8FDB\u884C\u8DEF\u7531\u8DF3\u8F6C \u4F7F\u7528 default-active \u6765\u8BBE\u7F6E\u52A0\u8F7D\u65F6\u7684\u6FC0\u6D3B\u9879\u3002| boolean| \u2014| false |
| collapse-transition| \u662F\u5426\u5F00\u542F\u6298\u53E0\u52A8\u753B| boolean| \u2014| true |
| popper-effect 2.2.26| Tooltip \u4E3B\u9898\uFF0C\u5185\u7F6E\u4E86 dark / light \u4E24\u79CD\u4E3B\u9898| string| dark / light| dark |
| close-on-click-outside 2.4.4| \u53EF\u9009\uFF0C\u5355\u51FB\u5916\u90E8\u65F6\u662F\u5426\u6298\u53E0\u83DC\u5355| boolean| \u2014| false |
| popper-class 2.5.0| \u4E3A popper \u6DFB\u52A0\u7C7B\u540D| string| \u2014| \u2014 |
| show-timeout 2.5.0| \u83DC\u5355\u51FA\u73B0\u524D\u7684\u5EF6\u8FDF| number| \u2014| 300 |
| hide-timeout 2.5.0| \u83DC\u5355\u6D88\u5931\u524D\u7684\u5EF6\u8FDF| number| \u2014| 300 |

| \u65B9\u6CD5\u540D| \u8BF4\u660E| \u53C2\u6570 |
| :--- | :--- | :--- |
| open| \u5C55\u5F00\u6307\u5B9A\u7684 sub-menu| index: \u9700\u8981\u6253\u5F00\u7684 sub-menu \u7684 index |
| close| \u6536\u8D77\u6307\u5B9A\u7684 sub-menu| index: \u9700\u8981\u6536\u8D77\u7684 sub-menu \u7684 index |
#### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D| \u8BF4\u660E| \u56DE\u8C03\u53C2\u6570 |
| :--- | :--- | :--- |
| select| \u83DC\u5355\u6FC0\u6D3B\u56DE\u8C03| index: \u9009\u4E2D\u83DC\u5355\u9879\u7684 index, indexPath: \u9009\u4E2D\u83DC\u5355\u9879\u7684 index path, item: \u9009\u4E2D\u83DC\u5355\u9879, routeResult: vue-router \u7684\u8FD4\u56DE\u503C\uFF08\u5982\u679C router \u4E3A true\uFF09 |
| open| sub-menu \u5C55\u5F00\u7684\u56DE\u8C03| index: \u6253\u5F00\u7684 sub-menu \u7684 index, indexPath: \u6253\u5F00\u7684 sub-menu \u7684 index path |
| close| sub-menu \u6536\u8D77\u7684\u56DE\u8C03| index: \u6536\u8D77\u7684 sub-menu \u7684 index, indexPath: \u6536\u8D77\u7684 sub-menu \u7684 index path |

#### Menu Slots

| \u63D2\u69FD\u540D| \u8BF4\u660E| \u5B50\u6807\u7B7E |
| :--- | :--- | :--- |
| \u2014| \u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9| SubMenu / Menu-Item / Menu-Item-Group |
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u53EF\u9009\u503C| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| index| \u552F\u4E00\u6807\u5FD7| string| \u2014| \u2014 |
| popper-class| \u4E3A popper \u6DFB\u52A0\u7C7B\u540D| string| \u2014| \u2014 |
| show-timeout| \u5B50\u83DC\u5355\u51FA\u73B0\u4E4B\u524D\u7684\u5EF6\u8FDF\uFF0C(\u7EE7\u627F menu \u7684 show-timeout \u914D\u7F6E)| number| \u2014| \u2014 |
| hide-timeout| \u5B50\u83DC\u5355\u6D88\u5931\u4E4B\u524D\u7684\u5EF6\u8FDF\uFF0C(\u7EE7\u627F menu \u7684 hide-timeout \u914D\u7F6E)| number| \u2014| \u2014 |
| disabled| \u662F\u5426\u7981\u7528| boolean| \u2014| false |
| popper-append-to-body deprecated| \u662F\u5426\u5C06\u5F39\u51FA\u83DC\u5355\u63D2\u5165\u81F3 body \u5143\u7D20\u3002 \u5728\u83DC\u5355\u7684\u5B9A\u4F4D\u51FA\u73B0\u95EE\u9898\u65F6\uFF0C\u53EF\u5C1D\u8BD5\u4FEE\u6539\u8BE5\u5C5E\u6027| boolean| \u2014| \u4E00\u7EA7\u5B50\u83DC\u5355\uFF1Atrue / \u975E\u4E00\u7EA7\u5B50\u83DC\u5355\uFF1Afalse |
| teleported| \u662F\u5426\u5C06 popup \u7684\u4E0B\u62C9\u5217\u8868\u63D2\u5165\u81F3 body \u5143\u7D20| boolean| \u2014| \u4E00\u7EA7\u5B50\u83DC\u5355\uFF1Atrue / \u975E\u4E00\u7EA7\u5B50\u83DC\u5355\uFF1Afalse |
| popper-offset| \u5F39\u51FA\u7A97\u53E3\u7684\u504F\u79FB\u91CF (\u8986\u76D6 popper\u7684\u83DC\u5355)| number| \u2014| \u2014 |
| expand-close-icon| \u7236\u83DC\u5355\u5C55\u5F00\u4E14\u5B50\u83DC\u5355\u5173\u95ED\u65F6\u7684\u56FE\u6807\uFF0C expand-close-icon \u548C expand-open-icon \u9700\u8981\u4E00\u8D77\u914D\u7F6E\u624D\u80FD\u751F\u6548| string | Component| \u2014| \u2014 |
| expand-open-icon| \u7236\u83DC\u5355\u5C55\u5F00\u4E14\u5B50\u83DC\u5355\u6253\u5F00\u65F6\u7684\u56FE\u6807\uFF0C expand-open-icon \u548C expand-close-icon \u9700\u8981\u4E00\u8D77\u914D\u7F6E\u624D\u80FD\u751F\u6548| string | Component| \u2014| \u2014 |
| collapse-close-icon| \u7236\u83DC\u5355\u6536\u8D77\u4E14\u5B50\u83DC\u5355\u5173\u95ED\u65F6\u7684\u56FE\u6807\uFF0C expand-close-icon \u548C expand-open-icon \u9700\u8981\u4E00\u8D77\u914D\u7F6E\u624D\u80FD\u751F\u6548| string | Component| \u2014| \u2014 |
| collapse-open-icon| \u7236\u83DC\u5355\u6536\u8D77\u4E14\u5B50\u83DC\u5355\u6253\u5F00\u65F6\u7684\u56FE\u6807\uFF0C expand-open-icon \u548C expand-close-icon \u9700\u8981\u4E00\u8D77\u914D\u7F6E\u624D\u80FD\u751F\u6548| string | Component| \u2014| \u2014 |

#### SubMenu Slots

| \u63D2\u69FD\u540D| \u8BF4\u660E| \u5B50\u6807\u7B7E |
| :--- | :--- | :--- |
| \u2014| \u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9| SubMenu / Menu-Item / Menu-Item-Group |
| title| \u81EA\u5B9A\u4E49\u6807\u9898\u5185\u5BB9| \u2014 |
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u53EF\u9009\u503C| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| index| \u552F\u4E00\u6807\u5FD7| string/null| \u2014| null |
| route| Vue Router \u8DEF\u5F84\u5BF9\u8C61| object| \u2014| \u2014 |
| disabled| \u662F\u5426\u7981\u7528| boolean| \u2014| false |
#### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D| \u8BF4\u660E| \u56DE\u8C03\u53C2\u6570 |
| :--- | :--- | :--- |
| click| \u83DC\u5355\u70B9\u51FB\u65F6\u7684\u56DE\u8C03\u51FD\u6570| el-menu-item \u5B9E\u4F8B |

#### Menu-Item Slots

| \u63D2\u69FD\u540D| \u8BF4\u660E |
| :--- | :--- |
| \u2014| \u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9 |
| title| \u81EA\u5B9A\u4E49\u6807\u9898\u5185\u5BB9 |
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u53EF\u9009\u503C| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| title| \u7EC4\u6807\u9898| string| \u2014| \u2014 |

#### Menu-Item-Group Slots

| \u63D2\u69FD\u540D| \u8BF4\u660E| \u5B50\u6807\u7B7E |
| :--- | :--- | :--- |
| \u2014| \u9ED8\u8BA4\u63D2\u69FD\u5185\u5BB9| Menu-Item |
| title| \u81EA\u5B9A\u4E49\u7EC4\u6807\u9898\u5185\u5BB9| \u2014 |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-page-header":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/page-header.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4 |
| :--- | :--- | :--- | :--- |
| icon| Page Header \u7684\u56FE\u6807 Icon \u7EC4\u4EF6| string / Component| Back |
| title| Page Header \u7684\u4E3B\u6807\u9898\uFF0C\u9ED8\u8BA4\u662F Back (\u5185\u7F6E a11y)| string| '' |
| content| Page Header \u7684\u5185\u5BB9| string| '' |
#### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D| \u8BF4\u660E| \u7C7B\u578B |
| :--- | :--- | :--- |
| back| \u70B9\u51FB\u5DE6\u4FA7\u533A\u57DF\u89E6\u53D1| Function |

#### \u63D2\u69FD

| \u540D\u79F0| \u8BF4\u660E |
| :--- | :--- |
| icon| \u56FE\u6807\u5185\u5BB9 |
| title| \u6807\u9898\u5185\u5BB9 |
| content| \u5185\u5BB9 |
| extra| \u6269\u5C55\u8BBE\u7F6E |
| breadcrumb| \u9762\u5305\u5C51\u5BFC\u822A\u5185\u5BB9 |
| default| \u9ED8\u8BA4\u5185\u5BB9 |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-steps":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/steps.html)

#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4 |
| :--- | :--- | :--- | :--- |
| space| \u6BCF\u4E2A step \u7684\u95F4\u8DDD\uFF0C\u4E0D\u586B\u5199\u5C06\u81EA\u9002\u5E94\u95F4\u8DDD\u3002 \u652F\u6301\u767E\u5206\u6BD4\u3002| number / string| '' |
| direction| \u663E\u793A\u65B9\u5411| enum| horizontal |
| active| \u8BBE\u7F6E\u5F53\u524D\u6FC0\u6D3B\u6B65\u9AA4| number| 0 |
| process-status| \u8BBE\u7F6E\u5F53\u524D\u6B65\u9AA4\u7684\u72B6\u6001| enum| process |
| finish-status| \u8BBE\u7F6E\u7ED3\u675F\u6B65\u9AA4\u7684\u72B6\u6001| enum| finish |
| align-center| \u8FDB\u884C\u5C45\u4E2D\u5BF9\u9F50| boolean| \u2014 |
| simple| \u662F\u5426\u5E94\u7528\u7B80\u6D01\u98CE\u683C| boolean| \u2014 |

#### Steps \u63D2\u69FD

| \u63D2\u69FD\u540D| \u8BF4\u660E| \u5B50\u6807\u7B7E |
| :--- | :--- | :--- |
| default| \u9ED8\u8BA4\u63D2\u69FD| Step |
`,"el-step":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/steps.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4 |
| :--- | :--- | :--- | :--- |
| title| \u6807\u9898| string| '' |
| description| \u63CF\u8FF0\u6587\u6848| string| '' |
| icon| Step \u7EC4\u4EF6\u7684\u81EA\u5B9A\u4E49\u56FE\u6807\u3002 \u4E5F\u652F\u6301 slot \u65B9\u5F0F\u5199\u5165| string / Component| \u2014 |
| status| \u8BBE\u7F6E\u5F53\u524D\u6B65\u9AA4\u7684\u72B6\u6001\uFF0C \u4E0D\u8BBE\u7F6E\u5219\u6839\u636E steps \u786E\u5B9A\u72B6\u6001| enum| '' |

#### Step \u63D2\u69FD

| \u63D2\u69FD\u540D| \u8BF4\u660E |
| :--- | :--- |
| icon| \u81EA\u5B9A\u4E49\u56FE\u6807 |
| title| \u81EA\u5B9A\u4E49\u6807\u9898 |
| description| \u81EA\u5B9A\u4E49\u63CF\u8FF0\u6587\u6848 |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-alert":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/alert.html)

#### \u5C5E\u6027

| \u540D\u79F0| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| title| Alert \u6807\u9898\u3002| string| \u2014 |
| type| Alert \u7C7B\u578B\u3002| enum| info |
| description| \u63CF\u8FF0\u6027\u6587\u672C| string| \u2014 |
| closable| \u662F\u5426\u53EF\u4EE5\u5173\u95ED| boolean| true |
| center| \u6587\u5B57\u662F\u5426\u5C45\u4E2D| boolean| false |
| close-text| \u81EA\u5B9A\u4E49\u5173\u95ED\u6309\u94AE\u6587\u672C| string| \u2014 |
| show-icon| \u662F\u5426\u663E\u793A\u7C7B\u578B\u56FE\u6807| boolean| false |
| effect| \u4E3B\u9898\u6837\u5F0F| enum| light |
#### \u4E8B\u4EF6

| \u540D\u79F0| \u63CF\u8FF0| \u7C7B\u578B |
| :--- | :--- | :--- |
| close| \u5173\u95ED Alert \u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6| Function |

#### Slots

| \u540D\u79F0| \u63CF\u8FF0 |
| :--- | :--- |
| default| Alert \u5185\u5BB9\u63CF\u8FF0 |
| title| \u6807\u9898\u7684\u5185\u5BB9 |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-dialog":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/dialog.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4 |
| :--- | :--- | :--- | :--- |
| model-value / v-model| \u662F\u5426\u663E\u793A Dialog| boolean| \u2014 |
| title| Dialog \u5BF9\u8BDD\u6846 Dialog \u7684\u6807\u9898\uFF0C \u4E5F\u53EF\u901A\u8FC7\u5177\u540D slot \uFF08\u89C1\u4E0B\u8868\uFF09\u4F20\u5165| string| '' |
| width| \u5BF9\u8BDD\u6846\u7684\u5BBD\u5EA6\uFF0C\u9ED8\u8BA4\u503C\u4E3A 50%| string / number| '' |
| fullscreen| \u662F\u5426\u4E3A\u5168\u5C4F Dialog| boolean| false |
| top| dialog CSS \u4E2D\u7684 margin-top \u503C\uFF0C\u9ED8\u8BA4\u4E3A 15vh| string| '' |
| modal| \u662F\u5426\u9700\u8981\u906E\u7F69\u5C42| boolean| true |
| modal-class| \u906E\u7F69\u7684\u81EA\u5B9A\u4E49\u7C7B\u540D| string| \u2014 |
| append-to-body| Dialog \u81EA\u8EAB\u662F\u5426\u63D2\u5165\u81F3 body \u5143\u7D20\u4E0A\u3002 \u5D4C\u5957\u7684 Dialog \u5FC5\u987B\u6307\u5B9A\u8BE5\u5C5E\u6027\u5E76\u8D4B\u503C\u4E3A true| boolean| false |
| append-to 2.4.3| Dialog \u6302\u8F7D\u5230\u54EA\u4E2A DOM \u5143\u7D20 \u5C06\u8986\u76D6 append-to-body| string| body |
| lock-scroll| \u662F\u5426\u5728 Dialog \u51FA\u73B0\u65F6\u5C06 body \u6EDA\u52A8\u9501\u5B9A| boolean| true |
| custom-class deprecated| Dialog \u7684\u81EA\u5B9A\u4E49\u7C7B\u540D| string| '' |
| open-delay| dialog \u6253\u5F00\u7684\u5EF6\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2| number| 0 |
| close-delay| drawer \u5173\u95ED\u7684\u5EF6\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2| number| 0 |
| close-on-click-modal| \u662F\u5426\u53EF\u4EE5\u901A\u8FC7\u70B9\u51FB modal \u5173\u95ED Dialog| boolean| true |
| close-on-press-escape| \u662F\u5426\u53EF\u4EE5\u901A\u8FC7\u6309\u4E0B ESC \u5173\u95ED Dialog| boolean| true |
| show-close| \u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE| boolean| true |
| before-close| \u5173\u95ED\u524D\u7684\u56DE\u8C03\uFF0C\u4F1A\u6682\u505C Dialog \u7684\u5173\u95ED. \u56DE\u8C03\u51FD\u6570\u5185\u6267\u884C done \u53C2\u6570\u65B9\u6CD5\u7684\u65F6\u5019\u624D\u662F\u771F\u6B63\u5173\u95ED\u5BF9\u8BDD\u6846\u7684\u65F6\u5019.| Function| \u2014 |
| draggable| \u4E3A Dialog \u542F\u7528\u53EF\u62D6\u62FD\u529F\u80FD| boolean| false |
| overflow 2.5.4| \u62D6\u52A8\u8303\u56F4\u53EF\u4EE5\u8D85\u51FA\u53EF\u89C6\u533A| boolean| false |
| center| \u662F\u5426\u8BA9 Dialog \u7684 header \u548C footer \u90E8\u5206\u5C45\u4E2D\u6392\u5217| boolean| false |
| align-center 2.2.16| \u662F\u5426\u6C34\u5E73\u5782\u76F4\u5BF9\u9F50\u5BF9\u8BDD\u6846| boolean| false |
| destroy-on-close| \u5F53\u5173\u95ED Dialog \u65F6\uFF0C\u9500\u6BC1\u5176\u4E2D\u7684\u5143\u7D20| boolean| false |
| close-icon| \u81EA\u5B9A\u4E49\u5173\u95ED\u56FE\u6807\uFF0C\u9ED8\u8BA4 Close| string / Component| \u2014 |
| z-index| \u548C\u539F\u751F\u7684 CSS \u7684 z-index \u76F8\u540C\uFF0C\u6539\u53D8 z \u8F74\u7684\u987A\u5E8F| number| \u2014 |
| header-aria-level a11y| header \u7684 aria-level \u5C5E\u6027| string| 2 |

#### Slots

| \u63D2\u69FD\u540D| \u8BF4\u660E |
| :--- | :--- |
| \u2014| Dialog \u7684\u5185\u5BB9 |
| header| \u5BF9\u8BDD\u6846\u6807\u9898\u7684\u5185\u5BB9\uFF1B\u4F1A\u66FF\u6362\u6807\u9898\u90E8\u5206\uFF0C\u4F46\u4E0D\u4F1A\u79FB\u9664\u5173\u95ED\u6309\u94AE\u3002 |
| title deprecated| \u4E0E header \u4F5C\u7528\u76F8\u540C \u8BF7\u4F7F\u7528 header |
| footer| Dialog \u6309\u94AE\u64CD\u4F5C\u533A\u7684\u5185\u5BB9 |
#### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D| \u8BF4\u660E| Type |
| :--- | :--- | :--- |
| open| Dialog \u6253\u5F00\u7684\u56DE\u8C03| Function |
| opened| Dialog \u6253\u5F00\u52A8\u753B\u7ED3\u675F\u65F6\u7684\u56DE\u8C03| Function |
| close| Dialog \u5173\u95ED\u7684\u56DE\u8C03| Function |
| closed| Dialog \u5173\u95ED\u52A8\u753B\u7ED3\u675F\u65F6\u7684\u56DE\u8C03| Function |
| open-auto-focus| \u8F93\u5165\u7126\u70B9\u805A\u7126\u5728 Dialog \u5185\u5BB9\u65F6\u7684\u56DE\u8C03| Function |
| close-auto-focus| \u8F93\u5165\u7126\u70B9\u4ECE Dialog \u5185\u5BB9\u5931\u7126\u65F6\u7684\u56DE\u8C03| Function |

#### FAQ

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-drawer":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/drawer.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| model-value / v-model| \u662F\u5426\u663E\u793A Drawer| boolean| false |
| append-to-body| Drawer \u81EA\u8EAB\u662F\u5426\u63D2\u5165\u81F3 body \u5143\u7D20\u4E0A\u3002\u5D4C\u5957\u7684 Drawer \u5FC5\u987B\u6307\u5B9A\u8BE5\u5C5E\u6027\u5E76\u8D4B\u503C\u4E3A true| boolean| false |
| lock-scroll| \u662F\u5426\u5728 Drawer \u51FA\u73B0\u65F6\u5C06 body \u6EDA\u52A8\u9501\u5B9A| boolean| true |
| before-close| \u5173\u95ED\u524D\u7684\u56DE\u8C03\uFF0C\u4F1A\u6682\u505C Drawer \u7684\u5173\u95ED| Function| \u2014 |
| close-on-click-modal| \u662F\u5426\u53EF\u4EE5\u901A\u8FC7\u70B9\u51FB modal \u5173\u95ED Drawer| boolean| true |
| close-on-press-escape| \u662F\u5426\u53EF\u4EE5\u901A\u8FC7\u6309\u4E0B ESC \u5173\u95ED Drawer| boolean| true |
| open-delay| Drawer \u6253\u5F00\u7684\u5EF6\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2| number| 0 |
| close-delay| Drawer \u5173\u95ED\u7684\u5EF6\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2| number| 0 |
| custom-class deprecated| Drawer \u7684\u81EA\u5B9A\u4E49\u7C7B\u540D| string| \u2014 |
| destroy-on-close| \u63A7\u5236\u662F\u5426\u5728\u5173\u95ED Drawer \u4E4B\u540E\u5C06\u5B50\u5143\u7D20\u5168\u90E8\u9500\u6BC1| boolean| false |
| modal| \u662F\u5426\u9700\u8981\u906E\u7F69\u5C42| boolean| true |
| direction| Drawer \u6253\u5F00\u7684\u65B9\u5411| enum| rtl |
| show-close| \u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE| boolean| true |
| size| Drawer \u7A97\u4F53\u7684\u5927\u5C0F, \u5F53\u4F7F\u7528 number \u7C7B\u578B\u65F6, \u4EE5\u50CF\u7D20\u4E3A\u5355\u4F4D, \u5F53\u4F7F\u7528 string \u7C7B\u578B\u65F6, \u8BF7\u4F20\u5165 'x%', \u5426\u5219\u4FBF\u4F1A\u4EE5 number \u7C7B\u578B\u89E3\u91CA| number / string| 30% |
| title| Drawer \u7684\u6807\u9898\uFF0C\u4E5F\u53EF\u901A\u8FC7\u5177\u540D slot \uFF08\u89C1\u4E0B\u8868\uFF09\u4F20\u5165| string| \u2014 |
| with-header| \u63A7\u5236\u662F\u5426\u663E\u793A header \u680F, \u9ED8\u8BA4\u4E3A true, \u5F53\u6B64\u9879\u4E3A false \u65F6, title attribute \u548C title slot \u5747\u4E0D\u751F\u6548| boolean| true |
| modal-class| \u906E\u7F69\u5C42\u7684\u81EA\u5B9A\u4E49\u7C7B\u540D| string| \u2014 |
| z-index| \u8BBE\u7F6E z-index| number| \u2014 |
| header-aria-level a11y| header \u7684 aria-level \u5C5E\u6027| string| 2 |
#### \u4E8B\u4EF6

| \u63D2\u69FD\u540D| \u8BF4\u660E| \u7C7B\u578B |
| :--- | :--- | :--- |
| open| Drawer \u6253\u5F00\u7684\u56DE\u8C03| Function |
| opened| Drawer \u6253\u5F00\u52A8\u753B\u7ED3\u675F\u65F6\u7684\u56DE\u8C03| Function |
| close| Drawer \u5173\u95ED\u7684\u56DE\u8C03| Function |
| closed| Drawer \u5173\u95ED\u52A8\u753B\u7ED3\u675F\u65F6\u7684\u56DE\u8C03| Function |
| open-auto-focus| \u8F93\u5165\u7126\u70B9\u805A\u7126\u5728 Drawer \u5185\u5BB9\u65F6\u7684\u56DE\u8C03| Function |
| close-auto-focus| \u8F93\u5165\u7126\u70B9\u4ECE Drawer \u5185\u5BB9\u5931\u7126\u65F6\u7684\u56DE\u8C03| Function |

#### \u63D2\u69FD

| \u540D\u79F0| \u8BF4\u660E |
| :--- | :--- |
| default| Drawer \u7684\u5185\u5BB9 |
| header| Drawer \u6807\u9898\u7684\u5185\u5BB9\uFF1B\u4F1A\u66FF\u6362\u6807\u9898\u90E8\u5206\uFF0C\u4F46\u4E0D\u4F1A\u79FB\u9664\u5173\u95ED\u6309\u94AE\u3002 |
| title deprecated| \u4E0E header \u4F5C\u7528\u76F8\u540C \u8BF7\u4F7F\u7528 header |
| footer| Drawer \u9875\u811A\u90E8\u5206 |

#### \u66B4\u9732

| \u4E8B\u4EF6\u540D| \u8BF4\u660E |
| :--- | :--- |
| handleClose| \u7528\u4E8E\u5173\u95ED Drawer, \u8BE5\u65B9\u6CD5\u4F1A\u8C03\u7528\u4F20\u5165\u7684 before-close \u65B9\u6CD5 |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-loading":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/loading.html)
#### \u5C5E\u6027

#### \u914D\u7F6E\u9879

| \u540D\u79F0| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4 |
| :--- | :--- | :--- | :--- |
| target| Loading \u9700\u8981\u8986\u76D6\u7684 DOM \u8282\u70B9\u3002 \u53EF\u4F20\u5165\u4E00\u4E2A DOM \u5BF9\u8C61\u6216\u5B57\u7B26\u4E32\uFF1B \u82E5\u4F20\u5165\u5B57\u7B26\u4E32\uFF0C\u5219\u4F1A\u5C06\u5176\u4F5C\u4E3A\u53C2\u6570\u4F20\u5165 document.querySelector\u4EE5\u83B7\u53D6\u5230\u5BF9\u5E94 DOM \u8282\u70B9| string / HTMLElement| document.body |
| body| \u540C v-loading \u6307\u4EE4\u4E2D\u7684 body \u4FEE\u9970\u7B26| boolean| false |
| fullscreen| \u540C v-loading \u6307\u4EE4\u4E2D\u7684 fullscreen \u4FEE\u9970\u7B26| boolean| true |
| lock| \u540C v-loading \u6307\u4EE4\u4E2D\u7684 lock \u4FEE\u9970\u7B26| boolean| false |
| text| \u663E\u793A\u5728\u52A0\u8F7D\u56FE\u6807\u4E0B\u65B9\u7684\u52A0\u8F7D\u6587\u6848| string| \u2014 |
| spinner| \u81EA\u5B9A\u4E49\u52A0\u8F7D\u56FE\u6807\u7C7B\u540D| string| \u2014 |
| background| \u906E\u7F69\u80CC\u666F\u8272| string| \u2014 |
| customClass| Loading \u7684\u81EA\u5B9A\u4E49\u7C7B\u540D| string| \u2014 |

#### \u6307\u4EE4

| \u540D\u79F0| \u8BF4\u660E| \u7C7B\u578B |
| :--- | :--- | :--- |
| v-loading| \u662F\u5426\u663E\u793A\u52A8\u753B| boolean / Options |
| element-loading-text| \u663E\u793A\u5728\u52A0\u8F7D\u56FE\u6807\u4E0B\u65B9\u7684\u52A0\u8F7D\u6587\u6848| string |
| element-loading-spinner| \u81EA\u5B9A\u4E49\u52A0\u8F7D\u56FE\u6807| string |
| element-loading-svg| \u81EA\u5B9A\u4E49\u52A0\u8F7D\u56FE\u6807 (\u4E0E element-loading-spinner \u76F8\u540C)| string |
| element-loading-background| \u80CC\u666F\u906E\u7F69\u7684\u989C\u8272| string |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-message":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/message.html)
#### \u5C5E\u6027

#### Message \u914D\u7F6E\u9879

| \u540D\u79F0| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| message| \u6D88\u606F\u6587\u5B57| string / VNode / Function| '' |
| type| \u6D88\u606F\u7C7B\u578B| enum| info |
| icon| \u81EA\u5B9A\u4E49\u56FE\u6807\uFF0C\u8BE5\u5C5E\u6027\u4F1A\u8986\u76D6 type \u7684\u56FE\u6807\u3002| string / Component| \u2014 |
| dangerouslyUseHTMLString| \u662F\u5426\u5C06 message \u5C5E\u6027\u4F5C\u4E3A HTML \u7247\u6BB5\u5904\u7406| boolean| false |
| customClass| \u81EA\u5B9A\u4E49\u7C7B\u540D| string| '' |
| duration| \u663E\u793A\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\u6BEB\u79D2\u3002 \u8BBE\u4E3A 0 \u5219\u4E0D\u4F1A\u81EA\u52A8\u5173\u95ED| number| 3000 |
| showClose| \u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE| boolean| false |
| center| \u6587\u5B57\u662F\u5426\u5C45\u4E2D| boolean| false |
| onClose| \u5173\u95ED\u65F6\u7684\u56DE\u8C03\u51FD\u6570, \u53C2\u6570\u4E3A\u88AB\u5173\u95ED\u7684 message \u5B9E\u4F8B| Function| \u2014 |
| offset| Message \u8DDD\u79BB\u7A97\u53E3\u9876\u90E8\u7684\u504F\u79FB\u91CF| number| 16 |
| appendTo| \u8BBE\u7F6E message \u7684\u6839\u5143\u7D20\uFF0C\u9ED8\u8BA4\u4E3A document.body| string / HTMLElement| \u2014 |
| grouping| \u5408\u5E76\u5185\u5BB9\u76F8\u540C\u7684\u6D88\u606F\uFF0C\u4E0D\u652F\u6301 VNode \u7C7B\u578B\u7684\u6D88\u606F| boolean| false |
| repeatNum| \u91CD\u590D\u6B21\u6570\uFF0C\u7C7B\u4F3C\u4E8E Badge \u3002\u5F53\u548C grouping \u5C5E\u6027\u4E00\u8D77\u4F7F\u7528\u65F6\u4F5C\u4E3A\u521D\u59CB\u6570\u91CF\u4F7F\u7528| number| 1 |

| \u540D\u79F0| \u63CF\u8FF0| \u7C7B\u578B |
| :--- | :--- | :--- |
| close| \u5173\u95ED\u5F53\u524D\u7684 Message| Function |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-message-box":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/message-box.html)
#### \u5C5E\u6027

#### \u914D\u7F6E\u9879

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| autofocus| \u6253\u5F00 MessageBox \u65F6\u662F\u5426\u81EA\u52A8\u83B7\u5F97\u7126\u70B9| boolean| true |
| title| MessageBox \u7684\u6807\u9898| string| '' |
| message| MessageBox \u7684\u6B63\u6587\u5185\u5BB9| string / VNode / Function 2.2.17| \u2014 |
| dangerouslyUseHTMLString| \u662F\u5426\u5C06 message \u4F5C\u4E3A HTML \u7247\u6BB5\u5904\u7406| boolean| false |
| type| \u6D88\u606F\u7C7B\u578B\uFF0C\u7528\u4E8E\u56FE\u6807\u663E\u793A| enum| '' |
| icon| \u81EA\u5B9A\u4E49\u56FE\u6807\u7EC4\u4EF6\uFF0C\u4F1A\u8986\u76D6 type \u7684\u7C7B\u578B| string / Component| '' |
| custom-class| MessageBox \u7684\u81EA\u5B9A\u4E49\u7C7B\u540D| string| '' |
| custom-style| MessageBox \u7684\u81EA\u5B9A\u4E49\u5185\u8054\u6837\u5F0F| CSSProperties| {} |
| callback| \u82E5\u4E0D\u4F7F\u7528 Promise\uFF0C\u53EF\u4EE5\u4F7F\u7528\u6B64\u53C2\u6570\u6307\u5B9A MessageBox \u5173\u95ED\u540E\u7684\u56DE\u8C03| Function| null |
| show-close| MessageBox \u662F\u5426\u663E\u793A\u53F3\u4E0A\u89D2\u5173\u95ED\u6309\u94AE| boolean| true |
| before-close| messageBox \u5173\u95ED\u524D\u7684\u56DE\u8C03\uFF0C\u4F1A\u6682\u505C\u6D88\u606F\u5F39\u51FA\u6846\u7684\u5173\u95ED\u8FC7\u7A0B\u3002| Function| null |
| distinguish-cancel-and-close| \u662F\u5426\u5C06\u53D6\u6D88\uFF08\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\uFF09\u4E0E\u5173\u95ED\uFF08\u70B9\u51FB\u5173\u95ED\u6309\u94AE\u6216\u906E\u7F69\u5C42\u3001\u6309\u4E0B Esc \u952E\uFF09\u8FDB\u884C\u533A\u5206| boolean| false |
| lock-scroll| \u662F\u5426\u5728 MessageBox \u51FA\u73B0\u65F6\u5C06 body \u6EDA\u52A8\u9501\u5B9A| boolean| true |
| show-cancel-button| \u662F\u5426\u663E\u793A\u53D6\u6D88\u6309\u94AE| boolean| false\uFF08\u4EE5 confirm \u548C prompt \u65B9\u5F0F\u8C03\u7528\u65F6\u4E3A true\uFF09 |
| show-confirm-button| \u662F\u5426\u663E\u793A\u786E\u5B9A\u6309\u94AE| boolean| true |
| cancel-button-text| \u53D6\u6D88\u6309\u94AE\u7684\u6587\u672C\u5185\u5BB9| string| \u53D6\u6D88 |
| confirm-button-text| \u786E\u5B9A\u6309\u94AE\u7684\u6587\u672C\u5185\u5BB9| string| \u786E\u5B9A |
| cancel-button-class| \u53D6\u6D88\u6309\u94AE\u7684\u81EA\u5B9A\u4E49\u7C7B\u540D| string| '' |
| confirm-button-class| \u786E\u5B9A\u6309\u94AE\u7684\u81EA\u5B9A\u4E49\u7C7B\u540D| string| '' |
| close-on-click-modal| \u662F\u5426\u53EF\u901A\u8FC7\u70B9\u51FB\u906E\u7F69\u5C42\u5173\u95ED MessageBox| boolean| true\uFF08\u4EE5 alert \u65B9\u5F0F\u8C03\u7528\u65F6\u4E3A false\uFF09 |
| close-on-press-escape| \u662F\u5426\u53EF\u901A\u8FC7\u6309\u4E0B ESC \u952E\u5173\u95ED MessageBox| boolean| true\uFF08\u4EE5 alert \u65B9\u5F0F\u8C03\u7528\u65F6\u4E3A false\uFF09 |
| close-on-hash-change| \u662F\u5426\u5728 hash \u6539\u53D8\u65F6\u5173\u95ED MessageBox| boolean| true |
| show-input| \u662F\u5426\u663E\u793A\u8F93\u5165\u6846| boolean| false\uFF08\u4EE5 prompt \u65B9\u5F0F\u8C03\u7528\u65F6\u4E3A true\uFF09 |
| input-placeholder| \u8F93\u5165\u6846\u5360\u4F4D\u6587\u672C| string| '' |
| input-type| \u8F93\u5165\u6846\u7684\u7C7B\u578B| string| text |
| input-value| \u8F93\u5165\u6846\u7684\u521D\u59CB\u6587\u672C| string| null |
| input-pattern| \u8F93\u5165\u6846\u7684\u6821\u9A8C\u8868\u8FBE\u5F0F| regexp| null |
| input-validator| \u8F93\u5165\u6846\u7684\u6821\u9A8C\u51FD\u6570\u3002 \u5E94\u8BE5\u8FD4\u56DE\u4E00\u4E2A boolean \u6216\u8005 string\uFF0C \u5982\u679C\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A string \u7C7B\u578B\uFF0C\u90A3\u4E48\u8BE5\u8FD4\u56DE\u503C\u4F1A\u88AB\u8D4B\u503C\u7ED9 inputErrorMessage \u7528\u4E8E\u5411\u7528\u6237\u5C55\u793A\u9519\u8BEF\u6D88\u606F\u3002| Function| null |
| input-error-message| \u6821\u9A8C\u672A\u901A\u8FC7\u65F6\u7684\u63D0\u793A\u6587\u672C| string| \u8F93\u5165\u7684\u6570\u636E\u4E0D\u5408\u6CD5! |
| center| \u662F\u5426\u5C45\u4E2D\u5E03\u5C40| boolean| false |
| draggable| MessageBox \u662F\u5426\u53EF\u62D6\u653E| boolean| false |
| overflow 2.5.4| MessageBox \u62D6\u52A8\u8303\u56F4\u53EF\u4EE5\u8D85\u51FA\u53EF\u89C6\u533A| boolean| false |
| round-button| \u662F\u5426\u4F7F\u7528\u5706\u89D2\u6309\u94AE| boolean| false |
| button-size| \u81EA\u5B9A\u4E49\u786E\u8BA4\u6309\u94AE\u53CA\u53D6\u6D88\u6309\u94AE\u7684\u5927\u5C0F| string| default |
| append-to 2.2.19| \u8BBE\u7F6E\u7EC4\u4EF6\u7684\u6839\u5143\u7D20| string / HTMLElement| \u2014 |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-notification":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/notification.html)
#### \u5C5E\u6027

#### \u914D\u7F6E\u9879

| \u540D\u79F0| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4 |
| :--- | :--- | :--- | :--- |
| title| \u6807\u9898| string| '' |
| message| \u901A\u77E5\u680F\u6B63\u6587\u5185\u5BB9| string / VNode| '' |
| dangerouslyUseHTMLString| \u662F\u5426\u5C06 message \u5C5E\u6027\u4F5C\u4E3A HTML \u7247\u6BB5\u5904\u7406| boolean| false |
| type| \u901A\u77E5\u7684\u7C7B\u578B| enum| '' |
| icon| \u81EA\u5B9A\u4E49\u56FE\u6807\u3002 \u82E5\u8BBE\u7F6E\u4E86 type\uFF0C\u5219 icon \u4F1A\u88AB\u8986\u76D6| string / Component| \u2014 |
| customClass| \u81EA\u5B9A\u4E49\u7C7B\u540D| string| '' |
| duration| \u663E\u793A\u65F6\u95F4, \u5355\u4F4D\u4E3A\u6BEB\u79D2\u3002 \u503C\u4E3A 0 \u5219\u4E0D\u4F1A\u81EA\u52A8\u5173\u95ED| number| 4500 |
| position| \u81EA\u5B9A\u4E49\u5F39\u51FA\u4F4D\u7F6E| enum| top-right |
| showClose| \u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE| boolean| true |
| onClose| \u5173\u95ED\u65F6\u7684\u56DE\u8C03\u51FD\u6570| Function| \u2014 |
| onClick| \u70B9\u51FB Notification \u65F6\u7684\u56DE\u8C03\u51FD\u6570| Function| \u2014 |
| offset| \u76F8\u5BF9\u5C4F\u5E55\u9876\u90E8\u7684\u504F\u79FB\u91CF \u504F\u79FB\u7684\u8DDD\u79BB\uFF0C\u5728\u540C\u4E00\u65F6\u523B\uFF0C\u6240\u6709\u7684 Notification \u5B9E\u4F8B\u5E94\u5F53\u5177\u6709\u4E00\u4E2A\u76F8\u540C\u7684\u504F\u79FB\u91CF| number| 0 |
| appendTo| \u8BBE\u7F6E notification \u7684\u6839\u5143\u7D20\uFF0C\u9ED8\u8BA4\u4E3A document.body| string / HTMLElement| \u2014 |
| zIndex| \u521D\u59CB zIndex| number| 0 |

| \u540D\u79F0| \u8BE6\u60C5| \u7C7B\u578B |
| :--- | :--- | :--- |
| close| \u5173\u95ED\u5F53\u524D\u7684 Notification| Function |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-popconfirm":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/popconfirm.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4 |
| :--- | :--- | :--- | :--- |
| title| \u6807\u9898| string| \u2014 |
| confirm-button-text| \u786E\u8BA4\u6309\u94AE\u6587\u5B57| string| \u2014 |
| cancel-button-text| \u53D6\u6D88\u6309\u94AE\u6587\u5B57| string| \u2014 |
| confirm-button-type| \u786E\u8BA4\u6309\u94AE\u7C7B\u578B| enum| primary |
| cancel-button-type| \u53D6\u6D88\u6309\u94AE\u7C7B\u578B| enum| text |
| icon| \u81EA\u5B9A\u4E49\u56FE\u6807| string / Component| QuestionFilled |
| icon-color| Icon \u989C\u8272| string| #f90 |
| hide-icon| \u662F\u5426\u9690\u85CF Icon| boolean| false |
| hide-after| \u5173\u95ED\u65F6\u7684\u5EF6\u8FDF| number| 200 |
| teleported| \u662F\u5426\u5C06 popover \u7684\u4E0B\u62C9\u5217\u8868\u63D2\u5165\u81F3 body \u5143\u7D20| boolean| true |
| persistent| \u5F53 popover \u7EC4\u4EF6\u957F\u65F6\u95F4\u4E0D\u89E6\u53D1\u4E14 persistent \u5C5E\u6027\u8BBE\u7F6E\u4E3A false \u65F6, popover \u5C06\u4F1A\u88AB\u5220\u9664| boolean| false |
| width| \u5F39\u5C42\u5BBD\u5EA6\uFF0C\u6700\u5C0F\u5BBD\u5EA6 150px| string / number| 150 |
#### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D| \u8BF4\u660E| \u7C7B\u578B |
| :--- | :--- | :--- |
| confirm| \u70B9\u51FB\u786E\u8BA4\u6309\u94AE\u65F6\u89E6\u53D1| Function |
| cancel| \u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u65F6\u89E6\u53D1| Function |

#### Slots

| \u63D2\u69FD\u540D| \u8BF4\u660E |
| :--- | :--- |
| reference| \u89E6\u53D1 Popconfirm \u663E\u793A\u7684 HTML \u5143\u7D20 |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-popover":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/popover.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u53EF\u9009\u503C| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| trigger| \u89E6\u53D1\u65B9\u5F0F| string| click/focus/hover/contextmenu| hover |
| title| \u6807\u9898| string| \u2014| \u2014 |
| effect| Tooltip \u4E3B\u9898\uFF0CElement Plus \u5185\u7F6E\u4E86 dark / light \u4E24\u79CD\u4E3B\u9898| string| string| light |
| content| \u663E\u793A\u7684\u5185\u5BB9\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u5199\u5165\u9ED8\u8BA4 slot \u4FEE\u6539\u663E\u793A\u5185\u5BB9| string| \u2014| \u2014 |
| width| \u5BBD\u5EA6| string / number| \u2014| \u6700\u5C0F\u5BBD\u5EA6 150px |
| placement| \u51FA\u73B0\u4F4D\u7F6E| string| top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end| bottom |
| disabled| Popover \u662F\u5426\u53EF\u7528| boolean| \u2014| false |
| visible / v-model:visible| Popover \u662F\u5426\u663E\u793A| Boolean| \u2014| false |
| offset| \u6D6E\u5C42\u504F\u79FB\u91CF, Popover \u662F\u5728 Tooltip,\u57FA\u7840\u4E0A\u5F00\u53D1\u7684\uFF0C Popover\u7684 offset \u662F undefined, \u4F46Tooltip \u7684 offset \u662F12| number| \u2014| 12 |
| transition| \u5B9A\u4E49\u6E10\u53D8\u52A8\u753B| string| \u2014| el-fade-in-linear |
| show-arrow| \u662F\u5426\u663E\u793A Tooltip \u7BAD\u5934\uFF0C \u6B32\u4E86\u89E3\u66F4\u591A\u4FE1\u606F\uFF0C\u8BF7\u53C2\u8003 ElPopper| boolean| \u2014| true |
| popper-options| popper.js \u7684\u53C2\u6570| object| \u8BE6\u60C5\u53C2\u8003 popper.js| {modifiers: [{name: 'computeStyles',options: {gpuAcceleration: false}}]} |
| popper-class| \u4E3A popper \u6DFB\u52A0\u7C7B\u540D| string| \u2014| \u2014 |
| popper-style| \u4E3A popper \u81EA\u5B9A\u4E49\u6837\u5F0F| string / object| \u2014| \u2014 |
| show-after| \u5728\u89E6\u53D1\u540E\u591A\u4E45\u663E\u793A\u5185\u5BB9\uFF0C\u5355\u4F4D\u6BEB\u79D2| number| \u2014| 0 |
| hide-after| \u5EF6\u8FDF\u5173\u95ED\uFF0C\u5355\u4F4D\u6BEB\u79D2| number| \u2014| 200 |
| auto-close| tooltip \u51FA\u73B0\u540E\u81EA\u52A8\u9690\u85CF\u5EF6\u65F6\uFF0C\u5355\u4F4D\u6BEB\u79D2| number| \u2014| 0 |
| tabindex| Popover \u7EC4\u4EF6\u7684 tabindex| number| \u2014| \u2014 |
| teleported| \u662F\u5426\u5C06 popover \u7684\u4E0B\u62C9\u5217\u8868\u63D2\u5165\u81F3 body \u5143\u7D20| boolean| true / false| true |
| persistent| \u5F53 popover \u7EC4\u4EF6\u957F\u65F6\u95F4\u4E0D\u89E6\u53D1\u4E14 persistent \u5C5E\u6027\u8BBE\u7F6E\u4E3A false \u65F6, popover \u5C06\u4F1A\u88AB\u5220\u9664| boolean| \u2014| true |

#### Slots

| \u63D2\u69FD\u540D| \u8BF4\u660E |
| :--- | :--- |
| \u2014| Popover \u5185\u5D4C HTML \u6587\u672C |
| reference| \u89E6\u53D1 Popover \u663E\u793A\u7684 HTML \u5143\u7D20 |
#### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D| \u8BF4\u660E| \u56DE\u8C03\u53C2\u6570 |
| :--- | :--- | :--- |
| show| \u663E\u793A\u65F6\u89E6\u53D1| \u2014 |
| before-enter| \u663E\u793A\u52A8\u753B\u64AD\u653E\u524D\u89E6\u53D1| \u2014 |
| after-enter| \u663E\u793A\u52A8\u753B\u64AD\u653E\u5B8C\u6BD5\u540E\u89E6\u53D1| \u2014 |
| hide| \u9690\u85CF\u65F6\u89E6\u53D1| \u2014 |
| before-leave| \u9690\u85CF\u52A8\u753B\u64AD\u653E\u524D\u89E6\u53D1| \u2014 |
| after-leave| \u9690\u85CF\u52A8\u753B\u64AD\u653E\u5B8C\u6BD5\u540E\u89E6\u53D1| \u2014 |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-tooltip":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/tooltip.html)
#### \u5C5E\u6027

| \u540D\u79F0| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| append-to| \u6307\u793A Tooltip \u7684\u5185\u5BB9\u5C06\u9644\u52A0\u5728\u54EA\u4E00\u4E2A\u7F51\u9875\u5143\u7D20\u4E0A| CSSSelector / HTMLElement| \u2014 |
| effect| Tooltip \u4E3B\u9898\uFF0C\u5185\u7F6E\u4E86 dark / light \u4E24\u79CD| enum| dark |
| content| \u663E\u793A\u7684\u5185\u5BB9\uFF0C\u4E5F\u53EF\u88AB slot#content \u8986\u76D6| string| '' |
| raw-content| content \u4E2D\u7684\u5185\u5BB9\u662F\u5426\u4F5C\u4E3A HTML \u5B57\u7B26\u4E32\u5904\u7406| boolean| false |
| placement| Tooltip \u7EC4\u4EF6\u51FA\u73B0\u7684\u4F4D\u7F6E| enum| bottom |
| fallback-placements| Tooltip \u53EF\u7528\u7684 positions \u8BF7\u67E5\u770Bpopper.js \u6587\u6863| arrary| \u2014 |
| visible / v-model:visible| Tooltip \u7EC4\u4EF6\u53EF\u89C1\u6027| boolean| \u2014 |
| disabled| Tooltip \u7EC4\u4EF6\u662F\u5426\u7981\u7528| boolean| \u2014 |
| offset| \u51FA\u73B0\u4F4D\u7F6E\u7684\u504F\u79FB\u91CF| number| 12 |
| transition| \u52A8\u753B\u540D\u79F0| string| \u2014 |
| popper-options| popper.js \u53C2\u6570| object \u8BF7\u53C2\u8003 popper.js \u6587\u6863| {} |
| show-after| \u5728\u89E6\u53D1\u540E\u591A\u4E45\u663E\u793A\u5185\u5BB9\uFF0C\u5355\u4F4D\u6BEB\u79D2| number| 0 |
| show-arrow| tooltip \u7684\u5185\u5BB9\u662F\u5426\u6709\u7BAD\u5934| boolean| true |
| hide-after| \u5EF6\u8FDF\u5173\u95ED\uFF0C\u5355\u4F4D\u6BEB\u79D2| number| 200 |
| auto-close| tooltip \u51FA\u73B0\u540E\u81EA\u52A8\u9690\u85CF\u5EF6\u65F6\uFF0C\u5355\u4F4D\u6BEB\u79D2| number| 0 |
| popper-class| \u4E3A Tooltip \u7684 popper \u6DFB\u52A0\u7C7B\u540D| string| \u2014 |
| enterable| \u9F20\u6807\u662F\u5426\u53EF\u8FDB\u5165\u5230 tooltip \u4E2D| boolean| true |
| teleported| \u662F\u5426\u4F7F\u7528 teleport\u3002\u8BBE\u7F6E\u6210 true\u5219\u4F1A\u88AB\u8FFD\u52A0\u5230 append-to \u7684\u4F4D\u7F6E| boolean| true |
| trigger| \u5982\u4F55\u89E6\u53D1 Tooltip| enum| hover |
| virtual-triggering| \u7528\u6765\u6807\u8BC6\u865A\u62DF\u89E6\u53D1\u662F\u5426\u88AB\u542F\u7528| boolean| \u2014 |
| virtual-ref| \u6807\u8BC6\u865A\u62DF\u89E6\u53D1\u65F6\u7684\u89E6\u53D1\u5143\u7D20| HTMLElement| \u2014 |
| trigger-keys| \u5F53\u9F20\u6807\u70B9\u51FB\u6216\u8005\u805A\u7126\u5728\u89E6\u53D1\u5143\u7D20\u4E0A\u65F6\uFF0C \u53EF\u4EE5\u5B9A\u4E49\u4E00\u7EC4\u952E\u76D8\u6309\u952E\u5E76\u4E14\u901A\u8FC7\u5B83\u4EEC\u6765\u63A7\u5236 Tooltip \u7684\u663E\u793A| Array| ['Enter','Space'] |
| persistent| \u5F53 tooltip \u7EC4\u4EF6\u957F\u65F6\u95F4\u4E0D\u89E6\u53D1\u4E14 persistent \u5C5E\u6027\u8BBE\u7F6E\u4E3A false \u65F6, popconfirm \u5C06\u4F1A\u88AB\u5220\u9664| boolean| \u2014 |
| aria-label a11y| \u548C aria-label \u5C5E\u6027\u4FDD\u6301\u4E00\u81F4| string| \u2014 |

#### Slots

| \u63D2\u69FD\u540D| \u8BF4\u660E |
| :--- | :--- |
| default| Tooltip \u89E6\u53D1 & \u5F15\u7528\u7684\u5143\u7D20 |
| content| \u81EA\u5B9A\u4E49\u5185\u5BB9 |

#### Exposes

| \u540D\u79F0| \u8BE6\u60C5| \u7C7B\u578B |
| :--- | :--- | :--- |
| popperRef| el-popper \u7EC4\u4EF6\u5B9E\u4F8B| object |
| contentRef| el-tooltip0-content \u7EC4\u4EF6\u5B9E\u4F8B| object |
| isFocusInsideContent| \u9A8C\u8BC1\u5F53\u524D\u7126\u70B9\u4E8B\u4EF6\u662F\u5426\u5728 el-tooltip-content \u4E2D\u89E6\u53D1| Function |
| updatePopper| \u66F4\u65B0 el-popper\u7EC4\u4EF6\u5B9E\u4F8B| Function |
| onOpen| onOpen \u65B9\u6CD5\u63A7\u5236 el-tooltip \u663E\u793A\u72B6\u6001| Function |
| onClose| onClose \u65B9\u6CD5\u63A7\u5236 el-tooltip \u663E\u793A\u72B6\u6001| Function |
| hide| \u63D0\u4F9B hide \u65B9\u6CD5| Function |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-divider":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/divider.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4 |
| :--- | :--- | :--- | :--- |
| direction| \u8BBE\u7F6E\u5206\u5272\u7EBF\u65B9\u5411| enum| horizontal |
| border-style| \u8BBE\u7F6E\u5206\u9694\u7B26\u6837\u5F0F| enum css/border-style| solid |
| content-position| \u81EA\u5B9A\u4E49\u5206\u9694\u7EBF\u5185\u5BB9\u7684\u4F4D\u7F6E| enum| center |

#### Slots

| \u63D2\u69FD\u540D| \u8BF4\u660E |
| :--- | :--- |
| default| \u8BBE\u7F6E\u5206\u5272\u7EBF\u6587\u6848\u7684\u4F4D\u7F6E |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,"el-watermark":`#### [\u8BBF\u95EE](${v}/${f.l10n.t("el-locale")}/component/watermark.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u63CF\u8FF0| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| width| \u6C34\u5370\u7684\u5BBD\u5EA6\uFF0C content \u7684\u9ED8\u8BA4\u503C\u662F\u5B83\u81EA\u5DF1\u7684\u5BBD\u5EA6| number| 120 |
| height| \u6C34\u5370\u7684\u9AD8\u5EA6\uFF0C content \u7684\u9ED8\u8BA4\u503C\u662F\u5B83\u81EA\u5DF1\u7684\u9AD8\u5EA6| number| 64 |
| rotate| \u6C34\u5370\u7684\u65CB\u8F6C\u89D2\u5EA6, \u5355\u4F4D \xB0| number| -22 |
| zIndex| \u6C34\u5370\u5143\u7D20\u7684z-index\u503C| number| 9 |
| image| \u6C34\u5370\u56FE\u7247\uFF0C\u5EFA\u8BAE\u4F7F\u7528 2x \u6216 3x \u56FE\u50CF| string| - |
| content| \u6C34\u5370\u6587\u672C\u5185\u5BB9| string/object| - |
| font| \u6587\u5B57\u6837\u5F0F| Font| Font |
| gap| \u6C34\u5370\u4E4B\u95F4\u7684\u95F4\u8DDD| object| [100, 100] |
| offset| \u6C34\u5370\u4ECE\u5BB9\u5668\u5DE6\u4E0A\u89D2\u7684\u504F\u79FB \u9ED8\u8BA4\u503C\u4E3A gap/2| object| [gap[0]/2, gap[1]/2] |

#### Font

| \u540D\u79F0| \u8BE6\u60C5| \u7C7B\u578B| \u9ED8\u8BA4 |
| :--- | :--- | :--- | :--- |
| color| \u5B57\u4F53\u989C\u8272| string| rgba(0,0,0,.15) |
| fontSize| \u5B57\u4F53\u5927\u5C0F| number| 16 |
| fontWeight| \u5B57\u91CD| enum| normal |
| fontFamily| \u5B57\u4F53| string| sans-serif |
| fontStyle| \u5B57\u4F53\u6837\u5F0F| enum| normal |
| textAlign| \u6587\u672C\u5BF9\u9F50| enum| center |
| textBaseline| \u6587\u672C\u57FA\u7EBF| enum| top |

#### Slots

| \u540D\u79F0| \u8BE6\u60C5 |
| :--- | :--- |
| \u9ED8\u8BA4| \u6DFB\u52A0\u6C34\u5370\u7684\u5BB9\u5668 |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`})});var $s=P(Fi=>{"use strict";Object.defineProperty(Fi,"__esModule",{value:!0});var co=ms(),po=fs(),uo=vs(),ho=ys(),go=ws();Fi.default={tag:co.default,jsTag:po.default,attribute:uo.default,globalAttribute:ho.default,document:go.default}});var xs=P(te=>{"use strict";Object.defineProperty(te,"__esModule",{value:!0});te.getDocument=te.getGlobalAttribute=te.getAttribute=te.getJsTag=te.getTag=void 0;var mo=gs(),bo=$s(),le={"element-ui":mo.default,"element-plus":bo.default};function fo(i,e){let t={};return i.forEach(s=>{le[s]&&(t=Object.assign(t,le[s].tag(e)))}),t}te.getTag=fo;function vo(i,e){let t={};return i.forEach(s=>{le[s]&&(t=Object.assign(t,le[s].jsTag(e)))}),t}te.getJsTag=vo;function yo(i,e){let t={};return i.forEach(s=>{le[s]&&(t=Object.assign(t,le[s].attribute(e)))}),t}te.getAttribute=yo;function wo(i,e){let t={};return i.forEach(s=>{le[s]&&(t=Object.assign(t,le[s].globalAttribute(e)))}),t}te.getGlobalAttribute=wo;function $o(i,e){let t={};return i.forEach(s=>{le[s]&&(t=Object.assign(t,le[s].document(e)))}),t}te.getDocument=$o});var ks=P(Ci=>{"use strict";Object.defineProperty(Ci,"__esModule",{value:!0});Ci.default=i=>({vcomponent:'<component :is="${1:componentId}"></component>$0',vka:`<keep-alive$1>
${i}$2
</keep-alive>$0`,vtransition:`<transition$1>
${i}$2
</transition>$0`,vtg:`<transition-group$1>
${i}$2
</transition-group>`,vrl:"<router-link $1>$2</router-link>$0",vrlt:'<router-link to="$1">$2</router-link>$0',vrv:"<router-view>$1</router-view>$0"})});var Fs=P(ji=>{"use strict";Object.defineProperty(ji,"__esModule",{value:!0});ji.default=i=>({vnew:`new Vue({
${i}$1
})`,vgsilent:"Vue.config.silent = ${1:true}",vgeh:`Vue.config.errorHandler = function (err, vm, info) {
${i}\${1:// handle error}
}`,vgwh:`Vue.config.warnHandler = function (msg, vm, trace) {
${i}\${1:// handle warn}
}`,vgextend:`Vue.extend({
${i}template:\${1:template}
})`,vgnt:`Vue.nextTick({
${i}$1
})`,vgset:"Vue.set(${2:target}, ${3:key}, ${4:value})",vgdelete:"Vue.delete(${2:target}, ${3:key})",vgdirective:"Vue.directive(${2:id}${3:, [definition]})",vgfilter:"Vue.filter(${1:id}${2:, [definition]})",vgcomponent:"Vue.component(${1:id}${2:, [definition]})$0",vguse:"Vue.use(${1:plugin})$0",vgmixin:"Vue.mixin({${1:mixin}})",vgcompile:"Vue.compile(${1:template})",vdata:`data() {
${i}return {
${i}${i}$1
${i}}
},$0`,vmounted:`mounted () {
${i}$1
}`,vbm:`beforeMount () {
${i}$1
}`,vcreated:`created () {
${i}$1
}`,vbc:`beforeCreate () {
${i}$1
}`,vupdated:`updated () {
${i}$1
}`,vbu:`beforeUpdate () {
${i}$1
}`,vactivated:`activated () {
${i}$1
}`,vdeactivated:`deactivated () {
${i}$1
}`,vbd:`beforeDestroy () {
${i}$1
}`,vdestroyed:`destroyed () {
${i}$1
}`,vprops:`props: {
${i}$1
}`,vpd:`propsData: {
${i}$1
}`,vcomputed:`computed: {
${i}$1
}`,vmethods:`methods: {
${i}$1
}`,vwatch:`watch: {
${i}$1
}`,vwo:`\${1:key}: {
${i}deep: \${2:true},
${i}immediate: \${3:true},
${i}handler: function (\${4:val}, \${5:oldVal}) {
${i}${i}$6
${i}}
},$0`,vdirectives:`directives: {
${i}$1
}`,vfilters:`filters: {
${i}$1
}`,vcomponents:`components: {
${i}$1
}`,vmixins:"mixins:[$1],",vprovide:`provide: {
${i}$1
}`,vinject:"inject: [$1],",vmodel:`model: {
${i}prop: $1,
${i}event: $2
}`,vrender:`render(h) {
${i}$1
},`,vel:"${1|this,vm|}.$el$2",voptions:"${1|this,vm|}.$options$2",vparent:"${1|this,vm|}.$parent$2",vroot:"${1|this,vm|}.$root$2",vchildren:"${1|this,vm|}.$children$2",vslots:"${1|this,vm|}.$slots$2",vss:`\${1|this,vm|}.$scopedSlots.default({
${i}$2
})`,vrefs:"${1|this,vm|}.$refs$2",vis:"${1|this,vm|}.$isServer$2",vattrs:"${1|this,vm|}.$attrs$2",vlisteners:"${1|this,vm|}.$listeners$2",vset:"${1|this,vm|}.$set(${2:target}, ${3:key}, ${4:value})",vdelete:"${1|this,vm|}.$delete(${2:target}, ${3:key})",von:"${1|this,vm|}.$on('${2:event}', ${3:callback})$4",vonce:"${1|this,vm|}.$once('${2:event}', ${3:callback})$4",voff:"${1|this,vm|}.$off('${2:event}', ${3:callback})$4",vemit:"${1|this,vm|}.$emit('${2:event}'${3:, args})$4",vmount:"${1|this,vm|}.$mount('$2')",vfu:"${1|this,vm|}.$forceUpdate()",vdestroy:"${1|this,vm|}.$destroy()$2",vnt:`\${1|this,vm|}.$nextTick(() => {
${i}$2
})`})});function Cs(i,e={}){let t=i.replace(xo,$t).replace(ko,$t);e.separateNumbers&&(t=t.replace(Fo,$t).replace(Co,$t)),t=t.replace(jo,"\0");let s=0,r=t.length;for(;t.charAt(s)==="\0";)s++;if(s===r)return[];for(;t.charAt(r-1)==="\0";)r--;return t.slice(s,r).split(/\0/g)}function js(i){return i===!1?e=>e.toLowerCase():e=>e.toLocaleLowerCase(i)}var xo,ko,Fo,Co,jo,$t,Ts=rs(()=>{xo=/([\p{Ll}\d])(\p{Lu})/gu,ko=/(\p{Lu})([\p{Lu}][\p{Ll}])/gu,Fo=/(\d)(\p{Ll})/gu,Co=/(\p{L})(\d)/gu,jo=/[^\p{L}\d]+/giu,$t="$1\0$2"});var Es={};Vr(Es,{paramCase:()=>To});function To(i,e){let t=js(e?.locale);return Cs(i,e).map(t).join("-")}var Ps=rs(()=>{Ts()});var Rs=P((Vn,Os)=>{"use strict";Os.exports=Ds;function Ds(i,e,t){i instanceof RegExp&&(i=As(i,t)),e instanceof RegExp&&(e=As(e,t));var s=_s(i,e,t);return s&&{start:s[0],end:s[1],pre:t.slice(0,s[0]),body:t.slice(s[0]+i.length,s[1]),post:t.slice(s[1]+e.length)}}function As(i,e){var t=e.match(i);return t?t[0]:null}Ds.range=_s;function _s(i,e,t){var s,r,o,a,l,n=t.indexOf(i),d=t.indexOf(e,n+1),c=n;if(n>=0&&d>0){if(i===e)return[n,d];for(s=[],o=t.length;c>=0&&!l;)c==n?(s.push(c),n=t.indexOf(i,c+1)):s.length==1?l=[s.pop(),d]:(r=s.pop(),r<o&&(o=r,a=d),d=t.indexOf(e,c+1)),c=n<d&&n>=0?n:d;s.length&&(l=[o,a])}return l}});var Ws=P((Kn,qs)=>{var Ns=Rs();qs.exports=Ao;var Ls="\0SLASH"+Math.random()+"\0",Ms="\0OPEN"+Math.random()+"\0",Ei="\0CLOSE"+Math.random()+"\0",Is="\0COMMA"+Math.random()+"\0",Ss="\0PERIOD"+Math.random()+"\0";function Ti(i){return parseInt(i,10)==i?parseInt(i,10):i.charCodeAt(0)}function Eo(i){return i.split("\\\\").join(Ls).split("\\{").join(Ms).split("\\}").join(Ei).split("\\,").join(Is).split("\\.").join(Ss)}function Po(i){return i.split(Ls).join("\\").split(Ms).join("{").split(Ei).join("}").split(Is).join(",").split(Ss).join(".")}function Bs(i){if(!i)return[""];var e=[],t=Ns("{","}",i);if(!t)return i.split(",");var s=t.pre,r=t.body,o=t.post,a=s.split(",");a[a.length-1]+="{"+r+"}";var l=Bs(o);return o.length&&(a[a.length-1]+=l.shift(),a.push.apply(a,l)),e.push.apply(e,a),e}function Ao(i){return i?(i.substr(0,2)==="{}"&&(i="\\{\\}"+i.substr(2)),Ue(Eo(i),!0).map(Po)):[]}function Do(i){return"{"+i+"}"}function _o(i){return/^-?0\d/.test(i)}function Oo(i,e){return i<=e}function Ro(i,e){return i>=e}function Ue(i,e){var t=[],s=Ns("{","}",i);if(!s)return[i];var r=s.pre,o=s.post.length?Ue(s.post,!1):[""];if(/\$$/.test(s.pre))for(var a=0;a<o.length;a++){var l=r+"{"+s.body+"}"+o[a];t.push(l)}else{var n=/^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(s.body),d=/^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(s.body),c=n||d,p=s.body.indexOf(",")>=0;if(!c&&!p)return s.post.match(/,.*\}/)?(i=s.pre+"{"+s.body+Ei+s.post,Ue(i)):[i];var u;if(c)u=s.body.split(/\.\./);else if(u=Bs(s.body),u.length===1&&(u=Ue(u[0],!1).map(Do),u.length===1))return o.map(function(mt){return s.pre+u[0]+mt});var h;if(c){var b=Ti(u[0]),g=Ti(u[1]),x=Math.max(u[0].length,u[1].length),y=u.length==3?Math.abs(Ti(u[2])):1,C=Oo,j=g<b;j&&(y*=-1,C=Ro);var T=u.some(_o);h=[];for(var _=b;C(_,g);_+=y){var D;if(d)D=String.fromCharCode(_),D==="\\"&&(D="");else if(D=String(_),T){var S=x-D.length;if(S>0){var ee=new Array(S+1).join("0");_<0?D="-"+ee+D.slice(1):D=ee+D}}h.push(D)}}else{h=[];for(var oe=0;oe<u.length;oe++)h.push.apply(h,Ue(u[oe],!1))}for(var oe=0;oe<h.length;oe++)for(var a=0;a<o.length;a++){var l=r+h[oe]+o[a];(!e||c||l)&&t.push(l)}}return t}});var Us=P(xt=>{"use strict";Object.defineProperty(xt,"__esModule",{value:!0});xt.assertValidPattern=void 0;var No=1024*64,Lo=i=>{if(typeof i!="string")throw new TypeError("invalid pattern");if(i.length>No)throw new TypeError("pattern is too long")};xt.assertValidPattern=Lo});var Hs=P(kt=>{"use strict";Object.defineProperty(kt,"__esModule",{value:!0});kt.parseClass=void 0;var Mo={"[:alnum:]":["\\p{L}\\p{Nl}\\p{Nd}",!0],"[:alpha:]":["\\p{L}\\p{Nl}",!0],"[:ascii:]":["\\x00-\\x7f",!1],"[:blank:]":["\\p{Zs}\\t",!0],"[:cntrl:]":["\\p{Cc}",!0],"[:digit:]":["\\p{Nd}",!0],"[:graph:]":["\\p{Z}\\p{C}",!0,!0],"[:lower:]":["\\p{Ll}",!0],"[:print:]":["\\p{C}",!0],"[:punct:]":["\\p{P}",!0],"[:space:]":["\\p{Z}\\t\\r\\n\\v\\f",!0],"[:upper:]":["\\p{Lu}",!0],"[:word:]":["\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}",!0],"[:xdigit:]":["A-Fa-f0-9",!1]},Ge=i=>i.replace(/[[\]\\-]/g,"\\$&"),Io=i=>i.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),Gs=i=>i.join(""),So=(i,e)=>{let t=e;if(i.charAt(t)!=="[")throw new Error("not in a brace expression");let s=[],r=[],o=t+1,a=!1,l=!1,n=!1,d=!1,c=t,p="";e:for(;o<i.length;){let g=i.charAt(o);if((g==="!"||g==="^")&&o===t+1){d=!0,o++;continue}if(g==="]"&&a&&!n){c=o+1;break}if(a=!0,g==="\\"&&!n){n=!0,o++;continue}if(g==="["&&!n){for(let[x,[y,C,j]]of Object.entries(Mo))if(i.startsWith(x,o)){if(p)return["$.",!1,i.length-t,!0];o+=x.length,j?r.push(y):s.push(y),l=l||C;continue e}}if(n=!1,p){g>p?s.push(Ge(p)+"-"+Ge(g)):g===p&&s.push(Ge(g)),p="",o++;continue}if(i.startsWith("-]",o+1)){s.push(Ge(g+"-")),o+=2;continue}if(i.startsWith("-",o+1)){p=g,o+=2;continue}s.push(Ge(g)),o++}if(c<o)return["",!1,0,!1];if(!s.length&&!r.length)return["$.",!1,i.length-t,!0];if(r.length===0&&s.length===1&&/^\\?.$/.test(s[0])&&!d){let g=s[0].length===2?s[0].slice(-1):s[0];return[Io(g),!1,c-t,!1]}let u="["+(d?"^":"")+Gs(s)+"]",h="["+(d?"":"^")+Gs(r)+"]";return[s.length&&r.length?"("+u+"|"+h+")":s.length?u:h,l,c-t,!0]};kt.parseClass=So});var Ct=P(Ft=>{"use strict";Object.defineProperty(Ft,"__esModule",{value:!0});Ft.unescape=void 0;var Bo=(i,{windowsPathsNoEscape:e=!1}={})=>e?i.replace(/\[([^\/\\])\]/g,"$1"):i.replace(/((?!\\).|^)\[([^\/\\])\]/g,"$1$2").replace(/\\([^\/])/g,"$1");Ft.unescape=Bo});var Di=P(Dt=>{"use strict";Object.defineProperty(Dt,"__esModule",{value:!0});Dt.AST=void 0;var qo=Hs(),jt=Ct(),Wo=new Set(["!","?","+","*","@"]),Vs=i=>Wo.has(i),Uo="(?!(?:^|/)\\.\\.?(?:$|/))",Tt="(?!\\.)",Go=new Set(["[","."]),Ho=new Set(["..","."]),Vo=new Set("().*{}+?[]^$\\!"),Ko=i=>i.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),Ai="[^/]",Ks=Ai+"*?",Js=Ai+"+?",B,W,he,L,I,fe,ke,ve,ce,Fe,Ve,Pt,Ys,_e,Et,Ke,Pi,At,Zs,X=class{constructor(e,t,s={}){q(this,Pt);q(this,Ke);os(this,"type");q(this,B,void 0);q(this,W,void 0);q(this,he,!1);q(this,L,[]);q(this,I,void 0);q(this,fe,void 0);q(this,ke,void 0);q(this,ve,!1);q(this,ce,void 0);q(this,Fe,void 0);q(this,Ve,!1);this.type=e,e&&N(this,W,!0),N(this,I,t),N(this,B,w(this,I)?w(w(this,I),B):this),N(this,ce,w(this,B)===this?s:w(w(this,B),ce)),N(this,ke,w(this,B)===this?[]:w(w(this,B),ke)),e==="!"&&!w(w(this,B),ve)&&w(this,ke).push(this),N(this,fe,w(this,I)?w(w(this,I),L).length:0)}get hasMagic(){if(w(this,W)!==void 0)return w(this,W);for(let e of w(this,L))if(typeof e!="string"&&(e.type||e.hasMagic))return N(this,W,!0);return w(this,W)}toString(){return w(this,Fe)!==void 0?w(this,Fe):this.type?N(this,Fe,this.type+"("+w(this,L).map(e=>String(e)).join("|")+")"):N(this,Fe,w(this,L).map(e=>String(e)).join(""))}push(...e){for(let t of e)if(t!==""){if(typeof t!="string"&&!(t instanceof X&&w(t,I)===this))throw new Error("invalid part: "+t);w(this,L).push(t)}}toJSON(){let e=this.type===null?w(this,L).slice().map(t=>typeof t=="string"?t:t.toJSON()):[this.type,...w(this,L).map(t=>t.toJSON())];return this.isStart()&&!this.type&&e.unshift([]),this.isEnd()&&(this===w(this,B)||w(w(this,B),ve)&&w(this,I)?.type==="!")&&e.push({}),e}isStart(){if(w(this,B)===this)return!0;if(!w(this,I)?.isStart())return!1;if(w(this,fe)===0)return!0;let e=w(this,I);for(let t=0;t<w(this,fe);t++){let s=w(e,L)[t];if(!(s instanceof X&&s.type==="!"))return!1}return!0}isEnd(){if(w(this,B)===this||w(this,I)?.type==="!")return!0;if(!w(this,I)?.isEnd())return!1;if(!this.type)return w(this,I)?.isEnd();let e=w(this,I)?w(w(this,I),L).length:0;return w(this,fe)===e-1}copyIn(e){typeof e=="string"?this.push(e):this.push(e.clone(this))}clone(e){let t=new X(this.type,e);for(let s of w(this,L))t.copyIn(s);return t}static fromGlob(e,t={}){var r;let s=new X(null,void 0,t);return be(r=X,_e,Et).call(r,e,s,0,t),s}toMMPattern(){if(this!==w(this,B))return w(this,B).toMMPattern();let e=this.toString(),[t,s,r,o]=this.toRegExpSource();if(!(r||w(this,W)||w(this,ce).nocase&&!w(this,ce).nocaseMagicOnly&&e.toUpperCase()!==e.toLowerCase()))return s;let l=(w(this,ce).nocase?"i":"")+(o?"u":"");return Object.assign(new RegExp(`^${t}$`,l),{_src:t,_glob:e})}get options(){return w(this,ce)}toRegExpSource(e){let t=e??!!w(this,ce).dot;if(w(this,B)===this&&be(this,Pt,Ys).call(this),!this.type){let n=this.isStart()&&this.isEnd(),d=w(this,L).map(h=>{var C;let[b,g,x,y]=typeof h=="string"?be(C=X,At,Zs).call(C,h,w(this,W),n):h.toRegExpSource(e);return N(this,W,w(this,W)||x),N(this,he,w(this,he)||y),b}).join(""),c="";if(this.isStart()&&typeof w(this,L)[0]=="string"&&!(w(this,L).length===1&&Ho.has(w(this,L)[0]))){let b=Go,g=t&&b.has(d.charAt(0))||d.startsWith("\\.")&&b.has(d.charAt(2))||d.startsWith("\\.\\.")&&b.has(d.charAt(4)),x=!t&&!e&&b.has(d.charAt(0));c=g?Uo:x?Tt:""}let p="";return this.isEnd()&&w(w(this,B),ve)&&w(this,I)?.type==="!"&&(p="(?:$|\\/)"),[c+d+p,(0,jt.unescape)(d),N(this,W,!!w(this,W)),w(this,he)]}let s=this.type==="*"||this.type==="+",r=this.type==="!"?"(?:(?!(?:":"(?:",o=be(this,Ke,Pi).call(this,t);if(this.isStart()&&this.isEnd()&&!o&&this.type!=="!"){let n=this.toString();return N(this,L,[n]),this.type=null,N(this,W,void 0),[n,(0,jt.unescape)(this.toString()),!1,!1]}let a=!s||e||t||!Tt?"":be(this,Ke,Pi).call(this,!0);a===o&&(a=""),a&&(o=`(?:${o})(?:${a})*?`);let l="";if(this.type==="!"&&w(this,Ve))l=(this.isStart()&&!t?Tt:"")+Js;else{let n=this.type==="!"?"))"+(this.isStart()&&!t&&!e?Tt:"")+Ks+")":this.type==="@"?")":this.type==="?"?")?":this.type==="+"&&a?")":this.type==="*"&&a?")?":`)${this.type}`;l=r+o+n}return[l,(0,jt.unescape)(o),N(this,W,!!w(this,W)),w(this,he)]}},He=X;B=new WeakMap,W=new WeakMap,he=new WeakMap,L=new WeakMap,I=new WeakMap,fe=new WeakMap,ke=new WeakMap,ve=new WeakMap,ce=new WeakMap,Fe=new WeakMap,Ve=new WeakMap,Pt=new WeakSet,Ys=function(){if(this!==w(this,B))throw new Error("should only call on root");if(w(this,ve))return this;this.toString(),N(this,ve,!0);let e;for(;e=w(this,ke).pop();){if(e.type!=="!")continue;let t=e,s=w(t,I);for(;s;){for(let r=w(t,fe)+1;!s.type&&r<w(s,L).length;r++)for(let o of w(e,L)){if(typeof o=="string")throw new Error("string part in extglob AST??");o.copyIn(w(s,L)[r])}t=s,s=w(t,I)}}return this},_e=new WeakSet,Et=function(e,t,s,r){var h,b;let o=!1,a=!1,l=-1,n=!1;if(t.type===null){let g=s,x="";for(;g<e.length;){let y=e.charAt(g++);if(o||y==="\\"){o=!o,x+=y;continue}if(a){g===l+1?(y==="^"||y==="!")&&(n=!0):y==="]"&&!(g===l+2&&n)&&(a=!1),x+=y;continue}else if(y==="["){a=!0,l=g,n=!1,x+=y;continue}if(!r.noext&&Vs(y)&&e.charAt(g)==="("){t.push(x),x="";let C=new X(y,t);g=be(h=X,_e,Et).call(h,e,C,g,r),t.push(C);continue}x+=y}return t.push(x),g}let d=s+1,c=new X(null,t),p=[],u="";for(;d<e.length;){let g=e.charAt(d++);if(o||g==="\\"){o=!o,u+=g;continue}if(a){d===l+1?(g==="^"||g==="!")&&(n=!0):g==="]"&&!(d===l+2&&n)&&(a=!1),u+=g;continue}else if(g==="["){a=!0,l=d,n=!1,u+=g;continue}if(Vs(g)&&e.charAt(d)==="("){c.push(u),u="";let x=new X(g,c);c.push(x),d=be(b=X,_e,Et).call(b,e,x,d,r);continue}if(g==="|"){c.push(u),u="",p.push(c),c=new X(null,t);continue}if(g===")")return u===""&&w(t,L).length===0&&N(t,Ve,!0),c.push(u),u="",t.push(...p,c),d;u+=g}return t.type=null,N(t,W,void 0),N(t,L,[e.substring(s-1)]),d},Ke=new WeakSet,Pi=function(e){return w(this,L).map(t=>{if(typeof t=="string")throw new Error("string type in extglob ast??");let[s,r,o,a]=t.toRegExpSource(e);return N(this,he,w(this,he)||a),s}).filter(t=>!(this.isStart()&&this.isEnd())||!!t).join("|")},At=new WeakSet,Zs=function(e,t,s=!1){let r=!1,o="",a=!1;for(let l=0;l<e.length;l++){let n=e.charAt(l);if(r){r=!1,o+=(Vo.has(n)?"\\":"")+n;continue}if(n==="\\"){l===e.length-1?o+="\\\\":r=!0;continue}if(n==="["){let[d,c,p,u]=(0,qo.parseClass)(e,l);if(p){o+=d,a=a||c,l+=p-1,t=t||u;continue}}if(n==="*"){s&&e==="*"?o+=Js:o+=Ks,t=!0;continue}if(n==="?"){o+=Ai,t=!0;continue}o+=Ko(n)}return[o,(0,jt.unescape)(e),!!t,a]},q(He,_e),q(He,At);Dt.AST=He});var _i=P(_t=>{"use strict";Object.defineProperty(_t,"__esModule",{value:!0});_t.escape=void 0;var Jo=(i,{windowsPathsNoEscape:e=!1}={})=>e?i.replace(/[?*()[\]]/g,"[$&]"):i.replace(/[?*()[\]\\]/g,"\\$&");_t.escape=Jo});var ye=P(F=>{"use strict";var Yo=F&&F.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(F,"__esModule",{value:!0});F.unescape=F.escape=F.AST=F.Minimatch=F.match=F.makeRe=F.braceExpand=F.defaults=F.filter=F.GLOBSTAR=F.sep=F.minimatch=void 0;var Zo=Yo(Ws()),Ot=Us(),zs=Di(),Qo=_i(),Xo=Ct(),zo=(i,e,t={})=>((0,Ot.assertValidPattern)(e),!t.nocomment&&e.charAt(0)==="#"?!1:new Ce(e,t).match(i));F.minimatch=zo;var ea=/^\*+([^+@!?\*\[\(]*)$/,ta=i=>e=>!e.startsWith(".")&&e.endsWith(i),ia=i=>e=>e.endsWith(i),sa=i=>(i=i.toLowerCase(),e=>!e.startsWith(".")&&e.toLowerCase().endsWith(i)),ra=i=>(i=i.toLowerCase(),e=>e.toLowerCase().endsWith(i)),oa=/^\*+\.\*+$/,aa=i=>!i.startsWith(".")&&i.includes("."),na=i=>i!=="."&&i!==".."&&i.includes("."),la=/^\.\*+$/,ca=i=>i!=="."&&i!==".."&&i.startsWith("."),pa=/^\*+$/,da=i=>i.length!==0&&!i.startsWith("."),ua=i=>i.length!==0&&i!=="."&&i!=="..",ha=/^\?+([^+@!?\*\[\(]*)?$/,ga=([i,e=""])=>{let t=er([i]);return e?(e=e.toLowerCase(),s=>t(s)&&s.toLowerCase().endsWith(e)):t},ma=([i,e=""])=>{let t=tr([i]);return e?(e=e.toLowerCase(),s=>t(s)&&s.toLowerCase().endsWith(e)):t},ba=([i,e=""])=>{let t=tr([i]);return e?s=>t(s)&&s.endsWith(e):t},fa=([i,e=""])=>{let t=er([i]);return e?s=>t(s)&&s.endsWith(e):t},er=([i])=>{let e=i.length;return t=>t.length===e&&!t.startsWith(".")},tr=([i])=>{let e=i.length;return t=>t.length===e&&t!=="."&&t!==".."},ir=typeof process=="object"&&process?typeof process.env=="object"&&process.env&&process.env.__MINIMATCH_TESTING_PLATFORM__||process.platform:"posix",Qs={win32:{sep:"\\"},posix:{sep:"/"}};F.sep=ir==="win32"?Qs.win32.sep:Qs.posix.sep;F.minimatch.sep=F.sep;F.GLOBSTAR=Symbol("globstar **");F.minimatch.GLOBSTAR=F.GLOBSTAR;var va="[^/]",ya=va+"*?",wa="(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?",$a="(?:(?!(?:\\/|^)\\.).)*?",xa=(i,e={})=>t=>(0,F.minimatch)(t,i,e);F.filter=xa;F.minimatch.filter=F.filter;var ie=(i,e={})=>Object.assign({},i,e),ka=i=>{if(!i||typeof i!="object"||!Object.keys(i).length)return F.minimatch;let e=F.minimatch;return Object.assign((s,r,o={})=>e(s,r,ie(i,o)),{Minimatch:class extends e.Minimatch{constructor(r,o={}){super(r,ie(i,o))}static defaults(r){return e.defaults(ie(i,r)).Minimatch}},AST:class extends e.AST{constructor(r,o,a={}){super(r,o,ie(i,a))}static fromGlob(r,o={}){return e.AST.fromGlob(r,ie(i,o))}},unescape:(s,r={})=>e.unescape(s,ie(i,r)),escape:(s,r={})=>e.escape(s,ie(i,r)),filter:(s,r={})=>e.filter(s,ie(i,r)),defaults:s=>e.defaults(ie(i,s)),makeRe:(s,r={})=>e.makeRe(s,ie(i,r)),braceExpand:(s,r={})=>e.braceExpand(s,ie(i,r)),match:(s,r,o={})=>e.match(s,r,ie(i,o)),sep:e.sep,GLOBSTAR:F.GLOBSTAR})};F.defaults=ka;F.minimatch.defaults=F.defaults;var Fa=(i,e={})=>((0,Ot.assertValidPattern)(i),e.nobrace||!/\{(?:(?!\{).)*\}/.test(i)?[i]:(0,Zo.default)(i));F.braceExpand=Fa;F.minimatch.braceExpand=F.braceExpand;var Ca=(i,e={})=>new Ce(i,e).makeRe();F.makeRe=Ca;F.minimatch.makeRe=F.makeRe;var ja=(i,e,t={})=>{let s=new Ce(e,t);return i=i.filter(r=>s.match(r)),s.options.nonull&&!i.length&&i.push(e),i};F.match=ja;F.minimatch.match=F.match;var Xs=/[?*]|[+@!]\(.*?\)|\[|\]/,Ta=i=>i.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),Ce=class{options;set;pattern;windowsPathsNoEscape;nonegate;negate;comment;empty;preserveMultipleSlashes;partial;globSet;globParts;nocase;isWindows;platform;windowsNoMagicRoot;regexp;constructor(e,t={}){(0,Ot.assertValidPattern)(e),t=t||{},this.options=t,this.pattern=e,this.platform=t.platform||ir,this.isWindows=this.platform==="win32",this.windowsPathsNoEscape=!!t.windowsPathsNoEscape||t.allowWindowsEscape===!1,this.windowsPathsNoEscape&&(this.pattern=this.pattern.replace(/\\/g,"/")),this.preserveMultipleSlashes=!!t.preserveMultipleSlashes,this.regexp=null,this.negate=!1,this.nonegate=!!t.nonegate,this.comment=!1,this.empty=!1,this.partial=!!t.partial,this.nocase=!!this.options.nocase,this.windowsNoMagicRoot=t.windowsNoMagicRoot!==void 0?t.windowsNoMagicRoot:!!(this.isWindows&&this.nocase),this.globSet=[],this.globParts=[],this.set=[],this.make()}hasMagic(){if(this.options.magicalBraces&&this.set.length>1)return!0;for(let e of this.set)for(let t of e)if(typeof t!="string")return!0;return!1}debug(...e){}make(){let e=this.pattern,t=this.options;if(!t.nocomment&&e.charAt(0)==="#"){this.comment=!0;return}if(!e){this.empty=!0;return}this.parseNegate(),this.globSet=[...new Set(this.braceExpand())],t.debug&&(this.debug=(...o)=>console.error(...o)),this.debug(this.pattern,this.globSet);let s=this.globSet.map(o=>this.slashSplit(o));this.globParts=this.preprocess(s),this.debug(this.pattern,this.globParts);let r=this.globParts.map((o,a,l)=>{if(this.isWindows&&this.windowsNoMagicRoot){let n=o[0]===""&&o[1]===""&&(o[2]==="?"||!Xs.test(o[2]))&&!Xs.test(o[3]),d=/^[a-z]:/i.test(o[0]);if(n)return[...o.slice(0,4),...o.slice(4).map(c=>this.parse(c))];if(d)return[o[0],...o.slice(1).map(c=>this.parse(c))]}return o.map(n=>this.parse(n))});if(this.debug(this.pattern,r),this.set=r.filter(o=>o.indexOf(!1)===-1),this.isWindows)for(let o=0;o<this.set.length;o++){let a=this.set[o];a[0]===""&&a[1]===""&&this.globParts[o][2]==="?"&&typeof a[3]=="string"&&/^[a-z]:$/i.test(a[3])&&(a[2]="?")}this.debug(this.pattern,this.set)}preprocess(e){if(this.options.noglobstar)for(let s=0;s<e.length;s++)for(let r=0;r<e[s].length;r++)e[s][r]==="**"&&(e[s][r]="*");let{optimizationLevel:t=1}=this.options;return t>=2?(e=this.firstPhasePreProcess(e),e=this.secondPhasePreProcess(e)):t>=1?e=this.levelOneOptimize(e):e=this.adjascentGlobstarOptimize(e),e}adjascentGlobstarOptimize(e){return e.map(t=>{let s=-1;for(;(s=t.indexOf("**",s+1))!==-1;){let r=s;for(;t[r+1]==="**";)r++;r!==s&&t.splice(s,r-s)}return t})}levelOneOptimize(e){return e.map(t=>(t=t.reduce((s,r)=>{let o=s[s.length-1];return r==="**"&&o==="**"?s:r===".."&&o&&o!==".."&&o!=="."&&o!=="**"?(s.pop(),s):(s.push(r),s)},[]),t.length===0?[""]:t))}levelTwoFileOptimize(e){Array.isArray(e)||(e=this.slashSplit(e));let t=!1;do{if(t=!1,!this.preserveMultipleSlashes){for(let r=1;r<e.length-1;r++){let o=e[r];r===1&&o===""&&e[0]===""||(o==="."||o==="")&&(t=!0,e.splice(r,1),r--)}e[0]==="."&&e.length===2&&(e[1]==="."||e[1]==="")&&(t=!0,e.pop())}let s=0;for(;(s=e.indexOf("..",s+1))!==-1;){let r=e[s-1];r&&r!=="."&&r!==".."&&r!=="**"&&(t=!0,e.splice(s-1,2),s-=2)}}while(t);return e.length===0?[""]:e}firstPhasePreProcess(e){let t=!1;do{t=!1;for(let s of e){let r=-1;for(;(r=s.indexOf("**",r+1))!==-1;){let a=r;for(;s[a+1]==="**";)a++;a>r&&s.splice(r+1,a-r);let l=s[r+1],n=s[r+2],d=s[r+3];if(l!==".."||!n||n==="."||n===".."||!d||d==="."||d==="..")continue;t=!0,s.splice(r,1);let c=s.slice(0);c[r]="**",e.push(c),r--}if(!this.preserveMultipleSlashes){for(let a=1;a<s.length-1;a++){let l=s[a];a===1&&l===""&&s[0]===""||(l==="."||l==="")&&(t=!0,s.splice(a,1),a--)}s[0]==="."&&s.length===2&&(s[1]==="."||s[1]==="")&&(t=!0,s.pop())}let o=0;for(;(o=s.indexOf("..",o+1))!==-1;){let a=s[o-1];if(a&&a!=="."&&a!==".."&&a!=="**"){t=!0;let n=o===1&&s[o+1]==="**"?["."]:[];s.splice(o-1,2,...n),s.length===0&&s.push(""),o-=2}}}}while(t);return e}secondPhasePreProcess(e){for(let t=0;t<e.length-1;t++)for(let s=t+1;s<e.length;s++){let r=this.partsMatch(e[t],e[s],!this.preserveMultipleSlashes);!r||(e[t]=r,e[s]=[])}return e.filter(t=>t.length)}partsMatch(e,t,s=!1){let r=0,o=0,a=[],l="";for(;r<e.length&&o<t.length;)if(e[r]===t[o])a.push(l==="b"?t[o]:e[r]),r++,o++;else if(s&&e[r]==="**"&&t[o]===e[r+1])a.push(e[r]),r++;else if(s&&t[o]==="**"&&e[r]===t[o+1])a.push(t[o]),o++;else if(e[r]==="*"&&t[o]&&(this.options.dot||!t[o].startsWith("."))&&t[o]!=="**"){if(l==="b")return!1;l="a",a.push(e[r]),r++,o++}else if(t[o]==="*"&&e[r]&&(this.options.dot||!e[r].startsWith("."))&&e[r]!=="**"){if(l==="a")return!1;l="b",a.push(t[o]),r++,o++}else return!1;return e.length===t.length&&a}parseNegate(){if(this.nonegate)return;let e=this.pattern,t=!1,s=0;for(let r=0;r<e.length&&e.charAt(r)==="!";r++)t=!t,s++;s&&(this.pattern=e.slice(s)),this.negate=t}matchOne(e,t,s=!1){let r=this.options;if(this.isWindows){let g=typeof e[0]=="string"&&/^[a-z]:$/i.test(e[0]),x=!g&&e[0]===""&&e[1]===""&&e[2]==="?"&&/^[a-z]:$/i.test(e[3]),y=typeof t[0]=="string"&&/^[a-z]:$/i.test(t[0]),C=!y&&t[0]===""&&t[1]===""&&t[2]==="?"&&typeof t[3]=="string"&&/^[a-z]:$/i.test(t[3]),j=x?3:g?0:void 0,T=C?3:y?0:void 0;if(typeof j=="number"&&typeof T=="number"){let[_,D]=[e[j],t[T]];_.toLowerCase()===D.toLowerCase()&&(t[T]=_,T>j?t=t.slice(T):j>T&&(e=e.slice(j)))}}let{optimizationLevel:o=1}=this.options;o>=2&&(e=this.levelTwoFileOptimize(e)),this.debug("matchOne",this,{file:e,pattern:t}),this.debug("matchOne",e.length,t.length);for(var a=0,l=0,n=e.length,d=t.length;a<n&&l<d;a++,l++){this.debug("matchOne loop");var c=t[l],p=e[a];if(this.debug(t,c,p),c===!1)return!1;if(c===F.GLOBSTAR){this.debug("GLOBSTAR",[t,c,p]);var u=a,h=l+1;if(h===d){for(this.debug("** at the end");a<n;a++)if(e[a]==="."||e[a]===".."||!r.dot&&e[a].charAt(0)===".")return!1;return!0}for(;u<n;){var b=e[u];if(this.debug(`
globstar while`,e,u,t,h,b),this.matchOne(e.slice(u),t.slice(h),s))return this.debug("globstar found match!",u,n,b),!0;if(b==="."||b===".."||!r.dot&&b.charAt(0)==="."){this.debug("dot detected!",e,u,t,h);break}this.debug("globstar swallow a segment, and continue"),u++}return!!(s&&(this.debug(`
>>> no match, partial?`,e,u,t,h),u===n))}let g;if(typeof c=="string"?(g=p===c,this.debug("string match",c,p,g)):(g=c.test(p),this.debug("pattern match",c,p,g)),!g)return!1}if(a===n&&l===d)return!0;if(a===n)return s;if(l===d)return a===n-1&&e[a]==="";throw new Error("wtf?")}braceExpand(){return(0,F.braceExpand)(this.pattern,this.options)}parse(e){(0,Ot.assertValidPattern)(e);let t=this.options;if(e==="**")return F.GLOBSTAR;if(e==="")return"";let s,r=null;(s=e.match(pa))?r=t.dot?ua:da:(s=e.match(ea))?r=(t.nocase?t.dot?ra:sa:t.dot?ia:ta)(s[1]):(s=e.match(ha))?r=(t.nocase?t.dot?ma:ga:t.dot?ba:fa)(s):(s=e.match(oa))?r=t.dot?na:aa:(s=e.match(la))&&(r=ca);let o=zs.AST.fromGlob(e,this.options).toMMPattern();return r&&typeof o=="object"&&Reflect.defineProperty(o,"test",{value:r}),o}makeRe(){if(this.regexp||this.regexp===!1)return this.regexp;let e=this.set;if(!e.length)return this.regexp=!1,this.regexp;let t=this.options,s=t.noglobstar?ya:t.dot?wa:$a,r=new Set(t.nocase?["i"]:[]),o=e.map(n=>{let d=n.map(c=>{if(c instanceof RegExp)for(let p of c.flags.split(""))r.add(p);return typeof c=="string"?Ta(c):c===F.GLOBSTAR?F.GLOBSTAR:c._src});return d.forEach((c,p)=>{let u=d[p+1],h=d[p-1];c!==F.GLOBSTAR||h===F.GLOBSTAR||(h===void 0?u!==void 0&&u!==F.GLOBSTAR?d[p+1]="(?:\\/|"+s+"\\/)?"+u:d[p]=s:u===void 0?d[p-1]=h+"(?:\\/|"+s+")?":u!==F.GLOBSTAR&&(d[p-1]=h+"(?:\\/|\\/"+s+"\\/)"+u,d[p+1]=F.GLOBSTAR))}),d.filter(c=>c!==F.GLOBSTAR).join("/")}).join("|"),[a,l]=e.length>1?["(?:",")"]:["",""];o="^"+a+o+l+"$",this.negate&&(o="^(?!"+o+").+$");try{this.regexp=new RegExp(o,[...r].join(""))}catch{this.regexp=!1}return this.regexp}slashSplit(e){return this.preserveMultipleSlashes?e.split("/"):this.isWindows&&/^\/\/[^\/]+/.test(e)?["",...e.split(/\/+/)]:e.split(/\/+/)}match(e,t=this.partial){if(this.debug("match",e,this.pattern),this.comment)return!1;if(this.empty)return e==="";if(e==="/"&&t)return!0;let s=this.options;this.isWindows&&(e=e.split("\\").join("/"));let r=this.slashSplit(e);this.debug(this.pattern,"split",r);let o=this.set;this.debug(this.pattern,"set",o);let a=r[r.length-1];if(!a)for(let l=r.length-2;!a&&l>=0;l--)a=r[l];for(let l=0;l<o.length;l++){let n=o[l],d=r;if(s.matchBase&&n.length===1&&(d=[a]),this.matchOne(d,n,t))return s.flipNegate?!0:!this.negate}return s.flipNegate?!1:this.negate}static defaults(e){return F.minimatch.defaults(e).Minimatch}};F.Minimatch=Ce;var Ea=Di();Object.defineProperty(F,"AST",{enumerable:!0,get:function(){return Ea.AST}});var Pa=_i();Object.defineProperty(F,"escape",{enumerable:!0,get:function(){return Pa.escape}});var Aa=Ct();Object.defineProperty(F,"unescape",{enumerable:!0,get:function(){return Aa.unescape}});F.minimatch.AST=zs.AST;F.minimatch.Minimatch=Ce;F.minimatch.escape=Qo.escape;F.minimatch.unescape=Xo.unescape});var nr=P(Lt=>{"use strict";Object.defineProperty(Lt,"__esModule",{value:!0});Lt.LRUCache=void 0;var Oe=typeof performance=="object"&&performance&&typeof performance.now=="function"?performance:Date,rr=new Set,Oi=typeof process=="object"&&!!process?process:{},or=(i,e,t,s)=>{typeof Oi.emitWarning=="function"?Oi.emitWarning(i,e,t,s):console.error(`[${t}] ${e}: ${i}`)},Nt=globalThis.AbortController,sr=globalThis.AbortSignal;if(typeof Nt>"u"){sr=class{onabort;_onabort=[];reason;aborted=!1;addEventListener(s,r){this._onabort.push(r)}},Nt=class{constructor(){e()}signal=new sr;abort(s){if(!this.signal.aborted){this.signal.reason=s,this.signal.aborted=!0;for(let r of this.signal._onabort)r(s);this.signal.onabort?.(s)}}};let i=Oi.env?.LRU_CACHE_IGNORE_AC_WARNING!=="1",e=()=>{!i||(i=!1,or("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.","NO_ABORT_CONTROLLER","ENOTSUP",e))}}var Da=i=>!rr.has(i),ol=Symbol("type"),we=i=>i&&i===Math.floor(i)&&i>0&&isFinite(i),ar=i=>we(i)?i<=Math.pow(2,8)?Uint8Array:i<=Math.pow(2,16)?Uint16Array:i<=Math.pow(2,32)?Uint32Array:i<=Number.MAX_SAFE_INTEGER?Ne:null:null,Ne=class extends Array{constructor(e){super(e),this.fill(0)}},Le,Re=class{heap;length;static create(e){let t=ar(e);if(!t)return[];N(Re,Le,!0);let s=new Re(e,t);return N(Re,Le,!1),s}constructor(e,t){if(!w(Re,Le))throw new TypeError("instantiate Stack using Stack.create(n)");this.heap=new t(e),this.length=0}push(e){this.heap[this.length++]=e}pop(){return this.heap[--this.length]}},Rt=Re;Le=new WeakMap,q(Rt,Le,!1);var Je=class{#t;#r;#s;#n;#d;ttl;ttlResolution;ttlAutopurge;updateAgeOnGet;updateAgeOnHas;allowStale;noDisposeOnSet;noUpdateTTL;maxEntrySize;sizeCalculation;noDeleteOnFetchRejection;noDeleteOnStaleGet;allowStaleOnFetchAbort;allowStaleOnFetchRejection;ignoreFetchAbort;#c;#g;#l;#o;#e;#b;#y;#m;#u;#F;#h;#C;#j;#w;#v;#E;#p;static unsafeExposeInternals(e){return{starts:e.#j,ttls:e.#w,sizes:e.#C,keyMap:e.#l,keyList:e.#o,valList:e.#e,next:e.#b,prev:e.#y,get head(){return e.#m},get tail(){return e.#u},free:e.#F,isBackgroundFetch:t=>e.#a(t),backgroundFetch:(t,s,r,o)=>e.#R(t,s,r,o),moveToTail:t=>e.#O(t),indexes:t=>e.#k(t),rindexes:t=>e.#P(t),isStale:t=>e.#f(t)}}get max(){return this.#t}get maxSize(){return this.#r}get calculatedSize(){return this.#g}get size(){return this.#c}get fetchMethod(){return this.#d}get dispose(){return this.#s}get disposeAfter(){return this.#n}constructor(e){let{max:t=0,ttl:s,ttlResolution:r=1,ttlAutopurge:o,updateAgeOnGet:a,updateAgeOnHas:l,allowStale:n,dispose:d,disposeAfter:c,noDisposeOnSet:p,noUpdateTTL:u,maxSize:h=0,maxEntrySize:b=0,sizeCalculation:g,fetchMethod:x,noDeleteOnFetchRejection:y,noDeleteOnStaleGet:C,allowStaleOnFetchRejection:j,allowStaleOnFetchAbort:T,ignoreFetchAbort:_}=e;if(t!==0&&!we(t))throw new TypeError("max option must be a nonnegative integer");let D=t?ar(t):Array;if(!D)throw new Error("invalid max value: "+t);if(this.#t=t,this.#r=h,this.maxEntrySize=b||this.#r,this.sizeCalculation=g,this.sizeCalculation){if(!this.#r&&!this.maxEntrySize)throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");if(typeof this.sizeCalculation!="function")throw new TypeError("sizeCalculation set to non-function")}if(x!==void 0&&typeof x!="function")throw new TypeError("fetchMethod must be a function if specified");if(this.#d=x,this.#E=!!x,this.#l=new Map,this.#o=new Array(t).fill(void 0),this.#e=new Array(t).fill(void 0),this.#b=new D(t),this.#y=new D(t),this.#m=0,this.#u=0,this.#F=Rt.create(t),this.#c=0,this.#g=0,typeof d=="function"&&(this.#s=d),typeof c=="function"?(this.#n=c,this.#h=[]):(this.#n=void 0,this.#h=void 0),this.#v=!!this.#s,this.#p=!!this.#n,this.noDisposeOnSet=!!p,this.noUpdateTTL=!!u,this.noDeleteOnFetchRejection=!!y,this.allowStaleOnFetchRejection=!!j,this.allowStaleOnFetchAbort=!!T,this.ignoreFetchAbort=!!_,this.maxEntrySize!==0){if(this.#r!==0&&!we(this.#r))throw new TypeError("maxSize must be a positive integer if specified");if(!we(this.maxEntrySize))throw new TypeError("maxEntrySize must be a positive integer if specified");this.#D()}if(this.allowStale=!!n,this.noDeleteOnStaleGet=!!C,this.updateAgeOnGet=!!a,this.updateAgeOnHas=!!l,this.ttlResolution=we(r)||r===0?r:1,this.ttlAutopurge=!!o,this.ttl=s||0,this.ttl){if(!we(this.ttl))throw new TypeError("ttl must be a positive integer if specified");this.#A()}if(this.#t===0&&this.ttl===0&&this.#r===0)throw new TypeError("At least one of max, maxSize, or ttl is required");if(!this.ttlAutopurge&&!this.#t&&!this.#r){let S="LRU_CACHE_UNBOUNDED";Da(S)&&(rr.add(S),or("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.","UnboundedCacheWarning",S,Je))}}getRemainingTTL(e){return this.#l.has(e)?1/0:0}#A(){let e=new Ne(this.#t),t=new Ne(this.#t);this.#w=e,this.#j=t,this.#i=(o,a,l=Oe.now())=>{if(t[o]=a!==0?l:0,e[o]=a,a!==0&&this.ttlAutopurge){let n=setTimeout(()=>{this.#f(o)&&this.delete(this.#o[o])},a+1);n.unref&&n.unref()}},this.#T=o=>{t[o]=e[o]!==0?Oe.now():0},this.#$=(o,a)=>{if(e[a]){let l=e[a],n=t[a];if(!l||!n)return;o.ttl=l,o.start=n,o.now=s||r();let d=o.now-n;o.remainingTTL=l-d}};let s=0,r=()=>{let o=Oe.now();if(this.ttlResolution>0){s=o;let a=setTimeout(()=>s=0,this.ttlResolution);a.unref&&a.unref()}return o};this.getRemainingTTL=o=>{let a=this.#l.get(o);if(a===void 0)return 0;let l=e[a],n=t[a];if(!l||!n)return 1/0;let d=(s||r())-n;return l-d},this.#f=o=>{let a=t[o],l=e[o];return!!l&&!!a&&(s||r())-a>l}}#T=()=>{};#$=()=>{};#i=()=>{};#f=()=>!1;#D(){let e=new Ne(this.#t);this.#g=0,this.#C=e,this.#x=t=>{this.#g-=e[t],e[t]=0},this.#L=(t,s,r,o)=>{if(this.#a(s))return 0;if(!we(r))if(o){if(typeof o!="function")throw new TypeError("sizeCalculation must be a function");if(r=o(s,t),!we(r))throw new TypeError("sizeCalculation return invalid (expect positive integer)")}else throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");return r},this.#N=(t,s,r)=>{if(e[t]=s,this.#r){let o=this.#r-e[t];for(;this.#g>o;)this.#_(!0)}this.#g+=e[t],r&&(r.entrySize=s,r.totalCalculatedSize=this.#g)}}#x=e=>{};#N=(e,t,s)=>{};#L=(e,t,s,r)=>{if(s||r)throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");return 0};*#k({allowStale:e=this.allowStale}={}){if(this.#c)for(let t=this.#u;!(!this.#M(t)||((e||!this.#f(t))&&(yield t),t===this.#m));)t=this.#y[t]}*#P({allowStale:e=this.allowStale}={}){if(this.#c)for(let t=this.#m;!(!this.#M(t)||((e||!this.#f(t))&&(yield t),t===this.#u));)t=this.#b[t]}#M(e){return e!==void 0&&this.#l.get(this.#o[e])===e}*entries(){for(let e of this.#k())this.#e[e]!==void 0&&this.#o[e]!==void 0&&!this.#a(this.#e[e])&&(yield[this.#o[e],this.#e[e]])}*rentries(){for(let e of this.#P())this.#e[e]!==void 0&&this.#o[e]!==void 0&&!this.#a(this.#e[e])&&(yield[this.#o[e],this.#e[e]])}*keys(){for(let e of this.#k()){let t=this.#o[e];t!==void 0&&!this.#a(this.#e[e])&&(yield t)}}*rkeys(){for(let e of this.#P()){let t=this.#o[e];t!==void 0&&!this.#a(this.#e[e])&&(yield t)}}*values(){for(let e of this.#k())this.#e[e]!==void 0&&!this.#a(this.#e[e])&&(yield this.#e[e])}*rvalues(){for(let e of this.#P())this.#e[e]!==void 0&&!this.#a(this.#e[e])&&(yield this.#e[e])}[Symbol.iterator](){return this.entries()}[Symbol.toStringTag]="LRUCache";find(e,t={}){for(let s of this.#k()){let r=this.#e[s],o=this.#a(r)?r.__staleWhileFetching:r;if(o!==void 0&&e(o,this.#o[s],this))return this.get(this.#o[s],t)}}forEach(e,t=this){for(let s of this.#k()){let r=this.#e[s],o=this.#a(r)?r.__staleWhileFetching:r;o!==void 0&&e.call(t,o,this.#o[s],this)}}rforEach(e,t=this){for(let s of this.#P()){let r=this.#e[s],o=this.#a(r)?r.__staleWhileFetching:r;o!==void 0&&e.call(t,o,this.#o[s],this)}}purgeStale(){let e=!1;for(let t of this.#P({allowStale:!0}))this.#f(t)&&(this.delete(this.#o[t]),e=!0);return e}info(e){let t=this.#l.get(e);if(t===void 0)return;let s=this.#e[t],r=this.#a(s)?s.__staleWhileFetching:s;if(r===void 0)return;let o={value:r};if(this.#w&&this.#j){let a=this.#w[t],l=this.#j[t];if(a&&l){let n=a-(Oe.now()-l);o.ttl=n,o.start=Date.now()}}return this.#C&&(o.size=this.#C[t]),o}dump(){let e=[];for(let t of this.#k({allowStale:!0})){let s=this.#o[t],r=this.#e[t],o=this.#a(r)?r.__staleWhileFetching:r;if(o===void 0||s===void 0)continue;let a={value:o};if(this.#w&&this.#j){a.ttl=this.#w[t];let l=Oe.now()-this.#j[t];a.start=Math.floor(Date.now()-l)}this.#C&&(a.size=this.#C[t]),e.unshift([s,a])}return e}load(e){this.clear();for(let[t,s]of e){if(s.start){let r=Date.now()-s.start;s.start=Oe.now()-r}this.set(t,s.value,s)}}set(e,t,s={}){if(t===void 0)return this.delete(e),this;let{ttl:r=this.ttl,start:o,noDisposeOnSet:a=this.noDisposeOnSet,sizeCalculation:l=this.sizeCalculation,status:n}=s,{noUpdateTTL:d=this.noUpdateTTL}=s,c=this.#L(e,t,s.size||0,l);if(this.maxEntrySize&&c>this.maxEntrySize)return n&&(n.set="miss",n.maxEntrySizeExceeded=!0),this.delete(e),this;let p=this.#c===0?void 0:this.#l.get(e);if(p===void 0)p=this.#c===0?this.#u:this.#F.length!==0?this.#F.pop():this.#c===this.#t?this.#_(!1):this.#c,this.#o[p]=e,this.#e[p]=t,this.#l.set(e,p),this.#b[this.#u]=p,this.#y[p]=this.#u,this.#u=p,this.#c++,this.#N(p,c,n),n&&(n.set="add"),d=!1;else{this.#O(p);let u=this.#e[p];if(t!==u){if(this.#E&&this.#a(u)){u.__abortController.abort(new Error("replaced"));let{__staleWhileFetching:h}=u;h!==void 0&&!a&&(this.#v&&this.#s?.(h,e,"set"),this.#p&&this.#h?.push([h,e,"set"]))}else a||(this.#v&&this.#s?.(u,e,"set"),this.#p&&this.#h?.push([u,e,"set"]));if(this.#x(p),this.#N(p,c,n),this.#e[p]=t,n){n.set="replace";let h=u&&this.#a(u)?u.__staleWhileFetching:u;h!==void 0&&(n.oldValue=h)}}else n&&(n.set="update")}if(r!==0&&!this.#w&&this.#A(),this.#w&&(d||this.#i(p,r,o),n&&this.#$(n,p)),!a&&this.#p&&this.#h){let u=this.#h,h;for(;h=u?.shift();)this.#n?.(...h)}return this}pop(){try{for(;this.#c;){let e=this.#e[this.#m];if(this.#_(!0),this.#a(e)){if(e.__staleWhileFetching)return e.__staleWhileFetching}else if(e!==void 0)return e}}finally{if(this.#p&&this.#h){let e=this.#h,t;for(;t=e?.shift();)this.#n?.(...t)}}}#_(e){let t=this.#m,s=this.#o[t],r=this.#e[t];return this.#E&&this.#a(r)?r.__abortController.abort(new Error("evicted")):(this.#v||this.#p)&&(this.#v&&this.#s?.(r,s,"evict"),this.#p&&this.#h?.push([r,s,"evict"])),this.#x(t),e&&(this.#o[t]=void 0,this.#e[t]=void 0,this.#F.push(t)),this.#c===1?(this.#m=this.#u=0,this.#F.length=0):this.#m=this.#b[t],this.#l.delete(s),this.#c--,t}has(e,t={}){let{updateAgeOnHas:s=this.updateAgeOnHas,status:r}=t,o=this.#l.get(e);if(o!==void 0){let a=this.#e[o];if(this.#a(a)&&a.__staleWhileFetching===void 0)return!1;if(this.#f(o))r&&(r.has="stale",this.#$(r,o));else return s&&this.#T(o),r&&(r.has="hit",this.#$(r,o)),!0}else r&&(r.has="miss");return!1}peek(e,t={}){let{allowStale:s=this.allowStale}=t,r=this.#l.get(e);if(r===void 0||!s&&this.#f(r))return;let o=this.#e[r];return this.#a(o)?o.__staleWhileFetching:o}#R(e,t,s,r){let o=t===void 0?void 0:this.#e[t];if(this.#a(o))return o;let a=new Nt,{signal:l}=s;l?.addEventListener("abort",()=>a.abort(l.reason),{signal:a.signal});let n={signal:a.signal,options:s,context:r},d=(g,x=!1)=>{let{aborted:y}=a.signal,C=s.ignoreFetchAbort&&g!==void 0;if(s.status&&(y&&!x?(s.status.fetchAborted=!0,s.status.fetchError=a.signal.reason,C&&(s.status.fetchAbortIgnored=!0)):s.status.fetchResolved=!0),y&&!C&&!x)return p(a.signal.reason);let j=h;return this.#e[t]===h&&(g===void 0?j.__staleWhileFetching?this.#e[t]=j.__staleWhileFetching:this.delete(e):(s.status&&(s.status.fetchUpdated=!0),this.set(e,g,n.options))),g},c=g=>(s.status&&(s.status.fetchRejected=!0,s.status.fetchError=g),p(g)),p=g=>{let{aborted:x}=a.signal,y=x&&s.allowStaleOnFetchAbort,C=y||s.allowStaleOnFetchRejection,j=C||s.noDeleteOnFetchRejection,T=h;if(this.#e[t]===h&&(!j||T.__staleWhileFetching===void 0?this.delete(e):y||(this.#e[t]=T.__staleWhileFetching)),C)return s.status&&T.__staleWhileFetching!==void 0&&(s.status.returnedStale=!0),T.__staleWhileFetching;if(T.__returned===T)throw g},u=(g,x)=>{let y=this.#d?.(e,o,n);y&&y instanceof Promise&&y.then(C=>g(C===void 0?void 0:C),x),a.signal.addEventListener("abort",()=>{(!s.ignoreFetchAbort||s.allowStaleOnFetchAbort)&&(g(void 0),s.allowStaleOnFetchAbort&&(g=C=>d(C,!0)))})};s.status&&(s.status.fetchDispatched=!0);let h=new Promise(u).then(d,c),b=Object.assign(h,{__abortController:a,__staleWhileFetching:o,__returned:void 0});return t===void 0?(this.set(e,b,{...n.options,status:void 0}),t=this.#l.get(e)):this.#e[t]=b,b}#a(e){if(!this.#E)return!1;let t=e;return!!t&&t instanceof Promise&&t.hasOwnProperty("__staleWhileFetching")&&t.__abortController instanceof Nt}async fetch(e,t={}){let{allowStale:s=this.allowStale,updateAgeOnGet:r=this.updateAgeOnGet,noDeleteOnStaleGet:o=this.noDeleteOnStaleGet,ttl:a=this.ttl,noDisposeOnSet:l=this.noDisposeOnSet,size:n=0,sizeCalculation:d=this.sizeCalculation,noUpdateTTL:c=this.noUpdateTTL,noDeleteOnFetchRejection:p=this.noDeleteOnFetchRejection,allowStaleOnFetchRejection:u=this.allowStaleOnFetchRejection,ignoreFetchAbort:h=this.ignoreFetchAbort,allowStaleOnFetchAbort:b=this.allowStaleOnFetchAbort,context:g,forceRefresh:x=!1,status:y,signal:C}=t;if(!this.#E)return y&&(y.fetch="get"),this.get(e,{allowStale:s,updateAgeOnGet:r,noDeleteOnStaleGet:o,status:y});let j={allowStale:s,updateAgeOnGet:r,noDeleteOnStaleGet:o,ttl:a,noDisposeOnSet:l,size:n,sizeCalculation:d,noUpdateTTL:c,noDeleteOnFetchRejection:p,allowStaleOnFetchRejection:u,allowStaleOnFetchAbort:b,ignoreFetchAbort:h,status:y,signal:C},T=this.#l.get(e);if(T===void 0){y&&(y.fetch="miss");let _=this.#R(e,T,j,g);return _.__returned=_}else{let _=this.#e[T];if(this.#a(_)){let mt=s&&_.__staleWhileFetching!==void 0;return y&&(y.fetch="inflight",mt&&(y.returnedStale=!0)),mt?_.__staleWhileFetching:_.__returned=_}let D=this.#f(T);if(!x&&!D)return y&&(y.fetch="hit"),this.#O(T),r&&this.#T(T),y&&this.#$(y,T),_;let S=this.#R(e,T,j,g),oe=S.__staleWhileFetching!==void 0&&s;return y&&(y.fetch=D?"stale":"refresh",oe&&D&&(y.returnedStale=!0)),oe?S.__staleWhileFetching:S.__returned=S}}get(e,t={}){let{allowStale:s=this.allowStale,updateAgeOnGet:r=this.updateAgeOnGet,noDeleteOnStaleGet:o=this.noDeleteOnStaleGet,status:a}=t,l=this.#l.get(e);if(l!==void 0){let n=this.#e[l],d=this.#a(n);return a&&this.#$(a,l),this.#f(l)?(a&&(a.get="stale"),d?(a&&s&&n.__staleWhileFetching!==void 0&&(a.returnedStale=!0),s?n.__staleWhileFetching:void 0):(o||this.delete(e),a&&s&&(a.returnedStale=!0),s?n:void 0)):(a&&(a.get="hit"),d?n.__staleWhileFetching:(this.#O(l),r&&this.#T(l),n))}else a&&(a.get="miss")}#I(e,t){this.#y[t]=e,this.#b[e]=t}#O(e){e!==this.#u&&(e===this.#m?this.#m=this.#b[e]:this.#I(this.#y[e],this.#b[e]),this.#I(this.#u,e),this.#u=e)}delete(e){let t=!1;if(this.#c!==0){let s=this.#l.get(e);if(s!==void 0)if(t=!0,this.#c===1)this.clear();else{this.#x(s);let r=this.#e[s];if(this.#a(r)?r.__abortController.abort(new Error("deleted")):(this.#v||this.#p)&&(this.#v&&this.#s?.(r,e,"delete"),this.#p&&this.#h?.push([r,e,"delete"])),this.#l.delete(e),this.#o[s]=void 0,this.#e[s]=void 0,s===this.#u)this.#u=this.#y[s];else if(s===this.#m)this.#m=this.#b[s];else{let o=this.#y[s];this.#b[o]=this.#b[s];let a=this.#b[s];this.#y[a]=this.#y[s]}this.#c--,this.#F.push(s)}}if(this.#p&&this.#h?.length){let s=this.#h,r;for(;r=s?.shift();)this.#n?.(...r)}return t}clear(){for(let e of this.#P({allowStale:!0})){let t=this.#e[e];if(this.#a(t))t.__abortController.abort(new Error("deleted"));else{let s=this.#o[e];this.#v&&this.#s?.(t,s,"delete"),this.#p&&this.#h?.push([t,s,"delete"])}}if(this.#l.clear(),this.#e.fill(void 0),this.#o.fill(void 0),this.#w&&this.#j&&(this.#w.fill(0),this.#j.fill(0)),this.#C&&this.#C.fill(0),this.#m=0,this.#u=0,this.#F.length=0,this.#g=0,this.#c=0,this.#p&&this.#h){let e=this.#h,t;for(;t=e?.shift();)this.#n?.(...t)}}};Lt.LRUCache=Je});var qi=P(Z=>{"use strict";var _a=Z&&Z.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(Z,"__esModule",{value:!0});Z.Minipass=Z.isWritable=Z.isReadable=Z.isStream=void 0;var lr=typeof process=="object"&&process?process:{stdout:null,stderr:null},Bi=require("events"),ur=_a(require("stream")),Oa=require("string_decoder"),Ra=i=>!!i&&typeof i=="object"&&(i instanceof Ut||i instanceof ur.default||(0,Z.isReadable)(i)||(0,Z.isWritable)(i));Z.isStream=Ra;var Na=i=>!!i&&typeof i=="object"&&i instanceof Bi.EventEmitter&&typeof i.pipe=="function"&&i.pipe!==ur.default.Writable.prototype.pipe;Z.isReadable=Na;var La=i=>!!i&&typeof i=="object"&&i instanceof Bi.EventEmitter&&typeof i.write=="function"&&typeof i.end=="function";Z.isWritable=La;var ge=Symbol("EOF"),me=Symbol("maybeEmitEnd"),$e=Symbol("emittedEnd"),Mt=Symbol("emittingEnd"),Ye=Symbol("emittedError"),It=Symbol("closed"),cr=Symbol("read"),St=Symbol("flush"),pr=Symbol("flushChunk"),ae=Symbol("encoding"),Me=Symbol("decoder"),U=Symbol("flowing"),Ze=Symbol("paused"),Ie=Symbol("resume"),G=Symbol("buffer"),Y=Symbol("pipes"),H=Symbol("bufferLength"),Ri=Symbol("bufferPush"),Bt=Symbol("bufferShift"),K=Symbol("objectMode"),M=Symbol("destroyed"),Ni=Symbol("error"),Li=Symbol("emitData"),dr=Symbol("emitEnd"),Mi=Symbol("emitEnd2"),pe=Symbol("async"),Ii=Symbol("abort"),qt=Symbol("aborted"),Qe=Symbol("signal"),je=Symbol("dataListeners"),z=Symbol("discarded"),Xe=i=>Promise.resolve().then(i),Ma=i=>i(),Ia=i=>i==="end"||i==="finish"||i==="prefinish",Sa=i=>i instanceof ArrayBuffer||!!i&&typeof i=="object"&&i.constructor&&i.constructor.name==="ArrayBuffer"&&i.byteLength>=0,Ba=i=>!Buffer.isBuffer(i)&&ArrayBuffer.isView(i),Wt=class{src;dest;opts;ondrain;constructor(e,t,s){this.src=e,this.dest=t,this.opts=s,this.ondrain=()=>e[Ie](),this.dest.on("drain",this.ondrain)}unpipe(){this.dest.removeListener("drain",this.ondrain)}proxyErrors(e){}end(){this.unpipe(),this.opts.end&&this.dest.end()}},Si=class extends Wt{unpipe(){this.src.removeListener("error",this.proxyErrors),super.unpipe()}constructor(e,t,s){super(e,t,s),this.proxyErrors=r=>t.emit("error",r),e.on("error",this.proxyErrors)}},qa=i=>!!i.objectMode,Wa=i=>!i.objectMode&&!!i.encoding&&i.encoding!=="buffer",Ut=class extends Bi.EventEmitter{[U]=!1;[Ze]=!1;[Y]=[];[G]=[];[K];[ae];[pe];[Me];[ge]=!1;[$e]=!1;[Mt]=!1;[It]=!1;[Ye]=null;[H]=0;[M]=!1;[Qe];[qt]=!1;[je]=0;[z]=!1;writable=!0;readable=!0;constructor(...e){let t=e[0]||{};if(super(),t.objectMode&&typeof t.encoding=="string")throw new TypeError("Encoding and objectMode may not be used together");qa(t)?(this[K]=!0,this[ae]=null):Wa(t)?(this[ae]=t.encoding,this[K]=!1):(this[K]=!1,this[ae]=null),this[pe]=!!t.async,this[Me]=this[ae]?new Oa.StringDecoder(this[ae]):null,t&&t.debugExposeBuffer===!0&&Object.defineProperty(this,"buffer",{get:()=>this[G]}),t&&t.debugExposePipes===!0&&Object.defineProperty(this,"pipes",{get:()=>this[Y]});let{signal:s}=t;s&&(this[Qe]=s,s.aborted?this[Ii]():s.addEventListener("abort",()=>this[Ii]()))}get bufferLength(){return this[H]}get encoding(){return this[ae]}set encoding(e){throw new Error("Encoding must be set at instantiation time")}setEncoding(e){throw new Error("Encoding must be set at instantiation time")}get objectMode(){return this[K]}set objectMode(e){throw new Error("objectMode must be set at instantiation time")}get async(){return this[pe]}set async(e){this[pe]=this[pe]||!!e}[Ii](){this[qt]=!0,this.emit("abort",this[Qe]?.reason),this.destroy(this[Qe]?.reason)}get aborted(){return this[qt]}set aborted(e){}write(e,t,s){if(this[qt])return!1;if(this[ge])throw new Error("write after end");if(this[M])return this.emit("error",Object.assign(new Error("Cannot call write after a stream was destroyed"),{code:"ERR_STREAM_DESTROYED"})),!0;typeof t=="function"&&(s=t,t="utf8"),t||(t="utf8");let r=this[pe]?Xe:Ma;if(!this[K]&&!Buffer.isBuffer(e)){if(Ba(e))e=Buffer.from(e.buffer,e.byteOffset,e.byteLength);else if(Sa(e))e=Buffer.from(e);else if(typeof e!="string")throw new Error("Non-contiguous data written to non-objectMode stream")}return this[K]?(this[U]&&this[H]!==0&&this[St](!0),this[U]?this.emit("data",e):this[Ri](e),this[H]!==0&&this.emit("readable"),s&&r(s),this[U]):e.length?(typeof e=="string"&&!(t===this[ae]&&!this[Me]?.lastNeed)&&(e=Buffer.from(e,t)),Buffer.isBuffer(e)&&this[ae]&&(e=this[Me].write(e)),this[U]&&this[H]!==0&&this[St](!0),this[U]?this.emit("data",e):this[Ri](e),this[H]!==0&&this.emit("readable"),s&&r(s),this[U]):(this[H]!==0&&this.emit("readable"),s&&r(s),this[U])}read(e){if(this[M])return null;if(this[z]=!1,this[H]===0||e===0||e&&e>this[H])return this[me](),null;this[K]&&(e=null),this[G].length>1&&!this[K]&&(this[G]=[this[ae]?this[G].join(""):Buffer.concat(this[G],this[H])]);let t=this[cr](e||null,this[G][0]);return this[me](),t}[cr](e,t){if(this[K])this[Bt]();else{let s=t;e===s.length||e===null?this[Bt]():typeof s=="string"?(this[G][0]=s.slice(e),t=s.slice(0,e),this[H]-=e):(this[G][0]=s.subarray(e),t=s.subarray(0,e),this[H]-=e)}return this.emit("data",t),!this[G].length&&!this[ge]&&this.emit("drain"),t}end(e,t,s){return typeof e=="function"&&(s=e,e=void 0),typeof t=="function"&&(s=t,t="utf8"),e!==void 0&&this.write(e,t),s&&this.once("end",s),this[ge]=!0,this.writable=!1,(this[U]||!this[Ze])&&this[me](),this}[Ie](){this[M]||(!this[je]&&!this[Y].length&&(this[z]=!0),this[Ze]=!1,this[U]=!0,this.emit("resume"),this[G].length?this[St]():this[ge]?this[me]():this.emit("drain"))}resume(){return this[Ie]()}pause(){this[U]=!1,this[Ze]=!0,this[z]=!1}get destroyed(){return this[M]}get flowing(){return this[U]}get paused(){return this[Ze]}[Ri](e){this[K]?this[H]+=1:this[H]+=e.length,this[G].push(e)}[Bt](){return this[K]?this[H]-=1:this[H]-=this[G][0].length,this[G].shift()}[St](e=!1){do;while(this[pr](this[Bt]())&&this[G].length);!e&&!this[G].length&&!this[ge]&&this.emit("drain")}[pr](e){return this.emit("data",e),this[U]}pipe(e,t){if(this[M])return e;this[z]=!1;let s=this[$e];return t=t||{},e===lr.stdout||e===lr.stderr?t.end=!1:t.end=t.end!==!1,t.proxyErrors=!!t.proxyErrors,s?t.end&&e.end():(this[Y].push(t.proxyErrors?new Si(this,e,t):new Wt(this,e,t)),this[pe]?Xe(()=>this[Ie]()):this[Ie]()),e}unpipe(e){let t=this[Y].find(s=>s.dest===e);t&&(this[Y].length===1?(this[U]&&this[je]===0&&(this[U]=!1),this[Y]=[]):this[Y].splice(this[Y].indexOf(t),1),t.unpipe())}addListener(e,t){return this.on(e,t)}on(e,t){let s=super.on(e,t);if(e==="data")this[z]=!1,this[je]++,!this[Y].length&&!this[U]&&this[Ie]();else if(e==="readable"&&this[H]!==0)super.emit("readable");else if(Ia(e)&&this[$e])super.emit(e),this.removeAllListeners(e);else if(e==="error"&&this[Ye]){let r=t;this[pe]?Xe(()=>r.call(this,this[Ye])):r.call(this,this[Ye])}return s}removeListener(e,t){return this.off(e,t)}off(e,t){let s=super.off(e,t);return e==="data"&&(this[je]=this.listeners("data").length,this[je]===0&&!this[z]&&!this[Y].length&&(this[U]=!1)),s}removeAllListeners(e){let t=super.removeAllListeners(e);return(e==="data"||e===void 0)&&(this[je]=0,!this[z]&&!this[Y].length&&(this[U]=!1)),t}get emittedEnd(){return this[$e]}[me](){!this[Mt]&&!this[$e]&&!this[M]&&this[G].length===0&&this[ge]&&(this[Mt]=!0,this.emit("end"),this.emit("prefinish"),this.emit("finish"),this[It]&&this.emit("close"),this[Mt]=!1)}emit(e,...t){let s=t[0];if(e!=="error"&&e!=="close"&&e!==M&&this[M])return!1;if(e==="data")return!this[K]&&!s?!1:this[pe]?(Xe(()=>this[Li](s)),!0):this[Li](s);if(e==="end")return this[dr]();if(e==="close"){if(this[It]=!0,!this[$e]&&!this[M])return!1;let o=super.emit("close");return this.removeAllListeners("close"),o}else if(e==="error"){this[Ye]=s,super.emit(Ni,s);let o=!this[Qe]||this.listeners("error").length?super.emit("error",s):!1;return this[me](),o}else if(e==="resume"){let o=super.emit("resume");return this[me](),o}else if(e==="finish"||e==="prefinish"){let o=super.emit(e);return this.removeAllListeners(e),o}let r=super.emit(e,...t);return this[me](),r}[Li](e){for(let s of this[Y])s.dest.write(e)===!1&&this.pause();let t=this[z]?!1:super.emit("data",e);return this[me](),t}[dr](){return this[$e]?!1:(this[$e]=!0,this.readable=!1,this[pe]?(Xe(()=>this[Mi]()),!0):this[Mi]())}[Mi](){if(this[Me]){let t=this[Me].end();if(t){for(let s of this[Y])s.dest.write(t);this[z]||super.emit("data",t)}}for(let t of this[Y])t.end();let e=super.emit("end");return this.removeAllListeners("end"),e}async collect(){let e=Object.assign([],{dataLength:0});this[K]||(e.dataLength=0);let t=this.promise();return this.on("data",s=>{e.push(s),this[K]||(e.dataLength+=s.length)}),await t,e}async concat(){if(this[K])throw new Error("cannot concat in objectMode");let e=await this.collect();return this[ae]?e.join(""):Buffer.concat(e,e.dataLength)}async promise(){return new Promise((e,t)=>{this.on(M,()=>t(new Error("stream destroyed"))),this.on("error",s=>t(s)),this.on("end",()=>e())})}[Symbol.asyncIterator](){this[z]=!1;let e=!1,t=async()=>(this.pause(),e=!0,{value:void 0,done:!0});return{next:()=>{if(e)return t();let r=this.read();if(r!==null)return Promise.resolve({done:!1,value:r});if(this[ge])return t();let o,a,l=p=>{this.off("data",n),this.off("end",d),this.off(M,c),t(),a(p)},n=p=>{this.off("error",l),this.off("end",d),this.off(M,c),this.pause(),o({value:p,done:!!this[ge]})},d=()=>{this.off("error",l),this.off("data",n),this.off(M,c),t(),o({done:!0,value:void 0})},c=()=>l(new Error("stream destroyed"));return new Promise((p,u)=>{a=u,o=p,this.once(M,c),this.once("error",l),this.once("end",d),this.once("data",n)})},throw:t,return:t,[Symbol.asyncIterator](){return this}}}[Symbol.iterator](){this[z]=!1;let e=!1,t=()=>(this.pause(),this.off(Ni,t),this.off(M,t),this.off("end",t),e=!0,{done:!0,value:void 0}),s=()=>{if(e)return t();let r=this.read();return r===null?t():{done:!1,value:r}};return this.once("end",t),this.once(Ni,t),this.once(M,t),{next:s,throw:t,return:t,[Symbol.iterator](){return this}}}destroy(e){if(this[M])return e?this.emit("error",e):this.emit(M),this;this[M]=!0,this[z]=!0,this[G].length=0,this[H]=0;let t=this;return typeof t.close=="function"&&!this[It]&&t.close(),e?this.emit("error",e):this.emit(M),this}static get isStream(){return Z.isStream}};Z.Minipass=Ut});var Tr=P(O=>{"use strict";var Ua=O&&O.__createBinding||(Object.create?function(i,e,t,s){s===void 0&&(s=t);var r=Object.getOwnPropertyDescriptor(e,t);(!r||("get"in r?!e.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(i,s,r)}:function(i,e,t,s){s===void 0&&(s=t),i[s]=e[t]}),Ga=O&&O.__setModuleDefault||(Object.create?function(i,e){Object.defineProperty(i,"default",{enumerable:!0,value:e})}:function(i,e){i.default=e}),Ha=O&&O.__importStar||function(i){if(i&&i.__esModule)return i;var e={};if(i!=null)for(var t in i)t!=="default"&&Object.prototype.hasOwnProperty.call(i,t)&&Ua(e,i,t);return Ga(e,i),e};Object.defineProperty(O,"__esModule",{value:!0});O.PathScurry=O.Path=O.PathScurryDarwin=O.PathScurryPosix=O.PathScurryWin32=O.PathScurryBase=O.PathPosix=O.PathWin32=O.PathBase=O.ChildrenCache=O.ResolveCache=void 0;var vr=nr(),Jt=require("path"),Va=require("url"),Ka=Ha(require("fs")),et=require("fs"),Ja=et.realpathSync.native,Gt=require("fs/promises"),hr=qi(),tt={lstatSync:et.lstatSync,readdir:et.readdir,readdirSync:et.readdirSync,readlinkSync:et.readlinkSync,realpathSync:Ja,promises:{lstat:Gt.lstat,readdir:Gt.readdir,readlink:Gt.readlink,realpath:Gt.realpath}},yr=i=>!i||i===tt||i===Ka?tt:{...tt,...i,promises:{...tt.promises,...i.promises||{}}},wr=/^\\\\\?\\([a-z]:)\\?$/i,Ya=i=>i.replace(/\//g,"\\").replace(wr,"$1\\"),Za=/[\\\/]/,re=0,$r=1,xr=2,de=4,kr=6,Fr=8,Te=10,Cr=12,se=15,ze=~se,Wi=16,gr=32,it=64,ne=128,Ht=256,Kt=512,mr=it|ne|Kt,Qa=1023,Ui=i=>i.isFile()?Fr:i.isDirectory()?de:i.isSymbolicLink()?Te:i.isCharacterDevice()?xr:i.isBlockDevice()?kr:i.isSocket()?Cr:i.isFIFO()?$r:re,br=new Map,st=i=>{let e=br.get(i);if(e)return e;let t=i.normalize("NFKD");return br.set(i,t),t},fr=new Map,Vt=i=>{let e=fr.get(i);if(e)return e;let t=st(i.toLowerCase());return fr.set(i,t),t},rt=class extends vr.LRUCache{constructor(){super({max:256})}};O.ResolveCache=rt;var Yt=class extends vr.LRUCache{constructor(e=16*1024){super({maxSize:e,sizeCalculation:t=>t.length+1})}};O.ChildrenCache=Yt;var jr=Symbol("PathScurry setAsCwd"),V=class{name;root;roots;parent;nocase;#t;#r;get dev(){return this.#r}#s;get mode(){return this.#s}#n;get nlink(){return this.#n}#d;get uid(){return this.#d}#c;get gid(){return this.#c}#g;get rdev(){return this.#g}#l;get blksize(){return this.#l}#o;get ino(){return this.#o}#e;get size(){return this.#e}#b;get blocks(){return this.#b}#y;get atimeMs(){return this.#y}#m;get mtimeMs(){return this.#m}#u;get ctimeMs(){return this.#u}#F;get birthtimeMs(){return this.#F}#h;get atime(){return this.#h}#C;get mtime(){return this.#C}#j;get ctime(){return this.#j}#w;get birthtime(){return this.#w}#v;#E;#p;#A;#T;#$;#i;#f;#D;#x;get path(){return(this.parent||this).fullpath()}constructor(e,t=re,s,r,o,a,l){this.name=e,this.#v=o?Vt(e):st(e),this.#i=t&Qa,this.nocase=o,this.roots=r,this.root=s||this,this.#f=a,this.#p=l.fullpath,this.#T=l.relative,this.#$=l.relativePosix,this.parent=l.parent,this.parent?this.#t=this.parent.#t:this.#t=yr(l.fs)}depth(){return this.#E!==void 0?this.#E:this.parent?this.#E=this.parent.depth()+1:this.#E=0}childrenCache(){return this.#f}resolve(e){if(!e)return this;let t=this.getRootString(e),r=e.substring(t.length).split(this.splitSep);return t?this.getRoot(t).#N(r):this.#N(r)}#N(e){let t=this;for(let s of e)t=t.child(s);return t}children(){let e=this.#f.get(this);if(e)return e;let t=Object.assign([],{provisional:0});return this.#f.set(this,t),this.#i&=~Wi,t}child(e,t){if(e===""||e===".")return this;if(e==="..")return this.parent||this;let s=this.children(),r=this.nocase?Vt(e):st(e);for(let n of s)if(n.#v===r)return n;let o=this.parent?this.sep:"",a=this.#p?this.#p+o+e:void 0,l=this.newChild(e,re,{...t,parent:this,fullpath:a});return this.canReaddir()||(l.#i|=ne),s.push(l),l}relative(){if(this.#T!==void 0)return this.#T;let e=this.name,t=this.parent;if(!t)return this.#T=this.name;let s=t.relative();return s+(!s||!t.parent?"":this.sep)+e}relativePosix(){if(this.sep==="/")return this.relative();if(this.#$!==void 0)return this.#$;let e=this.name,t=this.parent;if(!t)return this.#$=this.fullpathPosix();let s=t.relativePosix();return s+(!s||!t.parent?"":"/")+e}fullpath(){if(this.#p!==void 0)return this.#p;let e=this.name,t=this.parent;if(!t)return this.#p=this.name;let r=t.fullpath()+(t.parent?this.sep:"")+e;return this.#p=r}fullpathPosix(){if(this.#A!==void 0)return this.#A;if(this.sep==="/")return this.#A=this.fullpath();if(!this.parent){let r=this.fullpath().replace(/\\/g,"/");return/^[a-z]:\//i.test(r)?this.#A=`//?/${r}`:this.#A=r}let e=this.parent,t=e.fullpathPosix(),s=t+(!t||!e.parent?"":"/")+this.name;return this.#A=s}isUnknown(){return(this.#i&se)===re}isType(e){return this[`is${e}`]()}getType(){return this.isUnknown()?"Unknown":this.isDirectory()?"Directory":this.isFile()?"File":this.isSymbolicLink()?"SymbolicLink":this.isFIFO()?"FIFO":this.isCharacterDevice()?"CharacterDevice":this.isBlockDevice()?"BlockDevice":this.isSocket()?"Socket":"Unknown"}isFile(){return(this.#i&se)===Fr}isDirectory(){return(this.#i&se)===de}isCharacterDevice(){return(this.#i&se)===xr}isBlockDevice(){return(this.#i&se)===kr}isFIFO(){return(this.#i&se)===$r}isSocket(){return(this.#i&se)===Cr}isSymbolicLink(){return(this.#i&Te)===Te}lstatCached(){return this.#i&gr?this:void 0}readlinkCached(){return this.#D}realpathCached(){return this.#x}readdirCached(){let e=this.children();return e.slice(0,e.provisional)}canReadlink(){if(this.#D)return!0;if(!this.parent)return!1;let e=this.#i&se;return!(e!==re&&e!==Te||this.#i&Ht||this.#i&ne)}calledReaddir(){return!!(this.#i&Wi)}isENOENT(){return!!(this.#i&ne)}isNamed(e){return this.nocase?this.#v===Vt(e):this.#v===st(e)}async readlink(){let e=this.#D;if(e)return e;if(!!this.canReadlink()&&!!this.parent)try{let t=await this.#t.promises.readlink(this.fullpath()),s=(await this.parent.realpath())?.resolve(t);if(s)return this.#D=s}catch(t){this.#I(t.code);return}}readlinkSync(){let e=this.#D;if(e)return e;if(!!this.canReadlink()&&!!this.parent)try{let t=this.#t.readlinkSync(this.fullpath()),s=this.parent.realpathSync()?.resolve(t);if(s)return this.#D=s}catch(t){this.#I(t.code);return}}#L(e){this.#i|=Wi;for(let t=e.provisional;t<e.length;t++){let s=e[t];s&&s.#k()}}#k(){this.#i&ne||(this.#i=(this.#i|ne)&ze,this.#P())}#P(){let e=this.children();e.provisional=0;for(let t of e)t.#k()}#M(){this.#i|=Kt,this.#_()}#_(){if(this.#i&it)return;let e=this.#i;(e&se)===de&&(e&=ze),this.#i=e|it,this.#P()}#R(e=""){e==="ENOTDIR"||e==="EPERM"?this.#_():e==="ENOENT"?this.#k():this.children().provisional=0}#a(e=""){e==="ENOTDIR"?this.parent.#_():e==="ENOENT"&&this.#k()}#I(e=""){let t=this.#i;t|=Ht,e==="ENOENT"&&(t|=ne),(e==="EINVAL"||e==="UNKNOWN")&&(t&=ze),this.#i=t,e==="ENOTDIR"&&this.parent&&this.parent.#_()}#O(e,t){return this.#G(e,t)||this.#U(e,t)}#U(e,t){let s=Ui(e),r=this.newChild(e.name,s,{parent:this}),o=r.#i&se;return o!==de&&o!==Te&&o!==re&&(r.#i|=it),t.unshift(r),t.provisional++,r}#G(e,t){for(let s=t.provisional;s<t.length;s++){let r=t[s];if((this.nocase?Vt(e.name):st(e.name))===r.#v)return this.#H(e,r,s,t)}}#H(e,t,s,r){let o=t.name;return t.#i=t.#i&ze|Ui(e),o!==e.name&&(t.name=e.name),s!==r.provisional&&(s===r.length-1?r.pop():r.splice(s,1),r.unshift(t)),r.provisional++,t}async lstat(){if((this.#i&ne)===0)try{return this.#W(await this.#t.promises.lstat(this.fullpath())),this}catch(e){this.#a(e.code)}}lstatSync(){if((this.#i&ne)===0)try{return this.#W(this.#t.lstatSync(this.fullpath())),this}catch(e){this.#a(e.code)}}#W(e){let{atime:t,atimeMs:s,birthtime:r,birthtimeMs:o,blksize:a,blocks:l,ctime:n,ctimeMs:d,dev:c,gid:p,ino:u,mode:h,mtime:b,mtimeMs:g,nlink:x,rdev:y,size:C,uid:j}=e;this.#h=t,this.#y=s,this.#w=r,this.#F=o,this.#l=a,this.#b=l,this.#j=n,this.#u=d,this.#r=c,this.#c=p,this.#o=u,this.#s=h,this.#C=b,this.#m=g,this.#n=x,this.#g=y,this.#e=C,this.#d=j;let T=Ui(e);this.#i=this.#i&ze|T|gr,T!==re&&T!==de&&T!==Te&&(this.#i|=it)}#B=[];#q=!1;#V(e){this.#q=!1;let t=this.#B.slice();this.#B.length=0,t.forEach(s=>s(null,e))}readdirCB(e,t=!1){if(!this.canReaddir()){t?e(null,[]):queueMicrotask(()=>e(null,[]));return}let s=this.children();if(this.calledReaddir()){let o=s.slice(0,s.provisional);t?e(null,o):queueMicrotask(()=>e(null,o));return}if(this.#B.push(e),this.#q)return;this.#q=!0;let r=this.fullpath();this.#t.readdir(r,{withFileTypes:!0},(o,a)=>{if(o)this.#R(o.code),s.provisional=0;else{for(let l of a)this.#O(l,s);this.#L(s)}this.#V(s.slice(0,s.provisional))})}#S;async readdir(){if(!this.canReaddir())return[];let e=this.children();if(this.calledReaddir())return e.slice(0,e.provisional);let t=this.fullpath();if(this.#S)await this.#S;else{let s=()=>{};this.#S=new Promise(r=>s=r);try{for(let r of await this.#t.promises.readdir(t,{withFileTypes:!0}))this.#O(r,e);this.#L(e)}catch(r){this.#R(r.code),e.provisional=0}this.#S=void 0,s()}return e.slice(0,e.provisional)}readdirSync(){if(!this.canReaddir())return[];let e=this.children();if(this.calledReaddir())return e.slice(0,e.provisional);let t=this.fullpath();try{for(let s of this.#t.readdirSync(t,{withFileTypes:!0}))this.#O(s,e);this.#L(e)}catch(s){this.#R(s.code),e.provisional=0}return e.slice(0,e.provisional)}canReaddir(){if(this.#i&mr)return!1;let e=se&this.#i;return e===re||e===de||e===Te}shouldWalk(e,t){return(this.#i&de)===de&&!(this.#i&mr)&&!e.has(this)&&(!t||t(this))}async realpath(){if(this.#x)return this.#x;if(!((Kt|Ht|ne)&this.#i))try{let e=await this.#t.promises.realpath(this.fullpath());return this.#x=this.resolve(e)}catch{this.#M()}}realpathSync(){if(this.#x)return this.#x;if(!((Kt|Ht|ne)&this.#i))try{let e=this.#t.realpathSync(this.fullpath());return this.#x=this.resolve(e)}catch{this.#M()}}[jr](e){if(e===this)return;let t=new Set([]),s=[],r=this;for(;r&&r.parent;)t.add(r),r.#T=s.join(this.sep),r.#$=s.join("/"),r=r.parent,s.push("..");for(r=e;r&&r.parent&&!t.has(r);)r.#T=void 0,r.#$=void 0,r=r.parent}};O.PathBase=V;var Ee=class extends V{sep="\\";splitSep=Za;constructor(e,t=re,s,r,o,a,l){super(e,t,s,r,o,a,l)}newChild(e,t=re,s={}){return new Ee(e,t,this.root,this.roots,this.nocase,this.childrenCache(),s)}getRootString(e){return Jt.win32.parse(e).root}getRoot(e){if(e=Ya(e.toUpperCase()),e===this.root.name)return this.root;for(let[t,s]of Object.entries(this.roots))if(this.sameRoot(e,t))return this.roots[e]=s;return this.roots[e]=new at(e,this).root}sameRoot(e,t=this.root.name){return e=e.toUpperCase().replace(/\//g,"\\").replace(wr,"$1\\"),e===t}};O.PathWin32=Ee;var Pe=class extends V{splitSep="/";sep="/";constructor(e,t=re,s,r,o,a,l){super(e,t,s,r,o,a,l)}getRootString(e){return e.startsWith("/")?"/":""}getRoot(e){return this.root}newChild(e,t=re,s={}){return new Pe(e,t,this.root,this.roots,this.nocase,this.childrenCache(),s)}};O.PathPosix=Pe;var ot=class{root;rootPath;roots;cwd;#t;#r;#s;nocase;#n;constructor(e=process.cwd(),t,s,{nocase:r,childrenCacheSize:o=16*1024,fs:a=tt}={}){this.#n=yr(a),(e instanceof URL||e.startsWith("file://"))&&(e=(0,Va.fileURLToPath)(e));let l=t.resolve(e);this.roots=Object.create(null),this.rootPath=this.parseRootPath(l),this.#t=new rt,this.#r=new rt,this.#s=new Yt(o);let n=l.substring(this.rootPath.length).split(s);if(n.length===1&&!n[0]&&n.pop(),r===void 0)throw new TypeError("must provide nocase setting to PathScurryBase ctor");this.nocase=r,this.root=this.newRoot(this.#n),this.roots[this.rootPath]=this.root;let d=this.root,c=n.length-1,p=t.sep,u=this.rootPath,h=!1;for(let b of n){let g=c--;d=d.child(b,{relative:new Array(g).fill("..").join(p),relativePosix:new Array(g).fill("..").join("/"),fullpath:u+=(h?"":p)+b}),h=!0}this.cwd=d}depth(e=this.cwd){return typeof e=="string"&&(e=this.cwd.resolve(e)),e.depth()}childrenCache(){return this.#s}resolve(...e){let t="";for(let o=e.length-1;o>=0;o--){let a=e[o];if(!(!a||a===".")&&(t=t?`${a}/${t}`:a,this.isAbsolute(a)))break}let s=this.#t.get(t);if(s!==void 0)return s;let r=this.cwd.resolve(t).fullpath();return this.#t.set(t,r),r}resolvePosix(...e){let t="";for(let o=e.length-1;o>=0;o--){let a=e[o];if(!(!a||a===".")&&(t=t?`${a}/${t}`:a,this.isAbsolute(a)))break}let s=this.#r.get(t);if(s!==void 0)return s;let r=this.cwd.resolve(t).fullpathPosix();return this.#r.set(t,r),r}relative(e=this.cwd){return typeof e=="string"&&(e=this.cwd.resolve(e)),e.relative()}relativePosix(e=this.cwd){return typeof e=="string"&&(e=this.cwd.resolve(e)),e.relativePosix()}basename(e=this.cwd){return typeof e=="string"&&(e=this.cwd.resolve(e)),e.name}dirname(e=this.cwd){return typeof e=="string"&&(e=this.cwd.resolve(e)),(e.parent||e).fullpath()}async readdir(e=this.cwd,t={withFileTypes:!0}){typeof e=="string"?e=this.cwd.resolve(e):e instanceof V||(t=e,e=this.cwd);let{withFileTypes:s}=t;if(e.canReaddir()){let r=await e.readdir();return s?r:r.map(o=>o.name)}else return[]}readdirSync(e=this.cwd,t={withFileTypes:!0}){typeof e=="string"?e=this.cwd.resolve(e):e instanceof V||(t=e,e=this.cwd);let{withFileTypes:s=!0}=t;return e.canReaddir()?s?e.readdirSync():e.readdirSync().map(r=>r.name):[]}async lstat(e=this.cwd){return typeof e=="string"&&(e=this.cwd.resolve(e)),e.lstat()}lstatSync(e=this.cwd){return typeof e=="string"&&(e=this.cwd.resolve(e)),e.lstatSync()}async readlink(e=this.cwd,{withFileTypes:t}={withFileTypes:!1}){typeof e=="string"?e=this.cwd.resolve(e):e instanceof V||(t=e.withFileTypes,e=this.cwd);let s=await e.readlink();return t?s:s?.fullpath()}readlinkSync(e=this.cwd,{withFileTypes:t}={withFileTypes:!1}){typeof e=="string"?e=this.cwd.resolve(e):e instanceof V||(t=e.withFileTypes,e=this.cwd);let s=e.readlinkSync();return t?s:s?.fullpath()}async realpath(e=this.cwd,{withFileTypes:t}={withFileTypes:!1}){typeof e=="string"?e=this.cwd.resolve(e):e instanceof V||(t=e.withFileTypes,e=this.cwd);let s=await e.realpath();return t?s:s?.fullpath()}realpathSync(e=this.cwd,{withFileTypes:t}={withFileTypes:!1}){typeof e=="string"?e=this.cwd.resolve(e):e instanceof V||(t=e.withFileTypes,e=this.cwd);let s=e.realpathSync();return t?s:s?.fullpath()}async walk(e=this.cwd,t={}){typeof e=="string"?e=this.cwd.resolve(e):e instanceof V||(t=e,e=this.cwd);let{withFileTypes:s=!0,follow:r=!1,filter:o,walkFilter:a}=t,l=[];(!o||o(e))&&l.push(s?e:e.fullpath());let n=new Set,d=(p,u)=>{n.add(p),p.readdirCB((h,b)=>{if(h)return u(h);let g=b.length;if(!g)return u();let x=()=>{--g===0&&u()};for(let y of b)(!o||o(y))&&l.push(s?y:y.fullpath()),r&&y.isSymbolicLink()?y.realpath().then(C=>C?.isUnknown()?C.lstat():C).then(C=>C?.shouldWalk(n,a)?d(C,x):x()):y.shouldWalk(n,a)?d(y,x):x()},!0)},c=e;return new Promise((p,u)=>{d(c,h=>{if(h)return u(h);p(l)})})}walkSync(e=this.cwd,t={}){typeof e=="string"?e=this.cwd.resolve(e):e instanceof V||(t=e,e=this.cwd);let{withFileTypes:s=!0,follow:r=!1,filter:o,walkFilter:a}=t,l=[];(!o||o(e))&&l.push(s?e:e.fullpath());let n=new Set([e]);for(let d of n){let c=d.readdirSync();for(let p of c){(!o||o(p))&&l.push(s?p:p.fullpath());let u=p;if(p.isSymbolicLink()){if(!(r&&(u=p.realpathSync())))continue;u.isUnknown()&&u.lstatSync()}u.shouldWalk(n,a)&&n.add(u)}}return l}[Symbol.asyncIterator](){return this.iterate()}iterate(e=this.cwd,t={}){return typeof e=="string"?e=this.cwd.resolve(e):e instanceof V||(t=e,e=this.cwd),this.stream(e,t)[Symbol.asyncIterator]()}[Symbol.iterator](){return this.iterateSync()}*iterateSync(e=this.cwd,t={}){typeof e=="string"?e=this.cwd.resolve(e):e instanceof V||(t=e,e=this.cwd);let{withFileTypes:s=!0,follow:r=!1,filter:o,walkFilter:a}=t;(!o||o(e))&&(yield s?e:e.fullpath());let l=new Set([e]);for(let n of l){let d=n.readdirSync();for(let c of d){(!o||o(c))&&(yield s?c:c.fullpath());let p=c;if(c.isSymbolicLink()){if(!(r&&(p=c.realpathSync())))continue;p.isUnknown()&&p.lstatSync()}p.shouldWalk(l,a)&&l.add(p)}}}stream(e=this.cwd,t={}){typeof e=="string"?e=this.cwd.resolve(e):e instanceof V||(t=e,e=this.cwd);let{withFileTypes:s=!0,follow:r=!1,filter:o,walkFilter:a}=t,l=new hr.Minipass({objectMode:!0});(!o||o(e))&&l.write(s?e:e.fullpath());let n=new Set,d=[e],c=0,p=()=>{let u=!1;for(;!u;){let h=d.shift();if(!h){c===0&&l.end();return}c++,n.add(h);let b=(x,y,C=!1)=>{if(x)return l.emit("error",x);if(r&&!C){let j=[];for(let T of y)T.isSymbolicLink()&&j.push(T.realpath().then(_=>_?.isUnknown()?_.lstat():_));if(j.length){Promise.all(j).then(()=>b(null,y,!0));return}}for(let j of y)j&&(!o||o(j))&&(l.write(s?j:j.fullpath())||(u=!0));c--;for(let j of y){let T=j.realpathCached()||j;T.shouldWalk(n,a)&&d.push(T)}u&&!l.flowing?l.once("drain",p):g||p()},g=!0;h.readdirCB(b,!0),g=!1}};return p(),l}streamSync(e=this.cwd,t={}){typeof e=="string"?e=this.cwd.resolve(e):e instanceof V||(t=e,e=this.cwd);let{withFileTypes:s=!0,follow:r=!1,filter:o,walkFilter:a}=t,l=new hr.Minipass({objectMode:!0}),n=new Set;(!o||o(e))&&l.write(s?e:e.fullpath());let d=[e],c=0,p=()=>{let u=!1;for(;!u;){let h=d.shift();if(!h){c===0&&l.end();return}c++,n.add(h);let b=h.readdirSync();for(let g of b)(!o||o(g))&&(l.write(s?g:g.fullpath())||(u=!0));c--;for(let g of b){let x=g;if(g.isSymbolicLink()){if(!(r&&(x=g.realpathSync())))continue;x.isUnknown()&&x.lstatSync()}x.shouldWalk(n,a)&&d.push(x)}}u&&!l.flowing&&l.once("drain",p)};return p(),l}chdir(e=this.cwd){let t=this.cwd;this.cwd=typeof e=="string"?this.cwd.resolve(e):e,this.cwd[jr](t)}};O.PathScurryBase=ot;var at=class extends ot{sep="\\";constructor(e=process.cwd(),t={}){let{nocase:s=!0}=t;super(e,Jt.win32,"\\",{...t,nocase:s}),this.nocase=s;for(let r=this.cwd;r;r=r.parent)r.nocase=this.nocase}parseRootPath(e){return Jt.win32.parse(e).root.toUpperCase()}newRoot(e){return new Ee(this.rootPath,de,void 0,this.roots,this.nocase,this.childrenCache(),{fs:e})}isAbsolute(e){return e.startsWith("/")||e.startsWith("\\")||/^[a-z]:(\/|\\)/i.test(e)}};O.PathScurryWin32=at;var nt=class extends ot{sep="/";constructor(e=process.cwd(),t={}){let{nocase:s=!1}=t;super(e,Jt.posix,"/",{...t,nocase:s}),this.nocase=s}parseRootPath(e){return"/"}newRoot(e){return new Pe(this.rootPath,de,void 0,this.roots,this.nocase,this.childrenCache(),{fs:e})}isAbsolute(e){return e.startsWith("/")}};O.PathScurryPosix=nt;var Zt=class extends nt{constructor(e=process.cwd(),t={}){let{nocase:s=!0}=t;super(e,{...t,nocase:s})}};O.PathScurryDarwin=Zt;O.Path=process.platform==="win32"?Ee:Pe;O.PathScurry=process.platform==="win32"?at:process.platform==="darwin"?Zt:nt});var Gi=P(Qt=>{"use strict";Object.defineProperty(Qt,"__esModule",{value:!0});Qt.Pattern=void 0;var Xa=ye(),za=i=>i.length>=1,en=i=>i.length>=1,lt=class{#t;#r;#s;length;#n;#d;#c;#g;#l;#o;#e=!0;constructor(e,t,s,r){if(!za(e))throw new TypeError("empty pattern list");if(!en(t))throw new TypeError("empty glob list");if(t.length!==e.length)throw new TypeError("mismatched pattern list and glob list lengths");if(this.length=e.length,s<0||s>=this.length)throw new TypeError("index out of range");if(this.#t=e,this.#r=t,this.#s=s,this.#n=r,this.#s===0){if(this.isUNC()){let[o,a,l,n,...d]=this.#t,[c,p,u,h,...b]=this.#r;d[0]===""&&(d.shift(),b.shift());let g=[o,a,l,n,""].join("/"),x=[c,p,u,h,""].join("/");this.#t=[g,...d],this.#r=[x,...b],this.length=this.#t.length}else if(this.isDrive()||this.isAbsolute()){let[o,...a]=this.#t,[l,...n]=this.#r;a[0]===""&&(a.shift(),n.shift());let d=o+"/",c=l+"/";this.#t=[d,...a],this.#r=[c,...n],this.length=this.#t.length}}}pattern(){return this.#t[this.#s]}isString(){return typeof this.#t[this.#s]=="string"}isGlobstar(){return this.#t[this.#s]===Xa.GLOBSTAR}isRegExp(){return this.#t[this.#s]instanceof RegExp}globString(){return this.#c=this.#c||(this.#s===0?this.isAbsolute()?this.#r[0]+this.#r.slice(1).join("/"):this.#r.join("/"):this.#r.slice(this.#s).join("/"))}hasMore(){return this.length>this.#s+1}rest(){return this.#d!==void 0?this.#d:this.hasMore()?(this.#d=new lt(this.#t,this.#r,this.#s+1,this.#n),this.#d.#o=this.#o,this.#d.#l=this.#l,this.#d.#g=this.#g,this.#d):this.#d=null}isUNC(){let e=this.#t;return this.#l!==void 0?this.#l:this.#l=this.#n==="win32"&&this.#s===0&&e[0]===""&&e[1]===""&&typeof e[2]=="string"&&!!e[2]&&typeof e[3]=="string"&&!!e[3]}isDrive(){let e=this.#t;return this.#g!==void 0?this.#g:this.#g=this.#n==="win32"&&this.#s===0&&this.length>1&&typeof e[0]=="string"&&/^[a-z]:$/i.test(e[0])}isAbsolute(){let e=this.#t;return this.#o!==void 0?this.#o:this.#o=e[0]===""&&e.length>1||this.isDrive()||this.isUNC()}root(){let e=this.#t[0];return typeof e=="string"&&this.isAbsolute()&&this.#s===0?e:""}checkFollowGlobstar(){return!(this.#s===0||!this.isGlobstar()||!this.#e)}markFollowGlobstar(){return this.#s===0||!this.isGlobstar()||!this.#e?!1:(this.#e=!1,!0)}};Qt.Pattern=lt});var Pr=P(Xt=>{"use strict";Object.defineProperty(Xt,"__esModule",{value:!0});Xt.Ignore=void 0;var Er=ye(),tn=Gi(),sn=typeof process=="object"&&process&&typeof process.platform=="string"?process.platform:"linux",Hi=class{relative;relativeChildren;absolute;absoluteChildren;constructor(e,{nobrace:t,nocase:s,noext:r,noglobstar:o,platform:a=sn}){this.relative=[],this.absolute=[],this.relativeChildren=[],this.absoluteChildren=[];let l={dot:!0,nobrace:t,nocase:s,noext:r,noglobstar:o,optimizationLevel:2,platform:a,nocomment:!0,nonegate:!0};for(let n of e){let d=new Er.Minimatch(n,l);for(let c=0;c<d.set.length;c++){let p=d.set[c],u=d.globParts[c];if(!p||!u)throw new Error("invalid pattern object");for(;p[0]==="."&&u[0]===".";)p.shift(),u.shift();let h=new tn.Pattern(p,u,0,a),b=new Er.Minimatch(h.globString(),l),g=u[u.length-1]==="**",x=h.isAbsolute();x?this.absolute.push(b):this.relative.push(b),g&&(x?this.absoluteChildren.push(b):this.relativeChildren.push(b))}}}ignored(e){let t=e.fullpath(),s=`${t}/`,r=e.relative()||".",o=`${r}/`;for(let a of this.relative)if(a.match(r)||a.match(o))return!0;for(let a of this.absolute)if(a.match(t)||a.match(s))return!0;return!1}childrenIgnored(e){let t=e.fullpath()+"/",s=(e.relative()||".")+"/";for(let r of this.relativeChildren)if(r.match(s))return!0;for(let r of this.absoluteChildren)if(r.match(t))return!0;return!1}};Xt.Ignore=Hi});var Dr=P(ue=>{"use strict";Object.defineProperty(ue,"__esModule",{value:!0});ue.Processor=ue.SubWalks=ue.MatchRecord=ue.HasWalkedCache=void 0;var Ar=ye(),Se=class{store;constructor(e=new Map){this.store=e}copy(){return new Se(new Map(this.store))}hasWalked(e,t){return this.store.get(e.fullpath())?.has(t.globString())}storeWalked(e,t){let s=e.fullpath(),r=this.store.get(s);r?r.add(t.globString()):this.store.set(s,new Set([t.globString()]))}};ue.HasWalkedCache=Se;var zt=class{store=new Map;add(e,t,s){let r=(t?2:0)|(s?1:0),o=this.store.get(e);this.store.set(e,o===void 0?r:r&o)}entries(){return[...this.store.entries()].map(([e,t])=>[e,!!(t&2),!!(t&1)])}};ue.MatchRecord=zt;var ei=class{store=new Map;add(e,t){if(!e.canReaddir())return;let s=this.store.get(e);s?s.find(r=>r.globString()===t.globString())||s.push(t):this.store.set(e,[t])}get(e){let t=this.store.get(e);if(!t)throw new Error("attempting to walk unknown path");return t}entries(){return this.keys().map(e=>[e,this.store.get(e)])}keys(){return[...this.store.keys()].filter(e=>e.canReaddir())}};ue.SubWalks=ei;var ct=class{hasWalkedCache;matches=new zt;subwalks=new ei;patterns;follow;dot;opts;constructor(e,t){this.opts=e,this.follow=!!e.follow,this.dot=!!e.dot,this.hasWalkedCache=t?t.copy():new Se}processPatterns(e,t){this.patterns=t;let s=t.map(r=>[e,r]);for(let[r,o]of s){this.hasWalkedCache.storeWalked(r,o);let a=o.root(),l=o.isAbsolute()&&this.opts.absolute!==!1;if(a){r=r.resolve(a==="/"&&this.opts.root!==void 0?this.opts.root:a);let p=o.rest();if(p)o=p;else{this.matches.add(r,!0,!1);continue}}if(r.isENOENT())continue;let n,d,c=!1;for(;typeof(n=o.pattern())=="string"&&(d=o.rest());)r=r.resolve(n),o=d,c=!0;if(n=o.pattern(),d=o.rest(),c){if(this.hasWalkedCache.hasWalked(r,o))continue;this.hasWalkedCache.storeWalked(r,o)}if(typeof n=="string"){let p=n===".."||n===""||n===".";this.matches.add(r.resolve(n),l,p);continue}else if(n===Ar.GLOBSTAR){(!r.isSymbolicLink()||this.follow||o.checkFollowGlobstar())&&this.subwalks.add(r,o);let p=d?.pattern(),u=d?.rest();if(!d||(p===""||p===".")&&!u)this.matches.add(r,l,p===""||p===".");else if(p===".."){let h=r.parent||r;u?this.hasWalkedCache.hasWalked(h,u)||this.subwalks.add(h,u):this.matches.add(h,l,!0)}}else n instanceof RegExp&&this.subwalks.add(r,o)}return this}subwalkTargets(){return this.subwalks.keys()}child(){return new ct(this.opts,this.hasWalkedCache)}filterEntries(e,t){let s=this.subwalks.get(e),r=this.child();for(let o of t)for(let a of s){let l=a.isAbsolute(),n=a.pattern(),d=a.rest();n===Ar.GLOBSTAR?r.testGlobstar(o,a,d,l):n instanceof RegExp?r.testRegExp(o,n,d,l):r.testString(o,n,d,l)}return r}testGlobstar(e,t,s,r){if((this.dot||!e.name.startsWith("."))&&(t.hasMore()||this.matches.add(e,r,!1),e.canReaddir()&&(this.follow||!e.isSymbolicLink()?this.subwalks.add(e,t):e.isSymbolicLink()&&(s&&t.checkFollowGlobstar()?this.subwalks.add(e,s):t.markFollowGlobstar()&&this.subwalks.add(e,t)))),s){let o=s.pattern();if(typeof o=="string"&&o!==".."&&o!==""&&o!==".")this.testString(e,o,s.rest(),r);else if(o===".."){let a=e.parent||e;this.subwalks.add(a,s)}else o instanceof RegExp&&this.testRegExp(e,o,s.rest(),r)}}testRegExp(e,t,s,r){!t.test(e.name)||(s?this.subwalks.add(e,s):this.matches.add(e,r,!1))}testString(e,t,s,r){!e.isNamed(t)||(s?this.subwalks.add(e,s):this.matches.add(e,r,!1))}};ue.Processor=ct});var Rr=P(xe=>{"use strict";Object.defineProperty(xe,"__esModule",{value:!0});xe.GlobStream=xe.GlobWalker=xe.GlobUtil=void 0;var rn=qi(),_r=Pr(),Or=Dr(),on=(i,e)=>typeof i=="string"?new _r.Ignore([i],e):Array.isArray(i)?new _r.Ignore(i,e):i,pt=class{path;patterns;opts;seen=new Set;paused=!1;aborted=!1;#t=[];#r;#s;signal;maxDepth;constructor(e,t,s){this.patterns=e,this.path=t,this.opts=s,this.#s=!s.posix&&s.platform==="win32"?"\\":"/",s.ignore&&(this.#r=on(s.ignore,s)),this.maxDepth=s.maxDepth||1/0,s.signal&&(this.signal=s.signal,this.signal.addEventListener("abort",()=>{this.#t.length=0}))}#n(e){return this.seen.has(e)||!!this.#r?.ignored?.(e)}#d(e){return!!this.#r?.childrenIgnored?.(e)}pause(){this.paused=!0}resume(){if(this.signal?.aborted)return;this.paused=!1;let e;for(;!this.paused&&(e=this.#t.shift());)e()}onResume(e){this.signal?.aborted||(this.paused?this.#t.push(e):e())}async matchCheck(e,t){if(t&&this.opts.nodir)return;let s;if(this.opts.realpath){if(s=e.realpathCached()||await e.realpath(),!s)return;e=s}let o=e.isUnknown()||this.opts.stat?await e.lstat():e;if(this.opts.follow&&this.opts.nodir&&o?.isSymbolicLink()){let a=await o.realpath();a&&(a.isUnknown()||this.opts.stat)&&await a.lstat()}return this.matchCheckTest(o,t)}matchCheckTest(e,t){return e&&(this.maxDepth===1/0||e.depth()<=this.maxDepth)&&(!t||e.canReaddir())&&(!this.opts.nodir||!e.isDirectory())&&(!this.opts.nodir||!this.opts.follow||!e.isSymbolicLink()||!e.realpathCached()?.isDirectory())&&!this.#n(e)?e:void 0}matchCheckSync(e,t){if(t&&this.opts.nodir)return;let s;if(this.opts.realpath){if(s=e.realpathCached()||e.realpathSync(),!s)return;e=s}let o=e.isUnknown()||this.opts.stat?e.lstatSync():e;if(this.opts.follow&&this.opts.nodir&&o?.isSymbolicLink()){let a=o.realpathSync();a&&(a?.isUnknown()||this.opts.stat)&&a.lstatSync()}return this.matchCheckTest(o,t)}matchFinish(e,t){if(this.#n(e))return;let s=this.opts.absolute===void 0?t:this.opts.absolute;this.seen.add(e);let r=this.opts.mark&&e.isDirectory()?this.#s:"";if(this.opts.withFileTypes)this.matchEmit(e);else if(s){let o=this.opts.posix?e.fullpathPosix():e.fullpath();this.matchEmit(o+r)}else{let o=this.opts.posix?e.relativePosix():e.relative(),a=this.opts.dotRelative&&!o.startsWith(".."+this.#s)?"."+this.#s:"";this.matchEmit(o?a+o+r:"."+r)}}async match(e,t,s){let r=await this.matchCheck(e,s);r&&this.matchFinish(r,t)}matchSync(e,t,s){let r=this.matchCheckSync(e,s);r&&this.matchFinish(r,t)}walkCB(e,t,s){this.signal?.aborted&&s(),this.walkCB2(e,t,new Or.Processor(this.opts),s)}walkCB2(e,t,s,r){if(this.#d(e))return r();if(this.signal?.aborted&&r(),this.paused){this.onResume(()=>this.walkCB2(e,t,s,r));return}s.processPatterns(e,t);let o=1,a=()=>{--o===0&&r()};for(let[l,n,d]of s.matches.entries())this.#n(l)||(o++,this.match(l,n,d).then(()=>a()));for(let l of s.subwalkTargets()){if(this.maxDepth!==1/0&&l.depth()>=this.maxDepth)continue;o++;let n=l.readdirCached();l.calledReaddir()?this.walkCB3(l,n,s,a):l.readdirCB((d,c)=>this.walkCB3(l,c,s,a),!0)}a()}walkCB3(e,t,s,r){s=s.filterEntries(e,t);let o=1,a=()=>{--o===0&&r()};for(let[l,n,d]of s.matches.entries())this.#n(l)||(o++,this.match(l,n,d).then(()=>a()));for(let[l,n]of s.subwalks.entries())o++,this.walkCB2(l,n,s.child(),a);a()}walkCBSync(e,t,s){this.signal?.aborted&&s(),this.walkCB2Sync(e,t,new Or.Processor(this.opts),s)}walkCB2Sync(e,t,s,r){if(this.#d(e))return r();if(this.signal?.aborted&&r(),this.paused){this.onResume(()=>this.walkCB2Sync(e,t,s,r));return}s.processPatterns(e,t);let o=1,a=()=>{--o===0&&r()};for(let[l,n,d]of s.matches.entries())this.#n(l)||this.matchSync(l,n,d);for(let l of s.subwalkTargets()){if(this.maxDepth!==1/0&&l.depth()>=this.maxDepth)continue;o++;let n=l.readdirSync();this.walkCB3Sync(l,n,s,a)}a()}walkCB3Sync(e,t,s,r){s=s.filterEntries(e,t);let o=1,a=()=>{--o===0&&r()};for(let[l,n,d]of s.matches.entries())this.#n(l)||this.matchSync(l,n,d);for(let[l,n]of s.subwalks.entries())o++,this.walkCB2Sync(l,n,s.child(),a);a()}};xe.GlobUtil=pt;var Vi=class extends pt{matches;constructor(e,t,s){super(e,t,s),this.matches=new Set}matchEmit(e){this.matches.add(e)}async walk(){if(this.signal?.aborted)throw this.signal.reason;return this.path.isUnknown()&&await this.path.lstat(),await new Promise((e,t)=>{this.walkCB(this.path,this.patterns,()=>{this.signal?.aborted?t(this.signal.reason):e(this.matches)})}),this.matches}walkSync(){if(this.signal?.aborted)throw this.signal.reason;return this.path.isUnknown()&&this.path.lstatSync(),this.walkCBSync(this.path,this.patterns,()=>{if(this.signal?.aborted)throw this.signal.reason}),this.matches}};xe.GlobWalker=Vi;var Ki=class extends pt{results;constructor(e,t,s){super(e,t,s),this.results=new rn.Minipass({signal:this.signal,objectMode:!0}),this.results.on("drain",()=>this.resume()),this.results.on("resume",()=>this.resume())}matchEmit(e){this.results.write(e),this.results.flowing||this.pause()}stream(){let e=this.path;return e.isUnknown()?e.lstat().then(()=>{this.walkCB(e,this.patterns,()=>this.results.end())}):this.walkCB(e,this.patterns,()=>this.results.end()),this.results}streamSync(){return this.path.isUnknown()&&this.path.lstatSync(),this.walkCBSync(this.path,this.patterns,()=>this.results.end()),this.results}};xe.GlobStream=Ki});var Yi=P(si=>{"use strict";Object.defineProperty(si,"__esModule",{value:!0});si.Glob=void 0;var an=ye(),ti=Tr(),nn=require("url"),ln=Gi(),ii=Rr(),cn=typeof process=="object"&&process&&typeof process.platform=="string"?process.platform:"linux",Ji=class{absolute;cwd;root;dot;dotRelative;follow;ignore;magicalBraces;mark;matchBase;maxDepth;nobrace;nocase;nodir;noext;noglobstar;pattern;platform;realpath;scurry;stat;signal;windowsPathsNoEscape;withFileTypes;opts;patterns;constructor(e,t){if(!t)throw new TypeError("glob options required");if(this.withFileTypes=!!t.withFileTypes,this.signal=t.signal,this.follow=!!t.follow,this.dot=!!t.dot,this.dotRelative=!!t.dotRelative,this.nodir=!!t.nodir,this.mark=!!t.mark,t.cwd?(t.cwd instanceof URL||t.cwd.startsWith("file://"))&&(t.cwd=(0,nn.fileURLToPath)(t.cwd)):this.cwd="",this.cwd=t.cwd||"",this.root=t.root,this.magicalBraces=!!t.magicalBraces,this.nobrace=!!t.nobrace,this.noext=!!t.noext,this.realpath=!!t.realpath,this.absolute=t.absolute,this.noglobstar=!!t.noglobstar,this.matchBase=!!t.matchBase,this.maxDepth=typeof t.maxDepth=="number"?t.maxDepth:1/0,this.stat=!!t.stat,this.ignore=t.ignore,this.withFileTypes&&this.absolute!==void 0)throw new Error("cannot set absolute and withFileTypes:true");if(typeof e=="string"&&(e=[e]),this.windowsPathsNoEscape=!!t.windowsPathsNoEscape||t.allowWindowsEscape===!1,this.windowsPathsNoEscape&&(e=e.map(n=>n.replace(/\\/g,"/"))),this.matchBase){if(t.noglobstar)throw new TypeError("base matching requires globstar");e=e.map(n=>n.includes("/")?n:`./**/${n}`)}if(this.pattern=e,this.platform=t.platform||cn,this.opts={...t,platform:this.platform},t.scurry){if(this.scurry=t.scurry,t.nocase!==void 0&&t.nocase!==t.scurry.nocase)throw new Error("nocase option contradicts provided scurry option")}else{let n=t.platform==="win32"?ti.PathScurryWin32:t.platform==="darwin"?ti.PathScurryDarwin:t.platform?ti.PathScurryPosix:ti.PathScurry;this.scurry=new n(this.cwd,{nocase:t.nocase,fs:t.fs})}this.nocase=this.scurry.nocase;let s=this.platform==="darwin"||this.platform==="win32",r={...t,dot:this.dot,matchBase:this.matchBase,nobrace:this.nobrace,nocase:this.nocase,nocaseMagicOnly:s,nocomment:!0,noext:this.noext,nonegate:!0,optimizationLevel:2,platform:this.platform,windowsPathsNoEscape:this.windowsPathsNoEscape,debug:!!this.opts.debug},o=this.pattern.map(n=>new an.Minimatch(n,r)),[a,l]=o.reduce((n,d)=>(n[0].push(...d.set),n[1].push(...d.globParts),n),[[],[]]);this.patterns=a.map((n,d)=>{let c=l[d];if(!c)throw new Error("invalid pattern object");return new ln.Pattern(n,c,0,this.platform)})}async walk(){return[...await new ii.GlobWalker(this.patterns,this.scurry.cwd,{...this.opts,maxDepth:this.maxDepth!==1/0?this.maxDepth+this.scurry.cwd.depth():1/0,platform:this.platform,nocase:this.nocase}).walk()]}walkSync(){return[...new ii.GlobWalker(this.patterns,this.scurry.cwd,{...this.opts,maxDepth:this.maxDepth!==1/0?this.maxDepth+this.scurry.cwd.depth():1/0,platform:this.platform,nocase:this.nocase}).walkSync()]}stream(){return new ii.GlobStream(this.patterns,this.scurry.cwd,{...this.opts,maxDepth:this.maxDepth!==1/0?this.maxDepth+this.scurry.cwd.depth():1/0,platform:this.platform,nocase:this.nocase}).stream()}streamSync(){return new ii.GlobStream(this.patterns,this.scurry.cwd,{...this.opts,maxDepth:this.maxDepth!==1/0?this.maxDepth+this.scurry.cwd.depth():1/0,platform:this.platform,nocase:this.nocase}).streamSync()}iterateSync(){return this.streamSync()[Symbol.iterator]()}[Symbol.iterator](){return this.iterateSync()}iterate(){return this.stream()[Symbol.asyncIterator]()}[Symbol.asyncIterator](){return this.iterate()}};si.Glob=Ji});var Zi=P(ri=>{"use strict";Object.defineProperty(ri,"__esModule",{value:!0});ri.hasMagic=void 0;var pn=ye(),dn=(i,e={})=>{Array.isArray(i)||(i=[i]);for(let t of i)if(new pn.Minimatch(t,e).hasMagic())return!0;return!1};ri.hasMagic=dn});var Ir=P(E=>{"use strict";Object.defineProperty(E,"__esModule",{value:!0});E.glob=E.hasMagic=E.Glob=E.unescape=E.escape=E.sync=E.iterate=E.iterateSync=E.stream=E.streamSync=E.globIterate=E.globIterateSync=E.globSync=E.globStream=E.globStreamSync=void 0;var Nr=ye(),Ae=Yi(),un=Zi();function dt(i,e={}){return new Ae.Glob(i,e).streamSync()}E.globStreamSync=dt;function Qi(i,e={}){return new Ae.Glob(i,e).stream()}E.globStream=Qi;function Xi(i,e={}){return new Ae.Glob(i,e).walkSync()}E.globSync=Xi;async function Lr(i,e={}){return new Ae.Glob(i,e).walk()}function ut(i,e={}){return new Ae.Glob(i,e).iterateSync()}E.globIterateSync=ut;function zi(i,e={}){return new Ae.Glob(i,e).iterate()}E.globIterate=zi;E.streamSync=dt;E.stream=Object.assign(Qi,{sync:dt});E.iterateSync=ut;E.iterate=Object.assign(zi,{sync:ut});E.sync=Object.assign(Xi,{stream:dt,iterate:ut});var Mr=ye();Object.defineProperty(E,"escape",{enumerable:!0,get:function(){return Mr.escape}});Object.defineProperty(E,"unescape",{enumerable:!0,get:function(){return Mr.unescape}});var hn=Yi();Object.defineProperty(E,"Glob",{enumerable:!0,get:function(){return hn.Glob}});var gn=Zi();Object.defineProperty(E,"hasMagic",{enumerable:!0,get:function(){return gn.hasMagic}});E.glob=Object.assign(Lr,{glob:Lr,globSync:Xi,sync:E.sync,globStream:Qi,stream:E.stream,globStreamSync:dt,streamSync:E.streamSync,globIterate:zi,iterate:E.iterate,globIterateSync:ut,iterateSync:E.iterateSync,Glob:Ae.Glob,hasMagic:un.hasMagic,escape:Nr.escape,unescape:Nr.unescape});E.glob.glob=E.glob});var Br=P(De=>{"use strict";var Be=De&&De.__awaiter||function(i,e,t,s){function r(o){return o instanceof t?o:new t(function(a){a(o)})}return new(t||(t=Promise))(function(o,a){function l(c){try{d(s.next(c))}catch(p){a(p)}}function n(c){try{d(s.throw(c))}catch(p){a(p)}}function d(c){c.done?o(c.value):r(c.value).then(l,n)}d((s=s.apply(i,e||[])).next())})};Object.defineProperty(De,"__esModule",{value:!0});De.vueHelperDefinitionProvider=void 0;var $=require("vscode"),J=require("fs"),R=require("path"),qe=ni(),ht=xs(),mn=ks(),bn=Fs(),Sr=(Ps(),Jr(Es)),fn=Ir(),es=class{constructor(e){this.frameworks=[],this.pathAlias={alias:"",path:""},this.explorer=e;try{let t=J.readFileSync((0,qe.winRootPathHandle)(R.join(this.explorer.projectRootPath,"package.json")),"utf-8");t.includes("element-plus")&&this.frameworks.push("element-plus"),t.includes("element-ui")&&this.frameworks.push("element-ui"),t.includes("ant-design-vue")&&this.frameworks.push("ant-design-vue")}catch(t){}}register(){this.explorer.context.subscriptions.push($.languages.registerCompletionItemProvider(["vue","javascript","typescript","html","wxml"],new ts(this),"",":","<",'"',"'","/","@","(",">","{")),this.explorer.context.subscriptions.push($.languages.registerHoverProvider(["vue","wxml"],new is(this))),this.explorer.context.subscriptions.push($.languages.registerDefinitionProvider(["vue","javascript","html","wxml"],new oi(this)))}};De.default=es;var ts=class{constructor(e){this.attribute={},this.jsTag={},this.tag={},this.globalAttribute={},this.tagReg=/<([\w-]+)\s+/g,this.attrReg=/(?:\(|\s*)((\w(-)?)*)=['"][^'"]*/,this.frameworkProvider=e,this.attribute=(0,ht.getAttribute)(this.frameworkProvider.frameworks,this.frameworkProvider.explorer.tabSize),this.tag=(0,ht.getTag)(this.frameworkProvider.frameworks,this.frameworkProvider.explorer.tabSize),this.jsTag=(0,ht.getJsTag)(this.frameworkProvider.frameworks,this.frameworkProvider.explorer.tabSize),this.globalAttribute=(0,ht.getGlobalAttribute)(this.frameworkProvider.frameworks,this.frameworkProvider.explorer.tabSize)}isCloseTag(e,t){let s=e.getText(new $.Range(new $.Position(t.line,0),t)).trim();if(!s.endsWith(">")||/.*=("[^"]*>|'[^']*>)$/gi.test(s)||s.endsWith("/>"))return!1;let r=s.match(/<([\w-]+)(\s*|(\s+[\w-_:@\.]+(=("[^"]*"|'[^']*'))?)+)\s*>/gim);if(Array.isArray(r)&&r.length>0){let o=r[r.length-1];return/<([\w-]+)(\s*|(\s+[\w-_:@\.]+(=("[^"]*"|'[^']*'))?)+)\s*>$/gi.test(o)}return!1}getCloseTagSuggestion(e,t){let r=e.lineAt(t.line).text.match(/<([\w-]+)(\s*|(\s+[\w-_:@\.]+(=("[^"]*"|'[^']*'))?)+)\s*>/gim),o="div";if(r&&(o=r[r.length-1].replace(/<([\w-]+)(\s*|(\s+[\w-_:@\.]+(=("[^"]*"|'[^']*'))?)+)\s*>/gim,"$1")),["br","img"].indexOf(o)===-1&&$.window.activeTextEditor){$.window.activeTextEditor.edit(n=>{n.insert(t,"</"+o+">")});let l=$.window.activeTextEditor.selection.active.translate(0,0);l&&($.window.activeTextEditor.selection=new $.Selection(l,l))}}getTextBeforePosition(e,t){var s=new $.Position(e.line,0),r=new $.Range(s,e);return t.getText(r)}matchTag(e,t,s,r,o){let a,l=[];if(/<\/?[-\w]+[^<>]*>[\s\w]*<?\s*[\w-]*$/.test(t)||o.line===s&&(/^\s*[^<]+\s*>[^<\/>]*$/.test(t)||/[^<>]*<$/.test(t[t.length-1])))return"break";for(;a=e.exec(t);)l.push({text:a[1],offset:r.offsetAt(new $.Position(s,a.index))});return l.pop()}getPreTag(e,t){let s=t.line,r,o=this.getTextBeforePosition(t,e);for(;t.line-s<10&&s>=0;){if(s!==t.line&&(o=e.lineAt(s).text),r=this.matchTag(this.tagReg,o,s,e,t),r==="break")return;if(r)return r;s--}}getPreAttr(e,t){let s=this.getTextBeforePosition(t,e).replace(/"[^'"]*(\s*)[^'"]*$/,""),r=t.character,o=s.lastIndexOf(" ",r)+1,a=e.getText(new $.Range(t.line,o,t.line,r));return this.matchAttr(this.attrReg,a)}matchAttr(e,t){let s;return s=e.exec(t),!/"[^"]*"/.test(t)&&s&&s[1]}isAttrValueStart(e,t){return e&&t}getAttrValues(e,t){let s=[];return this.globalAttribute[t]&&(s=this.globalAttribute[t].values),this.attribute[e]&&this.attribute[e][t]&&(s=this.attribute[e][t].values),s}getAttrValueSuggestion(e,t){let s=[];return this.getAttrValues(e,t).forEach(o=>{s.push({sortText:`000${o}`,label:o,detail:this.frameworkProvider.explorer.name,kind:$.CompletionItemKind.Value})}),s}getAttrSuggestion(e,t,s){let r=[],o=this.getTagAttrs(e),n=this.getTextBeforePosition(s,t).replace(/['"]([^'"]*)['"]$/,"").split(/\s|\(+/).pop()[0]==="@"?"method":"attribute";o.forEach(d=>{d.type===n&&r.push(this.buildAttrSuggestion(d))});for(let d in this.globalAttribute){let c=this.globalAttribute[d];c.type===n&&r.push(this.buildAttrSuggestion(Object.assign({name:d},c)))}return r}buildAttrSuggestion(e){let t=new $.CompletionItem(e.name);return t.sortText=`000${e.name}`,t.insertText=e.name,t.kind=e.type==="method"?$.CompletionItemKind.Method:$.CompletionItemKind.Property,t.detail=this.frameworkProvider.explorer.name,t.documentation=$.l10n.t(e.description),t}getTagAttrs(e){let t=[];if(this.attribute[e])for(let s in this.attribute[e])s!=="_self"&&t.push(Object.assign({name:s},this.attribute[e][s]));return t}getPropAttr(e,t){let s=e.getText(),r=t.replace(/(-[a-z])/g,(c,p)=>p?p.toUpperCase():"").replace(/-/gi,""),o=RegExp("import\\s+("+t+"|"+r+`)\\s+from\\s+['"]([^'"]*)`,"g"),a=s.match(o);if(a&&a.length>0){let c=a[0];c=c.replace(/(.*['"])/,""),c=c.replace(this.frameworkProvider.pathAlias.alias,this.frameworkProvider.pathAlias.path),c.endsWith(".vue")||(c+=".vue"),c.indexOf("./")>0||c.indexOf("../")>0?c=R.join(e.fileName,"../",c):c=R.join($.workspace.rootPath||"",c),s=J.readFileSync(c,"utf8")}else return;let l=[],n=s.indexOf("<script");if(n){let c=s.substr(n,s.length),p=c.indexOf("props"),u=0;if(p){c=c.substr(p,c.length);let h=c.indexOf("{"),b=0;h&&(++u,c=c.substr(h+1,c.length));let g="";for(;u>0&&c.length>0;)h=c.indexOf("{"),b=c.indexOf("}"),h===-1?c="":h<b?(u===1&&(g+=c.substr(0,h)),++u,c=c.substr(h>0?h+1:1,c.length)):(--u,c=c.substr(b>0?b+1:1,c.length));let x=g.match(/\s[\w-]*:/gi);x&&x.length>0&&x.forEach((y,C)=>{y=y.substr(1,y.length-2),y=y.replace(/([A-Z])/g,(j,T)=>T?"-"+T.toLowerCase():""),l.push({label:y,sortText:"0"+C,insertText:new $.SnippetString(`:${y}="$0"`),kind:$.CompletionItemKind.Property,documentation:""})})}}let d=s.match(/\$emit\(\s?['"](\w*)/g);if(d&&d.length>0)for(let c=0;c<d.length;c++){let p=d[c];p=p.replace(/(.*['"])/,""),l.push({label:p,sortText:"0"+(l.length+1),insertText:new $.SnippetString(`@${p}="$0"`),kind:$.CompletionItemKind.Method,documentation:""})}return l}isImport(e,t){let s=e.lineAt(t.line).text.trim();return/^\s*import.*/.test(s)}importSuggestion(e,t){let s=e.lineAt(t.line).text.trim();s=s.replace(/^import/,"").trim();let r=[];if(s){let o=this.frameworkProvider.explorer.traverse.search("",s,!1),a=this.frameworkProvider.pathAlias;o.forEach(l=>{let n="";a.alias?n=l.path:n=(0,qe.getRelativePath)(e.uri.path,R.join(this.frameworkProvider.explorer.projectRootPath,l.path));let d=l.name,c=n;n.endsWith(".ts")&&(c=n.substring(0,n.length-3)),r.push({label:l.name,sortText:`0${l.name}`,insertText:new $.SnippetString(`\${1:${d}} from '${c}'`),kind:$.CompletionItemKind.Reference,detail:l.name,documentation:`import ${d} from ${n}`})})}return r}notInTemplate(e,t){let s=t.line;for(;s;){if(/^\s*<script.*>\s*$/.test(e.lineAt(s).text))return!0;s--}return!1}buildTagSuggestion(e,t,s){return{label:e,sortText:`00${s}${e}`,insertText:new $.SnippetString(t),kind:$.CompletionItemKind.Snippet,detail:this.frameworkProvider.explorer.name,documentation:""}}getTagJsSuggestion(){let e=[],t=1;if(this.frameworkProvider.explorer.store.get("use-vue-snippets")){let r=(0,bn.default)(this.frameworkProvider.explorer.tabSize);for(let o in r){let a=r[o];e.push({label:o,sortText:`0${t}${o}`,insertText:new $.SnippetString(a),kind:$.CompletionItemKind.Snippet,detail:this.frameworkProvider.explorer.name}),t++}}try{for(let r in this.jsTag){let o=this.jsTag[r];e.push({label:r,sortText:`00${t}${r}`,insertText:new $.SnippetString(o),kind:$.CompletionItemKind.Snippet,detail:this.frameworkProvider.explorer.name,documentation:o}),t++}}catch(r){}return e}addLocalComponentSuggestions(){let e=[];if($.window.activeTextEditor){let t=this.frameworkProvider.explorer.getActiveEditorDir($.window.activeTextEditor.document.uri.path);for(let s=0;s<this.frameworkProvider.explorer.vueFiles.length;s++){let r=this.frameworkProvider.explorer.vueFiles[s];e.push({label:r.name,sortText:`0${s}${r.name}`,insertText:new $.SnippetString(`${r.name}$0></${r.name}>`),kind:$.CompletionItemKind.Folder,detail:this.frameworkProvider.explorer.name,documentation:`import ${r.name} from '${this.frameworkProvider.explorer.getVueRelativePath(t,r.path)}'`,command:{command:`${this.frameworkProvider.explorer.name}.funcEnhance`,title:`${this.frameworkProvider.explorer.name}.funcEnhance`}})}}return e}getTagSuggestion(){let e=this.addLocalComponentSuggestions(),t=1;if(this.frameworkProvider.explorer.store.get("use-vue-snippets")){let r=(0,mn.default)(this.frameworkProvider.explorer.tabSize);for(let o in r){let a=r[o];e.push({label:o,sortText:`0${t}${o}`,insertText:new $.SnippetString(a),kind:$.CompletionItemKind.Snippet,detail:this.frameworkProvider.explorer.name}),t++}}try{for(let r in this.tag)e.push(this.buildTagSuggestion(r,this.tag[r],t)),t++}catch(r){}return e}getElementTagLabelSuggestion(){let e=this.addLocalComponentSuggestions(),t=1;try{let s=[];for(let r in this.attribute){let o=r.replace(/:.*/gi,"");s.includes(o)||(s.push(o),e.push({label:o,sortText:`00${t}${o}`,insertText:new $.SnippetString(`${o}$0></${o}>`),kind:$.CompletionItemKind.Snippet,detail:this.frameworkProvider.explorer.name}),t++)}}catch(s){}return e}provideCompletionItems(e,t,s,r){if(this.isCloseTag(e,t))return this.getCloseTagSuggestion(e,t),[];let o=this.getPreTag(e,t),a=this.getPreAttr(e,t),l=(0,qe.getCurrentWord)(e,t),n=e.lineAt(t.line).text.includes("<");return o&&a&&this.isAttrValueStart(o,a)?this.getAttrValueSuggestion(o.text,a):o?this.attribute[o.text]?this.getAttrSuggestion(o.text,e,t):this.getPropAttr(e,o.text):this.isImport(e,t)?this.importSuggestion(e,t):l[0]==="e"||l[0]==="a"?this.notInTemplate(e,t)?this.getTagJsSuggestion():this.getTagSuggestion():l.includes("v")?this.notInTemplate(e,t)?this.getTagJsSuggestion():this.getTagSuggestion():!o&&n?this.notInTemplate(e,t)?[]:this.getElementTagLabelSuggestion():[]}},is=class{constructor(e){this.frameworkProvider=e,this.document=(0,ht.getDocument)(this.frameworkProvider.frameworks,this.frameworkProvider.explorer.tabSize)}getTag(e,t){let s=t.line,r="";for(;s>0&&!r;){let a=e.lineAt(s).text.trim();s===t.line&&(a=a.substring(0,t.character));let l=a.match(/<[^(>/)]+/gim);if(l){for(let n=l.length-1;n>=0;n--)if(l[n][0]==="<"&&l[n][1]!=="/"){l[n].indexOf(" ")!==-1?r=l[n].replace(/^<(\S*)(\s.*|\s*)/gi,"$1"):r=l[n].replace(/^<(.*)/gi,"$1");break}}--s}return r}provideHover(e,t){let s=(0,qe.getWord)(e,t,[" ","<",">",'"',"'",".","\\","=",":"]);return this.document[s.selectText]?new $.Hover(this.document[s.selectText]):null}},oi=class{constructor(e){this.VUE_ATTR={props:1,computed:2,methods:3,watch:4,beforeCreate:5,created:6,beforeMount:7,mounted:8,beforeUpdate:9,updated:10,activated:11,deactivated:12,beforeDestroy:13,destroyed:14,directives:15,filters:16,components:17,data:18},this.frameworkProvider=e}getDefinitionPosition(e){let t=[/import\s+.*\s+from\s+['"](.*)['"]/,/import\s*[^'"]*\(['"](.*)['"]\)[^'"]*/,/.*require\s*\([^'"]*['"](.*)['"][^'"]*\)/,/import\s+['"](.*)['"]/,/import\s*\([^'"]*(?:\/\*.*\*\/)\s*['"](.*)['"][^'"]\)*/],s;for(let r of t)if(s=r.exec(e),s&&s[1])return{path:s[1]}}getPlugin(e){return Be(this,void 0,void 0,function*(){return yield new Promise((t,s)=>{J.readFile($.workspace.rootPath+R.sep+"package.json","utf8",(r,o)=>{r&&s(r);let a="",l={};try{l=JSON.parse(o)}catch(n){}if(Array.isArray(e)){let n=e;for(let d=0;d<n.length;d++){let c=n[d];(l.dependencies&&l.dependencies[c]||l.devDependencies&&l.devDependencies[c])&&(a=c)}}else{let n=e.split("/");(n.length===1&&l.dependencies&&l.dependencies[e]||l.devDependencies&&l.devDependencies[e]||n.length>1&&l.dependencies&&l.dependencies[n[0]]||l.devDependencies&&l.devDependencies[n[0]])&&(a=e)}t(a||"")})})})}readDir(e,t,s){return Be(this,void 0,void 0,function*(){return yield new Promise((r,o)=>{J.readdir(e,"utf8",(a,l)=>{if(a&&o(a),l.indexOf(t.toLowerCase())!==-1){if(s==="iview"){let n=e+R.sep+t.toLowerCase()+R.sep,d=n+t.toLowerCase()+".vue",c=n+"index.js";J.existsSync(d)?r(d):J.existsSync(c)?r(c):r("")}else if(s==="element-ui"){let n=e+R.sep+t.replace(/^el-/gi,"")+R.sep,d=n+"src"+R.sep+"main.vue",c=n+"src"+R.sep+t+".vue",p=n+"index.js";J.existsSync(d)?r(d):J.existsSync(c)?r(c):J.existsSync(p)?r(p):r("")}}else r("")})})})}definitionPlugin(e){return Be(this,void 0,void 0,function*(){let t=yield this.getPlugin(["iview","element-ui"]);return t==="iview"?yield this.readDir($.workspace.rootPath+R.sep+"node_modules"+R.sep+"iview"+R.sep+"src"+R.sep+"components",Sr(e),t):t==="element-ui"?yield this.readDir($.workspace.rootPath+R.sep+"node_modules"+R.sep+"element-ui"+R.sep+"packages",Sr(e).replace(/^el-/gi,""),t):""})}getMain(e){return Be(this,void 0,void 0,function*(){return yield new Promise((t,s)=>{J.readFile(e+"package.json","utf8",(r,o)=>{r&&s(r);let a={};try{a=JSON.parse(o)}catch(l){}a.main?t(a.main):t("")})})})}definitionOutFile(e,t){return Be(this,void 0,void 0,function*(){let s=t.path,r=!1;if(s.includes(this.frameworkProvider.explorer.prefix.alias)&&(r=!0),s=s.replace(this.frameworkProvider.explorer.prefix.alias,this.frameworkProvider.explorer.prefix.path),/(.*\/.*|[^.]+)\..*$/gi.test(s)){let c="";if(r?c=R.join(this.frameworkProvider.explorer.projectRootPath,s):c=R.join(e.uri.path||"","../",s),J.existsSync(c))return Promise.resolve(new $.Location($.Uri.file(c),new $.Position(0,0)))}else{let c=["vue","js","css","scss","less"];for(let p=0;p<c.length;p++){let u=c[p],h="";if(r?h=R.join(this.frameworkProvider.explorer.projectRootPath,s):h=R.join(e.uri.path||"","../",s),h.endsWith(R.sep)){if(h=h+"index."+u,J.existsSync(h))return Promise.resolve(new $.Location($.Uri.file(h),new $.Position(0,0)))}else{let b=h+R.sep+"index."+u;if(h+="."+u,h=(0,qe.winRootPathHandle)(h),J.existsSync(h))return Promise.resolve(new $.Location($.Uri.file(h),new $.Position(0,0)));if(J.existsSync(b))return Promise.resolve(new $.Location($.Uri.file(b),new $.Position(0,0)))}}}let o=yield this.getPlugin(s),a=$.workspace.rootPath+R.sep+"node_modules"+R.sep+o+R.sep,l=$.workspace.rootPath+R.sep+"node_modules"+R.sep+o+".js",n=a+"index.js";if(J.existsSync(l))return Promise.resolve(new $.Location($.Uri.file(l),new $.Position(0,0)));if(J.existsSync(n))return Promise.resolve(new $.Location($.Uri.file(n),new $.Position(0,0)));let d=yield this.getMain(a);return d?Promise.resolve(new $.Location($.Uri.file(a+d),new $.Position(0,0))):Promise.resolve(null)})}definitionInFile(e,t){return Be(this,void 0,void 0,function*(){let s=(0,qe.getWord)(e,t,[" ","<",">",'"',"'",".","\\","=",":","@","(",")","[","]","{","}",",","!"]),r=0,o=!1,a="",l=0,n="",d="";for(s.startText==="<"&&(d="components");r<e.lineCount&&!/^\s*<\/script>\s*$/g.test(a);){if(a=e.lineAt(++r).text,!o){/^\s*<script.*>\s*$/g.test(a)&&(o=!0);continue}let p=a.replace(/\s*(\w*)\s*(\(\s*\)|:|(:\s*function\s*\(\s*\)))\s*{\s*/gi,"$1");if(this.VUE_ATTR[p]!==void 0&&l===0&&(n=p,l=0),d==="components"){let u=s.selectText.toLowerCase().replace(/-/gi,"");if(n){for(let b=0;b<this.frameworkProvider.explorer.vueFiles.length;b++){let g=this.frameworkProvider.explorer.vueFiles[b];if(g.name.toLowerCase().replace(/-/gi,"")===u)return Promise.resolve(new $.Location($.Uri.file(R.join(this.frameworkProvider.explorer.projectRootPath,g.path.replace(this.frameworkProvider.explorer.prefix.alias,this.frameworkProvider.explorer.prefix.path))),new $.Position(0,0)))}let h=yield this.definitionPlugin(s.selectText);if(h)return Promise.resolve(new $.Location($.Uri.file(h),new $.Position(0,0)));break}else if(a.toLowerCase().includes(u)&&(a.trim().indexOf("import")===0||a.trim().indexOf("require")===0))return this.definitionOutFile(e,this.getDefinitionPosition(a))}else{let u=a.match(/{/gi),h=a.match(/}/gi);if(n==="data"&&l>=2){let b=a.replace(/\s*(\w+):.+/gi,"$1");if(s.selectText===b&&l===2)return Promise.resolve(new $.Location(e.uri,new $.Position(r,a.indexOf(b)+b.length)));let g=u?u.length:0,x=h?h.length:0;l+=g-x}else if(n){let b=a.replace(/\s*(async\s*)?(\w*)\s*(:|\().*/gi,"$2");if(s.selectText===b&&l===1)return Promise.resolve(new $.Location(e.uri,new $.Position(r,a.indexOf(b)+b.length)));let g=u?u.length:0,x=h?h.length:0;l+=g-x}n==="data"&&/\s*return\s*{\s*/gi.test(a)&&(l=2)}}let c=fn.sync($.workspace.rootPath+"/!(node_modules)/**/*.vue");for(let p=0;p<c.length;p++){let u=c[p];if(u.replace(/-/gi,"").toLowerCase().replace(/\.vue$/,"").endsWith("/"+s.selectText.toLowerCase().replace(/-/gi,"")))return Promise.resolve(new $.Location($.Uri.file(u),new $.Position(0,0)))}return Promise.resolve(null)})}provideDefinition(e,t,s){let r=e.getText(),o=e.lineAt(t.line),a=this.getDefinitionPosition(o.text);return a?this.definitionOutFile(e,a):r.includes('lang="ts"')||this.frameworkProvider.explorer.isTs?[]:this.definitionInFile(e,t)}};De.vueHelperDefinitionProvider=oi});var qr=P(gt=>{"use strict";var vn=gt&&gt.__awaiter||function(i,e,t,s){function r(o){return o instanceof t?o:new t(function(a){a(o)})}return new(t||(t=Promise))(function(o,a){function l(c){try{d(s.next(c))}catch(p){a(p)}}function n(c){try{d(s.throw(c))}catch(p){a(p)}}function d(c){c.done?o(c.value):r(c.value).then(l,n)}d((s=s.apply(i,e||[])).next())})};Object.defineProperty(gt,"__esModule",{value:!0});var k=require("vscode"),ss=class{constructor(e){this.explorer=e}register(){this.explorer.context.subscriptions.push(k.commands.registerCommand("vue-helper.blockSelect",()=>{this.blockSelect()})),this.explorer.context.subscriptions.push(k.commands.registerCommand("vue-helper.funcEnhance",()=>{this.funcEnhance()})),this.explorer.context.subscriptions.push(k.commands.registerCommand("vue-helper.backspace",()=>{this.backspce()}))}asNormal(e,t){switch(e){case"enter":return t==="ctrl"?k.commands.executeCommand("editor.action.insertLineAfter"):k.commands.executeCommand("type",{source:"keyboard",text:`
`});case"tab":return k.workspace.getConfiguration("emmet").get("triggerExpansionOnTab")?k.commands.executeCommand("editor.emmet.action.expandAbbreviation"):t==="shift"?k.commands.executeCommand("editor.action.outdentLines"):k.commands.executeCommand("tab");case"backspace":return k.commands.executeCommand("deleteLeft")}}backspce(){var e,t,s,r,o,a,l;return vn(this,void 0,void 0,function*(){let n=k.window.activeTextEditor;if(!n){this.asNormal("backspace");return}if(((e=k.window.activeTextEditor)===null||e===void 0?void 0:e.selections.length)&&((t=k.window.activeTextEditor)===null||t===void 0?void 0:t.selections.length)>1){let d=(s=k.window.activeTextEditor)===null||s===void 0?void 0:s.selections,c=[];for(let p=0;p<d.length;p++){let u=d[p];if(u.start.line===u.end.line&&u.start.character===u.end.character){if(u.anchor.character>0)c.push(new k.Selection(new k.Position(u.anchor.line,u.anchor.character-1),u.anchor));else if(u.anchor.line>0){let h=n.document.lineAt(u.anchor.line-1).text.length;c.push(new k.Selection(new k.Position(u.anchor.line-1,h),u.anchor))}}else c.push(u)}yield n.edit(p=>{for(let u=0;u<c.length;u++)p.delete(c[u])});return}if(((r=k.window.activeTextEditor)===null||r===void 0?void 0:r.selection.start.line)===((o=k.window.activeTextEditor)===null||o===void 0?void 0:o.selection.end.line)&&((a=k.window.activeTextEditor)===null||a===void 0?void 0:a.selection.start.character)===((l=k.window.activeTextEditor)===null||l===void 0?void 0:l.selection.end.character))if(n.selection.anchor.line===0)n.selection.anchor.character>0&&(yield n.edit(d=>{d.delete(new k.Selection(new k.Position(n.selection.anchor.line,n.selection.anchor.character-1),n.selection.anchor))}));else if(n.document.lineAt(n.selection.anchor.line).text.trim()===""){let c="",p=n.selection.anchor.line;for(;c.trim()===""&&p>=0;)p-=1,c=n.document.lineAt(p).text;yield n.edit(u=>{u.delete(new k.Selection(new k.Position(p,c.length),n.selection.anchor))})}else{let c,p=n.selection.anchor,u=n.document.getText(new k.Range(new k.Position(p.line,0),p));if(p.character===0||u.trim()==="")c=new k.Position(p.line-1,n.document.lineAt(p.line-1).text.length);else{c=new k.Position(p.line,p.character-1);let h=n.document.getText(new k.Range(new k.Position(p.line,p.character-1),p));if(n.document.lineAt(p.line).text.length>p.character){let b=n.document.getText(new k.Range(p,new k.Position(p.line,p.character+1)));(h==="{"&&b==="}"||h==="("&&b===")"||h==="'"&&b==="'"||h==='"'&&b==='"'||h==="["&&b==="]"||h==="<"&&b===">")&&(p=new k.Position(p.line,p.character+1))}}yield n.edit(h=>{h.delete(new k.Selection(c,p))})}else this.asNormal("backspace")})}funcEnhance(){var e,t,s,r;if(!k.window.activeTextEditor)return;let a=(((e=k.window.activeTextEditor)===null||e===void 0?void 0:e.selection.anchor.character)||0)-1,l=(t=k.window.activeTextEditor)===null||t===void 0?void 0:t.document.lineAt((s=k.window.activeTextEditor)===null||s===void 0?void 0:s.selection.anchor.line).text,n="",d=!1,c="";for(l&&l.includes('"')&&(c="0");l&&a&&a>0;){let p=l[a];if(p==='"'&&(c="0",d=!0),p===" ")break;d||(n=p+n),p==="@"&&(c="1"),--a}for(a=((r=k.window.activeTextEditor)===null||r===void 0?void 0:r.selection.anchor.character)||0;l&&a&&l.length>a&&l[a]!=='"';)n=n+l[a],++a;switch(n.includes(")")&&(c="1"),c){default:this.autoEnhance();break}}autoEnhance(){let e=k.window.activeTextEditor;if(!e)return;let t=e.document.lineAt(e.selection.anchor.line).text;if(e.document.lineCount<=e.selection.anchor.line+1)return;if(/<.*>\s?<\/.*>/gi.test(t.trim())||/<.*\/>/gi.test(t.trim())){this.autoImportComponent(t,e,e.selection.anchor.line);return}let s=e.document.lineAt(e.selection.anchor.line+1).text,r=t.replace(/(\s)\S.*/gi,"$1"),o=` {
${r}${this.explorer.tabSize}
${r}}`;if(/^\s*$/gi.test(t)||t===""?o="name (params)"+o:/[0-9a-zA-Z]\s{0,1}:\s{0,1}[\w\"\']/gi.test(t)?o=`,
`+r:t.indexOf(")")===-1&&(o=" (params)"+o),/\s*\/\/\s+.*/gi.test(s)){if(e.document.lineCount<=e.selection.anchor.line+2)return;s=e.document.lineAt(e.selection.anchor.line+2).text}if(/.*(.*).*{.*/gi.test(s)){let l=!1,n=t.trim();["if","for","while","switch"].forEach(c=>{n.indexOf(c)===0&&(l=!0)}),l||(o+=",")}e.edit(l=>{l.insert(new k.Position(e.selection.anchor.line,t.length+1),o)});let a=e.selection.active.translate(1,(r+this.explorer.tabSize).length);e.selection=new k.Selection(a,a)}autoImportComponent(e,t,s){let r=e.trim().replace(/<([\w-]*)[\s>].*/gi,"$1");for(let o=0;o<this.explorer.vueFiles.length;o++){let a=this.explorer.vueFiles[o];if(r===a.name){let l=a.name;if(t.document.getText().includes(`import ${l}`))return;let n=t.document.lineCount;for(;!/^\s*<script.*>\s*$/.test(t.document.lineAt(s).text)&&n>s;)s++;let d=this.explorer.getActiveEditorDir(t.document.uri.path),c=`import ${l} from '${this.explorer.getVueRelativePath(d,a.path)}'
`;if(t.document.lineAt(s).text.includes("setup")){t.edit(u=>{c=c.replace(/\\/gi,"/"),u.insert(new k.Position(s+1,0),c)});return}if(t.document.lineAt(s+1).text.includes("export default"))s+=1;else{if(s+=1,n<s)return;for(;/import /gi.test(t.document.lineAt(s).text.trim())&&n>s;)s++}let p=s;if(s<n){let u=0,h=0,b=!1,g="";for(;!/\s*<\/script>\s*/gi.test(t.document.lineAt(s).text.trim());){if(/\s*components\s*:\s*{.*}.*/gi.test(t.document.lineAt(s).text.trim())){let C=t.document.lineAt(s).text.replace(/\s*}.*$/,"").length;t.edit(j=>{c=c.replace(/\\/gi,"/"),j.insert(new k.Position(p,0),c),j.insert(new k.Position(s,C),", "+l)});break}if(b&&/\s*},?\s*$/gi.test(t.document.lineAt(s).text.trim())){let x=t.document.lineAt(s-1).text,y=x.indexOf(x.trim()),C="";for(let j=0;j<y;j++)C+=" ";t.edit(j=>{c=c.replace(/\\/gi,"/"),j.insert(new k.Position(p,0),c),j.insert(new k.Position(s-1,t.document.lineAt(s-1).text.length),`,
`+C+l)});break}if(/\s*components\s*:\s*{\s*$/gi.test(t.document.lineAt(s).text.trim())&&(b=!0),/\s*export\s*default\s*{\s*/gi.test(t.document.lineAt(s).text.trim())&&(h=s),/\s*data\s*\(\s*\)\s*{\s*/gi.test(t.document.lineAt(s).text.trim())){let x=t.document.lineAt(s).text,y=x.indexOf(x.trim());for(let C=0;C<y;C++)g+="";u=s}if(n>s)s++;else break}if(u>0){t.edit(x=>{c=c.replace(/\\/gi,"/"),x.insert(new k.Position(p-1,0),c),x.insert(new k.Position(u-1,t.document.lineAt(u-1).text.length),`
	${g}components: { ${l} },`)});break}h>0&&t.edit(x=>{c=c.replace(/\\/gi,"/"),x.insert(new k.Position(p,0),c),x.insert(new k.Position(h,t.document.lineAt(h).text.length),`
${this.explorer.tabSize}components: { ${l} },`)})}break}}}blockSelect(){let e=k.window.activeTextEditor;if(!e)return;let t=e.selection.start,r=e.document.lineAt(t.line).text;r.length>0&&t.character===0&&r[t.character]==="["?this.selectJsBlock(e,r.substring(t.character,r.length),t,"array"):r.length>0&&t.character>0&&r[t.character-1]==="["?this.selectJsBlock(e,r.substring(t.character-1,r.length),new k.Position(t.line,t.character-1),"array"):r.length>0&&t.character<r.length&&r[t.character]==="["?this.selectJsBlock(e,r.substring(t.character,r.length),t,"array"):r.length>0&&t.character===0&&r[t.character]==="{"?this.selectJsBlock(e,r.substring(t.character,r.length),t,"json"):r.length>0&&t.character>0&&r[t.character-1]==="{"?this.selectJsBlock(e,r.substring(t.character-1,r.length),new k.Position(t.line,t.character-1),"json"):r.length>0&&t.character<r.length&&r[t.character]==="{"?this.selectJsBlock(e,r.substring(t.character,r.length),t,"json"):r.trim().length>0&&r.trim()[0]==="<"&&t.character<=r.indexOf("<")?(r=r.substring(t.character,r.length),this.selectHtmlBlock(e,r,t)):r.trim().length>0&&r.trim()[0]==="<"&&t.character<=r.indexOf("<")?(r=r.substring(t.character,r.length),this.selectHtmlBlock(e,r,t)):/^\s*[\sa-zA-Z:_-]*\s*\[\s*$/gi.test(r)?this.selectJsBlock(e,r,new k.Position(t.line,r.length-r.replace(/\s*/,"").length),"array"):r.trim().length>0&&/(function|if|for|while)?.+\(.*\)\s*{/gi.test(r)&&/^\s*(function|if|for|while)?\s*$/g.test(r.substr(0,t.character))||/^(\s*[\sa-zA-Z_-]*\([\sa-zA-Z_-]*\)\s*{\s*)|(\s*[\sa-zA-Z:_-]*\s*{\s*)$/gi.test(r)&&/^\s*(function|if|for|while)?\s*$/g.test(r.substr(0,t.character))?this.selectJsBlock(e,r,new k.Position(t.line,r.length-r.replace(/\s*/,"").length),"function"):this.selectLineBlock(e,r,t)}selectJsBlock(e,t,s,r){let o=e.document.lineCount,a=s.line,l=0,n="{",d="}";for(r==="array"&&(n="[",d="]");a<=o;){let c=0;for(;(t.indexOf(n,c)!==-1||t.indexOf(d,c)!==-1)&&c<t.length;){let p=-1;if(t.indexOf(n,c)!==-1&&(p=t.indexOf(n,c)),t.indexOf(d,c)!==-1?p===-1||p>t.indexOf(d,c)?(--l,c=t.indexOf(d,c)+1):(++l,c=p+1):p!==-1&&(++l,c=p+1),l===0)break}if(l===0){let p=0,u=e.document.lineAt(a).text;a===s.line&&(p=u.indexOf(t)),r==="function"&&u[c+p-1]==="}"&&u[c+p]===")"&&(p+=1),e.selection=new k.Selection(s,new k.Position(a,c+p));return}++a,o>=a&&(t=e.document.lineAt(a).text)}}selectHtmlBlock(e,t,s){let r="[a-zA-Z_][\\w\\-\\.]*",o="((?:"+r+"\\:)?"+r+")",a=new RegExp("^<"+o),l=new RegExp("^(<\\/"+o+"[^>]*>)"),n=/^<!--/,d="-->",c=e.document.lineCount,p=s.line,u=!1,h=null,b=t.indexOf(t.trim())+s.character,g=new k.Position(s.line,s.character+t.length-t.replace(/\s*(.*)/,"$1").length);t=t.trim();let x=["input","img"];for(;t;){let y=t.indexOf("<");if(y===0){let C=!1,j=!1;if(n.test(t)){let D=t.indexOf(d);for(;D===-1&&p<c;)t=e.document.lineAt(++p).text,D=t.indexOf(d);t=t.substr(D+3,t.length)}let T=t.match(l);if(T){if(C=!0,Array.isArray(h)){let S=h.length;if(S>0){let ee=!1;for(;S>0&&!ee;)h[S-1]===T[2]&&(ee=!0),h.pop(),--S}}let D=t.indexOf(T[1])+T[1].length;b+=D,t=t.substr(D,t.length)}if(Array.isArray(h)&&h.length===0){e.selection=new k.Selection(g,new k.Position(p,b));break}let _=t.match(a);if(_){if(j=!0,u){t=e.document.lineAt(p).text.substr(0,b);let ee=t.lastIndexOf(">");for(;ee===-1&&p>0;)--p,t=e.document.lineAt(p).text,ee=t.lastIndexOf(">");e.selection=new k.Selection(g,new k.Position(p,ee+2));break}Array.isArray(h)?h.push(_[1]):(h=[_[1]],x.indexOf(_[1])!==-1&&(u=!0));let D=t.indexOf(_[1])+_[1].length;b+=D,t=t.substr(D,t.length)}if(t.indexOf("/>")!==-1&&Array.isArray(h)&&h.length===1){let D=t.indexOf("/>"),S=t.substr(0,D+2);/<([\w-]+)(\s*|(\s+[\w-_:@\.]+(=("[^"]*"|'[^']*'))?)+)\s*(\/)?>/gim.test(S)||h.pop(),e.selection=new k.Selection(g,new k.Position(p,b+D+2));break}if(!t&&p<c&&h.length>0){do++p,t=e.document.lineAt(p).text;while(!t&&p<c);b=t.indexOf(t.trim()),t=t.trim();continue}if(!j&&!C&&t.length>0){let D=t.indexOf(t,1);if(D===-1)if(p<c){do++p,t=e.document.lineAt(p).text;while(!t&&p<c);b=t.indexOf(t.trim()),t=t.trim()}else break;else t=t.substr(D,t.length)}}else if(y>0)t=t.substr(y,t.length),b+=y;else if(y<0)if(p<c){if(t.indexOf("/>")!==-1&&Array.isArray(h)&&h.length>0){let C=t.indexOf("/>"),j=t.substr(0,C+2);if(/<([\w-]+)(\s*|(\s+[\w-_:@\.]+(=("[^"]*"|'[^']*'))?)+)\s*(\/)?>/gim.test(j)||h.pop(),h.length===0){e.selection=new k.Selection(g,new k.Position(p,b+C+2));break}}do++p,t=e.document.lineAt(p).text,t.replace(/\s/gi,"")===""&&(t="");while(!t&&p<c);b=t.indexOf(t.trim()),t=t.trim()}else t=""}}selectLineBlock(e,t,s){let r=['"',"'","(","{","["," ","`",">"],o={'"':'"',"'":"'","(":")","{":"}","[":"]"," ":" ","`":"`",">":"<"},a=s.character-1,l="",n=0,d=0,c=[],p=!1;for(n=a;a>=0;){if(r.indexOf(t[a])!==-1){l=t[a];break}--a}if(n===a?(p=!0,n=a):n=a+1,l.length>0)if(a=s.character,l===">")for(;a<=t.length&&a>=0;){let u=t[a];if((u===o[l]||u===">")&&a>n)break;++a}else for(;a<=t.length&&a>=0;){let u=t[a];if(c.length===0&&(u===o[l]||u===">")&&a>n)break;c.length>0&&o[c[c.length-1]]===u?c.pop():r.indexOf(u)!==-1&&u!==" "&&c.push(u),++a}p?d=a+1:d=a,e.selection=new k.Selection(new k.Position(s.line,n),new k.Position(s.line,d))}};gt.default=ss});Object.defineProperty(exports,"__esModule",{value:!0});exports.activate=void 0;var yn=require("vscode"),wn=ls(),$n=Br(),xn=qr();function kn(i){yn.workspace.workspaceFolders&&Fn(i)}exports.activate=kn;function Fn(i){let e=new wn.default(i);new $n.default(e).register(),new xn.default(e).register()}
