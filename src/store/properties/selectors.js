export const fetchProperties = (store) => {
    store.dispatch('properties/load');
  };
  
  export const selectProperties = (store) => {
    return store.state.properties.items;
  };
  
  export const selectPropertyById = (store, id) => {
    return store.state.properties.items.find(item => item.id === id) || {};
  };
  
  export const removeProperty = (store, id) => {
    store.dispatch('properties/deleteProperty', id);
  };
  
  export const addProperty = (store, property) => {
    store.dispatch('properties/createProperty', property);
  };
  
  export const updateProperty = (store, property) => {
    store.dispatch('properties/updateProperty', property);
  };