<template>
  <div class="SimulationLabel CenteredFlex">
    <div class="SimulationLabelHeader CenteredFlex">
      <div class="SimulationLabelHeaderContent">Simulation Name</div>
    </div>
    <div class="SimulationLabelContent CenteredFlex">Proto</div>
  </div>
</template>

<script>
export default {
  name: "SimulationLabel",
};
</script>

<style>
.SimulationLabel {
  position: absolute;
  width: 107px;
  height: 46px;
  top: 41px;
  left: 17px;
  border: 1px rgb(19 135 25) solid;
  color: white;
  font-size: 16px;
  border-radius: 6px;
}

.SimulationLabel .SimulationLabelHeader {
  position: absolute;
  width: 100%;
  height: 22px;
  border-bottom: 1px #303336 solid;
  border-radius: 3px 3px 0 0;
  color: white;
  background-color: rgb(19 135 25);
  font-size: 12px;
  top: 0;
  left: 0;
}

.SimulationLabel .SimulationLabelContent {
  color: white;
  font-family: tahoma;
  transform: translate(0px, 11px);
  font-size: 12px;
}
</style>