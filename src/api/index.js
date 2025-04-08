class Api {
  constructor() {
    this.base = '/rest' // Базовый путь к папке public/rest
  }

  /**
   * Универсальный метод для запросов
   * @param {string} url - Относительный путь (/products/list.json)
   * @param {object} options - Опции fetch
   */
  request = async (url, options = {}) => {
    const fullUrl = this.base + url
    
    try {
      const response = await fetch(fullUrl, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers
        },
        ...options
      })
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      return await response.json()
    } catch (error) {
      console.error(`API request failed (${fullUrl}):`, error)
      throw error
    }
  }
}

export default Api