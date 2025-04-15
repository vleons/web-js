import Api from '@/api/index'

class PropertiesApi extends Api {
  getProperties = () => this.request('/properties/list.json')
}

export default new PropertiesApi()