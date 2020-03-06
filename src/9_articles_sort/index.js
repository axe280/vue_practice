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
    searchData: '',
    articles: [
      {
          "title": "Maptia Travel Blog",
          "url": "https://maptia.com/",
          "image": "https://expertvagabond.com/wp-content/uploads/travel-blog-maptia.jpg"
      },
      {
          "title": "Roads & Kingdoms",
          "url": "http://roadsandkingdoms.com/",
          "image": "https://expertvagabond.com/wp-content/uploads/travel-blogs-roads-kingdoms.jpg"
      },
      {
          "title": "Notes From The Road",
          "url": "http://notesfromtheroad.com/",
          "image": "https://expertvagabond.com/wp-content/uploads/notes-from-road-blog.jpg"
      },
      {
          "title": "Uncornered Market",
          "url": "http://uncorneredmarket.com/",
          "image": "https://expertvagabond.com/wp-content/uploads/uncornered-market-blog.jpg"
      }
    ]
  },

  computed: {
    filterArticles() {
      let searchValue = this.searchData,
          articlesArray = this.articles

      if (!searchValue) {
        return articlesArray
      }

      searchValue = searchValue.trim().toLowerCase()

      articlesArray = articlesArray.filter(item => {
        return item.title.toLowerCase().indexOf(searchValue) !== -1
      })

      return articlesArray
    }
  }
});