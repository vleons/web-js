import Api from '@/api/index';

class Groups extends Api {

  /**
   * Вернет список всех групп
   * @returns {Promise<Response>}
   */
  groups = () => this.rest('/groups/list.json');

  /**
   * Удалит группу по id
   * @param id
   * @returns {Promise<*>}
   */
  remove = ( id ) => this.rest('/groups/delete-item.json', {
    method: 'POST',
    data: id,
  });

  add = () => this.rest('groups/add-item.json', {
    method: 'POST',
  })

}

export default new Groups();
