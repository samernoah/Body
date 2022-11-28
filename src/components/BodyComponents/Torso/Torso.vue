<template>
  <div class="Torsocomp">
    <div
      class="torso"
      @click="showInfo(), expand()"
      ref="torso"
      :class="{ expandedtorso: ExpandedTorso, torso: !ExpandedTorso }"
    >
      <div
        class="torsocontent"
        :class="{ visible: ExpandedHeart, notvisible: !ExpandedHeart }"
        ref="tc"
      >
        <Heart />
        <ThePancreas />
      </div>
    </div>
  </div>
</template>

<script>
import Heart from "./Chest/Heart/Heart.vue";
import ThePancreas from "./TorsoLayers/AnteriorVesiralLayer/AVLAbdomen/ThePancreas.vue";
export default {
  components: { Heart, ThePancreas },
  data() {
    return {
      Info: { Name: "Torso", Add: "Also Important" },
    };
  },
  computed: {
    HeartRate() {
      return { Name: "Torso", Add: this.$store.state.Body.HeartRate };
    },
    ExpandedTorso() {
      return this.$store.state.Components.Torso.expanded;
    },
    ExpandedHeart() {
      return this.$store.state.Components.Heart.expanded;
    },
    ComponentsArray() {
      return this.$store.state.ComponentsArray;
    },
    ComponentsArraylength() {
      return this.$store.state.ComponentsArray.length;
    },
  },
  methods: {
    showInfo() {
      this.$store.commit("ChangingTheInfo", this.Info);
    },
    expand() {
      if (this.ComponentsArraylength === 0 && this.ExpandedTorso === false) {
        this.$store.commit("ChangeExpandingState", ["true", "Torso"]);
        this.$store.commit("ManegingTheComponentsArray", ["Add", "Torso"]);
      }
    },
  },
  mounted() {
    window.CA = this.ComponentsArray;
    this.$store.state.Components.Torso.component = this.$el.firstChild;
    this.$store.state.Components.Torso.expanded = false;
  },
};
</script>

<style>
.torso {
  position: absolute;
  left: 73px;
  top: 70px;
  width: 100px;
  height: 136px;
  border: var(--specialborder);
  border-radius: 20px;
  transition: all 0.2s;
}
.Torsocomp .torso:hover {
  transform: scale(1.02);
}
.Torsocomp .torso .torsocontent {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transition: opacity 0.5s;
  z-index: 16;
}

.Torsocomp .torso .torsocontent:hover {
  opacity: 1;
}
.Torsocomp .expandedtorso {
  position: absolute;
  border: var(--specialborder);
  transition: all 0.2s;
  background-color: rgb(34 37 39);
  width: 94%;
  height: 94%;
  top: 5px;
  left: 3px;
  border-radius: 5px;
  z-index: 15;
}
.visible {
  opacity: 1;
}
.notvisible {
  opacity: 0;
}
</style>