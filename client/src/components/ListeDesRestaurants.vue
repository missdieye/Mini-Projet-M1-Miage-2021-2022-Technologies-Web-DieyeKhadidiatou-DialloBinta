<template>
  <div>
    <md-toolbar>
      <md-list class="infosResto">
        <md-list-item>
          <md-icon>dinner_dining</md-icon>
          <span class="md-list-item-text"
            ><b>Nombre de restaurants par page : </b></span
          >
          <p>
            <input
              type="range"
              min="2"
              max="100"
              @change="getRestaurantsFromServer()"
              v-model="pageSize"
            />{{ pageSize }}
          </p>
        </md-list-item>
        <md-list-item>
          <md-icon><span class="material-icons">restaurant</span></md-icon>
          <span class="md-list-item-text"><b>Nombre de restaurants: </b></span>
          <p>{{ nombreRestaurantsTotal }}</p>
        </md-list-item>
        <md-list-item>
          <md-icon>pages</md-icon>
          <span class="md-list-item-text"><b>Nombre de Pages Total : </b></span>
          <p>{{ nbrePagesTotal }}</p>
        </md-list-item>
      </md-list>
    </md-toolbar>
    <br />
    <md-table
      class="table-md"
      v-model="restaurants"
      md-sort="name"
      md-sort-order="asc"
      md-card
    >
      <md-table-toolbar>
        <div class="md-toolbar-section-start">
          <md-button class="md-raised md-primary" @click="restoModal = true">
            <md-icon><span class="material-icons">add</span></md-icon
            >Ajouter un nouveau restaurant
          </md-button>
          <md-dialog :md-active.sync="restoModal">
            <md-dialog-title>Ajout d'un nouveau restaurant</md-dialog-title>

            <form @submit.prevent="ajouterRestaurant($event)">
              <md-dialog-content>
                <md-field>
                  <label>Nom</label>
                  <md-input v-model="nom" name="nom" required></md-input>
                </md-field>
                <md-field>
                  <label>Cuisine</label>
                  <md-input
                    v-model="cuisine"
                    name="cuisine"
                    required
                  ></md-input>
                </md-field>
                <md-field>
                  <label>Adresse</label>
                  <md-input v-model="street" name="street"></md-input>
                </md-field>
                <md-field>
                  <label>Ville</label>
                  <md-input v-model="borough" name="borough"></md-input>
                </md-field>
              </md-dialog-content>

              <md-dialog-actions>
                <md-button class="md-primary" @click="restoModal = false"
                  >Fermer</md-button
                >
                <md-button type="submit" class="md-primary">Ajouter</md-button>
              </md-dialog-actions>
            </form>
          </md-dialog>
        </div>

        <md-field class="md-toolbar-section-end">
          <label for="nom">Chercher par nom:</label>
          <md-input
            @input="chercherResto()"
            v-model="nomRestoRechercher"
            md-layout="box"
            md-dense
          >
          </md-input>
        </md-field>
      </md-table-toolbar>

      <md-table-empty-state
        md-label="Aucun restaurant trouvé"
        :md-description="`Aucun restaurant ne correspond à votre recherche!`"
      >
      </md-table-empty-state>

      <md-table-row
        :style="{ backgroundColor: getColor(index) }"
        :class="{ bordureRouge: index === 2 }"
        slot="md-table-row"
        slot-scope="{ item, index }"
      >
        <md-table-cell md-label="Name" md-sort-by="name">{{
          item.name
        }}</md-table-cell>
        <md-table-cell md-label="Cuisine" md-sort-by="cuisine">{{
          item.cuisine
        }}</md-table-cell>
        <md-table-cell md-label="Rue" md-sort-by="street">{{
          item.address.street
        }}</md-table-cell>
        <md-table-cell md-label="Ville" md-sort-by="borough">{{
          item.borough
        }}</md-table-cell>
        <md-table-cell md-label="Actions">
          <router-link :to="'/restaurant/' + item._id">
            <md-button
              :style="{ backgroundColor: getColorButton(index) }"
              class="md-fab md-plain iconActions"
            >
              <md-icon>read_more</md-icon>
            </md-button>
          </router-link>
          <md-button
            :style="{ backgroundColor: getColorButton(index) }"
            class="md-fab md-plain iconActions"
            @click="voirAlert(item)"
          >
            <md-icon>delete</md-icon>
          </md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
    <md-toolbar>
      <div class="md-toolbar-section-start"></div>
      <div class="md-toolbar-section-end">
        <md-button :disabled="page === 0" @click="pagePrecedente()">
          <b>Précédente</b> </md-button
        >&nbsp;&nbsp;
        <md-button :disabled="page === nbrePagesTotal" @click="pageSuivante()">
          <b>Suivante</b>
        </md-button>
      </div>
    </md-toolbar>
  </div>
</template>


<script>
import _ from "lodash";
export default {
  name: "ListeDesRestaurants",
  data: () => {
    return {
      //Déclaration variables
      restaurants: [],
      nom: "",
      cuisine: "",
      borough: "",
      street: "",
      nombreRestaurantsTotal: 0,
      page: 0,
      pageSize: 10,
      nbrePagesTotal: 0,
      msg: "",
      nomRestoRechercher: "",
      notFound: false,
      restoModal: false,
      commandePage: false,
    };
  },
  mounted() {
    this.getRestaurantsFromServer();
  },
  methods: {
    //pagination
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

    //Obtenir la liste des restaurants
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

    //Trouver restaurant
    chercherResto: _.debounce(function () {
      this.getRestaurantsFromServer();

    }, 1000),

    //Supprimer un restaurant
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

    //Ajouter restaurant
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
            this.msg = res.msg;

            //On raffraichit la vue
            this.getRestaurantsFromServer();

            //Alerte de succes
            this.$swal(
              "Félicitation!",
              "Restaurant ajouté avec succès!",
              "success"
            );
            //On raffraichit la page
            location.reload();
          });
        })
        .catch(function (err) {
          console.log(err);
        });
      this.nom = "";
      this.cuisine = "";
      this.borough = "";
      this.street = "";
    },

    //Obtenir couleurs ligne
    getColor(index) {
      return index % 2 ? "lightBlue" : "#f677a8cc";
    },

    //obtenir couleurs boutons actions
    getColorButton(index) {
      return index % 2 ? "#f677a8cc" : "lightBlue";
    },

    //Alerte suppression
    voirAlert(x) {
      this.$swal({
        title: "Etes-vous sûr?",
        text: "Vous ne pourrez plus revenir en arrière!",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Oui supprimer!",
        cancelButtonText: "Non annuler!",
        showCloseButton: true,
        showLoaderOnConfirm: true,
      }).then((result) => {
        if (result.value) {
          this.supprimerRestaurant(x);
          this.$swal("Supprimer", "Le restaurant est supprimé", "success");
        } else {
          this.$swal("Annuler", "La suppression a été annulé.", "info");
        }
      });
    },

    //Recharger page
    load() {
      location.reload();
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
ul.md-list.infosResto {
  display: contents;
}
ul.md-list.infosResto b {
  font-size: 13px;
}

.md-field .md-input,
.md-field .md-textarea {
  background-color: white !important;
}
</style>
