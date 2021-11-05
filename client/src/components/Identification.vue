<template>
  <div class="centered-container">
    <md-content class="md-elevation-3">
      <div class="title">
        <div class="md-body-1">
          Veuillez vous connectez pour acceder aux données du restaurant
        </div>
      </div>

      <div class="form">
        <md-field>
          <label>Pseudo</label>
          <md-input v-model="pseudo" name="pseudo"></md-input>
        </md-field>
        <md-field>
          <label>Mot de passe</label>
          <md-input v-model="pass" name="pass"></md-input>
        </md-field>
      </div>

      <div class="actions md-layout md-alignment-center-space-between">
        <a href="">Reset password</a>
        <router-link to="/">
        <md-button class="md-raised md-primary" @click="auth">Log in</md-button>
        </router-link>
        
      </div>

       <div>
      <p v-if="afficherErreur" id="error">Ce pseudo existe déjà</p>
    </div>

      <div class="loading-overlay" v-if="loading">
        <md-progress-spinner
          md-mode="indeterminate"
          :md-stroke="2"
        ></md-progress-spinner>
      </div>
    </md-content>
    <div class="background" />
  </div>

</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Identification",
  data: () => ({
    return: {
      pseudo: "",
      pass: "",
      afficherErreur: false,
    },
  }),

  methods: {
    ...mapActions(["Identification"]),
    async submit() {
      try {
        const User = new FormData();
        User.append("pseudo", this.pseudo);
        User.append("password", this.pass);
        await this.Identification(this.form);
        this.$router.push("/posts");
        this.afficherErreur = false;
      } catch (error) {
        this.afficherErreur = true;
      }
    },
  },
};
</script>

<style scoped>
.centered-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
}
  .title {
    text-align: center;
    margin-bottom: 30px;
  }
    img {
      margin-bottom: 16px;
      max-width: 80px;
    }
  

    .md-button {
      margin: 0;
    }
  .form {
    margin-bottom: 60px;
  }
 
  .md-content {
    z-index: 1;
    padding: 40px;
    width: 100%;
    max-width: 400px;
    position: relative;
  }
  .loading-overlay {
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
  }

</style>

<!-- <template>
  <div class="centered-container">
    <md-content class="md-elevation-3">

      <div class="title">
        <img src="https://vuematerial.io/assets/logo-color.png">
        <div class="md-title">Vue Material</div>
        <div class="md-body-1">Build beautiful apps with Material Design and Vue.js</div>
      </div>

      <div class="form">
        <md-field>
          <label>E-mail</label>
          <md-input v-model="login.email" autofocus></md-input>
        </md-field>

        <md-field md-has-password>
          <label>Password</label>
          <md-input v-model="login.password" type="password"></md-input>
        </md-field>
      </div>

      <div class="actions md-layout md-alignment-center-space-between">
        <a href="/resetpassword">Reset password</a>
        <md-button class="md-raised md-primary" @click="auth">Log in</md-button>
      </div>

      <div class="loading-overlay" v-if="loading">
        <md-progress-spinner md-mode="indeterminate" :md-stroke="2"></md-progress-spinner>
      </div>

    </md-content>
    <div class="background" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      loading: false,
      login: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    auth() {
      // your code to login user
      // this is only for example of loading
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 5000);
    }
  }
};
</script>

<style lang="scss">
.centered-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  .title {
    text-align: center;
    margin-bottom: 30px;
    img {
      margin-bottom: 16px;
      max-width: 80px;
    }
  }
  .actions {
    .md-button {
      margin: 0;
    }
  }
  .form {
    margin-bottom: 60px;
  }
 
  .md-content {
    z-index: 1;
    padding: 40px;
    width: 100%;
    max-width: 400px;
    position: relative;
  }
  .loading-overlay {
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
 */ -->
