import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({ // 配置路由
  routes: [{
      path: '/', 
      name: 'Home',
      component: () => import('@/pages/home/Home.vue')
    },{
      path: '/city', 
      name: 'City',
      component: () => import('@/pages/city/City.vue')
    },{
        path: '/detail/:id', // 动态路由
        name: 'Detail',
        component: () => import('@/pages/detail/Detail.vue')
    }]
})
