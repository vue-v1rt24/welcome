<script setup lang="ts">
import { EnumSwitchBtn } from '~/types/nedvizhimost.types';

//
const route = useRoute();
// console.log(route.query);

// Фон загрузки
const bgLoading = useBgLoading();

//
const { data: apartments } = await useFetch('/api/pages/kvartirs', {
  query: route.query,
});

// Для активного класса кнопки фильтра
const activeBtnFilter = ref(apartments.value?.title);

// Для вывода кнопки "Показать больше"
const moreBtn = ref(apartments.value?.cursorId);

// Для переключения вида карточек
const switchVal = ref<EnumSwitchBtn>(EnumSwitchBtn.two);

// Отслеживание изменения Гет параметров для отправки запроса на получение данных
watch(
  () => route.query,
  async (val) => {
    // Фон загрузки
    bgLoading.value = true;

    //
    const res = await $fetch('/api/pages/kvartirs', {
      query: route.query,
    });

    apartments.value = res;
    console.log(apartments.value);

    // Установка активной кнопки фильтра
    activeBtnFilter.value = apartments.value.title;

    // Установка значения для кнопки "Показать больше"
    moreBtn.value = res.cursorId;

    // Убираем фон загрузки
    bgLoading.value = false;
  },
);

// ============ Фильтрация по отдельным кнопкам
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
// ============ /Фильтрация по отдельным кнопкам

// Клик по кнопке "Показать больше"
const moreHandler = async () => {
  // Фон загрузки
  bgLoading.value = true;

  //
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

  // Убираем фон загрузки
  bgLoading.value = false;
};

// Передача координат карты в карту
const modal = useTemplateRef('modal');
const cardData = ref<{ address: string; coords: number[]; link: string } | null>(null);

const sendCardData = (address: string, coords: number[], link: string) => {
  console.log(address, coords);
  cardData.value = { address, coords, link };
  modal.value?.modalOpen();
};
</script>

<template>
  <section class="page">
    <div class="container">
      <!-- Хлебные крошки -->
      <Breadcrumbs
        :breadcrumbs="[{ title: 'Недвижимость', link: '/nedvizhimost' }, { title: 'Квартиры' }]"
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

        <!-- Сортировка -->
        <UiFilterSort />

        <!-- Переключение вывода карточек -->
        <!-- <UiFilterSwitchBtns v-model="switchVal" /> -->
      </div>

      <!-- Вывод карточек -->
      <div :class="['cards_wrap', switchVal]">
        <PagesKvartirsCard
          v-for="(card, idx) in apartments?.res"
          :key="card.id"
          :idx
          :card
          @card-data="sendCardData"
        />

        <!--  -->
        <span v-if="!apartments.res.length">Объектов недвижимости не найдено</span>
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

    <!-- Карта в модальном окне -->
    <UiModal ref="modal" @close-modal="cardData = null">
      <LazyUiMapNedvizhimost v-if="cardData?.coords.length" :card-data="cardData" />
    </UiModal>
  </section>
</template>

<style lang="css" scoped>
.filter_btns {
  display: flex;
  gap: 16px;
  margin: 42px 0 52px 0;

  /*  */
  @media (max-width: 1280px) {
    margin: 32px 0 42px 0;
  }

  @media (max-width: 992px) {
    padding: 0 40px;
    margin: 32px -40px 42px -40px;
    overflow-x: auto;
  }

  @media (max-width: 768px) {
    gap: 14px;
    margin: 28px -40px 38px -40px;
  }

  @media (max-width: 576px) {
    gap: 12px;
    padding: 0 20px;
    margin: 16px -20px 24px -20px;
  }
}

/*  */
.filter_btn {
  border: 2px solid var(--line-gray);
  border-radius: 10px;
  padding: 14px 16px;

  /*  */
  @media (max-width: 576px) {
    font-size: 14px;
    padding: 10px 12px;
  }

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

  /*  */
  @media (max-width: 1280px) {
    margin-bottom: 32px;
  }

  @media (max-width: 768px) {
    column-gap: 20px;
    margin-bottom: 28px;
  }

  @media (max-width: 576px) {
    column-gap: 17px;
    margin-bottom: 24px;
  }
}

/*  */

.cards_wrap {
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(4, 1fr);

  /*  */
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }

  /*  */
  &.single {
    grid-template-columns: 1fr;
  }
}

/*  */

.more {
  width: 100%;
  height: 63px;
  font-weight: 700;
  font-size: 17px;
  border-radius: 18px;
  margin-top: 42px;

  /*  */
  @media (max-width: 768px) {
    height: 58px;
    border-radius: 12px;
    margin-top: 38px;
  }

  @media (max-width: 576px) {
    height: 52px;
    font-size: 15px;
    margin-top: 24px;
  }
}

/*  */

.desc_nedvizh {
  margin-top: 120px;

  /*  */
  @media (max-width: 1280px) {
    margin-top: 100px;
  }

  @media (max-width: 768px) {
    margin-top: 90px;
  }

  @media (max-width: 576px) {
    margin-top: 60px;
  }
}

/*  */
.desc_nedvizh__title {
  font-weight: 500;
  font-size: 26px;
  margin-bottom: 32px;

  /*  */
  @media (max-width: 1280px) {
    font-size: 24px;
    margin-bottom: 18px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 24px;
  }

  @media (max-width: 576px) {
    font-size: 18px;
    margin-bottom: 18px;
  }
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

  /*  */
  @media (max-width: 1280px) {
    font-size: 16px;
  }

  @media (max-width: 576px) {
    font-size: 14px;
  }
}
</style>
