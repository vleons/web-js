<template>
  <Layout title="Создание записи">
    <FormStudent />
  </Layout>
</template>

<script>
import FormStudent from '@/components/FormStudent/FormStudent';
import Layout from '@/components/Layout/Layout';

export default {
  name: 'Students',
  components: {
    FormStudent,
    Layout
  }
}
</script>

<style module lang="scss">
</style>
