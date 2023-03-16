<template>
  <div class="OrganStatus">
    <div class="OrganStatusHeader CenteredFlex">
      <div class="spacediv" />
      Organ Status
    </div>
    <OrganStatusView v-if="C_ChoosedOrgan">
      <div v-for="stat of C_ChoosedOrganStatus" :key="stat">
        <p>{{ stat.name }} : {{ stat.value }} {{ stat.unit }}</p>
      </div>
    </OrganStatusView>
  </div>
</template>

<script>
import OrganStatusView from "./OrganStatusView.vue";

export default {
  name: "OrganStatus",
  components: { OrganStatusView },
  computed: {
    C_ChoosedOrgan() {
      return this.$store.state.BodyDashBoard.OrganDisplay.ChoosedOrgan
        .OrganName;
    },
    C_ChoosedOrganStatus() {
      let ChosenOrgan = this.C_ChoosedOrgan || null;
      if (ChosenOrgan !== null) {
        return this.$store.state.Body.Organs[ChosenOrgan];
      }
    },
  },
};
</script>

<style>
.OrganStatus {
  position: relative;
  width: 100%;
  height: 35%;
  border-top: var(--DBsectionBorder);
}
.OrganStatus .OrganStatusHeader {
  width: 100%;
  height: 30px;
  border-bottom: var(--DBsectionBorder);
  color: white;
  font-size: 11.5px;
  justify-content: flex-start;
}
</style>