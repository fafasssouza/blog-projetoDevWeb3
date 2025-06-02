<script setup>
  import GenericButton from "./GenericButton.vue"

  defineProps({
    title: String,
    content: String
  });  

  const openArticle = () => {
    
  }
</script>

<template>
  <section class="articleContainer">
    <h3 class="title">{{ title }}</h3>
    <p class="content"> {{ content }} </p>

    <GenericButton label="Ver" class="ver-btn" :_onclick="openArticle" /> 
  </section>
</template>

<style scoped>
  .articleContainer {
    width: 30vw;
    height: 25vh;
    display: block; /* so the whole card is clickable if used as <a> */
    max-width: 400px;
    padding: 20px;
    border-radius: 12px;
    background-color: #fff;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    text-decoration: none;
    color: inherit;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .articleContainer:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
  }

  .articleContainer h3 {
    margin: 0 0 10px;
    font-size: 20px;
    font-family: "Poppins";
  }

  .articleContainer p {
    margin: 0;
    font-size: 14px;
    color: #666;
  }

  .ver-btn {
    margin: 25px 0;
  }
</style>
