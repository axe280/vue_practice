// JS
import './js/'

// SASS
import './assets/sass/main.sass'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

// Vue.js
window.Vue = require('vue')

// Vue.component('DinoCart', require('./components/Dino-cart.vue').default)

import DProducts from './components/DProducts.vue'
import DCart from './components/DCart.vue'
import { store } from './store/index.js'

// Vue init
const app = new Vue({
  el: '#app',
  store,
  components: {
    DProducts,
    DCart
  }
});

