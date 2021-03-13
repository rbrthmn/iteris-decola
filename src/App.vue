<template>
<div>
    
    <CadastroColeta/>
    <Home/>
</div>
</template>

<script>

import CadastroColeta from './components/CadastroColeta'
import Home from './components/Home'

export default {
  name: 'App',
  components: {
    Home,
    CadastroColeta
  }

}

</script>

<style scoped>
  html{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
</style>