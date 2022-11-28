<template>
  <div class="Organicon">
    <div
      class="BorderIcon"
      :class="{
        IconNoneActiveBrdrColor: !IconNameMatch,
        IconActiveBrdrColor: IconNameMatch,
      }"
    ></div>

    <div
      class="OrganIconDisplay"
      :class="{
        IconNoneActiveBGColor: !IconNameMatch,
        IconActiveBGColor: IconNameMatch,
      }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "OrganLinkIcon",
  data() {
    return {
      name: "Organ",
    };
  },
  computed: {
    IconNameMatch() {
      return this.$store.state.BodyDashBoardActiveIcon.ActiveIcon === "Organ";
    },
  },
};
</script>

<style>
.Organicon .BorderIcon {
  position: absolute;
  width: 17px;
  height: 17px;
  border-radius: 4px;
  top: 4px;
  left: 4px;
}

.Organicon .OrganIconDisplay {
  position: absolute;
  width: 11px;
  height: 10px;
  border-radius: 4px;
  top: 10px;
  left: 10.2px;
  transform: rotate(326deg);
}

.IconNoneActiveBGColor {
  background-color: var(--BodyDashBoardActiveIconShapeBGC);
}
.IconActiveBGColor {
  background-color: var(--BodyDashBoardNoneActiveIconShapeBGC);
}
.IconNoneActiveBrdrColor {
  border: 3px solid var(--BodyDashBoardActiveIconShapeBGC);
}
.IconActiveBrdrColor {
  border: 3px solid var(--BodyDashBoardNoneActiveIconShapeBGC);
}
.Organicon * {
  transition: all 0.2s ease-in;
}
</style>