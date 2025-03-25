<script setup lang="ts">
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

//
const { data } = await useFetch('/api/pages/kvartirs/otherProject');
console.log(data.value);

//
let swiper: Swiper | null = null;

//
const swiperRef = useTemplateRef('swiperRef');

//
onMounted(() => {
  swiper = new Swiper(swiperRef.value!, {
    modules: [Navigation],
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
    slidesPerView: 'auto',
    mousewheel: false,
    // allowTouchMove: false,
  });

  //
  swiperRef.value?.addEventListener('mousemove', (evt: MouseEvent) => {
    console.log(swiperRef.value?.offsetLeft);
  });
});

//
onUnmounted(() => {
  if (swiper && swiper.destroy) {
    swiper.destroy();
  }
});

//
// Передача координат карты в карту
const modal = useTemplateRef('modal');
const cardData = ref<{ address: string; coords: number[]; link: string } | null>(null);

const sendCardData = (address: string, coords: number[], link: string) => {
  console.log(address, coords);
  cardData.value = { address, coords, link };
  modal.value?.modalOpen();
};
</script>

<template>
  <div>
    <div class="swiper" ref="swiperRef">
      <div class="swiper-wrapper">
        <div v-for="(card, idx) in data" :key="card.id" class="swiper-slide swiper_slide_my">
          <SlidersOtherProjectsCard :idx :card @card-data="sendCardData" />
        </div>
      </div>

      <!--  -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>

    <!--  -->
    <!-- <SlidersOtherProjectsCard
      v-for="(card, idx) in data"
      :key="card.id"
      :idx
      :card
      @card-data="sendCardData"
    /> -->

    <!-- Карта в модальном окне -->
    <UiModal ref="modal" @close-modal="cardData = null">
      <LazyUiMapNedvizhimost v-if="cardData?.coords.length" :card-data="cardData" />
    </UiModal>
  </div>
</template>

<style lang="css" scoped>
.swiper-slide.swiper_slide_my {
  width: 378px;
}
</style>
