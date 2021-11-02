<template>
  <div >
    <md-toolbar md-elevation="1" class="md-accent infos">
    <h3 class="md-title">Pour chaque menu, choisissez un<b> Hors d'Oeuvres</b> ,
     un <b>Plat</b> , un <b>Dessert</b>  et un <b>boisson</b>. Le tout pour un prix!</h3>
  </md-toolbar>
    <div class="viewport">
      <md-toolbar :md-elevation="1">
        <span class="md-title">Menu de Midi</span>
      </md-toolbar>
      <div class="list">
        <md-list >
          <md-list-item md-expand @click="this.getmenuDemidi(0,hordOeuvres.length);">
            <md-toolbar :md-elevation="0">
              <md-icon>restaurant</md-icon>
              <span class="md-list-item-text md-title">Hors d'Oeuvres</span>
            </md-toolbar>
            <md-list slot="md-expand">
              <md-list-item class="" v-for="menuMidi in this.menusMidi" :key="menuMidi">
                <md-card class="md-primary md-card " md-theme="green-card">
                  <md-card-header>
                    <md-card-media>
                      <img :src="require('../assets/horsOeuvres/' + hordOeuvres[menuMidi].src )" alt="Avatar">
                    </md-card-media>

                    <md-card-header-text>
                      <div class="md-title">{{hordOeuvres[menuMidi].nom}}</div>
                      </md-card-header-text>
                  </md-card-header>
                  
                </md-card>
              </md-list-item>
                
            </md-list>
          </md-list-item>
          <md-list-item md-expand @click="this.getmenuDemidi(0,plats.length);">
            <md-toolbar :md-elevation="0">
              <md-icon>dinner_dining</md-icon>
              <span class="md-list-item-text md-title">Plats</span>
            </md-toolbar>
            <md-list slot="md-expand">
              <md-list-item class="" v-for="menuMidi in this.menusMidi" :key="menuMidi">
                <md-card class="md-primary md-card " md-theme="green-card">
                  <md-card-header>
                    <md-card-media>
                      <img :src="require('../assets/plats/' + plats[menuMidi].src )" alt="Avatar">
                    </md-card-media>

                    <md-card-header-text>
                      <div class="md-title">{{plats[menuMidi].nom}}</div>
                      </md-card-header-text>
                  </md-card-header>
                  
                </md-card>
              </md-list-item>
                
            </md-list>
          </md-list-item>
          <md-list-item md-expand @click="this.getmenuDemidi(0,desserts.length);">
            <md-toolbar :md-elevation="0">
              <md-icon>cake</md-icon>
              <span class="md-list-item-text md-title">Desserts</span>
            </md-toolbar>
            <md-list slot="md-expand">
              <md-list-item class="" v-for="menuMidi in this.menusMidi" :key="menuMidi">
                <md-card class="md-primary md-card " md-theme="green-card">
                  <md-card-header>
                    <md-card-media>
                      <img :src="require('../assets/desserts/' + desserts[menuMidi].src )" alt="Avatar">
                    </md-card-media>

                    <md-card-header-text>
                      <div class="md-title">{{desserts[menuMidi].nom}}</div>
                      </md-card-header-text>
                  </md-card-header>
                  
                </md-card>
              </md-list-item>
                
            </md-list>
          </md-list-item>
          <md-list-item md-expand @click="this.getmenuDemidi(0,boissons.length);">
            <md-toolbar :md-elevation="0">
              <md-icon>local_bar</md-icon>
              <span class="md-list-item-text md-title">Boissons</span>
            </md-toolbar>
            <md-list slot="md-expand">
              <md-list-item class="" v-for="menuMidi in this.menusMidi" :key="menuMidi">
                <md-card class="md-primary md-card " md-theme="green-card">
                  <md-card-header>
                    <md-card-media>
                      <img :src="require('../assets/boissons/' + boissons[menuMidi].src )" alt="Avatar">
                    </md-card-media>

                    <md-card-header-text>
                      <div class="md-title">{{boissons[menuMidi].nom}}</div>
                      </md-card-header-text>
                  </md-card-header>
                  
                </md-card>
              </md-list-item>
                
            </md-list>
          </md-list-item>
        </md-list>
      </div>
      <md-toolbar :md-elevation="1">
        <md-button class="md-raised prix" disabled>Prix : 30 €</md-button>
      </md-toolbar>
    </div>
    <div class="viewport">
      <md-toolbar :md-elevation="1">
        <span class="md-title">Menu Gastronomique</span>
      </md-toolbar>
      <div class="list">
        <md-list >
        </md-list>
      </div>
    </div>

  </div>

</template>

<script>
export default {

  name: 'Menu',
  props: {
    hordOeuvres : [] ,
    plats : [],
    desserts :[],
    boissons : []
      
  },mounted() {
    console.log
    this.getmenuDemidi(0,this.menuDemidis.length);
    console.log(this.menusMidi,'jkll', this.menuDemidis[0])
  },
  data:function(){
      return {
        menuDemidis: [
           { id:3, nom: 'Salade de Légumes', src: 'saladesLegumes.jpg', description:"La salade composée c'est un vrai plat complet. Une base de salades de votre choix en mélange, des herbes aromatiques fraîches, une vinaigrette légère et une garniture choisie avec soin.",prix:"10 €"},
          { id:4, nom: 'Frittes', src: 'frittes.jpg', description:"La frite est un bâtonnet de pomme de terre cuit par friture dans une graisse animale ou une huile végétale.",prix:"15 €"},
          { id:5, nom: 'Fruits de Mer', src: 'fruitdeMer.jpg', description:"Un plateau de fruits de mer constitué entièrement de crustacés, mollusques et coquillages de mer.Il est servi avec des condiments tels que sauce mayonnaise, sauce cocktail, et citron frais.",prix:"20 €"},
          { id:6, nom: 'Saumon', src: 'saumon.jpg', description:"Le saumon est délicieux avec de nombreux légumes ! Essayez-le avec des épinards, des poireaux, des courgettes, du chou-fleur, des carottes, des salsifis ou encore des brocolis.",prix:"12 €"},
          { id:7, nom: 'Salade de Tomate', src: 'saladesTomates.jpg', description:"À base de tomates fraîches assaisonnées de sésame et de pérille, c'est le parfait remontant après une journée bien remplie.",prix:"14 €"}
        ],
        menuGastronomique: [],
        menusMidi : []
      } 
  },
  methods :{
    getmenuDemidi(min,max){
      for (let index = 0; index < 3; index++) {
        min = Math.ceil(min);
        max = Math.floor(max);
        var newIndex=Math.floor(Math.random() * (max - min)) + min;
        for (let index1= 0; index1 < this.menusMidi.length; index1++) {
          while (newIndex === this.menusMidi[index1]) {
            newIndex=Math.floor(Math.random() * (max - min)) + min;
            index1=0;
          }    
        }
        this.menusMidi.push(newIndex)
      }       
    },
    getMenuGastronomique(){

    }
  }
}



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
    border: 1px solid lightblue !important;
  }

  button.md-button.md-raised.prix{
    background: pink;
    color: black;
 }
 .md-toolbar.md-accent.infos {
    margin-bottom: 25px;
    text-align: center;
}
</style>
