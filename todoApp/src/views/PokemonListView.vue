<script lang="ts" setup>
import HomePokeList from '@/components/Home/HomePokeList.vue'
import { useAsyncState } from '@vueuse/core'
import { pokemonApis } from '@/server/pokemons'
import { ref, watch } from 'vue'
// import '@/assets/styleSheet/mixin.scss'

// const state = useGetPokemons()

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
</script>
<template>
  <main class="main">
    <home-poke-list :poke-list="state"> </home-poke-list>

    <div class="btn-container">
      <button class="btn-pagination" @click="handlePrevPage">&lt;</button>
      <button class="btn-pagination" @click="handleNextPage">></button>
    </div>
  </main>
</template>

<style></style>
