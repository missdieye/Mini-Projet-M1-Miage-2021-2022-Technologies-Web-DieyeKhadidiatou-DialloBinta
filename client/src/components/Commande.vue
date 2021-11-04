<template>
    <div>
        <div class="viewport">
            <md-toolbar :md-elevation="1">
                <span class="md-title">Carte ou Menu</span>
            </md-toolbar>
            <md-field>
                <label for="type">Vous voulez commander </label>
                <md-select v-model="type" name="type" id="type">
                    <md-option value="carte">A la carte</md-option>
                    <md-option value="midi">Sur le menu de Midi</md-option>
                    <md-option value="gastro">Sur le menu de Gastronomique</md-option>
                </md-select>
            </md-field>

            <div class="carte"  v-if="type=='carte'">
                <md-toolbar :md-elevation="1">
                    <span class="md-title">Carte</span>
                </md-toolbar>
                <div class="list">
                    <md-list >
                    <md-list-item md-expand >
                        <md-toolbar :md-elevation="1">
                        <md-icon>restaurant</md-icon>
                        <span class="md-list-item-text md-title">Hors d'Oeuvres</span>
                        </md-toolbar>
                        <md-list slot="md-expand">
                        <md-list-item class="" v-for="hordOeuvreCDP in this.hordOeuvresCDP" :key="hordOeuvreCDP">
                            <md-card class="md-primary md-card " md-theme="green-card" >
                            <md-card-header>
                                <md-card-media>
                                <img :src="require('../assets/horsOeuvres/' + hordOeuvres[hordOeuvreCDP].src )" alt="Avatar">
                                </md-card-media>

                                <md-card-header-text>
                                    <div class="md-title">{{hordOeuvres[hordOeuvreCDP].nom}}</div>
                                </md-card-header-text>
                            </md-card-header>
                            <md-toolbar class="md-dense">
                                <md-card-expand>
                                <md-card-actions md-alignment="space-between">
                                    <div>
                                        <md-field>
                                            <label for="type">Quantité </label>
                                            <md-input type="number" id="qtit" name="qtit" v-model='qtit' min=1 max=100 />
                                        </md-field>
                                    </div>
                                    
                                    
                                    <div>
                                    <md-button class="md-raised prix" disabled>Prix : {{hordOeuvres[hordOeuvreCDP].prix}} €</md-button>
                                    </div>
                                    <div>
                                        <md-button class="md-raised btCom" @click="addCommande(hordOeuvres[hordOeuvreCDP].nom,hordOeuvres[hordOeuvreCDP].prix,qtit,'carte')">Commander</md-button>
                                    </div>
                                </md-card-actions>
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
                        <md-list-item class="" v-for="dessertCDP  in dessertsCDP" :key="dessertCDP ">
                            <md-card class="md-primary md-card " md-theme="green-card">
                            <md-card-header>
                                <md-card-media>
                                <img :src="require('../assets/desserts/' + desserts[dessertCDP ].src )" alt="Avatar">
                                </md-card-media>
                                <md-card-header-text>
                                    <div class="md-title">{{desserts[dessertCDP ].nom}}</div>
                                </md-card-header-text>

                            </md-card-header>
                            <md-toolbar class="md-dense">
                                <md-card-expand>
                                <md-card-actions md-alignment="space-between">
                                    <div>
                                        <md-field>
                                            <label for="type">Quantité </label>
                                            <md-input type="number" id="qtit" name="qtit" v-model='qtit' min=1 max=100 />
                                        </md-field>
                                    </div>
                                    <div>
                                    <md-button class="md-raised prix" disabled>Prix : {{desserts[dessertCDP ].prix}} €</md-button>
                                    </div>
                                    <div>
                                        <md-button class="md-raised btCom" @click="addCommande(desserts[dessertCDP].nom,desserts[dessertCDP].prix,qtit,'carte')">Commander</md-button>
                                    </div>
                                </md-card-actions>
                                </md-card-expand>
                            </md-toolbar>
                            
                            </md-card>
                        </md-list-item>
                            
                        </md-list>
                    </md-list-item>

                    
                    <md-list-item md-expand >
                        <md-toolbar :md-elevation="1">
                        <md-icon>dinner_dining</md-icon>
                        <span class="md-list-item-text md-title">Plats</span>
                        </md-toolbar>
                        <md-list slot="md-expand">
                        <md-list-item class="" v-for="platCDP in platsCDP" :key="platCDP">
                            <md-card class="md-primary md-card " md-theme="green-card">
                            <md-card-header>
                                <md-card-media>
                                <img :src="require('../assets/plats/' + plats[platCDP].src )" alt="Avatar">
                                </md-card-media>

                                <md-card-header-text>
                                    <div class="md-title">{{plats[platCDP].nom}}</div>
                                </md-card-header-text>

                            </md-card-header>
                            <md-toolbar class="md-dense">
                                <md-card-expand>
                                <md-card-actions md-alignment="space-between">
                                    <div>
                                        <md-field>
                                            <label for="type">Quantité </label>
                                            <md-input type="number" id="qtit" name="qtit" v-model='qtit' min=1 max=100 />
                                        </md-field>
                                    </div>
                                    <div>
                                    <md-button class="md-raised prix" disabled>Prix : {{plats[platCDP].prix}} €</md-button>
                                    </div>
                                    <div>
                                        <md-button class="md-raised btCom" @click="addCommande(plats[platCDP].nom,plats[platCDP].prix,qtit,'carte')">Commander</md-button>
                                    </div>
                                </md-card-actions>
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
                        <md-list-item class="" v-for="boissonCDP in boissonsCDP" :key="boissonCDP">
                            <md-card class="md-primary md-card " md-theme="green-card">
                            <md-card-header>
                                <md-card-media>
                                <img :src="require('../assets/boissons/' + boissons[boissonCDP].src )" alt="Avatar">
                                </md-card-media>

                                <md-card-header-text>
                                    <div class="md-title">{{boissons[boissonCDP].nom}}</div>
                                </md-card-header-text>

                            </md-card-header>
                            <md-toolbar class="md-dense">
                                <md-card-expand>
                                <md-card-actions md-alignment="space-between">
                                    <div>
                                        <md-field>
                                            <label for="type">Quantité </label>
                                            <md-input type="number" id="qtit" name="qtit" v-model='qtit' min=1 max=100 />
                                        </md-field>
                                    </div>
                                    <div>
                                    <md-button class="md-raised prix" disabled>Prix : {{boissons[boissonCDP].prix}} €</md-button>
                                    </div>
                                    <div>
                                        <md-button class="md-raised btCom" @click="addCommande(boissons[boissonCDP].nom,boissons[boissonCDP].prix,qtit,'carte')">Commander</md-button>
                                    </div>
                                </md-card-actions>

                                </md-card-expand>
                            </md-toolbar>
                            
                            </md-card>
                        </md-list-item>
                            
                        </md-list>
                    </md-list-item>


                    </md-list>
                </div>
            </div>

            <div class="midi"  v-if="type=='midi'">
                <md-toolbar :md-elevation="1">
                    <span class="md-title">Menu Midi à <b>{{this.prixMenuMidi}} €</b> </span>
                </md-toolbar>
                <md-toolbar :md-elevation="0">
                    <b > <i> Choisissez un Hors d'Oeuvre, un plat, un dessert et un boisson de votre choix.</i></b>
                </md-toolbar>
                <div class="list">
                    <md-list >
                        <md-steppers :md-active-step.sync="active" md-vertical md-linear>
                            <md-step id="first" md-label="Hors d'Oeuvres" :md-done.sync="first" :md-editable="false">
                                <md-list-item >
                                    <md-list>
                                    <md-list-item class="itemsCom" v-for="hordOeuvreMidi in this.hordOeuvresMidi" :key="hordOeuvreMidi">
                                        <md-card class="md-primary md-card " md-theme="green-card">
                                        <md-card-header>
                                            <md-card-media>
                                            <img :src="require('../assets/horsOeuvres/' + hordOeuvres[hordOeuvreMidi].src )" alt="Avatar">
                                            </md-card-media>

                                            <md-card-header-text>
                                            <div class="md-title">{{hordOeuvres[hordOeuvreMidi].nom}}</div>
                                            </md-card-header-text>
                                        </md-card-header>

                                        <md-toolbar class="md-dense">
                                                <md-card-expand>
                                                <md-card-actions md-alignment="space-between">
                                                    <div>
                                                        <md-button class="md-raised btCom" @click="getCommandeMidi(hordOeuvres[hordOeuvreMidi].nom,'horsOeuvres/' + hordOeuvres[hordOeuvreMidi].src),setDone('first', 'second')">Commander</md-button>
                                                    </div>
                                                </md-card-actions>
                                                </md-card-expand>
                                        </md-toolbar>
                                        
                                        </md-card>
                                    </md-list-item>
                                        
                                    </md-list>
                                </md-list-item>
                            </md-step>
                            <md-step id="second" md-label="Plats" :md-editable="false" :md-done.sync="second">
                                <md-list-item >
                                    <md-list >
                                    <md-list-item class="itemsCom" v-for="platMidi in this.platsMidi" :key="platMidi">
                                        <md-card class="md-primary md-card " md-theme="green-card">
                                        <md-card-header>
                                            <md-card-media>
                                            <img :src="require('../assets/plats/' + plats[platMidi].src )" alt="Avatar">
                                            </md-card-media>

                                            <md-card-header-text>
                                            <div class="md-title">{{plats[platMidi].nom}}</div>
                                            </md-card-header-text>
                                        </md-card-header>
                                        <md-toolbar class="md-dense">
                                                <md-card-expand>
                                                <md-card-actions md-alignment="space-between">
                                                    <div>
                                                        <md-button class="md-raised btCom" @click="getCommandeMidi(plats[platMidi].nom,'plats/' +plats[platMidi].src),setDone('second', 'third')">Commander</md-button>
                                                    </div>
                                                </md-card-actions>
                                                </md-card-expand>
                                            </md-toolbar>
                                        
                                        </md-card>
                                    </md-list-item>
                                        
                                    </md-list>
                                </md-list-item>
                            </md-step>
                            <md-step id="third" md-label="Desserts" :md-editable="false" :md-done.sync="third">
                                <md-list-item >
                                    <md-list>
                                    <md-list-item class="itemsCom" v-for="dessertMidi in this.dessertsMidi" :key="dessertMidi">
                                        <md-card class="md-primary md-card " md-theme="green-card">
                                        <md-card-header>
                                            <md-card-media>
                                            <img :src="require('../assets/desserts/' + desserts[dessertMidi].src )" alt="Avatar">
                                            </md-card-media>

                                            <md-card-header-text>
                                            <div class="md-title">{{desserts[dessertMidi].nom}}</div>
                                            </md-card-header-text>
                                        </md-card-header>
                                        <md-toolbar class="md-dense">
                                                <md-card-expand>
                                                <md-card-actions md-alignment="space-between">
                                                    <div>
                                                        <md-button class="md-raised btCom" @click="getCommandeMidi(desserts[dessertMidi].nom,'desserts/' +desserts[dessertMidi].src),setDone('third','fourth' )">Commander</md-button>
                                                    </div>
                                                </md-card-actions>
                                                </md-card-expand>
                                            </md-toolbar>
                                        
                                        </md-card>
                                    </md-list-item>
                                        
                                    </md-list>
                                </md-list-item>
                            </md-step> 
                            <md-step id="fourth" md-label="Boissons" :md-editable="false" :md-done.sync="fourth">
                                <md-list-item >
                                    <md-list >
                                    <md-list-item class="itemsCom" v-for="boissonMidi in this.boissonsMidi" :key="boissonMidi">
                                        <md-card class="md-primary md-card " md-theme="green-card">
                                        <md-card-header>
                                            <md-card-media>
                                            <img :src="require('../assets/boissons/' + boissons[boissonMidi].src )" alt="Avatar">
                                            </md-card-media>

                                            <md-card-header-text>
                                            <div class="md-title">{{boissons[boissonMidi].nom}}</div>
                                            </md-card-header-text>
                                        </md-card-header>
                                        <md-toolbar class="md-dense">
                                                <md-card-expand>
                                                <md-card-actions md-alignment="space-between">
                                                    <div>
                                                        <md-button class="md-raised btCom" @click="getCommandeMidi(boissons[boissonMidi].nom,'boissons/' +boissons[boissonMidi].src) , setDone('fourth','first' ) , activeRecap = true">Commander</md-button>
                                                    </div>
                                                </md-card-actions>
                                                </md-card-expand>
                                            </md-toolbar>
                                        </md-card>
                                    </md-list-item>
                                        
                                    </md-list>
                                </md-list-item> 
                            </md-step>
                        </md-steppers>
                    </md-list>
                </div>
                <md-dialog :md-active.sync="activeRecap">
                    <md-dialog-title>Récapitulatif de votre Commande <br> du Menu de Midi</md-dialog-title>
                     <md-list class="md-triple-line md-dense">
                        <md-list-item  v-for="commandeMidi in this.commandesMidi" :key="commandeMidi">
                            <md-avatar>
                            <img :src="require('../assets/' + commandeMidi.src )" alt="Image Commande">
                            </md-avatar>

                            <div class=" nomCom">
                            <span>{{commandeMidi.designation}}</span>
                            </div>
                        </md-list-item>

                        <md-divider class="md-inset"></md-divider>

                    </md-list>
                    <md-dialog-actions>
                        <md-button class="md-primary" @click="annuler()">Annuler</md-button>
                        <md-button class="md-primary" @click="confirmer(commandesMidi), activeRecap = false">Confirmer</md-button>
                    </md-dialog-actions>
                </md-dialog>
            </div>

            <div class="gastro"  v-if="type=='gastro'">
                <md-toolbar :md-elevation="1">
                    <span class="md-title">Menu Gastronomique à <b>{{this.prixMenuGastro}} €</b></span>
                </md-toolbar>
                <md-toolbar :md-elevation="0">
                    <b > <i> Choisissez un Hors d'Oeuvre, un plat, un dessert et un boisson de votre choix.</i></b>
                </md-toolbar>
                <div class="list">
                    <md-list >
                        <md-steppers :md-active-step.sync="activeGastro" md-vertical md-linear>
                            <md-step id="firstGastro" md-label="Hors d'Oeuvres" :md-done.sync="firstGastro" :md-editable="false">
                                <md-list-item >
                                    <md-list>
                                    <md-list-item class="itemsCom" v-for="hordOeuvreGastro in this.hordOeuvresGastrono" :key="hordOeuvreGastro">
                                        <md-card class="md-primary md-card " md-theme="green-card">
                                        <md-card-header>
                                            <md-card-media>
                                            <img :src="require('../assets/gastro/horsoeuvres/' + hordOeuvresGastro[hordOeuvreGastro].src )" alt="Avatar">
                                            </md-card-media>

                                            <md-card-header-text>
                                            <div class="md-title">{{hordOeuvresGastro[hordOeuvreGastro].nom}}</div>
                                            </md-card-header-text>
                                        </md-card-header>

                                        <md-toolbar class="md-dense">
                                                <md-card-expand>
                                                <md-card-actions md-alignment="space-between">
                                                    <div>
                                                        <md-button class="md-raised btCom" @click="getCommandeGastro(hordOeuvresGastro[hordOeuvreGastro].nom,'horsoeuvres/' + hordOeuvresGastro[hordOeuvreGastro].src),setDoneGastro('firstGastro', 'secondGastro')">Commander</md-button>
                                                    </div>
                                                </md-card-actions>
                                                </md-card-expand>
                                        </md-toolbar>
                                        
                                        </md-card>
                                    </md-list-item>
                                        
                                    </md-list>
                                </md-list-item>
                            </md-step>
                            <md-step id="secondGastro" md-label="Plats" :md-editable="false" :md-done.sync="secondGastro">
                                <md-list-item >
                                    <md-list >
                                    <md-list-item class="itemsCom" v-for="platGastro in this.platsGastrono" :key="platGastro">
                                        <md-card class="md-primary md-card " md-theme="green-card">
                                        <md-card-header>
                                            <md-card-media>
                                            <img :src="require('../assets/gastro/plats/' + platsGastro[platGastro].src )" alt="Avatar">
                                            </md-card-media>

                                            <md-card-header-text>
                                            <div class="md-title">{{platsGastro[platGastro].nom}}</div>
                                            </md-card-header-text>
                                        </md-card-header>
                                        <md-toolbar class="md-dense">
                                                <md-card-expand>
                                                <md-card-actions md-alignment="space-between">
                                                    <div>
                                                        <md-button class="md-raised btCom" @click="getCommandeGastro(platsGastro[platGastro].nom,'plats/' +platsGastro[platGastro].src),setDoneGastro('secondGastro', 'thirdGastro')">Commander</md-button>
                                                    </div>
                                                </md-card-actions>
                                                </md-card-expand>
                                            </md-toolbar>
                                        
                                        </md-card>
                                    </md-list-item>
                                        
                                    </md-list>
                                </md-list-item>
                            </md-step>
                            <md-step id="thirdGastro" md-label="Desserts" :md-editable="false" :md-done.sync="thirdGastro">
                                <md-list-item >
                                    <md-list>
                                    <md-list-item class="itemsCom" v-for="dessertGastro in this.dessertsGastrono" :key="dessertGastro">
                                        <md-card class="md-primary md-card " md-theme="green-card">
                                        <md-card-header>
                                            <md-card-media>
                                            <img :src="require('../assets/gastro/dessert/' + dessertsGastro[dessertGastro].src )" alt="Avatar">
                                            </md-card-media>

                                            <md-card-header-text>
                                            <div class="md-title">{{dessertsGastro[dessertGastro].nom}}</div>
                                            </md-card-header-text>
                                        </md-card-header>
                                        <md-toolbar class="md-dense">
                                                <md-card-expand>
                                                <md-card-actions md-alignment="space-between">
                                                    <div>
                                                        <md-button class="md-raised btCom" @click="getCommandeGastro(dessertsGastro[dessertGastro].nom,'dessert/' +dessertsGastro[dessertGastro].src),setDoneGastro('thirdGastro','firstGastro' ) , activeRecapGastro = true">Commander</md-button>
                                                    </div>
                                                </md-card-actions>
                                                </md-card-expand>
                                            </md-toolbar>
                                        
                                        </md-card>
                                    </md-list-item>
                                        
                                    </md-list>
                                </md-list-item>
                            </md-step> 
                        </md-steppers>
                    </md-list>
                </div>
                
                <md-dialog :md-active.sync="activeRecapGastro">
                    <md-dialog-title>Récapitulatif de votre Commande <br> du Menu Gastronomique</md-dialog-title>
                     <md-list class="md-triple-line md-dense">
                        <md-list-item  v-for="commandeGastro in this.commandesGastro" :key="commandeGastro">
                            <md-avatar>
                            <img :src="require('../assets/gastro/' + commandeGastro.src )" alt="Image Commande">
                            </md-avatar>

                            <div class=" nomCom">
                            <span>{{commandeGastro.designation}}</span>
                            </div>
                        </md-list-item>

                        <md-divider class="md-inset"></md-divider>

                    </md-list>
                    <md-dialog-actions>
                        <md-button class="md-primary" @click="annulerGastro()">Annuler</md-button>
                        <md-button class="md-primary" @click="confirmer(commandesGastro), activeRecapGastro = false">Confirmer</md-button>
                    </md-dialog-actions>
                </md-dialog>
            </div>


        </div>

        <div class="viewport commande">
        <md-toolbar :md-elevation="1">
            <span class="md-title">Commandes</span>
        </md-toolbar>
        <md-table>
        <md-table-row>
            <md-table-head>Des</md-table-head>
            <md-table-head md-numeric>Qtit</md-table-head>
            <md-table-head md-numeric>Prix</md-table-head>
        </md-table-row>
        </md-table>
        <div v-for="(commande) in this.commandes" :key="commande">
        
            <div v-if="commande.type=='carte'" >
                <md-list slot="md-expand">
                    <md-list-item class="tabCom">
                        <md-table>
                            <md-table-row>
                                <md-table-cell >{{commande.designation}}</md-table-cell>
                                <md-table-cell md-numeric>{{commande.quantite}}</md-table-cell>
                                <md-table-cell md-numeric>{{commande.prix}}</md-table-cell>
                            </md-table-row>
                        </md-table>
                    </md-list-item>
                </md-list>
            </div>
            
            <div v-if="commande.type=='menumidi'">
                <md-list slot="md-expand">
                    <md-list-item class="tabCom">
                        <md-table>
                            <md-table-row>
                                <md-table-cell >{{commande.designation}}</md-table-cell>
                                <md-table-cell md-numeric></md-table-cell>
                                <md-table-cell md-numeric>Menu de midi</md-table-cell>
                            </md-table-row>
                        </md-table>
                    </md-list-item>
                </md-list>
            </div>

            <div v-if="commande.type=='menuGastro'">
                <md-list slot="md-expand">
                    <md-list-item  class="tabCom">
                        <md-table>
                            <md-table-row>
                                <md-table-cell >{{commande.designation}}</md-table-cell>
                                <md-table-cell md-numeric></md-table-cell>
                                <md-table-cell md-numeric>Gastro</md-table-cell>
                            </md-table-row>
                        </md-table>
                    </md-list-item>
                </md-list>
            </div>

        </div>
        <md-toolbar :md-elevation="1">
            <md-button class="md-raised prix" disabled>Prix Total : {{this.getPrixCommande(commandes)}} €</md-button>
        </md-toolbar>
        </div>
    </div>
</template>

<script>

import CarteDesPlats from "./CarteDesPlats.vue";
import Menu from "./Menu.vue";
export default {
  name:"Commande",

  data () {
    return {
        type: 'carte',
        hordOeuvresCDP: [],
        platsCDP :[],
        dessertsCDP :[],
        boissonsCDP :[],
        commandes : [],
        commandesMidi : [],
        commandesGastro : [],
        qtit : 1,
        hordOeuvresMidi : [],
        platsMidi :[],
        dessertsMidi : [],
        boissonsMidi : [],
        hordOeuvresGastrono : [],
        platsGastrono :[],
        dessertsGastrono : [],
        active: 'first',
        activeGastro: 'firstGastro',
        first: false,
        second: false,
        third: false,
        fourth : false,
        activeRecap :false,
        activeRecapGastro :false,
        toolbarCom : true
    }
  },
  mounted() {
    //Menu
    this.hordOeuvres= CarteDesPlats.data().hordOeuvres;
    this.plats= CarteDesPlats.data().plats;
    this.desserts= CarteDesPlats.data().desserts;
    this.boissons= CarteDesPlats.data().boissons;
    this.hordOeuvresGastro= CarteDesPlats.data().hordOeuvresGastro;
    this.platsGastro= CarteDesPlats.data().platsGastro;
    this.dessertsGastro= CarteDesPlats.data().dessertsGastro;
    CarteDesPlats.methods.getCartedesPlats(0,this.hordOeuvres.length,this.hordOeuvresCDP)
    CarteDesPlats.methods.getCartedesPlats(0,this.plats.length,this.platsCDP);
    CarteDesPlats.methods.getCartedesPlats(0,this.desserts.length,this.dessertsCDP)
    CarteDesPlats.methods.getCartedesPlats(0,this.boissons.length,this.boissonsCDP)

    console.log('test',this.hordOeuvresGastro,this.platsGastrono)

    //Appel des Fonctions pour obtenir aléatoirement des menus de midi et leur prix
    this.prixHO = Menu.methods.getmenuDemidi(0,this.hordOeuvres.length,this.hordOeuvresMidi,this.hordOeuvres)/3;
    this.prixPlats = Menu.methods.getmenuDemidi(0,this.plats.length,this.platsMidi,this.plats)/3;
    this.prixD = Menu.methods.getmenuDemidi(0,this.desserts.length,this.dessertsMidi,this.desserts)/3;
    this.prixB=Menu.methods.getmenuDemidi(0,this.boissons.length,this.boissonsMidi,this.boissons)/3;

    //Calcul du prix total du menu sans le pourcentage de réduction
    this.prixMenuMidi=this.prixHO+this.prixPlats+this.prixD+this.prixD;
    this.prixMenuMidi=Math.round(this.getPrixMidi(this.prixMenuMidi)*10)/10;

    //Appel des Fonctions pour obtenir aléatoirement des menus Gastronomique et leur prix
    this.prixHOG = Menu.methods.getMenuGastronomique(0,this.hordOeuvresGastro.length,this.hordOeuvresGastrono,this.hordOeuvresGastro)/2;
    this.prixPlatsG = Menu.methods.getMenuGastronomique(0,this.platsGastro.length,this.platsGastrono,this.platsGastro)/2;
    this.prixDG = Menu.methods.getMenuGastronomique(0,this.dessertsGastro.length,this.dessertsGastrono,this.dessertsGastro)/2;

    //Calcul du prix total du menu gastronomique
    this.prixMenuGastro=this.prixHOG+this.prixPlatsG+this.prixDG;
    this.prixMenuGastro=Math.round(this.prixMenuGastro*10)/10;

    console.log('jhghjkjhghj,',this.prixMenuGastro,this.prixHOG,this.prixPlatsG,this.prixDG)
    
  },
  methods :{
      addCommande(des,price,qtite,type){
          this.commandes.push({designation :des,prix :qtite*price,quantite:qtite,type : type });
          console.log(this.commandes)
      },

      getPrixCommande(commandes){
          var prixCommande=0;
          var qtit=0;
          for (let index = 0; index < commandes.length; index++) {
              if (commandes[index].type==='carte') {
                prixCommande=prixCommande+commandes[index].prix;
              }
          }
          if (this.commandesMidi.length>=4) {
              qtit=this.commandesMidi.length/4
              prixCommande=prixCommande+this.prixMenuMidi*qtit;
          }
          
          if (this.commandesGastro.length>=3) {
              qtit=this.commandesGastro.length/3;
              prixCommande=prixCommande+this.prixMenuGastro*qtit;
          }
          return prixCommande;

      },
      getCommandeMidi(des,img){
          this.commandesMidi.push({designation :des,src: img ,type : 'menumidi'});
          console.log(this.commandesMidi)
      },
      getCommandeGastro(des,img){
          this.commandesGastro.push({designation :des,src: img ,type : 'menuGastro'});
          console.log(this.commandesGastro)
      },
      getPrixMidi(x){
      x= x - x*0.2;
      return x
    },
    setDone (id, index) {
        this[id] = true;

        if (index) {
          this.active = index;
        }
    },
    setDoneGastro (id, index) {
        this[id] = true;

        if (index) {
          this.activeGastro = index;
        }
    },
    annuler(){
        this.type= 'carte';
        this.commandesMidi=[];
        this.activeRecap =false
        console.log(this.commandesMidi)
    },
    confirmer(tab){
        for (let index = 0; index < tab.length; index++) {
            this.commandes.push(tab[index]);
            
        }
          console.log('fgh,nb',this.commandes)
    },
    annulerGastro(){
        this.type= 'carte';
        this.commandesGastro=[];
        this.activeRecapGastro =false
        console.log(this.commandesGastro)
    },
  }
}
 
</script>

<style scoped>
  .viewport {
    width: 550px;
    max-width: 100%;
    display: inline-block;
    vertical-align: top;
    overflow: auto;
    border: 1px solid gray;
  }

  .viewport.commande {
    width: 450px;
    float: right;
    margin-right: 0px;
    }

    button.md-button.md-raised.btCom.md-theme-green-card {
    margin-left: 50px;
    background: green;
    color: white;
    }

    .md-checkbox {
    display: flex;
    }

    .md-card {
    width: 450px;
    display: inline-block;
    vertical-align: top;
    padding: auto;
  }

  button.md-button.md-raised.prix{
    background: pink;
    color: black;
    margin-left: 20px;
 }

 .md-steppers.md-vertical.md-stepper-content {
    padding-left: 0 2px 0 60px !important;
}

.md-list {
    width: 550px;
    max-width: 100%;
    display: inline-block;
    vertical-align: top;
    border: 1px solid rgba(#000, .12);
  }

  .nomCom {
    font-size: 18px;
    font-weight: bold;
}

.itemsCom {
    width: 450px;
    padding-left: 0px !important;
}

.md-toolbar.toolbarCom {
    width: 300px;
}
</style>