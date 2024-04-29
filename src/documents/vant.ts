export default {
  "van-button": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | id | 标识符 | string | - |
  | type | 按钮类型，可选值为 primary info warning danger | string | default |
  | size | 按钮尺寸，可选值为 normal large small mini | string | normal |
  | color v1.0.0 | 按钮颜色，支持传入linear-gradient渐变色 | string | - |
  | icon | 左侧图标名称或图片链接，可选值见 Icon 组件 | string | - |
  | class-prefix | 图标类名前缀，同 Icon 组件的 class-prefix 属性 | string | van-icon |
  | plain | 是否为朴素按钮 | boolean | false |
  | block | 是否为块级元素 | boolean | false |
  | round | 是否为圆形按钮 | boolean | false |
  | square | 是否为方形按钮 | boolean | false |
  | disabled | 是否禁用按钮 | boolean | false |
  | hairline | 是否使用 0.5px 边框 | boolean | false |
  | loading | 是否显示为加载状态 | boolean | false |
  | loading-text | 加载状态提示文字 | string | - |
  | loading-type | 加载状态图标类型，可选值为 spinner | string | circular |
  | loading-size | 加载图标大小 | string | 20px |
  | custom-style | 自定义样式 | string | - |
  | open-type | 微信开放能力，具体支持可参考 微信官方文档 | string | - |
  | app-parameter | 打开 APP 时，向 APP 传递的参数 | string | - |
  | lang | 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文 | string | en |
  | session-from | 会话来源 | string | - |
  | business-id | 客服消息子商户 id | number | - |
  | send-message-title | 会话内消息卡片标题 | string | 当前标题 |
  | send-message-path | 会话内消息卡片点击跳转小程序路径 | string | 当前分享路径 |
  | send-message-img | sendMessageImg | string | 截图 |
  | show-message-card | 显示会话内消息卡片 | string | false |
  | dataset | 按钮 dataset，open-type 为 share 时，可在 onShareAppMessage 事件的 event.target.dataset.detail 中看到传入的值 | any | - |
  | form-type | 用于 form 组件，可选值为submit reset，点击分别会触发 form 组件的 submit/reset 事件 | string | - |
##### Events
  | 事件名 | 说明 | 参数 |
  | :--- | :--- | :--- |
  | bind:click | 点击按钮，且按钮状态不为加载或禁用时触发 | - |
  | bind:getuserinfo | 用户点击该按钮时，会返回获取到的用户信息，从返回参数的 detail 中获取到的值同 wx.getUserInfo | - |
  | bind:contact | 客服消息回调 | - |
  | bind:getphonenumber | 获取用户手机号回调 | - |
  | bind:error | 当使用开放能力时，发生错误的回调 | - |
  | bind:opensetting | 在打开授权设置页后回调 | - |
##### 外部样式类
  | 类名 | 说明 |
  | :--- | :--- |
  | custom-class | 根节点样式类 |
  | loading-class | 加载图标样式类 |
`,
  "van-cell": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | icon | 左侧图标名称或图片链接，可选值见 Icon 组件 | string | - |
  | title | 左侧标题 | string | number | - |
  | title-width | 标题宽度，须包含单位 | string | - |
  | value | 右侧内容 | string | number | - |
  | label | 标题下方的描述信息 | string | - |
  | size | 单元格大小，可选值为 large | string | - |
  | border | 是否显示下边框 | boolean | true |
  | center | 是否使内容垂直居中 | boolean | false |
  | url | 点击后跳转的链接地址 | string | - |
  | link-type | 链接跳转类型，可选值为 redirectTo switchTab reLaunch | string | navigateTo |
  | clickable | 是否开启点击反馈 | boolean | false |
  | is-link | 是否展示右侧箭头并开启点击反馈 | boolean | false |
  | required | 是否显示表单必填星号 | boolean | false |
  | arrow-direction | 箭头方向，可选值为 left up down | string | - |
  | use-label-slot | 是否使用 label slot | boolean | false |
  | title-style v1.4.0 | 标题样式 | string | - |
##### Event
  | 事件名 | 说明 | 参数 |
  | :--- | :--- | :--- |
  | bind:click | 点击单元格时触发 | - |
##### Slot
  | 名称 | 说明 |
  | :--- | :--- |
  | - | 自定义value显示内容，如果设置了value属性则不生效 |
  | title | 自定义title显示内容，如果设置了title属性则不生效 |
  | label | 自定义label显示内容，需要设置 use-label-slot属性 |
  | icon | 自定义icon显示内容，如果设置了icon属性则不生效 |
  | right-icon | 自定义右侧按钮，默认是arrow，如果设置了is-link属性则不生效 |
##### 外部样式类
  | 类名 | 说明 |
  | :--- | :--- |
  | custom-class | 根节点样式类 |
  | title-class | 标题样式类 |
  | label-class | 描述信息样式类 |
  | value-class | 右侧内容样式类 |
`,
  "van-cell-group": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | title | 分组标题 | string | - |
  | inset v1.7.2 | 是否展示为圆角卡片风格 | boolean | false |
  | border | 是否显示外边框 | boolean | true |
##### 外部样式类
  | 类名 | 说明 |
  | :--- | :--- |
  | custom-class | 根节点样式类 |
`,
  "van-config-provider": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | theme-vars | 自定义主题变量 | object | - |
`,
  "van-icon": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | name | 图标名称或图片链接 | string | - |
  | dot | 是否显示图标右上角小红点 | boolean | false |
  | info | 图标右上角文字提示 | string | number | - |
  | color | 图标颜色 | string | inherit |
  | size | 图标大小，如 20px，2em，默认单位为px | string | number | inherit |
  | custom-style | 自定义样式 | string | - |
  | class-prefix | 类名前缀 | string | van-icon |
##### Events
  | 事件名 | 说明 | 参数 |
  | :--- | :--- | :--- |
  | bind:click | 点击图标时触发 | - |
##### 外部样式类
  | 类名 | 说明 |
  | :--- | :--- |
  | custom-class | 根节点样式类 |
`,
  "van开发者工具上提示": `##### Failed
`,
  "van-image": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | src | 图片链接 | string | - |
  | fit | 图片填充模式 | string | fill |
  | alt | 替代文本 | string | - |
  | width | 宽度，默认单位为px | string | number | - |
  | height | 高度，默认单位为px | string | number | - |
  | radius | 圆角大小，默认单位为px | string | number | 0 |
  | round | 是否显示为圆形 | boolean | false |
  | lazy-load | 是否懒加载 | boolean | false |
  | show-error | 是否展示图片加载失败提示 | boolean | true |
  | show-loading | 是否展示图片加载中提示 | boolean | true |
  | use-error-slot | 是否使用 error 插槽 | boolean | false |
  | use-loading-slot | 是否使用 loading 插槽 | boolean | false |
  | show-menu-by-longpress | 是否开启长按图片显示识别小程序码菜单 | boolean | false |
##### Events
  | 事件名 | 说明 | 回调参数 |
  | :--- | :--- | :--- |
  | bind:click | 点击图片时触发 | event: Event |
  | bind:load | 图片加载完毕时触发 | event: Event |
  | bind:error | 图片加载失败时触发 | event: Event |
##### Slots
  | 名称 | 说明 |
  | :--- | :--- |
  | loading | 自定义加载中的提示内容 |
  | error | 自定义加载失败时的提示内容 |
##### 外部样式类
  | 类名 | 说明 |
  | :--- | :--- |
  | custom-class | 根节点样式类 |
  | image-class | 图片样式类 |
  | loading-class | loading 样式类 |
  | error-class | error 样式类 |
`,
  "van图片填充模式": `##### 
  | 名称 | 含义 |
  | :--- | :--- |
  | contain | 保持宽高缩放图片，使图片的长边能完全显示出来 |
  | cover | 保持宽高缩放图片，使图片的短边能完全显示出来，裁剪长边 |
  | fill | 拉伸图片，使图片填满元素 |
  | widthFix | 缩放模式，宽度不变，高度自动变化，保持原图宽高比不变 |
  | heightFix | 缩放模式，高度不变，宽度自动变化，保持原图宽高比不变 |
  | none | 保持图片原有尺寸 |
`,
  "van-layout": `##### 外部样式类
  | 类名 | 说明 |
  | :--- | :--- |
  | custom-class | 根节点样式类 |
`,
  "van-row": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | gutter | 列元素之间的间距（单位为 px） | string | number | - |
`,
  "van-col": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | span | 列元素宽度 | string | number | - |
  | offset | 列元素偏移距离 | string | number | - |
`,
  "van-popup": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | show | 是否显示弹出层 | boolean | false |
  | z-index | z-index 层级 | number | 100 |
  | overlay | 是否显示遮罩层 | boolean | true |
  | position | 弹出位置，可选值为 top bottom right left | string | center |
  | duration | 动画时长，单位为毫秒 | number | object | 300 |
  | round | 是否显示圆角 | boolean | false |
  | custom-style | 自定义弹出层样式 | string | '' |
  | overlay-style | 自定义遮罩层样式 | string | '' |
  | close-on-click-overlay | 是否在点击遮罩层后关闭 | boolean | true |
  | closeable | 是否显示关闭图标 | boolean | false |
  | close-icon | 关闭图标名称或图片链接 | string | cross |
  | safe-area-inset-bottom | 是否为 iPhoneX 留出底部安全距离 | boolean | true |
  | safe-area-inset-top | 是否留出顶部安全距离（状态栏高度） | boolean | false |
  | lock-scroll v1.7.3 | 是否锁定背景滚动 | boolean | true |
##### Events
  | 事件名 | 说明 | 参数 |
  | :--- | :--- | :--- |
  | bind:close | 关闭弹出层时触发 | - |
  | bind:click-overlay | 点击遮罩层时触发 | - |
  | bind:before-enter | 进入前触发 | - |
  | bind:enter | 进入中触发 | - |
  | bind:after-enter | 进入后触发 | - |
  | bind:before-leave | 离开前触发 | - |
  | bind:leave | 离开中触发 | - |
  | bind:after-leave | 离开后触发 | - |
##### 外部样式类
  | 类名 | 说明 |
  | :--- | :--- |
  | custom-class | 根节点样式类 |
`,
  "van-toast": `##### 方法
  | 方法名 | 参数 | 返回值 | 介绍 |
  | :--- | :--- | :--- | :--- |
  | Toast | options | message | toast 实例 | 展示提示 |
  | Toast.loading | options | message | toast 实例 | 展示加载提示 |
  | Toast.success | options | message | toast 实例 | 展示成功提示 |
  | Toast.fail | options | message | toast 实例 | 展示失败提示 |
  | Toast.clear | clearAll | void | 关闭提示 |
  | Toast.setDefaultOptions | options | void | 修改默认配置，对所有 Toast 生效 |
  | Toast.resetDefaultOptions | - | void | 重置默认配置，对所有 Toast 生效 |
##### Options
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | type | 提示类型，可选值为 loading success fail html | string | text |
  | position | 位置，可选值为 top middle bottom | string | middle |
  | message | 内容 | string | '' |
  | mask | 是否显示遮罩层 | boolean | false |
  | forbidClick | 是否禁止背景点击 | boolean | false |
  | loadingType | 加载图标类型, 可选值为 spinner | string | circular |
  | zIndex | z-index 层级 | number | 1000 |
  | duration | 展示时长(ms)，值为 0 时，toast 不会消失 | number | 2000 |
  | selector | 自定义选择器 | string | van-toast |
  | context | 选择器的选择范围，可以传入自定义组件的 this 作为上下文 | object | 当前页面 |
  | onClose | 关闭时的回调函数 | Function | - |
##### Slot
  | 名称 | 说明 |
  | :--- | :--- |
  | - | 自定义内容 |
`,
  "van-transition": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | name | 动画类型 | string | fade |
  | show | 是否展示组件 | boolean | true |
  | duration | 动画时长，单位为毫秒 | number | object | 300 |
  | custom-style | 自定义样式 | string | - |
##### Events
  | 事件名 | 说明 | 参数 |
  | :--- | :--- | :--- |
  | bind:before-enter | 进入前触发 | - |
  | bind:enter | 进入中触发 | - |
  | bind:after-enter | 进入后触发 | - |
  | bind:before-leave | 离开前触发 | - |
  | bind:leave | 离开中触发 | - |
  | bind:after-leave | 离开后触发 | - |
##### 外部样式类
  | 类名 | 说明 |
  | :--- | :--- |
  | custom-class | 根节点样式类 |
  | enter-class | 定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。 |
  | enter-active-class | 定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。 |
  | enter-to-class | 定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 enter-class 被移除)，在过渡/动画完成之后移除。 |
  | leave-class | 定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。 |
  | leave-active-class | 定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。 |
  | leave-to-class | 定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 leave-class 被删除)，在过渡/动画完成之后移除。 |
##### 动画类型
  | 名称 | 说明 |
  | :--- | :--- |
  | fade | 淡入 |
  | fade-up | 上滑淡入 |
  | fade-down | 下滑淡入 |
  | fade-left | 左滑淡入 |
  | fade-right | 右滑淡入 |
  | slide-up | 上滑进入 |
  | slide-down | 下滑进入 |
  | slide-left | 左滑进入 |
  | slide-right | 右滑进入 |
`,
  "van-calendar": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | type | 选择类型:single表示选择单个日期，multiple表示选择多个日期，range表示选择日期区间 | string | single |
  | title | 日历标题 | string | 日期选择 |
  | color | 主题色，对底部按钮和选中日期生效 | string | #ee0a24 |
  | min-date | 可选择的最小日期 | timestamp | 当前日期 |
  | max-date | 可选择的最大日期 | timestamp | 当前日期的六个月后 |
  | default-date | 默认选中的日期，type为multiple或range时为数组 | timestamp | timestamp[] | 今天 |
  | row-height | 日期行高 | number | string | 64 |
  | formatter | 日期格式化函数 | (day: Day) => Day | - |
  | poppable | 是否以弹层的形式展示日历 | boolean | true |
  | show-mark | 是否显示月份背景水印 | boolean | true |
  | show-title | 是否展示日历标题 | boolean | true |
  | show-subtitle | 是否展示日历副标题（年月） | boolean | true |
  | show-confirm | 是否展示确认按钮 | boolean | true |
  | confirm-text | 确认按钮的文字 | string | 确定 |
  | confirm-disabled-text | 确认按钮处于禁用状态时的文字 | string | 确定 |
  | first-day-of-week | 设置周起始日 | 0~6 | 0 |
  | readonly v1.9.1 | 是否为只读状态，只读状态下不能选择日期 | boolean | false |
##### Events
  | 事件名 | 说明 | 回调参数 |
  | :--- | :--- | :--- |
  | bind:select | 点击任意日期时触发 | value: Date | Date[] |
  | bind:unselect | 当 Calendar 的 type 为 multiple 时,点击已选中的日期时触发 | value: Date |
  | bind:confirm | 日期选择完成后触发，若show-confirm为true，则点击确认按钮后触发 | value: Date | Date[] |
  | bind:open | 打开弹出层时触发 | - |
  | bind:close | 关闭弹出层时触发 | - |
  | bind:opened | 打开弹出层且动画结束后触发 | - |
  | bind:closed | 关闭弹出层且动画结束后触发 | - |
  | bind:over-range | 范围选择超过最多可选天数时触发 | - |
  | bind:click-subtitle v1.8.1 | 点击日历副标题时触发 | WechatMiniprogram.TouchEvent |
##### Slots
  | 名称 | 说明 |
  | :--- | :--- |
  | title | 自定义标题 |
  | footer | 自定义底部区域内容 |
##### 方法
  | 方法名 | 说明 | 参数 | 返回值 |
  | :--- | :--- | :--- | :--- |
  | reset | 重置选中的日期到默认值 | - | - |
`,
  "van-poppable": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | show | 是否显示日历弹窗 | boolean | false |
  | position | 弹出位置，可选值为 top right left | string | bottom |
  | round | 是否显示圆角弹窗 | boolean | true |
  | close-on-click-overlay | 是否在点击遮罩层后关闭 | boolean | true |
  | safe-area-inset-bottom | 是否开启底部安全区适配 | boolean | true |
`,
  "van-range": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | max-range | 日期区间最多可选天数，默认无限制 | number | string | - |
  | range-prompt | 范围选择超过最多可选天数时的提示文案 | string | null | 选择天数不能超过 xx 天 |
  | show-range-prompt | 范围选择超过最多可选天数时，是否展示提示文案 | boolean | true |
  | allow-same-day | 是否允许日期范围的起止时间为同一天 | boolean | false |
`,
  "van-day": `##### 数据结构
  | 键名 | 说明 | 类型 |
  | :--- | :--- | :--- |
  | date | 日期对应的 Date 对象 | Date |
  | type | 日期类型，可选值为selected、start、middle、end、disabled | string |
  | text | 中间显示的文字 | string |
  | topInfo | 上方的提示信息 | string |
  | bottomInfo | 下方的提示信息 | string |
  | className | 自定义 className | string |
`,
  "van-checkbox": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | name | 标识 Checkbox 名称 | string | - |
  | shape | 形状，可选值为 round square | string | round |
  | value | 是否为选中状态 | boolean | false |
  | disabled | 是否禁用单选框 | boolean | false |
  | label-disabled | 是否禁用单选框内容点击 | boolean | false |
  | label-position | 文本位置，可选值为 left | string | right |
  | use-icon-slot | 是否使用 icon slot | boolean | false |
  | checked-color | 选中状态颜色 | string | #1989fa |
  | icon-size | icon 大小 | string | number | 20px |
##### Event
  | 事件名 | 说明 | 回调参数 |
  | :--- | :--- | :--- |
  | bind:change | 当绑定值变化时触发的事件 | 当前组件的值 |
##### 外部样式类
  | 类名 | 说明 |
  | :--- | :--- |
  | custom-class | 根节点样式类 |
  | icon-class | 图标样式类 |
  | label-class | 描述信息样式类 |
##### Slot
  | 名称 | 说明 |
  | :--- | :--- |
  | - | 自定义文本 |
  | icon | 自定义图标 |
##### 方法
  | 方法名 | 参数 | 返回值 | 介绍 |
  | :--- | :--- | :--- | :--- |
  | toggle | - | - | 切换选中状态 |
`,
  "van-checkbox-group": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | name | 在表单内提交时的标识符 | string | - |
  | value | 所有选中项的 name | Array | - |
  | disabled | 是否禁用所有单选框 | boolean | false |
  | max | 设置最大可选数 | number | 0（无限制） |
  | direction v1.7.0 | 排列方向，可选值为 horizontal | string | vertical |
##### Event
  | 事件名 | 说明 | 回调参数 |
  | :--- | :--- | :--- |
  | bind:change | 当绑定值变化时触发的事件 | 当前组件的值 |
`,
  "van-datetime-picker": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | value | 当前选中值 | string | number | - |
  | type | 类型，可选值为 date time year-month  不建议动态修改 | string | datetime |
  | min-date | 可选的最小时间，精确到分钟 | number | 十年前 |
  | max-date | 可选的最大时间，精确到分钟 | number | 十年后 |
  | min-hour | 可选的最小小时，针对 time 类型 | number | 0 |
  | max-hour | 可选的最大小时，针对 time 类型 | number | 23 |
  | min-minute | 可选的最小分钟，针对 time 类型 | number | 0 |
  | max-minute | 可选的最大分钟，针对 time 类型 | number | 59 |
  | filter | 选项过滤函数(type 可能值为 year, month, day, hour, minute) | (type, values) => values | - |
  | formatter | 选项格式化函数(type 可能值为 year, month, day, hour, minute) | (type, value) => value | - |
  | title | 顶部栏标题 | string | '' |
  | show-toolbar | 是否显示顶部栏 | boolean | true |
  | loading | 是否显示加载状态 | boolean | false |
  | item-height | 选项高度 | number | 44 |
  | confirm-button-text | 确认按钮文字 | string | 确认 |
  | cancel-button-text | 取消按钮文字 | string | 取消 |
  | visible-item-count | 可见的选项个数 | number | 6 |
##### Events
  | 事件名称 | 说明 | 回调参数 |
  | :--- | :--- | :--- |
  | bind:input | 当值变化时触发的事件 | 当前 value |
  | bind:change | 当值变化时触发的事件 | 组件实例 |
  | bind:confirm | 点击完成按钮时触发的事件 | 当前 value |
  | bind:cancel | 点击取消按钮时触发的事件 | - |
##### 外部样式类
  | 类名 | 说明 |
  | :--- | :--- |
  | active-class | 选中项样式类 |
  | toolbar-class | 顶部栏样式类 |
  | column-class | 列样式类 |
`,
  "vanchange": `##### 事件
  | 函数 | 说明 |
  | :--- | :--- |
  | getColumnValue(index) | 获取对应列中选中的值 |
  | setColumnValue(index, value) | 设置对应列中选中的值 |
  | getColumnValues(index) | 获取对应列中所有的备选值 |
  | setColumnValues(index, values) | 设置对应列中所有的备选值 |
  | getValues() | 获取所有列中被选中的值，返回一个数组 |
  | setValues(values) | values为一个数组，设置所有列中被选中的值 |
`,
  "van-field": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | name | 在表单内提交时的标识符 | string | - |
  | label | 输入框左侧文本 | string | - |
  | size | 单元格大小，可选值为 large | string | - |
  | value | 当前输入的值 | string | number | - |
  | type | 可设置为任意原生类型, 如 number idcard textarea digit | string | text |
  | fixed | 如果 type 为 textarea 且在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true | boolean | false |
  | focus | 获取焦点 | boolean | false |
  | border | 是否显示内边框 | boolean | true |
  | disabled | 是否禁用输入框 | boolean | false |
  | readonly | 是否只读 | boolean | false |
  | clearable | 是否启用清除控件 | boolean | false |
  | clickable | 是否开启点击反馈 | boolean | false |
  | required | 是否显示表单必填星号 | boolean | false |
  | center | 是否使内容垂直居中 | boolean | false |
  | password | 是否是密码类型 | boolean | false |
  | title-width | 标题宽度 | string | 6.2em |
  | maxlength | 最大输入长度，设置为 -1 的时候不限制最大长度 | number | -1 |
  | placeholder | 输入框为空时占位符 | string | - |
  | placeholder-style | 指定 placeholder 的样式 | string | - |
  | custom-style | 自定义样式 | string | - |
  | is-link | 是否展示右侧箭头并开启点击反馈 | boolean | false |
  | arrow-direction | 箭头方向，可选值为 left up down | string | - |
  | show-word-limit | 是否显示字数统计，需要设置maxlength属性 | boolean | false |
  | error | 是否将输入内容标红 | boolean | false |
  | error-message | 底部错误提示文案，为空时不展示 | string | '' |
  | error-message-align | 底部错误提示文案对齐方式，可选值为 center right | string | '' |
  | input-align | 输入框内容对齐方式，可选值为 center right | string | left |
  | autosize | 是否自适应内容高度，只对 textarea 有效，可传入对象,如 { maxHeight: 100, minHeight: 50 }，单位为px | boolean | object | false |
  | left-icon | 左侧图标名称或图片链接，可选值见 Icon 组件 | string | - |
  | right-icon | 右侧图标名称或图片链接，可选值见 Icon 组件 | string | - |
  | confirm-type | 设置键盘右下角按钮的文字，仅在 type='text' 时生效 | string | done |
  | confirm-hold | 点击键盘右下角按钮时是否保持键盘不收起，在 type='textarea' 时无效 | boolean | false |
  | hold-keyboard | focus 时，点击页面的时候不收起键盘 | boolean | false |
  | cursor-spacing | 输入框聚焦时底部与键盘的距离 | number | 50 |
  | adjust-position | 键盘弹起时，是否自动上推页面 | boolean | true |
  | show-confirm-bar | 是否显示键盘上方带有”完成“按钮那一栏，只对 textarea 有效 | boolean | true |
  | selection-start | 光标起始位置，自动聚集时有效，需与 selection-end 搭配使用 | number | -1 |
  | selection-end | 光标结束位置，自动聚集时有效，需与 selection-start 搭配使用 | number | -1 |
  | auto-focus | 自动聚焦，拉起键盘 | boolean | false |
  | disable-default-padding | 是否去掉 iOS 下的默认内边距，只对 textarea 有效 | boolean | true |
  | cursor | 指定 focus 时的光标位置 | number | -1 |
  | clear-trigger v1.8.4 | 显示清除图标的时机，always 表示输入框不为空时展示，focus 表示输入框聚焦且不为空时展示 | string | focus |
  | always-embed v1.9.2 | 强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效) | boolean | false |
##### Events
  | 事件 | 说明 | 回调参数 |
  | :--- | :--- | :--- |
  | bind:input | 输入内容时触发 | event.detail: 当前输入值 |
  | bind:change | 输入内容时触发 | event.detail: 当前输入值 |
  | bind:confirm | 点击完成按钮时触发 | event.detail: 当前输入值 |
  | bind:click-icon | 点击尾部图标时触发 | - |
  | bind:focus | 输入框聚焦时触发 | event.detail.value: 当前输入值; event.detail.height: 键盘高度 |
  | bind:blur | 输入框失焦时触发 | event.detail.value: 当前输入值; event.detail.cursor: 游标位置(如果 type 不为 textarea，值为 0) |
  | bind:clear | 点击清空控件时触发 | - |
  | bind:click-input | 点击输入区域时触发 | - |
  | bind:linechange | 输入框行数变化时调用，只对 textarea 有效 | event.detail = { height: 0, heightRpx: 0, lineCount: 0 } |
  | bind:keyboardheightchange | 键盘高度发生变化的时候触发此事件 | event.detail = { height: height, duration: duration } |
##### Slot
  | 名称 | 说明 |
  | :--- | :--- |
  | label | 自定义输入框标签，如果设置了label属性则不生效 |
  | left-icon | 自定义输入框头部图标 |
  | right-icon | 自定义输入框尾部图标 |
  | button | 自定义输入框尾部按钮 |
  | input | 自定义输入框，使用此插槽后，与输入框相关的属性和事件将失效 |
##### 外部样式类
  | 类名 | 说明 |
  | :--- | :--- |
  | label-class | 左侧文本样式类 |
  | input-class | 输入框样式类 |
  | right-icon-class | 右侧图标样式类 |
`,
  "van-picker": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | columns | 对象数组，配置每一列显示的数据 | Array | [] |
  | show-toolbar | 是否显示顶部栏 | boolean | false |
  | toolbar-position | 顶部栏位置，可选值为bottom | string | top |
  | title | 顶部栏标题 | string | '' |
  | loading | 是否显示加载状态 | boolean | false |
  | value-key | 选项对象中，文字对应的 key | string | text |
  | item-height | 选项高度 | number | 44 |
  | confirm-button-text | 确认按钮文字 | string | 确认 |
  | cancel-button-text | 取消按钮文字 | string | 取消 |
  | visible-item-count | 可见的选项个数 | number | 6 |
  | default-index | 单列选择器的默认选中项索引，多列选择器请参考下方的 Columns 配置 | number | 0 |
##### Events
  | 事件名 | 说明 | 参数 |
  | :--- | :--- | :--- |
  | bind:confirm | 点击完成按钮时触发 | 单列：选中值，选中值对应的索引多列：所有列选中值，所有列选中值对应的索引 |
  | bind:cancel | 点击取消按钮时触发 | 单列：选中值，选中值对应的索引多列：所有列选中值，所有列选中值对应的索引 |
  | bind:change | 选项改变时触发 | 单列：Picker 实例，选中值，选中值对应的索引多列：Picker 实例，所有列选中值，当前列对应的索引 |
##### 外部样式类
  | 类名 | 说明 |
  | :--- | :--- |
  | custom-class | 根节点样式类 |
  | active-class | 选中项样式类 |
  | toolbar-class | 顶部栏样式类 |
  | column-class | 列样式类 |
##### 方法
  | 方法名 | 参数 | 返回值 | 介绍 |
  | :--- | :--- | :--- | :--- |
  | getValues | - | values | 获取所有列选中的值 |
  | setValues | values | - | 设置所有列选中的值 |
  | getIndexes | - | indexes | 获取所有列选中值对应的索引 |
  | setIndexes | indexes | - | 设置所有列选中值对应的索引 |
  | getColumnValue | columnIndex | value | 获取对应列选中的值 |
  | setColumnValue | columnIndex, value | - | 设置对应列选中的值 |
  | getColumnIndex | columnIndex | optionIndex | 获取对应列选中项的索引 |
  | setColumnIndex | columnIndex, optionIndex | - | 设置对应列选中项的索引 |
  | getColumnValues | columnIndex | values | 获取对应列中所有选项 |
  | setColumnValues | columnIndex, values | - | 设置对应列中所有选项 |
`,
  "van-columns": `##### 数据结构
  | key | 说明 |
  | :--- | :--- |
  | values | 列中对应的备选值 |
  | defaultIndex | 初始选中项的索引，默认为 0 |
`,
  "van-radio": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | name | 标识符 | string | - |
  | shape | 形状，可选值为 square | string | round |
  | disabled | 是否为禁用状态 | boolean | false |
  | label-disabled | 是否禁用文本内容点击 | boolean | false |
  | label-position | 文本位置，可选值为 left | string | right |
  | icon-size | 图标大小，默认单位为px | string | number | 20px |
  | checked-color | 选中状态颜色 | string | #1989fa |
  | use-icon-slot | 是否使用 icon 插槽 | boolean | false |
##### Event
  | 事件名 | 说明 | 回调参数 |
  | :--- | :--- | :--- |
  | bind:change | 当绑定值变化时触发的事件 | 当前选中项的 name |
##### 外部样式类
  | 类名 | 说明 |
  | :--- | :--- |
  | custom-class | 根节点样式类 |
  | icon-class | 图标样式类 |
  | label-class | 描述信息样式类 |
`,
  "van-radio-group": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | name | 在表单内提交时的标识符 | string | - |
  | value | 当前选中项的标识符 | any | - |
  | disabled | 是否禁用所有单选框 | boolean | false |
  | direction v1.6.7 | 排列方向，可选值为 horizontal | string | vertical |
##### Event
  | 事件名 | 说明 | 回调参数 |
  | :--- | :--- | :--- |
  | bind:change | 当绑定值变化时触发的事件 | 当前选中项的 name |
`,
  "van-rate": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | name | 在表单内提交时的标识符 | string | - |
  | value | 当前分值 | number | - |
  | count | 图标总数 | number | 5 |
  | size | 图标大小，默认单位为 px | string | number | 20px |
  | gutter | 图标间距，默认单位为 px | string | number | 4px |
  | color | 选中时的颜色 | string | #ffd21e |
  | void-color | 未选中时的颜色 | string | #c7c7c7 |
  | icon | 选中时的图标名称或图片链接，可选值见 Icon 组件 | string | star |
  | void-icon | 未选中时的图标名称或图片链接，可选值见 Icon 组件 | string | star-o |
  | allow-half | 是否允许半选 | boolean | false |
  | readonly | 是否为只读状态 | boolean | false |
  | disabled | 是否禁用评分 | boolean | false |
  | disabled-color | 禁用时的颜色 | string | #bdbdbd |
  | touchable | 是否可以通过滑动手势选择评分 | boolean | true |
##### Events
  | 事件名称 | 说明 | 回调参数 |
  | :--- | :--- | :--- |
  | bind:change | 当前分值变化时触发的事件 | event.detail:当前分值 |
##### 外部样式类
  | 类名 | 说明 |
  | :--- | :--- |
  | custom-class | 根节点样式类 |
  | icon-class | 图标样式类 |
`,
  "van-search": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | name | 在表单内提交时的标识符 | string | - |
  | label | 搜索框左侧文本 | string | - |
  | shape | 形状，可选值为 round | string | square |
  | value | 当前输入的值 | string | number | - |
  | background | 搜索框背景色 | string | #f2f2f2 |
  | show-action | 是否在搜索框右侧显示取消按钮 | boolean | false |
  | action-text v1.0.0 | 取消按钮文字 | string | 取消 |
  | focus | 获取焦点 | boolean | false |
  | error | 是否将输入内容标红 | boolean | false |
  | disabled | 是否禁用输入框 | boolean | false |
  | readonly | 是否只读 | boolean | false |
  | clearable | 是否启用清除控件 | boolean | true |
  | clear-trigger v1.8.4 | 显示清除图标的时机，always 表示输入框不为空时展示，focus 表示输入框聚焦且不为空时展示 | string | focus |
  | clear-icon v1.8.4 | 清除图标名称或图片链接 | string | clear |
  | maxlength | 最大输入长度，设置为 -1 的时候不限制最大长度 | number | -1 |
  | use-action-slot | 是否使用 action slot | boolean | false |
  | placeholder | 输入框为空时占位符 | string | - |
  | placeholder-style | 指定占位符的样式 | string | - |
  | input-align | 输入框内容对齐方式，可选值为 center right | string | left |
  | use-left-icon-slot | 是否使用输入框左侧图标 slot | boolean | false |
  | use-right-icon-slot | 是否使用输入框右侧图标 slot | boolean | false |
  | left-icon | 输入框左侧图标名称或图片链接，可选值见 Icon 组件（如果设置了 use-left-icon-slot，则该属性无效） | string | search |
  | right-icon | 输入框右侧图标名称或图片链接，可选值见 Icon 组件（如果设置了 use-right-icon-slot，则该属性无效） | string | - |
##### Events
  | 事件名 | 说明 | 参数 |
  | :--- | :--- | :--- |
  | bind:search | 确定搜索时触发 | event.detail: 当前输入值 |
  | bind:change | 输入内容变化时触发 | event.detail: 当前输入值 |
  | bind:cancel | 取消搜索搜索时触发 | - |
  | bind:focus | 输入框聚焦时触发 | - |
  | bind:blur | 输入框失焦时触发 | - |
  | bind:clear | 点击清空控件时触发 | - |
  | bind:click-input | 点击搜索区域时触发 | - |
##### Slot
  | 名称 | 说明 |
  | :--- | :--- |
  | action | 自定义搜索框右侧按钮，需要在use-action-slot为 true 时才会显示 |
  | label | 自定义搜索框左侧文本 |
  | left-icon | 自定义输入框左侧图标，需要在use-left-icon-slot为 true 时才会显示 |
  | right-icon | 自定义输入框右侧图标，需要在use-right-icon-slot为 true 时才会显示 |
##### 外部样式类
  | 类名 | 说明 |
  | :--- | :--- |
  | custom-class | 根节点样式类 |
  | field-class | 搜索框样式类 |
  | input-class | 输入框样式类 |
  | cancel-class | 取消按钮样式类 |
`,
  "van-slider": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | value | 当前进度百分比，在双滑块模式下为数组格式 | number | number[] | 0 |
  | disabled | 是否禁用滑块 | boolean | false |
  | max | 最大值 | number | 100 |
  | min | 最小值 | number | 0 |
  | step | 步长 | number | 1 |
  | bar-height | 进度条高度，默认单位为 px | string | number | 2px |
  | active-color | 进度条激活态颜色 | string | #1989fa |
  | inactive-color | 进度条默认颜色 | string | #e5e5e5 |
  | use-slot-button | 是否使用按钮插槽 | boolean | false |
  | range v1.8.4 | 是否开启双滑块模式 | boolean | false |
  | vertical v1.8.5 | 是否垂直展示 | boolean | false |
##### Events
  | 事件名 | 说明 | 参数 |
  | :--- | :--- | :--- |
  | bind:drag | 拖动进度条时触发 | event.detail.value: 当前进度 |
  | bind:change | 进度值改变后触发 | event.detail: 当前进度 |
  | bind:drag-start | 开始拖动时触发 | - |
  | bind:drag-end | 结束拖动时触发 | - |
##### 外部样式类
  | 类名 | 说明 |
  | :--- | :--- |
  | custom-class | 根节点样式类 |
##### Slots
  | 名称 | 说明 | 参数 |
  | :--- | :--- | :--- |
  | button | 自定义滑块按钮 | { value: number } |
  | left-button v1.8.4 | 自定义左侧滑块按钮（双滑块模式下） | { value: number } |
  | right-button v1.8.4 | 自定义右侧滑块按钮 （双滑块模式下） | { value: number } |
`,
  "van-stepper": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | name | 在表单内提交时的标识符 | string | - |
  | value | 输入值 | string | number | 最小值 |
  | min | 最小值 | string | number | 1 |
  | max | 最大值 | string | number | - |
  | step | 步长 | string | number | 1 |
  | integer | 是否只允许输入整数 | boolean | false |
  | disabled | 是否禁用 | boolean | false |
  | disable-input | 是否禁用输入框 | boolean | false |
  | async-change | 是否开启异步变更，开启后需要手动控制输入值 | boolean | false |
  | input-width | 输入框宽度，默认单位为 px | string | number | 32px |
  | button-size | 按钮大小，默认单位为 px，输入框高度会和按钮大小保持一致 | string | number | 28px |
  | show-plus | 是否显示增加按钮 | boolean | true |
  | show-minus | 是否显示减少按钮 | boolean | true |
  | decimal-length | 固定显示的小数位数 | number | - |
  | theme | 样式风格，可选值为 round | string | - |
  | disable-plus | 是否禁用增加按钮 | boolean | - |
  | disable-minus | 是否禁用减少按钮 | boolean | - |
  | long-press | 是否开启长按手势 | boolean | true |
  | always-embed v1.9.3 | 强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效) | boolean | false |
##### Events
  | 事件名 | 说明 | 回调参数 |
  | :--- | :--- | :--- |
  | bind:change | 当绑定值变化时触发的事件 | event.detail: 当前输入的值 |
  | bind:overlimit | 点击不可用的按钮时触发 | - |
  | bind:plus | 点击增加按钮时触发 | - |
  | bind:minus | 点击减少按钮时触发 | - |
  | bind:focus | 输入框聚焦时触发 | - |
  | bind:blur | 输入框失焦时触发 | - |
##### Slot
  | 名称 | 说明 |
  | :--- | :--- |
  | plus | 加号按钮 |
  | minus | 减号按钮 |
##### 外部样式类
  | 类名 | 说明 |
  | :--- | :--- |
  | custom-class | 根节点样式类 |
  | input-class | 输入框样式类 |
  | plus-class | 加号按钮样式类 |
  | minus-class | 减号按钮样式类 |
`,
  "van-switch": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | name | 在表单内提交时的标识符 | string | - |
  | checked | 开关选中状态 | any | false |
  | loading | 是否为加载状态 | boolean | false |
  | disabled | 是否为禁用状态 | boolean | false |
  | size | 开关尺寸 | string | 30px |
  | active-color | 打开时的背景色 | string | #1989fa |
  | inactive-color | 关闭时的背景色 | string | #fff |
  | active-value | 打开时的值 | any | true |
  | inactive-value | 关闭时的值 | any | false |
##### Events
  | 事件名 | 说明 | 参数 |
  | :--- | :--- | :--- |
  | bind:change | 开关状态切换回调 | event.detail: 是否选中开关 |
##### 外部样式类
  | 类名 | 说明 |
  | :--- | :--- |
  | custom-class | 根节点样式类 |
  | node-class | 圆点样式类 |
`,
  "van-uploader": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | name | 标识符，可以在回调函数的第二项参数中获取 | string | number | - |
  | accept | 接受的文件类型, 可选值为all media image file video | string | image |
  | sizeType | 所选的图片的尺寸, 当accept为image类型时设置所选图片的尺寸可选值为original compressed | string[] | ['original','compressed'] |
  | preview-size | 预览图和上传区域的尺寸，默认单位为px | string | number | 80px |
  | preview-image | 是否在上传完成后展示预览图 | boolean | true |
  | preview-full-image | 是否在点击预览图后展示全屏图片预览 | boolean | true |
  | multiple | 是否开启图片多选，部分安卓机型不支持 | boolean | false |
  | disabled | 是否禁用文件上传 | boolean | false |
  | show-upload | 是否展示文件上传按钮 | boolean | true |
  | deletable | 是否展示删除按钮 | boolean | true |
  | capture | 图片或者视频选取模式，当accept为image类型时设置capture可选值为camera可以直接调起摄像头 | string | string[] | ['album', 'camera'] |
  | max-size | 文件大小限制，单位为byte | number | - |
  | max-count | 文件上传数量限制 | number | - |
  | upload-text | 上传区域文字提示 | string | - |
  | image-fit | 预览图裁剪模式，可选值参考小程序image组件的mode属性 | string | scaleToFill |
  | use-before-read | 是否开启文件读取前事件 | boolean | - |
  | camera | 当 accept 为 video 时生效，可选值为 back front | string | - |
  | compressed | 当 accept 为 video 时生效，是否压缩视频，默认为true | boolean | - |
  | max-duration | 当 accept 为 video 时生效，拍摄视频最长拍摄时间，单位秒 | number | - |
  | upload-icon | 上传区域图标，可选值见 Icon 组件 | string | plus |
  | 参数 | 说明 |
  | media | 图片和视频 |
  | image | 图片 |
  | video | 视频 |
  | file | 从客户端会话选择图片和视频以外的文件 |
  | all | 从客户端会话选择所有文件 |
##### FileList
  | 参数 | 说明 |
  | :--- | :--- |
  | url | 图片和视频的网络资源地址 |
  | name | 文件名称，视频将在全屏预览时作为标题显示 |
  | thumb | 图片缩略图或视频封面的网络资源地址，仅对图片和视频有效 |
  | type | 文件类型，可选值image video file |
  | isImage | 手动标记图片资源 |
  | isVideo | 手动标记视频资源 |
##### Slot
  | 名称 | 说明 |
  | :--- | :--- |
  | - | 自定义上传区域 |
##### Events
  | 事件名 | 说明 | 回调参数 |
  | :--- | :--- | :--- |
  | bind:before-read | 文件读取前，在回调函数中返回 false 可终止文件读取，绑定事件的同时需要将use-before-read属性设置为true | event.detail.file: 当前读取的文件，event.detail.callback: 回调函数，调用callback(false)终止文件读取 |
  | bind:after-read | 文件读取完成后 | event.detail.file: 当前读取的文件 |
  | bind:oversize | 文件超出大小限制 | - |
  | bind:click-preview | 点击预览图片 | event.detail.index: 点击图片的序号值 |
  | bind:delete | 删除图片 | event.detail.index: 删除图片的序号值 |
`,
  "van-action-sheet": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | show | 是否显示动作面板 | boolean | - |
  | actions | 菜单选项 | Array | [] |
  | title | 标题 | string | - |
  | description v1.0.0 | 选项上方的描述信息 | string | - |
  | z-index | z-index 层级 | number | 100 |
  | cancel-text | 取消按钮文字 | string | - |
  | overlay | 是否显示遮罩层 | boolean | - |
  | round v1.0.0 | 是否显示圆角 | boolean | true |
  | close-on-click-action | 是否在点击选项后关闭 | boolean | true |
  | close-on-click-overlay | 点击遮罩是否关闭菜单 | boolean | - |
  | safe-area-inset-bottom | 是否为 iPhoneX 留出底部安全距离 | boolean | true |
##### Events
  | 事件名 | 说明 | 参数 |
  | :--- | :--- | :--- |
  | bind:select | 选中选项时触发，禁用或加载状态下不会触发 | event.detail: 选项对应的对象 |
  | bind:close | 关闭时触发 | - |
  | bind:cancel | 取消按钮点击时触发 | - |
  | bind:click-overlay | 点击遮罩层时触发 | - |
  | bind:getuserinfo | 用户点击该按钮时，会返回获取到的用户信息，回调的 detail 数据与 wx.getUserInfo 返回的一致，openType="getUserInfo"时有效 | - |
  | bind:contact | 客服消息回调，openType="contact"时有效 | - |
  | bind:getphonenumber | 获取用户手机号回调，openType="getPhoneNumber"时有效 | - |
  | bind:error | 当使用开放能力时，发生错误的回调，openType="launchApp"时有效 | - |
  | bind:launchapp | 打开 APP 成功的回调，openType="launchApp"时有效 | - |
  | bind:opensetting | 在打开授权设置页后回调，openType="openSetting"时有效 | - |
##### actions
  | 键名 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | name | 标题 | string | - |
  | subname | 二级标题 | string | - |
  | color | 选项文字颜色 | string | - |
  | loading | 是否为加载状态 | boolean | - |
  | disabled | 是否为禁用状态 | boolean | - |
  | className | 为对应列添加额外的 class 类名 | string | - |
  | openType | 微信开放能力，具体支持可参考 微信官方文档 | string | - |
  | lang | 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文 | string | en |
  | sessionFrom | 会话来源，openType="contact"时有效 | string | - |
  | sendMessageTitle | 会话内消息卡片标题，openType="contact"时有效 | string | 当前标题 |
  | sendMessagePath | 会话内消息卡片点击跳转小程序路径，openType="contact"时有效 | string | 当前分享路径 |
  | sendMessageImg | 会话内消息卡片图片，openType="contact"时有效 | string | 截图 |
  | showMessageCard | 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，openType="contact"时有效 | string | false |
  | appParameter | 打开 APP 时，向 APP 传递的参数，openType=launchApp 时有效 | string | - |
`,
  "van-dialog": `##### 方法
  | 方法名 | 参数 | 返回值 | 介绍 |
  | :--- | :--- | :--- | :--- |
  | Dialog | options | Promise | 展示弹窗 |
  | Dialog.alert | options | Promise | 展示消息提示弹窗 |
  | Dialog.confirm | options | Promise | 展示消息确认弹窗 |
  | Dialog.setDefaultOptions | options | void | 修改默认配置，对所有 Dialog 生效 |
  | Dialog.resetDefaultOptions | - | void | 重置默认配置，对所有 Dialog 生效 |
  | Dialog.close | - | void | 关闭弹窗 |
  | Dialog.stopLoading | - | void | 停止按钮的加载状态 |
##### Options
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | title | 标题 | string | - |
  | width | 弹窗宽度，默认单位为px | string | number | 320px |
  | message | 文本内容，支持通过\n换行 | string | - |
  | messageAlign | 内容对齐方式，可选值为left right | string | center |
  | theme | 样式风格，可选值为round-button | string | default |
  | zIndex | z-index 层级 | number | 100 |
  | className | 自定义类名，dialog 在自定义组件内时无效 | string | '' |
  | customStyle | 自定义样式 | string | '' |
  | selector | 自定义选择器 | string | van-dialog |
  | showConfirmButton | 是否展示确认按钮 | boolean | true |
  | showCancelButton | 是否展示取消按钮 | boolean | false |
  | confirmButtonText | 确认按钮的文案 | string | 确认 |
  | cancelButtonText | 取消按钮的文案 | string | 取消 |
  | overlay | 是否展示遮罩层 | boolean | true |
  | overlayStyle | 自定义遮罩层样式 | object | - |
  | closeOnClickOverlay | 点击遮罩层时是否关闭弹窗 | boolean | false |
  | asyncClose | 已废弃，将在 2.0.0 移除，请使用 beforeClose 属性代替 | boolean | false |
  | beforeClose | 关闭前的回调函数，返回 false 可阻止关闭，支持返回 Promise | (action) => boolean | Promise<boolean> | - |
  | context | 选择器的选择范围，可以传入自定义组件的 this 作为上下文 | object | 当前页面 |
  | transition | 动画名称，可选值为fade none | string | scale |
  | confirmButtonOpenType | 确认按钮的微信开放能力，具体支持可参考 微信官方文档 | string | - |
##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | show | 是否显示弹窗 | boolean | - |
  | title | 标题 | string | - |
  | width | 弹窗宽度，默认单位为px | string | number | 320px |
  | message | 文本内容，支持通过\n换行 | string | - |
  | theme | 样式风格，可选值为round-button | string | default |
  | message-align | 内容对齐方式，可选值为left right | string | center |
  | z-index | z-index 层级 | number | 100 |
  | class-name | 自定义类名，dialog 在自定义组件内时无效 | string | '' |
  | custom-style | 自定义样式 | string | '' |
  | show-confirm-button | 是否展示确认按钮 | boolean | true |
  | show-cancel-button | 是否展示取消按钮 | boolean | false |
  | confirm-button-text | 确认按钮的文案 | string | 确认 |
  | cancel-button-text | 取消按钮的文案 | string | 取消 |
  | confirm-button-color | 确认按钮的字体颜色 | string | #ee0a24 |
  | cancel-button-color | 取消按钮的字体颜色 | string | #333 |
  | overlay | 是否展示遮罩层 | boolean | true |
  | overlay-style v1.0.0 | 自定义遮罩层样式 | object | - |
  | close-on-click-overlay | 点击遮罩层时是否关闭弹窗 | boolean | false |
  | use-slot | 是否使用自定义内容的插槽 | boolean | false |
  | use-title-slot | 是否使用自定义标题的插槽 | boolean | false |
  | async-close | 已废弃，将在 2.0.0 移除，请使用 beforeClose 属性代替 | boolean | false |
  | before-close | 关闭前的回调函数，返回 false 可阻止关闭，支持返回 Promise | (action) => boolean | Promise<boolean> | - |
  | transition | 动画名称，可选值为fade | string | scale |
  | confirm-button-open-type | 确认按钮的微信开放能力，具体支持可参考 微信官方文档 | string | - |
##### Events
  | 事件 | 说明 | 回调参数 |
  | :--- | :--- | :--- |
  | bind:close | 弹窗关闭时触发 | event.detail: 触发关闭事件的来源，枚举为confirm,cancel,overlay |
  | bind:confirm | 点击确认按钮时触发 | - |
  | bind:cancel | 点击取消按钮时触发 | - |
  | bind:getuserinfo | 点击确认按钮时，会返回获取到的用户信息，从返回参数的 detail 中获取到的值同 wx.getUserInfo | - |
  | bind:contact | 客服消息回调 | - |
  | bind:getphonenumber | 获取用户手机号回调 | - |
  | bind:error | 当使用开放能力时，发生错误的回调 | - |
  | bind:opensetting | 在打开授权设置页后回调 | - |
##### Slot
  | 名称 | 说明 |
  | :--- | :--- |
  | title | 自定义title显示内容，如果设置了title属性则不生效 |
`,
  "van-open-type": `##### Options
  | 参数 | 说明 | 类型 | 默认值 | open-type |
  | :--- | :--- | :--- | :--- | :--- |
  | appParameter | 打开 APP 时，向 APP 传递的参数 | string | - | launchApp |
  | lang | 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文 | string | en | getUserInfo |
  | sessionFrom | 会话来源 | string | - | contact |
  | businessId | 客服消息子商户 id | number | - | contact |
  | sendMessageTitle | 会话内消息卡片标题 | string | 当前标题 | contact |
  | sendMessagePath | 会话内消息卡片点击跳转小程序路径 | string | 当前分享路径 | contact |
  | sendMessageImg | sendMessageImg | string | 截图 | contact |
  | showMessageCard | 显示会话内消息卡片 | string | false | contact |
##### Props
  | 参数 | 说明 | 类型 | 默认值 | open-type |
  | :--- | :--- | :--- | :--- | :--- |
  | app-parameter | 打开 APP 时，向 APP 传递的参数 | string | - | launchApp |
  | lang | 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文 | string | en | getUserInfo |
  | session-from | 会话来源 | string | - | contact |
  | business-id | 客服消息子商户 id | number | - | contact |
  | send-message-title | 会话内消息卡片标题 | string | 当前标题 | contact |
  | send-message-path | 会话内消息卡片点击跳转小程序路径 | string | 当前分享路径 | contact |
  | send-message-img | sendMessageImg | string | 截图 | contact |
  | show-message-card | 显示会话内消息卡片 | string | false | contact |
`,
  "van-dropdown-menu": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | active-color | 菜单标题和选项的选中态颜色 | string | #ee0a24 |
  | z-index | 菜单栏 z-index 层级 | number | 10 |
  | duration | 动画时长，单位毫秒 | number | 200 |
  | direction | 菜单展开方向，可选值为 up | string | down |
  | overlay | 是否显示遮罩层 | boolean | true |
  | close-on-click-overlay | 是否在点击遮罩层后关闭菜单 | boolean | true |
  | close-on-click-outside | 是否在点击外部 menu 后关闭菜单 | boolean | true |
##### 外部样式类
  | 类名 | 说明 |
  | :--- | :--- |
  | custom-class | 根节点样式类 |
`,
  "van-dropdown-item": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | value | 当前选中项对应的 value | number | string | - |
  | title | 菜单项标题 | string | 当前选中项文字 |
  | options | 选项数组 | Option[] | [] |
  | disabled | 是否禁用菜单 | boolean | false |
  | title-class | 标题额外类名 | string | - |
  | popup-style | 自定义弹出层样式 | string | - |
##### Events
  | 事件名 | 说明 | 回调参数 |
  | :--- | :--- | :--- |
  | change | 点击选项导致 value 变化时触发 | value |
  | open | 打开菜单栏时触发 | - |
  | close | 关闭菜单栏时触发 | - |
  | opened | 打开菜单栏且动画结束后触发 | - |
  | closed | 关闭菜单栏且动画结束后触发 | - |
##### 方法
  | 方法名 | 说明 | 参数 | 返回值 |
  | :--- | :--- | :--- | :--- |
  | toggle | 切换菜单展示状态，传true为显示，false为隐藏，不传参为取反 | show?: boolean | - |
`,
  "van-option": `##### 数据结构
  | 键名 | 说明 | 类型 |
  | :--- | :--- | :--- |
  | text | 文字 | string |
  | value | 标识符 | number | string |
  | icon | 左侧图标名称或图片链接 | string |
`,
  "van-loading": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | color | 颜色 | string | #c9c9c9 |
  | type | 类型，可选值为 spinner | string | circular |
  | size | 加载图标大小，默认单位为 px | string | number | 30px |
  | text-size v1.0.0 | 文字大小，默认单位为为 px | string | number | 14px |
  | vertical v1.0.0 | 是否垂直排列图标和文字内容 | boolean | false |
##### Slots
  | 名称 | 说明 |
  | :--- | :--- |
  | - | 加载文案 |
##### 外部样式类
  | 类名 | 说明 |
  | :--- | :--- |
  | custom-class | 根节点样式类 |
`,
  "van-notify": `##### 方法
  | 方法名 | 说明 | 参数 | 返回值 |
  | :--- | :--- | :--- | :--- |
  | Notify | 展示提示 | options | message | notify 实例 |
  | Notify.clear | 关闭提示 | options | void |
##### Options
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | type v1.0.0 | 类型，可选值为 primary success warning | string | danger |
  | message v1.0.0 | 展示文案，支持通过\n换行 | string | '' |
  | duration | 展示时长(ms)，值为 0 时，notify 不会消失 | number | 3000 |
  | selector | 自定义节点选择器 | string | van-notify |
  | color | 字体颜色 | string | #fff |
  | top | 顶部距离 | number | 0 |
  | background | 背景颜色 | string | - |
  | context | 选择器的选择范围，可以传入自定义组件的 this 作为上下文 | object | 当前页面 |
  | onClick | 点击时的回调函数 | Function | - |
  | onOpened | 完全展示后的回调函数 | Function | - |
  | onClose | 关闭时的回调函数 | Function | - |
  | safeAreaInsetTop | 是否留出顶部安全距离（状态栏高度） | boolean | false |
`,
  "van-overlay": ``,
  "van-share-sheet": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | show | 是否显示分享面板 | boolean | false |
  | options | 分享选项 | Option[] | [] |
  | title | 顶部标题 | string | - |
  | cancel-text | 取消按钮文字 | string | '取消' |
  | description | 标题下方的辅助描述文字 | string | - |
  | duration | 动画时长，单位毫秒 | number | string | 300 |
  | overlay | 是否显示遮罩层 | boolean | true |
  | close-on-click-overlay | 是否在点击遮罩层后关闭 | boolean | true |
  | safe-area-inset-bottom | 是否开启底部安全区适配 | boolean | true |
##### Events
  | 事件名 | 说明 | 回调参数 |
  | :--- | :--- | :--- |
  | bind:select | 点击分享选项时触发 | option: Option, index: number |
  | bind:close | 关闭时触发 | - |
  | bind:cancel | 点击取消按钮时触发 | - |
  | bind:click-overlay | 点击遮罩层时触发 | - |
##### Slots
  | 名称 | 说明 |
  | :--- | :--- |
  | title | 自定义顶部标题 |
  | description | 自定义描述文字 |
`,
  "van-swipe-cell": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | name | 标识符，可以在 close 事件的参数中获取到 | string | number | - |
  | left-width | 左侧滑动区域宽度 | number | 0 |
  | right-width | 右侧滑动区域宽度 | number | 0 |
  | async-close | 是否异步关闭 | boolean | false |
  | disabled v1.3.4 | 是否禁用滑动 | boolean | false |
##### Slot
  | 名称 | 说明 |
  | :--- | :--- |
  | - | 自定义显示内容 |
  | left | 左侧滑动内容 |
  | right | 右侧滑动内容 |
##### Events
  | 事件名 | 说明 | 参数 |
  | :--- | :--- | :--- |
  | bind:click | 点击时触发 | 关闭时的点击位置 (left right cell outside) |
  | bind:close | 关闭时触发 | { position: 'left' | 'right' , instance , name: string } |
  | bind:open | 打开时触发 | { position: 'left' | 'right' , name: string } |
##### 方法
  | 方法名 | 参数 | 返回值 | 介绍 |
  | :--- | :--- | :--- | :--- |
  | open | position: left | right | - | 打开单元格侧边栏 |
  | close | - | - | 收起单元格侧边栏 |
`,
  "vanclose": `##### 参数
  | 参数 | 类型 | 说明 |
  | :--- | :--- | :--- |
  | position | string | 关闭时的点击位置 (left right cell outside) |
  | instance | object | SwipeCell 实例 |
  | name | 标识符 | string |
`,
  "van-circle": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | value | 目标进度 | number | 0 |
  | type | 指定 canvas 类型，可选值为 2d | string | - |
  | size | 圆环直径，默认单位为 px | number | 100 |
  | color | 进度条颜色，传入对象格式可以定义渐变色 | string | object | #1989fa |
  | layer-color | 轨道颜色 | string | #fff |
  | fill | 填充颜色 | string | - |
  | speed | 动画速度（单位为 value/s） | number | 50 |
  | text | 文字 | string | - |
  | stroke-width | 进度条宽度 | number | 4 |
  | clockwise | 是否顺时针增加 | boolean | true |
##### Slots
  | 名称 | 说明 |
  | :--- | :--- |
  | - | 自定义文字内容，如果设置了fill，插槽内容会被原生组件覆盖 |
`,
  "van-collapse": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | value | 当前展开面板的 name | 非手风琴模式：(string | number)[]手风琴模式：string | number | - |
  | accordion | 是否开启手风琴模式 | boolean | false |
  | border | 是否显示外边框 | boolean | true |
##### Event
  | 事件名 | 说明 | 参数 |
  | :--- | :--- | :--- |
  | change | 切换面板时触发 | activeNames: string | Array |
  | open | 展开面板时触发 | currentName: string | number |
  | close | 关闭面板时触发 | currentName: string | number |
##### 外部样式类
  | 类名 | 说明 |
  | :--- | :--- |
  | custom-class | 根节点样式类 |
`,
  "van-collapse-item": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | name | 唯一标识符，默认为索引值 | string | number | index |
  | title | 标题栏左侧内容 | string | number | - |
  | size | 标题栏大小，可选值为large | string | - |
  | icon | 标题栏左侧图标名称或图片链接，可选值见 Icon 组件 | string | - |
  | value | 标题栏右侧内容 | string | number | - |
  | label | 标题栏描述信息 | string | - |
  | border | 是否显示内边框 | boolean | true |
  | is-link | 是否展示标题栏右侧箭头并开启点击反馈 | boolean | true |
  | clickable | 是否开启点击反馈 | boolean | false |
  | disabled | 是否禁用面板 | boolean | false |
##### Slot
  | 名称 | 说明 |
  | :--- | :--- |
  | - | 面板内容 |
  | value | 自定义显示内容 |
  | icon | 自定义icon |
  | title | 自定义title |
  | right-icon | 自定义右侧按钮，默认是arrow |
##### 外部样式类
  | 类名 | 说明 |
  | :--- | :--- |
  | custom-class | 根节点样式类 |
  | content-class | 内容样式类 |
`,
  "van-count-down": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | time | 倒计时时长，单位毫秒 | number | - |
  | format | 时间格式，DD-日，HH-时，mm-分，ss-秒，SSS-毫秒 | string | HH:mm:ss |
  | auto-start | 是否自动开始倒计时 | boolean | true |
  | millisecond | 是否开启毫秒级渲染 | boolean | false |
  | use-slot | 是否使用自定义样式插槽 | boolean | false |
##### Events
  | 事件名 | 说明 | 回调参数 |
  | :--- | :--- | :--- |
  | bind:finish | 倒计时结束时触发 | - |
  | bind:change | 时间变化时触发，仅在开启use-slot后才会触发 | timeData |
##### 方法
  | 方法名 | 参数 | 返回值 | 介绍 |
  | :--- | :--- | :--- | :--- |
  | start | - | - | 开始倒计时 |
  | pause | - | - | 暂停倒计时 |
  | reset | - | - | 重设倒计时，若auto-start为true，重设后会自动开始倒计时 |
`,
  "vantime-data": `##### 格式
  | 名称 | 说明 | 类型 |
  | :--- | :--- | :--- |
  | days | 剩余天数 | number |
  | hours | 剩余小时 | number |
  | minutes | 剩余分钟 | number |
  | seconds | 剩余秒数 | number |
  | milliseconds | 剩余毫秒 | number |
`,
  "van-divider": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | dashed | 虚线 | boolean | false |
  | hairline | 细线 | boolean | false |
  | content-position | 文本位置，left center right | string | - |
  | custom-style | 自定义样式 | string | - |
##### Slot
  | 名称 | 说明 |
  | :--- | :--- |
  | 默认 | 自定义文本内容 |
`,
  "van-empty": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | image | 图片类型，可选值为 error network search，支持传入图片 URL | string | default |
  | description | 图片下方的描述文字 | string | - |
##### Slots
  | 名称 | 说明 |
  | :--- | :--- |
  | - | 自定义底部内容 |
  | image | 自定义图标 |
  | description | 自定义描述文字 |
`,
  "van-notice-bar": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | mode | 通知栏模式，可选值为 closeable link | string | '' |
  | text | 通知文本内容 | string | '' |
  | color | 通知文本颜色 | string | #ed6a0c |
  | background | 滚动条背景 | string | #fffbe8 |
  | left-icon | 左侧图标名称或图片链接 | string | - |
  | delay | 动画延迟时间 (ms) | number | 1 |
  | speed | 滚动速率 (px/s) | number | 60 |
  | scrollable | 是否开启滚动播放，内容长度溢出时默认开启 | boolean | - |
  | wrapable | 是否开启文本换行，只在禁用滚动时生效 | boolean | false |
  | open-type | 微信开放能力 | string | navigate |
##### Events
  | 事件名 | 说明 | 参数 |
  | :--- | :--- | :--- |
  | bind:click | 点击通知栏时触发 | event: Event |
  | bind:close | 关闭通知栏时触发 | event: Event |
##### Slot
  | 名称 | 说明 |
  | :--- | :--- |
  | - | 通知文本内容，仅在 text 属性为空时有效 |
  | left-icon | 自定义左侧图标 |
  | right-icon | 自定义右侧图标 |
##### 外部样式类
  | 类名 | 说明 |
  | :--- | :--- |
  | custom-class | 根节点样式类 |
##### 样式变量
  | 名称 | 默认值 | 描述 |
  | :--- | :--- | :--- |
  | --notice-bar-height | 40px | - |
  | --notice-bar-padding | 0 var(--van-padding-md) | - |
  | --notice-bar-wrapable-padding | var(--van-padding-xs) var(--van-padding-md) | - |
  | --notice-bar-text-color | var(--van-orange-dark) | - |
  | --notice-bar-font-size | var(--van-font-size-md) | - |
  | --notice-bar-line-height | 24px | - |
  | --notice-bar-background-color | var(--van-orange-light) | - |
  | --notice-bar-icon-size | 16px | - |
  | --notice-bar-icon-min-width | 24px | - |
`,
  "van-progress": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | inactive | 是否置灰 | boolean | false |
  | percentage | 进度百分比 | number | 0 |
  | stroke-width | 进度条粗细，默认单位为px | string | number | 4px |
  | show-pivot | 是否显示进度文字 | boolean | true |
  | color | 进度条颜色 | string | #1989fa |
  | text-color | 进度文字颜色 | string | #fff |
  | track-color | 轨道颜色 | string | #e5e5e5 |
  | pivot-text | 文字显示 | string | 百分比文字 |
  | pivot-color | 文字背景色 | string | 与进度条颜色一致 |
##### 外部样式类
  | 类名 | 说明 |
  | :--- | :--- |
  | custom-class | 根节点样式类 |
`,
  "van-skeleton": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | row | 段落占位图行数 | number | 0 |
  | row-width | 段落占位图宽度，可传数组来设置每一行的宽度 | string | string[] | 100% |
  | title | 是否显示标题占位图 | boolean | false |
  | title-width | 标题占位图宽度 | string | number | 40% |
  | avatar | 是否显示头像占位图 | boolean | false |
  | avatar-size | 头像占位图大小 | string | number | 32px |
  | avatar-shape | 头像占位图形状，可选值为square | string | round |
  | loading | 是否显示占位图，传false时会展示子组件内容 | boolean | true |
  | animate | 是否开启动画 | boolean | true |
`,
  "van-steps": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | active | 当前步骤 | number | 0 |
  | steps | 步骤配置集合，见下面配置项 | Step 配置项数组 | [] |
  | direction | 显示方向，可选值为 horizontal vertical | string | horizontal |
  | active-color | 激活状态颜色 | string | #07c160 |
  | inactive-color | 未激活状态颜色 | string | #969799 |
  | active-icon | 激活状态底部图标，可选值见 Icon 组件 | string | checked |
  | inactive-icon | 未激活状态底部图标，可选值见 Icon 组件 | string | - |
##### Events
  | 事件名称 | 说明 | 回调参数 |
  | :--- | :--- | :--- |
  | bind:click-step | 点击步骤时触发的事件 | event.detail:当前步骤的索引 |
##### 外部样式类
  | 类名 | 说明 |
  | :--- | :--- |
  | custom-class | 根节点样式类 |
  | desc-class | 描述信息样式类 |
`,
  "van-step": `##### 配置项
  | 键名 | 说明 | 类型 |
  | :--- | :--- | :--- |
  | text | 当前步骤名称 | string |
  | desc | 当前步骤描述信息 | string |
  | activeIcon | 当前步骤激活状态底部图标 | string |
  | inactiveIcon | 当前步骤未激活状态底部图标，可选值见 Icon 组件 | string |
`,
  "van-sticky": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | offset-top | 吸顶时与顶部的距离，单位px | number | 0 |
  | z-index | 吸顶时的 z-index | number | 99 |
  | container | 一个函数，返回容器对应的 NodesRef 节点 | function | - |
  | scroll-top | 当前滚动区域的滚动位置，非 null 时会禁用页面滚动事件的监听 | number | - |
##### Events
  | 事件名 | 说明 | 回调参数 |
  | :--- | :--- | :--- |
  | bind:scroll | 滚动时触发 | { scrollTop: 距离顶部位置, isFixed: 是否吸顶 } |
`,
  "van-tag": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | type | 类型，可选值为 primary success danger warning | string | - |
  | size | 大小, 可选值为 large medium | string | - |
  | color | 标签颜色 | string | - |
  | plain | 是否为空心样式 | boolean | false |
  | round | 是否为圆角样式 | boolean | false |
  | mark | 是否为标记样式 | boolean | false |
  | text-color | 文本颜色，优先级高于 color 属性 | string | white |
  | closeable | 是否为可关闭标签 | boolean | false |
##### Slot
  | 名称 | 说明 |
  | :--- | :--- |
  | - | 自定义 Tag 显示内容 |
##### Events
  | 事件名 | 说明 | 回调参数 |
  | :--- | :--- | :--- |
  | bind:close | 关闭标签时触发 | - |
##### 外部样式类
  | 类名 | 说明 |
  | :--- | :--- |
  | custom-class | 根节点样式类 |
`,
  "van-grid": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | column-num | 列数 | number | 4 |
  | icon-size v1.3.2 | 图标大小，默认单位为px | string | 28px |
  | gutter | 格子之间的间距，默认单位为px | string | number | 0 |
  | border | 是否显示边框 | boolean | true |
  | center | 是否将格子内容居中显示 | boolean | true |
  | square | 是否将格子固定为正方形 | boolean | false |
  | clickable | 是否开启格子点击反馈 | boolean | false |
  | direction | 格子内容排列的方向，可选值为 horizontal | string | vertical |
  | reverse v1.7.0 | 是否调换图标和文本的位置 | boolean | false |
  | use-slot | 是否使用自定义内容的插槽 | boolean | false |
##### 外部样式类
  | 类名 | 说明 |
  | :--- | :--- |
  | custom-class | 根节点样式类 |
`,
  "van-grid-item": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | text | 文字 | string | - |
  | icon | 图标名称或图片链接，可选值见 Icon 组件 | string | - |
  | icon-color | 图标颜色 | string | - |
  | icon-prefix v1.7.0 | 第三方图标前缀 | string | van-icon |
  | dot | 是否显示图标右上角小红点 | boolean | false |
  | badge | 图标右上角徽标的内容 | string | number | - |
  | url | 点击后跳转的链接地址 | string | - |
  | link-type | 链接跳转类型，可选值为 redirectTo switchTab reLaunch | string | navigateTo |
##### Events
  | 事件名 | 说明 | 回调参数 |
  | :--- | :--- | :--- |
  | bind:click | 点击格子时触发 | - |
##### Slots
  | 名称 | 说明 |
  | :--- | :--- |
  | - | 自定义宫格的所有内容，需要设置use-slot属性 |
  | icon | 自定义图标，如果设置了use-slot或者icon属性则不生效 |
  | text | 自定义文字，如果设置了use-slot或者text属性则不生效 |
##### 外部样式类
  | 类名 | 说明 |
  | :--- | :--- |
  | custom-class | 根节点样式类 |
  | content-class | 内容样式类 |
  | icon-class | 图标样式类 |
  | text-class | 文本样式类 |
`,
  "van-index-bar": `##### Props
  | 参数 | 说明 | 类型 | 默认值 | 版本 |
  | :--- | :--- | :--- | :--- | :--- |
  | index-list | 索引字符列表 | string[] | number[] | A-Z | - |
  | z-index | z-index 层级 | number | 1 | - |
  | sticky | 是否开启锚点自动吸顶 | boolean | true | - |
  | sticky-offset-top | 锚点自动吸顶时与顶部的距离 | number | 0 | - |
  | highlight-color | 索引字符高亮颜色 | string | #07c160 | - |
##### Events
  | 事件名 | 说明 | 回调参数 |
  | :--- | :--- | :--- |
  | select | 选中字符时触发 | index: 索引字符 |
`,
  "van-index-anchor": `##### Props
  | 参数 | 说明 | 类型 | 默认值 | 版本 |
  | :--- | :--- | :--- | :--- | :--- |
  | use-slot | 是否使用自定义内容的插槽 | boolean | false | - |
  | index | 索引字符 | string | number | - | - |
##### Slots
  | 名称 | 说明 |
  | :--- | :--- |
  | - | 锚点位置显示内容，默认为索引字符 |
`,
  "van嵌套在滚动元素中": `##### IndexAnchor
`,
  "van-nav-bar": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | title | 标题 | string | '' |
  | left-text | 左侧文案 | string | '' |
  | right-text | 右侧文案 | string | '' |
  | left-arrow | 是否显示左侧箭头 | boolean | false |
  | fixed | 是否固定在顶部 | boolean | false |
  | placeholder | 固定在顶部时是否开启占位 | boolean | false |
  | border | 是否显示下边框 | boolean | true |
  | z-index | 元素 z-index | number | 1 |
  | custom-style | 根节点自定义样式 | string | - |
  | safe-area-inset-top | 是否留出顶部安全距离（状态栏高度） | boolean | true |
##### Slot
  | 名称 | 说明 |
  | :--- | :--- |
  | title | 自定义标题 |
  | left | 自定义左侧区域内容 |
  | right | 自定义右侧区域内容 |
##### Events
  | 事件名 | 说明 | 参数 |
  | :--- | :--- | :--- |
  | bind:click-left | 点击左侧按钮时触发 | - |
  | bind:click-right | 点击右侧按钮时触发 | - |
##### 外部样式类
  | 类名 | 说明 |
  | :--- | :--- |
  | custom-class | 根节点样式类 |
  | title-class | 标题样式类 |
`,
  "van-sidebar": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | activeKey | 选中项的索引 | string | number | 0 |
##### Event
  | 事件名 | 说明 | 参数 |
  | :--- | :--- | :--- |
  | change | 切换徽章时触发 | 当前选中徽章的索引 |
##### 外部样式类
  | 类名 | 说明 |
  | :--- | :--- |
  | custom-class | 根节点样式类 |
`,
  "van-sidebar-item": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | title | 内容 | string | '' |
  | dot | 是否显示右上角小红点 | boolean | false |
  | info | 图标右上角徽标的内容（已废弃，请使用 badge 属性） | string | number | '' |
  | badge v1.5.0 | 图标右上角徽标的内容 | string | number | '' |
  | disabled | 是否禁用该项 | boolean | false |
##### Slot
  | 名称 | 说明 |
  | :--- | :--- |
  | title | 自定义标题栏，如果设置了title属性则不生效 |
##### Event
  | 事件名 | 说明 | 参数 |
  | :--- | :--- | :--- |
  | click | 点击徽章时触发 | event.detail 为当前徽章的索引 |
##### 外部样式类
  | 类名 | 说明 |
  | :--- | :--- |
  | custom-class | 根节点样式类 |
`,
  "van-tab": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | name | 标签名称，作为匹配的标识符 | string | number | 标签的索引值 |
  | title | 标题 | string | - |
  | disabled | 是否禁用标签 | boolean | false |
  | dot | 是否显示小红点 | boolean | - |
  | info | 图标右上角提示信息 | string | number | - |
  | title-style | 自定义标题样式 | string | - |
##### Slot
  | 名称 | 说明 |
  | :--- | :--- |
  | - | 标签页内容 |
##### 外部样式类
  | 类名 | 说明 |
  | :--- | :--- |
  | custom-class | 根节点样式类 |
  | nav-class | 标签栏样式类 |
  | tab-class | 标签样式类 |
  | tab-active-class | 标签激活态样式类 |
##### 方法
  | 方法名 | 参数 | 返回值 | 介绍 |
  | :--- | :--- | :--- | :--- |
  | resize | - | - | 外层元素大小或组件显示状态变化时，可以调用此方法来触发重绘 |
##### 组件从隐藏状态切换到显示状态时，底部条位置错误？
`,
  "van-tabs": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | type | 样式风格，可选值为card | string | line |
  | color | 标签主题色 | string | #ee0a24 |
  | active | 当前选中标签的标识符 | string | number | 0 |
  | duration | 动画时间，单位秒 | number | 0.3 |
  | line-width | 底部条宽度，默认单位px | string | number | 40px |
  | line-height | 底部条高度，默认单位px | string | number | 3px |
  | animated | 是否开启切换标签内容时的转场动画 | boolean | false |
  | border | 是否展示外边框，仅在 line 风格下生效 | boolean | false |
  | ellipsis | 是否省略过长的标题文字 | boolean | true |
  | sticky | 是否使用粘性定位布局 | boolean | false |
  | swipeable | 是否开启手势滑动切换 | boolean | false |
  | lazy-render | 是否开启标签页内容延迟渲染 | boolean | true |
  | offset-top | 粘性定位布局下与顶部的最小距离，单位px | number | - |
  | swipe-threshold | 滚动阈值，标签数量超过阈值且总宽度超过标签栏宽度时开始横向滚动 | number | 5 |
  | title-active-color | 标题选中态颜色 | string | - |
  | title-inactive-color | 标题默认态颜色 | string | - |
  | z-index | z-index 层级 | number | 1 |
##### Slot
  | 名称 | 说明 |
  | :--- | :--- |
  | nav-left | 标题左侧内容 |
  | nav-right | 标题右侧内容 |
##### Event
  | 事件名 | 说明 | 参数 |
  | :--- | :--- | :--- |
  | bind:click | 点击标签时触发 | name：标签标识符，title：标题 |
  | bind:change | 当前激活的标签改变时触发 | name：标签标识符，title：标题 |
  | bind:disabled | 点击被禁用的标签时触发 | name：标签标识符，title：标题 |
  | bind:scroll | 滚动时触发 | { scrollTop: 距离顶部位置, isFixed: 是否吸顶 } |
`,
  "van-tabbar": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | active | 当前选中标签的索引 | number | - |
  | fixed | 是否固定在底部 | boolean | true |
  | placeholder | 固定在底部时，是否在标签位置生成一个等高的占位元素 | boolean | false |
  | border | 是否展示外边框 | boolean | true |
  | z-index | 元素 z-index | number | 1 |
  | active-color | 选中标签的颜色 | string | #1989fa |
  | inactive-color | 未选中标签的颜色 | string | #7d7e80 |
  | safe-area-inset-bottom | 是否为 iPhoneX 留出底部安全距离 | boolean | true |
##### Event
  | 事件名 | 说明 | 参数 |
  | :--- | :--- | :--- |
  | bind:change | 切换标签时触发 | event.detail: 当前选中标签的名称或索引值 |
`,
  "van-tabbar-item": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | name | 标签名称，作为匹配的标识符 | string | number | 当前标签的索引值 |
  | icon | 图标名称或图片链接，可选值见 Icon 组件 | string | - |
  | icon-prefix | 图标类名前缀，同 Icon 组件的 class-prefix 属性 | string | van-icon |
  | dot | 是否显示小红点 | boolean | - |
  | info | 图标右上角提示信息 | string | number | - |
##### Slot
  | 名称 | 说明 |
  | :--- | :--- |
  | icon | 未选中时的图标 |
  | icon-active | 选中时的图标 |
`,
  "van-tree-select": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | items | 分类显示所需的数据 | Array | [] |
  | height | 高度，默认单位为px | number | string | 300 |
  | main-active-index | 左侧选中项的索引 | number | 0 |
  | active-id | 右侧选中项的 id，支持传入数组 | string | number | Array | 0 |
  | max | 右侧项最大选中个数 | number | Infinity |
  | selected-icon v1.5.0 | 自定义右侧栏选中状态的图标 | string | success |
##### Events
  | 事件名 | 说明 | 回调参数 |
  | :--- | :--- | :--- |
  | bind:click-nav | 左侧导航点击时，触发的事件 | event.detail.index：被点击的导航的索引 |
  | bind:click-item | 右侧选择项被点击时，会触发的事件 | event.detail: 该点击项的数据 |
##### Slots
  | 名称 | 说明 |
  | :--- | :--- |
  | content | 自定义右侧区域内容，如果存在 items，则插入在顶部 |
##### 外部样式类
  | 类名 | 说明 |
  | :--- | :--- |
  | main-item-class | 左侧选项样式类 |
  | content-item-class | 右侧选项样式类 |
  | main-active-class | 左侧选项选中样式类 |
  | content-active-class | 右侧选项选中样式类 |
  | main-disabled-class | 左侧选项禁用样式类 |
  | content-disabled-class | 右侧选项禁用样式类 |
`,
  "vanitems": `##### 数据结构
`,
  "van-area": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | value | 当前选中的省市区code | string | - |
  | title | 顶部栏标题 | string | - |
  | area-list | 省市区数据，格式见下方 | object | - |
  | columns-num | 省市区显示列数，3-省市区，2-省市，1-省 | string | number | 3 |
  | columns-placeholder | 列占位提示文字 | string[] | [] |
  | loading | 是否显示加载状态 | boolean | false |
  | item-height | 选项高度 | number | 44 |
  | visible-item-count | 可见的选项个数 | number | 6 |
  | confirm-button-text | 确认按钮文字 | string | 确认 |
  | cancel-button-text | 取消按钮文字 | string | 取消 |
  | show-toolbar 1.10.3 | 是否显示顶部栏 | boolean | true |
##### Events
  | 事件 | 说明 | 回调参数 |
  | :--- | :--- | :--- |
  | bind:confirm | 点击右上方完成按钮 | 一个数组参数，具体格式看下方数据格式章节 |
  | bind:cancel | 点击取消按钮时 | - |
  | bind:change | 选项改变时触发 | Picker 实例，所有列选中值，当前列对应的索引 |
##### 方法
  | 方法名 | 参数 | 返回值 | 介绍 |
  | :--- | :--- | :--- | :--- |
  | reset | code: string | - | 根据 code 重置所有选项，若不传 code，则重置到第一项 |
##### 点击完成时返回的数据格式
`,
  "van-card": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | thumb | 左侧图片 | string | - |
  | thumb-mode | 左侧图片裁剪、缩放的模式，可选值参考小程序 image 组件 mode 属性值 | string | aspectFit |
  | title | 标题 | string | - |
  | desc | 描述 | string | - |
  | tag | 标签 | string | - |
  | num | 商品数量 | string | number | - |
  | price | 商品价格 | string | number | - |
  | origin-price | 商品划线原价 | string | number | - |
  | centered | 内容是否垂直居中 | string | false |
  | currency | 货币符号 | string | ¥ |
  | thumb-link | 点击左侧图片后跳转的链接地址 | string | - |
  | link-type | 链接跳转类型，可选值为 redirectTo switchTab reLaunch | string | navigateTo |
  | lazy-load | 是否开启图片懒加载 | boolean | false |
##### Slot
  | 名称 | 说明 |
  | :--- | :--- |
  | title | 自定义标题栏，如果设置了title属性则不生效 |
  | desc | 自定义描述栏，如果设置了desc属性则不生效 |
  | num | 自定义数量 |
  | price | 自定义价格 |
  | origin-price | 自定义商品原价，如果设置了origin-price属性则不生效 |
  | price-top | 自定义价格上方区域 |
  | bottom | 自定义价格下方区域 |
  | thumb | 自定义图片，如果设置了thumb属性则不生效 |
  | tag | 自定义图片角标，如果设置了tag属性则不生效 |
  | tags | 自定义描述下方标签区域 |
  | footer | 自定义右下角内容 |
##### 外部样式类
  | 类名 | 说明 |
  | :--- | :--- |
  | custom-class | 根节点样式类 |
  | thumb-class | 左侧图片样式类 |
  | title-class | 标题样式类 |
  | price-class | 价格样式类 |
  | origin-price-class | 划线原价样式类 |
  | desc-class | 描述样式类 |
  | num-class | 数量样式类 |
`,
  "van-submit-bar": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | price | 价格（单位分） | number | - |
  | label | 价格文案 | string | 合计： |
  | suffix-label | 价格右侧文案 | string | - |
  | button-text | 按钮文字 | string | - |
  | button-type | 按钮类型 | string | danger |
  | tip | 提示文案 | string | boolean | - |
  | tip-icon | 图标名称或图片链接，可选值见 Icon 组件 | string | - |
  | disabled | 是否禁用按钮 | boolean | false |
  | loading | 是否显示加载中的按钮 | boolean | false |
  | currency | 货币符号 | string | ¥ |
  | safe-area-inset-bottom | 是否为 iPhoneX 留出底部安全距离 | boolean | true |
  | decimal-length | 价格小数点后位数 | number | 2 |
##### Events
  | 事件名 | 说明 | 参数 |
  | :--- | :--- | :--- |
  | bind:submit | 按钮点击事件回调 | - |
##### Slot
  | 名称 | 说明 |
  | :--- | :--- |
  | - | 自定义订单栏左侧内容 |
  | top | 自定义订单栏上方内容 |
  | tip | 提示文案中的额外操作和说明 |
##### 外部样式类
  | 类名 | 说明 |
  | :--- | :--- |
  | custom-class | 根节点样式类 |
  | price-class | 价格样式类 |
  | button-class | 按钮样式类 |
  | bar-class | 订单栏样式类 |
`,
  "van-goods-action": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | safe-area-inset-bottom | 是否为 iPhoneX 留出底部安全距离 | boolean | true |
##### Events
  | 事件名 | 说明 | 参数 |
  | :--- | :--- | :--- |
  | bind:click | 按钮点击事件回调 | - |
`,
  "van-goods-action-icon": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | text | 按钮文字 | string | - |
  | icon | 图标类型，可选值见icon组件 | string | - |
  | info | 图标右上角提示信息 | string | number | - |
  | url | 点击后跳转的链接地址 | string | - |
  | link-type | 链接跳转类型，可选值为 redirectTo switchTab reLaunch | string | navigateTo |
  | id | 标识符 | string | - |
  | disabled | 是否禁用按钮 | boolean | false |
  | loading | 是否显示为加载状态 | boolean | false |
  | open-type | 微信开放能力，具体支持可参考 微信官方文档 | string | - |
  | app-parameter | 打开 APP 时，向 APP 传递的参数 | string | - |
  | lang | 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文 | string | en |
  | session-from | 会话来源 | string | - |
  | send-message-title | 会话内消息卡片标题 | string | 当前标题 |
  | send-message-path | 会话内消息卡片点击跳转小程序路径 | string | 当前分享路径 |
  | send-message-img | sendMessageImg | string | 截图 |
  | show-message-card | 显示会话内消息卡片 | string | false |
  | class-prefix v1.10.1 | 类名前缀 | string | van-icon |
##### Slot
  | 名称 | 说明 |
  | :--- | :--- |
  | icon | 自定义图标 |
##### 外部样式类
  | 类名 | 说明 |
  | :--- | :--- |
  | icon-class | 图标样式类 |
  | text-class | 文字样式类 |
`,
  "van-goods-action-button": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | text | 按钮文字 | string | - |
  | color | 按钮颜色，支持传入 linear-gradient 渐变色 | string | - |
  | url | 点击后跳转的链接地址 | string | - |
  | link-type | 链接跳转类型，可选值为 redirectTo switchTab reLaunch | string | navigateTo |
  | id | 标识符 | string | - |
  | type | 按钮类型，可选值为 primary warning danger | string | danger |
  | plain | 是否为朴素按钮 | boolean | false |
  | size | 按钮尺寸，可选值为 normal large small mini | string | normal |
  | disabled | 是否禁用按钮 | boolean | false |
  | loading | 是否显示为加载状态 | boolean | false |
  | open-type | 微信开放能力，具体支持可参考 微信官方文档 | string | - |
  | app-parameter | 打开 APP 时，向 APP 传递的参数 | string | - |
  | lang | 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文 | string | en |
  | session-from | 会话来源 | string | - |
  | send-message-title | 会话内消息卡片标题 | string | 当前标题 |
  | send-message-path | 会话内消息卡片点击跳转小程序路径 | string | 当前分享路径 |
  | send-message-img | sendMessageImg | string | 截图 |
  | show-message-card | 显示会话内消息卡片 | string | false |
##### Slot
  | 名称 | 说明 |
  | :--- | :--- |
  | - | 按钮显示内容 |
##### 外部样式类
  | 类名 | 说明 |
  | :--- | :--- |
  | custom-class | 根节点样式类 |
`,
  "van-panel": `##### Props
  | 参数 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | title | 标题 | string | - |
  | desc | 描述 | string | - |
  | status | 状态 | string | - |
##### Slot
  | 名称 | 说明 |
  | :--- | :--- |
  | - | 自定义内容 |
  | header | 自定义 header，如果设置了title、desc、status属性则不生效 |
  | footer | 自定义 footer |
##### 外部样式类
  | 类名 | 说明 |
  | :--- | :--- |
  | custom-class | 根节点样式类 |
  | header-class | 头部样式类 |
  | footer-class | 底部样式类 |
`,

}