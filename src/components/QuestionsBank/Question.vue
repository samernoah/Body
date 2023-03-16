<template>
  <div v-for="Question in Questions" :key="Question.id" class="Question">
    <div>{{ Question.Q }} ?</div>
    <div>{{ Question.A.MostRight.discreption }}</div>
    <div v-for="Choise in Question.A.Others" :key="Choise.discreption">
      <div>{{ Choise.discreption }}</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.Question {
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
  padding: 22px 2px;
}
</style>