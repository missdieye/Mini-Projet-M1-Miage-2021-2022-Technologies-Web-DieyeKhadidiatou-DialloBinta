<template>
  <div>
    <md-toolbar class="md-large diadie" v-if="this.path == '/cartedesplats'">
      <div class="md-toolbar-row avatar md-toolbar-section-start">
        <md-avatar class="md-large">
          <img src="../assets/avatarResto.png" alt="Avatar" />
        </md-avatar>
        <h3 class="md-title nom">
          <b>DIA<span>DIE</span></b>
        </h3>
      </div>
      <div>
        <i class="partners"> Notre partenaire officielle!</i>
        <p>Ceci est la carte du restaurant DIADIE.</p>
      </div>

      <div class="info md-toolbar-section-end">
        <md-button
          class="buttonInfo md-raised"
          @click="infoRestoDiadieModal = true"
        >
          <md-icon>info</md-icon><span>Informations du Restaurant</span>
        </md-button>
        <md-dialog :md-active.sync="infoRestoDiadieModal">
          <md-dialog-title>Informations du Restaurant</md-dialog-title>

          <md-dialog-content>
            <md-list>
              <md-list-item
                >Nom : <code> <md-chip>DIADIE</md-chip></code></md-list-item
              >
              <md-list-item
                >Cuisine :
                <code> <md-chip>Nicoise</md-chip></code></md-list-item
              >
              <md-list-item
                >Adresse :
                <code>
                  <md-chip>Route des Lucioles</md-chip></code
                ></md-list-item
              >
              <md-list-item
                >Ville :
                <code> <md-chip>Sophia Antipolis</md-chip></code></md-list-item
              >
            </md-list>
          </md-dialog-content>

          <md-dialog-actions>
            <md-button class="md-primary" @click="infoRestoDiadieModal = false"
              >Fermer</md-button>

          </md-dialog-actions>
        </md-dialog>
      </div>
    </md-toolbar>
    <md-toolbar md-elevation="1" class="md-accent">
      <i class="infos"
        >Une <b> Carte </b> pour mieux vous servir. Régalez vous!</i
      >
    </md-toolbar>
    <div class="viewport">
      <div class="list">
        <md-list>
          <md-list-item md-expand>
            <md-toolbar :md-elevation="1">
              <md-icon>restaurant</md-icon>
              <span class="md-list-item-text md-title">Hors d'Oeuvres</span>
            </md-toolbar>
            <md-list slot="md-expand">
              <md-list-item
                class=""
                v-for="hordOeuvreCDP in this.hordOeuvresCDP"
                :key="hordOeuvreCDP">
                <md-card class="md-primary md-card" md-theme="green-card">
                  <md-card-header>
                    <md-card-media>
                      <img
                        :src="require('../assets/horsOeuvres/' + hordOeuvres[hordOeuvreCDP].src)"
                        alt="Avatar"
                      />
                    </md-card-media>

                    <md-card-header-text>
                      <div class="md-title">
                        {{ hordOeuvres[hordOeuvreCDP].nom }}
                      </div>
                      <div
                        class="md-subhead"
                        v-html="
                          petitedescription(hordOeuvres[hordOeuvreCDP].description) + '...' "
                      ></div>
                    </md-card-header-text>
                  </md-card-header>
                  <md-toolbar class="md-dense">
                    <md-card-expand>
                      <md-card-actions md-alignment="space-between">
                        <div>
                          <md-button class="md-raised prix" disabled
                            >Prix : {{ hordOeuvres[hordOeuvreCDP].prix }} €</md-button>
                        </div>
                        <md-card-expand-trigger>
                          <md-button class="md-icon-button voirPlus">
                            <md-icon>keyboard_arrow_down</md-icon>
                            <span>Voir Plus</span>
                          </md-button>
                        </md-card-expand-trigger>
                      </md-card-actions>

                      <md-card-expand-content>
                        <md-card-content>
                          <p class="description">
                            {{ hordOeuvres[hordOeuvreCDP].description }}
                          </p>
                        </md-card-content>
                      </md-card-expand-content>
                    </md-card-expand>
                  </md-toolbar>
                </md-card>
              </md-list-item>
            </md-list>
          </md-list-item>

          <md-list-item md-expand>
            <md-toolbar :md-elevation="1">
              <md-icon>restaurant</md-icon>
              <span class="md-list-item-text md-title">Dessert</span>
            </md-toolbar>
            <md-list slot="md-expand">
              <md-list-item
                class=""
                v-for="dessertCDP in dessertsCDP"
                :key="dessertCDP"
              >
                <md-card class="md-primary md-card" md-theme="green-card">
                  <md-card-header>
                    <md-card-media>
                      <img
                        :src="require('../assets/desserts/' + desserts[dessertCDP].src)"
                        alt="Avatar" />
                    </md-card-media>

                    <md-card-header-text>
                      <div class="md-title">{{ desserts[dessertCDP].nom }}</div>
                      <div
                        class="md-subhead"
                        v-html="
                          petitedescription(desserts[dessertCDP].description) + '...'"
                      ></div>
                    </md-card-header-text>
                  </md-card-header>
                  <md-toolbar class="md-dense">
                    <md-card-expand>
                      <md-card-actions md-alignment="space-between">
                        <div>
                          <md-button class="md-raised prix" disabled
                            >Prix : {{ desserts[dessertCDP].prix }} €</md-button
                          >
                        </div>
                        <md-card-expand-trigger>
                          <md-button class="md-icon-button voirPlus">
                            <md-icon>keyboard_arrow_down</md-icon>
                            <span>Voir Plus</span>
                          </md-button>
                        </md-card-expand-trigger>
                      </md-card-actions>

                      <md-card-expand-content>
                        <md-card-content>
                          <p class="description">
                            {{ desserts[dessertCDP].description }}
                          </p>
                        </md-card-content>
                      </md-card-expand-content>
                    </md-card-expand>
                  </md-toolbar>
                </md-card>
              </md-list-item>
            </md-list>
          </md-list-item>
        </md-list>
      </div>
    </div>
    <div class="viewport">
      <div class="list">
        <md-list>
          <md-list-item md-expand>
            <md-toolbar :md-elevation="1">
              <md-icon>dinner_dining</md-icon>
              <span class="md-list-item-text md-title">Plats</span>
            </md-toolbar>
            <md-list slot="md-expand">
              <md-list-item class="" v-for="platCDP in platsCDP" :key="platCDP">
                <md-card class="md-primary md-card" md-theme="green-card">
                  <md-card-header>
                    <md-card-media>
                      <img
                        :src="require('../assets/plats/' + plats[platCDP].src)"
                        alt="Avatar"
                      />
                    </md-card-media>

                    <md-card-header-text>
                      <div class="md-title">{{ plats[platCDP].nom }}</div>
                      <div
                        class="md-subhead"
                        v-html=" petitedescription(plats[platCDP].description) + '...'"
                      ></div>
                    </md-card-header-text>
                  </md-card-header>
                  <md-toolbar class="md-dense">
                    <md-card-expand>
                      <md-card-actions md-alignment="space-between">
                        <div>
                          <md-button class="md-raised prix" disabled
                            >Prix : {{ plats[platCDP].prix }} €</md-button
                          >
                        </div>
                        <md-card-expand-trigger>
                          <md-button class="md-icon-button voirPlus">
                            <md-icon>keyboard_arrow_down</md-icon>
                            <span>Voir Plus</span>
                          </md-button>
                        </md-card-expand-trigger>
                      </md-card-actions>

                      <md-card-expand-content>
                        <md-card-content>
                          <p class="description">
                            {{ plats[platCDP].description }}
                          </p>
                        </md-card-content>
                      </md-card-expand-content>
                    </md-card-expand>
                  </md-toolbar>
                </md-card>
              </md-list-item>
            </md-list>
          </md-list-item>

          <md-list-item md-expand>
            <md-toolbar :md-elevation="1">
              <md-icon>local_bar</md-icon>
              <span class="md-list-item-text md-title">Boissons</span>
            </md-toolbar>
            <md-list slot="md-expand">
              <md-list-item
                class=""
                v-for="boissonCDP in boissonsCDP"
                :key="boissonCDP"
              >
                <md-card class="md-primary md-card" md-theme="green-card">
                  <md-card-header>
                    <md-card-media>
                      <img
                        :src=" require('../assets/boissons/' +  boissons[boissonCDP].src) "
                        alt="Avatar"
                      />
                    </md-card-media>

                    <md-card-header-text>
                      <div class="md-title">{{ boissons[boissonCDP].nom }}</div>
                      <div
                        class="md-subhead"
                        v-html="petitedescription(boissons[boissonCDP].description) + '...'"
                      ></div>
                    </md-card-header-text>
                  </md-card-header>
                  <md-toolbar class="md-dense">
                    <md-card-expand>
                      <md-card-actions md-alignment="space-between">
                        <div>
                          <md-button class="md-raised prix" disabled
                            >Prix : {{ boissons[boissonCDP].prix }} €</md-button>
                        </div>
                        <md-card-expand-trigger>
                          <md-button class="md-icon-button voirPlus">
                            <md-icon>keyboard_arrow_down</md-icon>
                            <span>Voir Plus</span>
                          </md-button>
                        </md-card-expand-trigger>
                      </md-card-actions>

                      <md-card-expand-content>
                        <md-card-content>
                          <p class="description">
                            {{ boissons[boissonCDP].description }}
                          </p>
                        </md-card-content>
                      </md-card-expand-content>
                    </md-card-expand>
                  </md-toolbar>
                </md-card>
              </md-list-item>
            </md-list>
          </md-list-item>
        </md-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarteDesPlats",
  props: {},
  data: function () {
    return {
      //Liste des Hors d'Oeuvres 
      hordOeuvres: [
        {
          id: 1,
          nom: "Salade de Légumes",
          src: "saladesLegumes.jpg",
          description:
            "La salade composée c'est un vrai plat complet. Une base de salades de votre choix en mélange, des herbes aromatiques fraîches, une vinaigrette légère et une garniture choisie avec soin.",
          prix: 10,
        },
        {
          id: 2,
          nom: "Frittes",
          src: "frittes.jpg",
          description:
            "La frite est un bâtonnet de pomme de terre cuit par friture dans une graisse animale ou une huile végétale.",
          prix: 15,
        },
        {
          id: 3,
          nom: "Fruits de Mer",
          src: "fruitdeMer.jpg",
          description:
            "Un plateau de fruits de mer constitué entièrement de crustacés, mollusques et coquillages de mer.Il est servi avec des condiments tels que sauce mayonnaise, sauce cocktail, et citron frais.",
          prix: 20,
        },
        {
          id: 4,
          nom: "Saumon",
          src: "saumon.jpg",
          description:
            "Le saumon est délicieux avec de nombreux légumes ! Essayez-le avec des épinards, des poireaux, des courgettes, du chou-fleur, des carottes, des salsifis ou encore des brocolis.",
          prix: 12,
        },
        {
          id: 5,
          nom: "Salade de Tomate",
          src: "saladesTomates.jpg",
          description:
            "À base de tomates fraîches assaisonnées de sésame et de pérille, c'est le parfait remontant après une journée bien remplie.",
          prix: 14,
        },
      ],
      //Liste des Plats 
      plats: [
        {
          id: 1,
          nom: "Brochettes",
          src: "brochettes.jpg",
          description: "Is this thing French ?",
          prix: 14,
        },
        {
          id: 2,
          nom: "Pattes Tomates",
          src: "pattesTomate.jpg",
          description: "Moroccan people seem to love that dish...",
          prix: 14,
        },
        {
          id: 3,
          nom: "Riz Curry",
          src: "rizCurry.jpg",
          description: "Eat healthy my boy!",
          prix: 14,
        },
        {
          id: 4,
          nom: "Riz Poulet",
          src: "rizPoulets.jpg",
          description: "Eat healthy my boy!",
          prix: 14,
        },
        {
          id: 5,
          nom: "Steak et Frittes",
          src: "steakFrittes.jpg",
          description: "Eat healthy my boy!",
          prix: 14,
        },
      ],
      //Liste des Desserts 
      desserts: [
        {
          id: 1,
          nom: "Beignet Rose",
          src: "beignetRosePaillettes.jpg",
          description: "Is this thing French ?",
          prix: 14,
        },
        {
          id: 2,
          nom: "Smoothies",
          src: "bocauxDessert.jpg",
          description: "Moroccan people seem to love that dish...",
          prix: 14,
        },
        {
          id: 3,
          nom: "Brownies",
          src: "brownies.jpg",
          description: "Eat healthy my boy!",
          prix: 14,
        },
        {
          id: 4,
          nom: "Gateau Framboise",
          src: "GateauFramboise.jpg",
          description: "Eat healthy my boy!",
          prix: 14,
        },
        {
          id: 5,
          nom: "Tarte Citrouille",
          src: "tarteCitrouille.jpg",
          description: "Eat healthy my boy!",
          prix: 14,
        },
      ],
      //Liste des Boissons 
      boissons: [
        {
          id: 1,
          nom: "Alcool",
          src: "alcool.jpg",
          description: "Is this thing French ?",
          prix: 14,
        },
        {
          id: 2,
          nom: "Café",
          src: "cafe.jpg",
          description: "Moroccan people seem to love that dish...",
          prix: 14,
        },
        {
          id: 3,
          nom: "Jus de Citron",
          src: "jusCitron.jpg",
          description: "Eat healthy my boy!",
          prix: 14,
        },
        {
          id: 4,
          nom: "jus de Melon",
          src: "jusMelon.jpg",
          description: "Eat healthy my boy!",
          prix: 14,
        },
        {
          id: 5,
          nom: "Jus de Pomme et Comcombre",
          src: "jusPommeComcombre.jpg",
          description: "Eat healthy my boy!",
          prix: 14,
        },
      ],
      //Liste des Hors d'Oeuvres Gastronomiques 
      hordOeuvresGastro: [
        {
          id: 1,
          nom: "Farandole d'Oeufs",
          src: "farandoledoeufs.jpg",
          description:
            "La salade composée c'est un vrai plat complet. Une base de salades de votre choix en mélange, des herbes aromatiques fraîches, une vinaigrette légère et une garniture choisie avec soin.",
          prix: 40,
        },
        {
          id: 2,
          nom: "Oeuf Cocotte",
          src: "oeufcocotte.jpg",
          description:
            "La frite est un bâtonnet de pomme de terre cuit par friture dans une graisse animale ou une huile végétale.",
          prix: 10,
        },
        {
          id: 3,
          nom: "Patte aux Croutes de Morilles",
          src: "patecroutemorilles.jpg",
          description:
            "Un plateau de fruits de mer constitué entièrement de crustacés, mollusques et coquillages de mer.Il est servi avec des condiments tels que sauce mayonnaise, sauce cocktail, et citron frais.",
          prix: 30,
        },
        {
          id: 4,
          nom: "Salade Nicoise",
          src: "salade-nicoise.jpg",
          description:
            "Le saumon est délicieux avec de nombreux légumes ! Essayez-le avec des épinards, des poireaux, des courgettes, du chou-fleur, des carottes, des salsifis ou encore des brocolis.",
          prix: 20,
        },
      ],
      //Liste des Plats Gastronomiques 
      platsGastro: [
        {
          id: 1,
          nom: "Blanquette de Veau",
          src: "blanquettedeveau.jpg",
          description: "Is this thing French ?",
          prix: 40,
        },
        {
          id: 2,
          nom: "Cassoulet",
          src: "cassoulet.jpg",
          description: "Moroccan people seem to love that dish...",
          prix: 40,
        },
        {
          id: 3,
          nom: "Foie Gras",
          src: "foiegras.jpg",
          description: "Eat healthy my boy!",
          prix: 40,
        },
        {
          id: 4,
          nom: "Galette de Bretonne",
          src: "galettebretonne.jpg",
          description: "Eat healthy my boy!",
          prix: 40,
        },
      ],
      //Liste des Desserts Gastronomique 
      dessertsGastro: [
        {
          id: 1,
          nom: "Chocolat à Chou Vanille",
          src: "chouvanillechocolat.jpg",
          description: "Is this thing French ?",
          prix: 20,
        },
        {
          id: 2,
          nom: "Ile Flottante Crème Anglaise",
          src: "ileflottantecremeanglaisecaramel.jpg",
          description: "Moroccan people seem to love that dish...",
          prix: 20,
        },
        {
          id: 3,
          nom: "Madeleines Traditionnelles",
          src: "madeleinestraditionnelles.jpg",
          description: "Eat healthy my boy!",
          prix: 20,
        },
        {
          id: 4,
          nom: "Tarte Tartin Pomme",
          src: "tartetatinpomme.jpg",
          description: "Eat healthy my boy!",
          prix: 20,
        },
      ],
      hordOeuvresCDP: [],
      platsCDP: [],
      path : null,
      dessertsCDP: [],
      boissonsCDP: [],
    };
  },
  mounted() {
    //Appel des fonctions  pour obtenir les hors oeuvres,plats,desserts et boissons
    this.getCartedesPlats(0, this.hordOeuvres.length, this.hordOeuvresCDP);
    this.getCartedesPlats(0, this.plats.length, this.platsCDP);
    this.getCartedesPlats(0, this.desserts.length, this.dessertsCDP);
    this.getCartedesPlats(0, this.boissons.length, this.boissonsCDP);

    //Récupérer le path en cours
    this.path = this.$route.path;
  },
  methods: {
    //Méthode qui prend les 100 premiers lettres de la description
    petitedescription(description) {
      return description.substring(0, 100);
    },

    //Permet d'avoir de manière aléatoire  une carte
    getCartedesPlats(min, max, tab) {
      for (let index = 0; index < 4; index++) {
        min = Math.ceil(min);
        max = Math.floor(max);
        var newIndex = Math.floor(Math.random() * (max - min)) + min;
        for (let index1 = 0; index1 < tab.length; index1++) {
          while (newIndex === tab[index1]) {
            newIndex = Math.floor(Math.random() * (max - min)) + min;
            index1 = 0;
          }
        }
        tab.push(newIndex);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.md-card {
  width: 550px;
  display: inline-block;
  vertical-align: top;
  padding: auto;
}
.viewport {
  width: 550px;
  max-width: 100%;
  display: inline-block;
  vertical-align: top;
  overflow: auto;
}

button.md-button.md-icon-button.voirPlus {
  width: 100px;
  margin-left: 230px;
}

p.description,
.md-subhead {
  white-space: normal;
  margin: 4px;
}

button.md-button.md-raised.prix {
  background: #f677a8cc;
  color: black;
}

i.infos {
  font-size: 20px;
  text-align: center;
  margin-left: 400px;
  color: black;
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

.buttonInfo {
  background: #f677a8cc !important ;
  margin: 0 -10px;
  padding: 4px;
}

.buttonInfo span {
  color: black;
}

.md-toolbar.md-large.diadie {
  margin-bottom: 50px;
}

.partners {
  font-weight: bold;
  font-size: 20px;
}

.nom span {
  color: #db4155;
}
.nom b {
  color: #3fcfd6;
}
</style>
