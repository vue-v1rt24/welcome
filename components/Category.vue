<script setup lang="ts">
defineProps<{
  category: {
    title: string;
    image: string;
    items: {
      title: string;
      link: string;
    }[];
  };
}>();

//
const viewport = useViewport();
const bgModal = useBgModal();
</script>

<template>
  <li class="pc__item">
    <div class="pc__item_left">
      <NuxtLink :to="category.items[0].link" @click="bgModal = false" class="pc__item_title">
        <span>{{ category.title }}</span>
        <img src="/images/nedvizhimost/arrowNedvizh.svg" alt="" />
      </NuxtLink>

      <div
        v-if="viewport.isGreaterOrEquals('screen1201')"
        @click="bgModal = false"
        class="pc__item_links"
      >
        <NuxtLink v-for="item in category.items" :key="item.title" :to="item.link">
          {{ item.title }}
        </NuxtLink>
      </div>
    </div>

    <!--  -->
    <div class="pc__item_right">
      <NuxtImg :src="category.image" width="220" height="133" format="webp" loading="lazy" alt="" />
    </div>
  </li>
</template>

<style lang="css" scoped>
.pc__item {
  background-color: #f1f4f4;
  border-radius: 32px;
  padding: 42px;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  column-gap: 64px;

  /*  */
  @media (max-width: 1400px) {
    column-gap: 41px;
    padding: 32px;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    row-gap: 44px;
  }
}

/*  */
.pc__item_title {
  width: fit-content;
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 28px;
  color: var(--black);
  display: flex;
  align-items: center;
  column-gap: 16px;
  transition: color var(--speed-animate);

  /*  */
  .pc__item:hover & {
    color: var(--primary);
  }

  /*  */
  @media (max-width: 1300px) {
    font-size: 24px;
  }

  @media (max-width: 1200px) {
    font-size: 22px;
  }
}

/*  */
.pc__item_links {
  display: flex;
  flex-wrap: wrap;
  gap: 15px 30px;
  margin-top: 28px;

  /*  */
  @media (max-width: 1300px) {
    margin-top: 20px;
  }

  /*  */
  a {
    position: relative;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    color: var(--black);
    transition: color var(--speed-animate);

    /*  */
    &:hover {
      color: var(--primary);
    }

    /*  */
    @media (max-width: 1300px) {
      font-size: 15px;
    }

    /*  */
    &::before {
      content: '';
      position: absolute;
      top: 7px;
      right: -18px;
      width: 5px;
      height: 5px;
      background-color: var(--primary);
      border-radius: 50%;
    }
  }
}

/*  */

.pc__item_right {
  position: relative;
  flex-shrink: 0;
  width: 220px;

  /*  */
  @media (max-width: 1200px) {
    width: 100%;
  }

  /*  */
  &::before {
    content: '';
    position: absolute;
    top: -4px;
    left: 50%;
    translate: -50% 0px;
    width: 95%;
    height: 106%;
    background-color: var(--primary);
    border-radius: 18px;
    transform: skew(2deg, -3deg);
    transition: top var(--speed-animate), height var(--speed-animate);
  }

  .pc__item:hover &::before {
    top: -8px;
    height: 112%;
  }

  /*  */
  img {
    border-radius: 18px;
    isolation: isolate;

    /*  */
    @media (max-width: 1200px) {
      width: 100%;
    }
  }
}
</style>
