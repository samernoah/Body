<template>
  <div class="QBView">
    <Header />
    <div class="QBcontainer">
      <h1>
        Welcome To <br />
        <span ref="BodyWordSpan" class="BodyWordSpan">The Questions Bank</span>
      </h1>

      <p>
        Find And Create Your Own Questions <br />
        And Share It
      </p>

      <div class="QuestionsButton CenteredFlex">Get Started ></div>

      <div class="QuestionsContainer">
        <div class="QuestionsControlers"></div>

        <!-- Question Begining-->

        <div
          v-for="Question in Questions"
          :key="Question.id"
          class="QuestionWrapper"
          :data-QType="Question.T"
          :data-NOAA="Question.NOAA"
          :ref="`Q${Question.id}`"
        >
          <div class="Question">
            <div class="TheQuestion">{{ Question.Q }} ?</div>

            <div v-if="Question.T === 's'">
              <form action="" method="post" :ref="`f${Question.id}`">
                <div class="QOptions">
                  <div
                    class="Option"
                    v-for="Choise in Question.A.Choises"
                    :key="Choise.discreption"
                  >
                    <div>
                      <input
                        class="optionmark"
                        type="radio"
                        :name="Question.id"
                        :id="Choise.discreption"
                        :data-MAA="Choise.IMR === true ? 'yes' : 'no'"
                      />
                      <div class="Qestiondiscription">
                        {{ Choise.discreption }}
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div v-if="Question.T === 'm'">
              <form action="" method="post" :ref="`f${Question.id}`">
                <div
                  class="Option"
                  v-for="Choise in Question.A.Choises"
                  :key="Choise.discreption"
                >
                  <div>
                    <input
                      class="optionmark"
                      type="checkbox"
                      :name="Question.id"
                      :id="Choise.discreption"
                    />
                    <div class="Qestiondiscription">
                      {{ Choise.discreption }}
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div v-if="Question.T === 'r'">
              <form action="" method="post" :ref="`f${Question.id}`">
                <div>
                  <div><input class="textanswer" type="text" /></div>
                </div>
              </form>
            </div>
          </div>
          <div
            class="QuestionCheck"
            :data-checkid="Question.id"
            @click="checkAnswer(e)"
            :ref="`check${Question.id}`"
          >
            Check
          </div>
          <div class="QuestionBorderBottom" />
        </div>

        <!-- Question End-->
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header/Header.vue";
import Footer from "../components/Footer/Footer.vue";

export default {
  components: { Header, Footer },

  data() {
    return {};
  },
  computed: {
    Questions() {
      return this.$store.state.Questions;
    },
  },
  methods: {
    checkAnswer() {
      let btn = event.target.dataset.checkid;

      // window.testel = this.$refs[`Q${btn}`];
      // console.log(this.$refs[`Q${btn}`][0].dataset.qtype);

      switch (this.$refs[`Q${btn}`][0].dataset.qtype) {
        case "s":
          console.log(
            this.$refs[`f${btn}`][0].querySelector(
              `input[name="${btn}"]:checked`
            ).dataset.maa
          );
          break;
        case "m":
          console.log(
            this.$refs[`f${btn}`][0].querySelectorAll(
              `input[name="${btn}"]:checked`
            )
          );
          break;

        default:
          break;
      }
    },
  },
};
</script>

<style>
.QBView {
  position: relative;
  background-image: url(../assets/4.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 170%;
  width: 100%;
  display: flex;
  flex-flow: column;
  transition: all 0.2s ease-in;
  overflow: auto;
}
.QBView .QBcontainer {
  width: 98%;
  margin: 0 auto -14px auto;
  overflow: auto;
  transform: translateX(5px);
}

.QBView .QBcontainer::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

.QBView .QBcontainer::-webkit-scrollbar-thumb {
  background: -webkit-linear-gradient(
    top left,
    rgb(112 77 24 / 60%),
    rgb(187 163 38 / 60%),
    rgb(112 83 17 / 60%)
  );
  border: 1px #644b0fad solid;
  border-radius: 10px;
}

/* .QBView .QBcontainer::-webkit-scrollbar-track {
  background-color: #4e464670;
  border-radius: 10px;
  border: 1px #48444473 solid;
} */

.QBView h1 {
  margin: 41px auto -32px auto;
  font-size: 2.5rem;
  color: white;
  width: 26%;
  background: -webkit-linear-gradient(
    top left,
    rgb(112 77 24 / 73%),
    rgb(187 163 38 / 73%),
    rgb(112 83 17 / 73%)
  );
  border: 1px #9b610759 solid;
  border-radius: 0px;
  padding: 14px 11px;
  z-index: 4;
}
.QBView p {
  display: block;
  margin: 60px auto 0 auto;
  color: white;
  width: 56%;
  max-width: 370px;
  background: -webkit-linear-gradient(
    top left,
    rgb(112 77 24 / 73%),
    rgb(187 163 38 / 73%),
    rgb(112 83 17 / 73%)
  );
  border: 1px #9b610759 solid;
  border-radius: 0px;
  padding: 25px 50px;
  z-index: 4;
}
.QBView a {
  text-decoration: none;
}

.QBView .QuestionsButton {
  margin: 46px auto 80px auto;
  width: 80%;
  height: 40px;
  max-width: 150px;
  background: -webkit-linear-gradient(
    top left,
    rgb(112 77 24 / 73%),
    rgb(187 163 38 / 73%),
    rgb(112 83 17 / 73%)
  );
  border: 1px #9b610759 solid;
  color: white;
  border-radius: 20px;
  cursor: pointer;
  z-index: 4;
  flex-grow: unset;
}

.QBView .QuestionsContainer {
  position: relative;
  width: 100%;
}

.QBView .QuestionWrapper {
  width: 100%;
}

.QBView .Question {
  position: relative;
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
  border-radius: 3px;
  padding: 22px 2px 30px 2px;
}
.BodyWordSpan {
  color: skyblue;
  animation: BodyWord 8s ease-in 1s infinite alternate;
  transition: color 1s ease-in;
}

.QBView .TheQuestion {
  margin: 5px auto 17px auto;
}

.QBView .Option {
  position: relative;
  width: 80%;
  margin: 0 auto;
  border-top: 1px rgb(112 77 24 / 32%) solid;
  border-bottom: 1px rgb(112 77 24 / 32%) solid;
  color: white;
  padding: 10px 0;
}

.QBView .QOptions .Option:nth-last-child(1) {
  border-bottom: 1px transparent solid;
}

.QBView .QOptions .Option:nth-child(1) {
  border-top: 1px transparent solid;
}

.QBView .Qestiondiscription {
  width: 86%;
  margin: 0 auto;
  padding: 3px 4px;
}

.QBView .optionmark {
  position: absolute;
  border: 1px blue solid;
  left: 0;
  top: 50%;
  transform: translateY(-75%);
}

.QBView .QuestionCheck {
  position: relative;
  margin: 14px auto 19px auto;
  width: 15%;
  max-width: 100px;
  background: -webkit-linear-gradient(
    top left,
    rgb(112 77 24 / 73%),
    rgb(187 163 38 / 73%),
    rgb(112 83 17 / 73%)
  );
  border: 1px #9b610759 solid;
  color: white;
  border-radius: 3px;
  padding: 12px;
}

.QBView .QuestionBorderBottom {
  width: 80%;
  margin: 60px auto;
  border: 1.5px rgb(112 77 24 / 70%) solid;
  border-radius: 15px;
}

@keyframes BodyWord {
  0% {
    color: rgb(135, 207, 235);
  }
  25% {
    color: rgba(135, 207, 235, 0.562);
  }
  75% {
    color: rgba(255, 166, 0, 0.582);
  }
  100% {
    color: rgb(255, 166, 0);
  }
}

@keyframes BGBodyWord {
  0% {
    color: rgb(16, 18, 20, 0.03);
  }
  100% {
    color: rgba(255, 255, 255, 0.03);
  }
}
@media screen and (min-width: 481px) {
  .QBView .QBButton {
    margin-top: 50px;
    width: 200px;
    z-index: 4;
    height: 40px;
  }
  .QBView h1 {
    margin-top: 60px;
    z-index: 4;
    min-width: 349px;
  }

  .QBView p {
    margin-top: 66px;
    z-index: 4;
  }
}
@media screen and (max-width: 580px) and (min-width: 481px) {
  .QBView h1 {
    width: 349;
    z-index: 4;
  }

  .QBView .QBButton {
    padding: 10px 3px;
  }
}
@media screen and (max-width: 480px) {
  .QBView {
    height: 205%;
  }

  .QBView h1 {
    font-size: 2.3rem;
    width: 85%;
    z-index: 4;
  }

  .QBView p {
    width: 90%;
    z-index: 4;
    padding: 15px 0px;
  }

  .QBView .QBButton {
    margin-top: 50px;
    width: 200px;
    z-index: 4;
    height: 40px;
  }
}
</style>
