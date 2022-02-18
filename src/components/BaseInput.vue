<script setup>
import { ref } from 'vue'
const props = defineProps({
  modelValue: String,
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
const model = ref(props.modelValue)
const onChanged = (e) => {
  emit('update:modelValue', model.value)
}
</script>

<template>
  <div class="text-left q-mb-md">
    <label>{{ title }}</label>
    <q-input :type="type" outlined v-model="model" @input="onChanged(e)" />
  </div>
</template>
