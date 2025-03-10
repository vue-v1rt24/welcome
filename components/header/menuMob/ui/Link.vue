<script setup lang="ts">
defineProps<{
  title: string;
  link: string;
}>();
</script>

<template>
  <NuxtLink :to="link" class="link">
    <span>{{ title }}</span>
    <span class="link__img"><ImagesArrowUp /></span>
  </NuxtLink>
</template>

<style lang="css" scoped>
.link {
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 14px;

  color: var(--black);
  background-color: #f1f4f4;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 14px;
  padding: 12px 14px;
}

/*  */
.link__img {
  width: 24px;
  height: 24px;
  background-color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;

  /*  */
  svg {
    width: 10px;
    height: 10px;
    color: #36b649;
  }
}
</style>
