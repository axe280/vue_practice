import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import PCatalog from "./components/P-catalog.vue"
import PDetails from "./components/P-details.vue"
import PForm from "./components/P-form.vue"

const routes = [
  {
    path: '/catalog',
    component: PCatalog
  }, 
  {
    path: '/details/:id',
    component: PDetails
  },
  {
    path: '/form',
    component: PForm
  },
  {
    path: '*',
    component: PCatalog
  }
]

export default new VueRouter({
  routes,
  // mode: 'history'
})