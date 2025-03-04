<script setup lang="ts">
import { categoryMenu } from '~/public/data/categoryMenu';

//
const bgModal = useBgModal();
const isOpenMenuCategories = useOpenClosedMenuCategories();
const isOpenMenu = useOpenClosedMenu();

//
const openMenuCategories = () => {
  // Закрытие модального окна меню
  if (isOpenMenu.value) {
    isOpenMenu.value = false;
  } else {
    // Открытие / Закрытие фона
    bgModal.value = !bgModal.value;
  }

  // Открытие / Закрытие модального окна меню категорий
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
    <LazyHeaderCategoriesNedvizhimostModal
      v-if="isOpenMenuCategories"
      :category-menu="categoryMenu"
    />
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
