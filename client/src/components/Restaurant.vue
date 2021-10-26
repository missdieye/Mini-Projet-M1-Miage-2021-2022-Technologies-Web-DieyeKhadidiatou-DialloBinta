<template>
  <div>
    <md-toolbar class="md-large">
      <div class="md-toolbar-row">
        <md-avatar>
        <img src="/vuematerial/assets/logo.png" alt="Avatar">
      </md-avatar>
        <h3 class="md-title">{{restaurant.name}}</h3>
      </div>
    </md-toolbar>
    <h1>Détail du restaurant  </h1>

      <ul>
        <li>Nom: {{restaurant.name}}</li>
        <li>cuisine: {{restaurant.cuisine}}</li>
        <li>Ville: {{restaurant.borough}} </li>
      </ul>
    
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
      restaurant : null
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
</style>
