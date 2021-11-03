<template>
  <div class="mapping">
  <md-toolbar md-elevation="0" class="md-accent infosIcone">
    <h3 class="md-title">La position du restaurant {{name}} sur la carte est marquée par l'icone : <img src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/000000/external-restaurant-bar-and-restaurant-icongeek26-linear-colour-icongeek26.png" alt="">.</h3>
  </md-toolbar>
  <div>
    <l-map
   :center="[lattitude,longitude]"
   :zoom="zoom"
   class="map"
   ref="map"
   @update:zoom="zoomUpdated"
   @update:center="centerUpdated"
  >
    <l-tile-layer
      :url="url"
    >
    </l-tile-layer>

    <l-marker
    :lat-lng="[lattitude,longitude]">
        <l-icon ref="icon">
          <img class="restaurant-icon" :src="imageUrl"/>
        </l-icon>
      </l-marker>
  </l-map>
  </div>
  
</div>
</template>

<script>
import { LMap, LTileLayer,LMarker,LIcon } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

export default {
  name:"Map",
  props: {
    lattitude : Number,
    longitude : Number,
    name : String
  },
 components: {
   LMap,
   LTileLayer,
   LMarker,
   LIcon
   
 },
 data () {
   return {
     url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
     zoom: 12,
     imageUrl : 'https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/000000/external-restaurant-bar-and-restaurant-icongeek26-linear-colour-icongeek26.png'
   }
 },
 methods: {
   zoomUpdated (zoom) {
     this.zoom = zoom;
   },
   centerUpdated (center) {
     this.center = center;
   }

 }
}
</script>

<style>
@import "~leaflet/dist/leaflet.css";

 .map {
   position: absolute;
   width: 100% !important;
   height: 100% !important;
   overflow : hidden !important;
 }
  
  .md-toolbar.md-accent.infosIcone {
      display: block;
      margin-bottom: 25px;
      position: fixed;
      z-index: 1000;
  }

  .md-title{
   text-align: center;
 }

 .mapping {
    height: 2000px;
}
</style>