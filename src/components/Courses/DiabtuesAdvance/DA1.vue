<template>
  <div class="Csection DG1">
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
  name: "DA1",
  components: { Coursetext, MultiChoiseQuistion, CoursePage },

  data() {
    return {
      Text: "DA1",
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
    showcom() {
      this.showcomp = !this.showcomp;
    },
    RightAnswer() {
      this.$emit("RightA");
    },
  },
  computed: {
    turn() {
      return this.$props.Show;
    },
  },
};
</script>

<style>
.DG1 {
  display: block;
}
.DG1test-enter-from,
.DG1test-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.DG1test-enter-avtive,
.DG1test-leave-avtive {
  transition: all 2s ease;
}
</style>