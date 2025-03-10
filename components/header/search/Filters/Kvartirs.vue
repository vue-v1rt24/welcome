<script setup lang="ts">
const route = useRoute();

//
const queryData = reactive({
  newFlat: [],

  priceOt: '',
  priceDo: '',

  rooms: '',

  areaOt: '',
  areaDo: '',
});

//
watch(queryData, (val) => {
  console.log(val);
});
</script>

<template>
  <div>
    <UiFilterDropdown title="Тип недвижимости">
      <div class="type">
        <UiFilterBtnInput title="Вторичная" value="0" v-model="queryData.newFlat" />
        <UiFilterBtnInput title="В новостройке" value="1" v-model="queryData.newFlat" />
      </div>
    </UiFilterDropdown>

    <!--  -->
    <UiFilterPriceMix v-model:priceOt="queryData.priceOt" v-model:priceDo="queryData.priceDo" />

    <!--  -->
    <UiFilterDropdown title="Комнаты">
      <div class="rooms">
        <UiFilterBtnInput type="radio" title="Студия" value="0" v-model="queryData.rooms" />
        <UiFilterBtnInput type="radio" title="1" value="1" v-model="queryData.rooms" />
        <UiFilterBtnInput type="radio" title="2" value="2" v-model="queryData.rooms" />
        <UiFilterBtnInput type="radio" title="3" value="3" v-model="queryData.rooms" />
        <UiFilterBtnInput type="radio" title="4+" value="4" v-model="queryData.rooms" />
      </div>
    </UiFilterDropdown>

    <!--  -->
    <UiFilterDropdown title="Площадь">
      <div class="area">
        <UiFilterInput leftText="от" sup rightText="м <sup>2</sup>" v-model="queryData.areaOt" />
        <UiFilterInput leftText="от" sup rightText="м <sup>2</sup>" v-model="queryData.areaDo" />
      </div>
    </UiFilterDropdown>

    <!--  -->
    <UiFilterDropdown title="Район, улица, дом">
      <UiFilterLocation />
    </UiFilterDropdown>
  </div>
</template>

<style lang="css" scoped>
.type {
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
  display: flex;
  column-gap: 12px;
}
</style>
