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

  /*  */
  @media (max-width: 768px) {
    min-width: 190px;
    height: 56px;
    font-size: 15px;
  }

  @media (max-width: 576px) {
    min-width: 150px;
    height: 43px;
    font-size: 14px;
    column-gap: 10px;
    padding: 12px 14px;
  }
}

/*  */
.sort__btn_img {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  color: #898989;

  /*  */
  @media (max-width: 768px) {
    width: 18px;
    height: 16px;
  }

  @media (max-width: 576px) {
    width: 14px;
    height: 14px;
  }
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
  box-shadow: 0 0 10px 0 #cccccc;
  z-index: 2;
  transition: transform var(--speed-animate), opacity var(--speed-animate);

  /*  */
  @media (max-width: 768px) {
    top: 70px;
    border-radius: 20px;
    padding: 16px;
  }

  @media (max-width: 576px) {
    top: 60px;
    left: -48px;
    width: 200px;
  }

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

  /*  */
  @media (max-width: 768px) {
    font-size: 12px;
  }
}
</style>
