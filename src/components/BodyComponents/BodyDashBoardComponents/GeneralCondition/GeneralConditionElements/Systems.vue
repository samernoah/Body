<template>
  <div class="Systems">
    <SystemsIcon />
    <div class="SystemsDiscription">
      <div class="SystemsState">{{ SystemsState }}</div>
      <div class="GCScale">
        <div class="StartIcon" />
        {{ GCS }}
      </div>
    </div>
  </div>
</template>

<script>
import SystemsIcon from "./GeneralConditionIcons/SystemsIcon.vue";

export default {
  name: "Systems",
  components: { SystemsIcon },
  data() {
    return {
      SystemsState: "No Acute Prst.",
      GCS: "No Chronic State",
    };
  },
};
</script>

<style>
.Systems {
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

.Systems .SystemsDiscription {
  grid-column: span 1;
  width: 100%;
  height: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-rows: 50% 50%;
}
.SystemsDiscription .SystemsState {
  color: white;
  font-size: 10px;
  font-family: "Lucida Sans";
  width: 73px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  background: -webkit-linear-gradient(
    top left,
    rgb(25 112 24),
    rgb(34 159 32),
    rgb(25 112 17)
  );
  transform: translate(7px, 4px);
  grid-row: span 1;
  border: 1px #129311c7 solid;
}
.SystemsDiscription .GCScale {
  grid-row: span 1;
  color: white;
  font-size: 11px;
  transform: translate(5.5px, -3px);
}
</style>