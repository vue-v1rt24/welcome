<script setup lang="ts">
const bgModal = useBgModal();
const isOpenMenuCategories = ref(false);

//
const openMenuCategories = () => {
  bgModal.value = !bgModal.value;
  isOpenMenuCategories.value = !isOpenMenuCategories.value;
};

// Закрытие модального окна категорий
watch(bgModal, (val) => {
  if (!val && isOpenMenuCategories.value) {
    isOpenMenuCategories.value = false;
  }
});
</script>

<template>
  <UiButton
    :class="['header_btn_nedvizh', { active: isOpenMenuCategories }]"
    title="Недвижимость"
    @btn-click="openMenuCategories"
  >
    <img src="/images/nav-nedvizh.svg" alt="" />
  </UiButton>

  <!--  -->
  <Transition name="bgModal">
    <LazyHeaderCategoriesNedvizhimostModal v-if="isOpenMenuCategories" />
  </Transition>
</template>

<style lang="css" scoped>
.header_btn_nedvizh {
  width: 181px;
  border-radius: 10px;
  padding: 12px 16px;
}

/*  */

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
