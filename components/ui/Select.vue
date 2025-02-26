<script setup lang="ts">
const { bgDarkActive = false } = defineProps<{
  title: string;
  bgDarkActive?: boolean;
}>();

//
const isOpen = ref(false);
</script>

<template>
  <div :class="['select', { open: isOpen, dark: bgDarkActive }]" @click="isOpen = !isOpen">
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
  cursor: pointer;
  user-select: none;
}

/*  */

.select__top {
  width: fit-content;
  background-color: white;
  border-radius: 10px;
  padding: 12px 16px;

  /*  */
  .dark & {
    border: 2px solid #e6f0f2;
  }

  /*  */
  .open.dark & {
    background-color: #e6f0f2;
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

  /*  */
  .open & {
    color: var(--primary);
    transform: rotate(180deg);
  }
}
</style>
