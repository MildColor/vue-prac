import { pokemonApis } from '@/server/pokemons'
import { useAsyncState } from '@vueuse/core'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGetPokemons = defineStore('getPokemons', () => {
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

  return { paginationParams, state, isReady, isLoading, execute, increaseOffset, decreaseOffest }
})
