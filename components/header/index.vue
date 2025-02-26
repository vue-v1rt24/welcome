<script setup lang="ts">
const route = useRoute();

//
const { whiteBg = true } = defineProps<{
  whiteBg?: boolean;
}>();

//
const isHome = computed(() => route.path === '/');
</script>

<template>
  <header :class="['header', { whiteBg }]">
    <div class="logo">
      <NuxtLink v-if="!isHome" to="/">
        <img src="/images/logo.svg" alt="" />
      </NuxtLink>

      <img v-else src="/images/logo.svg" alt="" />
    </div>

    <!--  -->
    <ul>
      <li>
        <UiBtnPrimary class="" title="Недвижимость" @btn-click="">
          <img src="/images/nav-nedvizh.svg" alt="" />
        </UiBtnPrimary>
      </li>
      <li>
        <UiSelect title="Услуги" bg-dark-active>
          <div class="header__link">
            <UiLink link="/legal-services" title="Юридические услуги" />
            <UiLink link="/mortgage-services" title="Ипотечные услуги" />
          </div>
        </UiSelect>
      </li>
      <li>
        <UiSelect title="Об агентстве" bg-dark-active>
          <div class="header__link">
            <UiLink link="/" title="Об агентстве" />
            <UiLink link="/" title="Карьера" />
            <UiLink link="/" title="Наши специалисты" />
            <UiLink link="/" title="Лучшие проекты" />
            <UiLink link="/" title="Сертификаты и награды" />
            <UiLink link="/" title="Отзывы" />
          </div>
        </UiSelect>
      </li>
    </ul>
  </header>
</template>

<style lang="css" scoped>
.header {
  max-width: 1664px;
  border-radius: 0 0 32px 32px;
  padding: 20px 30px 30px 30px;
  margin: 0 auto;

  /*  */
  &.whiteBg {
    background-color: var(--cloud-light);
  }
}

/*  */

:deep(.bt_nedvizh) {
  width: 181px;
  height: 46px;
  border-radius: 10px;
  padding: 12px 16px;
}

/*  */

.header__link {
  width: 211px;
  display: flex;
  flex-direction: column;
  row-gap: 6px;
}
</style>
