import Vue from 'vue'
import App from './App.vue'
import VueCompositionApi from '@vue/composition-api'
import NeUI from './packages/index'
import Components from './components'
Vue.config.productionTip = false
Vue.use(VueCompositionApi)
Vue.use(NeUI)
Vue.use(Components)



new Vue({
  render: h => h(App),
}).$mount('#app')
