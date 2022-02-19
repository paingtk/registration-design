<script setup>
import BaseSideCover from '@/components/BaseSideCover.vue'
import JoinUs from '@/components/Register/JoinUs.vue'
import BaseMenuBar from '../components/BaseMenuBar.vue'
import PersonalInfo from '../components/Register/PersonalInfo.vue'
import ResidencyInfo from '../components/Register/ResidencyInfo.vue'
import BankVerification from '../components/Register/BankVerification.vue'
</script>

<template>
  <div class="row window-height">
    <div class="col-lg-6 col-sm-12">
      <BaseSideCover />
    </div>
    <div style="height: 100%" class="col-lg-4 col-sm-12 q-ml-xl">
      <BaseMenuBar
        :pageName="
          $route.name === 'PersonalInfo'
            ? 'Personal Info'
            : $route.name === 'ResidencyInfo'
            ? 'Residency Info'
            : 'Bank Verification'
        "
        :step="
          $route.name === 'PersonalInfo'
            ? 'STEP 01/03'
            : $route.name === 'ResidencyInfo'
            ? 'STEP 02/03'
            : 'STEP 03/03'
        "
      />
      <JoinUs v-if="$route.name === 'JoinUs'" />
      <PersonalInfo v-if="$route.name === 'PersonalInfo'" />
      <ResidencyInfo v-if="$route.name === 'ResidencyInfo'" />
      <BankVerification v-if="$route.name === 'BankVerification'" />
    </div>
  </div>
</template>
