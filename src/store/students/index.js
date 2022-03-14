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
    }
  },
  actions: {
    fetchItems: async ({ commit }) => {
      const items = await api.students().then(items => items.json());
      commit('setItems', items)
    },
    removeItem: async ({ dispatch }, id) => {
      await api.remove( id ).then(() => {
        dispatch('fetchItems');
      });
    }
  },
}
