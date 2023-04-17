<template>
  <div class="MainBodyDashBoardGridContainer">
    <SideBar />

    <TopBar />

    <div class="bodycomp" ref="body">
      <div class="DBInfo">
        <ControlPanel @SimulationButtonPressed="SimulationStarterFunction(5)" />

        <OrganDisplay />
        <OrganDisplayOptionsMenu />

        <BodyDashBoardChart class="Chart1 bvsection" />

        <BodyDashBoardChart class="Chart2 bvsection" />

        <ValuesDisplay />
        <ValuesDisplayOptionsMenu />
      </div>

      <div class="DBMain">
        <TheBodyView />

        <GeneralStatus />
        <GeneralCondition />
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from "../components/BodyComponents/BodyDashBoardComponents/TopBar/TopBar.vue";
import SideBar from "../components/BodyComponents/BodyDashBoardComponents/SideBar/SideBar.vue";
import ControlPanel from "../components/BodyComponents/BodyDashBoardComponents/ControlPanel/ControlPanel.vue";
import TheBodyView from "@/components/BodyComponents/BodyDashBoardComponents/TheBodyView/TheBodyView.vue";
import GeneralStatus from "@/components/BodyComponents/BodyDashBoardComponents/GeneralStatus/GeneralStatus.vue";
import BodyDashBoardChart from "../components/BodyComponents/BodyDashBoardComponents/BodyDashBoardChart.vue";
import OrganDisplay from "../components/BodyComponents/BodyDashBoardComponents/OrganDisplay/OrganDisplay.vue";
import OrganDisplayOptionsMenu from "../components/BodyComponents/BodyDashBoardComponents/OrganDisplay/OrganDisplayOptionsMenu.vue";
import ValuesDisplay from "../components/BodyComponents/BodyDashBoardComponents/ValuesDisplay/ValuesDisplay.vue";
import ValuesDisplayOptionsMenu from "../components/BodyComponents/BodyDashBoardComponents/ValuesDisplay/ValuesDisplayOptionsMenu.vue";
import GeneralCondition from "../components/BodyComponents/BodyDashBoardComponents/GeneralCondition/GeneralCondition.vue";
import ColoredTitle from "../components/BodyComponents/BodyDashBoardComponents/ColoredTitle.vue";
import SimulationStarterFunction from "../BodySimulation/MainMethods/SimulationStarterFunction";

export default {
  components: {
    TopBar,
    SideBar,
    ControlPanel,
    TheBodyView,
    GeneralStatus,
    BodyDashBoardChart,
    OrganDisplay,
    OrganDisplayOptionsMenu,
    ValuesDisplay,
    ValuesDisplayOptionsMenu,
    GeneralCondition,
    ColoredTitle,
  },
  name: "Body",
  setup() {
    return { SimulationStarterFunction };
  },
  data() {
    return {
      Title: "Body",
      wanted: false,
    };
  },
  computed: {
    ComponentsArray() {
      return this.$store.state.ComponentsArray;
    },
    ComponentsArrayOcupied() {
      return this.$store.state.ComponentsArray.length > 0;
    },
    ComponentsArrayLastComponent() {
      const CALC = this.ComponentsArray[this.ComponentsArray.length - 1];
      return CALC;
    },
  },
  methods: {
    SimulationActivation() {
      console.log("BodyViewComponent");
    },
    updateheartrate(amount) {
      let HRS =
        this.$store.state.Components.BodyInfo.component.firstChild.children[1]
          .innerText;
      let test = Boolean(parseInt(HRS) / 2);
      this.$store.commit("Updateheartrate", amount);
      if (test) {
        this.$store.state.Components.BodyInfo.component.firstChild.children[1].innerText =
          this.$store.state.Body.HeartRate;
      }
    },
    BackOneExpantion() {
      this.$store.commit("ChangeExpandingState", [
        "false",
        this.ComponentsArrayLastComponent,
      ]);
      this.$store.commit("ManegingTheComponentsArray", [
        "Remove",
        this.ComponentsArrayLastComponent,
      ]);
    },
  },
  mounted() {
    document.documentElement.style.setProperty(
      "--HeartRate",
      this.$store.state.HeartRate
    );
  },
};
</script>

<style>
.MainBodyDashBoardGridContainer {
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: 3em auto;
  grid-template-rows: 3em auto;
  grid-template-areas:
    "TopBar TopBar "
    "SideBar BodyDashBoard ";
}

.bodycomp {
  position: relative;
  background: rgb(16, 18, 20);
  border-radius: 15px;
  overflow: auto;
  grid-area: BodyDashBoard;
  display: grid;
  grid-template-columns: auto 32em;
  grid-template-areas: "DBInfo DBMain";
}
.DBInfo {
  grid-area: DBInfo;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 8em auto auto;
  justify-items: center;
  align-items: center;
}
.DBMain {
  grid-area: DBMain;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    "BodyInfo Body"
    "CurrentOps CurrentOps";
}
.bodycomp h1 {
  color: #587b9e;
  position: relative;
  display: block;
}
.bvsheader {
  height: 30px;
  border-bottom: var(--DBsectionBorder);
  color: white;
  text-align: left;
  font-size: 11.5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.bvsection {
  position: relative;
  background-color: rgb(34, 37, 39);
  border: var(--DBsectionBorder);
  z-index: 15;
  transition: all 0.2s;
  border-radius: 5px;
}
.bvsection2 {
  position: relative;
  background-color: rgb(34, 37, 39);
  z-index: 15;
  transition: all 0.2s;
}
.bvsheader2 {
  height: 30px;
  background-color: rgb(28 30 32);
  color: white;
  text-align: left;
  font-size: 11.5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.SideInfo {
  width: 260px;
  height: 280px;
  grid-column: span 1;
  transform: translate(10px, 0);
}
.Chart1 {
  grid-column: span 1;
  transform: translate(8px, -2px);
}
.Chart2 {
  grid-column: span 1;
  transform: translate(-2px, -2px);
}

.BottomInfo2 {
  width: 284px;
  height: 208px;
  grid-column: span 1;
  justify-self: stretch;
  transform: translate(-10px, 0);
}

.bodysection .bsheader {
  width: 100%;
  border-top: var(--DBsectionBorder);
  border-bottom: var(--DBsectionBorder);
}
.spacediv {
  display: inline-block;
  width: 13px;
}

.sideviewbody {
  transform: rotateX(-7deg) rotateY(-28deg) rotateZ(0deg) scale(0.8)
    translate(-6%, -4%);
}

.infoBox-enter-from,
.infoBox-leave-to {
  width: 0;
  opacity: 0;
  transform: translate(-70%, 0);
}
.infoBox-enter-active,
.infoBox-leave-active {
  transition: all 0.15s ease-in;
}

.bodyAnimation-enter-from,
.bodyAnimation-leave-to {
  opacity: 0;
  transform: translateX(30%);
}
.bodyAnimation-enter-active,
.bodyAnimation-leave-active {
  transition: all 0.3s ease-in;
}
.TheBodyTopDivForActivity {
  position: absolute;
  width: 99%;
  height: 92%;
  z-index: 16;
}

.bodycomp::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  background-color: #2a2a2a;
}

.bodycomp::-webkit-scrollbar-thumb {
  background-color: rgb(32 131 145);
  border: 1px #1e1c5c solid;
  border-radius: 10px;
}
</style>