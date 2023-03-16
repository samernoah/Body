<template>
  <div class="ContinueButton CenteredFlex" @click="Continue">Continue</div>
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
  font-size: 18px;
  margin: 20px auto;
  background: -webkit-linear-gradient(
    top left,
    rgb(24 100 112 / 90%),
    rgb(38 147 187 / 90%),
    rgb(17 90 112 / 90%)
  );
  border: 1px #195a7ab0 solid;
  width: 161px;
  height: 35px;
  border-radius: 35px;
  padding: 5px 0px;
}
.ContinueButton:hover {
  cursor: pointer;
}
</style>