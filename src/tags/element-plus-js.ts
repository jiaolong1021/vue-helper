export default {
    "el-upload:js": {
        "_self": {
            "description": "通过点击或者拖拽上传文件。",
            "text": ["handleRemove(file, fileList) {\n\t},\n\thandlePreview(file) {\n\t},\n\thandleExceed(files, fileList) {\n\t},\n\tbeforeRemove(file, fileList) {\n\t\treturn this.$confirm('确定移除' + file.name);\n}"]
        }
    },
    "el-message-box": {
        "_self": {
            "description": "",
            "text": ["ElMessageBox.confirm('确定删除标准表？', '提示', {\n\tconfirmButtonText: '确定',\n\tcancelButtonText: '取消',\n\ttype: 'warning',\n}).then(() => {\n\t\n})\n.catch(() => {\n})"]
        }
    },
    "el-rule:required": {
        "_self": {
            "description": "",
            "text": ["{ required: true, message: '请输入', trigger: 'blur' }"]
        }
    },
    "el-rule:limitLen": {
        "_self": {
            "description": "",
            "text": ["{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }"]
        }
    },
    "el-submitForm": {
        "_self": {
            "description": "",
            "text": [`const submitForm = async (formEl: FormInstance | undefined) => {
if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
        console.log('submit!')
        } else {
        console.log('error submit!', fields)
        }
    })
}`]
        }
    },
    "el-resetForm": {
        "_self": {
            "description": "",
            "text": [`const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}`]
        }
    },
}