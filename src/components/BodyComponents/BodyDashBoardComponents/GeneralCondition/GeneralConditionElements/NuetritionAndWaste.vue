<template>
  <div class="NAW">
    <NuetritionAndWasteIcon />
    <div class="NAWDiscription">
      <div class="NWAState">{{ NWAState }}</div>
      <div class="UO">
        <div class="StartIcon" />
        U/O : {{ UO }} m/h
      </div>
    </div>
  </div>
</template>

<script>
import NuetritionAndWasteIcon from "./GeneralConditionIcons/NuetritionAndWasteIcon.vue";

export default {
  name: "NAW",
  components: { NuetritionAndWasteIcon },
  data() {
    return {
      NWAState: "3 Meals/d",
      UO: "250",
    };
  },
};
</script>

<style>
.NAW {
  grid-column: span 1;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 30% auto;
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;
  border-right: var(--DBsectionBorder);
  border-bottom: var(--DBsectionBorder);
}

.NAW .NAWDiscription {
  grid-column: span 1;
  width: 100%;
  height: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-rows: 50% 50%;
  transform: translateY(3px);
}
.NAWDiscription .NWAState {
  color: white;
  font-size: 11px;
  font-family: "Lucida Sans";
  width: 68px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  background: -webkit-linear-gradient(
    top left,
    rgb(101 24 112),
    rgb(142 32 159),
    rgb(99 17 112)
  );
  transform: translate(7px, 4px);
  grid-row: span 1;
  border: 1px #801193 solid;
}
.NAWDiscription .UO {
  grid-row: span 1;
  color: white;
  font-size: 11px;
  transform: translate(5.5px, -6px);
}
</style>