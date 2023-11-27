<script lang="ts" setup>
import { PolarAreaChart, RadarChart } from 'vue-chart-3'
import { Chart, registerables } from 'chart.js'
import { statColors } from '@/constants/statColors'
import type { Stat } from '@/\btypes/pokemon'
import { ref } from 'vue'

Chart.register(...registerables)

const props = defineProps(['stats'])

const chartRef = ref()

const options = ref({
  responsive: true,
  plugins: {
    legend: {
      display: true, // Hide the legend
      position: 'bottom',
      labels: {
        usePointStyle: true,
        pointStyle: 'circle'
      }
    },
    title: {
      display: true,
      text: 'Stats of Poketmon'
    }
  },
  scales: {
    r: {
      min: 0, // Set the minimum value for the radar chart
      max: 230, // Set the maximum value for the radar chart
      ticks: {
        display: false // Hide the labels on the radar chart
      },
      pointLabels: {
        display: false // Set to true if you want to display labels,
      }
    }
  }
})

const chartData = {
  labels: props.stats.map((item: Stat) => item.stat.name),
  datasets: [
    {
      label: 'Stats',
      data: props.stats.map((item: Stat) => item.base_stat),
      backGroundColor: props.stats.map((item: Stat) => statColors[item.stat.name])
    }
  ]
}
// backgroundColor: props.stats.map((item: Stat) => statColors[item.stat.name])

const config = {
  type: 'radar',
  data: chartData,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Radar Chart'
      }
    }
  }
}
</script>
<template>
  <!-- <radar-chart :chartData="chartData" :options="options"></radar-chart> -->
  <polar-area-chart :chartData="chartData" :options="options"></polar-area-chart>
</template>

<style></style>
