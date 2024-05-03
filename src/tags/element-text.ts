export default {
  "el-row": `<el-row>
  <el-col :span=""></el-col>
</el-row>`,
  "el-col": `<el-col :span="$1"></el-col>`,
  "el-container": `<el-container>
	<el-header>$1</el-header>
	<el-main>$2</el-main>
</el-container>`,
  "el-header": `<el-header>$1</el-header>`,
  "el-aside": `<el-aside>$1</el-aside>`,
  "el-footer": `<el-footer>$1</el-footer>`,
  "el-icon": `<i class=""></i>`,
  "el-button-group": `<el-button-group>
	<el-button type="primary">$1</el-button>
	<el-button type="primary">$2</el-button>
</el-button-group>`,
  "el-button": `<el-button type="primary">$1</el-button>`,
  "el-link": `<el-link type="$1"></el-link>`,
  "el-radio": `<el-radio v-model="radio" label="\${1:label}">$2</el-radio>`,
  "el-radio-group": `<el-radio-group v-model="\${1:model}">
	<el-radio :label="\${2:label}">$3</el-radio>
</el-radio-group>`,
  "el-radio-button": `<el-radio-button label="\${1:label}"></el-radio-button>`,
  "el-checkbox": `<el-checkbox v-model="$1" >$2</el-checkbox>`,
  "el-checkbox-group": `<el-checkbox-group v-model="$1">
	<el-checkbox :label="\${2:label}" :key="\${3:key}">$3</el-checkbox>
</el-checkbox-group>`,
  "el-checkbox-button": `<el-checkbox-button :label="$1" :key="$2" >$3</el-checkbox-button>`,
  "el-input": `<el-input v-model="$1" placeholder="请输入内容"></el-input>`,
  "el-autocomplete": `<el-autocomplete
v-model="state1"
:fetch-suggestions="querySearch"
placeholder="请输入内容"
@select="handleSelect"
></el-autocomplete>`,
  "el-input-number": `<el-input-number v-model="$1" @change="\${2:inputChange}" :min="\${3:1}" :max="\${4:10}" label="\${5:label}"></el-input-number>`,
  "el-select": `<el-select v-model="model" placeholder="">
	<el-option
		v-for="item in options"
		:key="item.value"
		:label="item.label"
		:value="item.value">
	</el-option>
</el-select>`,
  "el-option-group": `<el-select v-model="$1" placeholder="请选择">
	<el-option-group
	v-for="group in options"
	:key="group.label"
	:label="group.label">
		<el-option
		v-for="item in group.options"
		:key="item.value"
		:label="item.label"
		:value="item.value">
		</el-option>
	</el-option-group>
</el-select>`,
  "el-option": `<el-option :label="$1" :value="$2"></el-option>`,
  "el-cascader": `<el-cascader
	v-model="$1"
	:options="options"
	@change="handleChange">
</el-cascader>`,
  "el-cascader-panel": `<el-cascader-panel :options="options"></el-cascader-panel>`,
  "el-switch": `<el-switch v-model="\${1:model}" active-color="\${2:#13ce66}" inactive-color="\${3:#ff4949}"></el-switch>`,
  "el-slider": `<el-slider v-model="\${1:30}"></el-slider>`,
  "el-time-select": `<el-time-select
	v-model="$1"
	:picker-options="\${2:{start: '08:30',step: '00:15',end: '18:30'}}"
	placeholder="$3">
</el-time-select>`,
  "el-time-picker": `<el-time-picker
	v-model="$1"
	:picker-options="\${2:{ selectableRange: '18:30:00 - 20:30:00' }}"
	placeholder="$3">
</el-time-picker>`,
  "el-date-picker": `<el-date-picker v-model="$1" type="datetime" placeholder="\${2:datetime}"></el-date-picker>`,
  "el-date-picker:range": `<el-date-picker v-model="$1" type="datetime" placeholder="\${2:datetime}"></el-date-picker>`,
  "el-upload": `handleRemove(file, fileList) {
	},
	handlePreview(file) {
	},
	handleExceed(files, fileList) {
	},
	beforeRemove(file, fileList) {
		return this.$confirm('确定移除' + file.name);
}`,
  "el-upload:avatar": `handleRemove(file, fileList) {
	},
	handlePreview(file) {
	},
	handleExceed(files, fileList) {
	},
	beforeRemove(file, fileList) {
		return this.$confirm('确定移除' + file.name);
}`,
  "el-rate": `<el-rate
	v-model="3.7"
	disabled
	show-score
	text-color="#ff9900"
	score-template="{value}">
</el-rate>`,
  "el-color-picker": `<el-color-picker v-model="\${1:color}"></el-color-picker>`,
  "el-transfer": `<el-transfer
	v-model="$1"
	:data="$2">
	filterable
	:filter-method=""
	filter-placeholder="">
</el-transfer>`,
  "el-transfer:search": `<el-transfer
	v-model="$1"
	:data="$2">
	filterable
	:filter-method=""
	filter-placeholder="">
</el-transfer>`,
  "el-form": `<el-form :inline="true" :model="\${2:form}" label-width="\${3:80px}">
	$4
</el-form>`,
  "el-form-item": `<el-form-item label="\${1:label}">
<el-input type="textarea" v-model="\${2:model}"></el-input>
</el-form-item>`,
  "el-table": `<el-table
	:data="\${1:data}"
	style="width: 100%">
	<el-table-column
		prop="\${2:prop}"
		label="\${3:label}"
		width="\${4:width}">
	</el-table-column>
</el-table>`,
  "el-table-column": `<el-table-column
		prop="\${2:prop}"
		label="\${3:label}"
		width="\${4:width}">
	</el-table-column>`,
  "el-tag": `<el-tag closable type="\${1:success}">$2</el-tag>`,
  "el-progress": `<el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>`,
  "el-tree": `<el-tree
	show-checkbox
	:data="$1"
	:props="$2"
	@node-click="$3">
</el-tree>`,
  "el-avatar": `<el-avatar>$1</el-avatar>`,
  "el-skeleton": `<el-skeleton>$1</el-skeleton>`,
  "el-skeleton-item": `<el-skeleton-item>$1</el-skeleton-item>`,
  "el-empty": `<el-empty description="$1">$2</el-empty>`,
  "el-descriptions": `<el-descriptions title="$1">
	<el-descriptions-item label="$2">$3</el-descriptions-item>
</el-descriptions>`,
  "el-descriptions-item": `<el-descriptions-item label="$1"></el-descriptions-item>`,
  "el-tab-pane": `<el-tab-pane label="$1" name="$2">$3</el-tab-pane>`,
  "el-breadcrumb-item": `<el-breadcrumb-item></el-breadcrumb-item>`,
  "el-page-header": `<el-page-header @back="$1" content="$2"></el-page-header>`,
  "el-dropdown-menu": `<el-dropdown-menu></el-dropdown-menu>`,
  "el-dropdown-item": `<el-dropdown-item></el-dropdown-item>`,
  "el-step": `<el-step title="$1"></el-step>`,
  "el-carousel-item": `<el-carousel-item></el-carousel-item>`,
  "el-collapse-item": `<el-collapse-item title="$1" name="$2"></el-collapse-item>`,
  "el-timeline-item": `<el-timeline-item timestamp="$1" placement="$2"></el-timeline-item>`,
  "el-divider": `<el-divider></el-divider>`,
  "el-calendar": `<el-calendar v-model="\${1:value}"></el-calendar>`,
  "el-image": `<el-image
	style="\${1:width: 100px; height: 100px}"
	:src="\${2:url}"
	:fit="\${3:fit}">$4</el-image>`,
  "el-backtop": `<el-backtop target="\${1:.page-component__scroll .el-scrollbar__wrap}">$2</el-backtop>`,
  "el-alert": `<el-alert
	title="success"
	type="success"
	show-icon>
</el-alert>`,
  "el-alert:icon": `<el-alert
	title="success"
	type="success"
	show-icon>
</el-alert>`,
  "el-badge": `<el-badge is-dot>$1</el-badge>`,
  "el-badge:button": `<el-badge is-dot>$1</el-badge>`,
  "el-badge:dot": `<el-badge is-dot>$1</el-badge>`,
  "el-breadcrumb": `<el-breadcrumb separator="/">
	<el-breadcrumb-item :to="{ path: '/' }"></el-breadcrumb-item>
	<el-breadcrumb-item></el-breadcrumb-item>
</el-breadcrumb>`,
  "el-card": `<el-card>
	<div slot="header">$1</div>
	<div></div>
</el-card>`,
  "el-carousel": `<el-carousel type="card" height="150px">
	<el-carousel-item>
		$1
	</el-carousel-item>
</el-carousel>`,
  "el-carousel:card": `<el-carousel type="card" height="150px">
	<el-carousel-item>
		$1
	</el-carousel-item>
</el-carousel>`,
  "el-collapse": `<el-collapse v-model="\${1:activeName}" @change="\${2:collapseChange}">
	<el-collapse-item title="\${3:title}" name="\${4:name}">
		<div>$5</div>
	</el-collapse-item>
</el-collapse>`,
  "el-date-picker:datetime": `<el-date-picker v-model="$1" type="datetime" placeholder="\${2:datetime}"></el-date-picker>`,
  "el-dialog": `<el-dialog
	title=""
:visible.sync="\${1:visible}"
	width="\${2:width}">
	<el-form :model="form">
		<el-form-item label="" :label-width="">
			<el-input v-model=""></el-input>
		</el-form-item>
	</el-form>
	<template slot="footer">
		<el-button @click="visible = false">取 消</el-button>
		<el-button type="primary" @click="visible = false">确 定</el-button>
	</template>
</el-dialog>`,
  "el-dialog:form": `<el-dialog
	title=""
	v-model="\${1:visible}"
	width="\${2:width}">
	<el-form :model="form" :label-width="">
		<el-form-item label="">
			<el-input v-model=""></el-input>
		</el-form-item>
	</el-form>
	<template #footer>
		<el-button @click="visible = false">取 消</el-button>
		<el-button type="primary" @click="visible = false">确 定</el-button>
	</template>
</el-dialog>`,
  "el-dropdown": `<el-dropdown>
	<span class="el-dropdown-link">
		Dropdown List
		<el-icon class="el-icon--right">
			<arrow-down />
		</el-icon>
	</span>
	<template #dropdown>
		<el-dropdown-menu>
			<el-dropdown-item>Action 1</el-dropdown-item>
		</el-dropdown-menu>
	</template>
</el-dropdown>`,
  "el-form:inline": `<el-form :inline="true" :model="\${2:form}" label-width="\${3:80px}">
	$4
</el-form>`,
  "el-form-item:input": `<el-form-item label="\${1:label}">
<el-input type="textarea" v-model="\${2:model}"></el-input>
</el-form-item>`,
  "el-form-item:checkbox": `<el-form-item label="\${1:label}">
<el-input type="textarea" v-model="\${2:model}"></el-input>
</el-form-item>`,
  "el-form-item:radio": `<el-form-item label="\${1:label}">
<el-input type="textarea" v-model="\${2:model}"></el-input>
</el-form-item>`,
  "el-form-item:select": `<el-form-item label="\${1:label}">
<el-input type="textarea" v-model="\${2:model}"></el-input>
</el-form-item>`,
  "el-form-item:switch": `<el-form-item label="\${1:label}">
<el-input type="textarea" v-model="\${2:model}"></el-input>
</el-form-item>`,
  "el-form-item:textarea": `<el-form-item label="\${1:label}">
<el-input type="textarea" v-model="\${2:model}"></el-input>
</el-form-item>`,
  "el-input:textarea": `<el-input v-model="$1" placeholder="\${2:请输入}" :suffix-icon="Search" @change="\${3:query}"></el-input>`,
  "el-input:search": `<el-input v-model="$1" placeholder="\${2:请输入}" :suffix-icon="Search" @change="\${3:query}"></el-input>`,
  "el-menu": `<el-menu :default-active="\${1:activeIndex}" mode="horizontal" @select="handleSelect">
	<el-menu-item index="1"></el-menu-item>
	<el-submenu index="2">
		<template slot="title"></template>
		<el-menu-item index="2-1"></el-menu-item>
	</el-submenu>
</el-menu>`,
  "el-menu:submenu": `<el-menu :default-active="\${1:activeIndex}" mode="horizontal" @select="handleSelect">
	<el-menu-item index="1"></el-menu-item>
	<el-submenu index="2">
		<template slot="title"></template>
		<el-menu-item index="2-1"></el-menu-item>
	</el-submenu>
</el-menu>`,
  "el-pagination": `<el-pagination
	@size-change="handleSizeChange"
	@current-change="handleCurrentChange"
	:current-page="pageNum"
	:page-sizes="[10, 20, 50]"
	:page-size="pageSize"
	layout="total, sizes, prev, pager, next, jumper"
	:total="totalCount">
</el-pagination>`,
  "el-pagination:full": `<el-pagination
	@size-change="handleSizeChange"
	@current-change="handleCurrentChange"
	:current-page="pageNum"
	:page-sizes="[10, 20, 50]"
	:page-size="pageSize"
	layout="total, sizes, prev, pager, next, jumper"
	:total="totalCount">
</el-pagination>`,
  "el-popover": `<el-popover
	ref="popover4"
	placement="right"
	width="400"
	trigger="click">
	<div></div>
</el-popover>`,
  "el-popover:insert": `<el-popover
	ref="popover4"
	placement="right"
	width="400"
	trigger="click">
	<div></div>
</el-popover>`,
  "el-progress:circle": `<el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>`,
  "el-progress:inside": `<el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>`,
  "el-rate:color": `<el-rate
	v-model="3.7"
	disabled
	show-score
	text-color="#ff9900"
	score-template="{value}">
</el-rate>`,
  "el-rate:half": `<el-rate
	v-model="3.7"
	disabled
	show-score
	text-color="#ff9900"
	score-template="{value}">
</el-rate>`,
  "el-steps": `<el-steps :active="active" finish-status="success">
	<el-step title="step1" icon="el-icon-edit"></el-step>
</el-steps>`,
  "el-steps:simple": `<el-steps :active="active" finish-status="success">
	<el-step title="step1" icon="el-icon-edit"></el-step>
</el-steps>`,
  "el-steps:icon": `<el-steps :active="active" finish-status="success">
	<el-step title="step1" icon="el-icon-edit"></el-step>
</el-steps>`,
  "el-tabs": `<el-tabs type="card" v-model="\${1:activeTab}" @tab-click="\${2:clickTab}">
	<el-tab-pane label="\${3:label}" name="\${4:name}">$5</el-tab-pane>
</el-tabs>`,
  "el-tabs:card": `<el-tabs type="card" v-model="\${1:activeTab}" @tab-click="\${2:clickTab}">
	<el-tab-pane label="\${3:label}" name="\${4:name}">$5</el-tab-pane>
</el-tabs>`,
  "el-table-column:left": `<template #default="scope">
	{{scope.row.status}}
</template>`,
  "el-table-column:slot": `<template #default="scope">
	{{scope.row.status}}
</template>`,
  "el-tag:close": `<el-tag closable type="\${1:success}">$2</el-tag>`,
  "el-tooltip": `<el-tooltip effect="dark" content="$1" placement="\${2:top}">
<div slot="content">$3</div>
	<el-button>$4</el-button>
</el-tooltip>`,
  "el-tooltip:content": `<el-tooltip effect="dark" content="$1" placement="\${2:top}">
<div slot="content">$3</div>
	<el-button>$4</el-button>
</el-tooltip>`,
  "el-tree:select": `<el-tree
	show-checkbox
	:data="$1"
	:props="$2"
	@node-click="$3">
</el-tree>`,
  "el-timeline": `<el-timeline :reverse="reverse">
	<el-timeline-item
		v-for="(activity, index) in activities"
		:key="index"
		:timestamp="activity.timestamp">
		{{activity.content}}
	</el-timeline-item>
</el-timeline>`,
  "el-infinite-scroll": `<ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
	<li v-for="i in count" class="infinite-list-item">{{ i }}</li>
</ul>`,
  "el-drawer": `<el-drawer
	title="\${1:我是标题}"
	:visible.sync="\${2:drawer}"
	:direction="\${3:direction}"
	:before-close="\${4:handleClose}">
	\${5:<span>我来啦!</span>}
</el-drawer>`,
  "el-popconfirm": `<el-popconfirm confirm-button-text="确定" cancel-button-text="取消" title="确定删除?" icon="" @confirm="confirm" @cancel="cancel">
	<el-button slot="reference" type="text" size="small">删除</el-button>
</el-popconfirm>`,
  "el-tree-select": `<el-tree-select v-model="$1" :data="$2" />`
}
