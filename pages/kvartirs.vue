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

      <!--  -->
      <h1 class="title">Квартиры</h1>
    </div>
  </section>
</template>

<style lang="css" scoped>
.page_breadcrumbs {
  padding-top: 52px;
}
</style>
