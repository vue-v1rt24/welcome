<script setup lang="ts">
const route = useRoute();

console.log(route.query);
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
