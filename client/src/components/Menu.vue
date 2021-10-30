<template>
  <div class="row">
  <div class="col l6 m8 s12 offset-m2 offset-l3">
    <ul id="app" class="collapsible popout">
      <li v-for="card in cards" :key="card.title">
        <div class="collapsible-header "><img :src="card.src" class="circle vignette "><span class="headline white--text" v-text="card.title"></span></div>
        <div class="collapsible-body white"><span class="headline white--text" v-text="card.description"></span></div>
      </li>

    </ul>

    <md-toolbar class="md-dense">
      <h3 class="md-title">Dense</h3>
    </md-toolbar>

  </div>
</div>

</template>

<script>
import $ from "lodash";
export default {

  name: 'Menu',
  props: {
      
  },
  data:function(){
      return {
    
     cards: [
        { title: 'Macaron', src: 'https://res.cloudinary.com/landry-bete/image/upload/v1488769144/dessert14_trnhnj.jpg', description:'Is this thing French ?'},
        { title: 'Tajine', src: 'https://res.cloudinary.com/landry-bete/image/upload/v1525135352/tajine_mfnbd8.jpg', description:'Moroccan people seem to love that dish...'},
        { title: 'Cake', src: 'https://res.cloudinary.com/landry-bete/image/upload/v1525135530/cake_lnh2hn.jpg', description:'Eat healthy my boy!'},
    ]
   } 
  },
  mounted: function(){$('.collapsible').collapsible();}
  }



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vignette {
  max-width: 60px;
  max-height: 60px;
    margin-right: 4%;
}

#app {
  margin-top:50px
}
</style>
