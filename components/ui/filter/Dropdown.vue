<script setup lang="ts">
const { open } = defineProps<{
  title: string;
  open: boolean;
}>();

//
const emit = defineEmits<{
  clickDropdown: [];
}>();

//
const slots = useSlots();
</script>

<template>
  <div :class="['dropdown', { open }]">
    <div class="dropdown__top" @click="emit('clickDropdown')">
      <span class="dropdown__title">{{ title }}</span>
      <ImagesArrowDown class="dropdown__arrow" />
    </div>

    <div v-if="slots.default" class="dropdown__sub_wrap">
      <slot />
    </div>
  </div>
</template>

<style lang="css" scoped>
.dropdown {
  position: relative;
  user-select: none;
  flex-shrink: 0;
}

/*  */

.dropdown__top {
  width: 100%;
  background-color: white;
  border: 2px solid var(--line-gray);
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 23px;
  padding: 21px 24px;
  cursor: pointer;
  transition: var(--speed-animate);

  /*  */
  .dropdown.open & {
    background-color: var(--line-gray);
  }
}

/*  */
.dropdown__title {
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 17px;
  color: var(--black);
}

/*  */
.dropdown__arrow {
  color: #abb2b3;
  transform: rotate(0deg);
  transition: transform var(--speed-animate);

  /*  */
  .dropdown.open & {
    color: var(--primary);
    transform: rotate(-180deg);
  }
}

/*  */

.dropdown__sub_wrap {
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
  .dropdown.open & {
    grid-template-rows: 1fr;
    opacity: 1;
    pointer-events: all;
  }
}
</style>
