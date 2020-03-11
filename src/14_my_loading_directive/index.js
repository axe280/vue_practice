// JS
import './js/'

// SASS
import './assets/sass/main.sass'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

// Vue.js
window.Vue = require('vue')

let state = new WeakMap()

Vue.directive('loading', {
  bind(el) {
    state.set(el, el.textContent.trim())
  },

  update(el, binding) {
    if (binding.value) {
      el.disabled = true
      
      if (binding.modifiers.spinner) {
        el.innerHTML = `<span v-if="isLoading" class="spinner"></span>`
      } else if (binding.modifiers.text) {
        el.textContent = 'Loading...'
      }
    } else {
      el.disabled = false
      el.textContent = state.get(el)
    }
  }
})

// Vue init
const app = new Vue({
  el: '#app',
  data: {
    isLoading: false
  },

  methods: {
    loading() {
      this.isLoading = true

      setTimeout(() => {
        this.isLoading = false
      }, 1000)
    }
  }
});