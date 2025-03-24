// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  //
  modules: ['@nuxt/image', '@prisma/nuxt', 'nuxt-scheduler', 'nuxt-viewport'],

  //
  runtimeConfig: {
    public: {
      apiYandexCardKey: process.env.NUXT_PUBLIC_API_YANDEX_CARD_KEY,
    },
  },

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
    domains: ['https://storage.yandexcloud.net', 'https://2bishop.ru'],
    screens: {
      screen320: 320,
      screen576: 576,
      screen640: 640,
      screen768: 768,
      screen1024: 1024,
      screen1200: 1200,
      screen1280: 1280,
      screen1920: 1920,
    },
  },

  // Настройка размеров разрешения экрана (плагин nuxt-viewport)
  viewport: {
    breakpoints: {
      screen320: 320,
      screen576: 576,
      screen577: 577,
      screen751: 751,
      screen760: 760,
      screen761: 761,
      screen768: 768,
      screen769: 769,
      screen1024: 1024,
      screen1200: 1200,
      screen1201: 1201,
      screen1280: 1280,
      screen1300: 1300,
      screen1600: 1600,
    },
  },
});
