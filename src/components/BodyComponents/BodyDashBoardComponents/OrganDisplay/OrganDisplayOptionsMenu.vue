<template>
  <div class="OrganDisplayOptionsMenu" v-if="OrganIconIsActive">
    <div class="ODOMTop CenteredFlex">Organs</div>
    <div
      class="AvailableOrgan CenteredFlex"
      v-for="Organ in AvailableOrgans"
      :key="Organ.OrganName"
      @click="ChooseOrganforOrgansDispayOnBDB(Organ)"
    >
      {{ Organ.OgranNameToDisplayOnOrgansMenu }}
    </div>
  </div>
</template>

<script>
export default {
  name: "OrganDisplayOptionsMenu",
  data() {
    return {
      AvailableOrgans: [
        { OrganName: "Heart", OgranNameToDisplayOnOrgansMenu: "The Heart" },
        {
          OrganName: "ThePancreas",
          OgranNameToDisplayOnOrgansMenu: "The Pancreas",
        },
      ],
    };
  },
  methods: {
    ChooseOrganforOrgansDispayOnBDB(Organ) {
      this.$store.commit("ChangeTheChoosedOrgan", Organ);
    },
  },
  computed: {
    OrganIconIsActive() {
      return this.$store.state.BodyDashBoardActiveIcon.ActiveIcon === "Organ";
    },
  },
};
</script>

<style>
.OrganDisplayOptionsMenu {
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

.OrganDisplayOptionsMenu .ODOMTop {
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

.OrganDisplayOptionsMenu .AvailableOrgan {
  font-size: 14px;
  font-weight: bold;
  border-radius: 16px;
  margin: 0 10px;
  height: 36px;
  transition: all 0.2s ease-in;
  color: #222527;
  background: -webkit-linear-gradient(top left, #17707ef2, #2191a7, #3193a5f2);
  border: 1px #007caf solid;
}

.OrganDisplayOptionsMenu .AvailableOrgan:hover {
  color: #040404;
  border: 1px #159bd5 solid;
  cursor: pointer;
}
</style>