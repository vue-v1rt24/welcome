<script setup lang="ts">
import * as FancyboxAll from '@fancyapps/ui';

//
const { Fancybox } = FancyboxAll;

//
const emit = defineEmits<{
  closeModal: [];
}>();

//
const modalOpen = () => {
  Fancybox.show([{ src: '#modal_fancybox', type: 'inline' }], {
    // closeButton: false,
    autoFocus: false,
    dragToClose: false,
    on: {
      close() {
        emit('closeModal');
      },
    },
  });
};

//
onUnmounted(() => {
  Fancybox.destroy();
});

//
defineExpose({
  modalOpen,
});
</script>

<template>
  <div id="modal_fancybox" class="modal_fancybox">
    <slot />
  </div>
</template>

<style lang="css" scoped>
.modal_fancybox {
  display: none;
  background-color: transparent;
  padding: 0;
}
</style>
