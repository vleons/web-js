import api from './api';

export default {
  namespaced: true,
  state: {
    items: [],
  },
  getters: {
    items: state => state.items,
  },
  mutations: {
    setItems: (state, items) => {
      state.items = items;
    },
    setItem: (state, item) => {
      state.items.push(item);
    }
  },
  actions: {
    fetchItems: async ({ commit }) => {
      const response = await api.students();
      const items = await response.json();
      console.log(items, 'itemss')
      commit('setItems', items)
    },
    removeItem: async ({ dispatch }, id) => {
      await api.remove( id ).then(() => {
        dispatch('fetchItems');
      });
    },
    addItem: async ({ commit }, form) => {
      await api.add(form)
      console.log(form, 'add')
      commit('setItem', form)
    }
  },
}
