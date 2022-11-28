<template>
  <div class="Csection DI1">
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
  name: "DI1",
  components: { Coursetext, MultiChoiseQuistion, CoursePage },

  data() {
    return {
      Text: "DI1",
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
.DI1 {
  display: block;
}
.DI1test-enter-from,
.DI1test-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.DI1test-enter-avtive,
.DI1test-leave-avtive {
  transition: all 2s ease;
}
</style>