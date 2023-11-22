<script lang="ts" setup>
import { useModalStore } from '@/stores/modal'
import { storeToRefs } from 'pinia'
import { watch } from 'vue'

const modalState = useModalStore()
const { closeGlobalModal } = modalState

const { innerComponentProps } = storeToRefs(modalState)

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
    <p class="content__pokemon-name">어니부기</p>
    <div class="content__pokemon-container">
      <img
        class="content__pokemon-img"
        v-if="innerComponentProps"
        :src="innerComponentProps?.sprites?.front_default"
        alt="pokemon"
      />
      <div class="content__pokemon-stats"></div>
    </div>
  </div>
</template>

<style scoped>
.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 400px;
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
  width: 200px;
  height: 200px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 0 auto;
}
</style>
