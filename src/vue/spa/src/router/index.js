import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/vue/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/vue/about',
      name: 'About',
      component: About
    }
  ]
})
