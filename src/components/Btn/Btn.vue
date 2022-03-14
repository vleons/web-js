<template>
  <button  :class="[$style.root, $style[theme]]">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Btn',
  props: {
    theme: String
  }
}
</script>

<style module lang="scss">

.root {
  border: none;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  color: white;
  cursor: pointer;
  & + .root {
    margin-left: 8px;
  }
}

.danger {
  background-color: red;
  &:hover {
    background-color: #de0101;
  }
}

.info {
  background-color: #0d6efd;
  &:hover {
    background-color: #0e62e3;
  }
}

</style>
