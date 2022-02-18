<script setup>
import BaseSideCover from '@/components/BaseSideCover.vue'
import JoinUs from '@/components/JoinUs.vue'
import BaseMenuBar from '../components/BaseMenuBar.vue'
</script>

<template>
  <div class="row justify-center items-center window-height">
    <div class="col-4">
      <BaseSideCover />
    </div>
    <div style="height: 100%" class="col-4 q-ml-xl">
      <BaseMenuBar />
      <JoinUs />
    </div>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
}
</style>
