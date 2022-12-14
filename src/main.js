import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import { BootstrapVue } from 'bootstrap-vue'
import Axios from 'axios'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.prototype.$http = Axios;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
