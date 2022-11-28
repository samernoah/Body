<template>
  <div class="BodyDBOrganDisplay bvsection">
    <ColoredTitle
      Color="#6d03b7"
      :Title="C_ChoosedOrganNameToDisplay"
      Top="5.4px"
      Left="86px"
      FontSize="10px"
      Width="74px"
      v-if="C_ChoosedOrgan"
    />
    <!-- <ColoredTitle
      Color="#6d03b7"
      :Title="'Not Selected'"
      Top="5.4px"
      Left="86px"
      FontSize="10px"
      Width="74px"
      v-if="!C_ChoosedOrgan"
    /> -->
    <div class="SIheader bvsheader">
      <div class="spacediv" />
      Organ View
    </div>

    <div class="OrganView">
      <component :is="C_ChoosedOrgan" v-if="C_ChoosedOrgan"></component>
      <div class="OrganNotChosen CenteredFlex" v-else>
        <div class="Part P1"></div>
        <div class="Part P2"></div>
        <div class="Part P3"></div>
        <div class="Part P4"></div>
        <div class="Part P5"></div>
        <div class="Part P6"></div>
        <div class="Part P7"></div>
        <div class="P8"></div>
      </div>
    </div>

    <OrganStatus />
  </div>
</template>

<script>
import ColoredTitle from "../ColoredTitle.vue";
import OrganStatus from "./OrganStatus.vue";
import Heart from "../../Torso/Chest/Heart/Heart.vue";
import ThePancreas from "../../Torso/TorsoLayers/AnteriorVesiralLayer/AVLAbdomen/ThePancreas.vue";
export default {
  components: { ColoredTitle, OrganStatus, Heart, ThePancreas },
  name: "OrganDisplay",

  data() {
    return {
      OrganName: "",
    };
  },
  computed: {
    C_ChoosedOrgan() {
      return this.$store.state.BodyDashBoard.OrganDisplay.ChoosedOrgan
        .OrganName;
    },
    C_ChoosedOrganNameToDisplay() {
      return this.$store.state.BodyDashBoard.OrganDisplay.ChoosedOrgan
        .OgranNameToDisplayOnOrgansMenu;
    },
  },
};
</script>

<style>
.BodyDBOrganDisplay {
  position: relative;
  width: 269px;
  height: 501px;
  grid-column: span 1;
  grid-row: span 2;
  background-color: rgb(34, 37, 39);
  border: var(--DBsectionBorder);
  z-index: 15;
  transition: all 0.2s;
  transform: translate(9px, -3px);
}
.BodyDBOrganDisplay .OrganView {
  position: relative;
  width: 100%;
  height: 52.1%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.BodyDBOrganDisplay .OrganNotChosen {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.BodyDBOrganDisplay .OrganNotChosen .Part {
  background-color: rgb(73, 71, 71);
}

.BodyDBOrganDisplay .OrganNotChosen .P1 {
  width: 70px;
  height: 312px;
  transform: translate(-12px, -39px) rotate(44deg);
  background: -webkit-linear-gradient(
    bottom,
    #2e3132,
    #25292a,
    #26292a,
    #272a2c,
    #222527
  );
}
.BodyDBOrganDisplay .OrganNotChosen .P2 {
  width: 60px;
  height: 172px;
  /* border: 1px blue solid; */
  transform: translate(-30.3px, -6px) rotate(44deg);
  background: -webkit-linear-gradient(
    top,
    #222527,
    #282c2e,
    #2d3031,
    #282b2c,
    #222527
  );
}

.BodyDBOrganDisplay .OrganNotChosen .P3 {
  width: 80px;
  height: 369px;
  transform: translate(-6px, -15px) rotate(44deg);
  background: -webkit-linear-gradient(
    top,
    #2e3132,
    #242728,
    #2e3132,
    #191c1ee6,
    #222527
  );
}

.BodyDBOrganDisplay .OrganNotChosen .P4 {
  width: 80px;
  height: 400px;
  /* border: 1px blue solid; */
  transform: translate(-8.3px, 4px) rotate(44deg);
  background: -webkit-linear-gradient(
    top,
    #222527,
    #2b2e30eb,
    #313334,
    #1c2022ba,
    #222527
  );
}

.BodyDBOrganDisplay .OrganNotChosen .P5 {
  width: 70px;
  height: 400px;
  /* border: 1px blue solid; */
  transform: translate(13.7px, -6px) rotate(44deg);
  background: -webkit-linear-gradient(
    top,
    #222527,
    #222527,
    #2d3031,
    #282b2c,
    #222527
  );
}

.BodyDBOrganDisplay .OrganNotChosen .P6 {
  width: 70px;
  height: 400px;
  /* border: 1px blue solid; */
  transform: translate(27.7px, -6px) rotate(44deg);
  background: -webkit-linear-gradient(
    top,
    #222527,
    #282c2e,
    #2d3031,
    #222527,
    #222527
  );
}

.BodyDBOrganDisplay .OrganNotChosen .P7 {
  width: 70px;
  height: 400px;
  /* border: 1px blue solid; */
  transform: translate(42.7px, -6px) rotate(44deg);
  background: -webkit-linear-gradient(
    top,
    #222527,
    #282c2e,
    #37393a,
    #282b2c,
    #222527
  );
}

.BodyDBOrganDisplay .OrganNotChosen .P8 {
  position: absolute;
  color: #a7a7a7;
  font-size: 12px;
}
</style>