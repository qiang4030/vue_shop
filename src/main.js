import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import './assets/js/64d58efce2.js'

import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1'
Vue.prototype.$http = axios

import { FormItem, Form, Input, Message } from 'element-ui'

Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
// Vue.use(Message)
Vue.prototype.$message = Message

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
