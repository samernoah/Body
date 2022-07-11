<template>
  <div class="headcomp" >
      <div class="head" @click.self="showInfo"></div>
  </div>
</template>

<script>

export default {
  data(){
    return{
        Info:{Name:'Head' , Add:'Important'}
    }
  },
methods: {
  showInfo(){
    this.$store.commit('ChangingTheInfo',this.Info);
  }
}

}
</script>

<style>
.headcomp .head{
position: absolute;
top: 8% ;
left:50%;
transform: translate(-50% ,0);
width: 19%;
padding: 9% 0;    
border: var(--specialborder);
border-radius: 35px;
transition: transform .3s;
}
.headcomp .head:hover{
  transform: translate(-50% ,0) scale(1.1);
}
</style>