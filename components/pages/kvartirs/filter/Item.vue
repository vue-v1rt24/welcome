<script setup lang="ts">
const dataFilter = reactive({
  newFlat: [] as string[],

  priceOt: '',
  priceDo: '',

  areaOt: '',
  areaDo: '',

  locationCity: '',
  locationStreet: '',
  locationArea: '',

  buildingName: '',

  livingSpaceOt: '',
  livingSpaceDo: '',

  kitchenSpaceOt: '',
  kitchenSpaceDo: '',

  ceilingHeight: '',

  bathroomUnit: '',

  floor: '',

  renovation: '',

  roomsType: '',

  balcony: '',

  apartments: '',

  buildingSeries: '',

  buildingType: '',

  heatingSupply: '',

  parkingType: '',

  floorsTotalOt: '',
  floorsTotalDo: '',

  builtYearOt: '',
  builtYearDo: '',
});
</script>

<template>
  <div class="filter">
    <!-- Тип недвижимости -->
    <div class="input_group">
      <span class="input_group__title">Тип недвижимости</span>

      <div class="input_group__item">
        <UiFilterBtnInput
          class="input_group__item_nedvizh"
          title="Вторичная"
          value="0"
          v-model="dataFilter.newFlat"
        />
        <UiFilterBtnInput
          class="input_group__item_nedvizh"
          title="В новостройке"
          value="1"
          v-model="dataFilter.newFlat"
        />
      </div>
    </div>

    <!-- Цена -->
    <div class="input_group">
      <span class="input_group__title">Цена</span>

      <div class="input_group__item">
        <UiFilterInput leftText="от" sup rightText="₽" v-model="dataFilter.priceOt" />
        <UiFilterInput leftText="до" sup rightText="₽" v-model="dataFilter.priceDo" />
      </div>
    </div>

    <!-- Общая площадь -->
    <div class="input_group">
      <span class="input_group__title">Общая площадь</span>

      <div class="input_group__item">
        <UiFilterInput leftText="от" sup rightText="м <sup>2</sup>" v-model="dataFilter.areaOt" />
        <UiFilterInput leftText="до" sup rightText="м <sup>2</sup>" v-model="dataFilter.areaDo" />
      </div>
    </div>

    <!-- Город, Район -->
    <div class="input_group flex">
      <div>
        <span class="input_group__title">Город</span>

        <div class="input_group__item">
          <UiFilterSelect
            :list="['Город 1', 'Город 2']"
            v-model="dataFilter.locationCity"
            :reset="false"
            class="location__select"
          />
        </div>
      </div>

      <div>
        <span class="input_group__title">Район</span>

        <div class="input_group__item">
          <UiFilterSelect
            :list="['Район 1', 'Район 2']"
            v-model="dataFilter.locationArea"
            :reset="false"
            class="location__select"
          />
        </div>
      </div>
    </div>

    <!-- Улица, Жилой комплекс -->
    <div class="input_group flex">
      <div>
        <span class="input_group__title">Улица</span>

        <div class="input_group__item">
          <UiFilterSelect
            :list="['Улица 1', 'Улица 2']"
            v-model="dataFilter.locationStreet"
            :reset="false"
            class="location__select"
          />
        </div>
      </div>

      <div>
        <span class="input_group__title">Жилой комплекс</span>

        <div class="input_group__item">
          <UiFilterSelect
            :list="['Жилой комплекс 1', 'Жилой комплекс 2']"
            v-model="dataFilter.buildingName"
            :reset="false"
            class="location__select"
          />
        </div>
      </div>
    </div>

    <!-- Жилая площадь, Площадь кухни -->
    <div class="input_group flex">
      <div>
        <span class="input_group__title">Жилая площадь</span>

        <div class="input_group__item">
          <UiFilterInput
            leftText="от"
            sup
            rightText="м <sup>2</sup>"
            v-model="dataFilter.livingSpaceOt"
          />

          <UiFilterInput
            leftText="до"
            sup
            rightText="м <sup>2</sup>"
            v-model="dataFilter.livingSpaceDo"
          />
        </div>
      </div>

      <div>
        <span class="input_group__title">Площадь кухни</span>

        <div class="input_group__item">
          <UiFilterInput
            leftText="от"
            sup
            rightText="м <sup>2</sup>"
            v-model="dataFilter.kitchenSpaceOt"
          />

          <UiFilterInput
            leftText="до"
            sup
            rightText="м <sup>2</sup>"
            v-model="dataFilter.kitchenSpaceDo"
          />
        </div>
      </div>
    </div>

    <!-- Высота потолков, Санузел -->
    <div class="input_group flex">
      <div>
        <span class="input_group__title">Высота потолков</span>

        <div class="input_group__item">
          <UiFilterSelect
            :list="['Высота потолков 1', 'Высота потолков 2']"
            v-model="dataFilter.ceilingHeight"
            :reset="false"
            class="location__select"
          />
        </div>
      </div>

      <div>
        <span class="input_group__title">Санузел</span>

        <div class="input_group__item">
          <UiFilterSelect
            :list="['Санузел 1', 'Санузел 2']"
            v-model="dataFilter.bathroomUnit"
            :reset="false"
            class="location__select"
          />
        </div>
      </div>
    </div>

    <!-- Этаж, Состояние -->
    <div class="input_group flex">
      <div>
        <span class="input_group__title">Этаж</span>

        <div class="input_group__item">
          <UiFilterSelect
            :list="['Этаж 1', 'Этаж 2']"
            v-model="dataFilter.floor"
            :reset="false"
            class="location__select"
          />
        </div>
      </div>

      <div>
        <span class="input_group__title">Состояние</span>

        <div class="input_group__item">
          <UiFilterSelect
            :list="['Состояние 1', 'Состояние 2']"
            v-model="dataFilter.renovation"
            :reset="false"
            class="location__select"
          />
        </div>
      </div>
    </div>

    <!-- Планировка, Балкон, лоджия -->
    <div class="input_group flex">
      <div>
        <span class="input_group__title">Планировка</span>

        <div class="input_group__item">
          <UiFilterSelect
            :list="['Планировка 1', 'Планировка 2']"
            v-model="dataFilter.roomsType"
            :reset="false"
            class="location__select"
          />
        </div>
      </div>

      <div>
        <span class="input_group__title">Балкон, лоджия</span>

        <div class="input_group__item">
          <UiFilterSelect
            :list="['Балкон', 'Лоджия']"
            v-model="dataFilter.balcony"
            :reset="false"
            class="location__select"
          />
        </div>
      </div>
    </div>

    <!-- Апартаменты -->
    <div class="input_group">
      <span class="input_group__title">Апартаменты</span>

      <div class="input_group__item">
        <UiFilterBtnInput
          title="Без апартаментов"
          value="0"
          type="radio"
          v-model="dataFilter.apartments"
        />

        <UiFilterBtnInput
          title="Только апартаменты"
          value="1"
          type="radio"
          v-model="dataFilter.apartments"
        />
      </div>
    </div>

    <!-- Угловые -->
    <!-- <div class="input_group">
      <span class="input_group__title">Угловые</span>

      <div class="input_group__item">
        <UiFilterBtnInput title="Без угловых" value="0" type="radio" v-model="dataFilter" />
        <UiFilterBtnInput title="С угловыми" value="1" type="radio" v-model="dataFilter" />
      </div>
    </div> -->

    <!-- Тип дома, Материал стен -->
    <div class="input_group flex">
      <div>
        <span class="input_group__title">Тип дома</span>

        <div class="input_group__item">
          <UiFilterSelect
            :list="['Тип дома 1', 'Тип дома 2']"
            v-model="dataFilter.buildingSeries"
            :reset="false"
            class="location__select"
          />
        </div>
      </div>

      <div>
        <span class="input_group__title">Материал стен</span>

        <div class="input_group__item">
          <UiFilterSelect
            :list="['Материал стен 1', 'Материал стен 2']"
            v-model="dataFilter.buildingType"
            :reset="false"
            class="location__select"
          />
        </div>
      </div>
    </div>

    <!-- Отопление, Парковка -->
    <div class="input_group flex">
      <div>
        <span class="input_group__title">Отопление</span>

        <div class="input_group__item">
          <UiFilterSelect
            :list="['Да', 'Нет']"
            v-model="dataFilter.heatingSupply"
            :reset="false"
            class="location__select"
          />
        </div>
      </div>

      <div>
        <span class="input_group__title">Парковка</span>

        <div class="input_group__item">
          <UiFilterSelect
            :list="['Парковка 1', 'Парковка 2']"
            v-model="dataFilter.parkingType"
            :reset="false"
            class="location__select"
          />
        </div>
      </div>
    </div>

    <!-- Этажность, Год постройки -->
    <div class="input_group flex">
      <div>
        <span class="input_group__title">Этажность</span>

        <div class="input_group__item">
          <UiFilterInput leftText="от" v-model="dataFilter.floorsTotalOt" />

          <UiFilterInput leftText="до" v-model="dataFilter.floorsTotalDo" />
        </div>
      </div>

      <div>
        <span class="input_group__title">Год постройки</span>

        <div class="input_group__item">
          <UiFilterInput leftText="от" v-model="dataFilter.builtYearOt" />

          <UiFilterInput leftText="до" v-model="dataFilter.builtYearDo" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.filter {
  position: absolute;
  top: 80px;
  left: 0;
  z-index: 101;

  max-width: 744px;
  background-color: var(--white);

  display: flex;
  flex-direction: column;
  row-gap: 20px;

  border-radius: 32px;
  padding: 42px;
}

/*  */

.input_group {
  &.flex {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
  }
}

.input_group__title {
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  display: block;
  margin-bottom: 14px;
}

/*  */
.input_group__item {
  display: flex;
  column-gap: 20px;
}

/*  */
.input_group__item_nedvizh {
  font-size: 16px;
}
</style>
