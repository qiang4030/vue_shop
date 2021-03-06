import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./plugins/element.js";
import "./assets/css/global.css";
import "./assets/js/64d58efce2.js";
import TreeTable from "vue-table-with-tree-grid";

import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:8888/api/private/v1";
axios.interceptors.request.use((config) => {
  console.log(config);
  config.headers.Authorization = window.sessionStorage.getItem('token');
  return config;
  // 最后必须return config
});
Vue.prototype.$http = axios;

Vue.config.productionTip = false;

Vue.component('tree-table', TreeTable)

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
