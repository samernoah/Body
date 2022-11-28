<template>
  <div class="infocomp">
    <div v-if="intraInfo" class="content">
      <transition name="changeinfotitle" mode="out-in" appear="true">
        <div class="infotitle">{{ data.Name }}</div>
      </transition>
      <transition name="changeinfo" mode="out-in">
        <p>{{ data.Add }}</p>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: ["Info"],
  computed: {
    data() {
      return this.$props.Info;
    },
    intraInfo() {
      return this.$store.state.InfoOfSellectedDivision.IntraInfo;
    },
  },
  mounted() {
    this.$store.state.Components.BodyInfo.component = this.$el;
  },
};
</script>

<style>
.infocomp {
  position: absolute;
  display: block;
  width: 100%;
  height: 91%;
}
.infotitle {
  color: white;
  font-size: 11px;
  font-family: "Lucida Sans";
  background-color: rgb(36 129 10);
  min-width: 80px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 108px;
  border-radius: 3px;
  transform: translate(60%, -208%);
  transition: all 0.3s;
  z-index: 20;
}

.changing {
  color: white;
}

.changeinfotitle-enter-from,
.changeinfotitle-leave-to {
  opacity: 0.5;
}

.changeinfotitle-enter-active,
.changeinfotitle-leave-active {
  transition: all 0.2s ease-in;
}

.changeinfo-enter-from,
.changeinfo-leave-to {
  transform: translateX(100px);
}

.changeinfo-enter-active,
.changeinfo-leave-active {
  transition: all 0.3s ease-in;
}
</style>