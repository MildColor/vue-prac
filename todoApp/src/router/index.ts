import { createRouter, createWebHistory } from 'vue-router'
import HomeViewVue from '@/views/HomeView.vue'
import PokemonDrawingViewVue from '@/views/PokemonDrawingView.vue'
import PokemonListView from '@/views/PokemonListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeViewVue,
      children: [
        {
          path: 'pokemons',
          name: 'pokemons',
          component: PokemonListView
        },
        {
          path: 'pokemon/:id/draw',
          name: 'pokemon-draw',
          component: PokemonDrawingViewVue
        }
      ]
    }
  ]
})

export default router
