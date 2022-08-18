<template>
  <div class="HomeView">
    <h1>
      Welcome To <span ref="BodyWordSpan" class="BodyWordSpan">Body</span>
    </h1>

    <p>
      An interactive human body platform for exploring <br />
      and education
    </p>

    <router-link to="/body">
      <div class="HomeButton">Explore Now ></div>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      BodyWInterval: null,
    };
  },
};
</script>

<style>
.HomeView h1 {
  margin-top: 2%;
  color: white;
}
.HomeView p {
  color: white;
}
.HomeView a {
  text-decoration: none;
}
.HomeView .HomeButton {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10% auto 0 auto;
  width: 80%;
  height: 40px;
  background-color: rgb(83, 147, 182);
  color: white;
  border-radius: 20px;
}
.BodyWordSpan {
  animation: BodyWord 5s ease-in 3s infinite alternate;
  transition: color 1s ease-in;
}
@keyframes BodyWord {
  0% {
    color: white;
  }
  10% {
    color: skyblue;
  }
  100% {
    color: orange;
  }
}
</style>
