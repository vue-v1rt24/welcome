// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  //
  modules: ['@nuxt/image', '@prisma/nuxt', 'nuxt-scheduler', 'nuxt-viewport'],

  //
  runtimeConfig: {},

  //
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
    },
  },

  //
  css: ['assets/css/index.css'],

  //
  experimental: {
    typedPages: true,
  },

  //
  router: {
    options: {
      linkActiveClass: 'active',
      linkExactActiveClass: 'active',
    },
  },

  // Настройка изображений (плагин @nuxt/image)
  image: {
    domains: ['https://storage.yandexcloud.net'],
  },

  // Настройка размеров разрешения экрана (плагин nuxt-viewport)
  viewport: {
    breakpoints: {
      screen1024: 1024,
      screen1200: 1200,
      screen1280: 1280,
      screen1300: 1300,
      screen1600: 1600,

      screen768: 768,
      screen576: 576,
      screen320: 320,
    },
  },
});
