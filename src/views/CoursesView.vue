<template>
  <div class="Courses">
    <Header />
    <h1>Courses</h1>
    <h3 class="Courses-h3">Choose One Of The Available Courses</h3>
    <section class="availableCourses">
      <div
        class="courses"
        v-for="course of AvailableCourses"
        :key="course.name"
      >
        <router-link
          :to="{
            name: 'testcourse',
            params: { courseLink: course.courseLink },
          }"
          class="courseRouterLink"
        >
          <h1>{{ course.icon }}</h1>
          <br />
          <h3>{{ course.name }}</h3>
        </router-link>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header/Header.vue";
import Footer from "../components/Footer/Footer.vue";

export default {
  components: { Header, Footer },

  data() {
    return {
      AvailableCourses: [
        { name: "Diabetues For Bigenners", icon: "1", courseLink: "DG" },
        { name: "Intermediate Diabetues Course", icon: "2", courseLink: "DI" },
        { name: "Diabetues In Depth", icon: "3", courseLink: "DA" },
      ],
    };
  },
};
</script>

<style>
.Courses {
  position: relative;
  min-height: 170%;
  width: 100%;
  background-image: url(../assets/5.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-flow: column;
  transition: all 0.2s;
}
.Courses .courseRouterLink {
  text-decoration: none;
}

.Courses .Courses-h3 {
  color: white;
}
.Courses .availableCourses {
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  flex-wrap: wrap;
  width: 90%;
  margin: 40px auto 20px auto;
}
.Courses .courses {
  margin: 20px 10px 10px 10px;
  width: 216px;
  height: 180px;
  background: -webkit-linear-gradient(
    top left,
    rgb(24 112 104 / 38%),
    rgb(38 187 187 / 38%),
    rgb(17 108 112 / 38%)
  );
  border: 1px #197a6930 solid;
  color: white;
  cursor: pointer;
  padding: 10px;
}
.Courses .courses h1 {
  height: 30px;
  font-size: 2rem;
  color: rgb(83, 147, 182);
}
.Courses .courseRouterLink h1 {
  color: white;
}
.Courses .courses h3 {
  color: white;
}
.Courses .availableCourses a {
  display: block;
}
</style>