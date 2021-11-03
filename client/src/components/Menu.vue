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
          <md-list-item md-expand>
            <md-toolbar :md-elevation="0">
              <md-icon>restaurant</md-icon>
              <span class="md-list-item-text md-title">Hors d'Oeuvres</span>
            </md-toolbar>
            <md-list slot="md-expand">
              <md-list-item class="" v-for="hordOeuvreMidi in this.hordOeuvresMidi" :key="hordOeuvreMidi">
                <md-card class="md-primary md-card " md-theme="green-card">
                  <md-card-header>
                    <md-card-media>
                      <img :src="require('../assets/horsOeuvres/' + hordOeuvres[hordOeuvreMidi].src )" alt="Avatar">
                    </md-card-media>

                    <md-card-header-text>
                      <div class="md-title">{{hordOeuvres[hordOeuvreMidi].nom}}</div>
                      </md-card-header-text>
                  </md-card-header>
                  
                </md-card>
              </md-list-item>
                
            </md-list>
          </md-list-item>
          <md-list-item md-expand>
            <md-toolbar :md-elevation="0">
              <md-icon>dinner_dining</md-icon>
              <span class="md-list-item-text md-title">Plats</span>
            </md-toolbar>
            <md-list slot="md-expand">
              <md-list-item class="" v-for="platMidi in this.platsMidi" :key="platMidi">
                <md-card class="md-primary md-card " md-theme="green-card">
                  <md-card-header>
                    <md-card-media>
                      <img :src="require('../assets/plats/' + plats[platMidi].src )" alt="Avatar">
                    </md-card-media>

                    <md-card-header-text>
                      <div class="md-title">{{plats[platMidi].nom}}</div>
                      </md-card-header-text>
                  </md-card-header>
                  
                </md-card>
              </md-list-item>
                
            </md-list>
          </md-list-item>
          <md-list-item md-expand >
            <md-toolbar :md-elevation="0">
              <md-icon>cake</md-icon>
              <span class="md-list-item-text md-title">Desserts</span>
            </md-toolbar>
            <md-list slot="md-expand">
              <md-list-item class="" v-for="dessertMidi in this.dessertsMidi" :key="dessertMidi">
                <md-card class="md-primary md-card " md-theme="green-card">
                  <md-card-header>
                    <md-card-media>
                      <img :src="require('../assets/desserts/' + desserts[dessertMidi].src )" alt="Avatar">
                    </md-card-media>

                    <md-card-header-text>
                      <div class="md-title">{{desserts[dessertMidi].nom}}</div>
                      </md-card-header-text>
                  </md-card-header>
                  
                </md-card>
              </md-list-item>
                
            </md-list>
          </md-list-item> 
          <md-list-item md-expand >
            <md-toolbar :md-elevation="0">
              <md-icon>local_bar</md-icon>
              <span class="md-list-item-text md-title">Boissons</span>
            </md-toolbar>
            <md-list slot="md-expand">
              <md-list-item class="" v-for="boissonMidi in this.boissonsMidi" :key="boissonMidi">
                <md-card class="md-primary md-card " md-theme="green-card">
                  <md-card-header>
                    <md-card-media>
                      <img :src="require('../assets/boissons/' + boissons[boissonMidi].src )" alt="Avatar">
                    </md-card-media>

                    <md-card-header-text>
                      <div class="md-title">{{boissons[boissonMidi].nom}}</div>
                      </md-card-header-text>
                  </md-card-header>
                  
                </md-card>
              </md-list-item>
                
            </md-list>
          </md-list-item> 
        </md-list>
      </div>
      <md-toolbar :md-elevation="1">
        <md-button class="md-raised prix" disabled>Prix : {{this.getPrix(this.prixMenuMidi)}} €</md-button>
      </md-toolbar>
    </div>
    <div class="viewport">
      <md-toolbar :md-elevation="1">
        <span class="md-title">Menu Gastronomique</span>
      </md-toolbar>
      <div class="list">
        <md-list >
          <md-list-item md-expand>
            <md-toolbar :md-elevation="0">
              <md-icon>restaurant</md-icon>
              <span class="md-list-item-text md-title">Hors d'Oeuvres</span>
            </md-toolbar>
            <md-list slot="md-expand">
              <md-list-item class="" v-for="hordOeuvreGastro in this.hordOeuvresGastrono" :key="hordOeuvreGastro">
                <md-card class="md-primary md-card " md-theme="green-card">
                  <md-card-header>
                    <md-card-media>
                      <img :src="require('../assets/gastro/horsoeuvres/' + hordOeuvresGastro[hordOeuvreGastro].src )" alt="Avatar">
                    </md-card-media>

                    <md-card-header-text>
                      <div class="md-title">{{hordOeuvresGastro[hordOeuvreGastro].nom}}</div>
                      </md-card-header-text>
                  </md-card-header>
                  
                </md-card>
              </md-list-item>
                
            </md-list>
          </md-list-item>
          <md-list-item md-expand>
            <md-toolbar :md-elevation="0">
              <md-icon>dinner_dining</md-icon>
              <span class="md-list-item-text md-title">Plats</span>
            </md-toolbar>
            <md-list slot="md-expand">
              <md-list-item class="" v-for="platGastro in this.platsGastrono" :key="platGastro">
                <md-card class="md-primary md-card " md-theme="green-card">
                  <md-card-header>
                    <md-card-media>
                      <img :src="require('../assets/gastro/plats/' + platsGastro[platGastro].src )" alt="Avatar">
                    </md-card-media>

                    <md-card-header-text>
                      <div class="md-title">{{platsGastro[platGastro].nom}}</div>
                      </md-card-header-text>
                  </md-card-header>
                  
                </md-card>
              </md-list-item>
                
            </md-list>
          </md-list-item>
          <md-list-item md-expand >
            <md-toolbar :md-elevation="0">
              <md-icon>cake</md-icon>
              <span class="md-list-item-text md-title">Desserts</span>
            </md-toolbar>
            <md-list slot="md-expand">
              <md-list-item class="" v-for="dessertGastro in this.dessertsGastrono" :key="dessertGastro">
                <md-card class="md-primary md-card " md-theme="green-card">
                  <md-card-header>
                    <md-card-media>
                      <img :src="require('../assets/gastro/dessert/' + dessertsGastro[dessertGastro].src )" alt="Avatar">
                    </md-card-media>

                    <md-card-header-text>
                      <div class="md-title">{{dessertsGastro[dessertGastro].nom}}</div>
                      </md-card-header-text>
                  </md-card-header>
                  
                </md-card>
              </md-list-item>
                
            </md-list>
          </md-list-item> 
        </md-list>
      </div>
      <md-toolbar :md-elevation="1">
        <md-button class="md-raised prix" disabled>Prix : {{this.getPrix(this.prixMenuGastro)}} €</md-button>
      </md-toolbar>
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
    boissons : [],
    hordOeuvresGastro : [] ,
    platsGastro : [],
    dessertsGastro :[],
    boissonsGastro : [],
      
  },mounted() {
    //Appel des Fonctions pour obtenir aléatoirement des menus de midi et leur prix
    this.prixHO = this.getmenuDemidi(0,this.hordOeuvres.length,this.hordOeuvresMidi,this.hordOeuvres)
    this.prixPlats = this.getmenuDemidi(0,this.plats.length,this.platsMidi,this.plats);
    this.prixD = this.getmenuDemidi(0,this.desserts.length,this.dessertsMidi,this.desserts)
    this.prixB=this.getmenuDemidi(0,this.boissons.length,this.boissonsMidi,this.boissons)

    //Calcul du prix total du menu sans le pourcentage de réduction
    this.prixMenuMidi=this.prixHO+this.prixPlats+this.prixD+this.prixD;

    //Appel des Fonctions pour obtenir aléatoirement des menus Gastronomique et leur prix
    this.prixHOG = this.getMenuGastronomique(0,this.hordOeuvresGastro.length,this.hordOeuvresGastrono,this.hordOeuvresGastro)
    this.prixPlatsG = this.getMenuGastronomique(0,this.platsGastro.length,this.platsGastrono,this.platsGastro);
    this.prixDG = this.getMenuGastronomique(0,this.dessertsGastro.length,this.dessertsGastrono,this.dessertsGastro);

    //Calcul du prix total du menu sans le pourcentage de réduction
    this.prixMenuGastro=this.prixHOG+this.prixPlatsG+this.prixDG+this.prixDG;

    console.log('gjhgvbn,',this.prixMenuGastro, 'ghj',this.getPrix(this.prixMenuGastro))
    
  }, 
  data:function(){
      return {
        menuGastronomique: [],
        hordOeuvresMidi : [],
        platsMidi :[],
        dessertsMidi : [],
        boissonsMidi : [],
        hordOeuvresGastrono : [],
        platsGastrono :[],
        dessertsGastrono : [],
        prix : 0
      } 
  },
  methods :{
    getmenuDemidi(min,max,tab,tab2){
      this.prix=0
      for (let index = 0; index < 3; index++) {
        
        min = Math.ceil(min);
        max = Math.floor(max);
        var newIndex=Math.floor(Math.random() * (max - min)) + min;
        for (let index1= 0; index1 < tab.length; index1++) {
          while (newIndex === tab[index1]) {
            newIndex=Math.floor(Math.random() * (max - min)) + min;
            index1=0;
          }    
        }
        tab.push(newIndex)
        this.prix = this.prix + tab2[newIndex].prix;
      }    
      return this.prix;   
    },
    getMenuGastronomique(min,max,tab,tab2){
      this.prix=0
      for (let index = 0; index < 2; index++) {
        min = Math.ceil(min);
        max = Math.floor(max);
        var newIndex=Math.floor(Math.random() * (max - min)) + min;
        for (let index1= 0; index1 < tab.length; index1++) {
          while (newIndex === tab[index1]) {
            newIndex=Math.floor(Math.random() * (max - min)) + min;
            index1=0;
          }    
        }
        tab.push(newIndex)
        this.prix = this.prix + tab2[newIndex].prix;
      }       
      return this.prix;
    },
    //Nous alons faire une diminition de 20% sur les menus par rapport à la somme des prix initiaux
    getPrix(x){
      x= x - x*0.2;
      return x
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
