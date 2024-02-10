import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import DefenderView from '@/views/DefenderView.vue'
import DatabaseView from '@/views/DatabaseView.vue'
import VerificationView from '@/views/VerificationView.vue'
import AuthVerificationView from '@/views/AuthVerificationView.vue'
import { useServerStore } from '@/stores/server'
import { isEmptyOrNull } from '@/shared/utils'
import { T } from '@/assets/js/lib/tw-elements/dist/src/js/mdb/util/keycodes'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Initial',
      component: AuthVerificationView
      
    },
    {
      path: '/home',
      name: 'Home',
      component: HomeView,
      meta: { requiresAuth: true }
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
      meta: { requiresAuth: true }
    },
    {
      path: '/database',
      name: 'Database',
      component: DatabaseView,
      meta: { requiresAuth: true }
    },
    {
      path: '/verification',
      name: 'Verification',
      component: VerificationView,
      meta: { requiresAuth: true }
    },
    {
      path: '/auth',
      name: 'Auth',
      component: AuthVerificationView,
      meta: { requiresAuth: false }
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const server = useServerStore()

  // let data = await server.checkIfAccessTokenIsExistAndValid()
  // Check if the route is the login route
  if (to.path === '/login') {
    next(); // Allow navigation to the login route
    return; // Exit the guard function
  }

  // Check if the user is verified as logged in
  const isValid = await server.checkIfAccessTokenIsExistAndValid();
  
  if (!isValid && to.meta.requiresAuth) {
    next('/login'); // Redirect to the login route
  } else {
    next(); // Proceed with the navigation
  }


})

export default router
