export default {
  "van-button": {
    "_self": {
      "description": "按钮用于触发一个操作，如提交表单。",
      "text": [`<van-button type="default">默认按钮</van-button>`],
    },
    "id": {
      "type": "attribute",
      "description": `标识符`,
      "values": ["primary"],
    },
    "type": {
      "type": "attribute",
      "description": `按钮类型，可选值为 primary info warning danger`,
      "values": ['primary', 'info', 'warning', 'danger'],
    },
    "size": {
      "type": "attribute",
      "description": `按钮尺寸，可选值为 normal large small mini`,
      "values": ['normal', 'large', 'small', 'mini'],
    },
    "colorv": {
      "type": "attribute",
      "description": `按钮颜色，支持传入linear-gradient渐变色`,
      "values": [],
    },
    "icon": {
      "type": "attribute",
      "description": `左侧图标名称或图片链接，可选值见 Icon 组件`,
      "values": [],
    },
    "class-prefix": {
      "type": "attribute",
      "description": `图标类名前缀，同 Icon 组件的 class-prefix 属性`,
      "values": [],
    },
    "plain": {
      "type": "attribute",
      "description": `是否为朴素按钮`,
      "values": [],
    },
    "block": {
      "type": "attribute",
      "description": `是否为块级元素`,
      "values": [],
    },
    "round": {
      "type": "attribute",
      "description": `是否为圆形按钮`,
      "values": [],
    },
    "square": {
      "type": "attribute",
      "description": `是否为方形按钮`,
      "values": [],
    },
    "disabled": {
      "type": "attribute",
      "description": `是否禁用按钮`,
      "values": [],
    },
    "hairline": {
      "type": "attribute",
      "description": `是否使用 0.5px 边框`,
      "values": [],
    },
    "loading": {
      "type": "attribute",
      "description": `是否显示为加载状态`,
      "values": [],
    },
    "loading-text": {
      "type": "attribute",
      "description": `加载状态提示文字`,
      "values": [],
    },
    "loading-type": {
      "type": "attribute",
      "description": `加载状态图标类型，可选值为 spinner`,
      "values": ['spinner'],
    },
    "loading-size": {
      "type": "attribute",
      "description": `加载图标大小`,
      "values": [],
    },
    "custom-style": {
      "type": "attribute",
      "description": `自定义样式`,
      "values": [],
    },
    "open-type": {
      "type": "attribute",
      "description": `微信开放能力，具体支持可参考 微信官方文档`,
      "values": [],
    },
    "app-parameter": {
      "type": "attribute",
      "description": `打开 APP 时，向 APP 传递的参数`,
      "values": [],
    },
    "lang": {
      "type": "attribute",
      "description": `指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文`,
      "values": [],
    },
    "session-from": {
      "type": "attribute",
      "description": `会话来源`,
      "values": [],
    },
    "business-id": {
      "type": "attribute",
      "description": `客服消息子商户 id`,
      "values": [],
    },
    "send-message-title": {
      "type": "attribute",
      "description": `会话内消息卡片标题`,
      "values": [],
    },
    "send-message-path": {
      "type": "attribute",
      "description": `会话内消息卡片点击跳转小程序路径`,
      "values": [],
    },
    "send-message-img": {
      "type": "attribute",
      "description": `sendMessageImg`,
      "values": [],
    },
    "show-message-card": {
      "type": "attribute",
      "description": `显示会话内消息卡片`,
      "values": [],
    },
    "dataset": {
      "type": "attribute",
      "description": `按钮 dataset，open-type 为 share 时，可在 onShareAppMessage 事件的 event.target.dataset.detail 中看到传入的值`,
      "values": [],
    },
    "form-type": {
      "type": "attribute",
      "description": `用于 form 组件，可选值为submit reset，点击分别会触发 form 组件的 submit/reset 事件`,
      "values": [],
    },
    "bind:click": {
      "type": "attribute",
      "description": `点击按钮，且按钮状态不为加载或禁用时触发`,
      "values": [],
    },
    "bind:getuserinfo": {
      "type": "attribute",
      "description": `用户点击该按钮时，会返回获取到的用户信息，从返回参数的 detail 中获取到的值同 wx.getUserInfo`,
      "values": [],
    },
    "bind:contact": {
      "type": "attribute",
      "description": `客服消息回调`,
      "values": [],
    },
    "bind:getphonenumber": {
      "type": "attribute",
      "description": `获取用户手机号回调`,
      "values": [],
    },
    "bind:error": {
      "type": "attribute",
      "description": `当使用开放能力时，发生错误的回调`,
      "values": [],
    },
    "bind:opensetting": {
      "type": "attribute",
      "description": `在打开授权设置页后回调`,
      "values": [],
    },
    "bind:chooseavatar": {
      "type": "attribute",
      "description": `当 open-type 的值为 chooseAvatar 时，选择头像之后的回调`,
      "values": [],
    },
    "custom-class": {
      "type": "attribute",
      "description": `根节点样式类`,
      "values": [],
    },
    "loading-class": {
      "type": "attribute",
      "description": `加载图标样式类`,
      "values": [],
    },
  },
  "van-button:按钮类型": {
    "_self": {
      "description": "按钮用于触发一个操作，如提交表单。",
      "text": [`<van-button type="default">默认按钮</van-button>`],
    },
  },
  "van-button:朴素按钮": {
    "_self": {
      "description": "按钮用于触发一个操作，如提交表单。",
      "text": [`<van-button plain type="primary">朴素按钮</van-button>`],
    },
  },
  "van-button:细边框": {
    "_self": {
      "description": "按钮用于触发一个操作，如提交表单。",
      "text": [`<van-button plain hairline type="primary">细边框按钮</van-button>`],
    },
  },
  "van-button:禁用状态": {
    "_self": {
      "description": "按钮用于触发一个操作，如提交表单。",
      "text": [`<van-button disabled type="primary">禁用状态</van-button>`],
    },
  },
  "van-button:加载状态": {
    "_self": {
      "description": "按钮用于触发一个操作，如提交表单。",
      "text": [`<van-button loading type="primary" />`],
    },
  },
  "van-button:按钮形状": {
    "_self": {
      "description": "按钮用于触发一个操作，如提交表单。",
      "text": [`<van-button square type="primary">方形按钮</van-button>`],
    },
  },
  "van-button:图标按钮": {
    "_self": {
      "description": "按钮用于触发一个操作，如提交表单。",
      "text": [`<van-button icon="star-o" type="primary" />`],
    },
  },
  "van-button:按钮尺寸": {
    "_self": {
      "description": "按钮用于触发一个操作，如提交表单。",
      "text": [`<van-button type="primary" size="large">大号按钮</van-button>`],
    },
  },
  "van-button:块级元素": {
    "_self": {
      "description": "按钮用于触发一个操作，如提交表单。",
      "text": [`<van-button type="primary" block>块级元素</van-button>`],
    },
  },
  "van-button:自定义颜色": {
    "_self": {
      "description": "按钮用于触发一个操作，如提交表单。",
      "text": [`<van-button color="#7232dd">单色按钮</van-button>`],
    },
  },
  "van-cell": {
    "_self": {
      "description": "单元格为列表中的单个展示项。",
      "text": [`<van-cell title="单元格" value="内容" />`],
    },
    "icon": {
      "type": "attribute",
      "description": `左侧图标名称或图片链接，可选值见 Icon 组件`,
      "values": [],
    },
    "title": {
      "type": "attribute",
      "description": `左侧标题`,
      "values": [],
    },
    "title-width": {
      "type": "attribute",
      "description": `标题宽度，须包含单位`,
      "values": [],
    },
    "value": {
      "type": "attribute",
      "description": `右侧内容`,
      "values": [],
    },
    "label": {
      "type": "attribute",
      "description": `标题下方的描述信息`,
      "values": [],
    },
    "size": {
      "type": "attribute",
      "description": `单元格大小，可选值为 large`,
      "values": ['large'],
    },
    "border": {
      "type": "attribute",
      "description": `是否显示下边框`,
      "values": [],
    },
    "center": {
      "type": "attribute",
      "description": `是否使内容垂直居中`,
      "values": [],
    },
    "url": {
      "type": "attribute",
      "description": `点击后跳转的链接地址`,
      "values": [],
    },
    "link-type": {
      "type": "attribute",
      "description": `链接跳转类型，可选值为 redirectTo switchTab reLaunch`,
      "values": ['redirectTo', 'switchTab', 'reLaunch'],
    },
    "clickable": {
      "type": "attribute",
      "description": `是否开启点击反馈`,
      "values": [],
    },
    "is-link": {
      "type": "attribute",
      "description": `是否展示右侧箭头并开启点击反馈`,
      "values": [],
    },
    "required": {
      "type": "attribute",
      "description": `是否显示表单必填星号`,
      "values": [],
    },
    "arrow-direction": {
      "type": "attribute",
      "description": `箭头方向，可选值为 left up down`,
      "values": ['left', 'up', 'down'],
    },
    "use-label-slot": {
      "type": "attribute",
      "description": `是否使用 label slot`,
      "values": [],
    },
    "title-stylev": {
      "type": "attribute",
      "description": `标题样式`,
      "values": [],
    },
  },
  "van-cell:基础用法": {
    "_self": {
      "description": "单元格为列表中的单个展示项。",
      "text": [`<van-cell title="单元格" value="内容" />`],
    },
  },
  "van-cell:卡片风格": {
    "_self": {
      "description": "单元格为列表中的单个展示项。",
      "text": [`<van-cell title="单元格" value="内容" />`],
    },
  },
  "van-cell:单元格大小": {
    "_self": {
      "description": "单元格为列表中的单个展示项。",
      "text": [`<van-cell title="单元格" value="内容" size="large" />`],
    },
  },
  "van-cell:展示图标": {
    "_self": {
      "description": "单元格为列表中的单个展示项。",
      "text": [`<van-cell title="单元格" icon="location-o" />`],
    },
  },
  "van-cell:展示箭头": {
    "_self": {
      "description": "单元格为列表中的单个展示项。",
      "text": [`<van-cell title="单元格" is-link />`],
    },
  },
  "van-cell:页面跳转": {
    "_self": {
      "description": "单元格为列表中的单个展示项。",
      "text": [`<van-cell
  is-link
  title="单元格"
  link-type="navigateTo"
  url="/pages/dashboard/index"
/>
`],
    },
  },
  "van-cell:分组标题": {
    "_self": {
      "description": "单元格为列表中的单个展示项。",
      "text": [`<van-cell-group title="分组1">
  <van-cell title="单元格" value="内容" />
</van-cell-group>
<van-cell-group title="分组2">
  <van-cell title="单元格" value="内容" />
</van-cell-group>`],
    },
  },
  "van-cell:使用插槽": {
    "_self": {
      "description": "单元格为列表中的单个展示项。",
      "text": [`<van-cell value="内容" icon="shop-o" is-link>
  <view slot="title">
    <view class="van-cell-text">单元格</view>
    <van-tag type="danger">标签</van-tag>
  </view>
</van-cell>`],
    },
  },
  "van-cell:垂直居中": {
    "_self": {
      "description": "单元格为列表中的单个展示项。",
      "text": [`<van-cell center title="单元格" value="内容" label="描述信息" />`],
    },
  },
  "van-cell-group": {
    "_self": {
      "description": "",
      "text": [`<van-cell-group>
  <van-cell title="单元格" value="内容" />
</van-cell-group>`],
    },
    "title": {
      "type": "attribute",
      "description": `分组标题`,
      "values": [],
    },
    "insetv": {
      "type": "attribute",
      "description": `是否展示为圆角卡片风格`,
      "values": [],
    },
    "border": {
      "type": "attribute",
      "description": `是否显示外边框`,
      "values": [],
    },
  },
  "van-icon": {
    "_self": {
      "description": "基于字体的图标集，可以通过 Icon 组件使用，也可以在其他组件中通过 icon 属性引用。",
      "text": [`<van-icon name="close" />`],
    },
    "name": {
      "type": "attribute",
      "description": `图标名称或图片链接`,
      "values": [],
    },
    "dot": {
      "type": "attribute",
      "description": `是否显示图标右上角小红点`,
      "values": [],
    },
    "info": {
      "type": "attribute",
      "description": `图标右上角文字提示`,
      "values": [],
    },
    "color": {
      "type": "attribute",
      "description": `图标颜色`,
      "values": [],
    },
    "size": {
      "type": "attribute",
      "description": `图标大小，如 20px，2em，默认单位为px`,
      "values": [],
    },
    "custom-style": {
      "type": "attribute",
      "description": `自定义样式`,
      "values": [],
    },
    "class-prefix": {
      "type": "attribute",
      "description": `类名前缀`,
      "values": [],
    },
    "bind:click": {
      "type": "attribute",
      "description": `点击图标时触发`,
      "values": [],
    },
    "custom-class": {
      "type": "attribute",
      "description": `根节点样式类`,
      "values": [],
    },
  },
  "van-icon:基础用法": {
    "_self": {
      "description": "基于字体的图标集，可以通过 Icon 组件使用，也可以在其他组件中通过 icon 属性引用。",
      "text": [`<van-icon name="close" />`],
    },
  },
  "van-icon:提示信息": {
    "_self": {
      "description": "基于字体的图标集，可以通过 Icon 组件使用，也可以在其他组件中通过 icon 属性引用。",
      "text": [`<van-icon name="chat" dot />`],
    },
  },
  "van-icon:图标颜色": {
    "_self": {
      "description": "基于字体的图标集，可以通过 Icon 组件使用，也可以在其他组件中通过 icon 属性引用。",
      "text": [`<van-icon name="chat" color="red" />`],
    },
  },
  "van-icon:图标大小": {
    "_self": {
      "description": "基于字体的图标集，可以通过 Icon 组件使用，也可以在其他组件中通过 icon 属性引用。",
      "text": [`<van-icon name="chat" size="50px" />
`],
    },
  },
  "van-image": {
    "_self": {
      "description": "增强版的 img 标签，提供多种图片填充模式，支持图片懒加载、加载中提示、加载失败提示。",
      "text": [`<van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
`],
    },
    "src": {
      "type": "attribute",
      "description": `图片链接`,
      "values": [],
    },
    "fit": {
      "type": "attribute",
      "description": `图片填充模式`,
      "values": [],
    },
    "alt": {
      "type": "attribute",
      "description": `替代文本`,
      "values": [],
    },
    "width": {
      "type": "attribute",
      "description": `宽度，默认单位为px`,
      "values": [],
    },
    "height": {
      "type": "attribute",
      "description": `高度，默认单位为px`,
      "values": [],
    },
    "radius": {
      "type": "attribute",
      "description": `圆角大小，默认单位为px`,
      "values": [],
    },
    "round": {
      "type": "attribute",
      "description": `是否显示为圆形`,
      "values": [],
    },
    "lazy-load": {
      "type": "attribute",
      "description": `是否懒加载`,
      "values": [],
    },
    "webpv": {
      "type": "attribute",
      "description": `是否解析 webp 格式`,
      "values": [],
    },
    "show-error": {
      "type": "attribute",
      "description": `是否展示图片加载失败提示`,
      "values": [],
    },
    "show-loading": {
      "type": "attribute",
      "description": `是否展示图片加载中提示`,
      "values": [],
    },
    "use-error-slot": {
      "type": "attribute",
      "description": `是否使用 error 插槽`,
      "values": [],
    },
    "use-loading-slot": {
      "type": "attribute",
      "description": `是否使用 loading 插槽`,
      "values": [],
    },
    "show-menu-by-longpress": {
      "type": "attribute",
      "description": `是否开启长按图片显示识别小程序码菜单`,
      "values": [],
    },
    "bind:click": {
      "type": "attribute",
      "description": `点击图片时触发`,
      "values": [],
    },
    "bind:load": {
      "type": "attribute",
      "description": `图片加载完毕时触发`,
      "values": [],
    },
    "bind:error": {
      "type": "attribute",
      "description": `图片加载失败时触发`,
      "values": [],
    },
    "custom-class": {
      "type": "attribute",
      "description": `根节点样式类`,
      "values": [],
    },
    "image-class": {
      "type": "attribute",
      "description": `图片样式类`,
      "values": [],
    },
    "loading-class": {
      "type": "attribute",
      "description": `loading 样式类`,
      "values": [],
    },
    "error-class": {
      "type": "attribute",
      "description": `error 样式类`,
      "values": [],
    },
  },
  "van-image:基础用法": {
    "_self": {
      "description": "增强版的 img 标签，提供多种图片填充模式，支持图片懒加载、加载中提示、加载失败提示。",
      "text": [`<van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
`],
    },
  },
  "van-image:填充模式": {
    "_self": {
      "description": "增强版的 img 标签，提供多种图片填充模式，支持图片懒加载、加载中提示、加载失败提示。",
      "text": [`<van-image
  width="10rem"
  height="10rem"
  fit="contain"
  src="https://img.yzcdn.cn/vant/cat.jpeg"
/>
`],
    },
  },
  "van-image:圆形图片": {
    "_self": {
      "description": "增强版的 img 标签，提供多种图片填充模式，支持图片懒加载、加载中提示、加载失败提示。",
      "text": [`<van-image
  round
  width="10rem"
  height="10rem"
  src="https://img.yzcdn.cn/vant/cat.jpeg"
/>
`],
    },
  },
  "van-image:图片懒加载": {
    "_self": {
      "description": "增强版的 img 标签，提供多种图片填充模式，支持图片懒加载、加载中提示、加载失败提示。",
      "text": [`<van-image
  width="100"
  height="100"
  lazy-load
  src="https://img.yzcdn.cn/vant/cat.jpeg"
/>
`],
    },
  },
  "van-image:加载中提示": {
    "_self": {
      "description": "增强版的 img 标签，提供多种图片填充模式，支持图片懒加载、加载中提示、加载失败提示。",
      "text": [`<van-image use-loading-slot>
  <van-loading slot="loading" type="spinner" size="20" vertical />
</van-image>
`],
    },
  },
  "van-image:加载失败提示": {
    "_self": {
      "description": "增强版的 img 标签，提供多种图片填充模式，支持图片懒加载、加载中提示、加载失败提示。",
      "text": [`<van-image use-error-slot>
  <text slot="error">加载失败</text>
</van-image>
`],
    },
  },
  "van-col": {
    "_self": {
      "description": "Layout 提供了<code>van-row</code>和<code>van-col</code>两个组件来进行行列布局。",
      "text": [`<van-col span="8"></van-col>`],
    },
    "span": {
      "type": "attribute",
      "description": `列元素宽度`,
      "values": [],
    },
    "offset": {
      "type": "attribute",
      "description": `列元素偏移距离`,
      "values": [],
    },
    "custom-class": {
      "type": "attribute",
      "description": `根节点样式类`,
      "values": [],
    },
  },
  "van-col:基本用法": {
    "_self": {
      "description": "Layout 提供了<code>van-row</code>和<code>van-col</code>两个组件来进行行列布局。",
      "text": [`<van-col span="8"></van-col>`],
    },
  },
  "van-col:设置列元素间距": {
    "_self": {
      "description": "Layout 提供了<code>van-row</code>和<code>van-col</code>两个组件来进行行列布局。",
      "text": [`<van-col span="8"></van-col>`],
    },
  },
  "van-row": {
    "_self": {
      "description": "",
      "text": [`<van-row gutter="20">
  <van-col span="8"></van-col>
</van-row>`],
    },
    "gutter": {
      "type": "attribute",
      "description": `列元素之间的间距（单位为 px）`,
      "values": [],
    },
  },
  "van-popup": {
    "_self": {
      "description": "弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示。",
      "text": [`<van-popup show="{{ show }}" bind:close="onClose">内容</van-popup>`],
    },
    "show": {
      "type": "attribute",
      "description": `是否显示弹出层`,
      "values": [],
    },
    "z-index": {
      "type": "attribute",
      "description": `z-index 层级`,
      "values": [],
    },
    "overlay": {
      "type": "attribute",
      "description": `是否显示遮罩层`,
      "values": [],
    },
    "position": {
      "type": "attribute",
      "description": `弹出位置，可选值为 top bottom right left`,
      "values": ['top', 'bottom', 'right', 'left'],
    },
    "duration": {
      "type": "attribute",
      "description": `动画时长，单位为毫秒`,
      "values": [],
    },
    "round": {
      "type": "attribute",
      "description": `是否显示圆角`,
      "values": [],
    },
    "custom-style": {
      "type": "attribute",
      "description": `自定义弹出层样式`,
      "values": [],
    },
    "overlay-style": {
      "type": "attribute",
      "description": `自定义遮罩层样式`,
      "values": [],
    },
    "close-on-click-overlay": {
      "type": "attribute",
      "description": `是否在点击遮罩层后关闭`,
      "values": [],
    },
    "closeable": {
      "type": "attribute",
      "description": `是否显示关闭图标`,
      "values": [],
    },
    "close-icon": {
      "type": "attribute",
      "description": `关闭图标名称或图片链接`,
      "values": [],
    },
    "safe-area-inset-bottom": {
      "type": "attribute",
      "description": `是否为 iPhoneX 留出底部安全距离`,
      "values": [],
    },
    "safe-area-inset-top": {
      "type": "attribute",
      "description": `是否留出顶部安全距离（状态栏高度）`,
      "values": [],
    },
    "safe-area-tab-bar": {
      "type": "attribute",
      "description": `是否留出底部 tabbar 安全距离（在使用 tabbar 组件 & 小程序自定义 tabbar 时，popup 组件层级无法盖住 tabbar）`,
      "values": [],
    },
    "lock-scrollv": {
      "type": "attribute",
      "description": `是否锁定背景滚动`,
      "values": [],
    },
    "bind:close": {
      "type": "attribute",
      "description": `关闭弹出层时触发`,
      "values": [],
    },
    "bind:click-overlay": {
      "type": "attribute",
      "description": `点击遮罩层时触发`,
      "values": [],
    },
    "bind:before-enter": {
      "type": "attribute",
      "description": `进入前触发`,
      "values": [],
    },
    "bind:enter": {
      "type": "attribute",
      "description": `进入中触发`,
      "values": [],
    },
    "bind:after-enter": {
      "type": "attribute",
      "description": `进入后触发`,
      "values": [],
    },
    "bind:before-leave": {
      "type": "attribute",
      "description": `离开前触发`,
      "values": [],
    },
    "bind:leave": {
      "type": "attribute",
      "description": `离开中触发`,
      "values": [],
    },
    "bind:after-leave": {
      "type": "attribute",
      "description": `离开后触发`,
      "values": [],
    },
    "custom-class": {
      "type": "attribute",
      "description": `根节点样式类`,
      "values": [],
    },
  },
  "van-popup:基础用法": {
    "_self": {
      "description": "弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示。",
      "text": [`<van-popup show="{{ show }}" bind:close="onClose">内容</van-popup>`],
    },
  },
  "van-popup:弹出位置": {
    "_self": {
      "description": "弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示。",
      "text": [`<van-popup
  show="{{ show }}"
  position="top"
  custom-style="height: 20%;"
  bind:close="onClose"
/>
`],
    },
  },
  "van-popup:关闭图标": {
    "_self": {
      "description": "弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示。",
      "text": [`<van-popup
  show="{{ show }}"
  closeable
  position="bottom"
  custom-style="height: 20%"
  bind:close="onClose"
/>`],
    },
  },
  "van-popup:圆角弹窗": {
    "_self": {
      "description": "弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示。",
      "text": [`<van-popup
  show="{{ show }}"
  round
  position="bottom"
  custom-style="height: 20%"
  bind:close="onClose"
/>`],
    },
  },
  "van-popup:禁止滚动穿透": {
    "_self": {
      "description": "弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示。",
      "text": [`<!-- page-meta 只能是页面内的第一个节点 -->
<page-meta page-style="{{ show ? 'overflow: hidden;' : '' }}" />
<van-popup show="{{ show }}" catch:touchstart />
`],
    },
  },
  "van-common": {
    "_self": {
      "description": "Vant 中默认包含了一些常用样式，可以直接通过 className 的方式使用。",
      "text": [`<view class="van-ellipsis">
  这是一段宽度限制 250px 的文字，后面的内容会省略。
</view>`],
    },
  },
  "van-common:文字省略": {
    "_self": {
      "description": "Vant 中默认包含了一些常用样式，可以直接通过 className 的方式使用。",
      "text": [`<view class="van-ellipsis">
  这是一段宽度限制 250px 的文字，后面的内容会省略。
</view>`],
    },
  },
  "van-common:1px 边框": {
    "_self": {
      "description": "Vant 中默认包含了一些常用样式，可以直接通过 className 的方式使用。",
      "text": [`<view class="van-hairline--top"></view>`],
    },
  },
  "van-common:全局字体": {
    "_self": {
      "description": "Vant 中默认包含了一些常用样式，可以直接通过 className 的方式使用。",
      "text": [`page {
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica,
    Segoe UI, Arial, Roboto, 'PingFang SC', 'miui', 'Hiragino Sans GB', 'Microsoft Yahei',
    sans-serif;
}
`],
    },
  },
  "van-toast": {
    "_self": {
      "description": "在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景。",
      "text": [`Toast('')`],
    },
  },
  "van-toast:文字提示": {
    "_self": {
      "description": "在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景。",
      "text": [`Toast('')`],
    },
  },
  "van-toast:加载提示": {
    "_self": {
      "description": "在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景。",
      "text": [`Toast.loading({
  message: '加载中...',
  forbidClick: true,
})`],
    },
  },
  "van-toast:成功提示": {
    "_self": {
      "description": "在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景。",
      "text": [`Toast.success('')`],
    },
  },
  "van-toast:失败提示": {
    "_self": {
      "description": "在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景。",
      "text": [`Toast.fail('')`],
    },
  },
  "van-toast:动态更新提示": {
    "_self": {
      "description": "在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景。",
      "text": [`const toast = Toast.loading({
  duration: 0, // 持续展示 toast
  forbidClick: true,
  message: '倒计时 3 秒',
  selector: '#custom-selector',
});

let second = 3;
const timer = setInterval(() => {
  second--;
  if (second) {
    toast.setData({
      message: \`倒计时 \${second} 秒\`,
    });
  } else {
    clearInterval(timer);
    Toast.clear();
  }
}, 1000);`],
    },
  },
  "van-toast:OnClose 回调函数": {
    "_self": {
      "description": "在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景。",
      "text": [`Toast({
  type: 'success',
  message: '提交成功',
  onClose: () => {
    console.log('执行OnClose函数');
  },
});
`],
    },
  },
  "van-transition": {
    "_self": {
      "description": "使元素从一种样式逐渐变化为另一种样式的效果。",
      "text": [`<van-transition show="{{ show }}" custom-class="block">内容</van-transition>`],
    },
    "name": {
      "type": "attribute",
      "description": `动画类型`,
      "values": [],
    },
    "show": {
      "type": "attribute",
      "description": `是否展示组件`,
      "values": [],
    },
    "duration": {
      "type": "attribute",
      "description": `动画时长，单位为毫秒`,
      "values": [],
    },
    "custom-style": {
      "type": "attribute",
      "description": `自定义样式`,
      "values": [],
    },
    "bind:before-enter": {
      "type": "attribute",
      "description": `进入前触发`,
      "values": [],
    },
    "bind:enter": {
      "type": "attribute",
      "description": `进入中触发`,
      "values": [],
    },
    "bind:after-enter": {
      "type": "attribute",
      "description": `进入后触发`,
      "values": [],
    },
    "bind:before-leave": {
      "type": "attribute",
      "description": `离开前触发`,
      "values": [],
    },
    "bind:leave": {
      "type": "attribute",
      "description": `离开中触发`,
      "values": [],
    },
    "bind:after-leave": {
      "type": "attribute",
      "description": `离开后触发`,
      "values": [],
    },
    "custom-class": {
      "type": "attribute",
      "description": `根节点样式类`,
      "values": [],
    },
    "enter-class": {
      "type": "attribute",
      "description": `定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。`,
      "values": [],
    },
    "enter-active-class": {
      "type": "attribute",
      "description": `定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。`,
      "values": [],
    },
    "enter-to-class": {
      "type": "attribute",
      "description": `定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 enter-class 被移除)，在过渡/动画完成之后移除。`,
      "values": [],
    },
    "leave-class": {
      "type": "attribute",
      "description": `定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。`,
      "values": [],
    },
    "leave-active-class": {
      "type": "attribute",
      "description": `定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。`,
      "values": [],
    },
    "leave-to-class": {
      "type": "attribute",
      "description": `定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 leave-class 被删除)，在过渡/动画完成之后移除。`,
      "values": [],
    },
  },
  "van-transition:基础用法": {
    "_self": {
      "description": "使元素从一种样式逐渐变化为另一种样式的效果。",
      "text": [`<van-transition show="{{ show }}" custom-class="block">内容</van-transition>
`],
    },
  },
  "van-transition:动画类型": {
    "_self": {
      "description": "使元素从一种样式逐渐变化为另一种样式的效果。",
      "text": [`<van-transition name="fade-up" />
`],
    },
  },
  "van-transition:高级用法": {
    "_self": {
      "description": "使元素从一种样式逐渐变化为另一种样式的效果。",
      "text": [`<van-transition
  show="{{ show }}"
  name=""
  duration="{{ { enter: 300, leave: 1000 } }}"
  enter-class="van-enter-class"
  enter-active-class="van-enter-active-class"
  leave-active-class="van-leave-active-class"
  leave-to-class="van-leave-to-class"
/>
`],
    },
  },
  "van-calendar": {
    "_self": {
      "description": "日历组件用于选择日期或日期区间。",
      "text": [`<van-calendar show="{{ show }}" bind:close="onClose" bind:confirm="onConfirm" />`],
    },
    "type": {
      "type": "attribute",
      "description": `选择类型:single表示选择单个日期，multiple表示选择多个日期，range表示选择日期区间`,
      "values": [],
    },
    "title": {
      "type": "attribute",
      "description": `日历标题`,
      "values": [],
    },
    "color": {
      "type": "attribute",
      "description": `主题色，对底部按钮和选中日期生效`,
      "values": [],
    },
    "min-date": {
      "type": "attribute",
      "description": `可选择的最小日期`,
      "values": [],
    },
    "max-date": {
      "type": "attribute",
      "description": `可选择的最大日期`,
      "values": [],
    },
    "default-date": {
      "type": "attribute",
      "description": `默认选中的日期，type为multiple或range时为数组`,
      "values": [],
    },
    "row-height": {
      "type": "attribute",
      "description": `日期行高`,
      "values": [],
    },
    "formatter": {
      "type": "attribute",
      "description": `日期格式化函数`,
      "values": [],
    },
    "poppable": {
      "type": "attribute",
      "description": `是否以弹层的形式展示日历`,
      "values": [],
    },
    "show-mark": {
      "type": "attribute",
      "description": `是否显示月份背景水印`,
      "values": [],
    },
    "show-title": {
      "type": "attribute",
      "description": `是否展示日历标题`,
      "values": [],
    },
    "show-subtitle": {
      "type": "attribute",
      "description": `是否展示日历副标题（年月）`,
      "values": [],
    },
    "show-confirm": {
      "type": "attribute",
      "description": `是否展示确认按钮`,
      "values": [],
    },
    "confirm-text": {
      "type": "attribute",
      "description": `确认按钮的文字`,
      "values": [],
    },
    "confirm-disabled-text": {
      "type": "attribute",
      "description": `确认按钮处于禁用状态时的文字`,
      "values": [],
    },
    "first-day-of-week": {
      "type": "attribute",
      "description": `设置周起始日`,
      "values": [],
    },
    "readonlyv": {
      "type": "attribute",
      "description": `是否为只读状态，只读状态下不能选择日期`,
      "values": [],
    },
    "bind:select": {
      "type": "attribute",
      "description": `点击任意日期时触发`,
      "values": [],
    },
    "bind:unselect": {
      "type": "attribute",
      "description": `当 Calendar 的 type 为 multiple 时,点击已选中的日期时触发`,
      "values": [],
    },
    "bind:confirm": {
      "type": "attribute",
      "description": `日期选择完成后触发，若show-confirm为true，则点击确认按钮后触发`,
      "values": [],
    },
    "bind:open": {
      "type": "attribute",
      "description": `打开弹出层时触发`,
      "values": [],
    },
    "bind:close": {
      "type": "attribute",
      "description": `关闭弹出层时触发`,
      "values": [],
    },
    "bind:opened": {
      "type": "attribute",
      "description": `打开弹出层且动画结束后触发`,
      "values": [],
    },
    "bind:closed": {
      "type": "attribute",
      "description": `关闭弹出层且动画结束后触发`,
      "values": [],
    },
    "bind:over-range": {
      "type": "attribute",
      "description": `范围选择超过最多可选天数时触发`,
      "values": [],
    },
    "bind:click-subtitlev": {
      "type": "attribute",
      "description": `点击日历副标题时触发`,
      "values": [],
    },
  },
  "van-calendar:选择单个日期": {
    "_self": {
      "description": "日历组件用于选择日期或日期区间。",
      "text": [`<van-calendar show="{{ show }}" bind:close="onClose" bind:confirm="onConfirm" />`],
    },
  },
  "van-calendar:选择多个日期": {
    "_self": {
      "description": "日历组件用于选择日期或日期区间。",
      "text": [`<van-calendar
  show="{{ show }}"
  type="multiple"
  bind:close="onClose"
  bind:confirm="onConfirm"
/>`],
    },
  },
  "van-calendar:选择日期区间": {
    "_self": {
      "description": "日历组件用于选择日期或日期区间。",
      "text": [`<van-calendar
  show="{{ show }}"
  type="range"
  bind:close="onClose"
  bind:confirm="onConfirm"
/>`],
    },
  },
  "van-calendar:快捷选择": {
    "_self": {
      "description": "日历组件用于选择日期或日期区间。",
      "text": [`<van-calendar show="{{ show }}" show-confirm="{{ false }}" />`],
    },
  },
  "van-calendar:自定义颜色": {
    "_self": {
      "description": "日历组件用于选择日期或日期区间。",
      "text": [`<van-calendar show="{{ show }}" color="#07c160" />`],
    },
  },
  "van-calendar:自定义日期范围": {
    "_self": {
      "description": "日历组件用于选择日期或日期区间。",
      "text": [`<van-calendar
  show="{{ show }}"
  min-date="{{ minDate }}"
  max-date="{{ maxDate }}"
/>
`],
    },
  },
  "van-calendar:自定义按钮文字": {
    "_self": {
      "description": "日历组件用于选择日期或日期区间。",
      "text": [`<van-calendar
  show="{{ show }}"
  type="range"
  confirm-text="完成"
  confirm-disabled-text="请选择结束时间"
/>
`],
    },
  },
  "van-calendar:自定义日期文案": {
    "_self": {
      "description": "日历组件用于选择日期或日期区间。",
      "text": [`<van-calendar show="{{ show }}" type="range" formatter="{{ formatter }}" />`],
    },
  },
  "van-calendar:自定义弹出位置": {
    "_self": {
      "description": "日历组件用于选择日期或日期区间。",
      "text": [`<van-calendar show="{{ show }}" round="false" position="right" />`],
    },
  },
  "van-calendar:日期区间最大范围": {
    "_self": {
      "description": "日历组件用于选择日期或日期区间。",
      "text": [`<van-calendar type="range" max-range="{{ 3 }}" />`],
    },
  },
  "van-calendar:自定义周起始日": {
    "_self": {
      "description": "日历组件用于选择日期或日期区间。",
      "text": [`<van-calendar first-day-of-week="{{ 1 }}" />`],
    },
  },
  "van-calendar:平铺展示": {
    "_self": {
      "description": "日历组件用于选择日期或日期区间。",
      "text": [`<van-calendar
  title="日历"
  poppable="{{ false }}"
  show-confirm="{{ false }}"
  class="calendar"
/>
`],
    },
  },
  "van-poppable": {
    "_self": {
      "description": "",
      "text": [``],
    },
    "show": {
      "type": "attribute",
      "description": `是否显示日历弹窗`,
      "values": [],
    },
    "position": {
      "type": "attribute",
      "description": `弹出位置，可选值为 top right left`,
      "values": ['top', 'right', 'left'],
    },
    "round": {
      "type": "attribute",
      "description": `是否显示圆角弹窗`,
      "values": [],
    },
    "close-on-click-overlay": {
      "type": "attribute",
      "description": `是否在点击遮罩层后关闭`,
      "values": [],
    },
    "safe-area-inset-bottom": {
      "type": "attribute",
      "description": `是否开启底部安全区适配`,
      "values": [],
    },
  },
  "van-range": {
    "_self": {
      "description": "",
      "text": [``],
    },
    "max-range": {
      "type": "attribute",
      "description": `日期区间最多可选天数，默认无限制`,
      "values": [],
    },
    "range-prompt": {
      "type": "attribute",
      "description": `范围选择超过最多可选天数时的提示文案`,
      "values": [],
    },
    "show-range-prompt": {
      "type": "attribute",
      "description": `范围选择超过最多可选天数时，是否展示提示文案`,
      "values": [],
    },
    "allow-same-day": {
      "type": "attribute",
      "description": `是否允许日期范围的起止时间为同一天`,
      "values": [],
    },
  },
  "van-multiple": {
    "_self": {
      "description": "",
      "text": [``],
    },
    "min-range": {
      "type": "attribute",
      "description": `日期最少可选天数`,
      "values": [],
    },
  },
  "van-cascader": {
    "_self": {
      "description": "级联选择框，用于多层级数据的选择，典型场景为省市区选择。",
      "text": [`<van-popup show="{{ show }}" round position="bottom">
  <van-cascader
    wx:if="{{ show }}"
    value="{{ cascaderValue }}"
    title="请选择所在地区"
    options="{{ options }}"
    bind:close="onClose"
    bind:finish="onFinish"
  />
</van-popup>`],
    },
    "title": {
      "type": "attribute",
      "description": `顶部标题`,
      "values": [],
    },
    "value": {
      "type": "attribute",
      "description": `选中项的值`,
      "values": [],
    },
    "options": {
      "type": "attribute",
      "description": `可选项数据源`,
      "values": [],
    },
    "placeholder": {
      "type": "attribute",
      "description": `未选中时的提示文案`,
      "values": [],
    },
    "active-color": {
      "type": "attribute",
      "description": `选中状态的高亮颜色`,
      "values": [],
    },
    "swipeable": {
      "type": "attribute",
      "description": `是否开启手势左右滑动切换`,
      "values": [],
    },
    "closeable": {
      "type": "attribute",
      "description": `是否显示关闭图标`,
      "values": [],
    },
    "show-header": {
      "type": "attribute",
      "description": `是否展示标题栏`,
      "values": [],
    },
    "close-icon": {
      "type": "attribute",
      "description": `关闭图标名称或图片链接，等同于 Icon 组件的 name 属性`,
      "values": [],
    },
    "field-names": {
      "type": "attribute",
      "description": `自定义 options 结构中的字段`,
      "values": [],
    },
    "bind:change": {
      "type": "attribute",
      "description": `选中项变化时触发`,
      "values": [],
    },
    "bind:finish": {
      "type": "attribute",
      "description": `全部选项选择完成后触发`,
      "values": [],
    },
    "bind:close": {
      "type": "attribute",
      "description": `点击关闭图标时触发`,
      "values": [],
    },
    "bind:click-tab": {
      "type": "attribute",
      "description": `点击标签时触发`,
      "values": [],
    },
  },
  "van-cascader:基础用法": {
    "_self": {
      "description": "级联选择框，用于多层级数据的选择，典型场景为省市区选择。",
      "text": [`<van-popup show="{{ show }}" round position="bottom">
  <van-cascader
    wx:if="{{ show }}"
    value="{{ cascaderValue }}"
    title="请选择所在地区"
    options="{{ options }}"
    bind:close="onClose"
    bind:finish="onFinish"
  />
</van-popup>
`],
    },
  },
  "van-cascader:自定义颜色": {
    "_self": {
      "description": "级联选择框，用于多层级数据的选择，典型场景为省市区选择。",
      "text": [`<van-cascader
  value="{{ cascaderValue }}"
  title="请选择所在地区"
  options="{{ options }}"
  active-color="#ee0a24"
  bind:close="onClose"
  bind:finish="onFinish"
/>
`],
    },
  },
  "van-cascader:异步加载选项": {
    "_self": {
      "description": "级联选择框，用于多层级数据的选择，典型场景为省市区选择。",
      "text": [`<van-popup show="{{ show }}" round position="bottom">
  <van-cascader
    wx:if="{{ show }}"
    value="{{ cascaderValue }}"
    title="请选择所在地区"
    options="{{ options }}"
    bind:close="onClose"
    bind:change="onChange"
    bind:finish="onFinish"
  />
</van-popup>
`],
    },
  },
  "van-cascader:自定义字段名": {
    "_self": {
      "description": "级联选择框，用于多层级数据的选择，典型场景为省市区选择。",
      "text": [`<van-cascader
  value="{{ code }}"
  title="请选择所在地区"
  options="{{ options }}"
  field-names="{{ fieldNames }}"
/>
`],
    },
  },
  "van-checkbox": {
    "_self": {
      "description": "在一组备选项中进行多选。",
      "text": [`<van-checkbox value="{{ checked }}" bind:change="onChange"></van-checkbox>
`],
    },
    "name": {
      "type": "attribute",
      "description": `标识 Checkbox 名称`,
      "values": [],
    },
    "shape": {
      "type": "attribute",
      "description": `形状，可选值为 round square`,
      "values": ['round', 'square'],
    },
    "value": {
      "type": "attribute",
      "description": `是否为选中状态`,
      "values": [],
    },
    "disabled": {
      "type": "attribute",
      "description": `是否禁用单选框`,
      "values": [],
    },
    "label-disabled": {
      "type": "attribute",
      "description": `是否禁用单选框内容点击`,
      "values": [],
    },
    "label-position": {
      "type": "attribute",
      "description": `文本位置，可选值为 left`,
      "values": ['left'],
    },
    "use-icon-slot": {
      "type": "attribute",
      "description": `是否使用 icon slot`,
      "values": [],
    },
    "checked-color": {
      "type": "attribute",
      "description": `选中状态颜色`,
      "values": [],
    },
    "icon-size": {
      "type": "attribute",
      "description": `icon 大小`,
      "values": [],
    },
  },
  "van-checkbox:基础用法": {
    "_self": {
      "description": "在一组备选项中进行多选。",
      "text": [`<van-checkbox value="{{ checked }}" bind:change="onChange"></van-checkbox>
`],
    },
  },
  "van-checkbox:禁用状态": {
    "_self": {
      "description": "在一组备选项中进行多选。",
      "text": [`<van-checkbox disabled value="{{ checked }}" bind:change="onChange"></van-checkbox>`],
    },
  },
  "van-checkbox:自定义形状": {
    "_self": {
      "description": "在一组备选项中进行多选。",
      "text": [`<van-checkbox value="{{ checked }}" shape="square" bind:change="onChange"></van-checkbox>`],
    },
  },
  "van-checkbox:自定义颜色": {
    "_self": {
      "description": "在一组备选项中进行多选。",
      "text": [`<van-checkbox
  value="{{ checked }}"
  checked-color="#07c160"
  bind:change="onChange"
>
</van-checkbox>`],
    },
  },
  "van-checkbox:自定义大小": {
    "_self": {
      "description": "在一组备选项中进行多选。",
      "text": [`<van-checkbox value="{{ checked }}" icon-size="25px"></van-checkbox>`],
    },
  },
  "van-checkbox:自定义图标": {
    "_self": {
      "description": "在一组备选项中进行多选。",
      "text": [`<van-checkbox use-icon-slot value="{{ checked }}" bind:change="onChange">
  自定义图标
  <image slot="icon" src="{{ checked ? activeIcon : inactiveIcon }}" />
</van-checkbox>`],
    },
  },
  "van-checkbox:禁用文本点击": {
    "_self": {
      "description": "在一组备选项中进行多选。",
      "text": [`<van-checkbox value="{{ checked }}" label-disabled></van-checkbox>`],
    },
  },
  "van-checkbox:复选框组": {
    "_self": {
      "description": "在一组备选项中进行多选。",
      "text": [`<van-checkbox name=""></van-checkbox>`],
    },
  },
  "van-checkbox:限制最大可选数": {
    "_self": {
      "description": "在一组备选项中进行多选。",
      "text": [`<van-checkbox-group value="{{ result }}" bind:change="onChange" max="{{ 2 }}">
  <van-checkbox name="a">复选框 a</van-checkbox>
</van-checkbox-group>
`],
    },
  },
  "van-checkbox:搭配单元格组件使用": {
    "_self": {
      "description": "在一组备选项中进行多选。",
      "text": [`<van-checkbox-group value="{{ result }}" bind:change="onChange">
  <van-cell-group>
    <van-cell
      wx:for="{{ list }}"
      wx:key="index"
      title="复选框 {{ item }}"
      value-class="value-class"
      clickable
      data-index="{{ index }}"
      bind:click="toggle"
    >
      <van-checkbox
        catch:tap="noop"
        class="checkboxes-{{ index }}"
        name="{{ item }}"
      />
    </van-cell>
  </van-cell-group>
</van-checkbox-group>
`],
    },
  },
  "van-checkbox-group": {
    "_self": {
      "description": "",
      "text": [`<van-checkbox-group value="{{ result }}" bind:change="onChange">
  <van-checkbox name="a">复选框 a</van-checkbox>
</van-checkbox-group>`],
    },
    "name": {
      "type": "attribute",
      "description": `在表单内提交时的标识符`,
      "values": [],
    },
    "value": {
      "type": "attribute",
      "description": `所有选中项的 name`,
      "values": [],
    },
    "disabled": {
      "type": "attribute",
      "description": `是否禁用所有单选框`,
      "values": [],
    },
    "max": {
      "type": "attribute",
      "description": `设置最大可选数`,
      "values": [],
    },
    "directionv": {
      "type": "attribute",
      "description": `排列方向，可选值为 horizontal`,
      "values": ['horizontal'],
    },
  },
  "van-datetime-picker": {
    "_self": {
      "description": "用于选择时间，支持日期、时分等时间维度，通常与 <a href=\"#/popup\" target=\"_blank\">弹出层</a> 组件配合使用。",
      "text": [`<van-datetime-picker
  type="datetime"
  value="{{ currentDate }}"
  min-date="{{ minDate }}"
  max-date="{{ maxDate }}"
  bind:input="onInput" />
`],
    },
    "value": {
      "type": "attribute",
      "description": `当前选中值`,
      "values": [],
    },
    "type": {
      "type": "attribute",
      "description": `类型，可选值为 date time year-month  不建议动态修改`,
      "values": ['date', 'time', 'year-month'],
    },
    "min-date": {
      "type": "attribute",
      "description": `可选的最小时间，精确到分钟`,
      "values": [],
    },
    "max-date": {
      "type": "attribute",
      "description": `可选的最大时间，精确到分钟`,
      "values": [],
    },
    "min-hour": {
      "type": "attribute",
      "description": `可选的最小小时，针对 time 类型`,
      "values": [],
    },
    "max-hour": {
      "type": "attribute",
      "description": `可选的最大小时，针对 time 类型`,
      "values": [],
    },
    "min-minute": {
      "type": "attribute",
      "description": `可选的最小分钟，针对 time 类型`,
      "values": [],
    },
    "max-minute": {
      "type": "attribute",
      "description": `可选的最大分钟，针对 time 类型`,
      "values": [],
    },
    "filter": {
      "type": "attribute",
      "description": `选项过滤函数(type 可能值为 year, month, day, hour, minute)`,
      "values": [],
    },
    "formatter": {
      "type": "attribute",
      "description": `选项格式化函数(type 可能值为 year, month, day, hour, minute)`,
      "values": [],
    },
    "title": {
      "type": "attribute",
      "description": `顶部栏标题`,
      "values": [],
    },
    "show-toolbar": {
      "type": "attribute",
      "description": `是否显示顶部栏`,
      "values": [],
    },
    "loading": {
      "type": "attribute",
      "description": `是否显示加载状态`,
      "values": [],
    },
    "item-height": {
      "type": "attribute",
      "description": `选项高度`,
      "values": [],
    },
    "confirm-button-text": {
      "type": "attribute",
      "description": `确认按钮文字`,
      "values": [],
    },
    "cancel-button-text": {
      "type": "attribute",
      "description": `取消按钮文字`,
      "values": [],
    },
    "visible-item-count": {
      "type": "attribute",
      "description": `可见的选项个数`,
      "values": [],
    },
    "bind:input": {
      "type": "attribute",
      "description": `当值变化时触发的事件`,
      "values": [],
    },
    "bind:change": {
      "type": "attribute",
      "description": `当值变化时触发的事件`,
      "values": [],
    },
    "bind:confirm": {
      "type": "attribute",
      "description": `点击完成按钮时触发的事件`,
      "values": [],
    },
    "bind:cancel": {
      "type": "attribute",
      "description": `点击取消按钮时触发的事件`,
      "values": [],
    },
    "active-class": {
      "type": "attribute",
      "description": `选中项样式类`,
      "values": [],
    },
    "toolbar-class": {
      "type": "attribute",
      "description": `顶部栏样式类`,
      "values": [],
    },
    "column-class": {
      "type": "attribute",
      "description": `列样式类`,
      "values": [],
    },
  },
  "van-datetime-picker:选择完整时间": {
    "_self": {
      "description": "用于选择时间，支持日期、时分等时间维度，通常与 <a href=\"#/popup\" target=\"_blank\">弹出层</a> 组件配合使用。",
      "text": [`<van-datetime-picker
  type="datetime"
  value="{{ currentDate }}"
  min-date="{{ minDate }}"
  max-date="{{ maxDate }}"
  bind:input="onInput"
/>`],
    },
  },
  "van-datetime-picker:选择日期（年月日）": {
    "_self": {
      "description": "用于选择时间，支持日期、时分等时间维度，通常与 <a href=\"#/popup\" target=\"_blank\">弹出层</a> 组件配合使用。",
      "text": [`<van-datetime-picker
  type="date"
  value="{{ currentDate }}"
  bind:input="onInput"
  min-date="{{ minDate }}"
  formatter="{{ formatter }}"
/>`],
    },
  },
  "van-datetime-picker:选择日期（年月）": {
    "_self": {
      "description": "用于选择时间，支持日期、时分等时间维度，通常与 <a href=\"#/popup\" target=\"_blank\">弹出层</a> 组件配合使用。",
      "text": [`<van-datetime-picker
  type="year-month"
  value="{{ currentDate }}"
  min-date="{{ minDate }}"
  bind:input="onInput"
/>`],
    },
  },
  "van-datetime-picker:选择时间": {
    "_self": {
      "description": "用于选择时间，支持日期、时分等时间维度，通常与 <a href=\"#/popup\" target=\"_blank\">弹出层</a> 组件配合使用。",
      "text": [`<van-datetime-picker
  type="time"
  value="{{ currentDate }}"
  min-hour="{{ minHour }}"
  max-hour="{{ maxHour }}"
  bind:input="onInput"
/>`],
    },
  },
  "van-datetime-picker:选项过滤器": {
    "_self": {
      "description": "用于选择时间，支持日期、时分等时间维度，通常与 <a href=\"#/popup\" target=\"_blank\">弹出层</a> 组件配合使用。",
      "text": [`<van-datetime-picker
  type="time"
  value="{{ currentDate }}"
  filter="{{ filter }}"
/>`],
    },
  },
  "van-field": {
    "_self": {
      "description": "用户可以在文本框内输入或编辑文字。",
      "text": [`<van-field
    value="{{ value }}"
    placeholder="请输入用户名"
    border="{{ false }}"
    bind:change="onChange"
  />`],
    },
    "name": {
      "type": "attribute",
      "description": `在表单内提交时的标识符`,
      "values": [],
    },
    "label": {
      "type": "attribute",
      "description": `输入框左侧文本`,
      "values": [],
    },
    "size": {
      "type": "attribute",
      "description": `单元格大小，可选值为 large`,
      "values": ['large'],
    },
    "value": {
      "type": "attribute",
      "description": `当前输入的值`,
      "values": [],
    },
    "type": {
      "type": "attribute",
      "description": `可设置为任意原生类型, 如 number idcard textarea digit`,
      "values": [],
    },
    "fixed": {
      "type": "attribute",
      "description": `如果 type 为 textarea 且在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true`,
      "values": [],
    },
    "focus": {
      "type": "attribute",
      "description": `获取焦点`,
      "values": [],
    },
    "border": {
      "type": "attribute",
      "description": `是否显示内边框`,
      "values": [],
    },
    "disabled": {
      "type": "attribute",
      "description": `是否禁用输入框`,
      "values": [],
    },
    "readonly": {
      "type": "attribute",
      "description": `是否只读`,
      "values": [],
    },
    "clearable": {
      "type": "attribute",
      "description": `是否启用清除控件`,
      "values": [],
    },
    "clickable": {
      "type": "attribute",
      "description": `是否开启点击反馈`,
      "values": [],
    },
    "required": {
      "type": "attribute",
      "description": `是否显示表单必填星号`,
      "values": [],
    },
    "center": {
      "type": "attribute",
      "description": `是否使内容垂直居中`,
      "values": [],
    },
    "password": {
      "type": "attribute",
      "description": `是否是密码类型`,
      "values": [],
    },
    "title-width": {
      "type": "attribute",
      "description": `标题宽度`,
      "values": [],
    },
    "maxlength": {
      "type": "attribute",
      "description": `最大输入长度，设置为 -1 的时候不限制最大长度`,
      "values": [],
    },
    "placeholder": {
      "type": "attribute",
      "description": `输入框为空时占位符`,
      "values": [],
    },
    "placeholder-style": {
      "type": "attribute",
      "description": `指定 placeholder 的样式`,
      "values": [],
    },
    "custom-style": {
      "type": "attribute",
      "description": `自定义样式`,
      "values": [],
    },
    "is-link": {
      "type": "attribute",
      "description": `是否展示右侧箭头并开启点击反馈`,
      "values": [],
    },
    "arrow-direction": {
      "type": "attribute",
      "description": `箭头方向，可选值为 left up down`,
      "values": ['left', 'up', 'down'],
    },
    "show-word-limit": {
      "type": "attribute",
      "description": `是否显示字数统计，需要设置maxlength属性`,
      "values": [],
    },
    "error": {
      "type": "attribute",
      "description": `是否将输入内容标红`,
      "values": [],
    },
    "error-message": {
      "type": "attribute",
      "description": `底部错误提示文案，为空时不展示`,
      "values": [],
    },
    "error-message-align": {
      "type": "attribute",
      "description": `底部错误提示文案对齐方式，可选值为 center right`,
      "values": ['center', 'right'],
    },
    "input-align": {
      "type": "attribute",
      "description": `输入框内容对齐方式，可选值为 center right`,
      "values": ['center', 'right'],
    },
    "autosize": {
      "type": "attribute",
      "description": `是否自适应内容高度，只对 textarea 有效，可传入对象,如 { maxHeight: 100, minHeight: 50 }，单位为px`,
      "values": [],
    },
    "left-icon": {
      "type": "attribute",
      "description": `左侧图标名称或图片链接，可选值见 Icon 组件`,
      "values": [],
    },
    "right-icon": {
      "type": "attribute",
      "description": `右侧图标名称或图片链接，可选值见 Icon 组件`,
      "values": [],
    },
    "confirm-type": {
      "type": "attribute",
      "description": `设置键盘右下角按钮的文字，仅在 type='text' 时生效`,
      "values": [],
    },
    "confirm-hold": {
      "type": "attribute",
      "description": `点击键盘右下角按钮时是否保持键盘不收起，在 type='textarea' 时无效`,
      "values": [],
    },
    "hold-keyboard": {
      "type": "attribute",
      "description": `focus 时，点击页面的时候不收起键盘`,
      "values": [],
    },
    "cursor-spacing": {
      "type": "attribute",
      "description": `输入框聚焦时底部与键盘的距离`,
      "values": [],
    },
    "adjust-position": {
      "type": "attribute",
      "description": `键盘弹起时，是否自动上推页面`,
      "values": [],
    },
    "show-confirm-bar": {
      "type": "attribute",
      "description": `是否显示键盘上方带有”完成“按钮那一栏，只对 textarea 有效`,
      "values": [],
    },
    "selection-start": {
      "type": "attribute",
      "description": `光标起始位置，自动聚集时有效，需与 selection-end 搭配使用`,
      "values": [],
    },
    "selection-end": {
      "type": "attribute",
      "description": `光标结束位置，自动聚集时有效，需与 selection-start 搭配使用`,
      "values": [],
    },
    "auto-focus": {
      "type": "attribute",
      "description": `自动聚焦，拉起键盘`,
      "values": [],
    },
    "disable-default-padding": {
      "type": "attribute",
      "description": `是否去掉 iOS 下的默认内边距，只对 textarea 有效`,
      "values": [],
    },
    "cursor": {
      "type": "attribute",
      "description": `指定 focus 时的光标位置`,
      "values": [],
    },
    "clear-triggerv": {
      "type": "attribute",
      "description": `显示清除图标的时机，always 表示输入框不为空时展示，focus 表示输入框聚焦且不为空时展示`,
      "values": [],
    },
    "always-embedv": {
      "type": "attribute",
      "description": `强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效)`,
      "values": [],
    },
    "extra-event-paramsv": {
      "type": "attribute",
      "description": `开启事件增强模式，会在 input 和 change 事件额外提供 cursor 和 keyCode 参数，计划在下一个大版本作为默认行为`,
      "values": [],
    },
    "bind:input": {
      "type": "attribute",
      "description": `输入内容时触发`,
      "values": [],
    },
    "bind:change": {
      "type": "attribute",
      "description": `输入内容时触发`,
      "values": [],
    },
    "bind:confirm": {
      "type": "attribute",
      "description": `点击完成按钮时触发`,
      "values": [],
    },
    "bind:click-icon": {
      "type": "attribute",
      "description": `点击尾部图标时触发`,
      "values": [],
    },
    "bind:focus": {
      "type": "attribute",
      "description": `输入框聚焦时触发`,
      "values": [],
    },
    "bind:blur": {
      "type": "attribute",
      "description": `输入框失焦时触发`,
      "values": [],
    },
    "bind:clear": {
      "type": "attribute",
      "description": `点击清空控件时触发`,
      "values": [],
    },
    "bind:click-input": {
      "type": "attribute",
      "description": `点击输入区域时触发`,
      "values": [],
    },
    "bind:linechange": {
      "type": "attribute",
      "description": `输入框行数变化时调用，只对 textarea 有效`,
      "values": [],
    },
    "bind:keyboardheightchange": {
      "type": "attribute",
      "description": `键盘高度发生变化的时候触发此事件`,
      "values": [],
    },
    "label-class": {
      "type": "attribute",
      "description": `左侧文本样式类`,
      "values": [],
    },
    "input-class": {
      "type": "attribute",
      "description": `输入框样式类`,
      "values": [],
    },
    "right-icon-class": {
      "type": "attribute",
      "description": `右侧图标样式类`,
      "values": [],
    },
  },
  "van-field:基础用法": {
    "_self": {
      "description": "用户可以在文本框内输入或编辑文字。",
      "text": [`<van-field
    value="{{ value }}"
    placeholder="请输入用户名"
    border="{{ false }}"
    bind:change="onChange"
  />`],
    },
  },
  "van-field:双向绑定": {
    "_self": {
      "description": "用户可以在文本框内输入或编辑文字。",
      "text": [`<van-field
    model:value="{{ value }}"
    placeholder="请输入用户名"
    border="{{ false }}"
  />`],
    },
  },
  "van-field:自定义类型": {
    "_self": {
      "description": "用户可以在文本框内输入或编辑文字。",
      "text": [`<van-field
    value="{{ username }}"
    required
    clearable
    label="用户名"
    icon="question-o"
    placeholder="请输入用户名"
    bind:click-icon="onClickIcon"
  />`],
    },
  },
  "van-field:禁用输入框": {
    "_self": {
      "description": "用户可以在文本框内输入或编辑文字。",
      "text": [`<van-field
    value="输入框已禁用"
    label="用户名"
    left-icon="contact"
    disabled
    border="{{ false }}"
  />`],
    },
  },
  "van-field:错误提示": {
    "_self": {
      "description": "用户可以在文本框内输入或编辑文字。",
      "text": [`<van-field
    value="{{ username }}"
    label="用户名"
    placeholder="请输入用户名"
    error
  />`],
    },
  },
  "van-field:内容对齐方式": {
    "_self": {
      "description": "用户可以在文本框内输入或编辑文字。",
      "text": [`<van-field
    value="{{ username3 }}"
    label="用户名"
    placeholder="请输入用户名"
    input-align="right"
  />`],
    },
  },
  "van-field:高度自适应": {
    "_self": {
      "description": "用户可以在文本框内输入或编辑文字。",
      "text": [`<van-field
    value="{{ message }}"
    label="留言"
    type="textarea"
    placeholder="请输入留言"
    autosize
    border="{{ false }}"
  />`],
    },
  },
  "van-field:插入按钮": {
    "_self": {
      "description": "用户可以在文本框内输入或编辑文字。",
      "text": [`<van-field
    value="{{ sms }}"
    center
    clearable
    label="短信验证码"
    placeholder="请输入短信验证码"
    border="{{ false }}"
    use-button-slot
  >
    <van-button slot="button" size="small" type="primary">
      发送验证码
    </van-button>
  </van-field>`],
    },
  },
  "van-picker": {
    "_self": {
      "description": "提供多个选项集合供用户选择，支持单列选择和多列级联，通常与 <a href=\"#/popup\" target=\"_blank\">弹出层</a> 组件配合使用。",
      "text": [`<van-picker columns="{{ columns }}" bind:change="onChange" />`],
    },
    "columns": {
      "type": "attribute",
      "description": `对象数组，配置每一列显示的数据`,
      "values": [],
    },
    "show-toolbar": {
      "type": "attribute",
      "description": `是否显示顶部栏`,
      "values": [],
    },
    "toolbar-position": {
      "type": "attribute",
      "description": `顶部栏位置，可选值为bottom`,
      "values": ['bottom'],
    },
    "title": {
      "type": "attribute",
      "description": `顶部栏标题`,
      "values": [],
    },
    "loading": {
      "type": "attribute",
      "description": `是否显示加载状态`,
      "values": [],
    },
    "value-key": {
      "type": "attribute",
      "description": `选项对象中，文字对应的 key`,
      "values": [],
    },
    "item-height": {
      "type": "attribute",
      "description": `选项高度`,
      "values": [],
    },
    "confirm-button-text": {
      "type": "attribute",
      "description": `确认按钮文字`,
      "values": [],
    },
    "cancel-button-text": {
      "type": "attribute",
      "description": `取消按钮文字`,
      "values": [],
    },
    "visible-item-count": {
      "type": "attribute",
      "description": `可见的选项个数`,
      "values": [],
    },
    "default-index": {
      "type": "attribute",
      "description": `单列选择器的默认选中项索引，多列选择器请参考下方的 Columns 配置`,
      "values": [],
    },
    "bind:confirm": {
      "type": "attribute",
      "description": `点击完成按钮时触发`,
      "values": [],
    },
    "bind:cancel": {
      "type": "attribute",
      "description": `点击取消按钮时触发`,
      "values": [],
    },
    "bind:change": {
      "type": "attribute",
      "description": `选项改变时触发`,
      "values": [],
    },
    "custom-class": {
      "type": "attribute",
      "description": `根节点样式类`,
      "values": [],
    },
    "active-class": {
      "type": "attribute",
      "description": `选中项样式类`,
      "values": [],
    },
    "toolbar-class": {
      "type": "attribute",
      "description": `顶部栏样式类`,
      "values": [],
    },
    "column-class": {
      "type": "attribute",
      "description": `列样式类`,
      "values": [],
    },
  },
  "van-picker:基础用法": {
    "_self": {
      "description": "提供多个选项集合供用户选择，支持单列选择和多列级联，通常与 <a href=\"#/popup\" target=\"_blank\">弹出层</a> 组件配合使用。",
      "text": [`<van-picker columns="{{ columns }}" bind:change="onChange" />`],
    },
  },
  "van-picker:默认选中项": {
    "_self": {
      "description": "提供多个选项集合供用户选择，支持单列选择和多列级联，通常与 <a href=\"#/popup\" target=\"_blank\">弹出层</a> 组件配合使用。",
      "text": [`<van-picker
  columns="{{ columns }}"
  default-index="{{ 2 }}"
  bind:change="onChange"
/>`],
    },
  },
  "van-picker:展示顶部栏": {
    "_self": {
      "description": "提供多个选项集合供用户选择，支持单列选择和多列级联，通常与 <a href=\"#/popup\" target=\"_blank\">弹出层</a> 组件配合使用。",
      "text": [`<van-picker
  show-toolbar
  title="标题"
  columns="{{ columns }}"
  bind:cancel="onCancel"
  bind:confirm="onConfirm"
/>`],
    },
  },
  "van-picker:多列联动": {
    "_self": {
      "description": "提供多个选项集合供用户选择，支持单列选择和多列级联，通常与 <a href=\"#/popup\" target=\"_blank\">弹出层</a> 组件配合使用。",
      "text": [`<van-picker columns="{{ columns }}" bind:change="onChange" />`],
    },
  },
  "van-picker:禁用选项": {
    "_self": {
      "description": "提供多个选项集合供用户选择，支持单列选择和多列级联，通常与 <a href=\"#/popup\" target=\"_blank\">弹出层</a> 组件配合使用。",
      "text": [`<van-picker columns="{{ columns }}" />`],
    },
  },
  "van-picker:加载状态": {
    "_self": {
      "description": "提供多个选项集合供用户选择，支持单列选择和多列级联，通常与 <a href=\"#/popup\" target=\"_blank\">弹出层</a> 组件配合使用。",
      "text": [`<van-picker columns="{{ columns }}" loading />`],
    },
  },
  "van-radio": {
    "_self": {
      "description": "在一组备选项中进行单选。",
      "text": [`<van-radio name=""></van-radio>`],
    },
    "name": {
      "type": "attribute",
      "description": `标识符`,
      "values": [],
    },
    "shape": {
      "type": "attribute",
      "description": `形状，可选值为 square`,
      "values": ['square'],
    },
    "disabled": {
      "type": "attribute",
      "description": `是否为禁用状态`,
      "values": [],
    },
    "label-disabled": {
      "type": "attribute",
      "description": `是否禁用文本内容点击`,
      "values": [],
    },
    "label-position": {
      "type": "attribute",
      "description": `文本位置，可选值为 left`,
      "values": ['left'],
    },
    "icon-size": {
      "type": "attribute",
      "description": `图标大小，默认单位为px`,
      "values": [],
    },
    "checked-color": {
      "type": "attribute",
      "description": `选中状态颜色`,
      "values": [],
    },
    "use-icon-slot": {
      "type": "attribute",
      "description": `是否使用 icon 插槽`,
      "values": [],
    },
  },
  "van-radio:基础用法": {
    "_self": {
      "description": "在一组备选项中进行单选。",
      "text": [`<van-radio name=""></van-radio>`],
    },
  },
  "van-radio:水平排列": {
    "_self": {
      "description": "在一组备选项中进行单选。",
      "text": [`<van-radio-group
  value="{{ radio }}"
  bind:change="onChange"
  direction="horizontal"
>
  <van-radio name="1">单选框 1</van-radio>
  <van-radio name="2">单选框 2</van-radio>
</van-radio-group>`],
    },
  },
  "van-radio:禁用状态": {
    "_self": {
      "description": "在一组备选项中进行单选。",
      "text": [`<van-radio-group value="{{ radio }}" disabled bind:change="onChange">
  <van-radio name="1">单选框 1</van-radio>
  <van-radio name="2">单选框 2</van-radio>
</van-radio-group>`],
    },
  },
  "van-radio:自定义形状": {
    "_self": {
      "description": "在一组备选项中进行单选。",
      "text": [`<van-radio-group value="{{ radio }}" bind:change="onChange">
  <van-radio name="1" shape="square">单选框 1</van-radio>
  <van-radio name="2" shape="square">单选框 2</van-radio>
</van-radio-group>`],
    },
  },
  "van-radio:自定义颜色": {
    "_self": {
      "description": "在一组备选项中进行单选。",
      "text": [`<van-radio-group value="{{ radio }}" bind:change="onChange">
  <van-radio name="1" checked-color="#07c160">单选框 1</van-radio>
  <van-radio name="2" checked-color="#07c160">单选框 2</van-radio>
</van-radio-group>`],
    },
  },
  "van-radio:自定义大小": {
    "_self": {
      "description": "在一组备选项中进行单选。",
      "text": [`<van-radio-group value="{{ radio }}" bind:change="onChange">
  <van-radio name="1" icon-size="24px">单选框 1</van-radio>
  <van-radio name="2" icon-size="24px">单选框 2</van-radio>
</van-radio-group>`],
    },
  },
  "van-radio:自定义图标": {
    "_self": {
      "description": "在一组备选项中进行单选。",
      "text": [`<van-radio-group value="{{ radio }}" bind:change="onChange">
  <van-radio use-icon-slot value="{{ radio }}" name="1">
    自定义图标
    <image slot="icon" src="{{ radio === '1' ? icon.active : icon.normal }}" />
  </van-radio>
  <van-radio use-icon-slot value="{{ radio }}" name="2">
    自定义图标
    <image slot="icon" src="{{ radio === '2' ? icon.active : icon.normal }}" />
  </van-radio>
</van-radio-group>`],
    },
  },
  "van-radio:禁用文本点击": {
    "_self": {
      "description": "在一组备选项中进行单选。",
      "text": [`<van-radio-group value="{{ radio }}" bind:change="onChange">
  <van-radio name="1" label-disabled>单选框 1</van-radio>
  <van-radio name="2" label-disabled>单选框 2</van-radio>
</van-radio-group>`],
    },
  },
  "van-radio:与 Cell 组件一起使用": {
    "_self": {
      "description": "在一组备选项中进行单选。",
      "text": [`<van-radio-group value="{{ radio }}" bind:change="onChange">
  <van-cell-group>
    <van-cell title="单选框 1" clickable data-name="1" bind:click="onClick">
      <van-radio slot="right-icon" name="1" />
    </van-cell>
    <van-cell title="单选框 2" clickable data-name="2" bind:click="onClick">
      <van-radio slot="right-icon" name="2" />
    </van-cell>
  </van-cell-group>
</van-radio-group>`],
    },
  },
  "van-radio-group": {
    "_self": {
      "description": "",
      "text": [`<van-radio-group value="{{ radio }}" bind:change="onChange">
  <van-radio name="1" label-disabled>单选框 1</van-radio>
  <van-radio name="2" label-disabled>单选框 2</van-radio>
</van-radio-group>`],
    },
    "name": {
      "type": "attribute",
      "description": `在表单内提交时的标识符`,
      "values": [],
    },
    "value": {
      "type": "attribute",
      "description": `当前选中项的标识符`,
      "values": [],
    },
    "disabled": {
      "type": "attribute",
      "description": `是否禁用所有单选框`,
      "values": [],
    },
    "directionv": {
      "type": "attribute",
      "description": `排列方向，可选值为 horizontal`,
      "values": ['horizontal'],
    },
  },
  "van-rate": {
    "_self": {
      "description": "用于对事物进行评级操作。",
      "text": [`<van-rate value="{{ value }}" bind:change="onChange" />`],
    },
    "name": {
      "type": "attribute",
      "description": `在表单内提交时的标识符`,
      "values": [],
    },
    "value": {
      "type": "attribute",
      "description": `当前分值`,
      "values": [],
    },
    "count": {
      "type": "attribute",
      "description": `图标总数`,
      "values": [],
    },
    "size": {
      "type": "attribute",
      "description": `图标大小，默认单位为 px`,
      "values": [],
    },
    "gutter": {
      "type": "attribute",
      "description": `图标间距，默认单位为 px`,
      "values": [],
    },
    "color": {
      "type": "attribute",
      "description": `选中时的颜色`,
      "values": [],
    },
    "void-color": {
      "type": "attribute",
      "description": `未选中时的颜色`,
      "values": [],
    },
    "icon": {
      "type": "attribute",
      "description": `选中时的图标名称或图片链接，可选值见 Icon 组件`,
      "values": [],
    },
    "void-icon": {
      "type": "attribute",
      "description": `未选中时的图标名称或图片链接，可选值见 Icon 组件`,
      "values": [],
    },
    "allow-half": {
      "type": "attribute",
      "description": `是否允许半选`,
      "values": [],
    },
    "readonly": {
      "type": "attribute",
      "description": `是否为只读状态`,
      "values": [],
    },
    "disabled": {
      "type": "attribute",
      "description": `是否禁用评分`,
      "values": [],
    },
    "disabled-color": {
      "type": "attribute",
      "description": `禁用时的颜色`,
      "values": [],
    },
    "touchable": {
      "type": "attribute",
      "description": `是否可以通过滑动手势选择评分`,
      "values": [],
    },
    "bind:change": {
      "type": "attribute",
      "description": `当前分值变化时触发的事件`,
      "values": [],
    },
    "custom-class": {
      "type": "attribute",
      "description": `根节点样式类`,
      "values": [],
    },
    "icon-class": {
      "type": "attribute",
      "description": `图标样式类`,
      "values": [],
    },
  },
  "van-rate:基础用法": {
    "_self": {
      "description": "用于对事物进行评级操作。",
      "text": [`<van-rate value="{{ value }}" bind:change="onChange" />`],
    },
  },
  "van-rate:自定义图标": {
    "_self": {
      "description": "用于对事物进行评级操作。",
      "text": [`<van-rate
  value="{{ value }}"
  icon="like"
  void-icon="like-o"
  bind:change="onChange"
/>`],
    },
  },
  "van-rate:自定义样式": {
    "_self": {
      "description": "用于对事物进行评级操作。",
      "text": [`<van-rate
  value="{{ value }}"
  size="{{ 25 }}"
  color="#ffd21e"
  void-icon="star"
  void-color="#eee"
  bind:change="onChange"
/>`],
    },
  },
  "van-rate:半星": {
    "_self": {
      "description": "用于对事物进行评级操作。",
      "text": [`<van-rate
  value="{{ value }}"
  allow-half
  void-icon="star"
  void-color="#eee"
  bind:change="onChange"
/>`],
    },
  },
  "van-rate:自定义数量": {
    "_self": {
      "description": "用于对事物进行评级操作。",
      "text": [`<van-rate value="{{ value }}" count="{{ 6 }}" bind:change="onChange" />`],
    },
  },
  "van-rate:禁用状态": {
    "_self": {
      "description": "用于对事物进行评级操作。",
      "text": [`<van-rate disabled value="{{ value }}" bind:change="onChange" />`],
    },
  },
  "van-rate:只读状态": {
    "_self": {
      "description": "用于对事物进行评级操作。",
      "text": [`<van-rate readonly value="{{ value }}" bind:change="onChange" />`],
    },
  },
  "van-rate:监听 change 事件": {
    "_self": {
      "description": "用于对事物进行评级操作。",
      "text": [`<van-rate value="{{ value }}" bind:change="onChange" />`],
    },
  },
  "van-search": {
    "_self": {
      "description": "用于搜索场景的输入框组件。",
      "text": [`<van-search value="{{ value }}" placeholder="请输入搜索关键词" />`],
    },
    "name": {
      "type": "attribute",
      "description": `在表单内提交时的标识符`,
      "values": [],
    },
    "label": {
      "type": "attribute",
      "description": `搜索框左侧文本`,
      "values": [],
    },
    "shape": {
      "type": "attribute",
      "description": `形状，可选值为 round`,
      "values": ['round'],
    },
    "value": {
      "type": "attribute",
      "description": `当前输入的值`,
      "values": [],
    },
    "background": {
      "type": "attribute",
      "description": `搜索框背景色`,
      "values": [],
    },
    "show-action": {
      "type": "attribute",
      "description": `是否在搜索框右侧显示取消按钮`,
      "values": [],
    },
    "action-textv": {
      "type": "attribute",
      "description": `取消按钮文字`,
      "values": [],
    },
    "focus": {
      "type": "attribute",
      "description": `获取焦点`,
      "values": [],
    },
    "error": {
      "type": "attribute",
      "description": `是否将输入内容标红`,
      "values": [],
    },
    "disabled": {
      "type": "attribute",
      "description": `是否禁用输入框`,
      "values": [],
    },
    "readonly": {
      "type": "attribute",
      "description": `是否只读`,
      "values": [],
    },
    "clearable": {
      "type": "attribute",
      "description": `是否启用清除控件`,
      "values": [],
    },
    "clear-triggerv": {
      "type": "attribute",
      "description": `显示清除图标的时机，always 表示输入框不为空时展示，focus 表示输入框聚焦且不为空时展示`,
      "values": [],
    },
    "clear-iconv": {
      "type": "attribute",
      "description": `清除图标名称或图片链接`,
      "values": [],
    },
    "maxlength": {
      "type": "attribute",
      "description": `最大输入长度，设置为 -1 的时候不限制最大长度`,
      "values": [],
    },
    "use-action-slot": {
      "type": "attribute",
      "description": `是否使用 action slot`,
      "values": [],
    },
    "placeholder": {
      "type": "attribute",
      "description": `输入框为空时占位符`,
      "values": [],
    },
    "placeholder-style": {
      "type": "attribute",
      "description": `指定占位符的样式`,
      "values": [],
    },
    "input-align": {
      "type": "attribute",
      "description": `输入框内容对齐方式，可选值为 center right`,
      "values": ['center', 'right'],
    },
    "use-left-icon-slot": {
      "type": "attribute",
      "description": `是否使用输入框左侧图标 slot`,
      "values": [],
    },
    "use-right-icon-slot": {
      "type": "attribute",
      "description": `是否使用输入框右侧图标 slot`,
      "values": [],
    },
    "left-icon": {
      "type": "attribute",
      "description": `输入框左侧图标名称或图片链接，可选值见 Icon 组件（如果设置了 use-left-icon-slot，则该属性无效）`,
      "values": [],
    },
    "right-icon": {
      "type": "attribute",
      "description": `输入框右侧图标名称或图片链接，可选值见 Icon 组件（如果设置了 use-right-icon-slot，则该属性无效）`,
      "values": [],
    },
    "bind:search": {
      "type": "attribute",
      "description": `确定搜索时触发`,
      "values": [],
    },
    "bind:change": {
      "type": "attribute",
      "description": `输入内容变化时触发`,
      "values": [],
    },
    "bind:cancel": {
      "type": "attribute",
      "description": `取消搜索搜索时触发`,
      "values": [],
    },
    "bind:focus": {
      "type": "attribute",
      "description": `输入框聚焦时触发`,
      "values": [],
    },
    "bind:blur": {
      "type": "attribute",
      "description": `输入框失焦时触发`,
      "values": [],
    },
    "bind:clear": {
      "type": "attribute",
      "description": `点击清空控件时触发`,
      "values": [],
    },
    "bind:click-input": {
      "type": "attribute",
      "description": `点击搜索区域时触发`,
      "values": [],
    },
    "custom-class": {
      "type": "attribute",
      "description": `根节点样式类`,
      "values": [],
    },
    "field-class": {
      "type": "attribute",
      "description": `搜索框样式类`,
      "values": [],
    },
    "input-class": {
      "type": "attribute",
      "description": `输入框样式类`,
      "values": [],
    },
    "cancel-class": {
      "type": "attribute",
      "description": `取消按钮样式类`,
      "values": [],
    },
  },
  "van-search:基础用法": {
    "_self": {
      "description": "用于搜索场景的输入框组件。",
      "text": [`<van-search value="{{ value }}" placeholder="请输入搜索关键词" />`],
    },
  },
  "van-search:事件监听": {
    "_self": {
      "description": "用于搜索场景的输入框组件。",
      "text": [`<van-search
  value="{{ value }}"
  placeholder="请输入搜索关键词"
  show-action
  bind:search="onSearch"
  bind:cancel="onCancel"
/>`],
    },
  },
  "van-search:搜索框内容对齐": {
    "_self": {
      "description": "用于搜索场景的输入框组件。",
      "text": [`<van-search
  value="{{ value }}"
  input-align="center"
  placeholder="请输入搜索关键词"
/>`],
    },
  },
  "van-search:禁用搜索框": {
    "_self": {
      "description": "用于搜索场景的输入框组件。",
      "text": [`<van-search disabled value="{{ value }}" placeholder="请输入搜索关键词" />`],
    },
  },
  "van-search:自定义背景色": {
    "_self": {
      "description": "用于搜索场景的输入框组件。",
      "text": [`<van-search
  value="{{ value }}"
  shape="round"
  background="#4fc08d"
  placeholder="请输入搜索关键词"
/>`],
    },
  },
  "van-search:自定义按钮": {
    "_self": {
      "description": "用于搜索场景的输入框组件。",
      "text": [`<van-search
  value="{{ value }}"
  label="地址"
  placeholder="请输入搜索关键词"
  use-action-slot
  bind:change="onChange"
  bind:search="onSearch"
>
  <view slot="action" bind:tap="onClick">搜索</view>
</van-search>`],
    },
  },
  "van-slider": {
    "_self": {
      "description": "滑动输入条，用于在给定的范围内选择一个值。",
      "text": [`<van-slider value="50" bind:change="onChange" />`],
    },
    "value": {
      "type": "attribute",
      "description": `当前进度百分比，在双滑块模式下为数组格式`,
      "values": [],
    },
    "disabled": {
      "type": "attribute",
      "description": `是否禁用滑块`,
      "values": [],
    },
    "max": {
      "type": "attribute",
      "description": `最大值`,
      "values": [],
    },
    "min": {
      "type": "attribute",
      "description": `最小值`,
      "values": [],
    },
    "step": {
      "type": "attribute",
      "description": `步长`,
      "values": [],
    },
    "bar-height": {
      "type": "attribute",
      "description": `进度条高度，默认单位为 px`,
      "values": [],
    },
    "active-color": {
      "type": "attribute",
      "description": `进度条激活态颜色`,
      "values": [],
    },
    "inactive-color": {
      "type": "attribute",
      "description": `进度条默认颜色`,
      "values": [],
    },
    "use-slot-button": {
      "type": "attribute",
      "description": `是否使用按钮插槽`,
      "values": [],
    },
    "rangev": {
      "type": "attribute",
      "description": `是否开启双滑块模式`,
      "values": [],
    },
    "verticalv": {
      "type": "attribute",
      "description": `是否垂直展示`,
      "values": [],
    },
    "bind:drag": {
      "type": "attribute",
      "description": `拖动进度条时触发`,
      "values": [],
    },
    "bind:change": {
      "type": "attribute",
      "description": `进度值改变后触发`,
      "values": [],
    },
    "bind:drag-start": {
      "type": "attribute",
      "description": `开始拖动时触发`,
      "values": [],
    },
    "bind:drag-end": {
      "type": "attribute",
      "description": `结束拖动时触发`,
      "values": [],
    },
    "custom-class": {
      "type": "attribute",
      "description": `根节点样式类`,
      "values": [],
    },
  },
  "van-slider:基本用法": {
    "_self": {
      "description": "滑动输入条，用于在给定的范围内选择一个值。",
      "text": [`<van-slider value="50" bind:change="onChange" />`],
    },
  },
  "van-slider:双滑块": {
    "_self": {
      "description": "滑动输入条，用于在给定的范围内选择一个值。",
      "text": [`<van-slider value="{{ [10, 50] }}" range @change="onChange" />`],
    },
  },
  "van-slider:指定选择范围": {
    "_self": {
      "description": "滑动输入条，用于在给定的范围内选择一个值。",
      "text": [`<van-slider min="-50" max="50" />`],
    },
  },
  "van-slider:禁用": {
    "_self": {
      "description": "滑动输入条，用于在给定的范围内选择一个值。",
      "text": [`<van-slider value="50" disabled />`],
    },
  },
  "van-slider:指定步长": {
    "_self": {
      "description": "滑动输入条，用于在给定的范围内选择一个值。",
      "text": [`<van-slider value="50" step="10" />`],
    },
  },
  "van-slider:自定义样式": {
    "_self": {
      "description": "滑动输入条，用于在给定的范围内选择一个值。",
      "text": [`<van-slider value="50" bar-height="4px" active-color="#ee0a24" />`],
    },
  },
  "van-slider:自定义按钮": {
    "_self": {
      "description": "滑动输入条，用于在给定的范围内选择一个值。",
      "text": [`<van-slider value="{{ currentValue }}" use-button-slot bind:drag="onDrag">
  <view class="custom-button" slot="button">{{ currentValue }}/100</view>
</van-slider>`],
    },
  },
  "van-slider:垂直方向": {
    "_self": {
      "description": "滑动输入条，用于在给定的范围内选择一个值。",
      "text": [`<view style="height: 150px;">
  <van-slider value="50" vertical bind:change="onChange" />
  <van-slider
    value="{{ [10, 50] }}"
    range
    vertical
    style="margin-left: 100px;"
    bind:change="onChange"
  />
</view>`],
    },
  },
  "van-stepper": {
    "_self": {
      "description": "步进器由增加按钮、减少按钮和输入框组成，用于在一定范围内输入、调整数字。",
      "text": [`<van-stepper value="{{ 1 }}" bind:change="onChange" />`],
    },
    "name": {
      "type": "attribute",
      "description": `在表单内提交时的标识符`,
      "values": [],
    },
    "value": {
      "type": "attribute",
      "description": `输入值`,
      "values": [],
    },
    "min": {
      "type": "attribute",
      "description": `最小值`,
      "values": [],
    },
    "max": {
      "type": "attribute",
      "description": `最大值`,
      "values": [],
    },
    "step": {
      "type": "attribute",
      "description": `步长`,
      "values": [],
    },
    "integer": {
      "type": "attribute",
      "description": `是否只允许输入整数`,
      "values": [],
    },
    "disabled": {
      "type": "attribute",
      "description": `是否禁用`,
      "values": [],
    },
    "disable-input": {
      "type": "attribute",
      "description": `是否禁用输入框`,
      "values": [],
    },
    "async-change": {
      "type": "attribute",
      "description": `是否开启异步变更，开启后需要手动控制输入值`,
      "values": [],
    },
    "input-width": {
      "type": "attribute",
      "description": `输入框宽度，默认单位为 px`,
      "values": [],
    },
    "button-size": {
      "type": "attribute",
      "description": `按钮大小，默认单位为 px，输入框高度会和按钮大小保持一致`,
      "values": [],
    },
    "show-plus": {
      "type": "attribute",
      "description": `是否显示增加按钮`,
      "values": [],
    },
    "show-minus": {
      "type": "attribute",
      "description": `是否显示减少按钮`,
      "values": [],
    },
    "decimal-length": {
      "type": "attribute",
      "description": `固定显示的小数位数`,
      "values": [],
    },
    "theme": {
      "type": "attribute",
      "description": `样式风格，可选值为 round`,
      "values": ['round'],
    },
    "disable-plus": {
      "type": "attribute",
      "description": `是否禁用增加按钮`,
      "values": [],
    },
    "disable-minus": {
      "type": "attribute",
      "description": `是否禁用减少按钮`,
      "values": [],
    },
    "long-press": {
      "type": "attribute",
      "description": `是否开启长按手势`,
      "values": [],
    },
    "always-embedv": {
      "type": "attribute",
      "description": `强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效)`,
      "values": [],
    },
    "bind:change": {
      "type": "attribute",
      "description": `当绑定值变化时触发的事件`,
      "values": [],
    },
    "bind:overlimit": {
      "type": "attribute",
      "description": `点击不可用的按钮时触发`,
      "values": [],
    },
    "bind:plus": {
      "type": "attribute",
      "description": `点击增加按钮时触发`,
      "values": [],
    },
    "bind:minus": {
      "type": "attribute",
      "description": `点击减少按钮时触发`,
      "values": [],
    },
    "bind:focus": {
      "type": "attribute",
      "description": `输入框聚焦时触发`,
      "values": [],
    },
    "bind:blur": {
      "type": "attribute",
      "description": `输入框失焦时触发`,
      "values": [],
    },
    "custom-class": {
      "type": "attribute",
      "description": `根节点样式类`,
      "values": [],
    },
    "input-class": {
      "type": "attribute",
      "description": `输入框样式类`,
      "values": [],
    },
    "plus-class": {
      "type": "attribute",
      "description": `加号按钮样式类`,
      "values": [],
    },
    "minus-class": {
      "type": "attribute",
      "description": `减号按钮样式类`,
      "values": [],
    },
  },
  "van-stepper:基础用法": {
    "_self": {
      "description": "步进器由增加按钮、减少按钮和输入框组成，用于在一定范围内输入、调整数字。",
      "text": [`<van-stepper value="{{ 1 }}" bind:change="onChange" />`],
    },
  },
  "van-stepper:步长设置": {
    "_self": {
      "description": "步进器由增加按钮、减少按钮和输入框组成，用于在一定范围内输入、调整数字。",
      "text": [`<van-stepper value="{{ 1 }}" step="2" />`],
    },
  },
  "van-stepper:限制输入范围": {
    "_self": {
      "description": "步进器由增加按钮、减少按钮和输入框组成，用于在一定范围内输入、调整数字。",
      "text": [`<van-stepper value="{{ 5 }}" min="5" max="8" />`],
    },
  },
  "van-stepper:限制输入整数": {
    "_self": {
      "description": "步进器由增加按钮、减少按钮和输入框组成，用于在一定范围内输入、调整数字。",
      "text": [`<van-stepper value="{{ 1 }}" integer />`],
    },
  },
  "van-stepper:禁用状态": {
    "_self": {
      "description": "步进器由增加按钮、减少按钮和输入框组成，用于在一定范围内输入、调整数字。",
      "text": [`<van-stepper value="{{ 1 }}" disabled />`],
    },
  },
  "van-stepper:关闭长按": {
    "_self": {
      "description": "步进器由增加按钮、减少按钮和输入框组成，用于在一定范围内输入、调整数字。",
      "text": [`<van-stepper value="{{ 1 }}" long-press="{{ false }}" />`],
    },
  },
  "van-stepper:固定小数位数": {
    "_self": {
      "description": "步进器由增加按钮、减少按钮和输入框组成，用于在一定范围内输入、调整数字。",
      "text": [`<van-stepper value="{{ 1 }}" step="0.2" decimal-length="{{ 1 }}" />`],
    },
  },
  "van-stepper:异步变更": {
    "_self": {
      "description": "步进器由增加按钮、减少按钮和输入框组成，用于在一定范围内输入、调整数字。",
      "text": [`<van-stepper value="{{ value }}" async-change bind:change="onChange" />`],
    },
  },
  "van-stepper:自定义大小": {
    "_self": {
      "description": "步进器由增加按钮、减少按钮和输入框组成，用于在一定范围内输入、调整数字。",
      "text": [`<van-stepper value="{{ 1 }}" input-width="40px" button-size="32px" />`],
    },
  },
  "van-switch": {
    "_self": {
      "description": "用于在打开和关闭状态之间进行切换。",
      "text": [`<van-switch checked="{{ checked }}" bind:change="onChange" />`],
    },
    "name": {
      "type": "attribute",
      "description": `在表单内提交时的标识符`,
      "values": [],
    },
    "checked": {
      "type": "attribute",
      "description": `开关选中状态`,
      "values": [],
    },
    "loading": {
      "type": "attribute",
      "description": `是否为加载状态`,
      "values": [],
    },
    "disabled": {
      "type": "attribute",
      "description": `是否为禁用状态`,
      "values": [],
    },
    "size": {
      "type": "attribute",
      "description": `开关尺寸`,
      "values": [],
    },
    "active-color": {
      "type": "attribute",
      "description": `打开时的背景色`,
      "values": [],
    },
    "inactive-color": {
      "type": "attribute",
      "description": `关闭时的背景色`,
      "values": [],
    },
    "active-value": {
      "type": "attribute",
      "description": `打开时的值`,
      "values": [],
    },
    "inactive-value": {
      "type": "attribute",
      "description": `关闭时的值`,
      "values": [],
    },
    "bind:change": {
      "type": "attribute",
      "description": `开关状态切换回调`,
      "values": [],
    },
    "custom-class": {
      "type": "attribute",
      "description": `根节点样式类`,
      "values": [],
    },
    "node-class": {
      "type": "attribute",
      "description": `圆点样式类`,
      "values": [],
    },
  },
  "van-switch:基础用法": {
    "_self": {
      "description": "用于在打开和关闭状态之间进行切换。",
      "text": [`<van-switch checked="{{ checked }}" bind:change="onChange" />`],
    },
  },
  "van-switch:禁用状态": {
    "_self": {
      "description": "用于在打开和关闭状态之间进行切换。",
      "text": [`<van-switch checked="{{ checked }}" disabled />`],
    },
  },
  "van-switch:加载状态": {
    "_self": {
      "description": "用于在打开和关闭状态之间进行切换。",
      "text": [`<van-switch checked="{{ checked }}" loading />`],
    },
  },
  "van-switch:自定义大小": {
    "_self": {
      "description": "用于在打开和关闭状态之间进行切换。",
      "text": [`<van-switch checked="{{ checked }}" size="24px" />`],
    },
  },
  "van-switch:自定义颜色": {
    "_self": {
      "description": "用于在打开和关闭状态之间进行切换。",
      "text": [`<van-switch
  checked="{{ checked }}"
  active-color="#07c160"
  inactive-color="#ee0a24"
/>`],
    },
  },
  "van-switch:异步控制": {
    "_self": {
      "description": "用于在打开和关闭状态之间进行切换。",
      "text": [`<van-switch checked="{{ checked }}" bind:change="onChange" />`],
    },
  },
  "van-uploader": {
    "_self": {
      "description": "用于将本地的图片或文件上传至服务器，并在上传过程中展示预览图和上传进度。目前 Uploader 组件不包含将文件上传至服务器的接口逻辑，该步骤需要自行实现。",
      "text": [`<van-uploader file-list="{{ fileList }}" bind:after-read="afterRead" />`],
    },
    "name": {
      "type": "attribute",
      "description": `标识符，可以在回调函数的第二项参数中获取`,
      "values": [],
    },
    "accept": {
      "type": "attribute",
      "description": `接受的文件类型, 可选值为all media image file video`,
      "values": ['all', 'meida', 'image', 'file', 'video'],
    },
    "sizeType": {
      "type": "attribute",
      "description": `所选的图片的尺寸, 当accept为image | media 类型时设置所选图片的尺寸可选值为original compressed`,
      "values": ['original', 'compressed'],
    },
    "preview-size": {
      "type": "attribute",
      "description": `预览图和上传区域的尺寸，默认单位为px`,
      "values": [],
    },
    "preview-image": {
      "type": "attribute",
      "description": `是否在上传完成后展示预览图`,
      "values": [],
    },
    "preview-full-image": {
      "type": "attribute",
      "description": `是否在点击预览图后展示全屏图片预览`,
      "values": [],
    },
    "multiple": {
      "type": "attribute",
      "description": `是否开启图片多选，部分安卓机型不支持`,
      "values": [],
    },
    "disabled": {
      "type": "attribute",
      "description": `是否禁用文件上传`,
      "values": [],
    },
    "show-upload": {
      "type": "attribute",
      "description": `是否展示文件上传按钮`,
      "values": [],
    },
    "deletable": {
      "type": "attribute",
      "description": `是否展示删除按钮`,
      "values": [],
    },
    "capture": {
      "type": "attribute",
      "description": `图片或者视频选取模式，当accept为image | media 类型时设置capture可选值为camera可以直接调起摄像头`,
      "values": ['image', 'media', 'camera'],
    },
    "max-size": {
      "type": "attribute",
      "description": `文件大小限制，单位为byte`,
      "values": [],
    },
    "max-count": {
      "type": "attribute",
      "description": `文件上传数量限制`,
      "values": [],
    },
    "upload-text": {
      "type": "attribute",
      "description": `上传区域文字提示`,
      "values": [],
    },
    "image-fit": {
      "type": "attribute",
      "description": `预览图裁剪模式，可选值参考小程序image组件的mode属性`,
      "values": [],
    },
    "use-before-read": {
      "type": "attribute",
      "description": `是否开启文件读取前事件`,
      "values": [],
    },
    "camera": {
      "type": "attribute",
      "description": `当 accept 为 video | media 时生效，可选值为 back front`,
      "values": ['back', 'front'],
    },
    "compressed": {
      "type": "attribute",
      "description": `当 accept 为 video 时生效，是否压缩视频，默认为true`,
      "values": [],
    },
    "max-duration": {
      "type": "attribute",
      "description": `当 accept 为 video | media 时生效，拍摄视频最长拍摄时间，单位秒`,
      "values": [],
    },
    "media-typev": {
      "type": "attribute",
      "description": `当 accept 为 media 时生效，选择的文件的文件类型，可选值为 image video`,
      "values": ['image', 'video'],
    },
    "extensionv": {
      "type": "attribute",
      "description": `当 accept 为 file 时生效，根据文件拓展名过滤可选择文件。每一项都不能是空字符串。默认不过滤`,
      "values": [],
    },
    "showmenuv": {
      "type": "attribute",
      "description": `预览图片时，是否显示长按菜单`,
      "values": [],
    },
    "upload-icon": {
      "type": "attribute",
      "description": `上传区域图标，可选值见 Icon 组件`,
      "values": [],
    },
    "media": {
      "type": "attribute",
      "description": `图片和视频`,
      "values": [],
    },
    "image": {
      "type": "attribute",
      "description": `图片`,
      "values": [],
    },
    "video": {
      "type": "attribute",
      "description": `视频`,
      "values": [],
    },
    "file": {
      "type": "attribute",
      "description": `从客户端会话选择图片和视频以外的文件`,
      "values": [],
    },
    "all": {
      "type": "attribute",
      "description": `从客户端会话选择所有文件`,
      "values": [],
    },
    "bind:before-read": {
      "type": "attribute",
      "description": `文件读取前，在回调函数中返回 false 可终止文件读取，绑定事件的同时需要将use-before-read属性设置为true`,
      "values": [],
    },
    "bind:after-read": {
      "type": "attribute",
      "description": `文件读取完成后`,
      "values": [],
    },
    "bind:oversize": {
      "type": "attribute",
      "description": `文件超出大小限制`,
      "values": [],
    },
    "bind:click-preview": {
      "type": "attribute",
      "description": `点击预览图片`,
      "values": [],
    },
    "bind:delete": {
      "type": "attribute",
      "description": `删除图片`,
      "values": [],
    },
  },
  "van-uploader:基础用法": {
    "_self": {
      "description": "用于将本地的图片或文件上传至服务器，并在上传过程中展示预览图和上传进度。目前 Uploader 组件不包含将文件上传至服务器的接口逻辑，该步骤需要自行实现。",
      "text": [`<van-uploader file-list="{{ fileList }}" bind:after-read="afterRead" />`],
    },
  },
  "van-uploader:图片预览": {
    "_self": {
      "description": "用于将本地的图片或文件上传至服务器，并在上传过程中展示预览图和上传进度。目前 Uploader 组件不包含将文件上传至服务器的接口逻辑，该步骤需要自行实现。",
      "text": [`<van-uploader file-list="{{ fileList }}" />`],
    },
  },
  "van-uploader:图片可删除状态": {
    "_self": {
      "description": "用于将本地的图片或文件上传至服务器，并在上传过程中展示预览图和上传进度。目前 Uploader 组件不包含将文件上传至服务器的接口逻辑，该步骤需要自行实现。",
      "text": [`<van-uploader file-list="{{ fileList }}" deletable="{{ true }}" />`],
    },
  },
  "van-uploader:上传状态": {
    "_self": {
      "description": "用于将本地的图片或文件上传至服务器，并在上传过程中展示预览图和上传进度。目前 Uploader 组件不包含将文件上传至服务器的接口逻辑，该步骤需要自行实现。",
      "text": [`<van-uploader file-list="{{ fileList }}" />`],
    },
  },
  "van-uploader:限制上传数量": {
    "_self": {
      "description": "用于将本地的图片或文件上传至服务器，并在上传过程中展示预览图和上传进度。目前 Uploader 组件不包含将文件上传至服务器的接口逻辑，该步骤需要自行实现。",
      "text": [`<van-uploader
  file-list="{{ fileList }}"
  max-count="2"
  bind:after-read="afterRead"
/>`],
    },
  },
  "van-uploader:自定义上传样式": {
    "_self": {
      "description": "用于将本地的图片或文件上传至服务器，并在上传过程中展示预览图和上传进度。目前 Uploader 组件不包含将文件上传至服务器的接口逻辑，该步骤需要自行实现。",
      "text": [`<van-uploader>
  <van-button icon="photo" type="primary">上传图片</van-button>
</van-uploader>`],
    },
  },
  "van-uploader:上传前校验": {
    "_self": {
      "description": "用于将本地的图片或文件上传至服务器，并在上传过程中展示预览图和上传进度。目前 Uploader 组件不包含将文件上传至服务器的接口逻辑，该步骤需要自行实现。",
      "text": [`<van-uploader
  file-list="{{ fileList }}"
  accept="media"
  use-before-read
  bind:before-read="beforeRead"
  bind:after-read="afterRead"
/>`],
    },
  },
  "van-uploader:上传图片至云存储": {
    "_self": {
      "description": "用于将本地的图片或文件上传至服务器，并在上传过程中展示预览图和上传进度。目前 Uploader 组件不包含将文件上传至服务器的接口逻辑，该步骤需要自行实现。",
      "text": [`// 上传图片
uploadToCloud() {
  wx.cloud.init();
  const { fileList } = this.data;
  if (!fileList.length) {
    wx.showToast({ title: '请选择图片', icon: 'none' });
  } else {
    const uploadTasks = fileList.map((file, index) => this.uploadFilePromise('', file));
    Promise.all(uploadTasks)
      .then(data => {
        wx.showToast({ title: '上传成功', icon: 'none' });
        const newFileList = data.map(item => ({ url: item.fileID }));
        this.setData({ cloudPath: data, fileList: newFileList });
      })
      .catch(e => {
        wx.showToast({ title: '上传失败', icon: 'none' });
        console.log(e);
      });
  }
}

uploadFilePromise(fileName, chooseResult) {
  return wx.cloud.uploadFile({
    cloudPath: fileName,
    filePath: chooseResult.url
  });
}`],
    },
  },
  "van-action-sheet": {
    "_self": {
      "description": "底部弹起的模态面板，包含与当前情境相关的多个选项。",
      "text": [`<van-action-sheet
  show="{{ show }}"
  actions="{{ actions }}"
  bind:close="onClose"
  bind:select="onSelect"
/>`],
    },
    "show": {
      "type": "attribute",
      "description": `是否显示动作面板`,
      "values": [],
    },
    "actions": {
      "type": "attribute",
      "description": `菜单选项`,
      "values": [],
    },
    "title": {
      "type": "attribute",
      "description": `标题`,
      "values": [],
    },
    "descriptionv": {
      "type": "attribute",
      "description": `选项上方的描述信息`,
      "values": [],
    },
    "z-index": {
      "type": "attribute",
      "description": `z-index 层级`,
      "values": [],
    },
    "cancel-text": {
      "type": "attribute",
      "description": `取消按钮文字`,
      "values": [],
    },
    "overlay": {
      "type": "attribute",
      "description": `是否显示遮罩层`,
      "values": [],
    },
    "roundv": {
      "type": "attribute",
      "description": `是否显示圆角`,
      "values": [],
    },
    "close-on-click-action": {
      "type": "attribute",
      "description": `是否在点击选项后关闭`,
      "values": [],
    },
    "close-on-click-overlay": {
      "type": "attribute",
      "description": `点击遮罩是否关闭菜单`,
      "values": [],
    },
    "safe-area-inset-bottom": {
      "type": "attribute",
      "description": `是否为 iPhoneX 留出底部安全距离`,
      "values": [],
    },
    "bind:select": {
      "type": "attribute",
      "description": `选中选项时触发，禁用或加载状态下不会触发`,
      "values": [],
    },
    "bind:close": {
      "type": "attribute",
      "description": `关闭时触发`,
      "values": [],
    },
    "bind:cancel": {
      "type": "attribute",
      "description": `取消按钮点击时触发`,
      "values": [],
    },
    "bind:click-overlay": {
      "type": "attribute",
      "description": `点击遮罩层时触发`,
      "values": [],
    },
    "bind:getuserinfo": {
      "type": "attribute",
      "description": `用户点击该按钮时，会返回获取到的用户信息，回调的 detail 数据与 wx.getUserInfo 返回的一致，openType="getUserInfo"时有效`,
      "values": [],
    },
    "bind:contact": {
      "type": "attribute",
      "description": `客服消息回调，openType="contact"时有效`,
      "values": [],
    },
    "bind:getphonenumber": {
      "type": "attribute",
      "description": `获取用户手机号回调，openType="getPhoneNumber"时有效`,
      "values": [],
    },
    "bind:error": {
      "type": "attribute",
      "description": `当使用开放能力时，发生错误的回调，openType="launchApp"时有效`,
      "values": [],
    },
    "bind:launchapp": {
      "type": "attribute",
      "description": `打开 APP 成功的回调，openType="launchApp"时有效`,
      "values": [],
    },
    "bind:opensetting": {
      "type": "attribute",
      "description": `在打开授权设置页后回调，openType="openSetting"时有效`,
      "values": [],
    },
    "custom-classv": {
      "type": "attribute",
      "description": `根节点样式类`,
      "values": [],
    },
    "list-classv": {
      "type": "attribute",
      "description": `actions容器样式类`,
      "values": [],
    },
  },
  "van-action-sheet:基础用法": {
    "_self": {
      "description": "底部弹起的模态面板，包含与当前情境相关的多个选项。",
      "text": [`<van-action-sheet
  show="{{ show }}"
  actions="{{ actions }}"
  bind:close="onClose"
  bind:select="onSelect"
/>`],
    },
  },
  "van-action-sheet:展示取消按钮": {
    "_self": {
      "description": "底部弹起的模态面板，包含与当前情境相关的多个选项。",
      "text": [`<van-action-sheet
  show="{{ show }}"
  actions="{{ actions }}"
  cancel-text="取消"
/>`],
    },
  },
  "van-action-sheet:展示描述信息": {
    "_self": {
      "description": "底部弹起的模态面板，包含与当前情境相关的多个选项。",
      "text": [`<van-action-sheet
  show="{{ show }}"
  actions="{{ actions }}"
  description="这是一段描述信息"
/>`],
    },
  },
  "van-action-sheet:选项状态": {
    "_self": {
      "description": "底部弹起的模态面板，包含与当前情境相关的多个选项。",
      "text": [`<van-action-sheet
  show="{{ show }}"
  actions="{{ actions }}"
  cancel-text="取消"
/>`],
    },
  },
  "van-action-sheet:自定义面板": {
    "_self": {
      "description": "底部弹起的模态面板，包含与当前情境相关的多个选项。",
      "text": [`<van-action-sheet show="{{ show }}" title="标题">
  <view>内容</view>
</van-action-sheet>`],
    },
  },
  "van-action-sheet:微信开放能力": {
    "_self": {
      "description": "底部弹起的模态面板，包含与当前情境相关的多个选项。",
      "text": [`<van-action-sheet
  show="{{ show }}"
  actions="{{ actions }}"
  bind:close="onClose"
  bind:getuserinfo="onGetUserInfo"
/>`],
    },
  },
  "van-dialog": {
    "_self": {
      "description": "弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作，支持函数调用和组件调用两种方式。",
      "text": [`<van-dialog id="van-dialog" />`],
    },
    "show": {
      "type": "attribute",
      "description": `是否显示弹窗`,
      "values": [],
    },
    "title": {
      "type": "attribute",
      "description": `标题`,
      "values": [],
    },
    "width": {
      "type": "attribute",
      "description": `弹窗宽度，默认单位为px`,
      "values": [],
    },
    "message": {
      "type": "attribute",
      "description": `文本内容，支持通过\n换行`,
      "values": [],
    },
    "theme": {
      "type": "attribute",
      "description": `样式风格，可选值为round-button`,
      "values": ['round-button'],
    },
    "message-align": {
      "type": "attribute",
      "description": `内容对齐方式，可选值为left right`,
      "values": ['left', 'right'],
    },
    "z-index": {
      "type": "attribute",
      "description": `z-index 层级`,
      "values": [],
    },
    "class-name": {
      "type": "attribute",
      "description": `自定义类名，dialog 在自定义组件内时无效，已废弃，请使用 custom-class 代替，将在 2.0.0 移除`,
      "values": [],
    },
    "custom-style": {
      "type": "attribute",
      "description": `自定义样式`,
      "values": [],
    },
    "show-confirm-button": {
      "type": "attribute",
      "description": `是否展示确认按钮`,
      "values": [],
    },
    "show-cancel-button": {
      "type": "attribute",
      "description": `是否展示取消按钮`,
      "values": [],
    },
    "confirm-button-text": {
      "type": "attribute",
      "description": `确认按钮的文案`,
      "values": [],
    },
    "cancel-button-text": {
      "type": "attribute",
      "description": `取消按钮的文案`,
      "values": [],
    },
    "confirm-button-color": {
      "type": "attribute",
      "description": `确认按钮的字体颜色`,
      "values": [],
    },
    "cancel-button-color": {
      "type": "attribute",
      "description": `取消按钮的字体颜色`,
      "values": [],
    },
    "overlay": {
      "type": "attribute",
      "description": `是否展示遮罩层`,
      "values": [],
    },
    "overlay-stylev": {
      "type": "attribute",
      "description": `自定义遮罩层样式`,
      "values": [],
    },
    "close-on-click-overlay": {
      "type": "attribute",
      "description": `点击遮罩层时是否关闭弹窗`,
      "values": [],
    },
    "use-slot": {
      "type": "attribute",
      "description": `是否使用自定义内容的插槽`,
      "values": [],
    },
    "use-title-slot": {
      "type": "attribute",
      "description": `是否使用自定义标题的插槽`,
      "values": [],
    },
    "async-close": {
      "type": "attribute",
      "description": `已废弃，将在 2.0.0 移除，请使用 beforeClose 属性代替`,
      "values": [],
    },
    "before-close": {
      "type": "attribute",
      "description": `关闭前的回调函数，返回 false 可阻止关闭，支持返回 Promise`,
      "values": [],
    },
    "transition": {
      "type": "attribute",
      "description": `动画名称，可选值为fade`,
      "values": ['fade'],
    },
    "confirm-button-open-type": {
      "type": "attribute",
      "description": `确认按钮的微信开放能力，具体支持可参考 微信官方文档`,
      "values": [],
    },
    "bind:close": {
      "type": "attribute",
      "description": `弹窗关闭时触发`,
      "values": [],
    },
    "bind:confirm": {
      "type": "attribute",
      "description": `点击确认按钮时触发`,
      "values": [],
    },
    "bind:cancel": {
      "type": "attribute",
      "description": `点击取消按钮时触发`,
      "values": [],
    },
    "bind:getuserinfo": {
      "type": "attribute",
      "description": `点击确认按钮时，会返回获取到的用户信息，从返回参数的 detail 中获取到的值同 wx.getUserInfo`,
      "values": [],
    },
    "bind:contact": {
      "type": "attribute",
      "description": `客服消息回调`,
      "values": [],
    },
    "bind:getphonenumber": {
      "type": "attribute",
      "description": `获取用户手机号回调`,
      "values": [],
    },
    "bind:error": {
      "type": "attribute",
      "description": `当使用开放能力时，发生错误的回调`,
      "values": [],
    },
    "bind:opensetting": {
      "type": "attribute",
      "description": `在打开授权设置页后回调`,
      "values": [],
    },
    "custom-classv": {
      "type": "attribute",
      "description": `根节点样式类`,
      "values": [],
    },
  },
  "van-dialog:消息提示": {
    "_self": {
      "description": "弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作，支持函数调用和组件调用两种方式。",
      "text": [`<van-dialog id="van-dialog" />`],
    },
  },
  "van-dialog:消息确认": {
    "_self": {
      "description": "弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作，支持函数调用和组件调用两种方式。",
      "text": [`<van-dialog id="van-dialog" />`],
    },
  },
  "van-dialog:圆角按钮风格": {
    "_self": {
      "description": "弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作，支持函数调用和组件调用两种方式。",
      "text": [`<van-dialog id="van-dialog" />`],
    },
  },
  "van-dialog:异步关闭": {
    "_self": {
      "description": "弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作，支持函数调用和组件调用两种方式。",
      "text": [`<van-dialog id="van-dialog" />`],
    },
  },
  "van-dialog:组件调用": {
    "_self": {
      "description": "弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作，支持函数调用和组件调用两种方式。",
      "text": [`<van-dialog
  use-slot
  title="标题"
  show="{{ show }}"
  show-cancel-button
  confirm-button-open-type="getUserInfo"
  bind:close="onClose"
  bind:getuserinfo="getUserInfo"
>
  <image src="https://img.yzcdn.cn/1.jpg" />
</van-dialog>`],
    },
  },
  "van-dialog:自定义样式": {
    "_self": {
      "description": "弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作，支持函数调用和组件调用两种方式。",
      "text": [`<van-dialog
  title="标题"
  message="弹窗内容"
  show="{{ show }}"
  custom-class="my-custom-class"
/>`],
    },
  },
  "van-open-type": {
    "_self": {
      "description": "",
      "text": [``],
    },
    "app-parameter": {
      "type": "attribute",
      "description": `打开 APP 时，向 APP 传递的参数`,
      "values": [],
    },
    "lang": {
      "type": "attribute",
      "description": `指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文`,
      "values": [],
    },
    "session-from": {
      "type": "attribute",
      "description": `会话来源`,
      "values": [],
    },
    "business-id": {
      "type": "attribute",
      "description": `客服消息子商户 id`,
      "values": [],
    },
    "send-message-title": {
      "type": "attribute",
      "description": `会话内消息卡片标题`,
      "values": [],
    },
    "send-message-path": {
      "type": "attribute",
      "description": `会话内消息卡片点击跳转小程序路径`,
      "values": [],
    },
    "send-message-img": {
      "type": "attribute",
      "description": `sendMessageImg`,
      "values": [],
    },
    "show-message-card": {
      "type": "attribute",
      "description": `显示会话内消息卡片`,
      "values": [],
    },
  },
  "van-dropdown-menu": {
    "_self": {
      "description": "向下弹出的菜单列表。",
      "text": [`<van-dropdown-menu>
  <van-dropdown-item value="{{ value1 }}" options="{{ option1 }}" />
  <van-dropdown-item value="{{ value2 }}" options="{{ option2 }}" />
</van-dropdown-menu>`],
    },
    "active-color": {
      "type": "attribute",
      "description": `菜单标题和选项的选中态颜色`,
      "values": [],
    },
    "z-index": {
      "type": "attribute",
      "description": `菜单栏 z-index 层级`,
      "values": [],
    },
    "duration": {
      "type": "attribute",
      "description": `动画时长，单位毫秒`,
      "values": [],
    },
    "direction": {
      "type": "attribute",
      "description": `菜单展开方向，可选值为 up`,
      "values": ['up'],
    },
    "overlay": {
      "type": "attribute",
      "description": `是否显示遮罩层`,
      "values": [],
    },
    "close-on-click-overlay": {
      "type": "attribute",
      "description": `是否在点击遮罩层后关闭菜单`,
      "values": [],
    },
    "close-on-click-outside": {
      "type": "attribute",
      "description": `是否在点击外部 menu 后关闭菜单`,
      "values": [],
    },
  },
  "van-dropdown-menu:基础用法": {
    "_self": {
      "description": "向下弹出的菜单列表。",
      "text": [`<van-dropdown-menu>
  <van-dropdown-item value="{{ value1 }}" options="{{ option1 }}" />
  <van-dropdown-item value="{{ value2 }}" options="{{ option2 }}" />
</van-dropdown-menu>`],
    },
  },
  "van-dropdown-menu:自定义菜单内容": {
    "_self": {
      "description": "向下弹出的菜单列表。",
      "text": [`<van-dropdown-menu>
  <van-dropdown-item value="{{ value1 }}" options="{{ option1 }}" />
  <van-dropdown-item id="item" title="{{ itemTitle }}">
    <van-cell title="{{ switchTitle1 }}">
      <van-switch
        slot="right-icon"
        size="24px"
        style="height: 26px"
        checked="{{ switch1 }}"
        active-color="#ee0a24"
        bind:change="onSwitch1Change"
      />
    </van-cell>
    <view style="padding: 5px 16px;">
      <van-button type="danger" block round bind:click="onConfirm">
        确认
      </van-button>
    </view>
  </van-dropdown-item>
</van-dropdown-menu>`],
    },
  },
  "van-dropdown-menu:自定义选中状态颜色": {
    "_self": {
      "description": "向下弹出的菜单列表。",
      "text": [`<van-dropdown-menu active-color="#1989fa">
  <van-dropdown-item value="{{ value1 }}" options="{{ option1 }}" />
  <van-dropdown-item value="{{ value2 }}" options="{{ option2 }}" />
</van-dropdown-menu>`],
    },
  },
  "van-dropdown-menu:向上展开": {
    "_self": {
      "description": "向下弹出的菜单列表。",
      "text": [`<van-dropdown-menu direction="up">
  <van-dropdown-item value="{{ value1 }}" options="{{ option1 }}" />
  <van-dropdown-item value="{{ value2 }}" options="{{ option2 }}" />
</van-dropdown-menu>`],
    },
  },
  "van-dropdown-menu:禁用菜单": {
    "_self": {
      "description": "向下弹出的菜单列表。",
      "text": [`<van-dropdown-menu>
  <van-dropdown-item value="{{ value1 }}" disabled options="{{ option1 }}" />
  <van-dropdown-item value="{{ value2 }}" disabled options="{{ option2 }}" />
</van-dropdown-menu>`],
    },
  },
  "van-dropdown-menu:异步打开/关闭": {
    "_self": {
      "description": "向下弹出的菜单列表。",
      "text": [`<van-dropdown-menu>
  <van-dropdown-item value="{{ value1 }}" options="{{ option1 }}" use-before-toggle bind:before-toggle="onBeforeChange" />
</van-dropdown-menu>`],
    },
  },
  "van-dropdown-item": {
    "_self": {
      "description": "",
      "text": [`<van-dropdown-item value="{{ value2 }}" options="{{ option2 }}" />`],
    },
    "value": {
      "type": "attribute",
      "description": `当前选中项对应的 value`,
      "values": [],
    },
    "title": {
      "type": "attribute",
      "description": `菜单项标题`,
      "values": [],
    },
    "options": {
      "type": "attribute",
      "description": `选项数组`,
      "values": [],
    },
    "disabled": {
      "type": "attribute",
      "description": `是否禁用菜单`,
      "values": [],
    },
    "title-class": {
      "type": "attribute",
      "description": `标题额外类名，建议使用自定义样式 item-title-class 代替`,
      "values": [],
    },
    "popup-style": {
      "type": "attribute",
      "description": `自定义弹出层样式`,
      "values": [],
    },
    "use-before-togglev": {
      "type": "attribute",
      "description": `是否开启下拉菜单打开或者关闭前校验`,
      "values": [],
    },
    "change": {
      "type": "attribute",
      "description": `点击选项导致 value 变化时触发`,
      "values": [],
    },
    "open": {
      "type": "attribute",
      "description": `打开菜单栏时触发`,
      "values": [],
    },
    "close": {
      "type": "attribute",
      "description": `关闭菜单栏时触发`,
      "values": [],
    },
    "opened": {
      "type": "attribute",
      "description": `打开菜单栏且动画结束后触发`,
      "values": [],
    },
    "closed": {
      "type": "attribute",
      "description": `关闭菜单栏且动画结束后触发`,
      "values": [],
    },
    "before-togglev": {
      "type": "attribute",
      "description": `下拉菜单打开或者关闭前触发，需要将use-before-toggle属性设置为true`,
      "values": [],
    },
  },
  "van-loading": {
    "_self": {
      "description": "加载图标，用于表示加载中的过渡状态。",
      "text": [`<van-loading /> <van-loading type="spinner" />`],
    },
    "color": {
      "type": "attribute",
      "description": `颜色`,
      "values": [],
    },
    "type": {
      "type": "attribute",
      "description": `类型，可选值为 spinner`,
      "values": ['spinner'],
    },
    "size": {
      "type": "attribute",
      "description": `加载图标大小，默认单位为 px`,
      "values": [],
    },
    "text-sizev": {
      "type": "attribute",
      "description": `文字大小，默认单位为为 px`,
      "values": [],
    },
    "verticalv": {
      "type": "attribute",
      "description": `是否垂直排列图标和文字内容`,
      "values": [],
    },
    "custom-class": {
      "type": "attribute",
      "description": `根节点样式类`,
      "values": [],
    },
  },
  "van-loading:加载类型": {
    "_self": {
      "description": "加载图标，用于表示加载中的过渡状态。",
      "text": [`<van-loading /> <van-loading type="spinner" />`],
    },
  },
  "van-loading:自定义颜色": {
    "_self": {
      "description": "加载图标，用于表示加载中的过渡状态。",
      "text": [`<van-loading color="#1989fa" /> <van-loading type="spinner" color="#1989fa" />`],
    },
  },
  "van-loading:加载文案": {
    "_self": {
      "description": "加载图标，用于表示加载中的过渡状态。",
      "text": [`<van-loading size="24px">加载中...</van-loading>`],
    },
  },
  "van-loading:垂直排列": {
    "_self": {
      "description": "加载图标，用于表示加载中的过渡状态。",
      "text": [`<van-loading size="24px" vertical>加载中...</van-loading>`],
    },
  },
  "van-notify": {
    "_self": {
      "description": "在页面顶部展示消息提示，支持函数调用和组件调用两种方式。",
      "text": [`import Notify from '@vant/weapp/notify/notify';

Notify('通知内容');`],
    },
  },
  "van-notify:基础用法": {
    "_self": {
      "description": "在页面顶部展示消息提示，支持函数调用和组件调用两种方式。",
      "text": [`import Notify from '@vant/weapp/notify/notify';

Notify('通知内容');`],
    },
  },
  "van-notify:通知类型": {
    "_self": {
      "description": "在页面顶部展示消息提示，支持函数调用和组件调用两种方式。",
      "text": [`Notify({ type: 'primary', message: '通知内容' })`],
    },
  },
  "van-notify:自定义通知": {
    "_self": {
      "description": "在页面顶部展示消息提示，支持函数调用和组件调用两种方式。",
      "text": [`Notify({
  message: '自定义颜色',
  color: '#ad0000',
  background: '#ffe1e1',
})`],
    },
  },
  "van-notify:自定义选择器": {
    "_self": {
      "description": "在页面顶部展示消息提示，支持函数调用和组件调用两种方式。",
      "text": [`Notify({
  message: '自定义节点选择器',
  duration: 1000,
  selector: '#custom-selector',
})`],
    },
  },
  "van-overlay": {
    "_self": {
      "description": "创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。",
      "text": [`<van-overlay show="{{ show }}" bind:click="onClickHide" />`],
    },
  },
  "van-overlay:基础用法": {
    "_self": {
      "description": "创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。",
      "text": [`<van-overlay show="{{ show }}" bind:click="onClickHide" />`],
    },
  },
  "van-overlay:嵌入内容": {
    "_self": {
      "description": "创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。",
      "text": [`<van-overlay show="{{ show }}" bind:click="onClickHide">
  <view class="wrapper">
    <view class="block" catch:tap="noop" />
  </view>
</van-overlay>`],
    },
  },
  "van-share-sheet": {
    "_self": {
      "description": "底部弹起的分享面板，用于展示各分享渠道对应的操作按钮，不含具体的分享逻辑。",
      "text": [`<van-share-sheet
  show="{{ showShare }}"
  title="立即分享给好友"
  options="{{ options }}"
  bind:select="onSelect"
  bind:close="onClose"
/>`],
    },
    "show": {
      "type": "attribute",
      "description": `是否显示分享面板`,
      "values": [],
    },
    "options": {
      "type": "attribute",
      "description": `分享选项`,
      "values": [],
    },
    "title": {
      "type": "attribute",
      "description": `顶部标题`,
      "values": [],
    },
    "cancel-text": {
      "type": "attribute",
      "description": `取消按钮文字`,
      "values": [],
    },
    "description": {
      "type": "attribute",
      "description": `标题下方的辅助描述文字`,
      "values": [],
    },
    "duration": {
      "type": "attribute",
      "description": `动画时长，单位毫秒`,
      "values": [],
    },
    "overlay": {
      "type": "attribute",
      "description": `是否显示遮罩层`,
      "values": [],
    },
    "close-on-click-overlay": {
      "type": "attribute",
      "description": `是否在点击遮罩层后关闭`,
      "values": [],
    },
    "safe-area-inset-bottom": {
      "type": "attribute",
      "description": `是否开启底部安全区适配`,
      "values": [],
    },
    "bind:select": {
      "type": "attribute",
      "description": `点击分享选项时触发`,
      "values": [],
    },
    "bind:close": {
      "type": "attribute",
      "description": `关闭时触发`,
      "values": [],
    },
    "bind:cancel": {
      "type": "attribute",
      "description": `点击取消按钮时触发`,
      "values": [],
    },
    "bind:click-overlay": {
      "type": "attribute",
      "description": `点击遮罩层时触发`,
      "values": [],
    },
  },
  "van-share-sheet:基础用法": {
    "_self": {
      "description": "底部弹起的分享面板，用于展示各分享渠道对应的操作按钮，不含具体的分享逻辑。",
      "text": [`<van-share-sheet
  show="{{ showShare }}"
  title="立即分享给好友"
  options="{{ options }}"
  bind:select="onSelect"
  bind:close="onClose"
/>`],
    },
  },
  "van-share-sheet:展示多行选项": {
    "_self": {
      "description": "底部弹起的分享面板，用于展示各分享渠道对应的操作按钮，不含具体的分享逻辑。",
      "text": [`<van-share-sheet
  show="{{ showShare }}"
  title="立即分享给好友"
  options="{{ options }}"
/>`],
    },
  },
  "van-share-sheet:自定义图标": {
    "_self": {
      "description": "底部弹起的分享面板，用于展示各分享渠道对应的操作按钮，不含具体的分享逻辑。",
      "text": [`<van-share-sheet show="{{ showShare }}" options="{{ options }}" />`],
    },
  },
  "van-share-sheet:展示描述信息": {
    "_self": {
      "description": "底部弹起的分享面板，用于展示各分享渠道对应的操作按钮，不含具体的分享逻辑。",
      "text": [`<van-share-sheet
  show="{{ showShare }}"
  options="{{ options }}"
  title="立即分享给好友"
  description="描述信息"
/>`],
    },
  },
  "van-swipe-cell": {
    "_self": {
      "description": "可以左右滑动来展示操作按钮的单元格组件。",
      "text": [`<van-swipe-cell right-width="{{ 65 }}" left-width="{{ 65 }}">
  <view slot="left">选择</view>
  <van-cell-group>
    <van-cell title="单元格" value="内容" />
  </van-cell-group>
  <view slot="right">删除</view>
</van-swipe-cell>`],
    },
    "name": {
      "type": "attribute",
      "description": `标识符，可以在 close 事件的参数中获取到`,
      "values": [],
    },
    "left-width": {
      "type": "attribute",
      "description": `左侧滑动区域宽度`,
      "values": [],
    },
    "right-width": {
      "type": "attribute",
      "description": `右侧滑动区域宽度`,
      "values": [],
    },
    "async-close": {
      "type": "attribute",
      "description": `是否异步关闭`,
      "values": [],
    },
    "disabledv": {
      "type": "attribute",
      "description": `是否禁用滑动`,
      "values": [],
    },
    "bind:click": {
      "type": "attribute",
      "description": `点击时触发`,
      "values": [],
    },
    "bind:close": {
      "type": "attribute",
      "description": `关闭时触发`,
      "values": [],
    },
    "bind:open": {
      "type": "attribute",
      "description": `打开时触发`,
      "values": [],
    },
  },
  "van-swipe-cell:基础用法": {
    "_self": {
      "description": "可以左右滑动来展示操作按钮的单元格组件。",
      "text": [`<van-swipe-cell right-width="{{ 65 }}" left-width="{{ 65 }}">
  <view slot="left">选择</view>
  <van-cell-group>
    <van-cell title="单元格" value="内容" />
  </van-cell-group>
  <view slot="right">删除</view>
</van-swipe-cell>`],
    },
  },
  "van-swipe-cell:异步关闭": {
    "_self": {
      "description": "可以左右滑动来展示操作按钮的单元格组件。",
      "text": [`<van-swipe-cell
  id="swipe-cell"
  right-width="{{ 65 }}"
  left-width="{{ 65 }}"
  async-close
  bind:close="onClose"
>
  <view slot="left">选择</view>
  <van-cell-group>
    <van-cell title="单元格" value="内容" />
  </van-cell-group>
  <view slot="right">删除</view>
</van-swipe-cell>`],
    },
  },
  "van-swipe-cell:主动打开": {
    "_self": {
      "description": "可以左右滑动来展示操作按钮的单元格组件。",
      "text": [`<van-swipe-cell
  id="swipe-cell2"
  right-width="{{ 65 }}"
  left-width="{{ 65 }}"
  name="示例"
  bind:open="onOpen"
>
  <view slot="left" class="van-swipe-cell__left">选择</view>
  <van-cell-group>
    <van-cell title="单元格" value="内容" />
  </van-cell-group>
  <view slot="right" class="van-swipe-cell__right">删除</view>
</van-swipe-cell>`],
    },
  },
  "van-circle": {
    "_self": {
      "description": "圆环形的进度条组件，支持进度渐变动画。",
      "text": [`<van-circle value="{{ 30 }}" text="text" />`],
    },
    "value": {
      "type": "attribute",
      "description": `目标进度`,
      "values": [],
    },
    "type": {
      "type": "attribute",
      "description": `指定 canvas 类型，可选值为 2d`,
      "values": ['2d'],
    },
    "size": {
      "type": "attribute",
      "description": `圆环直径，默认单位为 px`,
      "values": [],
    },
    "color": {
      "type": "attribute",
      "description": `进度条颜色，传入对象格式可以定义渐变色`,
      "values": [],
    },
    "layer-color": {
      "type": "attribute",
      "description": `轨道颜色`,
      "values": [],
    },
    "fill": {
      "type": "attribute",
      "description": `填充颜色`,
      "values": [],
    },
    "speed": {
      "type": "attribute",
      "description": `动画速度（单位为 value/s）`,
      "values": [],
    },
    "text": {
      "type": "attribute",
      "description": `文字`,
      "values": [],
    },
    "stroke-width": {
      "type": "attribute",
      "description": `进度条宽度`,
      "values": [],
    },
    "clockwise": {
      "type": "attribute",
      "description": `是否顺时针增加`,
      "values": [],
    },
  },
  "van-circle:基础用法": {
    "_self": {
      "description": "圆环形的进度条组件，支持进度渐变动画。",
      "text": [`<van-circle value="{{ 30 }}" text="text" />`],
    },
  },
  "van-circle:宽度定制": {
    "_self": {
      "description": "圆环形的进度条组件，支持进度渐变动画。",
      "text": [`<van-circle value="{{ value }}" stroke-width="6" text="宽度定制" />`],
    },
  },
  "van-circle:颜色定制": {
    "_self": {
      "description": "圆环形的进度条组件，支持进度渐变动画。",
      "text": [`<van-circle
  value="{{ value }}"
  layer-color="#eeeeee"
  color="#ee0a24"
  text="颜色定制"
/>`],
    },
  },
  "van-circle:渐变色": {
    "_self": {
      "description": "圆环形的进度条组件，支持进度渐变动画。",
      "text": [`<van-circle value="{{ value }}" color="{{ gradientColor }}" text="渐变色" />`],
    },
  },
  "van-circle:逆时针方向": {
    "_self": {
      "description": "圆环形的进度条组件，支持进度渐变动画。",
      "text": [`<van-circle
  value="{{ value }}"
  color="#07c160"
  clockwise="{{ false }}"
  text="逆时针"
/>`],
    },
  },
  "van-circle:大小定制": {
    "_self": {
      "description": "圆环形的进度条组件，支持进度渐变动画。",
      "text": [`<van-circle value="{{ value }}" size="120" text="大小定制" />`],
    },
  },
  "van-collapse": {
    "_self": {
      "description": "将一组内容放置在多个折叠面板中，点击面板的标题可以展开或收缩其内容。",
      "text": [`<van-collapse value="{{ activeNames }}" bind:change="onChange">
  <van-collapse-item title="标题1" name="1">
    代码是写出来给人看的，附带能在机器上运行
  </van-collapse-item>
  <van-collapse-item title="标题2" name="2">
    代码是写出来给人看的，附带能在机器上运行
  </van-collapse-item>
  <van-collapse-item title="标题3" name="3" disabled>
    代码是写出来给人看的，附带能在机器上运行
  </van-collapse-item>
</van-collapse>`],
    },
    "value": {
      "type": "attribute",
      "description": `当前展开面板的 name`,
      "values": [],
    },
    "accordion": {
      "type": "attribute",
      "description": `是否开启手风琴模式`,
      "values": [],
    },
    "border": {
      "type": "attribute",
      "description": `是否显示外边框`,
      "values": [],
    },
  },
  "van-collapse:基础用法": {
    "_self": {
      "description": "将一组内容放置在多个折叠面板中，点击面板的标题可以展开或收缩其内容。",
      "text": [`<van-collapse value="{{ activeNames }}" bind:change="onChange">
  <van-collapse-item title="标题1" name="1">
    代码是写出来给人看的，附带能在机器上运行
  </van-collapse-item>
  <van-collapse-item title="标题2" name="2">
    代码是写出来给人看的，附带能在机器上运行
  </van-collapse-item>
  <van-collapse-item title="标题3" name="3" disabled>
    代码是写出来给人看的，附带能在机器上运行
  </van-collapse-item>
</van-collapse>`],
    },
  },
  "van-collapse:手风琴": {
    "_self": {
      "description": "将一组内容放置在多个折叠面板中，点击面板的标题可以展开或收缩其内容。",
      "text": [`<van-collapse accordion value="{{ activeName }}" bind:change="onChange">
  <van-collapse-item title="标题1" name="1">
    代码是写出来给人看的，附带能在机器上运行
  </van-collapse-item>
  <van-collapse-item title="标题2" name="2">
    代码是写出来给人看的，附带能在机器上运行
  </van-collapse-item>
  <van-collapse-item title="标题3" name="3">
    代码是写出来给人看的，附带能在机器上运行
  </van-collapse-item>
</van-collapse>`],
    },
  },
  "van-collapse:事件监听": {
    "_self": {
      "description": "将一组内容放置在多个折叠面板中，点击面板的标题可以展开或收缩其内容。",
      "text": [`<van-collapse
  value="{{ activeNames }}"
  bind:change="onChange"
  bind:open="onOpen"
  bind:close="onClose"
>
  <van-collapse-item title="标题1" name="1">
    代码是写出来给人看的，附带能在机器上运行
  </van-collapse-item>
  <van-collapse-item title="标题2" name="2">
    代码是写出来给人看的，附带能在机器上运行
  </van-collapse-item>
  <van-collapse-item title="标题3" name="3">
    代码是写出来给人看的，附带能在机器上运行
  </van-collapse-item>
</van-collapse>`],
    },
  },
  "van-collapse:自定义标题内容": {
    "_self": {
      "description": "将一组内容放置在多个折叠面板中，点击面板的标题可以展开或收缩其内容。",
      "text": [`<van-collapse value="{{ activeNames }}" bind:change="onChange">
  <van-collapse-item name="1">
    <view slot="title">标题1<van-icon name="question-o" /></view>
    代码是写出来给人看的，附带能在机器上运行
  </van-collapse-item>
  <van-collapse-item title="标题2" name="2" icon="shop-o">
    代码是写出来给人看的，附带能在机器上运行
  </van-collapse-item>
</van-collapse>`],
    },
  },
  "van-collapse-item": {
    "_self": {
      "description": "",
      "text": [`<van-collapse-item title="" name=""></van-collapse-item>`],
    },
    "name": {
      "type": "attribute",
      "description": `唯一标识符，默认为索引值`,
      "values": [],
    },
    "title": {
      "type": "attribute",
      "description": `标题栏左侧内容`,
      "values": [],
    },
    "size": {
      "type": "attribute",
      "description": `标题栏大小，可选值为large`,
      "values": ['large'],
    },
    "icon": {
      "type": "attribute",
      "description": `标题栏左侧图标名称或图片链接，可选值见 Icon 组件`,
      "values": [],
    },
    "value": {
      "type": "attribute",
      "description": `标题栏右侧内容`,
      "values": [],
    },
    "label": {
      "type": "attribute",
      "description": `标题栏描述信息`,
      "values": [],
    },
    "border": {
      "type": "attribute",
      "description": `是否显示内边框`,
      "values": [],
    },
    "is-link": {
      "type": "attribute",
      "description": `是否展示标题栏右侧箭头并开启点击反馈`,
      "values": [],
    },
    "clickable": {
      "type": "attribute",
      "description": `是否开启点击反馈`,
      "values": [],
    },
    "disabled": {
      "type": "attribute",
      "description": `是否禁用面板`,
      "values": [],
    },
  },
  "van-count-down": {
    "_self": {
      "description": "用于实时展示倒计时数值，支持毫秒精度。",
      "text": [`<van-count-down time="{{ time }}" />`],
    },
    "time": {
      "type": "attribute",
      "description": `倒计时时长，单位毫秒`,
      "values": [],
    },
    "format": {
      "type": "attribute",
      "description": `时间格式，DD-日，HH-时，mm-分，ss-秒，SSS-毫秒`,
      "values": [],
    },
    "auto-start": {
      "type": "attribute",
      "description": `是否自动开始倒计时`,
      "values": [],
    },
    "millisecond": {
      "type": "attribute",
      "description": `是否开启毫秒级渲染`,
      "values": [],
    },
    "use-slot": {
      "type": "attribute",
      "description": `是否使用自定义样式插槽`,
      "values": [],
    },
    "bind:finish": {
      "type": "attribute",
      "description": `倒计时结束时触发`,
      "values": [],
    },
    "bind:change": {
      "type": "attribute",
      "description": `时间变化时触发，仅在开启use-slot后才会触发`,
      "values": [],
    },
  },
  "van-count-down:基本用法": {
    "_self": {
      "description": "用于实时展示倒计时数值，支持毫秒精度。",
      "text": [`<van-count-down time="{{ time }}" />`],
    },
  },
  "van-count-down:自定义格式": {
    "_self": {
      "description": "用于实时展示倒计时数值，支持毫秒精度。",
      "text": [`<van-count-down time="{{ time }}" format="DD 天 HH 时 mm 分 ss 秒" />`],
    },
  },
  "van-count-down:毫秒级渲染": {
    "_self": {
      "description": "用于实时展示倒计时数值，支持毫秒精度。",
      "text": [`<van-count-down millisecond time="{{ time }}" format="HH:mm:ss:SSS" />`],
    },
  },
  "van-count-down:自定义样式": {
    "_self": {
      "description": "用于实时展示倒计时数值，支持毫秒精度。",
      "text": [`<van-count-down use-slot time="{{ time }}" bind:change="onChange">
  <text class="item">{{ timeData.hours }}</text>
  <text class="item">{{ timeData.minutes }}</text>
  <text class="item">{{ timeData.seconds }}</text>
</van-count-down>`],
    },
  },
  "van-count-down:手动控制": {
    "_self": {
      "description": "用于实时展示倒计时数值，支持毫秒精度。",
      "text": [`<van-count-down
  class="control-count-down"
  millisecond
  time="{{ 3000 }}"
  auto-start="{{ false }}"
  format="ss:SSS"
  bind:finish="finished"
/>`],
    },
  },
  "van-divider": {
    "_self": {
      "description": "用于将内容分隔为多个区域。",
      "text": [`<van-divider />`],
    },
    "dashed": {
      "type": "attribute",
      "description": `虚线`,
      "values": [],
    },
    "hairline": {
      "type": "attribute",
      "description": `细线`,
      "values": [],
    },
    "content-position": {
      "type": "attribute",
      "description": `文本位置，left center right`,
      "values": [],
    },
    "custom-style": {
      "type": "attribute",
      "description": `自定义样式`,
      "values": [],
    },
  },
  "van-divider:基础用法": {
    "_self": {
      "description": "用于将内容分隔为多个区域。",
      "text": [`<van-divider />`],
    },
  },
  "van-divider:使用 hairline": {
    "_self": {
      "description": "用于将内容分隔为多个区域。",
      "text": [`<van-divider hairline />`],
    },
  },
  "van-divider:虚线": {
    "_self": {
      "description": "用于将内容分隔为多个区域。",
      "text": [`<van-divider dashed />`],
    },
  },
  "van-divider:文本位置": {
    "_self": {
      "description": "用于将内容分隔为多个区域。",
      "text": [`<van-divider contentPosition="center">文本</van-divider>`],
    },
  },
  "van-divider:自定义属性": {
    "_self": {
      "description": "用于将内容分隔为多个区域。",
      "text": [`<van-divider contentPosition="center" textColor="#1989fa">文本颜色</van-divider>`],
    },
  },
  "van-divider:自定义样式": {
    "_self": {
      "description": "用于将内容分隔为多个区域。",
      "text": [`<van-divider
  contentPosition="center"
  customStyle="color: #1989fa; border-color: #1989fa; font-size: 18px;"
>
  文本
</van-divider>`],
    },
  },
  "van-empty": {
    "_self": {
      "description": "空状态时的占位提示。",
      "text": [`<van-empty description="描述文字" />`],
    },
    "image": {
      "type": "attribute",
      "description": `图片类型，可选值为 error network search，支持传入图片 URL`,
      "values": ['error', 'network', 'search'],
    },
    "description": {
      "type": "attribute",
      "description": `图片下方的描述文字`,
      "values": [],
    },
  },
  "van-empty:基础用法": {
    "_self": {
      "description": "空状态时的占位提示。",
      "text": [`<van-empty description="描述文字" />`],
    },
  },
  "van-empty:图片类型": {
    "_self": {
      "description": "空状态时的占位提示。",
      "text": [`<van-empty image="error" description="描述文字" />`],
    },
  },
  "van-empty:自定义图片": {
    "_self": {
      "description": "空状态时的占位提示。",
      "text": [`<van-empty
  class="custom-image"
  image="https://img.yzcdn.cn/vant/custom-empty-image.png"
  description="描述文字"
/>`],
    },
  },
  "van-empty:底部内容": {
    "_self": {
      "description": "空状态时的占位提示。",
      "text": [`<van-empty description="描述文字">
  <van-button round type="danger" class="bottom-button">按钮</van-button>
</van-empty>`],
    },
  },
  "van-notice-bar": {
    "_self": {
      "description": "用于循环播放展示一组消息通知。",
      "text": [`<van-notice-bar
  left-icon="volume-o"
  text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
/>`],
    },
    "mode": {
      "type": "attribute",
      "description": `通知栏模式，可选值为 closeable link`,
      "values": ['closeable', 'link'],
    },
    "text": {
      "type": "attribute",
      "description": `通知文本内容`,
      "values": [],
    },
    "color": {
      "type": "attribute",
      "description": `通知文本颜色`,
      "values": [],
    },
    "background": {
      "type": "attribute",
      "description": `滚动条背景`,
      "values": [],
    },
    "left-icon": {
      "type": "attribute",
      "description": `左侧图标名称或图片链接`,
      "values": [],
    },
    "delay": {
      "type": "attribute",
      "description": `动画延迟时间 (ms)`,
      "values": [],
    },
    "speed": {
      "type": "attribute",
      "description": `滚动速率 (px/s)`,
      "values": [],
    },
    "scrollable": {
      "type": "attribute",
      "description": `是否开启滚动播放，内容长度溢出时默认开启`,
      "values": [],
    },
    "wrapable": {
      "type": "attribute",
      "description": `是否开启文本换行，只在禁用滚动时生效`,
      "values": [],
    },
    "open-type": {
      "type": "attribute",
      "description": `微信开放能力`,
      "values": [],
    },
    "bind:click": {
      "type": "attribute",
      "description": `点击通知栏时触发`,
      "values": [],
    },
    "bind:close": {
      "type": "attribute",
      "description": `关闭通知栏时触发`,
      "values": [],
    },
    "custom-class": {
      "type": "attribute",
      "description": `根节点样式类`,
      "values": [],
    },
  },
  "van-notice-bar:基础用法": {
    "_self": {
      "description": "用于循环播放展示一组消息通知。",
      "text": [`<van-notice-bar
  left-icon="volume-o"
  text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
/>`],
    },
  },
  "van-notice-bar:滚动播放": {
    "_self": {
      "description": "用于循环播放展示一组消息通知。",
      "text": [`<!-- 文字较短时，通过设置 scrollable 属性开启滚动播放 -->
<van-notice-bar scrollable text="技术是开发它的人的共同灵魂。" />

<!-- 文字较长时，通过禁用 scrollable 属性关闭滚动播放 -->
<van-notice-bar
  scrollable="{{ false }}"
  text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
/>`],
    },
  },
  "van-notice-bar:多行展示": {
    "_self": {
      "description": "用于循环播放展示一组消息通知。",
      "text": [`<van-notice-bar
  wrapable
  scrollable="{{ false }}"
  text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
/>`],
    },
  },
  "van-notice-bar:通知栏模式": {
    "_self": {
      "description": "用于循环播放展示一组消息通知。",
      "text": [`<van-notice-bar mode="closeable" text="" />`],
    },
  },
  "van-notice-bar:自定义样式": {
    "_self": {
      "description": "用于循环播放展示一组消息通知。",
      "text": [`<van-notice-bar
  color="#1989fa"
  background="#ecf9ff"
  left-icon="info-o"
  text="技术是开发它的人的共同灵魂。"
/>`],
    },
  },
  "van-notice-bar:自定义滚动速率": {
    "_self": {
      "description": "用于循环播放展示一组消息通知。",
      "text": [`<van-notice-bar
  text="{{ text }}"
  speed="{{speedValue}}"
  left-icon="//img.yzcdn.cn/public_files/2017/8/10/6af5b7168eed548100d9041f07b7c616.png"
/>`],
    },
  },
  "van-progress": {
    "_self": {
      "description": "用于展示操作的当前进度。",
      "text": [`<van-progress percentage="50" />`],
    },
    "inactive": {
      "type": "attribute",
      "description": `是否置灰`,
      "values": [],
    },
    "percentage": {
      "type": "attribute",
      "description": `进度百分比`,
      "values": [],
    },
    "stroke-width": {
      "type": "attribute",
      "description": `进度条粗细，默认单位为px`,
      "values": [],
    },
    "show-pivot": {
      "type": "attribute",
      "description": `是否显示进度文字`,
      "values": [],
    },
    "color": {
      "type": "attribute",
      "description": `进度条颜色`,
      "values": [],
    },
    "text-color": {
      "type": "attribute",
      "description": `进度文字颜色`,
      "values": [],
    },
    "track-color": {
      "type": "attribute",
      "description": `轨道颜色`,
      "values": [],
    },
    "pivot-text": {
      "type": "attribute",
      "description": `文字显示`,
      "values": [],
    },
    "pivot-color": {
      "type": "attribute",
      "description": `文字背景色`,
      "values": [],
    },
    "custom-class": {
      "type": "attribute",
      "description": `根节点样式类`,
      "values": [],
    },
  },
  "van-progress:基础用法": {
    "_self": {
      "description": "用于展示操作的当前进度。",
      "text": [`<van-progress percentage="50" />`],
    },
  },
  "van-progress:线条粗细": {
    "_self": {
      "description": "用于展示操作的当前进度。",
      "text": [`<van-progress :percentage="50" stroke-width="8" />`],
    },
  },
  "van-progress:置灰": {
    "_self": {
      "description": "用于展示操作的当前进度。",
      "text": [`<van-progress inactive percentage="50" />`],
    },
  },
  "van-progress:样式定制": {
    "_self": {
      "description": "用于展示操作的当前进度。",
      "text": [`<van-progress pivot-text="橙色" color="#f2826a" percentage="25" />`],
    },
  },
  "van-skeleton": {
    "_self": {
      "description": "用于在内容加载过程中展示一组占位图形。",
      "text": [`<van-skeleton title row="3" />`],
    },
    "row": {
      "type": "attribute",
      "description": `段落占位图行数`,
      "values": [],
    },
    "row-width": {
      "type": "attribute",
      "description": `段落占位图宽度，可传数组来设置每一行的宽度`,
      "values": [],
    },
    "title": {
      "type": "attribute",
      "description": `是否显示标题占位图`,
      "values": [],
    },
    "title-width": {
      "type": "attribute",
      "description": `标题占位图宽度`,
      "values": [],
    },
    "avatar": {
      "type": "attribute",
      "description": `是否显示头像占位图`,
      "values": [],
    },
    "avatar-size": {
      "type": "attribute",
      "description": `头像占位图大小`,
      "values": [],
    },
    "avatar-shape": {
      "type": "attribute",
      "description": `头像占位图形状，可选值为square`,
      "values": ['square'],
    },
    "loading": {
      "type": "attribute",
      "description": `是否显示占位图，传false时会展示子组件内容`,
      "values": [],
    },
    "animate": {
      "type": "attribute",
      "description": `是否开启动画`,
      "values": [],
    },
  },
  "van-skeleton:基础用法": {
    "_self": {
      "description": "用于在内容加载过程中展示一组占位图形。",
      "text": [`<van-skeleton title row="3" />`],
    },
  },
  "van-skeleton:显示头像": {
    "_self": {
      "description": "用于在内容加载过程中展示一组占位图形。",
      "text": [`<van-skeleton title avatar row="3" />`],
    },
  },
  "van-skeleton:展示子组件": {
    "_self": {
      "description": "用于在内容加载过程中展示一组占位图形。",
      "text": [`<van-skeleton title avatar row="3" loading="{{ loading }}">
  <view>实际内容</view>
</van-skeleton>`],
    },
  },
  "van-steps": {
    "_self": {
      "description": "用于展示操作流程的各个环节，让用户了解当前的操作在整体流程中的位置。",
      "text": [`<van-steps steps="{{ steps }}" active="{{ active }}" />`],
    },
    "active": {
      "type": "attribute",
      "description": `当前步骤`,
      "values": [],
    },
    "steps": {
      "type": "attribute",
      "description": `步骤配置集合，见下面配置项`,
      "values": [],
    },
    "direction": {
      "type": "attribute",
      "description": `显示方向，可选值为 horizontal vertical`,
      "values": ['horizontal', 'vertical'],
    },
    "active-color": {
      "type": "attribute",
      "description": `激活状态颜色`,
      "values": [],
    },
    "inactive-color": {
      "type": "attribute",
      "description": `未激活状态颜色`,
      "values": [],
    },
    "active-icon": {
      "type": "attribute",
      "description": `激活状态底部图标，可选值见 Icon 组件`,
      "values": [],
    },
    "inactive-icon": {
      "type": "attribute",
      "description": `未激活状态底部图标，可选值见 Icon 组件`,
      "values": [],
    },
    "bind:click-step": {
      "type": "attribute",
      "description": `点击步骤时触发的事件`,
      "values": [],
    },
    "custom-class": {
      "type": "attribute",
      "description": `根节点样式类`,
      "values": [],
    },
    "desc-class": {
      "type": "attribute",
      "description": `描述信息样式类`,
      "values": [],
    },
  },
  "van-steps:基础用法": {
    "_self": {
      "description": "用于展示操作流程的各个环节，让用户了解当前的操作在整体流程中的位置。",
      "text": [`<van-steps steps="{{ steps }}" active="{{ active }}" />`],
    },
  },
  "van-steps:自定义样式": {
    "_self": {
      "description": "用于展示操作流程的各个环节，让用户了解当前的操作在整体流程中的位置。",
      "text": [`<van-steps
  steps="{{ steps }}"
  active="{{ active }}"
  active-icon="success"
  active-color="#38f"
/>`],
    },
  },
  "van-steps:自定义图标": {
    "_self": {
      "description": "用于展示操作流程的各个环节，让用户了解当前的操作在整体流程中的位置。",
      "text": [`<van-steps steps="{{ steps }}" active="{{ active }}" />`],
    },
  },
  "van-steps:竖向步骤条": {
    "_self": {
      "description": "用于展示操作流程的各个环节，让用户了解当前的操作在整体流程中的位置。",
      "text": [`<van-steps
  steps="{{ steps }}"
  active="{{ active }}"
  direction="vertical"
  active-color="#ee0a24"
/>`],
    },
  },
  "van-sticky": {
    "_self": {
      "description": "Sticky 组件与 CSS 中<code>position: sticky</code>属性实现的效果一致，当组件在屏幕范围内时，会按照正常的布局排列，当组件滚出屏幕范围时，始终会固定在屏幕顶部。",
      "text": [`<van-sticky>
  <van-button type="primary">基础用法</van-button>
</van-sticky>`],
    },
    "offset-top": {
      "type": "attribute",
      "description": `吸顶时与顶部的距离，单位px`,
      "values": [],
    },
    "z-index": {
      "type": "attribute",
      "description": `吸顶时的 z-index`,
      "values": [],
    },
    "container": {
      "type": "attribute",
      "description": `一个函数，返回容器对应的 NodesRef 节点`,
      "values": [],
    },
    "scroll-top": {
      "type": "attribute",
      "description": `当前滚动区域的滚动位置，非 null 时会禁用页面滚动事件的监听`,
      "values": [],
    },
    "bind:scroll": {
      "type": "attribute",
      "description": `滚动时触发`,
      "values": [],
    },
  },
  "van-sticky:基础用法": {
    "_self": {
      "description": "Sticky 组件与 CSS 中<code>position: sticky</code>属性实现的效果一致，当组件在屏幕范围内时，会按照正常的布局排列，当组件滚出屏幕范围时，始终会固定在屏幕顶部。",
      "text": [`<van-sticky>
  <van-button type="primary">基础用法</van-button>
</van-sticky>`],
    },
  },
  "van-sticky:吸顶距离": {
    "_self": {
      "description": "Sticky 组件与 CSS 中<code>position: sticky</code>属性实现的效果一致，当组件在屏幕范围内时，会按照正常的布局排列，当组件滚出屏幕范围时，始终会固定在屏幕顶部。",
      "text": [`<van-sticky offset-top="{{ 50 }}">
  <van-button type="info">吸顶距离</van-button>
</van-sticky>`],
    },
  },
  "van-sticky:指定容器": {
    "_self": {
      "description": "Sticky 组件与 CSS 中<code>position: sticky</code>属性实现的效果一致，当组件在屏幕范围内时，会按照正常的布局排列，当组件滚出屏幕范围时，始终会固定在屏幕顶部。",
      "text": [`<view id="container" style="height: 150px;">
  <van-sticky container="{{ container }}">
    <van-button type="warning">指定容器</van-button>
  </van-sticky>
</view>`],
    },
  },
  "van-sticky:嵌套在 scroll-view 内使用": {
    "_self": {
      "description": "Sticky 组件与 CSS 中<code>position: sticky</code>属性实现的效果一致，当组件在屏幕范围内时，会按照正常的布局排列，当组件滚出屏幕范围时，始终会固定在屏幕顶部。",
      "text": [`<scroll-view
  bind:scroll="onScroll"
  scroll-y
  id="scroller"
  style="height: 200px;"
>
  <view style="height: 400px; padding-top: 50px;">
    <van-sticky scroll-top="{{ scrollTop }}" offset-top="{{ offsetTop }}">
      <van-button type="warning">嵌套在 scroll-view 内</van-button>
    </van-sticky>
  </view>
</scroll-view>`],
    },
  },
  "van-tag": {
    "_self": {
      "description": "用于标记关键词和概括主要内容。",
      "text": [`<van-tag type="primary"></van-tag>`],
    },
    "type": {
      "type": "attribute",
      "description": `类型，可选值为 primary success danger warning`,
      "values": ['primary', 'success', 'danger', 'warning'],
    },
    "size": {
      "type": "attribute",
      "description": `大小, 可选值为 large medium`,
      "values": ['large', 'medium'],
    },
    "color": {
      "type": "attribute",
      "description": `标签颜色`,
      "values": [],
    },
    "plain": {
      "type": "attribute",
      "description": `是否为空心样式`,
      "values": [],
    },
    "round": {
      "type": "attribute",
      "description": `是否为圆角样式`,
      "values": [],
    },
    "mark": {
      "type": "attribute",
      "description": `是否为标记样式`,
      "values": [],
    },
    "text-color": {
      "type": "attribute",
      "description": `文本颜色，优先级高于 color 属性`,
      "values": [],
    },
    "closeable": {
      "type": "attribute",
      "description": `是否为可关闭标签`,
      "values": [],
    },
    "bind:close": {
      "type": "attribute",
      "description": `关闭标签时触发`,
      "values": [],
    },
    "custom-class": {
      "type": "attribute",
      "description": `根节点样式类`,
      "values": [],
    },
  },
  "van-tag:基础用法": {
    "_self": {
      "description": "用于标记关键词和概括主要内容。",
      "text": [`<van-tag type="primary"></van-tag>`],
    },
  },
  "van-tag:空心样式": {
    "_self": {
      "description": "用于标记关键词和概括主要内容。",
      "text": [`<van-tag plain type="primary"></van-tag>`],
    },
  },
  "van-tag:圆角样式": {
    "_self": {
      "description": "用于标记关键词和概括主要内容。",
      "text": [`<van-tag round type="primary"></van-tag>`],
    },
  },
  "van-tag:标记样式": {
    "_self": {
      "description": "用于标记关键词和概括主要内容。",
      "text": [`<van-tag mark type="primary"></van-tag>`],
    },
  },
  "van-tag:自定义颜色": {
    "_self": {
      "description": "用于标记关键词和概括主要内容。",
      "text": [`<van-tag color="#f2826a"></van-tag>`],
    },
  },
  "van-tag:标签大小": {
    "_self": {
      "description": "用于标记关键词和概括主要内容。",
      "text": [`<van-tag type="danger"></van-tag>`],
    },
  },
  "van-tag:可关闭标签": {
    "_self": {
      "description": "用于标记关键词和概括主要内容。",
      "text": [`<van-tag
  wx:if="{{ show.primary }}"
  closeable
  size="medium"
  type="primary"
  id="primary"
  bind:close="onClose"
>
  标签
</van-tag>`],
    },
  },
  "van-grid": {
    "_self": {
      "description": "宫格可以在水平方向上把页面分隔成等宽度的区块，用于展示内容或进行页面导航。",
      "text": [`<van-grid>
  <van-grid-item icon="photo-o" text="文字" />
</van-grid>`],
    },
    "column-num": {
      "type": "attribute",
      "description": `列数`,
      "values": [],
    },
    "icon-sizev": {
      "type": "attribute",
      "description": `图标大小，默认单位为px`,
      "values": [],
    },
    "gutter": {
      "type": "attribute",
      "description": `格子之间的间距，默认单位为px`,
      "values": [],
    },
    "border": {
      "type": "attribute",
      "description": `是否显示边框`,
      "values": [],
    },
    "center": {
      "type": "attribute",
      "description": `是否将格子内容居中显示`,
      "values": [],
    },
    "square": {
      "type": "attribute",
      "description": `是否将格子固定为正方形`,
      "values": [],
    },
    "clickable": {
      "type": "attribute",
      "description": `是否开启格子点击反馈`,
      "values": [],
    },
    "direction": {
      "type": "attribute",
      "description": `格子内容排列的方向，可选值为 horizontal`,
      "values": ['horizontal'],
    },
    "reversev": {
      "type": "attribute",
      "description": `是否调换图标和文本的位置`,
      "values": [],
    },
    "use-slot": {
      "type": "attribute",
      "description": `是否使用自定义内容的插槽`,
      "values": [],
    },
  },
  "van-grid:基本用法": {
    "_self": {
      "description": "宫格可以在水平方向上把页面分隔成等宽度的区块，用于展示内容或进行页面导航。",
      "text": [`<van-grid>
  <van-grid-item icon="photo-o" text="文字" />
</van-grid>`],
    },
  },
  "van-grid:自定义列数": {
    "_self": {
      "description": "宫格可以在水平方向上把页面分隔成等宽度的区块，用于展示内容或进行页面导航。",
      "text": [`<van-grid column-num="3">
  <van-grid-item icon="photo-o" text="文字" wx:for="{{ 6 }}" />
</van-grid>`],
    },
  },
  "van-grid:自定义内容": {
    "_self": {
      "description": "宫格可以在水平方向上把页面分隔成等宽度的区块，用于展示内容或进行页面导航。",
      "text": [`<van-grid column-num="3" border="{{ false }}">
  <van-grid-item use-slot wx:for="{{ 3 }}" wx:for-item="index">
    <image
      style="width: 100%; height: 90px;"
      src="https://img.yzcdn.cn/vant/apple-{{ index + 1 }}.jpg"
    />
  </van-grid-item>
</van-grid>`],
    },
  },
  "van-grid:正方形格子": {
    "_self": {
      "description": "宫格可以在水平方向上把页面分隔成等宽度的区块，用于展示内容或进行页面导航。",
      "text": [`<van-grid square>
  <van-grid-item icon="photo-o" text="文字" wx:for="{{ 8 }}" />
</van-grid>`],
    },
  },
  "van-grid:格子间距": {
    "_self": {
      "description": "宫格可以在水平方向上把页面分隔成等宽度的区块，用于展示内容或进行页面导航。",
      "text": [`<van-grid gutter="{{ 10 }}">
  <van-grid-item icon="photo-o" text="文字" wx:for="{{ 8 }}" />
</van-grid>`],
    },
  },
  "van-grid:内容横排": {
    "_self": {
      "description": "宫格可以在水平方向上把页面分隔成等宽度的区块，用于展示内容或进行页面导航。",
      "text": [`<van-grid direction="horizontal" column-num="2">
  <van-grid-item icon="photo-o" text="文字" />
</van-grid>`],
    },
  },
  "van-grid:页面跳转": {
    "_self": {
      "description": "宫格可以在水平方向上把页面分隔成等宽度的区块，用于展示内容或进行页面导航。",
      "text": [`<van-grid clickable column-num="2">
  <van-grid-item
    icon="home-o"
    link-type="navigateTo"
    url="/pages/dashboard/index"
    text="Navigate 跳转"
  />
</van-grid>`],
    },
  },
  "van-grid:提示信息": {
    "_self": {
      "description": "宫格可以在水平方向上把页面分隔成等宽度的区块，用于展示内容或进行页面导航。",
      "text": [`<van-grid column-num="2">
  <van-grid-item icon="home-o" text="文字" dot />
</van-grid>`],
    },
  },
  "van-grid-item": {
    "_self": {
      "description": "",
      "text": [`<van-grid-item icon="photo-o" text="文字" />`],
    },
    "text": {
      "type": "attribute",
      "description": `文字`,
      "values": [],
    },
    "icon": {
      "type": "attribute",
      "description": `图标名称或图片链接，可选值见 Icon 组件`,
      "values": [],
    },
    "icon-color": {
      "type": "attribute",
      "description": `图标颜色`,
      "values": [],
    },
    "icon-prefixv": {
      "type": "attribute",
      "description": `第三方图标前缀`,
      "values": [],
    },
    "dot": {
      "type": "attribute",
      "description": `是否显示图标右上角小红点`,
      "values": [],
    },
    "badge": {
      "type": "attribute",
      "description": `图标右上角徽标的内容`,
      "values": [],
    },
    "url": {
      "type": "attribute",
      "description": `点击后跳转的链接地址`,
      "values": [],
    },
    "link-type": {
      "type": "attribute",
      "description": `链接跳转类型，可选值为 redirectTo switchTab reLaunch`,
      "values": ['redirectTo', 'switchTab', 'reLaunch'],
    },
    "bind:click": {
      "type": "attribute",
      "description": `点击格子时触发`,
      "values": [],
    },
  },
  "van-index-bar": {
    "_self": {
      "description": "用于列表的索引分类显示和快速定位。",
      "text": [`<van-index-bar>
  <view>
    <van-index-anchor index="A" />
    <van-cell title="文本" />
    <van-cell title="文本" />
    <van-cell title="文本" />
  </view>
</van-index-bar>`],
    },
    "index-list": {
      "type": "attribute",
      "description": `索引字符列表`,
      "values": [],
    },
    "z-index": {
      "type": "attribute",
      "description": `z-index 层级`,
      "values": [],
    },
    "sticky": {
      "type": "attribute",
      "description": `是否开启锚点自动吸顶`,
      "values": [],
    },
    "sticky-offset-top": {
      "type": "attribute",
      "description": `锚点自动吸顶时与顶部的距离`,
      "values": [],
    },
    "highlight-color": {
      "type": "attribute",
      "description": `索引字符高亮颜色`,
      "values": [],
    },
    "select": {
      "type": "attribute",
      "description": `选中字符时触发`,
      "values": [],
    },
  },
  "van-index-bar:基础用法": {
    "_self": {
      "description": "用于列表的索引分类显示和快速定位。",
      "text": [`<van-index-bar>
  <view>
    <van-index-anchor index="A" />
    <van-cell title="文本" />
    <van-cell title="文本" />
    <van-cell title="文本" />
  </view>
</van-index-bar>`],
    },
  },
  "van-index-bar:自定义索引列表": {
    "_self": {
      "description": "用于列表的索引分类显示和快速定位。",
      "text": [`<van-index-bar index-list="{{ indexList }}">
  <view>
    <van-index-anchor index="1">标题1</van-index-anchor>
    <van-cell title="文本" />
    <van-cell title="文本" />
    <van-cell title="文本" />
  </view>
</van-index-bar>`],
    },
  },
  "van-index-anchor": {
    "_self": {
      "description": "",
      "text": [`<van-index-anchor index=""></van-index-anchor>`],
    },
    "use-slot": {
      "type": "attribute",
      "description": `是否使用自定义内容的插槽`,
      "values": [],
    },
    "index": {
      "type": "attribute",
      "description": `索引字符`,
      "values": [],
    },
  },
  "van-nav-bar": {
    "_self": {
      "description": "为页面提供导航功能，常用于页面顶部。",
      "text": [`<van-nav-bar
  title="标题"
  left-text="返回"
  right-text="按钮"
  left-arrow
  bind:click-left="onClickLeft"
  bind:click-right="onClickRight"
/>`],
    },
    "title": {
      "type": "attribute",
      "description": `标题`,
      "values": [],
    },
    "left-text": {
      "type": "attribute",
      "description": `左侧文案`,
      "values": [],
    },
    "right-text": {
      "type": "attribute",
      "description": `右侧文案`,
      "values": [],
    },
    "left-arrow": {
      "type": "attribute",
      "description": `是否显示左侧箭头`,
      "values": [],
    },
    "fixed": {
      "type": "attribute",
      "description": `是否固定在顶部`,
      "values": [],
    },
    "placeholder": {
      "type": "attribute",
      "description": `固定在顶部时是否开启占位`,
      "values": [],
    },
    "border": {
      "type": "attribute",
      "description": `是否显示下边框`,
      "values": [],
    },
    "z-index": {
      "type": "attribute",
      "description": `元素 z-index`,
      "values": [],
    },
    "custom-style": {
      "type": "attribute",
      "description": `根节点自定义样式`,
      "values": [],
    },
    "safe-area-inset-top": {
      "type": "attribute",
      "description": `是否留出顶部安全距离（状态栏高度）`,
      "values": [],
    },
    "bind:click-left": {
      "type": "attribute",
      "description": `点击左侧按钮时触发`,
      "values": [],
    },
    "bind:click-right": {
      "type": "attribute",
      "description": `点击右侧按钮时触发`,
      "values": [],
    },
    "custom-class": {
      "type": "attribute",
      "description": `根节点样式类`,
      "values": [],
    },
    "title-class": {
      "type": "attribute",
      "description": `标题样式类`,
      "values": [],
    },
  },
  "van-nav-bar:基础用法": {
    "_self": {
      "description": "为页面提供导航功能，常用于页面顶部。",
      "text": [`<van-nav-bar
  title="标题"
  left-text="返回"
  right-text="按钮"
  left-arrow
  bind:click-left="onClickLeft"
  bind:click-right="onClickRight"
/>`],
    },
  },
  "van-nav-bar:高级用法": {
    "_self": {
      "description": "为页面提供导航功能，常用于页面顶部。",
      "text": [`<van-nav-bar title="标题" left-text="返回" left-arrow>
  <van-icon name="search" slot="right" />
</van-nav-bar>`],
    },
  },
  "van-sidebar": {
    "_self": {
      "description": "垂直展示的导航栏，用于在不同的内容区域之间进行切换。",
      "text": [`<van-sidebar active-key="{{ activeKey }}">
  <van-sidebar-item title="标签名" />
</van-sidebar>`],
    },
    "activeKey": {
      "type": "attribute",
      "description": `选中项的索引`,
      "values": [],
    },
  },
  "van-sidebar:基础用法": {
    "_self": {
      "description": "垂直展示的导航栏，用于在不同的内容区域之间进行切换。",
      "text": [`<van-sidebar active-key="{{ activeKey }}">
  <van-sidebar-item title="标签名" />
</van-sidebar>`],
    },
  },
  "van-sidebar:徽标提示": {
    "_self": {
      "description": "垂直展示的导航栏，用于在不同的内容区域之间进行切换。",
      "text": [`<van-sidebar active-key="{{ activeKey }}">
  <van-sidebar-item title="标签名" dot />
</van-sidebar>`],
    },
  },
  "van-sidebar:禁用选项": {
    "_self": {
      "description": "垂直展示的导航栏，用于在不同的内容区域之间进行切换。",
      "text": [`<van-sidebar active-key="{{ activeKey }}">
  <van-sidebar-item title="标签名" />
</van-sidebar>`],
    },
  },
  "van-sidebar:监听切换事件": {
    "_self": {
      "description": "垂直展示的导航栏，用于在不同的内容区域之间进行切换。",
      "text": [`<van-sidebar active-key="{{ activeKey }}" bind:change="onChange">
  <van-sidebar-item title="标签名 1" />
</van-sidebar>`],
    },
  },
  "van-sidebar-item": {
    "_self": {
      "description": "",
      "text": [`<van-sidebar-item title="" />`],
    },
    "title": {
      "type": "attribute",
      "description": `内容`,
      "values": [],
    },
    "dot": {
      "type": "attribute",
      "description": `是否显示右上角小红点`,
      "values": [],
    },
    "info": {
      "type": "attribute",
      "description": `图标右上角徽标的内容（已废弃，请使用 badge 属性）`,
      "values": [],
    },
    "badgev": {
      "type": "attribute",
      "description": `图标右上角徽标的内容`,
      "values": [],
    },
    "disabled": {
      "type": "attribute",
      "description": `是否禁用该项`,
      "values": [],
    },
  },
  "van-tab": {
    "_self": {
      "description": "选项卡组件，用于在不同的内容区域之间进行切换。",
      "text": [`<van-tab title=""></van-tab>`],
    },
    "name": {
      "type": "attribute",
      "description": `标签名称，作为匹配的标识符`,
      "values": [],
    },
    "title": {
      "type": "attribute",
      "description": `标题`,
      "values": [],
    },
    "disabled": {
      "type": "attribute",
      "description": `是否禁用标签`,
      "values": [],
    },
    "dot": {
      "type": "attribute",
      "description": `是否显示小红点`,
      "values": [],
    },
    "info": {
      "type": "attribute",
      "description": `图标右上角提示信息`,
      "values": [],
    },
    "title-style": {
      "type": "attribute",
      "description": `自定义标题样式`,
      "values": [],
    },
    "custom-class": {
      "type": "attribute",
      "description": `根节点样式类`,
      "values": [],
    },
    "nav-class": {
      "type": "attribute",
      "description": `标签栏样式类`,
      "values": [],
    },
    "tab-class": {
      "type": "attribute",
      "description": `标签样式类`,
      "values": [],
    },
    "tab-active-class": {
      "type": "attribute",
      "description": `标签激活态样式类`,
      "values": [],
    },
    "wrap-class": {
      "type": "attribute",
      "description": `标签栏根节点样式类`,
      "values": [],
    },
  },
  "van-tab:基础用法": {
    "_self": {
      "description": "选项卡组件，用于在不同的内容区域之间进行切换。",
      "text": [`<van-tab title=""></van-tab>`],
    },
  },
  "van-tab:通过名称匹配": {
    "_self": {
      "description": "选项卡组件，用于在不同的内容区域之间进行切换。",
      "text": [`<van-tabs active="a">
  <van-tab title="标签 1" name="a">内容 1</van-tab>
</van-tabs>`],
    },
  },
  "van-tab:横向滚动": {
    "_self": {
      "description": "选项卡组件，用于在不同的内容区域之间进行切换。",
      "text": [`<van-tabs active="{{ active }}">
  <van-tab title="标签 1">内容 1</van-tab>
</van-tabs>`],
    },
  },
  "van-tab:禁用标签": {
    "_self": {
      "description": "选项卡组件，用于在不同的内容区域之间进行切换。",
      "text": [`<van-tabs bind:disabled="onClickDisabled">
  <van-tab title="标签 1">内容 1</van-tab>
</van-tabs>`],
    },
  },
  "van-tab:样式风格": {
    "_self": {
      "description": "选项卡组件，用于在不同的内容区域之间进行切换。",
      "text": [`<van-tabs type="card">
  <van-tab title="标签 1">内容 1</van-tab>
</van-tabs>`],
    },
  },
  "van-tab:点击事件": {
    "_self": {
      "description": "选项卡组件，用于在不同的内容区域之间进行切换。",
      "text": [`<van-tabs bind:click="onClick">
  <van-tab title="标签 2">内容 2</van-tab>
</van-tabs>`],
    },
  },
  "van-tab:粘性布局": {
    "_self": {
      "description": "选项卡组件，用于在不同的内容区域之间进行切换。",
      "text": [`<van-tabs sticky>
  <van-tab title="标签 1">内容 1</van-tab>
</van-tabs>`],
    },
  },
  "van-tab:切换动画": {
    "_self": {
      "description": "选项卡组件，用于在不同的内容区域之间进行切换。",
      "text": [`<van-tabs animated>
  <van-tab title="标签 1">内容 1</van-tab>
</van-tabs>`],
    },
  },
  "van-tab:滑动切换": {
    "_self": {
      "description": "选项卡组件，用于在不同的内容区域之间进行切换。",
      "text": [`<van-tabs swipeable>
  <van-tab title="标签 1">内容 1</van-tab>
</van-tabs>`],
    },
  },
  "van-tab:嵌套 popup": {
    "_self": {
      "description": "选项卡组件，用于在不同的内容区域之间进行切换。",
      "text": [`<van-popup show="{{ show }}">
  <van-tabs wx:if="{{ show }}">
    <van-tab title="标签 1">内容 1</van-tab>
  </van-tabs>
</van-popup>`],
    },
  },
  "van-tab:异步切换": {
    "_self": {
      "description": "选项卡组件，用于在不同的内容区域之间进行切换。",
      "text": [`<van-tabs active="{{ active }}" use-before-change="{{ true }}" bind:change="onChange" bind:before-change="onBeforeChange" >
  <van-tab title="标签 1">内容 1</van-tab>
</van-tabs>`],
    },
  },
  "van-tabs": {
    "_self": {
      "description": "",
      "text": [`<van-tabs active="{{ active }}" bind:change="onChange">
  <van-tab title="标签 1">内容 1</van-tab>
</van-tabs>`],
    },
    "type": {
      "type": "attribute",
      "description": `样式风格，可选值为card`,
      "values": ['card'],
    },
    "color": {
      "type": "attribute",
      "description": `标签主题色`,
      "values": [],
    },
    "active": {
      "type": "attribute",
      "description": `当前选中标签的标识符`,
      "values": [],
    },
    "duration": {
      "type": "attribute",
      "description": `动画时间，单位秒`,
      "values": [],
    },
    "line-width": {
      "type": "attribute",
      "description": `底部条宽度，默认单位px`,
      "values": [],
    },
    "line-height": {
      "type": "attribute",
      "description": `底部条高度，默认单位px`,
      "values": [],
    },
    "animated": {
      "type": "attribute",
      "description": `是否开启切换标签内容时的转场动画`,
      "values": [],
    },
    "border": {
      "type": "attribute",
      "description": `是否展示外边框，仅在 line 风格下生效`,
      "values": [],
    },
    "ellipsis": {
      "type": "attribute",
      "description": `是否省略过长的标题文字`,
      "values": [],
    },
    "sticky": {
      "type": "attribute",
      "description": `是否使用粘性定位布局`,
      "values": [],
    },
    "swipeable": {
      "type": "attribute",
      "description": `是否开启手势滑动切换`,
      "values": [],
    },
    "lazy-render": {
      "type": "attribute",
      "description": `是否开启标签页内容延迟渲染`,
      "values": [],
    },
    "offset-top": {
      "type": "attribute",
      "description": `粘性定位布局下与顶部的最小距离，单位px`,
      "values": [],
    },
    "swipe-threshold": {
      "type": "attribute",
      "description": `滚动阈值，标签数量超过阈值且总宽度超过标签栏宽度时开始横向滚动`,
      "values": [],
    },
    "title-active-color": {
      "type": "attribute",
      "description": `标题选中态颜色`,
      "values": [],
    },
    "title-inactive-color": {
      "type": "attribute",
      "description": `标题默认态颜色`,
      "values": [],
    },
    "z-index": {
      "type": "attribute",
      "description": `z-index 层级`,
      "values": [],
    },
    "use-before-changev": {
      "type": "attribute",
      "description": `是否开启切换前校验`,
      "values": [],
    },
  },
  "van-tabbar": {
    "_self": {
      "description": "底部导航栏，用于在不同页面之间进行切换。",
      "text": [`<van-tabbar active="{{ active }}" bind:change="onChange">
  <van-tabbar-item icon="home-o">标签</van-tabbar-item>
</van-tabbar>`],
    },
    "active": {
      "type": "attribute",
      "description": `当前选中标签的索引`,
      "values": [],
    },
    "fixed": {
      "type": "attribute",
      "description": `是否固定在底部`,
      "values": [],
    },
    "placeholder": {
      "type": "attribute",
      "description": `固定在底部时，是否在标签位置生成一个等高的占位元素`,
      "values": [],
    },
    "border": {
      "type": "attribute",
      "description": `是否展示外边框`,
      "values": [],
    },
    "z-index": {
      "type": "attribute",
      "description": `元素 z-index`,
      "values": [],
    },
    "active-color": {
      "type": "attribute",
      "description": `选中标签的颜色`,
      "values": [],
    },
    "inactive-color": {
      "type": "attribute",
      "description": `未选中标签的颜色`,
      "values": [],
    },
    "safe-area-inset-bottom": {
      "type": "attribute",
      "description": `是否为 iPhoneX 留出底部安全距离`,
      "values": [],
    },
  },
  "van-tabbar:基础用法": {
    "_self": {
      "description": "底部导航栏，用于在不同页面之间进行切换。",
      "text": [`<van-tabbar active="{{ active }}" bind:change="onChange">
  <van-tabbar-item icon="home-o">标签</van-tabbar-item>
</van-tabbar>`],
    },
  },
  "van-tabbar:通过名称匹配": {
    "_self": {
      "description": "底部导航栏，用于在不同页面之间进行切换。",
      "text": [`<van-tabbar active="{{ active }}" bind:change="onChange">
  <van-tabbar-item name="home" icon="home-o">标签</van-tabbar-item>
</van-tabbar>`],
    },
  },
  "van-tabbar:显示徽标": {
    "_self": {
      "description": "底部导航栏，用于在不同页面之间进行切换。",
      "text": [`<van-tabbar active="{{ active }}" bind:change="onChange">
  <van-tabbar-item icon="home-o">标签</van-tabbar-item>
</van-tabbar>`],
    },
  },
  "van-tabbar:自定义图标": {
    "_self": {
      "description": "底部导航栏，用于在不同页面之间进行切换。",
      "text": [`<van-tabbar active="{{ active }}" bind:change="onChange">
  <van-tabbar-item icon="search">标签</van-tabbar-item>
</van-tabbar>`],
    },
  },
  "van-tabbar:自定义颜色": {
    "_self": {
      "description": "底部导航栏，用于在不同页面之间进行切换。",
      "text": [`<van-tabbar
  active="{{ active }}"
  active-color="#07c160"
  inactive-color="#000"
  bind:change="onChange"
>
</van-tabbar>`],
    },
  },
  "van-tabbar:切换标签事件": {
    "_self": {
      "description": "底部导航栏，用于在不同页面之间进行切换。",
      "text": [`<van-tabbar active="{{ active }}" bind:change="onChange">
  <van-tabbar-item icon="home-o">标签1</van-tabbar-item>
</van-tabbar>`],
    },
  },
  "van-tabbar-item": {
    "_self": {
      "description": "",
      "text": [`<van-tabbar-item></van-tabbar-item>`],
    },
    "name": {
      "type": "attribute",
      "description": `标签名称，作为匹配的标识符`,
      "values": [],
    },
    "icon": {
      "type": "attribute",
      "description": `图标名称或图片链接，可选值见 Icon 组件`,
      "values": [],
    },
    "icon-prefix": {
      "type": "attribute",
      "description": `图标类名前缀，同 Icon 组件的 class-prefix 属性`,
      "values": [],
    },
    "dot": {
      "type": "attribute",
      "description": `是否显示小红点`,
      "values": [],
    },
    "info": {
      "type": "attribute",
      "description": `图标右上角提示信息`,
      "values": [],
    },
    "urlv": {
      "type": "attribute",
      "description": `点击后跳转的链接地址, 需要以 / 开头`,
      "values": [],
    },
    "link-typev": {
      "type": "attribute",
      "description": `链接跳转类型，可选值为 redirectTo、switchTab、reLaunch`,
      "values": ['redirectTo', 'switchTab', 'reLaunch'],
    },
  },
  "van-tree-select": {
    "_self": {
      "description": "用于从一组相关联的数据集合中进行选择。",
      "text": [`<van-tree-select
  items="{{ items }}"
  main-active-index="{{ mainActiveIndex }}"
  active-id="{{ activeId }}"
  bind:click-nav="onClickNav"
  bind:click-item="onClickItem"
/>`],
    },
    "items": {
      "type": "attribute",
      "description": `分类显示所需的数据`,
      "values": [],
    },
    "height": {
      "type": "attribute",
      "description": `高度，默认单位为px`,
      "values": [],
    },
    "main-active-index": {
      "type": "attribute",
      "description": `左侧选中项的索引`,
      "values": [],
    },
    "active-id": {
      "type": "attribute",
      "description": `右侧选中项的 id，支持传入数组`,
      "values": [],
    },
    "max": {
      "type": "attribute",
      "description": `右侧项最大选中个数`,
      "values": [],
    },
    "selected-iconv": {
      "type": "attribute",
      "description": `自定义右侧栏选中状态的图标`,
      "values": [],
    },
    "bind:click-nav": {
      "type": "attribute",
      "description": `左侧导航点击时，触发的事件`,
      "values": [],
    },
    "bind:click-item": {
      "type": "attribute",
      "description": `右侧选择项被点击时，会触发的事件`,
      "values": [],
    },
    "main-item-class": {
      "type": "attribute",
      "description": `左侧选项样式类`,
      "values": [],
    },
    "content-item-class": {
      "type": "attribute",
      "description": `右侧选项样式类`,
      "values": [],
    },
    "main-active-class": {
      "type": "attribute",
      "description": `左侧选项选中样式类`,
      "values": [],
    },
    "content-active-class": {
      "type": "attribute",
      "description": `右侧选项选中样式类`,
      "values": [],
    },
    "main-disabled-class": {
      "type": "attribute",
      "description": `左侧选项禁用样式类`,
      "values": [],
    },
    "content-disabled-class": {
      "type": "attribute",
      "description": `右侧选项禁用样式类`,
      "values": [],
    },
  },
  "van-tree-select:单选模式": {
    "_self": {
      "description": "用于从一组相关联的数据集合中进行选择。",
      "text": [`<van-tree-select
  items="{{ items }}"
  main-active-index="{{ mainActiveIndex }}"
  active-id="{{ activeId }}"
  bind:click-nav="onClickNav"
  bind:click-item="onClickItem"
/>`],
    },
  },
  "van-tree-select:多选模式": {
    "_self": {
      "description": "用于从一组相关联的数据集合中进行选择。",
      "text": [`<van-tree-select
  items="{{ items }}"
  main-active-index="{{ mainActiveIndex }}"
  active-id="{{ activeId }}"
  max="{{ max }}"
  bind:click-nav="onClickNav"
  bind:click-item="onClickItem"
/>`],
    },
  },
  "van-tree-select:自定义内容": {
    "_self": {
      "description": "用于从一组相关联的数据集合中进行选择。",
      "text": [`<van-tree-select
  items="{{ items }}"
  height="55vw"
  main-active-index="{{ mainActiveIndex }}"
  active-id="{{ activeId }}"
  bind:click-nav="onClickNav"
  bind:click-item="onClickItem"
>
  <image src="https://img.yzcdn.cn/vant/apple-1.jpg" slot="content" />
</van-tree-select>`],
    },
  },
  "van-area": {
    "_self": {
      "description": "省市区选择组件通常与 <a href=\"#/popup\" target=\"_blank\">弹出层</a> 组件配合使用。",
      "text": [`<van-area area-list="{{ areaList }}" />`],
    },
    "value": {
      "type": "attribute",
      "description": `当前选中的省市区code`,
      "values": [],
    },
    "title": {
      "type": "attribute",
      "description": `顶部栏标题`,
      "values": [],
    },
    "area-list": {
      "type": "attribute",
      "description": `省市区数据，格式见下方`,
      "values": [],
    },
    "columns-num": {
      "type": "attribute",
      "description": `省市区显示列数，3-省市区，2-省市，1-省`,
      "values": [],
    },
    "columns-placeholder": {
      "type": "attribute",
      "description": `列占位提示文字`,
      "values": [],
    },
    "loading": {
      "type": "attribute",
      "description": `是否显示加载状态`,
      "values": [],
    },
    "item-height": {
      "type": "attribute",
      "description": `选项高度`,
      "values": [],
    },
    "visible-item-count": {
      "type": "attribute",
      "description": `可见的选项个数`,
      "values": [],
    },
    "confirm-button-text": {
      "type": "attribute",
      "description": `确认按钮文字`,
      "values": [],
    },
    "cancel-button-text": {
      "type": "attribute",
      "description": `取消按钮文字`,
      "values": [],
    },
    "show-toolbar": {
      "type": "attribute",
      "description": `是否显示顶部栏`,
      "values": [],
    },
    "bind:confirm": {
      "type": "attribute",
      "description": `点击右上方完成按钮`,
      "values": [],
    },
    "bind:cancel": {
      "type": "attribute",
      "description": `点击取消按钮时`,
      "values": [],
    },
    "bind:change": {
      "type": "attribute",
      "description": `选项改变时触发`,
      "values": [],
    },
  },
  "van-area:基础用法": {
    "_self": {
      "description": "省市区选择组件通常与 <a href=\"#/popup\" target=\"_blank\">弹出层</a> 组件配合使用。",
      "text": [`<van-area area-list="{{ areaList }}" />`],
    },
  },
  "van-area:areaList 格式": {
    "_self": {
      "description": "省市区选择组件通常与 <a href=\"#/popup\" target=\"_blank\">弹出层</a> 组件配合使用。",
      "text": [`const areaList = {
  province_list: {
    110000: '北京市',
    120000: '天津市',
  },
  city_list: {
    110100: '北京市',
    120100: '天津市',
  },
  county_list: {
    110101: '东城区',
    110102: '西城区',
  },
};
`],
    },
  },
  "van-area:选中省市区": {
    "_self": {
      "description": "省市区选择组件通常与 <a href=\"#/popup\" target=\"_blank\">弹出层</a> 组件配合使用。",
      "text": [`<van-area area-list="{{ areaList }}" value="110101" />`],
    },
  },
  "van-area:配置显示列": {
    "_self": {
      "description": "省市区选择组件通常与 <a href=\"#/popup\" target=\"_blank\">弹出层</a> 组件配合使用。",
      "text": [`<van-area area-list="{{ areaList }}" columns-num="{{ 2 }}" title="标题" />`],
    },
  },
  "van-area:配置列占位提示文字": {
    "_self": {
      "description": "省市区选择组件通常与 <a href=\"#/popup\" target=\"_blank\">弹出层</a> 组件配合使用。",
      "text": [`<van-area
  area-list="{{ areaList }}"
  columns-placeholder="{{ ['请选择', '请选择', '请选择'] }}"
  title="标题"
/>`],
    },
  },
  "van-area:使用云开发获取省市区数据": {
    "_self": {
      "description": "省市区选择组件通常与 <a href=\"#/popup\" target=\"_blank\">弹出层</a> 组件配合使用。",
      "text": [`const db = wx.cloud.database();

db.collection('region')
  .limit(1)
  .get()
  .then((res) => {
    if (res.data && res.data.length > 0) {
      this.setData({
        areaList: res.data[0],
      });
    }
  })
  .catch((err) => {
    console.log(err);
  });
`],
    },
  },
  "van-card": {
    "_self": {
      "description": "商品卡片，用于展示商品的图片、价格等信息。",
      "text": [`<van-card
  num="2"
  price="2.00"
  desc="描述信息"
  title="商品标题"
  thumb="{{ imageURL }}"
/>`],
    },
    "thumb": {
      "type": "attribute",
      "description": `左侧图片`,
      "values": [],
    },
    "thumb-mode": {
      "type": "attribute",
      "description": `左侧图片裁剪、缩放的模式，可选值参考小程序 image 组件 mode 属性值`,
      "values": [],
    },
    "title": {
      "type": "attribute",
      "description": `标题`,
      "values": [],
    },
    "desc": {
      "type": "attribute",
      "description": `描述`,
      "values": [],
    },
    "tag": {
      "type": "attribute",
      "description": `标签`,
      "values": [],
    },
    "num": {
      "type": "attribute",
      "description": `商品数量`,
      "values": [],
    },
    "price": {
      "type": "attribute",
      "description": `商品价格`,
      "values": [],
    },
    "origin-price": {
      "type": "attribute",
      "description": `商品划线原价`,
      "values": [],
    },
    "centered": {
      "type": "attribute",
      "description": `内容是否垂直居中`,
      "values": [],
    },
    "currency": {
      "type": "attribute",
      "description": `货币符号`,
      "values": [],
    },
    "thumb-link": {
      "type": "attribute",
      "description": `点击左侧图片后跳转的链接地址`,
      "values": [],
    },
    "link-type": {
      "type": "attribute",
      "description": `链接跳转类型，可选值为 redirectTo switchTab reLaunch`,
      "values": ['redirectTo', 'switchTab', 'reLaunch'],
    },
    "lazy-load": {
      "type": "attribute",
      "description": `是否开启图片懒加载`,
      "values": [],
    },
    "custom-class": {
      "type": "attribute",
      "description": `根节点样式类`,
      "values": [],
    },
    "thumb-class": {
      "type": "attribute",
      "description": `左侧图片样式类`,
      "values": [],
    },
    "title-class": {
      "type": "attribute",
      "description": `标题样式类`,
      "values": [],
    },
    "price-class": {
      "type": "attribute",
      "description": `价格样式类`,
      "values": [],
    },
    "origin-price-class": {
      "type": "attribute",
      "description": `划线原价样式类`,
      "values": [],
    },
    "desc-class": {
      "type": "attribute",
      "description": `描述样式类`,
      "values": [],
    },
    "num-class": {
      "type": "attribute",
      "description": `数量样式类`,
      "values": [],
    },
  },
  "van-card:基础用法": {
    "_self": {
      "description": "商品卡片，用于展示商品的图片、价格等信息。",
      "text": [`<van-card
  num="2"
  price="2.00"
  desc="描述信息"
  title="商品标题"
  thumb="{{ imageURL }}"
/>`],
    },
  },
  "van-card:高级用法": {
    "_self": {
      "description": "商品卡片，用于展示商品的图片、价格等信息。",
      "text": [`<van-card
  num="2"
  tag="标签"
  price="10.00"
  desc="描述信息"
  title="商品标题"
  thumb="{{ imageURL }}"
>
  <view slot="footer">
    <van-button size="mini">按钮</van-button>
    <van-button size="mini">按钮</van-button>
  </view>
</van-card>`],
    },
  },
  "van-submit-bar": {
    "_self": {
      "description": "用于展示订单金额与提交订单。",
      "text": [`<van-submit-bar
  price="{{ 3050 }}"
  button-text="提交订单"
  bind:submit="onSubmit"
/>`],
    },
    "price": {
      "type": "attribute",
      "description": `价格（单位分）`,
      "values": [],
    },
    "label": {
      "type": "attribute",
      "description": `价格文案`,
      "values": [],
    },
    "suffix-label": {
      "type": "attribute",
      "description": `价格右侧文案`,
      "values": [],
    },
    "button-text": {
      "type": "attribute",
      "description": `按钮文字`,
      "values": [],
    },
    "button-type": {
      "type": "attribute",
      "description": `按钮类型`,
      "values": [],
    },
    "tip": {
      "type": "attribute",
      "description": `提示文案`,
      "values": [],
    },
    "tip-icon": {
      "type": "attribute",
      "description": `图标名称或图片链接，可选值见 Icon 组件`,
      "values": [],
    },
    "disabled": {
      "type": "attribute",
      "description": `是否禁用按钮`,
      "values": [],
    },
    "loading": {
      "type": "attribute",
      "description": `是否显示加载中的按钮`,
      "values": [],
    },
    "currency": {
      "type": "attribute",
      "description": `货币符号`,
      "values": [],
    },
    "safe-area-inset-bottom": {
      "type": "attribute",
      "description": `是否为 iPhoneX 留出底部安全距离`,
      "values": [],
    },
    "decimal-length": {
      "type": "attribute",
      "description": `价格小数点后位数`,
      "values": [],
    },
    "bind:submit": {
      "type": "attribute",
      "description": `按钮点击事件回调`,
      "values": [],
    },
    "custom-class": {
      "type": "attribute",
      "description": `根节点样式类`,
      "values": [],
    },
    "price-class": {
      "type": "attribute",
      "description": `价格样式类`,
      "values": [],
    },
    "button-class": {
      "type": "attribute",
      "description": `按钮样式类`,
      "values": [],
    },
    "bar-class": {
      "type": "attribute",
      "description": `订单栏样式类`,
      "values": [],
    },
  },
  "van-submit-bar:基础用法": {
    "_self": {
      "description": "用于展示订单金额与提交订单。",
      "text": [`<van-submit-bar
  price="{{ 3050 }}"
  button-text="提交订单"
  bind:submit="onSubmit"
/>`],
    },
  },
  "van-submit-bar:禁用状态": {
    "_self": {
      "description": "用于展示订单金额与提交订单。",
      "text": [`<van-submit-bar
  disabled
  price="{{ 3050 }}"
  button-text="提交订单"
  tip="您的收货地址不支持同城送, 我们已为您推荐快递"
  tip-icon="info-o"
  bind:submit="onSubmit"
/>`],
    },
  },
  "van-submit-bar:加载状态": {
    "_self": {
      "description": "用于展示订单金额与提交订单。",
      "text": [`<van-submit-bar
  loading
  price="{{ 3050 }}"
  button-text="提交订单"
  bind:submit="onSubmit"
/>`],
    },
  },
  "van-submit-bar:高级用法": {
    "_self": {
      "description": "用于展示订单金额与提交订单。",
      "text": [`<van-submit-bar
  price="{{ 3050 }}"
  button-text="提交订单"
  bind:submit="onClickButton"
  tip="{{ true }}"
>
  <van-tag type="primary">标签</van-tag>
  <view slot="tip">您的收货地址不支持同城送, <text>修改地址</text></view>
</van-submit-bar>`],
    },
  },
  "van-goods-action": {
    "_self": {
      "description": "用于为商品相关操作提供便捷交互。",
      "text": [`<van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服" bind:click="onClickIcon" />
  <van-goods-action-icon icon="cart-o" text="购物车" bind:click="onClickIcon" />
  <van-goods-action-button
    text="加入购物车"
    type="warning"
    bind:click="onClickButton"
  />
  <van-goods-action-button text="立即购买" bind:click="onClickButton" />
</van-goods-action>`],
    },
    "safe-area-inset-bottom": {
      "type": "attribute",
      "description": `是否为 iPhoneX 留出底部安全距离`,
      "values": [],
    },
    "bind:click": {
      "type": "attribute",
      "description": `按钮点击事件回调`,
      "values": [],
    },
  },
  "van-goods-action:基础用法": {
    "_self": {
      "description": "用于为商品相关操作提供便捷交互。",
      "text": [`<van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服" bind:click="onClickIcon" />
  <van-goods-action-icon icon="cart-o" text="购物车" bind:click="onClickIcon" />
  <van-goods-action-button
    text="加入购物车"
    type="warning"
    bind:click="onClickButton"
  />
  <van-goods-action-button text="立即购买" bind:click="onClickButton" />
</van-goods-action>`],
    },
  },
  "van-goods-action:提示信息": {
    "_self": {
      "description": "用于为商品相关操作提供便捷交互。",
      "text": [`<van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服" dot />
  <van-goods-action-icon icon="cart-o" text="购物车" info="5" />
  <van-goods-action-icon icon="shop-o" text="店铺" />
  <van-goods-action-button text="加入购物车" type="warning" />
  <van-goods-action-button text="立即购买" />
</van-goods-action>`],
    },
  },
  "van-goods-action:自定义按钮颜色": {
    "_self": {
      "description": "用于为商品相关操作提供便捷交互。",
      "text": [`<van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服" />
  <van-goods-action-icon icon="cart-o" text="购物车" info="5" />
  <van-goods-action-icon icon="shop-o" text="店铺" />
  <van-goods-action-button color="#be99ff" text="加入购物车" type="warning" />
  <van-goods-action-button color="#7232dd" text="立即购买" />
</van-goods-action>`],
    },
  },
  "van-goods-action:朴素按钮": {
    "_self": {
      "description": "用于为商品相关操作提供便捷交互。",
      "text": [`<van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服" />
  <van-goods-action-icon icon="cart-o" text="购物车" info="5" />
  <van-goods-action-icon icon="shop-o" text="店铺" />
  <van-goods-action-button color="#7232dd" text="加入购物" type="warning" />
  <van-goods-action-button plain color="#7232dd" text="立即购买" />
</van-goods-action>`],
    },
  },
  "van-goods-action-icon": {
    "_self": {
      "description": "",
      "text": [`<van-goods-action-icon icon="chat-o" text="客服" />`],
    },
    "text": {
      "type": "attribute",
      "description": `按钮文字`,
      "values": [],
    },
    "icon": {
      "type": "attribute",
      "description": `图标类型，可选值见icon组件`,
      "values": [],
    },
    "info": {
      "type": "attribute",
      "description": `图标右上角提示信息`,
      "values": [],
    },
    "url": {
      "type": "attribute",
      "description": `点击后跳转的链接地址`,
      "values": [],
    },
    "link-type": {
      "type": "attribute",
      "description": `链接跳转类型，可选值为 redirectTo switchTab reLaunch`,
      "values": ['redirectTo', 'switchTab', 'reLaunch'],
    },
    "id": {
      "type": "attribute",
      "description": `标识符`,
      "values": [],
    },
    "disabled": {
      "type": "attribute",
      "description": `是否禁用按钮`,
      "values": [],
    },
    "loading": {
      "type": "attribute",
      "description": `是否显示为加载状态`,
      "values": [],
    },
    "open-type": {
      "type": "attribute",
      "description": `微信开放能力，具体支持可参考 微信官方文档`,
      "values": [],
    },
    "app-parameter": {
      "type": "attribute",
      "description": `打开 APP 时，向 APP 传递的参数`,
      "values": [],
    },
    "lang": {
      "type": "attribute",
      "description": `指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文`,
      "values": [],
    },
    "session-from": {
      "type": "attribute",
      "description": `会话来源`,
      "values": [],
    },
    "send-message-title": {
      "type": "attribute",
      "description": `会话内消息卡片标题`,
      "values": [],
    },
    "send-message-path": {
      "type": "attribute",
      "description": `会话内消息卡片点击跳转小程序路径`,
      "values": [],
    },
    "send-message-img": {
      "type": "attribute",
      "description": `sendMessageImg`,
      "values": [],
    },
    "show-message-card": {
      "type": "attribute",
      "description": `显示会话内消息卡片`,
      "values": [],
    },
    "class-prefixv": {
      "type": "attribute",
      "description": `类名前缀`,
      "values": [],
    },
  },
  "van-goods-action-button": {
    "_self": {
      "description": "",
      "text": [`<van-goods-action-button color="#7232dd" text="立即购买" />`],
    },
    "text": {
      "type": "attribute",
      "description": `按钮文字`,
      "values": [],
    },
    "color": {
      "type": "attribute",
      "description": `按钮颜色，支持传入 linear-gradient 渐变色`,
      "values": [],
    },
    "url": {
      "type": "attribute",
      "description": `点击后跳转的链接地址`,
      "values": [],
    },
    "link-type": {
      "type": "attribute",
      "description": `链接跳转类型，可选值为 redirectTo switchTab reLaunch`,
      "values": ['redirectTo', 'switchTab', 'reLaunch'],
    },
    "id": {
      "type": "attribute",
      "description": `标识符`,
      "values": [],
    },
    "type": {
      "type": "attribute",
      "description": `按钮类型，可选值为 primary warning danger`,
      "values": ['primary', 'warning', 'danger'],
    },
    "plain": {
      "type": "attribute",
      "description": `是否为朴素按钮`,
      "values": [],
    },
    "size": {
      "type": "attribute",
      "description": `按钮尺寸，可选值为 normal large small mini`,
      "values": ['normal', 'large', 'small', 'mini'],
    },
    "disabled": {
      "type": "attribute",
      "description": `是否禁用按钮`,
      "values": [],
    },
    "loading": {
      "type": "attribute",
      "description": `是否显示为加载状态`,
      "values": [],
    },
    "open-type": {
      "type": "attribute",
      "description": `微信开放能力，具体支持可参考 微信官方文档`,
      "values": [],
    },
    "app-parameter": {
      "type": "attribute",
      "description": `打开 APP 时，向 APP 传递的参数`,
      "values": [],
    },
    "lang": {
      "type": "attribute",
      "description": `指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文`,
      "values": [],
    },
    "session-from": {
      "type": "attribute",
      "description": `会话来源`,
      "values": [],
    },
    "send-message-title": {
      "type": "attribute",
      "description": `会话内消息卡片标题`,
      "values": [],
    },
    "send-message-path": {
      "type": "attribute",
      "description": `会话内消息卡片点击跳转小程序路径`,
      "values": [],
    },
    "send-message-img": {
      "type": "attribute",
      "description": `sendMessageImg`,
      "values": [],
    },
    "show-message-card": {
      "type": "attribute",
      "description": `显示会话内消息卡片`,
      "values": [],
    },
  },
  "van-panel": {
    "_self": {
      "description": "",
      "text": [`<van-panel title="标题" desc="描述信息" status="状态">
  <view>内容</view>
</van-panel>`],
    },
    "title": {
      "type": "attribute",
      "description": `标题`,
      "values": [],
    },
    "desc": {
      "type": "attribute",
      "description": `描述`,
      "values": [],
    },
    "status": {
      "type": "attribute",
      "description": `状态`,
      "values": [],
    },
    "custom-class": {
      "type": "attribute",
      "description": `根节点样式类`,
      "values": [],
    },
    "header-class": {
      "type": "attribute",
      "description": `头部样式类`,
      "values": [],
    },
    "footer-class": {
      "type": "attribute",
      "description": `底部样式类`,
      "values": [],
    },
  },
  "van-panel:基础用法": {
    "_self": {
      "description": "",
      "text": [`<van-panel title="标题" desc="描述信息" status="状态">
  <view>内容</view>
</van-panel>`],
    },
  },
  "van-panel:高级用法": {
    "_self": {
      "description": "",
      "text": [`<van-panel title="标题" desc="描述信息" status="状态">
  <view>内容</view>
  <view slot="footer">
    <van-button size="small">按钮</van-button>
    <van-button size="small" type="danger">按钮</van-button>
  </view>
</van-panel>`],
    },
  },
}