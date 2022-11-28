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
  margin: 40px auto;
  border: 1px rgb(23, 23, 24) solid;
  background-color: rgb(56, 59, 61);
  width: 70%;
  border-radius: 5px;
}

.CourseTextView p {
  color: white;
  font-size: 14px;
  text-align: left;
  padding: 10px 20px;
}
</style>