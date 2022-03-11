<template>
  <div :class="$style.root">
   <h1 :class="$style.title">Students page</h1>
    <Table />
  </div>
</template>

<script>
import Table from '@/components/Table/Table';
export default {
  name: 'Students',
  components: {
    Table,
  }
}
</script>

<style module lang="scss">
.root {

  .title {
    text-align: center;
    font-size: 28px;
  }
}
</style>

