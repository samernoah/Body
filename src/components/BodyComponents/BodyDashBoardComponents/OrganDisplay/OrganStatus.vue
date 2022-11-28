<template>
  <div class="OrganStatus">
    <div class="OrganStatusHeader CenteredFlex">
      <div class="spacediv" />
      Organ Status
    </div>
    <OrganStatusView />
  </div>
</template>

<script>
import OrganStatusView from "./OrganStatusView.vue";

export default {
  name: "OrganStatus",
  components: { OrganStatusView },
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