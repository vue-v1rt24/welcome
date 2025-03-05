<script setup lang="ts">
import { LazyHeaderSearchFiltersKvartirs } from '#components';

const currentComponent = shallowRef(LazyHeaderSearchFiltersKvartirs);
</script>

<template>
  <div>
    <div class="filters_btn">
      <label>
        <input type="radio" v-model="currentComponent" value="LazyHeaderSearchFiltersKvartirs" />
      </label>
    </div>

    <!--  -->
    <Transition name="fade" mode="out-in">
      <KeepAlive>
        <component :is="currentComponent" />
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
