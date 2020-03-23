<template>
  <div class="p-catalog">
    <div class="p-c-item"
      v-for="product in products"
      :key="product.id"
    >
      <h4>{{ product.name }}</h4>
      <h5>{{ product.price }} $</h5>
      <button class="btn"
        @click="idToUp(product.id)"
      >View details</button>
    </div>
  </div>
</template>


<script>
export default {
  props: ['products'],
  methods: {
    idToUp(id) {
      this.$emit('get-product-id', id)
    }
  }
}
</script>