<template>
  <div class="Counciues">
    <CounciuesIcon />
    <div class="CounciuesDiscription">
      <div class="CounciuesState">{{ CounciuesState }}</div>
      <div class="GCScale">
        <div class="StartIcon GDE" />
        GCS : {{ GCS }}
      </div>
    </div>
  </div>
</template>

<script>
import CounciuesIcon from "./GeneralConditionIcons/CounciuesIcon.vue";

export default {
  name: "Counciues",
  components: { CounciuesIcon },
  data() {
    return {
      CounciuesState: "Counciues",
      GCS: "15/15",
    };
  },
};
</script>

<style>
.Counciues {
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

.Counciues .CounciuesDiscription {
  grid-column: span 1;
  width: 100%;
  height: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-rows: 50% 50%;
  transform: translateY(3px);
}
.CounciuesDiscription .CounciuesState {
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
    rgb(24 43 112),
    rgb(32 77 159),
    rgb(17 52 112)
  );
  transform: translate(7px, 4px);
  grid-row: span 1;
  border: 1px #114493 solid;
}
.CounciuesDiscription .GCScale {
  grid-row: span 1;
  color: white;
  font-size: 11px;
  transform: translate(5.5px, -6px);
}
</style>