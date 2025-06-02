<script setup>
  defineProps({
    label: String
  });
</script>

<template>
  <button @click="console.log('hello')"> {{ label }}</button> 
</template>

<style scoped>
  button {
    padding: 10px 15px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
    transition: 0.5 ease;
  }
  button:hover {
    background-color: #45a049;
  }
</style>
