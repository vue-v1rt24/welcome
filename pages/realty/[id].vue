<script setup lang="ts">
const route = useRoute();

//
const { data: realty } = await useFetch(`/api/pages/realty/${route.params.id}`);

// console.log(realty.value);
</script>

<template>
  <div>Страница недвижимости / {{ route.params.id }}</div>

  <!-- Другие проекты -->
  <div class="container">
    <SlidersOtherProjects />
  </div>
</template>

<style lang="css" scoped></style>
