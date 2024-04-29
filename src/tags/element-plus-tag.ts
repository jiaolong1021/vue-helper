export default {
    "el-overview": {},
    "el-button": {
        "size": {
            "type": "attribute",
            "description": "尺寸",
            "values": ["large", "large", "small"]
        },
        "type": {
            "type": "attribute",
            "description": "类型",
            "values": ["primary", "success", "warning", "danger", "info"]
        },
        "plain": {
            "type": "attribute",
            "description": "是否为朴素按钮",
            "values": ["boolean"]
        },
        "text": {
            "type": "attribute",
            "description": "是否为文字按钮",
            "values": ["boolean"]
        },
        "bg": {
            "type": "attribute",
            "description": "是否显示文字按钮背景颜色",
            "values": ["boolean"]
        },
        "link": {
            "type": "attribute",
            "description": "是否为链接按钮",
            "values": ["boolean"]
        },
        "round": {
            "type": "attribute",
            "description": "是否为圆角按钮",
            "values": ["boolean"]
        },
        "circle": {
            "type": "attribute",
            "description": "是否为圆形按钮",
            "values": ["boolean"]
        },
        "loading": {
            "type": "attribute",
            "description": "是否为加载中状态",
            "values": ["boolean"]
        },
        "loading-icon": {
            "type": "attribute",
            "description": "自定义加载中状态图标组件",
            "values": ["string"]
        },
        "disabled": {
            "type": "attribute",
            "description": "按钮是否为禁用状态",
            "values": ["boolean"]
        },
        "icon": {
            "type": "attribute",
            "description": "图标组件",
            "values": ["string"]
        },
        "autofocus": {
            "type": "attribute",
            "description": "原生 autofocus 属性",
            "values": ["boolean"]
        },
        "native-type": {
            "type": "attribute",
            "description": "原生 type 属性",
            "values": ["button", "submit", "reset"]
        },
        "auto-insert-space": {
            "type": "attribute",
            "description": "自动在两个中文字符之间插入空格",
            "values": ["boolean"]
        },
        "color": {
            "type": "attribute",
            "description": "自定义按钮颜色, 并自动计算 hover 和 active 触发后的颜色",
            "values": ["string"]
        },
        "dark": {
            "type": "attribute",
            "description": "dark 模式, 意味着自动设置 color 为 dark 模式的颜色",
            "values": ["boolean"]
        },
        "tag": {
            "type": "attribute",
            "description": "自定义元素标签",
            "values": ["string"]
        }
    },
    "el-button-group": {
        "size": {
            "type": "attribute",
            "description": "用于控制该按钮组内按钮的大小",
            "values": ["large", "large", "small"]
        },
        "type": {
            "type": "attribute",
            "description": "用于控制该按钮组内按钮的类型",
            "values": ["primary", "success", "warning", "danger", "info"]
        }
    },
    "el-border": {},
    "el-color": {},
    "el-container": {
        "direction": {
            "type": "attribute",
            "description": "子元素的排列方向",
            "values": ["horizontal", "vertical"]
        }
    },
    "el-header": {
        "height": {
            "type": "attribute",
            "description": "顶栏高度",
            "values": ["string"]
        }
    },
    "el-aside": {
        "width": {
            "type": "attribute",
            "description": "侧边栏宽度",
            "values": ["string"]
        }
    },
    "el-main": {},
    "el-footer": {
        "height": {
            "type": "attribute",
            "description": "底栏高度",
            "values": ["string"]
        }
    },
    "el-icon": {
        "color": {
            "type": "attribute",
            "description": "svg 的 fill 颜色",
            "values": ["string"]
        },
        "size": {
            "type": "attribute",
            "description": "SVG 图标的大小，size x size",
            "values": ["number"]
        }
    },
    "el-layout": {},
    "el-row": {
        "gutter": {
            "type": "attribute",
            "description": "栅格间隔",
            "values": ["number"]
        },
        "justify": {
            "type": "attribute",
            "description": "flex 布局下的水平排列方式",
            "values": ["start", "end", "center", "space-around", "space-between", "space-evenly"]
        },
        "align": {
            "type": "attribute",
            "description": "flex 布局下的垂直排列方式",
            "values": ["top", "middle", "bottom"]
        },
        "tag": {
            "type": "attribute",
            "description": "自定义元素标签",
            "values": ["string"]
        }
    },
    "el-col": {
        "span": {
            "type": "attribute",
            "description": "栅格占据的列数",
            "values": ["number"]
        },
        "offset": {
            "type": "attribute",
            "description": "栅格左侧的间隔格数",
            "values": ["number"]
        },
        "push": {
            "type": "attribute",
            "description": "栅格向右移动格数",
            "values": ["number"]
        },
        "pull": {
            "type": "attribute",
            "description": "栅格向左移动格数",
            "values": ["number"]
        },
        "xs": {
            "type": "attribute",
            "description": "<768px 响应式栅格数或者栅格属性对象",
            "values": ["number"]
        },
        "sm": {
            "type": "attribute",
            "description": "≥768px 响应式栅格数或者栅格属性对象",
            "values": ["number"]
        },
        "md": {
            "type": "attribute",
            "description": "≥992px 响应式栅格数或者栅格属性对象",
            "values": ["number"]
        },
        "lg": {
            "type": "attribute",
            "description": "≥1200px 响应式栅格数或者栅格属性对象",
            "values": ["number"]
        },
        "xl": {
            "type": "attribute",
            "description": "≥1920px 响应式栅格数或者栅格属性对象",
            "values": ["number"]
        },
        "tag": {
            "type": "attribute",
            "description": "自定义元素标签",
            "values": ["string"]
        }
    },
    "el-link": {
        "type": {
            "type": "attribute",
            "description": "类型",
            "values": ["primary", "success", "warning", "danger", "info", "default"]
        },
        "underline": {
            "type": "attribute",
            "description": "是否下划线",
            "values": ["boolean"]
        },
        "disabled": {
            "type": "attribute",
            "description": "是否禁用状态",
            "values": ["boolean"]
        },
        "href": {
            "type": "attribute",
            "description": "原生 href 属性",
            "values": ["string"]
        },
        "target": {
            "type": "attribute",
            "description": "同原生 target 属性",
            "values": ["_blank", "_parent", "_self", "_top"]
        },
        "icon": {
            "type": "attribute",
            "description": "图标组件",
            "values": ["string"]
        }
    },
    "el-text": {
        "type": {
            "type": "attribute",
            "description": "类型",
            "values": ["primary", "success", "warning", "danger", "info"]
        },
        "size": {
            "type": "attribute",
            "description": "大小",
            "values": ["large", "default", "small"]
        },
        "truncated": {
            "type": "attribute",
            "description": "显示省略号",
            "values": ["boolean"]
        },
        "line-clamp": {
            "type": "attribute",
            "description": "最大行数",
            "values": ["string"]
        },
        "tag": {
            "type": "attribute",
            "description": "自定义元素标签",
            "values": ["string"]
        }
    },
    "el-scrollbar": {
        "height": {
            "type": "attribute",
            "description": "滚动条高度",
            "values": ["string"]
        },
        "max-height": {
            "type": "attribute",
            "description": "滚动条最大高度",
            "values": ["string"]
        },
        "native": {
            "type": "attribute",
            "description": "是否使用原生滚动条样式",
            "values": ["boolean"]
        },
        "wrap-style": {
            "type": "attribute",
            "description": "包裹容器的自定义样式",
            "values": ["string"]
        },
        "wrap-class": {
            "type": "attribute",
            "description": "包裹容器的自定义类名",
            "values": ["string"]
        },
        "view-style": {
            "type": "attribute",
            "description": "视图的自定义样式",
            "values": ["string"]
        },
        "view-class": {
            "type": "attribute",
            "description": "视图的自定义类名",
            "values": ["string"]
        },
        "noresize": {
            "type": "attribute",
            "description": "不响应容器尺寸变化，如果容器尺寸不会发生变化，最好设置它可以优化性能",
            "values": ["boolean"]
        },
        "tag": {
            "type": "attribute",
            "description": "视图的元素标签",
            "values": ["string"]
        },
        "always": {
            "type": "attribute",
            "description": "滚动条总是显示",
            "values": ["boolean"]
        },
        "min-size": {
            "type": "attribute",
            "description": "滚动条最小尺寸",
            "values": ["number"]
        },
        "id": {
            "type": "attribute",
            "description": "视图ID",
            "values": ["string"]
        },
        "roleay": {
            "type": "attribute",
            "description": "视图的角色",
            "values": ["string"]
        },
        "aria-labelay": {
            "type": "attribute",
            "description": "视图的 aria-label",
            "values": ["string"]
        },
        "aria-orientationay": {
            "type": "attribute",
            "description": "视图的 aria-orientation",
            "values": ["enum"]
        },
        "scroll": {
            "type": "method",
            "description": "当触发滚动事件时，返回滚动的距离",
            "values": []
        }
    },
    "el-space": {
        "alignment": {
            "type": "attribute",
            "description": "对齐的方式",
            "values": ["stretch", "center", "normal", "start", "end"]
        },
        "class": {
            "type": "attribute",
            "description": "类名",
            "values": ["string"]
        },
        "direction": {
            "type": "attribute",
            "description": "排列的方向",
            "values": ["vertical", "horizontal"]
        },
        "prefix-cls": {
            "type": "attribute",
            "description": "给 space-items 的类名前缀",
            "values": ["string"]
        },
        "style": {
            "type": "attribute",
            "description": "额外样式",
            "values": ["string"]
        },
        "spacer": {
            "type": "attribute",
            "description": "间隔符",
            "values": ["string"]
        },
        "size": {
            "type": "attribute",
            "description": "间隔大小",
            "values": ["default", "small", "large"]
        },
        "wrap": {
            "type": "attribute",
            "description": "设置是否自动折行",
            "values": ["boolean"]
        },
        "fill": {
            "type": "attribute",
            "description": "子元素是否填充父容器",
            "values": ["boolean"]
        },
        "fill-ratio": {
            "type": "attribute",
            "description": "填充父容器的比例",
            "values": ["number"]
        }
    },
    "el-typography": {},
    "el-config-provider": {
        "locale": {
            "type": "attribute",
            "description": "翻译文本对象",
            "values": ["object"]
        },
        "size": {
            "type": "attribute",
            "description": "全局组件大小",
            "values": ["large", "default", "small"]
        },
        "zIndex": {
            "type": "attribute",
            "description": "全局初始化 zIndex 的值",
            "values": ["number"]
        },
        "namespace": {
            "type": "attribute",
            "description": "全局组件类名称前缀 (需要配合 $namespace 使用)",
            "values": ["string"]
        },
        "button": {
            "type": "attribute",
            "description": "按钮相关配置，详见下表",
            "values": ["object"]
        },
        "message": {
            "type": "attribute",
            "description": "消息相关配置， 详见下表",
            "values": ["object"]
        },
        "experimental-features": {
            "type": "attribute",
            "description": "将要添加的实验阶段的功能，所有功能都是默认设置为 false",
            "values": ["object"]
        }
    },
    "el-autocomplete": {
        "v-model": {
            "type": "attribute",
            "description": "选中项绑定值",
            "values": ["string"]
        },
        "placeholder": {
            "type": "attribute",
            "description": "占位文本",
            "values": ["string"]
        },
        "clearable": {
            "type": "attribute",
            "description": "是否可清空",
            "values": ["boolean"]
        },
        "disabled": {
            "type": "attribute",
            "description": "自动补全组件是否被禁用",
            "values": ["boolean"]
        },
        "value-key": {
            "type": "attribute",
            "description": "输入建议对象中用于显示的键名",
            "values": ["string"]
        },
        "debounce": {
            "type": "attribute",
            "description": "获取输入建议的防抖延时，单位为毫秒",
            "values": ["number"]
        },
        "placement": {
            "type": "attribute",
            "description": "菜单弹出位置",
            "values": ["top", "top- start", "top-end", "bottom", "bottom-start", "bottom-end"]
        },
        "fetch-suggestions": {
            "type": "attribute",
            "description": "获取输入建议的方法， 仅当你的输入建议数据 resolve 时，通过调用 callback(data:[])  来返回它",
            "values": ["Function"]
        },
        "trigger-on-focus": {
            "type": "attribute",
            "description": "whether show suggestions when input focus",
            "values": ["boolean"]
        },
        "select-when-unmatched": {
            "type": "attribute",
            "description": "在输入没有任何匹配建议的情况下，按下回车是否触发 select 事件",
            "values": ["boolean"]
        },
        "name": {
            "type": "attribute",
            "description": "等价于原生 input name 属性",
            "values": ["string"]
        },
        "label": {
            "type": "attribute",
            "description": "输入框关联的 label 文字",
            "values": ["string"]
        },
        "hide-loading": {
            "type": "attribute",
            "description": "是否隐藏远程加载时的加载图标",
            "values": ["boolean"]
        },
        "popper-class": {
            "type": "attribute",
            "description": "下拉列表的类名",
            "values": ["string"]
        },
        "popper-append-to-bodydeprecated": {
            "type": "attribute",
            "description": "是否将下拉列表插入至 body 元素。 在下拉列表的定位出现问题时，可将该属性设置为 false",
            "values": ["boolean"]
        },
        "teleported": {
            "type": "attribute",
            "description": "是否将下拉列表元素插入 append-to 指向的元素下",
            "values": ["boolean"]
        },
        "highlight-first-item": {
            "type": "attribute",
            "description": "是否默认高亮远程搜索结果的第一项",
            "values": ["boolean"]
        },
        "fit-input-width": {
            "type": "attribute",
            "description": "下拉框的宽度是否与输入框相同",
            "values": ["boolean"]
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
    "el-cascader": {
        "v-model": {
            "type": "attribute",
            "description": "选中项绑定值",
            "values": ["string"]
        },
        "options": {
            "type": "attribute",
            "description": "选项的数据源， value 和 label 可以通过 CascaderProps 自定义.",
            "values": ["object"]
        },
        "props": {
            "type": "attribute",
            "description": "配置选项, 请参阅下面 CascaderProps 表。",
            "values": ["object"]
        },
        "size": {
            "type": "attribute",
            "description": "尺寸",
            "values": ["large", "default", "small"]
        },
        "placeholder": {
            "type": "attribute",
            "description": "输入框占位文本",
            "values": ["string"]
        },
        "disabled": {
            "type": "attribute",
            "description": "是否禁用",
            "values": ["boolean"]
        },
        "clearable": {
            "type": "attribute",
            "description": "是否支持清空选项",
            "values": ["boolean"]
        },
        "show-all-levels": {
            "type": "attribute",
            "description": "输入框中是否显示选中值的完整路径",
            "values": ["boolean"]
        },
        "collapse-tags": {
            "type": "attribute",
            "description": "多选模式下是否折叠Tag",
            "values": ["boolean"]
        },
        "collapse-tags-tooltip": {
            "type": "attribute",
            "description": "当鼠标悬停于折叠标签的文本时，是否显示所有选中的标签。 要使用此属性，collapse-tags属性必须设定为 true",
            "values": ["boolean"]
        },
        "separator": {
            "type": "attribute",
            "description": "用于分隔选项的字符",
            "values": ["string"]
        },
        "filterable": {
            "type": "attribute",
            "description": "该选项是否可以被搜索",
            "values": ["boolean"]
        },
        "filter-method": {
            "type": "attribute",
            "description": "自定义搜索逻辑，第一个参数是node，第二个参数是keyword，返回的布尔值表示是否保留该选项",
            "values": ["Function"]
        },
        "debounce": {
            "type": "attribute",
            "description": "搜索关键词正在输入时的去抖延迟，单位为毫秒",
            "values": ["number"]
        },
        "before-filter": {
            "type": "attribute",
            "description": "过滤函数调用前，所要调用的钩子函数，该函数接收要过滤的值作为参数。 如果该函数的返回值是 false 或者是一个被拒绝的 Promise，那么接下来的过滤逻辑便不会执行。",
            "values": ["Function"]
        },
        "popper-class": {
            "type": "attribute",
            "description": "弹出内容的自定义类名",
            "values": ["string"]
        },
        "teleported": {
            "type": "attribute",
            "description": "弹层是否使用 teleport",
            "values": ["boolean"]
        },
        "popper-append-to-bodydeprecated": {
            "type": "attribute",
            "description": "是否将弹出的内容直接插入到 body 元素。 在弹出内容的边框定位出现问题时，可将该属性设置为 false",
            "values": ["boolean"]
        },
        "tag-type": {
            "type": "attribute",
            "description": "标签类型",
            "values": ["success", "info", "warning", "danger"]
        },
        "validate-event": {
            "type": "attribute",
            "description": "输入时是否触发表单的校验",
            "values": ["boolean"]
        },
        "max-collapse-tags": {
            "type": "attribute",
            "description": "需要显示的 Tag 的最大数量 只有当 collapse-tags 设置为 true 时才会生效。",
            "values": ["number"]
        },
        "change": {
            "type": "method",
            "description": "当绑定值变化时触发的事件",
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
        "v-model": {
            "type": "attribute",
            "description": "选中项绑定值",
            "values": ["string"]
        },
        "options": {
            "type": "attribute",
            "description": "选项的数据源， value 和 label 可以通过 CascaderProps 自定义.",
            "values": ["object"]
        },
        "props": {
            "type": "attribute",
            "description": "配置选项, 请参阅下面 CascaderProps 表。",
            "values": ["object"]
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
        "close": {
            "type": "method",
            "description": "面板的关闭事件，提供给 Cascader 以便做更好的判断。",
            "values": []
        }
    },
    "el-checkbox": {
        "v-model": {
            "type": "attribute",
            "description": "选中项绑定值",
            "values": ["string"]
        },
        "value": {
            "type": "attribute",
            "description": "选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效）",
            "values": ["string"]
        },
        "label": {
            "type": "attribute",
            "description": "选中状态的值，只有在绑定对象类型为 array 时有效。 如果没有 value， label则作为value使用",
            "values": ["string"]
        },
        "true-value": {
            "type": "attribute",
            "description": "选中时的值",
            "values": ["string"]
        },
        "false-value": {
            "type": "attribute",
            "description": "没有选中时的值",
            "values": ["string"]
        },
        "true-labeldeprecated": {
            "type": "attribute",
            "description": "选中时的值",
            "values": ["string"]
        },
        "false-labeldeprecated": {
            "type": "attribute",
            "description": "没有选中时的值",
            "values": ["string"]
        },
        "disabled": {
            "type": "attribute",
            "description": "是否禁用",
            "values": ["boolean"]
        },
        "border": {
            "type": "attribute",
            "description": "是否显示边框",
            "values": ["boolean"]
        },
        "size": {
            "type": "attribute",
            "description": "Checkbox 的尺寸",
            "values": ["large", "default", "small"]
        },
        "name": {
            "type": "attribute",
            "description": "原生 name 属性",
            "values": ["string"]
        },
        "checked": {
            "type": "attribute",
            "description": "当前是否勾选",
            "values": ["boolean"]
        },
        "indeterminate": {
            "type": "attribute",
            "description": "设置不确定状态，仅负责样式控制",
            "values": ["boolean"]
        },
        "validate-event": {
            "type": "attribute",
            "description": "输入时是否触发表单的校验",
            "values": ["boolean"]
        },
        "tabindex": {
            "type": "attribute",
            "description": "输入框的 tabindex",
            "values": ["string"]
        },
        "id": {
            "type": "attribute",
            "description": "input id",
            "values": ["string"]
        },
        "controlsay": {
            "type": "attribute",
            "description": "与 aria-control一致, 当 indeterminate为 true时生效",
            "values": ["boolean"]
        },
        "change": {
            "type": "method",
            "description": "当绑定值变化时触发的事件",
            "values": []
        }
    },
    "el-checkbox-group": {
        "v-model": {
            "type": "attribute",
            "description": "绑定值",
            "values": ["object"]
        },
        "size": {
            "type": "attribute",
            "description": "多选框组尺寸",
            "values": ["large", "default", "small"]
        },
        "disabled": {
            "type": "attribute",
            "description": "是否禁用",
            "values": ["boolean"]
        },
        "min": {
            "type": "attribute",
            "description": "可被勾选的 checkbox 的最小数量",
            "values": ["number"]
        },
        "max": {
            "type": "attribute",
            "description": "可被勾选的 checkbox 的最大数量",
            "values": ["number"]
        },
        "label": {
            "type": "attribute",
            "description": "为屏幕阅读器准备的标签",
            "values": ["string"]
        },
        "text-color": {
            "type": "attribute",
            "description": "当按钮为活跃状态时的字体颜色",
            "values": ["string"]
        },
        "fill": {
            "type": "attribute",
            "description": "当按钮为活跃状态时的边框和背景颜色",
            "values": ["string"]
        },
        "tag": {
            "type": "attribute",
            "description": "复选框组元素标签",
            "values": ["string"]
        },
        "validate-event": {
            "type": "attribute",
            "description": "是否触发表单验证",
            "values": ["boolean"]
        },
        "change": {
            "type": "method",
            "description": "当绑定值变化时触发的事件",
            "values": []
        }
    },
    "el-checkbox-button": {
        "value": {
            "type": "attribute",
            "description": "选中状态的值，只有在绑定对象类型为 array 时有效。",
            "values": ["string"]
        },
        "label": {
            "type": "attribute",
            "description": "选中状态的值，只有在绑定对象类型为 array 时有效。 如果没有 value， label则作为value使用",
            "values": ["string"]
        },
        "true-value": {
            "type": "attribute",
            "description": "选中时的值",
            "values": ["string"]
        },
        "false-value": {
            "type": "attribute",
            "description": "没有选中时的值",
            "values": ["string"]
        },
        "true-labeldeprecated": {
            "type": "attribute",
            "description": "选中时的值",
            "values": ["string"]
        },
        "false-labeldeprecated": {
            "type": "attribute",
            "description": "没有选中时的值",
            "values": ["string"]
        },
        "disabled": {
            "type": "attribute",
            "description": "是否禁用",
            "values": ["boolean"]
        },
        "name": {
            "type": "attribute",
            "description": "原生 name 属性",
            "values": ["string"]
        },
        "checked": {
            "type": "attribute",
            "description": "当前是否勾选",
            "values": ["boolean"]
        }
    },
    "el-color-picker": {
        "v-model": {
            "type": "attribute",
            "description": "选中项绑定值",
            "values": ["string"]
        },
        "disabled": {
            "type": "attribute",
            "description": "是否禁用",
            "values": ["boolean"]
        },
        "size": {
            "type": "attribute",
            "description": "尺寸",
            "values": ["large", "default", "small"]
        },
        "show-alpha": {
            "type": "attribute",
            "description": "是否支持透明度选择",
            "values": ["boolean"]
        },
        "color-format": {
            "type": "attribute",
            "description": "写入 v-model 的颜色的格式",
            "values": ["enum"]
        },
        "popper-class": {
            "type": "attribute",
            "description": "ColorPicker 下拉框的类名",
            "values": ["string"]
        },
        "predefine": {
            "type": "attribute",
            "description": "预定义颜色",
            "values": ["object"]
        },
        "validate-event": {
            "type": "attribute",
            "description": "输入时是否触发表单的校验",
            "values": ["boolean"]
        },
        "tabindex": {
            "type": "attribute",
            "description": "ColorPicker 的 tabindex",
            "values": ["string"]
        },
        "labelay": {
            "type": "attribute",
            "description": "ColorPicker 的 aria-label",
            "values": ["string"]
        },
        "id": {
            "type": "attribute",
            "description": "ColorPicker 的 id",
            "values": ["string"]
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
        },
        "focus": {
            "type": "method",
            "description": "当获得焦点时触发",
            "values": []
        },
        "blur": {
            "type": "method",
            "description": "当失去焦点时触发",
            "values": []
        }
    },
    "el-date-picker": {
        "v-model": {
            "type": "attribute",
            "description": "绑定值，如果它是数组，长度应该是 2",
            "values": ["number"]
        },
        "readonly": {
            "type": "attribute",
            "description": "只读",
            "values": ["boolean"]
        },
        "disabled": {
            "type": "attribute",
            "description": "禁用",
            "values": ["boolean"]
        },
        "size": {
            "type": "attribute",
            "description": "输入框尺寸",
            "values": ["large", "default", "small"]
        },
        "editable": {
            "type": "attribute",
            "description": "文本框可输入",
            "values": ["boolean"]
        },
        "clearable": {
            "type": "attribute",
            "description": "是否显示清除按钮",
            "values": ["boolean"]
        },
        "placeholder": {
            "type": "attribute",
            "description": "非范围选择时的占位内容",
            "values": ["string"]
        },
        "start-placeholder": {
            "type": "attribute",
            "description": "范围选择时开始日期的占位内容",
            "values": ["string"]
        },
        "end-placeholder": {
            "type": "attribute",
            "description": "范围选择时结束日期的占位内容",
            "values": ["string"]
        },
        "type": {
            "type": "attribute",
            "description": "显示类型",
            "values": ["primary", "success", "warning", "danger", "info"]
        },
        "format": {
            "type": "attribute",
            "description": "显示在输入框中的格式",
            "values": ["参见"]
        },
        "popper-class": {
            "type": "attribute",
            "description": "DatePicker 下拉框的类名",
            "values": ["string"]
        },
        "popper-options": {
            "type": "attribute",
            "description": "自定义 popper 选项，更多请参考 popper.js",
            "values": ["object"]
        },
        "range-separator": {
            "type": "attribute",
            "description": "选择范围时的分隔符",
            "values": ["string"]
        },
        "default-value": {
            "type": "attribute",
            "description": "可选，选择器打开时默认显示的时间",
            "values": ["object"]
        },
        "default-time": {
            "type": "attribute",
            "description": "范围选择时选中日期所使用的当日内具体时刻",
            "values": ["object"]
        },
        "value-format": {
            "type": "attribute",
            "description": "可选，绑定值的格式。 不指定则绑定值为 Date 对象",
            "values": ["参见"]
        },
        "id": {
            "type": "attribute",
            "description": "等价于原生 input id 属性",
            "values": ["string"]
        },
        "name": {
            "type": "attribute",
            "description": "等价于原生 input name 属性",
            "values": ["string"]
        },
        "unlink-panels": {
            "type": "attribute",
            "description": "在范围选择器里取消两个日期面板之间的联动",
            "values": ["boolean"]
        },
        "prefix-icon": {
            "type": "attribute",
            "description": "自定义前缀图标 如果 type的值是TimeLikeType，那么就是 Clock，不然就是 Calendar",
            "values": ["string"]
        },
        "clear-icon": {
            "type": "attribute",
            "description": "自定义清除图标",
            "values": ["string"]
        },
        "validate-event": {
            "type": "attribute",
            "description": "是否触发表单验证",
            "values": ["boolean"]
        },
        "disabled-date": {
            "type": "attribute",
            "description": "一个用来判断该日期是否被禁用的函数，接受一个 Date 对象作为参数。 应该返回一个 Boolean 值。",
            "values": ["Function"]
        },
        "shortcuts": {
            "type": "attribute",
            "description": "设置快捷选项，需要传入数组对象",
            "values": ["object"]
        },
        "cell-class-name": {
            "type": "attribute",
            "description": "设置自定义类名",
            "values": ["Function"]
        },
        "teleported": {
            "type": "attribute",
            "description": "是否将 date-picker 的下拉列表插入至 body 元素",
            "values": ["boolean"]
        },
        "change": {
            "type": "method",
            "description": "用户确认选定的值时触发",
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
        },
        "calendar-change": {
            "type": "method",
            "description": "在日历所选日期更改时触发",
            "values": []
        },
        "panel-change": {
            "type": "method",
            "description": "当日期面板改变时触发。",
            "values": []
        },
        "visible-change": {
            "type": "method",
            "description": "当 DatePicker 的下拉列表出现/消失时触发",
            "values": []
        }
    },
    "el-datetime-picker": {
        "v-model": {
            "type": "attribute",
            "description": "绑定值，如果它是数组，长度应该是 2",
            "values": ["Date"]
        },
        "readonly": {
            "type": "attribute",
            "description": "只读",
            "values": ["boolean"]
        },
        "disabled": {
            "type": "attribute",
            "description": "禁用",
            "values": ["boolean"]
        },
        "editable": {
            "type": "attribute",
            "description": "文本框可输入",
            "values": ["boolean"]
        },
        "clearable": {
            "type": "attribute",
            "description": "是否显示清除按钮",
            "values": ["boolean"]
        },
        "size": {
            "type": "attribute",
            "description": "输入框尺寸",
            "values": ["string"]
        },
        "placeholder": {
            "type": "attribute",
            "description": "非范围选择时的占位内容",
            "values": ["string"]
        },
        "start-placeholder": {
            "type": "attribute",
            "description": "范围选择时开始日期的占位内容",
            "values": ["string"]
        },
        "end-placeholder": {
            "type": "attribute",
            "description": "范围选择时结束日期的占位内容",
            "values": ["string"]
        },
        "arrow-control": {
            "type": "attribute",
            "description": "是否使用箭头进行时间选择",
            "values": ["boolean"]
        },
        "type": {
            "type": "attribute",
            "description": "显示类型",
            "values": ["string"]
        },
        "format": {
            "type": "attribute",
            "description": "显示在输入框中的格式",
            "values": ["string"]
        },
        "popper-class": {
            "type": "attribute",
            "description": "DateTimePicker 下拉框的类名",
            "values": ["string"]
        },
        "range-separator": {
            "type": "attribute",
            "description": "选择范围时的分隔符",
            "values": ["string"]
        },
        "default-value": {
            "type": "attribute",
            "description": "可选，选择器打开时默认显示的时间",
            "values": ["Date"]
        },
        "default-time": {
            "type": "attribute",
            "description": "选择日期后的默认时间值。 如未指定则默认时间值为 00:00:00",
            "values": ["Date"]
        },
        "value-format": {
            "type": "attribute",
            "description": "可选，绑定值的格式。 不指定则绑定值为 Date 对象",
            "values": ["string"]
        },
        "date-format": {
            "type": "attribute",
            "description": "可选，时间选择器下拉列表中显示的日期格式",
            "values": ["string"]
        },
        "time-format": {
            "type": "attribute",
            "description": "可选，时间选择器下拉列表中显示的时间格式",
            "values": ["string"]
        },
        "id": {
            "type": "attribute",
            "description": "等价于原生 input id 属性",
            "values": ["string"]
        },
        "name": {
            "type": "attribute",
            "description": "等价于原生 input name 属性",
            "values": ["string"]
        },
        "unlink-panels": {
            "type": "attribute",
            "description": "在范围选择器里取消两个日期面板之间的联动",
            "values": ["boolean"]
        },
        "prefix-icon": {
            "type": "attribute",
            "description": "自定义前缀图标组件",
            "values": ["string", "Component"]
        },
        "clear-icon": {
            "type": "attribute",
            "description": "自定义清除图标",
            "values": ["string", "Component"]
        },
        "shortcuts": {
            "type": "attribute",
            "description": "设置快捷选项，需要传入数组对象",
            "values": ["object[{"]
        },
        "disabled-date": {
            "type": "attribute",
            "description": "一个用来判断该日期是否被禁用的函数，接受一个 Date 对象作为参数。 应该返回一个 Boolean 值。",
            "values": ["function(Date)"]
        },
        "cell-class-name": {
            "type": "attribute",
            "description": "设置自定义类名",
            "values": ["Function(Date)"]
        },
        "teleported": {
            "type": "attribute",
            "description": "是否将 datetime-picker 的下拉列表插入至 body 元素",
            "values": ["boolean"]
        },
        "change": {
            "type": "method",
            "description": "用户确认选定的值时触发",
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
        },
        "calendar-change": {
            "type": "method",
            "description": "如果用户没有选择日期，那默认展示当前日的月份。 选中日历日期后会执行的回调，只有当 datetimerange 才生效",
            "values": []
        },
        "visible-change": {
            "type": "method",
            "description": "当 DateTimePicker 的下拉列表出现/消失时触发",
            "values": []
        }
    },
    "el-form": {
        "model": {
            "type": "attribute",
            "description": "表单数据对象",
            "values": ["object"]
        },
        "rules": {
            "type": "attribute",
            "description": "表单验证规则",
            "values": ["object"]
        },
        "inline": {
            "type": "attribute",
            "description": "行内表单模式",
            "values": ["boolean"]
        },
        "label-position": {
            "type": "attribute",
            "description": "表单域标签的位置， 当设置为 left 或 right 时，则也需要设置 label-width 属性",
            "values": ["enum"]
        },
        "label-width": {
            "type": "attribute",
            "description": "标签的长度，例如 '50px'。 作为 Form 直接子元素的 form-item 会继承该值。 可以使用 auto。",
            "values": ["string"]
        },
        "label-suffix": {
            "type": "attribute",
            "description": "表单域标签的后缀",
            "values": ["string"]
        },
        "hide-required-asterisk": {
            "type": "attribute",
            "description": "是否隐藏必填字段标签旁边的红色星号。",
            "values": ["boolean"]
        },
        "require-asterisk-position": {
            "type": "attribute",
            "description": "星号的位置。",
            "values": ["left", "right"]
        },
        "show-message": {
            "type": "attribute",
            "description": "是否显示校验错误信息",
            "values": ["boolean"]
        },
        "inline-message": {
            "type": "attribute",
            "description": "是否以行内形式展示校验信息",
            "values": ["boolean"]
        },
        "status-icon": {
            "type": "attribute",
            "description": "是否在输入框中显示校验结果反馈图标",
            "values": ["boolean"]
        },
        "validate-on-rule-change": {
            "type": "attribute",
            "description": "是否在 rules 属性改变后立即触发一次验证",
            "values": ["boolean"]
        },
        "size": {
            "type": "attribute",
            "description": "用于控制该表单内组件的尺寸",
            "values": ["large", "default", "small"]
        },
        "disabled": {
            "type": "attribute",
            "description": "是否禁用该表单内的所有组件。 如果设置为 true, 它将覆盖内部组件的 disabled 属性",
            "values": ["boolean"]
        },
        "scroll-to-error": {
            "type": "attribute",
            "description": "当校验失败时，滚动到第一个错误表单项",
            "values": ["boolean"]
        },
        "scroll-into-view-options": {
            "type": "attribute",
            "description": "当校验有失败结果时，滚动到第一个失败的表单项目 可通过 scrollIntoView 配置",
            "values": ["object"]
        },
        "validate": {
            "type": "method",
            "description": "任一表单项被校验后触发",
            "values": []
        }
    },
    "el-form-item": {
        "prop": {
            "type": "attribute",
            "description": "model 的键名。 它可以是一个属性的值(如 a.b.0 或 [a', 'b', '0'])。 在使用了 validate、resetFields 的方法时，该属性是必填的。",
            "values": ["string"]
        },
        "label": {
            "type": "attribute",
            "description": "标签文本",
            "values": ["string"]
        },
        "label-width": {
            "type": "attribute",
            "description": "标签宽度，例如 '50px'。 可以使用 auto。",
            "values": ["string"]
        },
        "required": {
            "type": "attribute",
            "description": "是否为必填项，如不设置，则会根据校验规则确认",
            "values": ["boolean"]
        },
        "rules": {
            "type": "attribute",
            "description": "表单验证规则, 具体配置见下表, 更多内容可以参考async-validator",
            "values": ["object"]
        },
        "error": {
            "type": "attribute",
            "description": "表单域验证错误时的提示信息。设置该值会导致表单验证状态变为 error，并显示该错误信息。",
            "values": ["string"]
        },
        "show-message": {
            "type": "attribute",
            "description": "是否显示校验错误信息",
            "values": ["boolean"]
        },
        "inline-message": {
            "type": "attribute",
            "description": "是否在行内显示校验信息",
            "values": ["string"]
        },
        "size": {
            "type": "attribute",
            "description": "用于控制该表单域下组件的默认尺寸",
            "values": ["large", "default", "small"]
        },
        "for": {
            "type": "attribute",
            "description": "和原生标签相同能力",
            "values": ["string"]
        },
        "validate-status": {
            "type": "attribute",
            "description": "formitem 校验的状态",
            "values": ["error", "validating", "success"]
        }
    },
    "el-input": {
        "type": {
            "type": "attribute",
            "description": "类型",
            "values": ["string"]
        },
        "v-model": {
            "type": "attribute",
            "description": "绑定值",
            "values": ["string"]
        },
        "maxlength": {
            "type": "attribute",
            "description": "同原生 maxlength 属性",
            "values": ["string"]
        },
        "minlength": {
            "type": "attribute",
            "description": "原生属性，最小输入长度",
            "values": ["string"]
        },
        "show-word-limit": {
            "type": "attribute",
            "description": "是否显示统计字数, 只在 type 为 'text' 或 'textarea' 的时候生效",
            "values": ["boolean"]
        },
        "placeholder": {
            "type": "attribute",
            "description": "输入框占位文本",
            "values": ["string"]
        },
        "clearable": {
            "type": "attribute",
            "description": "是否显示清除按钮，只有当 type 不是 textarea时生效",
            "values": ["boolean"]
        },
        "formatter": {
            "type": "attribute",
            "description": "指定输入值的格式。(只有当 type 是\"text\"时才能工作)",
            "values": ["Function"]
        },
        "parser": {
            "type": "attribute",
            "description": "指定从格式化器输入中提取的值。(仅当 type 是\"text\"时才起作用)",
            "values": ["Function"]
        },
        "show-password": {
            "type": "attribute",
            "description": "是否显示切换密码图标",
            "values": ["boolean"]
        },
        "disabled": {
            "type": "attribute",
            "description": "是否禁用",
            "values": ["boolean"]
        },
        "size": {
            "type": "attribute",
            "description": "输入框尺寸，只在 type 不为 'textarea' 时有效",
            "values": ["large", "default", "small"]
        },
        "prefix-icon": {
            "type": "attribute",
            "description": "自定义前缀图标",
            "values": ["string"]
        },
        "suffix-icon": {
            "type": "attribute",
            "description": "自定义后缀图标",
            "values": ["string"]
        },
        "rows": {
            "type": "attribute",
            "description": "输入框行数，仅 type 为 'textarea' 时有效",
            "values": ["number"]
        },
        "autosize": {
            "type": "attribute",
            "description": "textarea 高度是否自适应，仅 type 为 'textarea' 时生效。 可以接受一个对象，比如: { minRows: 2, maxRows: 6 }",
            "values": ["boolean"]
        },
        "autocomplete": {
            "type": "attribute",
            "description": "原生 autocomplete 属性",
            "values": ["string"]
        },
        "name": {
            "type": "attribute",
            "description": "等价于原生 input name 属性",
            "values": ["string"]
        },
        "readonly": {
            "type": "attribute",
            "description": "原生 readonly 属性，是否只读",
            "values": ["boolean"]
        },
        "max": {
            "type": "attribute",
            "description": "原生 max 属性，设置最大值",
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
            "values": ["none", "both", "horizontal", "vertical"]
        },
        "autofocus": {
            "type": "attribute",
            "description": "原生属性，自动获取焦点",
            "values": ["boolean"]
        },
        "form": {
            "type": "attribute",
            "description": "原生属性",
            "values": ["string"]
        },
        "labelay": {
            "type": "attribute",
            "description": "等价于原生 input aria-label 属性",
            "values": ["string"]
        },
        "tabindex": {
            "type": "attribute",
            "description": "输入框的 tabindex",
            "values": ["string"]
        },
        "validate-event": {
            "type": "attribute",
            "description": "输入时是否触发表单的校验",
            "values": ["boolean"]
        },
        "input-style": {
            "type": "attribute",
            "description": "input 元素或 textarea 元素的 style",
            "values": ["string"]
        },
        "blur": {
            "type": "method",
            "description": "当选择器的输入框失去焦点时触发",
            "values": []
        },
        "focus": {
            "type": "method",
            "description": "当选择器的输入框获得焦点时触发",
            "values": []
        },
        "change": {
            "type": "method",
            "description": "仅当 modelValue 改变时，当输入框失去焦点或用户按Enter时触发",
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
    "el-input-number": {
        "v-model": {
            "type": "attribute",
            "description": "选中项绑定值",
            "values": ["number"]
        },
        "min": {
            "type": "attribute",
            "description": "设置计数器允许的最小值",
            "values": ["number"]
        },
        "max": {
            "type": "attribute",
            "description": "设置计数器允许的最大值",
            "values": ["number"]
        },
        "step": {
            "type": "attribute",
            "description": "计数器步长",
            "values": ["number"]
        },
        "step-strictly": {
            "type": "attribute",
            "description": "是否只能输入 step 的倍数",
            "values": ["boolean"]
        },
        "precision": {
            "type": "attribute",
            "description": "数值精度",
            "values": ["number"]
        },
        "size": {
            "type": "attribute",
            "description": "计数器尺寸",
            "values": ["large", "default", "small"]
        },
        "readonly": {
            "type": "attribute",
            "description": "原生 readonly 属性，是否只读",
            "values": ["boolean"]
        },
        "disabled": {
            "type": "attribute",
            "description": "是否禁用状态",
            "values": ["boolean"]
        },
        "controls": {
            "type": "attribute",
            "description": "是否使用控制按钮",
            "values": ["boolean"]
        },
        "controls-position": {
            "type": "attribute",
            "description": "控制按钮位置",
            "values": ["right"]
        },
        "name": {
            "type": "attribute",
            "description": "等价于原生 input name 属性",
            "values": ["string"]
        },
        "label": {
            "type": "attribute",
            "description": "等价于原生 input label 属性",
            "values": ["string"]
        },
        "placeholder": {
            "type": "attribute",
            "description": "等价于原生 input placeholder 属性",
            "values": ["string"]
        },
        "id": {
            "type": "attribute",
            "description": "等价于原生 input id 属性",
            "values": ["string"]
        },
        "value-on-clear": {
            "type": "attribute",
            "description": "当输入框被清空时显示的值",
            "values": ["number"]
        },
        "validate-event": {
            "type": "attribute",
            "description": "是否触发表单验证",
            "values": ["boolean"]
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
    "el-radio": {
        "v-model": {
            "type": "attribute",
            "description": "选中项绑定值",
            "values": ["string"]
        },
        "value": {
            "type": "attribute",
            "description": "单选框的值",
            "values": ["string"]
        },
        "label": {
            "type": "attribute",
            "description": "单选框的 label 如果没有 value， label则作为value使用",
            "values": ["string"]
        },
        "disabled": {
            "type": "attribute",
            "description": "是否禁用单选框",
            "values": ["boolean"]
        },
        "border": {
            "type": "attribute",
            "description": "是否显示边框",
            "values": ["boolean"]
        },
        "size": {
            "type": "attribute",
            "description": "单选框的尺寸",
            "values": ["large", "large", "small"]
        },
        "name": {
            "type": "attribute",
            "description": "原始 name 属性",
            "values": ["string"]
        },
        "change": {
            "type": "method",
            "description": "绑定值变化时触发的事件",
            "values": []
        }
    },
    "el-radio-group": {
        "v-model": {
            "type": "attribute",
            "description": "绑定值",
            "values": ["string"]
        },
        "size": {
            "type": "attribute",
            "description": "单选框按钮或边框按钮的大小",
            "values": ["string"]
        },
        "disabled": {
            "type": "attribute",
            "description": "是否禁用",
            "values": ["boolean"]
        },
        "text-color": {
            "type": "attribute",
            "description": "按钮形式的 Radio 激活时的文本颜色",
            "values": ["string"]
        },
        "fill": {
            "type": "attribute",
            "description": "按钮形式的 Radio 激活时的填充色和边框色",
            "values": ["string"]
        },
        "validate-event": {
            "type": "attribute",
            "description": "输入时是否触发表单的校验",
            "values": ["boolean"]
        },
        "labelay": {
            "type": "attribute",
            "description": "与 RadioGroup 中的 aria-label 属性相同",
            "values": ["string"]
        },
        "name": {
            "type": "attribute",
            "description": "原生 name 属性",
            "values": ["string"]
        },
        "id": {
            "type": "attribute",
            "description": "原生 id 属性",
            "values": ["string"]
        },
        "change": {
            "type": "method",
            "description": "绑定值变化时触发的事件",
            "values": []
        }
    },
    "el-radio-button": {
        "value": {
            "type": "attribute",
            "description": "单选框的值",
            "values": ["string"]
        },
        "label": {
            "type": "attribute",
            "description": "单选框的 label 如果没有 value， label则作为value使用",
            "values": ["string"]
        },
        "disabled": {
            "type": "attribute",
            "description": "是否禁用单选框",
            "values": ["boolean"]
        },
        "name": {
            "type": "attribute",
            "description": "原生 name 属性",
            "values": ["string"]
        }
    },
    "el-rate": {
        "v-model": {
            "type": "attribute",
            "description": "选中项绑定值",
            "values": ["number"]
        },
        "max": {
            "type": "attribute",
            "description": "最大分值",
            "values": ["number"]
        },
        "size": {
            "type": "attribute",
            "description": "尺寸",
            "values": ["large", "large", "small"]
        },
        "disabled": {
            "type": "attribute",
            "description": "是否为只读",
            "values": ["boolean"]
        },
        "allow-half": {
            "type": "attribute",
            "description": "是否允许半选",
            "values": ["boolean"]
        },
        "low-threshold": {
            "type": "attribute",
            "description": "低分和中等分数的界限值， 值本身被划分在低分中",
            "values": ["number"]
        },
        "high-threshold": {
            "type": "attribute",
            "description": "高分和中等分数的界限值， 值本身被划分在高分中",
            "values": ["number"]
        },
        "colors": {
            "type": "attribute",
            "description": "icon 的颜色。 若传入数组，共有 3 个元素，为 3 个分段所对应的颜色；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的颜色",
            "values": ["object"]
        },
        "void-color": {
            "type": "attribute",
            "description": "未选中 icon 的颜色",
            "values": ["string"]
        },
        "disabled-void-color": {
            "type": "attribute",
            "description": "只读时未选中 icon 的颜色",
            "values": ["string"]
        },
        "icons": {
            "type": "attribute",
            "description": "图标组件 若传入数组，则需要传入 3 个元素，分别为 3 个部分所对应的类名；若传入对象，则可自定义分段，键名为分段的界限值，键值为对应的类名",
            "values": ["object"]
        },
        "void-icon": {
            "type": "attribute",
            "description": "未被选中的图标组件",
            "values": ["string"]
        },
        "disabled-void-icon": {
            "type": "attribute",
            "description": "禁用状态的未选择图标",
            "values": ["string"]
        },
        "show-text": {
            "type": "attribute",
            "description": "是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容",
            "values": ["boolean"]
        },
        "show-score": {
            "type": "attribute",
            "description": "是否显示当前分数， show-score 和 show-text 不能同时为真",
            "values": ["boolean"]
        },
        "text-color": {
            "type": "attribute",
            "description": "辅助文字的颜色",
            "values": ["string"]
        },
        "texts": {
            "type": "attribute",
            "description": "辅助文字数组",
            "values": ["array"]
        },
        "score-template": {
            "type": "attribute",
            "description": "分数显示模板",
            "values": ["string"]
        },
        "clearable": {
            "type": "attribute",
            "description": "是否可以重置值为 0",
            "values": ["boolean"]
        },
        "id": {
            "type": "attribute",
            "description": "原生 id 属性",
            "values": ["string"]
        },
        "labelay": {
            "type": "attribute",
            "description": "和 Rate 的 aria-label 属性保持一致",
            "values": ["string"]
        },
        "change": {
            "type": "method",
            "description": "分值改变时触发",
            "values": []
        }
    },
    "el-select": {
        "v-model": {
            "type": "attribute",
            "description": "选中项绑定值",
            "values": ["string"]
        },
        "multiple": {
            "type": "attribute",
            "description": "是否多选",
            "values": ["boolean"]
        },
        "disabled": {
            "type": "attribute",
            "description": "是否禁用",
            "values": ["boolean"]
        },
        "value-key": {
            "type": "attribute",
            "description": "作为 value 唯一标识的键名，绑定值为对象类型时必填",
            "values": ["string"]
        },
        "size": {
            "type": "attribute",
            "description": "输入框尺寸",
            "values": ["large", "large", "small"]
        },
        "clearable": {
            "type": "attribute",
            "description": "是否可以清空选项",
            "values": ["boolean"]
        },
        "collapse-tags": {
            "type": "attribute",
            "description": "多选时是否将选中值按文字的形式展示",
            "values": ["boolean"]
        },
        "collapse-tags-tooltip": {
            "type": "attribute",
            "description": "当鼠标悬停于折叠标签的文本时，是否显示所有选中的标签。 要使用此属性，collapse-tags属性必须设定为 true",
            "values": ["boolean"]
        },
        "multiple-limit": {
            "type": "attribute",
            "description": "multiple 属性设置为 true 时，代表多选场景下用户最多可以选择的项目数， 为 0 则不限制",
            "values": ["number"]
        },
        "name": {
            "type": "attribute",
            "description": "Select 输入框的原生 name 属性",
            "values": ["string"]
        },
        "effect": {
            "type": "attribute",
            "description": "tooltip 主题，内置了 dark / light 两种",
            "values": ["dark", "light"]
        },
        "autocomplete": {
            "type": "attribute",
            "description": "Select 输入框的原生 autocomplete 属性",
            "values": ["string"]
        },
        "placeholder": {
            "type": "attribute",
            "description": "占位符，默认为“Select”",
            "values": ["string"]
        },
        "filterable": {
            "type": "attribute",
            "description": "Select 组件是否可筛选",
            "values": ["boolean"]
        },
        "allow-create": {
            "type": "attribute",
            "description": "是否允许用户创建新条目， 只有当 filterable 设置为 true 时才会生效。",
            "values": ["boolean"]
        },
        "filter-method": {
            "type": "attribute",
            "description": "自定义筛选方法",
            "values": ["Function"]
        },
        "remote": {
            "type": "attribute",
            "description": "其中的选项是否从服务器远程加载",
            "values": ["boolean"]
        },
        "remote-method": {
            "type": "attribute",
            "description": "自定义远程搜索方法",
            "values": ["Function"]
        },
        "remote-show-suffix": {
            "type": "attribute",
            "description": "远程搜索方法显示后缀图标",
            "values": ["boolean"]
        },
        "loading": {
            "type": "attribute",
            "description": "是否正在从远程获取数据",
            "values": ["boolean"]
        },
        "loading-text": {
            "type": "attribute",
            "description": "从服务器加载数据时显示的文本，默认为“Loading”",
            "values": ["string"]
        },
        "no-match-text": {
            "type": "attribute",
            "description": "搜索条件无匹配时显示的文字，也可以使用 empty 插槽设置，默认是 “No matching data'”",
            "values": ["string"]
        },
        "no-data-text": {
            "type": "attribute",
            "description": "无选项时显示的文字，也可以使用 empty 插槽设置自定义内容，默认是 “No data”",
            "values": ["string"]
        },
        "popper-class": {
            "type": "attribute",
            "description": "选择器下拉菜单的自定义类名",
            "values": ["string"]
        },
        "reserve-keyword": {
            "type": "attribute",
            "description": "当 multiple 和 filterable被设置为 true 时，是否在选中一个选项后保留当前的搜索关键词",
            "values": ["boolean"]
        },
        "default-first-option": {
            "type": "attribute",
            "description": "是否在输入框按下回车时，选择第一个匹配项。 需配合 filterable 或 remote 使用",
            "values": ["boolean"]
        },
        "teleported": {
            "type": "attribute",
            "description": "是否将下拉列表插入至 body 元素",
            "values": ["boolean"]
        },
        "persistent": {
            "type": "attribute",
            "description": "当下拉选择器未被激活并且persistent设置为false，选择器会被删除。",
            "values": ["boolean"]
        },
        "automatic-dropdown": {
            "type": "attribute",
            "description": "对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单",
            "values": ["boolean"]
        },
        "clear-icon": {
            "type": "attribute",
            "description": "自定义清除图标",
            "values": ["string"]
        },
        "fit-input-width": {
            "type": "attribute",
            "description": "下拉框的宽度是否与输入框相同",
            "values": ["boolean"]
        },
        "suffix-icon": {
            "type": "attribute",
            "description": "自定义后缀图标组件",
            "values": ["string"]
        },
        "suffix-transitiondeprecated": {
            "type": "attribute",
            "description": "下拉菜单显示/消失时后缀图标的动画",
            "values": ["boolean"]
        },
        "tag-type": {
            "type": "attribute",
            "description": "标签类型",
            "values": ["success", "info", "warning", "danger"]
        },
        "validate-event": {
            "type": "attribute",
            "description": "是否触发表单验证",
            "values": ["boolean"]
        },
        "placement": {
            "type": "attribute",
            "description": "下拉框出现的位置",
            "values": ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end", "right", "right-start", "right-end"]
        },
        "fallback-placements": {
            "type": "attribute",
            "description": "dropdown 可用的 positions 请查看popper.js 文档",
            "values": ["arrary"]
        },
        "max-collapse-tags": {
            "type": "attribute",
            "description": "需要显示的 Tag 的最大数量 只有当 collapse-tags 设置为 true 时才会生效。",
            "values": ["number"]
        },
        "popper-options": {
            "type": "attribute",
            "description": "popper.js 参数",
            "values": ["objectrefer"]
        },
        "aria-labelay": {
            "type": "attribute",
            "description": "等价于原生 input aria-label 属性",
            "values": ["string"]
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
    "el-option": {
        "value": {
            "type": "attribute",
            "description": "选项的值",
            "values": ["string"]
        },
        "label": {
            "type": "attribute",
            "description": "选项的标签，若不设置则默认与value相同",
            "values": ["string"]
        },
        "disabled": {
            "type": "attribute",
            "description": "是否禁用该选项",
            "values": ["boolean"]
        }
    },
    "el-select-v2": {
        "v-model": {
            "type": "attribute",
            "description": "选中项绑定值",
            "values": ["string"]
        },
        "multiple": {
            "type": "attribute",
            "description": "是否多选",
            "values": ["boolean"]
        },
        "disabled": {
            "type": "attribute",
            "description": "是否禁用",
            "values": ["boolean"]
        },
        "value-key": {
            "type": "attribute",
            "description": "作为 value 唯一标识的键名，绑定值为对象类型时必填",
            "values": ["string"]
        },
        "size": {
            "type": "attribute",
            "description": "输入框尺寸",
            "values": ["large", "large", "small"]
        },
        "clearable": {
            "type": "attribute",
            "description": "是否可以清空选项",
            "values": ["boolean"]
        },
        "collapse-tags": {
            "type": "attribute",
            "description": "多选时是否将选中值按文字的形式展示",
            "values": ["boolean"]
        },
        "collapse-tags-tooltip": {
            "type": "attribute",
            "description": "当鼠标悬停于折叠标签的文本时，是否显示所有选中的标签。 要使用此属性，collapse-tags属性必须设定为 true",
            "values": ["boolean"]
        },
        "multiple-limit": {
            "type": "attribute",
            "description": "multiple 属性设置为 true 时，代表多选场景下用户最多可以选择的项目数， 为 0 则不限制",
            "values": ["number"]
        },
        "name": {
            "type": "attribute",
            "description": "Select 输入框的原生 name 属性",
            "values": ["string"]
        },
        "effect": {
            "type": "attribute",
            "description": "tooltip 主题，内置了 dark / light 两种",
            "values": ["dark", "light"]
        },
        "autocomplete": {
            "type": "attribute",
            "description": "Select 输入框的原生 autocomplete 属性",
            "values": ["string"]
        },
        "placeholder": {
            "type": "attribute",
            "description": "占位符，默认为“Select”",
            "values": ["string"]
        },
        "filterable": {
            "type": "attribute",
            "description": "Select 组件是否可筛选",
            "values": ["boolean"]
        },
        "allow-create": {
            "type": "attribute",
            "description": "是否允许用户创建新条目， 只有当 filterable 设置为 true 时才会生效。",
            "values": ["boolean"]
        },
        "filter-method": {
            "type": "attribute",
            "description": "自定义筛选方法",
            "values": ["Function"]
        },
        "remote": {
            "type": "attribute",
            "description": "其中的选项是否从服务器远程加载",
            "values": ["boolean"]
        },
        "remote-method": {
            "type": "attribute",
            "description": "自定义远程搜索方法",
            "values": ["Function"]
        },
        "remote-show-suffix": {
            "type": "attribute",
            "description": "远程搜索方法显示后缀图标",
            "values": ["boolean"]
        },
        "loading": {
            "type": "attribute",
            "description": "是否正在从远程获取数据",
            "values": ["boolean"]
        },
        "loading-text": {
            "type": "attribute",
            "description": "从服务器加载数据时显示的文本，默认为“Loading”",
            "values": ["string"]
        },
        "no-match-text": {
            "type": "attribute",
            "description": "搜索条件无匹配时显示的文字，也可以使用 empty 插槽设置，默认是 “No matching data'”",
            "values": ["string"]
        },
        "no-data-text": {
            "type": "attribute",
            "description": "无选项时显示的文字，也可以使用 empty 插槽设置自定义内容，默认是 “No data”",
            "values": ["string"]
        },
        "popper-class": {
            "type": "attribute",
            "description": "选择器下拉菜单的自定义类名",
            "values": ["string"]
        },
        "reserve-keyword": {
            "type": "attribute",
            "description": "当 multiple 和 filterable被设置为 true 时，是否在选中一个选项后保留当前的搜索关键词",
            "values": ["boolean"]
        },
        "default-first-option": {
            "type": "attribute",
            "description": "是否在输入框按下回车时，选择第一个匹配项。 需配合 filterable 或 remote 使用",
            "values": ["boolean"]
        },
        "teleported": {
            "type": "attribute",
            "description": "是否将下拉列表插入至 body 元素",
            "values": ["boolean"]
        },
        "persistent": {
            "type": "attribute",
            "description": "当下拉选择器未被激活并且persistent设置为false，选择器会被删除。",
            "values": ["boolean"]
        },
        "automatic-dropdown": {
            "type": "attribute",
            "description": "对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单",
            "values": ["boolean"]
        },
        "clear-icon": {
            "type": "attribute",
            "description": "自定义清除图标",
            "values": ["string"]
        },
        "fit-input-width": {
            "type": "attribute",
            "description": "下拉框的宽度是否与输入框相同",
            "values": ["boolean"]
        },
        "suffix-icon": {
            "type": "attribute",
            "description": "自定义后缀图标组件",
            "values": ["string"]
        },
        "suffix-transitiondeprecated": {
            "type": "attribute",
            "description": "下拉菜单显示/消失时后缀图标的动画",
            "values": ["boolean"]
        },
        "tag-type": {
            "type": "attribute",
            "description": "标签类型",
            "values": ["success", "info", "warning", "danger"]
        },
        "validate-event": {
            "type": "attribute",
            "description": "是否触发表单验证",
            "values": ["boolean"]
        },
        "placement": {
            "type": "attribute",
            "description": "下拉框出现的位置",
            "values": ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end", "right", "right-start", "right-end"]
        },
        "fallback-placements": {
            "type": "attribute",
            "description": "dropdown 可用的 positions 请查看popper.js 文档",
            "values": ["arrary"]
        },
        "max-collapse-tags": {
            "type": "attribute",
            "description": "需要显示的 Tag 的最大数量 只有当 collapse-tags 设置为 true 时才会生效。",
            "values": ["number"]
        },
        "popper-options": {
            "type": "attribute",
            "description": "popper.js 参数",
            "values": ["objectrefer"]
        },
        "aria-labelay": {
            "type": "attribute",
            "description": "等价于原生 input aria-label 属性",
            "values": ["string"]
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
    "el-slider": {
        "v-model": {
            "type": "attribute",
            "description": "选中项绑定值",
            "values": ["number"]
        },
        "min": {
            "type": "attribute",
            "description": "最小值",
            "values": ["number"]
        },
        "max": {
            "type": "attribute",
            "description": "最大值",
            "values": ["number"]
        },
        "disabled": {
            "type": "attribute",
            "description": "是否禁用",
            "values": ["boolean"]
        },
        "step": {
            "type": "attribute",
            "description": "步长",
            "values": ["number"]
        },
        "show-input": {
            "type": "attribute",
            "description": "是否显示输入框，仅在非范围选择时有效",
            "values": ["boolean"]
        },
        "show-input-controls": {
            "type": "attribute",
            "description": "在显示输入框的情况下，是否显示输入框的控制按钮",
            "values": ["boolean"]
        },
        "size": {
            "type": "attribute",
            "description": "slider 包装器的大小，垂直模式下该属性不可用",
            "values": ["large", "large", "small"]
        },
        "input-size": {
            "type": "attribute",
            "description": "输入框的大小，如果设置了 size 属性，默认值自动取 size",
            "values": ["enum"]
        },
        "show-stops": {
            "type": "attribute",
            "description": "是否显示间断点",
            "values": ["boolean"]
        },
        "show-tooltip": {
            "type": "attribute",
            "description": "是否显示提示信息",
            "values": ["boolean"]
        },
        "format-tooltip": {
            "type": "attribute",
            "description": "格式化提示信息",
            "values": ["Function"]
        },
        "range": {
            "type": "attribute",
            "description": "是否开启选择范围",
            "values": ["boolean"]
        },
        "vertical": {
            "type": "attribute",
            "description": "垂直模式",
            "values": ["boolean"]
        },
        "height": {
            "type": "attribute",
            "description": "滑块高度，垂直模式必填",
            "values": ["string"]
        },
        "label": {
            "type": "attribute",
            "description": "屏幕阅读器标签",
            "values": ["string"]
        },
        "range-start-label": {
            "type": "attribute",
            "description": "当 range 为true时，屏幕阅读器标签开始的标记",
            "values": ["string"]
        },
        "range-end-label": {
            "type": "attribute",
            "description": "当 range 为true时，屏幕阅读器标签结尾的标记",
            "values": ["string"]
        },
        "format-value-text": {
            "type": "attribute",
            "description": "显示屏幕阅读器的 aria-valuenow 属性的格式",
            "values": ["Function"]
        },
        "debounce": {
            "type": "attribute",
            "description": "输入时的去抖延迟，毫秒，仅在 show-input 等于 true 时有效",
            "values": ["number"]
        },
        "tooltip-class": {
            "type": "attribute",
            "description": "tooltip 的自定义类名",
            "values": ["string"]
        },
        "placement": {
            "type": "attribute",
            "description": "Tooltip 出现的位置",
            "values": ["enum"]
        },
        "marks": {
            "type": "attribute",
            "description": "标记， key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标记可以单独设置样式",
            "values": ["object"]
        },
        "validate-event": {
            "type": "attribute",
            "description": "输入时是否触发表单的校验",
            "values": ["boolean"]
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
    "el-switch": {
        "v-model": {
            "type": "attribute",
            "description": "绑定值，必须等于 active-value 或 inactive-value，默认为 Boolean 类型",
            "values": ["boolean"]
        },
        "disabled": {
            "type": "attribute",
            "description": "是否禁用",
            "values": ["boolean"]
        },
        "loading": {
            "type": "attribute",
            "description": "是否显示加载中",
            "values": ["boolean"]
        },
        "size": {
            "type": "attribute",
            "description": "switch 的大小",
            "values": ["large", "large", "small"]
        },
        "width": {
            "type": "attribute",
            "description": "switch 的宽度",
            "values": ["number"]
        },
        "inline-prompt": {
            "type": "attribute",
            "description": "无论图标或文本是否显示在点内，只会呈现文本的第一个字符",
            "values": ["boolean"]
        },
        "active-icon": {
            "type": "attribute",
            "description": "switch 状态为 on 时所显示图标，设置此项会忽略 active-text",
            "values": ["string"]
        },
        "inactive-icon": {
            "type": "attribute",
            "description": "switch 状态为 off 时所显示图标，设置此项会忽略 inactive-text",
            "values": ["string"]
        },
        "active-action-icon": {
            "type": "attribute",
            "description": "on状态下显示的图标组件",
            "values": ["string"]
        },
        "inactive-action-icon": {
            "type": "attribute",
            "description": "off状态下显示的图标组件",
            "values": ["string"]
        },
        "active-text": {
            "type": "attribute",
            "description": "switch 打开时的文字描述",
            "values": ["string"]
        },
        "inactive-text": {
            "type": "attribute",
            "description": "switch 的状态为 off 时的文字描述",
            "values": ["string"]
        },
        "active-value": {
            "type": "attribute",
            "description": "switch 状态为 on 时的值",
            "values": ["boolean"]
        },
        "inactive-value": {
            "type": "attribute",
            "description": "switch的状态为 off 时的值",
            "values": ["boolean"]
        },
        "active-colordeprecated": {
            "type": "attribute",
            "description": "当在 on 状态时的背景颜色(已废弃，请使用 CSS var --el-switch-on-color )",
            "values": ["string"]
        },
        "inactive-colordeprecated": {
            "type": "attribute",
            "description": "off 状态时的背景颜色(已废弃，使用 CSS var --el-switch-off-color )",
            "values": ["string"]
        },
        "border-colordeprecated": {
            "type": "attribute",
            "description": "开关的边框颜色 ( 已废弃，使用 CSS var --el-switch-border-color )",
            "values": ["string"]
        },
        "name": {
            "type": "attribute",
            "description": "switch 对应的 name 属性",
            "values": ["string"]
        },
        "validate-event": {
            "type": "attribute",
            "description": "是否触发表单验证",
            "values": ["boolean"]
        },
        "before-change": {
            "type": "attribute",
            "description": "switch 状态改变前的钩子， 返回 false 或者返回 Promise 且被 reject 则停止切换",
            "values": ["boolean"]
        },
        "id": {
            "type": "attribute",
            "description": "input 的 id",
            "values": ["string"]
        },
        "tabindex": {
            "type": "attribute",
            "description": "input 的 tabindex",
            "values": ["string"]
        },
        "labelay": {
            "type": "attribute",
            "description": "等价于原生 input aria-label 属性",
            "values": ["string"]
        },
        "change": {
            "type": "method",
            "description": "switch 状态发生变化时的回调函数",
            "values": []
        }
    },
    "el-time-picker": {
        "v-model": {
            "type": "attribute",
            "description": "绑定值，如果它是数组，长度应该是 2",
            "values": ["number"]
        },
        "readonly": {
            "type": "attribute",
            "description": "完全只读",
            "values": ["boolean"]
        },
        "disabled": {
            "type": "attribute",
            "description": "禁用",
            "values": ["boolean"]
        },
        "editable": {
            "type": "attribute",
            "description": "文本框可输入",
            "values": ["boolean"]
        },
        "clearable": {
            "type": "attribute",
            "description": "是否显示清除按钮",
            "values": ["boolean"]
        },
        "size": {
            "type": "attribute",
            "description": "输入框尺寸",
            "values": ["large", "large", "small"]
        },
        "placeholder": {
            "type": "attribute",
            "description": "非范围选择时的占位内容",
            "values": ["string"]
        },
        "start-placeholder": {
            "type": "attribute",
            "description": "范围选择时开始日期的占位内容",
            "values": ["string"]
        },
        "end-placeholder": {
            "type": "attribute",
            "description": "范围选择时结束日期的占位内容",
            "values": ["string"]
        },
        "is-range": {
            "type": "attribute",
            "description": "是否为时间范围选择",
            "values": ["boolean"]
        },
        "arrow-control": {
            "type": "attribute",
            "description": "是否使用箭头进行时间选择",
            "values": ["boolean"]
        },
        "popper-class": {
            "type": "attribute",
            "description": "TimePicker 下拉框的类名",
            "values": ["string"]
        },
        "range-separator": {
            "type": "attribute",
            "description": "选择范围时的分隔符",
            "values": ["string"]
        },
        "format": {
            "type": "attribute",
            "description": "显示在输入框中的格式",
            "values": ["string"]
        },
        "default-value": {
            "type": "attribute",
            "description": "可选，选择器打开时默认显示的时间",
            "values": ["Date"]
        },
        "value-format": {
            "type": "attribute",
            "description": "可选，绑定值的格式。 不指定则绑定值为 Date 对象",
            "values": ["string"]
        },
        "id": {
            "type": "attribute",
            "description": "等价于原生 input id 属性",
            "values": ["string"]
        },
        "name": {
            "type": "attribute",
            "description": "等价于原生 input name 属性",
            "values": ["string"]
        },
        "labelay": {
            "type": "attribute",
            "description": "等价于原生 input aria-label 属性",
            "values": ["string"]
        },
        "prefix-icon": {
            "type": "attribute",
            "description": "自定义前缀图标",
            "values": ["string"]
        },
        "clear-icon": {
            "type": "attribute",
            "description": "自定义清除图标",
            "values": ["string"]
        },
        "disabled-hours": {
            "type": "attribute",
            "description": "禁止选择部分小时选项",
            "values": ["Function"]
        },
        "disabled-minutes": {
            "type": "attribute",
            "description": "禁止选择部分分钟选项",
            "values": ["Function"]
        },
        "disabled-seconds": {
            "type": "attribute",
            "description": "禁止选择部分秒选项",
            "values": ["Function"]
        },
        "teleported": {
            "type": "attribute",
            "description": "是否将 popover 的下拉列表镜像至 body 元素",
            "values": ["boolean"]
        },
        "tabindex": {
            "type": "attribute",
            "description": "输入框的 tabindex",
            "values": ["string"]
        },
        "change": {
            "type": "method",
            "description": "用户确认选定的值时触发",
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
        },
        "visible-change": {
            "type": "method",
            "description": "当 TimePicker 的下拉列表出现/消失时触发",
            "values": []
        }
    },
    "el-time-select": {
        "v-model": {
            "type": "attribute",
            "description": "选中项绑定值",
            "values": ["string"]
        },
        "disabled": {
            "type": "attribute",
            "description": "禁用状态",
            "values": ["boolean"]
        },
        "editable": {
            "type": "attribute",
            "description": "文本框可输入",
            "values": ["boolean"]
        },
        "clearable": {
            "type": "attribute",
            "description": "是否显示清除按钮",
            "values": ["boolean"]
        },
        "size": {
            "type": "attribute",
            "description": "输入框尺寸",
            "values": ["large", "large", "small"]
        },
        "placeholder": {
            "type": "attribute",
            "description": "非范围选择时的占位内容",
            "values": ["string"]
        },
        "name": {
            "type": "attribute",
            "description": "原生属性",
            "values": ["string"]
        },
        "effect": {
            "type": "attribute",
            "description": "Tooltip 主题，内置了 dark / light 两种主题",
            "values": ["string"]
        },
        "prefix-icon": {
            "type": "attribute",
            "description": "自定义前缀图标",
            "values": ["string"]
        },
        "clear-icon": {
            "type": "attribute",
            "description": "自定义清除图标",
            "values": ["string"]
        },
        "start": {
            "type": "attribute",
            "description": "开始时间",
            "values": ["string"]
        },
        "end": {
            "type": "attribute",
            "description": "结束时间",
            "values": ["string"]
        },
        "step": {
            "type": "attribute",
            "description": "间隔时间",
            "values": ["string"]
        },
        "min-time": {
            "type": "attribute",
            "description": "最早时间点，早于该时间的时间段将被禁用",
            "values": ["string"]
        },
        "max-time": {
            "type": "attribute",
            "description": "最晚时间点，晚于该时间的时间段将被禁用",
            "values": ["string"]
        },
        "format": {
            "type": "attribute",
            "description": "设置时间格式",
            "values": ["string"]
        },
        "change": {
            "type": "method",
            "description": "用户确认选定的值时触发",
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
    "el-transfer": {
        "v-model": {
            "type": "attribute",
            "description": "选中项绑定值",
            "values": ["object"]
        },
        "data": {
            "type": "attribute",
            "description": "Transfer 的数据源",
            "values": ["object"]
        },
        "filterable": {
            "type": "attribute",
            "description": "是否可搜索",
            "values": ["boolean"]
        },
        "filter-placeholder": {
            "type": "attribute",
            "description": "搜索框占位符",
            "values": ["string"]
        },
        "filter-method": {
            "type": "attribute",
            "description": "自定义搜索方法",
            "values": ["Function"]
        },
        "target-order": {
            "type": "attribute",
            "description": "右侧列表元素的排序策略： 若为 original，则保持与数据源相同的顺序； 若为 push，则新加入的元素排在最后； 若为 unshift，则新加入的元素排在最前",
            "values": ["original", "push", "unshift"]
        },
        "titles": {
            "type": "attribute",
            "description": "自定义列表标题",
            "values": ["object"]
        },
        "button-texts": {
            "type": "attribute",
            "description": "自定义按钮文案",
            "values": ["object"]
        },
        "render-content": {
            "type": "attribute",
            "description": "自定义数据项渲染函数",
            "values": ["object"]
        },
        "format": {
            "type": "attribute",
            "description": "列表顶部勾选状态文案",
            "values": ["object"]
        },
        "props": {
            "type": "attribute",
            "description": "数据源的字段别名",
            "values": ["object"]
        },
        "left-default-checked": {
            "type": "attribute",
            "description": "初始状态下左侧列表的已勾选项的 key 数组",
            "values": ["object"]
        },
        "right-default-checked": {
            "type": "attribute",
            "description": "初始状态下右侧列表的已勾选项的 key 数组",
            "values": ["object"]
        },
        "validate-event": {
            "type": "attribute",
            "description": "是否触发表单验证",
            "values": ["boolean"]
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
    "el-upload": {
        "actionrequired": {
            "type": "attribute",
            "description": "请求 URL",
            "values": ["string"]
        },
        "headers": {
            "type": "attribute",
            "description": "设置上传的请求头部",
            "values": ["object"]
        },
        "method": {
            "type": "attribute",
            "description": "设置上传请求方法",
            "values": ["string"]
        },
        "multiple": {
            "type": "attribute",
            "description": "是否支持多选文件",
            "values": ["boolean"]
        },
        "data": {
            "type": "attribute",
            "description": "上传时附带的额外参数 从 v2.3.13 支持 Awaitable 数据，和 Function",
            "values": ["object"]
        },
        "name": {
            "type": "attribute",
            "description": "上传的文件字段名",
            "values": ["string"]
        },
        "with-credentials": {
            "type": "attribute",
            "description": "支持发送 cookie 凭证信息",
            "values": ["boolean"]
        },
        "show-file-list": {
            "type": "attribute",
            "description": "是否显示已上传文件列表",
            "values": ["boolean"]
        },
        "drag": {
            "type": "attribute",
            "description": "是否启用拖拽上传",
            "values": ["boolean"]
        },
        "accept": {
            "type": "attribute",
            "description": "接受上传的文件类型（thumbnail-mode 模式下此参数无效）",
            "values": ["string"]
        },
        "crossorigin": {
            "type": "attribute",
            "description": "原生属性 crossorigin",
            "values": ["anonymous", "use-credentials"]
        },
        "on-preview": {
            "type": "attribute",
            "description": "点击文件列表中已上传的文件时的钩子",
            "values": ["Function"]
        },
        "on-remove": {
            "type": "attribute",
            "description": "文件列表移除文件时的钩子",
            "values": ["Function"]
        },
        "on-success": {
            "type": "attribute",
            "description": "文件上传成功时的钩子",
            "values": ["Function"]
        },
        "on-error": {
            "type": "attribute",
            "description": "文件上传失败时的钩子",
            "values": ["Function"]
        },
        "on-progress": {
            "type": "attribute",
            "description": "文件上传时的钩子",
            "values": ["Function"]
        },
        "on-change": {
            "type": "attribute",
            "description": "文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用",
            "values": ["Function"]
        },
        "on-exceed": {
            "type": "attribute",
            "description": "当超出限制时，执行的钩子函数",
            "values": ["Function"]
        },
        "before-upload": {
            "type": "attribute",
            "description": "上传文件之前的钩子，参数为上传的文件， 若返回false或者返回 Promise 且被 reject，则停止上传。",
            "values": ["Function"]
        },
        "before-remove": {
            "type": "attribute",
            "description": "删除文件之前的钩子，参数为上传的文件和文件列表， 若返回 false 或者返回 Promise 且被 reject，则停止删除。",
            "values": ["Function"]
        },
        "v-model:file-list": {
            "type": "attribute",
            "description": "默认上传文件",
            "values": ["object"]
        },
        "list-type": {
            "type": "attribute",
            "description": "文件列表的类型",
            "values": ["text", "picture", "picture-card"]
        },
        "auto-upload": {
            "type": "attribute",
            "description": "是否自动上传文件",
            "values": ["boolean"]
        },
        "http-request": {
            "type": "attribute",
            "description": "覆盖默认的 Xhr 行为，允许自行实现上传文件的请求",
            "values": ["Function"]
        },
        "disabled": {
            "type": "attribute",
            "description": "是否禁用上传",
            "values": ["boolean"]
        },
        "limit": {
            "type": "attribute",
            "description": "允许上传文件的最大数量",
            "values": ["number"]
        }
    },
    "el-avatar": {
        "icon": {
            "type": "attribute",
            "description": "设置 Avatar 的图标类型，具体参考 Icon 组件",
            "values": ["string"]
        },
        "size": {
            "type": "attribute",
            "description": "Avatar 大小",
            "values": ["number"]
        },
        "shape": {
            "type": "attribute",
            "description": "Avatar 形状",
            "values": ["circle", "square"]
        },
        "src": {
            "type": "attribute",
            "description": "Avatar 图片的源地址",
            "values": ["string"]
        },
        "src-set": {
            "type": "attribute",
            "description": "图片 Avatar 的原生 srcset 属性",
            "values": ["string"]
        },
        "alt": {
            "type": "attribute",
            "description": "图片 Avatar 的原生 alt 属性",
            "values": ["string"]
        },
        "fit": {
            "type": "attribute",
            "description": "当展示类型为图片的时候，设置图片如何适应容器",
            "values": ["fill", "contain", "cover", "none", "scale-down"]
        },
        "error": {
            "type": "method",
            "description": "图片加载失败时触发",
            "values": []
        }
    },
    "el-badge": {
        "value": {
            "type": "attribute",
            "description": "显示值",
            "values": ["string"]
        },
        "max": {
            "type": "attribute",
            "description": "最大值，超过最大值会显示 {max}+。 只有当 value 是数字类型时起作用。",
            "values": ["number"]
        },
        "is-dot": {
            "type": "attribute",
            "description": "是否显示小圆点。",
            "values": ["boolean"]
        },
        "hidden": {
            "type": "attribute",
            "description": "是否隐藏 Badge。",
            "values": ["boolean"]
        },
        "type": {
            "type": "attribute",
            "description": "badge type.",
            "values": ["primary", "success", "warning", "danger", "info"]
        },
        "show-zero": {
            "type": "attribute",
            "description": "值为零时是否显示 Badge",
            "values": ["boolean"]
        }
    },
    "el-calendar": {
        "v-model": {
            "type": "attribute",
            "description": "选中项绑定值",
            "values": ["Date"]
        },
        "range": {
            "type": "attribute",
            "description": "时间范围，包括开始时间与结束时间。 开始时间必须是周起始日，结束时间必须是周结束日，且时间跨度不能超过两个月。",
            "values": ["array"]
        }
    },
    "el-card": {
        "header": {
            "type": "attribute",
            "description": "卡片的标题 你既可以通过设置 header 来修改标题，也可以通过 slot#header 传入 DOM 节点",
            "values": ["string"]
        },
        "footer": {
            "type": "attribute",
            "description": "卡片页脚。 你既可以通过设置 header 来修改标题，也可以通过 slot#footer 传入 DOM 节点",
            "values": ["string"]
        },
        "body-style": {
            "type": "attribute",
            "description": "body 的 CSS 样式",
            "values": ["object"]
        },
        "body-class": {
            "type": "attribute",
            "description": "body 的自定义类名",
            "values": ["string"]
        },
        "shadow": {
            "type": "attribute",
            "description": "卡片阴影显示时机",
            "values": ["always", "never", "hover"]
        }
    },
    "el-carousel": {
        "height": {
            "type": "attribute",
            "description": "carousel 的高度",
            "values": ["string"]
        },
        "initial-index": {
            "type": "attribute",
            "description": "初始状态激活的幻灯片的索引，从 0 开始",
            "values": ["number"]
        },
        "trigger": {
            "type": "attribute",
            "description": "指示器的触发方式",
            "values": ["string"]
        },
        "autoplay": {
            "type": "attribute",
            "description": "是否自动切换",
            "values": ["boolean"]
        },
        "interval": {
            "type": "attribute",
            "description": "自动切换的时间间隔，单位为毫秒",
            "values": ["number"]
        },
        "indicator-position": {
            "type": "attribute",
            "description": "指示器的位置",
            "values": ["string"]
        },
        "arrow": {
            "type": "attribute",
            "description": "切换箭头的显示时机",
            "values": ["string"]
        },
        "type": {
            "type": "attribute",
            "description": "carousel 的类型",
            "values": ["string"]
        },
        "loop": {
            "type": "attribute",
            "description": "是否循环显示",
            "values": ["boolean"]
        },
        "direction": {
            "type": "attribute",
            "description": "展示的方向",
            "values": ["string"]
        },
        "pause-on-hover": {
            "type": "attribute",
            "description": "鼠标悬浮时暂停自动切换",
            "values": ["boolean"]
        },
        "motion-blur": {
            "type": "attribute",
            "description": "添加动态模糊以给走马灯注入活力和流畅性。",
            "values": ["boolean"]
        },
        "change": {
            "type": "method",
            "description": "幻灯片切换时触发",
            "values": []
        },
        "name": {
            "type": "attribute",
            "description": "幻灯片的名字，可用作 setActiveItem 的参数",
            "values": ["string"]
        },
        "label": {
            "type": "attribute",
            "description": "该幻灯片所对应指示器的文本",
            "values": ["string"]
        }
    },
    "el-collapse": {
        "name": {
            "type": "attribute",
            "description": "唯一标志符",
            "values": ["string"]
        },
        "title": {
            "type": "attribute",
            "description": "面板标题",
            "values": ["string"]
        },
        "disabled": {
            "type": "attribute",
            "description": "是否禁用",
            "values": ["boolean"]
        }
    },
    "el-descriptions": {
        "border": {
            "type": "attribute",
            "description": "是否带有边框",
            "values": ["boolean"]
        },
        "column": {
            "type": "attribute",
            "description": "一行 Descriptions Item 的数量",
            "values": ["number"]
        },
        "direction": {
            "type": "attribute",
            "description": "排列的方向",
            "values": ["horizontal", "vertical"]
        },
        "size": {
            "type": "attribute",
            "description": "列表的尺寸",
            "values": ["large", "large", "small"]
        },
        "title": {
            "type": "attribute",
            "description": "标题文本，显示在左上方",
            "values": ["string"]
        },
        "extra": {
            "type": "attribute",
            "description": "操作区文本，显示在右上方",
            "values": ["string"]
        }
    },
    "el-descriptions-item": {
        "label": {
            "type": "attribute",
            "description": "标签文本",
            "values": ["string"]
        },
        "span": {
            "type": "attribute",
            "description": "列的数量",
            "values": ["number"]
        },
        "width": {
            "type": "attribute",
            "description": "列的宽度，不同行相同列的宽度按最大值设定（如无 border ，宽度包含标签与内容）",
            "values": ["string"]
        },
        "min-width": {
            "type": "attribute",
            "description": "列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列（如无 border，宽度包含标签与内容）",
            "values": ["string"]
        },
        "align": {
            "type": "attribute",
            "description": "列的内容对齐方式（如无 border，对标签和内容均生效）",
            "values": ["enum"]
        },
        "label-align": {
            "type": "attribute",
            "description": "列的标签对齐方式，若不设置该项，则使用内容的对齐方式（如无 border，请使用 align 参数）",
            "values": ["enum"]
        },
        "class-name": {
            "type": "attribute",
            "description": "列的内容自定义类名",
            "values": ["string"]
        },
        "label-class-name": {
            "type": "attribute",
            "description": "column label custom class name",
            "values": ["string"]
        }
    },
    "el-empty": {
        "image": {
            "type": "attribute",
            "description": "empty 组件的图像地址",
            "values": ["string"]
        },
        "image-size": {
            "type": "attribute",
            "description": "empty 组件的图像尺寸（宽度）",
            "values": ["number"]
        },
        "description": {
            "type": "attribute",
            "description": "empty 组件的描述信息",
            "values": ["string"]
        }
    },
    "el-image": {
        "url-list": {
            "type": "attribute",
            "description": "用于预览的图片链接列表",
            "values": ["object"]
        },
        "z-index": {
            "type": "attribute",
            "description": "预览时遮罩层的 z-index",
            "values": ["number"]
        },
        "initial-index": {
            "type": "attribute",
            "description": "初始预览图像索引，小于 url-list 的长度",
            "values": ["number"]
        },
        "infinite": {
            "type": "attribute",
            "description": "是否可以无限循环预览",
            "values": ["boolean"]
        },
        "hide-on-click-modal": {
            "type": "attribute",
            "description": "是否可以通过点击遮罩层关闭预览",
            "values": ["boolean"]
        },
        "teleported": {
            "type": "attribute",
            "description": "image 自身是否插入至 body 元素上。 嵌套的父元素属性会发生修改时应该将此属性设置为 true",
            "values": ["boolean"]
        },
        "zoom-rate": {
            "type": "attribute",
            "description": "图像查看器缩放事件的缩放速率。",
            "values": ["number"]
        },
        "min-scale": {
            "type": "attribute",
            "description": "图像查看器缩放事件的最小缩放比例",
            "values": ["number"]
        },
        "max-scale": {
            "type": "attribute",
            "description": "图像查看器缩放事件的最大缩放比例",
            "values": ["number"]
        },
        "close-on-press-escape": {
            "type": "attribute",
            "description": "是否可以通过按下 ESC 关闭 Image Viewer",
            "values": ["boolean"]
        },
        "close": {
            "type": "method",
            "description": "当点击 X 按钮或者在hide-on-click-modal为 true 时点击遮罩层时触发",
            "values": []
        },
        "switch": {
            "type": "method",
            "description": "切换图像时触发。",
            "values": []
        },
        "rotate": {
            "type": "method",
            "description": "旋转图像时触发。",
            "values": []
        }
    },
    "el-infinite-scroll": {},
    "el-pagination": {
        "small": {
            "type": "attribute",
            "description": "是否使用小型分页样式",
            "values": ["boolean"]
        },
        "background": {
            "type": "attribute",
            "description": "是否为分页按钮添加背景色",
            "values": ["boolean"]
        },
        "v-model:page-size": {
            "type": "attribute",
            "description": "每页显示条目个数",
            "values": ["number"]
        },
        "default-page-size": {
            "type": "attribute",
            "description": "每页默认的条目个数，不设置时默认为10",
            "values": ["number"]
        },
        "total": {
            "type": "attribute",
            "description": "总条目数",
            "values": ["number"]
        },
        "page-count": {
            "type": "attribute",
            "description": "总页数， total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-sizes 的更改，则需要使用 total 属性",
            "values": ["number"]
        },
        "pager-count": {
            "type": "attribute",
            "description": "设置最大页码按钮数。 页码按钮的数量，当总页数超过该值时会折叠",
            "values": ["number"]
        },
        "v-model:current-page": {
            "type": "attribute",
            "description": "当前页数",
            "values": ["number"]
        },
        "default-current-page": {
            "type": "attribute",
            "description": "当前页数的默认初始值，不设置时默认为 1",
            "values": ["number"]
        },
        "layout": {
            "type": "attribute",
            "description": "组件布局，子组件名用逗号分隔",
            "values": ["string"]
        },
        "page-sizes": {
            "type": "attribute",
            "description": "每页显示个数选择器的选项设置",
            "values": ["object"]
        },
        "popper-class": {
            "type": "attribute",
            "description": "每页显示个数选择器的下拉框类名",
            "values": ["string"]
        },
        "prev-text": {
            "type": "attribute",
            "description": "替代图标显示的上一页文字",
            "values": ["string"]
        },
        "prev-icon": {
            "type": "attribute",
            "description": "上一页的图标， 比 prev-text 优先级更高",
            "values": ["string"]
        },
        "next-text": {
            "type": "attribute",
            "description": "替代图标显示的下一页文字",
            "values": ["string"]
        },
        "next-icon": {
            "type": "attribute",
            "description": "下一页的图标， 比 next-text 优先级更低",
            "values": ["string"]
        },
        "disabled": {
            "type": "attribute",
            "description": "是否禁用分页",
            "values": ["boolean"]
        },
        "teleported": {
            "type": "attribute",
            "description": "是否将下拉菜单teleport至 body",
            "values": ["boolean"]
        },
        "hide-on-single-page": {
            "type": "attribute",
            "description": "只有一页时是否隐藏",
            "values": ["boolean"]
        },
        "size-change": {
            "type": "method",
            "description": "page-size 改变时触发",
            "values": []
        },
        "current-change": {
            "type": "method",
            "description": "current-page 改变时触发",
            "values": []
        },
        "change": {
            "type": "method",
            "description": "current-page 或 page-size 更改时触发",
            "values": []
        },
        "prev-click": {
            "type": "method",
            "description": "用户点击上一页按钮改变当前页时触发",
            "values": []
        },
        "next-click": {
            "type": "method",
            "description": "用户点击下一页按钮改变当前页时触发",
            "values": []
        }
    },
    "el-progress": {
        "percentagerequired": {
            "type": "attribute",
            "description": "percentage",
            "values": ["number"]
        },
        "type": {
            "type": "attribute",
            "description": "进度条类型",
            "values": ["line", "circle", "dashboard"]
        },
        "stroke-width": {
            "type": "attribute",
            "description": "进度条的宽度",
            "values": ["number"]
        },
        "text-inside": {
            "type": "attribute",
            "description": "进度条显示文字内置在进度条内（仅 type 为 'line' 时可用）",
            "values": ["boolean"]
        },
        "status": {
            "type": "attribute",
            "description": "进度条当前状态",
            "values": ["success", "exception", "warning"]
        },
        "indeterminate": {
            "type": "attribute",
            "description": "是否为动画进度条",
            "values": ["boolean"]
        },
        "duration": {
            "type": "attribute",
            "description": "控制动画进度条速度和条纹进度条流动速度",
            "values": ["number"]
        },
        "color": {
            "type": "attribute",
            "description": "进度条背景色 进度条背景色 （会覆盖 status 状态颜色）",
            "values": ["string"]
        },
        "width": {
            "type": "attribute",
            "description": "环形进度条画布宽度（只在 type 为 circle 或 dashboard 时可用）",
            "values": ["number"]
        },
        "show-text": {
            "type": "attribute",
            "description": "是否显示进度条文字内容",
            "values": ["boolean"]
        },
        "stroke-linecap": {
            "type": "attribute",
            "description": "circle/dashboard 类型路径两端的形状",
            "values": ["butt", "round", "square"]
        },
        "format": {
            "type": "attribute",
            "description": "指定进度条文字内容",
            "values": ["Function"]
        },
        "striped": {
            "type": "attribute",
            "description": "在进度条上增加条纹",
            "values": ["boolean"]
        },
        "striped-flow": {
            "type": "attribute",
            "description": "让进度条上的条纹流动起来",
            "values": ["boolean"]
        }
    },
    "el-result": {
        "title": {
            "type": "attribute",
            "description": "result 组件的标题",
            "values": ["string"]
        },
        "sub-title": {
            "type": "attribute",
            "description": "result 组件的副标题",
            "values": ["string"]
        },
        "icon": {
            "type": "attribute",
            "description": "result 组件的图标类型",
            "values": ["enum"]
        }
    },
    "el-skeleton": {
        "animated": {
            "type": "attribute",
            "description": "是否使用动画",
            "values": ["boolean"]
        },
        "count": {
            "type": "attribute",
            "description": "渲染多少个 template, 建议使用尽可能小的数字",
            "values": ["number"]
        },
        "loading": {
            "type": "attribute",
            "description": "是否显示加载结束后的 DOM 结构",
            "values": ["boolean"]
        },
        "rows": {
            "type": "attribute",
            "description": "骨架屏段落数量",
            "values": ["number"]
        },
        "throttle": {
            "type": "attribute",
            "description": "渲染延迟（以毫秒为单位）",
            "values": ["number"]
        }
    },
    "el-skeleton-item": {
        "variant": {
            "type": "attribute",
            "description": "当前渲染 skeleton 类型",
            "values": ["p", "text", "h1", "h3", "caption", "button", "image", "circle", "rect"]
        }
    },
    "el-table": {
        "data": {
            "type": "attribute",
            "description": "表数据",
            "values": ["object"]
        },
        "height": {
            "type": "attribute",
            "description": "table 的高度。 默认为自动高度。 如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。",
            "values": ["string"]
        },
        "max-height": {
            "type": "attribute",
            "description": "table 的最大高度。 合法的值为数字或者单位为 px 的高度。",
            "values": ["string"]
        },
        "stripe": {
            "type": "attribute",
            "description": "是否为斑马纹 table",
            "values": ["boolean"]
        },
        "border": {
            "type": "attribute",
            "description": "是否带有纵向边框",
            "values": ["boolean"]
        },
        "size": {
            "type": "attribute",
            "description": "Table 的尺寸",
            "values": ["large", "large", "small"]
        },
        "fit": {
            "type": "attribute",
            "description": "列的宽度是否自撑开",
            "values": ["boolean"]
        },
        "show-header": {
            "type": "attribute",
            "description": "是否显示表头",
            "values": ["boolean"]
        },
        "highlight-current-row": {
            "type": "attribute",
            "description": "是否要高亮当前行",
            "values": ["boolean"]
        },
        "current-row-key": {
            "type": "attribute",
            "description": "当前行的 key，只写属性",
            "values": ["string"]
        },
        "row-class-name": {
            "type": "attribute",
            "description": "行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。",
            "values": ["Function"]
        },
        "row-style": {
            "type": "attribute",
            "description": "行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。",
            "values": ["Function"]
        },
        "cell-class-name": {
            "type": "attribute",
            "description": "单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。",
            "values": ["Function"]
        },
        "cell-style": {
            "type": "attribute",
            "description": "单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。",
            "values": ["Function"]
        },
        "header-row-class-name": {
            "type": "attribute",
            "description": "表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。",
            "values": ["Function"]
        },
        "header-row-style": {
            "type": "attribute",
            "description": "表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。",
            "values": ["Function"]
        },
        "header-cell-class-name": {
            "type": "attribute",
            "description": "表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className。",
            "values": ["Function"]
        },
        "header-cell-style": {
            "type": "attribute",
            "description": "表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。",
            "values": ["Function"]
        },
        "row-key": {
            "type": "attribute",
            "description": "行数据的 Key，用来优化 Table 的渲染； 在使用reserve-selection功能与显示树形数据时，该属性是必填的。 类型为 String 时，支持多层访问：user.info.id，但不支持 user.info[0].id，此种情况请使用 Function。",
            "values": ["function"]
        },
        "empty-text": {
            "type": "attribute",
            "description": "空数据时显示的文本内容， 也可以通过 #empty 设置 也可以通过 #empty 设置",
            "values": ["string"]
        },
        "default-expand-all": {
            "type": "attribute",
            "description": "是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效",
            "values": ["boolean"]
        },
        "expand-row-keys": {
            "type": "attribute",
            "description": "可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组。",
            "values": ["object"]
        },
        "default-sort": {
            "type": "attribute",
            "description": "默认的排序列的 prop 和顺序。 它的 prop 属性指定默认的排序的列，order 指定默认排序的顺序",
            "values": ["object"]
        },
        "tooltip-effect": {
            "type": "attribute",
            "description": "溢出的 tooltip 的 effect",
            "values": ["dark", "light"]
        },
        "tooltip-options": {
            "type": "attribute",
            "description": "溢出 tooltip 的选项，参见下述 tooltip 组件",
            "values": ["object"]
        },
        "show-summary": {
            "type": "attribute",
            "description": "是否在表尾显示合计行",
            "values": ["boolean"]
        },
        "sum-text": {
            "type": "attribute",
            "description": "显示摘要行第一列的文本",
            "values": ["string"]
        },
        "summary-method": {
            "type": "attribute",
            "description": "自定义的合计计算方法",
            "values": ["Function"]
        },
        "span-method": {
            "type": "attribute",
            "description": "合并行或列的计算方法",
            "values": ["Function"]
        },
        "select-on-indeterminate": {
            "type": "attribute",
            "description": "在多选表格中，当仅有部分行被选中时，点击表头的多选框时的行为。 若为 true，则选中所有行；若为 false，则取消选择所有行",
            "values": ["boolean"]
        },
        "indent": {
            "type": "attribute",
            "description": "展示树形数据时，树节点的缩进",
            "values": ["number"]
        },
        "lazy": {
            "type": "attribute",
            "description": "是否懒加载子节点数据",
            "values": ["boolean"]
        },
        "load": {
            "type": "attribute",
            "description": "加载子节点数据的函数，lazy 为 true 时生效",
            "values": ["Function"]
        },
        "tree-props": {
            "type": "attribute",
            "description": "渲染嵌套数据的配置选项",
            "values": ["object"]
        },
        "table-layout": {
            "type": "attribute",
            "description": "设置表格单元、行和列的布局方式",
            "values": ["fixed", "auto"]
        },
        "scrollbar-always-on": {
            "type": "attribute",
            "description": "总是显示滚动条",
            "values": ["boolean"]
        },
        "show-overflow-tooltip": {
            "type": "attribute",
            "description": "是否隐藏额外内容并在单元格悬停时使用 Tooltip 显示它们。这将影响全部列的展示。, 详请参考tooltip-options",
            "values": ["boolean"]
        },
        "flexible": {
            "type": "attribute",
            "description": "确保主轴的最小尺寸，以便不超过内容",
            "values": ["boolean"]
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
        "cell-contextmenu": {
            "type": "method",
            "description": "当某个单元格被鼠标右键点击时会触发该事件",
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
            "description": "column 的 key， 如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件",
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
        "type": {
            "type": "attribute",
            "description": "对应列的类型。 如果设置了selection则显示多选框； 如果设置了 index 则显示该行的索引（从 1 开始计算）； 如果设置了 expand 则显示为一个可展开的按钮",
            "values": ["default", "selection", "index", "expand"]
        },
        "index": {
            "type": "attribute",
            "description": "如果设置了 type=index，可以通过传递 index 属性来自定义索引",
            "values": ["number"]
        },
        "label": {
            "type": "attribute",
            "description": "显示的标题",
            "values": ["string"]
        },
        "column-key": {
            "type": "attribute",
            "description": "column 的 key， column 的 key， 如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件",
            "values": ["string"]
        },
        "prop": {
            "type": "attribute",
            "description": "字段名称 对应列内容的字段名， 也可以使用 property属性",
            "values": ["string"]
        },
        "width": {
            "type": "attribute",
            "description": "对应列的宽度",
            "values": ["string"]
        },
        "min-width": {
            "type": "attribute",
            "description": "对应列的最小宽度， 对应列的最小宽度， 与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列",
            "values": ["string"]
        },
        "fixed": {
            "type": "attribute",
            "description": "列是否固定在左侧或者右侧。 true 表示固定在左侧",
            "values": ["left", "right"]
        },
        "render-header": {
            "type": "attribute",
            "description": "列标题 Label 区域渲染使用的 Function",
            "values": ["Function"]
        },
        "sortable": {
            "type": "attribute",
            "description": "对应列是否可以排序， 如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件",
            "values": ["boolean"]
        },
        "sort-method": {
            "type": "attribute",
            "description": "指定数据按照哪个属性进行排序，仅当sortable设置为true的时候有效。 应该如同 Array.sort 那样返回一个 Number",
            "values": ["Function"]
        },
        "sort-by": {
            "type": "attribute",
            "description": "指定数据按照哪个属性进行排序，仅当 sortable 设置为 true 且没有设置 sort-method 的时候有效。 如果 sort-by 为数组，则先按照第 1 个属性排序，如果第 1 个相等，再按照第 2 个排序，以此类推",
            "values": ["Function"]
        },
        "sort-orders": {
            "type": "attribute",
            "description": "数据在排序时所使用排序策略的轮转顺序，仅当 sortable 为 true 时有效。 需传入一个数组，随着用户点击表头，该列依次按照数组中元素的顺序进行排序",
            "values": ["object"]
        },
        "resizable": {
            "type": "attribute",
            "description": "对应列是否可以通过拖动改变宽度（需要在 el-table 上设置 border 属性为真）",
            "values": ["boolean"]
        },
        "formatter": {
            "type": "attribute",
            "description": "用来格式化内容",
            "values": ["function"]
        },
        "show-overflow-tooltip": {
            "type": "attribute",
            "description": "当内容过长被隐藏时显示 tooltip",
            "values": ["boolean"]
        },
        "align": {
            "type": "attribute",
            "description": "对齐方式",
            "values": ["left", "center", "right"]
        },
        "header-align": {
            "type": "attribute",
            "description": "表头对齐方式， 若不设置该项，则使用表格的对齐方式",
            "values": ["left", "center", "right"]
        },
        "class-name": {
            "type": "attribute",
            "description": "列的 className",
            "values": ["string"]
        },
        "label-class-name": {
            "type": "attribute",
            "description": "当前列标题的自定义类名",
            "values": ["string"]
        },
        "selectable": {
            "type": "attribute",
            "description": "仅对 type=selection 的列有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选",
            "values": ["Function"]
        },
        "reserve-selection": {
            "type": "attribute",
            "description": "数据刷新后是否保留选项，仅对  type=selection 的列有效， 请注意， 需指定 row-key 来让这个功能生效。",
            "values": ["boolean"]
        },
        "filters": {
            "type": "attribute",
            "description": "数据过滤的选项， 数组格式，数组中的元素需要有 text 和 value 属性。 数组中的每个元素都需要有 text 和 value 属性。",
            "values": ["object"]
        },
        "filter-placement": {
            "type": "attribute",
            "description": "过滤弹出框的定位",
            "values": ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end", "right", "right-start", "right-end"]
        },
        "filter-class-name": {
            "type": "attribute",
            "description": "过滤弹出框的 className",
            "values": ["string"]
        },
        "filter-multiple": {
            "type": "attribute",
            "description": "数据过滤的选项是否多选",
            "values": ["boolean"]
        },
        "filter-method": {
            "type": "attribute",
            "description": "数据过滤使用的方法， 如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示。",
            "values": ["function"]
        },
        "filtered-value": {
            "type": "attribute",
            "description": "选中的数据过滤项，如果需要自定义表头过滤的渲染方式，可能会需要此属性。",
            "values": ["object"]
        }
    },
    "el-table-v2": {
        "data": {
            "type": "attribute",
            "description": "表数据",
            "values": ["object"]
        },
        "height": {
            "type": "attribute",
            "description": "table 的高度。 默认为自动高度。 如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。",
            "values": ["string"]
        },
        "max-height": {
            "type": "attribute",
            "description": "table 的最大高度。 合法的值为数字或者单位为 px 的高度。",
            "values": ["string"]
        },
        "stripe": {
            "type": "attribute",
            "description": "是否为斑马纹 table",
            "values": ["boolean"]
        },
        "border": {
            "type": "attribute",
            "description": "是否带有纵向边框",
            "values": ["boolean"]
        },
        "size": {
            "type": "attribute",
            "description": "Table 的尺寸",
            "values": ["large", "large", "small"]
        },
        "fit": {
            "type": "attribute",
            "description": "列的宽度是否自撑开",
            "values": ["boolean"]
        },
        "show-header": {
            "type": "attribute",
            "description": "是否显示表头",
            "values": ["boolean"]
        },
        "highlight-current-row": {
            "type": "attribute",
            "description": "是否要高亮当前行",
            "values": ["boolean"]
        },
        "current-row-key": {
            "type": "attribute",
            "description": "当前行的 key，只写属性",
            "values": ["string"]
        },
        "row-class-name": {
            "type": "attribute",
            "description": "行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。",
            "values": ["Function"]
        },
        "row-style": {
            "type": "attribute",
            "description": "行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。",
            "values": ["Function"]
        },
        "cell-class-name": {
            "type": "attribute",
            "description": "单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。",
            "values": ["Function"]
        },
        "cell-style": {
            "type": "attribute",
            "description": "单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。",
            "values": ["Function"]
        },
        "header-row-class-name": {
            "type": "attribute",
            "description": "表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。",
            "values": ["Function"]
        },
        "header-row-style": {
            "type": "attribute",
            "description": "表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。",
            "values": ["Function"]
        },
        "header-cell-class-name": {
            "type": "attribute",
            "description": "表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className。",
            "values": ["Function"]
        },
        "header-cell-style": {
            "type": "attribute",
            "description": "表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。",
            "values": ["Function"]
        },
        "row-key": {
            "type": "attribute",
            "description": "行数据的 Key，用来优化 Table 的渲染； 在使用reserve-selection功能与显示树形数据时，该属性是必填的。 类型为 String 时，支持多层访问：user.info.id，但不支持 user.info[0].id，此种情况请使用 Function。",
            "values": ["function"]
        },
        "empty-text": {
            "type": "attribute",
            "description": "空数据时显示的文本内容， 也可以通过 #empty 设置 也可以通过 #empty 设置",
            "values": ["string"]
        },
        "default-expand-all": {
            "type": "attribute",
            "description": "是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效",
            "values": ["boolean"]
        },
        "expand-row-keys": {
            "type": "attribute",
            "description": "可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组。",
            "values": ["object"]
        },
        "default-sort": {
            "type": "attribute",
            "description": "默认的排序列的 prop 和顺序。 它的 prop 属性指定默认的排序的列，order 指定默认排序的顺序",
            "values": ["object"]
        },
        "tooltip-effect": {
            "type": "attribute",
            "description": "溢出的 tooltip 的 effect",
            "values": ["dark", "light"]
        },
        "tooltip-options": {
            "type": "attribute",
            "description": "溢出 tooltip 的选项，参见下述 tooltip 组件",
            "values": ["object"]
        },
        "show-summary": {
            "type": "attribute",
            "description": "是否在表尾显示合计行",
            "values": ["boolean"]
        },
        "sum-text": {
            "type": "attribute",
            "description": "显示摘要行第一列的文本",
            "values": ["string"]
        },
        "summary-method": {
            "type": "attribute",
            "description": "自定义的合计计算方法",
            "values": ["Function"]
        },
        "span-method": {
            "type": "attribute",
            "description": "合并行或列的计算方法",
            "values": ["Function"]
        },
        "select-on-indeterminate": {
            "type": "attribute",
            "description": "在多选表格中，当仅有部分行被选中时，点击表头的多选框时的行为。 若为 true，则选中所有行；若为 false，则取消选择所有行",
            "values": ["boolean"]
        },
        "indent": {
            "type": "attribute",
            "description": "展示树形数据时，树节点的缩进",
            "values": ["number"]
        },
        "lazy": {
            "type": "attribute",
            "description": "是否懒加载子节点数据",
            "values": ["boolean"]
        },
        "load": {
            "type": "attribute",
            "description": "加载子节点数据的函数，lazy 为 true 时生效",
            "values": ["Function"]
        },
        "tree-props": {
            "type": "attribute",
            "description": "渲染嵌套数据的配置选项",
            "values": ["object"]
        },
        "table-layout": {
            "type": "attribute",
            "description": "设置表格单元、行和列的布局方式",
            "values": ["fixed", "auto"]
        },
        "scrollbar-always-on": {
            "type": "attribute",
            "description": "总是显示滚动条",
            "values": ["boolean"]
        },
        "show-overflow-tooltip": {
            "type": "attribute",
            "description": "是否隐藏额外内容并在单元格悬停时使用 Tooltip 显示它们。这将影响全部列的展示。, 详请参考tooltip-options",
            "values": ["boolean"]
        },
        "flexible": {
            "type": "attribute",
            "description": "确保主轴的最小尺寸，以便不超过内容",
            "values": ["boolean"]
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
        "cell-contextmenu": {
            "type": "method",
            "description": "当某个单元格被鼠标右键点击时会触发该事件",
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
            "description": "column 的 key， 如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件",
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
    "el-tag": {
        "type": {
            "type": "attribute",
            "description": "Tag 的类型",
            "values": ["primary", "success", "warning", "danger", "info"]
        },
        "closable": {
            "type": "attribute",
            "description": "是否可关闭",
            "values": ["boolean"]
        },
        "disable-transitions": {
            "type": "attribute",
            "description": "是否禁用渐变动画",
            "values": ["boolean"]
        },
        "hit": {
            "type": "attribute",
            "description": "是否有边框描边",
            "values": ["boolean"]
        },
        "color": {
            "type": "attribute",
            "description": "背景色",
            "values": ["string"]
        },
        "size": {
            "type": "attribute",
            "description": "Tag 的尺寸",
            "values": ["large", "large", "small"]
        },
        "effect": {
            "type": "attribute",
            "description": "Tag 的主题",
            "values": ["dark", "light"]
        },
        "round": {
            "type": "attribute",
            "description": "Tag 是否为圆形",
            "values": ["boolean"]
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
    "el-check-tag": {
        "v-model:checked": {
            "type": "attribute",
            "description": "是否选中",
            "values": ["boolean"]
        },
        "type": {
            "type": "attribute",
            "description": "CheckTag 类型",
            "values": ["primary", "success", "warning", "danger", "info"]
        },
        "change": {
            "type": "method",
            "description": "点击 Check Tag 时触发的事件",
            "values": []
        }
    },
    "el-timeline": {},
    "el-timeline--item": {
        "timestamp": {
            "type": "attribute",
            "description": "时间戳",
            "values": ["string"]
        },
        "hide-timestamp": {
            "type": "attribute",
            "description": "是否隐藏时间戳",
            "values": ["boolean"]
        },
        "center": {
            "type": "attribute",
            "description": "是否垂直居中",
            "values": ["boolean"]
        },
        "placement": {
            "type": "attribute",
            "description": "时间戳位置",
            "values": ["enum"]
        },
        "type": {
            "type": "attribute",
            "description": "节点类型",
            "values": ["primary", "success", "warning", "danger", "info"]
        },
        "color": {
            "type": "attribute",
            "description": "节点颜色",
            "values": ["enum"]
        },
        "size": {
            "type": "attribute",
            "description": "节点尺寸",
            "values": ["large", "large", "small"]
        },
        "icon": {
            "type": "attribute",
            "description": "自定义图标",
            "values": ["string"]
        },
        "hollow": {
            "type": "attribute",
            "description": "是否空心点",
            "values": ["boolean"]
        }
    },
    "el-tour": {
        "show-arrow": {
            "type": "attribute",
            "description": "是否显示箭头",
            "values": ["boolean"]
        },
        "placement": {
            "type": "attribute",
            "description": "引导卡片相对于目标元素的位置",
            "values": ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end", "right", "right-start", "right-end"]
        },
        "content-style": {
            "type": "attribute",
            "description": "为content自定义样式",
            "values": ["CSSProperties"]
        },
        "mask": {
            "type": "attribute",
            "description": "是否启用蒙层，也可传入配置改变蒙层样式和填充色",
            "values": ["boolean", "Object"]
        },
        "type": {
            "type": "attribute",
            "description": "类型，影响底色与文字颜色",
            "values": ["default", "primary"]
        },
        "v-model": {
            "type": "attribute",
            "description": "打开引导",
            "values": ["boolean"]
        },
        "v-model:current": {
            "type": "attribute",
            "description": "当前值",
            "values": ["number"]
        },
        "scroll-into-view-options": {
            "type": "attribute",
            "description": "是否支持当前元素滚动到视窗内，也可传入配置指定滚动视窗的相关参数，默认跟随 Tour 的 scrollIntoViewOptions 属性",
            "values": ["boolean", "ScrollIntoViewOptions"]
        },
        "z-index": {
            "type": "attribute",
            "description": "Tour 的层级",
            "values": ["number"]
        },
        "show-close": {
            "type": "attribute",
            "description": "是否显示关闭按钮",
            "values": ["boolean"]
        },
        "close-icon": {
            "type": "attribute",
            "description": "自定义关闭图标，默认Close",
            "values": ["string", "Component"]
        },
        "close-on-press-escape": {
            "type": "attribute",
            "description": "是否可以通过按下 ESC 关闭引导",
            "values": ["boolean"]
        },
        "target-area-clickable": {
            "type": "attribute",
            "description": "启用蒙层时，target 元素区域是否可以点击。",
            "values": ["boolean"]
        },
        "close": {
            "type": "method",
            "description": "关闭引导时的回调函数",
            "values": []
        },
        "finish": {
            "type": "method",
            "description": "引导完成时的回调",
            "values": []
        },
        "change": {
            "type": "method",
            "description": "步骤改变时的回调",
            "values": []
        },
        "target": {
            "type": "attribute",
            "description": "获取引导卡片指向的元素， 为空时居中于屏幕。 自2.5.2以来支持字符串和函数类型。 字符串类型是文档.querySelector的选择器。",
            "values": ["HTMLElement", "string", "Function"]
        },
        "title": {
            "type": "attribute",
            "description": "标题",
            "values": ["string"]
        },
        "description": {
            "type": "attribute",
            "description": "主要描述部分",
            "values": ["string"]
        },
        "next-button-props": {
            "type": "attribute",
            "description": "“下一步”按钮的属性",
            "values": ["Object"]
        },
        "prev-button-props": {
            "type": "attribute",
            "description": "“上一步”按钮的属性",
            "values": ["Object"]
        }
    },
    "el-tree": {},
    "el-tree-select": {
        "tree": {
            "type": "attribute",
            "description": "tree",
            "values": ["tree"]
        },
        "select": {
            "type": "attribute",
            "description": "select",
            "values": ["select"]
        },
        "cacheData": {
            "type": "attribute",
            "description": "懒加载节点的缓存数据，结构与数据相同，用于获取未加载数据的标签",
            "values": ["object"]
        }
    },
    "el-tree-v2": {},
    "el-statistic": {
        "value": {
            "type": "attribute",
            "description": "数字内容",
            "values": ["number"]
        },
        "decimal-separator": {
            "type": "attribute",
            "description": "设置小数点符号",
            "values": ["string"]
        },
        "formatter": {
            "type": "attribute",
            "description": "自定义数字格式化",
            "values": ["Function"]
        },
        "group-separator": {
            "type": "attribute",
            "description": "设置千分位标识符",
            "values": ["string"]
        },
        "precision": {
            "type": "attribute",
            "description": "数字精度",
            "values": ["number"]
        },
        "prefix": {
            "type": "attribute",
            "description": "设置数字的前缀",
            "values": ["string"]
        },
        "suffix": {
            "type": "attribute",
            "description": "设置数字的后缀",
            "values": ["string"]
        },
        "title": {
            "type": "attribute",
            "description": "数字标题",
            "values": ["string"]
        },
        "value-style": {
            "type": "attribute",
            "description": "数字样式",
            "values": ["string"]
        }
    },
    "el-countdown": {
        "value": {
            "type": "attribute",
            "description": "目标时间",
            "values": ["number"]
        },
        "format": {
            "type": "attribute",
            "description": "格式化倒计时",
            "values": ["string"]
        },
        "prefix": {
            "type": "attribute",
            "description": "设置倒计时前缀",
            "values": ["string"]
        },
        "suffix": {
            "type": "attribute",
            "description": "设置倒计时的后缀",
            "values": ["string"]
        },
        "title": {
            "type": "attribute",
            "description": "倒计时标题",
            "values": ["string"]
        },
        "value-style": {
            "type": "attribute",
            "description": "倒计时值的样式",
            "values": ["string"]
        },
        "change": {
            "type": "method",
            "description": "时间差改变事件",
            "values": []
        },
        "finish": {
            "type": "method",
            "description": "倒计时结束事件",
            "values": []
        }
    },
    "el-affix": {
        "offset": {
            "type": "attribute",
            "description": "偏移距离",
            "values": ["number"]
        },
        "position": {
            "type": "attribute",
            "description": "固钉位置",
            "values": ["top", "bottom"]
        },
        "target": {
            "type": "attribute",
            "description": "指定容器（CSS 选择器）",
            "values": ["string"]
        },
        "z-index": {
            "type": "attribute",
            "description": "z-index",
            "values": ["number"]
        },
        "change": {
            "type": "method",
            "description": "固钉状态改变时触发的事件",
            "values": []
        },
        "scroll": {
            "type": "method",
            "description": "滚动时触发的事件",
            "values": []
        }
    },
    "el-anchor": {
        "container": {
            "type": "attribute",
            "description": "滚动的容器",
            "values": ["string", "HTMLElement", "Window"]
        },
        "offset": {
            "type": "attribute",
            "description": "设置锚点滚动的偏移量",
            "values": ["number"]
        },
        "bound": {
            "type": "attribute",
            "description": "触发锚点的元素的位置偏移量",
            "values": ["number"]
        },
        "duration": {
            "type": "attribute",
            "description": "设置容器滚动持续时间，单位为毫秒。",
            "values": ["number"]
        },
        "marker": {
            "type": "attribute",
            "description": "是否显示标记",
            "values": ["boolean"]
        },
        "type": {
            "type": "attribute",
            "description": "设置锚点类型",
            "values": ["defalut", "underline"]
        },
        "direction": {
            "type": "attribute",
            "description": "设置锚点方向",
            "values": ["vertical", "horizontal"]
        },
        "change": {
            "type": "method",
            "description": "step 改变时的回调",
            "values": []
        },
        "click": {
            "type": "method",
            "description": "当用户点击链接时触发",
            "values": []
        },
        "title": {
            "type": "attribute",
            "description": "链接的文本内容。",
            "values": ["string"]
        },
        "href": {
            "type": "attribute",
            "description": "链接的地址。",
            "values": ["string"]
        }
    },
    "el-backtop": {
        "target": {
            "type": "attribute",
            "description": "触发滚动的对象",
            "values": ["string"]
        },
        "visibility-height": {
            "type": "attribute",
            "description": "滚动高度达到此参数值才出现",
            "values": ["number"]
        },
        "right": {
            "type": "attribute",
            "description": "控制其显示位置，距离页面右边距",
            "values": ["number"]
        },
        "bottom": {
            "type": "attribute",
            "description": "控制其显示位置，距离页面底部距离",
            "values": ["number"]
        },
        "click": {
            "type": "method",
            "description": "点击按钮触发的事件",
            "values": []
        }
    },
    "el-breadcrumb": {
        "separator": {
            "type": "attribute",
            "description": "分隔符",
            "values": ["string"]
        },
        "separator-icon": {
            "type": "attribute",
            "description": "图标分隔符的组件或组件名",
            "values": ["string"]
        }
    },
    "el-breadcrumb-item": {
        "to": {
            "type": "attribute",
            "description": "路由跳转目标，同 vue-router 的 to 属性",
            "values": ["string"]
        },
        "replace": {
            "type": "attribute",
            "description": "如果设置该属性为 true, 导航将不会留下历史记录",
            "values": ["boolean"]
        }
    },
    "el-dropdown": {
        "type": {
            "type": "attribute",
            "description": "菜单按钮类型，同 Button 组件一样，仅在 split-button 为 true 的情况下有效。",
            "values": ["string"]
        },
        "size": {
            "type": "attribute",
            "description": "菜单尺寸，在 split-button 为 true 的情况下也对触发按钮生效。",
            "values": ["string"]
        },
        "max-height": {
            "type": "attribute",
            "description": "菜单最大高度",
            "values": ["string"]
        },
        "split-button": {
            "type": "attribute",
            "description": "下拉触发元素呈现为按钮组",
            "values": ["boolean"]
        },
        "disabled": {
            "type": "attribute",
            "description": "是否禁用",
            "values": ["boolean"]
        },
        "placement": {
            "type": "attribute",
            "description": "菜单弹出位置",
            "values": ["string"]
        },
        "trigger": {
            "type": "attribute",
            "description": "触发下拉的行为",
            "values": ["string"]
        },
        "hide-on-click": {
            "type": "attribute",
            "description": "是否在点击菜单项后隐藏菜单",
            "values": ["boolean"]
        },
        "show-timeout": {
            "type": "attribute",
            "description": "展开下拉菜单的延时，仅在 trigger 为 hover 时有效",
            "values": ["number"]
        },
        "hide-timeout": {
            "type": "attribute",
            "description": "收起下拉菜单的延时（仅在 trigger 为 hover 时有效）",
            "values": ["number"]
        },
        "role": {
            "type": "attribute",
            "description": "下拉菜单的 ARIA 属性。 根据具体场景，您可能想要将此更改为“navigation”",
            "values": ["string"]
        },
        "tabindex": {
            "type": "attribute",
            "description": "Dropdown 组件的 tabindex",
            "values": ["number"]
        },
        "popper-class": {
            "type": "attribute",
            "description": "自定义浮层类名",
            "values": ["string"]
        },
        "popper-options": {
            "type": "attribute",
            "description": "popper.js 参数",
            "values": ["Object"]
        },
        "teleported": {
            "type": "attribute",
            "description": "是否将下拉列表插入至 body 元素",
            "values": ["boolean"]
        },
        "click": {
            "type": "method",
            "description": "split-button 为 true 时，点击左侧按钮的回调",
            "values": []
        },
        "command": {
            "type": "attribute",
            "description": "派发到command回调函数的指令参数",
            "values": ["string"]
        },
        "visible-change": {
            "type": "method",
            "description": "下拉框出现/隐藏时触发",
            "values": []
        },
        "divided": {
            "type": "attribute",
            "description": "是否显示分隔符",
            "values": ["boolean"]
        },
        "icon": {
            "type": "attribute",
            "description": "自定义图标",
            "values": ["string", "Component"]
        }
    },
    "el-menu": {
        "mode": {
            "type": "attribute",
            "description": "菜单展示模式",
            "values": ["string"]
        },
        "collapse": {
            "type": "attribute",
            "description": "是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）",
            "values": ["boolean"]
        },
        "ellipsis": {
            "type": "attribute",
            "description": "是否省略多余的子项（仅在横向模式生效）",
            "values": ["boolean"]
        },
        "ellipsis-icon": {
            "type": "attribute",
            "description": "自定义省略图标 (仅在水平模式下可用)",
            "values": ["string", "Component"]
        },
        "popper-offset": {
            "type": "attribute",
            "description": "弹出窗口的偏移量 (覆盖 popper的菜单)",
            "values": ["number"]
        },
        "background-color": {
            "type": "attribute",
            "description": "菜单的背景颜色（十六进制格式）（已被废弃，使用--bg-color）",
            "values": ["string"]
        },
        "text-color": {
            "type": "attribute",
            "description": "文字颜色（十六进制格式）（已被废弃，使用--text-color）",
            "values": ["string"]
        },
        "active-text-color": {
            "type": "attribute",
            "description": "活动菜单项的文本颜色（十六进制格式）（已被废弃，使用--active-color）",
            "values": ["string"]
        },
        "default-active": {
            "type": "attribute",
            "description": "页面加载时默认激活菜单的 index",
            "values": ["string"]
        },
        "default-openeds": {
            "type": "attribute",
            "description": "默认打开的 sub-menu 的 index 的数组",
            "values": ["Array"]
        },
        "unique-opened": {
            "type": "attribute",
            "description": "是否只保持一个子菜单的展开",
            "values": ["boolean"]
        },
        "menu-trigger": {
            "type": "attribute",
            "description": "子菜单打开的触发方式，只在 mode 为 horizontal 时有效。",
            "values": ["string"]
        },
        "router": {
            "type": "attribute",
            "description": "是否启用 vue-router 模式。 启用该模式会在激活导航时以 index 作为 path 进行路由跳转 使用 default-active 来设置加载时的激活项。",
            "values": ["boolean"]
        },
        "collapse-transition": {
            "type": "attribute",
            "description": "是否开启折叠动画",
            "values": ["boolean"]
        },
        "popper-effect": {
            "type": "attribute",
            "description": "Tooltip 主题，内置了 dark / light 两种主题",
            "values": ["string"]
        },
        "close-on-click-outside": {
            "type": "attribute",
            "description": "可选，单击外部时是否折叠菜单",
            "values": ["boolean"]
        },
        "popper-class": {
            "type": "attribute",
            "description": "为 popper 添加类名",
            "values": ["string"]
        },
        "show-timeout": {
            "type": "attribute",
            "description": "子菜单出现之前的延迟，(继承 menu 的 show-timeout 配置)",
            "values": ["number"]
        },
        "hide-timeout": {
            "type": "attribute",
            "description": "子菜单消失之前的延迟，(继承 menu 的 hide-timeout 配置)",
            "values": ["number"]
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
        },
        "index": {
            "type": "attribute",
            "description": "唯一标志",
            "values": ["string"]
        },
        "disabled": {
            "type": "attribute",
            "description": "是否禁用",
            "values": ["boolean"]
        },
        "popper-append-to-bodydeprecated": {
            "type": "attribute",
            "description": "是否将弹出菜单插入至 body 元素。 在菜单的定位出现问题时，可尝试修改该属性",
            "values": ["boolean"]
        },
        "teleported": {
            "type": "attribute",
            "description": "是否将 popup 的下拉列表插入至 body 元素",
            "values": ["boolean"]
        },
        "expand-close-icon": {
            "type": "attribute",
            "description": "父菜单展开且子菜单关闭时的图标， expand-close-icon 和 expand-open-icon 需要一起配置才能生效",
            "values": ["string", "Component"]
        },
        "expand-open-icon": {
            "type": "attribute",
            "description": "父菜单展开且子菜单打开时的图标， expand-open-icon 和 expand-close-icon 需要一起配置才能生效",
            "values": ["string", "Component"]
        },
        "collapse-close-icon": {
            "type": "attribute",
            "description": "父菜单收起且子菜单关闭时的图标， expand-close-icon 和 expand-open-icon 需要一起配置才能生效",
            "values": ["string", "Component"]
        },
        "collapse-open-icon": {
            "type": "attribute",
            "description": "父菜单收起且子菜单打开时的图标， expand-open-icon 和 expand-close-icon 需要一起配置才能生效",
            "values": ["string", "Component"]
        },
        "route": {
            "type": "attribute",
            "description": "Vue Router 路径对象",
            "values": ["object"]
        },
        "click": {
            "type": "method",
            "description": "菜单点击时的回调函数",
            "values": []
        },
        "title": {
            "type": "attribute",
            "description": "组标题",
            "values": ["string"]
        }
    },
    "el-page-header": {
        "icon": {
            "type": "attribute",
            "description": "Page Header 的图标 Icon 组件",
            "values": ["string"]
        },
        "title": {
            "type": "attribute",
            "description": "Page Header 的主标题，默认是 Back (内置 a11y)",
            "values": ["string"]
        },
        "content": {
            "type": "attribute",
            "description": "Page Header 的内容",
            "values": ["string"]
        },
        "back": {
            "type": "method",
            "description": "点击左侧区域触发",
            "values": []
        }
    },
    "el-steps": {
        "space": {
            "type": "attribute",
            "description": "每个 step 的间距，不填写将自适应间距。 支持百分比。",
            "values": ["number"]
        },
        "direction": {
            "type": "attribute",
            "description": "显示方向",
            "values": ["horizontal", "vertical"]
        },
        "active": {
            "type": "attribute",
            "description": "设置当前激活步骤",
            "values": ["number"]
        },
        "process-status": {
            "type": "attribute",
            "description": "设置当前步骤的状态",
            "values": ["enum"]
        },
        "finish-status": {
            "type": "attribute",
            "description": "设置结束步骤的状态",
            "values": ["wait", "process", "finish", "error", "success"]
        },
        "align-center": {
            "type": "attribute",
            "description": "进行居中对齐",
            "values": ["boolean"]
        },
        "simple": {
            "type": "attribute",
            "description": "是否应用简洁风格",
            "values": ["boolean"]
        }
    },
    "el-step": {
        "title": {
            "type": "attribute",
            "description": "标题",
            "values": ["string"]
        },
        "description": {
            "type": "attribute",
            "description": "描述文案",
            "values": ["string"]
        },
        "icon": {
            "type": "attribute",
            "description": "Step 组件的自定义图标。 也支持 slot 方式写入",
            "values": ["string"]
        },
        "status": {
            "type": "attribute",
            "description": "设置当前步骤的状态， 不设置则根据 steps 确定状态",
            "values": ["wait", "process", "finish", "error", "success"]
        }
    },
    "el-tabs": {},
    "el-alert": {
        "title": {
            "type": "attribute",
            "description": "Alert 标题。",
            "values": ["string"]
        },
        "type": {
            "type": "attribute",
            "description": "Alert 类型。",
            "values": ["primary", "success", "warning", "danger", "info"]
        },
        "description": {
            "type": "attribute",
            "description": "描述性文本",
            "values": ["string"]
        },
        "closable": {
            "type": "attribute",
            "description": "是否可以关闭",
            "values": ["boolean"]
        },
        "center": {
            "type": "attribute",
            "description": "文字是否居中",
            "values": ["boolean"]
        },
        "close-text": {
            "type": "attribute",
            "description": "自定义关闭按钮文本",
            "values": ["string"]
        },
        "show-icon": {
            "type": "attribute",
            "description": "是否显示类型图标",
            "values": ["boolean"]
        },
        "effect": {
            "type": "attribute",
            "description": "主题样式",
            "values": ["dark", "light"]
        },
        "close": {
            "type": "method",
            "description": "关闭 Alert 时触发的事件",
            "values": []
        }
    },
    "el-dialog": {
        "v-model": {
            "type": "attribute",
            "description": "是否显示 Dialog",
            "values": ["boolean"]
        },
        "title": {
            "type": "attribute",
            "description": "Dialog 对话框 Dialog 的标题， 也可通过具名 slot （见下表）传入",
            "values": ["string"]
        },
        "width": {
            "type": "attribute",
            "description": "对话框的宽度，默认值为 50%",
            "values": ["string"]
        },
        "fullscreen": {
            "type": "attribute",
            "description": "是否为全屏 Dialog",
            "values": ["boolean"]
        },
        "top": {
            "type": "attribute",
            "description": "dialog CSS 中的 margin-top 值，默认为 15vh",
            "values": ["string"]
        },
        "modal": {
            "type": "attribute",
            "description": "是否需要遮罩层",
            "values": ["boolean"]
        },
        "modal-class": {
            "type": "attribute",
            "description": "遮罩的自定义类名",
            "values": ["string"]
        },
        "append-to-body": {
            "type": "attribute",
            "description": "Dialog 自身是否插入至 body 元素上。 嵌套的 Dialog 必须指定该属性并赋值为 true",
            "values": ["boolean"]
        },
        "append-to": {
            "type": "attribute",
            "description": "Dialog 挂载到哪个 DOM 元素 将覆盖 append-to-body",
            "values": ["string"]
        },
        "lock-scroll": {
            "type": "attribute",
            "description": "是否在 Dialog 出现时将 body 滚动锁定",
            "values": ["boolean"]
        },
        "custom-classdeprecated": {
            "type": "attribute",
            "description": "Dialog 的自定义类名",
            "values": ["string"]
        },
        "open-delay": {
            "type": "attribute",
            "description": "dialog 打开的延时时间，单位毫秒",
            "values": ["number"]
        },
        "close-delay": {
            "type": "attribute",
            "description": "drawer 关闭的延时时间，单位毫秒",
            "values": ["number"]
        },
        "close-on-click-modal": {
            "type": "attribute",
            "description": "是否可以通过点击 modal 关闭 Dialog",
            "values": ["boolean"]
        },
        "close-on-press-escape": {
            "type": "attribute",
            "description": "是否可以通过按下 ESC 关闭 Dialog",
            "values": ["boolean"]
        },
        "show-close": {
            "type": "attribute",
            "description": "是否显示关闭按钮",
            "values": ["boolean"]
        },
        "before-close": {
            "type": "attribute",
            "description": "关闭前的回调，会暂停 Dialog 的关闭. 回调函数内执行 done 参数方法的时候才是真正关闭对话框的时候.",
            "values": ["Function"]
        },
        "draggable": {
            "type": "attribute",
            "description": "为 Dialog 启用可拖拽功能",
            "values": ["boolean"]
        },
        "overflow": {
            "type": "attribute",
            "description": "拖动范围可以超出可视区",
            "values": ["boolean"]
        },
        "center": {
            "type": "attribute",
            "description": "是否让 Dialog 的 header 和 footer 部分居中排列",
            "values": ["boolean"]
        },
        "align-center": {
            "type": "attribute",
            "description": "是否水平垂直对齐对话框",
            "values": ["boolean"]
        },
        "destroy-on-close": {
            "type": "attribute",
            "description": "当关闭 Dialog 时，销毁其中的元素",
            "values": ["boolean"]
        },
        "close-icon": {
            "type": "attribute",
            "description": "自定义关闭图标，默认 Close",
            "values": ["string"]
        },
        "z-index": {
            "type": "attribute",
            "description": "和原生的 CSS 的 z-index 相同，改变 z 轴的顺序",
            "values": ["number"]
        },
        "header-aria-levelay": {
            "type": "attribute",
            "description": "header 的 aria-level 属性",
            "values": ["string"]
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
        },
        "open-auto-focus": {
            "type": "method",
            "description": "输入焦点聚焦在 Dialog 内容时的回调",
            "values": []
        },
        "close-auto-focus": {
            "type": "method",
            "description": "输入焦点从 Dialog 内容失焦时的回调",
            "values": []
        }
    },
    "el-drawer": {
        "v-model": {
            "type": "attribute",
            "description": "是否显示 Drawer",
            "values": ["boolean"]
        },
        "append-to-body": {
            "type": "attribute",
            "description": "Drawer 自身是否插入至 body 元素上。嵌套的 Drawer 必须指定该属性并赋值为 true",
            "values": ["boolean"]
        },
        "lock-scroll": {
            "type": "attribute",
            "description": "是否在 Drawer 出现时将 body 滚动锁定",
            "values": ["boolean"]
        },
        "before-close": {
            "type": "attribute",
            "description": "关闭前的回调，会暂停 Drawer 的关闭",
            "values": ["Function"]
        },
        "close-on-click-modal": {
            "type": "attribute",
            "description": "是否可以通过点击 modal 关闭 Drawer",
            "values": ["boolean"]
        },
        "close-on-press-escape": {
            "type": "attribute",
            "description": "是否可以通过按下 ESC 关闭 Drawer",
            "values": ["boolean"]
        },
        "open-delay": {
            "type": "attribute",
            "description": "Drawer 打开的延时时间，单位毫秒",
            "values": ["number"]
        },
        "close-delay": {
            "type": "attribute",
            "description": "Drawer 关闭的延时时间，单位毫秒",
            "values": ["number"]
        },
        "custom-classdeprecated": {
            "type": "attribute",
            "description": "Drawer 的自定义类名",
            "values": ["string"]
        },
        "destroy-on-close": {
            "type": "attribute",
            "description": "控制是否在关闭 Drawer 之后将子元素全部销毁",
            "values": ["boolean"]
        },
        "modal": {
            "type": "attribute",
            "description": "是否需要遮罩层",
            "values": ["boolean"]
        },
        "direction": {
            "type": "attribute",
            "description": "Drawer 打开的方向",
            "values": ["rtl", "ltr", "ttb", "btt", "rtl"]
        },
        "show-close": {
            "type": "attribute",
            "description": "是否显示关闭按钮",
            "values": ["boolean"]
        },
        "size": {
            "type": "attribute",
            "description": "Drawer 窗体的大小, 当使用 number 类型时, 以像素为单位, 当使用 string 类型时, 请传入 'x%', 否则便会以 number 类型解释",
            "values": ["number"]
        },
        "title": {
            "type": "attribute",
            "description": "Drawer 的标题，也可通过具名 slot （见下表）传入",
            "values": ["string"]
        },
        "with-header": {
            "type": "attribute",
            "description": "控制是否显示 header 栏, 默认为 true, 当此项为 false 时, title attribute 和 title slot 均不生效",
            "values": ["boolean"]
        },
        "modal-class": {
            "type": "attribute",
            "description": "遮罩层的自定义类名",
            "values": ["string"]
        },
        "z-index": {
            "type": "attribute",
            "description": "设置 z-index",
            "values": ["number"]
        },
        "header-aria-levelay": {
            "type": "attribute",
            "description": "header 的 aria-level 属性",
            "values": ["string"]
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
        },
        "open-auto-focus": {
            "type": "method",
            "description": "输入焦点聚焦在 Drawer 内容时的回调",
            "values": []
        },
        "close-auto-focus": {
            "type": "method",
            "description": "输入焦点从 Drawer 内容失焦时的回调",
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
            "description": "标题",
            "values": ["string"]
        },
        "confirm-button-text": {
            "type": "attribute",
            "description": "确认按钮文字",
            "values": ["string"]
        },
        "cancel-button-text": {
            "type": "attribute",
            "description": "取消按钮文字",
            "values": ["string"]
        },
        "confirm-button-type": {
            "type": "attribute",
            "description": "确认按钮类型",
            "values": ["primary", "success", "warning", "danger", "info", "text"]
        },
        "cancel-button-type": {
            "type": "attribute",
            "description": "取消按钮类型",
            "values": ["primary", "success", "warning", "danger", "info", "text"]
        },
        "icon": {
            "type": "attribute",
            "description": "自定义图标",
            "values": ["string"]
        },
        "icon-color": {
            "type": "attribute",
            "description": "Icon 颜色",
            "values": ["string"]
        },
        "hide-icon": {
            "type": "attribute",
            "description": "是否隐藏 Icon",
            "values": ["boolean"]
        },
        "hide-after": {
            "type": "attribute",
            "description": "关闭时的延迟",
            "values": ["number"]
        },
        "teleported": {
            "type": "attribute",
            "description": "是否将 popover 的下拉列表插入至 body 元素",
            "values": ["boolean"]
        },
        "persistent": {
            "type": "attribute",
            "description": "当 popover 组件长时间不触发且 persistent 属性设置为 false 时, popover 将会被删除",
            "values": ["boolean"]
        },
        "width": {
            "type": "attribute",
            "description": "弹层宽度，最小宽度 150px",
            "values": ["string"]
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
    "el-popover": {
        "trigger": {
            "type": "attribute",
            "description": "触发方式",
            "values": ["string"]
        },
        "title": {
            "type": "attribute",
            "description": "标题",
            "values": ["string"]
        },
        "effect": {
            "type": "attribute",
            "description": "Tooltip 主题，Element Plus 内置了 dark / light 两种主题",
            "values": ["string"]
        },
        "content": {
            "type": "attribute",
            "description": "显示的内容，也可以通过写入默认 slot 修改显示内容",
            "values": ["string"]
        },
        "width": {
            "type": "attribute",
            "description": "宽度",
            "values": ["string"]
        },
        "placement": {
            "type": "attribute",
            "description": "出现位置",
            "values": ["string"]
        },
        "disabled": {
            "type": "attribute",
            "description": "Popover 是否可用",
            "values": ["boolean"]
        },
        "v-model:visible": {
            "type": "attribute",
            "description": "Popover 是否显示",
            "values": ["Boolean"]
        },
        "offset": {
            "type": "attribute",
            "description": "浮层偏移量, Popover 是在 Tooltip,基础上开发的， Popover的 offset 是 undefined, 但Tooltip 的 offset 是12",
            "values": ["number"]
        },
        "transition": {
            "type": "attribute",
            "description": "定义渐变动画",
            "values": ["string"]
        },
        "show-arrow": {
            "type": "attribute",
            "description": "是否显示 Tooltip 箭头， 欲了解更多信息，请参考 ElPopper",
            "values": ["boolean"]
        },
        "popper-options": {
            "type": "attribute",
            "description": "popper.js 的参数",
            "values": ["object"]
        },
        "popper-class": {
            "type": "attribute",
            "description": "为 popper 添加类名",
            "values": ["string"]
        },
        "popper-style": {
            "type": "attribute",
            "description": "为 popper 自定义样式",
            "values": ["string"]
        },
        "show-after": {
            "type": "attribute",
            "description": "在触发后多久显示内容，单位毫秒",
            "values": ["number"]
        },
        "hide-after": {
            "type": "attribute",
            "description": "延迟关闭，单位毫秒",
            "values": ["number"]
        },
        "auto-close": {
            "type": "attribute",
            "description": "tooltip 出现后自动隐藏延时，单位毫秒",
            "values": ["number"]
        },
        "tabindex": {
            "type": "attribute",
            "description": "Popover 组件的 tabindex",
            "values": ["number"]
        },
        "teleported": {
            "type": "attribute",
            "description": "是否将 popover 的下拉列表插入至 body 元素",
            "values": ["boolean"]
        },
        "persistent": {
            "type": "attribute",
            "description": "当 popover 组件长时间不触发且 persistent 属性设置为 false 时, popover 将会被删除",
            "values": ["boolean"]
        },
        "show": {
            "type": "method",
            "description": "显示时触发",
            "values": []
        },
        "before-enter": {
            "type": "method",
            "description": "显示动画播放前触发",
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
        "before-leave": {
            "type": "method",
            "description": "隐藏动画播放前触发",
            "values": []
        },
        "after-leave": {
            "type": "method",
            "description": "隐藏动画播放完毕后触发",
            "values": []
        }
    },
    "el-tooltip": {
        "append-to": {
            "type": "attribute",
            "description": "指示 Tooltip 的内容将附加在哪一个网页元素上",
            "values": ["CSSSelector"]
        },
        "effect": {
            "type": "attribute",
            "description": "Tooltip 主题，内置了 dark / light 两种",
            "values": ["dark", "light"]
        },
        "content": {
            "type": "attribute",
            "description": "显示的内容，也可被 slot#content 覆盖",
            "values": ["string"]
        },
        "raw-content": {
            "type": "attribute",
            "description": "content 中的内容是否作为 HTML 字符串处理",
            "values": ["boolean"]
        },
        "placement": {
            "type": "attribute",
            "description": "Tooltip 组件出现的位置",
            "values": ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end", "right", "right-start", "right-end"]
        },
        "fallback-placements": {
            "type": "attribute",
            "description": "Tooltip 可用的 positions 请查看popper.js 文档",
            "values": ["arrary"]
        },
        "v-model:visible": {
            "type": "attribute",
            "description": "Tooltip 组件可见性",
            "values": ["boolean"]
        },
        "disabled": {
            "type": "attribute",
            "description": "Tooltip 组件是否禁用",
            "values": ["boolean"]
        },
        "offset": {
            "type": "attribute",
            "description": "出现位置的偏移量",
            "values": ["number"]
        },
        "transition": {
            "type": "attribute",
            "description": "动画名称",
            "values": ["string"]
        },
        "popper-options": {
            "type": "attribute",
            "description": "popper.js 参数",
            "values": ["object"]
        },
        "show-after": {
            "type": "attribute",
            "description": "在触发后多久显示内容，单位毫秒",
            "values": ["number"]
        },
        "show-arrow": {
            "type": "attribute",
            "description": "tooltip 的内容是否有箭头",
            "values": ["boolean"]
        },
        "hide-after": {
            "type": "attribute",
            "description": "延迟关闭，单位毫秒",
            "values": ["number"]
        },
        "auto-close": {
            "type": "attribute",
            "description": "tooltip 出现后自动隐藏延时，单位毫秒",
            "values": ["number"]
        },
        "popper-class": {
            "type": "attribute",
            "description": "为 Tooltip 的 popper 添加类名",
            "values": ["string"]
        },
        "enterable": {
            "type": "attribute",
            "description": "鼠标是否可进入到 tooltip 中",
            "values": ["boolean"]
        },
        "teleported": {
            "type": "attribute",
            "description": "是否使用 teleport。设置成 true则会被追加到 append-to 的位置",
            "values": ["boolean"]
        },
        "trigger": {
            "type": "attribute",
            "description": "如何触发 Tooltip",
            "values": ["hover", "click", "focus", "contextmenu"]
        },
        "virtual-triggering": {
            "type": "attribute",
            "description": "用来标识虚拟触发是否被启用",
            "values": ["boolean"]
        },
        "virtual-ref": {
            "type": "attribute",
            "description": "标识虚拟触发时的触发元素",
            "values": ["HTMLElement"]
        },
        "trigger-keys": {
            "type": "attribute",
            "description": "当鼠标点击或者聚焦在触发元素上时， 可以定义一组键盘按键并且通过它们来控制 Tooltip 的显示",
            "values": ["Array"]
        },
        "persistent": {
            "type": "attribute",
            "description": "当 tooltip 组件长时间不触发且 persistent 属性设置为 false 时, popconfirm 将会被删除",
            "values": ["boolean"]
        },
        "aria-labelay": {
            "type": "attribute",
            "description": "和 aria-label 属性保持一致",
            "values": ["string"]
        }
    },
    "el-divider": {
        "direction": {
            "type": "attribute",
            "description": "设置分割线方向",
            "values": ["horizontal", "vertical"]
        },
        "border-style": {
            "type": "attribute",
            "description": "设置分隔符样式",
            "values": ["none", "solid", "hidden", "dashed"]
        },
        "content-position": {
            "type": "attribute",
            "description": "自定义分隔线内容的位置",
            "values": ["left", "right", "center"]
        }
    },
    "el-watermark": {
        "width": {
            "type": "attribute",
            "description": "水印的宽度， content 的默认值是它自己的宽度",
            "values": ["number"]
        },
        "height": {
            "type": "attribute",
            "description": "水印的高度， content 的默认值是它自己的高度",
            "values": ["number"]
        },
        "rotate": {
            "type": "attribute",
            "description": "水印的旋转角度, 单位 °",
            "values": ["number"]
        },
        "zIndex": {
            "type": "attribute",
            "description": "水印元素的z-index值",
            "values": ["number"]
        },
        "image": {
            "type": "attribute",
            "description": "水印图片，建议使用 2x 或 3x 图像",
            "values": ["string"]
        },
        "content": {
            "type": "attribute",
            "description": "水印文本内容",
            "values": ["string"]
        },
        "font": {
            "type": "attribute",
            "description": "文字样式",
            "values": ["Font"]
        },
        "gap": {
            "type": "attribute",
            "description": "水印之间的间距",
            "values": ["object"]
        },
        "offset": {
            "type": "attribute",
            "description": "水印从容器左上角的偏移 默认值为 gap/2",
            "values": ["object"]
        }
    }
}