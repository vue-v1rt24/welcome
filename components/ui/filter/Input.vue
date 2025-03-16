<script setup lang="ts">
import type { MaskInputOptions } from 'maska';

//
defineProps<{
  singleText?: boolean;
  leftText?: string;
  rightText?: string;
  sup?: boolean;
}>();

//
const model = defineModel();

// Для форматирования чисел
const options = reactive<MaskInputOptions>({
  mask: '#-#',
  eager: true,
  number: { locale: 'ru' },
});

//
const changeVal = (evt: Event) => {
  const target = evt.target as HTMLInputElement;
  const val = target.value;
  model.value = +val.replace(/\s/g, '');
};
</script>

<template>
  <label class="label">
    <span v-if="leftText" class="title1">{{ leftText }}</span>

    <input v-if="singleText" type="text" v-model="model" />
    <input v-else type="text" @input="changeVal" :value="model" v-maska="options" />

    <span v-if="rightText && !sup" class="title2">{{ rightText }}</span>
    <span v-if="rightText && sup" class="title2" v-html="rightText"></span>
  </label>
</template>

<style lang="css" scoped>
.label {
  width: 100%;
  font-weight: 500;
  font-size: 17px;
  display: flex;
  align-items: center;
  column-gap: 8px;

  border: 2px solid var(--line-gray);
  border-radius: 12px;
  padding: 20px 24px;

  /*  */
  input {
    width: 100%;
    border: none;
  }
}

/*  */
.title1 {
  color: #abb2b3;
}

/*  */
.title2 {
  position: relative;
  font-weight: 600;
  color: var(--gray-text);

  /*  */
  :global(sup) {
    position: absolute;
    top: 1px;
    left: 13px;
    font-size: 10px;
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
