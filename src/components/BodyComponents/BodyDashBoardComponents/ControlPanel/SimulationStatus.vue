<template>
  <div class="SimulationStatus">
    <div class="SimulationStatusHeader CenteredFlex">
      <div class="SimulationStatusHeaderContent">Simulation Status</div>
    </div>
    <div class="SimulationStatusContent">
      <div v-if="IsSimulationReady">Ready</div>
      <div v-else>Pending</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SimulationStatus",
  computed: {
    IsSimulationReady() {
      return this.$store.state.Body.SimulationReady;
    },
  },
};
</script>

<style>
.SimulationStatus {
  position: absolute;
  width: 107px;
  height: 22px;
  top: 72px;
  left: 17px;
  /* border: 1px white solid; */
  color: white;
  font-size: 16px;
  border-radius: 6px;
}

.SimulationStatus .SimulationStatusHeader {
  position: absolute;
  width: 100%;
  height: 22px;
  /* border-bottom: 1px #303336 solid; */
  border-radius: 3px;
  color: white;
  background: -webkit-linear-gradient(
    top left,
    rgb(24 43 112),
    rgb(32 77 159),
    rgb(17 52 112)
  );
  font-size: 12px;
  top: 0;
  left: 0;
}

.SimulationStatus .SimulationStatusContent {
  color: white;
  /* font-family: tahoma; */
  transform: translate(87px, 4px);
  font-size: 12px;
}
</style>