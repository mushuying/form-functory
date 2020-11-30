module.exports = {
  title: '页面配置',
  base: [
    {
      type: 'text',
      label: '页面名称',
      attr: 'page-name',
      placeholder: '例：双十一专题主页',
      val: '',
      isNecessary: true
    },{
      type: 'text',
      label: '文件名称',
      attr: 'page-name',
      rules: {
        regex: '^[0-9a-zA-Z_]{1,}$',
        tips: '只能输入字母、数字或者下划线'
      },
      placeholder: '生成的html文件名称',
      val: '',
      isNecessary: true
    }
  ],
}
