<script setup lang="ts">
import { formatNumber } from '#shared/utils/formatNumber';

const { card } = defineProps<{
  idx: number;
  card: {
    area: number;
    image: string[];
    id: string;
    floor: number;
    floorsTotal: number;
    location: {
      region: string;
      address: string;
      country: string;
      latitude: string;
      longitude: string;
      localityName: string;
      subLocalityName: string;
    };
    price: number;
    rooms: number;
  };
}>();

//
const emit = defineEmits<{
  cardData: [address: string, coords: number[]];
}>();

// Отправка координат карты
const sendCoords = () => {
  emit('cardData', card.location.address, [+card.location.longitude, +card.location.latitude]);
};
</script>

<template>
  <div class="card">
    <div class="card__images">
      <PagesKvartirsCardSliderImages :idx :images="card.image" />
    </div>

    <!--  -->
    <div class="card__content">
      <div class="card__price">
        <span>{{ formatNumber(card.price) }}</span>
        <span>₽</span>
      </div>

      <!--  -->
      <ul class="card__kvar">
        <li>{{ card.rooms }}-комн.</li>
        <li>{{ card.area }} м<sup>2</sup></li>
        <li>{{ card.floor }}/{{ card.floorsTotal }} эт.</li>
      </ul>

      <!--  -->
      <div class="card__address">
        {{ card.location.address }}
      </div>

      <!--  -->
      <div class="card__map" @click="sendCoords">Смотреть на карте</div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.card {
  width: 378px;
  border-radius: 32px;
  overflow: hidden;
}

/*  */
.card__images {
  height: 245px;
}

/*  */

.card__content {
  border: 2px solid var(--line-gray);
  border-radius: 0 0 32px 32px;
  padding: 24px;
}

/*  */
.card__price {
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  display: flex;
  column-gap: 8px;
  margin-bottom: 14px;
}

/*  */

.card__kvar {
  font-weight: 500;
  font-size: 18px;
  line-height: 100%;
  display: flex;
  column-gap: 20px;
  margin-bottom: 14px;

  /*  */
  li {
    position: relative;

    /*  */
    &:not(:last-child):after {
      content: '';
      position: absolute;
      top: 50%;
      right: -12px;
      transform: translateY(-50%);
      width: 5px;
      height: 5px;
      background-color: var(--gray);
      border-radius: 50%;
    }
  }

  /*  */
  sup {
    font-size: 11px;
    transform: translate(0, -5px);
    display: inline-flex;
  }
}

/*  */

.card__address {
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  margin-bottom: 10px;
}

/*  */

.card__map {
  font-weight: 400;
  font-size: 14px;
  line-height: 125%;
  color: #0982e6;
  cursor: pointer;
}
</style>
