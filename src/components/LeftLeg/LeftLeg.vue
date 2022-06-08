<template>
  <div class="LLcomp">
      <div class="leftleg" @click.self="showInfo"></div>
  </div>
</template>

<script>
export default {
 data(){
    return{
        Info:{Name:'Left Leg' , Add:'Also Important'}
    }
  },
methods: {
  showInfo(){
    this.$emit('info',this.Info);
  }
}
}
</script>

<style>
.LLcomp .leftleg{
position: absolute;
left: 51.5% ;
top: 58%;
width: 15%;
padding: 28% 0;    
border: 3px solid skyblue;
border-radius: 15px;
transition: transform .3s;
}
.LLcomp .leftleg:hover{
transform: scale(var(--viewscale));
}
</style>