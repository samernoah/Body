<template>
  <div class="ThePancreas CenteredFlex">
    <div class="PancreasHead"></div>
    <div class="PancreasBody"></div>
  </div>
</template>

<script>
export default {
  name: "ThePancreas",
};
</script>

<style>
.ThePancreas {
  position: relative;
}
.ThePancreas .PancreasHead {
  width: 40px;
  height: 40px;
  border: var(--specialborder);
  border-radius: 44%;
}
.ThePancreas .PancreasBody {
  left: 17px;
  top: -15px;
  width: 78px;
  height: 25px;
  border: var(--specialborder);
  border-radius: 0 10px 50%;
  transform: rotate(-21deg);
  position: absolute;
  background-color: rgb(34 37 39);
  border-left-color: rgb(34 37 39);
}
.torso .ThePancreas {
  position: absolute;
  top: 45px;
  left: 22px;
  transform: scale(0.2);
}
.expandedtorso .ThePancreas {
  position: absolute;
  top: 123px;
  left: 86px;
  transform: scale(0.4);
}
.OrganView .ThePancreas {
  transform: scale(1.5) translate(-23px, 4px);
}
</style>