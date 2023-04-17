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
  width: 100%;
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
  /* background: -webkit-linear-gradient(
    top left,
    rgb(24 112 104 / 37%),
    rgb(38 187 187 / 50%),
    rgb(17 108 112 / 39%)
  );
  border: 1px #197a6952 solid; */
  border-radius: 0px;
}

@media screen and (min-width: 481px) {
  nav a.router-link-exact-active {
    padding: 6px 15px;
  }
}

@media screen and (max-width: 480px) {
  nav a {
    color: #ffffff;
    margin: 0 auto;
  }
  nav a.router-link-exact-active {
    color: #ffffff;
    border-radius: 0px;
    padding: 6px 7.5%;
    width: 84%;
  }
}
</style>
