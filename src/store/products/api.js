import Api from '@/api/index'

class ProductsApi extends Api {
  /**
   * Получить список продуктов
   * @returns {Promise<Array>}
   */
  getProducts = () => this.request('/products/list.json')
  
  /**
   * Сохранить список продуктов (для имитации работы с API)
   * @param {Array} products 
   * @returns {Promise}
   */
  saveProducts = (products) => {
    // В реальном проекте здесь был бы POST/PUT запрос
    console.log('Products saved (mock):', products)
    return Promise.resolve()
  }
}

export default new ProductsApi()