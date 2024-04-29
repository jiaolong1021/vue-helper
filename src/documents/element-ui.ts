export default {
  "el-layout": `#### [访问](https://element.eleme.cn/#/zh-CN/component/layout)
#### Row Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| gutter| 栅格间隔| number| —| 0 |
| type| 布局模式，可选 flex，现代浏览器下有效| string| —| — |
| justify| flex 布局下的水平排列方式| string| start/end/center/space-around/space-between| start |
| align| flex 布局下的垂直排列方式| string| top/middle/bottom| — |
| tag| 自定义元素标签| string| *| div |
#### Col Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| span| 栅格占据的列数| number| —| 24 |
| offset| 栅格左侧的间隔格数| number| —| 0 |
| push| 栅格向右移动格数| number| —| 0 |
| pull| 栅格向左移动格数| number| —| 0 |
| xs| <768px 响应式栅格数或者栅格属性对象| number/object (例如： {span: 4, offset: 4})| —| — |
| sm| ≥768px 响应式栅格数或者栅格属性对象| number/object (例如： {span: 4, offset: 4})| —| — |
| md| ≥992px 响应式栅格数或者栅格属性对象| number/object (例如： {span: 4, offset: 4})| —| — |
| lg| ≥1200px 响应式栅格数或者栅格属性对象| number/object (例如： {span: 4, offset: 4})| —| — |
| xl| ≥1920px 响应式栅格数或者栅格属性对象| number/object (例如： {span: 4, offset: 4})| —| — |
| tag| 自定义元素标签| string| *| div |
`,
  "el-container": `#### [访问](https://element.eleme.cn/#/zh-CN/component/container)
#### Container Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| direction| 子元素的排列方向| string| horizontal / vertical| 子元素中有 el-header 或 el-footer 时为 vertical，否则为 horizontal |
#### Header Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| height| 顶栏高度| string| —| 60px |
#### Aside Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| width| 侧边栏宽度| string| —| 300px |
#### Footer Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| height| 底栏高度| string| —| 60px |
`,
  "el-color": `#### [访问](https://element.eleme.cn/#/zh-CN/component/color)
`,
  "el-typography": `#### [访问](https://element.eleme.cn/#/zh-CN/component/typography)
`,
  "el-border": `#### [访问](https://element.eleme.cn/#/zh-CN/component/border)
`,
  "el-icon": `#### [访问](https://element.eleme.cn/#/zh-CN/component/icon)
`,
  "el-button": `#### [访问](https://element.eleme.cn/#/zh-CN/component/button)
#### Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| size| 尺寸| string| medium / small / mini| — |
| type| 类型| string| primary / success / warning / danger / info / text| — |
| plain| 是否朴素按钮| boolean| —| false |
| round| 是否圆角按钮| boolean| —| false |
| circle| 是否圆形按钮| boolean| —| false |
| loading| 是否加载中状态| boolean| —| false |
| disabled| 是否禁用状态| boolean| —| false |
| icon| 图标类名| string| —| — |
| autofocus| 是否默认聚焦| boolean| —| false |
| native-type| 原生 type 属性| string| button / submit / reset| button |
`,
  "el-link": `#### [访问](https://element.eleme.cn/#/zh-CN/component/link)
#### Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| type| 类型| string| primary / success / warning / danger / info| default |
| underline| 是否下划线| boolean| —| true |
| disabled| 是否禁用状态| boolean| —| false |
| href| 原生 href 属性| string| —| - |
| icon| 图标类名| string| —| - |
`,
  "el-radio": `#### [访问](https://element.eleme.cn/#/zh-CN/component/radio)
#### Radio Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| value / v-model| 绑定值| string / number / boolean| —| — |
| label| Radio 的 value| string / number / boolean| —| — |
| disabled| 是否禁用| boolean| —| false |
| border| 是否显示边框| boolean| —| false |
| size| Radio 的尺寸，仅在 border 为真时有效| string| medium / small / mini| — |
| name| 原生 name 属性| string| —| — |
#### Radio Events
| 事件名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| change| 绑定值变化时触发的事件| 选中的 Radio label 值 |
#### Radio-group Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| value / v-model| 绑定值| string / number / boolean| —| — |
| size| 单选框组尺寸，仅对按钮形式的 Radio 或带有边框的 Radio 有效| string| medium / small / mini| — |
| disabled| 是否禁用| boolean| —| false |
| text-color| 按钮形式的 Radio 激活时的文本颜色| string| —| #ffffff |
| fill| 按钮形式的 Radio 激活时的填充色和边框色| string| —| #409EFF |
#### Radio-group Events
| 事件名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| change| 绑定值变化时触发的事件| 选中的 Radio label 值 |
#### Radio-button Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| label| Radio 的 value| string / number| —| — |
| disabled| 是否禁用| boolean| —| false |
| name| 原生 name 属性| string| —| — |
`,
  "el-checkbox": `#### [访问](https://element.eleme.cn/#/zh-CN/component/checkbox)
#### Checkbox Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| value / v-model| 绑定值| string / number / boolean| —| — |
| label| 选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效）| string / number / boolean| —| — |
| true-label| 选中时的值| string / number| —| — |
| false-label| 没有选中时的值| string / number| —| — |
| disabled| 是否禁用| boolean| —| false |
| border| 是否显示边框| boolean| —| false |
| size| Checkbox 的尺寸，仅在 border 为真时有效| string| medium / small / mini| — |
| name| 原生 name 属性| string| —| — |
| checked| 当前是否勾选| boolean| —| false |
| indeterminate| 设置 indeterminate 状态，只负责样式控制| boolean| —| false |
#### Checkbox Events
| 事件名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| change| 当绑定值变化时触发的事件| 更新后的值 |
#### Checkbox-group Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| value / v-model| 绑定值| array| —| — |
| size| 多选框组尺寸，仅对按钮形式的 Checkbox 或带有边框的 Checkbox 有效| string| medium / small / mini| — |
| disabled| 是否禁用| boolean| —| false |
| min| 可被勾选的 checkbox 的最小数量| number| —| — |
| max| 可被勾选的 checkbox 的最大数量| number| —| — |
| text-color| 按钮形式的 Checkbox 激活时的文本颜色| string| —| #ffffff |
| fill| 按钮形式的 Checkbox 激活时的填充色和边框色| string| —| #409EFF |
#### Checkbox-group Events
| 事件名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| change| 当绑定值变化时触发的事件| 更新后的值 |
#### Checkbox-button Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| label| 选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效）| string / number / boolean| —| — |
| true-label| 选中时的值| string / number| —| — |
| false-label| 没有选中时的值| string / number| —| — |
| disabled| 是否禁用| boolean| —| false |
| name| 原生 name 属性| string| —| — |
| checked| 当前是否勾选| boolean| —| false |
`,
  "el-input": `#### [访问](https://element.eleme.cn/#/zh-CN/component/input)
#### Input Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| type| 类型| string| text，textarea 和其他 原生 input 的 type 值| text |
| value / v-model| 绑定值| string / number| —| — |
| maxlength| 原生属性，最大输入长度| number| —| — |
| minlength| 原生属性，最小输入长度| number| —| — |
| show-word-limit| 是否显示输入字数统计，只在 type = "text" 或 type = "textarea" 时有效| boolean| —| false |
| placeholder| 输入框占位文本| string| —| — |
| clearable| 是否可清空| boolean| —| false |
| show-password| 是否显示切换密码图标| boolean| —| false |
| disabled| 禁用| boolean| —| false |
| size| 输入框尺寸，只在 type!="textarea" 时有效| string| medium / small / mini| — |
| prefix-icon| 输入框头部图标| string| —| — |
| suffix-icon| 输入框尾部图标| string| —| — |
| rows| 输入框行数，只对 type="textarea" 有效| number| —| 2 |
| autosize| 自适应内容高度，只对 type="textarea" 有效，可传入对象，如，{ minRows: 2, maxRows: 6 }| boolean / object| —| false |
| autocomplete| 原生属性，自动补全| string| on, off| off |
| auto-complete| 下个主版本弃用| string| on, off| off |
| name| 原生属性| string| —| — |
| readonly| 原生属性，是否只读| boolean| —| false |
| max| 原生属性，设置最大值| —| —| — |
| min| 原生属性，设置最小值| —| —| — |
| step| 原生属性，设置输入字段的合法数字间隔| —| —| — |
| resize| 控制是否能被用户缩放| string| none, both, horizontal, vertical| — |
| autofocus| 原生属性，自动获取焦点| boolean| true, false| false |
| form| 原生属性| string| —| — |
| label| 输入框关联的label文字| string| —| — |
| tabindex| 输入框的tabindex| string| -| - |
| validate-event| 输入时是否触发表单的校验| boolean| -| true |
#### Input Slots
| name| 说明 |
| :--- | :--- |
| prefix| 输入框头部内容，只对 type="text" 有效 |
| suffix| 输入框尾部内容，只对 type="text" 有效 |
| prepend| 输入框前置内容，只对 type="text" 有效 |
| append| 输入框后置内容，只对 type="text" 有效 |
#### Input Events
| 事件名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| blur| 在 Input 失去焦点时触发| (event: Event) |
| focus| 在 Input 获得焦点时触发| (event: Event) |
| change| 仅在输入框失去焦点或用户按下回车时触发| (value: string | number) |
| input| 在 Input 值改变时触发| (value: string | number) |
| clear| 在点击由 clearable 属性生成的清空按钮时触发| — |
#### Input Methods
| 方法名| 说明| 参数 |
| :--- | :--- | :--- |
| focus| 使 input 获取焦点| — |
| blur| 使 input 失去焦点| — |
| select| 选中 input 中的文字| — |
#### Autocomplete Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| placeholder| 输入框占位文本| string| —| — |
| disabled| 禁用| boolean| —| false |
| value-key| 输入建议对象中用于显示的键名| string| —| value |
| value| 必填值，输入绑定值| string| —| — |
| debounce| 获取输入建议的去抖延时| number| —| 300 |
| placement| 菜单弹出位置| string| top / top-start / top-end / bottom / bottom-start / bottom-end| bottom-start |
| fetch-suggestions| 返回输入建议的方法，仅当你的输入建议数据 resolve 时，通过调用 callback(data:[]) 来返回它| Function(queryString, callback)| —| — |
| popper-class| Autocomplete 下拉列表的类名| string| —| — |
| trigger-on-focus| 是否在输入框 focus 时显示建议列表| boolean| —| true |
| name| 原生属性| string| —| — |
| select-when-unmatched| 在输入没有任何匹配建议的情况下，按下回车是否触发 select 事件| boolean| —| false |
| label| 输入框关联的label文字| string| —| — |
| prefix-icon| 输入框头部图标| string| —| — |
| suffix-icon| 输入框尾部图标| string| —| — |
| hide-loading| 是否隐藏远程加载时的加载图标| boolean| —| false |
| popper-append-to-body| 是否将下拉列表插入至 body 元素。在下拉列表的定位出现问题时，可将该属性设置为 false| boolean| -| true |
| highlight-first-item| 是否默认突出显示远程搜索建议中的第一项| boolean| —| false |
#### Autocomplete Slots
| name| 说明 |
| :--- | :--- |
| prefix| 输入框头部内容 |
| suffix| 输入框尾部内容 |
| prepend| 输入框前置内容 |
| append| 输入框后置内容 |
#### Autocomplete Scoped Slot
| name| 说明 |
| :--- | :--- |
| —| 自定义输入建议，参数为 { item } |
#### Autocomplete Events
| 事件名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| select| 点击选中建议项时触发| 选中建议项 |
| change| 在 Input 值改变时触发| (value: string | number) |
#### Autocomplete Methods
| 方法名| 说明| 参数 |
| :--- | :--- | :--- |
| focus| 使 input 获取焦点| - |
`,
  "el-input-number": `#### [访问](https://element.eleme.cn/#/zh-CN/component/input-number)
#### Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| value / v-model| 绑定值| number| —| 0 |
| min| 设置计数器允许的最小值| number| —| -Infinity |
| max| 设置计数器允许的最大值| number| —| Infinity |
| step| 计数器步长| number| —| 1 |
| step-strictly| 是否只能输入 step 的倍数| boolean| —| false |
| precision| 数值精度| number| —| — |
| size| 计数器尺寸| string| large, small| — |
| disabled| 是否禁用计数器| boolean| —| false |
| controls| 是否使用控制按钮| boolean| —| true |
| controls-position| 控制按钮位置| string| right| - |
| name| 原生属性| string| —| — |
| label| 输入框关联的label文字| string| —| — |
| placeholder| 输入框默认 placeholder| string| -| - |
#### Events
| 事件名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| change| 绑定值被改变时触发| currentValue, oldValue |
| blur| 在组件 Input 失去焦点时触发| (event: Event) |
| focus| 在组件 Input 获得焦点时触发| (event: Event) |
#### Methods
| 方法名| 说明| 参数 |
| :--- | :--- | :--- |
| focus| 使 input 获取焦点| - |
| select| 选中 input 中的文字| — |
`,
  "el-select": `#### [访问](https://element.eleme.cn/#/zh-CN/component/select)
#### Select Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| value / v-model| 绑定值| boolean / string / number| —| — |
| multiple| 是否多选| boolean| —| false |
| disabled| 是否禁用| boolean| —| false |
| value-key| 作为 value 唯一标识的键名，绑定值为对象类型时必填| string| —| value |
| size| 输入框尺寸| string| medium/small/mini| — |
| clearable| 是否可以清空选项| boolean| —| false |
| collapse-tags| 多选时是否将选中值按文字的形式展示| boolean| —| false |
| multiple-limit| 多选时用户最多可以选择的项目数，为 0 则不限制| number| —| 0 |
| name| select input 的 name 属性| string| —| — |
| autocomplete| select input 的 autocomplete 属性| string| —| off |
| auto-complete| 下个主版本弃用| string| —| off |
| placeholder| 占位符| string| —| 请选择 |
| filterable| 是否可搜索| boolean| —| false |
| allow-create| 是否允许用户创建新条目，需配合 filterable 使用| boolean| —| false |
| filter-method| 自定义搜索方法| function| —| — |
| remote| 是否为远程搜索| boolean| —| false |
| remote-method| 远程搜索方法| function| —| — |
| loading| 是否正在从远程获取数据| boolean| —| false |
| loading-text| 远程加载时显示的文字| string| —| 加载中 |
| no-match-text| 搜索条件无匹配时显示的文字，也可以使用slot="empty"设置| string| —| 无匹配数据 |
| no-data-text| 选项为空时显示的文字，也可以使用slot="empty"设置| string| —| 无数据 |
| popper-class| Select 下拉框的类名| string| —| — |
| reserve-keyword| 多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词| boolean| —| false |
| default-first-option| 在输入框按下回车，选择第一个匹配项。需配合 filterable 或 remote 使用| boolean| -| false |
| popper-append-to-body| 是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false| boolean| -| true |
| automatic-dropdown| 对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单| boolean| -| false |
#### Select Events
| 事件名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| change| 选中值发生变化时触发| 目前的选中值 |
| visible-change| 下拉框出现/隐藏时触发| 出现则为 true，隐藏则为 false |
| remove-tag| 多选模式下移除tag时触发| 移除的tag值 |
| clear| 可清空的单选模式下用户点击清空按钮时触发| — |
| blur| 当 input 失去焦点时触发| (event: Event) |
| focus| 当 input 获得焦点时触发| (event: Event) |
#### Select Slots
| name| 说明 |
| :--- | :--- |
| —| Option 组件列表 |
| prefix| Select 组件头部内容 |
| empty| 无选项时的列表 |
#### Option Group Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| label| 分组的组名| string| —| — |
| disabled| 是否将该分组下所有选项置为禁用| boolean| —| false |
#### Option Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| value| 选项的值| string/number/object| —| — |
| label| 选项的标签，若不设置则默认与 value 相同| string/number| —| — |
| disabled| 是否禁用该选项| boolean| —| false |
#### Methods
| 方法名| 说明| 参数 |
| :--- | :--- | :--- |
| focus| 使 input 获取焦点| - |
| blur| 使 input 失去焦点，并隐藏下拉框| - |
`,
  "el-cascader": `#### [访问](https://element.eleme.cn/#/zh-CN/component/cascader)
#### Cascader Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| value / v-model| 选中项绑定值| -| —| — |
| options| 可选项数据源，键名可通过 Props 属性配置| array| —| — |
| props| 配置选项，具体见下表| object| —| — |
| size| 尺寸| string| medium / small / mini| — |
| placeholder| 输入框占位文本| string| —| 请选择 |
| disabled| 是否禁用| boolean| —| false |
| clearable| 是否支持清空选项| boolean| —| false |
| show-all-levels| 输入框中是否显示选中值的完整路径| boolean| —| true |
| collapse-tags| 多选模式下是否折叠Tag| boolean| -| false |
| separator| 选项分隔符| string| —| 斜杠' / ' |
| filterable| 是否可搜索选项| boolean| —| — |
| filter-method| 自定义搜索逻辑，第一个参数是节点node，第二个参数是搜索关键词keyword，通过返回布尔值表示是否命中| function(node, keyword)| -| - |
| debounce| 搜索关键词输入的去抖延迟，毫秒| number| —| 300 |
| before-filter| 筛选之前的钩子，参数为输入的值，若返回 false 或者返回 Promise 且被 reject，则停止筛选| function(value)| —| — |
| popper-class| 自定义浮层类名| string| —| — |
#### Cascader Events
| 事件名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| change| 当选中节点变化时触发| 选中节点的值 |
| expand-change| 当展开节点发生变化时触发| 各父级选项值组成的数组 |
| blur| 当失去焦点时触发| (event: Event) |
| focus| 当获得焦点时触发| (event: Event) |
| visible-change| 下拉框出现/隐藏时触发| 出现则为 true，隐藏则为 false |
| remove-tag| 在多选模式下，移除Tag时触发| 移除的Tag对应的节点的值 |
#### Cascader Methods
| 方法名| 说明| 参数 |
| :--- | :--- | :--- |
| getCheckedNodes| 获取选中的节点| (leafOnly) 是否只是叶子节点，默认值为 false |
#### Cascader Slots
| 名称| 说明 |
| :--- | :--- |
| -| 自定义备选项的节点内容，参数为 { node, data }，分别为当前节点的 Node 对象和数据 |
| empty| 无匹配选项时的内容 |
#### CascaderPanel Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| value / v-model| 选中项绑定值| -| —| — |
| options| 可选项数据源，键名可通过 Props 属性配置| array| —| — |
| props| 配置选项，具体见下表| object| —| — |
#### CascaderPanel Events
| 事件名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| change| 当选中节点变化时触发| 选中节点的值 |
| expand-change| 当展开节点发生变化时触发| 各父级选项值组成的数组 |
#### CascaderPanel Methods
| 方法名| 说明| 参数 |
| :--- | :--- | :--- |
| getCheckedNodes| 获取选中的节点数组| (leafOnly) 是否只是叶子节点，默认值为 false |
| clearCheckedNodes| 清空选中的节点| - |
#### CascaderPanel Slots
| 名称| 说明 |
| :--- | :--- |
| -| 自定义备选项的节点内容，参数为 { node, data }，分别为当前节点的 Node 对象和数据 |
#### Props
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| expandTrigger| 次级菜单的展开方式| string| click / hover| 'click' |
| multiple| 是否多选| boolean| -| false |
| checkStrictly| 是否严格的遵守父子节点不互相关联| boolean| -| false |
| emitPath| 在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值| boolean| -| true |
| lazy| 是否动态加载子节点，需与 lazyLoad 方法结合使用| boolean| -| false |
| lazyLoad| 加载动态数据的方法，仅在 lazy 为 true 时有效| function(node, resolve)，node为当前点击的节点，resolve为数据加载完成的回调(必须调用)| -| - |
| value| 指定选项的值为选项对象的某个属性值| string| —| 'value' |
| label| 指定选项标签为选项对象的某个属性值| string| —| 'label' |
| children| 指定选项的子选项为选项对象的某个属性值| string| —| 'children' |
| disabled| 指定选项的禁用为选项对象的某个属性值| string| —| 'disabled' |
| leaf| 指定选项的叶子节点的标志位为选项对象的某个属性值| string| —| 'leaf' |
`,
  "el-switch": `#### [访问](https://element.eleme.cn/#/zh-CN/component/switch)
#### Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| value / v-model| 绑定值| boolean / string / number| —| — |
| disabled| 是否禁用| boolean| —| false |
| width| switch 的宽度（像素）| number| —| 40 |
| active-icon-class| switch 打开时所显示图标的类名，设置此项会忽略 active-text| string| —| — |
| inactive-icon-class| switch 关闭时所显示图标的类名，设置此项会忽略 inactive-text| string| —| — |
| active-text| switch 打开时的文字描述| string| —| — |
| inactive-text| switch 关闭时的文字描述| string| —| — |
| active-value| switch 打开时的值| boolean / string / number| —| true |
| inactive-value| switch 关闭时的值| boolean / string / number| —| false |
| active-color| switch 打开时的背景色| string| —| #409EFF |
| inactive-color| switch 关闭时的背景色| string| —| #C0CCDA |
| name| switch 对应的 name 属性| string| —| — |
| validate-event| 改变 switch 状态时是否触发表单的校验| boolean| -| true |
#### Events
| 事件名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| change| switch 状态发生变化时的回调函数| 新状态的值 |
#### Methods
| 方法名| 说明| 参数 |
| :--- | :--- | :--- |
| focus| 使 Switch 获取焦点| - |
`,
  "el-slider": `#### [访问](https://element.eleme.cn/#/zh-CN/component/slider)
#### Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| value / v-model| 绑定值| number| —| 0 |
| min| 最小值| number| —| 0 |
| max| 最大值| number| —| 100 |
| disabled| 是否禁用| boolean| —| false |
| step| 步长| number| —| 1 |
| show-input| 是否显示输入框，仅在非范围选择时有效| boolean| —| false |
| show-input-controls| 在显示输入框的情况下，是否显示输入框的控制按钮| boolean| —| true |
| input-size| 输入框的尺寸| string| large / medium / small / mini| small |
| show-stops| 是否显示间断点| boolean| —| false |
| show-tooltip| 是否显示 tooltip| boolean| —| true |
| format-tooltip| 格式化 tooltip message| function(value)| —| — |
| range| 是否为范围选择| boolean| —| false |
| vertical| 是否竖向模式| boolean| —| false |
| height| Slider 高度，竖向模式时必填| string| —| — |
| label| 屏幕阅读器标签| string| —| — |
| debounce| 输入时的去抖延迟，毫秒，仅在show-input等于true时有效| number| —| 300 |
| tooltip-class| tooltip 的自定义类名| string| —| — |
| marks| 标记， key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标记可以单独设置样式| object| —| — |
#### Events
| 事件名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| change| 值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发）| 改变后的值 |
| input| 数据改变时触发（使用鼠标拖曳时，活动过程实时触发）| 改变后的值 |
`,
  "el-time-picker": `#### [访问](https://element.eleme.cn/#/zh-CN/component/time-picker)
#### Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| value / v-model| 绑定值| date(TimePicker) / string(TimeSelect)| —| — |
| readonly| 完全只读| boolean| —| false |
| disabled| 禁用| boolean| —| false |
| editable| 文本框可输入| boolean| —| true |
| clearable| 是否显示清除按钮| boolean| —| true |
| size| 输入框尺寸| string| medium / small / mini| — |
| placeholder| 非范围选择时的占位内容| string| —| — |
| start-placeholder| 范围选择时开始日期的占位内容| string| —| — |
| end-placeholder| 范围选择时开始日期的占位内容| string| —| — |
| is-range| 是否为时间范围选择，仅对<el-time-picker>有效| boolean| —| false |
| arrow-control| 是否使用箭头进行时间选择，仅对<el-time-picker>有效| boolean| —| false |
| align| 对齐方式| string| left / center / right| left |
| popper-class| TimePicker 下拉框的类名| string| —| — |
| picker-options| 当前时间日期选择器特有的选项参考下表| object| —| {} |
| range-separator| 选择范围时的分隔符| string| -| '-' |
| value-format| 可选，仅TimePicker时可用，绑定值的格式。不指定则绑定值为 Date 对象| string| 见日期格式| — |
| default-value| 可选，选择器打开时默认显示的时间| Date(TimePicker) / string(TimeSelect)| 可被new Date()解析(TimePicker) / 可选值(TimeSelect)| — |
| name| 原生属性| string| —| — |
| prefix-icon| 自定义头部图标的类名| string| —| el-icon-time |
| clear-icon| 自定义清空图标的类名| string| —| el-icon-circle-close |
#### Time Select Options
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| start| 开始时间| string| —| 09:00 |
| end| 结束时间| string| —| 18:00 |
| step| 间隔时间| string| —| 00:30 |
| minTime| 最小时间，小于该时间的时间段将被禁用| string| —| 00:00 |
| maxTime| 最大时间，大于该时间的时间段将被禁用| string| —| — |
#### Time Picker Options
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| selectableRange| 可选时间段，例如'18:30:00 - 20:30:00'或者传入数组['09:30:00 - 12:00:00', '14:30:00 - 18:30:00']| string / array| —| — |
| format| 时间格式化(TimePicker)| string| 小时：HH，分：mm，秒：ss，AM/PM A| 'HH:mm:ss' |
#### Events
| 事件名| 说明| 参数 |
| :--- | :--- | :--- |
| change| 用户确认选定的值时触发| 组件绑定值 |
| blur| 当 input 失去焦点时触发| 组件实例 |
| focus| 当 input 获得焦点时触发| 组件实例 |
#### Methods
| 方法名| 说明| 参数 |
| :--- | :--- | :--- |
| focus| 使 input 获取焦点| - |
`,
  "el-date-picker": `#### [访问](https://element.eleme.cn/#/zh-CN/component/date-picker)
#### Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| value / v-model| 绑定值| date(DatePicker) / array(DateRangePicker)| —| — |
| readonly| 完全只读| boolean| —| false |
| disabled| 禁用| boolean| —| false |
| editable| 文本框可输入| boolean| —| true |
| clearable| 是否显示清除按钮| boolean| —| true |
| size| 输入框尺寸| string| large, small, mini| — |
| placeholder| 非范围选择时的占位内容| string| —| — |
| start-placeholder| 范围选择时开始日期的占位内容| string| —| — |
| end-placeholder| 范围选择时结束日期的占位内容| string| —| — |
| type| 显示类型| string| year/month/date/dates/ week/datetime/datetimerange/ daterange/monthrange| date |
| format| 显示在输入框中的格式| string| 见日期格式| yyyy-MM-dd |
| align| 对齐方式| string| left, center, right| left |
| popper-class| DatePicker 下拉框的类名| string| —| — |
| picker-options| 当前时间日期选择器特有的选项参考下表| object| —| {} |
| range-separator| 选择范围时的分隔符| string| —| '-' |
| default-value| 可选，选择器打开时默认显示的时间| Date| 可被new Date()解析| — |
| default-time| 范围选择时选中日期所使用的当日内具体时刻| string[]| 数组，长度为 2，每项值为字符串，形如12:00:00，第一项指定开始日期的时刻，第二项指定结束日期的时刻，不指定会使用时刻 00:00:00| — |
| value-format| 可选，绑定值的格式。不指定则绑定值为 Date 对象| string| 见日期格式| — |
| name| 原生属性| string| —| — |
| unlink-panels| 在范围选择器里取消两个日期面板之间的联动| boolean| —| false |
| prefix-icon| 自定义头部图标的类名| string| —| el-icon-date |
| clear-icon| 自定义清空图标的类名| string| —| el-icon-circle-close |
| validate-event| 输入时是否触发表单的校验| boolean| -| true |
#### Picker Options
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| shortcuts| 设置快捷选项，需要传入 { text, onClick } 对象用法参考 demo 或下表| Object[]| —| — |
| disabledDate| 设置禁用状态，参数为当前日期，要求返回 Boolean| Function| —| — |
| cellClassName| 设置日期的 className| Function(Date)| —| — |
| firstDayOfWeek| 周起始日| Number| 1 到 7| 7 |
| onPick| 选中日期后会执行的回调，只有当 daterange 或 datetimerange 才生效| Function({ maxDate, minDate })| —| — |
#### Shortcuts
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| text| 标题文本| string| —| — |
| onClick| 选中后的回调函数，参数是 vm，可通过触发 'pick' 事件设置选择器的值。例如 vm.$emit('pick', new Date())| function| —| — |
#### Events
| 事件名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| change| 用户确认选定的值时触发| 组件绑定值。格式与绑定值一致，可受 value-format 控制 |
| blur| 当 input 失去焦点时触发| 组件实例 |
| focus| 当 input 获得焦点时触发| 组件实例 |
#### Methods
| 方法名| 说明| 参数 |
| :--- | :--- | :--- |
| focus| 使 input 获取焦点| — |
`,
  "el-datetime-picker": `#### [访问](https://element.eleme.cn/#/zh-CN/component/datetime-picker)
#### Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| value / v-model| 绑定值| date(DateTimePicker) / array(DateTimeRangePicker)| —| — |
| readonly| 完全只读| boolean| —| false |
| disabled| 禁用| boolean| —| false |
| editable| 文本框可输入| boolean| —| true |
| clearable| 是否显示清除按钮| boolean| —| true |
| size| 输入框尺寸| string| large, small, mini| — |
| placeholder| 非范围选择时的占位内容| string| —| — |
| start-placeholder| 范围选择时开始日期的占位内容| string| —| — |
| end-placeholder| 范围选择时结束日期的占位内容| string| —| — |
| time-arrow-control| 是否使用箭头进行时间选择| boolean| —| false |
| type| 显示类型| string| year/month/date/week/ datetime/datetimerange/daterange| date |
| format| 显示在输入框中的格式| string| 见日期格式| yyyy-MM-dd HH:mm:ss |
| align| 对齐方式| string| left, center, right| left |
| popper-class| DateTimePicker 下拉框的类名| string| —| — |
| picker-options| 当前时间日期选择器特有的选项参考下表| object| —| {} |
| range-separator| 选择范围时的分隔符| string| -| '-' |
| default-value| 可选，选择器打开时默认显示的时间| Date| 可被new Date()解析| — |
| default-time| 选中日期后的默认具体时刻| 非范围选择时：string / 范围选择时：string[]| 非范围选择时：形如12:00:00的字符串；范围选择时：数组，长度为 2，每项值为字符串，形如12:00:00，第一项指定开始日期的时刻，第二项指定结束日期的时刻。不指定会使用时刻 00:00:00| — |
| value-format| 可选，绑定值的格式。不指定则绑定值为 Date 对象| string| 见日期格式| — |
| name| 原生属性| string| —| — |
| unlink-panels| 在范围选择器里取消两个日期面板之间的联动| boolean| —| false |
| prefix-icon| 自定义头部图标的类名| string| —| el-icon-date |
| clear-icon| 自定义清空图标的类名| string| —| el-icon-circle-close |
#### Picker Options
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| shortcuts| 设置快捷选项，需要传入 { text, onClick } 对象用法参考 demo 或下表| Object[]| —| — |
| disabledDate| 设置禁用状态，参数为当前日期，要求返回 Boolean| Function| —| — |
| cellClassName| 设置日期的 className| Function(Date)| —| — |
| firstDayOfWeek| 周起始日| Number| 1 到 7| 7 |
#### Shortcuts
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| text| 标题文本| string| —| — |
| onClick| 选中后的回调函数，参数是 vm，可通过触发 'pick' 事件设置选择器的值。例如 vm.$emit('pick', new Date())| function| —| — |
#### Events
| Event Name| Description| Parameters |
| :--- | :--- | :--- |
| change| 用户确认选定的值时触发| 组件绑定值。格式与绑定值一致，可受 value-format 控制 |
| blur| 当 input 失去焦点时触发| 组件实例 |
| focus| 当 input 获得焦点时触发| 组件实例 |
#### Methods
| 方法名| 说明| 参数 |
| :--- | :--- | :--- |
| focus| 使 input 获取焦点| — |
#### Slots
| Name| 说明 |
| :--- | :--- |
| range-separator| 自定义分隔符 |
`,
  "el-upload": `#### [访问](https://element.eleme.cn/#/zh-CN/component/upload)
#### Attribute
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| action| 必选参数，上传的地址| string| —| — |
| headers| 设置上传的请求头部| object| —| — |
| multiple| 是否支持多选文件| boolean| —| — |
| data| 上传时附带的额外参数| object| —| — |
| name| 上传的文件字段名| string| —| file |
| with-credentials| 支持发送 cookie 凭证信息| boolean| —| false |
| show-file-list| 是否显示已上传文件列表| boolean| —| true |
| drag| 是否启用拖拽上传| boolean| —| false |
| accept| 接受上传的文件类型（thumbnail-mode 模式下此参数无效）| string| —| — |
| on-preview| 点击文件列表中已上传的文件时的钩子| function(file)| —| — |
| on-remove| 文件列表移除文件时的钩子| function(file, fileList)| —| — |
| on-success| 文件上传成功时的钩子| function(response, file, fileList)| —| — |
| on-error| 文件上传失败时的钩子| function(err, file, fileList)| —| — |
| on-progress| 文件上传时的钩子| function(event, file, fileList)| —| — |
| on-change| 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用| function(file, fileList)| —| — |
| before-upload| 上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。| function(file)| —| — |
| before-remove| 删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除。| function(file, fileList)| —| — |
| list-type| 文件列表的类型| string| text/picture/picture-card| text |
| auto-upload| 是否在选取文件后立即进行上传| boolean| —| true |
| file-list| 上传的文件列表, 例如: [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}]| array| —| [] |
| http-request| 覆盖默认的上传行为，可以自定义上传的实现| function| —| — |
| disabled| 是否禁用| boolean| —| false |
| limit| 最大允许上传个数| number| —| — |
| on-exceed| 文件超出个数限制时的钩子| function(files, fileList)| —| - |
#### Slot
| name| 说明 |
| :--- | :--- |
| trigger| 触发文件选择框的内容 |
| tip| 提示说明文字 |
#### Methods
| 方法名| 说明| 参数 |
| :--- | :--- | :--- |
| clearFiles| 清空已上传的文件列表（该方法不支持在 before-upload 中调用）| — |
| abort| 取消上传请求| （ file: fileList 中的 file 对象 ） |
| submit| 手动上传文件列表| — |
`,
  "el-rate": `#### [访问](https://element.eleme.cn/#/zh-CN/component/rate)
#### Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| value / v-model| 绑定值| number| —| 0 |
| max| 最大分值| number| —| 5 |
| disabled| 是否为只读| boolean| —| false |
| allow-half| 是否允许半选| boolean| —| false |
| low-threshold| 低分和中等分数的界限值，值本身被划分在低分中| number| —| 2 |
| high-threshold| 高分和中等分数的界限值，值本身被划分在高分中| number| —| 4 |
| colors| icon 的颜色。若传入数组，共有 3 个元素，为 3 个分段所对应的颜色；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的颜色| array/object| —| ['#F7BA2A', '#F7BA2A', '#F7BA2A'] |
| void-color| 未选中 icon 的颜色| string| —| #C6D1DE |
| disabled-void-color| 只读时未选中 icon 的颜色| string| —| #EFF2F7 |
| icon-classes| icon 的类名。若传入数组，共有 3 个元素，为 3 个分段所对应的类名；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的类名| array/object| —| ['el-icon-star-on', 'el-icon-star-on','el-icon-star-on'] |
| void-icon-class| 未选中 icon 的类名| string| —| el-icon-star-off |
| disabled-void-icon-class| 只读时未选中 icon 的类名| string| —| el-icon-star-on |
| show-text| 是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容| boolean| —| false |
| show-score| 是否显示当前分数，show-score 和 show-text 不能同时为真| boolean| —| false |
| text-color| 辅助文字的颜色| string| —| #1F2D3D |
| texts| 辅助文字数组| array| —| ['极差', '失望', '一般', '满意', '惊喜'] |
| score-template| 分数显示模板| string| —| {value} |
#### Events
| 事件名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| change| 分值改变时触发| 改变后的分值 |
`,
  "el-color-picker": `#### [访问](https://element.eleme.cn/#/zh-CN/component/color-picker)
#### Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| value / v-model| 绑定值| string| —| — |
| disabled| 是否禁用| boolean| —| false |
| size| 尺寸| string| medium / small / mini| — |
| show-alpha| 是否支持透明度选择| boolean| —| false |
| color-format| 写入 v-model 的颜色的格式| string| hsl / hsv / hex / rgb| hex（show-alpha 为 false）/ rgb（show-alpha 为 true） |
| popper-class| ColorPicker 下拉框的类名| string| —| — |
| predefine| 预定义颜色| array| —| — |
#### Events
| 事件名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| change| 当绑定值变化时触发| 当前值 |
| active-change| 面板中当前显示的颜色发生改变时触发| 当前显示的颜色值 |
`,
  "el-transfer": `#### [访问](https://element.eleme.cn/#/zh-CN/component/transfer)
#### Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| value / v-model| 绑定值| array| —| — |
| data| Transfer 的数据源| array[{ key, label, disabled }]| —| [ ] |
| filterable| 是否可搜索| boolean| —| false |
| filter-placeholder| 搜索框占位符| string| —| 请输入搜索内容 |
| filter-method| 自定义搜索方法| function| —| — |
| target-order| 右侧列表元素的排序策略：若为 original，则保持与数据源相同的顺序；若为 push，则新加入的元素排在最后；若为 unshift，则新加入的元素排在最前| string| original / push / unshift| original |
| titles| 自定义列表标题| array| —| ['列表 1', '列表 2'] |
| button-texts| 自定义按钮文案| array| —| [ ] |
| render-content| 自定义数据项渲染函数| function(h, option)| —| — |
| format| 列表顶部勾选状态文案| object{noChecked, hasChecked}| —| { noChecked: '\${checked}/\${total}', hasChecked: '\${checked}/\${total}' } |
| props| 数据源的字段别名| object{key, label, disabled}| —| — |
| left-default-checked| 初始状态下左侧列表的已勾选项的 key 数组| array| —| [ ] |
| right-default-checked| 初始状态下右侧列表的已勾选项的 key 数组| array| —| [ ] |
#### Slot
| name| 说明 |
| :--- | :--- |
| left-footer| 左侧列表底部的内容 |
| right-footer| 右侧列表底部的内容 |
#### Scoped Slot
| name| 说明 |
| :--- | :--- |
| —| 自定义数据项的内容，参数为 { option } |
#### Methods
| 方法名| 说明| 参数 |
| :--- | :--- | :--- |
| clearQuery| 清空某个面板的搜索关键词| 'left' / 'right'，指定需要清空的面板 |
#### Events
| 事件名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| change| 右侧列表元素变化时触发| 当前值、数据移动的方向（'left' / 'right'）、发生移动的数据 key 数组 |
| left-check-change| 左侧列表元素被用户选中 / 取消选中时触发| 当前被选中的元素的 key 数组、选中状态发生变化的元素的 key 数组 |
| right-check-change| 右侧列表元素被用户选中 / 取消选中时触发| 当前被选中的元素的 key 数组、选中状态发生变化的元素的 key 数组 |
`,
  "el-form": `#### [访问](https://element.eleme.cn/#/zh-CN/component/form)
#### Form Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| model| 表单数据对象| object| —| — |
| rules| 表单验证规则| object| —| — |
| inline| 行内表单模式| boolean| —| false |
| label-position| 表单域标签的位置，如果值为 left 或者 right 时，则需要设置 label-width| string| right/left/top| right |
| label-width| 表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 auto。| string| —| — |
| label-suffix| 表单域标签的后缀| string| —| — |
| hide-required-asterisk| 是否隐藏必填字段的标签旁边的红色星号| boolean| —| false |
| show-message| 是否显示校验错误信息| boolean| —| true |
| inline-message| 是否以行内形式展示校验信息| boolean| —| false |
| status-icon| 是否在输入框中显示校验结果反馈图标| boolean| —| false |
| validate-on-rule-change| 是否在 rules 属性改变后立即触发一次验证| boolean| —| true |
| size| 用于控制该表单内组件的尺寸| string| medium / small / mini| — |
| disabled| 是否禁用该表单内的所有组件。若设置为 true，则表单内组件上的 disabled 属性不再生效| boolean| —| false |
#### Form Methods
| 方法名| 说明| 参数 |
| :--- | :--- | :--- |
| validate| 对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise| Function(callback: Function(boolean, object)) |
| validateField| 对部分表单字段进行校验的方法| Function(props: array | string, callback: Function(errorMessage: string)) |
| resetFields| 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果| — |
| clearValidate| 移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果| Function(props: array | string) |
#### Form Events
| 事件名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| validate| 任一表单项被校验后触发| 被校验的表单项 prop 值，校验是否通过，错误消息（如果存在） |
#### Form-Item Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| prop| 表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的| string| 传入 Form 组件的 model 中的字段| — |
| label| 标签文本| string| —| — |
| label-width| 表单域标签的的宽度，例如 '50px'。支持 auto。| string| —| — |
| required| 是否必填，如不设置，则会根据校验规则自动生成| boolean| —| false |
| rules| 表单验证规则| object| —| — |
| error| 表单域验证错误信息, 设置该值会使表单验证状态变为error，并显示该错误信息| string| —| — |
| show-message| 是否显示校验错误信息| boolean| —| true |
| inline-message| 以行内形式展示校验信息| boolean| —| false |
| size| 用于控制该表单域下组件的尺寸| string| medium / small / mini| - |
#### Form-Item Slot
| name| 说明 |
| :--- | :--- |
| —| Form Item 的内容 |
| label| 标签文本的内容 |
#### Form-Item Scoped Slot
| name| 说明 |
| :--- | :--- |
| error| 自定义表单校验信息的显示方式，参数为 { error } |
#### Form-Item Methods
| 方法名| 说明| 参数 |
| :--- | :--- | :--- |
| resetField| 对该表单项进行重置，将其值重置为初始值并移除校验结果| - |
| clearValidate| 移除该表单项的校验结果| - |
`,
  "el-table": `#### [访问](https://element.eleme.cn/#/zh-CN/component/table)
#### Table Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| data| 显示的数据| array| —| — |
| height| Table 的高度，默认为自动高度。如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。| string/number| —| — |
| max-height| Table 的最大高度。合法的值为数字或者单位为 px 的高度。| string/number| —| — |
| stripe| 是否为斑马纹 table| boolean| —| false |
| border| 是否带有纵向边框| boolean| —| false |
| size| Table 的尺寸| string| medium / small / mini| — |
| fit| 列的宽度是否自撑开| boolean| —| true |
| show-header| 是否显示表头| boolean| —| true |
| highlight-current-row| 是否要高亮当前行| boolean| —| false |
| current-row-key| 当前行的 key，只写属性| String,Number| —| — |
| row-class-name| 行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。| Function({row, rowIndex})/String| —| — |
| row-style| 行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。| Function({row, rowIndex})/Object| —| — |
| cell-class-name| 单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。| Function({row, column, rowIndex, columnIndex})/String| —| — |
| cell-style| 单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。| Function({row, column, rowIndex, columnIndex})/Object| —| — |
| header-row-class-name| 表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。| Function({row, rowIndex})/String| —| — |
| header-row-style| 表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。| Function({row, rowIndex})/Object| —| — |
| header-cell-class-name| 表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className。| Function({row, column, rowIndex, columnIndex})/String| —| — |
| header-cell-style| 表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。| Function({row, column, rowIndex, columnIndex})/Object| —| — |
| row-key| 行数据的 Key，用来优化 Table 的渲染；在使用 reserve-selection 功能与显示树形数据时，该属性是必填的。类型为 String 时，支持多层访问：user.info.id，但不支持 user.info[0].id，此种情况请使用 Function。| Function(row)/String| —| — |
| empty-text| 空数据时显示的文本内容，也可以通过 slot="empty" 设置| String| —| 暂无数据 |
| default-expand-all| 是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效| Boolean| —| false |
| expand-row-keys| 可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组。| Array| —|  |
| default-sort| 默认的排序列的 prop 和顺序。它的prop属性指定默认的排序的列，order指定默认排序的顺序| Object| order: ascending, descending| 如果只指定了prop, 没有指定order, 则默认顺序是ascending |
| tooltip-effect| tooltip effect 属性| String| dark/light|  |
| show-summary| 是否在表尾显示合计行| Boolean| —| false |
| sum-text| 合计行第一列的文本| String| —| 合计 |
| summary-method| 自定义的合计计算方法| Function({ columns, data })| —| — |
| span-method| 合并行或列的计算方法| Function({ row, column, rowIndex, columnIndex })| —| — |
| select-on-indeterminate| 在多选表格中，当仅有部分行被选中时，点击表头的多选框时的行为。若为 true，则选中所有行；若为 false，则取消选择所有行| Boolean| —| true |
| indent| 展示树形数据时，树节点的缩进| Number| —| 16 |
| lazy| 是否懒加载子节点数据| Boolean| —| — |
| load| 加载子节点数据的函数，lazy 为 true 时生效，函数第二个参数包含了节点的层级信息| Function(row, treeNode, resolve)| —| — |
| tree-props| 渲染嵌套数据的配置选项| Object| —| { hasChildren: 'hasChildren', children: 'children' } |
#### Table Events
| 事件名| 说明| 参数 |
| :--- | :--- | :--- |
| select| 当用户手动勾选数据行的 Checkbox 时触发的事件| selection, row |
| select-all| 当用户手动勾选全选 Checkbox 时触发的事件| selection |
| selection-change| 当选择项发生变化时会触发该事件| selection |
| cell-mouse-enter| 当单元格 hover 进入时会触发该事件| row, column, cell, event |
| cell-mouse-leave| 当单元格 hover 退出时会触发该事件| row, column, cell, event |
| cell-click| 当某个单元格被点击时会触发该事件| row, column, cell, event |
| cell-dblclick| 当某个单元格被双击击时会触发该事件| row, column, cell, event |
| row-click| 当某一行被点击时会触发该事件| row, column, event |
| row-contextmenu| 当某一行被鼠标右键点击时会触发该事件| row, column, event |
| row-dblclick| 当某一行被双击时会触发该事件| row, column, event |
| header-click| 当某一列的表头被点击时会触发该事件| column, event |
| header-contextmenu| 当某一列的表头被鼠标右键点击时触发该事件| column, event |
| sort-change| 当表格的排序条件发生变化的时候会触发该事件| { column, prop, order } |
| filter-change| 当表格的筛选条件发生变化的时候会触发该事件，参数的值是一个对象，对象的 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组。| filters |
| current-change| 当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性| currentRow, oldCurrentRow |
| header-dragend| 当拖动表头改变了列的宽度的时候会触发该事件| newWidth, oldWidth, column, event |
| expand-change| 当用户对某一行展开或者关闭的时候会触发该事件（展开行时，回调的第二个参数为 expandedRows；树形表格时第二参数为 expanded）| row, (expandedRows | expanded) |
#### Table Methods
| 方法名| 说明| 参数 |
| :--- | :--- | :--- |
| clearSelection| 用于多选表格，清空用户的选择| — |
| toggleRowSelection| 用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中）| row, selected |
| toggleAllSelection| 用于多选表格，切换所有行的选中状态| - |
| toggleRowExpansion| 用于可展开表格与树形表格，切换某一行的展开状态，如果使用了第二个参数，则是设置这一行展开与否（expanded 为 true 则展开）| row, expanded |
| setCurrentRow| 用于单选表格，设定某一行为选中行，如果调用时不加参数，则会取消目前高亮行的选中状态。| row |
| clearSort| 用于清空排序条件，数据会恢复成未排序的状态| — |
| clearFilter| 不传入参数时用于清空所有过滤条件，数据会恢复成未过滤的状态，也可传入由columnKey组成的数组以清除指定列的过滤条件| columnKey |
| doLayout| 对 Table 进行重新布局。当 Table 或其祖先元素由隐藏切换为显示时，可能需要调用此方法| — |
| sort| 手动对 Table 进行排序。参数prop属性指定排序列，order指定排序顺序。| prop: string, order: string |
#### Table Slot
| name| 说明 |
| :--- | :--- |
| append| 插入至表格最后一行之后的内容，如果需要对表格的内容进行无限滚动操作，可能需要用到这个 slot。若表格有合计行，该 slot 会位于合计行之上。 |
#### Table-column Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| type| 对应列的类型。如果设置了 selection 则显示多选框；如果设置了 index 则显示该行的索引（从 1 开始计算）；如果设置了 expand 则显示为一个可展开的按钮| string| selection/index/expand| — |
| index| 如果设置了 type=index，可以通过传递 index 属性来自定义索引| number, Function(index)| -| - |
| column-key| column 的 key，如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件| string| —| — |
| label| 显示的标题| string| —| — |
| prop| 对应列内容的字段名，也可以使用 property 属性| string| —| — |
| width| 对应列的宽度| string| —| — |
| min-width| 对应列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列| string| —| — |
| fixed| 列是否固定在左侧或者右侧，true 表示固定在左侧| string, boolean| true, left, right| — |
| render-header| 列标题 Label 区域渲染使用的 Function| Function(h, { column, $index })| —| — |
| sortable| 对应列是否可以排序，如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件| boolean, string| true, false, 'custom'| false |
| sort-method| 对数据进行排序的时候使用的方法，仅当 sortable 设置为 true 的时候有效，需返回一个数字，和 Array.sort 表现一致| Function(a, b)| —| — |
| sort-by| 指定数据按照哪个属性进行排序，仅当 sortable 设置为 true 且没有设置 sort-method 的时候有效。如果 sort-by 为数组，则先按照第 1 个属性排序，如果第 1 个相等，再按照第 2 个排序，以此类推| String/Array/Function(row, index)| —| — |
| sort-orders| 数据在排序时所使用排序策略的轮转顺序，仅当 sortable 为 true 时有效。需传入一个数组，随着用户点击表头，该列依次按照数组中元素的顺序进行排序| array| 数组中的元素需为以下三者之一：ascending 表示升序，descending 表示降序，null 表示还原为原始顺序| ['ascending', 'descending', null] |
| resizable| 对应列是否可以通过拖动改变宽度（需要在 el-table 上设置 border 属性为真）| boolean| —| true |
| formatter| 用来格式化内容| Function(row, column, cellValue, index)| —| — |
| show-overflow-tooltip| 当内容过长被隐藏时显示 tooltip| Boolean| —| false |
| align| 对齐方式| String| left/center/right| left |
| header-align| 表头对齐方式，若不设置该项，则使用表格的对齐方式| String| left/center/right| — |
| class-name| 列的 className| string| —| — |
| label-class-name| 当前列标题的自定义类名| string| —| — |
| selectable| 仅对 type=selection 的列有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选| Function(row, index)| —| — |
| reserve-selection| 仅对 type=selection 的列有效，类型为 Boolean，为 true 则会在数据更新之后保留之前选中的数据（需指定 row-key）| Boolean| —| false |
| filters| 数据过滤的选项，数组格式，数组中的元素需要有 text 和 value 属性。| Array[{ text, value }]| —| — |
| filter-placement| 过滤弹出框的定位| String| 与 Tooltip 的 placement 属性相同| — |
| filter-multiple| 数据过滤的选项是否多选| Boolean| —| true |
| filter-method| 数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示。| Function(value, row, column)| —| — |
| filtered-value| 选中的数据过滤项，如果需要自定义表头过滤的渲染方式，可能会需要此属性。| Array| —| — |
#### Table-column Scoped Slot
| name| 说明 |
| :--- | :--- |
| —| 自定义列的内容，参数为 { row, column, $index } |
| header| 自定义表头的内容. 参数为 { column, $index } |
`,
  "el-tag": `#### [访问](https://element.eleme.cn/#/zh-CN/component/tag)
#### Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| type| 类型| string| success/info/warning/danger| — |
| closable| 是否可关闭| boolean| —| false |
| disable-transitions| 是否禁用渐变动画| boolean| —| false |
| hit| 是否有边框描边| boolean| —| false |
| color| 背景色| string| —| — |
| size| 尺寸| string| medium / small / mini| — |
| effect| 主题| string| dark / light / plain| light |
#### Events
| 事件名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| click| 点击 Tag 时触发的事件| — |
| close| 关闭 Tag 时触发的事件| — |
`,
  "el-progress": `#### [访问](https://element.eleme.cn/#/zh-CN/component/progress)
#### Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| percentage| 百分比（必填）| number| 0-100| 0 |
| type| 进度条类型| string| line/circle/dashboard| line |
| stroke-width| 进度条的宽度，单位 px| number| —| 6 |
| text-inside| 进度条显示文字内置在进度条内（只在 type=line 时可用）| boolean| —| false |
| status| 进度条当前状态| string| success/exception/warning| — |
| color| 进度条背景色（会覆盖 status 状态颜色）| string/function/array| —| '' |
| width| 环形进度条画布宽度（只在 type 为 circle 或 dashboard 时可用）| number| | 126 |
| show-text| 是否显示进度条文字内容| boolean| —| true |
| stroke-linecap| circle/dashboard 类型路径两端的形状| string| butt/round/square| round |
| format| 指定进度条文字内容| function(percentage)| —| — |
`,
  "el-tree": `#### [访问](https://element.eleme.cn/#/zh-CN/component/tree)
#### Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| data| 展示数据| array| —| — |
| empty-text| 内容为空的时候展示的文本| String| —| — |
| node-key| 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的| String| —| — |
| props| 配置选项，具体看下表| object| —| — |
| render-after-expand| 是否在第一次展开某个树节点后才渲染其子节点| boolean| —| true |
| load| 加载子树数据的方法，仅当 lazy 属性为true 时生效| function(node, resolve)| —| — |
| render-content| 树节点的内容区的渲染 Function| Function(h, { node, data, store }| —| — |
| highlight-current| 是否高亮当前选中节点，默认值是 false。| boolean| —| false |
| default-expand-all| 是否默认展开所有节点| boolean| —| false |
| expand-on-click-node| 是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点。| boolean| —| true |
| check-on-click-node| 是否在点击节点的时候选中节点，默认值为 false，即只有在点击复选框时才会选中节点。| boolean| —| false |
| auto-expand-parent| 展开子节点的时候是否自动展开父节点| boolean| —| true |
| default-expanded-keys| 默认展开的节点的 key 的数组| array| —| — |
| show-checkbox| 节点是否可被选择| boolean| —| false |
| check-strictly| 在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false| boolean| —| false |
| default-checked-keys| 默认勾选的节点的 key 的数组| array| —| — |
| current-node-key| 当前选中的节点| string, number| —| — |
| filter-node-method| 对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏| Function(value, data, node)| —| — |
| accordion| 是否每次只打开一个同级树节点展开| boolean| —| false |
| indent| 相邻级节点间的水平缩进，单位为像素| number| —| 16 |
| icon-class| 自定义树节点的图标| string| -| - |
| lazy| 是否懒加载子节点，需与 load 方法结合使用| boolean| —| false |
| draggable| 是否开启拖拽节点功能| boolean| —| false |
| allow-drag| 判断节点能否被拖拽| Function(node)| —| — |
| allow-drop| 拖拽时判定目标节点能否被放置。type 参数有三种情况：'prev'、'inner' 和 'next'，分别表示放置在目标节点前、插入至目标节点和放置在目标节点后| Function(draggingNode, dropNode, type)| —| — |
#### props
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| label| 指定节点标签为节点对象的某个属性值| string, function(data, node)| —| — |
| children| 指定子树为节点对象的某个属性值| string| —| — |
| disabled| 指定节点选择框是否禁用为节点对象的某个属性值| boolean, function(data, node)| —| — |
| isLeaf| 指定节点是否为叶子节点，仅在指定了 lazy 属性的情况下生效| boolean, function(data, node)| —| — |
#### 方法
| 方法名| 说明| 参数 |
| :--- | :--- | :--- |
| filter| 对树节点进行筛选操作| 接收一个任意类型的参数，该参数会在 filter-node-method 中作为第一个参数 |
| updateKeyChildren| 通过 keys 设置节点子元素，使用此方法必须设置 node-key 属性| (key, data) 接收两个参数，1. 节点 key 2. 节点数据的数组 |
| getCheckedNodes| 若节点可被选择（即 show-checkbox 为 true），则返回目前被选中的节点所组成的数组| (leafOnly, includeHalfChecked) 接收两个 boolean 类型的参数，1. 是否只是叶子节点，默认值为 false 2. 是否包含半选节点，默认值为 false |
| setCheckedNodes| 设置目前勾选的节点，使用此方法必须设置 node-key 属性| (nodes) 接收勾选节点数据的数组 |
| getCheckedKeys| 若节点可被选择（即 show-checkbox 为 true），则返回目前被选中的节点的 key 所组成的数组| (leafOnly) 接收一个 boolean 类型的参数，若为 true 则仅返回被选中的叶子节点的 keys，默认值为 false |
| setCheckedKeys| 通过 keys 设置目前勾选的节点，使用此方法必须设置 node-key 属性| (keys, leafOnly) 接收两个参数，1. 勾选节点的 key 的数组 2. boolean 类型的参数，若为 true 则仅设置叶子节点的选中状态，默认值为 false |
| setChecked| 通过 key / data 设置某个节点的勾选状态，使用此方法必须设置 node-key 属性| (key/data, checked, deep) 接收三个参数，1. 勾选节点的 key 或者 data 2. boolean 类型，节点是否选中  3. boolean 类型，是否设置子节点 ，默认为 false |
| getHalfCheckedNodes| 若节点可被选择（即 show-checkbox 为 true），则返回目前半选中的节点所组成的数组| - |
| getHalfCheckedKeys| 若节点可被选择（即 show-checkbox 为 true），则返回目前半选中的节点的 key 所组成的数组| - |
| getCurrentKey| 获取当前被选中节点的 key，使用此方法必须设置 node-key 属性，若没有节点被选中则返回 null| — |
| getCurrentNode| 获取当前被选中节点的 data，若没有节点被选中则返回 null| — |
| setCurrentKey| 通过 key 设置某个节点的当前选中状态，使用此方法必须设置 node-key 属性| (key) 待被选节点的 key，若为 null 则取消当前高亮的节点 |
| setCurrentNode| 通过 node 设置某个节点的当前选中状态，使用此方法必须设置 node-key 属性| (node) 待被选节点的 node |
| getNode| 根据 data 或者 key 拿到 Tree 组件中的 node| (data) 要获得 node 的 key 或者 data |
| remove| 删除 Tree 中的一个节点，使用此方法必须设置 node-key 属性| (data) 要删除的节点的 data 或者 node |
| append| 为 Tree 中的一个节点追加一个子节点| (data, parentNode) 接收两个参数，1. 要追加的子节点的 data 2. 子节点的 parent 的 data、key 或者 node |
| insertBefore| 为 Tree 的一个节点的前面增加一个节点| (data, refNode) 接收两个参数，1. 要增加的节点的 data 2. 要增加的节点的后一个节点的 data、key 或者 node |
| insertAfter| 为 Tree 的一个节点的后面增加一个节点| (data, refNode) 接收两个参数，1. 要增加的节点的 data 2. 要增加的节点的前一个节点的 data、key 或者 node |
#### Events
| 事件名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| node-click| 节点被点击时的回调| 共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。 |
| node-contextmenu| 当某一节点被鼠标右键点击时会触发该事件| 共四个参数，依次为：event、传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。 |
| check-change| 节点选中状态发生变化时的回调| 共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点本身是否被选中、节点的子树中是否有被选中的节点 |
| check| 当复选框被点击的时候触发| 共两个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、树目前的选中状态对象，包含 checkedNodes、checkedKeys、halfCheckedNodes、halfCheckedKeys 四个属性 |
| current-change| 当前选中节点变化时触发的事件| 共两个参数，依次为：当前节点的数据，当前节点的 Node 对象 |
| node-expand| 节点被展开时触发的事件| 共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身 |
| node-collapse| 节点被关闭时触发的事件| 共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身 |
| node-drag-start| 节点开始拖拽时触发的事件| 共两个参数，依次为：被拖拽节点对应的 Node、event |
| node-drag-enter| 拖拽进入其他节点时触发的事件| 共三个参数，依次为：被拖拽节点对应的 Node、所进入节点对应的 Node、event |
| node-drag-leave| 拖拽离开某个节点时触发的事件| 共三个参数，依次为：被拖拽节点对应的 Node、所离开节点对应的 Node、event |
| node-drag-over| 在拖拽节点时触发的事件（类似浏览器的 mouseover 事件）| 共三个参数，依次为：被拖拽节点对应的 Node、当前进入节点对应的 Node、event |
| node-drag-end| 拖拽结束时（可能未成功）触发的事件| 共四个参数，依次为：被拖拽节点对应的 Node、结束拖拽时最后进入的节点（可能为空）、被拖拽节点的放置位置（before、after、inner）、event |
| node-drop| 拖拽成功完成时触发的事件| 共四个参数，依次为：被拖拽节点对应的 Node、结束拖拽时最后进入的节点、被拖拽节点的放置位置（before、after、inner）、event |
#### Scoped Slot
| name| 说明 |
| :--- | :--- |
| —| 自定义树节点的内容，参数为 { node, data } |
`,
  "el-pagination": `#### [访问](https://element.eleme.cn/#/zh-CN/component/pagination)
#### Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| small| 是否使用小型分页样式| boolean| —| false |
| background| 是否为分页按钮添加背景色| boolean| —| false |
| page-size| 每页显示条目个数，支持 .sync 修饰符| number| —| 10 |
| total| 总条目数| number| —| — |
| page-count| 总页数，total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-sizes 的更改，则需要使用 total 属性| Number| —| — |
| pager-count| 页码按钮的数量，当总页数超过该值时会折叠| number| 大于等于 5 且小于等于 21 的奇数| 7 |
| current-page| 当前页数，支持 .sync 修饰符| number| —| 1 |
| layout| 组件布局，子组件名用逗号分隔| String| sizes, prev, pager, next, jumper, ->, total, slot| 'prev, pager, next, jumper, ->, total' |
| page-sizes| 每页显示个数选择器的选项设置| number[]| —| [10, 20, 30, 40, 50, 100] |
| popper-class| 每页显示个数选择器的下拉框类名| string| —| — |
| prev-text| 替代图标显示的上一页文字| string| —| — |
| next-text| 替代图标显示的下一页文字| string| —| — |
| disabled| 是否禁用| boolean| —| false |
| hide-on-single-page| 只有一页时是否隐藏| boolean| —| - |
#### Events
| 事件名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| size-change| pageSize 改变时会触发| 每页条数 |
| current-change| currentPage 改变时会触发| 当前页 |
| prev-click| 用户点击上一页按钮改变当前页后触发| 当前页 |
| next-click| 用户点击下一页按钮改变当前页后触发| 当前页 |
#### Slot
| name| 说明 |
| :--- | :--- |
| —| 自定义内容，需要在 layout 中列出 slot |
`,
  "el-badge": `#### [访问](https://element.eleme.cn/#/zh-CN/component/badge)
#### Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| value| 显示值| string, number| —| — |
| max| 最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型| number| —| — |
| is-dot| 小圆点| boolean| —| false |
| hidden| 隐藏 badge| boolean| —| false |
| type| 类型| string| primary / success / warning / danger / info| — |
`,
  "el-avatar": `#### [访问](https://element.eleme.cn/#/zh-CN/component/avatar)
#### Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| icon| 设置头像的图标类型，参考 Icon 组件| string| |  |
| size| 设置头像的大小| number/string| number / large / medium / small| large |
| shape| 设置头像的形状| string| circle / square| circle |
| src| 图片头像的资源地址| string| |  |
| srcSet| 以逗号分隔的一个或多个字符串列表表明一系列用户代理使用的可能的图像| string| |  |
| alt| 描述图像的替换文本| string| |  |
| fit| 当展示类型为图片的时候，设置图片如何适应容器框| string| fill / contain / cover / none / scale-down| cover |
#### Events
| 事件名| 说明| 回调参数 |
| :--- | :--- | :--- |
| error| 图片类头像加载失败的回调， 返回 false 会关闭组件默认的 fallback 行为| (e: Event) |
#### Slot
| 名称| 说明 |
| :--- | :--- |
| default| 自定义头像展示内容 |
`,
  "el-skeleton": `#### [访问](https://element.eleme.cn/#/zh-CN/component/skeleton)
#### Skeleton Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| animated| 是否使用动画| boolean| true / false| false |
| count| 渲染多少个 template, 建议使用尽可能小的数字| number| integer| 1 |
| loading| 是否显示 skeleton 骨架屏| boolean| true / false| true |
| rows| 骨架屏段落数量| number| 正整数| 4 |
| throttle| 延迟占位 DOM 渲染的时间, 单位是毫秒| number| 正整数| 0 |
#### Skeleton Item Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| variant| 当前显示的占位元素的样式| Enum(string)| p / text / h1 / h3 / text / caption / button / image / circle / rect| text |
#### Skeleton Slots
| name| description |
| :--- | :--- |
| default| 用来展示真实 UI |
| template| 用来展示自定义占位符 |
`,
  "el-empty": `#### [访问](https://element.eleme.cn/#/zh-CN/component/empty)
#### Empty Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| image| 图片地址| string| —| — |
| image-size| 图片大小（宽度）| number| —| — |
| description| 文本描述| string| —| — |
#### Empty Slots
| Name| 说明 |
| :--- | :--- |
| default| 自定义底部内容 |
| image| 自定义图片 |
| description| 自定义描述文字 |
`,
  "el-descriptions": `#### [访问](https://element.eleme.cn/#/zh-CN/component/descriptions)
#### Descriptions Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| border| 是否带有边框| boolean| —| false |
| column| 一行 Descriptions Item 的数量| number| —| 3 |
| direction| 排列的方向| string| vertical / horizontal| horizontal |
| size| 列表的尺寸| string| medium / small / mini| — |
| title| 标题文本，显示在左上方| string| —| — |
| extra| 操作区文本，显示在右上方| string| —| — |
| colon| 是否显示冒号| boolean| —| true |
| labelClassName| 自定义标签类名| string| —| — |
| contentClassName| 自定义内容类名| string| —| — |
| labelStyle| 自定义标签样式| object| —| — |
| contentStyle| 自定义内容样式| object| —| — |
#### Descriptions Slots
| Name| 说明 |
| :--- | :--- |
| title| 自定义标题，显示在左上方 |
| extra| 自定义操作区，显示在右上方 |
#### Descriptions Item Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| label| 标签文本| string| —| — |
| span| 列的数量| number| —| 1 |
| labelClassName| 自定义标签类名| string| —| — |
| contentClassName| 自定义内容类名| string| —| — |
| labelStyle| 自定义标签样式| object| —| — |
| contentStyle| 自定义内容样式| object| —| — |
#### Descriptions Item Slots
| Name| 说明 |
| :--- | :--- |
| label| 自定义标签文本 |
`,
  "el-result": `#### [访问](https://element.eleme.cn/#/zh-CN/component/result)
#### Result Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| title| 标题| string| —| — |
| sub-title| 二级标题| string| —| — |
| icon| 图标类型| string| success / warning / info / error| info |
#### Result Slots
| Name| 说明 |
| :--- | :--- |
| icon| 自定义图标 |
| title| 自定义标题 |
| subTitle| 自定义二级标题 |
| extra| 自定义底部额外区域 |
`,
  "el-alert": `#### [访问](https://element.eleme.cn/#/zh-CN/component/alert)
#### Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| title| 标题| string| —| — |
| type| 主题| string| success/warning/info/error| info |
| description| 辅助性文字。也可通过默认 slot 传入| string| —| — |
| closable| 是否可关闭| boolean| —| true |
| center| 文字是否居中| boolean| —| true |
| close-text| 关闭按钮自定义文本| string| —| — |
| show-icon| 是否显示图标| boolean| —| false |
| effect| 选择提供的主题| string| light/dark| light |
#### Slot
| Name| Description |
| :--- | :--- |
| —| 描述 |
| title| 标题的内容 |
#### Events
| 事件名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| close| 关闭alert时触发的事件| — |
`,
  "el-loading": `#### [访问](https://element.eleme.cn/#/zh-CN/component/loading)
#### Options
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| target| Loading 需要覆盖的 DOM 节点。可传入一个 DOM 对象或字符串；若传入字符串，则会将其作为参数传入 document.querySelector以获取到对应 DOM 节点| object/string| —| document.body |
| body| 同 v-loading 指令中的 body 修饰符| boolean| —| false |
| fullscreen| 同 v-loading 指令中的 fullscreen 修饰符| boolean| —| true |
| lock| 同 v-loading 指令中的 lock 修饰符| boolean| —| false |
| text| 显示在加载图标下方的加载文案| string| —| — |
| spinner| 自定义加载图标类名| string| —| — |
| background| 遮罩背景色| string| —| — |
| customClass| Loading 的自定义类名| string| —| — |
`,
  "el-message": `#### [访问](https://element.eleme.cn/#/zh-CN/component/message)
#### Options
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| message| 消息文字| string / VNode| —| — |
| type| 主题| string| success/warning/info/error| info |
| iconClass| 自定义图标的类名，会覆盖 type| string| —| — |
| dangerouslyUseHTMLString| 是否将 message 属性作为 HTML 片段处理| boolean| —| false |
| customClass| 自定义类名| string| —| — |
| duration| 显示时间, 毫秒。设为 0 则不会自动关闭| number| —| 3000 |
| showClose| 是否显示关闭按钮| boolean| —| false |
| center| 文字是否居中| boolean| —| false |
| onClose| 关闭时的回调函数, 参数为被关闭的 message 实例| function| —| — |
| offset| Message 距离窗口顶部的偏移量| number| —| 20 |
#### 方法
| 方法名| 说明 |
| :--- | :--- |
| close| 关闭当前的 Message |
`,
  "el-message-box": `#### [访问](https://element.eleme.cn/#/zh-CN/component/message-box)
#### Options
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| title| MessageBox 标题| string| —| — |
| message| MessageBox 消息正文内容| string / VNode| —| — |
| dangerouslyUseHTMLString| 是否将 message 属性作为 HTML 片段处理| boolean| —| false |
| type| 消息类型，用于显示图标| string| success / info / warning / error| — |
| iconClass| 自定义图标的类名，会覆盖 type| string| —| — |
| customClass| MessageBox 的自定义类名| string| —| — |
| callback| 若不使用 Promise，可以使用此参数指定 MessageBox 关闭后的回调| function(action, instance)，action 的值为'confirm', 'cancel'或'close', instance 为 MessageBox 实例，可以通过它访问实例上的属性和方法| —| — |
| showClose| MessageBox 是否显示右上角关闭按钮| boolean| —| true |
| beforeClose| MessageBox 关闭前的回调，会暂停实例的关闭| function(action, instance, done)，action 的值为'confirm', 'cancel'或'close'；instance 为 MessageBox 实例，可以通过它访问实例上的属性和方法；done 用于关闭 MessageBox 实例| —| — |
| distinguishCancelAndClose| 是否将取消（点击取消按钮）与关闭（点击关闭按钮或遮罩层、按下 ESC 键）进行区分| boolean| —| false |
| lockScroll| 是否在 MessageBox 出现时将 body 滚动锁定| boolean| —| true |
| showCancelButton| 是否显示取消按钮| boolean| —| false（以 confirm 和 prompt 方式调用时为 true） |
| showConfirmButton| 是否显示确定按钮| boolean| —| true |
| cancelButtonText| 取消按钮的文本内容| string| —| 取消 |
| confirmButtonText| 确定按钮的文本内容| string| —| 确定 |
| cancelButtonClass| 取消按钮的自定义类名| string| —| — |
| confirmButtonClass| 确定按钮的自定义类名| string| —| — |
| closeOnClickModal| 是否可通过点击遮罩关闭 MessageBox| boolean| —| true（以 alert 方式调用时为 false） |
| closeOnPressEscape| 是否可通过按下 ESC 键关闭 MessageBox| boolean| —| true（以 alert 方式调用时为 false） |
| closeOnHashChange| 是否在 hashchange 时关闭 MessageBox| boolean| —| true |
| showInput| 是否显示输入框| boolean| —| false（以 prompt 方式调用时为 true） |
| inputPlaceholder| 输入框的占位符| string| —| — |
| inputType| 输入框的类型| string| —| text |
| inputValue| 输入框的初始文本| string| —| — |
| inputPattern| 输入框的校验表达式| regexp| —| — |
| inputValidator| 输入框的校验函数。可以返回布尔值或字符串，若返回一个字符串, 则返回结果会被赋值给 inputErrorMessage| function| —| — |
| inputErrorMessage| 校验未通过时的提示文本| string| —| 输入的数据不合法! |
| center| 是否居中布局| boolean| —| false |
| roundButton| 是否使用圆角按钮| boolean| —| false |
`,
  "el-notification": `#### [访问](https://element.eleme.cn/#/zh-CN/component/notification)
#### Options
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| title| 标题| string| —| — |
| message| 说明文字| string/Vue.VNode| —| — |
| dangerouslyUseHTMLString| 是否将 message 属性作为 HTML 片段处理| boolean| —| false |
| type| 主题样式，如果不在可选值内将被忽略| string| success/warning/info/error| — |
| iconClass| 自定义图标的类名。若设置了 type，则 iconClass 会被覆盖| string| —| — |
| customClass| 自定义类名| string| —| — |
| duration| 显示时间, 毫秒。设为 0 则不会自动关闭| number| —| 4500 |
| position| 自定义弹出位置| string| top-right/top-left/bottom-right/bottom-left| top-right |
| showClose| 是否显示关闭按钮| boolean| —| true |
| onClose| 关闭时的回调函数| function| —| — |
| onClick| 点击 Notification 时的回调函数| function| —| — |
| offset| 偏移的距离，在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量| number| —| 0 |
#### 方法
| 方法名| 说明 |
| :--- | :--- |
| close| 关闭当前的 Notification |
`,
  "el-menu": `#### [访问](https://element.eleme.cn/#/zh-CN/component/menu)
#### Menu Attribute
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| mode| 模式| string| horizontal / vertical| vertical |
| collapse| 是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）| boolean| —| false |
| background-color| 菜单的背景色（仅支持 hex 格式）| string| —| #ffffff |
| text-color| 菜单的文字颜色（仅支持 hex 格式）| string| —| #303133 |
| active-text-color| 当前激活菜单的文字颜色（仅支持 hex 格式）| string| —| #409EFF |
| default-active| 当前激活菜单的 index| string| —| — |
| default-openeds| 当前打开的 sub-menu 的 index 的数组| Array| —| — |
| unique-opened| 是否只保持一个子菜单的展开| boolean| —| false |
| menu-trigger| 子菜单打开的触发方式(只在 mode 为 horizontal 时有效)| string| hover / click| hover |
| router| 是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转| boolean| —| false |
| collapse-transition| 是否开启折叠动画| boolean| —| true |
#### Menu Methods
| 方法名称| 说明| 参数 |
| :--- | :--- | :--- |
| open| 展开指定的 sub-menu| index: 需要打开的 sub-menu 的 index |
| close| 收起指定的 sub-menu| index: 需要收起的 sub-menu 的 index |
#### Menu Events
| 事件名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| select| 菜单激活回调| index: 选中菜单项的 index, indexPath: 选中菜单项的 index path |
| open| sub-menu 展开的回调| index: 打开的 sub-menu 的 index， indexPath: 打开的 sub-menu 的 index path |
| close| sub-menu 收起的回调| index: 收起的 sub-menu 的 index， indexPath: 收起的 sub-menu 的 index path |
#### SubMenu Attribute
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| index| 唯一标志| string/null| —| null |
| popper-class| 弹出菜单的自定义类名| string| —| — |
| show-timeout| 展开 sub-menu 的延时| number| —| 300 |
| hide-timeout| 收起 sub-menu 的延时| number| —| 300 |
| disabled| 是否禁用| boolean| —| false |
| popper-append-to-body| 是否将弹出菜单插入至 body 元素。在菜单的定位出现问题时，可尝试修改该属性| boolean| —| 一级子菜单：true / 非一级子菜单：false |
#### Menu-Item Attribute
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| index| 唯一标志| string| —| — |
| route| Vue Router 路径对象| Object| —| — |
| disabled| 是否禁用| boolean| —| false |
#### Menu-Group Attribute
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| title| 分组标题| string| —| — |
`,
  "el-tabs": `#### [访问](https://element.eleme.cn/#/zh-CN/component/tabs)
#### Tabs Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| value / v-model| 绑定值，选中选项卡的 name| string| —| 第一个选项卡的 name |
| type| 风格类型| string| card/border-card| — |
| closable| 标签是否可关闭| boolean| —| false |
| addable| 标签是否可增加| boolean| —| false |
| editable| 标签是否同时可增加和关闭| boolean| —| false |
| tab-position| 选项卡所在位置| string| top/right/bottom/left| top |
| stretch| 标签的宽度是否自撑开| boolean| -| false |
| before-leave| 切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。| Function(activeName, oldActiveName)| —| — |
#### Tabs Events
| 事件名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| tab-click| tab 被选中时触发| 被选中的标签 tab 实例 |
| tab-remove| 点击 tab 移除按钮后触发| 被删除的标签的 name |
| tab-add| 点击 tabs 的新增按钮后触发| — |
| edit| 点击 tabs 的新增按钮或 tab 被关闭后触发| (targetName, action) |
#### Tab-pane Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| label| 选项卡标题| string| —| — |
| disabled| 是否禁用| boolean| —| false |
| name| 与选项卡绑定值 value 对应的标识符，表示选项卡别名| string| —| 该选项卡在选项卡列表中的顺序值，如第一个选项卡则为'1' |
| closable| 标签是否可关闭| boolean| —| false |
| lazy| 标签是否延迟渲染| boolean| —| false |
`,
  "el-breadcrumb": `#### [访问](https://element.eleme.cn/#/zh-CN/component/breadcrumb)
#### Breadcrumb Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| separator| 分隔符| string| —| 斜杠'/' |
| separator-class| 图标分隔符 class| string| —| - |
#### Breadcrumb Item Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| to| 路由跳转对象，同 vue-router 的 to| string/object| —| — |
| replace| 在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录| boolean| —| false |
`,
  "el-page-header": `#### [访问](https://element.eleme.cn/#/zh-CN/component/page-header)
#### Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| title| 标题| string| —| 返回 |
| content| 内容| string| —| — |
#### Events
| 事件名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| back| 点击左侧区域触发| — |
#### Slots
| 事件名称| 说明 |
| :--- | :--- |
| title| 标题内容 |
| content| 内容 |
`,
  "el-dropdown": `#### [访问](https://element.eleme.cn/#/zh-CN/component/dropdown)
#### Dropdown Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| type| 菜单按钮类型，同 Button 组件(只在split-button为 true 的情况下有效)| string| —| — |
| size| 菜单尺寸，在split-button为 true 的情况下也对触发按钮生效| string| medium / small / mini| — |
| split-button| 下拉触发元素呈现为按钮组| boolean| —| false |
| placement| 菜单弹出位置| string| top/top-start/top-end/bottom/bottom-start/bottom-end| bottom-end |
| trigger| 触发下拉的行为| string| hover, click| hover |
| hide-on-click| 是否在点击菜单项后隐藏菜单| boolean| —| true |
| show-timeout| 展开下拉菜单的延时（仅在 trigger 为 hover 时有效）| number| —| 250 |
| hide-timeout| 收起下拉菜单的延时（仅在 trigger 为 hover 时有效）| number| —| 150 |
| tabindex| Dropdown 组件的 tabindex| number| —| 0 |
| disabled| 是否禁用| boolean| —| false |
#### Dropdown Slots
| Name| 说明 |
| :--- | :--- |
| —| 触发下拉列表显示的元素。 注意： 必须是一个元素或者或者组件 |
| dropdown| 下拉列表，通常是 <el-dropdown-menu> 组件 |
#### Dropdown Events
| 事件名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| click| split-button 为 true 时，点击左侧按钮的回调| — |
| command| 点击菜单项触发的事件回调| dropdown-item 的指令 |
| visible-change| 下拉框出现/隐藏时触发| 出现则为 true，隐藏则为 false |
#### Dropdown Menu Item Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| command| 指令| string/number/object| —| — |
| disabled| 禁用| boolean| —| false |
| divided| 显示分割线| boolean| —| false |
| icon| 图标类名| string| —| — |
`,
  "el-steps": `#### [访问](https://element.eleme.cn/#/zh-CN/component/steps)
#### Steps Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| space| 每个 step 的间距，不填写将自适应间距。支持百分比。| number / string| —| — |
| direction| 显示方向| string| vertical/horizontal| horizontal |
| active| 设置当前激活步骤| number| —| 0 |
| process-status| 设置当前步骤的状态| string| wait / process / finish / error / success| process |
| finish-status| 设置结束步骤的状态| string| wait / process / finish / error / success| finish |
| align-center| 进行居中对齐| boolean| -| false |
| simple| 是否应用简洁风格| boolean| -| false |
#### Step Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| title| 标题| string| —| — |
| description| 描述性文字| string| —| — |
| icon| 图标| 传入 icon 的 class 全名来自定义 icon，也支持 slot 方式写入| string| — |
| status| 设置当前步骤的状态，不设置则根据 steps 确定状态| wait / process / finish / error / success| -|  |
#### Step Slot
| name| 说明 |
| :--- | :--- |
| icon| 自定义图标 |
| title| 自定义标题 |
| description| 自定义描述性文字 |
`,
  "el-dialog": `#### [访问](https://element.eleme.cn/#/zh-CN/component/dialog)
#### Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| visible| 是否显示 Dialog，支持 .sync 修饰符| boolean| —| false |
| title| Dialog 的标题，也可通过具名 slot （见下表）传入| string| —| — |
| width| Dialog 的宽度| string| —| 50% |
| fullscreen| 是否为全屏 Dialog| boolean| —| false |
| top| Dialog CSS 中的 margin-top 值| string| —| 15vh |
| modal| 是否需要遮罩层| boolean| —| true |
| modal-append-to-body| 遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上| boolean| —| true |
| append-to-body| Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true| boolean| —| false |
| lock-scroll| 是否在 Dialog 出现时将 body 滚动锁定| boolean| —| true |
| custom-class| Dialog 的自定义类名| string| —| — |
| close-on-click-modal| 是否可以通过点击 modal 关闭 Dialog| boolean| —| true |
| close-on-press-escape| 是否可以通过按下 ESC 关闭 Dialog| boolean| —| true |
| show-close| 是否显示关闭按钮| boolean| —| true |
| before-close| 关闭前的回调，会暂停 Dialog 的关闭| function(done)，done 用于关闭 Dialog| —| — |
| center| 是否对头部和底部采用居中布局| boolean| —| false |
| destroy-on-close| 关闭时销毁 Dialog 中的元素| boolean| —| false |
#### Slot
| name| 说明 |
| :--- | :--- |
| —| Dialog 的内容 |
| title| Dialog 标题区的内容 |
| footer| Dialog 按钮操作区的内容 |
#### Events
| 事件名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| open| Dialog 打开的回调| — |
| opened| Dialog 打开动画结束时的回调| — |
| close| Dialog 关闭的回调| — |
| closed| Dialog 关闭动画结束时的回调| — |
`,
  "el-tooltip": `#### [访问](https://element.eleme.cn/#/zh-CN/component/tooltip)
#### Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| effect| 默认提供的主题| String| dark/light| dark |
| content| 显示的内容，也可以通过 slot#content 传入 DOM| String| —| — |
| placement| Tooltip 的出现位置| String| top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end| bottom |
| value / v-model| 状态是否可见| Boolean| —| false |
| disabled| Tooltip 是否可用| Boolean| —| false |
| offset| 出现位置的偏移量| Number| —| 0 |
| transition| 定义渐变动画| String| —| el-fade-in-linear |
| visible-arrow| 是否显示 Tooltip 箭头，更多参数可见Vue-popper| Boolean| —| true |
| popper-options| popper.js 的参数| Object| 参考 popper.js 文档| { boundariesElement: 'body', gpuAcceleration: false } |
| open-delay| 延迟出现，单位毫秒| Number| —| 0 |
| manual| 手动控制模式，设置为 true 后，mouseenter 和 mouseleave 事件将不会生效| Boolean| —| false |
| popper-class| 为 Tooltip 的 popper 添加类名| String| —| — |
| enterable| 鼠标是否可进入到 tooltip 中| Boolean| —| true |
| hide-after| Tooltip 出现后自动隐藏延时，单位毫秒，为 0 则不会自动隐藏| number| —| 0 |
| tabindex| Tooltip 组件的 tabindex| number| —| 0 |
`,
  "el-popover": `#### [访问](https://element.eleme.cn/#/zh-CN/component/popover)
#### Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| trigger| 触发方式| String| click/focus/hover/manual| click |
| title| 标题| String| —| — |
| content| 显示的内容，也可以通过 slot 传入 DOM| String| —| — |
| width| 宽度| String, Number| —| 最小宽度 150px |
| placement| 出现位置| String| top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end| bottom |
| disabled| Popover 是否可用| Boolean| —| false |
| value / v-model| 状态是否可见| Boolean| —| false |
| offset| 出现位置的偏移量| Number| —| 0 |
| transition| 定义渐变动画| String| —| fade-in-linear |
| visible-arrow| 是否显示 Tooltip 箭头，更多参数可见Vue-popper| Boolean| —| true |
| popper-options| popper.js 的参数| Object| 参考 popper.js 文档| { boundariesElement: 'body', gpuAcceleration: false } |
| popper-class| 为 popper 添加类名| String| —| — |
| open-delay| 触发方式为 hover 时的显示延迟，单位为毫秒| Number| —| — |
| close-delay| 触发方式为 hover 时的隐藏延迟，单位为毫秒| number| —| 200 |
| tabindex| Popover 组件的 tabindex| number| —| 0 |
#### Slot
| 参数| 说明 |
| :--- | :--- |
| —| Popover 内嵌 HTML 文本 |
| reference| 触发 Popover 显示的 HTML 元素 |
#### Events
| 事件名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| show| 显示时触发| — |
| after-enter| 显示动画播放完毕后触发| — |
| hide| 隐藏时触发| — |
| after-leave| 隐藏动画播放完毕后触发| — |
`,
  "el-popconfirm": `#### [访问](https://element.eleme.cn/#/zh-CN/component/popconfirm)
#### Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| title| 标题| String| —| — |
| confirm-button-text| 确认按钮文字| String| —| — |
| cancel-button-text| 取消按钮文字| String| —| — |
| confirm-button-type| 确认按钮类型| String| —| Primary |
| cancel-button-type| 取消按钮类型| String| —| Text |
| icon| Icon| String| —| el-icon-question |
| icon-color| Icon 颜色| String| —| #f90 |
| hide-icon| 是否隐藏 Icon| Boolean| —| false |
#### Slot
| 参数| 说明 |
| :--- | :--- |
| reference| 触发 Popconfirm 显示的 HTML 元素 |
#### Events
| 事件名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| confirm| 点击确认按钮时触发| — |
| cancel| 点击取消按钮时触发| — |
`,
  "el-card": `#### [访问](https://element.eleme.cn/#/zh-CN/component/card)
#### Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| header| 设置 header，也可以通过 slot#header 传入 DOM| string| —| — |
| body-style| 设置 body 的样式| object| —| { padding: '20px' } |
| shadow| 设置阴影显示时机| string| always / hover / never| always |
`,
  "el-carousel": `#### [访问](https://element.eleme.cn/#/zh-CN/component/carousel)
#### Carousel Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| height| 走马灯的高度| string| —| — |
| initial-index| 初始状态激活的幻灯片的索引，从 0 开始| number| —| 0 |
| trigger| 指示器的触发方式| string| click| — |
| autoplay| 是否自动切换| boolean| —| true |
| interval| 自动切换的时间间隔，单位为毫秒| number| —| 3000 |
| indicator-position| 指示器的位置| string| outside/none| — |
| arrow| 切换箭头的显示时机| string| always/hover/never| hover |
| type| 走马灯的类型| string| card| — |
| loop| 是否循环显示| boolean| -| true |
| direction| 走马灯展示的方向| string| horizontal/vertical| horizontal |
#### Carousel Events
| 事件名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| change| 幻灯片切换时触发| 目前激活的幻灯片的索引，原幻灯片的索引 |
#### Carousel Methods
| 方法名| 说明| 参数 |
| :--- | :--- | :--- |
| setActiveItem| 手动切换幻灯片| 需要切换的幻灯片的索引，从 0 开始；或相应 el-carousel-item 的 name 属性值 |
| prev| 切换至上一张幻灯片| — |
| next| 切换至下一张幻灯片| — |
#### Carousel-Item Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| name| 幻灯片的名字，可用作 setActiveItem 的参数| string| —| — |
| label| 该幻灯片所对应指示器的文本| string| —| — |
`,
  "el-collapse": `#### [访问](https://element.eleme.cn/#/zh-CN/component/collapse)
#### Collapse Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| value / v-model| 当前激活的面板(如果是手风琴模式，绑定值类型需要为string，否则为array)| string / array| —| — |
| accordion| 是否手风琴模式| boolean| —| false |
#### Collapse Events
| 事件名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| change| 当前激活面板改变时触发(如果是手风琴模式，参数 activeNames 类型为string，否则为array)| (activeNames: array / string) |
#### Collapse Item Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| name| 唯一标志符| string/number| —| — |
| title| 面板标题| string| —| — |
| disabled| 是否禁用| boolean| —| — |
`,
  "el-timeline": `#### [访问](https://element.eleme.cn/#/zh-CN/component/timeline)
#### Timeline Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| reverse| 指定节点排序方向，默认为正序| boolean| —| false |
#### Timeline-item Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| timestamp| 时间戳| string| -| — |
| hide-timestamp| 是否隐藏时间戳| boolean| —| false |
| placement| 时间戳位置| string| top / bottom| bottom |
| type| 节点类型| string| primary / success / warning / danger / info| - |
| color| 节点颜色| string| hsl / hsv / hex / rgb| - |
| size| 节点尺寸| string| normal / large| normal |
| icon| 节点图标| string| —| - |
#### Timeline-Item Slot
| name| 说明 |
| :--- | :--- |
| —| Timeline-Item 的内容 |
| dot| 自定义节点 |
`,
  "el-divider": `#### [访问](https://element.eleme.cn/#/zh-CN/component/divider)
#### Divider Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| direction| 设置分割线方向| string| horizontal / vertical| horizontal |
| content-position| 设置分割线文案的位置| string| left / right / center| center |
`,
  "el-calendar": `#### [访问](https://element.eleme.cn/#/zh-CN/component/calendar)
#### Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| value / v-model| 绑定值| Date/string/number| —| — |
| range| 时间范围，包括开始时间与结束时间。开始时间必须是周一，结束时间必须是周日，且时间跨度不能超过两个月。| Array| —| — |
| first-day-of-week| 周起始日| Number| 1 到 7| 1 |
#### dateCell scoped slot 参数
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| date| 单元格代表的日期| Date| —| — |
| data| { type, isSelected, day}，type 表示该日期的所属月份，可选值有 prev-month，current-month，next-month；isSelected 标明该日期是否被选中；day 是格式化的日期，格式为 yyyy-MM-dd| Object| —| — |
`,
  "el-image": `#### [访问](https://element.eleme.cn/#/zh-CN/component/image)
#### Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| src| 图片源，同原生| string| —| - |
| fit| 确定图片如何适应容器框，同原生 object-fit| string| fill / contain / cover / none / scale-down| - |
| alt| 原生 alt| string| -| - |
| referrer-policy| 原生 referrerPolicy| string| -| - |
| lazy| 是否开启懒加载| boolean| —| false |
| scroll-container| 开启懒加载后，监听 scroll 事件的容器| string / HTMLElement| —| 最近一个 overflow 值为 auto 或 scroll 的父元素 |
| preview-src-list| 开启图片预览功能| Array| —| - |
| z-index| 设置图片预览的 z-index| Number| —| 2000 |
#### Events
| 事件名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| load| 图片加载成功触发| (e: Event) |
| error| 图片加载失败触发| (e: Error) |
#### Slots
| 名称| 说明 |
| :--- | :--- |
| placeholder| 图片未加载的占位内容 |
| error| 加载失败的内容 |
`,
  "el-backtop": `#### [访问](https://element.eleme.cn/#/zh-CN/component/backtop)
#### Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| target| 触发滚动的对象| string| |  |
| visibility-height| 滚动高度达到此参数值才出现| number| | 200 |
| right| 控制其显示位置, 距离页面右边距| number| | 40 |
| bottom| 控制其显示位置, 距离页面底部距离| number| | 40 |
#### Events
| 事件名| 说明| 回调参数 |
| :--- | :--- | :--- |
| click| 点击按钮触发的事件| 点击事件 |
`,
  "el-zh-CN": `#### [访问](https://element.eleme.cn/#/zh-CN/component/infinite-scroll)
`,
  "el-drawer": `#### [访问](https://element.eleme.cn/#/zh-CN/component/drawer)
#### Drawer Attributes
| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| append-to-body| Drawer 自身是否插入至 body 元素上。嵌套的 Drawer 必须指定该属性并赋值为 true| boolean| —| false |
| before-close| 关闭前的回调，会暂停 Drawer 的关闭| function(done)，done 用于关闭 Drawer| —| — |
| close-on-press-escape| 是否可以通过按下 ESC 关闭 Drawer| boolean| —| true |
| custom-class| Drawer 的自定义类名| string| —| — |
| destroy-on-close| 控制是否在关闭 Drawer 之后将子元素全部销毁| boolean| -| false |
| modal| 是否需要遮罩层| boolean| —| true |
| modal-append-to-body| 遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Drawer 的父元素上| boolean| —| true |
| direction| Drawer 打开的方向| Direction| rtl / ltr / ttb / btt| rtl |
| show-close| 是否显示关闭按钮| boolean| —| true |
| size| Drawer 窗体的大小, 当使用 number 类型时, 以像素为单位, 当使用 string 类型时, 请传入 'x%', 否则便会以 number 类型解释| number / string| -| '30%' |
| title| Drawer 的标题，也可通过具名 slot （见下表）传入| string| —| — |
| visible| 是否显示 Drawer，支持 .sync 修饰符| boolean| —| false |
| wrapperClosable| 点击遮罩层是否可以关闭 Drawer| boolean| -| true |
| withHeader| 控制是否显示 header 栏, 默认为 true, 当此项为 false 时, title attribute 和 title slot 均不生效| boolean| -| true |
#### Drawer Slot
| name| 说明 |
| :--- | :--- |
| —| Drawer 的内容 |
| title| Drawer 标题区的内容 |
#### Drawer Methods
| name| 说明 |
| :--- | :--- |
| closeDrawer| 用于关闭 Drawer, 该方法会调用传入的 before-close 方法 |
#### Drawer Events
| 事件名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| open| Drawer 打开的回调| — |
| opened| Drawer 打开动画结束时的回调| — |
| close| Drawer 关闭的回调| — |
| closed| Drawer 关闭动画结束时的回调| — |
`,

}