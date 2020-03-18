// hash [{ id, quantity }]
const state = {
  items: []
}

const getters = {
  cartProducts(state, getters, rootState) {
    return state.items.map(({ id, quantity }) => {
      const product = rootState.products.all.find(product => product.id === id)

      return {
        title: product.title,
        price: product.price,
        quantity
      }
    })
  },

  cartTotalPrice(state, getters) {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  }
}

const actions = {
  addProductToCart({ state, commit }, product) {
    if (product.inventory > 0) {
      const cartItem = state.items.find(({id}) => id === product.id)

      if (!cartItem) {
        commit('pushToCart', {id: product.id})
      } else {
        commit('incrementItemQuantity', cartItem)
      }

      // remove 1 item from stock
      commit('products/decrementProductInventory', {id: product.id}, {root: true})
    }
  }
}

const mutations = {
  pushToCart(state, { id }) {
    state.items.push({
      id,
      quantity: 1
    })
  },

  incrementItemQuantity(state, { id }) {
    const cartItem = state.items.find(item => item.id === id)
    cartItem.quantity++
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}