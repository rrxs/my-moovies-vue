import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SigninView from '../views/SigninView.vue'
import SignupView from '../views/SignupView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import { getToken } from '../api/auth.api'

const publicRoutes = ['/login', '/signup']

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'signin',
      component: SigninView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/my-movies',
      name: 'movies',
      component: HomeView
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFoundView
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = !!getToken()
  if(!isLoggedIn && !publicRoutes.includes(to.path)) {
    next('login')
  }
  next()
})

export default router
