<script setup lang="ts">
const bgModal = useBgModal();

//
watch(
  () => bgModal.value,
  (val) => {
    document.body.classList.toggle('open_menu', val);
  },
);
</script>

<template>
  <footer class="footer">
    Подвал

    <!--  -->
    <Transition name="bgModal">
      <LazyBgModal v-if="bgModal" @close="bgModal = !bgModal" />
    </Transition>
  </footer>
</template>

<style lang="css" scoped>
.bgModal-enter-active,
.bgModal-leave-active {
  transition: opacity var(--speed-animate) ease;
}

.bgModal-enter-from,
.bgModal-leave-to {
  opacity: 0;
}
</style>
