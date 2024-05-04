import { l10n } from "vscode"

export default (tabSize: string) => {
  return {
"el-rules:required": `{ required: true, message: '', trigger: 'blur' }`,
"el-rules:max": `{ min: 3, max: 5, message: '', trigger: 'blur' }`,
"el-form:submit": `const submitForm = async (formEl: FormInstance | undefined) => {
${tabSize}if (!formEl) return
${tabSize}await formEl.validate((valid, fields) => {
${tabSize}${tabSize}if (valid) {
${tabSize}${tabSize}${tabSize}console.log('submit!')
${tabSize}${tabSize}} else {
${tabSize}${tabSize}${tabSize}console.log('error submit!', fields)
${tabSize}${tabSize}}
${tabSize}})
}`,
"el-form:reset": `const resetForm = (formEl: FormInstance | undefined) => {
${tabSize}if (!formEl) return
${tabSize}formEl.resetFields()
}`,
"el-upload": `const fileList = ref<UploadUserFile[]>([
])

const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
${tabSize}console.log(file, uploadFiles)
}

const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
${tabSize}console.log(uploadFile)
}

const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {

}

const beforeRemove: UploadProps['beforeRemove'] = (uploadFile, uploadFiles) => {
}`,
"el-message": `ElMessage({
${tabSize}type: '\${1:success}',
${tabSize}message: '$2',
})`,
"el-message:confirm": `ElMessageBox.confirm(
${tabSize}'',
${tabSize}'Warning',
${tabSize}{
${tabSize}${tabSize}confirmButtonText: '${l10n.t('el-popconfirm.confirm-text')}',
${tabSize}${tabSize}cancelButtonText: '${l10n.t('el-popconfirm.cancel-text')}',
${tabSize}${tabSize}type: 'warning',
${tabSize}}
).then(() => {
${tabSize}
}).catch(() => {
${tabSize}
})`,
"el-notification": `ElNotification({
${tabSize}title: '',
${tabSize}message: '',
})`
  }
}