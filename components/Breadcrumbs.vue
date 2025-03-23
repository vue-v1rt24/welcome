<script setup lang="ts">
const router = useRouter();
const viewport = useViewport();

//
defineProps<{
  breadcrumbs: { title: string; link?: string }[];
  white?: boolean;
}>();
</script>

<template>
  <div :class="['breadcrumbs_bx', { white }]">
    <nav v-if="viewport.isGreaterThan('screen576')" class="breadcrumbs">
      <NuxtLink to="/">Главная</NuxtLink>
      <span class="breadcrumbs_delimiter">/</span>

      <template v-for="item in breadcrumbs" :key="item.title">
        <NuxtLink v-if="item.link" :to="item.link">{{ item.title }}</NuxtLink>
        <span v-if="item.link" class="breadcrumbs_delimiter">/</span>
        <template v-else>{{ item.title }}</template>
      </template>
    </nav>

    <!--  -->
    <button v-else class="breadcrumbs__arrow" type="button" @click="router.back()">
      <ImagesArrowRight class="breadcrumbs__arrow_img" />
      <span>Вернуться назад</span>
    </button>
  </div>
</template>

<style lang="css" scoped>
/* Хлебные крошки */
.breadcrumbs_bx {
  background-color: transparent;
  padding-top: 52px;

  /*  */
  @media (max-width: 1280px) {
    padding-top: 42px;
  }

  @media (max-width: 768px) {
    padding-top: 28px;
  }

  @media (max-width: 567px) {
    padding-top: 14px;
  }
}

.breadcrumbs {
  width: fit-content;
  font-weight: 500;
  font-size: 16px;
  color: var(--gray);

  border: 2px solid var(--line-gray);
  border-radius: 12px;
  padding: 10px 16px;

  display: flex;
  align-items: center;
  gap: 14px;

  /*  */
  @media (max-width: 768px) {
    font-size: 14px;
  }
}

.breadcrumbs a {
  color: var(--black);
}

.breadcrumbs_delimiter {
  color: var(--gray);
  background-repeat: no-repeat;
  transform: translateY(1px);
}

/* Хлебные крошки на тёмном фоне */
.white {
  background-color: white;
  padding: 82px 0 100px 0;

  /*  */
  @media (max-width: 768px) {
    padding: 34px 0 42px 0;
  }
}

.white .breadcrumbs {
  color: var(--colorwhite3);
  margin: 0;
}

/*  */

.breadcrumbs__arrow {
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 14px;
  color: var(--gray);
  background-color: transparent;
  border: 2px solid var(--line-gray);
  border-radius: 10px;
  display: flex;
  align-items: center;
  column-gap: 12px;
  padding: 8px 14px;
}

.breadcrumbs__arrow_img {
  flex-shrink: 0;
  width: 11px;
  height: 11px;
  color: #cfcfd0;
}
</style>
