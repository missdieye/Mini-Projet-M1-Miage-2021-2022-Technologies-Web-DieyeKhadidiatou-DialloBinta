<template>
  <div id="app">
    <section id="container">
      <!--Header-->
      <header class="header">
        <!--Toggle-->
        <div class="toggle">
          <md-icon class="toggleIcon">menu</md-icon>
        </div>

        <!--logo-->
        <a href="./" class="logo"
          ><b>Rest<span>aurant</span></b></a
        >
      </header>

      <!--sidebar-->
      <aside>
        <div id="sidebar" class="nav-collapse">
          <ul class="sidebar-menu" >
            <li class="elt">
              <router-link to="/">
                <md-icon>home</md-icon>
                <span>Home</span></router-link
              >
            </li>
            <li class="elt">
              <router-link to="/">
                <md-icon>info</md-icon>
                <span>Détail d'un Restaurant</span></router-link
              >
            </li>
            <li class="elt">
              <router-link to="/restaurant">
                <md-icon>thumb_up</md-icon>
                <span>HelloWorld</span>
              </router-link>
            </li>
          </ul>
        </div>
      </aside>

      <router-view id="mainContent"></router-view>
    </section>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: -20px;
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

#sidebar {
  width: 210px;
  height: 100%;
  position: fixed;
  background: pink;
}

ul.sidebar-menu {
  margin: -2px 0 0;
  padding: 0;
  margin-top: 75px;
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
  color: #fff;
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
