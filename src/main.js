import Vue from 'vue'
import App from './App.vue'
import './assets/css/app.css'
import router from './router'
import './assets/css/slick.css'
import './assets/css/bootstrap.min.css'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
