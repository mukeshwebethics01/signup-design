import { createRouter, createWebHistory } from 'vue-router'
// @ts-ignore
import Authlayout from '@/Layout/Authlayout.vue'
// @ts-ignore
import SignUp from '../views/SignUp/SignUp.vue'
// @ts-ignore
import SignupPassword from '../views/SignupPassword.vue'
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
  
  
]

}

  ]
})
export default router
