import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/LayoutContainer.vue'),
      redirect: '/roadtraffic/LiveData',
      children: [
        {
          path: '/roadtraffic',
          component: () => import('@/views/RoadBlockageRanking.vue'),
          children: [
            {
              path: 'livedata',
              component: () => import('@/views/LiveData.vue')
            },
            {
              path: 'expectedpreecopitation',
              component: () => import('@/views/ExpectedPrecipitation.vue')
            }
          ]
        },
        {
          path: '/news',
          component: () => import('@/views/NewsToday.vue'),
          children: [
            {
              path: 'livedata',
              component: () => import('@/views/LiveData.vue')
            },
            {
              path: 'expectedpreecopitation',
              component: () => import('@/views/ExpectedPrecipitation.vue')
            }
          ]
        }
      ]
    }
  ]
})

export default router
