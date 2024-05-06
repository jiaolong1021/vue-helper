export default () => {
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
            "description": "≥768px Responsive columns or column props object",
            "values": []
        },
        "md": {
            "type": "attribute",
            "description": "≥992 Responsive columns or column props object",
            "values": []
        },
        "lg": {
            "type": "attribute",
            "description": "≥1200 Responsive columns or column props object",
            "values": []
        },
        "xl": {
            "type": "attribute",
            "description": "≥1200px Responsive columns or column props object, version >= 2",
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
}
}