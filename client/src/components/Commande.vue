<template>
    <div>
        <div class="viewport">
            <md-toolbar :md-elevation="1">
                <span class="md-title">Carte ou Menu</span>
            </md-toolbar>
            <md-field>
                <label for="type">Vous voulez commander </label>
                <md-select v-model="type" name="type" id="type">
                    <md-option value="carte">A la carte</md-option>
                    <md-option value="midi">Sur le menu de Midi</md-option>
                    <md-option value="gastro">Sur le menu de Gastronomique</md-option>
                </md-select>
            </md-field>

            <div class="carte"  v-if="type=='carte'">
                <md-toolbar :md-elevation="1">
                    <span class="md-title">Carte</span>
                </md-toolbar>
                <div class="list">
                <md-list >
                <md-list-item md-expand >
                    <md-toolbar :md-elevation="1">
                    <md-icon>restaurant</md-icon>
                    <span class="md-list-item-text md-title">Hors d'Oeuvres</span>
                    </md-toolbar>
                    <md-list slot="md-expand">
                    <md-list-item class="" v-for="hordOeuvreCDP in this.hordOeuvresCDP" :key="hordOeuvreCDP">
                        <md-card class="md-primary md-card " md-theme="green-card" >
                        <md-card-header>
                            <md-card-media>
                            <img :src="require('../assets/horsOeuvres/' + hordOeuvres[hordOeuvreCDP].src )" alt="Avatar">
                            </md-card-media>

                            <md-card-header-text>
                                <div class="md-title">{{hordOeuvres[hordOeuvreCDP].nom}}</div>
                            </md-card-header-text>
                        </md-card-header>
                        <md-toolbar class="md-dense">
                            <md-card-expand>
                            <md-card-actions md-alignment="space-between">
                                <div>
                                    <md-field>
                                        <label for="type">Quantité </label>
                                        <md-input type="number" id="qtit" name="qtit" v-model='qtit' min=1 max=100 />
                                    </md-field>
                                </div>
                                
                                
                                <div>
                                <md-button class="md-raised prix" disabled>Prix : {{hordOeuvres[hordOeuvreCDP].prix}} €</md-button>
                                </div>
                                <div>
                                    <md-button class="md-raised btCom" @click="addCommande(hordOeuvres[hordOeuvreCDP].nom,hordOeuvres[hordOeuvreCDP].prix,qtit)">Commander</md-button>
                                </div>
                            </md-card-actions>
                            </md-card-expand>
                        </md-toolbar>
                        
                        </md-card>
                    </md-list-item>
                        
                    </md-list>
                </md-list-item>

                <md-list-item md-expand  >
                    <md-toolbar :md-elevation="1">
                    <md-icon>restaurant</md-icon>
                    <span class="md-list-item-text md-title">Dessert</span>
                    </md-toolbar>
                    <md-list slot="md-expand">
                    <md-list-item class="" v-for="dessertCDP  in dessertsCDP" :key="dessertCDP ">
                        <md-card class="md-primary md-card " md-theme="green-card">
                        <md-card-header>
                            <md-card-media>
                            <img :src="require('../assets/desserts/' + desserts[dessertCDP ].src )" alt="Avatar">
                            </md-card-media>
                            <md-card-header-text>
                                <div class="md-title">{{desserts[dessertCDP ].nom}}</div>
                            </md-card-header-text>

                        </md-card-header>
                        <md-toolbar class="md-dense">
                            <md-card-expand>
                            <md-card-actions md-alignment="space-between">
                                <div>
                                    <md-field>
                                        <label for="type">Quantité </label>
                                        <md-input type="number" id="qtit" name="qtit" v-model='qtit' min=1 max=100 />
                                    </md-field>
                                </div>
                                <div>
                                <md-button class="md-raised prix" disabled>Prix : {{desserts[dessertCDP ].prix}} €</md-button>
                                </div>
                                <div>
                                    <md-button class="md-raised btCom" @click="addCommande(desserts[dessertCDP].nom,desserts[dessertCDP].prix,qtit)">Commander</md-button>
                                </div>
                            </md-card-actions>
                            </md-card-expand>
                        </md-toolbar>
                        
                        </md-card>
                    </md-list-item>
                        
                    </md-list>
                </md-list-item>

                
                <md-list-item md-expand >
                    <md-toolbar :md-elevation="1">
                    <md-icon>dinner_dining</md-icon>
                    <span class="md-list-item-text md-title">Plats</span>
                    </md-toolbar>
                    <md-list slot="md-expand">
                    <md-list-item class="" v-for="platCDP in platsCDP" :key="platCDP">
                        <md-card class="md-primary md-card " md-theme="green-card">
                        <md-card-header>
                            <md-card-media>
                            <img :src="require('../assets/plats/' + plats[platCDP].src )" alt="Avatar">
                            </md-card-media>

                            <md-card-header-text>
                                <div class="md-title">{{plats[platCDP].nom}}</div>
                            </md-card-header-text>

                        </md-card-header>
                        <md-toolbar class="md-dense">
                            <md-card-expand>
                            <md-card-actions md-alignment="space-between">
                                <div>
                                    <md-field>
                                        <label for="type">Quantité </label>
                                        <md-input type="number" id="qtit" name="qtit" v-model='qtit' min=1 max=100 />
                                    </md-field>
                                </div>
                                <div>
                                <md-button class="md-raised prix" disabled>Prix : {{plats[platCDP].prix}} €</md-button>
                                </div>
                                <div>
                                    <md-button class="md-raised btCom" @click="addCommande(plats[platCDP].nom,plats[platCDP].prix,qtit)">Commander</md-button>
                                </div>
                            </md-card-actions>
                            </md-card-expand>
                        </md-toolbar>
                        
                        </md-card>
                    </md-list-item>
                        
                    </md-list>
                </md-list-item>

                <md-list-item md-expand  >
                    <md-toolbar :md-elevation="1">
                    <md-icon>local_bar</md-icon>
                    <span class="md-list-item-text md-title">Boissons</span>
                    </md-toolbar>
                    <md-list slot="md-expand">
                    <md-list-item class="" v-for="boissonCDP in boissonsCDP" :key="boissonCDP">
                        <md-card class="md-primary md-card " md-theme="green-card">
                        <md-card-header>
                            <md-card-media>
                            <img :src="require('../assets/boissons/' + boissons[boissonCDP].src )" alt="Avatar">
                            </md-card-media>

                            <md-card-header-text>
                                <div class="md-title">{{boissons[boissonCDP].nom}}</div>
                            </md-card-header-text>

                        </md-card-header>
                        <md-toolbar class="md-dense">
                            <md-card-expand>
                            <md-card-actions md-alignment="space-between">
                                <div>
                                    <md-field>
                                        <label for="type">Quantité </label>
                                        <md-input type="number" id="qtit" name="qtit" v-model='qtit' min=1 max=100 />
                                    </md-field>
                                </div>
                                <div>
                                <md-button class="md-raised prix" disabled>Prix : {{boissons[boissonCDP].prix}} €</md-button>
                                </div>
                                <div>
                                    <md-button class="md-raised btCom" @click="addCommande(boissons[boissonCDP].nom,boissons[boissonCDP].prix,qtit)">Commander</md-button>
                                </div>
                            </md-card-actions>

                            </md-card-expand>
                        </md-toolbar>
                        
                        </md-card>
                    </md-list-item>
                        
                    </md-list>
                </md-list-item>


                </md-list>
                </div>
            </div>

            <div class="midi"  v-if="type=='midi'">
                <md-toolbar :md-elevation="1">
                    <span class="md-title">Menu Midi</span>
                </md-toolbar>
            </div>

            <div class="gastro"  v-if="type=='gastro'">
                <md-toolbar :md-elevation="1">
                    <span class="md-title">Menu Gastronomique</span>
                </md-toolbar>
            </div>


        </div>

        <div class="viewport commande">
        <md-toolbar :md-elevation="1">
            <span class="md-title">Commandes</span>
        </md-toolbar>
        <md-table>
            <md-table-row>
                <md-table-head>Des</md-table-head>
                <md-table-head md-numeric>Qtit</md-table-head>
                <md-table-head md-numeric>Prix</md-table-head>
            </md-table-row>

            <md-table-row v-for="commande in commandes" :key="commande">
                <md-table-cell >{{commande.designation}}</md-table-cell>
                <md-table-cell md-numeric>{{commande.quantite}}</md-table-cell>
                <md-table-cell md-numeric>{{commande.prix}}</md-table-cell>
            </md-table-row>
        </md-table>
        <md-toolbar :md-elevation="1">
            <md-button class="md-raised prix" disabled>Prix Total : {{this.getPrixCommande(commandes)}} €</md-button>
        </md-toolbar>
        </div>
    </div>
</template>

<script>

import CarteDesPlats from "./CarteDesPlats.vue";
export default {
  name:"Commande",

  data () {
    return {
        type: 'carte',
        hordOeuvresCDP: [],
        platsCDP :[],
        dessertsCDP :[],
        boissonsCDP :[],
        commandes : [],
        qtit : 1
    }
  },
  mounted() {
    //Menu
    this.hordOeuvres= CarteDesPlats.data().hordOeuvres;
    this.plats= CarteDesPlats.data().plats;
    this.desserts= CarteDesPlats.data().desserts;
    this.boissons= CarteDesPlats.data().boissons;
    this.hordOeuvresGastro= CarteDesPlats.data().hordOeuvresGastro;
    this.platsGastro= CarteDesPlats.data().platsGastro;
    this.dessertGastro= CarteDesPlats.data().dessertsGastro;
    CarteDesPlats.methods.getCartedesPlats(0,this.hordOeuvres.length,this.hordOeuvresCDP)
    CarteDesPlats.methods.getCartedesPlats(0,this.plats.length,this.platsCDP);
    CarteDesPlats.methods.getCartedesPlats(0,this.desserts.length,this.dessertsCDP)
    CarteDesPlats.methods.getCartedesPlats(0,this.boissons.length,this.boissonsCDP)
  },
  methods :{
      addCommande(des,price,qtite){
          this.commandes.push({designation :des,prix :qtite*price,quantite:qtite });
      },

      getPrixCommande(commandes){
          var prixCommande=0;
          for (let index = 0; index < commandes.length; index++) {
              prixCommande=prixCommande+commandes[index].prix;
              
          }
          return prixCommande;

      }
  }
}
 
</script>

<style scoped>
  .viewport {
    width: 450px;
    max-width: 100%;
    display: inline-block;
    vertical-align: top;
    overflow: auto;
    border: 1px solid gray;
  }

  .viewport.commande {
    width: 450px;
    float: right;
    margin-right: 0px;
    }

    button.md-button.md-raised.btCom.md-theme-green-card {
    margin-left: 50px;
    background: green;
    color: white;
    }

    .md-checkbox {
    display: flex;
    }

    .md-card {
    width: 400px;
    display: inline-block;
    vertical-align: top;
    padding: auto;
  }

  button.md-button.md-raised.prix{
    background: pink;
    color: black;
    margin-left: 20px;
 }
</style>