<script setup lang="ts">
import { formatNumber } from '#shared/utils/formatNumber';

const { card } = defineProps<{
  idx: number;
  card: {
    area: number;
    description: string;
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
    buildingName: string | null;
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

      <!--  -->
      <p class="card__text dots_text" data-allow-mismatch>{{ card.description }}</p>
    </div>

    <!--  -->
    <div class="card__price_tel">
      <div class="card__price_tel__bx1">
        <div class="card__price">
          <span>{{ formatNumber(card.price) }}</span>
          <span>₽</span>
        </div>

        <!--  -->
        <div v-if="!card?.buildingName" class="card__price_tel__gk">
          <!-- {{ card.buildingName }} -->
          ЖК “Параллель”
        </div>
      </div>

      <!--  -->
      <div class="card__price_tel__bx2">
        <UiLink class="card__price_tel__bx2_link" :link="`/realty/${card.id}`" title="Подробнее" />

        <UiLink
          class="card__price_tel__bx2_tel"
          external
          :link="`tel:${card.salesAgent.phone}`"
          bg="var(--cloud-light)"
        >
          <ImagesTel class="card__price_tel__bx2_link_img" />
        </UiLink>
      </div>
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

  /* Горизонтальный вид */
  .single & {
    width: 100%;
    border: 2px solid var(--line-gray);
    display: flex;
    padding: 42px;
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

  /* Горизонтальный вид */
  .single & {
    width: 410px;
    height: 266px;
    border-radius: 24px;
    overflow: hidden;
  }
}

/*  */

.card__content {
  border: 2px solid var(--line-gray);
  border-radius: 0 0 32px 32px;
  display: flex;
  flex-direction: column;
  padding: 24px;

  /*  */
  @media (max-width: 1280px) {
    border-radius: 0 0 26px 26px;
    padding: 20px;
  }

  @media (max-width: 768px) {
    padding: 18px;
  }

  /* Горизонтальный вид */
  .single & {
    max-width: 590px;
    border: none;
    padding: 0;
    margin-left: 42px;
    margin-right: 30px;
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

  /* Горизонтальный вид */
  .single .card__content & {
    display: none;
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

  /* Горизонтальный вид */
  .single & {
    font-family: var(--second-family);
    font-weight: 500;
    font-size: 24px;
    line-height: 125%;
    color: var(--black);
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

/*  */

.card__text {
  display: none;
  max-height: 96px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: var(--gray-text);
  margin-top: auto;

  /* Горизонтальный вид */
  .single & {
    display: -webkit-box;
  }
}

/*  */

.card__price_tel {
  display: none;
  flex-direction: column;
  margin-left: auto;

  /*  */
  .single & {
    display: flex;
  }

  /*  */

  .card__price {
    margin-bottom: 12px;
  }

  /*  */
  .card__price_tel__gk {
    font-weight: 400;
    font-size: 16px;
    line-height: 125%;
  }

  /*  */

  .card__price_tel__bx2 {
    display: flex;
    column-gap: 24px;
    margin-top: auto;
  }

  /*  */
  .card__price_tel__bx2_link {
    width: 152px;
    height: 59px;
    border-radius: 12px;
  }

  /*  */
  .card__price_tel__bx2_tel {
    width: 60px;
    height: 60px;
    border-radius: 10px;
  }

  /*  */
  .card__price_tel__bx2_link_img {
    width: 21px;
    height: 20px;
    color: var(--primary);
    transition: color var(--speed-animate);

    /*  */
    @media (hover: hover) {
      .card__price_tel__bx2_tel:hover & {
        color: white;
      }
    }

    @media (hover: none) {
      .card__price_tel__bx2_tel:active & {
        color: white;
      }
    }
  }
}
</style>
