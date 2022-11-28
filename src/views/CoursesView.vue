<template>
  <div class="Courses">
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
  </div>
</template>

<script>
export default {
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
  border: 2px solid skyblue;
  border-radius: 15px;
  cursor: pointer;
  padding: 10px;
}
.Courses .courses h1 {
  height: 30px;
  font-size: 2rem;
  color: rgb(83, 147, 182);
}
.Courses .courses h3 {
  color: rgb(83, 147, 182);
}
.Courses a {
  display: block;
}
</style>