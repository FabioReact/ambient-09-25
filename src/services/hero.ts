import type { Hero, HeroAlignment } from '../types/hero'

export const getAllHeroes = () => {
  return fetch('http://localhost:4000/heroes').then((res) => res.json())
}

export const getHeroesByLetter = (letter: string, options?: RequestInit): Promise<Hero[]> => {
  return fetch(`http://localhost:4000/heroes?name_like=^${letter}`, {
    signal: options?.signal,
  }).then((res) => res.json())
}

export const getHeroById = (id: string) => {
  return fetch(`http://localhost:4000/heroes/${id}`).then((res) => {
    if (res.status === 404) {
      throw new Error('Hero not found')
    }
    return res.json()
  })
}

type Filters = {
  name?: string
  fullname?: string
  alignment?: HeroAlignment
}

export const getHeroesByFilters = (filters: Filters) => {
  const params = new URLSearchParams()
  params.append('name_like', filters.name || '')
  params.append('biography.full-name_like', filters.fullname || '')
  params.append('biography.alignment', filters.alignment || '')
  return fetch(`http://localhost:4000/heroes?${params.toString()}`).then((res) => res.json())
}

// export { getAllHeroes, getHeroesByLetter }
