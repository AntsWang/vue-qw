import Vue from 'vue'
import App from './App.vue'
import  './style/reset.css';
import './common/rem'
import store from './store/index';
import router from './router/router';
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
