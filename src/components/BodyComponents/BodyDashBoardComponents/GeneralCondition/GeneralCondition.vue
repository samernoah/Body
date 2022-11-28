<template>
  <div class="GeneralCondition bvsection2">
    <div class="GCHeader bvsheader2">
      <div class="spacediv" />
      General Condition
    </div>
    <div class="GCContainer">
      <GeneralInformation />
      <Counciues />
      <NuetritionAndWaste />
      <Systems />
      <Complains />
    </div>
  </div>
</template>

<script>
import GeneralInformation from "./GeneralConditionElements/GeneralInformation.vue";
import Counciues from "./GeneralConditionElements/Counciues.vue";
import NuetritionAndWaste from "./GeneralConditionElements/NuetritionAndWaste.vue";
import Systems from "./GeneralConditionElements/Systems.vue";
import Complains from "./GeneralConditionElements/Complains.vue";

export default {
  name: "GeneralCondition",
  components: {
    GeneralInformation,
    Counciues,
    NuetritionAndWaste,
    Systems,
    Complains,
  },
};
</script>

<style>
.MainBodyDashBoardGridContainer .DBMain .GeneralCondition {
  height: 236px;
  border: var(--DBsectionBorder);
  border-radius: 0 0 15px 0;
  overflow: auto;
  grid-area: CurrentOps;
  grid-column: 1 / span 2;
  position: relative;
}

.MainBodyDashBoardGridContainer .DBMain .GeneralCondition .GCHeader {
  width: 100%;
  border-bottom: var(--DBsectionBorder);
  position: relative;
}

.GeneralCondition .GCContainer {
  position: relative;
  width: 100%;
  height: 86.6%;
  /* border: 1px blue dotted; */
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: repeat(3, 1fr);
}
</style>