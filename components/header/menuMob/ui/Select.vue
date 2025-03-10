<script setup lang="ts">
defineProps<{
  title: string;
  links: {
    title: string;
    link: string;
  }[];
}>();

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
    <div class="select__sub_wrap">
      <ul class="select__sub">
        <li v-for="item in links" :key="item.title" class="select__sub_li">
          <NuxtLink class="select__link" :to="item.link">{{ item.title }}</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="css" scoped>
.select__top {
  position: relative;
  width: 100%;
  background-color: white;
  border: 2px solid #e6f0f2;
  border-radius: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 14px;
  transition: var(--speed-animate);

  /*  */
  .select.open & {
    background-color: var(--cloud-light);
    border-color: var(--cloud-light);
    border-radius: 14px 14px 0 0;
    padding-bottom: 0;
  }
}

/*  */
.select__title {
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 14px;
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
  display: grid;
  grid-template-rows: 0fr;
  opacity: 0;
  overflow: hidden;
  transition: grid-template-rows var(--speed-animate), opacity var(--speed-animate);

  /*  */
  .select.open & {
    grid-template-rows: 1fr;
    opacity: 1;
  }
}

/*  */
.select__sub {
  min-height: 0;
  background-color: var(--cloud-light);
  border-radius: 0 0 14px 14px;
  padding: 0 14px;
}

/*  */
.select__sub_li {
  &:not(:last-child) {
    border-bottom: 1px solid #d6e1e2;
  }
}

/*  */
.select__link {
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 15px;
  line-height: 100%;
  color: var(--black);
  display: block;
  padding: 14px 0;

  /*  */
  &.active {
    color: var(--primary);
  }
}
</style>
