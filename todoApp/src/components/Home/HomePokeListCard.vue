<script lang="ts" setup>
import { useAsyncState } from '@vueuse/core'
import { pokemonApis } from '@/server/pokemons'
import { watch } from 'vue'

const props = defineProps(['pokemonUrl', 'pokemonName'])

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
// src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png"
// watch(state, () => console.log(state?.value?.sprites?.front_default))
</script>
<template>
  <div class="poke-list-card">
    <li class="poke-list__card">
      <div class="poke-list__card-content">
        <img :src="state?.sprites?.front_default" class="poke-list__card-image" alt="pokemon" />
        <p class="poke-list__card-name">{{ state.name }}</p>
      </div>
    </li>
  </div>
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
}

.poke-list__card-name {
  text-align: center;
}
</style>
