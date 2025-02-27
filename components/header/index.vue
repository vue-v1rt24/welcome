<script setup lang="ts">
const route = useRoute();

//
const theme = useTheme();

//
const isActiveBtnSearch = ref(false);
const colorSearch = computed(() => (isActiveBtnSearch.value ? 'var(--white)' : 'var(--primary)'));
const bgSearch = computed(() => (theme.value ? 'var(--cloud-light)' : 'var(--white)'));

//
const isHome = computed(() => route.path === '/');
</script>

<template>
  <header :class="['header', { whiteBg: theme }]">
    <div class="logo">
      <NuxtLink v-if="!isHome" to="/">
        <img src="/images/logo.svg" alt="" />
      </NuxtLink>

      <img v-else src="/images/logo.svg" alt="" />
    </div>

    <!--  -->
    <ul class="header_list_nedvizh">
      <li>
        <UiButton class="header_btn_nedvizh" title="Недвижимость" @btn-click="">
          <img src="/images/nav-nedvizh.svg" alt="" />
        </UiButton>
      </li>
      <li>
        <UiSelect title="Услуги" :bg-dark-active="theme">
          <div class="header__select">
            <UiLink link="/legal-services" title="Юридические услуги" />
            <UiLink link="/mortgage-services" title="Ипотечные услуги" />
          </div>
        </UiSelect>
      </li>
      <li>
        <UiSelect title="Об агентстве" :bg-dark-active="theme">
          <div class="header__select">
            <UiLink link="/agency" title="Об агентстве" />
            <UiLink link="/career" title="Карьера" />
            <UiLink link="/experts" title="Наши специалисты" />
            <UiLink link="/projects" title="Лучшие проекты" />
            <UiLink link="/certificates" title="Сертификаты и награды" />
            <UiLink link="/reviews" title="Отзывы" />
          </div>
        </UiSelect>
      </li>
      <li>
        <NuxtLink class="header__link" to="/blog">Блог</NuxtLink>
      </li>
      <li>
        <NuxtLink class="header__link" to="/contacts">Контакты</NuxtLink>
      </li>
    </ul>

    <!--  -->
    <ul class="header_list_search">
      <li>
        <a class="header_link_tel" href="tel:+7 962 400 20 30">+7 962 400 20 30</a>
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
  max-width: 1664px;
  background-color: var(--cloud-light);

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  border-radius: 0 0 32px 32px;
  padding: 20px 30px 30px 30px;
  margin: 0 auto;

  /*  */
  &.whiteBg {
    background-color: white;
  }
}

/*  */

.header_list_nedvizh {
  display: flex;
  align-items: center;
  column-gap: 18px;
}

/*  */

.header_btn_nedvizh {
  width: 181px;
  border-radius: 10px;
  padding: 12px 16px;
}

/*  */

.header__select {
  width: 211px;
  display: flex;
  flex-direction: column;
  row-gap: 6px;
}

/*  */

.header__link {
  font-weight: 600;
  font-size: 16px;
  color: var(--black);
  background-color: var(--white);
  border: 2px solid #e6f0f2;
  border-radius: 10px;
  padding: 10px 16px;
}

/*  */

.header_list_search {
  display: flex;
  align-items: center;
  column-gap: 103px;
}

/*  */
.header_link_tel {
  font-weight: 600;
  font-size: 18px;
  color: var(--black);
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
