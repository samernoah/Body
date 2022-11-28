<template>
  <div class="ValuesIcon">
    <div
      class="Line L1"
      :class="{
        IconNoneActiveBGColor: !IconNameMatch,
        IconActiveBGColor: IconNameMatch,
      }"
    ></div>
    <div
      class="Dot DT1"
      :class="{
        IconNoneActiveBGColor: !IconNameMatch,
        IconActiveBGColor: IconNameMatch,
      }"
    ></div>
    <div
      class="Line L2"
      :class="{
        IconNoneActiveBGColor: !IconNameMatch,
        IconActiveBGColor: IconNameMatch,
      }"
    ></div>
    <div
      class="Dot DT2"
      :class="{
        IconNoneActiveBGColor: !IconNameMatch,
        IconActiveBGColor: IconNameMatch,
      }"
    ></div>
    <div
      class="Line L3"
      :class="{
        IconNoneActiveBGColor: !IconNameMatch,
        IconActiveBGColor: IconNameMatch,
      }"
    ></div>
    <div
      class="Dot DT3"
      :class="{
        IconNoneActiveBGColor: !IconNameMatch,
        IconActiveBGColor: IconNameMatch,
      }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "ValuesLinkIcon",
  data() {
    return {
      name: "Values",
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
.ValuesIcon .Line {
  position: absolute;
  width: 12px;
  height: 4px;
  border-radius: 5px;
}

.ValuesIcon .Dot {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 2px;
}

.ValuesIcon .L1 {
  width: 14px;
  top: 6px;
  left: 6px;
}

.ValuesIcon .L2 {
  top: 13px;
  left: 6px;
}

.ValuesIcon .L3 {
  width: 14px;
  top: 20px;
  left: 6px;
}

.ValuesIcon .DT1 {
  top: 6px;
  left: 22px;
}

.ValuesIcon .DT2 {
  top: 13px;
  left: 22px;
}

.ValuesIcon .DT3 {
  top: 20px;
  left: 22px;
}

.IconNoneActiveBGColor {
  background-color: var(--BodyDashBoardActiveIconShapeBGC);
}
.IconActiveBGColor {
  background-color: var(--BodyDashBoardNoneActiveIconShapeBGC);
}
.ValuesIcon * {
  transition: all 0.2s ease-in;
}
</style>