<template>
  <div class="CourseTextView">
    <p>{{ Text }}</p>
  </div>
</template>

<script>
export default {
  props: ["text"],
  computed: {
    Text() {
      return this.$props.text;
    },
  },
};
</script>

<style>
.CourseTextView {
  width: 68%;
  margin: 60px auto 0px auto;
  color: white;
  background: -webkit-linear-gradient(
    top left,
    rgb(24 100 112 / 90%),
    rgb(38 147 187 / 90%),
    rgb(17 90 112 / 90%)
  );
  border: 1px #195a7ab0 solid;
  border-radius: 1px;
  padding: 15px 39px;
}

.CourseTextView p {
  color: white;
  font-size: 14px;
  text-align: left;
  padding: 10px 20px;
}
</style>