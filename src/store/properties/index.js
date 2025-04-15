import api from './api'

export default {
  namespaced: true,
  state: {
    items: []
  },
  mutations: {
    setItems(state, items) {
      state.items = items
    }
  },
  actions: {
    async load({ commit }) {
      try {
        const properties = await api.getProperties()
        commit('setItems', properties)
      } catch (error) {
        console.error('Ошибка загрузки свойств:', error)
      }
    }
  }
}