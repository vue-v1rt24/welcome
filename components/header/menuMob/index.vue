<script setup lang="ts">
import { menu } from '~/public/data/menu';
import { categoryMenu } from '~/public/data/categoryMenu';

//
const theme = useTheme();

//
const bgModal = useBgModal();
const isOpenMenu = useOpenClosedMenu();
const isOpenMenuCategories = useOpenClosedMenuCategories();

//
const openMenu = () => {
  // Закрытие модального окна меню категорий
  if (isOpenMenuCategories.value) {
    isOpenMenuCategories.value = false;
  } else {
    // Открытие / Закрытие фона
    bgModal.value = !bgModal.value;
  }

  // Открытие / Закрытие модального окна меню
  isOpenMenu.value = !isOpenMenu.value;
};

// Закрытие модального окна категорий
watch(bgModal, (val) => {
  if (!val && isOpenMenu.value) {
    isOpenMenu.value = false;
  }
});
</script>

<template>
  <div :class="{ dark: theme }">
    <ul class="menu_wrap">
      <li>
        <HeaderCategoriesNedvizhimost />
      </li>
      <li>
        <div :class="['select__top', { open: isOpenMenu }]" @click="openMenu">
          <span class="select__title">Меню</span>
          <ImagesArrowDown class="select__arrow" />
        </div>
      </li>
    </ul>

    <!-- Меню -->
    <Transition name="bgModal">
      <HeaderMenuMobModal v-if="isOpenMenu" :menu :category-menu="categoryMenu" />
    </Transition>

    <HeaderMenuMobModal :menu :category-menu="categoryMenu" />
  </div>
</template>

<style lang="css" scoped>
.menu_wrap {
  display: flex;
  column-gap: 18px;
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
  .select__top.open & {
    color: var(--primary);
    transform: rotate(-180deg);
  }
}

/*  */

.bgModal-enter-active,
.bgModal-leave-active {
  transition: opacity var(--speed-animate) ease, transform var(--speed-animate) ease;
}

.bgModal-enter-from,
.bgModal-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
