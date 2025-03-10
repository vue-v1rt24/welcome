<script setup lang="ts">
const route = useRoute();

//
const viewport = useViewport();
const theme = useTheme();
const bgModal = useBgModal();

//
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
        <HeaderSearch />
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
    padding: 20px 40px;
  }

  @media (max-width: 576px) {
    column-gap: 14px;
    padding: 14px 20px;
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

  @media (max-width: 768px) {
    width: 188px;
  }

  @media (max-width: 576px) {
    width: 150px;
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
</style>
