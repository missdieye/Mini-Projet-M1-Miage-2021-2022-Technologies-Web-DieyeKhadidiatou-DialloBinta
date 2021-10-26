<template>
  <div id="app">
    <md-app class="nav">
     <!--Header-->

      <md-app-toolbar md-elevation="0">
        <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">
          <a href="./" class="logo"><b>DIA<span>DIE</span></b></a
        ></span>
      </md-app-toolbar>
      
     <!--Sidebar-->

      <md-app-drawer :md-active.sync="menuVisible" md-persistent="mini" class="sidebar">
        <md-toolbar class="md-transparent" md-elevation="0">
          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <md-list class="listeMenu">
          <md-list-item >
            <router-link to="/">
              <md-icon>home</md-icon>
              <span class="md-list-item-text">Home</span>
            </router-link>
          </md-list-item>
          <md-list-item >
            <router-link to="/">
              <md-icon>info</md-icon>
              <span class="md-list-item-text">Détail d'un Restaurant</span>
            </router-link>
          </md-list-item>
          <md-list-item >
            <router-link to="/restaurant">
              <md-icon>thumb_up</md-icon>
              <span class="md-list-item-text">HelloWorld</span> 
            </router-link>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view id="mainContent"></router-view>
       </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    menuVisible: false
  }),
    methods: {
      toggleMenu () {
        this.menuVisible = !this.menuVisible
      }
    }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

.md-app {
    min-height: 350px;
    border: 1px solid rgba(#000, .12);
  }



/*LOGO*/
a.logo {
  font-size: 24px;
  float: left;
  margin-top: 15px;
  text-transform: uppercase;
}

a.logo b {
  font-weight: 900;
}

a.logo span {
  color: lightBlue;
}
a.logo b {
  color: pink;
}

/*SIDEBAR*/
.sidebar a {
    display: contents;
} 

.listeMenu .md-list-item.active,
.listeMenu .md-list-item :hover,
.listeMenu .md-list-item :focus {
  background-color: pink !important;
  text-decoration: none !important;
}

.sidebar span {
  padding: 20px 15px 15px 20px;
  font-size: 15px;
  margin-left: 10px;
  color: lightblue;
}


.md-drawer.md-app-drawer.sidebar {
    width: 250px
;
}
</style>
