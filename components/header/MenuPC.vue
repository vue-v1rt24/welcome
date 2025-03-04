<script setup lang="ts">
import { menu } from '~/public/data/menu';

//
const theme = useTheme();
</script>

<template>
  <ul class="header_list_nedvizh">
    <li>
      <HeaderCategoriesNedvizhimost />
    </li>
    <li>
      <HeaderSelectMenu title="Услуги" :bg-dark-active="theme">
        <div class="header__select">
          <HeaderLink
            v-for="item in menu.services"
            :key="item.title"
            :link="item.link"
            :title="item.title"
          />
        </div>
      </HeaderSelectMenu>
    </li>
    <li>
      <HeaderSelectMenu title="Об агентстве" :bg-dark-active="theme">
        <div class="header__select">
          <HeaderLink
            v-for="item in menu.agency"
            :key="item.title"
            :link="item.link"
            :title="item.title"
          />
        </div>
      </HeaderSelectMenu>
    </li>
    <li>
      <NuxtLink class="header__link" :to="menu.otherMenu.blog.link">
        {{ menu.otherMenu.blog.title }}
      </NuxtLink>
    </li>
    <li>
      <NuxtLink class="header__link" :to="menu.otherMenu.contacts.link">
        {{ menu.otherMenu.contacts.title }}
      </NuxtLink>
    </li>
  </ul>
</template>

<style lang="css" scoped>
.header_list_nedvizh {
  display: flex;
  align-items: center;
  column-gap: 18px;
  z-index: 102;
}

/*  */

.header__select {
  width: 211px;
  display: flex;
  flex-direction: column;
  row-gap: 6px;
}

/*  */

.header__link {
  font-weight: 600;
  font-size: 16px;
  color: var(--black);
  background-color: var(--white);
  border: 2px solid #e6f0f2;
  border-radius: 10px;
  padding: 10px 16px;
}
</style>
