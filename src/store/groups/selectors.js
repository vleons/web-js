export const fetchItems = ( store ) => {
  const { dispatch } = store;
  dispatch('groups/fetchItems');
};

export const selectItems = ( store ) => {
  const { getters } = store;
  return getters['groups/items']
}

export const removeItem = ( store, id ) => {
  const { dispatch } = store;
  dispatch('groups/removeItem', id);
}
