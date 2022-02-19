<script setup>
import { ref } from 'vue'
const bankVeriNumber = ref()
const submit = () => {
  if (!bankVeriNumber.value) {
    alert('Please enter bank verification number!')
  } else {
    alert('Successfully registered!')
  }
}
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
        <label>Bank verification number (BVN)</label>
        <q-input
          outlined
          v-model="bankVeriNumber"
          mask="############"
          :rules="[
            (val) =>
              (val && val.length == 12) ||
              'Verification number is required and have to be 12 digit numbers.',
          ]"
        >
          <template
            v-if="bankVeriNumber && bankVeriNumber.length === 12"
            v-slot:append
          >
            <q-icon>
              <q-img src="@/assets/images/success-check.png" />
            </q-icon>
          </template>
        </q-input>
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
        <q-icon size="xs">
          <q-img src="@/assets/images/lock.png" />
        </q-icon>
        <div class="text-grey">Your info is safely secured.</div>
      </div>
    </div>
  </div>
</template>
