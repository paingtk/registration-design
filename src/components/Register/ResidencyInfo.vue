<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BaseInput from '../BaseInput.vue'
const router = useRouter()
const model = ref('')
const submit = () => {
  router.push({ name: 'BankVerification' })
}
const options = [
  'Australia',
  'China',
  'Germany',
  'Japan',
  'Myanmar(Burma)',
  'Thailand',
]
</script>

<template>
  <div class="row justify-center">
    <div style="margin-top: 100px">
      <div class="text-h4 text-weight-bolder text-left">
        Complete Your Profile!
      </div>
      <div class="text-h6 text-left text-grey q-mb-xl">
        For the purpose of industry regulation,
        <br />
        your details are required.
      </div>
      <div class="text-left q-mb-md">
        <label>Phone Number</label>
        <q-input outlined v-model="phone" mask="(###) ### - ####" />
      </div>
      <BaseInput title="Your Address" type="text" />
      <div class="text-left q-mb-md">
        <label>Country of Residence</label>
        <q-select
          outlined
          v-model="model"
          :options="options"
          label="Please Select"
        />
      </div>

      <q-btn
        class="q-mt-lg"
        no-caps
        size="xl"
        label="Save & Continue"
        style="width: 100%"
        color="blue-14"
        @click="submit"
      />
      <div class="row justify-center q-mt-md">
        <q-icon style="padding-top: 3px; padding-right: 5px">
          <q-img src="@/assets/images/lock.png" />
        </q-icon>
        <div class="text-grey">Your info is safely secured.</div>
      </div>
    </div>
  </div>
</template>
