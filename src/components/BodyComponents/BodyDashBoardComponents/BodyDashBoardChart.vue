<template>
  <div class="Chart bvsection">
    <div class="bvchartheader" @click.self="ChartsMenuToggle">
      <div class="spacediv" />
      {{ ChartNameForHeaderDisplay }}
      <div class="MenuIcon" @click="ChartsMenuToggle">></div>
      <div class="ChartsMenu" v-if="ChartMenuActive">
        <div
          class="ChartsMenuItems"
          @click.self="ChooseChartFromChartsMenue(event)"
          v-for="chart in Charts"
          :key="chart.ChartComponentName"
        >
          {{ chart.ChartMenuName }}
        </div>
      </div>
    </div>
    <component :is="ChartName" />
  </div>
</template>

<script>
import LineChart from "../../Charts/LineChart.vue";
import BarChart from "../../Charts/BarChart.vue";
export default {
  components: { LineChart, BarChart },
  data() {
    return {
      ChartName: "BarChart",
      ChartNameForHeaderDisplay: "Bar Chart",
      ChartMenuActive: false,
      Charts: [
        { ChartComponentName: "LineChart", ChartMenuName: "Line Chart" },
        { ChartComponentName: "BarChart", ChartMenuName: "Bar Chart" },
      ],
    };
  },
  methods: {
    ChartsMenuToggle() {
      this.ChartMenuActive = !this.ChartMenuActive;
    },
    ChooseChartFromChartsMenue() {
      // console.log(event);
      // window.testval = event;
      this.ChartName = event.srcElement.__vnode.props.key;
      this.ChartNameForHeaderDisplay = event.srcElement.__vnode.children;
      this.ChartMenuActive = false;
    },
  },
};
</script>

<style>
.bvchartheader {
  height: 30px;
  border-bottom: var(--DBsectionBorder);
  color: white;
  text-align: left;
  font-size: 11.5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid rgb(34, 37, 39);
  transition: all 0.2s ease-in;
  cursor: pointer;
}

.bvchartheader:hover .MenuIcon {
  color: white;
}
.MenuIcon {
  position: absolute;
  font-size: 13px;
  transform: rotate(90deg);
  top: 7px;
  right: 7px;
  color: #9d9d9d;
  transition: color 0.2s ease-in;
  cursor: pointer;
  overflow: hidden;
}

.Chart {
  width: 250px;
  height: 280px;
}
.ChartsMenu {
  position: absolute;
  max-height: 250px;
  top: 30px;
  width: 100%;
  background-color: rgb(34, 37, 39);
  border-top: 1px solid #5a5a5a;

  overflow-y: auto;
  overflow-x: hidden;
  transition: all 0.2s ease-in;
}
.ChartsMenuItems {
  width: 100%;
  height: 25px;
  font-size: 11px;
  color: white;
  padding: 2px 0 2px 11px;
  border-bottom: 1px solid #5c5c5c;
  display: flex;
  justify-content: left;
  align-items: center;
  transition: all 0.1s ease-in;
}
.ChartsMenuItems:hover {
  background-color: rgb(119, 119, 117);
}
</style>