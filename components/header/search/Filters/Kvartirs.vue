<script setup lang="ts">
const route = useRoute();

//
const queryData = reactive({
  newFlat: [],
});

//
watch(queryData, (val) => {
  console.log(val);
});
</script>

<template>
  <div>
    <UiFilterDropdown title="Тип недвижимости">
      <UiFilterBtnInput title="Вторичная" value="0" v-model="queryData.newFlat" />
      <UiFilterBtnInput title="В новостройке" value="1" v-model="queryData.newFlat" />
    </UiFilterDropdown>
  </div>
</template>

<style lang="css" scoped></style>
