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
import PForm from "./components/P-form.vue"

// Vue init
const app = new Vue({
  el: '#app',
  components: {
    PCatalog,
    PDetails,
    PForm
  }
});

