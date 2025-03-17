<script setup lang="ts">
const route = useRoute();
// console.log(route.query);

//
const { data: apartments } = await useFetch('/api/pages/kvartirs', {
  query: route.query,
});

// console.log(apartments.value);

// Для активного класса кнопки фильтра
const activeBtnFilter = ref(apartments.value?.title);

// Отслеживание изменения Гет параметров для отправки запроса на получение данных
watch(
  () => route.query,
  async (val) => {
    const res = await $fetch('/api/pages/kvartirs', {
      query: route.query,
    });

    apartments.value = res;
    console.log(apartments.value);

    // Установка активной кнопки фильтра
    activeBtnFilter.value = apartments.value.title;
  },
);

// ============ Фильтрация по кнопкам
// Кнопки фильтров
const btns = [
  { title: 'Однокомнатные', type: '1' },
  { title: 'Двухкомнатные', type: '2' },
  { title: 'Трёх и более', type: '5' },
  { title: 'Квартиры студии', type: '0' },
  { title: 'Свободная планировка', type: '6' },
];

// Отправка запроса
const btnFilterHandler = async (btnData: { title: string; type: string }) => {
  await navigateTo({
    query: {
      rooms: btnData.type,
    },
  });
};
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
          v-for="btn in btns"
          :key="btn.type"
          :title="btn.title"
          bg="var(--white)"
          bg-hover="var(--line-gray)"
          bg-active="var(--primary)"
          color="var(--black)"
          color-hover="var(--black)"
          color-active="var(--white)"
          :active="activeBtnFilter === btn.title"
          @btn-click="btnFilterHandler(btn)"
          class="filter_btn"
        />
      </div>

      <!-- Фильтр в модальном окне и сортировка -->
      <div class="filter_sort">
        <PagesKvartirsFilter />
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
}

/*  */
.filter_btn {
  border: 2px solid var(--line-gray);
  border-radius: 10px;
  padding: 14px 16px;
  margin: 42px 0 52px 0;

  /*  */
  &.active {
    border-color: white;
  }
}
</style>
