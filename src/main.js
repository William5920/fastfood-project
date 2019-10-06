import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './filters'
import VueLazyload from 'vue-lazyload'
import loading from './assets/loading.gif'
import { Button } from 'mint-ui'
Vue.component(Button.name, Button)
import './mock/mockServer' // 加载mockServer

Vue.use(VueLazyload, {
	loading
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
