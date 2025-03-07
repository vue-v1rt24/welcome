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
      <input type="text" @input="changeVal($event, 'ot')" v-maska="options" />
      <span class="valuta">₽</span>
    </label>

    <label class="price__label">
      <span class="ot">До</span>
      <input type="text" @input="changeVal($event, 'do')" v-maska="options" />
      <span class="valuta">₽</span>
    </label>
  </div>
</template>

<style lang="css" scoped>
.price {
  display: flex;
  column-gap: 20px;
  border: 2px solid var(--line-gray);
  border-radius: 12px;
  padding: 20px 24px;
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
    right: -12px;
    width: 2px;
    height: 18px;
    background-color: var(--line-gray);
  }

  /*  */
  input {
    border: none;
  }
}

/*  */
.ot {
  font-weight: 500;
  font-size: 17px;
  color: #abb2b3;
}

.valuta {
  font-weight: 600;
  font-size: 17px;
  color: var(--gray-text);
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
