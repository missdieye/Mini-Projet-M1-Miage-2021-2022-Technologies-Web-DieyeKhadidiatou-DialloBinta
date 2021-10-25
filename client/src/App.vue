<template>
  <div id="app">
    <md-app class="nav" md-mode="fixed">
     <!--Header-->
      <md-app-toolbar class="header">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title"><a href="./" class="logo"
          ><b>DIA<span>DIE</span></b></a
        ></span>
      </md-app-toolbar>
      
     <!--Sidebar-->
      <md-app-drawer :md-active.sync="menuVisible" id="sidebar">
        <md-list class="sidebar-menu">
          <md-list-item class="elt">
            <router-link to="/">
                <md-icon>home</md-icon>
                <span>Home</span></router-link
              >
          </md-list-item>
          <md-list-item class="elt">
            <router-link to="/">
                <md-icon>info</md-icon>
                <span>Détail d'un Restaurant</span></router-link
              >
          </md-list-item>
          <md-list-item class="elt">
            <router-link to="/restaurant">
                <md-icon>thumb_up</md-icon>
                <span>HelloWorld</span>
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
    menuVisible: true
  })
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

/*HEADER*/

.header {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 2000;
  background: pink;
  height: 60px;
  padding: 0 20px;
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

/*TOGGLE*/

.toggle {
  float: left;
  padding-right: 15px;
  margin-top: 20px;
}

.toggle .toggleIcon {
  cursor: pointer;
  display: inline-block;
  font-size: 20px;
}

/*SIDEBAR*/

.nav-collapse.collapse {
  display: inline;
}

.nav {
    display: initial !important;
}

#sidebar {
  width: 210px;
  height: 100%;
  position: fixed;
  background: pink !important;
  margin-top: 60px;

}

ul.sidebar-menu {
  margin: -2px 0 0;
  padding: 0;
  BACKGROUND: pink !important
}

ul.sidebar-menu li a {
  color: red;
  text-decoration: none;
  display: block;
  padding: 15px 0 15px 10px;
  font-size: 12px;
  outline: none;
}

ul.sidebar-menu li span {
  text-decoration: none;
  padding: 15px 0 15px 10px;
  font-size: 12px;
  outline: none;
}

ul.sidebar-menu li a.active,
ul.sidebar-menu li a:hover,
ul.sidebar-menu li a:focus {
  background: lightBlue;
  display: block;
  text-decoration: none;
}


.elt {
  outline: none;
  text-decoration: none;
	margin-top: 25px;
}

/*MAIN*/

#mainContent {
  margin-left: 210px;
  padding-top :60px; ;
}
</style>
