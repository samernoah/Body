<template>
  <Header />

  <router-view />
</template>

<script>
import Header from "./components/Header/Header.vue";

export default {
  components: { Header },

  created() {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 480) {
        this.$store.commit("ChangeTheMobileView", true);
      } else if (window.innerWidth > 480) {
        this.$store.commit("ChangeTheMobileView", false);
      }
    });
    if (window.innerWidth <= 480) {
      this.$store.commit("ChangeTheMobileView", true);
    } else if (window.innerWidth > 480) {
      this.$store.commit("ChangeTheMobileView", false);
    }
  },
};
</script>

<style>
#app {
  font-family: Tahoma, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #5bd3db;
}

nav {
  padding: 30px;
}

nav a {
  color: #ffffff;
  margin: 0 7px;
}

nav a.router-link-exact-active {
  color: #ffffff;
  background: rgba(63, 124, 191, 0.637);
  padding: 6px 5px;
  border-radius: 5px;
}
@media screen and (max-width: 480px) {
  nav a {
    color: #ffffff;
    margin: 0;
  }
  nav a.router-link-exact-active {
    color: #ffffff;
    background: rgba(84, 132, 184, 0.637);
    padding: 10px;
    border-radius: 5px;
    width: 110%;
  }
}
</style>
