<template>
  <Layout title="Студенты">
    <Table />
  </Layout>
</template>

<script>
import Layout from '@/components/Layout/Layout';
import Table from '@/components/Table/Table';
export default {
  name: 'Students',
  components: {
    Layout,
    Table,
  }
}
</script>

<style module lang="scss">
.root {

}
</style>
