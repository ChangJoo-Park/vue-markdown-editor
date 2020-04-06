export default {
  name: 'save',
  icon: 'fa fa-md-floppy-o',
  title: '保存',
  action(editor) {
    editor.$emit('save', editor.text, editor.$refs.preview.html);
  },
};