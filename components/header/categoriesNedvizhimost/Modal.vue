<script setup lang="ts">
import { type TypeCategoryMenu } from '~/public/data/categoryMenu';

defineProps<{
  categoryMenu: TypeCategoryMenu;
}>();
</script>

<template>
  <div class="pc_wrap">
    <ul class="pc style_scrollbar">
      <Category v-for="category in categoryMenu" :key="category.title" :category />
    </ul>
  </div>
</template>

<style lang="css" scoped>
.pc_wrap {
  position: absolute;
  top: 154px;
  left: 0;

  background-color: white;
  border-radius: 32px;

  overflow: hidden;
  z-index: 101;

  @media (max-width: 1700px) {
    left: 50%;
    translate: -50% 0;
    width: 97%;
  }

  @media (max-width: 1200px) {
    top: 132px;
  }
}

/*  */
.pc {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  padding: 32px;
  overflow-y: auto;

  /*  */
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  /*  */
  @media (max-height: 1024px) {
    height: 70dvh;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
