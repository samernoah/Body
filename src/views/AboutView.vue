<template>
  <div class="about">
    <Header />
    <h1>This Is The About Page</h1>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header/Header.vue";
import Footer from "../components/Footer/Footer.vue";

export default {
  components: { Header, Footer },
};
</script>

<style>
.about {
  position: relative;
  width: 100%;
  min-height: 100%;
  background-image: url(../assets/3.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-flow: column;
}
</style>
