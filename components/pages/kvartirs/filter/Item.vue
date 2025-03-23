<script setup lang="ts">
// Получение данных для фильтра при первом вызове
const { data: getFilterData } = await useFetch('/api/pages/kvartirs/getFilter');
// console.log(getFilterData.value);

//
const emit = defineEmits<{
  clickSearch: [];
}>();

// Переменные для полей фильтра
const dataFilter = reactive({
  newFlat: [] as string[],

  priceOt: '',
  priceDo: '',

  areaOt: '',
  areaDo: '',

  locationCity: '',
  locationStreet: '',
  locationArea: '',

  buildingName: '',

  livingSpaceOt: '',
  livingSpaceDo: '',

  kitchenSpaceOt: '',
  kitchenSpaceDo: '',

  ceilingHeight: '',

  bathroomUnit: '',

  floor: '',

  renovation: '',

  roomsType: '',

  balcony: '',

  apartments: '',

  buildingSeries: '',

  buildingType: '',

  heatingSupply: '',

  parkingType: '',

  floorsTotalOt: '',
  floorsTotalDo: '',

  builtYearOt: '',
  builtYearDo: '',
});

// Активный выпадающий список
const currentSelect = ref('');

const currentSelectHandler = (title: string) => {
  if (currentSelect.value === title) {
    currentSelect.value = '';
  } else {
    currentSelect.value = title;
  }
};

// Сброс фильтра
const resetSelect = ref(false);

const resetFilter = () => {
  for (const key in dataFilter) {
    key === 'newFlat' ? (dataFilter[key] = []) : (dataFilter[key] = '');
  }

  //
  currentSelect.value = '';

  //
  resetSelect.value = true;
  setTimeout(() => (resetSelect.value = false), 1000);
};

// Добавляем Гет параметры в адресную строку по кнопке "Показать результаты"
const viewResultFilter = async () => {
  const constructorGetParams = {};

  for (const key in dataFilter) {
    if (dataFilter[key] && typeof dataFilter[key] !== 'object') {
      constructorGetParams[key] = dataFilter[key];
    } else if (typeof dataFilter[key] === 'object' && dataFilter[key].length) {
      constructorGetParams[key] = JSON.stringify(dataFilter[key]);
    }
  }

  //
  await navigateTo({
    query: constructorGetParams,
  });

  //
  emit('clickSearch');
};

// Изменение параметров фильтра
watch(
  () => [
    dataFilter.locationCity,
    dataFilter.locationArea,
    dataFilter.locationStreet,
    dataFilter.buildingName,
    dataFilter.ceilingHeight,
    dataFilter.bathroomUnit,
    dataFilter.floor,
    dataFilter.renovation,
    dataFilter.roomsType,
    dataFilter.balcony,
    dataFilter.buildingSeries,
    dataFilter.buildingType,
    dataFilter.heatingSupply,
    dataFilter.parkingType,
  ],
  async (val) => {
    const res = await $fetch('/api/pages/kvartirs/changeFilter', {
      query: {
        localityName: val[0],
        subLocalityName: val[1],
        address: val[2],

        //
        buildingName: val[3],
        ceilingHeight: val[4],
        bathroomUnit: val[5],
        floor: val[6],
        renovation: val[7],
        roomsType: val[8],
        balcony: val[9],
        buildingSeries: val[10],
        buildingType: val[11],
        heatingSupply: val[12],
        parkingType: val[13],
      },
    });

    // console.log(res);
    getFilterData.value = res;
  },
);
</script>

<template>
  <div class="filter_wrap">
    <div class="filter style_scrollbar">
      <!-- Тип недвижимости -->
      <div class="input_group">
        <span class="input_group__title">Тип недвижимости</span>

        <div class="input_group__item">
          <UiFilterBtnInput
            class="input_group__item_nedvizh"
            title="Вторичная"
            value="0"
            v-model="dataFilter.newFlat"
          />

          <UiFilterBtnInput
            class="input_group__item_nedvizh"
            title="В новостройке"
            value="1"
            v-model="dataFilter.newFlat"
          />
        </div>
      </div>

      <!-- Цена -->
      <div class="input_group">
        <span class="input_group__title">Цена</span>

        <div class="input_group__item">
          <UiFilterInput leftText="от" sup rightText="₽" v-model="dataFilter.priceOt" />
          <UiFilterInput leftText="до" sup rightText="₽" v-model="dataFilter.priceDo" />
        </div>
      </div>

      <!-- Общая площадь -->
      <div class="input_group">
        <span class="input_group__title">Общая площадь</span>

        <div class="input_group__item">
          <UiFilterInput leftText="от" sup rightText="м <sup>2</sup>" v-model="dataFilter.areaOt" />
          <UiFilterInput leftText="до" sup rightText="м <sup>2</sup>" v-model="dataFilter.areaDo" />
        </div>
      </div>

      <!-- Город, Район -->
      <div class="input_group flex">
        <div>
          <span class="input_group__title">Город</span>

          <div class="input_group__item">
            <UiFilterSelect
              v-if="getFilterData?.city"
              :list="getFilterData.city"
              absolute
              v-model="dataFilter.locationCity"
              :reset="resetSelect"
              :open="currentSelect === 'Город'"
              @click-select="currentSelectHandler('Город')"
              class="location__select"
            />
          </div>
        </div>

        <div>
          <span class="input_group__title">Район</span>

          <div class="input_group__item">
            <UiFilterSelect
              v-if="getFilterData?.subCity"
              :list="getFilterData.subCity"
              absolute
              v-model="dataFilter.locationArea"
              :reset="resetSelect"
              :open="currentSelect === 'Район'"
              @click-select="currentSelectHandler('Район')"
              class="location__select"
            />
          </div>
        </div>
      </div>

      <!-- Улица, Жилой комплекс -->
      <div class="input_group flex">
        <div>
          <span class="input_group__title">Улица</span>

          <div class="input_group__item">
            <UiFilterSelect
              v-if="getFilterData?.address"
              :list="getFilterData.address"
              absolute
              v-model="dataFilter.locationStreet"
              :reset="resetSelect"
              :open="currentSelect === 'Улица'"
              @click-select="currentSelectHandler('Улица')"
              class="location__select"
            />
          </div>
        </div>

        <div>
          <span class="input_group__title">Жилой комплекс</span>

          <div class="input_group__item">
            <UiFilterSelect
              v-if="getFilterData?.buildingName"
              :list="getFilterData.buildingName"
              absolute
              v-model="dataFilter.buildingName"
              :reset="resetSelect"
              :open="currentSelect === 'Жилой комплекс'"
              @click-select="currentSelectHandler('Жилой комплекс')"
              class="location__select"
            />
          </div>
        </div>
      </div>

      <!-- Жилая площадь, Площадь кухни -->
      <div class="input_group flex">
        <div>
          <span class="input_group__title">Жилая площадь</span>

          <div class="input_group__item">
            <UiFilterInput
              leftText="от"
              sup
              rightText="м <sup>2</sup>"
              v-model="dataFilter.livingSpaceOt"
            />

            <UiFilterInput
              leftText="до"
              sup
              rightText="м <sup>2</sup>"
              v-model="dataFilter.livingSpaceDo"
            />
          </div>
        </div>

        <div>
          <span class="input_group__title">Площадь кухни</span>

          <div class="input_group__item">
            <UiFilterInput
              leftText="от"
              sup
              rightText="м <sup>2</sup>"
              v-model="dataFilter.kitchenSpaceOt"
            />

            <UiFilterInput
              leftText="до"
              sup
              rightText="м <sup>2</sup>"
              v-model="dataFilter.kitchenSpaceDo"
            />
          </div>
        </div>
      </div>

      <!-- Высота потолков, Санузел -->
      <div class="input_group flex">
        <div>
          <span class="input_group__title">Высота потолков</span>

          <div class="input_group__item">
            <UiFilterSelect
              v-if="getFilterData?.ceilingHeight"
              :list="getFilterData.ceilingHeight"
              absolute
              v-model="dataFilter.ceilingHeight"
              :reset="resetSelect"
              :open="currentSelect === 'Высота потолков'"
              @click-select="currentSelectHandler('Высота потолков')"
              class="location__select"
            />
          </div>
        </div>

        <div>
          <span class="input_group__title">Санузел</span>

          <div class="input_group__item">
            <UiFilterSelect
              v-if="getFilterData?.bathroomUnit"
              :list="getFilterData.bathroomUnit"
              absolute
              v-model="dataFilter.bathroomUnit"
              :reset="resetSelect"
              :open="currentSelect === 'Санузел'"
              @click-select="currentSelectHandler('Санузел')"
              class="location__select"
            />
          </div>
        </div>
      </div>

      <!-- Этаж, Состояние -->
      <div class="input_group flex">
        <div>
          <span class="input_group__title">Этаж</span>

          <div class="input_group__item">
            <UiFilterSelect
              v-if="getFilterData?.floor"
              :list="getFilterData.floor"
              absolute
              v-model="dataFilter.floor"
              :reset="resetSelect"
              :open="currentSelect === 'Этаж'"
              @click-select="currentSelectHandler('Этаж')"
              class="location__select"
            />
          </div>
        </div>

        <div>
          <span class="input_group__title">Состояние</span>

          <div class="input_group__item">
            <UiFilterSelect
              v-if="getFilterData?.renovation"
              :list="getFilterData.renovation"
              absolute
              v-model="dataFilter.renovation"
              :reset="resetSelect"
              :open="currentSelect === 'Состояние'"
              @click-select="currentSelectHandler('Состояние')"
              class="location__select"
            />
          </div>
        </div>
      </div>

      <!-- Планировка, Балкон, лоджия -->
      <div class="input_group flex">
        <div>
          <span class="input_group__title">Планировка</span>

          <div class="input_group__item">
            <UiFilterSelect
              v-if="getFilterData?.roomsType"
              :list="getFilterData.roomsType"
              absolute
              v-model="dataFilter.roomsType"
              :reset="resetSelect"
              :open="currentSelect === 'Планировка'"
              @click-select="currentSelectHandler('Планировка')"
              class="location__select"
            />
          </div>
        </div>

        <div>
          <span class="input_group__title">Балкон, лоджия</span>

          <div class="input_group__item">
            <UiFilterSelect
              v-if="getFilterData?.balcony"
              :list="getFilterData.balcony"
              absolute
              v-model="dataFilter.balcony"
              :reset="resetSelect"
              :open="currentSelect === 'Балкон'"
              @click-select="currentSelectHandler('Балкон')"
              class="location__select"
            />
          </div>
        </div>
      </div>

      <!-- Апартаменты -->
      <div class="input_group">
        <span class="input_group__title">Апартаменты</span>

        <div class="input_group__item">
          <UiFilterBtnInput
            title="Без апартаментов"
            value="0"
            type="radio"
            v-model="dataFilter.apartments"
          />

          <UiFilterBtnInput
            title="Только апартаменты"
            value="1"
            type="radio"
            v-model="dataFilter.apartments"
          />
        </div>
      </div>

      <!-- Угловые -->
      <!-- <div class="input_group">
      <span class="input_group__title">Угловые</span>

      <div class="input_group__item">
        <UiFilterBtnInput title="Без угловых" value="0" type="radio" v-model="dataFilter" />
        <UiFilterBtnInput title="С угловыми" value="1" type="radio" v-model="dataFilter" />
      </div>
    </div> -->

      <!-- Тип дома, Материал стен -->
      <div class="input_group flex">
        <div>
          <span class="input_group__title">Тип дома</span>

          <div class="input_group__item">
            <UiFilterSelect
              v-if="getFilterData?.buildingSeries"
              :list="getFilterData.buildingSeries"
              absolute
              v-model="dataFilter.buildingSeries"
              :reset="resetSelect"
              :open="currentSelect === 'Тип дома'"
              @click-select="currentSelectHandler('Тип дома')"
              class="location__select"
            />
          </div>
        </div>

        <div>
          <span class="input_group__title">Материал стен</span>

          <div class="input_group__item">
            <UiFilterSelect
              v-if="getFilterData?.buildingType"
              :list="getFilterData.buildingType"
              absolute
              v-model="dataFilter.buildingType"
              :reset="resetSelect"
              :open="currentSelect === 'Материал стен'"
              @click-select="currentSelectHandler('Материал стен')"
              class="location__select"
            />
          </div>
        </div>
      </div>

      <!-- Отопление, Парковка -->
      <div class="input_group flex">
        <div>
          <span class="input_group__title">Отопление</span>

          <div class="input_group__item">
            <UiFilterSelect
              v-if="getFilterData?.heatingSupply"
              :list="getFilterData.heatingSupply"
              absolute
              v-model="dataFilter.heatingSupply"
              :reset="resetSelect"
              :open="currentSelect === 'Отопление'"
              @click-select="currentSelectHandler('Отопление')"
              class="location__select"
            />
          </div>
        </div>

        <div>
          <span class="input_group__title">Парковка</span>

          <div class="input_group__item">
            <UiFilterSelect
              v-if="getFilterData?.parkingType"
              :list="getFilterData.parkingType"
              absolute
              v-model="dataFilter.parkingType"
              :reset="resetSelect"
              :open="currentSelect === 'Парковка'"
              @click-select="currentSelectHandler('Парковка')"
              class="location__select"
            />
          </div>
        </div>
      </div>

      <!-- Этажность, Год постройки -->
      <div class="input_group flex">
        <div>
          <span class="input_group__title">Этажность</span>

          <div class="input_group__item">
            <UiFilterInput leftText="от" v-model="dataFilter.floorsTotalOt" />

            <UiFilterInput leftText="до" v-model="dataFilter.floorsTotalDo" />
          </div>
        </div>

        <div>
          <span class="input_group__title">Год постройки</span>

          <div class="input_group__item">
            <UiFilterInput leftText="от" v-model="dataFilter.builtYearOt" />

            <UiFilterInput leftText="до" v-model="dataFilter.builtYearDo" />
          </div>
        </div>
      </div>

      <!--  -->
      <div class="filter_btns">
        <UiButton
          title="Сбросить фильтры"
          color="var(--black)"
          colorHover="var(--primary)"
          colorActive="var(--white)"
          bg="#f1f4f4"
          bgHover="#f3f8f4"
          bgActive="var(--primary)"
          @btnClick="resetFilter"
          class="filter_btns__item"
        />

        <UiButton
          title="Показать результаты"
          @btnClick="viewResultFilter"
          class="filter_btns__item"
        />
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.filter_wrap {
  position: absolute;
  top: 80px;
  left: 0;
  z-index: 101;
  background-color: var(--white);
  overflow: hidden;
  border-radius: 32px;

  /*  */
  @media (max-width: 650px) {
    top: 70px;
    border-radius: 24px;
  }

  @media (max-width: 576px) {
    top: 56px;
  }
}

/*  */
.filter {
  max-width: 744px;
  height: 80vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: 42px;

  /*  */
  @media (max-width: 1280px) {
    padding: 32px;
  }

  @media (max-width: 650px) {
    max-width: 100%;
    width: 450px;
    row-gap: 18px;
    padding: 20px;
  }

  @media (max-width: 500px) {
    width: 400px;
  }

  @media (max-width: 450px) {
    width: 320px;
  }
}

/*  */

.input_group {
  &.flex {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;

    /*  */
    @media (max-width: 650px) {
      grid-template-columns: 1fr;
      row-gap: 18px;
    }
  }
}

.input_group__title {
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  display: block;
  margin-bottom: 14px;

  /*  */
  @media (max-width: 650px) {
    font-size: 14px;
    margin-bottom: 12px;
  }
}

/*  */
.input_group__item {
  display: flex;
  column-gap: 20px;

  /*  */
  @media (max-width: 650px) {
    flex-direction: column;
    row-gap: 10px;

    /*  */
    .label {
      height: 52px;
      font-size: 15px;
      padding: 14px 20px;
    }
  }
}

/*  */
.input_group__item_nedvizh {
  font-size: 16px;

  /*  */
  @media (max-width: 650px) {
    height: 52px;
    font-size: 15px;
  }
}

/*  */

.filter_btns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
  margin-top: 36px;

  /*  */
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    row-gap: 10px;
    margin-top: 0;
  }
}

/*  */
.filter_btns__item {
  height: 62px;
  border-radius: 12px;

  /*  */
  @media (max-width: 650px) {
    height: 52px;
    font-size: 15px;
  }
}
</style>
