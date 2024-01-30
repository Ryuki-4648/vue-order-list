<script setup>
import { emit } from 'process';
import { ref, watch, defineProps } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  }
});

const inputValue = ref(props.modelValue);

watch(() => props.modelValue, (value) => {
  inputValue.value = value;
});

const emitUpdate = () => {
  emit('update:modelValue', inputValue.value);
};
</script>

<template>
  <input type="text" v-model="inputValue" @input="emitUpdate" class="w-40 tracking-wider border px-2 h-7 rounded-md bg-transparent mb-1 mr-2">
</template>