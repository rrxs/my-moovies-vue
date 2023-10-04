import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import LoginLayout from '../layouts/LoginLayout.vue'
import SignupCall from '../components/SignupCall.vue'
import SigninCall from '../components/SigninCall.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: LoginLayout,
      children: [
        {
          path: '/login',
          name: 'signin',
          components: {
            default: LoginView,
            RightSide: SignupCall
          }
        },
        {
          path: '/signup',
          name: 'signup',
          components: {
            default: SignupView,
            RightSide: SigninCall
          }
        }
      ]
    },
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '/',
          name: 'home',
          components: {
            default: HomeView
          }
        }
      ]
    }
  ]
})

export default router
