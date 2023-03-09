import { createRouter, createWebHistory } from 'vue-router'
import inicio from '../views/InicioView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: inicio
    },
    {
      path: '/crear',
      name: 'crear',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PersonaView.vue')
    },
    {
      path: '/personas',
      name: 'personas',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/verPersonasview.vue')
    }
    
  ]
})

export default router
