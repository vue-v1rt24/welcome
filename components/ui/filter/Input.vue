<script setup lang="ts">
const { type = 'text' } = defineProps<{
  type?: 'text' | 'number';
  leftText?: string;
  rightText?: string;
  sup?: boolean;
}>();

//
const model = defineModel();
</script>

<template>
  <label class="label">
    <span v-if="leftText" class="title1">{{ leftText }}</span>
    <input :type v-model="model" />
    <span v-if="rightText && !sup" class="title2">{{ rightText }}</span>
    <span v-if="rightText && sup" class="title2" v-html="rightText"></span>
  </label>
</template>

<style lang="css" scoped>
.label {
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
