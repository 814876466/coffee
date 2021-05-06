import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/base.scss'
import VueLazyload from 'vue-lazyload'
Vue.config.productionTip = false

Vue.use(VueLazyload, {
  preload: 1.3,
  error: require('./assets/img/error.jpg'),
  loading: require('./assets/img/loading.jpg'),
  attempt: 3
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
