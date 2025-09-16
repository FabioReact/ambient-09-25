import { useEffect, useReducer, useState } from 'react'
import type { Hero } from '../types/hero'
import { getHeroById } from '../services/hero'

// reducer
const initialState = {
  hero: null,
  loading: true,
  isError: false,
  error: null,
}

type ActionType = 'FETCH_START' | 'FETCH_SUCCESS' | 'FETCH_ERROR'
type ActionPayload = { type: ActionType; payload: Hero | null | string }

const reducer = (state: typeof initialState, action: ActionPayload) => {
  switch (action.type) {
    case 'FETCH_START':
      return {
        ...state,
        hero: null,
        loading: true,
        isError: false,
        error: null,
      }
    case 'FETCH_SUCCESS':
      return {
        ...state,
        hero: action.payload,
        loading: false,
        isError: false,
        error: null,
      }
    case 'FETCH_ERROR':
      return {
        ...state,
        hero: null,
        loading: false,
        isError: true,
        error: action.payload,
      }
    default:
      throw new Error()
  }
}

const useGetHeroById = (id: string) => {
    const [hero, setHero] = useState<Hero | null>(null)
    const [loading, setLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [error, setError] = useState(null)
//   const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    getHeroById(id)
      .then((hero) => {
        setHero(hero)
        setLoading(false)
        setError(null)
        setIsError(false)
        // dispatch({ type: 'FETCH_SUCCESS', payload: hero })
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
