<script setup lang="ts">
defineProps<{
  name: string;
}>();

const emit = defineEmits<{
  btnClick: [];
}>();
</script>

<template>
  <button class="bt_nedvizh" type="button" @click="emit('btnClick')">
    <slot />
    <span>{{ name }}</span>
  </button>
</template>

<style lang="css" scoped>
.bt_nedvizh {
  font-family: var(--font-family);
  font-size: 16px;
  color: white;
  background-color: var(--primary);
  border: none;

  display: flex;
  align-items: center;
  column-gap: 10px;

  transition: background-color var(--speed-animate);

  /*  */
  &:hover {
    background-color: #2aaa3d;
  }

  &:is(:active, .active) {
    background-color: var(--secondary);
  }
}
</style>
