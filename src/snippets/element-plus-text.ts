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
  }

}