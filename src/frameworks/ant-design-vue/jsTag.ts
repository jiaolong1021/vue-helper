export default (tabSize: string) => {
  return {
"a-rules:required": `{ required: true, message: '$1', trigger: 'change' }`,
"a-rules:max": `{ min: 3, max: 5, message: '$1', trigger: 'blur' }`,
"a-form:resetForm": `const resetForm = () => {
${tabSize}formRef.value.resetFields();
};`,
"a-form:submit": `const onSubmit = () => {
${tabSize}formRef.value
${tabSize}.validate()
${tabSize}.then(() => {
${tabSize}${tabSize}console.log('values', formState, toRaw(formState));
${tabSize}})
${tabSize}.catch(error => {
${tabSize}${tabSize}console.log('error', error);
${tabSize}});
};`,
"a-message:info": `message.info('$1')`,
"a-message:success": `message.success('$1')`,
"a-message:error": `message.error('$1')`,
"a-message:warning": `message.warning('$1')`,
"a-notification:success": `notification.success({
${tabSize}message: '$1',
${tabSize}description: '$2',
})`,
"a-notification:info": `notification.info({
${tabSize}message: '$1',
${tabSize}description: '$2',
})`,
"a-notification:error": `notification.error({
${tabSize}message: '$1',
${tabSize}description: '$2',
})`,
"a-notification:warning": `notification.warning({
${tabSize}message: '$1',
${tabSize}description: '$2',
})`,
  }
}