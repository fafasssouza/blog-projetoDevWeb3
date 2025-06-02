<script setup>
  defineProps({
    label: String,
    _onclick: Function
  });
</script>

<template>
  <button @click="_onclick"> {{ label }}</button> 
</template>

<style scoped>
  button {
    padding: 12px 20px;
    background-color: #4CAF50;
    color: white;
    font-size: 1em;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s, box-shadow 0.2s;
  }

  button:hover {
    background-color: #45a049;
  }

  button:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.4);
  }

  button:active {
    background-color: #1e7e34;
  }
</style>
