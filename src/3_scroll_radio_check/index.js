// JS
import './js/'

// SASS
import './assets/sass/main.sass'


// Vue.js
window.Vue = require('vue')

// Vue init
const app = new Vue({
  el: '#app',
  data: {
    scrollDone: false,
    isAgreeChecked: false,
    spamActivated: false,
    spamControls: 'email',
    showForm: true
  },

  methods: {
    scrollBlock(event) {
      let elem = event.target;

      if (elem.scrollHeight - elem.scrollTop - elem.clientHeight < 20) {
        this.scrollDone = true;
      }
    }
  }
});