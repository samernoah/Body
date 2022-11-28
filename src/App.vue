<template>
  <router-view />
</template>

<script>
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";

export default {
  components: { Header, Footer },

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
    // window.Store = this.$store;
    window.Intervals = {
      SimulationInterval: null,
      QueInterval: null,
      StoreQueInterval: null,
    };
  },
};
</script>

<style>
#app {
  height: 100%;
  font-family: Tahoma, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #5bd3db;
  height: inherit;
  display: flex;
  flex-direction: column;
  background: rgb(16, 18, 20);
  border-radius: 15px;
  overflow: auto;
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
