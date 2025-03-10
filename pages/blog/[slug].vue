<script setup lang="ts">
const route = useRoute();
const { slug } = route.params as { slug: string };
</script>

<template>
  <div>Статья: {{ slug }}</div>
</template>

<style lang="css" scoped></style>
