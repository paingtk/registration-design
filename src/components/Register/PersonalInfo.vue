<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BaseInput from '../BaseInput.vue'
import BasePassword from '../BasePassword.vue'
const router = useRouter()
const accept = ref(false)
const fullName = ref('')
const email = ref('')
const password = ref('')
const submit = () => {
  if (!fullName.value || !email.value || !password.value || !accept.value) {
    alert('Please fill and accept the required fields!')
  } else {
    router.push({ name: 'ResidencyInfo' })
  }
}

// Email Validation
const isValidEmail = () => {
  const regEmail =
    /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/
  return regEmail.test(email.value) || 'Please enter a valid email address!'
}
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
      <q-form>
        <BaseInput
          title="Your Fullname *"
          type="text"
          v-model="fullName"
          :rules="[(val) => !!val || 'Name is required!']"
        />
        <BaseInput
          title="Email Address *"
          type="email"
          v-model="email"
          :rules="[(val) => !!val || 'Email is required!', isValidEmail]"
        />
        <BasePassword title="Password *" v-model="password" />
        <div class="text-left q-my-xl">
          <q-checkbox v-model="accept" label="I accept the license and terms" />
        </div>
        <q-btn
          no-caps
          size="xl"
          label="Register Account"
          style="width: 100%"
          color="blue-14"
          @click="submit"
        />
      </q-form>

      <div class="q-my-lg">Or</div>
      <q-btn no-caps size="xl" label="Register with Google" style="width: 100%">
        <q-icon>
          <q-img
            src="@/assets/images/google.png"
            style="width: 24px; height: 30px"
          />
        </q-icon>
      </q-btn>
    </div>
  </div>
</template>
