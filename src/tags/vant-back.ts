export default {
  "van-button": {
    "attributes": ["id", "type", "size", "color", "icon", "class-prefix", "plain", "block", "round", "square", "disabled", "hairline", "loading", "loading-text", "loading-type", "loading-size", "custom-style", "open-type", "app-parameter", "lang", "session-from", "business-id", "send-message-title", "send-message-path", "send-message-img", "show-message-card", "dataset", "form-type", "bind:click", "bind:getuserinfo", "bind:contact", "bind:getphonenumber", "bind:error", "bind:opensetting"],
    "subtags": [],
    "defaults": ["type"],
    "framework": "vant"
  },
  "van-cell": {
    "attributes": ["icon", "title", "title-width", "value", "label", "size", "border", "center", "url", "link-type", "clickable", "is-link", "required", "arrow-direction", "use-label-slot", "title-style"],
    "subtags": [],
    "defaults": ["title", "value"],
    "framework": "vant"
  },
  "van-cell-group": {
    "attributes": ["title", "inset", "border"],
    "subtags": ["van-cell"],
    "defaults": [],
    "framework": "vant"
  },
  "van-icon": {
    "attributes": ["name", "dot", "info", "color", "size", "custom-style", "class-prefix", "bind:click"],
    "subtags": [],
    "defaults": ["name"],
    "framework": "vant"
  },
  "van-image": {
    "attributes": ["src", "fit", "alt", "width", "height", "radius", "round", "lazy-load", "show-error", "show-loading", "use-error-slot", "use-loading-slot", "show-menu-by-longpress", "bind:click", "bind:load", "bind:error"],
    "subtags": [],
    "defaults": [],
    "framework": "vant"
  },
  "van-row": {
    "attributes": ["gutter"],
    "subtags": ["van-col"],
    "defaults": ["gutter"],
    "framework": "vant"
  },
  "van-col": {
    "attributes": ["span", "offset"],
    "subtags": [],
    "defaults": ["span"],
    "framework": "vant"
  },
  "van-popup": {
    "attributes": ["show", "z-index", "overlay", "position", "duration", "round", "custom-style", "overlay-style", "close-on-click-overlay", "closeable", "close-icon", "safe-area-inset-bottom", "safe-area-inset-top", "bind:close", "bind:click-overlay", "bind:before-enter", "bind:enter", "bind:after-enter", "bind:before-leave", "bind:leave", "bind:after-leave"],
    "subtags": [],
    "defaults": ["show", "bind:close"],
    "framework": "vant"
  },
  "van-calendar": {
    "attributes": ["type", "title", "color", "min-date", "max-date", "default-date", "row-height", "formatter", "poppable", "show-mark", "show-title", "show-subtitle", "show-confirm", "confirm-text", "confirm-disabled-text", "first-day-of-week", "bind:select", "bind:unselect", "bind:confirm", "bind:open", "bind:close", "bind:opened", "bind:closed", "bind:over-range"],
    "subtags": [],
    "defaults": ["show", "bind:close", "bind:confirm"],
    "framework": "vant"
  },
  "van-checkbox": {
    "attributes": ["name", "shape", "value", "disabled", "label-disabled", "label-position", "use-icon-slot", "checked-color", "icon-size"],
    "subtags": [],
    "defaults": ["value", "bind:change"],
    "framework": "vant"
  },
  "van-checkbox-group": {
    "attributes": ["name", "value", "disabled", "max", "direction"],
    "subtags": [],
    "defaults": [],
    "framework": "vant"
  },
  "van-datetime-picker": {
    "attributes": ["value", "type", "min-date", "max-date", "min-hour", "max-hour", "min-minute", "max-minute", "filter", "formatter", "title", "show-toolbar", "loading", "item-height", "confirm-button-text", "cancel-button-text", "visible-item-count", "bind:input", "bind:change", "bind:confirm", "bind:cancel"],
    "subtags": [],
    "defaults": ["type", "value", "min-date", "max-date", "bind:input"],
    "framework": "vant"
  },
  "van-field": {
    "attributes": ["name", "label", "size", "value", "type", "fixed", "focus", "border", "disabled", "readonly", "clearable", "clickable", "required", "center", "password", "title-width", "maxlength", "placeholder", "placeholder-style", "custom-style", "is-link", "arrow-direction", "show-word-limit", "error", "error-message", "error-message-align", "input-align", "autosize", "left-icon", "right-icon", "confirm-type", "confirm-hold", "hold-keyboard", "cursor-spacing", "adjust-position", "show-confirm-bar", "selection-start", "selection-end", "auto-focus", "disable-default-padding", "cursor", "bind:input", "bind:change", "bind:confirm", "bind:click-icon", "bind:focus", "bind:blur", "bind:clear", "bind:click-input", "bind:linechange", "bind:keyboardheightchange"],
    "subtags": [],
    "defaults": ["value", "placeholder", "border", "bind:change"],
    "framework": "vant"
  },
  "van-picker": {
    "attributes": ["columns", "show-toolbar", "toolbar-position", "title", "loading", "value-key", "item-height", "confirm-button-text", "cancel-button-text", "visible-item-count", "default-index", "bind:confirm", "bind:cancel", "bind:change"],
    "subtags": [],
    "defaults": ["columns", "bind:change"],
    "framework": "vant"
  },
  "van-radio": {
    "attributes": ["name", "shape", "disabled", "label-disabled", "label-position", "icon-size", "checked-color", "use-icon-slot"],
    "subtags": [],
    "defaults": ["name"],
    "framework": "vant"
  },
  "van-radio-group": {
    "attributes": ["name", "value", "disabled", "direction"],
    "subtags": ["van-radio"],
    "defaults": ["value"],
    "framework": "vant"
  },
  "van-rate": {
    "attributes": ["name", "value", "count", "size", "gutter", "color", "void-color", "icon", "void-icon", "allow-half", "readonly", "disabled", "disabled-color", "touchable", "bind:change"],
    "subtags": [],
    "defaults": ["value", "bind:change"],
    "framework": "vant"
  },
  "van-search": {
    "attributes": ["name", "label", "shape", "value", "background", "show-action", "action-text", "focus", "error", "disabled", "readonly", "clearable", "maxlength", "use-action-slot", "placeholder", "placeholder-style", "input-align", "use-left-icon-slot", "use-right-icon-slot", "left-icon", "right-icon", "bind:search", "bind:change", "bind:cancel", "bind:focus", "bind:blur", "bind:clear", "bind:click-input"],
    "subtags": [],
    "defaults": ["value", "placeholder"],
    "framework": "vant"
  },
  "van-slider": {
    "attributes": ["value", "disabled", "max", "min", "step", "bar-height", "active-color", "inactive-color", "bind:drag", "bind:change", "bind:drag-start", "bind:drag-end"],
    "subtags": [],
    "defaults": ["value", "bind:change"],
    "framework": "vant"
  },
  "van-stepper": {
    "attributes": ["name", "value", "min", "max", "step", "integer", "disabled", "disable-input", "async-change", "input-width", "button-size", "show-plus", "show-minus", "decimal-length", "theme", "disable-plus", "disable-minus", "long-press", "bind:change", "bind:overlimit", "bind:plus", "bind:minus", "bind:focus", "bind:blur"],
    "subtags": [],
    "defaults": ["value", "bind:change"],
    "framework": "vant"
  },
  "van-switch": {
    "attributes": ["name", "checked", "loading", "disabled", "size", "active-color", "inactive-color", "active-value", "inactive-value", "bind:change"],
    "subtags": [],
    "defaults": ["checked", "bind:change"],
    "framework": "vant"
  },
  "van-uploader": {
    "attributes": ["name", "accept", "sizeType", "preview-size", "preview-image", "preview-full-image", "multiple", "disabled", "show-upload", "deletable", "capture", "max-size", "max-count", "upload-text", "image-fit", "use-before-read", "camera", "compressed", "max-duration", "upload-icon", "media", "image", "video", "file", "all"],
    "subtags": [],
    "defaults": ["file-list", "bind:after-read"],
    "framework": "vant"
  },
  "van-action-sheet": {
    "attributes": ["actions", "title", "description", "z-index", "cancel-text", "overlay", "round", "close-on-click-action", "close-on-click-overlay", "safe-area-inset-bottom", "bind:select", "bind:close", "bind:cancel", "bind:click-overlay", "bind:getuserinfo", "bind:contact", "bind:getphonenumber", "bind:error", "bind:launchapp", "bind:opensetting"],
    "subtags": [],
    "defaults": ["show", "actions", "bind:close", "bind:select"],
    "framework": "vant"
  },
  "van-dialog": {
    "attributes": ["show", "title", "width", "message", "theme", "message-align", "z-index", "class-name", "custom-style", "show-confirm-button", "show-cancel-button", "confirm-button-text", "cancel-button-text", "confirm-button-color", "cancel-button-color", "overlay", "overlay-style", "close-on-click-overlay", "use-slot", "use-title-slot", "async-close", "before-close", "transition", "confirm-button-open-type", "bind:close", "bind:confirm", "bind:cancel", "bind:getuserinfo", "bind:contact", "bind:getphonenumber", "bind:error", "bind:opensetting"],
    "subtags": [],
    "defaults": [],
    "framework": "vant"
  },
  "van-dropdown-menu": {
    "attributes": ["active-color", "z-index", "duration", "direction", "overlay", "close-on-click-overlay", "close-on-click-outside"],
    "subtags": ["van-dropdown-item"],
    "defaults": [],
    "framework": "vant"
  },
  "van-dropdown-item": {
    "attributes": ["value", "title", "options", "disabled", "title-class", "popup-style", "bind:change", "bind:open", "bind:close", "bind:opened", "bind:closed"],
    "subtags": [],
    "defaults": ["value", "options"],
    "framework": "vant"
  },
  "van-loading": {
    "attributes": ["color", "type", "size", "text-size", "vertical"],
    "subtags": [],
    "defaults": [],
    "framework": "vant"
  },
  "van-notify": {
    "attributes": [],
    "subtags": [],
    "defaults": [],
    "framework": "vant"
  },
  "van-overlay": {
    "attributes": ["show", "z-index", "duration", "class-name", "custom-style", "bind:click"],
    "subtags": [],
    "defaults": [],
    "framework": "vant"
  },
  "van-share-sheet": {
    "attributes": ["options", "title", "cancel-text", "description", "duration", "overlay", "close-on-click-overlay", "safe-area-inset-bottom", "bind:select", "bind:close", "bind:cancel", "bind:click-overlay"],
    "subtags": [],
    "defaults": ["show", "title", "options", "bind:select", "bind:close"],
    "framework": "vant"
  },
  "van-swipe-cell": {
    "attributes": ["name", "left-width", "right-width", "async-close", "disabled", "bind:click", "bind:close", "bind:open"],
    "subtags": [],
    "defaults": [],
    "framework": "vant"
  },
  "van-circle": {
    "attributes": ["value", "type", "size", "color", "layer-color", "fill", "speed", "text", "stroke-width", "clockwise"],
    "subtags": [],
    "defaults": ["value", "text"],
    "framework": "vant"
  },
  "van-collapse": {
    "attributes": ["value", "accordion", "border"],
    "subtags": ["van-collapse-item"],
    "defaults": ["value", "bind:change"],
    "framework": "vant"
  },
  "van-collapse-item": {
    "attributes": ["name", "title", "icon", "value", "label", "border", "is-link", "clickable", "disabled"],
    "subtags": [],
    "defaults": ["title", "name"],
    "framework": "vant"
  },
  "van-count-down": {
    "attributes": ["time", "format", "auto-start", "millisecond", "use-slot", "bind:finish", "bind:change"],
    "subtags": [],
    "defaults": [],
    "framework": "vant"
  },
  "van-divider": {
    "attributes": ["dashed", "hairline", "content-position", "custom-style"],
    "subtags": [],
    "defaults": [],
    "framework": "vant"
  },
  "van-empty": {
    "attributes": ["image", "description"],
    "subtags": [],
    "defaults": ["description"],
    "framework": "vant"
  },
  "van-notice-bar": {
    "attributes": ["mode", "text", "color", "background", "left-icon", "delay", "speed", "scrollable", "wrapable", "open-type", "bind:click", "bind:close"],
    "subtags": [],
    "defaults": [],
    "framework": "vant"
  },
  "van-progress": {
    "attributes": ["inactive", "percentage", "stroke-width", "show-pivot", "color", "text-color", "track-color", "pivot-text", "pivot-color"],
    "subtags": [],
    "defaults": ["percentage"],
    "framework": "vant"
  },
  "van-skeleton": {
    "attributes": [],
    "subtags": [],
    "defaults": ["title", "row"],
    "framework": "vant"
  },
  "van-steps": {
    "attributes": [, "bind:click-step"],
    "subtags": [],
    "defaults": ["steps", "active"],
    "framework": "vant"
  },
  "van-sticky": {
    "attributes": ["offset-top", "z-index", "container", "scroll-top", "bind:scroll"],
    "subtags": [],
    "defaults": [],
    "framework": "vant"
  },
  "van-tag": {
    "attributes": ["type", "size", "color", "plain", "round", "mark", "text-color", "closeable", "bind:close"],
    "subtags": [],
    "defaults": ["type"],
    "framework": "vant"
  },
  "van-grid": {
    "attributes": ["column-num", "icon-size", "gutter", "border", "center", "square", "clickable", "direction", "reverse", "use-slot"],
    "subtags": ["van-grid-item"],
    "defaults": [],
    "framework": "vant"
  },
  "van-grid-item": {
    "attributes": ["text", "icon", "icon-color", "icon-prefix", "dot", "badge", "url", "link-type", "bind:click"],
    "subtags": [],
    "defaults": ["icon", "text"],
    "framework": "vant"
  },
  "van-index-bar": {
    "attributes": ["index-list", "z-index", "sticky", "sticky-offset-top", "highlight-color", "bind:select"],
    "subtags": ["van-index-anchor"],
    "defaults": [],
    "framework": "vant"
  },
  "van-index-anchor": {
    "attributes": ["use-slot", "index"],
    "subtags": [],
    "defaults": ["index"],
    "framework": "vant"
  },
  "van-nav-bar": {
    "attributes": ["title", "left-text", "right-text", "left-arrow", "fixed", "placeholder", "border", "z-index", "custom-style", "safe-area-inset-top", "bind:click-left", "bind:click-right"],
    "subtags": [],
    "defaults": ["title", "left-text", "right-text", "left-arrow", "bind:click-left", "bind:click-right"],
    "framework": "vant"
  },
  "van-sidebar": {
    "attributes": ["activeKey"],
    "subtags": ["van-sidebar-item"],
    "defaults": ["active-key"],
    "framework": "vant"
  },
  "van-sidebar-item": {
    "attributes": ["title", "dot", "info", "badge", "disabled"],
    "subtags": [],
    "defaults": ["title"],
    "framework": "vant"
  },
  "van-tab": {
    "attributes": ["name", "title", "disabled", "dot", "info", "title-style"],
    "subtags": [],
    "defaults": ["title"],
    "framework": "vant"
  },
  "van-tabs": {
    "attributes": ["type", "color", "active", "duration", "line-width", "line-height", "animated", "border", "ellipsis", "sticky", "swipeable", "lazy-render", "offset-top", "swipe-threshold", "title-active-color", "title-inactive-color", "z-index"],
    "subtags": ["van-tab"],
    "defaults": ["active", "bind:change"],
    "framework": "vant"
  },
  "van-tabbar": {
    "attributes": ["active", "fixed", "placeholder", "border", "z-index", "active-color", "inactive-color", "safe-area-inset-bottom"],
    "subtags": ["van-tabbar-item"],
    "defaults": ["active", "bind:change"],
    "framework": "vant"
  },
  "van-tabbar-item": {
    "attributes": ["name", "icon", "icon-prefix", "dot", "info"],
    "subtags": [],
    "defaults": ["icon"],
    "framework": "vant"
  },
  "van-tree-select": {
    "attributes": ["items", "height", "main-active-index", "active-id", "max", "selected-icon", "bind:click-nav", "bind:click-item"],
    "subtags": [],
    "defaults": ["items", "main-active-index", "active-id", "bind:click-nav", "bind:click-item"],
    "framework": "vant"
  },
  "van-area": {
    "attributes": ["value", "title", "area-list", "columns-num", "columns-placeholder", "loading", "item-height", "visible-item-count", "confirm-button-text", "cancel-button-text", "bind:confirm", "bind:cancel", "bind:change"],
    "subtags": [],
    "defaults": ["area-list"],
    "framework": "vant"
  },
  "van-card": {
    "attributes": ["thumb", "thumb-mode", "title", "desc", "tag", "num", "price", "origin-price", "centered", "currency", "thumb-link", "link-type", "lazy-load"],
    "subtags": [],
    "defaults": ["num", "price", "desc", "title", "thumb"],
    "framework": "vant"
  },
  "van-submit-bar": {
    "attributes": ["price", "label", "suffix-label", "button-text", "button-type", "tip", "tip-icon", "disabled", "loading", "currency", "safe-area-inset-bottom", "decimal-length", "bind:submit"],
    "subtags": [],
    "defaults": ["price", "button-text", "bind:submit"],
    "framework": "vant"
  },
  "van-goods-action": {
    "attributes": ["safe-area-inset-bottom"],
    "subtags": ["van-goods-action-icon", "van-goods-action-button"],
    "defaults": [],
    "framework": "vant"
  },
  "van-goods-action-icon": {
    "attributes": ["text", "icon", "info", "url", "link-type", "id", "disabled", "loading", "open-type", "app-parameter", "lang", "session-from", "send-message-title", "send-message-path", "send-message-img", "show-message-card"],
    "subtags": [],
    "defaults": ["icon"],
    "framework": "vant"
  },
  "van-goods-action-button": {
    "attributes": ["text", "color", "url", "link-type", "id", "type", "plain", "size", "disabled", "loading", "open-type", "app-parameter", "lang", "session-from", "send-message-title", "send-message-path", "send-message-img", "show-message-card"],
    "subtags": [],
    "defaults": ["text", "type", "bind:click"],
    "framework": "vant"
  }
}