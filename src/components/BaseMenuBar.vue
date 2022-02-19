<script setup>
import { useRouter } from 'vue-router'

defineProps({
  pageName: {
    type: String,
    required: true,
  },
  step: {
    type: String,
    required: true,
  },
})
const router = useRouter()
const back = () => router.go(-1)
</script>

<template>
  <template v-if="$route.name === 'JoinUs'">
    <div class="menu" style="padding-bottom: 250px">
      <div>
        Already have an account?
        <span class="text-weight-bold">
          <a href="">Sign in</a>
        </span>
      </div>
    </div>
  </template>

  <template v-else>
    <div class="row menu" style="padding-bottom: 50px">
      <div class="col-6 text-left">
        <q-btn icon="chevron_left" flat label="Back" @click="back" />
      </div>
      <div class="col-6 text-right">
        <div class="text-grey">{{ step }}</div>
        <div class="text-weight-bold">{{ pageName }}</div>
      </div>
    </div>
  </template>

  <!-- <template v-if="$route.name === 'PersonalInfo'">
    <div class="row menu" style="padding-bottom: 50px">
      <div class="col-6 text-left">
        <q-btn icon="chevron_left" flat label="Back" to="/" />
      </div>
      <div class="col-6 text-right">
        <div class="text-grey">STEP 01/03</div>
        <div class="text-weight-bold">Personal Info.</div>
      </div>
    </div>
  </template> -->
</template>

<style scoped>
.menu {
  margin-top: 10vh;
}
a {
  text-decoration: none;
}
</style>
