<script setup lang="ts">
const { data } = await useFetch('/api/kvartirs');

// Для полей формы
const queryData = reactive({
  newFlat: [],

  priceOt: '',
  priceDo: '',

  rooms: '',

  areaOt: '',
  areaDo: '',
});

// Переключение выпадающий списков
const dropdowns = reactive({
  pervii: false,
  vtoroi: false,
  tretii: false,
  chetvertii: false,
});

const dropdownHandler = (title: 'pervii' | 'vtoroi' | 'tretii' | 'chetvertii') => {
  switch (title) {
    case 'pervii':
      if (dropdowns.pervii) {
        return (dropdowns.pervii = false);
      }

      dropdowns.pervii = true;
      dropdowns.vtoroi = false;
      dropdowns.tretii = false;
      dropdowns.chetvertii = false;
      break;

    case 'vtoroi':
      if (dropdowns.vtoroi) {
        return (dropdowns.vtoroi = false);
      }

      dropdowns.vtoroi = true;
      dropdowns.pervii = false;
      dropdowns.tretii = false;
      dropdowns.chetvertii = false;
      break;

    case 'tretii':
      if (dropdowns.tretii) {
        return (dropdowns.tretii = false);
      }

      dropdowns.tretii = true;
      dropdowns.pervii = false;
      dropdowns.vtoroi = false;
      dropdowns.chetvertii = false;
      break;

    case 'chetvertii':
      if (dropdowns.chetvertii) {
        return (dropdowns.chetvertii = false);
      }

      dropdowns.chetvertii = true;
      dropdowns.tretii = false;
      dropdowns.pervii = false;
      dropdowns.vtoroi = false;
      break;
  }
};

// Отправка данных
const sendFilterHandler = () => {
  console.log(queryData);
};
</script>

<template>
  <div class="filter_kvartir">
    <UiFilterDropdown
      title="Тип недвижимости"
      :open="dropdowns.pervii"
      @click-dropdown="dropdownHandler('pervii')"
    >
      <div class="type">
        <UiFilterBtnInput title="Вторичная" value="0" v-model="queryData.newFlat" />
        <UiFilterBtnInput title="В новостройке" value="1" v-model="queryData.newFlat" />
      </div>
    </UiFilterDropdown>

    <!--  -->
    <UiFilterPriceMix v-model:priceOt="queryData.priceOt" v-model:priceDo="queryData.priceDo" />

    <!--  -->
    <UiFilterDropdown
      title="Комнаты"
      :open="dropdowns.vtoroi"
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

    <!--  -->
    <UiFilterDropdown
      title="Площадь"
      :open="dropdowns.tretii"
      @click-dropdown="dropdownHandler('tretii')"
    >
      <div class="area">
        <UiFilterInput leftText="от" sup rightText="м <sup>2</sup>" v-model="queryData.areaOt" />
        <UiFilterInput leftText="от" sup rightText="м <sup>2</sup>" v-model="queryData.areaDo" />
      </div>
    </UiFilterDropdown>

    <!--  -->
    <UiFilterDropdown
      title="Район, улица, дом"
      :open="dropdowns.chetvertii"
      @click-dropdown="dropdownHandler('chetvertii')"
    >
      <UiFilterLocation />
    </UiFilterDropdown>

    <!--  -->
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
</style>
