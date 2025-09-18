import { useState } from 'react'
import type { Hero } from '../../types/hero'
import { getHeroesByFilters } from '../../services/hero'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { fight } from './utils'
import HeroCard from '../../components/HeroCard/HeroCard'
import Swords from '../../components/Icons/Swords'

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
    <div>
      <form onSubmit={onSubmitHandler}>
        <fieldset>
          <label htmlFor={label}>Select your {label}</label>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type='text'
            name={label}
            id={label}
          />
        </fieldset>
        <button>Search</button>
      </form>
      {heroes && (
        <ul>
          {heroes.map((hero) => (
            <li
              key={hero.id}
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

const Battle = () => {
  const [hero, setHero] = useState<Hero | null>(null)
  const [challenger, setChallenger] = useState<Hero | null>(null)
  const [winner, setWinner] = useState<Hero | null>(null)

  const onSelectHero = (hero: Hero) => {
    setHero(hero)
  }

  const onSelectChallenger = (hero: Hero) => {
    setChallenger(hero)
  }

  const onFight = () => {
    if (!hero || !challenger) return null
    const winner = fight(hero, challenger)
    setWinner(winner)
  }

  const onReset = () => {
    setHero(null)
    setChallenger(null)
    setWinner(null)
  }

  return (
    <section>
      <h1>Battle</h1>
      {!winner && (
        <div className='flex justify-center gap-8'>
          {!hero && <SelectHero label='hero' onSelect={onSelectHero} />}
          {hero && <HeroCard hero={hero} />}
          {hero && challenger && (
            <div>
              <button onClick={onFight}>
                <Swords />
              </button>
            </div>
          )}
          {!challenger && <SelectHero label='challenger' onSelect={onSelectChallenger} />}
          {challenger && <HeroCard hero={challenger} />}
        </div>
      )}
      {winner && (
        <>
          <button onClick={onReset}>Reset</button>
          <HeroCard hero={winner} />
        </>
      )}
    </section>
  )
}

export default Battle
