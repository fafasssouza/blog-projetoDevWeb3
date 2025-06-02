<script setup>
  defineProps({
    title: String,
    content: String
  });   
</script>

<template>
  <section class="rcontainer">
    <div class="article-container" >
      <h3 class="title">{{ title }}</h3>
      <p class="content"> {{ content }} </p>
    </div>
  </section>
</template>

<style scoped>
  h3 {
    font-family: "Poppins";
    padding: 30px 0;
  } 

  .article-container {
    width: 50vw;
    max-height: 100%;
  }

  .rcontainer {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
