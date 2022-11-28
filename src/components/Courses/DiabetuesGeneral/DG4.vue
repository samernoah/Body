<template>
  <div class="Csection DG3">
    <h1>Course</h1>
    <Coursetext :text="Text" />
    <Coursetext :text="Text2" />
    <ContinueButton @MQRightAnswer="RightAnswer" />
  </div>
</template>

<script>
import CoursePage from "../../CoursesStrucureComponents/CoursePage.vue";
import Coursetext from "../../CoursesStrucureComponents/CourseText.vue";
import ContinueButton from "../../CoursesStrucureComponents/ContinueButton.vue";

export default {
  name: "DG4",
  components: { Coursetext, ContinueButton, CoursePage },
  data() {
    return {
      Text: "DG4",
      Text2: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, consectetur nobis repellendus molestiae, culpa perspiciatis provident id delectus soluta beatae nam quod sapiente quo, voluptatem facilis eos temporibus necessitatibus quis
  Consequuntur, unde quisquam. Nostrum asperiores magni porro maxime eligendi expedita dolore itaque similique quos totam nulla ipsum tenetur vitae, voluptatibus suscipit ducimus quia? Ut non nesciunt, sunt minima aperiam excepturi.
  Corrupti cumque pariatur esse quae, ducimus provident veritatis doloremque ratione ipsa quidem quibusdam quia dolor nisi a voluptatum dolores numquam suscipit ab. A illo totam fuga aspernatur dolorem, obcaecati aliquid.`,
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