import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
