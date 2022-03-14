<template>
  <div id="nav">
    <router-link to="/groups">Группы</router-link>
    <router-link to="/students">Студенты</router-link>
  </div>
  <router-view/>
</template>
<script>
import { useStore } from 'vuex';
import { onMounted } from 'vue';
import { fetchItems as fetchStudents} from '@/store/students/selectors';
import { fetchItems as fetchGroups } from '@/store/groups/selectors';

export default {
  setup() {
    const store = useStore();
    onMounted(() => {
      fetchStudents(store);
      fetchGroups(store);
    })
  }
}
</script>
<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 15px;
  background: #c8cccc;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  &:not(:last-child) {
    margin-right: 8px;
   }
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
