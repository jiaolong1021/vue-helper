export default {
  "Row": `[iview2：http://v2.iviewui.com/components/grid](http://v2.iviewui.com/components/grid) \n
  | props 属性 | 说明 |
  | :--- | :--- |
  | gutter | 栅格间距，单位 px，左右平分 |
  | type | 布局模式，可选值为flex或不选，在现代浏览器下有效 |
  | align | flex 布局下的垂直对齐方式 |
  | justify | flex 布局下的水平排列方式 |
  | class-name | 自定义的class名称 |`,
  "Col": `[iview2：http://v2.iviewui.com/components/grid](http://v2.iviewui.com/components/grid) \n
  | props 属性 | 说明 |
  | :--- | :--- |
  | span | 栅格的占位格数，可选值为0~24的整数 |
  | order | 栅格的顺序，在flex布局模式下有效 |
  | offset | 栅格左侧的间隔格数，间隔内不可以有栅格 |
  | push | 栅格向右移动格数 |
  | pull | 栅格向左移动格数 |
  | class-name | 自定义的class名称 |
  | xs | <768px 响应式栅格，可为栅格数或一个包含其他属性的对象 |
  | sm | ≥768px 响应式栅格，可为栅格数或一个包含其他属性的对象 |
  | md | ≥992px 响应式栅格，可为栅格数或一个包含其他属性的对象 |
  | lg | ≥1200px 响应式栅格，可为栅格数或一个包含其他属性的对象 |`,
  "Sider": `[iview2：http://v2.iviewui.com/components/layout](http://v2.iviewui.com/components/layout) \n
  | props 属性 | 说明 |
  | :--- | :--- |
  | breakpoint | 触发响应式布局的断点，可选值为xs,sm,md,lg,xl或xxl，若不设此属性则不会触发响应式布局。 |
  | value | 侧边栏是否收起，可使用 v-model 双向绑定数据。 |
  | width | 宽度 |
  | collapsible | 是否可收起，设为false后，默认触发器会隐藏，且响应式布局不会触发 |
  | collapsed-width | 收缩宽度，设置为 0 会出现特殊 trigger |
  | hide-trigger | 隐藏默认触发器 |
  | default-collapsed | 是否默认收起，设置了collapsible后设置此属性侧边栏仍会收起。 |
  | reverse-arrow | 改变侧边栏触发器箭头方向，和改变侧边栏收起方向，当Sider在右边时可以使用。 | \n
  | events 事件名 | 说明 |
  | :--- | :--- |
  | on-collapse | 展开-收起时的回调 | \n
  | slot | 说明 |
  | :--- | :--- |
  | trigger | 自定义触发器 |`,
  "Button": `[iview2：http://v2.iviewui.com/components/button](http://v2.iviewui.com/components/button) \n
  | props 属性 | 说明 |
| :--- | :--- |
| type | 按钮类型，可选值为primary、ghost、dashed、text、info、success、warning、error或者不设置 |
| size | 按钮大小，可选值为large、small、default或者不设置 |
| shape | 按钮形状，可选值为circle或者不设置 |
| long | 开启后，按钮的长度为 100% |
| html-type | 设置button原生的type，可选值为button、submit、reset |
| disabled | 设置按钮为禁用状态 |
| loading | 设置按钮为加载中状态 |
| icon | 设置按钮的图标类型 |`,
  "ButtonGroup": `[iview2：http://v2.iviewui.com/components/button](http://v2.iviewui.com/components/button) \n
| props 属性 | 说明 |
| :--- | :--- |
| size | 按钮组合大小，可选值为large、small、default或者不设置 |
| shape | 按钮组合形状，可选值为circle或者不设置 |
| vertical | 是否纵向排列按钮组 |`,
  "Input": `[iview2：http://v2.iviewui.com/components/input](http://v2.iviewui.com/components/input) \n
| props 属性 | 说明 |
| :--- | :--- |
| type | 输入框类型，可选值为 text、password、textarea、url、email、date |
| value | 绑定的值，可使用 v-model 双向绑定 |
| size | 输入框尺寸，可选值为large、small、default或者不设置 |
| placeholder | 占位文本 |
| clearable | 是否显示清空按钮 |
| disabled | 设置输入框为禁用状态 |
| readonly | 设置输入框为只读 |
| maxlength | 最大输入长度 |
| icon | 输入框尾部图标，仅在 text 类型下有效 |
| rows | 文本域默认行数，仅在 textarea 类型下有效 |
| autosize | 自适应内容高度，仅在 textarea 类型下有效，可传入对象，如 { minRows: 2, maxRows: 6 } |
| number | 将用户的输入转换为 Number 类型 |
| autofocus | 自动获取焦点 |
| autocomplete | 原生的自动完成功能，可选值为 off 和 on |
| element-id | 给表单元素设置 id，详见 Form 用法。 |
| spellcheck | 原生的 spellcheck 属性 |
| wrap | 原生的 wrap 属性，可选值为 hard 和 soft，仅在 textarea 下生效 | \n
| events 事件名 | 说明 |
| :--- | :--- |
| on-enter | 按下回车键时触发 |
| on-click | 设置 icon 属性后，点击图标时触发 |
| on-change | 数据改变时触发 |
| on-focus | 输入框聚焦时触发 |
| on-blur | 输入框失去焦点时触发 |
| on-keyup | 原生的 keyup 事件 |
| on-keydown | 原生的 keydown 事件 |
| on-keypress | 原生的 keypress 事件 |
| on-search | 开启 search 时可用，点击搜索或按下回车键时触发 |\n
| slot | 说明 |
| :--- | :--- |
| prepend | 前置内容，仅在 text 类型下有效 |
| append | 后置内容，仅在 text 类型下有效 |`,
  "Radio": `[iview2：http://v2.iviewui.com/components/radio](http://v2.iviewui.com/components/radio) \n
| props 属性 | 说明 |
| :--- | :--- |
| value | 只在单独使用时有效。可以使用 v-model 双向绑定数据 |
| label | 只在组合使用时有效。指定当前选项的 value 值，组合会自动判断当前选择的项目 |
| disabled | 是否禁用当前项 |
| size | 单选框的尺寸，可选值为 large、small、default 或者不设置 |
| true-value | 选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用 |
| false-value | 没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用 | \n
| events 事件名 | 说明 |
| :--- | :--- |
| on-change | 在选项状态发生改变时触发，返回当前状态。通过修改外部的数据改变时不会触发 |`,
  "RadioGroup": `[iview2：http://v2.iviewui.com/components/radio](http://v2.iviewui.com/components/radio) \n
| props 属性 | 说明 |
| :--- | :--- |
| value | 指定当前选中的项目数据。可以使用 v-model 双向绑定数据 |
| type | 可选值为 button 或不填，为 button 时使用按钮样式 |
| size | 尺寸，可选值为large、small、default或者不设置 |
| vertical | 是否垂直排列，按钮样式下无效 | \n 
| events 事件名 | 说明 |
| :--- | :--- |
| on-change | 在选项状态发生改变时触发，返回当前选中的项。通过修改外部的数据改变时不会触发 |`,
  "Checkbox": `[iview2: http://v2.iviewui.com/components/checkbox](http://v2.iviewui.com/components/checkbox) \n
| props 属性 | 说明 |
| :--- | :--- |
| value | 只在单独使用时有效。可以使用 v-model 双向绑定数据 |
| label | 只在组合使用时有效。指定当前选项的 value 值，组合会自动判断是否选中 |
| disabled | 是否禁用当前项 |
| indeterminate | 设置 indeterminate 状态，只负责样式控制 |
| size | 多选框的尺寸，可选值为 large、small、default 或者不设置 |
| true-value | 选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用 |
| false-value | 没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用 | \n
| events 事件名 | 说明 |
| :--- | :--- |
| on-change | 只在单独使用时有效。在选项状态发生改变时触发，通过修改外部的数据改变时不会触发 |`,
  "CheckboxGroup": `[iview2: http://v2.iviewui.com/components/checkbox](http://v2.iviewui.com/components/checkbox) \n
| props 属性 | 说明 |
| :--- | :--- |
| value | 指定选中项目的集合，可以使用 v-model 双向绑定数据 |
| size | 多选框组的尺寸，可选值为 large、small、default 或者不设置 | \n
| events 事件名 | 说明 |
| :--- | :--- |
| on-change | 在选项状态发生改变时触发，返回已选中的数组。通过修改外部的数据改变时不会触发 |`,
  "Swtich": `[iview2: http://v2.iviewui.com/components/switch](http://v2.iviewui.com/components/switch) \n
| props 属性 | 说明 |
| :--- | :--- |
| value | 指定当前是否选中，可以使用 v-model 双向绑定数据 |
| size | 开关的尺寸，可选值为large、small、default或者不写。建议开关如果使用了2个汉字的文字，使用 large。 |
| disabled | 禁用开关 |
| true-value | 选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用 |
| false-value | 没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用 | \n
| events 事件名 | 说明 |
| :--- | :--- |
| on-change | 开关变化时触发，返回当前的状态 | \n
| slot | 说明 |
| :--- | :--- |
| open | 自定义显示打开时的内容 |
| close | 自定义显示关闭时的内容 |`,
  "Table": `[iview2: http://v2.iviewui.com/components/table](http://v2.iviewui.com/components/table) \n
| props 属性 | 说明 |
| :--- | :--- |
| data | 显示的结构化数据，其中，字段 cellClassName 用于设置任意单元格的样式名称，因此数据不能使用该字段，详见示例特定样式。 |
| columns | 表格列的配置描述，具体项见后文 |
| stripe | 是否显示间隔斑马纹 |
| border | 是否显示纵向边框 |
| show-header | 是否显示表头 |
| width | 表格宽度，单位 px |
| height | 表格高度，单位 px，设置后，如果表格内容大于此值，会固定表头 |
| loading | 表格是否加载中 |
| disabled-hover | 禁用鼠标悬停时的高亮 |
| highlight-row | 是否支持高亮选中的行，即单选 |
| row-class-name | 行的 className 的回调方法，传入参数：row：当前行数据 index：当前行的索引 |
| size | 表格尺寸，可选值为 large、small、default 或者不填 |
| no-data-text | 数据为空时显示的提示内容 |
| no-filtered-data-text | 筛选数据为空时显示的提示内容 | \n
| events 事件名 | 说明 |
| :--- | :--- |
| on-current-change | 开启 highlight-row 后有效，当表格的当前行发生变化的时候会触发 |
| on-select | 在多选模式下有效，选中某一项时触发 |
| on-select-cancel | 在多选模式下有效，取消选中某一项时触发 |
| on-select-all | 在多选模式下有效，点击全选时触发 |
| on-selection-change | 在多选模式下有效，只要选中项发生变化时就会触发 |
| on-sort-change | 排序时有效，当点击排序时触发 |
| on-filter-change | 筛选时有效，筛选条件发生变化时触发 |
| on-row-click | 单击某一行时触发 |
| on-row-dblclick | 双击某一行时触发 |
| on-expand | 展开或收起某一行时触发 | \n
| slot | 说明 |
| :--- | :--- |
| header | 表头 |
| footer | 页脚 |
| loading | 加载中 | \n
| method 方法名 | 说明 |
| :--- | :--- |
| exportCsv | 将数据导出为 .csv 文件，说明： 支持IE9~IE11、Edge、Chrome、Safari、Firefox 全系列浏览器。 IE9、Safari 需要手动修改后缀名为 .csv。 IE9暂时只支持英文，中文会显示为乱码。 |
| clearCurrentRow | 清除高亮项，仅在开启 highlight-row 时可用 |`,
  "Select": `[iview2: http://v2.iviewui.com/components/select](http://v2.iviewui.com/components/select) \n
| props 属性 | 说明 |
| :--- | :--- |
| value | 指定选中项目的 value 值，可以使用 v-model 双向绑定数据。单选时只接受 String 或 Number，多选时只接受 Array |
| multiple | 是否支持多选 |
| disabled | 是否禁用 |
| clearable | 是否可以清空选项，只在单选时有效 |
| filterable | 是否支持搜索 |
| remote | 是否使用远程搜索 |
| remote-method | 远程搜索的方法 |
| loading | 当前是否正在远程搜索 |
| loading-text | 远程搜索中的文字提示 |
| label | 仅在 remote 模式下，初始化时使用。因为仅通过 value 无法得知选项的 label，需手动设置。 |
| size | 选择框大小，可选值为large、small、default或者不填 |
| placeholder | 选择框默认文字 |
| not-found-text | 当下拉列表为空时显示的内容 |
| label-in-value | 在返回选项时，是否将 label 和 value 一并返回，默认只返回 value |
| placement | 弹窗的展开方向，可选值为 bottom 和 top，2.12.0 版本开始支持自动识别 |
| transfer | 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果 |
| element-id | 给表单元素设置 id，详见 Form 用法。 | \n
| events 事件名 | 说明 |
| :--- | :--- |
| on-change | 选中的Option变化时触发，默认返回 value，如需返回 label，详见 label-in-value 属性 |
| on-query-change | 搜索词改变时触发 |
| on-clear | 点击清空按钮时触发 |
| on-open-change | 下拉框展开或收起时触发 | \n
| method 方法名 | 说明 |
| :--- | :--- |
| setQuery | 设置搜索词，为空时清空，仅在 filterable="true" 时有效 |
| clearSingleSelect | 清空单选项，仅在 clearable="true" 时有效 |`,
  "Option": `[iview2: http://v2.iviewui.com/components/select](http://v2.iviewui.com/components/select) \n
| props 属性 | 说明 |
| :--- | :--- |
| value | 选项值，默认根据此属性值进行筛选，必填 |
| label | 选项显示的内容，默认会读取 slot，无 slot 时，优先读取该 label 值，无 label 时，读取 value。当选中时，选择器会显示 label 为已选文案。大部分情况不需要配置此项，直接写入 slot 即可，在自定义选项时，该属性非常有用。 |
| disabled | 是否禁用当前项 |`,
  "OptionGroup": `[iview2: http://v2.iviewui.com/components/select](http://v2.iviewui.com/components/select) \n
| props 属性 | 说明 |
| :--- | :--- |
| label | 分组的组名 |`,
  "AutoComplete": `[iview2: http://v2.iviewui.com/components/auto-complete](http://v2.iviewui.com/components/auto-complete) \n
| props 属性 | 说明 |
| :--- | :--- |
| value | 绑定的值，可使用 v-model 双向绑定 |
| data | 自动完成的数据源 |
| clearable | 是否可以清空选项 |
| disabled | 是否禁用 |
| placeholder | 占位文本 |
| size | 输入框尺寸，可选值为 large、small、default 或者不设置 |
| icon | 输入框尾部图标 |
| filter-method | 是否根据输入项进行筛选。当其为一个函数时，会接收 value 和 option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false |
| placement | 弹窗的展开方向，可选值为 bottom 和 top，2.12.0 版本开始支持自动识别 |
| transfer | 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果 |
| element-id | 给表单元素设置 id，详见 Form 用法。 |\n
| events 事件名 | 说明 |
| :--- | :--- |
| on-change | 选中 option，或 input 的 value 变化时，调用此函数 |
| on-select | 被选中时调用，参数为选中项的 value 值 |
| on-search | 搜索补全项的时候调用 |
| on-focus | 聚焦时触发 |
| on-blur | 失焦时触发 |`,
  "Slider": `[iview2: http://v2.iviewui.com/components/slider](http://v2.iviewui.com/components/slider) \n
| props 属性 | 说明 |
| :--- | :--- |
| value | 滑块选定的值，可以使用 v-model 双向绑定数据。普通模式下，数据格式为数字，在双滑块模式下，数据格式为长度是2的数组，且每项都为数字 |
| min | 最小值 |
| max | 最大值 |
| step | 步长，取值建议能被（max - min）整除 |
| disabled | 是否禁用滑块 |
| range | 是否开启双滑块模式 |
| show-input | 是否显示数字输入框，仅在单滑块模式下有效 |
| show-stops | 是否显示间断点，建议在 step 不密集时使用 |
| show-tip | 提示的显示控制，可选值为 hover（悬停，默认）、always（总是可见）、never（不可见） |
| tip-format | Slider 会把当前值传给 tip-format，并在 Tooltip 中显示 tip-format 的返回值，若为 null，则隐藏 Tooltip |
| input-size | 数字输入框的尺寸，可选值为large、small、default或者不填，仅在开启 show-input 时有效 |\n
| events 事件名 | 说明 |
| :--- | :--- |
| on-change | 在松开滑动时触发，返回当前的选值，在滑动过程中不会触发 |
| on-input | 滑动条数据变化时触发，返回当前的选值，在滑动过程中实时触发 |`,
  "DatePicker": `[iview2: http://v2.iviewui.com/components/date-picker](http://v2.iviewui.com/components/date-picker) \n
| props 属性 | 说明 |
| :--- | :--- |
| type | 显示类型，可选值为 date、daterange、datetime、datetimerange、year、month |
| value | 日期，可以是 JavaScript 的 Date，例如 new Date()，也可以是标准的日期格式，点击右边查看 注意：value 使用 v-model 时，值是 Date 类型，可以配合 @on-change 使用 |
| format | 展示的日期格式 |
| placement | 日期选择器出现的位置，可选值为toptop-starttop-endbottombottom-startbottom-endleftleft-startleft-endrightright-startright-end，2.12.0 版本开始支持自动识别 |
| placeholder | 占位文本 |
| options | 选择器额外配置，比如不可选日期与快捷选项，具体项详见下表 |
| split-panels | 开启后，左右面板不联动，仅在 daterange 和 datetimerange 下可用。 |
| multiple | 开启后，可以选择多个日期，仅在 date 下可用。 |
| show-week-numbers | 开启后，可以显示星期数。 |
| start-date | 设置默认显示的起始日期。 |
| confirm | 是否显示底部控制栏，开启后，选择完日期，选择器不会主动关闭，需用户确认后才可关闭 |
| open | 手动控制日期选择器的显示状态，true 为显示，false 为收起。使用该属性后，选择器不会主动关闭。建议配合 slot 及 confirm 和相关事件一起使用 |
| size | 尺寸，可选值为large、small、default或者不设置 |
| disabled | 是否禁用选择器 |
| clearable | 是否显示清除按钮 |
| readonly | 完全只读，开启后不会弹出选择器，只在没有设置 open 属性下生效 |
| editable | 文本框是否可以输入，只在没有使用 slot 时有效 |
| transfer | 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果 |
| element-id | 给表单元素设置 id，详见 Form 用法。 |
| time-picker-options | 可以在 type 为 datetime 和 datetimerange 下，配置 TimePicker 的属性，比如时间间隔 steps：:time-picker-options="{steps: [1, 10, 10]}" |\n
| events 事件名 | 说明 |
| :--- | :--- |
| on-change | 日期发生变化时触发 |
| on-open-change | 弹出日历和关闭日历时触发 |
| on-ok | 在 confirm 模式下有效，点击确定按钮时触发 |
| on-clear | 在 confirm 模式或 clearable = true 时有效，在清空日期时触发 |\n
| slot | 说明 |
| :--- | :--- |
| 无 | 自定义选择器的显示内容，建议与 open 等参数一起使用，详见示例 |`,
  "TimePicker": `[iview2: http://v2.iviewui.com/components/time-picker](http://v2.iviewui.com/components/time-picker) \n
| props 属性 | 说明 |
| :--- | :--- |
| type | 显示类型，可选值为 time、timerange |
| value | 时间，可以是 JavaScript 的 Date，例如 new Date()，也可以是标准的时间格式，点击右边查看 注意：value 使用 v-model 时，值是 Date 类型，可以配合 @on-change 使用 |
| format | 展示的时间格式 |
| steps | 下拉列表的时间间隔，数组的三项分别对应小时、分钟、秒。例如设置为 [1, 15] 时，分钟会显示：00、15、30、45。 |
| placement | 时间选择器出现的位置，可选值为toptop-starttop-endbottombottom-startbottom-endleftleft-startleft-endrightright-startright-end，2.12.0 版本开始支持自动识别 |
| placeholder | 占位文本 |
| confirm | 是否显示底部控制栏 |
| open | 手动控制时间选择器的显示状态，true 为显示，false 为收起。使用该属性后，选择器不会主动关闭。建议配合 slot 及 confirm 和相关事件一起使用 |
| size | 尺寸，可选值为large、small、default或者不设置 |
| disabled | 是否禁用选择器 |
| clearable | 是否显示清除按钮 |
| readonly | 完全只读，开启后不会弹出选择器，只在没有设置 open 属性下生效 |
| editable | 文本框是否可以输入，只在没有使用 slot 时有效 |
| transfer | 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果 |
| element-id | 给表单元素设置 id，详见 Form 用法。 | \n
| events 事件名 | 说明 |
| :--- | :--- |
| on-change | 时间发生变化时触发 |
| on-open-change | 弹出浮层和关闭浮层时触发 |
| on-ok | 点击确定按钮时触发 |
| on-clear | 在清空日期时触发 |\n
| slot | 说明 |
| :--- | :--- |
| 无 | 自定义选择器的显示内容，建议与 open 等参数一起使用，详见示例 |`,
  "Cascader": `[iview2: http://v2.iviewui.com/components/cascader](http://v2.iviewui.com/components/cascader) \n
| props 属性 | 说明 |
| :--- | :--- |
| data | 可选项的数据源，格式参照示例说明 |
| value | 当前已选项的数据，格式参照示例说明 |
| render-format | 选择后展示的函数，用于自定义显示格式 |
| disabled | 是否禁用选择器 |
| clearable | 是否支持清除 |
| placeholder | 输入框占位符 |
| trigger | 次级菜单展开方式，可选值为 click 或 hover |
| change-on-select | 当此项为 true 时，点选每级菜单选项值都会发生变化，具体见上面的示例 |
| size | 输入框大小，可选值为large和small或者不填 |
| load-data | 动态获取数据，数据源需标识 loading |
| filterable | 是否支持搜索 |
| not-found-text | 当搜索列表为空时显示的内容 |
| transfer | 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果 |
| element-id | 给表单元素设置 id，详见 Form 用法。 |\n
| events 事件名 | 说明 |
| :--- | :--- |
| on-change | 选择完成后的回调，返回值 value 即已选值 value，selectedData 为已选项的具体数据 |
| on-visible-change | 展开和关闭弹窗时触发 |`,
  "Transfer": `[iview2: http://v2.iviewui.com/components/transfer](http://v2.iviewui.com/components/transfer) \n
| props 属性 | 说明 |
| :--- | :--- |
| data | 数据源，其中的数据将会被渲染到左边一栏中，targetKeys 中指定的除外。 |
| targetKeys | 显示在右侧框数据的key集合 |
| render-format | 每行数据渲染函数，该函数的入参为 data 中的项 |
| selected-keys | 设置哪些项应该被选中 |
| list-style | 两个穿梭框的自定义样式 |
| titles | 标题集合，顺序从左至右 |
| operations | 操作文案集合，顺序从上至下 |
| filterable | 是否显示搜索框 |
| filter-placeholder | 搜索框的占位 |
| filter-method | 自定义搜索函数，入参为 data 和 query，data 为项，query 为当前输入的搜索词 |
| not-found-text | 当列表为空时显示的内容 |\n
| events 事件名 | 说明 |
| :--- | :--- |
| on-change | 选项在两栏之间转移时的回调函数 |
| on-selected-change | 选中项发生变化时触发 |`,
  "InputNumber": `[iview2: http://v2.iviewui.com/components/input-number](http://v2.iviewui.com/components/input-number) \n
| props 属性 | 说明 |
| :--- | :--- |
| max | 最大值 |
| min | 最小值 |
| value | 当前值，可以使用 v-model 双向绑定数据 |
| step | 每次改变的步伐，可以是小数 |
| size | 输入框尺寸，可选值为large、small、default或者不填 |
| disabled | 设置禁用状态 |
| placeholder | 占位文本 |
| formatter | 指定输入框展示值的格式 |
| parser | 指定从 formatter 里转换回数字的方式，和 formatter 搭配使用 |
| readonly | 是否设置为只读 |
| editable | 是否可编辑 |
| precision | 数值精度 |
| element-id | 给表单元素设置 id，详见 Form 用法。 |\n
| events 事件名 | 说明 |
| :--- | :--- |
| on-change | 数值改变时的回调，返回当前值 |
| on-focus | 聚焦时触发 |
| on-blur | 失焦时触发 |`,
  "Rate": `[iview2: http://v2.iviewui.com/components/rate](http://v2.iviewui.com/components/rate) \n
| props 属性 | 说明 |
| :--- | :--- |
| count | star 总数 |
| value | 当前 star 数，可以使用 v-model 双向绑定数据 |
| allow-half | 是否允许半选 |
| disabled | 是否只读，无法进行交互 |
| show-text | 是否显示提示文字 |
| clearable | 是否可以取消选择 |\n
| events 事件名 | 说明 |
| :--- | :--- |
| on-change | 评分改变时触发 |`,
  "Upload": `[iview2: http://v2.iviewui.com/components/upload](http://v2.iviewui.com/components/upload) \n
| props 属性 | 说明 |
| :--- | :--- |
| action | 上传的地址，必填 |
| headers | 设置上传的请求头部 |
| multiple | 是否支持多选文件 |
| data | 上传时附带的额外参数 |
| name | 上传的文件字段名 |
| with-credentials | 支持发送 cookie 凭证信息 |
| show-upload-list | 是否显示已上传文件列表 |
| type | 上传控件的类型，可选值为 select（点击选择），drag（支持拖拽） |
| accept | 接受上传的文件类型 |
| format | 支持的文件类型，与 accept 不同的是，format 是识别文件的后缀名，accept 为 input 标签原生的 accept 属性，会在选择文件时过滤，可以两者结合使用 |
| max-size | 文件大小限制，单位 kb |
| before-upload | 上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传 |
| on-progress | 文件上传时的钩子，返回字段为 event, file, fileList |
| on-success | 文件上传成功时的钩子，返回字段为 response, file, fileList |
| on-error | 文件上传失败时的钩子，返回字段为 error, file, fileList |
| on-preview | 点击已上传的文件链接时的钩子，返回字段为 file， 可以通过 file.response 拿到服务端返回数据 |
| on-remove | 文件列表移除文件时的钩子，返回字段为 file, fileList |
| on-format-error | 文件格式验证失败时的钩子，返回字段为 file, fileList |
| on-exceeded-size | 文件超出指定大小限制时的钩子，返回字段为 file, fileList |
| default-file-list | 默认已上传的文件列表，例如：[ { name: 'img1.jpg', url: 'http://www.xxx.com/img1.jpg' }, { name: 'img2.jpg', url: 'http://www.xxx.com/img2.jpg' } ] |\n
| method 方法名 | 说明 |
| :--- | :--- |
| clearFiles | 清空已上传的文件列表 |\n
| slot | 说明 |
| :--- | :--- |
| 无 | 触发上传组件的控件 |
| tip | 辅助提示内容 |`,
  "ColorPicker": `[iview2: http://v2.iviewui.com/components/color-picker](http://v2.iviewui.com/components/color-picker) \n
| props 属性 | 说明 |
| :--- | :--- |
| value | 绑定的值，可使用 v-model 双向绑定 |
| disabled | 是否禁用 |
| alpha | 是否支持透明度选择 |
| hue | 是否支持色彩选择 |
| recommend | 是否显示推荐的颜色预设 |
| colors | 自定义颜色预设 |
| format | 颜色的格式，可选值为 hsl、hsv、hex、rgb |
| size | 尺寸，可选值为large、small、default或者不设置 | \n
| events 事件名 | 说明 |
| :--- | :--- |
| on-change | 当绑定值变化时触发 |
| on-active-change | 面板中当前显示的颜色发生改变时触发 |
| on-open-change | 下拉框展开或收起时触发 |`,
  "Form": `[iview2: http://v2.iviewui.com/components/form](http://v2.iviewui.com/components/form) \n
| props 属性 | 说明 |
| :--- | :--- |
| model | 表单数据对象 |
| rules | 表单验证规则，具体配置查看  async-validator |
| inline | 是否开启行内表单模式 |
| label-position | 表单域标签的位置，可选值为 left、right、top |
| label-width | 表单域标签的宽度，所有的 FormItem 都会继承 Form 组件的 label-width 的值 |
| show-message | 是否显示校验错误信息 |
| autocomplete | 原生的 autocomplete 属性，可选值为 off 或 on |\n
| method 方法名 | 说明 |
| :--- | :--- |
| validate | 对整个表单进行校验，参数为检验完的回调，会返回一个 Boolean 表示成功与失败，支持 Promise |
| validateField | 对部分表单字段进行校验的方法，参数1为需校验的 prop，参数2为检验完回调，返回错误信息 |
| resetFields | 对整个表单进行重置，将所有字段值重置为空并移除校验结果 |`,
  "FormItem": `[iview2: http://v2.iviewui.com/components/form](http://v2.iviewui.com/components/form) \n
| props 属性 | 说明 |
| :--- | :--- |
| prop | 对应表单域 model 里的字段 |
| label | 标签文本 |
| label-width | 表单域标签的的宽度 |
| label-for | 指定原生的 label 标签的 for 属性，配合控件的 element-id 属性，可以点击 label 时聚焦控件。 |
| required | 是否必填，如不设置，则会根据校验规则自动生成 |
| rules | 表单验证规则 |
| error | 表单域验证错误信息, 设置该值会使表单验证状态变为error，并显示该错误信息 |
| show-message | 是否显示校验错误信息 |\n
| slot | 说明 |
| :--- | :--- |
| 无 | 内容 |
| label | label 内容 |`,
  "Alert": `[iview2: http://v2.iviewui.com/components/alert](http://v2.iviewui.com/components/alert) \n
| props 属性 | 说明 |
| :--- | :--- |
| type | 警告提示样式，可选值为info、success、warning、error |
| closable | 是否可关闭 |
| show-icon | 是否显示图标 |\n
| events 事件名 | 说明 |
| :--- | :--- |
| on-close | 关闭时触发 |\n
| slot | 说明 |
| :--- | :--- |
| 无 | 警告提示内容 |
| desc | 警告提示辅助性文字介绍 |
| icon | 自定义图标内容 |
| close | 自定义关闭内容 |`,
  "Card": `[iview2: http://v2.iviewui.com/components/card](http://v2.iviewui.com/components/card) \n
| props 属性 | 说明 |
| :--- | :--- |
| bordered | 是否显示边框，建议在灰色背景下使用 |
| dis-hover | 禁用鼠标悬停显示阴影 |
| shadow | 卡片阴影，建议在灰色背景下使用 |
| padding | 卡片内部间距，单位 px |
| title | 标题，2.12.0 新增 |
| icon | 标题前的图标，2.12.0 新增 |\n
| slot | 说明 |
| :--- | :--- |
| title | 自定义卡片标题，如果是简单文字，可以使用<p>标签包裹 |
| extra | 额外显示的内容，默认位置在右上角 |
| 无 | 卡片主体内容 |`,
  "Modal": `[iview2: http://v2.iviewui.com/components/modal](http://v2.iviewui.com/components/modal) \n
| props 属性 | 说明 |
| :--- | :--- |
| value | 对话框是否显示，可使用 v-model 双向绑定数据。 |
| title | 对话框标题，如果使用 slot 自定义了页头，则 title 无效 |
| closable | 是否显示右上角的关闭按钮，关闭后 Esc 按键也将关闭 |
| mask-closable | 是否允许点击遮罩层关闭 |
| loading | 点击确定按钮时，确定按钮是否显示 loading 状态，开启则需手动设置visible来关闭对话框 |
| scrollable | 页面是否可以滚动 |
| ok-text | 确定按钮文字 |
| cancel-text | 取消按钮文字 |
| width | 对话框宽度，对话框的宽度是响应式的，当屏幕尺寸小于 768px 时，宽度会变为自动auto。当其值不大于 100 时以百分比显示，大于 100 时为像素 |
| styles | 设置浮层样式，调整浮层位置等，该属性设置的是.ivu-modal的样式 |
| class-name | 设置对话框容器.ivu-modal-wrap的类名，可辅助实现垂直居中等自定义效果 |
| transition-names | 自定义显示动画，第一项是模态框，第二项是背景 |
| transfer | 是否将弹层放置于 body 内 |\n
| events 事件名 | 说明 |
| :--- | :--- |
| on-ok | 点击确定的回调 |
| on-cancel | 点击取消的回调 |
| on-visible-change | 显示状态发生变化时触发 |\n
| slot | 说明 |
| :--- | :--- |
| header | 自定义页头 |
| footer | 自定义页脚内容 |
| close | 自定义右上角关闭内容 |
| 无 | 对话框主体内容 |`,
  "Progress": `[iview2: http://v2.iviewui.com/components/progress](http://v2.iviewui.com/components/progress) \n
| props 属性 | 说明 |
| :--- | :--- |
| percent | 百分比 |
| status | 状态，可选值为normal、active、wrong、success |
| stroke-width | 进度条的线宽，单位 px |
| hide-info | 隐藏数值或状态图标 |
| vertical | 是否在垂直方向显示 |\n
| slot | 说明 |
| :--- | :--- |
| 无 | 自定义显示状态内容 |`,
  "Avatar": `[iview2: http://v2.iviewui.com/components/avatar](http://v2.iviewui.com/components/avatar) \n
| props 属性 | 说明 |
| :--- | :--- |
| shape | 指定头像的形状，可选值为 circle、square |
| size | 设置头像的大小，可选值为 large、small、default |
| src | 图片类头像的资源地址 |
| icon | 设置头像的图标类型，参考 Icon 组件 |`,
  "Badge": `[iview2: http://v2.iviewui.com/components/badge](http://v2.iviewui.com/components/badge) \n
| props 属性 | 说明 |
| :--- | :--- |
| count | 显示的数字，大于overflowCount时，显示$\{overflowCount\}+，为 0 时隐藏 |
| overflow-count | 展示封顶的数字值 |
| dot | 不展示数字，只有一个小红点，如需隐藏 dot ，需要设置count为 0 |
| class-name | 自定义的class名称，dot 模式下无效 |`,
  "Collapse": `[iview2: http://v2.iviewui.com/components/collapse](http://v2.iviewui.com/components/collapse) \n
| props 属性 | 说明 |
| :--- | :--- |
| value | 当前激活的面板的 name，可以使用 v-model 双向绑定 |
| accordion | 是否开启手风琴模式，开启后每次至多展开一个面板 |\n
| events 事件名 | 说明 |
| :--- | :--- |
| on-change | 切换面板时触发，返回当前已展开的面板的 key，格式为数组 |`,
  "Panel": `[iview2: http://v2.iviewui.com/components/collapse](http://v2.iviewui.com/components/collapse) \n
| props 属性 | 说明 |
| :--- | :--- |
| name | 当前面板的 name，与 Collapse的value对应，不填为索引值 |\n
| slot | 说明 |
| :--- | :--- |
| 无 | 面板头内容 |
| content | 描述内容 |`,
  "Timeline": `[iview2: http://v2.iviewui.com/components/timeline](http://v2.iviewui.com/components/timeline) \n
| props 属性 | 说明 |
| :--- | :--- |
| pending | 指定是否最后一个节点为幽灵节点 |`,
  "TimelineItem": `[iview2: http://v2.iviewui.com/components/timeline](http://v2.iviewui.com/components/timeline) \n
TimelineItem propsTabs  | props 属性 | 说明 |
| :--- | :--- |
| color | 圆圈颜色，可选值为blue、red、green，或自定义色值 |\n
| slot | 说明 |
| :--- | :--- |
| dot | 自定义时间轴点内容 |
| 无 | 基本内容 |`,
  "Tag": `[iview2: http://v2.iviewui.com/components/tag](http://v2.iviewui.com/components/tag) \n
| props 属性 | 说明 |
| :--- | :--- |
| closable | 标签是否可以关闭 |
| checkable | 标签是否可以选择 |
| checked | 标签的选中状态 |
| type | 标签的样式类型，可选值为 border、dot或不填 |
| color | 标签颜色，预设颜色值为blue、green、red、yellow、default，你也可以自定义颜色值。 |
| name | 当前标签的名称，使用 v-for，并支持关闭时，会比较有用 |
| fade | 是否在出现和消失时使用渐变的动画，动画时长可能会引起占位的闪烁 |\n
| events 事件名 | 说明 |
| :--- | :--- |
| on-close | 关闭时触发 |`,
  "Tooltip": `[iview2: http://v2.iviewui.com/components/tooltip](http://v2.iviewui.com/components/tooltip) \n
| props 属性 | 说明 |
| :--- | :--- |
| content | 显示的内容 |
| placement | 提示框出现的位置，可选值为toptop-starttop-endbottombottom-startbottom-endleftleft-startleft-endrightright-startright-end，2.12.0 版本开始支持自动识别 |
| disabled | 是否禁用提示框 |
| delay | 延迟显示，单位毫秒 |
| always | 是否总是可见 |
| transfer | 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果 |
| options | 自定义 popper.js 的配置项，具体配置见 popper.js 文档 |\n
| events 事件名 | 说明 |
| :--- | :--- |
| on-popper-show | 在提示框显示时触发 |
| on-popper-hide | 在提示框消失时触发 |\n
| slot | 说明 |
| :--- | :--- |
| 无 | 主体内容 |
| content | 提示框的内容，定义此 slot 时，会覆盖 props content。 |`,
  "Poptip": `[iview2: http://v2.iviewui.com/components/poptip](http://v2.iviewui.com/components/poptip) \n
| props 属性 | 说明 |
| :--- | :--- |
| trigger | 触发方式，可选值为hover（悬停）click（点击）focus（聚焦）,在 confirm 模式下，只有 click 有效 |
| title | 显示的标题 |
| content | 显示的正文内容，只在非 confirm 模式下有效 |
| placement | 提示框出现的位置，可选值为toptop-starttop-endbottombottom-startbottom-endleftleft-startleft-endrightright-startright-end，2.12.0 版本开始支持自动识别 |
| width | 宽度，最小宽度为 150px，在 confirm 模式下，默认最大宽度为 300px |
| confirm | 是否开启对话框模式 |
| ok-text | 确定按钮的文字，只在 confirm 模式下有效 |
| cancel-text | 取消按钮的文字，只在 confirm 模式下有效 |
| transfer | 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果 |
| popper-class | 给 Poptip 设置 class-name，在使用 transfer 时会很有用 |
| options | 自定义 popper.js 的配置项，具体配置见 popper.js 文档 |\n
| events 事件名 | 说明 |
| :--- | :--- |
| on-popper-show | 在提示框显示时触发 |
| on-popper-hide | 在提示框消失时触发 |
| on-ok | 点击确定的回调，只在 confirm 模式下有效 |
| on-cancel | 点击取消的回调，只在 confirm 模式下有效 |\n
| slot | 说明 |
| :--- | :--- |
| 无 | 主体内容 |
| title | 提示框标题，定义此 slot 时，会覆盖 props title |
| content | 提示框内容，定义此 slot 时，会覆盖 props content，只在非 confirm 模式下有效 |`,
  "Carousel": `[iview2: http://v2.iviewui.com/components/carousel](http://v2.iviewui.com/components/carousel) \n
| props 属性 | 说明 |
| :--- | :--- |
| value | 幻灯片的索引，从 0 开始，可以使用 v-model 双向绑定数据 |
| height | 走马灯的高度，可填 auto 或具体高度数值，单位 px |
| loop | 是否开启循环 |
| autoplay | 是否自动切换 |
| autoplay-speed | 自动切换的时间间隔，单位为毫秒 |
| dots | 指示器的位置，可选值为 inside （内部），outside（外部），none（不显示） |
| radius-dot | 是否显示圆形指示器 |
| trigger | 指示器的触发方式，可选值为 click（点击），hover（悬停） |
| arrow | 切换箭头的显示时机，可选值为 hover（悬停），always（一直显示），never（不显示） |
| easing | 动画效果 |\n
| events 事件名 | 说明 |
| :--- | :--- |
| on-change | 幻灯片切换时触发，目前激活的幻灯片的索引，原幻灯片的索引 |`,
  "Tree": `[iview2: http://v2.iviewui.com/components/tree](http://v2.iviewui.com/components/tree) \n
| props 属性 | 说明 |
| :--- | :--- |
| data | 可嵌套的节点属性的数组，生成 tree 的数据 |
| multiple | 是否支持多选 |
| show-checkbox | 是否显示多选框 |
| empty-text | 没有数据时的提示 |
| load-data | 异步加载数据的方法，见示例 |
| render | 自定义渲染内容，见示例 |
| children-key | 定义子节点键 |\n
| events 事件名 | 说明 |
| :--- | :--- |
| on-select-change | 点击树节点时触发 |
| on-check-change | 点击复选框时触发 |
| on-toggle-expand | 展开和收起子列表时触发 |\n
| method 方法名 | 说明 |
| :--- | :--- |
| getCheckedNodes | 获取被勾选的节点 |
| getSelectedNodes | 获取被选中的节点 |`,
  "Menu": `[iview2: http://v2.iviewui.com/components/menu](http://v2.iviewui.com/components/menu) \n
| props 属性 | 说明 |
| :--- | :--- |
| mode | 菜单类型，可选值为 horizontal（水平） 和 vertical（垂直） |
| theme | 主题，可选值为 light、dark、primary，其中 primary 只适用于 mode="horizontal" |
| active-name | 激活菜单的 name 值 |
| open-names | 展开的 Submenu 的 name 集合 |
| accordion | 是否开启手风琴模式，开启后每次至多展开一个子菜单 |
| width | 导航菜单的宽度，只在 mode="vertical" 时有效，如果使用 Col 等布局，建议设置为 auto |\n
| events 事件名 | 说明 |
| :--- | :--- |
| on-select | 选择菜单（MenuItem）时触发 |
| on-open-change | 当 展开/收起 子菜单时触发 |\n
| method 方法名 | 说明 |
| :--- | :--- |
| updateOpened | 手动更新展开的子目录，注意要在 $nextTick 里调用 |
| updateActiveName | 手动更新当前选择项，注意要在 $nextTick 里调用 |`,
  "MenuItem": `[iview2: http://v2.iviewui.com/components/menu](http://v2.iviewui.com/components/menu) \n
| props 属性 | 说明 |
| :--- | :--- |
| name | 菜单项的唯一标识，必填 |`,
  "Submenu": `[iview2: http://v2.iviewui.com/components/menu](http://v2.iviewui.com/components/menu) \n
| props 属性 | 说明 |
| :--- | :--- |
| name | 子菜单的唯一标识，必填 |\n
| slot | 说明 |
| :--- | :--- |
| 无 | 菜单项 |
| title | 子菜单标题 |`,
  "MenuGroup": `[iview2: http://v2.iviewui.com/components/menu](http://v2.iviewui.com/components/menu) \n
| props 属性 | 说明 |
| :--- | :--- |
| title | 分组标题 |`,
  "Tabs": `[iview2: http://v2.iviewui.com/components/tabs](http://v2.iviewui.com/components/tabs) \n
| props 属性 | 说明 |
| :--- | :--- |
| value | 当前激活 tab 面板的 name，可以使用 v-model 双向绑定数据 |
| type | 页签的基本样式，可选值为 line 和 card |
| size | 尺寸，可选值为 default 和 small，仅在 type="line" 时有效 |
| closable | 是否可以关闭页签，仅在 type="card" 时有效 |
| animated | 是否使用 CSS3 动画 |
| capture-focus | Tabs 内的表单类组件是否自动获得焦点 |\n
| events 事件名 | 说明 |
| :--- | :--- |
| on-click | tab 被点击时触发 |
| on-tab-remove | tab 被关闭时触发 |\n
| slot | 说明 |
| :--- | :--- |
| extra | 附加内容 |`,
  "TabPane": `[iview2: http://v2.iviewui.com/components/tabs](http://v2.iviewui.com/components/tabs) \n
| props 属性 | 说明 |
| :--- | :--- |
| name | 用于标识当前面板，对应 value，默认为其索引值 |
| label | 选项卡头显示文字，支持 Render 函数。  学习 Render 函数的内容 |
| icon | 选项卡图标 |
| disabled | 是否禁用该选项卡 |
| closable | 是否可以关闭页签，仅在 type="card" 时有效 |`,
  "Dropdown": `[iview2: http://v2.iviewui.com/components/select](http://v2.iviewui.com/components/select) \n
| props 属性 | 说明 |
| :--- | :--- |
| trigger | 触发方式，可选值为 hover（悬停）click（点击）custom（自定义），使用 custom 时，需配合 visible 一起使用 |
| visible | 手动控制下拉框的显示，在 trigger = 'custom' 时使用 |
| placement | 下拉菜单出现的位置，可选值为toptop-starttop-endbottombottom-startbottom-endleftleft-startleft-endrightright-startright-end, 2.12.0 版本开始支持自动识别 |
| transfer | 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果 |\n
| events 事件名 | 说明 |
| :--- | :--- |
| on-click | 点击菜单项时触发 |
| on-visible-change | 菜单显示状态改变时调用 |
| on-clickoutside | 点击外部关闭下拉菜单时触发 |\n
| slot | 说明 |
| :--- | :--- |
| 无 | 主体内容 |
| list | 列表内容，一般由 DropdownMenu 承担 |`,
  "DropdownItem": `[iview2: http://v2.iviewui.com/components/select](http://v2.iviewui.com/components/select) \n
| props 属性 | 说明 |
| :--- | :--- |
| name | 用来标识这一项 |
| disabled | 禁用该项 |
| divided | 显示分割线 |
| selected | 标记该项为选中状态 |`,
  "Page": `[iview2: http://v2.iviewui.com/components/page](http://v2.iviewui.com/components/page) \n
| props 属性 | 说明 |
| :--- | :--- |
| current | 当前页码，支持 .sync 修饰符 |
| total | 数据总数 |
| page-size | 每页条数 |
| page-size-opts | 每页条数切换的配置 |
| placement | 条数切换弹窗的展开方向，可选值为 bottom 和 top |
| size | 可选值为small（迷你版）或不填（默认） |
| simple | 简洁版 |
| show-total | 显示总数 |
| show-elevator | 显示电梯，可以快速切换到某一页 |
| show-sizer | 显示分页，用来改变page-size |
| class-name | 自定义 class 名称 |
| styles | 自定义 style 样式 |
| transfer | 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果 |\n
| events 事件名 | 说明 |
| :--- | :--- |
| on-change | 页码改变的回调，返回改变后的页码 |
| on-page-size-change | 切换每页条数时的回调，返回切换后的每页条数 |\n
| slot | 说明 |
| :--- | :--- |
| 无 | 自定义显示总数的内容 |`,
  "Breadcrumb": `[iview2: http://v2.iviewui.com/components/breadcrumb](http://v2.iviewui.com/components/breadcrumb) \n
| props 属性 | 说明 |
| :--- | :--- |
| separator | 自定义分隔符 |`,
  "BreadcrumbItem": `[iview2: http://v2.iviewui.com/components/breadcrumb](http://v2.iviewui.com/components/breadcrumb) \n
| props 属性 | 说明 |
| :--- | :--- |
| to | 链接，不传则没有链接 |
| href | 同 to，未来将废弃 |
| replace | 路由跳转时，开启 replace 将不会向 history 添加新记录 |`,
  "Steps": `[iview2: http://v2.iviewui.com/components/steps](http://v2.iviewui.com/components/steps) \n
| props 属性 | 说明 |
| :--- | :--- |
| current | 当前步骤，从 0 开始计数 |
| status | 当前步骤的状态，可选值为wait、process、finish、error |
| size | 步骤条的尺寸，可选值为small或者不写 |
| direction | 步骤条的方向，可选值为horizontal（水平）或vertical（垂直） |`,
  "Step": `[iview2: http://v2.iviewui.com/components/steps](http://v2.iviewui.com/components/steps) \n
| props 属性 | 说明 |
| :--- | :--- |
| status | 步骤的状态，可选值为wait、process、finish、error，不设置时自动判断 |
| title | 标题 |
| content | 步骤的详细描述，可选 |
| icon | 步骤的图标，可选 |`,
  "Circle": `[iview2: http://v2.iviewui.com/components/circle](http://v2.iviewui.com/components/circle) \n
| props 属性 | 说明 |
| :--- | :--- |
| percent | 百分比 |
| size | 图表的宽度和高度，单位 px |
| stroke-linecap | 进度环顶端的形状，可选值为square（方）和round（圆） |
| stroke-width | 进度环的线宽，单位 px |
| stroke-color | 进度环的颜色 |
| trail-width | 进度环背景的线宽，单位 px |
| trail-color | 进度环背景的颜色 |\n
| slot | 说明 |
| :--- | :--- |
| 无 | 自定义显示中间内容，内容默认垂直居中 |`,
  "Affix": `[iview2: http://v2.iviewui.com/components/affix](http://v2.iviewui.com/components/affix) \n
| props 属性 | 说明 |
| :--- | :--- |
| offset-top | 距离窗口顶部达到指定偏移量后触发 |
| offset-bottom | 距离窗口底部达到指定偏移量后触发 |\n
| events 事件名 | 说明 |
| :--- | :--- |
| on-change | 在固定状态发生改变时触发 |`,
  "BackTop": `[iview2: http://v2.iviewui.com/components/back-top](http://v2.iviewui.com/components/back-top) \n
| props 属性 | 说明 |
| :--- | :--- |
| height | 页面滚动高度达到该值时才显示BackTop组件 |
| bottom | 组件距离底部的距离 |
| right | 组件距离右部的距离 |
| duration | 滚动动画持续时间，单位 毫秒 |\n
| events 事件名 | 说明 |
| :--- | :--- |
| on-click | 点击按钮时触发 |`,
  "Spin": `[iview2: http://v2.iviewui.com/components/spin](http://v2.iviewui.com/components/spin) \n
| props 属性 | 说明 |
| :--- | :--- |
| size | Spin尺寸，可选值为large和small或者不设置 |
| fix | 是否固定，需要父级有relative或absolute |\n
| slot | 说明 |
| :--- | :--- |
| 无 | 自定义 Spin 的内容，设置slot后，默认的样式不生效 |`,
  "Scroll": `[iview2: http://v2.iviewui.com/components/scroll](http://v2.iviewui.com/components/scroll) \n
| props 属性 | 说明 |
| :--- | :--- |
| height | 滚动区域的高度，单位像素 |
| loading-text | 加载中的文案 |
| on-reach-top | 滚动至顶部时触发，需返回 Promise |
| on-reach-bottom | 滚动至底部时触发，需返回 Promise |
| on-reach-edge | 滚动至顶部或底部时触发，需返回 Promise |
| distance-to-edge | 从边缘到触发回调的距离。如果是负的，回调将在到达边缘之前触发。值最好在 24 以下。 |`,
}