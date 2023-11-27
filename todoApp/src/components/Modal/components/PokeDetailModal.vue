<script lang="ts" setup>
import type { PokemonDetail } from '@/\btypes/pokemon'
import { useModalStore } from '@/stores/modal'
import { storeToRefs } from 'pinia'
import { watch } from 'vue'
import { typeColors } from '@/constants/typeColors'
import StatsRadarChart from '@/components/Chart/StatsRadarChart.vue'

const modalState = useModalStore()
const { closeGlobalModal } = modalState

const { innerComponentProps } = storeToRefs<PokemonDetail | any>(modalState)

console.log('props', innerComponentProps.value)

watch(innerComponentProps.value, () => {
  console.log(innerComponentProps.value)
})
</script>
<template>
  <div class="modal-content">
    <button class="modal-content_close" @click="closeGlobalModal">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="75"
        height="53"
        viewBox="0 0 75 53"
        fill="none"
      >
        <path d="M0 0H65C70.5228 0 75 4.47715 75 10V53L32.5 23.5L0 0Z" fill="#CE66FF" />
      </svg>
    </button>
    <p class="content__pokemon-name">{{ innerComponentProps.name }}</p>
    <div class="content__pokemon-container">
      <div class="content__pokemon-wrapper">
        <img
          class="content__pokemon-img"
          v-if="innerComponentProps"
          :src="innerComponentProps?.sprites?.front_default"
          alt="pokemon"
        />
        <ul class="content__poketmon-types">
          <li
            v-for="type in innerComponentProps?.types"
            :key="type.type.name"
            :style="`background-color: ${typeColors[type.type.name]}`"
            class="content__poketmon-types-item"
          >
            {{ type.type.name }}
          </li>
        </ul>
      </div>
      <div class="content__pokemon-stats">
        <stats-radar-chart :stats="innerComponentProps.stats"></stats-radar-chart>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 550px;
  height: 450px;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
}

.modal-content_close {
  position: absolute;
  right: -1px;
  top: -1px;
  cursor: pointer;
}

.content__pokemon-name {
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
}

.content__pokemon-container {
  display: flex;
  align-items: center;
}
.content__pokemon-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  gap: 20px;
  height: 100%;
}
.content__pokemon-img {
  border: 1px solid rgba(0, 0, 0, 0.1);
  min-width: 150px;
  width: auto;
  height: 150px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 0 auto;
}

.content__pokemon-stats {
  width: 250px;
  height: 250px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 0 auto;
}

.content__poketmon-types {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}
.content__poketmon-types-item {
  padding: 5px;
  border-radius: 5px;
  margin: auto 0;
}
</style>
