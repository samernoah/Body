<template>
  <div class="HeartComp"
  :class="{expandedHeart:ExpandedHeart , HeartComp:!ExpandedHeart}">
      <div class="Heart" ref="heart" @click.self="expand"></div>
        <RightV />
      </div>
</template>

<script>
import RightV from './RightV.vue'
export default {
  components: { RightV },
  data(){
    return{
    
    }
  },
  computed:{
    HeartRate(){ return this.$store.state.Body.HeartRate},
    ExpandedHeart(){ return this.$store.state.Components.Heart.expanded },
    ExpandedTorso(){ return this.$store.state.Components.Torso.expanded },
    ComponentsArray(){ return this.$store.state.ComponentsArray},
    ComponentsArraylength(){ return this.$store.state.ComponentsArray.length}
  },
  methods:{
    expand(){
      if(this.ComponentsArraylength===1 && this.ComponentsArray.includes('Torso') && this.ExpandedHeart === false){
        console.log('hello'); 
            this.$store.commit('ChangeExpandingState',['true','Heart']);
            this.$store.commit('ManegingTheComponentsArray',['Add','Heart']);
        }
    }
  },

  mounted(){
    this.$store.state.Components.Heart.component=this.$el.firstChild;
    this.$store.state.Components.Heart.expanded=false;
    // this.$refs.heart.style.setProperty('animation' , `heartb ${60/this.HeartRate}s ease-in-out 0s infinite reverse`);
  }

}
</script>

<style>
.HeartComp{
  transition: all .3s;
}
.HeartComp .Heart{
    position: absolute;
    top:10%;
    left: 50%;
    width: 1%;
    padding: 10% ;
    border: 3px solid skyblue;
    border-radius: 5px; 
    transition: all .3s;
    animation: heartb .9s ease-in-out 0s infinite reverse;
}
.expandedHeart{
  transition: all .3s;
}
.expandedHeart .Heart{
    position: absolute;
    top:0%;
    left: 49%;
    width: 1%;
    padding: 76% 49% ;
    border: 3px solid skyblue;
    border-radius: 5px; 
    animation: heartbe .9s ease-in-out 0s infinite reverse;
    transition: all .3s;
      
}

@keyframes heartb {
  0% {
    transform: translate(-50%,0) scale(1) ;
  }
  20% {
    transform: translate(-50%,0) scale(0.8) ;
  }
  35% {
    transform: translate(-50%,0) scale(1) ;
  }
 100% {
    transform: translate(-50%,0) scale(1) ;
  }
}
@keyframes heartbe {
  0% {
    box-shadow: 0 0 3px 5px skyblue;
    transform: translate(-49%,0);
  }
  20% {
    box-shadow: 0 0 0 0 skyblue;
    transform: translate(-49%,0);
  }
  35% {
    box-shadow: 0 0 3px 5px skyblue;
    transform: translate(-49%,0);
  }
 100% {
    box-shadow: 0 0 3px 5px skyblue;
    transform: translate(-49%,0);
  }
}
</style>