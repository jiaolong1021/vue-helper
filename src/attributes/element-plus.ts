export default {
  "el-row": {
      "_self": {
          "description": "",
          "text": ["<el-row :gutter=\"${1:10}\">\n\t<el-col :span=\"${2:6}\">$3</el-col>\n</el-row>"]
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
  "el-button": {
      "_self": {
          "description": "常用的操作按钮。",
          "text": ["<el-button type=\"primary\">$1</el-button>"]
      },
      "size": {
          "type": "attribute",
          "description": "尺寸",
          "values": []
      },
      "type": {
          "type": "attribute",
          "description": "类型",
          "values": []
      },
      "plain": {
          "type": "attribute",
          "description": "是否为朴素按钮",
          "values": ["false"]
      },
      "text": {
          "type": "attribute",
          "description": "是否为文字按钮",
          "values": ["false"]
      },
      "bg": {
          "type": "attribute",
          "description": "是否显示文字按钮背景颜色",
          "values": ["false"]
      },
      "link": {
          "type": "attribute",
          "description": "是否为链接按钮",
          "values": ["false"]
      },
      "round": {
          "type": "attribute",
          "description": "是否为圆角按钮",
          "values": ["false"]
      },
      "circle": {
          "type": "attribute",
          "description": "是否为圆形按钮",
          "values": ["false"]
      },
      "loading": {
          "type": "attribute",
          "description": "是否为加载中状态",
          "values": ["false"]
      },
      "loading-icon": {
          "type": "attribute",
          "description": "自定义加载中状态图标组件",
          "values": ["Loading"]
      },
      "disabled": {
          "type": "attribute",
          "description": "按钮是否为禁用状态",
          "values": ["false"]
      },
      "icon": {
          "type": "attribute",
          "description": "图标组件",
          "values": []
      },
      "autofocus": {
          "type": "attribute",
          "description": "原生 autofocus 属性",
          "values": ["false"]
      },
      "native-type": {
          "type": "attribute",
          "description": "原生 type 属性",
          "values": ["button"]
      },
      "auto-insert-space": {
          "type": "attribute",
          "description": "自动在两个中文字符之间插入空格",
          "values": []
      },
      "color": {
          "type": "attribute",
          "description": "自定义按钮颜色, 并自动计算 hover 和 active 触发后的颜色",
          "values": []
      },
      "dark": {
          "type": "attribute",
          "description": "dark 模式, 意味着自动设置 color 为 dark 模式的颜色",
          "values": ["false"]
      }
  },
  "el-button-group": {
      "_self": {
          "description": "",
          "text": ["<el-button-group>\n\t<el-button type=\"primary\">$1</el-button>\n\t<el-button type=\"primary\">$2</el-button>\n</el-button-group>"]
      },
      "size": {
          "type": "attribute",
          "description": "用于控制该按钮组内按钮的大小",
          "values": []
      },
      "type": {
          "type": "attribute",
          "description": "用于控制该按钮组内按钮的类型",
          "values": []
      }
  },
  "el-icon": {
      "_self": {
          "description": "Element Plus 提供了一套常用的图标集合。",
          "text": ["<el-icon size=\"14\" color=\"$1\">\n\t$2\n</el-icon>"]
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
          "values": ["default"]
      },
      "underline": {
          "type": "attribute",
          "description": "是否下划线",
          "values": ["true"]
      },
      "disabled": {
          "type": "attribute",
          "description": "是否禁用状态",
          "values": ["false"]
      },
      "href": {
          "type": "attribute",
          "description": "原生 href 属性",
          "values": []
      },
      "icon": {
          "type": "attribute",
          "description": "图标组件",
          "values": []
      }
  },
  "el-autocomplete": {
      "_self": {
          "description": "根据输入内容提供对应的输入建议。",
          "text": ["<el-autocomplete v-model=\"$1\" placeholder=\"\" :fetch-suggestions=\"fetchSuggestions\" @select=\"handleSelect\">\n</el-autocomplete>"]
      },
      "v-model": {
          "type": "attribute",
          "description": "选中项绑定值",
          "values": []
      },
      "placeholder": {
          "type": "attribute",
          "description": "占位文本",
          "values": []
      },
      "clearable": {
          "type": "attribute",
          "description": "是否可清空",
          "values": ["false"]
      },
      "disabled": {
          "type": "attribute",
          "description": "自动补全组件是否被禁用",
          "values": ["false"]
      },
      "value-key": {
          "type": "attribute",
          "description": "输入建议对象中用于显示的键名",
          "values": ["value"]
      },
      "debounce": {
          "type": "attribute",
          "description": "获取输入建议的防抖延时，单位为毫秒",
          "values": ["300"]
      },
      "placement": {
          "type": "attribute",
          "description": "菜单弹出位置",
          "values": ["bottom-start"]
      },
      "fetch-suggestions": {
          "type": "attribute",
          "description": "获取输入建议的方法， 仅当你的输入建议数据 resolve 时，通过调用 callback(data:[])  来返回它",
          "values": []
      },
      "trigger-on-focus": {
          "type": "attribute",
          "description": "whether show suggestions when input focus",
          "values": ["true"]
      },
      "select-when-unmatched": {
          "type": "attribute",
          "description": "在输入没有任何匹配建议的情况下，按下回车是否触发 select 事件",
          "values": ["false"]
      },
      "name": {
          "type": "attribute",
          "description": "等价于原生 input name 属性",
          "values": []
      },
      "label": {
          "type": "attribute",
          "description": "输入框关联的 label 文字",
          "values": []
      },
      "hide-loading": {
          "type": "attribute",
          "description": "是否隐藏远程加载时的加载图标",
          "values": ["false"]
      },
      "popper-class": {
          "type": "attribute",
          "description": "下拉列表的类名",
          "values": []
      },
      "popper-append-to-bodydeprecated": {
          "type": "attribute",
          "description": "是否将下拉列表插入至 body 元素。 在下拉列表的定位出现问题时，可将该属性设置为 false",
          "values": ["false"]
      },
      "teleported": {
          "type": "attribute",
          "description": "是否将下拉列表元素插入 append-to 指向的元素下",
          "values": ["true"]
      },
      "highlight-first-item": {
          "type": "attribute",
          "description": "是否默认高亮远程搜索结果的第一项",
          "values": ["false"]
      },
      "fit-input-width": {
          "type": "attribute",
          "description": "下拉框的宽度是否与输入框相同",
          "values": ["false"]
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
          "description": "选项的数据源， value 和 label 可以通过 CascaderProps 自定义.",
          "values": []
      },
      "props": {
          "type": "attribute",
          "description": "配置选项, 请参阅下面 CascaderProps 表。",
          "values": []
      },
      "size": {
          "type": "attribute",
          "description": "尺寸",
          "values": []
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
          "values": ["true"]
      },
      "collapse-tags": {
          "type": "attribute",
          "description": "多选模式下是否折叠Tag",
          "values": []
      },
      "collapse-tags-tooltip": {
          "type": "attribute",
          "description": "当鼠标悬停于折叠标签的文本时，是否显示所有选中的标签。 要使用此属性，collapse-tags属性必须设定为 true",
          "values": ["false"]
      },
      "separator": {
          "type": "attribute",
          "description": "用于分隔选项的字符",
          "values": ["'", "'"]
      },
      "filterable": {
          "type": "attribute",
          "description": "该选项是否可以被搜索",
          "values": []
      },
      "filter-method": {
          "type": "attribute",
          "description": "自定义搜索逻辑，第一个参数是node，第二个参数是keyword，返回的布尔值表示是否保留该选项",
          "values": []
      },
      "debounce": {
          "type": "attribute",
          "description": "搜索关键词正在输入时的去抖延迟，单位为毫秒",
          "values": ["300"]
      },
      "before-filter": {
          "type": "attribute",
          "description": "过滤函数调用前，所要调用的钩子函数，该函数接收要过滤的值作为参数。 如果该函数的返回值是 false 或者是一个被拒绝的 Promise，那么接下来的过滤逻辑便不会执行。",
          "values": []
      },
      "popper-class": {
          "type": "attribute",
          "description": "弹出内容的自定义类名",
          "values": ["''"]
      },
      "teleported": {
          "type": "attribute",
          "description": "弹层是否使用 teleport",
          "values": ["true"]
      },
      "popper-append-to-bodydeprecated": {
          "type": "attribute",
          "description": "是否将弹出的内容直接插入到 body 元素。 在弹出内容的边框定位出现问题时，可将该属性设置为 false",
          "values": ["true"]
      },
      "tag-type": {
          "type": "attribute",
          "description": "标签类型",
          "values": ["info"]
      },
      "validate-event": {
          "type": "attribute",
          "description": "输入时是否触发表单的校验",
          "values": ["true"]
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
  "el-checkbox": {
      "_self": {
          "description": "在一组备选项中进行多选。",
          "text": ["<el-checkbox v-model=\"$1\" >$2</el-checkbox>"]
      },
      "v-model": {
          "type": "attribute",
          "description": "选中项绑定值",
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
          "values": ["false"]
      },
      "border": {
          "type": "attribute",
          "description": "是否显示边框",
          "values": ["false"]
      },
      "size": {
          "type": "attribute",
          "description": "Checkbox 的尺寸",
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
          "values": ["false"]
      },
      "indeterminate": {
          "type": "attribute",
          "description": "设置不确定状态，仅负责样式控制",
          "values": ["false"]
      },
      "validate-event": {
          "type": "attribute",
          "description": "输入时是否触发表单的校验",
          "values": ["true"]
      },
      "tabindex": {
          "type": "attribute",
          "description": "输入框的 tabindex",
          "values": []
      },
      "id": {
          "type": "attribute",
          "description": "input id",
          "values": []
      },
      "controlsay": {
          "type": "attribute",
          "description": "与 aria-control一致, 当 indeterminate为 true时生效",
          "values": []
      }
  },
  "el-form": {
      "_self": {
          "description": "表单包含 输入框, 单选框, 下拉选择, 多选框 等用户输入的组件。 使用表单，您可以收集、验证和提交数据。",
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
          "values": ["false"]
      },
      "label-position": {
          "type": "attribute",
          "description": "表单域标签的位置， 当设置为 left 或 right 时，则也需要设置 label-width 属性",
          "values": ["right"]
      },
      "label-width": {
          "type": "attribute",
          "description": "标签的长度，例如 '50px'。 作为 Form 直接子元素的 form-item 会继承该值。 可以使用 auto。",
          "values": []
      },
      "label-suffix": {
          "type": "attribute",
          "description": "表单域标签的后缀",
          "values": []
      },
      "hide-required-asterisk": {
          "type": "attribute",
          "description": "是否隐藏必填字段标签旁边的红色星号。",
          "values": ["false"]
      },
      "require-asterisk-position": {
          "type": "attribute",
          "description": "星号的位置。",
          "values": ["left"]
      },
      "show-message": {
          "type": "attribute",
          "description": "是否显示校验错误信息",
          "values": ["true"]
      },
      "inline-message": {
          "type": "attribute",
          "description": "是否以行内形式展示校验信息",
          "values": ["false"]
      },
      "status-icon": {
          "type": "attribute",
          "description": "是否在输入框中显示校验结果反馈图标",
          "values": ["false"]
      },
      "validate-on-rule-change": {
          "type": "attribute",
          "description": "是否在 rules 属性改变后立即触发一次验证",
          "values": ["true"]
      },
      "size": {
          "type": "attribute",
          "description": "用于控制该表单内组件的尺寸",
          "values": []
      },
      "disabled": {
          "type": "attribute",
          "description": "是否禁用该表单内的所有组件。 如果设置为 true, 它将覆盖内部组件的 disabled 属性",
          "values": ["false"]
      },
      "scroll-to-error": {
          "type": "attribute",
          "description": "当校验失败时，滚动到第一个错误表单项",
          "values": ["false"]
      },
      "validate": {
          "type": "method",
          "description": "任一表单项被校验后触发",
          "values": []
      }
  },
  "el-input": {
      "_self": {
          "description": "通过鼠标或键盘输入字符",
          "text": ["<el-input v-model=\"$1\" placeholder=\"${2:请输入}\" :suffix-icon=\"Search\" @change=\"${3:query}\"></el-input>"]
      },
      "type": {
          "type": "attribute",
          "description": "类型",
          "values": ["text"]
      },
      "v-model": {
          "type": "attribute",
          "description": "绑定值",
          "values": []
      },
      "maxlength": {
          "type": "attribute",
          "description": "最大输入长度",
          "values": []
      },
      "minlength": {
          "type": "attribute",
          "description": "原生属性，最小输入长度",
          "values": []
      },
      "show-word-limit": {
          "type": "attribute",
          "description": "是否显示统计字数, 只在 type 为 'text' 或 'textarea' 的时候生效",
          "values": ["boolean"]
      },
      "placeholder": {
          "type": "attribute",
          "description": "输入框占位文本",
          "values": []
      },
      "clearable": {
          "type": "attribute",
          "description": "是否显示清除按钮，只有当 type 不是 textarea时生效",
          "values": ["false"]
      },
      "formatter": {
          "type": "attribute",
          "description": "指定输入值的格式。(只有当 type 是\"text\"时才能工作)",
          "values": []
      },
      "parser": {
          "type": "attribute",
          "description": "指定从格式化器输入中提取的值。(仅当 type 是\"text\"时才起作用)",
          "values": []
      },
      "show-password": {
          "type": "attribute",
          "description": "是否显示切换密码图标",
          "values": ["false"]
      },
      "disabled": {
          "type": "attribute",
          "description": "是否禁用",
          "values": ["false"]
      },
      "size": {
          "type": "attribute",
          "description": "输入框尺寸，只在 type 不为 'textarea' 时有效",
          "values": []
      },
      "prefix-icon": {
          "type": "attribute",
          "description": "自定义前缀图标",
          "values": []
      },
      "suffix-icon": {
          "type": "attribute",
          "description": "自定义后缀图标",
          "values": []
      },
      "rows": {
          "type": "attribute",
          "description": "输入框行数，仅 type 为 'textarea' 时有效",
          "values": ["number"]
      },
      "autosize": {
          "type": "attribute",
          "description": "textarea 高度是否自适应，仅 type 为 'textarea' 时生效。 可以接受一个对象，比如: { minRows: 2, maxRows: 6 }",
          "values": ["false"]
      },
      "autocomplete": {
          "type": "attribute",
          "description": "原生 autocomplete 属性",
          "values": ["off"]
      },
      "name": {
          "type": "attribute",
          "description": "等价于原生 input name 属性",
          "values": []
      },
      "readonly": {
          "type": "attribute",
          "description": "原生  readonly 属性，是否只读",
          "values": ["false"]
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
          "values": []
      },
      "autofocus": {
          "type": "attribute",
          "description": "原生属性，自动获取焦点",
          "values": ["false"]
      },
      "form": {
          "type": "attribute",
          "description": "原生属性",
          "values": []
      },
      "labelay": {
          "type": "attribute",
          "description": "等价于原生 input aria-label 属性",
          "values": []
      },
      "tabindex": {
          "type": "attribute",
          "description": "输入框的 tabindex",
          "values": []
      },
      "validate-event": {
          "type": "attribute",
          "description": "输入时是否触发表单的校验",
          "values": ["true"]
      },
      "input-style": {
          "type": "attribute",
          "description": "input 元素或 textarea 元素的 style",
          "values": ["{}"]
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
  "el-radio": {
      "_self": {
          "description": "在一组备选项中进行单选",
          "text": ["<el-radio v-model=\"radio\" label=\"${1:label}\">$2</el-radio>"]
      },
      "v-model": {
          "type": "attribute",
          "description": "选中项绑定值",
          "values": []
      },
      "label": {
          "type": "attribute",
          "description": "单选框的值",
          "values": []
      },
      "disabled": {
          "type": "attribute",
          "description": "是否禁用单选框",
          "values": ["false"]
      },
      "border": {
          "type": "attribute",
          "description": "是否显示边框",
          "values": ["false"]
      },
      "size": {
          "type": "attribute",
          "description": "单选框的尺寸",
          "values": []
      },
      "name": {
          "type": "attribute",
          "description": "原始 name 属性",
          "values": []
      },
      "change": {
          "type": "method",
          "description": "绑定值变化时触发的事件",
          "values": []
      }
  },
  "el-rate": {
      "_self": {
          "description": "用于评分",
          "text": ["<el-rate\n\tv-model=\"3.7\"\n\tdisabled\n\tshow-score\n\ttext-color=\"#ff9900\"\n\tscore-template=\"{value}\">\n</el-rate>"]
      },
      "v-model": {
          "type": "attribute",
          "description": "选中项绑定值",
          "values": ["0"]
      },
      "max": {
          "type": "attribute",
          "description": "最大分值",
          "values": ["5"]
      },
      "size": {
          "type": "attribute",
          "description": "尺寸",
          "values": []
      },
      "disabled": {
          "type": "attribute",
          "description": "是否为只读",
          "values": ["false"]
      },
      "allow-half": {
          "type": "attribute",
          "description": "是否允许半选",
          "values": ["false"]
      },
      "low-threshold": {
          "type": "attribute",
          "description": "低分和中等分数的界限值， 值本身被划分在低分中",
          "values": ["2"]
      },
      "high-threshold": {
          "type": "attribute",
          "description": "高分和中等分数的界限值， 值本身被划分在高分中",
          "values": ["4"]
      },
      "colors": {
          "type": "attribute",
          "description": "icon 的颜色。 若传入数组，共有 3 个元素，为 3 个分段所对应的颜色；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的颜色",
          "values": ["['#F7BA2A', '#F7BA2A', '#F7BA2A']"]
      },
      "void-color": {
          "type": "attribute",
          "description": "未选中 icon 的颜色",
          "values": ["#C6D1DE"]
      },
      "disabled-void-color": {
          "type": "attribute",
          "description": "只读时未选中 icon 的颜色",
          "values": ["#EFF2F7"]
      },
      "icons": {
          "type": "attribute",
          "description": "图标组件 若传入数组，则需要传入 3 个元素，分别为 3 个部分所对应的类名；若传入对象，则可自定义分段，键名为分段的界限值，键值为对应的类名",
          "values": ["[StarFilled, StarFilled, StarFilled]"]
      },
      "void-icon": {
          "type": "attribute",
          "description": "未被选中的图标组件",
          "values": ["Star"]
      },
      "disabled-void-icon": {
          "type": "attribute",
          "description": "禁用状态的未选择图标",
          "values": ["StarFilled"]
      },
      "show-text": {
          "type": "attribute",
          "description": "是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容",
          "values": ["false"]
      },
      "show-score": {
          "type": "attribute",
          "description": "是否显示当前分数， show-score 和 show-text 不能同时为真",
          "values": ["false"]
      },
      "text-color": {
          "type": "attribute",
          "description": "辅助文字的颜色",
          "values": ["#1F2D3D"]
      },
      "texts": {
          "type": "attribute",
          "description": "辅助文字数组",
          "values": ["['Extremely bad', 'Disappointed', 'Fair', 'Satisfied', 'Surprise']"]
      },
      "score-template": {
          "type": "attribute",
          "description": "分数显示模板",
          "values": [""]
      },
      "clearable": {
          "type": "attribute",
          "description": "是否可以重置值为 0",
          "values": ["false"]
      },
      "id": {
          "type": "attribute",
          "description": "原生 id 属性",
          "values": []
      },
      "labelay": {
          "type": "attribute",
          "description": "和 Rate 的 aria-label 属性保持一致",
          "values": []
      },
      "change": {
          "type": "method",
          "description": "分值改变时触发",
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
          "description": "选中项绑定值",
          "values": []
      },
      "multiple": {
          "type": "attribute",
          "description": "是否多选",
          "values": ["true", "false"]
      },
      "disabled": {
          "type": "attribute",
          "description": "是否禁用",
          "values": ["true", "false"]
      },
      "value-key": {
          "type": "attribute",
          "description": "作为 value 唯一标识的键名，绑定值为对象类型时必填",
          "values": []
      },
      "size": {
          "type": "attribute",
          "description": "输入框尺寸",
          "values": ["large", "default", "small"]
      },
      "clearable": {
          "type": "attribute",
          "description": "是否可以清空选项",
          "values": ["true", "false"]
      },
      "collapse-tags": {
          "type": "attribute",
          "description": "多选时是否将选中值按文字的形式展示",
          "values": ["true", "false"]
      },
      "collapse-tags-tooltip": {
          "type": "attribute",
          "description": "当鼠标悬停于折叠标签的文本时，是否显示所有选中的标签。 要使用此属性，collapse-tags属性必须设定为 true",
          "values": ["true", "false"]
      },
      "multiple-limit": {
          "type": "attribute",
          "description": "multiple 属性设置为 true 时，代表多选场景下用户最多可以选择的项目数， 为 0 则不限制",
          "values": []
      },
      "name": {
          "type": "attribute",
          "description": "Select 输入框的原生 name 属性",
          "values": []
      },
      "effect": {
          "type": "attribute",
          "description": "Tooltip 主题，内置了 dark / light 两种",
          "values": ["string"]
      },
      "autocomplete": {
          "type": "attribute",
          "description": "Select 输入框的原生 autocomplete 属性",
          "values": []
      },
      "placeholder": {
          "type": "attribute",
          "description": "占位文字",
          "values": []
      },
      "filterable": {
          "type": "attribute",
          "description": "Select 组件是否可筛选",
          "values": ["true", "false"]
      },
      "allow-create": {
          "type": "attribute",
          "description": "是否允许用户创建新条目， 只有当 filterable 设置为 true 时才会生效。",
          "values": ["true", "false"]
      },
      "filter-method": {
          "type": "attribute",
          "description": "自定义筛选方法",
          "values": []
      },
      "remote": {
          "type": "attribute",
          "description": "其中的选项是否从服务器远程加载",
          "values": ["true", "false"]
      },
      "remote-method": {
          "type": "attribute",
          "description": "自定义远程搜索方法",
          "values": []
      },
      "remote-show-suffix": {
          "type": "attribute",
          "description": "远程搜索方法显示后缀图标",
          "values": ["true", "false"]
      },
      "loading": {
          "type": "attribute",
          "description": "是否正在从远程获取数据",
          "values": ["true", "false"]
      },
      "loading-text": {
          "type": "attribute",
          "description": "从服务器加载内容时显示的文本",
          "values": []
      },
      "no-match-text": {
          "type": "attribute",
          "description": "搜索条件无匹配时显示的文字，也可以使用 empty 插槽设置",
          "values": []
      },
      "no-data-text": {
          "type": "attribute",
          "description": "无选项时显示的文字，也可以使用 empty 插槽设置自定义内容",
          "values": []
      },
      "popper-class": {
          "type": "attribute",
          "description": "选择器下拉菜单的自定义类名",
          "values": []
      },
      "reserve-keyword": {
          "type": "attribute",
          "description": "当 multiple 和 filter被设置为 true 时，是否在选中一个选项后保留当前的搜索关键词",
          "values": ["true", "false"]
      },
      "default-first-option": {
          "type": "attribute",
          "description": "是否在输入框按下回车时，选择第一个匹配项。 需配合 filterable 或 remote 使用",
          "values": ["true", "false"]
      },
      "popper-append-to-body(已废弃)": {
          "type": "attribute",
          "description": "是否将弹出框插入至 body 元素 当弹出框的位置出现问题时，你可以尝试将该属性设置为false。",
          "values": ["true", "false"]
      },
      "teleported": {
          "type": "attribute",
          "description": "该下拉菜单是否使用teleport插入body元素",
          "values": ["true", "false"]
      },
      "persistent": {
          "type": "attribute",
          "description": "当下拉选择器未被激活并且persistent设置为false，选择器会被删除。",
          "values": ["true", "false"]
      },
      "automatic-dropdown": {
          "type": "attribute",
          "description": "对于不可过滤的 Select 组件，此属性决定是否在输入框获得焦点后自动弹出选项菜单",
          "values": ["true", "false"]
      },
      "clear-icon": {
          "type": "attribute",
          "description": "自定义清除图标",
          "values": []
      },
      "fit-input-width": {
          "type": "attribute",
          "description": "下拉框的宽度是否与输入框相同",
          "values": ["true", "false"]
      },
      "suffix-icon": {
          "type": "attribute",
          "description": "自定义后缀图标组件",
          "values": []
      },
      "suffix-transitiondeprecated": {
          "type": "attribute",
          "description": "下拉菜单显示/消失时后缀图标的动画",
          "values": ["true", "false"]
      },
      "tag-type": {
          "type": "attribute",
          "description": "标签类型",
          "values": ["success", "info", "warning", "danger"]
      },
      "validate-event": {
          "type": "attribute",
          "description": "是否触发表单验证",
          "values": ["true", "false"]
      },
      "placement": {
          "type": "attribute",
          "description": "下拉框出现的位置",
          "values": ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end", "right", "right-start", "right-end"]
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
          "description": "选项的标签，若不设置则默认与value相同",
          "values": []
      },
      "disabled": {
          "type": "attribute",
          "description": "是否禁用该选项",
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
          "description": "选中项绑定值",
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
      "size": {
          "type": "attribute",
          "description": "slider 包装器的大小，垂直模式下该属性不可用",
          "values": ["large", "default", "small"]
      },
      "input-size": {
          "type": "attribute",
          "description": "输入框的大小，如果设置了 size 属性，默认值自动取 size",
          "values": ["large", "default", "small"]
      },
      "show-stops": {
          "type": "attribute",
          "description": "是否显示间断点",
          "values": []
      },
      "show-tooltip": {
          "type": "attribute",
          "description": "是否显示提示信息",
          "values": []
      },
      "format-tooltip": {
          "type": "attribute",
          "description": "格式化提示信息",
          "values": []
      },
      "range": {
          "type": "attribute",
          "description": "是否开启选择范围",
          "values": []
      },
      "vertical": {
          "type": "attribute",
          "description": "垂直模式",
          "values": []
      },
      "height": {
          "type": "attribute",
          "description": "滑块高度，垂直模式必填",
          "values": []
      },
      "label": {
          "type": "attribute",
          "description": "屏幕阅读器标签",
          "values": []
      },
      "range-start-label": {
          "type": "attribute",
          "description": "当 range 为true时，屏幕阅读器标签开始的标记",
          "values": []
      },
      "range-end-label": {
          "type": "attribute",
          "description": "当 range 为true时，屏幕阅读器标签结尾的标记",
          "values": []
      },
      "format-value-text": {
          "type": "attribute",
          "description": "显示屏幕阅读器的 aria-valuenow 属性的格式",
          "values": []
      },
      "debounce": {
          "type": "attribute",
          "description": "输入时的去抖延迟，毫秒，仅在 show-input 等于 true 时有效",
          "values": []
      },
      "tooltip-class": {
          "type": "attribute",
          "description": "tooltip 的自定义类名",
          "values": []
      },
      "placement": {
          "type": "attribute",
          "description": "Tooltip 出现的位置",
          "values": ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end", "right", "right-start", "right-end"]
      },
      "marks": {
          "type": "attribute",
          "description": "标记， key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标记可以单独设置样式",
          "values": []
      },
      "validate-event": {
          "type": "attribute",
          "description": "输入时是否触发表单的校验",
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
  "el-switch": {
      "_self": {
          "description": "表示两种相互对立的状态间的切换，多用于触发「开/关」。",
          "text": ["<el-switch v-model=\"${1:model}\" active-color=\"${2:#13ce66}\" inactive-color=\"${3:#ff4949}\"></el-switch>"]
      },
      "v-model": {
          "type": "attribute",
          "description": "绑定值，必须等于 active-value 或 inactive-value，默认为 Boolean 类型",
          "values": []
      },
      "disabled": {
          "type": "attribute",
          "description": "是否禁用",
          "values": []
      },
      "loading": {
          "type": "attribute",
          "description": "是否显示加载中",
          "values": []
      },
      "size": {
          "type": "attribute",
          "description": "switch 的大小",
          "values": ["large", "default", "small"]
      },
      "width": {
          "type": "attribute",
          "description": "switch 的宽度",
          "values": []
      },
      "inline-prompt": {
          "type": "attribute",
          "description": "无论图标或文本是否显示在点内，只会呈现文本的第一个字符",
          "values": []
      },
      "active-icon": {
          "type": "attribute",
          "description": "switch 状态为 on 时所显示图标，设置此项会忽略 active-text",
          "values": []
      },
      "inactive-icon": {
          "type": "attribute",
          "description": "switch 状态为 off 时所显示图标，设置此项会忽略 inactive-text",
          "values": []
      },
      "active-text": {
          "type": "attribute",
          "description": "switch 打开时的文字描述",
          "values": []
      },
      "inactive-text": {
          "type": "attribute",
          "description": "switch 的状态为 off 时的文字描述",
          "values": []
      },
      "active-value": {
          "type": "attribute",
          "description": "switch 状态为 on 时的值",
          "values": []
      },
      "inactive-value": {
          "type": "attribute",
          "description": "switch的状态为 off 时的值",
          "values": []
      },
      "active-color": {
          "type": "attribute",
          "description": "当在 on 状态时的背景颜色(已废弃，请使用 CSS var --el-switch-on-color )",
          "values": []
      },
      "inactive-color": {
          "type": "attribute",
          "description": "off 状态时的背景颜色(已废弃，使用 CSS var --el-switch-of-color )",
          "values": []
      },
      "border-color": {
          "type": "attribute",
          "description": "开关的边框颜色 ( 已废弃，使用 CSS var --el-switch-border-color )",
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
      "before-change": {
          "type": "attribute",
          "description": "switch 状态改变前的钩子， 返回 false 或者返回 Promise 且被 reject 则停止切换",
          "values": []
      },
      "change": {
          "type": "method",
          "description": "switch 状态发生变化时的回调函数",
          "values": []
      }
  },
  "el-transfer": {
      "_self": {
          "description": "Transfer 的数据通过 data 属性传入。 数据需要是一个对象数组，每个对象有以下属性：key 为数据的唯一性标识，label 为显示文本，disabled 表示该项数据是否禁止被操作。 目标列表中的数据项会同步到绑定至 v-model 的变量，值为数据项的 key 所组成的数组。 当然，如果希望在初始状态时目标列表不为空，可以像本例一样为 v-model 绑定的变量赋予一个初始值。\n",
          "text": ["<el-transfer\n\tv-model=\"$1\"\n\t:data=\"$2\">\n\tfilterable\n\t:filter-method=\"\"\n\tfilter-placeholder=\"\">\n</el-transfer>"]
      },
      "v-model": {
          "type": "attribute",
          "description": "选中项绑定值",
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
          "description": "右侧列表元素的排序策略： 若为 original，则保持与数据源相同的顺序； 若为 push，则新加入的元素排在最后； 若为 unshift，则新加入的元素排在最前",
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
      "validate-event": {
          "type": "attribute",
          "description": "是否触发表单验证",
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
  "el-upload": {
      "_self": {
          "description": "通过点击或者拖拽上传文件。",
          "text": ["handleRemove(file, fileList) {\n\t},\n\thandlePreview(file) {\n\t},\n\thandleExceed(files, fileList) {\n\t},\n\tbeforeRemove(file, fileList) {\n\t\treturn this.$confirm('确定移除' + file.name);\n}"]
      },
      "action": {
          "type": "attribute",
          "description": "请求 URL",
          "values": []
      },
      "headers": {
          "type": "attribute",
          "description": "设置上传的请求头部",
          "values": []
      },
      "method": {
          "type": "attribute",
          "description": "设置上传请求方法",
          "values": ["'post'"]
      },
      "multiple": {
          "type": "attribute",
          "description": "是否支持多选文件",
          "values": ["false"]
      },
      "data": {
          "type": "attribute",
          "description": "上传时附带的额外参数",
          "values": []
      },
      "name": {
          "type": "attribute",
          "description": "上传的文件字段名",
          "values": ["'file'"]
      },
      "with-credentials": {
          "type": "attribute",
          "description": "支持发送 cookie 凭证信息",
          "values": ["false"]
      },
      "show-file-list": {
          "type": "attribute",
          "description": "是否显示已上传文件列表",
          "values": ["true"]
      },
      "drag": {
          "type": "attribute",
          "description": "是否启用拖拽上传",
          "values": ["false"]
      },
      "accept": {
          "type": "attribute",
          "description": "接受上传的文件类型（thumbnail-mode 模式下此参数无效）",
          "values": []
      },
      "on-preview": {
          "type": "attribute",
          "description": "点击文件列表中已上传的文件时的钩子",
          "values": []
      },
      "on-remove": {
          "type": "attribute",
          "description": "文件列表移除文件时的钩子",
          "values": []
      },
      "on-success": {
          "type": "attribute",
          "description": "文件上传成功时的钩子",
          "values": []
      },
      "on-error": {
          "type": "attribute",
          "description": "文件上传失败时的钩子",
          "values": []
      },
      "on-progress": {
          "type": "attribute",
          "description": "文件上传时的钩子",
          "values": []
      },
      "on-change": {
          "type": "attribute",
          "description": "文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用",
          "values": []
      },
      "on-exceed": {
          "type": "attribute",
          "description": "当超出限制时，执行的钩子函数",
          "values": []
      },
      "before-upload": {
          "type": "attribute",
          "description": "上传文件之前的钩子，参数为上传的文件， 若返回false或者返回 Promise 且被 reject，则停止上传。",
          "values": []
      },
      "before-remove": {
          "type": "attribute",
          "description": "删除文件之前的钩子，参数为上传的文件和文件列表， 若返回 false 或者返回 Promise 且被 reject，则停止删除。",
          "values": []
      },
      "v-model:file-list": {
          "type": "attribute",
          "description": "默认上传文件",
          "values": ["[]"]
      },
      "list-type": {
          "type": "attribute",
          "description": "文件列表的类型",
          "values": ["'text'"]
      },
      "auto-upload": {
          "type": "attribute",
          "description": "是否自动上传文件",
          "values": ["true"]
      },
      "http-request": {
          "type": "attribute",
          "description": "覆盖默认的 Xhr 行为，允许自行实现上传文件的请求",
          "values": []
      },
      "disabled": {
          "type": "attribute",
          "description": "是否禁用上传",
          "values": ["false"]
      },
      "limit": {
          "type": "attribute",
          "description": "允许上传文件的最大数量",
          "values": []
      }
  },
  "el-avatar": {
      "_self": {
          "description": "Avatar 组件可以用来代表人物或对象， 支持使用图片、图标或者文字作为 Avatar。",
          "text": ["<el-avatar>$1</el-avatar>"]
      }
  },
  "el-badge": {
      "_self": {
          "description": "按钮和图标上的数字或状态标记。",
          "text": ["<el-badge is-dot>$1</el-badge>"]
      },
      "value": {
          "type": "attribute",
          "description": "显示值",
          "values": ["''"]
      },
      "max": {
          "type": "attribute",
          "description": "最大值，超过最大值会显示 {max}+。 只有当 value 是数字类型时起作用。",
          "values": ["99"]
      },
      "is-dot": {
          "type": "attribute",
          "description": "是否显示小圆点。",
          "values": ["false"]
      },
      "hidden": {
          "type": "attribute",
          "description": "是否隐藏 Badge。",
          "values": ["false"]
      },
      "type": {
          "type": "attribute",
          "description": "badge type.",
          "values": ["danger"]
      }
  },
  "el-calendar": {
      "_self": {
          "description": "显示日期",
          "text": ["<el-calendar v-model=\"${1:value}\"></el-calendar>"]
      },
      "v-model": {
          "type": "attribute",
          "description": "选中项绑定值",
          "values": []
      },
      "range": {
          "type": "attribute",
          "description": "时间范围，包括开始时间与结束时间。 开始时间必须是周起始日，结束时间必须是周结束日，且时间跨度不能超过两个月。",
          "values": []
      }
  },
  "el-card": {
      "_self": {
          "description": "将信息聚合在卡片容器中展示。",
          "text": ["<el-card>\n\t<div slot=\"header\">$1</div>\n\t<div></div>\n</el-card>"]
      }
  },
  "el-carousel": {
      "_self": {
          "description": "在有限空间内，循环播放同一类型的图片、文字等内容",
          "text": ["<el-carousel type=\"card\" height=\"150px\">\n\t<el-carousel-item>\n\t\t$1\n\t</el-carousel-item>\n</el-carousel>"]
      },
      "height": {
          "type": "attribute",
          "description": "carousel 的高度",
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
          "values": ["hover", "click"]
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
          "description": "carousel 的类型",
          "values": ["card"]
      },
      "loop": {
          "type": "attribute",
          "description": "是否循环显示",
          "values": []
      },
      "direction": {
          "type": "attribute",
          "description": "展示的方向",
          "values": ["horizontal", "vertical"]
      },
      "pause-on-hover": {
          "type": "attribute",
          "description": "鼠标悬浮时暂停自动切换",
          "values": []
      },
      "change": {
          "type": "method",
          "description": "幻灯片切换时触发",
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
          "values": ["large", "default", "small"]
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
      "width": {
          "type": "attribute",
          "description": "列的宽度，不同行相同列的宽度按最大值设定（如无 border ，宽度包含标签与内容）",
          "values": []
      },
      "min-width": {
          "type": "attribute",
          "description": "列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列（如无 border，宽度包含标签与内容）",
          "values": []
      },
      "align": {
          "type": "attribute",
          "description": "列的内容对齐方式（如无 border，对标签和内容均生效）",
          "values": ["left", "center", "right"]
      },
      "label-align": {
          "type": "attribute",
          "description": "列的标签对齐方式，若不设置该项，则使用内容的对齐方式（如无 border，请使用 align 参数）",
          "values": ["left", "center", "right"]
      },
      "class-name": {
          "type": "attribute",
          "description": "列的内容自定义类名",
          "values": []
      },
      "label-class-name": {
          "type": "attribute",
          "description": "column label custom class name",
          "values": []
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
          "description": "描述",
          "values": []
      }
  },
  "el-image": {
      "_self": {
          "description": "图片容器，在保留所有原生 img 的特性下，支持懒加载，自定义占位、加载失败等",
          "text": ["<el-image\n\tstyle=\"${1:width: 100px; height: 100px}\"\n\t:src=\"${2:url}\"\n\t:fit=\"${3:fit}\">$4</el-image>"]
      },
      "src": {
          "type": "attribute",
          "description": "图片源地址，同原生属性一致",
          "values": []
      },
      "fit": {
          "type": "attribute",
          "description": "确定图片如何适应容器框，同原生 object-fit",
          "values": []
      },
      "hide-on-click-modal": {
          "type": "attribute",
          "description": "当开启 preview 功能时，是否可以通过点击遮罩层关闭 preview",
          "values": ["false"]
      },
      "loading": {
          "type": "attribute",
          "description": "浏览器加载图像的策略，和 浏览器原生能力一致",
          "values": []
      },
      "lazy": {
          "type": "attribute",
          "description": "是否使用懒加载",
          "values": ["false"]
      },
      "scroll-container": {
          "type": "attribute",
          "description": "开启懒加载功能后，监听 scroll 事件的容器",
          "values": ["最近一个 overflow 值为 auto 或 scroll 的父元素"]
      },
      "alt": {
          "type": "attribute",
          "description": "原生属性 alt",
          "values": []
      },
      "referrer-policy": {
          "type": "attribute",
          "description": "原生属性 referrerPolicy",
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
      "initial-index": {
          "type": "attribute",
          "description": "初始预览图像索引，小于 url-list 的长度",
          "values": ["0"]
      },
      "close-on-press-escape": {
          "type": "attribute",
          "description": "是否可以通过按下 ESC 关闭 Image Viewer",
          "values": ["true"]
      },
      "preview-teleported": {
          "type": "attribute",
          "description": "image-viewer 是否插入至 body 元素上。 嵌套的父元素属性会发生修改时应该将此属性设置为 true",
          "values": ["false"]
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
      },
      "switch": {
          "type": "method",
          "description": "切换图像时触发。",
          "values": []
      },
      "close": {
          "type": "method",
          "description": "当点击 X 按钮或者在hide-on-click-modal为 true 时点击遮罩层时触发",
          "values": []
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
          "values": ["false"]
      },
      "background": {
          "type": "attribute",
          "description": "是否为分页按钮添加背景色",
          "values": ["false"]
      },
      "v-model:page-size": {
          "type": "attribute",
          "description": "每页显示条目个数",
          "values": ["10"]
      },
      "default-page-size": {
          "type": "attribute",
          "description": "每页显示条目数的初始值",
          "values": []
      },
      "total": {
          "type": "attribute",
          "description": "总条目数",
          "values": []
      },
      "page-count": {
          "type": "attribute",
          "description": "总页数， total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-sizes 的更改，则需要使用 total 属性",
          "values": []
      },
      "pager-count": {
          "type": "attribute",
          "description": "设置最大页码按钮数。 页码按钮的数量，当总页数超过该值时会折叠",
          "values": ["7"]
      },
      "v-model:current-page": {
          "type": "attribute",
          "description": "当前页数",
          "values": ["1"]
      },
      "default-current-page": {
          "type": "attribute",
          "description": "当前页数的初始值",
          "values": []
      },
      "layout": {
          "type": "attribute",
          "description": "组件布局，子组件名用逗号分隔",
          "values": ["prev, pager, next, jumper, ->, total"]
      },
      "page-sizes": {
          "type": "attribute",
          "description": "每页显示个数选择器的选项设置",
          "values": ["[10, 20, 30, 40, 50, 100]"]
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
      "prev-icon": {
          "type": "attribute",
          "description": "上一页的图标， 比 prev-text 优先级更高",
          "values": ["ArrowLeft"]
      },
      "next-text": {
          "type": "attribute",
          "description": "替代图标显示的下一页文字",
          "values": []
      },
      "next-icon": {
          "type": "attribute",
          "description": "下一页的图标， 比 next-text 优先级更高",
          "values": ["ArrowRight"]
      },
      "disabled": {
          "type": "attribute",
          "description": "是否禁用分页",
          "values": ["false"]
      },
      "hide-on-single-page": {
          "type": "attribute",
          "description": "只有一页时是否隐藏",
          "values": []
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
      "_self": {
          "description": "用于展示操作进度，告知用户当前状态和预期。",
          "text": ["<el-progress :text-inside=\"true\" :stroke-width=\"18\" :percentage=\"70\"></el-progress>"]
      },
      "percentage": {
          "type": "attribute",
          "description": "百分比，必填",
          "values": ["(0-100)"]
      },
      "type": {
          "type": "attribute",
          "description": "进度条类型",
          "values": ["line", "circle", "dashboard"]
      },
      "stroke-width": {
          "type": "attribute",
          "description": "进度条的宽度",
          "values": []
      },
      "text-inside": {
          "type": "attribute",
          "description": "进度条显示文字内置在进度条内（仅 type 为 'line' 时可用）",
          "values": []
      },
      "status": {
          "type": "attribute",
          "description": "进度条当前状态",
          "values": ["success", "exception", "warning"]
      },
      "indeterminate": {
          "type": "attribute",
          "description": "是否为动画进度条",
          "values": []
      },
      "duration": {
          "type": "attribute",
          "description": "控制动画进度条速度",
          "values": []
      },
      "color": {
          "type": "attribute",
          "description": "进度条背景色 进度条背景色 （会覆盖 status 状态颜色）",
          "values": []
      },
      "width": {
          "type": "attribute",
          "description": "环形进度条画布宽度（只在 type 为 circle 或 dashboard 时可用）",
          "values": []
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
  "el-skeleton": {
      "_self": {
          "description": "在需要等待加载内容的位置设置一个骨架屏，某些场景下比 Loading 的视觉效果更好。",
          "text": ["<el-skeleton>$1</el-skeleton>"]
      },
      "animated": {
          "type": "attribute",
          "description": "是否使用动画",
          "values": ["false"]
      },
      "count": {
          "type": "attribute",
          "description": "渲染多少个 template, 建议使用尽可能小的数字",
          "values": ["1"]
      },
      "loading": {
          "type": "attribute",
          "description": "是否显示加载结束后的 DOM 结构",
          "values": ["false"]
      },
      "rows": {
          "type": "attribute",
          "description": "骨架屏段落数量",
          "values": ["3"]
      },
      "throttle": {
          "type": "attribute",
          "description": "渲染延迟（以毫秒为单位）",
          "values": ["0"]
      }
  },
  "el-skeleton-item": {
      "_self": {
          "description": "",
          "text": ["<el-skeleton-item>$1</el-skeleton-item>"]
      },
      "variant": {
          "type": "attribute",
          "description": "当前渲染 skeleton 类型",
          "values": ["'text'"]
      }
  },
  "el-table": {
      "_self": {
          "description": "用于展示多条结构类似的数据， 可对数据进行排序、筛选、对比或其他自定义操作。",
          "text": ["<el-table\n\t:data=\"${1:data}\"\n\tstyle=\"width: 100%\">\n\t<el-table-column\n\t\tprop=\"${2:prop}\"\n\t\tlabel=\"${3:label}\"\n\t\twidth=\"${4:width}\">\n\t</el-table-column>\n</el-table>"]
      },
      "data": {
          "type": "attribute",
          "description": "显示的数据",
          "values": []
      },
      "height": {
          "type": "attribute",
          "description": "Table 的高度， 默认为自动高度。 如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。",
          "values": []
      },
      "max-height": {
          "type": "attribute",
          "description": "Table 的最大高度。 合法的值为数字或者单位为 px 的高度。",
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
          "values": ["large", "default", "small"]
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
          "description": "行数据的 Key，用来优化 Table 的渲染； 在使用reserve-selection功能与显示树形数据时，该属性是必填的。 类型为 String 时，支持多层访问：user.info.id，但不支持 user.info[0].id，此种情况请使用 Function。",
          "values": []
      },
      "empty-text": {
          "type": "attribute",
          "description": "空数据时显示的文本内容， 也可以通过 #empty 设置",
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
          "description": "默认的排序列的 prop 和顺序。 它的 prop 属性指定默认的排序的列，order 指定默认排序的顺序",
          "values": ["(order: 'ascending' 'descending')"]
      },
      "tooltip-effect": {
          "type": "attribute",
          "description": "溢出的 tooltip 的 effect",
          "values": ["dark", "light"]
      },
      "tooltip-options": {
          "type": "attribute",
          "description": "溢出 tooltip 的选项，参见下述 tooltip 组件",
          "values": ["请参考 tooltip"]
      },
      "show-summary": {
          "type": "attribute",
          "description": "是否在表尾显示合计行",
          "values": []
      },
      "sum-text": {
          "type": "attribute",
          "description": "显示摘要行第一列的文本",
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
          "description": "在多选表格中，当仅有部分行被选中时，点击表头的多选框时的行为。 若为 true，则选中所有行；若为 false，则取消选择所有行",
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
          "description": "加载子节点数据的函数，lazy 为 true 时生效",
          "values": []
      },
      "tree-props": {
          "type": "attribute",
          "description": "渲染嵌套数据的配置选项",
          "values": []
      },
      "table-layout": {
          "type": "attribute",
          "description": "设置表格单元、行和列的布局方式",
          "values": ["fixed", "auto"]
      },
      "scrollbar-always-on": {
          "type": "attribute",
          "description": "总是显示滚动条",
          "values": []
      },
      "flexible": {
          "type": "attribute",
          "description": "确保主轴的最小尺寸",
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
      "_self": {
          "description": "",
          "text": ["<el-table-column\n\t\tprop=\"${2:prop}\"\n\t\tlabel=\"${3:label}\"\n\t\twidth=\"${4:width}\">\n\t</el-table-column>"]
      },
      "type": {
          "type": "attribute",
          "description": "对应列的类型。 如果设置了selection则显示多选框； 如果设置了 index 则显示该行的索引（从 1 开始计算）； 如果设置了 expand 则显示为一个可展开的按钮",
          "values": ["selection", "index", "expand"]
      },
      "index": {
          "type": "attribute",
          "description": "如果设置了 type=index，可以通过传递 index 属性来自定义索引",
          "values": []
      },
      "label": {
          "type": "attribute",
          "description": "显示的标题",
          "values": []
      },
      "column-key": {
          "type": "attribute",
          "description": "column 的 key， column 的 key， 如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件",
          "values": []
      },
      "prop": {
          "type": "attribute",
          "description": "字段名称 对应列内容的字段名， 也可以使用 property属性",
          "values": []
      },
      "width": {
          "type": "attribute",
          "description": "对应列的宽度",
          "values": []
      },
      "min-width": {
          "type": "attribute",
          "description": "对应列的最小宽度， 对应列的最小宽度， 与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列",
          "values": []
      },
      "fixed": {
          "type": "attribute",
          "description": "列是否固定在左侧或者右侧。 true 表示固定在左侧",
          "values": ["true", "'left'", "'right'"]
      },
      "render-header": {
          "type": "attribute",
          "description": "列标题 Label 区域渲染使用的 Function",
          "values": []
      },
      "sortable": {
          "type": "attribute",
          "description": "对应列是否可以排序， 如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件",
          "values": ["custom"]
      },
      "sort-method": {
          "type": "attribute",
          "description": "指定数据按照哪个属性进行排序，仅当sortable设置为true的时候有效。 应该如同 Array.sort 那样返回一个 Number",
          "values": []
      },
      "sort-by": {
          "type": "attribute",
          "description": "指定数据按照哪个属性进行排序，仅当 sortable 设置为 true 且没有设置 sort-method 的时候有效。 如果 sort-by 为数组，则先按照第 1 个属性排序，如果第 1 个相等，再按照第 2 个排序，以此类推",
          "values": []
      },
      "sort-orders": {
          "type": "attribute",
          "description": "数据在排序时所使用排序策略的轮转顺序，仅当 sortable 为 true 时有效。 需传入一个数组，随着用户点击表头，该列依次按照数组中元素的顺序进行排序",
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
          "values": ["object2.2.28"]
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
          "description": "仅对  type=selection 的列有效， 请注意， 需指定 row-key 来让这个功能生效。",
          "values": []
      },
      "filters": {
          "type": "attribute",
          "description": "数据过滤的选项， 数组格式，数组中的元素需要有 text 和 value 属性。 数组中的每个元素都需要有 text 和 value 属性。",
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
          "description": "数据过滤使用的方法， 如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示。",
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
          "values": ["large", "default", "small"]
      },
      "effect": {
          "type": "attribute",
          "description": "主题",
          "values": ["dark", "light", "plain"]
      },
      "round": {
          "type": "attribute",
          "description": "Tag 是否为圆形",
          "values": []
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
  "el-timeline": {
      "_self": {
          "description": "可视化地呈现时间流信息。",
          "text": ["<el-timeline :reverse=\"reverse\">\n\t<el-timeline-item\n\t\tv-for=\"(activity, index) in activities\"\n\t\t:key=\"index\"\n\t\t:timestamp=\"activity.timestamp\">\n\t\t{{activity.content}}\n\t</el-timeline-item>\n</el-timeline>"]
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
      "center": {
          "type": "attribute",
          "description": "是否垂直居中",
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
          "description": "自定义图标",
          "values": []
      },
      "hollow": {
          "type": "attribute",
          "description": "是否空心点",
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
          "description": "对树节点进行筛选时执行的方法， 返回 false 则表示这个节点会被隐藏",
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
      "icon": {
          "type": "attribute",
          "description": "自定义树节点图标组件",
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
          "description": "判断节点能否被拖拽 如果返回 false ，节点不能被拖动",
          "values": []
      },
      "allow-drop": {
          "type": "attribute",
          "description": "拖拽时判定目标节点能否成为拖动目标位置。 如果返回 false ，拖动节点不能被拖放到目标节点。 type 参数有三种情况：'prev'、'inner' 和 'next'，分别表示放置在目标节点前、插入至目标节点和放置在目标节点后",
          "values": []
      },
      "node-click": {
          "type": "method",
          "description": "当节点被点击的时候触发",
          "values": []
      },
      "node-contextmenu": {
          "type": "method",
          "description": "当某一节点被鼠标右键点击时会触发该事件",
          "values": []
      },
      "check-change": {
          "type": "method",
          "description": "当复选框被点击的时候触发",
          "values": []
      },
      "check": {
          "type": "method",
          "description": "点击节点复选框之后触发",
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
  "el-tree-select": {
      "_self": {
          "description": "含有下拉菜单的树形选择器，结合了 el-tree 和 el-select 两个组件的功能。",
          "text": ["<el-tree-select v-model=\"$1\" :data=\"$2\" />"]
      },
      "cacheData(>)": {
          "type": "attribute",
          "description": "懒加载节点的缓存数据，结构与数据相同，用于获取未加载数据的标签",
          "values": []
      }
  },
  "el-backtop": {
      "_self": {
          "description": "返回页面顶部的操作按钮。",
          "text": ["<el-backtop target=\"${1:.page-component__scroll .el-scrollbar__wrap}\">$2</el-backtop>"]
      },
      "target": {
          "type": "attribute",
          "description": "触发滚动的对象",
          "values": []
      },
      "visibility-height": {
          "type": "attribute",
          "description": "滚动高度达到此参数值才出现",
          "values": ["200"]
      },
      "right": {
          "type": "attribute",
          "description": "控制其显示位置，距离页面右边距",
          "values": ["40"]
      },
      "bottom": {
          "type": "attribute",
          "description": "控制其显示位置，距离页面底部距离",
          "values": ["40"]
      },
      "click": {
          "type": "method",
          "description": "点击按钮触发的事件",
          "values": []
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
          "values": ["", ""]
      },
      "separator-icon": {
          "type": "attribute",
          "description": "图标分隔符的组件或组件名",
          "values": []
      }
  },
  "el-dropdown": {
      "_self": {
          "description": "将动作或菜单折叠到下拉菜单中。",
          "text": ["<el-dropdown>\n\t<span class=\"el-dropdown-link\">\n\t\tDropdown List\n\t\t<el-icon class=\"el-icon--right\">\n\t\t\t<arrow-down />\n\t\t</el-icon>\n\t</span>\n\t<template #dropdown>\n\t\t<el-dropdown-menu>\n\t\t\t<el-dropdown-item>Action 1</el-dropdown-item>\n\t\t</el-dropdown-menu>\n\t</template>\n</el-dropdown>"]
      },
      "type": {
          "type": "attribute",
          "description": "菜单按钮类型，同 Button 组件一样，仅在 split-button 为 true 的情况下有效。",
          "values": []
      },
      "size": {
          "type": "attribute",
          "description": "菜单尺寸，在 split-button 为 true 的情况下也对触发按钮生效。",
          "values": ["large", "default", "small"]
      },
      "max-height": {
          "type": "attribute",
          "description": "菜单最大高度",
          "values": []
      },
      "split-button": {
          "type": "attribute",
          "description": "下拉触发元素呈现为按钮组",
          "values": []
      },
      "disabled": {
          "type": "attribute",
          "description": "是否禁用",
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
          "values": ["hover", "click", "contextmenu"]
      },
      "hide-on-click": {
          "type": "attribute",
          "description": "是否在点击菜单项后隐藏菜单",
          "values": []
      },
      "show-timeout": {
          "type": "attribute",
          "description": "展开下拉菜单的延时，仅在 trigger 为 hover 时有效",
          "values": []
      },
      "hide-timeout": {
          "type": "attribute",
          "description": "收起下拉菜单的延时（仅在 trigger 为 hover 时有效）",
          "values": []
      },
      "role": {
          "type": "attribute",
          "description": "下拉菜单的 ARIA 属性。 根据具体场景，您可能想要将此更改为“navigation”",
          "values": []
      },
      "tabindex": {
          "type": "attribute",
          "description": "Dropdown 组件的 tabindex",
          "values": []
      },
      "popper-class": {
          "type": "attribute",
          "description": "自定义浮层类名",
          "values": []
      },
      "popper-options": {
          "type": "attribute",
          "description": "popper.js 参数",
          "values": ["请参考 popper.js 文档"]
      },
      "teleported": {
          "type": "attribute",
          "description": "是否将下拉列表插入至 body 元素",
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
  "el-dropdown-item": {
      "_self": {
          "description": "",
          "text": ["<el-dropdown-item></el-dropdown-item>"]
      },
      "command": {
          "type": "attribute",
          "description": "派发到command回调函数的指令参数",
          "values": []
      },
      "disabled": {
          "type": "attribute",
          "description": "是否禁用",
          "values": []
      },
      "divided": {
          "type": "attribute",
          "description": "是否显示分隔符",
          "values": []
      },
      "icon": {
          "type": "attribute",
          "description": "自定义图标",
          "values": []
      }
  },
  "el-menu": {
      "_self": {
          "description": "为网站提供导航功能的菜单。",
          "text": ["<el-menu :default-active=\"${1:activeIndex}\" mode=\"horizontal\" @select=\"handleSelect\">\n\t<el-menu-item index=\"1\"></el-menu-item>\n\t<el-submenu index=\"2\">\n\t\t<template slot=\"title\"></template>\n\t\t<el-menu-item index=\"2-1\"></el-menu-item>\n\t</el-submenu>\n</el-menu>"]
      },
      "mode": {
          "type": "attribute",
          "description": "菜单展示模式",
          "values": ["horizontal", "vertical"]
      },
      "collapse": {
          "type": "attribute",
          "description": "是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）",
          "values": []
      },
      "ellipsis": {
          "type": "attribute",
          "description": "是否省略多余的子项（仅在横向模式生效）",
          "values": []
      },
      "background-color": {
          "type": "attribute",
          "description": "菜单的背景颜色（十六进制格式）（已被废弃，使用--bg-color）",
          "values": []
      },
      "text-color": {
          "type": "attribute",
          "description": "文字颜色（十六进制格式）（已被废弃，使用--text-color）",
          "values": []
      },
      "active-text-color": {
          "type": "attribute",
          "description": "活动菜单项的文本颜色（十六进制格式）（已被废弃，使用--active-color）",
          "values": []
      },
      "default-active": {
          "type": "attribute",
          "description": "页面加载时默认激活菜单的 index",
          "values": []
      },
      "default-openeds": {
          "type": "attribute",
          "description": "默认打开的 sub-menu 的 index 的数组",
          "values": []
      },
      "unique-opened": {
          "type": "attribute",
          "description": "是否只保持一个子菜单的展开",
          "values": []
      },
      "menu-trigger": {
          "type": "attribute",
          "description": "子菜单打开的触发方式，只在 mode 为 horizontal 时有效。",
          "values": ["hover", "click"]
      },
      "router": {
          "type": "attribute",
          "description": "是否启用 vue-router 模式。 启用该模式会在激活导航时以 index 作为 path 进行路由跳转 使用 default-active 来设置加载时的激活项。",
          "values": []
      },
      "collapse-transition": {
          "type": "attribute",
          "description": "是否开启折叠动画",
          "values": []
      },
      "popper-effect": {
          "type": "attribute",
          "description": "Tooltip 主题，内置了 dark / light 两种主题",
          "values": ["dark", "light"]
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
  "el-steps": {
      "_self": {
          "description": "引导用户按照流程完成任务的分步导航条， 可根据实际应用场景设定步骤，步骤不得少于 2 步。",
          "text": ["<el-steps :active=\"active\" finish-status=\"success\">\n\t<el-step title=\"step1\" icon=\"el-icon-edit\"></el-step>\n</el-steps>"]
      },
      "space": {
          "type": "attribute",
          "description": "每个 step 的间距，不填写将自适应间距。 支持百分比。",
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
          "description": "描述文案",
          "values": []
      },
      "icon": {
          "type": "attribute",
          "description": "Step 组件的自定义图标。 也支持 slot 方式写入",
          "values": []
      },
      "status": {
          "type": "attribute",
          "description": "设置当前步骤的状态， 不设置则根据 steps 确定状态",
          "values": ["wait", "process", "finish", "error", "success"]
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
          "description": "切换标签之前的钩子函数， 若返回 false  或者返回被 reject 的 Promise，则阻止切换。",
          "values": []
      },
      "tab-click": {
          "type": "method",
          "description": "tab 被选中时触发",
          "values": []
      },
      "tab-change": {
          "type": "method",
          "description": "activeName 改变时触发",
          "values": []
      },
      "tab-remove": {
          "type": "method",
          "description": "点击 tab 移除按钮时触发",
          "values": []
      },
      "tab-add": {
          "type": "method",
          "description": "点击 tab 新增按钮时触发",
          "values": []
      },
      "edit": {
          "type": "method",
          "description": "点击 tab 的新增或移除按钮后触发",
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
  "el-alert": {
      "_self": {
          "description": "用于页面中展示重要的提示信息。",
          "text": ["<el-alert\n\ttitle=\"success\"\n\ttype=\"success\"\n\tshow-icon>\n</el-alert>"]
      },
      "title": {
          "type": "attribute",
          "description": "Alert 标题。",
          "values": []
      },
      "type": {
          "type": "attribute",
          "description": "Alert 类型。",
          "values": ["info"]
      },
      "description": {
          "type": "attribute",
          "description": "描述性文本",
          "values": []
      },
      "closable": {
          "type": "attribute",
          "description": "是否可以关闭",
          "values": ["true"]
      },
      "center": {
          "type": "attribute",
          "description": "文字是否居中",
          "values": ["false"]
      },
      "close-text": {
          "type": "attribute",
          "description": "自定义关闭按钮文本",
          "values": []
      },
      "show-icon": {
          "type": "attribute",
          "description": "是否显示类型图标",
          "values": ["false"]
      },
      "effect": {
          "type": "attribute",
          "description": "主题样式",
          "values": ["'light'"]
      },
      "close": {
          "type": "method",
          "description": "关闭 Alert 时触发的事件",
          "values": []
      }
  },
  "el-dialog": {
      "_self": {
          "description": "在保留当前页面状态的情况下，告知用户并承载相关操作。",
          "text": ["<el-dialog\n\ttitle=\"\"\n\tv-model=\"${1:visible}\"\n\twidth=\"${2:width}\">\n\t<el-form :model=\"form\">\n\t\t<el-form-item label=\"\" :label-width=\"\">\n\t\t\t<el-input v-model=\"\"></el-input>\n\t\t</el-form-item>\n\t</el-form>\n\t<template #footer>\n\t\t<el-button @click=\"visible = false\">取 消</el-button>\n\t\t<el-button type=\"primary\" @click=\"visible = false\">确 定</el-button>\n\t</template>\n</el-dialog>"]
      },
      "v-model": {
          "type": "attribute",
          "description": "是否显示 Dialog",
          "values": []
      },
      "title": {
          "type": "attribute",
          "description": "Dialog 对话框 Dialog 的标题， 也可通过具名 slot （见下表）传入",
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
      "append-to-body": {
          "type": "attribute",
          "description": "Dialog 自身是否插入至 body 元素上。 嵌套的 Dialog 必须指定该属性并赋值为 true",
          "values": []
      },
      "lock-scroll": {
          "type": "attribute",
          "description": "是否在 Dialog 出现时将 body 滚动锁定",
          "values": []
      },
      "custom-classdeprecated": {
          "type": "attribute",
          "description": "Dialog 的自定义类名",
          "values": []
      },
      "open-delay": {
          "type": "attribute",
          "description": "Dialog 打开的延时时间，单位毫秒",
          "values": []
      },
      "close-delay": {
          "type": "attribute",
          "description": "Dialog 关闭的延时时间，单位毫秒",
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
          "description": "关闭前的回调，会暂停 Dialog 的关闭. 回调函数内执行 done 参数方法的时候才是真正关闭对话框的时候.",
          "values": []
      },
      "draggable": {
          "type": "attribute",
          "description": "为 Dialog 启用可拖拽功能",
          "values": []
      },
      "center": {
          "type": "attribute",
          "description": "是否让 Dialog 的 header 和 footer 部分居中排列",
          "values": []
      },
      "align-center": {
          "type": "attribute",
          "description": "是否水平垂直对齐对话框",
          "values": []
      },
      "destroy-on-close": {
          "type": "attribute",
          "description": "当关闭 Dialog 时，销毁其中的元素",
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
      "_self": {
          "description": "有些时候, Dialog 组件并不满足我们的需求, 比如你的表单很长, 亦或是你需要临时展示一些文档, Drawer 拥有和 Dialog 几乎相同的 API, 在 UI 上带来不一样的体验.",
          "text": ["<el-drawer\n\ttitle=\"${1:我是标题}\"\n\t:visible.sync=\"${2:drawer}\"\n\t:direction=\"${3:direction}\"\n\t:before-close=\"${4:handleClose}\">\n\t${5:<span>我来啦!</span>}\n</el-drawer>"]
      },
      "v-model": {
          "type": "attribute",
          "description": "是否显示 Drawer",
          "values": []
      },
      "append-to-body": {
          "type": "attribute",
          "description": "Drawer 自身是否插入至 body 元素上。嵌套的 Drawer 必须指定该属性并赋值为 true",
          "values": []
      },
      "lock-scroll": {
          "type": "attribute",
          "description": "是否在 Drawer 出现时将 body 滚动锁定",
          "values": []
      },
      "before-close": {
          "type": "attribute",
          "description": "关闭前的回调，会暂停 Drawer 的关闭",
          "values": []
      },
      "close-on-click-modal": {
          "type": "attribute",
          "description": "是否可以通过点击 modal 关闭 Drawer",
          "values": []
      },
      "close-on-press-escape": {
          "type": "attribute",
          "description": "是否可以通过按下 ESC 关闭 Drawer",
          "values": []
      },
      "open-delay": {
          "type": "attribute",
          "description": "Drawer 打开的延时时间，单位毫秒",
          "values": []
      },
      "close-delay": {
          "type": "attribute",
          "description": "Drawer 关闭的延时时间，单位毫秒",
          "values": []
      },
      "custom-classdeprecated": {
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
      "with-header": {
          "type": "attribute",
          "description": "控制是否显示 header 栏, 默认为 true, 当此项为 false 时, title attribute 和 title slot 均不生效",
          "values": []
      },
      "modal-class": {
          "type": "attribute",
          "description": "遮罩层的自定义类名",
          "values": []
      },
      "z-index": {
          "type": "attribute",
          "description": "设置 z-index",
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
          "description": "点击某个元素弹出一个简单的气泡确认框",
          "text": ["<el-popconfirm confirm-button-text=\"确定\" cancel-button-text=\"取消\" title=\"确定删除?\" icon=\"\" @confirm=\"confirm\" @cancel=\"cancel\">\n\t<template #reference>\n\t\t<el-button type=\"danger\" text><el-icon><Delete></Delete></el-icon> 删除</el-button>\n\t</template>\n</el-popconfirm>"]
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
      "teleported": {
          "type": "attribute",
          "description": "是否将 popover 的下拉列表插入至 body 元素",
          "values": ["true", "false"]
      },
      "persistent": {
          "type": "attribute",
          "description": "当 popover 组件长时间不触发且 persistent 属性设置为 false 时, popover 将会被删除",
          "values": []
      },
      "width": {
          "type": "attribute",
          "description": "弹出窗口宽度",
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
  "el-popover": {
      "_self": {
          "description": "与Tooltip相似，Popover也是基于ElPopper的构建。 因此对于重复属性，请参考 Tooltip 的文档，在此文档中不做详尽解释。",
          "text": ["<el-popover\n\tref=\"popover4\"\n\tplacement=\"right\"\n\twidth=\"400\"\n\ttrigger=\"click\">\n\t<div></div>\n</el-popover>"]
      },
      "trigger": {
          "type": "attribute",
          "description": "触发方式",
          "values": ["click", "focus", "hover", "contextmenu"]
      },
      "title": {
          "type": "attribute",
          "description": "标题",
          "values": []
      },
      "effect": {
          "type": "attribute",
          "description": "Tooltip 主题，Element Plus 内置了 dark / light 两种主题",
          "values": ["string"]
      },
      "content": {
          "type": "attribute",
          "description": "显示的内容，也可以通过写入默认 slot 修改显示内容",
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
      "v-model:visible": {
          "type": "attribute",
          "description": "Popover 是否显示",
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
      "show-arrow": {
          "type": "attribute",
          "description": "是否显示 Tooltip 箭头， 欲了解更多信息，请参考 ElPopper",
          "values": []
      },
      "popper-options": {
          "type": "attribute",
          "description": "popper.js 的参数",
          "values": ["详情参考 popper.js"]
      },
      "popper-class": {
          "type": "attribute",
          "description": "为 popper 添加类名",
          "values": []
      },
      "propper-style": {
          "type": "attribute",
          "description": "为 popper 自定义样式",
          "values": []
      },
      "show-after": {
          "type": "attribute",
          "description": "在触发后多久显示内容，单位毫秒",
          "values": []
      },
      "hide-after": {
          "type": "attribute",
          "description": "延迟关闭，单位毫秒",
          "values": []
      },
      "auto-close": {
          "type": "attribute",
          "description": "tooltip 出现后自动隐藏延时，单位毫秒",
          "values": []
      },
      "tabindex": {
          "type": "attribute",
          "description": "Popover 组件的 tabindex",
          "values": []
      },
      "teleported": {
          "type": "attribute",
          "description": "是否将 popover 的下拉列表插入至 body 元素",
          "values": ["true", "false"]
      },
      "persistent": {
          "type": "attribute",
          "description": "当 popover 组件长时间不触发且 persistent 属性设置为 false 时, popover 将会被删除",
          "values": []
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
      "_self": {
          "description": "常用于展示鼠标 hover 时的提示信息。",
          "text": ["<el-tooltip effect=\"dark\" content=\"$1\" placement=\"${2:top}\">\n<div slot=\"content\">$3</div>\n\t<el-button>$4</el-button>\n</el-tooltip>"]
      },
      "append-to": {
          "type": "attribute",
          "description": "指示 Tooltip 的内容将附加在哪一个网页元素上",
          "values": []
      },
      "effect": {
          "type": "attribute",
          "description": "Tooltip 主题，内置了 dark / light 两种",
          "values": ["dark", "light"]
      },
      "content": {
          "type": "attribute",
          "description": "显示的内容，也可被 slot#content 覆盖",
          "values": []
      },
      "raw-content": {
          "type": "attribute",
          "description": "content 中的内容是否作为 HTML 字符串处理",
          "values": []
      },
      "placement": {
          "type": "attribute",
          "description": "Tooltip 组件出现的位置",
          "values": ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end", "right", "right-start", "right-end"]
      },
      "v-model:visible": {
          "type": "attribute",
          "description": "Tooltip 组件可见性",
          "values": []
      },
      "disabled": {
          "type": "attribute",
          "description": "Tooltip 组件是否禁用",
          "values": []
      },
      "offset": {
          "type": "attribute",
          "description": "出现位置的偏移量",
          "values": []
      },
      "transition": {
          "type": "attribute",
          "description": "动画名称",
          "values": []
      },
      "popper-options": {
          "type": "attribute",
          "description": "popper.js 参数",
          "values": ["详见 popper.js 文档"]
      },
      "show-after": {
          "type": "attribute",
          "description": "在触发后多久显示内容，单位毫秒",
          "values": []
      },
      "show-arrow": {
          "type": "attribute",
          "description": "tooltip 的内容是否有箭头",
          "values": ["true", "false"]
      },
      "hide-after": {
          "type": "attribute",
          "description": "延迟关闭，单位毫秒",
          "values": []
      },
      "auto-close": {
          "type": "attribute",
          "description": "tooltip 出现后自动隐藏延时，单位毫秒",
          "values": []
      },
      "manual": {
          "type": "attribute",
          "description": "是否手动控制 Tooltip。 如果设置为 true，则 mouseenter 和 mouseleave 将不会生效",
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
      "tabindex": {
          "type": "attribute",
          "description": "Tooltip 的 tabindex",
          "values": []
      },
      "teleported": {
          "type": "attribute",
          "description": "是否使用 teleport。设置成 true则会被追加到 append-to 的位置",
          "values": ["true", "false"]
      },
      "trigger": {
          "type": "attribute",
          "description": "如何触发（展示） Tooltip",
          "values": ["hover", "click", "focus", "contextmenu"]
      },
      "virtual-triggering": {
          "type": "attribute",
          "description": "指示是否启用虚拟触发器",
          "values": []
      },
      "virtual-ref": {
          "type": "attribute",
          "description": "代表 tooltip 所要附加的参照元素",
          "values": []
      },
      "trigger-keys": {
          "type": "attribute",
          "description": "当鼠标点击或者聚焦在触发元素上时， 可以定义一组键盘按键并且通过它们来控制 Tooltip 的显示",
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
          "values": ["horizontal"]
      },
      "border-style": {
          "type": "attribute",
          "description": "设置分隔符样式",
          "values": ["solid"]
      },
      "content-position": {
          "type": "attribute",
          "description": "自定义分隔线内容的位置",
          "values": ["center"]
      }
  },
  "el-radio-group": {
      "_self": {
          "description": "",
          "text": ["<el-radio-group v-model=\"${1:model}\">\n\t<el-radio :label=\"${2:label}\">$3</el-radio>\n</el-radio-group>"]
      }
  },
  "el-radio-button": {
      "_self": {
          "description": "",
          "text": ["<el-radio-button label=\"${1:label}\"></el-radio-button>"]
      }
  },
  "el-checkbox-group": {
      "_self": {
          "description": "",
          "text": ["<el-checkbox-group v-model=\"$1\">\n\t<el-checkbox :label=\"${2:label}\" :key=\"${3:key}\">$3</el-checkbox>\n</el-checkbox-group>"]
      }
  },
  "el-checkbox-button": {
      "_self": {
          "description": "",
          "text": ["<el-checkbox-button :label=\"$1\" :key=\"$2\" >$3</el-checkbox-button>"]
      }
  },
  "el-input-number": {
      "_self": {
          "description": "",
          "text": ["<el-input-number v-model=\"$1\" @change=\"${2:inputChange}\" :min=\"${3:1}\" :max=\"${4:10}\" label=\"${5:label}\"></el-input-number>"]
      }
  },
  "el-cascader-panel": {
      "_self": {
          "description": "",
          "text": ["<el-cascader-panel :options=\"options\"></el-cascader-panel>"]
      }
  },
  "el-upload:avatar": {
      "_self": {
          "description": "通过点击或者拖拽上传文件。",
          "text": ["handleRemove(file, fileList) {\n\t},\n\thandlePreview(file) {\n\t},\n\thandleExceed(files, fileList) {\n\t},\n\tbeforeRemove(file, fileList) {\n\t\treturn this.$confirm('确定移除' + file.name);\n}"]
      }
  },
  "el-color-picker": {
      "_self": {
          "description": "",
          "text": ["<el-color-picker v-model=\"${1:color}\"></el-color-picker>"]
      }
  },
  "el-transfer:search": {
      "_self": {
          "description": "Transfer 的数据通过 data 属性传入。 数据需要是一个对象数组，每个对象有以下属性：key 为数据的唯一性标识，label 为显示文本，disabled 表示该项数据是否禁止被操作。 目标列表中的数据项会同步到绑定至 v-model 的变量，值为数据项的 key 所组成的数组。 当然，如果希望在初始状态时目标列表不为空，可以像本例一样为 v-model 绑定的变量赋予一个初始值。\n",
          "text": ["<el-transfer\n\tv-model=\"$1\"\n\t:data=\"$2\">\n\tfilterable\n\t:filter-method=\"\"\n\tfilter-placeholder=\"\">\n</el-transfer>"]
      }
  },
  "el-form-item": {
      "_self": {
          "description": "",
          "text": ["<el-form-item label=\"$1\">$2</el-form-item>"]
      }
  },
  "el-breadcrumb-item": {
      "_self": {
          "description": "",
          "text": ["<el-breadcrumb-item></el-breadcrumb-item>"]
      }
  },
  "el-page-header": {
      "_self": {
          "description": "",
          "text": ["<el-page-header @back=\"$1\" content=\"$2\"></el-page-header>"]
      }
  },
  "el-dropdown-menu": {
      "_self": {
          "description": "",
          "text": ["<el-dropdown-menu></el-dropdown-menu>"]
      }
  },
  "el-alert:icon": {
      "_self": {
          "description": "用于页面中展示重要的提示信息。",
          "text": ["<el-alert\n\ttitle=\"success\"\n\ttype=\"success\"\n\tshow-icon>\n</el-alert>"]
      }
  },
  "el-badge:button": {
      "_self": {
          "description": "按钮和图标上的数字或状态标记。",
          "text": ["<el-badge is-dot>$1</el-badge>"]
      }
  },
  "el-badge:dot": {
      "_self": {
          "description": "按钮和图标上的数字或状态标记。",
          "text": ["<el-badge is-dot>$1</el-badge>"]
      }
  },
  "el-carousel:card": {
      "_self": {
          "description": "在有限空间内，循环播放同一类型的图片、文字等内容",
          "text": ["<el-carousel type=\"card\" height=\"150px\">\n\t<el-carousel-item>\n\t\t$1\n\t</el-carousel-item>\n</el-carousel>"]
      }
  },
  "el-date-picker:datetime": {
      "_self": {
          "description": "",
          "text": ["<el-date-picker v-model=\"$1\" type=\"datetime\" placeholder=\"${2:datetime}\"></el-date-picker>"]
      }
  },
  "el-dialog:form": {
      "_self": {
          "description": "在保留当前页面状态的情况下，告知用户并承载相关操作。",
          "text": ["<el-dialog\n\ttitle=\"\"\n\tv-model=\"${1:visible}\"\n\twidth=\"${2:width}\">\n\t<el-form :model=\"form\">\n\t\t<el-form-item label=\"\" :label-width=\"\">\n\t\t\t<el-input v-model=\"\"></el-input>\n\t\t</el-form-item>\n\t</el-form>\n\t<template #footer>\n\t\t<el-button @click=\"visible = false\">取 消</el-button>\n\t\t<el-button type=\"primary\" @click=\"visible = false\">确 定</el-button>\n\t</template>\n</el-dialog>"]
      }
  },
  "el-form:inline": {
      "_self": {
          "description": "表单包含 输入框, 单选框, 下拉选择, 多选框 等用户输入的组件。 使用表单，您可以收集、验证和提交数据。",
          "text": ["<el-form :inline=\"true\" :model=\"${2:form}\" label-width=\"${3:80px}\">\n\t$4\n</el-form>"]
      }
  },
  "el-form-item:input": {
      "_self": {
          "description": "",
          "text": ["<el-form-item label=\"${1:label}\">\n\t<el-input v-model=\"${2:model}\" placeholder=\"${3:请输入}\"></el-input>\n</el-form-item>"]
      }
  },
  "el-form-item:checkbox": {
      "_self": {
          "description": "",
          "text": ["<el-form-item label=\"${1:label}\">\n\t<el-checkbox-group v-model=\"${2:model}\">\n\t\t<el-checkbox label=\"${3:label}\" name=\"${4:name}\"></el-checkbox>\n\t</el-checkbox-group>\n</el-form-item>"]
      }
  },
  "el-form-item:radio": {
      "_self": {
          "description": "",
          "text": ["<el-form-item label=\"${1:label}\">\n\t<el-radio-group v-model=\"${2:model}\">\n\t\t<el-radio label=\"${3:label}\"></el-radio>\n\t</el-radio-group>\n</el-form-item>"]
      }
  },
  "el-form-item:select": {
      "_self": {
          "description": "",
          "text": ["<el-form-item label=\"${1:label}\">\n\t<el-select v-model=\"${2:model}\" placeholder=\"${3:placeholder}\">\n\t\t<el-option label=\"${4:label}\" value=\"${5:value}\"></el-option>\n\t</el-select>\n</el-form-item>"]
      }
  },
  "el-form-item:switch": {
      "_self": {
          "description": "",
          "text": ["<el-form-item label=\"${1:label}\">\n<el-switch v-model=\"${2:model}\"></el-switch>\n</el-form-item>"]
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
  "el-menu:submenu": {
      "_self": {
          "description": "为网站提供导航功能的菜单。",
          "text": ["<el-menu :default-active=\"${1:activeIndex}\" mode=\"horizontal\" @select=\"handleSelect\">\n\t<el-menu-item index=\"1\"></el-menu-item>\n\t<el-submenu index=\"2\">\n\t\t<template slot=\"title\"></template>\n\t\t<el-menu-item index=\"2-1\"></el-menu-item>\n\t</el-submenu>\n</el-menu>"]
      }
  },
  "el-pagination:full": {
      "_self": {
          "description": "当数据量过多时，使用分页分解数据。",
          "text": ["<el-pagination\n\t@size-change=\"handleSizeChange\"\n\t@current-change=\"handleCurrentChange\"\n\t:current-page=\"pageNum\"\n\t:page-sizes=\"[10, 20, 50]\"\n\t:page-size=\"pageSize\"\n\tlayout=\"total, sizes, prev, pager, next, jumper\"\n\t:total=\"totalCount\">\n</el-pagination>"]
      }
  },
  "el-popover:insert": {
      "_self": {
          "description": "与Tooltip相似，Popover也是基于ElPopper的构建。 因此对于重复属性，请参考 Tooltip 的文档，在此文档中不做详尽解释。",
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
          "description": "用于评分",
          "text": ["<el-rate\n\tv-model=\"3.7\"\n\tdisabled\n\tshow-score\n\ttext-color=\"#ff9900\"\n\tscore-template=\"{value}\">\n</el-rate>"]
      }
  },
  "el-rate:half": {
      "_self": {
          "description": "用于评分",
          "text": ["<el-rate\n\tv-model=\"3.7\"\n\tdisabled\n\tshow-score\n\ttext-color=\"#ff9900\"\n\tscore-template=\"{value}\">\n</el-rate>"]
      }
  },
  "el-steps:simple": {
      "_self": {
          "description": "引导用户按照流程完成任务的分步导航条， 可根据实际应用场景设定步骤，步骤不得少于 2 步。",
          "text": ["<el-steps :active=\"active\" finish-status=\"success\">\n\t<el-step title=\"step1\" icon=\"el-icon-edit\"></el-step>\n</el-steps>"]
      }
  },
  "el-steps:icon": {
      "_self": {
          "description": "引导用户按照流程完成任务的分步导航条， 可根据实际应用场景设定步骤，步骤不得少于 2 步。",
          "text": ["<el-steps :active=\"active\" finish-status=\"success\">\n\t<el-step title=\"step1\" icon=\"el-icon-edit\"></el-step>\n</el-steps>"]
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
  "el-infinite-scroll": {
      "_self": {
          "description": "",
          "text": ["<ul class=\"infinite-list\" v-infinite-scroll=\"load\" style=\"overflow:auto\">\n\t<li v-for=\"i in count\" class=\"infinite-list-item\">{{ i }}</li>\n</ul>"]
      }
  }
}