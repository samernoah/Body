<template>
  <footer class="Footer CenteredFlex">
    <div class="footer CenteredFlex" ref="footerupborder">
      <div class="footerp">Copyright &copy; Body</div>
    </div>
  </footer>
</template>

<script>
export default {
  mounted() {
    if (window.location.pathname === "/thequestionsbank") {
      this.$refs.footerupborder.style.borderTop =
        "1px rgb(201 122 0 / 39%) solid";
    }
  },
};
</script>

<style>
.Footer {
  min-height: 55px;
  margin-top: auto;
  background-color: transparent;
  border-bottom: 1px white solid;
}
.Footer .footer {
  width: 100%;
  border-top: 1px rgb(17 108 112 / 39%) solid;
}
.Footer .footerp {
  color: white;
  font-size: 0.8rem;
  margin-top: 14px;
}
</style>