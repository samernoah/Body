<template>
  <header class="CoursesHeader">
    <HeaderMobileMenu />
    <h2>Body</h2>
    <nav class="CoursesHeaderNav" ref="CHM">
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
    this.$store.state.Components.Header.HeaderMenue = this.$refs.CHM;
  },
  components: { HeaderMobileMenu },
  updated() {
    console.log("HeaderUpdated");
  },
};
</script>


<style >
.CoursesHeader {
  position: relative;
  z-index: 8;
}

.CoursesHeader h2 {
  color: rgb(83, 147, 182);
  font-size: 2rem;
  cursor: pointer;
}
.CoursesHeader nav {
  margin-top: 17px;
  display: block;
  padding: 0px;
}

.CoursesHeader nav a {
  text-decoration: none;
  font-size: 0.9rem;
}

.CoursesHeader hr {
  width: 100%;
  border: 1px rgb(17 108 112 / 39%) solid;
}
.CoursesHeaderNav {
  position: relative;
  z-index: 100;
}
@media screen and (min-width: 1100px) {
  .CoursesHeader h2 {
    position: absolute;
    top: -37px;
    left: 47.2%;
  }
  .CoursesHeader nav {
    padding-right: 80px;
    text-align: right;
    font-size: 0.9rem;
  }
  .CoursesHeader nav a {
    border: 1px #195a7ab0 solid;
    border-radius: 2px;
    background: -webkit-linear-gradient(
      top left,
      rgb(24 100 112 / 70%),
      rgb(38 147 187 / 70%),
      rgb(17 90 112 / 70%)
    );
    padding: 2px 7px;

    transition: all 0.2s ease-in;
  }
  .CoursesHeader nav a:hover {
    border: 1px #0981bde0 solid;
  }

  .CoursesHeader hr {
    margin-top: 18px;
  }
}
@media screen and (max-width: 1100px) and (min-width: 481px) {
  .CoursesHeader h2 {
    margin: 9px auto 13px auto;
  }
  .CoursesHeader hr {
    margin-top: 20px;
    border: 1px rgb(17 94 112 / 77%) solid;
  }
  .CoursesHeader nav a {
    border: 1px #195a7ab0 solid;
    border-radius: 2px;
    background: -webkit-linear-gradient(
      top left,
      rgb(24 100 112 / 70%),
      rgb(38 147 187 / 70%),
      rgb(17 90 112 / 70%)
    );
    padding: 2px 7px;

    transition: all 0.2s ease-in;
  }
}
@media screen and (max-width: 580px) and (min-width: 481px) {
  .CoursesHeader h2 {
    position: relative;
    margin: 25px auto 2px auto;
  }
  .CoursesHeader nav {
    position: relative;
    margin: 18px auto 1px auto;
    padding: 0px;
  }

  .CoursesHeader hr {
    margin-top: 18px;
  }
}
@media screen and (max-width: 480px) {
  .CoursesHeader {
    width: 100%;
  }

  .CoursesHeader h2 {
    position: relative;
    margin: 0 auto;
    padding-top: 5px;
  }

  .CoursesHeaderNav {
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
  .CoursesHeadertransition {
    transition: all 0.2s ease-in;
  }
  .CoursesHeaderNavActive {
    transform: translateY(-17px) translateX(-50%);
    opacity: 1;
    z-index: 100;
  }

  .CoursesHeader hr {
    width: 90%;
  }
  .CoursesHeaderNav a {
    position: relative;
    font-size: 1.5rem;
    display: block;
    margin: 5px auto;
    padding: 10px 0px;
    width: 100%;
    border-radius: 5px;
    z-index: 10;
  }
  .CoursesHeader nav {
    padding: 0px;
  }
  nav a.router-link-exact-active {
    color: #ffffff;
    background: -webkit-linear-gradient(
      top left,
      rgb(24 112 104 / 37%),
      rgb(38 187 187 / 50%),
      rgb(17 108 112 / 39%)
    );
    border: 1px #197a6952 solid;
    border-radius: 0px;
    padding: 6px 0px;
    width: 100%;
  }
}
</style>