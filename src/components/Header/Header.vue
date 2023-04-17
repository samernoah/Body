<template>
  <header class="Header">
    <HeaderMobileMenu />
    <h2>Body</h2>
    <nav class="HeaderNav" ref="HM">
      <router-link to="/">Home</router-link>
      <router-link to="/body">Body</router-link>
      <router-link to="/courses">Courses</router-link>
      <router-link to="/thequestionsbank">The Quetions Bank</router-link>
      <router-link to="/ComponentTest">CT</router-link>
      <router-link :to="{ name: 'about' }">About</router-link>
    </nav>
    <hr ref="Headerhr" />
  </header>
</template>

<script >
import HeaderMobileMenu from "./HeaderMobileMenu.vue";
export default {
  components: { HeaderMobileMenu },
  updated() {
    console.log("HeaderUpdated");
  },
  mounted() {
    console.log(this.$refs.HM);
    this.$store.state.Components.Header.HeaderMenu = this.$refs.HM;
    if (window.location.pathname === "/thequestionsbank") {
      this.$refs.HM.querySelector(
        "a.router-link-exact-active"
      ).style.background =
        "-webkit-linear-gradient(top left,rgb(112 77 24 / 50%),rgb(187 163 38 / 50%),rgb(112 83 17 / 50%))";

      this.$refs.HM.querySelector("a.router-link-exact-active").style.border =
        "1px #60482140 solid";
      this.$refs.Headerhr.style.border = "1px rgb(201 122 0 / 39%) solid";
    } 
    else {
      this.$refs.HM.querySelector(
        "a.router-link-exact-active"
      ).style.background =
        "-webkit-linear-gradient(top left,rgb(24 112 104 / 38%),rgb(38 187 187 / 38%),rgb(17 108 112 / 38%))";
      this.$refs.HM.querySelector("a.router-link-exact-active").style.border =
        "1px #197a6930 solid";
    }
  },
  computed: {
    blueglasseffect() {},
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
  width: 80%;
  margin: 0 59px 0 auto;
}

.Header nav a {
  text-decoration: none;
}

.Header hr {
  width: 70%;
  border: 1px rgb(17 108 112 / 39%) solid;
  transform: translate(0, 10px);
  box-shadow: 0 2px 7px #03164e;
}
.HeaderNav {
  position: relative;
  z-index: 100;
  transition: all 0.5s ease-in;
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
    transform: translate(0, 12px);
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
    width: 100%;
    text-align: center;
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
    transform: translateX(-110%);
    opacity: 0;
    top: 0;
    left: 0;
    width: 98%;
    height: 100vh;
    backdrop-filter: blur(12px);
  }
  .Headertransition {
    transition: all 0.5s ease-in-out;
  }
  .HeaderNavActive {
    transform: translateX(0);
    opacity: 1;
    z-index: 100;
  }

  .Header hr {
    width: 90%;
  }
  .HeaderNav a {
    position: relative;
    font-size: 1rem;
    text-align: left;
    display: block;
    margin: 5px auto;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 84%;
    border-radius: 5px;
    z-index: 10;
  }

  .Header nav {
    padding: 0px;
  }
}
</style>