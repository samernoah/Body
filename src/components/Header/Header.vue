<template>
  <header class="Header">
    <HeaderMobileMenu />
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
.Header {
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
  display: block;
  padding: 30px;
}

.Header nav a {
  text-decoration: none;
}

.Header hr {
  width: 70%;
  border: 1px rgb(17 108 112 / 39%) solid;
}
.HeaderNav {
  position: relative;
  z-index: 100;
}
@media screen and (min-width: 581px) {
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
    margin-top: 18px;
  }
}
@media screen and (max-width: 580px) and (min-width: 481px) {
  .Header h2 {
    position: relative;
    margin: 25px auto 2px auto;
  }
  .Header nav {
    position: relative;
    margin: 18px auto 1px auto;
    padding: 0px;
  }
  .Header hr {
    margin-top: 18px;
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
    transform: translateY(-270px) translateX(-50%);
    opacity: 0;
    border-radius: 10px;
    top: 0;
    left: 50%;
    width: 98%;
    background: -webkit-linear-gradient(
      top left,
      rgb(3 34 31 / 98%),
      rgb(1 12 12 / 98%),
      rgb(1 17 18 / 98%)
    );
    border: 1px #2c363430 solid;
    z-index: 100;
  }
  .Headertransition {
    transition: all 0.2s ease-in;
  }
  .HeaderNavActive {
    transform: translateY(-17px) translateX(-50%);
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
    margin: 5px auto;
    padding: 10px 0px;
    width: 100%;
    border-radius: 5px;
    z-index: 10;
  }
  .Header nav {
    padding: 0px;
  }
}
</style>