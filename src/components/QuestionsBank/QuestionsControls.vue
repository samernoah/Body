<template>
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

    <div id="Organnames" class="ControlElement" @click="ToggleOrgans" appear>
      <div class="ControlLabel">
        Organ <span v-if="ControlOptions.ChosenOrgan">:</span>
      </div>
      <transition name="CLabel">
        <div class="Organs" v-if="ControlOptions.ChosenOrgan">
          {{ ControlOptions.ChosenOrgan }}
        </div>
      </transition>

      <div class="ControlIcon CenteredFlex" @click="OrganMenu = !OrganMenu">
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

    <div id="Organnames" class="ControlElement" @click="ToggleEOUs" appear>
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
</template>

<script>
export default {

}
</script>

<style>
</style>