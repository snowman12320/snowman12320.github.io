import { createRouter, createWebHashHistory } from 'vue-router'
import DefaultView from '../views/DefaultView.vue'
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
  ],
})

export default router
