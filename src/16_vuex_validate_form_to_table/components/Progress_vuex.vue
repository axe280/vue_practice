<template>
  <div class="progress-wrapper">
    <h2>Progress bar</h2>
    <div class="progress-bar">
      <div class="progress-bar__inner"
        :style="progressWidth"
      ></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  computed: {
    ...mapGetters([
      'getValidFormFields',
      'formInfoItems'
    ]),

    progressWidth() {
      let doneCount = this.getValidFormFields,
          allFields = this.formInfoItems.length

      return {
        width: (doneCount * 100 / allFields) + '%'
      }
    }
  }
}
</script>