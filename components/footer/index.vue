<script setup lang="ts">
const bgModal = useBgModal();
const bgLoading = useBgLoading();
const openClosedSearch = useOpenClosedSearch();

// Копирование почты
const copyEmail = useTemplateRef('copyEmail');
const isVisibleCopyText = ref(false);

const copyEmailHandler = async () => {
  if (!isVisibleCopyText.value) {
    isVisibleCopyText.value = true;

    setTimeout(() => {
      copyEmail.value?.visibleTextCopy();
    }, 100);
  } else {
    copyEmail.value?.visibleTextCopy();
  }
};

//
watch(
  () => [bgModal.value, openClosedSearch.value],
  ([val, val2]) => {
    document.body.classList.toggle('open_menu', val);
    document.body.classList.toggle('search_filter', val2);
  },
);
</script>

<template>
  <footer class="footer">
    <div class="footer-wrap">
      <div class="footer-container">
        <nav class="footer__left">
          <ul class="footer__menu">
            <li id="a" class="footer__menu-black">
              <NuxtLink to="/nedvizhimost">Недвижимость</NuxtLink>

              <ul>
                <li class="footer__menu-gray">
                  <NuxtLink to="/kvartirs">Квартиры</NuxtLink>
                </li>

                <li class="footer__menu-gray"><a href="#">Новостройки</a></li>

                <li class="footer__menu-gray"><a href="#">Дома</a></li>

                <li class="footer__menu-gray"><a href="#">Участки</a></li>

                <li class="footer__menu-gray"><a href="#">Коммерческие помещения</a></li>

                <li class="footer__menu-gray"><a href="#">Гаражи</a></li>
              </ul>
            </li>
            <li id="b" class="footer__menu-black">
              <a href="#">Об агентстве</a>
              <ul>
                <li class="footer__menu-gray"><a href="#">Карьера</a></li>
                <li class="footer__menu-gray"><a href="#">Наши специалисты</a></li>
                <li class="footer__menu-gray"><a href="#">Лучшие проекты</a></li>
                <li class="footer__menu-gray"><a href="#">Сертификаты и награды</a></li>
                <li class="footer__menu-gray"><a href="#">Отзывы</a></li>
              </ul>
            </li>
            <li id="c" class="footer__menu-black">
              <a href="#">Услуги</a>
              <ul>
                <li class="footer__menu-gray"><a href="#">Юридические услуги</a></li>
                <li class="footer__menu-gray"><a href="#">Ипотечные услуги</a></li>
              </ul>
            </li>
            <li id="d" class="footer__menu-black">
              <a href="#">Контакты</a>
              <ul>
                <li class="footer__menu-black">
                  <a href="#">Блог</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        <div class="footer__right">
          <div class="footer__contacts">
            <div class="footer__contacts-box">
              <a href="#" class="footer__contacts-link">
                <ImagesTelegram />
                <span>Telegram</span>
              </a>
              <a href="#" class="footer__contacts-link">
                <ImagesWhatsapp />
                <span>WhatsApp</span>
              </a>
            </div>

            <div class="footer__contacts-data">
              <p href="#" class="footer__contacts-adres">г. Ставрополь, ул. 50 лет ВЛКСМ, 62</p>
              <a href="#" class="footer__contacts-item">+7 (962) 400-20-30</a>
              <div class="footer__contacts-item" @click="copyEmailHandler">info@welcome26.ru</div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-container">
        <div class="footer-line"></div>
      </div>
      <div class="footer-container">
        <div class="footer__bot">
          <div class="footer__bot-text">
            <div class="footer__bot-wel">© АН “Welcome”, 2024</div>
            <a href="#" class="footer__bot-privacy">Политика конфиденциальности</a>
          </div>
          <div class="footer__bot-prana">
            <span>Cоздано с любовью в</span>
            <a href="" class="footer__bot-link">
              <ImagesLogoPrana />
            </a>
          </div>
        </div>
      </div>
    </div>

    <!--  -->
    <LazyCopyEmail v-if="isVisibleCopyText" ref="copyEmail" />

    <!--  -->
    <Transition name="bgModal">
      <LazyBgModal v-if="bgModal" @close="bgModal = !bgModal" />
    </Transition>

    <!--  -->
    <Transition name="bgModal">
      <LazyUiLoading v-if="bgLoading" />
    </Transition>
  </footer>
</template>

<style lang="css" scoped>
.footer {
  max-width: 1880px;
  margin: 120px auto 0 auto;
  width: 100%;
}
.footer-wrap {
  margin: 0 20px 20px 20px;
  background: var(--cloud-light);
  border-radius: 32px;
  padding: 42px 0;
}
.footer-container {
  max-width: 1600px;
  box-sizing: content-box;
  margin: 0 auto;
  padding: 0 42px;
  display: flex;
  justify-content: space-between;
}
.footer__menu {
  display: flex;
  gap: 30px;
}
.footer__menu-black {
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-width: 174px;
}
.footer__menu-black a {
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 17px;
  color: var(--black);
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s;
}
.footer__menu-black a:hover {
  color: var(--primary);
}
.footer__menu-black ul {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.footer__menu-gray a {
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  color: var(--gray-text);
}
.footer__contacts-box {
  display: flex;
  gap: 14px;
}
.footer__contacts-link {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  gap: 10px;
  border-radius: 8px;
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 18px;
  color: var(--white);
  text-decoration: none;
  background: var(--primary);
  transition: 0.3s;
  cursor: pointer;
}
.footer__contacts-link:hover {
  background: #2aaa3d;
}
.footer__contacts-link:active {
  background: var(--secondary);
}
.footer__contacts-data {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 20px;
}
.footer__contacts-adres {
  background: var(--white);
  border-radius: 8px;
  width: 339px;
  height: 41px;
  font-weight: 600;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer__contacts-item {
  background: var(--white);
  border-radius: 8px;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 18px;
  color: var(--black);
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 196px;
  height: 41px;
  cursor: pointer;
}
.footer__contacts-item:hover {
  background: #e6f0f2;
}
.footer__contacts-item:active {
  background: var(--primary);
  color: var(--white);
}
.footer-line {
  margin: 32px 0;
  width: 100%;
  border: 1px solid #d6e1e2;
}
.footer__bot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.footer__bot-text {
  display: flex;
  gap: 38px;
}
.footer__bot-wel {
  font-weight: 500;
  font-size: 16px;
  color: var(--gray-text);
}
.footer__bot-privacy {
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  color: var(--gray-text);
  text-decoration: none;
  transition: 0.3s;
  cursor: pointer;
}
.footer__bot-privacy:hover {
  color: var(--black);
}
.footer__bot-prana {
  display: flex;
  align-items: center;
  gap: 7px;
  font-weight: 500;
  font-size: 18px;
  line-height: 140%;
  color: var(--gray-text);
}
.footer__bot-link {
  text-decoration: none;
  transition: 0.3s;
  cursor: pointer;
  padding-top: 3px;
}
.footer__bot-link:hover {
  scale: 1.1;
}

#a {
  grid-area: a;
}

#b {
  grid-area: b;
}

#c {
  grid-area: c;
}

#d {
  grid-area: d;
}

/* =========== медиа footer ============*/
@media (max-width: 1400px) {
  .footer__menu {
    gap: 30px;
  }
  .footer__menu-black {
    gap: 14px;
  }
  .footer__menu-black a {
    font-size: 16px;
  }
  .footer__menu-black ul {
    gap: 12px;
  }
  .footer__menu-gray a {
    font-size: 15px;
  }
  .footer__contacts-box {
    gap: 18px;
  }
  .footer__contacts-link {
    gap: 8px;
    font-size: 16px;
  }
  .footer__contacts-link svg {
    width: 18px;
    height: 18px;
  }
  .footer__contacts-data {
    gap: 8px;
    padding-top: 18px;
  }
  .footer__contacts-adres {
    width: 304px;
    height: 38px;
    font-size: 16px;
  }
  .footer__contacts-item {
    font-size: 16px;
    width: 177px;
    height: 38px;
  }
  .footer-line {
    margin: 24px 0;
  }
  .footer__bot-text {
    gap: 47px;
  }
  .footer__bot-wel {
    font-size: 15px;
  }
  .footer__bot-privacy {
    font-size: 15px;
  }
  .footer__bot-prana {
    font-size: 16px;
    line-height: 100%;
  }
  .footer__bot-link svg {
    width: 101px;
    height: 14px;
  }
}
@media (max-width: 1160px) {
  .footer-wrap {
    margin: 0 40px 40px 40px;
    padding: 32px 0;
  }
  .footer-container {
    flex-direction: column-reverse;
    gap: 28px;
    padding: 0 32px;
  }
  .footer__menu {
    gap: 20px;
  }
  .footer__menu-black a {
    font-size: 15px;
  }
  .footer__menu-gray a {
    font-size: 14px;
  }
  .footer__contacts-data {
    gap: 14px;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .footer-line {
    margin: 28px 0;
  }
  .footer__bot {
    flex-direction: column;
    gap: 20px;
    align-items: normal;
  }
  .footer__bot-text {
    gap: 24px;
  }
  .footer__bot-wel {
    font-size: 14px;
  }
  .footer__bot-privacy {
    font-size: 14px;
  }
  .footer__bot-prana {
    font-size: 14px;
  }
  .footer__bot-link svg {
    width: 94px;
    height: 12px;
  }
}
@media (max-width: 685px) {
  .footer-wrap {
    margin: 0;
    padding: 20px 0;
    border-radius: 24px 24px 0 0;
  }
  .footer-container {
    gap: 24px;
    padding: 0 20px;
  }
  .footer__menu {
    column-gap: 59px;
    row-gap: 0;
    display: grid;
    grid-template-columns: repeat(2, 115px);
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas: 'a d' 'b d' 'c d';
  }
  .footer__menu-black {
    gap: 12px;
  }
  .footer__menu-black a {
    font-size: 15px;
  }
  .footer__menu-gray {
    display: none;
  }
  .footer__contacts-box {
    gap: 12px;
  }
  .footer__contacts-link {
    padding: 8px 10px;
    font-size: 15px;
  }
  .footer__contacts-link svg {
    width: 16px;
    height: 16px;
  }
  .footer__contacts-data {
    padding-top: 14px;
    gap: 10px;
  }
  .footer__contacts-adres {
    width: 286px;
    height: 36px;
    font-size: 15px;
  }
  .footer__contacts-item {
    font-size: 15px;
    width: 167px;
  }
  .footer-line {
    margin: 24px 0;
  }
  .footer__bot-text {
    gap: 10px;
    flex-wrap: wrap;
  }
}
.email-copy {
  position: fixed;
  right: 30px;
  bottom: 40px;
  background: var(--white);
  z-index: 50;
  padding: 24px;
  border-radius: 24px;
  -webkit-box-shadow: 0px 5px 44px 15px rgba(34, 60, 80, 0.64);
  -moz-box-shadow: 0px 5px 44px 15px rgba(34, 60, 80, 0.64);
  box-shadow: 0px 5px 44px 15px rgba(34, 60, 80, 0.64);
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 18px;
  color: var(--black);
  transform: translateX(200%);
  transition: 0.5s;
}

.email-copy.active {
  transform: translateX(0);
}

/*  */

.bgModal-enter-active,
.bgModal-leave-active {
  transition: opacity var(--speed-animate) ease;
}

.bgModal-enter-from,
.bgModal-leave-to {
  opacity: 0;
}
</style>
