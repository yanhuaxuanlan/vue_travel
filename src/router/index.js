import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home/Home'
import fastClick from 'fastclick'
Vue.use(Router)
// 解决300毫秒问题
fastClick.attach(document.body)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
