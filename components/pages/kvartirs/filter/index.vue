<script setup lang="ts">
const bgModal = useBgModal();
const isOpenClosedPageFilter = useOpenClosedPageFilter();
const isOpenMenu = useOpenClosedMenu();
const isOpenMenuCategories = useOpenClosedMenuCategories();
const isOpenClosedSearch = useOpenClosedSearch();

//
const filterPageCategoryWrap = useTemplateRef('filter_page_category_wrap');

//
const filterTitle = computed(() =>
  isOpenClosedPageFilter.value ? 'Закрыть фильтр' : 'Открыть фильтр',
);

//
const openFilter = () => {
  // Закрытие других модальных окон
  if (isOpenMenu.value) {
    isOpenMenu.value = false;
  } else if (isOpenMenuCategories.value) {
    isOpenMenuCategories.value = false;
  } else if (isOpenClosedSearch.value) {
    isOpenClosedSearch.value = false;
  } else {
    // Открытие / Закрытие фона
    bgModal.value = !bgModal.value;
  }

  // Переключение активного класса для кнопки
  isOpenClosedPageFilter.value = !isOpenClosedPageFilter.value;

  // Подъём наверх
  if (isOpenClosedPageFilter.value) {
    window.scrollTo({
      top: filterPageCategoryWrap.value?.offsetTop,
      behavior: 'smooth',
    });
  }
};

// Клик по фону фильтра
watch(bgModal, (val) => {
  if (!val && isOpenClosedPageFilter.value) {
    isOpenClosedPageFilter.value = false;
  }
});
</script>

<template>
  <div class="filter_page_category_wrap" ref="filter_page_category_wrap">
    <UiButton
      :title="filterTitle"
      color-active="var(--primary)"
      bg-active="var(--white)"
      :active="isOpenClosedPageFilter"
      @btn-click="openFilter"
      :class="['filter_page_category__filter__btn', { open_filter: isOpenClosedPageFilter }]"
    >
      <ImagesClose v-if="isOpenClosedPageFilter" class="filter_page_category__image_close" />
      <ImagesFilter v-else class="filter_page_category__image_open" />
    </UiButton>

    <!-- Фильтр -->
    <KeepAlive>
      <LazyPagesKvartirsFilterItem v-if="isOpenClosedPageFilter" @click-search="openFilter" />
    </KeepAlive>
  </div>
</template>

<style lang="css" scoped>
.filter_page_category_wrap {
  position: relative;
}

/*  */

.filter_page_category__filter__btn {
  position: relative;
  width: 232px;
  height: 61px;
  font-weight: 600;
  font-size: 18px;
  column-gap: 16px;
  border-radius: 12px;

  /*  */
  &.open_filter {
    z-index: 101;
  }
}

/*  */

.filter_page_category__image_open {
  flex-shrink: 0;
  width: 22px;
  height: 20px;
}

/*  */
.filter_page_category__image_close {
  flex-shrink: 0;
  width: 16px;
  height: 16px;
}
</style>
