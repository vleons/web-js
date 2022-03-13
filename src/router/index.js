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
  {
    path: '/createStudent',
    name: 'CreateStudent',
    component: () => import('@/pages/CreateStudent'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
