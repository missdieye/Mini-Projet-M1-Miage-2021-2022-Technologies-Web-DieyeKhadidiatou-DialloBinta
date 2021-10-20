<template>
  <div>
    <h1>Détail du restaurant {{restaurant.name}} </h1>
    <p>
      <ul>
        <li>cuisine: {{restaurant.cuisine}}</li>
        <li>Ville: {{restaurant.borough}} </li>
      </ul>
    </p>
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
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
