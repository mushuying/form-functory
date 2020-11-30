
module.exports = {
  CHOICE_SINGLE:{
    id: 0,
    domId:'',
    type:'选单题',
    title: {
      text: '题目',
      mathText: '',
      mathHtml: '',
      image: '',
      audio: '',
      imageSize: null
    },
    items: [
      { cid: 0, head: 'A', field: { text: '选项一', mathText: '', mathHtml: '', image: '', audio: '' } },
      { cid: 1, head: 'B', field: { text: '选项二', mathText: '', mathHtml: '', image: '', audio: '' } },
      { cid: 2, head: 'C', field: { text: '选项三', mathText: '', mathHtml: '', image: '', audio: '' } }
    ],
    time: 5, // 单位秒
    score: 10,
    analyTxt: '',
    mathAnalyTxt: '',
    mathAnalyHtml: '',
  },
  CHOICE_MULTI:{
    id: 0,
    domId:'',
    type:'多选题',
    title: {
      text: '题目',
      mathText: '',
      mathHtml: '',
      image: '',
      audio: '',
      imageSize: null
    },
    items: [
      { cid: 0, head: 'A', field: { text: '选项一', mathText: '', mathHtml: '', image: '', audio: '' } },
      { cid: 1, head: 'B', field: { text: '选项二', mathText: '', mathHtml: '', image: '', audio: '' } },
      { cid: 2, head: 'C', field: { text: '选项三', mathText: '', mathHtml: '', image: '', audio: '' } }
    ],
    time: 5, // 单位秒
    score: 10,
    analyTxt: '',
    mathAnalyTxt: '',
    mathAnalyHtml: '',
  },
  text: {
    title: '文本',
    domId: '',
    domName: '',
    base: [
      {
        type: 'textarea',
        label: '问卷标题',
        val: '默认文本',
        isNecessary: true
      }
    ],
    style: [
      {
        type: 'font',
        label: '字体',
        attr: ['font-weight', 'text-decoration', 'font-style', 'text-align'],
        val: ['400', 'none', 'inherit', 'left'],
        isNecessary: false
      }, {
        type: 'color-picker',
        label: '字体颜色',
        attr: 'color',
        val: '#333333',
        isNecessary: true
      }, {
        type: 'input-number',
        label: '容器高度',
        attr: 'height',
        val: '',
        unit: 'px',
        isNecessary: false
      }, {
        type: 'upload',
        label: '背景图',
        attr: 'background-image',
        val: '',
        isNecessary: false
      }, {
        type: 'color-picker',
        label: '背景颜色',
        attr: 'background-color',
        val: '',
        isNecessary: false
      }, {
        type: 'select',
        label: '背景尺寸',
        attr: 'background-size',
        val: 'contain',
        options: [
          {
            name: '无',
            val: 'inherit'
          }, {
            name: '宽高裁剪',
            val: 'cover'
          }, {
            name: '宽高自适应',
            val: 'contain'
          }
        ]
      }, {
        type: 'input-number',
        label: '字体大小',
        attr: 'font-size',
        val: 12,
        unit: 'px',
        step: 1,
        max: 100,
        min: 10,
        isNecessary: false
      }, {
        type: 'input-number',
        label: '文本行距',
        attr: 'line-height',
        val: 1.5,
        step: 0.5,
        max: 12,
        min: 0.5,
        isNecessary: false
      }, {
        type: 'input-number',
        label: '字间距',
        attr: 'letter-spacing',
        val: 0,
        step: 1,
        max: 50,
        min: 0,
        unit: 'px',
        isNecessary: false
      }, {
        type: 'input-number',
        label: '上边距',
        attr: 'padding-top',
        val: 10,
        unit: 'px',
        min: 0,
        max: 50,
        step: 1,
        isNecessary: true
      }, {
        type: 'input-number',
        label: '右边距',
        attr: 'padding-right',
        val: 15,
        unit: 'px',
        min: 0,
        max: 50,
        step: 1,
        isNecessary: true
      }, {
        type: 'input-number',
        label: '下边距',
        attr: 'padding-bottom',
        val: 10,
        unit: 'px',
        min: 0,
        max: 50,
        step: 1,
        isNecessary: true
      }, {
        type: 'input-number',
        label: '左边距',
        attr: 'padding-left',
        val: 15,
        unit: 'px',
        min: 0,
        max: 50,
        step: 1,
        isNecessary: true
      }
    ]
  },
  form: {
    title: '表单',
    domId: '',
    domName: '',
    questions: {
      
    },
    base: [
      {
        type: 'text',
        label: '提交地址',
        val: '',
        placeholder: '表单提交的接口地址',
        isNecessary: true
      }, {
        type: 'radio',
        label: '提交方式',
        val: 'POST',
        options: [{
          name: 'GET',
          val: 'GET'
        }, {
          name: 'POST',
          val: 'POST'
        }],
        isNecessary: true
      }
    ],
    style: [
      {
        type: 'input-number',
        label: '容器高度',
        attr: 'height',
        val: '',
        unit: 'px',
        isNecessary: false
      }, {
        type: 'color-picker',
        label: '背景颜色',
        attr: 'background-color',
        val: '',
        isNecessary: false
      }, {
        type: 'upload',
        label: '背景图片',
        attr: 'background-image',
        val: '',
        isNecessary: true
      }, {
        type: 'select',
        label: '背景尺寸',
        attr: 'background-size',
        val: 'contain',
        options: [
          {
            name: '无',
            val: 'inherit'
          }, {
            name: '宽高裁剪',
            val: 'cover'
          }, {
            name: '宽高自适应',
            val: 'contain'
          }
        ]
      }, {
        type: 'input-number',
        label: '字体大小',
        attr: 'font-size',
        val: 12,
        unit: 'px',
        step: 1,
        max: 100,
        min: 10,
        isNecessary: false
      }, {
        type: 'color-picker',
        label: '字体颜色',
        attr: 'color',
        val: '#333333',
        isNecessary: true
      }, {
        type: 'input-number',
        label: '容器上白',
        attr: 'padding-top',
        val: 10,
        unit: 'px',
        min: 0,
        max: 100,
        step: 1,
        isNecessary: true
      }, {
        type: 'input-number',
        label: '容器右白',
        attr: 'padding-right',
        val: 15,
        unit: 'px',
        min: 0,
        max: 100,
        step: 1,
        isNecessary: true
      }, {
        type: 'input-number',
        label: '容器下白',
        attr: 'padding-bottom',
        val: 10,
        unit: 'px',
        min: 0,
        max: 100,
        step: 1,
        isNecessary: true
      }, {
        type: 'input-number',
        label: '容器左白',
        attr: 'padding-left',
        val: 15,
        unit: 'px',
        min: 0,
        max: 100,
        step: 1,
        isNecessary: true
      }
    ],
    others: {
      type: 'form-item',
      title: '表单样式',
      config: [
        {
          type: 'input-number',
          label: 'label宽度',
          attr: 'form-label_width',
          val: 60,
          unit: 'px',
          min: 0,
          max: 150,
          step: 1,
          isNecessary: true
        }, {
          type: 'input-number',
          label: 'input高度',
          attr: 'form-input_height',
          val: 24,
          unit: 'px',
          min: 0,
          max: 150,
          step: 1,
          isNecessary: true
        }, {
          type: 'input-number',
          label: 'input圆角',
          attr: 'form-input_border-radius',
          val: 0,
          unit: 'px',
          min: 0,
          max: 50,
          step: 1,
          isNecessary: true
        }, {
          type: 'color-picker',
          label: 'input边框',
          attr: 'form-input_border-color',
          val: '#e8e8e8',
          unit: '',
          isNecessary: true
        }, {
          type: 'input-number',
          label: 'input间距',
          attr: 'form-item_margin-top',
          val: 10,
          unit: 'px',
          min: 0,
          max: 150,
          step: 1,
          isNecessary: true
        }, {
          type: 'input-number',
          label: '按钮距上',
          attr: 'form-btn_margin-top',
          val: 15,
          unit: 'px',
          min: 0,
          max: 100,
          step: 1,
          isNecessary: true
        }, {
          type: 'input-number',
          label: '按钮高度',
          attr: 'form-btn_height',
          val: 30,
          unit: 'px',
          min: 0,
          max: 100,
          step: 2,
          isNecessary: true
        }, {
          type: 'input-number',
          label: '按钮宽度',
          attr: 'form-btn_width',
          val: 100,
          unit: '%',
          min: 0,
          max: 100,
          step: 1,
          isNecessary: true
        }, {
          type: 'color-picker',
          label: '按钮背景',
          attr: 'form-btn_background-color',
          val: '#409eff',
          unit: '',
          isNecessary: true
        }, {
          type: 'color-picker',
          label: '按钮边框',
          attr: 'form-btn_border-color',
          val: '#057ED5',
          unit: '',
          isNecessary: true
        }, {
          type: 'input-number',
          label: '按钮圆角',
          attr: 'form-btn_border-radius',
          val: 2.5,
          unit: 'px',
          min: 0,
          max: 50,
          step: 1,
          isNecessary: true
        }, {
          type: 'input-number',
          label: '按钮字体',
          attr: 'form-btn_font-size',
          val: 14,
          unit: 'px',
          min: 10,
          max: 100,
          step: 1,
          isNecessary: true
        }, {
          type: 'color-picker',
          label: '按钮字色',
          attr: 'form-btn_color',
          val: '#fff',
          unit: '',
          isNecessary: true
        }, {
          type: 'input-number',
          label: '按钮字重',
          attr: 'form-btn_font-weight',
          val: 500,
          unit: '',
          min: 100,
          max: 900,
          step: 100,
          isNecessary: true
        }
      ]
    },
    action: {
      type: 'form-submit',
      title: '表单项配置',
      config: [{
        desc: '字段描述：',
        type: 'text',
        name: 'name',
        placeholder: '',
        isNecessary: 1
      }]
    }
  }
}
