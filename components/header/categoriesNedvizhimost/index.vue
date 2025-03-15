<script setup lang="ts">
import { categoryMenu } from '~/public/data/categoryMenu';

//
const bgModal = useBgModal();
const isOpenMenuCategories = useOpenClosedMenuCategories();
const isOpenMenu = useOpenClosedMenu();
const isOpenClosedSearch = useOpenClosedSearch();
const isOpenClosedPageFilter = useOpenClosedPageFilter();

//
const openMenuCategories = () => {
  // Закрытие других модальных окон
  if (isOpenMenu.value) {
    isOpenMenu.value = false;
  } else if (isOpenClosedSearch.value) {
    isOpenClosedSearch.value = false;
  } else if (isOpenClosedPageFilter.value) {
    isOpenClosedPageFilter.value = false;
  } else {
    // Открытие / Закрытие фона
    bgModal.value = !bgModal.value;
  }

  // Открытие / Закрытие модального окна меню категорий
  isOpenMenuCategories.value = !isOpenMenuCategories.value;
};

// Клик по фону фильтра
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
  <MenuTransition>
    <KeepAlive>
      <LazyHeaderCategoriesNedvizhimostModal
        v-if="isOpenMenuCategories"
        :category-menu="categoryMenu"
      />
    </KeepAlive>
  </MenuTransition>
</template>

<style lang="css" scoped>
.header_btn_nedvizh {
  width: 181px;
  border-radius: 10px;
  padding: 12px 16px;
}
</style>
