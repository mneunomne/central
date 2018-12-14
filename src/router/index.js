import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Trajeto from '@/components/Trajeto'
import Ponto from '@/components/Ponto'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/:trajeto_id/:name',
      name: 'Trajeto',
      component: Trajeto,
      children: [
        {
          path: 'ponto/:ponto_id',
          name: 'Ponto',
          component: Ponto
        }
      ]
    }
  ]
})

export default router
