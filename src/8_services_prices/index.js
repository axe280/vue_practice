// JS
import './js/'

// SASS
import './assets/sass/main.sass'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

// Vue.js
window.Vue = require('vue')


// Vue init
const app = new Vue({
  el: '#app',
  data: {
    services: [
      {
        name: 'Design',
        price: 400,
        active: true
      },
      {
        name: 'Frontend',
        price: 300,
        active: false
      },
      {
        name: 'Backend',
        price: 500,
        active: false
      },
      {
        name: 'Other services',
        price: 200,
        active: false
      }
    ]
  },

  computed: {
    totalPrice() {
      let total = 0

      this.services.forEach(service => {
        if (service.active) {
          total += service.price
        }
      })

      return total
    }
  },

  methods: {
    toggleActive(item) {
      item.active = !item.active
    },

    priceFormat(value) {
      return `$ ${value.toFixed(2)}`
    } 
  }
});