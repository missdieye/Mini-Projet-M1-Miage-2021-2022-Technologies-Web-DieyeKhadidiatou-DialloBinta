<template>
  <div>
    <form @submit.prevent="($event)">

                <md-dialog-content>
                    <md-field>
                      <label>Pseudo</label>
                      <md-input v-model="pseudo" name="pseudo" ></md-input>
                    </md-field>
                    <md-field>
                      <label>Mot de pass</label>
                      <md-input v-model="pass" name="pass"></md-input>
                    </md-field>
                      
                </md-dialog-content>

                <md-dialog-actions>
                  <button type="submit"> Submit</button>
                </md-dialog-actions>
    </form>
    <div>
       <p v-if="afficherErreur" id="error">Ce pseudo existe déjà</p>
  </div>
  </div>
  
</template>

<script>
 import { mapActions } from "vuex";

  export default {
    name: 'Identification',
    data: () => ({
    return : {
      pseudo: "",
      pass: "",
      afficherErreur : false,
    }
      
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
        this.afficherErreur = false
      } catch (error) {
        this.afficherErreur = true
      }
    },
  },
  }
</script>

<style scoped>
* {
  box-sizing: border-box;
}
label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}
button[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  cursor: pointer;
  border-radius:30px;
}
button[type=submit]:hover {
  background-color: #45a049;
}
input {
  margin: 5px;
  box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
  padding:10px;
  border-radius:30px;
  width: 100px;
}
#error {
  color: red;
}
</style>