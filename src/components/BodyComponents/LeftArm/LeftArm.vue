<template>
  <div class="LAcomp">
    <div class="leftarm" @click.self="showInfo"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Info: { Name: "Left Arm", Add: "Also Important" },
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
.LAcomp .leftarm {
  position: absolute;
  left: 73%;
  top: 20%;
  width: 10%;
  padding: 24% 0;
  border: var(--specialborder);
  border-radius: var(--BodyBorderRadiues);
  transition: transform 0.3s;
}
.LAcomp .leftarm:hover {
  transform: scale(var(--viewscale));
}
</style>