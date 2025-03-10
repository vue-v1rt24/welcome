<script setup lang="ts"></script>

<template>
  <ul class="location">
    <li>
      <span class="location__title">Город</span>
      <UiFilterSelect class="location__select" />
    </li>
  </ul>
</template>

<style lang="css" scoped>
.location__title {
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  display: block;
  margin-bottom: 8px;
}

/*  */
.location__select {
  width: 296px;
}
</style>
