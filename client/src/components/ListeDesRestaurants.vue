<template>
  <div>
    <md-dialog-alert
      :md-active.sync="notFound"
      md-content="Aucun restaurant ne correspond à votre recherche"
      md-confirm-text="ouff!"
    />

    <h2>{{ msg }}</h2>
    <div>
      <md-button class="md-raised md-primary" @click="restoModal=true">
        Ajouter un nouveau restaurant
      </md-button>
      <md-dialog :md-active.sync="restoModal">
        <md-dialog-title>Ajout d'un nouveau restaurant</md-dialog-title>
        
        <form @submit.prevent="ajouterRestaurant($event)">

          <md-dialog-content>
              <md-field>
                <label>Nom</label>
                <md-input v-model="nom" required></md-input>
              </md-field>
              <md-field>
                <label>Cuisine</label>
                <md-input v-model="cuisine" required></md-input>
              </md-field>
              <md-field>
                <label>Ville</label>
                <md-input v-model="borough" ></md-input>
              </md-field>
          </md-dialog-content>

          <md-dialog-actions>
            <md-button class="md-primary" @click="restoModal= false">Close</md-button>
            <md-button class="md-primary">Ajouter</md-button>
          </md-dialog-actions>
        </form>

    </md-dialog>
    </div>

    

    
    <br />
      <md-table 
        class="table-md"
        v-model="restaurants"
        md-sort="name"
        md-sort-order="asc"
        md-card>
        <md-table-toolbar>
          <div class="md-toolbar-section-start">
            <p>Nombre de restaurants par page: 
        <input 
        @change="getRestaurantsFromServer()"
        type="range" min=2 max=100 value=10 v-model="pageSize">
        {{pageSize}}</p>
          </div>

          <md-field  class="md-toolbar-section-end">
              <md-input @input="chercherResto()" v-model="nomRestoRechercher" placeholder="Chercher par nom:">
              </md-input>
          </md-field>
        </md-table-toolbar>

        <md-table-row 
          :style="{ backgroundColor: getColor(index) }"
          :class="{ bordureRouge: index === 2 }"
          slot="md-table-row"
          slot-scope="{ item, index }"
        >
          
          <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
          <md-table-cell md-label="Cuisine" md-sort-by="cuisine">{{item.cuisine}}</md-table-cell>
          <md-table-cell md-label="Ville" md-sort-by="cuisine">{{item.borough}}</md-table-cell>
          <md-table-cell md-label="Action">
            <router-link :to="'/restaurant/' + item._id"><button class="md-accent"><md-icon>read_more</md-icon></button>
            </router-link>
          </md-table-cell>
        </md-table-row>
      </md-table>
      <md-table-toolbar>
        <div class="md-toolbar-section-start">
          <p>Nombre de restaurants : {{ nombreRestaurantsTotal }}</p>
            <br> 
          <p>Nombre de Pages Total : {{ nbrePagesTotal }}</p>
        
        </div>
        <div  class="md-toolbar-section-end">
          <md-button :disabled="page === 0" @click="pagePrecedente()"
          >Précédente
          </md-button
            >&nbsp;&nbsp;
          <md-button :disabled="page === nbrePagesTotal" @click="pageSuivante()"
          >Suivante</md-button>
        </div>
      </md-table-toolbar>
      
  </div>
</template>


<script>
import _ from "lodash";
export default {
  name: "ListeDesRestaurants",
  data: () => {
    return {
      restaurants: [],
      nom: "",
      cuisine: "",
      nombreRestaurantsTotal: 0,
      page: 0,
      pageSize: 10,
      nbrePagesTotal: 0,
      msg: "",
      nomRestoRechercher: "",
      notFound: false,
      restoModal : false,
    };
  },
  mounted() {
    console.log("mounted");
    this.getRestaurantsFromServer();
  },
  methods: {
    pagePrecedente() {
      if (this.page == 0) return;

      this.page--;
      this.getRestaurantsFromServer();
    },
    pageSuivante() {
      if (this.page === this.dernierePage) return;
      this.page++;
      this.getRestaurantsFromServer();
    },
    getRestaurantsFromServer() {
      let url = "http://localhost:8080/api/restaurants?";
      url += "page=" + this.page;
      url += "&pagesize=" + this.pageSize;
      url += "&name=" + this.nomRestoRechercher;

      fetch(url)
        .then((responseJSON) => {
          //arow fonction conserve le bon "this".
          responseJSON.json().then((resJs) => {
            // Maintenant resJs est un vrai objet JavaScript
            this.restaurants = resJs.data;
            console.log("Restaurants récupérés");
            console.dir(this.restaurants);
            this.nombreRestaurantsTotal = resJs.count;
            this.nbrePagesTotal = Math.round(
              this.nombreRestaurantsTotal / this.pageSize
            );
            if (this.nombreRestaurantsTotal <= 0) {
              this.notFound = true;
            } else {
              this.notFound = false;
            }
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    chercherResto: _.debounce(function () {
      this.getRestaurantsFromServer();

      // this.getRestaurantsFromServer();
    }, 1000),
    supprimerRestaurant(r) {
      let url = "http://localhost:8080/api/restaurants/" + r._id;

      fetch(url, {
        method: "DELETE",
      })
        .then((responseJSON) => {
          responseJSON.json().then((res) => {
            // Maintenant res est un vrai objet JavaScript
            console.log(res.msg);
            this.msg = res.msg;

            //On raffraichit la vue
            this.getRestaurantsFromServer();
          });
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    ajouterRestaurant(event) {
      // Récupération du formulaire. Pas besoin de document.querySelector
      // ou document.getElementById puisque c'est le formulaire qui a généré
      // l'événement
      let form = event.target;

      // Récupération des valeurs des champs du formulaire
      // en prévision d'un envoi multipart en ajax/fetch
      let donneesFormulaire = new FormData(form);

      let url = "http://localhost:8080/api/restaurants";

      fetch(url, {
        method: "POST",
        body: donneesFormulaire,
      })
        .then((responseJSON) => {
          responseJSON.json().then((res) => {
            // Maintenant res est un vrai objet JavaScript
            console.log(res.msg);
            this.msg = res.msg;

            //On raffraichit la vue
            this.getRestaurantsFromServer();
          });
        })
        .catch(function (err) {
          console.log(err);
        });
      this.nom = "";
      this.cuisine = "";
    },
    getColor(index) {
      return index % 2 ? "lightBlue" : "pink";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: blue;
}
.table-md {
  display: flex;
}
.md-toolbar-section-start p {
    display: contents;
}
</style>
