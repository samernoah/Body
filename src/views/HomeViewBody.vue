<template>
  <div class="HomeView">
    <Header />
    <h1>
      Welcome To <span ref="BodyWordSpan" class="BodyWordSpan">Body</span>
    </h1>

    <p>
      An interactive human body platform for exploring <br />
      and education
    </p>

    <router-link class="HomeButton" to="/body"> Explore Now > </router-link>
    <Footer />
  </div>
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
.HomeView {
  position: relative;
  background-image: url(../assets/3.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 170%;
  width: 100%;
  display: flex;
  flex-flow: column;
  transition: all 0.2s ease-in;
}

.HomeView h1 {
  margin: 41px auto -16px auto;
  font-size: 2.5rem;
  color: white;
  width: 26%;
  background: -webkit-linear-gradient(
    top left,
    rgb(24 112 104 / 38%),
    rgb(38 187 187 / 38%),
    rgb(17 108 112 / 38%)
  );
  border: 1px #197a6930 solid;
  border-radius: 0px;
  padding: 14px 11px;
  z-index: 4;
}
.HomeView p {
  display: block;
  margin: 60px auto 0 auto;
  color: white;
  background: -webkit-linear-gradient(
    top left,
    rgb(24 112 104 / 72%),
    rgb(38 187 187 / 72%),
    rgb(17 108 112 / 72%)
  );
  border: 1px #197a6930 solid;
  border-radius: 0px;
  padding: 15px 91px;
  z-index: 4;
}
.HomeView a {
  text-decoration: none;
}
.HomeView .HomeButton {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60px auto 80px auto;
  width: 80%;
  height: 40px;
  background: -webkit-linear-gradient(
    top left,
    rgb(24 112 104 / 72%),
    rgb(38 187 187 / 81%),
    rgb(17 108 112 / 72%)
  );
  border: 1px #197a6975 solid;
  color: white;
  border-radius: 20px;
  cursor: pointer;
  z-index: 4;
  flex-grow: unset;
}
.BodyWordSpan {
  color: skyblue;
  animation: BodyWord 8s ease-in 1s infinite alternate;
  transition: color 1s ease-in;
}
@keyframes BodyWord {
  0% {
    color: rgb(135, 207, 235);
  }
  25% {
    color: rgba(135, 207, 235, 0.562);
  }
  75% {
    color: rgba(255, 166, 0, 0.582);
  }
  100% {
    color: rgb(255, 166, 0);
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
    height: 40px;
  }
  .HomeView h1 {
    margin-top: 106px;
    z-index: 4;
    min-width: 349px;
  }

  .HomeView p {
    margin-top: 60px;
    z-index: 4;
  }
}
@media screen and (max-width: 580px) and (min-width: 481px) {
  .HomeView h1 {
    width: 349;
    z-index: 4;
  }

  .HomeView .HomeButton {
    padding: 10px 3px;
  }
}
@media screen and (max-width: 480px) {
  .HomeView {
    height: 205%;
  }

  .HomeView h1 {
    font-size: 2.3rem;
    width: 85%;
    z-index: 4;
  }

  .HomeView p {
    width: 90%;
    z-index: 4;
    padding: 15px 0px;
  }

  .HomeView .HomeButton {
    margin-top: 50px;
    width: 200px;
    z-index: 4;
    height: 40px;
  }
}
</style>
