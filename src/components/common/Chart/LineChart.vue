<script lang="ts">
import { defineComponent } from "vue";
import { LineChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);
</script>
<template lang="">
  <LineChart> </LineChart>
</template>

<style lang=""></style>
