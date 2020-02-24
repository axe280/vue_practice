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
    info: [
      {
        name: 'Name',
        value: 'Alex',
        pattern: /^[a-zA-Z ]{2,30}$/
      },
      {
        name: 'Phone',
        value: '',
        pattern: /^[0-9]{7,14}$/
      },
      {
        name: 'Email',
        value: 'uou[uo[',
        pattern: /[^@]+@[^@]+.[a-zA-Z]{2,6}/
      },
      {
        name: 'Some field 1',
        value: '',
        pattern: /.+/
      },
      {
        name: 'Some field 2',
        value: '',
        pattern: /.+/
      }
    ],

    controls: [],
    showForm: true
  },

  beforeMount() {
    this.info.forEach((item) => {
      this.controls.push({
        error: !item.pattern.test(item.value),
        activated: item.value !== ''
      })
    });
  },

  computed: {
    progressBarWidth() {
      return {
        width: (this.done * 100 / this.controls.length) + '%'
      }
    },

    done() {
      let done = 0;

      for (let control of this.controls) {
        if (!control.error) {
          done++;
        }
      }

      return done;
    }
  },

  methods: {
    onInput(index, value) {
      let infoItem = this.info[index];
      infoItem.value = value;

      let control = this.controls[index];
      control.error = !infoItem.pattern.test(value);
      control.activated = true;
    }
  }
});