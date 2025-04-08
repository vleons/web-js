import Api from '@/api/index'

class ProductsApi extends Api {
  /**
   * Получить список продуктов
   * @returns {Promise<Array>}
   */
  getProducts = () => this.request('/products/list.json')
  
  /**
   * Сохранить список продуктов
   * @param {Array} products 
   * @returns {Promise}
   */
  saveProducts = (products) => {
    console.log('Products saved (mock):', products)
    return Promise.resolve()
  }
}

export default new ProductsApi()