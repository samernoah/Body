<template>
  <div class="Complains">
    <ComplainsIcon />
    <div class="ComplainsDiscription">
      <div class="ComplainsState">{{ ComplainsState }}</div>
      <div class="GCScale">
        <div class="StartIcon" />
        {{ GeneralLook }} .
      </div>
    </div>
  </div>
</template>

<script>
import ComplainsIcon from "./GeneralConditionIcons/ComplainsIcon.vue";

export default {
  name: "Complains",
  components: { ComplainsIcon },
  data() {
    return {
      ComplainsState: "No Complain",
      GeneralLook: "Calm & Relaxed",
    };
  },
};
</script>

<style>
.Complains {
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

.Complains .ComplainsDiscription {
  grid-column: span 1;
  width: 100%;
  height: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-rows: 50% 50%;
}
.ComplainsDiscription .ComplainsState {
      color: white;
    font-size: 10px;
    font-family: "Lucida Sans";
    width: 68px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    background: -webkit-linear-gradient(top left ,rgb(129 86 33),rgb(159 102 32),rgb(114 76 19));
    transform: translate(7px, 4px);
    grid-row: span 1;
    border: 1px #9d6327c7 solid;
}
.ComplainsDiscription .GCScale {
  grid-row: span 1;
  color: white;
  font-size: 11px;
  transform: translate(5.5px, -3px);
}
</style>