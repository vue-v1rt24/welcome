<script setup lang="ts">
const route = useRoute();

//
const viewport = useViewport();
const theme = useTheme();
const bgModal = useBgModal();

//
const isActiveBtnSearch = ref(false);

//
const colorSearch = computed(() => (isActiveBtnSearch.value ? 'var(--white)' : 'var(--primary)'));
const bgSearch = computed(() => (theme.value ? 'var(--cloud-light)' : 'var(--white)'));
const isHome = computed(() => route.path === '/');

// Закрытие фона при изменении маршрута
watch(
  () => route.path,
  (val) => {
    if (val) {
      bgModal.value = false;
    }
  },
);
</script>

<template>
  <header :class="['header', { whiteBg: theme }]">
    <!-- Логотип -->
    <div class="logo">
      <NuxtLink v-if="!isHome" to="/">
        <img src="/images/logo.svg" alt="" />
      </NuxtLink>

      <img v-else src="/images/logo.svg" alt="" />
    </div>

    <!-- Меню для ПК -->
    <HeaderMenuPC v-if="viewport.isGreaterThan('screen1200')" />

    <!-- Меню для моб. -->
    <HeaderMenuMob v-else />

    <!-- Фильтры -->
    <ul class="header_list_search">
      <li class="header_link_tel">
        <a href="tel:+7 962 400 20 30">+7 962 400 20 30</a>
      </li>
      <li>
        <UiButton
          title="Найти"
          color="var(--black)"
          :bg="bgSearch"
          :active="isActiveBtnSearch"
          @btn-click="isActiveBtnSearch = !isActiveBtnSearch"
          class="header_btn_search"
        >
          <ImagesSearch class="header_btn_search__svg" />
        </UiButton>
      </li>
    </ul>
  </header>
</template>

<style lang="css" scoped>
.header {
  position: relative;
  max-width: 1664px;
  background-color: var(--cloud-light);

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  border-radius: 0 0 32px 32px;
  padding: 20px 30px 30px 30px;
  margin: 0 auto;
  z-index: 101;

  /*  */
  &.whiteBg {
    background-color: white;
  }

  /*  */
  @media (max-width: 1200px) {
    column-gap: 18px;
  }
}

/*  */

.logo {
  @media (max-width: 1300px) {
    width: 208px;
  }

  @media (max-width: 1200px) {
    margin-right: auto;
  }
}

/*  */

.header_list_search {
  display: flex;
  align-items: center;
  column-gap: 103px;
}

/*  */
.header_link_tel {
  @media (max-width: 1600px) {
    display: none;
  }

  /*  */
  a {
    font-weight: 600;
    font-size: 18px;
    color: var(--black);
  }
}

/*  */

.header_btn_search {
  width: 116px;
  font-weight: 600;
  border-radius: 10px;
  padding: 12px 16px;
}

/*  */
.header_btn_search__svg {
  color: v-bind(colorSearch);

  /*  */
  .header_btn_search:hover & {
    color: var(--white);
  }
}
</style>
