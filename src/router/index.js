import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import PointsList from '../views/PointsList.vue'
import Login from '../views/Login'
import CadastroColeta from '../components/CadastroColeta'
import CadastroUsuario from '../components/CadastroUsuario'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio,
    
  },
  {
    path: '/points',
    name: 'PointsList',
    component: PointsList
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signupColeta',
    name: 'CadastroColeta',
    component: CadastroColeta
  },
  {
    path: '/signupUsuario',
    name: 'CadastroUsuario',
    component: CadastroUsuario
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
