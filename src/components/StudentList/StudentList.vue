<template>
  <div :class="$style.root">
    <Table :headers="headers" :items="items">
      <template v-slot:control="{ item }">
        <Btn theme="info">Изменить {{ item.id }}</Btn>
        <Btn @click="onClick(item.id)" theme="danger">Удалить</Btn>
      </template>
    </Table>
    <router-link to="/CreateStudent">
      <Btn :class="$style.create" theme="info">Создать</Btn>
    </router-link>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
import { selectItems, removeItem } from '@/store/students/selectors';

import Table from '@/components/Table/Table';
import Btn from '@/components/Btn/Btn';

export default {
  name: 'StudentList',
  components: {
    Table,
    Btn,
  },
  setup() {
    const store = useStore();

    return {
      items: computed(() => selectItems(store)),
      headers: [
        {value: 'id', text: 'ID'},
        {value: 'name', text: 'Имя'},
        {value: 'surname', text: 'Фамилия'},
        {value: 'patronymic', text: 'Отчество'},
        {value: 'group', text: 'Группа'},
        {value: 'control', text: 'Действие'},
      ],
      onClick: id => { removeItem(store, id) }
    }
  }

}
</script>

<style module lang="scss">
.root {

  .create {
    margin-top: 16px;
  }

}
</style>
