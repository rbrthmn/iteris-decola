<template>
    <div class="login">
        <h1>Login</h1>
        <input class="email" type="text" placeholder="Email">
        <br>
        <input class="senha" type="passaword" placeholder="Senha">
        <br>
       
        <v-btn depressed >
                Login
        </v-btn>
    </div>
</template>

<script>
export default {
    name: "Login",
    data(){
        return{};    
    },
    methods:{}
};
</script>

<style scoped>
.login{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
}
.email{
    padding-top: 10px;
}
.senha{
    padding-top: 10px;
}

</style>