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
    addItem: (state, item) => {
      state.items.push(item);
    }
  },
  actions: {
    fetchItems: async ({ commit }) => {
      const items = await api.groups().then(items => items.json());
      commit('setItems', items)
    },
    removeItem: async ({ dispatch }, id) => {
      await api.remove( id ).then(() => {
        dispatch('fetchItems');
      })
    },
    addItem: async ({ commit }, item) => {
      await api.add(item).then(() => {
        commit('addItem', item)
      })
    }
  },
}
