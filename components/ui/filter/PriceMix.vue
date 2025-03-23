<script setup lang="ts">
import type { MaskInputOptions } from 'maska';

//
const priceOt = defineModel('priceOt');
const priceDo = defineModel('priceDo');

// Для форматирования чисел
const options = reactive<MaskInputOptions>({
  mask: '#-#',
  eager: true,
  number: { locale: 'ru' },
});

//
const changeVal = (evt: Event, currentDefineModel: 'ot' | 'do') => {
  const target = evt.target as HTMLInputElement;
  const val = target.value;

  if (currentDefineModel === 'ot') {
    priceOt.value = +val.replace(/\s/g, '');
  } else {
    priceDo.value = +val.replace(/\s/g, '');
  }
};
</script>

<template>
  <div class="price">
    <label class="price__label">
      <span class="ot">От</span>
      <input type="text" @input="changeVal($event, 'ot')" :value="priceOt" v-maska="options" />
      <span class="valuta">₽</span>
    </label>

    <label class="price__label">
      <span class="ot">До</span>
      <input type="text" @input="changeVal($event, 'do')" :value="priceDo" v-maska="options" />
      <span class="valuta">₽</span>
    </label>
  </div>
</template>

<style lang="css" scoped>
.price {
  display: flex;
  column-gap: 50px;
  border: 2px solid var(--line-gray);
  border-radius: 12px;
  padding: 18px 24px;

  /*  */
  @media (max-width: 576px) {
    padding: 16px 20px;
  }
}

/*  */
.price__label {
  position: relative;
  display: flex;
  align-items: center;
  column-gap: 8px;

  /*  */
  &:first-child::after {
    content: '';
    position: absolute;
    top: 4px;
    right: -27px;
    width: 2px;
    height: 18px;
    background-color: var(--line-gray);
  }

  /*  */
  @media (max-width: 576px) {
    font-size: 15px;
  }

  /*  */
  input {
    width: 100%;
    border: none;
  }
}

/*  */
.ot {
  font-weight: 500;
  font-size: 17px;
  color: #abb2b3;

  /*  */
  @media (max-width: 576px) {
    font-size: 15px;
  }
}

.valuta {
  font-weight: 600;
  font-size: 17px;
  color: var(--gray-text);

  /*  */
  @media (max-width: 576px) {
    font-size: 15px;
  }
}

/*  */

input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type='number'] {
  -moz-appearance: textfield;
}
</style>
