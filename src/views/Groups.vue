<template>
  <Layout  title="Группы" />
  <div :class="$style.root">
  </div>
</template>

<script>
import Layout from '@/components/Layout/Layout';
export default {
  name: 'Groups',
  components: {
    Layout
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
