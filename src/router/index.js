import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import DefenderView from '@/views/DefenderView.vue'
import DatabaseView from '@/views/DatabaseView.vue'
import VerificationView from '@/views/VerificationView.vue'
import AuthVerificationView from '@/views/AuthVerificationView.vue'
import {useServerStore} from '@/stores/server'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      requiresAuth: true
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/defender',
      name: 'Defender',
      component: DefenderView,
      requiresAuth: true
    },
    {
      path: '/database',
      name: 'Database',
      component: DatabaseView,
      requiresAuth: true
    },
    {
      path: '/verification',
      name: 'Verification',
      component: VerificationView,
      requiresAuth: true
    },
    {
      path:'/auth',
      name: 'Auth',
      component: AuthVerificationView
    }
  ]
})

router.beforeEach( async (to,from,next) => {
  // ✅ This will work because the router starts its navigation after
  // the router is installed and pinia will be installed too
  const server = useServerStore()
  let data = await server.checkIfAccessTokenIsExistAndValid()
  if (!data) {
    next('/login')
  }else{
    next()
  }
  
})

export default router
