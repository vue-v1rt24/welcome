<script setup lang="ts" generic="T extends string">
const { list, reset } = defineProps<{
  list: T[];
  absolute?: boolean;
  reset?: boolean;
}>();

//
const model = defineModel<string>({ required: true });

//
const isOpen = ref(false);
const selectVal = ref('Выберите');

// Вычисление высоты открывающегося списка
const getHeight = computed(() =>
  list.length === 1 ? '42px' : list.length === 2 ? '90px' : '140px',
);

//
watch(
  () => [model.value, reset],
  ([val1, val2]) => {
    // Установка значения заголовку выбранного варианта
    if (val1) {
      selectVal.value = val1 as string;
      isOpen.value = false;
    }

    // Сброс заголовка списка
    if (val2) {
      selectVal.value = 'Выберите';
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
    <div class="select__options_wrap" :style="{ '--selectHeight': getHeight }">
      <ul class="select__options">
        <template v-for="item in list" :key="item">
          <li v-if="item.length" class="select__options_option_item">
            <UiFilterBtnInput
              type="radio"
              :title="item"
              :value="item"
              v-model="model"
              class="select__options_option"
            />
          </li>
        </template>
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
  height: 0;
  opacity: 0;
  background-color: var(--white);
  transition: height 0.3s, opacity 0.3s, overflow-y 0.3s;

  /*  */
  .select.open & {
    /* height: 140px; */
    height: var(--selectHeight);
    opacity: 1;
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
  /* height: 140px; */
  height: var(--selectHeight);
  overflow-y: auto;
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
