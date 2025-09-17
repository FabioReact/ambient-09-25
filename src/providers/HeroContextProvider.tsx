import { useState, type PropsWithChildren } from 'react'
import HeroContext from '../context/hero-context'
import type { Hero } from '../types/hero'

const HeroContextProvider = ({ children }: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<Hero[]>([])

  const addToFavorites = (hero: Hero) => {
    if (favorites.find((f) => f.id === hero.id)) return null
    setFavorites((f) => [...f, hero])
  }

  const removeFromFavorites = (id: number) => {
    setFavorites((f) => f.filter((f) => f.id !== id))
  }

  return (
    <HeroContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </HeroContext.Provider>
  )
}

export default HeroContextProvider
