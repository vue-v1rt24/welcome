<script setup lang="ts">
const route = useRoute();
const theme = useTheme();

// Карта Яндекса
const { apiYandexCardKey } = useRuntimeConfig().public;

useHead({
  script: [
    { src: `https://api-maps.yandex.ru/v3/?apikey=${apiYandexCardKey}&lang=ru_RU`, defer: true },
  ],
});
// /Карта Яндекса

//
watchEffect(() => {
  if (route.path === '/' || route.path === '/agency') {
    theme.value = true;
  } else {
    theme.value = false;
  }
});
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>
