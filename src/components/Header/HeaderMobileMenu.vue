`<template>
  <div
    :class="{
      Mobile_HeaderMobileMenu: this.MobileView === true,
      HeaderMobileMenu: this.MobileView === false,
    }"
    @click="HeaderMenuClick"
  >
    <div class="BugerMenuBars BMB1" ref="BMB1"></div>
    <div class="BugerMenuBars BMB2" ref="BMB2"></div>
    <div class="BugerMenuBars BMB3" ref="BMB3"></div>
  </div>
</template>

<script>
export default {
  methods: {
    HeaderMenuClick() {
      console.log(this.$store.state.Components.Header.HeaderMenu);
      this.$refs.BMB1.classList.toggle("BMBC");
      this.$refs.BMB2.classList.toggle("BMBC");
      this.$refs.BMB3.classList.toggle("BMBC");
      this.$store.state.Components.Header.HeaderMenu.classList.toggle(
        "Headertransition"
      );
      this.$store.state.Components.Header.HeaderMenu.classList.toggle(
        "CoursesHeadertransition"
      );
      this.$store.state.Components.Header.HeaderMenu.classList.toggle(
        "HeaderNavActive"
      );
      this.$store.state.Components.Header.HeaderMenue.classList.toggle(
        "CoursesHeaderNavActive"
      );
    },
  },
  computed: {
    MobileView() {
      return this.$store.state.MobileView.Mobile;
    },
  },
};
</script>

<style>
.Mobile_HeaderMobileMenu {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50px;
  right: 5%;
  width: 35px;
  height: 35px;
  z-index: 10;
}
.Mobile_HeaderMobileMenu:hover {
  cursor: pointer;
}
.BugerMenuBars {
  position: absolute;
  width: 22px;
  border: 2px white solid;
  left: 19%;
  transition: all 0.07s ease-in;
}
.Mobile_HeaderMobileMenu .BMBC:nth-child(1) {
  transform: translate(2px, 10px) rotate(45deg);
  border-radius: 15px;
  border: 3px white solid;
}
.Mobile_HeaderMobileMenu .BMBC:nth-child(2) {
  transform: rotate(-45deg) translate(0.5px, 2px);
  border-radius: 15px;
  border: 3px white solid;
}
.Mobile_HeaderMobileMenu .BMBC:nth-child(3) {
  transform: translateY(-10px) rotate(45deg);
  border-radius: 15px;
  opacity: 0;
}
.BMB1 {
  top: 20%;
}
.BMB2 {
  top: 45%;
}
.BMB3 {
  top: 70%;
}

.HeaderMobileMenu {
  display: none;
}
</style>