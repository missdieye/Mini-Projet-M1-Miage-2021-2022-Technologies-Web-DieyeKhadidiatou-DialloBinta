<template>
  <div>
    <md-toolbar class="md-large">
      <div class="md-toolbar-row avatar md-toolbar-section-start">
        <md-avatar class="md-large">
          <img src="../assets/avatarResto.png" alt="Avatar" />
        </md-avatar>
        <h3 class="md-title">{{ restaurant.name }}</h3>
      </div>
      <div class="info md-toolbar-section-end">
        <md-button class="buttonInfo md-raised" @click="infoRestoModal = true">
          <md-icon>info</md-icon><span>Informations du Restaurant</span>
        </md-button>
        <md-dialog :md-active.sync="infoRestoModal">
          <md-dialog-title>Informations du Restaurant</md-dialog-title>

          <md-dialog-content>
            <md-list>
              <md-list-item
                >Nom :
                <code>
                  <md-chip>{{ restaurant.name }}</md-chip></code
                ></md-list-item
              >
              <md-list-item
                >Cuisine :
                <code>
                  <md-chip>{{ restaurant.cuisine }}</md-chip></code
                ></md-list-item
              >
              <md-list-item
                >Adresse :
                <code>
                  <md-chip
                    >{{ restaurant.address.building }}
                    {{ restaurant.address.street }}</md-chip
                  ></code
                ></md-list-item
              >
              <md-list-item
                >Ville :
                <code>
                  <md-chip>{{ restaurant.borough }}</md-chip></code
                ></md-list-item
              >
            </md-list>
          </md-dialog-content>

          <md-dialog-actions>
            <md-button class="md-primary" @click="infoRestoModal = false"
              >Fermer</md-button
            >
          </md-dialog-actions>
        </md-dialog>
      </div>
    </md-toolbar>
    <md-tabs class="restoTabs" md-alignment="centered">
      <md-tab id="tab-carte" @click="mappage = false" md-label="Carte">
        <CarteDesPlats />
      </md-tab>
      <md-tab id="tab-menu" @click="mappage = false" md-label="Menu">
        <Menu
          :hordOeuvres="this.hordOeuvres"
          :boissons="this.boisson"
          :desserts="this.dessert"
          :plats="this.plats"
          :hordOeuvresGastro="this.hordOeuvresGastro"
          :platsGastro="this.platsGastro"
          :dessertsGastro="this.dessertGastro"
        />
      </md-tab>
      <md-tab id="tab-galerie" @click="mappage = false" md-label="Galerie">
        <md-toolbar md-elevation="1" class="md-accent infos">
          <i class="infos">Photos</i>
        </md-toolbar>
        <div class="galerieCard">

          <md-card v-for="indexPhoto in this.indexPhotos" :key="indexPhoto">
            <md-card-media>
              <img :src=" require('../assets/photosResto/' + photos[indexPhoto].src)" alt="Restaurant" />
            </md-card-media>
          </md-card>

        </div>
        <md-toolbar md-elevation="1" class="md-accent infos">
          <i class="infos">Vidéo</i>
        </md-toolbar>
        <div class="galerieCard">
          <md-card v-for="indexVideo in this.indexVideos" :key="indexVideo">
            <md-card-media>
              <video-embed
                class="youtubeVideo"
                :src="videos[indexVideo].url"
              ></video-embed>
            </md-card-media>
          </md-card>
        </div>
      </md-tab>
      <md-tab @click="mappage = true" md-label="Map"> </md-tab>
      <md-tab
        id="tab-commande"
        @click="mappage = false"
        md-label="Passer une Commande"
      >
        <Commande />
      </md-tab>
    </md-tabs>
    <md-content v-if="mappage">
      <Map
        :lattitude="this.lalattitude"
        :longitude="this.lalongitude"
        :name="this.name"
      />
    </md-content>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import Map from "./Map.vue";
import CarteDesPlats from "./CarteDesPlats.vue";
import Menu from "./Menu.vue";
import Commande from "./Commande.vue";

export default {
  name: "Restaurant",
  components: {
    Map,
    CarteDesPlats,
    Menu,
    Commande,
  },
  props: {},
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  data: function () {
    return {
      //Déclaration variables
      restaurant: null,
      infoRestoModal: false,
      lalongitude: 0,
      lalattitude: null,
      path : null,
      name: null,
      mappage: false,
      hordOeuvres: null,
      plats: null,
      dessert: null,
      boisson: null,
      hordOeuvresGastro: null,
      platsGastro: null,
      dessertGastro: null,
      photos : [{src:"service.jpg"},
                {src:"burger.jpg"},
                {src:"service.jpg"},
                {src:"burger.jpg"},
                {src: "bar.jpg"},
                {src:"decor.jpg"},
                {src:"fruit.jpg"},
                {src:"architecture.jpg"},
                {src:"indien.jpg"}],
      videos :[ {url :"https://www.youtube.com/watch?v=ZRnIn8IS2JA"},
                {url :"https://www.youtube.com/watch?v=Czxq-yefP7U"},
                {url :"https://www.youtube.com/watch?v=Ip2he1-P4Ns"},
                {url :"https://www.youtube.com/watch?v=k8r-Ihe6QUk"},
                {url :"https://www.youtube.com/watch?v=qhioQaRjK5c&pp=ugMICgJmchABGAE%3D"},
                {url :"https://www.youtube.com/watch?v=nxpPrITkSkI"},
                ],
      indexPhotos : [],
      indexVideos : []
    };
  },
  mounted() {
    //Récupération des plats simples et gastronomique
    this.hordOeuvres = CarteDesPlats.data().hordOeuvres;
    this.plats = CarteDesPlats.data().plats;
    this.dessert = CarteDesPlats.data().desserts;
    this.boisson = CarteDesPlats.data().boissons;
    this.hordOeuvresGastro = CarteDesPlats.data().hordOeuvresGastro;
    this.platsGastro = CarteDesPlats.data().platsGastro;
    this.dessertGastro = CarteDesPlats.data().dessertsGastro;
    Commande.data().commandePage = false;

    // Appel des fonctions de Récupération photos et vidéos aléatoires
    this.getphotos(0,this.photos.length,this.indexPhotos);
    this.getvideos(0,this.videos.length,this.indexVideos);
    console.log('jkjvbn,nbvb',this.indexPhotos,this.indexVideos)

    //Récupération des infos d'un restaurant selon son ID
    let url = "http://localhost:8080/api/restaurants/" + this.id;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.restaurant = data.restaurant;

    //Recupération longitude et latitude du restaurant avec son nom
        this.lalattitude = data.restaurant.address.coord[1];
        this.lalongitude = data.restaurant.address.coord[0];
        this.name = data.restaurant.name;
        
      });
  },
  methods: {
    //Chercher des photos aléatoirement dans la liste photos
    getphotos(min, max, tab) {
      for (let index = 0; index <= 5; index++) {
        //Fonction random pour obtenir un entier aléatoire
        min = Math.ceil(min);
        max = Math.floor(max);
        var newIndex = Math.floor(Math.random() * (max - min)) + min;
        //Vérification de si l'entier aléatoire n'a déja pas été pris précédemment
        for (let index1 = 0; index1 < tab.length; index1++) {
          while (newIndex === tab[index1]) {
            newIndex = Math.floor(Math.random() * (max - min)) + min;
            index1 = 0;
          }
        }
        tab.push(newIndex);
      }
    },

    //Chercher des vidéos aléatoirement dans la liste videos
    getvideos(min, max, tab) {
      for (let index = 0; index <= 2; index++) {
        //Fonction random pour obtenir un entier aléatoire
        min = Math.ceil(min);
        max = Math.floor(max);
        var newIndex = Math.floor(Math.random() * (max - min)) + min;
        //Vérification de si l'entier aléatoire n'a déja pas été pris précédemment
        for (let index1 = 0; index1 < tab.length; index1++) {
          while (newIndex === tab[index1]) {
            newIndex = Math.floor(Math.random() * (max - min)) + min;
            index1 = 0;
          }
        }
        tab.push(newIndex);
      }
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 140px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}

.avatar .md-avatar {
  margin: 0px !important;
}

.md-avatar.md-large {
  min-width: 84px;
  min-height: 84px;
}

.md-toolbar-row.avatar {
  margin: auto;
}

.info i.md-icon.md-icon-font {
  font-size: 30px !important;
  margin: 20px;
  color: black;
}

.info.md-toolbar-section-end {
  margin-right: 150px;
}

.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}

.restoTabs .md-tabs-navigation.md-elevation-0 {
  background: #f677a8cc;
}

.buttonInfo {
  background: #f677a8cc !important ;
  margin: 0 -10px;
  padding: 4px;
}

.buttonInfo span {
  color: black;
}

div#tab-map {
  height: 1000px !important;
}
i.infos {
  font-size: 20px;
  text-align: center;
  color: black;
}
.md-toolbar.md-large.diadie {
  display: none !important;
}
</style>
