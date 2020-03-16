<template>
  <header class="header-v">
    <h1>Hello, {{ name }}</h1>
  </header>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  computed: {
    ...mapGetters([
      'getShowForm',
      'formInfoItems'
    ]),

    name() {
      return this.getShowForm ? 'noname' : this.formInfoItems[0].value
    }
  }
}
</script>