import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CulturalExchange from '../views/CulturalExchange.vue'
import CulturalVisa from '../views/CulturalVisa.vue'
import WorkingHoliday from '../views/WorkingHoliday.vue'
import InternshipVisa from '../views/InternshipVisa.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cultural-exchange',
    name: 'CulturalExchange',
    component: CulturalExchange
  },
  {
    path: '/cultural-visa',
    name: 'CulturalVisa',
    component: CulturalVisa
  },
  {
    path: '/working-holiday',
    name: 'WorkingHoliday',
    component: WorkingHoliday
  },
  {
    path: '/internship-visa',
    name: 'InternshipVisa',
    component: InternshipVisa
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router