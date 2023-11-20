import api from '@/server/api'

export interface apiPagination {
  offset: number
  limit: number
}

export const pokemonApis = {
  getPokemons: async (params: apiPagination) => await api.get(`pokemon`, { params }),
  getPokemonDetail: async (url: string) => await api.get(url)
}
