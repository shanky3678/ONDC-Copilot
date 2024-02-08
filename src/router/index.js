import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import DefenderView from '@/views/DefenderView.vue'
import DatabaseView from '@/views/DatabaseView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/defender',
      name: 'Defender',
      component: DefenderView
    },
    {
      path: '/database',
      name: 'Database',
      component: DatabaseView
    }
  ]
})

export default router
