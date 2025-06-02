<script setup>
  //Props do input
  const props = defineProps({
    type: String,
    placeholder: String,
    width: String,
  });

  //Define o tamanho do input
  const inputSize =  {width: props.width}; 


  const vFocus = {
  mounted: (el) => el.focus()
  }
</script>

<template>
  <div :style="inputSize"> 
    <input 
    :type="type" :placeholder="placeholder" v-focus /> 
  </div>
</template>

<style scoped>
  input{
      padding: 10px;
      margin-bottom: 0.6em;
  }
</style>
