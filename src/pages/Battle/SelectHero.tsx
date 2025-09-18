import { getHeroesByFilters } from '../../services/hero'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import type { Hero } from '../../types/hero'
import { useState } from 'react'

type SelectHeroProps = {
  label: string
  onSelect: (hero: Hero) => void
}

const SelectHero = ({ label, onSelect }: SelectHeroProps) => {
  const [inputValue, setInputValue] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const queryClient = useQueryClient()
  const { data: heroes } = useQuery({
    queryKey: ['heroes', searchTerm, label],
    queryFn: () => getHeroesByFilters({ name: searchTerm }),
    enabled: searchTerm !== '',
  })

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (inputValue === '') return
    setSearchTerm(inputValue)
  }

  return (
    <div className='bg-white p-6 rounded-lg shadow-lg'>
      <form onSubmit={onSubmitHandler}>
        <fieldset className='mb-4'>
          <label htmlFor={label} className='block text-sm font-medium text-gray-700'>
            Select your {label}
          </label>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type='text'
            className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            name={label}
            id={label}
          />
        </fieldset>
        <button className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
          Search
        </button>
      </form>
      {heroes && (
        <ul className='mt-4'>
          {heroes.map((hero) => (
            <li
              key={hero.id}
              className='cursor-pointer hover:bg-gray-200 p-2 rounded-md'
              onClick={() => {
                onSelect(hero)
                queryClient.invalidateQueries({ queryKey: ['heroes'] })
              }}
            >
              <span>#{hero.id}</span> - {hero.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SelectHero
