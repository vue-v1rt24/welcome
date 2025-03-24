<script setup lang="ts">
import { EnumSwitchBtn } from '~/types/nedvizhimost.types';

//
const modelValue = defineModel<EnumSwitchBtn>({ required: true });
</script>

<template>
  <div class="switch">
    <div
      @click="modelValue = EnumSwitchBtn.single"
      :class="['switch__btn', { active: modelValue === EnumSwitchBtn.single }]"
    >
      <ImagesSwitchBtnSingle class="switch__btn_img" />
    </div>

    <div
      @click="modelValue = EnumSwitchBtn.two"
      :class="['switch__btn', { active: modelValue === EnumSwitchBtn.two }]"
    >
      <ImagesSwitchBtnTwo class="switch__btn_img" />
    </div>
  </div>
</template>

<style lang="css" scoped>
.switch {
  display: flex;
  column-gap: 24px;
  margin-left: auto;

  /*  */
  @media (max-width: 768px) {
    column-gap: 20px;
  }
}

/*  */
.switch__btn {
  width: 61px;
  height: 61px;
  background-color: #f1f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--line-gray);
  border-radius: 12px;
  cursor: pointer;

  /*  */
  @media (max-width: 768px) {
    width: 56px;
    height: 56px;
  }

  /*  */
  &.active {
    background-color: var(--line-gray);
  }
}

/*  */
.switch__btn_img {
  width: 28px;
  height: 28px;
  color: var(--gray);

  /*  */
  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
  }

  /*  */
  .switch__btn.active & {
    color: var(--primary);
  }
}
</style>
