<template>
  <div class="identification">
    <div classe="titre_id"> <h1>Un clique! Un repas!</h1>
    <h2>Connectez vous pour choisir le restaurant de votre  choix</h2></div>
   
    <div class="formulaire">
      <h1>Bienvenue!</h1>
      <md-toolbar
        md-elevation="1"
        class="md-accent infos"
        v-if="this.impossible"
      >
        <i class="">
          <b>Connexion Impossible!</b> Votre <b>pseudo</b> ou
          <b>mot de passe</b> est incorrect.</i
        >
      </md-toolbar>

      <form @submit.prevent="login(pseudo, pass)">
        <md-field>
          <label>Pseudo</label>
          <md-input
            v-model="pseudo"
            name="pseudo"
            placeholder="Pseudo"
            class="input"
          ></md-input>
        </md-field>

        <md-field>
          <label>Mot de passe</label>
          <md-input
            v-model="pass"
            name="pass"
            type="password"
            placeholder="Mot de passe"
            class="input"
          ></md-input>
        </md-field>

        <md-button type="submit" class="md-raised md-primary button input"
          >Se connecter</md-button
        >
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Identification",
  data() {
    return {
      users: [],
      pseudo: "",
      pass: "",
      impossible: false,
    };
  },
  methods: {
    //Méthode pour authentification
    login(ps, mdp) {
      let url = "http://localhost:8080/api/login/" + ps + "/" + mdp;

      fetch(url)
        .then((responseJSON) => {
          responseJSON.json().then((resJs) => {
            this.users = resJs.user;
            if (this.users != null) {
              this.$router.push("listerestaurants");
              location.reload();
            } else {
              this.impossible = true;
            }
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    .formulaire {
        background: rgba(255, 255, 255, 0.4);
        position: fixed;
        top: 30%;
        left: 30%;
        width: 40%;
        text-align: center;
        padding: 5px;
        border-radius: 3rem;
        box-shadow: 0px 0px 10px 0px;
        padding-top: 3%;
        padding-bottom: 5%;
        font-family: 'Poppins', sans-serif;
        
    }
    h1 {
        cursor: default;
        user-select: none;
    }
    .input {
        border-radius: 3rem;
        border: none;
        padding: 10px;
        text-align: center;
        outline: none;
        margin: 10px;
        width: 30%;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    .input:hover {
        box-shadow: 0px 0px 5px 0px;
    }
    .input:active {
        box-shadow: 0px 0px 5px 0px;
    }

.md-content.md-app-content.md-flex.md-theme-default {
    
    padding: 0 !important;
}

    .identification{
      background-image: url("../assets/Plats_a_emporter\ clair\ de\ la\ plume.jpg");
    }
    div#mainContent {
      height: 520px !important;
    }

    .titre_id{
      color :rgb(165, 85, 129) !important;
    }
</style>