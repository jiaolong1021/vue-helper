"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};

// out/util/util.js
var require_util = __commonJS({
  "out/util/util.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getWord = exports2.getRelativePath = exports2.getCurrentWord = exports2.getTabSize = exports2.getWorkspaceRoot = exports2.winRootPathHandle = void 0;
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
    function getWord(document, position, textSplite) {
      const line = document.lineAt(position.line);
      let posIndex = position.character;
      let textSingle = line.text.substring(posIndex, posIndex + 1);
      let selectText = "";
      while (textSplite.indexOf(textSingle) === -1 && posIndex <= line.text.length) {
        selectText += textSingle;
        ++posIndex;
        textSingle = line.text.substring(posIndex, posIndex + 1);
      }
      posIndex = position.character - 1;
      textSingle = line.text.substring(posIndex, posIndex + 1);
      while (textSplite.indexOf(textSingle) === -1 && posIndex > 0) {
        selectText = textSingle + selectText;
        --posIndex;
        textSingle = line.text.substring(posIndex, posIndex + 1);
      }
      textSingle = line.text.substring(posIndex, posIndex + 1);
      return {
        selectText,
        startText: textSingle
      };
    }
    exports2.getWord = getWord;
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
      constructor(rootPath, prefix) {
        this.rootPath = rootPath;
        this.prefix = prefix;
      }
      search(poster, searchName, usePrefix) {
        let files = [];
        let cond;
        let componentPath = "";
        let prefix = usePrefix ? this.prefix : {};
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
              name = dir.replace(/\\/gi, "/").replace(/.*\/(\w*)\/\w*.\w*/gi, "$1");
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
    var vscode_12 = require("vscode");
    var util_1 = require_util();
    var traverse_1 = require_traverse();
    var path = require("path");
    var fs = require("fs");
    var ExplorerProvider = class {
      getActiveEditorDir(activePath) {
        return activePath.replace(this.projectRootPathReg, "").replace(/[\/|\\]\w*\.\w*$/gi, "");
      }
      getActiveEditorPath(activePath) {
        return activePath.replace(this.projectRootPathReg, "");
      }
      getVueRelativePath(activeEditorPath, vuePath) {
        let vfPath = path.relative(activeEditorPath, vuePath);
        vfPath = "./" + vfPath;
        return vfPath.replace(/\\/gi, "/");
      }
      constructor(context) {
        this.name = "vue-helper";
        this.projectRootPath = "";
        this.tabSize = "";
        this.isTs = false;
        this.prefix = {
          alias: "@",
          path: "src"
        };
        this.vueFiles = [];
        this.store = {
          set: (key, value) => {
            vscode_12.workspace.getConfiguration(this.name).update(key, value, vscode_12.ConfigurationTarget.Global);
          },
          get: (key) => {
            return vscode_12.workspace.getConfiguration(this.name).get(key);
          }
        };
        this.context = context;
        this.projectRootPath = (0, util_1.getWorkspaceRoot)("");
        this.projectRootPathReg = new RegExp(`.*${this.projectRootPath}/`, "gi");
        this.traverse = new traverse_1.default(this.projectRootPath, this.prefix);
        this.tabSize = (0, util_1.getTabSize)();
        const tsconfigPath = (0, util_1.winRootPathHandle)(path.join(this.projectRootPath, "tsconfig.json"));
        this.isTs = fs.existsSync(tsconfigPath);
        this.vueFiles = this.traverse.search(".vue", "", false);
        if (vscode_12.workspace.workspaceFolders) {
          const watcher = vscode_12.workspace.createFileSystemWatcher("**/*.vue");
          watcher.onDidCreate(() => {
            this.vueFiles = this.traverse.search(".vue", "", false);
          });
          watcher.onDidDelete(() => {
            this.vueFiles = this.traverse.search(".vue", "", false);
          });
        }
      }
      register() {
      }
    };
    exports2.default = ExplorerProvider;
  }
});

// out/frameworks/element-ui/jsTag.js
var require_jsTag = __commonJS({
  "out/frameworks/element-ui/jsTag.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.default = (tabSize) => {
      return {
        "el-alert": `this.$alert('\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9', '\u6807\u9898\u540D\u79F0', {
${tabSize}confirmButtonText: '\u786E\u5B9A',
${tabSize}callback: action => {
${tabSize}${tabSize}
${tabSize}}
})`,
        "el-conform": `this.$confirm('\u6B64\u64CD\u4F5C\u5C06\u6C38\u4E45\u5220\u9664\u8BE5\u6587\u4EF6, \u662F\u5426\u7EE7\u7EED?', '\u63D0\u793A', {
${tabSize}confirmButtonText: '\u786E\u5B9A',
${tabSize}cancelButtonText: '\u53D6\u6D88',
${tabSize}type: 'warning'
}).then(() => {
${tabSize}this.$message({
${tabSize}${tabSize}type: 'success',
${tabSize}${tabSize}message: '\u5220\u9664\u6210\u529F!'
${tabSize}})
}).catch(() => {
${tabSize}this.$message({
${tabSize}${tabSize}type: 'info',
${tabSize}${tabSize}message: '\u5DF2\u53D6\u6D88\u5220\u9664'
${tabSize}})
})`,
        "el-form:clear": `this.$refs['\${1:form}'].clearValidate()`,
        "el-form:valid": `this.$refs['\${1:formName}'].validate((valid) => {
${tabSize}if (valid) {
${tabSize}${tabSize}$2
${tabSize}} else {
${tabSize}${tabSize}return false
${tabSize}}
})`,
        "el-message": `this.$message({
${tabSize}message: '\u606D\u559C\u4F60\uFF0C\u8FD9\u662F\u4E00\u6761\u6210\u529F\u6D88\u606F',
${tabSize}type: 'success'
})`,
        "el-message:close": `this.$message({
${tabSize}message: '\u606D\u559C\u4F60\uFF0C\u8FD9\u662F\u4E00\u6761\u6210\u529F\u6D88\u606F',
${tabSize}showClose: true,
${tabSize}type: 'success'
})`,
        "el-notify": `this.$notify({
${tabSize}title: '\u6807\u9898\u540D\u79F0',
${tabSize}message: h('i', {style: 'color: teal'}, 'notify')
})`,
        "el-notify:noclose": `this.$notify({
${tabSize}title: '\u63D0\u793A',
${tabSize}message: '\u4E0D\u4F1A\u81EA\u52A8\u5173\u95ED\u7684\u6D88\u606F',
${tabSize}duration: 0
})`,
        "el-notify:success": `this.$notify({
${tabSize}title: '\u6210\u529F',
${tabSize}message: '\u8FD9\u662F\u4E00\u6761\u6210\u529F\u7684\u63D0\u793A\u6D88\u606F',
${tabSize}type: 'success'
})`,
        "el-prompt": `this.$prompt('\u8BF7\u8F93\u5165\u90AE\u7BB1', '\u63D0\u793A', {
${tabSize}confirmButtonText: '\u786E\u5B9A',
${tabSize}cancelButtonText: '\u53D6\u6D88',
${tabSize}inputPattern: '',
${tabSize}inputErrorMessage: ''
}).then(({ value }) => {
${tabSize}
}).catch(() => {
${tabSize}
});`,
        "el-rules:array": `{ type: 'array', required: true, message: '\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A', trigger: 'change' }`,
        "el-rules:date": `{ type: 'date', required: true, message: '\u8BF7\u9009\u62E9\u65E5\u671F', trigger: 'change' }`,
        "el-rules:minMax": `{require: true, min: 3, max: 5, message: '\u957F\u5EA6\u5728 3 \u5230 5 \u4E2A\u5B57\u7B26', trigger: 'blur' }`,
        "el-rules:required": `{required: true, message:'\u8BF7\u8F93\u5165', trigger: 'blur'}`,
        "el-rules:self": `{ validator: validatePass, trigger: 'blur' }`,
        "el-rules:selfmethod": `var validatePass = (rule, value, callback) => {
${tabSize}if (value === '') {
${tabSize}${tabSize}callback(new Error(''));
${tabSize}} else {
${tabSize}${tabSize}callback();
${tabSize}}
}`,
        "el-pagination": `handleCurrentChange (pageNum) {
${tabSize}this.pageNum = pageNum
${tabSize}this.fetchList()
},
handleSizeChange(pageSize) {
${tabSize}this.pageSize = pageSize
${tabSize}this.fetchList()
}`,
        "reg-phone": `/^[1][3,4,5,7,8][0-9]{9}$/`,
        "reg-email": `/^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,4}$/`
      };
    };
  }
});

// out/frameworks/element-ui/tag.js
var require_tag = __commonJS({
  "out/frameworks/element-ui/tag.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.default = (tabSize) => {
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
        "el-breadcrumb-item": `<el-breadcrumb-item></el-breadcrumb-item>`,
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
${tabSize}${tabSize}<el-button @click="dialogVisible = false">\u53D6 \u6D88</el-button>
${tabSize}${tabSize}<el-button type="primary" @click="dialogVisible = false">\u786E \u5B9A</el-button>
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
${tabSize}${tabSize}<el-button @click="dialogVisible = false">\u53D6 \u6D88</el-button>
${tabSize}${tabSize}<el-button type="primary" @click="dialogVisible = false">\u786E \u5B9A</el-button>
${tabSize}</div>
</el-dialog>`,
        "el-dropdown": `<el-dropdown>
${tabSize}<el-button type="primary">
${tabSize}${tabSize}\u4E0B\u62C9\u83DC\u5355<i class="el-icon-arrow-down el-icon--right"></i>
${tabSize}</el-button>
${tabSize}<el-dropdown-menu slot="dropdown">
${tabSize}${tabSize}<el-dropdown-item>\u9EC4\u91D1\u7CD5</el-dropdown-item>
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
${tabSize}title="\u6807\u9898"
${tabSize}width="200"
${tabSize}trigger="hover"
${tabSize}content="\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9">
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
${tabSize}<el-button size="small" type="primary">\u70B9\u51FB\u4E0A\u4F20</el-button>
${tabSize}<div slot="tip" class="el-upload__tip">\u53EA\u80FD\u4E0A\u4F20jpg/png\u6587\u4EF6\uFF0C\u4E14\u4E0D\u8D85\u8FC7500kb</div>
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
${tabSize}title="\${1:\u6211\u662F\u6807\u9898}"
${tabSize}:visible.sync="\${2:drawer}"
${tabSize}:direction="\${3:direction}"
${tabSize}:before-close="\${4:handleClose}">
${tabSize}\${5:<span>\u6211\u6765\u5566!</span>}
</el-drawer>`
      };
    };
  }
});

// out/frameworks/element-ui/globalAttribute.js
var require_globalAttribute = __commonJS({
  "out/frameworks/element-ui/globalAttribute.js"(exports2) {
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

// out/frameworks/element-ui/attribute.js
var require_attribute = __commonJS({
  "out/frameworks/element-ui/attribute.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.default = () => {
      return {
        "el-row": {
          "gutter": {
            "type": "attribute",
            "description": "grid spacing",
            "values": []
          },
          "type": {
            "type": "attribute",
            "description": "layout mode, you can use 'flex', works in modern browsers",
            "values": ["flex"]
          },
          "justify": {
            "type": "attribute",
            "description": "horizontal alignment of flex layout",
            "values": ["start", "end", "center", "space-around", "space-between"]
          },
          "align": {
            "type": "attribute",
            "description": "vertical alignment of flex layout",
            "values": ["top", "middle", "bottom"]
          },
          "tag": {
            "type": "attribute",
            "description": "custom element tag",
            "values": []
          }
        },
        "el-col": {
          "span": {
            "type": "attribute",
            "description": "number of column the grid spans",
            "values": []
          },
          "offset": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "push": {
            "type": "attribute",
            "description": "number of columns that grid moves to the right",
            "values": []
          },
          "pull": {
            "type": "attribute",
            "description": "number of columns that grid moves to the left",
            "values": []
          },
          "xs": {
            "type": "attribute",
            "description": "<768px Responsive columns or column props object",
            "values": []
          },
          "sm": {
            "type": "attribute",
            "description": "\u2265768px Responsive columns or column props object",
            "values": []
          },
          "md": {
            "type": "attribute",
            "description": "\u2265992 Responsive columns or column props object",
            "values": []
          },
          "lg": {
            "type": "attribute",
            "description": "\u22651200 Responsive columns or column props object",
            "values": []
          },
          "xl": {
            "type": "attribute",
            "description": "\u22651200px Responsive columns or column props object, version >= 2",
            "values": []
          },
          "tag": {
            "type": "attribute",
            "description": "custom element tag",
            "values": []
          }
        },
        "el-button": {
          "type": {
            "type": "attribute",
            "description": "button type",
            "values": ["primary", "success", "warning", "danger", "info", "text"]
          },
          "size": {
            "type": "attribute",
            "description": "",
            "values": ["medium", "small", "mini"]
          },
          "plain": {
            "type": "attribute",
            "description": "determine whether it's a plain button",
            "values": []
          },
          "loading": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "disabled": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "icon": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "autofocus": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "native-type": {
            "type": "attribute",
            "description": "same as native button's type",
            "values": ["button", "submit", "reset"]
          },
          "round": {
            "type": "attribute",
            "description": "determine whether it's a round button, default: false",
            "values": []
          },
          "circle": {
            "type": "attribute",
            "description": "",
            "values": []
          }
        },
        "el-radio": {
          "label": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "disabled": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "border": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "size": {
            "type": "attribute",
            "description": "",
            "values": ["medium", "small", "mini"]
          },
          "name": {
            "type": "attribute",
            "description": "native 'name' attribute",
            "values": []
          }
        },
        "el-radio-group": {
          "v-model": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "size": {
            "type": "attribute",
            "description": "",
            "values": ["medium", "small", "mini"]
          },
          "fill": {
            "type": "attribute",
            "description": "border and background color when button is active",
            "values": []
          },
          "text-color": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "change": {
            "type": "method",
            "description": "",
            "values": []
          }
        },
        "el-radio-button": {
          "label": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "disabled": {
            "type": "attribute",
            "description": "",
            "values": []
          }
        },
        "el-checkbox": {
          "label": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "true-label": {
            "type": "attribute",
            "description": "value of the checkbox if it's checked",
            "values": []
          },
          "false-label": {
            "type": "attribute",
            "description": "value of the checkbox if it's not checked",
            "values": []
          },
          "border": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "size": {
            "type": "attribute",
            "description": "",
            "values": ["medium", "small", "mini"]
          },
          "name": {
            "type": "attribute",
            "description": "native 'name' attribute",
            "values": []
          },
          "checked": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "indeterminate": {
            "type": "attribute",
            "description": "same as indeterminate in native checkbox",
            "values": []
          },
          "disabled": {
            "type": "attribute",
            "description": "",
            "values": []
          }
        },
        "el-checkbox-group": {
          "v-model": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "size": {
            "type": "attribute",
            "description": "",
            "values": ["medium", "small", "mini"]
          },
          "fill": {
            "type": "attribute",
            "description": "border and background color when button is active",
            "values": []
          },
          "text-color": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "min": {
            "type": "attribute",
            "description": "minimum number of checkbox checked",
            "values": []
          },
          "max": {
            "type": "attribute",
            "description": "maximum number of checkbox checked",
            "values": []
          },
          "change": {
            "type": "method",
            "description": "",
            "values": []
          }
        },
        "el-checkbox-button": {
          "label": {
            "type": "attribute",
            "description": "",
            "values": []
          }
        },
        "el-input": {
          "v-model": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "placeholder": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "type": {
            "type": "attribute",
            "description": "Same as the 'type' attribute of native input, except that it can be 'textarea'",
            "values": []
          },
          "value": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "maxlength": {
            "type": "attribute",
            "description": "maximum Input text length",
            "values": []
          },
          "minlength": {
            "type": "attribute",
            "description": "minimum Input text length",
            "values": []
          },
          "disabled": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "size": {
            "type": "attribute",
            "description": "",
            "values": ["medium", "small", "mini"]
          },
          "icon": {
            "type": "attribute",
            "description": "icon name",
            "values": []
          },
          "prefix-icon": {
            "type": "attribute",
            "description": "prefix icon class",
            "values": []
          },
          "suffix-icon": {
            "type": "attribute",
            "description": "suffix icon class",
            "values": []
          },
          "rows": {
            "type": "attribute",
            "description": "number of rows of textarea, only works when type is 'textarea'",
            "values": []
          },
          "autosize": {
            "type": "attribute",
            "description": "whether textarea has an adaptive height, only works when type is 'textarea'. Can accept an object, e.g. { minRows: 2, maxRows: 6 }",
            "values": []
          },
          "auto-complete": {
            "type": "attribute",
            "description": "",
            "values": ["one", "off"]
          },
          "name": {
            "type": "attribute",
            "description": "native 'name' attribute",
            "values": []
          },
          "readonly": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "max": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "min": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "step": {
            "type": "attribute",
            "description": "same as step in native input",
            "values": []
          },
          "resize": {
            "type": "attribute",
            "description": "control the resizability",
            "values": ["none", "both", "horizontal", "vertical"]
          },
          "autofocus": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "form": {
            "type": "attribute",
            "description": "same as 'form' in native input",
            "values": []
          },
          "label": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "tabindex": {
            "type": "attribute",
            "description": "input tabindex",
            "values": []
          },
          "clearable": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "on-icon-click": {
            "type": "attribute",
            "description": "hook function when clicking on the input icon",
            "values": []
          },
          "click": {
            "type": "method",
            "description": "",
            "values": []
          },
          "blur": {
            "type": "method",
            "description": "",
            "values": []
          },
          "focus": {
            "type": "method",
            "description": "",
            "values": []
          },
          "change": {
            "type": "method",
            "description": "",
            "values": []
          },
          "clear": {
            "type": "method",
            "description": "triggers when the Input is cleared by the button which generated by the 'clearable' attribute",
            "values": []
          }
        },
        "el-autocomplete": {
          "v-model": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "placeholder": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "value": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "debounce": {
            "type": "attribute",
            "description": "debounce delay when typing, in milliseconds, default: 300",
            "values": []
          },
          "disabled": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "props": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "custom-item": {
            "type": "attribute",
            "description": "component name of your customized suggestion list item",
            "values": []
          },
          "icon": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "fetch-suggestions": {
            "type": "attribute",
            "description": "a method to fetch input suggestions. When suggestions are ready, invoke callback(data:[]) to return them to Autocomplete",
            "values": []
          },
          "popper-class": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "trigger-on-focus": {
            "type": "attribute",
            "description": "whether show suggestions when input focus",
            "values": []
          },
          "on-icon-click": {
            "type": "attribute",
            "description": "hook function when clicking on the input icon",
            "values": []
          },
          "select-when-unmatched": {
            "type": "attribute",
            "description": "whether to emit a 'select' event on enter when there is no autocomplete match",
            "values": []
          },
          "label": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "prefix-icon": {
            "type": "attribute",
            "description": "prefix icon class",
            "values": []
          },
          "suffix-icon": {
            "type": "attribute",
            "description": "suffix icon class",
            "values": []
          },
          "select": {
            "type": "method",
            "description": "",
            "values": []
          }
        },
        "el-input-number": {
          "v-model": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "placeholder": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "value": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "min": {
            "type": "attribute",
            "description": "the minimum allowed value",
            "values": []
          },
          "max": {
            "type": "attribute",
            "description": "the maximum allowed value",
            "values": []
          },
          "step": {
            "type": "attribute",
            "description": "incremental step",
            "values": []
          },
          "size": {
            "type": "attribute",
            "description": "",
            "values": ["medium", "small", "mini"]
          },
          "disabled": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "controls-position": {
            "type": "attribute",
            "description": "position of the control buttons",
            "values": ["right"]
          },
          "controls": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "debounce": {
            "type": "attribute",
            "description": "debounce delay when typing, in millisecond",
            "values": []
          },
          "change": {
            "type": "method",
            "description": "",
            "values": []
          }
        },
        "el-select": {
          "v-model": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "placeholder": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "multiple": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "disabled": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "value-key": {
            "type": "attribute",
            "description": "unique identity key name for value, required when value is an object",
            "values": []
          },
          "size": {
            "type": "attribute",
            "description": "",
            "values": ["medium", "small", "mini"]
          },
          "clearable": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "collapse-tags": {
            "type": "attribute",
            "description": "whether to collapse tags to a text when multiple selecting",
            "values": []
          },
          "multiple-limit": {
            "type": "attribute",
            "description": "maximum number of options user can select when multiple is true. No limit when set to 0",
            "values": []
          },
          "name": {
            "type": "attribute",
            "description": "native 'name' attribute",
            "values": []
          },
          "auto-complete": {
            "type": "attribute",
            "description": "",
            "values": ["one", "off"]
          },
          "filterable": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "allow-create": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "filter-method": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "remote": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "remote-method": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "loading": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "loading-text": {
            "type": "attribute",
            "description": "displayed text while loading data from server",
            "values": []
          },
          "no-match-text": {
            "type": "attribute",
            "description": "displayed text when no data matches the filtering query",
            "values": []
          },
          "no-data-text": {
            "type": "attribute",
            "description": "displayed text when there is no options",
            "values": []
          },
          "popper-class": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "reserve-keyword": {
            "type": "attribute",
            "description": "when 'multiple' and 'filter' is true, whether to reserve current keyword after selecting an option",
            "values": []
          },
          "default-first-option": {
            "type": "attribute",
            "description": "select first matching option on enter key. Use with 'filterable' or 'remote'",
            "values": []
          },
          "popper-append-to-body": {
            "type": "attribute",
            "description": "whether to append the popper menu to body. If the positioning of the popper is wrong, you can try to set this prop to false, default: true",
            "values": []
          },
          "change": {
            "type": "method",
            "description": "",
            "values": []
          },
          "visible-change": {
            "type": "method",
            "description": "",
            "values": []
          },
          "remote-tag": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "clear": {
            "type": "method",
            "description": "triggers when the clear icon is clicked in a clearable Select",
            "values": []
          },
          "blur": {
            "type": "method",
            "description": "",
            "values": []
          },
          "focus": {
            "type": "method",
            "description": "",
            "values": []
          }
        },
        "el-option-group": {
          "v-for": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "key": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "label": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "disabled": {
            "type": "attribute",
            "description": "",
            "values": []
          }
        },
        "el-option": {
          "label": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "value": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "disabled": {
            "type": "attribute",
            "description": "",
            "values": []
          }
        },
        "el-cascader": {
          "options": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "v-model": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "props": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "value": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "separator": {
            "type": "attribute",
            "description": "separator character, default: '/'",
            "values": []
          },
          "popper-class": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "placeholder": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "disabled": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "clearable": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "expand-trigger": {
            "type": "attribute",
            "description": "trigger mode of expanding current item",
            "values": ["click", "hover"]
          },
          "show-all-levels": {
            "type": "attribute",
            "description": "whether to display all levels of the selected value in the input",
            "values": []
          },
          "filterable": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "debounce": {
            "type": "attribute",
            "description": "debounce delay when typing, in millisecond",
            "values": []
          },
          "change-on-select": {
            "type": "attribute",
            "description": "whether selecting an option of any level is permitted",
            "values": []
          },
          "size": {
            "type": "attribute",
            "description": "",
            "values": ["medium", "small", "mini"]
          },
          "change": {
            "type": "method",
            "description": "",
            "values": []
          },
          "active-item-change": {
            "type": "method",
            "description": "triggers when active option changes, only works when 'change-on-select' is 'false'",
            "values": []
          },
          "blur": {
            "type": "method",
            "description": "",
            "values": []
          },
          "focus": {
            "type": "method",
            "description": "",
            "values": []
          }
        },
        "el-switch": {
          "v-model": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "disabled": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "width": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "active-icon-class": {
            "type": "attribute",
            "description": "class name of the icon displayed when in on state, overrides 'active-text', version >= 2",
            "values": []
          },
          "inactive-icon-class": {
            "type": "attribute",
            "description": "class name of the icon displayed when in off state, overrides 'inactive-text', version >= 2",
            "values": []
          },
          "active-text": {
            "type": "attribute",
            "description": "text displayed when in on state, version >= 2",
            "values": []
          },
          "inactive-text": {
            "type": "attribute",
            "description": "text displayed when in off state, version >= 2",
            "values": []
          },
          "active-value": {
            "type": "attribute",
            "description": "switch value when in on state, default: true, version >= 2",
            "values": []
          },
          "inactive-value": {
            "type": "attribute",
            "description": "switch value when in off state, default: false, version >= 2",
            "values": []
          },
          "active-color": {
            "type": "attribute",
            "description": "background color when in on state, default: #409EFF, version >= 2",
            "values": []
          },
          "inactive-color": {
            "type": "attribute",
            "description": "background color when in off state, default: #C0CCDA, version >= 2",
            "values": []
          },
          "on-icon-class": {
            "type": "attribute",
            "description": "class name of the icon displayed when in on state, overrides 'on-text', version < 2",
            "values": []
          },
          "off-icon-class": {
            "type": "attribute",
            "description": "class name of the icon displayed when in off state, overrides 'off-text', version < 2",
            "values": []
          },
          "on-text": {
            "type": "attribute",
            "description": "text displayed when in on state, version < 2",
            "values": []
          },
          "off-text": {
            "type": "attribute",
            "description": "text displayed when in off state, version < 2",
            "values": []
          },
          "on-value": {
            "type": "attribute",
            "description": "switch value when in on state, default: true, version < 2",
            "values": []
          },
          "off-value": {
            "type": "attribute",
            "description": "switch value when in off state, default: false, version < 2",
            "values": []
          },
          "on-color": {
            "type": "attribute",
            "description": "background color when in on state, default: #20A0FF, version < 2",
            "values": []
          },
          "off-color": {
            "type": "attribute",
            "description": "background color when in off state, default: #C0CCDA, version < 2",
            "values": []
          },
          "name": {
            "type": "attribute",
            "description": "input name of Switch",
            "values": []
          },
          "change": {
            "type": "method",
            "description": "",
            "values": []
          }
        },
        "el-slider": {
          "v-model": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "min": {
            "type": "attribute",
            "description": "minimum value, defalult: 0",
            "values": []
          },
          "max": {
            "type": "attribute",
            "description": "maximum value, defalult: 100",
            "values": []
          },
          "disabled": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "step": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "show-input": {
            "type": "attribute",
            "description": "whether to display an input box, works when 'range' is false, default: false",
            "values": []
          },
          "show-input-controls": {
            "type": "attribute",
            "description": "whether to display control buttons when 'show-input' is true, default: true",
            "values": []
          },
          "input-size": {
            "type": "attribute",
            "description": "size of the input box, default: small",
            "values": ["large", "medium", "small", "mini"]
          },
          "show-stops": {
            "type": "attribute",
            "description": "whether to display breakpoints, default: false",
            "values": []
          },
          "show-tooltip": {
            "type": "attribute",
            "description": "whether to display tooltip value, default: true",
            "values": []
          },
          "format-tooltip": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "range": {
            "type": "attribute",
            "description": "whether to select a range",
            "values": []
          },
          "vertical": {
            "type": "attribute",
            "description": "defaults: false",
            "values": []
          },
          "height": {
            "type": "attribute",
            "description": "Slider height, required in vertical mode",
            "values": []
          },
          "debounce": {
            "type": "attribute",
            "description": "debounce delay when typing, in millisecond, works when 'show-input' is true, default: 300",
            "values": []
          },
          "tooltip-class": {
            "type": "attribute",
            "description": "custom class name for the tooltip",
            "values": []
          },
          "change": {
            "type": "method",
            "description": "",
            "values": []
          }
        },
        "el-time-select": {
          "v-model": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "placeholder": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "readonly": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "editable": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "disabled": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "clearable": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "size": {
            "type": "attribute",
            "description": "",
            "values": ["medium", "small", "mini"]
          },
          "value": {
            "type": "attribute",
            "description": "value of the picker, default: HH:mm:ss",
            "values": []
          },
          "align": {
            "type": "attribute",
            "description": "",
            "values": ["left", "center", "right"]
          },
          "popper-class": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "picker-options": {
            "type": "attribute",
            "description": "additional options, type is object",
            "values": ["start", "end", "step", "minTime", "maxTime"]
          },
          "vertical": {
            "type": "attribute",
            "description": "defaults: false",
            "values": []
          },
          "height": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "change": {
            "type": "method",
            "description": "",
            "values": []
          }
        },
        "el-time-picker": {
          "v-model": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "placeholder": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "readonly": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "editable": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "disabled": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "clearable": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "size": {
            "type": "attribute",
            "description": "",
            "values": ["medium", "small", "mini"]
          },
          "start-placeholder": {
            "type": "attribute",
            "description": "placeholder for the start time in range mode",
            "values": []
          },
          "end-placeholder": {
            "type": "attribute",
            "description": "placeholder for the end time in range mode",
            "values": []
          },
          "value": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "align": {
            "type": "attribute",
            "description": "",
            "values": ["left", "center", "right"]
          },
          "picker-options": {
            "type": "attribute",
            "description": "additional options, type is object",
            "values": ["format", "selectableRange"]
          },
          "range-separator": {
            "type": "attribute",
            "description": "default: '-'",
            "values": []
          },
          "popper-class": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "is-range": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "arrow-control": {
            "type": "attribute",
            "description": "whether to pick time using arrow buttons, only works with <el-time-picker>",
            "values": []
          },
          "value-format": {
            "type": "attribute",
            "description": "optional, format of binding value. If not specified, the binding value will be a Date object",
            "values": []
          },
          "default-value": {
            "type": "attribute",
            "description": "optional default time of the picker, type: Date",
            "values": []
          },
          "change": {
            "type": "method",
            "description": "",
            "values": []
          },
          "blur": {
            "type": "method",
            "description": "",
            "values": []
          },
          "focus": {
            "type": "method",
            "description": "",
            "values": []
          }
        },
        "el-date-picker": {
          "v-model": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "placeholder": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "readonly": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "editable": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "disabled": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "clearable": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "size": {
            "type": "attribute",
            "description": "",
            "values": ["medium", "small", "mini"]
          },
          "start-placeholder": {
            "type": "attribute",
            "description": "placeholder for the start time in range mode",
            "values": []
          },
          "end-placeholder": {
            "type": "attribute",
            "description": "placeholder for the end time in range mode",
            "values": []
          },
          "time-arrow-control": {
            "type": "attribute",
            "description": "whether to pick time using arrow buttons",
            "values": []
          },
          "type": {
            "type": "attribute",
            "description": "type of the picker, default: date",
            "values": ["year", "month", "date", "week", "datetime", "datetimerange", "daterange"]
          },
          "format": {
            "type": "attribute",
            "description": "year yyyy month MM day dd, hour HH, minute mm, second ss, default: yyyy-MM-dd",
            "values": []
          },
          "align": {
            "type": "attribute",
            "description": "",
            "values": ["left", "center", "right"]
          },
          "popper-class": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "picker-options": {
            "type": "attribute",
            "description": "additional options, type is object",
            "values": ["shortcuts", "disabledDate", "firstDayOfWeek", "onPick"]
          },
          "range-separator": {
            "type": "attribute",
            "description": "default: '-'",
            "values": []
          },
          "default-value": {
            "type": "attribute",
            "description": "optional default time of the picker, type: Date",
            "values": []
          },
          "default-time": {
            "type": "attribute",
            "description": "The time value to use when selecting date range, type: string[]",
            "values": []
          },
          "value-format": {
            "type": "attribute",
            "description": "optional, format of binding value. If not specified, the binding value will be a Date object",
            "values": []
          },
          "name": {
            "type": "attribute",
            "description": "native 'name' attribute",
            "values": []
          },
          "unlink-panels": {
            "type": "attribute",
            "description": "unlink two date-panels in range-picker",
            "values": []
          },
          "prefix-icon": {
            "type": "attribute",
            "description": "Custom prefix icon class, default: 'el-icon-date",
            "values": []
          },
          "clear-icon": {
            "type": "attribute",
            "description": "Custom clear icon class, default: 'el-icon-circle-close",
            "values": []
          },
          "change": {
            "type": "method",
            "description": "",
            "values": []
          }
        },
        "el-upload": {
          "action": {
            "type": "attribute",
            "description": "required, upload URL",
            "values": []
          },
          "headers": {
            "type": "attribute",
            "description": "request headers",
            "values": []
          },
          "multiple": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "data": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "name": {
            "type": "attribute",
            "description": "key name for uploaded file, default: 'file'",
            "values": []
          },
          "width": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "with-credentials": {
            "type": "attribute",
            "description": "whether cookies are sent",
            "values": []
          },
          "show-file-list": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "drag": {
            "type": "attribute",
            "description": "whether to activate drag and drop mode",
            "values": []
          },
          "accept": {
            "type": "attribute",
            "description": "accepted file types, will not work when thumbnail-mode is true",
            "values": []
          },
          "on-preview": {
            "type": "attribute",
            "description": "hook function when clicking the uploaded files, type: function(file)",
            "values": []
          },
          "on-remove": {
            "type": "attribute",
            "description": "hook function when files are removed, type: function(file, fileList)",
            "values": []
          },
          "on-success": {
            "type": "attribute",
            "description": "hook function when uploaded successfully, type: function(response, file, fileList)",
            "values": []
          },
          "on-error": {
            "type": "attribute",
            "description": "hook function when some errors occurs, type: function(err, file, fileList)",
            "values": []
          },
          "on-progress": {
            "type": "attribute",
            "description": "hook function when some progress occurs, type: function(event, file, fileList)",
            "values": []
          },
          "on-change": {
            "type": "attribute",
            "description": "hook function when select file or upload file success or upload file fail, type: function(file, fileList)",
            "values": []
          },
          "before-upload": {
            "type": "attribute",
            "description": "hook function before uploading with the file to be uploaded as its parameter. If false is returned or a Promise is returned and then is rejected, uploading will be aborted, type: function(file)",
            "values": []
          },
          "before-remove": {
            "type": "attribute",
            "description": "hook function before removing a file with the file and file list as its parameters. If false is returned or a Promise is returned and then is rejected, removing will be aborted. type: function(file, fileList)",
            "values": []
          },
          "list-type": {
            "type": "attribute",
            "description": "type of fileList, default: 'text'",
            "values": ["text", "picture", "picture-card"]
          },
          "auto-upload": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "file-list": {
            "type": "attribute",
            "description": "default uploaded files, e.g. [{name: '*.jpeg', url: '*'}]",
            "values": []
          },
          "http-request": {
            "type": "attribute",
            "description": "override default xhr behavior, allowing you to implement your own upload-file's request",
            "values": []
          },
          "disabled": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "limit": {
            "type": "attribute",
            "description": "maximum number of uploads allowed",
            "values": []
          },
          "on-exceed": {
            "type": "attribute",
            "description": "hook function when limit is exceeded",
            "values": []
          }
        },
        "el-rate": {
          "v-model": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "max": {
            "type": "attribute",
            "description": "max rating score, default: 5",
            "values": []
          },
          "disabled": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "allow-half": {
            "type": "attribute",
            "description": "whether picking half start is allowed",
            "values": []
          },
          "low-threshold": {
            "type": "attribute",
            "description": "hreshold value between low and medium level. The value itself will be included in low level, default: 2",
            "values": []
          },
          "high-threshold": {
            "type": "attribute",
            "description": "threshold value between medium and high level. The value itself will be included in high level, default: 4",
            "values": []
          },
          "colors": {
            "type": "attribute",
            "description": "color array for icons. It should have 3 elements, each of which corresponds with a score level, default: ['#F7BA2A', '#F7BA2A', '#F7BA2A']",
            "values": []
          },
          "void-color": {
            "type": "attribute",
            "description": "color of unselected icons, default: #C6D1DE",
            "values": []
          },
          "disabled-void-color": {
            "type": "attribute",
            "description": "color of unselected read-only icons, default: #EFF2F7",
            "values": []
          },
          "icon-classes": {
            "type": "attribute",
            "description": "array of class names of icons. It should have 3 elements, each of which corresponds with a score level, default: ['el-icon-star-on', 'el-icon-star-on','el-icon-star-on']",
            "values": []
          },
          "void-icon-class": {
            "type": "attribute",
            "description": "class name of unselected icons, default: el-icon-star-off",
            "values": []
          },
          "disabled-void-icon-class": {
            "type": "attribute",
            "description": "class name of unselected read-only icons, default: el-icon-star-on",
            "values": []
          },
          "show-text": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "show-score": {
            "type": "attribute",
            "description": "whether to display current score. show-score and show-text cannot be true at the same time",
            "values": []
          },
          "text-color": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "texts": {
            "type": "attribute",
            "description": "text array",
            "values": []
          },
          "score-template": {
            "type": "attribute",
            "description": "score template, default: {value}",
            "values": []
          },
          "change": {
            "type": "method",
            "description": "",
            "values": []
          }
        },
        "el-color-picker": {
          "v-model": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "disabled": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "size": {
            "type": "attribute",
            "description": "",
            "values": ["medium", "small", "mini"]
          },
          "show-alpha": {
            "type": "attribute",
            "description": "whether to display the alpha slider",
            "values": []
          },
          "color-format": {
            "type": "attribute",
            "description": "color format of v-model, default: hex(when show-alpha is false)/rgb(when show-alpha is true)",
            "values": ["hsl", "hsv", "hex", "rgb"]
          },
          "popper-class": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "predefine": {
            "type": "attribute",
            "description": "predefined color options, type: array",
            "values": []
          },
          "change": {
            "type": "method",
            "description": "",
            "values": []
          },
          "active-change": {
            "type": "method",
            "description": "",
            "values": []
          }
        },
        "el-transfer": {
          "v-model": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "data": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "filterable": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "filter-placeholder": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "filter-method": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "target-order": {
            "type": "attribute",
            "description": "order strategy for elements in the target list. If set to 'original', the elements will keep the same order as the data source. If set to 'push', the newly added elements will be pushed to the bottom. If set to 'unshift', the newly added elements will be inserted on the top, default: original",
            "values": ["original", "push", "unshift"]
          },
          "titles": {
            "type": "attribute",
            "description": "custom list titles, default: ['List 1', 'List 2']",
            "values": []
          },
          "button-texts": {
            "type": "attribute",
            "description": "custom button texts, default: []",
            "values": []
          },
          "render-content": {
            "type": "attribute",
            "description": "custom render function for data items",
            "values": []
          },
          "format": {
            "type": "attribute",
            "description": "texts for checking status in list footer, default: { noChecked: '${total} items', hasChecked: '${checked}/${total} checked' }",
            "values": []
          },
          "props": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "left-default-checked": {
            "type": "attribute",
            "description": "key array of initially checked data items of the left list, default: []",
            "values": []
          },
          "right-default-checked": {
            "type": "attribute",
            "description": "key array of initially checked data items of the right list, default: []",
            "values": []
          },
          "change": {
            "type": "method",
            "description": "",
            "values": []
          },
          "left-check-change": {
            "type": "method",
            "description": "triggers when end user changes the checked state of any data item in the left list",
            "values": []
          },
          "right-check-change": {
            "type": "method",
            "description": "triggers when end user changes the checked state of any data item in the right list",
            "values": []
          }
        },
        "el-form": {
          "model": {
            "type": "attribute",
            "description": "data of form component, type: object",
            "values": []
          },
          "rules": {
            "type": "attribute",
            "description": "validation rules of form",
            "values": []
          },
          "inline": {
            "type": "attribute",
            "description": "whether the form is inline",
            "values": []
          },
          "label-position": {
            "type": "attribute",
            "description": "position of label, default: 'right'",
            "values": ["left", "right", "top"]
          },
          "label-width": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "label-suffix": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "show-message": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "inline-message": {
            "type": "attribute",
            "description": "whether to display the error message inline with the form item",
            "values": []
          },
          "status-icon": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "validate-on-rule-change": {
            "type": "attribute",
            "description": "whether to trigger validation when the 'rules' prop is changed, default: true",
            "values": []
          },
          "size": {
            "type": "attribute",
            "description": "",
            "values": ["medium", "small", "mini"]
          },
          "disabled": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "validate": {
            "type": "method",
            "description": "triggers after a form item is validated",
            "values": []
          }
        },
        "el-form-item": {
          "label": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "prop": {
            "type": "attribute",
            "description": "a key of model. In the use of validate and resetFields method, the attribute is required",
            "values": []
          },
          "label-width": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "required": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "rules": {
            "type": "attribute",
            "description": "validation rules of form",
            "values": []
          },
          "error": {
            "type": "attribute",
            "description": "field error message, set its value and the field will validate error and show this message immediately",
            "values": []
          },
          "show-message": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "inline-message": {
            "type": "attribute",
            "description": "inline style validate message",
            "values": []
          },
          "size": {
            "type": "attribute",
            "description": "",
            "values": ["medium", "small", "mini"]
          }
        },
        "el-table": {
          "data": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "height": {
            "type": "attribute",
            "description": "Table's height. By default it has an auto height. If its value is a number, the height is measured in pixels; if its value is a string, the height is affected by external styles",
            "values": []
          },
          "max-height": {
            "type": "attribute",
            "description": "Table's max-height. The height of the table starts from 'auto' until it reaches the maxHeight limit. The 'maxHeight' is measured in pixels, same as 'heigh't",
            "values": []
          },
          "stripe": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "border": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "fit": {
            "type": "attribute",
            "description": "whether width of column automatically fits its container",
            "values": []
          },
          "show-header": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "highlight-current-row": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "current-row-key": {
            "type": "attribute",
            "description": "key of current row, a set only prop",
            "values": []
          },
          "row-class-name": {
            "type": "attribute",
            "description": "function that returns custom class names for a row, or a string assigning class names for every row",
            "values": []
          },
          "cell-class-name": {
            "type": "attribute",
            "description": "function that returns custom class names for a cell, or a string assigning class names for every cell",
            "values": []
          },
          "cell-style": {
            "type": "attribute",
            "description": "function that returns custom style for a cell, or an object assigning custom style for every cell",
            "values": []
          },
          "header-row-class-name": {
            "type": "attribute",
            "description": "function that returns custom class names for a row in table header, or a string assigning class names for every row in table header",
            "values": []
          },
          "header-row-style": {
            "type": "attribute",
            "description": "function that returns custom style for a row in table header, or an object assigning custom style for every row in table header",
            "values": []
          },
          "header-cell-name": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "header-cell-style": {
            "type": "attribute",
            "description": "function that returns custom style for a cell in table header, or an object assigning custom style for every cell in table header",
            "values": []
          },
          "row-style": {
            "type": "attribute",
            "description": "function that returns custom style for a row, or a string assigning custom style for every row",
            "values": []
          },
          "row-key": {
            "type": "attribute",
            "description": "key of row data, used for optimizing rendering. Required if 'reserve-selection' is on",
            "values": []
          },
          "empty-text": {
            "type": "attribute",
            "description": "Displayed text when data is empty. You can customize this area with slot='empty'",
            "values": []
          },
          "default-expand-all": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "expand-row-keys": {
            "type": "attribute",
            "description": "set expanded rows by this prop, prop's value is the keys of expand rows, you should set row-key before using this prop, type: Array",
            "values": []
          },
          "default-sort": {
            "type": "attribute",
            "description": "set the default sort column and order. property prop is used to set default sort column, property order is used to set default sort order",
            "values": []
          },
          "tooltip-effect": {
            "type": "attribute",
            "description": "tooltip 'effect' property",
            "values": ["dark", "light"]
          },
          "show-summary": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "sum-text": {
            "type": "attribute",
            "description": "displayed text for the first column of summary row, default: Sum",
            "values": []
          },
          "summary-method": {
            "type": "attribute",
            "description": "custom summary method",
            "values": []
          },
          "span-method": {
            "type": "attribute",
            "description": "method that returns rowspan and colspan",
            "values": []
          },
          "select-on-indeterminate": {
            "type": "attribute",
            "description": "controls the behavior of master checkbox in multi-select tables when only some rows are selected (but not all). If true, all rows will be selected, else deselected. default: true",
            "values": []
          },
          "select": {
            "type": "method",
            "description": "triggers when user clicks the checkbox in a row, arg: selection, row",
            "values": []
          },
          "select-all": {
            "type": "method",
            "description": "triggers when user clicks the checkbox in table header, arg: selection",
            "values": []
          },
          "selection-change": {
            "type": "method",
            "description": "triggers when selection changes, arg: selection",
            "values": []
          },
          "cell-mouse-enter": {
            "type": "method",
            "description": "triggers when hovering into a cell, arg: row, column, cell, event",
            "values": []
          },
          "cell-mouse-leave": {
            "type": "method",
            "description": "triggers when hovering out of a cell, arg: row column, cell, event",
            "values": []
          },
          "cell-click": {
            "type": "method",
            "description": "triggers when clicking a cell, arg: row, column, cell, event",
            "values": []
          },
          "cell-dbclick": {
            "type": "method",
            "description": "triggers when double clicking a cell, arg: row, column, cell, event",
            "values": []
          },
          "row-click": {
            "type": "method",
            "description": "triggers when clicking a row, arg: row, event, column",
            "values": []
          },
          "row-contextmenu": {
            "type": "method",
            "description": "triggers when user right clicks on a row, arg: row, event",
            "values": []
          },
          "row-dbclick": {
            "type": "method",
            "description": "triggers when double clicking a row, arg: row, event",
            "values": []
          },
          "header-click": {
            "type": "method",
            "description": "triggers when clicking a column header, arg: column, event",
            "values": []
          },
          "sort-change": {
            "type": "method",
            "description": "triggers when Table's sorting changes, arg: { column, prop, order }",
            "values": []
          },
          "filter-change": {
            "type": "method",
            "description": "column's key. If you need to use the filter-change event, this attribute is mandatory to identify which column is being filtered, arg: filters",
            "values": []
          },
          "current-change": {
            "type": "method",
            "description": "triggers when current row changes, arg: currentRow, oldCurrentRow",
            "values": []
          },
          "header-draggend": {
            "type": "method",
            "description": "triggers when finish dragging header, arg: newWidth, oldWidth, column, event",
            "values": []
          },
          "expand": {
            "type": "method",
            "description": "triggers when user expands or collapses a row, arg: row, expanded",
            "values": []
          },
          "expand-change": {
            "type": "method",
            "description": "triggers when user expands or collapses a row, arg: row, expanded",
            "values": []
          }
        },
        "el-table-column": {
          "label": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "type": {
            "type": "attribute",
            "description": "type of the column. If set to 'selection', the column will display checkbox. If set to 'index', the column will display index of the row (staring from 1). If set to 'expand', the column will display expand icon.",
            "values": ["selection", "index", "expand"]
          },
          "column-key": {
            "type": "attribute",
            "description": "column's key. If you need to use the filter-change event, you need this attribute to identify which column is being filtered",
            "values": []
          },
          "index": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "prop": {
            "type": "attribute",
            "description": "field name. You can also use its alias: property",
            "values": []
          },
          "width": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "min-width": {
            "type": "attribute",
            "description": "column minimum width. Columns with width has a fixed width, while columns with min-width has a width that is distributed in proportion",
            "values": []
          },
          "fixed": {
            "type": "attribute",
            "description": "whether column is fixed at left/right. Will be fixed at left if 'true'",
            "values": ["ture", "left", "right"]
          },
          "render-header": {
            "type": "attribute",
            "description": "render function for table header of this column",
            "values": []
          },
          "sortable": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "sort-method": {
            "type": "attribute",
            "description": "sorting method, works when 'sortable' is true. Should return a number, just like Array.sort, type: Function(a, b)",
            "values": []
          },
          "sort-by": {
            "type": "attribute",
            "description": "specify which property to sort by, works when 'sortable' is true and 'sort-method' is undefined. If set to an Array, the column will sequentially sort by the next property if the previous one is equal, type: Function(row, index)/String/Array",
            "values": []
          },
          "resizable": {
            "type": "attribute",
            "description": "whether column width can be resized, works when border of 'el-table' is 'true'",
            "values": []
          },
          "formatter": {
            "type": "attribute",
            "description": "function that formats content",
            "values": []
          },
          "show-overflow-tooltip": {
            "type": "attribute",
            "description": "whether to hide extra content and show them in a tooltip when hovering on the cell",
            "values": []
          },
          "align": {
            "type": "attribute",
            "description": "",
            "values": ["left", "center", "right"]
          },
          "header-align": {
            "type": "attribute",
            "description": "alignment of the table header. If omitted, the value of the 'align' attribute will be applied",
            "values": ["left", "center", "right"]
          },
          "class-name": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "label-class-name": {
            "type": "attribute",
            "description": "class name of the label of this column",
            "values": []
          },
          "selectable": {
            "type": "attribute",
            "description": "function that determines if a certain row can be selected, works when type is 'selection' Function(row, index)",
            "values": []
          },
          "reserve-selection": {
            "type": "attribute",
            "description": "whether to reserve selection after data refreshing, works when type is 'selection'",
            "values": []
          },
          "filters": {
            "type": "attribute",
            "description": "an array of data filtering options. For each element in this array, 'text' and 'value' are required",
            "values": []
          },
          "filter-placement": {
            "type": "attribute",
            "description": "placement for the filter dropdown",
            "values": []
          },
          "filter-multiple": {
            "type": "attribute",
            "description": "whether data filtering supports multiple options",
            "values": []
          },
          "filter-method": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "filtered-value": {
            "type": "attribute",
            "description": "filter value for selected data, might be useful when table header is rendered with 'render-header'",
            "values": []
          }
        },
        "el-tag": {
          "type": {
            "type": "attribute",
            "description": "theme",
            "values": ["info", "success", "warning", "danger"]
          },
          "closable": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "close-transition": {
            "type": "attribute",
            "description": "whether the removal animation is disabled",
            "values": []
          },
          "hit": {
            "type": "attribute",
            "description": "whether Tag has a highlighted border",
            "values": []
          },
          "color": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "size": {
            "type": "attribute",
            "description": "",
            "values": ["medium", "small", "mini"]
          },
          "close": {
            "type": "method",
            "description": "triggers when Tab is removed",
            "values": []
          }
        },
        "el-progress": {
          "percentage": {
            "type": "attribute",
            "description": "percentage, required, default: 0",
            "values": []
          },
          "type": {
            "type": "attribute",
            "description": "the type of progress bar, default: line",
            "values": ["line", "circle"]
          },
          "stroke-width": {
            "type": "attribute",
            "description": "the width of progress bar, default: 6",
            "values": []
          },
          "text-inside": {
            "type": "attribute",
            "description": "whether to place the percentage inside progress bar, only works when type is 'line'",
            "values": []
          },
          "status": {
            "type": "attribute",
            "description": "the current status of progress bar",
            "values": ["success", "exception"]
          },
          "color": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "width": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "show-text": {
            "type": "attribute",
            "description": "",
            "values": []
          }
        },
        "el-tree": {
          "data": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "empty-text": {
            "type": "attribute",
            "description": "text displayed when data is void",
            "values": []
          },
          "node-key": {
            "type": "attribute",
            "description": "unique identity key name for nodes, its value should be unique across the whole tree",
            "values": []
          },
          "props": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "load": {
            "type": "attribute",
            "description": "method for loading subtree data",
            "values": []
          },
          "render-content": {
            "type": "attribute",
            "description": "render function for tree node",
            "values": []
          },
          "highlight-current": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "current-node-key": {
            "type": "attribute",
            "description": "key of current node, a set only prop",
            "values": []
          },
          "default-expand-all": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "expand-on-click-node": {
            "type": "attribute",
            "description": "whether to expand or collapse node when clicking on the node, if false, then expand or collapse node only when clicking on the arrow icon, default: true",
            "values": []
          },
          "auto-expand-parent": {
            "type": "attribute",
            "description": "whether to expand father node when a child node is expanded, default: true",
            "values": []
          },
          "default-expanded-keys": {
            "type": "attribute",
            "description": "array of keys of initially expanded nodes",
            "values": []
          },
          "show-checkbox": {
            "type": "attribute",
            "description": "whether node is selectable",
            "values": []
          },
          "check-strictly": {
            "type": "attribute",
            "description": "whether checked state of a node not affects its father and child nodes when 'show-checkbox' is 'true'",
            "values": []
          },
          "default-checked-keys": {
            "type": "attribute",
            "description": "array of keys of initially checked nodes",
            "values": []
          },
          "filter-node-method": {
            "type": "attribute",
            "description": "this function will be executed on each node when use filter method. if return 'false', tree node will be hidden.",
            "values": []
          },
          "accordion": {
            "type": "attribute",
            "description": "whether only one node among the same level can be expanded at one time, default: false",
            "values": []
          },
          "indent": {
            "type": "attribute",
            "description": "horizontal indentation of nodes in adjacent levels in pixels, default: 16",
            "values": []
          },
          "check-descendants": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "draggable": {
            "type": "attribute",
            "description": "whether enable tree nodes drag and drop",
            "values": []
          },
          "allow-drag": {
            "type": "attribute",
            "description": "this function will be executed before dragging a node. If false is returned, the node can not be dragged, type: Function",
            "values": []
          },
          "allow-drop": {
            "type": "attribute",
            "description": "this function will be executed before the dragging node is dropped. If false is returned, the dragging node can not be dropped at the target node, type: Function",
            "values": []
          },
          "node-click": {
            "type": "method",
            "description": "triggers when a node is clicked",
            "values": []
          },
          "node-contextmenu": {
            "type": "method",
            "description": "triggers when a node is clicked by right button",
            "values": []
          },
          "check-change": {
            "type": "method",
            "description": "triggers when the selected state of the node changes",
            "values": []
          },
          "check": {
            "type": "method",
            "description": "triggers after clicking the checkbox of a node",
            "values": []
          },
          "current-change": {
            "type": "method",
            "description": "triggers when current node changes",
            "values": []
          },
          "node-expand": {
            "type": "method",
            "description": "triggers when current node open",
            "values": []
          },
          "node-collapse": {
            "type": "method",
            "description": "triggers when current node close",
            "values": []
          },
          "node-drag-start": {
            "type": "method",
            "description": "triggers when dragging starts",
            "values": []
          },
          "node-drag-enter": {
            "type": "method",
            "description": "triggers when the dragging node enters another node",
            "values": []
          },
          "node-drag-leave": {
            "type": "method",
            "description": "triggers when the dragging node leaves a node",
            "values": []
          },
          "node-drag-over": {
            "type": "method",
            "description": "triggers when dragging over a node (like mouseover event)",
            "values": []
          },
          "node-drag-end": {
            "type": "method",
            "description": "triggers when dragging ends",
            "values": []
          },
          "node-drop": {
            "type": "method",
            "description": "triggers after the dragging node is dropped",
            "values": []
          }
        },
        "el-pagination": {
          "total": {
            "type": "attribute",
            "description": "total item count",
            "values": []
          },
          "current-page": {
            "type": "attribute",
            "description": "current page number, supports the .sync modifier, default: 1",
            "values": []
          },
          "page-size": {
            "type": "attribute",
            "description": "item count of each page, default: 10",
            "values": []
          },
          "current-change": {
            "type": "method",
            "description": "triggers when 'current-page' changes",
            "values": []
          },
          "layout": {
            "type": "attribute",
            "description": "layout of Pagination, elements separated with a comma",
            "values": ["sizes", "prev", "pager", "next", "jumper", "->", "total", "slot"]
          },
          "small": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "background": {
            "type": "attribute",
            "description": "whether the buttons have a background color",
            "values": []
          },
          "page-count": {
            "type": "attribute",
            "description": "total page count. Set either 'total' or 'page-count' and pages will be displayed; if you need 'page-sizes', total is required",
            "values": []
          },
          "page-sizes": {
            "type": "attribute",
            "description": "options of item count per page, example: [10, 20]",
            "values": []
          },
          "popper-class": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "prev-text": {
            "type": "attribute",
            "description": "text for the prev button",
            "values": []
          },
          "next-text": {
            "type": "attribute",
            "description": "text for the next button",
            "values": []
          },
          "disabled": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "size-change": {
            "type": "attribute",
            "description": "",
            "values": []
          }
        },
        "el-badge": {
          "value": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "max": {
            "type": "attribute",
            "description": "maximum value, shows '{max}+' when exceeded. Only works if 'value' is a Number",
            "values": []
          },
          "is-dot": {
            "type": "attribute",
            "description": "a little dot is displayed",
            "values": []
          },
          "hidden": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "type": {
            "type": "attribute",
            "description": "type",
            "values": ["primary", "success", "warning", "danger", "info"]
          }
        },
        "el-alert": {
          "type": {
            "type": "attribute",
            "description": "component type",
            "values": ["success", "warning", "info", "danger"]
          },
          "title": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "description": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "closable": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "center": {
            "type": "attribute",
            "description": "whether to center the text",
            "values": []
          },
          "close-text": {
            "type": "attribute",
            "description": "customized close button text",
            "values": []
          },
          "show-icon": {
            "type": "attribute",
            "description": "if a type icon is displayed",
            "values": []
          },
          "close": {
            "type": "method",
            "description": "",
            "values": []
          }
        },
        "el-menu": {
          "default-active": {
            "type": "attribute",
            "description": "index of currently active menu",
            "values": []
          },
          "mode": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "collapse": {
            "type": "attribute",
            "description": "whether the menu is collapsed (available only in vertical mode)",
            "values": []
          },
          "background-color": {
            "type": "attribute",
            "description": "background color of Menu (hex format), default: #ffffff",
            "values": []
          },
          "text-color": {
            "type": "attribute",
            "description": "text color of Menu (hex format), default: #2d2f33",
            "values": []
          },
          "active-text-color": {
            "type": "attribute",
            "description": "text color of currently active menu item (hex format), default: #409EFF",
            "values": []
          },
          "theme": {
            "type": "attribute",
            "description": "theme color, default: light",
            "values": ["light", "dark"]
          },
          "default-openeds": {
            "type": "attribute",
            "description": "array that contains keys of currently active sub-menus",
            "values": []
          },
          "unique-opened": {
            "type": "attribute",
            "description": "whether only one sub-menu can be active",
            "values": []
          },
          "menu-trigger": {
            "type": "attribute",
            "description": "how sub-menus are triggered, only works when mode is 'horizontal', default: hover",
            "values": []
          },
          "router": {
            "type": "attribute",
            "description": "whether vue-router mode is activated. If true, index will be used as 'path' to activate the route action",
            "values": []
          },
          "collapse-transition": {
            "type": "attribute",
            "description": "whether to enable the collapse transition, default: true",
            "values": []
          },
          "select": {
            "type": "method",
            "description": "",
            "values": []
          },
          "open": {
            "type": "method",
            "description": "",
            "values": []
          },
          "close": {
            "type": "method",
            "description": "",
            "values": []
          }
        },
        "el-submenu": {},
        "el-menu-item-group": {
          "title": {
            "type": "attribute",
            "description": "",
            "values": []
          }
        },
        "el-menu-item": {
          "index": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "route": {
            "type": "attribute",
            "description": "Vue Router object",
            "values": []
          },
          "disabled": {
            "type": "attribute",
            "description": "",
            "values": []
          }
        },
        "el-tabs": {
          "type": {
            "type": "attribute",
            "description": "type of Tab",
            "values": ["card", "border-card"]
          },
          "closable": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "addable": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "editable": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "value": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "activate-name": {
            "type": "attribute",
            "description": "name of the selected tab(deprecated)",
            "values": []
          },
          "tab-position": {
            "type": "attribute",
            "description": "position of tabs, default: top",
            "values": ["top", "right", "bottom", "left"]
          },
          "tab-click": {
            "type": "method",
            "description": "triggers when a tab is clicked",
            "values": []
          },
          "tab-remove": {
            "type": "method",
            "description": "triggers when tab-remove button is clicked",
            "values": []
          },
          "tab-add": {
            "type": "method",
            "description": "triggers when tab-add button is clicked",
            "values": []
          },
          "edit": {
            "type": "method",
            "description": "triggers when tab-add button or tab-remove is clicked",
            "values": []
          }
        },
        "el-tab-pane": {
          "label": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "disabled": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "name": {
            "type": "attribute",
            "description": "native 'name' attribute",
            "values": []
          },
          "closable": {
            "type": "attribute",
            "description": "",
            "values": []
          }
        },
        "el-breadcrumb": {
          "separator": {
            "type": "attribute",
            "description": "separator character, default: '/'",
            "values": []
          },
          "separator-class": {
            "type": "attribute",
            "description": "iconfont-separator's class",
            "values": []
          }
        },
        "el-breadcrumb-item": {
          "to": {
            "type": "attribute",
            "description": "target route of the link, same as to of vue-router",
            "values": []
          },
          "replace": {
            "type": "attribute",
            "description": "if 'true', the navigation will not leave a history record, default: false",
            "values": []
          }
        },
        "el-dropdown": {
          "type": {
            "type": "attribute",
            "description": "menu button type, refer to Button Component, only works when 'split-button' is true",
            "values": []
          },
          "szie": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "split-button": {
            "type": "attribute",
            "description": "whether a button group is displayed",
            "values": []
          },
          "placement": {
            "type": "attribute",
            "description": "default: bottom",
            "values": ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end", "right", "right-start", "right-end"]
          },
          "trigger": {
            "type": "attribute",
            "description": "default: hover",
            "values": ["hover", "click"]
          },
          "hide-on-click": {
            "type": "attribute",
            "description": "whether to hide menu after clicking menu-item",
            "values": []
          },
          "show-timeout": {
            "type": "attribute",
            "description": "Delay time before show a dropdown, default: 250",
            "values": []
          },
          "hide-timeout": {
            "type": "attribute",
            "description": "Delay time before hide a dropdown, default: 150",
            "values": []
          },
          "click": {
            "type": "method",
            "description": "",
            "values": []
          },
          "command": {
            "type": "method",
            "description": "triggers when a dropdown item is clicked",
            "values": []
          },
          "visible-change": {
            "type": "method",
            "description": "",
            "values": []
          }
        },
        "el-dropdown-menu": {
          "command": {
            "type": "attribute",
            "description": "a command to be dispatched to Dropdown's 'command' callback",
            "values": []
          },
          "disabled": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "divided": {
            "type": "attribute",
            "description": "",
            "values": []
          }
        },
        "el-steps": {
          "space": {
            "type": "attribute",
            "description": "the spacing of each step, will be responsive if omitted. Support percentage.",
            "values": []
          },
          "active": {
            "type": "attribute",
            "description": "current activation step",
            "values": []
          },
          "direction": {
            "type": "attribute",
            "description": "display direction, default: horizontal",
            "values": ["vertical", "horizontal"]
          },
          "process-status": {
            "type": "attribute",
            "description": "status of current step, default: process",
            "values": ["wait", "process", "finish", "error", "success"]
          },
          "finish-status": {
            "type": "attribute",
            "description": "status of end step, default: finish",
            "values": ["wait", "process", "finish", "error", "success"]
          },
          "align-center": {
            "type": "attribute",
            "description": "whether step description is centered",
            "values": []
          },
          "center": {
            "type": "attribute",
            "description": "center whole Steps component",
            "values": []
          },
          "simple": {
            "type": "attribute",
            "description": "",
            "values": []
          }
        },
        "el-step": {
          "title": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "description": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "icon": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "status": {
            "type": "attribute",
            "description": "current status. It will be automatically set by Steps if not configured.",
            "values": ["wait", "process", "finish", "error", "success"]
          }
        },
        "el-dialog": {
          "title": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "top": {
            "type": "attribute",
            "description": "value for top of Dialog CSS, works when size is not full, default: 15%",
            "values": []
          },
          "visible": {
            "type": "attribute",
            "description": "visibility of Dialog, supports the '.sync' modifier, default: false",
            "values": []
          },
          "width": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "fullscreen": {
            "type": "attribute",
            "description": "whether the Dialog takes up full screen, default: false",
            "values": []
          },
          "modal": {
            "type": "attribute",
            "description": "whether a mask is displayed, default: true",
            "values": []
          },
          "modal-append-to-body": {
            "type": "attribute",
            "description": "whether to append modal to body element. If false, the modal will be appended to Dialog's parent element, default: true",
            "values": []
          },
          "append-to-body": {
            "type": "attribute",
            "description": "whether to append Dialog itself to body. A nested Dialog should have this attribute set to 'true', default: false",
            "values": []
          },
          "lock-scroll": {
            "type": "attribute",
            "description": "whether scroll of body is disabled while Dialog is displayed, default: true",
            "values": []
          },
          "custom-class": {
            "type": "attribute",
            "description": "custom class names for Dialog",
            "values": []
          },
          "close-on-click-modal": {
            "type": "attribute",
            "description": "whether the Dialog can be closed by clicking the mask, default: true",
            "values": []
          },
          "show-close": {
            "type": "attribute",
            "description": "whether to show a close button, default: true",
            "values": []
          },
          "before-close": {
            "type": "attribute",
            "description": "callback before Dialog closes, and it will prevent Dialog from closing",
            "values": []
          },
          "center": {
            "type": "attribute",
            "description": "whether to align the header and footer in center",
            "values": []
          },
          "close": {
            "type": "method",
            "description": "",
            "values": []
          },
          "open": {
            "type": "method",
            "description": "",
            "values": []
          }
        },
        "el-tooltip": {
          "content": {
            "type": "attribute",
            "description": "display content, can be overridden by slot#content",
            "values": []
          },
          "placement": {
            "type": "attribute",
            "description": "default: bottom",
            "values": ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end", "right", "right-start", "right-end"]
          },
          "effect": {
            "type": "attribute",
            "description": "Tooltip theme",
            "values": ["dark", "light"]
          },
          "value": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "disabled": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "offset": {
            "type": "attribute",
            "description": "offset of the Tooltip, default: 0",
            "values": []
          },
          "transition": {
            "type": "attribute",
            "description": "animation name, default: 'el-fade-in-linear'",
            "values": []
          },
          "visible-arrow": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "popper-options": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "open-delay": {
            "type": "attribute",
            "description": "delay of appearance, in millisecond, default: 0",
            "values": []
          },
          "manual": {
            "type": "attribute",
            "description": "whether to control Tooltip manually. mouseenter and mouseleave won't have effects if set to 'true', default: false",
            "values": []
          },
          "popper-class": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "enterable": {
            "type": "attribute",
            "description": "enterable whether the mouse can enter the tooltip, default: true",
            "values": []
          },
          "hide-after": {
            "type": "attribute",
            "description": "timeout in milliseconds to hide tooltip, default: 0",
            "values": []
          }
        },
        "el-popover": {
          "placement": {
            "type": "attribute",
            "description": "default: bottom",
            "values": ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end", "right", "right-start", "right-end"]
          },
          "trigger": {
            "type": "attribute",
            "description": "how the popover is triggered, default: click",
            "values": ["click", "focus", "hover", "manual"]
          },
          "title": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "content": {
            "type": "attribute",
            "description": "popover content, can be replaced with a default slot",
            "values": []
          },
          "width": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "disabled": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "value": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "offset": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "transition": {
            "type": "attribute",
            "description": "animation name, default: 'el-fade-in-linear'",
            "values": []
          },
          "visible-arrow": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "popper-options": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "popper-class": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "open-delay": {
            "type": "attribute",
            "description": "delay of appearance when trigger is hover, in milliseconds",
            "values": []
          },
          "show": {
            "type": "method",
            "description": "triggers when popover shows",
            "values": []
          },
          "hide": {
            "type": "method",
            "description": "triggers when popover hides",
            "values": []
          },
          "after-enter": {
            "type": "method",
            "description": "triggers when the entering transition ends",
            "values": []
          },
          "after-leave": {
            "type": "method",
            "description": "triggers when the leaving transition ends",
            "values": []
          }
        },
        "el-card": {
          "header": {
            "type": "attribute",
            "description": "Title of the card. Also accepts a DOM passed by slot#header",
            "values": []
          },
          "body-style": {
            "type": "attribute",
            "description": "CSS style of body,type: object, default: {padding: '20px'}",
            "values": []
          }
        },
        "el-carousel": {
          "height": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "initial-index": {
            "type": "attribute",
            "description": "index of the initially active slide (starting from 0), default: 0",
            "values": []
          },
          "trigger": {
            "type": "attribute",
            "description": "default: hover",
            "values": ["hover", "click"]
          },
          "autoplay": {
            "type": "attribute",
            "description": "whether automatically loop the slides, default: true",
            "values": []
          },
          "interval": {
            "type": "attribute",
            "description": "interval of the auto loop, in milliseconds, default: 30000",
            "values": []
          },
          "indicator-position": {
            "type": "attribute",
            "description": "position of the indicators",
            "values": ["outside", "none"]
          },
          "arrow": {
            "type": "attribute",
            "description": "when arrows are shown, default: hover",
            "values": ["always", "hover", "nerver"]
          },
          "type": {
            "type": "attribute",
            "description": "type of the Carousel",
            "values": ["card"]
          },
          "change": {
            "type": "method",
            "description": "",
            "values": []
          }
        },
        "el-carousel-item": {
          "name": {
            "type": "attribute",
            "description": "name of the item, can be used in 'setActiveItem'",
            "values": []
          },
          "label": {
            "type": "attribute",
            "description": "",
            "values": []
          }
        },
        "el-collapse": {
          "accordion": {
            "type": "attribute",
            "description": "whether to activate accordion mode, default: false",
            "values": []
          },
          "value": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "change": {
            "type": "method",
            "description": "",
            "values": []
          }
        },
        "el-collapse-item": {
          "name": {
            "type": "attribute",
            "description": "native 'name' attribute",
            "values": []
          },
          "title": {
            "type": "attribute",
            "description": "",
            "values": []
          }
        },
        "el-timeline": {
          "reverse": {
            "type": "attribute",
            "description": "",
            "values": []
          }
        },
        "el-timeline-item": {
          "timestamp": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "hide-timestamp": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "placement": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "type": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "color": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "size": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "icon": {
            "type": "attribute",
            "description": "",
            "values": []
          }
        },
        "el-divider": {
          "direction": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "content-position": {
            "type": "attribute",
            "description": "",
            "values": []
          }
        },
        "el-calendar": {
          "v-model": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "range": {
            "type": "attribute",
            "description": "whether to select a range",
            "values": []
          },
          "first-day-of-week": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "date": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "data": {
            "type": "attribute",
            "description": "",
            "values": []
          }
        },
        "el-image": {
          "src": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "fit": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "alt": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "referrer-policy": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "lazy": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "scroll-container": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "preview-src-list": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "z-index": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "load": {
            "type": "attribute",
            "description": "method for loading subtree data",
            "values": []
          },
          "error": {
            "type": "attribute",
            "description": "field error message, set its value and the field will validate error and show this message immediately",
            "values": []
          }
        },
        "el-backtop": {
          "target": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "visibility-height": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "right": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "bottom": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "click": {
            "type": "method",
            "description": "",
            "values": []
          }
        },
        "el-drawer": {
          "append-to-body": {
            "type": "attribute",
            "description": "whether to append Dialog itself to body. A nested Dialog should have this attribute set to 'true', default: false",
            "values": []
          },
          "before-close": {
            "type": "attribute",
            "description": "callback before Dialog closes, and it will prevent Dialog from closing",
            "values": []
          },
          "close-on-press-escape": {
            "type": "attribute",
            "description": "whether the Dialog can be closed by pressing ESC, default: true",
            "values": []
          },
          "custom-class": {
            "type": "attribute",
            "description": "custom class names for Dialog",
            "values": []
          },
          "destroy-on-close": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "modal": {
            "type": "attribute",
            "description": "whether a mask is displayed, default: true",
            "values": []
          },
          "modal-append-to-body": {
            "type": "attribute",
            "description": "whether to append modal to body element. If false, the modal will be appended to Dialog's parent element, default: true",
            "values": []
          },
          "direction": {
            "type": "attribute",
            "description": "display direction, default: horizontal",
            "values": ["vertical", "horizontal"]
          },
          "show-close": {
            "type": "attribute",
            "description": "whether to show a close button, default: true",
            "values": []
          },
          "size": {
            "type": "attribute",
            "description": "",
            "values": ["medium", "small", "mini"]
          },
          "title": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "visible": {
            "type": "attribute",
            "description": "visibility of Dialog, supports the '.sync' modifier, default: false",
            "values": []
          },
          "wrapperClosable": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "open": {
            "type": "method",
            "description": "",
            "values": []
          },
          "opened": {
            "type": "attribute",
            "description": "",
            "values": []
          },
          "close": {
            "type": "method",
            "description": "",
            "values": []
          },
          "closed": {
            "type": "attribute",
            "description": "",
            "values": []
          }
        }
      };
    };
  }
});

// out/frameworks/element-ui/document.js
var require_document = __commonJS({
  "out/frameworks/element-ui/document.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var docUrl = "http://element.eleme.io";
    exports2.default = () => {
      return {
        "el-row": `[element\uFF1A${docUrl}/#/zh-CN/component/layout](${docUrl}/#/zh-CN/component/layout) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| gutter | \u6805\u683C\u95F4\u9694 | number | \u2014 | 0 |
| type | \u5E03\u5C40\u6A21\u5F0F\uFF0C\u53EF\u9009 flex\uFF0C\u73B0\u4EE3\u6D4F\u89C8\u5668\u4E0B\u6709\u6548 | string | \u2014 | \u2014 |
| justify | flex \u5E03\u5C40\u4E0B\u7684\u6C34\u5E73\u6392\u5217\u65B9\u5F0F | string | start/end/center/space-around/space-between | start |
| align | flex \u5E03\u5C40\u4E0B\u7684\u5782\u76F4\u6392\u5217\u65B9\u5F0F | string | top/middle/bottom | top |
| tag | \u81EA\u5B9A\u4E49\u5143\u7D20\u6807\u7B7E | string | * | div |`,
        "el-col": `[element\uFF1A${docUrl}/#/zh-CN/component/layout](${docUrl}/#/zh-CN/component/layout) 

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
| tag | \u81EA\u5B9A\u4E49\u5143\u7D20\u6807\u7B7E | string | * | div |`,
        "el-container": `[element\uFF1A${docUrl}/#/zh-CN/component/container](${docUrl}/#/zh-CN/component/container) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| direction | \u5B50\u5143\u7D20\u7684\u6392\u5217\u65B9\u5411 | string | horizontal / vertical | \u5B50\u5143\u7D20\u4E2D\u6709 el-header \u6216 el-footer \u65F6\u4E3A vertical\uFF0C\u5426\u5219\u4E3A horizontal |`,
        "el-header": `[element\uFF1A${docUrl}/#/zh-CN/component/container](${docUrl}/#/zh-CN/component/container) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| height | \u9876\u680F\u9AD8\u5EA6 | string | \u2014 | 60px |`,
        "el-aside": `[element\uFF1A${docUrl}/#/zh-CN/component/container](${docUrl}/#/zh-CN/component/container) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| width | \u4FA7\u8FB9\u680F\u5BBD\u5EA6 | string | \u2014 | 300px |`,
        "el-footer": `[element\uFF1A${docUrl}/#/zh-CN/component/layout](${docUrl}/#/zh-CN/component/layout) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| height | \u5E95\u680F\u9AD8\u5EA6 | string | \u2014 | 60px |`,
        "el-button": `[element\uFF1A${docUrl}/#/zh-CN/component/button](${docUrl}/#/zh-CN/component/button) 

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
| click | \u70B9\u51FB\u65F6\u89E6\u53D1\u4E8B\u4EF6 | event |`,
        "el-radio": `[element\uFF1A${docUrl}/#/zh-CN/component/radio](${docUrl}/#/zh-CN/component/radio) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| label | Radio \u7684 value | string / number / boolean | \u2014 | \u2014 |
| disabled | \u662F\u5426\u7981\u7528 | boolean | \u2014 | false |
| border | \u662F\u5426\u663E\u793A\u8FB9\u6846 | boolean | \u2014 | false |
| size | Radio \u7684\u5C3A\u5BF8\uFF0C\u4EC5\u5728 border \u4E3A\u771F\u65F6\u6709\u6548 | string | medium / small / mini | \u2014 |
| name | \u539F\u751F name \u5C5E\u6027 | string | \u2014 | \u2014 |

| \u4E8B\u4EF6\u540D\u79F0 | \u8BF4\u660E | \u56DE\u8C03\u53C2\u6570 |
| :--- | :--- | :--- |
| change | \u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6 | \u9009\u4E2D\u7684 Radio label \u503C |`,
        "el-radio-group": `[element\uFF1A${docUrl}/#/zh-CN/component/radio](${docUrl}/#/zh-CN/component/radio) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| size | \u5355\u9009\u6846\u7EC4\u5C3A\u5BF8\uFF0C\u4EC5\u5BF9\u6309\u94AE\u5F62\u5F0F\u7684 Radio \u6216\u5E26\u6709\u8FB9\u6846\u7684 Radio \u6709\u6548 | string | medium / small / mini | \u2014 |
| disabled | \u662F\u5426\u7981\u7528 | boolean | \u2014 | false |
| text-color | \u6309\u94AE\u5F62\u5F0F\u7684 Radio \u6FC0\u6D3B\u65F6\u7684\u6587\u672C\u989C\u8272 | string | \u2014 | #ffffff |
| fill | \u6309\u94AE\u5F62\u5F0F\u7684 Radio \u6FC0\u6D3B\u65F6\u7684\u586B\u5145\u8272\u548C\u8FB9\u6846\u8272 | string | \u2014 | #409EFF | 

| \u4E8B\u4EF6\u540D\u79F0 | \u8BF4\u660E | \u56DE\u8C03\u53C2\u6570 |
| :--- | :--- | :--- |
| change | \u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6 | \u9009\u4E2D\u7684 Radio label \u503C |`,
        "el-radio-button": `[element\uFF1A${docUrl}/#/zh-CN/component/radio](${docUrl}/#/zh-CN/component/radio) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| label | Radio \u7684 value | string / number | \u2014 | \u2014 |
| disabled | \u662F\u5426\u7981\u7528 | boolean | \u2014 | false |
| name | \u539F\u751F name \u5C5E\u6027 | string | \u2014 | \u2014 |`,
        "el-checkbox": `[element\uFF1A${docUrl}/#/zh-CN/component/checkbox](${docUrl}/#/zh-CN/component/checkbox) 

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
| change | \u5F53\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6 | \u66F4\u65B0\u540E\u7684\u503C |`,
        "el-checkbox-group": `[element\uFF1A${docUrl}/#/zh-CN/component/checkbox](${docUrl}/#/zh-CN/component/checkbox) 

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
| change | \u5F53\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6 | \u66F4\u65B0\u540E\u7684\u503C |`,
        "el-checkbox-button": `[element\uFF1A${docUrl}/#/zh-CN/component/checkbox](${docUrl}/#/zh-CN/component/checkbox) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| label | \u9009\u4E2D\u72B6\u6001\u7684\u503C\uFF08\u53EA\u6709\u5728checkbox-group\u6216\u8005\u7ED1\u5B9A\u5BF9\u8C61\u7C7B\u578B\u4E3Aarray\u65F6\u6709\u6548\uFF09 | string / number / boolean | \u2014 | \u2014 |
| true-label | \u9009\u4E2D\u65F6\u7684\u503C | string / number | \u2014 | \u2014 |
| false-label | \u6CA1\u6709\u9009\u4E2D\u65F6\u7684\u503C | string / number | \u2014 | \u2014 |
| disabled | \u662F\u5426\u7981\u7528 | boolean | \u2014 | false |
| name | \u539F\u751F name \u5C5E\u6027 | string | \u2014 | \u2014 |
| checked | \u5F53\u524D\u662F\u5426\u52FE\u9009 | boolean | \u2014 | false |`,
        "el-input": `[element\uFF1A${docUrl}/#/zh-CN/component/input](${docUrl}/#/zh-CN/component/input) 

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
| select | \u9009\u4E2D input \u4E2D\u7684\u6587\u5B57 | \u2014 |`,
        "el-autocomplete": `[element\uFF1A${docUrl}/#/zh-CN/component/input](${docUrl}/#/zh-CN/component/input) 

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
| focus | \u4F7F input \u83B7\u53D6\u7126\u70B9 | - |`,
        "el-input-number": `[element\uFF1A${docUrl}/#/zh-CN/component/input-number](${docUrl}/#/zh-CN/component/input-number) 

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
| focus | \u4F7F input \u83B7\u53D6\u7126\u70B9 | - |`,
        "el-select": `[element\uFF1A${docUrl}/#/zh-CN/component/select](${docUrl}/#/zh-CN/component/select) 

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
| prefix | Select \u7EC4\u4EF6\u5934\u90E8\u5185\u5BB9 |`,
        "el-option-group": `[element\uFF1A${docUrl}/#/zh-CN/component/select](${docUrl}/#/zh-CN/component/select) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| label | \u5206\u7EC4\u7684\u7EC4\u540D | string | \u2014 | \u2014 |
| disabled | \u662F\u5426\u5C06\u8BE5\u5206\u7EC4\u4E0B\u6240\u6709\u9009\u9879\u7F6E\u4E3A\u7981\u7528 | boolean | \u2014 | false |`,
        "el-option": `[element\uFF1A${docUrl}/#/zh-CN/component/select](${docUrl}/#/zh-CN/component/select) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| value | \u9009\u9879\u7684\u503C | string/number/object | \u2014 | \u2014 |
| label | \u9009\u9879\u7684\u6807\u7B7E\uFF0C\u82E5\u4E0D\u8BBE\u7F6E\u5219\u9ED8\u8BA4\u4E0E value \u76F8\u540C | string/number | \u2014 | \u2014 |
| disabled | \u662F\u5426\u7981\u7528\u8BE5\u9009\u9879 | boolean | \u2014 | false |`,
        "el-cascader": `[element\uFF1A${docUrl}/#/zh-CN/component/cascader](${docUrl}/#/zh-CN/component/cascader) 

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
| focus | \u5728 Cascader \u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1 | (event: Event) |`,
        "el-switch": `[element\uFF1A${docUrl}/#/zh-CN/component/switch](${docUrl}/#/zh-CN/component/switch) 

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
| focus | \u4F7F Switch \u83B7\u53D6\u7126\u70B9 | - |`,
        "el-slider": `[element\uFF1A${docUrl}/#/zh-CN/component/slider](${docUrl}/#/zh-CN/component/slider) 

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
| change | \u503C\u6539\u53D8\u65F6\u89E6\u53D1\uFF08\u4F7F\u7528\u9F20\u6807\u62D6\u66F3\u65F6\uFF0C\u53EA\u5728\u677E\u5F00\u9F20\u6807\u540E\u89E6\u53D1\uFF09 | \u6539\u53D8\u540E\u7684\u503C |`,
        "el-time-picker": `[element\uFF1A${docUrl}/#/zh-CN/component/time-picker](${docUrl}/#/zh-CN/component/time-picker) 

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
| focus | \u4F7F input \u83B7\u53D6\u7126\u70B9 | - |`,
        "el-date-picker": `[element\uFF1A${docUrl}/#/zh-CN/component/date-picker](${docUrl}/#/zh-CN/component/date-picker) 

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
| focus | \u4F7F input \u83B7\u53D6\u7126\u70B9 | \u2014 |`,
        "el-upload": `[element\uFF1A${docUrl}/#/zh-CN/component/upload](${docUrl}/#/zh-CN/component/upload) 

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
| submit | \u624B\u52A8\u4E0A\u4F20\u6587\u4EF6\u5217\u8868 | \u2014 |`,
        "el-rate": `[element\uFF1A${docUrl}/#/zh-CN/component/rate](${docUrl}/#/zh-CN/component/rate) 

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
| change | \u5206\u503C\u6539\u53D8\u65F6\u89E6\u53D1 | \u6539\u53D8\u540E\u7684\u5206\u503C |`,
        "el-color-picker": `[element\uFF1A${docUrl}/#/zh-CN/component/color-picker](${docUrl}/#/zh-CN/component/color-picker) 

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
| active-change | \u9762\u677F\u4E2D\u5F53\u524D\u663E\u793A\u7684\u989C\u8272\u53D1\u751F\u6539\u53D8\u65F6\u89E6\u53D1 | \u5F53\u524D\u663E\u793A\u7684\u989C\u8272\u503C |`,
        "el-transfer": `[element\uFF1A${docUrl}/#/zh-CN/component/transfer](${docUrl}/#/zh-CN/component/transfer) 

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
| right-check-change | \u53F3\u4FA7\u5217\u8868\u5143\u7D20\u88AB\u7528\u6237\u9009\u4E2D / \u53D6\u6D88\u9009\u4E2D\u65F6\u89E6\u53D1 | \u5F53\u524D\u88AB\u9009\u4E2D\u7684\u5143\u7D20\u7684 key \u6570\u7EC4\u3001\u9009\u4E2D\u72B6\u6001\u53D1\u751F\u53D8\u5316\u7684\u5143\u7D20\u7684 key \u6570\u7EC4 |`,
        "el-form": `element\uFF1A${docUrl}/#/zh-CN/component/form](${docUrl}/#/zh-CN/component/form) 

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
| validate | \u4EFB\u4E00\u8868\u5355\u9879\u88AB\u6821\u9A8C\u540E\u89E6\u53D1 | \u88AB\u6821\u9A8C\u7684\u8868\u5355\u9879 prop \u503C\uFF0C\u6821\u9A8C\u662F\u5426\u901A\u8FC7\uFF0C\u9519\u8BEF\u6D88\u606F\uFF08\u5982\u679C\u5B58\u5728\uFF09 |`,
        "el-form-item": `[element\uFF1A${docUrl}/#/zh-CN/component/form](${docUrl}/#/zh-CN/component/form) 

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
| clearValidate | \u79FB\u9664\u8BE5\u8868\u5355\u9879\u7684\u6821\u9A8C\u7ED3\u679C | - |`,
        "el-table": `[element\uFF1A${docUrl}/#/zh-CN/component/table](${docUrl}/#/zh-CN/component/table) 

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
| append | \u63D2\u5165\u81F3\u8868\u683C\u6700\u540E\u4E00\u884C\u4E4B\u540E\u7684\u5185\u5BB9\uFF0C\u5982\u679C\u9700\u8981\u5BF9\u8868\u683C\u7684\u5185\u5BB9\u8FDB\u884C\u65E0\u9650\u6EDA\u52A8\u64CD\u4F5C\uFF0C\u53EF\u80FD\u9700\u8981\u7528\u5230\u8FD9\u4E2A slot\u3002\u82E5\u8868\u683C\u6709\u5408\u8BA1\u884C\uFF0C\u8BE5 slot \u4F1A\u4F4D\u4E8E\u5408\u8BA1\u884C\u4E4B\u4E0A\u3002 |`,
        "el-table-column": `[element\uFF1A${docUrl}/#/zh-CN/component/table](${docUrl}/#/zh-CN/component/table) 

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
`,
        "el-tag": `[element\uFF1A${docUrl}/#/zh-CN/component/tag](${docUrl}/#/zh-CN/component/tag) 

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
| close | \u5173\u95ED Tag \u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6 | \u2014 |`,
        "el-progress": `[element\uFF1A${docUrl}/#/zh-CN/component/progress](${docUrl}/#/zh-CN/component/progress) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| percentage | \u767E\u5206\u6BD4\uFF08\u5FC5\u586B\uFF09 | number | 0-100 | 0 |
| type | \u8FDB\u5EA6\u6761\u7C7B\u578B | string | line/circle | line |
| stroke-width | \u8FDB\u5EA6\u6761\u7684\u5BBD\u5EA6\uFF0C\u5355\u4F4D px | number | \u2014 | 6 |
| text-inside | \u8FDB\u5EA6\u6761\u663E\u793A\u6587\u5B57\u5185\u7F6E\u5728\u8FDB\u5EA6\u6761\u5185\uFF08\u53EA\u5728 type=line \u65F6\u53EF\u7528\uFF09 | boolean | \u2014 | false |
| status | \u8FDB\u5EA6\u6761\u5F53\u524D\u72B6\u6001 | string | success/exception | \u2014 |
| color | \u8FDB\u5EA6\u6761\u80CC\u666F\u8272\uFF08\u4F1A\u8986\u76D6 status \u72B6\u6001\u989C\u8272\uFF09 | string | \u2014 | \u2014 |
| width | \u73AF\u5F62\u8FDB\u5EA6\u6761\u753B\u5E03\u5BBD\u5EA6\uFF08\u53EA\u5728 type=circle \u65F6\u53EF\u7528\uFF09 | number | | 126 |
| show-text | \u662F\u5426\u663E\u793A\u8FDB\u5EA6\u6761\u6587\u5B57\u5185\u5BB9 | boolean | \u2014 | true |`,
        "el-tree": `[element\uFF1A${docUrl}/#/zh-CN/component/tree](${docUrl}/#/zh-CN/component/tree) 

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
  | isLeaf | \u6307\u5B9A\u8282\u70B9\u662F\u5426\u4E3A\u53F6\u5B50\u8282\u70B9\uFF0C\u4EC5\u5728\u6307\u5B9A\u4E86 lazy \u5C5E\u6027\u7684\u60C5\u51B5\u4E0B\u751F\u6548 | boolean, function(data, node) | \u2014 | \u2014 |`,
        "el-pagination": `[element\uFF1A${docUrl}/#/zh-CN/component/pagination](${docUrl}/#/zh-CN/component/pagination) 

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
  | disabled | \u662F\u5426\u7981\u7528 | boolean | \u2014 | false |`,
        "el-badge": `[element\uFF1A${docUrl}/#/zh-CN/component/badge](${docUrl}/#/zh-CN/component/badge) 

  | \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
  | value | \u663E\u793A\u503C | string, number | \u2014 | \u2014 |
  | max | \u6700\u5927\u503C\uFF0C\u8D85\u8FC7\u6700\u5927\u503C\u4F1A\u663E\u793A '{max}+'\uFF0C\u8981\u6C42 value \u662F Number \u7C7B\u578B | number | \u2014 | \u2014 |
  | is-dot | \u5C0F\u5706\u70B9 | boolean | \u2014 | false |
  | hidden | \u9690\u85CF badge | boolean | \u2014 | false |
  | type |	\u7C7B\u578B | string |	primary / success / warning / danger / info |	\u2014 `,
        "el-alert": `[element\uFF1A${docUrl}/#/zh-CN/component/alert](${docUrl}/#/zh-CN/component/alert) 

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
  | close | \u5173\u95EDalert\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6 | \u2014 |`,
        "el-menu": `[element\uFF1A${docUrl}/#/zh-CN/component/menu](${docUrl}/#/zh-CN/component/menu) 

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
  | close | sub-menu \u6536\u8D77\u7684\u56DE\u8C03 | index: \u6536\u8D77\u7684 sub-menu \u7684 index\uFF0C indexPath: \u6536\u8D77\u7684 sub-menu \u7684 index path |`,
        "el-submenu": `[element\uFF1A${docUrl}/#/zh-CN/component/menu](${docUrl}/#/zh-CN/component/menu) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| index | \u552F\u4E00\u6807\u5FD7 | string | \u2014 | \u2014 |
| popper-class | \u5F39\u51FA\u83DC\u5355\u7684\u81EA\u5B9A\u4E49\u7C7B\u540D | string | \u2014 | \u2014 |
| show-timeout | \u5C55\u5F00 sub-menu \u7684\u5EF6\u65F6 | number | \u2014 | 300 |
| hide-timeout | \u6536\u8D77 sub-menu \u7684\u5EF6\u65F6 | number | \u2014 | 300 |
| disabled | \u662F\u5426\u7981\u7528 | boolean | \u2014 | false |
| popper-append-to-body | \u662F\u5426\u5C06\u5F39\u51FA\u83DC\u5355\u63D2\u5165\u81F3 body \u5143\u7D20\u3002\u5728\u83DC\u5355\u7684\u5B9A\u4F4D\u51FA\u73B0\u95EE\u9898\u65F6\uFF0C\u53EF\u5C1D\u8BD5\u4FEE\u6539\u8BE5\u5C5E\u6027 | boolean | \u2014 | \u4E00\u7EA7\u5B50\u83DC\u5355\uFF1Atrue / \u975E\u4E00\u7EA7\u5B50\u83DC\u5355\uFF1Afalse |`,
        "el-menu-item": `[element\uFF1A${docUrl}/#/zh-CN/component/menu](${docUrl}/#/zh-CN/component/menu) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| index | \u552F\u4E00\u6807\u5FD7 | string | \u2014 | \u2014 |
| route | Vue Router \u8DEF\u5F84\u5BF9\u8C61 | Object | \u2014 | \u2014 |
| disabled | \u662F\u5426\u7981\u7528 | boolean | \u2014 | false |`,
        "el-menu-group": `[element\uFF1A${docUrl}/#/zh-CN/component/menu](${docUrl}/#/zh-CN/component/menu) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| title | \u5206\u7EC4\u6807\u9898 | string | \u2014 | \u2014 |`,
        "el-tabs": `[element\uFF1A${docUrl}/#/zh-CN/component/tabs](${docUrl}/#/zh-CN/component/tabs) 

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
| edit | \u70B9\u51FB tabs \u7684\u65B0\u589E\u6309\u94AE\u6216 tab \u88AB\u5173\u95ED\u540E\u89E6\u53D1 | (targetName, action) |`,
        "el-tab-pane": `[element\uFF1A${docUrl}/#/zh-CN/component/tabs](${docUrl}/#/zh-CN/component/tabs) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| label | \u9009\u9879\u5361\u6807\u9898 | string | \u2014 | \u2014 |
| disabled | \u662F\u5426\u7981\u7528 | boolean | \u2014 | false |
| name | \u4E0E\u9009\u9879\u5361 activeName \u5BF9\u5E94\u7684\u6807\u8BC6\u7B26\uFF0C\u8868\u793A\u9009\u9879\u5361\u522B\u540D | string | \u2014 | \u8BE5\u9009\u9879\u5361\u5728\u9009\u9879\u5361\u5217\u8868\u4E2D\u7684\u987A\u5E8F\u503C\uFF0C\u5982\u7B2C\u4E00\u4E2A\u9009\u9879\u5361\u5219\u4E3A'1' |
| closable | \u6807\u7B7E\u662F\u5426\u53EF\u5173\u95ED | boolean | \u2014 | false |
| lazy | \u6807\u7B7E\u662F\u5426\u5EF6\u8FDF\u6E32\u67D3 | boolean | \u2014 | false |`,
        "el-breadcrumb": `[element\uFF1A${docUrl}/#/zh-CN/component/breadcrumb](${docUrl}/#/zh-CN/component/breadcrumb) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| separator | \u5206\u9694\u7B26 | string | \u2014 | \u659C\u6760'/' |
| separator-class | \u56FE\u6807\u5206\u9694\u7B26 class | string | \u2014 | - |
| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| to | \u8DEF\u7531\u8DF3\u8F6C\u5BF9\u8C61\uFF0C\u540C vue-router \u7684 to | string/object | \u2014 | \u2014 |
| replace | \u5728\u4F7F\u7528 to \u8FDB\u884C\u8DEF\u7531\u8DF3\u8F6C\u65F6\uFF0C\u542F\u7528 replace \u5C06\u4E0D\u4F1A\u5411 history \u6DFB\u52A0\u65B0\u8BB0\u5F55 | boolean | \u2014 | false |`,
        "el-dropdown": `[element\uFF1A${docUrl}/#/zh-CN/component/dropdown](${docUrl}/#/zh-CN/component/dropdown) 

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
| divided | \u663E\u793A\u5206\u5272\u7EBF | boolean | \u2014 | false |`,
        "el-steps": `[element\uFF1A${docUrl}/#/zh-CN/component/steps](${docUrl}/#/zh-CN/component/steps) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| space | \u6BCF\u4E2A step \u7684\u95F4\u8DDD\uFF0C\u4E0D\u586B\u5199\u5C06\u81EA\u9002\u5E94\u95F4\u8DDD\u3002\u652F\u6301\u767E\u5206\u6BD4\u3002 | number / string | \u2014 | \u2014 |
| direction | \u663E\u793A\u65B9\u5411 | string | vertical/horizontal | horizontal |
| active | \u8BBE\u7F6E\u5F53\u524D\u6FC0\u6D3B\u6B65\u9AA4 | number | \u2014 | 0 |
| process-status | \u8BBE\u7F6E\u5F53\u524D\u6B65\u9AA4\u7684\u72B6\u6001 | string | wait / process / finish / error / success | process |
| finish-status | \u8BBE\u7F6E\u7ED3\u675F\u6B65\u9AA4\u7684\u72B6\u6001 | string | wait / process / finish / error / success | finish |
| align-center | \u8FDB\u884C\u5C45\u4E2D\u5BF9\u9F50 | boolean | - | false |
| simple | \u662F\u5426\u5E94\u7528\u7B80\u6D01\u98CE\u683C | boolean | - | false |`,
        "el-step": `[element\uFF1A${docUrl}/#/zh-CN/component/steps](${docUrl}/#/zh-CN/component/steps) 

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
| description | \u63CF\u8FF0\u6027\u6587\u5B57 |`,
        "el-dialog": `[element\uFF1A${docUrl}/#/zh-CN/component/dialog](${docUrl}/#/zh-CN/component/dialog) 

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
| closed | Dialog \u5173\u95ED\u52A8\u753B\u7ED3\u675F\u65F6\u7684\u56DE\u8C03 | \u2014 |`,
        "el-tooltip": `[element\uFF1A${docUrl}/#/zh-CN/component/tooltip](${docUrl}/#/zh-CN/component/tooltip) 

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
| hide-after | Tooltip \u51FA\u73B0\u540E\u81EA\u52A8\u9690\u85CF\u5EF6\u65F6\uFF0C\u5355\u4F4D\u6BEB\u79D2\uFF0C\u4E3A 0 \u5219\u4E0D\u4F1A\u81EA\u52A8\u9690\u85CF | number | \u2014 | 0 |`,
        "el-popover": `[element\uFF1A${docUrl}/#/zh-CN/component/popover](${docUrl}/#/zh-CN/component/popover) 

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
| after-leave | \u9690\u85CF\u52A8\u753B\u64AD\u653E\u5B8C\u6BD5\u540E\u89E6\u53D1 | \u2014 |`,
        "el-card": `[element\uFF1A${docUrl}/#/zh-CN/component/card](${docUrl}/#/zh-CN/component/card) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| header | \u8BBE\u7F6E header\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 slot#header \u4F20\u5165 DOM | string | \u2014 | \u2014 |
| body-style | \u8BBE\u7F6E body \u7684\u6837\u5F0F | object | \u2014 | { padding: '20px' } |
| shadow | \u8BBE\u7F6E\u9634\u5F71\u663E\u793A\u65F6\u673A | string | always / hover / never | always |`,
        "el-carousel": `[element\uFF1A${docUrl}/#/zh-CN/component/carousel](${docUrl}/#/zh-CN/component/carousel) 

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
| next | \u5207\u6362\u81F3\u4E0B\u4E00\u5F20\u5E7B\u706F\u7247 | \u2014 |`,
        "el-carousel-item": `[element\uFF1A${docUrl}/#/zh-CN/component/carousel](${docUrl}/#/zh-CN/component/carousel) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| name | \u5E7B\u706F\u7247\u7684\u540D\u5B57\uFF0C\u53EF\u7528\u4F5C setActiveItem \u7684\u53C2\u6570 | string | \u2014 | \u2014 |
| label | \u8BE5\u5E7B\u706F\u7247\u6240\u5BF9\u5E94\u6307\u793A\u5668\u7684\u6587\u672C | string | \u2014 | \u2014 |`,
        "el-collapse": `[element\uFF1A${docUrl}/#/zh-CN/component/collapse](${docUrl}/#/zh-CN/component/collapse) 

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
| title | \u9762\u677F\u6807\u9898 | string | \u2014 | \u2014 |`,
        "el-timeline": `[element:https://element.eleme.cn/#/zh-CN/component/timeline](https://element.eleme.cn/#/zh-CN/component/timeline) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| reverse | \u6307\u5B9A\u8282\u70B9\u6392\u5E8F\u65B9\u5411\uFF0C\u9ED8\u8BA4\u4E3A\u6B63\u5E8F | boolean | \u2014 | false |`,
        "el-timeline-item": `[element:https://element.eleme.cn/#/zh-CN/component/timeline](https://element.eleme.cn/#/zh-CN/component/timeline) 

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
| dot | \u81EA\u5B9A\u4E49\u8282\u70B9 |`,
        "el-divider": `[element\uFF1Ahttps://element.eleme.cn/#/zh-CN/component/divider](https://element.eleme.cn/#/zh-CN/component/divider) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| direction | \u8BBE\u7F6E\u5206\u5272\u7EBF\u65B9\u5411 | string | horizontal / vertical | horizontal |
| content-position | \u8BBE\u7F6E\u5206\u5272\u7EBF\u6587\u6848\u7684\u4F4D\u7F6E | string | left / right / center | center |`,
        "el-calendar": `[element\uFF1Ahttps://element.eleme.cn/#/zh-CN/component/calendar](https://element.eleme.cn/#/zh-CN/component/calendar) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| value / v-model | \u7ED1\u5B9A\u503C | string | Date/string/number | - |
| range | \u65F6\u95F4\u8303\u56F4\uFF0C\u5305\u62EC\u5F00\u59CB\u65F6\u95F4\u4E0E\u7ED3\u675F\u65F6\u95F4.\u5F00\u59CB\u65F6\u95F4\u5FC5\u987B\u662F\u5468\u4E00\uFF0C\u7ED3\u675F\u65F6\u95F4\u5FC5\u987B\u662F\u5468\u65E5\uFF0C\u4E14\u65F6\u95F4\u8DE8\u5EA6\u4E0D\u80FD\u8D85\u8FC7\u4E24\u4E2A\u6708\u3002 | Array | - |
| first-day-of-week | \u5468\u8D77\u59CB\u65E5 | Number | 1 \u5230 7 | 1 |`,
        "el-image": `[element\uFF1Ahttps://element.eleme.cn/#/zh-CN/component/image](https://element.eleme.cn/#/zh-CN/component/image) 

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
| error | \u52A0\u8F7D\u5931\u8D25\u7684\u5185\u5BB9 |`,
        "el-backtop": `[element\uFF1Ahttps://element.eleme.cn/#/zh-CN/component/backtop](https://element.eleme.cn/#/zh-CN/component/backtop) 

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- | :--- |
| target | \u89E6\u53D1\u6EDA\u52A8\u7684\u5BF9\u8C61 | string | Date/string/number | - |
| visibility-height | \u6EDA\u52A8\u9AD8\u5EA6\u8FBE\u5230\u6B64\u53C2\u6570\u503C\u624D\u51FA\u73B0 | number | 200 |
| right | \u63A7\u5236\u5176\u663E\u793A\u4F4D\u7F6E, \u8DDD\u79BB\u9875\u9762\u53F3\u8FB9\u8DDD | number | 40 |
| bottom | \u63A7\u5236\u5176\u663E\u793A\u4F4D\u7F6E, \u8DDD\u79BB\u9875\u9762\u5E95\u90E8\u8DDD\u79BB | number | 40 |

| \u4E8B\u4EF6 | \u8BF4\u660E | \u56DE\u8C03\u53C2\u6570 |
| :--- | :--- | :--- |
| click | \u70B9\u51FB\u6309\u94AE\u89E6\u53D1\u7684\u4E8B\u4EF6 | \u70B9\u51FB\u4E8B\u4EF6 |`,
        "el-drawer": `[element\uFF1Ahttps://element.eleme.cn/#/zh-CN/component/drawer](https://element.eleme.cn/#/zh-CN/component/drawer) 

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
| closed | Drawer \u5173\u95ED\u52A8\u753B\u7ED3\u675F\u65F6\u7684\u56DE\u8C03 | - |`
      };
    };
  }
});

// out/frameworks/element-ui/index.js
var require_element_ui = __commonJS({
  "out/frameworks/element-ui/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var jsTag_1 = require_jsTag();
    var tag_1 = require_tag();
    var globalAttribute_1 = require_globalAttribute();
    var attribute_1 = require_attribute();
    var document_1 = require_document();
    exports2.default = {
      tag: tag_1.default,
      jsTag: jsTag_1.default,
      globalAttribute: globalAttribute_1.default,
      attribute: attribute_1.default,
      document: document_1.default
    };
  }
});

// out/frameworks/element-plus/tag.js
var require_tag2 = __commonJS({
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
        "el-tag": ` <el-tag type="\${1:success}">$2</el-tag>`,
        "el-tag:effect": ` <el-tag type="\${1:success}" effect="\${2:dark}">$3</el-tag>`,
        "el-tag:closable": ` <el-tag type="\${1:success}" closable>$2</el-tag>`,
        "el-tag:round": ` <el-tag type="\${1:success}" round>$2</el-tag>`,
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
var require_jsTag2 = __commonJS({
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
var require_attribute2 = __commonJS({
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
var require_globalAttribute2 = __commonJS({
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
var require_document2 = __commonJS({
  "out/frameworks/element-plus/document.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var vscode_12 = require("vscode");
    var docUrl = "https://element-plus.org";
    exports2.default = () => {
      return {
        "el-button": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/button.html)

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
`,
        "el-button-group": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/button.html)
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
`,
        "el-container": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/container.html)

#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| direction| \u5B50\u5143\u7D20\u7684\u6392\u5217\u65B9\u5411| enum| \u5B50\u5143\u7D20\u4E2D\u6709 el-header \u6216 el-footer \u65F6\u4E3A vertical\uFF0C\u5426\u5219\u4E3A horizontal |

#### Container \u63D2\u69FD

| \u63D2\u69FD\u540D| \u8BF4\u660E| \u5B50\u6807\u7B7E |
| :--- | :--- | :--- |
| default| \u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9| Container / Header / Aside / Main / Footer |
`,
        "el-header": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/container.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| height| \u9876\u680F\u9AD8\u5EA6| string| 60px |

#### Header Slots

| \u63D2\u69FD\u540D| \u8BF4\u660E |
| :--- | :--- |
| default| \u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9 |
`,
        "el-aside": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/container.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| width| \u4FA7\u8FB9\u680F\u5BBD\u5EA6| string| 300px |

#### Aside Slots

| \u63D2\u69FD\u540D| \u8BF4\u660E |
| :--- | :--- |
| default| \u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9 |
`,
        "el-main": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/container.html)

#### Main Slots

| \u63D2\u69FD\u540D| \u8BF4\u660E |
| :--- | :--- |
| default| \u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9 |
`,
        "el-footer": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/container.html)
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
`,
        "el-icon": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/icon.html)
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
`,
        "el-layout": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/layout.html)
`,
        "el-row": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/layout.html)
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
`,
        "el-col": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/layout.html)
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
`,
        "el-link": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/link.html)

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
`,
        "el-text": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/text.html)
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
`,
        "el-scrollbar": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/scrollbar.html)
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
`,
        "el-space": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/space.html)
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
`,
        "el-config-provider": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/config-provider.html)
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
`,
        "el-autocomplete": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/autocomplete.html)
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
`,
        "el-cascader": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/cascader.html)

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
`,
        "el-cascader-panel": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/cascader.html)
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
`,
        "el-checkbox": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/checkbox.html)

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
`,
        "el-checkbox-group": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/checkbox.html)
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
`,
        "el-checkbox-button": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/checkbox.html)
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
`,
        "el-color-picker": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/color-picker.html)
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
`,
        "el-date-picker": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/date-picker.html)
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
`,
        "el-datetime-picker": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/datetime-picker.html)
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
`,
        "el-form": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/form.html)

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
`,
        "el-form-item": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/form.html)
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
`,
        "el-input": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/input.html)
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
`,
        "el-input-number": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/input-number.html)
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
`,
        "el-radio": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/radio.html)

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
`,
        "el-radio-group": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/radio.html)
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
`,
        "el-radio-button": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/radio.html)
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
`,
        "el-rate": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/rate.html)
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
`,
        "el-select": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/select.html)

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
`,
        "el-option": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/select.html)
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
`,
        "el-select-v2": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/select-v2.html)
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
`,
        "el-slider": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/slider.html)
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
`,
        "el-switch": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/switch.html)
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
`,
        "el-time-picker": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/time-picker.html)
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
`,
        "el-time-select": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/time-select.html)
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
`,
        "el-transfer": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/transfer.html)
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
`,
        "el-upload": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/upload.html)
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
`,
        "el-avatar": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/avatar.html)
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
`,
        "el-badge": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/badge.html)
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
`,
        "el-calendar": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/calendar.html)
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
`,
        "el-card": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/card.html)
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
`,
        "el-carousel": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/carousel.html)
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
`,
        "el-collapse": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/collapse.html)

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
`,
        "el-descriptions": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/descriptions.html)

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
`,
        "el-descriptions-item": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/descriptions.html)
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
`,
        "el-empty": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/empty.html)
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
`,
        "el-image": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/image.html)

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
`,
        "el-pagination": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/pagination.html)
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
`,
        "el-progress": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/progress.html)
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
`,
        "el-result": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/result.html)
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
`,
        "el-skeleton": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/skeleton.html)

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
`,
        "el-skeleton-item": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/skeleton.html)
#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| variant| \u5F53\u524D\u6E32\u67D3 skeleton \u7C7B\u578B| enum| text |

#### \u6E90\u4EE3\u7801

#### \u8D21\u732E\u8005
`,
        "el-table": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/table.html)

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
`,
        "el-table-column": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/table.html)
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
`,
        "el-tag": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/tag.html)

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
`,
        "el-check-tag": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/tag.html)
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
`,
        "el-timeline": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/timeline.html)


#### Timeline Slots

| \u63D2\u69FD\u540D| \u8BF4\u660E| \u5B50\u6807\u7B7E |
| :--- | :--- | :--- |
| default| timeline \u7EC4\u4EF6\u7684\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9| Timeline-Item |
`,
        "el-timeline--item": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/timeline.html)
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
`,
        "el-tour": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/tour.html)

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
`,
        "el-tree-select": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/tree-select.html)
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
`,
        "el-statistic": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/statistic.html)

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
`,
        "el-countdown": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/statistic.html)
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
`,
        "el-affix": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/affix.html)
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
`,
        "el-anchor": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/anchor.html)

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
`,
        "el-backtop": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/backtop.html)
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
`,
        "el-breadcrumb": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/breadcrumb.html)

#### \u5C5E\u6027

| \u5C5E\u6027\u540D| \u8BF4\u660E| \u7C7B\u578B| \u9ED8\u8BA4\u503C |
| :--- | :--- | :--- | :--- |
| separator| \u5206\u9694\u7B26| string| / |
| separator-icon| \u56FE\u6807\u5206\u9694\u7B26\u7684\u7EC4\u4EF6\u6216\u7EC4\u4EF6\u540D| string / Component| \u2014 |

#### Breadcrumb Slots

| \u63D2\u69FD\u540D| \u8BF4\u660E| \u5B50\u6807\u7B7E |
| :--- | :--- | :--- |
| default| \u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9| Breadcrumb Item |
`,
        "el-breadcrumb-item": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/breadcrumb.html)
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
`,
        "el-dropdown": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/dropdown.html)
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
`,
        "el-menu": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/menu.html)
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
`,
        "el-page-header": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/page-header.html)
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
`,
        "el-steps": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/steps.html)

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
`,
        "el-step": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/steps.html)
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
`,
        "el-alert": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/alert.html)

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
`,
        "el-dialog": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/dialog.html)
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
`,
        "el-drawer": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/drawer.html)
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
`,
        "el-loading": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/loading.html)
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
`,
        "el-message": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/message.html)
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
`,
        "el-message-box": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/message-box.html)
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
`,
        "el-notification": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/notification.html)
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
`,
        "el-popconfirm": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/popconfirm.html)
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
`,
        "el-popover": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/popover.html)
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
`,
        "el-tooltip": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/tooltip.html)
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
`,
        "el-divider": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/divider.html)
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
`,
        "el-watermark": `#### [\u8BBF\u95EE](${docUrl}/${vscode_12.l10n.t("el-locale")}/component/watermark.html)
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
`
      };
    };
  }
});

// out/frameworks/element-plus/index.js
var require_element_plus = __commonJS({
  "out/frameworks/element-plus/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tag_1 = require_tag2();
    var jsTag_1 = require_jsTag2();
    var attribute_1 = require_attribute2();
    var globalAttribute_1 = require_globalAttribute2();
    var document_1 = require_document2();
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
    exports2.getDocument = exports2.getGlobalAttribute = exports2.getAttribute = exports2.getJsTag = exports2.getTag = void 0;
    var index_1 = require_element_ui();
    var index_2 = require_element_plus();
    var framework = {
      "element-ui": index_1.default,
      "element-plus": index_2.default
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
    function getDocument(frameworks, tabSize) {
      let ret = {};
      frameworks.forEach((frameworkName) => {
        if (framework[frameworkName]) {
          ret = Object.assign(ret, framework[frameworkName].document(tabSize));
        }
      });
      return ret;
    }
    exports2.getDocument = getDocument;
  }
});

// out/vue/snippets-html.js
var require_snippets_html = __commonJS({
  "out/vue/snippets-html.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.default = (tabSize) => {
      return {
        "vcomponent": `<component :is="\${1:componentId}"></component>$0`,
        "vka": `<keep-alive$1>
${tabSize}$2
</keep-alive>$0`,
        "vtransition": `<transition$1>
${tabSize}$2
</transition>$0`,
        "vtg": `<transition-group$1>
${tabSize}$2
</transition-group>`,
        "vrl": `<router-link $1>$2</router-link>$0`,
        "vrlt": `<router-link to="$1">$2</router-link>$0`,
        "vrv": `<router-view>$1</router-view>$0`
      };
    };
  }
});

// out/vue/snippets-js.js
var require_snippets_js = __commonJS({
  "out/vue/snippets-js.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.default = (tabSize) => {
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
})`
      };
    };
  }
});

// node_modules/no-case/dist/index.js
function split(input, options = {}) {
  let result = input.replace(SPLIT_LOWER_UPPER_RE, SPLIT_REPLACE_VALUE).replace(SPLIT_UPPER_UPPER_RE, SPLIT_REPLACE_VALUE);
  if (options.separateNumbers) {
    result = result.replace(SPLIT_NUMBER_LOWER_RE, SPLIT_REPLACE_VALUE).replace(SPLIT_LETTER_NUMBER_RE, SPLIT_REPLACE_VALUE);
  }
  result = result.replace(DEFAULT_STRIP_REGEXP, "\0");
  let start = 0;
  let end = result.length;
  while (result.charAt(start) === "\0")
    start++;
  if (start === end)
    return [];
  while (result.charAt(end - 1) === "\0")
    end--;
  return result.slice(start, end).split(/\0/g);
}
function toLower(locale) {
  return locale === false ? (input) => input.toLowerCase() : (input) => input.toLocaleLowerCase(locale);
}
var SPLIT_LOWER_UPPER_RE, SPLIT_UPPER_UPPER_RE, SPLIT_NUMBER_LOWER_RE, SPLIT_LETTER_NUMBER_RE, DEFAULT_STRIP_REGEXP, SPLIT_REPLACE_VALUE;
var init_dist = __esm({
  "node_modules/no-case/dist/index.js"() {
    SPLIT_LOWER_UPPER_RE = /([\p{Ll}\d])(\p{Lu})/gu;
    SPLIT_UPPER_UPPER_RE = /(\p{Lu})([\p{Lu}][\p{Ll}])/gu;
    SPLIT_NUMBER_LOWER_RE = /(\d)(\p{Ll})/gu;
    SPLIT_LETTER_NUMBER_RE = /(\p{L})(\d)/gu;
    DEFAULT_STRIP_REGEXP = /[^\p{L}\d]+/giu;
    SPLIT_REPLACE_VALUE = "$1\0$2";
  }
});

// node_modules/param-case/dist/index.js
var dist_exports = {};
__export(dist_exports, {
  paramCase: () => paramCase
});
function paramCase(input, options) {
  const lower = toLower(options?.locale);
  return split(input, options).map(lower).join("-");
}
var init_dist2 = __esm({
  "node_modules/param-case/dist/index.js"() {
    init_dist();
  }
});

// node_modules/balanced-match/index.js
var require_balanced_match = __commonJS({
  "node_modules/balanced-match/index.js"(exports2, module2) {
    "use strict";
    module2.exports = balanced;
    function balanced(a, b, str) {
      if (a instanceof RegExp)
        a = maybeMatch(a, str);
      if (b instanceof RegExp)
        b = maybeMatch(b, str);
      var r = range(a, b, str);
      return r && {
        start: r[0],
        end: r[1],
        pre: str.slice(0, r[0]),
        body: str.slice(r[0] + a.length, r[1]),
        post: str.slice(r[1] + b.length)
      };
    }
    function maybeMatch(reg, str) {
      var m = str.match(reg);
      return m ? m[0] : null;
    }
    balanced.range = range;
    function range(a, b, str) {
      var begs, beg, left, right, result;
      var ai = str.indexOf(a);
      var bi = str.indexOf(b, ai + 1);
      var i = ai;
      if (ai >= 0 && bi > 0) {
        if (a === b) {
          return [ai, bi];
        }
        begs = [];
        left = str.length;
        while (i >= 0 && !result) {
          if (i == ai) {
            begs.push(i);
            ai = str.indexOf(a, i + 1);
          } else if (begs.length == 1) {
            result = [begs.pop(), bi];
          } else {
            beg = begs.pop();
            if (beg < left) {
              left = beg;
              right = bi;
            }
            bi = str.indexOf(b, i + 1);
          }
          i = ai < bi && ai >= 0 ? ai : bi;
        }
        if (begs.length) {
          result = [left, right];
        }
      }
      return result;
    }
  }
});

// node_modules/brace-expansion/index.js
var require_brace_expansion = __commonJS({
  "node_modules/brace-expansion/index.js"(exports2, module2) {
    var balanced = require_balanced_match();
    module2.exports = expandTop;
    var escSlash = "\0SLASH" + Math.random() + "\0";
    var escOpen = "\0OPEN" + Math.random() + "\0";
    var escClose = "\0CLOSE" + Math.random() + "\0";
    var escComma = "\0COMMA" + Math.random() + "\0";
    var escPeriod = "\0PERIOD" + Math.random() + "\0";
    function numeric(str) {
      return parseInt(str, 10) == str ? parseInt(str, 10) : str.charCodeAt(0);
    }
    function escapeBraces(str) {
      return str.split("\\\\").join(escSlash).split("\\{").join(escOpen).split("\\}").join(escClose).split("\\,").join(escComma).split("\\.").join(escPeriod);
    }
    function unescapeBraces(str) {
      return str.split(escSlash).join("\\").split(escOpen).join("{").split(escClose).join("}").split(escComma).join(",").split(escPeriod).join(".");
    }
    function parseCommaParts(str) {
      if (!str)
        return [""];
      var parts = [];
      var m = balanced("{", "}", str);
      if (!m)
        return str.split(",");
      var pre = m.pre;
      var body = m.body;
      var post = m.post;
      var p = pre.split(",");
      p[p.length - 1] += "{" + body + "}";
      var postParts = parseCommaParts(post);
      if (post.length) {
        p[p.length - 1] += postParts.shift();
        p.push.apply(p, postParts);
      }
      parts.push.apply(parts, p);
      return parts;
    }
    function expandTop(str) {
      if (!str)
        return [];
      if (str.substr(0, 2) === "{}") {
        str = "\\{\\}" + str.substr(2);
      }
      return expand(escapeBraces(str), true).map(unescapeBraces);
    }
    function embrace(str) {
      return "{" + str + "}";
    }
    function isPadded(el) {
      return /^-?0\d/.test(el);
    }
    function lte(i, y) {
      return i <= y;
    }
    function gte(i, y) {
      return i >= y;
    }
    function expand(str, isTop) {
      var expansions = [];
      var m = balanced("{", "}", str);
      if (!m)
        return [str];
      var pre = m.pre;
      var post = m.post.length ? expand(m.post, false) : [""];
      if (/\$$/.test(m.pre)) {
        for (var k = 0; k < post.length; k++) {
          var expansion = pre + "{" + m.body + "}" + post[k];
          expansions.push(expansion);
        }
      } else {
        var isNumericSequence = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m.body);
        var isAlphaSequence = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m.body);
        var isSequence = isNumericSequence || isAlphaSequence;
        var isOptions = m.body.indexOf(",") >= 0;
        if (!isSequence && !isOptions) {
          if (m.post.match(/,.*\}/)) {
            str = m.pre + "{" + m.body + escClose + m.post;
            return expand(str);
          }
          return [str];
        }
        var n;
        if (isSequence) {
          n = m.body.split(/\.\./);
        } else {
          n = parseCommaParts(m.body);
          if (n.length === 1) {
            n = expand(n[0], false).map(embrace);
            if (n.length === 1) {
              return post.map(function(p) {
                return m.pre + n[0] + p;
              });
            }
          }
        }
        var N;
        if (isSequence) {
          var x = numeric(n[0]);
          var y = numeric(n[1]);
          var width = Math.max(n[0].length, n[1].length);
          var incr = n.length == 3 ? Math.abs(numeric(n[2])) : 1;
          var test = lte;
          var reverse = y < x;
          if (reverse) {
            incr *= -1;
            test = gte;
          }
          var pad = n.some(isPadded);
          N = [];
          for (var i = x; test(i, y); i += incr) {
            var c;
            if (isAlphaSequence) {
              c = String.fromCharCode(i);
              if (c === "\\")
                c = "";
            } else {
              c = String(i);
              if (pad) {
                var need = width - c.length;
                if (need > 0) {
                  var z = new Array(need + 1).join("0");
                  if (i < 0)
                    c = "-" + z + c.slice(1);
                  else
                    c = z + c;
                }
              }
            }
            N.push(c);
          }
        } else {
          N = [];
          for (var j = 0; j < n.length; j++) {
            N.push.apply(N, expand(n[j], false));
          }
        }
        for (var j = 0; j < N.length; j++) {
          for (var k = 0; k < post.length; k++) {
            var expansion = pre + N[j] + post[k];
            if (!isTop || isSequence || expansion)
              expansions.push(expansion);
          }
        }
      }
      return expansions;
    }
  }
});

// node_modules/minimatch/dist/commonjs/assert-valid-pattern.js
var require_assert_valid_pattern = __commonJS({
  "node_modules/minimatch/dist/commonjs/assert-valid-pattern.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.assertValidPattern = void 0;
    var MAX_PATTERN_LENGTH = 1024 * 64;
    var assertValidPattern = (pattern) => {
      if (typeof pattern !== "string") {
        throw new TypeError("invalid pattern");
      }
      if (pattern.length > MAX_PATTERN_LENGTH) {
        throw new TypeError("pattern is too long");
      }
    };
    exports2.assertValidPattern = assertValidPattern;
  }
});

// node_modules/minimatch/dist/commonjs/brace-expressions.js
var require_brace_expressions = __commonJS({
  "node_modules/minimatch/dist/commonjs/brace-expressions.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.parseClass = void 0;
    var posixClasses = {
      "[:alnum:]": ["\\p{L}\\p{Nl}\\p{Nd}", true],
      "[:alpha:]": ["\\p{L}\\p{Nl}", true],
      "[:ascii:]": ["\\x00-\\x7f", false],
      "[:blank:]": ["\\p{Zs}\\t", true],
      "[:cntrl:]": ["\\p{Cc}", true],
      "[:digit:]": ["\\p{Nd}", true],
      "[:graph:]": ["\\p{Z}\\p{C}", true, true],
      "[:lower:]": ["\\p{Ll}", true],
      "[:print:]": ["\\p{C}", true],
      "[:punct:]": ["\\p{P}", true],
      "[:space:]": ["\\p{Z}\\t\\r\\n\\v\\f", true],
      "[:upper:]": ["\\p{Lu}", true],
      "[:word:]": ["\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}", true],
      "[:xdigit:]": ["A-Fa-f0-9", false]
    };
    var braceEscape = (s) => s.replace(/[[\]\\-]/g, "\\$&");
    var regexpEscape = (s) => s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    var rangesToString = (ranges) => ranges.join("");
    var parseClass = (glob, position) => {
      const pos = position;
      if (glob.charAt(pos) !== "[") {
        throw new Error("not in a brace expression");
      }
      const ranges = [];
      const negs = [];
      let i = pos + 1;
      let sawStart = false;
      let uflag = false;
      let escaping = false;
      let negate = false;
      let endPos = pos;
      let rangeStart = "";
      WHILE:
        while (i < glob.length) {
          const c = glob.charAt(i);
          if ((c === "!" || c === "^") && i === pos + 1) {
            negate = true;
            i++;
            continue;
          }
          if (c === "]" && sawStart && !escaping) {
            endPos = i + 1;
            break;
          }
          sawStart = true;
          if (c === "\\") {
            if (!escaping) {
              escaping = true;
              i++;
              continue;
            }
          }
          if (c === "[" && !escaping) {
            for (const [cls, [unip, u, neg]] of Object.entries(posixClasses)) {
              if (glob.startsWith(cls, i)) {
                if (rangeStart) {
                  return ["$.", false, glob.length - pos, true];
                }
                i += cls.length;
                if (neg)
                  negs.push(unip);
                else
                  ranges.push(unip);
                uflag = uflag || u;
                continue WHILE;
              }
            }
          }
          escaping = false;
          if (rangeStart) {
            if (c > rangeStart) {
              ranges.push(braceEscape(rangeStart) + "-" + braceEscape(c));
            } else if (c === rangeStart) {
              ranges.push(braceEscape(c));
            }
            rangeStart = "";
            i++;
            continue;
          }
          if (glob.startsWith("-]", i + 1)) {
            ranges.push(braceEscape(c + "-"));
            i += 2;
            continue;
          }
          if (glob.startsWith("-", i + 1)) {
            rangeStart = c;
            i += 2;
            continue;
          }
          ranges.push(braceEscape(c));
          i++;
        }
      if (endPos < i) {
        return ["", false, 0, false];
      }
      if (!ranges.length && !negs.length) {
        return ["$.", false, glob.length - pos, true];
      }
      if (negs.length === 0 && ranges.length === 1 && /^\\?.$/.test(ranges[0]) && !negate) {
        const r = ranges[0].length === 2 ? ranges[0].slice(-1) : ranges[0];
        return [regexpEscape(r), false, endPos - pos, false];
      }
      const sranges = "[" + (negate ? "^" : "") + rangesToString(ranges) + "]";
      const snegs = "[" + (negate ? "" : "^") + rangesToString(negs) + "]";
      const comb = ranges.length && negs.length ? "(" + sranges + "|" + snegs + ")" : ranges.length ? sranges : snegs;
      return [comb, uflag, endPos - pos, true];
    };
    exports2.parseClass = parseClass;
  }
});

// node_modules/minimatch/dist/commonjs/unescape.js
var require_unescape = __commonJS({
  "node_modules/minimatch/dist/commonjs/unescape.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.unescape = void 0;
    var unescape = (s, { windowsPathsNoEscape = false } = {}) => {
      return windowsPathsNoEscape ? s.replace(/\[([^\/\\])\]/g, "$1") : s.replace(/((?!\\).|^)\[([^\/\\])\]/g, "$1$2").replace(/\\([^\/])/g, "$1");
    };
    exports2.unescape = unescape;
  }
});

// node_modules/minimatch/dist/commonjs/ast.js
var require_ast = __commonJS({
  "node_modules/minimatch/dist/commonjs/ast.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AST = void 0;
    var brace_expressions_js_1 = require_brace_expressions();
    var unescape_js_1 = require_unescape();
    var types = /* @__PURE__ */ new Set(["!", "?", "+", "*", "@"]);
    var isExtglobType = (c) => types.has(c);
    var startNoTraversal = "(?!(?:^|/)\\.\\.?(?:$|/))";
    var startNoDot = "(?!\\.)";
    var addPatternStart = /* @__PURE__ */ new Set(["[", "."]);
    var justDots = /* @__PURE__ */ new Set(["..", "."]);
    var reSpecials = new Set("().*{}+?[]^$\\!");
    var regExpEscape = (s) => s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    var qmark = "[^/]";
    var star = qmark + "*?";
    var starNoEmpty = qmark + "+?";
    var _root, _hasMagic, _uflag, _parts, _parent, _parentIndex, _negs, _filledNegs, _options, _toString, _emptyExt, _fillNegs, fillNegs_fn, _parseAST, parseAST_fn, _partsToRegExp, partsToRegExp_fn, _parseGlob, parseGlob_fn;
    var _AST = class {
      constructor(type, parent, options = {}) {
        __privateAdd(this, _fillNegs);
        __privateAdd(this, _partsToRegExp);
        __publicField(this, "type");
        __privateAdd(this, _root, void 0);
        __privateAdd(this, _hasMagic, void 0);
        __privateAdd(this, _uflag, false);
        __privateAdd(this, _parts, []);
        __privateAdd(this, _parent, void 0);
        __privateAdd(this, _parentIndex, void 0);
        __privateAdd(this, _negs, void 0);
        __privateAdd(this, _filledNegs, false);
        __privateAdd(this, _options, void 0);
        __privateAdd(this, _toString, void 0);
        __privateAdd(this, _emptyExt, false);
        this.type = type;
        if (type)
          __privateSet(this, _hasMagic, true);
        __privateSet(this, _parent, parent);
        __privateSet(this, _root, __privateGet(this, _parent) ? __privateGet(__privateGet(this, _parent), _root) : this);
        __privateSet(this, _options, __privateGet(this, _root) === this ? options : __privateGet(__privateGet(this, _root), _options));
        __privateSet(this, _negs, __privateGet(this, _root) === this ? [] : __privateGet(__privateGet(this, _root), _negs));
        if (type === "!" && !__privateGet(__privateGet(this, _root), _filledNegs))
          __privateGet(this, _negs).push(this);
        __privateSet(this, _parentIndex, __privateGet(this, _parent) ? __privateGet(__privateGet(this, _parent), _parts).length : 0);
      }
      get hasMagic() {
        if (__privateGet(this, _hasMagic) !== void 0)
          return __privateGet(this, _hasMagic);
        for (const p of __privateGet(this, _parts)) {
          if (typeof p === "string")
            continue;
          if (p.type || p.hasMagic)
            return __privateSet(this, _hasMagic, true);
        }
        return __privateGet(this, _hasMagic);
      }
      toString() {
        if (__privateGet(this, _toString) !== void 0)
          return __privateGet(this, _toString);
        if (!this.type) {
          return __privateSet(this, _toString, __privateGet(this, _parts).map((p) => String(p)).join(""));
        } else {
          return __privateSet(this, _toString, this.type + "(" + __privateGet(this, _parts).map((p) => String(p)).join("|") + ")");
        }
      }
      push(...parts) {
        for (const p of parts) {
          if (p === "")
            continue;
          if (typeof p !== "string" && !(p instanceof _AST && __privateGet(p, _parent) === this)) {
            throw new Error("invalid part: " + p);
          }
          __privateGet(this, _parts).push(p);
        }
      }
      toJSON() {
        const ret = this.type === null ? __privateGet(this, _parts).slice().map((p) => typeof p === "string" ? p : p.toJSON()) : [this.type, ...__privateGet(this, _parts).map((p) => p.toJSON())];
        if (this.isStart() && !this.type)
          ret.unshift([]);
        if (this.isEnd() && (this === __privateGet(this, _root) || __privateGet(__privateGet(this, _root), _filledNegs) && __privateGet(this, _parent)?.type === "!")) {
          ret.push({});
        }
        return ret;
      }
      isStart() {
        if (__privateGet(this, _root) === this)
          return true;
        if (!__privateGet(this, _parent)?.isStart())
          return false;
        if (__privateGet(this, _parentIndex) === 0)
          return true;
        const p = __privateGet(this, _parent);
        for (let i = 0; i < __privateGet(this, _parentIndex); i++) {
          const pp = __privateGet(p, _parts)[i];
          if (!(pp instanceof _AST && pp.type === "!")) {
            return false;
          }
        }
        return true;
      }
      isEnd() {
        if (__privateGet(this, _root) === this)
          return true;
        if (__privateGet(this, _parent)?.type === "!")
          return true;
        if (!__privateGet(this, _parent)?.isEnd())
          return false;
        if (!this.type)
          return __privateGet(this, _parent)?.isEnd();
        const pl = __privateGet(this, _parent) ? __privateGet(__privateGet(this, _parent), _parts).length : 0;
        return __privateGet(this, _parentIndex) === pl - 1;
      }
      copyIn(part) {
        if (typeof part === "string")
          this.push(part);
        else
          this.push(part.clone(this));
      }
      clone(parent) {
        const c = new _AST(this.type, parent);
        for (const p of __privateGet(this, _parts)) {
          c.copyIn(p);
        }
        return c;
      }
      static fromGlob(pattern, options = {}) {
        var _a;
        const ast = new _AST(null, void 0, options);
        __privateMethod(_a = _AST, _parseAST, parseAST_fn).call(_a, pattern, ast, 0, options);
        return ast;
      }
      toMMPattern() {
        if (this !== __privateGet(this, _root))
          return __privateGet(this, _root).toMMPattern();
        const glob = this.toString();
        const [re, body, hasMagic, uflag] = this.toRegExpSource();
        const anyMagic = hasMagic || __privateGet(this, _hasMagic) || __privateGet(this, _options).nocase && !__privateGet(this, _options).nocaseMagicOnly && glob.toUpperCase() !== glob.toLowerCase();
        if (!anyMagic) {
          return body;
        }
        const flags = (__privateGet(this, _options).nocase ? "i" : "") + (uflag ? "u" : "");
        return Object.assign(new RegExp(`^${re}$`, flags), {
          _src: re,
          _glob: glob
        });
      }
      get options() {
        return __privateGet(this, _options);
      }
      toRegExpSource(allowDot) {
        const dot = allowDot ?? !!__privateGet(this, _options).dot;
        if (__privateGet(this, _root) === this)
          __privateMethod(this, _fillNegs, fillNegs_fn).call(this);
        if (!this.type) {
          const noEmpty = this.isStart() && this.isEnd();
          const src = __privateGet(this, _parts).map((p) => {
            var _a;
            const [re, _, hasMagic, uflag] = typeof p === "string" ? __privateMethod(_a = _AST, _parseGlob, parseGlob_fn).call(_a, p, __privateGet(this, _hasMagic), noEmpty) : p.toRegExpSource(allowDot);
            __privateSet(this, _hasMagic, __privateGet(this, _hasMagic) || hasMagic);
            __privateSet(this, _uflag, __privateGet(this, _uflag) || uflag);
            return re;
          }).join("");
          let start2 = "";
          if (this.isStart()) {
            if (typeof __privateGet(this, _parts)[0] === "string") {
              const dotTravAllowed = __privateGet(this, _parts).length === 1 && justDots.has(__privateGet(this, _parts)[0]);
              if (!dotTravAllowed) {
                const aps = addPatternStart;
                const needNoTrav = dot && aps.has(src.charAt(0)) || src.startsWith("\\.") && aps.has(src.charAt(2)) || src.startsWith("\\.\\.") && aps.has(src.charAt(4));
                const needNoDot = !dot && !allowDot && aps.has(src.charAt(0));
                start2 = needNoTrav ? startNoTraversal : needNoDot ? startNoDot : "";
              }
            }
          }
          let end = "";
          if (this.isEnd() && __privateGet(__privateGet(this, _root), _filledNegs) && __privateGet(this, _parent)?.type === "!") {
            end = "(?:$|\\/)";
          }
          const final2 = start2 + src + end;
          return [
            final2,
            (0, unescape_js_1.unescape)(src),
            __privateSet(this, _hasMagic, !!__privateGet(this, _hasMagic)),
            __privateGet(this, _uflag)
          ];
        }
        const repeated = this.type === "*" || this.type === "+";
        const start = this.type === "!" ? "(?:(?!(?:" : "(?:";
        let body = __privateMethod(this, _partsToRegExp, partsToRegExp_fn).call(this, dot);
        if (this.isStart() && this.isEnd() && !body && this.type !== "!") {
          const s = this.toString();
          __privateSet(this, _parts, [s]);
          this.type = null;
          __privateSet(this, _hasMagic, void 0);
          return [s, (0, unescape_js_1.unescape)(this.toString()), false, false];
        }
        let bodyDotAllowed = !repeated || allowDot || dot || !startNoDot ? "" : __privateMethod(this, _partsToRegExp, partsToRegExp_fn).call(this, true);
        if (bodyDotAllowed === body) {
          bodyDotAllowed = "";
        }
        if (bodyDotAllowed) {
          body = `(?:${body})(?:${bodyDotAllowed})*?`;
        }
        let final = "";
        if (this.type === "!" && __privateGet(this, _emptyExt)) {
          final = (this.isStart() && !dot ? startNoDot : "") + starNoEmpty;
        } else {
          const close = this.type === "!" ? "))" + (this.isStart() && !dot && !allowDot ? startNoDot : "") + star + ")" : this.type === "@" ? ")" : this.type === "?" ? ")?" : this.type === "+" && bodyDotAllowed ? ")" : this.type === "*" && bodyDotAllowed ? `)?` : `)${this.type}`;
          final = start + body + close;
        }
        return [
          final,
          (0, unescape_js_1.unescape)(body),
          __privateSet(this, _hasMagic, !!__privateGet(this, _hasMagic)),
          __privateGet(this, _uflag)
        ];
      }
    };
    var AST = _AST;
    _root = new WeakMap();
    _hasMagic = new WeakMap();
    _uflag = new WeakMap();
    _parts = new WeakMap();
    _parent = new WeakMap();
    _parentIndex = new WeakMap();
    _negs = new WeakMap();
    _filledNegs = new WeakMap();
    _options = new WeakMap();
    _toString = new WeakMap();
    _emptyExt = new WeakMap();
    _fillNegs = new WeakSet();
    fillNegs_fn = function() {
      if (this !== __privateGet(this, _root))
        throw new Error("should only call on root");
      if (__privateGet(this, _filledNegs))
        return this;
      this.toString();
      __privateSet(this, _filledNegs, true);
      let n;
      while (n = __privateGet(this, _negs).pop()) {
        if (n.type !== "!")
          continue;
        let p = n;
        let pp = __privateGet(p, _parent);
        while (pp) {
          for (let i = __privateGet(p, _parentIndex) + 1; !pp.type && i < __privateGet(pp, _parts).length; i++) {
            for (const part of __privateGet(n, _parts)) {
              if (typeof part === "string") {
                throw new Error("string part in extglob AST??");
              }
              part.copyIn(__privateGet(pp, _parts)[i]);
            }
          }
          p = pp;
          pp = __privateGet(p, _parent);
        }
      }
      return this;
    };
    _parseAST = new WeakSet();
    parseAST_fn = function(str, ast, pos, opt) {
      var _a, _b;
      let escaping = false;
      let inBrace = false;
      let braceStart = -1;
      let braceNeg = false;
      if (ast.type === null) {
        let i2 = pos;
        let acc2 = "";
        while (i2 < str.length) {
          const c = str.charAt(i2++);
          if (escaping || c === "\\") {
            escaping = !escaping;
            acc2 += c;
            continue;
          }
          if (inBrace) {
            if (i2 === braceStart + 1) {
              if (c === "^" || c === "!") {
                braceNeg = true;
              }
            } else if (c === "]" && !(i2 === braceStart + 2 && braceNeg)) {
              inBrace = false;
            }
            acc2 += c;
            continue;
          } else if (c === "[") {
            inBrace = true;
            braceStart = i2;
            braceNeg = false;
            acc2 += c;
            continue;
          }
          if (!opt.noext && isExtglobType(c) && str.charAt(i2) === "(") {
            ast.push(acc2);
            acc2 = "";
            const ext = new _AST(c, ast);
            i2 = __privateMethod(_a = _AST, _parseAST, parseAST_fn).call(_a, str, ext, i2, opt);
            ast.push(ext);
            continue;
          }
          acc2 += c;
        }
        ast.push(acc2);
        return i2;
      }
      let i = pos + 1;
      let part = new _AST(null, ast);
      const parts = [];
      let acc = "";
      while (i < str.length) {
        const c = str.charAt(i++);
        if (escaping || c === "\\") {
          escaping = !escaping;
          acc += c;
          continue;
        }
        if (inBrace) {
          if (i === braceStart + 1) {
            if (c === "^" || c === "!") {
              braceNeg = true;
            }
          } else if (c === "]" && !(i === braceStart + 2 && braceNeg)) {
            inBrace = false;
          }
          acc += c;
          continue;
        } else if (c === "[") {
          inBrace = true;
          braceStart = i;
          braceNeg = false;
          acc += c;
          continue;
        }
        if (isExtglobType(c) && str.charAt(i) === "(") {
          part.push(acc);
          acc = "";
          const ext = new _AST(c, part);
          part.push(ext);
          i = __privateMethod(_b = _AST, _parseAST, parseAST_fn).call(_b, str, ext, i, opt);
          continue;
        }
        if (c === "|") {
          part.push(acc);
          acc = "";
          parts.push(part);
          part = new _AST(null, ast);
          continue;
        }
        if (c === ")") {
          if (acc === "" && __privateGet(ast, _parts).length === 0) {
            __privateSet(ast, _emptyExt, true);
          }
          part.push(acc);
          acc = "";
          ast.push(...parts, part);
          return i;
        }
        acc += c;
      }
      ast.type = null;
      __privateSet(ast, _hasMagic, void 0);
      __privateSet(ast, _parts, [str.substring(pos - 1)]);
      return i;
    };
    _partsToRegExp = new WeakSet();
    partsToRegExp_fn = function(dot) {
      return __privateGet(this, _parts).map((p) => {
        if (typeof p === "string") {
          throw new Error("string type in extglob ast??");
        }
        const [re, _, _hasMagic2, uflag] = p.toRegExpSource(dot);
        __privateSet(this, _uflag, __privateGet(this, _uflag) || uflag);
        return re;
      }).filter((p) => !(this.isStart() && this.isEnd()) || !!p).join("|");
    };
    _parseGlob = new WeakSet();
    parseGlob_fn = function(glob, hasMagic, noEmpty = false) {
      let escaping = false;
      let re = "";
      let uflag = false;
      for (let i = 0; i < glob.length; i++) {
        const c = glob.charAt(i);
        if (escaping) {
          escaping = false;
          re += (reSpecials.has(c) ? "\\" : "") + c;
          continue;
        }
        if (c === "\\") {
          if (i === glob.length - 1) {
            re += "\\\\";
          } else {
            escaping = true;
          }
          continue;
        }
        if (c === "[") {
          const [src, needUflag, consumed, magic] = (0, brace_expressions_js_1.parseClass)(glob, i);
          if (consumed) {
            re += src;
            uflag = uflag || needUflag;
            i += consumed - 1;
            hasMagic = hasMagic || magic;
            continue;
          }
        }
        if (c === "*") {
          if (noEmpty && glob === "*")
            re += starNoEmpty;
          else
            re += star;
          hasMagic = true;
          continue;
        }
        if (c === "?") {
          re += qmark;
          hasMagic = true;
          continue;
        }
        re += regExpEscape(c);
      }
      return [re, (0, unescape_js_1.unescape)(glob), !!hasMagic, uflag];
    };
    __privateAdd(AST, _parseAST);
    __privateAdd(AST, _parseGlob);
    exports2.AST = AST;
  }
});

// node_modules/minimatch/dist/commonjs/escape.js
var require_escape = __commonJS({
  "node_modules/minimatch/dist/commonjs/escape.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.escape = void 0;
    var escape = (s, { windowsPathsNoEscape = false } = {}) => {
      return windowsPathsNoEscape ? s.replace(/[?*()[\]]/g, "[$&]") : s.replace(/[?*()[\]\\]/g, "\\$&");
    };
    exports2.escape = escape;
  }
});

// node_modules/minimatch/dist/commonjs/index.js
var require_commonjs = __commonJS({
  "node_modules/minimatch/dist/commonjs/index.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.unescape = exports2.escape = exports2.AST = exports2.Minimatch = exports2.match = exports2.makeRe = exports2.braceExpand = exports2.defaults = exports2.filter = exports2.GLOBSTAR = exports2.sep = exports2.minimatch = void 0;
    var brace_expansion_1 = __importDefault(require_brace_expansion());
    var assert_valid_pattern_js_1 = require_assert_valid_pattern();
    var ast_js_1 = require_ast();
    var escape_js_1 = require_escape();
    var unescape_js_1 = require_unescape();
    var minimatch = (p, pattern, options = {}) => {
      (0, assert_valid_pattern_js_1.assertValidPattern)(pattern);
      if (!options.nocomment && pattern.charAt(0) === "#") {
        return false;
      }
      return new Minimatch(pattern, options).match(p);
    };
    exports2.minimatch = minimatch;
    var starDotExtRE = /^\*+([^+@!?\*\[\(]*)$/;
    var starDotExtTest = (ext2) => (f) => !f.startsWith(".") && f.endsWith(ext2);
    var starDotExtTestDot = (ext2) => (f) => f.endsWith(ext2);
    var starDotExtTestNocase = (ext2) => {
      ext2 = ext2.toLowerCase();
      return (f) => !f.startsWith(".") && f.toLowerCase().endsWith(ext2);
    };
    var starDotExtTestNocaseDot = (ext2) => {
      ext2 = ext2.toLowerCase();
      return (f) => f.toLowerCase().endsWith(ext2);
    };
    var starDotStarRE = /^\*+\.\*+$/;
    var starDotStarTest = (f) => !f.startsWith(".") && f.includes(".");
    var starDotStarTestDot = (f) => f !== "." && f !== ".." && f.includes(".");
    var dotStarRE = /^\.\*+$/;
    var dotStarTest = (f) => f !== "." && f !== ".." && f.startsWith(".");
    var starRE = /^\*+$/;
    var starTest = (f) => f.length !== 0 && !f.startsWith(".");
    var starTestDot = (f) => f.length !== 0 && f !== "." && f !== "..";
    var qmarksRE = /^\?+([^+@!?\*\[\(]*)?$/;
    var qmarksTestNocase = ([$0, ext2 = ""]) => {
      const noext = qmarksTestNoExt([$0]);
      if (!ext2)
        return noext;
      ext2 = ext2.toLowerCase();
      return (f) => noext(f) && f.toLowerCase().endsWith(ext2);
    };
    var qmarksTestNocaseDot = ([$0, ext2 = ""]) => {
      const noext = qmarksTestNoExtDot([$0]);
      if (!ext2)
        return noext;
      ext2 = ext2.toLowerCase();
      return (f) => noext(f) && f.toLowerCase().endsWith(ext2);
    };
    var qmarksTestDot = ([$0, ext2 = ""]) => {
      const noext = qmarksTestNoExtDot([$0]);
      return !ext2 ? noext : (f) => noext(f) && f.endsWith(ext2);
    };
    var qmarksTest = ([$0, ext2 = ""]) => {
      const noext = qmarksTestNoExt([$0]);
      return !ext2 ? noext : (f) => noext(f) && f.endsWith(ext2);
    };
    var qmarksTestNoExt = ([$0]) => {
      const len = $0.length;
      return (f) => f.length === len && !f.startsWith(".");
    };
    var qmarksTestNoExtDot = ([$0]) => {
      const len = $0.length;
      return (f) => f.length === len && f !== "." && f !== "..";
    };
    var defaultPlatform = typeof process === "object" && process ? typeof process.env === "object" && process.env && process.env.__MINIMATCH_TESTING_PLATFORM__ || process.platform : "posix";
    var path = {
      win32: { sep: "\\" },
      posix: { sep: "/" }
    };
    exports2.sep = defaultPlatform === "win32" ? path.win32.sep : path.posix.sep;
    exports2.minimatch.sep = exports2.sep;
    exports2.GLOBSTAR = Symbol("globstar **");
    exports2.minimatch.GLOBSTAR = exports2.GLOBSTAR;
    var qmark = "[^/]";
    var star = qmark + "*?";
    var twoStarDot = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?";
    var twoStarNoDot = "(?:(?!(?:\\/|^)\\.).)*?";
    var filter = (pattern, options = {}) => (p) => (0, exports2.minimatch)(p, pattern, options);
    exports2.filter = filter;
    exports2.minimatch.filter = exports2.filter;
    var ext = (a, b = {}) => Object.assign({}, a, b);
    var defaults = (def) => {
      if (!def || typeof def !== "object" || !Object.keys(def).length) {
        return exports2.minimatch;
      }
      const orig = exports2.minimatch;
      const m = (p, pattern, options = {}) => orig(p, pattern, ext(def, options));
      return Object.assign(m, {
        Minimatch: class Minimatch extends orig.Minimatch {
          constructor(pattern, options = {}) {
            super(pattern, ext(def, options));
          }
          static defaults(options) {
            return orig.defaults(ext(def, options)).Minimatch;
          }
        },
        AST: class AST extends orig.AST {
          constructor(type, parent, options = {}) {
            super(type, parent, ext(def, options));
          }
          static fromGlob(pattern, options = {}) {
            return orig.AST.fromGlob(pattern, ext(def, options));
          }
        },
        unescape: (s, options = {}) => orig.unescape(s, ext(def, options)),
        escape: (s, options = {}) => orig.escape(s, ext(def, options)),
        filter: (pattern, options = {}) => orig.filter(pattern, ext(def, options)),
        defaults: (options) => orig.defaults(ext(def, options)),
        makeRe: (pattern, options = {}) => orig.makeRe(pattern, ext(def, options)),
        braceExpand: (pattern, options = {}) => orig.braceExpand(pattern, ext(def, options)),
        match: (list, pattern, options = {}) => orig.match(list, pattern, ext(def, options)),
        sep: orig.sep,
        GLOBSTAR: exports2.GLOBSTAR
      });
    };
    exports2.defaults = defaults;
    exports2.minimatch.defaults = exports2.defaults;
    var braceExpand = (pattern, options = {}) => {
      (0, assert_valid_pattern_js_1.assertValidPattern)(pattern);
      if (options.nobrace || !/\{(?:(?!\{).)*\}/.test(pattern)) {
        return [pattern];
      }
      return (0, brace_expansion_1.default)(pattern);
    };
    exports2.braceExpand = braceExpand;
    exports2.minimatch.braceExpand = exports2.braceExpand;
    var makeRe = (pattern, options = {}) => new Minimatch(pattern, options).makeRe();
    exports2.makeRe = makeRe;
    exports2.minimatch.makeRe = exports2.makeRe;
    var match = (list, pattern, options = {}) => {
      const mm = new Minimatch(pattern, options);
      list = list.filter((f) => mm.match(f));
      if (mm.options.nonull && !list.length) {
        list.push(pattern);
      }
      return list;
    };
    exports2.match = match;
    exports2.minimatch.match = exports2.match;
    var globMagic = /[?*]|[+@!]\(.*?\)|\[|\]/;
    var regExpEscape = (s) => s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    var Minimatch = class {
      options;
      set;
      pattern;
      windowsPathsNoEscape;
      nonegate;
      negate;
      comment;
      empty;
      preserveMultipleSlashes;
      partial;
      globSet;
      globParts;
      nocase;
      isWindows;
      platform;
      windowsNoMagicRoot;
      regexp;
      constructor(pattern, options = {}) {
        (0, assert_valid_pattern_js_1.assertValidPattern)(pattern);
        options = options || {};
        this.options = options;
        this.pattern = pattern;
        this.platform = options.platform || defaultPlatform;
        this.isWindows = this.platform === "win32";
        this.windowsPathsNoEscape = !!options.windowsPathsNoEscape || options.allowWindowsEscape === false;
        if (this.windowsPathsNoEscape) {
          this.pattern = this.pattern.replace(/\\/g, "/");
        }
        this.preserveMultipleSlashes = !!options.preserveMultipleSlashes;
        this.regexp = null;
        this.negate = false;
        this.nonegate = !!options.nonegate;
        this.comment = false;
        this.empty = false;
        this.partial = !!options.partial;
        this.nocase = !!this.options.nocase;
        this.windowsNoMagicRoot = options.windowsNoMagicRoot !== void 0 ? options.windowsNoMagicRoot : !!(this.isWindows && this.nocase);
        this.globSet = [];
        this.globParts = [];
        this.set = [];
        this.make();
      }
      hasMagic() {
        if (this.options.magicalBraces && this.set.length > 1) {
          return true;
        }
        for (const pattern of this.set) {
          for (const part of pattern) {
            if (typeof part !== "string")
              return true;
          }
        }
        return false;
      }
      debug(..._) {
      }
      make() {
        const pattern = this.pattern;
        const options = this.options;
        if (!options.nocomment && pattern.charAt(0) === "#") {
          this.comment = true;
          return;
        }
        if (!pattern) {
          this.empty = true;
          return;
        }
        this.parseNegate();
        this.globSet = [...new Set(this.braceExpand())];
        if (options.debug) {
          this.debug = (...args) => console.error(...args);
        }
        this.debug(this.pattern, this.globSet);
        const rawGlobParts = this.globSet.map((s) => this.slashSplit(s));
        this.globParts = this.preprocess(rawGlobParts);
        this.debug(this.pattern, this.globParts);
        let set = this.globParts.map((s, _, __) => {
          if (this.isWindows && this.windowsNoMagicRoot) {
            const isUNC = s[0] === "" && s[1] === "" && (s[2] === "?" || !globMagic.test(s[2])) && !globMagic.test(s[3]);
            const isDrive = /^[a-z]:/i.test(s[0]);
            if (isUNC) {
              return [...s.slice(0, 4), ...s.slice(4).map((ss) => this.parse(ss))];
            } else if (isDrive) {
              return [s[0], ...s.slice(1).map((ss) => this.parse(ss))];
            }
          }
          return s.map((ss) => this.parse(ss));
        });
        this.debug(this.pattern, set);
        this.set = set.filter((s) => s.indexOf(false) === -1);
        if (this.isWindows) {
          for (let i = 0; i < this.set.length; i++) {
            const p = this.set[i];
            if (p[0] === "" && p[1] === "" && this.globParts[i][2] === "?" && typeof p[3] === "string" && /^[a-z]:$/i.test(p[3])) {
              p[2] = "?";
            }
          }
        }
        this.debug(this.pattern, this.set);
      }
      preprocess(globParts) {
        if (this.options.noglobstar) {
          for (let i = 0; i < globParts.length; i++) {
            for (let j = 0; j < globParts[i].length; j++) {
              if (globParts[i][j] === "**") {
                globParts[i][j] = "*";
              }
            }
          }
        }
        const { optimizationLevel = 1 } = this.options;
        if (optimizationLevel >= 2) {
          globParts = this.firstPhasePreProcess(globParts);
          globParts = this.secondPhasePreProcess(globParts);
        } else if (optimizationLevel >= 1) {
          globParts = this.levelOneOptimize(globParts);
        } else {
          globParts = this.adjascentGlobstarOptimize(globParts);
        }
        return globParts;
      }
      adjascentGlobstarOptimize(globParts) {
        return globParts.map((parts) => {
          let gs = -1;
          while (-1 !== (gs = parts.indexOf("**", gs + 1))) {
            let i = gs;
            while (parts[i + 1] === "**") {
              i++;
            }
            if (i !== gs) {
              parts.splice(gs, i - gs);
            }
          }
          return parts;
        });
      }
      levelOneOptimize(globParts) {
        return globParts.map((parts) => {
          parts = parts.reduce((set, part) => {
            const prev = set[set.length - 1];
            if (part === "**" && prev === "**") {
              return set;
            }
            if (part === "..") {
              if (prev && prev !== ".." && prev !== "." && prev !== "**") {
                set.pop();
                return set;
              }
            }
            set.push(part);
            return set;
          }, []);
          return parts.length === 0 ? [""] : parts;
        });
      }
      levelTwoFileOptimize(parts) {
        if (!Array.isArray(parts)) {
          parts = this.slashSplit(parts);
        }
        let didSomething = false;
        do {
          didSomething = false;
          if (!this.preserveMultipleSlashes) {
            for (let i = 1; i < parts.length - 1; i++) {
              const p = parts[i];
              if (i === 1 && p === "" && parts[0] === "")
                continue;
              if (p === "." || p === "") {
                didSomething = true;
                parts.splice(i, 1);
                i--;
              }
            }
            if (parts[0] === "." && parts.length === 2 && (parts[1] === "." || parts[1] === "")) {
              didSomething = true;
              parts.pop();
            }
          }
          let dd = 0;
          while (-1 !== (dd = parts.indexOf("..", dd + 1))) {
            const p = parts[dd - 1];
            if (p && p !== "." && p !== ".." && p !== "**") {
              didSomething = true;
              parts.splice(dd - 1, 2);
              dd -= 2;
            }
          }
        } while (didSomething);
        return parts.length === 0 ? [""] : parts;
      }
      firstPhasePreProcess(globParts) {
        let didSomething = false;
        do {
          didSomething = false;
          for (let parts of globParts) {
            let gs = -1;
            while (-1 !== (gs = parts.indexOf("**", gs + 1))) {
              let gss = gs;
              while (parts[gss + 1] === "**") {
                gss++;
              }
              if (gss > gs) {
                parts.splice(gs + 1, gss - gs);
              }
              let next = parts[gs + 1];
              const p = parts[gs + 2];
              const p2 = parts[gs + 3];
              if (next !== "..")
                continue;
              if (!p || p === "." || p === ".." || !p2 || p2 === "." || p2 === "..") {
                continue;
              }
              didSomething = true;
              parts.splice(gs, 1);
              const other = parts.slice(0);
              other[gs] = "**";
              globParts.push(other);
              gs--;
            }
            if (!this.preserveMultipleSlashes) {
              for (let i = 1; i < parts.length - 1; i++) {
                const p = parts[i];
                if (i === 1 && p === "" && parts[0] === "")
                  continue;
                if (p === "." || p === "") {
                  didSomething = true;
                  parts.splice(i, 1);
                  i--;
                }
              }
              if (parts[0] === "." && parts.length === 2 && (parts[1] === "." || parts[1] === "")) {
                didSomething = true;
                parts.pop();
              }
            }
            let dd = 0;
            while (-1 !== (dd = parts.indexOf("..", dd + 1))) {
              const p = parts[dd - 1];
              if (p && p !== "." && p !== ".." && p !== "**") {
                didSomething = true;
                const needDot = dd === 1 && parts[dd + 1] === "**";
                const splin = needDot ? ["."] : [];
                parts.splice(dd - 1, 2, ...splin);
                if (parts.length === 0)
                  parts.push("");
                dd -= 2;
              }
            }
          }
        } while (didSomething);
        return globParts;
      }
      secondPhasePreProcess(globParts) {
        for (let i = 0; i < globParts.length - 1; i++) {
          for (let j = i + 1; j < globParts.length; j++) {
            const matched = this.partsMatch(globParts[i], globParts[j], !this.preserveMultipleSlashes);
            if (!matched)
              continue;
            globParts[i] = matched;
            globParts[j] = [];
          }
        }
        return globParts.filter((gs) => gs.length);
      }
      partsMatch(a, b, emptyGSMatch = false) {
        let ai = 0;
        let bi = 0;
        let result = [];
        let which = "";
        while (ai < a.length && bi < b.length) {
          if (a[ai] === b[bi]) {
            result.push(which === "b" ? b[bi] : a[ai]);
            ai++;
            bi++;
          } else if (emptyGSMatch && a[ai] === "**" && b[bi] === a[ai + 1]) {
            result.push(a[ai]);
            ai++;
          } else if (emptyGSMatch && b[bi] === "**" && a[ai] === b[bi + 1]) {
            result.push(b[bi]);
            bi++;
          } else if (a[ai] === "*" && b[bi] && (this.options.dot || !b[bi].startsWith(".")) && b[bi] !== "**") {
            if (which === "b")
              return false;
            which = "a";
            result.push(a[ai]);
            ai++;
            bi++;
          } else if (b[bi] === "*" && a[ai] && (this.options.dot || !a[ai].startsWith(".")) && a[ai] !== "**") {
            if (which === "a")
              return false;
            which = "b";
            result.push(b[bi]);
            ai++;
            bi++;
          } else {
            return false;
          }
        }
        return a.length === b.length && result;
      }
      parseNegate() {
        if (this.nonegate)
          return;
        const pattern = this.pattern;
        let negate = false;
        let negateOffset = 0;
        for (let i = 0; i < pattern.length && pattern.charAt(i) === "!"; i++) {
          negate = !negate;
          negateOffset++;
        }
        if (negateOffset)
          this.pattern = pattern.slice(negateOffset);
        this.negate = negate;
      }
      matchOne(file, pattern, partial = false) {
        const options = this.options;
        if (this.isWindows) {
          const fileDrive = typeof file[0] === "string" && /^[a-z]:$/i.test(file[0]);
          const fileUNC = !fileDrive && file[0] === "" && file[1] === "" && file[2] === "?" && /^[a-z]:$/i.test(file[3]);
          const patternDrive = typeof pattern[0] === "string" && /^[a-z]:$/i.test(pattern[0]);
          const patternUNC = !patternDrive && pattern[0] === "" && pattern[1] === "" && pattern[2] === "?" && typeof pattern[3] === "string" && /^[a-z]:$/i.test(pattern[3]);
          const fdi = fileUNC ? 3 : fileDrive ? 0 : void 0;
          const pdi = patternUNC ? 3 : patternDrive ? 0 : void 0;
          if (typeof fdi === "number" && typeof pdi === "number") {
            const [fd, pd] = [file[fdi], pattern[pdi]];
            if (fd.toLowerCase() === pd.toLowerCase()) {
              pattern[pdi] = fd;
              if (pdi > fdi) {
                pattern = pattern.slice(pdi);
              } else if (fdi > pdi) {
                file = file.slice(fdi);
              }
            }
          }
        }
        const { optimizationLevel = 1 } = this.options;
        if (optimizationLevel >= 2) {
          file = this.levelTwoFileOptimize(file);
        }
        this.debug("matchOne", this, { file, pattern });
        this.debug("matchOne", file.length, pattern.length);
        for (var fi = 0, pi = 0, fl = file.length, pl = pattern.length; fi < fl && pi < pl; fi++, pi++) {
          this.debug("matchOne loop");
          var p = pattern[pi];
          var f = file[fi];
          this.debug(pattern, p, f);
          if (p === false) {
            return false;
          }
          if (p === exports2.GLOBSTAR) {
            this.debug("GLOBSTAR", [pattern, p, f]);
            var fr = fi;
            var pr = pi + 1;
            if (pr === pl) {
              this.debug("** at the end");
              for (; fi < fl; fi++) {
                if (file[fi] === "." || file[fi] === ".." || !options.dot && file[fi].charAt(0) === ".")
                  return false;
              }
              return true;
            }
            while (fr < fl) {
              var swallowee = file[fr];
              this.debug("\nglobstar while", file, fr, pattern, pr, swallowee);
              if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
                this.debug("globstar found match!", fr, fl, swallowee);
                return true;
              } else {
                if (swallowee === "." || swallowee === ".." || !options.dot && swallowee.charAt(0) === ".") {
                  this.debug("dot detected!", file, fr, pattern, pr);
                  break;
                }
                this.debug("globstar swallow a segment, and continue");
                fr++;
              }
            }
            if (partial) {
              this.debug("\n>>> no match, partial?", file, fr, pattern, pr);
              if (fr === fl) {
                return true;
              }
            }
            return false;
          }
          let hit;
          if (typeof p === "string") {
            hit = f === p;
            this.debug("string match", p, f, hit);
          } else {
            hit = p.test(f);
            this.debug("pattern match", p, f, hit);
          }
          if (!hit)
            return false;
        }
        if (fi === fl && pi === pl) {
          return true;
        } else if (fi === fl) {
          return partial;
        } else if (pi === pl) {
          return fi === fl - 1 && file[fi] === "";
        } else {
          throw new Error("wtf?");
        }
      }
      braceExpand() {
        return (0, exports2.braceExpand)(this.pattern, this.options);
      }
      parse(pattern) {
        (0, assert_valid_pattern_js_1.assertValidPattern)(pattern);
        const options = this.options;
        if (pattern === "**")
          return exports2.GLOBSTAR;
        if (pattern === "")
          return "";
        let m;
        let fastTest = null;
        if (m = pattern.match(starRE)) {
          fastTest = options.dot ? starTestDot : starTest;
        } else if (m = pattern.match(starDotExtRE)) {
          fastTest = (options.nocase ? options.dot ? starDotExtTestNocaseDot : starDotExtTestNocase : options.dot ? starDotExtTestDot : starDotExtTest)(m[1]);
        } else if (m = pattern.match(qmarksRE)) {
          fastTest = (options.nocase ? options.dot ? qmarksTestNocaseDot : qmarksTestNocase : options.dot ? qmarksTestDot : qmarksTest)(m);
        } else if (m = pattern.match(starDotStarRE)) {
          fastTest = options.dot ? starDotStarTestDot : starDotStarTest;
        } else if (m = pattern.match(dotStarRE)) {
          fastTest = dotStarTest;
        }
        const re = ast_js_1.AST.fromGlob(pattern, this.options).toMMPattern();
        if (fastTest && typeof re === "object") {
          Reflect.defineProperty(re, "test", { value: fastTest });
        }
        return re;
      }
      makeRe() {
        if (this.regexp || this.regexp === false)
          return this.regexp;
        const set = this.set;
        if (!set.length) {
          this.regexp = false;
          return this.regexp;
        }
        const options = this.options;
        const twoStar = options.noglobstar ? star : options.dot ? twoStarDot : twoStarNoDot;
        const flags = new Set(options.nocase ? ["i"] : []);
        let re = set.map((pattern) => {
          const pp = pattern.map((p) => {
            if (p instanceof RegExp) {
              for (const f of p.flags.split(""))
                flags.add(f);
            }
            return typeof p === "string" ? regExpEscape(p) : p === exports2.GLOBSTAR ? exports2.GLOBSTAR : p._src;
          });
          pp.forEach((p, i) => {
            const next = pp[i + 1];
            const prev = pp[i - 1];
            if (p !== exports2.GLOBSTAR || prev === exports2.GLOBSTAR) {
              return;
            }
            if (prev === void 0) {
              if (next !== void 0 && next !== exports2.GLOBSTAR) {
                pp[i + 1] = "(?:\\/|" + twoStar + "\\/)?" + next;
              } else {
                pp[i] = twoStar;
              }
            } else if (next === void 0) {
              pp[i - 1] = prev + "(?:\\/|" + twoStar + ")?";
            } else if (next !== exports2.GLOBSTAR) {
              pp[i - 1] = prev + "(?:\\/|\\/" + twoStar + "\\/)" + next;
              pp[i + 1] = exports2.GLOBSTAR;
            }
          });
          return pp.filter((p) => p !== exports2.GLOBSTAR).join("/");
        }).join("|");
        const [open, close] = set.length > 1 ? ["(?:", ")"] : ["", ""];
        re = "^" + open + re + close + "$";
        if (this.negate)
          re = "^(?!" + re + ").+$";
        try {
          this.regexp = new RegExp(re, [...flags].join(""));
        } catch (ex) {
          this.regexp = false;
        }
        return this.regexp;
      }
      slashSplit(p) {
        if (this.preserveMultipleSlashes) {
          return p.split("/");
        } else if (this.isWindows && /^\/\/[^\/]+/.test(p)) {
          return ["", ...p.split(/\/+/)];
        } else {
          return p.split(/\/+/);
        }
      }
      match(f, partial = this.partial) {
        this.debug("match", f, this.pattern);
        if (this.comment) {
          return false;
        }
        if (this.empty) {
          return f === "";
        }
        if (f === "/" && partial) {
          return true;
        }
        const options = this.options;
        if (this.isWindows) {
          f = f.split("\\").join("/");
        }
        const ff = this.slashSplit(f);
        this.debug(this.pattern, "split", ff);
        const set = this.set;
        this.debug(this.pattern, "set", set);
        let filename = ff[ff.length - 1];
        if (!filename) {
          for (let i = ff.length - 2; !filename && i >= 0; i--) {
            filename = ff[i];
          }
        }
        for (let i = 0; i < set.length; i++) {
          const pattern = set[i];
          let file = ff;
          if (options.matchBase && pattern.length === 1) {
            file = [filename];
          }
          const hit = this.matchOne(file, pattern, partial);
          if (hit) {
            if (options.flipNegate) {
              return true;
            }
            return !this.negate;
          }
        }
        if (options.flipNegate) {
          return false;
        }
        return this.negate;
      }
      static defaults(def) {
        return exports2.minimatch.defaults(def).Minimatch;
      }
    };
    exports2.Minimatch = Minimatch;
    var ast_js_2 = require_ast();
    Object.defineProperty(exports2, "AST", { enumerable: true, get: function() {
      return ast_js_2.AST;
    } });
    var escape_js_2 = require_escape();
    Object.defineProperty(exports2, "escape", { enumerable: true, get: function() {
      return escape_js_2.escape;
    } });
    var unescape_js_2 = require_unescape();
    Object.defineProperty(exports2, "unescape", { enumerable: true, get: function() {
      return unescape_js_2.unescape;
    } });
    exports2.minimatch.AST = ast_js_1.AST;
    exports2.minimatch.Minimatch = Minimatch;
    exports2.minimatch.escape = escape_js_1.escape;
    exports2.minimatch.unescape = unescape_js_1.unescape;
  }
});

// node_modules/path-scurry/node_modules/lru-cache/dist/commonjs/index.js
var require_commonjs2 = __commonJS({
  "node_modules/path-scurry/node_modules/lru-cache/dist/commonjs/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.LRUCache = void 0;
    var perf = typeof performance === "object" && performance && typeof performance.now === "function" ? performance : Date;
    var warned = /* @__PURE__ */ new Set();
    var PROCESS = typeof process === "object" && !!process ? process : {};
    var emitWarning = (msg, type, code, fn) => {
      typeof PROCESS.emitWarning === "function" ? PROCESS.emitWarning(msg, type, code, fn) : console.error(`[${code}] ${type}: ${msg}`);
    };
    var AC = globalThis.AbortController;
    var AS = globalThis.AbortSignal;
    if (typeof AC === "undefined") {
      AS = class AbortSignal {
        onabort;
        _onabort = [];
        reason;
        aborted = false;
        addEventListener(_, fn) {
          this._onabort.push(fn);
        }
      };
      AC = class AbortController {
        constructor() {
          warnACPolyfill();
        }
        signal = new AS();
        abort(reason) {
          if (this.signal.aborted)
            return;
          this.signal.reason = reason;
          this.signal.aborted = true;
          for (const fn of this.signal._onabort) {
            fn(reason);
          }
          this.signal.onabort?.(reason);
        }
      };
      let printACPolyfillWarning = PROCESS.env?.LRU_CACHE_IGNORE_AC_WARNING !== "1";
      const warnACPolyfill = () => {
        if (!printACPolyfillWarning)
          return;
        printACPolyfillWarning = false;
        emitWarning("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", warnACPolyfill);
      };
    }
    var shouldWarn = (code) => !warned.has(code);
    var TYPE = Symbol("type");
    var isPosInt = (n) => n && n === Math.floor(n) && n > 0 && isFinite(n);
    var getUintArray = (max) => !isPosInt(max) ? null : max <= Math.pow(2, 8) ? Uint8Array : max <= Math.pow(2, 16) ? Uint16Array : max <= Math.pow(2, 32) ? Uint32Array : max <= Number.MAX_SAFE_INTEGER ? ZeroArray : null;
    var ZeroArray = class extends Array {
      constructor(size) {
        super(size);
        this.fill(0);
      }
    };
    var _constructing;
    var _Stack = class {
      heap;
      length;
      static create(max) {
        const HeapCls = getUintArray(max);
        if (!HeapCls)
          return [];
        __privateSet(_Stack, _constructing, true);
        const s = new _Stack(max, HeapCls);
        __privateSet(_Stack, _constructing, false);
        return s;
      }
      constructor(max, HeapCls) {
        if (!__privateGet(_Stack, _constructing)) {
          throw new TypeError("instantiate Stack using Stack.create(n)");
        }
        this.heap = new HeapCls(max);
        this.length = 0;
      }
      push(n) {
        this.heap[this.length++] = n;
      }
      pop() {
        return this.heap[--this.length];
      }
    };
    var Stack = _Stack;
    _constructing = new WeakMap();
    __privateAdd(Stack, _constructing, false);
    var LRUCache = class {
      #max;
      #maxSize;
      #dispose;
      #disposeAfter;
      #fetchMethod;
      ttl;
      ttlResolution;
      ttlAutopurge;
      updateAgeOnGet;
      updateAgeOnHas;
      allowStale;
      noDisposeOnSet;
      noUpdateTTL;
      maxEntrySize;
      sizeCalculation;
      noDeleteOnFetchRejection;
      noDeleteOnStaleGet;
      allowStaleOnFetchAbort;
      allowStaleOnFetchRejection;
      ignoreFetchAbort;
      #size;
      #calculatedSize;
      #keyMap;
      #keyList;
      #valList;
      #next;
      #prev;
      #head;
      #tail;
      #free;
      #disposed;
      #sizes;
      #starts;
      #ttls;
      #hasDispose;
      #hasFetchMethod;
      #hasDisposeAfter;
      static unsafeExposeInternals(c) {
        return {
          starts: c.#starts,
          ttls: c.#ttls,
          sizes: c.#sizes,
          keyMap: c.#keyMap,
          keyList: c.#keyList,
          valList: c.#valList,
          next: c.#next,
          prev: c.#prev,
          get head() {
            return c.#head;
          },
          get tail() {
            return c.#tail;
          },
          free: c.#free,
          isBackgroundFetch: (p) => c.#isBackgroundFetch(p),
          backgroundFetch: (k, index, options, context) => c.#backgroundFetch(k, index, options, context),
          moveToTail: (index) => c.#moveToTail(index),
          indexes: (options) => c.#indexes(options),
          rindexes: (options) => c.#rindexes(options),
          isStale: (index) => c.#isStale(index)
        };
      }
      get max() {
        return this.#max;
      }
      get maxSize() {
        return this.#maxSize;
      }
      get calculatedSize() {
        return this.#calculatedSize;
      }
      get size() {
        return this.#size;
      }
      get fetchMethod() {
        return this.#fetchMethod;
      }
      get dispose() {
        return this.#dispose;
      }
      get disposeAfter() {
        return this.#disposeAfter;
      }
      constructor(options) {
        const { max = 0, ttl, ttlResolution = 1, ttlAutopurge, updateAgeOnGet, updateAgeOnHas, allowStale, dispose, disposeAfter, noDisposeOnSet, noUpdateTTL, maxSize = 0, maxEntrySize = 0, sizeCalculation, fetchMethod, noDeleteOnFetchRejection, noDeleteOnStaleGet, allowStaleOnFetchRejection, allowStaleOnFetchAbort, ignoreFetchAbort } = options;
        if (max !== 0 && !isPosInt(max)) {
          throw new TypeError("max option must be a nonnegative integer");
        }
        const UintArray = max ? getUintArray(max) : Array;
        if (!UintArray) {
          throw new Error("invalid max value: " + max);
        }
        this.#max = max;
        this.#maxSize = maxSize;
        this.maxEntrySize = maxEntrySize || this.#maxSize;
        this.sizeCalculation = sizeCalculation;
        if (this.sizeCalculation) {
          if (!this.#maxSize && !this.maxEntrySize) {
            throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
          }
          if (typeof this.sizeCalculation !== "function") {
            throw new TypeError("sizeCalculation set to non-function");
          }
        }
        if (fetchMethod !== void 0 && typeof fetchMethod !== "function") {
          throw new TypeError("fetchMethod must be a function if specified");
        }
        this.#fetchMethod = fetchMethod;
        this.#hasFetchMethod = !!fetchMethod;
        this.#keyMap = /* @__PURE__ */ new Map();
        this.#keyList = new Array(max).fill(void 0);
        this.#valList = new Array(max).fill(void 0);
        this.#next = new UintArray(max);
        this.#prev = new UintArray(max);
        this.#head = 0;
        this.#tail = 0;
        this.#free = Stack.create(max);
        this.#size = 0;
        this.#calculatedSize = 0;
        if (typeof dispose === "function") {
          this.#dispose = dispose;
        }
        if (typeof disposeAfter === "function") {
          this.#disposeAfter = disposeAfter;
          this.#disposed = [];
        } else {
          this.#disposeAfter = void 0;
          this.#disposed = void 0;
        }
        this.#hasDispose = !!this.#dispose;
        this.#hasDisposeAfter = !!this.#disposeAfter;
        this.noDisposeOnSet = !!noDisposeOnSet;
        this.noUpdateTTL = !!noUpdateTTL;
        this.noDeleteOnFetchRejection = !!noDeleteOnFetchRejection;
        this.allowStaleOnFetchRejection = !!allowStaleOnFetchRejection;
        this.allowStaleOnFetchAbort = !!allowStaleOnFetchAbort;
        this.ignoreFetchAbort = !!ignoreFetchAbort;
        if (this.maxEntrySize !== 0) {
          if (this.#maxSize !== 0) {
            if (!isPosInt(this.#maxSize)) {
              throw new TypeError("maxSize must be a positive integer if specified");
            }
          }
          if (!isPosInt(this.maxEntrySize)) {
            throw new TypeError("maxEntrySize must be a positive integer if specified");
          }
          this.#initializeSizeTracking();
        }
        this.allowStale = !!allowStale;
        this.noDeleteOnStaleGet = !!noDeleteOnStaleGet;
        this.updateAgeOnGet = !!updateAgeOnGet;
        this.updateAgeOnHas = !!updateAgeOnHas;
        this.ttlResolution = isPosInt(ttlResolution) || ttlResolution === 0 ? ttlResolution : 1;
        this.ttlAutopurge = !!ttlAutopurge;
        this.ttl = ttl || 0;
        if (this.ttl) {
          if (!isPosInt(this.ttl)) {
            throw new TypeError("ttl must be a positive integer if specified");
          }
          this.#initializeTTLTracking();
        }
        if (this.#max === 0 && this.ttl === 0 && this.#maxSize === 0) {
          throw new TypeError("At least one of max, maxSize, or ttl is required");
        }
        if (!this.ttlAutopurge && !this.#max && !this.#maxSize) {
          const code = "LRU_CACHE_UNBOUNDED";
          if (shouldWarn(code)) {
            warned.add(code);
            const msg = "TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.";
            emitWarning(msg, "UnboundedCacheWarning", code, LRUCache);
          }
        }
      }
      getRemainingTTL(key) {
        return this.#keyMap.has(key) ? Infinity : 0;
      }
      #initializeTTLTracking() {
        const ttls = new ZeroArray(this.#max);
        const starts = new ZeroArray(this.#max);
        this.#ttls = ttls;
        this.#starts = starts;
        this.#setItemTTL = (index, ttl, start = perf.now()) => {
          starts[index] = ttl !== 0 ? start : 0;
          ttls[index] = ttl;
          if (ttl !== 0 && this.ttlAutopurge) {
            const t = setTimeout(() => {
              if (this.#isStale(index)) {
                this.delete(this.#keyList[index]);
              }
            }, ttl + 1);
            if (t.unref) {
              t.unref();
            }
          }
        };
        this.#updateItemAge = (index) => {
          starts[index] = ttls[index] !== 0 ? perf.now() : 0;
        };
        this.#statusTTL = (status, index) => {
          if (ttls[index]) {
            const ttl = ttls[index];
            const start = starts[index];
            if (!ttl || !start)
              return;
            status.ttl = ttl;
            status.start = start;
            status.now = cachedNow || getNow();
            const age = status.now - start;
            status.remainingTTL = ttl - age;
          }
        };
        let cachedNow = 0;
        const getNow = () => {
          const n = perf.now();
          if (this.ttlResolution > 0) {
            cachedNow = n;
            const t = setTimeout(() => cachedNow = 0, this.ttlResolution);
            if (t.unref) {
              t.unref();
            }
          }
          return n;
        };
        this.getRemainingTTL = (key) => {
          const index = this.#keyMap.get(key);
          if (index === void 0) {
            return 0;
          }
          const ttl = ttls[index];
          const start = starts[index];
          if (!ttl || !start) {
            return Infinity;
          }
          const age = (cachedNow || getNow()) - start;
          return ttl - age;
        };
        this.#isStale = (index) => {
          const s = starts[index];
          const t = ttls[index];
          return !!t && !!s && (cachedNow || getNow()) - s > t;
        };
      }
      #updateItemAge = () => {
      };
      #statusTTL = () => {
      };
      #setItemTTL = () => {
      };
      #isStale = () => false;
      #initializeSizeTracking() {
        const sizes = new ZeroArray(this.#max);
        this.#calculatedSize = 0;
        this.#sizes = sizes;
        this.#removeItemSize = (index) => {
          this.#calculatedSize -= sizes[index];
          sizes[index] = 0;
        };
        this.#requireSize = (k, v, size, sizeCalculation) => {
          if (this.#isBackgroundFetch(v)) {
            return 0;
          }
          if (!isPosInt(size)) {
            if (sizeCalculation) {
              if (typeof sizeCalculation !== "function") {
                throw new TypeError("sizeCalculation must be a function");
              }
              size = sizeCalculation(v, k);
              if (!isPosInt(size)) {
                throw new TypeError("sizeCalculation return invalid (expect positive integer)");
              }
            } else {
              throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
            }
          }
          return size;
        };
        this.#addItemSize = (index, size, status) => {
          sizes[index] = size;
          if (this.#maxSize) {
            const maxSize = this.#maxSize - sizes[index];
            while (this.#calculatedSize > maxSize) {
              this.#evict(true);
            }
          }
          this.#calculatedSize += sizes[index];
          if (status) {
            status.entrySize = size;
            status.totalCalculatedSize = this.#calculatedSize;
          }
        };
      }
      #removeItemSize = (_i) => {
      };
      #addItemSize = (_i, _s, _st) => {
      };
      #requireSize = (_k, _v, size, sizeCalculation) => {
        if (size || sizeCalculation) {
          throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
        }
        return 0;
      };
      *#indexes({ allowStale = this.allowStale } = {}) {
        if (this.#size) {
          for (let i = this.#tail; true; ) {
            if (!this.#isValidIndex(i)) {
              break;
            }
            if (allowStale || !this.#isStale(i)) {
              yield i;
            }
            if (i === this.#head) {
              break;
            } else {
              i = this.#prev[i];
            }
          }
        }
      }
      *#rindexes({ allowStale = this.allowStale } = {}) {
        if (this.#size) {
          for (let i = this.#head; true; ) {
            if (!this.#isValidIndex(i)) {
              break;
            }
            if (allowStale || !this.#isStale(i)) {
              yield i;
            }
            if (i === this.#tail) {
              break;
            } else {
              i = this.#next[i];
            }
          }
        }
      }
      #isValidIndex(index) {
        return index !== void 0 && this.#keyMap.get(this.#keyList[index]) === index;
      }
      *entries() {
        for (const i of this.#indexes()) {
          if (this.#valList[i] !== void 0 && this.#keyList[i] !== void 0 && !this.#isBackgroundFetch(this.#valList[i])) {
            yield [this.#keyList[i], this.#valList[i]];
          }
        }
      }
      *rentries() {
        for (const i of this.#rindexes()) {
          if (this.#valList[i] !== void 0 && this.#keyList[i] !== void 0 && !this.#isBackgroundFetch(this.#valList[i])) {
            yield [this.#keyList[i], this.#valList[i]];
          }
        }
      }
      *keys() {
        for (const i of this.#indexes()) {
          const k = this.#keyList[i];
          if (k !== void 0 && !this.#isBackgroundFetch(this.#valList[i])) {
            yield k;
          }
        }
      }
      *rkeys() {
        for (const i of this.#rindexes()) {
          const k = this.#keyList[i];
          if (k !== void 0 && !this.#isBackgroundFetch(this.#valList[i])) {
            yield k;
          }
        }
      }
      *values() {
        for (const i of this.#indexes()) {
          const v = this.#valList[i];
          if (v !== void 0 && !this.#isBackgroundFetch(this.#valList[i])) {
            yield this.#valList[i];
          }
        }
      }
      *rvalues() {
        for (const i of this.#rindexes()) {
          const v = this.#valList[i];
          if (v !== void 0 && !this.#isBackgroundFetch(this.#valList[i])) {
            yield this.#valList[i];
          }
        }
      }
      [Symbol.iterator]() {
        return this.entries();
      }
      [Symbol.toStringTag] = "LRUCache";
      find(fn, getOptions = {}) {
        for (const i of this.#indexes()) {
          const v = this.#valList[i];
          const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
          if (value === void 0)
            continue;
          if (fn(value, this.#keyList[i], this)) {
            return this.get(this.#keyList[i], getOptions);
          }
        }
      }
      forEach(fn, thisp = this) {
        for (const i of this.#indexes()) {
          const v = this.#valList[i];
          const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
          if (value === void 0)
            continue;
          fn.call(thisp, value, this.#keyList[i], this);
        }
      }
      rforEach(fn, thisp = this) {
        for (const i of this.#rindexes()) {
          const v = this.#valList[i];
          const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
          if (value === void 0)
            continue;
          fn.call(thisp, value, this.#keyList[i], this);
        }
      }
      purgeStale() {
        let deleted = false;
        for (const i of this.#rindexes({ allowStale: true })) {
          if (this.#isStale(i)) {
            this.delete(this.#keyList[i]);
            deleted = true;
          }
        }
        return deleted;
      }
      info(key) {
        const i = this.#keyMap.get(key);
        if (i === void 0)
          return void 0;
        const v = this.#valList[i];
        const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
        if (value === void 0)
          return void 0;
        const entry = { value };
        if (this.#ttls && this.#starts) {
          const ttl = this.#ttls[i];
          const start = this.#starts[i];
          if (ttl && start) {
            const remain = ttl - (perf.now() - start);
            entry.ttl = remain;
            entry.start = Date.now();
          }
        }
        if (this.#sizes) {
          entry.size = this.#sizes[i];
        }
        return entry;
      }
      dump() {
        const arr = [];
        for (const i of this.#indexes({ allowStale: true })) {
          const key = this.#keyList[i];
          const v = this.#valList[i];
          const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
          if (value === void 0 || key === void 0)
            continue;
          const entry = { value };
          if (this.#ttls && this.#starts) {
            entry.ttl = this.#ttls[i];
            const age = perf.now() - this.#starts[i];
            entry.start = Math.floor(Date.now() - age);
          }
          if (this.#sizes) {
            entry.size = this.#sizes[i];
          }
          arr.unshift([key, entry]);
        }
        return arr;
      }
      load(arr) {
        this.clear();
        for (const [key, entry] of arr) {
          if (entry.start) {
            const age = Date.now() - entry.start;
            entry.start = perf.now() - age;
          }
          this.set(key, entry.value, entry);
        }
      }
      set(k, v, setOptions = {}) {
        if (v === void 0) {
          this.delete(k);
          return this;
        }
        const { ttl = this.ttl, start, noDisposeOnSet = this.noDisposeOnSet, sizeCalculation = this.sizeCalculation, status } = setOptions;
        let { noUpdateTTL = this.noUpdateTTL } = setOptions;
        const size = this.#requireSize(k, v, setOptions.size || 0, sizeCalculation);
        if (this.maxEntrySize && size > this.maxEntrySize) {
          if (status) {
            status.set = "miss";
            status.maxEntrySizeExceeded = true;
          }
          this.delete(k);
          return this;
        }
        let index = this.#size === 0 ? void 0 : this.#keyMap.get(k);
        if (index === void 0) {
          index = this.#size === 0 ? this.#tail : this.#free.length !== 0 ? this.#free.pop() : this.#size === this.#max ? this.#evict(false) : this.#size;
          this.#keyList[index] = k;
          this.#valList[index] = v;
          this.#keyMap.set(k, index);
          this.#next[this.#tail] = index;
          this.#prev[index] = this.#tail;
          this.#tail = index;
          this.#size++;
          this.#addItemSize(index, size, status);
          if (status)
            status.set = "add";
          noUpdateTTL = false;
        } else {
          this.#moveToTail(index);
          const oldVal = this.#valList[index];
          if (v !== oldVal) {
            if (this.#hasFetchMethod && this.#isBackgroundFetch(oldVal)) {
              oldVal.__abortController.abort(new Error("replaced"));
              const { __staleWhileFetching: s } = oldVal;
              if (s !== void 0 && !noDisposeOnSet) {
                if (this.#hasDispose) {
                  this.#dispose?.(s, k, "set");
                }
                if (this.#hasDisposeAfter) {
                  this.#disposed?.push([s, k, "set"]);
                }
              }
            } else if (!noDisposeOnSet) {
              if (this.#hasDispose) {
                this.#dispose?.(oldVal, k, "set");
              }
              if (this.#hasDisposeAfter) {
                this.#disposed?.push([oldVal, k, "set"]);
              }
            }
            this.#removeItemSize(index);
            this.#addItemSize(index, size, status);
            this.#valList[index] = v;
            if (status) {
              status.set = "replace";
              const oldValue = oldVal && this.#isBackgroundFetch(oldVal) ? oldVal.__staleWhileFetching : oldVal;
              if (oldValue !== void 0)
                status.oldValue = oldValue;
            }
          } else if (status) {
            status.set = "update";
          }
        }
        if (ttl !== 0 && !this.#ttls) {
          this.#initializeTTLTracking();
        }
        if (this.#ttls) {
          if (!noUpdateTTL) {
            this.#setItemTTL(index, ttl, start);
          }
          if (status)
            this.#statusTTL(status, index);
        }
        if (!noDisposeOnSet && this.#hasDisposeAfter && this.#disposed) {
          const dt = this.#disposed;
          let task;
          while (task = dt?.shift()) {
            this.#disposeAfter?.(...task);
          }
        }
        return this;
      }
      pop() {
        try {
          while (this.#size) {
            const val = this.#valList[this.#head];
            this.#evict(true);
            if (this.#isBackgroundFetch(val)) {
              if (val.__staleWhileFetching) {
                return val.__staleWhileFetching;
              }
            } else if (val !== void 0) {
              return val;
            }
          }
        } finally {
          if (this.#hasDisposeAfter && this.#disposed) {
            const dt = this.#disposed;
            let task;
            while (task = dt?.shift()) {
              this.#disposeAfter?.(...task);
            }
          }
        }
      }
      #evict(free) {
        const head = this.#head;
        const k = this.#keyList[head];
        const v = this.#valList[head];
        if (this.#hasFetchMethod && this.#isBackgroundFetch(v)) {
          v.__abortController.abort(new Error("evicted"));
        } else if (this.#hasDispose || this.#hasDisposeAfter) {
          if (this.#hasDispose) {
            this.#dispose?.(v, k, "evict");
          }
          if (this.#hasDisposeAfter) {
            this.#disposed?.push([v, k, "evict"]);
          }
        }
        this.#removeItemSize(head);
        if (free) {
          this.#keyList[head] = void 0;
          this.#valList[head] = void 0;
          this.#free.push(head);
        }
        if (this.#size === 1) {
          this.#head = this.#tail = 0;
          this.#free.length = 0;
        } else {
          this.#head = this.#next[head];
        }
        this.#keyMap.delete(k);
        this.#size--;
        return head;
      }
      has(k, hasOptions = {}) {
        const { updateAgeOnHas = this.updateAgeOnHas, status } = hasOptions;
        const index = this.#keyMap.get(k);
        if (index !== void 0) {
          const v = this.#valList[index];
          if (this.#isBackgroundFetch(v) && v.__staleWhileFetching === void 0) {
            return false;
          }
          if (!this.#isStale(index)) {
            if (updateAgeOnHas) {
              this.#updateItemAge(index);
            }
            if (status) {
              status.has = "hit";
              this.#statusTTL(status, index);
            }
            return true;
          } else if (status) {
            status.has = "stale";
            this.#statusTTL(status, index);
          }
        } else if (status) {
          status.has = "miss";
        }
        return false;
      }
      peek(k, peekOptions = {}) {
        const { allowStale = this.allowStale } = peekOptions;
        const index = this.#keyMap.get(k);
        if (index === void 0 || !allowStale && this.#isStale(index)) {
          return;
        }
        const v = this.#valList[index];
        return this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
      }
      #backgroundFetch(k, index, options, context) {
        const v = index === void 0 ? void 0 : this.#valList[index];
        if (this.#isBackgroundFetch(v)) {
          return v;
        }
        const ac = new AC();
        const { signal } = options;
        signal?.addEventListener("abort", () => ac.abort(signal.reason), {
          signal: ac.signal
        });
        const fetchOpts = {
          signal: ac.signal,
          options,
          context
        };
        const cb = (v2, updateCache = false) => {
          const { aborted } = ac.signal;
          const ignoreAbort = options.ignoreFetchAbort && v2 !== void 0;
          if (options.status) {
            if (aborted && !updateCache) {
              options.status.fetchAborted = true;
              options.status.fetchError = ac.signal.reason;
              if (ignoreAbort)
                options.status.fetchAbortIgnored = true;
            } else {
              options.status.fetchResolved = true;
            }
          }
          if (aborted && !ignoreAbort && !updateCache) {
            return fetchFail(ac.signal.reason);
          }
          const bf2 = p;
          if (this.#valList[index] === p) {
            if (v2 === void 0) {
              if (bf2.__staleWhileFetching) {
                this.#valList[index] = bf2.__staleWhileFetching;
              } else {
                this.delete(k);
              }
            } else {
              if (options.status)
                options.status.fetchUpdated = true;
              this.set(k, v2, fetchOpts.options);
            }
          }
          return v2;
        };
        const eb = (er) => {
          if (options.status) {
            options.status.fetchRejected = true;
            options.status.fetchError = er;
          }
          return fetchFail(er);
        };
        const fetchFail = (er) => {
          const { aborted } = ac.signal;
          const allowStaleAborted = aborted && options.allowStaleOnFetchAbort;
          const allowStale = allowStaleAborted || options.allowStaleOnFetchRejection;
          const noDelete = allowStale || options.noDeleteOnFetchRejection;
          const bf2 = p;
          if (this.#valList[index] === p) {
            const del = !noDelete || bf2.__staleWhileFetching === void 0;
            if (del) {
              this.delete(k);
            } else if (!allowStaleAborted) {
              this.#valList[index] = bf2.__staleWhileFetching;
            }
          }
          if (allowStale) {
            if (options.status && bf2.__staleWhileFetching !== void 0) {
              options.status.returnedStale = true;
            }
            return bf2.__staleWhileFetching;
          } else if (bf2.__returned === bf2) {
            throw er;
          }
        };
        const pcall = (res, rej) => {
          const fmp = this.#fetchMethod?.(k, v, fetchOpts);
          if (fmp && fmp instanceof Promise) {
            fmp.then((v2) => res(v2 === void 0 ? void 0 : v2), rej);
          }
          ac.signal.addEventListener("abort", () => {
            if (!options.ignoreFetchAbort || options.allowStaleOnFetchAbort) {
              res(void 0);
              if (options.allowStaleOnFetchAbort) {
                res = (v2) => cb(v2, true);
              }
            }
          });
        };
        if (options.status)
          options.status.fetchDispatched = true;
        const p = new Promise(pcall).then(cb, eb);
        const bf = Object.assign(p, {
          __abortController: ac,
          __staleWhileFetching: v,
          __returned: void 0
        });
        if (index === void 0) {
          this.set(k, bf, { ...fetchOpts.options, status: void 0 });
          index = this.#keyMap.get(k);
        } else {
          this.#valList[index] = bf;
        }
        return bf;
      }
      #isBackgroundFetch(p) {
        if (!this.#hasFetchMethod)
          return false;
        const b = p;
        return !!b && b instanceof Promise && b.hasOwnProperty("__staleWhileFetching") && b.__abortController instanceof AC;
      }
      async fetch(k, fetchOptions = {}) {
        const {
          allowStale = this.allowStale,
          updateAgeOnGet = this.updateAgeOnGet,
          noDeleteOnStaleGet = this.noDeleteOnStaleGet,
          ttl = this.ttl,
          noDisposeOnSet = this.noDisposeOnSet,
          size = 0,
          sizeCalculation = this.sizeCalculation,
          noUpdateTTL = this.noUpdateTTL,
          noDeleteOnFetchRejection = this.noDeleteOnFetchRejection,
          allowStaleOnFetchRejection = this.allowStaleOnFetchRejection,
          ignoreFetchAbort = this.ignoreFetchAbort,
          allowStaleOnFetchAbort = this.allowStaleOnFetchAbort,
          context,
          forceRefresh = false,
          status,
          signal
        } = fetchOptions;
        if (!this.#hasFetchMethod) {
          if (status)
            status.fetch = "get";
          return this.get(k, {
            allowStale,
            updateAgeOnGet,
            noDeleteOnStaleGet,
            status
          });
        }
        const options = {
          allowStale,
          updateAgeOnGet,
          noDeleteOnStaleGet,
          ttl,
          noDisposeOnSet,
          size,
          sizeCalculation,
          noUpdateTTL,
          noDeleteOnFetchRejection,
          allowStaleOnFetchRejection,
          allowStaleOnFetchAbort,
          ignoreFetchAbort,
          status,
          signal
        };
        let index = this.#keyMap.get(k);
        if (index === void 0) {
          if (status)
            status.fetch = "miss";
          const p = this.#backgroundFetch(k, index, options, context);
          return p.__returned = p;
        } else {
          const v = this.#valList[index];
          if (this.#isBackgroundFetch(v)) {
            const stale = allowStale && v.__staleWhileFetching !== void 0;
            if (status) {
              status.fetch = "inflight";
              if (stale)
                status.returnedStale = true;
            }
            return stale ? v.__staleWhileFetching : v.__returned = v;
          }
          const isStale = this.#isStale(index);
          if (!forceRefresh && !isStale) {
            if (status)
              status.fetch = "hit";
            this.#moveToTail(index);
            if (updateAgeOnGet) {
              this.#updateItemAge(index);
            }
            if (status)
              this.#statusTTL(status, index);
            return v;
          }
          const p = this.#backgroundFetch(k, index, options, context);
          const hasStale = p.__staleWhileFetching !== void 0;
          const staleVal = hasStale && allowStale;
          if (status) {
            status.fetch = isStale ? "stale" : "refresh";
            if (staleVal && isStale)
              status.returnedStale = true;
          }
          return staleVal ? p.__staleWhileFetching : p.__returned = p;
        }
      }
      get(k, getOptions = {}) {
        const { allowStale = this.allowStale, updateAgeOnGet = this.updateAgeOnGet, noDeleteOnStaleGet = this.noDeleteOnStaleGet, status } = getOptions;
        const index = this.#keyMap.get(k);
        if (index !== void 0) {
          const value = this.#valList[index];
          const fetching = this.#isBackgroundFetch(value);
          if (status)
            this.#statusTTL(status, index);
          if (this.#isStale(index)) {
            if (status)
              status.get = "stale";
            if (!fetching) {
              if (!noDeleteOnStaleGet) {
                this.delete(k);
              }
              if (status && allowStale)
                status.returnedStale = true;
              return allowStale ? value : void 0;
            } else {
              if (status && allowStale && value.__staleWhileFetching !== void 0) {
                status.returnedStale = true;
              }
              return allowStale ? value.__staleWhileFetching : void 0;
            }
          } else {
            if (status)
              status.get = "hit";
            if (fetching) {
              return value.__staleWhileFetching;
            }
            this.#moveToTail(index);
            if (updateAgeOnGet) {
              this.#updateItemAge(index);
            }
            return value;
          }
        } else if (status) {
          status.get = "miss";
        }
      }
      #connect(p, n) {
        this.#prev[n] = p;
        this.#next[p] = n;
      }
      #moveToTail(index) {
        if (index !== this.#tail) {
          if (index === this.#head) {
            this.#head = this.#next[index];
          } else {
            this.#connect(this.#prev[index], this.#next[index]);
          }
          this.#connect(this.#tail, index);
          this.#tail = index;
        }
      }
      delete(k) {
        let deleted = false;
        if (this.#size !== 0) {
          const index = this.#keyMap.get(k);
          if (index !== void 0) {
            deleted = true;
            if (this.#size === 1) {
              this.clear();
            } else {
              this.#removeItemSize(index);
              const v = this.#valList[index];
              if (this.#isBackgroundFetch(v)) {
                v.__abortController.abort(new Error("deleted"));
              } else if (this.#hasDispose || this.#hasDisposeAfter) {
                if (this.#hasDispose) {
                  this.#dispose?.(v, k, "delete");
                }
                if (this.#hasDisposeAfter) {
                  this.#disposed?.push([v, k, "delete"]);
                }
              }
              this.#keyMap.delete(k);
              this.#keyList[index] = void 0;
              this.#valList[index] = void 0;
              if (index === this.#tail) {
                this.#tail = this.#prev[index];
              } else if (index === this.#head) {
                this.#head = this.#next[index];
              } else {
                const pi = this.#prev[index];
                this.#next[pi] = this.#next[index];
                const ni = this.#next[index];
                this.#prev[ni] = this.#prev[index];
              }
              this.#size--;
              this.#free.push(index);
            }
          }
        }
        if (this.#hasDisposeAfter && this.#disposed?.length) {
          const dt = this.#disposed;
          let task;
          while (task = dt?.shift()) {
            this.#disposeAfter?.(...task);
          }
        }
        return deleted;
      }
      clear() {
        for (const index of this.#rindexes({ allowStale: true })) {
          const v = this.#valList[index];
          if (this.#isBackgroundFetch(v)) {
            v.__abortController.abort(new Error("deleted"));
          } else {
            const k = this.#keyList[index];
            if (this.#hasDispose) {
              this.#dispose?.(v, k, "delete");
            }
            if (this.#hasDisposeAfter) {
              this.#disposed?.push([v, k, "delete"]);
            }
          }
        }
        this.#keyMap.clear();
        this.#valList.fill(void 0);
        this.#keyList.fill(void 0);
        if (this.#ttls && this.#starts) {
          this.#ttls.fill(0);
          this.#starts.fill(0);
        }
        if (this.#sizes) {
          this.#sizes.fill(0);
        }
        this.#head = 0;
        this.#tail = 0;
        this.#free.length = 0;
        this.#calculatedSize = 0;
        this.#size = 0;
        if (this.#hasDisposeAfter && this.#disposed) {
          const dt = this.#disposed;
          let task;
          while (task = dt?.shift()) {
            this.#disposeAfter?.(...task);
          }
        }
      }
    };
    exports2.LRUCache = LRUCache;
  }
});

// node_modules/minipass/dist/commonjs/index.js
var require_commonjs3 = __commonJS({
  "node_modules/minipass/dist/commonjs/index.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Minipass = exports2.isWritable = exports2.isReadable = exports2.isStream = void 0;
    var proc = typeof process === "object" && process ? process : {
      stdout: null,
      stderr: null
    };
    var events_1 = require("events");
    var stream_1 = __importDefault(require("stream"));
    var string_decoder_1 = require("string_decoder");
    var isStream = (s) => !!s && typeof s === "object" && (s instanceof Minipass || s instanceof stream_1.default || (0, exports2.isReadable)(s) || (0, exports2.isWritable)(s));
    exports2.isStream = isStream;
    var isReadable = (s) => !!s && typeof s === "object" && s instanceof events_1.EventEmitter && typeof s.pipe === "function" && s.pipe !== stream_1.default.Writable.prototype.pipe;
    exports2.isReadable = isReadable;
    var isWritable = (s) => !!s && typeof s === "object" && s instanceof events_1.EventEmitter && typeof s.write === "function" && typeof s.end === "function";
    exports2.isWritable = isWritable;
    var EOF = Symbol("EOF");
    var MAYBE_EMIT_END = Symbol("maybeEmitEnd");
    var EMITTED_END = Symbol("emittedEnd");
    var EMITTING_END = Symbol("emittingEnd");
    var EMITTED_ERROR = Symbol("emittedError");
    var CLOSED = Symbol("closed");
    var READ = Symbol("read");
    var FLUSH = Symbol("flush");
    var FLUSHCHUNK = Symbol("flushChunk");
    var ENCODING = Symbol("encoding");
    var DECODER = Symbol("decoder");
    var FLOWING = Symbol("flowing");
    var PAUSED = Symbol("paused");
    var RESUME = Symbol("resume");
    var BUFFER = Symbol("buffer");
    var PIPES = Symbol("pipes");
    var BUFFERLENGTH = Symbol("bufferLength");
    var BUFFERPUSH = Symbol("bufferPush");
    var BUFFERSHIFT = Symbol("bufferShift");
    var OBJECTMODE = Symbol("objectMode");
    var DESTROYED = Symbol("destroyed");
    var ERROR = Symbol("error");
    var EMITDATA = Symbol("emitData");
    var EMITEND = Symbol("emitEnd");
    var EMITEND2 = Symbol("emitEnd2");
    var ASYNC = Symbol("async");
    var ABORT = Symbol("abort");
    var ABORTED = Symbol("aborted");
    var SIGNAL = Symbol("signal");
    var DATALISTENERS = Symbol("dataListeners");
    var DISCARDED = Symbol("discarded");
    var defer = (fn) => Promise.resolve().then(fn);
    var nodefer = (fn) => fn();
    var isEndish = (ev) => ev === "end" || ev === "finish" || ev === "prefinish";
    var isArrayBufferLike = (b) => b instanceof ArrayBuffer || !!b && typeof b === "object" && b.constructor && b.constructor.name === "ArrayBuffer" && b.byteLength >= 0;
    var isArrayBufferView = (b) => !Buffer.isBuffer(b) && ArrayBuffer.isView(b);
    var Pipe = class {
      src;
      dest;
      opts;
      ondrain;
      constructor(src, dest, opts) {
        this.src = src;
        this.dest = dest;
        this.opts = opts;
        this.ondrain = () => src[RESUME]();
        this.dest.on("drain", this.ondrain);
      }
      unpipe() {
        this.dest.removeListener("drain", this.ondrain);
      }
      proxyErrors(_er) {
      }
      end() {
        this.unpipe();
        if (this.opts.end)
          this.dest.end();
      }
    };
    var PipeProxyErrors = class extends Pipe {
      unpipe() {
        this.src.removeListener("error", this.proxyErrors);
        super.unpipe();
      }
      constructor(src, dest, opts) {
        super(src, dest, opts);
        this.proxyErrors = (er) => dest.emit("error", er);
        src.on("error", this.proxyErrors);
      }
    };
    var isObjectModeOptions = (o) => !!o.objectMode;
    var isEncodingOptions = (o) => !o.objectMode && !!o.encoding && o.encoding !== "buffer";
    var Minipass = class extends events_1.EventEmitter {
      [FLOWING] = false;
      [PAUSED] = false;
      [PIPES] = [];
      [BUFFER] = [];
      [OBJECTMODE];
      [ENCODING];
      [ASYNC];
      [DECODER];
      [EOF] = false;
      [EMITTED_END] = false;
      [EMITTING_END] = false;
      [CLOSED] = false;
      [EMITTED_ERROR] = null;
      [BUFFERLENGTH] = 0;
      [DESTROYED] = false;
      [SIGNAL];
      [ABORTED] = false;
      [DATALISTENERS] = 0;
      [DISCARDED] = false;
      writable = true;
      readable = true;
      constructor(...args) {
        const options = args[0] || {};
        super();
        if (options.objectMode && typeof options.encoding === "string") {
          throw new TypeError("Encoding and objectMode may not be used together");
        }
        if (isObjectModeOptions(options)) {
          this[OBJECTMODE] = true;
          this[ENCODING] = null;
        } else if (isEncodingOptions(options)) {
          this[ENCODING] = options.encoding;
          this[OBJECTMODE] = false;
        } else {
          this[OBJECTMODE] = false;
          this[ENCODING] = null;
        }
        this[ASYNC] = !!options.async;
        this[DECODER] = this[ENCODING] ? new string_decoder_1.StringDecoder(this[ENCODING]) : null;
        if (options && options.debugExposeBuffer === true) {
          Object.defineProperty(this, "buffer", { get: () => this[BUFFER] });
        }
        if (options && options.debugExposePipes === true) {
          Object.defineProperty(this, "pipes", { get: () => this[PIPES] });
        }
        const { signal } = options;
        if (signal) {
          this[SIGNAL] = signal;
          if (signal.aborted) {
            this[ABORT]();
          } else {
            signal.addEventListener("abort", () => this[ABORT]());
          }
        }
      }
      get bufferLength() {
        return this[BUFFERLENGTH];
      }
      get encoding() {
        return this[ENCODING];
      }
      set encoding(_enc) {
        throw new Error("Encoding must be set at instantiation time");
      }
      setEncoding(_enc) {
        throw new Error("Encoding must be set at instantiation time");
      }
      get objectMode() {
        return this[OBJECTMODE];
      }
      set objectMode(_om) {
        throw new Error("objectMode must be set at instantiation time");
      }
      get ["async"]() {
        return this[ASYNC];
      }
      set ["async"](a) {
        this[ASYNC] = this[ASYNC] || !!a;
      }
      [ABORT]() {
        this[ABORTED] = true;
        this.emit("abort", this[SIGNAL]?.reason);
        this.destroy(this[SIGNAL]?.reason);
      }
      get aborted() {
        return this[ABORTED];
      }
      set aborted(_) {
      }
      write(chunk, encoding, cb) {
        if (this[ABORTED])
          return false;
        if (this[EOF])
          throw new Error("write after end");
        if (this[DESTROYED]) {
          this.emit("error", Object.assign(new Error("Cannot call write after a stream was destroyed"), { code: "ERR_STREAM_DESTROYED" }));
          return true;
        }
        if (typeof encoding === "function") {
          cb = encoding;
          encoding = "utf8";
        }
        if (!encoding)
          encoding = "utf8";
        const fn = this[ASYNC] ? defer : nodefer;
        if (!this[OBJECTMODE] && !Buffer.isBuffer(chunk)) {
          if (isArrayBufferView(chunk)) {
            chunk = Buffer.from(chunk.buffer, chunk.byteOffset, chunk.byteLength);
          } else if (isArrayBufferLike(chunk)) {
            chunk = Buffer.from(chunk);
          } else if (typeof chunk !== "string") {
            throw new Error("Non-contiguous data written to non-objectMode stream");
          }
        }
        if (this[OBJECTMODE]) {
          if (this[FLOWING] && this[BUFFERLENGTH] !== 0)
            this[FLUSH](true);
          if (this[FLOWING])
            this.emit("data", chunk);
          else
            this[BUFFERPUSH](chunk);
          if (this[BUFFERLENGTH] !== 0)
            this.emit("readable");
          if (cb)
            fn(cb);
          return this[FLOWING];
        }
        if (!chunk.length) {
          if (this[BUFFERLENGTH] !== 0)
            this.emit("readable");
          if (cb)
            fn(cb);
          return this[FLOWING];
        }
        if (typeof chunk === "string" && !(encoding === this[ENCODING] && !this[DECODER]?.lastNeed)) {
          chunk = Buffer.from(chunk, encoding);
        }
        if (Buffer.isBuffer(chunk) && this[ENCODING]) {
          chunk = this[DECODER].write(chunk);
        }
        if (this[FLOWING] && this[BUFFERLENGTH] !== 0)
          this[FLUSH](true);
        if (this[FLOWING])
          this.emit("data", chunk);
        else
          this[BUFFERPUSH](chunk);
        if (this[BUFFERLENGTH] !== 0)
          this.emit("readable");
        if (cb)
          fn(cb);
        return this[FLOWING];
      }
      read(n) {
        if (this[DESTROYED])
          return null;
        this[DISCARDED] = false;
        if (this[BUFFERLENGTH] === 0 || n === 0 || n && n > this[BUFFERLENGTH]) {
          this[MAYBE_EMIT_END]();
          return null;
        }
        if (this[OBJECTMODE])
          n = null;
        if (this[BUFFER].length > 1 && !this[OBJECTMODE]) {
          this[BUFFER] = [
            this[ENCODING] ? this[BUFFER].join("") : Buffer.concat(this[BUFFER], this[BUFFERLENGTH])
          ];
        }
        const ret = this[READ](n || null, this[BUFFER][0]);
        this[MAYBE_EMIT_END]();
        return ret;
      }
      [READ](n, chunk) {
        if (this[OBJECTMODE])
          this[BUFFERSHIFT]();
        else {
          const c = chunk;
          if (n === c.length || n === null)
            this[BUFFERSHIFT]();
          else if (typeof c === "string") {
            this[BUFFER][0] = c.slice(n);
            chunk = c.slice(0, n);
            this[BUFFERLENGTH] -= n;
          } else {
            this[BUFFER][0] = c.subarray(n);
            chunk = c.subarray(0, n);
            this[BUFFERLENGTH] -= n;
          }
        }
        this.emit("data", chunk);
        if (!this[BUFFER].length && !this[EOF])
          this.emit("drain");
        return chunk;
      }
      end(chunk, encoding, cb) {
        if (typeof chunk === "function") {
          cb = chunk;
          chunk = void 0;
        }
        if (typeof encoding === "function") {
          cb = encoding;
          encoding = "utf8";
        }
        if (chunk !== void 0)
          this.write(chunk, encoding);
        if (cb)
          this.once("end", cb);
        this[EOF] = true;
        this.writable = false;
        if (this[FLOWING] || !this[PAUSED])
          this[MAYBE_EMIT_END]();
        return this;
      }
      [RESUME]() {
        if (this[DESTROYED])
          return;
        if (!this[DATALISTENERS] && !this[PIPES].length) {
          this[DISCARDED] = true;
        }
        this[PAUSED] = false;
        this[FLOWING] = true;
        this.emit("resume");
        if (this[BUFFER].length)
          this[FLUSH]();
        else if (this[EOF])
          this[MAYBE_EMIT_END]();
        else
          this.emit("drain");
      }
      resume() {
        return this[RESUME]();
      }
      pause() {
        this[FLOWING] = false;
        this[PAUSED] = true;
        this[DISCARDED] = false;
      }
      get destroyed() {
        return this[DESTROYED];
      }
      get flowing() {
        return this[FLOWING];
      }
      get paused() {
        return this[PAUSED];
      }
      [BUFFERPUSH](chunk) {
        if (this[OBJECTMODE])
          this[BUFFERLENGTH] += 1;
        else
          this[BUFFERLENGTH] += chunk.length;
        this[BUFFER].push(chunk);
      }
      [BUFFERSHIFT]() {
        if (this[OBJECTMODE])
          this[BUFFERLENGTH] -= 1;
        else
          this[BUFFERLENGTH] -= this[BUFFER][0].length;
        return this[BUFFER].shift();
      }
      [FLUSH](noDrain = false) {
        do {
        } while (this[FLUSHCHUNK](this[BUFFERSHIFT]()) && this[BUFFER].length);
        if (!noDrain && !this[BUFFER].length && !this[EOF])
          this.emit("drain");
      }
      [FLUSHCHUNK](chunk) {
        this.emit("data", chunk);
        return this[FLOWING];
      }
      pipe(dest, opts) {
        if (this[DESTROYED])
          return dest;
        this[DISCARDED] = false;
        const ended = this[EMITTED_END];
        opts = opts || {};
        if (dest === proc.stdout || dest === proc.stderr)
          opts.end = false;
        else
          opts.end = opts.end !== false;
        opts.proxyErrors = !!opts.proxyErrors;
        if (ended) {
          if (opts.end)
            dest.end();
        } else {
          this[PIPES].push(!opts.proxyErrors ? new Pipe(this, dest, opts) : new PipeProxyErrors(this, dest, opts));
          if (this[ASYNC])
            defer(() => this[RESUME]());
          else
            this[RESUME]();
        }
        return dest;
      }
      unpipe(dest) {
        const p = this[PIPES].find((p2) => p2.dest === dest);
        if (p) {
          if (this[PIPES].length === 1) {
            if (this[FLOWING] && this[DATALISTENERS] === 0) {
              this[FLOWING] = false;
            }
            this[PIPES] = [];
          } else
            this[PIPES].splice(this[PIPES].indexOf(p), 1);
          p.unpipe();
        }
      }
      addListener(ev, handler) {
        return this.on(ev, handler);
      }
      on(ev, handler) {
        const ret = super.on(ev, handler);
        if (ev === "data") {
          this[DISCARDED] = false;
          this[DATALISTENERS]++;
          if (!this[PIPES].length && !this[FLOWING]) {
            this[RESUME]();
          }
        } else if (ev === "readable" && this[BUFFERLENGTH] !== 0) {
          super.emit("readable");
        } else if (isEndish(ev) && this[EMITTED_END]) {
          super.emit(ev);
          this.removeAllListeners(ev);
        } else if (ev === "error" && this[EMITTED_ERROR]) {
          const h = handler;
          if (this[ASYNC])
            defer(() => h.call(this, this[EMITTED_ERROR]));
          else
            h.call(this, this[EMITTED_ERROR]);
        }
        return ret;
      }
      removeListener(ev, handler) {
        return this.off(ev, handler);
      }
      off(ev, handler) {
        const ret = super.off(ev, handler);
        if (ev === "data") {
          this[DATALISTENERS] = this.listeners("data").length;
          if (this[DATALISTENERS] === 0 && !this[DISCARDED] && !this[PIPES].length) {
            this[FLOWING] = false;
          }
        }
        return ret;
      }
      removeAllListeners(ev) {
        const ret = super.removeAllListeners(ev);
        if (ev === "data" || ev === void 0) {
          this[DATALISTENERS] = 0;
          if (!this[DISCARDED] && !this[PIPES].length) {
            this[FLOWING] = false;
          }
        }
        return ret;
      }
      get emittedEnd() {
        return this[EMITTED_END];
      }
      [MAYBE_EMIT_END]() {
        if (!this[EMITTING_END] && !this[EMITTED_END] && !this[DESTROYED] && this[BUFFER].length === 0 && this[EOF]) {
          this[EMITTING_END] = true;
          this.emit("end");
          this.emit("prefinish");
          this.emit("finish");
          if (this[CLOSED])
            this.emit("close");
          this[EMITTING_END] = false;
        }
      }
      emit(ev, ...args) {
        const data = args[0];
        if (ev !== "error" && ev !== "close" && ev !== DESTROYED && this[DESTROYED]) {
          return false;
        } else if (ev === "data") {
          return !this[OBJECTMODE] && !data ? false : this[ASYNC] ? (defer(() => this[EMITDATA](data)), true) : this[EMITDATA](data);
        } else if (ev === "end") {
          return this[EMITEND]();
        } else if (ev === "close") {
          this[CLOSED] = true;
          if (!this[EMITTED_END] && !this[DESTROYED])
            return false;
          const ret2 = super.emit("close");
          this.removeAllListeners("close");
          return ret2;
        } else if (ev === "error") {
          this[EMITTED_ERROR] = data;
          super.emit(ERROR, data);
          const ret2 = !this[SIGNAL] || this.listeners("error").length ? super.emit("error", data) : false;
          this[MAYBE_EMIT_END]();
          return ret2;
        } else if (ev === "resume") {
          const ret2 = super.emit("resume");
          this[MAYBE_EMIT_END]();
          return ret2;
        } else if (ev === "finish" || ev === "prefinish") {
          const ret2 = super.emit(ev);
          this.removeAllListeners(ev);
          return ret2;
        }
        const ret = super.emit(ev, ...args);
        this[MAYBE_EMIT_END]();
        return ret;
      }
      [EMITDATA](data) {
        for (const p of this[PIPES]) {
          if (p.dest.write(data) === false)
            this.pause();
        }
        const ret = this[DISCARDED] ? false : super.emit("data", data);
        this[MAYBE_EMIT_END]();
        return ret;
      }
      [EMITEND]() {
        if (this[EMITTED_END])
          return false;
        this[EMITTED_END] = true;
        this.readable = false;
        return this[ASYNC] ? (defer(() => this[EMITEND2]()), true) : this[EMITEND2]();
      }
      [EMITEND2]() {
        if (this[DECODER]) {
          const data = this[DECODER].end();
          if (data) {
            for (const p of this[PIPES]) {
              p.dest.write(data);
            }
            if (!this[DISCARDED])
              super.emit("data", data);
          }
        }
        for (const p of this[PIPES]) {
          p.end();
        }
        const ret = super.emit("end");
        this.removeAllListeners("end");
        return ret;
      }
      async collect() {
        const buf = Object.assign([], {
          dataLength: 0
        });
        if (!this[OBJECTMODE])
          buf.dataLength = 0;
        const p = this.promise();
        this.on("data", (c) => {
          buf.push(c);
          if (!this[OBJECTMODE])
            buf.dataLength += c.length;
        });
        await p;
        return buf;
      }
      async concat() {
        if (this[OBJECTMODE]) {
          throw new Error("cannot concat in objectMode");
        }
        const buf = await this.collect();
        return this[ENCODING] ? buf.join("") : Buffer.concat(buf, buf.dataLength);
      }
      async promise() {
        return new Promise((resolve, reject) => {
          this.on(DESTROYED, () => reject(new Error("stream destroyed")));
          this.on("error", (er) => reject(er));
          this.on("end", () => resolve());
        });
      }
      [Symbol.asyncIterator]() {
        this[DISCARDED] = false;
        let stopped = false;
        const stop = async () => {
          this.pause();
          stopped = true;
          return { value: void 0, done: true };
        };
        const next = () => {
          if (stopped)
            return stop();
          const res = this.read();
          if (res !== null)
            return Promise.resolve({ done: false, value: res });
          if (this[EOF])
            return stop();
          let resolve;
          let reject;
          const onerr = (er) => {
            this.off("data", ondata);
            this.off("end", onend);
            this.off(DESTROYED, ondestroy);
            stop();
            reject(er);
          };
          const ondata = (value) => {
            this.off("error", onerr);
            this.off("end", onend);
            this.off(DESTROYED, ondestroy);
            this.pause();
            resolve({ value, done: !!this[EOF] });
          };
          const onend = () => {
            this.off("error", onerr);
            this.off("data", ondata);
            this.off(DESTROYED, ondestroy);
            stop();
            resolve({ done: true, value: void 0 });
          };
          const ondestroy = () => onerr(new Error("stream destroyed"));
          return new Promise((res2, rej) => {
            reject = rej;
            resolve = res2;
            this.once(DESTROYED, ondestroy);
            this.once("error", onerr);
            this.once("end", onend);
            this.once("data", ondata);
          });
        };
        return {
          next,
          throw: stop,
          return: stop,
          [Symbol.asyncIterator]() {
            return this;
          }
        };
      }
      [Symbol.iterator]() {
        this[DISCARDED] = false;
        let stopped = false;
        const stop = () => {
          this.pause();
          this.off(ERROR, stop);
          this.off(DESTROYED, stop);
          this.off("end", stop);
          stopped = true;
          return { done: true, value: void 0 };
        };
        const next = () => {
          if (stopped)
            return stop();
          const value = this.read();
          return value === null ? stop() : { done: false, value };
        };
        this.once("end", stop);
        this.once(ERROR, stop);
        this.once(DESTROYED, stop);
        return {
          next,
          throw: stop,
          return: stop,
          [Symbol.iterator]() {
            return this;
          }
        };
      }
      destroy(er) {
        if (this[DESTROYED]) {
          if (er)
            this.emit("error", er);
          else
            this.emit(DESTROYED);
          return this;
        }
        this[DESTROYED] = true;
        this[DISCARDED] = true;
        this[BUFFER].length = 0;
        this[BUFFERLENGTH] = 0;
        const wc = this;
        if (typeof wc.close === "function" && !this[CLOSED])
          wc.close();
        if (er)
          this.emit("error", er);
        else
          this.emit(DESTROYED);
        return this;
      }
      static get isStream() {
        return exports2.isStream;
      }
    };
    exports2.Minipass = Minipass;
  }
});

// node_modules/path-scurry/dist/commonjs/index.js
var require_commonjs4 = __commonJS({
  "node_modules/path-scurry/dist/commonjs/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.PathScurry = exports2.Path = exports2.PathScurryDarwin = exports2.PathScurryPosix = exports2.PathScurryWin32 = exports2.PathScurryBase = exports2.PathPosix = exports2.PathWin32 = exports2.PathBase = exports2.ChildrenCache = exports2.ResolveCache = void 0;
    var lru_cache_1 = require_commonjs2();
    var path_1 = require("path");
    var url_1 = require("url");
    var actualFS = __importStar(require("fs"));
    var fs_1 = require("fs");
    var realpathSync = fs_1.realpathSync.native;
    var promises_1 = require("fs/promises");
    var minipass_1 = require_commonjs3();
    var defaultFS = {
      lstatSync: fs_1.lstatSync,
      readdir: fs_1.readdir,
      readdirSync: fs_1.readdirSync,
      readlinkSync: fs_1.readlinkSync,
      realpathSync,
      promises: {
        lstat: promises_1.lstat,
        readdir: promises_1.readdir,
        readlink: promises_1.readlink,
        realpath: promises_1.realpath
      }
    };
    var fsFromOption = (fsOption) => !fsOption || fsOption === defaultFS || fsOption === actualFS ? defaultFS : {
      ...defaultFS,
      ...fsOption,
      promises: {
        ...defaultFS.promises,
        ...fsOption.promises || {}
      }
    };
    var uncDriveRegexp = /^\\\\\?\\([a-z]:)\\?$/i;
    var uncToDrive = (rootPath) => rootPath.replace(/\//g, "\\").replace(uncDriveRegexp, "$1\\");
    var eitherSep = /[\\\/]/;
    var UNKNOWN = 0;
    var IFIFO = 1;
    var IFCHR = 2;
    var IFDIR = 4;
    var IFBLK = 6;
    var IFREG = 8;
    var IFLNK = 10;
    var IFSOCK = 12;
    var IFMT = 15;
    var IFMT_UNKNOWN = ~IFMT;
    var READDIR_CALLED = 16;
    var LSTAT_CALLED = 32;
    var ENOTDIR = 64;
    var ENOENT = 128;
    var ENOREADLINK = 256;
    var ENOREALPATH = 512;
    var ENOCHILD = ENOTDIR | ENOENT | ENOREALPATH;
    var TYPEMASK = 1023;
    var entToType = (s) => s.isFile() ? IFREG : s.isDirectory() ? IFDIR : s.isSymbolicLink() ? IFLNK : s.isCharacterDevice() ? IFCHR : s.isBlockDevice() ? IFBLK : s.isSocket() ? IFSOCK : s.isFIFO() ? IFIFO : UNKNOWN;
    var normalizeCache = /* @__PURE__ */ new Map();
    var normalize = (s) => {
      const c = normalizeCache.get(s);
      if (c)
        return c;
      const n = s.normalize("NFKD");
      normalizeCache.set(s, n);
      return n;
    };
    var normalizeNocaseCache = /* @__PURE__ */ new Map();
    var normalizeNocase = (s) => {
      const c = normalizeNocaseCache.get(s);
      if (c)
        return c;
      const n = normalize(s.toLowerCase());
      normalizeNocaseCache.set(s, n);
      return n;
    };
    var ResolveCache = class extends lru_cache_1.LRUCache {
      constructor() {
        super({ max: 256 });
      }
    };
    exports2.ResolveCache = ResolveCache;
    var ChildrenCache = class extends lru_cache_1.LRUCache {
      constructor(maxSize = 16 * 1024) {
        super({
          maxSize,
          sizeCalculation: (a) => a.length + 1
        });
      }
    };
    exports2.ChildrenCache = ChildrenCache;
    var setAsCwd = Symbol("PathScurry setAsCwd");
    var PathBase = class {
      name;
      root;
      roots;
      parent;
      nocase;
      #fs;
      #dev;
      get dev() {
        return this.#dev;
      }
      #mode;
      get mode() {
        return this.#mode;
      }
      #nlink;
      get nlink() {
        return this.#nlink;
      }
      #uid;
      get uid() {
        return this.#uid;
      }
      #gid;
      get gid() {
        return this.#gid;
      }
      #rdev;
      get rdev() {
        return this.#rdev;
      }
      #blksize;
      get blksize() {
        return this.#blksize;
      }
      #ino;
      get ino() {
        return this.#ino;
      }
      #size;
      get size() {
        return this.#size;
      }
      #blocks;
      get blocks() {
        return this.#blocks;
      }
      #atimeMs;
      get atimeMs() {
        return this.#atimeMs;
      }
      #mtimeMs;
      get mtimeMs() {
        return this.#mtimeMs;
      }
      #ctimeMs;
      get ctimeMs() {
        return this.#ctimeMs;
      }
      #birthtimeMs;
      get birthtimeMs() {
        return this.#birthtimeMs;
      }
      #atime;
      get atime() {
        return this.#atime;
      }
      #mtime;
      get mtime() {
        return this.#mtime;
      }
      #ctime;
      get ctime() {
        return this.#ctime;
      }
      #birthtime;
      get birthtime() {
        return this.#birthtime;
      }
      #matchName;
      #depth;
      #fullpath;
      #fullpathPosix;
      #relative;
      #relativePosix;
      #type;
      #children;
      #linkTarget;
      #realpath;
      get path() {
        return (this.parent || this).fullpath();
      }
      constructor(name, type = UNKNOWN, root, roots, nocase, children, opts) {
        this.name = name;
        this.#matchName = nocase ? normalizeNocase(name) : normalize(name);
        this.#type = type & TYPEMASK;
        this.nocase = nocase;
        this.roots = roots;
        this.root = root || this;
        this.#children = children;
        this.#fullpath = opts.fullpath;
        this.#relative = opts.relative;
        this.#relativePosix = opts.relativePosix;
        this.parent = opts.parent;
        if (this.parent) {
          this.#fs = this.parent.#fs;
        } else {
          this.#fs = fsFromOption(opts.fs);
        }
      }
      depth() {
        if (this.#depth !== void 0)
          return this.#depth;
        if (!this.parent)
          return this.#depth = 0;
        return this.#depth = this.parent.depth() + 1;
      }
      childrenCache() {
        return this.#children;
      }
      resolve(path) {
        if (!path) {
          return this;
        }
        const rootPath = this.getRootString(path);
        const dir = path.substring(rootPath.length);
        const dirParts = dir.split(this.splitSep);
        const result = rootPath ? this.getRoot(rootPath).#resolveParts(dirParts) : this.#resolveParts(dirParts);
        return result;
      }
      #resolveParts(dirParts) {
        let p = this;
        for (const part of dirParts) {
          p = p.child(part);
        }
        return p;
      }
      children() {
        const cached = this.#children.get(this);
        if (cached) {
          return cached;
        }
        const children = Object.assign([], { provisional: 0 });
        this.#children.set(this, children);
        this.#type &= ~READDIR_CALLED;
        return children;
      }
      child(pathPart, opts) {
        if (pathPart === "" || pathPart === ".") {
          return this;
        }
        if (pathPart === "..") {
          return this.parent || this;
        }
        const children = this.children();
        const name = this.nocase ? normalizeNocase(pathPart) : normalize(pathPart);
        for (const p of children) {
          if (p.#matchName === name) {
            return p;
          }
        }
        const s = this.parent ? this.sep : "";
        const fullpath = this.#fullpath ? this.#fullpath + s + pathPart : void 0;
        const pchild = this.newChild(pathPart, UNKNOWN, {
          ...opts,
          parent: this,
          fullpath
        });
        if (!this.canReaddir()) {
          pchild.#type |= ENOENT;
        }
        children.push(pchild);
        return pchild;
      }
      relative() {
        if (this.#relative !== void 0) {
          return this.#relative;
        }
        const name = this.name;
        const p = this.parent;
        if (!p) {
          return this.#relative = this.name;
        }
        const pv = p.relative();
        return pv + (!pv || !p.parent ? "" : this.sep) + name;
      }
      relativePosix() {
        if (this.sep === "/")
          return this.relative();
        if (this.#relativePosix !== void 0)
          return this.#relativePosix;
        const name = this.name;
        const p = this.parent;
        if (!p) {
          return this.#relativePosix = this.fullpathPosix();
        }
        const pv = p.relativePosix();
        return pv + (!pv || !p.parent ? "" : "/") + name;
      }
      fullpath() {
        if (this.#fullpath !== void 0) {
          return this.#fullpath;
        }
        const name = this.name;
        const p = this.parent;
        if (!p) {
          return this.#fullpath = this.name;
        }
        const pv = p.fullpath();
        const fp = pv + (!p.parent ? "" : this.sep) + name;
        return this.#fullpath = fp;
      }
      fullpathPosix() {
        if (this.#fullpathPosix !== void 0)
          return this.#fullpathPosix;
        if (this.sep === "/")
          return this.#fullpathPosix = this.fullpath();
        if (!this.parent) {
          const p2 = this.fullpath().replace(/\\/g, "/");
          if (/^[a-z]:\//i.test(p2)) {
            return this.#fullpathPosix = `//?/${p2}`;
          } else {
            return this.#fullpathPosix = p2;
          }
        }
        const p = this.parent;
        const pfpp = p.fullpathPosix();
        const fpp = pfpp + (!pfpp || !p.parent ? "" : "/") + this.name;
        return this.#fullpathPosix = fpp;
      }
      isUnknown() {
        return (this.#type & IFMT) === UNKNOWN;
      }
      isType(type) {
        return this[`is${type}`]();
      }
      getType() {
        return this.isUnknown() ? "Unknown" : this.isDirectory() ? "Directory" : this.isFile() ? "File" : this.isSymbolicLink() ? "SymbolicLink" : this.isFIFO() ? "FIFO" : this.isCharacterDevice() ? "CharacterDevice" : this.isBlockDevice() ? "BlockDevice" : this.isSocket() ? "Socket" : "Unknown";
      }
      isFile() {
        return (this.#type & IFMT) === IFREG;
      }
      isDirectory() {
        return (this.#type & IFMT) === IFDIR;
      }
      isCharacterDevice() {
        return (this.#type & IFMT) === IFCHR;
      }
      isBlockDevice() {
        return (this.#type & IFMT) === IFBLK;
      }
      isFIFO() {
        return (this.#type & IFMT) === IFIFO;
      }
      isSocket() {
        return (this.#type & IFMT) === IFSOCK;
      }
      isSymbolicLink() {
        return (this.#type & IFLNK) === IFLNK;
      }
      lstatCached() {
        return this.#type & LSTAT_CALLED ? this : void 0;
      }
      readlinkCached() {
        return this.#linkTarget;
      }
      realpathCached() {
        return this.#realpath;
      }
      readdirCached() {
        const children = this.children();
        return children.slice(0, children.provisional);
      }
      canReadlink() {
        if (this.#linkTarget)
          return true;
        if (!this.parent)
          return false;
        const ifmt = this.#type & IFMT;
        return !(ifmt !== UNKNOWN && ifmt !== IFLNK || this.#type & ENOREADLINK || this.#type & ENOENT);
      }
      calledReaddir() {
        return !!(this.#type & READDIR_CALLED);
      }
      isENOENT() {
        return !!(this.#type & ENOENT);
      }
      isNamed(n) {
        return !this.nocase ? this.#matchName === normalize(n) : this.#matchName === normalizeNocase(n);
      }
      async readlink() {
        const target = this.#linkTarget;
        if (target) {
          return target;
        }
        if (!this.canReadlink()) {
          return void 0;
        }
        if (!this.parent) {
          return void 0;
        }
        try {
          const read = await this.#fs.promises.readlink(this.fullpath());
          const linkTarget = (await this.parent.realpath())?.resolve(read);
          if (linkTarget) {
            return this.#linkTarget = linkTarget;
          }
        } catch (er) {
          this.#readlinkFail(er.code);
          return void 0;
        }
      }
      readlinkSync() {
        const target = this.#linkTarget;
        if (target) {
          return target;
        }
        if (!this.canReadlink()) {
          return void 0;
        }
        if (!this.parent) {
          return void 0;
        }
        try {
          const read = this.#fs.readlinkSync(this.fullpath());
          const linkTarget = this.parent.realpathSync()?.resolve(read);
          if (linkTarget) {
            return this.#linkTarget = linkTarget;
          }
        } catch (er) {
          this.#readlinkFail(er.code);
          return void 0;
        }
      }
      #readdirSuccess(children) {
        this.#type |= READDIR_CALLED;
        for (let p = children.provisional; p < children.length; p++) {
          const c = children[p];
          if (c)
            c.#markENOENT();
        }
      }
      #markENOENT() {
        if (this.#type & ENOENT)
          return;
        this.#type = (this.#type | ENOENT) & IFMT_UNKNOWN;
        this.#markChildrenENOENT();
      }
      #markChildrenENOENT() {
        const children = this.children();
        children.provisional = 0;
        for (const p of children) {
          p.#markENOENT();
        }
      }
      #markENOREALPATH() {
        this.#type |= ENOREALPATH;
        this.#markENOTDIR();
      }
      #markENOTDIR() {
        if (this.#type & ENOTDIR)
          return;
        let t = this.#type;
        if ((t & IFMT) === IFDIR)
          t &= IFMT_UNKNOWN;
        this.#type = t | ENOTDIR;
        this.#markChildrenENOENT();
      }
      #readdirFail(code = "") {
        if (code === "ENOTDIR" || code === "EPERM") {
          this.#markENOTDIR();
        } else if (code === "ENOENT") {
          this.#markENOENT();
        } else {
          this.children().provisional = 0;
        }
      }
      #lstatFail(code = "") {
        if (code === "ENOTDIR") {
          const p = this.parent;
          p.#markENOTDIR();
        } else if (code === "ENOENT") {
          this.#markENOENT();
        }
      }
      #readlinkFail(code = "") {
        let ter = this.#type;
        ter |= ENOREADLINK;
        if (code === "ENOENT")
          ter |= ENOENT;
        if (code === "EINVAL" || code === "UNKNOWN") {
          ter &= IFMT_UNKNOWN;
        }
        this.#type = ter;
        if (code === "ENOTDIR" && this.parent) {
          this.parent.#markENOTDIR();
        }
      }
      #readdirAddChild(e, c) {
        return this.#readdirMaybePromoteChild(e, c) || this.#readdirAddNewChild(e, c);
      }
      #readdirAddNewChild(e, c) {
        const type = entToType(e);
        const child = this.newChild(e.name, type, { parent: this });
        const ifmt = child.#type & IFMT;
        if (ifmt !== IFDIR && ifmt !== IFLNK && ifmt !== UNKNOWN) {
          child.#type |= ENOTDIR;
        }
        c.unshift(child);
        c.provisional++;
        return child;
      }
      #readdirMaybePromoteChild(e, c) {
        for (let p = c.provisional; p < c.length; p++) {
          const pchild = c[p];
          const name = this.nocase ? normalizeNocase(e.name) : normalize(e.name);
          if (name !== pchild.#matchName) {
            continue;
          }
          return this.#readdirPromoteChild(e, pchild, p, c);
        }
      }
      #readdirPromoteChild(e, p, index, c) {
        const v = p.name;
        p.#type = p.#type & IFMT_UNKNOWN | entToType(e);
        if (v !== e.name)
          p.name = e.name;
        if (index !== c.provisional) {
          if (index === c.length - 1)
            c.pop();
          else
            c.splice(index, 1);
          c.unshift(p);
        }
        c.provisional++;
        return p;
      }
      async lstat() {
        if ((this.#type & ENOENT) === 0) {
          try {
            this.#applyStat(await this.#fs.promises.lstat(this.fullpath()));
            return this;
          } catch (er) {
            this.#lstatFail(er.code);
          }
        }
      }
      lstatSync() {
        if ((this.#type & ENOENT) === 0) {
          try {
            this.#applyStat(this.#fs.lstatSync(this.fullpath()));
            return this;
          } catch (er) {
            this.#lstatFail(er.code);
          }
        }
      }
      #applyStat(st) {
        const { atime, atimeMs, birthtime, birthtimeMs, blksize, blocks, ctime, ctimeMs, dev, gid, ino, mode, mtime, mtimeMs, nlink, rdev, size, uid } = st;
        this.#atime = atime;
        this.#atimeMs = atimeMs;
        this.#birthtime = birthtime;
        this.#birthtimeMs = birthtimeMs;
        this.#blksize = blksize;
        this.#blocks = blocks;
        this.#ctime = ctime;
        this.#ctimeMs = ctimeMs;
        this.#dev = dev;
        this.#gid = gid;
        this.#ino = ino;
        this.#mode = mode;
        this.#mtime = mtime;
        this.#mtimeMs = mtimeMs;
        this.#nlink = nlink;
        this.#rdev = rdev;
        this.#size = size;
        this.#uid = uid;
        const ifmt = entToType(st);
        this.#type = this.#type & IFMT_UNKNOWN | ifmt | LSTAT_CALLED;
        if (ifmt !== UNKNOWN && ifmt !== IFDIR && ifmt !== IFLNK) {
          this.#type |= ENOTDIR;
        }
      }
      #onReaddirCB = [];
      #readdirCBInFlight = false;
      #callOnReaddirCB(children) {
        this.#readdirCBInFlight = false;
        const cbs = this.#onReaddirCB.slice();
        this.#onReaddirCB.length = 0;
        cbs.forEach((cb) => cb(null, children));
      }
      readdirCB(cb, allowZalgo = false) {
        if (!this.canReaddir()) {
          if (allowZalgo)
            cb(null, []);
          else
            queueMicrotask(() => cb(null, []));
          return;
        }
        const children = this.children();
        if (this.calledReaddir()) {
          const c = children.slice(0, children.provisional);
          if (allowZalgo)
            cb(null, c);
          else
            queueMicrotask(() => cb(null, c));
          return;
        }
        this.#onReaddirCB.push(cb);
        if (this.#readdirCBInFlight) {
          return;
        }
        this.#readdirCBInFlight = true;
        const fullpath = this.fullpath();
        this.#fs.readdir(fullpath, { withFileTypes: true }, (er, entries) => {
          if (er) {
            this.#readdirFail(er.code);
            children.provisional = 0;
          } else {
            for (const e of entries) {
              this.#readdirAddChild(e, children);
            }
            this.#readdirSuccess(children);
          }
          this.#callOnReaddirCB(children.slice(0, children.provisional));
          return;
        });
      }
      #asyncReaddirInFlight;
      async readdir() {
        if (!this.canReaddir()) {
          return [];
        }
        const children = this.children();
        if (this.calledReaddir()) {
          return children.slice(0, children.provisional);
        }
        const fullpath = this.fullpath();
        if (this.#asyncReaddirInFlight) {
          await this.#asyncReaddirInFlight;
        } else {
          let resolve = () => {
          };
          this.#asyncReaddirInFlight = new Promise((res) => resolve = res);
          try {
            for (const e of await this.#fs.promises.readdir(fullpath, {
              withFileTypes: true
            })) {
              this.#readdirAddChild(e, children);
            }
            this.#readdirSuccess(children);
          } catch (er) {
            this.#readdirFail(er.code);
            children.provisional = 0;
          }
          this.#asyncReaddirInFlight = void 0;
          resolve();
        }
        return children.slice(0, children.provisional);
      }
      readdirSync() {
        if (!this.canReaddir()) {
          return [];
        }
        const children = this.children();
        if (this.calledReaddir()) {
          return children.slice(0, children.provisional);
        }
        const fullpath = this.fullpath();
        try {
          for (const e of this.#fs.readdirSync(fullpath, {
            withFileTypes: true
          })) {
            this.#readdirAddChild(e, children);
          }
          this.#readdirSuccess(children);
        } catch (er) {
          this.#readdirFail(er.code);
          children.provisional = 0;
        }
        return children.slice(0, children.provisional);
      }
      canReaddir() {
        if (this.#type & ENOCHILD)
          return false;
        const ifmt = IFMT & this.#type;
        if (!(ifmt === UNKNOWN || ifmt === IFDIR || ifmt === IFLNK)) {
          return false;
        }
        return true;
      }
      shouldWalk(dirs, walkFilter) {
        return (this.#type & IFDIR) === IFDIR && !(this.#type & ENOCHILD) && !dirs.has(this) && (!walkFilter || walkFilter(this));
      }
      async realpath() {
        if (this.#realpath)
          return this.#realpath;
        if ((ENOREALPATH | ENOREADLINK | ENOENT) & this.#type)
          return void 0;
        try {
          const rp = await this.#fs.promises.realpath(this.fullpath());
          return this.#realpath = this.resolve(rp);
        } catch (_) {
          this.#markENOREALPATH();
        }
      }
      realpathSync() {
        if (this.#realpath)
          return this.#realpath;
        if ((ENOREALPATH | ENOREADLINK | ENOENT) & this.#type)
          return void 0;
        try {
          const rp = this.#fs.realpathSync(this.fullpath());
          return this.#realpath = this.resolve(rp);
        } catch (_) {
          this.#markENOREALPATH();
        }
      }
      [setAsCwd](oldCwd) {
        if (oldCwd === this)
          return;
        const changed = /* @__PURE__ */ new Set([]);
        let rp = [];
        let p = this;
        while (p && p.parent) {
          changed.add(p);
          p.#relative = rp.join(this.sep);
          p.#relativePosix = rp.join("/");
          p = p.parent;
          rp.push("..");
        }
        p = oldCwd;
        while (p && p.parent && !changed.has(p)) {
          p.#relative = void 0;
          p.#relativePosix = void 0;
          p = p.parent;
        }
      }
    };
    exports2.PathBase = PathBase;
    var PathWin32 = class extends PathBase {
      sep = "\\";
      splitSep = eitherSep;
      constructor(name, type = UNKNOWN, root, roots, nocase, children, opts) {
        super(name, type, root, roots, nocase, children, opts);
      }
      newChild(name, type = UNKNOWN, opts = {}) {
        return new PathWin32(name, type, this.root, this.roots, this.nocase, this.childrenCache(), opts);
      }
      getRootString(path) {
        return path_1.win32.parse(path).root;
      }
      getRoot(rootPath) {
        rootPath = uncToDrive(rootPath.toUpperCase());
        if (rootPath === this.root.name) {
          return this.root;
        }
        for (const [compare, root] of Object.entries(this.roots)) {
          if (this.sameRoot(rootPath, compare)) {
            return this.roots[rootPath] = root;
          }
        }
        return this.roots[rootPath] = new PathScurryWin32(rootPath, this).root;
      }
      sameRoot(rootPath, compare = this.root.name) {
        rootPath = rootPath.toUpperCase().replace(/\//g, "\\").replace(uncDriveRegexp, "$1\\");
        return rootPath === compare;
      }
    };
    exports2.PathWin32 = PathWin32;
    var PathPosix = class extends PathBase {
      splitSep = "/";
      sep = "/";
      constructor(name, type = UNKNOWN, root, roots, nocase, children, opts) {
        super(name, type, root, roots, nocase, children, opts);
      }
      getRootString(path) {
        return path.startsWith("/") ? "/" : "";
      }
      getRoot(_rootPath) {
        return this.root;
      }
      newChild(name, type = UNKNOWN, opts = {}) {
        return new PathPosix(name, type, this.root, this.roots, this.nocase, this.childrenCache(), opts);
      }
    };
    exports2.PathPosix = PathPosix;
    var PathScurryBase = class {
      root;
      rootPath;
      roots;
      cwd;
      #resolveCache;
      #resolvePosixCache;
      #children;
      nocase;
      #fs;
      constructor(cwd = process.cwd(), pathImpl, sep, { nocase, childrenCacheSize = 16 * 1024, fs = defaultFS } = {}) {
        this.#fs = fsFromOption(fs);
        if (cwd instanceof URL || cwd.startsWith("file://")) {
          cwd = (0, url_1.fileURLToPath)(cwd);
        }
        const cwdPath = pathImpl.resolve(cwd);
        this.roots = /* @__PURE__ */ Object.create(null);
        this.rootPath = this.parseRootPath(cwdPath);
        this.#resolveCache = new ResolveCache();
        this.#resolvePosixCache = new ResolveCache();
        this.#children = new ChildrenCache(childrenCacheSize);
        const split2 = cwdPath.substring(this.rootPath.length).split(sep);
        if (split2.length === 1 && !split2[0]) {
          split2.pop();
        }
        if (nocase === void 0) {
          throw new TypeError("must provide nocase setting to PathScurryBase ctor");
        }
        this.nocase = nocase;
        this.root = this.newRoot(this.#fs);
        this.roots[this.rootPath] = this.root;
        let prev = this.root;
        let len = split2.length - 1;
        const joinSep = pathImpl.sep;
        let abs = this.rootPath;
        let sawFirst = false;
        for (const part of split2) {
          const l = len--;
          prev = prev.child(part, {
            relative: new Array(l).fill("..").join(joinSep),
            relativePosix: new Array(l).fill("..").join("/"),
            fullpath: abs += (sawFirst ? "" : joinSep) + part
          });
          sawFirst = true;
        }
        this.cwd = prev;
      }
      depth(path = this.cwd) {
        if (typeof path === "string") {
          path = this.cwd.resolve(path);
        }
        return path.depth();
      }
      childrenCache() {
        return this.#children;
      }
      resolve(...paths) {
        let r = "";
        for (let i = paths.length - 1; i >= 0; i--) {
          const p = paths[i];
          if (!p || p === ".")
            continue;
          r = r ? `${p}/${r}` : p;
          if (this.isAbsolute(p)) {
            break;
          }
        }
        const cached = this.#resolveCache.get(r);
        if (cached !== void 0) {
          return cached;
        }
        const result = this.cwd.resolve(r).fullpath();
        this.#resolveCache.set(r, result);
        return result;
      }
      resolvePosix(...paths) {
        let r = "";
        for (let i = paths.length - 1; i >= 0; i--) {
          const p = paths[i];
          if (!p || p === ".")
            continue;
          r = r ? `${p}/${r}` : p;
          if (this.isAbsolute(p)) {
            break;
          }
        }
        const cached = this.#resolvePosixCache.get(r);
        if (cached !== void 0) {
          return cached;
        }
        const result = this.cwd.resolve(r).fullpathPosix();
        this.#resolvePosixCache.set(r, result);
        return result;
      }
      relative(entry = this.cwd) {
        if (typeof entry === "string") {
          entry = this.cwd.resolve(entry);
        }
        return entry.relative();
      }
      relativePosix(entry = this.cwd) {
        if (typeof entry === "string") {
          entry = this.cwd.resolve(entry);
        }
        return entry.relativePosix();
      }
      basename(entry = this.cwd) {
        if (typeof entry === "string") {
          entry = this.cwd.resolve(entry);
        }
        return entry.name;
      }
      dirname(entry = this.cwd) {
        if (typeof entry === "string") {
          entry = this.cwd.resolve(entry);
        }
        return (entry.parent || entry).fullpath();
      }
      async readdir(entry = this.cwd, opts = {
        withFileTypes: true
      }) {
        if (typeof entry === "string") {
          entry = this.cwd.resolve(entry);
        } else if (!(entry instanceof PathBase)) {
          opts = entry;
          entry = this.cwd;
        }
        const { withFileTypes } = opts;
        if (!entry.canReaddir()) {
          return [];
        } else {
          const p = await entry.readdir();
          return withFileTypes ? p : p.map((e) => e.name);
        }
      }
      readdirSync(entry = this.cwd, opts = {
        withFileTypes: true
      }) {
        if (typeof entry === "string") {
          entry = this.cwd.resolve(entry);
        } else if (!(entry instanceof PathBase)) {
          opts = entry;
          entry = this.cwd;
        }
        const { withFileTypes = true } = opts;
        if (!entry.canReaddir()) {
          return [];
        } else if (withFileTypes) {
          return entry.readdirSync();
        } else {
          return entry.readdirSync().map((e) => e.name);
        }
      }
      async lstat(entry = this.cwd) {
        if (typeof entry === "string") {
          entry = this.cwd.resolve(entry);
        }
        return entry.lstat();
      }
      lstatSync(entry = this.cwd) {
        if (typeof entry === "string") {
          entry = this.cwd.resolve(entry);
        }
        return entry.lstatSync();
      }
      async readlink(entry = this.cwd, { withFileTypes } = {
        withFileTypes: false
      }) {
        if (typeof entry === "string") {
          entry = this.cwd.resolve(entry);
        } else if (!(entry instanceof PathBase)) {
          withFileTypes = entry.withFileTypes;
          entry = this.cwd;
        }
        const e = await entry.readlink();
        return withFileTypes ? e : e?.fullpath();
      }
      readlinkSync(entry = this.cwd, { withFileTypes } = {
        withFileTypes: false
      }) {
        if (typeof entry === "string") {
          entry = this.cwd.resolve(entry);
        } else if (!(entry instanceof PathBase)) {
          withFileTypes = entry.withFileTypes;
          entry = this.cwd;
        }
        const e = entry.readlinkSync();
        return withFileTypes ? e : e?.fullpath();
      }
      async realpath(entry = this.cwd, { withFileTypes } = {
        withFileTypes: false
      }) {
        if (typeof entry === "string") {
          entry = this.cwd.resolve(entry);
        } else if (!(entry instanceof PathBase)) {
          withFileTypes = entry.withFileTypes;
          entry = this.cwd;
        }
        const e = await entry.realpath();
        return withFileTypes ? e : e?.fullpath();
      }
      realpathSync(entry = this.cwd, { withFileTypes } = {
        withFileTypes: false
      }) {
        if (typeof entry === "string") {
          entry = this.cwd.resolve(entry);
        } else if (!(entry instanceof PathBase)) {
          withFileTypes = entry.withFileTypes;
          entry = this.cwd;
        }
        const e = entry.realpathSync();
        return withFileTypes ? e : e?.fullpath();
      }
      async walk(entry = this.cwd, opts = {}) {
        if (typeof entry === "string") {
          entry = this.cwd.resolve(entry);
        } else if (!(entry instanceof PathBase)) {
          opts = entry;
          entry = this.cwd;
        }
        const { withFileTypes = true, follow = false, filter, walkFilter } = opts;
        const results = [];
        if (!filter || filter(entry)) {
          results.push(withFileTypes ? entry : entry.fullpath());
        }
        const dirs = /* @__PURE__ */ new Set();
        const walk = (dir, cb) => {
          dirs.add(dir);
          dir.readdirCB((er, entries) => {
            if (er) {
              return cb(er);
            }
            let len = entries.length;
            if (!len)
              return cb();
            const next = () => {
              if (--len === 0) {
                cb();
              }
            };
            for (const e of entries) {
              if (!filter || filter(e)) {
                results.push(withFileTypes ? e : e.fullpath());
              }
              if (follow && e.isSymbolicLink()) {
                e.realpath().then((r) => r?.isUnknown() ? r.lstat() : r).then((r) => r?.shouldWalk(dirs, walkFilter) ? walk(r, next) : next());
              } else {
                if (e.shouldWalk(dirs, walkFilter)) {
                  walk(e, next);
                } else {
                  next();
                }
              }
            }
          }, true);
        };
        const start = entry;
        return new Promise((res, rej) => {
          walk(start, (er) => {
            if (er)
              return rej(er);
            res(results);
          });
        });
      }
      walkSync(entry = this.cwd, opts = {}) {
        if (typeof entry === "string") {
          entry = this.cwd.resolve(entry);
        } else if (!(entry instanceof PathBase)) {
          opts = entry;
          entry = this.cwd;
        }
        const { withFileTypes = true, follow = false, filter, walkFilter } = opts;
        const results = [];
        if (!filter || filter(entry)) {
          results.push(withFileTypes ? entry : entry.fullpath());
        }
        const dirs = /* @__PURE__ */ new Set([entry]);
        for (const dir of dirs) {
          const entries = dir.readdirSync();
          for (const e of entries) {
            if (!filter || filter(e)) {
              results.push(withFileTypes ? e : e.fullpath());
            }
            let r = e;
            if (e.isSymbolicLink()) {
              if (!(follow && (r = e.realpathSync())))
                continue;
              if (r.isUnknown())
                r.lstatSync();
            }
            if (r.shouldWalk(dirs, walkFilter)) {
              dirs.add(r);
            }
          }
        }
        return results;
      }
      [Symbol.asyncIterator]() {
        return this.iterate();
      }
      iterate(entry = this.cwd, options = {}) {
        if (typeof entry === "string") {
          entry = this.cwd.resolve(entry);
        } else if (!(entry instanceof PathBase)) {
          options = entry;
          entry = this.cwd;
        }
        return this.stream(entry, options)[Symbol.asyncIterator]();
      }
      [Symbol.iterator]() {
        return this.iterateSync();
      }
      *iterateSync(entry = this.cwd, opts = {}) {
        if (typeof entry === "string") {
          entry = this.cwd.resolve(entry);
        } else if (!(entry instanceof PathBase)) {
          opts = entry;
          entry = this.cwd;
        }
        const { withFileTypes = true, follow = false, filter, walkFilter } = opts;
        if (!filter || filter(entry)) {
          yield withFileTypes ? entry : entry.fullpath();
        }
        const dirs = /* @__PURE__ */ new Set([entry]);
        for (const dir of dirs) {
          const entries = dir.readdirSync();
          for (const e of entries) {
            if (!filter || filter(e)) {
              yield withFileTypes ? e : e.fullpath();
            }
            let r = e;
            if (e.isSymbolicLink()) {
              if (!(follow && (r = e.realpathSync())))
                continue;
              if (r.isUnknown())
                r.lstatSync();
            }
            if (r.shouldWalk(dirs, walkFilter)) {
              dirs.add(r);
            }
          }
        }
      }
      stream(entry = this.cwd, opts = {}) {
        if (typeof entry === "string") {
          entry = this.cwd.resolve(entry);
        } else if (!(entry instanceof PathBase)) {
          opts = entry;
          entry = this.cwd;
        }
        const { withFileTypes = true, follow = false, filter, walkFilter } = opts;
        const results = new minipass_1.Minipass({ objectMode: true });
        if (!filter || filter(entry)) {
          results.write(withFileTypes ? entry : entry.fullpath());
        }
        const dirs = /* @__PURE__ */ new Set();
        const queue = [entry];
        let processing = 0;
        const process2 = () => {
          let paused = false;
          while (!paused) {
            const dir = queue.shift();
            if (!dir) {
              if (processing === 0)
                results.end();
              return;
            }
            processing++;
            dirs.add(dir);
            const onReaddir = (er, entries, didRealpaths = false) => {
              if (er)
                return results.emit("error", er);
              if (follow && !didRealpaths) {
                const promises = [];
                for (const e of entries) {
                  if (e.isSymbolicLink()) {
                    promises.push(e.realpath().then((r) => r?.isUnknown() ? r.lstat() : r));
                  }
                }
                if (promises.length) {
                  Promise.all(promises).then(() => onReaddir(null, entries, true));
                  return;
                }
              }
              for (const e of entries) {
                if (e && (!filter || filter(e))) {
                  if (!results.write(withFileTypes ? e : e.fullpath())) {
                    paused = true;
                  }
                }
              }
              processing--;
              for (const e of entries) {
                const r = e.realpathCached() || e;
                if (r.shouldWalk(dirs, walkFilter)) {
                  queue.push(r);
                }
              }
              if (paused && !results.flowing) {
                results.once("drain", process2);
              } else if (!sync) {
                process2();
              }
            };
            let sync = true;
            dir.readdirCB(onReaddir, true);
            sync = false;
          }
        };
        process2();
        return results;
      }
      streamSync(entry = this.cwd, opts = {}) {
        if (typeof entry === "string") {
          entry = this.cwd.resolve(entry);
        } else if (!(entry instanceof PathBase)) {
          opts = entry;
          entry = this.cwd;
        }
        const { withFileTypes = true, follow = false, filter, walkFilter } = opts;
        const results = new minipass_1.Minipass({ objectMode: true });
        const dirs = /* @__PURE__ */ new Set();
        if (!filter || filter(entry)) {
          results.write(withFileTypes ? entry : entry.fullpath());
        }
        const queue = [entry];
        let processing = 0;
        const process2 = () => {
          let paused = false;
          while (!paused) {
            const dir = queue.shift();
            if (!dir) {
              if (processing === 0)
                results.end();
              return;
            }
            processing++;
            dirs.add(dir);
            const entries = dir.readdirSync();
            for (const e of entries) {
              if (!filter || filter(e)) {
                if (!results.write(withFileTypes ? e : e.fullpath())) {
                  paused = true;
                }
              }
            }
            processing--;
            for (const e of entries) {
              let r = e;
              if (e.isSymbolicLink()) {
                if (!(follow && (r = e.realpathSync())))
                  continue;
                if (r.isUnknown())
                  r.lstatSync();
              }
              if (r.shouldWalk(dirs, walkFilter)) {
                queue.push(r);
              }
            }
          }
          if (paused && !results.flowing)
            results.once("drain", process2);
        };
        process2();
        return results;
      }
      chdir(path = this.cwd) {
        const oldCwd = this.cwd;
        this.cwd = typeof path === "string" ? this.cwd.resolve(path) : path;
        this.cwd[setAsCwd](oldCwd);
      }
    };
    exports2.PathScurryBase = PathScurryBase;
    var PathScurryWin32 = class extends PathScurryBase {
      sep = "\\";
      constructor(cwd = process.cwd(), opts = {}) {
        const { nocase = true } = opts;
        super(cwd, path_1.win32, "\\", { ...opts, nocase });
        this.nocase = nocase;
        for (let p = this.cwd; p; p = p.parent) {
          p.nocase = this.nocase;
        }
      }
      parseRootPath(dir) {
        return path_1.win32.parse(dir).root.toUpperCase();
      }
      newRoot(fs) {
        return new PathWin32(this.rootPath, IFDIR, void 0, this.roots, this.nocase, this.childrenCache(), { fs });
      }
      isAbsolute(p) {
        return p.startsWith("/") || p.startsWith("\\") || /^[a-z]:(\/|\\)/i.test(p);
      }
    };
    exports2.PathScurryWin32 = PathScurryWin32;
    var PathScurryPosix = class extends PathScurryBase {
      sep = "/";
      constructor(cwd = process.cwd(), opts = {}) {
        const { nocase = false } = opts;
        super(cwd, path_1.posix, "/", { ...opts, nocase });
        this.nocase = nocase;
      }
      parseRootPath(_dir) {
        return "/";
      }
      newRoot(fs) {
        return new PathPosix(this.rootPath, IFDIR, void 0, this.roots, this.nocase, this.childrenCache(), { fs });
      }
      isAbsolute(p) {
        return p.startsWith("/");
      }
    };
    exports2.PathScurryPosix = PathScurryPosix;
    var PathScurryDarwin = class extends PathScurryPosix {
      constructor(cwd = process.cwd(), opts = {}) {
        const { nocase = true } = opts;
        super(cwd, { ...opts, nocase });
      }
    };
    exports2.PathScurryDarwin = PathScurryDarwin;
    exports2.Path = process.platform === "win32" ? PathWin32 : PathPosix;
    exports2.PathScurry = process.platform === "win32" ? PathScurryWin32 : process.platform === "darwin" ? PathScurryDarwin : PathScurryPosix;
  }
});

// node_modules/glob/dist/commonjs/pattern.js
var require_pattern = __commonJS({
  "node_modules/glob/dist/commonjs/pattern.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Pattern = void 0;
    var minimatch_1 = require_commonjs();
    var isPatternList = (pl) => pl.length >= 1;
    var isGlobList = (gl) => gl.length >= 1;
    var Pattern = class {
      #patternList;
      #globList;
      #index;
      length;
      #platform;
      #rest;
      #globString;
      #isDrive;
      #isUNC;
      #isAbsolute;
      #followGlobstar = true;
      constructor(patternList, globList, index, platform) {
        if (!isPatternList(patternList)) {
          throw new TypeError("empty pattern list");
        }
        if (!isGlobList(globList)) {
          throw new TypeError("empty glob list");
        }
        if (globList.length !== patternList.length) {
          throw new TypeError("mismatched pattern list and glob list lengths");
        }
        this.length = patternList.length;
        if (index < 0 || index >= this.length) {
          throw new TypeError("index out of range");
        }
        this.#patternList = patternList;
        this.#globList = globList;
        this.#index = index;
        this.#platform = platform;
        if (this.#index === 0) {
          if (this.isUNC()) {
            const [p0, p1, p2, p3, ...prest] = this.#patternList;
            const [g0, g1, g2, g3, ...grest] = this.#globList;
            if (prest[0] === "") {
              prest.shift();
              grest.shift();
            }
            const p = [p0, p1, p2, p3, ""].join("/");
            const g = [g0, g1, g2, g3, ""].join("/");
            this.#patternList = [p, ...prest];
            this.#globList = [g, ...grest];
            this.length = this.#patternList.length;
          } else if (this.isDrive() || this.isAbsolute()) {
            const [p1, ...prest] = this.#patternList;
            const [g1, ...grest] = this.#globList;
            if (prest[0] === "") {
              prest.shift();
              grest.shift();
            }
            const p = p1 + "/";
            const g = g1 + "/";
            this.#patternList = [p, ...prest];
            this.#globList = [g, ...grest];
            this.length = this.#patternList.length;
          }
        }
      }
      pattern() {
        return this.#patternList[this.#index];
      }
      isString() {
        return typeof this.#patternList[this.#index] === "string";
      }
      isGlobstar() {
        return this.#patternList[this.#index] === minimatch_1.GLOBSTAR;
      }
      isRegExp() {
        return this.#patternList[this.#index] instanceof RegExp;
      }
      globString() {
        return this.#globString = this.#globString || (this.#index === 0 ? this.isAbsolute() ? this.#globList[0] + this.#globList.slice(1).join("/") : this.#globList.join("/") : this.#globList.slice(this.#index).join("/"));
      }
      hasMore() {
        return this.length > this.#index + 1;
      }
      rest() {
        if (this.#rest !== void 0)
          return this.#rest;
        if (!this.hasMore())
          return this.#rest = null;
        this.#rest = new Pattern(this.#patternList, this.#globList, this.#index + 1, this.#platform);
        this.#rest.#isAbsolute = this.#isAbsolute;
        this.#rest.#isUNC = this.#isUNC;
        this.#rest.#isDrive = this.#isDrive;
        return this.#rest;
      }
      isUNC() {
        const pl = this.#patternList;
        return this.#isUNC !== void 0 ? this.#isUNC : this.#isUNC = this.#platform === "win32" && this.#index === 0 && pl[0] === "" && pl[1] === "" && typeof pl[2] === "string" && !!pl[2] && typeof pl[3] === "string" && !!pl[3];
      }
      isDrive() {
        const pl = this.#patternList;
        return this.#isDrive !== void 0 ? this.#isDrive : this.#isDrive = this.#platform === "win32" && this.#index === 0 && this.length > 1 && typeof pl[0] === "string" && /^[a-z]:$/i.test(pl[0]);
      }
      isAbsolute() {
        const pl = this.#patternList;
        return this.#isAbsolute !== void 0 ? this.#isAbsolute : this.#isAbsolute = pl[0] === "" && pl.length > 1 || this.isDrive() || this.isUNC();
      }
      root() {
        const p = this.#patternList[0];
        return typeof p === "string" && this.isAbsolute() && this.#index === 0 ? p : "";
      }
      checkFollowGlobstar() {
        return !(this.#index === 0 || !this.isGlobstar() || !this.#followGlobstar);
      }
      markFollowGlobstar() {
        if (this.#index === 0 || !this.isGlobstar() || !this.#followGlobstar)
          return false;
        this.#followGlobstar = false;
        return true;
      }
    };
    exports2.Pattern = Pattern;
  }
});

// node_modules/glob/dist/commonjs/ignore.js
var require_ignore = __commonJS({
  "node_modules/glob/dist/commonjs/ignore.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Ignore = void 0;
    var minimatch_1 = require_commonjs();
    var pattern_js_1 = require_pattern();
    var defaultPlatform = typeof process === "object" && process && typeof process.platform === "string" ? process.platform : "linux";
    var Ignore = class {
      relative;
      relativeChildren;
      absolute;
      absoluteChildren;
      constructor(ignored, { nobrace, nocase, noext, noglobstar, platform = defaultPlatform }) {
        this.relative = [];
        this.absolute = [];
        this.relativeChildren = [];
        this.absoluteChildren = [];
        const mmopts = {
          dot: true,
          nobrace,
          nocase,
          noext,
          noglobstar,
          optimizationLevel: 2,
          platform,
          nocomment: true,
          nonegate: true
        };
        for (const ign of ignored) {
          const mm = new minimatch_1.Minimatch(ign, mmopts);
          for (let i = 0; i < mm.set.length; i++) {
            const parsed = mm.set[i];
            const globParts = mm.globParts[i];
            if (!parsed || !globParts) {
              throw new Error("invalid pattern object");
            }
            while (parsed[0] === "." && globParts[0] === ".") {
              parsed.shift();
              globParts.shift();
            }
            const p = new pattern_js_1.Pattern(parsed, globParts, 0, platform);
            const m = new minimatch_1.Minimatch(p.globString(), mmopts);
            const children = globParts[globParts.length - 1] === "**";
            const absolute = p.isAbsolute();
            if (absolute)
              this.absolute.push(m);
            else
              this.relative.push(m);
            if (children) {
              if (absolute)
                this.absoluteChildren.push(m);
              else
                this.relativeChildren.push(m);
            }
          }
        }
      }
      ignored(p) {
        const fullpath = p.fullpath();
        const fullpaths = `${fullpath}/`;
        const relative = p.relative() || ".";
        const relatives = `${relative}/`;
        for (const m of this.relative) {
          if (m.match(relative) || m.match(relatives))
            return true;
        }
        for (const m of this.absolute) {
          if (m.match(fullpath) || m.match(fullpaths))
            return true;
        }
        return false;
      }
      childrenIgnored(p) {
        const fullpath = p.fullpath() + "/";
        const relative = (p.relative() || ".") + "/";
        for (const m of this.relativeChildren) {
          if (m.match(relative))
            return true;
        }
        for (const m of this.absoluteChildren) {
          if (m.match(fullpath))
            return true;
        }
        return false;
      }
    };
    exports2.Ignore = Ignore;
  }
});

// node_modules/glob/dist/commonjs/processor.js
var require_processor = __commonJS({
  "node_modules/glob/dist/commonjs/processor.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Processor = exports2.SubWalks = exports2.MatchRecord = exports2.HasWalkedCache = void 0;
    var minimatch_1 = require_commonjs();
    var HasWalkedCache = class {
      store;
      constructor(store = /* @__PURE__ */ new Map()) {
        this.store = store;
      }
      copy() {
        return new HasWalkedCache(new Map(this.store));
      }
      hasWalked(target, pattern) {
        return this.store.get(target.fullpath())?.has(pattern.globString());
      }
      storeWalked(target, pattern) {
        const fullpath = target.fullpath();
        const cached = this.store.get(fullpath);
        if (cached)
          cached.add(pattern.globString());
        else
          this.store.set(fullpath, /* @__PURE__ */ new Set([pattern.globString()]));
      }
    };
    exports2.HasWalkedCache = HasWalkedCache;
    var MatchRecord = class {
      store = /* @__PURE__ */ new Map();
      add(target, absolute, ifDir) {
        const n = (absolute ? 2 : 0) | (ifDir ? 1 : 0);
        const current = this.store.get(target);
        this.store.set(target, current === void 0 ? n : n & current);
      }
      entries() {
        return [...this.store.entries()].map(([path, n]) => [
          path,
          !!(n & 2),
          !!(n & 1)
        ]);
      }
    };
    exports2.MatchRecord = MatchRecord;
    var SubWalks = class {
      store = /* @__PURE__ */ new Map();
      add(target, pattern) {
        if (!target.canReaddir()) {
          return;
        }
        const subs = this.store.get(target);
        if (subs) {
          if (!subs.find((p) => p.globString() === pattern.globString())) {
            subs.push(pattern);
          }
        } else
          this.store.set(target, [pattern]);
      }
      get(target) {
        const subs = this.store.get(target);
        if (!subs) {
          throw new Error("attempting to walk unknown path");
        }
        return subs;
      }
      entries() {
        return this.keys().map((k) => [k, this.store.get(k)]);
      }
      keys() {
        return [...this.store.keys()].filter((t) => t.canReaddir());
      }
    };
    exports2.SubWalks = SubWalks;
    var Processor = class {
      hasWalkedCache;
      matches = new MatchRecord();
      subwalks = new SubWalks();
      patterns;
      follow;
      dot;
      opts;
      constructor(opts, hasWalkedCache) {
        this.opts = opts;
        this.follow = !!opts.follow;
        this.dot = !!opts.dot;
        this.hasWalkedCache = hasWalkedCache ? hasWalkedCache.copy() : new HasWalkedCache();
      }
      processPatterns(target, patterns) {
        this.patterns = patterns;
        const processingSet = patterns.map((p) => [target, p]);
        for (let [t, pattern] of processingSet) {
          this.hasWalkedCache.storeWalked(t, pattern);
          const root = pattern.root();
          const absolute = pattern.isAbsolute() && this.opts.absolute !== false;
          if (root) {
            t = t.resolve(root === "/" && this.opts.root !== void 0 ? this.opts.root : root);
            const rest2 = pattern.rest();
            if (!rest2) {
              this.matches.add(t, true, false);
              continue;
            } else {
              pattern = rest2;
            }
          }
          if (t.isENOENT())
            continue;
          let p;
          let rest;
          let changed = false;
          while (typeof (p = pattern.pattern()) === "string" && (rest = pattern.rest())) {
            const c = t.resolve(p);
            t = c;
            pattern = rest;
            changed = true;
          }
          p = pattern.pattern();
          rest = pattern.rest();
          if (changed) {
            if (this.hasWalkedCache.hasWalked(t, pattern))
              continue;
            this.hasWalkedCache.storeWalked(t, pattern);
          }
          if (typeof p === "string") {
            const ifDir = p === ".." || p === "" || p === ".";
            this.matches.add(t.resolve(p), absolute, ifDir);
            continue;
          } else if (p === minimatch_1.GLOBSTAR) {
            if (!t.isSymbolicLink() || this.follow || pattern.checkFollowGlobstar()) {
              this.subwalks.add(t, pattern);
            }
            const rp = rest?.pattern();
            const rrest = rest?.rest();
            if (!rest || (rp === "" || rp === ".") && !rrest) {
              this.matches.add(t, absolute, rp === "" || rp === ".");
            } else {
              if (rp === "..") {
                const tp = t.parent || t;
                if (!rrest)
                  this.matches.add(tp, absolute, true);
                else if (!this.hasWalkedCache.hasWalked(tp, rrest)) {
                  this.subwalks.add(tp, rrest);
                }
              }
            }
          } else if (p instanceof RegExp) {
            this.subwalks.add(t, pattern);
          }
        }
        return this;
      }
      subwalkTargets() {
        return this.subwalks.keys();
      }
      child() {
        return new Processor(this.opts, this.hasWalkedCache);
      }
      filterEntries(parent, entries) {
        const patterns = this.subwalks.get(parent);
        const results = this.child();
        for (const e of entries) {
          for (const pattern of patterns) {
            const absolute = pattern.isAbsolute();
            const p = pattern.pattern();
            const rest = pattern.rest();
            if (p === minimatch_1.GLOBSTAR) {
              results.testGlobstar(e, pattern, rest, absolute);
            } else if (p instanceof RegExp) {
              results.testRegExp(e, p, rest, absolute);
            } else {
              results.testString(e, p, rest, absolute);
            }
          }
        }
        return results;
      }
      testGlobstar(e, pattern, rest, absolute) {
        if (this.dot || !e.name.startsWith(".")) {
          if (!pattern.hasMore()) {
            this.matches.add(e, absolute, false);
          }
          if (e.canReaddir()) {
            if (this.follow || !e.isSymbolicLink()) {
              this.subwalks.add(e, pattern);
            } else if (e.isSymbolicLink()) {
              if (rest && pattern.checkFollowGlobstar()) {
                this.subwalks.add(e, rest);
              } else if (pattern.markFollowGlobstar()) {
                this.subwalks.add(e, pattern);
              }
            }
          }
        }
        if (rest) {
          const rp = rest.pattern();
          if (typeof rp === "string" && rp !== ".." && rp !== "" && rp !== ".") {
            this.testString(e, rp, rest.rest(), absolute);
          } else if (rp === "..") {
            const ep = e.parent || e;
            this.subwalks.add(ep, rest);
          } else if (rp instanceof RegExp) {
            this.testRegExp(e, rp, rest.rest(), absolute);
          }
        }
      }
      testRegExp(e, p, rest, absolute) {
        if (!p.test(e.name))
          return;
        if (!rest) {
          this.matches.add(e, absolute, false);
        } else {
          this.subwalks.add(e, rest);
        }
      }
      testString(e, p, rest, absolute) {
        if (!e.isNamed(p))
          return;
        if (!rest) {
          this.matches.add(e, absolute, false);
        } else {
          this.subwalks.add(e, rest);
        }
      }
    };
    exports2.Processor = Processor;
  }
});

// node_modules/glob/dist/commonjs/walker.js
var require_walker = __commonJS({
  "node_modules/glob/dist/commonjs/walker.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.GlobStream = exports2.GlobWalker = exports2.GlobUtil = void 0;
    var minipass_1 = require_commonjs3();
    var ignore_js_1 = require_ignore();
    var processor_js_1 = require_processor();
    var makeIgnore = (ignore, opts) => typeof ignore === "string" ? new ignore_js_1.Ignore([ignore], opts) : Array.isArray(ignore) ? new ignore_js_1.Ignore(ignore, opts) : ignore;
    var GlobUtil = class {
      path;
      patterns;
      opts;
      seen = /* @__PURE__ */ new Set();
      paused = false;
      aborted = false;
      #onResume = [];
      #ignore;
      #sep;
      signal;
      maxDepth;
      constructor(patterns, path, opts) {
        this.patterns = patterns;
        this.path = path;
        this.opts = opts;
        this.#sep = !opts.posix && opts.platform === "win32" ? "\\" : "/";
        if (opts.ignore) {
          this.#ignore = makeIgnore(opts.ignore, opts);
        }
        this.maxDepth = opts.maxDepth || Infinity;
        if (opts.signal) {
          this.signal = opts.signal;
          this.signal.addEventListener("abort", () => {
            this.#onResume.length = 0;
          });
        }
      }
      #ignored(path) {
        return this.seen.has(path) || !!this.#ignore?.ignored?.(path);
      }
      #childrenIgnored(path) {
        return !!this.#ignore?.childrenIgnored?.(path);
      }
      pause() {
        this.paused = true;
      }
      resume() {
        if (this.signal?.aborted)
          return;
        this.paused = false;
        let fn = void 0;
        while (!this.paused && (fn = this.#onResume.shift())) {
          fn();
        }
      }
      onResume(fn) {
        if (this.signal?.aborted)
          return;
        if (!this.paused) {
          fn();
        } else {
          this.#onResume.push(fn);
        }
      }
      async matchCheck(e, ifDir) {
        if (ifDir && this.opts.nodir)
          return void 0;
        let rpc;
        if (this.opts.realpath) {
          rpc = e.realpathCached() || await e.realpath();
          if (!rpc)
            return void 0;
          e = rpc;
        }
        const needStat = e.isUnknown() || this.opts.stat;
        const s = needStat ? await e.lstat() : e;
        if (this.opts.follow && this.opts.nodir && s?.isSymbolicLink()) {
          const target = await s.realpath();
          if (target && (target.isUnknown() || this.opts.stat)) {
            await target.lstat();
          }
        }
        return this.matchCheckTest(s, ifDir);
      }
      matchCheckTest(e, ifDir) {
        return e && (this.maxDepth === Infinity || e.depth() <= this.maxDepth) && (!ifDir || e.canReaddir()) && (!this.opts.nodir || !e.isDirectory()) && (!this.opts.nodir || !this.opts.follow || !e.isSymbolicLink() || !e.realpathCached()?.isDirectory()) && !this.#ignored(e) ? e : void 0;
      }
      matchCheckSync(e, ifDir) {
        if (ifDir && this.opts.nodir)
          return void 0;
        let rpc;
        if (this.opts.realpath) {
          rpc = e.realpathCached() || e.realpathSync();
          if (!rpc)
            return void 0;
          e = rpc;
        }
        const needStat = e.isUnknown() || this.opts.stat;
        const s = needStat ? e.lstatSync() : e;
        if (this.opts.follow && this.opts.nodir && s?.isSymbolicLink()) {
          const target = s.realpathSync();
          if (target && (target?.isUnknown() || this.opts.stat)) {
            target.lstatSync();
          }
        }
        return this.matchCheckTest(s, ifDir);
      }
      matchFinish(e, absolute) {
        if (this.#ignored(e))
          return;
        const abs = this.opts.absolute === void 0 ? absolute : this.opts.absolute;
        this.seen.add(e);
        const mark = this.opts.mark && e.isDirectory() ? this.#sep : "";
        if (this.opts.withFileTypes) {
          this.matchEmit(e);
        } else if (abs) {
          const abs2 = this.opts.posix ? e.fullpathPosix() : e.fullpath();
          this.matchEmit(abs2 + mark);
        } else {
          const rel = this.opts.posix ? e.relativePosix() : e.relative();
          const pre = this.opts.dotRelative && !rel.startsWith(".." + this.#sep) ? "." + this.#sep : "";
          this.matchEmit(!rel ? "." + mark : pre + rel + mark);
        }
      }
      async match(e, absolute, ifDir) {
        const p = await this.matchCheck(e, ifDir);
        if (p)
          this.matchFinish(p, absolute);
      }
      matchSync(e, absolute, ifDir) {
        const p = this.matchCheckSync(e, ifDir);
        if (p)
          this.matchFinish(p, absolute);
      }
      walkCB(target, patterns, cb) {
        if (this.signal?.aborted)
          cb();
        this.walkCB2(target, patterns, new processor_js_1.Processor(this.opts), cb);
      }
      walkCB2(target, patterns, processor, cb) {
        if (this.#childrenIgnored(target))
          return cb();
        if (this.signal?.aborted)
          cb();
        if (this.paused) {
          this.onResume(() => this.walkCB2(target, patterns, processor, cb));
          return;
        }
        processor.processPatterns(target, patterns);
        let tasks = 1;
        const next = () => {
          if (--tasks === 0)
            cb();
        };
        for (const [m, absolute, ifDir] of processor.matches.entries()) {
          if (this.#ignored(m))
            continue;
          tasks++;
          this.match(m, absolute, ifDir).then(() => next());
        }
        for (const t of processor.subwalkTargets()) {
          if (this.maxDepth !== Infinity && t.depth() >= this.maxDepth) {
            continue;
          }
          tasks++;
          const childrenCached = t.readdirCached();
          if (t.calledReaddir())
            this.walkCB3(t, childrenCached, processor, next);
          else {
            t.readdirCB((_, entries) => this.walkCB3(t, entries, processor, next), true);
          }
        }
        next();
      }
      walkCB3(target, entries, processor, cb) {
        processor = processor.filterEntries(target, entries);
        let tasks = 1;
        const next = () => {
          if (--tasks === 0)
            cb();
        };
        for (const [m, absolute, ifDir] of processor.matches.entries()) {
          if (this.#ignored(m))
            continue;
          tasks++;
          this.match(m, absolute, ifDir).then(() => next());
        }
        for (const [target2, patterns] of processor.subwalks.entries()) {
          tasks++;
          this.walkCB2(target2, patterns, processor.child(), next);
        }
        next();
      }
      walkCBSync(target, patterns, cb) {
        if (this.signal?.aborted)
          cb();
        this.walkCB2Sync(target, patterns, new processor_js_1.Processor(this.opts), cb);
      }
      walkCB2Sync(target, patterns, processor, cb) {
        if (this.#childrenIgnored(target))
          return cb();
        if (this.signal?.aborted)
          cb();
        if (this.paused) {
          this.onResume(() => this.walkCB2Sync(target, patterns, processor, cb));
          return;
        }
        processor.processPatterns(target, patterns);
        let tasks = 1;
        const next = () => {
          if (--tasks === 0)
            cb();
        };
        for (const [m, absolute, ifDir] of processor.matches.entries()) {
          if (this.#ignored(m))
            continue;
          this.matchSync(m, absolute, ifDir);
        }
        for (const t of processor.subwalkTargets()) {
          if (this.maxDepth !== Infinity && t.depth() >= this.maxDepth) {
            continue;
          }
          tasks++;
          const children = t.readdirSync();
          this.walkCB3Sync(t, children, processor, next);
        }
        next();
      }
      walkCB3Sync(target, entries, processor, cb) {
        processor = processor.filterEntries(target, entries);
        let tasks = 1;
        const next = () => {
          if (--tasks === 0)
            cb();
        };
        for (const [m, absolute, ifDir] of processor.matches.entries()) {
          if (this.#ignored(m))
            continue;
          this.matchSync(m, absolute, ifDir);
        }
        for (const [target2, patterns] of processor.subwalks.entries()) {
          tasks++;
          this.walkCB2Sync(target2, patterns, processor.child(), next);
        }
        next();
      }
    };
    exports2.GlobUtil = GlobUtil;
    var GlobWalker = class extends GlobUtil {
      matches;
      constructor(patterns, path, opts) {
        super(patterns, path, opts);
        this.matches = /* @__PURE__ */ new Set();
      }
      matchEmit(e) {
        this.matches.add(e);
      }
      async walk() {
        if (this.signal?.aborted)
          throw this.signal.reason;
        if (this.path.isUnknown()) {
          await this.path.lstat();
        }
        await new Promise((res, rej) => {
          this.walkCB(this.path, this.patterns, () => {
            if (this.signal?.aborted) {
              rej(this.signal.reason);
            } else {
              res(this.matches);
            }
          });
        });
        return this.matches;
      }
      walkSync() {
        if (this.signal?.aborted)
          throw this.signal.reason;
        if (this.path.isUnknown()) {
          this.path.lstatSync();
        }
        this.walkCBSync(this.path, this.patterns, () => {
          if (this.signal?.aborted)
            throw this.signal.reason;
        });
        return this.matches;
      }
    };
    exports2.GlobWalker = GlobWalker;
    var GlobStream = class extends GlobUtil {
      results;
      constructor(patterns, path, opts) {
        super(patterns, path, opts);
        this.results = new minipass_1.Minipass({
          signal: this.signal,
          objectMode: true
        });
        this.results.on("drain", () => this.resume());
        this.results.on("resume", () => this.resume());
      }
      matchEmit(e) {
        this.results.write(e);
        if (!this.results.flowing)
          this.pause();
      }
      stream() {
        const target = this.path;
        if (target.isUnknown()) {
          target.lstat().then(() => {
            this.walkCB(target, this.patterns, () => this.results.end());
          });
        } else {
          this.walkCB(target, this.patterns, () => this.results.end());
        }
        return this.results;
      }
      streamSync() {
        if (this.path.isUnknown()) {
          this.path.lstatSync();
        }
        this.walkCBSync(this.path, this.patterns, () => this.results.end());
        return this.results;
      }
    };
    exports2.GlobStream = GlobStream;
  }
});

// node_modules/glob/dist/commonjs/glob.js
var require_glob = __commonJS({
  "node_modules/glob/dist/commonjs/glob.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Glob = void 0;
    var minimatch_1 = require_commonjs();
    var path_scurry_1 = require_commonjs4();
    var url_1 = require("url");
    var pattern_js_1 = require_pattern();
    var walker_js_1 = require_walker();
    var defaultPlatform = typeof process === "object" && process && typeof process.platform === "string" ? process.platform : "linux";
    var Glob = class {
      absolute;
      cwd;
      root;
      dot;
      dotRelative;
      follow;
      ignore;
      magicalBraces;
      mark;
      matchBase;
      maxDepth;
      nobrace;
      nocase;
      nodir;
      noext;
      noglobstar;
      pattern;
      platform;
      realpath;
      scurry;
      stat;
      signal;
      windowsPathsNoEscape;
      withFileTypes;
      opts;
      patterns;
      constructor(pattern, opts) {
        if (!opts)
          throw new TypeError("glob options required");
        this.withFileTypes = !!opts.withFileTypes;
        this.signal = opts.signal;
        this.follow = !!opts.follow;
        this.dot = !!opts.dot;
        this.dotRelative = !!opts.dotRelative;
        this.nodir = !!opts.nodir;
        this.mark = !!opts.mark;
        if (!opts.cwd) {
          this.cwd = "";
        } else if (opts.cwd instanceof URL || opts.cwd.startsWith("file://")) {
          opts.cwd = (0, url_1.fileURLToPath)(opts.cwd);
        }
        this.cwd = opts.cwd || "";
        this.root = opts.root;
        this.magicalBraces = !!opts.magicalBraces;
        this.nobrace = !!opts.nobrace;
        this.noext = !!opts.noext;
        this.realpath = !!opts.realpath;
        this.absolute = opts.absolute;
        this.noglobstar = !!opts.noglobstar;
        this.matchBase = !!opts.matchBase;
        this.maxDepth = typeof opts.maxDepth === "number" ? opts.maxDepth : Infinity;
        this.stat = !!opts.stat;
        this.ignore = opts.ignore;
        if (this.withFileTypes && this.absolute !== void 0) {
          throw new Error("cannot set absolute and withFileTypes:true");
        }
        if (typeof pattern === "string") {
          pattern = [pattern];
        }
        this.windowsPathsNoEscape = !!opts.windowsPathsNoEscape || opts.allowWindowsEscape === false;
        if (this.windowsPathsNoEscape) {
          pattern = pattern.map((p) => p.replace(/\\/g, "/"));
        }
        if (this.matchBase) {
          if (opts.noglobstar) {
            throw new TypeError("base matching requires globstar");
          }
          pattern = pattern.map((p) => p.includes("/") ? p : `./**/${p}`);
        }
        this.pattern = pattern;
        this.platform = opts.platform || defaultPlatform;
        this.opts = { ...opts, platform: this.platform };
        if (opts.scurry) {
          this.scurry = opts.scurry;
          if (opts.nocase !== void 0 && opts.nocase !== opts.scurry.nocase) {
            throw new Error("nocase option contradicts provided scurry option");
          }
        } else {
          const Scurry = opts.platform === "win32" ? path_scurry_1.PathScurryWin32 : opts.platform === "darwin" ? path_scurry_1.PathScurryDarwin : opts.platform ? path_scurry_1.PathScurryPosix : path_scurry_1.PathScurry;
          this.scurry = new Scurry(this.cwd, {
            nocase: opts.nocase,
            fs: opts.fs
          });
        }
        this.nocase = this.scurry.nocase;
        const nocaseMagicOnly = this.platform === "darwin" || this.platform === "win32";
        const mmo = {
          ...opts,
          dot: this.dot,
          matchBase: this.matchBase,
          nobrace: this.nobrace,
          nocase: this.nocase,
          nocaseMagicOnly,
          nocomment: true,
          noext: this.noext,
          nonegate: true,
          optimizationLevel: 2,
          platform: this.platform,
          windowsPathsNoEscape: this.windowsPathsNoEscape,
          debug: !!this.opts.debug
        };
        const mms = this.pattern.map((p) => new minimatch_1.Minimatch(p, mmo));
        const [matchSet, globParts] = mms.reduce((set, m) => {
          set[0].push(...m.set);
          set[1].push(...m.globParts);
          return set;
        }, [[], []]);
        this.patterns = matchSet.map((set, i) => {
          const g = globParts[i];
          if (!g)
            throw new Error("invalid pattern object");
          return new pattern_js_1.Pattern(set, g, 0, this.platform);
        });
      }
      async walk() {
        return [
          ...await new walker_js_1.GlobWalker(this.patterns, this.scurry.cwd, {
            ...this.opts,
            maxDepth: this.maxDepth !== Infinity ? this.maxDepth + this.scurry.cwd.depth() : Infinity,
            platform: this.platform,
            nocase: this.nocase
          }).walk()
        ];
      }
      walkSync() {
        return [
          ...new walker_js_1.GlobWalker(this.patterns, this.scurry.cwd, {
            ...this.opts,
            maxDepth: this.maxDepth !== Infinity ? this.maxDepth + this.scurry.cwd.depth() : Infinity,
            platform: this.platform,
            nocase: this.nocase
          }).walkSync()
        ];
      }
      stream() {
        return new walker_js_1.GlobStream(this.patterns, this.scurry.cwd, {
          ...this.opts,
          maxDepth: this.maxDepth !== Infinity ? this.maxDepth + this.scurry.cwd.depth() : Infinity,
          platform: this.platform,
          nocase: this.nocase
        }).stream();
      }
      streamSync() {
        return new walker_js_1.GlobStream(this.patterns, this.scurry.cwd, {
          ...this.opts,
          maxDepth: this.maxDepth !== Infinity ? this.maxDepth + this.scurry.cwd.depth() : Infinity,
          platform: this.platform,
          nocase: this.nocase
        }).streamSync();
      }
      iterateSync() {
        return this.streamSync()[Symbol.iterator]();
      }
      [Symbol.iterator]() {
        return this.iterateSync();
      }
      iterate() {
        return this.stream()[Symbol.asyncIterator]();
      }
      [Symbol.asyncIterator]() {
        return this.iterate();
      }
    };
    exports2.Glob = Glob;
  }
});

// node_modules/glob/dist/commonjs/has-magic.js
var require_has_magic = __commonJS({
  "node_modules/glob/dist/commonjs/has-magic.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.hasMagic = void 0;
    var minimatch_1 = require_commonjs();
    var hasMagic = (pattern, options = {}) => {
      if (!Array.isArray(pattern)) {
        pattern = [pattern];
      }
      for (const p of pattern) {
        if (new minimatch_1.Minimatch(p, options).hasMagic())
          return true;
      }
      return false;
    };
    exports2.hasMagic = hasMagic;
  }
});

// node_modules/glob/dist/commonjs/index.js
var require_commonjs5 = __commonJS({
  "node_modules/glob/dist/commonjs/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.glob = exports2.hasMagic = exports2.Glob = exports2.unescape = exports2.escape = exports2.sync = exports2.iterate = exports2.iterateSync = exports2.stream = exports2.streamSync = exports2.globIterate = exports2.globIterateSync = exports2.globSync = exports2.globStream = exports2.globStreamSync = void 0;
    var minimatch_1 = require_commonjs();
    var glob_js_1 = require_glob();
    var has_magic_js_1 = require_has_magic();
    function globStreamSync(pattern, options = {}) {
      return new glob_js_1.Glob(pattern, options).streamSync();
    }
    exports2.globStreamSync = globStreamSync;
    function globStream(pattern, options = {}) {
      return new glob_js_1.Glob(pattern, options).stream();
    }
    exports2.globStream = globStream;
    function globSync(pattern, options = {}) {
      return new glob_js_1.Glob(pattern, options).walkSync();
    }
    exports2.globSync = globSync;
    async function glob_(pattern, options = {}) {
      return new glob_js_1.Glob(pattern, options).walk();
    }
    function globIterateSync(pattern, options = {}) {
      return new glob_js_1.Glob(pattern, options).iterateSync();
    }
    exports2.globIterateSync = globIterateSync;
    function globIterate(pattern, options = {}) {
      return new glob_js_1.Glob(pattern, options).iterate();
    }
    exports2.globIterate = globIterate;
    exports2.streamSync = globStreamSync;
    exports2.stream = Object.assign(globStream, { sync: globStreamSync });
    exports2.iterateSync = globIterateSync;
    exports2.iterate = Object.assign(globIterate, {
      sync: globIterateSync
    });
    exports2.sync = Object.assign(globSync, {
      stream: globStreamSync,
      iterate: globIterateSync
    });
    var minimatch_2 = require_commonjs();
    Object.defineProperty(exports2, "escape", { enumerable: true, get: function() {
      return minimatch_2.escape;
    } });
    Object.defineProperty(exports2, "unescape", { enumerable: true, get: function() {
      return minimatch_2.unescape;
    } });
    var glob_js_2 = require_glob();
    Object.defineProperty(exports2, "Glob", { enumerable: true, get: function() {
      return glob_js_2.Glob;
    } });
    var has_magic_js_2 = require_has_magic();
    Object.defineProperty(exports2, "hasMagic", { enumerable: true, get: function() {
      return has_magic_js_2.hasMagic;
    } });
    exports2.glob = Object.assign(glob_, {
      glob: glob_,
      globSync,
      sync: exports2.sync,
      globStream,
      stream: exports2.stream,
      globStreamSync,
      streamSync: exports2.streamSync,
      globIterate,
      iterate: exports2.iterate,
      globIterateSync,
      iterateSync: exports2.iterateSync,
      Glob: glob_js_1.Glob,
      hasMagic: has_magic_js_1.hasMagic,
      escape: minimatch_1.escape,
      unescape: minimatch_1.unescape
    });
    exports2.glob.glob = exports2.glob;
  }
});

// out/framework.js
var require_framework = __commonJS({
  "out/framework.js"(exports2) {
    "use strict";
    var __awaiter = exports2 && exports2.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.vueHelperDefinitionProvider = void 0;
    var vscode_12 = require("vscode");
    var fs = require("fs");
    var path = require("path");
    var util_1 = require_util();
    var frameworks_1 = require_frameworks();
    var snippets_html_1 = require_snippets_html();
    var snippets_js_1 = require_snippets_js();
    var paramCamse = (init_dist2(), __toCommonJS(dist_exports));
    var glob = require_commonjs5();
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
        this.explorer.context.subscriptions.push(vscode_12.languages.registerHoverProvider(["vue", "wxml"], new FrameworkHoverProvider(this)));
        this.explorer.context.subscriptions.push(vscode_12.languages.registerDefinitionProvider(["vue", "javascript", "html", "wxml"], new vueHelperDefinitionProvider(this)));
      }
    };
    exports2.default = FrameworkProvider;
    var FrameworkCompletionItemProvider = class {
      constructor(frameworkProvider) {
        this.attribute = {};
        this.jsTag = {};
        this.tag = {};
        this.globalAttribute = {};
        this.tagReg = /<([\w-]+)\s+/g;
        this.attrReg = /(?:\(|\s*)((\w(-)?)*)=['"][^'"]*/;
        this.frameworkProvider = frameworkProvider;
        this.attribute = (0, frameworks_1.getAttribute)(this.frameworkProvider.frameworks, this.frameworkProvider.explorer.tabSize);
        this.tag = (0, frameworks_1.getTag)(this.frameworkProvider.frameworks, this.frameworkProvider.explorer.tabSize);
        this.jsTag = (0, frameworks_1.getJsTag)(this.frameworkProvider.frameworks, this.frameworkProvider.explorer.tabSize);
        this.globalAttribute = (0, frameworks_1.getGlobalAttribute)(this.frameworkProvider.frameworks, this.frameworkProvider.explorer.tabSize);
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
            detail: this.frameworkProvider.explorer.name,
            kind: vscode_12.CompletionItemKind.Value
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
        completionItem.detail = this.frameworkProvider.explorer.name;
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
          let files = this.frameworkProvider.explorer.traverse.search("", search, false);
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
          detail: this.frameworkProvider.explorer.name,
          documentation: ""
        };
      }
      getTagJsSuggestion() {
        let suggestions = [];
        let id = 1;
        const useVueSnippets = this.frameworkProvider.explorer.store.get("use-vue-snippets");
        if (useVueSnippets) {
          const snippetsJs = (0, snippets_js_1.default)(this.frameworkProvider.explorer.tabSize);
          for (const key in snippetsJs) {
            const snippet = snippetsJs[key];
            suggestions.push({
              label: key,
              sortText: `0${id}${key}`,
              insertText: new vscode_12.SnippetString(snippet),
              kind: vscode_12.CompletionItemKind.Snippet,
              detail: this.frameworkProvider.explorer.name
            });
            id++;
          }
        }
        try {
          for (let tag in this.jsTag) {
            const tagItem = this.jsTag[tag];
            suggestions.push({
              label: tag,
              sortText: `00${id}${tag}`,
              insertText: new vscode_12.SnippetString(tagItem),
              kind: vscode_12.CompletionItemKind.Snippet,
              detail: this.frameworkProvider.explorer.name,
              documentation: tagItem
            });
            id++;
          }
        } catch (_error) {
        }
        return suggestions;
      }
      addLocalComponentSuggestions() {
        let suggestions = [];
        if (vscode_12.window.activeTextEditor) {
          let activeEditorPath = this.frameworkProvider.explorer.getActiveEditorDir(vscode_12.window.activeTextEditor.document.uri.path);
          for (let i = 0; i < this.frameworkProvider.explorer.vueFiles.length; i++) {
            const vf = this.frameworkProvider.explorer.vueFiles[i];
            suggestions.push({
              label: vf.name,
              sortText: `0${i}${vf.name}`,
              insertText: new vscode_12.SnippetString(`${vf.name}$0></${vf.name}>`),
              kind: vscode_12.CompletionItemKind.Folder,
              detail: this.frameworkProvider.explorer.name,
              documentation: `import ${vf.name} from '${this.frameworkProvider.explorer.getVueRelativePath(activeEditorPath, vf.path)}'`,
              command: { command: `${this.frameworkProvider.explorer.name}.funcEnhance`, title: `${this.frameworkProvider.explorer.name}.funcEnhance` }
            });
          }
        }
        return suggestions;
      }
      getTagSuggestion() {
        let suggestions = this.addLocalComponentSuggestions();
        let id = 1;
        const useVueSnippets = this.frameworkProvider.explorer.store.get("use-vue-snippets");
        if (useVueSnippets) {
          const snippetsHtml = (0, snippets_html_1.default)(this.frameworkProvider.explorer.tabSize);
          for (const key in snippetsHtml) {
            const snippet = snippetsHtml[key];
            suggestions.push({
              label: key,
              sortText: `0${id}${key}`,
              insertText: new vscode_12.SnippetString(snippet),
              kind: vscode_12.CompletionItemKind.Snippet,
              detail: this.frameworkProvider.explorer.name
            });
            id++;
          }
        }
        try {
          for (let tag in this.tag) {
            suggestions.push(this.buildTagSuggestion(tag, this.tag[tag], id));
            id++;
          }
        } catch (_error) {
        }
        return suggestions;
      }
      getElementTagLabelSuggestion() {
        let suggestions = this.addLocalComponentSuggestions();
        let id = 1;
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
                detail: this.frameworkProvider.explorer.name
              });
              id++;
            }
          }
        } catch (_error) {
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
          return this.getAttrValueSuggestion(tag.text, attr);
        } else if (tag) {
          if (this.attribute[tag.text]) {
            return this.getAttrSuggestion(tag.text, document, position);
          } else {
            return this.getPropAttr(document, tag.text);
          }
        } else if (this.isImport(document, position)) {
          return this.importSuggestion(document, position);
        } else if (word[0] === "e" || word[0] === "a") {
          return this.notInTemplate(document, position) ? this.getTagJsSuggestion() : this.getTagSuggestion();
        } else if (word.includes("v")) {
          return this.notInTemplate(document, position) ? this.getTagJsSuggestion() : this.getTagSuggestion();
        } else if (!tag && hasSquareQuote) {
          return this.notInTemplate(document, position) ? [] : this.getElementTagLabelSuggestion();
        }
        return [];
      }
    };
    var FrameworkHoverProvider = class {
      constructor(frameworkProvider) {
        this.frameworkProvider = frameworkProvider;
        this.document = (0, frameworks_1.getDocument)(this.frameworkProvider.frameworks, this.frameworkProvider.explorer.tabSize);
      }
      getTag(document, position) {
        let line = position.line;
        let tagName = "";
        while (line > 0 && !tagName) {
          let lineInfo = document.lineAt(line);
          let text = lineInfo.text.trim();
          if (line === position.line) {
            text = text.substring(0, position.character);
          }
          let txtArr = text.match(/<[^(>/)]+/gim);
          if (txtArr) {
            for (let i = txtArr.length - 1; i >= 0; i--) {
              if (txtArr[i][0] === "<" && txtArr[i][1] !== "/") {
                if (txtArr[i].indexOf(" ") !== -1) {
                  tagName = txtArr[i].replace(/^<(\S*)(\s.*|\s*)/gi, "$1");
                } else {
                  tagName = txtArr[i].replace(/^<(.*)/gi, "$1");
                }
                break;
              }
            }
          }
          --line;
        }
        return tagName;
      }
      provideHover(document, position) {
        let word = (0, util_1.getWord)(document, position, [" ", "<", ">", '"', "'", ".", "\\", "=", ":"]);
        if (this.document[word.selectText]) {
          return new vscode_12.Hover(this.document[word.selectText]);
        }
        return null;
      }
    };
    var vueHelperDefinitionProvider = class {
      constructor(frameworkProvider) {
        this.VUE_ATTR = {
          props: 1,
          computed: 2,
          methods: 3,
          watch: 4,
          beforeCreate: 5,
          created: 6,
          beforeMount: 7,
          mounted: 8,
          beforeUpdate: 9,
          updated: 10,
          activated: 11,
          deactivated: 12,
          beforeDestroy: 13,
          destroyed: 14,
          directives: 15,
          filters: 16,
          components: 17,
          data: 18
        };
        this.frameworkProvider = frameworkProvider;
      }
      getDefinitionPosition(lineText) {
        const pathRegs = [
          /import\s+.*\s+from\s+['"](.*)['"]/,
          /import\s*[^'"]*\(['"](.*)['"]\)[^'"]*/,
          /.*require\s*\([^'"]*['"](.*)['"][^'"]*\)/,
          /import\s+['"](.*)['"]/,
          /import\s*\([^'"]*(?:\/\*.*\*\/)\s*['"](.*)['"][^'"]\)*/
        ];
        let execResult;
        for (const pathReg of pathRegs) {
          execResult = pathReg.exec(lineText);
          if (execResult && execResult[1]) {
            const filePath = execResult[1];
            return {
              path: filePath
            };
          }
        }
      }
      getPlugin(plugin) {
        return __awaiter(this, void 0, void 0, function* () {
          return yield new Promise((resolve, reject) => {
            fs.readFile(vscode_12.workspace.rootPath + path.sep + "package.json", "utf8", (err, data) => {
              if (err)
                reject(err);
              let ret = "";
              let p = {};
              try {
                p = JSON.parse(data);
              } catch (_e) {
              }
              if (Array.isArray(plugin)) {
                let framework = plugin;
                for (let i = 0; i < framework.length; i++) {
                  const frame = framework[i];
                  if (p.dependencies && p.dependencies[frame] || p.devDependencies && p.devDependencies[frame]) {
                    ret = frame;
                  }
                }
              } else {
                let pluginArr = plugin.split("/");
                if (pluginArr.length === 1 && (p.dependencies && p.dependencies[plugin]) || p.devDependencies && p.devDependencies[plugin]) {
                  ret = plugin;
                } else if (pluginArr.length > 1 && (p.dependencies && p.dependencies[pluginArr[0]]) || p.devDependencies && p.devDependencies[pluginArr[0]]) {
                  ret = plugin;
                }
              }
              if (ret) {
                resolve(ret);
              } else {
                resolve("");
              }
            });
          });
        });
      }
      readDir(dir, selectText, frame) {
        return __awaiter(this, void 0, void 0, function* () {
          return yield new Promise((resolve, reject) => {
            fs.readdir(dir, "utf8", (err, files) => {
              if (err)
                reject(err);
              if (files.indexOf(selectText.toLowerCase()) !== -1) {
                if (frame === "iview") {
                  let prePath = dir + path.sep + selectText.toLowerCase() + path.sep;
                  let vuePath = prePath + selectText.toLowerCase() + ".vue";
                  let indexPath = prePath + "index.js";
                  if (fs.existsSync(vuePath)) {
                    resolve(vuePath);
                  } else if (fs.existsSync(indexPath)) {
                    resolve(indexPath);
                  } else {
                    resolve("");
                  }
                } else if (frame === "element-ui") {
                  let prePath = dir + path.sep + selectText.replace(/^el-/gi, "") + path.sep;
                  let mainPath = prePath + "src" + path.sep + "main.vue";
                  let vuePath = prePath + "src" + path.sep + selectText + ".vue";
                  let indexPath = prePath + "index.js";
                  if (fs.existsSync(mainPath)) {
                    resolve(mainPath);
                  } else if (fs.existsSync(vuePath)) {
                    resolve(vuePath);
                  } else if (fs.existsSync(indexPath)) {
                    resolve(indexPath);
                  } else {
                    resolve("");
                  }
                }
              } else {
                resolve("");
              }
            });
          });
        });
      }
      definitionPlugin(selectText) {
        return __awaiter(this, void 0, void 0, function* () {
          let frame = yield this.getPlugin(["iview", "element-ui"]);
          if (frame === "iview") {
            return yield this.readDir(vscode_12.workspace.rootPath + path.sep + "node_modules" + path.sep + "iview" + path.sep + "src" + path.sep + "components", paramCamse(selectText), frame);
          } else if (frame === "element-ui") {
            return yield this.readDir(vscode_12.workspace.rootPath + path.sep + "node_modules" + path.sep + "element-ui" + path.sep + "packages", paramCamse(selectText).replace(/^el-/gi, ""), frame);
          } else {
            return "";
          }
        });
      }
      getMain(rootPath) {
        return __awaiter(this, void 0, void 0, function* () {
          return yield new Promise((resolve, reject) => {
            fs.readFile(rootPath + "package.json", "utf8", (err, data) => {
              if (err)
                reject(err);
              let p = {};
              try {
                p = JSON.parse(data);
              } catch (_e) {
              }
              if (p.main) {
                resolve(p.main);
              } else {
                resolve("");
              }
            });
          });
        });
      }
      definitionOutFile(document, file) {
        return __awaiter(this, void 0, void 0, function* () {
          let filePath = file.path;
          let isAbsolute = false;
          if (filePath.includes(this.frameworkProvider.explorer.prefix.alias)) {
            isAbsolute = true;
          }
          filePath = filePath.replace(this.frameworkProvider.explorer.prefix.alias, this.frameworkProvider.explorer.prefix.path);
          if (/(.*\/.*|[^.]+)\..*$/gi.test(filePath)) {
            let tempFile = "";
            if (isAbsolute) {
              tempFile = path.join(this.frameworkProvider.explorer.projectRootPath, filePath);
            } else {
              tempFile = path.join(document.uri.path || "", "../", filePath);
            }
            if (fs.existsSync(tempFile)) {
              return Promise.resolve(new vscode_12.Location(vscode_12.Uri.file(tempFile), new vscode_12.Position(0, 0)));
            }
          } else {
            const postfix = ["vue", "js", "css", "scss", "less"];
            for (let i = 0; i < postfix.length; i++) {
              const post = postfix[i];
              let tempFile = "";
              if (isAbsolute) {
                tempFile = path.join(this.frameworkProvider.explorer.projectRootPath, filePath);
              } else {
                tempFile = path.join(document.uri.path || "", "../", filePath);
              }
              if (tempFile.endsWith(path.sep)) {
                tempFile = tempFile + "index." + post;
                if (fs.existsSync(tempFile)) {
                  return Promise.resolve(new vscode_12.Location(vscode_12.Uri.file(tempFile), new vscode_12.Position(0, 0)));
                }
              } else {
                let indexFile = tempFile + path.sep + "index." + post;
                tempFile += "." + post;
                tempFile = (0, util_1.winRootPathHandle)(tempFile);
                if (fs.existsSync(tempFile)) {
                  return Promise.resolve(new vscode_12.Location(vscode_12.Uri.file(tempFile), new vscode_12.Position(0, 0)));
                }
                if (fs.existsSync(indexFile)) {
                  return Promise.resolve(new vscode_12.Location(vscode_12.Uri.file(indexFile), new vscode_12.Position(0, 0)));
                }
              }
            }
          }
          let plugin = yield this.getPlugin(filePath);
          let pluginRootPath = vscode_12.workspace.rootPath + path.sep + "node_modules" + path.sep + plugin + path.sep;
          let pluginOwn = vscode_12.workspace.rootPath + path.sep + "node_modules" + path.sep + plugin + ".js";
          let pluginPath = pluginRootPath + "index.js";
          if (fs.existsSync(pluginOwn)) {
            return Promise.resolve(new vscode_12.Location(vscode_12.Uri.file(pluginOwn), new vscode_12.Position(0, 0)));
          } else if (fs.existsSync(pluginPath)) {
            return Promise.resolve(new vscode_12.Location(vscode_12.Uri.file(pluginPath), new vscode_12.Position(0, 0)));
          }
          let main = yield this.getMain(pluginRootPath);
          if (main) {
            return Promise.resolve(new vscode_12.Location(vscode_12.Uri.file(pluginRootPath + main), new vscode_12.Position(0, 0)));
          }
          return Promise.resolve(null);
        });
      }
      definitionInFile(document, position) {
        return __awaiter(this, void 0, void 0, function* () {
          const word = (0, util_1.getWord)(document, position, [" ", "<", ">", '"', "'", ".", "\\", "=", ":", "@", "(", ")", "[", "]", "{", "}", ",", "!"]);
          let pos = 0;
          let begin = false;
          let lineText = "";
          let braceLeftCount = 0;
          let attr = "";
          let searchType = "";
          if (word.startText === "<") {
            searchType = "components";
          }
          while (pos < document.lineCount && !/^\s*<\/script>\s*$/g.test(lineText)) {
            lineText = document.lineAt(++pos).text;
            if (!begin) {
              if (/^\s*<script.*>\s*$/g.test(lineText)) {
                begin = true;
              }
              continue;
            }
            let keyWord = lineText.replace(/\s*(\w*)\s*(\(\s*\)|:|(:\s*function\s*\(\s*\)))\s*{\s*/gi, "$1");
            if (this.VUE_ATTR[keyWord] !== void 0 && braceLeftCount === 0) {
              attr = keyWord;
              braceLeftCount = 0;
            }
            if (searchType === "components") {
              let tag = word.selectText.toLowerCase().replace(/-/gi, "");
              if (attr) {
                for (let i = 0; i < this.frameworkProvider.explorer.vueFiles.length; i++) {
                  const vueFile = this.frameworkProvider.explorer.vueFiles[i];
                  const vueFileName = vueFile.name.toLowerCase().replace(/-/gi, "");
                  if (vueFileName === tag) {
                    return Promise.resolve(new vscode_12.Location(vscode_12.Uri.file(path.join(this.frameworkProvider.explorer.projectRootPath, vueFile.path.replace(this.frameworkProvider.explorer.prefix.alias, this.frameworkProvider.explorer.prefix.path))), new vscode_12.Position(0, 0)));
                  }
                }
                let retPath = yield this.definitionPlugin(word.selectText);
                if (retPath) {
                  return Promise.resolve(new vscode_12.Location(vscode_12.Uri.file(retPath), new vscode_12.Position(0, 0)));
                }
                break;
              } else {
                if (lineText.toLowerCase().includes(tag) && (lineText.trim().indexOf("import") === 0 || lineText.trim().indexOf("require") === 0)) {
                  return this.definitionOutFile(document, this.getDefinitionPosition(lineText));
                }
              }
            } else {
              let braceLeftList = lineText.match(/{/gi);
              let braceRightList = lineText.match(/}/gi);
              if (attr === "data" && braceLeftCount >= 2) {
                let matchName = lineText.replace(/\s*(\w+):.+/gi, "$1");
                if (word.selectText === matchName && braceLeftCount === 2) {
                  return Promise.resolve(new vscode_12.Location(document.uri, new vscode_12.Position(pos, lineText.indexOf(matchName) + matchName.length)));
                }
                let braceLeft = braceLeftList ? braceLeftList.length : 0;
                let braceRight = braceRightList ? braceRightList.length : 0;
                braceLeftCount += braceLeft - braceRight;
              } else if (attr) {
                let matchName = lineText.replace(/\s*(async\s*)?(\w*)\s*(:|\().*/gi, "$2");
                if (word.selectText === matchName && braceLeftCount === 1) {
                  return Promise.resolve(new vscode_12.Location(document.uri, new vscode_12.Position(pos, lineText.indexOf(matchName) + matchName.length)));
                }
                let braceLeft = braceLeftList ? braceLeftList.length : 0;
                let braceRight = braceRightList ? braceRightList.length : 0;
                braceLeftCount += braceLeft - braceRight;
              }
              if (attr === "data") {
                if (/\s*return\s*{\s*/gi.test(lineText)) {
                  braceLeftCount = 2;
                }
              }
            }
          }
          let files = glob.sync(vscode_12.workspace.rootPath + "/!(node_modules)/**/*.vue");
          for (let i = 0; i < files.length; i++) {
            const vueFile = files[i];
            let vueChangeFile = vueFile.replace(/-/gi, "").toLowerCase().replace(/\.vue$/, "");
            if (vueChangeFile.endsWith("/" + word.selectText.toLowerCase().replace(/-/gi, ""))) {
              return Promise.resolve(new vscode_12.Location(vscode_12.Uri.file(vueFile), new vscode_12.Position(0, 0)));
            }
          }
          return Promise.resolve(null);
        });
      }
      provideDefinition(document, position, _token) {
        let docText = document.getText();
        const line = document.lineAt(position.line);
        let file = this.getDefinitionPosition(line.text);
        if (file) {
          return this.definitionOutFile(document, file);
        } else {
          if (!(docText.includes('lang="ts"') || this.frameworkProvider.explorer.isTs)) {
            return this.definitionInFile(document, position);
          }
        }
        return [];
      }
    };
    exports2.vueHelperDefinitionProvider = vueHelperDefinitionProvider;
  }
});

// out/assist.js
var require_assist = __commonJS({
  "out/assist.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var vscode_12 = require("vscode");
    var Assist = class {
      constructor(explorer) {
        this.explorer = explorer;
      }
      register() {
        this.explorer.context.subscriptions.push(vscode_12.commands.registerCommand("vue-helper.blockSelect", () => {
          this.blockSelect();
        }));
        this.explorer.context.subscriptions.push(vscode_12.commands.registerCommand("vue-helper.funcEnhance", () => {
          this.funcEnhance();
        }));
      }
      funcEnhance() {
        var _a, _b, _c, _d;
        let editor = vscode_12.window.activeTextEditor;
        if (!editor) {
          return;
        }
        let character = (((_a = vscode_12.window.activeTextEditor) === null || _a === void 0 ? void 0 : _a.selection.anchor.character) || 0) - 1;
        let txt = (_b = vscode_12.window.activeTextEditor) === null || _b === void 0 ? void 0 : _b.document.lineAt((_c = vscode_12.window.activeTextEditor) === null || _c === void 0 ? void 0 : _c.selection.anchor.line).text;
        let word = "";
        let isWordEnd = false;
        let type = "";
        if (txt && txt.includes('"')) {
          type = "0";
        }
        while (txt && character && character > 0) {
          let wordSingle = txt[character];
          if (wordSingle === '"') {
            type = "0";
            isWordEnd = true;
          }
          if (wordSingle === " ") {
            break;
          }
          if (!isWordEnd) {
            word = wordSingle + word;
          }
          if (wordSingle === "@") {
            type = "1";
          }
          --character;
        }
        character = ((_d = vscode_12.window.activeTextEditor) === null || _d === void 0 ? void 0 : _d.selection.anchor.character) || 0;
        while (txt && character && txt.length > character) {
          if (txt[character] === '"') {
            break;
          }
          word = word + txt[character];
          ++character;
        }
        if (word.includes(")")) {
          type = "1";
        }
        switch (type) {
          default:
            this.autoEnhance();
            break;
        }
      }
      autoEnhance() {
        let editor = vscode_12.window.activeTextEditor;
        if (!editor) {
          return;
        }
        let txt = editor.document.lineAt(editor.selection.anchor.line).text;
        if (editor.document.lineCount <= editor.selection.anchor.line + 1) {
          return;
        }
        if (/<.*>\s?<\/.*>/gi.test(txt.trim()) || /<.*\/>/gi.test(txt.trim())) {
          this.autoImportComponent(txt, editor, editor.selection.anchor.line);
          return;
        }
        let nextLineTxt = editor.document.lineAt(editor.selection.anchor.line + 1).text;
        let baseEmpty = txt.replace(/(\s)\S.*/gi, "$1");
        let replaceTxt = ` {
${baseEmpty}${this.explorer.tabSize}
${baseEmpty}}`;
        if (/^\s*$/gi.test(txt) || txt === "") {
          replaceTxt = "name (params)" + replaceTxt;
        } else if (/[0-9a-zA-Z]\s{0,1}:\s{0,1}[\w\"\']/gi.test(txt)) {
          replaceTxt = ",\n" + baseEmpty;
        } else if (txt.indexOf(")") === -1) {
          replaceTxt = " (params)" + replaceTxt;
        }
        if (/\s*\/\/\s+.*/gi.test(nextLineTxt)) {
          if (editor.document.lineCount <= editor.selection.anchor.line + 2) {
            return;
          }
          nextLineTxt = editor.document.lineAt(editor.selection.anchor.line + 2).text;
        }
        if (/.*(.*).*{.*/gi.test(nextLineTxt)) {
          let isCond = false;
          let txtTrim = txt.trim();
          const condList = ["if", "for", "while", "switch"];
          condList.forEach((cond) => {
            if (txtTrim.indexOf(cond) === 0) {
              isCond = true;
            }
          });
          if (!isCond) {
            replaceTxt += ",";
          }
        }
        editor.edit((editBuilder) => {
          editBuilder.insert(new vscode_12.Position(editor.selection.anchor.line, txt.length + 1), replaceTxt);
        });
        let newPosition = editor.selection.active.translate(1, (baseEmpty + this.explorer.tabSize).length);
        editor.selection = new vscode_12.Selection(newPosition, newPosition);
      }
      autoImportComponent(txt, editor, line) {
        let tag = txt.trim().replace(/<([\w-]*)[\s>].*/gi, "$1");
        for (let i = 0; i < this.explorer.vueFiles.length; i++) {
          const vf = this.explorer.vueFiles[i];
          if (tag === vf.name) {
            let name = vf.name;
            if (editor.document.getText().includes(`import ${name}`)) {
              return;
            }
            let countLine = editor.document.lineCount;
            while (!/^\s*<script.*>\s*$/.test(editor.document.lineAt(line).text)) {
              if (countLine > line) {
                line++;
              } else {
                break;
              }
            }
            let activeEditorPath = this.explorer.getActiveEditorDir(editor.document.uri.path);
            let importString = `import ${name} from '${this.explorer.getVueRelativePath(activeEditorPath, vf.path)}'
`;
            if (editor.document.lineAt(line).text.includes("setup")) {
              editor.edit((editBuilder) => {
                importString = importString.replace(/\\/gi, "/");
                editBuilder.insert(new vscode_12.Position(line + 1, 0), importString);
              });
              return;
            }
            if (editor.document.lineAt(line + 1).text.includes("export default")) {
              line += 1;
            } else {
              line += 1;
              if (countLine < line) {
                return;
              }
              while (/import /gi.test(editor.document.lineAt(line).text.trim())) {
                if (countLine > line) {
                  line++;
                } else {
                  break;
                }
              }
            }
            let importLine = line;
            if (line < countLine) {
              let prorityInsertLine = 0;
              let secondInsertLine = 0;
              let hasComponents = false;
              let baseEmpty = "";
              while (!/\s*<\/script>\s*/gi.test(editor.document.lineAt(line).text.trim())) {
                if (/\s*components\s*:\s*{.*}.*/gi.test(editor.document.lineAt(line).text.trim())) {
                  let text = editor.document.lineAt(line).text;
                  let preText = text.replace(/\s*}.*$/, "");
                  let insertPos = preText.length;
                  editor.edit((editBuilder) => {
                    importString = importString.replace(/\\/gi, "/");
                    editBuilder.insert(new vscode_12.Position(importLine, 0), importString);
                    editBuilder.insert(new vscode_12.Position(line, insertPos), ", " + name);
                  });
                  break;
                }
                if (hasComponents && /\s*},?\s*$/gi.test(editor.document.lineAt(line).text.trim())) {
                  let text = editor.document.lineAt(line - 1).text;
                  let insertPos = text.indexOf(text.trim());
                  let empty = "";
                  for (let i2 = 0; i2 < insertPos; i2++) {
                    empty += " ";
                  }
                  editor.edit((editBuilder) => {
                    importString = importString.replace(/\\/gi, "/");
                    editBuilder.insert(new vscode_12.Position(importLine, 0), importString);
                    editBuilder.insert(new vscode_12.Position(line - 1, editor.document.lineAt(line - 1).text.length), ",\n" + empty + name);
                  });
                  break;
                }
                if (/\s*components\s*:\s*{\s*$/gi.test(editor.document.lineAt(line).text.trim())) {
                  hasComponents = true;
                }
                if (/\s*export\s*default\s*{\s*/gi.test(editor.document.lineAt(line).text.trim())) {
                  secondInsertLine = line;
                }
                if (/\s*data\s*\(\s*\)\s*{\s*/gi.test(editor.document.lineAt(line).text.trim())) {
                  let text = editor.document.lineAt(line).text;
                  let insertPos = text.indexOf(text.trim());
                  for (let i2 = 0; i2 < insertPos; i2++) {
                    baseEmpty += "";
                  }
                  prorityInsertLine = line;
                }
                if (countLine > line) {
                  line++;
                } else {
                  break;
                }
              }
              if (prorityInsertLine > 0) {
                editor.edit((editBuilder) => {
                  importString = importString.replace(/\\/gi, "/");
                  editBuilder.insert(new vscode_12.Position(importLine - 1, 0), importString);
                  editBuilder.insert(new vscode_12.Position(prorityInsertLine - 1, editor.document.lineAt(prorityInsertLine - 1).text.length), `
	${baseEmpty}components: { ${name} },`);
                });
                break;
              }
              if (secondInsertLine > 0) {
                editor.edit((editBuilder) => {
                  importString = importString.replace(/\\/gi, "/");
                  editBuilder.insert(new vscode_12.Position(importLine, 0), importString);
                  editBuilder.insert(new vscode_12.Position(secondInsertLine, editor.document.lineAt(secondInsertLine).text.length), `
${this.explorer.tabSize}components: { ${name} },`);
                });
              }
            }
            break;
          }
        }
      }
      blockSelect() {
        let editor = vscode_12.window.activeTextEditor;
        if (!editor) {
          return;
        }
        let startPosition = editor.selection.start;
        let lineTextObj = editor.document.lineAt(startPosition.line);
        let lineText = lineTextObj.text;
        if (lineText.length > 0 && startPosition.character === 0 && lineText[startPosition.character] === "[") {
          this.selectJsBlock(editor, lineText.substring(startPosition.character, lineText.length), startPosition, "array");
        } else if (lineText.length > 0 && startPosition.character > 0 && lineText[startPosition.character - 1] === "[") {
          this.selectJsBlock(editor, lineText.substring(startPosition.character - 1, lineText.length), new vscode_12.Position(startPosition.line, startPosition.character - 1), "array");
        } else if (lineText.length > 0 && startPosition.character < lineText.length && lineText[startPosition.character] === "[") {
          this.selectJsBlock(editor, lineText.substring(startPosition.character, lineText.length), startPosition, "array");
        } else if (lineText.length > 0 && startPosition.character === 0 && lineText[startPosition.character] === "{") {
          this.selectJsBlock(editor, lineText.substring(startPosition.character, lineText.length), startPosition, "json");
        } else if (lineText.length > 0 && startPosition.character > 0 && lineText[startPosition.character - 1] === "{") {
          this.selectJsBlock(editor, lineText.substring(startPosition.character - 1, lineText.length), new vscode_12.Position(startPosition.line, startPosition.character - 1), "json");
        } else if (lineText.length > 0 && startPosition.character < lineText.length && lineText[startPosition.character] === "{") {
          this.selectJsBlock(editor, lineText.substring(startPosition.character, lineText.length), startPosition, "json");
        } else if (lineText.trim().length > 0 && lineText.trim()[0] === "<" && startPosition.character <= lineText.indexOf("<")) {
          lineText = lineText.substring(startPosition.character, lineText.length);
          this.selectHtmlBlock(editor, lineText, startPosition);
        } else if (lineText.trim().length > 0 && lineText.trim()[0] === "<" && startPosition.character <= lineText.indexOf("<")) {
          lineText = lineText.substring(startPosition.character, lineText.length);
          this.selectHtmlBlock(editor, lineText, startPosition);
        } else if (/^\s*[\sa-zA-Z:_-]*\s*\[\s*$/gi.test(lineText)) {
          this.selectJsBlock(editor, lineText, new vscode_12.Position(startPosition.line, lineText.length - lineText.replace(/\s*/, "").length), "array");
        } else if (lineText.trim().length > 0 && /(function|if|for|while)?.+\(.*\)\s*{/gi.test(lineText) && /^\s*(function|if|for|while)?\s*$/g.test(lineText.substr(0, startPosition.character)) || /^(\s*[\sa-zA-Z_-]*\([\sa-zA-Z_-]*\)\s*{\s*)|(\s*[\sa-zA-Z:_-]*\s*{\s*)$/gi.test(lineText) && /^\s*(function|if|for|while)?\s*$/g.test(lineText.substr(0, startPosition.character))) {
          this.selectJsBlock(editor, lineText, new vscode_12.Position(startPosition.line, lineText.length - lineText.replace(/\s*/, "").length), "function");
        } else {
          this.selectLineBlock(editor, lineText, startPosition);
        }
        return;
      }
      selectJsBlock(editor, lineText, startPosition, type) {
        let lineCount = editor.document.lineCount;
        let lineCurrent = startPosition.line;
        let braceLeftCount = 0;
        let tagLeft = "{";
        let tagRight = "}";
        if (type === "array") {
          tagLeft = "[";
          tagRight = "]";
        }
        while (lineCurrent <= lineCount) {
          let pos = 0;
          while ((lineText.indexOf(tagLeft, pos) !== -1 || lineText.indexOf(tagRight, pos) !== -1) && pos < lineText.length) {
            let i = -1;
            if (lineText.indexOf(tagLeft, pos) !== -1) {
              i = lineText.indexOf(tagLeft, pos);
            }
            if (lineText.indexOf(tagRight, pos) !== -1) {
              if (i === -1 || i > lineText.indexOf(tagRight, pos)) {
                --braceLeftCount;
                pos = lineText.indexOf(tagRight, pos) + 1;
              } else {
                ++braceLeftCount;
                pos = i + 1;
              }
            } else {
              if (i !== -1) {
                ++braceLeftCount;
                pos = i + 1;
              }
            }
            if (braceLeftCount === 0) {
              break;
            }
          }
          if (braceLeftCount === 0) {
            let extra = 0;
            let textExtra = editor.document.lineAt(lineCurrent).text;
            if (lineCurrent === startPosition.line) {
              extra = textExtra.indexOf(lineText);
            }
            if (type === "function" && textExtra[pos + extra - 1] === "}" && textExtra[pos + extra] === ")") {
              extra += 1;
            }
            editor.selection = new vscode_12.Selection(startPosition, new vscode_12.Position(lineCurrent, pos + extra));
            return;
          }
          ++lineCurrent;
          if (lineCount >= lineCurrent) {
            lineText = editor.document.lineAt(lineCurrent).text;
          }
        }
        return;
      }
      selectHtmlBlock(editor, lineText, startPosition) {
        const ncname = "[a-zA-Z_][\\w\\-\\.]*";
        const qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
        const startTagOpen = new RegExp("^<" + qnameCapture);
        const endTag = new RegExp("^(<\\/" + qnameCapture + "[^>]*>)");
        const comment = /^<!--/;
        const commentEnd = "-->";
        const lineCount = editor.document.lineCount;
        let lineCurrent = startPosition.line;
        let isNoIncludeTag = false;
        let tagStack = null;
        let col = lineText.indexOf(lineText.trim()) + startPosition.character;
        let beginPosition = new vscode_12.Position(startPosition.line, startPosition.character + lineText.length - lineText.replace(/\s*(.*)/, "$1").length);
        lineText = lineText.trim();
        let noIncludeTags = ["input", "img"];
        while (lineText) {
          let textTagPos = lineText.indexOf("<");
          if (textTagPos === 0) {
            let hasEndTag = false;
            let hasTag = false;
            if (comment.test(lineText)) {
              let commentIndex = lineText.indexOf(commentEnd);
              while (commentIndex === -1 && lineCurrent < lineCount) {
                lineText = editor.document.lineAt(++lineCurrent).text;
                commentIndex = lineText.indexOf(commentEnd);
              }
              lineText = lineText.substr(commentIndex + 3, lineText.length);
            }
            const endTagMatch = lineText.match(endTag);
            if (endTagMatch) {
              hasEndTag = true;
              if (Array.isArray(tagStack)) {
                let tagIndex = tagStack.length;
                if (tagIndex > 0) {
                  let isTagMatch = false;
                  while (tagIndex > 0 && !isTagMatch) {
                    let tag = tagStack[tagIndex - 1];
                    if (tag === endTagMatch[2]) {
                      isTagMatch = true;
                    }
                    tagStack.pop();
                    --tagIndex;
                  }
                }
              }
              let endAdvance = lineText.indexOf(endTagMatch[1]) + endTagMatch[1].length;
              col += endAdvance;
              lineText = lineText.substr(endAdvance, lineText.length);
            }
            if (Array.isArray(tagStack) && tagStack.length === 0) {
              editor.selection = new vscode_12.Selection(beginPosition, new vscode_12.Position(lineCurrent, col));
              break;
            }
            const startTagMatch = lineText.match(startTagOpen);
            if (startTagMatch) {
              hasTag = true;
              if (isNoIncludeTag) {
                let lineTextCur = editor.document.lineAt(lineCurrent).text;
                lineText = lineTextCur.substr(0, col);
                let indexLast = lineText.lastIndexOf(">");
                while (indexLast === -1 && lineCurrent > 0) {
                  --lineCurrent;
                  lineText = editor.document.lineAt(lineCurrent).text;
                  indexLast = lineText.lastIndexOf(">");
                }
                editor.selection = new vscode_12.Selection(beginPosition, new vscode_12.Position(lineCurrent, indexLast + 2));
                break;
              }
              if (Array.isArray(tagStack)) {
                tagStack.push(startTagMatch[1]);
              } else {
                tagStack = [startTagMatch[1]];
                if (noIncludeTags.indexOf(startTagMatch[1]) !== -1) {
                  isNoIncludeTag = true;
                }
              }
              const startAdvance = lineText.indexOf(startTagMatch[1]) + startTagMatch[1].length;
              col += startAdvance;
              lineText = lineText.substr(startAdvance, lineText.length);
            }
            if (lineText.indexOf("/>") !== -1 && Array.isArray(tagStack) && tagStack.length === 1) {
              let tagCloseIndex = lineText.indexOf("/>");
              let prevText = lineText.substr(0, tagCloseIndex + 2);
              let tagReg = /<([\w-]+)(\s*|(\s+[\w-_:@\.]+(=("[^"]*"|'[^']*'))?)+)\s*(\/)?>/gim;
              if (!tagReg.test(prevText)) {
                tagStack.pop();
              }
              editor.selection = new vscode_12.Selection(beginPosition, new vscode_12.Position(lineCurrent, col + tagCloseIndex + 2));
              break;
            }
            if (!lineText && lineCurrent < lineCount && tagStack.length > 0) {
              do {
                ++lineCurrent;
                lineText = editor.document.lineAt(lineCurrent).text;
              } while (!lineText && lineCurrent < lineCount);
              col = lineText.indexOf(lineText.trim());
              lineText = lineText.trim();
              continue;
            }
            if (!hasTag && !hasEndTag && lineText.length > 0) {
              let noTagIndex = lineText.indexOf(lineText, 1);
              if (noTagIndex === -1) {
                if (lineCurrent < lineCount) {
                  do {
                    ++lineCurrent;
                    lineText = editor.document.lineAt(lineCurrent).text;
                  } while (!lineText && lineCurrent < lineCount);
                  col = lineText.indexOf(lineText.trim());
                  lineText = lineText.trim();
                } else {
                  break;
                }
              } else {
                lineText = lineText.substr(noTagIndex, lineText.length);
              }
            }
          } else if (textTagPos > 0) {
            lineText = lineText.substr(textTagPos, lineText.length);
            col += textTagPos;
          } else if (textTagPos < 0) {
            if (lineCurrent < lineCount) {
              if (lineText.indexOf("/>") !== -1 && Array.isArray(tagStack) && tagStack.length > 0) {
                let tagCloseIndex = lineText.indexOf("/>");
                let prevText = lineText.substr(0, tagCloseIndex + 2);
                let tagReg = /<([\w-]+)(\s*|(\s+[\w-_:@\.]+(=("[^"]*"|'[^']*'))?)+)\s*(\/)?>/gim;
                if (!tagReg.test(prevText)) {
                  tagStack.pop();
                }
                if (tagStack.length === 0) {
                  editor.selection = new vscode_12.Selection(beginPosition, new vscode_12.Position(lineCurrent, col + tagCloseIndex + 2));
                  break;
                }
              }
              do {
                ++lineCurrent;
                lineText = editor.document.lineAt(lineCurrent).text;
                if (lineText.replace(/\s/gi, "") === "") {
                  lineText = "";
                }
              } while (!lineText && lineCurrent < lineCount);
              col = lineText.indexOf(lineText.trim());
              lineText = lineText.trim();
            } else {
              lineText = "";
            }
          }
        }
      }
      selectLineBlock(editor, lineText, startPosition) {
        let TAGS = ['"', "'", "(", "{", "[", " ", "`", ">"];
        let TAGS_CLOSE = {
          '"': '"',
          "'": "'",
          "(": ")",
          "{": "}",
          "[": "]",
          " ": " ",
          "`": "`",
          ">": "<"
        };
        let pos = startPosition.character - 1;
        let endTag = "", beginPos = 0, endPos = 0, inBeginTags = [], includeTags = false;
        beginPos = pos;
        while (pos >= 0) {
          if (TAGS.indexOf(lineText[pos]) !== -1) {
            endTag = lineText[pos];
            break;
          }
          --pos;
        }
        if (beginPos === pos) {
          includeTags = true;
          beginPos = pos;
        } else {
          beginPos = pos + 1;
        }
        if (endTag.length > 0) {
          pos = startPosition.character;
          if (endTag === ">") {
            while (pos <= lineText.length && pos >= 0) {
              let txt = lineText[pos];
              if ((txt === TAGS_CLOSE[endTag] || txt === ">") && pos > beginPos) {
                break;
              }
              ++pos;
            }
          } else {
            while (pos <= lineText.length && pos >= 0) {
              let txt = lineText[pos];
              if (inBeginTags.length === 0 && (txt === TAGS_CLOSE[endTag] || txt === ">") && pos > beginPos) {
                break;
              }
              if (inBeginTags.length > 0 && TAGS_CLOSE[inBeginTags[inBeginTags.length - 1]] === txt) {
                inBeginTags.pop();
              } else if (TAGS.indexOf(txt) !== -1 && txt !== " ") {
                inBeginTags.push(txt);
              }
              ++pos;
            }
          }
        }
        includeTags ? endPos = pos + 1 : endPos = pos;
        editor.selection = new vscode_12.Selection(new vscode_12.Position(startPosition.line, beginPos), new vscode_12.Position(startPosition.line, endPos));
      }
    };
    exports2.default = Assist;
  }
});

// out/client.js
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
var vscode_1 = require("vscode");
var explorer_1 = require_explorer();
var framework_1 = require_framework();
var assist_1 = require_assist();
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
  const assist = new assist_1.default(explorer);
  assist.register();
}
