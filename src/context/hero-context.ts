import { createContext, useContext } from 'react'
import type { Hero } from '../types/hero'

type HeroContextType = {
  favorites: Hero[]
  addToFavorites: (hero: Hero) => void
  removeFromFavorites: (id: number) => void
}

const HeroContext = createContext<HeroContextType>({
  favorites: [],
  addToFavorites: () => {},
  removeFromFavorites: () => {},
})

export const useHeroContext = () => useContext(HeroContext)

export default HeroContext
