<script setup lang="ts">
const route = useRoute();
// console.log(route.query);

//
const { data: apartments } = await useFetch('/api/pages/kvartirs', {
  query: route.query,
});

// Для активного класса кнопки фильтра
const activeBtnFilter = ref(apartments.value?.title);

// Для вывода кнопки "Показать больше"
const moreBtn = ref(apartments.value?.cursorId);

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

    // Установка значения для кнопки "Показать больше"
    moreBtn.value = res.cursorId;
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

// Изменение Гет параметров по отдельным кнопкам фильтров
const btnFilterHandler = async (btnData: { title: string; type: string }) => {
  await navigateTo({
    query: {
      rooms: btnData.type,
    },
  });
};

// Клик по кнопке "Показать больше"
const moreHandler = async () => {
  const res = await $fetch('/api/pages/kvartirs', {
    query: {
      ...route.query,
      more: 'load',
    },
  });

  apartments.value.res.push(...res.res);
  // console.log(apartments.value);

  // Установка значения для кнопки "Показать больше"
  moreBtn.value = res.cursorId;
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

      <!-- -->
      <div class="filter_sort">
        <!-- Фильтр в модальном окне -->
        <PagesKvartirsFilter />

        <!-- сортировка -->
        <UiFilterSort />
      </div>

      <!-- Вывод карточек -->
      <div class="cards_wrap">
        <PagesKvartirsCard v-for="(card, idx) in apartments?.res" :key="card.id" :idx :card />
      </div>

      <!--  -->
      <UiButton
        v-if="moreBtn"
        title="Показать больше"
        color="var(--black)"
        bg="var(--cloud-light)"
        @btn-click="moreHandler"
        class="more"
      />

      <!--  -->
      <div class="desc_nedvizh">
        <div class="desc_nedvizh__title">
          Купить двухкомнатную квартиру в Ставрополе вместе с Welcome
        </div>

        <div class="desc_nedvizh__par">
          <p>
            Двухкомнатная квартира – это отличное решение для семейной жизни, а также для тех, кто
            ценит пространство и комфорт. Если вы планируете купить двухкомнатную квартиру, вы
            делаете шаг к улучшению качества своей жизни, предоставляя себе и своим близким
            возможность насладиться уютом и свободой.
          </p>

          <p>
            Двухкомнатные квартиры предлагают множество преимуществ: они отлично подходят как для
            семей с детьми, так и для молодых пар. Просторная гостиная и отдельная спальня создают
            идеальные условия для отдыха и общения. Кроме того, такие квартиры часто располагаются в
            удобных и безопасных для проживания районах, что обеспечивает доступ к необходимой
            инфраструктуре – магазинам, школам и медицинским учреждениям.
          </p>

          <p>
            На нашем сайте вы найдете широкий выбор предложений, среди которых сможете легко найти и
            купить двухкомнатную квартиру. Мы подберем для вас лучшие варианты и найдем ту квартиру,
            в которой вы будете счастливы.
          </p>
        </div>
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

/*  */

.filter_sort {
  display: flex;
  column-gap: 24px;
  margin-bottom: 42px;
}

/*  */

.cards_wrap {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

/*  */

.more {
  width: 100%;
  height: 63px;
  font-weight: 700;
  font-size: 17px;
  border-radius: 18px;
  margin-top: 42px;
}

/*  */

.desc_nedvizh {
  margin-top: 120px;
}

/*  */
.desc_nedvizh__title {
  font-weight: 500;
  font-size: 26px;
  margin-bottom: 32px;
}

/*  */
.desc_nedvizh__par {
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: var(--gray-text);
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
</style>
