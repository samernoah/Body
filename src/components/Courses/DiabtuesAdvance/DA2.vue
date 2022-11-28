<template>
  <div class="Csection DA2">
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
  name: "DA2",
  components: { Coursetext, MultiChoiseQuistion, CoursePage },
  data() {
    return {
      Text: "DA2 ",
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
.DA2 {
  position: relative;
}
.DA2test-enter-from,
.DA2test-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.DA2test-enter-avtive,
.DA2test-leave-avtive {
  transition: all 2s ease;
}
</style>