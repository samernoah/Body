<template>
  <div class="Csection DG3">
    <h1>Course</h1>
    <Coursetext :text="Text" />
    <MultiChoiseQuistion
      :choises="Quistion.choises"
      :quistion="Quistion.qstn"
      :QAId="Quistion.CorrectAnswerId"
      @MQRightAnswer="RightAnswer"
    />
  </div>
</template>

<script>
import CoursePage from "../../CoursesStrucureComponents/CoursePage.vue";
import Coursetext from "../../CoursesStrucureComponents/CourseText.vue";
import MultiChoiseQuistion from "../../CoursesStrucureComponents/MultiChoiseQuistion.vue";

export default {
  name: "DG3",
  components: { Coursetext, MultiChoiseQuistion, CoursePage },
  data() {
    return {
      Text: "DG3 ",
      Quistion: {
        qstn: "This is A Quistion ?",
        CorrectAnswerId: 2,
        choises: [
          { id: 1, choise: "this is choise number 1" },
          { id: 2, choise: "this is choise number 2" },
          { id: 3, choise: "this is choise number 3" },
        ],
      },
    };
  },
  methods: {
    RightAnswer() {
      this.$emit("RightA");
    },
  },
};
</script>

<style>
</style>