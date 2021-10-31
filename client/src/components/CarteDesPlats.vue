<template>
 <div>
    <div class="viewport">
      <div class="list">
        <md-list >
          <md-list-item md-expand >
            <md-toolbar :md-elevation="1">
              <md-icon>restaurant</md-icon>
              <span class="md-list-item-text md-title">Hors d'Oeuvres</span>
            </md-toolbar>
            <md-list slot="md-expand">
              <md-list-item class="" v-for="hordOeuvre in hordOeuvres" :key="hordOeuvre.id">
                <md-card class="md-primary md-card " md-theme="green-card">
                  <md-card-header>
                    <md-card-media>
                      <img :src="require('../assets/horsOeuvres/' + hordOeuvre.src )" alt="Avatar">
                    </md-card-media>

                    <md-card-header-text>
                      <div class="md-title">{{hordOeuvre.nom}}</div>
                      <div class="md-subhead" v-html="petitedescription(hordOeuvre.description) + '...'"></div>
                    </md-card-header-text>
                  </md-card-header>
                  <md-toolbar class="md-dense">
                    <md-card-expand>
                      <md-card-actions md-alignment="space-between">
                        <div>
                          <md-button class="md-raised prix" disabled>Prix : {{hordOeuvre.prix}}</md-button>
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
                          <p class="description">{{hordOeuvre.description}}</p>
                        </md-card-content>
                      </md-card-expand-content>
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
              <md-list-item class="" v-for="dessert in desserts" :key="dessert.id">
                <md-card class="md-primary md-card " md-theme="green-card">
                  <md-card-header>
                    <md-card-media>
                      <img :src="require('../assets/desserts/' + dessert.src )" alt="Avatar">
                    </md-card-media>

                    <md-card-header-text>
                      <div class="md-title">{{dessert.nom}}</div>
                      <div class="md-subhead" v-html="petitedescription(dessert.description) + '...'"></div>
                    </md-card-header-text>
                  </md-card-header>
                  <md-toolbar class="md-dense">
                    <md-card-expand>
                      <md-card-actions md-alignment="space-between">
                        <div>
                          <md-button class="md-raised prix" disabled>Prix : {{dessert.prix}}</md-button>
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
                          <p class="description">{{dessert.description}}</p>
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
        <md-list >
          <md-list-item md-expand >
            <md-toolbar :md-elevation="1">
              <md-icon>dinner_dining</md-icon>
              <span class="md-list-item-text md-title">Plats</span>
            </md-toolbar>
            <md-list slot="md-expand">
              <md-list-item class="" v-for="plat in plats" :key="plat.id">
                <md-card class="md-primary md-card " md-theme="green-card">
                  <md-card-header>
                    <md-card-media>
                      <img :src="require('../assets/plats/' + plat.src )" alt="Avatar">
                    </md-card-media>

                    <md-card-header-text>
                      <div class="md-title">{{plat.nom}}</div>
                      <div class="md-subhead" v-html="petitedescription(plat.description) + '...'"></div>
                    </md-card-header-text>
                  </md-card-header>
                  <md-toolbar class="md-dense">
                    <md-card-expand>
                      <md-card-actions md-alignment="space-between">
                        <div>
                          <md-button class="md-raised prix" disabled>Prix : {{plat.prix}}</md-button>
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
                          <p class="description">{{plat.description}}</p>
                        </md-card-content>
                      </md-card-expand-content>
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
              <md-list-item class="" v-for="boisson in boissons" :key="boisson.id">
                <md-card class="md-primary md-card " md-theme="green-card">
                  <md-card-header>
                    <md-card-media>
                      <img :src="require('../assets/boissons/' + boisson.src )" alt="Avatar">
                    </md-card-media>

                    <md-card-header-text>
                      <div class="md-title">{{boisson.nom}}</div>
                      <div class="md-subhead" v-html="petitedescription(boisson.description) + '...'"></div>
                    </md-card-header-text>
                  </md-card-header>
                  <md-toolbar class="md-dense">
                    <md-card-expand>
                      <md-card-actions md-alignment="space-between">
                        <div>
                          <md-button class="md-raised prix" disabled>Prix : {{boisson.prix}}</md-button>
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
                          <p class="description">{{boisson.description}}</p>
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
  name: 'CarteDesPlats',
  props: {
    
  },
  data: function(){
      return{

        hordOeuvres : [
          { id:1, nom: 'Salade de Légumes', src: 'saladesLegumes.jpg', description:"La salade composée c'est un vrai plat complet. Une base de salades de votre choix en mélange, des herbes aromatiques fraîches, une vinaigrette légère et une garniture choisie avec soin.",prix:"10 €"},
          { id:2, nom: 'Frittes', src: 'frittes.jpg', description:"La frite est un bâtonnet de pomme de terre cuit par friture dans une graisse animale ou une huile végétale.",prix:"15 €"},
          { id:3, nom: 'Fruits de Mer', src: 'fruitdeMer.jpg', description:"Un plateau de fruits de mer constitué entièrement de crustacés, mollusques et coquillages de mer.Il est servi avec des condiments tels que sauce mayonnaise, sauce cocktail, et citron frais.",prix:"20 €"},
          { id:4, nom: 'Saumon', src: 'saumon.jpg', description:"Le saumon est délicieux avec de nombreux légumes ! Essayez-le avec des épinards, des poireaux, des courgettes, du chou-fleur, des carottes, des salsifis ou encore des brocolis.",prix:"12 €"},
          { id:5, nom: 'Salade de Tomate', src: 'saladesTomates.jpg', description:"À base de tomates fraîches assaisonnées de sésame et de pérille, c'est le parfait remontant après une journée bien remplie.",prix:"14 €"}
        ],
        plats : [
          { id:1, nom: 'Brochettes', src: 'brochettes.jpg', description:'Is this thing French ?',prix:"14 €"},
          { id:2, nom: 'Pattes Tomates', src: 'pattesTomate.jpg', description:'Moroccan people seem to love that dish...',prix:"14 €"},
          { id:3, nom: 'Riz Curry', src: 'rizCurry.jpg', description:'Eat healthy my boy!',prix:"14 €"},
          { id:4, nom: 'Riz Poulet', src: 'rizPoulets.jpg', description:'Eat healthy my boy!',prix:"14 €"},
          { id:5, nom: 'Steak et Frittes', src: 'steakFrittes.jpg', description:'Eat healthy my boy!',prix:"14 €"}
        ],
        desserts :[
          { id:1, nom: 'Beignet Rose', src: 'beignetRosePaillettes.jpg', description:'Is this thing French ?',prix:"14 €"},
          { id:2, nom: 'Smoothies', src: 'bocauxDessert.jpg', description:'Moroccan people seem to love that dish...',prix:"14 €"},
          { id:3, nom: 'Brownies', src: 'brownies.jpg', description:'Eat healthy my boy!',prix:"14 €"},
          { id:4, nom: 'Gateau Framboise', src: 'GateauFramboise.jpg', description:'Eat healthy my boy!',prix:"14 €"},
          { id:5, nom: 'Tarte Citrouille', src: 'tarteCitrouille.jpg', description:'Eat healthy my boy!',prix:"14 €"},
        ],
        boissons :[
          { id:1, nom: 'Alcool', src: 'alcool.jpg', description:'Is this thing French ?',prix:"14 €"},
          { id:2, nom: 'Café', src: 'cafe.jpg', description:'Moroccan people seem to love that dish...',prix:"14 €"},
          { id:3, nom: 'Jus de Citron', src: 'jusCitron.jpg', description:'Eat healthy my boy!',prix:"14 €"},
          { id:4, nom: 'jus de Melon', src: 'jusMelon.jpg', description:'Eat healthy my boy!',prix:"14 €"},
          { id:5, nom: 'Jus de Pomme et Comcombre', src: 'jusPommeComcombre.jpg', description:'Eat healthy my boy!',prix:"14 €"},
        ],

        
      }

  },
  mounted() {
   // console.log(this.petitedescription('événement est déclenché sur un composant, tous les composants Vue ne sont pas encore remplacés, le DOM peut donc ne pas être encore définitif.')) ;
  },
  methods: {
    petitedescription(description){
      return description.substring(0,100);
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
    border: 1px solid rgba(#000, .12);
  }

  button.md-button.md-icon-button.voirPlus {
    width: 100px;
    margin-left: 230px;
  }

  p.description,.md-subhead{
    white-space: normal;
    margin: 4px;
  }

  button.md-button.md-raised.prix{
    background: pink;
    color: black;
 }

  

</style>
