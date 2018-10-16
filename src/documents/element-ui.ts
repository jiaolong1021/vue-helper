export default {
  "el-row": `[element：http://element-cn.eleme.io/#/zh-CN/component/layout](http://element-cn.eleme.io/#/zh-CN/component/layout) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| gutter | 栅格间隔 | number | — | 0 |
| type | 布局模式，可选 flex，现代浏览器下有效 | string | — | — |
| justify | flex 布局下的水平排列方式 | string | start/end/center/space-around/space-between | start |
| align | flex 布局下的垂直排列方式 | string | top/middle/bottom | top |
| tag | 自定义元素标签 | string | * | div |`,
"el-col": `[element：http://element-cn.eleme.io/#/zh-CN/component/layout](http://element-cn.eleme.io/#/zh-CN/component/layout) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| span | 栅格占据的列数 | number | — | 24 |
| offset | 栅格左侧的间隔格数 | number | — | 0 |
| push | 栅格向右移动格数 | number | — | 0 |
| pull | 栅格向左移动格数 | number | — | 0 |
| xs | <768px 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
| sm | ≥768px 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
| md | ≥992px 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
| lg | ≥1200px 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
| xl | ≥1920px 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
| tag | 自定义元素标签 | string | * | div |`,
"el-container": `[element：http://element-cn.eleme.io/#/zh-CN/component/container](http://element-cn.eleme.io/#/zh-CN/component/container) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| direction | 子元素的排列方向 | string | horizontal / vertical | 子元素中有 el-header 或 el-footer 时为 vertical，否则为 horizontal |`,
"el-header": `[element：http://element-cn.eleme.io/#/zh-CN/component/container](http://element-cn.eleme.io/#/zh-CN/component/container) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| height | 顶栏高度 | string | — | 60px |`,
"el-aside": `[element：http://element-cn.eleme.io/#/zh-CN/component/container](http://element-cn.eleme.io/#/zh-CN/component/container) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| width | 侧边栏宽度 | string | — | 300px |`,
"el-footer": `[element：http://element-cn.eleme.io/#/zh-CN/component/layout](http://element-cn.eleme.io/#/zh-CN/component/layout) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| height | 底栏高度 | string | — | 60px |`,
"el-button": `[element：http://element-cn.eleme.io/#/zh-CN/component/button](http://element-cn.eleme.io/#/zh-CN/component/button) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| size | 尺寸 | string | medium / small / mini | — |
| type | 类型 | string | primary / success / warning / danger / info / text | — |
| plain | 是否朴素按钮 | boolean | — | false |
| round | 是否圆角按钮 | boolean | — | false |
| circle | 是否圆形按钮 | boolean | — | false |
| loading | 是否加载中状态 | boolean | — | false |
| disabled | 是否禁用状态 | boolean | — | false |
| icon | 图标类名 | string | — | — |
| autofocus | 是否默认聚焦 | boolean | — | false |
| native-type | 原生 type 属性 | string | button / submit / reset | button |
`,
"el-radio": `[element：http://element-cn.eleme.io/#/zh-CN/component/radio](http://element-cn.eleme.io/#/zh-CN/component/radio) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| label | Radio 的 value | string / number / boolean | — | — |
| disabled | 是否禁用 | boolean | — | false |
| border | 是否显示边框 | boolean | — | false |
| size | Radio 的尺寸，仅在 border 为真时有效 | string | medium / small / mini | — |
| name | 原生 name 属性 | string | — | — |\n
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| change | 绑定值变化时触发的事件 | 选中的 Radio label 值 |`,
"el-radio-group": `[element：http://element-cn.eleme.io/#/zh-CN/component/radio](http://element-cn.eleme.io/#/zh-CN/component/radio) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| size | 单选框组尺寸，仅对按钮形式的 Radio 或带有边框的 Radio 有效 | string | medium / small / mini | — |
| disabled | 是否禁用 | boolean | — | false |
| text-color | 按钮形式的 Radio 激活时的文本颜色 | string | — | #ffffff |
| fill | 按钮形式的 Radio 激活时的填充色和边框色 | string | — | #409EFF | \n
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| change | 绑定值变化时触发的事件 | 选中的 Radio label 值 |`,
"el-radio-button": `[element：http://element-cn.eleme.io/#/zh-CN/component/radio](http://element-cn.eleme.io/#/zh-CN/component/radio) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| label | Radio 的 value | string / number | — | — |
| disabled | 是否禁用 | boolean | — | false |
| name | 原生 name 属性 | string | — | — |`,
"el-checkbox": `[element：http://element-cn.eleme.io/#/zh-CN/component/checkbox](http://element-cn.eleme.io/#/zh-CN/component/checkbox) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| label | 选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效） | string / number / boolean | — | — |
| true-label | 选中时的值 | string / number | — | — |
| false-label | 没有选中时的值 | string / number | — | — |
| disabled | 是否禁用 | boolean | — | false |
| border | 是否显示边框 | boolean | — | false |
| size | Checkbox 的尺寸，仅在 border 为真时有效 | string | medium / small / mini | — |
| name | 原生 name 属性 | string | — | — |
| checked | 当前是否勾选 | boolean | — | false |
| indeterminate | 设置 indeterminate 状态，只负责样式控制 | boolean | — | false | \n
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| change | 当绑定值变化时触发的事件 | 更新后的值 |`,
"el-checkbox-group": `[element：http://element-cn.eleme.io/#/zh-CN/component/checkbox](http://element-cn.eleme.io/#/zh-CN/component/checkbox) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| size | 多选框组尺寸，仅对按钮形式的 Checkbox 或带有边框的 Checkbox 有效 | string | medium / small / mini | — |
| disabled | 是否禁用 | boolean | — | false |
| min | 可被勾选的 checkbox 的最小数量 | number | — | — |
| max | 可被勾选的 checkbox 的最大数量 | number | — | — |
| text-color | 按钮形式的 Checkbox 激活时的文本颜色 | string | — | #ffffff |
| fill | 按钮形式的 Checkbox 激活时的填充色和边框色 | string | — | #409EFF |\n
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| change | 当绑定值变化时触发的事件 | 更新后的值 |`,
"el-checkbox-button": `[element：http://element-cn.eleme.io/#/zh-CN/component/checkbox](http://element-cn.eleme.io/#/zh-CN/component/checkbox) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| label | 选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效） | string / number / boolean | — | — |
| true-label | 选中时的值 | string / number | — | — |
| false-label | 没有选中时的值 | string / number | — | — |
| disabled | 是否禁用 | boolean | — | false |
| name | 原生 name 属性 | string | — | — |
| checked | 当前是否勾选 | boolean | — | false |`,
"el-input":`[element：http://element-cn.eleme.io/#/zh-CN/component/input](http://element-cn.eleme.io/#/zh-CN/component/input) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| type | 类型 | string | text，textarea 和其他 原生 input 的 type 值 | text |
| value | 绑定值 | string / number | — | — |
| maxlength | 原生属性，最大输入长度 | number | — | — |
| minlength | 原生属性，最小输入长度 | number | — | — |
| placeholder | 输入框占位文本 | string | — | — |
| clearable | 是否可清空 | boolean | — | false |
| disabled | 禁用 | boolean | — | false |
| size | 输入框尺寸，只在 type!=\"textarea\" 时有效 | string | medium / small / mini | — |
| prefix-icon | 输入框头部图标 | string | — | — |
| suffix-icon | 输入框尾部图标 | string | — | — |
| rows | 输入框行数，只对 type=\"textarea\" 有效 | number | — | 2 |
| autosize | 自适应内容高度，只对 type=\"textarea\" 有效，可传入对象，如，{ minRows: 2, maxRows: 6 } | boolean / object | — | false |
| autocomplete | 原生属性，自动补全 | string | on, off | off |
| auto-complete | 下个主版本弃用 | string | on, off | off |
| name | 原生属性 | string | — | — |
| readonly | 原生属性，是否只读 | boolean | — | false |
| max | 原生属性，设置最大值 | — | — | — |
| min | 原生属性，设置最小值 | — | — | — |
| step | 原生属性，设置输入字段的合法数字间隔 | — | — | — |
| resize | 控制是否能被用户缩放 | string | none, both, horizontal, vertical | — |
| autofocus | 原生属性，自动获取焦点 | boolean | true, false | false |
| form | 原生属性 | string | — | — |
| label | 输入框关联的label文字 | string | — | — |
| tabindex | 输入框的tabindex | string | - | - |\n
| name | 说明 |
| :--- | :--- |
| prefix | 输入框头部内容，只对 type=\"text\" 有效 |
| suffix | 输入框尾部内容，只对 type=\"text\" 有效 |
| prepend | 输入框前置内容，只对 type=\"text\" 有效 |
| append | 输入框后置内容，只对 type=\"text\" 有效 |\n
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| blur | 在 Input 失去焦点时触发 | (event: Event) |
| focus | 在 Input 获得焦点时触发 | (event: Event) |
| change | 在 Input 值改变时触发 | (value: string | number) |
| clear | 在点击由 clearable 属性生成的清空按钮时触发 | — |\n
| 方法名 | 说明 | 参数 |
| :--- | :--- | :--- |
| focus | 使 input 获取焦点 | — |
| blur | 使 input 失去焦点 | — |
| select | 选中 input 中的文字 | — |`,
"el-autocomplete":`[element：http://element-cn.eleme.io/#/zh-CN/component/input](http://element-cn.eleme.io/#/zh-CN/component/input) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| placeholder | 输入框占位文本 | string | — | — |
| disabled | 禁用 | boolean | — | false |
| value-key | 输入建议对象中用于显示的键名 | string | — | value |
| value | 必填值，输入绑定值 | string | — | — |
| debounce | 获取输入建议的去抖延时 | number | — | 300 |
| placement | 菜单弹出位置 | string | top / top-start / top-end / bottom / bottom-start / bottom-end | bottom-start |
| fetch-suggestions | 返回输入建议的方法，仅当你的输入建议数据 resolve 时，通过调用 callback(data:[]) 来返回它 | Function(queryString, callback) | — | — |
| popper-class | Autocomplete 下拉列表的类名 | string | — | — |
| trigger-on-focus | 是否在输入框 focus 时显示建议列表 | boolean | — | true |
| name | 原生属性 | string | — | — |
| select-when-unmatched | 在输入没有任何匹配建议的情况下，按下回车是否触发 select 事件 | boolean | — | false |
| label | 输入框关联的label文字 | string | — | — |
| prefix-icon | 输入框头部图标 | string | — | — |
| suffix-icon | 输入框尾部图标 | string | — | — |
| hide-loading | 是否隐藏远程加载时的加载图标 | boolean | — | false |
| popper-append-to-body | 是否将下拉列表插入至 body 元素。在下拉列表的定位出现问题时，可将该属性设置为 false | boolean | - | true |\n
| name | 说明 |
| :--- | :--- |
| prefix | 输入框头部内容 |
| suffix | 输入框尾部内容 |
| prepend | 输入框前置内容 |
| append | 输入框后置内容 |\n
| name | 说明 |
| :--- | :--- |
| — | 自定义输入建议，参数为 { item } |\n
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| select | 点击选中建议项时触发 | 选中建议项 |\n
| 方法名 | 说明 | 参数 |
| :--- | :--- | :--- |
| focus | 使 input 获取焦点 | - |`,
"el-input-number": `[element：http://element-cn.eleme.io/#/zh-CN/component/input-number](http://element-cn.eleme.io/#/zh-CN/component/input-number) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| value | 绑定值 | number | — | — |
| min | 设置计数器允许的最小值 | number | — | -Infinity |
| max | 设置计数器允许的最大值 | number | — | Infinity |
| step | 计数器步长 | number | — | 1 |
| precision | 数值精度 | number | — | — |
| size | 计数器尺寸 | string | large, small | — |
| disabled | 是否禁用计数器 | boolean | — | false |
| controls | 是否使用控制按钮 | boolean | — | true |
| controls-position | 控制按钮位置 | string | right | - |
| name | 原生属性 | string | — | — |
| label | 输入框关联的label文字 | string | — | — |\n
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| change | 绑定值被改变时触发 | 最后变更的值 |
| blur | 在组件 Input 失去焦点时触发 | (event: Event) |
| focus | 在组件 Input 获得焦点时触发 | (event: Event)\n
| 方法名 | 说明 | 参数 |
| :--- | :--- | :--- |
| focus | 使 input 获取焦点 | - |`,
"el-select": `[element：http://element-cn.eleme.io/#/zh-CN/component/select](http://element-cn.eleme.io/#/zh-CN/component/select) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| multiple | 是否多选 | boolean | — | false |
| disabled | 是否禁用 | boolean | — | false |
| value-key | 作为 value 唯一标识的键名，绑定值为对象类型时必填 | string | — | value |
| size | 输入框尺寸 | string | medium/small/mini | — |
| clearable | 单选时是否可以清空选项 | boolean | — | false |
| collapse-tags | 多选时是否将选中值按文字的形式展示 | boolean | — | false |
| multiple-limit | 多选时用户最多可以选择的项目数，为 0 则不限制 | number | — | 0 |
| name | select input 的 name 属性 | string | — | — |
| autocomplete | select input 的 autocomplete 属性 | string | — | off |
| auto-complete | 下个主版本弃用 | string | — | off |
| placeholder | 占位符 | string | — | 请选择 |
| filterable | 是否可搜索 | boolean | — | false |
| allow-create | 是否允许用户创建新条目，需配合 filterable 使用 | boolean | — | false |
| filter-method | 自定义搜索方法 | function | — | — |
| remote | 是否为远程搜索 | boolean | — | false |
| remote-method | 远程搜索方法 | function | — | — |
| loading | 是否正在从远程获取数据 | boolean | — | false |
| loading-text | 远程加载时显示的文字 | string | — | 加载中 |
| no-match-text | 搜索条件无匹配时显示的文字 | string | — | 无匹配数据 |
| no-data-text | 选项为空时显示的文字 | string | — | 无数据 |
| popper-class | Select 下拉框的类名 | string | — | — |
| reserve-keyword | 多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词 | boolean | — | false |
| default-first-option | 在输入框按下回车，选择第一个匹配项。需配合 filterable 或 remote 使用 | boolean | - | false |
| popper-append-to-body | 是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false | boolean | - | true |
| automatic-dropdown | 对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单 | boolean | - | false |\n
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| change | 选中值发生变化时触发 | 目前的选中值 |
| visible-change | 下拉框出现/隐藏时触发 | 出现则为 true，隐藏则为 false |
| remove-tag | 多选模式下移除tag时触发 | 移除的tag值 |
| clear | 可清空的单选模式下用户点击清空按钮时触发 | — |
| blur | 当 input 失去焦点时触发 | (event: Event) |
| focus | 当 input 获得焦点时触发 | (event: Event) |\n
| name | 说明 |
| :--- | :--- |
| — | Option 组件列表 |
| prefix | Select 组件头部内容 |`,
"el-option-group": `[element：http://element-cn.eleme.io/#/zh-CN/component/select](http://element-cn.eleme.io/#/zh-CN/component/select) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| label | 分组的组名 | string | — | — |
| disabled | 是否将该分组下所有选项置为禁用 | boolean | — | false |`,
"el-option": `[element：http://element-cn.eleme.io/#/zh-CN/component/select](http://element-cn.eleme.io/#/zh-CN/component/select) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| value | 选项的值 | string/number/object | — | — |
| label | 选项的标签，若不设置则默认与 value 相同 | string/number | — | — |
| disabled | 是否禁用该选项 | boolean | — | false |`,
"el-cascader": `[element：http://element-cn.eleme.io/#/zh-CN/component/cascader](http://element-cn.eleme.io/#/zh-CN/component/cascader) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| options | 可选项数据源，键名可通过 props 属性配置 | array | — | — |
| props | 配置选项，具体见下表 | object | — | — |
| value | 选中项绑定值 | array | — | — |
| separator | 选项分隔符 | string | — | 斜杠'/' |
| popper-class | 自定义浮层类名 | string | — | — |
| placeholder | 输入框占位文本 | string | — | 请选择 |
| disabled | 是否禁用 | boolean | — | false |
| clearable | 是否支持清空选项 | boolean | — | false |
| expand-trigger | 次级菜单的展开方式 | string | click / hover | click |
| show-all-levels | 输入框中是否显示选中值的完整路径 | boolean | — | true |
| filterable | 是否可搜索选项 | boolean | — | — |
| debounce | 搜索关键词输入的去抖延迟，毫秒 | number | — | 300 |
| change-on-select | 是否允许选择任意一级的选项 | boolean | — | false |
| size | 尺寸 | string | medium / small / mini | — |
| before-filter | 筛选之前的钩子，参数为输入的值，若返回 false 或者返回 Promise 且被 reject，则停止筛选 | function(value) | — | — |\n
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| change | 当绑定值变化时触发的事件 | 当前值 |
| active-item-change | 当父级选项变化时触发的事件，仅在 change-on-select 为 false 时可用 | 各父级选项组成的数组 |
| blur | 在 Cascader 失去焦点时触发 | (event: Event) |
| focus | 在 Cascader 获得焦点时触发 | (event: Event) |`,
"el-switch": `[element：http://element-cn.eleme.io/#/zh-CN/component/switch](http://element-cn.eleme.io/#/zh-CN/component/switch) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| disabled | 是否禁用 | boolean | — | false |
| width | switch 的宽度（像素） | number | — | 40 |
| active-icon-class | switch 打开时所显示图标的类名，设置此项会忽略 active-text | string | — | — |
| inactive-icon-class | switch 关闭时所显示图标的类名，设置此项会忽略 inactive-text | string | — | — |
| active-text | switch 打开时的文字描述 | string | — | — |
| inactive-text | switch 关闭时的文字描述 | string | — | — |
| active-value | switch 打开时的值 | boolean / string / number | — | true |
| inactive-value | switch 关闭时的值 | boolean / string / number | — | false |
| active-color | switch 打开时的背景色 | string | — | #409EFF |
| inactive-color | switch 关闭时的背景色 | string | — | #C0CCDA |
| name | switch 对应的 name 属性 | string | — | — |\n
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| change | switch 状态发生变化时的回调函数 | 新状态的值 |\n
| 方法名 | 说明 | 参数 |
| :--- | :--- | :--- |
| focus | 使 Switch 获取焦点 | - |`,
"el-slider": `[element：http://element-cn.eleme.io/#/zh-CN/component/slider](http://element-cn.eleme.io/#/zh-CN/component/slider) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| min | 最小值 | number | — | 0 |
| max | 最大值 | number | — | 100 |
| disabled | 是否禁用 | boolean | — | false |
| step | 步长 | number | — | 1 |
| show-input | 是否显示输入框，仅在非范围选择时有效 | boolean | — | false |
| show-input-controls | 在显示输入框的情况下，是否显示输入框的控制按钮 | boolean | — | true |
| input-size | 输入框的尺寸 | string | large / medium / small / mini | small |
| show-stops | 是否显示间断点 | boolean | — | false |
| show-tooltip | 是否显示 tooltip | boolean | — | true |
| format-tooltip | 格式化 tooltip message | function(value) | — | — |
| range | 是否为范围选择 | boolean | — | false |
| vertical | 是否竖向模式 | boolean | — | false |
| height | Slider 高度，竖向模式时必填 | string | — | — |
| label | 屏幕阅读器标签 | string | — | — |
| debounce | 输入时的去抖延迟，毫秒，仅在show-input等于true时有效 | number | — | 300 |
| tooltip-class | tooltip 的自定义类名 | string | — | — |\n
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| change | 值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发） | 改变后的值 |`,
"el-time-picker": `[element：http://element-cn.eleme.io/#/zh-CN/component/time-picker](http://element-cn.eleme.io/#/zh-CN/component/time-picker) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| readonly | 完全只读 | boolean | — | false |
| disabled | 禁用 | boolean | — | false |
| editable | 文本框可输入 | boolean | — | true |
| clearable | 是否显示清除按钮 | boolean | — | true |
| size | 输入框尺寸 | string | medium / small / mini | — |
| placeholder | 非范围选择时的占位内容 | string | — | — |
| start-placeholder | 范围选择时开始日期的占位内容 | string | — | — |
| end-placeholder | 范围选择时开始日期的占位内容 | string | — | — |
| is-range | 是否为时间范围选择，仅对<el-time-picker>有效 | boolean | — | false |
| arrow-control | 是否使用箭头进行时间选择，仅对<el-time-picker>有效 | boolean | — | false |
| value | 绑定值 | date(TimePicker) / string(TimeSelect) | — | — |
| align | 对齐方式 | string | left / center / right | left |
| popper-class | TimePicker 下拉框的类名 | string | — | — |
| picker-options | 当前时间日期选择器特有的选项参考下表 | object | — | {} |
| range-separator | 选择范围时的分隔符 | string | - | '-' |
| value-format | 可选，仅TimePicker时可用，绑定值的格式。不指定则绑定值为 Date 对象 | string | 见日期格式 | — |
| default-value | 可选，选择器打开时默认显示的时间 | Date(TimePicker) / string(TimeSelect) | 可被new Date()解析(TimePicker) / 可选值(TimeSelect) | — |
| name | 原生属性 | string | — | — |
| prefix-icon | 自定义头部图标的类名 | string | — | el-icon-time |
| clear-icon | 自定义清空图标的类名 | string | — | el-icon-circle-close |\n
| 事件名 | 说明 | 参数 |
| :--- | :--- | :--- |
| change | 用户确认选定的值时触发 | 组件绑定值 |
| blur | 当 input 失去焦点时触发 | 组件实例 |
| focus | 当 input 获得焦点时触发 | 组件实例 |\n
| 方法名 | 说明 | 参数 |
| :--- | :--- | :--- |
| focus | 使 input 获取焦点 | - |`,
"el-date-picker": `[element：http://element-cn.eleme.io/#/zh-CN/component/date-picker](http://element-cn.eleme.io/#/zh-CN/component/date-picker) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| readonly | 完全只读 | boolean | — | false |
| disabled | 禁用 | boolean | — | false |
| editable | 文本框可输入 | boolean | — | true |
| clearable | 是否显示清除按钮 | boolean | — | true |
| size | 输入框尺寸 | string | large, small, mini | — |
| placeholder | 非范围选择时的占位内容 | string | — | — |
| start-placeholder | 范围选择时开始日期的占位内容 | string | — | — |
| end-placeholder | 范围选择时结束日期的占位内容 | string | — | — |
| type | 显示类型 | string | year/month/date/dates/ week/datetime/datetimerange/daterange | date |
| format | 显示在输入框中的格式 | string | 见日期格式 | yyyy-MM-dd |
| align | 对齐方式 | string | left, center, right | left |
| popper-class | DatePicker 下拉框的类名 | string | — | — |
| picker-options | 当前时间日期选择器特有的选项参考下表 | object | — | {} |
| range-separator | 选择范围时的分隔符 | string | — | '-' |
| default-value | 可选，选择器打开时默认显示的时间 | Date | 可被new Date()解析 | — |
| default-time | 范围选择时选中日期所使用的当日内具体时刻 | string[] | 数组，长度为 2，每项值为字符串，形如12:00:00，第一项指定开始日期的时刻，第二项指定结束日期的时刻，不指定会使用时刻 00:00:00 | — |
| value-format | 可选，绑定值的格式。不指定则绑定值为 Date 对象 | string | 见日期格式 | — |
| name | 原生属性 | string | — | — |
| unlink-panels | 在范围选择器里取消两个日期面板之间的联动 | boolean | — | false |
| prefix-icon | 自定义头部图标的类名 | string | — | el-icon-date |
| clear-icon | 自定义清空图标的类名 | string | — | el-icon-circle-close |\n
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| change | 用户确认选定的值时触发 | 组件绑定值。格式与绑定值一致，可受 value-format 控制 |
| blur | 当 input 失去焦点时触发 | 组件实例 |
| focus | 当 input 获得焦点时触发 | 组件实例 |\n
| 方法名 | 说明 | 参数 |
| :--- | :--- | :--- |
| focus | 使 input 获取焦点 | — |`,
"el-upload": `[element：http://element-cn.eleme.io/#/zh-CN/component/upload](http://element-cn.eleme.io/#/zh-CN/component/upload) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| action | 必选参数，上传的地址 | string | — | — |
| headers | 设置上传的请求头部 | object | — | — |
| multiple | 是否支持多选文件 | boolean | — | — |
| data | 上传时附带的额外参数 | object | — | — |
| name | 上传的文件字段名 | string | — | file |
| with-credentials | 支持发送 cookie 凭证信息 | boolean | — | false |
| show-file-list | 是否显示已上传文件列表 | boolean | — | true |
| drag | 是否启用拖拽上传 | boolean | — | false |
| accept | 接受上传的文件类型（thumbnail-mode 模式下此参数无效） | string | — | — |
| on-preview | 点击文件列表中已上传的文件时的钩子 | function(file) | — | — |
| on-remove | 文件列表移除文件时的钩子 | function(file, fileList) | — | — |
| on-success | 文件上传成功时的钩子 | function(response, file, fileList) | — | — |
| on-error | 文件上传失败时的钩子 | function(err, file, fileList) | — | — |
| on-progress | 文件上传时的钩子 | function(event, file, fileList) | — | — |
| on-change | 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用 | function(file, fileList) | — | — |
| before-upload | 上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。 | function(file) | — | — |
| before-remove | 删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止上传。 | function(file, fileList) | — | — |
| list-type | 文件列表的类型 | string | text/picture/picture-card | text |
| auto-upload | 是否在选取文件后立即进行上传 | boolean | — | true |
| file-list | 上传的文件列表, 例如: [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}] | array | — | [] |
| http-request | 覆盖默认的上传行为，可以自定义上传的实现 | function | — | — |
| disabled | 是否禁用 | boolean | — | false |
| limit | 最大允许上传个数 | number | — | — |
| on-exceed | 文件超出个数限制时的钩子 | function(files, fileList) | — | - |\n
| name | 说明 |
| :--- | :--- |
| trigger | 触发文件选择框的内容 |
| tip | 提示说明文字 |\n
| 方法名 | 说明 | 参数 |
| :--- | :--- | :--- |
| clearFiles | 清空已上传的文件列表（该方法不支持在 before-upload 中调用） | — |
| abort | 取消上传请求 | （ file: fileList 中的 file 对象 ） |
| submit | 手动上传文件列表 | — |`,
"el-rate": `[element：http://element-cn.eleme.io/#/zh-CN/component/rate](http://element-cn.eleme.io/#/zh-CN/component/rate) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| max | 最大分值 | number | — | 5 |
| disabled | 是否为只读 | boolean | — | false |
| allow-half | 是否允许半选 | boolean | — | false |
| low-threshold | 低分和中等分数的界限值，值本身被划分在低分中 | number | — | 2 |
| high-threshold | 高分和中等分数的界限值，值本身被划分在高分中 | number | — | 4 |
| colors | icon 的颜色数组，共有 3 个元素，为 3 个分段所对应的颜色 | array | — | ['#F7BA2A', '#F7BA2A', '#F7BA2A'] |
| void-color | 未选中 icon 的颜色 | string | — | #C6D1DE |
| disabled-void-color | 只读时未选中 icon 的颜色 | string | — | #EFF2F7 |
| icon-classes | icon 的类名数组，共有 3 个元素，为 3 个分段所对应的类名 | array | — | ['el-icon-star-on', 'el-icon-star-on','el-icon-star-on'] |
| void-icon-class | 未选中 icon 的类名 | string | — | el-icon-star-off |
| disabled-void-icon-class | 只读时未选中 icon 的类名 | string | — | el-icon-star-on |
| show-text | 是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容 | boolean | — | false |
| show-score | 是否显示当前分数，show-score 和 show-text 不能同时为真 | boolean | — | false |
| text-color | 辅助文字的颜色 | string | — | #1F2D3D |
| texts | 辅助文字数组 | array | — | ['极差', '失望', '一般', '满意', '惊喜'] |
| score-template | 分数显示模板 | string | — | {value} |\n
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| change | 分值改变时触发 | 改变后的分值 |`,
"el-color-picker": `[element：http://element-cn.eleme.io/#/zh-CN/component/color-picker](http://element-cn.eleme.io/#/zh-CN/component/color-picker) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| disabled | 是否禁用 | boolean | — | false |
| size | 尺寸 | string | — | medium / small / mini |
| show-alpha | 是否支持透明度选择 | boolean | — | false |
| color-format | 写入 v-model 的颜色的格式 | string | hsl / hsv / hex / rgb | hex（show-alpha 为 false）/ rgb（show-alpha 为 true） |
| popper-class | ColorPicker 下拉框的类名 | string | — | — |
| predefine | 预定义颜色 | array | — | — |\n
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| change | 当绑定值变化时触发 | 当前值 |
| active-change | 面板中当前显示的颜色发生改变时触发 | 当前显示的颜色值 |`,
"el-transfer": `[element：http://element-cn.eleme.io/#/zh-CN/component/transfer](http://element-cn.eleme.io/#/zh-CN/component/transfer) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| data | Transfer 的数据源 | array[{ key, label, disabled }] | — | [ ] |
| filterable | 是否可搜索 | boolean | — | false |
| filter-placeholder | 搜索框占位符 | string | — | 请输入搜索内容 |
| filter-method | 自定义搜索方法 | function | — | — |
| target-order | 右侧列表元素的排序策略：若为 original，则保持与数据源相同的顺序；若为 push，则新加入的元素排在最后；若为 unshift，则新加入的元素排在最前 | string | original / push / unshift | original |
| titles | 自定义列表标题 | array | — | ['列表 1', '列表 2'] |
| button-texts | 自定义按钮文案 | array | — | [ ] |
| render-content | 自定义数据项渲染函数 | function(h, option) | — | — |
| format | 列表顶部勾选状态文案 | object{noChecked, hasChecked} | — | { noChecked: '${checked}/${total}', hasChecked: '${checked}/${total}' } |
| props | 数据源的字段别名 | object{key, label, disabled} | — | — |
| left-default-checked | 初始状态下左侧列表的已勾选项的 key 数组 | array | — | [ ] |
| right-default-checked | 初始状态下右侧列表的已勾选项的 key 数组 | array | — | [ ] |\n
| name | 说明 |
| :--- | :--- |
| left-footer | 左侧列表底部的内容 |
| right-footer | 右侧列表底部的内容 |\n
| 方法名 | 说明 | 参数 |
| :--- | :--- | :--- |
| clearQuery | 清空某个面板的搜索关键词 | 'left' / 'right'，指定需要清空的面板 |\n
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| change | 右侧列表元素变化时触发 | 当前值、数据移动的方向（'left' / 'right'）、发生移动的数据 key 数组 |
| left-check-change | 左侧列表元素被用户选中 / 取消选中时触发 | 当前被选中的元素的 key 数组、选中状态发生变化的元素的 key 数组 |
| right-check-change | 右侧列表元素被用户选中 / 取消选中时触发 | 当前被选中的元素的 key 数组、选中状态发生变化的元素的 key 数组 |`,
"el-form": `element：http://element-cn.eleme.io/#/zh-CN/component/form](http://element-cn.eleme.io/#/zh-CN/component/form) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| model | 表单数据对象 | object | — | — |
| rules | 表单验证规则 | object | — | — |
| inline | 行内表单模式 | boolean | — | false |
| label-position | 表单域标签的位置，如果值为 left 或者 right 时，则需要设置 label-width | string | right/left/top | right |
| label-width | 表单域标签的宽度，作为 Form 直接子元素的 form-item 会继承该值 | string | — | — |
| label-suffix | 表单域标签的后缀 | string | — | — |
| hide-required-asterisk | 是否显示必填字段的标签旁边的红色星号 | boolean | — | false |
| show-message | 是否显示校验错误信息 | boolean | — | true |
| inline-message | 是否以行内形式展示校验信息 | boolean | — | false |
| status-icon | 是否在输入框中显示校验结果反馈图标 | boolean | — | false |
| validate-on-rule-change | 是否在 rules 属性改变后立即触发一次验证 | boolean | — | true |
| size | 用于控制该表单内组件的尺寸 | string | medium / small / mini | — |
| disabled | 是否禁用该表单内的所有组件。若设置为 true，则表单内组件上的 disabled 属性不再生效 | boolean | — | false |\n
| 方法名 | 说明 | 参数 |
| :--- | :--- | :--- |
| validate | 对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise | Function(callback: Function(boolean, object)) |
| validateField | 对部分表单字段进行校验的方法 | Function(prop: string, callback: Function(errorMessage: string)) |
| resetFields | 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果 | — |
| clearValidate | 移除表单项的校验结果。传入待移除的表单项的 prop 属性组成的数组，如不传则移除整个表单的校验结果 | Function(props: array) |\n
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| validate | 任一表单项被校验后触发 | 被校验的表单项 prop 值，校验是否通过，错误消息（如果存在） |`,
"el-form-item": `[element：http://element-cn.eleme.io/#/zh-CN/component/form](http://element-cn.eleme.io/#/zh-CN/component/form) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| prop | 表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的 | string | 传入 Form 组件的 model 中的字段 | — |
| label | 标签文本 | string | — | — |
| label-width | 表单域标签的的宽度，例如 '50px' | string | — | — |
| required | 是否必填，如不设置，则会根据校验规则自动生成 | boolean | — | false |
| rules | 表单验证规则 | object | — | — |
| error | 表单域验证错误信息, 设置该值会使表单验证状态变为error，并显示该错误信息 | string | — | — |
| show-message | 是否显示校验错误信息 | boolean | — | true |
| inline-message | 以行内形式展示校验信息 | boolean | — | false |
| size | 用于控制该表单域下组件的尺寸 | string | medium / small / mini | - |\n
| name | 说明 |
| :--- | :--- |
| — | Form Item 的内容 |
| label | 标签文本的内容 |\n
| name | 说明 |
| :--- | :--- |
| error | 自定义表单校验信息的显示方式，参数为 { error } |\n
| 方法名 | 说明 | 参数 |
| :--- | :--- | :--- |
| resetField | 对该表单项进行重置，将其值重置为初始值并移除校验结果 | - |
| clearValidate | 移除该表单项的校验结果 | - |`,
"el-table": `[element：http://element-cn.eleme.io/#/zh-CN/component/table](http://element-cn.eleme.io/#/zh-CN/component/table) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| data | 显示的数据 | array | — | — |
| height | Table 的高度，默认为自动高度。如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。 | string/number | — | — |
| max-height | Table 的最大高度 | string/number | — | — |
| stripe | 是否为斑马纹 table | boolean | — | false |
| border | 是否带有纵向边框 | boolean | — | false |
| size | Table 的尺寸 | string | medium / small / mini | — |
| fit | 列的宽度是否自撑开 | boolean | — | true |
| show-header | 是否显示表头 | boolean | — | true |
| highlight-current-row | 是否要高亮当前行 | boolean | — | false |
| current-row-key | 当前行的 key，只写属性 | String,Number | — | — |
| row-class-name | 行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。 | Function({row, rowIndex})/String | — | — |
| row-style | 行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。 | Function({row, rowIndex})/Object | — | — |
| cell-class-name | 单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。 | Function({row, column, rowIndex, columnIndex})/String | — | — |
| cell-style | 单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。 | Function({row, column, rowIndex, columnIndex})/Object | — | — |
| header-row-class-name | 表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。 | Function({row, rowIndex})/String | — | — |
| header-row-style | 表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。 | Function({row, rowIndex})/Object | — | — |
| header-cell-class-name | 表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className。 | Function({row, column, rowIndex, columnIndex})/String | — | — |
| header-cell-style | 表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。 | Function({row, column, rowIndex, columnIndex})/Object | — | — |
| row-key | 行数据的 Key，用来优化 Table 的渲染；在使用 reserve-selection 功能的情况下，该属性是必填的。类型为 String 时，支持多层访问：user.info.id，但不支持 user.info[0].id，此种情况请使用 Function。 | Function(row)/String | — | — |
| empty-text | 空数据时显示的文本内容，也可以通过 slot=\"empty\" 设置 | String | — | 暂无数据 |
| default-expand-all | 是否默认展开所有行，当 Table 中存在 type=\"expand\" 的 Column 的时候有效 | Boolean | — | false |
| expand-row-keys | 可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组。 | Array | — | |
| default-sort | 默认的排序列的 prop 和顺序。它的prop属性指定默认的排序的列，order指定默认排序的顺序 | Object | order: ascending, descending | 如果只指定了prop, 没有指定order, 则默认顺序是ascending |
| tooltip-effect | tooltip effect 属性 | String | dark/light | |
| show-summary | 是否在表尾显示合计行 | Boolean | — | false |
| sum-text | 合计行第一列的文本 | String | — | 合计 |
| summary-method | 自定义的合计计算方法 | Function({ columns, data }) | — | — |
| span-method | 合并行或列的计算方法 | Function({ row, column, rowIndex, columnIndex }) | — | — |
| select-on-indeterminate | 在多选表格中，当仅有部分行被选中时，点击表头的多选框时的行为。若为 true，则选中所有行；若为 false，则取消选择所有行 | Boolean | — | true |\n
| 事件名 | 说明 | 参数 |
| :--- | :--- | :--- |
| select | 当用户手动勾选数据行的 Checkbox 时触发的事件 | selection, row |
| select-all | 当用户手动勾选全选 Checkbox 时触发的事件 | selection |
| selection-change | 当选择项发生变化时会触发该事件 | selection |
| cell-mouse-enter | 当单元格 hover 进入时会触发该事件 | row, column, cell, event |
| cell-mouse-leave | 当单元格 hover 退出时会触发该事件 | row, column, cell, event |
| cell-click | 当某个单元格被点击时会触发该事件 | row, column, cell, event |
| cell-dblclick | 当某个单元格被双击击时会触发该事件 | row, column, cell, event |
| row-click | 当某一行被点击时会触发该事件 | row, event, column |
| row-contextmenu | 当某一行被鼠标右键点击时会触发该事件 | row, event |
| row-dblclick | 当某一行被双击时会触发该事件 | row, event |
| header-click | 当某一列的表头被点击时会触发该事件 | column, event |
| header-contextmenu | 当某一列的表头被鼠标右键点击时触发该事件 | column, event |
| sort-change | 当表格的排序条件发生变化的时候会触发该事件 | { column, prop, order } |
| filter-change | 当表格的筛选条件发生变化的时候会触发该事件，参数的值是一个对象，对象的 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组。 | filters |
| current-change | 当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性 | currentRow, oldCurrentRow |
| header-dragend | 当拖动表头改变了列的宽度的时候会触发该事件 | newWidth, oldWidth, column, event |
| expand-change | 当用户对某一行展开或者关闭的时候会触发该事件 | row, expandedRows |\n
| 方法名 | 说明 | 参数 |
| :--- | :--- | :--- |
| clearSelection | 用于多选表格，清空用户的选择 | — |
| toggleRowSelection | 用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中） | row, selected |
| toggleAllSelection | 用于多选表格，切换所有行的选中状态 | - |
| toggleRowExpansion | 用于可展开表格，切换某一行的展开状态，如果使用了第二个参数，则是设置这一行展开与否（expanded 为 true 则展开） | row, expanded |
| setCurrentRow | 用于单选表格，设定某一行为选中行，如果调用时不加参数，则会取消目前高亮行的选中状态。 | row |
| clearSort | 用于清空排序条件，数据会恢复成未排序的状态 | — |
| clearFilter | 用于清空过滤条件，数据会恢复成未过滤的状态 | — |
| doLayout | 对 Table 进行重新布局。当 Table 或其祖先元素由隐藏切换为显示时，可能需要调用此方法 | — |
| sort | 手动对 Table 进行排序。参数prop属性指定排序列，order指定排序顺序。 | prop: string, order: string |\n
| name | 说明 |
| :--- | :--- |
| append | 插入至表格最后一行之后的内容，如果需要对表格的内容进行无限滚动操作，可能需要用到这个 slot。若表格有合计行，该 slot 会位于合计行之上。 |`,
"el-tag": `[element：http://element-cn.eleme.io/#/zh-CN/component/tag](http://element-cn.eleme.io/#/zh-CN/component/tag) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| type | 主题 | string | success/info/warning/danger | — |
| closable | 是否可关闭 | boolean | — | false |
| disable-transitions | 是否禁用渐变动画 | boolean | — | false |
| hit | 是否有边框描边 | boolean | — | false |
| color | 背景色 | string | — | — |
| size | 尺寸 | string | medium / small / mini | — |\n
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| close | 关闭 Tag 时触发的事件 | — |`,
"el-progress": `[element：http://element-cn.eleme.io/#/zh-CN/component/progress](http://element-cn.eleme.io/#/zh-CN/component/progress) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| percentage | 百分比（必填） | number | 0-100 | 0 |
| type | 进度条类型 | string | line/circle | line |
| stroke-width | 进度条的宽度，单位 px | number | — | 6 |
| text-inside | 进度条显示文字内置在进度条内（只在 type=line 时可用） | boolean | — | false |
| status | 进度条当前状态 | string | success/exception | — |
| color | 进度条背景色（会覆盖 status 状态颜色） | string | — | — |
| width | 环形进度条画布宽度（只在 type=circle 时可用） | number | | 126 |
| show-text | 是否显示进度条文字内容 | boolean | — | true |`,
"el-tree": `[element：http://element-cn.eleme.io/#/zh-CN/component/tree](http://element-cn.eleme.io/#/zh-CN/component/tree) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| data | 展示数据 | array | — | — |
| empty-text | 内容为空的时候展示的文本 | String | — | — |
| node-key | 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的 | String | — | — |
| props | 配置选项，具体看下表 | object | — | — |
| render-after-expand | 是否在第一次展开某个树节点后才渲染其子节点 | boolean | — | true |
| load | 加载子树数据的方法，仅当 lazy 属性为true 时生效 | function(node, resolve) | — | — |
| render-content | 树节点的内容区的渲染 Function | Function(h, { node, data, store } | — | — |
  | highlight-current | 是否高亮当前选中节点，默认值是 false。 | boolean | — | false |
  | default-expand-all | 是否默认展开所有节点 | boolean | — | false |
  | expand-on-click-node | 是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点。 | boolean | — | true |
  | check-on-click-node | 是否在点击节点的时候选中节点，默认值为 false，即只有在点击复选框时才会选中节点。 | boolean | — | false |
  | auto-expand-parent | 展开子节点的时候是否自动展开父节点 | boolean | — | true |
  | default-expanded-keys | 默认展开的节点的 key 的数组 | array | — | — |
  | show-checkbox | 节点是否可被选择 | boolean | — | false |
  | check-strictly | 在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false | boolean | — | false |
  | default-checked-keys | 默认勾选的节点的 key 的数组 | array | — | — |
  | filter-node-method | 对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏 | Function(value, data, node) | — | — |
  | accordion | 是否每次只打开一个同级树节点展开 | boolean | — | false |
  | indent | 相邻级节点间的水平缩进，单位为像素 | number | — | 16 |
  | lazy | 是否懒加载子节点，需与 load 方法结合使用 | boolean | — | false |
  | draggable | 是否开启拖拽节点功能 | boolean | — | false |
  | allow-drag | 判断节点能否被拖拽 | Function(node) | — | — |
  | allow-drop | 拖拽时判定目标节点能否被放置。type 参数有三种情况：'prev'、'inner' 和 'next'，分别表示放置在目标节点前、插入至目标节点和放置在目标节点后 | Function(draggingNode, dropNode, type) | — | — |\n
  | 参数 | 说明 | 类型 | 可选值 | 默认值 |
  | :--- | :--- | :--- | :--- | :--- |
  | label | 指定节点标签为节点对象的某个属性值 | string, function(data, node) | — | — |
  | children | 指定子树为节点对象的某个属性值 | string | — | — |
  | disabled | 指定节点选择框是否禁用为节点对象的某个属性值 | boolean, function(data, node) | — | — |
  | isLeaf | 指定节点是否为叶子节点，仅在指定了 lazy 属性的情况下生效 | boolean, function(data, node) | — | — |`,
  "el-pagination": `[element：http://element-cn.eleme.io/#/zh-CN/component/pagination](http://element-cn.eleme.io/#/zh-CN/component/pagination) \n
  | 参数 | 说明 | 类型 | 可选值 | 默认值 |
  | :--- | :--- | :--- | :--- | :--- |
  | small | 是否使用小型分页样式 | boolean | — | false |
  | background | 是否为分页按钮添加背景色 | boolean | — | false |
  | page-size | 每页显示条目个数，支持 .sync 修饰符 | number | — | 10 |
  | total | 总条目数 | number | — | — |
  | page-count | 总页数，total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-sizes 的更改，则需要使用 total 属性 | Number | — | — |
  | pager-count | 页码按钮的数量，当总页数超过该值时会折叠 | number | 大于等于 5 且小于等于 21 的奇数 | 7 |
  | current-page | 当前页数，支持 .sync 修饰符 | number | — | 1 |
  | layout | 组件布局，子组件名用逗号分隔 | String | sizes, prev, pager, next, jumper, ->, total, slot | 'prev, pager, next, jumper, ->, total' |
  | page-sizes | 每页显示个数选择器的选项设置 | number[] | — | [10, 20, 30, 40, 50, 100] |
  | popper-class | 每页显示个数选择器的下拉框类名 | string | — | — |
  | prev-text | 替代图标显示的上一页文字 | string | — | — |
  | next-text | 替代图标显示的下一页文字 | string | — | — |
  | disabled | 是否禁用 | boolean | — | false |`
}