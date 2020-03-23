<template>
  <div class="p-details">
    <h3>{{ product.name }}</h3>
    <ul>
      <li><strong>title:</strong> {{ product.name }}</li>
      <li><strong>price:</strong> {{ product.price }} $</li>
      <li><strong>info:</strong> {{ product.info }}</li>
    </ul>
  </div>
</template>


<script>
import productService from "../js/productsService.js";

export default {
  data() {
    return {
      product: {}
    }
  },

  created() {
    productService.$on("viewDetails", selectedProduct => {
      this.product = selectedProduct
    })
  }
}
</script>