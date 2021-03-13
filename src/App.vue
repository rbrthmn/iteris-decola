<template>
  <v-app class="app-top-bar">
    <v-app-bar app color="grey darken-3" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title><v-icon>mdi-delete-empty</v-icon>Eco-Coleta</v-toolbar-title>
      
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="black text--accent-4"
        >
          <router-link to="/">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Inicio</v-list-item-title>
          </v-list-item>
          </router-link>

          <router-link to="/login">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-login</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item>
          </router-link>

          <router-link to="">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account-plus</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Cadastro Pontos de Coleta</v-list-item-title>
          </v-list-item>
          </router-link>

          <router-link to="">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account-plus-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Cadastro de Usuários</v-list-item-title>
          </v-list-item>
          </router-link>

          <router-link to="/points">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-format-list-bulleted-square</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Lista de Pontos de Coleta</v-list-item-title>
          </v-list-item>
          </router-link>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
  
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>
<style scoped>
  .v-icon{
    padding-right: 10px;
  }
  .app-top-bar a{
    text-decoration: none;
  }
</style>