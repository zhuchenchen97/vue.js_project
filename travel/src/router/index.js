import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import City from '@/pages/city/City.vue'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({ // 配置路由
  routes: [{
      path: '/', 
      name: 'Home',
      component: Home
    },{
      path: '/city', 
      name: 'City',
      component: City
    },{
        path: '/detail/:id', // 动态路由
        name: 'Detail',
        component: Detail
    }]
})
