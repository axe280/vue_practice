// JS
import './js/'

// SASS
import './assets/sass/main.sass'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'


// Vue.js
window.Vue = require('vue');
Vue.component('validate-field', require('./components/Validate-field.vue').default);
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
        value: 'oo993///o:',
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

  created() {
    this.info.forEach((item) => {
      this.controls.push({
        valid: item.pattern.test(item.value)
      });
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

      this.controls.forEach(item => {
        if (item.valid) {
          done++;
        }
      });

      return done;
    }
  },

  methods: {
    onInput(index, data) {
      this.info[index].value = data.value;
      this.controls[index].valid = data.valid;
      // this.$set(this.controls, index, data.valid);
    }
  },
});