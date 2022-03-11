import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Students',
    component: import('@/pages/Students')
  },
  {
    path: '/groups',
    name: 'Groups',
    component: () => import('@/pages/Groups'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
