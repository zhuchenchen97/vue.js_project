// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' // 自动引入router文件夹下的index.js文件
import fastClick from 'fastclick' // 解决有些机型300ms点击延迟的问题
import 'styles/reset.css' // 解决不同机型css显示不同问题
import 'styles/border.css' // 解决1像素边框问题
import 'styles/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import store from './store/index.js'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  store: store,
  components: { App: App }, // 引入局部组件App
  template: '<App/>'  // 将App这个局部组件渲染到模板
})
// 路由就是根据网址的不同返回不同的内容给用户