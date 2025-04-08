import api from './api'

export default {
  namespaced: true,
  state: {
    items: []
  },
  mutations: {
    setItems: (state, items) => {
      state.items = items
    },
    addItem: (state, item) => {
      state.items.push({
        ...item,
        id: state.items.length > 0 
          ? Math.max(...state.items.map(p => p.id)) + 1 
          : 1
      })
    },
    updateItem: (state, updatedItem) => {
      const index = state.items.findIndex(p => p.id === updatedItem.id)
      if (index !== -1) {
        state.items.splice(index, 1, updatedItem)
      }
    },
    removeItem: (state, id) => {
      state.items = state.items.filter(p => p.id !== id)
    }
  },
  actions: {
    async load({ commit }) {
      console.log('Начало загрузки продуктов') // Шаг 1
      
      try {
        const products = await api.getProducts()
        console.log('Данные из API:', products) // Шаг 2
        
        commit('setItems', products)
        console.log('Данные после коммита:', this.state.items) // Шаг 3
      } catch (error) {
        console.error('Ошибка загрузки:', error)
      }
    },
    async createProduct({ commit }, product) {
      commit('addItem', product)
      // В реальном приложении здесь был бы API вызов
    },
    async updateProduct({ commit }, product) {
      commit('updateItem', product)
      // В реальном приложении здесь был бы API вызов
    },
    async deleteProduct({ commit }, id) {
      commit('removeItem', id)
      // В реальном приложении здесь был бы API вызов
    }
  }
}