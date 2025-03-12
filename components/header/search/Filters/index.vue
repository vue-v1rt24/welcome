<script setup lang="ts">
defineProps<{
  front?: boolean;
}>();

//
const titles = ['Квартиры', 'Новостройки', 'Дома', 'Участок', 'Коммерческая', 'Гаражи'] as const;
type TypeTitles = (typeof titles)[number];

// Компонент по умолчанию
const nameFilter = ref<TypeTitles>('Квартиры');

// Подгрузка компонентов
const currentFilter = computed(() =>
  nameFilter.value === titles[1]
    ? resolveComponent('LazyHeaderSearchFiltersNovostroiki')
    : nameFilter.value === titles[2]
    ? resolveComponent('LazyHeaderSearchFiltersDoma')
    : nameFilter.value === titles[3]
    ? resolveComponent('LazyHeaderSearchFiltersUchastok')
    : nameFilter.value === titles[4]
    ? resolveComponent('LazyHeaderSearchFiltersCommercheskaya')
    : nameFilter.value === titles[5]
    ? resolveComponent('LazyHeaderSearchFiltersGaragi')
    : resolveComponent('LazyHeaderSearchFiltersKvartirs'),
);
</script>

<template>
  <div :class="{ front }">
    <!-- Кнопки фильтров -->
    <div class="filters_btn_wrap">
      <UiButton
        v-for="item in titles"
        :key="item"
        :title="item"
        color="var(--black)"
        color-hover="var(--black)"
        color-active="var(--cloud-light)"
        bg="var(--cloud-light)"
        bg-hover="#e5f1f3"
        bg-active="var(--primary)"
        :active="nameFilter === item"
        @btn-click="nameFilter = item"
        class="filter_btn"
      />
    </div>

    <!-- Фильтры -->
    <div class="filters_wrap">
      <Transition name="slide-fade" mode="out-in">
        <KeepAlive>
          <component :is="currentFilter" />
        </KeepAlive>
      </Transition>
    </div>
  </div>
</template>

<style lang="css" scoped>
.filters_btn_wrap {
  display: flex;
  column-gap: 12px;
  margin-bottom: 24px;
}

.filter_btn {
  font-weight: 600;
  font-size: 18px;
  border-radius: 8px;
  padding: 14px 24px;
}

/*  */

.filters_wrap {
  background-color: white;

  /*  */
  .front & {
    padding: 24px;
  }
}

/* Анимация переключения фильтров */

/* .slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.5s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
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
