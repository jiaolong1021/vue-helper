"use strict";
var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// out/util/util.js
var require_util = __commonJS({
  "out/util/util.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getRelativePath = exports2.getCurrentWord = exports2.getTabSize = exports2.getWorkspaceRoot = exports2.winRootPathHandle = void 0;
    var vscode_12 = require("vscode");
    var os = require("os");
    var path = require("path");
    function winRootPathHandle(pagePath) {
      if (os.platform().includes("win") && pagePath.length > 0 && (pagePath[0] === "\\" || pagePath[0] === "/")) {
        return pagePath.substr(1, pagePath.length);
      } else {
        return pagePath;
      }
    }
    exports2.winRootPathHandle = winRootPathHandle;
    function getWorkspaceRoot(documentUrl) {
      var _a, _b;
      let url = "";
      if (((_a = vscode_12.workspace.workspaceFolders) === null || _a === void 0 ? void 0 : _a.length) === 1) {
        return winRootPathHandle(vscode_12.workspace.workspaceFolders[0].uri.path);
      }
      (_b = vscode_12.workspace.workspaceFolders) === null || _b === void 0 ? void 0 : _b.forEach((workspaceFolder) => {
        if (documentUrl.includes(workspaceFolder.uri.path)) {
          url = workspaceFolder.uri.path;
        }
      });
      return winRootPathHandle(url);
    }
    exports2.getWorkspaceRoot = getWorkspaceRoot;
    function getTabSize() {
      const tabSize = vscode_12.workspace.getConfiguration("editor").tabSize;
      let space = "";
      for (let i = 0; i < tabSize; i++) {
        space += " ";
      }
      if (space.length === 0) {
        space = "  ";
      }
      return space;
    }
    exports2.getTabSize = getTabSize;
    function getCurrentWord(document, position) {
      let i = position.character - 1;
      const text = document.lineAt(position.line).text;
      while (i >= 0 && ' 	\n\r\v":{[,'.indexOf(text.charAt(i)) === -1) {
        i--;
      }
      return text.substring(i + 1, position.character);
    }
    exports2.getCurrentWord = getCurrentWord;
    function getRelativePath(src, dist) {
      let vfPath = path.relative(winRootPathHandle(src), dist);
      vfPath = vfPath.replace(/\\/gi, "/");
      if (vfPath.startsWith("../")) {
        vfPath = vfPath.substr(1, vfPath.length);
      }
      return vfPath;
    }
    exports2.getRelativePath = getRelativePath;
  }
});

// out/util/traverse.js
var require_traverse = __commonJS({
  "out/util/traverse.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var fs = require("fs");
    var path = require("path");
    var Traverse = class {
      constructor(rootPath) {
        this.rootPath = rootPath;
      }
      search(poster, searchName) {
        let files = [];
        let cond;
        let componentPath = "";
        let prefix = {
          alias: "@",
          path: "src"
        };
        if (componentPath && Array.isArray(componentPath) && componentPath.length > 0) {
          cond = function(rootPath) {
            return componentPath.indexOf(rootPath) !== -1;
          };
        } else {
          let ignore = ["node_modules", "dist", "build"];
          cond = function(rootPath) {
            return !(rootPath.charAt(0) === "." || ignore.indexOf(rootPath) !== -1);
          };
        }
        let rootPathes = fs.readdirSync(this.rootPath || "");
        for (let i = 0; i < rootPathes.length; i++) {
          const rootPath = rootPathes[i];
          if (cond(rootPath)) {
            let stat = fs.statSync(path.join(this.rootPath || "", rootPath));
            if (stat.isDirectory()) {
              this.traverseHandle(rootPath, files, prefix, poster, searchName);
            } else {
              this.traverseAdd(rootPath, rootPath, files, prefix, poster, searchName);
            }
          }
        }
        return files;
      }
      traverseAdd(rootPath, dir, files, prefix, poster, search) {
        if (rootPath.endsWith(poster)) {
          let posterReg = new RegExp("-?(.*)" + (poster ? poster : "\\.\\w*") + "$", "gi");
          let name = rootPath;
          name = name.replace(posterReg, "$1");
          if (!search || search && dir.includes(search)) {
            files.push({
              name,
              path: dir.replace(new RegExp(`^${prefix.path}`, "gi"), prefix.alias).replace(/\\/gi, "/")
            });
            if (name === "index") {
              name = dir.replace(/.*\/(\w*)\/\w*.\w*/gi, "$1");
              files.push({
                name,
                path: dir.replace(new RegExp(`^${prefix.path}`, "gi"), prefix.alias).replace(/\\/gi, "/")
              });
            }
          }
        }
      }
      traverseHandle(postPath, files, prefix, poster, search) {
        let fileDirs = fs.readdirSync(path.join(this.rootPath || "", postPath));
        for (let i = 0; i < fileDirs.length; i++) {
          const rootPath = fileDirs[i];
          if (!(rootPath.charAt(0) === ".")) {
            let dir = path.join(postPath, rootPath);
            let stat = fs.statSync(path.join(this.rootPath || "", dir));
            if (stat.isDirectory()) {
              this.traverseHandle(dir, files, prefix, poster, search);
            } else {
              this.traverseAdd(rootPath, dir, files, prefix, poster, search);
            }
          }
        }
      }
    };
    exports2.default = Traverse;
  }
});

// out/explorer.js
var require_explorer = __commonJS({
  "out/explorer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var util_1 = require_util();
    var traverse_1 = require_traverse();
    var ExplorerProvider = class {
      constructor(context) {
        this.projectRootPath = "";
        this.tabSize = "";
        this.context = context;
        this.projectRootPath = (0, util_1.getWorkspaceRoot)("");
        this.traverse = new traverse_1.default(this.projectRootPath);
        this.tabSize = (0, util_1.getTabSize)();
      }
      register() {
      }
    };
    exports2.default = ExplorerProvider;
  }
});

// out/frameworks/element-plus/tag.js
var require_tag = __commonJS({
  "out/frameworks/element-plus/tag.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var vscode_12 = require("vscode");
    exports2.default = (tabSize) => {
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
        "el-autocomplete": `<el-autocomplete v-model="\${1:value}" :fetch-suggestions="querySearch" clearable placeholder="${vscode_12.l10n.t("placeholder")}" @select="handleSelect" />`,
        "el-autocomplete:template": `<el-autocomplete
${tabSize}v-model="\${1:value}"
${tabSize}:fetch-suggestions="querySearch"
${tabSize}placeholder="${vscode_12.l10n.t("placeholder")}"
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
        "el-date-picker": `<el-date-picker v-model="\${1:value}" type="\${2:date}" placeholder="${vscode_12.l10n.t("el-date-picker:placeholder")}" />`,
        "el-date-picker:shortcuts": `<el-date-picker v-model="\${1:value}" type="\${2:date}" placeholder="${vscode_12.l10n.t("el-date-picker:placeholder")}" :shortcuts="\${3:shortcuts}" />`,
        "el-date-picker:range": `<el-date-picker v-model="\${1:value}" type="\${2:daterange}" range-separator="\${3:${vscode_12.l10n.t("el-date-picker.to")}}" start-placeholder="${vscode_12.l10n.t("el-date-picker.start-placeholder")}" end-placeholder="${vscode_12.l10n.t("el-date-picker.end-placeholder")}" />`,
        "el-datetime-picker": `<el-date-picker v-model="\${1:value}" type="\${2:datetime}" placeholder="${vscode_12.l10n.t("el-date-picker:placeholder")}" />`,
        "el-datetime-picker:shortcuts": `<el-date-picker v-model="\${1:value}" type="\${2:datetime}" placeholder="${vscode_12.l10n.t("el-date-picker:placeholder")}" :shortcuts="\${3:shortcuts}" />`,
        "el-datetime-picker:range": `<el-date-picker v-model="\${1:value}" type="\${2:datetimerange}" range-separator="\${3:${vscode_12.l10n.t("el-date-picker.to")}}" start-placeholder="${vscode_12.l10n.t("el-date-picker.start-placeholder")}" end-placeholder="${vscode_12.l10n.t("el-date-picker.end-placeholder")}" />`,
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
        "el-input": `<el-input v-model="\${1:value}" placeholder="${vscode_12.l10n.t("placeholder")}" clearable>$2</el-input>`,
        "el-input:textarea": `<el-input v-model="\${1:textarea}" type="textarea" :rows="2" placeholder="${vscode_12.l10n.t("placeholder")}" clearable />`,
        "el-input:textarea.limit": `<el-input v-model="\${1:textarea}" type="textarea" :rows="2" placeholder="${vscode_12.l10n.t("placeholder")}" clearable maxlength="$2" show-word-limit />`,
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
        "el-select": `<el-select v-model="\${1:value}" placeholder="${vscode_12.l10n.t("placeholder:select")}" filterable clearable>
${tabSize}<el-option label="$2" value="$3" />$4
</el-select>`,
        "el-select:for": `<el-select v-model="\${1:value}" placeholder="${vscode_12.l10n.t("placeholder:select")}" filterable clearable>
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
        "el-select-v2": `<el-select-v2 v-model="\${1:value}" :options="\${2:options}" placeholder="${vscode_12.l10n.t("placeholder:select")}" filterable clearable >$3</el-select-v2>`,
        "el-select-v2:multiple": `<el-select-v2 v-model="\${1:value}" :options="\${2:options}" placeholder="${vscode_12.l10n.t("placeholder:select")}" filterable clearable multiple >$3</el-select-v2>`,
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
        "el-time-picker": `<el-time-picker v-model="\${1:value}" placeholder="${vscode_12.l10n.t("placeholder:time")}" />`,
        "el-time-picker:range": `<el-time-picker v-model="\${1:value}" is-range range-separator="${vscode_12.l10n.t("el-time-picker.to")}" start-placeholder="${vscode_12.l10n.t("el-time-picker.start-placeholder")}" end-placeholder="${vscode_12.l10n.t("el-time-picker.end-placeholder")}" />`,
        "el-time-select": `<el-time-select v-model="\${1:value}" start="08:30" step="00:15" end="18:30" placeholder="${vscode_12.l10n.t("el-time-select.placeholder")}" />`,
        "el-transfer": `<el-transfer v-model="\${1:value}" :data="\${2:data}" />`,
        "el-transfer:filter": `<el-transfer v-model="\${1:value}" filterable :filter-method="\${2:filterMethod}" filter-placeholder="${vscode_12.l10n.t("el-transfer.placeholder")}" :data="\${3:data}" />" />`,
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
${tabSize}<div class="el-upload__text"> ${vscode_12.l10n.t("el-upload.drop")} <em>${vscode_12.l10n.t("el-upload.click")}</em> </div>
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
        "el-tag": ` <el-tag type="\${1:primary}">$2</el-tag>`,
        "el-tag:effect": ` <el-tag type="\${1:primary}" effect="\${2:dark}">$3</el-tag>`,
        "el-tag:closable": ` <el-tag type="\${1:primary}" closable>$2</el-tag>`,
        "el-tag:round": ` <el-tag type="\${1:primary}" round>$2</el-tag>`,
        "el-check-tag": `<el-check-tag :checked="\${1:checked}" @change="\${2:onChange}">$3</el-check-tag>`,
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
        "el-page-header": `<el-page-header title="${vscode_12.l10n.t("el-page-header.title")}" @back="onBack">
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
${tabSize}${tabSize}${tabSize}<el-button @click="closeDialog">${vscode_12.l10n.t("el-dialog.cancel")}</el-button>
${tabSize}${tabSize}${tabSize}<el-button type="primary" @click="confirmDialog">${vscode_12.l10n.t("el-dialog.confirm")}</el-button>
${tabSize}${tabSize}</div>
${tabSize}</template>
</el-dialog>`,
        "el-dialog:draggable": `<el-dialog v-model="\${1:visible}" title="$2" width="600px" draggable :before-close="handleClose" >
${tabSize}$3
${tabSize}<template #footer>
${tabSize}${tabSize}<div class="dialog-footer">
${tabSize}${tabSize}${tabSize}<el-button @click="closeDialog">${vscode_12.l10n.t("el-dialog.cancel")}</el-button>
${tabSize}${tabSize}${tabSize}<el-button type="primary" @click="confirmDialog">${vscode_12.l10n.t("el-dialog.confirm")}</el-button>
${tabSize}${tabSize}</div>
${tabSize}</template>
</el-dialog>`,
        "el-dialog:append-to-body": `<el-dialog v-model="\${1:visible}" title="$2" width="600px" append-to-body :before-close="handleClose" >
${tabSize}$3
${tabSize}<template #footer>
${tabSize}${tabSize}<div class="dialog-footer">
${tabSize}${tabSize}${tabSize}<el-button @click="closeDialog">${vscode_12.l10n.t("el-dialog.cancel")}</el-button>
${tabSize}${tabSize}${tabSize}<el-button type="primary" @click="confirmDialog">${vscode_12.l10n.t("el-dialog.confirm")}</el-button>
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
        "el-popconfirm": `<el-popconfirm title="${vscode_12.l10n.t("el-popconfirm.title")}" confirm-button-text="${vscode_12.l10n.t("el-popconfirm.confirm-text")}" cancel-button-text="${vscode_12.l10n.t("el-popconfirm.cancel-text")}" @confirm="confirmEvent" @cancel="cancelEvent">
${tabSize}<template #reference>
${tabSize}${tabSize}<el-button type="danger" :icon="Delete">\${1:${vscode_12.l10n.t("el-popconfirm.button-text")}}</el-button>
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
      };
    };
  }
});

// out/frameworks/element-plus/jsTag.js
var require_jsTag = __commonJS({
  "out/frameworks/element-plus/jsTag.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var vscode_12 = require("vscode");
    exports2.default = (tabSize) => {
      return {
        "el-rules:required": `{ required: true, message: '', trigger: 'blur' }`,
        "el-rules:max": `{ min: 3, max: 5, message: '', trigger: 'blur' }`,
        "el-form:submit": `const submitForm = async (formEl: FormInstance | undefined) => {
${tabSize}if (!formEl) return
${tabSize}await formEl.validate((valid, fields) => {
${tabSize}${tabSize}if (valid) {
${tabSize}${tabSize}${tabSize}console.log('submit!')
${tabSize}${tabSize}} else {
${tabSize}${tabSize}${tabSize}console.log('error submit!', fields)
${tabSize}${tabSize}}
${tabSize}})
}`,
        "el-form:reset": `const resetForm = (formEl: FormInstance | undefined) => {
${tabSize}if (!formEl) return
${tabSize}formEl.resetFields()
}`,
        "el-upload": `const fileList = ref<UploadUserFile[]>([
])

const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
${tabSize}console.log(file, uploadFiles)
}

const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
${tabSize}console.log(uploadFile)
}

const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {

}

const beforeRemove: UploadProps['beforeRemove'] = (uploadFile, uploadFiles) => {
}`,
        "el-message": `ElMessage({
${tabSize}type: '\${1:success}',
${tabSize}message: '$2',
})`,
        "el-message:confirm": `ElMessageBox.confirm(
${tabSize}'',
${tabSize}'Warning',
${tabSize}{
${tabSize}${tabSize}confirmButtonText: '${vscode_12.l10n.t("el-popconfirm.confirm-text")}',
${tabSize}${tabSize}cancelButtonText: '${vscode_12.l10n.t("el-popconfirm.cancel-text")}',
${tabSize}${tabSize}type: 'warning',
${tabSize}}
).then(() => {
${tabSize}
}).catch(() => {
${tabSize}
})`,
        "el-notification": `ElNotification({
${tabSize}title: '',
${tabSize}message: '',
})`
      };
    };
  }
});

// out/frameworks/element-plus/attribute.js
var require_attribute = __commonJS({
  "out/frameworks/element-plus/attribute.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.default = () => {
      return {
        "el-overview": {},
        "el-button": {
          "size": {
            "type": "attribute",
            "description": "tags.el-button.size.description",
            "values": ["large", "large", "small"]
          },
          "type": {
            "type": "attribute",
            "description": "tags.el-button.type.description",
            "values": ["primary", "success", "warning", "danger", "info"]
          },
          "plain": {
            "type": "attribute",
            "description": "tags.el-button.plain.description",
            "values": ["boolean"]
          },
          "text": {
            "type": "attribute",
            "description": "tags.el-button.text.description",
            "values": ["boolean"]
          },
          "bg": {
            "type": "attribute",
            "description": "tags.el-button.bg.description",
            "values": ["boolean"]
          },
          "link": {
            "type": "attribute",
            "description": "tags.el-button.link.description",
            "values": ["boolean"]
          },
          "round": {
            "type": "attribute",
            "description": "tags.el-button.round.description",
            "values": ["boolean"]
          },
          "circle": {
            "type": "attribute",
            "description": "tags.el-button.circle.description",
            "values": ["boolean"]
          },
          "loading": {
            "type": "attribute",
            "description": "tags.el-button.loading.description",
            "values": ["boolean"]
          },
          "loading-icon": {
            "type": "attribute",
            "description": "tags.el-button.loading-icon.description",
            "values": ["string"]
          },
          "disabled": {
            "type": "attribute",
            "description": "tags.el-button.disabled.description",
            "values": ["boolean"]
          },
          "icon": {
            "type": "attribute",
            "description": "tags.el-button.icon.description",
            "values": ["string"]
          },
          "autofocus": {
            "type": "attribute",
            "description": "tags.el-button.autofocus.description",
            "values": ["boolean"]
          },
          "native-type": {
            "type": "attribute",
            "description": "tags.el-button.native-type.description",
            "values": ["button", "submit", "reset"]
          },
          "auto-insert-space": {
            "type": "attribute",
            "description": "tags.el-button.auto-insert-space.description",
            "values": ["boolean"]
          },
          "color": {
            "type": "attribute",
            "description": "tags.el-button.color.description",
            "values": ["string"]
          },
          "dark": {
            "type": "attribute",
            "description": "tags.el-button.dark.description",
            "values": ["boolean"]
          },
          "tag": {
            "type": "attribute",
            "description": "tags.el-button.tag.description",
            "values": ["string"]
          }
        },
        "el-button-group": {
          "size": {
            "type": "attribute",
            "description": "tags.el-button-group.size.description",
            "values": ["large", "large", "small"]
          },
          "type": {
            "type": "attribute",
            "description": "tags.el-button-group.type.description",
            "values": ["primary", "success", "warning", "danger", "info"]
          }
        },
        "el-border": {},
        "el-color": {},
        "el-container": {
          "direction": {
            "type": "attribute",
            "description": "tags.el-container.direction.description",
            "values": ["horizontal", "vertical"]
          }
        },
        "el-header": {
          "height": {
            "type": "attribute",
            "description": "tags.el-header.height.description",
            "values": ["string"]
          }
        },
        "el-aside": {
          "width": {
            "type": "attribute",
            "description": "tags.el-aside.width.description",
            "values": ["string"]
          }
        },
        "el-main": {},
        "el-footer": {
          "height": {
            "type": "attribute",
            "description": "tags.el-footer.height.description",
            "values": ["string"]
          }
        },
        "el-icon": {
          "color": {
            "type": "attribute",
            "description": "tags.el-icon.color.description",
            "values": ["string"]
          },
          "size": {
            "type": "attribute",
            "description": "tags.el-icon.size.description",
            "values": ["number"]
          }
        },
        "el-layout": {},
        "el-row": {
          "gutter": {
            "type": "attribute",
            "description": "tags.el-row.gutter.description",
            "values": ["number"]
          },
          "justify": {
            "type": "attribute",
            "description": "tags.el-row.justify.description",
            "values": ["start", "end", "center", "space-around", "space-between", "space-evenly"]
          },
          "align": {
            "type": "attribute",
            "description": "tags.el-row.align.description",
            "values": ["top", "middle", "bottom"]
          },
          "tag": {
            "type": "attribute",
            "description": "tags.el-row.tag.description",
            "values": ["string"]
          }
        },
        "el-col": {
          "span": {
            "type": "attribute",
            "description": "tags.el-col.span.description",
            "values": ["number"]
          },
          "offset": {
            "type": "attribute",
            "description": "tags.el-col.offset.description",
            "values": ["number"]
          },
          "push": {
            "type": "attribute",
            "description": "tags.el-col.push.description",
            "values": ["number"]
          },
          "pull": {
            "type": "attribute",
            "description": "tags.el-col.pull.description",
            "values": ["number"]
          },
          "xs": {
            "type": "attribute",
            "description": "tags.el-col.xs.description",
            "values": ["number"]
          },
          "sm": {
            "type": "attribute",
            "description": "tags.el-col.sm.description",
            "values": ["number"]
          },
          "md": {
            "type": "attribute",
            "description": "tags.el-col.md.description",
            "values": ["number"]
          },
          "lg": {
            "type": "attribute",
            "description": "tags.el-col.lg.description",
            "values": ["number"]
          },
          "xl": {
            "type": "attribute",
            "description": "tags.el-col.xl.description",
            "values": ["number"]
          },
          "tag": {
            "type": "attribute",
            "description": "tags.el-col.tag.description",
            "values": ["string"]
          }
        },
        "el-link": {
          "type": {
            "type": "attribute",
            "description": "tags.el-link.type.description",
            "values": ["primary", "success", "warning", "danger", "info", "default"]
          },
          "underline": {
            "type": "attribute",
            "description": "tags.el-link.underline.description",
            "values": ["boolean"]
          },
          "disabled": {
            "type": "attribute",
            "description": "tags.el-link.disabled.description",
            "values": ["boolean"]
          },
          "href": {
            "type": "attribute",
            "description": "tags.el-link.href.description",
            "values": ["string"]
          },
          "target": {
            "type": "attribute",
            "description": "tags.el-link.target.description",
            "values": ["_blank", "_parent", "_self", "_top"]
          },
          "icon": {
            "type": "attribute",
            "description": "tags.el-link.icon.description",
            "values": ["string"]
          }
        },
        "el-text": {
          "type": {
            "type": "attribute",
            "description": "tags.el-text.type.description",
            "values": ["primary", "success", "warning", "danger", "info"]
          },
          "size": {
            "type": "attribute",
            "description": "tags.el-text.size.description",
            "values": ["large", "default", "small"]
          },
          "truncated": {
            "type": "attribute",
            "description": "tags.el-text.truncated.description",
            "values": ["boolean"]
          },
          "line-clamp": {
            "type": "attribute",
            "description": "tags.el-text.line-clamp.description",
            "values": ["string"]
          },
          "tag": {
            "type": "attribute",
            "description": "tags.el-text.tag.description",
            "values": ["string"]
          }
        },
        "el-scrollbar": {
          "height": {
            "type": "attribute",
            "description": "tags.el-scrollbar.height.description",
            "values": ["string"]
          },
          "max-height": {
            "type": "attribute",
            "description": "tags.el-scrollbar.max-height.description",
            "values": ["string"]
          },
          "native": {
            "type": "attribute",
            "description": "tags.el-scrollbar.native.description",
            "values": ["boolean"]
          },
          "wrap-style": {
            "type": "attribute",
            "description": "tags.el-scrollbar.wrap-style.description",
            "values": ["string"]
          },
          "wrap-class": {
            "type": "attribute",
            "description": "tags.el-scrollbar.wrap-class.description",
            "values": ["string"]
          },
          "view-style": {
            "type": "attribute",
            "description": "tags.el-scrollbar.view-style.description",
            "values": ["string"]
          },
          "view-class": {
            "type": "attribute",
            "description": "tags.el-scrollbar.view-class.description",
            "values": ["string"]
          },
          "noresize": {
            "type": "attribute",
            "description": "tags.el-scrollbar.noresize.description",
            "values": ["boolean"]
          },
          "tag": {
            "type": "attribute",
            "description": "tags.el-scrollbar.tag.description",
            "values": ["string"]
          },
          "always": {
            "type": "attribute",
            "description": "tags.el-scrollbar.always.description",
            "values": ["boolean"]
          },
          "min-size": {
            "type": "attribute",
            "description": "tags.el-scrollbar.min-size.description",
            "values": ["number"]
          },
          "id": {
            "type": "attribute",
            "description": "tags.el-scrollbar.id.description",
            "values": ["string"]
          },
          "roleay": {
            "type": "attribute",
            "description": "tags.el-scrollbar.roleay.description",
            "values": ["string"]
          },
          "aria-labelay": {
            "type": "attribute",
            "description": "tags.el-scrollbar.aria-labelay.description",
            "values": ["string"]
          },
          "aria-orientationay": {
            "type": "attribute",
            "description": "tags.el-scrollbar.aria-orientationay.description",
            "values": ["enum"]
          },
          "scroll": {
            "type": "method",
            "description": "tags.el-scrollbar.scroll.description",
            "values": []
          }
        },
        "el-space": {
          "alignment": {
            "type": "attribute",
            "description": "tags.el-space.alignment.description",
            "values": ["stretch", "center", "normal", "start", "end"]
          },
          "class": {
            "type": "attribute",
            "description": "tags.el-space.class.description",
            "values": ["string"]
          },
          "direction": {
            "type": "attribute",
            "description": "tags.el-space.direction.description",
            "values": ["vertical", "horizontal"]
          },
          "prefix-cls": {
            "type": "attribute",
            "description": "tags.el-space.prefix-cls.description",
            "values": ["string"]
          },
          "style": {
            "type": "attribute",
            "description": "tags.el-space.style.description",
            "values": ["string"]
          },
          "spacer": {
            "type": "attribute",
            "description": "tags.el-space.spacer.description",
            "values": ["string"]
          },
          "size": {
            "type": "attribute",
            "description": "tags.el-space.size.description",
            "values": ["default", "small", "large"]
          },
          "wrap": {
            "type": "attribute",
            "description": "tags.el-space.wrap.description",
            "values": ["boolean"]
          },
          "fill": {
            "type": "attribute",
            "description": "tags.el-space.fill.description",
            "values": ["boolean"]
          },
          "fill-ratio": {
            "type": "attribute",
            "description": "tags.el-space.fill-ratio.description",
            "values": ["number"]
          }
        },
        "el-typography": {},
        "el-config-provider": {
          "locale": {
            "type": "attribute",
            "description": "tags.el-config-provider.locale.description",
            "values": ["object"]
          },
          "size": {
            "type": "attribute",
            "description": "tags.el-config-provider.size.description",
            "values": ["large", "default", "small"]
          },
          "zIndex": {
            "type": "attribute",
            "description": "tags.el-config-provider.zIndex.description",
            "values": ["number"]
          },
          "namespace": {
            "type": "attribute",
            "description": "tags.el-config-provider.namespace.description",
            "values": ["string"]
          },
          "button": {
            "type": "attribute",
            "description": "tags.el-config-provider.button.description",
            "values": ["object"]
          },
          "message": {
            "type": "attribute",
            "description": "tags.el-config-provider.message.description",
            "values": ["object"]
          },
          "experimental-features": {
            "type": "attribute",
            "description": "tags.el-config-provider.experimental-features.description",
            "values": ["object"]
          },
          "empty-values": {
            "type": "attribute",
            "description": "tags.el-config-provider.empty-values.description",
            "values": ["array"]
          },
          "value-on-clear": {
            "type": "attribute",
            "description": "tags.el-config-provider.value-on-clear.description",
            "values": ["string"]
          }
        },
        "el-autocomplete": {
          "v-model": {
            "type": "attribute",
            "description": "tags.el-autocomplete.v-model.description",
            "values": ["string"]
          },
          "placeholder": {
            "type": "attribute",
            "description": "tags.el-autocomplete.placeholder.description",
            "values": ["string"]
          },
          "clearable": {
            "type": "attribute",
            "description": "tags.el-autocomplete.clearable.description",
            "values": ["boolean"]
          },
          "disabled": {
            "type": "attribute",
            "description": "tags.el-autocomplete.disabled.description",
            "values": ["boolean"]
          },
          "value-key": {
            "type": "attribute",
            "description": "tags.el-autocomplete.value-key.description",
            "values": ["string"]
          },
          "debounce": {
            "type": "attribute",
            "description": "tags.el-autocomplete.debounce.description",
            "values": ["number"]
          },
          "placement": {
            "type": "attribute",
            "description": "tags.el-autocomplete.placement.description",
            "values": ["top", "top- start", "top-end", "bottom", "bottom-start", "bottom-end"]
          },
          "fetch-suggestions": {
            "type": "attribute",
            "description": "tags.el-autocomplete.fetch-suggestions.description",
            "values": ["Function"]
          },
          "trigger-on-focus": {
            "type": "attribute",
            "description": "tags.el-autocomplete.trigger-on-focus.description",
            "values": ["boolean"]
          },
          "select-when-unmatched": {
            "type": "attribute",
            "description": "tags.el-autocomplete.select-when-unmatched.description",
            "values": ["boolean"]
          },
          "name": {
            "type": "attribute",
            "description": "tags.el-autocomplete.name.description",
            "values": ["string"]
          },
          "aria-labelay": {
            "type": "attribute",
            "description": "tags.el-autocomplete.aria-labelay.description",
            "values": ["string"]
          },
          "hide-loading": {
            "type": "attribute",
            "description": "tags.el-autocomplete.hide-loading.description",
            "values": ["boolean"]
          },
          "popper-class": {
            "type": "attribute",
            "description": "tags.el-autocomplete.popper-class.description",
            "values": ["string"]
          },
          "popper-append-to-bodydeprecated": {
            "type": "attribute",
            "description": "tags.el-autocomplete.popper-append-to-bodydeprecated.description",
            "values": ["boolean"]
          },
          "teleported": {
            "type": "attribute",
            "description": "tags.el-autocomplete.teleported.description",
            "values": ["boolean"]
          },
          "highlight-first-item": {
            "type": "attribute",
            "description": "tags.el-autocomplete.highlight-first-item.description",
            "values": ["boolean"]
          },
          "fit-input-width": {
            "type": "attribute",
            "description": "tags.el-autocomplete.fit-input-width.description",
            "values": ["boolean"]
          },
          "select": {
            "type": "method",
            "description": "tags.el-autocomplete.select.description",
            "values": []
          },
          "change": {
            "type": "method",
            "description": "tags.el-autocomplete.change.description",
            "values": []
          }
        },
        "el-cascader": {
          "v-model": {
            "type": "attribute",
            "description": "tags.el-cascader.v-model.description",
            "values": ["string"]
          },
          "options": {
            "type": "attribute",
            "description": "tags.el-cascader.options.description",
            "values": ["object"]
          },
          "props": {
            "type": "attribute",
            "description": "tags.el-cascader.props.description",
            "values": ["object"]
          },
          "size": {
            "type": "attribute",
            "description": "tags.el-cascader.size.description",
            "values": ["large", "default", "small"]
          },
          "placeholder": {
            "type": "attribute",
            "description": "tags.el-cascader.placeholder.description",
            "values": ["string"]
          },
          "disabled": {
            "type": "attribute",
            "description": "tags.el-cascader.disabled.description",
            "values": ["boolean"]
          },
          "clearable": {
            "type": "attribute",
            "description": "tags.el-cascader.clearable.description",
            "values": ["boolean"]
          },
          "show-all-levels": {
            "type": "attribute",
            "description": "tags.el-cascader.show-all-levels.description",
            "values": ["boolean"]
          },
          "collapse-tags": {
            "type": "attribute",
            "description": "tags.el-cascader.collapse-tags.description",
            "values": ["boolean"]
          },
          "collapse-tags-tooltip": {
            "type": "attribute",
            "description": "tags.el-cascader.collapse-tags-tooltip.description",
            "values": ["boolean"]
          },
          "separator": {
            "type": "attribute",
            "description": "tags.el-cascader.separator.description",
            "values": ["string"]
          },
          "filterable": {
            "type": "attribute",
            "description": "tags.el-cascader.filterable.description",
            "values": ["boolean"]
          },
          "filter-method": {
            "type": "attribute",
            "description": "tags.el-cascader.filter-method.description",
            "values": ["Function"]
          },
          "debounce": {
            "type": "attribute",
            "description": "tags.el-cascader.debounce.description",
            "values": ["number"]
          },
          "before-filter": {
            "type": "attribute",
            "description": "tags.el-cascader.before-filter.description",
            "values": ["Function"]
          },
          "popper-class": {
            "type": "attribute",
            "description": "tags.el-cascader.popper-class.description",
            "values": ["string"]
          },
          "teleported": {
            "type": "attribute",
            "description": "tags.el-cascader.teleported.description",
            "values": ["boolean"]
          },
          "popper-append-to-bodydeprecated": {
            "type": "attribute",
            "description": "tags.el-cascader.popper-append-to-bodydeprecated.description",
            "values": ["boolean"]
          },
          "tag-type": {
            "type": "attribute",
            "description": "tags.el-cascader.tag-type.description",
            "values": ["success", "info", "warning", "danger"]
          },
          "validate-event": {
            "type": "attribute",
            "description": "tags.el-cascader.validate-event.description",
            "values": ["boolean"]
          },
          "max-collapse-tags": {
            "type": "attribute",
            "description": "tags.el-cascader.max-collapse-tags.description",
            "values": ["number"]
          },
          "empty-values": {
            "type": "attribute",
            "description": "tags.el-cascader.empty-values.description",
            "values": ["array"]
          },
          "value-on-clear": {
            "type": "attribute",
            "description": "tags.el-cascader.value-on-clear.description",
            "values": ["string"]
          },
          "change": {
            "type": "method",
            "description": "tags.el-cascader.change.description",
            "values": []
          },
          "expand-change": {
            "type": "method",
            "description": "tags.el-cascader.expand-change.description",
            "values": []
          },
          "blur": {
            "type": "method",
            "description": "tags.el-cascader.blur.description",
            "values": []
          },
          "focus": {
            "type": "method",
            "description": "tags.el-cascader.focus.description",
            "values": []
          },
          "visible-change": {
            "type": "method",
            "description": "tags.el-cascader.visible-change.description",
            "values": []
          },
          "remove-tag": {
            "type": "method",
            "description": "tags.el-cascader.remove-tag.description",
            "values": []
          }
        },
        "el-cascader-panel": {
          "v-model": {
            "type": "attribute",
            "description": "tags.el-cascader-panel.v-model.description",
            "values": ["string"]
          },
          "options": {
            "type": "attribute",
            "description": "tags.el-cascader-panel.options.description",
            "values": ["object"]
          },
          "props": {
            "type": "attribute",
            "description": "tags.el-cascader-panel.props.description",
            "values": ["object"]
          },
          "change": {
            "type": "method",
            "description": "tags.el-cascader-panel.change.description",
            "values": []
          },
          "expand-change": {
            "type": "method",
            "description": "tags.el-cascader-panel.expand-change.description",
            "values": []
          },
          "close": {
            "type": "method",
            "description": "tags.el-cascader-panel.close.description",
            "values": []
          }
        },
        "el-checkbox": {
          "v-model": {
            "type": "attribute",
            "description": "tags.el-checkbox.v-model.description",
            "values": ["string"]
          },
          "value": {
            "type": "attribute",
            "description": "tags.el-checkbox.value.description",
            "values": ["string"]
          },
          "label": {
            "type": "attribute",
            "description": "tags.el-checkbox.label.description",
            "values": ["string"]
          },
          "true-value": {
            "type": "attribute",
            "description": "tags.el-checkbox.true-value.description",
            "values": ["string"]
          },
          "false-value": {
            "type": "attribute",
            "description": "tags.el-checkbox.false-value.description",
            "values": ["string"]
          },
          "true-labeldeprecated": {
            "type": "attribute",
            "description": "tags.el-checkbox.true-labeldeprecated.description",
            "values": ["string"]
          },
          "false-labeldeprecated": {
            "type": "attribute",
            "description": "tags.el-checkbox.false-labeldeprecated.description",
            "values": ["string"]
          },
          "disabled": {
            "type": "attribute",
            "description": "tags.el-checkbox.disabled.description",
            "values": ["boolean"]
          },
          "border": {
            "type": "attribute",
            "description": "tags.el-checkbox.border.description",
            "values": ["boolean"]
          },
          "size": {
            "type": "attribute",
            "description": "tags.el-checkbox.size.description",
            "values": ["large", "default", "small"]
          },
          "name": {
            "type": "attribute",
            "description": "tags.el-checkbox.name.description",
            "values": ["string"]
          },
          "checked": {
            "type": "attribute",
            "description": "tags.el-checkbox.checked.description",
            "values": ["boolean"]
          },
          "indeterminate": {
            "type": "attribute",
            "description": "tags.el-checkbox.indeterminate.description",
            "values": ["boolean"]
          },
          "validate-event": {
            "type": "attribute",
            "description": "tags.el-checkbox.validate-event.description",
            "values": ["boolean"]
          },
          "tabindex": {
            "type": "attribute",
            "description": "tags.el-checkbox.tabindex.description",
            "values": ["string"]
          },
          "id": {
            "type": "attribute",
            "description": "tags.el-checkbox.id.description",
            "values": ["string"]
          },
          "controlsaydeprecated": {
            "type": "attribute",
            "description": "tags.el-checkbox.controlsaydeprecated.description",
            "values": ["string"]
          },
          "aria-controlsay": {
            "type": "attribute",
            "description": "tags.el-checkbox.aria-controlsay.description",
            "values": ["string"]
          },
          "change": {
            "type": "method",
            "description": "tags.el-checkbox.change.description",
            "values": []
          }
        },
        "el-checkbox-group": {
          "v-model": {
            "type": "attribute",
            "description": "tags.el-checkbox-group.v-model.description",
            "values": ["object"]
          },
          "size": {
            "type": "attribute",
            "description": "tags.el-checkbox-group.size.description",
            "values": ["large", "default", "small"]
          },
          "disabled": {
            "type": "attribute",
            "description": "tags.el-checkbox-group.disabled.description",
            "values": ["boolean"]
          },
          "min": {
            "type": "attribute",
            "description": "tags.el-checkbox-group.min.description",
            "values": ["number"]
          },
          "max": {
            "type": "attribute",
            "description": "tags.el-checkbox-group.max.description",
            "values": ["number"]
          },
          "labelaydeprecated": {
            "type": "attribute",
            "description": "tags.el-checkbox-group.labelaydeprecated.description",
            "values": ["string"]
          },
          "aria-labelay": {
            "type": "attribute",
            "description": "tags.el-checkbox-group.aria-labelay.description",
            "values": ["string"]
          },
          "text-color": {
            "type": "attribute",
            "description": "tags.el-checkbox-group.text-color.description",
            "values": ["string"]
          },
          "fill": {
            "type": "attribute",
            "description": "tags.el-checkbox-group.fill.description",
            "values": ["string"]
          },
          "tag": {
            "type": "attribute",
            "description": "tags.el-checkbox-group.tag.description",
            "values": ["string"]
          },
          "validate-event": {
            "type": "attribute",
            "description": "tags.el-checkbox-group.validate-event.description",
            "values": ["boolean"]
          },
          "change": {
            "type": "method",
            "description": "tags.el-checkbox-group.change.description",
            "values": []
          }
        },
        "el-checkbox-button": {
          "value": {
            "type": "attribute",
            "description": "tags.el-checkbox-button.value.description",
            "values": ["string"]
          },
          "label": {
            "type": "attribute",
            "description": "tags.el-checkbox-button.label.description",
            "values": ["string"]
          },
          "true-value": {
            "type": "attribute",
            "description": "tags.el-checkbox-button.true-value.description",
            "values": ["string"]
          },
          "false-value": {
            "type": "attribute",
            "description": "tags.el-checkbox-button.false-value.description",
            "values": ["string"]
          },
          "true-labeldeprecated": {
            "type": "attribute",
            "description": "tags.el-checkbox-button.true-labeldeprecated.description",
            "values": ["string"]
          },
          "false-labeldeprecated": {
            "type": "attribute",
            "description": "tags.el-checkbox-button.false-labeldeprecated.description",
            "values": ["string"]
          },
          "disabled": {
            "type": "attribute",
            "description": "tags.el-checkbox-button.disabled.description",
            "values": ["boolean"]
          },
          "name": {
            "type": "attribute",
            "description": "tags.el-checkbox-button.name.description",
            "values": ["string"]
          },
          "checked": {
            "type": "attribute",
            "description": "tags.el-checkbox-button.checked.description",
            "values": ["boolean"]
          }
        },
        "el-color-picker": {
          "v-model": {
            "type": "attribute",
            "description": "tags.el-color-picker.v-model.description",
            "values": ["string"]
          },
          "disabled": {
            "type": "attribute",
            "description": "tags.el-color-picker.disabled.description",
            "values": ["boolean"]
          },
          "size": {
            "type": "attribute",
            "description": "tags.el-color-picker.size.description",
            "values": ["large", "default", "small"]
          },
          "show-alpha": {
            "type": "attribute",
            "description": "tags.el-color-picker.show-alpha.description",
            "values": ["boolean"]
          },
          "color-format": {
            "type": "attribute",
            "description": "tags.el-color-picker.color-format.description",
            "values": ["enum"]
          },
          "popper-class": {
            "type": "attribute",
            "description": "tags.el-color-picker.popper-class.description",
            "values": ["string"]
          },
          "predefine": {
            "type": "attribute",
            "description": "tags.el-color-picker.predefine.description",
            "values": ["object"]
          },
          "validate-event": {
            "type": "attribute",
            "description": "tags.el-color-picker.validate-event.description",
            "values": ["boolean"]
          },
          "tabindex": {
            "type": "attribute",
            "description": "tags.el-color-picker.tabindex.description",
            "values": ["string"]
          },
          "labelaydeprecated": {
            "type": "attribute",
            "description": "tags.el-color-picker.labelaydeprecated.description",
            "values": ["string"]
          },
          "aria-labelay": {
            "type": "attribute",
            "description": "tags.el-color-picker.aria-labelay.description",
            "values": ["string"]
          },
          "id": {
            "type": "attribute",
            "description": "tags.el-color-picker.id.description",
            "values": ["string"]
          },
          "teleported": {
            "type": "attribute",
            "description": "tags.el-color-picker.teleported.description",
            "values": ["boolean"]
          },
          "change": {
            "type": "method",
            "description": "tags.el-color-picker.change.description",
            "values": []
          },
          "active-change": {
            "type": "method",
            "description": "tags.el-color-picker.active-change.description",
            "values": []
          },
          "focus": {
            "type": "method",
            "description": "tags.el-color-picker.focus.description",
            "values": []
          },
          "blur": {
            "type": "method",
            "description": "tags.el-color-picker.blur.description",
            "values": []
          }
        },
        "el-date-picker": {
          "v-model": {
            "type": "attribute",
            "description": "tags.el-date-picker.v-model.description",
            "values": ["number"]
          },
          "readonly": {
            "type": "attribute",
            "description": "tags.el-date-picker.readonly.description",
            "values": ["boolean"]
          },
          "disabled": {
            "type": "attribute",
            "description": "tags.el-date-picker.disabled.description",
            "values": ["boolean"]
          },
          "size": {
            "type": "attribute",
            "description": "tags.el-date-picker.size.description",
            "values": ["large", "default", "small"]
          },
          "editable": {
            "type": "attribute",
            "description": "tags.el-date-picker.editable.description",
            "values": ["boolean"]
          },
          "clearable": {
            "type": "attribute",
            "description": "tags.el-date-picker.clearable.description",
            "values": ["boolean"]
          },
          "placeholder": {
            "type": "attribute",
            "description": "tags.el-date-picker.placeholder.description",
            "values": ["string"]
          },
          "start-placeholder": {
            "type": "attribute",
            "description": "tags.el-date-picker.start-placeholder.description",
            "values": ["string"]
          },
          "end-placeholder": {
            "type": "attribute",
            "description": "tags.el-date-picker.end-placeholder.description",
            "values": ["string"]
          },
          "type": {
            "type": "attribute",
            "description": "tags.el-date-picker.type.description",
            "values": ["primary", "success", "warning", "danger", "info"]
          },
          "format": {
            "type": "attribute",
            "description": "tags.el-date-picker.format.description",
            "values": ["\u53C2\u89C1"]
          },
          "popper-class": {
            "type": "attribute",
            "description": "tags.el-date-picker.popper-class.description",
            "values": ["string"]
          },
          "popper-options": {
            "type": "attribute",
            "description": "tags.el-date-picker.popper-options.description",
            "values": ["object"]
          },
          "range-separator": {
            "type": "attribute",
            "description": "tags.el-date-picker.range-separator.description",
            "values": ["string"]
          },
          "default-value": {
            "type": "attribute",
            "description": "tags.el-date-picker.default-value.description",
            "values": ["object"]
          },
          "default-time": {
            "type": "attribute",
            "description": "tags.el-date-picker.default-time.description",
            "values": ["object"]
          },
          "value-format": {
            "type": "attribute",
            "description": "tags.el-date-picker.value-format.description",
            "values": ["\u53C2\u89C1"]
          },
          "id": {
            "type": "attribute",
            "description": "tags.el-date-picker.id.description",
            "values": ["string"]
          },
          "name": {
            "type": "attribute",
            "description": "tags.el-date-picker.name.description",
            "values": ["string"]
          },
          "unlink-panels": {
            "type": "attribute",
            "description": "tags.el-date-picker.unlink-panels.description",
            "values": ["boolean"]
          },
          "prefix-icon": {
            "type": "attribute",
            "description": "tags.el-date-picker.prefix-icon.description",
            "values": ["string"]
          },
          "clear-icon": {
            "type": "attribute",
            "description": "tags.el-date-picker.clear-icon.description",
            "values": ["string"]
          },
          "validate-event": {
            "type": "attribute",
            "description": "tags.el-date-picker.validate-event.description",
            "values": ["boolean"]
          },
          "disabled-date": {
            "type": "attribute",
            "description": "tags.el-date-picker.disabled-date.description",
            "values": ["Function"]
          },
          "shortcuts": {
            "type": "attribute",
            "description": "tags.el-date-picker.shortcuts.description",
            "values": ["object"]
          },
          "cell-class-name": {
            "type": "attribute",
            "description": "tags.el-date-picker.cell-class-name.description",
            "values": ["Function"]
          },
          "teleported": {
            "type": "attribute",
            "description": "tags.el-date-picker.teleported.description",
            "values": ["boolean"]
          },
          "empty-values": {
            "type": "attribute",
            "description": "tags.el-date-picker.empty-values.description",
            "values": ["array"]
          },
          "value-on-clear": {
            "type": "attribute",
            "description": "tags.el-date-picker.value-on-clear.description",
            "values": ["string"]
          },
          "change": {
            "type": "method",
            "description": "tags.el-date-picker.change.description",
            "values": []
          },
          "blur": {
            "type": "method",
            "description": "tags.el-date-picker.blur.description",
            "values": []
          },
          "focus": {
            "type": "method",
            "description": "tags.el-date-picker.focus.description",
            "values": []
          },
          "calendar-change": {
            "type": "method",
            "description": "tags.el-date-picker.calendar-change.description",
            "values": []
          },
          "panel-change": {
            "type": "method",
            "description": "tags.el-date-picker.panel-change.description",
            "values": []
          },
          "visible-change": {
            "type": "method",
            "description": "tags.el-date-picker.visible-change.description",
            "values": []
          }
        },
        "el-datetime-picker": {
          "v-model": {
            "type": "attribute",
            "description": "tags.el-datetime-picker.v-model.description",
            "values": ["Date"]
          },
          "readonly": {
            "type": "attribute",
            "description": "tags.el-datetime-picker.readonly.description",
            "values": ["boolean"]
          },
          "disabled": {
            "type": "attribute",
            "description": "tags.el-datetime-picker.disabled.description",
            "values": ["boolean"]
          },
          "editable": {
            "type": "attribute",
            "description": "tags.el-datetime-picker.editable.description",
            "values": ["boolean"]
          },
          "clearable": {
            "type": "attribute",
            "description": "tags.el-datetime-picker.clearable.description",
            "values": ["boolean"]
          },
          "size": {
            "type": "attribute",
            "description": "tags.el-datetime-picker.size.description",
            "values": ["string"]
          },
          "placeholder": {
            "type": "attribute",
            "description": "tags.el-datetime-picker.placeholder.description",
            "values": ["string"]
          },
          "start-placeholder": {
            "type": "attribute",
            "description": "tags.el-datetime-picker.start-placeholder.description",
            "values": ["string"]
          },
          "end-placeholder": {
            "type": "attribute",
            "description": "tags.el-datetime-picker.end-placeholder.description",
            "values": ["string"]
          },
          "arrow-control": {
            "type": "attribute",
            "description": "tags.el-datetime-picker.arrow-control.description",
            "values": ["boolean"]
          },
          "type": {
            "type": "attribute",
            "description": "tags.el-datetime-picker.type.description",
            "values": ["string"]
          },
          "format": {
            "type": "attribute",
            "description": "tags.el-datetime-picker.format.description",
            "values": ["string"]
          },
          "popper-class": {
            "type": "attribute",
            "description": "tags.el-datetime-picker.popper-class.description",
            "values": ["string"]
          },
          "range-separator": {
            "type": "attribute",
            "description": "tags.el-datetime-picker.range-separator.description",
            "values": ["string"]
          },
          "default-value": {
            "type": "attribute",
            "description": "tags.el-datetime-picker.default-value.description",
            "values": ["Date"]
          },
          "default-time": {
            "type": "attribute",
            "description": "tags.el-datetime-picker.default-time.description",
            "values": ["Date"]
          },
          "value-format": {
            "type": "attribute",
            "description": "tags.el-datetime-picker.value-format.description",
            "values": ["string"]
          },
          "date-format": {
            "type": "attribute",
            "description": "tags.el-datetime-picker.date-format.description",
            "values": ["string"]
          },
          "time-format": {
            "type": "attribute",
            "description": "tags.el-datetime-picker.time-format.description",
            "values": ["string"]
          },
          "id": {
            "type": "attribute",
            "description": "tags.el-datetime-picker.id.description",
            "values": ["string"]
          },
          "name": {
            "type": "attribute",
            "description": "tags.el-datetime-picker.name.description",
            "values": ["string"]
          },
          "unlink-panels": {
            "type": "attribute",
            "description": "tags.el-datetime-picker.unlink-panels.description",
            "values": ["boolean"]
          },
          "prefix-icon": {
            "type": "attribute",
            "description": "tags.el-datetime-picker.prefix-icon.description",
            "values": ["string", "Component"]
          },
          "clear-icon": {
            "type": "attribute",
            "description": "tags.el-datetime-picker.clear-icon.description",
            "values": ["string", "Component"]
          },
          "shortcuts": {
            "type": "attribute",
            "description": "tags.el-datetime-picker.shortcuts.description",
            "values": ["object[{"]
          },
          "disabled-date": {
            "type": "attribute",
            "description": "tags.el-datetime-picker.disabled-date.description",
            "values": ["function(Date)"]
          },
          "cell-class-name": {
            "type": "attribute",
            "description": "tags.el-datetime-picker.cell-class-name.description",
            "values": ["Function(Date)"]
          },
          "teleported": {
            "type": "attribute",
            "description": "tags.el-datetime-picker.teleported.description",
            "values": ["boolean"]
          },
          "empty-values": {
            "type": "attribute",
            "description": "tags.el-datetime-picker.empty-values.description",
            "values": ["array"]
          },
          "value-on-clear": {
            "type": "attribute",
            "description": "tags.el-datetime-picker.value-on-clear.description",
            "values": ["string"]
          },
          "change": {
            "type": "method",
            "description": "tags.el-datetime-picker.change.description",
            "values": []
          },
          "blur": {
            "type": "method",
            "description": "tags.el-datetime-picker.blur.description",
            "values": []
          },
          "focus": {
            "type": "method",
            "description": "tags.el-datetime-picker.focus.description",
            "values": []
          },
          "calendar-change": {
            "type": "method",
            "description": "tags.el-datetime-picker.calendar-change.description",
            "values": []
          },
          "visible-change": {
            "type": "method",
            "description": "tags.el-datetime-picker.visible-change.description",
            "values": []
          }
        },
        "el-form": {
          "model": {
            "type": "attribute",
            "description": "tags.el-form.model.description",
            "values": ["object"]
          },
          "rules": {
            "type": "attribute",
            "description": "tags.el-form.rules.description",
            "values": ["object"]
          },
          "inline": {
            "type": "attribute",
            "description": "tags.el-form.inline.description",
            "values": ["boolean"]
          },
          "label-position": {
            "type": "attribute",
            "description": "tags.el-form.label-position.description",
            "values": ["enum"]
          },
          "label-width": {
            "type": "attribute",
            "description": "tags.el-form.label-width.description",
            "values": ["string"]
          },
          "label-suffix": {
            "type": "attribute",
            "description": "tags.el-form.label-suffix.description",
            "values": ["string"]
          },
          "hide-required-asterisk": {
            "type": "attribute",
            "description": "tags.el-form.hide-required-asterisk.description",
            "values": ["boolean"]
          },
          "require-asterisk-position": {
            "type": "attribute",
            "description": "tags.el-form.require-asterisk-position.description",
            "values": ["left", "right"]
          },
          "show-message": {
            "type": "attribute",
            "description": "tags.el-form.show-message.description",
            "values": ["boolean"]
          },
          "inline-message": {
            "type": "attribute",
            "description": "tags.el-form.inline-message.description",
            "values": ["boolean"]
          },
          "status-icon": {
            "type": "attribute",
            "description": "tags.el-form.status-icon.description",
            "values": ["boolean"]
          },
          "validate-on-rule-change": {
            "type": "attribute",
            "description": "tags.el-form.validate-on-rule-change.description",
            "values": ["boolean"]
          },
          "size": {
            "type": "attribute",
            "description": "tags.el-form.size.description",
            "values": ["large", "default", "small"]
          },
          "disabled": {
            "type": "attribute",
            "description": "tags.el-form.disabled.description",
            "values": ["boolean"]
          },
          "scroll-to-error": {
            "type": "attribute",
            "description": "tags.el-form.scroll-to-error.description",
            "values": ["boolean"]
          },
          "scroll-into-view-options": {
            "type": "attribute",
            "description": "tags.el-form.scroll-into-view-options.description",
            "values": ["object"]
          },
          "validate": {
            "type": "method",
            "description": "tags.el-form.validate.description",
            "values": []
          }
        },
        "el-form-item": {
          "prop": {
            "type": "attribute",
            "description": "tags.el-form-item.prop.description",
            "values": ["string"]
          },
          "label": {
            "type": "attribute",
            "description": "tags.el-form-item.label.description",
            "values": ["string"]
          },
          "label-width": {
            "type": "attribute",
            "description": "tags.el-form-item.label-width.description",
            "values": ["string"]
          },
          "required": {
            "type": "attribute",
            "description": "tags.el-form-item.required.description",
            "values": ["boolean"]
          },
          "rules": {
            "type": "attribute",
            "description": "tags.el-form-item.rules.description",
            "values": ["object"]
          },
          "error": {
            "type": "attribute",
            "description": "tags.el-form-item.error.description",
            "values": ["string"]
          },
          "show-message": {
            "type": "attribute",
            "description": "tags.el-form-item.show-message.description",
            "values": ["boolean"]
          },
          "inline-message": {
            "type": "attribute",
            "description": "tags.el-form-item.inline-message.description",
            "values": ["string"]
          },
          "size": {
            "type": "attribute",
            "description": "tags.el-form-item.size.description",
            "values": ["large", "default", "small"]
          },
          "for": {
            "type": "attribute",
            "description": "tags.el-form-item.for.description",
            "values": ["string"]
          },
          "validate-status": {
            "type": "attribute",
            "description": "tags.el-form-item.validate-status.description",
            "values": ["error", "validating", "success"]
          }
        },
        "el-input": {
          "type": {
            "type": "attribute",
            "description": "tags.el-input.type.description",
            "values": ["string"]
          },
          "v-model": {
            "type": "attribute",
            "description": "tags.el-input.v-model.description",
            "values": ["string"]
          },
          "maxlength": {
            "type": "attribute",
            "description": "tags.el-input.maxlength.description",
            "values": ["string"]
          },
          "minlength": {
            "type": "attribute",
            "description": "tags.el-input.minlength.description",
            "values": ["string"]
          },
          "show-word-limit": {
            "type": "attribute",
            "description": "tags.el-input.show-word-limit.description",
            "values": ["boolean"]
          },
          "placeholder": {
            "type": "attribute",
            "description": "tags.el-input.placeholder.description",
            "values": ["string"]
          },
          "clearable": {
            "type": "attribute",
            "description": "tags.el-input.clearable.description",
            "values": ["boolean"]
          },
          "formatter": {
            "type": "attribute",
            "description": "tags.el-input.formatter.description",
            "values": ["Function"]
          },
          "parser": {
            "type": "attribute",
            "description": "tags.el-input.parser.description",
            "values": ["Function"]
          },
          "show-password": {
            "type": "attribute",
            "description": "tags.el-input.show-password.description",
            "values": ["boolean"]
          },
          "disabled": {
            "type": "attribute",
            "description": "tags.el-input.disabled.description",
            "values": ["boolean"]
          },
          "size": {
            "type": "attribute",
            "description": "tags.el-input.size.description",
            "values": ["large", "default", "small"]
          },
          "prefix-icon": {
            "type": "attribute",
            "description": "tags.el-input.prefix-icon.description",
            "values": ["string"]
          },
          "suffix-icon": {
            "type": "attribute",
            "description": "tags.el-input.suffix-icon.description",
            "values": ["string"]
          },
          "rows": {
            "type": "attribute",
            "description": "tags.el-input.rows.description",
            "values": ["number"]
          },
          "autosize": {
            "type": "attribute",
            "description": "tags.el-input.autosize.description",
            "values": ["boolean"]
          },
          "autocomplete": {
            "type": "attribute",
            "description": "tags.el-input.autocomplete.description",
            "values": ["string"]
          },
          "name": {
            "type": "attribute",
            "description": "tags.el-input.name.description",
            "values": ["string"]
          },
          "readonly": {
            "type": "attribute",
            "description": "tags.el-input.readonly.description",
            "values": ["boolean"]
          },
          "max": {
            "type": "attribute",
            "description": "tags.el-input.max.description",
            "values": []
          },
          "min": {
            "type": "attribute",
            "description": "tags.el-input.min.description",
            "values": []
          },
          "step": {
            "type": "attribute",
            "description": "tags.el-input.step.description",
            "values": []
          },
          "resize": {
            "type": "attribute",
            "description": "tags.el-input.resize.description",
            "values": ["none", "both", "horizontal", "vertical"]
          },
          "autofocus": {
            "type": "attribute",
            "description": "tags.el-input.autofocus.description",
            "values": ["boolean"]
          },
          "form": {
            "type": "attribute",
            "description": "tags.el-input.form.description",
            "values": ["string"]
          },
          "labelaydeprecated": {
            "type": "attribute",
            "description": "tags.el-input.labelaydeprecated.description",
            "values": ["string"]
          },
          "aria-labelay": {
            "type": "attribute",
            "description": "tags.el-input.aria-labelay.description",
            "values": ["string"]
          },
          "tabindex": {
            "type": "attribute",
            "description": "tags.el-input.tabindex.description",
            "values": ["string"]
          },
          "validate-event": {
            "type": "attribute",
            "description": "tags.el-input.validate-event.description",
            "values": ["boolean"]
          },
          "input-style": {
            "type": "attribute",
            "description": "tags.el-input.input-style.description",
            "values": ["string"]
          },
          "blur": {
            "type": "method",
            "description": "tags.el-input.blur.description",
            "values": []
          },
          "focus": {
            "type": "method",
            "description": "tags.el-input.focus.description",
            "values": []
          },
          "change": {
            "type": "method",
            "description": "tags.el-input.change.description",
            "values": []
          },
          "input": {
            "type": "method",
            "description": "tags.el-input.input.description",
            "values": []
          },
          "clear": {
            "type": "method",
            "description": "tags.el-input.clear.description",
            "values": []
          }
        },
        "el-input-number": {
          "v-model": {
            "type": "attribute",
            "description": "tags.el-input-number.v-model.description",
            "values": ["number"]
          },
          "min": {
            "type": "attribute",
            "description": "tags.el-input-number.min.description",
            "values": ["number"]
          },
          "max": {
            "type": "attribute",
            "description": "tags.el-input-number.max.description",
            "values": ["number"]
          },
          "step": {
            "type": "attribute",
            "description": "tags.el-input-number.step.description",
            "values": ["number"]
          },
          "step-strictly": {
            "type": "attribute",
            "description": "tags.el-input-number.step-strictly.description",
            "values": ["boolean"]
          },
          "precision": {
            "type": "attribute",
            "description": "tags.el-input-number.precision.description",
            "values": ["number"]
          },
          "size": {
            "type": "attribute",
            "description": "tags.el-input-number.size.description",
            "values": ["large", "default", "small"]
          },
          "readonly": {
            "type": "attribute",
            "description": "tags.el-input-number.readonly.description",
            "values": ["boolean"]
          },
          "disabled": {
            "type": "attribute",
            "description": "tags.el-input-number.disabled.description",
            "values": ["boolean"]
          },
          "controls": {
            "type": "attribute",
            "description": "tags.el-input-number.controls.description",
            "values": ["boolean"]
          },
          "controls-position": {
            "type": "attribute",
            "description": "tags.el-input-number.controls-position.description",
            "values": ["right"]
          },
          "name": {
            "type": "attribute",
            "description": "tags.el-input-number.name.description",
            "values": ["string"]
          },
          "labelaydeprecated": {
            "type": "attribute",
            "description": "tags.el-input-number.labelaydeprecated.description",
            "values": ["string"]
          },
          "aria-labelay": {
            "type": "attribute",
            "description": "tags.el-input-number.aria-labelay.description",
            "values": ["string"]
          },
          "placeholder": {
            "type": "attribute",
            "description": "tags.el-input-number.placeholder.description",
            "values": ["string"]
          },
          "id": {
            "type": "attribute",
            "description": "tags.el-input-number.id.description",
            "values": ["string"]
          },
          "value-on-clear": {
            "type": "attribute",
            "description": "tags.el-input-number.value-on-clear.description",
            "values": ["number"]
          },
          "validate-event": {
            "type": "attribute",
            "description": "tags.el-input-number.validate-event.description",
            "values": ["boolean"]
          },
          "change": {
            "type": "method",
            "description": "tags.el-input-number.change.description",
            "values": []
          },
          "blur": {
            "type": "method",
            "description": "tags.el-input-number.blur.description",
            "values": []
          },
          "focus": {
            "type": "method",
            "description": "tags.el-input-number.focus.description",
            "values": []
          }
        },
        "el-radio": {
          "v-model": {
            "type": "attribute",
            "description": "tags.el-radio.v-model.description",
            "values": ["string"]
          },
          "value": {
            "type": "attribute",
            "description": "tags.el-radio.value.description",
            "values": ["string"]
          },
          "label": {
            "type": "attribute",
            "description": "tags.el-radio.label.description",
            "values": ["string"]
          },
          "disabled": {
            "type": "attribute",
            "description": "tags.el-radio.disabled.description",
            "values": ["boolean"]
          },
          "border": {
            "type": "attribute",
            "description": "tags.el-radio.border.description",
            "values": ["boolean"]
          },
          "size": {
            "type": "attribute",
            "description": "tags.el-radio.size.description",
            "values": ["large", "large", "small"]
          },
          "name": {
            "type": "attribute",
            "description": "tags.el-radio.name.description",
            "values": ["string"]
          },
          "change": {
            "type": "method",
            "description": "tags.el-radio.change.description",
            "values": []
          }
        },
        "el-radio-group": {
          "v-model": {
            "type": "attribute",
            "description": "tags.el-radio-group.v-model.description",
            "values": ["string"]
          },
          "size": {
            "type": "attribute",
            "description": "tags.el-radio-group.size.description",
            "values": ["string"]
          },
          "disabled": {
            "type": "attribute",
            "description": "tags.el-radio-group.disabled.description",
            "values": ["boolean"]
          },
          "text-color": {
            "type": "attribute",
            "description": "tags.el-radio-group.text-color.description",
            "values": ["string"]
          },
          "fill": {
            "type": "attribute",
            "description": "tags.el-radio-group.fill.description",
            "values": ["string"]
          },
          "validate-event": {
            "type": "attribute",
            "description": "tags.el-radio-group.validate-event.description",
            "values": ["boolean"]
          },
          "labelaydeprecated": {
            "type": "attribute",
            "description": "tags.el-radio-group.labelaydeprecated.description",
            "values": ["string"]
          },
          "aria-labelay": {
            "type": "attribute",
            "description": "tags.el-radio-group.aria-labelay.description",
            "values": ["string"]
          },
          "name": {
            "type": "attribute",
            "description": "tags.el-radio-group.name.description",
            "values": ["string"]
          },
          "id": {
            "type": "attribute",
            "description": "tags.el-radio-group.id.description",
            "values": ["string"]
          },
          "change": {
            "type": "method",
            "description": "tags.el-radio-group.change.description",
            "values": []
          }
        },
        "el-radio-button": {
          "value": {
            "type": "attribute",
            "description": "tags.el-radio-button.value.description",
            "values": ["string"]
          },
          "label": {
            "type": "attribute",
            "description": "tags.el-radio-button.label.description",
            "values": ["string"]
          },
          "disabled": {
            "type": "attribute",
            "description": "tags.el-radio-button.disabled.description",
            "values": ["boolean"]
          },
          "name": {
            "type": "attribute",
            "description": "tags.el-radio-button.name.description",
            "values": ["string"]
          }
        },
        "el-rate": {
          "v-model": {
            "type": "attribute",
            "description": "tags.el-rate.v-model.description",
            "values": ["number"]
          },
          "max": {
            "type": "attribute",
            "description": "tags.el-rate.max.description",
            "values": ["number"]
          },
          "size": {
            "type": "attribute",
            "description": "tags.el-rate.size.description",
            "values": ["large", "large", "small"]
          },
          "disabled": {
            "type": "attribute",
            "description": "tags.el-rate.disabled.description",
            "values": ["boolean"]
          },
          "allow-half": {
            "type": "attribute",
            "description": "tags.el-rate.allow-half.description",
            "values": ["boolean"]
          },
          "low-threshold": {
            "type": "attribute",
            "description": "tags.el-rate.low-threshold.description",
            "values": ["number"]
          },
          "high-threshold": {
            "type": "attribute",
            "description": "tags.el-rate.high-threshold.description",
            "values": ["number"]
          },
          "colors": {
            "type": "attribute",
            "description": "tags.el-rate.colors.description",
            "values": ["object"]
          },
          "void-color": {
            "type": "attribute",
            "description": "tags.el-rate.void-color.description",
            "values": ["string"]
          },
          "disabled-void-color": {
            "type": "attribute",
            "description": "tags.el-rate.disabled-void-color.description",
            "values": ["string"]
          },
          "icons": {
            "type": "attribute",
            "description": "tags.el-rate.icons.description",
            "values": ["object"]
          },
          "void-icon": {
            "type": "attribute",
            "description": "tags.el-rate.void-icon.description",
            "values": ["string"]
          },
          "disabled-void-icon": {
            "type": "attribute",
            "description": "tags.el-rate.disabled-void-icon.description",
            "values": ["string"]
          },
          "show-text": {
            "type": "attribute",
            "description": "tags.el-rate.show-text.description",
            "values": ["boolean"]
          },
          "show-score": {
            "type": "attribute",
            "description": "tags.el-rate.show-score.description",
            "values": ["boolean"]
          },
          "text-color": {
            "type": "attribute",
            "description": "tags.el-rate.text-color.description",
            "values": ["string"]
          },
          "texts": {
            "type": "attribute",
            "description": "tags.el-rate.texts.description",
            "values": ["array"]
          },
          "score-template": {
            "type": "attribute",
            "description": "tags.el-rate.score-template.description",
            "values": ["string"]
          },
          "clearable": {
            "type": "attribute",
            "description": "tags.el-rate.clearable.description",
            "values": ["boolean"]
          },
          "id": {
            "type": "attribute",
            "description": "tags.el-rate.id.description",
            "values": ["string"]
          },
          "labelaydeprecated": {
            "type": "attribute",
            "description": "tags.el-rate.labelaydeprecated.description",
            "values": ["string"]
          },
          "aria-labelay": {
            "type": "attribute",
            "description": "tags.el-rate.aria-labelay.description",
            "values": ["string"]
          },
          "change": {
            "type": "method",
            "description": "tags.el-rate.change.description",
            "values": []
          }
        },
        "el-select": {
          "v-model": {
            "type": "attribute",
            "description": "tags.el-select.v-model.description",
            "values": ["string"]
          },
          "multiple": {
            "type": "attribute",
            "description": "tags.el-select.multiple.description",
            "values": ["boolean"]
          },
          "disabled": {
            "type": "attribute",
            "description": "tags.el-select.disabled.description",
            "values": ["boolean"]
          },
          "value-key": {
            "type": "attribute",
            "description": "tags.el-select.value-key.description",
            "values": ["string"]
          },
          "size": {
            "type": "attribute",
            "description": "tags.el-select.size.description",
            "values": ["large", "large", "small"]
          },
          "clearable": {
            "type": "attribute",
            "description": "tags.el-select.clearable.description",
            "values": ["boolean"]
          },
          "collapse-tags": {
            "type": "attribute",
            "description": "tags.el-select.collapse-tags.description",
            "values": ["boolean"]
          },
          "collapse-tags-tooltip": {
            "type": "attribute",
            "description": "tags.el-select.collapse-tags-tooltip.description",
            "values": ["boolean"]
          },
          "multiple-limit": {
            "type": "attribute",
            "description": "tags.el-select.multiple-limit.description",
            "values": ["number"]
          },
          "name": {
            "type": "attribute",
            "description": "tags.el-select.name.description",
            "values": ["string"]
          },
          "effect": {
            "type": "attribute",
            "description": "tags.el-select.effect.description",
            "values": ["dark", "light"]
          },
          "autocomplete": {
            "type": "attribute",
            "description": "tags.el-select.autocomplete.description",
            "values": ["string"]
          },
          "placeholder": {
            "type": "attribute",
            "description": "tags.el-select.placeholder.description",
            "values": ["string"]
          },
          "filterable": {
            "type": "attribute",
            "description": "tags.el-select.filterable.description",
            "values": ["boolean"]
          },
          "allow-create": {
            "type": "attribute",
            "description": "tags.el-select.allow-create.description",
            "values": ["boolean"]
          },
          "filter-method": {
            "type": "attribute",
            "description": "tags.el-select.filter-method.description",
            "values": ["Function"]
          },
          "remote": {
            "type": "attribute",
            "description": "tags.el-select.remote.description",
            "values": ["boolean"]
          },
          "remote-method": {
            "type": "attribute",
            "description": "tags.el-select.remote-method.description",
            "values": ["Function"]
          },
          "remote-show-suffix": {
            "type": "attribute",
            "description": "tags.el-select.remote-show-suffix.description",
            "values": ["boolean"]
          },
          "loading": {
            "type": "attribute",
            "description": "tags.el-select.loading.description",
            "values": ["boolean"]
          },
          "loading-text": {
            "type": "attribute",
            "description": "tags.el-select.loading-text.description",
            "values": ["string"]
          },
          "no-match-text": {
            "type": "attribute",
            "description": "tags.el-select.no-match-text.description",
            "values": ["string"]
          },
          "no-data-text": {
            "type": "attribute",
            "description": "tags.el-select.no-data-text.description",
            "values": ["string"]
          },
          "popper-class": {
            "type": "attribute",
            "description": "tags.el-select.popper-class.description",
            "values": ["string"]
          },
          "reserve-keyword": {
            "type": "attribute",
            "description": "tags.el-select.reserve-keyword.description",
            "values": ["boolean"]
          },
          "default-first-option": {
            "type": "attribute",
            "description": "tags.el-select.default-first-option.description",
            "values": ["false"]
          },
          "teleported": {
            "type": "attribute",
            "description": "tags.el-select.teleported.description",
            "values": ["boolean"]
          },
          "persistent": {
            "type": "attribute",
            "description": "tags.el-select.persistent.description",
            "values": ["boolean"]
          },
          "automatic-dropdown": {
            "type": "attribute",
            "description": "tags.el-select.automatic-dropdown.description",
            "values": ["boolean"]
          },
          "clear-icon": {
            "type": "attribute",
            "description": "tags.el-select.clear-icon.description",
            "values": ["string"]
          },
          "fit-input-width": {
            "type": "attribute",
            "description": "tags.el-select.fit-input-width.description",
            "values": ["boolean"]
          },
          "suffix-icon": {
            "type": "attribute",
            "description": "tags.el-select.suffix-icon.description",
            "values": ["string"]
          },
          "suffix-transitiondeprecated": {
            "type": "attribute",
            "description": "tags.el-select.suffix-transitiondeprecated.description",
            "values": ["boolean"]
          },
          "tag-type": {
            "type": "attribute",
            "description": "tags.el-select.tag-type.description",
            "values": ["success", "info", "warning", "danger"]
          },
          "validate-event": {
            "type": "attribute",
            "description": "tags.el-select.validate-event.description",
            "values": ["boolean"]
          },
          "placement": {
            "type": "attribute",
            "description": "tags.el-select.placement.description",
            "values": ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end", "right", "right-start", "right-end"]
          },
          "fallback-placements": {
            "type": "attribute",
            "description": "tags.el-select.fallback-placements.description",
            "values": ["array"]
          },
          "max-collapse-tags": {
            "type": "attribute",
            "description": "tags.el-select.max-collapse-tags.description",
            "values": ["number"]
          },
          "popper-options": {
            "type": "attribute",
            "description": "tags.el-select.popper-options.description",
            "values": ["objectrefer"]
          },
          "aria-labelay": {
            "type": "attribute",
            "description": "tags.el-select.aria-labelay.description",
            "values": ["string"]
          },
          "empty-values": {
            "type": "attribute",
            "description": "tags.el-select.empty-values.description",
            "values": ["array"]
          },
          "value-on-clear": {
            "type": "attribute",
            "description": "tags.el-select.value-on-clear.description",
            "values": ["string"]
          },
          "change": {
            "type": "method",
            "description": "tags.el-select.change.description",
            "values": []
          },
          "visible-change": {
            "type": "method",
            "description": "tags.el-select.visible-change.description",
            "values": []
          },
          "remove-tag": {
            "type": "method",
            "description": "tags.el-select.remove-tag.description",
            "values": []
          },
          "clear": {
            "type": "method",
            "description": "tags.el-select.clear.description",
            "values": []
          },
          "blur": {
            "type": "method",
            "description": "tags.el-select.blur.description",
            "values": []
          },
          "focus": {
            "type": "method",
            "description": "tags.el-select.focus.description",
            "values": []
          }
        },
        "el-option": {
          "value": {
            "type": "attribute",
            "description": "tags.el-option.value.description",
            "values": ["string"]
          },
          "label": {
            "type": "attribute",
            "description": "tags.el-option.label.description",
            "values": ["string"]
          },
          "disabled": {
            "type": "attribute",
            "description": "tags.el-option.disabled.description",
            "values": ["boolean"]
          }
        },
        "el-select-v2": {
          "v-model": {
            "type": "attribute",
            "description": "tags.el-select-v2.v-model.description",
            "values": ["string"]
          },
          "multiple": {
            "type": "attribute",
            "description": "tags.el-select-v2.multiple.description",
            "values": ["boolean"]
          },
          "disabled": {
            "type": "attribute",
            "description": "tags.el-select-v2.disabled.description",
            "values": ["boolean"]
          },
          "value-key": {
            "type": "attribute",
            "description": "tags.el-select-v2.value-key.description",
            "values": ["string"]
          },
          "size": {
            "type": "attribute",
            "description": "tags.el-select-v2.size.description",
            "values": ["large", "large", "small"]
          },
          "clearable": {
            "type": "attribute",
            "description": "tags.el-select-v2.clearable.description",
            "values": ["boolean"]
          },
          "collapse-tags": {
            "type": "attribute",
            "description": "tags.el-select-v2.collapse-tags.description",
            "values": ["boolean"]
          },
          "collapse-tags-tooltip": {
            "type": "attribute",
            "description": "tags.el-select-v2.collapse-tags-tooltip.description",
            "values": ["boolean"]
          },
          "multiple-limit": {
            "type": "attribute",
            "description": "tags.el-select-v2.multiple-limit.description",
            "values": ["number"]
          },
          "name": {
            "type": "attribute",
            "description": "tags.el-select-v2.name.description",
            "values": ["string"]
          },
          "effect": {
            "type": "attribute",
            "description": "tags.el-select-v2.effect.description",
            "values": ["dark", "light"]
          },
          "autocomplete": {
            "type": "attribute",
            "description": "tags.el-select-v2.autocomplete.description",
            "values": ["string"]
          },
          "placeholder": {
            "type": "attribute",
            "description": "tags.el-select-v2.placeholder.description",
            "values": ["string"]
          },
          "filterable": {
            "type": "attribute",
            "description": "tags.el-select-v2.filterable.description",
            "values": ["boolean"]
          },
          "allow-create": {
            "type": "attribute",
            "description": "tags.el-select-v2.allow-create.description",
            "values": ["boolean"]
          },
          "filter-method": {
            "type": "attribute",
            "description": "tags.el-select-v2.filter-method.description",
            "values": ["Function"]
          },
          "remote": {
            "type": "attribute",
            "description": "tags.el-select-v2.remote.description",
            "values": ["boolean"]
          },
          "remote-method": {
            "type": "attribute",
            "description": "tags.el-select-v2.remote-method.description",
            "values": ["Function"]
          },
          "remote-show-suffix": {
            "type": "attribute",
            "description": "tags.el-select-v2.remote-show-suffix.description",
            "values": ["boolean"]
          },
          "loading": {
            "type": "attribute",
            "description": "tags.el-select-v2.loading.description",
            "values": ["boolean"]
          },
          "loading-text": {
            "type": "attribute",
            "description": "tags.el-select-v2.loading-text.description",
            "values": ["string"]
          },
          "no-match-text": {
            "type": "attribute",
            "description": "tags.el-select-v2.no-match-text.description",
            "values": ["string"]
          },
          "no-data-text": {
            "type": "attribute",
            "description": "tags.el-select-v2.no-data-text.description",
            "values": ["string"]
          },
          "popper-class": {
            "type": "attribute",
            "description": "tags.el-select-v2.popper-class.description",
            "values": ["string"]
          },
          "reserve-keyword": {
            "type": "attribute",
            "description": "tags.el-select-v2.reserve-keyword.description",
            "values": ["boolean"]
          },
          "default-first-option": {
            "type": "attribute",
            "description": "tags.el-select-v2.default-first-option.description",
            "values": ["false"]
          },
          "teleported": {
            "type": "attribute",
            "description": "tags.el-select-v2.teleported.description",
            "values": ["boolean"]
          },
          "persistent": {
            "type": "attribute",
            "description": "tags.el-select-v2.persistent.description",
            "values": ["boolean"]
          },
          "automatic-dropdown": {
            "type": "attribute",
            "description": "tags.el-select-v2.automatic-dropdown.description",
            "values": ["boolean"]
          },
          "clear-icon": {
            "type": "attribute",
            "description": "tags.el-select-v2.clear-icon.description",
            "values": ["string"]
          },
          "fit-input-width": {
            "type": "attribute",
            "description": "tags.el-select-v2.fit-input-width.description",
            "values": ["boolean"]
          },
          "suffix-icon": {
            "type": "attribute",
            "description": "tags.el-select-v2.suffix-icon.description",
            "values": ["string"]
          },
          "suffix-transitiondeprecated": {
            "type": "attribute",
            "description": "tags.el-select-v2.suffix-transitiondeprecated.description",
            "values": ["boolean"]
          },
          "tag-type": {
            "type": "attribute",
            "description": "tags.el-select-v2.tag-type.description",
            "values": ["success", "info", "warning", "danger"]
          },
          "validate-event": {
            "type": "attribute",
            "description": "tags.el-select-v2.validate-event.description",
            "values": ["boolean"]
          },
          "placement": {
            "type": "attribute",
            "description": "tags.el-select-v2.placement.description",
            "values": ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end", "right", "right-start", "right-end"]
          },
          "fallback-placements": {
            "type": "attribute",
            "description": "tags.el-select-v2.fallback-placements.description",
            "values": ["array"]
          },
          "max-collapse-tags": {
            "type": "attribute",
            "description": "tags.el-select-v2.max-collapse-tags.description",
            "values": ["number"]
          },
          "popper-options": {
            "type": "attribute",
            "description": "tags.el-select-v2.popper-options.description",
            "values": ["objectrefer"]
          },
          "aria-labelay": {
            "type": "attribute",
            "description": "tags.el-select-v2.aria-labelay.description",
            "values": ["string"]
          },
          "empty-values": {
            "type": "attribute",
            "description": "tags.el-select-v2.empty-values.description",
            "values": ["array"]
          },
          "value-on-clear": {
            "type": "attribute",
            "description": "tags.el-select-v2.value-on-clear.description",
            "values": ["string"]
          },
          "change": {
            "type": "method",
            "description": "tags.el-select-v2.change.description",
            "values": []
          },
          "visible-change": {
            "type": "method",
            "description": "tags.el-select-v2.visible-change.description",
            "values": []
          },
          "remove-tag": {
            "type": "method",
            "description": "tags.el-select-v2.remove-tag.description",
            "values": []
          },
          "clear": {
            "type": "method",
            "description": "tags.el-select-v2.clear.description",
            "values": []
          },
          "blur": {
            "type": "method",
            "description": "tags.el-select-v2.blur.description",
            "values": []
          },
          "focus": {
            "type": "method",
            "description": "tags.el-select-v2.focus.description",
            "values": []
          }
        },
        "el-slider": {
          "v-model": {
            "type": "attribute",
            "description": "tags.el-slider.v-model.description",
            "values": ["number"]
          },
          "min": {
            "type": "attribute",
            "description": "tags.el-slider.min.description",
            "values": ["number"]
          },
          "max": {
            "type": "attribute",
            "description": "tags.el-slider.max.description",
            "values": ["number"]
          },
          "disabled": {
            "type": "attribute",
            "description": "tags.el-slider.disabled.description",
            "values": ["boolean"]
          },
          "step": {
            "type": "attribute",
            "description": "tags.el-slider.step.description",
            "values": ["number"]
          },
          "show-input": {
            "type": "attribute",
            "description": "tags.el-slider.show-input.description",
            "values": ["boolean"]
          },
          "show-input-controls": {
            "type": "attribute",
            "description": "tags.el-slider.show-input-controls.description",
            "values": ["boolean"]
          },
          "size": {
            "type": "attribute",
            "description": "tags.el-slider.size.description",
            "values": ["large", "large", "small"]
          },
          "input-size": {
            "type": "attribute",
            "description": "tags.el-slider.input-size.description",
            "values": ["enum"]
          },
          "show-stops": {
            "type": "attribute",
            "description": "tags.el-slider.show-stops.description",
            "values": ["boolean"]
          },
          "show-tooltip": {
            "type": "attribute",
            "description": "tags.el-slider.show-tooltip.description",
            "values": ["boolean"]
          },
          "format-tooltip": {
            "type": "attribute",
            "description": "tags.el-slider.format-tooltip.description",
            "values": ["Function"]
          },
          "range": {
            "type": "attribute",
            "description": "tags.el-slider.range.description",
            "values": ["boolean"]
          },
          "vertical": {
            "type": "attribute",
            "description": "tags.el-slider.vertical.description",
            "values": ["boolean"]
          },
          "height": {
            "type": "attribute",
            "description": "tags.el-slider.height.description",
            "values": ["string"]
          },
          "labelaydeprecated": {
            "type": "attribute",
            "description": "tags.el-slider.labelaydeprecated.description",
            "values": ["string"]
          },
          "aria-labelay": {
            "type": "attribute",
            "description": "tags.el-slider.aria-labelay.description",
            "values": ["string"]
          },
          "range-start-label": {
            "type": "attribute",
            "description": "tags.el-slider.range-start-label.description",
            "values": ["string"]
          },
          "range-end-label": {
            "type": "attribute",
            "description": "tags.el-slider.range-end-label.description",
            "values": ["string"]
          },
          "format-value-text": {
            "type": "attribute",
            "description": "tags.el-slider.format-value-text.description",
            "values": ["Function"]
          },
          "debounce": {
            "type": "attribute",
            "description": "tags.el-slider.debounce.description",
            "values": ["number"]
          },
          "tooltip-class": {
            "type": "attribute",
            "description": "tags.el-slider.tooltip-class.description",
            "values": ["string"]
          },
          "placement": {
            "type": "attribute",
            "description": "tags.el-slider.placement.description",
            "values": ["enum"]
          },
          "marks": {
            "type": "attribute",
            "description": "tags.el-slider.marks.description",
            "values": ["object"]
          },
          "validate-event": {
            "type": "attribute",
            "description": "tags.el-slider.validate-event.description",
            "values": ["boolean"]
          },
          "change": {
            "type": "method",
            "description": "tags.el-slider.change.description",
            "values": []
          },
          "input": {
            "type": "method",
            "description": "tags.el-slider.input.description",
            "values": []
          }
        },
        "el-switch": {
          "v-model": {
            "type": "attribute",
            "description": "tags.el-switch.v-model.description",
            "values": ["boolean"]
          },
          "disabled": {
            "type": "attribute",
            "description": "tags.el-switch.disabled.description",
            "values": ["boolean"]
          },
          "loading": {
            "type": "attribute",
            "description": "tags.el-switch.loading.description",
            "values": ["boolean"]
          },
          "size": {
            "type": "attribute",
            "description": "tags.el-switch.size.description",
            "values": ["large", "large", "small"]
          },
          "width": {
            "type": "attribute",
            "description": "tags.el-switch.width.description",
            "values": ["number"]
          },
          "inline-prompt": {
            "type": "attribute",
            "description": "tags.el-switch.inline-prompt.description",
            "values": ["boolean"]
          },
          "active-icon": {
            "type": "attribute",
            "description": "tags.el-switch.active-icon.description",
            "values": ["string"]
          },
          "inactive-icon": {
            "type": "attribute",
            "description": "tags.el-switch.inactive-icon.description",
            "values": ["string"]
          },
          "active-action-icon": {
            "type": "attribute",
            "description": "tags.el-switch.active-action-icon.description",
            "values": ["string"]
          },
          "inactive-action-icon": {
            "type": "attribute",
            "description": "tags.el-switch.inactive-action-icon.description",
            "values": ["string"]
          },
          "active-text": {
            "type": "attribute",
            "description": "tags.el-switch.active-text.description",
            "values": ["string"]
          },
          "inactive-text": {
            "type": "attribute",
            "description": "tags.el-switch.inactive-text.description",
            "values": ["string"]
          },
          "active-value": {
            "type": "attribute",
            "description": "tags.el-switch.active-value.description",
            "values": ["boolean"]
          },
          "inactive-value": {
            "type": "attribute",
            "description": "tags.el-switch.inactive-value.description",
            "values": ["boolean"]
          },
          "active-colordeprecated": {
            "type": "attribute",
            "description": "tags.el-switch.active-colordeprecated.description",
            "values": ["string"]
          },
          "inactive-colordeprecated": {
            "type": "attribute",
            "description": "tags.el-switch.inactive-colordeprecated.description",
            "values": ["string"]
          },
          "border-colordeprecated": {
            "type": "attribute",
            "description": "tags.el-switch.border-colordeprecated.description",
            "values": ["string"]
          },
          "name": {
            "type": "attribute",
            "description": "tags.el-switch.name.description",
            "values": ["string"]
          },
          "validate-event": {
            "type": "attribute",
            "description": "tags.el-switch.validate-event.description",
            "values": ["boolean"]
          },
          "before-change": {
            "type": "attribute",
            "description": "tags.el-switch.before-change.description",
            "values": ["boolean"]
          },
          "id": {
            "type": "attribute",
            "description": "tags.el-switch.id.description",
            "values": ["string"]
          },
          "tabindex": {
            "type": "attribute",
            "description": "tags.el-switch.tabindex.description",
            "values": ["string"]
          },
          "labelaydeprecated": {
            "type": "attribute",
            "description": "tags.el-switch.labelaydeprecated.description",
            "values": ["string"]
          },
          "aria-labelay": {
            "type": "attribute",
            "description": "tags.el-switch.aria-labelay.description",
            "values": ["string"]
          },
          "change": {
            "type": "method",
            "description": "tags.el-switch.change.description",
            "values": []
          }
        },
        "el-time-picker": {
          "v-model": {
            "type": "attribute",
            "description": "tags.el-time-picker.v-model.description",
            "values": ["number"]
          },
          "readonly": {
            "type": "attribute",
            "description": "tags.el-time-picker.readonly.description",
            "values": ["boolean"]
          },
          "disabled": {
            "type": "attribute",
            "description": "tags.el-time-picker.disabled.description",
            "values": ["boolean"]
          },
          "editable": {
            "type": "attribute",
            "description": "tags.el-time-picker.editable.description",
            "values": ["boolean"]
          },
          "clearable": {
            "type": "attribute",
            "description": "tags.el-time-picker.clearable.description",
            "values": ["boolean"]
          },
          "size": {
            "type": "attribute",
            "description": "tags.el-time-picker.size.description",
            "values": ["large", "large", "small"]
          },
          "placeholder": {
            "type": "attribute",
            "description": "tags.el-time-picker.placeholder.description",
            "values": ["string"]
          },
          "start-placeholder": {
            "type": "attribute",
            "description": "tags.el-time-picker.start-placeholder.description",
            "values": ["string"]
          },
          "end-placeholder": {
            "type": "attribute",
            "description": "tags.el-time-picker.end-placeholder.description",
            "values": ["string"]
          },
          "is-range": {
            "type": "attribute",
            "description": "tags.el-time-picker.is-range.description",
            "values": ["boolean"]
          },
          "arrow-control": {
            "type": "attribute",
            "description": "tags.el-time-picker.arrow-control.description",
            "values": ["boolean"]
          },
          "popper-class": {
            "type": "attribute",
            "description": "tags.el-time-picker.popper-class.description",
            "values": ["string"]
          },
          "range-separator": {
            "type": "attribute",
            "description": "tags.el-time-picker.range-separator.description",
            "values": ["string"]
          },
          "format": {
            "type": "attribute",
            "description": "tags.el-time-picker.format.description",
            "values": ["string"]
          },
          "default-value": {
            "type": "attribute",
            "description": "tags.el-time-picker.default-value.description",
            "values": ["Date"]
          },
          "value-format": {
            "type": "attribute",
            "description": "tags.el-time-picker.value-format.description",
            "values": ["string"]
          },
          "id": {
            "type": "attribute",
            "description": "tags.el-time-picker.id.description",
            "values": ["string"]
          },
          "name": {
            "type": "attribute",
            "description": "tags.el-time-picker.name.description",
            "values": ["string"]
          },
          "labelaydeprecated": {
            "type": "attribute",
            "description": "tags.el-time-picker.labelaydeprecated.description",
            "values": ["string"]
          },
          "aria-labelay": {
            "type": "attribute",
            "description": "tags.el-time-picker.aria-labelay.description",
            "values": ["string"]
          },
          "prefix-icon": {
            "type": "attribute",
            "description": "tags.el-time-picker.prefix-icon.description",
            "values": ["string"]
          },
          "clear-icon": {
            "type": "attribute",
            "description": "tags.el-time-picker.clear-icon.description",
            "values": ["string"]
          },
          "disabled-hours": {
            "type": "attribute",
            "description": "tags.el-time-picker.disabled-hours.description",
            "values": ["Function"]
          },
          "disabled-minutes": {
            "type": "attribute",
            "description": "tags.el-time-picker.disabled-minutes.description",
            "values": ["Function"]
          },
          "disabled-seconds": {
            "type": "attribute",
            "description": "tags.el-time-picker.disabled-seconds.description",
            "values": ["Function"]
          },
          "teleported": {
            "type": "attribute",
            "description": "tags.el-time-picker.teleported.description",
            "values": ["boolean"]
          },
          "tabindex": {
            "type": "attribute",
            "description": "tags.el-time-picker.tabindex.description",
            "values": ["string"]
          },
          "empty-values": {
            "type": "attribute",
            "description": "tags.el-time-picker.empty-values.description",
            "values": ["array"]
          },
          "value-on-clear": {
            "type": "attribute",
            "description": "tags.el-time-picker.value-on-clear.description",
            "values": ["string"]
          },
          "change": {
            "type": "method",
            "description": "tags.el-time-picker.change.description",
            "values": []
          },
          "blur": {
            "type": "method",
            "description": "tags.el-time-picker.blur.description",
            "values": []
          },
          "focus": {
            "type": "method",
            "description": "tags.el-time-picker.focus.description",
            "values": []
          },
          "visible-change": {
            "type": "method",
            "description": "tags.el-time-picker.visible-change.description",
            "values": []
          }
        },
        "el-time-select": {
          "v-model": {
            "type": "attribute",
            "description": "tags.el-time-select.v-model.description",
            "values": ["string"]
          },
          "disabled": {
            "type": "attribute",
            "description": "tags.el-time-select.disabled.description",
            "values": ["boolean"]
          },
          "editable": {
            "type": "attribute",
            "description": "tags.el-time-select.editable.description",
            "values": ["boolean"]
          },
          "clearable": {
            "type": "attribute",
            "description": "tags.el-time-select.clearable.description",
            "values": ["boolean"]
          },
          "size": {
            "type": "attribute",
            "description": "tags.el-time-select.size.description",
            "values": ["large", "large", "small"]
          },
          "placeholder": {
            "type": "attribute",
            "description": "tags.el-time-select.placeholder.description",
            "values": ["string"]
          },
          "name": {
            "type": "attribute",
            "description": "tags.el-time-select.name.description",
            "values": ["string"]
          },
          "effect": {
            "type": "attribute",
            "description": "tags.el-time-select.effect.description",
            "values": ["string"]
          },
          "prefix-icon": {
            "type": "attribute",
            "description": "tags.el-time-select.prefix-icon.description",
            "values": ["string"]
          },
          "clear-icon": {
            "type": "attribute",
            "description": "tags.el-time-select.clear-icon.description",
            "values": ["string"]
          },
          "start": {
            "type": "attribute",
            "description": "tags.el-time-select.start.description",
            "values": ["string"]
          },
          "end": {
            "type": "attribute",
            "description": "tags.el-time-select.end.description",
            "values": ["string"]
          },
          "step": {
            "type": "attribute",
            "description": "tags.el-time-select.step.description",
            "values": ["string"]
          },
          "min-time": {
            "type": "attribute",
            "description": "tags.el-time-select.min-time.description",
            "values": ["string"]
          },
          "max-time": {
            "type": "attribute",
            "description": "tags.el-time-select.max-time.description",
            "values": ["string"]
          },
          "format": {
            "type": "attribute",
            "description": "tags.el-time-select.format.description",
            "values": ["string"]
          },
          "empty-values": {
            "type": "attribute",
            "description": "tags.el-time-select.empty-values.description",
            "values": ["array"]
          },
          "value-on-clear": {
            "type": "attribute",
            "description": "tags.el-time-select.value-on-clear.description",
            "values": ["string"]
          },
          "change": {
            "type": "method",
            "description": "tags.el-time-select.change.description",
            "values": []
          },
          "blur": {
            "type": "method",
            "description": "tags.el-time-select.blur.description",
            "values": []
          },
          "focus": {
            "type": "method",
            "description": "tags.el-time-select.focus.description",
            "values": []
          }
        },
        "el-transfer": {
          "v-model": {
            "type": "attribute",
            "description": "tags.el-transfer.v-model.description",
            "values": ["object"]
          },
          "data": {
            "type": "attribute",
            "description": "tags.el-transfer.data.description",
            "values": ["object"]
          },
          "filterable": {
            "type": "attribute",
            "description": "tags.el-transfer.filterable.description",
            "values": ["boolean"]
          },
          "filter-placeholder": {
            "type": "attribute",
            "description": "tags.el-transfer.filter-placeholder.description",
            "values": ["string"]
          },
          "filter-method": {
            "type": "attribute",
            "description": "tags.el-transfer.filter-method.description",
            "values": ["Function"]
          },
          "target-order": {
            "type": "attribute",
            "description": "tags.el-transfer.target-order.description",
            "values": ["original", "push", "unshift"]
          },
          "titles": {
            "type": "attribute",
            "description": "tags.el-transfer.titles.description",
            "values": ["object"]
          },
          "button-texts": {
            "type": "attribute",
            "description": "tags.el-transfer.button-texts.description",
            "values": ["object"]
          },
          "render-content": {
            "type": "attribute",
            "description": "tags.el-transfer.render-content.description",
            "values": ["object"]
          },
          "format": {
            "type": "attribute",
            "description": "tags.el-transfer.format.description",
            "values": ["object"]
          },
          "props": {
            "type": "attribute",
            "description": "tags.el-transfer.props.description",
            "values": ["object"]
          },
          "left-default-checked": {
            "type": "attribute",
            "description": "tags.el-transfer.left-default-checked.description",
            "values": ["object"]
          },
          "right-default-checked": {
            "type": "attribute",
            "description": "tags.el-transfer.right-default-checked.description",
            "values": ["object"]
          },
          "validate-event": {
            "type": "attribute",
            "description": "tags.el-transfer.validate-event.description",
            "values": ["boolean"]
          },
          "change": {
            "type": "method",
            "description": "tags.el-transfer.change.description",
            "values": []
          },
          "left-check-change": {
            "type": "method",
            "description": "tags.el-transfer.left-check-change.description",
            "values": []
          },
          "right-check-change": {
            "type": "method",
            "description": "tags.el-transfer.right-check-change.description",
            "values": []
          }
        },
        "el-upload": {
          "actionrequired": {
            "type": "attribute",
            "description": "tags.el-upload.actionrequired.description",
            "values": ["string"]
          },
          "headers": {
            "type": "attribute",
            "description": "tags.el-upload.headers.description",
            "values": ["object"]
          },
          "method": {
            "type": "attribute",
            "description": "tags.el-upload.method.description",
            "values": ["string"]
          },
          "multiple": {
            "type": "attribute",
            "description": "tags.el-upload.multiple.description",
            "values": ["boolean"]
          },
          "data": {
            "type": "attribute",
            "description": "tags.el-upload.data.description",
            "values": ["object"]
          },
          "name": {
            "type": "attribute",
            "description": "tags.el-upload.name.description",
            "values": ["string"]
          },
          "with-credentials": {
            "type": "attribute",
            "description": "tags.el-upload.with-credentials.description",
            "values": ["boolean"]
          },
          "show-file-list": {
            "type": "attribute",
            "description": "tags.el-upload.show-file-list.description",
            "values": ["boolean"]
          },
          "drag": {
            "type": "attribute",
            "description": "tags.el-upload.drag.description",
            "values": ["boolean"]
          },
          "accept": {
            "type": "attribute",
            "description": "tags.el-upload.accept.description",
            "values": ["string"]
          },
          "crossorigin": {
            "type": "attribute",
            "description": "tags.el-upload.crossorigin.description",
            "values": ["anonymous", "use-credentials"]
          },
          "on-preview": {
            "type": "attribute",
            "description": "tags.el-upload.on-preview.description",
            "values": ["Function"]
          },
          "on-remove": {
            "type": "attribute",
            "description": "tags.el-upload.on-remove.description",
            "values": ["Function"]
          },
          "on-success": {
            "type": "attribute",
            "description": "tags.el-upload.on-success.description",
            "values": ["Function"]
          },
          "on-error": {
            "type": "attribute",
            "description": "tags.el-upload.on-error.description",
            "values": ["Function"]
          },
          "on-progress": {
            "type": "attribute",
            "description": "tags.el-upload.on-progress.description",
            "values": ["Function"]
          },
          "on-change": {
            "type": "attribute",
            "description": "tags.el-upload.on-change.description",
            "values": ["Function"]
          },
          "on-exceed": {
            "type": "attribute",
            "description": "tags.el-upload.on-exceed.description",
            "values": ["Function"]
          },
          "before-upload": {
            "type": "attribute",
            "description": "tags.el-upload.before-upload.description",
            "values": ["Function"]
          },
          "before-remove": {
            "type": "attribute",
            "description": "tags.el-upload.before-remove.description",
            "values": ["Function"]
          },
          "v-model:file-list": {
            "type": "attribute",
            "description": "tags.el-upload.v-model:file-list.description",
            "values": ["object"]
          },
          "list-type": {
            "type": "attribute",
            "description": "tags.el-upload.list-type.description",
            "values": ["text", "picture", "picture-card"]
          },
          "auto-upload": {
            "type": "attribute",
            "description": "tags.el-upload.auto-upload.description",
            "values": ["boolean"]
          },
          "http-request": {
            "type": "attribute",
            "description": "tags.el-upload.http-request.description",
            "values": ["Function"]
          },
          "disabled": {
            "type": "attribute",
            "description": "tags.el-upload.disabled.description",
            "values": ["boolean"]
          },
          "limit": {
            "type": "attribute",
            "description": "tags.el-upload.limit.description",
            "values": ["number"]
          }
        },
        "el-avatar": {
          "icon": {
            "type": "attribute",
            "description": "tags.el-avatar.icon.description",
            "values": ["string"]
          },
          "size": {
            "type": "attribute",
            "description": "tags.el-avatar.size.description",
            "values": ["number"]
          },
          "shape": {
            "type": "attribute",
            "description": "tags.el-avatar.shape.description",
            "values": ["circle", "square"]
          },
          "src": {
            "type": "attribute",
            "description": "tags.el-avatar.src.description",
            "values": ["string"]
          },
          "src-set": {
            "type": "attribute",
            "description": "tags.el-avatar.src-set.description",
            "values": ["string"]
          },
          "alt": {
            "type": "attribute",
            "description": "tags.el-avatar.alt.description",
            "values": ["string"]
          },
          "fit": {
            "type": "attribute",
            "description": "tags.el-avatar.fit.description",
            "values": ["fill", "contain", "cover", "none", "scale-down"]
          },
          "error": {
            "type": "method",
            "description": "tags.el-avatar.error.description",
            "values": []
          }
        },
        "el-badge": {
          "value": {
            "type": "attribute",
            "description": "tags.el-badge.value.description",
            "values": ["string"]
          },
          "max": {
            "type": "attribute",
            "description": "tags.el-badge.max.description",
            "values": ["number"]
          },
          "is-dot": {
            "type": "attribute",
            "description": "tags.el-badge.is-dot.description",
            "values": ["boolean"]
          },
          "hidden": {
            "type": "attribute",
            "description": "tags.el-badge.hidden.description",
            "values": ["boolean"]
          },
          "type": {
            "type": "attribute",
            "description": "tags.el-badge.type.description",
            "values": ["primary", "success", "warning", "danger", "info"]
          },
          "show-zero": {
            "type": "attribute",
            "description": "tags.el-badge.show-zero.description",
            "values": ["boolean"]
          },
          "color": {
            "type": "attribute",
            "description": "tags.el-badge.color.description",
            "values": ["string"]
          },
          "offset": {
            "type": "attribute",
            "description": "tags.el-badge.offset.description",
            "values": ["["]
          },
          "badge-style": {
            "type": "attribute",
            "description": "tags.el-badge.badge-style.description",
            "values": ["object"]
          },
          "badge-class": {
            "type": "attribute",
            "description": "tags.el-badge.badge-class.description",
            "values": ["string"]
          }
        },
        "el-calendar": {
          "v-model": {
            "type": "attribute",
            "description": "tags.el-calendar.v-model.description",
            "values": ["Date"]
          },
          "range": {
            "type": "attribute",
            "description": "tags.el-calendar.range.description",
            "values": ["array"]
          }
        },
        "el-card": {
          "header": {
            "type": "attribute",
            "description": "tags.el-card.header.description",
            "values": ["string"]
          },
          "footer": {
            "type": "attribute",
            "description": "tags.el-card.footer.description",
            "values": ["string"]
          },
          "body-style": {
            "type": "attribute",
            "description": "tags.el-card.body-style.description",
            "values": ["object"]
          },
          "body-class": {
            "type": "attribute",
            "description": "tags.el-card.body-class.description",
            "values": ["string"]
          },
          "shadow": {
            "type": "attribute",
            "description": "tags.el-card.shadow.description",
            "values": ["always", "never", "hover"]
          }
        },
        "el-carousel": {
          "height": {
            "type": "attribute",
            "description": "tags.el-carousel.height.description",
            "values": ["string"]
          },
          "initial-index": {
            "type": "attribute",
            "description": "tags.el-carousel.initial-index.description",
            "values": ["number"]
          },
          "trigger": {
            "type": "attribute",
            "description": "tags.el-carousel.trigger.description",
            "values": ["string"]
          },
          "autoplay": {
            "type": "attribute",
            "description": "tags.el-carousel.autoplay.description",
            "values": ["boolean"]
          },
          "interval": {
            "type": "attribute",
            "description": "tags.el-carousel.interval.description",
            "values": ["number"]
          },
          "indicator-position": {
            "type": "attribute",
            "description": "tags.el-carousel.indicator-position.description",
            "values": ["string"]
          },
          "arrow": {
            "type": "attribute",
            "description": "tags.el-carousel.arrow.description",
            "values": ["string"]
          },
          "type": {
            "type": "attribute",
            "description": "tags.el-carousel.type.description",
            "values": ["string"]
          },
          "loop": {
            "type": "attribute",
            "description": "tags.el-carousel.loop.description",
            "values": ["boolean"]
          },
          "direction": {
            "type": "attribute",
            "description": "tags.el-carousel.direction.description",
            "values": ["string"]
          },
          "pause-on-hover": {
            "type": "attribute",
            "description": "tags.el-carousel.pause-on-hover.description",
            "values": ["boolean"]
          },
          "motion-blur": {
            "type": "attribute",
            "description": "tags.el-carousel.motion-blur.description",
            "values": ["boolean"]
          },
          "change": {
            "type": "method",
            "description": "tags.el-carousel.change.description",
            "values": []
          },
          "name": {
            "type": "attribute",
            "description": "tags.el-carousel.name.description",
            "values": ["string"]
          },
          "label": {
            "type": "attribute",
            "description": "tags.el-carousel.label.description",
            "values": ["string"]
          }
        },
        "el-collapse": {
          "name": {
            "type": "attribute",
            "description": "tags.el-collapse.name.description",
            "values": ["string"]
          },
          "title": {
            "type": "attribute",
            "description": "tags.el-collapse.title.description",
            "values": ["string"]
          },
          "disabled": {
            "type": "attribute",
            "description": "tags.el-collapse.disabled.description",
            "values": ["boolean"]
          }
        },
        "el-descriptions": {
          "border": {
            "type": "attribute",
            "description": "tags.el-descriptions.border.description",
            "values": ["boolean"]
          },
          "column": {
            "type": "attribute",
            "description": "tags.el-descriptions.column.description",
            "values": ["number"]
          },
          "direction": {
            "type": "attribute",
            "description": "tags.el-descriptions.direction.description",
            "values": ["horizontal", "vertical"]
          },
          "size": {
            "type": "attribute",
            "description": "tags.el-descriptions.size.description",
            "values": ["large", "large", "small"]
          },
          "title": {
            "type": "attribute",
            "description": "tags.el-descriptions.title.description",
            "values": ["string"]
          },
          "extra": {
            "type": "attribute",
            "description": "tags.el-descriptions.extra.description",
            "values": ["string"]
          }
        },
        "el-descriptions-item": {
          "label": {
            "type": "attribute",
            "description": "tags.el-descriptions-item.label.description",
            "values": ["string"]
          },
          "span": {
            "type": "attribute",
            "description": "tags.el-descriptions-item.span.description",
            "values": ["number"]
          },
          "width": {
            "type": "attribute",
            "description": "tags.el-descriptions-item.width.description",
            "values": ["string"]
          },
          "min-width": {
            "type": "attribute",
            "description": "tags.el-descriptions-item.min-width.description",
            "values": ["string"]
          },
          "align": {
            "type": "attribute",
            "description": "tags.el-descriptions-item.align.description",
            "values": ["enum"]
          },
          "label-align": {
            "type": "attribute",
            "description": "tags.el-descriptions-item.label-align.description",
            "values": ["enum"]
          },
          "class-name": {
            "type": "attribute",
            "description": "tags.el-descriptions-item.class-name.description",
            "values": ["string"]
          },
          "label-class-name": {
            "type": "attribute",
            "description": "tags.el-descriptions-item.label-class-name.description",
            "values": ["string"]
          }
        },
        "el-empty": {
          "image": {
            "type": "attribute",
            "description": "tags.el-empty.image.description",
            "values": ["string"]
          },
          "image-size": {
            "type": "attribute",
            "description": "tags.el-empty.image-size.description",
            "values": ["number"]
          },
          "description": {
            "type": "attribute",
            "description": "tags.el-empty.description.description",
            "values": ["string"]
          }
        },
        "el-image": {
          "url-list": {
            "type": "attribute",
            "description": "tags.el-image.url-list.description",
            "values": ["object"]
          },
          "z-index": {
            "type": "attribute",
            "description": "tags.el-image.z-index.description",
            "values": ["number"]
          },
          "initial-index": {
            "type": "attribute",
            "description": "tags.el-image.initial-index.description",
            "values": ["number"]
          },
          "infinite": {
            "type": "attribute",
            "description": "tags.el-image.infinite.description",
            "values": ["boolean"]
          },
          "hide-on-click-modal": {
            "type": "attribute",
            "description": "tags.el-image.hide-on-click-modal.description",
            "values": ["boolean"]
          },
          "teleported": {
            "type": "attribute",
            "description": "tags.el-image.teleported.description",
            "values": ["boolean"]
          },
          "zoom-rate": {
            "type": "attribute",
            "description": "tags.el-image.zoom-rate.description",
            "values": ["number"]
          },
          "min-scale": {
            "type": "attribute",
            "description": "tags.el-image.min-scale.description",
            "values": ["number"]
          },
          "max-scale": {
            "type": "attribute",
            "description": "tags.el-image.max-scale.description",
            "values": ["number"]
          },
          "close-on-press-escape": {
            "type": "attribute",
            "description": "tags.el-image.close-on-press-escape.description",
            "values": ["boolean"]
          },
          "close": {
            "type": "method",
            "description": "tags.el-image.close.description",
            "values": []
          },
          "switch": {
            "type": "method",
            "description": "tags.el-image.switch.description",
            "values": []
          },
          "rotate": {
            "type": "method",
            "description": "tags.el-image.rotate.description",
            "values": []
          }
        },
        "el-infinite-scroll": {},
        "el-pagination": {
          "small": {
            "type": "attribute",
            "description": "tags.el-pagination.small.description",
            "values": ["boolean"]
          },
          "background": {
            "type": "attribute",
            "description": "tags.el-pagination.background.description",
            "values": ["boolean"]
          },
          "v-model:page-size": {
            "type": "attribute",
            "description": "tags.el-pagination.v-model:page-size.description",
            "values": ["number"]
          },
          "default-page-size": {
            "type": "attribute",
            "description": "tags.el-pagination.default-page-size.description",
            "values": ["number"]
          },
          "total": {
            "type": "attribute",
            "description": "tags.el-pagination.total.description",
            "values": ["number"]
          },
          "page-count": {
            "type": "attribute",
            "description": "tags.el-pagination.page-count.description",
            "values": ["number"]
          },
          "pager-count": {
            "type": "attribute",
            "description": "tags.el-pagination.pager-count.description",
            "values": ["number"]
          },
          "v-model:current-page": {
            "type": "attribute",
            "description": "tags.el-pagination.v-model:current-page.description",
            "values": ["number"]
          },
          "default-current-page": {
            "type": "attribute",
            "description": "tags.el-pagination.default-current-page.description",
            "values": ["number"]
          },
          "layout": {
            "type": "attribute",
            "description": "tags.el-pagination.layout.description",
            "values": ["string"]
          },
          "page-sizes": {
            "type": "attribute",
            "description": "tags.el-pagination.page-sizes.description",
            "values": ["object"]
          },
          "popper-class": {
            "type": "attribute",
            "description": "tags.el-pagination.popper-class.description",
            "values": ["string"]
          },
          "prev-text": {
            "type": "attribute",
            "description": "tags.el-pagination.prev-text.description",
            "values": ["string"]
          },
          "prev-icon": {
            "type": "attribute",
            "description": "tags.el-pagination.prev-icon.description",
            "values": ["string"]
          },
          "next-text": {
            "type": "attribute",
            "description": "tags.el-pagination.next-text.description",
            "values": ["string"]
          },
          "next-icon": {
            "type": "attribute",
            "description": "tags.el-pagination.next-icon.description",
            "values": ["string"]
          },
          "disabled": {
            "type": "attribute",
            "description": "tags.el-pagination.disabled.description",
            "values": ["boolean"]
          },
          "teleported": {
            "type": "attribute",
            "description": "tags.el-pagination.teleported.description",
            "values": ["boolean"]
          },
          "hide-on-single-page": {
            "type": "attribute",
            "description": "tags.el-pagination.hide-on-single-page.description",
            "values": ["boolean"]
          },
          "size-change": {
            "type": "method",
            "description": "tags.el-pagination.size-change.description",
            "values": []
          },
          "current-change": {
            "type": "method",
            "description": "tags.el-pagination.current-change.description",
            "values": []
          },
          "change": {
            "type": "method",
            "description": "tags.el-pagination.change.description",
            "values": []
          },
          "prev-click": {
            "type": "method",
            "description": "tags.el-pagination.prev-click.description",
            "values": []
          },
          "next-click": {
            "type": "method",
            "description": "tags.el-pagination.next-click.description",
            "values": []
          }
        },
        "el-progress": {
          "percentagerequired": {
            "type": "attribute",
            "description": "tags.el-progress.percentagerequired.description",
            "values": ["number"]
          },
          "type": {
            "type": "attribute",
            "description": "tags.el-progress.type.description",
            "values": ["line", "circle", "dashboard"]
          },
          "stroke-width": {
            "type": "attribute",
            "description": "tags.el-progress.stroke-width.description",
            "values": ["number"]
          },
          "text-inside": {
            "type": "attribute",
            "description": "tags.el-progress.text-inside.description",
            "values": ["boolean"]
          },
          "status": {
            "type": "attribute",
            "description": "tags.el-progress.status.description",
            "values": ["success", "exception", "warning"]
          },
          "indeterminate": {
            "type": "attribute",
            "description": "tags.el-progress.indeterminate.description",
            "values": ["boolean"]
          },
          "duration": {
            "type": "attribute",
            "description": "tags.el-progress.duration.description",
            "values": ["number"]
          },
          "color": {
            "type": "attribute",
            "description": "tags.el-progress.color.description",
            "values": ["string"]
          },
          "width": {
            "type": "attribute",
            "description": "tags.el-progress.width.description",
            "values": ["number"]
          },
          "show-text": {
            "type": "attribute",
            "description": "tags.el-progress.show-text.description",
            "values": ["boolean"]
          },
          "stroke-linecap": {
            "type": "attribute",
            "description": "tags.el-progress.stroke-linecap.description",
            "values": ["butt", "round", "square"]
          },
          "format": {
            "type": "attribute",
            "description": "tags.el-progress.format.description",
            "values": ["Function"]
          },
          "striped": {
            "type": "attribute",
            "description": "tags.el-progress.striped.description",
            "values": ["boolean"]
          },
          "striped-flow": {
            "type": "attribute",
            "description": "tags.el-progress.striped-flow.description",
            "values": ["boolean"]
          }
        },
        "el-result": {
          "title": {
            "type": "attribute",
            "description": "tags.el-result.title.description",
            "values": ["string"]
          },
          "sub-title": {
            "type": "attribute",
            "description": "tags.el-result.sub-title.description",
            "values": ["string"]
          },
          "icon": {
            "type": "attribute",
            "description": "tags.el-result.icon.description",
            "values": ["enum"]
          }
        },
        "el-skeleton": {
          "animated": {
            "type": "attribute",
            "description": "tags.el-skeleton.animated.description",
            "values": ["boolean"]
          },
          "count": {
            "type": "attribute",
            "description": "tags.el-skeleton.count.description",
            "values": ["number"]
          },
          "loading": {
            "type": "attribute",
            "description": "tags.el-skeleton.loading.description",
            "values": ["boolean"]
          },
          "rows": {
            "type": "attribute",
            "description": "tags.el-skeleton.rows.description",
            "values": ["number"]
          },
          "throttle": {
            "type": "attribute",
            "description": "tags.el-skeleton.throttle.description",
            "values": ["number"]
          }
        },
        "el-skeleton-item": {
          "variant": {
            "type": "attribute",
            "description": "tags.el-skeleton-item.variant.description",
            "values": ["p", "text", "h1", "h3", "caption", "button", "image", "circle", "rect"]
          }
        },
        "el-table": {
          "data": {
            "type": "attribute",
            "description": "tags.el-table.data.description",
            "values": ["object"]
          },
          "height": {
            "type": "attribute",
            "description": "tags.el-table.height.description",
            "values": ["string"]
          },
          "max-height": {
            "type": "attribute",
            "description": "tags.el-table.max-height.description",
            "values": ["string"]
          },
          "stripe": {
            "type": "attribute",
            "description": "tags.el-table.stripe.description",
            "values": ["boolean"]
          },
          "border": {
            "type": "attribute",
            "description": "tags.el-table.border.description",
            "values": ["boolean"]
          },
          "size": {
            "type": "attribute",
            "description": "tags.el-table.size.description",
            "values": ["large", "large", "small"]
          },
          "fit": {
            "type": "attribute",
            "description": "tags.el-table.fit.description",
            "values": ["boolean"]
          },
          "show-header": {
            "type": "attribute",
            "description": "tags.el-table.show-header.description",
            "values": ["boolean"]
          },
          "highlight-current-row": {
            "type": "attribute",
            "description": "tags.el-table.highlight-current-row.description",
            "values": ["boolean"]
          },
          "current-row-key": {
            "type": "attribute",
            "description": "tags.el-table.current-row-key.description",
            "values": ["string"]
          },
          "row-class-name": {
            "type": "attribute",
            "description": "tags.el-table.row-class-name.description",
            "values": ["Function"]
          },
          "row-style": {
            "type": "attribute",
            "description": "tags.el-table.row-style.description",
            "values": ["Function"]
          },
          "cell-class-name": {
            "type": "attribute",
            "description": "tags.el-table.cell-class-name.description",
            "values": ["Function"]
          },
          "cell-style": {
            "type": "attribute",
            "description": "tags.el-table.cell-style.description",
            "values": ["Function"]
          },
          "header-row-class-name": {
            "type": "attribute",
            "description": "tags.el-table.header-row-class-name.description",
            "values": ["Function"]
          },
          "header-row-style": {
            "type": "attribute",
            "description": "tags.el-table.header-row-style.description",
            "values": ["Function"]
          },
          "header-cell-class-name": {
            "type": "attribute",
            "description": "tags.el-table.header-cell-class-name.description",
            "values": ["Function"]
          },
          "header-cell-style": {
            "type": "attribute",
            "description": "tags.el-table.header-cell-style.description",
            "values": ["Function"]
          },
          "row-key": {
            "type": "attribute",
            "description": "tags.el-table.row-key.description",
            "values": ["function"]
          },
          "empty-text": {
            "type": "attribute",
            "description": "tags.el-table.empty-text.description",
            "values": ["string"]
          },
          "default-expand-all": {
            "type": "attribute",
            "description": "tags.el-table.default-expand-all.description",
            "values": ["boolean"]
          },
          "expand-row-keys": {
            "type": "attribute",
            "description": "tags.el-table.expand-row-keys.description",
            "values": ["object"]
          },
          "default-sort": {
            "type": "attribute",
            "description": "tags.el-table.default-sort.description",
            "values": ["object"]
          },
          "tooltip-effect": {
            "type": "attribute",
            "description": "tags.el-table.tooltip-effect.description",
            "values": ["dark", "light"]
          },
          "tooltip-options": {
            "type": "attribute",
            "description": "tags.el-table.tooltip-options.description",
            "values": ["object"]
          },
          "show-summary": {
            "type": "attribute",
            "description": "tags.el-table.show-summary.description",
            "values": ["boolean"]
          },
          "sum-text": {
            "type": "attribute",
            "description": "tags.el-table.sum-text.description",
            "values": ["string"]
          },
          "summary-method": {
            "type": "attribute",
            "description": "tags.el-table.summary-method.description",
            "values": ["Function"]
          },
          "span-method": {
            "type": "attribute",
            "description": "tags.el-table.span-method.description",
            "values": ["Function"]
          },
          "select-on-indeterminate": {
            "type": "attribute",
            "description": "tags.el-table.select-on-indeterminate.description",
            "values": ["boolean"]
          },
          "indent": {
            "type": "attribute",
            "description": "tags.el-table.indent.description",
            "values": ["number"]
          },
          "lazy": {
            "type": "attribute",
            "description": "tags.el-table.lazy.description",
            "values": ["boolean"]
          },
          "load": {
            "type": "attribute",
            "description": "tags.el-table.load.description",
            "values": ["Function"]
          },
          "tree-props": {
            "type": "attribute",
            "description": "tags.el-table.tree-props.description",
            "values": ["object"]
          },
          "table-layout": {
            "type": "attribute",
            "description": "tags.el-table.table-layout.description",
            "values": ["fixed", "auto"]
          },
          "scrollbar-always-on": {
            "type": "attribute",
            "description": "tags.el-table.scrollbar-always-on.description",
            "values": ["boolean"]
          },
          "show-overflow-tooltip": {
            "type": "attribute",
            "description": "tags.el-table.show-overflow-tooltip.description",
            "values": ["boolean"]
          },
          "flexible": {
            "type": "attribute",
            "description": "tags.el-table.flexible.description",
            "values": ["boolean"]
          },
          "select": {
            "type": "method",
            "description": "tags.el-table.select.description",
            "values": []
          },
          "select-all": {
            "type": "method",
            "description": "tags.el-table.select-all.description",
            "values": []
          },
          "selection-change": {
            "type": "method",
            "description": "tags.el-table.selection-change.description",
            "values": []
          },
          "cell-mouse-enter": {
            "type": "method",
            "description": "tags.el-table.cell-mouse-enter.description",
            "values": []
          },
          "cell-mouse-leave": {
            "type": "method",
            "description": "tags.el-table.cell-mouse-leave.description",
            "values": []
          },
          "cell-click": {
            "type": "method",
            "description": "tags.el-table.cell-click.description",
            "values": []
          },
          "cell-dblclick": {
            "type": "method",
            "description": "tags.el-table.cell-dblclick.description",
            "values": []
          },
          "cell-contextmenu": {
            "type": "method",
            "description": "tags.el-table.cell-contextmenu.description",
            "values": []
          },
          "row-click": {
            "type": "method",
            "description": "tags.el-table.row-click.description",
            "values": []
          },
          "row-contextmenu": {
            "type": "method",
            "description": "tags.el-table.row-contextmenu.description",
            "values": []
          },
          "row-dblclick": {
            "type": "method",
            "description": "tags.el-table.row-dblclick.description",
            "values": []
          },
          "header-click": {
            "type": "method",
            "description": "tags.el-table.header-click.description",
            "values": []
          },
          "header-contextmenu": {
            "type": "method",
            "description": "tags.el-table.header-contextmenu.description",
            "values": []
          },
          "sort-change": {
            "type": "method",
            "description": "tags.el-table.sort-change.description",
            "values": []
          },
          "filter-change": {
            "type": "method",
            "description": "tags.el-table.filter-change.description",
            "values": []
          },
          "current-change": {
            "type": "method",
            "description": "tags.el-table.current-change.description",
            "values": []
          },
          "header-dragend": {
            "type": "method",
            "description": "tags.el-table.header-dragend.description",
            "values": []
          },
          "expand-change": {
            "type": "method",
            "description": "tags.el-table.expand-change.description",
            "values": []
          }
        },
        "el-table-column": {
          "type": {
            "type": "attribute",
            "description": "tags.el-table-column.type.description",
            "values": ["default", "selection", "index", "expand"]
          },
          "index": {
            "type": "attribute",
            "description": "tags.el-table-column.index.description",
            "values": ["number"]
          },
          "label": {
            "type": "attribute",
            "description": "tags.el-table-column.label.description",
            "values": ["string"]
          },
          "column-key": {
            "type": "attribute",
            "description": "tags.el-table-column.column-key.description",
            "values": ["string"]
          },
          "prop": {
            "type": "attribute",
            "description": "tags.el-table-column.prop.description",
            "values": ["string"]
          },
          "width": {
            "type": "attribute",
            "description": "tags.el-table-column.width.description",
            "values": ["string"]
          },
          "min-width": {
            "type": "attribute",
            "description": "tags.el-table-column.min-width.description",
            "values": ["string"]
          },
          "fixed": {
            "type": "attribute",
            "description": "tags.el-table-column.fixed.description",
            "values": ["left", "right"]
          },
          "render-header": {
            "type": "attribute",
            "description": "tags.el-table-column.render-header.description",
            "values": ["Function"]
          },
          "sortable": {
            "type": "attribute",
            "description": "tags.el-table-column.sortable.description",
            "values": ["boolean"]
          },
          "sort-method": {
            "type": "attribute",
            "description": "tags.el-table-column.sort-method.description",
            "values": ["Function"]
          },
          "sort-by": {
            "type": "attribute",
            "description": "tags.el-table-column.sort-by.description",
            "values": ["Function"]
          },
          "sort-orders": {
            "type": "attribute",
            "description": "tags.el-table-column.sort-orders.description",
            "values": ["object"]
          },
          "resizable": {
            "type": "attribute",
            "description": "tags.el-table-column.resizable.description",
            "values": ["boolean"]
          },
          "formatter": {
            "type": "attribute",
            "description": "tags.el-table-column.formatter.description",
            "values": ["function"]
          },
          "show-overflow-tooltip": {
            "type": "attribute",
            "description": "tags.el-table-column.show-overflow-tooltip.description",
            "values": ["boolean"]
          },
          "align": {
            "type": "attribute",
            "description": "tags.el-table-column.align.description",
            "values": ["left", "center", "right"]
          },
          "header-align": {
            "type": "attribute",
            "description": "tags.el-table-column.header-align.description",
            "values": ["left", "center", "right"]
          },
          "class-name": {
            "type": "attribute",
            "description": "tags.el-table-column.class-name.description",
            "values": ["string"]
          },
          "label-class-name": {
            "type": "attribute",
            "description": "tags.el-table-column.label-class-name.description",
            "values": ["string"]
          },
          "selectable": {
            "type": "attribute",
            "description": "tags.el-table-column.selectable.description",
            "values": ["Function"]
          },
          "reserve-selection": {
            "type": "attribute",
            "description": "tags.el-table-column.reserve-selection.description",
            "values": ["boolean"]
          },
          "filters": {
            "type": "attribute",
            "description": "tags.el-table-column.filters.description",
            "values": ["object"]
          },
          "filter-placement": {
            "type": "attribute",
            "description": "tags.el-table-column.filter-placement.description",
            "values": ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end", "right", "right-start", "right-end"]
          },
          "filter-class-name": {
            "type": "attribute",
            "description": "tags.el-table-column.filter-class-name.description",
            "values": ["string"]
          },
          "filter-multiple": {
            "type": "attribute",
            "description": "tags.el-table-column.filter-multiple.description",
            "values": ["boolean"]
          },
          "filter-method": {
            "type": "attribute",
            "description": "tags.el-table-column.filter-method.description",
            "values": ["function"]
          },
          "filtered-value": {
            "type": "attribute",
            "description": "tags.el-table-column.filtered-value.description",
            "values": ["object"]
          }
        },
        "el-table-v2": {
          "data": {
            "type": "attribute",
            "description": "tags.el-table-v2.data.description",
            "values": ["object"]
          },
          "height": {
            "type": "attribute",
            "description": "tags.el-table-v2.height.description",
            "values": ["string"]
          },
          "max-height": {
            "type": "attribute",
            "description": "tags.el-table-v2.max-height.description",
            "values": ["string"]
          },
          "stripe": {
            "type": "attribute",
            "description": "tags.el-table-v2.stripe.description",
            "values": ["boolean"]
          },
          "border": {
            "type": "attribute",
            "description": "tags.el-table-v2.border.description",
            "values": ["boolean"]
          },
          "size": {
            "type": "attribute",
            "description": "tags.el-table-v2.size.description",
            "values": ["large", "large", "small"]
          },
          "fit": {
            "type": "attribute",
            "description": "tags.el-table-v2.fit.description",
            "values": ["boolean"]
          },
          "show-header": {
            "type": "attribute",
            "description": "tags.el-table-v2.show-header.description",
            "values": ["boolean"]
          },
          "highlight-current-row": {
            "type": "attribute",
            "description": "tags.el-table-v2.highlight-current-row.description",
            "values": ["boolean"]
          },
          "current-row-key": {
            "type": "attribute",
            "description": "tags.el-table-v2.current-row-key.description",
            "values": ["string"]
          },
          "row-class-name": {
            "type": "attribute",
            "description": "tags.el-table-v2.row-class-name.description",
            "values": ["Function"]
          },
          "row-style": {
            "type": "attribute",
            "description": "tags.el-table-v2.row-style.description",
            "values": ["Function"]
          },
          "cell-class-name": {
            "type": "attribute",
            "description": "tags.el-table-v2.cell-class-name.description",
            "values": ["Function"]
          },
          "cell-style": {
            "type": "attribute",
            "description": "tags.el-table-v2.cell-style.description",
            "values": ["Function"]
          },
          "header-row-class-name": {
            "type": "attribute",
            "description": "tags.el-table-v2.header-row-class-name.description",
            "values": ["Function"]
          },
          "header-row-style": {
            "type": "attribute",
            "description": "tags.el-table-v2.header-row-style.description",
            "values": ["Function"]
          },
          "header-cell-class-name": {
            "type": "attribute",
            "description": "tags.el-table-v2.header-cell-class-name.description",
            "values": ["Function"]
          },
          "header-cell-style": {
            "type": "attribute",
            "description": "tags.el-table-v2.header-cell-style.description",
            "values": ["Function"]
          },
          "row-key": {
            "type": "attribute",
            "description": "tags.el-table-v2.row-key.description",
            "values": ["function"]
          },
          "empty-text": {
            "type": "attribute",
            "description": "tags.el-table-v2.empty-text.description",
            "values": ["string"]
          },
          "default-expand-all": {
            "type": "attribute",
            "description": "tags.el-table-v2.default-expand-all.description",
            "values": ["boolean"]
          },
          "expand-row-keys": {
            "type": "attribute",
            "description": "tags.el-table-v2.expand-row-keys.description",
            "values": ["object"]
          },
          "default-sort": {
            "type": "attribute",
            "description": "tags.el-table-v2.default-sort.description",
            "values": ["object"]
          },
          "tooltip-effect": {
            "type": "attribute",
            "description": "tags.el-table-v2.tooltip-effect.description",
            "values": ["dark", "light"]
          },
          "tooltip-options": {
            "type": "attribute",
            "description": "tags.el-table-v2.tooltip-options.description",
            "values": ["object"]
          },
          "show-summary": {
            "type": "attribute",
            "description": "tags.el-table-v2.show-summary.description",
            "values": ["boolean"]
          },
          "sum-text": {
            "type": "attribute",
            "description": "tags.el-table-v2.sum-text.description",
            "values": ["string"]
          },
          "summary-method": {
            "type": "attribute",
            "description": "tags.el-table-v2.summary-method.description",
            "values": ["Function"]
          },
          "span-method": {
            "type": "attribute",
            "description": "tags.el-table-v2.span-method.description",
            "values": ["Function"]
          },
          "select-on-indeterminate": {
            "type": "attribute",
            "description": "tags.el-table-v2.select-on-indeterminate.description",
            "values": ["boolean"]
          },
          "indent": {
            "type": "attribute",
            "description": "tags.el-table-v2.indent.description",
            "values": ["number"]
          },
          "lazy": {
            "type": "attribute",
            "description": "tags.el-table-v2.lazy.description",
            "values": ["boolean"]
          },
          "load": {
            "type": "attribute",
            "description": "tags.el-table-v2.load.description",
            "values": ["Function"]
          },
          "tree-props": {
            "type": "attribute",
            "description": "tags.el-table-v2.tree-props.description",
            "values": ["object"]
          },
          "table-layout": {
            "type": "attribute",
            "description": "tags.el-table-v2.table-layout.description",
            "values": ["fixed", "auto"]
          },
          "scrollbar-always-on": {
            "type": "attribute",
            "description": "tags.el-table-v2.scrollbar-always-on.description",
            "values": ["boolean"]
          },
          "show-overflow-tooltip": {
            "type": "attribute",
            "description": "tags.el-table-v2.show-overflow-tooltip.description",
            "values": ["boolean"]
          },
          "flexible": {
            "type": "attribute",
            "description": "tags.el-table-v2.flexible.description",
            "values": ["boolean"]
          },
          "select": {
            "type": "method",
            "description": "tags.el-table-v2.select.description",
            "values": []
          },
          "select-all": {
            "type": "method",
            "description": "tags.el-table-v2.select-all.description",
            "values": []
          },
          "selection-change": {
            "type": "method",
            "description": "tags.el-table-v2.selection-change.description",
            "values": []
          },
          "cell-mouse-enter": {
            "type": "method",
            "description": "tags.el-table-v2.cell-mouse-enter.description",
            "values": []
          },
          "cell-mouse-leave": {
            "type": "method",
            "description": "tags.el-table-v2.cell-mouse-leave.description",
            "values": []
          },
          "cell-click": {
            "type": "method",
            "description": "tags.el-table-v2.cell-click.description",
            "values": []
          },
          "cell-dblclick": {
            "type": "method",
            "description": "tags.el-table-v2.cell-dblclick.description",
            "values": []
          },
          "cell-contextmenu": {
            "type": "method",
            "description": "tags.el-table-v2.cell-contextmenu.description",
            "values": []
          },
          "row-click": {
            "type": "method",
            "description": "tags.el-table-v2.row-click.description",
            "values": []
          },
          "row-contextmenu": {
            "type": "method",
            "description": "tags.el-table-v2.row-contextmenu.description",
            "values": []
          },
          "row-dblclick": {
            "type": "method",
            "description": "tags.el-table-v2.row-dblclick.description",
            "values": []
          },
          "header-click": {
            "type": "method",
            "description": "tags.el-table-v2.header-click.description",
            "values": []
          },
          "header-contextmenu": {
            "type": "method",
            "description": "tags.el-table-v2.header-contextmenu.description",
            "values": []
          },
          "sort-change": {
            "type": "method",
            "description": "tags.el-table-v2.sort-change.description",
            "values": []
          },
          "filter-change": {
            "type": "method",
            "description": "tags.el-table-v2.filter-change.description",
            "values": []
          },
          "current-change": {
            "type": "method",
            "description": "tags.el-table-v2.current-change.description",
            "values": []
          },
          "header-dragend": {
            "type": "method",
            "description": "tags.el-table-v2.header-dragend.description",
            "values": []
          },
          "expand-change": {
            "type": "method",
            "description": "tags.el-table-v2.expand-change.description",
            "values": []
          }
        },
        "el-tag": {
          "type": {
            "type": "attribute",
            "description": "tags.el-tag.type.description",
            "values": ["primary", "success", "warning", "danger", "info"]
          },
          "closable": {
            "type": "attribute",
            "description": "tags.el-tag.closable.description",
            "values": ["boolean"]
          },
          "disable-transitions": {
            "type": "attribute",
            "description": "tags.el-tag.disable-transitions.description",
            "values": ["boolean"]
          },
          "hit": {
            "type": "attribute",
            "description": "tags.el-tag.hit.description",
            "values": ["boolean"]
          },
          "color": {
            "type": "attribute",
            "description": "tags.el-tag.color.description",
            "values": ["string"]
          },
          "size": {
            "type": "attribute",
            "description": "tags.el-tag.size.description",
            "values": ["large", "large", "small"]
          },
          "effect": {
            "type": "attribute",
            "description": "tags.el-tag.effect.description",
            "values": ["dark", "light"]
          },
          "round": {
            "type": "attribute",
            "description": "tags.el-tag.round.description",
            "values": ["boolean"]
          },
          "click": {
            "type": "method",
            "description": "tags.el-tag.click.description",
            "values": []
          },
          "close": {
            "type": "method",
            "description": "tags.el-tag.close.description",
            "values": []
          }
        },
        "el-check-tag": {
          "v-model:checked": {
            "type": "attribute",
            "description": "tags.el-check-tag.v-model:checked.description",
            "values": ["boolean"]
          },
          "type": {
            "type": "attribute",
            "description": "tags.el-check-tag.type.description",
            "values": ["primary", "success", "warning", "danger", "info"]
          },
          "change": {
            "type": "method",
            "description": "tags.el-check-tag.change.description",
            "values": []
          }
        },
        "el-timeline": {},
        "el-timeline--item": {
          "timestamp": {
            "type": "attribute",
            "description": "tags.el-timeline--item.timestamp.description",
            "values": ["string"]
          },
          "hide-timestamp": {
            "type": "attribute",
            "description": "tags.el-timeline--item.hide-timestamp.description",
            "values": ["boolean"]
          },
          "center": {
            "type": "attribute",
            "description": "tags.el-timeline--item.center.description",
            "values": ["boolean"]
          },
          "placement": {
            "type": "attribute",
            "description": "tags.el-timeline--item.placement.description",
            "values": ["enum"]
          },
          "type": {
            "type": "attribute",
            "description": "tags.el-timeline--item.type.description",
            "values": ["primary", "success", "warning", "danger", "info"]
          },
          "color": {
            "type": "attribute",
            "description": "tags.el-timeline--item.color.description",
            "values": ["enum"]
          },
          "size": {
            "type": "attribute",
            "description": "tags.el-timeline--item.size.description",
            "values": ["large", "large", "small"]
          },
          "icon": {
            "type": "attribute",
            "description": "tags.el-timeline--item.icon.description",
            "values": ["string"]
          },
          "hollow": {
            "type": "attribute",
            "description": "tags.el-timeline--item.hollow.description",
            "values": ["boolean"]
          }
        },
        "el-tour": {
          "show-arrow": {
            "type": "attribute",
            "description": "tags.el-tour.show-arrow.description",
            "values": ["boolean"]
          },
          "placement": {
            "type": "attribute",
            "description": "tags.el-tour.placement.description",
            "values": ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end", "right", "right-start", "right-end"]
          },
          "content-style": {
            "type": "attribute",
            "description": "tags.el-tour.content-style.description",
            "values": ["CSSProperties"]
          },
          "mask": {
            "type": "attribute",
            "description": "tags.el-tour.mask.description",
            "values": ["boolean", "Object"]
          },
          "type": {
            "type": "attribute",
            "description": "tags.el-tour.type.description",
            "values": ["default", "primary"]
          },
          "v-model": {
            "type": "attribute",
            "description": "tags.el-tour.v-model.description",
            "values": ["boolean"]
          },
          "v-model:current": {
            "type": "attribute",
            "description": "tags.el-tour.v-model:current.description",
            "values": ["number"]
          },
          "scroll-into-view-options": {
            "type": "attribute",
            "description": "tags.el-tour.scroll-into-view-options.description",
            "values": ["boolean", "ScrollIntoViewOptions"]
          },
          "z-index": {
            "type": "attribute",
            "description": "tags.el-tour.z-index.description",
            "values": ["number"]
          },
          "show-close": {
            "type": "attribute",
            "description": "tags.el-tour.show-close.description",
            "values": ["boolean"]
          },
          "close-icon": {
            "type": "attribute",
            "description": "tags.el-tour.close-icon.description",
            "values": ["string", "Component"]
          },
          "close-on-press-escape": {
            "type": "attribute",
            "description": "tags.el-tour.close-on-press-escape.description",
            "values": ["boolean"]
          },
          "target-area-clickable": {
            "type": "attribute",
            "description": "tags.el-tour.target-area-clickable.description",
            "values": ["boolean"]
          },
          "close": {
            "type": "method",
            "description": "tags.el-tour.close.description",
            "values": []
          },
          "finish": {
            "type": "method",
            "description": "tags.el-tour.finish.description",
            "values": []
          },
          "change": {
            "type": "method",
            "description": "tags.el-tour.change.description",
            "values": []
          },
          "target": {
            "type": "attribute",
            "description": "tags.el-tour.target.description",
            "values": ["HTMLElement", "string", "Function"]
          },
          "title": {
            "type": "attribute",
            "description": "tags.el-tour.title.description",
            "values": ["string"]
          },
          "description": {
            "type": "attribute",
            "description": "tags.el-tour.description.description",
            "values": ["string"]
          },
          "next-button-props": {
            "type": "attribute",
            "description": "tags.el-tour.next-button-props.description",
            "values": ["Object"]
          },
          "prev-button-props": {
            "type": "attribute",
            "description": "tags.el-tour.prev-button-props.description",
            "values": ["Object"]
          }
        },
        "el-tree": {
          "data": {
            "type": "attribute",
            "description": "tags.el-tree.data.description",
            "values": ["array"]
          },
          "empty-text": {
            "type": "attribute",
            "description": "tags.el-tree.empty-text.description",
            "values": ["string"]
          },
          "node-key": {
            "type": "attribute",
            "description": "tags.el-tree.node-key.description",
            "values": ["string"]
          },
          "props": {
            "type": "attribute",
            "description": "tags.el-tree.props.description",
            "values": ["object"]
          },
          "render-after-expand": {
            "type": "attribute",
            "description": "tags.el-tree.render-after-expand.description",
            "values": ["boolean"]
          },
          "load": {
            "type": "attribute",
            "description": "tags.el-tree.load.description",
            "values": ["function(node,"]
          },
          "render-content": {
            "type": "attribute",
            "description": "tags.el-tree.render-content.description",
            "values": ["Function(h,"]
          },
          "highlight-current": {
            "type": "attribute",
            "description": "tags.el-tree.highlight-current.description",
            "values": ["boolean"]
          },
          "default-expand-all": {
            "type": "attribute",
            "description": "tags.el-tree.default-expand-all.description",
            "values": ["boolean"]
          },
          "expand-on-click-node": {
            "type": "attribute",
            "description": "tags.el-tree.expand-on-click-node.description",
            "values": ["boolean"]
          },
          "check-on-click-node": {
            "type": "attribute",
            "description": "tags.el-tree.check-on-click-node.description",
            "values": ["boolean"]
          },
          "auto-expand-parent": {
            "type": "attribute",
            "description": "tags.el-tree.auto-expand-parent.description",
            "values": ["boolean"]
          },
          "default-expanded-keys": {
            "type": "attribute",
            "description": "tags.el-tree.default-expanded-keys.description",
            "values": ["array"]
          },
          "show-checkbox": {
            "type": "attribute",
            "description": "tags.el-tree.show-checkbox.description",
            "values": ["boolean"]
          },
          "check-strictly": {
            "type": "attribute",
            "description": "tags.el-tree.check-strictly.description",
            "values": ["boolean"]
          },
          "default-checked-keys": {
            "type": "attribute",
            "description": "tags.el-tree.default-checked-keys.description",
            "values": ["array"]
          },
          "current-node-key": {
            "type": "attribute",
            "description": "tags.el-tree.current-node-key.description",
            "values": ["string"]
          },
          "filter-node-method": {
            "type": "attribute",
            "description": "tags.el-tree.filter-node-method.description",
            "values": ["Function(value,"]
          },
          "accordion": {
            "type": "attribute",
            "description": "tags.el-tree.accordion.description",
            "values": ["boolean"]
          },
          "indent": {
            "type": "attribute",
            "description": "tags.el-tree.indent.description",
            "values": ["number"]
          },
          "icon": {
            "type": "attribute",
            "description": "tags.el-tree.icon.description",
            "values": ["string", "Component"]
          },
          "lazy": {
            "type": "attribute",
            "description": "tags.el-tree.lazy.description",
            "values": ["boolean"]
          },
          "draggable": {
            "type": "attribute",
            "description": "tags.el-tree.draggable.description",
            "values": ["boolean"]
          },
          "allow-drag": {
            "type": "attribute",
            "description": "tags.el-tree.allow-drag.description",
            "values": ["Function(node)"]
          },
          "allow-drop": {
            "type": "attribute",
            "description": "tags.el-tree.allow-drop.description",
            "values": ["Function(draggingNode,"]
          },
          "node-click": {
            "type": "method",
            "description": "tags.el-tree.node-click.description",
            "values": []
          },
          "node-contextmenu": {
            "type": "method",
            "description": "tags.el-tree.node-contextmenu.description",
            "values": []
          },
          "check-change": {
            "type": "method",
            "description": "tags.el-tree.check-change.description",
            "values": []
          },
          "check": {
            "type": "method",
            "description": "tags.el-tree.check.description",
            "values": []
          },
          "current-change": {
            "type": "method",
            "description": "tags.el-tree.current-change.description",
            "values": []
          },
          "node-expand": {
            "type": "method",
            "description": "tags.el-tree.node-expand.description",
            "values": []
          },
          "node-collapse": {
            "type": "method",
            "description": "tags.el-tree.node-collapse.description",
            "values": []
          },
          "node-drag-start": {
            "type": "method",
            "description": "tags.el-tree.node-drag-start.description",
            "values": []
          },
          "node-drag-enter": {
            "type": "method",
            "description": "tags.el-tree.node-drag-enter.description",
            "values": []
          },
          "node-drag-leave": {
            "type": "method",
            "description": "tags.el-tree.node-drag-leave.description",
            "values": []
          },
          "node-drag-over": {
            "type": "method",
            "description": "tags.el-tree.node-drag-over.description",
            "values": []
          },
          "node-drag-end": {
            "type": "method",
            "description": "tags.el-tree.node-drag-end.description",
            "values": []
          },
          "node-drop": {
            "type": "method",
            "description": "tags.el-tree.node-drop.description",
            "values": []
          }
        },
        "el-tree-select": {
          "tree": {
            "type": "attribute",
            "description": "tags.el-tree-select.tree.description",
            "values": ["tree"]
          },
          "select": {
            "type": "attribute",
            "description": "tags.el-tree-select.select.description",
            "values": ["select"]
          },
          "cacheData": {
            "type": "attribute",
            "description": "tags.el-tree-select.cacheData.description",
            "values": ["object"]
          }
        },
        "el-tree-v2": {
          "data": {
            "type": "attribute",
            "description": "tags.el-tree-v2.data.description",
            "values": ["array"]
          },
          "empty-text": {
            "type": "attribute",
            "description": "tags.el-tree-v2.empty-text.description",
            "values": ["string"]
          },
          "props": {
            "type": "attribute",
            "description": "tags.el-tree-v2.props.description",
            "values": ["object"]
          },
          "highlight-current": {
            "type": "attribute",
            "description": "tags.el-tree-v2.highlight-current.description",
            "values": ["boolean"]
          },
          "expand-on-click-node": {
            "type": "attribute",
            "description": "tags.el-tree-v2.expand-on-click-node.description",
            "values": ["boolean"]
          },
          "check-on-click-node": {
            "type": "attribute",
            "description": "tags.el-tree-v2.check-on-click-node.description",
            "values": ["boolean"]
          },
          "default-expanded-keys": {
            "type": "attribute",
            "description": "tags.el-tree-v2.default-expanded-keys.description",
            "values": ["array"]
          },
          "show-checkbox": {
            "type": "attribute",
            "description": "tags.el-tree-v2.show-checkbox.description",
            "values": ["boolean"]
          },
          "check-strictly": {
            "type": "attribute",
            "description": "tags.el-tree-v2.check-strictly.description",
            "values": ["boolean"]
          },
          "default-checked-keys": {
            "type": "attribute",
            "description": "tags.el-tree-v2.default-checked-keys.description",
            "values": ["array"]
          },
          "current-node-key": {
            "type": "attribute",
            "description": "tags.el-tree-v2.current-node-key.description",
            "values": ["string"]
          },
          "filter-method": {
            "type": "attribute",
            "description": "tags.el-tree-v2.filter-method.description",
            "values": ["Function(value,"]
          },
          "indent": {
            "type": "attribute",
            "description": "tags.el-tree-v2.indent.description",
            "values": ["number"]
          },
          "icon": {
            "type": "attribute",
            "description": "tags.el-tree-v2.icon.description",
            "values": ["string", "Component"]
          },
          "item-size": {
            "type": "attribute",
            "description": "tags.el-tree-v2.item-size.description",
            "values": ["number"]
          },
          "node-click": {
            "type": "method",
            "description": "tags.el-tree-v2.node-click.description",
            "values": []
          },
          "node-contextmenu": {
            "type": "method",
            "description": "tags.el-tree-v2.node-contextmenu.description",
            "values": []
          },
          "check-change": {
            "type": "method",
            "description": "tags.el-tree-v2.check-change.description",
            "values": []
          },
          "check": {
            "type": "method",
            "description": "tags.el-tree-v2.check.description",
            "values": []
          },
          "current-change": {
            "type": "method",
            "description": "tags.el-tree-v2.current-change.description",
            "values": []
          },
          "node-expand": {
            "type": "method",
            "description": "tags.el-tree-v2.node-expand.description",
            "values": []
          },
          "node-collapse": {
            "type": "method",
            "description": "tags.el-tree-v2.node-collapse.description",
            "values": []
          }
        },
        "el-statistic": {
          "value": {
            "type": "attribute",
            "description": "tags.el-statistic.value.description",
            "values": ["number"]
          },
          "decimal-separator": {
            "type": "attribute",
            "description": "tags.el-statistic.decimal-separator.description",
            "values": ["string"]
          },
          "formatter": {
            "type": "attribute",
            "description": "tags.el-statistic.formatter.description",
            "values": ["Function"]
          },
          "group-separator": {
            "type": "attribute",
            "description": "tags.el-statistic.group-separator.description",
            "values": ["string"]
          },
          "precision": {
            "type": "attribute",
            "description": "tags.el-statistic.precision.description",
            "values": ["number"]
          },
          "prefix": {
            "type": "attribute",
            "description": "tags.el-statistic.prefix.description",
            "values": ["string"]
          },
          "suffix": {
            "type": "attribute",
            "description": "tags.el-statistic.suffix.description",
            "values": ["string"]
          },
          "title": {
            "type": "attribute",
            "description": "tags.el-statistic.title.description",
            "values": ["string"]
          },
          "value-style": {
            "type": "attribute",
            "description": "tags.el-statistic.value-style.description",
            "values": ["string"]
          }
        },
        "el-countdown": {
          "value": {
            "type": "attribute",
            "description": "tags.el-countdown.value.description",
            "values": ["number"]
          },
          "format": {
            "type": "attribute",
            "description": "tags.el-countdown.format.description",
            "values": ["string"]
          },
          "prefix": {
            "type": "attribute",
            "description": "tags.el-countdown.prefix.description",
            "values": ["string"]
          },
          "suffix": {
            "type": "attribute",
            "description": "tags.el-countdown.suffix.description",
            "values": ["string"]
          },
          "title": {
            "type": "attribute",
            "description": "tags.el-countdown.title.description",
            "values": ["string"]
          },
          "value-style": {
            "type": "attribute",
            "description": "tags.el-countdown.value-style.description",
            "values": ["string"]
          },
          "change": {
            "type": "method",
            "description": "tags.el-countdown.change.description",
            "values": []
          },
          "finish": {
            "type": "method",
            "description": "tags.el-countdown.finish.description",
            "values": []
          }
        },
        "el-segmented": {
          "v-model": {
            "type": "attribute",
            "description": "tags.el-segmented.v-model.description",
            "values": ["string"]
          },
          "options": {
            "type": "attribute",
            "description": "tags.el-segmented.options.description",
            "values": ["array"]
          },
          "size": {
            "type": "attribute",
            "description": "tags.el-segmented.size.description",
            "values": ["large", "large", "small"]
          },
          "block": {
            "type": "attribute",
            "description": "tags.el-segmented.block.description",
            "values": ["boolean"]
          },
          "disabled": {
            "type": "attribute",
            "description": "tags.el-segmented.disabled.description",
            "values": ["boolean"]
          },
          "validate-event": {
            "type": "attribute",
            "description": "tags.el-segmented.validate-event.description",
            "values": ["boolean"]
          },
          "name": {
            "type": "attribute",
            "description": "tags.el-segmented.name.description",
            "values": ["string"]
          },
          "id": {
            "type": "attribute",
            "description": "tags.el-segmented.id.description",
            "values": ["string"]
          },
          "aria-labelay": {
            "type": "attribute",
            "description": "tags.el-segmented.aria-labelay.description",
            "values": ["string"]
          },
          "change": {
            "type": "method",
            "description": "tags.el-segmented.change.description",
            "values": []
          }
        },
        "el-affix": {
          "offset": {
            "type": "attribute",
            "description": "tags.el-affix.offset.description",
            "values": ["number"]
          },
          "position": {
            "type": "attribute",
            "description": "tags.el-affix.position.description",
            "values": ["top", "bottom"]
          },
          "target": {
            "type": "attribute",
            "description": "tags.el-affix.target.description",
            "values": ["string"]
          },
          "z-index": {
            "type": "attribute",
            "description": "tags.el-affix.z-index.description",
            "values": ["number"]
          },
          "change": {
            "type": "method",
            "description": "tags.el-affix.change.description",
            "values": []
          },
          "scroll": {
            "type": "method",
            "description": "tags.el-affix.scroll.description",
            "values": []
          }
        },
        "el-anchor": {
          "container": {
            "type": "attribute",
            "description": "tags.el-anchor.container.description",
            "values": ["string", "HTMLElement", "Window"]
          },
          "offset": {
            "type": "attribute",
            "description": "tags.el-anchor.offset.description",
            "values": ["number"]
          },
          "bound": {
            "type": "attribute",
            "description": "tags.el-anchor.bound.description",
            "values": ["number"]
          },
          "duration": {
            "type": "attribute",
            "description": "tags.el-anchor.duration.description",
            "values": ["number"]
          },
          "marker": {
            "type": "attribute",
            "description": "tags.el-anchor.marker.description",
            "values": ["boolean"]
          },
          "type": {
            "type": "attribute",
            "description": "tags.el-anchor.type.description",
            "values": ["defalut", "underline"]
          },
          "direction": {
            "type": "attribute",
            "description": "tags.el-anchor.direction.description",
            "values": ["vertical", "horizontal"]
          },
          "change": {
            "type": "method",
            "description": "tags.el-anchor.change.description",
            "values": []
          },
          "click": {
            "type": "method",
            "description": "tags.el-anchor.click.description",
            "values": []
          },
          "title": {
            "type": "attribute",
            "description": "tags.el-anchor.title.description",
            "values": ["string"]
          },
          "href": {
            "type": "attribute",
            "description": "tags.el-anchor.href.description",
            "values": ["string"]
          }
        },
        "el-backtop": {
          "target": {
            "type": "attribute",
            "description": "tags.el-backtop.target.description",
            "values": ["string"]
          },
          "visibility-height": {
            "type": "attribute",
            "description": "tags.el-backtop.visibility-height.description",
            "values": ["number"]
          },
          "right": {
            "type": "attribute",
            "description": "tags.el-backtop.right.description",
            "values": ["number"]
          },
          "bottom": {
            "type": "attribute",
            "description": "tags.el-backtop.bottom.description",
            "values": ["number"]
          },
          "click": {
            "type": "method",
            "description": "tags.el-backtop.click.description",
            "values": []
          }
        },
        "el-breadcrumb": {
          "separator": {
            "type": "attribute",
            "description": "tags.el-breadcrumb.separator.description",
            "values": ["string"]
          },
          "separator-icon": {
            "type": "attribute",
            "description": "tags.el-breadcrumb.separator-icon.description",
            "values": ["string"]
          }
        },
        "el-breadcrumb-item": {
          "to": {
            "type": "attribute",
            "description": "tags.el-breadcrumb-item.to.description",
            "values": ["string"]
          },
          "replace": {
            "type": "attribute",
            "description": "tags.el-breadcrumb-item.replace.description",
            "values": ["boolean"]
          }
        },
        "el-dropdown": {
          "type": {
            "type": "attribute",
            "description": "tags.el-dropdown.type.description",
            "values": ["string"]
          },
          "size": {
            "type": "attribute",
            "description": "tags.el-dropdown.size.description",
            "values": ["string"]
          },
          "max-height": {
            "type": "attribute",
            "description": "tags.el-dropdown.max-height.description",
            "values": ["string"]
          },
          "split-button": {
            "type": "attribute",
            "description": "tags.el-dropdown.split-button.description",
            "values": ["boolean"]
          },
          "disabled": {
            "type": "attribute",
            "description": "tags.el-dropdown.disabled.description",
            "values": ["boolean"]
          },
          "placement": {
            "type": "attribute",
            "description": "tags.el-dropdown.placement.description",
            "values": ["string"]
          },
          "trigger": {
            "type": "attribute",
            "description": "tags.el-dropdown.trigger.description",
            "values": ["string"]
          },
          "hide-on-click": {
            "type": "attribute",
            "description": "tags.el-dropdown.hide-on-click.description",
            "values": ["boolean"]
          },
          "show-timeout": {
            "type": "attribute",
            "description": "tags.el-dropdown.show-timeout.description",
            "values": ["number"]
          },
          "hide-timeout": {
            "type": "attribute",
            "description": "tags.el-dropdown.hide-timeout.description",
            "values": ["number"]
          },
          "role": {
            "type": "attribute",
            "description": "tags.el-dropdown.role.description",
            "values": ["string"]
          },
          "tabindex": {
            "type": "attribute",
            "description": "tags.el-dropdown.tabindex.description",
            "values": ["number"]
          },
          "popper-class": {
            "type": "attribute",
            "description": "tags.el-dropdown.popper-class.description",
            "values": ["string"]
          },
          "popper-options": {
            "type": "attribute",
            "description": "tags.el-dropdown.popper-options.description",
            "values": ["Object"]
          },
          "teleported": {
            "type": "attribute",
            "description": "tags.el-dropdown.teleported.description",
            "values": ["boolean"]
          },
          "click": {
            "type": "method",
            "description": "tags.el-dropdown.click.description",
            "values": []
          },
          "command": {
            "type": "attribute",
            "description": "tags.el-dropdown.command.description",
            "values": ["string"]
          },
          "visible-change": {
            "type": "method",
            "description": "tags.el-dropdown.visible-change.description",
            "values": []
          },
          "divided": {
            "type": "attribute",
            "description": "tags.el-dropdown.divided.description",
            "values": ["boolean"]
          },
          "icon": {
            "type": "attribute",
            "description": "tags.el-dropdown.icon.description",
            "values": ["string", "Component"]
          }
        },
        "el-menu": {
          "mode": {
            "type": "attribute",
            "description": "tags.el-menu.mode.description",
            "values": ["string"]
          },
          "collapse": {
            "type": "attribute",
            "description": "tags.el-menu.collapse.description",
            "values": ["boolean"]
          },
          "ellipsis": {
            "type": "attribute",
            "description": "tags.el-menu.ellipsis.description",
            "values": ["boolean"]
          },
          "ellipsis-icon": {
            "type": "attribute",
            "description": "tags.el-menu.ellipsis-icon.description",
            "values": ["string", "Component"]
          },
          "popper-offset": {
            "type": "attribute",
            "description": "tags.el-menu.popper-offset.description",
            "values": ["number"]
          },
          "background-color": {
            "type": "attribute",
            "description": "tags.el-menu.background-color.description",
            "values": ["string"]
          },
          "text-color": {
            "type": "attribute",
            "description": "tags.el-menu.text-color.description",
            "values": ["string"]
          },
          "active-text-color": {
            "type": "attribute",
            "description": "tags.el-menu.active-text-color.description",
            "values": ["string"]
          },
          "default-active": {
            "type": "attribute",
            "description": "tags.el-menu.default-active.description",
            "values": ["string"]
          },
          "default-openeds": {
            "type": "attribute",
            "description": "tags.el-menu.default-openeds.description",
            "values": ["Array"]
          },
          "unique-opened": {
            "type": "attribute",
            "description": "tags.el-menu.unique-opened.description",
            "values": ["boolean"]
          },
          "menu-trigger": {
            "type": "attribute",
            "description": "tags.el-menu.menu-trigger.description",
            "values": ["string"]
          },
          "router": {
            "type": "attribute",
            "description": "tags.el-menu.router.description",
            "values": ["boolean"]
          },
          "collapse-transition": {
            "type": "attribute",
            "description": "tags.el-menu.collapse-transition.description",
            "values": ["boolean"]
          },
          "popper-effect": {
            "type": "attribute",
            "description": "tags.el-menu.popper-effect.description",
            "values": ["string"]
          },
          "close-on-click-outside": {
            "type": "attribute",
            "description": "tags.el-menu.close-on-click-outside.description",
            "values": ["boolean"]
          },
          "popper-class": {
            "type": "attribute",
            "description": "tags.el-menu.popper-class.description",
            "values": ["string"]
          },
          "show-timeout": {
            "type": "attribute",
            "description": "tags.el-menu.show-timeout.description",
            "values": ["number"]
          },
          "hide-timeout": {
            "type": "attribute",
            "description": "tags.el-menu.hide-timeout.description",
            "values": ["number"]
          },
          "select": {
            "type": "method",
            "description": "tags.el-menu.select.description",
            "values": []
          },
          "open": {
            "type": "method",
            "description": "tags.el-menu.open.description",
            "values": []
          },
          "close": {
            "type": "method",
            "description": "tags.el-menu.close.description",
            "values": []
          },
          "index": {
            "type": "attribute",
            "description": "tags.el-menu.index.description",
            "values": ["string"]
          },
          "disabled": {
            "type": "attribute",
            "description": "tags.el-menu.disabled.description",
            "values": ["boolean"]
          },
          "popper-append-to-bodydeprecated": {
            "type": "attribute",
            "description": "tags.el-menu.popper-append-to-bodydeprecated.description",
            "values": ["boolean"]
          },
          "teleported": {
            "type": "attribute",
            "description": "tags.el-menu.teleported.description",
            "values": ["boolean"]
          },
          "expand-close-icon": {
            "type": "attribute",
            "description": "tags.el-menu.expand-close-icon.description",
            "values": ["string", "Component"]
          },
          "expand-open-icon": {
            "type": "attribute",
            "description": "tags.el-menu.expand-open-icon.description",
            "values": ["string", "Component"]
          },
          "collapse-close-icon": {
            "type": "attribute",
            "description": "tags.el-menu.collapse-close-icon.description",
            "values": ["string", "Component"]
          },
          "collapse-open-icon": {
            "type": "attribute",
            "description": "tags.el-menu.collapse-open-icon.description",
            "values": ["string", "Component"]
          },
          "route": {
            "type": "attribute",
            "description": "tags.el-menu.route.description",
            "values": ["object"]
          },
          "click": {
            "type": "method",
            "description": "tags.el-menu.click.description",
            "values": []
          },
          "title": {
            "type": "attribute",
            "description": "tags.el-menu.title.description",
            "values": ["string"]
          }
        },
        "el-page-header": {
          "icon": {
            "type": "attribute",
            "description": "tags.el-page-header.icon.description",
            "values": ["string"]
          },
          "title": {
            "type": "attribute",
            "description": "tags.el-page-header.title.description",
            "values": ["string"]
          },
          "content": {
            "type": "attribute",
            "description": "tags.el-page-header.content.description",
            "values": ["string"]
          },
          "back": {
            "type": "method",
            "description": "tags.el-page-header.back.description",
            "values": []
          }
        },
        "el-steps": {
          "space": {
            "type": "attribute",
            "description": "tags.el-steps.space.description",
            "values": ["number"]
          },
          "direction": {
            "type": "attribute",
            "description": "tags.el-steps.direction.description",
            "values": ["horizontal", "vertical"]
          },
          "active": {
            "type": "attribute",
            "description": "tags.el-steps.active.description",
            "values": ["number"]
          },
          "process-status": {
            "type": "attribute",
            "description": "tags.el-steps.process-status.description",
            "values": ["enum"]
          },
          "finish-status": {
            "type": "attribute",
            "description": "tags.el-steps.finish-status.description",
            "values": ["wait", "process", "finish", "error", "success"]
          },
          "align-center": {
            "type": "attribute",
            "description": "tags.el-steps.align-center.description",
            "values": ["boolean"]
          },
          "simple": {
            "type": "attribute",
            "description": "tags.el-steps.simple.description",
            "values": ["boolean"]
          }
        },
        "el-step": {
          "title": {
            "type": "attribute",
            "description": "tags.el-step.title.description",
            "values": ["string"]
          },
          "description": {
            "type": "attribute",
            "description": "tags.el-step.description.description",
            "values": ["string"]
          },
          "icon": {
            "type": "attribute",
            "description": "tags.el-step.icon.description",
            "values": ["string"]
          },
          "status": {
            "type": "attribute",
            "description": "tags.el-step.status.description",
            "values": ["wait", "process", "finish", "error", "success"]
          }
        },
        "el-tabs": {
          "v-model": {
            "type": "attribute",
            "description": "tags.el-tabs.v-model.description",
            "values": ["string"]
          },
          "type": {
            "type": "attribute",
            "description": "tags.el-tabs.type.description",
            "values": ["string"]
          },
          "closable": {
            "type": "attribute",
            "description": "tags.el-tabs.closable.description",
            "values": ["boolean"]
          },
          "addable": {
            "type": "attribute",
            "description": "tags.el-tabs.addable.description",
            "values": ["boolean"]
          },
          "editable": {
            "type": "attribute",
            "description": "tags.el-tabs.editable.description",
            "values": ["boolean"]
          },
          "tab-position": {
            "type": "attribute",
            "description": "tags.el-tabs.tab-position.description",
            "values": ["string"]
          },
          "stretch": {
            "type": "attribute",
            "description": "tags.el-tabs.stretch.description",
            "values": ["boolean"]
          },
          "before-leave": {
            "type": "attribute",
            "description": "tags.el-tabs.before-leave.description",
            "values": ["Function(activeName,"]
          },
          "tab-click": {
            "type": "method",
            "description": "tags.el-tabs.tab-click.description",
            "values": []
          },
          "tab-change": {
            "type": "method",
            "description": "tags.el-tabs.tab-change.description",
            "values": []
          },
          "tab-remove": {
            "type": "method",
            "description": "tags.el-tabs.tab-remove.description",
            "values": []
          },
          "tab-add": {
            "type": "method",
            "description": "tags.el-tabs.tab-add.description",
            "values": []
          },
          "edit": {
            "type": "method",
            "description": "tags.el-tabs.edit.description",
            "values": []
          },
          "label": {
            "type": "attribute",
            "description": "tags.el-tabs.label.description",
            "values": ["string"]
          },
          "disabled": {
            "type": "attribute",
            "description": "tags.el-tabs.disabled.description",
            "values": ["boolean"]
          },
          "name": {
            "type": "attribute",
            "description": "tags.el-tabs.name.description",
            "values": ["string"]
          },
          "lazy": {
            "type": "attribute",
            "description": "tags.el-tabs.lazy.description",
            "values": ["boolean"]
          }
        },
        "el-alert": {
          "title": {
            "type": "attribute",
            "description": "tags.el-alert.title.description",
            "values": ["string"]
          },
          "type": {
            "type": "attribute",
            "description": "tags.el-alert.type.description",
            "values": ["primary", "success", "warning", "danger", "info"]
          },
          "description": {
            "type": "attribute",
            "description": "tags.el-alert.description.description",
            "values": ["string"]
          },
          "closable": {
            "type": "attribute",
            "description": "tags.el-alert.closable.description",
            "values": ["boolean"]
          },
          "center": {
            "type": "attribute",
            "description": "tags.el-alert.center.description",
            "values": ["boolean"]
          },
          "close-text": {
            "type": "attribute",
            "description": "tags.el-alert.close-text.description",
            "values": ["string"]
          },
          "show-icon": {
            "type": "attribute",
            "description": "tags.el-alert.show-icon.description",
            "values": ["boolean"]
          },
          "effect": {
            "type": "attribute",
            "description": "tags.el-alert.effect.description",
            "values": ["dark", "light"]
          },
          "close": {
            "type": "method",
            "description": "tags.el-alert.close.description",
            "values": []
          }
        },
        "el-dialog": {
          "v-model": {
            "type": "attribute",
            "description": "tags.el-dialog.v-model.description",
            "values": ["boolean"]
          },
          "title": {
            "type": "attribute",
            "description": "tags.el-dialog.title.description",
            "values": ["string"]
          },
          "width": {
            "type": "attribute",
            "description": "tags.el-dialog.width.description",
            "values": ["string"]
          },
          "fullscreen": {
            "type": "attribute",
            "description": "tags.el-dialog.fullscreen.description",
            "values": ["boolean"]
          },
          "top": {
            "type": "attribute",
            "description": "tags.el-dialog.top.description",
            "values": ["string"]
          },
          "modal": {
            "type": "attribute",
            "description": "tags.el-dialog.modal.description",
            "values": ["boolean"]
          },
          "modal-class": {
            "type": "attribute",
            "description": "tags.el-dialog.modal-class.description",
            "values": ["string"]
          },
          "append-to-body": {
            "type": "attribute",
            "description": "tags.el-dialog.append-to-body.description",
            "values": ["boolean"]
          },
          "append-to": {
            "type": "attribute",
            "description": "tags.el-dialog.append-to.description",
            "values": ["string"]
          },
          "lock-scroll": {
            "type": "attribute",
            "description": "tags.el-dialog.lock-scroll.description",
            "values": ["boolean"]
          },
          "custom-classdeprecated": {
            "type": "attribute",
            "description": "tags.el-dialog.custom-classdeprecated.description",
            "values": ["string"]
          },
          "open-delay": {
            "type": "attribute",
            "description": "tags.el-dialog.open-delay.description",
            "values": ["number"]
          },
          "close-delay": {
            "type": "attribute",
            "description": "tags.el-dialog.close-delay.description",
            "values": ["number"]
          },
          "close-on-click-modal": {
            "type": "attribute",
            "description": "tags.el-dialog.close-on-click-modal.description",
            "values": ["boolean"]
          },
          "close-on-press-escape": {
            "type": "attribute",
            "description": "tags.el-dialog.close-on-press-escape.description",
            "values": ["boolean"]
          },
          "show-close": {
            "type": "attribute",
            "description": "tags.el-dialog.show-close.description",
            "values": ["boolean"]
          },
          "before-close": {
            "type": "attribute",
            "description": "tags.el-dialog.before-close.description",
            "values": ["Function"]
          },
          "draggable": {
            "type": "attribute",
            "description": "tags.el-dialog.draggable.description",
            "values": ["boolean"]
          },
          "overflow": {
            "type": "attribute",
            "description": "tags.el-dialog.overflow.description",
            "values": ["boolean"]
          },
          "center": {
            "type": "attribute",
            "description": "tags.el-dialog.center.description",
            "values": ["boolean"]
          },
          "align-center": {
            "type": "attribute",
            "description": "tags.el-dialog.align-center.description",
            "values": ["boolean"]
          },
          "destroy-on-close": {
            "type": "attribute",
            "description": "tags.el-dialog.destroy-on-close.description",
            "values": ["boolean"]
          },
          "close-icon": {
            "type": "attribute",
            "description": "tags.el-dialog.close-icon.description",
            "values": ["string"]
          },
          "z-index": {
            "type": "attribute",
            "description": "tags.el-dialog.z-index.description",
            "values": ["number"]
          },
          "header-aria-levelay": {
            "type": "attribute",
            "description": "tags.el-dialog.header-aria-levelay.description",
            "values": ["string"]
          },
          "open": {
            "type": "method",
            "description": "tags.el-dialog.open.description",
            "values": []
          },
          "opened": {
            "type": "method",
            "description": "tags.el-dialog.opened.description",
            "values": []
          },
          "close": {
            "type": "method",
            "description": "tags.el-dialog.close.description",
            "values": []
          },
          "closed": {
            "type": "method",
            "description": "tags.el-dialog.closed.description",
            "values": []
          },
          "open-auto-focus": {
            "type": "method",
            "description": "tags.el-dialog.open-auto-focus.description",
            "values": []
          },
          "close-auto-focus": {
            "type": "method",
            "description": "tags.el-dialog.close-auto-focus.description",
            "values": []
          }
        },
        "el-drawer": {
          "v-model": {
            "type": "attribute",
            "description": "tags.el-drawer.v-model.description",
            "values": ["boolean"]
          },
          "append-to-body": {
            "type": "attribute",
            "description": "tags.el-drawer.append-to-body.description",
            "values": ["boolean"]
          },
          "lock-scroll": {
            "type": "attribute",
            "description": "tags.el-drawer.lock-scroll.description",
            "values": ["boolean"]
          },
          "before-close": {
            "type": "attribute",
            "description": "tags.el-drawer.before-close.description",
            "values": ["Function"]
          },
          "close-on-click-modal": {
            "type": "attribute",
            "description": "tags.el-drawer.close-on-click-modal.description",
            "values": ["boolean"]
          },
          "close-on-press-escape": {
            "type": "attribute",
            "description": "tags.el-drawer.close-on-press-escape.description",
            "values": ["boolean"]
          },
          "open-delay": {
            "type": "attribute",
            "description": "tags.el-drawer.open-delay.description",
            "values": ["number"]
          },
          "close-delay": {
            "type": "attribute",
            "description": "tags.el-drawer.close-delay.description",
            "values": ["number"]
          },
          "custom-classdeprecated": {
            "type": "attribute",
            "description": "tags.el-drawer.custom-classdeprecated.description",
            "values": ["string"]
          },
          "destroy-on-close": {
            "type": "attribute",
            "description": "tags.el-drawer.destroy-on-close.description",
            "values": ["boolean"]
          },
          "modal": {
            "type": "attribute",
            "description": "tags.el-drawer.modal.description",
            "values": ["boolean"]
          },
          "direction": {
            "type": "attribute",
            "description": "tags.el-drawer.direction.description",
            "values": ["rtl", "ltr", "ttb", "btt", "rtl"]
          },
          "show-close": {
            "type": "attribute",
            "description": "tags.el-drawer.show-close.description",
            "values": ["boolean"]
          },
          "size": {
            "type": "attribute",
            "description": "tags.el-drawer.size.description",
            "values": ["number"]
          },
          "title": {
            "type": "attribute",
            "description": "tags.el-drawer.title.description",
            "values": ["string"]
          },
          "with-header": {
            "type": "attribute",
            "description": "tags.el-drawer.with-header.description",
            "values": ["boolean"]
          },
          "modal-class": {
            "type": "attribute",
            "description": "tags.el-drawer.modal-class.description",
            "values": ["string"]
          },
          "z-index": {
            "type": "attribute",
            "description": "tags.el-drawer.z-index.description",
            "values": ["number"]
          },
          "header-aria-levelay": {
            "type": "attribute",
            "description": "tags.el-drawer.header-aria-levelay.description",
            "values": ["string"]
          },
          "open": {
            "type": "method",
            "description": "tags.el-drawer.open.description",
            "values": []
          },
          "opened": {
            "type": "method",
            "description": "tags.el-drawer.opened.description",
            "values": []
          },
          "close": {
            "type": "method",
            "description": "tags.el-drawer.close.description",
            "values": []
          },
          "closed": {
            "type": "method",
            "description": "tags.el-drawer.closed.description",
            "values": []
          },
          "open-auto-focus": {
            "type": "method",
            "description": "tags.el-drawer.open-auto-focus.description",
            "values": []
          },
          "close-auto-focus": {
            "type": "method",
            "description": "tags.el-drawer.close-auto-focus.description",
            "values": []
          }
        },
        "el-loading": {},
        "el-message": {},
        "el-message-box": {},
        "el-notification": {},
        "el-popconfirm": {
          "title": {
            "type": "attribute",
            "description": "tags.el-popconfirm.title.description",
            "values": ["string"]
          },
          "confirm-button-text": {
            "type": "attribute",
            "description": "tags.el-popconfirm.confirm-button-text.description",
            "values": ["string"]
          },
          "cancel-button-text": {
            "type": "attribute",
            "description": "tags.el-popconfirm.cancel-button-text.description",
            "values": ["string"]
          },
          "confirm-button-type": {
            "type": "attribute",
            "description": "tags.el-popconfirm.confirm-button-type.description",
            "values": ["primary", "success", "warning", "danger", "info", "text"]
          },
          "cancel-button-type": {
            "type": "attribute",
            "description": "tags.el-popconfirm.cancel-button-type.description",
            "values": ["primary", "success", "warning", "danger", "info", "text"]
          },
          "icon": {
            "type": "attribute",
            "description": "tags.el-popconfirm.icon.description",
            "values": ["string"]
          },
          "icon-color": {
            "type": "attribute",
            "description": "tags.el-popconfirm.icon-color.description",
            "values": ["string"]
          },
          "hide-icon": {
            "type": "attribute",
            "description": "tags.el-popconfirm.hide-icon.description",
            "values": ["boolean"]
          },
          "hide-after": {
            "type": "attribute",
            "description": "tags.el-popconfirm.hide-after.description",
            "values": ["number"]
          },
          "teleported": {
            "type": "attribute",
            "description": "tags.el-popconfirm.teleported.description",
            "values": ["boolean"]
          },
          "persistent": {
            "type": "attribute",
            "description": "tags.el-popconfirm.persistent.description",
            "values": ["boolean"]
          },
          "width": {
            "type": "attribute",
            "description": "tags.el-popconfirm.width.description",
            "values": ["string"]
          },
          "confirm": {
            "type": "method",
            "description": "tags.el-popconfirm.confirm.description",
            "values": []
          },
          "cancel": {
            "type": "method",
            "description": "tags.el-popconfirm.cancel.description",
            "values": []
          }
        },
        "el-popover": {
          "trigger": {
            "type": "attribute",
            "description": "tags.el-popover.trigger.description",
            "values": ["string"]
          },
          "title": {
            "type": "attribute",
            "description": "tags.el-popover.title.description",
            "values": ["string"]
          },
          "effect": {
            "type": "attribute",
            "description": "tags.el-popover.effect.description",
            "values": ["string"]
          },
          "content": {
            "type": "attribute",
            "description": "tags.el-popover.content.description",
            "values": ["string"]
          },
          "width": {
            "type": "attribute",
            "description": "tags.el-popover.width.description",
            "values": ["string"]
          },
          "placement": {
            "type": "attribute",
            "description": "tags.el-popover.placement.description",
            "values": ["string"]
          },
          "disabled": {
            "type": "attribute",
            "description": "tags.el-popover.disabled.description",
            "values": ["boolean"]
          },
          "v-model:visible": {
            "type": "attribute",
            "description": "tags.el-popover.v-model:visible.description",
            "values": ["Boolean"]
          },
          "offset": {
            "type": "attribute",
            "description": "tags.el-popover.offset.description",
            "values": ["number"]
          },
          "transition": {
            "type": "attribute",
            "description": "tags.el-popover.transition.description",
            "values": ["string"]
          },
          "show-arrow": {
            "type": "attribute",
            "description": "tags.el-popover.show-arrow.description",
            "values": ["boolean"]
          },
          "popper-options": {
            "type": "attribute",
            "description": "tags.el-popover.popper-options.description",
            "values": ["object"]
          },
          "popper-class": {
            "type": "attribute",
            "description": "tags.el-popover.popper-class.description",
            "values": ["string"]
          },
          "popper-style": {
            "type": "attribute",
            "description": "tags.el-popover.popper-style.description",
            "values": ["string"]
          },
          "show-after": {
            "type": "attribute",
            "description": "tags.el-popover.show-after.description",
            "values": ["number"]
          },
          "hide-after": {
            "type": "attribute",
            "description": "tags.el-popover.hide-after.description",
            "values": ["number"]
          },
          "auto-close": {
            "type": "attribute",
            "description": "tags.el-popover.auto-close.description",
            "values": ["number"]
          },
          "tabindex": {
            "type": "attribute",
            "description": "tags.el-popover.tabindex.description",
            "values": ["number"]
          },
          "teleported": {
            "type": "attribute",
            "description": "tags.el-popover.teleported.description",
            "values": ["boolean"]
          },
          "persistent": {
            "type": "attribute",
            "description": "tags.el-popover.persistent.description",
            "values": ["boolean"]
          },
          "show": {
            "type": "method",
            "description": "tags.el-popover.show.description",
            "values": []
          },
          "before-enter": {
            "type": "method",
            "description": "tags.el-popover.before-enter.description",
            "values": []
          },
          "after-enter": {
            "type": "method",
            "description": "tags.el-popover.after-enter.description",
            "values": []
          },
          "hide": {
            "type": "method",
            "description": "tags.el-popover.hide.description",
            "values": []
          },
          "before-leave": {
            "type": "method",
            "description": "tags.el-popover.before-leave.description",
            "values": []
          },
          "after-leave": {
            "type": "method",
            "description": "tags.el-popover.after-leave.description",
            "values": []
          }
        },
        "el-tooltip": {
          "append-to": {
            "type": "attribute",
            "description": "tags.el-tooltip.append-to.description",
            "values": ["CSSSelector"]
          },
          "effect": {
            "type": "attribute",
            "description": "tags.el-tooltip.effect.description",
            "values": ["dark", "light"]
          },
          "content": {
            "type": "attribute",
            "description": "tags.el-tooltip.content.description",
            "values": ["string"]
          },
          "raw-content": {
            "type": "attribute",
            "description": "tags.el-tooltip.raw-content.description",
            "values": ["boolean"]
          },
          "placement": {
            "type": "attribute",
            "description": "tags.el-tooltip.placement.description",
            "values": ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end", "right", "right-start", "right-end"]
          },
          "fallback-placements": {
            "type": "attribute",
            "description": "tags.el-tooltip.fallback-placements.description",
            "values": ["array"]
          },
          "v-model:visible": {
            "type": "attribute",
            "description": "tags.el-tooltip.v-model:visible.description",
            "values": ["boolean"]
          },
          "disabled": {
            "type": "attribute",
            "description": "tags.el-tooltip.disabled.description",
            "values": ["boolean"]
          },
          "offset": {
            "type": "attribute",
            "description": "tags.el-tooltip.offset.description",
            "values": ["number"]
          },
          "transition": {
            "type": "attribute",
            "description": "tags.el-tooltip.transition.description",
            "values": ["string"]
          },
          "popper-options": {
            "type": "attribute",
            "description": "tags.el-tooltip.popper-options.description",
            "values": ["object"]
          },
          "show-after": {
            "type": "attribute",
            "description": "tags.el-tooltip.show-after.description",
            "values": ["number"]
          },
          "show-arrow": {
            "type": "attribute",
            "description": "tags.el-tooltip.show-arrow.description",
            "values": ["boolean"]
          },
          "hide-after": {
            "type": "attribute",
            "description": "tags.el-tooltip.hide-after.description",
            "values": ["number"]
          },
          "auto-close": {
            "type": "attribute",
            "description": "tags.el-tooltip.auto-close.description",
            "values": ["number"]
          },
          "popper-class": {
            "type": "attribute",
            "description": "tags.el-tooltip.popper-class.description",
            "values": ["string"]
          },
          "enterable": {
            "type": "attribute",
            "description": "tags.el-tooltip.enterable.description",
            "values": ["boolean"]
          },
          "teleported": {
            "type": "attribute",
            "description": "tags.el-tooltip.teleported.description",
            "values": ["boolean"]
          },
          "trigger": {
            "type": "attribute",
            "description": "tags.el-tooltip.trigger.description",
            "values": ["hover", "click", "focus", "contextmenu"]
          },
          "virtual-triggering": {
            "type": "attribute",
            "description": "tags.el-tooltip.virtual-triggering.description",
            "values": ["boolean"]
          },
          "virtual-ref": {
            "type": "attribute",
            "description": "tags.el-tooltip.virtual-ref.description",
            "values": ["HTMLElement"]
          },
          "trigger-keys": {
            "type": "attribute",
            "description": "tags.el-tooltip.trigger-keys.description",
            "values": ["Array"]
          },
          "persistent": {
            "type": "attribute",
            "description": "tags.el-tooltip.persistent.description",
            "values": ["boolean"]
          },
          "aria-labelay": {
            "type": "attribute",
            "description": "tags.el-tooltip.aria-labelay.description",
            "values": ["string"]
          }
        },
        "el-divider": {
          "direction": {
            "type": "attribute",
            "description": "tags.el-divider.direction.description",
            "values": ["horizontal", "vertical"]
          },
          "border-style": {
            "type": "attribute",
            "description": "tags.el-divider.border-style.description",
            "values": ["none", "solid", "hidden", "dashed"]
          },
          "content-position": {
            "type": "attribute",
            "description": "tags.el-divider.content-position.description",
            "values": ["left", "right", "center"]
          }
        },
        "el-watermark": {
          "width": {
            "type": "attribute",
            "description": "tags.el-watermark.width.description",
            "values": ["number"]
          },
          "height": {
            "type": "attribute",
            "description": "tags.el-watermark.height.description",
            "values": ["number"]
          },
          "rotate": {
            "type": "attribute",
            "description": "tags.el-watermark.rotate.description",
            "values": ["number"]
          },
          "zIndex": {
            "type": "attribute",
            "description": "tags.el-watermark.zIndex.description",
            "values": ["number"]
          },
          "image": {
            "type": "attribute",
            "description": "tags.el-watermark.image.description",
            "values": ["string"]
          },
          "content": {
            "type": "attribute",
            "description": "tags.el-watermark.content.description",
            "values": ["string"]
          },
          "font": {
            "type": "attribute",
            "description": "tags.el-watermark.font.description",
            "values": ["Font"]
          },
          "gap": {
            "type": "attribute",
            "description": "tags.el-watermark.gap.description",
            "values": ["object"]
          },
          "offset": {
            "type": "attribute",
            "description": "tags.el-watermark.offset.description",
            "values": ["object"]
          }
        }
      };
    };
  }
});

// out/frameworks/element-plus/globalAttribute.js
var require_globalAttribute = __commonJS({
  "out/frameworks/element-plus/globalAttribute.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.default = () => {
      return {
        "v-loading": {
          type: "attribute",
          values: ["string"],
          description: "el-loading"
        }
      };
    };
  }
});

// out/frameworks/element-plus/document.js
var require_document = __commonJS({
  "out/frameworks/element-plus/document.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.default = (tabSize) => {
      console.log(tabSize);
      return {};
    };
  }
});

// out/frameworks/element-plus/index.js
var require_element_plus = __commonJS({
  "out/frameworks/element-plus/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tag_1 = require_tag();
    var jsTag_1 = require_jsTag();
    var attribute_1 = require_attribute();
    var globalAttribute_1 = require_globalAttribute();
    var document_1 = require_document();
    exports2.default = {
      tag: tag_1.default,
      jsTag: jsTag_1.default,
      attribute: attribute_1.default,
      globalAttribute: globalAttribute_1.default,
      document: document_1.default
    };
  }
});

// out/frameworks/index.js
var require_frameworks = __commonJS({
  "out/frameworks/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getGlobalAttribute = exports2.getAttribute = exports2.getJsTag = exports2.getTag = void 0;
    var index_1 = require_element_plus();
    var framework = {
      "element-plus": index_1.default
    };
    function getTag(frameworks, tabSize) {
      let ret = {};
      frameworks.forEach((frameworkName) => {
        if (framework[frameworkName]) {
          ret = Object.assign(ret, framework[frameworkName].tag(tabSize));
        }
      });
      return ret;
    }
    exports2.getTag = getTag;
    function getJsTag(frameworks, tabSize) {
      let ret = {};
      frameworks.forEach((frameworkName) => {
        if (framework[frameworkName]) {
          ret = Object.assign(ret, framework[frameworkName].jsTag(tabSize));
        }
      });
      return ret;
    }
    exports2.getJsTag = getJsTag;
    function getAttribute(frameworks, tabSize) {
      let ret = {};
      frameworks.forEach((frameworkName) => {
        if (framework[frameworkName]) {
          ret = Object.assign(ret, framework[frameworkName].attribute(tabSize));
        }
      });
      return ret;
    }
    exports2.getAttribute = getAttribute;
    function getGlobalAttribute(frameworks, tabSize) {
      let ret = {};
      frameworks.forEach((frameworkName) => {
        if (framework[frameworkName]) {
          ret = Object.assign(ret, framework[frameworkName].globalAttribute(tabSize));
        }
      });
      return ret;
    }
    exports2.getGlobalAttribute = getGlobalAttribute;
  }
});

// out/framework.js
var require_framework = __commonJS({
  "out/framework.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var vscode_12 = require("vscode");
    var fs = require("fs");
    var path = require("path");
    var util_1 = require_util();
    var frameworks_1 = require_frameworks();
    var FrameworkProvider = class {
      constructor(explorer) {
        this.frameworks = [];
        this.pathAlias = {
          alias: "",
          path: ""
        };
        this.explorer = explorer;
        try {
          const pkg = fs.readFileSync((0, util_1.winRootPathHandle)(path.join(this.explorer.projectRootPath, "package.json")), "utf-8");
          pkg.includes("element-plus") && this.frameworks.push("element-plus");
          pkg.includes("element-ui") && this.frameworks.push("element-ui");
          pkg.includes("ant-design-vue") && this.frameworks.push("ant-design-vue");
        } catch (error) {
        }
      }
      register() {
        this.explorer.context.subscriptions.push(vscode_12.languages.registerCompletionItemProvider(["vue", "javascript", "typescript", "html", "wxml"], new FrameworkCompletionItemProvider(this), "", ":", "<", '"', "'", "/", "@", "(", ">", "{"));
      }
    };
    exports2.default = FrameworkProvider;
    var FrameworkCompletionItemProvider = class {
      constructor(frameworkProvider) {
        this.vueFiles = [];
        this.attribute = {};
        this.jsTag = {};
        this.tag = {};
        this.globalAttribute = {};
        this.tagReg = /<([\w-]+)\s+/g;
        this.attrReg = /(?:\(|\s*)((\w(-)?)*)=['"][^'"]*/;
        this.frameworkProvider = frameworkProvider;
        this.vueFiles = this.frameworkProvider.explorer.traverse.search(".vue", "");
        this.attribute = (0, frameworks_1.getAttribute)(this.frameworkProvider.frameworks, this.frameworkProvider.explorer.tabSize);
        this.tag = (0, frameworks_1.getTag)(this.frameworkProvider.frameworks, this.frameworkProvider.explorer.tabSize);
        this.jsTag = (0, frameworks_1.getJsTag)(this.frameworkProvider.frameworks, this.frameworkProvider.explorer.tabSize);
        this.globalAttribute = (0, frameworks_1.getGlobalAttribute)(this.frameworkProvider.frameworks, this.frameworkProvider.explorer.tabSize);
        if (vscode_12.workspace.workspaceFolders) {
          const watcher = vscode_12.workspace.createFileSystemWatcher("**/*.vue");
          watcher.onDidCreate(() => {
            this.vueFiles = this.frameworkProvider.explorer.traverse.search(".vue", "");
          });
          watcher.onDidDelete(() => {
            this.vueFiles = this.frameworkProvider.explorer.traverse.search(".vue", "");
          });
        }
      }
      isCloseTag(document, position) {
        let txt = document.getText(new vscode_12.Range(new vscode_12.Position(position.line, 0), position)).trim();
        if (!txt.endsWith(">") || /.*=("[^"]*>|'[^']*>)$/gi.test(txt) || txt.endsWith("/>")) {
          return false;
        }
        let txtArr = txt.match(/<([\w-]+)(\s*|(\s+[\w-_:@\.]+(=("[^"]*"|'[^']*'))?)+)\s*>/gim);
        if (Array.isArray(txtArr) && txtArr.length > 0) {
          let txtStr = txtArr[txtArr.length - 1];
          return /<([\w-]+)(\s*|(\s+[\w-_:@\.]+(=("[^"]*"|'[^']*'))?)+)\s*>$/gi.test(txtStr);
        }
        return false;
      }
      getCloseTagSuggestion(document, position) {
        let txtInfo = document.lineAt(position.line);
        let txtArr = txtInfo.text.match(/<([\w-]+)(\s*|(\s+[\w-_:@\.]+(=("[^"]*"|'[^']*'))?)+)\s*>/gim);
        let tag = "div";
        if (txtArr) {
          tag = txtArr[txtArr.length - 1].replace(/<([\w-]+)(\s*|(\s+[\w-_:@\.]+(=("[^"]*"|'[^']*'))?)+)\s*>/gim, "$1");
        }
        let exclude = ["br", "img"];
        if (exclude.indexOf(tag) === -1 && vscode_12.window.activeTextEditor) {
          vscode_12.window.activeTextEditor.edit((editBuilder) => {
            editBuilder.insert(position, "</" + tag + ">");
          });
          let newPosition = vscode_12.window.activeTextEditor.selection.active.translate(0, 0);
          if (newPosition) {
            vscode_12.window.activeTextEditor.selection = new vscode_12.Selection(newPosition, newPosition);
          }
        }
      }
      getTextBeforePosition(position, document) {
        var start = new vscode_12.Position(position.line, 0);
        var range = new vscode_12.Range(start, position);
        return document.getText(range);
      }
      matchTag(reg, txt, line, document, position) {
        let match;
        let arr = [];
        if (/<\/?[-\w]+[^<>]*>[\s\w]*<?\s*[\w-]*$/.test(txt) || position.line === line && (/^\s*[^<]+\s*>[^<\/>]*$/.test(txt) || /[^<>]*<$/.test(txt[txt.length - 1]))) {
          return "break";
        }
        while (match = reg.exec(txt)) {
          arr.push({
            text: match[1],
            offset: document.offsetAt(new vscode_12.Position(line, match.index))
          });
        }
        return arr.pop();
      }
      getPreTag(document, position) {
        let line = position.line;
        let tag;
        let txt = this.getTextBeforePosition(position, document);
        while (position.line - line < 10 && line >= 0) {
          if (line !== position.line) {
            txt = document.lineAt(line).text;
          }
          tag = this.matchTag(this.tagReg, txt, line, document, position);
          if (tag === "break") {
            return;
          }
          if (tag) {
            return tag;
          }
          line--;
        }
        return;
      }
      getPreAttr(document, position) {
        let txt = this.getTextBeforePosition(position, document).replace(/"[^'"]*(\s*)[^'"]*$/, "");
        let end = position.character;
        let start = txt.lastIndexOf(" ", end) + 1;
        let parsedTxt = document.getText(new vscode_12.Range(position.line, start, position.line, end));
        return this.matchAttr(this.attrReg, parsedTxt);
      }
      matchAttr(reg, txt) {
        let match;
        match = reg.exec(txt);
        return !/"[^"]*"/.test(txt) && match && match[1];
      }
      isAttrValueStart(tag, attr) {
        return tag && attr;
      }
      getAttrValues(tag, attr) {
        let attrValues = [];
        if (this.globalAttribute[attr]) {
          attrValues = this.globalAttribute[attr].values;
        }
        if (this.attribute[tag] && this.attribute[tag][attr]) {
          attrValues = this.attribute[tag][attr].values;
        }
        return attrValues;
      }
      getAttrValueSuggestion(tag, attr) {
        let suggestions = [];
        const values = this.getAttrValues(tag, attr);
        values.forEach((value) => {
          suggestions.push({
            sortText: `000${value}`,
            label: value,
            kind: vscode_12.CompletionItemKind.Value,
            detail: "vue-helper detail",
            documentation: "vue-helper document"
          });
        });
        return suggestions;
      }
      getAttrSuggestion(tag, document, position) {
        let suggestions = [];
        let tagAttrs = this.getTagAttrs(tag);
        let preText = this.getTextBeforePosition(position, document);
        let prefix = preText.replace(/['"]([^'"]*)['"]$/, "").split(/\s|\(+/).pop();
        const type = prefix[0] === "@" ? "method" : "attribute";
        tagAttrs.forEach((attr) => {
          if (attr.type === type) {
            suggestions.push(this.buildAttrSuggestion(attr));
          }
        });
        for (let attr in this.globalAttribute) {
          let gAttr = this.globalAttribute[attr];
          if (gAttr.type === type) {
            suggestions.push(this.buildAttrSuggestion(Object.assign({ name: attr }, gAttr)));
          }
        }
        return suggestions;
      }
      buildAttrSuggestion(attr) {
        const completionItem = new vscode_12.CompletionItem(attr.name);
        completionItem.sortText = `000${attr.name}`;
        completionItem.insertText = attr.name;
        completionItem.kind = attr.type === "method" ? vscode_12.CompletionItemKind.Method : vscode_12.CompletionItemKind.Property;
        completionItem.documentation = vscode_12.l10n.t(attr.description);
        return completionItem;
      }
      getTagAttrs(tag) {
        let attrs = [];
        if (this.attribute[tag]) {
          for (const key in this.attribute[tag]) {
            if (key !== "_self") {
              attrs.push(Object.assign({ name: key }, this.attribute[tag][key]));
            }
          }
        }
        return attrs;
      }
      getPropAttr(document, tagName) {
        let documentText = document.getText();
        let tagNameUpper = tagName.replace(/(-[a-z])/g, (_, c) => {
          return c ? c.toUpperCase() : "";
        }).replace(/-/gi, "");
        let pathReg = RegExp("import\\s+(" + tagName + "|" + tagNameUpper + `)\\s+from\\s+['"]([^'"]*)`, "g");
        let pathRegArr = documentText.match(pathReg);
        if (pathRegArr && pathRegArr.length > 0) {
          let tagPath = pathRegArr[0];
          tagPath = tagPath.replace(/(.*['"])/, "");
          tagPath = tagPath.replace(this.frameworkProvider.pathAlias.alias, this.frameworkProvider.pathAlias.path);
          if (!tagPath.endsWith(".vue")) {
            tagPath += ".vue";
          }
          if (tagPath.indexOf("./") > 0 || tagPath.indexOf("../") > 0) {
            tagPath = path.join(document.fileName, "../", tagPath);
          } else {
            tagPath = path.join(vscode_12.workspace.rootPath || "", tagPath);
          }
          documentText = fs.readFileSync(tagPath, "utf8");
        } else {
          return;
        }
        let props = [];
        let scriptIndex = documentText.indexOf("<script");
        if (scriptIndex) {
          let docText = documentText.substr(scriptIndex, documentText.length);
          let propIndex = docText.indexOf("props");
          let propStack = 0;
          if (propIndex) {
            docText = docText.substr(propIndex, docText.length);
            let braceBeforeIndex = docText.indexOf("{");
            let braceAfterIndex = 0;
            if (braceBeforeIndex) {
              ++propStack;
              docText = docText.substr(braceBeforeIndex + 1, docText.length);
            }
            let propText = "";
            while (propStack > 0 && docText.length > 0) {
              braceBeforeIndex = docText.indexOf("{");
              braceAfterIndex = docText.indexOf("}");
              if (braceBeforeIndex === -1) {
                docText = "";
              } else if (braceBeforeIndex < braceAfterIndex) {
                if (propStack === 1) {
                  propText += docText.substr(0, braceBeforeIndex);
                }
                ++propStack;
                docText = docText.substr(braceBeforeIndex > 0 ? braceBeforeIndex + 1 : 1, docText.length);
              } else {
                --propStack;
                docText = docText.substr(braceAfterIndex > 0 ? braceAfterIndex + 1 : 1, docText.length);
              }
            }
            let propMatch = propText.match(/\s[\w-]*:/gi);
            if (propMatch && propMatch.length > 0) {
              propMatch.forEach((propItem, propIndex2) => {
                propItem = propItem.substr(1, propItem.length - 2);
                propItem = propItem.replace(/([A-Z])/g, (_, c) => {
                  return c ? "-" + c.toLowerCase() : "";
                });
                props.push({
                  label: propItem,
                  sortText: "0" + propIndex2,
                  insertText: new vscode_12.SnippetString(`:${propItem}="$0"`),
                  kind: vscode_12.CompletionItemKind.Property,
                  documentation: ""
                });
              });
            }
          }
        }
        let emitReg = documentText.match(/\$emit\(\s?['"](\w*)/g);
        if (emitReg && emitReg.length > 0) {
          for (let i = 0; i < emitReg.length; i++) {
            let emitName = emitReg[i];
            emitName = emitName.replace(/(.*['"])/, "");
            props.push({
              label: emitName,
              sortText: "0" + (props.length + 1),
              insertText: new vscode_12.SnippetString(`@${emitName}="$0"`),
              kind: vscode_12.CompletionItemKind.Method,
              documentation: ""
            });
          }
        }
        return props;
      }
      isImport(document, position) {
        let lineTxt = document.lineAt(position.line).text.trim();
        return /^\s*import.*/.test(lineTxt);
      }
      importSuggestion(document, position) {
        let search = document.lineAt(position.line).text.trim();
        search = search.replace(/^import/, "").trim();
        let suggestions = [];
        if (search) {
          let files = this.frameworkProvider.explorer.traverse.search("", search);
          let pathAlias = this.frameworkProvider.pathAlias;
          files.forEach((vf) => {
            let filePath = "";
            if (pathAlias.alias) {
              filePath = vf.path;
            } else {
              filePath = (0, util_1.getRelativePath)(document.uri.path, path.join(this.frameworkProvider.explorer.projectRootPath, vf.path));
            }
            let camelName = vf.name;
            let insertPath = filePath;
            if (filePath.endsWith(".ts")) {
              insertPath = filePath.substring(0, filePath.length - 3);
            }
            suggestions.push({
              label: vf.name,
              sortText: `0${vf.name}`,
              insertText: new vscode_12.SnippetString(`\${1:${camelName}} from '${insertPath}'`),
              kind: vscode_12.CompletionItemKind.Reference,
              detail: vf.name,
              documentation: `import ${camelName} from ${filePath}`
            });
          });
        }
        return suggestions;
      }
      notInTemplate(document, position) {
        let line = position.line;
        while (line) {
          if (/^\s*<script.*>\s*$/.test(document.lineAt(line).text)) {
            return true;
          }
          line--;
        }
        return false;
      }
      buildTagSuggestion(tag, tagVal, id) {
        return {
          label: tag,
          sortText: `00${id}${tag}`,
          insertText: new vscode_12.SnippetString(tagVal),
          kind: vscode_12.CompletionItemKind.Snippet,
          detail: "",
          documentation: ""
        };
      }
      getTagJsSuggestion() {
        let suggestions = [];
        let id = 1;
        try {
          for (let tag in this.jsTag) {
            const tagItem = this.jsTag[tag];
            suggestions.push({
              label: tag,
              sortText: `00${id}${tag}`,
              insertText: new vscode_12.SnippetString(tagItem),
              kind: vscode_12.CompletionItemKind.Snippet,
              detail: "vue-helper",
              documentation: tagItem
            });
            id++;
          }
        } catch (error) {
          console.log(error);
        }
        return suggestions;
      }
      addLocalComponentSuggestions() {
        let suggestions = [];
        for (let i = 0; i < this.vueFiles.length; i++) {
          const vf = this.vueFiles[i];
          suggestions.push({
            label: vf.name,
            sortText: `0${i}${vf.name}`,
            insertText: new vscode_12.SnippetString(`${vf.name}$0></${vf.name}>`),
            kind: vscode_12.CompletionItemKind.Folder,
            detail: "vue-helper",
            documentation: `import ${vf.name} from '${vf.path}'`,
            command: { command: "vue-helper.funcEnhance", title: "vue-helper: funcEnhance" }
          });
        }
        return suggestions;
      }
      getTagSuggestion() {
        let suggestions = this.addLocalComponentSuggestions();
        let id = 1;
        try {
          for (let tag in this.tag) {
            suggestions.push(this.buildTagSuggestion(tag, this.tag[tag], id));
            id++;
          }
        } catch (error) {
          console.log(error);
        }
        return suggestions;
      }
      getElementTagLabelSuggestion() {
        let suggestions = [];
        let id = 1;
        for (let i = 0; i < this.vueFiles.length; i++) {
          const vf = this.vueFiles[i];
          suggestions.push({
            label: vf.name,
            sortText: `0${i}${vf.name}`,
            insertText: new vscode_12.SnippetString(`${vf.name}$0></${vf.name}>`),
            kind: vscode_12.CompletionItemKind.Folder,
            detail: "vue-helper",
            documentation: `import ${vf.name} from '${vf.path}'`,
            command: { command: "vue-helper.funcEnhance", title: "vue-helper: funcEnhance" }
          });
        }
        try {
          let labels = [];
          for (let tag in this.attribute) {
            let label = tag.replace(/:.*/gi, "");
            if (!labels.includes(label)) {
              labels.push(label);
              suggestions.push({
                label,
                sortText: `00${id}${label}`,
                insertText: new vscode_12.SnippetString(`${label}$0></${label}>`),
                kind: vscode_12.CompletionItemKind.Snippet,
                detail: `vue-helper`,
                documentation: this.attribute[tag]._self.description
              });
              id++;
            }
          }
        } catch (error) {
          console.log(error);
        }
        return suggestions;
      }
      provideCompletionItems(document, position, _token, _context) {
        if (this.isCloseTag(document, position)) {
          this.getCloseTagSuggestion(document, position);
          return [];
        }
        let tag = this.getPreTag(document, position);
        let attr = this.getPreAttr(document, position);
        let word = (0, util_1.getCurrentWord)(document, position);
        let hasSquareQuote = document.lineAt(position.line).text.includes("<");
        if (tag && attr && this.isAttrValueStart(tag, attr)) {
          console.log(1);
          return this.getAttrValueSuggestion(tag.text, attr);
        } else if (tag) {
          console.log(2);
          if (this.attribute[tag.text]) {
            return this.getAttrSuggestion(tag.text, document, position);
          } else {
            return this.getPropAttr(document, tag.text);
          }
        } else if (this.isImport(document, position)) {
          console.log(3);
          return this.importSuggestion(document, position);
        } else if (word[0] === "e" || word[0] === "a") {
          console.log(4);
          return this.notInTemplate(document, position) ? this.getTagJsSuggestion() : this.getTagSuggestion();
        } else if (word.includes("v")) {
          console.log(5);
          return this.getTagSuggestion();
        } else if (!tag && hasSquareQuote) {
          console.log(6);
          return this.notInTemplate(document, position) ? [] : this.getElementTagLabelSuggestion();
        }
        return [];
      }
    };
  }
});

// out/client.js
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
var vscode_1 = require("vscode");
var explorer_1 = require_explorer();
var framework_1 = require_framework();
function activate(context) {
  if (vscode_1.workspace.workspaceFolders) {
    init(context);
  }
}
exports.activate = activate;
function init(context) {
  const explorer = new explorer_1.default(context);
  const framework = new framework_1.default(explorer);
  framework.register();
}
