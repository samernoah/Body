<template>
  <div
    class="link"
    @click="activate"
    :class="{ ActiveLinkIconBGC: IconIsActive }"
  >
    <component :is="icon"></component>
  </div>
</template>

<script>
import BodyLinkIcon from "./LinkIcons/BodyLinkIcon.vue";

export default {
  components: { BodyLinkIcon },
  props: ["function", "icon", "Text", "Active"],
  data() {
    return {
      name: this.$props.Text,
    };
  },
  methods: {
    activate() {
      this.$store.commit("SelectActiveIcon", this.$props.Text);
    },
  },
  computed: {
    AIcon() {
      return this.$props.Active;
    },
    IconISActive() {
      return this.AIcon === this.$props.Text;
    },
  },
};
</script>

<style scoped>
.link {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  margin: 10px auto;
  border: 1px white solid;
  border-radius: 5px;
  color: black;
}
.ActiveLinkIconBGC {
  background: -webkit-linear-gradient(top left, #6fc6d5, #0a6776f2);
  border: 1px #176687 solid;
}
</style>

