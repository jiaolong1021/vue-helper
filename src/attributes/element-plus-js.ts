export default {
    "el-rules:required": `{ required: true, message: '', trigger: 'blur' }`,
    "el-rules:max": `{ min: 3, max: 5, message: '', trigger: 'blur' }`,
    "el-form:submit": `const submitForm = async (formEl: FormInstance | undefined) => {
if (!formEl) return
await formEl.validate((valid, fields) => {
if (valid) {
console.log('submit!')
} else {
console.log('error submit!', fields)
}
})
}`
}