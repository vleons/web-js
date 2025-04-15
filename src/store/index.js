import { createStore } from 'vuex'
import products from './products'
import properties from './properties'

export default createStore({
  modules: {
    products,
    properties
  }
})