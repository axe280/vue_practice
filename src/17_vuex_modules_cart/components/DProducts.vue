<template>
  <div class="d-products-wrapper">
    <h2>Products</h2>
    <ul class="d-products">
      <li class="d-product-item"
        v-for="product in products"
        :key="product.id"
      >
        <h3>{{ product.title }}</h3>
        <div class="d-product-item__price">{{ product.price }} $</div>
        <button class="btn"
          :disabled="!product.inventory"
          @click="addProductToCart(product)"
        >Buy item</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: mapState({
    products: state => state.products.all
  }),

  methods: mapActions('cart', [
    'addProductToCart'
  ]),

  created() {
    this.$store.dispatch('products/getAllProducts')
  }
}
</script>