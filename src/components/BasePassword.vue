<script setup>
import { ref } from 'vue'
const props = defineProps({
  modelValue: String,
  title: {
    type: String,
    default: '',
  },
})
const emit = defineEmits(['update:modelValue'])
const onChanged = () => emit('update:modelValue', password.value)
const password = ref(props.modelValue)
const isPwd = ref(true)
</script>

<template>
  <div class="text-left q-mb-md">
    <label>{{ title }}</label>
    <q-input
      outlined
      :type="isPwd ? 'password' : 'text'"
      @input="onChanged"
      v-model="password"
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
