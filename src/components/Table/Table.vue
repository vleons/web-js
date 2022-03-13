<template>
  <div :class="$style.root">
    <table :class="$style.table">
      <thead :class="$style.head">
        <tr :class="$style.row">
        <th>Id</th>
        <th>Группа</th>
        <th>Специальность</th>
        <th>Действие</th>
      </tr>
      </thead>
      <tbody :class="$style.body">
        <tr :class="$style.row">
          <td>1</td>
          <td>ПИ</td>
          <td>Автоматизация</td>
          <td>
            <Btn :text="'Удалить'" :theme="'danger'" />
            <Btn :text="'Изменить'" :theme="'info'" />
          </td>
        </tr>
        <tr :class="$style.row">
          <td>1</td>
          <td>ПМИ</td>
          <td>Программирование</td>
          <td>Артемович</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Btn from '@/components/Btn/Btn';
export default {
  name: 'Table',
  components: {
    Btn,
  }
}
</script>

<style module lang="scss">
.root {
  max-width: 900px;
  .table {
    width: 100%;
    border-collapse: collapse;
    th, td {
      padding: 10px;
      text-align: center;
    }

    th {
      border-bottom: 1px solid black;
    }
  }
  .head {
  }
}

</style>
