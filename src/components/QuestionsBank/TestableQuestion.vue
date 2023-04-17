<template>
  <div class="QuestionsContainer TestableQuestionClass">
    <!-- Question Begining-->

    <div
      class="QuestionWrapper"
      :data-QType="Question.T"
      :data-NOAA="Question.NOAA"
      :data-id="Question.id"
      :ref="`Q${Question.id}`"
    >
      <div class="Question">
        <div class="TheQuestion">{{ Question.Q }} ?</div>

        <div v-if="Question.T === 's'">
          <form action="" method="post" :ref="`Testf${Question.id}`">
            <div class="QOptions">
              <div
                class="Option"
                v-for="Choise in Question.A.Choises"
                :key="`testable${Question.id}${Choise.discreption}`"
              >
                <div>
                  <input
                    class="optionmark"
                    type="radio"
                    :name="`Test${Question.id}`"
                    :id="`Test${Question.id}${Choise.discreption}`"
                    :data-MAA="Choise.IMR === true ? 'yes' : 'no'"
                  />
                  <label
                    :for="`Test${Question.id}${Choise.discreption}`"
                    class="Qestiondiscription"
                  >
                    {{ Choise.discreption }}
                  </label>
                  <div class="Chosendiscription Chosen CenteredFlex">
                    {{ Choise.chosen }}
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
              :key="`testable${Question.id}${Choise.discreption}`"
            >
              <div>
                <input
                  class="optionmark"
                  type="checkbox"
                  :name="Question.id"
                  :id="`${Question.id}${Choise.discreption}`"
                  :data-MAA="Choise.IMR === true ? 'yes' : 'no'"
                />
                <label
                  :for="`${Question.id}${Choise.discreption}`"
                  class="Qestiondiscription"
                >
                  {{ Choise.discreption }}
                </label>
                <div class="Chosendiscription CenteredFlex">
                  {{ Choise.chosen }}
                </div>
              </div>
            </div>
          </form>
        </div>

        <div v-if="Question.T === 'r'">
          <form
            action=""
            method="post"
            :ref="`f${Question.id}`"
            :data-AA="Question.A.MostRight.discreption"
          >
            <div>
              <div>
                <p>Correct Choise</p>
                <input
                  class="textanswer"
                  type="text"
                  :value="Question.A.MostRight.discreption"
                />
              </div>
              <div class="Chosendiscription Chosen CenteredFlex">
                <p>Correct Choise Description</p>
                {{ Question.A.MostRight.chosen }}
              </div>
              <div class="Chosendiscription Chosen CenteredFlex">
                <p>Other Choises Description</p>
                {{ Question.A.Others.chosen }}
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
            @click="checkAnswer(e)"
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
  props:['Question']

};
</script>

<style>
.TestableQuestionClass .Question {
  margin: 10px auto 40px auto;
  width: 90%;
  max-width: 1000px;
  background: -webkit-linear-gradient(
    top left,
    rgb(112 77 24 / 73%),
    rgb(187 163 38 / 73%),
    rgb(112 83 17 / 73%)
  );
  border: 1px #9b610759 solid;
  color: white;
  padding: 22px 2px;
}

.QBView .TestableQuestionClass .textanswer {
  background-color: transparent;
  text-align: center;
  border: none;
  border-bottom: 2px rgb(112 77 24 / 47%) solid;
  font-size: 16px;
  transform: translateY(3px);
  margin: 23px auto;
  outline: none;
  color: rgba(0, 0, 0, 0.685);
}

.TestableQuestionClass p {
  display: block;
  width: 90%;
  max-width: 370px;
}

@media screen and (max-width: 480px) {
  .TestableQuestionClass p {
    padding: 15px 0px;
    margin: 10px auto;
    color: white;
  }
}

@media screen and (min-width: 481px) {
  .TestableQuestionClass p {
    max-width: 86%;
  }
}
</style>