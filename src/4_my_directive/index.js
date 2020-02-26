// JS
import './js/';

// SASS
import './assets/sass/main.sass';


// Vue.js
window.Vue = require('vue');

Vue.directive('timer', {
  bind(el, options) {
    let timeout = options.arg;
    let max = false;
    let count = 0;

    for (let name in options.modifiers) {
      if (!isNaN(+name)) {
        max = parseInt(name);
      }
    }

    let callback = () => {
      count++;
      options.value(el);

      if (max === false || count < max) {
        setTimeout(() => {
          callback();
        }, timeout);
      }
    };

    if (options.modifiers.run) {
      callback();
    }

    setTimeout(() => {
      callback();
    }, timeout);
  }
});

// Vue init
const app = new Vue({
  el: '#app',
  data: {

  },

  methods: {
    onTimer(el) {
      let size = getComputedStyle(el)['fontSize'];
      el.style.fontSize = parseInt(size) + 2 + 'px';
    }
  }
});