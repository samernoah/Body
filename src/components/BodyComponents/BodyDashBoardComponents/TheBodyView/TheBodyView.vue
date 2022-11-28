<template>
  <div class="bodysection bvsection2">
    <div class="bsheader bvsheader2">
      <div class="spacediv" />
      Body Diagram
    </div>
    <ColoredTitle
      Color="#0783d6"
      Title="Explore Mode"
      Top="6.2px"
      Left="159px"
      FontSize="10px"
      Width="74px"
      v-if="BodySectionIsActive"
    />
    <div class="TheBodyTopDivForActivity" v-if="!BodySectionIsActive"></div>
    <TheBody />
  </div>
</template>

<script>
import TheBody from "@/components/BodyComponents/The Body/TheBody.vue";
import ColoredTitle from "@/components/BodyComponents/BodyDashBoardComponents/ColoredTitle.vue";

export default {
  name: "TheBodyView",
  components: { TheBody, ColoredTitle },
  computed: {
    BodySectionIsActive() {
      return this.$store.state.BodyDashBoardActiveIcon.ActiveIcon === "Body";
    },
  },
};
</script>

<style>
.bodysection {
  position: relative;
  border-left: var(--DBsectionBorder);
  border-bottom: var(--DBsectionBorder);
  z-index: 17;
  grid-area: Body;
}
</style>