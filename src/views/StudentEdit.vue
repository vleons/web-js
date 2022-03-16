<template>
  <Layout :title="id ? 'Редактирование записи' : 'Создание записи'">
    <StudentForm :id="id"  />
  </Layout>
</template>

<script>
import StudentForm from '@/components/StudentForm/StudentForm';
import Layout from '@/components/Layout/Layout';

export default {
  name: 'StudentEdit',
  props: {
    id: String,
  },
  components: {
    StudentForm,
    Layout
  },

}
</script>

<style module lang="scss">
</style>
