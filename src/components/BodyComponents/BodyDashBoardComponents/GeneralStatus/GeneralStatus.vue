<template>
  <div class="infosection bvsection2">
    <div class="isheader bvsheader2">
      <div class="spacediv" />
      General Status
    </div>
    <GeneralBodyStatus v-if="!Infoshow" />
    <BodyInfo v-if="Infoshow" :Info="Info" />
  </div>
</template>

<script>
import BodyInfo from "../../BodyInfo/BodyInfo.vue";
import GeneralBodyStatus from "./GeneralBodyStatus/GeneralBodyStatus.vue";

export default {
  name: "GeneralStatus",
  components: { BodyInfo, GeneralBodyStatus },
  computed: {
    Info() {
      return this.$store.state.InfoOfSellectedDivision.Info;
    },
    Infoshow() {
      return this.$store.state.InfoOfSellectedDivision.InfoShow;
    },
  },
};
</script>

<style>
.infosection {
  position: relative;

  height: 408px;
  border-left: var(--DBsectionBorder);
  border-bottom: var(--DBsectionBorder);

  z-index: 15;
  transition: all 0.2s;
  grid-area: BodyInfo;
}
.infosection .isheader {
  width: 100%;
  border-top: var(--DBsectionBorder);
  border-bottom: var(--DBsectionBorder);
  border-right: var(--DBsectionBorder);
}
</style>