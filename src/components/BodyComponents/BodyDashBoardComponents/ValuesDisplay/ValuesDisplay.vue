<template>
  <div class="ValuesDisplay bvsection" @click="showelement">
    <div class="BIheader bvsheader">
      <div class="spacediv" />
      Values Display
    </div>
    <!-- <ColoredTitle
      Color="#090391"
      :Title="'Waiting'"
      Top="3.8px"
      Left="65px"
      FontSize="10px"
      Width="74px"
      v-if="!ValuesArePresent"
    />
    <ColoredTitle
      Color="#090391"
      :Title="`${ValuesCount} Val${ValuesCount > 1 ? 's' : ''}.`"
      Top="3.8px"
      Left="65px"
      FontSize="10px"
      Width="74px"
      v-if="ValuesArePresent"
    /> -->
    <div class="ValuesContainer" v-if="ValuesArePresent">
      <div class="Value" v-for="val in Values" :key="val.Name">
        <div class="ValueName ValueColor CenteredFlex" ref="ValueElement">
          {{ val.Name }}
        </div>
        <div class="ValueCount ValueColor CenteredFlex">{{ val.Value }}</div>
      </div>
    </div>

    <div class="ValuesNotPresent CenteredFlex" v-else>
      <div class="VNP"></div>
    </div>
  </div>
</template>

<script>
import ColoredTitle from "../ColoredTitle.vue";

export default {
  name: "ValuesDisplay",
  components: { ColoredTitle },
  data() {
    return {};
  },
  computed: {
    Values() {
      return this.$store.state.Body.BodyPool.filter(
        (v) => v.ChosenForDisplay === true
      );
    },
    ValuesArePresent() {
      return this.Values.length > 0;
    },
    ValuesCount() {
      return this.Values.length;
    },
  },
  methods: {
    showelement() {
      console.log(this.$refs.ValueElement);
    },
  },
};
</script>

<style>
.ValuesDisplay {
  position: relative;
  width: 507px;
  height: 208px;
  grid-column: span 2;
  transform: translate(3px, -4px);
}

.ValuesDisplay .ValuesContainer {
  position: absolute;
  width: 100%;
  height: 85%;
  top: 30px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-auto-flow: column;
  align-items: center;
}

.ValuesDisplay .Value {
  height: 2em;
  grid-column: span 1;
  display: grid;
  grid-template-columns: auto 3em;
  border-radius: 8px;
  transform: translate(2px, 1px);
  transition: all 0.3s ease-in;
}

.ValuesDisplay .ValueName {
  font-weight: bold;
  border-radius: 5px 4px 4px 5px;
  font-size: 14px;
  z-index: 4;
}

.ValuesDisplay .ValueCount {
  font-weight: bold;
  font-size: 15px;
  border-radius: 3px 16px 16px 3px;
  transform: translateX(3px);
}

.ValueColor {
  color: #222527;
  background: -webkit-linear-gradient(top left, #17707ef2, #2191a7, #3193a5f2);
  border: 1px #007caf solid;
}

.ValuesNotPresent {
  position: absolute;
  width: 100%;
  height: 85%;
  top: 30px;
}

.ValuesDisplay .ValuesNotPresent .VNP {
  color: gray;
}

@keyframes ValueChange {
  50% {
    transform: translateX(64px);
  }

  100% {
    transform: translateX(-1px);
  }
}
</style>