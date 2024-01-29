<script setup>
import { ref } from 'vue'
const inputValue = ref('');
</script>

<template>
  <input type="text" v-model="inputValue" class="border px-2 h-8 rounded-md bg-transparent">
</template>