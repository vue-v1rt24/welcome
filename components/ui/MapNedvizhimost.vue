<script setup lang="ts">
import type { YMapLocationRequest, LngLat, YMap } from '@yandex/ymaps3-types';

const { cardData } = defineProps<{
  cardData: { address: string; coords: number[]; link: string };
}>();

//
const elCard = useTemplateRef('app');
let map: YMap | null = null;

//
onMounted(async () => {
  await ymaps3.ready.then(() => {
    ymaps3.import.registerCdn(
      'https://cdn.jsdelivr.net/npm/{package}',
      '@yandex/ymaps3-default-ui-theme@0.0',
    );
  });

  const LOCATION: YMapLocationRequest = {
    center: cardData.coords as LngLat,
    zoom: 15,
  };

  // Ожидание загрузки всех элементов api
  // await ymaps3.ready;
  const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } = ymaps3;

  // Импортируйте пакет, чтобы добавить маркер по умолчанию
  // @ts-ignore
  const { YMapDefaultMarker } = await ymaps3.import('@yandex/ymaps3-default-ui-theme');

  // Инициализируйте карту
  map = new YMap(
    // Передайте ссылку на HTMLЭлемент контейнера
    elCard.value!,
    // Передайте параметры инициализации карты
    { location: LOCATION },
    [
      // Добавьте слой схемы карты
      new YMapDefaultSchemeLayer({}),
      // Добавьте слой геообъектов для отображения маркеров
      new YMapDefaultFeaturesLayer({}),
    ],
  );

  // Создайте маркеры по умолчанию и добавьте их на карту
  const marker = new YMapDefaultMarker({
    coordinates: cardData.coords as LngLat,
    title: cardData.address,
    // color: 'lavender',
    size: 'normal',
    iconName: 'fallback',
  });

  // Добавляем маркеры на карту
  map.addChild(marker);
});

//
onUnmounted(() => {
  if (map && map.destroy) {
    map.destroy();
  }
});
</script>

<template>
  <div ref="app" class="card">
    <NuxtLink class="card__link" :to="`/realty/${cardData.link}`">Смотреть объект</NuxtLink>
  </div>
</template>

<style lang="css" scoped>
.card {
  position: relative;
  width: 1192px;
  height: 660px;
  border-radius: 32px;
  overflow: hidden;
}

/*  */
.card__link {
  position: absolute;
  bottom: 42px;
  left: 42px;
  width: 194px;
  height: 58px;

  font-weight: 700;
  font-size: 16px;
  color: var(--white);

  background-color: var(--primary);
  border-radius: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1;
}
</style>
