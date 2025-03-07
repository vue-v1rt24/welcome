<script setup lang="ts">
defineProps<{
  title: string;
}>();

//
const slots = useSlots();

//
const isOpenSelect = ref(false);
</script>

<template>
  <div :class="['select', { open: isOpenSelect }]">
    <div class="select__top" @click="isOpenSelect = !isOpenSelect">
      <span class="select__title">{{ title }}</span>
      <ImagesArrowDown class="select__arrow" />
    </div>

    <!--  -->
    <div v-if="slots.default" class="select__sub_wrap">
      <slot />
    </div>
  </div>
</template>

<style lang="css" scoped>
.select {
  position: relative;
  user-select: none;
}

/*  */

.select__top {
  width: 100%;
  background-color: white;
  border: 2px solid var(--line-gray);
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  cursor: pointer;
  transition: var(--speed-animate);

  /*  */
  .select.open & {
    background-color: var(--line-gray);
  }
}

/*  */
.select__title {
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 17px;
  color: var(--black);
}

/*  */
.select__arrow {
  color: #abb2b3;
  transform: rotate(0deg);
  transition: transform var(--speed-animate);

  /*  */
  .select.open & {
    color: var(--primary);
    transform: rotate(-180deg);
  }
}

/*  */

.select__sub_wrap {
  position: absolute;
  top: 73px;
  left: 0;

  background-color: var(--white);

  display: grid;
  grid-template-rows: 0fr;
  opacity: 0;
  overflow: hidden;
  transition: grid-template-rows var(--speed-animate), opacity var(--speed-animate);

  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 16px;

  pointer-events: none;
  z-index: 1;

  /*  */
  .select.open & {
    grid-template-rows: 1fr;
    opacity: 1;
    pointer-events: all;
  }
}
</style>
