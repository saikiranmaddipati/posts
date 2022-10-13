import Vue from 'vue'
import VueRouter from 'vue-router'
import InfoPage from '../views/InfoPage.vue'
import LoginPage from '../views/LoginPage.vue'
import BlogPage from '../views/BlogPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login-page',
    component: LoginPage
  },
  {
    path: '/blogs',
    name: 'info-page',
    component: InfoPage
  },
  {
    path: '/blogpage',
    name: 'blog-page',
    component: BlogPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
