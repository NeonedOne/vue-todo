// тут мы настраиваем перемещение по страницам внутри сайта

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'TORFL — Home'
    },
    component: () => import('@/pages/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: 'TORFL — About'
    },
    component: () => import('@/pages/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: 'TORFL — Login'
    },
    component: () => import('@/pages/Login.vue')
  }
]

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router