<template>
  <div :class="$style.root">
    <Table :headers="headers" :items="items">
      <template v-slot:control="{ item }">
        <Btn @click="onClickEdit(item.id)" theme="info">Изменить</Btn>
        <Btn @click="onClickRemove(item.id)" theme="danger">Удалить</Btn>
      </template>
    </Table>
    <RouterLink :to="{ name: 'GroupEdit' }">
      <Btn :class="$style.create" theme="info">Создать</Btn>
    </RouterLink>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

import { selectItems, removeItem  } from '@/store/groups/selectors'
import Table from '@/components/Table/Table';
import Btn from '@/components/Btn/Btn';
export default {
  name: 'GroupList',
  components: {
    Btn,
    Table,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    return {
      items: computed(() => selectItems(store)),
      headers: [
        {value: 'id', text: 'ID'},
        {value: 'group', text: 'Группа'},
        {value: 'speciality', text: 'Специальность'},
        {value: 'control', text: 'Действие'},
      ],
      onClickRemove: id => { removeItem(store, id) },
      onClickEdit: ( id ) => {
        router.push({ name: 'GroupEdit', params: { id } })
      }
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
