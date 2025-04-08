export const fetchProducts = (store) => { //запуск загрузки товара с сервера
  store.dispatch('products/load'); 
};

export const selectProducts = (store) => { //получение всех товаров
  return store.state.products.items; 
};

export const selectProductById = (store, id) => { //поиск по id
  return store.state.products.items.find(item => item.id === id) || {};
};

export const removeProduct = (store, id) => { //удаление товаров
  store.dispatch('products/deleteProduct', id); 
};

export const addProduct = (store, product) => { //добавление товара
  store.dispatch('products/createProduct', product); 
};

export const updateProduct = (store, product) => { //обновление товара
  store.dispatch('products/updateProduct', product);
};