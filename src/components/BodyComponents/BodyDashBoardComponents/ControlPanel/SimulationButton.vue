<template>
  <div
    class="SimulationButton CenteredFlex"
    @click="IconChange(), ControlSimulation()"
  >
    <div
      class="CenteredFlex"
      :class="{
        SimulationButtonIcon: !Simulation,
        SimulationButtonIconActive: Simulation,
      }"
    >
      <div
        :class="{
          SimulationButtonIcon2: !Simulation,
          SimulationButtonIconActive2: Simulation,
        }"
      ></div>
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
.SimulationButton {
  position: absolute;
  width: 40px;
  height: 40px;
  border: 1px #0789e0 solid;
  border-radius: 50%;
  right: 78px;
  top: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in;
}
.SimulationButton:hover {
  cursor: pointer;
}
.SimulationButton * {
  transition: all 0.3s ease-in;
}
.SimulationButtonState {
  background-color: #0789e0;
}
.SimulationButtonIcon {
  position: relative;
  width: 0px;
  height: 0px;
  border: 11px solid transparent;
  border-left: 19px solid #0789e0;
  transform: translate(8.1px, 0.5px);
}
.SimulationButtonIcon2 {
  width: 0px;
  height: 0px;
  border: 9px solid transparent;
  border-left: 17px solid #222527;
  transform: translate(-5.3px, -0.2px);
}
.SimulationButtonIconActive {
  width: 2px;
  height: 18px;
  background-color: #0789e0;
  transform: translate(-3.4px, 0px);
}
.SimulationButtonIconActive2 {
  width: 2px;
  height: 18px;
  background-color: #0789e0;
  transform: translate(7px, 0px);
}
</style>