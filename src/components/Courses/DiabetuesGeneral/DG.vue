<template>
  <div class="DG">
    <transition name="dg" mode="out-in" appear>
      <component :is="comp" @RightA="RightAnswerMM"></component>
    </transition>
  </div>
</template>

<script>
import DG1 from "./DG1.vue";
import DG2 from "./DG2.vue";
import DG3 from "./DG3.vue";
import DG4 from "./DG4.vue";
import DG5 from "./DG5.vue";
import DG6 from "./DG6.vue";
import DG7 from "./DG7.vue";
export default {
  components: { DG1, DG2, DG3, DG4, DG5, DG6, DG7 },
  data() {
    return {
      Progress: { DG1: false, DG2: false, DG3: false },
      comp: "DG1",
      maxNumOfComps: 7,
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
        this.comp = `DG${compnum}`;
      } else {
        console.log("very good");
      }
    },
  },
};
</script>

<style>
.DG {
  position: relative;
  width: 100%;
  min-height: -webkit-fill-available;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
}
.DG .Csection {
  position: relative;
  flex-grow: 3;
}

.dg-enter-from,
.dg-leave-to {
  transform: translateX(300px);
  opacity: 0;
}

.dg-enter-avtive,
.dg-leave-avtive {
  transition: all 1s ease-in;
}

.dg-enter-to,
.dg-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>