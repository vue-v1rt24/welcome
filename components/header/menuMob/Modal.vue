<script setup lang="ts">
import { type TypeMenu } from '~/public/data/menu';
import { type TypeCategoryMenu } from '~/public/data/categoryMenu';

defineProps<{
  menu: TypeMenu;
  categoryMenu: TypeCategoryMenu;
}>();
</script>

<template>
  <div class="menu">
    <div class="menu__block">
      <div class="menu__title">Меню сайта</div>

      <div class="menu__item">
        <HeaderMenuMobUiSelect title="Услуги" :links="menu.services" />
        <HeaderMenuMobUiSelect title="Об агентстве" :links="menu.agency" />

        <div class="menu__link">
          <NuxtLink :to="menu.otherMenu.blog.link">
            {{ menu.otherMenu.blog.title }}
          </NuxtLink>

          <NuxtLink :to="menu.otherMenu.contacts.link">
            {{ menu.otherMenu.contacts.title }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <!--  -->
    <div class="menu__block">
      <div class="menu__title">Недвижимость</div>
    </div>

    <!--  -->
    <div class="menu__block">
      <div class="menu__title">Контакты</div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.menu {
  width: 340px;
  background-color: var(--white);
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  padding: 24px;
}

/*  */
.menu__title {
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  color: var(--black);
  margin-bottom: 16px;
}

/*  */
.menu__item {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/*  */

.menu__link {
  display: flex;
  column-gap: 10px;

  /*  */
  a {
    width: 100%;
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 14px;
    color: var(--black);
    background-color: var(--white);
    border: 2px solid #e6f0f2;
    border-radius: 10px;
    padding: 12px 14px;
  }
}
</style>
