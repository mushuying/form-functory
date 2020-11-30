import Row from './layout/row.vue';
import Col from './layout/col.vue';


import From from './form/form.vue';
import FromItem from './form/form-item.vue';
import FromInput from './form/input.vue';
import Botton from './button/button.vue';
import Icon from './button/icon.vue';
import Progress from './progress.vue';
import Dialog from './dialog.vue';
import Upload from './upload/upload.vue';
// import engin from './view/engin'


const install = ((Vue)=>{
  Vue.component(Row.name,Row)
  Vue.component(Col.name,Col)
  Vue.component(From.name,From)
  Vue.component(FromItem.name,FromItem)
  Vue.component(FromInput.name,FromInput)
  Vue.component(Botton.name,Botton)
  Vue.component(Icon.name,Icon)
  Vue.component(Progress.name,Progress)
  Vue.component(Upload.name,Upload)
  Vue.component(Dialog.name,Dialog)
  // Vue.component(engin.name,engin)

})

export default {
  install
}