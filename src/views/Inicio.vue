<template>
  <v-container class="inicio-pagina">
    <h2 class="text-h5 text-center mb-3 mt-5">Coleta Seletiva</h2>
     <v-img
      class="inicio-imag"
      src="../assets/coleta-seletiva.png">
    </v-img>
    <p class="texto-pagina">A Eco-Coleta é uma empresa especializada em pontos de coleta seletiva de resíduos. Atendemos pessoas físicas e jurídicas e realizamos novos cadastros.</p>
   
  </v-container>
</template>

<script>
export default {
  name: 'Inicio'
}
</script>

<style scoped>
  .inicio-pagina{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    justify-content: space-around;
  }
  .texto-pagina{
    padding-top: 15px;
    text-align: center;
    font-weight: bold;
  }
  .v-image{
    margin-top: 20px;
  }
</style>