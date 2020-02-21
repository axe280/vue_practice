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
    showForm: true,
    formData: {
      email: '',
      firstName: '',
      lastName: '',
      phone: ''
    },
    formGuests: {},
    guestIterator: 0
  },

  computed: {
    fullName() {
      return this.formData.firstName + this.formData.lastName;
    } 
  },

  methods: {
    onAddGuest() {
      this.guestIterator++;
      this.$set(this.formGuests, this.guestIterator, '');
    },

    onDeleteGuest(index) {
      this.$delete(this.formGuests, index);
    }
  }
});