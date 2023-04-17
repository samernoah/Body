<template>
  <div class="NewQuestion">
    <h3 class="OrangeGlassEffect">New Question</h3>

    <div class="NewQControlers">
      <h2>Options</h2>

      <MultipleChoises
        ChoisesLabel="Question Type"
        :Choises="QuestionsChoises"
        @chosen="HandleChoise"
      />

      <MultipleChoises
        ChoisesLabel="Number Of Choises"
        :Choises="ChoisesNumber"
        @chosen="HandleChoise"
        :Info="ChosenQuestionType"
      />

      <div class="NewQCreateButton OrangeGlassEffect" @click="CreateQuestion">
        Create
      </div>
    </div>

    <EdableQuestion :Question="Question" v-if="Question" @check="ShowQ" />
    <TestableQuestion :Question="Question" v-if="Question" />
  </div>
</template>

<script>
import MultipleChoises from './MultipleChoises.vue'
import EdableQuestion from './EdableQuestion.vue'
import TestableQuestion from './TestableQuestion.vue'




export default {
  components :{ MultipleChoises, EdableQuestion , TestableQuestion },
  data(){
    return {
      Question:null,
    QuestionsChoises:["Reguler", "Single Choise", "Multiple Choises"],
    ChoisesNumber:["Two", "Three", "Four", "Five", "Six", "Seven",  ],
    ChosenQuestionType:"",
    ChosenChoisesNumber:0
    }
  },
  methods:{
    HandleChoise(Choise){
      
      // if (!this.QuestionsChoises.includes(Choise) && this.ChosenQuestionType === "r") {
      //   alert("Reguler Questions Don't Have Multiple Choises") ;
      //   return ;
      // }

      switch (Choise) {
        case "Reguler":
          this.ChosenQuestionType = "r";
          this.ChosenChoisesNumber = 0 ;
          break;
          case "Single Choise":
          this.ChosenQuestionType = "s" ;
          break;
          case "Multiple Choises":
          this.ChosenQuestionType = "m" ;
          break;
          case "Two":
          this.ChosenChoisesNumber = 2 ;
          break;
          case "Three":
          this.ChosenChoisesNumber = 3 ;
          break;
          case "Four":
          this.ChosenChoisesNumber = 4 ;
          break;
          case "Five":
          this.ChosenChoisesNumber = 5 ;
          break;
          case "Six":
          this.ChosenChoisesNumber = 6 ;
          break;
          case "Seven":
          this.ChosenChoisesNumber = 7 ;
          break;
      
        default:
          break;
      }
    },
    CreateQuestion(){

      let NewQuestion = {
        id: null,
        T: null,
        Q: " ",
        A: { Choises: [] },    
        C: false,
        CC: false
    };


    if(this.ChosenQuestionType === "r" && this.ChosenChoisesNumber === 0){
      NewQuestion.T="r"
      NewQuestion.A = {
            MostRight: { discreption: "", chosen: "" },
            Others: { discreption: "", chosen: "" },
        }
    }
    else if(this.ChosenQuestionType === "s" && this.ChosenChoisesNumber > 0){
      NewQuestion.T = "s" ;
      // NewQuestion.A.Choises.length = this.ChosenChoisesNumber ;
      for (let i = 0;  i< this.ChosenChoisesNumber; i++) {
         NewQuestion.A.Choises.push({ discreption: "", chosen: "", IMR: false }) ;

      }
      // NewQuestion.A.Choises.fill({ discreption: "", chosen: "", IMR: false }) ;
    }
    else if(this.ChosenQuestionType === "m" && this.ChosenChoisesNumber > 0){
      NewQuestion.T = "m" ;
      NewQuestion.A.Choises.length = this.ChosenChoisesNumber ;
      NewQuestion.A.Choises.fill({ discreption: "", chosen: "", IMR: false }) ;
    }
    this.Question = NewQuestion ;
    },
    ShowQ(){
      console.log(this.Question.A.Choises);
    }
  }
}
</script>

<style>
.QBView .NewQuestion h3 {
  color: white;
  width: 50%;
  max-width: 150px;
  margin: 9% auto 10% auto;
  /* border-bottom: 1px rgb(112 77 24 / 70%) solid; */
  padding: 2% 1%;
}

.QBView .NewQuestion h2 {
  color: white;
  font-size: 16px;
  width: 100%;
  margin: 9% auto 6% auto;
  border-top: 1px rgb(112 77 24 / 70%) solid;
  border-bottom: 1px rgb(112 77 24 / 70%) solid;
  padding-top: 2%;
  padding-bottom: 2%;
}

.QBView .NewQuestion .NewQControlers {
  border-bottom: 1px rgb(112 77 24 / 70%) solid;
  margin-bottom: 12%;
  padding-bottom: 5%;
}

.QBView .NewQuestion .NewQCreateButton {
  color: white;
  border-radius: 5px;
}

@media screen and (max-width: 480px) {
  .QBView .NewQuestion .NewQControlers {
    margin-bottom: 12%;
    padding-bottom: 5%;
  }

  .QBView .NewQuestion .NewQCreateButton {
    width: 80px;
    margin: 8px auto;
    padding: 5.6px 1px;
    border-radius: 5px;
  }
}

@media screen and (min-width: 481px) {
  .QBView .NewQuestion .NewQCreateButton {
    width: auto;
    max-width: 150px;
    margin: 8px auto;
  }
}
</style>