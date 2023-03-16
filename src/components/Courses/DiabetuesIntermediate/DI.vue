<template>
  <div class="DI">
    <transition name="DI" mode="out-in" appear>
      <component :is="comp" @RightA="RightAnswerMM"></component>
    </transition>
  </div>
</template>

<script>
import DI1 from "./DI1.vue";
import DI2 from "./DI2.vue";
import DI3 from "./DI3.vue";
export default {
  components: { DI1, DI2, DI3 },
  data() {
    return {
      Progress: { DI1: false, DI2: false, DI3: false },
      comp: "DI1",
      maxNumOfComps: 3,
      show: false,
    };
  },
  methods: {
    showcomponent() {
      this.show = !this.show;
    },
    RightAnswerMM() {
      let compname = this.comp;
      let compnum = Number(compname[compname.length - 1]);
      if (compnum < this.maxNumOfComps) {
        compnum++;
        this.comp = `DI${compnum}`;
      } else {
        console.log("very good");
      }
    },
  },
};
</script>

<style>
.DI {
  position: relative;
  width: 100%;
  min-height: -webkit-fill-available;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
}
.DI .Csection {
  position: relative;
  flex-grow: 3;
}
.btn {
  width: 70px;
  height: 70px;
}
.DI-enter-from,
.DI-leave-to {
  transform: translateX(300px);
  opacity: 0;
}

.DI-enter-avtive,
.DI-leave-avtive {
  transition: all 1s ease-in;
}

.DI-enter-to,
.DI-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>