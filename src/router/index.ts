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
            },
            {
              path: 'liveindex',
              component: () => import('@/views/LiveIndex.vue')
            },
            {
              path: 'recentweather',
              component: () => import('@/views/RecentWeather.vue')
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
            },
            {
              path: 'liveindex',
              component: () => import('@/views/LiveIndex.vue')
            },
            {
              path: 'recentweather',
              component: () => import('@/views/RecentWeather.vue')
            }
          ]
        },
        {
          path: '/calendar',
          component: () => import('@/views/ThousandsYearCalendar.vue'),
          children: [
            {
              path: 'livedata',
              component: () => import('@/views/LiveData.vue')
            },
            {
              path: 'expectedpreecopitation',
              component: () => import('@/views/ExpectedPrecipitation.vue')
            },
            {
              path: 'liveindex',
              component: () => import('@/views/LiveIndex.vue')
            },
            {
              path: 'recentweather',
              component: () => import('@/views/RecentWeather.vue')
            }
          ]
        }
      ]
    }
  ]
})

export default router
