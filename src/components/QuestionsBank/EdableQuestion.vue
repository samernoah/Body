<template>
  <div class="QuestionsContainer NewQuestionClass">
    <!-- Question Begining-->

    <div
      class="QuestionWrapper"
      :data-QType="Question.T"
      :data-NOAA="Question.NOAA"
      :data-id="Question.id"
      :ref="`Q${Question.id}`"
    >
      <div class="Question">
        <div class="TheQuestion">Write The Question Here :</div>
        <textarea
          name="Question"
          class="QestionInputdiscription"
          placeholder="Write The Question Here"
          v-model="Question.Q"
        >
        </textarea>
        <!-- <div class="TheQuestion">{{ Question.Q }} ?</div> -->

        <div v-if="Question.T === 's'">
          <form action="" method="post" ref="Newf">
            <div class="QOptions">
              <div
                class="Option"
                v-for="(Choise, index) in Question.A.Choises"
                :key="`NewChoiseWraper${index}`"
              >
                <div>
                  <div>
                    <!-- :name="`New${Question.id}${Choise.discreption}`" -->
                    <input
                      class="optionmark"
                      type="radio"
                      :name="`NewRadio${Question.id}`"
                      :id="`NewRadio${index}`"
                      :data-index="index"
                    />

                    <div class="ChoiseDiscription">
                      Choise Number : {{ index + 1 }}
                      <textarea
                        :name="`NewChoise${index}`"
                        class="QestionInputdiscription"
                        v-model="Choise.discreption"
                      >
                      </textarea>
                    </div>
                  </div>
                  <!-- <label
                    :for="`${Question.id}${Choise.discreption}`"
                    class="Qestiondiscription"
                  >
                    {{ Choise.discreption }}
                  </label> -->

                  <div class="Chosendiscription Chosen CenteredFlex">
                    Description For Choise Number : {{ index + 1 }}
                    <textarea
                      :name="`NewChoiseDescriptio${index}`"
                      class="QestionInputdiscription"
                      v-model="Choise.chosen"
                      placeholder="Write Explanation For Choise Here"
                    >
                    </textarea>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div v-if="Question.T === 'm'">
          <form
            action=""
            method="post"
            :ref="`f${Question.id}`"
            :data-numberOfRA="Question.NOAA"
          >
            <div
              class="Option"
              v-for="Choise in Question.A.Choises"
              :key="`New${Question.id}${Choise.discreption}`"
            >
              <div>
                <div>
                  <!-- :name="`New${Question.id}${Choise.discreption}`" -->
                  <input
                    class="optionmark"
                    type="radio"
                    :name="`NewCheckBox${index}`"
                    :id="`NewCheckBox${index}`"
                    :data-index="index"
                  />

                  <div class="ChoiseDiscription">
                    Choise Number : {{ index + 1 }}
                    <textarea
                      :name="`NewChoise${index}`"
                      class="QestionInputdiscription"
                      v-model="Choise.discreption"
                    >
                    </textarea>
                  </div>
                </div>

                <div class="Chosendiscription Chosen CenteredFlex">
                  Description For Choise Number : {{ index + 1 }}
                  <textarea
                    :name="`NewChoiseDescriptio${index}`"
                    class="QestionInputdiscription"
                    v-model="Choise.chosen"
                    placeholder="Write Explanation For Choise Here"
                  >
                  </textarea>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div v-if="Question.T === 'r'">
          <form
            action=""
            method="post"
            :ref="`edableformforreguler`"
            :data-AA="Question.A.MostRight.discreption"
          >
            <div>
              <div>
                <div class="Chosendiscription Chosen CenteredFlex">
                  Right the Correct Answer Here
                  <input
                    class="textanswer"
                    type="text"
                    v-model="Question.A.MostRight.discreption"
                  />
                </div>
              </div>
              <div class="Chosendiscription Chosen CenteredFlex">
                Description For The Right Choise
                <textarea
                  :name="`NewRightDescription`"
                  class="QestionInputdiscription"
                  v-model="Question.A.MostRight.chosen"
                  placeholder="Write Explanation For Choise Here"
                >
                </textarea>
              </div>
              <div class="Chosendiscription Chosen CenteredFlex">
                Description For Corection chareching
                <textarea
                  :name="`NewOtherDescription`"
                  class="QestionInputdiscription"
                  v-model="Question.A.Others.chosen"
                  placeholder="Write Explanation For Choise Here"
                >
                </textarea>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div class="QuestionCheckingControl">
        <transition name="reset">
          <div
            v-show="Question.C"
            class="QuestionCheck"
            :data-checkid="Question.id"
            @click="reset(e)"
            :ref="`check${Question.id}`"
          >
            Reset
          </div>
        </transition>

        <transition name="check">
          <div
            class="QuestionCheck"
            :data-checkid="Question.id"
            @click="testemit"
            :ref="`check${Question.id}`"
          >
            Check
          </div>
        </transition>

        <transition name="showall">
          <div
            v-show="Question.C"
            class="QuestionCheck"
            :data-checkid="Question.id"
            @click="showall(e)"
            :ref="`check${Question.id}`"
          >
            Show All
          </div>
        </transition>
      </div>
      <div class="QuestionBorderBottom" />
    </div>
  </div>
</template>

<script>
export default {
  props:['Question'],
  methods: {
    testemit(){
      // this.$emit("check");
      // console.log(this.$props.Question);
      let ChosedRadioIndex ;
      this.$props.Question.A.Choises
      .forEach(
        (chs) => { chs.IMR = false ; } 
      )
      this.$refs.Newf.querySelectorAll(".optionmark")
      .forEach(
        (radio)=>{
          if(radio.checked===true){
            ChosedRadioIndex = radio.dataset.index}
          }) ;
          
          console.log(typeof(ChosedRadioIndex));
          ChosedRadioIndex = Number.parseInt(ChosedRadioIndex);
          console.log(typeof(ChosedRadioIndex));
      this.$props.Question.A.Choises[ChosedRadioIndex].IMR = true ;
      console.log(this.$props.Question.A.Choises);
      
    }
  }

};
</script>

<style>
.QBView .NewQuestionClass .Question {
  margin: 10px auto 40px auto;
  width: 90%;
  max-width: 1000px;
  background: -webkit-linear-gradient(
    left,
    rgb(112 77 24 / 73%),
    rgb(187 163 38 / 73%),
    rgb(112 83 17 / 73%)
  );
  border: 1px #9b610759 solid;
  color: white;
  padding: 22px 2px;
}

.QBView .QestionInputdiscription {
  display: block;
  width: 86%;
  margin: 0 auto;
  padding: 3px 4px;
  background-color: transparent;
  /* border: none; */
  border: 1px #2015045e solid;
  color: white;
  text-align: center;
  -webkit-backdrop-filter: blur(24px);
  backdrop-filter: blur(12px);
  border-radius: 7px;
  outline: none;
}

.QBView .NewQuestionClass .textanswer {
  background-color: transparent;
  text-align: center;
  border: none;
  border-bottom: 2px rgb(112 77 24 / 47%) solid;
  font-size: 16px;
  transform: translateY(3px);
  margin: 23px auto;
  outline: none;
  color: white;
}

.QBView .NewQuestionClass .Chosen {
  margin: 10px auto -10px auto;
  padding: 15px 4px 15px 4px;
  border-top: 1px rgb(112 77 24 / 32%) solid;
  color: #000000b8;
  background: -webkit-linear-gradient(
    left,
    rgb(112 77 24 / 0%),
    rgb(104 93 31 / 60%),
    rgb(112 77 24 / 0%)
  );
  display: block;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease-in, font-size 0.3s ease-in, border-top 3s ease,
    transfrom 0;
}

.QBView .NewQuestionClass .Option {
  position: relative;
  width: 80%;
  margin: 40px auto;
  border: 1px rgb(46 31 6 / 43%) solid;
  /* border-bottom: 1px rgb(112 77 24 / 32%) solid; */
  border-radius: 10px;
  color: white;
  padding: 10px 0;
}

.QBView .NewQuestionClass .ChoiseDiscription {
  color: #000000c4;
  font-family: system-ui;
  font-weight: 500;
  font-size: 16px;
}

.QBView .NewQuestionClass .QOptions .Option:nth-child(1) {
  border-top: 1px rgb(54 45 30 / 83%) solid;
}

.QBView .NewQuestionClass .QOptions .Option:nth-last-child(1) {
  border-bottom: 1px rgb(54 45 30 / 83%) solid;
}

@media screen and (max-width: 480px) {
  .QBView .QestionInputdiscription {
    max-width: 75%;
    margin-top: 8%;
    margin-bottom: 10%;
    min-height: 64px;
  }
}

@media screen and (min-width: 481px) {
  .QBView .QestionInputdiscription {
    max-width: 86%;
    margin-top: 2%;
    margin-bottom: 5%;
  }
}
</style>