<script setup lang="ts">
const { type = 'checkbox' } = defineProps<{
  title: string;
  value: string;
  type?: 'checkbox' | 'radio';
}>();

//
const model = defineModel({ required: true });
</script>

<template>
  <label class="label">
    <input :type :value v-model="model" />
    <span>{{ title }}</span>
  </label>
</template>

<style lang="css" scoped>
.label {
  width: 100%;
  height: 63px;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  color: var(--black);
  background-color: #f1f4f4;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 28px;
  cursor: pointer;
  transition: color var(--speed-animate), background-color var(--speed-animate);

  /*  */
  @media (hover: hover) {
    &:hover {
      color: var(--primary);
      background-color: #f3f8f4;
    }
  }

  /*  */
  &:has(input:checked) {
    color: var(--white);
    background-color: var(--primary);
  }
}
</style>
