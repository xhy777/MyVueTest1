import { createRouter, createWebHistory } from 'vue-router'

import LoginVue from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginVue
    },
    {
      path: '/main',
      name: 'main',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/components/mainView.vue')
    },
    // {
    //   path:'/build',
    //   name:'build',
    //   component: () => import('@/components/buildView.vue')
    // },
    // {
    //   path:'/student',
    //   name:'student',
    //   component: () => import('@/components/studentView.vue')
    // },
    // {
    //   path:'/owner',
    //   name:'owner',
    //   component: () => import('@/components/ownerView.vue')
    // }
  ]
})

export default router
