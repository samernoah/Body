<template>
  <div
    class="PrepareSimulationButton CenteredFlex"
    @click="PrepareSimulationFunction"
  >
    <div class="PrepLinesContainer">
      <div class="PrepLine1 PrepLine"></div>
      <div class="PrepLine2 PrepLine"></div>
      <div class="PrepLine3 PrepLine"></div>
      <div class="PrepLine4 PrepLine"></div>
    </div>
  </div>
</template>

<script>
import BodyPool from "../../../../BodySimulation/BodySections/BodyPool/BodyPool";
import store from "@/store";
import { PrePareTheBody } from "../../../../BodySimulation/MainMethods/PrePareTheBodyMethods/PrePareTheBody";

export default {
  setup() {
    let PrepareSimulationFunction = () => {
      PrePareTheBody();
    };

    return { PrepareSimulationFunction };
  },

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
.PrepareSimulationButton {
  position: absolute;
  width: 40px;
  height: 40px;
  border: 1px #036b0c solid;
  border-radius: 50%;
  right: 135px;
  top: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in;
}
.PrepareSimulationButton:hover {
  cursor: pointer;
}
.PrepareSimulationButton * {
  transition: all 0.3s ease-in;
}

.PrepareSimulationButton .PrepLinesContainer {
  position: relative;
  width: 21px;
  height: 21px;
}
.PrepareSimulationButton .PrepLinesContainer .PrepLine {
  position: absolute;
  height: 1px;
  background-color: #036b0c;
}
.PrepareSimulationButton .PrepLinesContainer .PrepLine1 {
  width: 8.5px;
  top: 2px;
  left: 5.5px;
}

.PrepareSimulationButton .PrepLinesContainer .PrepLine2 {
  width: 15px;
  top: 7px;
  left: 3px;
}

.PrepareSimulationButton .PrepLinesContainer .PrepLine3 {
  width: 15px;
  top: 12px;
  left: 3px;
}

.PrepareSimulationButton .PrepLinesContainer .PrepLine4 {
  width: 15px;
  top: 17px;
  left: 3px;
}
</style>