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
    users: [],
    currentPage: 1,
    itemsPerPage: 8,
    pages: []
  },

  computed: {
    displayUsers() {
      return this.paginate(this.users)
    },

    paginPages() {
      return this.pages.slice(this.currentPage - 1, this.currentPage + 4)
    }
  },

  methods: {
    paginate(users) {
      let cPage = this.currentPage,
          iPage = this.itemsPerPage,
          from = (iPage * cPage) - iPage,
          to = iPage * cPage

      return users.slice(from, to)
    },

    setPages() {
      let max = Math.ceil(this.users.length / this.itemsPerPage)
      for (let i = 1; i <= max; i++) {
        this.pages.push({
          pageNumber: i,
          activeClass: false
        })
      }

      this.activatePageClass()
    },

    activatePage(page) {
      this.currentPage = page.pageNumber
      this.activatePageClass()
    },

    reducePage() {
      this.currentPage--
      this.activatePageClass()
    },

    increasePage() {
      this.currentPage++
      this.activatePageClass()
    },

    activatePageClass() {
      for (let item of this.pages) {
        item.activeClass = false
      }

      this.pages[this.currentPage - 1].activeClass = true
    }
  },

  created() {
    for (let i = 1; i <= 50; i++) {
      this.users.push({
        first: 'John',
        last: 'Doe',
        sufix: `#${i}`
      })
    }
  },

  watch: {
    users() {
      this.setPages()
    }
  }
});