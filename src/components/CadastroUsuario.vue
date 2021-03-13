<template>
<v-main>
    <h2>Cadastro de Usuario</h2>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="Nome"
            :rules="nameRules"
            label="Nome:"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail:"
            required
          ></v-text-field>
        </v-col>

          <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="Senha"
            :rules="senhaRules"
            label="Senha:"
            required
          ></v-text-field>
        </v-col>
      
        </v-row>
    </v-container>
  </v-form>
  </v-main>
</template>

<script>
  export default {
    data: () => ({
      valid: false,
      Nome: '',
      nameRules: [
        v => !!v || 'Informe seu nome',
      ],
      email: '',
      emailRules: [
        v => !!v || 'Informe um E-mail',
      ],
      Senha:'',
      senhaRules:[
        v => !!v || 'Informe uma senha',
      ],
    }),
  }

  
</script>

<style scoped>
  h2{
    text-align: center;
  }
</style>