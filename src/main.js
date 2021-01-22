import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/base.scss'
import VueLazyload from 'vue-lazyload'
Vue.config.productionTip = false

Vue.use(VueLazyload, {
  preload: 1.3, // 预加载高度 屏幕长度的倍数
  error: require('./assets/img/error.jpg'), // 当加载真实图片出错时现实的替代图片
  loading: require('./assets/img/loading.jpg'),
  attempt: 3
  // error和loading也可以使用线上图片链接
})

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
