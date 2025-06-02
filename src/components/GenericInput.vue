<script setup>
  const props = defineProps({
    type: String,
    placeholder: String,
  });  
</script>

<template>
  <input :type="type" :placeholder="placeholder"/> 
</template>

<style scoped>
  input{
    padding: 10px;
    margin-bottom: 0.6em;
      width: 100%;
    padding: 12px 16px;
    font-size: 16px;
    font-family: inherit;
    color: #333;

    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;

    transition: border 0.2s, box-shadow 0.2s, background-color 0.3s;
  }

  input::placeholder {
    color: #aaa;
  }
 
  input:focus {
    outline: none;
    border-color: #007bff;
    background-color: #fff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.2);
  }
</style>
