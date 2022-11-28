
<template>
  <div class="ComplainsIcon CenteredFlex">
    <div class="Part P1"></div>
    <div class="Part P2"></div>
    <div class="Part P3"></div>
    <div class="Part P4"></div>
    <div class="Part P5"></div>
    <div class="Part P6"></div>
    <div class="ComplainsIconTitle">Complains</div>
  </div>
</template>

<script>
export default {
  name: "ComplainsIcon",
};
</script>

<style>
.ComplainsIcon {
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 32px;
  border: 1px rgb(148 150 163 / 72%) solid;
  background: -webkit-linear-gradient(
    top left,
    rgb(225 225 235 / 36%),
    rgb(240 240 245 / 70%)
  );
  transform: translateX(-5px);
}

.ComplainsIcon .Part {
  position: absolute;
}

.ComplainsIcon .P1 {
  transform: translate(0px, -3px);
  width: 13px;
  height: 11px;
  border-radius: 2px 2px 2px 2px;
  background: -webkit-linear-gradient(top left, #7a1212, #832121);
  border: 1px #220000a6 solid;
  box-shadow: 0 0 6px 1px #000000a3;
}

.ComplainsIcon .P2 {
  transform: translate(0.25px, 1px) rotate(45deg);
  width: 14px;
  height: 14px;
  border-radius: 2px;
  background: -webkit-linear-gradient(top left, #7b1111, #580f0f);
  border: 1px #0f0101e8 solid;
  box-shadow: 0 0 8px 1px #000000c2;
}

.ComplainsIcon .P3 {
  transform: translate(0.7px, -3.2px);
  width: 13.8px;
  height: 11px;
  border-radius: 1px 2px 16px 16px;
  background: -webkit-linear-gradient(top, #601010, #6a1515);
  /* border: 1px #4e1a1a solid; */
  z-index: 3;
}

.ComplainsIcon .P4 {
  transform: translate(0.25px, 1px) rotate(45deg);
  width: 14px;
  height: 14px;
  border-radius: 1px;
  background: -webkit-linear-gradient(
    top left,
    #581010,
    #601111,
    #400101,
    #360505
  );
}

.ComplainsIcon .P5 {
  transform: translate(-4px, -8px);
}

.ComplainsIcon .P6 {
  transform: translate(4px, 8px);
}

.Complains .ComplainsIconTitle {
  position: absolute;
  text-align: start;
  color: white;
  font-size: 11px;
  transform: translate(56px, 1px);
}
</style>