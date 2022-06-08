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
    this.$refs.heart.style.setProperty('animation' , `heartb ${60/this.HeartRate}s ease-in-out 0s infinite reverse`);
  }

}
</script>

<style>
.HeartComp{
  border: 3px solid yellow;
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
      
}
.expandedHeart{
  border: 3px solid white;
  transition: all .3s;
}
.expandedHeart .Heart{
    font: bolder;
    position: absolute;
    top:10%;
    left: 50%;
    width: 1%;
    padding: 40% ;
    border: 3px solid skyblue;
    border-radius: 5px; 
      
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
</style>