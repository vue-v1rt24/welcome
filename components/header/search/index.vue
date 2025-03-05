<script setup lang="ts">
const viewport = useViewport();
const theme = useTheme();

//
const isActiveBtnSearch = ref(false);

//
const colorSearch = computed(() => (isActiveBtnSearch.value ? 'var(--white)' : 'var(--primary)'));
const bgSearch = computed(() => (theme.value ? 'var(--cloud-light)' : 'var(--white)'));
const title = computed(() => {
  if (viewport.isLessThan('screen576')) {
    return '';
  }

  return 'Найти';
});
</script>

<template>
  <UiButton
    :title
    color="var(--black)"
    :bg="bgSearch"
    :active="isActiveBtnSearch"
    @btn-click="isActiveBtnSearch = !isActiveBtnSearch"
    class="header_btn_search"
  >
    <ImagesSearch class="header_btn_search__svg" />
  </UiButton>
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
</style>
