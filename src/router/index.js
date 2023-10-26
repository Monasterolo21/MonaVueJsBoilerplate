import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: () => import('../views/HomeView.vue'),
    meta: { transition: 'fade'  },
  },
  {
    path: '/:catchAll(.*)',
    name: 'Not Found',
    component: () => import('@/views/ErrorView.vue'),
    meta: { transition: 'fade'  },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
