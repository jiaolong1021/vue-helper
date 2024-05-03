export default {
    "a-button": {
        "block": {
            "type": "attribute",
            "description": "将按钮宽度调整为其父宽度的选项",
            "values": ["boolean"]
        },
        "danger": {
            "type": "attribute",
            "description": "设置危险按钮",
            "values": ["boolean"]
        },
        "disabled": {
            "type": "attribute",
            "description": "按钮失效状态",
            "values": ["boolean"]
        },
        "ghost": {
            "type": "attribute",
            "description": "幽灵属性，使按钮背景透明",
            "values": ["boolean"]
        },
        "href": {
            "type": "attribute",
            "description": "点击跳转的地址，指定此属性 button 的行为和 a 链接一致",
            "values": ["string"]
        },
        "htmlType": {
            "type": "attribute",
            "description": "设置 button 原生的 type 值，可选值请参考 HTML 标准",
            "values": ["string"]
        },
        "icon": {
            "type": "attribute",
            "description": "设置按钮的图标类型",
            "values": ["v-slot"]
        },
        "loading": {
            "type": "attribute",
            "description": "设置按钮载入状态",
            "values": ["boolean", "{ delay: number }"]
        },
        "shape": {
            "type": "attribute",
            "description": "设置按钮形状",
            "values": ["default", "circle", "round"]
        },
        "size": {
            "type": "attribute",
            "description": "设置按钮大小",
            "values": ["large", "middle", "small"]
        },
        "target": {
            "type": "attribute",
            "description": "相当于 a 链接的 target 属性，href 存在时生效",
            "values": ["string"]
        },
        "type": {
            "type": "attribute",
            "description": "设置按钮类型",
            "values": ["primary", "ghost", "dashed", "link", "text", "default"]
        },
        "click": {
            "type": "method",
            "description": "点击按钮时的回调",
            "values": []
        },
        "blur": {
            "type": "function",
            "description": "移除焦点",
            "values": []
        },
        "focus": {
            "type": "function",
            "description": "获取焦点",
            "values": []
        }
    },
    "a-icon": {},
    "a-typography": {},
    "a-typography-text": {
        "code": {
            "type": "attribute",
            "description": "添加代码样式",
            "values": ["boolean"]
        },
        "v-model:content": {
            "type": "attribute",
            "description": "当使用 ellipsis 或 editable 时，使用 content 代替 children",
            "values": ["string"]
        },
        "copyable": {
            "type": "attribute",
            "description": "是否可拷贝，为对象时可进行各种自定义",
            "values": ["boolean", "copyable"]
        },
        "delete": {
            "type": "attribute",
            "description": "添加删除线样式",
            "values": ["boolean"]
        },
        "disabled": {
            "type": "attribute",
            "description": "禁用文本",
            "values": ["boolean"]
        },
        "editable": {
            "type": "attribute",
            "description": "是否可编辑，为对象时可对编辑进行控制",
            "values": ["boolean", "editable"]
        },
        "ellipsis": {
            "type": "attribute",
            "description": "自动溢出省略",
            "values": ["boolean"]
        },
        "keyboard": {
            "type": "attribute",
            "description": "添加键盘样式",
            "values": ["boolean"]
        },
        "mark": {
            "type": "attribute",
            "description": "添加标记样式",
            "values": ["boolean"]
        },
        "strong": {
            "type": "attribute",
            "description": "是否加粗",
            "values": ["boolean"]
        },
        "type": {
            "type": "attribute",
            "description": "文本类型",
            "values": ["secondary", "success", "warning", "danger"]
        },
        "underline": {
            "type": "attribute",
            "description": "添加下划线样式",
            "values": ["boolean"]
        }
    },
    "a-typography-title": {
        "code": {
            "type": "attribute",
            "description": "添加代码样式",
            "values": ["boolean"]
        },
        "v-model:content": {
            "type": "attribute",
            "description": "当使用 ellipsis 或 editable 时，使用 content 代替 children",
            "values": ["string"]
        },
        "copyable": {
            "type": "attribute",
            "description": "是否可拷贝，为对象时可进行各种自定义",
            "values": ["boolean", "copyable"]
        },
        "delete": {
            "type": "attribute",
            "description": "添加删除线样式",
            "values": ["boolean"]
        },
        "disabled": {
            "type": "attribute",
            "description": "禁用文本",
            "values": ["boolean"]
        },
        "editable": {
            "type": "attribute",
            "description": "是否可编辑，为对象时可对编辑进行控制",
            "values": ["boolean", "editable"]
        },
        "ellipsis": {
            "type": "attribute",
            "description": "自动溢出省略，为对象时可设置省略行数、是否可展开、添加后缀等",
            "values": ["boolean", "ellipsis"]
        },
        "level": {
            "type": "attribute",
            "description": "重要程度，相当于 h1、h2、h3、h4、h5",
            "values": ["number: 1, 2, 3, 4, 5"]
        },
        "mark": {
            "type": "attribute",
            "description": "添加标记样式",
            "values": ["boolean"]
        },
        "type": {
            "type": "attribute",
            "description": "文本类型",
            "values": ["secondary", "success", "warning", "danger"]
        },
        "underline": {
            "type": "attribute",
            "description": "添加下划线样式",
            "values": ["boolean"]
        }
    },
    "a-typography-paragraph": {
        "code": {
            "type": "attribute",
            "description": "添加代码样式",
            "values": ["boolean"]
        },
        "v-model:content": {
            "type": "attribute",
            "description": "当使用 ellipsis 或 editable 时，使用 content 代替 children",
            "values": ["string"]
        },
        "copyable": {
            "type": "attribute",
            "description": "是否可拷贝，为对象时可进行各种自定义",
            "values": ["boolean", "copyable"]
        },
        "delete": {
            "type": "attribute",
            "description": "添加删除线样式",
            "values": ["boolean"]
        },
        "disabled": {
            "type": "attribute",
            "description": "禁用文本",
            "values": ["boolean"]
        },
        "editable": {
            "type": "attribute",
            "description": "是否可编辑，为对象时可对编辑进行控制",
            "values": ["boolean", "editable"]
        },
        "ellipsis": {
            "type": "attribute",
            "description": "自动溢出省略，为对象时可设置省略行数、是否可展开、添加后缀等",
            "values": ["boolean", "ellipsis"]
        },
        "mark": {
            "type": "attribute",
            "description": "添加标记样式",
            "values": ["boolean"]
        },
        "strong": {
            "type": "attribute",
            "description": "是否加粗",
            "values": ["boolean"]
        },
        "type": {
            "type": "attribute",
            "description": "文本类型",
            "values": ["secondary", "success", "warning", "danger"]
        },
        "underline": {
            "type": "attribute",
            "description": "添加下划线样式",
            "values": ["boolean"]
        }
    },
    "a-divider": {
        "dashed": {
            "type": "attribute",
            "description": "是否虚线",
            "values": ["boolean"]
        },
        "orientation": {
            "type": "attribute",
            "description": "分割线标题的位置",
            "values": ["left", "right", "center"]
        },
        "orientationMargin": {
            "type": "attribute",
            "description": "标题和最近 left/right 边框之间的距离，去除了分割线，同时 orientation 必须为 left 或 right",
            "values": ["string", "number"]
        },
        "plain": {
            "type": "attribute",
            "description": "文字是否显示为普通正文样式",
            "values": ["boolean"]
        },
        "type": {
            "type": "attribute",
            "description": "水平还是垂直类型",
            "values": ["horizontal", "vertical"]
        }
    },
    "a-flex": {
        "vertical": {
            "type": "attribute",
            "description": "flex 主轴的方向是否垂直，使用 flex-direction: column",
            "values": ["boolean"]
        },
        "wrap": {
            "type": "attribute",
            "description": "设置元素单行显示还是多行显示",
            "values": ["参考 flex-wrap"]
        },
        "justify": {
            "type": "attribute",
            "description": "设置元素在主轴方向上的对齐方式",
            "values": ["参考 justify-content"]
        },
        "align": {
            "type": "attribute",
            "description": "设置元素在交叉轴方向上的对齐方式",
            "values": ["参考 align-items"]
        },
        "flex": {
            "type": "attribute",
            "description": "flex CSS 简写属性",
            "values": ["参考 flex"]
        },
        "gap": {
            "type": "attribute",
            "description": "设置网格之间的间隙",
            "values": ["small", "middle", "large", "string", "number"]
        },
        "component": {
            "type": "attribute",
            "description": "自定义元素类型",
            "values": ["Component"]
        }
    },
    "a-grid": {},
    "a-row": {
        "align": {
            "type": "attribute",
            "description": "垂直对齐方式",
            "values": ["top", "middle", "bottom", "stretch", "{[key in 'xs'", "'sm'", "'md'", "'lg'", "'xl'", "'xxl']: 'top'", "'middle'", "'bottom'", "'stretch'}"]
        },
        "gutter": {
            "type": "attribute",
            "description": "栅格间隔，可以写成像素值或支持响应式的对象写法来设置水平间隔 { xs: 8, sm: 16, md: 24}。或者使用数组形式同时设置 [水平间距, 垂直间距]（1.5.0 后支持）。",
            "values": ["number", "object", "array"]
        },
        "justify": {
            "type": "attribute",
            "description": "水平排列方式",
            "values": ["start", "end", "center", "space-around", "space-between", "space-evenly", "{[key in 'xs'", "'sm'", "'md'", "'lg'", "'xl'", "'xxl']: 'start'", "'end'", "'center'", "'space-around'", "'space-between'", "'space-evenly'}"]
        },
        "wrap": {
            "type": "attribute",
            "description": "是否自动换行",
            "values": ["boolean"]
        }
    },
    "a-col": {
        "flex": {
            "type": "attribute",
            "description": "flex 布局填充",
            "values": ["string|number"]
        },
        "offset": {
            "type": "attribute",
            "description": "栅格左侧的间隔格数，间隔内不可以有栅格",
            "values": ["number"]
        },
        "order": {
            "type": "attribute",
            "description": "栅格顺序，flex 布局模式下有效",
            "values": ["number"]
        },
        "pull": {
            "type": "attribute",
            "description": "栅格向左移动格数",
            "values": ["number"]
        },
        "push": {
            "type": "attribute",
            "description": "栅格向右移动格数",
            "values": ["number"]
        },
        "span": {
            "type": "attribute",
            "description": "栅格占位格数，为 0 时相当于 display: none",
            "values": ["number"]
        },
        "xs": {
            "type": "attribute",
            "description": "<576px 响应式栅格，可为栅格数或一个包含其他属性的对象",
            "values": ["number|object"]
        },
        "sm": {
            "type": "attribute",
            "description": "≥576px 响应式栅格，可为栅格数或一个包含其他属性的对象",
            "values": ["number|object"]
        },
        "md": {
            "type": "attribute",
            "description": "≥768px 响应式栅格，可为栅格数或一个包含其他属性的对象",
            "values": ["number|object"]
        },
        "lg": {
            "type": "attribute",
            "description": "≥992px 响应式栅格，可为栅格数或一个包含其他属性的对象",
            "values": ["number|object"]
        },
        "xl": {
            "type": "attribute",
            "description": "≥1200px 响应式栅格，可为栅格数或一个包含其他属性的对象",
            "values": ["number|object"]
        },
        "xxl": {
            "type": "attribute",
            "description": "≥1600px 响应式栅格，可为栅格数或一个包含其他属性的对象",
            "values": ["number|object"]
        }
    },
    "a-layout": {
        "class": {
            "type": "attribute",
            "description": "容器 class",
            "values": ["string"]
        },
        "hasSider": {
            "type": "attribute",
            "description": "表示子元素里有 Sider，一般不用指定。可用于服务端渲染时避免样式闪动",
            "values": ["boolean"]
        },
        "style": {
            "type": "attribute",
            "description": "指定样式",
            "values": ["object"]
        }
    },
    "a-layout-sider": {
        "breakpoint": {
            "type": "method",
            "description": "触发响应式布局断点时的回调",
            "values": []
        },
        "class": {
            "type": "attribute",
            "description": "容器 class",
            "values": ["string"]
        },
        "v-model:collapsed": {
            "type": "attribute",
            "description": "当前收起状态",
            "values": ["boolean"]
        },
        "collapsedWidth": {
            "type": "attribute",
            "description": "收缩宽度，设置为 0 会出现特殊 trigger",
            "values": ["number"]
        },
        "collapsible": {
            "type": "attribute",
            "description": "是否可收起",
            "values": ["boolean"]
        },
        "defaultCollapsed": {
            "type": "attribute",
            "description": "是否默认收起",
            "values": ["boolean"]
        },
        "reverseArrow": {
            "type": "attribute",
            "description": "翻转折叠提示箭头的方向，当 Sider 在右边时可以使用",
            "values": ["boolean"]
        },
        "style": {
            "type": "attribute",
            "description": "指定样式",
            "values": ["object|string"]
        },
        "theme": {
            "type": "attribute",
            "description": "主题颜色",
            "values": ["light", "dark"]
        },
        "trigger": {
            "type": "attribute",
            "description": "自定义 trigger，设置为 null 时隐藏 trigger",
            "values": ["string|slot"]
        },
        "width": {
            "type": "attribute",
            "description": "宽度",
            "values": ["number|string"]
        },
        "zeroWidthTriggerStyle": {
            "type": "attribute",
            "description": "指定当 collapsedWidth 为 0 时出现的特殊 trigger 的样式",
            "values": ["object"]
        },
        "collapse": {
            "type": "method",
            "description": "展开-收起时的回调函数，有点击 trigger 以及响应式反馈两种方式可以触发",
            "values": []
        }
    },
    "a-breakpoint": {},
    "a-space": {
        "align": {
            "type": "attribute",
            "description": "对齐方式",
            "values": ["start", "end |center |baseline"]
        },
        "direction": {
            "type": "attribute",
            "description": "间距方向",
            "values": ["vertical", "horizontal"]
        },
        "size": {
            "type": "attribute",
            "description": "间距大小",
            "values": ["small", "middle", "large", "number"]
        },
        "split": {
            "type": "attribute",
            "description": "设置拆分",
            "values": ["VueNode", "v-slot"]
        },
        "wrap": {
            "type": "attribute",
            "description": "是否自动换行，仅在 horizontal 时有效",
            "values": ["boolean"]
        }
    },
    "a-space-compact": {
        "block": {
            "type": "attribute",
            "description": "将宽度调整为父元素宽度的选项",
            "values": ["boolean"]
        },
        "direction": {
            "type": "attribute",
            "description": "指定排列方向",
            "values": ["vertical", "horizontal"]
        },
        "size": {
            "type": "attribute",
            "description": "子组件大小",
            "values": ["large", "middle", "small"]
        }
    },
    "a-anchor": {
        "affix": {
            "type": "attribute",
            "description": "固定模式",
            "values": ["boolean"]
        },
        "bounds": {
            "type": "attribute",
            "description": "锚点区域边界",
            "values": ["number"]
        },
        "getContainer": {
            "type": "attribute",
            "description": "指定滚动的容器",
            "values": ["() => HTMLElement"]
        },
        "getCurrentAnchor": {
            "type": "attribute",
            "description": "自定义高亮的锚点",
            "values": ["(activeLink: string) => string"]
        },
        "offsetBottom": {
            "type": "attribute",
            "description": "距离窗口底部达到指定偏移量后触发",
            "values": ["number"]
        },
        "offsetTop": {
            "type": "attribute",
            "description": "距离窗口顶部达到指定偏移量后触发",
            "values": ["number"]
        },
        "showInkInFixed": {
            "type": "attribute",
            "description": ":affix=\"false\" 时是否显示小方块",
            "values": ["boolean"]
        },
        "targetOffset": {
            "type": "attribute",
            "description": "锚点滚动偏移量，默认与 offsetTop 相同，例子",
            "values": ["number"]
        },
        "wrapperClass": {
            "type": "attribute",
            "description": "容器的类名",
            "values": ["string"]
        },
        "wrapperStyle": {
            "type": "attribute",
            "description": "容器样式",
            "values": ["object"]
        },
        "items": {
            "type": "attribute",
            "description": "数据化配置选项内容，支持通过 children 嵌套",
            "values": ["{ key, href, title, target, children }[] 具体见"]
        },
        "direction": {
            "type": "attribute",
            "description": "设置导航方向",
            "values": ["vertical", "horizontal"]
        },
        "customTitle": {
            "type": "attribute",
            "description": "使用插槽自定义选项 title",
            "values": ["v-slot=\"AnchorItem\""]
        }
    },
    "a-anchor-item": {
        "key": {
            "type": "attribute",
            "description": "唯一标志",
            "values": ["string", "number"]
        },
        "href": {
            "type": "attribute",
            "description": "锚点链接",
            "values": ["string"]
        },
        "target": {
            "type": "attribute",
            "description": "该属性指定在何处显示链接的资源。",
            "values": ["string"]
        },
        "title": {
            "type": "attribute",
            "description": "文字内容",
            "values": ["string|slot"]
        },
        "children": {
            "type": "attribute",
            "description": "嵌套的 Anchor Link，注意：水平方向该属性不支持",
            "values": ["AnchorItem[]"]
        },
        "change": {
            "type": "method",
            "description": "监听锚点链接改变",
            "values": []
        },
        "click": {
            "type": "method",
            "description": "click 事件的 handler",
            "values": []
        }
    },
    "a-breadcrumb": {
        "itemRender": {
            "type": "attribute",
            "description": "自定义链接函数，和 vue-router 配置使用， 也可使用 #itemRender=\"props\"",
            "values": ["({route, params, routes, paths}) => vNode"]
        },
        "params": {
            "type": "attribute",
            "description": "路由的参数",
            "values": ["object"]
        },
        "routes": {
            "type": "attribute",
            "description": "router 的路由栈信息",
            "values": ["routes[]"]
        },
        "separator": {
            "type": "attribute",
            "description": "分隔符自定义",
            "values": ["string|slot"]
        }
    },
    "a-breadcrumb-item": {
        "href": {
            "type": "attribute",
            "description": "链接的目的地",
            "values": ["string"]
        },
        "overlay": {
            "type": "attribute",
            "description": "下拉菜单的内容",
            "values": ["Menu", "() => Menu"]
        },
        "click": {
            "type": "method",
            "description": "单击事件",
            "values": []
        }
    },
    "a-routes": {},
    "a-dropdown": {
        "align": {
            "type": "attribute",
            "description": "该值将合并到 placement 的配置中，设置参考 dom-align",
            "values": ["Object"]
        },
        "arrow": {
            "type": "attribute",
            "description": "下拉框箭头是否显示",
            "values": ["boolean", "{ pointAtCenter: boolean }"]
        },
        "destroyPopupOnHide": {
            "type": "attribute",
            "description": "关闭后是否销毁 Dropdown",
            "values": ["boolean"]
        },
        "disabled": {
            "type": "attribute",
            "description": "菜单是否禁用",
            "values": ["boolean"]
        },
        "getPopupContainer": {
            "type": "attribute",
            "description": "菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。",
            "values": ["Function(triggerNode)"]
        },
        "overlay(v-slot)": {
            "type": "attribute",
            "description": "菜单",
            "values": ["Menu"]
        },
        "overlayClassName": {
            "type": "attribute",
            "description": "下拉根元素的类名称",
            "values": ["string"]
        },
        "overlayStyle": {
            "type": "attribute",
            "description": "下拉根元素的样式",
            "values": ["object"]
        },
        "placement": {
            "type": "attribute",
            "description": "菜单弹出位置",
            "values": ["bottomLeft", "bottom", "bottomRight", "topLeft", "top", "topRight"]
        },
        "trigger": {
            "type": "attribute",
            "description": "触发下拉的行为, 移动端不支持 hover",
            "values": ["Array<click|hover|contextmenu>"]
        },
        "v-model:open": {
            "type": "attribute",
            "description": "菜单是否显示",
            "values": ["boolean"]
        },
        "openChange": {
            "type": "method",
            "description": "菜单显示状态改变时调用，参数为 visible。点击菜单按钮导致的消失不会触发",
            "values": []
        }
    },
    "a-dropdown-button": {
        "disabled": {
            "type": "attribute",
            "description": "菜单是否禁用",
            "values": ["boolean"]
        },
        "icon": {
            "type": "attribute",
            "description": "右侧的 icon",
            "values": ["VNode", "slot"]
        },
        "loading": {
            "type": "attribute",
            "description": "设置按钮载入状态",
            "values": ["boolean", "{ delay: number }"]
        },
        "overlay(v-slot)": {
            "type": "attribute",
            "description": "菜单",
            "values": ["Menu"]
        },
        "placement": {
            "type": "attribute",
            "description": "菜单弹出位置",
            "values": ["bottomLeft", "bottom", "bottomRight", "topLeft", "top", "topRight"]
        },
        "size": {
            "type": "attribute",
            "description": "按钮大小，和 Button 一致",
            "values": ["string"]
        },
        "trigger": {
            "type": "attribute",
            "description": "触发下拉的行为",
            "values": ["Array<click|hover|contextmenu>"]
        },
        "type": {
            "type": "attribute",
            "description": "按钮类型，和 Button 一致",
            "values": ["string"]
        },
        "v-model:open": {
            "type": "attribute",
            "description": "菜单是否显示",
            "values": ["boolean"]
        },
        "click": {
            "type": "method",
            "description": "点击左侧按钮的回调，和 Button 一致",
            "values": []
        },
        "openChange": {
            "type": "method",
            "description": "菜单显示状态改变时调用，参数为 visible。点击菜单按钮导致的消失不会触发",
            "values": []
        }
    },
    "a-menu": {
        "forceSubMenuRender": {
            "type": "attribute",
            "description": "在子菜单展示之前就渲染进 DOM",
            "values": ["boolean"]
        },
        "inlineCollapsed": {
            "type": "attribute",
            "description": "inline 时菜单是否收起状态",
            "values": ["boolean"]
        },
        "inlineIndent": {
            "type": "attribute",
            "description": "inline 模式的菜单缩进宽度",
            "values": ["number"]
        },
        "items": {
            "type": "attribute",
            "description": "菜单内容",
            "values": ["ItemType[]"]
        },
        "mode": {
            "type": "attribute",
            "description": "菜单类型，现在支持垂直、水平、和内嵌模式三种",
            "values": ["vertical", "horizontal", "inline"]
        },
        "multiple": {
            "type": "attribute",
            "description": "是否允许多选",
            "values": ["boolean"]
        },
        "v-model:openKeys": {
            "type": "attribute",
            "description": "当前展开的 SubMenu 菜单项 key 数组",
            "values": ["(string", "number)[]"]
        },
        "overflowedIndicator": {
            "type": "attribute",
            "description": "用于自定义 Menu 水平空间不足时的省略收缩的图标",
            "values": ["slot"]
        },
        "selectable": {
            "type": "attribute",
            "description": "是否允许选中",
            "values": ["boolean"]
        },
        "v-model:selectedKeys": {
            "type": "attribute",
            "description": "当前选中的菜单项 key 数组",
            "values": ["(string", "number)[]"]
        },
        "subMenuCloseDelay": {
            "type": "attribute",
            "description": "用户鼠标离开子菜单后关闭延时，单位：秒",
            "values": ["number"]
        },
        "subMenuOpenDelay": {
            "type": "attribute",
            "description": "用户鼠标进入子菜单后开启延时，单位：秒",
            "values": ["number"]
        },
        "theme": {
            "type": "attribute",
            "description": "主题颜色",
            "values": ["light", "dark"]
        },
        "triggerSubMenuAction": {
            "type": "attribute",
            "description": "修改 Menu 子菜单的触发方式",
            "values": ["click", "hover"]
        },
        "click": {
            "type": "method",
            "description": "点击 MenuItem 调用此函数",
            "values": []
        },
        "deselect": {
            "type": "method",
            "description": "取消选中时调用，仅在 multiple 生效",
            "values": []
        },
        "openChange": {
            "type": "method",
            "description": "SubMenu 展开/关闭的回调",
            "values": []
        },
        "select": {
            "type": "method",
            "description": "被选中时调用",
            "values": []
        }
    },
    "a-menu-item": {
        "disabled": {
            "type": "attribute",
            "description": "是否禁用",
            "values": ["boolean"]
        },
        "icon": {
            "type": "attribute",
            "description": "菜单图标",
            "values": ["slot"]
        },
        "key": {
            "type": "attribute",
            "description": "item 的唯一标志",
            "values": ["string", "number"]
        },
        "title": {
            "type": "attribute",
            "description": "设置收缩时展示的悬浮标题",
            "values": ["string", "slot"]
        }
    },
    "a-menu-sub-menu": {
        "disabled": {
            "type": "attribute",
            "description": "是否禁用",
            "values": ["boolean"]
        },
        "expandIcon": {
            "type": "attribute",
            "description": "自定义 Menu 展开收起图标",
            "values": ["slot"]
        },
        "icon": {
            "type": "attribute",
            "description": "菜单图标",
            "values": ["slot"]
        },
        "key": {
            "type": "attribute",
            "description": "唯一标志, 必填",
            "values": ["string", "number"]
        },
        "popupClassName": {
            "type": "attribute",
            "description": "子菜单样式",
            "values": ["string"]
        },
        "popupOffset": {
            "type": "attribute",
            "description": "子菜单偏移量，mode=\"inline\" 时无效",
            "values": ["[number, number]"]
        },
        "title": {
            "type": "attribute",
            "description": "子菜单项值",
            "values": ["string|slot"]
        },
        "titleClick": {
            "type": "method",
            "description": "点击子菜单标题",
            "values": []
        }
    },
    "a-menu-item-group": {
        "title": {
            "type": "attribute",
            "description": "分组标题",
            "values": ["string|slot"]
        }
    },
    "a-menu-divider": {
        "dashed": {
            "type": "attribute",
            "description": "是否虚线",
            "values": ["boolean"]
        }
    },
    "a-page-header": {
        "avatar": {
            "type": "attribute",
            "description": "标题栏旁的头像",
            "values": ["avatar props"]
        },
        "backIcon": {
            "type": "attribute",
            "description": "自定义 back icon ，如果为 false 不渲染 back icon",
            "values": ["string|slot"]
        },
        "breadcrumb": {
            "type": "attribute",
            "description": "面包屑的配置",
            "values": ["breadcrumb"]
        },
        "extra": {
            "type": "attribute",
            "description": "操作区，位于 title 行的行尾",
            "values": ["string|slot"]
        },
        "footer": {
            "type": "attribute",
            "description": "PageHeader 的页脚，一般用于渲染 TabBar",
            "values": ["string|slot"]
        },
        "ghost": {
            "type": "attribute",
            "description": "pageHeader 的类型，将会改变背景颜色",
            "values": ["boolean"]
        },
        "subTitle": {
            "type": "attribute",
            "description": "自定义的二级标题文字",
            "values": ["string|slot"]
        },
        "tags": {
            "type": "attribute",
            "description": "title 旁的 tag 列表",
            "values": ["Tag[]", "Tag"]
        },
        "title": {
            "type": "attribute",
            "description": "自定义标题文字",
            "values": ["string|slot"]
        },
        "back": {
            "type": "method",
            "description": "返回按钮的点击事件",
            "values": []
        }
    },
    "a-pagination": {
        "position": {
            "type": "attribute",
            "description": "指定分页显示的位置， 取值为topLeft | topCenter | topRight |bottomLeft | bottomCenter | bottomRight",
            "values": ["Array"]
        }
    },
    "a-steps": {
        "v-model:current": {
            "type": "attribute",
            "description": "指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 status 属性覆盖状态, 1.5.0 后支持 v-model",
            "values": ["number"]
        },
        "direction": {
            "type": "attribute",
            "description": "指定步骤条方向。目前支持水平（horizontal）和竖直（vertical）两种方向",
            "values": ["string"]
        },
        "initial": {
            "type": "attribute",
            "description": "起始序号，从 0 开始记数",
            "values": ["number"]
        },
        "labelPlacement": {
            "type": "attribute",
            "description": "指定标签放置位置，默认水平放图标右侧，可选vertical放图标下方",
            "values": ["string"]
        },
        "percent": {
            "type": "attribute",
            "description": "当前 process 步骤显示的进度条进度（只对基本类型的 Steps 生效）",
            "values": ["number"]
        },
        "progressDot": {
            "type": "attribute",
            "description": "点状步骤条，可以设置为一个 作用域插槽,labelPlacement 将强制为vertical",
            "values": ["Boolean or v-slot:progressDot=\"{index, status, title, description, prefixCls, iconDot}\""]
        },
        "responsive": {
            "type": "attribute",
            "description": "当屏幕宽度小于 532px 时自动变为垂直模式",
            "values": ["boolean"]
        },
        "size": {
            "type": "attribute",
            "description": "指定大小，目前支持普通（default）和迷你（small）",
            "values": ["string"]
        },
        "status": {
            "type": "attribute",
            "description": "指定当前步骤的状态，可选 wait process finish error",
            "values": ["string"]
        },
        "type": {
            "type": "attribute",
            "description": "步骤条类型，有 default 和 navigation 两种",
            "values": ["string"]
        },
        "items": {
            "type": "attribute",
            "description": "配置选项卡内容",
            "values": ["StepItem[]"]
        },
        "change": {
            "type": "method",
            "description": "点击切换步骤时触发",
            "values": []
        }
    },
    "a-steps-step": {
        "description": {
            "type": "attribute",
            "description": "步骤的详情描述，可选",
            "values": ["string", "slot"]
        },
        "disabled": {
            "type": "attribute",
            "description": "禁用点击",
            "values": ["boolean"]
        },
        "icon": {
            "type": "attribute",
            "description": "步骤图标的类型，可选",
            "values": ["string", "slot"]
        },
        "status": {
            "type": "attribute",
            "description": "指定状态。当不配置该属性时，会使用 Steps 的 current 来自动指定状态。可选：wait process finish error",
            "values": ["string"]
        },
        "subTitle": {
            "type": "attribute",
            "description": "子标题",
            "values": ["string", "slot"]
        },
        "title": {
            "type": "attribute",
            "description": "标题",
            "values": ["string", "slot"]
        }
    },
    "a-auto-complete": {
        "allowClear": {
            "type": "attribute",
            "description": "支持清除, 单选模式有效",
            "values": ["boolean"]
        },
        "autofocus": {
            "type": "attribute",
            "description": "自动获取焦点",
            "values": ["boolean"]
        },
        "backfill": {
            "type": "attribute",
            "description": "使用键盘选择选项的时候把选中项回填到输入框中",
            "values": ["boolean"]
        },
        "bordered": {
            "type": "attribute",
            "description": "是否有边框",
            "values": ["boolean"]
        },
        "clearIcon": {
            "type": "attribute",
            "description": "使用插槽自定义清除按钮",
            "values": ["slot"]
        },
        "default(自定义输入框)": {
            "type": "attribute",
            "description": "自定义输入框",
            "values": ["slot"]
        },
        "defaultActiveFirstOption": {
            "type": "attribute",
            "description": "是否默认高亮第一个选项。",
            "values": ["boolean"]
        },
        "defaultOpen": {
            "type": "attribute",
            "description": "是否默认展开下拉菜单",
            "values": ["boolean"]
        },
        "disabled": {
            "type": "attribute",
            "description": "是否禁用",
            "values": ["boolean"]
        },
        "popupClassName": {
            "type": "attribute",
            "description": "下拉菜单的 className 属性",
            "values": ["string"]
        },
        "dropdownMatchSelectWidth": {
            "type": "attribute",
            "description": "下拉菜单和选择器同宽。默认将设置 min-width，当值小于选择框宽度时会被忽略。false 时会关闭虚拟滚动",
            "values": ["boolean", "number"]
        },
        "dropdownMenuStyle": {
            "type": "attribute",
            "description": "dropdown 菜单自定义样式",
            "values": ["object"]
        },
        "filterOption": {
            "type": "attribute",
            "description": "是否根据输入项进行筛选。当其为一个函数时，会接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false。",
            "values": ["boolean or function(inputValue, option)"]
        },
        "open": {
            "type": "attribute",
            "description": "是否展开下拉菜单",
            "values": ["boolean"]
        },
        "option": {
            "type": "attribute",
            "description": "通过 option 插槽，自定义节点",
            "values": ["v-slot:option=\"{value, label, [disabled, key, title]}\""]
        },
        "options": {
            "type": "attribute",
            "description": "自动完成的数据源",
            "values": ["DataSourceItemType[]"]
        },
        "placeholder": {
            "type": "attribute",
            "description": "输入框提示",
            "values": ["string", "slot"]
        },
        "status": {
            "type": "attribute",
            "description": "设置校验状态",
            "values": ["'error'", "'warning'"]
        },
        "v-model:value": {
            "type": "attribute",
            "description": "指定当前选中的条目",
            "values": ["string|string[]|{ key: string, label: string|vNodes }|Array<{ key: string, label: string|vNodes }>"]
        },
        "blur": {
            "type": "function",
            "description": "移除焦点",
            "values": []
        },
        "change": {
            "type": "method",
            "description": "选中 option，或 input 的 value 变化时，调用此函数",
            "values": []
        },
        "dropdownVisibleChange": {
            "type": "method",
            "description": "展开下拉菜单的回调",
            "values": []
        },
        "focus": {
            "type": "function",
            "description": "获取焦点",
            "values": []
        },
        "search": {
            "type": "method",
            "description": "搜索补全项的时候调用",
            "values": []
        },
        "select": {
            "type": "method",
            "description": "被选中时调用，参数为选中项的 value 值",
            "values": []
        },
        "clear": {
            "type": "method",
            "description": "清除内容时回调",
            "values": []
        }
    },
    "a-cascader": {
        "allowClear": {
            "type": "attribute",
            "description": "是否支持清除",
            "values": ["boolean"]
        },
        "autofocus": {
            "type": "attribute",
            "description": "自动获取焦点",
            "values": ["boolean"]
        },
        "bordered": {
            "type": "attribute",
            "description": "是否有边框",
            "values": ["boolean"]
        },
        "clearIcon": {
            "type": "attribute",
            "description": "自定义的选择框清空图标",
            "values": ["slot"]
        },
        "changeOnSelect": {
            "type": "attribute",
            "description": "（单选时生效）当此项为 true 时，点选每级菜单选项值都会发生变化，具体见上面的演示",
            "values": ["boolean"]
        },
        "defaultValue": {
            "type": "attribute",
            "description": "默认的选中项",
            "values": ["string[]", "number[]"]
        },
        "disabled": {
            "type": "attribute",
            "description": "禁用",
            "values": ["boolean"]
        },
        "displayRender": {
            "type": "attribute",
            "description": "选择后展示的渲染函数,可使用 #displayRender=\"{labels, selectedOptions}\"",
            "values": ["({labels, selectedOptions}) => VNode"]
        },
        "popupClassName": {
            "type": "attribute",
            "description": "自定义浮层类名",
            "values": ["string"]
        },
        "dropdownStyle": {
            "type": "attribute",
            "description": "自定义浮层样式",
            "values": ["CSSProperties"]
        },
        "expandIcon": {
            "type": "attribute",
            "description": "自定义次级菜单展开图标",
            "values": ["slot"]
        },
        "expandTrigger": {
            "type": "attribute",
            "description": "次级菜单的展开方式",
            "values": ["click", "hover"]
        },
        "fieldNames": {
            "type": "attribute",
            "description": "自定义 options 中 label value children 的字段",
            "values": ["object"]
        },
        "getPopupContainer": {
            "type": "attribute",
            "description": "菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。",
            "values": ["Function(triggerNode)"]
        },
        "loadData": {
            "type": "attribute",
            "description": "用于动态加载选项，无法与 showSearch 一起使用",
            "values": ["(selectedOptions) => void"]
        },
        "maxTagCount": {
            "type": "attribute",
            "description": "最多显示多少个 tag，响应式模式会对性能产生损耗",
            "values": ["number", "responsive"]
        },
        "maxTagPlaceholder": {
            "type": "attribute",
            "description": "隐藏 tag 时显示的内容",
            "values": ["v-slot", "function(omittedValues)"]
        },
        "multiple": {
            "type": "attribute",
            "description": "支持多选节点",
            "values": ["boolean"]
        },
        "notFoundContent": {
            "type": "attribute",
            "description": "当下拉列表为空时显示的内容",
            "values": ["string", "slot"]
        },
        "open": {
            "type": "attribute",
            "description": "控制浮层显隐",
            "values": ["boolean"]
        },
        "options": {
            "type": "attribute",
            "description": "可选项数据源",
            "values": ["Option[]"]
        },
        "placeholder": {
            "type": "attribute",
            "description": "输入框占位文本",
            "values": ["string"]
        },
        "placement": {
            "type": "attribute",
            "description": "浮层预设位置",
            "values": ["bottomLeft", "bottomRight", "topLeft", "topRight"]
        },
        "showCheckedStrategy": {
            "type": "attribute",
            "description": "定义选中项回填的方式。Cascader.SHOW_CHILD: 只显示选中的子节点。Cascader.SHOW_PARENT: 只显示父节点（当父节点下所有子节点都选中时）。",
            "values": ["Cascader.SHOW_PARENT", "Cascader.SHOW_CHILD"]
        },
        "removeIcon": {
            "type": "attribute",
            "description": "自定义的多选框清除图标",
            "values": ["slot"]
        },
        "searchValue": {
            "type": "attribute",
            "description": "设置搜索的值，需要与 showSearch 配合使用",
            "values": ["string"]
        },
        "showSearch": {
            "type": "attribute",
            "description": "在选择框中显示搜索框",
            "values": ["boolean", "object"]
        },
        "status": {
            "type": "attribute",
            "description": "设置校验状态",
            "values": ["'error'", "'warning'"]
        },
        "size": {
            "type": "attribute",
            "description": "输入框大小",
            "values": ["large", "default", "small"]
        },
        "suffixIcon": {
            "type": "attribute",
            "description": "自定义的选择框后缀图标",
            "values": ["string", "VNode", "slot"]
        },
        "tagRender": {
            "type": "attribute",
            "description": "自定义 tag 内容，多选时生效",
            "values": ["slot"]
        },
        "v-model:value": {
            "type": "attribute",
            "description": "指定选中项",
            "values": ["string[]", "number[]"]
        }
    },
    "a-show-search": {
        "filter": {
            "type": "attribute",
            "description": "接收 inputValue path 两个参数，当 path 符合筛选条件时，应返回 true，反之则返回 false。",
            "values": ["function(inputValue, path): boolean"]
        },
        "limit": {
            "type": "attribute",
            "description": "搜索结果展示数量",
            "values": ["number", "false"]
        },
        "matchInputWidth": {
            "type": "attribute",
            "description": "搜索结果列表是否与输入框同宽",
            "values": ["boolean"]
        },
        "render": {
            "type": "attribute",
            "description": "用于渲染 filter 后的选项,可使用 #showSearchRender=\"{inputValue, path}\"",
            "values": ["function({inputValue, path}): VNode"]
        },
        "sort": {
            "type": "attribute",
            "description": "用于排序 filter 后的选项",
            "values": ["function(a, b, inputValue)"]
        },
        "change": {
            "type": "method",
            "description": "选择完成后的回调",
            "values": []
        },
        "dropdownVisibleChange": {
            "type": "method",
            "description": "显示/隐藏浮层的回调",
            "values": []
        },
        "search": {
            "type": "method",
            "description": "监听搜索，返回输入的值",
            "values": []
        },
        "blur": {
            "type": "function",
            "description": "移除焦点",
            "values": []
        },
        "focus": {
            "type": "function",
            "description": "获取焦点",
            "values": []
        }
    },
    "a-checkbox": {
        "disabled": {
            "type": "attribute",
            "description": "整组失效",
            "values": ["boolean"]
        },
        "name": {
            "type": "attribute",
            "description": "CheckboxGroup 下所有 input[type=\"checkbox\"] 的 name 属性",
            "values": ["string"]
        },
        "options": {
            "type": "attribute",
            "description": "指定可选项，可以通过 slot=\"label\" slot-scope=\"option\" 定制label",
            "values": ["string[]", "Array<{ label: string value: string disabled?: boolean, indeterminate?: boolean, onChange?: function }>"]
        },
        "v-model:value": {
            "type": "attribute",
            "description": "指定选中的选项",
            "values": ["(boolean", "string", "number)[]"]
        },
        "change": {
            "type": "method",
            "description": "变化时回调函数",
            "values": []
        }
    },
    "a-date-picker": {
        "defaultPickerValue": {
            "type": "attribute",
            "description": "默认面板日期",
            "values": ["dayjs"]
        },
        "disabledTime": {
            "type": "attribute",
            "description": "不可选择的时间",
            "values": ["function(date)"]
        },
        "format": {
            "type": "attribute",
            "description": "展示的日期格式，配置参考 dayjs",
            "values": ["formatType"]
        },
        "renderExtraFooter": {
            "type": "attribute",
            "description": "在面板中添加额外的页脚",
            "values": ["v-slot:renderExtraFooter=\"mode\""]
        },
        "showNow": {
            "type": "attribute",
            "description": "当设定了 showTime 的时候，面板是否显示“此刻”按钮",
            "values": ["boolean"]
        },
        "showTime": {
            "type": "attribute",
            "description": "增加时间选择功能",
            "values": ["Object", "boolean"]
        },
        "showTimedefaultValue": {
            "type": "attribute",
            "description": "设置用户选择日期时默认的时分秒，例子",
            "values": ["dayjs"]
        },
        "showToday": {
            "type": "attribute",
            "description": "是否展示“今天”按钮",
            "values": ["boolean"]
        },
        "v-model:value": {
            "type": "attribute",
            "description": "日期",
            "values": ["dayjs"]
        },
        "change": {
            "type": "method",
            "description": "时间发生变化的回调",
            "values": []
        },
        "ok": {
            "type": "method",
            "description": "点击确定按钮的回调",
            "values": []
        }
    },
    "a-range-picker": {
        "allowEmpty": {
            "type": "attribute",
            "description": "允许起始项部分为空",
            "values": ["[boolean, boolean]"]
        },
        "dateRender": {
            "type": "attribute",
            "description": "自定义日期单元格的内容。",
            "values": ["v-slot:dateRender=\"{current: dayjs, today: dayjs, info: { range: start", "end }}\""]
        },
        "defaultPickerValue": {
            "type": "attribute",
            "description": "默认面板日期",
            "values": ["dayjs[]"]
        },
        "disabled": {
            "type": "attribute",
            "description": "禁用起始项",
            "values": ["[boolean, boolean]"]
        },
        "disabledTime": {
            "type": "attribute",
            "description": "不可选择的时间",
            "values": ["function(date: dayjs, partial: start", "end)"]
        },
        "format": {
            "type": "attribute",
            "description": "展示的日期格式",
            "values": ["formatType"]
        },
        "presets": {
            "type": "attribute",
            "description": "预设时间范围快捷选择",
            "values": ["{ label: slot, value: dayjs[] }[]"]
        },
        "ranges": {
            "type": "attribute",
            "description": "预设时间范围快捷选择",
            "values": ["{ [range: string]: dayjs[] }", "{ [range: string]: () => dayjs[] }"]
        },
        "renderExtraFooter": {
            "type": "attribute",
            "description": "在面板中添加额外的页脚",
            "values": ["v-slot:renderExtraFooter=\"mode\""]
        },
        "separator": {
            "type": "attribute",
            "description": "设置分隔符",
            "values": ["string", "v-slot:separator"]
        },
        "showTime": {
            "type": "attribute",
            "description": "增加时间选择功能",
            "values": ["Object|boolean"]
        },
        "showTimedefaultValue": {
            "type": "attribute",
            "description": "设置用户选择日期时默认的时分秒，例子",
            "values": ["dayjs[]"]
        },
        "v-model:value": {
            "type": "attribute",
            "description": "日期",
            "values": ["dayjs[]"]
        },
        "calendarChange": {
            "type": "method",
            "description": "待选日期发生变化的回调",
            "values": []
        },
        "change": {
            "type": "method",
            "description": "日期范围发生变化的回调",
            "values": []
        },
        "ok": {
            "type": "method",
            "description": "点击确定按钮的回调",
            "values": []
        }
    },
    "a-form": {
        "colon": {
            "type": "attribute",
            "description": "配置 Form.Item 的 colon 的默认值 (只有在属性 layout 为 horizontal 时有效)",
            "values": ["boolean"]
        },
        "disabled": {
            "type": "attribute",
            "description": "设置表单组件禁用，仅对 antdv 组件有效",
            "values": ["boolean"]
        },
        "hideRequiredMark": {
            "type": "attribute",
            "description": "隐藏所有表单项的必选标记",
            "values": ["Boolean"]
        },
        "labelAlign": {
            "type": "attribute",
            "description": "label 标签的文本对齐方式",
            "values": ["'left'", "'right'"]
        },
        "labelCol": {
            "type": "attribute",
            "description": "label 标签布局，同 <Col> 组件，设置 span offset 值，如 {span: 3, offset: 12} 或 sm: {span: 3, offset: 12}",
            "values": ["object"]
        },
        "labelWrap": {
            "type": "attribute",
            "description": "label 标签的文本换行方式",
            "values": ["boolean"]
        },
        "layout": {
            "type": "attribute",
            "description": "表单布局",
            "values": ["'horizontal'|'vertical'|'inline'"]
        },
        "model": {
            "type": "attribute",
            "description": "表单数据对象",
            "values": ["object"]
        },
        "name": {
            "type": "attribute",
            "description": "表单名称，会作为表单字段 id 前缀使用",
            "values": ["string"]
        },
        "noStyle": {
            "type": "attribute",
            "description": "为 true 时不带样式，作为纯字段控件使用",
            "values": ["boolean"]
        },
        "rules": {
            "type": "attribute",
            "description": "表单验证规则",
            "values": ["object"]
        },
        "scrollToFirstError": {
            "type": "attribute",
            "description": "提交失败自动滚动到第一个错误字段",
            "values": ["boolean", "options"]
        },
        "validateOnRuleChange": {
            "type": "attribute",
            "description": "是否在 rules 属性改变后立即触发一次验证",
            "values": ["boolean"]
        },
        "validateTrigger": {
            "type": "attribute",
            "description": "统一设置字段校验规则",
            "values": ["string", "string[]"]
        },
        "wrapperCol": {
            "type": "attribute",
            "description": "需要为输入控件设置布局样式时，使用该属性，用法同 labelCol",
            "values": ["object"]
        },
        "finish": {
            "type": "method",
            "description": "提交表单且数据验证成功后回调事件",
            "values": []
        },
        "finishFailed": {
            "type": "method",
            "description": "提交表单且数据验证失败后回调事件",
            "values": []
        },
        "submit": {
            "type": "method",
            "description": "数据验证成功后回调事件",
            "values": []
        },
        "validate": {
            "type": "function",
            "description": "触发表单验证, 同 validateFields",
            "values": []
        },
        "clearValidate": {
            "type": "function",
            "description": "移除表单项的校验结果。传入待移除的表单项的 name 属性或者 name 组成的数组，如不传则移除整个表单的校验结果",
            "values": []
        },
        "resetFields": {
            "type": "function",
            "description": "对整个表单进行重置，将所有字段值重置为初始值并移除校验结果",
            "values": []
        },
        "scrollToField": {
            "type": "function",
            "description": "滚动到对应字段位置",
            "values": []
        },
        "validateFields": {
            "type": "function",
            "description": "触发表单验证",
            "values": []
        }
    },
    "a-form-item": {
        "autoLink": {
            "type": "attribute",
            "description": "是否自动关联表单域，对于大部分情况都可以使用自动关联，如果不满足自动关联的条件，可以手动关联，参见下方注意事项",
            "values": ["boolean"]
        },
        "colon": {
            "type": "attribute",
            "description": "配合 label 属性使用，表示是否显示 label 后面的冒号",
            "values": ["boolean"]
        },
        "extra": {
            "type": "attribute",
            "description": "额外的提示信息，和 help 类似，当需要错误信息和提示文案同时出现时，可以使用这个。",
            "values": ["string|slot"]
        },
        "hasFeedback": {
            "type": "attribute",
            "description": "配合 validateStatus 属性使用，展示校验状态图标，建议只配合 Input 组件使用",
            "values": ["boolean"]
        },
        "help": {
            "type": "attribute",
            "description": "提示信息，如不设置，则会根据校验规则自动生成",
            "values": ["string|slot"]
        },
        "htmlFor": {
            "type": "attribute",
            "description": "设置子元素 label htmlFor 属性",
            "values": ["string"]
        },
        "label": {
            "type": "attribute",
            "description": "label 标签的文本",
            "values": ["string|slot"]
        },
        "labelAlign": {
            "type": "attribute",
            "description": "标签文本对齐方式",
            "values": ["'left'", "'right'"]
        },
        "labelCol": {
            "type": "attribute",
            "description": "label 标签布局，同 <Col> 组件，设置 span offset 值，如 {span: 3, offset: 12} 或 sm: {span: 3, offset: 12}",
            "values": ["object"]
        },
        "name": {
            "type": "attribute",
            "description": "表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的",
            "values": ["NamePath"]
        },
        "required": {
            "type": "attribute",
            "description": "是否必填，如不设置，则会根据校验规则自动生成",
            "values": ["boolean"]
        },
        "rules": {
            "type": "attribute",
            "description": "表单验证规则",
            "values": ["object", "array"]
        },
        "tooltip": {
            "type": "attribute",
            "description": "配置提示信息",
            "values": ["string", "slot"]
        },
        "validateFirst": {
            "type": "attribute",
            "description": "当某一规则校验不通过时，是否停止剩下的规则的校验。",
            "values": ["boolean"]
        },
        "validateStatus": {
            "type": "attribute",
            "description": "校验状态，如不设置，则会根据校验规则自动生成，可选：'success' 'warning' 'error' 'validating'",
            "values": ["string"]
        },
        "validateTrigger": {
            "type": "attribute",
            "description": "设置字段校验的时机",
            "values": ["string", "string[]"]
        },
        "wrapperCol": {
            "type": "attribute",
            "description": "需要为输入控件设置布局样式时，使用该属性，用法同 labelCol",
            "values": ["object"]
        }
    },
    "a-input": {
        "addonAfter": {
            "type": "attribute",
            "description": "带标签的 input，设置后置标签",
            "values": ["string|slot"]
        },
        "addonBefore": {
            "type": "attribute",
            "description": "带标签的 input，设置前置标签",
            "values": ["string|slot"]
        },
        "allowClear": {
            "type": "attribute",
            "description": "可以点击清除图标删除内容",
            "values": ["boolean"]
        },
        "bordered": {
            "type": "attribute",
            "description": "是否有边框",
            "values": ["boolean"]
        },
        "clearIcon": {
            "type": "attribute",
            "description": "自定义清除图标 （allowClear 为 true 时生效）",
            "values": ["slot"]
        },
        "defaultValue": {
            "type": "attribute",
            "description": "输入框默认内容",
            "values": ["string"]
        },
        "disabled": {
            "type": "attribute",
            "description": "是否禁用状态，默认为 false",
            "values": ["boolean"]
        },
        "id": {
            "type": "attribute",
            "description": "输入框的 id",
            "values": ["string"]
        },
        "maxlength": {
            "type": "attribute",
            "description": "最大长度",
            "values": ["number"]
        },
        "prefix": {
            "type": "attribute",
            "description": "带有前缀图标的 input",
            "values": ["string|slot"]
        },
        "showCount": {
            "type": "attribute",
            "description": "是否展示字数",
            "values": ["boolean"]
        },
        "status": {
            "type": "attribute",
            "description": "设置校验状态",
            "values": ["'error'", "'warning'"]
        },
        "size": {
            "type": "attribute",
            "description": "控件大小。注：标准表单内的输入框大小限制为 middle。可选 large middle small",
            "values": ["string"]
        },
        "suffix": {
            "type": "attribute",
            "description": "带有后缀图标的 input",
            "values": ["string|slot"]
        },
        "type": {
            "type": "attribute",
            "description": "声明 input 类型，同原生 input 标签的 type 属性，见：MDN(请直接使用 <a-textarea /> 代替 type=\"textarea\")。",
            "values": ["string"]
        },
        "v-model:value": {
            "type": "attribute",
            "description": "输入框内容",
            "values": ["string"]
        },
        "change": {
            "type": "method",
            "description": "输入框内容变化时的回调",
            "values": []
        },
        "pressEnter": {
            "type": "method",
            "description": "按下回车的回调",
            "values": []
        }
    },
    "a-text-area": {
        "allowClear": {
            "type": "attribute",
            "description": "可以点击清除图标删除内容",
            "values": ["boolean"]
        },
        "autosize": {
            "type": "attribute",
            "description": "自适应内容高度，可设置为 true | false 或对象：{ minRows: 2, maxRows: 6 }",
            "values": ["boolean|object"]
        },
        "defaultValue": {
            "type": "attribute",
            "description": "输入框默认内容",
            "values": ["string"]
        },
        "showCount": {
            "type": "attribute",
            "description": "是否展示字数",
            "values": ["boolean"]
        },
        "v-model:value": {
            "type": "attribute",
            "description": "输入框内容",
            "values": ["string"]
        },
        "pressEnter": {
            "type": "method",
            "description": "按下回车的回调",
            "values": []
        }
    },
    "a-input-search": {
        "enterButton": {
            "type": "attribute",
            "description": "是否有确认按钮，可设为按钮文字。该属性会与 addon 冲突。",
            "values": ["boolean|slot"]
        },
        "loading": {
            "type": "attribute",
            "description": "搜索 loading",
            "values": ["boolean"]
        },
        "search": {
            "type": "method",
            "description": "点击搜索或按下回车键时的回调",
            "values": []
        }
    },
    "a-input-group": {
        "compact": {
            "type": "attribute",
            "description": "是否用紧凑模式",
            "values": ["boolean"]
        },
        "size": {
            "type": "attribute",
            "description": "Input.Group 中所有的 Input 的大小，可选 large default small",
            "values": ["string"]
        }
    },
    "a-input-number": {
        "addonAfter": {
            "type": "attribute",
            "description": "带标签的 input，设置后置标签",
            "values": ["slot"]
        },
        "addonBefore": {
            "type": "attribute",
            "description": "带标签的 input，设置前置标签",
            "values": ["slot"]
        },
        "autofocus": {
            "type": "attribute",
            "description": "自动获取焦点",
            "values": ["boolean"]
        },
        "bordered": {
            "type": "attribute",
            "description": "是否有边框",
            "values": ["boolean"]
        },
        "controls": {
            "type": "attribute",
            "description": "是否显示增减按钮",
            "values": ["boolean"]
        },
        "decimalSeparator": {
            "type": "attribute",
            "description": "小数点",
            "values": ["string"]
        },
        "defaultValue": {
            "type": "attribute",
            "description": "初始值",
            "values": ["number"]
        },
        "disabled": {
            "type": "attribute",
            "description": "禁用",
            "values": ["boolean"]
        },
        "formatter": {
            "type": "attribute",
            "description": "指定输入框展示值的格式",
            "values": ["function(value: number", "string, info: { userTyping: boolean, input: string }): string"]
        },
        "keyboard": {
            "type": "attribute",
            "description": "是否启用键盘快捷行为",
            "values": ["boolean"]
        },
        "max": {
            "type": "attribute",
            "description": "最大值",
            "values": ["number"]
        },
        "min": {
            "type": "attribute",
            "description": "最小值",
            "values": ["number"]
        },
        "parser": {
            "type": "attribute",
            "description": "指定从 formatter 里转换回数字的方式，和 formatter 搭配使用",
            "values": ["function( string): number"]
        },
        "precision": {
            "type": "attribute",
            "description": "数值精度",
            "values": ["number"]
        },
        "prefix": {
            "type": "attribute",
            "description": "带有前缀图标的 input",
            "values": ["slot"]
        },
        "size": {
            "type": "attribute",
            "description": "输入框大小",
            "values": ["string"]
        },
        "status": {
            "type": "attribute",
            "description": "设置校验状态",
            "values": ["'error'", "'warning'"]
        },
        "step": {
            "type": "method",
            "description": "点击上下箭头的回调",
            "values": []
        },
        "stringMode": {
            "type": "attribute",
            "description": "字符值模式，开启后支持高精度小数。同时 change 事件将返回 string 类型",
            "values": ["boolean"]
        },
        "upIcon": {
            "type": "attribute",
            "description": "自定义上箭头图标",
            "values": ["slot"]
        },
        "downIcon": {
            "type": "attribute",
            "description": "自定义下箭头图标",
            "values": ["slot"]
        },
        "v-model:value": {
            "type": "attribute",
            "description": "当前值",
            "values": ["number"]
        },
        "change": {
            "type": "method",
            "description": "变化回调",
            "values": []
        },
        "pressEnter": {
            "type": "method",
            "description": "按下回车的回调",
            "values": []
        },
        "blur": {
            "type": "function",
            "description": "移除焦点",
            "values": []
        },
        "focus": {
            "type": "function",
            "description": "获取焦点",
            "values": []
        }
    },
    "a-mentions": {
        "autofocus": {
            "type": "attribute",
            "description": "自动获得焦点",
            "values": ["boolean"]
        },
        "defaultValue": {
            "type": "attribute",
            "description": "默认值",
            "values": ["string"]
        },
        "filterOption": {
            "type": "attribute",
            "description": "自定义过滤逻辑",
            "values": ["false", "(input: string, option: OptionProps) => boolean"]
        },
        "getPopupContainer": {
            "type": "attribute",
            "description": "指定建议框挂载的 HTML 节点",
            "values": ["() => HTMLElement"]
        },
        "notFoundContent": {
            "type": "attribute",
            "description": "当下拉列表为空时显示的内容",
            "values": ["string", "slot"]
        },
        "placement": {
            "type": "attribute",
            "description": "弹出层展示位置",
            "values": ["top", "bottom"]
        },
        "prefix": {
            "type": "attribute",
            "description": "设置触发关键字",
            "values": ["string", "string[]"]
        },
        "split": {
            "type": "attribute",
            "description": "设置选中项前后分隔符",
            "values": ["string"]
        },
        "status": {
            "type": "attribute",
            "description": "设置校验状态",
            "values": ["'error'", "'warning'"]
        },
        "validateSearch": {
            "type": "attribute",
            "description": "自定义触发验证逻辑",
            "values": ["(text: string, props: MentionsProps) => void"]
        },
        "v-model:value": {
            "type": "attribute",
            "description": "设置值",
            "values": ["string"]
        },
        "options": {
            "type": "attribute",
            "description": "选项配置",
            "values": ["Options"]
        },
        "option": {
            "type": "attribute",
            "description": "通过 option 插槽，自定义节点",
            "values": ["v-slot:option=\"option\""]
        },
        "blur": {
            "type": "function",
            "description": "移除焦点",
            "values": []
        },
        "change": {
            "type": "method",
            "description": "值改变时触发",
            "values": []
        },
        "focus": {
            "type": "function",
            "description": "获取焦点",
            "values": []
        },
        "search": {
            "type": "method",
            "description": "文本框值变化时回调",
            "values": []
        },
        "select": {
            "type": "method",
            "description": "选择选项时触发",
            "values": []
        }
    },
    "a-radio": {
        "blur()": {
            "type": "attribute",
            "description": "移除焦点",
            "values": []
        },
        "focus()": {
            "type": "attribute",
            "description": "获取焦点",
            "values": []
        }
    },
    "a-radio-button": {
        "autofocus": {
            "type": "attribute",
            "description": "自动获取焦点",
            "values": ["boolean"]
        },
        "v-model:checked": {
            "type": "attribute",
            "description": "指定当前是否选中",
            "values": ["boolean"]
        },
        "disabled": {
            "type": "attribute",
            "description": "禁用 Radio",
            "values": ["boolean"]
        },
        "value": {
            "type": "attribute",
            "description": "根据 value 进行比较，判断是否选中",
            "values": ["any"]
        }
    },
    "a-radio-group": {
        "buttonStyle": {
            "type": "attribute",
            "description": "RadioButton 的风格样式，目前有描边和填色两种风格",
            "values": ["outline", "solid"]
        },
        "disabled": {
            "type": "attribute",
            "description": "禁选所有子单选器",
            "values": ["boolean"]
        },
        "name": {
            "type": "attribute",
            "description": "RadioGroup 下所有 input[type=\"radio\"] 的 name 属性",
            "values": ["string"]
        },
        "options": {
            "type": "attribute",
            "description": "以配置形式设置子元素",
            "values": ["string[]", "number[]", "Array<{ label: string value: string disabled?: boolean }>"]
        },
        "optionType": {
            "type": "attribute",
            "description": "用于设置 Radio options 类型",
            "values": ["default", "button"]
        },
        "size": {
            "type": "attribute",
            "description": "大小，只对按钮样式生效",
            "values": ["large", "default", "small"]
        },
        "v-model:value": {
            "type": "attribute",
            "description": "用于设置当前选中的值",
            "values": ["any"]
        },
        "change": {
            "type": "method",
            "description": "选项变化时的回调函数",
            "values": []
        }
    },
    "a-rate": {
        "allowClear": {
            "type": "attribute",
            "description": "是否允许再次点击后清除",
            "values": ["boolean"]
        },
        "allowHalf": {
            "type": "attribute",
            "description": "是否允许半选",
            "values": ["boolean"]
        },
        "autofocus": {
            "type": "attribute",
            "description": "自动获取焦点",
            "values": ["boolean"]
        },
        "character": {
            "type": "attribute",
            "description": "自定义字符",
            "values": ["string", "slot"]
        },
        "count": {
            "type": "attribute",
            "description": "star 总数",
            "values": ["number"]
        },
        "disabled": {
            "type": "attribute",
            "description": "只读，无法进行交互",
            "values": ["boolean"]
        },
        "tooltips": {
            "type": "attribute",
            "description": "自定义每项的提示信息",
            "values": ["string[]"]
        },
        "v-model:value": {
            "type": "attribute",
            "description": "当前数，受控值",
            "values": ["number"]
        },
        "blur": {
            "type": "function",
            "description": "移除焦点",
            "values": []
        },
        "change": {
            "type": "method",
            "description": "选择时的回调",
            "values": []
        },
        "focus": {
            "type": "function",
            "description": "获取焦点",
            "values": []
        },
        "hoverChange": {
            "type": "method",
            "description": "鼠标经过时数值变化的回调",
            "values": []
        },
        "keydown": {
            "type": "method",
            "description": "按键回调",
            "values": []
        }
    },
    "a-select": {
        "blur()": {
            "type": "attribute",
            "description": "取消焦点",
            "values": []
        },
        "focus()": {
            "type": "attribute",
            "description": "获取焦点",
            "values": []
        },
        "class": {
            "type": "attribute",
            "description": "Option 器类名",
            "values": ["string"]
        },
        "disabled": {
            "type": "attribute",
            "description": "是否禁用",
            "values": ["boolean"]
        },
        "key": {
            "type": "attribute",
            "description": "",
            "values": ["string"]
        },
        "title": {
            "type": "attribute",
            "description": "选中该 Option 后，Select 的 title",
            "values": ["string"]
        },
        "value": {
            "type": "attribute",
            "description": "默认根据此属性值进行筛选",
            "values": ["string|number"]
        },
        "label": {
            "type": "attribute",
            "description": "组名",
            "values": ["string|function(h)|slot"]
        }
    },
    "a-slider": {
        "autofocus": {
            "type": "attribute",
            "description": "自动获取焦点",
            "values": ["boolean"]
        },
        "disabled": {
            "type": "attribute",
            "description": "值为 true 时，滑块为禁用状态",
            "values": ["boolean"]
        },
        "dots": {
            "type": "attribute",
            "description": "是否只能拖拽到刻度上",
            "values": ["boolean"]
        },
        "included": {
            "type": "attribute",
            "description": "marks 不为空对象时有效，值为 true 时表示值为包含关系，false 表示并列",
            "values": ["boolean"]
        },
        "mark": {
            "type": "attribute",
            "description": "自定义刻度标记",
            "values": ["v-slot:mark"]
        },
        "marks": {
            "type": "attribute",
            "description": "刻度标记，key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标签可以单独设置样式",
            "values": ["object"]
        },
        "max": {
            "type": "attribute",
            "description": "最大值",
            "values": ["number"]
        },
        "min": {
            "type": "attribute",
            "description": "最小值",
            "values": ["number"]
        },
        "range": {
            "type": "attribute",
            "description": "双滑块模式",
            "values": ["boolean"]
        },
        "reverse": {
            "type": "attribute",
            "description": "反向坐标轴",
            "values": ["boolean"]
        },
        "step": {
            "type": "attribute",
            "description": "步长，取值必须大于 0，并且可被 (max - min) 整除。当 marks 不为空对象时，可以设置 step 为 null，此时 Slider 的可选值仅有 marks 标出来的部分。",
            "values": ["number|null"]
        },
        "v-model:value": {
            "type": "attribute",
            "description": "设置当前取值。当 range 为 false 时，使用 number，否则用 [number, number]",
            "values": ["number|number[]"]
        },
        "vertical": {
            "type": "attribute",
            "description": "值为 true 时，Slider 为垂直方向",
            "values": ["Boolean"]
        },
        "tipFormatter": {
            "type": "attribute",
            "description": "Slider 会把当前值传给 tipFormatter，并在 Tooltip 中显示 tipFormatter 的返回值，若为 null，则隐藏 Tooltip。",
            "values": ["Function|null"]
        },
        "tooltipPlacement": {
            "type": "attribute",
            "description": "设置 Tooltip 展示位置。参考 Tooltip。",
            "values": ["string"]
        },
        "tooltipOpen": {
            "type": "attribute",
            "description": "值为true时，Tooltip 将会始终显示；否则始终不显示，哪怕在拖拽及移入时。",
            "values": ["Boolean"]
        },
        "getTooltipPopupContainer": {
            "type": "attribute",
            "description": "Tooltip 渲染父节点，默认渲染到 body 上。",
            "values": ["Function"]
        },
        "change": {
            "type": "method",
            "description": "当 Slider 的值发生改变时，会触发 change 事件，并把改变后的值作为参数传入。",
            "values": []
        },
        "afterChange": {
            "type": "method",
            "description": "与 mouseup 触发时机一致，把当前值作为参数传入。",
            "values": []
        },
        "blur": {
            "type": "function",
            "description": "移除焦点",
            "values": []
        },
        "focus": {
            "type": "function",
            "description": "获取焦点",
            "values": []
        }
    },
    "a-switch": {
        "autofocus": {
            "type": "attribute",
            "description": "组件自动获取焦点",
            "values": ["boolean"]
        },
        "v-model:checked": {
            "type": "attribute",
            "description": "指定当前是否选中",
            "values": ["checkedValue", "unCheckedValue"]
        },
        "checkedChildren": {
            "type": "attribute",
            "description": "选中时的内容",
            "values": ["string|slot"]
        },
        "checkedValue": {
            "type": "attribute",
            "description": "选中时的值",
            "values": ["boolean", "string", "number"]
        },
        "disabled": {
            "type": "attribute",
            "description": "是否禁用",
            "values": ["boolean"]
        },
        "loading": {
            "type": "attribute",
            "description": "加载中的开关",
            "values": ["boolean"]
        },
        "size": {
            "type": "attribute",
            "description": "开关大小，可选值：default small",
            "values": ["string"]
        },
        "unCheckedChildren": {
            "type": "attribute",
            "description": "非选中时的内容",
            "values": ["string|slot"]
        },
        "unCheckedValue": {
            "type": "attribute",
            "description": "非选中时的值",
            "values": ["boolean", "string", "number"]
        },
        "change": {
            "type": "method",
            "description": "变化时回调函数",
            "values": []
        },
        "click": {
            "type": "method",
            "description": "点击时回调函数",
            "values": []
        },
        "blur": {
            "type": "function",
            "description": "移除焦点",
            "values": []
        },
        "focus": {
            "type": "function",
            "description": "获取焦点",
            "values": []
        }
    },
    "a-time-picker": {
        "allowClear": {
            "type": "attribute",
            "description": "是否展示清除按钮",
            "values": ["boolean"]
        },
        "autofocus": {
            "type": "attribute",
            "description": "自动获取焦点",
            "values": ["boolean"]
        },
        "bordered": {
            "type": "attribute",
            "description": "是否有边框",
            "values": ["boolean"]
        },
        "clearIcon": {
            "type": "attribute",
            "description": "自定义的清除图标",
            "values": ["v-slot:clearIcon"]
        },
        "clearText": {
            "type": "attribute",
            "description": "清除按钮的提示文案",
            "values": ["string"]
        },
        "disabled": {
            "type": "attribute",
            "description": "禁用全部操作",
            "values": ["boolean"]
        },
        "disabledTime": {
            "type": "attribute",
            "description": "不可选择的时间",
            "values": ["DisabledTime"]
        },
        "format": {
            "type": "attribute",
            "description": "展示的时间格式",
            "values": ["string"]
        },
        "getPopupContainer": {
            "type": "attribute",
            "description": "定义浮层的容器，默认为 body 上新建 div",
            "values": ["function(trigger)"]
        },
        "hideDisabledOptions": {
            "type": "attribute",
            "description": "隐藏禁止选择的选项",
            "values": ["boolean"]
        },
        "hourStep": {
            "type": "attribute",
            "description": "小时选项间隔",
            "values": ["number"]
        },
        "inputReadOnly": {
            "type": "attribute",
            "description": "设置输入框为只读（避免在移动设备上打开虚拟键盘）",
            "values": ["boolean"]
        },
        "minuteStep": {
            "type": "attribute",
            "description": "分钟选项间隔",
            "values": ["number"]
        },
        "v-model:open": {
            "type": "attribute",
            "description": "面板是否打开",
            "values": ["boolean"]
        },
        "placeholder": {
            "type": "attribute",
            "description": "没有值的时候显示的内容",
            "values": ["string", "[string, string]"]
        },
        "placement": {
            "type": "attribute",
            "description": "选择框弹出的位置",
            "values": ["bottomLeft bottomRight topLeft topRight"]
        },
        "popupClassName": {
            "type": "attribute",
            "description": "弹出层类名",
            "values": ["string"]
        },
        "popupStyle": {
            "type": "attribute",
            "description": "弹出层样式对象",
            "values": ["object"]
        },
        "renderExtraFooter": {
            "type": "attribute",
            "description": "选择框底部显示自定义的内容",
            "values": ["v-slot:renderExtraFooter"]
        },
        "secondStep": {
            "type": "attribute",
            "description": "秒选项间隔",
            "values": ["number"]
        },
        "showNow": {
            "type": "attribute",
            "description": "面板是否显示“此刻”按钮",
            "values": ["boolean"]
        },
        "status": {
            "type": "attribute",
            "description": "设置校验状态",
            "values": ["'error'", "'warning'"]
        },
        "suffixIcon": {
            "type": "attribute",
            "description": "自定义的选择框后缀图标",
            "values": ["v-slot:suffixIcon"]
        },
        "useHours": {
            "type": "attribute",
            "description": "使用 12 小时制，为 true 时 format 默认为 h:mm:ss a",
            "values": ["boolean"]
        },
        "v-model:value": {
            "type": "attribute",
            "description": "当前时间",
            "values": ["dayjs"]
        },
        "valueFormat": {
            "type": "attribute",
            "description": "可选，绑定值的格式，对 value、defaultValue 起作用。不指定则绑定值为 dayjs 对象",
            "values": ["string，具体格式"]
        },
        "change": {
            "type": "method",
            "description": "时间发生变化的回调",
            "values": []
        },
        "openChange": {
            "type": "method",
            "description": "面板打开/关闭时的回调",
            "values": []
        },
        "blur": {
            "type": "function",
            "description": "移除焦点",
            "values": []
        },
        "focus": {
            "type": "function",
            "description": "获取焦点",
            "values": []
        }
    },
    "a-time-range-picker": {
        "order": {
            "type": "attribute",
            "description": "始末时间是否自动排序",
            "values": ["boolean"]
        },
        "disabledTime": {
            "type": "attribute",
            "description": "不可选择的时间",
            "values": ["RangeDisabledTime"]
        }
    },
    "a-transfer": {
        "dataSource": {
            "type": "attribute",
            "description": "数据源，其中的数据将会被渲染到左边一栏中，targetKeys 中指定的除外。",
            "values": ["[{key: string.isRequired,title: string.isRequired,description: string,disabled: bool}][]"]
        },
        "disabled": {
            "type": "attribute",
            "description": "是否禁用列表",
            "values": ["boolean"]
        },
        "filterOption": {
            "type": "attribute",
            "description": "接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false。",
            "values": ["(inputValue, option): boolean"]
        },
        "footer": {
            "type": "attribute",
            "description": "可以设置为一个 作用域插槽",
            "values": ["slot=\"footer\" slot-scope=\"props\""]
        },
        "listStyle": {
            "type": "attribute",
            "description": "两个穿梭框的自定义样式",
            "values": ["CSSProperties"]
        },
        "locale": {
            "type": "attribute",
            "description": "各种语言",
            "values": ["object"]
        },
        "oneWay": {
            "type": "attribute",
            "description": "展示为单向样式",
            "values": ["boolean"]
        },
        "operations": {
            "type": "attribute",
            "description": "操作文案集合，顺序从上至下",
            "values": ["string[]"]
        },
        "operationStyle": {
            "type": "attribute",
            "description": "操作栏的自定义样式",
            "values": ["CSSProperties"]
        },
        "pagination": {
            "type": "attribute",
            "description": "使用分页样式，自定义渲染列表下无效",
            "values": ["boolean", "{ pageSize: number, simple: boolean, showSizeChanger?: boolean, showLessItems?: boolean }"]
        },
        "render": {
            "type": "attribute",
            "description": "每行数据渲染函数，该函数的入参为 dataSource 中的项，返回值为 element。或者返回一个普通对象，其中 label 字段为 element，value 字段为 title",
            "values": ["Function(record)| slot"]
        },
        "selectAllLabels": {
            "type": "attribute",
            "description": "自定义顶部多选框标题的集合",
            "values": ["VueNode", "((info: { selectedCount: number; totalCount: number }) => VueNode);"]
        },
        "v-model:selectedKeys": {
            "type": "attribute",
            "description": "设置哪些项应该被选中",
            "values": ["string[]"]
        },
        "showSearch": {
            "type": "attribute",
            "description": "是否显示搜索框",
            "values": ["boolean"]
        },
        "showSelectAll": {
            "type": "attribute",
            "description": "是否展示全选勾选框",
            "values": ["boolean"]
        },
        "status": {
            "type": "attribute",
            "description": "设置校验状态",
            "values": ["'error'", "'warning'"]
        },
        "v-model:targetKeys": {
            "type": "attribute",
            "description": "显示在右侧框数据的 key 集合",
            "values": ["string[]"]
        },
        "titles": {
            "type": "attribute",
            "description": "标题集合，顺序从左至右",
            "values": ["string[]"]
        },
        "change": {
            "type": "method",
            "description": "选项在两栏之间转移时的回调函数",
            "values": []
        },
        "scroll": {
            "type": "method",
            "description": "选项列表滚动时的回调函数",
            "values": []
        },
        "search": {
            "type": "method",
            "description": "搜索框内容时改变时的回调函数",
            "values": []
        },
        "selectChange": {
            "type": "method",
            "description": "选中项发生改变时的回调函数",
            "values": []
        },
        "direction": {
            "type": "attribute",
            "description": "渲染列表的方向",
            "values": ["'left'", "'right'"]
        },
        "filteredItems": {
            "type": "attribute",
            "description": "过滤后的数据",
            "values": ["TransferItem[]"]
        },
        "itemSelect": {
            "type": "attribute",
            "description": "勾选条目",
            "values": ["(key: string, selected: boolean)"]
        },
        "itemSelectAll": {
            "type": "attribute",
            "description": "勾选一组条目",
            "values": ["(keys: string[], selected: boolean)"]
        },
        "selectedKeys": {
            "type": "attribute",
            "description": "选中的条目",
            "values": ["string[]"]
        }
    },
    "a-tree-select": {
        "allowClear": {
            "type": "attribute",
            "description": "显示清除按钮",
            "values": ["boolean"]
        },
        "defaultValue": {
            "type": "attribute",
            "description": "指定默认选中的条目",
            "values": ["string/string[]"]
        },
        "disabled": {
            "type": "attribute",
            "description": "是否禁用",
            "values": ["boolean"]
        },
        "popupClassName": {
            "type": "attribute",
            "description": "下拉菜单的 className 属性",
            "values": ["string"]
        },
        "dropdownMatchSelectWidth": {
            "type": "attribute",
            "description": "下拉菜单和选择器同宽。默认将设置 min-width，当值小于选择框宽度时会被忽略。false 时会关闭虚拟滚动",
            "values": ["boolean", "number"]
        },
        "dropdownStyle": {
            "type": "attribute",
            "description": "下拉菜单的样式",
            "values": ["object"]
        },
        "fieldNames": {
            "type": "attribute",
            "description": "替换 treeNode 中 label,value,children 字段为 treeData 中对应的字段",
            "values": ["object"]
        },
        "filterTreeNode": {
            "type": "attribute",
            "description": "是否根据输入项进行筛选，默认用 treeNodeFilterProp 的值作为要筛选的 TreeNode 的属性值",
            "values": ["boolean|Function(inputValue: string, treeNode: TreeNode) (函数需要返回 bool 值)"]
        },
        "getPopupContainer": {
            "type": "attribute",
            "description": "菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。",
            "values": ["Function(triggerNode)"]
        },
        "labelInValue": {
            "type": "attribute",
            "description": "是否把每个选项的 label 包装到 value 中，会把 value 类型从 string 变为 {value: string, label: VNode, halfChecked(treeCheckStrictly 时有效): string[] } 的格式",
            "values": ["boolean"]
        },
        "listHeight": {
            "type": "attribute",
            "description": "设置弹窗滚动高度",
            "values": ["number"]
        },
        "loadData": {
            "type": "attribute",
            "description": "异步加载数据",
            "values": ["function(node)"]
        },
        "maxTagCount": {
            "type": "attribute",
            "description": "最多显示多少个 tag",
            "values": ["number"]
        },
        "maxTagPlaceholder": {
            "type": "attribute",
            "description": "隐藏 tag 时显示的内容",
            "values": ["slot/function(omittedValues)"]
        },
        "multiple": {
            "type": "attribute",
            "description": "支持多选（当设置 treeCheckable 时自动变为 true）",
            "values": ["boolean"]
        },
        "notFoundContent": {
            "type": "attribute",
            "description": "当下拉列表为空时显示的内容",
            "values": ["slot"]
        },
        "placeholder": {
            "type": "attribute",
            "description": "选择框默认文字",
            "values": ["string|slot"]
        },
        "placement": {
            "type": "attribute",
            "description": "选择框弹出的位置",
            "values": ["bottomLeft bottomRight topLeft topRight"]
        },
        "replaceFields": {
            "type": "attribute",
            "description": "替换 treeNode 中 label,value,key,children 字段为 treeData 中对应的字段",
            "values": ["object"]
        },
        "searchPlaceholder": {
            "type": "attribute",
            "description": "搜索框默认文字",
            "values": ["string|slot"]
        },
        "v-model:searchValue": {
            "type": "attribute",
            "description": "搜索框的值，可以通过 search 事件获取用户输入",
            "values": ["string"]
        },
        "showCheckedStrategy": {
            "type": "attribute",
            "description": "定义选中项回填的方式。TreeSelect.SHOW_ALL: 显示所有选中节点(包括父节点). TreeSelect.SHOW_PARENT: 只显示父节点(当父节点下所有子节点都选中时). 默认只显示子节点.",
            "values": ["enum{TreeSelect.SHOW_ALL, TreeSelect.SHOW_PARENT, TreeSelect.SHOW_CHILD }"]
        },
        "showSearch": {
            "type": "attribute",
            "description": "在下拉中显示搜索框(仅在单选模式下生效)",
            "values": ["boolean"]
        },
        "size": {
            "type": "attribute",
            "description": "选择框大小，可选 large small",
            "values": ["string"]
        },
        "status": {
            "type": "attribute",
            "description": "设置校验状态",
            "values": ["'error'", "'warning'"]
        },
        "suffixIcon": {
            "type": "attribute",
            "description": "自定义的选择框后缀图标",
            "values": ["VNode", "slot"]
        },
        "tagRender": {
            "type": "attribute",
            "description": "自定义 tag 内容，多选时生效",
            "values": ["slot"]
        },
        "title": {
            "type": "attribute",
            "description": "树节点显示的内容",
            "values": ["string|slot"]
        },
        "treeCheckable": {
            "type": "attribute",
            "description": "显示 checkbox",
            "values": ["boolean"]
        },
        "treeCheckStrictly": {
            "type": "attribute",
            "description": "checkable 状态下节点选择完全受控（父子节点选中状态不再关联），会使得 labelInValue 强制为 true",
            "values": ["boolean"]
        },
        "treeData": {
            "type": "attribute",
            "description": "treeNodes 数据，如果设置则不需要手动构造 TreeNode 节点（value 在整个树范围内唯一）",
            "values": ["array<{value, label, children, [disabled, disableCheckbox, selectable]}>"]
        },
        "treeDataSimpleMode": {
            "type": "attribute",
            "description": "使用简单格式的 treeData，具体设置参考可设置的类型 (此时 treeData 应变为这样的数据结构: [{id:1, pId:0, value:'1', label:\"test1\",...},...], pId 是父节点的 id)",
            "values": ["false|Array<{ id: string, pId: string, rootPId: null }>"]
        },
        "treeDefaultExpandAll": {
            "type": "attribute",
            "description": "默认展开所有树节点",
            "values": ["boolean"]
        },
        "treeDefaultExpandedKeys": {
            "type": "attribute",
            "description": "默认展开的树节点",
            "values": ["string[]", "number[]"]
        },
        "v-model:treeExpandedKeys": {
            "type": "attribute",
            "description": "设置展开的树节点",
            "values": ["string[]", "number[]"]
        },
        "treeIcon": {
            "type": "attribute",
            "description": "是否展示 TreeNode title 前的图标，没有默认样式，如设置为 true，需要自行定义图标相关样式",
            "values": ["boolean"]
        },
        "treeLine": {
            "type": "attribute",
            "description": "是否展示线条样式，请参考 Tree - showLine",
            "values": ["boolean", "object"]
        },
        "treeLoadedKeys": {
            "type": "attribute",
            "description": "（受控）已经加载的节点，需要配合 loadData 使用",
            "values": ["string[]"]
        },
        "treeNodeFilterProp": {
            "type": "attribute",
            "description": "输入项过滤对应的 treeNode 属性",
            "values": ["string"]
        },
        "treeNodeLabelProp": {
            "type": "attribute",
            "description": "作为显示的 prop 设置",
            "values": ["string"]
        },
        "v-model:value": {
            "type": "attribute",
            "description": "指定当前选中的条目",
            "values": ["string/string[]"]
        },
        "virtual": {
            "type": "attribute",
            "description": "设置 false 时关闭虚拟滚动",
            "values": ["boolean"]
        },
        "change": {
            "type": "method",
            "description": "选中树节点时调用此函数",
            "values": []
        },
        "dropdownVisibleChange": {
            "type": "method",
            "description": "展开下拉菜单的回调",
            "values": []
        },
        "search": {
            "type": "method",
            "description": "文本框值变化时回调",
            "values": []
        },
        "select": {
            "type": "method",
            "description": "被选中时调用",
            "values": []
        },
        "treeExpand": {
            "type": "method",
            "description": "展开节点时调用",
            "values": []
        },
        "blur": {
            "type": "function",
            "description": "移除焦点",
            "values": []
        },
        "focus": {
            "type": "function",
            "description": "获取焦点",
            "values": []
        },
        "checkable": {
            "type": "attribute",
            "description": "当树为 checkable 时，设置独立节点是否展示 Checkbox",
            "values": ["boolean"]
        },
        "disableCheckbox": {
            "type": "attribute",
            "description": "禁掉 checkbox",
            "values": ["boolean"]
        },
        "isLeaf": {
            "type": "attribute",
            "description": "是否是叶子节点",
            "values": ["boolean"]
        },
        "key": {
            "type": "attribute",
            "description": "此项必须设置（其值在整个树范围内唯一）",
            "values": ["string", "number"]
        },
        "selectable": {
            "type": "attribute",
            "description": "是否可选",
            "values": ["boolean"]
        },
        "value": {
            "type": "attribute",
            "description": "默认根据此属性值进行筛选（其值在整个树范围内唯一）",
            "values": ["string"]
        }
    },
    "a-upload": {
        "accept": {
            "type": "attribute",
            "description": "接受上传的文件类型, 详见 input accept Attribute",
            "values": ["string"]
        },
        "action": {
            "type": "attribute",
            "description": "上传的地址",
            "values": ["string|(file) => Promise"]
        },
        "beforeUpload": {
            "type": "attribute",
            "description": "上传文件之前的钩子，参数为上传的文件，若返回 false 则停止上传。支持返回一个 Promise 对象，Promise 对象 reject 时则停止上传，resolve 时开始上传（ resolve 传入 File 或 Blob 对象则上传 resolve 传入对象）。",
            "values": ["(file, fileList) => boolean", "Promise"]
        },
        "customRequest": {
            "type": "attribute",
            "description": "通过覆盖默认的上传行为，可以自定义自己的上传实现",
            "values": ["function"]
        },
        "data": {
            "type": "attribute",
            "description": "上传所需参数或返回上传参数的方法",
            "values": ["object|(file) => object"]
        },
        "directory": {
            "type": "attribute",
            "description": "支持上传文件夹（caniuse）",
            "values": ["boolean"]
        },
        "disabled": {
            "type": "attribute",
            "description": "是否禁用",
            "values": ["boolean"]
        },
        "downloadIcon": {
            "type": "attribute",
            "description": "自定义下载 icon",
            "values": ["v-slot:iconRender=\"{file: UploadFile}\""]
        },
        "fileList": {
            "type": "attribute",
            "description": "已经上传的文件列表（受控）",
            "values": ["object[]"]
        },
        "headers": {
            "type": "attribute",
            "description": "设置上传的请求头部，IE10 以上有效",
            "values": ["object"]
        },
        "iconRender": {
            "type": "attribute",
            "description": "自定义显示 icon",
            "values": ["v-slot:iconRender=\"{file: UploadFile, listType?: UploadListType}\""]
        },
        "isImageUrl": {
            "type": "attribute",
            "description": "自定义缩略图是否使用 <img /> 标签进行显示",
            "values": ["(file: UploadFile) => boolean"]
        },
        "itemRender": {
            "type": "attribute",
            "description": "自定义上传列表项",
            "values": ["v-slot:itemRender=\"{originNode: VNode, file: UploadFile, fileList: object[], actions: { download: function, preview: function, remove: function }\""]
        },
        "listType": {
            "type": "attribute",
            "description": "上传列表的内建样式，支持三种基本样式 text, picture 和 picture-card",
            "values": ["string"]
        },
        "maxCount": {
            "type": "attribute",
            "description": "限制上传数量。当为 1 时，始终用最新上传的文件代替当前文件",
            "values": ["number"]
        },
        "method": {
            "type": "attribute",
            "description": "上传请求的 http method",
            "values": ["string"]
        },
        "multiple": {
            "type": "attribute",
            "description": "是否支持多选文件，ie10+ 支持。开启后按住 ctrl 可选择多个文件。",
            "values": ["boolean"]
        },
        "name": {
            "type": "attribute",
            "description": "发到后台的文件参数名",
            "values": ["string"]
        },
        "openFileDialogOnClick": {
            "type": "attribute",
            "description": "点击打开文件对话框",
            "values": ["boolean"]
        },
        "previewFile": {
            "type": "attribute",
            "description": "自定义文件预览逻辑",
            "values": ["(file: File", "Blob) => Promise<dataURL: string>"]
        },
        "previewIcon": {
            "type": "attribute",
            "description": "自定义预览 icon",
            "values": ["v-slot:iconRender=\"{file: UploadFile}\""]
        },
        "progress": {
            "type": "attribute",
            "description": "自定义进度条样式",
            "values": ["ProgressProps（仅支持 type=\"line\"）"]
        },
        "removeIcon": {
            "type": "attribute",
            "description": "自定义删除 icon",
            "values": ["v-slot:iconRender=\"{file: UploadFile}\""]
        },
        "showUploadList": {
            "type": "attribute",
            "description": "是否展示 uploadList, 可设为一个对象，用于单独设定 showPreviewIcon, showRemoveIcon 和 showDownloadIcon",
            "values": ["boolean", "{ showPreviewIcon?: boolean, showRemoveIcon?: boolean, showDownloadIcon?: boolean }"]
        },
        "supportServerRender": {
            "type": "attribute",
            "description": "服务端渲染时需要打开这个",
            "values": ["boolean"]
        },
        "withCredentials": {
            "type": "attribute",
            "description": "上传请求时是否携带 cookie",
            "values": ["boolean"]
        },
        "change": {
            "type": "method",
            "description": "上传文件改变时的状态，详见 change",
            "values": []
        },
        "download": {
            "type": "method",
            "description": "点击下载文件时的回调，如果没有指定，则默认跳转到文件 url 对应的标签页。",
            "values": []
        },
        "drop": {
            "type": "method",
            "description": "当文件被拖入上传区域时执行的回调功能",
            "values": []
        },
        "preview": {
            "type": "method",
            "description": "点击文件链接或预览图标时的回调",
            "values": []
        },
        "reject": {
            "type": "method",
            "description": "拖拽文件不符合 accept 类型时的回调",
            "values": []
        },
        "remove": {
            "type": "method",
            "description": "点击移除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除",
            "values": []
        }
    },
    "a-upload-file": {
        "crossOrigin": {
            "type": "attribute",
            "description": "CORS 属性设置",
            "values": ["'anonymous'", "'use-credentials'", "''"]
        },
        "name": {
            "type": "attribute",
            "description": "文件名",
            "values": ["string"]
        },
        "percent": {
            "type": "attribute",
            "description": "上传进度",
            "values": ["number"]
        },
        "status": {
            "type": "attribute",
            "description": "上传状态，不同状态展示颜色也会有所不同",
            "values": ["error", "success", "done", "uploading", "removed"]
        },
        "thumbUrl": {
            "type": "attribute",
            "description": "缩略图地址",
            "values": ["string"]
        },
        "uid": {
            "type": "attribute",
            "description": "唯一标识符，不设置时会自动生成",
            "values": ["string"]
        },
        "url": {
            "type": "attribute",
            "description": "下载地址",
            "values": ["string"]
        }
    },
    "a-avatar": {
        "alt": {
            "type": "attribute",
            "description": "图像无法显示时的替代文本",
            "values": ["string"]
        },
        "crossOrigin": {
            "type": "attribute",
            "description": "cors 属性设置",
            "values": ["'anonymous'", "'use-credentials'", "''"]
        },
        "draggable": {
            "type": "attribute",
            "description": "图片是否允许拖动",
            "values": ["boolean", "'true'", "'false'"]
        },
        "gap": {
            "type": "attribute",
            "description": "字符类型距离左右两侧边界单位像素",
            "values": ["number"]
        },
        "icon": {
            "type": "attribute",
            "description": "设置头像的图标类型，可设为 Icon 的 type 或 VNode",
            "values": ["VNode", "slot"]
        },
        "loadError": {
            "type": "attribute",
            "description": "图片加载失败的事件，返回 false 会关闭组件默认的 fallback 行为",
            "values": ["() => boolean"]
        },
        "shape": {
            "type": "attribute",
            "description": "指定头像的形状",
            "values": ["circle", "square"]
        },
        "size": {
            "type": "attribute",
            "description": "设置头像的大小",
            "values": ["number", "large", "small", "default", "{ xs: number, sm: number, ...}"]
        },
        "src": {
            "type": "attribute",
            "description": "图片类头像的资源地址",
            "values": ["string"]
        },
        "srcset": {
            "type": "attribute",
            "description": "设置图片类头像响应式资源地址",
            "values": ["string"]
        }
    },
    "a-badge": {
        "color": {
            "type": "attribute",
            "description": "自定义小圆点的颜色",
            "values": ["string"]
        },
        "count": {
            "type": "attribute",
            "description": "展示的数字，大于 overflowCount 时显示为 ${overflowCount}+，为 0 时隐藏",
            "values": ["number", "string", "slot"]
        },
        "dot": {
            "type": "attribute",
            "description": "不展示数字，只有一个小红点",
            "values": ["boolean"]
        },
        "numberStyle": {
            "type": "attribute",
            "description": "设置状态点的样式",
            "values": ["object"]
        },
        "offset": {
            "type": "attribute",
            "description": "设置状态点的位置偏移，格式为 [x, y]",
            "values": ["[number|string, number|string]"]
        },
        "overflowCount": {
            "type": "attribute",
            "description": "展示封顶的数字值",
            "values": ["number"]
        },
        "showZero": {
            "type": "attribute",
            "description": "当数值为 0 时，是否展示 Badge",
            "values": ["boolean"]
        },
        "status": {
            "type": "attribute",
            "description": "设置 Badge 为状态点",
            "values": ["Enum{ 'success', 'processing, 'default', 'error', 'warning' }"]
        },
        "text": {
            "type": "attribute",
            "description": "在设置了 status 的前提下有效，设置状态点的文本",
            "values": ["string"]
        },
        "title": {
            "type": "attribute",
            "description": "设置鼠标放在状态点上时显示的文字",
            "values": ["string"]
        }
    },
    "a-calendar": {
        "dateCellRender": {
            "type": "attribute",
            "description": "作用域插槽，用来自定义渲染日期单元格，返回内容会被追加到单元格,",
            "values": ["v-slot:dateCellRender=\"{current: dayjs}\""]
        },
        "dateFullCellRender": {
            "type": "attribute",
            "description": "作用域插槽，自定义渲染日期单元格，返回内容覆盖单元格",
            "values": ["v-slot:dateFullCellRender=\"{current: dayjs}\""]
        },
        "disabledDate": {
            "type": "attribute",
            "description": "不可选择的日期",
            "values": ["(currentDate: dayjs) => boolean"]
        },
        "fullscreen": {
            "type": "attribute",
            "description": "是否全屏显示",
            "values": ["boolean"]
        },
        "headerRender": {
            "type": "attribute",
            "description": "自定义头部内容",
            "values": ["v-slot:headerRender=\"{value: dayjs, type: string, onChange: f(), onTypeChange: f()}\""]
        },
        "locale": {
            "type": "attribute",
            "description": "国际化配置",
            "values": ["object"]
        },
        "mode": {
            "type": "attribute",
            "description": "初始模式，month/year",
            "values": ["string"]
        },
        "monthCellRender": {
            "type": "attribute",
            "description": "作用域插槽，自定义渲染月单元格，返回内容会被追加到单元格",
            "values": ["v-slot:monthCellRender=\"{current: dayjs}\""]
        },
        "monthFullCellRender": {
            "type": "attribute",
            "description": "作用域插槽，自定义渲染月单元格，返回内容覆盖单元格",
            "values": ["v-slot:monthFullCellRender=\"{current: dayjs}\""]
        },
        "validRange": {
            "type": "attribute",
            "description": "设置可以显示的日期",
            "values": ["[dayjs, dayjs]"]
        },
        "v-model:value": {
            "type": "attribute",
            "description": "展示日期",
            "values": ["dayjs"]
        },
        "valueFormat": {
            "type": "attribute",
            "description": "可选，绑定值的格式，对 value、defaultValue 起作用。不指定则绑定值为 dayjs 对象",
            "values": ["string，具体格式"]
        },
        "change": {
            "type": "method",
            "description": "日期变化时的回调, 面板变化有可能导致日期变化",
            "values": []
        },
        "panelChange": {
            "type": "method",
            "description": "日期面板变化回调",
            "values": []
        },
        "select": {
            "type": "method",
            "description": "选择日期回调，包含来源信息",
            "values": []
        }
    },
    "a-card": {
        "activeTabKey": {
            "type": "attribute",
            "description": "当前激活页签的 key",
            "values": ["string"]
        },
        "bodyStyle": {
            "type": "attribute",
            "description": "内容区域自定义样式",
            "values": ["object"]
        },
        "bordered": {
            "type": "attribute",
            "description": "是否有边框",
            "values": ["boolean"]
        },
        "defaultActiveTabKey": {
            "type": "attribute",
            "description": "初始化选中页签的 key，如果没有设置 activeTabKey",
            "values": ["string"]
        },
        "extra": {
            "type": "attribute",
            "description": "卡片右上角的操作区域",
            "values": ["string|slot"]
        },
        "headStyle": {
            "type": "attribute",
            "description": "自定义标题区域样式",
            "values": ["object"]
        },
        "hoverable": {
            "type": "attribute",
            "description": "鼠标移过时可浮起",
            "values": ["boolean"]
        },
        "loading": {
            "type": "attribute",
            "description": "当卡片内容还在加载中时，可以用 loading 展示一个占位",
            "values": ["boolean"]
        },
        "size": {
            "type": "attribute",
            "description": "card 的尺寸",
            "values": ["default", "small"]
        },
        "tabList": {
            "type": "attribute",
            "description": "页签标题列表, 可以通过 customTab(v3.0) 插槽自定义 tab",
            "values": ["Array<{key: string, tab: any}>"]
        },
        "title": {
            "type": "attribute",
            "description": "卡片标题",
            "values": ["string|slot"]
        },
        "type": {
            "type": "attribute",
            "description": "卡片类型，可设置为 inner 或 不设置",
            "values": ["string"]
        },
        "tabChange": {
            "type": "method",
            "description": "页签切换的回调",
            "values": []
        }
    },
    "a-card-grid": {},
    "a-card-meta": {
        "avatar": {
            "type": "attribute",
            "description": "头像/图标",
            "values": ["slot"]
        },
        "description": {
            "type": "attribute",
            "description": "描述内容",
            "values": ["string|slot"]
        },
        "title": {
            "type": "attribute",
            "description": "标题内容",
            "values": ["string|slot"]
        }
    },
    "a-carousel": {
        "autoplay": {
            "type": "attribute",
            "description": "是否自动切换",
            "values": ["boolean"]
        },
        "dotPosition": {
            "type": "attribute",
            "description": "面板指示点位置，可选 top bottom left right",
            "values": ["string"]
        },
        "dots": {
            "type": "attribute",
            "description": "是否显示面板指示点",
            "values": ["boolean"]
        },
        "dotsClass": {
            "type": "attribute",
            "description": "面板指示点类名",
            "values": ["string"]
        },
        "easing": {
            "type": "attribute",
            "description": "动画效果",
            "values": ["string"]
        },
        "effect": {
            "type": "attribute",
            "description": "动画效果函数",
            "values": ["scrollx", "fade"]
        },
        "afterChange": {
            "type": "attribute",
            "description": "切换面板的回调",
            "values": ["function(current)"]
        },
        "beforeChange": {
            "type": "attribute",
            "description": "切换面板的回调",
            "values": ["function(from, to)"]
        },
        "goToslideNumber,dontAnimate": {
            "type": "function",
            "description": "切换到指定面板, dontAnimate = true 时，不使用动画",
            "values": []
        },
        "next": {
            "type": "function",
            "description": "切换到下一面板",
            "values": []
        },
        "prev": {
            "type": "function",
            "description": "切换到上一面板",
            "values": []
        }
    },
    "a-collapse": {
        "accordion": {
            "type": "attribute",
            "description": "手风琴模式",
            "values": ["boolean"]
        },
        "v-model:activeKey": {
            "type": "attribute",
            "description": "当前激活 tab 面板的 key",
            "values": ["string[]", "string  number[]", "number"]
        },
        "bordered": {
            "type": "attribute",
            "description": "带边框风格的折叠面板",
            "values": ["boolean"]
        },
        "collapsible": {
            "type": "attribute",
            "description": "所有子面板是否可折叠或指定可折叠触发区域",
            "values": ["header", "icon", "disabled"]
        },
        "destroyInactivePanel": {
            "type": "attribute",
            "description": "销毁折叠隐藏的面板",
            "values": ["boolean"]
        },
        "expandIcon": {
            "type": "attribute",
            "description": "自定义切换图标",
            "values": ["Function(props):VNode", "slot=\"expandIcon\" slot-scope=\"props\"|#expandIcon=\"props\""]
        },
        "expandIconPosition": {
            "type": "attribute",
            "description": "设置图标位置",
            "values": ["start", "end"]
        },
        "ghost": {
            "type": "attribute",
            "description": "使折叠面板透明且无边框",
            "values": ["boolean"]
        },
        "change": {
            "type": "method",
            "description": "切换面板的回调",
            "values": []
        }
    },
    "a-collapse-panel": {
        "collapsible": {
            "type": "attribute",
            "description": "是否可折叠或指定可折叠触发区域",
            "values": ["header", "disabled"]
        },
        "extra": {
            "type": "attribute",
            "description": "自定义渲染每个面板右上角的内容",
            "values": ["VNode", "slot"]
        },
        "forceRender": {
            "type": "attribute",
            "description": "被隐藏时是否渲染 DOM 结构",
            "values": ["boolean"]
        },
        "header": {
            "type": "attribute",
            "description": "面板头内容",
            "values": ["string|slot"]
        },
        "key": {
            "type": "attribute",
            "description": "对应 activeKey",
            "values": ["string", "number"]
        },
        "showArrow": {
            "type": "attribute",
            "description": "是否展示当前面板上的箭头",
            "values": ["boolean"]
        }
    },
    "a-comment": {
        "actions": {
            "type": "attribute",
            "description": "在评论内容下面呈现的操作项列表",
            "values": ["Array|slot"]
        },
        "author": {
            "type": "attribute",
            "description": "要显示为注释作者的元素",
            "values": ["string|slot"]
        },
        "avatar": {
            "type": "attribute",
            "description": "要显示为评论头像的元素 - 通常是 antd Avatar 或者 src",
            "values": ["string|slot"]
        },
        "content": {
            "type": "attribute",
            "description": "评论的主要内容",
            "values": ["string|slot"]
        },
        "datetime": {
            "type": "attribute",
            "description": "展示时间描述",
            "values": ["string|slot"]
        }
    },
    "a-descriptions": {
        "bordered": {
            "type": "attribute",
            "description": "是否展示边框",
            "values": ["boolean"]
        },
        "colon": {
            "type": "attribute",
            "description": "配置 Descriptions.Item 的 colon 的默认值",
            "values": ["boolean"]
        },
        "column": {
            "type": "attribute",
            "description": "一行的 DescriptionItems 数量，可以写成像素值或支持响应式的对象写法 { xs: 8, sm: 16, md: 24}",
            "values": ["number"]
        },
        "contentStyle": {
            "type": "attribute",
            "description": "自定义内容样式",
            "values": ["CSSProperties"]
        },
        "extra": {
            "type": "attribute",
            "description": "描述列表的操作区域，显示在右上方",
            "values": ["string", "VNode", "slot"]
        },
        "labelStyle": {
            "type": "attribute",
            "description": "自定义标签样式",
            "values": ["CSSProperties"]
        },
        "layout": {
            "type": "attribute",
            "description": "描述布局",
            "values": ["horizontal", "vertical"]
        },
        "size": {
            "type": "attribute",
            "description": "设置列表的大小。可以设置为 middle 、small, 或不填（只有设置 bordered={true} 生效）",
            "values": ["default", "middle", "small"]
        },
        "title": {
            "type": "attribute",
            "description": "描述列表的标题，显示在最顶部",
            "values": ["string", "VNode", "slot"]
        },
        "label": {
            "type": "attribute",
            "description": "内容的描述",
            "values": ["string", "VNode", "slot"]
        },
        "span": {
            "type": "attribute",
            "description": "包含列的数量",
            "values": ["number"]
        }
    },
    "a-empty": {
        "description": {
            "type": "attribute",
            "description": "自定义描述内容",
            "values": ["string", "v-slot"]
        },
        "image": {
            "type": "attribute",
            "description": "设置显示图片，为 string 时表示自定义图片地址",
            "values": ["string", "v-slot"]
        },
        "imageStyle": {
            "type": "attribute",
            "description": "图片样式",
            "values": ["CSSProperties"]
        }
    },
    "a-image": {
        "alt": {
            "type": "attribute",
            "description": "图像描述",
            "values": ["string"]
        },
        "fallback": {
            "type": "attribute",
            "description": "加载失败容错地址",
            "values": ["string"]
        },
        "height": {
            "type": "attribute",
            "description": "图像高度",
            "values": ["string", "number"]
        },
        "placeholder": {
            "type": "attribute",
            "description": "加载占位, 为 true 时使用默认占位",
            "values": ["boolean", "slot"]
        },
        "preview": {
            "type": "attribute",
            "description": "预览参数，为 false 时禁用",
            "values": ["boolean", "previewType"]
        },
        "src": {
            "type": "attribute",
            "description": "图片地址",
            "values": ["string"]
        },
        "previewMask": {
            "type": "attribute",
            "description": "自定义 mask",
            "values": ["false", "function", "slot"]
        },
        "width": {
            "type": "attribute",
            "description": "图像宽度",
            "values": ["string", "number"]
        },
        "error": {
            "type": "method",
            "description": "加载错误回调",
            "values": []
        }
    },
    "a-list": {
        "bordered": {
            "type": "attribute",
            "description": "是否展示边框",
            "values": ["boolean"]
        },
        "dataSource": {
            "type": "attribute",
            "description": "列表数据源",
            "values": ["any[]"]
        },
        "footer": {
            "type": "attribute",
            "description": "列表底部",
            "values": ["string|slot"]
        },
        "grid": {
            "type": "attribute",
            "description": "列表栅格配置",
            "values": ["object"]
        },
        "header": {
            "type": "attribute",
            "description": "列表头部",
            "values": ["string|slot"]
        },
        "itemLayout": {
            "type": "attribute",
            "description": "设置 List.Item 布局, 设置成 vertical 则竖直样式显示, 默认横排",
            "values": ["string"]
        },
        "loading": {
            "type": "attribute",
            "description": "当卡片内容还在加载中时，可以用 loading 展示一个占位",
            "values": ["boolean|object"]
        },
        "loadMore": {
            "type": "attribute",
            "description": "加载更多",
            "values": ["string|slot"]
        },
        "locale": {
            "type": "attribute",
            "description": "默认文案设置，目前包括空数据文案",
            "values": ["object"]
        },
        "pagination": {
            "type": "attribute",
            "description": "对应的 pagination 配置, 设置 false 不显示",
            "values": ["boolean|object"]
        },
        "renderItem": {
            "type": "attribute",
            "description": "自定义Item函数，也可使用 #renderItem=\"{item, index}\"",
            "values": ["({item, index}) => vNode"]
        },
        "rowKey": {
            "type": "attribute",
            "description": "各项 key 的取值，可以是字符串或一个函数",
            "values": ["item => string|number"]
        },
        "size": {
            "type": "attribute",
            "description": "list 的尺寸",
            "values": ["default", "middle", "small"]
        },
        "split": {
            "type": "attribute",
            "description": "是否展示分割线",
            "values": ["boolean"]
        }
    },
    "a-list-item": {
        "actions": {
            "type": "attribute",
            "description": "列表操作组，根据 itemLayout 的不同, 位置在卡片底部或者最右侧",
            "values": ["vNode[]", "slot"]
        },
        "extra": {
            "type": "attribute",
            "description": "额外内容, 通常用在 itemLayout 为 vertical 的情况下, 展示右侧内容; horizontal 展示在列表元素最右侧",
            "values": ["string|slot"]
        }
    },
    "a-list-item-meta": {
        "avatar": {
            "type": "attribute",
            "description": "列表元素的图标",
            "values": ["slot"]
        },
        "description": {
            "type": "attribute",
            "description": "列表元素的描述内容",
            "values": ["string|slot"]
        },
        "title": {
            "type": "attribute",
            "description": "列表元素的标题",
            "values": ["string|slot"]
        }
    },
    "a-popover": {
        "content": {
            "type": "attribute",
            "description": "卡片内容",
            "values": ["string|slot|VNode"]
        },
        "title": {
            "type": "attribute",
            "description": "卡片标题",
            "values": ["string|slot|VNode"]
        }
    },
    "a-qrcode": {
        "value": {
            "type": "attribute",
            "description": "扫描后的地址",
            "values": ["string"]
        },
        "type": {
            "type": "attribute",
            "description": "渲染类型",
            "values": ["'canvas'", "'svg'"]
        },
        "icon": {
            "type": "attribute",
            "description": "二维码中图片的地址（目前只支持图片地址）",
            "values": ["string"]
        },
        "size": {
            "type": "attribute",
            "description": "二维码大小",
            "values": ["number"]
        },
        "iconSize": {
            "type": "attribute",
            "description": "二维码中图片的大小",
            "values": ["number"]
        },
        "color": {
            "type": "attribute",
            "description": "二维码颜色",
            "values": ["string"]
        },
        "bgColor": {
            "type": "attribute",
            "description": "二维码背景颜色",
            "values": ["string"]
        },
        "bordered": {
            "type": "attribute",
            "description": "是否有边框",
            "values": ["boolean"]
        },
        "errorLevel": {
            "type": "attribute",
            "description": "二维码纠错等级",
            "values": ["'L'", "'M'", "'Q'", "'H'"]
        },
        "status": {
            "type": "attribute",
            "description": "二维码状态",
            "values": ["active", "expired", "loading", "scanned"]
        },
        "refresh": {
            "type": "method",
            "description": "点击\"点击刷新\"的回调",
            "values": []
        }
    },
    "a-segmented": {
        "block": {
            "type": "attribute",
            "description": "将宽度调整为父元素宽度的选项",
            "values": ["boolean"]
        },
        "disabled": {
            "type": "attribute",
            "description": "是否禁用",
            "values": ["boolean"]
        },
        "options": {
            "type": "attribute",
            "description": "数据化配置选项内容",
            "values": ["string[]", "number[]", "SegmentedOption[]"]
        },
        "size": {
            "type": "attribute",
            "description": "控件尺寸",
            "values": ["large", "middle", "small"]
        },
        "value": {
            "type": "attribute",
            "description": "当前选中的值",
            "values": ["string", "number"]
        },
        "label": {
            "type": "attribute",
            "description": "使用插槽自定义 label",
            "values": ["v-slot:label=\"SegmentedBaseOption\""]
        },
        "change": {
            "type": "method",
            "description": "选项变化时的回调函数",
            "values": []
        }
    },
    "a-statistic": {
        "decimalSeparator": {
            "type": "attribute",
            "description": "设置小数点",
            "values": ["string"]
        },
        "formatter": {
            "type": "attribute",
            "description": "自定义数值展示",
            "values": ["v-slot", "({value}) => VNode"]
        },
        "groupSeparator": {
            "type": "attribute",
            "description": "设置千分位标识符",
            "values": ["string"]
        },
        "precision": {
            "type": "attribute",
            "description": "数值精度",
            "values": ["number"]
        },
        "prefix": {
            "type": "attribute",
            "description": "设置数值的前缀",
            "values": ["string", "v-slot"]
        },
        "suffix": {
            "type": "attribute",
            "description": "设置数值的后缀",
            "values": ["string", "v-slot"]
        },
        "title": {
            "type": "attribute",
            "description": "数值的标题",
            "values": ["string", "v-slot"]
        },
        "value": {
            "type": "attribute",
            "description": "数值内容",
            "values": ["string", "number"]
        },
        "valueStyle": {
            "type": "attribute",
            "description": "设置数值的样式",
            "values": ["style"]
        }
    },
    "a-statistic-countdown": {
        "format": {
            "type": "attribute",
            "description": "格式化倒计时展示，参考 dayjs",
            "values": ["string"]
        },
        "prefix": {
            "type": "attribute",
            "description": "设置数值的前缀",
            "values": ["string", "v-slot"]
        },
        "suffix": {
            "type": "attribute",
            "description": "设置数值的后缀",
            "values": ["string", "v-slot"]
        },
        "title": {
            "type": "attribute",
            "description": "数值的标题",
            "values": ["string", "v-slot"]
        },
        "value": {
            "type": "attribute",
            "description": "数值内容",
            "values": ["number", "dayjs"]
        },
        "valueStyle": {
            "type": "attribute",
            "description": "设置数值的样式",
            "values": ["style"]
        },
        "finish": {
            "type": "method",
            "description": "倒计时完成时触发",
            "values": []
        }
    },
    "a-table": {
        "bodyCell": {
            "type": "attribute",
            "description": "个性化单元格",
            "values": ["v-slot:bodyCell=\"{text, record, index, column}\""]
        },
        "bordered": {
            "type": "attribute",
            "description": "是否展示外边框和列边框",
            "values": ["boolean"]
        },
        "childrenColumnName": {
            "type": "attribute",
            "description": "指定树形结构的列名",
            "values": ["string"]
        },
        "columns": {
            "type": "attribute",
            "description": "表格列的配置描述，具体项见下表",
            "values": ["array"]
        },
        "components": {
            "type": "attribute",
            "description": "覆盖默认的 table 元素",
            "values": ["object"]
        },
        "customFilterDropdown": {
            "type": "attribute",
            "description": "自定义筛选菜单，需要配合 column.customFilterDropdown 使用",
            "values": ["v-slot:customFilterDropdown=\"FilterDropdownProps\""]
        },
        "customFilterIcon": {
            "type": "attribute",
            "description": "自定义筛选图标",
            "values": ["v-slot:customFilterIcon=\"{filtered, column}\""]
        },
        "customHeaderRow": {
            "type": "attribute",
            "description": "设置头部行属性",
            "values": ["Function(columns, index)"]
        },
        "customRow": {
            "type": "attribute",
            "description": "设置行属性",
            "values": ["Function(record, index)"]
        },
        "dataSource": {
            "type": "attribute",
            "description": "数据数组",
            "values": ["object[]"]
        },
        "defaultExpandAllRows": {
            "type": "attribute",
            "description": "初始时，是否展开所有行",
            "values": ["boolean"]
        },
        "defaultExpandedRowKeys": {
            "type": "attribute",
            "description": "默认展开的行",
            "values": ["string[]"]
        },
        "emptyText": {
            "type": "attribute",
            "description": "自定义空数据时的显示内容",
            "values": ["v-slot:emptyText"]
        },
        "v-model:expandedRowKeys": {
            "type": "attribute",
            "description": "展开的行，控制属性",
            "values": ["string[]"]
        },
        "expandedRowRender": {
            "type": "attribute",
            "description": "额外的展开行",
            "values": ["Function(record, index, indent, expanded):VNode", "v-slot:expandedRowRender=\"{record, index, indent, expanded}\""]
        },
        "expandFixed": {
            "type": "attribute",
            "description": "控制展开图标是否固定，可选 true left right",
            "values": ["boolean", "string"]
        },
        "expandColumnTitle": {
            "type": "attribute",
            "description": "自定义展开列表头",
            "values": ["v-slot"]
        },
        "expandIcon": {
            "type": "attribute",
            "description": "自定义展开图标",
            "values": ["Function(props):VNode", "v-slot:expandIcon=\"props\""]
        },
        "expandRowByClick": {
            "type": "attribute",
            "description": "通过点击行来展开子行",
            "values": ["boolean"]
        },
        "footer": {
            "type": "attribute",
            "description": "表格尾部",
            "values": ["Function(currentPageData)|v-slot:footer=\"currentPageData\""]
        },
        "getPopupContainer": {
            "type": "attribute",
            "description": "设置表格内各类浮层的渲染节点，如筛选菜单",
            "values": ["(triggerNode) => HTMLElement"]
        },
        "headerCell": {
            "type": "attribute",
            "description": "个性化头部单元格",
            "values": ["v-slot:headerCell=\"{title, column}\""]
        },
        "indentSize": {
            "type": "attribute",
            "description": "展示树形数据时，每层缩进的宽度，以 px 为单位",
            "values": ["number"]
        },
        "loading": {
            "type": "attribute",
            "description": "页面是否加载中",
            "values": ["boolean|object"]
        },
        "locale": {
            "type": "attribute",
            "description": "默认文案设置，目前包括排序、过滤、空数据文案",
            "values": ["object"]
        },
        "pagination": {
            "type": "attribute",
            "description": "分页器，参考配置项或 pagination文档，设为 false 时不展示和进行分页",
            "values": ["object", "false"]
        },
        "rowClassName": {
            "type": "attribute",
            "description": "表格行的类名",
            "values": ["Function(record, index):string"]
        },
        "rowExpandable": {
            "type": "attribute",
            "description": "设置是否允许行展开",
            "values": ["(record) => boolean"]
        },
        "rowKey": {
            "type": "attribute",
            "description": "表格行 key 的取值，可以是字符串或一个函数",
            "values": ["string|Function(record):string"]
        },
        "rowSelection": {
            "type": "attribute",
            "description": "列表项是否可选择，配置项",
            "values": ["object"]
        },
        "scroll": {
            "type": "attribute",
            "description": "表格是否可滚动，也可以指定滚动区域的宽、高，配置项",
            "values": ["object"]
        },
        "showExpandColumn": {
            "type": "attribute",
            "description": "设置是否展示行展开列",
            "values": ["boolean"]
        },
        "showHeader": {
            "type": "attribute",
            "description": "是否显示表头",
            "values": ["boolean"]
        },
        "showSorterTooltip": {
            "type": "attribute",
            "description": "表头是否显示下一次排序的 tooltip 提示。当参数类型为对象时，将被设置为 Tooltip 的属性",
            "values": ["boolean", "Tooltip props"]
        },
        "size": {
            "type": "attribute",
            "description": "表格大小",
            "values": ["large", "middle", "small"]
        },
        "sortDirections": {
            "type": "attribute",
            "description": "支持的排序方式，取值为 ascend descend",
            "values": ["Array"]
        },
        "sticky": {
            "type": "attribute",
            "description": "设置粘性头部和滚动条",
            "values": ["boolean", "{offsetHeader?: number, offsetScroll?: number, getContainer?: () => HTMLElement}"]
        },
        "summary": {
            "type": "attribute",
            "description": "总结栏",
            "values": ["v-slot:summary"]
        },
        "tableLayout": {
            "type": "attribute",
            "description": "表格元素的 table-layout 属性，设为 fixed 表示内容不会影响列的布局",
            "values": ["'auto'", "'fixed'"]
        },
        "title": {
            "type": "attribute",
            "description": "表格标题",
            "values": ["Function(currentPageData)|v-slot:title=\"currentPageData\""]
        },
        "transformCellText": {
            "type": "attribute",
            "description": "数据渲染前可以再次改变，一般用于空数据的默认配置，可以通过 ConfigProvider 全局统一配置",
            "values": ["Function({ text, column, record, index }) => any，此处的 text 是经过其它定义单元格 api 处理后的数据，有可能是 VNode", "string", "number 类型"]
        },
        "change": {
            "type": "method",
            "description": "分页、排序、筛选变化时触发",
            "values": []
        },
        "expand": {
            "type": "method",
            "description": "点击展开图标时触发",
            "values": []
        },
        "expandedRowsChange": {
            "type": "method",
            "description": "展开的行变化时触发",
            "values": []
        },
        "resizeColumn": {
            "type": "method",
            "description": "拖动列时触发",
            "values": []
        }
    },
    "a-column": {
        "align": {
            "type": "attribute",
            "description": "设置列的对齐方式",
            "values": ["left", "right", "center"]
        },
        "colSpan": {
            "type": "attribute",
            "description": "表头列合并,设置为 0 时，不渲染",
            "values": ["number"]
        },
        "customCell": {
            "type": "attribute",
            "description": "设置单元格属性",
            "values": ["Function(record, rowIndex, column)"]
        },
        "customFilterDropdown": {
            "type": "attribute",
            "description": "启用 v-slot:customFilterDropdown，优先级低于 filterDropdown",
            "values": ["boolean"]
        },
        "customHeaderCell": {
            "type": "attribute",
            "description": "设置头部单元格属性",
            "values": ["Function(column)"]
        },
        "customRender": {
            "type": "attribute",
            "description": "生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引",
            "values": ["Function({text, record, index, column}) {}"]
        },
        "dataIndex": {
            "type": "attribute",
            "description": "列数据在数据项中对应的路径，支持通过数组查询嵌套路径",
            "values": ["string", "string[]"]
        },
        "defaultFilteredValue": {
            "type": "attribute",
            "description": "默认筛选值",
            "values": ["string[]"]
        },
        "filterResetToDefaultFilteredValue": {
            "type": "attribute",
            "description": "点击重置按钮的时候，是否恢复默认筛选值",
            "values": ["boolean"]
        },
        "defaultSortOrder": {
            "type": "attribute",
            "description": "默认排序顺序",
            "values": ["ascend", "descend"]
        },
        "ellipsis": {
            "type": "attribute",
            "description": "超过宽度将自动省略，暂不支持和排序筛选一起使用。设置为 true 或 { showTitle?: boolean } 时，表格布局将变成 tableLayout=\"fixed\"。",
            "values": ["boolean", "{ showTitle?: boolean }"]
        },
        "filterDropdown": {
            "type": "attribute",
            "description": "可以自定义筛选菜单，此函数只负责渲染图层，需要自行编写各种交互",
            "values": ["VNode", "(props: FilterDropdownProps) => VNode"]
        },
        "filterDropdownOpen": {
            "type": "attribute",
            "description": "用于控制自定义筛选菜单是否可见",
            "values": ["boolean"]
        },
        "filtered": {
            "type": "attribute",
            "description": "标识数据是否经过过滤，筛选图标会高亮",
            "values": ["boolean"]
        },
        "filteredValue": {
            "type": "attribute",
            "description": "筛选的受控属性，外界可用此控制列的筛选状态，值为已筛选的 value 数组",
            "values": ["string[]"]
        },
        "filterIcon": {
            "type": "attribute",
            "description": "自定义 filter 图标。",
            "values": ["VNode", "({filtered: boolean, column: Column}) => vNode"]
        },
        "filterMode": {
            "type": "attribute",
            "description": "指定筛选菜单的用户界面",
            "values": ["'menu'", "'tree'"]
        },
        "filterMultiple": {
            "type": "attribute",
            "description": "是否多选",
            "values": ["boolean"]
        },
        "filters": {
            "type": "attribute",
            "description": "表头的筛选菜单项",
            "values": ["object[]"]
        },
        "filterSearch": {
            "type": "attribute",
            "description": "筛选菜单项是否可搜索",
            "values": ["boolean", "function(input, filter):boolean"]
        },
        "fixed": {
            "type": "attribute",
            "description": "列是否固定，可选 true(等效于 left) 'left' 'right'",
            "values": ["boolean|string"]
        },
        "key": {
            "type": "attribute",
            "description": "Vue 需要的 key，如果已经设置了唯一的 dataIndex，可以忽略这个属性",
            "values": ["string"]
        },
        "maxWidth": {
            "type": "attribute",
            "description": "拖动列最大宽度，会受到表格自动调整分配宽度影响",
            "values": ["number"]
        },
        "minWidth": {
            "type": "attribute",
            "description": "拖动列最小宽度，会受到表格自动调整分配宽度影响",
            "values": ["number"]
        },
        "resizable": {
            "type": "attribute",
            "description": "是否可拖动调整宽度，此时 width 必须是 number 类型",
            "values": ["boolean"]
        },
        "responsive": {
            "type": "attribute",
            "description": "响应式 breakpoint 配置列表。未设置则始终可见。",
            "values": ["Breakpoint[]"]
        },
        "rowScope": {
            "type": "attribute",
            "description": "设置列范围",
            "values": ["row", "rowgroup"]
        },
        "showSorterTooltip": {
            "type": "attribute",
            "description": "表头显示下一次排序的 tooltip 提示, 覆盖 table 中 showSorterTooltip",
            "values": ["boolean", "Tooltip props"]
        },
        "sortDirections": {
            "type": "attribute",
            "description": "支持的排序方式，取值为 'ascend' 'descend'",
            "values": ["Array"]
        },
        "sorter": {
            "type": "attribute",
            "description": "排序函数，本地排序使用一个函数(参考 Array.sort 的 compareFunction)，需要服务端排序可设为 true",
            "values": ["Function|boolean"]
        },
        "sortOrder": {
            "type": "attribute",
            "description": "排序的受控属性，外界可用此控制列的排序，可设置为 'ascend' 'descend' null",
            "values": ["string"]
        },
        "title": {
            "type": "attribute",
            "description": "列头显示文字",
            "values": ["string"]
        },
        "width": {
            "type": "attribute",
            "description": "列宽度",
            "values": ["string|number"]
        },
        "onFilter": {
            "type": "attribute",
            "description": "本地模式下，确定筛选的运行函数, 使用 template 或 jsx 时作为filter事件使用",
            "values": ["Function"]
        },
        "onFilterDropdownOpenChange": {
            "type": "attribute",
            "description": "自定义筛选菜单可见变化时调用，使用 template 或 jsx 时作为filterDropdownOpenChange事件使用",
            "values": ["function(open) {}"]
        }
    },
    "a-column-group": {
        "title": {
            "type": "attribute",
            "description": "列头显示文字",
            "values": ["string|slot"]
        }
    },
    "a-row-selection": {
        "checkStrictly": {
            "type": "attribute",
            "description": "checkable 状态下节点选择完全受控（父子数据选中状态不再关联）",
            "values": ["boolean"]
        },
        "columnTitle": {
            "type": "attribute",
            "description": "自定义列表选择框标题",
            "values": ["string|VNode"]
        },
        "columnWidth": {
            "type": "attribute",
            "description": "自定义列表选择框宽度",
            "values": ["string|number"]
        },
        "fixed": {
            "type": "attribute",
            "description": "把选择框列固定在左边",
            "values": ["boolean"]
        },
        "getCheckboxProps": {
            "type": "attribute",
            "description": "选择框的默认属性配置",
            "values": ["Function(record)"]
        },
        "hideDefaultSelections": {
            "type": "attribute",
            "description": "去掉『全选』『反选』两个默认选项",
            "values": ["boolean"]
        },
        "hideSelectAll": {
            "type": "attribute",
            "description": "隐藏全选勾选框与自定义选择项",
            "values": ["boolean"]
        },
        "preserveSelectedRowKeys": {
            "type": "attribute",
            "description": "当数据被删除时仍然保留选项的 key",
            "values": ["boolean"]
        },
        "selectedRowKeys": {
            "type": "attribute",
            "description": "指定选中项的 key 数组，需要和 onChange 进行配合",
            "values": ["string[]"]
        },
        "selections": {
            "type": "attribute",
            "description": "自定义选择项 配置项, 设为 true 时使用默认选择项",
            "values": ["object[]", "boolean"]
        },
        "type": {
            "type": "attribute",
            "description": "多选/单选，checkbox or radio",
            "values": ["string"]
        },
        "onChange": {
            "type": "attribute",
            "description": "选中项发生变化时的回调",
            "values": ["Function(selectedRowKeys, selectedRows)"]
        },
        "onSelect": {
            "type": "attribute",
            "description": "用户手动选择/取消选择某列的回调",
            "values": ["Function(record, selected, selectedRows, nativeEvent)"]
        },
        "onSelectAll": {
            "type": "attribute",
            "description": "用户手动选择/取消选择所有列的回调",
            "values": ["Function(selected, selectedRows, changeRows)"]
        },
        "onSelectInvert": {
            "type": "attribute",
            "description": "用户手动选择反选的回调",
            "values": ["Function(selectedRows)"]
        },
        "onSelectNone": {
            "type": "attribute",
            "description": "用户清空选择的回调",
            "values": ["function()"]
        }
    },
    "a-scroll": {
        "scrollToFirstRowOnChange": {
            "type": "attribute",
            "description": "当分页、排序、筛选变化后是否滚动到表格顶部",
            "values": ["boolean"]
        },
        "x": {
            "type": "attribute",
            "description": "设置横向滚动，也可用于指定滚动区域的宽，可以设置为像素值，百分比，true 和 'max-content'",
            "values": ["string", "number", "true"]
        },
        "y": {
            "type": "attribute",
            "description": "设置纵向滚动，也可用于指定滚动区域的高，可以设置为像素值",
            "values": ["string", "number"]
        }
    },
    "a-selection": {
        "key": {
            "type": "attribute",
            "description": "Vue 需要的 key，建议设置",
            "values": ["string"]
        },
        "text": {
            "type": "attribute",
            "description": "选择项显示的文字",
            "values": ["string|VNode"]
        },
        "onSelect": {
            "type": "attribute",
            "description": "选择项点击回调",
            "values": ["Function(changeableRowKeys)"]
        }
    },
    "a-tabs": {
        "v-model:activeKey": {
            "type": "attribute",
            "description": "当前激活 tab 面板的 key",
            "values": ["string"]
        },
        "animated": {
            "type": "attribute",
            "description": "是否使用动画切换 Tabs，在 tabPosition=\"top\" | \"bottom\" 时有效",
            "values": ["boolean", "{inkBar:boolean, tabPane:boolean}"]
        },
        "centered": {
            "type": "attribute",
            "description": "标签居中展示",
            "values": ["boolean"]
        },
        "destroyInactiveTabPane": {
            "type": "attribute",
            "description": "被隐藏时是否销毁 DOM 结构",
            "values": ["boolean"]
        },
        "hideAdd": {
            "type": "attribute",
            "description": "是否隐藏加号图标，在 type=\"editable-card\" 时有效",
            "values": ["boolean"]
        },
        "size": {
            "type": "attribute",
            "description": "大小，提供 large middle 和 small 三种大小",
            "values": ["string"]
        },
        "tabBarGutter": {
            "type": "attribute",
            "description": "tabs 之间的间隙",
            "values": ["number"]
        },
        "tabBarStyle": {
            "type": "attribute",
            "description": "tab bar 的样式对象",
            "values": ["CSSProperties"]
        },
        "tabPosition": {
            "type": "attribute",
            "description": "页签位置，可选值有 top right bottom left",
            "values": ["string"]
        },
        "type": {
            "type": "attribute",
            "description": "页签的基本样式，可选 line、card editable-card 类型",
            "values": ["string"]
        },
        "change": {
            "type": "method",
            "description": "切换面板的回调",
            "values": []
        },
        "edit": {
            "type": "method",
            "description": "新增和删除页签的回调，在 type=\"editable-card\" 时有效",
            "values": []
        },
        "tabClick": {
            "type": "method",
            "description": "tab 被点击的回调",
            "values": []
        },
        "tabScroll": {
            "type": "method",
            "description": "滚动 TabBar 时触发",
            "values": []
        }
    },
    "a-tabs-tab-pane": {
        "forceRender": {
            "type": "attribute",
            "description": "被隐藏时是否渲染 DOM 结构",
            "values": ["boolean"]
        },
        "key": {
            "type": "attribute",
            "description": "对应 activeKey",
            "values": ["string"]
        },
        "tab": {
            "type": "attribute",
            "description": "选项卡头显示文字",
            "values": ["string|slot"]
        }
    },
    "a-tag": {
        "closable": {
            "type": "attribute",
            "description": "标签是否可以关闭",
            "values": ["boolean"]
        },
        "closeIcon": {
            "type": "attribute",
            "description": "自定义关闭按钮",
            "values": ["VNode", "slot"]
        },
        "color": {
            "type": "attribute",
            "description": "标签色",
            "values": ["string"]
        },
        "icon": {
            "type": "attribute",
            "description": "设置图标",
            "values": ["VNode", "slot"]
        },
        "bordered": {
            "type": "attribute",
            "description": "是否有边框",
            "values": ["boolean"]
        },
        "close": {
            "type": "method",
            "description": "关闭时的回调",
            "values": []
        }
    },
    "a-tag-checkable-tag": {
        "v-model:checked": {
            "type": "attribute",
            "description": "设置标签的选中状态",
            "values": ["boolean"]
        },
        "change": {
            "type": "method",
            "description": "点击标签时触发的回调",
            "values": []
        }
    },
    "a-timeline": {
        "mode": {
            "type": "attribute",
            "description": "通过设置 mode 可以改变时间轴和内容的相对位置",
            "values": ["left", "alternate", "right"]
        },
        "pending": {
            "type": "attribute",
            "description": "指定最后一个幽灵节点是否存在或内容",
            "values": ["boolean|string|slot"]
        },
        "pendingDot": {
            "type": "attribute",
            "description": "当最后一个幽灵节点存在時，指定其时间图点",
            "values": ["string|slot"]
        },
        "reverse": {
            "type": "attribute",
            "description": "节点排序",
            "values": ["boolean"]
        }
    },
    "a-timeline-item": {
        "color": {
            "type": "attribute",
            "description": "指定圆圈颜色 blue, red, green，或自定义的色值",
            "values": ["string"]
        },
        "dot": {
            "type": "attribute",
            "description": "自定义时间轴点",
            "values": ["string|slot"]
        },
        "label": {
            "type": "attribute",
            "description": "设置标签",
            "values": ["string", "slot"]
        },
        "position": {
            "type": "attribute",
            "description": "自定义节点位置",
            "values": ["left", "right"]
        }
    },
    "a-tooltip": {
        "title": {
            "type": "attribute",
            "description": "提示文字",
            "values": ["string|slot"]
        },
        "openChange": {
            "type": "method",
            "description": "显示隐藏的回调",
            "values": []
        }
    },
    "a-tour": {
        "close": {
            "type": "attribute",
            "description": "关闭引导时的回调函数",
            "values": ["Function"]
        },
        "finish": {
            "type": "attribute",
            "description": "引导完成时的回调",
            "values": ["Function"]
        },
        "change": {
            "type": "attribute",
            "description": "步骤改变时的回调，current 为当前前的步骤",
            "values": ["(current: number) => void"]
        }
    },
    "a-tour-step": {
        "close": {
            "type": "attribute",
            "description": "关闭引导时的回调函数",
            "values": ["Function"]
        }
    },
    "a-tree": {
        "allowDrop": {
            "type": "attribute",
            "description": "是否允许拖拽时放置在该节点",
            "values": ["({ dropNode, dropPosition }) => boolean"]
        },
        "autoExpandParent": {
            "type": "attribute",
            "description": "是否自动展开父节点",
            "values": ["boolean"]
        },
        "blockNode": {
            "type": "attribute",
            "description": "是否节点占据一行",
            "values": ["boolean"]
        },
        "checkable": {
            "type": "attribute",
            "description": "节点前添加 Checkbox 复选框",
            "values": ["boolean"]
        },
        "v-model:checkedKeys": {
            "type": "attribute",
            "description": "（受控）选中复选框的树节点（注意：父子节点有关联，如果传入父节点 key，则子节点自动选中；相应当子节点 key 都传入，父节点也自动选中。当设置checkable和checkStrictly，它是一个有checked和halfChecked属性的对象，并且父子节点的选中与否不再关联",
            "values": ["string[]", "number[]", "{checked: string[]", "number[], halfChecked: string[]", "number[]}"]
        },
        "checkStrictly": {
            "type": "attribute",
            "description": "checkable 状态下节点选择完全受控（父子节点选中状态不再关联）",
            "values": ["boolean"]
        },
        "defaultExpandAll": {
            "type": "attribute",
            "description": "默认展开所有树节点, 如果是异步数据，需要在数据返回后再实例化，建议用 v-if=\"data.length\"；当有 expandedKeys 时，defaultExpandAll 将失效",
            "values": ["boolean"]
        },
        "disabled": {
            "type": "attribute",
            "description": "将树禁用",
            "values": ["bool"]
        },
        "draggable": {
            "type": "attribute",
            "description": "设置节点可拖拽",
            "values": ["boolean"]
        },
        "v-model:expandedKeys": {
            "type": "attribute",
            "description": "（受控）展开指定的树节点",
            "values": ["string[]", "number[]"]
        },
        "fieldNames": {
            "type": "attribute",
            "description": "替换 treeNode 中 title,key,children 字段为 treeData 中对应的字段",
            "values": ["object"]
        },
        "filterTreeNode": {
            "type": "attribute",
            "description": "按需筛选树节点（高亮），返回 true",
            "values": ["function(node)"]
        },
        "height": {
            "type": "attribute",
            "description": "设置虚拟滚动容器高度，设置后内部节点不再支持横向滚动",
            "values": ["number"]
        },
        "loadData": {
            "type": "attribute",
            "description": "异步加载数据",
            "values": ["function(node)"]
        },
        "loadedKeys": {
            "type": "attribute",
            "description": "（受控）已经加载的节点，需要配合 loadData 使用",
            "values": ["string[]", "number[]"]
        },
        "multiple": {
            "type": "attribute",
            "description": "支持点选多个节点（节点本身）",
            "values": ["boolean"]
        },
        "selectable": {
            "type": "attribute",
            "description": "是否可选中",
            "values": ["boolean"]
        },
        "v-model:selectedKeys": {
            "type": "attribute",
            "description": "（受控）设置选中的树节点",
            "values": ["string[]", "number[]"]
        },
        "showIcon": {
            "type": "attribute",
            "description": "是否展示 TreeNode title 前的图标，没有默认样式，如设置为 true，需要自行定义图标相关样式",
            "values": ["boolean"]
        },
        "showLine": {
            "type": "attribute",
            "description": "是否展示连接线",
            "values": ["boolean", "{showLeafIcon: boolean}(3.0+)"]
        },
        "switcherIcon": {
            "type": "attribute",
            "description": "自定义树节点的展开/折叠图标",
            "values": ["v-slot:switcherIcon=\"{active, checked, expanded, loading, selected, halfChecked, title, key, children, dataRef, data, defaultIcon, switcherCls}\""]
        },
        "title": {
            "type": "attribute",
            "description": "自定义标题",
            "values": ["slot"]
        },
        "treeData": {
            "type": "attribute",
            "description": "treeNodes 数据，如果设置则不需要手动构造 TreeNode 节点（key 在整个树范围内唯一）",
            "values": ["TreeNode[]"]
        },
        "virtual": {
            "type": "attribute",
            "description": "设置 false 时关闭虚拟滚动",
            "values": ["boolean"]
        },
        "check": {
            "type": "method",
            "description": "点击复选框触发",
            "values": []
        },
        "dragend": {
            "type": "method",
            "description": "dragend 触发时调用",
            "values": []
        },
        "dragenter": {
            "type": "method",
            "description": "dragenter 触发时调用",
            "values": []
        },
        "dragleave": {
            "type": "method",
            "description": "dragleave 触发时调用",
            "values": []
        },
        "dragover": {
            "type": "method",
            "description": "dragover 触发时调用",
            "values": []
        },
        "dragstart": {
            "type": "method",
            "description": "开始拖拽时调用",
            "values": []
        },
        "drop": {
            "type": "method",
            "description": "drop 触发时调用",
            "values": []
        },
        "expand": {
            "type": "method",
            "description": "展开/收起节点时触发",
            "values": []
        },
        "load": {
            "type": "method",
            "description": "节点加载完毕时触发",
            "values": []
        },
        "rightClick": {
            "type": "method",
            "description": "响应右键点击",
            "values": []
        },
        "select": {
            "type": "method",
            "description": "点击树节点触发",
            "values": []
        },
        "scrollTo{key:string|number;align?:'top'|'bottom'|'auto';offset?:number}": {
            "type": "function",
            "description": "虚拟滚动下，滚动到指定 key 条目",
            "values": []
        }
    },
    "a-tree-node": {
        "checkable": {
            "type": "attribute",
            "description": "当树为 checkable 时，设置独立节点是否展示 Checkbox",
            "values": ["boolean"]
        },
        "class": {
            "type": "attribute",
            "description": "节点的 class",
            "values": ["string"]
        },
        "disableCheckbox": {
            "type": "attribute",
            "description": "禁掉 checkbox",
            "values": ["boolean"]
        },
        "disabled": {
            "type": "attribute",
            "description": "禁掉响应",
            "values": ["boolean"]
        },
        "icon": {
            "type": "attribute",
            "description": "自定义图标。可接收组件，props 为当前节点 props",
            "values": ["slot|slot-scope"]
        },
        "isLeaf": {
            "type": "attribute",
            "description": "设置为叶子节点(设置了loadData时有效)",
            "values": ["boolean"]
        },
        "key": {
            "type": "attribute",
            "description": "被树的 (default)ExpandedKeys / (default)CheckedKeys / (default)SelectedKeys 属性所用。注意：整个树范围内的所有节点的 key 值不能重复！",
            "values": ["string", "number"]
        },
        "selectable": {
            "type": "attribute",
            "description": "设置节点是否可被选中",
            "values": ["boolean"]
        },
        "style": {
            "type": "attribute",
            "description": "节点的 style",
            "values": ["string|object"]
        },
        "title": {
            "type": "attribute",
            "description": "标题",
            "values": ["string"]
        },
        "expandAction": {
            "type": "attribute",
            "description": "目录展开逻辑，可选 false 'click' 'dblclick'",
            "values": ["string"]
        }
    },
    "a-alert": {
        "action": {
            "type": "attribute",
            "description": "自定义操作项",
            "values": ["slot"]
        },
        "afterClose": {
            "type": "attribute",
            "description": "关闭动画结束后触发的回调函数",
            "values": ["() => void"]
        },
        "banner": {
            "type": "attribute",
            "description": "是否用作顶部公告",
            "values": ["boolean"]
        },
        "closable": {
            "type": "attribute",
            "description": "默认不显示关闭按钮",
            "values": ["boolean"]
        },
        "closeIcon": {
            "type": "attribute",
            "description": "自定义关闭 Icon",
            "values": ["slot"]
        },
        "closeText": {
            "type": "attribute",
            "description": "自定义关闭按钮",
            "values": ["string|slot"]
        },
        "description": {
            "type": "attribute",
            "description": "警告提示的辅助性文字介绍",
            "values": ["string|slot"]
        },
        "icon": {
            "type": "attribute",
            "description": "自定义图标，showIcon 为 true 时有效",
            "values": ["vnode|slot"]
        },
        "message": {
            "type": "attribute",
            "description": "警告提示内容",
            "values": ["string|slot"]
        },
        "showIcon": {
            "type": "attribute",
            "description": "是否显示辅助图标",
            "values": ["boolean"]
        },
        "type": {
            "type": "attribute",
            "description": "指定警告提示的样式，有四种选择 success、info、warning、error",
            "values": ["string"]
        },
        "close": {
            "type": "method",
            "description": "关闭时触发的回调函数",
            "values": []
        }
    },
    "a-drawer": {
        "autofocus": {
            "type": "attribute",
            "description": "抽屉展开后是否将焦点切换至其 Dom 节点",
            "values": ["boolean"]
        },
        "bodyStyle": {
            "type": "attribute",
            "description": "可用于设置 Drawer 内容部分的样式",
            "values": ["CSSProperties"]
        },
        "class": {
            "type": "attribute",
            "description": "Drawer 容器外层 className 设置，如果需要设置最外层，请使用 rootClassName",
            "values": ["string"]
        },
        "closable": {
            "type": "attribute",
            "description": "是否显示左上角的关闭按钮",
            "values": ["boolean"]
        },
        "closeIcon": {
            "type": "attribute",
            "description": "自定义关闭图标",
            "values": ["VNode", "slot"]
        },
        "contentWrapperStyle": {
            "type": "attribute",
            "description": "可用于设置 Drawer 包裹内容部分的样式",
            "values": ["CSSProperties"]
        },
        "destroyOnClose": {
            "type": "attribute",
            "description": "关闭时销毁 Drawer 里的子元素",
            "values": ["boolean"]
        },
        "extra": {
            "type": "attribute",
            "description": "抽屉右上角的操作区域",
            "values": ["VNode", "slot"]
        },
        "footer": {
            "type": "attribute",
            "description": "抽屉的页脚",
            "values": ["VNode", "slot"]
        },
        "footerStyle": {
            "type": "attribute",
            "description": "抽屉页脚部件的样式",
            "values": ["CSSProperties"]
        },
        "forceRender": {
            "type": "attribute",
            "description": "预渲染 Drawer 内元素",
            "values": ["boolean"]
        },
        "getContainer": {
            "type": "attribute",
            "description": "指定 Drawer 挂载的节点，并在容器内展现 | () => HTMLElement | Selectors",
            "values": ["'body'"]
        },
        "headerStyle": {
            "type": "attribute",
            "description": "用于设置 Drawer 头部的样式",
            "values": ["CSSProperties"]
        },
        "height": {
            "type": "attribute",
            "description": "高度, 在 placement 为 top 或 bottom 时使用",
            "values": ["string", "number"]
        },
        "keyboard": {
            "type": "attribute",
            "description": "是否支持键盘 esc 关闭",
            "values": ["boolean"]
        },
        "mask": {
            "type": "attribute",
            "description": "是否展示遮罩",
            "values": ["Boolean"]
        },
        "maskClosable": {
            "type": "attribute",
            "description": "点击蒙层是否允许关闭",
            "values": ["boolean"]
        },
        "maskStyle": {
            "type": "attribute",
            "description": "遮罩样式",
            "values": ["CSSProperties"]
        },
        "placement": {
            "type": "attribute",
            "description": "抽屉的方向",
            "values": ["'top'", "'right'", "'bottom'", "'left'"]
        },
        "push": {
            "type": "attribute",
            "description": "用于设置多层 Drawer 的推动行为",
            "values": ["boolean", "{distance: string", "number}"]
        },
        "rootClassName": {
            "type": "attribute",
            "description": "对话框外层容器的类名",
            "values": ["string"]
        },
        "rootStyle": {
            "type": "attribute",
            "description": "可用于设置 Drawer 最外层容器的样式，和 style 的区别是作用节点包括 mask",
            "values": ["CSSProperties"]
        },
        "size": {
            "type": "attribute",
            "description": "预设抽屉宽度（或高度），default 378px 和 large 736px",
            "values": ["default", "large"]
        },
        "style": {
            "type": "attribute",
            "description": "设计 Drawer 容器样式，如果你只需要设置内容部分请使用 bodyStyle",
            "values": ["CSSProperties"]
        },
        "title": {
            "type": "attribute",
            "description": "标题",
            "values": ["string", "slot"]
        },
        "v-model:open": {
            "type": "attribute",
            "description": "Drawer 是否可见",
            "values": ["boolean"]
        },
        "width": {
            "type": "attribute",
            "description": "宽度",
            "values": ["string", "number"]
        },
        "zIndex": {
            "type": "attribute",
            "description": "设置 Drawer 的 z-index",
            "values": ["Number"]
        },
        "afterOpenChange": {
            "type": "method",
            "description": "切换抽屉时动画结束后的回调",
            "values": []
        },
        "close": {
            "type": "method",
            "description": "点击遮罩层或左上角叉或取消按钮的回调",
            "values": []
        }
    },
    "a-modal": {
        "afterClose": {
            "type": "attribute",
            "description": "Modal 完全关闭后的回调",
            "values": ["function"]
        },
        "bodyStyle": {
            "type": "attribute",
            "description": "Modal body 样式",
            "values": ["object"]
        },
        "cancelButtonProps": {
            "type": "attribute",
            "description": "cancel 按钮 props",
            "values": ["ButtonProps"]
        },
        "cancelText": {
            "type": "attribute",
            "description": "取消按钮文字",
            "values": ["string| slot"]
        },
        "centered": {
            "type": "attribute",
            "description": "垂直居中展示 Modal",
            "values": ["boolean"]
        },
        "closable": {
            "type": "attribute",
            "description": "是否显示右上角的关闭按钮",
            "values": ["boolean"]
        },
        "closeIcon": {
            "type": "attribute",
            "description": "自定义关闭图标",
            "values": ["VNode", "slot"]
        },
        "confirmLoading": {
            "type": "attribute",
            "description": "确定按钮 loading",
            "values": ["boolean"]
        },
        "destroyOnClose": {
            "type": "attribute",
            "description": "关闭时销毁 Modal 里的子元素",
            "values": ["boolean"]
        },
        "footer": {
            "type": "attribute",
            "description": "底部内容，当不需要默认底部按钮时，可以设为 :footer=\"null\"",
            "values": ["string|slot"]
        },
        "forceRender": {
            "type": "attribute",
            "description": "强制渲染 Modal",
            "values": ["boolean"]
        },
        "getContainer": {
            "type": "attribute",
            "description": "指定 Modal 挂载的 HTML 节点",
            "values": ["(instance): HTMLElement"]
        },
        "keyboard": {
            "type": "attribute",
            "description": "是否支持键盘 esc 关闭",
            "values": ["boolean"]
        },
        "mask": {
            "type": "attribute",
            "description": "是否展示遮罩",
            "values": ["boolean"]
        },
        "maskClosable": {
            "type": "attribute",
            "description": "点击蒙层是否允许关闭",
            "values": ["boolean"]
        },
        "maskStyle": {
            "type": "attribute",
            "description": "遮罩样式",
            "values": ["object"]
        },
        "okButtonProps": {
            "type": "attribute",
            "description": "ok 按钮 props",
            "values": ["ButtonProps"]
        },
        "okText": {
            "type": "attribute",
            "description": "确认按钮文字",
            "values": ["string|slot"]
        },
        "okType": {
            "type": "attribute",
            "description": "确认按钮类型",
            "values": ["string"]
        },
        "title": {
            "type": "attribute",
            "description": "标题",
            "values": ["string|slot"]
        },
        "v-model:open": {
            "type": "attribute",
            "description": "对话框是否可见",
            "values": ["boolean"]
        },
        "width": {
            "type": "attribute",
            "description": "宽度",
            "values": ["string|number"]
        },
        "wrapClassName": {
            "type": "attribute",
            "description": "对话框外层容器的类名",
            "values": ["string"]
        },
        "zIndex": {
            "type": "attribute",
            "description": "设置 Modal 的 z-index",
            "values": ["number"]
        },
        "cancel": {
            "type": "method",
            "description": "点击遮罩层或右上角叉或取消按钮的回调",
            "values": []
        },
        "ok": {
            "type": "method",
            "description": "点击确定回调",
            "values": []
        }
    },
    "a-notification": {
        "bottom": {
            "type": "attribute",
            "description": "消息从底部弹出时，距离底部的位置，单位像素。",
            "values": ["string"]
        },
        "btn": {
            "type": "attribute",
            "description": "自定义关闭按钮",
            "values": ["VNode", "() => VNode"]
        },
        "class": {
            "type": "attribute",
            "description": "自定义 CSS class",
            "values": ["string"]
        },
        "closeIcon": {
            "type": "attribute",
            "description": "自定义关闭图标",
            "values": ["VNode", "() => VNode"]
        },
        "description": {
            "type": "attribute",
            "description": "通知提醒内容，必选",
            "values": ["string", "VNode", "() => VNode"]
        },
        "duration": {
            "type": "attribute",
            "description": "默认自动关闭延时，单位秒",
            "values": ["number"]
        },
        "getContainer": {
            "type": "attribute",
            "description": "配置渲染节点的输出位置",
            "values": ["() => HTMLNode"]
        },
        "icon": {
            "type": "attribute",
            "description": "自定义图标",
            "values": ["VNode", "() => VNode"]
        },
        "key": {
            "type": "attribute",
            "description": "当前通知唯一标志",
            "values": ["string"]
        },
        "message": {
            "type": "attribute",
            "description": "通知提醒标题，必选",
            "values": ["string", "VNode", "() => VNode"]
        },
        "placement": {
            "type": "attribute",
            "description": "弹出位置，可选 topLeft topRight bottomLeft bottomRight",
            "values": ["string"]
        },
        "style": {
            "type": "attribute",
            "description": "自定义内联样式",
            "values": ["Object", "string"]
        },
        "top": {
            "type": "attribute",
            "description": "消息从顶部弹出时，距离顶部的位置，单位像素。",
            "values": ["string"]
        },
        "onClick": {
            "type": "attribute",
            "description": "点击通知时触发的回调函数",
            "values": ["Function"]
        },
        "onClose": {
            "type": "attribute",
            "description": "点击默认关闭按钮时触发的回调函数",
            "values": ["Function"]
        },
        "maxCount": {
            "type": "attribute",
            "description": "最大显示数, 超过限制时，最早的消息会被自动关闭",
            "values": ["number"]
        },
        "rtl": {
            "type": "attribute",
            "description": "是否开启 RTL 模式",
            "values": ["boolean"]
        }
    },
    "a-popconfirm": {
        "cancelButton": {
            "type": "attribute",
            "description": "完全自定义取消按钮",
            "values": ["slot"]
        },
        "cancelButtonProps": {
            "type": "attribute",
            "description": "cancel 按钮 props",
            "values": ["ButtonProps"]
        },
        "cancelText": {
            "type": "attribute",
            "description": "取消按钮文字",
            "values": ["string|slot"]
        },
        "disabled": {
            "type": "attribute",
            "description": "点击 Popconfirm 子元素是否弹出气泡确认框",
            "values": ["boolean"]
        },
        "icon": {
            "type": "attribute",
            "description": "自定义弹出气泡 Icon 图标",
            "values": ["vNode"]
        },
        "okButton": {
            "type": "attribute",
            "description": "完全自定义确认按钮",
            "values": ["slot"]
        },
        "okButtonProps": {
            "type": "attribute",
            "description": "ok 按钮 props",
            "values": ["ButtonProps"]
        },
        "okText": {
            "type": "attribute",
            "description": "确认按钮文字",
            "values": ["string|slot"]
        },
        "okType": {
            "type": "attribute",
            "description": "确认按钮类型",
            "values": ["string"]
        },
        "showCancel": {
            "type": "attribute",
            "description": "是否显示取消按钮",
            "values": ["boolean"]
        },
        "title": {
            "type": "attribute",
            "description": "确认框的描述",
            "values": ["string|slot"]
        },
        "description": {
            "type": "attribute",
            "description": "确认内容的详细描述",
            "values": ["string|slot"]
        },
        "v-model:open": {
            "type": "attribute",
            "description": "是否显示",
            "values": ["boolean"]
        },
        "cancel": {
            "type": "method",
            "description": "点击取消的回调",
            "values": []
        },
        "confirm": {
            "type": "method",
            "description": "点击确认的回调",
            "values": []
        },
        "openChange": {
            "type": "method",
            "description": "显示隐藏的回调",
            "values": []
        }
    },
    "a-progress": {
        "format": {
            "type": "attribute",
            "description": "内容的模板函数",
            "values": ["function(percent, successPercent)"]
        },
        "percent": {
            "type": "attribute",
            "description": "百分比",
            "values": ["number"]
        },
        "showInfo": {
            "type": "attribute",
            "description": "是否显示进度数值或状态图标",
            "values": ["boolean"]
        },
        "status": {
            "type": "attribute",
            "description": "状态，可选：success exception normal active(仅限 line)",
            "values": ["string"]
        },
        "strokeColor": {
            "type": "attribute",
            "description": "进度条的色彩",
            "values": ["string"]
        },
        "strokeLinecap": {
            "type": "attribute",
            "description": "进度条的样式",
            "values": ["round", "butt", "square，区别详见 stroke-linecap"]
        },
        "success": {
            "type": "attribute",
            "description": "成功进度条相关配置",
            "values": ["{ percent: number, strokeColor: string }"]
        },
        "title": {
            "type": "attribute",
            "description": "html 标签 title",
            "values": ["string"]
        },
        "trailColor": {
            "type": "attribute",
            "description": "未完成的分段的颜色",
            "values": ["string"]
        },
        "type": {
            "type": "attribute",
            "description": "类型，可选 line circle dashboard",
            "values": ["string"]
        },
        "size": {
            "type": "attribute",
            "description": "进度条的尺寸",
            "values": ["number", "[number, number]", "\"small\"", "\"default\""]
        }
    },
    "a-result": {
        "extra": {
            "type": "attribute",
            "description": "操作区",
            "values": ["slot"]
        },
        "icon": {
            "type": "attribute",
            "description": "自定义 icon",
            "values": ["slot"]
        },
        "status": {
            "type": "attribute",
            "description": "结果的状态,决定图标和颜色",
            "values": ["success", "error", "info", "warning", "404", "403", "500"]
        },
        "subTitle": {
            "type": "attribute",
            "description": "subTitle 文字",
            "values": ["string", "VNode", "slot"]
        },
        "title": {
            "type": "attribute",
            "description": "title 文字",
            "values": ["string", "VNode", "slot"]
        }
    },
    "a-skeleton": {
        "active": {
            "type": "attribute",
            "description": "是否展示动画效果",
            "values": ["boolean"]
        },
        "avatar": {
            "type": "attribute",
            "description": "是否显示头像占位图",
            "values": ["boolean", "SkeletonAvatarProps"]
        },
        "loading": {
            "type": "attribute",
            "description": "为 true 时，显示占位图。反之则直接展示子组件",
            "values": ["boolean"]
        },
        "paragraph": {
            "type": "attribute",
            "description": "是否显示段落占位图",
            "values": ["boolean", "SkeletonParagraphProps"]
        },
        "title": {
            "type": "attribute",
            "description": "是否显示标题占位图",
            "values": ["boolean", "SkeletonTitleProps"]
        },
        "shape": {
            "type": "attribute",
            "description": "指定头像的形状",
            "values": ["circle", "square"]
        },
        "size": {
            "type": "attribute",
            "description": "设置头像占位图的大小",
            "values": ["number", "large", "small", "default"]
        },
        "width": {
            "type": "attribute",
            "description": "设置段落占位图的宽度，若为数组时则为对应的每行宽度，反之则是最后一行的宽度",
            "values": ["number", "string", "Array<number", "string>"]
        },
        "rows": {
            "type": "attribute",
            "description": "设置段落占位图的行数",
            "values": ["number"]
        }
    },
    "a-spin": {
        "delay": {
            "type": "attribute",
            "description": "延迟显示加载效果的时间（防止闪烁）",
            "values": ["number (毫秒)"]
        },
        "indicator": {
            "type": "attribute",
            "description": "加载指示符",
            "values": ["vNode", "slot"]
        },
        "size": {
            "type": "attribute",
            "description": "组件大小，可选值为 small default large",
            "values": ["string"]
        },
        "spinning": {
            "type": "attribute",
            "description": "是否为加载中状态",
            "values": ["boolean"]
        },
        "tip": {
            "type": "attribute",
            "description": "当作为包裹元素时，可以自定义描述文案",
            "values": ["string", "slot"]
        },
        "wrapperClassName": {
            "type": "attribute",
            "description": "包装器的类属性",
            "values": ["string"]
        }
    },
    "a-affix": {
        "offsetBottom": {
            "type": "attribute",
            "description": "距离窗口底部达到指定偏移量后触发",
            "values": ["number"]
        },
        "offsetTop": {
            "type": "attribute",
            "description": "距离窗口顶部达到指定偏移量后触发",
            "values": ["number"]
        },
        "target": {
            "type": "attribute",
            "description": "设置 Affix 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数",
            "values": ["() => HTMLElement"]
        },
        "change": {
            "type": "method",
            "description": "固定状态改变时触发的回调函数",
            "values": []
        }
    },
    "a-config-provider": {
        "autoInsertSpaceInButton": {
            "type": "attribute",
            "description": "设置为 false 时，移除按钮中 2 个汉字之间的空格",
            "values": ["boolean"]
        },
        "componentSize": {
            "type": "attribute",
            "description": "设置 antd 组件大小",
            "values": ["small", "middle", "large"]
        },
        "csp": {
            "type": "attribute",
            "description": "设置 Content Security Policy 配置",
            "values": ["{ nonce: string }"]
        },
        "direction": {
            "type": "attribute",
            "description": "设置文本展示方向。 示例",
            "values": ["ltr", "rtl"]
        },
        "dropdownMatchSelectWidth": {
            "type": "attribute",
            "description": "下拉菜单和选择器同宽。默认将设置 min-width，当值小于选择框宽度时会被忽略。false 时会关闭虚拟滚动",
            "values": ["boolean", "number"]
        },
        "form": {
            "type": "attribute",
            "description": "设置 Form 组件的通用属性",
            "values": ["{ validateMessages?: ValidateMessages, requiredMark?: boolean", "optional, colon?: boolean}"]
        },
        "getPopupContainer": {
            "type": "attribute",
            "description": "弹出框（Select, Tooltip, Menu 等等）渲染父节点，默认渲染到 body 上。",
            "values": ["Function(triggerNode, dialogContext)"]
        },
        "getTargetContainer": {
            "type": "attribute",
            "description": "配置 Affix、Anchor 滚动监听容器。",
            "values": ["() => HTMLElement"]
        },
        "input": {
            "type": "attribute",
            "description": "设置 Input 组件的通用属性",
            "values": ["{ autocomplete?: string }"]
        },
        "locale": {
            "type": "attribute",
            "description": "语言包配置，语言包可到 ant-design-vue/es/locale 目录下寻找",
            "values": ["object"]
        },
        "pageHeader": {
            "type": "attribute",
            "description": "统一设置 pageHeader 的 ghost，参考 pageHeader",
            "values": ["{ ghost: boolean }"]
        },
        "prefixCls": {
            "type": "attribute",
            "description": "设置统一样式前缀。注意：需要配合 less 变量 @ant-prefix 使用",
            "values": ["string"]
        },
        "renderEmpty": {
            "type": "attribute",
            "description": "自定义组件空状态。参考 空状态",
            "values": ["slot", "Function(componentName: string): VNode"]
        },
        "space": {
            "type": "attribute",
            "description": "设置 Space 的 size，参考 Space",
            "values": ["{ size: small", "middle", "large", "number }"]
        },
        "transformCellText": {
            "type": "attribute",
            "description": "Table 数据渲染前可以再次改变，一般用户空数据的默认配置",
            "values": ["Function({ text, column, record, index }) => any"]
        },
        "virtual": {
            "type": "attribute",
            "description": "设置 false 时关闭虚拟滚动",
            "values": ["boolean"]
        },
        "wave": {
            "type": "attribute",
            "description": "设置水波纹特效",
            "values": ["{ disabled?: boolean }"]
        }
    },
    "a-float-button": {},
    "a-common": {
        "click": {
            "type": "attribute",
            "description": "Set the handler to handle click event",
            "values": ["(event) => void"]
        }
    },
    "a-float-button-group": {
        "openChange": {
            "type": "attribute",
            "description": "展开收起时的回调",
            "values": ["(open: boolean) => void"]
        }
    },
    "a-float-button-back-top": {
        "duration": {
            "type": "attribute",
            "description": "回到顶部所需时间（ms）",
            "values": ["number"]
        },
        "target": {
            "type": "attribute",
            "description": "设置需要监听其滚动事件的元素",
            "values": ["() => HTMLElement"]
        },
        "visibilityHeight": {
            "type": "attribute",
            "description": "滚动高度达到此参数值才出现 BackTop",
            "values": ["number"]
        },
        "onClick": {
            "type": "attribute",
            "description": "点击按钮的回调函数",
            "values": ["() => void"]
        }
    },
    "a-watermark": {
        "width": {
            "type": "attribute",
            "description": "水印的宽度，content 的默认值为自身的宽度",
            "values": ["number"]
        },
        "height": {
            "type": "attribute",
            "description": "水印的高度，content 的默认值为自身的高度",
            "values": ["number"]
        },
        "rotate": {
            "type": "attribute",
            "description": "水印绘制时，旋转的角度，单位 °",
            "values": ["number"]
        },
        "zIndex": {
            "type": "attribute",
            "description": "追加的水印元素的 z-index",
            "values": ["number"]
        },
        "image": {
            "type": "attribute",
            "description": "图片源，建议导出 2 倍或 3 倍图，优先级高",
            "values": ["string"]
        },
        "content": {
            "type": "attribute",
            "description": "水印文字内容",
            "values": ["string", "string[]"]
        },
        "font": {
            "type": "attribute",
            "description": "文字样式",
            "values": ["Font"]
        },
        "gap": {
            "type": "attribute",
            "description": "水印之间的间距",
            "values": ["[number, number]"]
        },
        "offset": {
            "type": "attribute",
            "description": "水印距离容器左上角的偏移量，默认为 gap/2",
            "values": ["[number, number]"]
        }
    }
}