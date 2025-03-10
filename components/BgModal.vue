<script setup lang="ts">
const emit = defineEmits<{
  close: [];
}>();
</script>

<template>
  <div class="bg_modal" @click="emit('close')"></div>
</template>

<style lang="css" scoped>
.bg_modal {
  position: fixed;
  inset: 0;
  background-color: rgba(26, 26, 24, 0.3);
  backdrop-filter: blur(24px);
  z-index: 100;
}
</style>
