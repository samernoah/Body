<template>
  <div class="bodyicon">
    <div
      class="headicon"
      :class="{
        IconNoneActiveBGColor: !IconNameMatch,
        IconActiveBGColor: IconNameMatch,
      }"
    ></div>
    <div
      class="Lhandicon"
      :class="{
        IconNoneActiveBGColor: !IconNameMatch,
        IconActiveBGColor: IconNameMatch,
      }"
    ></div>
    <div
      class="Rhandicon"
      :class="{
        IconNoneActiveBGColor: !IconNameMatch,
        IconActiveBGColor: IconNameMatch,
      }"
    ></div>
    <div
      class="torsoicon"
      :class="{
        IconNoneActiveBGColor: !IconNameMatch,
        IconActiveBGColor: IconNameMatch,
      }"
    ></div>
    <div
      class="Llegicon"
      :class="{
        IconNoneActiveBGColor: !IconNameMatch,
        IconActiveBGColor: IconNameMatch,
      }"
    ></div>
    <div
      class="Rlegicon"
      :class="{
        IconNoneActiveBGColor: !IconNameMatch,
        IconActiveBGColor: IconNameMatch,
      }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "BodyLinkIcon",
  data() {
    return {
      name: "Body",
    };
  },
  computed: {
    IconNameMatch() {
      return this.$store.state.BodyDashBoardActiveIcon.ActiveIcon === this.name;
    },
  },
};
</script>

<style>
.bodyicon .headicon {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 1px;
  top: 2px;
  left: 13px;
}

.bodyicon .Lhandicon {
  position: absolute;
  width: 2px;
  height: 9px;
  border-radius: 2px;
  top: 8px;
  left: 8px;
}
.bodyicon .Rhandicon {
  position: absolute;
  width: 2px;
  height: 9px;
  border-radius: 2px;
  top: 8px;
  left: 20px;
}
.bodyicon .torsoicon {
  position: absolute;
  width: 8px;
  height: 10px;
  border-radius: 2px;
  top: 6.5px;
  left: 11.5px;
}
.bodyicon .Llegicon {
  position: absolute;
  width: 2px;
  height: 9px;
  border-radius: 3px;
  top: 17px;
  left: 12px;
}
.bodyicon .Rlegicon {
  position: absolute;
  width: 2px;
  height: 9px;
  border-radius: 3px;
  top: 17px;
  left: 16px;
}
.IconNoneActiveBGColor {
  background-color: var(--BodyDashBoardActiveIconShapeBGC);
}
.IconActiveBGColor {
  background-color: var(--BodyDashBoardNoneActiveIconShapeBGC);
}
.bodyicon * {
  transition: all 0.2s ease-in;
}
</style>