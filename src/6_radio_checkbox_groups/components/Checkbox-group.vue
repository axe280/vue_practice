<template>
  <ul class="answer-list">
    <li
      v-for="(answer, index) in answers"
      :key="index"
    >
      <label>
        <input :type="type"
          :value="answer"
          v-model="checked"
          @change="onChange(index, $event)"
        >

        {{answer}}
      </label>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['type', 'answers'],

  data() {
    return {
      checked: [],
      checkboxValues: []
    };
  },

  methods: {
    onChange(index, event) {
      this.checkboxValues[index] = event.target.checked;
      this.$emit('change-input', this.checkboxValues)
    }
  },

  created() {
    this.answers.forEach(() => {
      this.checkboxValues.push(false)
    })
  },

  watch: {
    answers() {
      this.checked = []
      this.checkboxValues = []
      
      this.answers.forEach(() => {
        this.checkboxValues.push(false)
      })
    }
  }
}
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
