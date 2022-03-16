<template>
  <div :class="$style.root">
    <div v-if="form.id" :class="$style.item">
      <div :class="$style.label">
        <label for="id">id</label>
      </div>
      <input :value="form.id" disabled :class="$style.input" id="id" placeholder="id" type="text">
    </div>
    <div :class="$style.item">
      <div :class="$style.label">
        <label for="group">Название группы</label>
      </div>
      <input v-model="form.group" :class="$style.input" id="group" placeholder="Название группы" type="text">
    </div>
    <div :class="$style.item">
      <div :class="$style.label">
        <label for="speciality">Специальность</label>
      </div>
      <input v-model="form.speciality" :class="$style.input" id="speciality" placeholder="Специальность" type="text">
    </div>
    <div :class="$style.item">
      <Btn @click="onClick" :disabled="!isValidForm" theme="info">Сохранить</Btn>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue';
import { useStore } from 'vuex';

import { selectItemById } from '@/store/groups/selectors';
import Btn from '@/components/Btn/Btn';
export default {
  name: 'FormGroup',
  components: {
    Btn,
  },
  props: {
    id: String,
  },
  setup(props, context) {
    const store = useStore();
    const form = reactive({
      id: '',
      group: '',
      speciality: '',
    })
    if (props.id) {
      const group = selectItemById( store,  props.id );
      Object.keys(group).forEach(key => {
        form[key] = group[key]
      })
    }

    return {
      form,
      isValidForm: computed(() =>  !!(form.group && form.speciality)),
      onClick: () => {
        context.emit('submit', form);
      },
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
    flex: 0 0 150px;
  }

  .input {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
  }
}
</style>
