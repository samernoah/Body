<template>
  <Header />
  <div class="HomeView">
    <h1>
      Welcome To <span ref="BodyWordSpan" class="BodyWordSpan">Body</span>
    </h1>

    <p>
      An interactive human body platform for exploring <br />
      and education
    </p>

    <div>
      <router-link class="HomeButton" to="/body"> Explore Now > </router-link>
    </div>
  </div>

  <Footer />
</template>

<script>
import Header from "../components/Header/Header.vue";
import Footer from "../components/Footer/Footer.vue";
import Starter from "../BodySimulation/MainMethods/SimulationStarterFunction";

export default {
  components: { Header, Footer },

  data() {
    return {};
  },
};
</script>

<style>
.HomeView h1 {
  margin-top: 40px;
  font-size: 2.5rem;
  color: white;
  z-index: 4;
}
.HomeView p {
  margin-top: 60px;
  color: white;
  z-index: 4;
}
.HomeView a {
  text-decoration: none;
}
.HomeView .HomeButton {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60px auto 0 auto;
  width: 80%;
  height: 40px;
  background-color: rgb(83, 147, 182);
  color: white;
  border-radius: 20px;
  cursor: pointer;
  z-index: 4;
}
.BodyWordSpan {
  color: skyblue;
  animation: BodyWord 8s ease-in 1s infinite alternate;
  transition: color 1s ease-in;
}
@keyframes BodyWord {
  0% {
    color: skyblue;
  }
  100% {
    color: orange;
  }
}

@keyframes BGBodyWord {
  0% {
    color: rgb(16, 18, 20, 0.03);
  }
  100% {
    color: rgba(255, 255, 255, 0.03);
  }
}
@media screen and (min-width: 481px) {
  .HomeView .HomeButton {
    margin-top: 50px;
    width: 200px;
    z-index: 4;
  }
  .HomeView h1 {
    margin-top: 60px;
    z-index: 4;
  }

  .HomeView p {
    margin-top: 60px;
    z-index: 4;
  }
}
</style>
