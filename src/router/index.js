import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { Auth } from '@/services'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
    },
  {
    path: '/Novosti',
    name: 'Novosti',
    component: () => import('../views/Novosti.vue')
  },
  {
    path: '/Pocetna',
    name: 'Pocetna',
    component: () => import('../views/Pocetna.vue')
  },
  {
    path: '/Ponude',
    name: 'Ponude',
    component: Home,
    component: () => import( '../views/Ponude.vue')
  },
  {
    path: '/IzradaRasporeda',
    name: 'IzradaRasporeda',
    component: Home,
    component: () => import('../views/IzradaRasporeda.vue')
  },
  {
    path: '/Registracija',
    name: 'Registracija',
    component: Home,
    component: () => import('../views/Registracija.vue')
  },
  {
    path: '/Prijava',
    name: 'Prijava',
    component: Home,
    component: () => import('../views/Prijava.vue')
  },
  {
    path: '/Korisnik',
    name: 'Korisnik',
    component: Home,
    component: () => import('../views/Korisnik.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach( (to, from, next)=>{
  const javneStranice = ["/Prijava","/Registracija"]
  const prijavaPotrebna = !javneStranice.includes(to.path)
  const user = Auth.getUser();

  if(prijavaPotrebna && !user){
    next("/Prijava");
    return;
    
  }
  next();
})

export default router
