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
      //Liste des Hors d'Oeuvres, plats, boissons simples ou gastronomiques
      hordOeuvres : [
          { id:1, nom: 'Salade de Légumes', src: 'saladesLegumes.jpg', description:"La salade composée c'est un vrai plat complet. Une base de salades de votre choix en mélange, des herbes aromatiques fraîches, une vinaigrette légère et une garniture choisie avec soin.",prix:10},
          { id:2, nom: 'Frittes', src: 'frittes.jpg', description:"La frite est un bâtonnet de pomme de terre cuit par friture dans une graisse animale ou une huile végétale.",prix:15},
          { id:3, nom: 'Fruits de Mer', src: 'fruitdeMer.jpg', description:"Un plateau de fruits de mer constitué entièrement de crustacés, mollusques et coquillages de mer.Il est servi avec des condiments tels que sauce mayonnaise, sauce cocktail, et citron frais.",prix:20},
          { id:4, nom: 'Saumon', src: 'saumon.jpg', description:"Le saumon est délicieux avec de nombreux légumes ! Essayez-le avec des épinards, des poireaux, des courgettes, du chou-fleur, des carottes, des salsifis ou encore des brocolis.",prix:12},
          { id:5, nom: 'Salade de Tomate', src: 'saladesTomates.jpg', description:"À base de tomates fraîches assaisonnées de sésame et de pérille, c'est le parfait remontant après une journée bien remplie.",prix:14}
        ],
        plats : [
          { id:1, nom: 'Brochettes', src: 'brochettes.jpg', description:'Une brochette, en cuisine, désigne une fine tige en métal ou en bois sur laquelle sont enfilés des morceaux de viande ?',prix:13},
          { id:2, nom: 'Pattes Tomates', src: 'pattesTomate.jpg', description:' Est un plat qui est mis à disposition dans un petit pot de parmesan râpé dont chaque convive se sert à sa convenance.',prix:17},
          { id:3, nom: 'Riz Curry', src: 'rizCurry.jpg', description:'Le riz et le curry sont un plat populaire au Sri Lanka, ainsi que dans le sous-continent indien et au Bangladesh. Le dîner au riz et au curry comprend les éléments suivants : Un grand bol de riz, le plus souvent bouilli, mais fréquemment frit. Parfois, le kiribath, du riz cuit dans du lait de coco, est servi.',prix:18},
          { id:4, nom: 'Riz Poulet hainanais', src: 'rizPoulets.jpg', description:'Le riz au poulet hainanais ou riz au poulet de Hainan est un mets d origine chinoise, généralement associé aux régions de Hainan, de Singapour et de Malaisie, bien qu il soit aussi commun en Thaïlande. Il est fait à partir du poulet de Wenchang',prix:15},
          { id:5, nom: 'Steak et Frittes', src: 'steakFrittes.jpg', description:'Est un plat composé de viante de boeuf et des frittes servi sur un plateau avec une sauce oignon',prix:14}
        ],
        desserts :[
          { id:1, nom: 'Beignet Rose', src: 'beignetRosePaillettes.jpg', description:'Beignet frit de pâte très fine ou plus épaisse. Forme classique: fleur, rose; autres: cœur, trèfle à quatre feuilles, étoile, spirale,… Dimensions: 10-15 cm ø; 2-4 cm de hauteur.  Couleur: brun clair. Poids: env. 20-25 g.',prix:3},
          { id:2, nom: 'Smoothies', src: 'bocauxDessert.jpg', description:'Boisson mousseuse et onctueuse à base de fruits et/ou de légumes frais, mixés et mélangés à des jus de fruits, du yaourt, de la glace pilée',prix:7},
          { id:3, nom: 'Brownies', src: 'brownies.jpg', description:'Le brownie est un gâteau au chocolat, fondant par endroits, cuit au four. Un glaçage peut être ensuite déposé sur sa surface.',prix:2},
          { id:4, nom: 'Gateau Framboise', src: 'GateauFramboise.jpg', description:'Le framboisier est une pâtisserie à base de framboise, de génoise et de crème.',prix:14},
          { id:5, nom: 'Tarte Citrouille', src: 'tarteCitrouille.jpg', description:'La tarte à la citrouille est un dessert traditionnel, souvent consommée en automne et au début de l hiver, plus particulièrement pendant Thanksgiving et Noël aux États-Unis et au Canada. La citrouille est un symbole de la moisson et se retrouve également lors de la fête d Halloween',prix:5},
        ],
        boissons :[
          { id:1, nom: 'Alcool', src: 'alcool.jpg', description:'Une boisson alcoolisée, ou un alcool, est une boisson contenant de l éthanol. Le vin, la bière, les eaux-de-vie, sont des exemples de boissons alcoolisées.',prix:8},
          { id:2, nom: 'Café', src: 'cafe.jpg', description:'Brillante, piquante, vive, nerveuse, pointue, douce, fraîche, molle, absente. (Dans l ordre du plus acide au moins, c est le vocable que j utilise) Référez-vous au citron. Si c est pas assez clair, prenez-en un et mordez dedans.',prix:2},
          { id:3, nom: 'Jus de Citron', src: 'jusCitron.jpg', description:'Le jus de citron est une boisson préparée à partir de citrons.',prix:4},
          { id:4, nom: 'jus de Melon', src: 'jusMelon.jpg', description:'Le melon est l’un des « fruits » star de l’été.Que ce soit en entrée ou en dessert ou sous forme de jus de melon, sa note sucrée ravira vos papilles.',prix:5},
          { id:5, nom: 'Jus de Pomme et Comcombre', src: 'jusPommeComcombre.jpg', description:'Jus de pomme et concombre avec une pointe de citron vert, gingembre',prix:6},
        ],
        hordOeuvresGastro : [
          { id:1, nom: "Farandole d'Oeufs", src: 'farandoledoeufs.jpg', description:"La salade composée c'est un vrai plat complet. Une base de salades de votre choix en mélange, des herbes aromatiques fraîches, une vinaigrette légère et une garniture choisie avec soin.",prix:40},
          { id:2, nom: 'Oeuf Cocotte', src: 'oeufcocotte.jpg', description:"La frite est un bâtonnet de pomme de terre cuit par friture dans une graisse animale ou une huile végétale.",prix:10},
          { id:3, nom: 'Patte aux Croutes de Morilles', src: 'patecroutemorilles.jpg', description:"Un plateau de fruits de mer constitué entièrement de crustacés, mollusques et coquillages de mer.Il est servi avec des condiments tels que sauce mayonnaise, sauce cocktail, et citron frais.",prix:30},
          { id:4, nom: 'Salade Nicoise', src: 'salade-nicoise.jpg', description:"La salade composée c'est un vrai plat complet. Une base de salades de votre choix en mélange, des herbes aromatiques fraîches, une vinaigrette légère et une garniture choisie avec soin.",prix:20},
        ],
        platsGastro : [
          { id:1, nom: 'Blanquette de Veau', src: 'blanquettedeveau.jpg', description:'La blanquette ou blanquette de veau ou blanquette de veau à l ancienne est une recette de cuisine traditionnelle de cuisine française, à base de viande de veau cuite dans un bouillon avec carotte, poireau, oignon et bouquet garni, liée en sauce blanche à la crème et au beurre et aux champignons de Paris.',prix:35},
          { id:2, nom: 'Cassoulet', src: 'cassoulet.jpg', description:'Le cassoulet (de l occitan cassolet, caçolet) est une spécialité régionale du Languedoc, à base de haricots secs, généralement blancs, et de viande. À son origine, il était à base de fèves. Le cassoulet tient son nom de la cassole en terre cuite émaillée dite caçòla en occitan et fabriquée à Issel.',prix:30},
          { id:3, nom: 'Foie Gras', src: 'foiegras.jpg', description:'Le foie gras est une spécialité culinaire à base de foie frais issu de l élevage et de l engraissement par gavage des oies et des canards. Le foie gras est un mets de fête populaire et bien connu dans la cuisine française.',prix:40},
          { id:4, nom: 'Galette de Bretonne', src: 'galettebretonne.jpg', description:'La galette bretonne est un biscuit sablé au beurre fabriqué en Bretagne. L origine des galettes n est pas certaine : elles seraient une création de Isidore Penven, en 1890. La marque Traou mad de Pont-Aven attribue cette création à Alexis Le Villain, au début du XXᵉ siècle',prix:30},
        ],
        dessertsGastro :[
          { id:1, nom: 'Chocolat à Chou Vanille', src: 'chouvanillechocolat.jpg', description:' De jolis choux bien croustillants garnis de crème pâtissière ou de glace à la vanille et nappés d une sauce onctueuse au chocolat,',prix:10},
          { id:2, nom: 'Ile Flottante Crème Anglaise', src: 'ileflottantecremeanglaisecaramel.jpg', description:'recette traditionnelle des Iles flottantes au caramel craquant baignant dans la crème anglaise parfumée à la vanille.',prix:9},
          { id:3, nom: 'Madeleines Traditionnelles', src: 'madeleinestraditionnelles.jpg', description:'Une madeleine est un petit gâteau traditionnel aux œufs, en forme de coquillage, ...',prix:8},
          { id:4, nom: 'Tarte Tartin Pomme', src: 'tartetatinpomme.jpg', description:'La tarte Tatin est une tarte aux pommes caramélisées au sucre et au beurre dont la pâte est disposée au-dessus de la garniture avant la cuisson au four. Elle est ensuite renversée sur un plat et servie tiède.',prix:6},
        ],
        //variables déclarées
      hordOeuvresCDP: [],
        platsCDP :[],
        dessertsCDP :[],
        boissonsCDP :[],
        commandePage : false
      }
  },
  mounted() {
    //Récupérer la carte avec des plats aléatoires
    this.getCartedesPlats(0,this.hordOeuvres.length,this.hordOeuvresCDP)
    this.getCartedesPlats(0,this.plats.length,this.platsCDP);
    this.getCartedesPlats(0,this.desserts.length,this.dessertsCDP)
    this.getCartedesPlats(0,this.boissons.length,this.boissonsCDP)
    
    //Récupérer le path en cours
    this.path=this.$route.path;
  
  },
  methods: {
    //fonction qui affiche les 100 premiers lettres de la description
    petitedescription(description){
      return description.substring(0,100);
    },

    //Fonction qui permet d'avoir aléatoirement une carte
    getCartedesPlats(min,max,tab){
      for (let index = 0; index < 4; index++) {
        //Fonction random qui donne 2 entiers
        min = Math.ceil(min);
        max = Math.floor(max);
        var newIndex=Math.floor(Math.random() * (max - min)) + min;
        //Vérification de si l'entier donné n'existe pas déja
        for (let index1= 0; index1 < tab.length; index1++) {
          while (newIndex === tab[index1]) {
            newIndex=Math.floor(Math.random() * (max - min)) + min;
            index1=0;
          }    
        }
        tab.push(newIndex)
      }       
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
    background: #f677a8cc;
    color: black;
 }
i.infos {
    font-size: 20px;
    text-align: center;
    margin-left: 400px;
    color: black;
}
.avatar .md-avatar{
    margin: 0px!important;
}
.md-avatar.md-large {
    min-width: 84px;
    min-height: 84px;
}
.md-toolbar-row.avatar {
    margin: auto;
}
.buttonInfo  {
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
  color: #3FCFD6;
}
</style>