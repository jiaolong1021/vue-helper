export default {
  "Row": {
    "attributes": ["gutter", "type", "align", "justify", "class-name"],
    "subtags": ["Col"],
    "description": "栅格行",
    "framework": "iview2"
  },
  "Col": {
    "attributes": ["span", "order", "offset", "push", "pull", "class-name", "xs", "sm", "md", "lg"],
    "defaults": ["span"],
    "description": "栅格列",
    "framework": "iview2"
  },
  "Layout": {
    "attributes": [],
    "description": "Layout布局",
    "framework": "iview2"
  },
  "Header": {
    "attributes": [],
    "description": "头部布局",
    "framework": "iview2"
  },
  "Sider": {
    "attributes": ["breakpoint", "value", "width", "collapsible", "collapsed-width", "hide-trigger", "default-collapsed", "reverse-arrow", "on-collapse", "toggleCollapse"],
    "description": "侧边栏布局, slot： trigger（自定义触发器）",
    "framework": "iview2"
  },
  "Content": {
    "attributes": [],
    "description": "内容布局",
    "framework": "iview2"
  },
  "Footer": {
    "attributes": [],
    "description": "底部布局",
    "framework": "iview2"
  },
  "Button": {
    "attributes": ["type", "size", "shape", "long", "html-type", "disabled", "loading", "icon"],
    "defaults": ["type"],
    "description": "按钮",
    "framework": "iview2"
  },
  "ButtonGroup": {
    "attributes": ["size", "shape", "vertical"],
    "subtags": ["Button"],
    "description": "按钮组",
    "framework": "iview2"
  },
  "Input": {
    "attributes": ["type", "v-model", "size", "placeholder", "clearable", "disable", "readonly", "maxlength", "icon", "rows", "autosize", "number", "autofocus", "autocomplete", "element-id", "spellcheck", "wrap", 
    "on-enter", "on-click", "on-change", "on-blur", "on-keyup", "on-keydown", "on-keypress", "focus"],
    "description": "Input输入框，slot： prepend（前置内容，仅在 text 类型下有效）， append（后置内容，仅在 text 类型下有效）",
    "defaults": ["v-model"],
    "framework": "iview2"
  },
  "Radio": { 
    "attributes": ["v-model", "label", "disabled", "size", "true-value", "false-value", "on-change"], 
    "framework": "iview2",
    "defaults": ["label"],
    "description": "单选框",
  }, 
  "RadioGroup": { 
    "attributes": ["v-model", "type", "size", "vertical", "on-change"], 
    "framework": "iview2",
    "defaults": ["Radio"],
    "description": "单选框组",
  },
  "Checkbox": { 
    "attributes": ["v-model", "label", "disabled", "indeterminate", "size", "true-value", "false-value", "on-change"], 
    "framework": "iview2",
    "defaults": ["label"],
    "description": "多选框",
  }, 
  "CheckboxGroup": { 
    "attributes": ["v-model", "size", "on-change"], 
    "framework": "iview2",
    "defaults": ["Checkbox"],
    "description": "多选框组"
  },
  "Switch": { 
    "attributes": ["v-model", "size", "disabled", "true-value", "false-value", "on-change"], 
    "framework": "iview2", 
    "defaults": ["v-model"],
    "description": "switch开关，slot：open（自定义显示打开时的内容） close（自定义显示关闭时的内容）" 
  },
  "Table": { 
    "attributes": ["data", "columns", "stripe", "border", "show-header", "width", "height", "loading", "disabled-hover", "highlight-row", "row-class-name", "size", 
    "no-data-text", "no-filtered-data-text", "on-current-change", "on-select", "on-select-cancel", "on-select-all", "on-selection-change", "on-sort-change", 
    "on-filter-change", "on-row-click", "on-row-dblclick", "on-expand", "exportCsv", "clearCurrentRow"], 
    "defaults": ["columns", "data"],
    "framework": "iview2", 
    "description": "表格，slot：header（表头） footer（页脚） loading（加载中） " 
  },
  "Select": { 
    "attributes": ["v-model", "multiple", "disabled", "clearable", "filterable", "remote", "remote-method", "loading", "loading-text", "label", 
    "size", "placeholder", "not-found-text", "label-in-value", "placement", "transfer", "element-id", "on-change", "on-query-change", 
    "on-clear", "on-open-change", "setQuery", "clearSingleSelect"],
    "defaults": ["v-model"],
    "subtags": ["Option"],
    "framework": "iview2" 
  }, 
  "Option": { 
    "attributes": ["v-model", "label", "disabled", "key"], 
    "defaults": ["v-model", "key"],
    "framework": "iview2" 
  }, 
  "OptionGroup": {
    "attributes": ["label"], 
    "framework": "iview2" 
  },
  "AutoComplete": { 
    "attributes": ["v-model", "data", "clearable", "disabled", "placeholder", "size", "icon", "filter-method", "placement", "transfer", "element-id", 
    "on-change", "on-select", "on-search", "on-focus", "on-blur"], 
    "defaults": ["v-model"],
    "framework": "iview2" 
  },
  "Slider": { 
    "attributes": ["v-model", "min", "max", "step", "disabled", "range", "show-input", "show-stops", "show-tip", "tip-format", "input-size", "on-change", "on-input"],
    "defaults": ["v-model"],
    "framework": "iview2"
  },
  "DatePicker": { 
    "attributes": ["type", "v-model", "format", "placement", "placeholder", "options", "split-panels", "multiple", "show-week-numbers", "start-date", "confirm", "open", 
    "size", "disabled", "clearable", "readonly", "editable", "transfer", "element-id", "time-picker-options", "on-change", "on-open-change", "on-ok", "on-clear"], 
    "defaults": ["type"],
    "framework": "iview2", 
    "description": "slot：无（自定义选择器的显示内容，建议与 open 等参数一起使用，详见示例） " 
  },
  "TimePicker": { 
    "attributes": ["type", "v-model", "format", "steps", "placement", "placeholder", "confirm", "open", "size", "disabled", "clearable", "readonly", "editable", "transfer", 
    "element-id", "on-change", "on-open-change", "on-ok", "on-clear"], 
    "defaults": ["type"],
    "framework": "iview2", 
    "description": "slot：无（自定义选择器的显示内容，建议与 open 等参数一起使用，详见示例） " 
  },
  "Cascader": { 
    "attributes": ["data", "v-model", "render-format", "disabled", "clearable", "placeholder", "trigger", "change-on-select", "size", "load-data", "filterable", "not-found-text", "transfer", "element-id", "on-change", "on-visible-change"], 
    "defaults": ["v-model", "data"],
    "framework": "iview2" 
  },
  "Transfer": { 
    "attributes": ["data", "targetKeys", "render-format", "selected-keys", "list-style", "titles", "operations", "filterable", "filter-placeholder", "filter-method", "not-found-text", "on-change", "on-selected-change"], 
    "defaults": ["data"],
    "framework": "iview2", 
    "description": "slot：无（自定义底部内容） " 
  },
  "InputNumber": { 
    "attributes": ["max", "min", "v-model", "step", "size", "disabled", "placeholder", "formatter", "parser", "readonly", "editable", "precision", "element-id", "on-change", "on-focus", "on-blur"], 
    "defaults": ["v-model", "min", "max"],
    "framework": "iview2" 
  },
  "Rate": { 
    "attributes": ["count", "v-model", "allow-half", "disabled", "show-text", "clearable", "on-change"], 
    "defaults": ["v-model"],
    "framework": "iview2" 
  },
  "Upload": { 
    "attributes": ["action", "headers", "multiple", "data", "name", "with-credentials", "show-upload-list", "type", "accept", "format", "max-size", "before-upload", "on-progress", "on-success", "on-error", "on-preview", "on-remove", "on-format-error", "on-exceeded-size", "default-file-list", "clearFiles"], 
    "defaults": ["action"],
    "framework": "iview2", 
    "description": "slot：无（触发上传组件的控件） tip（辅助提示内容） " 
  },
  "ColorPicker": { 
    "attributes": ["v-model", "disabled", "alpha", "hue", "recommend", "colors", "format", "size", "on-change", "on-active-change", "on-open-change"], 
    "defaults": ["v-model"],
    "framework": "iview2" 
  },
  "Form": { 
    "attributes": ["model", "rules", "inline", "label-position", "label-width", "show-message", "autocomplete", "validate", "validateField", "resetFields"], 
    "defaults": ["model"],
    "framework": "iview2" 
  }, 
  "FormItem": { 
    "attributes": ["prop", "label", "label-width", "label-for", "required", "rules", "error", "show-message"], 
    "defaults": ["label"],
    "framework": "iview2", 
    "description": "slot：无（内容） label（label 内容） " 
  },
  "Alert": { 
    "attributes": ["type", "closable", "show-icon", "on-close"], 
    "framework": "iview2", 
    "description": "slot：无（警告提示内容） desc（警告提示辅助性文字介绍） icon（自定义图标内容） close（自定义关闭内容） " 
  },
  "Card": { 
    "attributes": ["bordered", "dis-hover", "shadow", "padding", "title", "icon"], 
    "framework": "iview2", 
    "description": "slot：title（自定义卡片标题，如果是简单文字，可以使用<p>标签包裹） extra（额外显示的内容，默认位置在右上角） 无（卡片主体内容） " 
  },
  "Modal": { 
    "attributes": ["v-model", "title", "closable", "mask-closable", "loading", "scrollable", "ok-text", "cancel-text", "width", "styles", "class-name", "transition-names", "transfer", "on-ok", "on-cancel", "on-visible-change"], 
    "defaults": ["v-model", "title"],
    "framework": "iview2", 
    "description": "slot：header（自定义页头） footer（自定义页脚内容） close（自定义右上角关闭内容） 无（对话框主体内容） " 
  },
  "Progress": { 
    "attributes": ["percent", "status", "stroke-width", "hide-info", "vertical"], 
    "defaults": ["percent"],
    "framework": "iview2", 
    "description": "slot：无（自定义显示状态内容） " 
  },
  "Avatar": { 
    "attributes": ["shape", "size", "src", "icon"], 
    "framework": "iview2" 
  },
  "Badge": { 
    "attributes": ["count", "overflow-count", "dot", "class-name"], 
    "framework": "iview2" 
  },
  "Collapse": { 
    "attributes": ["v-model", "accordion", "on-change"], 
    "defaults": ["v-model"],
    "framework": "iview2" 
  }, 
  "Panel": { 
    "attributes": ["name"], 
    "framework": "iview2", 
    "description": "slot：无（面板头内容） content（描述内容） " 
  },
  "Timeline": { 
    "attributes": ["pending"], 
    "framework": "iview2" 
  }, 
  "TimelineItem": { 
    "attributes": ["color"], 
    "framework": "iview2", 
    "description": "slot：dot（自定义时间轴点内容） 无（基本内容） " 
  },
  "Tag": { 
    "attributes": ["closable", "checkable", "checked", "type", "color", "name", "fade", "on-close"], 
    "framework": "iview2" 
  },
  "Tooltip": { 
    "attributes": ["content", "placement", "disabled", "delay", "always", "transfer", "options", "on-popper-show", "on-popper-hide"], 
    "framework": "iview2", 
    "description": "slot：无（主体内容） content（提示框的内容，定义此 slot 时，会覆盖 props content。） " 
  },
  "Poptip": { 
    "attributes": ["trigger", "title", "content", "placement", "width", "confirm", "ok-text", "cancel-text", "transfer", "popper-class", "options", "on-popper-show", "on-popper-hide", "on-ok", "on-cancel"], 
    "framework": "iview2", 
    "description": "slot：无（主体内容） title（提示框标题，定义此 slot 时，会覆盖 props title） content（提示框内容，定义此 slot 时，会覆盖 props content，只在非 confirm 模式下有效） " 
  },
  "Carousel": { 
    "attributes": ["v-model", "height", "loop", "autoplay", "autoplay-speed", "dots", "radius-dot", "trigger", "arrow", "easing", "on-change"], 
    "defaults": ["v-model"],
    "subtags": ["CarouselItem"],
    "framework": "iview2" 
  },
  "CarouselItem": {
    "attributes": [],
    "framework": "iview2"
  },
  "Tree": { 
    "attributes": ["data", "multiple", "show-checkbox", "empty-text", "load-data", "render", "children-key", "on-select-change", "on-check-change", "on-toggle-expand", "getCheckedNodes", "getSelectedNodes"], 
    "defaults": ["data"],
    "framework": "iview2" 
  },
  "Menu": { 
    "attributes": ["mode", "theme", "active-name", "open-names", "accordion", "width", "on-select", "on-open-change", "updateOpened", "updateActiveName"], 
    "framework": "iview2" 
  }, 
  "MenuItem": { 
    "attributes": ["name"], 
    "framework": "iview2" 
  }, 
  "Submenu": { 
    "attributes": ["name"], 
    "framework": "iview2", 
    "description": "slot：无（菜单项） title（子菜单标题） " 
  }, 
  "MenuGroup": { 
    "attributes": ["title"], 
    "framework": "iview2" 
  },
  "Tabs": { 
    "attributes": ["value", "type", "size", "closable", "animated", "capture-focus", "on-click", "on-tab-remove"], 
    "framework": "iview2", 
    "description": "slot：extra（附加内容） " 
  }, 
  "TabPane": { 
    "attributes": ["name", "label", "icon", "disabled", "closable"], 
    "defaults": ["label"],
    "framework": "iview2" 
  },
  "Dropdown": { 
    "attributes": ["trigger", "visible", "placement", "transfer", "on-click", "on-visible-change", "on-clickoutside"], 
    "framework": "iview2", 
    "description": "slot：无（主体内容） list（列表内容，一般由 DropdownMenu 承担） " 
  }, 
  "DropdownMenu": {
    "attributes": [""],
    "subtags": ["DropdownItem"],
    "framework": "iview2", 
  },
  "DropdownItem": { 
    "attributes": ["name", "disabled", "divided", "selected"], 
    "framework": "iview2" 
  },
  "Page": { 
    "attributes": ["current", "total", "page-size", "page-size-opts", "placement", "size", "simple", "show-total", "show-elevator", "show-sizer", "class-name", "styles", "transfer", "on-change", "on-page-size-change"], 
    "defaults": ["total"],
    "framework": "iview2", "description": "slot：无（自定义显示总数的内容） " 
  },
  "Breadcrumb": { 
    "attributes": ["separator"], 
    "subtags": ["BreadcrumbItem"],
    "framework": "iview2" 
  }, 
  "BreadcrumbItem": { 
    "attributes": ["to", "href", "replace"], 
    "framework": "iview2" 
  },
  "Steps": { 
    "attributes": ["current", "status", "size", "direction"], 
    "subtags": ["step"],
    "framework": "iview2" 
  }, 
  "Step": { 
    "attributes": ["status", "title", "content", "icon"], 
    "defaults": ["title"],
    "framework": "iview2" 
  },
  "Circle": { 
    "attributes": ["percent", "size", "stroke-linecap", "stroke-width", "stroke-color", "trail-width", "trail-color"], 
    "framework": "iview2", 
    "defaults": ["percent"],
    "description": "slot：无（自定义显示中间内容，内容默认垂直居中） " 
  },
  "Affix": { 
    "attributes": ["offset-top", "offset-bottom", "on-change"], 
    "framework": "iview2" 
  },
  "BackTop": { 
    "attributes": ["height", "bottom", "right", "duration", "on-click"], 
    "framework": "iview2" 
  },
  "Spin": { 
    "attributes": ["size", "fix"], 
    "framework": "iview2", 
    "description": "slot：无（自定义 Spin 的内容，设置slot后，默认的样式不生效） " 
  },
  "Scroll": { 
    "attributes": ["height", "loading-text", "on-reach-top", "on-reach-bottom", "on-reach-edge", "distance-to-edge"], 
    "framework": "iview2" 
  }
}