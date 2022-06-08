<template>

<h1>{{ Title }}</h1>
<div class="bodycomp" ref="body" @resize="swidth" >
  <button v-if="wanted" @click="updateheartrate(1)">increase HeartRate</button>
  <button v-if="wanted" @click="updateheartrate(-1)">decrease HeartRate</button>
  
  
 <BodyInfo v-if="infoshow" :Info="Info" />

    <div class="body">

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

    

 </div>



</template>

<script>
import Head from '@/components/Head/Head.vue'
import Torso from '@/components/Torso/Torso.vue'
import LeftArm from '@/components/LeftArm/LeftArm.vue'
import RightArm from '@/components/RightArm/RightArm.vue'
import RightLeg from '@/components/RightLeg/RightLeg.vue'
import LeftLeg from '@/components/LeftLeg/LeftLeg.vue'
import BodyInfo from '@/components/BodyInfo/BodyInfo.vue'

export default {
  components: { Head, Torso, LeftArm, RightArm, RightLeg, LeftLeg, BodyInfo },
  name: 'Body',
data(){
    return {
        Title: "Body",
        wanted:false,
        Info:null,
        infoshow:false
    }
},
computed:{
ComponentsArray(){ return this.$store.state.ComponentsArray},
ComponentsArrayOcupied(){ return this.$store.state.ComponentsArray.length>0},
ComponentsArrayLastComponent(){ 
  const CALC =this.ComponentsArray[(this.ComponentsArray.length)-1] ;
  return CALC
}
},
methods: {
  show(data){
   if(!this.Info){
     this.Info=data;
     this.infoshow=true;
   }else if(data.Name === this.Info.Name && this.infoshow === true){
     this.Info=null;
     this.infoshow=false;
   }else if(data.Name !== this.Info.Name && this.infoshow === true){
     this.Info = data;
   }
  },
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
.bodycomp{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 25px;
  min-height: 800px ;
  border: 3px solid skyblue;
  
}
.bodycomp h1{
  color: #587b9e;
  position: relative;
  display: block;
}
.bodycomp .body{
position: relative;
display: block;
min-width: 500px;
min-height: 750px;
border: 3px solid skyblue;
border-radius: 15px;
transform: scale(.8);
transition: all .2s ;
}
.bodycomp .backbutton{
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
.bodycomp .backbutton:hover{
  box-shadow: 0 0 5px 5px  skyblue , 0 0 10px 10px rgba(255, 253, 253, 0.233);
  cursor: pointer;
}


</style>