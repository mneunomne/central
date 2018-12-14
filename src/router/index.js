import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Trajeto from '@/components/Trajeto'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/:id/:name',
      name: 'trajeto',
      component: Trajeto,
      props: { default: true }
    }
  ]
})

export default router
