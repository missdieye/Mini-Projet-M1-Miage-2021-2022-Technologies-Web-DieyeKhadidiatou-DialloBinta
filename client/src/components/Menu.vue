<template>
  <div>
    <md-toolbar class="md-large diadie" v-if="this.path == '/menu'">
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
        <p>
          Ci-dessous les menus de Midi et Gastronomique du restaurant DIADIE.
        </p>
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
              >Fermer</md-button
            >
          </md-dialog-actions>
        </md-dialog>
      </div>
    </md-toolbar>
    <md-toolbar md-elevation="1" class="md-accent infos">
      <i class="infos"
        >Pour chaque menu, vous aurez selon vos choix un<b> Hors d'Oeuvres</b> ,
        un <b>Plat</b> , un <b>Dessert</b> et un <b>boisson</b>. Le tout pour un
        prix!</i
      >
    </md-toolbar>
    <div class="viewport">
      <md-toolbar :md-elevation="1">
        <span class="md-title">Menu de Midi</span>
      </md-toolbar>
      <div class="list">
        <md-list>
          <md-list-item md-expand>
            <md-toolbar :md-elevation="0">
              <md-icon>restaurant</md-icon>
              <span class="md-list-item-text md-title">Hors d'Oeuvres</span>
            </md-toolbar>
            <md-list slot="md-expand">
              <md-list-item
                class=""
                v-for="hordOeuvreMidi in this.hordOeuvresMidi"
                :key="hordOeuvreMidi"
              >
                <md-card class="md-primary md-card" md-theme="green-card">
                  <md-card-header>
                    <md-card-media>
                      <img
                        :src=" require('../assets/horsOeuvres/' + hordOeuvres[hordOeuvreMidi].src)"
                        alt="Avatar"
                      />
                    </md-card-media>

                    <md-card-header-text>
                      <div class="md-title">
                        {{ hordOeuvres[hordOeuvreMidi].nom }}
                      </div>
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
              <md-list-item
                class=""
                v-for="platMidi in this.platsMidi"
                :key="platMidi"
              >
                <md-card class="md-primary md-card" md-theme="green-card">
                  <md-card-header>
                    <md-card-media>
                      <img
                        :src="require('../assets/plats/' + plats[platMidi].src)"
                        alt="Avatar"
                      />
                    </md-card-media>

                    <md-card-header-text>
                      <div class="md-title">{{ plats[platMidi].nom }}</div>
                    </md-card-header-text>
                  </md-card-header>
                </md-card>
              </md-list-item>
            </md-list>
          </md-list-item>
          <md-list-item md-expand>
            <md-toolbar :md-elevation="0">
              <md-icon>cake</md-icon>
              <span class="md-list-item-text md-title">Desserts</span>
            </md-toolbar>
            <md-list slot="md-expand">
              <md-list-item
                class=""
                v-for="dessertMidi in this.dessertsMidi"
                :key="dessertMidi"
              >
                <md-card class="md-primary md-card" md-theme="green-card">
                  <md-card-header>
                    <md-card-media>
                      <img
                        :src="
                          require('../assets/desserts/' +
                            desserts[dessertMidi].src)
                        "
                        alt="Avatar"
                      />
                    </md-card-media>

                    <md-card-header-text>
                      <div class="md-title">
                        {{ desserts[dessertMidi].nom }}
                      </div>
                    </md-card-header-text>
                  </md-card-header>
                </md-card>
              </md-list-item>
            </md-list>
          </md-list-item>
          <md-list-item md-expand>
            <md-toolbar :md-elevation="0">
              <md-icon>local_bar</md-icon>
              <span class="md-list-item-text md-title">Boissons</span>
            </md-toolbar>
            <md-list slot="md-expand">
              <md-list-item
                class=""
                v-for="boissonMidi in this.boissonsMidi"
                :key="boissonMidi"
              >
                <md-card class="md-primary md-card" md-theme="green-card">
                  <md-card-header>
                    <md-card-media>
                      <img
                        :src="
                          require('../assets/boissons/' +
                            boissons[boissonMidi].src)
                        "
                        alt="Avatar"
                      />
                    </md-card-media>

                    <md-card-header-text>
                      <div class="md-title">
                        {{ boissons[boissonMidi].nom }}
                      </div>
                    </md-card-header-text>
                  </md-card-header>
                </md-card>
              </md-list-item>
            </md-list>
          </md-list-item>
        </md-list>
      </div>
      <md-toolbar :md-elevation="1">
        <md-button class="md-raised prix" disabled
          >Prix :
          {{
            Math.round((this.getPrix(this.prixMenuMidi) * 10) / 10)
          }}
          €</md-button
        >
      </md-toolbar>
    </div>
    <div class="viewport">
      <md-toolbar :md-elevation="1">
        <span class="md-title">Menu Gastronomique</span>
      </md-toolbar>
      <div class="list">
        <md-list>
          <md-list-item md-expand>
            <md-toolbar :md-elevation="0">
              <md-icon>restaurant</md-icon>
              <span class="md-list-item-text md-title">Hors d'Oeuvres</span>
            </md-toolbar>
            <md-list slot="md-expand">
              <md-list-item
                class=""
                v-for="hordOeuvreGastro in this.hordOeuvresGastrono"
                :key="hordOeuvreGastro"
              >
                <md-card class="md-primary md-card" md-theme="green-card">
                  <md-card-header>
                    <md-card-media>
                      <img
                        :src="
                          require('../assets/gastro/horsoeuvres/' +
                            hordOeuvresGastro[hordOeuvreGastro].src)
                        "
                        alt="Avatar"
                      />
                    </md-card-media>

                    <md-card-header-text>
                      <div class="md-title">
                        {{ hordOeuvresGastro[hordOeuvreGastro].nom }}
                      </div>
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
              <md-list-item
                class=""
                v-for="platGastro in this.platsGastrono"
                :key="platGastro"
              >
                <md-card class="md-primary md-card" md-theme="green-card">
                  <md-card-header>
                    <md-card-media>
                      <img
                        :src="
                          require('../assets/gastro/plats/' +
                            platsGastro[platGastro].src)
                        "
                        alt="Avatar"
                      />
                    </md-card-media>

                    <md-card-header-text>
                      <div class="md-title">
                        {{ platsGastro[platGastro].nom }}
                      </div>
                    </md-card-header-text>
                  </md-card-header>
                </md-card>
              </md-list-item>
            </md-list>
          </md-list-item>
          <md-list-item md-expand>
            <md-toolbar :md-elevation="0">
              <md-icon>cake</md-icon>
              <span class="md-list-item-text md-title">Desserts</span>
            </md-toolbar>
            <md-list slot="md-expand">
              <md-list-item
                class=""
                v-for="dessertGastro in this.dessertsGastrono"
                :key="dessertGastro"
              >
                <md-card class="md-primary md-card" md-theme="green-card">
                  <md-card-header>
                    <md-card-media>
                      <img
                        :src="
                          require('../assets/gastro/dessert/' +
                            dessertsGastro[dessertGastro].src)
                        "
                        alt="Avatar"
                      />
                    </md-card-media>

                    <md-card-header-text>
                      <div class="md-title">
                        {{ dessertsGastro[dessertGastro].nom }}
                      </div>
                    </md-card-header-text>
                  </md-card-header>
                </md-card>
              </md-list-item>
            </md-list>
          </md-list-item>
        </md-list>
      </div>
      <md-toolbar :md-elevation="1">
        <md-button class="md-raised prix" disabled
          >Prix : {{ this.prixMenuGastro }} €</md-button
        >
      </md-toolbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: {},
  mounted() {
    //Appel des Fonctions pour obtenir aléatoirement des menus de midi et leur prix
    this.prixHO =  this.getmenuDemidi( 0 , this.hordOeuvres.length , this.hordOeuvresMidi , this.hordOeuvres ) / 3;
    this.prixPlats =  this.getmenuDemidi(0, this.plats.length, this.platsMidi, this.plats) / 3; 
    this.prixD =  this.getmenuDemidi(0,this.desserts.length,this.dessertsMidi,this.desserts  ) / 3;
    this.prixB =  this.getmenuDemidi(0, this.boissons.length, this.boissonsMidi, this.boissons) / 3;

    //Calcul du prix total du menu sans le pourcentage de réduction
    this.prixMenuMidi = this.prixHO + this.prixPlats + this.prixD + this.prixD;
    this.prixMenuMidi = Math.round(this.prixMenuMidi * 10) / 10;

    //Appel des Fonctions pour obtenir aléatoirement des menus Gastronomique et leur prix
    this.prixHOG =this.getMenuGastronomique( 0 , this.hordOeuvresGastro.length , this.hordOeuvresGastrono , this.hordOeuvresGastro) / 2;
    this.prixPlatsG = this.getMenuGastronomique( 0 , this.platsGastro.length , this.platsGastrono , this.platsGastro ) / 2;
    this.prixDG = this.getMenuGastronomique(  0 , this.dessertsGastro.length , this.dessertsGastrono , this.dessertsGastro) / 2;

    //Calcul du prix total du menu gastronomique
    this.prixMenuGastro = this.prixHOG + this.prixPlatsG + this.prixDG;
    this.prixMenuGastro = Math.round(this.prixMenuGastro * 10) / 10;

    //Récupérer le path en cours
    this.path = this.$route.path;
    this.path=this.$route.path;

    
  }, 
  data:function(){
      return {
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
          { id:4, nom: 'Salade Nicoise', src: 'salade-nicoise.jpg', description:"Le saumon est délicieux avec de nombreux légumes ! Essayez-le avec des épinards, des poireaux, des courgettes, du chou-fleur, des carottes, des salsifis ou encore des brocolis.",prix:20},
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
        menuGastronomique: [],
        hordOeuvresMidi : [],
        platsMidi :[],
        dessertsMidi : [],
        boissonsMidi : [],
        hordOeuvresGastrono : [],
        platsGastrono :[],
        dessertsGastrono : [],
        prix : 0,
        commandePage : false
      } 
  },
  methods :{
    //Fonction qui permet d'avoir aléatoirement un menu de midi
    getmenuDemidi(min,max,tab,tab2){
      this.prix=0
      for (let index = 0; index < 3; index++) {
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
        this.prix = this.prix + tab2[newIndex].prix;
      }    
      return this.prix;   
    },
    
    //Fonction qui permet d'avoir aléatoirement un menu gastronomique
    getMenuGastronomique(min,max,tab,tab2){
      this.prix=0
      for (let index = 0; index < 2; index++) {
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
    background: #f677a8cc;
    color: black;
 }
 .md-toolbar.md-accent.infos {
    margin-bottom: 25px;
    text-align: center;
    margin-top: 15px;
}
i.infos {
    font-size: 20px;
    text-align: center;
    margin-left: 100px;
    color: black;
    margin-top: 10px !important;
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
