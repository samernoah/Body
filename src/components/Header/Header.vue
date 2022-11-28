<template>
  <HeaderMobileMenu />
  <header class="Header">
    <h2>Body</h2>
    <nav class="HeaderNav" ref="HM">
      <router-link to="/">Home</router-link>
      <router-link to="/body">Body</router-link>
      <router-link to="/courses">Courses</router-link>
      <router-link to="/ComponentTest">CT</router-link>
      <router-link :to="{ name: 'about' }">About</router-link>
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
};
</script>


<style >
header {
  position: relative;
  z-index: 8;
}

.Header h2 {
  color: rgb(83, 147, 182);
  font-size: 4rem;
  cursor: pointer;
}
.Header nav {
  margin-top: 17px;
}
.Header nav a {
  text-decoration: none;
}
.Header hr {
  width: 70%;
}
.HeaderNav {
  position: relative;
  z-index: 100;
}
@media screen and (min-width: 582px) {
  .Header h2 {
    position: absolute;
    top: -40px;
    left: 9%;
  }
  .Header nav {
    padding-right: 80px;
    text-align: right;
  }
  .Header hr {
    margin-top: 7px;
  }
}
@media screen and (max-width: 580px) and (min-width: 481px) {
  .Header h2 {
    position: relative;
    margin: 25px auto 2px auto;
  }
  .Header nav {
    position: relative;
    margin: 7px auto 1px auto;
  }
  .Header hr {
    margin-top: 7px;
  }
}
@media screen and (max-width: 480px) {
  .Header {
    width: 100%;
  }

  .Header h2 {
    position: relative;
    margin: 0 auto;
    padding-top: 25px;
  }

  .HeaderNav {
    position: absolute;
    transform: translateY(-270px);
    opacity: 0;
    border-radius: 10px;
    top: 0;
    left: 0;
    width: 87%;
    background-color: rgba(0, 0, 0, 0.98);
    z-index: 100;
  }
  .Headertransition {
    transition: all 0.2s ease-in;
  }
  .HeaderNavActive {
    transform: translateY(-17px);
    opacity: 1;
    z-index: 100;
  }

  .Header hr {
    width: 90%;
  }
  .HeaderNav a {
    position: relative;
    font-size: 1.5rem;
    display: block;
    padding: 10px;
    margin: 2px -31px;
    width: 110%;
    border-radius: 5px;
    z-index: 10;
  }
}
</style>