export const fetchProducts = (store) => {
  store.dispatch('products/load'); // Было 'fetchItems'
};

export const selectProducts = (store) => {
  return store.state.products.items; // Прямой доступ к state
};

export const selectProductById = (store, id) => {
  return store.state.products.items.find(item => item.id === id) || {};
};

export const removeProduct = (store, id) => {
  store.dispatch('products/deleteProduct', id); // Было 'removeItem'
};

export const addProduct = (store, product) => {
  store.dispatch('products/createProduct', product); // Было 'addItem'
};

export const updateProduct = (store, product) => {
  store.dispatch('products/updateProduct', product);
};