<template>
  <div class="">
    <md-toolbar class="md-dense">
         <md-card>
            <md-card-media>
              <img src="../assets/photosResto/decor.jpg" alt="People">
            </md-card-media>
          </md-card>
      <h3 class="md-title">nom du plat</h3>
       <div class="info md-toolbar-section-end">
        <md-button class=" buttonInfo md-raised" @click="infoRestoModal=true">
          <md-icon>info</md-icon><span>Informations du Restaurant</span>
        </md-button>
        <md-dialog :md-active.sync="infoRestoModal">
              <md-dialog-title>Description du plat</md-dialog-title>
              
                <md-dialog-content>
                 <p>Ce plat est un plat composé dde ............</p>
                 
                </md-dialog-content>

                <md-dialog-actions>
                  <md-button class="md-primary" @click="infoRestoModal= false">Close</md-button>
                </md-dialog-actions>

            </md-dialog>
      </div>
    </md-toolbar>
    
    
  </div>

</template>

<script>
export default {
  name: 'CarteDesPlats',
  props: {
    
  },
  data: function(){
      return{
        infoRestoModal : false,
      }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
