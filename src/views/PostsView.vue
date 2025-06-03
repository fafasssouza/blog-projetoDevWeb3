<script setup>
  import Article from "@/components/Article.vue";
  import { usePosts } from "@/stores/posts";
  import { onMounted, reactive, ref } from "vue";

  const articles = usePosts();
  const onLoading = ref(false);
  
  onMounted(async () => {
    if(!articles.posts.length) {
      try {
      const respose = await fetch("http://127.0.0.1:7779/getAllArticles");
      const rawarticles = await respose.json();
    
      rawarticles.forEach(element => {
        articles.set(element);
      });
    }catch(err) {
      console.error(err);
      return;
    }finally {
      onLoading.value = true;
    }
    } else {
      onLoading.value = true;
    }
  });
</script>

<template>
  <main class="root-container">
    <h3>Artigos</h3>
      <div v-if="onLoading" class="article-container">
        <Article v-for="article of articles.posts" 
         :title="article.title" :content="article.content" class="article" />
      </div>
      <div v-else>
        <h4>Carregando...</h4>
      </div>
  </main>
</template>

<style scoped>
  h3 {
    font-family: "Poppins";
    padding: 50px;
    font-size: 2em;
  } 

  .article-container {
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(3, 300px);
    grid-template-rows: repeat(3, 180px);
    gap: 10px;
    align-items: center;
    justify-content: center;
  }

  .root-container {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>