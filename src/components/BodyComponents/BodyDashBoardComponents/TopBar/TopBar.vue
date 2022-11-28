<template>
  <div class="TopBar">
    <div class="logo CenteredFlex">
      <router-link to="/">B </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.TopBar {
  position: absolute;
  top: 0;
  height: 50px;
  width: 100vw;
  border-radius: 15px 15px 0 0;
  background-color: rgb(34, 37, 39);
  z-index: 16;
  border-bottom: 1px rgb(48, 51, 54) solid;
  grid-area: TopBar;
}
.TopBar .logo {
  position: relative;
  width: 45px;
  height: 100%;
  border-right: 1px rgb(62, 66, 70) solid;
  font-weight: bolder;
  color: skyblue;
  font-size: 2rem;
}
.TopBar a {
  display: block;

  color: skyblue;
  text-decoration: none;
}
</style>