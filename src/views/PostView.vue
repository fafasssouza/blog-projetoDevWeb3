<script setup>
import { usePosts } from '@/stores/posts';

  defineProps({
    title: String,
  });   

  const context = usePosts();

</script>

<template>
  <section class="root-container">
    <div class="article-container" >
      <h3 class="title">{{ title }}</h3>
      <p class="content"> 
        {{ context.getByTitle(title).content || "Sem texto" }}
      </p>
    </div>
  </section>
</template>

<style scoped>
  h3 {
    font-family: "Poppins";
    padding: 30px 0;
    font-size: 2em;
  } 

  .article-container {
    width: 50vw;
    max-height: 100%;
  }

  .root-container {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
</style>
