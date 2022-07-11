<template>

  <div class="infocomp" >

    <transition name="change" >

      <div v-if="intraInfo"   class="content">
        <h1>{{ data.Name }}</h1>
        <p>{{ data.Add }}</p>
      </div>
      
    </transition>

  </div>

</template>

<script>
export default {
props:[ 'Info' ],
computed:{
  data(){ return this.$props.Info  },
  intraInfo(){return this.$store.state.InfoOfSellectedDivision.IntraInfo}
},
mounted(){
this.$store.state.Components.BodyInfo.component=this.$el;
}

}
</script>

<style>
.infocomp{
display: block;
min-width: 400px;
padding: 10px;
border: 3px solid skyblue;
border-radius: 15px;
margin-top: 25px;
}

.changing{
  color: white;
}

.change-enter-from,
.change-leave-to{
  opacity: 0;
  transform: scale(0.3);
}

.change-enter-active,
.change-leave-active{
transition: all .1s ease-in;
}
</style>