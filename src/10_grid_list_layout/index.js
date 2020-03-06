// JS
import './js/'

// SASS
import './assets/sass/main.sass'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

// Vue.js
window.Vue = require('vue')

Vue.component('grid-article', {
  props: ['url', 'image', 'title'],

  template: `
    <div>
      <a :href="url" class="article-img">
        <img :src="image" :alt="title">
      </a>
    </div>
  `
})

Vue.component('list-article', {
  props: ['url', 'image', 'title'],

  template: `
    <div>
      <a :href="url" class="article-img">
        <img :src="image" :alt="title">
      </a>
      <a :href="url" class="article-link">
        {{ title }}
      </a>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam mollitia dolorem laudantium fugit vitae nulla?</p>
    </div>
  `
})


// Vue init
const app = new Vue({
  el: '#app',
  data: {
    layout: 'grid',
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
    typeList() {
      return this.gridType ? 'articles-list-grid' : 'articles-list'
    },

    gridType() {
      return this.layout === 'grid' 
    },

    listType() {
      return this.layout === 'list' 
    }
  }
});