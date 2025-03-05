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
    <MenuTransition>
      <LazyBgModal v-if="bgModal" @close="bgModal = !bgModal" />
    </MenuTransition>
  </footer>
</template>

<style lang="css" scoped></style>
