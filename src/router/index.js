import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '@/views/inicio'
import edit from '@/components/edit'
import add from '@/views/addHomework'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/inicio'
  },
  {
    path: '/inicio',
    name: 'inicio',
    component: Inicio
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: edit,
    props: true
  },
  {
    path: '/add',
    name: 'add',
    component: add,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
