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
          <td>Максим</td>
          <td>Зенин</td>
          <td>Максимович</td>
        </tr>
        <tr :class="$style.row">
          <td>1</td>
          <td>Артем</td>
          <td>Звездилин</td>
          <td>Артемович</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Table',
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
    }

    th {
      border-bottom: 1px solid black;
    }
  }
  .head {
  }
}

</style>
