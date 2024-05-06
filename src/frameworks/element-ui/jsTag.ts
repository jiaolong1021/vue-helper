export default (tabSize: string) => {
  return {
"el-alert": `this.$alert('这是一段内容', '标题名称', {
${tabSize}confirmButtonText: '确定',
${tabSize}callback: action => {
${tabSize}${tabSize}
${tabSize}}
})`,
"el-conform": `this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
${tabSize}confirmButtonText: '确定',
${tabSize}cancelButtonText: '取消',
${tabSize}type: 'warning'
}).then(() => {
${tabSize}this.$message({
${tabSize}${tabSize}type: 'success',
${tabSize}${tabSize}message: '删除成功!'
${tabSize}})
}).catch(() => {
${tabSize}this.$message({
${tabSize}${tabSize}type: 'info',
${tabSize}${tabSize}message: '已取消删除'
${tabSize}})
})`,
"el-form:clear": `this.$refs['\${1:form}'].clearValidate()`,
"el-form:valid": `this.$refs['\${1:formName}'].validate((valid) => {
${tabSize}if (valid) {
${tabSize}${tabSize}$2
${tabSize}} else {
${tabSize}${tabSize}return false
${tabSize}}
})`,
"el-message": `this.$message({
${tabSize}message: '恭喜你，这是一条成功消息',
${tabSize}type: 'success'
})`,
"el-message:close": `this.$message({
${tabSize}message: '恭喜你，这是一条成功消息',
${tabSize}showClose: true,
${tabSize}type: 'success'
})`,
"el-notify": `this.$notify({
${tabSize}title: '标题名称',
${tabSize}message: h('i', {style: 'color: teal'}, 'notify')
})`,
"el-notify:noclose": `this.$notify({
${tabSize}title: '提示',
${tabSize}message: '不会自动关闭的消息',
${tabSize}duration: 0
})`,
"el-notify:success": `this.$notify({
${tabSize}title: '成功',
${tabSize}message: '这是一条成功的提示消息',
${tabSize}type: 'success'
})`,
"el-prompt": `this.$prompt('请输入邮箱', '提示', {
${tabSize}confirmButtonText: '确定',
${tabSize}cancelButtonText: '取消',
${tabSize}inputPattern: '',
${tabSize}inputErrorMessage: ''
}).then(({ value }) => {
${tabSize}
}).catch(() => {
${tabSize}
});`,
"el-rules:array": `{ type: 'array', required: true, message: '请至少选择一个', trigger: 'change' }`,
"el-rules:date": `{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }`,
"el-rules:minMax": `{require: true, min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }`,
"el-rules:required": `{required: true, message:'请输入', trigger: 'blur'}`,
"el-rules:self": `{ validator: validatePass, trigger: 'blur' }`,
"el-rules:selfmethod": `var validatePass = (rule, value, callback) => {
${tabSize}if (value === '') {
${tabSize}${tabSize}callback(new Error(''));
${tabSize}} else {
${tabSize}${tabSize}callback();
${tabSize}}
}`,
"el-pagination": `handleCurrentChange (pageNum) {
${tabSize}this.pageNum = pageNum
${tabSize}this.fetchList()
},
handleSizeChange(pageSize) {
${tabSize}this.pageSize = pageSize
${tabSize}this.fetchList()
}`,
"reg-phone": `/^[1][3,4,5,7,8][0-9]{9}$/`,
"reg-email": `/^[A-Za-zd]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/`,
  }
}