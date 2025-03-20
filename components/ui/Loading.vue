<script setup lang="ts"></script>

<template>
  <div class="loading"></div>
</template>

<style lang="css" scoped>
.loading {
  position: fixed;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
  z-index: 101;
}
</style>
