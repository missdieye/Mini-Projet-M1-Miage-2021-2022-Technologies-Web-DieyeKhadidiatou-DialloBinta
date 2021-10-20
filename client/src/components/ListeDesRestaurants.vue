
<template>
  <div >
    <h2>{{msg}}</h2>
      <form @submit.prevent="ajouterRestaurant($event)">
        <label>
            Nom : <input type="text" name="nom" required v-model="nom">
        </label>
        <label>
            Cuisine : <input type="text" name="cuisine" required v-model="cuisine">
        </label>

        <button>Ajouter</button>
    </form>

    <h1>Nombre de restaurants : {{nombreRestaurantsTotal}}</h1>
    <p>Chercher par nom: 
        <input @input="chercherResto()"  type="text" v-model="nomRestoRechercher">
    </p>
    <p>Nombre de Pages Total : {{nbrePagesTotal}}</p>
    
    <p>Nombre de restaurants par page: 
        <input 
        @change="getRestaurantsFromServer()"
        type="range" min=2 max=100 value=10 v-model="pageSize">
        {{pageSize}}</p>
    <md-button :disabled="page===0" @click="pagePrecedente()">Précédente</md-button>&nbsp;&nbsp;
    <md-button :disabled="page===nbrePagesTotal" @click="pageSuivante()">Suivante</md-button>
    <br>
    <md-table v-model="restaurants" md-sort="name" md-sort-order="asc" md-card>
        <md-table-toolbar>
        <h1 class="md-title">Restaurants</h1>
      </md-table-toolbar>

      <md-table-row
       
       :style="{backgroundColor:getColor(index)}" 
        :class="{bordureRouge:(index === 2)}"
                 slot="md-table-row" slot-scope="{ item,index }" >
        <md-table-cell md-label="Name" md-sort-by="name"> {{ item.name }}</md-table-cell>
        <md-table-cell md-label="Cuisine" md-sort-by="cuisine">{{ item.cuisine }}</md-table-cell>
        <md-table-cell md-label="Action" > 
<router-link :to=" '/restaurant/' + item._id">[Détail d'un Restaurant]
        </router-link>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: 'ListeDesRestaurants',
  data: function(){
      return {
            restaurants: [],
            nom: '',
            cuisine: '',
            nombreRestaurantsTotal: 0,
            page: 0,
            pageSize: 10,
            nbrePagesTotal: 0,
            msg: '',
            nomRestoRechercher: ''
        }
    },
        mounted() {
            console.log("mounted")
            this.getRestaurantsFromServer();
        }
        ,
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
                    .then((responseJSON) => {//arow fonction conserve le bon "this".
                        responseJSON.json()
                            .then((resJs) => {
                                // Maintenant resJs est un vrai objet JavaScript
                                this.restaurants = resJs.data;
                                console.log("Restaurants récupérés")
                                console.dir(this.restaurants);
                                this.nombreRestaurantsTotal = resJs.count;
                                this.nbrePagesTotal = Math.round(this.nombreRestaurantsTotal / this.pageSize);
                            });
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            },
            chercherResto:
                _.debounce(function () {
                    this.getRestaurantsFromServer();
                }, 1000),
            supprimerRestaurant(r) {
                let url = "http://localhost:8080/api/restaurants/" + r._id;
                
                fetch(url, {
                    method: "DELETE",
                    
                })
                    .then((responseJSON) => {
                        responseJSON.json()
                            .then((res) => {
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
                    body: donneesFormulaire
                })
                    .then((responseJSON) => {
                        responseJSON.json()
                            .then((res) => {
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
                return (index % 2) ? 'lightBlue' : 'pink';
            }
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
    color: blue;
}
</style>
