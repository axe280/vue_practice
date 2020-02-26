<template>
  <div class="form-group">
    <label class="field-item">
      <div class="field-item__label">
        {{name}}
        <span class="fa"
          v-show="activated"
          v-bind:class="validClass"
        ></span>
      </div>
      <div class="field-item__field">
        <input type="text"
          v-bind:value="value"
          v-on:input="onInput"
        >
      </div>
    </label>
  </div>
</template>


<script>
  export default {
    props: ['name', 'value', 'pattern'],

    data() {
      return {
        activated: this.value !== ''
      };
    },

    computed: {
      validClass() {
        return this.pattern.test(this.value)
          ? 'fa-check-circle'
          : 'fa-times-circle';
      }
    },

    methods: {
      onInput(e) {
        this.activated = true;

        this.$emit('change-value', {
          value: e.target.value, 
          valid: this.pattern.test(e.target.value)
        });
      }
    }
  };
</script>


<style lang="scss">

</style>