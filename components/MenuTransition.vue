<script setup lang="ts"></script>

<template>
  <Transition name="bgModal">
    <slot />
  </Transition>
</template>

<style lang="css" scoped>
.bgModal-enter-active,
.bgModal-leave-active {
  transition: opacity var(--speed-animate) ease, transform var(--speed-animate) ease;
}

.bgModal-enter-from,
.bgModal-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
