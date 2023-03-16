<template>
  <div class="RespiratoryRate GBStatus">
    <div class="IconRaper CenteredFlex">
      <div class="Icon CenteredFlex">
        <div class="Part P1"></div>
        <div class="Part P2"></div>
        <div class="Part P3"></div>
        <div class="Part P4"></div>
        <div class="Part P5"></div>
      </div>
    </div>

    <div class="Status">
      <div class="Label">Respiratory Rate</div>
      <div class="Numbers">
        <div class="Rate">{{ RespiratoryRate }}</div>
        <div class="Unit">apm</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RespiratoryRate",
  computed: {
    RespiratoryRate() {
      return this.$store.state.Body.Organs.Lungs.RespiratoryRate;
    },
  },
};
</script>

<style>
.GeneralBodyStatus .RespiratoryRate {
  width: 100%;
  display: grid;
  grid-template-columns: 3.3em auto;
  justify-items: stretch;
  align-content: stretch;
}

.GeneralBodyStatus .RespiratoryRate .IconRaper {
  grid-column: span 1;
}

.GeneralBodyStatus .RespiratoryRate .Icon {
  background: -webkit-linear-gradient(top left, #3f855a, #117c3c);
  width: 30px;
  border: 1px #5191596b solid;
  height: 30px;
  border-radius: 50%;
  transform: scale(1.7);
}
.GeneralBodyStatus .RespiratoryRate .Icon .Part {
  position: absolute;
  background-color: #02a913;
}

.GeneralBodyStatus .RespiratoryRate .Icon .P1 {
  width: 4px;
  height: 10px;
  border-radius: 1px 1px 2px 2px;
  transform: translate(0px, -3px);
  background-color: #81bf45;
  z-index: 4;
}

.GeneralBodyStatus .RespiratoryRate .Icon .P2 {
  width: 11px;
  height: 14px;
  border-radius: 4px;
  transform: translate(-6px, 0.6px);
}

.GeneralBodyStatus .RespiratoryRate .Icon .P3 {
  width: 11px;
  height: 14px;
  border-radius: 4px;
  transform: translate(4.6px, 0.6px);
}

.GeneralBodyStatus .RespiratoryRate .Icon .P4 {
  width: 4px;
  height: 5px;
  border-radius: 1px 1px 2px 2px;
  transform: translate(-2px, 0px) rotate(45deg);
  background-color: #81bf45;
  z-index: 4;
}

.GeneralBodyStatus .RespiratoryRate .Icon .P5 {
  width: 4px;
  height: 5px;
  border-radius: 1px 1px 2px 2px;
  transform: translate(2px, 0px) rotate(-45deg);
  background-color: #81bf45;
  z-index: 4;
}

.GeneralBodyStatus .RespiratoryRate .Status {
  display: grid;
  grid-column: span 1;
  grid-template-rows: 1.1em auto;
  align-items: center;
  justify-items: start;
  transform: scale(0.8);
}

.GeneralBodyStatus .RespiratoryRate .Status .Numbers {
  grid-row: span 1;
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-items: start;
}

.GeneralBodyStatus .RespiratoryRate .Label {
  color: white;
  font-family: tahoma;
  font-weight: 700;
  font-size: 17px;
  grid-row: span 1;
  transform: translateY(6px);
}

.GeneralBodyStatus .RespiratoryRate .Rate {
  color: white;
  font-size: 37px;
  font-family: tahoma;
  font-weight: 500;
  grid-column: span 1;
}

.GeneralBodyStatus .RespiratoryRate .Unit {
  color: #9ea4ba;
  font-size: 18px;
  grid-column: span 1;
  transform: translate(6px, 6.4px);
}
</style>