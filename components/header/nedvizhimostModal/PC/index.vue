<script setup lang="ts"></script>

<template>
  <ul class="pc">
    <HeaderNedvizhimostModalPCItem />
  </ul>
</template>

<style lang="css" scoped>
.pc {
  position: absolute;
  top: 200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}
</style>
