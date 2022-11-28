
<template>
  <div class="GeneralInformationIcon CenteredFlex">
    <div class="Part P1"></div>
    <div class="Part P2"></div>
  </div>
  <div class="GeneralInformationIconTitle">Personal Information</div>
</template>

<script>
export default {
  name: "GeneralInformationIcon",
};
</script>

<style>
.GeneralInformationIcon {
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 32px;
  border: 1px #75acb954 solid;

  background: -webkit-linear-gradient(
    top left,
    rgb(80 142 149 / 51%),
    rgb(45 142 147 / 59%)
  );
}

.GeneralInformationIcon .Part {
  background-color: #afafaf;
  position: absolute;
}

.GeneralInformationIcon .P1 {
  width: 27px;
  height: 14px;
  border: 1px #669ea5ab solid;
  border-radius: 10px 10px 14px 14px;
  transform: translate(0px, 7px);
}

.GeneralInformationIcon .P2 {
  width: 14px;
  height: 14px;
  border: 1px #759da791 solid;
  border-radius: 14px;
  transform: translate(0px, -8px);
  box-shadow: 0 0 2px 3px #648f8782;
}

.GeneralInformation .GeneralInformationIconTitle {
  position: absolute;
  /* display: flex; */
  text-align: start;
  color: white;
  font-size: 11px;
  transform: translate(56px, -40px);
}
</style>