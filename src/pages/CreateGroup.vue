<template>
  <Layout title="Создание записи">
    <div :class="$style.root">
      <div :class="$style.item">
        <div :class="$style.label">
          <label for="group-name">Название группы</label>
        </div>
        <Input id="group-name" placeholder="Название группы"/>
      </div>
      <div :class="$style.item">
        <div :class="$style.label">
          <label for="group-speciality">Специальность</label>
        </div>
        <Input id="group-speciality" placeholder="Специальность"/>
      </div>
      <div :class="$style.item">
        <Btn theme="info">Сохранить</Btn>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout/Layout';
import Input from '@/components/Input/Input';
import Btn from '@/components/Btn/Btn';
export default {
  name: 'Students',
  components: {
    Layout,
    Input,
    Btn,
  },
}
</script>

<style module lang="scss">
.root {
  padding-top: 30px;
  max-width: 900px;

  .item {
    display: flex;
    align-items: center;

    & + .item {
      margin-top: 15px;
    }
  }

  .label {
    flex: 0 0 150px;
  }

}
</style>
