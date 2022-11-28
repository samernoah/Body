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
  border: 1px rgb(23, 23, 24) solid;
  background-color: rgb(56, 59, 61);
  width: 70%;
  border-radius: 5px;
}
.MultiChoiseQuistion h4 {
  text-align: left;
  padding-left: 20%;
  color: white;
}
.MultiChoiseQuistion form p {
  color: rgb(197, 194, 194);
  display: inline-block;
  margin-left: 10px;
}
.MultiChoiseQuistion form .Quistion {
  margin: 0 auto;
  border-bottom: 1px rgb(131, 131, 131) solid;
  max-width: 100%;
}
.MultiChoiseQuistion .form .Quistion:last-child {
  border-bottom: none;
}
.MultiChoiseQuistion form .QuistionSubmitButton {
  margin: 30px auto;
  width: 170px;
  height: 45px;
  border: none;
  background-color: rgb(83, 147, 182);
  color: white;
  font-size: 1.1rem;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s;
}
.MultiChoiseQuistion form .QuistionSubmitButton:hover {
  box-shadow: 0 0 5px 0 white;
}
</style>