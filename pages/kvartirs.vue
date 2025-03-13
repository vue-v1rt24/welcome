<script setup lang="ts">
const route = useRoute();
// console.log(route.query);

//
const { data: apartments } = await useFetch('/api/pages/kvartirs', {
  query: route.query,
});

console.log(apartments.value);

// Отслеживание Гет параметров
watch(
  () => route.query,
  async (val) => {
    const res = await $fetch('/api/pages/kvartirs', {
      query: route.query,
    });

    apartments.value = res;
    console.log(apartments.value);
  },
);
</script>

<template>
  <section class="page">
    <div class="container">
      <!-- Хлебные крошки -->
      <Breadcrumbs
        :breadcrumbs="[{ title: 'Недвижимость', link: '/nedvizhimost' }, { title: 'Квартиры' }]"
        class="page_breadcrumbs"
      />

      <!-- Заголовок -->
      <h1 class="title">{{ apartments?.title }}</h1>

      <!-- Кнопки фильтров -->
      <div class="filter_btns">
        <UiButton
          title="Однокомнатные"
          bg="var(--line-gray)"
          bg-hover="#f3f8f4"
          bg-active="var(--primary)"
          color=" var(--black)"
          color-hover="var(--primary)"
          color-active="var(--white)"
          class="filter_btn"
        />
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
.page_breadcrumbs {
  padding-top: 52px;
}

/*  */

.filter_btns {
  display: flex;
  gap: 16px;

  /*  */
}
</style>
