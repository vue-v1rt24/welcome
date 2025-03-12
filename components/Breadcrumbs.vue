<script setup lang="ts">
defineProps<{
  breadcrumbs: { title: string; link?: string }[];
  white?: boolean;
}>();
</script>

<template>
  <div :class="['breadcrumbs_bx', { white }]">
    <nav class="breadcrumbs">
      <NuxtLink to="/">Главная</NuxtLink>
      <span class="breadcrumbs_delimiter">/</span>

      <template v-for="item in breadcrumbs" :key="item.title">
        <NuxtLink v-if="item.link" :to="item.link">{{ item.title }}</NuxtLink>
        <span v-if="item.link" class="breadcrumbs_delimiter">/</span>
        <template v-else>{{ item.title }}</template>
      </template>
    </nav>
  </div>
</template>

<style lang="css" scoped>
/* Хлебные крошки */
.breadcrumbs_bx {
  background-color: transparent;

  /*  */
  @media (max-width: 768px) {
    padding: 42px 0 62px 0;
  }

  @media (max-width: 567px) {
    padding: 32px 0 42px 0;
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
  @media (max-width: 576px) {
    font-size: 12px;
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

.white .breadcrumbs_delimiter {
}
</style>
