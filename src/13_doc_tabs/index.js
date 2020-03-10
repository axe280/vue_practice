// JS
import './js/'

// SASS
import './assets/sass/main.sass'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

// Vue.js
window.Vue = require('vue')
Vue.component('Tab-archive', {
  template: `
    <div>this is an archive content</div> 
  `
})

Vue.component('Tab-about', {
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "Cat Ipsum",
          content:
            "<p>Dont wait for the storm to pass, dance in the rain kick up litter decide to want nothing to do with my owner today demand to be let outside at once, and expect owner to wait for me as i think about it cat cat moo moo lick ears lick paws so make meme, make cute face but lick the other cats. Kitty poochy chase imaginary bugs, but stand in front of the computer screen. Sweet beast cat dog hate mouse eat string barf pillow no baths hate everything stare at guinea pigs. My left donut is missing, as is my right loved it, hated it, loved it, hated it scoot butt on the rug cat not kitten around</p>"
        },
        {
          id: 2,
          title: "Hipster Ipsum",
          content:
            "<p>Bushwick blue bottle scenester helvetica ugh, meh four loko. Put a bird on it lumbersexual franzen shabby chic, street art knausgaard trust fund shaman scenester live-edge mixtape taxidermy viral yuccie succulents. Keytar poke bicycle rights, crucifix street art neutra air plant PBR&B hoodie plaid venmo. Tilde swag art party fanny pack vinyl letterpress venmo jean shorts offal mumblecore. Vice blog gentrify mlkshk tattooed occupy snackwave, hoodie craft beer next level migas 8-bit chartreuse. Trust fund food truck drinking vinegar gochujang.</p>"
        },
        {
          id: 3,
          title: "Cupcake Ipsum",
          content:
            "<p>Icing dessert soufflé lollipop chocolate bar sweet tart cake chupa chups. Soufflé marzipan jelly beans croissant toffee marzipan cupcake icing fruitcake. Muffin cake pudding soufflé wafer jelly bear claw sesame snaps marshmallow. Marzipan soufflé croissant lemon drops gingerbread sugar plum lemon drops apple pie gummies. Sweet roll donut oat cake toffee cake. Liquorice candy macaroon toffee cookie marzipan.</p>"
        }
      ],

      currentPost: null
    }
  },

  template: `
    <div class="about-tabs-wrapper">
      <ul class="about-nav">
        <li v-for="post in posts"
          :key="post.id"
        >
          <button class="about-button"
            :class="{ active: currentPost ===  post}"
            @click="currentPost = post"
          >
            {{ post.title }}
          </button>
        </li>
      </ul>

      <div v-if="currentPost">
        <h3>{{ currentPost.title }}</h3>
        <div v-html="currentPost.content"></div>
      </div>

      <p v-else>Click on the post button</p>
    </div>
  `,
})

// Vue init
const app = new Vue({
  el: '#app',
  data: {
    currentTab: 'About',
    tabs: ['About', 'Archive']
  },

  computed: {
    tabComponent() {
      return `Tab-${this.currentTab.toLowerCase()}`
    }
  }
});