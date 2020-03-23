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
export default {
  props: ['product']
}
</script>