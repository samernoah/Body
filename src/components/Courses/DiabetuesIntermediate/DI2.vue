<template>
  <div class="Csection DI2">
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
  name: "DI2",
  components: { Coursetext, MultiChoiseQuistion, CoursePage },
  data() {
    return {
      Text: " DI2 ",
      Quistion: {
        qstn: "This is A Quistion ?",
        CorrectAnswerId: 2,
        choises: [
          { id: 1, choise: "this is choise bumber 1" },
          { id: 2, choise: "this is choise bumber 2" },
          { id: 3, choise: "this is choise bumber 3" },
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
DI2 {
  position: relative;
}
DI2test-enter-from,
DI2test-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
DI2test-enter-avtive,
DI2test-leave-avtive {
  transition: all 2s ease;
}
</style>