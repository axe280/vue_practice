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
    <div class="d-cart__checkout">
      <button class="btn"
        :disabled="!products.length"
        @click="checkout(products)"
      >
        Checkout
      </button>
    </div>
    <p v-if="checkoutStatus">Checout: {{ checkoutStatus }}</p>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'


export default {
  computed: {
    ...mapState('cart', [
      'checkoutStatus'
    ]),
    ...mapGetters('cart', {
      products: 'cartProducts',
      total: 'cartTotalPrice'
    })
  },

  methods: {
    checkout(products) {
      this.$store.dispatch('cart/checkout', products)
    }
  }
}
</script>