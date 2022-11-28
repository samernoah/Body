<template>
  <h1>Component Test View</h1>
  <div class="ComponentTestView">
    <ThePancreas />
  </div>
</template>

<script>
import ThePancreas from "../components/BodyComponents/Torso/TorsoLayers/AnteriorVesiralLayer/AVLAbdomen/ThePancreas.vue";

export default {
  components: { ThePancreas },
};
</script>

<style>
.ComponentTestView {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>