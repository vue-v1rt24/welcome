<script setup lang="ts">
const {
  color = 'white',
  colorHover = 'white',
  colorActive = 'white',
  bg = 'var(--primary)',
  bgHover = '#2aaa3d',
  bgActive = 'var(--secondary)',
} = defineProps<{
  title?: string;
  color?: string;
  colorHover?: string;
  colorActive?: string;
  bg?: string;
  bgHover?: string;
  bgActive?: string;
  active?: boolean;
}>();

const emit = defineEmits<{
  btnClick: [];
}>();
</script>

<template>
  <button :class="['bt_nedvizh', { active }]" type="button" @click="emit('btnClick')">
    <slot />
    <span v-if="title">{{ title }}</span>
  </button>
</template>

<style lang="css" scoped>
.bt_nedvizh {
  font-family: var(--font-family);
  font-size: 16px;
  color: v-bind(color);
  background-color: v-bind(bg);
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;

  transition: background-color var(--speed-animate);

  /*  */
  @media (hover: hover) {
    &:hover {
      color: v-bind(colorHover);
      background-color: v-bind(bgHover);
    }
  }

  &:is(:active, .active) {
    color: v-bind(colorActive);
    background-color: v-bind(bgActive);
  }
}
</style>
