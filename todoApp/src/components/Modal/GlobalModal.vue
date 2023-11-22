<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useModalStore } from '@/stores/modal'

const modalState = useModalStore()
const { closeGlobalModal } = modalState
</script>

<template>
  <Teleport to="#modal">
    <div v-if="modalState.isModalOpen" class="modal">
      <component :is="modalState.innerComponent"></component>
    </div>
  </Teleport>
</template>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>
