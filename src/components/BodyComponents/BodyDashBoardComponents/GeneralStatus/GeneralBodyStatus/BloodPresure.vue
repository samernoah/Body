<template>
  <div class="BloodPresure GBStatus">
    <div class="IconRaper CenteredFlex">
      <div class="Icon CenteredFlex">
        <div class="Part P1"></div>
        <div class="Part P2"></div>
        <div class="Part P3"></div>
      </div>
    </div>

    <div class="Status">
      <div class="Label">Blood Presure</div>
      <div class="Numbers">
        <div class="Rate">120/80</div>
        <div class="Unit">Hgm</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BloodPresure",
};
</script>

<style>
.GeneralBodyStatus .BloodPresure {
  width: 100%;
  display: grid;
  grid-template-columns: 3.3em auto;
  justify-items: stretch;
  align-content: stretch;
}

.GeneralBodyStatus .BloodPresure .IconRaper {
  grid-column: span 1;
}

.GeneralBodyStatus .BloodPresure .Icon {
  background: -webkit-linear-gradient(top left, #7e3535, #911414);
  width: 30px;
  height: 30px;
  border: 1px #9531318a solid;
  border-radius: 50%;
  transform: scale(1.7);
}
.GeneralBodyStatus .BloodPresure .Icon .Part {
  position: absolute;
  background-color: #c34242;
}

.GeneralBodyStatus .BloodPresure .Icon .P1 {
  width: 8px;
  height: 8px;
  border-radius: 1px;
  transform: translate(-0.1px, -2px) rotate(45deg);
}

.GeneralBodyStatus .BloodPresure .Icon .P2 {
  width: 12px;
  height: 14px;
  border-radius: 9px;
  transform: translate(-0.1px, 1.7px);
}

.GeneralBodyStatus .BloodPresure .Icon .P3 {
  width: 3px;
  height: 4px;
  border-radius: 2px;
  border-right: 1px #7a0707 solid;
  transform: translate(2.3px, 4.2px) rotate(31deg);
}

.GeneralBodyStatus .BloodPresure .Status {
  display: grid;
  grid-column: span 1;
  grid-template-rows: 1.1em auto;
  align-items: center;
  justify-items: start;
  transform: scale(0.8);
}

.GeneralBodyStatus .BloodPresure .Status .Numbers {
  grid-row: span 1;
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-items: start;
}

.GeneralBodyStatus .BloodPresure .Label {
  color: white;
  font-family: tahoma;
  font-weight: 700;
  font-size: 18px;
  grid-row: span 1;
  transform: translateY(6px);
}

.GeneralBodyStatus .BloodPresure .Rate {
  color: white;
  font-size: 30px;
  font-family: tahoma;
  font-weight: 500;
  grid-column: span 1;
}

.GeneralBodyStatus .BloodPresure .Unit {
  color: #9ea4ba;
  font-size: 16px;
  grid-column: span 1;
  transform: translate(6px, 3px);
}
</style>