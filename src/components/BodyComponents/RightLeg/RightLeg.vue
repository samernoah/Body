<template>
  <div class="RLcomp">
    <div class="rightleg" @click.self="showInfo"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Info: { Name: "Right Leg", Add: "Also Important" },
    };
  },
  methods: {
    showInfo() {
      this.$store.commit("ChangingTheInfo", this.Info);
    },
  },
};
</script>

<style>
.RLcomp .rightleg {
  position: absolute;
  left: 33%;
  top: 58%;
  width: 15%;
  padding: 28% 0;
  border: var(--specialborder);
  border-radius: var(--BodyBorderRadiues);
  transition: transform 0.3s;
}
.RLcomp .rightleg:hover {
  transform: scale(var(--viewscale));
}
</style>