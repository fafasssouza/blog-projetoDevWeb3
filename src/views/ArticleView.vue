<script setup>
  defineProps({
  title: String,
  content: String
  });

</script>
  
<template>
   <main class="rcontainer">
      <div class="login-container">
        <h1>Faça seu login 🚀</h1>  

        </div>
      </div> 
    </main>
</template>

<style scoped>
  h1 {
    font-family: "Poppins";
    padding: 30px 0;
  } 
  .register-link {
    font-size: 1em;
    font-style: italic;
  } 

  .btn-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .login-container {
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
