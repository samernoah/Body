<template>

  <Header />

 
  <router-view/>
  
</template>

<script>
import Header from './components/Header.vue'


export default {
  components: { Header }
}

</script>

<style>
#app {
  font-family: Tahoma ,Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #5bd3db;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #7eb0da;
  margin: 0 7px;
}

nav a.router-link-exact-active {
  color: #000000;
  background: rgba(223, 226, 233, 0.637);
  padding: 6px 5px;
  border-radius: 5px;
  
}



</style>
