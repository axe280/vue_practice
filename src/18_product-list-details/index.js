// JS
import './js/'

// SASS
import './assets/sass/main.sass'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

// Vue.js
window.Vue = require('vue')

// Vue.component('DinoCart', require('./components/Dino-cart.vue').default)

import PCatalog from "./components/P-catalog.vue"
import PDetails from "./components/P-details.vue"

// lodash
import _ from 'lodash'
// var _ = require('lodash');

// Vue init
const app = new Vue({
  el: '#app',
  components: {
    PCatalog,
    PDetails,
    PForm
  },
  data: {
    prodDetails: {},
    products: [
      {
        id: 1,
        name: 'Product 1',
        price: '200',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error reprehenderit, a hic saepe odit impedit quis nesciunt! Voluptatum, unde omnis.'
      },
      {
        id: 2,
        name: 'Product 2',
        price: '300',
        info: 'Lorem ipsum dolor sit amet consectetur  reprehenderit, a hic saepe odit impedit quis nesciunt! Voluptatum, unde omnis.'
      },
      {
        id: 3,
        name: 'Product 3',
        price: '800',
        info: 'Lorem ipsum dolor a hic saepe odit impedit quis nesciunt! Voluptatum, unde omnis.'
      },
      {
        id: 4,
        name: 'Product 4',
        price: '2100',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error reprehenderit, a hic saepe odit impedit quis nesciunt omnis.'
      }
    ]
  },

  methods: {
    currentProduct(id) {
      this.prodDetails = _.find(this.products, {id: id})
    }
  }
});

