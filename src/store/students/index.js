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
    setItem: (state, item) => {
      state.items.push(item);
    },
    removeItem: (state, idRemove) => {
      state.items = state.items.filter(({ id }) => id !== idRemove)
    },
    updateItem: (state, updateItem) => {
      const index = state.items.findIndex(item => item.id === parseInt(updateItem.id));
      state.items[index] = updateItem;
    }
  },
  actions: {
    fetchItems: async ({ commit }) => {
      const response = await api.students();
      const items = await response.json();
      commit('setItems', items)
    },
    removeItem: async ({ commit }, id) => {
      const idRemovedItem = await api.remove( id );
      commit('removeItem', idRemovedItem);

    },
    addItem: async ({ commit }, { name, surname, patronymic, group }) => {
      const item = await api.add({ name, surname, patronymic, group })
      commit('setItem', item)
    },
    updateItem: async ({ commit }, { id, name, surname, patronymic, group }) => {
      const item = await api.update({ id, name, surname, patronymic, group });
      commit('updateItem', item);
    }
  },
}
