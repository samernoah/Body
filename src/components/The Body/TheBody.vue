<template>



    <div class="body" :class="{sideviewbody:infoshow}" >

      <div class="backbutton" v-if="ComponentsArrayOcupied" @click="BackOneExpantion" >Back</div>

      <Head @info="show"/>
    
        <div class="upperbody">
            <LeftArm @info="show" />
            <Torso @info="show"/>
            <RightArm @info="show" />
        </div>

        <div class="lowerbody">
          <LeftLeg @info="show" />
          <RightLeg @info="show" />
        </div>

    </div>

    

 



</template>

<script>
import Head from '@/components/Head/Head.vue'
import Torso from '@/components/Torso/Torso.vue'
import LeftArm from '@/components/LeftArm/LeftArm.vue'
import RightArm from '@/components/RightArm/RightArm.vue'
import RightLeg from '@/components/RightLeg/RightLeg.vue'
import LeftLeg from '@/components/LeftLeg/LeftLeg.vue'


export default {
  components: { Head, Torso, LeftArm, RightArm, RightLeg, LeftLeg},
  name: 'Body',
data(){
    return {}
},
computed:{
ComponentsArray(){ return this.$store.state.ComponentsArray},
ComponentsArrayOcupied(){ return this.$store.state.ComponentsArray.length>0},
infoshow(){ return this.$store.state.InfoOfSellectedDivision.InfoShow },
ComponentsArrayLastComponent(){ 
  const CALC =this.ComponentsArray[(this.ComponentsArray.length)-1] ;
  return CALC
}
},
methods: {
  
    updateheartrate(amount){
      let HRS =this.$store.state.Components.BodyInfo.component.firstChild.children[1].innerText;
      let test = Boolean(parseInt(HRS)/2); 
      this.$store.commit('Updateheartrate' , amount );
      if(test){this.$store.state.Components.BodyInfo.component.firstChild.children[1].innerText=this.$store.state.Body.HeartRate};
    },
    BackOneExpantion(){
      this.$store.commit('ChangeExpandingState',['false',this.ComponentsArrayLastComponent]);
        this.$store.commit('ManegingTheComponentsArray',['Remove',this.ComponentsArrayLastComponent]);
    }
},
mounted(){
  document.documentElement.style.setProperty('--HeartRate',this.$store.state.HeartRate)
}
}
</script>

<style>

 .body{
position: relative;
display: block;
min-width: 500px;
min-height: 750px;
border: 3px solid skyblue;
border-radius: 50px;

transition: all .2s ;
transform-style: preserve-3d;


}

.sideviewbody{
  transform: rotateX(-7deg) rotateY(-28deg) rotateZ(0deg)  scale(0.8) translate(-6%,-4%);
  }

.backbutton{
  color:rgba(0, 0, 0, 0.603);
  font-weight: bolder;
  font-family: 'Lucida Sans';
  background-color: skyblue;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  box-shadow: 0 0 5px 5px  skyblue , 0 0 10px 10px rgba(0, 0, 0, 0.452);
  border-radius: 50%;
  transform: translate(-150% , -60%);
  transition: all .3s;
}
.backbutton:hover{
  box-shadow: 0 0 5px 5px  skyblue , 0 0 10px 10px rgba(255, 253, 253, 0.233);
  cursor: pointer;
}


</style>