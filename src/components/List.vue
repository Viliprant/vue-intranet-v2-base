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

    <div class="userlist">
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
    </div>
  </div>
</template>

<script>
export default {
  name: "List"
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
