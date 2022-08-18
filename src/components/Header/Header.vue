<template>
  <HeaderMobileMenu />
  <header class="Header">
    <h2 @click.self="log">Body</h2>
    <nav class="HeaderNav" ref="HM">
      <router-link to="/">Home</router-link>
      <router-link to="/body">Body</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <hr />
  </header>
</template>

<script>
import HeaderMobileMenu from "./HeaderMobileMenu.vue";
export default {
  mounted() {
    this.$store.state.Components.Header.HeaderMenue = this.$refs.HM;
  },
  components: { HeaderMobileMenu },
  updated() {
    console.log("HeaderUpdated");
  },
  methods: {
    log() {
      console.log("hello");
    },
  },
};
</script>



<style >
.Header h2 {
  color: rgb(83, 147, 182);
  font-size: 4rem;
}
.Header nav a {
  text-decoration: none;
}
.Header hr {
  width: 70%;
}
@media screen and (min-width: 481px) {
  .Header h2 {
    position: absolute;
    top: -3%;
    left: 10%;
  }
  .Header nav {
    padding-right: 80px;
    text-align: right;
  }
}

@media screen and (max-width: 480px) {
  .Header {
    margin: 0 auto;
  }

  .Header h2 {
    position: relative;
    margin: 0 auto;
    padding-top: 25px;
  }

  .HeaderNav {
    display: block;
    transform: translateY(-136px);
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 87%;
    height: 136px;
    background-color: black;
    z-index: 2;
    transition: all 0.15s ease-in;
  }

  .HeaderNavActive {
    transform: translateY(0);
    opacity: 1;
  }

  .Header hr {
    width: 50%;
  }
  .HeaderNav a {
    font-size: 1.5rem;
    display: block;
    padding: 10px;
    margin: 2px -31px;
    width: 110%;
    border-radius: 5px;
  }
}
</style>