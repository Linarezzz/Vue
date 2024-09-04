import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ListaTareas',
      name: 'ListaTareas',
      
      component: () => import('../components/ListaTareas.vue')
    }
  ]
})

export default router
