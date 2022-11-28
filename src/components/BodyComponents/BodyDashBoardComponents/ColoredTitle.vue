<template>
  <div class="ColoredTitle" ref="ColoredTitle">
    {{ Title }}
  </div>
</template>

<script>
export default {
  props: ["Title", "Color", "Top", "Left", "FontSize", "Width"],

  mounted() {
    this.$refs.ColoredTitle.style.setProperty(
      "background-color",
      `${this.$props.Color}`
    );
    this.$refs.ColoredTitle.style.setProperty("top", `${this.$props.Top}`);
    this.$refs.ColoredTitle.style.setProperty("left", `${this.$props.Left}`);
    this.$refs.ColoredTitle.style.setProperty(
      "font-size",
      `${this.$props.FontSize}`
    );
    if (this.$props.Width) {
      this.$refs.ColoredTitle.style.setProperty(
        "width",
        `${this.$props.Width}`
      );
    }
  },

  updated() {
    this.$refs.ColoredTitle.style.setProperty(
      "background-color",
      `${this.$props.Color}`
    );
    this.$refs.ColoredTitle.style.setProperty("top", `${this.$props.Top}`);
    this.$refs.ColoredTitle.style.setProperty("left", `${this.$props.Left}`);
    this.$refs.ColoredTitle.style.setProperty(
      "font-size",
      `${this.$props.FontSize}`
    );
    if (this.$props.Width) {
      this.$refs.ColoredTitle.style.setProperty(
        "width",
        `${this.$props.Width}`
      );
    }
  },
};
</script>

<style>
.ColoredTitle {
  position: absolute;
  color: white;
  font-size: 11px;
  font-family: "Lucida Sans";
  width: 45px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  transition: all 0.3s;
  z-index: 20;
}
</style>