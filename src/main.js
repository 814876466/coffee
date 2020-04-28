import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/base.scss'
Vue.config.productionTip = false

// Vue.use(VueLazyload, {
//   preload: 1.3,
//   error: require('./assets/img/logo.png'),
//   loading: require('./assets/img/logo.png'),
//   attempt: 1
// })

// if (options.extract) {
//   return ExtractTextPlugin.extract({
//     use: loaders,
//     publicPath: './', // 注意配置这一部分，根据目录结构自由调整
//     fallback: 'vue-style-loader'
//   })
// } else {
//   return ['vue-style-loader'].concat(loaders)
// }

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
