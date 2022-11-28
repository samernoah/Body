<template>
  <div class="LLcomp">
    <div class="leftleg" @click.self="showInfo"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Info: { Name: "Left Leg", Add: "Also Important" },
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
.LLcomp .leftleg {
  position: absolute;
  left: 51.5%;
  top: 58%;
  width: 15%;
  padding: 28% 0;
  border: var(--specialborder);
  border-radius: var(--BodyBorderRadiues);
  transition: transform 0.3s;
}
.LLcomp .leftleg:hover {
  transform: scale(var(--viewscale));
}
</style>