<template>
  <article class="user-card">
    <figure>
      <img :src="user.photo" :alt="'Photo de ' + fullname">
    </figure>
    <div>
      <h1>{{fullname}}</h1>
      <p>
        <i class="fa fa-envelope"></i>
        <a
          :href="'mailto:' + user.email"
          :title="'Envoyer un email à ' + fullname + user.email"
        >{{user.email}}</a>
        <br>

        <i class="fa fa-phone"></i>
        <a
          :href="'tel:' + user.phone"
          :title="`Téléphoner à ${fullname} (${user.phone})`"
        >{{user.phone}}</a>
        <br>

        <i class="fa fa-calendar"></i>
        {{user.birthdate | convertDate }} ({{ user.birthdate | toAge }})
        <br>

        <i class="fa fa-map-marker"></i>
        {{user.country}}
      </p>
      <a href="#" class="btn btn-small">Supprimer</a>
      <a href="#" class="btn btn-small">Modifier</a>
    </div>
  </article>
</template>

<script>
export default {
  name: "Usercard",
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  filters: {
    convertDate: function(date) {
      let maDate = new Date(date);
      return maDate.toLocaleDateString("fr-FR");
    },
    toAge: function(birthdate){
        let age = Date.now() - new Date(birthdate).getTime();
        return Math.floor(age / (1000 * 3600 * 24 * 365.25)) + ' ans';
    }
  },
  computed: {
    fullname: function() {
      return this.user.firstname + " " + this.user.lastname;
    }
  }
};
</script>

<style>
.user-card {
  display: inline-flex;
  align-items: stretch;
  box-shadow: 0 0 15px #c0c0c0;
  border-radius: 2px;
  background-color: #fafafa;
  overflow: auto;
  text-align: left;
  padding: 0.25em 1.25em 0.25em 0;
}

.user-card > figure {
  margin: 0.25em;
  text-align: center;
  display: flex;
  align-items: center;
}

.user-card > figure > img {
  display: block;
  border-radius: 300px;
  max-width: 128px;
}

.user-card > div {
  margin: 0.25em;
  font-size: 0.8em;
  line-height: 1.6em;
}
</style>
