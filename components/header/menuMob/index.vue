<script setup lang="ts">
import { type TypeMenu } from '~/public/data/menu';

//
defineProps<{
  menu: TypeMenu;
  theme: boolean;
}>();
</script>

<template>
  <div :class="{ dark: theme }">
    <ul>
      <li>
        <HeaderCategoriesNedvizhimost />
      </li>
      <li>
        <div class="select__top">
          <span class="select__title">Меню</span>
          <ImagesArrowDown class="select__arrow" />
        </div>
      </li>
    </ul>

    <!-- Меню -->
    <div class="menu"></div>
  </div>
</template>

<style lang="css" scoped>
.select__top {
  position: relative;
  width: fit-content;
  background-color: white;
  border: 2px solid transparent;
  border-radius: 10px;
  padding: 12px 16px;

  /*  */
  .dark & {
    border-color: #e6f0f2;
  }

  /*  */
  &::before {
    content: '';
    position: absolute;
    top: 30px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: transparent;
    pointer-events: none;
  }

  &:hover::before {
    pointer-events: all;
  }
}

/*  */
.select__title {
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 16px;
  color: var(--black);
  margin-right: 10px;
}

/*  */
.select__arrow {
  color: #abb2b3;
  transform: rotate(0deg);
  transition: transform var(--speed-animate);

  /*  */
  .select:hover & {
    color: var(--primary);
    transform: rotate(-180deg);
  }
}
</style>
