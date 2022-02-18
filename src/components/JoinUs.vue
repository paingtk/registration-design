<script setup>
const click = () => console.log('click')
</script>

<template>
  <div class="row">
    <div class="col-12">
      <q-card flat>
        <div class="text-left text-h3 text-weight-bold">Join Us!</div>
        <div class="text-left text-h5 text-grey q-mt-md q-mb-xl">
          To begin this journey, tell us what type of
          <br />
          account you'd be opening.
        </div>
      </q-card>
    </div>
    <div class="col-12">
      <q-card class="my-card" @click="click">
        <q-card-section class="q-pt-md" horizontal>
          <q-list>
            <q-item>
              <q-item-section class="col-3 flex flex-center">
                <q-img
                  width="52px"
                  height="52px"
                  src="@/assets/images/polygon.png"
                />
              </q-item-section>

              <q-item-section class="col-8">
                <div class="text-left text-weight-bold">Individual</div>
                <div class="text-left text-grey">
                  Personal account to manage all your activities.
                </div>
              </q-item-section>
              <q-item-section>
                <q-icon name="arrow_forward" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-12">
      <q-card class="my-card q-mt-xl" @click="click">
        <q-card-section class="q-pt-md" horizontal>
          <q-list>
            <q-item>
              <q-item-section class="col-3 flex flex-center">
                <q-img
                  width="52px"
                  height="52px"
                  src="@/assets/images/polygon2.png"
                />
              </q-item-section>

              <q-item-section class="col-8">
                <div class="text-left text-weight-bold">Business</div>
                <div class="text-left text-grey">
                  Own or belong to a company, this is for you.
                </div>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<style scoped>
.my-card {
  width: 426px;
  height: 108px;
}
.my-card:hover {
  border: 1px solid #1565d8;
  background-color: #f5f9ff;
  cursor: pointer;
}
</style>
