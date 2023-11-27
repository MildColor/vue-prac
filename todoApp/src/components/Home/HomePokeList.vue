<script lang="ts" setup>
import HomePokeListCard from '@/components/Home/HomePokeListCard.vue'

defineProps(['pokeList'])
</script>
<template>
  <section class="poke-list-container">
    <ul class="poke-list">
      <home-poke-list-card
        v-for="pokemon in pokeList.results"
        :key="pokemon.name"
        :pokemon-url="pokemon.url"
        :pokemon-name="pokemon.name"
      >
      </home-poke-list-card>
    </ul>
  </section>
</template>

<style scoped>
.poke-list_container {
}

.poke-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
}
</style>
