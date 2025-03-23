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
    salesAgent: {
      phone: string;
      category: string;
      organization: string;
      name: string;
      url: string;
      email: string;
      photo: string;
      whatsappPhone: string;
    };
    price: number;
    rooms: number;
  };
}>();

console.log(card);

//
const emit = defineEmits<{
  cardData: [address: string, coords: number[], link: string];
}>();

// Отправка координат карты
const sendCoords = () => {
  emit(
    'cardData',
    card.location.address,
    [+card.location.longitude, +card.location.latitude],
    card.id,
  );
};
</script>

<template>
  <div class="card">
    <NuxtLink class="card__link" :to="`/realty/${card.id}`">
      <div class="card__images">
        <PagesKvartirsCardSliderImages :idx :images="card.image" />
      </div>
    </NuxtLink>

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
  border-radius: 32px;
  overflow: hidden;

  /*  */
  @media (max-width: 1280px) {
    border-radius: 26px;
  }

  /*  */
  .single & {
    width: 100%;
  }
}

/*  */
.card__link {
  color: inherit;
}

/*  */
.card__images {
  height: 245px;

  /*  */
  @media (max-width: 1366px) {
    height: 180px;
  }

  @media (max-width: 768px) {
    height: 216px;
  }

  @media (max-width: 576px) {
    height: 207px;
  }
}

/*  */

.card__content {
  border: 2px solid var(--line-gray);
  border-radius: 0 0 32px 32px;
  padding: 24px;

  /*  */
  @media (max-width: 1280px) {
    border-radius: 0 0 26px 26px;
    padding: 20px;
  }

  @media (max-width: 768px) {
    padding: 18px;
  }
}

/*  */
.card__price {
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  display: flex;
  column-gap: 8px;
  margin-bottom: 14px;

  /*  */
  @media (max-width: 1280px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    margin-bottom: 12px;
  }
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
  @media (max-width: 1280px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

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

  /*  */
  @media (max-width: 1280px) {
    font-size: 14px;
    margin-bottom: 6px;
  }
}

/*  */

.card__map {
  position: relative;
  font-weight: 400;
  font-size: 14px;
  line-height: 125%;
  color: #0982e6;
  text-decoration: underline solid #0982e6;
  cursor: pointer;
  z-index: 2;
}
</style>
