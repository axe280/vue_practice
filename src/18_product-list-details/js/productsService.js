import Vue from 'vue'
import _ from 'lodash'

export default new Vue({
  data: {
    products: [
      {
        id: 1,
        name: 'Product 1',
        price: '200',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error reprehenderit, a hic saepe odit impedit quis nesciunt! Voluptatum, unde omnis.'
      },
      {
        id: 2,
        name: 'Product 2',
        price: '300',
        info: 'Lorem ipsum dolor sit amet consectetur  reprehenderit, a hic saepe odit impedit quis nesciunt! Voluptatum, unde omnis.'
      },
      {
        id: 3,
        name: 'Product 3',
        price: '800',
        info: 'Lorem ipsum dolor a hic saepe odit impedit quis nesciunt! Voluptatum, unde omnis.'
      },
      {
        id: 4,
        name: 'Product 4',
        price: '2100',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error reprehenderit, a hic saepe odit impedit quis nesciunt omnis.'
      }
    ]
  },

  methods: {
    currentProduct(id) {
      let product = _.find(this.products, {id: id})
      this.$emit('viewDetails', product)
    }
  }
})