import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueRouter from 'vue-router'
import ListeDesRestaurants from './components/ListeDesRestaurants.vue';
import Commande  from "./components/Commande.vue";
import Restaurant from './components/Restaurant.vue';
import Menu from './components/Menu.vue';
import CarteDesPlats from './components/CarteDesPlats.vue';
import vmodal from 'vue-js-modal';
import Embed from 'v-video-embed'



Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(VueRouter)
Vue.use(vmodal)
Vue.use(Embed);

//Définition des routes
const router = new VueRouter({
  routes:[
    {
      path:'/',
      component: ListeDesRestaurants
    },
    {
      path:'/restaurant/:id',
      component: Restaurant
    },
    {
      path:'/menu',
      component: Menu,
    },
    {
     
    path:'/cartedesplats',
    component: CarteDesPlats,
     },
    {
      path:'/commander',
      component:Commande
    }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
