// JS
import './js/'

// SASS
import './assets/sass/main.sass'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

// Vue.js
window.Vue = require('vue')

// Vue.component('DinoCart', require('./components/Dino-cart.vue').default)

import VHeader from './components/Header_vuex.vue'
import VForm from './components/Form_vuex.vue'
import VProgress from './components/Progress_vuex.vue'
import VTable from './components/Table_vuex.vue'

import { store } from './store/index.js'
import { mapGetters } from 'vuex' 

// Vue init
const app = new Vue({
  el: '#app',
  store,
  components: {
    VHeader,
    VForm,
    VProgress,
    VTable
  },

  computed: {
    ...mapGetters([
      'getShowForm'
    ])
  }
});

