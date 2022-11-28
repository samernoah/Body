<template>
  <div class="GeneralBodyStatus">
    <HeartRate />
    <RespiratoryRate />
    <BloodPresure />
    <PO2Saturation />
    <!-- <ColoredTitle
      Color="#24810a"
      :Title="'General'"
      Top="-26px"
      Left="156px"
      FontSize="10px"
      Width="80px"
    /> -->
  </div>
</template>

<script>
import HeartRate from "./HeartRate.vue";
import RespiratoryRate from "./RespiratoryRate.vue";
import BloodPresure from "./BloodPresure.vue";
import PO2Saturation from "./PO2Saturation.vue";
import ColoredTitle from "../../../BodyDashBoardComponents/ColoredTitle.vue";

export default {
  name: "GeneralBodyStatus",
  components: {
    HeartRate,
    RespiratoryRate,
    BloodPresure,
    PO2Saturation,
    ColoredTitle,
  },
};
</script>

<style>
.GeneralBodyStatus {
  position: absolute;
  width: 100%;
  height: 91%;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  justify-items: center;
}

.GBStatus {
  grid-row: span 1;
  color: skyblue;
  font-size: 24px;
}
</style>