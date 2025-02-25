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
        <img src="/img/logo.svg" alt="" />
      </NuxtLink>

      <img v-else src="/img/logo.svg" alt="" />
    </div>

    <!--  -->
    <ul>
      <li>
        <UiBtnPrimary class="" name="Недвижимость" @btn-click="">
          <img src="/img/nav-nedvizh.svg" alt="" />
        </UiBtnPrimary>
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
</style>
