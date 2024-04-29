export default {
  "a-button": `#### [访问](https://www.antdv.com/components/button-cn)
#### 属性

| 属性| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| block| 将按钮宽度调整为其父宽度的选项| boolean| false|  |
| danger| 设置危险按钮| boolean| false| 2.2.0 |
| disabled| 按钮失效状态| boolean| false|  |
| ghost| 幽灵属性，使按钮背景透明| boolean| false|  |
| href| 点击跳转的地址，指定此属性 button 的行为和 a 链接一致| string| -|  |
| htmlType| 设置 button 原生的 type 值，可选值请参考 HTML 标准| string| button|  |
| icon| 设置按钮的图标类型| v-slot| -|  |
| loading| 设置按钮载入状态| boolean | { delay: number }| false|  |
| shape| 设置按钮形状| default | circle | round| default|  |
| size| 设置按钮大小| large | middle | small| middle|  |
| target| 相当于 a 链接的 target 属性，href 存在时生效| string| -|  |
| type| 设置按钮类型| primary | ghost | dashed | link | text | default| default|  |
#### 事件

| 事件名称| 说明| 回调参数| 版本 |
| :--- | :--- | :--- | :--- |
| click| 点击按钮时的回调| (event) => void|  |
#### 方法

| 名称| 描述| 版本 |
| :--- | :--- | :--- |
| blur()| 移除焦点|  |
| focus()| 获取焦点|  |
`,
  "a-icon": `#### [访问](https://www.antdv.com/components/icon-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| rotate| 图标旋转角度（IE9 无效）| number| -|  |
| spin| 是否有旋转动画| boolean| false|  |
| style| 设置图标的样式，例如 fontSize 和 color| CSSProperties| -|  |
| twoToneColor| 仅适用双色图标。设置双色图标的主要颜色| string (十六进制颜色)| -|  |

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| component| 控制如何渲染图标，通常是一个渲染根标签为 <svg> 的 Vue 组件| ComponentType<CustomIconComponentProps>| -|  |
| rotate| 图标旋转角度（IE9 无效）| number| -|  |
| spin| 是否有旋转动画| boolean| false|  |
| style| 设置图标的样式，例如 fontSize 和 color| CSSProperties| -|  |

| 参数| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| extraCommonProps| 给所有的 svg 图标 <Icon /> 组件设置额外的属性| { class, attrs, props, on, style }| {} |
| scriptUrl| iconfont.cn 项目在线生成的 js 地址| string| - |

| 字段| 说明| 类型| 只读值 |
| :--- | :--- | :--- | :--- |
| class| 计算后的 svg 类名| string| - |
| fill| svg 元素填充的颜色| string| 'currentColor' |
| height| svg 元素高度| string | number| '1em' |
| style| 计算后的 svg 元素样式| CSSProperties| - |
| width| svg 元素宽度| string | number| '1em' |
`,
  "a-typography": `#### [访问](https://www.antdv.com/components/typography-cn)
#### 属性
`,
  "a-typography-text": `#### [访问](https://www.antdv.com/components/typography-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| code| 添加代码样式| boolean| false|  |
| content(v-model)| 当使用 ellipsis 或 editable 时，使用 content 代替 children| string| -|  |
| copyable| 是否可拷贝，为对象时可进行各种自定义| boolean | copyable| false| copyable |
| delete| 添加删除线样式| boolean| false|  |
| disabled| 禁用文本| boolean| false|  |
| editable| 是否可编辑，为对象时可对编辑进行控制| boolean | editable| false| editable |
| ellipsis| 自动溢出省略| boolean| false|  |
| keyboard| 添加键盘样式| boolean| false|  |
| mark| 添加标记样式| boolean| false|  |
| strong| 是否加粗| boolean| false|  |
| type| 文本类型| secondary | success | warning | danger| -|  |
| underline| 添加下划线样式| boolean| false|  |
`,
  "a-typography-title": `#### [访问](https://www.antdv.com/components/typography-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| code| 添加代码样式| boolean| false|  |
| content(v-model)| 当使用 ellipsis 或 editable 时，使用 content 代替 children| string| -|  |
| copyable| 是否可拷贝，为对象时可进行各种自定义| boolean | copyable| false| copyable |
| delete| 添加删除线样式| boolean| false|  |
| disabled| 禁用文本| boolean| false|  |
| editable| 是否可编辑，为对象时可对编辑进行控制| boolean | editable| false| editable |
| ellipsis| 自动溢出省略，为对象时可设置省略行数、是否可展开、添加后缀等| boolean | ellipsis| false| ellipsis |
| level| 重要程度，相当于 h1、h2、h3、h4、h5| number: 1, 2, 3, 4, 5| 1|  |
| mark| 添加标记样式| boolean| false|  |
| type| 文本类型| secondary | success | warning | danger| -|  |
| underline| 添加下划线样式| boolean| false|  |
`,
  "a-typography-paragraph": `#### [访问](https://www.antdv.com/components/typography-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| code| 添加代码样式| boolean| false|  |
| content(v-model)| 当使用 ellipsis 或 editable 时，使用 content 代替 children| string| -|  |
| copyable| 是否可拷贝，为对象时可进行各种自定义| boolean | copyable| false| copyable |
| delete| 添加删除线样式| boolean| false|  |
| disabled| 禁用文本| boolean| false|  |
| editable| 是否可编辑，为对象时可对编辑进行控制| boolean | editable| false| editable |
| ellipsis| 自动溢出省略，为对象时可设置省略行数、是否可展开、添加后缀等| boolean | ellipsis| false| ellipsis |
| mark| 添加标记样式| boolean| false|  |
| strong| 是否加粗| boolean| false|  |
| type| 文本类型| secondary | success | warning | danger| -|  |
| underline| 添加下划线样式| boolean| false|  |

| 名称| 说明| 参数| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| copyableIcon| 自定义拷贝图标| { copied: boolean }| copied ? <CheckOutlined /> : <CopyOutlined />|  |
| copyableTooltip| 自定义提示文案，当 copyable.tooltip = false 时关闭| { copied: boolean }| copied ? '复制成功' : '复制'|  |
| editableIcon| 自定义编辑图标| -| <EditOutlined />|  |
| editableTooltip| 自定义提示文本，当 editable.tooltip = false 时关闭| -| 编辑|  |
| ellipsisSymbol| 自定义展开描述文案| -| -|  |
| ellipsisTooltip| 省略时，展示提示信息| -| -|  |
| enterEnterIcon| 在编辑段中自定义“enter”图标| {className: string}| <EnterOutlined />| 3.0 |

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| text| 拷贝到剪切板里的文本| string| -|  |
| tooltip| 是否展示提示文本| boolean| true|  |
| onCopy| 拷贝成功的回调函数| function| -|  |

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| autoSize| 自动 resize 文本域| boolean | { minRows: number, maxRows: number }| -|  |
| editing| 控制是否是编辑中状态| boolean| false|  |
| maxlength| 编辑中文本域最大长度| number| -|  |
| tooltip| 是否展示提示文本| boolean| true|  |
| triggerType| 编辑模式触发器类型，图标、文本或者两者都设置（不设置图标作为触发器时它会隐藏）| Array<icon|text>| [icon]|  |
| onCancel| 按 ESC 退出编辑状态时触发| function| -|  |
| onChange| 文本域编辑时触发| function(event)| -|  |
| onEnd| 按 ENTER 结束编辑状态时触发| function| -|  |
| onStart| 进入编辑中状态时触发| function| -|  |

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| expandable| 是否可展开| boolean| -|  |
| rows| 最多显示的行数| number| -|  |
| suffix| 自定义省略内容后缀| string| -|  |
| symbol| 自定义展开描述文案| string| 展开|  |
| tooltip| 省略时，展示提示信息| boolean | string| -|  |
| onEllipsis| 触发省略时的回调| function(ellipsis)| -|  |
| onExpand| 点击展开时的回调| function(event)| -|  |
`,
  "a-divider": `#### [访问](https://www.antdv.com/components/divider-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| dashed| 是否虚线| boolean| false|  |
| orientation| 分割线标题的位置| left | right | center| center|  |
| orientationMargin| 标题和最近 left/right 边框之间的距离，去除了分割线，同时 orientation 必须为 left 或 right| string | number| -| 3.0 |
| plain| 文字是否显示为普通正文样式| boolean| false| 2.2.0 |
| type| 水平还是垂直类型| horizontal | vertical| horizontal|  |
`,
  "a-flex": `#### [访问](https://www.antdv.com/components/flex-cn)
#### 属性

| 属性| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| vertical| flex 主轴的方向是否垂直，使用 flex-direction: column| boolean| false|  |
| wrap| 设置元素单行显示还是多行显示| 参考 flex-wrap| nowrap|  |
| justify| 设置元素在主轴方向上的对齐方式| 参考 justify-content| normal|  |
| align| 设置元素在交叉轴方向上的对齐方式| 参考 align-items| normal|  |
| flex| flex CSS 简写属性| 参考 flex| normal|  |
| gap| 设置网格之间的间隙| small | middle | large | string | number| -|  |
| component| 自定义元素类型| Component| div|  |
`,
  "a-grid": `#### [访问](https://www.antdv.com/components/grid-cn)
#### 属性
`,
  "a-row": `#### [访问](https://www.antdv.com/components/grid-cn)
#### 属性

| 成员| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| align| 垂直对齐方式| top | middle | bottom | stretch | {[key in 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl']: 'top' | 'middle' | 'bottom' | 'stretch'}| top| object: 4.0 |
| gutter| 栅格间隔，可以写成像素值或支持响应式的对象写法来设置水平间隔 { xs: 8, sm: 16, md: 24}。或者使用数组形式同时设置 [水平间距, 垂直间距]（1.5.0 后支持）。| number | object | array| 0| - |
| justify| 水平排列方式| start | end | center | space-around | space-between | space-evenly | {[key in 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl']: 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'}| start| object: 4.0 |
| wrap| 是否自动换行| boolean| false| - |
`,
  "a-col": `#### [访问](https://www.antdv.com/components/grid-cn)
#### 属性

| 成员| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| flex| flex 布局填充| string|number| -|  |
| offset| 栅格左侧的间隔格数，间隔内不可以有栅格| number| 0|  |
| order| 栅格顺序，flex 布局模式下有效| number| 0|  |
| pull| 栅格向左移动格数| number| 0|  |
| push| 栅格向右移动格数| number| 0|  |
| span| 栅格占位格数，为 0 时相当于 display: none| number| -|  |
| xs| <576px 响应式栅格，可为栅格数或一个包含其他属性的对象| number|object| -|  |
| sm| ≥576px 响应式栅格，可为栅格数或一个包含其他属性的对象| number|object| -|  |
| md| ≥768px 响应式栅格，可为栅格数或一个包含其他属性的对象| number|object| -|  |
| lg| ≥992px 响应式栅格，可为栅格数或一个包含其他属性的对象| number|object| -|  |
| xl| ≥1200px 响应式栅格，可为栅格数或一个包含其他属性的对象| number|object| -|  |
| xxl| ≥1600px 响应式栅格，可为栅格数或一个包含其他属性的对象| number|object| -|  |
`,
  "a-layout": `#### [访问](https://www.antdv.com/components/layout-cn)
#### 属性

| 参数| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| class| 容器 class| string| - |
| hasSider| 表示子元素里有 Sider，一般不用指定。可用于服务端渲染时避免样式闪动| boolean| - |
| style| 指定样式| object| - |
`,
  "a-layout-sider": `#### [访问](https://www.antdv.com/components/layout-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| breakpoint| 触发响应式布局的断点| xs | sm | md | lg | xl | xxl| -|  |
| class| 容器 class| string| -|  |
| collapsed(v-model)| 当前收起状态| boolean| -|  |
| collapsedWidth| 收缩宽度，设置为 0 会出现特殊 trigger| number| 80|  |
| collapsible| 是否可收起| boolean| false|  |
| defaultCollapsed| 是否默认收起| boolean| false|  |
| reverseArrow| 翻转折叠提示箭头的方向，当 Sider 在右边时可以使用| boolean| false|  |
| style| 指定样式| object|string| -|  |
| theme| 主题颜色| light | dark| dark|  |
| trigger| 自定义 trigger，设置为 null 时隐藏 trigger| string|slot| -|  |
| width| 宽度| number|string| 200|  |
| zeroWidthTriggerStyle| 指定当 collapsedWidth 为 0 时出现的特殊 trigger 的样式| object| -| 1.5.0 |
#### 事件

| 事件名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| breakpoint| 触发响应式布局断点时的回调| (broken) => {} |
| collapse| 展开-收起时的回调函数，有点击 trigger 以及响应式反馈两种方式可以触发| (collapsed, type) => {} |
`,
  "a-breakpoint": `#### [访问](https://www.antdv.com/components/layout-cn)
#### 属性
`,
  "a-space": `#### [访问](https://www.antdv.com/components/space-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| align| 对齐方式| start | end |center |baseline| -| 1.6.5 |
| direction| 间距方向| vertical | horizontal| horizontal| 1.6.5 |
| size| 间距大小| small | middle | large | number| small| 1.6.5 |
| split| 设置拆分| VueNode | v-slot| -| 2.2.0 |
| wrap| 是否自动换行，仅在 horizontal 时有效| boolean| false| 2.2.0 |
`,
  "a-space-compact": `#### [访问](https://www.antdv.com/components/space-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| block| 将宽度调整为父元素宽度的选项| boolean| false| 4.0.0 |
| direction| 指定排列方向| vertical | horizontal| horizontal| 4.0.0 |
| size| 子组件大小| large | middle | small| middle| 4.0.0 |
`,
  "a-anchor": `#### [访问](https://www.antdv.com/components/anchor-cn)
#### 属性
#### [](https://www.antdv.com/components/anchor-cn)#### 属性

| 成员| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| affix| 固定模式| boolean| true|  |
| bounds| 锚点区域边界| number| 5(px)|  |
| getContainer| 指定滚动的容器| () => HTMLElement| () => window|  |
| getCurrentAnchor| 自定义高亮的锚点| (activeLink: string) => string| -| activeLink(3.3) |
| offsetBottom| 距离窗口底部达到指定偏移量后触发| number| |  |
| offsetTop| 距离窗口顶部达到指定偏移量后触发| number| |  |
| showInkInFixed| :affix="false" 时是否显示小方块| boolean| false|  |
| targetOffset| 锚点滚动偏移量，默认与 offsetTop 相同，例子| number| offsetTop| 1.5.0 |
| wrapperClass| 容器的类名| string| -|  |
| wrapperStyle| 容器样式| object| -|  |
| items| 数据化配置选项内容，支持通过 children 嵌套| { key, href, title, target, children }[] 具体见| -| 4.0 |
| direction| 设置导航方向| vertical | horizontal| vertical| 4.0 |
| customTitle| 使用插槽自定义选项 title| v-slot="AnchorItem"| -| 4.0 |
`,
  "a-anchor-item": `#### [访问](https://www.antdv.com/components/anchor-cn)
#### 属性

| 成员| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| key| 唯一标志| string | number| -|  |
| href| 锚点链接| string| -|  |
| target| 该属性指定在何处显示链接的资源| string| -|  |
| title| 文字内容| VueNode | (item: AnchorItem) => VueNode| -|  |
| children| 嵌套的 Anchor Link，注意：水平方向该属性不支持| AnchorItem[]| -|  |
#### 事件

| 事件名称| 说明| 回调参数| 版本|  |
| :--- | :--- | :--- | :--- | :--- |
| change| 监听锚点链接改变| (currentActiveLink: string) => void| | 1.5.0 |
| click| click 事件的 handler| Function(e: MouseEvent, link: Object)| |  |
#### [](https://www.antdv.com/components/anchor-cn)#### 属性

| 成员| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| href| 锚点链接| string| |  |
| target| 该属性指定在何处显示链接的资源。| string| | 1.5.0 |
| title| 文字内容| string|slot| |  |
`,
  "a-breadcrumb": `#### [访问](https://www.antdv.com/components/breadcrumb-cn)
#### 属性

| 参数| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| itemRender| 自定义链接函数，和 vue-router 配置使用， 也可使用 #itemRender="props"| ({route, params, routes, paths}) => vNode| | - |
| params| 路由的参数| object| | - |
| routes| router 的路由栈信息| routes[]| | - |
| separator| 分隔符自定义| string|slot| | '/' |
`,
  "a-breadcrumb-item": `#### [访问](https://www.antdv.com/components/breadcrumb-cn)
#### 属性

| 参数| 参数| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| href| 链接的目的地| string| -| 1.5.0 |
| overlay| 下拉菜单的内容| Menu | () => Menu| -| 1.5.0 |
#### 事件

| 事件名称| 说明| 回调参数| 版本|  |
| :--- | :--- | :--- | :--- | :--- |
| click| 单击事件| (e:MouseEvent)=>void| -| 1.5.0 |

| 参数| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- |
| -| -| -| - |
`,
  "a-routes": `#### [访问](https://www.antdv.com/components/breadcrumb-cn)
#### 属性
`,
  "a-dropdown": `#### [访问](https://www.antdv.com/components/dropdown-cn)
#### 属性

| 参数| 说明| 类型| 默认值|  |
| :--- | :--- | :--- | :--- | :--- |
| align| 该值将合并到 placement 的配置中，设置参考 dom-align| Object| 无|  |
| arrow| 下拉框箭头是否显示| boolean | { pointAtCenter: boolean }| false| 3.3.0 |
| destroyPopupOnHide| 关闭后是否销毁 Dropdown| boolean| false| 3.0 |
| disabled| 菜单是否禁用| boolean| -|  |
| getPopupContainer| 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。| Function(triggerNode)| () => document.body|  |
| overlay(v-slot)| 菜单| Menu| -|  |
| overlayClassName| 下拉根元素的类名称| string| -|  |
| overlayStyle| 下拉根元素的样式| object| -|  |
| placement| 菜单弹出位置| bottomLeft | bottom | bottomRight | topLeft | top | topRight| bottomLeft|  |
| trigger| 触发下拉的行为, 移动端不支持 hover| Array<click|hover|contextmenu>| ['hover']|  |
| open(v-model)| 菜单是否显示| boolean| -|  |
#### 事件

| 事件名称| 说明| 回调参数| 版本 |
| :--- | :--- | :--- | :--- |
| openChange| 菜单显示状态改变时调用，参数为 visible。点击菜单按钮导致的消失不会触发| function(open)| 4.0 |
`,
  "a-dropdown-button": `#### [访问](https://www.antdv.com/components/dropdown-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| disabled| 菜单是否禁用| boolean| -|  |
| icon| 右侧的 icon| VNode | slot| -| 1.5.0 |
| loading| 设置按钮载入状态| boolean | { delay: number }| false| 3.0 |
| overlay(v-slot)| 菜单| Menu| -|  |
| placement| 菜单弹出位置| bottomLeft | bottom | bottomRight | topLeft | top | topRight| bottomLeft|  |
| size| 按钮大小，和 Button 一致| string| 'default'|  |
| trigger| 触发下拉的行为| Array<click|hover|contextmenu>| ['hover']|  |
| type| 按钮类型，和 Button 一致| string| 'default'|  |
| open(v-model)| 菜单是否显示| boolean| -|  |
#### 事件

| 事件名称| 说明| 回调参数| 版本 |
| :--- | :--- | :--- | :--- |
| click| 点击左侧按钮的回调，和 Button 一致| Function|  |
| openChange| 菜单显示状态改变时调用，参数为 visible。点击菜单按钮导致的消失不会触发| function(open)| 4.0 |
`,
  "a-menu": `#### [访问](https://www.antdv.com/components/menu-cn)
#### 属性

| 参数| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| forceSubMenuRender| 在子菜单展示之前就渲染进 DOM| boolean| false |
| inlineCollapsed| inline 时菜单是否收起状态| boolean| - |
| inlineIndent| inline 模式的菜单缩进宽度| number| 24 |
| items| 菜单内容| ItemType[]| - |
| mode| 菜单类型，现在支持垂直、水平、和内嵌模式三种| vertical | horizontal | inline| vertical |
| multiple| 是否允许多选| boolean| false |
| openKeys(v-model)| 当前展开的 SubMenu 菜单项 key 数组| (string | number)[]|  |
| overflowedIndicator| 用于自定义 Menu 水平空间不足时的省略收缩的图标| slot| <EllipsisOutlined /> |
| selectable| 是否允许选中| boolean| true |
| selectedKeys(v-model)| 当前选中的菜单项 key 数组| (string | number)[]|  |
| subMenuCloseDelay| 用户鼠标离开子菜单后关闭延时，单位：秒| number| 0.1 |
| subMenuOpenDelay| 用户鼠标进入子菜单后开启延时，单位：秒| number| 0 |
| theme| 主题颜色| light | dark| light |
| triggerSubMenuAction| 修改 Menu 子菜单的触发方式| click | hover| hover |
#### 事件

| 事件名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| click| 点击 MenuItem 调用此函数| function({ item, key, keyPath }) |
| deselect| 取消选中时调用，仅在 multiple 生效| function({ item, key, selectedKeys }) |
| openChange| SubMenu 展开/关闭的回调| function(openKeys: (string | number)[]) |
| select| 被选中时调用| function({ item, key, selectedKeys }) |
`,
  "a-menu-item": `#### [访问](https://www.antdv.com/components/menu-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| disabled| 是否禁用| boolean| false|  |
| icon| 菜单图标| slot| | 2.8.0 |
| key| item 的唯一标志| string | number| |  |
| title| 设置收缩时展示的悬浮标题| string | slot| |  |

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| danger| 展示错误状态样式| boolean| false|  |
| disabled| 是否禁用| boolean| false|  |
| icon| 菜单图标| VueNode|(item: MenuItemType)=>VueNode| -|  |
| key| item 的唯一标志| string | number| -|  |
| label| 菜单项标题| VueNode| -|  |
| title| 设置收缩时展示的悬浮标题| string| -|  |

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| children| 子菜单的菜单项| ItemType[]| -|  |
| disabled| 是否禁用| boolean| false|  |
| icon| 菜单图标| VueNode|(item: SubMenuType)=>VueNode| -|  |
| key| 唯一标志| string | number| -|  |
| label| 菜单项标题| VueNode| -|  |
| popupClassName| 子菜单样式，mode="inline" 时无效| string| -|  |
| popupOffset| 子菜单偏移量，mode="inline" 时无效| [number, number]| -|  |
| onTitleClick| 点击子菜单标题| function({ key, domEvent })| -|  |
| theme| 设置子菜单的主题，默认从 Menu 上继承| light | dark| -|  |

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| children| 分组的菜单项| MenuItemType[]| -|  |
| label| 分组标题| VueNode| -|  |

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| dashed| 是否虚线| boolean| false|  |
`,
  "a-menu-sub-menu": `#### [访问](https://www.antdv.com/components/menu-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| disabled| 是否禁用| boolean| false|  |
| expandIcon| 自定义 Menu 展开收起图标| slot| 箭头图标|  |
| icon| 菜单图标| slot| | 2.8.0 |
| key| 唯一标志, 必填| string | number| |  |
| popupClassName| 子菜单样式| string| | 1.5.0 |
| popupOffset| 子菜单偏移量，mode="inline" 时无效| [number, number]| -|  |
| title| 子菜单项值| string|slot| |  |
#### 事件

| 事件名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| titleClick| 点击子菜单标题| ({ key, domEvent }) |
`,
  "a-menu-item-group": `#### [访问](https://www.antdv.com/components/menu-cn)
#### 属性

| 参数| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| title| 分组标题| string|slot|  |
`,
  "a-menu-divider": `#### [访问](https://www.antdv.com/components/menu-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| dashed| 是否虚线| boolean| false| 3.0 |
`,
  "a-page-header": `#### [访问](https://www.antdv.com/components/page-header-cn)
#### 属性

| 参数| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| avatar| 标题栏旁的头像| avatar props| - |
| backIcon| 自定义 back icon ，如果为 false 不渲染 back icon| string|slot| <ArrowLeft /> |
| breadcrumb| 面包屑的配置| breadcrumb| - |
| extra| 操作区，位于 title 行的行尾| string|slot| - |
| footer| PageHeader 的页脚，一般用于渲染 TabBar| string|slot| - |
| ghost| pageHeader 的类型，将会改变背景颜色| boolean| true |
| subTitle| 自定义的二级标题文字| string|slot| - |
| tags| title 旁的 tag 列表| Tag[] | Tag| - |
| title| 自定义标题文字| string|slot| - |
#### 事件

| 事件名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| back| 返回按钮的点击事件| function(e) |
`,
  "a-pagination": `#### [访问](https://www.antdv.com/components/pagination-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| current(v-model)| 当前页数| number| -|  |
| defaultPageSize| 默认的每页条数| number| 10|  |
| disabled| 禁用分页| boolean| -| 1.5.0 |
| hideOnSinglePage| 只有一页时是否隐藏分页器| boolean| false|  |
| itemRender| 用于自定义页码的结构，可用于优化 SEO| ({page, type: 'page' | 'prev' | 'next', originalElement}) => vNode | v-slot| -|  |
| pageSize(v-model)| 每页条数| number| -|  |
| pageSizeOptions| 指定每页可以显示多少条| string[] | number[]| ['10', '20', '50', '100']|  |
| responsive| 当 size 未指定时，根据屏幕宽度自动调整尺寸| boolean| -| 3.1 |
| showLessItems| 是否显示较少页面内容| boolean| false| 1.5.0 |
| showQuickJumper| 是否可以快速跳转至某页| boolean| false|  |
| showSizeChanger| 是否展示 pageSize 切换器，当 total 大于 50 时默认为 true| boolean| -|  |
| showTotal| 用于显示数据总量和当前数据顺序| Function(total, range)| -|  |
| simple| 当添加该属性时，显示为简单分页| boolean| -|  |
| size| 当为「small」时，是小尺寸分页| string| ""|  |
| total| 数据总数| number| 0|  |
#### 事件

| 事件名称| 说明| 回调参数|  |
| :--- | :--- | :--- | :--- |
| change| 页码或 pageSize 改变的回调，参数是改变后的页码及每页条数| Function(page, pageSize)| noop |
| showSizeChange| pageSize 变化的回调| Function(current, size)| noop |
`,
  "a-steps": `#### [访问](https://www.antdv.com/components/steps-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| current (v-model)| 指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 status 属性覆盖状态, 1.5.0 后支持 v-model| number| 0|  |
| direction| 指定步骤条方向。目前支持水平（horizontal）和竖直（vertical）两种方向| string| horizontal|  |
| initial| 起始序号，从 0 开始记数| number| 0|  |
| labelPlacement| 指定标签放置位置，默认水平放图标右侧，可选vertical放图标下方| string| horizontal|  |
| percent| 当前 process 步骤显示的进度条进度（只对基本类型的 Steps 生效）| number| -| 3.0 |
| progressDot| 点状步骤条，可以设置为一个 作用域插槽,labelPlacement 将强制为vertical| Boolean or v-slot:progressDot="{index, status, title, description, prefixCls, iconDot}"| false|  |
| responsive| 当屏幕宽度小于 532px 时自动变为垂直模式| boolean| true| 3.0 |
| size| 指定大小，目前支持普通（default）和迷你（small）| string| default|  |
| status| 指定当前步骤的状态，可选 wait process finish error| string| process|  |
| type| 步骤条类型，有 default 和 navigation 两种| string| default| 1.5.0 |
| items| 配置选项卡内容| StepItem[]| []|  |

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| current| 指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 status 属性覆盖状态| number| 0|  |
| initial| 起始序号，从 0 开始记数| number| 0|  |
| status| 指定当前步骤的状态，可选 wait process finish error| string| process|  |
| items| 配置选项卡内容，不支持 icon subtitle| StepItem| []|  |
#### 事件

| 事件名称| 说明| 回调参数| 版本|  |
| :--- | :--- | :--- | :--- | :--- |
| change| 点击切换步骤时触发| (current) => void| -| 1.5.0 |
`,
  "a-steps-step": `#### [访问](https://www.antdv.com/components/steps-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| description| 步骤的详情描述，可选| string | slot| -|  |
| disabled| 禁用点击| boolean| false| 1.5.0 |
| icon| 步骤图标的类型，可选| string | slot| -|  |
| status| 指定状态。当不配置该属性时，会使用 Steps 的 current 来自动指定状态。可选：wait process finish error| string| wait|  |
| subTitle| 子标题| string | slot| -| 1.5.0 |
| title| 标题| string | slot| -|  |
`,
  "a-auto-complete": `#### [访问](https://www.antdv.com/components/auto-complete-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| allowClear| 支持清除, 单选模式有效| boolean| false|  |
| autofocus| 自动获取焦点| boolean| false|  |
| backfill| 使用键盘选择选项的时候把选中项回填到输入框中| boolean| false|  |
| bordered| 是否有边框| boolean| true| 4.0 |
| clearIcon| 使用插槽自定义清除按钮| slot| <CloseCircleFilled />| 4.0 |
| default (自定义输入框)| 自定义输入框| slot| <Input />|  |
| defaultActiveFirstOption| 是否默认高亮第一个选项。| boolean| true|  |
| defaultOpen| 是否默认展开下拉菜单| boolean| -|  |
| disabled| 是否禁用| boolean| false|  |
| popupClassName| 下拉菜单的 className 属性| string| -| 4.0 |
| dropdownMatchSelectWidth| 下拉菜单和选择器同宽。默认将设置 min-width，当值小于选择框宽度时会被忽略。false 时会关闭虚拟滚动| boolean | number| true|  |
| dropdownMenuStyle| dropdown 菜单自定义样式| object| | 1.5.0 |
| filterOption| 是否根据输入项进行筛选。当其为一个函数时，会接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false。| boolean or function(inputValue, option)| true|  |
| open| 是否展开下拉菜单| boolean| -|  |
| option| 通过 option 插槽，自定义节点| v-slot:option="{value, label, [disabled, key, title]}"| -| 3.0 |
| options| 自动完成的数据源| DataSourceItemType[]| |  |
| placeholder| 输入框提示| string | slot| -|  |
| status| 设置校验状态| 'error' | 'warning'| -| 3.3.0 |
| v-model:value| 指定当前选中的条目| string|string[]|{ key: string, label: string|vNodes }|Array<{ key: string, label: string|vNodes }>| 无|  |
#### 事件

| 事件名称| 说明| 回调参数| 版本 |
| :--- | :--- | :--- | :--- |
| blur| 失去焦点时的回调| function()|  |
| change| 选中 option，或 input 的 value 变化时，调用此函数| function(value)|  |
| dropdownVisibleChange| 展开下拉菜单的回调| function(open)|  |
| focus| 获得焦点时的回调| function()|  |
| search| 搜索补全项的时候调用| function(value)|  |
| select| 被选中时调用，参数为选中项的 value 值| function(value, option)|  |
| clear| 清除内容时回调| function| - |
#### 方法

| 名称| 描述| 版本 |
| :--- | :--- | :--- |
| blur()| 移除焦点|  |
| focus()| 获取焦点|  |
`,
  "a-cascader": `#### [访问](https://www.antdv.com/components/cascader-cn)
#### 属性

| 参数| 说明| 类型| 默认值| Version |
| :--- | :--- | :--- | :--- | :--- |
| allowClear| 是否支持清除| boolean| true|  |
| autofocus| 自动获取焦点| boolean| false|  |
| bordered| 是否有边框| boolean| true| 3.2 |
| clearIcon| 自定义的选择框清空图标| slot| -| 3.2 |
| changeOnSelect| （单选时生效）当此项为 true 时，点选每级菜单选项值都会发生变化，具体见上面的演示| boolean| false|  |
| defaultValue| 默认的选中项| string[] | number[]| []|  |
| disabled| 禁用| boolean| false|  |
| displayRender| 选择后展示的渲染函数,可使用 #displayRender="{labels, selectedOptions}"| ({labels, selectedOptions}) => VNode| labels => labels.join(' / ')|  |
| popupClassName| 自定义浮层类名| string| -| 4.0 |
| dropdownStyle| 自定义浮层样式| CSSProperties| {}| 3.0 |
| expandIcon| 自定义次级菜单展开图标| slot| -| 3.0 |
| expandTrigger| 次级菜单的展开方式| click | hover| 'click'|  |
| fieldNames| 自定义 options 中 label value children 的字段| object| { label: 'label', value: 'value', children: 'children' }|  |
| getPopupContainer| 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。| Function(triggerNode)| () => document.body|  |
| loadData| 用于动态加载选项，无法与 showSearch 一起使用| (selectedOptions) => void| -|  |
| maxTagCount| 最多显示多少个 tag，响应式模式会对性能产生损耗| number | responsive| -| 3.0 |
| maxTagPlaceholder| 隐藏 tag 时显示的内容| v-slot | function(omittedValues)| -| 3.0 |
| multiple| 支持多选节点| boolean| -| 3.0 |
| notFoundContent| 当下拉列表为空时显示的内容| string | slot| 'Not Found'|  |
| open| 控制浮层显隐| boolean| -| 3.0 |
| options| 可选项数据源| Option[]| -|  |
| placeholder| 输入框占位文本| string| '请选择'|  |
| placement| 浮层预设位置| bottomLeft | bottomRight | topLeft | topRight| bottomLeft| 3.0 |
| showCheckedStrategy| 定义选中项回填的方式。Cascader.SHOW_CHILD: 只显示选中的子节点。Cascader.SHOW_PARENT: 只显示父节点（当父节点下所有子节点都选中时）。| Cascader.SHOW_PARENT | Cascader.SHOW_CHILD| Cascader.SHOW_PARENT| 3.3.0 |
| removeIcon| 自定义的多选框清除图标| slot| -| 3.2 |
| searchValue| 设置搜索的值，需要与 showSearch 配合使用| string| -| 3.0 |
| showSearch| 在选择框中显示搜索框| boolean | object| false|  |
| status| 设置校验状态| 'error' | 'warning'| -| 3.3.0 |
| size| 输入框大小| large | default | small| default|  |
| suffixIcon| 自定义的选择框后缀图标| string | VNode | slot| -|  |
| tagRender| 自定义 tag 内容，多选时生效| slot| -| 3.0 |
| value(v-model)| 指定选中项| string[] | number[]| -|  |
`,
  "a-show-search": `#### [访问](https://www.antdv.com/components/cascader-cn)
#### 属性

| 参数| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| filter| 接收 inputValue path 两个参数，当 path 符合筛选条件时，应返回 true，反之则返回 false。| function(inputValue, path): boolean|  |
| limit| 搜索结果展示数量| number | false| 50 |
| matchInputWidth| 搜索结果列表是否与输入框同宽| boolean|  |
| render| 用于渲染 filter 后的选项,可使用 #showSearchRender="{inputValue, path}"| function({inputValue, path}): VNode|  |
| sort| 用于排序 filter 后的选项| function(a, b, inputValue)|  |
#### 事件

| 事件名称| 说明| 回调参数| 版本|  |
| :--- | :--- | :--- | :--- | :--- |
| change| 选择完成后的回调| (value, selectedOptions) => void| -|  |
| dropdownVisibleChange| 显示/隐藏浮层的回调| (value) => void| -| 3.0 |
| search| 监听搜索，返回输入的值| (value) => void| -| 3.0 |
#### 方法

| 名称| 描述 |
| :--- | :--- |
| blur()| 移除焦点 |
| focus()| 获取焦点 |
`,
  "a-checkbox": `#### [访问](https://www.antdv.com/components/checkbox-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| autofocus| 自动获取焦点| boolean| false|  |
| checked(v-model)| 指定当前是否选中| boolean| false|  |
| disabled| 失效状态| boolean| false|  |
| indeterminate| 设置 indeterminate 状态，只负责样式控制| boolean| false|  |
| value| 与 CheckboxGroup 组合使用时的值| boolean | string | number| -|  |
#### 事件

| 事件名称| 说明| 回调参数| 版本|  |
| :--- | :--- | :--- | :--- | :--- |
| change| 变化时回调函数| Function(e:Event)| -|  |

#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| disabled| 整组失效| boolean| false|  |
| name| CheckboxGroup 下所有 input[type="checkbox"] 的 name 属性| string| -| 1.5.0 |
| options| 指定可选项，可以通过 slot="label" slot-scope="option" 定制label| string[] | Array<{ label: string value: string disabled?: boolean, indeterminate?: boolean, onChange?: function }>| []|  |
| value(v-model)| 指定选中的选项| (boolean | string | number)[]| []|  |
#### 事件

| 事件名称| 说明| 回调参数| 版本|  |
| :--- | :--- | :--- | :--- | :--- |
| change| 变化时回调函数| Function(checkedValue)| -|  |
#### 方法

| 名称| 描述| 版本 |
| :--- | :--- | :--- |
| blur()| 移除焦点|  |
| focus()| 获取焦点|  |
`,
  "a-date-picker": `#### [访问](https://www.antdv.com/components/date-picker-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| allowClear| 是否显示清除按钮| boolean| true|  |
| autofocus| 自动获取焦点| boolean| false|  |
| bordered| 是否有边框| boolean| true|  |
| dateRender| 自定义日期单元格的内容| v-slot:dateRender="{current, today}"| -|  |
| disabled| 禁用| boolean| false|  |
| disabledDate| 不可选择的日期| (currentDate: dayjs) => boolean| -|  |
| format| 设置日期格式，为数组时支持多格式匹配，展示以第一个为准。配置参考 dayjs，支持自定义格式| formatType| YYYY-MM-DD|  |
| dropdownClassName| 额外的弹出日历 className| string| -|  |
| getPopupContainer| 定义浮层的容器，默认为 body 上新建 div| function(trigger)| -|  |
| inputReadOnly| 设置输入框为只读（避免在移动设备上打开虚拟键盘）| boolean| false|  |
| locale| 国际化配置| object| 默认配置| - |
| mode| 日期面板的状态| time | date | month | year | decade| -|  |
| nextIcon| 自定义下一个图标| slot| -| 3.0 |
| open| 控制弹层是否展开| boolean| -|  |
| picker| 设置选择器类型| date | week | month | quarter | year| date| quarter |
| placeholder| 输入框提示文字| string | [string, string]| -|  |
| placement| 选择框弹出的位置| bottomLeft bottomRight topLeft topRight| bottomLeft| 3.3.0 |
| popupStyle| 额外的弹出日历样式| CSSProperties| {}|  |
| prevIcon| 自定义上一个图标| slot| -| 3.0 |
| presets| 预设时间范围快捷选择| { label: slot, value: dayjs }[]| -| 4.0 |
| size| 输入框大小，large 高度为 40px，small 为 24px，默认是 32px| large | middle | small| -|  |
| status| 设置校验状态| 'error' | 'warning'| -| 3.3.0 |
| suffixIcon| 自定义的选择框后缀图标| v-slot:suffixIcon| -|  |
| superNextIcon| 自定义 << 切换图标| slot| -| 3.0 |
| superPrevIcon| 自定义 >> 切换图标| slot| -| 3.0 |
| valueFormat| 可选，绑定值的格式，对 value、defaultValue、defaultPickerValue 起作用。不指定则绑定值为 dayjs 对象| string，具体格式| -|  |
#### 事件

| 事件名称| 说明| 回调参数|  |
| :--- | :--- | :--- | :--- |
| openChange| 弹出日历和关闭日历的回调| function(status)|  |
| panelChange| 日期面板变化时的回调| function(value, mode)| - |
#### 方法

| 名称| 描述 |
| :--- | :--- |
| blur()| 移除焦点 |
| focus()| 获取焦点 |

#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| defaultPickerValue| 默认面板日期| dayjs| -|  |
| disabledTime| 不可选择的时间| function(date)| -|  |
| format| 展示的日期格式，配置参考 dayjs| formatType| YYYY-MM-DD|  |
| renderExtraFooter| 在面板中添加额外的页脚| v-slot:renderExtraFooter="mode"| -|  |
| showNow| 当设定了 showTime 的时候，面板是否显示“此刻”按钮| boolean| -|  |
| showTime| 增加时间选择功能| Object | boolean| TimePicker Options|  |
| showTime.defaultValue| 设置用户选择日期时默认的时分秒，例子| dayjs| dayjs()|  |
| showToday| 是否展示“今天”按钮| boolean| true|  |
| value(v-model)| 日期| dayjs| -|  |
#### 事件

| 事件名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| change| 时间发生变化的回调| function(date: dayjs | string, dateString: string) |
| ok| 点击确定按钮的回调| function(date: dayjs | string) |

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| format| 展示的日期格式，配置参考 dayjs| formatType| YYYY|  |

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| format| 展示的日期格式，配置参考 dayjs| formatType| YYYY-\QQ|  |

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| format| 展示的日期格式，配置参考 dayjs| formatType| YYYY-MM|  |
| monthCellRender| 自定义的月份内容渲染方法| v-slot:monthCellRender="{current, locale}"| -|  |

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| format| 展示的日期格式，配置参考 dayjs| formatType| YYYY-wo|  |
`,
  "a-range-picker": `#### [访问](https://www.antdv.com/components/date-picker-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| allowEmpty| 允许起始项部分为空| [boolean, boolean]| [false, false]|  |
| dateRender| 自定义日期单元格的内容。| v-slot:dateRender="{current: dayjs, today: dayjs, info: { range: start | end }}"| -|  |
| defaultPickerValue| 默认面板日期| dayjs[]| -|  |
| disabled| 禁用起始项| [boolean, boolean]| -|  |
| disabledTime| 不可选择的时间| function(date: dayjs, partial: start | end)| -|  |
| format| 展示的日期格式| formatType| YYYY-MM-DD HH:mm:ss|  |
| presets| 预设时间范围快捷选择| { label: slot, value: dayjs[] }[]| -| 4.0 |
| ranges| 预设时间范围快捷选择| { [range: string]: dayjs[] } | { [range: string]: () => dayjs[] }| -|  |
| renderExtraFooter| 在面板中添加额外的页脚| v-slot:renderExtraFooter="mode"| -|  |
| separator| 设置分隔符| string | v-slot:separator| <SwapRightOutlined />|  |
| showTime| 增加时间选择功能| Object|boolean| TimePicker Options|  |
| showTime.defaultValue| 设置用户选择日期时默认的时分秒，例子| dayjs[]| [dayjs(), dayjs()]|  |
| value(v-model)| 日期| dayjs[]| -|  |
#### 事件

| 事件名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| calendarChange| 待选日期发生变化的回调| function(dates: [dayjs, dayjs] | [string, string], dateStrings: [string, string], info: { range:start|end }) |
| change| 日期范围发生变化的回调| function(dates: [dayjs, dayjs] | [string, string], dateStrings: [string, string]) |
| ok| 点击确定按钮的回调| function(dates: [dayjs, dayjs] | [string, string]) |
`,
  "a-form": `#### [访问](https://www.antdv.com/components/form-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| colon| 配置 Form.Item 的 colon 的默认值 (只有在属性 layout 为 horizontal 时有效)| boolean| true|  |
| disabled| 设置表单组件禁用，仅对 antdv 组件有效| boolean| false| 4.0 |
| hideRequiredMark| 隐藏所有表单项的必选标记| Boolean| false|  |
| labelAlign| label 标签的文本对齐方式| 'left' | 'right'| 'right'|  |
| labelCol| label 标签布局，同 <Col> 组件，设置 span offset 值，如 {span: 3, offset: 12} 或 sm: {span: 3, offset: 12}| object| |  |
| labelWrap| label 标签的文本换行方式| boolean| false| 3.0 |
| layout| 表单布局| 'horizontal'|'vertical'|'inline'| 'horizontal'|  |
| model| 表单数据对象| object| |  |
| name| 表单名称，会作为表单字段 id 前缀使用| string| -| 2.0.0 |
| noStyle| 为 true 时不带样式，作为纯字段控件使用| boolean| false| 3.0 |
| rules| 表单验证规则| object| |  |
| scrollToFirstError| 提交失败自动滚动到第一个错误字段| boolean | options| false| 2.0.0 |
| validateOnRuleChange| 是否在 rules 属性改变后立即触发一次验证| boolean| true|  |
| validateTrigger| 统一设置字段校验规则| string | string[]| change| 2.0.0 |
| wrapperCol| 需要为输入控件设置布局样式时，使用该属性，用法同 labelCol| object| |  |
#### 事件

| 事件名称| 说明| 回调参数| 版本|  |
| :--- | :--- | :--- | :--- | :--- |
| finish| 提交表单且数据验证成功后回调事件| function(values)| -| 2.0.0 |
| finishFailed| 提交表单且数据验证失败后回调事件| function({ values, errorFields, outOfDate })| -| 2.0.0 |
| submit| 数据验证成功后回调事件| Function(e:Event)| ｜|  |
| validate| 任一表单项被校验后触发| Function(name, status, errorMsgs)| |  |
#### 方法

| 方法名| 说明| 参数| 版本 |
| :--- | :--- | :--- | :--- |
| clearValidate| 移除表单项的校验结果。传入待移除的表单项的 name 属性或者 name 组成的数组，如不传则移除整个表单的校验结果| (nameList?: NamePath[]) => void|  |
| resetFields| 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果| (nameList?: NamePath[]) => void|  |
| scrollToField| 滚动到对应字段位置| (name: NamePath, options: [ScrollOptions]) => void|  |
| validate| 触发表单验证, 同 validateFields| (nameList?: NamePath[]) => Promise|  |
| validateFields| 触发表单验证| (nameList?: NamePath[]) => Promise|  |
`,
  "a-form-item": `#### [访问](https://www.antdv.com/components/form-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| autoLink| 是否自动关联表单域，对于大部分情况都可以使用自动关联，如果不满足自动关联的条件，可以手动关联，参见下方注意事项| boolean| true|  |
| colon| 配合 label 属性使用，表示是否显示 label 后面的冒号| boolean| true|  |
| extra| 额外的提示信息，和 help 类似，当需要错误信息和提示文案同时出现时，可以使用这个。| string|slot| |  |
| hasFeedback| 配合 validateStatus 属性使用，展示校验状态图标，建议只配合 Input 组件使用| boolean| false|  |
| help| 提示信息，如不设置，则会根据校验规则自动生成| string|slot| |  |
| htmlFor| 设置子元素 label htmlFor 属性| string| |  |
| label| label 标签的文本| string|slot| |  |
| labelAlign| 标签文本对齐方式| 'left' | 'right'| 'right'|  |
| labelCol| label 标签布局，同 <Col> 组件，设置 span offset 值，如 {span: 3, offset: 12} 或 sm: {span: 3, offset: 12}| object| |  |
| name| 表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的| NamePath| |  |
| required| 是否必填，如不设置，则会根据校验规则自动生成| boolean| false|  |
| rules| 表单验证规则| object | array| |  |
| tooltip| 配置提示信息| string | slot| | 4.0.4 |
| validateFirst| 当某一规则校验不通过时，是否停止剩下的规则的校验。| boolean| false| 2.0.0 |
| validateStatus| 校验状态，如不设置，则会根据校验规则自动生成，可选：'success' 'warning' 'error' 'validating'| string| |  |
| validateTrigger| 设置字段校验的时机| string | string[]| change| 2.0.0 |
| wrapperCol| 需要为输入控件设置布局样式时，使用该属性，用法同 labelCol| object| |  |

| 参数| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| enum| 枚举类型| string| - |
| len| 字段长度| number| - |
| max| 最大长度| number| - |
| message| 校验文案| string| - |
| min| 最小长度| number| - |
| pattern| 正则表达式校验| RegExp| - |
| required| 是否必选| boolean| false |
| transform| 校验前转换字段值| function(value) => transformedValue:any| - |
| trigger| 校验触发的时机| 'blur' | 'change' | ['change', 'blur']| - |
| type| 内建校验类型，可选项| string| 'string' |
| validator| 自定义校验（注意，callback 必须被调用）| function(rule, value, callback)| - |
| whitespace| 必选时，空格是否会被视为错误| boolean| false |
`,
  "a-input": `#### [访问](https://www.antdv.com/components/input-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| addonAfter| 带标签的 input，设置后置标签| string|slot| |  |
| addonBefore| 带标签的 input，设置前置标签| string|slot| |  |
| allowClear| 可以点击清除图标删除内容| boolean| |  |
| bordered| 是否有边框| boolean| true| 3.0 |
| clearIcon| 自定义清除图标 （allowClear 为 true 时生效）| slot| <CloseCircleFilled />| 3.3.0 |
| defaultValue| 输入框默认内容| string| |  |
| disabled| 是否禁用状态，默认为 false| boolean| false|  |
| id| 输入框的 id| string| |  |
| maxlength| 最大长度| number| | 1.5.0 |
| prefix| 带有前缀图标的 input| string|slot| |  |
| showCount| 是否展示字数| boolean| false| 3.0 |
| status| 设置校验状态| 'error' | 'warning'| -| 3.3.0 |
| size| 控件大小。注：标准表单内的输入框大小限制为 middle。可选 large middle small| string| -|  |
| suffix| 带有后缀图标的 input| string|slot| |  |
| type| 声明 input 类型，同原生 input 标签的 type 属性，见：MDN(请直接使用 <a-textarea /> 代替 type="textarea")。| string| text|  |
| value(v-model)| 输入框内容| string| |  |
#### 事件

| 事件名称| 说明| 回调参数|  |
| :--- | :--- | :--- | :--- |
| change| 输入框内容变化时的回调| function(e)|  |
| pressEnter| 按下回车的回调| function(e)|  |
`,
  "a-text-area": `#### [访问](https://www.antdv.com/components/input-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本|  |
| :--- | :--- | :--- | :--- | :--- | :--- |
| allowClear| 可以点击清除图标删除内容| boolean| | 1.5.0|  |
| autosize| 自适应内容高度，可设置为 true | false 或对象：{ minRows: 2, maxRows: 6 }| boolean|object| false| |  |
| defaultValue| 输入框默认内容| string| | |  |
| showCount| 是否展示字数| boolean| false| |  |
| value(v-model)| 输入框内容| string| | |  |
#### 事件

| 事件名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| pressEnter| 按下回车的回调| function(e) |
`,
  "a-input-search": `#### [访问](https://www.antdv.com/components/input-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| enterButton| 是否有确认按钮，可设为按钮文字。该属性会与 addon 冲突。| boolean|slot| false|  |
| loading| 搜索 loading| boolean| | 1.5.0 |
#### 事件

| 事件名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| search| 点击搜索或按下回车键时的回调| function(value, event) |
`,
  "a-input-group": `#### [访问](https://www.antdv.com/components/input-cn)
#### 属性

| 参数| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| compact| 是否用紧凑模式| boolean| false |
| size| Input.Group 中所有的 Input 的大小，可选 large default small| string| default |

| 参数| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| visible(v-model)| 密码是否可见| boolean| false |
| iconRender| 自定义切换按钮| slot| - |
| visibilityToggle| 是否显示切换按钮或者控制密码显隐| boolean| true |
`,
  "a-input-number": `#### [访问](https://www.antdv.com/components/input-number-cn)
#### 属性

| 成员| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| addonAfter| 带标签的 input，设置后置标签| slot| -| 3.0 |
| addonBefore| 带标签的 input，设置前置标签| slot| -| 3.0 |
| autofocus| 自动获取焦点| boolean| false|  |
| bordered| 是否有边框| boolean| true| 3.0 |
| controls| 是否显示增减按钮| boolean| true| 3.0 |
| decimalSeparator| 小数点| string| -|  |
| defaultValue| 初始值| number| |  |
| disabled| 禁用| boolean| false|  |
| formatter| 指定输入框展示值的格式| function(value: number | string, info: { userTyping: boolean, input: string }): string| -| info: 3.0 |
| keyboard| 是否启用键盘快捷行为| boolean| true| 3.0 |
| max| 最大值| number| Infinity|  |
| min| 最小值| number| -Infinity|  |
| parser| 指定从 formatter 里转换回数字的方式，和 formatter 搭配使用| function( string): number| -|  |
| precision| 数值精度| number| -|  |
| prefix| 带有前缀图标的 input| slot| -| 3.0 |
| size| 输入框大小| string| 无|  |
| status| 设置校验状态| 'error' | 'warning'| -| 3.3.0 |
| step| 每次改变步数，可以为小数| number|string| 1|  |
| stringMode| 字符值模式，开启后支持高精度小数。同时 change 事件将返回 string 类型| boolean| false| 3.0 |
| upIcon| 自定义上箭头图标| slot| <UpOutlined />| 3.3.0 |
| downIcon| 自定义下箭头图标| slot| <DownOutlined />| 3.3.0 |
| value(v-model)| 当前值| number| |  |
#### 事件

| 事件名称| 说明| 回调参数| 版本 |
| :--- | :--- | :--- | :--- |
| change| 变化回调| Function(value: number | string)|  |
| pressEnter| 按下回车的回调| function(e)|  |
| step| 点击上下箭头的回调| (value: number, info: { offset: number, type: 'up' | 'down' }) => void| 3.0 |
#### 方法

| 名称| 描述 |
| :--- | :--- |
| blur()| 移除焦点 |
| focus()| 获取焦点 |
#### 事件
`,
  "a-mentions": `#### [访问](https://www.antdv.com/components/mentions-cn)
#### 属性

| 参数| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| autofocus| 自动获得焦点| boolean| false |
| defaultValue| 默认值| string|  |
| filterOption| 自定义过滤逻辑| false | (input: string, option: OptionProps) => boolean|  |
| getPopupContainer| 指定建议框挂载的 HTML 节点| () => HTMLElement|  |
| notFoundContent| 当下拉列表为空时显示的内容| string | slot| 'Not Found' |
| placement| 弹出层展示位置| top | bottom| bottom |
| prefix| 设置触发关键字| string | string[]| '@' |
| split| 设置选中项前后分隔符| string| ' ' |
| status| 设置校验状态| 'error' | 'warning'| - |
| validateSearch| 自定义触发验证逻辑| (text: string, props: MentionsProps) => void|  |
| value(v-model)| 设置值| string|  |
| options| 选项配置| Options| [] |
| option| 通过 option 插槽，自定义节点| v-slot:option="option"| - |
#### 事件

| 事件名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| blur| 失去焦点的时回调| function |
| change| 值改变时触发| function(value: string) |
| focus| 获得焦点时回调| function |
| search| 文本框值变化时回调| function(value: string, prefix: string) |
| select| 选择选项时触发| function(option: OptionProps, prefix: string) |
#### 方法

| 名称| 描述 |
| :--- | :--- |
| blur()| 移除焦点 |
| focus()| 获取焦点 |

| 参数| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| value| 选择时填充的值| string| '' |

| 参数| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| value| 选择时填充的值| string| number |
| label| 选项的标题| VueNode| (o: Option)=> VueNode |
| disabled| 是否可选| boolean| - |
| class| css 类名| string| - |
| style| 选项样式| CSSProperties| - |
| payload| 其它数据| object| - |
`,
  "a-radio": `#### [访问](https://www.antdv.com/components/radio-cn)
#### 属性

#### 属性

| 名称| 描述 |
| :--- | :--- |
| blur()| 移除焦点 |
| focus()| 获取焦点 |
`,
  "a-radio-button": `#### [访问](https://www.antdv.com/components/radio-cn)
#### 属性

| 参数| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| autofocus| 自动获取焦点| boolean| false |
| checked(v-model)| 指定当前是否选中| boolean| false |
| disabled| 禁用 Radio| boolean| false |
| value| 根据 value 进行比较，判断是否选中| any| - |
`,
  "a-radio-group": `#### [访问](https://www.antdv.com/components/radio-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| buttonStyle| RadioButton 的风格样式，目前有描边和填色两种风格| outline | solid| outline|  |
| disabled| 禁选所有子单选器| boolean| false|  |
| name| RadioGroup 下所有 input[type="radio"] 的 name 属性| string| -|  |
| options| 以配置形式设置子元素| string[] | number[] | Array<{ label: string value: string disabled?: boolean }>| -|  |
| optionType| 用于设置 Radio options 类型| default | button| default| 3.0.0 |
| size| 大小，只对按钮样式生效| large | default | small| default|  |
| value(v-model)| 用于设置当前选中的值| any| -|  |
#### 事件

| 事件名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| change| 选项变化时的回调函数| Function(e:Event) |
#### 方法
`,
  "a-rate": `#### [访问](https://www.antdv.com/components/rate-cn)
#### 属性

| 属性| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| allowClear| 是否允许再次点击后清除| boolean| true |
| allowHalf| 是否允许半选| boolean| false |
| autofocus| 自动获取焦点| boolean| false |
| character| 自定义字符| string | slot| <StarOutlined /> |
| count| star 总数| number| 5 |
| disabled| 只读，无法进行交互| boolean| false |
| tooltips| 自定义每项的提示信息| string[]| - |
| value(v-model)| 当前数，受控值| number| - |
#### 事件

| 事件名称| 说明| 回调参数|  |
| :--- | :--- | :--- | :--- |
| blur| 失去焦点时的回调| Function()| - |
| change| 选择时的回调| Function(value: number)| - |
| focus| 获取焦点时的回调| Function()| - |
| hoverChange| 鼠标经过时数值变化的回调| Function(value: number)| - |
| keydown| 按键回调| Function(event)| - |
#### 方法

| 名称| 描述 |
| :--- | :--- |
| blur()| 移除焦点 |
| focus()| 获取焦点 |
`,
  "a-select": `#### [访问](https://www.antdv.com/components/select-cn)
#### 属性
#### [](https://www.antdv.com/components/select-cn)#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| allowClear| 支持清除| boolean| false|  |
| autoClearSearchValue| 是否在选中项后清空搜索框，只在 mode 为 multiple 或 tags 时有效。| boolean| true|  |
| autofocus| 默认获取焦点| boolean| false|  |
| bordered| 是否有边框| boolean| true|  |
| clearIcon| 自定义的多选框清空图标| VNode | slot| -|  |
| defaultActiveFirstOption| 是否默认高亮第一个选项。| boolean| true|  |
| defaultOpen| 是否默认展开下拉菜单| boolean| -|  |
| disabled| 是否禁用| boolean| false|  |
| popupClassName| 下拉菜单的 className 属性| string| -| 4.0 |
| dropdownMatchSelectWidth| 下拉菜单和选择器同宽。默认将设置 min-width，当值小于选择框宽度时会被忽略。false 时会关闭虚拟滚动| boolean | number| true|  |
| dropdownMenuStyle| dropdown 菜单自定义样式| object| -|  |
| dropdownRender| 自定义下拉框内容| ({menuNode: VNode, props}) => VNode | v-slot| -|  |
| dropdownStyle| 下拉菜单的 style 属性| object| -|  |
| fieldNames| 自定义节点 label、value、options 的字段| object| { label: label, value: value, options: options }| 3.0 |
| filterOption| 是否根据输入项进行筛选。当其为一个函数时，会接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false。| boolean | function(inputValue, option)| true|  |
| filterSort| 搜索时对筛选结果项的排序函数, 类似Array.sort里的 compareFunction| (optionA: Option, optionB: Option) => number| -| 3.0 |
| firstActiveValue| 默认高亮的选项| string | string[]| -|  |
| getPopupContainer| 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。| function(triggerNode)| () => document.body|  |
| labelInValue| 是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 string 变为 {key: string, label: vNodes, originLabel: any} 的格式, originLabel（3.1） 保持原始类型，如果通过 a-select-option children 构造的节点，该值是是个函数（即 a-select-option 的默认插槽）| boolean| false|  |
| listHeight| 设置弹窗滚动高度| number| 256|  |
| maxTagCount| 最多显示多少个 tag| number| -|  |
| maxTagPlaceholder| 隐藏 tag 时显示的内容| slot | function(omittedValues)| -|  |
| maxTagTextLength| 最大显示的 tag 文本长度| number| -|  |
| menuItemSelectedIcon| 自定义当前选中的条目图标| VNode | slot| -|  |
| mode| 设置 Select 的模式为多选或标签| 'multiple' | 'tags' | 'combobox'| -|  |
| notFoundContent| 当下拉列表为空时显示的内容| string|slot| Not Found|  |
| open| 是否展开下拉菜单| boolean| -|  |
| option| 通过 option 插槽，自定义节点| v-slot:option="{value, label, [disabled, key, title]}"| -| 2.2.5 |
| optionFilterProp| 搜索时过滤对应的 option 属性，不支持 children| string| value|  |
| optionLabelProp| 回填到选择框的 Option 的属性值，默认是 Option 的子元素。比如在子元素需要高亮效果时，此值可以设为 value。| string| children | label(设置 options 时)|  |
| options| options 数据，如果设置则不需要手动构造 selectOption 节点| Array<{value, label, [disabled, key, title]}>| []|  |
| placeholder| 选择框默认文字| string|slot| -|  |
| placement| 选择框弹出的位置| bottomLeft bottomRight topLeft topRight| bottomLeft| 3.3.0 |
| removeIcon| 自定义的多选框清除图标| VNode | slot| -|  |
| searchValue| 控制搜索文本| string| -|  |
| showArrow| 是否显示下拉小箭头| boolean| 单选为 true,多选为 false|  |
| showSearch| 配置是否可搜索| boolean| 单选为 false,多选为 true|  |
| size| 选择框大小，可选 large small| string| default|  |
| status| 设置校验状态| 'error' | 'warning'| -| 3.3.0 |
| suffixIcon| 自定义的选择框后缀图标| VNode | slot| -|  |
| tagRender| 自定义 tag 内容 render，仅在 mode 为 multiple 或 tags 时生效| slot | (props) => any| -| 3.0 |
| tokenSeparators| 自动分词的分隔符，仅在 mode="tags" 时生效| string[]| -|  |
| value(v-model)| 指定当前选中的条目| string|string[]|number|number[]| -|  |
| virtual| 设置 false 时关闭虚拟滚动| boolean| true| 3.0 |
#### 事件

| 事件名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| blur| 失去焦点的时回调| function |
| change| 选中 option，或 input 的 value 变化（combobox 模式下）时，调用此函数| function(value, option:Option | Array<Option>) |
| deselect| 取消选中时调用，参数为选中项的 value (或 key) 值，仅在 multiple 或 tags 模式下生效| function(value，option:Option) |
| dropdownVisibleChange| 展开下拉菜单的回调| function(open) |
| focus| 获得焦点时回调| function |
| inputKeyDown| 键盘按下时回调| function |
| mouseenter| 鼠标移入时回调| function |
| mouseleave| 鼠标移出时回调| function |
| popupScroll| 下拉列表滚动时的回调| function |
| search| 文本框值变化时回调| function(value: string) |
| select| 被选中时调用，参数为选中项的 value (或 key) 值| function(value, option:Option) |

#### 属性

| 名称| 说明 |
| :--- | :--- |
| blur()| 取消焦点 |
| focus()| 获取焦点 |
#### [](https://www.antdv.com/components/select-cn)#### 属性

| 参数| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| class| Option 器类名| string| - |
| disabled| 是否禁用| boolean| false |
| key| 和 value 含义一致。如果 Vue 需要你设置此项，此项值与 value 的值相同，然后可以省略 value 设置| string|  |
| title| 选中该 Option 后，Select 的 title| string| - |
| value| 默认根据此属性值进行筛选| string|number| - |
#### [](https://www.antdv.com/components/select-cn)#### 属性

| 参数| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| key| | string| - |
| label| 组名| string|function(h)|slot| 无 |
`,
  "a-slider": `#### [访问](https://www.antdv.com/components/slider-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| autofocus| 自动获取焦点| boolean| false|  |
| disabled| 值为 true 时，滑块为禁用状态| boolean| false|  |
| dots| 是否只能拖拽到刻度上| boolean| false|  |
| included| marks 不为空对象时有效，值为 true 时表示值为包含关系，false 表示并列| boolean| true|  |
| mark| 自定义刻度标记| v-slot:mark| { point: number, label: any }| 3.0 |
| marks| 刻度标记，key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标签可以单独设置样式| object| { number: string|VNode } or { number: { style: object, label: string|VNode } } or { number: () => VNode }|  |
| max| 最大值| number| 100|  |
| min| 最小值| number| 0|  |
| range| 双滑块模式| boolean| false|  |
| reverse| 反向坐标轴| boolean| false| 1.5.0 |
| step| 步长，取值必须大于 0，并且可被 (max - min) 整除。当 marks 不为空对象时，可以设置 step 为 null，此时 Slider 的可选值仅有 marks 标出来的部分。| number|null| 1|  |
| value(v-model)| 设置当前取值。当 range 为 false 时，使用 number，否则用 [number, number]| number|number[]| |  |
| vertical| 值为 true 时，Slider 为垂直方向| Boolean| false|  |
| tipFormatter| Slider 会把当前值传给 tipFormatter，并在 Tooltip 中显示 tipFormatter 的返回值，若为 null，则隐藏 Tooltip。| Function|null| IDENTITY|  |
| tooltipPlacement| 设置 Tooltip 展示位置。参考 Tooltip。| string| | 1.5.0 |
| tooltipOpen| 值为true时，Tooltip 将会始终显示；否则始终不显示，哪怕在拖拽及移入时。| Boolean| | 4.0 |
| getTooltipPopupContainer| Tooltip 渲染父节点，默认渲染到 body 上。| Function| () => document.body| 1.5.0 |
#### 事件

| 事件名称| 说明| 回调参数|  |
| :--- | :--- | :--- | :--- |
| change| 当 Slider 的值发生改变时，会触发 change 事件，并把改变后的值作为参数传入。| Function(value)| NOOP |
| afterChange| 与 mouseup 触发时机一致，把当前值作为参数传入。| Function(value)| NOOP |
#### 方法

| 名称| 描述 |
| :--- | :--- |
| blur()| 移除焦点 |
| focus()| 获取焦点 |
`,
  "a-switch": `#### [访问](https://www.antdv.com/components/switch-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| autofocus| 组件自动获取焦点| boolean| false|  |
| checked(v-model)| 指定当前是否选中| checkedValue | unCheckedValue| false|  |
| checkedChildren| 选中时的内容| string|slot| |  |
| checkedValue| 选中时的值| boolean | string | number| true| 2.2.1 |
| disabled| 是否禁用| boolean| false|  |
| loading| 加载中的开关| boolean| false|  |
| size| 开关大小，可选值：default small| string| default|  |
| unCheckedChildren| 非选中时的内容| string|slot| |  |
| unCheckedValue| 非选中时的值| boolean | string | number| false| 2.2.1 |
#### 事件

| 事件名称| 说明| 回调参数|  |
| :--- | :--- | :--- | :--- |
| change| 变化时回调函数| Function(checked: boolean | string | number, event: Event)|  |
| click| 点击时回调函数| Function(checked: boolean | string | number, event: Event)|  |
#### 方法

| 名称| 描述 |
| :--- | :--- |
| blur()| 移除焦点 |
| focus()| 获取焦点 |
`,
  "a-time-picker": `#### [访问](https://www.antdv.com/components/time-picker-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| allowClear| 是否展示清除按钮| boolean| true|  |
| autofocus| 自动获取焦点| boolean| false|  |
| bordered| 是否有边框| boolean| true|  |
| clearIcon| 自定义的清除图标| v-slot:clearIcon| -|  |
| clearText| 清除按钮的提示文案| string| clear|  |
| disabled| 禁用全部操作| boolean| false|  |
| disabledTime| 不可选择的时间| DisabledTime| -| 3.3.0 |
| format| 展示的时间格式| string| HH:mm:ss|  |
| getPopupContainer| 定义浮层的容器，默认为 body 上新建 div| function(trigger)| -|  |
| hideDisabledOptions| 隐藏禁止选择的选项| boolean| false|  |
| hourStep| 小时选项间隔| number| 1|  |
| inputReadOnly| 设置输入框为只读（避免在移动设备上打开虚拟键盘）| boolean| false|  |
| minuteStep| 分钟选项间隔| number| 1|  |
| open(v-model)| 面板是否打开| boolean| false|  |
| placeholder| 没有值的时候显示的内容| string | [string, string]| 请选择时间|  |
| placement| 选择框弹出的位置| bottomLeft bottomRight topLeft topRight| bottomLeft|  |
| popupClassName| 弹出层类名| string| -|  |
| popupStyle| 弹出层样式对象| object| -|  |
| renderExtraFooter| 选择框底部显示自定义的内容| v-slot:renderExtraFooter| -|  |
| secondStep| 秒选项间隔| number| 1|  |
| showNow| 面板是否显示“此刻”按钮| boolean| -|  |
| status| 设置校验状态| 'error' | 'warning'| -| 3.3.0 |
| suffixIcon| 自定义的选择框后缀图标| v-slot:suffixIcon| -|  |
| use12Hours| 使用 12 小时制，为 true 时 format 默认为 h:mm:ss a| boolean| false|  |
| value(v-model)| 当前时间| dayjs| -|  |
| valueFormat| 可选，绑定值的格式，对 value、defaultValue 起作用。不指定则绑定值为 dayjs 对象| string，具体格式| -|  |
#### 事件

| 事件名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| change| 时间发生变化的回调| function(time: dayjs | string, timeString: string): void |
| openChange| 面板打开/关闭时的回调| (open: boolean): void |
#### 方法

| 名称| 描述 |
| :--- | :--- |
| blur()| 移除焦点 |
| focus()| 获取焦点 |
`,
  "a-time-range-picker": `#### [访问](https://www.antdv.com/components/time-picker-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| order| 始末时间是否自动排序| boolean| true|  |
| disabledTime| 不可选择的时间| RangeDisabledTime| -| 3.3.0 |
`,
  "a-transfer": `#### [访问](https://www.antdv.com/components/transfer-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| dataSource| 数据源，其中的数据将会被渲染到左边一栏中，targetKeys 中指定的除外。| [{key: string.isRequired,title: string.isRequired,description: string,disabled: bool}][]| []|  |
| disabled| 是否禁用| boolean| false|  |
| filterOption| 接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false。| (inputValue, option): boolean| |  |
| footer| 可以设置为一个 作用域插槽| slot="footer" slot-scope="props"| |  |
| listStyle| 两个穿梭框的自定义样式| CSSProperties| |  |
| locale| 各种语言| object| { itemUnit: '项', itemsUnit: '项', notFoundContent: '列表为空', searchPlaceholder: '请输入搜索内容' }|  |
| oneWay| 展示为单向样式| boolean| false| 3.0.0 |
| operations| 操作文案集合，顺序从上至下| string[]| ['>', '<']|  |
| operationStyle| 操作栏的自定义样式| CSSProperties| -| 3.0.0 |
| pagination| 使用分页样式，自定义渲染列表下无效| boolean | { pageSize: number, simple: boolean, showSizeChanger?: boolean, showLessItems?: boolean }| flase| 3.0.0 |
| render| 每行数据渲染函数，该函数的入参为 dataSource 中的项，返回值为 element。或者返回一个普通对象，其中 label 字段为 element，value 字段为 title| Function(record)| slot| |  |
| selectAllLabels| 自定义顶部多选框标题的集合| VueNode | ((info: { selectedCount: number; totalCount: number }) => VueNode);| -| 3.0.0 |
| selectedKeys(v-model)| 设置哪些项应该被选中| string[]| []|  |
| showSearch| 是否显示搜索框| boolean| false|  |
| showSelectAll| 是否展示全选勾选框| boolean| true|  |
| status| 设置校验状态| 'error' | 'warning'| -| 3.3.0 |
| targetKeys(v-model)| 显示在右侧框数据的 key 集合| string[]| []|  |
| titles| 标题集合，顺序从左至右| string[]| ['', '']|  |
#### 事件

| 事件名称| 说明| 回调参数| 版本 |
| :--- | :--- | :--- | :--- |
| change| 选项在两栏之间转移时的回调函数| (targetKeys, direction, moveKeys): void|  |
| scroll| 选项列表滚动时的回调函数| (direction, event): void|  |
| search| 搜索框内容时改变时的回调函数| (direction: 'left'|'right', value: string): void| - |
| selectChange| 选中项发生改变时的回调函数| (sourceSelectedKeys, targetSelectedKeys): void|  |
#### [](https://www.antdv.com/components/transfer-cn)#### 属性

| 参数| 说明| 类型| 版本 |
| :--- | :--- | :--- | :--- |
| direction| 渲染列表的方向| 'left' | 'right'|  |
| disabled| 是否禁用列表| boolean|  |
| filteredItems| 过滤后的数据| TransferItem[]|  |
| itemSelect| 勾选条目| (key: string, selected: boolean)|  |
| itemSelectAll| 勾选一组条目| (keys: string[], selected: boolean)|  |
| selectedKeys| 选中的条目| string[]|  |
`,
  "a-tree-select": `#### [访问](https://www.antdv.com/components/tree-select-cn)
#### 属性
#### [](https://www.antdv.com/components/tree-select-cn)#### 属性

| 参数| 说明| 类型| 默认值| 版本|  |
| :--- | :--- | :--- | :--- | :--- | :--- |
| allowClear| 显示清除按钮| boolean| false| |  |
| defaultValue| 指定默认选中的条目| string/string[]| -| |  |
| disabled| 是否禁用| boolean| false| |  |
| popupClassName| 下拉菜单的 className 属性| string| -| | 4.0 |
| dropdownMatchSelectWidth| 下拉菜单和选择器同宽。默认将设置 min-width，当值小于选择框宽度时会被忽略。false 时会关闭虚拟滚动| boolean | number| true| |  |
| dropdownStyle| 下拉菜单的样式| object| -| |  |
| fieldNames| 替换 treeNode 中 label,value,children 字段为 treeData 中对应的字段| object| {children:'children', label:'title', value: 'value' }| | 3.0.0 |
| filterTreeNode| 是否根据输入项进行筛选，默认用 treeNodeFilterProp 的值作为要筛选的 TreeNode 的属性值| boolean|Function(inputValue: string, treeNode: TreeNode) (函数需要返回 bool 值)| Function| |  |
| getPopupContainer| 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。| Function(triggerNode)| () => document.body| |  |
| labelInValue| 是否把每个选项的 label 包装到 value 中，会把 value 类型从 string 变为 {value: string, label: VNode, halfChecked(treeCheckStrictly 时有效): string[] } 的格式| boolean| false| |  |
| listHeight| 设置弹窗滚动高度| number| 256| |  |
| loadData| 异步加载数据| function(node)| -| |  |
| maxTagCount| 最多显示多少个 tag| number| -| |  |
| maxTagPlaceholder| 隐藏 tag 时显示的内容| slot/function(omittedValues)| -| |  |
| multiple| 支持多选（当设置 treeCheckable 时自动变为 true）| boolean| false| |  |
| notFoundContent| 当下拉列表为空时显示的内容| slot| Not Found| |  |
| placeholder| 选择框默认文字| string|slot| -| |  |
| placement| 选择框弹出的位置| bottomLeft bottomRight topLeft topRight| bottomLeft| 3.3.0|  |
| replaceFields| 替换 treeNode 中 label,value,key,children 字段为 treeData 中对应的字段| object| {children:'children', label:'title', key:'key', value: 'value' }| | 1.6.1 (3.0.0 废弃) |
| searchPlaceholder| 搜索框默认文字| string|slot| -| |  |
| searchValue(v-model)| 搜索框的值，可以通过 search 事件获取用户输入| string| -| |  |
| showCheckedStrategy| 定义选中项回填的方式。TreeSelect.SHOW_ALL: 显示所有选中节点(包括父节点). TreeSelect.SHOW_PARENT: 只显示父节点(当父节点下所有子节点都选中时). 默认只显示子节点.| enum{TreeSelect.SHOW_ALL, TreeSelect.SHOW_PARENT, TreeSelect.SHOW_CHILD }| TreeSelect.SHOW_CHILD| |  |
| showSearch| 在下拉中显示搜索框(仅在单选模式下生效)| boolean| false| |  |
| size| 选择框大小，可选 large small| string| 'default'| |  |
| status| 设置校验状态| 'error' | 'warning'| -| 3.3.0|  |
| suffixIcon| 自定义的选择框后缀图标| VNode | slot| -| |  |
| tagRender| 自定义 tag 内容，多选时生效| slot| -| 3.0|  |
| title| 自定义标题| slot| | 3.0.0|  |
| treeCheckable| 显示 checkbox| boolean| false| |  |
| treeCheckStrictly| checkable 状态下节点选择完全受控（父子节点选中状态不再关联），会使得 labelInValue 强制为 true| boolean| false| |  |
| treeData| treeNodes 数据，如果设置则不需要手动构造 TreeNode 节点（value 在整个树范围内唯一）| array<{value, label, children, [disabled, disableCheckbox, selectable]}>| []| |  |
| treeDataSimpleMode| 使用简单格式的 treeData，具体设置参考可设置的类型 (此时 treeData 应变为这样的数据结构: [{id:1, pId:0, value:'1', label:"test1",...},...], pId 是父节点的 id)| false|Array<{ id: string, pId: string, rootPId: null }>| false| |  |
| treeDefaultExpandAll| 默认展开所有树节点| boolean| false| |  |
| treeDefaultExpandedKeys| 默认展开的树节点| string[] | number[]| -| |  |
| treeExpandedKeys(v-model)| 设置展开的树节点| string[] | number[]| -| |  |
| treeIcon| 是否展示 TreeNode title 前的图标，没有默认样式，如设置为 true，需要自行定义图标相关样式| boolean| false| |  |
| treeLine| 是否展示线条样式，请参考 Tree - showLine| boolean | object| false| 3.0|  |
| treeLoadedKeys| （受控）已经加载的节点，需要配合 loadData 使用| string[]| []| 3.3.0|  |
| treeNodeFilterProp| 输入项过滤对应的 treeNode 属性| string| 'value'| |  |
| treeNodeLabelProp| 作为显示的 prop 设置| string| 'title'| |  |
| value(v-model)| 指定当前选中的条目| string/string[]| -| |  |
| virtual| 设置 false 时关闭虚拟滚动| boolean| true| 3.0|  |
#### 事件

| 事件名称| 说明| 回调参数| 版本 |
| :--- | :--- | :--- | :--- |
| change| 选中树节点时调用此函数| function(value, label, extra)|  |
| dropdownVisibleChange| 展开下拉菜单的回调| function(open)| 3.0 |
| search| 文本框值变化时回调| function(value: string)|  |
| select| 被选中时调用| function(value, node, extra)|  |
| treeExpand| 展开节点时调用| function(expandedKeys)|  |
#### 方法

| 名称| 描述 |
| :--- | :--- |
| blur()| 移除焦点 |
| focus()| 获取焦点 |
#### [](https://www.antdv.com/components/tree-select-cn)#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| checkable| 当树为 checkable 时，设置独立节点是否展示 Checkbox| boolean| -|  |
| disableCheckbox| 禁掉 checkbox| boolean| false|  |
| disabled| 是否禁用| boolean| false|  |
| isLeaf| 是否是叶子节点| boolean| false|  |
| key| 此项必须设置（其值在整个树范围内唯一）| string | number| -|  |
| selectable| 是否可选| boolean| true|  |
| title| 树节点显示的内容| string|slot| '---'|  |
| value| 默认根据此属性值进行筛选（其值在整个树范围内唯一）| string| -|  |
`,
  "a-upload": `#### [访问](https://www.antdv.com/components/upload-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本|  |
| :--- | :--- | :--- | :--- | :--- | :--- |
| accept| 接受上传的文件类型, 详见 input accept Attribute| string| 无| |  |
| action| 上传的地址| string|(file) => Promise| 无| |  |
| beforeUpload| 上传文件之前的钩子，参数为上传的文件，若返回 false 则停止上传。支持返回一个 Promise 对象，Promise 对象 reject 时则停止上传，resolve 时开始上传（ resolve 传入 File 或 Blob 对象则上传 resolve 传入对象）。| (file, fileList) => boolean | Promise| 无| |  |
| customRequest| 通过覆盖默认的上传行为，可以自定义自己的上传实现| function| 无| |  |
| data| 上传所需参数或返回上传参数的方法| object|(file) => object| 无| |  |
| directory| 支持上传文件夹（caniuse）| boolean| false| 3.0|  |
| disabled| 是否禁用| boolean| -| |  |
| downloadIcon| 自定义下载 icon| v-slot:iconRender="{file: UploadFile}"| -| 3.0|  |
| fileList| 已经上传的文件列表（受控）| object[]| 无| |  |
| headers| 设置上传的请求头部，IE10 以上有效| object| 无| |  |
| iconRender| 自定义显示 icon| v-slot:iconRender="{file: UploadFile, listType?: UploadListType}"| -| 3.0|  |
| isImageUrl| 自定义缩略图是否使用 <img /> 标签进行显示| (file: UploadFile) => boolean| -| 3.0|  |
| itemRender| 自定义上传列表项| v-slot:itemRender="{originNode: VNode, file: UploadFile, fileList: object[], actions: { download: function, preview: function, remove: function }"| -| 3.0|  |
| listType| 上传列表的内建样式，支持三种基本样式 text, picture 和 picture-card| string| text| |  |
| maxCount| 限制上传数量。当为 1 时，始终用最新上传的文件代替当前文件| number| -| 3.0|  |
| method| 上传请求的 http method| string| post| 1.5.0|  |
| multiple| 是否支持多选文件，ie10+ 支持。开启后按住 ctrl 可选择多个文件。| boolean| false| |  |
| name| 发到后台的文件参数名| string| file| |  |
| openFileDialogOnClick| 点击打开文件对话框| boolean| true| 3.0|  |
| previewFile| 自定义文件预览逻辑| (file: File | Blob) => Promise<dataURL: string>| 无| 1.5.0|  |
| previewIcon| 自定义预览 icon| v-slot:iconRender="{file: UploadFile}"| -| 3.0|  |
| progress| 自定义进度条样式| ProgressProps（仅支持 type="line"）| { strokeWidth: 2, showInfo: false }| 3.0|  |
| removeIcon| 自定义删除 icon| v-slot:iconRender="{file: UploadFile}"| -| 3.0|  |
| showUploadList| 是否展示 uploadList, 可设为一个对象，用于单独设定 showPreviewIcon, showRemoveIcon 和 showDownloadIcon| boolean | { showPreviewIcon?: boolean, showRemoveIcon?: boolean, showDownloadIcon?: boolean }| true| showDownloadIcon(3.0)|  |
| supportServerRender| 服务端渲染时需要打开这个| boolean| false| |  |
| withCredentials| 上传请求时是否携带 cookie| boolean| false| |  |
#### 事件

| 事件名称| 说明| 回调参数| 版本|  |
| :--- | :--- | :--- | :--- | :--- |
| change| 上传文件改变时的状态，详见 change| function| 无|  |
| download| 点击下载文件时的回调，如果没有指定，则默认跳转到文件 url 对应的标签页。| function(file): void| 跳转新标签页| 1.5.0 |
| drop| 当文件被拖入上传区域时执行的回调功能| (event: DragEvent) => void| -| 3.0 |
| preview| 点击文件链接或预览图标时的回调| function(file)| 无|  |
| reject| 拖拽文件不符合 accept 类型时的回调| function(fileList)| 无|  |
| remove| 点击移除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除| function(file): boolean | Promise| -| 3.0 |
`,
  "a-upload-file": `#### [访问](https://www.antdv.com/components/upload-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| crossOrigin| CORS 属性设置| 'anonymous' | 'use-credentials' | ''| -| 3.3.0 |
| name| 文件名| string| -| - |
| percent| 上传进度| number| -| - |
| status| 上传状态，不同状态展示颜色也会有所不同| error | success | done | uploading | removed| -| - |
| thumbUrl| 缩略图地址| string| -| - |
| uid| 唯一标识符，不设置时会自动生成| string| -| - |
| url| 下载地址| string| -| - |
#### 事件
`,
  "a-avatar": `#### [访问](https://www.antdv.com/components/avatar-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| alt| 图像无法显示时的替代文本| string| -|  |
| crossOrigin| cors 属性设置| 'anonymous' | 'use-credentials' | ''| -| 3.0 |
| draggable| 图片是否允许拖动| boolean | 'true' | 'false'| -| 2.2.0 |
| gap| 字符类型距离左右两侧边界单位像素| number| 4| 2.2.0 |
| icon| 设置头像的图标类型，可设为 Icon 的 type 或 VNode| VNode | slot| -|  |
| loadError| 图片加载失败的事件，返回 false 会关闭组件默认的 fallback 行为| () => boolean| -|  |
| shape| 指定头像的形状| circle | square| circle|  |
| size| 设置头像的大小| number | large | small | default | { xs: number, sm: number, ...}| default| 2.2.0 |
| src| 图片类头像的资源地址| string| -|  |
| srcset| 设置图片类头像响应式资源地址| string| -|  |

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| maxCount| 显示的最大头像个数| number| -|  |
| maxPopoverPlacement| 多余头像气泡弹出位置| top | bottom| top|  |
| maxPopoverTrigger| 设置多余头像 Popover 的触发方式| hover | focus | click| hover| 3.0 |
| maxStyle| 多余头像样式| CSSProperties| -|  |
| size| 设置头像的大小| number | large | small | default | { xs: number, sm: number, ...}| default|  |
| shape| 设置头像的形状| circle | square| circle| 4.0 |
`,
  "a-badge": `#### [访问](https://www.antdv.com/components/badge-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| color| 自定义小圆点的颜色| string| -| 1.5.0 |
| count| 展示的数字，大于 overflowCount 时显示为 {overflowCount}+，为 0 时隐藏| number | string | slot| |  |
| dot| 不展示数字，只有一个小红点| boolean| false|  |
| numberStyle| 设置状态点的样式| object| ''|  |
| offset| 设置状态点的位置偏移，格式为 [x, y]| [number|string, number|string]| -|  |
| overflowCount| 展示封顶的数字值| number| 99|  |
| showZero| 当数值为 0 时，是否展示 Badge| boolean| false|  |
| status| 设置 Badge 为状态点| Enum{ 'success', 'processing, 'default', 'error', 'warning' }| ''|  |
| text| 在设置了 status 的前提下有效，设置状态点的文本| string| ''|  |
| title| 设置鼠标放在状态点上时显示的文字| string| count|  |

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| color| 自定义缎带的颜色| string| -|  |
| placement| 缎带的位置，start 和 end 随文字方向（RTL 或 LTR）变动| start | end| end|  |
| text| 缎带中填入的内容| string | VNode | slot| -|  |
`,
  "a-calendar": `#### [访问](https://www.antdv.com/components/calendar-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| dateCellRender| 作用域插槽，用来自定义渲染日期单元格，返回内容会被追加到单元格,| v-slot:dateCellRender="{current: dayjs}"| 无|  |
| dateFullCellRender| 作用域插槽，自定义渲染日期单元格，返回内容覆盖单元格| v-slot:dateFullCellRender="{current: dayjs}"| 无|  |
| disabledDate| 不可选择的日期| (currentDate: dayjs) => boolean| 无|  |
| fullscreen| 是否全屏显示| boolean| true|  |
| headerRender| 自定义头部内容| v-slot:headerRender="{value: dayjs, type: string, onChange: f(), onTypeChange: f()}"| -|  |
| locale| 国际化配置| object| 默认配置|  |
| mode| 初始模式，month/year| string| month|  |
| monthCellRender| 作用域插槽，自定义渲染月单元格，返回内容会被追加到单元格| v-slot:monthCellRender="{current: dayjs}"| 无|  |
| monthFullCellRender| 作用域插槽，自定义渲染月单元格，返回内容覆盖单元格| v-slot:monthFullCellRender="{current: dayjs}"| 无|  |
| validRange| 设置可以显示的日期| [dayjs, dayjs]| 无|  |
| value(v-model)| 展示日期| dayjs| 当前日期|  |
| valueFormat| 可选，绑定值的格式，对 value、defaultValue 起作用。不指定则绑定值为 dayjs 对象| string，具体格式| -|  |
#### 事件

| 事件名称| 说明| 回调参数|  |
| :--- | :--- | :--- | :--- |
| change| 日期变化时的回调, 面板变化有可能导致日期变化| function(date: dayjs | string）| 无 |
| panelChange| 日期面板变化回调| function(date: dayjs | string, mode: string)| 无 |
| select| 选择日期回调，包含来源信息| function(date: Dayjs, info: { source: 'year' | 'month' | 'date' | 'customize' })| - |
`,
  "a-card": `#### [访问](https://www.antdv.com/components/card-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| activeTabKey| 当前激活页签的 key| string| -|  |
| bodyStyle| 内容区域自定义样式| object| -|  |
| bordered| 是否有边框| boolean| true|  |
| defaultActiveTabKey| 初始化选中页签的 key，如果没有设置 activeTabKey| string| 第一个页签|  |
| extra| 卡片右上角的操作区域| string|slot| -|  |
| headStyle| 自定义标题区域样式| object| -|  |
| hoverable| 鼠标移过时可浮起| boolean| false|  |
| loading| 当卡片内容还在加载中时，可以用 loading 展示一个占位| boolean| false|  |
| size| card 的尺寸| default | small| default|  |
| tabList| 页签标题列表, 可以通过 customTab(v3.0) 插槽自定义 tab| Array<{key: string, tab: any}>| -|  |
| title| 卡片标题| string|slot| -|  |
| type| 卡片类型，可设置为 inner 或 不设置| string| -|  |

| 插槽名称| 说明| 参数|  |
| :--- | :--- | :--- | :--- |
| actions| 卡片操作组，位置在卡片底部| -|  |
| cover| 卡片封面| -|  |
| customTab| 自定义 tabList tab 标签| { item: tabList[number] }|  |
| extra| 卡片右上角的操作区域| -|  |
| tabBarExtraContent| tab bar 上额外的元素| -|  |
| title| 卡片标题| -|  |
#### 事件

| 事件名称| 说明| 回调参数| 版本|  |
| :--- | :--- | :--- | :--- | :--- |
| tabChange| 页签切换的回调| (key) => void| -|  |
`,
  "a-card-grid": `#### [访问](https://www.antdv.com/components/card-cn)
#### 属性
`,
  "a-card-meta": `#### [访问](https://www.antdv.com/components/card-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| avatar| 头像/图标| slot| -|  |
| description| 描述内容| string|slot| -|  |
| title| 标题内容| string|slot| -|  |
`,
  "a-carousel": `#### [访问](https://www.antdv.com/components/carousel-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| autoplay| 是否自动切换| boolean| false|  |
| dotPosition| 面板指示点位置，可选 top bottom left right| string| bottom| 1.5.0 |
| dots| 是否显示面板指示点| boolean| true|  |
| dotsClass| 面板指示点类名| string| slick-dots|  |
| easing| 动画效果| string| linear|  |
| effect| 动画效果函数| scrollx | fade| scrollx|  |
| afterChange| 切换面板的回调| function(current)| -|  |
| beforeChange| 切换面板的回调| function(from, to)| -|  |
#### 方法

| 名称| 描述| 版本 |
| :--- | :--- | :--- |
| goTo(slideNumber, dontAnimate)| 切换到指定面板, dontAnimate = true 时，不使用动画|  |
| next()| 切换到下一面板|  |
| prev()| 切换到上一面板|  |
`,
  "a-collapse": `#### [访问](https://www.antdv.com/components/collapse-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| accordion| 手风琴模式| boolean| false|  |
| activeKey(v-model)| 当前激活 tab 面板的 key| string[] | string  number[] | number| 默认无，accordion 模式下默认第一个元素|  |
| bordered| 带边框风格的折叠面板| boolean| true|  |
| collapsible| 所有子面板是否可折叠或指定可折叠触发区域| header | icon | disabled| -| 4.0 |
| destroyInactivePanel| 销毁折叠隐藏的面板| boolean| false|  |
| expandIcon| 自定义切换图标| Function(props):VNode | slot="expandIcon" slot-scope="props"|#expandIcon="props"| |  |
| expandIconPosition| 设置图标位置| start | end| -| 4.0 |
| ghost| 使折叠面板透明且无边框| boolean| false| 3.0 |
#### 事件

| 事件名称| 说明| 回调参数| 版本 |
| :--- | :--- | :--- | :--- |
| change| 切换面板的回调| function(key)|  |
`,
  "a-collapse-panel": `#### [访问](https://www.antdv.com/components/collapse-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| collapsible| 是否可折叠或指定可折叠触发区域| header | disabled| -| 3.0 |
| extra| 自定义渲染每个面板右上角的内容| VNode | slot| -| 1.5.0 |
| forceRender| 被隐藏时是否渲染 DOM 结构| boolean| false|  |
| header| 面板头内容| string|slot| 无|  |
| key| 对应 activeKey| string | number| 无|  |
| showArrow| 是否展示当前面板上的箭头| boolean| true|  |
`,
  "a-comment": `#### [访问](https://www.antdv.com/components/comment-cn)
#### 属性

| Property| Description| Type| Default |
| :--- | :--- | :--- | :--- |
| actions| 在评论内容下面呈现的操作项列表| Array|slot| - |
| author| 要显示为注释作者的元素| string|slot| - |
| avatar| 要显示为评论头像的元素 - 通常是 antd Avatar 或者 src| string|slot| - |
| content| 评论的主要内容| string|slot| - |
| datetime| 展示时间描述| string|slot| - |
`,
  "a-descriptions": `#### [访问](https://www.antdv.com/components/descriptions-cn)
#### 属性
#### [](https://www.antdv.com/components/descriptions-cn)#### 属性

| 参数| 说明| 类型| 默认值| 版本| |  |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| bordered| 是否展示边框| boolean| false| | |  |
| colon| 配置 Descriptions.Item 的 colon 的默认值| boolean| true| | |  |
| column| 一行的 DescriptionItems 数量，可以写成像素值或支持响应式的对象写法 { xs: 8, sm: 16, md: 24}| number| 3| | |  |
| contentStyle| 自定义内容样式| CSSProperties| -| 2.2.0| |  |
| extra| 描述列表的操作区域，显示在右上方| string | VNode | slot| -| 2.0.0| |  |
| labelStyle| 自定义标签样式| CSSProperties| -| 2.2.0| |  |
| layout| 描述布局| horizontal | vertical| horizontal| | |  |
| size| 设置列表的大小。可以设置为 middle 、small, 或不填（只有设置 bordered={true} 生效）| default | middle | small| default| | |  |
| title| 描述列表的标题，显示在最顶部| string | VNode | slot| -| | |  |
#### [](https://www.antdv.com/components/descriptions-cn)#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| contentStyle| 自定义内容样式| CSSProperties| -| 2.2.0 |
| label| 内容的描述| string | VNode | slot| -|  |
| labelStyle| 自定义标签样式| CSSProperties| -| 2.2.0 |
| span| 包含列的数量| number| 1|  |
`,
  "a-empty": `#### [访问](https://www.antdv.com/components/empty-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| description| 自定义描述内容| string | v-slot| -|  |
| image| 设置显示图片，为 string 时表示自定义图片地址| string | v-slot| false|  |
| imageStyle| 图片样式| CSSProperties| -|  |
`,
  "a-image": `#### [访问](https://www.antdv.com/components/image-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| alt| 图像描述| string| -| 2.0.0 |
| fallback| 加载失败容错地址| string| -| 2.0.0 |
| height| 图像高度| string | number| -| 2.0.0 |
| placeholder| 加载占位, 为 true 时使用默认占位| boolean | slot| -| 2.0.0 |
| preview| 预览参数，为 false 时禁用| boolean | previewType| true| 2.0.0 |
| src| 图片地址| string| -| 2.0.0 |
| previewMask| 自定义 mask| false | function | slot| -| 3.2.0 |
| width| 图像宽度| string | number| -| 2.0.0 |
#### 事件

| 事件名称| 说明| 回调参数| 版本 |
| :--- | :--- | :--- | :--- |
| error| 加载错误回调| (event: Event) => void| 3.2.0 |
`,
  "a-list": `#### [访问](https://www.antdv.com/components/list-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本|  |
| :--- | :--- | :--- | :--- | :--- | :--- |
| bordered| 是否展示边框| boolean| false| |  |
| dataSource| 列表数据源| any[]| -| 1.5.0|  |
| footer| 列表底部| string|slot| -| |  |
| grid| 列表栅格配置| object| -| |  |
| header| 列表头部| string|slot| -| |  |
| itemLayout| 设置 List.Item 布局, 设置成 vertical 则竖直样式显示, 默认横排| string| -| |  |
| loading| 当卡片内容还在加载中时，可以用 loading 展示一个占位| boolean|object| false| |  |
| loadMore| 加载更多| string|slot| -| |  |
| locale| 默认文案设置，目前包括空数据文案| object| emptyText: '暂无数据'| |  |
| pagination| 对应的 pagination 配置, 设置 false 不显示| boolean|object| false| |  |
| renderItem| 自定义Item函数，也可使用 #renderItem="{item, index}"| ({item, index}) => vNode| | -|  |
| rowKey| 各项 key 的取值，可以是字符串或一个函数| item => string|number| | |  |
| size| list 的尺寸| default | middle | small| default| |  |
| split| 是否展示分割线| boolean| true| |  |
`,
  "a-list-item": `#### [访问](https://www.antdv.com/components/list-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| actions| 列表操作组，根据 itemLayout 的不同, 位置在卡片底部或者最右侧| vNode[] | slot| -|  |
| extra| 额外内容, 通常用在 itemLayout 为 vertical 的情况下, 展示右侧内容; horizontal 展示在列表元素最右侧| string|slot| -|  |
`,
  "a-list-item-meta": `#### [访问](https://www.antdv.com/components/list-cn)
#### 属性

| 参数| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| avatar| 列表元素的图标| slot| - |
| description| 列表元素的描述内容| string|slot| - |
| title| 列表元素的标题| string|slot| - |
`,
  "a-popover": `#### [访问](https://www.antdv.com/components/popover-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| content| 卡片内容| string|slot|VNode| -|  |
| title| 卡片标题| string|slot|VNode| -|  |
`,
  "a-qrcode": `#### [访问](https://www.antdv.com/components/qrcode-cn)
#### 属性

| 参数| 说明| 类型| 默认值| version |
| :--- | :--- | :--- | :--- | :--- |
| value| 扫描后的地址| string| -|  |
| type| 渲染类型| 'canvas' | 'svg'| canvas|  |
| icon| 二维码中图片的地址（目前只支持图片地址）| string| -|  |
| size| 二维码大小| number| 160|  |
| iconSize| 二维码中图片的大小| number| 40|  |
| color| 二维码颜色| string| #000|  |
| bgColor| 二维码背景颜色| string| transparent|  |
| bordered| 是否有边框| boolean| true|  |
| errorLevel| 二维码纠错等级| 'L' | 'M' | 'Q' | 'H'| 'M'|  |
| status| 二维码状态| active | expired | loading | scanned| active| scanned: 4.0.9 |
#### 事件

| 事件名称| 说明| 回调参数| 版本 |
| :--- | :--- | :--- | :--- |
| refresh| 点击"点击刷新"的回调| () => void| - |
`,
  "a-segmented": `#### [访问](https://www.antdv.com/components/segmented-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| block| 将宽度调整为父元素宽度的选项| boolean| 无|  |
| disabled| 是否禁用| boolean| false|  |
| options| 数据化配置选项内容| string[] | number[] | SegmentedOption[]| []|  |
| size| 控件尺寸| large | middle | small| -|  |
| value| 当前选中的值| string | number| |  |
| label| 使用插槽自定义 label| v-slot:label="SegmentedBaseOption"| |  |
#### 事件

| 事件名称| 说明| 回调参数|  |
| :--- | :--- | :--- | :--- |
| change| 选项变化时的回调函数| function(value: string | number)| - |
`,
  "a-statistic": `#### [访问](https://www.antdv.com/components/statistic-cn)
#### 属性

| 参数| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| decimalSeparator| 设置小数点| string| . |
| formatter| 自定义数值展示| v-slot | ({value}) => VNode| - |
| groupSeparator| 设置千分位标识符| string| , |
| precision| 数值精度| number| - |
| prefix| 设置数值的前缀| string | v-slot| - |
| suffix| 设置数值的后缀| string | v-slot| - |
| title| 数值的标题| string | v-slot| - |
| value| 数值内容| string | number| - |
| valueStyle| 设置数值的样式| style| - |
`,
  "a-statistic-countdown": `#### [访问](https://www.antdv.com/components/statistic-cn)
#### 属性

| 参数| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| format| 格式化倒计时展示，参考 dayjs| string| 'HH:mm:ss' |
| prefix| 设置数值的前缀| string | v-slot| - |
| suffix| 设置数值的后缀| string | v-slot| - |
| title| 数值的标题| string | v-slot| - |
| value| 数值内容| number | dayjs| - |
| valueStyle| 设置数值的样式| style| - |
#### 事件

| 事件名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| finish| 倒计时完成时触发| () => void |
`,
  "a-table": `#### [访问](https://www.antdv.com/components/table-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| bodyCell| 个性化单元格| v-slot:bodyCell="{text, record, index, column}"| -| 3.0 |
| bordered| 是否展示外边框和列边框| boolean| false|  |
| childrenColumnName| 指定树形结构的列名| string| children|  |
| columns| 表格列的配置描述，具体项见下表| array| -|  |
| components| 覆盖默认的 table 元素| object| -|  |
| customFilterDropdown| 自定义筛选菜单，需要配合 column.customFilterDropdown 使用| v-slot:customFilterDropdown="FilterDropdownProps"| -| 3.0 |
| customFilterIcon| 自定义筛选图标| v-slot:customFilterIcon="{filtered, column}"| -| 3.0 |
| customHeaderRow| 设置头部行属性| Function(columns, index)| -|  |
| customRow| 设置行属性| Function(record, index)| -|  |
| dataSource| 数据数组| object[]| |  |
| defaultExpandAllRows| 初始时，是否展开所有行| boolean| false|  |
| defaultExpandedRowKeys| 默认展开的行| string[]| -|  |
| emptyText| 自定义空数据时的显示内容| v-slot:emptyText| -| 3.0 |
| expandedRowKeys(v-model)| 展开的行，控制属性| string[]| -|  |
| expandedRowRender| 额外的展开行| Function(record, index, indent, expanded):VNode | v-slot:expandedRowRender="{record, index, indent, expanded}"| -|  |
| expandFixed| 控制展开图标是否固定，可选 true left right| boolean | string| false| 3.0 |
| expandColumnTitle| 自定义展开列表头| v-slot| -| 4.0.0 |
| expandIcon| 自定义展开图标| Function(props):VNode | v-slot:expandIcon="props"| -|  |
| expandRowByClick| 通过点击行来展开子行| boolean| false|  |
| footer| 表格尾部| Function(currentPageData)|v-slot:footer="currentPageData"| |  |
| getPopupContainer| 设置表格内各类浮层的渲染节点，如筛选菜单| (triggerNode) => HTMLElement| () => TableHtmlElement| 1.5.0 |
| headerCell| 个性化头部单元格| v-slot:headerCell="{title, column}"| -| 3.0 |
| indentSize| 展示树形数据时，每层缩进的宽度，以 px 为单位| number| 15|  |
| loading| 页面是否加载中| boolean|object| false|  |
| locale| 默认文案设置，目前包括排序、过滤、空数据文案| object| filterConfirm: 确定  filterReset: 重置  emptyText: 暂无数据|  |
| pagination| 分页器，参考配置项或 pagination文档，设为 false 时不展示和进行分页| object | false| |  |
| rowClassName| 表格行的类名| Function(record, index):string| -|  |
| rowExpandable| 设置是否允许行展开| (record) => boolean| -| 3.0 |
| rowKey| 表格行 key 的取值，可以是字符串或一个函数| string|Function(record):string| 'key'|  |
| rowSelection| 列表项是否可选择，配置项| object| null|  |
| scroll| 表格是否可滚动，也可以指定滚动区域的宽、高，配置项| object| -|  |
| showExpandColumn| 设置是否展示行展开列| boolean| true| 3.0 |
| showHeader| 是否显示表头| boolean| true|  |
| showSorterTooltip| 表头是否显示下一次排序的 tooltip 提示。当参数类型为对象时，将被设置为 Tooltip 的属性| boolean | Tooltip props| true| 3.0 |
| size| 表格大小| large | middle | small| large|  |
| sortDirections| 支持的排序方式，取值为 ascend descend| Array| [ascend, descend]|  |
| sticky| 设置粘性头部和滚动条| boolean | {offsetHeader?: number, offsetScroll?: number, getContainer?: () => HTMLElement}| -| 3.0 |
| summary| 总结栏| v-slot:summary| -| 3.0 |
| tableLayout| 表格元素的 table-layout 属性，设为 fixed 表示内容不会影响列的布局| - | 'auto' | 'fixed'| 无固定表头/列或使用了 column.ellipsis 时，默认值为 fixed| 1.5.0 |
| title| 表格标题| Function(currentPageData)|v-slot:title="currentPageData"| |  |
| transformCellText| 数据渲染前可以再次改变，一般用于空数据的默认配置，可以通过 ConfigProvider 全局统一配置| Function({ text, column, record, index }) => any，此处的 text 是经过其它定义单元格 api 处理后的数据，有可能是 VNode | string | number 类型| -| 1.5.4 |
#### 事件

| 事件名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| change| 分页、排序、筛选变化时触发| Function(pagination, filters, sorter, { currentDataSource }) |
| expand| 点击展开图标时触发| Function(expanded, record) |
| expandedRowsChange| 展开的行变化时触发| Function(expandedRows) |
| resizeColumn| 拖动列时触发| Function(width, column) |
`,
  "a-column": `#### [访问](https://www.antdv.com/components/table-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| align| 设置列的对齐方式| left | right | center| left|  |
| colSpan| 表头列合并,设置为 0 时，不渲染| number| |  |
| customCell| 设置单元格属性| Function(record, rowIndex, column)| -| column add from 3.0 |
| customFilterDropdown| 启用 v-slot:customFilterDropdown，优先级低于 filterDropdown| boolean| false| 3.0 |
| customHeaderCell| 设置头部单元格属性| Function(column)| -|  |
| customRender| 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引| Function({text, record, index, column}) {}| -|  |
| dataIndex| 列数据在数据项中对应的路径，支持通过数组查询嵌套路径| string | string[]| -|  |
| defaultFilteredValue| 默认筛选值| string[]| -| 1.5.0 |
| filterResetToDefaultFilteredValue| 点击重置按钮的时候，是否恢复默认筛选值| boolean| false| 3.3.0 |
| defaultSortOrder| 默认排序顺序| ascend | descend| -|  |
| ellipsis| 超过宽度将自动省略，暂不支持和排序筛选一起使用。设置为 true 或 { showTitle?: boolean } 时，表格布局将变成 tableLayout="fixed"。| boolean | { showTitle?: boolean }| false| 3.0 |
| filterDropdown| 可以自定义筛选菜单，此函数只负责渲染图层，需要自行编写各种交互| VNode | (props: FilterDropdownProps) => VNode| -|  |
| filterDropdownOpen| 用于控制自定义筛选菜单是否可见| boolean| -|  |
| filtered| 标识数据是否经过过滤，筛选图标会高亮| boolean| false|  |
| filteredValue| 筛选的受控属性，外界可用此控制列的筛选状态，值为已筛选的 value 数组| string[]| -|  |
| filterIcon| 自定义 filter 图标。| VNode | ({filtered: boolean, column: Column}) => vNode| false|  |
| filterMode| 指定筛选菜单的用户界面| 'menu' | 'tree'| 'menu'| 3.0 |
| filterMultiple| 是否多选| boolean| true|  |
| filters| 表头的筛选菜单项| object[]| -|  |
| filterSearch| 筛选菜单项是否可搜索| boolean | function(input, filter):boolean| false| boolean:3.0 function:3.3.0 |
| fixed| 列是否固定，可选 true(等效于 left) 'left' 'right'| boolean|string| false|  |
| key| Vue 需要的 key，如果已经设置了唯一的 dataIndex，可以忽略这个属性| string| -|  |
| maxWidth| 拖动列最大宽度，会受到表格自动调整分配宽度影响| number| -| 3.0 |
| minWidth| 拖动列最小宽度，会受到表格自动调整分配宽度影响| number| 50| 3.0 |
| resizable| 是否可拖动调整宽度，此时 width 必须是 number 类型| boolean| -| 3.0 |
| responsive| 响应式 breakpoint 配置列表。未设置则始终可见。| Breakpoint[]| -| 3.0 |
| rowScope| 设置列范围| row | rowgroup| -| 4.0 |
| showSorterTooltip| 表头显示下一次排序的 tooltip 提示, 覆盖 table 中 showSorterTooltip| boolean | Tooltip props| true|  |
| sortDirections| 支持的排序方式，取值为 'ascend' 'descend'| Array| ['ascend', 'descend']| 1.5.0 |
| sorter| 排序函数，本地排序使用一个函数(参考 Array.sort 的 compareFunction)，需要服务端排序可设为 true| Function|boolean| -|  |
| sortOrder| 排序的受控属性，外界可用此控制列的排序，可设置为 'ascend' 'descend' null| string| -|  |
| title| 列头显示文字| string| -|  |
| width| 列宽度| string|number| -|  |
| onFilter| 本地模式下，确定筛选的运行函数, 使用 template 或 jsx 时作为filter事件使用| Function| -|  |
| onFilterDropdownOpenChange| 自定义筛选菜单可见变化时调用，使用 template 或 jsx 时作为filterDropdownOpenChange事件使用| function(open) {}| -| 4.0 |
`,
  "a-column-group": `#### [访问](https://www.antdv.com/components/table-cn)
#### 属性

| 参数| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| title| 列头显示文字| string|slot| - |
`,
  "a-row-selection": `#### [访问](https://www.antdv.com/components/table-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| checkStrictly| checkable 状态下节点选择完全受控（父子数据选中状态不再关联）| boolean| true| 3.0 |
| columnTitle| 自定义列表选择框标题| string|VNode| -|  |
| columnWidth| 自定义列表选择框宽度| string|number| -|  |
| fixed| 把选择框列固定在左边| boolean| -|  |
| getCheckboxProps| 选择框的默认属性配置| Function(record)| -|  |
| hideDefaultSelections| 去掉『全选』『反选』两个默认选项| boolean| false|  |
| hideSelectAll| 隐藏全选勾选框与自定义选择项| boolean| false| 3.0 |
| preserveSelectedRowKeys| 当数据被删除时仍然保留选项的 key| boolean| -| 3.0 |
| selectedRowKeys| 指定选中项的 key 数组，需要和 onChange 进行配合| string[]| []|  |
| selections| 自定义选择项 配置项, 设为 true 时使用默认选择项| object[] | boolean| true|  |
| type| 多选/单选，checkbox or radio| string| checkbox|  |
| onChange| 选中项发生变化时的回调| Function(selectedRowKeys, selectedRows)| -|  |
| onSelect| 用户手动选择/取消选择某列的回调| Function(record, selected, selectedRows, nativeEvent)| -|  |
| onSelectAll| 用户手动选择/取消选择所有列的回调| Function(selected, selectedRows, changeRows)| -|  |
| onSelectInvert| 用户手动选择反选的回调| Function(selectedRows)| -|  |
| onSelectNone| 用户清空选择的回调| function()| -| 3.0 |
`,
  "a-scroll": `#### [访问](https://www.antdv.com/components/table-cn)
#### 属性

| 参数| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| scrollToFirstRowOnChange| 当分页、排序、筛选变化后是否滚动到表格顶部| boolean| - |
| x| 设置横向滚动，也可用于指定滚动区域的宽，可以设置为像素值，百分比，true 和 'max-content'| string | number | true| - |
| y| 设置纵向滚动，也可用于指定滚动区域的高，可以设置为像素值| string | number| - |
`,
  "a-selection": `#### [访问](https://www.antdv.com/components/table-cn)
#### 属性

| 参数| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| key| Vue 需要的 key，建议设置| string| - |
| text| 选择项显示的文字| string|VNode| - |
| onSelect| 选择项点击回调| Function(changeableRowKeys)| - |
#### [](https://www.antdv.com/components/table-cn)#### 属性
`,
  "a-tabs": `#### [访问](https://www.antdv.com/components/tabs-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本|  |
| :--- | :--- | :--- | :--- | :--- | :--- |
| activeKey(v-model)| 当前激活 tab 面板的 key| string| 无| |  |
| animated| 是否使用动画切换 Tabs，在 tabPosition="top" | "bottom" 时有效| boolean | {inkBar:boolean, tabPane:boolean}| true, 当 type="card" 时为 false| |  |
| centered| 标签居中展示| boolean| false| 3.0|  |
| destroyInactiveTabPane| 被隐藏时是否销毁 DOM 结构| boolean| false| |  |
| hideAdd| 是否隐藏加号图标，在 type="editable-card" 时有效| boolean| false| |  |
| size| 大小，提供 large middle 和 small 三种大小| string| middle| |  |
| tabBarGutter| tabs 之间的间隙| number| 无| |  |
| tabBarStyle| tab bar 的样式对象| CSSProperties| -| |  |
| tabPosition| 页签位置，可选值有 top right bottom left| string| top| |  |
| type| 页签的基本样式，可选 line、card editable-card 类型| string| line| |  |

| 插槽名称| 说明| 参数|  |
| :--- | :--- | :--- | :--- |
| addIcon| 自定义添加按钮| -| - |
| leftExtra| tab bar 上左侧额外的元素| -| - |
| moreIcon| 自定义折叠 icon| -| - |
| renderTabBar| 替换 TabBar，用于二次封装标签头| { DefaultTabBar }|  |
| rightExtra| tab bar 上右侧额外的元素| -| - |
#### 事件

| 事件名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| change| 切换面板的回调| Function(activeKey) {} |
| edit| 新增和删除页签的回调，在 type="editable-card" 时有效| (action === 'add' ? event : targetKey, action): void |
| tabClick| tab 被点击的回调| Function |
| tabScroll| 滚动 TabBar 时触发| { direction: 'left' | 'right' | 'top' | 'bottom' } |
`,
  "a-tabs-tab-pane": `#### [访问](https://www.antdv.com/components/tabs-cn)
#### 属性

| 参数| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| forceRender| 被隐藏时是否渲染 DOM 结构| boolean| false |
| key| 对应 activeKey| string| 无 |
| tab| 选项卡头显示文字| string|slot| 无 |

| 插槽名称| 说明| 参数 |
| :--- | :--- | :--- |
| closeIcon| 自定义关闭图标，在 type="editable-card"时有效| - |
| tab| 选项卡头显示文字| - |
`,
  "a-tag": `#### [访问](https://www.antdv.com/components/tag-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| closable| 标签是否可以关闭| boolean| false|  |
| closeIcon| 自定义关闭按钮| VNode | slot| -| 2.0.0 |
| color| 标签色| string| -|  |
| icon| 设置图标| VNode | slot| -| 2.0.0 |
| bordered| 是否有边框| boolean| true| 4.x |
#### 事件

| 事件名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| close| 关闭时的回调| (e) => void |
`,
  "a-tag-checkable-tag": `#### [访问](https://www.antdv.com/components/tag-cn)
#### 属性

| 参数| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| checked(v-model)| 设置标签的选中状态| boolean| false |
#### 事件

| 事件名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| change| 点击标签时触发的回调| (checked) => void |
`,
  "a-timeline": `#### [访问](https://www.antdv.com/components/timeline-cn)
#### 属性

| 参数| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| mode| 通过设置 mode 可以改变时间轴和内容的相对位置| left | alternate | right|  |
| pending| 指定最后一个幽灵节点是否存在或内容| boolean|string|slot| false |
| pendingDot| 当最后一个幽灵节点存在時，指定其时间图点| string|slot| <LoadingOutlined /> |
| reverse| 节点排序| boolean| false |
`,
  "a-timeline-item": `#### [访问](https://www.antdv.com/components/timeline-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| color| 指定圆圈颜色 blue, red, green，或自定义的色值| string| blue|  |
| dot| 自定义时间轴点| string|slot| -|  |
| label| 设置标签| string | slot| -| 3.0 |
| position| 自定义节点位置| left | right| -|  |
`,
  "a-tooltip": `#### [访问](https://www.antdv.com/components/tooltip-cn)
#### 属性

| 参数| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| title| 提示文字| string|slot| 无 |

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| align| 该值将合并到 placement 的配置中，设置参考 dom-align| Object| 无|  |
| arrowPointAtCenter| 箭头是否指向目标元素中心| boolean| false|  |
| autoAdjustOverflow| 气泡被遮挡时自动调整位置| boolean| true|  |
| color| 背景颜色| string| 无|  |
| destroyTooltipOnHide| 隐藏后是否销毁 tooltip| boolean| false|  |
| getPopupContainer| 浮层渲染父节点，默认渲染到 body 上| (triggerNode: HTMLElement) => HTMLElement| () => document.body|  |
| mouseEnterDelay| 鼠标移入后延时多少才显示 Tooltip，单位：秒| number| 0.1|  |
| mouseLeaveDelay| 鼠标移出后延时多少才隐藏 Tooltip，单位：秒| number| 0.1|  |
| overlayClassName| 卡片类名| string| 无|  |
| overlayStyle| 卡片样式| object| 无|  |
| overlayInnerStyle| 卡片内容区域样式| object| 无| 4.0 |
| placement| 气泡框位置，可选 top left right bottom topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom| string| top|  |
| trigger| 触发行为，可选 hover/focus/click/contextmenu| string| hover|  |
| open(v-model)| 用于手动控制浮层显隐, 小于 4.0.0 使用 visible| boolean| false| 4.0 |
#### 事件

| 事件名称| 说明| 回调参数| 版本 |
| :--- | :--- | :--- | :--- |
| openChange| 显示隐藏的回调| (visible) => void| 4.0 |
`,
  "a-tour": `#### [访问](https://www.antdv.com/components/tour-cn)
#### 属性

| 属性| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| arrow| 是否显示箭头，包含是否指向元素中心的配置| boolean | { pointAtCenter: boolean}| true|  |
| placement| 引导卡片相对于目标元素的位置| left leftTop leftBottom right rightTop rightBottom top topLeft topRight bottom bottomLeft bottomRight| bottom|  |
| mask| 是否启用蒙层，也可传入配置改变蒙层样式和填充色| boolean | { style?: CSSProperties; color?: string; }| true|  |
| type| 类型，影响底色与文字颜色| default | primary| default|  |
| open| 打开引导| boolean| -|  |
| current(v-model)| 当前处于哪一步| number| -|  |
| scrollIntoViewOptions| 是否支持当前元素滚动到视窗内，也可传入配置指定滚动视窗的相关参数| boolean | ScrollIntoViewOptions| true|  |
| indicatorsRender| 自定义指示器| v-slot:indicatorsRender="{current, total}"| -|  |
| zIndex| Tour 的层级| number| 1001|  |

#### 属性

| 事件名称| 说明| 回调参数| 版本 |
| :--- | :--- | :--- | :--- |
| close| 关闭引导时的回调函数| Function| - |
| finish| 引导完成时的回调| Function| - |
| change| 步骤改变时的回调，current 为当前前的步骤| (current: number) => void| - |

| 属性| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| target| 获取引导卡片指向的元素，为空时居中于屏幕| () => HTMLElement | HTMLElement| -|  |
| arrow| 是否显示箭头，包含是否指向元素中心的配置| boolean | { pointAtCenter: boolean}| true|  |
| cover| 展示的图片或者视频| VueNode| -|  |
| title| 标题| VueNode| -|  |
| description| 主要描述部分| VueNode| -|  |
| placement| 引导卡片相对于目标元素的位置| left leftTop leftBottom right rightTop rightBottom top topLeft topRight bottom bottomLeft bottomRight bottom| |  |
| mask| 是否启用蒙层，也可传入配置改变蒙层样式和填充色，默认跟随 Tour 的 mask 属性| boolean | { style?: CSSProperties; color?: string; }| true|  |
| type| 类型，影响底色与文字颜色| default | primary| default|  |
| nextButtonProps| 下一步按钮的属性| { children: VueNode; onClick: Function }| -|  |
| prevButtonProps| 上一步按钮的属性| { children: VueNode; onClick: Function }| -|  |
| scrollIntoViewOptions| 是否支持当前元素滚动到视窗内，也可传入配置指定滚动视窗的相关参数，默认跟随 Tour 的 scrollIntoViewOptions 属性| boolean | ScrollIntoViewOptions| true|  |
`,
  "a-tour-step": `#### [访问](https://www.antdv.com/components/tour-cn)
#### 属性

| 事件名称| 说明| 回调参数| 版本 |
| :--- | :--- | :--- | :--- |
| close| 关闭引导时的回调函数| Function| - |
`,
  "a-tree": `#### [访问](https://www.antdv.com/components/tree-cn)
#### 属性
#### [](https://www.antdv.com/components/tree-cn)#### 属性

| 参数| 说明| 类型| 默认值| 版本|  |
| :--- | :--- | :--- | :--- | :--- | :--- |
| allowDrop| 是否允许拖拽时放置在该节点| ({ dropNode, dropPosition }) => boolean| -| |  |
| autoExpandParent| 是否自动展开父节点| boolean| false| |  |
| blockNode| 是否节点占据一行| boolean| false| |  |
| checkable| 节点前添加 Checkbox 复选框| boolean| false| |  |
| checkedKeys(v-model)| （受控）选中复选框的树节点（注意：父子节点有关联，如果传入父节点 key，则子节点自动选中；相应当子节点 key 都传入，父节点也自动选中。当设置checkable和checkStrictly，它是一个有checked和halfChecked属性的对象，并且父子节点的选中与否不再关联| string[] | number[] | {checked: string[] | number[], halfChecked: string[] | number[]}| []| |  |
| checkStrictly| checkable 状态下节点选择完全受控（父子节点选中状态不再关联）| boolean| false| |  |
| defaultExpandAll| 默认展开所有树节点, 如果是异步数据，需要在数据返回后再实例化，建议用 v-if="data.length"；当有 expandedKeys 时，defaultExpandAll 将失效| boolean| false| |  |
| disabled| 将树禁用| bool| false| |  |
| draggable| 设置节点可拖拽| boolean| false| |  |
| expandedKeys(v-model)| （受控）展开指定的树节点| string[] | number[]| []| |  |
| fieldNames| 替换 treeNode 中 title,key,children 字段为 treeData 中对应的字段| object| {children:'children', title:'title', key:'key' }| 3.0.0|  |
| filterTreeNode| 按需筛选树节点（高亮），返回 true| function(node)| -| |  |
| height| 设置虚拟滚动容器高度，设置后内部节点不再支持横向滚动| number| -| |  |
| loadData| 异步加载数据| function(node)| -| |  |
| loadedKeys| （受控）已经加载的节点，需要配合 loadData 使用| string[] | number[]| []| |  |
| multiple| 支持点选多个节点（节点本身）| boolean| false| |  |
| selectable| 是否可选中| boolean| true| |  |
| selectedKeys(v-model)| （受控）设置选中的树节点| string[] | number[]| -| |  |
| showIcon| 是否展示 TreeNode title 前的图标，没有默认样式，如设置为 true，需要自行定义图标相关样式| boolean| false| |  |
| showLine| 是否展示连接线| boolean | {showLeafIcon: boolean}(3.0+)| false| |  |
| switcherIcon| 自定义树节点的展开/折叠图标| v-slot:switcherIcon="{active, checked, expanded, loading, selected, halfChecked, title, key, children, dataRef, data, defaultIcon, switcherCls}"| -| |  |
| title| 自定义标题| slot| | 2.0.0|  |
| treeData| treeNodes 数据，如果设置则不需要手动构造 TreeNode 节点（key 在整个树范围内唯一）| TreeNode[]| --| |  |
| virtual| 设置 false 时关闭虚拟滚动| boolean| true| 3.0|  |
#### 事件

| 事件名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| check| 点击复选框触发| function(checkedKeys, e:{checked: bool, checkedNodes, node, event}) |
| dragend| dragend 触发时调用| function({event, node}) |
| dragenter| dragenter 触发时调用| function({event, node, expandedKeys}) |
| dragleave| dragleave 触发时调用| function({event, node}) |
| dragover| dragover 触发时调用| function({event, node}) |
| dragstart| 开始拖拽时调用| function({event, node}) |
| drop| drop 触发时调用| function({event, node, dragNode, dragNodesKeys}) |
| expand| 展开/收起节点时触发| function(expandedKeys, {expanded: bool, node}) |
| load| 节点加载完毕时触发| function(loadedKeys, {event, node}) |
| rightClick| 响应右键点击| function({event, node}) |
| select| 点击树节点触发| function(selectedKeys, e:{selected: bool, selectedNodes, node, event}) |
#### 方法

| 名称| 说明 |
| :--- | :--- |
| scrollTo({ key: string | number; align?: 'top' | 'bottom' | 'auto'; offset?: number })| 虚拟滚动下，滚动到指定 key 条目 |
`,
  "a-tree-node": `#### [访问](https://www.antdv.com/components/tree-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| checkable| 当树为 checkable 时，设置独立节点是否展示 Checkbox| boolean| -|  |
| class| 节点的 class| string| -|  |
| disableCheckbox| 禁掉 checkbox| boolean| false|  |
| disabled| 禁掉响应| boolean| false|  |
| icon| 自定义图标。可接收组件，props 为当前节点 props| slot|slot-scope| -|  |
| isLeaf| 设置为叶子节点(设置了loadData时有效)| boolean| false|  |
| key| 被树的 (default)ExpandedKeys / (default)CheckedKeys / (default)SelectedKeys 属性所用。注意：整个树范围内的所有节点的 key 值不能重复！| string | number| 内部计算出的节点位置|  |
| selectable| 设置节点是否可被选中| boolean| true|  |
| style| 节点的 style| string|object| -|  |
| title| 标题| string| '---'|  |
#### [](https://www.antdv.com/components/tree-cn)#### 属性

| 参数| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| expandAction| 目录展开逻辑，可选 false 'click' 'dblclick'| string| click |
`,
  "a-alert": `#### [访问](https://www.antdv.com/components/alert-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| action| 自定义操作项| slot| -| 4.0.0 |
| afterClose| 关闭动画结束后触发的回调函数| () => void| -|  |
| banner| 是否用作顶部公告| boolean| false|  |
| closable| 默认不显示关闭按钮| boolean| 无|  |
| closeIcon| 自定义关闭 Icon| slot| <CloseOutlined />| 3.0 |
| closeText| 自定义关闭按钮| string|slot| 无|  |
| description| 警告提示的辅助性文字介绍| string|slot| 无|  |
| icon| 自定义图标，showIcon 为 true 时有效| vnode|slot| -|  |
| message| 警告提示内容| string|slot| 无|  |
| showIcon| 是否显示辅助图标| boolean| false,banner 模式下默认值为 true|  |
| type| 指定警告提示的样式，有四种选择 success、info、warning、error| string| info,banner 模式下默认值为 warning|  |
#### 事件

| 事件名称| 说明| 回调参数| 版本 |
| :--- | :--- | :--- | :--- |
| close| 关闭时触发的回调函数| (e: MouseEvent) => void| - |
`,
  "a-drawer": `#### [访问](https://www.antdv.com/components/drawer-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| autofocus| 抽屉展开后是否将焦点切换至其 Dom 节点| boolean| true| 3.0.0 |
| bodyStyle| 可用于设置 Drawer 内容部分的样式| CSSProperties| -|  |
| class| Drawer 容器外层 className 设置，如果需要设置最外层，请使用 rootClassName| string| -|  |
| closable| 是否显示左上角的关闭按钮| boolean| true|  |
| closeIcon| 自定义关闭图标| VNode | slot| <CloseOutlined />| 3.0.0 |
| contentWrapperStyle| 可用于设置 Drawer 包裹内容部分的样式| CSSProperties| -| 3.0.0 |
| destroyOnClose| 关闭时销毁 Drawer 里的子元素| boolean| false|  |
| extra| 抽屉右上角的操作区域| VNode | slot| -| 3.0.0 |
| footer| 抽屉的页脚| VNode | slot| -| 3.0.0 |
| footerStyle| 抽屉页脚部件的样式| CSSProperties| -| 3.0.0 |
| forceRender| 预渲染 Drawer 内元素| boolean| false| 3.0.0 |
| getContainer| 指定 Drawer 挂载的节点，并在容器内展现 | () => HTMLElement | Selectors| 'body'| |  |
| headerStyle| 用于设置 Drawer 头部的样式| CSSProperties| -| 3.0.0 |
| height| 高度, 在 placement 为 top 或 bottom 时使用| string | number| 378|  |
| keyboard| 是否支持键盘 esc 关闭| boolean| true|  |
| mask| 是否展示遮罩| Boolean| true|  |
| maskClosable| 点击蒙层是否允许关闭| boolean| true|  |
| maskStyle| 遮罩样式| CSSProperties| {}|  |
| placement| 抽屉的方向| 'top' | 'right' | 'bottom' | 'left'| 'right'|  |
| push| 用于设置多层 Drawer 的推动行为| boolean | {distance: string | number}| { distance: 180 }| 3.0.0 |
| rootClassName| 对话框外层容器的类名| string| -| 4.0 |
| rootStyle| 可用于设置 Drawer 最外层容器的样式，和 style 的区别是作用节点包括 mask| CSSProperties| -| 4.0 |
| size| 预设抽屉宽度（或高度），default 378px 和 large 736px| default | large| default| 3.0.0 |
| style| 设计 Drawer 容器样式，如果你只需要设置内容部分请使用 bodyStyle| CSSProperties| -|  |
| title| 标题| string | slot| -|  |
| open(v-model)| Drawer 是否可见| boolean| -| 4.0 |
| width| 宽度| string | number| 378|  |
| zIndex| 设置 Drawer 的 z-index| Number| 1000|  |
#### 事件

| 事件名称| 描述| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| afterOpenChange| 切换抽屉时动画结束后的回调| function(open)| 无| 4.0 |
| close| 点击遮罩层或左上角叉或取消按钮的回调| function(e)| 无|  |
`,
  "a-modal": `#### [访问](https://www.antdv.com/components/modal-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| afterClose| Modal 完全关闭后的回调| function| 无|  |
| bodyStyle| Modal body 样式| object| {}|  |
| cancelButtonProps| cancel 按钮 props| ButtonProps| -|  |
| cancelText| 取消按钮文字| string| slot| 取消|  |
| centered| 垂直居中展示 Modal| boolean| false|  |
| closable| 是否显示右上角的关闭按钮| boolean| true|  |
| closeIcon| 自定义关闭图标| VNode | slot| -|  |
| confirmLoading| 确定按钮 loading| boolean| 无|  |
| destroyOnClose| 关闭时销毁 Modal 里的子元素| boolean| false|  |
| footer| 底部内容，当不需要默认底部按钮时，可以设为 :footer="null"| string|slot| 确定取消按钮|  |
| forceRender| 强制渲染 Modal| boolean| false|  |
| getContainer| 指定 Modal 挂载的 HTML 节点| (instance): HTMLElement| () => document.body|  |
| keyboard| 是否支持键盘 esc 关闭| boolean| true|  |
| mask| 是否展示遮罩| boolean| true|  |
| maskClosable| 点击蒙层是否允许关闭| boolean| true|  |
| maskStyle| 遮罩样式| object| {}|  |
| okButtonProps| ok 按钮 props| ButtonProps| -|  |
| okText| 确认按钮文字| string|slot| 确定|  |
| okType| 确认按钮类型| string| primary|  |
| title| 标题| string|slot| 无|  |
| open(v-model)| 对话框是否可见| boolean| 无|  |
| width| 宽度| string|number| 520|  |
| wrapClassName| 对话框外层容器的类名| string| -|  |
| zIndex| 设置 Modal 的 z-index| number| 1000|  |
#### 事件

| 事件名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| cancel| 点击遮罩层或右上角叉或取消按钮的回调| function(e) |
| ok| 点击确定回调| function(e) |

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| appContext| 弹窗的上下文，一般用于获取全局注册组件、vuex 等内容| -| -|  |
| autoFocusButton| 指定自动获得焦点的按钮| null | ok | cancel| ok|  |
| cancelButtonProps| cancel 按钮 props| ButtonProps| -|  |
| cancelText| 取消按钮文字| string| 取消|  |
| centered| 垂直居中展示 Modal| boolean| false|  |
| class| 容器类名| string| -|  |
| closable| 是否显示右上角的关闭按钮| boolean| false|  |
| content| 内容| string |VNode |function()| 无|  |
| footer| 底部内容，当不需要默认底部按钮时，可以设为 footer: null| string |VNode |function()| -| 4.0.0 |
| icon| 自定义图标（1.14.0 新增）| VNode | ()=>VNode| -|  |
| keyboard| 是否支持键盘 esc 关闭| boolean| true|  |
| mask| 是否展示遮罩| boolean| true|  |
| maskClosable| 点击蒙层是否允许关闭| boolean| false|  |
| okButtonProps| ok 按钮 props| ButtonProps| -|  |
| okText| 确认按钮文字| string| 确定|  |
| okType| 确认按钮类型| string| primary|  |
| title| 标题| string|VNode |function()| 无|  |
| width| 宽度| string|number| 416|  |
| wrapClassName| 对话框外层容器的类名| string| -| 3.2.3 |
| zIndex| 设置 Modal 的 z-index| number| 1000|  |
| onCancel| 取消回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭| function| 无|  |
| onOk| 点击确定回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭| function| 无|  |
#### 方法
`,
  "a-notification": `#### [访问](https://www.antdv.com/components/notification-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| bottom| 消息从底部弹出时，距离底部的位置，单位像素。| string| 24px|  |
| btn| 自定义关闭按钮| VNode | () => VNode| -|  |
| class| 自定义 CSS class| string| -|  |
| closeIcon| 自定义关闭图标| VNode | () => VNode| -|  |
| description| 通知提醒内容，必选| string | VNode | () => VNode| -|  |
| duration| 默认 4.5 秒后自动关闭，配置为 null 则不自动关闭| number| 4.5|  |
| getContainer| 配置渲染节点的输出位置| () => HTMLNode| () => document.body|  |
| icon| 自定义图标| VNode | () => VNode| -|  |
| key| 当前通知唯一标志| string| -|  |
| message| 通知提醒标题，必选| string | VNode | () => VNode| -|  |
| placement| 弹出位置，可选 top topLeft topRight bottom bottomLeft bottomRight| string| topRight| top bottom 3.3.0 |
| style| 自定义内联样式| Object | string| -|  |
| top| 消息从顶部弹出时，距离顶部的位置，单位像素。| string| 24px|  |
| onClick| 点击通知时触发的回调函数| Function| -|  |
| onClose| 点击默认关闭按钮时触发的回调函数| Function| -|  |

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| bottom| 消息从底部弹出时，距离底部的位置，单位像素。| string| 24px|  |
| closeIcon| 自定义关闭图标| VNode | () => VNode| -|  |
| duration| 默认自动关闭延时，单位秒| number| 4.5|  |
| getContainer| 配置渲染节点的输出位置| () => HTMLNode| () => document.body|  |
| maxCount| 最大显示数, 超过限制时，最早的消息会被自动关闭| number| -| 3.0 |
| placement| 弹出位置，可选 topLeft topRight bottomLeft bottomRight| string| topRight|  |
| rtl| 是否开启 RTL 模式| boolean| false| 3.0 |
| top| 消息从顶部弹出时，距离顶部的位置，单位像素。| string| 24px|  |
#### 方法
`,
  "a-popconfirm": `#### [访问](https://www.antdv.com/components/popconfirm-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| cancelButton| 完全自定义取消按钮| slot| -| 3.0 |
| cancelButtonProps| cancel 按钮 props| ButtonProps| -|  |
| cancelText| 取消按钮文字| string|slot| 取消|  |
| disabled| 点击 Popconfirm 子元素是否弹出气泡确认框| boolean| false|  |
| icon| 自定义弹出气泡 Icon 图标| vNode| <Icon type="exclamation-circle" />|  |
| okButton| 完全自定义确认按钮| slot| -| 3.0 |
| okButtonProps| ok 按钮 props| ButtonProps| -|  |
| okText| 确认按钮文字| string|slot| 确定|  |
| okType| 确认按钮类型| string| primary|  |
| showCancel| 是否显示取消按钮| boolean| true| 3.0 |
| title| 确认框的描述| string|slot| 无|  |
| description| 确认内容的详细描述| string|slot| -| 4.0 |
| open (v-model)| 是否显示| boolean| -| 4.0 |
#### 事件

| 事件名称| 说明| 回调参数| 版本 |
| :--- | :--- | :--- | :--- |
| cancel| 点击取消的回调| function(e)|  |
| confirm| 点击确认的回调| function(e)|  |
| openChange| 显示隐藏的回调| function(open)| 4.0 |
`,
  "a-progress": `#### [访问](https://www.antdv.com/components/progress-cn)
#### 属性

| 属性| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| format| 内容的模板函数| function(percent, successPercent)| (percent) => percent + %|  |
| percent| 百分比| number| 0|  |
| showInfo| 是否显示进度数值或状态图标| boolean| true|  |
| status| 状态，可选：success exception normal active(仅限 line)| string| -|  |
| strokeColor| 进度条的色彩| string| -|  |
| strokeLinecap| 进度条的样式| round | butt | square，区别详见 stroke-linecap| round| - |
| success| 成功进度条相关配置| { percent: number, strokeColor: string }| -|  |
| title| html 标签 title| string| -| 3.0 |
| trailColor| 未完成的分段的颜色| string| -|  |
| type| 类型，可选 line circle dashboard| string| line|  |
| size| 进度条的尺寸| number | [number, number] | "small" | "default"| "default"|  |

| 属性| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| steps| 进度条总共步数| number| -| - |
| strokeColor| 进度条的色彩，传入 object 时为渐变。当有 steps 时支持传入一个数组。| string | string[] | { from: string; to: string; direction: string }| -| - |

| 属性| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| strokeColor| 圆形进度条线的色彩，传入 object 时为渐变| string | object| -| - |
| strokeWidth| 圆形进度条线的宽度，单位是进度条画布宽度的百分比| number| 6| - |

| 属性| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| gapDegree| 仪表盘进度条缺口角度，可取值 0 ~ 295| number| 75| - |
| gapPosition| 仪表盘进度条缺口位置| top | bottom | left | right| bottom| - |
| strokeWidth| 仪表盘进度条线的宽度，单位是进度条画布宽度的百分比| number| 6| - |
`,
  "a-result": `#### [访问](https://www.antdv.com/components/result-cn)
#### 属性

| 参数| 说明| 类型| 默认值| | | | | |  |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| extra| 操作区| slot| -| | | | | |  |
| icon| 自定义 icon| slot| -| | | | | |  |
| status| 结果的状态,决定图标和颜色| success | error | info | warning | 404 | 403 | 500| 'info'| | | | | |  |
| subTitle| subTitle 文字| string | VNode | slot| -| | | | | |  |
| title| title 文字| string | VNode | slot| -| | | | | |  |
`,
  "a-skeleton": `#### [访问](https://www.antdv.com/components/skeleton-cn)
#### 属性

| 属性| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| active| 是否展示动画效果| boolean| false |
| avatar| 是否显示头像占位图| boolean | SkeletonAvatarProps| false |
| loading| 为 true 时，显示占位图。反之则直接展示子组件| boolean| - |
| paragraph| 是否显示段落占位图| boolean | SkeletonParagraphProps| true |
| title| 是否显示标题占位图| boolean | SkeletonTitleProps| true |
#### [](https://www.antdv.com/components/skeleton-cn)#### 属性

| 属性| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| shape| 指定头像的形状| circle | square| - |
| size| 设置头像占位图的大小| number | large | small | default| - |
#### [](https://www.antdv.com/components/skeleton-cn)#### 属性

| 属性| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| width| 设置标题占位图的宽度| number | string| - |
#### [](https://www.antdv.com/components/skeleton-cn)#### 属性

| 属性| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| rows| 设置段落占位图的行数| number| - |
| width| 设置段落占位图的宽度，若为数组时则为对应的每行宽度，反之则是最后一行的宽度| number | string | Array<number | string>| - |

| 属性| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| active| 是否展示动画效果| boolean| false|  |
| block| 将按钮宽度调整为其父宽度的选项| boolean| false|  |
| shape| 指定按钮的形状| circle | round | default| -|  |
| size| 设置按钮的大小| large | small | default| -|  |

| 属性| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| active| 是否展示动画效果| boolean| false |
| size| 设置输入框的大小| large | small | default| - |
`,
  "a-spin": `#### [访问](https://www.antdv.com/components/spin-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| delay| 延迟显示加载效果的时间（防止闪烁）| number (毫秒)| -|  |
| indicator| 加载指示符| vNode | slot| -|  |
| size| 组件大小，可选值为 small default large| string| default|  |
| spinning| 是否为加载中状态| boolean| true|  |
| tip| 当作为包裹元素时，可以自定义描述文案| string | slot| -| slot 3.0 |
| wrapperClassName| 包装器的类属性| string| -|  |
#### 方法
`,
  "a-affix": `#### [访问](https://www.antdv.com/components/affix-cn)
#### 属性

| 成员| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| offsetBottom| 距离窗口底部达到指定偏移量后触发| number| |  |
| offsetTop| 距离窗口顶部达到指定偏移量后触发| number| 0|  |
| target| 设置 Affix 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数| () => HTMLElement| () => window|  |
#### 事件

| 事件名称| 说明| 回调参数| 版本|  |
| :--- | :--- | :--- | :--- | :--- |
| change| 固定状态改变时触发的回调函数| (affixed?: boolean) => void| -|  |
`,
  "a-config-provider": `#### [访问](https://www.antdv.com/components/config-provider-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| autoInsertSpaceInButton| 设置为 false 时，移除按钮中 2 个汉字之间的空格| boolean| true|  |
| componentSize| 设置 antd 组件大小| small | middle | large| -| 3.0 |
| csp| 设置 Content Security Policy 配置| { nonce: string }| -|  |
| direction| 设置文本展示方向。 示例| ltr | rtl| ltr| 3.0 |
| dropdownMatchSelectWidth| 下拉菜单和选择器同宽。默认将设置 min-width，当值小于选择框宽度时会被忽略。false 时会关闭虚拟滚动| boolean | number| -|  |
| form| 设置 Form 组件的通用属性| { validateMessages?: ValidateMessages, requiredMark?: boolean | optional, colon?: boolean}| -| 3.0 |
| getPopupContainer| 弹出框（Select, Tooltip, Menu 等等）渲染父节点，默认渲染到 body 上。| Function(triggerNode, dialogContext)| () => document.body|  |
| getTargetContainer| 配置 Affix、Anchor 滚动监听容器。| () => HTMLElement| () => window| 3.0 |
| input| 设置 Input 组件的通用属性| { autocomplete?: string }| -| 3.0 |
| locale| 语言包配置，语言包可到 ant-design-vue/es/locale 目录下寻找| object| -| 1.5.0 |
| pageHeader| 统一设置 pageHeader 的 ghost，参考 pageHeader| { ghost: boolean }| 'true'| 1.5.0 |
| prefixCls| 设置统一样式前缀。注意：需要配合 less 变量 @ant-prefix 使用| string| ant|  |
| renderEmpty| 自定义组件空状态。参考 空状态| slot | Function(componentName: string): VNode| -|  |
| space| 设置 Space 的 size，参考 Space| { size: small | middle | large | number }| -| 3.0 |
| transformCellText| Table 数据渲染前可以再次改变，一般用户空数据的默认配置| Function({ text, column, record, index }) => any| -| 1.5.4 |
| virtual| 设置 false 时关闭虚拟滚动| boolean| -| 3.0 |
| wave| 设置水波纹特效| { disabled?: boolean }| -| 4.0.7 |
#### 方法
`,
  "a-float-button": `#### [访问](https://www.antdv.com/components/float-button-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| icon| 自定义图标| slot| -|  |
| description| 文字及其它内容| string | slot| -|  |
| tooltip| 气泡卡片的内容| string | slot| -|  |
| type| 设置按钮类型| default | primary| default|  |
| shape| 设置按钮形状| circle | square| circle|  |
| onClick| 点击按钮时的回调| (event) => void| -|  |
| href| 点击跳转的地址，指定此属性 button 的行为和 a 链接一致| string| -|  |
| target| 相当于 a 标签的 target 属性，href 存在时生效| string| -|  |
| badge| 带徽标数字的悬浮按钮（不支持 status 以及相关属性）| BadgeProps| -|  |
`,
  "a-common": `#### [访问](https://www.antdv.com/components/float-button-cn)
#### 属性

| 事件名称| 说明| 回调参数| 版本 |
| :--- | :--- | :--- | :--- |
| click| Set the handler to handle click event| (event) => void| - |
`,
  "a-float-button-group": `#### [访问](https://www.antdv.com/components/float-button-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| shape| 设置包含的 FloatButton 按钮形状| circle | square| circle|  |
| trigger| 触发方式（有触发方式为菜单模式）| click | hover| -|  |
| open(v-model)| 受控展开| boolean| -|  |

#### 属性

| 事件名称| 说明| 回调参数| 版本 |
| :--- | :--- | :--- | :--- |
| openChange| 展开收起时的回调| (open: boolean) => void| - |
`,
  "a-float-button-back-top": `#### [访问](https://www.antdv.com/components/float-button-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| duration| 回到顶部所需时间（ms）| number| 450|  |
| target| 设置需要监听其滚动事件的元素| () => HTMLElement| () => window|  |
| visibilityHeight| 滚动高度达到此参数值才出现 BackTop| number| 400|  |
| onClick| 点击按钮的回调函数| () => void| -|  |
`,
  "a-watermark": `#### [访问](https://www.antdv.com/components/watermark-cn)
#### 属性

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| width| 水印的宽度，content 的默认值为自身的宽度| number| 120|  |
| height| 水印的高度，content 的默认值为自身的高度| number| 64|  |
| rotate| 水印绘制时，旋转的角度，单位 °| number| -22|  |
| zIndex| 追加的水印元素的 z-index| number| 9|  |
| image| 图片源，建议导出 2 倍或 3 倍图，优先级高| string| -|  |
| content| 水印文字内容| string | string[]| -|  |
| font| 文字样式| Font| Font|  |
| gap| 水印之间的间距| [number, number]| [100, 100]|  |
| offset| 水印距离容器左上角的偏移量，默认为 gap/2| [number, number]| [gap[0]/2, gap[1]/2]|  |

| 参数| 说明| 类型| 默认值| 版本 |
| :--- | :--- | :--- | :--- | :--- |
| color| 字体颜色| string| rgba(0,0,0,.15)|  |
| fontSize| 字体大小| number| 16|  |
| fontWeight| 字体粗细| normal | light | weight | number| normal|  |
| fontFamily| 字体类型| string| sans-serif|  |
| fontStyle| 字体样式| none | normal | italic | oblique| normal|  |
`,
}