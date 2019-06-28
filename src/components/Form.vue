<template>
  <form class="userform" @submit.prevent="onSubmit">
    <div class="form-group">
      <input type="radio" name="gender" v-model="user.gender" id="male" value="male">
      <label for="male">Homme</label>

      <input type="radio" name="gender" v-model="user.gender" id="female" value="female">
      <label for="female">Femme</label>

      <span v-if="$v.user.gender.$dirty && !$v.user.gender.required">Le champs est requis</span>
    </div>

    <div class="form-group">
      <label for="lastname">Nom :</label>
      <input
        type="text"
        v-model="$v.user.lastname.$model"
        @blur="$v.user.lastname.$touch()"
        id="lastname"
        placeholder="DOE"
      >
      <span v-if="$v.user.lastname.$dirty && !$v.user.lastname.required">Le champs est requis</span>
      <span
        v-if="$v.user.lastname.$dirty && !$v.user.lastname.alpha"
      >Le champs ne doit contenir que des lettres</span>
    </div>

    <div class="form-group">
      <label for="firstname">Prénom :</label>
      <input
        type="text"
        v-model="$v.user.firstname.$model"
        @blur="$v.user.firstname.$touch()"
        id="firstname"
        placeholder="John"
      >
      <span v-if="$v.user.firstname.$dirty && !$v.user.firstname.required">Le champs est requis</span>
      <span
        v-if="$v.user.firstname.$dirty && !$v.user.firstname.alpha"
      >Le champs ne doit contenir que des lettres</span>
    </div>

    <div class="form-group">
      <label for="email">Email :</label>
      <input
        type="text"
        v-model="$v.user.email.$model"
        @blur="$v.user.email.$touch()"
        id="email"
        placeholder="john.doe@example.com"
      >
      <span v-if="$v.user.email.$dirty && !$v.user.email.required">Le champs est requis</span>
      <span v-if="$v.user.email.$dirty && !$v.user.email.email">L'adresse email est invalide</span>
    </div>

    <div class="form-group">
      <label for="phone">Téléphone :</label>
      <input
        type="text"
        v-model="$v.user.phone.$model"
        @blur="$v.user.phone.$touch()"
        id="phone"
        placeholder="06-78-90-12-34"
      >
      <span v-if="$v.user.phone.$dirty && !$v.user.phone.required">Le champs est requis</span>
      <span
        v-if="$v.user.phone.$dirty && !$v.user.phone.phoneFR"
      >Le numéro de téléphone doit être au format XX-XX-XX-XX-XX</span>
    </div>

    <div class="form-group">
      <label for="birthdate">Date de naissance :</label>
      <input
        type="date"
        v-model="$v.user.birthdate.$model"
        @blur="$v.user.birthdate.$touch()"
        id="birthdate"
        placeholder="04/11/1988"
      >
      <span v-if="$v.user.birthdate.$dirty && !$v.user.birthdate.required">Le champs est requis</span>
    </div>

    <div class="form-group">
      <label for="city">Ville :</label>
      <input
        type="text"
        v-model="$v.user.city.$model"
        @blur="$v.user.city.$touch()"
        id="city"
        placeholder="Paris"
      >
      <span v-if="$v.user.city.$dirty && !$v.user.city.required">Le champs est requis</span>
      <span
        v-if="$v.user.city.$dirty && !$v.user.city.alpha"
      >Le champs ne doit contenir que des lettres</span>
    </div>

    <div class="form-group">
      <label for="country">Pays :</label>
      <input
        type="text"
        v-model="$v.user.country.$model"
        @blur="$v.user.country.$touch()"
        id="country"
        placeholder="France"
      >
      <span v-if="$v.user.country.$dirty && !$v.user.country.required">Le champs est requis</span>
      <span
        v-if="$v.user.country.$dirty && !$v.user.country.alpha"
      >Le champs ne doit contenir que des lettres</span>
    </div>

    <div class="form-group">
      <label for="photo">Photo :</label>
      <input type="url" v-model.lazy="$v.user.photo.$model" id="photo" placeholder="http://">
      <span v-if="!$v.user.photo.url">L'URL est invalide</span>
    </div>

    <div class="actions">
      <button type="submit" class="btn">Envoyer</button>
    </div>
  </form>
</template>

<script>
import { required, alpha, email, url } from "vuelidate/lib/validators";
import UserService from "../services/UserService";

const phoneFR = value => /^0[0-9]-([0-9]{2}-){3}[0-9]{2}$/g.test(value);

export default {
  name: "Form",

  props: {
    user: {
      type: Object,
      default: function() {
        return {
          id: null,
          gender: "",
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          birthdate: "",
          city: "",
          country: "",
          photo: ""
        };
      }
    }
  },

  validations: {
    user: {
      gender: { required },
      firstname: { required, alpha },
      lastname: { required, alpha },
      email: { required, email },
      phone: { required, phoneFR },
      birthdate: { required },
      city: { required, alpha },
      country: { required, alpha },
      photo: { url }
    }
  },

  methods: {
    onSubmit: function() {
      // Si les règles de l'objet 'user' sont invalides, on stoppe l'exécution de la fonction
      if (this.$v.user.$invalid) return this.$v.user.$touch();

      // Le formulaire est valide, on prépare donc l'envoi des données au serveur
      UserService.addUser(this.user).then(res => {
        if (res.success) {
          // Redirige le visiteur vers la page de listing
          this.$router.replace("/users");
        } else if (res.error) {
        // eslint-disable-next-line
          console.error(res.message);
        }
      });
    }
  }
};
</script>

<style scoped>
.userform {
  margin: 2em 0;
}

.userform .form-group {
  margin-bottom: 1.2em;
}

.userform label {
  display: inline-block;
  vertical-align: middle;
  min-width: 150px;
  text-align: right;
}
.userform input[type="radio"] + label {
  min-width: 0;
  text-align: left;
  cursor: pointer;
}

.userform input:not([type="radio"]) {
  min-width: 200px;
  vertical-align: middle;
}

.userform input ~ span {
  display: block;
  font-size: 0.8em;
  color: red;
}

.userform .input-error {
  border: 1px solid red;
}
</style>
