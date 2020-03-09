// JS
import './js/'

// SASS
import './assets/sass/main.sass'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

// Vue.js
window.Vue = require('vue')
Vue.component('Carousel', require('./components/Carousel.vue').default)

// Vue init
const app = new Vue({
  el: '#app',
  data: {
    items: [
      {name: 'Kin Khao', tag: ["Thai"]},
      {name: 'Jū-Ni', tag: ["Sushi", "Japanese", "$$$$"]},
      {name: 'Delfina', tag: ["Pizza", "Casual"]},
      {name: 'San Tung', tag: ["Chinese", "$$"]},
      {name: 'Anchor Oyster Bar', tag: ["Seafood", "Cioppino"]},
      {name: 'Locanda', tag: ["Italian"]},
      {name: 'Garden Creamery', tag: ["Ice cream"]},
    ]
  }
});