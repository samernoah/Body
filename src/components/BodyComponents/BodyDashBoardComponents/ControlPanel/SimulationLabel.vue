<template>
  <div class="SimulationLabel">
    <div class="SimulationLabelHeader CenteredFlex">
      <div class="SimulationLabelHeaderContent">Simulation Name</div>
    </div>
    <div class="SimulationLabelContent">Proto</div>
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
  height: 22px;
  top: 41px;
  left: 17px;
  /* border: 1px white solid; */
  color: white;
  font-size: 16px;
  /* border-radius: 6px;*/
}

.SimulationLabel .SimulationLabelHeader {
  position: absolute;
  width: 100%;
  height: 22px;
  color: white;
  background: -webkit-linear-gradient(
    top left,
    rgb(25 112 24),
    rgb(34 159 32),
    rgb(25 112 17)
  );
  font-size: 12px;
  top: 0;
  left: 0;
  border-radius: 3px;
}

.SimulationLabel .SimulationLabelContent {
  position: absolute;
  color: white;
  /* font-family: tahoma; */
  transform: translate(120px, 5px);
  font-size: 12px;
}
</style>