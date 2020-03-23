<template>
  <div class="p-catalog">
    <div class="p-c-item"
      v-for="product in products"
      :key="product.id"
    >
      <h4>{{ product.name }}</h4>
      <h5>{{ product.price }} $</h5>
      <button class="btn"
        @click="findProduct(product.id)"
      >View details</button>
    </div>
  </div>
</template>


<script>
import productService from "../js/productsService.js";

export default {
  data() {
    return {
      products: []
    }
  },

  created() {
    this.products = productService.products
  },

  methods: {
    findProduct(id) {
      productService.currentProduct(id)
    }
  }
}
</script>