<template>
  <div class="container centered">
    <h1>Ajouter un collaborateur</h1>
    <hr>
    <Form @request="addUser"/>
  </div>
</template>

<script>
import Form from "./Form";
import UserService from "../services/UserService";
import Vue from 'vue';

export default {
  name: "Add",
  components: {
    Form
  },
  methods : {
    addUser : function(user){
      // Le formulaire est valide, on prépare donc l'envoi des données au serveur
      UserService.addUser(user).then(() => {
          // Redirige le visiteur vers la page de listing
          this.$router.replace("/users");
      }).catch(errorMessage =>Vue.toasted.error(errorMessage.message));
    }
  }
};
</script>

<style scoped>
</style>