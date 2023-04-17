<template>
  <div class="ControlElement" @click="ToggleOrgans" appear>
    <div class="LabelContainer">
      <div class="ControlLabel">
        {{ ChoisesLabel }} <span v-if="SelectedChoise">:</span>
      </div>
      <transition name="CLabel">
        <div class="Choises" v-if="SelectedChoise">
          {{ SelectedChoise }}
        </div>
      </transition>

      <div class="ControlIcon CenteredFlex" @click="CheckType">
        <span>></span>
      </div>
    </div>

    <transition-group
      name="ChoisesAnimation"
      tag="div"
      class="OptionsChoises"
      v-if="ChoisesMenu"
      appear
    >
      <div
        v-for="Choise in Choises"
        :key="Choise"
        class="Choise"
        @click="SelectChoise(e)"
      >
        {{ Choise }}
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
    props:[ 'ChoisesLabel', 'Choises', 'Info' ],
    data(){
        return {
            ChoisesMenu:false,
            SelectedChoise:""


        }
    },
    methods:{
      CheckType(){
          if(this.$props.Info === "r"){
              alert("You Can't Have Multiple Choises In A Reguler Question Type") ;
              return ;
          }
          this.ChoisesMenu = !this.ChoisesMenu ;
      },
      SelectChoise(){
          this.ChoisesMenu = false;
          this.SelectedChoise = event.target.innerText;
          let Choise = event.target.innerText;
          this.$emit('chosen', Choise)
        }
    }

}
</script>

<style>
.QBView .NewQuestion .ControlElement {
  position: relative;
}

.QBView .NewQuestion .LabelContainer {
  position: relative;
}

@media screen and (max-width: 480px) {
  .QBView .NewQuestion .ControlElement {
    display: block;
    margin: 1% auto 4% auto;
  }
  .QBView .NewQuestion .OptionsChoises {
    position: relative;
    margin: 1px auto;
    max-width: 55%;
  }
  .QBView .NewQuestion .ActiveMenu {
    margin-bottom: 10%;
  }
}

@media screen and (min-width: 481px) {
  .QBView .NewQuestion .ControlElement {
    display: inline-block;
    margin: 2% auto 4% auto;
  }
  .QBView .NewQuestion .OptionsChoises {
    position: relative;
    margin: 1px auto;
  }
}
</style>