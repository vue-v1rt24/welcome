<script setup lang="ts">
import { LazyHeaderSearchFiltersKvartirs } from '#components';

// const currentComponent = shallowRef(LazyHeaderSearchFiltersKvartirs);
const comp = ref<'Первый' | 'Второй' | 'Третий' | 'Четвёртый' | 'Пятый' | 'Шестой'>('Первый');

const currentComp = computed(() =>
  comp.value === 'Первый'
    ? resolveComponent('LazyHeaderSearchFiltersKvartirs')
    : comp.value === 'Второй'
    ? resolveComponent('LazyHeaderSearchFiltersNovostroiki')
    : comp.value === 'Третий'
    ? resolveComponent('LazyHeaderSearchFiltersDoma')
    : comp.value === 'Четвёртый'
    ? resolveComponent('LazyHeaderSearchFiltersUchastok')
    : comp.value === 'Пятый'
    ? resolveComponent('LazyHeaderSearchFiltersCommercheskaya')
    : comp.value === 'Шестой'
    ? resolveComponent('LazyHeaderSearchFiltersGaragi')
    : 'div',
);
</script>

<template>
  <div>
    <div class="filters_btn">
      <label>
        <input type="radio" v-model="comp" value="Первый" />
        <input type="radio" v-model="comp" value="Второй" />
        <input type="radio" v-model="comp" value="Третий" />
        <input type="radio" v-model="comp" value="Четвёртый" />
        <input type="radio" v-model="comp" value="Пятый" />
        <input type="radio" v-model="comp" value="Шестой" />
      </label>
    </div>

    <!--  -->
    <Transition name="slide-fade" mode="out-in">
      <KeepAlive>
        <component :is="currentComp" />
      </KeepAlive>
    </Transition>
  </div>

  <!-- 
   <LazyHeaderSearchFiltersKvartirs />
   <LazyHeaderSearchFiltersNovostroiki />
   <LazyHeaderSearchFiltersDoma />
   <LazyHeaderSearchFiltersUchastok />
   <LazyHeaderSearchFiltersCommercheskaya />
   <LazyHeaderSearchFiltersGaragi />
   -->
</template>

<style lang="css" scoped>
/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
} */

/*  */

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
