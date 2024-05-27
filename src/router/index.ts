import { createRouter, createWebHistory } from 'vue-router'
// @ts-ignore
import Authlayout from '@/Layout/Authlayout.vue'
// @ts-ignore
import SignUp from '../views/SignUp/SignUp.vue'
// @ts-ignore
import SignupPassword from '../views/SignupPassword.vue'
// @ts-ignore
import SignupStep4 from '../views/SignupStep4.vue'
// @ts-ignore
import SignupLoader from '../views/SignupLoader.vue'
// @ts-ignore
import SignupOn from '@/views/SignupOn.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
{
path: "/",
component: Authlayout,
children:[
    {
      path: '',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/confirm-email',
      name: 'confirm-email',
   // @ts-ignore
      component: () => import('../views/ConfirmEmail.vue')
    },
    {
      path: '/signup-password',
      name: 'signup-password',
      component: SignupPassword
    },
    {
      path: '/signup-step-4',
      name: 'signup-step-4',
      component: SignupStep4
    },
    {
      path: '/signup-loader',
      name: 'signup-loader',
      component: SignupLoader
    },
   {
      path: '/signup-on',
      name: 'signup-on',
      component: SignupOn
    },
  
  
  
]

}

  ]
})
export default router
