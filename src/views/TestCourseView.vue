<template>
  <div class="testcourse">
    <CoursesHeader />
    <component :is="course" />
  </div>
</template>

<script>
import DG from "../components/Courses/DiabetuesGeneral/DG.vue";
import DI from "../components/Courses/DiabetuesIntermediate/DI.vue";
import DA from "../components/Courses/DiabtuesAdvance/DA.vue";
import CoursesHeader from "../components/Header/CoursesHeader.vue";

export default {
  props: ["courseLink"],
  components: { DG, DI, DA, CoursesHeader },
  data() {
    return {
      course: this.$props.courseLink,
    };
  },
};
</script>

<style>
.testcourse {
  min-height: -webkit-fill-available;
  background-image: url(../assets/2.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>