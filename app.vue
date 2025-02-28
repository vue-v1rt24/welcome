<script setup lang="ts">
const route = useRoute();
const theme = useTheme();

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
