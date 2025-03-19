<script setup lang="ts">
/* 
По умолчанию, Новые, сначала дешевле, сначала дороже
*/

// Изменение Гет параметров
const sortHandler = async () => {
  console.log('Сортировка');

  await navigateTo({
    query: {},
  });
};
</script>

<template>
  <div class="sort">
    <UiButton
      title="По умолчанию"
      color="var(--black)"
      bg="#f1f4f4"
      @btn-click="sortHandler"
      class="sort__btn"
    >
      <template #img_right>
        <ImagesSort class="sort__btn_img" />
      </template>
    </UiButton>
  </div>
</template>

<style lang="css" scoped>
.sort__btn {
  width: 230px;
  height: 61px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 12px;
  justify-content: space-between;
  padding: 0 24px;
}

.sort__btn_img {
  width: 20px;
  height: 20px;
  color: #898989;
}
</style>
