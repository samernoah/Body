<template>
  <div class="CounciuesIcon CenteredFlex">
    <div class="Part P1"></div>
    <div class="Part P2"></div>
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
  transform: translateX(-6px);
}

.CounciuesIcon .Part {
  background-color: #10100eed;
  position: absolute;
}

.CounciuesIcon .P1 {
  width: 27px;
  height: 14px;
  border: 1px #2d4042c9 solid;
  border-radius: 10px 10px 14px 14px;
  transform: translate(0px, 7px);
}

.CounciuesIcon .P2 {
  width: 14px;
  height: 14px;
  border: 1px #71787aa3 solid;
  border-radius: 14px;
  transform: translate(0px, -8px);
  box-shadow: 0 0 6px 5px #99a2a58a;
}

.CounciuesIcon .CounciuesIconTitle {
  position: absolute;
  text-align: start;
  color: white;
  font-size: 11px;
  transform: translate(54px, -1px);
}
</style>