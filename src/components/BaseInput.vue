<script setup>
import { computed } from 'vue'
const props = defineProps({
  modelValue: String,
  rules: String | Array,
  title: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
})
const emit = defineEmits(['update:modelValue'])

const model = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})
</script>

<template>
  <div class="text-left q-mb-md">
    <label>{{ title }}</label>
    <q-input :type="type" outlined v-model="model" :rules="rules" />
  </div>
</template>
