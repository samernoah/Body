<template>
  <div class="RAcomp">
    <div class="rightarm" @click.self="showInfo"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Info: { Name: "Right Arm", Add: "Also Important" },
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
.RAcomp .rightarm {
  position: absolute;
  left: 15%;
  top: 20%;
  width: 10%;
  padding: 24% 0;
  border: var(--specialborder);
  border-radius: var(--BodyBorderRadiues);
  transition: transform 0.3s;
}
.RAcomp .rightarm:hover {
  transform: scale(var(--viewscale)) translate3d(0, 0, 50px);
}
</style>