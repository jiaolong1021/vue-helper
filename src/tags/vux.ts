export default {
  "x-icon": {
    "attributes": ["type", "size"],
    "description": "vux icon label",
    "framework": "vux"
  },
  "x-button": {
    "attributes": ["type", "disabled", "text", "mini", "plain", "action-type", "link", "show-loading", "gradients"],
    "description": "vux button",
    "framework": "vux"
  },
  "divider": {
    "attributes": [],
    "description": "分割线" ,
    "framework": "vux"
  },
  "flexbox": {
    "attributes": ["gutter", "orient", "justify", "align", "wrap", "direction"],
    "description": "flex布局",
    "subtags": ["flexbox-item"],
    "framework": "vux"
  },
  "flexbox-item": {
    "attributes": ["span", "order"],
    "description": "flex布局内部项",
    "framework": "vux"
  },
  "grid": {
    "attributes": ["rows", "cols", "show-lr-borders", "show-vertical-dividers"],
    "description": "grid布局",
    "subtags": ["grid-item"],
    "framework": "vux"
  },
  "grid-item": {
    "attributes": ["icon", "label", "link"],
    "description": "grid布局内部项",
    "framework": "vux"
  },
  "calendar": {
    "attributes": ["title", "placeholder", "show-popup-header", "popup-header-title", "display-format", "readonly", "on-change", "on-show", "on-hide"],
    "defaults": ["v-model", "title"],
    "description": "日历",
    "framework": "vux"
  },
  "cell-box": {
    "attributes": ["is-link", "link", "border-intent", "align-items"],
    "description": "cell盒子",
    "framework": "vux"
  },
  "cell": {
    "attributes": ["title", "inline-desc", "link", "is-link", "primary", "is-loading", "value-align", "value-align", "border-intent", "arrow-direction", "disabled", "align-items"],
    "defaults": ["v-model", "title"],
    "description": "cell",
    "framework": "vux"
  },
  "checker": {
    "attributes": ["default-item-class", "selected-item-class", "disabled-item-class", "type", "max", "radio-required", "on-change"],
    "description": "选择",
    "framework": "vux"
  },
  "checklist": {
    "attributes": ["title", "required", "options", "max", "min", "random-order", "check-disabled", "label-position", "disabled", "on-change"],
    "defaults": ["v-model", "title", "options"],
    "description": "选择列表",
    "framework": "vux"
  },
  "datetime-range": {
    "attributes": ["title", "inline-desc", "placeholder", "start-date", "end-date", "format", "on-change"],
    "description": "时间选择",
    "framework": "vux"
  },
  "datetime": {
    "attributes": ["format", "title", "inline-desc", "placeholder", "min-year", "max-year", "min-hour", "max-hour", "confirm-text", "cancel-text", "clear-text", "year-row", "year-row", 
    "month-row", "day-row", "hour-row", "minute-row", "start-date", "end-date", "required", "display-format", "readonly", "show", "minute-list", "hour-list", "default-selected-value", "compute-hours-function", 
    "compute-days-function", "order-map", "on-change", "on-change", "on-clear", "on-show", "on-hide", "on-cancel", "on-confirm"],
    "defaults": ["v-model", "title"],
    "description": "时间选择器",
    "framework": "vux"
  },
  "group": {
    "attributes": ["title", "title-color", "label-width", "label-align", "label-margin-right", "gutter"],
    "description": "组",
    "framework": "vux"
  },
  "inline-x-switch": {
    "attributes": ["disabled", "value-map"], 
    "default": ["v-model"],
    "description": "内联开关",
    "framework": "vux"
  },
  "inline-x-number": {
    "attributes": ["width", "button-style", "min", "max"], 
    "description": "内联开计数器",
    "framework": "vux"
  },
  "popup-picker": {
    "attributes": ["title", "cancel-text", "confirm-text", "placeholder", "show-name", "inline-desc", "show", "value-text-align", "display-format", "popup-style", "popup-title", "disabled", "on-change", "on-show", "on-hide", "on-shadow-change"],
    "default": ["v-model"],
    "description": "时间选择弹窗",
    "framework": "vux"
  },
  "popup-radio": {
    "attributes": ["readonly", "options", "on-show", "on-hide"],
    "default": ["v-model", "options"],
    "description": "单选弹窗",
    "framework": "vux"
  },
  "picker": {
    "attributes": ["data", "columns", "fixed-columns", "column-width", "on-change"],
    "default": ["v-model", "options"],
    "description": "选择弹窗",
    "framework": "vux"
  },
  "rater": {
    "attributes": ["max", "disabled", "star", "active-color", "margin", "font-size", "min"],
    "default": ["v-model"],
    "description": "评论星",
    "framework": "vux"
  },
  "radio": {
    "attributes": ["value", "options", "fill-mode", "fill-placeholder", "fill-label", "disabled", "selected-label-style"],
    "default": ["options"],
    "description": "单选按钮组",
    "framework": "vux"
  },
  "range": {
    "attributes": ["decimal", "min", "max", "step", "disabled", "minHTML", "maxHTML", "disabled-opacity", "rangeBarHeight", "on-change", "on-touchstart", "on-touchend"],
    "default": ["v-model"],
    "description": "范围选择",
    "framework": "vux"
  },
  "selector": {
    "attributes": ["title", "direction", "options", "name", "placeholder", "readonly", "value-map", "on-change"],
    "default": ["v-model", "title", "options"],
    "description": "多选选择器",
    "framework": "vux"
  },
  "swipeout": {
    "description": "划出组件",
    "subtags": ["swipeout-item"],
    "framework": "vux"
  },
  "swipeout-item": {
    "attributes": ["sensitivity", "auto-close-on-button-click", "disabled", "threshold", "transition-mode", "on-open", "on-close"],
    "description": "划出项",
    "framework": "vux"
  },
  "swipeout-button": {
    "attributes": ["text", "background-color", "type", "width"],
    "description": "划出操作按钮",
    "framework": "vux"
  },
  "search": {
    "attributes": ["placeholder", "cancel-text", "results", "auto-fixed", "top", "position", "auto-scroll-to-top", "on-submit", "on-cancel", "on-change", "on-result-click", "on-focus", "on-blur", "on-clear"],
    "default": ["v-model"],
    "description": "搜索，具有插槽： 默认，right，left",
    "framework": "vux"
  },
  "x-switch": {
    "attributes": ["title", "disabled", "inline-desc", "prevent-default", "value-map", "on-change", "on-click"],
    "default": ["v-model"],
    "description": "开关",
    "framework": "vux"
  },
  "x-input": {
    "attributes": ["type", "is-type", "required", "title", "placeholder", "show-clear", "min", "max", "disabled", "debounce", "placeholder-align", "text-align", "label-width", "mask", "should-toast-error", 
    "on-blur", "on-focus", "on-enter", "on-change", "on-click-error-icon", "on-click-clear-icon"],
    "default": ["v-model", "type"],
    "description": "输入框，具有插槽： label，restricted-label，right，right-full-height ",
    "framework": "vux"
  },
  "x-number": {
    "attributes": ["title", "min", "max", "step", "fillable", "width", "button-style", "align"],
    "default": ["v-model", "title"],
    "description": "数据增减",
    "framework": "vux"
  },
  "x-textarea": {
    "attributes": ["title", "inline-desc", "show-counter", "max", "name", "placeholder", "rows", "cols", "height", "readonly", "disabled", "autosize", "on-change", "on-focus", "on-blur"],
    "default": ["v-model", "title"],
    "description": "多行文本框",
    "framework": "vux"
  },
  "badge": {
    "attributes": ["text"],
    "description": "徽章",
    "framework": "vux"
  },
  "countup": {
    "attributes": ["start-val", "end-val", "decimals", "duration", "options", "start", "tag", ""],
    "description": "动态统计",
    "framework": "vux"
  },
  "marquee": {
    "attributes": ["interval", "duration", "direction", "item-height"],
    "description": "跑马灯",
    "framework": "vux"
  },
  "previewer": {
    "attributes": ["list", "options", "on-close", "on-index-change"],
    "default": ["list"],
    "description": "图片预览",
    "framework": "vux"
  },
  "swiper": {
    "attributes": ["list", "direction", "show-dots", "show-desc-mask", "dots-position", "dots-class", "auto", "loop", "interval", "threshold", "duration", "height", "aspect-ratio", "min-moving-distance", "on-index-change", "on-get-height"],
    "default": ["v-model", "list"],
    "description": "轮播图",
    "framework": "vux"
  },
  "actionsheet": {
    "attributes": ["show-cancel", "cancel-text", "theme", "menus", "close-on-clicking-mask", "close-on-clicking-menu", "on-click-menu", "on-click-menu-{menuKey}", "on-click-menu-cancel", "on-click-mask", "on-after-show", "on-after-hide"],
    "default": ["v-model", "menus"],
    "description": "多项选择弹窗，插槽： header",
    "framework": "vux"
  },
  "alert": {
    "attributes": ["title", "content", "button-text", "hide-on-blur", "mask-transition", "dialog-transition", "mask-z-index", "on-show", "on-hide"],
    "default": ["v-model"],
    "description": "alert弹窗",
    "framework": "vux"
  },
  "confirm": {
    "attributes": ["show-input", "placeholder", "theme", "hide-on-blur", "title", "content", "confirm-text", "cancel-text", "mask-transition", "dialog-transition", "close-on-confirm", "input-attrs", 
    "mask-z-index", "show-cancel-button", "show-confirm-button", "on-cancel", "on-confirm", "on-show", "on-hide"],
    "default": ["v-model"],
    "description": "确定弹窗",
    "framework": "vux"
  },
  "loading": {
    "attributes": ["show", "text", "position", "transition"],
    "description": "加载中弹窗",
    "framework": "vux"
  },
  "popup": {
    "attributes": ["height", "hide-on-blur", "is-transparent", "width", "position", "show-mask", "popup-style", "hide-on-deactivated", "should-rerender-on-show", "should-scroll-top-on-show", "on-hide", "on-show", "on-first-show"],
    "default": ["v-model"],
    "description": "弹窗",
    "framework": "vux"
  },
  "popup-header": {
    "attributes": ["left-text", "right-text", "title", "show-bottom-border", "on-click-left", "on-click-right"],
    "description": "cell盒子",
    "framework": "vux"
  },
  "popover": {
    "attributes": ["content", "placement", "gutter", "on-show", "on-hide"],
    "default": ["v-model"],
    "description": "浮窗",
    "framework": "vux"
  },
  "spinner": {
    "attributes": ["type", "size"],
    "default": ["type"],
    "description": "加载图标",
    "framework": "vux"
  },
  "toast": {
    "attributes": ["time", "type", "width", "is-show-mask", "text", "position", "on-show", "on-hide"],
    "default": ["v-model"],
    "description": "自动隐藏弹窗",
    "framework": "vux"
  },
  "button-tab": {
    "attributes": ["value", "height"],
    "default": ["v-model"],
    "subtags": ["button-tab-item"],
    "description": "按钮tab",
    "framework": "vux"
  },
  "button-tab-item": {
    "attributes": ["selected", "on-item-click"],
    "description": "按钮tab项",
    "framework": "vux"
  },
  "tab": {
    "attributes": ["line-width", "active-color", "default-color", "disabled-color", "bar-active-color", "animate", "custom-bar-width", "badge-label", "badge-background", "badge-color", "prevent-default", "scroll-threshold", "bar-position"],
    "subtags": ["tab-item"],
    "description": "tab",
    "framework": "vux"
  },
  "tab-item": {
    "attributes": ["disabled", "active-class", "on-item-click"],
    "description": "tab项",
    "framework": "vux"
  },
  "tabbar": {
    "attributes": ["icon-class", "on-index-change"],
    "subtags": ["tabbar-item"],
    "description": "tab条",
    "framework": "vux"
  },
  "tabbar-item": {
    "attributes": ["selected", "badge", "show-dot", "link", "icon-class", "on-item-click"],
    "description": "tab条项，插槽： icon，icon-active，label",
    "framework": "vux"
  },
  "x-header": {
    "attributes": ["left-options", "title", "transition", "right-options", "on-click-more", "on-click-back", "on-click-title"],
    "default": ["left-options"],
    "description": "头部，插槽： 默认，left， overwrite-left，right，overwrite-title",
    "framework": "vux"
  }
}