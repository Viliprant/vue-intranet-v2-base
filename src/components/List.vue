<template>
  <div class="container centered">
    <h1>Liste des utilisateurs</h1>
    <hr>

    <form class="filterform" @submit.prevent>
      <input type="search" v-model="searchedUser" placeholder="Tapez un nom ou un lieu ...">

      <label for="filter">Filtrer par :</label>
      <select name="filterBy" v-model="filterUser">
        <option value="name">Nom</option>
        <option value="localisation">Localisation</option>
      </select>
    </form>

    <div class="userlist" v-if="userList">
      <Usercard
        :user="person"
        v-for="person in filteredList"
        :key="person.id"
        @remove="removeUser"
      />
    </div>
  </div>
</template>

<script>
import Usercard from "./Usercard";
import UserService from "../services/UserService";
import Vue from 'vue';

export default {
  name: "List",
  components: {
    Usercard
  },
  data: function() {
    return {
      userList: null,
      searchedUser: "",
      filterUser: "name"
    };
  },
  computed: {
    filteredList: function() {
      return this.userList.filter(user => {
        let fullname = user.firstname + " " + user.lastname;
        let localisation = user.city + " " + user.country;
        switch (this.filterUser) {
          case "name":
            return (
              fullname
                .toLowerCase()
                .indexOf(this.searchedUser.toLowerCase()) !== -1
            );

          case "localisation":
            return (
              localisation
                .toLowerCase()
                .indexOf(this.searchedUser.toLowerCase()) !== -1
            );

          default:
            return false;
        }
      });
    }
  },
  created: function() {
    UserService.fetchAll().then(userList => {
      this.userList = userList;
    }).catch(errorMessage => Vue.toasted.error(errorMessage.message));
  },
  methods: {
    removeUser: function(userToDelete) {
      UserService.removeUser(userToDelete)
        .then(() => {
          let index = this.userList.indexOf(userToDelete);
          if (index > -1) {
            this.userList.splice(index, 1);
          }
        })
        .catch(errorMessage => Vue.toasted.error(errorMessage.message));
    }
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
