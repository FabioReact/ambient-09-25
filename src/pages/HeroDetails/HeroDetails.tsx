import { useParams } from 'react-router'
import HeroCard from '../../components/HeroCard/HeroCard'
import IsLoading from '../../components/IsLoading/IsLoading'
import { useQuery } from '@tanstack/react-query'
import { getHeroById } from '../../services/hero'

const HeroDetails = () => {
  const { id } = useParams()
  // useQuery -> GET
  // useMutation -> POST, PUT, PATCH, DELETE
  const {
    error,
    data: hero,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['hero', id],
    queryFn: () => getHeroById(id!),
  })

  return (
    <section>
      <h1>Hero Details</h1>
      <h2>Id of selected Hero: {id}</h2>
      <IsLoading loading={isLoading}>
        {isError && <p>An error occured: {error.message}</p>}
        {!isError && hero && <HeroCard hero={hero} />}
      </IsLoading>
    </section>
  )
}

export default HeroDetails
