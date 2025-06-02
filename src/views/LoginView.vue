<script setup>
  import GenericInput from "@/components/GenericInput.vue";
  import GenericButton from "@/components/GenericButton.vue";
  import { RouterLink } from "vue-router";
 
</script>

<template> 
    <main class="rcontainer">
      <div class="login-container">
        <h1>Faça seu login 🚀</h1>
       
        <GenericInput 
          type="text" 
          placeholder="Coloque seu username"  
          v-focus="true"
        />

        <GenericInput 
          type="password" 
          placeholder="Coloque sua senha" 
        />  

        <div class="btn-container">
          <GenericButton label="Enviar" :_onclick="teste" />

          <!--Envia para o /register-->
          <RouterLink to="/register" class="register-link">
            Ainda não tem uma conta?
          </RouterLink>
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
