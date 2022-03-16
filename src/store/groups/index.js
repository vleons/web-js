import api from './api';

export default {
  namespaced: true,
  state: {
    items: [],
  },
  getters: {
    items: state => state.items,
    getItemById: state => id => {
      return state.items.find(item => item.id === parseInt(id))
    }
  },
  mutations: {
    setItems: (state, items) => {
      state.items = items;
    },
    addItem: (state, item) => {
      state.items.push(item);
    },
    removeItem: (state, idRemove) => {
      state.items = state.items.filter(({ id }) => id !== idRemove);
    },
    updateItem: (state, updateItem) => {
      const index = state.items.findIndex(item => item.id === parseInt(updateItem.id));
      state.items[index] = updateItem;
    }
  },
  actions: {
    fetchItems: async ({ commit }) => {
      const response = await api.groups();
      const items = await response.json();
      commit('setItems', items)
    },
    removeItem: async ({ commit }, id) => {
      const idRemovedItem = await api.remove( id );
      commit('removeItem', idRemovedItem);
    },
    addItem: async ({ commit }, { group, speciality }) => { //TODO Нейминг group, возможно поменять на name
      const item = await api.add({ group, speciality });
      commit('addItem', item);
    },
    updateItem: async ({ commit }, { id, group, speciality }) => {
      const item = await api.update({ id, group, speciality });
      commit('updateItem', item);
    }
  },
}
