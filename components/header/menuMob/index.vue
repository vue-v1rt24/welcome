<script setup lang="ts">
import { menu } from '~/public/data/menu';
import { categoryMenu } from '~/public/data/categoryMenu';

//
const theme = useTheme();
const viewport = useViewport();

//
const bgModal = useBgModal();
const isOpenMenu = useOpenClosedMenu();
const isOpenMenuCategories = useOpenClosedMenuCategories();
const isOpenClosedSearch = useOpenClosedSearch();

//
const openMenu = () => {
  // Закрытие модального окна меню категорий
  if (isOpenMenuCategories.value) {
    isOpenMenuCategories.value = false;
  } else if (isOpenClosedSearch.value) {
    isOpenClosedSearch.value = false;
  } else {
    // Открытие / Закрытие фона
    bgModal.value = !bgModal.value;
  }

  // Открытие / Закрытие модального окна меню
  isOpenMenu.value = !isOpenMenu.value;
};

// Закрытие модального окна меню
watch(bgModal, (val) => {
  if (!val && isOpenMenu.value) {
    isOpenMenu.value = false;
  }
});
</script>

<template>
  <div :class="{ dark: theme }">
    <ul v-if="viewport.isGreaterOrEquals('screen576')" class="menu_wrap">
      <li v-if="viewport.isGreaterThan('screen760')">
        <HeaderCategoriesNedvizhimost />
      </li>
      <li>
        <div :class="['select__top', { open: isOpenMenu }]" @click="openMenu">
          <span class="select__title">Меню</span>
          <ImagesArrowDown class="select__arrow" />
        </div>
      </li>
    </ul>

    <!--  -->
    <UiButton v-else :active="isOpenMenu" @btn-click="openMenu" class="menu_btn_mob">
      <ImagesClose v-if="isOpenMenu" class="close_svg" />
      <img v-else src="/images/nav-nedvizh.svg" alt="" />
    </UiButton>

    <!-- Меню -->
    <MenuTransition>
      <KeepAlive>
        <HeaderMenuMobModal v-if="isOpenMenu" :menu :category-menu="categoryMenu" />
      </KeepAlive>
    </MenuTransition>
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

.menu_btn_mob {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  padding: 12px;

  /*  */
  .close_svg {
    width: 16px;
    height: 16px;
    color: white;
  }
}
</style>
