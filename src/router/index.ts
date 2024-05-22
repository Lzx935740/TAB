import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/roadtraffic',
      component: () => import('@/views/LayoutContainer.vue')
    }
  ]
})

export default router
