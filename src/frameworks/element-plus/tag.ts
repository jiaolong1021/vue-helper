import { l10n } from "vscode"

export default (tabSize: string) => {
  return {
    "el-button": `<el-button type="primary">$1</el-button>`,
    "el-button:plain": `<el-button type="primary" plain>$1</el-button>`,
    "el-button:round": `<el-button type="primary" round>$1</el-button>`,
    "el-button:circle": `<el-button type="primary" circle>$1</el-button>`,
    "el-button:disabled": `<el-button type="primary" disabled>$1</el-button>`,
    "el-button:link": `<el-button type="primary" link>$1</el-button>`,
    "el-button:text": `<el-button type="primary" text>$1</el-button>`,
    "el-button:icon": `<el-button type="primary" :icon="$1">$2</el-button>`,
    "el-button:loading": `<el-button type="primary" :loading="$1">$2</el-button>`,
    "el-button-group": `<el-button-group>
${tabSize}<el-button type="primary">$1</el-button>
${tabSize}<el-button type="primary">$2</el-button>
</el-button-group>`,
    "el-container": `<el-container>$1</el-container>`,
    "el-header": `<el-header>$1</el-header>`,
    "el-main": `<el-main>$1</el-main>`,
    "el-footer": `<el-footer>$1</el-footer>`,
    "el-aside": `<el-aside width="200px">$1</el-aside>`,
    "el-row": `<el-row>
${tabSize}<el-col :span="\${1:24}">$2</el-col>
</el-row>`,
  "el-col": `<el-col :span="\${1:8}">$2</el-col>`,
  "el-link": `<el-link type="primary">$1</el-link>`,
  "el-text": `<el-text>$1</el-text>`,
  "el-text:truncated": `<el-text truncated>$1</el-text>`,
  "el-scrollbar": `<el-scrollbar height="\${1:400px}" @scroll="\${2:scroll}">
${tabSize}$3
</el-scrollbar>`,
  "el-space": `<el-space wrap>
${tabSize}$1
</el-space>`,
  "el-space:vertical": `<el-space direction="vertical">
${tabSize}$1
</el-space>`,
  "el-space:size": `<el-space :size="\${1:size}">
${tabSize}$2
</el-space>`,
  "el-space:spacer": `<el-space spacer="\${1:|}">
${tabSize}$2
</el-space>`,
  "el-space:fill": `<el-space :fill="\${1:fill}" wrap>
${tabSize}$2
</el-space>`,
  "el-config-provider": `<el-config-provider :locale="\${1:locale}">
${tabSize}$2
</el-config-provider>`,
  "el-autocomplete": `<el-autocomplete v-model="\${1:value}" :fetch-suggestions="querySearch" clearable placeholder="${l10n.t('placeholder')}" @select="handleSelect" />`,
  "el-autocomplete:template": `<el-autocomplete
${tabSize}v-model="\${1:value}"
${tabSize}:fetch-suggestions="querySearch"
${tabSize}placeholder="${l10n.t('placeholder')}"
${tabSize}@select="handleSelect"
>
${tabSize}<template #default="{ item }">
${tabSize}</template>
</el-autocomplete>`,
  "el-cascader": `<el-cascader v-model="\${1:value}" :options="options" @change="handleChange" clearable filterable />`,
  "el-cascader:last-level": `<el-cascader v-model="\${1:value}" :options="options" @change="handleChange" clearable filterable :show-all-levels="false" />`,
  "el-cascader:multiple": `<el-cascader v-model="\${1:value}" :options="options" @change="handleChange" clearable filterable :props="{ multiple: true }" />`,
  "el-cascader:strictly": `<el-cascader v-model="\${1:value}" :options="options" @change="handleChange" clearable filterable :props="{ checkStrictly: true }" />`,
  "el-checkbox": `<el-checkbox v-model="\${1:checked}">$2</el-checkbox>`,
  "el-checkbox:disabled": `<el-checkbox v-model="\${1:checked}" disabled>$2</el-checkbox>`,
  "el-checkbox-group": `<el-checkbox-group v-model="\${1:checkList}">
${tabSize}<el-checkbox label="\${2:label}" value="\${3:value}"></el-checkbox>
</el-checkbox-group>`,
  "el-checkbox-group:for": `<el-checkbox-group v-model="\${1:checkList}">
${tabSize}<el-checkbox v-for="item in \${2:options}" :label="item.label" :value="item.value"></el-checkbox>
</el-checkbox-group>`,
  "el-color-picker": `<el-color-picker v-model="\${1:color}" />`,
  "el-color-picker:alpha": `<el-color-picker v-model="\${1:color}" show-alpha />`,
  "el-color-picker:predefine": `<el-color-picker v-model="\${1:color}" show-alpha :predefine="\${2:predefineColors}" />`,
  "el-date-picker": `<el-date-picker v-model="\${1:value}" type="\${2:date}" placeholder="${l10n.t('el-date-picker:placeholder')}" />`,
  "el-date-picker:shortcuts": `<el-date-picker v-model="\${1:value}" type="\${2:date}" placeholder="${l10n.t('el-date-picker:placeholder')}" :shortcuts="\${3:shortcuts}" />`,
  "el-date-picker:range": `<el-date-picker v-model="\${1:value}" type="\${2:daterange}" range-separator="\${3:${l10n.t('el-date-picker.to')}}" start-placeholder="${l10n.t('el-date-picker.start-placeholder')}" end-placeholder="${l10n.t('el-date-picker.end-placeholder')}" />`,
  "el-datetime-picker": `<el-date-picker v-model="\${1:value}" type="\${2:datetime}" placeholder="${l10n.t('el-date-picker:placeholder')}" />`,
  "el-datetime-picker:shortcuts": `<el-date-picker v-model="\${1:value}" type="\${2:datetime}" placeholder="${l10n.t('el-date-picker:placeholder')}" :shortcuts="\${3:shortcuts}" />`,
  "el-datetime-picker:range": `<el-date-picker v-model="\${1:value}" type="\${2:datetimerange}" range-separator="\${3:${l10n.t('el-date-picker.to')}}" start-placeholder="${l10n.t('el-date-picker.start-placeholder')}" end-placeholder="${l10n.t('el-date-picker.end-placeholder')}" />`,
  "el-form": `<el-form :model="\${1:form}" :rules="\${2:rules}" label-width="auto">
${tabSize}$3
</el-form>`,
"el-form:inline": `<el-form :inline="true" :model="\${1:form}" :rules="\${2:rules}" label-width="auto">
${tabSize}$3
</el-form>`,
  "el-form-item": `<el-form-item label="\${1:name}">
${tabSize}$2
</el-form-item>`,
"el-form-item:required": `<el-form-item label="\${1:name}" required>
${tabSize}$2
</el-form-item>`,
  "el-input": `<el-input v-model="\${1:value}" placeholder="${l10n.t('placeholder')}" clearable>$2</el-input>`,
  "el-input:textarea": `<el-input v-model="\${1:textarea}" type="textarea" :rows="2" placeholder="${l10n.t('placeholder')}" clearable />`,
  "el-input:textarea.limit": `<el-input v-model="\${1:textarea}" type="textarea" :rows="2" placeholder="${l10n.t('placeholder')}" clearable maxlength="$2" show-word-limit />`,
  "el-input:prepend[slot]": `<template #prepend>$1</template>`,
  "el-input:append[slot]": `<template #append>$1</template>`,
  "el-input-number": `<el-input-number v-model="\${1:num}" :min="\${2:1}" :max="\${3:10}" />`,
  "el-input-number:step": `<el-input-number v-model="\${1:num}" :min="\${2:1}" :max="\${3:10}" :step="\${4:2}" />`,
  "el-radio-group": `<el-radio-group v-model="\${1:radio}">
${tabSize}<el-radio value="$2">$3</el-radio>
</el-radio-group>`,
"el-radio-group:for": `<el-radio-group v-model="\${1:radio}">
${tabSize}<el-radio v-for="item in \${2:radios}" :value="item.value">{{ item.label }}</el-radio>
</el-radio-group>`,
"el-radio": `<el-radio :value="$1">$2</el-radio>`,
"el-radio-button": `<el-radio-button label="$1" value="$2"></el-radio-button>`,
"el-rate": `<el-rate v-model="\${1:value}" />`,
"el-rate:show-text": `<el-rate v-model="\${1:value}" texts="['oops', 'disappointed', 'normal', 'good', 'great']" show-text />`,
"el-rate:allow-half": `<el-rate v-model="\${1:value}" allow-half />`,
"el-select": `<el-select v-model="\${1:value}" placeholder="${l10n.t('placeholder:select')}" filterable clearable>
${tabSize}<el-option label="$2" value="$3" />$4
</el-select>`,
"el-select:for": `<el-select v-model="\${1:value}" placeholder="${l10n.t('placeholder:select')}" filterable clearable>
${tabSize}<el-option v-for="item in \${2:options}" :key="item.value" :label="item.label" :value="item.value" />
</el-select>`,
"el-option": `<el-option label="$1" value="$2" />`,
"el-select:header[slot]": `<template #header>
${tabSize}$1
</template>`,
"el-select:footer[slot]": `<template #footer>
${tabSize}$1
</template>`,
"el-option-group": `<el-option-group v-for="group in \${1:options}" :key="group.label" :label="group.label">
${tabSize}<el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value" />
</el-option-group>`,
"el-select-v2": `<el-select-v2 v-model="\${1:value}" :options="\${2:options}" placeholder="${l10n.t('placeholder:select')}" filterable clearable >$3</el-select-v2>`,
"el-select-v2:multiple": `<el-select-v2 v-model="\${1:value}" :options="\${2:options}" placeholder="${l10n.t('placeholder:select')}" filterable clearable multiple >$3</el-select-v2>`,
"el-select-v2:header[slot]": `<template #header>
${tabSize}$1
</template>`,
"el-select-v2:footer[slot]": `<template #footer>
${tabSize}$1
</template>`,
"el-slider": `<el-slider v-model="\${1:value}" />`,
"el-slider:show-input": `<el-slider v-model="\${1:value}" show-input />`,
"el-slider:step": `<el-slider v-model="\${1:value}" :step="\${2:10}" />`,
"el-slider:range": `<el-slider v-model="\${1:value}" range show-stops :max="\${2:10}" />`,
"el-slider:marks": `<el-slider v-model="\${1:value}" range :marks="\${2:marks}" />`,
"el-switch": `<el-switch v-model="\${1:value}" />`,
"el-switch:text": `<el-switch v-model="\${1:value}" active-text="$2" inactive-text="$3" />`,
"el-switch:value": `<el-switch v-model="\${1:value}" active-value="$2" inactive-value="$3" />`,
"el-time-picker": `<el-time-picker v-model="\${1:value}" placeholder="${l10n.t('placeholder:time')}" />`,
"el-time-picker:range": `<el-time-picker v-model="\${1:value}" is-range range-separator="${l10n.t('el-time-picker.to')}" start-placeholder="${l10n.t('el-time-picker.start-placeholder')}" end-placeholder="${l10n.t('el-time-picker.end-placeholder')}" />`,
"el-time-select": `<el-time-select v-model="\${1:value}" start="08:30" step="00:15" end="18:30" placeholder="${l10n.t('el-time-select.placeholder')}" />`,
"el-transfer": `<el-transfer v-model="\${1:value}" :data="\${2:data}" />`,
"el-transfer:filter": `<el-transfer v-model="\${1:value}" filterable :filter-method="\${2:filterMethod}" filter-placeholder="${l10n.t('el-transfer.placeholder')}" :data="\${3:data}" />" />`,
"el-upload": `<el-upload v-model:file-list="fileList" action="" multiple :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" :limit="3" :on-exceed="handleExceed" >
${tabSize}<el-button type="primary">$1</el-button>$2
</el-upload>`,
"el-upload:tip[slot]": `<template #tip>
${tabSize}$1
</template>`,
"el-upload:trigger[slot]": `<template #trigger>
${tabSize}$1
</template>`,
"el-upload:avatar": `<el-upload action="" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload" >
${tabSize}<img v-if="imageUrl" :src="imageUrl" />
${tabSize}<el-icon v-else><Plus /></el-icon>
</el-upload>`,
"el-upload:list": `<el-upload v-model:file-list="fileList" action="" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove" >
${tabSize}<el-icon><Plus /></el-icon>
</el-upload>`,
"el-upload:drag": `<el-upload drag action="" multiple >
${tabSize}<el-icon class="el-icon--upload"><upload-filled /></el-icon>
${tabSize}<div class="el-upload__text"> ${l10n.t('el-upload.drop')} <em>${l10n.t('el-upload.click')}</em> </div>
</el-upload>`,
"el-avatar": `<el-avatar :src="\${1:url}">$2</el-avatar>`,
"el-avatar:square": `<el-avatar shape="square" :src="\${1:url}">$2</el-avatar>`,
"el-badge": `<el-badge :value="$1">$2</el-badge>`,
"el-badge:is-dot": `<el-badge is-dot></el-badge>`,
"el-calendar": `<el-calendar v-model="\${1:value}">$2</el-calendar>`,
"el-calendar:cell[slot]": `<template #date-cell="{ data }">
${tabSize}$1
</template>`,
"el-card": `<el-card>
${tabSize}$1
</el-card>`,
"el-card:header[slot]": `<template #header>
${tabSize}$1
</template>`,
"el-card:footer[slot]": `<template #footer>
${tabSize}$1
</template>`,
"el-carousel": `<el-carousel :interval="4000" height="\${1:150px}">
${tabSize}<el-carousel-item v-for="item in \${2:carouselList}" :key="item">
${tabSize}${tabSize}$3
${tabSize}</el-carousel-item>
</el-carousel>`,
"el-carousel:card": `<el-carousel :interval="4000" type="card" height="\${1:150px}">
${tabSize}<el-carousel-item v-for="item in \${2:carouselList}" :key="item">
${tabSize}${tabSize}$3
${tabSize}</el-carousel-item>
</el-carousel>`,
"el-collapse": `<el-collapse v-model="\${1:activeNames}" @change="handleChange">
${tabSize}<el-collapse-item title="$2" name="$3">
${tabSize}${tabSize}$4
${tabSize}</el-collapse-item>$5
</el-collapse>`,
"el-collapse:accordion": `<el-collapse v-model="\${1:activeNames}" accordion @change="handleChange">
${tabSize}<el-collapse-item title="$2" name="$3">
${tabSize}${tabSize}$4
${tabSize}</el-collapse-item>$5
</el-collapse>`,
"el-collapse-item": `<el-collapse-item title="$1" name="$2">
${tabSize}$3
</el-collapse-item>`,
"el-descriptions": `<el-descriptions title="$1">
${tabSize}<el-descriptions-item label="$2">$3</el-descriptions-item>$4
</el-descriptions>`,
"el-descriptions:extra[slot]": `<template #extra>
${tabSize}$1
</template>`,
"el-descriptions-item": `<el-descriptions-item label="$1">$2</el-descriptions-item>`,
"el-descriptions-item:label[slot]": `<template #label>
${tabSize}$1
</template>`,
"el-empty": `<el-empty description="$1">$2</el-empty>`,
"el-image": `<el-image :src="$1" fit="fill" />`,
"el-image:placeholder[slot]": `<template #placeholder>
${tabSize}$1
</template>`,
"el-image:error[slot]": `<template #error>
${tabSize}$1
</template>`,
"el-image:lazy": `<el-image v-for="url in \${1:urls}" :key="url" :src="url" lazy />`,
"el-image:preview": `el-image :src="url" :zoom-rate="1.2" :max-scale="7" :min-scale="0.2" :preview-src-list="srcList" :initial-index="4" fit="cover" />`,
"el-pagination": `<el-pagination
${tabSize}v-model:current-page="currentPage"
${tabSize}v-model:page-size="pageSize"
${tabSize}:page-sizes="[10, 20, 50, 100, 200]"
${tabSize}layout="total, sizes, prev, pager, next, jumper"
${tabSize}:total="total"
${tabSize}@size-change="handleSizeChange"
${tabSize}@current-change="handleCurrentChange">
</el-pagination>`,
"el-progress": `<el-progress :percentage="$1"></el-progress>`,
"el-progress:inside": `<el-progress :text-inside="true" :stroke-width="$1" :percentage="$2"></el-progress>`,
"el-progress:circle": `<el-progress type="circle" :percentage="$1"></el-progress>`,
"el-progress:dashboard": `<el-progress type="dashboard" :percentage="\${1:percentage}" :color="\${2:colors}"></el-progress>`,
"el-progress:default[slot]": `<template #default="{ percentage }">
${tabSize}$1
</template>`,
"el-result": `<el-result icon="\${1:success}" title="\${2:Success}" sub-title="\${3:Please follow the instructions}">
${tabSize}<template #extra>
${tabSize}${tabSize}<el-button type="primary">Back</el-button>
${tabSize}</template>
</el-result>`,
"el-result:extra[slot]": `<template #extra>
${tabSize}$1
</template>`,
"el-result:icon[slot]": `<template #icon>
${tabSize}$1
</template>`,
"el-skeleton": `<el-skeleton :rows="\${1:5}">$2</el-skeleton>`,
"el-skeleton:template[slot]": `<template #template>
${tabSize}$1
</template>`,
"el-skeleton-item:circle": `<el-skeleton-item variant="circle" />`,
"el-skeleton-item:p": `<el-skeleton-item variant="p" />`,
"el-skeleton-item:text": `<el-skeleton-item variant="text" />`,
"el-skeleton-item:image": `<el-skeleton-item variant="image" />`,
"el-table": `<el-table :data="\${1:tableData}" style="width: 100%">
${tabSize}<el-table-column label="$2" prop="$3" width="$4">$5</el-table-column>$6
</el-table>`,
"el-table:stripe": `<el-table :data="\${1:tableData}" stripe style="width: 100%">
${tabSize}<el-table-column label="$2" prop="$3" width="$4">$5</el-table-column>$6
</el-table>`,
"el-table-column": `<el-table-column label="$1" prop="$2" width="$3">$4</el-table-column>`,
"el-table-column:filter": `<el-table-column label="$1" prop="$2" width="$3" :filters="\${4:filters}" :filter-method="\${5:filterHandler}">$6</el-table-column>`,
"el-table-column:sortable": `<el-table-column label="$1" prop="$2" width="$3" sortable>$4</el-table-column>`,
"el-table-column:fixed": `<el-table-column fixed="\${1:left}" label="$2" prop="$3" width="$4">$5</el-table-column>`,
"el-table-column:select": `<el-table ref="multipleTableRef" :data="\${1:tableData}" style="width: 100%" @selection-change="\${2:handleSelectionChange}" >
${tabSize}<el-table-column type="selection" width="55"></el-table-column>$3
</el-table>`,
"el-table-column:default[slot]": `<template #default="scope">
${tabSize}$1
</template>`,
"el-table-column:header[slot]": `<template #header>
${tabSize}$1
</template>`,
"el-table-column:expand": `<el-table-column type="expand">
${tabSize}<template #default="props">
${tabSize}${tabSize}$1
${tabSize}</template>
</el-table-column>`,
"el-table:tree": `<el-table :data="\${1:tableData}" style="width: 100%" row-key="\${2:id}" border lazy :load="load" :tree-props="{ children: 'children', hasChildren: 'hasChildren' }">
${tabSize}$3
</el-table>`,
"el-table-v2": `<el-table-v2 :columns="\${1:columns}" :data="\${2:data}" :width="700" :height="400" fixed>$3</el-table-v2>`,
"el-table-v2:row[slot]": `<template #row="props">
${tabSize}$1
</template>`,
"el-table-v2:header[slot]": `<template #header>
${tabSize}$1
</template>`,
"el-table-v2:header-cell[slot]": `<template #header-cell>
${tabSize}$1
</template>`,
"el-table-v2:footer[slot]": `<template #footer>
${tabSize}$1
</template>`,
"el-table-v2:empty[slot]": `<template #empty>
${tabSize}$1
</template>`,
"el-table-v2:overlay[slot]": `<template #overlay>
${tabSize}$1
</template>`,
"el-tag": ` <el-tag type="\${1:success}">$2</el-tag>`,
"el-tag:effect": ` <el-tag type="\${1:success}" effect="\${2:dark}">$3</el-tag>`,
"el-tag:closable": ` <el-tag type="\${1:success}" closable>$2</el-tag>`,
"el-tag:round": ` <el-tag type="\${1:success}" round>$2</el-tag>`,
"el-check-tag":  `<el-check-tag :checked="\${1:checked}" @change="\${2:onChange}">$3</el-check-tag>`,
"el-timeline": `<el-timeline>
${tabSize}$1
</el-timeline>`,
"el-timeline:for": `<el-timeline>
<el-timeline-item
  v-for="(activity, index) in \${1:activities}"
  :key="index"
  :timestamp="activity.timestamp"
>
  {{ \${2:activity.content} }}
</el-timeline-item>
</el-timeline>`,
"el-timeline-item": `<el-timeline-item timestamp="$1">
${tabSize}$2
</el-timeline-item>`,
"el-timeline-item:center": `<el-timeline-item timestamp="$1" center>
${tabSize}$2
</el-timeline-item>`,
"el-tour": `<el-tour v-model="\${1:open}">
${tabSize}$2
</el-tour>`,
"el-tour-step": `<el-tour-step :target="\${1:tourRef}?.\\$el" title="$2">
${tabSize}$3
</el-tour-step>`,
"el-tour:indicators[slot]": `<template #indicators="{ current, total }">
${tabSize}$1
</template>`,
"el-tree": `<el-tree :data="\${1:data}" :props="\${2:treeProps}" @node-click="\${3:handleNodeClick}">$4</el-tree>`,
"el-tree:accordion": `<el-tree :data="\${1:data}" :props="\${2:treeProps}" accordion @node-click="\${3:handleNodeClick}">$4</el-tree>`,
"el-tree:show-checkbox": `<el-tree :data="\${1:data}" :props="\${2:treeProps}" show-checkbox @node-click="\${3:handleNodeClick}">$4</el-tree>`,
"el-tree:lazy": `<el-tree :load="\${1:loadNode}" lazy :props="\${2:treeProps}" show-checkbox @node-click="\${3:handleNodeClick}">$4</el-tree>`,
"el-tree:default[slot]": `<template #default="{ node, data }">
${tabSize}$1
</template>`,
"el-tree:draggable": `<el-tree :allow-drop="allowDrop" :allow-drag="allowDrag" :data="data" draggable default-expand-all node-key="id"
${tabSize}@node-drag-start="handleDragStart" @node-drag-enter="handleDragEnter" @node-drag-leave="handleDragLeave" @node-drag-over="handleDragOver" @node-drag-end="handleDragEnd" @node-drop="handleDrop">
</el-tree>`,
"el-tree-select": `<el-tree-select v-model="\${1:value}" :data="\${2:data}" :render-after-expand="false">$3</el-tree-select>`,
"el-tree-select:lazy": `<el-tree-select v-model="\${1:value}" lazy :load="\${2:load}" :props="\${3:props}">$4</el-tree-select>`,
"el-tree-select:multiple": `<el-tree-select v-model="\${1:value}" :data="\${2:data}" filterable clearable multiple :render-after-expand="false">$3</el-tree-select>`,
"el-tree-select:check-strictly": `<el-tree-select v-model="\${1:value}" :data="\${2:data}" filterable clearable check-strictly :render-after-expand="false">$3</el-tree-select>`,
"el-tree-select:show-checkbox": `<el-tree-select v-model="\${1:value}" :data="\${2:data}" filterable clearable :render-after-expand="false" show-checkbox>$3</el-tree-select>`,
"el-tree-v2": `<el-tree-v2 :data="\${1:data}" :props="\${2:props}">$3</el-tree-v2>`,
"el-tree-v2:show-checkbox": `<el-tree-v2 :data="\${1:data}" :props="\${2:props}" show-checkbox>$3</el-tree-v2>`,
"el-tree-v2:default[slot]": `<template #default="{ node }">
${tabSize}$1
</template>`,
"el-statistic": `<el-statistic title="$1" :value="$2">$3</el-statistic>`,
"el-statistic:title[slot]": `<template #title>
${tabSize}$1
</template>`,
"el-statistic:suffix[slot]": `<template #suffix>
${tabSize}$1
</template>`,
"el-countdown": `<el-countdown title="$1" :value="$2">$3</el-countdown>`,
"el-countdown:format": `<el-countdown title="$1" :value="$2" format="HH:mm:ss">$3</el-countdown>`,
"el-countdown:title[slot]": `<template #title>
${tabSize}$1
</template>`,
"el-countdown:suffix[slot]": `<template #suffix>
${tabSize}$1
</template>`,
"el-segmented": `<el-segmented v-model="\${1:value}" :options="\${2:options}">$3</el-segmented>`,
"el-segmented:block": `<el-segmented v-model="\${1:value}" :options="\${2:options}" block>$3</el-segmented>`,
"el-segmented:default[slot]": `<template #default="{ item }">
${tabSize}$1
</template>`,
"el-affix": `<el-affix :offset="$1">
${tabSize}$2
</el-affix>`,
"el-affix:target": `<el-affix :offset="$1" target="$2">
${tabSize}$3
</el-affix>`,
"el-affix:position": `<el-affix :offset="$1" position="\${2:bottom}">
${tabSize}$3
</el-affix>`,
"el-anchor": `<el-anchor>
${tabSize}<el-anchor-link :href="$1">
${tabSize}${tabSize}$2
${tabSize}</el-anchor-link>$3
</el-anchor>`,
"el-anchor:horizontal": `<el-anchor direction="horizontal">
${tabSize}<el-anchor-link :href="$1">
${tabSize}${tabSize}$2
${tabSize}</el-anchor-link>$3
</el-anchor>`,
"el-anchor-link": `<el-anchor-link :href="$1">
${tabSize}$2
</el-anchor-link>`,
"el-anchor-link:sub-link[slot]": `<template #sub-link>
${tabSize}$1
</template>`,
"el-backtop": `<el-backtop :right="100" :bottom="100">$1</el-backtop>`,
"el-breadcrumb": `<el-breadcrumb separator="\${1:/}">
${tabSize}$2
</el-breadcrumb>`,
"el-breadcrumb-item": `<el-breadcrumb-item>$1</el-breadcrumb-item>`,
"el-breadcrumb-item:to": `<el-breadcrumb-item :to="{ path: '\${1:/}' }">$2</el-breadcrumb-item>`,
"el-dropdown": `<el-dropdown>
${tabSize}$1<el-button type="primary">
${tabSize}${tabSize}Dropdown <el-icon class="el-icon--right"><arrow-down /></el-icon>
${tabSize}</el-button>
${tabSize}<template #dropdown>
${tabSize}${tabSize}<el-dropdown-menu>
${tabSize}${tabSize}${tabSize}<el-dropdown-item>$2</el-dropdown-item>
${tabSize}${tabSize}</el-dropdown-menu>
${tabSize}</template>
</el-dropdown>`,
"el-dropdown:trigger": `<el-dropdown trigger="click">
${tabSize}$1<el-button type="primary">
${tabSize}${tabSize}Dropdown <el-icon class="el-icon--right"><arrow-down /></el-icon>
${tabSize}</el-button>
${tabSize}<template #dropdown>
${tabSize}${tabSize}<el-dropdown-menu>
${tabSize}${tabSize}${tabSize}<el-dropdown-item>$2</el-dropdown-item>
${tabSize}${tabSize}</el-dropdown-menu>
${tabSize}</template>
</el-dropdown>`,
"el-dropdown:command": `<el-dropdown @command="\${1:handleCommand}">
${tabSize}$2<el-button type="primary">
${tabSize}${tabSize}Dropdown <el-icon class="el-icon--right"><arrow-down /></el-icon>
${tabSize}</el-button>
${tabSize}<template #dropdown>
${tabSize}${tabSize}<el-dropdown-menu>
${tabSize}${tabSize}${tabSize}<el-dropdown-item command="$3">$4</el-dropdown-item>
${tabSize}${tabSize}</el-dropdown-menu>
${tabSize}</template>
</el-dropdown>`,
"el-dropdown-item": `<el-dropdown-item>$1</el-dropdown-item>`,
"el-dropdown-item:command": `<el-dropdown-item command="$1">$2</el-dropdown-item>`,
"el-menu": `<el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
${tabSize}$1
</el-menu>`,
"el-menu-item": `<el-menu-item index="$1">$2</el-menu-item>`,
"el-sub-menu": `<el-sub-menu index="$1">$2</el-sub-menu>`,
"el-sub-menu:title[slot]": `<template #title>
${tabSize}$1
</template>`,
"el-menu:collapse": `<el-menu :default-active="activeIndex" mode="horizontal" :collapse="isCollapse" @open="handleOpen" @close="handleClose">
${tabSize}$1
</el-menu>`,
"el-page-header": `<el-page-header title="${l10n.t('el-page-header.title')}" @back="onBack">
${tabSize}<template #content>
${tabSize}${tabSize}$1
${tabSize}</template>
</el-page-header>`,
"el-page-header:breadcrumb[slot]": `<template #breadcrumb>
${tabSize}$1
</template>`,
"el-page-header:content[slot]": `<template #content>
${tabSize}$1
</template>`,
"el-page-header:extra[slot]": `<template #extra>
${tabSize}$1
</template>`,
"el-steps": `<el-steps :active="\${1:active}" finish-status="\${2:success}">
<el-step title="$3"></el-step>$4
</el-steps>`,
"el-steps:align-center": `<el-steps :active="\${1:active}" finish-status="\${2:success}" align-center>
<el-step title="$3"></el-step>$4
</el-steps>`,
"el-steps:vertical": `<el-steps :active="\${1:active}" finish-status="\${2:success}" direction="vertical">
<el-step title="$3"></el-step>$4
</el-steps>`,
"el-step": `<el-step title="$1">$2</el-step>`,
"el-step:icon[slot]": `<template #icon>
${tabSize}$1
</template>`,
"el-step:title[slot]": `<template #title>
${tabSize}$1
</template>`,
"el-step:description[slot]": `<template #description>
${tabSize}$1
</template>`,
"el-tabs": `<el-tabs v-model="\${1:activeName}" @tab-click="\${2:handleClick}">
${tabSize}<el-tab-pane label="$3" name="$4">$5</el-tab-pane>$6
</el-tabs>`,
"el-tabs:card": `<el-tabs v-model="\${1:activeName}" type="card" @tab-click="\${2:handleClick}">
${tabSize}<el-tab-pane label="$3" name="$4">$5</el-tab-pane>$6
</el-tabs>`,
"el-tab-pane": `<el-tab-pane label="$1" name="$2">$3</el-tab-pane>`,
"el-tab-pane:label[slot]": `<template #label>
${tabSize}$1
</template>`,
"el-tabs:editable": `<el-tabs v-model="\${1:activeName}" editable @edit="\${2:handleTabsEdit}">
${tabSize}<el-tab-pane label="$3" name="$4">$5</el-tab-pane>$6
</el-tabs>`,
"el-tabs:add-icon[slot]": `<template #add-icon>
${tabSize}$1
</template>`,
"el-alert": `<el-alert title="$1" type="success">$2</el-alert>`,
"el-alert:show-icon": `<el-alert title="$1" type="success" show-icon>$2</el-alert>`,
"el-alert:effect": `<el-alert title="$1" type="success" effect="dark">$2</el-alert>`,
"el-alert:title[slot]": `<template #title>
${tabSize}$1
</template>`,
"el-dialog": `<el-dialog v-model="\${1:visible}" title="$2" width="600px" :before-close="handleClose" >
${tabSize}$3
${tabSize}<template #footer>
${tabSize}${tabSize}<div class="dialog-footer">
${tabSize}${tabSize}${tabSize}<el-button @click="closeDialog">${l10n.t('el-dialog.cancel')}</el-button>
${tabSize}${tabSize}${tabSize}<el-button type="primary" @click="confirmDialog">${l10n.t('el-dialog.confirm')}</el-button>
${tabSize}${tabSize}</div>
${tabSize}</template>
</el-dialog>`,
"el-dialog:draggable": `<el-dialog v-model="\${1:visible}" title="$2" width="600px" draggable :before-close="handleClose" >
${tabSize}$3
${tabSize}<template #footer>
${tabSize}${tabSize}<div class="dialog-footer">
${tabSize}${tabSize}${tabSize}<el-button @click="closeDialog">${l10n.t('el-dialog.cancel')}</el-button>
${tabSize}${tabSize}${tabSize}<el-button type="primary" @click="confirmDialog">${l10n.t('el-dialog.confirm')}</el-button>
${tabSize}${tabSize}</div>
${tabSize}</template>
</el-dialog>`,
"el-dialog:append-to-body": `<el-dialog v-model="\${1:visible}" title="$2" width="600px" append-to-body :before-close="handleClose" >
${tabSize}$3
${tabSize}<template #footer>
${tabSize}${tabSize}<div class="dialog-footer">
${tabSize}${tabSize}${tabSize}<el-button @click="closeDialog">${l10n.t('el-dialog.cancel')}</el-button>
${tabSize}${tabSize}${tabSize}<el-button type="primary" @click="confirmDialog">${l10n.t('el-dialog.confirm')}</el-button>
${tabSize}${tabSize}</div>
${tabSize}</template>
</el-dialog>`,
"el-dialog:header[slot]": `<template #header="{ close, titleId, titleClass }">
${tabSize}$1
</template>`,
"el-drawer": `<el-drawer v-model="\${1:drawer}" title="$2" direction="rtl">
${tabSize}$3
</el-drawer>`,
"el-drawer:append-to-body": `<el-drawer v-model="\${1:drawer}" title="$2" direction="rtl" :append-to-body="true">
${tabSize}$3
</el-drawer>`,
"el-drawer:default[slot]": `<template #default>
${tabSize}$1
</template>`,
"el-drawer:header[slot]": `<template #header>
${tabSize}$1
</template>`,
"el-drawer:footer[slot]": `<template #footer>
${tabSize}$1
</template>`,
"el-popconfirm": `<el-popconfirm title="${l10n.t('el-popconfirm.title')}" confirm-button-text="${l10n.t('el-popconfirm.confirm-text')}" cancel-button-text="${l10n.t('el-popconfirm.cancel-text')}" @confirm="confirmEvent" @cancel="cancelEvent">
${tabSize}<template #reference>
${tabSize}${tabSize}<el-button type="danger" :icon="Delete">\${1:${l10n.t('el-popconfirm.button-text')}}</el-button>
${tabSize}</template>
</el-popconfirm>`,
"el-popover": `<el-popover placement="top-start" title="$1" :width="\${2:200}" trigger="\${3:hover}">
${tabSize}<template #reference>
${tabSize}${tabSize}<el-button>$4</el-button>
${tabSize}</template>
${tabSize}<template #default>
${tabSize}${tabSize}$5
${tabSize}</template>
</el-popover>`,
"el-tooltip": `<el-tooltip effect="dark" content="$1" placement="\${2:top}">
${tabSize}$3
</el-tooltip>`,
"el-tooltip:content": `<el-tooltip effect="dark">
${tabSize}$3
${tabSize}<template #content>
${tabSize}${tabSize}$4
${tabSize}</template>
</el-tooltip>`,
"el-tooltip:content[slot]": `<template #content>
${tabSize}$1
</template>`,
"el-divider": `<el-divider>$1</el-divider>`,
"el-divider:dashed": `<el-divider border-style="\${1:dashed}">$2</el-divider>`,
"el-divider:vertical": `<el-divider direction="vertical">$1</el-divider>`,
"el-watermark": `<el-watermark :font="{ color: 'rgba(0, 0, 0, .15)' }">
${tabSize}$1
</el-watermark>`,
"el-watermark:image": `<el-watermark :width="$1" :height="$2" :image="$3">
${tabSize}$4
</el-watermark>`
  }

}