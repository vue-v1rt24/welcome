<script setup lang="ts">
const { type = 'checkbox' } = defineProps<{
  type?: 'checkbox' | 'radio';
  title: string;
  value: string;
}>();

//
const model = defineModel();
</script>

<template>
  <label class="label">
    <input :type :value v-model="model" />
    {{ title }}
  </label>
</template>

<style lang="css" scoped></style>
