import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/students',
    name: 'Students',
    component: () => import('@/pages/StudentsPage')
  },
  {
    path: '/groups',
    name: 'Groups',
    component: () => import('@/pages/GroupsPage'),
  },
  {
    path: '/createStudent',
    name: 'CreateStudent',
    component: () => import('@/pages/CreateStudent'),
  },
  {
    path: '/createGroup',
    name: 'CreateGroup',
    component: () => import('@/pages/CreateGroup'),
  },
  {
    path: '/:catchAll(.*)',
    name: 'Students',
    component: () => import('@/pages/StudentsPage'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
