import { useState } from 'react'
import type { Hero } from '../../types/hero'
import { fight } from './utils'
import HeroCard from '../../components/HeroCard/HeroCard'
import Swords from '../../components/Icons/Swords'
import SelectHero from './SelectHero'

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
    <section className='container mx-auto p-4 text-gray-900'>
      <h1 className='text-4xl text-center mb-8 font-thin uppercase tracking-widest'>Battle</h1>
      {!winner && (
        <div className='flex justify-center items-start gap-8'>
          {!hero && <SelectHero label='hero' onSelect={onSelectHero} />}
          {hero && <HeroCard hero={hero} />}
          {hero && challenger && (
            <div className='self-center'>
              <button className='cursor-pointer' onClick={onFight}>
                <Swords />
              </button>
            </div>
          )}
          {!challenger && <SelectHero label='challenger' onSelect={onSelectChallenger} />}
          {challenger && <HeroCard hero={challenger} />}
        </div>
      )}
      {winner && (
        <div className='flex flex-col items-center gap-2'>
          <button
            onClick={onReset}
            className='py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            Reset
          </button>
          <h2>🎉 The winner is:</h2>
          <HeroCard hero={winner} />
        </div>
      )}
    </section>
  )
}

export default Battle
