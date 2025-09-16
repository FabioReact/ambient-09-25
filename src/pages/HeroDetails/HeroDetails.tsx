import { useParams } from 'react-router'
import HeroCard from '../../components/HeroCard/HeroCard'
import useGetHeroById from '../../hooks/useGetHeroById'
import IsLoading from '../../components/IsLoading/IsLoading'

const HeroDetails = () => {
  const { id } = useParams()
  const { error, hero, isError, loading } = useGetHeroById(id!)

  return (
    <section>
      <h1>Hero Details</h1>
      <h2>Id of selected Hero: {id}</h2>
      <IsLoading loading={loading}>
        {isError && <p>An error occured: {error}</p>}
        {!isError && hero && <HeroCard hero={hero} />}
      </IsLoading>
    </section>
  )
}

export default HeroDetails
