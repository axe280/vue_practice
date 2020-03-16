<template>
  <form action="#" 
    class="form-component"
    @submit.prevent="hideForm"
  >
    <v-input 
      v-for="(item, index) in formInfoItems"
      :key="index"
      :name="item.name"
      :value="item.value"
      :pattern="item.pattern"
      @update-value="updateValue({
        index,
        inputValue: $event
      })"
      @change-status="statusChange(index, $event)"
    ></v-input>

    <button class="btn btn_md btn_min-width"
      :disabled="done < controls.length"
    >Send</button>
  </form>
</template>

<script>
import VInput from './InputField_vuex.vue'
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
  components: {
    VInput
  },

  data() {
    return {
      controls: [],
    }
  },

  created() {
    this.$store.getters.formInfoItems.forEach((item) => {
      this.controls.push({
        valid: item.pattern.test(item.value)
      });
    });
  },

  computed: {
    ...mapGetters([
      'formInfoItems'
    ]),

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
    ...mapActions({
      updateValue: 'changeInfoValue',
      hideForm: 'hideForm'
    }),

    statusChange(index, status) {
      this.controls[index].valid = status

      this.$store.dispatch('countValidFormFields', {
        value: this.done
      })
    }
  }
}
</script>