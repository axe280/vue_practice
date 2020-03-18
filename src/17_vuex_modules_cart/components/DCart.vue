<template>
  <div class="d-cart">
    <h2>Cart</h2>
    <p v-show="!products.length">Please, add some products to cart</p>
    <ul class="d-card-products">
      <li v-for="product in products"
        :key="product.id"
      >
       {{ product.title }} ({{ product.quantity }}) – {{ product.price }} $
      </li>
    </ul>

    <p class="d-cart__total">Total price: {{ total.toFixed(2) }} $</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'


export default {
  computed: {
    ...mapGetters('cart', {
      products: 'cartProducts',
      total: 'cartTotalPrice'
    })
  }
}
</script>