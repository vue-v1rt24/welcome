<script setup lang="ts">
const bgModal = useBgModal();
const bgLoading = useBgLoading();

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

    <!--  -->
    <Transition name="bgModal">
      <LazyUiLoading v-if="bgLoading" />
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
