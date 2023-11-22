<script lang="ts" setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import HomePokeList from '@/components/Home/HomePokeList.vue'
import { useAsyncState } from '@vueuse/core'
import { pokemonApis } from '@/server/pokemons'
import { onMounted, onUnmounted, ref, watch } from 'vue'
import HomePokeListCard from '@/components/Home/HomePokeListCard.vue'
import type { PokeList } from '@/\btypes/pokemon'
import { useObserver } from '@/composable/useObserver'
import GlobalModal from '@/components/Modal/GlobalModal.vue'

const paginationParams = ref({ offset: 0, limit: 30 })

const { state, isReady, isLoading, execute } = useAsyncState(
  async (args) => {
    try {
      const response = await pokemonApis.getPokemons(args)
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

const increaseOffset = () => {
  if (state.value.count > paginationParams.value.offset) {
    paginationParams.value = {
      ...paginationParams.value,
      offset: paginationParams.value.offset + 30
    }
  }
}
const decreaseOffest = () => {
  if (paginationParams.value.offset > 29) {
    paginationParams.value = {
      ...paginationParams.value,
      offset: paginationParams.value.offset - 30
    }
  }
}

const handlePrevPage = () => {
  decreaseOffest()
  execute(0, { ...paginationParams.value })
}
const handleNextPage = () => {
  increaseOffset()
  execute(0, { ...paginationParams.value })
}

watch(paginationParams, () => {
  console.log(paginationParams.value)
})
</script>

<template>
  <default-layout>
    <main class="main">
      <home-poke-list>
        <template #card>
          <home-poke-list-card
            v-for="pokemon in state.results"
            :key="pokemon.name"
            :pokemon-url="pokemon.url"
            :pokemon-name="pokemon.name"
          >
          </home-poke-list-card>
          <div ref="lastItem"></div>
        </template>
      </home-poke-list>

      <div class="btn-container">
        <button class="btn-pagination" @click="handlePrevPage">&lt;</button>
        <button class="btn-pagination" @click="handleNextPage">></button>
      </div>
    </main>

    <global-modal></global-modal>
  </default-layout>
</template>

<style>
.main {
  height: 100%;
  background-color: rgb(213, 244, 251);
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  overflow-y: scroll;
}

.btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 10px;
}

.btn-pagination {
  background-color: aquamarine;
  border-radius: 10px;
  padding: 10px 40px;
}
</style>
