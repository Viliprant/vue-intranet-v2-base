<template>
  <div class="container centered">
    <h1>Bienvenue sur l'intranet</h1>
    <p>La plate-forme de l'entreprise</p>
    <hr>
    <h3>Avez-vous dit bonjour aujourd'hui à ...</h3>

    <article class="user-card">
      <figure>
        <img src="#" alt="Photo de John Doe">
      </figure>
      <div>
        <h1>John Doe</h1>
        <p>
          <i class="fa fa-envelope"></i>
          <a
            href="mailto:johndoe@email.com"
            title="Envoyer un email à John Doe johndoe@email.com"
          >johndoe@email.com</a>
          <br>

          <i class="fa fa-phone"></i>
          <a href="tel:0678901234" title="Téléphoner à John Doe (06 78 90 12 34)">06 78 90 12 34</a>
          <br>

          <i class="fa fa-calendar"></i>
          04/11/1988 (30 ans)
          <br>

          <i class="fa fa-map-marker"></i>
          Paris, France
        </p>
        <a href="#" class="btn btn-small">Supprimer</a>
        <a href="#" class="btn btn-small">Modifier</a>
      </div>
    </article>

    <div class="actions">
      <a href="#" class="btn" @click.prevent="getRandomUser">
        <i class="fa fa-random"/> Dire bonjour à quelqu'un d'autre
      </a>
    </div>
  </div>
</template>

<script>
export default {
    name : 'Home'
};
</script>

<style scoped>
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

