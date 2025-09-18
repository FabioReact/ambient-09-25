import { useState } from 'react'
import SelectLetter from './SelectLetter'
import HeroCard from '../../components/HeroCard/HeroCard'
import IsLoading from '../../components/IsLoading/IsLoading'
import { useQuery } from '@tanstack/react-query'
import { getHeroesByLetter } from '../../services/hero'

const initialLetter = 'a'

const HeroesList = () => {
  const [selectedLetter, setSelectedLetter] = useState(initialLetter)

  const { isLoading, data: heroes } = useQuery({
    queryKey: ['heroes', 'letter', selectedLetter],
    queryFn: () => getHeroesByLetter(selectedLetter),
  })

  // Fonction pure uniquement
  // 1. Pour un input donné, toujours retourner le même output
  // 2. Pas d'effet de bord
  // 3. Donc aucun appel http

  const onClickLetter = (letter: string) => {
    setSelectedLetter(letter)
  }

  return (
    <section>
      <h1>Heroes List</h1>
      <p>Selected letter: {selectedLetter}</p>
      <SelectLetter selectedLetter={selectedLetter} onSelect={onClickLetter} />
      <IsLoading loading={isLoading}>
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
