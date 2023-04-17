<template>
  <div class="QBView">
    <transition name="Evaluator">
      <div class="EffortEvaluator CenteredFlex" v-if="Effort">
        {{ EffortMassage }}
      </div>
    </transition>

    <transition name="NQ">
      <div class="NewQ CenteredFlex">+</div>
    </transition>

    <Header />
    <div class="QBcontainer">
      <!-- <h1>
        Welcome To <br />
        <span ref="BodyWordSpan" class="BodyWordSpan">The Questions Bank</span>
      </h1>

      <p>
        Find And Create Your Own Questions <br />
        And Share It
      </p>

      <div class="QuestionsButton CenteredFlex">Get Started ></div> -->
      <NewQuestion v-if="NewQ" />
      <div class="QuestionsContainer" v-if="!NewQ">
        <!-- Questions Controlers -->

        <!-- Organs Controls -->

        <div class="QuestionsControlers" :class="{ QCPdng: QCPadding }">
          <!-- Search Element -->

          <div class="ControlElement QsearchContainer">
            <input
              type="text"
              name="QSearch"
              id="QSearch"
              ref="QSearch"
              @keyup.enter="QSearch(e)"
            />
            <div class="SearchIconContainer CenteredFlex" @click="QSearch(e)">
              <div class="Ires"></div>
              <div class="Handle"></div>
            </div>
          </div>

          <div
            id="Organnames"
            class="ControlElement"
            @click="ToggleOrgans"
            appear
          >
            <div class="ControlLabel">
              Organ <span v-if="ControlOptions.ChosenOrgan">:</span>
            </div>
            <transition name="CLabel">
              <div class="Organs" v-if="ControlOptions.ChosenOrgan">
                {{ ControlOptions.ChosenOrgan }}
              </div>
            </transition>

            <div
              class="ControlIcon CenteredFlex"
              @click="OrganMenu = !OrganMenu"
            >
              <span>></span>
            </div>

            <transition-group
              name="OrgansAnimation"
              tag="div"
              class="OptionsChoises"
              v-if="OrganMenu"
              appear
            >
              <div
                v-for="Organ in Organs"
                :key="Organ"
                class="Organ"
                @click="ChooseOrgan(e)"
              >
                {{ Organ }}
              </div>
            </transition-group>
          </div>

          <!-- Ease Of Use Controls -->

          <div
            id="Organnames"
            class="ControlElement"
            @click="ToggleEOUs"
            appear
          >
            <div class="ControlLabel">
              Ease Of Use <span v-if="ControlOptions.ChosenEOU">:</span>
            </div>
            <transition name="CLabel">
              <div class="Organs" v-if="ControlOptions.ChosenEOU">
                {{ ControlOptions.ChosenEOU }}
              </div>
            </transition>

            <div class="ControlIcon CenteredFlex" @click="EOUMenu = !EOUMenu">
              <span>></span>
            </div>
            <transition-group
              name="OrgansAnimation"
              tag="div"
              class="OptionsChoises"
              v-if="EOUMenu"
              appear
            >
              <div
                v-for="Type in TypesOfEase"
                :key="Type"
                class="Organ"
                @click="ChooseEOU(e)"
              >
                {{ Type }}
              </div>
            </transition-group>
          </div>
        </div>

        <!-- Question Begining-->

        <div
          v-for="Question in Questions"
          :key="Question.id"
          class="QuestionWrapper"
          :data-QType="Question.T"
          :data-NOAA="Question.NOAA"
          :data-id="Question.id"
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
                    :key="`${Question.id}${Choise.discreption}`"
                  >
                    <div>
                      <input
                        class="optionmark"
                        type="radio"
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
                  :key="`${Question.id}${Choise.discreption}`"
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
                  <div><input class="textanswer" type="text" /></div>
                  <div class="Chosendiscription CenteredFlex">
                    {{ Question.A.MostRight.chosen }}
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

        <!-- Question End-->
      </div>
    </div>

    <Footer />
  </div>
</template>

<script >
import Header from "../components/Header/Header.vue";
import Footer from "../components/Footer/Footer.vue";
import NewQuestion from "../components/QuestionsBank/NewQuestion.vue"

export default {
  components: { Header, Footer, NewQuestion },

  data() {
    return {
      Effort: false,
      EffortContinous: [
        "Try Again",
        "Nice Try , Go Again",
        "Good Effort , Continue",
        "Go Again",
        "Try Another Choice/s",
        "Another Try",
        "Keep Going",
      ],
      EffortPays: [
        "Correct",
        "Right Choise/s",
        "Nice Job",
        "Amaizing",
        "This is Sorcery",
        "How did do that!",
        "Hehachi Michima Wins ...",
      ],
      EffortMassage: "",
      Organs: ["Heart", "Pancrease"],
      TypesOfEase: ["Introductory", "Intermediate", "Advanced"],
      ControlOptions: {
        ChosenOrgan: "",
        ChosenEOU: "",
      },
      OrganMenu: false,
      EOUMenu: false,
      SearchedQuestions:[],
      NewQ:true
    };
  },
  computed: {
    Questions() {
      let QuestionsList ;
      if (this.SearchedQuestions.length === 0) {
       QuestionsList = this.$store.state.Questions ; 
      }else{
       QuestionsList = this.SearchedQuestions ;
      }
      
      QuestionsList.forEach((Q) => {
        if (Q.T !== "r") {
          this.shuffle(Q.A.Choises);
        }
      });
      return QuestionsList;
    },
    QCPadding(){
      return this.OrganMenu || this.EOUMenu ?true:false ;
    }
  },
  methods: {
    checkAnswer() {
      let msgN = Math.round(
        this.randomNumber(0, this.EffortContinous.length - 1)
      );
      let btn = event.target.dataset.checkid;
      let Qel = this.$refs[`Q${btn}`][0];
      let Fel = this.$refs[`f${btn}`][0];
      let Qid = Qel.dataset.id;
      let Q = this.Questions.find((qs) => qs.id == Qid);

      // Single Choise Handler

      if (Qel.dataset.qtype === "s") {
        let ChosenAnswer = Fel.querySelector(`input[name="${btn}"]:checked`);

        if (ChosenAnswer === null) {
          return;
        }

        if (ChosenAnswer.nextSibling.nextSibling.classList.contains("Chosen")) {
          console.log("it does");
          return;
        }
        ChosenAnswer.nextSibling.nextSibling.classList.add("Chosen");

        if (ChosenAnswer.dataset.maa === "yes") {
          this.EffortMassage = this.EffortPays[msgN];
          this.QueMassage();
          Q.CC = true;
          Q.C = true;
        } else {
          this.EffortMassage = this.EffortContinous[msgN];
          this.QueMassage();
          Q.C = true;
        }
      }

      // Multiple Choises Handler
      else if (Qel.dataset.qtype === "m") {
        let Answers = [];
        Fel.querySelectorAll(`input[name="${btn}"]:checked`).forEach(
          (Choise) => {
            Answers.push(Choise.dataset.maa);
            Choise.nextSibling.nextElementSibling.classList.add("Chosen");
          }
        );

        if (Answers.length === 0) {
          return;
        }

        if (Answers.length != Qel.dataset.noaa || Answers.includes("no")) {
          this.EffortMassage = this.EffortContinous[msgN];
          this.QueMassage();
          Q.C = true;
          return;
        } else {
          this.EffortMassage = this.EffortPays[msgN];
          this.QueMassage();
          Q.CC = true;
          Q.C = true;
          return;
        }
      } else if (Qel.dataset.qtype === "r") {
        let Answer = Fel.dataset.aa;
        Fel.childNodes[0].childNodes[1].classList.add("ChosenforReguler");
        // setTimeout(() => {
        Fel.childNodes[0].childNodes[1].classList.add("Chosen");
        // }, 300);

        if (Answer == Fel.childNodes[0].childNodes[0].childNodes[0].value) {
          this.EffortMassage = this.EffortPays[msgN];
          this.QueMassage();
          Q.CC = true;
          return;
        } else {
          this.EffortMassage = this.EffortContinous[msgN];
          this.QueMassage();
          Q.C = true;
        }
      }
    },
    reset() {
      let btn = event.target.dataset.checkid;
      let Qel = this.$refs[`Q${btn}`][0];
      let Fel = this.$refs[`f${btn}`][0];
      let Qid = Qel.dataset.id;
      let Q = this.Questions.find((qs) => qs.id == Qid);

      if (Qel.dataset.qtype === "s" || Qel.dataset.qtype === "m") {
        let ChosenAnswers = Fel.querySelectorAll(`.Chosen`);
        let CheckedAnswers = Fel.querySelectorAll(
          `input[name="${btn}"]:checked`
        );
        ChosenAnswers.forEach((ChosenAnswer) =>
          ChosenAnswer.classList.remove("Chosen")
        );
        CheckedAnswers.forEach((CA) => (CA.checked = false));
      } else if (Qel.dataset.qtype === "r") {
        Fel.childNodes[0].childNodes[1].classList.remove("ChosenforReguler");
        Fel.childNodes[0].childNodes[1].classList.remove("Chosen");
      }
      Q.CC = false;
      Q.C = false;
    },
    showall() {
      let btn = event.target.dataset.checkid;
      let Qel = this.$refs[`Q${btn}`][0];
      let Fel = this.$refs[`f${btn}`][0];
      let Qid = Qel.dataset.id;
      let Q = this.Questions.find((qs) => qs.id == Qid);

      if (Qel.dataset.qtype === "s" || Qel.dataset.qtype === "m") {
        Fel.querySelectorAll(`.Chosendiscription`).forEach((Choise) => {
          if (Choise.classList.contains("Chosen") === false) {
            Choise.classList.add("Chosen");
          }
        });
      } else if (Qel.dataset.qtype === "r") {
        return;
      }
    },
    QSearch(){
      this.SearchedQuestions = [] ;
      let SearchQuery = this.$refs.QSearch.value ;
      let QIDs = [] ;
      this.$store.state.Questions.forEach(
      (Q) => {
        if (Q.Q.toLowerCase().includes(SearchQuery)) {
          this.SearchedQuestions.push(Q);
        }
      }
      ) ;
    },
    ChooseOrgan() {
      this.OrganMenu = false;
      this.ControlOptions.ChosenOrgan = event.target.innerText;
    },
    ChooseEOU() {
      this.EOUMenu = false;
      this.ControlOptions.ChosenEOU = event.target.innerText;
    },
    shuffle(array) {
      let currentIndex = array.length,
        randomIndex;

      // While there remain elements to shuffle.
      while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }

      return array;
    },
    randomNumber(min, max) {
      return Math.random() * (max - min) + min;
    },
    QueMassage() {
      if ((this.effort = true)) {
        this.effort = false;
        if (window.efrt) {
          clearTimeout(window.efrt);
        }
        this.Effort = true;
      }
      window.efrt = setTimeout(() => {
        this.Effort = false;
      }, 3000);
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
  position: relative;
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
  box-shadow: 0 0 0.5px 0.5px #ffffff24;
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
  display: block;
  width: 86%;
  margin: 0 auto;
  padding: 3px 4px;
}

.QBView .Chosendiscription {
  position: relative;
  width: 86%;
  transition: all 0.3s ease-in, font-size 0.8s ease-in;
  font-size: 3px;
  margin: 0 auto;
  font-weight: 600;
  background: transparent;
  color: transparent;
  border-top: 1px transparent solid;
  font-family: fangsong;
}

.QBView .Chosen {
  margin: 10px auto -10px auto;
  padding: 15px 4px 15px 4px;
  border-top: 1px rgb(112 77 24 / 32%) solid;
  color: #000000b8;
  background: -webkit-linear-gradient(
    top left,
    rgb(112 77 24 / 5%),
    rgb(187 163 38 / 60%),
    rgb(112 83 17 / 5%)
  );
  display: block;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease-in, font-size 0.3s ease-in, border-top 3s ease,
    transfrom 0;
}

.QBView .ChosenforReguler {
  border-top: 1px rgb(112 77 24 / 32%) solid;
  transform: translateY(-6.8px);
}

.QBView .optionmark {
  position: absolute;
  border: 1px blue solid;
  left: 0;
  top: 50%;
  transform: translateY(-75%);
}

.QBView .textanswer {
  background-color: transparent;
  text-align: center;
  border: none;
  border-bottom: 2px rgb(112 77 24 / 47%) solid;
  font-size: 16px;
  transform: translateY(3px);
  outline: none;
}

.QBView .QuestionCheckingControl {
  width: 70%;
  max-width: 368px;
  height: 34px;
  /* display: flex; */
  margin: 30px auto;
  padding: 13px;
}

.QBView .QuestionCheck {
  display: inline-block;
  margin: 0px 13px;
  min-width: 63px;
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
  cursor: pointer;
  transition: all 0.6s ease-in;
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

  .QBView .QuestionsControlers {
    justify-content: flex-start;
  }

  .QBView .QsearchContainer {
    margin: 0 6px 0px 8px;
    min-width: 189px;
    max-width: 217px;
    flex-grow: 4;
  }
}
@media screen and (max-width: 700px) and (min-width: 481px) {
  .QBView h1 {
    width: 349;
    z-index: 4;
  }

  .QBView .QBButton {
    padding: 10px 3px;
  }

  .QBView .QuestionsControlers {
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  .QBView .QsearchContainer {
    width: 100%;
    margin-bottom: 33px;
    max-width: 100%;
    flex-grow: 4;
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

  .QBView .ControlLabel {
    display: none;
  }

  .QBView .QuestionsControlers {
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  .QBView .QsearchContainer {
    width: 100%;
    margin-bottom: 33px;
    max-width: 100%;
    flex-grow: 4;
  }

  .QBView .ControlLabel {
    display: none;
  }
}

.QBView .QuestionsControlers {
  display: flex;
  position: relative;
  width: 90%;
  max-width: 1000px;
  margin: 33px auto;
  padding-bottom: 13px;
  border-bottom: 1.8px #9b6107a3 solid;
  align-items: flex-start;
  z-index: 20;
}

.QBView .QCPdng {
  padding-bottom: 113px;
}

.QBView .ControlElement {
  display: inline-block;
  position: relative;
  margin-right: 6px;
  margin-left: 8px;
  color: white;
}

.QBView #QSearch {
  background-color: transparent;
  text-align: center;
  border: none;
  /* border: 1px rgb(112 77 24 / 2%) solid; */
  font-size: 16px;
  transform: translate(-10px, 9.3px);
  outline: none;
  width: 72%;
  height: 32px;
  color: white;
  backdrop-filter: blur(20px);
  border-radius: 21px;
  box-shadow: 0 0 0 1px rgb(112 77 24 / 21%);
}

.QBView .QsearchContainer {
  transform: translate(-18px, -8px);
}

.QBView .SearchIconContainer {
  position: absolute;
  background: -webkit-linear-gradient(
    top left,
    rgb(112 77 24 / 73%),
    rgb(187 163 38 / 73%),
    rgb(112 83 17 / 73%)
  );
  border: 1px #9b610759 solid;
  color: white;
  border-radius: 3px;
  width: 35px;
  height: 35px;
  right: 0;
  top: 50%;
  transform: translate(8px, -31%) rotate(-38deg);
  border-radius: 19px;
}

.QBView .Ires {
  position: absolute;
  width: 20%;
  height: 20%;
  box-shadow: 0 0 0 2.5px white;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -109%);
  z-index: 10;
}

.QBView .Handle {
  position: absolute;
  width: 14%;
  height: 23%;
  background-color: white;
  border-radius: 5px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, 9%);
}

.QBView .ControlLabel {
  display: inline-block;
  background: -webkit-linear-gradient(
    top left,
    rgb(112 77 24 / 73%),
    rgb(187 163 38 / 73%),
    rgb(112 83 17 / 73%)
  );
  border: 1px #9b610759 solid;
  padding: 8px;
  border-radius: 18px 2px 2px 18px;
  border-radius: 5px 3px 3px 5px;
  font-size: 14px;
}

.QBView .Organs {
  display: inline-block;
  position: relative;
  background: -webkit-linear-gradient(
    top left,
    rgb(112 77 24 / 73%),
    rgb(187 163 38 / 73%),
    rgb(112 83 17 / 73%)
  );
  border: 1px #9b610759 solid;
  padding: 8px;
  border-radius: 3px;
  margin-left: 1px;
  font-size: 14px;
}

.QBView .ControlIcon {
  display: inline-block;
  background: -webkit-linear-gradient(
    top left,
    rgb(112 77 24 / 73%),
    rgb(187 163 38 / 73%),
    rgb(112 83 17 / 73%)
  );
  border: 1px #9b610759 solid;
  padding: 7px 9px;
  border-radius: 3px 18px 18px 3px;
  margin-left: 1px;
  cursor: pointer;
}

.QBView .ControlIcon span {
  display: inline-block;
  font-size: 13px;
  font-weight: 700;
  font-family: fangsong;
  transform: translateX(-1.6px) rotate(90deg);
  color: rgba(255, 255, 255, 0.63);
  transition: all 0.1s ease-in;
}

.QBView .ControlIcon:hover span {
  color: white;
}

.QBView .OptionsChoises {
  position: absolute;
  width: 100%;
  backdrop-filter: blur(8px);
  z-index: 20;
  border-radius: 3px;
}

.QBView .Organ {
  display: block;
  background: -webkit-linear-gradient(
    top left,
    rgb(112 77 24 / 73%),
    rgb(187 163 38 / 73%),
    rgb(112 83 17 / 73%)
  );
  border: 1px #9b610759 solid;
  padding: 8px 7px;
  margin-top: 3px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12.5px;
}

.QBView .EffortEvaluator {
  position: fixed;
  width: 180px;
  height: 40px;
  top: 35%;
  right: 10%;
  /* transform: translate(-50%, -50%); */
  background: -webkit-linear-gradient(
    top left,
    rgb(112 77 24 / 73%),
    rgb(187 163 38 / 73%),
    rgb(112 83 17 / 73%)
  );
  border: 1px #9b610759 solid;
  color: white;
  border-radius: 2px;
  z-index: 20;
}

.QBView .NewQ {
  position: fixed;
  width: 50px;
  height: 50px;
  right: 5%;
  right: 34px;
  bottom: 9%;
  background: -webkit-linear-gradient(
    top left,
    rgb(112 77 24 / 73%),
    rgb(187 163 38 / 73%),
    rgb(112 83 17 / 73%)
  );
  border: 1px #9b610759 solid;
  border-radius: 47px;
  color: rgba(255, 255, 255, 0.726);
  font-size: 3rem;
  cursor: pointer;
  z-index: 20;
  transition: all 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);
}

.QBView .NewQ:hover {
  /* transform: scale(1.1); */
  box-shadow: 0 0 0.5px 1px #ffffff42;
}

.OrgansAnimation-enter-from,
.OrgansAnimation-leave-to {
  opacity: 0;
  transform: translateY(-20%);
}

.CLabel-enter-from,
.CLabel-leave-to {
  opacity: 0;
  width: 0;
}

.Evaluator-enter-from,
.Evaluator-leave-to {
  opacity: 0;
  transform: translateX(50%);
}

.Evaluator-enter-active,
.Evaluator-leave-active {
  transition: all 1s ease;
}

.check-enter-from,
.check-leave-to {
  flex: 0;
  opacity: 0;
  transform: translateY(-50%);
}

.reset-enter-from,
.reset-leave-to {
  flex: 0;
  opacity: 0;
  transform: translateX(50%);
}

.showall-enter-from,
.showall-leave-to {
  flex: 0;
  opacity: 0;
  transform: translateX(-50%);
}

.OrgansAnimation-enter-active,
.OrgansAnimation-leave-active,
.check-enter-active,
.check-leave-active,
.showall-enter-active,
.showall-leave-active,
.reset-enter-active,
.reset-leave-active {
  transition: all 0.3s ease;
}

.OrgansAnimation-move {
  transition: all 0.3s ease-in;
}

.Clabel-enter-active,
.Clabel-leave-active {
  transition: all 1s ease-in;
}

.NQ-enter-from,
.NQ-leave-to {
  opacity: 0;
  transform: translateX(50%);
}

.NQ-enter-active,
.NQ-leave-active {
  transition: all 0.3s ease;
}
</style>
