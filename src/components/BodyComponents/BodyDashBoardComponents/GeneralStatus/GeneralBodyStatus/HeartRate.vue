<template>
  <div class="HeartRate GBStatus">
    <div class="IconRaper CenteredFlex">
      <div class="Icon CenteredFlex">
        <div class="Part P1"></div>
        <div class="Part P2"></div>
        <div class="Part P3"></div>
      </div>
    </div>

    <div class="Status">
      <div class="Label">Heart Rate</div>
      <div class="Numbers">
        <div class="Rate">{{ HeartRate }}</div>
        <div class="Unit">bpm</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeartRate",
  computed: {
    HeartRate() {
      return this.$store.state.Body.Organs.Heart.HeartRate.value;
    },
  },
};
</script>

<style>
.GeneralBodyStatus .HeartRate {
  width: 100%;
  display: grid;
  grid-template-columns: 3.3em auto;
  justify-items: stretch;
  align-content: stretch;
}

.GeneralBodyStatus .HeartRate .IconRaper {
  grid-column: span 1;
  transform: translateY(-0.4px);
}
.GeneralBodyStatus .HeartRate .Icon {
  background: -webkit-linear-gradient(top left, #3e69adc7, #113e85d9);
  border: 1px #4d6c786e solid;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  transform: scale(1.7);
}
.GeneralBodyStatus .HeartRate .Icon .Part {
  position: absolute;
  background-color: #42a7c3;
}

.GeneralBodyStatus .HeartRate .Icon .P1 {
  width: 11px;
  height: 11px;
  border-radius: 2px;
  transform: translate(-0.3px, 1.4px) rotate(45deg);
}

.GeneralBodyStatus .HeartRate .Icon .P2 {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  transform: translate(-2.4px, -0.6px);
}

.GeneralBodyStatus .HeartRate .Icon .P3 {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  transform: translate(1.8px, -0.6px);
}

.GeneralBodyStatus .HeartRate .Status {
  display: grid;
  grid-column: span 1;
  grid-template-rows: 1.1em auto;
  align-items: center;
  justify-items: start;
  transform: scale(0.8);
}

.GeneralBodyStatus .HeartRate .Status .Numbers {
  grid-row: span 1;
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-items: start;
}

.GeneralBodyStatus .HeartRate .Label {
  color: white;
  font-family: tahoma;
  font-weight: 700;
  font-size: 18px;
  grid-row: span 1;
  transform: translateY(6px);
}

.GeneralBodyStatus .HeartRate .Rate {
  color: white;
  font-size: 37px;
  font-family: tahoma;
  font-weight: 500;
  grid-column: span 1;
}

.GeneralBodyStatus .HeartRate .Unit {
  color: #9ea4ba;
  font-size: 18px;
  grid-column: span 1;
  transform: translate(6px, 6.4px);
}
</style>