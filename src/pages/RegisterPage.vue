<script setup>
import BaseSideCover from '@/components/BaseSideCover.vue'
import JoinUs from '@/components/Register/JoinUs.vue'
import BaseMenuBar from '../components/BaseMenuBar.vue'
import PersonalInfo from '../components/Register/PersonalInfo.vue'
</script>

<template>
  <div class="row justify-center items-center window-height">
    <div class="col-lg-4 col-sm-12">
      <BaseSideCover />
    </div>
    <div style="height: 100%" class="col-lg-4 col-sm-12 q-ml-xl">
      <BaseMenuBar />
      <JoinUs v-if="$route.name === 'JoinUs'" />
      <PersonalInfo v-if="$route.name === 'PersonalInfo'" />
    </div>
  </div>
</template>
