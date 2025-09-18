import { useEffect, useState } from 'react'
import SelectLetter from './SelectLetter'
import HeroCard from '../../components/HeroCard/HeroCard'
import IsLoading from '../../components/IsLoading/IsLoading'
import { useQuery } from '@tanstack/react-query'
import { getHeroesByLetter } from '../../services/hero'
import HeroSkeletonCard from '../../components/HeroCard/HeroSkeletonCard'
import { useGetHeroesByLetterQuery, useLazyGetHeroesByLetterQuery } from '../../redux/services/heroesApi'

const initialLetter = 'a'

const HeroesList = () => {
  const [selectedLetter, setSelectedLetter] = useState(initialLetter)

  // const { isLoading, data: heroes } = useQuery({
  //   queryKey: ['heroes', 'letter', selectedLetter],
  //   queryFn: () => getHeroesByLetter(selectedLetter),
  // })
  const [searchHeroes, { isLoading, data: heroes }] = useLazyGetHeroesByLetterQuery()

  useEffect(() => {
    searchHeroes(selectedLetter)
  }, [])

  // Fonction pure uniquement
  // 1. Pour un input donné, toujours retourner le même output
  // 2. Pas d'effet de bord
  // 3. Donc aucun appel http

  const onClickLetter = (letter: string) => {
    setSelectedLetter(letter)
    searchHeroes(letter)
  }

  return (
    <section>
      <SelectLetter selectedLetter={selectedLetter} onSelect={onClickLetter} />
      <div className='flex flex-wrap justify-center gap-4'>
        {isLoading &&
          Array.from({ length: 10 }).map((_, index) => <HeroSkeletonCard key={index} />)}
        {!isLoading && heroes?.map((hero) => <HeroCard key={hero.id} hero={hero} />)}
      </div>
    </section>
  )
}

export default HeroesList
