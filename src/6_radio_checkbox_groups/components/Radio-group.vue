<template>
  <ul class="answer-list">
    <li
      v-for="(answer, index) in answers"
      :key="index"
    >
      <label>
        <input :type="type"
          :value="answer"
          v-model="picked"
          @change="$emit('change-input', index + 1)"
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
      picked: ''
    }
  },

  watch: {
    answers() {
      this.picked = ''
    }
  }
}
</script>
