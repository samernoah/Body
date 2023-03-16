<template>
  <div class="DA">
    <transition name="DA" mode="out-in" appear>
      <component :is="comp" @RightA="RightAnswerMM"></component>
    </transition>
  </div>
</template>

<script>
import DA1 from "./DA1.vue";
import DA2 from "./DA2.vue";
import DA3 from "./DA3.vue";
export default {
  components: { DA1, DA2, DA3 },
  data() {
    return {
      Progress: { DA1: false, DA2: false, DA3: false },
      comp: "DA1",
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
        this.comp = `DA${compnum}`;
      } else {
        console.log("very good");
      }
    },
  },
};
</script>

<style>
.DA {
  position: relative;
  width: 100%;
  min-height: -webkit-fill-available;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
}
.DA .Csection {
  position: relative;
  flex-grow: 3;
}
.btn {
  width: 70px;
  height: 70px;
}
.DA-enter-from,
.DA-leave-to {
  transform: translateX(300px);
  opacity: 0;
}

.DA-enter-avtive,
.DA-leave-avtive {
  transition: all 1s ease-in;
}

.DA-enter-to,
.DA-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>