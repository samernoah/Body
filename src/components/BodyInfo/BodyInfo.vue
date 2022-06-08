<template>
  <div class="infocomp" ref="infocomp">
      <div class="content" ref="content">
        <h1>{{ data.Name }}</h1>
        <p>{{ data.Add }}</p>
      </div>

  </div>
</template>

<script>
export default {
props:[ 'Info' ],
computed:{
  data(){ return this.$props.Info  }
},
mounted(){
this.$store.state.Components.BodyInfo.component=this.$el;
const content =this.$refs.infocomp;
content.style.setProperty('opacity','0');
content.style.setProperty('min-width','0');
setTimeout(() => {
content.style.setProperty('display','block');
content.style.setProperty('opacity','1');
content.style.setProperty('min-width','400px');
}, 0);
},
beforeUnmount(){
const content =this.$refs.infocomp;
content.style.setProperty('opacity','0');
content.style.setProperty('min-width','0');
},
updated(){
  console.log(this.data);
const content =this.$refs.infocomp;
content.style.setProperty('min-width','0');
content.style.setProperty('opacity','0');
setTimeout(() => {
content.style.setProperty('opacity','1');
content.style.setProperty('min-width','400px');
}, 400);

}
}
</script>

<style>
.infocomp{
display: block;
min-width: 400px;
top: 0px;
padding: 10px;
border: 3px solid skyblue;
border-radius: 15px;
margin-top: 25px;
transition: all .3s ;
}
.infocomp .content{
transition: all .3s ;
}
</style>