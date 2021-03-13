<template>
  <v-main>
    <h2>Cadastro de Coleta</h2>
  <v-form v-model="valid">
    
    <v-container>
      
      <v-row justify='center'>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="Nome"
            :rules="nomeRules"
            label="Nome:"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field class="1"
            v-model="Telefone"
            :rules="telefoneRules"
            label="Telefone:"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
        <v-text-field
          v-model="Endereço"
          :rules="endereçoRules"
          label="Endereço:"
          required
        ></v-text-field>
           </v-col>

        <v-col cols="12" md="4">
        <v-text-field
          v-model="Cep"
          :rules="cepRules"
          label="Cep:"
          required
        ></v-text-field>

         </v-col>

        <v-file-input
          accept="image/*"
          label="Nos envie uma foto da fachada."
        ></v-file-input>

          <!-- CHECKBOX -->
        
        <v-col
        
            cols="12"
            sm="4"
            md="4"
          >
            <v-checkbox
              v-model="ex4"
              label="Aço"
              color="black"
              value="red"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="ex4"
              label="Pilhas"
              color="black"
              value="red darken-3"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col
            cols="12"
            sm="4"
            md="4"
          >
            <v-checkbox
              v-model="ex4"
              label="Óleo de cozinha"
              color="black"
              value="indigo"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="ex4"
              label="Borracha"
              color="black"
              value="indigo darken-3"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col
            cols="12"
            sm="4"
            md="4"
          >
            <v-checkbox
              v-model="ex4"
              label="Capsulas de café"
              color="black"
              value="orange"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="ex4"
              label="Isopor"
              color="black"
              value="orange darken-3"
              hide-details
            ></v-checkbox>
          </v-col>
        </v-row>

        <v-row class="mt-12">
          <v-col
            cols="12"
            sm="4"
            md="4"
          >
            <v-checkbox
              v-model="ex4"
              label="Remédio"
              color="black"
              value="primary"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="ex4"
              label="Raio-x"
              color="black"
              value="secondary"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col
            cols="12"
            sm="4"
            md="4"
          >
            <v-checkbox
              v-model="ex4"
              label="Entulho"
              color="black"
              value="success"
              hide-details
            ></v-checkbox>
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
    Nome: "",
    nomeRules: [(v) => !!v || "Informe um nome."],
    Telefone: "",
    telefoneRules: [(v) => !!v || "Informem um telefone."],
    email: "",
    emailRules: [(v) => !!v || "Informe um E-mail."],
    Endereço: "",
    endereçoRules: [(v) => !!v || "Informe um endereço."],
    Cep: "",
    cepRules: [(v) => !!v || "Informe seu CEP."],
  }),
};
</script>

<style scoped>
   h2{
      text-align: center;
    }
</style>
