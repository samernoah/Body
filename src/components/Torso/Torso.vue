<template>
  <div class="Torsocomp">
    
      <div class="torso" @click="showInfo() , expand()" ref="torso"
       :class="{expandedtorso:ExpandedTorso , torso:!ExpandedTorso}" >

        <div class="torsocontent" ref="tc">
        <Heart />
        </div>

      </div>
  </div>
</template>

<script>
import Heart from './Chest/Heart/Heart.vue';
export default {
  components: { Heart },
 data(){
    return{
        Info:{Name:'Torso' , Add:'Also Important'},
    }
  },
computed:{
  HeartRate(){
    return {Name:'Torso' , Add:this.$store.state.Body.HeartRate}
  },
  ExpandedTorso(){ return this.$store.state.Components.Torso.expanded },
  ComponentsArray(){ return this.$store.state.ComponentsArray},
  ComponentsArraylength(){ return this.$store.state.ComponentsArray.length}
},
methods:{
  showInfo(){
    this.$emit('info',this.HeartRate);
  },
  expand(){
    if(this.ComponentsArraylength===0 && this.ExpandedTorso === false){ 
        this.$store.commit('ChangeExpandingState',['true','Torso']);
        this.$store.commit('ManegingTheComponentsArray',['Add','Torso']);
     }
  }
},
mounted(){
  window.CA=this.ComponentsArray;
  this.$store.state.Components.Torso.component=this.$el.firstChild;
  this.$store.state.Components.Torso.expanded=false;
}
}
</script>

<style>
.torso{
position: absolute;
left: 50%;
top: 22%;
transform: translate(-50% ,0);
width: 40%;
padding: 25% 0;    
border: var(--specialborder);
border-radius: 15px;
transition: all .2s;
background-color: rgb(46, 49, 51);
}
.Torsocomp .torso:hover{
  transform: translate(-50% ,0) scale(1.02);
}
.Torsocomp .torso .torsocontent{
  position: absolute;
  top:0;
  padding: 62% 50%  ;
  opacity: 0;
  transition: opacity .5s ;
  z-index: 10;
}
.Torsocomp .expandedtorso .torsocontent{
  position: absolute;
  height: 20%;
  top:0;
  padding: 62% 50%  ;
  opacity: 1;
  transition: opacity .5s ;
  z-index: 10;
}
.Torsocomp .torso .torsocontent:hover{
  opacity: 1;
}
.Torsocomp .expandedtorso{
  position: absolute;
  left: 50%;
  transform: translate(-50% ,0);
  padding: 25% 0;    
  border: var(--specialborder);
  border-radius: 15px;
  transition: all .2s;
  background-color: rgb(46, 49, 51);
  width: 100%;
  height: 70%;
  top: 0;
  z-index: 6;
}


</style>