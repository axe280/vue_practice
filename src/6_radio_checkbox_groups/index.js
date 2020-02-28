// JS
import './js/'

// SASS
import './assets/sass/main.sass'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'


// Vue.js
window.Vue = require('vue');
Vue.component('app-question', require('./components/Question.vue').default);
Vue.component('table-data', require('./components/Table-data.vue').default);

function getQuestions() {
  return [
    {
      type: 'radio',
      title: 'What tag is used for a link?',
      answers: [
        'a', 'div', 'span', 'img'
      ]
    },
    {
      type: 'checkbox',
      title: 'What are your favourite tags?',
      answers: [
        'a', 'div', 'span', 'img'
      ]
    }
  ]
}

// Vue init
const app = new Vue({
  el: '#app',
  data: {
    questions: getQuestions(),
    questionIndex: 0,
    dataInputs: [],
    btnDisabled: true,
    showForm: true
  },

  computed: {
    getQuestion() {
      return this.questions[this.questionIndex]
    }
  },

  methods: {
    update(data) {
      this.$set(this.dataInputs, this.questionIndex, data)
      this.btnDisabled = false
    },

    btnClick() {
      if (this.questionIndex === this.questions.length - 1) {
        this.showForm = false;
        return;
      }

      this.questionIndex++
      this.btnDisabled = true
    }
  }
});