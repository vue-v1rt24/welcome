<script setup lang="ts">
const emailCopy = useTemplateRef('emailCopy');

//
let timer: ReturnType<typeof setTimeout> | null = null;

const visibleTextCopy = (email: string = 'info@welcome26.ru') => {
  navigator.clipboard.writeText(email);

  timer && clearTimeout(timer);

  emailCopy.value?.classList.add('active');

  setTimeout(() => emailCopy.value?.classList.remove('active'), 2500);
  timer = null;
};

//
defineExpose({
  visibleTextCopy,
});
</script>

<template>
  <div class="email-copy" ref="emailCopy">Почта скопирована</div>
</template>

<style lang="css" scoped>
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
</style>
