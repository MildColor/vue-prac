<script lang="ts" setup>
import { pokemonApis } from '@/server/pokemons'
import { useAsyncState } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const pokemonName = ref('')
// const { state, isReady, isLoading, execute } = useAsyncState(
//   async (args) => {
//     try {
//       const response = await pokemonApis.getPokemons(args)
//       return response.data
//     } catch (error) {
//       console.log(error)
//     }
//   },
//   // 초기상태
//   {},
//   // 옵션
//   {}
// )
</script>
<template>
  <input type="text" v-model="pokemonName" placeholder="검색어 입력하기" class="" />
</template>

<style></style>
