import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/products'
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('@/views/ProductsPage.vue')
  },
  {
    path: '/products/:id/edit',
    name: 'ProductEdit',
    component: () => import('@/views/ProductEdit.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;