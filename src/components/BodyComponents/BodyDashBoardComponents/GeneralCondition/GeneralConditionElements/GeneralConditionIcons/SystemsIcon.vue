
<template>
  <div class="SystemsIcon CenteredFlex">
    <div class="Part P1"></div>
    <div class="Part P2"></div>
    <div class="Part P3"></div>
    <div class="Part P4"></div>
    <div class="Part P5"></div>
    <div class="Part P6"></div>
    <div class="SystemsIconTitle">Systems</div>
  </div>
</template>

<script>
export default {
  name: "SystemsIcon",
};
</script>

<style>
.SystemsIcon {
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 32px;
  border: 1px rgb(4 6 122 / 88%) solid;
  background: -webkit-linear-gradient(
    top left,
    rgb(25 29 173 / 80%),
    rgb(3 0 149 / 82%),
    #040638ab
  );
  transform: translateX(-5px);
}

.SystemsIcon .Part {
  width: 14px;
  height: 14px;
  background: -webkit-linear-gradient(
    top left,
    rgb(61 63 179 / 67%),
    rgb(35 33 143 / 76%),
    #33369fb8
  );
  border: 1px #141446 solid;
  border-radius: 4px;
  position: absolute;
}

.SystemsIcon .P1 {
  transform: translate(-8px, -8px);
}

.SystemsIcon .P2 {
  transform: translate(8px, -7.4px);
  border-radius: 8px;
  width: 15px;
  height: 15px;
}

.SystemsIcon .P3 {
  transform: translate(-8.6px, 9px);
  border-radius: 8px;
  width: 15px;
  height: 15px;
}

.SystemsIcon .P4 {
  transform: translate(8px, 9px);
}

.SystemsIcon .P5 {
  transform: translate(-8px, -8px);
}

.SystemsIcon .P6 {
  transform: translate(8px, 9px);
}

.Systems .SystemsIconTitle {
  position: absolute;
  text-align: start;
  color: white;
  font-size: 11px;
  transform: translate(52px, 1px);
}
</style>