import type { Hero } from '../types/hero'

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

// export { getAllHeroes, getHeroesByLetter }
