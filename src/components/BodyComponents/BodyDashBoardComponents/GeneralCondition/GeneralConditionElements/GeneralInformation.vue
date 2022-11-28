<template>
  <div class="GeneralInformation">
    <div class="GeneralInformationIconDiv">
      <GeneralInformationIcon />
    </div>
    <div class="GeneralInformationDiscriptionDiv">
      <div class="GeneralDiscription">
        <div class="StartIcon GDE" />
        <div class="Age GDE">{{ Age }} y</div>
        <div class="MaritalState GDE">{{ MaritalState }}</div>
        <div class="Gender GDE">{{ Gender }}</div>
      </div>
      <div class="RestOfGeneralDiscription">
        <div class="StartIcon GDE" />
        <div class="Residince GDE">Residince : {{ Residence }}</div>

        <div class="Ocupation GDE">
          <div class="StartIcon GDE" />
          Ocupation : {{ Ocupation }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GeneralInformationIcon from "./GeneralConditionIcons/GeneraInformationIcon.vue";

export default {
  name: "GeneralInformation",
  components: { GeneralInformationIcon },
  data() {
    return {
      Age: 24,
      MaritalState: "Single",
      Gender: "Male",
      Residence: "Oxford",
      Ocupation: "University Student",
    };
  },
};
</script>

<style>
.GeneralInformation {
  position: relative;
  grid-column: span 2;
  display: grid;
  grid-template-columns: 25% auto;
  justify-items: center;
  align-items: center;
  border-bottom: var(--DBsectionBorder);
  align-content: center;
  align-items: stretch;
}

.GeneralInformation .GeneralInformationIconDiv {
  grid-column: span 1;
  transform: translate(-31px, 11px);
}

.GeneralInformation .GeneralInformationDiscriptionDiv {
  grid-column: span 1;
  display: grid;
  grid-template-rows: 50% 50%;
  justify-items: start;
  color: white;
  transform: translate(-42px, -3px);
  font-size: 11.5px;
  align-content: center;
  align-items: center;
}

.GeneralInformation .GeneralInformationDiscriptionDiv .GDE {
  display: inline-block;
  margin: 0 3px;
}

.GeneralInformation .GeneralInformationDiscriptionDiv .GeneralDiscription {
  grid-row: span 1;
  transform: translateY(9px);
}

.GeneralInformation
  .GeneralInformationDiscriptionDiv
  .RestOFGeneralDiscription {
  grid-row: span 1;
  transform: translateX(-34px);
  font-size: 11px;
}

.GeneralInformation .GeneralInformationDiscriptionDiv .StartIcon {
  width: 6px;
  height: 6px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 0 3px 1px #7c7c7c, 0 0 1px 1px #5a5959;
  transform: translate(-1px, -1px);
}

.GeneralInformation .Age {
  transform: translateX(3px);
}

.GeneralInformation .MaritalState {
  transform: translateX(3px);
}

.GeneralInformation .Gender {
  transform: translateX(3px);
}

.GeneralInformation .Residince {
  transform: translateX(0px);
}

.GeneralInformation .Ocupation {
  transform: translateX(16px);
}
</style>