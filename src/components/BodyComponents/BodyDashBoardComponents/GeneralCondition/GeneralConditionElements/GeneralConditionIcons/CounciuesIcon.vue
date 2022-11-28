<template>
  <div class="CounciuesIcon CenteredFlex">
    <div class="Part P1"></div>
    <div class="Part P2"></div>
    <div class="Part P3"></div>
    <div class="CounciuesIconTitle">Counciues</div>
  </div>
</template>

<script>
export default {
  name: "CounciuesIcon",
};
</script>

<style>
.CounciuesIcon {
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 32px;
  border: 1px #bdb5b52e solid;
  background: -webkit-linear-gradient(
    top left,
    rgb(191 189 162 / 54%),
    rgb(52 56 26 / 59%)
  );
  grid-column: span 1;
  transform: translate(-5px, -68px);
}

.CounciuesIcon .Part {
  background-color: #10100eed;
  position: absolute;
  box-shadow: 0 0 5px 1px #99a2a58a;
  width: 27px;
  height: 5px;
  border: 1px #71787aa3 solid;
}

.CounciuesIcon .P1 {
  border-radius: 10px;
  transform: translate(0px, 8px);
}

.CounciuesIcon .P2 {
  border-radius: 10px;
  transform: translate(0px, -9px);
}

.CounciuesIcon .P3 {
  border-radius: 14px;
  transform: translate(0px, -0.5px);
}

.CounciuesIcon .CounciuesIconTitle {
  position: absolute;
  text-align: start;
  color: white;
  font-size: 11px;
  transform: translate(57px, 69px);
}
</style>