<script setup lang="ts">
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

//
const {
  idx,
  width = '100%',
  height = '100%',
} = defineProps<{
  idx: number;
  images: string[] | string | null;
  width?: string;
  height?: string;
}>();

//
let swiper: Swiper | null = null;

const controller = new AbortController();
const { signal } = controller;

//
const swiperRef = useTemplateRef('swiperRef');

//
onMounted(() => {
  swiper = new Swiper(`.swiper-${idx}`, {
    modules: [Pagination],
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  });

  //
  swiperRef.value?.addEventListener(
    'mousemove',
    (evt: MouseEvent) => {
      if (!swiper) return;

      const sliderLength = swiper.slides.length;

      if (sliderLength > 1) {
        const sliderWidth = swiper.width;
        const sliderPath = Math.round(sliderWidth / sliderLength);
        const sliderMousePos = evt.clientX - swiperRef.value!.offsetLeft;
        const sliderSlide = Math.floor(sliderMousePos / sliderPath);
        swiper.slideTo(sliderSlide);
      }
    },
    { signal },
  );
});

//
onUnmounted(() => {
  if (swiper && swiper.destroy) {
    swiper.destroy();
  }

  controller.abort();
});
</script>

<template>
  <div :class="['swiper', 'swiper_card', `swiper-${idx}`]" ref="swiperRef">
    <div v-if="images?.length && typeof images === 'object'" class="swiper-wrapper">
      <template v-for="(img, idx) in images" :key="img">
        <div v-if="idx < 5" class="swiper-slide">
          <img :src="img" alt="" loading="lazy" />
        </div>
      </template>
    </div>

    <div
      v-if="images?.length && typeof images === 'string' && images.length"
      class="swiper-wrapper"
    >
      <div class="swiper-slide">
        <img :src="images" alt="" loading="lazy" />
      </div>
    </div>

    <div v-else class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="/images/nedvizhimost/zaglushka_nedvizh.jpg" alt="" loading="lazy" />
      </div>
    </div>

    <!-- Точки -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<style lang="css" scoped>
.swiper {
  width: v-bind(width);
  height: v-bind(height);
}

/*  */
.swiper-slide {
  /*  */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>

<style>
.swiper_card {
  &:hover .swiper-pagination {
    opacity: 1;
  }

  /*  */
  .swiper-pagination {
    opacity: 0;
    transition: opacity var(--speed-animate);

    /*  */
    .swiper-pagination-bullet {
      width: 32px;
      height: 4px;
      background-color: var(--white);
      opacity: 1;
      border-radius: 20px;

      /*  */
      &.swiper-pagination-bullet-active {
        background-color: var(--primary);
      }
    }
  }
}
</style>
