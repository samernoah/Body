<template>
  <component :is="course" />
</template>

<script>
import DG from "../components/Courses/DiabetuesGeneral/DG.vue";
import DI from "../components/Courses/DiabetuesIntermediate/DI.vue";
import DA from "../components/Courses/DiabtuesAdvance/DA.vue";

export default {
  props: ["courseLink"],
  components: { DG, DI, DA },
  data() {
    return {
      course: this.$props.courseLink,
    };
  },
};
</script>

<style>
</style>