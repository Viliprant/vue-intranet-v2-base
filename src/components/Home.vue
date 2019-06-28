<template>
  <div class="container centered">
    <h1>Bienvenue sur l'intranet</h1>
    <p>La plate-forme de l'entreprise</p>
    <hr>
    <h3>Avez-vous dit bonjour aujourd'hui à ...</h3>

    <Usercard :user="person" v-if="person" @remove="removeUser"/>

    <div class="actions">
      <a href="#" class="btn" @click.prevent="getRandomUser()">
        <i class="fa fa-random"/> Dire bonjour à quelqu'un d'autre
      </a>
    </div>
  </div>
</template>

<script>
import Usercard from "./Usercard";
import UserService from "../services/UserService";
import Vue from 'vue';

export default {
  name: "Home",
  data: function() {
    return {
      people: null,
      person: null
    };
  },
  components: {
    Usercard
  },
  created() {
    UserService.fetchAll()
      .then(userlist => {
        //console.log('Listes des utilisateurs', userlist); // eslint-disable-line no-console

        this.people = userlist;
        this.getRandomUser();
      })
      .catch(errorMessage => Vue.toasted.error(errorMessage.message));
  },
  methods: {
    getRandomUser: function() {
      this.person = this.people[Math.floor(Math.random() * this.people.length)];
    },
    removeUser: function(userToDelete) {
      UserService.removeUser(userToDelete)
        .then(() => {
          let index = this.people.indexOf(userToDelete);
          if (index > -1) {
            this.people.splice(index, 1);
          }

          this.getRandomUser();
        })
        .catch(errorMessage => Vue.toasted.error(errorMessage.message));
    }
  }
};
</script>

<style scoped>
</style>

