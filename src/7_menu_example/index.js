// JS
import './js/'

// SASS
import './assets/sass/main.sass'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

// Vue.js
window.Vue = require('vue')
Vue.component('app-menu', {
  template: `
    <ul class="menu">
      <li v-for="item in menuItems"
        :key="item"
      >
        <a href="#">{{item}}</a>
      </li>
    </ul>
  `,

  props: ['menuItems'],

  data() {
    return {
      
    }
  }
});


// Vue init
const app = new Vue({
  el: '#app',
  data: {
    menuData: ['home', 'contacts', 'about'],
    menuOpened: false
  }
});