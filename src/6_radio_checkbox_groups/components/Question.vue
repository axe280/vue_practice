<template>
  <div class="question">
    <h4>{{title}}</h4>
    <answer-radio
      v-if="type === 'radio'"
      :type="type"
      :answers="answers"
      @change-input="keepInputValues"
    ></answer-radio>

    <answer-checkboxes
      v-if="type === 'checkbox'"
      :type="type"
      :answers="answers"
      @change-input="keepInputValues"
    ></answer-checkboxes>
  </div>
</template>

<script>
import AnswerRadio from './Radio-group.vue'
import AnswerCheckboxes from './Checkbox-group.vue'

export default {
  components: {
    AnswerRadio,
    AnswerCheckboxes
  },

  props: ['type', 'title', 'answers'],

  data() {
    return {
      
    };
  },

  methods: {
    keepInputValues(data) {
      this.$emit('update-input', data)
    }
  }
};
</script>

<style lang="scss">
  .question {
    margin-bottom: 30px;
  }

  .answer-list li {
    margin-bottom: 10px;
  }

  .answer-list input {
    margin-right: 5px;
  }
</style>
