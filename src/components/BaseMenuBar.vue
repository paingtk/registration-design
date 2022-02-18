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

  <template v-if="$route.name === 'PersonalInfo'">
    <div class="row menu" style="padding-bottom: 50px">
      <div class="col-6 text-left">
        <q-btn icon="chevron_left" flat label="Back" to="/" />
      </div>
      <div class="col-6 text-right">
        <div class="text-grey">STEP 01/03</div>
        <div class="text-weight-bold">Personal Info.</div>
      </div>
    </div>
  </template>
</template>

<style scoped>
.menu {
  margin-top: 200px;
}
a {
  text-decoration: none;
}
</style>
