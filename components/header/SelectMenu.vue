<script setup lang="ts">
const { bgDarkActive = false } = defineProps<{
  title: string;
  bgDarkActive?: boolean;
}>();
</script>

<template>
  <div :class="['select', { dark: bgDarkActive }]">
    <div class="select__top">
      <span class="select__title">{{ title }}</span>
      <ImagesArrowDown class="select__arrow" />
    </div>

    <div class="select__content">
      <slot />
    </div>
  </div>
</template>

<style lang="css" scoped>
.select {
  position: relative;
  cursor: pointer;
  user-select: none;
}

/*  */

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

/*  */

.select__content {
  position: absolute;
  top: 60px;
  left: 0;
  width: fit-content;
  background-color: var(--white);
  border-radius: 12px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  padding: 16px;

  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: transform var(--speed-animate), opacity var(--speed-animate),
    visibility var(--speed-animate);
  z-index: 102;

  /*  */
  .select:hover & {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
}
</style>
