<template>
  <div>
    <md-toolbar class="md-large">
      <div class="md-toolbar-row avatar md-toolbar-section-start">
        <md-avatar class="md-large">
        <img src="../assets/avatarResto.png" alt="Avatar">
      </md-avatar>
        <h3 class="md-title">{{restaurant.name}}</h3>
      </div>
      <div class="info md-toolbar-section-end">
        <md-button class=" buttonInfo md-raised" @click="infoRestoModal=true">
          <md-icon>info</md-icon><span>Informations du Restaurant</span>
        </md-button>
        <md-dialog :md-active.sync="infoRestoModal">
              <md-dialog-title>Informations du Restaurant</md-dialog-title>
              
                <md-dialog-content>
                  <md-list>
                    <md-list-item >Nom : <code> <md-chip>{{restaurant.name}}</md-chip></code></md-list-item>
                    <md-list-item >Cuisine : <code> <md-chip>{{restaurant.cuisine}}</md-chip></code></md-list-item>
                    <md-list-item >Ville : <code> <md-chip>{{restaurant.borough}}</md-chip></code></md-list-item>
                  </md-list>
                 
                </md-dialog-content>

                <md-dialog-actions>
                  <md-button class="md-primary" @click="infoRestoModal= false">Close</md-button>
                </md-dialog-actions>

            </md-dialog>
      </div>
    </md-toolbar>
    <md-tabs class="restoTabs" md-alignment="centered">
      <md-tab id="tab-galerie" md-label="Galerie">
        <div class="galerieCard">
          <md-card>
            <md-card-media>
              <img src="../assets/photosResto/architecture.jpg" alt="People">
            </md-card-media>
          </md-card>

          <md-card>
            <md-card-media>
              <img src="../assets/photosResto/plat.jpg" alt="People">
            </md-card-media>
          </md-card>

          <md-card>
            <md-card-media>
              <img src="../assets/photosResto/verre.jpg" alt="People">
            </md-card-media>
          </md-card>

          <md-card>
            <md-card-media>
              <img src="../assets/photosResto/fruit.jpg" alt="People">
            </md-card-media>
          </md-card>

          <md-card>
            <md-card-media>
              <img src="../assets/photosResto/decor.jpg" alt="People">
            </md-card-media>
          </md-card>

          <md-card>
            <md-card-media>
              <img src="../assets/photosResto/bar.jpg" alt="People">
            </md-card-media>
          </md-card>

          <md-card>
            <md-card-media>
              <img src="../assets/photosResto/burger.jpg" alt="People">
            </md-card-media>
          </md-card>

          <md-card>
            <md-card-media>
              <img src="../assets/photosResto/service.jpg" alt="People">
            </md-card-media>
          </md-card>

          <md-card>
            <md-card-media>
              <img src="../assets/photosResto/indien.jpg" alt="People">
            </md-card-media>
          </md-card>
        </div>
        
        
      </md-tab>
      <md-tab id="tab-video" md-label="Vidéo"></md-tab>
      <md-tab id="tab-map" md-label="Map"></md-tab>
    </md-tabs>

    
  </div>
</template>

<script>
export default {
  name: 'Restaurant',
  props: {
  },
  computed: {
    id() {
          return this.$route.params.id
    }
  },
  data :function() {
    return {
      restaurant : null,
      infoRestoModal : false
    }
  },
  mounted() {
    console.log("avant affichage");
    console.log("ID + " + this.id)
    let url= "http://localhost:8080/api/restaurants/" + this.id;
    fetch(url)
    .then((response) => {
      return response.json();
    })
    .then(data => {
      console.log(data.restaurant.name)
      this.restaurant = data.restaurant;
    })
  },
  methods :{

  }

}
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

.info i.md-icon.md-icon-font {
    font-size: 30px !important;
    margin: 20px;
    color: lightblue;
}

.info.md-toolbar-section-end {
    margin-right: 150px;
}

.galerieCard {
    height: 480px;
  }

  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }

  .restoTabs .md-tabs-navigation.md-elevation-0 {
    background: pink;
}

.buttonInfo  {
    background: pink !important ;
    margin: 0 -10px;
    padding: 4px;
}

.buttonInfo span {
    color: lightblue;
}

</style>
