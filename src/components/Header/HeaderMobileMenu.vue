`<template>
  <div
    :class="{
      Mobile_HeaderMobileMenu: this.MobileView === true,
      HeaderMobileMenu: this.MobileView === false,
    }"
    @click="HeaderMenuClick"
    ref="BM"
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
      this.$refs.BM.classList.toggle("BMRotate");
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
      // this.$store.state.Components.Header.HeaderMenu.classList.toggle(
      //   "CoursesHeaderNavActive"
      // );
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
  transition: all 0.6s ease-in;
}
.Mobile_HeaderMobileMenu:hover {
  cursor: pointer;
}

.BugerMenuBars {
  position: absolute;
  width: 25px;
  height: 4px;
  background-color: white;
  border-radius: 2px;
  left: 19%;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.6s ease-in, opacity 0.7s ease-in;
}

.BMRotate {
  transform: translate(5px, 1px) rotate(180deg);
}

.Mobile_HeaderMobileMenu .BMBC:nth-child(1) {
  top: 50%;
  left: 50%;
  width: 28px;
  transform: translate(-43%, -50%) rotate(45deg);
  border-radius: 5px;
}
.Mobile_HeaderMobileMenu .BMBC:nth-child(2) {
  top: 50%;
  left: 50%;
  width: 28px;
  transform: translate(-43%, -50%) rotate(25deg);
  border-radius: 5px;
  opacity: 0;
}
.Mobile_HeaderMobileMenu .BMBC:nth-child(3) {
  top: 50%;
  left: 50%;
  width: 28px;
  transform: translate(-43%, -50%) rotate(-45deg);
  border-radius: 5px;
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