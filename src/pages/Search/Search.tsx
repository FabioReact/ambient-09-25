import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, type SubmitHandler } from 'react-hook-form'
import z from 'zod'
import { getHeroesByFilters } from '../../services/hero'
import { HeroAlignment } from '../../types/hero'
import HeroCard from '../../components/HeroCard/HeroCard'
import { schema } from './schema'
import { useQuery } from '@tanstack/react-query'
import IsLoading from '../../components/IsLoading/IsLoading'

type Inputs = z.infer<typeof schema>

const Search = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  })
  // const [heroes, setHeroes] = useState<Hero[]>([])
  // const filters = getValues() // recuperer les valeurs du formulaire lorsque la fonction est appelée
  const { alignment, hero, name } = watch() // recuperer les valeurs du formulaire mises à jour

  const {
    data: heroes,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['heroes', alignment, hero, name],
    queryFn: () =>
      getHeroesByFilters({
        name: name,
        fullname: hero,
        alignment: alignment,
      }),
    enabled: false,
  })

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
    refetch()
    // getHeroesByFilters({
    //   name: data.hero,
    //   fullname: data.name,
    //   alignment: data.alignment,
    // }).then((heroes) => {
    //   setHeroes(heroes)
    // })
  }

  return (
    <section>
      <h1>Search</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label htmlFor='alignment'>Alignment</label>
          <select id='alignment' {...register('alignment')}>
            <option value={HeroAlignment.GOOD}>Good</option>
            <option value={HeroAlignment.BAD}>Bad</option>
          </select>
          {errors.alignment && (
            <p className='text-red-500 text-xs italic'>{errors.alignment.message}</p>
          )}
        </fieldset>
        <fieldset>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' {...register('name')} />
          {errors.name && <p className='text-red-500 text-xs italic'>{errors.name.message}</p>}
        </fieldset>
        <fieldset>
          <label htmlFor='hero'>Hero</label>
          <input type='text' id='hero' {...register('hero')} />
          {errors.hero && <p className='text-red-500 text-xs italic'>{errors.hero.message}</p>}
        </fieldset>
        <button
          disabled={!isValid}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed'
        >
          Search
        </button>
      </form>
      <section className='flex flex-wrap justify-center gap-4'>
        <IsLoading loading={isLoading}>
          {heroes?.length === 0 && <p>No hero found</p>}
          {heroes?.map((hero) => (
            <HeroCard key={hero.id} hero={hero} />
          ))}
        </IsLoading>
      </section>
    </section>
  )
}

export default Search
