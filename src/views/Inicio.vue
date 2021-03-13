<template>
  <v-container class="inicio-pagina">
    <h2 class="text-h5 text-center mb-3 mt-5">Coletamos o seu lixo</h2>
    <p class="texto-pagina">A Eco-Coleta é uma empresa especializada em pontos de coleta seletiva de resíduos. Atendemos pessoas físicas, jurídicas e realizamos novos cadastros.</p>
    <v-img
      class="inicio-imag"
      src="../assets/coleta-seletiva.png">
    </v-img>
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
    background-color: cornsilk;
    justify-content: space-around;
  }
  .texto-pagina{
    padding-top: 20px;
    text-align: center;
    
    font-size: large;
  }
  .v-image{
    margin-top: 20px;
    background-color:cornsilk;
  }

</style>