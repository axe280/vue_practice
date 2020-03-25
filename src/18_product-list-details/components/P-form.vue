<template>
  <div class="p-form-wrapper">
    <router-link to="/catalog">
      <a href="#">Back to products</a>
    </router-link>

    <br><br>
    
    <form class="p-form"
      @submit.prevent="addProduct"
    >
      <div class="form-group">
        <label class="field-item">
          <span class="field-item__label">Title</span>
          <div class="field-item__field">
            <input type="text"
              v-model="product.name"
            >
          </div>
        </label>
      </div>

      <div class="form-group">
        <label class="field-item">
          <span class="field-item__label">Price</span>
          <div class="field-item__field">
            <input type="number"
              v-model="product.price"
            >
          </div>
        </label>
      </div>

      <div class="form-group">
        <label class="field-item">
          <span class="field-item__label">Info</span>
          <div class="field-item__field">
            <input type="text"
              v-model="product.info"
            >
          </div>
        </label>
      </div>

      <button type="submit"
        class="btn"
      >Add product</button>
    </form>
  </div>
</template>


<script>
import productService from "../js/productsService.js";

export default {
  data() {
    return {
      product: {},
    }
  },

  methods: {
    addProduct() {
      productService.addProduct(this.product)
      this.product.name = this.product.price = this.product.info = ''
      this.$router.push('/catalog')
    }
  }
}
</script>