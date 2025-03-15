<script setup lang="ts">
const viewport = useViewport();
const theme = useTheme();

const bgModal = useBgModal();
const isOpenClosedSearch = useOpenClosedSearch();
const isOpenMenuCategories = useOpenClosedMenuCategories();
const isOpenMenu = useOpenClosedMenu();
const isOpenClosedPageFilter = useOpenClosedPageFilter();

//
const colorSearch = computed(() => (isOpenClosedSearch.value ? 'var(--white)' : 'var(--primary)'));

const bgSearch = computed(() => (theme.value ? 'var(--cloud-light)' : 'var(--white)'));

const title = computed(() => {
  if (viewport.isLessThan('screen576')) {
    return '';
  }

  return 'Найти';
});

//
const openSearch = () => {
  // Закрытие других модальных окон
  if (isOpenMenu.value) {
    isOpenMenu.value = false;
  } else if (isOpenMenuCategories.value) {
    isOpenMenuCategories.value = false;
  } else if (isOpenClosedPageFilter.value) {
    isOpenClosedPageFilter.value = false;
  } else {
    // Открытие / Закрытие фона
    bgModal.value = !bgModal.value;
  }

  // Открытие / Закрытие модального окна поиска фильтров
  isOpenClosedSearch.value = !isOpenClosedSearch.value;
};

// Клик по фону фильтра
watch(bgModal, (val) => {
  if (!val && isOpenClosedSearch.value) {
    isOpenClosedSearch.value = false;
  }
});
</script>

<template>
  <UiButton
    :title
    color="var(--black)"
    :bg="bgSearch"
    :active="isOpenClosedSearch"
    @btn-click="openSearch"
    class="header_btn_search"
  >
    <ImagesSearch class="header_btn_search__svg" />
  </UiButton>

  <!--  -->
  <MenuTransition>
    <div v-if="isOpenClosedSearch" class="header_filters_wrap">
      <HeaderSearchFilters />
    </div>
  </MenuTransition>
</template>

<style lang="css" scoped>
.header_btn_search {
  width: 116px;
  height: 46px;
  font-weight: 600;
  border-radius: 10px;

  /*  */
  @media (max-width: 575px) {
    width: 44px;
    height: 44px;
  }
}

/*  */
.header_btn_search__svg {
  color: v-bind(colorSearch);

  /*  */
  @media (hover: hover) {
    .header_btn_search:hover & {
      color: var(--white);
    }
  }
}

/*  */

.header_filters_wrap {
  position: absolute;
  top: 150px;
  left: 0;
  width: 100%;
  height: 203px;
  background-color: var(--white);
  box-shadow: 0 2px 12px -3px rgba(0, 0, 0, 0.1);
  border-radius: 32px;
  padding: 32px;
}
</style>
