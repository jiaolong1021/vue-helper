import { l10n } from "vscode"

export default (tabSize: string) => {
  return {
"a-button": `<a-button type="primary">$1</a-button>`,
"a-button:dashed": `<a-button type="dashed">$1</a-button>`,
"a-button:text": `<a-button type="text">$1</a-button>`,
"a-button:link": `<a-button type="link">$1</a-button>`,
"a-buttno:circle": `<a-button type="primary" shape="\${1:circle}">$2</a-button>`,
"a-button:icon": `<a-button type="primary" :icon="\${1:h(SearchOutlined)}">$2</a-button>`,
"a-button:danger": `<a-button type="primary" danger>$1</a-button>`,
"a-button:block": `<a-button type="primary" block>$1</a-button>`,
"a-typography": `<a-typography>$1</a-typography>`,
"a-typography-title": `<a-typography-title>$1</a-typography-title>`,
"a-typography-paragraph": `<a-typography-paragraph>$1</a-typography-paragraph>`,
"a-typography-link": `<a-typography-link>$1</a-typography-link>`,
"a-typography-text": `<a-typography-text>$1</a-typography-text>`,
"a-typography-paragraph:copyableIcon[slot]": `<template #copyableIcon="{ copied }">
${tabSize}$1
</template>`,
"a-typography-paragraph:copyableTooltip[slot]": `<template #copyableTooltip="{ copied }">
${tabSize}$1
</template>`,
"a-typography-paragraph:ellipsisSymbol[slot]": `<template #ellipsisSymbol="{ copied }">
${tabSize}$1
</template>`,
"a-typography-paragraph:editableIcon[slot]": `<template #editableIcon="{ copied }">
${tabSize}$1
</template>`,
"a-typography-paragraph:editableTooltip[slot]": `<template #editableTooltip="{ copied }">
${tabSize}$1
</template>`,
"a-typography-paragraph:ellipsisTooltip[slot]": `<template #ellipsisTooltip="{ copied }">
${tabSize}$1
</template>`,
"a-typography-paragraph:enterEnterIcon[slot]": `<template #enterEnterIcon="{ copied }">
${tabSize}$1
</template>`,
"a-divider": `<a-divider>$1</a-divider>`,
"a-divider:dashed": `<a-divider dashed>$1</a-divider>`,
"a-divider:vertical": `<a-divider type="vertical">$1</a-divider>`,
"a-divider:orientation": `<a-divider orientation="\${1:left}">$2</a-divider>`,
"a-flex": `<a-flex gap="middle">$1</a-flex>`,
"a-flex:vertical": `<a-flex gap="middle" :vertical="true">$1</a-flex>`,
"a-row": `<a-row>
${tabSize}<a-col :span="$1">$2</a-col>$3
</a-row>`,
"a-col": `<a-col :span="$1">$2</a-col>`,
"a-layout": `<a-layout>$1</a-layout>`,
"a-layout-header": `<a-layout-header>$1</a-layout-header>`,
"a-layout-content": `<a-layout-content>$1</a-layout-content>`,
"a-layout-footer": `<a-layout-footer>$1</a-layout-footer>`,
"a-layout-sider": `<a-layout-sider>$1</a-layout-sider>`,
"a-space": `<a-space>$1</a-space>`,
"a-space:vertical": `<a-space direction="vertical">
${tabSize}$1
</a-space>`,
"a-space-compact": `<a-space-compact block>$1</a-space-compact>`,
"a-anchor": `<a-anchor :items="$1">$2</a-anchor>`,
"a-anchor:horizontal": `<a-anchor direction="horizontal" :items="$1">$2</a-anchor>`,
"a-breadcrumb": `<a-breadcrumb>
${tabSize}<a-breadcrumb-item>$1</a-breadcrumb-item>$2
</a-breadcrumb>`,
"a-breadcrumb-item": `<a-breadcrumb-item>$1</a-breadcrumb-item>`,
"a-breadcrumb-item:overlay[slot]": `<template #overlay>
${tabSize}$1
</template>`,
"a-breadcrumb:routes": `<a-breadcrumb :routes="routes">
${tabSize}<template #itemRender="{ route, paths }">
${tabSize}${tabSize}$1
${tabSize}</template>
</a-breadcrumb>`,
"a-breadcrumb-separator": `<a-breadcrumb-separator>$1</a-breadcrumb-separator>`,
"a-dropdown": `<a-dropdown>
${tabSize}<a @click.prevent>
${tabSize}${tabSize}\${1:Hover me}
${tabSize}${tabSize}<DownOutlined />
${tabSize}</a>
${tabSize}<template #overlay>
${tabSize}${tabSize}<a-menu>
${tabSize}${tabSize}${tabSize}<a-menu-item>$2</a-menu-item>$2
${tabSize}${tabSize}</a-menu>
${tabSize}</template>
</a-dropdown>`,
"a-dropdown:contextmenu": `<a-dropdown :trigger="['contextmenu']">
${tabSize}<div :style="{ textAlign: 'center', background: '#f7f7f7', height: '200px', lineHeight: '200px', color: '#777', }" >
${tabSize}${tabSize}\${1:Right Click on here}
${tabSize}</div>
${tabSize}<template #overlay>
${tabSize}${tabSize}<a-menu>
${tabSize}${tabSize}${tabSize}<a-menu-item key="1">$2</a-menu-item>
${tabSize}${tabSize}</a-menu>
${tabSize}</template>
</a-dropdown>`,
"a-menu-divider": `<a-menu-divider>$1</a-menu-divider>`,
"a-dropdown:click": `<a-dropdown :trigger="['click']">
${tabSize}<a class="ant-dropdown-link" @click.prevent>
${tabSize}${tabSize}\${1:Click me}
${tabSize}${tabSize}<DownOutlined />
${tabSize}</a>
${tabSize}<template #overlay>
${tabSize}${tabSize}<a-menu>
${tabSize}${tabSize}${tabSize}<a-menu-item key="3">3rd menu item</a-menu-item>
${tabSize}${tabSize}</a-menu>
${tabSize}</template>
</a-dropdown>`,
"a-dropdown-button": `<a-dropdown-button type="primary">
${tabSize}<template #overlay>
${tabSize}${tabSize}<a-menu>
${tabSize}${tabSize}${tabSize}<a-menu-item key="1">$1</a-menu-item>$2
${tabSize}${tabSize}</a-menu>
${tabSize}</template>
${tabSize}Submit
</a-dropdown-button>`,
"a-menu": `<a-menu v-model:selectedKeys="\${1:current}" mode="horizontal" :items="\${2:items}">$3</a-menu>`,
"a-menu:inline": `<a-menu v-model:openKeys="\${1:openKeys}" v-model:selectedKeys="\${2:selectedKeys}" mode="inline" :items="\${3:items}" @click="\${4:handleClick}">$5</a-menu>`,
"a-menu:vertical": `<a-menu v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" mode="vertical" :items="items" @click="handleClick"></a-menu>`,
"a-page-header": `<a-page-header title="$1" sub-title="$2" @back="$3">$4</a-page-header>`,
"a-page-header:breadcrumb": `<a-page-header title="$1" sub-title="$2" @back="$3" :breadcrumb="{ routes }">$4</a-page-header>`,
"a-page-header:extra[slot]": `<template #extra>
${tabSize}$1
</template>`,
"a-page-header:tags[slot]": `<template #tags>
${tabSize}$1
</template>`,
"a-pagination": ` <a-pagination v-model:current="$1" show-quick-jumper :total="$2" @change="$3">$4</a-pagination>`,
"a-steps": `<a-steps :current="$1" :items="$2">$3</a-steps>`,
"a-steps:vertical": `<a-steps :current="$1" :items="$2" direction="vertical">$3</a-steps>`,
"a-steps:progressDot[slot]": `<template #progressDot="{ index, status, prefixCls }">
${tabSize}$1
</template>`,
"a-steps:navigation": `<a-steps :current="$1" :items="$2" type="navigation">$3</a-steps>`,
"a-auto-complete": `<a-auto-complete v-model:value="\${1:value}" :options="\${2:options}" :allow-clear="true" placeholder="\${3:${l10n.t('placeholder')}}" @select="\${4:onSelect}" @search="\${5:onSearch}">$6</a-auto-complete>`,
"a-auto-complete:option[slot]": `<template #option="{ value: val }">
${tabSize}$1
</template>`,
"a-auto-complete:search": `<a-auto-complete v-model:value="\${1:value}" :options="\${2:dataSource}" :allow-clear="true" @select="\${3:onSelect}" @search="\${4:handleSearch}">
${tabSize}<template #option="item">
${tabSize}${tabSize}$5
${tabSize}</template>
${tabSize}<a-input-search size="large" placeholder="${l10n.t('placeholder')}" enter-button></a-input-search>$1</a-auto-complete>`,
"a-cascader": `<a-cascader v-model:value="\${1:value}" :options="\${2:options}" placeholder="${l10n.t('placeholder:select')}">$3</a-cascader>`,
"a-cascader:displayRender[slot]": `<template #displayRender="{ labels, selectedOptions }">
${tabSize}$1
</template>`,
"a-cascader:loadData": `<a-cascader v-model:value="\${1:value}" :options="\${2:options}" :load-data="\${3:loadData}" placeholder="${l10n.t('placeholder')}" change-on-select>$4</a-cascader>`,
"a-checkbox": `<a-checkbox v-model:checked="\${1:checked}">$2</a-checkbox>`,
"a-checkbox:value": `<a-checkbox value="$1">$2</a-checkbox>`,
"a-checkbox-group:options": `<a-checkbox-group v-model:value="\${1:checkedList}" :options="\${2:options}">$3</a-checkbox-group>`,
"a-checkbox-group": ` <a-checkbox-group v-model:value="\${1:value}">
${tabSize}<a-checkbox value="$2">$3</a-checkbox>$4
</a-checkbox-group>`,
"a-date-picker": `<a-date-picker v-model:value="\${1:value}">$2</a-date-picker>`,
"a-date-picker:time": `<a-date-picker show-time placeholder="${l10n.t('el-time-select.placeholder')}" @change="\${1:onChange}" @ok="\${2:onOk}"></a-date-picker>`,
"a-date-picker:format": `<a-date-picker v-model:value="\${1:value}" format="\${2:YYYY/MM/DD}">$3</a-date-picker>`,
"a-range-picker": `<a-range-picker v-model:value="\${1:value}">$2</a-range-picker>`,
"a-date-picker:presets": `<a-date-picker :presets="\${1:presets}" @change="\${2:onChange}">$3</a-date-picker>`,
"a-form": `<a-form :model="\${1:formState}" :rules="\${2:rules}">
${tabSize}$3
</a-form>`,
"a-form:inline": `<a-form :model="\${1:formState}" :rules="\${2:rules}" mode="inline">
${tabSize}$3
</a-form>`,
"a-form-item":  `<a-form-item label="$1">
${tabSize}$2
</a-form-item>`,
"a-form-item:rules":  `<a-form-item label="$1" :rules="$2">
${tabSize}$3
</a-form-item>`,
"a-input": `<a-input v-model:value="\${1:value}" placeholder="${l10n.t('placeholder')}">$2</a-input>`,
"a-textarea": `<a-textarea v-model:value="\${1:value}" placeholder="${l10n.t('placeholder')}">$2</a-textarea>`,
"a-input:prefix[slot]": `<template #prefix>
${tabSize}$1
</template>`,
"a-input:suffix[slot]": `<template #suffix>
${tabSize}$1
</template>`,
"a-input:addonBefore[slot]": `<template #addonBefore>
${tabSize}$1
</template>`,
"a-input:addonAfter[slot]": `<template #addonAfter>
${tabSize}$1
</template>`,
"a-input-search": `<a-input-search v-model:value="\${1:value}" placeholder="${l10n.t('placeholder')}" loading enter-button @search="onSearch">$2</a-input-search>`,
"a-input-group": `<a-input-group>$1</a-input-group>`,
"a-input-password": `<a-input-password v-model:value="\${1:value}" placeholder="${l10n.t('placeholder')}">$2</a-input-password>`,
"a-input:show-count": `<a-input v-model:value="\${1:value}" show-count :maxlength="20">$2</a-input>`,
"a-input-number": `<a-input-number v-model:value="\${1:value}" :min="1" :max="10"></a-input-number>`,
"a-input-number:addonBefore[slot]": `<template #addonBefore>
${tabSize}$1
</template>`,
"a-input-number:addonAfter[slot]": `<template #addonAfter>
${tabSize}$1
</template>`,
"a-mentions": `<a-mentions v-model:value="\${1:value}" autofocus :options="\${2:options}" @select="\${3:onSelect}">$4</a-mentions>`,
"a-mentions:search": `<a-mentions v-model:value="\${1:value}" autofocus :options="\${2:options}" @select="\${3:onSelect}" @search="\${4:onSearch}">$5</a-mentions>`,
"a-mentions:option[slot]": `<template #option="{ payload }">
${tabSize}$1
</template>`,
"a-radio-group": `<a-radio-group v-model:value="\${1:value}">
${tabSize}<a-radio value="$2">$3</a-radio>$4
</a-radio-group>`,
"a-radio": `<a-radio v-model:checked="\${1:checked}">$2</a-radio>`,
"a-radio:value": `<a-radio value="$1">$2</a-radio>`,
"a-radio-group:options": `<a-radio-group v-model:value="\${1:value}" :options="\${2:options}">$3</a-radio-group>`,
"a-rate": `<a-rate v-model:value="\${1:value}">$2</a-rate>`,
"a-rate:character": `<a-rate v-model:value="\${1:value}" character="$2">$3</a-rate>`,
"a-rate:allow-half": `<a-rate v-model:value="\${1:value}" allow-half>$2</a-rate>`,
"a-rate:tooltips": `<a-rate v-model:value="\${1:value}" :tooltips="\${2:tooltips}">$3</a-rate>`,
"a-select": `<a-select v-model:value="\${1:value}" show-search allowClear @change="\${2:handleChange}">
${tabSize}<a-select-option value="$3">$4</a-select-option>$5
</a-select>`,
"a-select:options": `<a-select v-model:value="\${1:value}" show-search allowClear placeholder="${l10n.t('placeholder:select')}" :options="\${2:options}" @change="\${3:handleChange}">$4</a-select>`,
"a-select:multiple": `<a-select v-model:value="\${1:value}" show-search allowClear mode="multiple" placeholder="${l10n.t('placeholder:select')}" :options="\${2:options}" @change="\${3:handleChange}">$4</a-select>`,
"a-select-option": `<a-select-option value="$1">$2</a-select-option>`,
"a-slider": `<a-slider v-model:value="\${1:value}">$2</a-slider>`,
"a-slider:tip-formatter": `<a-slider v-model:value="\${1:value}" :tip-formatter="\${2:formatter}">$3</a-slider>`,
"a-slider:range": `<a-slider v-model:value="\${1:value}" range :step="\${2:10}" @afterChange="\${3:onAfterChange}">$4</a-slider>`,
"a-slider:mark[slot]": `<template #mark="{ label, point }">
${tabSize}$1
</template>`,
"a-switch": `<a-switch v-model:checked="\${1:checked}">$2</a-switch>`,
"a-switch:self": `<a-switch v-model:checked="\${1:checked}" checked-children="\${2:开}" un-checked-children="\${3:关}" checked-value="$4" un-checked-value="$5">$6</a-switch>`,
"a-time-picker": `<a-time-picker v-model:value="value"></a-time-picker>`,
"a-time-picker:use12-hours": `<a-time-picker v-model:value="value" use12-hours></a-time-picker>`,
"a-time-range-picker": `<a-time-range-picker v-model:value="\${1:value}"></a-time-range-picker>`,
"a-time-picker:renderExtraFooter[slot]": `<template #renderExtraFooter="{ prefixCls }">
${tabSize}$1
</template>`,
"a-time-picker:clearIcon[slot]": `<template #clearIcon>
${tabSize}$1
</template>`,
"a-time-picker:suffixIcon[slot]": `<template #suffixIcon>
${tabSize}$1
</template>`,
"a-transfer": `<a-transfer
${tabSize}v-model:target-keys="\${1:targetKeys}"
${tabSize}v-model:selected-keys="\${2:selectedKeys}"
${tabSize}:data-source="\${3:dataSource}"
${tabSize}:titles="['Source', 'Target']"
${tabSize}:render="item => item.title"
${tabSize}@change="handleChange"
${tabSize}@selectChange="handleSelectChange"
></a-transfer>`,
"a-transfer:show-search": `<a-transfer
${tabSize}v-model:target-keys="\${1:targetKeys}"
${tabSize}v-model:selected-keys="\${2:selectedKeys}"
${tabSize}:data-source="\${3:dataSource}"
${tabSize}show-search
${tabSize}:titles="['Source', 'Target']"
${tabSize}:render="item => item.title"
${tabSize}@change="handleChange"
${tabSize}@selectChange="handleSelectChange"
></a-transfer>`,
"a-tree-select": `<a-tree-select
${tabSize}v-model:value="value"
${tabSize}show-search
${tabSize}placeholder="${l10n.t('placeholder:select')}"
${tabSize}allow-clear
${tabSize}tree-default-expand-all
${tabSize}:tree-data="treeData"
${tabSize}tree-node-filter-prop="label"
>
${tabSize}<template #title="{ value: val, label }">
${tabSize}${tabSize}$1
${tabSize}</template>
</a-tree-select>`,
"a-tree-select:tree-checkable": `<a-tree-select
${tabSize}v-model:value="value"
${tabSize}show-search
${tabSize}placeholder="${l10n.t('placeholder:select')}"
${tabSize}tree-checkable
${tabSize}allow-clear
${tabSize}tree-default-expand-all
${tabSize}:tree-data="treeData"
${tabSize}tree-node-filter-prop="label"
>
${tabSize}<template #title="{ value: val, label }">
${tabSize}${tabSize}$1
${tabSize}</template>
</a-tree-select>`,
"a-tree-select:suffixIcon[slot]": `<template #suffixIcon>
${tabSize}$1
</template>`,
"a-tree-select:load-data": `<a-tree-select
${tabSize}v-model:value="value"
${tabSize}tree-data-simple-mode
${tabSize}:tree-data="treeData"
${tabSize}placeholder="${l10n.t('placeholder:select')}"
${tabSize}:load-data="onLoadData"
></a-tree-select>`,
"a-tree-select:tagRender[slot]": `<template #tagRender="{ label, closable, onClose, option }">
${tabSize}$1
</template>`,
"a-tree-select:title[slot]": `<template #title="{ value: val, label }">
${tabSize}$1
</template>`,
"a-upload": `<a-upload
${tabSize}v-model:file-list="fileList"
${tabSize}action=""
${tabSize}@change="handleChange"
>
${tabSize}<a-button>
${tabSize}${tabSize}<upload-outlined></upload-outlined>
${tabSize}${tabSize}${l10n.t('el-upload.click')}
${tabSize}</a-button>
</a-upload>`,
"a-upload:avatar": `<a-upload
${tabSize}v-model:file-list="fileList"
${tabSize}list-type="picture-card"
${tabSize}:show-upload-list="false"
${tabSize}action=""
${tabSize}:before-upload="beforeUpload"
${tabSize}@change="handleChange"
>
${tabSize}<img v-if="imageUrl" :src="imageUrl" alt="avatar" />
${tabSize}<div v-else>
${tabSize}${tabSize}<loading-outlined v-if="loading"></loading-outlined>
${tabSize}${tabSize}<plus-outlined v-else></plus-outlined>
${tabSize}${tabSize}<div class="ant-upload-text">Upload</div>
${tabSize}</div>
</a-upload>`,
"a-upload:drag": `<a-upload-dragger
${tabSize}v-model:fileList="fileList"
${tabSize}:multiple="true"
${tabSize}action=""
${tabSize}@change="handleChange"
${tabSize}@drop="handleDrop"
>
${tabSize}<p class="ant-upload-drag-icon">
${tabSize}${tabSize}<inbox-outlined></inbox-outlined>
${tabSize}</p>
${tabSize}<p class="ant-upload-text">${l10n.t('ant-upload.drop')}</p>
</a-upload-dragger>`,
"a-upload:directory": `<a-upload action="" directory>
${tabSize}<a-button>
${tabSize}${tabSize}<upload-outlined></upload-outlined>
${tabSize}${tabSize}${l10n.t('ant-upload.directory')}
${tabSize}</a-button>
</a-upload>`,
"a-avatar": `<a-avatar :size="\${1:64}">
${tabSize}$2
</a-avatar>`,
"a-avatar:square": `<a-avatar shape="square" :size="\${1:64}">
${tabSize}$2
</a-avatar>`,
"a-avatar:icon[slot]": `<template #icon>
${tabSize}<UserOutlined />
</template>`,
"a-avatar-group": `<a-avatar-group>$1</a-avatar-group>`,
"a-badge": `<a-badge count="\${1:5}">$2</a-badge>`,
"a-badge:count[slot]": `<template #count>
${tabSize}$1
</template>`,
"a-badge:overflow-count": `<a-badge :count="\${1:99}" :overflow-count="\${2:10}">$3</a-badge>`,
"a-badge:dot": `<a-badge dot>$1</a-badge>`,
"a-badge-ribbon": `<a-badge-ribbon text="$1">$2</a-badge-ribbon>`,
"a-calendar": `<a-calendar v-model:value="\${1:value}" @panelChange="\${2:onPanelChange}"></a-calendar>`,
"a-calendar:card": `<a-calendar v-model:value="\${1:value}" :fullscreen="false" @panelChange="\${2:onPanelChange}"></a-calendar>`,
"a-calendar:dateCellRender[slot]": `<template #dateCellRender="{ current }">
${tabSize}$1
</template>`,
"a-calendar:monthCellRender[slot]": `<template #monthCellRender="{ current }">
${tabSize}$1
</template>`,
"a-calendar:headerRender[slot]": `<template #headerRender="{ value: current, type, onChange, onTypeChange }">
${tabSize}$1
</template>`,
"a-card": `<a-card title="$1">$2</a-card>`,
"a-card:extra[slot]": `<template #extra>
${tabSize}$1
</template>`,
"a-card:cover[slot]": `<template #cover>
${tabSize}$1
</template>`,
"a-card-grid": `<a-card-grid>$1</a-card-grid>`,
"a-card:actions[slot]": `<template #actions>
${tabSize}$1
</template>`,
"a-card-meta": `<a-card-meta title="$1" description="$2">$3</a-card-meta>`,
"a-card-meta:avatar[slot]": `<template #avatar>
${tabSize}$1
</template>`,
"a-carousel": `<a-carousel autoplay :after-change="onChange">$1</a-carousel>`,
"a-carousel:effect": `<a-carousel effect="fade" autoplay :after-change="onChange">$1</a-carousel>`,
"a-carousel:customPaging[slot]": `<template #customPaging="props">
${tabSize}$1
</template>`,
"a-carousel:prevArrow[slot]": `<template #prevArrow>
${tabSize}$1
</template>`,
"a-carousel:nextArrow[slot]": `<template #nextArrow>
${tabSize}$1
</template>`,
"a-collapse": `<a-collapse v-model:activeKey="\${1:activeKey}">
${tabSize}$2
</a-collapse>`,
"a-collapse:accordion": `<a-collapse v-model:activeKey="\${1:activeKey}" accordion>
${tabSize}$2
</a-collapse>`,
"a-collapse-panel": `<a-collapse-panel key="$1" header="$2">
${tabSize}$3
</a-collapse-panel>`,
"a-carousel:expandIcon[slot]": `<template #expandIcon="{ isActive }">
${tabSize}$1
</template>`,
"a-collapse-panel:extra[slot]": `<template #extra>
${tabSize}$1
</template>`,
"a-comment": `<a-comment>$1</a-comment>`,
"a-comment:actions[slot]": `<template #actions>
${tabSize}$1
</template>`,
"a-comment:author[slot]": `<template #author>
${tabSize}$1
</template>`,
"a-comment:avatar[slot]": `<template #avatar>
${tabSize}$1
</template>`,
"a-comment:content[slot]": `<template #content>
${tabSize}$1
</template>`,
"a-comment:datetime[slot]": `<template #datetime>
${tabSize}$1
</template>`,
"a-descriptions": `<a-descriptions title="$1">
${tabSize}$1
</a-descriptions>`,
"a-descriptions:bordered": `<a-descriptions title="$1" bordered>
${tabSize}$1
</a-descriptions>`,
"a-descriptions-item": `<a-descriptions-item label="$1">$2</a-descriptions-item>`,
"a-empty": `<a-empty>$1</a-empty>`,
"a-empty:image": `<a-empty :image="$1">$2</a-empty>`,
"a-empty:description[slot]": `<template #description>
${tabSize}$1
</template>`,
"a-image": `<a-image :width="\${1:200}" src="$2">$3</a-image>`,
"a-image:preview": `<a-image :width="\${1:200}" src="$2" :preview="$3">$4</a-image>`,
"a-image:fallback": `<a-image :width="\${1:200}" src="$2" fallback="$3">$4</a-image>`,
"a-image:placeholder[slot]": `<template #placeholder>
${tabSize}$1
</template>`,
"a-image-preview-group": `<a-image-preview-group>$1</a-image-preview-group>`,
"a-list": `<a-list item-layout="horizontal" :data-source="\${1:data}">
${tabSize}$2
</a-list>`,
"a-list:renderItem[slot]": `<template #renderItem="{ item }">
${tabSize}$1
</template>`,
"a-list:loadMore[slot]": `<template #loadMore>
${tabSize}$1
</template>`,
"a-list:footer[slot]": `<template #footer>
${tabSize}$1
</template>`,
"a-list-item": `<a-list-item>$1</a-list-item>`,
"a-list-item:actions[slot]": `<template #actions>
${tabSize}$1
</template>`,
"a-list-item:extra[slot]": `<template #extra>
${tabSize}$1
</template>`,
"a-list-item-meta": `<a-list-item-meta description="$1">$2</a-list-item-meta>`,
"a-list-item-meta:title[slot]": `<template #title>
${tabSize}$1
</template>`,
"a-list-item-meta:avatar[slot]": `<template #avatar>
${tabSize}$1
</template>`,
"a-popover": `<a-popover placement="\${1:topLeft}">
${tabSize}$2
</a-popover>`,
"a-popover:trigger": `<a-popover placement="\${1:topLeft}" trigger="\${2:hover}">
${tabSize}$3
</a-popover>`,
"a-popover:content[slot]": `<template #content>
${tabSize}$1
</template>`,
"a-popover:title[slot]": `<template #title>
${tabSize}$1
</template>`,
"a-qrcode": `<a-qrcode :value="\${1:text}">$2</a-qrcode>`,
"a-qrcode:color": `<a-qrcode :value="\${1:text}" :color="$2" :bg-color="$3">$4</a-qrcode>`,
"a-qrcode:expired": `<a-qrcode :value="\${1:text}" status="expired" @refresh="\${2:refresh}">$3</a-qrcode>`,
"a-qrcode:icon": `<a-qrcode :value="\${1:text}" icon="$2">$3</a-qrcode>`,
"a-segmented": `<a-segmented v-model:value="\${1:value}" :options="\${2:data}">$3</a-segmented>`,
"a-segmented:block": `<a-segmented v-model:value="\${1:value}" :options="\${2:data}" block>$3</a-segmented>`,
"a-segmented:label[slot]": `<template #label="{ value: val, payload = {} }">
${tabSize}$1
</template>`,
"a-statistic": `<a-statistic title="$1" :value="$2">$3</a-statistic>`,
"a-statistic:suffix[slot]": `<template #suffix>
${tabSize}$1
</template>`,
"a-statistic:prefix[slot]": `<template #prefix>
${tabSize}$1
</template>`,
"a-statistic-countdown": `<a-statistic-countdown title="$1" :value="$2" @finish="\${3:onFinish}">$4</a-statistic-countdown>`,
"a-statistic-countdown:format": `<a-statistic-countdown title="$1" :value="$2" format="D 天 H 时 m 分 s 秒" @finish="\${3:onFinish}">$4</a-statistic-countdown>`,
"a-statistic-countdown:title[slot]": `<template #title>
${tabSize}$1
</template>`,
"a-table": `<a-table :columns="\${1:columns}" :data-source="\${2:data}">
${tabSize}$3
</a-table>`,
"a-table:headerCell[slot]": `<template #headerCell="{ column }">
${tabSize}$1
</template>`,
"a-table:bodyCell[slot]": `<template #bodyCell="{ text, record, index, column }">
${tabSize}$1
</template>`,
"a-table:title[slot]": `<template #title>
${tabSize}$1
</template>`,
"a-table:footer[slot]": `<template #footer>
${tabSize}$1
</template>`,
"a-table:customFilterDropdown[slot]": `<template #customFilterDropdown="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }">
${tabSize}$1
</template>`,
"a-table:customFilterIcon[slot]": `<template #customFilterIcon>
${tabSize}$1
</template>`,
"a-table:summary[slot]": `<template #summary>
${tabSize}$1
</template>`,
"a-table-summary": `<a-table-summary>$1</a-table-summary>`,
"a-table-summary-row": `<a-table-summary-row>$1</a-table-summary-row>`,
"a-table-summary-cell": `<a-table-summary-cell>$1</a-table-summary-cell>`,
"a-table-column-group": `<a-table-column-group>$1</a-table-column-group>`,
"a-table-column": `<a-table-column key="$1" data-index="$2">$3</a-table-column>`,
"a-table-column:default[slot]": `<template #default="{ text: tags }">
${tabSize}$1
</template>`,
"a-tabs": `<a-tabs v-model:activeKey="\${1:activeKey}">
${tabSize}$2
</a-tabs>`,
"a-tab-pane": `<a-tab-pane key="$1" tab="$2">$3</a-tab-pane>`,
"a-tab-pane:tab[slot]": `<template #tab>
${tabSize}$1
</template>`,
"a-tabs:leftExtra[slot]": `<template #leftExtra>
${tabSize}$1
</template>`,
"a-tabs:rightExtra[slot]": `<template #rightExtra>
${tabSize}$1
</template>`,
"a-tabs:renderTabBar[slot]": `<template #renderTabBar="{ DefaultTabBar, ...props }">
${tabSize}$1
</template>`,
"a-tag": `<a-tag>$1</a-tag>`,
"a-tag:closable": `<a-tag closable @close="\${1:log}">$2</a-tag>`,
"a-checkable-tag": `<a-checkable-tag v-model:checked="$1" @change="$2">
${tabSize}$3
</a-checkable-tag>`,
"a-tag:color": `<a-tag color="$1">$2</a-tag>`,
"a-tag:icon[slot]": `<template #icon>
${tabSize}$1
</template>`,
"a-timeline": `<a-timeline>$1</a-timeline>`,
"a-timeline-item": `<a-timeline-item>$1</a-timeline-item>`,
"a-timeline-item:color": `<a-timeline-item color="$1">$2</a-timeline-item>`,
"a-timeline-item:dot[slot]": `<template #dot>
${tabSize}$1
</template>`,
"a-tooltip": `<a-tooltip title="$1">$2</a-tooltip>`,
"a-tooltip:title[slot]": `<template #title>
${tabSize}$1
</template>`,
"a-tooltip:color": `<a-tooltip title="$1" color="$2">$3</a-tooltip>`,
"a-tour": `<a-tour v-model:current="\${1:current}" :open="\${2:open}" :steps="\${3:steps}" @close="\${4:handleOpen(false)}">$5</a-tour>`,
"a-tour:mask": `<a-tour v-model:current="\${1:current}" :mask="false" type="primary" :open="\${2:open}" :steps="\${3:steps}" @close="\${4:handleOpen(false)}">$5</a-tour>`,
"a-tour:indicatorsRender[slot]": `<template #indicatorsRender="{ current, total }">
${tabSize}$1
</template>`,
"a-tree": `<a-tree
${tabSize}v-model:expandedKeys="expandedKeys"
${tabSize}v-model:selectedKeys="selectedKeys"
${tabSize}v-model:checkedKeys="checkedKeys"
${tabSize}checkable
${tabSize}:tree-data="treeData"
>
${tabSize}$1
</a-tree>`,
"a-tree:title[slot]": `<template #title="{ title, key }">
${tabSize}$1
</template>`,
"a-tree:dragggable": `<a-tree
${tabSize}draggable
${tabSize}block-node
${tabSize}:tree-data="gData"
${tabSize}@dragenter="onDragEnter"
${tabSize}@drop="onDrop"
>
${tabSize}$1
</a-tree>`,
"a-tree:load-data": `<a-tree
${tabSize}v-model:expandedKeys="expandedKeys"
${tabSize}v-model:selectedKeys="selectedKeys"
${tabSize}:load-data="onLoadData"
${tabSize}:tree-data="treeData"
>
${tabSize}$1
</a-tree>`,
"a-tree:switcherIcon[slot]": `<template #switcherIcon="{ switcherCls }">
${tabSize}$1
</template>`,
"a-tree:icon[slot]": `<template #icon="{ key, selected }">
${tabSize}$1
</template>`,
"a-alert": `<a-alert message="$1" type="success">$2</a-alert>`,
"a-alert:show-icon": `<a-alert message="$1" type="success" show-icon>$2</a-alert>`,
"a-alert:closable": `<a-alert message="$1" type="warning" closable @close="onClose">$2</a-alert>`,
"a-alert:description[slot]": `<template #description>
${tabSize}$1
</template>`,
"a-alert:icon[slot]": `<template #icon>
${tabSize}$1
</template>`,
"a-drawer": `<a-drawer
${tabSize}v-model:open="open"
${tabSize}title="$1"
${tabSize}placement="right"
${tabSize}@after-open-change="afterOpenChange"
>
${tabSize}$2
</a-drawer>`,
"a-drawer:extra[slot]": `<template #extra>
${tabSize}$1
</template>`,
"a-drawer:footer[slot]": `<template #footer>
${tabSize}$1
</template>`,
"a-modal": `<a-modal v-model:open="\${1:open}" title="$2" :confirm-loading="\${3:confirmLoading}" @ok="\${4:handleOk}">
${tabSize}$5
</a-modal>`,
"a-modal:footer[slot]": `<template #footer>
${tabSize}$1
</template>`,
"a-modal:modalRender[slot]": `<template #modalRender="{ originVNode }">
${tabSize}$1
</template>`,
"a-popconfirm": `<a-popconfirm
${tabSize}title="$1"
${tabSize}ok-text="${l10n.t('ant-popconfirm:ok-text')}"
${tabSize}cancel-text="${l10n.t('ant-popconfirm:cancel-text')}"
${tabSize}@confirm="\${2:confirm}"
${tabSize}@cancel="\${3:cancel}"
>
${tabSize}$4
</a-popconfirm>`,
"a-popconfirm:icon[slot]": `<template #icon>
${tabSize}$1
</template>`,
"a-popconfirm:title[slot]": `<template #title>
${tabSize}$1
</template>`,
"a-progress": `<a-progress :percent="30">$1</a-progress>`,
"a-progress:circle": `<a-progress type="circle" :percent="30">$1</a-progress>`,
"a-progress:format[slot]": `<template #format="percent">
${tabSize}$1
</template>`,
"a-progress:steps": `<a-progress :percent="30" :steps="3">$1</a-progress>`,
"a-result": `<a-result
${tabSize}status="success"
${tabSize}title="$1"
${tabSize}sub-title="$2"
>
${tabSize}$3
</a-result>`,
"a-result:extra[slot]": `<template #extra>
${tabSize}$1
</template>`,
"a-result:icon[slot]": `<template #icon>
${tabSize}$1
</template>`,
"a-skeleton": `<a-skeleton>$1</a-skeleton>`,
"a-skeleton:active": `<a-skeleton active>$1</a-skeleton>`,
"a-skeleton:avatar": `<a-skeleton avatar :paragraph="{ rows: 4 }">$1</a-skeleton>`,
"a-skeleton-button": `<a-skeleton-button :active="$1" :shape="$2" :block="$3">$4</a-skeleton-button>`,
"a-skeleton-avatar": `<a-skeleton-avatar :active="$1" :shape="$2" :block="$3">$4</a-skeleton-avatar>`,
"a-skeleton-input": `<a-skeleton-input :active="$1">$4</a-skeleton-input>`,
"a-skeleton-image": `<a-skeleton-image>$1</a-skeleton-image>`,
"a-spin": `<a-spin>$1</a-spin>`,
"a-spin:delay": `<a-spin :spinning="$1" :delay="$2">$3</a-spin>`,
"a-affix": `<a-affix :offset-top="top">
${tabSize}$1
</a-affix>`,
"a-affix:target": `<a-affix :target="$1">
${tabSize}$2
</a-affix>`,
"a-config-provider": `<a-config-provider>$1</a-config-provider>`,
"a-float-button": `<a-float-button @click="handleClick">$1</a-float-button>`,
"a-float-button:icon[slot]": `<template #icon>
${tabSize}$1
</template>`,
"a-float-button:tooltip[slot]": `<template #tooltip>
${tabSize}$1
</template>`,
"a-float-button-group": `<a-float-button-group>$1</a-float-button-group>`,
"a-back-top": `<a-back-top :visibility-height="0">$1</a-back-top>`,
"a-watermark":`<a-watermark content="$1">
${tabSize}$2
</a-watermark>`,
"a-watermark:image":`<a-watermark image="$1">
${tabSize}$2
</a-watermark>`,
"a-app": `<a-app>$1</a-app>`,
  }
}