<script setup lang="ts">
const bgModal = useBgModal();

//
watch(
  () => bgModal.value,
  (val) => {
    document.body.classList.toggle('open', val);
  },
);
</script>

<template>
  <footer class="footer">
    Подвал

    <!--  -->
    <LazyBgModal v-if="bgModal" @close="bgModal = !bgModal" />
  </footer>
</template>

<style lang="css" scoped></style>
