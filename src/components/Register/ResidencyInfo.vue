<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BaseInput from '../BaseInput.vue'
const router = useRouter()
const country = ref('')
const address = ref('')
const phone = ref('')
const submit = () => {
  if (!phone.value || !address.value || !country.value) {
    alert('Please fill all the required fields')
  } else {
    router.push({ name: 'BankVerification' })
  }
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
        <q-input
          outlined
          v-model="phone"
          mask="(###) ### - ####"
          :rules="[(val) => !!val || 'Phone number is required!']"
        />
      </div>
      <BaseInput
        title="Your Address"
        type="text"
        v-model="address"
        :rules="[(val) => !!val || 'Address is required!']"
      />
      <div class="text-left q-mb-md">
        <label>Country of Residence</label>
        <q-select
          outlined
          v-model="country"
          :options="options"
          label="Please Select"
          :rules="[(val) => !!val || 'Country of residence is required!']"
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
