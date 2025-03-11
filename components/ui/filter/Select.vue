<script setup lang="ts">
defineProps<{
  absolute?: boolean;
}>();

//
const model = defineModel<string>({ required: true });

//
const isOpen = ref(false);
const selectVal = ref('Выберите');

//
watch(
  () => model.value,
  (val) => {
    if (val) {
      selectVal.value = val;
      isOpen.value = false;
    }
  },
);
</script>

<template>
  <div :class="['select', { absolute, open: isOpen }]">
    <div class="select__title" @click="isOpen = !isOpen">
      <span>{{ selectVal }}</span>
      <ImagesArrowDown class="select__arrow" />
    </div>

    <!--  -->
    <div class="select__options_wrap">
      <ul class="select__options">
        <li class="select__options_option_item">
          <UiFilterBtnInput
            class="select__options_option"
            type="radio"
            title="Вариант 1"
            value="Вариант 1"
            v-model="model"
          />
        </li>
        <li class="select__options_option">
          <UiFilterBtnInput
            class="select__options_option"
            type="radio"
            title="Вариант 2"
            value="Вариант 2"
            v-model="model"
          />
        </li>
        <li class="select__options_option">
          <UiFilterBtnInput
            class="select__options_option"
            type="radio"
            title="Вариант 3"
            value="Вариант 3"
            v-model="model"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="css" scoped>
.select {
  position: relative;
}

/*  */

.select__title {
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 15px;
  color: var(--gray-text);

  border: 2px solid var(--line-gray);
  border-radius: 12px;
  padding: 16px 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
}

/*  */
.select__arrow {
  color: #abb2b3;
  transform: rotate(0deg);
  transition: transform var(--speed-animate);

  /*  */
  .select.open & {
    color: var(--primary);
    transform: rotate(-180deg);
  }
}

/*  */

.select__options_wrap {
  background-color: var(--white);
  display: grid;
  grid-template-rows: 0fr;
  overflow: hidden;
  transition: grid-template-rows var(--speed-animate);

  /*  */
  .select.open & {
    grid-template-rows: 1fr;
  }

  /* Если есть класс absolute */
  .select.absolute & {
    position: absolute;
    width: 100%;
    z-index: 1;
  }
}

/*  */
.select__options {
  min-height: 0;
  display: flex;
  flex-direction: column;
  row-gap: 6px;
  margin-top: 0;
  transition: margin-top var(--speed-animate);

  /*  */
  .select.open & {
    margin-top: 12px;
  }
}

/*  */
.select__options_option {
  display: block;
}
</style>
