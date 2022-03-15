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
  remove = ( id ) => this.rest('/students/delete-item', {
    method: 'POST',
    data: id,
  });

  add = ( form ) => this.rest('/students/add-item', {
    method: 'POST',
    data: form,
  });

}

export default new Students();
