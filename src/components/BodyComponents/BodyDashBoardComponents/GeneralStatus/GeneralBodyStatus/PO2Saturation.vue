<template>
  <div class="PO2Saturation GBStatus">
    <div class="IconRaper CenteredFlex">
      <div class="Icon CenteredFlex">
        <div class="Part P1"></div>
        <div class="Part P2">2</div>
      </div>
    </div>

    <div class="Status">
      <div class="Label">PO2 Saturation</div>
      <div class="Numbers">
        <div class="Rate">{{ PO2Saturation }}</div>
        <div class="Unit">%</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PO2Saturation",
  computed: {
    PO2Saturation() {
      return this.$store.state.Body.Organs.CircularSystemAndBlood.PO2Saturation;
    },
  },
};
</script>

<style>
.GeneralBodyStatus .PO2Saturation {
  width: 100%;
  display: grid;
  grid-template-columns: 3.3em auto;
  justify-items: stretch;
  align-content: stretch;
}

.GeneralBodyStatus .PO2Saturation .IconRaper {
  grid-column: span 1;
}

.GeneralBodyStatus .PO2Saturation .Icon {
  background: -webkit-linear-gradient(top left, rgb(122 100 50), #895b19);
  width: 30px;
  height: 30px;
  border: 1px #956925d1 solid;
  border-radius: 50%;
  transform: scale(1.7);
}
.GeneralBodyStatus .PO2Saturation .Icon .Part {
  position: absolute;
}

.GeneralBodyStatus .PO2Saturation .Icon .P1 {
  width: 11px;
  height: 11px;
  border: 3px solid #c1770d;
  /* box-shadow: 0 0 3px 2px #764800; */
  border-radius: 8px;
}

.GeneralBodyStatus .PO2Saturation .Icon .P2 {
  font-size: 7px;
  font-weight: 800;
  font-family: sans-serif;
  color: #f9d6a1;
  transform: translate(6.3px, 4.7px);
}

.GeneralBodyStatus .PO2Saturation .Status {
  display: grid;
  grid-column: span 1;
  grid-template-rows: 1.1em auto;
  align-items: center;
  justify-items: start;
  transform: scale(0.8);
}

.GeneralBodyStatus .PO2Saturation .Status .Numbers {
  grid-row: span 1;
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-items: start;
}

.GeneralBodyStatus .PO2Saturation .Label {
  color: white;
  font-family: tahoma;
  font-weight: 700;
  font-size: 18px;
  grid-row: span 1;
  transform: translateY(6px);
}

.GeneralBodyStatus .PO2Saturation .Rate {
  color: white;
  font-size: 37px;
  font-family: tahoma;
  font-weight: 500;
  grid-column: span 1;
}

.GeneralBodyStatus .PO2Saturation .Unit {
  color: #9ea4ba;
  font-size: 18px;
  grid-column: span 1;
  transform: translate(6px, 6.4px);
}
</style>