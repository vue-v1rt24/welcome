<script setup lang="ts">
const isOpenFilter = ref(false);
</script>

<template>
  <div class="filter_wrap">
    <UiButton title="Открыть фильтр" @btn-click="isOpenFilter = !isOpenFilter">
      <ImagesFilter />
    </UiButton>
  </div>
</template>

<style lang="css" scoped></style>
