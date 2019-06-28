<template>
  <article class="user-card">
    <figure>
      <img :src="user.photo || DEFAULT_PHOTO " :alt="'Photo de ' + fullname">
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
        {{`${user.city}, ${user.country}`}}
      </p>
      <a href="#" class="btn btn-small" @click.prevent="onRemove">Supprimer</a>
      <router-link class="btn btn-small" :to="`/edit/${user.id}`">Modifier</router-link>
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
    },
    DEFAULT_PHOTO: function() {
      return "https://s1.qwant.com/thumbr/0x0/2/2/6788a08a24aefe72817478982ee2e6/b_1_q_0_p_0.jpg?u=http%3A%2F%2Fgurucul.com%2Fwp-content%2Fuploads%2F2015%2F01%2Fdefault-user-icon-profile.png&q=0&b=1&p=0&a=1";
     }
  },
  methods : {
    onRemove: function() {
      this.$emit("remove", this.user); // Envoi l'objet 'user' vers le parent via l'événement personnalisé 'remove'
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
