<script setup>
import { ref } from 'vue'
import BaseInput from '../BaseInput.vue'
import BasePassword from '../BasePassword.vue'
const accept = ref(false)
const model = ref('')
</script>

<template>
  <div class="row justify-center">
    <div>
      <div class="text-h4 text-weight-bolder text-left">
        Register Individual Account!
      </div>
      <div class="text-h6 text-left text-grey q-mb-xl">
        For the purpose of industry regulation,
        <br />
        your details are required.
      </div>
      <BaseInput title="Your Fullname *" type="text" v-model="model" />
      <BaseInput title="Email Address *" type="email" />
      <BasePassword title="Password *" />
      <div class="text-left q-my-xl">
        <q-checkbox v-model="accept" label="I accept the license and terms" />
      </div>
      <q-btn
        no-caps
        size="xl"
        label="Register Account"
        style="width: 100%"
        color="blue-14"
      />
      <div class="q-my-lg">Or</div>
      <q-btn
        no-caps
        size="xl"
        label="Register with Google"
        style="width: 100%"
      />
    </div>
  </div>
</template>
