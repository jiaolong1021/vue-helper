export default {
  "el-row": {
    "attributes": ["gutter", "type", "justify", "align", "tag"],
    "subtags": ["el-col"],
    "description": "A row in grid system",
    "framework": "element-ui"
  },
  "el-col": {
    "attributes": ["span", "offset", "push", "pull", "xs", "sm", "md", "lg", "xl", "tag"],
    "defaults": [":span"],
    "description": "A column in grid system",
    "framework": "element-ui"
  },
  "el-button": {
    "attributes": ["type", "size", "plain", "loading", "disabled", "icon", "autofocus", "native-type", "round", "circle"],
    "defaults": ["type"],
    "description": "Commonly used button.",
    "framework": "element-ui"
  },
  "el-radio": {
    "attributes": ["label", "disabled", "border", "size", "name"],
    "defaults": ["label"],
    "description": "Single selection among multiple options.",
    "framework": "element-ui"
  },
  "el-radio-group": {
    "attributes": ["size", "fill", "text-color", "change"],
    "defaults": ["v-model"],
    "subtags": ["el-radio"],
    "framework": "element-ui",
    "description": "radio group"
  },
  "el-radio-button": {
    "attributes": ["label", "disabled"],
    "defaults": ["label"],
    "framework": "element-ui",
    "description": "radio button"
  },
  "el-checkbox": {
    "attributes": ["label", "true-label", "false-label", "border", "size", "name", "checked", "indeterminate", "disabled"],
    "defaults": ["label"],
    "description": "A group of options for multiple choices.",
    "framework": "element-ui"
  },
  "el-checkbox-group": {
    "attributes": ["size", "fill", "text-color", "min", "max", "change"],
    "defaults": ["v-model"],
    "subtags": ["el-checkbox"],
    "framework": "element-ui"
  },
  "el-checkbox-button": {
    "attributes": ["label"],
    "defaults": ["label"],
    "framework": "element-ui"
  },
  "el-input": {
    "attributes": ["type", "value", "maxlength", "minlength", "placeholder", "disabled", "size", "icon", "prefix-icon", "suffix-icon", "rows", "autosize", "auto-complete", "name", "readonly", "max", "min", "step", "resize", "autofocus", "form", "label", "tabindex", "clearable", "on-icon-click", "click", "blur", "focus", "change", "clear"],
    "defaults": ["v-model", "placeholder"],
    "description": "Input data using mouse or keyboard.",
    "framework": "element-ui"
  },
  "el-autocomplete": {
    "attributes": ["value", "debounce", "placeholder", "disabled", "props", "custom-item", "icon", "fetch-suggestions", "popper-class", "trigger-on-focus", "on-icon-click", "select-when-unmatched", "label", "prefix-icon", "suffix-icon", "select"],
    "defaults": ["v-model", "placeholder"],
    "framework": "element-ui"
  },
  "el-input-number": {
    "attributes": ["value", "min", "max", "step", "size", "disabled", "controls-position", "controls", "debounce", "change"],
    "defaults": ["v-model", "placeholder"],
    "framework": "element-ui"
  },
  "el-select": {
    "attributes": ["multiple", "disabled", "value-key", "size", "clearable", "collapse-tags", "multiple-limit", "name", "auto-complete", "placeholder", "filterable", "allow-create", "filter-method", "remote", "remote-method", "loading", "loading-text", "no-match-text", "no-data-text", "popper-class", "reserve-keyword", "default-first-option", "popper-append-to-body", "change", "visible-change", "remote-tag", "clear", "blur", "focus"],
    "defaults": ["v-model", "placeholder"],
    "subtags": ["el-option"],
    "description": "When there are plenty of options, use a drop-down menu to display and select desired ones.",
    "framework": "element-ui"
  },
  "el-option-group": {
    "attributes": ["label", "disabled"],
    "defaults": ["v-for", ":key"],
    "subtags": ["el-option"],
    "framework": "element-ui"
  },
  "el-option": {
    "attributes": ["value", "label", "disabled"],
    "defaults": ["v-for", ":key"],
    "framework": "element-ui"
  },
  "el-cascader": {
    "attributes": ["options", "props", "value", "separator", "popper-class", "placeholder", "disabled", "clearable", "expand-trigger", "show-all-levels", "filterable", "debounce", "change-on-select", "size", "change", "active-item-change", "blur", "focus"],
    "defaults": [":options", "v-model"],
    "description": "If the options have a clear hierarchical structure, Cascader can be used to view and select them.",
    "framework": "element-ui"
  },
  "el-switch": {
    "attributes": ["disabled", "width", "active-icon-class", "inactive-icon-class", "active-text", "inactive-text", "active-value", "inactive-value", "active-color", "inactive-color", "on-icon-class", "off-icon-class", "on-text", "off-text", "on-value", "off-value", "on-color", "off-color", "name", "change"],
    "defaults": ["v-model"],
    "description": "Switch is used for switching between two opposing states.",
    "framework": "element-ui"
  },
  "el-slider": {
    "attributes": ["min", "max", "disabled", "step", "show-input", "show-input-controls", "input-size", "show-stops", "show-tooltip", "format-tooltip", "range", "vertical", "height", "debounce", "tooltip-class", "change"],
    "defaults": ["v-model"],
    "description": "Drag the slider within a fixed range.",
    "framework": "element-ui"
  },
  "el-time-select": {
    "attributes": ["readonly", "editable", "disabled", "clearable", "size", "placeholder", "value", "align", "popper-class", "picker-options", "vertical", "height", "change"],
    "defaults": ["v-model", "placeholder"],
    "framework": "element-ui"
  },
  "el-time-picker": {
    "attributes": ["readonly", "editable", "disabled", "clearable", "size", "placeholder", "start-placeholde", "end-placeholde", "value", "align", "picker-options", "range-separator", "popper-class", "is-range", "arrow-control", "value-format", "default-value", "change", "blur", "focus"],
    "defaults": ["v-model", "placeholder"],
    "framework": "element-ui"
  },
  "el-date-picker": {
    "attributes": ["readonly", "editable", "disabled", "clearable", "size", "placeholder", "start-placeholde", "end-placeholde", "time-arrow-control", "type", "format", "align", "popper-class", "picker-options", "range-separator", "default-value", "default-time", "value-format", "name", "unlink-panels", "prefix-icon", "clear-icon", "change"],
    "defaults": ["v-model", "placeholder"],
    "framework": "element-ui"
  },
  "el-upload": {
    "attributes": ["action", "headers", "multiple", "data", "name", "width", "name", "with-credentials", "show-file-list", "drag", "accept", "on-preview", "on-remove", "on-success", "on-error", "on-progress", "on-change", "before-upload", "before-remove", "list-type", "auto-upload", "file-list", "http-request", "disabled", "limit", "on-exceed"],
    "defaults": ["action"],
    "subtags": ["el-button"],
    "description": "Upload files by clicking or drag-and-drop",
    "framework": "element-ui"
  },
  "el-rate": {
    "attributes": ["max", "disabled", "allow-half", "low-threshold", "high-threshold", "colors", "void-color", "disabled-void-color", "icon-classes", "void-icon-class", "disabled-void-icon-class", "show-text", "show-score", "text-color", "texts", "score-template", "change"],
    "defaults": ["v-model"],
    "description": "Used for rating",
    "framework": "element-ui"
  },
  "el-color-picker": {
    "attributes": ["disabled", "size", "show-alpha", "color-format", "popper-class", "predefine", "change", "active-change"],
    "defaults": ["v-model"],
    "framework": "element-ui"
  },
  "el-transfer": {
    "attributes": ["data", "filterable", "filter-placeholder", "filter-method", "target-order", "titles", "button-texts", "render-content", "format", "props", "left-default-checked", "right-default-checked", "change", "left-check-change", "right-check-change"],
    "defaults": ["v-model", ":data"],
    "framework": "element-ui"
  },
  "el-form": {
    "attributes": ["model", "rules", "inline", "label-position", "label-width", "label-suffix", "show-message", "inline-message", "status-icon", "validate-on-rule-change", "size", "disabled", "validate"],
    "defaults": [":model"],
    "subtags": ["el-form-item"],
    "description": "Form consists of `input`, `radio`, `select`, `checkbox` and so on. With form, you can collect, verify and submit data.",
    "framework": "element-ui"
  },
  "el-form-item": {
    "attributes": ["label", "prop", "label-width", "required", "rules", "error", "show-message", "inline-message", "size"],
    "defaults": ["label"],
    "framework": "element-ui"
  },
  "el-table": {
    "attributes": ["data", "height", "max-height", "stripe", "border", "fit", "show-header", "highlight-current-row", "current-row-key", "row-class-name", "cell-class-name", "cell-style", "header-row-class-name", "header-row-style", "header-cell-name", "header-cell-style", "row-style", "row-key", "empty-text", "default-expand-all", "expand-row-keys", "default-sort", "tooltip-effect", "show-summary", "sum-text", "summary-method", "span-method", "select-on-indeterminate", "select", "select-all", "selection-change", "cell-mouse-enter", "cell-mouse-leave", "cell-click", "cell-dbclick", "row-click", "row-contextmenu", "row-dbclick", "header-click", "sort-change", "filter-change", "current-change", "header-draggend", "expand", "expand-change"],
    "defaults": [":data"],
    "subtags": ["el-table-column"],
    "description": "Display multiple data with similar format. You can sort, filter, compare your data in a table.",
    "framework": "element-ui"
  },
  "el-table-column": {
    "attributes": ["type", "column-key", "index", "label", "prop", "width", "min-width", "fixed", "render-header", "sortable", "sort-method", "sort-by", "resizable", "formatter", "show-overflow-tooltip", "align", "header-align", "class-name", "label-class-name", "selectable", "reserve-selection", "filters", "filter-placement", "filter-multiple", "filter-method", "filtered-value"],
    "defaults": ["label"],
    "framework": "element-ui"
  },
  "el-tag": {
    "attributes": ["type", "closable", "close-transition", "hit", "color", "size", "close"],
    "defaults": ["type"],
    "description": "Used for marking and selection.",
    "framework": "element-ui"
  },
  "el-progress": {
    "attributes": ["percentage", "type", "stroke-width", "text-inside", "status", "color", "width", "show-text"],
    "defaults": ["percentage"],
    "description": "Progress is used to show the progress of current operation, and inform the user the current status.",
    "framework": "element-ui"
  },
  "el-tree": {
    "attributes": ["data", "empty-text", "node-key", "props", "load", "render-content", "highlight-current", "current-node-key", "default-expand-all", "expand-on-click-node", "auto-expand-parent", "default-expanded-keys", "show-checkbox", "check-strictly", "default-checked-keys", "filter-node-method", "accordion", "indent", "check-descendants", "draggable", "allow-drag", "allow-drop", "node-click", "node-contextmenu", "check-change", "check", "current-change", "node-expand", "node-collapse", "node-drag-start", "node-drag-enter", "node-drag-leave", "node-drag-over", "node-drag-end", "node-drop"],
    "defaults": [":data"],
    "description": "Display a set of data with hierarchies.",
    "framework": "element-ui"
  },
  "el-pagination": {
    "attributes": ["small", "background", "page-size", "total", "page-count", "current-page", "layout", "page-sizes", "popper-class", "prev-text", "next-text", "disabled", "size-change", "current-page"],
    "defaults": [":total", ":current-page", ":page-size", "@current-change", "layout"],
    "description": "If you have too much data to display in one page, use pagination.",
    "framework": "element-ui"
  },
  "el-badge": {
    "attributes": ["value", "max", "is-dot", "hidden", "type"],
    "defaults": ["value"],
    "description": "A number or status mark on buttons and icons.",
    "framework": "element-ui"
  },
  "el-alert": {
    "attributes": ["title", "type", "description", "closable", "center", "close-text", "show-icon", "close"],
    "defaults": ["type", "title"],
    "description": "Displays important alert messages.",
    "framework": "element-ui"
  },
  "el-menu": {
    "attributes": ["mode", "collapse", "background-color", "text-color", "active-text-color", "theme", "default-active", "default-openeds", "unique-opened", "menu-trigger", "router", "collapse-transition", "select", "open", "close"],
    "defaults": ["default-active"],
    "subtags": ["el-submenu", "el-menu-item"],
    "framework": "element-ui"
  },
  "el-submenu": {
    "attribute": ["index", "popper-class", "show-timeout", "hide-timeout", "disabled"],
    "defaults": ["index"],
    "subtags": ["el-menu-item"],
    "framework": "element-ui"
  },
  "el-menu-item-group": {
    "attributes": ["title"],
    "subtags": ["el-menu-item"],
    "framework": "element-ui"
  },
  "el-menu-item": {
    "attributes": ["index", "route", "disabled"],
    "defaults": ["index"],
    "framework": "element-ui"
  },
  "el-tabs": {
    "attributes": ["type", "closable", "addable", "editable", "value", "activate-name", "tab-position", "tab-click", "tab-remove", "tab-add", "edit"],
    "subtags": ["el-tab-pane"],
    "description": "Divide data collections which are related yet belong to different types.",
    "framework": "element-ui"
  },
  "el-tab-pane": {
    "attributes": ["label", "disabled", "name", "closable"],
    "framework": "element-ui"
  },
  "el-breadcrumb": {
    "attributes": ["separator", "separator-class"],
    "defaults": ["separator"],
    "subtags": ["el-breadcrumb-item"],
    "description": "Displays the location of the current page, making it easier to browser back.",
    "framework": "element-ui"
  },
  "el-breadcrumb-item": {
    "attributes": ["to", "replace"],
    "framework": "element-ui"
  },
  "el-dropdown": {
    "attributes": ["type", "szie", "split-button", "placement", "trigger", "hide-on-click", "show-timeout", "hide-timeout", "click", "command", "visible-change"],
    "subtags": ["el-dropdown-menu"],
    "description": "Toggleable menu for displaying lists of links and actions.",
    "framework": "element-ui"
  },
  "el-dropdown-menu": {
    "attributes": ["command", "disabled", "divided"],
    "framework": "element-ui"
  },
  "el-steps": {
    "attributes": ["space", "direction", "active", "process-status", "finish-status", "align-center", "center", "simple"],
    "defaults": [":space", ":active"],
    "subtags": ["el-step"],
    "description": "Guide the user to complete tasks in accordance with the process. Its steps can be set according to the actual application scenario and the number of the steps can't be less than 2.",
    "framework": "element-ui"
  },
  "el-step": {
    "attributes": ["title", "description", "icon", "status"],
    "defaults": ["title"],
    "framework": "element-ui"
  },
  "el-dialog": {
    "attributes": ["title", "top", "visible", "width", "fullscreen", "modal", "modal-append-to-body", "append-to-body", "lock-scroll", "custom-class", "close-on-click-modal", "show-close", "before-close", "center", "close", "open"],
    "defaults": ["title"],
    "description": "Informs users while preserving the current page state.",
    "framework": "element-ui"
  },
  "el-tooltip": {
    "attributes": ["effect", "content", "placement", "value", "disabled", "offset", "transition", "visible-arrow", "popper-options", "open-delay", "manual", "popper-class", "enterable", "hide-after"],
    "defaults": ["content", "placement"],
    "description": "Display prompt information for mouse hover.",
    "framework": "element-ui"
  },
  "el-popover": {
    "attributes": ["trigger", "title", "content", "width", "placement", "disabled", "value", "offset", "transition", "visible-arrow", "popper-options", "popper-class", "open-delay", "show", "hide", "after-enter", "after-leave"],
    "defaults": ["placement"],
    "framework": "element-ui"
  },
  "el-card": {
    "attributes": ["header", "body-style"],
    "description": "Integrate information in a card container.",
    "framework": "element-ui"
  },
  "el-carousel": {
    "attributes": ["height", "initial-index", "trigger", "autoplay", "interval", "indicator-position", "arrow", "type", "change"],
    "subtags": ["el-carousel-item"],
    "description": "Loop a series of images or texts in a limited space",
    "framework": "element-ui"
  },
  "el-carousel-item": {
    "attributes": ["name", "label"],
    "framework": "element-ui"
  },
  "el-collapse": {
    "attributes": ["accordion", "value", "change"],
    "subtags": ["el-collapse-item"],
    "description": "Use Collapse to store contents.",
    "framework": "element-ui"
  },
  "el-collapse-item": {
    "attributes": ["name", "title"],
    "defaults": ["name", "title"],
    "framework": "element-ui"
  }
}