import { useEffect, useState } from 'react'
import type { Hero } from '../types/hero'
import { getHeroesByLetter } from '../services/hero'

export const useGetHeroesByLetter = (initialLetter = 'a') => {
  const [heroes, setHeroes] = useState<Hero[] | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()

    getHeroesByLetter(initialLetter, {
      signal: controller.signal,
    }).then((result) => {
      setHeroes(result)
      setLoading(false)
    })
    return () => {
      // cleanup
      controller.abort()
    }
  }, [])

  const refetch = (letter: string) => {
    setLoading(true)
    getHeroesByLetter(letter).then((result) => {
      setHeroes(result)
      setLoading(false)
    })
  }

  return {
    loading, // loading: loading,
    heroes, // heroes: heroes,
    refetch, // refetch: refetch
  }
}
