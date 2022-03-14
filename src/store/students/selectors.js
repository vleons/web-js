export const fetchItems = (store) => {
  const { dispatch } = store;
  dispatch('students/fetchItems');
};

export const selectItems = (store) => {
  const { getters } = store;
  return getters['students/items']
}

export const removeItem = (store, id) => {
  const { dispatch } = store;
  dispatch('students/removeItem', id);
}
