
<template>
  <div class="NAWIcon CenteredFlex">
    <div class="Part P1"></div>
    <div class="Part P2"></div>
    <div class="Part P3"></div>
    <div class="Part P4"></div>
    <div class="Part P5"></div>
    <div class="Part P6"></div>
    <div class="NAWIconTitle">Nuetrition And Waste</div>
  </div>
</template>

<script>
export default {
  name: "NAWIcon",
};
</script>

<style>
.NAWIcon {
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 32px;
  border: 1px rgb(205 191 0 / 27%) solid;
  background: -webkit-linear-gradient(
    top left,
    rgb(197 201 55 / 52%),
    rgb(179 199 21 / 76%),
    #fbff1566
  );
  transform: translateX(-5px);
}

.NAWIcon .Part {
  background-color: #afafaf;
  position: absolute;
}

.NAWIcon .P1 {
  width: 3px;
  height: 22px;
  border: 1px #0b171aa3 solid;
  background-color: #008000d1;
  border-radius: 10px;
  transform: translate(-4px, -4px);
  z-index: 3;
  box-shadow: -2px 1px 14px 1px #2d30068f;
}

.NAWIcon .P2 {
  width: 3px;
  height: 22px;
  background-color: #c12121c2;
  border: 1px #0b171aa3 solid;
  border-radius: 10px;
  transform: translate(4px, 4px);
  box-shadow: 2px 0 6px 1px #2624028f;
}

.NAWIcon .P3 {
  width: 3px;
  height: 11px;
  border: 1px #0b171aa3 solid;
  background-color: #008000;
  border-radius: 10px;
  transform: translate(-6px, -10.6px) rotate(21deg);
}

.NAWIcon .P4 {
  width: 3px;
  height: 11px;
  background-color: #c12121;
  border: 1px #0b171aa3 solid;
  border-radius: 10px;
  transform: translate(6px, 10.6px) rotate(21deg);
}

.NAWIcon .P5 {
  width: 3px;
  height: 16px;
  /* border: 1px #0b171a3d solid; */
  background-color: #008000;
  border-radius: 10px;
  transform: translate(-4px, -8px);
  z-index: 3;
}

.NAWIcon .P6 {
  width: 3px;
  height: 16px;
  background-color: #c12121;
  /* border: 1px #0b171a3d solid; */
  border-radius: 10px;
  transform: translate(4px, 8px);
}

.NAW .NAWIconTitle {
  position: absolute;
  text-align: start;
  color: white;
  font-size: 11px;
  transform: translate(56px, 1px);
}
</style>