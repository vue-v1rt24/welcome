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

      <div class="menu_cat_link">
        <HeaderMenuMobUiLink
          v-for="item in categoryMenu"
          :key="item.title"
          :title="item.title"
          :link="item.items[0].link"
        />
      </div>
    </div>

    <!--  -->
    <div class="menu__block">
      <div class="menu__title">Контакты</div>

      <div class="menu__contacts">
        <div class="menu__contacts_item">
          <div class="menu__contacts_email">
            <span class="menu__contacts_title">info@welcome26.ru</span>
            <ImagesCopy class="menu__contacts_copy" />
          </div>

          <span class="menu__contacts_desc">Вопросы и предложения</span>
        </div>

        <div class="menu__contacts_item">
          <a class="menu__contacts_title" href="tel:+7 (962) 400-20-30">+7 (962) 400-20-30</a>
          <span class="menu__contacts_desc">Горячая линия</span>
        </div>

        <div class="menu__contacts_item">
          <span class="menu__contacts_title"> г. Ставрополь, ул. 50 лет ВЛКСМ 62, 2 этаж </span>
          <span class="menu__contacts_desc">Пн-пт: с 9:00 до 19:00</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.menu {
  position: absolute;
  top: 132px;
  right: 10px;

  width: 340px;
  background-color: var(--white);
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  padding: 24px;
  overflow-y: auto;

  /*  */
  @media (max-height: 1000px) {
    height: 70dvh;
  }

  @media (max-width: 576px) {
    top: 88px;
  }
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

/*  */

.menu_cat_link {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

/*  */

.menu__contacts {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
}

.menu__contacts_item {
  display: flex;
  flex-direction: column;
  row-gap: 6px;
}

/*  */
.menu__contacts_email {
  display: flex;
  align-items: center;
  column-gap: 10px;
  cursor: pointer;
}

.menu__contacts_copy {
  width: 18px;
  height: 17px;
  color: #36b649;
}

.menu__contacts_title {
  font-family: var(--second-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 130%;
  color: var(--black);
}

.menu__contacts_desc {
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 14px;
  color: var(--gray-text);
}
</style>
