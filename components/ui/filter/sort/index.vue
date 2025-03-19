<script setup lang="ts">
import { EnumSort } from '#shared/types/db.types';

//
const route = useRoute();

// Получаем параметр сортировки с адресной строки
const sortParam = route.query?.sort as EnumSort;

// Заголовок выпадающего списка
const titleBtn = ref<EnumSort>(sortParam || EnumSort.default);

// Открытие / Закрытие выпадающего списка
const isOpenSelect = ref(false);

// Изменение Гет параметров
const sortHandler = async (title: EnumSort) => {
  isOpenSelect.value = false;

  //
  await navigateTo({
    query: {
      ...route.query,
      sort: title,
    },
  });
};
</script>

<template>
  <div class="sort">
    <UiButton
      :title="titleBtn"
      color="var(--black)"
      color-hover="var(--primary)"
      color-active="var(--black)"
      bg="#f1f4f4"
      bg-hover="#f3f8f4"
      bg-active="#f3f8f4"
      @btn-click="isOpenSelect = !isOpenSelect"
      class="sort__btn"
    >
      <template #img_right>
        <ImagesSort class="sort__btn_img" />
      </template>
    </UiButton>

    <!--  -->
    <ul :class="['sort__list', { open: isOpenSelect }]">
      <li>
        <UiFilterBtnInput
          type="radio"
          :title="EnumSort.default"
          :value="EnumSort.default"
          v-model="titleBtn"
          @click="sortHandler(EnumSort.default)"
          class="sort__list_option"
        />
      </li>
      <li>
        <UiFilterBtnInput
          type="radio"
          :title="EnumSort.new"
          :value="EnumSort.new"
          v-model="titleBtn"
          @click="sortHandler(EnumSort.new)"
          class="sort__list_option"
        />
      </li>
      <li>
        <UiFilterBtnInput
          type="radio"
          :title="EnumSort.deshevle"
          :value="EnumSort.deshevle"
          v-model="titleBtn"
          @click="sortHandler(EnumSort.deshevle)"
          class="sort__list_option"
        />
      </li>
      <li>
        <UiFilterBtnInput
          type="radio"
          :title="EnumSort.dorozhe"
          :value="EnumSort.dorozhe"
          v-model="titleBtn"
          @click="sortHandler(EnumSort.dorozhe)"
          class="sort__list_option"
        />
      </li>
    </ul>
  </div>
</template>

<style lang="css" scoped>
.sort {
  position: relative;
}

/*  */

.sort__btn {
  position: relative;
  z-index: 3;
  min-width: 230px;
  height: 61px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 12px;
  justify-content: space-between;
  column-gap: 32px;
  padding: 0 24px;
}

/*  */
.sort__btn_img {
  width: 20px;
  height: 20px;
  color: #898989;
}

/*  */

.sort__list {
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  background-color: var(--white);
  transform: translateY(-30px);
  border-radius: 32px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  row-gap: 6px;
  opacity: 0;
  pointer-events: none;
  z-index: 2;
  transition: transform var(--speed-animate), opacity var(--speed-animate);

  /*  */
  &.open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }
}

.sort__list_option {
  height: 43px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
