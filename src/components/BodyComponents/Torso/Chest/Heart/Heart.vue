<template>
  <div
    class="HeartComp"
    :class="{ expandedHeart: ExpandedHeart, HeartComp: !ExpandedHeart }"
  >
    <div
      class="Heart"
      ref="heart"
      @click.self="expand"
      @mouseover="MouseOverHeart"
    ></div>
    <RightV />
  </div>
</template>

<script>
import RightV from "./RightV.vue";
export default {
  components: { RightV },
  name: "Heart",
  data() {
    return {};
  },
  computed: {
    HeartRate() {
      return this.$store.state.Body.HeartRate;
    },
    ExpandedHeart() {
      return this.$store.state.Components.Heart.expanded;
    },
    ExpandedTorso() {
      return this.$store.state.Components.Torso.expanded;
    },
    ComponentsArray() {
      return this.$store.state.ComponentsArray;
    },
    ComponentsArraylength() {
      return this.$store.state.ComponentsArray.length;
    },
  },
  methods: {
    expand() {
      if (
        this.ComponentsArraylength === 1 &&
        this.ComponentsArray.includes("Torso") &&
        this.ExpandedHeart === false
      ) {
        console.log("hello");
        this.$store.commit("ChangeExpandingState", ["true", "Heart"]);
        this.$store.commit("ManegingTheComponentsArray", ["Add", "Heart"]);
      }
    },
    MouseOverHeart() {
      if (this.ComponentsArraylength === 1) {
        console.log("hello");
      }
    },
  },

  mounted() {
    this.$store.state.Components.Heart.component = this.$el.firstChild;
    this.$store.state.Components.Heart.expanded = false;
    // this.$refs.heart.style.setProperty('animation' , `heartb ${60/this.HeartRate}s ease-in-out 0s infinite reverse`);
  },
};
</script>

<style>
.HeartComp {
  transition: all 0.3s;
}
.Heart {
  position: relative;
  width: 22px;
  height: 22px;
  border: 3px solid skyblue;
  border-radius: 5px;
  transition: all 0.3s;
  animation: heartb 0.9s ease-in-out 0s infinite reverse;
}
.HeartComp .Heart {
  position: absolute;
  top: 10%;
  left: 50%;
  width: 22px;
  height: 22px;
  border: var(--specialborder);
  border-radius: 5px;
  transition: all 0.3s;
  animation: heartb 0.9s ease-in-out 0s infinite reverse;
}

.expandedHeart .Heart {
  position: absolute;
  background-color: rgb(46, 49, 51);
  width: 99%;
  height: 98%;
  top: 0px;
  border-radius: 5px;
  z-index: 16;
  animation: heartbe 0.9s ease-in-out 0s infinite reverse;
  transition: all 0.3s;
}

.OrganView .Heart {
  background-color: rgb(46, 49, 51);
  width: 70%;
  height: 70%;

  border-radius: 5px;
  z-index: 16;
  animation: heartb 0.9s ease-in-out 0s infinite reverse;
  transition: all 0.3s;
}

@keyframes heartb {
  0% {
    transform: translate(-50%, 0) scale(1);
  }
  20% {
    transform: translate(-50%, 0) scale(0.8);
  }
  35% {
    transform: translate(-50%, 0) scale(1);
  }
  100% {
    transform: translate(-50%, 0) scale(1);
  }
}
@keyframes heartbe {
  0% {
    box-shadow: 0 0 3px 5px skyblue;
    transform: translate(-49%, 0);
  }
  20% {
    box-shadow: 0 0 0 0 skyblue;
    transform: translate(-49%, 0);
  }
  35% {
    box-shadow: 0 0 3px 5px skyblue;
    transform: translate(-49%, 0);
  }
  100% {
    box-shadow: 0 0 3px 5px skyblue;
    transform: translate(-49%, 0);
  }
}
</style>