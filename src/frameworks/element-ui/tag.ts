export default (tabSize: string) => {
  return {
"el-col": `<el-col :span="$1">$2</el-col>`,
"el-checkbox": `<el-checkbox label="$1">$2</el-checkbox>`,
"el-checkbox-group": `<el-checkbox-group v-model="$1">
${tabSize}<el-checkbox label="$2">$3</el-checkbox>
</el-checkbox-group>`,
"el-checkbox-button": `<el-checkbox-button label="$1">$2</el-checkbox-button>`,
"el-input": `<el-input v-model="$1" placeholder="$2">$3</el-input>`,
"el-option": `<el-option :label="$1" :value="$2">$3</el-option>`,
"el-option-group": `<el-option-group v-for="$1" :key="$2">
<el-option :label="$3" :value="$4"></el-option>$5
</el-option-group>`,
"el-cascader": `<el-cascader :options="$1" v-model="$2">$3</el-cascader>`,
"el-color-picker": `<el-color-picker v-model="$1">$2</el-color-picker>`,
"el-form-item": `<el-form-item label="$1">$2</el-form-item>`,
"el-alert": `<el-alert type="$1" title="$2">$3</el-alert>`,
"el-submenu": `<el-submenu index="$1">
${tabSize}<el-menu-item index="$2">$3</el-menu-item>$4
</el-submenu>`,
"el-menu-item-group": `<el-menu-item-group>
${tabSize}<el-menu-item index="$1">$2</el-menu-item>$3
</el-menu-item-group>`,
"el-menu-item": `<el-menu-item index=""></el-menu-item>`,
"el-tab-pane": `<el-tab-pane>$1</el-tab-pane>`,
"el-breadcrumb-item":`<el-breadcrumb-item></el-breadcrumb-item>`,
"el-dropdown-menu": `<el-dropdown-menu></el-dropdown-menu>`,
"el-step": `<el-step title="$1">$2</el-step>`,
"el-carousel": `<el-carousel>
${tabSize}<el-carousel-item>$1</el-carousel-item>
</el-carousel>`,
"el-carousel-item": `<el-carousel-item>$1</el-carousel-item>`,
"el-collapse-item": `<el-collapse-item name="$1" title="$2">$3</el-collapse-item>`,
"el-timeline-item": `<el-timeline-item>$1</el-timeline-item>`,
"el-divider": `<el-divider>$1</el-divider>`,
"el-alert:icon": `<el-alert
${tabSize}title="success"
${tabSize}type="success"
${tabSize}show-icon>
</el-alert>`,
"el-autocomplete": `<el-autocomplete v-model="$1" placeholder="" :fetch-suggestions="fetchSuggestions" @select="handleSelect">
</el-autocomplete>`,
"el-badge": `<el-badge :value="$1"/>`,
"el-badge:button": `<el-badge :value="$1">
${tabSize}<el-button size="small">$2</el-button>
</el-badge>`,
"el-badge:dot": `<el-badge is-dot>$1</el-badge>`,
"el-breadcrumb": `<el-breadcrumb separator="/">
${tabSize}<el-breadcrumb-item :to="{ path: '/' }"></el-breadcrumb-item>
${tabSize}<el-breadcrumb-item></el-breadcrumb-item>
</el-breadcrumb>`,
"el-button": `<el-button type="primary">$1</el-button>`,
"el-button-group": `<el-button-group>
${tabSize}<el-button type="primary">$1</el-button>
${tabSize}<el-button type="primary">$2</el-button>
</el-button-group>`,
"el-card": `<el-card>
${tabSize}<div slot="header">$1</div>
${tabSize}<div></div>
</el-card>`,
"el-carousel:card": `<el-carousel type="card" height="150px">
${tabSize}<el-carousel-item>
${tabSize}${tabSize}$1
${tabSize}</el-carousel-item>
</el-carousel>`,
"el-cascadar": `<el-cascader
${tabSize}:options="$1"
${tabSize}v-model="$2"
${tabSize}@change="$3">
</el-cascader>`,
"el-collapse": `<el-collapse v-model="\${1:activeName}" @change="\${2:collapseChange}">
${tabSize}<el-collapse-item title="\${3:title}" name="\${4:name}">
${tabSize}${tabSize}<div>$5</div>
${tabSize}</el-collapse-item>
</el-collapse>`,
"el-date-picker": `<el-date-picker v-model="$1" type="date" placeholder="\${2:date}"></el-date-picker>`,
"el-date-picker:datetime": `<el-date-picker v-model="$1" type="datetime" placeholder="\${2:datetime}"></el-date-picker>`,
"el-dialog": `<el-dialog
${tabSize}title=""
${tabSize}:visible.sync="\${1:dialogVisible}"
${tabSize}width="\${2:width}"
${tabSize}:before-close="\${3:dialogBeforeClose}">
${tabSize}<div>$4</div>
${tabSize}<div slot="footer">
${tabSize}${tabSize}<el-button @click="dialogVisible = false">取 消</el-button>
${tabSize}${tabSize}<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
${tabSize}</div>
</el-dialog>`,
"el-dialog:form": `<el-dialog
${tabSize}title=""
${tabSize}:visible.sync="\${1:dialogVisible}"
${tabSize}width="\${2:width}"
${tabSize}:before-close="\${3:dialogBeforeClose}">
${tabSize}<el-form :model="form">
${tabSize}${tabSize}<el-form-item label="" :label-width="">
${tabSize}${tabSize}${tabSize}<el-input v-model=""></el-input>
${tabSize}${tabSize}</el-form-item>
${tabSize}</el-form>
${tabSize}<div slot="footer">
${tabSize}${tabSize}<el-button @click="dialogVisible = false">取 消</el-button>
${tabSize}${tabSize}<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
${tabSize}</div>
</el-dialog>`,
"el-dropdown": `<el-dropdown>
${tabSize}<el-button type="primary">
${tabSize}${tabSize}下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
${tabSize}</el-button>
${tabSize}<el-dropdown-menu slot="dropdown">
${tabSize}${tabSize}<el-dropdown-item>黄金糕</el-dropdown-item>
${tabSize}</el-dropdown-menu>
</el-dropdown>`,
"el-form": `<el-form ref="\${1:form}" :model="\${2:form}" label-width="\${3:80px}">
${tabSize}$4
</el-form>`,
"el-form:inline": `<el-form :inline="true" ref="\${1:form}" :model="\${2:form}" label-width="\${3:80px}">
${tabSize}$4
</el-form>`,
"el-form-item:input": `<el-form-item label="\${1:label}">
${tabSize}<el-input v-model="\${2:model}"></el-input>
</el-form-item>`,
"el-form-item:checkbox": `<el-form-item label="\${1:label}">
${tabSize}<el-checkbox-group v-model="\${2:model}">
${tabSize}${tabSize}<el-checkbox label="\${3:label}" name="\${4:name}"></el-checkbox>
${tabSize}</el-checkbox-group>
</el-form-item>`,
"el-form-item:radio": `<el-form-item label="\${1:label}">
${tabSize}<el-radio-group v-model="\${2:model}">
${tabSize}${tabSize}<el-radio label="\${3:label}"></el-radio>
${tabSize}</el-radio-group>
</el-form-item>`,
"el-form-item:select": `<el-form-item label="\${1:label}">
${tabSize}<el-select v-model="\${2:model}" placeholder="\${3:placeholder}">
${tabSize}${tabSize}<el-option label="\${4:label}" value="\${5:value}"></el-option>
${tabSize}</el-select>
</el-form-item>`,
"el-form-item:switch": `<el-form-item label="\${1:label}">
<el-switch v-model="\${2:model}"></el-switch>
</el-form-item>`,
"el-form-item:textarea": `<el-form-item label="\${1:label}">
<el-input type="textarea" v-model="\${2:model}"></el-input>
</el-form-item>`,
"el-input-number": `<el-input-number v-model="$1" @change="\${2:inputChange}" :min="\${3:1}" :max="\${4:10}" label="\${5:label}"></el-input-number>`,
"el-input:textarea": `<el-input type="textarea" v-model="$1" placeholder="$2"></el-input>`,
"el-menu": `<el-menu :default-active="\${1:activeIndex}" mode="horizontal" @select="\${2:menuSelect}">
${tabSize}<el-menu-item index="\${3:index}">$4</el-menu-item>
</el-menu>`,
"el-menu:submenu": `<el-menu :default-active="\${1:activeIndex}" mode="horizontal" @select="handleSelect">
${tabSize}<el-menu-item index="1"></el-menu-item>
${tabSize}<el-submenu index="2">
${tabSize}${tabSize}<template slot="title"></template>
${tabSize}${tabSize}<el-menu-item index="2-1"></el-menu-item>
${tabSize}</el-submenu>
</el-menu>`,
"el-pagination": `<el-pagination
${tabSize}layout="prev, pager, next"
${tabSize}:total="50">
</el-pagination>`,
"el-pagination:full": `<el-pagination
${tabSize}@size-change="handleSizeChange"
${tabSize}@current-change="handleCurrentChange"
${tabSize}:current-page="pageNum"
${tabSize}:page-sizes="[10, 20, 50]"
${tabSize}:page-size="pageSize"
${tabSize}layout="total, sizes, prev, pager, next, jumper"
${tabSize}:total="totalCount">
</el-pagination>`,
"el-popover": `<el-popover
${tabSize}ref="popover1"
${tabSize}placement="top-start"
${tabSize}title="标题"
${tabSize}width="200"
${tabSize}trigger="hover"
${tabSize}content="这是一段内容">
</el-popover>`,
"el-popover:insert": `<el-popover
${tabSize}ref="popover4"
${tabSize}placement="right"
${tabSize}width="400"
${tabSize}trigger="click">
${tabSize}<div></div>
</el-popover>`,
"el-progress": `<el-progress :percentage="\${1:30}"></el-progress>`,
"el-progress:circle": `<el-progress type="circle" :percentage="\${1:30}"></el-progress>`,
"el-progress:inside": `<el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>`,
"el-radio": `<el-radio v-model="radio" label="\${1:label}">$2</el-radio>`,
"el-radio-button": `<el-radio-button label="\${1:label}"></el-radio-button>`,
"el-radio-group": `<el-radio-group v-model="\${1:model}">
${tabSize}<el-radio :label="\${2:label}">$3</el-radio>
</el-radio-group>`,
"el-rate": `<el-rate v-model="$1"></el-rate>`,
"el-rate:color": `<el-rate
${tabSize}v-model="\${1:model}"
${tabSize}:colors="['#99A9BF', '#F7BA2A', '#FF9900']">
</el-rate>`,
"el-rate:half": `<el-rate
${tabSize}v-model="3.7"
${tabSize}disabled
${tabSize}show-score
${tabSize}text-color="#ff9900"
${tabSize}score-template="{value}">
</el-rate>`,
"el-row": `<el-row :gutter="\${1:10}">
${tabSize}<el-col :span="\${2:6}">$3</el-col>
</el-row>`,
"el-select": `<el-select v-model="model" placeholder="">
${tabSize}<el-option
${tabSize}${tabSize}v-for="item in options"
${tabSize}${tabSize}:key="item.value"
${tabSize}${tabSize}:label="item.label"
${tabSize}${tabSize}:value="item.value">
${tabSize}</el-option>
</el-select>`,
"el-slider": `<el-slider v-model="\${1:30}"></el-slider>`,
"el-steps": `<el-steps :active="active" finish-status="success">
${tabSize}<el-step title="step1"></el-step>
</el-steps>`,
"el-steps:simple": `<el-steps simple>
${tabSize}<el-step title="step1"></el-step>
</el-steps>`,
"el-steps:icon": `<el-steps :active="active" finish-status="success">
${tabSize}<el-step title="step1" icon="el-icon-edit"></el-step>
</el-steps>`,
"el-switch": `<el-switch v-model="\${1:model}" active-color="\${2:#13ce66}" inactive-color="\${3:#ff4949}"></el-switch>`,
"el-tabs": `<el-tabs v-model="\${1:activeName}" @tab-click="\${2:handleClick}">
${tabSize}<el-tab-pane label="\${3:label}" name="\${4:name}">$5</el-tab-pane>
</el-tabs>`,
"el-tabs:card": `<el-tabs type="card" v-model="\${1:activeName}" @tab-click="\${2:handleClick}">
${tabSize}<el-tab-pane label="\${3:label}" name="\${4:name}">$5</el-tab-pane>
</el-tabs>`,
"el-table": `<el-table
${tabSize}:data="\${1:data}"
${tabSize}style="width: 100%">
${tabSize}<el-table-column
${tabSize}${tabSize}prop="\${2:prop}"
${tabSize}${tabSize}label="\${3:label}"
${tabSize}${tabSize}width="\${4:width}">
${tabSize}</el-table-column>
</el-table>`,
"el-table-column": `<el-table-column
${tabSize}header-align="center"
${tabSize}align="center"
${tabSize}prop="\${1:prop}"
${tabSize}label="\${2:label}" >
</el-table-column>`,
"el-table-column:left": `<el-table-column
${tabSize}header-align="left"
${tabSize}align="left"
${tabSize}prop="\${1:prop}"
${tabSize}label="\${2:label}" >
</el-table-column>`,
"el-table-column:slot": `<template slot-scope="scope">
${tabSize}{{scope.row.status}}
</template>`,
"el-tag": `<el-tag type="\${1:success}">$2</el-tag>`,
"el-tag:close": `<el-tag closable type="\${1:success}">$2</el-tag>`,
"el-time-picker": `<el-time-picker
${tabSize}v-model="$1"
${tabSize}:picker-options="\${2:{ selectableRange: '18:30:00 - 20:30:00' }}"
${tabSize}placeholder="$3">
</el-time-picker>`,
"el-time-select": `<el-time-select
${tabSize}v-model="$1"
${tabSize}:picker-options="\${2:{start: '08:30',step: '00:15',end: '18:30'}}"
${tabSize}placeholder="$3">
</el-time-select>`,
"el-tooltip": `<el-tooltip effect="dark" content="$1" placement="\${2:top}">
${tabSize}<el-button>$3</el-button>
</el-tooltip>`,
"el-tooltip:content": `<el-tooltip effect="dark" content="$1" placement="\${2:top}">
<div slot="content">$3</div>
${tabSize}<el-button>$4</el-button>
</el-tooltip>`,
"el-transfer": `<el-transfer
${tabSize}v-model="$1"
${tabSize}:data="$2">
</el-transfer>`,
"el-transfer:search": `<el-transfer
${tabSize}v-model="$1"
${tabSize}:data="$2">
${tabSize}filterable
${tabSize}:filter-method=""
${tabSize}filter-placeholder="">
</el-transfer>`,
"el-tree": `<el-tree
${tabSize}:data="$1"
${tabSize}:props="$2"
${tabSize}@node-click="$3">
</el-tree>`,
"el-tree:select": `<el-tree
${tabSize}show-checkbox
${tabSize}:data="$1"
${tabSize}:props="$2"
${tabSize}@node-click="$3">
</el-tree>`,
"el-upload": `<el-upload
${tabSize}action=""
${tabSize}:on-preview=""
${tabSize}:on-remove=""
${tabSize}:before-remove=""
${tabSize}multiple
${tabSize}:limit="3"
${tabSize}:on-exceed=""
${tabSize}:file-list="[{name: 'name', url: 'url'}]">
${tabSize}<el-button size="small" type="primary">点击上传</el-button>
${tabSize}<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>`,
"el-upload:avatar": `<el-upload
${tabSize}action=""
${tabSize}:show-file-list="false"
${tabSize}:on-success=""
${tabSize}:before-upload="">
${tabSize}<img v-if="imageUrl" :src="imageUrl">
${tabSize}<i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>`,
"el-timeline": `<el-timeline :reverse="reverse">
${tabSize}<el-timeline-item
${tabSize}${tabSize}v-for="(activity, index) in activities"
${tabSize}${tabSize}:key="index"
${tabSize}${tabSize}:timestamp="activity.timestamp">
${tabSize}${tabSize}{{activity.content}}
${tabSize}</el-timeline-item>
</el-timeline>`,
"el-calendar": `<el-calendar v-model="\${1:value}"></el-calendar>`,
"el-image": `<el-image
${tabSize}style="\${1:width: 100px; height: 100px}"
${tabSize}:src="\${2:url}"
${tabSize}:fit="\${3:fit}">$4</el-image>`,
"el-backtop": `<el-backtop target="\${1:.page-component__scroll .el-scrollbar__wrap}">$2</el-backtop>`,
"el-infinite-scroll": `<ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
${tabSize}<li v-for="i in count" class="infinite-list-item">{{ i }}</li>
</ul>`,
"el-drawer": `<el-drawer
${tabSize}title="\${1:我是标题}"
${tabSize}:visible.sync="\${2:drawer}"
${tabSize}:direction="\${3:direction}"
${tabSize}:before-close="\${4:handleClose}">
${tabSize}\${5:<span>我来啦!</span>}
</el-drawer>`
  }
}