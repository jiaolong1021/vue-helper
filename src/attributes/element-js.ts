export default {
    "el-upload:method": {
        "_self": {
            "description": "通过点击或者拖拽上传文件",
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
            "text": [`this.\\$refs[formName].validate((valid) => {
    if (valid) {
        
    } else {
        return false;
    }
})`]
        }
    },
    "el-resetForm": {
        "_self": {
            "description": "",
            "text": [`this.\\$refs[formName].resetFields();`]
        }
    },
    "el-message:success": {
        "_self": {
            "description": "",
            "text": [`this.\\$message({
    type: 'success',
    message: ''
})`]
        }
    },
    "el-message:warning": {
        "_self": {
            "description": "",
            "text": [`this.\\$message({
    type: 'warning',
    message: ''
})`]
        }
    },
    "el-message:fail": {
        "_self": {
            "description": "",
            "text": [`this.\\$message({
    type: 'fail',
    message: ''
})`]
        }
    },
}