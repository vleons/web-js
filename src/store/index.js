import { createStore } from 'vuex'
import products from './products' // Убедитесь в правильном пути

export default createStore({
  modules: {
    products // Должно совпадать с именем, которое вы используете в mapActions
  }
})