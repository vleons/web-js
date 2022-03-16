import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/students',
    name: 'Students',
    component: () => import('@/views/StudentsPage')
  },
  {
    path: '/groups',
    name: 'Groups',
    component: () => import('@/views/GroupsPage'),
  },
  {
    path: '/studentEdit/:id?',
    name: 'StudentEdit',
    props: (route) => {
      return {
        id: route.params.id,
      }
    },
    component: () => import('@/views/StudentEdit'),
  },
  {
    path: '/groupEdit/:id?',
    name: 'GroupEdit',
    props: (route) => {
      return {
        id: route.params.id,
      }
    },
    component: () => import('@/views/GroupEdit'),
  },
  {
    path: '/:catchAll(.*)',
    name: 'Students',
    component: () => import('@/views/StudentsPage'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
