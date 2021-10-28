<template>
 <l-map
   :center="center"
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
   :lat-lng="[ 49.114910, 6.178810 ]"
 >
    <l-icon ref="icon">
     <img class="restaurant-icon" :src="imageUrl"/>
   </l-icon>
    </l-marker>
   </l-map>
</template>

<script>
import { LMap, LTileLayer,LMarker,LIcon } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

export default {
  name:"Map",
 components: {
   LMap,
   LTileLayer,
   LMarker,
   LIcon
   
 },
 data () {
   return {
     url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
     center: [ 49.114910, 6.178810 ],
     zoom: 12,
     imageUrl : 'https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/000000/external-restaurant-bar-and-restaurant-icongeek26-linear-colour-icongeek26.png'
   }
 },
 methods: {
   zoomUpdated (zoom) {
     this.zoom = zoom;
     console.log(this.markers)
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
   width: 100%;
   height: 100%;
   overflow :hidden
 }
</style>