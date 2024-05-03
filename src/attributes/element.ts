export default {
    "el-row": {
        "_self": {
            "description": "",
            "text": [`<el-row>
  <el-col :span=""></el-col>
</el-row>`]
        },
        "gutter": {
            "type": "attribute",
            "description": "栅格间隔",
            "values": []
        },
        "type": {
            "type": "attribute",
            "description": "布局模式，可选 flex，现代浏览器下有效",
            "values": []
        },
        "justify": {
            "type": "attribute",
            "description": "flex 布局下的水平排列方式",
            "values": ["start", "end", "center", "space-around", "space-between"]
        },
        "align": {
            "type": "attribute",
            "description": "flex 布局下的垂直排列方式",
            "values": ["top", "middle", "bottom"]
        },
        "tag": {
            "type": "attribute",
            "description": "自定义元素标签",
            "values": ["*"]
        }
    },
    "el-col": {
        "_self": {
            "description": "",
            "text": ["<el-col :span=\"$1\"></el-col>"]
        },
        "span": {
            "type": "attribute",
            "description": "栅格占据的列数",
            "values": []
        },
        "offset": {
            "type": "attribute",
            "description": "栅格左侧的间隔格数",
            "values": []
        },
        "push": {
            "type": "attribute",
            "description": "栅格向右移动格数",
            "values": []
        },
        "pull": {
            "type": "attribute",
            "description": "栅格向左移动格数",
            "values": []
        },
        "xs": {
            "type": "attribute",
            "description": "<768px 响应式栅格数或者栅格属性对象",
            "values": []
        },
        "sm": {
            "type": "attribute",
            "description": "≥768px 响应式栅格数或者栅格属性对象",
            "values": []
        },
        "md": {
            "type": "attribute",
            "description": "≥992px 响应式栅格数或者栅格属性对象",
            "values": []
        },
        "lg": {
            "type": "attribute",
            "description": "≥1200px 响应式栅格数或者栅格属性对象",
            "values": []
        },
        "xl": {
            "type": "attribute",
            "description": "≥1920px 响应式栅格数或者栅格属性对象",
            "values": []
        },
        "tag": {
            "type": "attribute",
            "description": "自定义元素标签",
            "values": ["*"]
        }
    },
    "el-container": {
        "_self": {
            "description": "用于布局的容器组件，方便快速搭建页面的基本结构：",
            "text": ["<el-container>\n\t<el-header>$1</el-header>\n\t<el-main>$2</el-main>\n</el-container>"]
        },
        "direction": {
            "type": "attribute",
            "description": "子元素的排列方向",
            "values": ["horizontal", "vertical"]
        }
    },
    "el-header": {
        "_self": {
            "description": "",
            "text": ["<el-header>$1</el-header>"]
        },
        "height": {
            "type": "attribute",
            "description": "顶栏高度",
            "values": []
        }
    },
    "el-aside": {
        "_self": {
            "description": "",
            "text": ["<el-aside>$1</el-aside>"]
        },
        "width": {
            "type": "attribute",
            "description": "侧边栏宽度",
            "values": []
        }
    },
    "el-footer": {
        "_self": {
            "description": "",
            "text": ["<el-footer>$1</el-footer>"]
        },
        "height": {
            "type": "attribute",
            "description": "底栏高度",
            "values": []
        }
    },
    "el-icon": {
        "_self": {
            "description": "提供了一套常用的图标集合。",
            "text": [`<i class=""></i>`]
        }
    },
    "el-button-group": {
        "_self": {
            "description": "常用的操作按钮组",
            "text": ["<el-button-group>\n\t<el-button type=\"primary\">$1</el-button>\n\t<el-button type=\"primary\">$2</el-button>\n</el-button-group>"]
        }
    },
    "el-button": {
        "_self": {
            "description": "常用的操作按钮。",
            "text": ["<el-button type=\"primary\">$1</el-button>"]
        },
        "size": {
            "type": "attribute",
            "description": "尺寸",
            "values": ["medium", "small", "mini"]
        },
        "type": {
            "type": "attribute",
            "description": "类型",
            "values": ["primary", "success", "warning", "danger", "info", "text"]
        },
        "plain": {
            "type": "attribute",
            "description": "是否朴素按钮",
            "values": []
        },
        "round": {
            "type": "attribute",
            "description": "是否圆角按钮",
            "values": []
        },
        "circle": {
            "type": "attribute",
            "description": "是否圆形按钮",
            "values": []
        },
        "loading": {
            "type": "attribute",
            "description": "是否加载中状态",
            "values": []
        },
        "disabled": {
            "type": "attribute",
            "description": "是否禁用状态",
            "values": []
        },
        "icon": {
            "type": "attribute",
            "description": "图标类名",
            "values": []
        },
        "autofocus": {
            "type": "attribute",
            "description": "是否默认聚焦",
            "values": []
        },
        "native-type": {
            "type": "attribute",
            "description": "原生 type 属性",
            "values": ["button", "submit", "reset"]
        }
    },
    "el-link": {
        "_self": {
            "description": "文字超链接",
            "text": ["<el-link type=\"$1\"></el-link>"]
        },
        "type": {
            "type": "attribute",
            "description": "类型",
            "values": ["primary", "success", "warning", "danger", "info"]
        },
        "underline": {
            "type": "attribute",
            "description": "是否下划线",
            "values": []
        },
        "disabled": {
            "type": "attribute",
            "description": "是否禁用状态",
            "values": []
        },
        "href": {
            "type": "attribute",
            "description": "原生 href 属性",
            "values": []
        },
        "icon": {
            "type": "attribute",
            "description": "图标类名",
            "values": []
        }
    },
    "el-radio": {
        "_self": {
            "description": "在一组备选项中进行单选",
            "text": ["<el-radio v-model=\"radio\" label=\"${1:label}\">$2</el-radio>"]
        },
        "v-model": {
            "type": "attribute",
            "description": "绑定值",
            "values": []
        },
        "label": {
            "type": "attribute",
            "description": "Radio 的 value",
            "values": []
        },
        "disabled": {
            "type": "attribute",
            "description": "是否禁用",
            "values": []
        },
        "border": {
            "type": "attribute",
            "description": "是否显示边框",
            "values": []
        },
        "size": {
            "type": "attribute",
            "description": "Radio 的尺寸，仅在 border 为真时有效",
            "values": ["medium", "small", "mini"]
        },
        "name": {
            "type": "attribute",
            "description": "原生 name 属性",
            "values": []
        },
        "change": {
            "type": "method",
            "description": "绑定值变化时触发的事件",
            "values": []
        }
    },
    "el-radio-group": {
        "_self": {
            "description": "",
            "text": ["<el-radio-group v-model=\"${1:model}\">\n\t<el-radio :label=\"${2:label}\">$3</el-radio>\n</el-radio-group>"]
        },
        "v-model": {
            "type": "attribute",
            "description": "绑定值",
            "values": []
        },
        "size": {
            "type": "attribute",
            "description": "单选框组尺寸，仅对按钮形式的 Radio 或带有边框的 Radio 有效",
            "values": ["medium", "small", "mini"]
        },
        "disabled": {
            "type": "attribute",
            "description": "是否禁用",
            "values": []
        },
        "text-color": {
            "type": "attribute",
            "description": "按钮形式的 Radio 激活时的文本颜色",
            "values": []
        },
        "fill": {
            "type": "attribute",
            "description": "按钮形式的 Radio 激活时的填充色和边框色",
            "values": []
        },
        "change": {
            "type": "method",
            "description": "绑定值变化时触发的事件",
            "values": []
        }
    },
    "el-radio-button": {
        "_self": {
            "description": "",
            "text": ["<el-radio-button label=\"${1:label}\"></el-radio-button>"]
        },
        "label": {
            "type": "attribute",
            "description": "Radio 的 value",
            "values": []
        },
        "disabled": {
            "type": "attribute",
            "description": "是否禁用",
            "values": []
        },
        "name": {
            "type": "attribute",
            "description": "原生 name 属性",
            "values": []
        }
    },
    "el-checkbox": {
        "_self": {
            "description": "一组备选项中进行多选",
            "text": ["<el-checkbox v-model=\"$1\" >$2</el-checkbox>"]
        },
        "v-model": {
            "type": "attribute",
            "description": "绑定值",
            "values": []
        },
        "label": {
            "type": "attribute",
            "description": "选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效）",
            "values": []
        },
        "true-label": {
            "type": "attribute",
            "description": "选中时的值",
            "values": []
        },
        "false-label": {
            "type": "attribute",
            "description": "没有选中时的值",
            "values": []
        },
        "disabled": {
            "type": "attribute",
            "description": "是否禁用",
            "values": []
        },
        "border": {
            "type": "attribute",
            "description": "是否显示边框",
            "values": []
        },
        "size": {
            "type": "attribute",
            "description": "Checkbox 的尺寸，仅在 border 为真时有效",
            "values": ["medium", "small", "mini"]
        },
        "name": {
            "type": "attribute",
            "description": "原生 name 属性",
            "values": []
        },
        "checked": {
            "type": "attribute",
            "description": "当前是否勾选",
            "values": []
        },
        "indeterminate": {
            "type": "attribute",
            "description": "设置 indeterminate 状态，只负责样式控制",
            "values": []
        },
        "change": {
            "type": "method",
            "description": "当绑定值变化时触发的事件",
            "values": []
        }
    },
    "el-checkbox-group": {
        "_self": {
            "description": "",
            "text": ["<el-checkbox-group v-model=\"$1\">\n\t<el-checkbox :label=\"${2:label}\" :key=\"${3:key}\">$3</el-checkbox>\n</el-checkbox-group>"]
        },
        "v-model": {
            "type": "attribute",
            "description": "绑定值",
            "values": []
        },
        "size": {
            "type": "attribute",
            "description": "多选框组尺寸，仅对按钮形式的 Checkbox 或带有边框的 Checkbox 有效",
            "values": ["medium", "small", "mini"]
        },
        "disabled": {
            "type": "attribute",
            "description": "是否禁用",
            "values": []
        },
        "min": {
            "type": "attribute",
            "description": "可被勾选的 checkbox 的最小数量",
            "values": []
        },
        "max": {
            "type": "attribute",
            "description": "可被勾选的 checkbox 的最大数量",
            "values": []
        },
        "text-color": {
            "type": "attribute",
            "description": "按钮形式的 Checkbox 激活时的文本颜色",
            "values": []
        },
        "fill": {
            "type": "attribute",
            "description": "按钮形式的 Checkbox 激活时的填充色和边框色",
            "values": []
        },
        "change": {
            "type": "method",
            "description": "当绑定值变化时触发的事件",
            "values": []
        }
    },
    "el-checkbox-button": {
        "_self": {
            "description": "",
            "text": ["<el-checkbox-button :label=\"$1\" :key=\"$2\" >$3</el-checkbox-button>"]
        },
        "label": {
            "type": "attribute",
            "description": "选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效）",
            "values": []
        },
        "true-label": {
            "type": "attribute",
            "description": "选中时的值",
            "values": []
        },
        "false-label": {
            "type": "attribute",
            "description": "没有选中时的值",
            "values": []
        },
        "disabled": {
            "type": "attribute",
            "description": "是否禁用",
            "values": []
        },
        "name": {
            "type": "attribute",
            "description": "原生 name 属性",
            "values": []
        },
        "checked": {
            "type": "attribute",
            "description": "当前是否勾选",
            "values": []
        }
    },
    "el-input": {
        "_self": {
            "description": "通过鼠标或键盘输入字符",
            "text": [`<el-input v-model="$1" placeholder="请输入内容"></el-input>`]
        },
        "type": {
            "type": "attribute",
            "description": "类型",
            "values": ["text，textarea 和其他 原生 input 的 type 值"]
        },
        "v-model": {
            "type": "attribute",
            "description": "绑定值",
            "values": []
        },
        "maxlength": {
            "type": "attribute",
            "description": "原生属性，最大输入长度",
            "values": []
        },
        "minlength": {
            "type": "attribute",
            "description": "原生属性，最小输入长度",
            "values": []
        },
        "show-word-limit": {
            "type": "attribute",
            "description": "是否显示输入字数统计，只在 type = \"text\" 或 type = \"textarea\" 时有效",
            "values": []
        },
        "placeholder": {
            "type": "attribute",
            "description": "输入框占位文本",
            "values": []
        },
        "clearable": {
            "type": "attribute",
            "description": "是否可清空",
            "values": []
        },
        "show-password": {
            "type": "attribute",
            "description": "是否显示切换密码图标",
            "values": []
        },
        "disabled": {
            "type": "attribute",
            "description": "禁用",
            "values": []
        },
        "size": {
            "type": "attribute",
            "description": "输入框尺寸，只在 type!=\"textarea\" 时有效",
            "values": ["medium", "small", "mini"]
        },
        "prefix-icon": {
            "type": "attribute",
            "description": "输入框头部图标",
            "values": []
        },
        "suffix-icon": {
            "type": "attribute",
            "description": "输入框尾部图标",
            "values": []
        },
        "rows": {
            "type": "attribute",
            "description": "输入框行数，只对 type=\"textarea\" 有效",
            "values": []
        },
        "autosize": {
            "type": "attribute",
            "description": "自适应内容高度，只对 type=\"textarea\" 有效，可传入对象，如，{ minRows: 2, maxRows: 6 }",
            "values": []
        },
        "autocomplete": {
            "type": "attribute",
            "description": "原生属性，自动补全",
            "values": ["on, off"]
        },
        "auto-complete": {
            "type": "attribute",
            "description": "下个主版本弃用",
            "values": ["on, off"]
        },
        "name": {
            "type": "attribute",
            "description": "原生属性",
            "values": []
        },
        "readonly": {
            "type": "attribute",
            "description": "原生属性，是否只读",
            "values": []
        },
        "max": {
            "type": "attribute",
            "description": "原生属性，设置最大值",
            "values": []
        },
        "min": {
            "type": "attribute",
            "description": "原生属性，设置最小值",
            "values": []
        },
        "step": {
            "type": "attribute",
            "description": "原生属性，设置输入字段的合法数字间隔",
            "values": []
        },
        "resize": {
            "type": "attribute",
            "description": "控制是否能被用户缩放",
            "values": ["none, both, horizontal, vertical"]
        },
        "autofocus": {
            "type": "attribute",
            "description": "原生属性，自动获取焦点",
            "values": ["true, false"]
        },
        "form": {
            "type": "attribute",
            "description": "原生属性",
            "values": []
        },
        "label": {
            "type": "attribute",
            "description": "输入框关联的label文字",
            "values": []
        },
        "tabindex": {
            "type": "attribute",
            "description": "输入框的tabindex",
            "values": []
        },
        "validate-event": {
            "type": "attribute",
            "description": "输入时是否触发表单的校验",
            "values": []
        },
        "blur": {
            "type": "method",
            "description": "在 Input 失去焦点时触发",
            "values": []
        },
        "focus": {
            "type": "method",
            "description": "在 Input 获得焦点时触发",
            "values": []
        },
        "change": {
            "type": "method",
            "description": "仅在输入框失去焦点或用户按下回车时触发",
            "values": []
        },
        "input": {
            "type": "method",
            "description": "在 Input 值改变时触发",
            "values": []
        },
        "clear": {
            "type": "method",
            "description": "在点击由 clearable 属性生成的清空按钮时触发",
            "values": []
        }
    },
    "el-autocomplete": {
        "_self": {
            "description": "",
            "text": [`<el-autocomplete
v-model="state1"
:fetch-suggestions="querySearch"
placeholder="请输入内容"
@select="handleSelect"
></el-autocomplete>`]
        },
        "placeholder": {
            "type": "attribute",
            "description": "输入框占位文本",
            "values": []
        },
        "disabled": {
            "type": "attribute",
            "description": "禁用",
            "values": []
        },
        "value-key": {
            "type": "attribute",
            "description": "输入建议对象中用于显示的键名",
            "values": []
        },
        "value": {
            "type": "attribute",
            "description": "必填值，输入绑定值",
            "values": []
        },
        "debounce": {
            "type": "attribute",
            "description": "获取输入建议的去抖延时",
            "values": []
        },
        "placement": {
            "type": "attribute",
            "description": "菜单弹出位置",
            "values": ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end"]
        },
        "fetch-suggestions": {
            "type": "attribute",
            "description": "返回输入建议的方法，仅当你的输入建议数据 resolve 时，通过调用 callback(data:[]) 来返回它",
            "values": []
        },
        "popper-class": {
            "type": "attribute",
            "description": "Autocomplete 下拉列表的类名",
            "values": []
        },
        "trigger-on-focus": {
            "type": "attribute",
            "description": "是否在输入框 focus 时显示建议列表",
            "values": []
        },
        "name": {
            "type": "attribute",
            "description": "原生属性",
            "values": []
        },
        "select-when-unmatched": {
            "type": "attribute",
            "description": "在输入没有任何匹配建议的情况下，按下回车是否触发 select 事件",
            "values": []
        },
        "label": {
            "type": "attribute",
            "description": "输入框关联的label文字",
            "values": []
        },
        "prefix-icon": {
            "type": "attribute",
            "description": "输入框头部图标",
            "values": []
        },
        "suffix-icon": {
            "type": "attribute",
            "description": "输入框尾部图标",
            "values": []
        },
        "hide-loading": {
            "type": "attribute",
            "description": "是否隐藏远程加载时的加载图标",
            "values": []
        },
        "popper-append-to-body": {
            "type": "attribute",
            "description": "是否将下拉列表插入至 body 元素。在下拉列表的定位出现问题时，可将该属性设置为 false",
            "values": []
        },
        "highlight-first-item": {
            "type": "attribute",
            "description": "是否默认突出显示远程搜索建议中的第一项",
            "values": []
        },
        "select": {
            "type": "method",
            "description": "点击选中建议项时触发",
            "values": []
        },
        "change": {
            "type": "method",
            "description": "在 Input 值改变时触发",
            "values": []
        }
    },
    "el-input-number": {
        "_self": {
            "description": "仅允许输入标准的数字值，可定义范围",
            "text": ["<el-input-number v-model=\"$1\" @change=\"${2:inputChange}\" :min=\"${3:1}\" :max=\"${4:10}\" label=\"${5:label}\"></el-input-number>"]
        },
        "v-model": {
            "type": "attribute",
            "description": "绑定值",
            "values": []
        },
        "min": {
            "type": "attribute",
            "description": "设置计数器允许的最小值",
            "values": []
        },
        "max": {
            "type": "attribute",
            "description": "设置计数器允许的最大值",
            "values": []
        },
        "step": {
            "type": "attribute",
            "description": "计数器步长",
            "values": []
        },
        "step-strictly": {
            "type": "attribute",
            "description": "是否只能输入 step 的倍数",
            "values": []
        },
        "precision": {
            "type": "attribute",
            "description": "数值精度",
            "values": []
        },
        "size": {
            "type": "attribute",
            "description": "计数器尺寸",
            "values": ["large, small"]
        },
        "disabled": {
            "type": "attribute",
            "description": "是否禁用计数器",
            "values": []
        },
        "controls": {
            "type": "attribute",
            "description": "是否使用控制按钮",
            "values": []
        },
        "controls-position": {
            "type": "attribute",
            "description": "控制按钮位置",
            "values": ["right"]
        },
        "name": {
            "type": "attribute",
            "description": "原生属性",
            "values": []
        },
        "label": {
            "type": "attribute",
            "description": "输入框关联的label文字",
            "values": []
        },
        "placeholder": {
            "type": "attribute",
            "description": "输入框默认 placeholder",
            "values": []
        },
        "change": {
            "type": "method",
            "description": "绑定值被改变时触发",
            "values": []
        },
        "blur": {
            "type": "method",
            "description": "在组件 Input 失去焦点时触发",
            "values": []
        },
        "focus": {
            "type": "method",
            "description": "在组件 Input 获得焦点时触发",
            "values": []
        }
    },
    "el-select": {
        "_self": {
            "description": "当选项过多时，使用下拉菜单展示并选择内容。",
            "text": ["<el-select v-model=\"model\" placeholder=\"\">\n\t<el-option\n\t\tv-for=\"item in options\"\n\t\t:key=\"item.value\"\n\t\t:label=\"item.label\"\n\t\t:value=\"item.value\">\n\t</el-option>\n</el-select>"]
        },
        "v-model": {
            "type": "attribute",
            "description": "绑定值",
            "values": []
        },
        "multiple": {
            "type": "attribute",
            "description": "是否多选",
            "values": []
        },
        "disabled": {
            "type": "attribute",
            "description": "是否禁用",
            "values": []
        },
        "value-key": {
            "type": "attribute",
            "description": "作为 value 唯一标识的键名，绑定值为对象类型时必填",
            "values": []
        },
        "size": {
            "type": "attribute",
            "description": "输入框尺寸",
            "values": ["medium", "small", "mini"]
        },
        "clearable": {
            "type": "attribute",
            "description": "是否可以清空选项",
            "values": []
        },
        "collapse-tags": {
            "type": "attribute",
            "description": "多选时是否将选中值按文字的形式展示",
            "values": []
        },
        "multiple-limit": {
            "type": "attribute",
            "description": "多选时用户最多可以选择的项目数，为 0 则不限制",
            "values": []
        },
        "name": {
            "type": "attribute",
            "description": "select input 的 name 属性",
            "values": []
        },
        "autocomplete": {
            "type": "attribute",
            "description": "select input 的 autocomplete 属性",
            "values": []
        },
        "auto-complete": {
            "type": "attribute",
            "description": "下个主版本弃用",
            "values": []
        },
        "placeholder": {
            "type": "attribute",
            "description": "占位符",
            "values": []
        },
        "filterable": {
            "type": "attribute",
            "description": "是否可搜索",
            "values": []
        },
        "allow-create": {
            "type": "attribute",
            "description": "是否允许用户创建新条目，需配合 filterable 使用",
            "values": []
        },
        "filter-method": {
            "type": "attribute",
            "description": "自定义搜索方法",
            "values": []
        },
        "remote": {
            "type": "attribute",
            "description": "是否为远程搜索",
            "values": []
        },
        "remote-method": {
            "type": "attribute",
            "description": "远程搜索方法",
            "values": []
        },
        "loading": {
            "type": "attribute",
            "description": "是否正在从远程获取数据",
            "values": []
        },
        "loading-text": {
            "type": "attribute",
            "description": "远程加载时显示的文字",
            "values": []
        },
        "no-match-text": {
            "type": "attribute",
            "description": "搜索条件无匹配时显示的文字，也可以使用slot=\"empty\"设置",
            "values": []
        },
        "no-data-text": {
            "type": "attribute",
            "description": "选项为空时显示的文字，也可以使用slot=\"empty\"设置",
            "values": []
        },
        "popper-class": {
            "type": "attribute",
            "description": "Select 下拉框的类名",
            "values": []
        },
        "reserve-keyword": {
            "type": "attribute",
            "description": "多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词",
            "values": []
        },
        "default-first-option": {
            "type": "attribute",
            "description": "在输入框按下回车，选择第一个匹配项。需配合 filterable 或 remote 使用",
            "values": []
        },
        "popper-append-to-body": {
            "type": "attribute",
            "description": "是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false",
            "values": []
        },
        "automatic-dropdown": {
            "type": "attribute",
            "description": "对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单",
            "values": []
        },
        "change": {
            "type": "method",
            "description": "选中值发生变化时触发",
            "values": []
        },
        "visible-change": {
            "type": "method",
            "description": "下拉框出现/隐藏时触发",
            "values": []
        },
        "remove-tag": {
            "type": "method",
            "description": "多选模式下移除tag时触发",
            "values": []
        },
        "clear": {
            "type": "method",
            "description": "可清空的单选模式下用户点击清空按钮时触发",
            "values": []
        },
        "blur": {
            "type": "method",
            "description": "当 input 失去焦点时触发",
            "values": []
        },
        "focus": {
            "type": "method",
            "description": "当 input 获得焦点时触发",
            "values": []
        }
    },
    "el-option-group": {
        "_self": {
            "description": "",
            "text": ["<el-select v-model=\"$1\" placeholder=\"请选择\">\n\t<el-option-group\n\tv-for=\"group in options\"\n\t:key=\"group.label\"\n\t:label=\"group.label\">\n\t\t<el-option\n\t\tv-for=\"item in group.options\"\n\t\t:key=\"item.value\"\n\t\t:label=\"item.label\"\n\t\t:value=\"item.value\">\n\t\t</el-option>\n\t</el-option-group>\n</el-select>"]
        },
        "label": {
            "type": "attribute",
            "description": "分组的组名",
            "values": []
        },
        "disabled": {
            "type": "attribute",
            "description": "是否将该分组下所有选项置为禁用",
            "values": []
        }
    },
    "el-option": {
        "_self": {
            "description": "",
            "text": ["<el-option :label=\"$1\" :value=\"$2\"></el-option>"]
        },
        "value": {
            "type": "attribute",
            "description": "选项的值",
            "values": []
        },
        "label": {
            "type": "attribute",
            "description": "选项的标签，若不设置则默认与 value 相同",
            "values": []
        },
        "disabled": {
            "type": "attribute",
            "description": "是否禁用该选项",
            "values": []
        }
    },
    "el-cascader": {
        "_self": {
            "description": "当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。",
            "text": ["<el-cascader\n\tv-model=\"$1\"\n\t:options=\"options\"\n\t@change=\"handleChange\">\n</el-cascader>"]
        },
        "v-model": {
            "type": "attribute",
            "description": "选中项绑定值",
            "values": []
        },
        "options": {
            "type": "attribute",
            "description": "可选项数据源，键名可通过 Props 属性配置",
            "values": []
        },
        "props": {
            "type": "attribute",
            "description": "配置选项，具体见下表",
            "values": []
        },
        "size": {
            "type": "attribute",
            "description": "尺寸",
            "values": ["medium", "small", "mini"]
        },
        "placeholder": {
            "type": "attribute",
            "description": "输入框占位文本",
            "values": []
        },
        "disabled": {
            "type": "attribute",
            "description": "是否禁用",
            "values": []
        },
        "clearable": {
            "type": "attribute",
            "description": "是否支持清空选项",
            "values": []
        },
        "show-all-levels": {
            "type": "attribute",
            "description": "输入框中是否显示选中值的完整路径",
            "values": []
        },
        "collapse-tags": {
            "type": "attribute",
            "description": "多选模式下是否折叠Tag",
            "values": []
        },
        "separator": {
            "type": "attribute",
            "description": "选项分隔符",
            "values": []
        },
        "filterable": {
            "type": "attribute",
            "description": "是否可搜索选项",
            "values": []
        },
        "filter-method": {
            "type": "attribute",
            "description": "自定义搜索逻辑，第一个参数是节点node，第二个参数是搜索关键词keyword，通过返回布尔值表示是否命中",
            "values": []
        },
        "debounce": {
            "type": "attribute",
            "description": "搜索关键词输入的去抖延迟，毫秒",
            "values": []
        },
        "before-filter": {
            "type": "attribute",
            "description": "筛选之前的钩子，参数为输入的值，若返回 false 或者返回 Promise 且被 reject，则停止筛选",
            "values": []
        },
        "popper-class": {
            "type": "attribute",
            "description": "自定义浮层类名",
            "values": []
        },
        "change": {
            "type": "method",
            "description": "当选中节点变化时触发",
            "values": []
        },
        "expand-change": {
            "type": "method",
            "description": "当展开节点发生变化时触发",
            "values": []
        },
        "blur": {
            "type": "method",
            "description": "当失去焦点时触发",
            "values": []
        },
        "focus": {
            "type": "method",
            "description": "当获得焦点时触发",
            "values": []
        },
        "visible-change": {
            "type": "method",
            "description": "下拉框出现/隐藏时触发",
            "values": []
        },
        "remove-tag": {
            "type": "method",
            "description": "在多选模式下，移除Tag时触发",
            "values": []
        }
    },
    "el-cascader-panel": {
        "_self": {
            "description": "",
            "text": ["<el-cascader-panel :options=\"options\"></el-cascader-panel>"]
        },
        "v-model": {
            "type": "attribute",
            "description": "选中项绑定值",
            "values": []
        },
        "options": {
            "type": "attribute",
            "description": "可选项数据源，键名可通过 Props 属性配置",
            "values": []
        },
        "props": {
            "type": "attribute",
            "description": "配置选项，具体见下表",
            "values": []
        },
        "change": {
            "type": "method",
            "description": "当选中节点变化时触发",
            "values": []
        },
        "expand-change": {
            "type": "method",
            "description": "当展开节点发生变化时触发",
            "values": []
        }
    },
    "el-switch": {
        "_self": {
            "description": "表示两种相互对立的状态间的切换，多用于触发「开/关」。",
            "text": ["<el-switch v-model=\"${1:model}\" active-color=\"${2:#13ce66}\" inactive-color=\"${3:#ff4949}\"></el-switch>"]
        },
        "v-model": {
            "type": "attribute",
            "description": "绑定值",
            "values": []
        },
        "disabled": {
            "type": "attribute",
            "description": "是否禁用",
            "values": []
        },
        "width": {
            "type": "attribute",
            "description": "switch 的宽度（像素）",
            "values": []
        },
        "active-icon-class": {
            "type": "attribute",
            "description": "switch 打开时所显示图标的类名，设置此项会忽略 active-text",
            "values": []
        },
        "inactive-icon-class": {
            "type": "attribute",
            "description": "switch 关闭时所显示图标的类名，设置此项会忽略 inactive-text",
            "values": []
        },
        "active-text": {
            "type": "attribute",
            "description": "switch 打开时的文字描述",
            "values": []
        },
        "inactive-text": {
            "type": "attribute",
            "description": "switch 关闭时的文字描述",
            "values": []
        },
        "active-value": {
            "type": "attribute",
            "description": "switch 打开时的值",
            "values": []
        },
        "inactive-value": {
            "type": "attribute",
            "description": "switch 关闭时的值",
            "values": []
        },
        "active-color": {
            "type": "attribute",
            "description": "switch 打开时的背景色",
            "values": []
        },
        "inactive-color": {
            "type": "attribute",
            "description": "switch 关闭时的背景色",
            "values": []
        },
        "name": {
            "type": "attribute",
            "description": "switch 对应的 name 属性",
            "values": []
        },
        "validate-event": {
            "type": "attribute",
            "description": "改变 switch 状态时是否触发表单的校验",
            "values": []
        },
        "change": {
            "type": "method",
            "description": "switch 状态发生变化时的回调函数",
            "values": []
        }
    },
    "el-slider": {
        "_self": {
            "description": "通过拖动滑块在一个固定区间内进行选择",
            "text": ["<el-slider v-model=\"${1:30}\"></el-slider>"]
        },
        "v-model": {
            "type": "attribute",
            "description": "绑定值",
            "values": []
        },
        "min": {
            "type": "attribute",
            "description": "最小值",
            "values": []
        },
        "max": {
            "type": "attribute",
            "description": "最大值",
            "values": []
        },
        "disabled": {
            "type": "attribute",
            "description": "是否禁用",
            "values": []
        },
        "step": {
            "type": "attribute",
            "description": "步长",
            "values": []
        },
        "show-input": {
            "type": "attribute",
            "description": "是否显示输入框，仅在非范围选择时有效",
            "values": []
        },
        "show-input-controls": {
            "type": "attribute",
            "description": "在显示输入框的情况下，是否显示输入框的控制按钮",
            "values": []
        },
        "input-size": {
            "type": "attribute",
            "description": "输入框的尺寸",
            "values": ["large", "medium", "small", "mini"]
        },
        "show-stops": {
            "type": "attribute",
            "description": "是否显示间断点",
            "values": []
        },
        "show-tooltip": {
            "type": "attribute",
            "description": "是否显示 tooltip",
            "values": []
        },
        "format-tooltip": {
            "type": "attribute",
            "description": "格式化 tooltip message",
            "values": []
        },
        "range": {
            "type": "attribute",
            "description": "是否为范围选择",
            "values": []
        },
        "vertical": {
            "type": "attribute",
            "description": "是否竖向模式",
            "values": []
        },
        "height": {
            "type": "attribute",
            "description": "Slider 高度，竖向模式时必填",
            "values": []
        },
        "label": {
            "type": "attribute",
            "description": "屏幕阅读器标签",
            "values": []
        },
        "debounce": {
            "type": "attribute",
            "description": "输入时的去抖延迟，毫秒，仅在show-input等于true时有效",
            "values": []
        },
        "tooltip-class": {
            "type": "attribute",
            "description": "tooltip 的自定义类名",
            "values": []
        },
        "marks": {
            "type": "attribute",
            "description": "标记， key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标记可以单独设置样式",
            "values": []
        },
        "change": {
            "type": "method",
            "description": "值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发）",
            "values": []
        },
        "input": {
            "type": "method",
            "description": "数据改变时触发（使用鼠标拖曳时，活动过程实时触发）",
            "values": []
        }
    },
    "el-time-select": {
        "_self": {
            "description": "用于选择或输入日期",
            "text": ["<el-time-select\n\tv-model=\"$1\"\n\t:picker-options=\"${2:{start: '08:30',step: '00:15',end: '18:30'}}\"\n\tplaceholder=\"$3\">\n</el-time-select>"]
        },
        "v-model": {
            "type": "attribute",
            "description": "绑定值",
            "values": []
        },
        "readonly": {
            "type": "attribute",
            "description": "完全只读",
            "values": []
        },
        "disabled": {
            "type": "attribute",
            "description": "禁用",
            "values": []
        },
        "editable": {
            "type": "attribute",
            "description": "文本框可输入",
            "values": []
        },
        "clearable": {
            "type": "attribute",
            "description": "是否显示清除按钮",
            "values": []
        },
        "size": {
            "type": "attribute",
            "description": "输入框尺寸",
            "values": ["medium", "small", "mini"]
        },
        "placeholder": {
            "type": "attribute",
            "description": "非范围选择时的占位内容",
            "values": []
        },
        "start-placeholder": {
            "type": "attribute",
            "description": "范围选择时开始日期的占位内容",
            "values": []
        },
        "end-placeholder": {
            "type": "attribute",
            "description": "范围选择时开始日期的占位内容",
            "values": []
        },
        "is-range": {
            "type": "attribute",
            "description": "是否为时间范围选择，仅对<el-time-picker>有效",
            "values": []
        },
        "arrow-control": {
            "type": "attribute",
            "description": "是否使用箭头进行时间选择，仅对<el-time-picker>有效",
            "values": []
        },
        "align": {
            "type": "attribute",
            "description": "对齐方式",
            "values": ["left", "center", "right"]
        },
        "popper-class": {
            "type": "attribute",
            "description": "TimePicker 下拉框的类名",
            "values": []
        },
        "picker-options": {
            "type": "attribute",
            "description": "当前时间日期选择器特有的选项参考下表",
            "values": []
        },
        "range-separator": {
            "type": "attribute",
            "description": "选择范围时的分隔符",
            "values": []
        },
        "value-format": {
            "type": "attribute",
            "description": "可选，仅TimePicker时可用，绑定值的格式。不指定则绑定值为 Date 对象",
            "values": ["见日期格式"]
        },
        "default-value": {
            "type": "attribute",
            "description": "可选，选择器打开时默认显示的时间",
            "values": ["可被new Date()解析(TimePicker)", "可选值(TimeSelect)"]
        },
        "name": {
            "type": "attribute",
            "description": "原生属性",
            "values": []
        },
        "prefix-icon": {
            "type": "attribute",
            "description": "自定义头部图标的类名",
            "values": []
        },
        "clear-icon": {
            "type": "attribute",
            "description": "自定义清空图标的类名",
            "values": []
        },
        "change": {
            "type": "method",
            "description": "用户确认选定的值时触发",
            "values": []
        },
        "blur": {
            "type": "method",
            "description": "当 input 失去焦点时触发",
            "values": []
        },
        "focus": {
            "type": "method",
            "description": "当 input 获得焦点时触发",
            "values": []
        }
    },
    "el-time-picker": {
        "_self": {
            "description": "用于选择或输入日期",
            "text": ["<el-time-picker\n\tv-model=\"$1\"\n\t:picker-options=\"${2:{ selectableRange: '18:30:00 - 20:30:00' }}\"\n\tplaceholder=\"$3\">\n</el-time-picker>"]
        },
        "v-model": {
            "type": "attribute",
            "description": "绑定值",
            "values": []
        },
        "readonly": {
            "type": "attribute",
            "description": "完全只读",
            "values": []
        },
        "disabled": {
            "type": "attribute",
            "description": "禁用",
            "values": []
        },
        "editable": {
            "type": "attribute",
            "description": "文本框可输入",
            "values": []
        },
        "clearable": {
            "type": "attribute",
            "description": "是否显示清除按钮",
            "values": []
        },
        "size": {
            "type": "attribute",
            "description": "输入框尺寸",
            "values": ["medium", "small", "mini"]
        },
        "placeholder": {
            "type": "attribute",
            "description": "非范围选择时的占位内容",
            "values": []
        },
        "start-placeholder": {
            "type": "attribute",
            "description": "范围选择时开始日期的占位内容",
            "values": []
        },
        "end-placeholder": {
            "type": "attribute",
            "description": "范围选择时开始日期的占位内容",
            "values": []
        },
        "is-range": {
            "type": "attribute",
            "description": "是否为时间范围选择，仅对<el-time-picker>有效",
            "values": []
        },
        "arrow-control": {
            "type": "attribute",
            "description": "是否使用箭头进行时间选择，仅对<el-time-picker>有效",
            "values": []
        },
        "align": {
            "type": "attribute",
            "description": "对齐方式",
            "values": ["left", "center", "right"]
        },
        "popper-class": {
            "type": "attribute",
            "description": "TimePicker 下拉框的类名",
            "values": []
        },
        "picker-options": {
            "type": "attribute",
            "description": "当前时间日期选择器特有的选项参考下表",
            "values": []
        },
        "range-separator": {
            "type": "attribute",
            "description": "选择范围时的分隔符",
            "values": []
        },
        "value-format": {
            "type": "attribute",
            "description": "可选，仅TimePicker时可用，绑定值的格式。不指定则绑定值为 Date 对象",
            "values": ["见日期格式"]
        },
        "default-value": {
            "type": "attribute",
            "description": "可选，选择器打开时默认显示的时间",
            "values": ["可被new Date()解析(TimePicker)", "可选值(TimeSelect)"]
        },
        "name": {
            "type": "attribute",
            "description": "原生属性",
            "values": []
        },
        "prefix-icon": {
            "type": "attribute",
            "description": "自定义头部图标的类名",
            "values": []
        },
        "clear-icon": {
            "type": "attribute",
            "description": "自定义清空图标的类名",
            "values": []
        },
        "change": {
            "type": "method",
            "description": "用户确认选定的值时触发",
            "values": []
        },
        "blur": {
            "type": "method",
            "description": "当 input 失去焦点时触发",
            "values": []
        },
        "focus": {
            "type": "method",
            "description": "当 input 获得焦点时触发",
            "values": []
        }
    },
    "el-date-picker": {
        "_self": {
            "description": "用于选择或输入日期",
            "text": ["<el-date-picker v-model=\"$1\" type=\"datetime\" placeholder=\"${2:datetime}\"></el-date-picker>"]
        },
        "v-model": {
            "type": "attribute",
            "description": "绑定值",
            "values": []
        },
        "readonly": {
            "type": "attribute",
            "description": "完全只读",
            "values": []
        },
        "disabled": {
            "type": "attribute",
            "description": "禁用",
            "values": []
        },
        "editable": {
            "type": "attribute",
            "description": "文本框可输入",
            "values": []
        },
        "clearable": {
            "type": "attribute",
            "description": "是否显示清除按钮",
            "values": []
        },
        "size": {
            "type": "attribute",
            "description": "输入框尺寸",
            "values": ["large, small, mini"]
        },
        "placeholder": {
            "type": "attribute",
            "description": "非范围选择时的占位内容",
            "values": []
        },
        "start-placeholder": {
            "type": "attribute",
            "description": "范围选择时开始日期的占位内容",
            "values": []
        },
        "end-placeholder": {
            "type": "attribute",
            "description": "范围选择时结束日期的占位内容",
            "values": []
        },
        "type": {
            "type": "attribute",
            "description": "显示类型",
            "values": ["year", "month", "date", "dates", "week", "datetime", "datetimerange", "daterange", "monthrange"]
        },
        "format": {
            "type": "attribute",
            "description": "显示在输入框中的格式",
            "values": ["见日期格式"]
        },
        "align": {
            "type": "attribute",
            "description": "对齐方式",
            "values": ["left, center, right"]
        },
        "popper-class": {
            "type": "attribute",
            "description": "DatePicker 下拉框的类名",
            "values": []
        },
        "picker-options": {
            "type": "attribute",
            "description": "当前时间日期选择器特有的选项参考下表",
            "values": []
        },
        "range-separator": {
            "type": "attribute",
            "description": "选择范围时的分隔符",
            "values": []
        },
        "default-value": {
            "type": "attribute",
            "description": "可选，选择器打开时默认显示的时间",
            "values": ["可被new Date()解析"]
        },
        "default-time": {
            "type": "attribute",
            "description": "范围选择时选中日期所使用的当日内具体时刻",
            "values": ["数组，长度为 2，每项值为字符串，形如12:00:00，第一项指定开始日期的时刻，第二项指定结束日期的时刻，不指定会使用时刻 00:00:00"]
        },
        "value-format": {
            "type": "attribute",
            "description": "可选，绑定值的格式。不指定则绑定值为 Date 对象",
            "values": ["见日期格式"]
        },
        "name": {
            "type": "attribute",
            "description": "原生属性",
            "values": []
        },
        "unlink-panels": {
            "type": "attribute",
            "description": "在范围选择器里取消两个日期面板之间的联动",
            "values": []
        },
        "prefix-icon": {
            "type": "attribute",
            "description": "自定义头部图标的类名",
            "values": []
        },
        "clear-icon": {
            "type": "attribute",
            "description": "自定义清空图标的类名",
            "values": []
        },
        "validate-event": {
            "type": "attribute",
            "description": "输入时是否触发表单的校验",
            "values": []
        },
        "change": {
            "type": "method",
            "description": "用户确认选定的值时触发",
            "values": []
        },
        "blur": {
            "type": "method",
            "description": "当 input 失去焦点时触发",
            "values": []
        },
        "focus": {
            "type": "method",
            "description": "当 input 获得焦点时触发",
            "values": []
        }
    },
    "el-date-picker:range": {
        "_self": {
            "description": "用于选择或输入日期",
            "text": ["<el-date-picker v-model=\"$1\" type=\"datetime\" placeholder=\"${2:datetime}\"></el-date-picker>"]
        }
    },
    "el-upload": {
        "_self": {
            "description": "通过点击或者拖拽上传文件",
            "text": ["handleRemove(file, fileList) {\n\t},\n\thandlePreview(file) {\n\t},\n\thandleExceed(files, fileList) {\n\t},\n\tbeforeRemove(file, fileList) {\n\t\treturn this.$confirm('确定移除' + file.name);\n}"]
        }
    },
    "el-upload:avatar": {
        "_self": {
            "description": "通过点击或者拖拽上传文件",
            "text": ["handleRemove(file, fileList) {\n\t},\n\thandlePreview(file) {\n\t},\n\thandleExceed(files, fileList) {\n\t},\n\tbeforeRemove(file, fileList) {\n\t\treturn this.$confirm('确定移除' + file.name);\n}"]
        }
    },
    "el-rate": {
        "_self": {
            "description": "评分组件",
            "text": ["<el-rate\n\tv-model=\"3.7\"\n\tdisabled\n\tshow-score\n\ttext-color=\"#ff9900\"\n\tscore-template=\"{value}\">\n</el-rate>"]
        },
        "v-model": {
            "type": "attribute",
            "description": "绑定值",
            "values": []
        },
        "max": {
            "type": "attribute",
            "description": "最大分值",
            "values": []
        },
        "disabled": {
            "type": "attribute",
            "description": "是否为只读",
            "values": []
        },
        "allow-half": {
            "type": "attribute",
            "description": "是否允许半选",
            "values": []
        },
        "low-threshold": {
            "type": "attribute",
            "description": "低分和中等分数的界限值，值本身被划分在低分中",
            "values": []
        },
        "high-threshold": {
            "type": "attribute",
            "description": "高分和中等分数的界限值，值本身被划分在高分中",
            "values": []
        },
        "colors": {
            "type": "attribute",
            "description": "icon 的颜色。若传入数组，共有 3 个元素，为 3 个分段所对应的颜色；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的颜色",
            "values": []
        },
        "void-color": {
            "type": "attribute",
            "description": "未选中 icon 的颜色",
            "values": []
        },
        "disabled-void-color": {
            "type": "attribute",
            "description": "只读时未选中 icon 的颜色",
            "values": []
        },
        "icon-classes": {
            "type": "attribute",
            "description": "icon 的类名。若传入数组，共有 3 个元素，为 3 个分段所对应的类名；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的类名",
            "values": []
        },
        "void-icon-class": {
            "type": "attribute",
            "description": "未选中 icon 的类名",
            "values": []
        },
        "disabled-void-icon-class": {
            "type": "attribute",
            "description": "只读时未选中 icon 的类名",
            "values": []
        },
        "show-text": {
            "type": "attribute",
            "description": "是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容",
            "values": []
        },
        "show-score": {
            "type": "attribute",
            "description": "是否显示当前分数，show-score 和 show-text 不能同时为真",
            "values": []
        },
        "text-color": {
            "type": "attribute",
            "description": "辅助文字的颜色",
            "values": []
        },
        "texts": {
            "type": "attribute",
            "description": "辅助文字数组",
            "values": []
        },
        "score-template": {
            "type": "attribute",
            "description": "分数显示模板",
            "values": []
        },
        "change": {
            "type": "method",
            "description": "分值改变时触发",
            "values": []
        }
    },
    "el-color-picker": {
        "_self": {
            "description": "用于颜色选择，支持多种格式。",
            "text": ["<el-color-picker v-model=\"${1:color}\"></el-color-picker>"]
        },
        "v-model": {
            "type": "attribute",
            "description": "绑定值",
            "values": []
        },
        "disabled": {
            "type": "attribute",
            "description": "是否禁用",
            "values": []
        },
        "size": {
            "type": "attribute",
            "description": "尺寸",
            "values": ["medium", "small", "mini"]
        },
        "show-alpha": {
            "type": "attribute",
            "description": "是否支持透明度选择",
            "values": []
        },
        "color-format": {
            "type": "attribute",
            "description": "写入 v-model 的颜色的格式",
            "values": ["hsl", "hsv", "hex", "rgb"]
        },
        "popper-class": {
            "type": "attribute",
            "description": "ColorPicker 下拉框的类名",
            "values": []
        },
        "predefine": {
            "type": "attribute",
            "description": "预定义颜色",
            "values": []
        },
        "change": {
            "type": "method",
            "description": "当绑定值变化时触发",
            "values": []
        },
        "active-change": {
            "type": "method",
            "description": "面板中当前显示的颜色发生改变时触发",
            "values": []
        }
    },
    "el-transfer": {
        "_self": {
            "description": "在数据很多的情况下，可以对数据进行搜索和过滤。",
            "text": ["<el-transfer\n\tv-model=\"$1\"\n\t:data=\"$2\">\n\tfilterable\n\t:filter-method=\"\"\n\tfilter-placeholder=\"\">\n</el-transfer>"]
        },
        "v-model": {
            "type": "attribute",
            "description": "绑定值",
            "values": []
        },
        "data": {
            "type": "attribute",
            "description": "Transfer 的数据源",
            "values": []
        },
        "filterable": {
            "type": "attribute",
            "description": "是否可搜索",
            "values": []
        },
        "filter-placeholder": {
            "type": "attribute",
            "description": "搜索框占位符",
            "values": []
        },
        "filter-method": {
            "type": "attribute",
            "description": "自定义搜索方法",
            "values": []
        },
        "target-order": {
            "type": "attribute",
            "description": "右侧列表元素的排序策略：若为 original，则保持与数据源相同的顺序；若为 push，则新加入的元素排在最后；若为 unshift，则新加入的元素排在最前",
            "values": ["original", "push", "unshift"]
        },
        "titles": {
            "type": "attribute",
            "description": "自定义列表标题",
            "values": []
        },
        "button-texts": {
            "type": "attribute",
            "description": "自定义按钮文案",
            "values": []
        },
        "render-content": {
            "type": "attribute",
            "description": "自定义数据项渲染函数",
            "values": []
        },
        "format": {
            "type": "attribute",
            "description": "列表顶部勾选状态文案",
            "values": []
        },
        "props": {
            "type": "attribute",
            "description": "数据源的字段别名",
            "values": []
        },
        "left-default-checked": {
            "type": "attribute",
            "description": "初始状态下左侧列表的已勾选项的 key 数组",
            "values": []
        },
        "right-default-checked": {
            "type": "attribute",
            "description": "初始状态下右侧列表的已勾选项的 key 数组",
            "values": []
        },
        "change": {
            "type": "method",
            "description": "右侧列表元素变化时触发",
            "values": []
        },
        "left-check-change": {
            "type": "method",
            "description": "左侧列表元素被用户选中 / 取消选中时触发",
            "values": []
        },
        "right-check-change": {
            "type": "method",
            "description": "右侧列表元素被用户选中 / 取消选中时触发",
            "values": []
        }
    },
    "el-transfer:search": {
        "_self": {
            "description": "在数据很多的情况下，可以对数据进行搜索和过滤。",
            "text": ["<el-transfer\n\tv-model=\"$1\"\n\t:data=\"$2\">\n\tfilterable\n\t:filter-method=\"\"\n\tfilter-placeholder=\"\">\n</el-transfer>"]
        }
    },
    "el-form": {
        "_self": {
            "description": "由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据",
            "text": ["<el-form :inline=\"true\" :model=\"${2:form}\" label-width=\"${3:80px}\">\n\t$4\n</el-form>"]
        },
        "model": {
            "type": "attribute",
            "description": "表单数据对象",
            "values": []
        },
        "rules": {
            "type": "attribute",
            "description": "表单验证规则",
            "values": []
        },
        "inline": {
            "type": "attribute",
            "description": "行内表单模式",
            "values": []
        },
        "label-position": {
            "type": "attribute",
            "description": "表单域标签的位置，如果值为 left 或者 right 时，则需要设置 label-width",
            "values": ["right", "left", "top"]
        },
        "label-width": {
            "type": "attribute",
            "description": "表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 auto。",
            "values": []
        },
        "label-suffix": {
            "type": "attribute",
            "description": "表单域标签的后缀",
            "values": []
        },
        "hide-required-asterisk": {
            "type": "attribute",
            "description": "是否隐藏必填字段的标签旁边的红色星号",
            "values": []
        },
        "show-message": {
            "type": "attribute",
            "description": "是否显示校验错误信息",
            "values": []
        },
        "inline-message": {
            "type": "attribute",
            "description": "是否以行内形式展示校验信息",
            "values": []
        },
        "status-icon": {
            "type": "attribute",
            "description": "是否在输入框中显示校验结果反馈图标",
            "values": []
        },
        "validate-on-rule-change": {
            "type": "attribute",
            "description": "是否在 rules 属性改变后立即触发一次验证",
            "values": []
        },
        "size": {
            "type": "attribute",
            "description": "用于控制该表单内组件的尺寸",
            "values": ["medium", "small", "mini"]
        },
        "disabled": {
            "type": "attribute",
            "description": "是否禁用该表单内的所有组件。若设置为 true，则表单内组件上的 disabled 属性不再生效",
            "values": []
        },
        "validate": {
            "type": "method",
            "description": "任一表单项被校验后触发",
            "values": []
        }
    },
    "el-form-item": {
        "_self": {
            "description": "",
            "text": ["<el-form-item label=\"${1:label}\">\n<el-input type=\"textarea\" v-model=\"${2:model}\"></el-input>\n</el-form-item>"]
        },
        "prop": {
            "type": "attribute",
            "description": "表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的",
            "values": ["传入 Form 组件的 model 中的字段"]
        },
        "label": {
            "type": "attribute",
            "description": "标签文本",
            "values": []
        },
        "label-width": {
            "type": "attribute",
            "description": "表单域标签的的宽度，例如 '50px'。支持 auto。",
            "values": []
        },
        "required": {
            "type": "attribute",
            "description": "是否必填，如不设置，则会根据校验规则自动生成",
            "values": []
        },
        "rules": {
            "type": "attribute",
            "description": "表单验证规则",
            "values": []
        },
        "error": {
            "type": "attribute",
            "description": "表单域验证错误信息, 设置该值会使表单验证状态变为error，并显示该错误信息",
            "values": []
        },
        "show-message": {
            "type": "attribute",
            "description": "是否显示校验错误信息",
            "values": []
        },
        "inline-message": {
            "type": "attribute",
            "description": "以行内形式展示校验信息",
            "values": []
        },
        "size": {
            "type": "attribute",
            "description": "用于控制该表单域下组件的尺寸",
            "values": ["medium", "small", "mini"]
        }
    },
    "el-table": {
        "_self": {
            "description": "用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。",
            "text": ["<el-table\n\t:data=\"${1:data}\"\n\tstyle=\"width: 100%\">\n\t<el-table-column\n\t\tprop=\"${2:prop}\"\n\t\tlabel=\"${3:label}\"\n\t\twidth=\"${4:width}\">\n\t</el-table-column>\n</el-table>"]
        },
        "data": {
            "type": "attribute",
            "description": "显示的数据",
            "values": []
        },
        "height": {
            "type": "attribute",
            "description": "Table 的高度，默认为自动高度。如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。",
            "values": []
        },
        "max-height": {
            "type": "attribute",
            "description": "Table 的最大高度。合法的值为数字或者单位为 px 的高度。",
            "values": []
        },
        "stripe": {
            "type": "attribute",
            "description": "是否为斑马纹 table",
            "values": []
        },
        "border": {
            "type": "attribute",
            "description": "是否带有纵向边框",
            "values": []
        },
        "size": {
            "type": "attribute",
            "description": "Table 的尺寸",
            "values": ["medium", "small", "mini"]
        },
        "fit": {
            "type": "attribute",
            "description": "列的宽度是否自撑开",
            "values": []
        },
        "show-header": {
            "type": "attribute",
            "description": "是否显示表头",
            "values": []
        },
        "highlight-current-row": {
            "type": "attribute",
            "description": "是否要高亮当前行",
            "values": []
        },
        "current-row-key": {
            "type": "attribute",
            "description": "当前行的 key，只写属性",
            "values": []
        },
        "row-class-name": {
            "type": "attribute",
            "description": "行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。",
            "values": []
        },
        "row-style": {
            "type": "attribute",
            "description": "行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。",
            "values": []
        },
        "cell-class-name": {
            "type": "attribute",
            "description": "单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。",
            "values": []
        },
        "cell-style": {
            "type": "attribute",
            "description": "单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。",
            "values": []
        },
        "header-row-class-name": {
            "type": "attribute",
            "description": "表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。",
            "values": []
        },
        "header-row-style": {
            "type": "attribute",
            "description": "表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。",
            "values": []
        },
        "header-cell-class-name": {
            "type": "attribute",
            "description": "表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className。",
            "values": []
        },
        "header-cell-style": {
            "type": "attribute",
            "description": "表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。",
            "values": []
        },
        "row-key": {
            "type": "attribute",
            "description": "行数据的 Key，用来优化 Table 的渲染；在使用 reserve-selection 功能与显示树形数据时，该属性是必填的。类型为 String 时，支持多层访问：user.info.id，但不支持 user.info[0].id，此种情况请使用 Function。",
            "values": []
        },
        "empty-text": {
            "type": "attribute",
            "description": "空数据时显示的文本内容，也可以通过 slot=\"empty\" 设置",
            "values": []
        },
        "default-expand-all": {
            "type": "attribute",
            "description": "是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效",
            "values": []
        },
        "expand-row-keys": {
            "type": "attribute",
            "description": "可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组。",
            "values": []
        },
        "default-sort": {
            "type": "attribute",
            "description": "默认的排序列的 prop 和顺序。它的prop属性指定默认的排序的列，order指定默认排序的顺序",
            "values": ["order: ascending, descending"]
        },
        "tooltip-effect": {
            "type": "attribute",
            "description": "tooltip effect 属性",
            "values": ["dark", "light"]
        },
        "show-summary": {
            "type": "attribute",
            "description": "是否在表尾显示合计行",
            "values": []
        },
        "sum-text": {
            "type": "attribute",
            "description": "合计行第一列的文本",
            "values": []
        },
        "summary-method": {
            "type": "attribute",
            "description": "自定义的合计计算方法",
            "values": []
        },
        "span-method": {
            "type": "attribute",
            "description": "合并行或列的计算方法",
            "values": []
        },
        "select-on-indeterminate": {
            "type": "attribute",
            "description": "在多选表格中，当仅有部分行被选中时，点击表头的多选框时的行为。若为 true，则选中所有行；若为 false，则取消选择所有行",
            "values": []
        },
        "indent": {
            "type": "attribute",
            "description": "展示树形数据时，树节点的缩进",
            "values": []
        },
        "lazy": {
            "type": "attribute",
            "description": "是否懒加载子节点数据",
            "values": []
        },
        "load": {
            "type": "attribute",
            "description": "加载子节点数据的函数，lazy 为 true 时生效，函数第二个参数包含了节点的层级信息",
            "values": []
        },
        "tree-props": {
            "type": "attribute",
            "description": "渲染嵌套数据的配置选项",
            "values": []
        },
        "select": {
            "type": "method",
            "description": "当用户手动勾选数据行的 Checkbox 时触发的事件",
            "values": []
        },
        "select-all": {
            "type": "method",
            "description": "当用户手动勾选全选 Checkbox 时触发的事件",
            "values": []
        },
        "selection-change": {
            "type": "method",
            "description": "当选择项发生变化时会触发该事件",
            "values": []
        },
        "cell-mouse-enter": {
            "type": "method",
            "description": "当单元格 hover 进入时会触发该事件",
            "values": []
        },
        "cell-mouse-leave": {
            "type": "method",
            "description": "当单元格 hover 退出时会触发该事件",
            "values": []
        },
        "cell-click": {
            "type": "method",
            "description": "当某个单元格被点击时会触发该事件",
            "values": []
        },
        "cell-dblclick": {
            "type": "method",
            "description": "当某个单元格被双击击时会触发该事件",
            "values": []
        },
        "row-click": {
            "type": "method",
            "description": "当某一行被点击时会触发该事件",
            "values": []
        },
        "row-contextmenu": {
            "type": "method",
            "description": "当某一行被鼠标右键点击时会触发该事件",
            "values": []
        },
        "row-dblclick": {
            "type": "method",
            "description": "当某一行被双击时会触发该事件",
            "values": []
        },
        "header-click": {
            "type": "method",
            "description": "当某一列的表头被点击时会触发该事件",
            "values": []
        },
        "header-contextmenu": {
            "type": "method",
            "description": "当某一列的表头被鼠标右键点击时触发该事件",
            "values": []
        },
        "sort-change": {
            "type": "method",
            "description": "当表格的排序条件发生变化的时候会触发该事件",
            "values": []
        },
        "filter-change": {
            "type": "method",
            "description": "当表格的筛选条件发生变化的时候会触发该事件，参数的值是一个对象，对象的 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组。",
            "values": []
        },
        "current-change": {
            "type": "method",
            "description": "当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性",
            "values": []
        },
        "header-dragend": {
            "type": "method",
            "description": "当拖动表头改变了列的宽度的时候会触发该事件",
            "values": []
        },
        "expand-change": {
            "type": "method",
            "description": "当用户对某一行展开或者关闭的时候会触发该事件（展开行时，回调的第二个参数为 expandedRows；树形表格时第二参数为 expanded）",
            "values": []
        }
    },
    "el-table-column": {
        "_self": {
            "description": "",
            "text": ["<el-table-column\n\t\tprop=\"${2:prop}\"\n\t\tlabel=\"${3:label}\"\n\t\twidth=\"${4:width}\">\n\t</el-table-column>"]
        },
        "type": {
            "type": "attribute",
            "description": "对应列的类型。如果设置了 selection 则显示多选框；如果设置了 index 则显示该行的索引（从 1 开始计算）；如果设置了 expand 则显示为一个可展开的按钮",
            "values": ["selection", "index", "expand"]
        },
        "index": {
            "type": "attribute",
            "description": "如果设置了 type=index，可以通过传递 index 属性来自定义索引",
            "values": []
        },
        "column-key": {
            "type": "attribute",
            "description": "column 的 key，如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件",
            "values": []
        },
        "label": {
            "type": "attribute",
            "description": "显示的标题",
            "values": []
        },
        "prop": {
            "type": "attribute",
            "description": "对应列内容的字段名，也可以使用 property 属性",
            "values": []
        },
        "width": {
            "type": "attribute",
            "description": "对应列的宽度",
            "values": []
        },
        "min-width": {
            "type": "attribute",
            "description": "对应列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列",
            "values": []
        },
        "fixed": {
            "type": "attribute",
            "description": "列是否固定在左侧或者右侧，true 表示固定在左侧",
            "values": ["true, left, right"]
        },
        "render-header": {
            "type": "attribute",
            "description": "列标题 Label 区域渲染使用的 Function",
            "values": []
        },
        "sortable": {
            "type": "attribute",
            "description": "对应列是否可以排序，如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件",
            "values": ["true, false, 'custom'"]
        },
        "sort-method": {
            "type": "attribute",
            "description": "对数据进行排序的时候使用的方法，仅当 sortable 设置为 true 的时候有效，需返回一个数字，和 Array.sort 表现一致",
            "values": []
        },
        "sort-by": {
            "type": "attribute",
            "description": "指定数据按照哪个属性进行排序，仅当 sortable 设置为 true 且没有设置 sort-method 的时候有效。如果 sort-by 为数组，则先按照第 1 个属性排序，如果第 1 个相等，再按照第 2 个排序，以此类推",
            "values": []
        },
        "sort-orders": {
            "type": "attribute",
            "description": "数据在排序时所使用排序策略的轮转顺序，仅当 sortable 为 true 时有效。需传入一个数组，随着用户点击表头，该列依次按照数组中元素的顺序进行排序",
            "values": ["数组中的元素需为以下三者之一：ascending 表示升序，descending 表示降序，null 表示还原为原始顺序"]
        },
        "resizable": {
            "type": "attribute",
            "description": "对应列是否可以通过拖动改变宽度（需要在 el-table 上设置 border 属性为真）",
            "values": []
        },
        "formatter": {
            "type": "attribute",
            "description": "用来格式化内容",
            "values": []
        },
        "show-overflow-tooltip": {
            "type": "attribute",
            "description": "当内容过长被隐藏时显示 tooltip",
            "values": []
        },
        "align": {
            "type": "attribute",
            "description": "对齐方式",
            "values": ["left", "center", "right"]
        },
        "header-align": {
            "type": "attribute",
            "description": "表头对齐方式，若不设置该项，则使用表格的对齐方式",
            "values": ["left", "center", "right"]
        },
        "class-name": {
            "type": "attribute",
            "description": "列的 className",
            "values": []
        },
        "label-class-name": {
            "type": "attribute",
            "description": "当前列标题的自定义类名",
            "values": []
        },
        "selectable": {
            "type": "attribute",
            "description": "仅对 type=selection 的列有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选",
            "values": []
        },
        "reserve-selection": {
            "type": "attribute",
            "description": "仅对 type=selection 的列有效，类型为 Boolean，为 true 则会在数据更新之后保留之前选中的数据（需指定 row-key）",
            "values": []
        },
        "filters": {
            "type": "attribute",
            "description": "数据过滤的选项，数组格式，数组中的元素需要有 text 和 value 属性。",
            "values": []
        },
        "filter-placement": {
            "type": "attribute",
            "description": "过滤弹出框的定位",
            "values": ["与 Tooltip 的 placement 属性相同"]
        },
        "filter-multiple": {
            "type": "attribute",
            "description": "数据过滤的选项是否多选",
            "values": []
        },
        "filter-method": {
            "type": "attribute",
            "description": "数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示。",
            "values": []
        },
        "filtered-value": {
            "type": "attribute",
            "description": "选中的数据过滤项，如果需要自定义表头过滤的渲染方式，可能会需要此属性。",
            "values": []
        }
    },
    "el-tag": {
        "_self": {
            "description": "用于标记和选择。",
            "text": ["<el-tag closable type=\"${1:success}\">$2</el-tag>"]
        },
        "type": {
            "type": "attribute",
            "description": "类型",
            "values": ["success", "info", "warning", "danger"]
        },
        "closable": {
            "type": "attribute",
            "description": "是否可关闭",
            "values": []
        },
        "disable-transitions": {
            "type": "attribute",
            "description": "是否禁用渐变动画",
            "values": []
        },
        "hit": {
            "type": "attribute",
            "description": "是否有边框描边",
            "values": []
        },
        "color": {
            "type": "attribute",
            "description": "背景色",
            "values": []
        },
        "size": {
            "type": "attribute",
            "description": "尺寸",
            "values": ["medium", "small", "mini"]
        },
        "effect": {
            "type": "attribute",
            "description": "主题",
            "values": ["dark", "light", "plain"]
        },
        "click": {
            "type": "method",
            "description": "点击 Tag 时触发的事件",
            "values": []
        },
        "close": {
            "type": "method",
            "description": "关闭 Tag 时触发的事件",
            "values": []
        }
    },
    "el-progress": {
        "_self": {
            "description": "用于展示操作进度，告知用户当前状态和预期。",
            "text": ["<el-progress :text-inside=\"true\" :stroke-width=\"18\" :percentage=\"70\"></el-progress>"]
        },
        "percentage": {
            "type": "attribute",
            "description": "百分比（必填）",
            "values": ["0-100"]
        },
        "type": {
            "type": "attribute",
            "description": "进度条类型",
            "values": ["line", "circle", "dashboard"]
        },
        "stroke-width": {
            "type": "attribute",
            "description": "进度条的宽度，单位 px",
            "values": []
        },
        "text-inside": {
            "type": "attribute",
            "description": "进度条显示文字内置在进度条内（只在 type=line 时可用）",
            "values": []
        },
        "status": {
            "type": "attribute",
            "description": "进度条当前状态",
            "values": ["success", "exception", "warning"]
        },
        "color": {
            "type": "attribute",
            "description": "进度条背景色（会覆盖 status 状态颜色）",
            "values": []
        },
        "width": {
            "type": "attribute",
            "description": "环形进度条画布宽度（只在 type 为 circle 或 dashboard 时可用）",
            "values": [""]
        },
        "show-text": {
            "type": "attribute",
            "description": "是否显示进度条文字内容",
            "values": []
        },
        "stroke-linecap": {
            "type": "attribute",
            "description": "circle/dashboard 类型路径两端的形状",
            "values": ["butt", "round", "square"]
        },
        "format": {
            "type": "attribute",
            "description": "指定进度条文字内容",
            "values": []
        }
    },
    "el-tree": {
        "_self": {
            "description": "用清晰的层级结构展示信息，可展开或折叠。",
            "text": ["<el-tree\n\tshow-checkbox\n\t:data=\"$1\"\n\t:props=\"$2\"\n\t@node-click=\"$3\">\n</el-tree>"]
        },
        "data": {
            "type": "attribute",
            "description": "展示数据",
            "values": []
        },
        "empty-text": {
            "type": "attribute",
            "description": "内容为空的时候展示的文本",
            "values": []
        },
        "node-key": {
            "type": "attribute",
            "description": "每个树节点用来作为唯一标识的属性，整棵树应该是唯一的",
            "values": []
        },
        "props": {
            "type": "attribute",
            "description": "配置选项，具体看下表",
            "values": []
        },
        "render-after-expand": {
            "type": "attribute",
            "description": "是否在第一次展开某个树节点后才渲染其子节点",
            "values": []
        },
        "load": {
            "type": "attribute",
            "description": "加载子树数据的方法，仅当 lazy 属性为true 时生效",
            "values": []
        },
        "render-content": {
            "type": "attribute",
            "description": "树节点的内容区的渲染 Function",
            "values": []
        },
        "highlight-current": {
            "type": "attribute",
            "description": "是否高亮当前选中节点，默认值是 false。",
            "values": []
        },
        "default-expand-all": {
            "type": "attribute",
            "description": "是否默认展开所有节点",
            "values": []
        },
        "expand-on-click-node": {
            "type": "attribute",
            "description": "是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点。",
            "values": []
        },
        "check-on-click-node": {
            "type": "attribute",
            "description": "是否在点击节点的时候选中节点，默认值为 false，即只有在点击复选框时才会选中节点。",
            "values": []
        },
        "auto-expand-parent": {
            "type": "attribute",
            "description": "展开子节点的时候是否自动展开父节点",
            "values": []
        },
        "default-expanded-keys": {
            "type": "attribute",
            "description": "默认展开的节点的 key 的数组",
            "values": []
        },
        "show-checkbox": {
            "type": "attribute",
            "description": "节点是否可被选择",
            "values": []
        },
        "check-strictly": {
            "type": "attribute",
            "description": "在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false",
            "values": []
        },
        "default-checked-keys": {
            "type": "attribute",
            "description": "默认勾选的节点的 key 的数组",
            "values": []
        },
        "current-node-key": {
            "type": "attribute",
            "description": "当前选中的节点",
            "values": []
        },
        "filter-node-method": {
            "type": "attribute",
            "description": "对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏",
            "values": []
        },
        "accordion": {
            "type": "attribute",
            "description": "是否每次只打开一个同级树节点展开",
            "values": []
        },
        "indent": {
            "type": "attribute",
            "description": "相邻级节点间的水平缩进，单位为像素",
            "values": []
        },
        "icon-class": {
            "type": "attribute",
            "description": "自定义树节点的图标",
            "values": []
        },
        "lazy": {
            "type": "attribute",
            "description": "是否懒加载子节点，需与 load 方法结合使用",
            "values": []
        },
        "draggable": {
            "type": "attribute",
            "description": "是否开启拖拽节点功能",
            "values": []
        },
        "allow-drag": {
            "type": "attribute",
            "description": "判断节点能否被拖拽",
            "values": []
        },
        "allow-drop": {
            "type": "attribute",
            "description": "拖拽时判定目标节点能否被放置。type 参数有三种情况：'prev'、'inner' 和 'next'，分别表示放置在目标节点前、插入至目标节点和放置在目标节点后",
            "values": []
        },
        "node-click": {
            "type": "method",
            "description": "节点被点击时的回调",
            "values": []
        },
        "node-contextmenu": {
            "type": "method",
            "description": "当某一节点被鼠标右键点击时会触发该事件",
            "values": []
        },
        "check-change": {
            "type": "method",
            "description": "节点选中状态发生变化时的回调",
            "values": []
        },
        "check": {
            "type": "method",
            "description": "当复选框被点击的时候触发",
            "values": []
        },
        "current-change": {
            "type": "method",
            "description": "当前选中节点变化时触发的事件",
            "values": []
        },
        "node-expand": {
            "type": "method",
            "description": "节点被展开时触发的事件",
            "values": []
        },
        "node-collapse": {
            "type": "method",
            "description": "节点被关闭时触发的事件",
            "values": []
        },
        "node-drag-start": {
            "type": "method",
            "description": "节点开始拖拽时触发的事件",
            "values": []
        },
        "node-drag-enter": {
            "type": "method",
            "description": "拖拽进入其他节点时触发的事件",
            "values": []
        },
        "node-drag-leave": {
            "type": "method",
            "description": "拖拽离开某个节点时触发的事件",
            "values": []
        },
        "node-drag-over": {
            "type": "method",
            "description": "在拖拽节点时触发的事件（类似浏览器的 mouseover 事件）",
            "values": []
        },
        "node-drag-end": {
            "type": "method",
            "description": "拖拽结束时（可能未成功）触发的事件",
            "values": []
        },
        "node-drop": {
            "type": "method",
            "description": "拖拽成功完成时触发的事件",
            "values": []
        }
    },
    "el-avatar": {
        "_self": {
            "description": "用图标、图片或者字符的形式展示用户或事物信息。",
            "text": ["<el-avatar>$1</el-avatar>"]
        },
        "icon": {
            "type": "attribute",
            "description": "设置头像的图标类型，参考 Icon 组件",
            "values": [""]
        },
        "size": {
            "type": "attribute",
            "description": "设置头像的大小",
            "values": ["number", "large", "medium", "small"]
        },
        "shape": {
            "type": "attribute",
            "description": "设置头像的形状",
            "values": ["circle", "square"]
        },
        "src": {
            "type": "attribute",
            "description": "图片头像的资源地址",
            "values": [""]
        },
        "srcSet": {
            "type": "attribute",
            "description": "以逗号分隔的一个或多个字符串列表表明一系列用户代理使用的可能的图像",
            "values": [""]
        },
        "alt": {
            "type": "attribute",
            "description": "描述图像的替换文本",
            "values": [""]
        },
        "fit": {
            "type": "attribute",
            "description": "当展示类型为图片的时候，设置图片如何适应容器框",
            "values": ["fill", "contain", "cover", "none", "scale-down"]
        },
        "error": {
            "type": "method",
            "description": "图片类头像加载失败的回调， 返回 false 会关闭组件默认的 fallback 行为",
            "values": []
        }
    },
    "el-skeleton": {
        "_self": {
            "description": "在需要等待加载内容的位置设置一个骨架屏，某些场景下比 Loading 的视觉效果更好。",
            "text": ["<el-skeleton>$1</el-skeleton>"]
        },
        "animated": {
            "type": "attribute",
            "description": "是否使用动画",
            "values": ["true", "false"]
        },
        "count": {
            "type": "attribute",
            "description": "渲染多少个 template, 建议使用尽可能小的数字",
            "values": ["integer"]
        },
        "loading": {
            "type": "attribute",
            "description": "是否显示 skeleton 骨架屏",
            "values": ["true", "false"]
        },
        "rows": {
            "type": "attribute",
            "description": "骨架屏段落数量",
            "values": ["正整数"]
        },
        "throttle": {
            "type": "attribute",
            "description": "延迟占位 DOM 渲染的时间, 单位是毫秒",
            "values": ["正整数"]
        }
    },
    "el-skeleton-item": {
        "_self": {
            "description": "",
            "text": ["<el-skeleton-item>$1</el-skeleton-item>"]
        },
        "variant": {
            "type": "attribute",
            "description": "当前显示的占位元素的样式",
            "values": ["p", "text", "h1", "h3", "text", "caption", "button", "image", "circle", "rect"]
        }
    },
    "el-empty": {
        "_self": {
            "description": "空状态时的占位提示。",
            "text": ["<el-empty description=\"$1\">$2</el-empty>"]
        },
        "image": {
            "type": "attribute",
            "description": "图片地址",
            "values": []
        },
        "image-size": {
            "type": "attribute",
            "description": "图片大小（宽度）",
            "values": []
        },
        "description": {
            "type": "attribute",
            "description": "文本描述",
            "values": []
        }
    },
    "el-descriptions": {
        "_self": {
            "description": "列表形式展示多个字段。",
            "text": ["<el-descriptions title=\"$1\">\n\t<el-descriptions-item label=\"$2\">$3</el-descriptions-item>\n</el-descriptions>"]
        },
        "border": {
            "type": "attribute",
            "description": "是否带有边框",
            "values": []
        },
        "column": {
            "type": "attribute",
            "description": "一行 Descriptions Item 的数量",
            "values": []
        },
        "direction": {
            "type": "attribute",
            "description": "排列的方向",
            "values": ["vertical", "horizontal"]
        },
        "size": {
            "type": "attribute",
            "description": "列表的尺寸",
            "values": ["medium", "small", "mini"]
        },
        "title": {
            "type": "attribute",
            "description": "标题文本，显示在左上方",
            "values": []
        },
        "extra": {
            "type": "attribute",
            "description": "操作区文本，显示在右上方",
            "values": []
        },
        "colon": {
            "type": "attribute",
            "description": "是否显示冒号",
            "values": []
        },
        "labelClassName": {
            "type": "attribute",
            "description": "自定义标签类名",
            "values": []
        },
        "contentClassName": {
            "type": "attribute",
            "description": "自定义内容类名",
            "values": []
        },
        "labelStyle": {
            "type": "attribute",
            "description": "自定义标签样式",
            "values": []
        },
        "contentStyle": {
            "type": "attribute",
            "description": "自定义内容样式",
            "values": []
        }
    },
    "el-descriptions-item": {
        "_self": {
            "description": "",
            "text": ["<el-descriptions-item label=\"$1\"></el-descriptions-item>"]
        },
        "label": {
            "type": "attribute",
            "description": "标签文本",
            "values": []
        },
        "span": {
            "type": "attribute",
            "description": "列的数量",
            "values": []
        },
        "labelClassName": {
            "type": "attribute",
            "description": "自定义标签类名",
            "values": []
        },
        "contentClassName": {
            "type": "attribute",
            "description": "自定义内容类名",
            "values": []
        },
        "labelStyle": {
            "type": "attribute",
            "description": "自定义标签样式",
            "values": []
        },
        "contentStyle": {
            "type": "attribute",
            "description": "自定义内容样式",
            "values": []
        }
    },
    "el-tab-pane": {
        "_self": {
            "description": "",
            "text": ["<el-tab-pane label=\"$1\" name=\"$2\">$3</el-tab-pane>"]
        },
        "label": {
            "type": "attribute",
            "description": "选项卡标题",
            "values": []
        },
        "disabled": {
            "type": "attribute",
            "description": "是否禁用",
            "values": []
        },
        "name": {
            "type": "attribute",
            "description": "与选项卡绑定值 value 对应的标识符，表示选项卡别名",
            "values": []
        },
        "closable": {
            "type": "attribute",
            "description": "标签是否可关闭",
            "values": []
        },
        "lazy": {
            "type": "attribute",
            "description": "标签是否延迟渲染",
            "values": []
        }
    },
    "el-breadcrumb-item": {
        "_self": {
            "description": "",
            "text": ["<el-breadcrumb-item></el-breadcrumb-item>"]
        },
        "to": {
            "type": "attribute",
            "description": "路由跳转对象，同 vue-router 的 to",
            "values": []
        },
        "replace": {
            "type": "attribute",
            "description": "在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录",
            "values": []
        }
    },
    "el-page-header": {
        "_self": {
            "description": "如果页面的路径比较简单，推荐使用页头组件而非面包屑组件。",
            "text": ["<el-page-header @back=\"$1\" content=\"$2\"></el-page-header>"]
        },
        "title": {
            "type": "attribute",
            "description": "标题",
            "values": []
        },
        "content": {
            "type": "attribute",
            "description": "内容",
            "values": []
        },
        "back": {
            "type": "method",
            "description": "点击左侧区域触发",
            "values": []
        }
    },
    "el-dropdown-menu": {
        "_self": {
            "description": "",
            "text": ["<el-dropdown-menu></el-dropdown-menu>"]
        },
        "command": {
            "type": "attribute",
            "description": "指令",
            "values": []
        },
        "disabled": {
            "type": "attribute",
            "description": "禁用",
            "values": []
        },
        "divided": {
            "type": "attribute",
            "description": "显示分割线",
            "values": []
        },
        "icon": {
            "type": "attribute",
            "description": "图标类名",
            "values": []
        }
    },
    "el-dropdown-item": {
        "_self": {
            "description": "",
            "text": ["<el-dropdown-item></el-dropdown-item>"]
        },
        "command": {
            "type": "attribute",
            "description": "指令",
            "values": []
        },
        "disabled": {
            "type": "attribute",
            "description": "禁用",
            "values": []
        },
        "divided": {
            "type": "attribute",
            "description": "显示分割线",
            "values": []
        },
        "icon": {
            "type": "attribute",
            "description": "图标类名",
            "values": []
        }
    },
    "el-step": {
        "_self": {
            "description": "",
            "text": ["<el-step title=\"$1\"></el-step>"]
        },
        "title": {
            "type": "attribute",
            "description": "标题",
            "values": []
        },
        "description": {
            "type": "attribute",
            "description": "描述性文字",
            "values": []
        },
        "icon": {
            "type": "attribute",
            "description": "图标",
            "values": ["string"]
        },
        "status": {
            "type": "attribute",
            "description": "设置当前步骤的状态，不设置则根据 steps 确定状态",
            "values": []
        }
    },
    "el-carousel-item": {
        "_self": {
            "description": "",
            "text": ["<el-carousel-item></el-carousel-item>"]
        },
        "name": {
            "type": "attribute",
            "description": "幻灯片的名字，可用作 setActiveItem 的参数",
            "values": []
        },
        "label": {
            "type": "attribute",
            "description": "该幻灯片所对应指示器的文本",
            "values": []
        }
    },
    "el-collapse-item": {
        "_self": {
            "description": "",
            "text": ["<el-collapse-item title=\"$1\" name=\"$2\"></el-collapse-item>"]
        },
        "name": {
            "type": "attribute",
            "description": "唯一标志符",
            "values": []
        },
        "title": {
            "type": "attribute",
            "description": "面板标题",
            "values": []
        },
        "disabled": {
            "type": "attribute",
            "description": "是否禁用",
            "values": []
        }
    },
    "el-timeline-item": {
        "_self": {
            "description": "",
            "text": ["<el-timeline-item timestamp=\"$1\" placement=\"$2\"></el-timeline-item>"]
        },
        "timestamp": {
            "type": "attribute",
            "description": "时间戳",
            "values": []
        },
        "hide-timestamp": {
            "type": "attribute",
            "description": "是否隐藏时间戳",
            "values": []
        },
        "placement": {
            "type": "attribute",
            "description": "时间戳位置",
            "values": ["top", "bottom"]
        },
        "type": {
            "type": "attribute",
            "description": "节点类型",
            "values": ["primary", "success", "warning", "danger", "info"]
        },
        "color": {
            "type": "attribute",
            "description": "节点颜色",
            "values": ["hsl", "hsv", "hex", "rgb"]
        },
        "size": {
            "type": "attribute",
            "description": "节点尺寸",
            "values": ["normal", "large"]
        },
        "icon": {
            "type": "attribute",
            "description": "节点图标",
            "values": []
        }
    },
    "el-divider": {
        "_self": {
            "description": "区隔内容的分割线。",
            "text": ["<el-divider></el-divider>"]
        },
        "direction": {
            "type": "attribute",
            "description": "设置分割线方向",
            "values": ["horizontal", "vertical"]
        },
        "content-position": {
            "type": "attribute",
            "description": "设置分割线文案的位置",
            "values": ["left", "right", "center"]
        }
    },
    "el-calendar": {
        "_self": {
            "description": "显示日期",
            "text": ["<el-calendar v-model=\"${1:value}\"></el-calendar>"]
        },
        "v-model": {
            "type": "attribute",
            "description": "绑定值",
            "values": []
        },
        "range": {
            "type": "attribute",
            "description": "时间范围，包括开始时间与结束时间。开始时间必须是周一，结束时间必须是周日，且时间跨度不能超过两个月。",
            "values": []
        },
        "first-day-of-week": {
            "type": "attribute",
            "description": "周起始日",
            "values": ["1 到 7"]
        }
    },
    "el-image": {
        "_self": {
            "description": "图片容器，在保留原生img的特性下，支持懒加载，自定义占位、加载失败等",
            "text": ["<el-image\n\tstyle=\"${1:width: 100px; height: 100px}\"\n\t:src=\"${2:url}\"\n\t:fit=\"${3:fit}\">$4</el-image>"]
        },
        "src": {
            "type": "attribute",
            "description": "图片源，同原生",
            "values": []
        },
        "fit": {
            "type": "attribute",
            "description": "确定图片如何适应容器框，同原生 object-fit",
            "values": ["fill", "contain", "cover", "none", "scale-down"]
        },
        "alt": {
            "type": "attribute",
            "description": "原生 alt",
            "values": []
        },
        "referrer-policy": {
            "type": "attribute",
            "description": "原生 referrerPolicy",
            "values": []
        },
        "lazy": {
            "type": "attribute",
            "description": "是否开启懒加载",
            "values": []
        },
        "scroll-container": {
            "type": "attribute",
            "description": "开启懒加载后，监听 scroll 事件的容器",
            "values": []
        },
        "preview-src-list": {
            "type": "attribute",
            "description": "开启图片预览功能",
            "values": []
        },
        "z-index": {
            "type": "attribute",
            "description": "设置图片预览的 z-index",
            "values": []
        },
        "load": {
            "type": "method",
            "description": "图片加载成功触发",
            "values": []
        },
        "error": {
            "type": "method",
            "description": "图片加载失败触发",
            "values": []
        }
    },
    "el-backtop": {
        "_self": {
            "description": "返回页面顶部的操作按钮",
            "text": ["<el-backtop target=\"${1:.page-component__scroll .el-scrollbar__wrap}\">$2</el-backtop>"]
        },
        "target": {
            "type": "attribute",
            "description": "触发滚动的对象",
            "values": [""]
        },
        "visibility-height": {
            "type": "attribute",
            "description": "滚动高度达到此参数值才出现",
            "values": [""]
        },
        "right": {
            "type": "attribute",
            "description": "控制其显示位置, 距离页面右边距",
            "values": [""]
        },
        "bottom": {
            "type": "attribute",
            "description": "控制其显示位置, 距离页面底部距离",
            "values": [""]
        },
        "click": {
            "type": "method",
            "description": "点击按钮触发的事件",
            "values": []
        }
    },
    "el-alert": {
        "_self": {
            "description": "用于页面中展示重要的提示信息。",
            "text": ["<el-alert\n\ttitle=\"success\"\n\ttype=\"success\"\n\tshow-icon>\n</el-alert>"]
        },
        "title": {
            "type": "attribute",
            "description": "标题",
            "values": []
        },
        "type": {
            "type": "attribute",
            "description": "主题",
            "values": ["success", "warning", "info", "error"]
        },
        "description": {
            "type": "attribute",
            "description": "辅助性文字。也可通过默认 slot 传入",
            "values": []
        },
        "closable": {
            "type": "attribute",
            "description": "是否可关闭",
            "values": []
        },
        "center": {
            "type": "attribute",
            "description": "文字是否居中",
            "values": []
        },
        "close-text": {
            "type": "attribute",
            "description": "关闭按钮自定义文本",
            "values": []
        },
        "show-icon": {
            "type": "attribute",
            "description": "是否显示图标",
            "values": []
        },
        "effect": {
            "type": "attribute",
            "description": "选择提供的主题",
            "values": ["light", "dark"]
        },
        "close": {
            "type": "method",
            "description": "关闭alert时触发的事件",
            "values": []
        }
    },
    "el-alert:icon": {
        "_self": {
            "description": "用于页面中展示重要的提示信息。",
            "text": ["<el-alert\n\ttitle=\"success\"\n\ttype=\"success\"\n\tshow-icon>\n</el-alert>"]
        }
    },
    "el-badge": {
        "_self": {
            "description": "出现在按钮、图标旁的数字或状态标记。",
            "text": ["<el-badge is-dot>$1</el-badge>"]
        },
        "value": {
            "type": "attribute",
            "description": "显示值",
            "values": []
        },
        "max": {
            "type": "attribute",
            "description": "最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型",
            "values": []
        },
        "is-dot": {
            "type": "attribute",
            "description": "小圆点",
            "values": []
        },
        "hidden": {
            "type": "attribute",
            "description": "隐藏 badge",
            "values": []
        },
        "type": {
            "type": "attribute",
            "description": "类型",
            "values": ["primary", "success", "warning", "danger", "info"]
        }
    },
    "el-badge:button": {
        "_self": {
            "description": "出现在按钮、图标旁的数字或状态标记。",
            "text": ["<el-badge is-dot>$1</el-badge>"]
        }
    },
    "el-badge:dot": {
        "_self": {
            "description": "出现在按钮、图标旁的数字或状态标记。",
            "text": ["<el-badge is-dot>$1</el-badge>"]
        }
    },
    "el-breadcrumb": {
        "_self": {
            "description": "显示当前页面的路径，快速返回之前的任意页面。",
            "text": ["<el-breadcrumb separator=\"/\">\n\t<el-breadcrumb-item :to=\"{ path: '/' }\"></el-breadcrumb-item>\n\t<el-breadcrumb-item></el-breadcrumb-item>\n</el-breadcrumb>"]
        },
        "separator": {
            "type": "attribute",
            "description": "分隔符",
            "values": []
        },
        "separator-class": {
            "type": "attribute",
            "description": "图标分隔符 class",
            "values": []
        }
    },
    "el-card": {
        "_self": {
            "description": "将信息聚合在卡片容器中展示。",
            "text": ["<el-card>\n\t<div slot=\"header\">$1</div>\n\t<div></div>\n</el-card>"]
        },
        "header": {
            "type": "attribute",
            "description": "设置 header，也可以通过 slot#header 传入 DOM",
            "values": []
        },
        "body-style": {
            "type": "attribute",
            "description": "设置 body 的样式",
            "values": []
        },
        "shadow": {
            "type": "attribute",
            "description": "设置阴影显示时机",
            "values": ["always", "hover", "never"]
        }
    },
    "el-carousel": {
        "_self": {
            "description": "在有限空间内，循环播放同一类型的图片、文字等内容",
            "text": ["<el-carousel type=\"card\" height=\"150px\">\n\t<el-carousel-item>\n\t\t$1\n\t</el-carousel-item>\n</el-carousel>"]
        },
        "height": {
            "type": "attribute",
            "description": "走马灯的高度",
            "values": []
        },
        "initial-index": {
            "type": "attribute",
            "description": "初始状态激活的幻灯片的索引，从 0 开始",
            "values": []
        },
        "trigger": {
            "type": "attribute",
            "description": "指示器的触发方式",
            "values": ["click"]
        },
        "autoplay": {
            "type": "attribute",
            "description": "是否自动切换",
            "values": []
        },
        "interval": {
            "type": "attribute",
            "description": "自动切换的时间间隔，单位为毫秒",
            "values": []
        },
        "indicator-position": {
            "type": "attribute",
            "description": "指示器的位置",
            "values": ["outside", "none"]
        },
        "arrow": {
            "type": "attribute",
            "description": "切换箭头的显示时机",
            "values": ["always", "hover", "never"]
        },
        "type": {
            "type": "attribute",
            "description": "走马灯的类型",
            "values": ["card"]
        },
        "loop": {
            "type": "attribute",
            "description": "是否循环显示",
            "values": []
        },
        "direction": {
            "type": "attribute",
            "description": "走马灯展示的方向",
            "values": ["horizontal", "vertical"]
        },
        "change": {
            "type": "method",
            "description": "幻灯片切换时触发",
            "values": []
        }
    },
    "el-carousel:card": {
        "_self": {
            "description": "在有限空间内，循环播放同一类型的图片、文字等内容",
            "text": ["<el-carousel type=\"card\" height=\"150px\">\n\t<el-carousel-item>\n\t\t$1\n\t</el-carousel-item>\n</el-carousel>"]
        }
    },
    "el-collapse": {
        "_self": {
            "description": "通过折叠面板收纳内容区域",
            "text": ["<el-collapse v-model=\"${1:activeName}\" @change=\"${2:collapseChange}\">\n\t<el-collapse-item title=\"${3:title}\" name=\"${4:name}\">\n\t\t<div>$5</div>\n\t</el-collapse-item>\n</el-collapse>"]
        },
        "v-model": {
            "type": "attribute",
            "description": "当前激活的面板(如果是手风琴模式，绑定值类型需要为string，否则为array)",
            "values": []
        },
        "accordion": {
            "type": "attribute",
            "description": "是否手风琴模式",
            "values": []
        },
        "change": {
            "type": "method",
            "description": "当前激活面板改变时触发(如果是手风琴模式，参数 activeNames 类型为string，否则为array)",
            "values": []
        }
    },
    "el-date-picker:datetime": {
        "_self": {
            "description": "用于选择或输入日期",
            "text": ["<el-date-picker v-model=\"$1\" type=\"datetime\" placeholder=\"${2:datetime}\"></el-date-picker>"]
        }
    },
    "el-dialog": {
        "_self": {
            "description": "在保留当前页面状态的情况下，告知用户并承载相关操作。",
            "text": ["<el-dialog\n\ttitle=\"\"\n\:visible.sync=\"${1:visible}\"\n\twidth=\"${2:width}\">\n\t<el-form :model=\"form\">\n\t\t<el-form-item label=\"\" :label-width=\"\">\n\t\t\t<el-input v-model=\"\"></el-input>\n\t\t</el-form-item>\n\t</el-form>\n\t<template slot=\"footer\">\n\t\t<el-button @click=\"visible = false\">取 消</el-button>\n\t\t<el-button type=\"primary\" @click=\"visible = false\">确 定</el-button>\n\t</template>\n</el-dialog>"]
        },
        "visible": {
            "type": "attribute",
            "description": "是否显示 Dialog，支持 .sync 修饰符",
            "values": []
        },
        "title": {
            "type": "attribute",
            "description": "Dialog 的标题，也可通过具名 slot （见下表）传入",
            "values": []
        },
        "width": {
            "type": "attribute",
            "description": "Dialog 的宽度",
            "values": []
        },
        "fullscreen": {
            "type": "attribute",
            "description": "是否为全屏 Dialog",
            "values": []
        },
        "top": {
            "type": "attribute",
            "description": "Dialog CSS 中的 margin-top 值",
            "values": []
        },
        "modal": {
            "type": "attribute",
            "description": "是否需要遮罩层",
            "values": []
        },
        "modal-append-to-body": {
            "type": "attribute",
            "description": "遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上",
            "values": []
        },
        "append-to-body": {
            "type": "attribute",
            "description": "Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true",
            "values": []
        },
        "lock-scroll": {
            "type": "attribute",
            "description": "是否在 Dialog 出现时将 body 滚动锁定",
            "values": []
        },
        "custom-class": {
            "type": "attribute",
            "description": "Dialog 的自定义类名",
            "values": []
        },
        "close-on-click-modal": {
            "type": "attribute",
            "description": "是否可以通过点击 modal 关闭 Dialog",
            "values": []
        },
        "close-on-press-escape": {
            "type": "attribute",
            "description": "是否可以通过按下 ESC 关闭 Dialog",
            "values": []
        },
        "show-close": {
            "type": "attribute",
            "description": "是否显示关闭按钮",
            "values": []
        },
        "before-close": {
            "type": "attribute",
            "description": "关闭前的回调，会暂停 Dialog 的关闭",
            "values": []
        },
        "center": {
            "type": "attribute",
            "description": "是否对头部和底部采用居中布局",
            "values": []
        },
        "destroy-on-close": {
            "type": "attribute",
            "description": "关闭时销毁 Dialog 中的元素",
            "values": []
        },
        "open": {
            "type": "method",
            "description": "Dialog 打开的回调",
            "values": []
        },
        "opened": {
            "type": "method",
            "description": "Dialog 打开动画结束时的回调",
            "values": []
        },
        "close": {
            "type": "method",
            "description": "Dialog 关闭的回调",
            "values": []
        },
        "closed": {
            "type": "method",
            "description": "Dialog 关闭动画结束时的回调",
            "values": []
        }
    },
    "el-dialog:form": {
        "_self": {
            "description": "在保留当前页面状态的情况下，告知用户并承载相关操作。",
            "text": ["<el-dialog\n\ttitle=\"\"\n\tv-model=\"${1:visible}\"\n\twidth=\"${2:width}\">\n\t<el-form :model=\"form\" :label-width=\"\">\n\t\t<el-form-item label=\"\">\n\t\t\t<el-input v-model=\"\"></el-input>\n\t\t</el-form-item>\n\t</el-form>\n\t<template #footer>\n\t\t<el-button @click=\"visible = false\">取 消</el-button>\n\t\t<el-button type=\"primary\" @click=\"visible = false\">确 定</el-button>\n\t</template>\n</el-dialog>"]
        }
    },
    "el-dropdown": {
        "_self": {
            "description": "将动作或菜单折叠到下拉菜单中。",
            "text": ["<el-dropdown>\n\t<span class=\"el-dropdown-link\">\n\t\tDropdown List\n\t\t<el-icon class=\"el-icon--right\">\n\t\t\t<arrow-down />\n\t\t</el-icon>\n\t</span>\n\t<template #dropdown>\n\t\t<el-dropdown-menu>\n\t\t\t<el-dropdown-item>Action 1</el-dropdown-item>\n\t\t</el-dropdown-menu>\n\t</template>\n</el-dropdown>"]
        },
        "type": {
            "type": "attribute",
            "description": "菜单按钮类型，同 Button 组件(只在split-button为 true 的情况下有效)",
            "values": []
        },
        "size": {
            "type": "attribute",
            "description": "菜单尺寸，在split-button为 true 的情况下也对触发按钮生效",
            "values": ["medium", "small", "mini"]
        },
        "split-button": {
            "type": "attribute",
            "description": "下拉触发元素呈现为按钮组",
            "values": []
        },
        "placement": {
            "type": "attribute",
            "description": "菜单弹出位置",
            "values": ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end"]
        },
        "trigger": {
            "type": "attribute",
            "description": "触发下拉的行为",
            "values": ["hover, click"]
        },
        "hide-on-click": {
            "type": "attribute",
            "description": "是否在点击菜单项后隐藏菜单",
            "values": []
        },
        "show-timeout": {
            "type": "attribute",
            "description": "展开下拉菜单的延时（仅在 trigger 为 hover 时有效）",
            "values": []
        },
        "hide-timeout": {
            "type": "attribute",
            "description": "收起下拉菜单的延时（仅在 trigger 为 hover 时有效）",
            "values": []
        },
        "tabindex": {
            "type": "attribute",
            "description": "Dropdown 组件的 tabindex",
            "values": []
        },
        "disabled": {
            "type": "attribute",
            "description": "是否禁用",
            "values": []
        },
        "click": {
            "type": "method",
            "description": "split-button 为 true 时，点击左侧按钮的回调",
            "values": []
        },
        "command": {
            "type": "method",
            "description": "点击菜单项触发的事件回调",
            "values": []
        },
        "visible-change": {
            "type": "method",
            "description": "下拉框出现/隐藏时触发",
            "values": []
        }
    },
    "el-form:inline": {
        "_self": {
            "description": "由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据",
            "text": ["<el-form :inline=\"true\" :model=\"${2:form}\" label-width=\"${3:80px}\">\n\t$4\n</el-form>"]
        }
    },
    "el-form-item:input": {
        "_self": {
            "description": "",
            "text": ["<el-form-item label=\"${1:label}\">\n<el-input type=\"textarea\" v-model=\"${2:model}\"></el-input>\n</el-form-item>"]
        }
    },
    "el-form-item:checkbox": {
        "_self": {
            "description": "",
            "text": ["<el-form-item label=\"${1:label}\">\n<el-input type=\"textarea\" v-model=\"${2:model}\"></el-input>\n</el-form-item>"]
        }
    },
    "el-form-item:radio": {
        "_self": {
            "description": "",
            "text": ["<el-form-item label=\"${1:label}\">\n<el-input type=\"textarea\" v-model=\"${2:model}\"></el-input>\n</el-form-item>"]
        }
    },
    "el-form-item:select": {
        "_self": {
            "description": "",
            "text": ["<el-form-item label=\"${1:label}\">\n<el-input type=\"textarea\" v-model=\"${2:model}\"></el-input>\n</el-form-item>"]
        }
    },
    "el-form-item:switch": {
        "_self": {
            "description": "",
            "text": ["<el-form-item label=\"${1:label}\">\n<el-input type=\"textarea\" v-model=\"${2:model}\"></el-input>\n</el-form-item>"]
        }
    },
    "el-form-item:textarea": {
        "_self": {
            "description": "",
            "text": ["<el-form-item label=\"${1:label}\">\n<el-input type=\"textarea\" v-model=\"${2:model}\"></el-input>\n</el-form-item>"]
        }
    },
    "el-input:textarea": {
        "_self": {
            "description": "通过鼠标或键盘输入字符",
            "text": ["<el-input v-model=\"$1\" placeholder=\"${2:请输入}\" :suffix-icon=\"Search\" @change=\"${3:query}\"></el-input>"]
        }
    },
    "el-input:search": {
        "_self": {
            "description": "通过鼠标或键盘输入字符",
            "text": ["<el-input v-model=\"$1\" placeholder=\"${2:请输入}\" :suffix-icon=\"Search\" @change=\"${3:query}\"></el-input>"]
        }
    },
    "el-menu": {
        "_self": {
            "description": "为网站提供导航功能的菜单。",
            "text": ["<el-menu :default-active=\"${1:activeIndex}\" mode=\"horizontal\" @select=\"handleSelect\">\n\t<el-menu-item index=\"1\"></el-menu-item>\n\t<el-submenu index=\"2\">\n\t\t<template slot=\"title\"></template>\n\t\t<el-menu-item index=\"2-1\"></el-menu-item>\n\t</el-submenu>\n</el-menu>"]
        },
        "select": {
            "type": "method",
            "description": "菜单激活回调",
            "values": []
        },
        "open": {
            "type": "method",
            "description": "sub-menu 展开的回调",
            "values": []
        },
        "close": {
            "type": "method",
            "description": "sub-menu 收起的回调",
            "values": []
        }
    },
    "el-menu:submenu": {
        "_self": {
            "description": "为网站提供导航功能的菜单。",
            "text": ["<el-menu :default-active=\"${1:activeIndex}\" mode=\"horizontal\" @select=\"handleSelect\">\n\t<el-menu-item index=\"1\"></el-menu-item>\n\t<el-submenu index=\"2\">\n\t\t<template slot=\"title\"></template>\n\t\t<el-menu-item index=\"2-1\"></el-menu-item>\n\t</el-submenu>\n</el-menu>"]
        }
    },
    "el-pagination": {
        "_self": {
            "description": "当数据量过多时，使用分页分解数据。",
            "text": ["<el-pagination\n\t@size-change=\"handleSizeChange\"\n\t@current-change=\"handleCurrentChange\"\n\t:current-page=\"pageNum\"\n\t:page-sizes=\"[10, 20, 50]\"\n\t:page-size=\"pageSize\"\n\tlayout=\"total, sizes, prev, pager, next, jumper\"\n\t:total=\"totalCount\">\n</el-pagination>"]
        },
        "small": {
            "type": "attribute",
            "description": "是否使用小型分页样式",
            "values": []
        },
        "background": {
            "type": "attribute",
            "description": "是否为分页按钮添加背景色",
            "values": []
        },
        "page-size": {
            "type": "attribute",
            "description": "每页显示条目个数，支持 .sync 修饰符",
            "values": []
        },
        "total": {
            "type": "attribute",
            "description": "总条目数",
            "values": []
        },
        "page-count": {
            "type": "attribute",
            "description": "总页数，total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-sizes 的更改，则需要使用 total 属性",
            "values": []
        },
        "pager-count": {
            "type": "attribute",
            "description": "页码按钮的数量，当总页数超过该值时会折叠",
            "values": ["大于等于 5 且小于等于 21 的奇数"]
        },
        "current-page": {
            "type": "attribute",
            "description": "当前页数，支持 .sync 修饰符",
            "values": []
        },
        "layout": {
            "type": "attribute",
            "description": "组件布局，子组件名用逗号分隔",
            "values": ["sizes, prev, pager, next, jumper, ->, total, slot"]
        },
        "page-sizes": {
            "type": "attribute",
            "description": "每页显示个数选择器的选项设置",
            "values": []
        },
        "popper-class": {
            "type": "attribute",
            "description": "每页显示个数选择器的下拉框类名",
            "values": []
        },
        "prev-text": {
            "type": "attribute",
            "description": "替代图标显示的上一页文字",
            "values": []
        },
        "next-text": {
            "type": "attribute",
            "description": "替代图标显示的下一页文字",
            "values": []
        },
        "disabled": {
            "type": "attribute",
            "description": "是否禁用",
            "values": []
        },
        "hide-on-single-page": {
            "type": "attribute",
            "description": "只有一页时是否隐藏",
            "values": []
        },
        "size-change": {
            "type": "method",
            "description": "pageSize 改变时会触发",
            "values": []
        },
        "current-change": {
            "type": "method",
            "description": "currentPage 改变时会触发",
            "values": []
        },
        "prev-click": {
            "type": "method",
            "description": "用户点击上一页按钮改变当前页后触发",
            "values": []
        },
        "next-click": {
            "type": "method",
            "description": "用户点击下一页按钮改变当前页后触发",
            "values": []
        }
    },
    "el-pagination:full": {
        "_self": {
            "description": "当数据量过多时，使用分页分解数据。",
            "text": ["<el-pagination\n\t@size-change=\"handleSizeChange\"\n\t@current-change=\"handleCurrentChange\"\n\t:current-page=\"pageNum\"\n\t:page-sizes=\"[10, 20, 50]\"\n\t:page-size=\"pageSize\"\n\tlayout=\"total, sizes, prev, pager, next, jumper\"\n\t:total=\"totalCount\">\n</el-pagination>"]
        }
    },
    "el-popover": {
        "_self": {
            "description": "Popover 的属性与 Tooltip 很类似，它们都是基于Vue-popper开发的，因此对于重复属性，请参考 Tooltip 的文档，在此文档中不做详尽解释。",
            "text": ["<el-popover\n\tref=\"popover4\"\n\tplacement=\"right\"\n\twidth=\"400\"\n\ttrigger=\"click\">\n\t<div></div>\n</el-popover>"]
        },
        "trigger": {
            "type": "attribute",
            "description": "触发方式",
            "values": ["click", "focus", "hover", "manual"]
        },
        "title": {
            "type": "attribute",
            "description": "标题",
            "values": []
        },
        "content": {
            "type": "attribute",
            "description": "显示的内容，也可以通过 slot 传入 DOM",
            "values": []
        },
        "width": {
            "type": "attribute",
            "description": "宽度",
            "values": []
        },
        "placement": {
            "type": "attribute",
            "description": "出现位置",
            "values": ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end", "right", "right-start", "right-end"]
        },
        "disabled": {
            "type": "attribute",
            "description": "Popover 是否可用",
            "values": []
        },
        "v-model": {
            "type": "attribute",
            "description": "状态是否可见",
            "values": []
        },
        "offset": {
            "type": "attribute",
            "description": "出现位置的偏移量",
            "values": []
        },
        "transition": {
            "type": "attribute",
            "description": "定义渐变动画",
            "values": []
        },
        "visible-arrow": {
            "type": "attribute",
            "description": "是否显示 Tooltip 箭头，更多参数可见Vue-popper",
            "values": []
        },
        "popper-options": {
            "type": "attribute",
            "description": "popper.js 的参数",
            "values": ["参考 popper.js 文档"]
        },
        "popper-class": {
            "type": "attribute",
            "description": "为 popper 添加类名",
            "values": []
        },
        "open-delay": {
            "type": "attribute",
            "description": "触发方式为 hover 时的显示延迟，单位为毫秒",
            "values": []
        },
        "close-delay": {
            "type": "attribute",
            "description": "触发方式为 hover 时的隐藏延迟，单位为毫秒",
            "values": []
        },
        "tabindex": {
            "type": "attribute",
            "description": "Popover 组件的 tabindex",
            "values": []
        },
        "show": {
            "type": "method",
            "description": "显示时触发",
            "values": []
        },
        "after-enter": {
            "type": "method",
            "description": "显示动画播放完毕后触发",
            "values": []
        },
        "hide": {
            "type": "method",
            "description": "隐藏时触发",
            "values": []
        },
        "after-leave": {
            "type": "method",
            "description": "隐藏动画播放完毕后触发",
            "values": []
        }
    },
    "el-popover:insert": {
        "_self": {
            "description": "Popover 的属性与 Tooltip 很类似，它们都是基于Vue-popper开发的，因此对于重复属性，请参考 Tooltip 的文档，在此文档中不做详尽解释。",
            "text": ["<el-popover\n\tref=\"popover4\"\n\tplacement=\"right\"\n\twidth=\"400\"\n\ttrigger=\"click\">\n\t<div></div>\n</el-popover>"]
        }
    },
    "el-progress:circle": {
        "_self": {
            "description": "用于展示操作进度，告知用户当前状态和预期。",
            "text": ["<el-progress :text-inside=\"true\" :stroke-width=\"18\" :percentage=\"70\"></el-progress>"]
        }
    },
    "el-progress:inside": {
        "_self": {
            "description": "用于展示操作进度，告知用户当前状态和预期。",
            "text": ["<el-progress :text-inside=\"true\" :stroke-width=\"18\" :percentage=\"70\"></el-progress>"]
        }
    },
    "el-rate:color": {
        "_self": {
            "description": "评分组件",
            "text": ["<el-rate\n\tv-model=\"3.7\"\n\tdisabled\n\tshow-score\n\ttext-color=\"#ff9900\"\n\tscore-template=\"{value}\">\n</el-rate>"]
        }
    },
    "el-rate:half": {
        "_self": {
            "description": "评分组件",
            "text": ["<el-rate\n\tv-model=\"3.7\"\n\tdisabled\n\tshow-score\n\ttext-color=\"#ff9900\"\n\tscore-template=\"{value}\">\n</el-rate>"]
        }
    },
    "el-steps": {
        "_self": {
            "description": "引导用户按照流程完成任务的分步导航条，可根据实际应用场景设定步骤，步骤不得少于 2 步。",
            "text": ["<el-steps :active=\"active\" finish-status=\"success\">\n\t<el-step title=\"step1\" icon=\"el-icon-edit\"></el-step>\n</el-steps>"]
        },
        "space": {
            "type": "attribute",
            "description": "每个 step 的间距，不填写将自适应间距。支持百分比。",
            "values": []
        },
        "direction": {
            "type": "attribute",
            "description": "显示方向",
            "values": ["vertical", "horizontal"]
        },
        "active": {
            "type": "attribute",
            "description": "设置当前激活步骤",
            "values": []
        },
        "process-status": {
            "type": "attribute",
            "description": "设置当前步骤的状态",
            "values": ["wait", "process", "finish", "error", "success"]
        },
        "finish-status": {
            "type": "attribute",
            "description": "设置结束步骤的状态",
            "values": ["wait", "process", "finish", "error", "success"]
        },
        "align-center": {
            "type": "attribute",
            "description": "进行居中对齐",
            "values": []
        },
        "simple": {
            "type": "attribute",
            "description": "是否应用简洁风格",
            "values": []
        }
    },
    "el-steps:simple": {
        "_self": {
            "description": "引导用户按照流程完成任务的分步导航条，可根据实际应用场景设定步骤，步骤不得少于 2 步。",
            "text": ["<el-steps :active=\"active\" finish-status=\"success\">\n\t<el-step title=\"step1\" icon=\"el-icon-edit\"></el-step>\n</el-steps>"]
        }
    },
    "el-steps:icon": {
        "_self": {
            "description": "引导用户按照流程完成任务的分步导航条，可根据实际应用场景设定步骤，步骤不得少于 2 步。",
            "text": ["<el-steps :active=\"active\" finish-status=\"success\">\n\t<el-step title=\"step1\" icon=\"el-icon-edit\"></el-step>\n</el-steps>"]
        }
    },
    "el-tabs": {
        "_self": {
            "description": "分隔内容上有关联但属于不同类别的数据集合。",
            "text": ["<el-tabs type=\"card\" v-model=\"${1:activeTab}\" @tab-click=\"${2:clickTab}\">\n\t<el-tab-pane label=\"${3:label}\" name=\"${4:name}\">$5</el-tab-pane>\n</el-tabs>"]
        },
        "v-model": {
            "type": "attribute",
            "description": "绑定值，选中选项卡的 name",
            "values": []
        },
        "type": {
            "type": "attribute",
            "description": "风格类型",
            "values": ["card", "border-card"]
        },
        "closable": {
            "type": "attribute",
            "description": "标签是否可关闭",
            "values": []
        },
        "addable": {
            "type": "attribute",
            "description": "标签是否可增加",
            "values": []
        },
        "editable": {
            "type": "attribute",
            "description": "标签是否同时可增加和关闭",
            "values": []
        },
        "tab-position": {
            "type": "attribute",
            "description": "选项卡所在位置",
            "values": ["top", "right", "bottom", "left"]
        },
        "stretch": {
            "type": "attribute",
            "description": "标签的宽度是否自撑开",
            "values": []
        },
        "before-leave": {
            "type": "attribute",
            "description": "切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。",
            "values": []
        },
        "tab-click": {
            "type": "method",
            "description": "tab 被选中时触发",
            "values": []
        },
        "tab-remove": {
            "type": "method",
            "description": "点击 tab 移除按钮后触发",
            "values": []
        },
        "tab-add": {
            "type": "method",
            "description": "点击 tabs 的新增按钮后触发",
            "values": []
        },
        "edit": {
            "type": "method",
            "description": "点击 tabs 的新增按钮或 tab 被关闭后触发",
            "values": []
        }
    },
    "el-tabs:card": {
        "_self": {
            "description": "分隔内容上有关联但属于不同类别的数据集合。",
            "text": ["<el-tabs type=\"card\" v-model=\"${1:activeTab}\" @tab-click=\"${2:clickTab}\">\n\t<el-tab-pane label=\"${3:label}\" name=\"${4:name}\">$5</el-tab-pane>\n</el-tabs>"]
        }
    },
    "el-table-column:left": {
        "_self": {
            "description": "",
            "text": ["<template #default=\"scope\">\n\t{{scope.row.status}}\n</template>"]
        }
    },
    "el-table-column:slot": {
        "_self": {
            "description": "",
            "text": ["<template #default=\"scope\">\n\t{{scope.row.status}}\n</template>"]
        }
    },
    "el-tag:close": {
        "_self": {
            "description": "用于标记和选择。",
            "text": ["<el-tag closable type=\"${1:success}\">$2</el-tag>"]
        }
    },
    "el-tooltip": {
        "_self": {
            "description": "常用于展示鼠标 hover 时的提示信息。",
            "text": ["<el-tooltip effect=\"dark\" content=\"$1\" placement=\"${2:top}\">\n<div slot=\"content\">$3</div>\n\t<el-button>$4</el-button>\n</el-tooltip>"]
        },
        "effect": {
            "type": "attribute",
            "description": "默认提供的主题",
            "values": ["dark", "light"]
        },
        "content": {
            "type": "attribute",
            "description": "显示的内容，也可以通过 slot#content 传入 DOM",
            "values": []
        },
        "placement": {
            "type": "attribute",
            "description": "Tooltip 的出现位置",
            "values": ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end", "right", "right-start", "right-end"]
        },
        "v-model": {
            "type": "attribute",
            "description": "状态是否可见",
            "values": []
        },
        "disabled": {
            "type": "attribute",
            "description": "Tooltip 是否可用",
            "values": []
        },
        "offset": {
            "type": "attribute",
            "description": "出现位置的偏移量",
            "values": []
        },
        "transition": {
            "type": "attribute",
            "description": "定义渐变动画",
            "values": []
        },
        "visible-arrow": {
            "type": "attribute",
            "description": "是否显示 Tooltip 箭头，更多参数可见Vue-popper",
            "values": []
        },
        "popper-options": {
            "type": "attribute",
            "description": "popper.js 的参数",
            "values": ["参考 popper.js 文档"]
        },
        "open-delay": {
            "type": "attribute",
            "description": "延迟出现，单位毫秒",
            "values": []
        },
        "manual": {
            "type": "attribute",
            "description": "手动控制模式，设置为 true 后，mouseenter 和 mouseleave 事件将不会生效",
            "values": []
        },
        "popper-class": {
            "type": "attribute",
            "description": "为 Tooltip 的 popper 添加类名",
            "values": []
        },
        "enterable": {
            "type": "attribute",
            "description": "鼠标是否可进入到 tooltip 中",
            "values": []
        },
        "hide-after": {
            "type": "attribute",
            "description": "Tooltip 出现后自动隐藏延时，单位毫秒，为 0 则不会自动隐藏",
            "values": []
        },
        "tabindex": {
            "type": "attribute",
            "description": "Tooltip 组件的 tabindex",
            "values": []
        }
    },
    "el-tooltip:content": {
        "_self": {
            "description": "常用于展示鼠标 hover 时的提示信息。",
            "text": ["<el-tooltip effect=\"dark\" content=\"$1\" placement=\"${2:top}\">\n<div slot=\"content\">$3</div>\n\t<el-button>$4</el-button>\n</el-tooltip>"]
        }
    },
    "el-tree:select": {
        "_self": {
            "description": "用清晰的层级结构展示信息，可展开或折叠。",
            "text": ["<el-tree\n\tshow-checkbox\n\t:data=\"$1\"\n\t:props=\"$2\"\n\t@node-click=\"$3\">\n</el-tree>"]
        }
    },
    "el-timeline": {
        "_self": {
            "description": "可视化地呈现时间流信息。",
            "text": ["<el-timeline :reverse=\"reverse\">\n\t<el-timeline-item\n\t\tv-for=\"(activity, index) in activities\"\n\t\t:key=\"index\"\n\t\t:timestamp=\"activity.timestamp\">\n\t\t{{activity.content}}\n\t</el-timeline-item>\n</el-timeline>"]
        },
        "reverse": {
            "type": "attribute",
            "description": "指定节点排序方向，默认为正序",
            "values": []
        }
    },
    "el-infinite-scroll": {
        "_self": {
            "description": "",
            "text": ["<ul class=\"infinite-list\" v-infinite-scroll=\"load\" style=\"overflow:auto\">\n\t<li v-for=\"i in count\" class=\"infinite-list-item\">{{ i }}</li>\n</ul>"]
        }
    },
    "el-drawer": {
        "_self": {
            "description": "有些时候, Dialog 组件并不满足我们的需求, 比如你的表单很长, 亦或是你需要临时展示一些文档, Drawer 拥有和 Dialog 几乎相同的 API, 在 UI 上带来不一样的体验.",
            "text": ["<el-drawer\n\ttitle=\"${1:我是标题}\"\n\t:visible.sync=\"${2:drawer}\"\n\t:direction=\"${3:direction}\"\n\t:before-close=\"${4:handleClose}\">\n\t${5:<span>我来啦!</span>}\n</el-drawer>"]
        },
        "append-to-body": {
            "type": "attribute",
            "description": "Drawer 自身是否插入至 body 元素上。嵌套的 Drawer 必须指定该属性并赋值为 true",
            "values": []
        },
        "before-close": {
            "type": "attribute",
            "description": "关闭前的回调，会暂停 Drawer 的关闭",
            "values": []
        },
        "close-on-press-escape": {
            "type": "attribute",
            "description": "是否可以通过按下 ESC 关闭 Drawer",
            "values": []
        },
        "custom-class": {
            "type": "attribute",
            "description": "Drawer 的自定义类名",
            "values": []
        },
        "destroy-on-close": {
            "type": "attribute",
            "description": "控制是否在关闭 Drawer 之后将子元素全部销毁",
            "values": []
        },
        "modal": {
            "type": "attribute",
            "description": "是否需要遮罩层",
            "values": []
        },
        "modal-append-to-body": {
            "type": "attribute",
            "description": "遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Drawer 的父元素上",
            "values": []
        },
        "direction": {
            "type": "attribute",
            "description": "Drawer 打开的方向",
            "values": ["rtl", "ltr", "ttb", "btt"]
        },
        "show-close": {
            "type": "attribute",
            "description": "是否显示关闭按钮",
            "values": []
        },
        "size": {
            "type": "attribute",
            "description": "Drawer 窗体的大小, 当使用 number 类型时, 以像素为单位, 当使用 string 类型时, 请传入 'x%', 否则便会以 number 类型解释",
            "values": []
        },
        "title": {
            "type": "attribute",
            "description": "Drawer 的标题，也可通过具名 slot （见下表）传入",
            "values": []
        },
        "visible": {
            "type": "attribute",
            "description": "是否显示 Drawer，支持 .sync 修饰符",
            "values": []
        },
        "wrapperClosable": {
            "type": "attribute",
            "description": "点击遮罩层是否可以关闭 Drawer",
            "values": []
        },
        "withHeader": {
            "type": "attribute",
            "description": "控制是否显示 header 栏, 默认为 true, 当此项为 false 时, title attribute 和 title slot 均不生效",
            "values": []
        },
        "open": {
            "type": "method",
            "description": "Drawer 打开的回调",
            "values": []
        },
        "opened": {
            "type": "method",
            "description": "Drawer 打开动画结束时的回调",
            "values": []
        },
        "close": {
            "type": "method",
            "description": "Drawer 关闭的回调",
            "values": []
        },
        "closed": {
            "type": "method",
            "description": "Drawer 关闭动画结束时的回调",
            "values": []
        }
    },
    "el-popconfirm": {
        "_self": {
            "description": "点击元素，弹出气泡确认框。",
            "text": ["<el-popconfirm confirm-button-text=\"确定\" cancel-button-text=\"取消\" title=\"确定删除?\" icon=\"\" @confirm=\"confirm\" @cancel=\"cancel\">\n\t<el-button slot=\"reference\" type=\"text\" size=\"small\">删除</el-button>\n</el-popconfirm>"]
        },
        "title": {
            "type": "attribute",
            "description": "标题",
            "values": []
        },
        "confirm-button-text": {
            "type": "attribute",
            "description": "确认按钮文字",
            "values": []
        },
        "cancel-button-text": {
            "type": "attribute",
            "description": "取消按钮文字",
            "values": []
        },
        "confirm-button-type": {
            "type": "attribute",
            "description": "确认按钮类型",
            "values": []
        },
        "cancel-button-type": {
            "type": "attribute",
            "description": "取消按钮类型",
            "values": []
        },
        "icon": {
            "type": "attribute",
            "description": "Icon",
            "values": []
        },
        "icon-color": {
            "type": "attribute",
            "description": "Icon 颜色",
            "values": []
        },
        "hide-icon": {
            "type": "attribute",
            "description": "是否隐藏 Icon",
            "values": []
        },
        "confirm": {
            "type": "method",
            "description": "点击确认按钮时触发",
            "values": []
        },
        "cancel": {
            "type": "method",
            "description": "点击取消按钮时触发",
            "values": []
        }
    },
    "el-tree-select": {
        "_self": {
            "description": "",
            "text": ["<el-tree-select v-model=\"$1\" :data=\"$2\" />"]
        }
    }
}