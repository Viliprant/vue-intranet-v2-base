<template>
  <div class="container centered">
    <h1>Modifier un collaborateur</h1>
    <hr>
    <Form :user="this.user" @request="updateUser"/>
  </div>
</template>

<script>
import Form from "./Form";
import UserService from "../services/UserService";
import Vue from 'vue';

export default {
  name: "Edit",
  data: function() {
    return {
      user: {}
    };
  },
  components: {
    Form
  },
  created() {
    UserService.fetchOne(this.$route.params.id)
      .then(user => {
        this.user = user;
      })
      .catch(errorMessage => {
          this.$toasted.error(errorMessage.message);
          return this.$router.replace("/users");
          });
  },
  methods: {
    updateUser: function(user) {
      UserService.updateUser(user).catch(errorMessage => this.$toasted.error(errorMessage.message));
    }
  }
};
</script>

<style>
</style>
