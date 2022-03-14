<template>
  <Layout title="Создание записи">
    <div :class="$style.root">
      <div :class="$style.item">
        <div :class="$style.label">
          <label for="name">Имя</label>
        </div>
        <Input id="name" placeholder="Имя"/>
      </div>
      <div :class="$style.item">
        <div :class="$style.label">
          <label for="surname">Фамилия</label>
        </div>
        <Input id="surname" placeholder="Фамилия"/>
      </div>
      <div :class="$style.item">
        <div :class="$style.label">
          <label for="patronymic">Отчество</label>
        </div>
        <Input id="patronymic" placeholder="Отчество"/>
      </div>
      <div :class="$style.item">
        <div :class="$style.label">
          <label for="group">Группа</label>
        </div>
        <Select :list="selectData" id="group" placeholder="Группа"/>
      </div>
      <div :class="$style.item">
        <Btn theme="info">Сохранить</Btn>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout/Layout';
import Btn from '@/components/Btn/Btn';
import Input from '@/components/Input/Input';
import Select from '@/components/Select/Select';
export default {
  name: 'Students',
  components: {
    Layout,
    Btn,
    Input,
    Select,
  },
  setup() {
    return {
      selectData: [
          'ПМИ',
          'ПИ',
          'МОС',
          'ИВТ',
      ]
    }
  }
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
    flex: 0 0 150px
  }
}
</style>
