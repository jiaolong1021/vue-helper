export default {
  "el-button": `#### [访问](https://element-plus.gitee.io/zh-CN/component/button.html)
#### Button 属性
| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| size| 尺寸| enum| — |
| type| 类型| enum| — |
| plain| 是否为朴素按钮| boolean| false |
| text2.2.0| 是否为文字按钮| boolean| false |
| bg2.2.0| 是否显示文字按钮背景颜色| boolean| false |
| link 2.2.1| 是否为链接按钮| boolean| false |
| round| 是否为圆角按钮| boolean| false |
| circle| 是否为圆形按钮| boolean| false |
| loading| 是否为加载中状态| boolean| false |
| loading-icon| 自定义加载中状态图标组件| string / Component| Loading |
| disabled| 按钮是否为禁用状态| boolean| false |
| icon| 图标组件| string / Component| — |
| autofocus| 原生 autofocus 属性| boolean| false |
| native-type| 原生 type 属性| enum| button |
| auto-insert-space| 自动在两个中文字符之间插入空格| boolean| — |
| color| 自定义按钮颜色, 并自动计算 hover 和 active 触发后的颜色| string| — |
| dark| dark 模式, 意味着自动设置 color 为 dark 模式的颜色| boolean| false |
#### Button 插槽
| 插槽名| 说明 |
| :--- | :--- |
| default| 自定义默认内容 |
| loading| 自定义加载中组件 |
| icon| 自定义图标组件 |
#### Button 对外暴露的方法
| 属性名| 说明| 类型 |
| :--- | :--- | :--- |
| ref| 按钮 html 元素| object |
| size| 按钮尺寸| object |
| type| 按钮类型| object |
| disabled| 按钮已禁用| object |
| shouldAddSpace| 是否在两个字符之间插入空格| object |
#### ButtonGroup API
#### Button Group 属性
| 插槽名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| size| 用于控制该按钮组内按钮的大小| enum| — |
| type| 用于控制该按钮组内按钮的类型| enum| — |
#### ButtonGroup 插槽
| 插槽名| 说明| 子标签 |
| :--- | :--- | :--- |
| default| 自定义按钮组内容| Button |
`,
  "el-border": `#### [访问](https://element-plus.gitee.io/zh-CN/component/border.html)
`,
  "el-color": `#### [访问](https://element-plus.gitee.io/zh-CN/component/color.html)
`,
  "el-container": `#### [访问](https://element-plus.gitee.io/zh-CN/component/container.html)
`,
  "el-icon": `#### [访问](https://element-plus.gitee.io/zh-CN/component/icon.html)
`,
  "el-layout": `#### [访问](https://element-plus.gitee.io/zh-CN/component/layout.html)
`,
  "el-link": `#### [访问](https://element-plus.gitee.io/zh-CN/component/link.html)
#### 属性
| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| type| 类型| enum| default |
| underline| 是否下划线| boolean| true |
| disabled| 是否禁用状态| boolean| false |
| href| 原生 href 属性| string| — |
| icon| 图标组件| string / Component| — |
#### 插槽
| 插槽名| 说明 |
| :--- | :--- |
| default| 自定义默认内容 |
| icon| 自定义图标组件 |
`,
  "el-scrollbar": `#### [访问](https://element-plus.gitee.io/zh-CN/component/scrollbar.html)
#### 属性
| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| height| 滚动条高度| string / number| — |
| max-height| 滚动条最大高度| string / number| — |
| native| 是否使用原生滚动条样式| boolean| false |
| wrap-style| 包裹容器的自定义样式| string / object| — |
| wrap-class| 包裹容器的自定义类名| string| — |
| view-style| 视图的自定义样式| string / object| — |
| view-class| 视图的自定义类名| string| — |
| noresize| 不响应容器尺寸变化，如果容器尺寸不会发生变化，最好设置它可以优化性能| boolean| false |
| tag| 视图的元素标签| string| div |
| always| 滚动条总是显示| boolean| false |
| min-size| 滚动条最小尺寸| number| 20 |
#### 事件
| 事件名| 说明| 类型 |
| :--- | :--- | :--- |
| scroll| 当触发滚动事件时，返回滚动的距离| Function |
#### 插槽
| 插槽名| 说明 |
| :--- | :--- |
| default| 自定义默认内容 |
#### 对外暴露的方法
| 名称| 说明| 类型 |
| :--- | :--- | :--- |
| handleScroll| 触发滚动事件| Function |
| scrollTo| 滚动到一组特定坐标| Function |
| setScrollTop| 设置滚动条到顶部的距离| Function |
| setScrollLeft| 设置滚动条到左边的距离| Function |
| update| 手动更新滚动条状态| Function |
| wrapRef| 滚动条包裹的 ref 对象| object |
`,
  "el-space": `#### [访问](https://element-plus.gitee.io/zh-CN/component/space.html)
`,
  "el-typography": `#### [访问](https://element-plus.gitee.io/zh-CN/component/typography.html)
`,
  "el-autocomplete": `#### [访问](https://element-plus.gitee.io/zh-CN/component/autocomplete.html)
#### 属性
| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| model-value / v-model| 选中项绑定值| string| — |
| placeholder| 占位文本| string| — |
| clearable| 是否可清空| boolean| false |
| disabled| 自动补全组件是否被禁用| boolean| false |
| value-key| 输入建议对象中用于显示的键名| string| value |
| debounce| 获取输入建议的防抖延时，单位为毫秒| number| 300 |
| placement| 菜单弹出位置| enum| bottom-start |
| fetch-suggestions| 获取输入建议的方法， 仅当你的输入建议数据 resolve 时，通过调用 callback(data:[])  来返回它| Function| — |
| trigger-on-focus| whether show suggestions when input focus| boolean| true |
| select-when-unmatched| 在输入没有任何匹配建议的情况下，按下回车是否触发 select 事件| boolean| false |
| name| 等价于原生 input name 属性| string| — |
| label| 输入框关联的 label 文字| string| — |
| hide-loading| 是否隐藏远程加载时的加载图标| boolean| false |
| popper-class| 下拉列表的类名| string| — |
| popper-append-to-bodydeprecated| 是否将下拉列表插入至 body 元素。 在下拉列表的定位出现问题时，可将该属性设置为 false| boolean| false |
| teleported| 是否将下拉列表元素插入 append-to 指向的元素下| boolean| true |
| highlight-first-item| 是否默认高亮远程搜索结果的第一项| boolean| false |
| fit-input-width| 下拉框的宽度是否与输入框相同| boolean| false |
#### 事件
| 事件名| 详情| 类型 |
| :--- | :--- | :--- |
| select| 点击选中建议项时触发| Function |
| change| 在 Input 值改变时触发| Function |
#### 插槽
| 插槽名| 描述说明 |
| :--- | :--- |
| default| 自定义输入建议的内容。 自定义标签，参数为 |
| prefix| 输入框头部内容 |
| suffix| 输入框尾部内容 |
| prepend| 输入框前置内容，在 prefix 之前 |
| append| 输入框后置内容，在 suffix 之后 |
#### 对外暴露的方法
| 名称| 详情| 类型 |
| :--- | :--- | :--- |
| activated| 自动补全输入框是否被激活| object |
| blur| 使 input 失去焦点| Function |
| close| 折叠建议列表| Function |
| focus| 使 input 获取焦点| Function |
| handleSelect| 手动触发选中建议事件| Function |
| handleKeyEnter| 手动触发键盘回车事件| Function |
| highlightedIndex| 当前高亮显示选项的索引| object |
| highlight| 在建议中高亮显示一个项目| Function |
| inputRef| el-input 组件实例| object |
| loading| 远程获取提示内容的加载状态指示器| object |
| popperRef| el-tooltip 组件实例| object |
| suggestions| 获取自动补全结果| object |
`,
  "el-cascader": `#### [访问](https://element-plus.gitee.io/zh-CN/component/cascader.html)
#### Cascader 属性
| 属性名| 说明| 类型| 默认 |
| :--- | :--- | :--- | :--- |
| model-value / v-model| 选中项绑定值| string/number/object| — |
| options| 选项的数据源， value 和 label 可以通过 CascaderProps 自定义.| object| — |
| props| 配置选项, 请参阅下面 CascaderProps 表。| object| — |
| size| 尺寸| enum| — |
| placeholder| 输入框占位文本| string| — |
| disabled| 是否禁用| boolean| — |
| clearable| 是否支持清空选项| boolean| — |
| show-all-levels| 输入框中是否显示选中值的完整路径| boolean| true |
| collapse-tags| 多选模式下是否折叠Tag| boolean| — |
| collapse-tags-tooltip| 当鼠标悬停于折叠标签的文本时，是否显示所有选中的标签。 要使用此属性，collapse-tags属性必须设定为 true| boolean| false |
| separator| 用于分隔选项的字符| string| ' / ' |
| filterable| 该选项是否可以被搜索| boolean| — |
| filter-method| 自定义搜索逻辑，第一个参数是node，第二个参数是keyword，返回的布尔值表示是否保留该选项| Function| — |
| debounce| 搜索关键词正在输入时的去抖延迟，单位为毫秒| number| 300 |
| before-filter| 过滤函数调用前，所要调用的钩子函数，该函数接收要过滤的值作为参数。 如果该函数的返回值是 false 或者是一个被拒绝的 Promise，那么接下来的过滤逻辑便不会执行。| Function| — |
| popper-class| 弹出内容的自定义类名| string| '' |
| teleported| 弹层是否使用 teleport| boolean| true |
| popper-append-to-body deprecated| 是否将弹出的内容直接插入到 body 元素。 在弹出内容的边框定位出现问题时，可将该属性设置为 false| boolean| true |
| tag-type| 标签类型| enum| info |
| validate-event| 输入时是否触发表单的校验| boolean| true |
#### Cascader 事件
| 事件名| 说明| 类型 |
| :--- | :--- | :--- |
| change| 当绑定值变化时触发的事件| Function |
| expand-change| 当展开节点发生变化时触发| Function |
| blur| 当失去焦点时触发| Function |
| focus| 当获得焦点时触发| Function |
| visible-change| 下拉框出现/隐藏时触发| Function |
| remove-tag| 在多选模式下，移除Tag时触发| Function |
#### Cascader 插槽
| 名称| 说明| 作用域 |
| :--- | :--- | :--- |
| default| 自定义备选项的节点内容，分别为当前节点的 Node 对象和数据| object |
| empty| 无匹配选项时的内容| — |
#### Cascader Exposes
| 插槽名| 说明| 类型 |
| :--- | :--- | :--- |
| getCheckedNodes| 获取一个当前选中节点的数组。(仅仅是传单) 是否只返回叶选中的节点，默认是 false| Function |
| cascaderPanelRef| cascader 面板的 ref| object |
| togglePopperVisible| 切换 popper 可见状态| Function |
#### CascaderPanel API
#### CascaderPanel Attributes
| 属性名| 说明| 类型| 默认 |
| :--- | :--- | :--- | :--- |
| model-value / v-model| 选中项绑定值| string/number/object| — |
| options| 选项的数据源， value 和 label 可以通过 CascaderProps 自定义.| object| — |
| props| 配置选项, 请参阅下面 CascaderProps 表。| object| — |
#### CascaderPanel Events
| 事件名| 说明| Type |
| :--- | :--- | :--- |
| change| 当选中节点变化时触发| Function |
| expand-change| 当展开节点发生变化时触发| Function |
| close| 面板的关闭事件，提供给 Cascader 以便做更好的判断。| Function |
#### CascaderPanel Slots
| Name| 说明| Scope |
| :--- | :--- | :--- |
| default| 下级节点的自定义内容，它们分别是当前节点对象和节点数据。| object |
#### CascaderPanel Exposes
| 插槽名| 说明| Type |
| :--- | :--- | :--- |
| getCheckedNodes| 获取一个当前选中节点的数组。(仅仅是传单) 是否只返回叶选中的节点，默认是 false| Function |
| clearCheckedNodes| 清空选中的节点| Function |
#### CascaderProps
| 属性| 说明| 类型| Default |
| :--- | :--- | :--- | :--- |
| expandTrigger| 次级菜单的展开方式| enum| click |
| multiple| 是否多选| boolean| false |
| checkStrictly| 是否严格的遵守父子节点不互相关联| boolean| false |
| emitPath| 在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值| boolean| true |
| lazy| 是否动态加载子节点，需与 lazyLoad 方法结合使用| boolean| false |
| lazyLoad| 加载动态数据的方法，仅在 lazy 为 true 时有效| Function| — |
| value| 指定选项的值为选项对象的某个属性值| string| value |
| label| 指定选项标签为选项对象的某个属性值| string| label |
| children| 指定选项的子选项为选项对象的某个属性值| string| children |
| disabled| 指定选项的禁用为选项对象的某个属性值| string| disabled |
| leaf| 指定选项的叶子节点的标志位为选项对象的某个属性值| string| leaf |
| hoverThreshold| hover 时展开菜单的灵敏度阈值| number| 500 |
#### 类型声明
`,
  "el-checkbox": `#### [访问](https://element-plus.gitee.io/zh-CN/component/checkbox.html)
#### 多选框属性
| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| model-value / v-model| 选中项绑定值| string / number / boolean| — |
| label| 选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效）| string / number / boolean / object| — |
| true-label| 选中时的值| string / number| — |
| false-label| 没有选中时的值| string / number| — |
| disabled| 是否禁用| boolean| false |
| border| 是否显示边框| boolean| false |
| size| Checkbox 的尺寸| enum| — |
| name| 原生 name 属性| string| — |
| checked| 当前是否勾选| boolean| false |
| indeterminate| 设置不确定状态，仅负责样式控制| boolean| false |
| validate-event| 输入时是否触发表单的校验| boolean| true |
| tabindex| 输入框的 tabindex| string / number| — |
| id| input id| string| — |
| controls a11y| 与 aria-control一致, 当 indeterminate为 true时生效| boolean| — |
#### Checkbox Events
| 事件名| 说明| 类型 |
| :--- | :--- | :--- |
| change| 当绑定值变化时触发的事件| Function |
#### Checkbox Slots
| 插槽名| 说明 |
| :--- | :--- |
| default| 自定义默认内容 |
#### CheckboxGroup API
#### CheckboxGroup Attributes
| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| model-value / v-model| 绑定值| object| [] |
| size| 多选框组尺寸| enum| — |
| disabled| 是否禁用| boolean| false |
| min| 可被勾选的 checkbox 的最小数量| number| — |
| max| 可被勾选的 checkbox 的最大数量| number| — |
| label| 为屏幕阅读器准备的标签| string| — |
| text-color| 当按钮为活跃状态时的字体颜色| string| #ffffff |
| fill| 当按钮为活跃状态时的边框和背景颜色| string| #409EFF |
| tag| 复选框组元素标签| string| div |
| validate-event| 是否触发表单验证| boolean| true |
#### CheckboxGroup Events
| 事件名| 说明| 类型 |
| :--- | :--- | :--- |
| change| 当绑定值变化时触发的事件| Function |
#### CheckboxGroup Slots
| 插槽名| 说明| 子标签 |
| :--- | :--- | :--- |
| default| 自定义默认内容| Checkbox / Checkbox-button |
#### CheckboxButton API
#### CheckboxButton Attributes
| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| label| 选中状态的值，只有在绑定对象类型为 array 时有效。| string / number / boolean / object| — |
| true-label| 选中时的值| string / number| — |
| false-label| 没有选中时的值| string / number| — |
| disabled| 是否禁用| boolean| false |
| name| 原生 name 属性| string| — |
| checked| 当前是否勾选| boolean| false |
#### CheckboxButton Slots
| 插槽名| 描述 |
| :--- | :--- |
| default| 自定义默认内容 |
`,
  "el-form": `#### [访问](https://element-plus.gitee.io/zh-CN/component/form.html)
#### Form 属性
| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| model| 表单数据对象| object| — |
| rules| 表单验证规则| object| — |
| inline| 行内表单模式| boolean| false |
| label-position| 表单域标签的位置， 当设置为 left 或 right 时，则也需要设置 label-width 属性| enum| right |
| label-width| 标签的长度，例如 '50px'。 作为 Form 直接子元素的 form-item 会继承该值。 可以使用 auto。| string / number| — |
| label-suffix| 表单域标签的后缀| string| — |
| hide-required-asterisk| 是否隐藏必填字段标签旁边的红色星号。| boolean| false |
| require-asterisk-position| 星号的位置。| enum| left |
| show-message| 是否显示校验错误信息| boolean| true |
| inline-message| 是否以行内形式展示校验信息| boolean| false |
| status-icon| 是否在输入框中显示校验结果反馈图标| boolean| false |
| validate-on-rule-change| 是否在 rules 属性改变后立即触发一次验证| boolean| true |
| size| 用于控制该表单内组件的尺寸| enum| — |
| disabled| 是否禁用该表单内的所有组件。 如果设置为 true, 它将覆盖内部组件的 disabled 属性| boolean| false |
| scroll-to-error| 当校验失败时，滚动到第一个错误表单项| boolean| false |
#### Form 方法
| 方法名| 说明| 类型 |
| :--- | :--- | :--- |
| validate| 对整个表单的内容进行验证。 接收一个回调函数，或返回 Promise。| (callback?: (isValid: boolean, invalidFields?: ValidateFieldsError) => void) => Promise<boolean> |
| validateField| 验证具体的某个字段。| (props?: Arrayable<FormItemProp>, callback?: (isValid: boolean, invalidFields?: ValidateFieldsError) => void) => Promise<void> |
| resetFields| 重置该表单项，将其值重置为初始值，并移除校验结果| (props?: Arrayable<FormItemProp>) => void |
| scrollToField| 滚动到指定的字段| (prop: FormItemProp) => void |
| clearValidate| 清理某个字段的表单验证信息。| (props?: Arrayable<FormItemProp>) => void |
#### Form 事件
| 事件名| 说明| 类型 |
| :--- | :--- | :--- |
| validate| 任一表单项被校验后触发| Function |
#### Form 对外暴露的变量
| 名称| 说明| 类型 |
| :--- | :--- | :--- |
| validate| 对整个表单的内容进行验证。 接收一个回调函数，或返回 Promise。| Function |
| validateField| 验证具体的某个字段。| Function |
| resetFields| 重置该表单项，将其值重置为初始值，并移除校验结果| Function |
| scrollToField| 滚动到指定的字段| Function |
| clearValidate| 清理某个字段的表单验证信息。| Function |
#### Form 插槽
| 属性名| 说明| 子标签 |
| :--- | :--- | :--- |
| default| customize default content| FormItem |
#### FormItem API
#### FormItem 属性
| 名称| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| prop| model 的键名。 它可以是一个路径数组(例如 ['a', 'b', 0])。 在定义了 validate、resetFields 的方法时，该属性是必填的| string / string[]| — |
| label| 标签文本| string| — |
| label-width| 标签宽度，例如 '50px'。 可以使用 auto。| string / number| — |
| required| 是否为必填项，如不设置，则会根据校验规则确认| boolean| false |
| rules| 表单验证规则, 具体配置见下表, 更多内容可以参考async-validator| object| — |
| error| 表单域验证错误时的提示信息。设置该值会导致表单验证状态变为 error，并显示该错误信息。| string| — |
| show-message| 是否显示校验错误信息| boolean| true |
| inline-message| 是否在行内显示校验信息| boolean| false |
| size| 用于控制该表单域下组件的默认尺寸| enum| default |
| for| 和原生标签相同能力| string| — |
| validate-status| formitem 校验的状态| enum| — |
| 插槽名| 说明| 类型| 默认 |
| :--- | :--- | :--- | :--- |
| trigger| 验证逻辑的触发方式| enum| — |
#### FormItem Slots
| 名称| 说明| 类型 |
| :--- | :--- | :--- |
| default| 表单的内容。| — |
| label| 标签位置显示的内容| object |
| error| 验证错误信息的显示内容| object |
#### FormItem 对外暴露的变量
| 名称| 描述| 类型 |
| :--- | :--- | :--- |
| size| 表单项大小| object |
| validateMessage| 校验消息| object |
| validateState| 校验状态| object |
| validate| 验证表单项| Function |
| resetField| 对该表单项进行重置，将其值重置为初始值并移除校验结果| Function |
| clearValidate| 移除该表单项的校验结果| Function |
`,
  "el-input": `#### [访问](https://element-plus.gitee.io/zh-CN/component/input.html)
#### 属性
| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| type| 类型| string native input types| text |
| model-value / v-model| 绑定值| string / number| — |
| maxlength| 最大输入长度| string / number| — |
| minlength| 原生属性，最小输入长度| number| — |
| show-word-limit| 是否显示统计字数, 只在 type 为 'text' 或 'textarea' 的时候生效| boolean| boolean |
| placeholder| 输入框占位文本| string| — |
| clearable| 是否显示清除按钮，只有当 type 不是 textarea时生效| boolean| false |
| formatter| 指定输入值的格式。(只有当 type 是"text"时才能工作)| Function| — |
| parser| 指定从格式化器输入中提取的值。(仅当 type 是"text"时才起作用)| Function| — |
| show-password| 是否显示切换密码图标| boolean| false |
| disabled| 是否禁用| boolean| false |
| size| 输入框尺寸，只在 type 不为 'textarea' 时有效| enum| — |
| prefix-icon| 自定义前缀图标| string / Component| — |
| suffix-icon| 自定义后缀图标| string / Component| — |
| rows| 输入框行数，仅 type 为 'textarea' 时有效| number| number |
| autosize| textarea 高度是否自适应，仅 type 为 'textarea' 时生效。 可以接受一个对象，比如: { minRows: 2, maxRows: 6 }| boolean / object| false |
| autocomplete| 原生 autocomplete 属性| string| off |
| name| 等价于原生 input name 属性| string| — |
| readonly| 原生  readonly 属性，是否只读| boolean| false |
| max| 原生 max 属性，设置最大值| —| — |
| min| 原生属性，设置最小值| —| — |
| step| 原生属性，设置输入字段的合法数字间隔| —| — |
| resize| 控制是否能被用户缩放| enum| — |
| autofocus| 原生属性，自动获取焦点| boolean| false |
| form| 原生属性| string| — |
| labela11y| 等价于原生 input aria-label 属性| string| — |
| tabindex| 输入框的 tabindex| string / number| — |
| validate-event| 输入时是否触发表单的校验| boolean| true |
| input-style| input 元素或 textarea 元素的 style| string / object| {} |
#### 事件
| 事件名| 说明| 类型 |
| :--- | :--- | :--- |
| blur| 当选择器的输入框失去焦点时触发| Function |
| focus| 当选择器的输入框获得焦点时触发| Function |
| change| 仅当 modelValue 改变时，当输入框失去焦点或用户按Enter时触发| Function |
| input| 在 Input 值改变时触发| Function |
| clear| 在点击由 clearable 属性生成的清空按钮时触发| Function |
#### 插槽
| 插槽名| 说明 |
| :--- | :--- |
| prefix| 输入框头部内容，只对非 type="textarea" 有效 |
| suffix| 输入框尾部内容，只对非 type="textarea" 有效 |
| prepend| 输入框前置内容，只对非 type="textarea" 有效 |
| append| 输入框后置内容，只对非 type="textarea" 有效 |
#### 对外暴露的方法
| 名称| 说明| 类型 |
| :--- | :--- | :--- |
| blur| 使 input 失去焦点| Function |
| clear| 清除 input 值| Function |
| focus| 使 input 获取焦点| Function |
| input| Input HTML 元素| object |
| ref| HTML元素 input 或 textarea| object |
| resizeTextarea| 改变 textarea 大小| Function |
| select| 选中 input 中的文字| Function |
| textarea| HTML textarea 元素| object |
| textareaStyle| textarea 的样式| object |
`,
  "el-radio": `#### [访问](https://element-plus.gitee.io/zh-CN/component/radio.html)
#### Radio 属性
| 属性名| 说明| 类型| 默认 |
| :--- | :--- | :--- | :--- |
| model-value / v-model| 选中项绑定值| string / number / boolean| — |
| label| 单选框的值| string / number / boolean| — |
| disabled| 是否禁用单选框| boolean| false |
| border| 是否显示边框| boolean| false |
| size| 单选框的尺寸| enum| — |
| name| 原始 name 属性| string| — |
#### Radio 事件
| 事件名| 说明| 类型 |
| :--- | :--- | :--- |
| change| 绑定值变化时触发的事件| Function |
#### Radio 插槽
| 插槽名| 说明 |
| :--- | :--- |
| default| 自定义默认内容 |
#### RadioGroup 单选框组
#### RadioGroup属性
| 属性名| 说明| 类型| 默认 |
| :--- | :--- | :--- | :--- |
| model-value / v-model| 绑定值| string / number / boolean| — |
| size| 单选框按钮或边框按钮的大小| string| default |
| disabled| 是否禁用| boolean| false |
| text-color| 按钮形式的 Radio 激活时的文本颜色| string| #ffffff |
| fill| 按钮形式的 Radio 激活时的填充色和边框色| string| #409EFF |
| validate-event| 输入时是否触发表单的校验| boolean| true |
| labela11y| 与 RadioGroup 中的 aria-label 属性相同| string| — |
| name| 原生 name 属性| string| — |
| id| 原生 id 属性| string| — |
#### RadioGroup 事件
| 事件名| 说明| 类型 |
| :--- | :--- | :--- |
| change| 绑定值变化时触发的事件| Function |
#### RadioGroup 插槽
| 插槽名| 说明| 子标签 |
| :--- | :--- | :--- |
| default| 自定义默认内容| Radio / RadioButton |
#### RadioButton API接口
#### RadioButton 属性
| 属性名| 说明| 类型| 默认 |
| :--- | :--- | :--- | :--- |
| label| 单选框的值| string / number / boolean| — |
| disabled| 是否禁用单选框| boolean| false |
| name| 原生 name 属性| string| — |
#### RadioButton 插槽
| 插槽名| 说明 |
| :--- | :--- |
| default| 默认插槽内容 |
`,
  "el-rate": `#### [访问](https://element-plus.gitee.io/zh-CN/component/rate.html)
#### 属性
| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| model-value / v-model| 选中项绑定值| number| 0 |
| max| 最大分值| number| 5 |
| size| 尺寸| enum| — |
| disabled| 是否为只读| boolean| false |
| allow-half| 是否允许半选| boolean| false |
| low-threshold| 低分和中等分数的界限值， 值本身被划分在低分中| number| 2 |
| high-threshold| 高分和中等分数的界限值， 值本身被划分在高分中| number| 4 |
| colors| icon 的颜色。 若传入数组，共有 3 个元素，为 3 个分段所对应的颜色；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的颜色| object| ['#F7BA2A', '#F7BA2A', '#F7BA2A'] |
| void-color| 未选中 icon 的颜色| string| #C6D1DE |
| disabled-void-color| 只读时未选中 icon 的颜色| string| #EFF2F7 |
| icons| 图标组件 若传入数组，则需要传入 3 个元素，分别为 3 个部分所对应的类名；若传入对象，则可自定义分段，键名为分段的界限值，键值为对应的类名| object| [StarFilled, StarFilled, StarFilled] |
| void-icon| 未被选中的图标组件| string / Component| Star |
| disabled-void-icon| 禁用状态的未选择图标| string / Component| StarFilled |
| show-text| 是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容| boolean| false |
| show-score| 是否显示当前分数， show-score 和 show-text 不能同时为真| boolean| false |
| text-color| 辅助文字的颜色| string| #1F2D3D |
| texts| 辅助文字数组| array| ['Extremely bad', 'Disappointed', 'Fair', 'Satisfied', 'Surprise'] |
| score-template| 分数显示模板| string|  |
| clearable| 是否可以重置值为 0| boolean| false |
| id| 原生 id 属性| string| — |
| labela11y| 和 Rate 的 aria-label 属性保持一致| string| — |
#### 事件
| 事件名| 描述说明| 类型 |
| :--- | :--- | :--- |
| change| 分值改变时触发| Function |
#### 对外暴露的方法
| 名称| 描述| 类型 |
| :--- | :--- | :--- |
| setCurrentValue| 设置当前值| Function |
| resetCurrentValue| 重置当前值| Function |
`,
  "el-select": `#### [访问](https://element-plus.gitee.io/zh-CN/component/select.html)
#### Select 属性
| 属性名| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| model-value / v-model| 选中项绑定值| array / string / number / boolean / object| —| — |
| multiple| 是否多选| boolean| true/false| false |
| disabled| 是否禁用| boolean| true / false| false |
| value-key| 作为 value 唯一标识的键名，绑定值为对象类型时必填| string| —| value |
| size| 输入框尺寸| string| large/default/small| default |
| clearable| 是否可以清空选项| boolean| true / false| false |
| collapse-tags| 多选时是否将选中值按文字的形式展示| boolean| true/false| false |
| collapse-tags-tooltip| 当鼠标悬停于折叠标签的文本时，是否显示所有选中的标签。 要使用此属性，collapse-tags属性必须设定为 true| boolean| true / false| false |
| multiple-limit| multiple 属性设置为 true 时，代表多选场景下用户最多可以选择的项目数， 为 0 则不限制| number| —| 0 |
| name| Select 输入框的原生 name 属性| string| —| — |
| effect| Tooltip 主题，内置了 dark / light 两种| string| string| light |
| autocomplete| Select 输入框的原生 autocomplete 属性| string| —| off |
| placeholder| 占位文字| string| —| Select |
| filterable| Select 组件是否可筛选| boolean| true / false| false |
| allow-create| 是否允许用户创建新条目， 只有当 filterable 设置为 true 时才会生效。| boolean| true/false| false |
| filter-method| 自定义筛选方法| function| —| — |
| remote| 其中的选项是否从服务器远程加载| boolean| true / false| false |
| remote-method| 自定义远程搜索方法| function| —| — |
| remote-show-suffix| 远程搜索方法显示后缀图标| boolean| true / false| false |
| loading| 是否正在从远程获取数据| boolean| true / false| false |
| loading-text| 从服务器加载内容时显示的文本| string| —| Loading |
| no-match-text| 搜索条件无匹配时显示的文字，也可以使用 empty 插槽设置| string| —| No matching data |
| no-data-text| 无选项时显示的文字，也可以使用 empty 插槽设置自定义内容| string| —| No data |
| popper-class| 选择器下拉菜单的自定义类名| string| —| — |
| reserve-keyword| 当 multiple 和 filter被设置为 true 时，是否在选中一个选项后保留当前的搜索关键词| boolean| true / false| true |
| default-first-option| 是否在输入框按下回车时，选择第一个匹配项。 需配合 filterable 或 remote 使用| boolean| true / false| false |
| popper-append-to-body(已废弃)| 是否将弹出框插入至 body 元素 当弹出框的位置出现问题时，你可以尝试将该属性设置为false。| boolean| true / false| true |
| teleported| 该下拉菜单是否使用teleport插入body元素| boolean| true / false| true |
| persistent| 当下拉选择器未被激活并且persistent设置为false，选择器会被删除。| boolean| true / false| true |
| automatic-dropdown| 对于不可过滤的 Select 组件，此属性决定是否在输入框获得焦点后自动弹出选项菜单| boolean| true / false| false |
| clear-icon| 自定义清除图标| string | Component| —| CircleClose |
| fit-input-width| 下拉框的宽度是否与输入框相同| boolean| true / false| false |
| suffix-icon| 自定义后缀图标组件| string | Component| —| ArrowDown |
| suffix-transitiondeprecated| 下拉菜单显示/消失时后缀图标的动画| boolean| true / false| true |
| tag-type| 标签类型| string| success/info/warning/danger| info |
| validate-event| 是否触发表单验证| boolean| true / false| true |
| placement| 下拉框出现的位置| string| top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end| bottom-start |
#### Select 事件
| 事件名| 说明| 回调参数 |
| :--- | :--- | :--- |
| change| 选中值发生变化时触发| val，目前的选中值 |
| visible-change| 下拉框出现/隐藏时触发| val，出现则为 true，隐藏则为 false |
| remove-tag| 多选模式下移除tag时触发| val，移除的tag值 |
| clear| 可清空的单选模式下用户点击清空按钮时触发| — |
| blur| 当 input 失去焦点时触发| (event: FocusEvent) |
| focus| 当 input 获得焦点时触发| (event: FocusEvent) |
#### Select 插槽
| 插槽名| 说明| 子标签 |
| :--- | :--- | :--- |
| —| Option 组件列表| Option Group / Option |
| prefix| Select 组件头部内容| — |
| empty| 无选项时的列表| — |
#### Option Group 属性
| 属性名| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| label| 分组的组名| string| —| — |
| disabled| 是否将该分组下所有选项置为禁用| boolean| —| false |
#### Option Group 插槽
| 插槽名| 说明| 子标签 |
| :--- | :--- | :--- |
| -| 自定义默认内容| Option |
#### Option 属性
| 属性名| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| value| 选项的值| string / number / boolean / object| —| — |
| label| 选项的标签，若不设置则默认与value相同| string/number| —| — |
| disabled| 是否禁用该选项| boolean| —| false |
#### Option 插槽
| 插槽名| 说明 |
| :--- | :--- |
| —| 默认插槽 |
#### Select 方法
| 方法名| 说明| 参数 |
| :--- | :--- | :--- |
| focus| 使选择器的输入框获取焦点| - |
| blur| 使选择器的输入框失去焦点，并隐藏下拉框| - |
`,
  "el-slider": `#### [访问](https://element-plus.gitee.io/zh-CN/component/slider.html)
#### 属性
| 属性名| 描述| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| model-value / v-model| 选中项绑定值| number| —| 0 |
| min| 最小值| number| —| 0 |
| max| 最大值| number| —| 100 |
| disabled| 是否禁用| boolean| —| false |
| step| 步长| number| —| 1 |
| show-input| 是否显示输入框，仅在非范围选择时有效| boolean| —| false |
| show-input-controls| 在显示输入框的情况下，是否显示输入框的控制按钮| boolean| —| true |
| size| slider 包装器的大小，垂直模式下该属性不可用| string| large / default / small| default |
| input-size| 输入框的大小，如果设置了 size 属性，默认值自动取 size| string| large / default / small| default |
| show-stops| 是否显示间断点| boolean| —| false |
| show-tooltip| 是否显示提示信息| boolean| —| true |
| format-tooltip| 格式化提示信息| function(value)| —| — |
| range| 是否开启选择范围| boolean| —| false |
| vertical| 垂直模式| boolean| —| false |
| height| 滑块高度，垂直模式必填| string| —| — |
| label| 屏幕阅读器标签| string| —| — |
| range-start-label| 当 range 为true时，屏幕阅读器标签开始的标记| string| —| — |
| range-end-label| 当 range 为true时，屏幕阅读器标签结尾的标记| string| —| — |
| format-value-text| 显示屏幕阅读器的 aria-valuenow 属性的格式| function(value)| —| — |
| debounce| 输入时的去抖延迟，毫秒，仅在 show-input 等于 true 时有效| number| —| 300 |
| tooltip-class| tooltip 的自定义类名| string| —| — |
| placement| Tooltip 出现的位置| string| top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end| top |
| marks| 标记， key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标记可以单独设置样式| object| —| — |
| validate-event| 输入时是否触发表单的校验| boolean| -| true |
#### 事件
| 事件名| 说明| 参数 |
| :--- | :--- | :--- |
| change| 值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发）| val，新状态的值 |
| input| 数据改变时触发（使用鼠标拖曳时，活动过程实时触发）| val，改变后的值 |
`,
"el-time-picker": `#### [访问](https://element-plus.gitee.io/zh-CN/component/datetime-picker.html)
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
  "el-date-picker": `#### [访问](https://element-plus.gitee.io/zh-CN/component/date-picker.html)
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
  "el-datetime-picker": `#### [访问](https://element-plus.gitee.io/zh-CN/component/datetime-picker.html)
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
  "el-switch": `#### [访问](https://element-plus.gitee.io/zh-CN/component/switch.html)
#### 属性
| 属性名| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| model-value / v-model| 绑定值，必须等于 active-value 或 inactive-value，默认为 Boolean 类型| boolean / string / number| —| — |
| disabled| 是否禁用| boolean| —| false |
| loading| 是否显示加载中| boolean| —| false |
| size| switch 的大小| string| large / default / small| default |
| width| switch 的宽度| number / string| —| — |
| inline-prompt| 无论图标或文本是否显示在点内，只会呈现文本的第一个字符| boolean| —| false |
| active-icon| switch 状态为 on 时所显示图标，设置此项会忽略 active-text| string | Component| —| — |
| inactive-icon| switch 状态为 off 时所显示图标，设置此项会忽略 inactive-text| string | Component| —| — |
| active-text| switch 打开时的文字描述| string| —| — |
| inactive-text| switch 的状态为 off 时的文字描述| string| —| — |
| active-value| switch 状态为 on 时的值| boolean / string / number| —| true |
| inactive-value| switch的状态为 off 时的值| boolean / string / number| —| false |
| active-color| 当在 on 状态时的背景颜色(已废弃，请使用 CSS var --el-switch-on-color )| string| —| — |
| inactive-color| off 状态时的背景颜色(已废弃，使用 CSS var --el-switch-of-color )| string| —| — |
| border-color| 开关的边框颜色 ( 已废弃，使用 CSS var --el-switch-border-color )| string| —| — |
| name| switch 对应的 name 属性| string| —| — |
| validate-event| 改变 switch 状态时是否触发表单的校验| boolean| —| true |
| before-change| switch 状态改变前的钩子， 返回 false 或者返回 Promise 且被 reject 则停止切换| () => Promise<boolean> | boolean| —| — |
#### 事件
| 事件名| 说明| 回调参数 |
| :--- | :--- | :--- |
| change| switch 状态发生变化时的回调函数| val，新状态的值 |
#### 方法
| 方法| 说明| 参数 |
| :--- | :--- | :--- |
| focus| 使 Switch 获取焦点| — |
`,
  "el-transfer": `#### [访问](https://element-plus.gitee.io/zh-CN/component/transfer.html)
#### 数据项属性别名
#### 属性
| 属性名| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| model-value / v-model| 选中项绑定值| array| —| — |
| data| Transfer 的数据源| Array<{ key, label, disabled }>| —| [ ] |
| filterable| 是否可搜索| boolean| —| false |
| filter-placeholder| 搜索框占位符| string| —| Enter keyword |
| filter-method| 自定义搜索方法| function| —| — |
| target-order| 右侧列表元素的排序策略： 若为 original，则保持与数据源相同的顺序； 若为 push，则新加入的元素排在最后； 若为 unshift，则新加入的元素排在最前| string| original / push / unshift| original |
| titles| 自定义列表标题| array| —| ['List 1', 'List 2'] |
| button-texts| 自定义按钮文案| array| —| [ ] |
| render-content| 自定义数据项渲染函数| function(h, option)| —| — |
| format| 列表顶部勾选状态文案| { noChecked, hasChecked }| —| { noChecked: '\${checked}/\${total}', hasChecked: '\${checked}/\${total}' } |
| props| 数据源的字段别名| { key, label, disabled }| —| — |
| left-default-checked| 初始状态下左侧列表的已勾选项的 key 数组| array| —| [ ] |
| right-default-checked| 初始状态下右侧列表的已勾选项的 key 数组| array| —| [ ] |
| validate-event| 是否触发表单验证| boolean| -| true |
#### 插槽
| 插槽名| 说明 |
| :--- | :--- |
| —| 自定义数据项的内容， 参数为 { option } |
| left-footer| 左侧列表底部的内容 |
| right-footer| 右侧列表底部的内容 |
#### 方法
| 方法名| 说明| 参数 |
| :--- | :--- | :--- |
| clearQuery| 清空某个面板的搜索关键词| 'left' / 'right' |
#### 事件
| 事件名| 说明| 回调参数 |
| :--- | :--- | :--- |
| change| 右侧列表元素变化时触发| 当前值、数据移动的方向（'left' / 'right'）、发生移动的数据 key 数组 |
| left-check-change| 左侧列表元素被用户选中 / 取消选中时触发| 当前被选中的元素的 key 数组、选中状态发生变化的元素的 key 数组 |
| right-check-change| 右侧列表元素被用户选中 / 取消选中时触发| 当前被选中的元素的 key 数组、选中状态发生变化的元素的 key 数组 |
`,
  "el-upload": `#### [访问](https://element-plus.gitee.io/zh-CN/component/upload.html)
#### 属性
| 名称| 描述| 类型| 默认值| 必填 |
| :--- | :--- | :--- | :--- | :--- |
| action| 请求 URL| string| —| 是 |
| headers| 设置上传的请求头部| Headers | Record<string, any>| —| 否 |
| method| 设置上传请求方法| string| 'post'| 否 |
| multiple| 是否支持多选文件| boolean| false| 否 |
| data| 上传时附带的额外参数| Record<string, any>| —| 否 |
| name| 上传的文件字段名| string| 'file'| 否 |
| with-credentials| 支持发送 cookie 凭证信息| boolean| false| 否 |
| show-file-list| 是否显示已上传文件列表| boolean| true| 否 |
| drag| 是否启用拖拽上传| boolean| false| 否 |
| accept| 接受上传的文件类型（thumbnail-mode 模式下此参数无效）| string| —| 否 |
| on-preview| 点击文件列表中已上传的文件时的钩子| (uploadFile: UploadFile) => void| —| 否 |
| on-remove| 文件列表移除文件时的钩子| (uploadFile: UploadFile, uploadFiles: UploadFiles) => void| —| 否 |
| on-success| 文件上传成功时的钩子| (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void| —| 否 |
| on-error| 文件上传失败时的钩子| (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void| —| 否 |
| on-progress| 文件上传时的钩子| (evt: UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void| —| 否 |
| on-change| 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用| (uploadFile: UploadFile, uploadFiles: UploadFiles) => void| —| 否 |
| on-exceed| 当超出限制时，执行的钩子函数| (files: File[], uploadFiles: UploadUserFile[]) => void| —| 否 |
| before-upload| 上传文件之前的钩子，参数为上传的文件， 若返回false或者返回 Promise 且被 reject，则停止上传。| (rawFile: UploadRawFile) => Awaitable<void | undefined | null | boolean | File | Blob>| —| 否 |
| before-remove| 删除文件之前的钩子，参数为上传的文件和文件列表， 若返回 false 或者返回 Promise 且被 reject，则停止删除。| (uploadFile: UploadFile, uploadFiles: UploadFiles) => Awaitable<boolean>| —| 否 |
| file-list / v-model:file-list| 默认上传文件| UploadUserFile[]| []| 否 |
| list-type| 文件列表的类型| 'text' | 'picture' | 'picture-card'| 'text'| 否 |
| auto-upload| 是否自动上传文件| boolean| true| 否 |
| http-request| 覆盖默认的 Xhr 行为，允许自行实现上传文件的请求| (options: UploadRequestOptions) => XMLHttpRequest | Promise<unknown>| —| 否 |
| disabled| 是否禁用上传| boolean| false| 否 |
| limit| 允许上传文件的最大数量| number| —| 否 |
#### 插槽
| 名称| 描述| 类型 |
| :--- | :--- | :--- |
| default| 自定义默认内容| - |
| trigger| 触发文件选择框的内容| - |
| tip| 提示说明文字| - |
| file| 缩略图模板的内容| { file: UploadFile } |
#### 外部方法
| 名称| 描述| 类型 |
| :--- | :--- | :--- |
| abort| 取消上传请求| (file: UploadFile) => void |
| submit| 手动上传文件列表| () => void |
| clearFiles| 清空已上传的文件列表（该方法不支持在 before-upload 中调用）| (status?: Array<"ready" | "uploading" | "success" | "fail">) => void |
| handleStart| 手动选择文件| (rawFile: UploadRawFile) => void |
| handleRemove| 手动移除文件。 file 和rawFile 已被合并。 rawFile 将在 v2.2.0 中移除| (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile) => void |
`,
  "el-avatar": `#### [访问](https://element-plus.gitee.io/zh-CN/component/avatar.html)
`,
  "el-badge": `#### [访问](https://element-plus.gitee.io/zh-CN/component/badge.html)
#### 属性
| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| value| 显示值| string / number| '' |
| max| 最大值，超过最大值会显示 {max}+。 只有当 value 是数字类型时起作用。| number| 99 |
| is-dot| 是否显示小圆点。| boolean| false |
| hidden| 是否隐藏 Badge。| boolean| false |
| type| badge type.| enum| danger |
#### 插槽
| 插槽名| 说明 |
| :--- | :--- |
| default| 自定义默认内容 |
`,
  "el-calendar": `#### [访问](https://element-plus.gitee.io/zh-CN/component/calendar.html)
#### 属性
| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| model-value / v-model| 选中项绑定值| Date| — |
| range| 时间范围，包括开始时间与结束时间。 开始时间必须是周起始日，结束时间必须是周结束日，且时间跨度不能超过两个月。| array| — |
#### 插槽
| 插槽名| 说明| 类型 |
| :--- | :--- | :--- |
| date-cell| type 表示该日期的所属月份，可选值有 prev-month、current-month 和 next-month；isSelected 标明该日期是否被选中；day 是格式化的日期，格式为 yyyy-MM-dd；date 是单元格的日期| object |
| header| 卡片标题内容| object |
`,
  "el-card": `#### [访问](https://element-plus.gitee.io/zh-CN/component/card.html)
`,
  "el-carousel": `#### [访问](https://element-plus.gitee.io/zh-CN/component/carousel.html)
#### Carousel 属性
| 属性名| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| height| carousel 的高度| string| —| — |
| initial-index| 初始状态激活的幻灯片的索引，从 0 开始| number| —| 0 |
| trigger| 指示器的触发方式| string| hover/click| hover |
| autoplay| 是否自动切换| boolean| —| true |
| interval| 自动切换的时间间隔，单位为毫秒| number| —| 3000 |
| indicator-position| 指示器的位置| string| outside/none| — |
| arrow| 切换箭头的显示时机| string| always/hover/never| hover |
| type| carousel 的类型| string| card| — |
| loop| 是否循环显示| boolean| -| true |
| direction| 展示的方向| string| horizontal/vertical| horizontal |
| pause-on-hover| 鼠标悬浮时暂停自动切换| boolean| -| true |
#### Carousel 事件
| 事件名| 说明| 回调参数 |
| :--- | :--- | :--- |
| change| 幻灯片切换时触发| 目前激活的幻灯片的索引，原幻灯片的索引 |
#### Carousel 方法
| 方法名| 说明| 参数 |
| :--- | :--- | :--- |
| setActiveItem| 手动切换幻灯片| 需要切换的幻灯片的索引，从 0 开始；或相应 el-carousel-item 的 name 属性值 |
| prev| 切换至上一张幻灯片| — |
| next| 切换至下一张幻灯片| — |
#### Carousel 插槽
| 插槽名| 说明| 子标签 |
| :--- | :--- | :--- |
| -| 自定义默认内容| Carousel-Item |
#### Carousel-Item 属性
| 属性名| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| name| 幻灯片的名字，可用作 setActiveItem 的参数| string| —| — |
| label| 该幻灯片所对应指示器的文本| string| —| — |
#### Carousel-Item 插槽
| 插槽名| 说明 |
| :--- | :--- |
| —| 自定义默认内容 |
`,
  "el-collapse": `#### [访问](https://element-plus.gitee.io/zh-CN/component/collapse.html)
#### Collapse 属性
| 属性名| 详情| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| model-value / v-model| 当前激活的面板(如果是手风琴模式，绑定值类型需要为string，否则为array)| string (accordion mode) / array (non-accordion mode)| —| — |
| accordion| 是否手风琴模式| boolean| —| false |
#### Collapse 事件
| 事件名| 说明| 回调参数 |
| :--- | :--- | :--- |
| change| 当前激活面板改变时触发(如果是手风琴模式，参数 activeNames 类型为string，否则为array)| (activeNames: array (non-accordion mode) / string (accordion mode)) |
#### Collapse 插槽
| 插槽名| Description| 子标签 |
| :--- | :--- | :--- |
| -| 自定义默认内容| Collapse Item |
#### Collapse Item 属性
| 属性名| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| name| 唯一标志符| string/number| —| — |
| title| 面板标题| string| —| — |
| disabled| 是否禁用| boolean| —| — |
#### Collapse Item 插槽
| 插槽名| 说明 |
| :--- | :--- |
| —| content of Collapse Item |
| title| content of Collapse Item title |
`,
  "el-descriptions": `#### [访问](https://element-plus.gitee.io/zh-CN/component/descriptions.html)
#### Descriptions 属性
| 属性名| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| border| 是否带有边框| boolean| —| false |
| column| 一行 Descriptions Item 的数量| number| —| 3 |
| direction| 排列的方向| string| vertical / horizontal| horizontal |
| size| 列表的尺寸| string| large / default / small| default |
| title| 标题文本，显示在左上方| string| —| — |
| extra| 操作区文本，显示在右上方| string| —| — |
#### Descriptions 插槽
| 插槽名| 说明| 子标签 |
| :--- | :--- | :--- |
| —| 自定义默认内容| Descriptions Item |
| title| 自定义标题，显示在左上方| — |
| extra| 自定义操作区，显示在右上方| — |
#### Descriptions Item 属性
| 属性名| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| label| 标签文本| string| —| — |
| span| 列的数量| number| —| 1 |
| width| 列的宽度，不同行相同列的宽度按最大值设定（如无 border ，宽度包含标签与内容）| string / number| —| — |
| min-width| 列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列（如无 border，宽度包含标签与内容）| string / number| —| — |
| align| 列的内容对齐方式（如无 border，对标签和内容均生效）| string| left / center / right| left |
| label-align| 列的标签对齐方式，若不设置该项，则使用内容的对齐方式（如无 border，请使用 align 参数）| string| left / center / right| — |
| class-name| 列的内容自定义类名| string| —| — |
| label-class-name| column label custom class name| string| —| — |
#### Descriptions Item 插槽
| 插槽名| 说明 |
| :--- | :--- |
| —| 自定义默认内容 |
| label| 自定义标签 |
`,
  "el-empty": `#### [访问](https://element-plus.gitee.io/zh-CN/component/empty.html)
#### Empty 属性
| 属性名| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| image| 图片地址| string| —| — |
| image-size| 图片大小（宽度）| number| —| — |
| description| 描述| string| —| — |
#### Empty 插槽
| 插槽名| 描述说明 |
| :--- | :--- |
| default| 自定义底部内容 |
| image| 自定义图片 |
| description| 自定义描述 |
`,
  "el-image": `#### [访问](https://element-plus.gitee.io/zh-CN/component/image.html)
#### Image 属性
| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| src| 图片源地址，同原生属性一致| string| — |
| fit| 确定图片如何适应容器框，同原生 object-fit| 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'| — |
| hide-on-click-modal| 当开启 preview 功能时，是否可以通过点击遮罩层关闭 preview| boolean| false |
| loading2.2.3| 浏览器加载图像的策略，和 浏览器原生能力一致| 'eager' | 'lazy'| — |
| lazy| 是否使用懒加载| boolean| false |
| scroll-container| 开启懒加载功能后，监听 scroll 事件的容器| string | HTMLElement| 最近一个 overflow 值为 auto 或 scroll 的父元素 |
| alt| 原生属性 alt| string| — |
| referrer-policy| 原生属性 referrerPolicy| string| — |
| preview-src-list| 开启图片预览功能| string[]| — |
| z-index| 设置图片预览的 z-index| number| — |
| initial-index| 初始预览图像索引，小于 url-list 的长度| number| 0 |
| close-on-press-escape| 是否可以通过按下 ESC 关闭 Image Viewer| boolean| true |
| preview-teleported| image-viewer 是否插入至 body 元素上。 嵌套的父元素属性会发生修改时应该将此属性设置为 true| boolean| false |
#### Image 事件
| 事件名| 说明| 类型 |
| :--- | :--- | :--- |
| load| 图片加载成功触发| (e: Event) => void |
| error| 图片加载失败触发| (e: Error) => void |
| switch| 切换图像时触发。| (index: number) => void |
| close| 当点击 X 按钮或者在hide-on-click-modal为 true 时点击遮罩层时触发| () => void |
#### Image 插槽
| 插槽名| 说明 |
| :--- | :--- |
| placeholder| 当图像尚未加载时，自定义的占位符内容 |
| error| 自定义图像加载失败的内容 |
| viewer| 图片描述内容 |
#### Image Viewer API
#### ImageViewer 属性
| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| url-list| 用于预览的图片链接列表| string[]| [] |
| z-index| 预览时遮罩层的 z-index| number | string| — |
| initial-index| 初始预览图像索引，小于 url-list 的长度| number| 0 |
| infinite| 是否可以无限循环预览| boolean| true |
| hide-on-click-modal| 是否可以通过点击遮罩层关闭预览| boolean| false |
| teleported| image 自身是否插入至 body 元素上。 嵌套的父元素属性会发生修改时应该将此属性设置为 true| boolean| false |
| zoom-rate| 缩放事件的缩放速度| number| 1.2 |
#### ImageViewer 事件
| 事件名| 说明| 类型 |
| :--- | :--- | :--- |
| close| 当点击 X 按钮或者在hide-on-click-modal为 true 时点击遮罩层时触发| () => void |
| switch| 切换图像时触发。| (index: number) => void |
#### Image Viewer 方法
| 方法名| 说明| 参数 |
| :--- | :--- | :--- |
| setActiveItem| 手动切换图片| 需要切换的图片的索引，从 0 开始 |
`,
  "el-pagination": `#### [访问](https://element-plus.gitee.io/zh-CN/component/pagination.html)
#### 属性
| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| small| 是否使用小型分页样式| boolean| false |
| background| 是否为分页按钮添加背景色| boolean| false |
| page-size / v-model:page-size| 每页显示条目个数| number| 10 |
| default-page-size| 每页显示条目数的初始值| number| - |
| total| 总条目数| number| — |
| page-count| 总页数， total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-sizes 的更改，则需要使用 total 属性| number| — |
| pager-count| 设置最大页码按钮数。 页码按钮的数量，当总页数超过该值时会折叠| number| 7 |
| current-page / v-model:current-page| 当前页数| number| 1 |
| default-current-page| 当前页数的初始值| number| - |
| layout| 组件布局，子组件名用逗号分隔| string| prev, pager, next, jumper, ->, total |
| page-sizes| 每页显示个数选择器的选项设置| array| [10, 20, 30, 40, 50, 100] |
| popper-class| 每页显示个数选择器的下拉框类名| string| — |
| prev-text| 替代图标显示的上一页文字| string| — |
| prev-icon| 上一页的图标， 比 prev-text 优先级更高| string / Component| ArrowLeft |
| next-text| 替代图标显示的下一页文字| string| — |
| next-icon| 下一页的图标， 比 next-text 优先级更高| string / Component| ArrowRight |
| disabled| 是否禁用分页| boolean| false |
| hide-on-single-page| 只有一页时是否隐藏| boolean| - |
#### 事件
| 事件名| 说明| 类型 |
| :--- | :--- | :--- |
| size-change| page-size 改变时触发| Function |
| current-change| current-page 改变时触发| Function |
| prev-click| 用户点击上一页按钮改变当前页时触发| Function |
| next-click| 用户点击下一页按钮改变当前页时触发| Function |
#### 插槽
| 名称| 说明 |
| :--- | :--- |
| default| 自定义内容 设置文案，需要在 layout 中列出 slot |
`,
  "el-progress": `#### [访问](https://element-plus.gitee.io/zh-CN/component/progress.html)
#### Progress 属性
| 属性名| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| percentage| 百分比，必填| number| (0-100)| 0 |
| type| 进度条类型| string| line/circle/dashboard| line |
| stroke-width| 进度条的宽度| number| —| 6 |
| text-inside| 进度条显示文字内置在进度条内（仅 type 为 'line' 时可用）| boolean| —| false |
| status| 进度条当前状态| string| success/exception/warning| — |
| indeterminate| 是否为动画进度条| boolean| -| false |
| duration| 控制动画进度条速度| number| -| 3 |
| color| 进度条背景色 进度条背景色 （会覆盖 status 状态颜色）| string/function/array| —| '' |
| width| 环形进度条画布宽度（只在 type 为 circle 或 dashboard 时可用）| number| —| 126 |
| show-text| 是否显示进度条文字内容| boolean| —| true |
| stroke-linecap| circle/dashboard 类型路径两端的形状| string| butt/round/square| round |
| format| 指定进度条文字内容| function(percentage)| —| — |
#### Progress 插槽
| 名称| 说明 |
| :--- | :--- |
| default| 自定义内容，参数为 { percentage } |
`,
  "el-result": `#### [访问](https://element-plus.gitee.io/zh-CN/component/result.html)
#### Result 属性
| 属性名| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| title| 标题| string| —| — |
| sub-title| 二级标题| string| —| — |
| icon| 图标类型| string| success / warning / info / error| info |
#### Result 插槽
| 名称| 说明 |
| :--- | :--- |
| icon| 自定义图标 |
| title| 自定义标题 |
| sub-title| 自定义二级标题 |
| extra| 自定义底部额外区域 |
`,
  "el-skeleton": `#### [访问](https://element-plus.gitee.io/zh-CN/component/skeleton.html)
#### Skeleton 属性
| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| animated| 是否使用动画| boolean| false |
| count| 渲染多少个 template, 建议使用尽可能小的数字| number| 1 |
| loading| 是否显示加载结束后的 DOM 结构| boolean| false |
| rows| 骨架屏段落数量| number| 3 |
| throttle| 渲染延迟（以毫秒为单位）| number| 0 |
#### Skeleton 插槽
| 插槽名| 说明| 作用域 |
| :--- | :--- | :--- |
| default| 正在渲染的DOM| $attrs |
| template| 自定义渲染 skeleton 模板| { key: number } |
#### Skeleton Item API
#### Skeleton Item 属性
| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| variant| 当前渲染 skeleton 类型| 'p' | 'text' | 'h1' | 'h3' | 'caption' | 'button' | 'image' | 'circle' | 'rect'| 'text' |
`,
  "el-table": `#### [访问](https://element-plus.gitee.io/zh-CN/component/table.html)
#### Table 属性
| 属性名| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| data| 显示的数据| array| —| — |
| height| Table 的高度， 默认为自动高度。 如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。| string / number| —| — |
| max-height| Table 的最大高度。 合法的值为数字或者单位为 px 的高度。| string / number| —| — |
| stripe| 是否为斑马纹 table| boolean| —| false |
| border| 是否带有纵向边框| boolean| —| false |
| size| Table 的尺寸| string| large / default /small| — |
| fit| 列的宽度是否自撑开| boolean| —| true |
| show-header| 是否显示表头| boolean| —| true |
| highlight-current-row| 是否要高亮当前行| boolean| —| false |
| current-row-key| 当前行的 key，只写属性| string / number| —| — |
| row-class-name| 行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。| function({ row, rowIndex }) / string| —| — |
| row-style| 行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。| function({ row, rowIndex }) / object| —| — |
| cell-class-name| 单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。| function({ row, column, rowIndex, columnIndex }) / string| —| — |
| cell-style| 单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。| function({ row, column, rowIndex, columnIndex }) / object| —| — |
| header-row-class-name| 表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。| function({ row, rowIndex }) / string| —| — |
| header-row-style| 表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。| function({ row, rowIndex }) / object| —| — |
| header-cell-class-name| 表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className。| function({ row, column, rowIndex, columnIndex }) / string| —| — |
| header-cell-style| 表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。| function({ row, column, rowIndex, columnIndex }) / object| —| — |
| row-key| 行数据的 Key，用来优化 Table 的渲染； 在使用reserve-selection功能与显示树形数据时，该属性是必填的。 类型为 String 时，支持多层访问：user.info.id，但不支持 user.info[0].id，此种情况请使用 Function。| function(row) / string| —| — |
| empty-text| 空数据时显示的文本内容， 也可以通过 #empty 设置| string| —| No Data |
| default-expand-all| 是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效| boolean| —| false |
| expand-row-keys| 可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组。| array| —| — |
| default-sort| 默认的排序列的 prop 和顺序。 它的 prop 属性指定默认的排序的列，order 指定默认排序的顺序| object| (order: 'ascending' 'descending')| 如果只指定了 prop, 没有指定 order, 则默认顺序是 ascending |
| tooltip-effect| 溢出的 tooltip 的 effect| string| dark / light| dark |
| tooltip-options2.2.28| 溢出 tooltip 的选项，参见下述 tooltip 组件| object| 请参考 tooltip| object |
| show-summary| 是否在表尾显示合计行| boolean| —| false |
| sum-text| 显示摘要行第一列的文本| string| —| Sum |
| summary-method| 自定义的合计计算方法| function({ columns, data })| —| — |
| span-method| 合并行或列的计算方法| function({ row, column, rowIndex, columnIndex })| —| — |
| select-on-indeterminate| 在多选表格中，当仅有部分行被选中时，点击表头的多选框时的行为。 若为 true，则选中所有行；若为 false，则取消选择所有行| boolean| —| true |
| indent| 展示树形数据时，树节点的缩进| number| —| 16 |
| lazy| 是否懒加载子节点数据| boolean| —| — |
| load| 加载子节点数据的函数，lazy 为 true 时生效| function(row, treeNode, resolve)| —| — |
| tree-props| 渲染嵌套数据的配置选项| object| —| { hasChildren: 'hasChildren', children: 'children' } |
| table-layout| 设置表格单元、行和列的布局方式| string| fixed / auto| fixed |
| scrollbar-always-on| 总是显示滚动条| boolean| —| false |
| flexible2.2.1| 确保主轴的最小尺寸| boolean| —| false |
#### Table 事件
| 事件名| 说明| 回调参数 |
| :--- | :--- | :--- |
| select| 当用户手动勾选数据行的 Checkbox 时触发的事件| selection, row |
| select-all| 当用户手动勾选全选 Checkbox 时触发的事件| selection |
| selection-change| 当选择项发生变化时会触发该事件| selection |
| cell-mouse-enter| 当单元格 hover 进入时会触发该事件| row, column, cell, event |
| cell-mouse-leave| 当单元格 hover 退出时会触发该事件| row, column, cell, event |
| cell-click| 当某个单元格被点击时会触发该事件| row, column, cell, event |
| cell-dblclick| 当某个单元格被双击击时会触发该事件| row, column, cell, event |
| cell-contextmenu| 当某个单元格被鼠标右键点击时会触发该事件| row, column, cell, event |
| row-click| 当某一行被点击时会触发该事件| row, column, event |
| row-contextmenu| 当某一行被鼠标右键点击时会触发该事件| row, column, event |
| row-dblclick| 当某一行被双击时会触发该事件| row, column, event |
| header-click| 当某一列的表头被点击时会触发该事件| column, event |
| header-contextmenu| 当某一列的表头被鼠标右键点击时触发该事件| column, event |
| sort-change| 当表格的排序条件发生变化的时候会触发该事件| { column, prop, order } |
| filter-change| column 的 key， 如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件| filters |
| current-change| 当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性| currentRow, oldCurrentRow |
| header-dragend| 当拖动表头改变了列的宽度的时候会触发该事件| newWidth, oldWidth, column, event |
| expand-change| 当用户对某一行展开或者关闭的时候会触发该事件（展开行时，回调的第二个参数为 expandedRows；树形表格时第二参数为 expanded）| row, (expandedRows | expanded) |
#### Table 方法
| 方法名| 说明| 参数 |
| :--- | :--- | :--- |
| clearSelection| 用于多选表格，清空用户的选择| — |
| getSelectionRows| 返回当前选中的行|  |
| toggleRowSelection| 用于多选表格，切换某一行的选中状态， 如果使用了第二个参数，则可直接设置这一行选中与否| row, selected |
| toggleAllSelection| 用于多选表格，切换全选和全不选| — |
| toggleRowExpansion| 用于可扩展的表格或树表格，如果某行被扩展，则切换。 使用第二个参数，您可以直接设置该行应该被扩展或折叠。| row, expanded |
| setCurrentRow| 用于单选表格，设定某一行为选中行， 如果调用时不加参数，则会取消目前高亮行的选中状态。| row |
| clearSort| 用于清空排序条件，数据会恢复成未排序的状态| — |
| clearFilter| 传入由columnKey 组成的数组以清除指定列的过滤条件。 如果没有参数，清除所有过滤器| columnKeys |
| doLayout| 对 Table 进行重新布局。 当表格可见性变化时，您可能需要调用此方法以获得正确的布局| — |
| sort| 手动排序表格。 参数 prop 属性指定排序列，order 指定排序顺序。| prop: string, order: string |
| scrollTo| 滚动到一组特定坐标| (options: ScrollToOptions | number, yCoord?: number) |
| setScrollTop| 设置垂直滚动位置| top |
| setScrollLeft| 设置水平滚动位置| left |
#### Table 插槽
| 插槽名| 说明| 子标签 |
| :--- | :--- | :--- |
| -| 自定义默认内容| Table-column |
| append| 插入至表格最后一行之后的内容， 如果需要对表格的内容进行无限滚动操作，可能需要用到这个 slot。 若表格有合计行，该 slot 会位于合计行之上。| — |
| empty| 当数据为空时自定义的内容| — |
#### Table-column 属性
| 属性名| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| type| 对应列的类型。 如果设置了selection则显示多选框； 如果设置了 index 则显示该行的索引（从 1 开始计算）； 如果设置了 expand 则显示为一个可展开的按钮| string| selection / index / expand| — |
| index| 如果设置了 type=index，可以通过传递 index 属性来自定义索引| number / function(index)| —| — |
| label| 显示的标题| string| —| — |
| column-key| column 的 key， column 的 key， 如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件| string| —| — |
| prop| 字段名称 对应列内容的字段名， 也可以使用 property属性| string| —| — |
| width| 对应列的宽度| string / number| —| — |
| min-width| 对应列的最小宽度， 对应列的最小宽度， 与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列| string / number| —| — |
| fixed| 列是否固定在左侧或者右侧。 true 表示固定在左侧| string / boolean| true / 'left' / 'right'| — |
| render-header| 列标题 Label 区域渲染使用的 Function| function({ column, $index })| —| — |
| sortable| 对应列是否可以排序， 如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件| boolean / string| custom| false |
| sort-method| 指定数据按照哪个属性进行排序，仅当sortable设置为true的时候有效。 应该如同 Array.sort 那样返回一个 Number| function(a, b)| —| — |
| sort-by| 指定数据按照哪个属性进行排序，仅当 sortable 设置为 true 且没有设置 sort-method 的时候有效。 如果 sort-by 为数组，则先按照第 1 个属性排序，如果第 1 个相等，再按照第 2 个排序，以此类推| function(row, index) / string / array| —| — |
| sort-orders| 数据在排序时所使用排序策略的轮转顺序，仅当 sortable 为 true 时有效。 需传入一个数组，随着用户点击表头，该列依次按照数组中元素的顺序进行排序| array| 数组中的元素需为以下三者之一：ascending 表示升序，descending 表示降序，null 表示还原为原始顺序| ['ascending', 'descending', null] |
| resizable| 对应列是否可以通过拖动改变宽度（需要在 el-table 上设置 border 属性为真）| boolean| —| true |
| formatter| 用来格式化内容| function(row, column, cellValue, index)| —| — |
| show-overflow-tooltip| 当内容过长被隐藏时显示 tooltip| boolean \| object2.2.28| 参考表格的 tooltip-options |
| align| 对齐方式| string| left / center / right| left |
| header-align| 表头对齐方式， 若不设置该项，则使用表格的对齐方式| string| left / center / right| — |
| class-name| 列的 className| string| —| — |
| label-class-name| 当前列标题的自定义类名| string| —| — |
| selectable| 仅对 type=selection 的列有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选| function(row, index)| —| — |
| reserve-selection| 仅对  type=selection 的列有效， 请注意， 需指定 row-key 来让这个功能生效。| boolean| —| false |
| filters| 数据过滤的选项， 数组格式，数组中的元素需要有 text 和 value 属性。 数组中的每个元素都需要有 text 和 value 属性。| Array<{text: string, value: string}>| —| — |
| filter-placement| 过滤弹出框的定位| string| 与 Tooltip 的 placement 属性相同| — |
| filter-multiple| 数据过滤的选项是否多选| boolean| —| true |
| filter-method| 数据过滤使用的方法， 如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示。| function(value, row, column)| —| — |
| filtered-value| 选中的数据过滤项，如果需要自定义表头过滤的渲染方式，可能会需要此属性。| array| —| — |
#### Table-column 插槽
| 插槽名| 说明 |
| :--- | :--- |
| —| 自定义列的内容 作用域参数为 { row, column, $index } |
| header| 自定义表头的内容， 作用域参数为 { column, $index } |
#### 常见问题解答（FAQ）
`,
  "el-tag": `#### [访问](https://element-plus.gitee.io/zh-CN/component/tag.html)
#### Tag 属性
| 属性名| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| type| 类型| string| success/info/warning/danger| — |
| closable| 是否可关闭| boolean| —| false |
| disable-transitions| 是否禁用渐变动画| boolean| —| false |
| hit| 是否有边框描边| boolean| —| false |
| color| 背景色| string| —| — |
| size| 尺寸| string| large / default /small| default |
| effect| 主题| string| dark / light / plain| light |
| round| Tag 是否为圆形| boolean| —| false |
#### Tag 事件
| 事件名| 说明| 参数 |
| :--- | :--- | :--- |
| click| 点击 Tag 时触发的事件| — |
| close| 关闭 Tag 时触发的事件| — |
#### Tag 插槽
| 名称| 说明 |
| :--- | :--- |
| —| 自定义默认内容 |
#### CheckTag 属性
| 属性名| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| checked| 是否选中| boolean| true/false| — |
#### CheckTag 事件
| 事件名| 说明| 参数 |
| :--- | :--- | :--- |
| change| 点击 Check Tag 时触发的事件| checked |
#### CheckTag 插槽
| 名称| 说明 |
| :--- | :--- |
| —| 自定义默认内容 |
`,
  "el-timeline": `#### [访问](https://element-plus.gitee.io/zh-CN/component/timeline.html)
#### Timeline-Item 属性
| 属性名| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| timestamp| 时间戳| string| —| — |
| hide-timestamp| 是否隐藏时间戳| boolean| —| false |
| center| 是否垂直居中| boolean| —| false |
| placement| 时间戳位置| string| top / bottom| bottom |
| type| 节点类型| string| primary / success / warning / danger / info| — |
| color| 节点颜色| string| hsl / hsv / hex / rgb| — |
| size| 节点尺寸| string| normal / large| normal |
| icon| 自定义图标| string | Component| —| — |
| hollow| 是否空心点| boolean| —| false |
#### Timeline-Item 插槽
| 插槽名| 说明 |
| :--- | :--- |
| —| Timeline-Item 的内容 |
| dot| 自定义节点 |
`,
  "el-tree": `#### [访问](https://element-plus.gitee.io/zh-CN/component/tree.html)
#### 属性
| 属性名| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| data| 展示数据| array| —| — |
| empty-text| 内容为空的时候展示的文本| string| —| — |
| node-key| 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的| string| —| — |
| props| 配置选项，具体看下表| object| —| — |
| render-after-expand| 是否在第一次展开某个树节点后才渲染其子节点| boolean| —| true |
| load| 加载子树数据的方法，仅当 lazy 属性为true 时生效| function(node, resolve)，node为当前点击的节点，resolve为数据加载完成的回调(必须调用)| —| — |
| render-content| 树节点的内容区的渲染 Function| Function(h, { node, data, store })| —| — |
| highlight-current| 是否高亮当前选中节点，默认值是 false。| boolean| —| false |
| default-expand-all| 是否默认展开所有节点| boolean| —| false |
| expand-on-click-node| 是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点。| boolean| —| true |
| check-on-click-node| 是否在点击节点的时候选中节点，默认值为 false，即只有在点击复选框时才会选中节点。| boolean| —| false |
| auto-expand-parent| 展开子节点的时候是否自动展开父节点| boolean| —| true |
| default-expanded-keys| 默认展开的节点的 key 的数组| array| —| — |
| show-checkbox| 节点是否可被选择| boolean| —| false |
| check-strictly| 在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false| boolean| —| false |
| default-checked-keys| 默认勾选的节点的 key 的数组| array| —| — |
| current-node-key| 当前选中的节点| string / number| —| — |
| filter-node-method| 对树节点进行筛选时执行的方法， 返回 false 则表示这个节点会被隐藏| Function(value, data, node)| —| — |
| accordion| 是否每次只打开一个同级树节点展开| boolean| —| false |
| indent| 相邻级节点间的水平缩进，单位为像素| number| —| 18 |
| icon| 自定义树节点图标组件| string | Component| -| - |
| lazy| 是否懒加载子节点，需与 load 方法结合使用| boolean| —| false |
| draggable| 是否开启拖拽节点功能| boolean| —| false |
| allow-drag| 判断节点能否被拖拽 如果返回 false ，节点不能被拖动| Function(node)| —| — |
| allow-drop| 拖拽时判定目标节点能否成为拖动目标位置。 如果返回 false ，拖动节点不能被拖放到目标节点。 type 参数有三种情况：'prev'、'inner' 和 'next'，分别表示放置在目标节点前、插入至目标节点和放置在目标节点后| Function(draggingNode, dropNode, type)| —| — |
#### Props
| Props| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| label| 指定节点标签为节点对象的某个属性值| string, function(data, node)| —| — |
| children| 指定子树为节点对象的某个属性值| string| —| — |
| disabled| 指定节点选择框是否禁用为节点对象的某个属性值| string, function(data, node)| —| — |
| isLeaf| 指定节点是否为叶子节点，仅在指定了 lazy 属性的情况下生效| string, function(data, node)| —| — |
| class| 自定义节点类名| string, function(data, node)| —| — |
#### 方法
| 方法| 描述| 参数 |
| :--- | :--- | :--- |
| filter| 过滤所有树节点，过滤后的节点将被隐藏| 接收一个参数并指定为 filter-node-method 属性的第一个参数 |
| updateKeyChildren| 为节点设置新数据，只有当设置 node-key 属性的时候才可用| (key, data) 接收两个参数: 1. 节点的 key 2. 新数据 |
| getCheckedNodes| 如果节点可以被选中，(show-checkbox 为 true), 本方法将返回当前选中节点的数组| (leafOnly, includeHalfChecked) 接收两个布尔类型参数: 1. 默认值为 false. 若参数为 true, 它将返回当前选中节点的子节点 2. 默认值为 false. 如果参数为 true, 返回值包含半选中节点数据 |
| setCheckedNodes| 设置目前勾选的节点，使用此方法必须提前设置 node-key 属性| 要选中的节点构成的数组 |
| getCheckedKeys| 若节点可用被选中 (show-checkbox 为 true), 它将返回当前选中节点 key 的数组| (leafOnly) 接收一个布尔类型参数，默认为 false. 如果参数是 true, 它只返回当前选择的子节点数组。 |
| setCheckedKeys| 设置目前选中的节点，使用此方法必须设置 node-key 属性| (keys, leafOnly) 接收两个参数: 1. 一个需要被选中的多节点 key 的数组 2. 一个布尔类型参数，默认为 false. 如果参数是 true, 它只返回当前选择的子节点数组。 |
| setChecked| 设置节点是否被选中, 使用此方法必须设置 node-key 属性| (key/data, checked, deep) 接收三个参数: 1. 要选中的节点的 key 或者数据 2. 一个布尔类型参数表明是否选中. 3. 一个布尔类型参数表明是否递归选中子节点 |
| getHalfCheckedNodes| 如果节点可用被选中 (show-checkbox 为 true), 它将返回当前半选中的节点组成的数组| - |
| getHalfCheckedKeys| 若节点可被选中(show-checkbox 为 true)，则返回目前半选中的节点的 key 所组成的数组| - |
| getCurrentKey| 返回当前被选中节点的数据 (如果没有则返回 null)| — |
| getCurrentNode| 返回当前被选中节点的数据 (如果没有则返回 null)| — |
| setCurrentKey| 通过 key 设置某个节点的当前选中状态，使用此方法必须设置 node-key  属性| (key, shouldAutoExpandParent=true) 1. 待被选节点的 key， 如果为 null, 取消当前选中的节点 2. 是否自动展开父节点 |
| setCurrentNode| 设置节点为选中状态，使用此方法必须设置 node-key 属性| (node, shouldAutoExpandParent=true) 1. 待被选中的节点 2. 是否展开父节点 |
| getNode| 根据 data 或者 key 拿到 Tree 组件中的 node| (data) 节点的 data 或 key |
| remove| 删除 Tree 中的一个节点，使用此方法必须设置 node-key 属性| (data) 要删除的节点的 data 或者 node 对象 |
| append| 为 Tree 中的一个节点追加一个子节点| (data, parentNode) 1. 要追加的子节点的 data 2. 父节点的 data, key 或 node |
| insertBefore| 在 Tree 中给定节点前插入一个节点| (data, refNode) 1. 要增加的节点的 data 2. 参考节点的 data, key 或 node |
| insertAfter| 在 Tree 中给定节点后插入一个节点| (data, refNode) 1. 要增加的节点的 data 2. 参考节点的 data, key 或 node |
#### 事件
| 事件名| 说明| 回调参数 |
| :--- | :--- | :--- |
| node-click| 当节点被点击的时候触发| 四个参数：对应于节点点击的节点对象，TreeNode 的 node 属性, TreeNode和事件对象 |
| node-contextmenu| 当某一节点被鼠标右键点击时会触发该事件| 共四个参数，依次为：event、传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。 |
| check-change| 当复选框被点击的时候触发| 共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点本身是否被选中、节点的子树中是否有被选中的节点 |
| check| 点击节点复选框之后触发| 共两个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、树目前的选中状态对象，包含 checkedNodes、checkedKeys、halfCheckedNodes、halfCheckedKeys 四个属性 |
| current-change| 当前选中节点变化时触发的事件| 共两个参数，依次为：当前节点的数据，当前节点的 Node 对象 |
| node-expand| 节点被展开时触发的事件| 共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身 |
| node-collapse| 节点被关闭时触发的事件| 共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身 |
| node-drag-start| 节点开始拖拽时触发的事件| 共两个参数，依次为：被拖拽节点对应的 Node、event |
| node-drag-enter| 拖拽进入其他节点时触发的事件| 共三个参数，依次为：被拖拽节点对应的 Node、所进入节点对应的 Node、event |
| node-drag-leave| 拖拽离开某个节点时触发的事件| 共三个参数，依次为：被拖拽节点对应的 Node、所离开节点对应的 Node、event |
| node-drag-over| 在拖拽节点时触发的事件（类似浏览器的 mouseover 事件）| 共三个参数，依次为：被拖拽节点对应的 Node、当前进入节点对应的 Node、event |
| node-drag-end| 拖拽结束时（可能未成功）触发的事件| 共四个参数，依次为：被拖拽节点对应的 Node、结束拖拽时最后进入的节点（可能为空）、被拖拽节点的放置位置（before、after、inner）、event |
| node-drop| 拖拽成功完成时触发的事件| 共四个参数，依次为：被拖拽节点对应的 Node、结束拖拽时最后进入的节点、被拖拽节点的放置位置（before、after、inner）、event |
#### 插槽
| 插槽名| 说明 |
| :--- | :--- |
| —| 自定义树节点的内容， 自定义树节点的内容， 参数为  { node, data } |
`,
  "el-tree-select": `#### [访问](https://element-plus.gitee.io/zh-CN/component/tree-select.html)
#### TreeSelect 属性
| 属性| 方法| 事件| 插槽 |
| :--- | :--- | :--- | :--- |
| tree| tree| tree| tree |
| select| select| select| select |
#### 属性
| 属性名| 详情| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| cacheData (> 2.2.26)| 懒加载节点的缓存数据，结构与数据相同，用于获取未加载数据的标签| array| —| — |
`,
  "el-statistic": `#### [访问](https://element-plus.gitee.io/zh-CN/component/statistic.html)
`,
  "el-affix": `#### [访问](https://element-plus.gitee.io/zh-CN/component/affix.html)
#### Affix 属性
| 名称| 说明| 类型| 默认值| 必填 |
| :--- | :--- | :--- | :--- | :--- |
| offset| 偏移距离| number| 0| 否 |
| position| 位置| enum| 'top'| 否 |
| target| 指定容器 (CSS 选择器)| string| —| 否 |
| z-index| z-index| number| 100| 否 |
#### Affix 事件
| 名称| 说明| 类型 |
| :--- | :--- | :--- |
| change| fixed 状态改变时触发的事件| Function |
| scroll| 滚动时触发的事件| Function |
#### Affix 外部方法
| 方法名| 说明| 类型 |
| :--- | :--- | :--- |
| update| 手动更新固钉状态| Function |
| updateRoot| 手动更新根元素的盒模型信息| Function |
#### Affix 插槽
| 插槽名| 说明 |
| :--- | :--- |
| default| 自定义默认内容 |
`,
  "el-backtop": `#### [访问](https://element-plus.gitee.io/zh-CN/component/backtop.html)
#### 属性
| 名称| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| target| 触发滚动的对象| string| — |
| visibility-height| 滚动高度达到此参数值才出现| number| 200 |
| right| 控制其显示位置，距离页面右边距| number| 40 |
| bottom| 控制其显示位置，距离页面底部距离| number| 40 |
#### 事件
| 名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| click| 点击按钮触发的事件| Function |
#### 插槽
| 插槽名| 说明 |
| :--- | :--- |
| default| 自定义默认内容 |
`,
  "el-breadcrumb": `#### [访问](https://element-plus.gitee.io/zh-CN/component/breadcrumb.html)
#### Breadcrumb 属性
| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| separator| 分隔符| string| / |
| separator-icon| 图标分隔符的组件或组件名| string / Component| - |
#### Breadcrumb 插槽
| 插槽名| 说明| 子标签 |
| :--- | :--- | :--- |
| default| 自定义默认内容| Breadcrumb Item |
#### BreadcrumbItem API
#### BreadcrumbItem 属性
| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| to| 路由跳转目标，同 vue-router 的 to 属性| string / object| '' |
| replace| 如果设置该属性为 true, 导航将不会留下历史记录| boolean| false |
#### BreadcrumbItem 插槽
| 插槽名| 说明 |
| :--- | :--- |
| default| 自定义默认内容 |
`,
  "el-dropdown": `#### [访问](https://element-plus.gitee.io/zh-CN/component/dropdown.html)
#### Dropdown 属性
| 属性名| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| type| 菜单按钮类型，同 Button 组件一样，仅在 split-button 为 true 的情况下有效。| string| —| — |
| size| 菜单尺寸，在 split-button 为 true 的情况下也对触发按钮生效。| string| large / default / small| default |
| max-height| 菜单最大高度| string / number| —| — |
| split-button| 下拉触发元素呈现为按钮组| boolean| —| false |
| disabled| 是否禁用| boolean| —| false |
| placement| 菜单弹出位置| string| top/top-start/top-end/bottom/bottom-start/bottom-end| bottom |
| trigger| 触发下拉的行为| string| hover/click/contextmenu| hover |
| hide-on-click| 是否在点击菜单项后隐藏菜单| boolean| —| true |
| show-timeout| 展开下拉菜单的延时，仅在 trigger 为 hover 时有效| number| —| 250 |
| hide-timeout| 收起下拉菜单的延时（仅在 trigger 为 hover 时有效）| number| —| 150 |
| role| 下拉菜单的 ARIA 属性。 根据具体场景，您可能想要将此更改为“navigation”| string| —| 'menu' |
| tabindex| Dropdown 组件的 tabindex| number| —| 0 |
| popper-class| 自定义浮层类名| string| —| — |
| popper-options| popper.js 参数| Object| 请参考 popper.js 文档| {modifiers: [{name: 'computeStyles',options: {gpuAcceleration: false}}]} |
| teleported| 是否将下拉列表插入至 body 元素| boolean| —| true |
#### Dropdown 插槽
| 插槽名| 说明| 子标签 |
| :--- | :--- | :--- |
| —| 下拉菜单的内容。 注意：必须是有效的 html DOM 元素（例如 <span>、<button> 等）或 el-component，以附加监听触发器| — |
| dropdown| 下拉列表，通常是 <el-dropdown-menu> 组件| Dropdown-Menu |
#### Dropdown 事件
| 事件名| 说明| 参数 |
| :--- | :--- | :--- |
| click| split-button 为 true 时，点击左侧按钮的回调| — |
| command| 点击菜单项触发的事件回调| dropdown-item 的指令 |
| visible-change| 下拉框出现/隐藏时触发| 出现则为 true，隐藏则为 false |
#### Dropdown 方法
| 方法名| 说明| 参数 |
| :--- | :--- | :--- |
| handleOpen| 打开下拉菜单| — |
| handleClose| 关闭下拉菜单| — |
#### Dropdown-Menu 插槽
| 插槽名| 说明| 子标签 |
| :--- | :--- | :--- |
| —| 下拉菜单的内容| Dropdown-Item |
#### Dropdown-Item 属性
| 属性名| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| command| 派发到command回调函数的指令参数| string/number/object| —| — |
| disabled| 是否禁用| boolean| —| false |
| divided| 是否显示分隔符| boolean| —| false |
| icon| 自定义图标| string | Component| —| — |
#### Dropdown-Item 插槽
| 插槽名| 说明 |
| :--- | :--- |
| —| 自定义Dropdown-Item内容 |
`,
  "el-menu": `#### [访问](https://element-plus.gitee.io/zh-CN/component/menu.html)
#### Menu 属性
| 属性名| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| mode| 菜单展示模式| string| horizontal / vertical| vertical |
| collapse| 是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）| boolean| —| false |
| ellipsis| 是否省略多余的子项（仅在横向模式生效）| boolean| —| true |
| background-color| 菜单的背景颜色（十六进制格式）（已被废弃，使用--bg-color）| string| —| #ffffff |
| text-color| 文字颜色（十六进制格式）（已被废弃，使用--text-color）| string| —| #303133 |
| active-text-color| 活动菜单项的文本颜色（十六进制格式）（已被废弃，使用--active-color）| string| —| #409EFF |
| default-active| 页面加载时默认激活菜单的 index| string| —| — |
| default-openeds| 默认打开的 sub-menu 的 index 的数组| Array| —| — |
| unique-opened| 是否只保持一个子菜单的展开| boolean| —| false |
| menu-trigger| 子菜单打开的触发方式，只在 mode 为 horizontal 时有效。| string| hover / click| hover |
| router| 是否启用 vue-router 模式。 启用该模式会在激活导航时以 index 作为 path 进行路由跳转 使用 default-active 来设置加载时的激活项。| boolean| —| false |
| collapse-transition| 是否开启折叠动画| boolean| —| true |
| popper-effect| Tooltip 主题，内置了 dark / light 两种主题| string| dark / light| dark |
#### Menu 方法
| 方法名| 说明| 参数 |
| :--- | :--- | :--- |
| open| 展开指定的 sub-menu| index: 需要打开的 sub-menu 的 index |
| close| 收起指定的 sub-menu| index: 需要收起的 sub-menu 的 index |
#### Menu 事件
| 事件名| 说明| 回调参数 |
| :--- | :--- | :--- |
| select| 菜单激活回调| index: 选中菜单项的 index, indexPath: 选中菜单项的 index path, item: 选中菜单项, routeResult: vue-router 的返回值（如果 router 为 true） |
| open| sub-menu 展开的回调| index: 打开的 sub-menu 的 index, indexPath: 打开的 sub-menu 的 index path |
| close| sub-menu 收起的回调| index: 收起的 sub-menu 的 index, indexPath: 收起的 sub-menu 的 index path |
#### Menu 插槽
| 插槽名| 说明| 子标签 |
| :--- | :--- | :--- |
| —| 自定义默认内容| SubMenu / Menu-Item / Menu-Item-Group |
#### SubMenu 属性
| 属性名| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| index| 唯一标志| string| —| — |
| popper-class| 为 popper 添加类名| string| —| — |
| show-timeout| 展开 sub-menu 的延时| number| —| 300 |
| hide-timeout| 收起 sub-menu 的延时| number| —| 300 |
| disabled| 是否禁用| boolean| —| false |
| popper-append-to-body（已废弃）| 是否将弹出菜单插入至 body 元素。 在菜单的定位出现问题时，可尝试修改该属性| boolean| —| 一级子菜单：true / 非一级子菜单：false |
| teleported| 是否将 popup 的下拉列表插入至 body 元素| boolean| —| 一级子菜单：true / 非一级子菜单：false |
| popper-offset| 弹出窗口偏移| number| —| 6 |
| expand-close-icon| 父菜单展开且子菜单关闭时的图标， expand-close-icon 和 expand-open-icon 需要一起配置才能生效| string | Component| —| — |
| expand-open-icon| 父菜单展开且子菜单打开时的图标， expand-open-icon 和 expand-close-icon 需要一起配置才能生效| string | Component| —| — |
| collapse-close-icon| 父菜单收起且子菜单关闭时的图标， expand-close-icon 和 expand-open-icon 需要一起配置才能生效| string | Component| —| — |
| collapse-open-icon| 父菜单收起且子菜单打开时的图标， expand-open-icon 和 expand-close-icon 需要一起配置才能生效| string | Component| —| — |
#### SubMenu 插槽
| 插槽名| 说明| 子标签 |
| :--- | :--- | :--- |
| —| 自定义默认内容| SubMenu / Menu-Item / Menu-Item-Group |
| title| 自定义标题内容| — |
#### Menu-Item 属性
| 属性名| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| index| 唯一标志| string/null| —| null |
| route| Vue Router 路径对象| object| —| — |
| disabled| 是否禁用| boolean| —| false |
#### Menu-Item 事件
| 事件名| 说明| 回调参数 |
| :--- | :--- | :--- |
| click| 菜单点击时的回调函数| el-menu-item 实例 |
#### Menu-Item 插槽
| 插槽名| 说明 |
| :--- | :--- |
| —| 自定义默认内容 |
| title| 自定义标题内容 |
#### Menu-Item-Group 属性
| 属性名| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| title| 组标题| string| —| — |
#### Menu-Item-Group 插槽
| 插槽名| 说明| 子标签 |
| :--- | :--- | :--- |
| —| 默认插槽内容| Menu-Item |
| title| 自定义组标题内容| — |
`,
  "el-steps": `#### [访问](https://element-plus.gitee.io/zh-CN/component/steps.html)
#### Steps 属性
| 属性名| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| space| 每个 step 的间距，不填写将自适应间距。 支持百分比。| number / string| —| — |
| direction| 显示方向| string| vertical/horizontal| horizontal |
| active| 设置当前激活步骤| number| —| 0 |
| process-status| 设置当前步骤的状态| string| wait / process / finish / error / success| process |
| finish-status| 设置结束步骤的状态| string| wait / process / finish / error / success| finish |
| align-center| 进行居中对齐| boolean| —| false |
| simple| 是否应用简洁风格| boolean| -| false |
#### Steps 插槽
| 插槽名| 说明| 子标签 |
| :--- | :--- | :--- |
| -| 默认插槽| Step |
#### Step 属性
| 属性名| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| title| 标题| string| —| — |
| description| 描述文案| string| —| — |
| icon| Step 组件的自定义图标。 也支持 slot 方式写入| string | Component| —| — |
| status| 设置当前步骤的状态， 不设置则根据 steps 确定状态| string| wait / process / finish / error / success| — |
#### Step 插槽
| 插槽名| 说明 |
| :--- | :--- |
| icon| 自定义图标 |
| title| 自定义标题 |
| description| 自定义描述文案 |
`,
  "el-tabs": `#### [访问](https://element-plus.gitee.io/zh-CN/component/tabs.html)
#### Tabs 属性
| 属性名| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| model-value / v-model| 绑定值，选中选项卡的 name| string / number| —| 第一个选项卡的 name |
| type| 风格类型| string| card/border-card| — |
| closable| 标签是否可关闭| boolean| —| false |
| addable| 标签是否可增加| boolean| —| false |
| editable| 标签是否同时可增加和关闭| boolean| —| false |
| tab-position| 选项卡所在位置| string| top/right/bottom/left| top |
| stretch| 标签的宽度是否自撑开| boolean| -| false |
| before-leave| 切换标签之前的钩子函数， 若返回 false  或者返回被 reject 的 Promise，则阻止切换。| Function(activeName, oldActiveName)| —| — |
#### Tabs 事件
| 事件名| 说明| 回调参数 |
| :--- | :--- | :--- |
| tab-click| tab 被选中时触发| (pane: TabsPaneContext, ev: Event) |
| tab-change| activeName 改变时触发| (name: TabPaneName) |
| tab-remove| 点击 tab 移除按钮时触发| (name: TabPaneName) |
| tab-add| 点击 tab 新增按钮时触发| — |
| edit| 点击 tab 的新增或移除按钮后触发| (paneName: TabPaneName | undefined, action: 'remove' | 'add') |
#### Tabs 插槽
| 插槽名| 说明| 子标签 |
| :--- | :--- | :--- |
| -| 默认插槽| Tab-pane |
#### Tab-pane 属性
| 属性名| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| label| 选项卡标题| string| —| — |
| disabled| 是否禁用| boolean| —| false |
| name| 与选项卡绑定值 value 对应的标识符，表示选项卡别名| string / number| —| 该选项卡在选项卡列表中的序数值，第一个选项卡为 '0' |
| closable| 标签是否可关闭| boolean| —| false |
| lazy| 标签是否延迟渲染| boolean| —| false |
#### Tab-pane 插槽
| 插槽名| 说明 |
| :--- | :--- |
| -| Tab-pane 的内容 |
| label| Tab-pane 的标题内容 |
`,
  "el-alert": `#### [访问](https://element-plus.gitee.io/zh-CN/component/alert.html)
#### 属性
| 名称| 说明| 类型| 默认值| 必填 |
| :--- | :--- | :--- | :--- | :--- |
| title| Alert 标题。| string| —| 否 |
| type| Alert 类型。| enum| info| 否 |
| description| 描述性文本| string| —| 否 |
| closable| 是否可以关闭| boolean| true| 否 |
| center| 文字是否居中| boolean| false| 否 |
| close-text| 自定义关闭按钮文本| string| —| 否 |
| show-icon| 是否显示类型图标| boolean| false| 否 |
| effect| 主题样式| enum| 'light'| 否 |
#### 事件
| 名称| 描述| 类型 |
| :--- | :--- | :--- |
| close| 关闭 Alert 时触发的事件| Function |
#### 插槽
| 名称| 描述 |
| :--- | :--- |
| default| Alert 内容描述 |
| title| 标题的内容 |
`,
  "el-dialog": `#### [访问](https://element-plus.gitee.io/zh-CN/component/dialog.html)
#### 属性
| 属性名| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| model-value / v-model| 是否显示 Dialog| boolean| —| — |
| title| Dialog 对话框 Dialog 的标题， 也可通过具名 slot （见下表）传入| string| —| — |
| width| Dialog 的宽度| string / number| —| 50% |
| fullscreen| 是否为全屏 Dialog| boolean| —| false |
| top| Dialog CSS 中的 margin-top 值| string| —| 15vh |
| modal| 是否需要遮罩层| boolean| —| true |
| append-to-body| Dialog 自身是否插入至 body 元素上。 嵌套的 Dialog 必须指定该属性并赋值为 true| boolean| —| false |
| lock-scroll| 是否在 Dialog 出现时将 body 滚动锁定| boolean| —| true |
| custom-classdeprecated| Dialog 的自定义类名| string| —| — |
| open-delay| Dialog 打开的延时时间，单位毫秒| number| —| 0 |
| close-delay| Dialog 关闭的延时时间，单位毫秒| number| —| 0 |
| close-on-click-modal| 是否可以通过点击 modal 关闭 Dialog| boolean| —| true |
| close-on-press-escape| 是否可以通过按下 ESC 关闭 Dialog| boolean| —| true |
| show-close| 是否显示关闭按钮| boolean| —| true |
| before-close| 关闭前的回调，会暂停 Dialog 的关闭. 回调函数内执行 done 参数方法的时候才是真正关闭对话框的时候.| Function(done) (done 用来关闭 Dialog)| —| — |
| draggable| 为 Dialog 启用可拖拽功能| boolean| —| false |
| center| 是否让 Dialog 的 header 和 footer 部分居中排列| boolean| —| false |
| align-center| 是否水平垂直对齐对话框| boolean| —| false |
| destroy-on-close| 当关闭 Dialog 时，销毁其中的元素| boolean| —| false |
#### 插槽
| 插槽名| 说明 |
| :--- | :--- |
| —| Dialog 的内容 |
| header| 对话框标题的内容；会替换标题部分，但不会移除关闭按钮。 |
| titledeprecated| 与 header 作用相同 请使用 header |
| footer| Dialog 按钮操作区的内容 |
#### 事件
| 事件名| 说明| 参数 |
| :--- | :--- | :--- |
| open| Dialog 打开的回调| — |
| opened| Dialog 打开动画结束时的回调| — |
| close| Dialog 关闭的回调| — |
| closed| Dialog 关闭动画结束时的回调| — |
| open-auto-focus| 输入焦点聚焦在 Dialog 内容时的回调| — |
| close-auto-focus| 输入焦点从 Dialog 内容失焦时的回调| — |
#### 常见问题解答（FAQ）
`,
  "el-drawer": `#### [访问](https://element-plus.gitee.io/zh-CN/component/drawer.html)
#### Drawer 属性
| 属性名| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| model-value / v-model| 是否显示 Drawer| boolean| —| false |
| append-to-body| Drawer 自身是否插入至 body 元素上。嵌套的 Drawer 必须指定该属性并赋值为 true| boolean| —| false |
| lock-scroll| 是否在 Drawer 出现时将 body 滚动锁定| boolean| —| true |
| before-close| 关闭前的回调，会暂停 Drawer 的关闭| function(done)，done 用于关闭 Drawer| —| — |
| close-on-click-modal| 是否可以通过点击 modal 关闭 Drawer| boolean| —| true |
| close-on-press-escape| 是否可以通过按下 ESC 关闭 Drawer| boolean| —| true |
| open-delay| Drawer 打开的延时时间，单位毫秒| number| —| 0 |
| close-delay| Drawer 关闭的延时时间，单位毫秒| number| —| 0 |
| custom-classdeprecated| Drawer 的自定义类名| string| —| — |
| destroy-on-close| 控制是否在关闭 Drawer 之后将子元素全部销毁| boolean| -| false |
| modal| 是否需要遮罩层| boolean| —| true |
| direction| Drawer 打开的方向| Direction| rtl / ltr / ttb / btt| rtl |
| show-close| 是否显示关闭按钮| boolean| —| true |
| size| Drawer 窗体的大小, 当使用 number 类型时, 以像素为单位, 当使用 string 类型时, 请传入 'x%', 否则便会以 number 类型解释| number / string| -| '30%' |
| title| Drawer 的标题，也可通过具名 slot （见下表）传入| string| —| — |
| with-header| 控制是否显示 header 栏, 默认为 true, 当此项为 false 时, title attribute 和 title slot 均不生效| boolean| -| true |
| modal-class| 遮罩层的自定义类名| string| -| - |
| z-index| 设置 z-index| number| -| - |
#### Drawer 插槽
| 插槽名| 说明 |
| :--- | :--- |
| —| Drawer 的内容 |
| header| Drawer 标题的内容；会替换标题部分，但不会移除关闭按钮。 |
| titledeprecated| 与 header 作用相同 请使用 header |
| footer| Drawer 页脚部分 |
#### Drawer 方法
| 名称| 说明 |
| :--- | :--- |
| handleClose| 用于关闭 Drawer, 该方法会调用传入的 before-close 方法 |
#### Drawer 事件
| 事件名| 说明| 参数 |
| :--- | :--- | :--- |
| open| Drawer 打开的回调| — |
| opened| Drawer 打开动画结束时的回调| — |
| close| Drawer 关闭的回调| — |
| closed| Drawer 关闭动画结束时的回调| — |
`,
  "el-loading": `#### [访问](https://element-plus.gitee.io/zh-CN/component/loading.html)
`,
  "el-message": `#### [访问](https://element-plus.gitee.io/zh-CN/component/message.html)
`,
  "el-notification": `#### [访问](https://element-plus.gitee.io/zh-CN/component/notification.html)
#### Notification 属性
| 属性| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| title| 标题| string| —| — |
| message| 通知栏正文内容| string/Vue.VNode| —| — |
| dangerouslyUseHTMLString| 是否将 message 属性作为 HTML 片段处理| boolean| —| false |
| type| 通知的类型| string| success/warning/info/error| — |
| icon| 自定义图标。 若设置了 type，则 icon 会被覆盖| string | Component| —| — |
| custom-class| 自定义类名| string| —| — |
| duration| 显示时间, 单位为毫秒。 值为 0 则不会自动关闭| number| —| 4500 |
| position| 自定义弹出位置| string| top-right/top-left/bottom-right/bottom-left| top-right |
| show-close| 是否显示关闭按钮| boolean| —| true |
| on-close| 关闭时的回调函数| function| —| — |
| on-click| 点击 Notification 时的回调函数| function| —| — |
| offset| 相对屏幕顶部的偏移量 偏移的距离，在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量| number| —| 0 |
| appendTo| 设置通知栏在 DOM 中的亲元素| string / HTMLElement| -| document.body |
| zIndex| 初始 zIndex| number| -| 0 |
#### Notification 方法
| 方法名| 描述 |
| :--- | :--- |
| close| 关闭当前的 Notification |
`,
  "el-popconfirm": `#### [访问](https://element-plus.gitee.io/zh-CN/component/popconfirm.html)
#### 属性
| 属性名| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| title| 标题| String| —| — |
| confirm-button-text| 确认按钮文字| String| —| — |
| cancel-button-text| 取消按钮文字| String| —| — |
| confirm-button-type| 确认按钮类型| String| primary / success / warning / danger / info / text| primary |
| cancel-button-type| 取消按钮类型| String| primary / success / warning / danger / info / text| text |
| icon| 自定义图标| string | Component| —| QuestionFilled |
| icon-color| Icon 颜色| String| —| #f90 |
| hide-icon| 是否隐藏 Icon| Boolean| —| false |
| teleported| 是否将 popover 的下拉列表插入至 body 元素| boolean| true / false| true |
| persistent| 当 popover 组件长时间不触发且 persistent 属性设置为 false 时, popover 将会被删除| boolean| —| false |
| width| 弹出窗口宽度| string/number| -| Min width 150px |
#### 插槽
| 插槽名| 说明 |
| :--- | :--- |
| reference| 触发 Popconfirm 显示的 HTML 元素 |
#### 事件
| 事件名| 说明| 回调参数 |
| :--- | :--- | :--- |
| confirm| 点击确认按钮时触发| — |
| cancel| 点击取消按钮时触发| — |
`,
  "el-popover": `#### [访问](https://element-plus.gitee.io/zh-CN/component/popover.html)
#### Popover 属性
| 属性名| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| trigger| 触发方式| string| click/focus/hover/contextmenu| click |
| title| 标题| string| —| — |
| effect| Tooltip 主题，Element Plus 内置了 dark / light 两种主题| string| string| light |
| content| 显示的内容，也可以通过写入默认 slot 修改显示内容| string| —| — |
| width| 宽度| string / number| —| 最小宽度 150px |
| placement| 出现位置| string| top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end| bottom |
| disabled| Popover 是否可用| boolean| —| false |
| visible / v-model:visible| Popover 是否显示| Boolean| —| false |
| offset| 出现位置的偏移量| number| —| 0 |
| transition| 定义渐变动画| string| —| el-fade-in-linear |
| show-arrow| 是否显示 Tooltip 箭头， 欲了解更多信息，请参考 ElPopper| boolean| —| true |
| popper-options| popper.js 的参数| object| 详情参考 popper.js| {modifiers: [{name: 'computeStyles',options: {gpuAcceleration: false}}]} |
| popper-class| 为 popper 添加类名| string| —| — |
| propper-style| 为 popper 自定义样式| string / object| —| — |
| show-after| 在触发后多久显示内容，单位毫秒| number| —| 0 |
| hide-after| 延迟关闭，单位毫秒| number| —| 200 |
| auto-close| tooltip 出现后自动隐藏延时，单位毫秒| number| —| 0 |
| tabindex| Popover 组件的 tabindex| number| —| — |
| teleported| 是否将 popover 的下拉列表插入至 body 元素| boolean| true / false| true |
| persistent| 当 popover 组件长时间不触发且 persistent 属性设置为 false 时, popover 将会被删除| boolean| —| true |
#### Popover 插槽
| 插槽名| 说明 |
| :--- | :--- |
| —| Popover 内嵌 HTML 文本 |
| reference| 触发 Popover 显示的 HTML 元素 |
#### Popover 事件
| 事件名| 说明| 回调参数 |
| :--- | :--- | :--- |
| show| 显示时触发| — |
| before-enter| 显示动画播放前触发| — |
| after-enter| 显示动画播放完毕后触发| — |
| hide| 隐藏时触发| — |
| before-leave| 隐藏动画播放前触发| — |
| after-leave| 隐藏动画播放完毕后触发| — |
`,
  "el-tooltip": `#### [访问](https://element-plus.gitee.io/zh-CN/component/tooltip.html)
#### 属性
| 名称| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| append-to| 指示 Tooltip 的内容将附加在哪一个网页元素上| CSS 选择器 | HTMLElement| —| #el-popper-container-[randomValue] |
| effect| Tooltip 主题，内置了 dark / light 两种| string| dark / light| dark |
| content| 显示的内容，也可被 slot#content 覆盖| String| —| — |
| raw-content| content 中的内容是否作为 HTML 字符串处理| boolean| —| false |
| placement| Tooltip 组件出现的位置| string| top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end| bottom |
| visible / v-model:visible| Tooltip 组件可见性| boolean| —| false |
| disabled| Tooltip 组件是否禁用| boolean| —| false |
| offset| 出现位置的偏移量| number| —| 0 |
| transition| 动画名称| string| —| el-fade-in-linear |
| popper-options| popper.js 参数| Object| 详见 popper.js 文档| {modifiers: [{name: 'computeStyles',options: {gpuAcceleration: false}}]} |
| show-after| 在触发后多久显示内容，单位毫秒| number| —| 0 |
| show-arrow| tooltip 的内容是否有箭头| boolean| true / false| true |
| hide-after| 延迟关闭，单位毫秒| number| —| 200 |
| auto-close| tooltip 出现后自动隐藏延时，单位毫秒| number| —| 0 |
| manual| 是否手动控制 Tooltip。 如果设置为 true，则 mouseenter 和 mouseleave 将不会生效| boolean| —| false |
| popper-class| 为 Tooltip 的 popper 添加类名| string| —| — |
| enterable| 鼠标是否可进入到 tooltip 中| Boolean| —| true |
| tabindex| Tooltip 的 tabindex| number| —| 0 |
| teleported| 是否使用 teleport。设置成 true则会被追加到 append-to 的位置| boolean| true / false| true |
| trigger| 如何触发（展示） Tooltip| string| hover / click / focus / contextmenu| hover |
| virtual-triggering| 指示是否启用虚拟触发器| boolean| —| false |
| virtual-ref| 代表 tooltip 所要附加的参照元素| HTMLElement| —| — |
| trigger-keys| 当鼠标点击或者聚焦在触发元素上时， 可以定义一组键盘按键并且通过它们来控制 Tooltip 的显示| Array| —| ['Enter','Space'] |
#### 插槽
| 插槽名| 说明 |
| :--- | :--- |
| —| Tooltip 触发 & 引用的元素 |
| content| 自定义内容 |
`,
  "el-divider": `#### [访问](https://element-plus.gitee.io/zh-CN/component/divider.html)
#### 属性
| 属性名| 说明| 类型| 默认 |
| :--- | :--- | :--- | :--- |
| direction| 设置分割线方向| enum| horizontal |
| border-style| 设置分隔符样式| enum css/border-style| solid |
| content-position| 自定义分隔线内容的位置| enum| center |
#### 插槽
| 事件名| Description |
| :--- | :--- |
| default| 设置分割线文案的位置 |
`,

}