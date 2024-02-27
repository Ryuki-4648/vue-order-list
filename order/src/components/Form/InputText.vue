<script setup>
import { emit } from 'process';
import { ref, watch, defineProps } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  maskValue: {
    type: String,
    required: false
  },
  addClasses: {
    type: String,
    required: false
  }
})

const inputValue = ref(props.modelValue)

const inputType = ref('text')

watch(() => props.modelValue, (value) => {
  inputValue.value = value
})

watch(() => props.maskValue, (value) => { // 第一引数:監視したいデータや式 第二引数:値が変更された際に実行されるコールバック関数
  inputType.value = value === 'password' ? 'password' : 'text'
})

const emitUpdate = () => {
  emit('update:modelValue', inputValue.value)
}
</script>

<template>
  <input
    :type="inputType"
    :class="addClasses"
    v-model="inputValue"
    @input="emitUpdate"
    class="w-full md:w-32 tracking-wider border px-2 h-7 rounded-md bg-transparent mb-1 mr-2"
  >
</template>