import { useState } from 'react'
import SelectLetter from './SelectLetter'
import HeroCard from '../../components/HeroCard/HeroCard'
import IsLoading from '../../components/IsLoading/IsLoading'
import { useGetHeroesByLetter } from '../../hooks/useGetHeroesByLetter'

const initialLetter = 'a'

const HeroesList = () => {
  const [selectedLetter, setSelectedLetter] = useState(initialLetter)
  const { heroes, loading, refetch } = useGetHeroesByLetter(initialLetter)

  // useGetHeroesByLetter

  // Fonction pure uniquement
  // 1. Pour un input donné, toujours retourner le même output
  // 2. Pas d'effet de bord
  // 3. Donc aucun appel http

  const onClickLetter = (letter: string) => {
    setSelectedLetter(letter)
    refetch(letter)
  }

  return (
    <section>
      <h1>Heroes List</h1>
      <p>Selected letter: {selectedLetter}</p>
      <SelectLetter selectedLetter={selectedLetter} onSelect={onClickLetter} />
      <IsLoading loading={loading}>
        <div className='flex flex-wrap justify-center gap-4'>
          {heroes?.map((hero) => (
            <HeroCard key={hero.id} hero={hero} />
          ))}
        </div>
      </IsLoading>
    </section>
  )
}

export default HeroesList
