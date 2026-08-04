import { createRouter, createWebHashHistory } from 'vue-router'
import DefaultView from '../views/DefaultView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import TsmcView from '../views/TsmcView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: DefaultView,
    },
    {
      path: '/tsmc',
      component: TsmcView,
    },
    {
      path: '/portfolio',
      component: PortfolioView,
    },
  ],
})

export default router
