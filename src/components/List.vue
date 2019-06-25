<template>
  <div class="container centered">
    <h1>Liste des utilisateurs</h1>
    <hr>

    <form class="filterform">
      <input type="search" placeholder="Tapez un nom ou un lieu ...">

      <label for="filter">Filtrer par :</label>
      <select name="filterBy">
        <option value="name">Nom</option>
        <option value="localisation">Localisation</option>
      </select>
    </form>

    <div class="userlist" v-if="userList">
      <Usercard :user="person" v-for="person in userList" :key="person.id"/>
    </div>
  </div>
</template>

<script>
import Usercard from './Usercard';
import UserService from '../services/UserService';

export default {
  name: "List",
  components : {
      Usercard
  },
  data : function() {
      return {
          userList: null
      }
  },
  created : function(){
      UserService
        .fetchAll()
        .then(userList => {
            this.userList = userList;
        })
  }
};
</script>

<style scoped>
.userlist {
  display: flex;
  flex-wrap: wrap;
}

.userlist > * {
  box-sizing: border-box;
  width: calc(94% / 3);
  margin: 1%;
}

.filterform {
  margin: 2em 0;
}
</style>
