<script setup lang="ts">
import type { YMapLocationRequest } from '@yandex/ymaps3-types';

//
const { apiYandexCardKey } = useRuntimeConfig().public;

//
useHead({
  script: [
    { src: `https://api-maps.yandex.ru/v3/?apikey=${apiYandexCardKey}&lang=ru_RU`, defer: true },
  ],
});

//
const app = useTemplateRef('app');

onMounted(async () => {
  // await ymaps3.ready;
  const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } = ymaps3;

  // Настройки карты
  const LOCATION: YMapLocationRequest = {
    center: [37.588144, 55.733842],
    zoom: 9,
  };

  // Создание карты
  const map = new YMap(app.value!, {
    location: LOCATION,
    // showScaleInCopyrights: true, // Покажите масштаб карты рядом с авторским правом
  });

  // Добавляем слой для отображения схематической карты (передаём тему карты)
  map.addChild(
    new YMapDefaultSchemeLayer({
      // customization: settingsMap as [], // файл с темой. Подключаем в верху (import settingsMap from '~/components/footer/Locations/mapSettings.json';)
    }),
  );

  // Добавьте слой для маркеров
  map.addChild(new YMapDefaultFeaturesLayer({}));

  // Метки
  /* const markerStavropol = new YMapDefaultMarker({
  coordinates: [45.066418, 42.013739],
  color: 'lightgreen',
  size: 'normal',
  iconName: 'fallback',
} as YMapDefaultMarkerProps);
map.addChild(markerStavropol);

const markerMixailovsk = new YMapDefaultMarker({
  coordinates: [45.074235, 41.94332],
  color: 'lightgreen',
  size: 'normal',
  iconName: 'fallback',
} as YMapDefaultMarkerProps);
map.addChild(markerMixailovsk); */
});
</script>

<template>
  <div ref="app" style="width: 600px; height: 400px"></div>
</template>

<style lang="css" scoped></style>
