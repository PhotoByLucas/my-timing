import Vue from 'vue'
import Router from 'vue-router'

// 引入组件
// import HelloWorld from '@/components/HelloWorld'

// 引入页面
import home from '@/pages/home'
import message from '@/pages/message'
import personCenter from '@/pages/personCenter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'home' }
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/message',
      name: 'message',
      component: message
    },
    {
      path: '/personCenter',
      name: 'personCenter',
      component: personCenter
    }
  ]
})
