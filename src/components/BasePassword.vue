<script setup>
import { ref, computed } from 'vue'
const props = defineProps({
  modelValue: String,
  title: {
    type: String,
    default: '',
  },
})
const emit = defineEmits(['update:modelValue'])
const password = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})
const isPwd = ref(true)
</script>

<template>
  <div class="text-left q-mb-md">
    <label>{{ title }}</label>
    <q-input
      outlined
      :type="isPwd ? 'password' : 'text'"
      v-model="password"
      :rules="[
        (val) => val.length >= 7 || 'Password should be at least 7 characters!',
      ]"
    >
      <template v-slot:append>
        <q-icon
          :name="isPwd ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="isPwd = !isPwd"
        />
      </template>
    </q-input>
  </div>
</template>
