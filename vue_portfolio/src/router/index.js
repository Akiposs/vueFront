import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/user/dashboard',
    name: 'UserDashboard',
    component: () => import('../views/user/dashboard.vue')
  },
  {
    path: '/user/register/input',
    name: 'UserRegisterInput',
    component: () => import('../views/user/register/input.vue')
  },
  {
    path: '/user/register/confirm',
    name: 'UserRegisterConfirm',
    component: () => import('../views/user/register/confirm.vue')
  },
  {
    path: '/user/register/complete',
    name: 'UserRegisterComplete',
    component: () => import('../views/user/register/complete.vue')
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
