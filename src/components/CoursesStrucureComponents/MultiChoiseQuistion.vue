<template>
  <div class="MultiChoiseQuistion">
    <h4>{{ Quistion }}</h4>
    <form id="Qform" name="Qform" ref="Qform" action="post">
      <div class="form">
        <div class="Quistion" v-for="choise of Choises" :key="choise">
          <input type="radio" :name="Quistion" :id="choise.id" />
          <p>{{ choise.choise }}</p>
        </div>
      </div>
      <input
        @click.prevent="CheckCorrectAnswer"
        class="QuistionSubmitButton"
        type="submit"
        value="Continue"
      />
    </form>
  </div>
</template>

<script>
export default {
  props: ["choises", "quistion", "QAId"],
  computed: {
    Choises() {
      return this.$props.choises;
    },
    Quistion() {
      return this.$props.quistion;
    },
  },
  methods: {
    CheckCorrectAnswer() {
      let form = document.getElementById("Qform");
      let CorrectAnswer = this.$props.QAId;
      console.log(CorrectAnswer);
      for (const element of form.elements) {
        if (Number(element.id) === CorrectAnswer && element.checked) {
          this.$emit("MQRightAnswer");
        } else {
          continue;
        }
      }
    },
  },
};
</script>

<style>
.MultiChoiseQuistion .form {
  margin: 20px auto;
  width: 70%;
}
.MultiChoiseQuistion h4 {
  text-align: left;
  padding-left: 20%;
  color: rgb(201, 181, 181);
}
.MultiChoiseQuistion form p {
  color: white;
  display: inline-block;
  margin-left: 10px;
}
.MultiChoiseQuistion form .Quistion {
  margin: 0 auto;
  border: 1px #195a7ab0 solid;
  background: -webkit-linear-gradient(
    top left,
    rgb(24 100 112 / 89%),
    rgb(38 147 187 / 89%),
    rgb(17 90 112 / 89%)
  );
  color: white;
}
.MultiChoiseQuistion .form .Quistion:last-child {
  border-bottom: none;
}
.MultiChoiseQuistion form .QuistionSubmitButton {
  margin: 30px auto;
  width: 170px;
  height: 45px;
  color: white;
  background: -webkit-linear-gradient(
    top left,
    rgb(24 100 112 / 90%),
    rgb(38 147 187 / 90%),
    rgb(17 90 112 / 90%)
  );
  border: 1px #195a7ab0 solid;
  border-radius: 1px;
  font-size: 1.1rem;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s;
}
.MultiChoiseQuistion form .QuistionSubmitButton:hover {
  box-shadow: 0 0 5px 0 white;
}
</style>