<template>
  <div class="form-group">
    <label class="field-item">
      <div class="field-item__label">
        {{ name }}
        <span class="fa"
          v-show="activated"
          :class="validClass"
        ></span>
      </div>
      <div class="field-item__field"
        :class="animationError"
      >
        <input type="text"
          :value="value"
          @input="onInput"
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
      isValid() {
        return this.pattern.test(this.value)
      },

      validClass() {
        return this.isValid
          ? 'fa-check-circle'
          : 'fa-times-circle';
      },

      animationError() {
        return !this.isValid 
          ? 'animated shake' 
          : ''
      }
    },

    methods: {
      onInput(e) {
        this.activated = true;
        this.$emit('update-value', e.target.value);
      }
    },

    watch: {
      isValid() {
        this.$emit('change-status', this.isValid)
      }
    }
  };
</script>


<style lang="scss">

</style>