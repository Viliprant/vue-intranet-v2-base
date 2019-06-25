<template>
  <div class="container centered">
    <h1>Bienvenue sur l'intranet</h1>
    <p>La plate-forme de l'entreprise</p>
    <hr>
    <h3>Avez-vous dit bonjour aujourd'hui à ...</h3>

    <Usercard :user="person" v-if="person"/>

    <div class="actions">
      <a href="#" class="btn" @click.prevent="getRandomUser()">
        <i class="fa fa-random"/> Dire bonjour à quelqu'un d'autre
      </a>
    </div>
  </div>
</template>

<script>
import Usercard from "./Usercard";

export default {
    name : 'Home',
    data : function() {
      return {
        people : null,
        person : null
      }
    },
    components : {
        Usercard
    },
    created(){
      fetch('http://localhost:9000/collaborateurs')
        .then(res => res.json())
        .then(userlist => {
          console.log('Listes des utilisateurs', userlist); // eslint-disable-line no-console

          this.people = userlist;
          this.getRandomUser();
        });
    },
    methods : {
      getRandomUser : function(){
        this.person = this.people[Math.floor(Math.random() * (this.people.length))];
      }
    }
};
</script>

<style scoped>
</style>

