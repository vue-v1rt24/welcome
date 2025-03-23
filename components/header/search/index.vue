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
      <LazyHeaderSearchFilters />
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
  background-color: var(--white);
  box-shadow: 0 2px 12px -3px rgba(0, 0, 0, 0.1);
  border-radius: 32px;
  padding: 32px;

  /*  */
  @media (max-width: 1800px) {
    left: 20px;
    width: calc(100% - 40px);
  }

  @media (max-width: 1280px) {
    top: 132px;
    padding: 20px;
  }

  @media (max-width: 1200px) {
    top: 122px;
  }

  @media (max-width: 768px) {
    top: 116px;
    border-radius: 28px;
  }

  @media (max-width: 650px) {
    height: 521px;
    overflow-y: auto;
  }

  @media (max-width: 576px) {
    top: 87px;
    left: 10px;
    width: calc(100% - 20px);
    height: 450px;
    border-radius: 24px;
  }
}
</style>

<style>
@media (max-width: 650px) {
  .header_filters_wrap .dropdown__sub_wrap_contains {
    display: grid !important;

    & .dropdown__sub_wrap {
      min-height: 0;
      position: static !important;
      padding: 0 !important;
      box-shadow: none;

      .open & {
        padding: 16px;
        margin-top: 10px;
      }
    }
  }
}
</style>
