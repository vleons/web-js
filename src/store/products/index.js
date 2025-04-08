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
      console.log('Начало загрузки продуктов') // загрузка продуктов
      
      try {
        const products = await api.getProducts()
        console.log('Данные из API:', products) // Запрос к API для получения продуктов
        
        commit('setItems', products)
        console.log('Данные после коммита:', this.state.items) //Сохранение данных в хранилище 
      } catch (error) {
        console.error('Ошибка загрузки:', error)
      }
    },
    async createProduct({ commit }, product) {
      commit('addItem', product)
    },
    async updateProduct({ commit }, product) {
      commit('updateItem', product)
    },
    async deleteProduct({ commit }, id) {
      commit('removeItem', id)
    }
  }
}