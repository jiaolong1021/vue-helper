export default {
  'Table/columns': `| 属性 | 说明 | 类型 | 默认值 |
  | :--- | :--- | :--- | :--- |
  | type | 列类型，可选值为 index、selection、expand、html | String | - |
  | title | 列头显示文字 | String | # |
  | key | 对应列内容的字段名 | String | - |
  | width | 列宽 | Number | - |
  | minWidth | 最小列宽 | Number | - |
  | maxWidth | 最大列宽 | Number | - |
  | align | 对齐方式，可选值为 left 左对齐、right 右对齐和 center 居中对齐 | String | left |
  | className | 列的样式名称 | String | - |
  | fixed | 列是否固定在左侧或者右侧，可选值为 left 左侧和 right 右侧 | String | - |
  | ellipsis | 开启后，文本将不换行，超出部分显示为省略号 | Boolean | false |
  | render | 自定义渲染列，使用 Vue 的 Render 函数。传入两个参数，第一个是 h，第二个为对象，包含 row、column 和 index，分别指当前行数据，当前列数据，当前行索引，详见示例。 学习 Render 函数的内容 | Function | - |
  | renderHeader | 自定义列头显示内容，使用 Vue 的 Render 函数。传入两个参数，第一个是 h，第二个为对象，包含 column 和 index，分别为当前列数据和当前列索引。 | Function | - |
  | sortable | 对应列是否可以排序，如果设置为 custom，则代表用户希望远程排序，需要监听 Table 的 on-sort-change 事件 | Boolean | false |
  | sortMethod | 自定义排序使用的方法，接收三个参数 a 、 b 和 type，当设置 sortable: true 时有效。type 值为 asc 和 desc | Function | - |
  | sortType | 设置初始化排序。值为 asc 和 desc | String | - |
  | filters | 过滤数据的选项，格式为数组，数组中每项包含 label 和 value 属性，使用过滤，必须同时配置 filterMethod | Array | - |
  | filterMethod | 数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示 | Function | - |
  | filterMultiple | 数据过滤的选项是否多选 | Boolean | true |
  | filteredValue | 在初始化时使用过滤，数组，值为需要过滤的 value 集合 | Array | - |
  | filterRemote | 使用远程过滤 | Function | - |
  | children | 表头分组 | Array | - |`
}