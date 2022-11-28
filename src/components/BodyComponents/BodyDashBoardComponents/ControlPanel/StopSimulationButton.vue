<template>
  <div
    class="StopSimulationButton CenteredFlex"
    @click="IconChange(), ControlSimulation()"
    :class="{
      StopSimulationButtonActive: !Simulation,
      StopSimulationButtonNonActive: Simulation,
    }"
  >
    <div
      class="CenteredFlex"
      :class="{
        StopSimulationButtonIcon: !Simulation,
        StopSimulationButtonIconActive: Simulation,
      }"
    >
      <!-- <div
        :class="{
          StopSimulationButtonIcon2: !Simulation,
          StopSimulationButtonIconActive2: Simulation,
        }"
      ></div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Simulation: false,
    };
  },
  methods: {
    IconChange() {
      this.Simulation = !this.Simulation;
    },
    ControlSimulation() {
      this.$emit("control");
      console.log("control");
    },
  },
};
</script>

<style>
.StopSimulationButton {
  position: absolute;
  width: 40px;
  height: 40px;
  border: 1px #bf4b876b solid;
  border-radius: 50%;
  right: 24px;
  top: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in;
}
.StopSimulationButton:hover {
  cursor: pointer;
}
.StopSimulationButton * {
  transition: all 0.3s ease-in;
}
.StopSimulationButtonState {
  background-color: #0789e0;
}
.StopSimulationButtonIcon {
  position: relative;
  width: 16px;
  height: 16px;
  border: 1px solid #bf4b876b;
}

.StopSimulationButtonIconActive {
  background-color: #bf4b87;
}
</style>