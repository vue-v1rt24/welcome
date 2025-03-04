<script setup lang="ts">
defineProps<{
  link: string;
  title: string;
}>();
</script>

<template>
  <NuxtLink :to="link" :class="['link']">
    {{ title }}
  </NuxtLink>
</template>

<style lang="css" scoped>
.link {
  width: 100%;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  color: var(--black);
  background-color: #f1f4f4;
  border-radius: 12px;
  padding: 12px;

  /*  */
  &.active {
    color: var(--white);
    background-color: var(--primary);
  }
}
</style>
