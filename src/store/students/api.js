import Api from '@/api/index';

class Students extends Api {

  /**
   * Вернет список всех студентов
   * @returns {Promise<Response>}
   */
  students = () => this.rest('/students/list.json');

  /**
   * Удалит студента по id
   * @param id
   * @returns {Promise<*>}
   */
  remove = ( id ) => this.rest('/students/delete-item.json', {
    method: 'POST',
    data: id,
  });

}

export default new Students();
