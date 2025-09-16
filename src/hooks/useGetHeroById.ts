import { useEffect, useState } from 'react'
import type { Hero } from '../types/hero'
import { getHeroById } from '../services/hero'

const useGetHeroById = (id: string) => {
  const [hero, setHero] = useState<Hero | null>(null)
  const [loading, setLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    getHeroById(id)
      .then((hero) => {
        setHero(hero)
        setLoading(false)
        setError(null)
        setIsError(false)
      })
      .catch((e) => {
        setError(e.message)
        setIsError(true)
        setLoading(false)
      })
  }, [id])

  return {
    hero: hero,
    loading: loading,
    isError: isError,
    error: error,
  }
}

export default useGetHeroById
