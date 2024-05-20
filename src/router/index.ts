import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import SignUp from "../views/SignUp.vue"
import  Rightside from "../views/Rightside.vue"
import Authlayout from '@/Layout/Authlayout.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
{
path: "/",
component: Authlayout,
children:[
    {
      path: '',
      name: 'Rightside',
      component: Rightside
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/',
      name: 'SignUp',
      component: () => import('../views/SignUp.vue')
    },
]

}

  ]
})
export default router
