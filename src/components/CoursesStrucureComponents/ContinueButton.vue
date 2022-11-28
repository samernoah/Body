<template>
  <div class="ContinueButton" @click="Continue">Continue</div>
</template>

<script>
export default {
  methods: {
    Continue() {
      console.log("Hello World");
      this.$emit("MQRightAnswer");
    },
  },
};
</script>

<style>
.ContinueButton {
  color: white;
  font-size: 22px;
  margin: 20px auto;
  border: 1px rgb(23, 23, 24) solid;
  background-color: rgb(45, 107, 148);
  width: 250px;
  height: 35px;
  border-radius: 35px;
}
.ContinueButton:hover {
  cursor: pointer;
}
</style>