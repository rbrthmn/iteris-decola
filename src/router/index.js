import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import CadastroColeta from '../components/CadastroColeta'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Cadastro',
    name: 'CadastroColeta',
    component: CadastroColeta
  }

 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
