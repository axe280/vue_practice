import shop from '../../api/shop'

const state = {
  all: []
}

const getters = {}

const actions = {
  getAllProducts({ commit }) {
    shop.getProducts(products => {
      commit('setProducts', products)
    })
  }
}

const mutations = {
  setProducts(state, products) {
    state.all = products
  },

  decrementProductInventory(state, { id }) {
    const productItem = state.all.find(item => item.id === id)
    productItem.inventory--
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

