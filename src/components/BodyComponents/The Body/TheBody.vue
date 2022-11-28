<template>
  <div class="body">
    <transition name="backbutton">
      <div
        class="backbutton"
        v-if="ComponentsArrayOcupied"
        @click="BackOneExpantion"
      >
        Back
      </div>
    </transition>

    <Head />

    <div class="upperbody">
      <LeftArm />
      <Torso />
      <RightArm />
    </div>

    <div class="lowerbody">
      <LeftLeg />
      <RightLeg />
    </div>
  </div>
</template>

<script>
import Head from "@/components/BodyComponents/Head/Head.vue";
import Torso from "@/components/BodyComponents/Torso/Torso.vue";
import LeftArm from "@/components/BodyComponents/LeftArm/LeftArm.vue";
import RightArm from "@/components/BodyComponents/RightArm/RightArm.vue";
import RightLeg from "@/components/BodyComponents/RightLeg/RightLeg.vue";
import LeftLeg from "@/components/BodyComponents/LeftLeg/LeftLeg.vue";

export default {
  components: { Head, Torso, RightArm, LeftArm, RightLeg, LeftLeg },
  name: "Body",
  data() {
    return {};
  },
  computed: {
    ComponentsArray() {
      return this.$store.state.ComponentsArray;
    },
    ComponentsArrayOcupied() {
      return this.$store.state.ComponentsArray.length > 0;
    },
    infoshow() {
      return this.$store.state.InfoOfSellectedDivision.InfoShow;
    },
    ComponentsArrayLastComponent() {
      const CALC = this.ComponentsArray[this.ComponentsArray.length - 1];
      return CALC;
    },
  },
  methods: {
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
.body {
  position: relative;
  width: 250px;
  height: 375px;
  background-color: rgb(34, 37, 39);

  z-index: 15;
  transition: all 0.2s;
  transform-style: preserve-3d;
}

.backbutton {
  color: white;
  font-size: 11px;
  font-family: "Lucida Sans";
  background-color: rgb(0 116 163);
  width: 45px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: 3px;
  transform: translate(220%, -129%);
  transition: all 0.3s;
  z-index: 20;
}
.backbutton:hover {
  box-shadow: 0 0 1px 1px white;
  cursor: pointer;
}

.backbutton-enter-from,
.backbutton-leave-to {
  opacity: 0;
  transform: scale(0.1);
  transform: translate(220%, -129%);
}

.backbutton-enter-active,
.backbutton-leave-active {
  transition: all 0.1s ease-in;
}
</style>