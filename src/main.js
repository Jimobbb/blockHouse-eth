import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './assets/fonts/iconfont.css'
import './assets/css/vendor/global.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

Vue.use(ElementUI)
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
