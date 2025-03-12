<script setup lang="ts">
// Получение данных для фильтра "Город, район, улица"
let { data: filterLocation, refresh } = await useFetch('/api/searchFilters/kvartirs');

// Для полей ввода
const queryData = reactive({
  newFlat: [] as string[],

  priceOt: '',
  priceDo: '',

  rooms: '',

  areaOt: '',
  areaDo: '',

  locationCity: '',
  locationStreet: '',
  locationArea: '',
});

// Переключение выпадающий списков
const selectSwitch = ref('');

const dropdownHandler = (val: string) => {
  if (selectSwitch.value === val) {
    return (selectSwitch.value = '');
  }

  selectSwitch.value = val;
};

// Сброс селектов
const isSelectReset = ref(false);

const selectReset = () => {
  queryData.locationCity = '';
  queryData.locationStreet = '';
  queryData.locationArea = '';

  isSelectReset.value = true;

  refresh();

  setTimeout(() => (isSelectReset.value = false), 1000);
};

// Отправка данных
const sendFilterHandler = async () => {
  const constructorGetParams = {} as typeof queryData;

  for (const key in queryData) {
    if (queryData[key] && typeof queryData[key] !== 'object') {
      constructorGetParams[key] = queryData[key];
    } else if (typeof queryData[key] === 'object' && queryData[key].length) {
      constructorGetParams[key] = JSON.stringify(queryData[key]);
    }
  }

  await navigateTo({
    path: '/kvartirs',
    query: constructorGetParams,
  });
};

// Изменение параметров фильтра "Город, район, улица"
watch(
  () => [queryData.locationCity, queryData.locationArea, queryData.locationStreet],
  async (val) => {
    console.log(val);

    const res = await $fetch('/api/searchFilters/kvartirs/changeLocations', {
      query: {
        localityName: val[0],
        subLocalityName: val[1],
        address: val[2],
      },
    });

    // filterLocation.value!.subCity = res.subCity;
    // filterLocation.value!.address = res.address;
    filterLocation.value = res;
  },
);
</script>

<template>
  <div class="filter_kvartir">
    <!-- Тип недвижимости -->
    <UiFilterDropdown
      title="Тип недвижимости"
      :open="selectSwitch === 'pervii'"
      @click-dropdown="dropdownHandler('pervii')"
    >
      <div class="type">
        <UiFilterBtnInput title="Вторичная" value="0" v-model="queryData.newFlat" />
        <UiFilterBtnInput title="В новостройке" value="1" v-model="queryData.newFlat" />
      </div>
    </UiFilterDropdown>

    <!-- Стоимость -->
    <UiFilterPriceMix v-model:priceOt="queryData.priceOt" v-model:priceDo="queryData.priceDo" />

    <!-- Комнаты -->
    <UiFilterDropdown
      title="Комнаты"
      :open="selectSwitch === 'vtoroi'"
      @click-dropdown="dropdownHandler('vtoroi')"
    >
      <div class="rooms">
        <UiFilterBtnInput type="radio" title="Студия" value="0" v-model="queryData.rooms" />
        <UiFilterBtnInput type="radio" title="1" value="1" v-model="queryData.rooms" />
        <UiFilterBtnInput type="radio" title="2" value="2" v-model="queryData.rooms" />
        <UiFilterBtnInput type="radio" title="3" value="3" v-model="queryData.rooms" />
        <UiFilterBtnInput type="radio" title="4+" value="4" v-model="queryData.rooms" />
      </div>
    </UiFilterDropdown>

    <!-- Площадь -->
    <UiFilterDropdown
      title="Площадь"
      :open="selectSwitch === 'tretii'"
      @click-dropdown="dropdownHandler('tretii')"
    >
      <div class="area">
        <UiFilterInput leftText="от" sup rightText="м <sup>2</sup>" v-model="queryData.areaOt" />
        <UiFilterInput leftText="до" sup rightText="м <sup>2</sup>" v-model="queryData.areaDo" />
      </div>
    </UiFilterDropdown>

    <!-- Город, район, улица -->
    <UiFilterDropdown
      title="Город, район, улица"
      :open="selectSwitch === 'chetvertii'"
      @click-dropdown="dropdownHandler('chetvertii')"
    >
      <ul class="location">
        <li>
          <button type="button" @click="selectReset">Сброс</button>
        </li>
        <li>
          <span class="location__title">Город</span>
          <UiFilterSelect
            v-if="filterLocation?.city"
            :list="filterLocation.city"
            v-model="queryData.locationCity"
            :reset="isSelectReset"
            class="location__select"
          />
        </li>
        <li>
          <span class="location__title">Район</span>
          <UiFilterSelect
            v-if="filterLocation?.subCity"
            :list="filterLocation.subCity"
            v-model="queryData.locationArea"
            :reset="isSelectReset"
            class="location__select"
          />
        </li>
        <li>
          <span class="location__title">Улица</span>
          <UiFilterSelect
            v-if="filterLocation?.address"
            :list="filterLocation.address"
            v-model="queryData.locationStreet"
            :reset="isSelectReset"
            class="location__select"
          />
        </li>
      </ul>
    </UiFilterDropdown>

    <!-- Кнопка 'Показать предложения' -->
    <UiButton class="view_vars" title="Показать предложения" @btn-click="sendFilterHandler" />
  </div>
</template>

<style lang="css" scoped>
.filter_kvartir {
  display: flex;
  column-gap: 16px;
  align-items: center;
}

/*  */

.type {
  width: 211px;
  display: flex;
  flex-direction: column;
  row-gap: 6px;
}

/*  */

.rooms {
  display: flex;
  column-gap: 6px;
}

/*  */

.area {
  width: 344px;
  display: flex;
  column-gap: 12px;
}

/*  */

.view_vars {
  width: 239px;
  height: 63px;
  border-radius: 12px;
}

/*  */

.location {
  display: grid;
  row-gap: 12px;
}

/*  */
.location__title {
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  display: block;
  margin-bottom: 8px;
}

/*  */
.location__select {
  width: 296px;
}
</style>
