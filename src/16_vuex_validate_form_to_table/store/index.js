import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    formInfo: [
      {
        name: 'Name',
        value: '',
        pattern: /^[a-zA-Z ]{2,30}$/
      },
      {
        name: 'Phone',
        value: '',
        pattern: /^[0-9]{7,14}$/
      },
      {
        name: 'Email',
        value: '',
        pattern: /[^@]+@[^@]+.[a-zA-Z]{2,6}/
      },
      {
        name: 'Some field 1',
        value: '',
        pattern: /.+/
      },
      {
        name: 'Some field 2',
        value: '',
        pattern: /.+/
      }
    ],

    validFormFields: 0,
    showForm: true
  },

  getters: {
    formInfoItems(state) {
      return state.formInfo
    },

    getValidFormFields(state) {
      return state.validFormFields
    },

    getShowForm(state) {
      return state.showForm
    }
  },

  mutations: {
    changeInfoValue(state, { index, inputValue }) {
      state.formInfo[index].value = inputValue
    },
    
    countValidFormFields(state, value) {
      state.validFormFields = value
    },

    hideForm(state) {
      state.showForm = false
    }
  },

  actions: {
    changeInfoValue({ commit }, payload) {
      commit('changeInfoValue', payload)
    },

    countValidFormFields({ commit }, { value }) {
      commit('countValidFormFields', value)
    },

    hideForm({ commit }) {
      commit('hideForm')
    }
  }
})