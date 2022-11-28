<template>
  <div class="SimulationStatus CenteredFlex">
    <div class="SimulationStatusHeader CenteredFlex">
      <div class="SimulationStatusHeaderContent">Simulation Status</div>
    </div>
    <div class="SimulationStatusContent CenteredFlex">
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
  height: 46px;
  top: 41px;
  left: 139px;
  border: 1px rgb(19 110 171) solid;
  color: white;
  font-size: 16px;
  border-radius: 6px;
}

.SimulationStatus .SimulationStatusHeader {
  position: absolute;
  width: 100%;
  height: 22px;
  border-bottom: 1px #303336 solid;
  border-radius: 3px 3px 0 0;
  color: white;
  background-color: rgb(19 110 171);
  font-size: 12px;
  top: 0;
  left: 0;
}

.SimulationStatus .SimulationStatusContent {
  color: white;
  font-family: tahoma;
  transform: translate(0px, 11px);
  font-size: 12px;
}
</style>