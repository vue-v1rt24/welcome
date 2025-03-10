<script setup lang="ts">
import { type TypeCategoryMenu } from '~/public/data/categoryMenu';

defineProps<{
  categoryMenu: TypeCategoryMenu;
}>();
</script>

<template>
  <ul class="pc">
    <Category v-for="category in categoryMenu" :key="category.title" :category />
  </ul>
</template>

<style lang="css" scoped>
.pc {
  position: absolute;
  top: 154px;
  left: 0;
  width: 100%;

  background-color: white;
  border-radius: 32px;
  padding: 32px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  overflow-y: auto;
  z-index: 101;

  /*  */
  &::-webkit-scrollbar {
    width: 0;
  }

  /* &::-webkit-scrollbar-track-piece {
    background-color: antiquewhite;
    border-radius: 32px;
  }

  &::-webkit-scrollbar-track {
    background-color: red;
    border-radius: 32px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: blue;
    border-radius: 32px;
  } */

  /*  */
  @media (max-height: 1024px) {
    height: 70dvh;
  }

  @media (max-width: 1700px) {
    width: 97%;
    left: 50%;
    translate: -50% 0;
  }

  @media (max-width: 1200px) {
    top: 132px;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
