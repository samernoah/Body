<template>
  <div class="ControlPanel bvsection">
    <div class="bvsheader">
      <div class="spacediv" />
      Control Panel
    </div>
    <SimulationLabel />
    <SimulationStatus />
    <SimulationButton @control="StartSimulation" />
    <StopSimulationButton />
    <ReadySimulationButton />
  </div>
</template>

<script>
import SimulationButton from "./SimulationButton.vue";
import StopSimulationButton from "./StopSimulationButton.vue";
import ReadySimulationButton from "./ReadySimulationButton.vue";
import SimulationLabel from "./SimulationLabel.vue";
import SimulationStatus from "./SimulationStatus.vue";
export default {
  name: "ControlPanel",
  components: {
    SimulationButton,
    StopSimulationButton,
    ReadySimulationButton,
    SimulationLabel,
    SimulationStatus,
  },
  methods: {
    StartSimulation() {
      this.$emit("SimulationButtonPressed");
    },
  },
};
</script>

<style>
.ControlPanel {
  width: 783px;
  height: 100px;
  grid-column: span 3;
  transform: translate(-1px, 5px);
}
</style>