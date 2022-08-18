<template>
  <div>
    <svg :viewBox="`0 0 ${width} ${height}`">
      <g v-for="(entry, index) in entries" :key="'bar-' + index" fill="skyblue">
        <rect
          :x="x(0)"
          :y="y(index)"
          :width="Number(x(entry.value))"
          :height="y.bandwidth()"
        />
      </g>
    </svg>
  </div>
</template>

<script >
const { scaleBand, scaleLiner, max, range } = require("d3");

export default {
  name: "HBarChart",

  data() {
    return {
      margin: {
        top: 30,
        right: 45,
        bottom: 10,
        left: 45,
      },
      barHeight: 25,
      width: 945,
      entries: [
        { name: "E", value: 0.12702 },
        { name: "T", value: 0.09056 },
        { name: "A", value: 0.08167 },
      ],
      columns: ["letter", "frequency"],
      format: "%",
    };
  },
  computed: {
    height() {
      Math.ceil((props.entries.length + 0.1) * barHeight) +
        margin.top +
        margin.bottom;
    },
    x() {
      return scaleLiner()
        .domain([0, max(props.entries, (d) => d.value)])
        .range([margin.left, width - margin.right]);
    },
    y() {
      return scaleBand()
        .domain(range(props.entries.length))
        .rangeRound([margin.top, height - margin.bottom])
        .padding(0.1);
    },
  },
};
</script>


