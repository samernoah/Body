<template>
  <div class="SideBar">
    <div class="SpaceDivToStartAfterTheLogo"></div>
    <div
      class="link BodyControl"
      @click="activate('Body')"
      :class="{ ActiveLinkIconBGC: ActiveBodyIcon }"
    >
      <BodyLinkIcon />
    </div>

    <div
      class="link BodyControl"
      @click="activate('Organ')"
      :class="{ ActiveLinkIconBGC: ActiveOrganIcon }"
    >
      <OrganLinkIcon />
    </div>

    <div
      class="link BodyControl"
      @click="activate('Values')"
      :class="{ ActiveLinkIconBGC: ActiveValuesIcon }"
    >
      <ValuesLinkIcon />
    </div>
  </div>
</template>

<script>
import BodyLinkIcon from "./LinkIcons/BodyLinkIcon.vue";
import OrganLinkIcon from "./LinkIcons/OrganLinkIcon.vue";
import ValuesLinkIcon from "./LinkIcons/ValuesLinkIcon.vue";
export default {
  components: { BodyLinkIcon, OrganLinkIcon, ValuesLinkIcon },
  data() {
    return {
      SBLs: [
        {
          Icon: "BodyLinkIcon",
          Name: "Body",
          Path: "/",
        },
        {
          Icon: "LinkIcon",
          Name: "B",
          Path: "/body",
        },
        {
          Icon: "LinkIcon",
          Name: "C",
          Path: "/courses",
        },
        {
          Icon: "LinkIcon",
          Name: "CT",
          Path: "/ComponentTest",
        },
        {
          Icon: "LinkIcon",
          Name: "A",
          Path: "/about",
        },
      ],
    };
  },
  methods: {
    activate(LinkName) {
      this.$store.commit("SelectActiveIcon", LinkName);
    },
  },
  computed: {
    ActiveBodyIcon() {
      return this.$store.state.BodyDashBoardActiveIcon.ActiveIcon === "Body";
    },
    ActiveOrganIcon() {
      return this.$store.state.BodyDashBoardActiveIcon.ActiveIcon === "Organ";
    },
    ActiveValuesIcon() {
      return this.$store.state.BodyDashBoardActiveIcon.ActiveIcon === "Values";
    },
  },
};
</script>

<style>
.SideBar {
  position: absolute;
  height: 100vh;
  width: 45px;
  left: 0;
  border-radius: 10px 0 0 10px;
  background-color: rgb(34, 37, 39);
  overflow: hidden;
  z-index: 15;
  border-right: 1px rgb(48, 51, 54) solid;
  grid-area: SideBar;
}

.router-link-exact-active {
  border-radius: 5px;
  background-color: rgb(90, 177, 211);
}
.link {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  margin: 12px auto;
  border-radius: 5px;
  color: black;
  transition: all 0.1s ease-in;
  border: 1px #222527 solid;
}
.ActiveLinkIconBGC {
  background: -webkit-linear-gradient(top left, #6fc6d5, #0a6776f2);
  border: 1px #176687 solid;
}

.SideBar .SpaceDivToStartAfterTheLogo {
  width: 100%;
  height: 40px;
  margin-top: 16px;
}
</style>