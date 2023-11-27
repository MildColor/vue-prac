<script lang="ts" setup>
import { useAsyncState } from '@vueuse/core'
import { pokemonApis } from '@/server/pokemons'
import { watch } from 'vue'
import { useModalStore } from '@/stores/modal'
import PokeDetailModal from '@/components/Modal/components/PokeDetailModal.vue'

const props = defineProps(['pokemonUrl', 'pokemonName'])
const modalState = useModalStore()
const { toggleGlobalModal, openGlobalModal } = modalState

const { state, isReady, isLoading } = useAsyncState(
  async () => {
    try {
      const response = await pokemonApis.getPokemonDetail(props.pokemonUrl)
      return response.data
    } catch (error) {
      console.log(error)
    }
  },
  // 초기상태
  {},
  // 옵션
  {}
)

const handleClickDetailModal = () => {
  openGlobalModal(PokeDetailModal, { ...state.value })
}
</script>
<template>
  <li class="poke-list__card">
    <div class="poke-list__card-content">
      <img :src="state?.sprites?.front_default" class="poke-list__card-image" alt="pokemon" />
      <p class="poke-list__card-name">{{ state.name }}</p>
    </div>

    <button class="poke-list__card-detail" @click="handleClickDetailModal">
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
  </li>
</template>

<style scoped>
.poke-list__card {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  min-width: 200px;
  width: auto;
  height: 200px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  position: relative;
}

.poke-list__card-name {
  text-align: center;
}

.poke-list__card-detail {
  position: absolute;
  right: -1px;
  top: -1px;
  cursor: pointer;
}
</style>
