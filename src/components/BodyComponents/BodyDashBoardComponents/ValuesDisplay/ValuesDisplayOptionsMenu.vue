<template>
  <div class="ValuesDisplayOptionsMenu" v-if="ValuesIconIsActive">
    <div class="VDOMTop CenteredFlex">Values</div>
    <div
      class="AvailableValue CenteredFlex"
      v-for="Val in AvailableValues"
      :key="Val.Name"
      @click="ChangeTheValueStateOfDisplay(Val.Name)"
    >
      {{ Val.Name }} - {{ Val.Value }}
    </div>
  </div>
</template>

<script>
import BodyPool from "../../../../BodySimulation/BodySections/BodyPool/BodyPool";
import store from "@/store";

export default {
  setup() {
    const ChangeTheValueStateOfDisplay = (ValName) => {
      BodyPool[ValName].ChosenForDisplay = !BodyPool[ValName].ChosenForDisplay;
      store.state.Body.BodyPool = [];
      for (let val in BodyPool) {
        store.state.Body.BodyPool.push(BodyPool[val]);
      }
    };

    return { ChangeTheValueStateOfDisplay };
  },
  name: "ValuesDisplayOptionsMenu",
  data() {
    return {};
  },
  methods: {
    // ChangeTheValueStateOfDisplay(ValName) {
    //   this.$store.commit("BodyPoolValuesDisplayStateChange", ValName);
    // },
  },
  computed: {
    ValuesIconIsActive() {
      return this.$store.state.BodyDashBoardActiveIcon.ActiveIcon === "Values";
    },
    AvailableValues() {
      return this.$store.state.Body.BodyPool;
    },
  },
};
</script>

<style>
.ValuesDisplayOptionsMenu {
  position: absolute;
  width: 623px;
  height: 405px;
  background: -webkit-linear-gradient(
    top left,
    rgb(48 52 54),
    rgb(34 37 39),
    rgb(20 24 26)
  );
  border: 1px #2a383e solid;
  border-radius: 7px;
  z-index: 17;
  transition: all 0.2s;
  top: 15%;
  left: 8%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 2.8em;
  justify-items: stretch;
  align-content: stretch;
}

.ValuesDisplayOptionsMenu .VDOMTop {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  font-family: tahoma;
  font-size: 13px;
  border-bottom: 1px #4a4a4a solid;
  color: white;
  grid-column: span 5;
  height: 28px;
}

.ValuesDisplayOptionsMenu .AvailableValue {
  font-weight: bold;
  font-size: 14px;
  border-radius: 16px;
  margin: 0 3px;
  height: 36px;
  transition: all 0.2s ease-in;
  color: #222527;
  background: -webkit-linear-gradient(top left, #17707ef2, #2191a7, #3193a5f2);
  border: 1px #007caf solid;
}

.ValuesDisplayOptionsMenu .AvailableValue:hover {
  color: #040404;
  border: 1px #159bd5 solid;
  cursor: pointer;
}
</style>