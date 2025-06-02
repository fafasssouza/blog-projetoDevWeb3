<script setup>
  import GenericInput from "@/components/GenericInput.vue";
  import GenericButton from "@/components/GenericButton.vue";
  import { RouterLink } from "vue-router";
</script>

<template> 
    <main class="rcontainer">
      <div class="register-container">
        <h1>Faça seu registro 🤩</h1>
       
        <GenericInput 
          type="text" 
          placeholder="Escolha seu username"  
          v-focus="true"
        />

        <GenericInput 
          type="password" 
          placeholder="Escolha uma senha" 
        />  

        <div class="btn-container">
          <GenericButton label="Enviar" />

          <!--Envia para o /login-->
          <RouterLink to="/login" class="login-link">
            Já tem conta?
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
  .login-link {
    font-size: 1em;
    font-style: italic;
  } 

  .btn-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .register-container {
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
