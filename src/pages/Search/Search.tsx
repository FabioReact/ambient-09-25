import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, type SubmitHandler } from 'react-hook-form'
import z from 'zod'
import { getHeroesByFilters } from '../../services/hero'
import { useState } from 'react'
import { HeroAlignment, type Hero } from '../../types/hero'
import HeroCard from '../../components/HeroCard/HeroCard'
import { schema } from './schema'

type Inputs = z.infer<typeof schema>

const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  })
  const [heroes, setHeroes] = useState<Hero[]>([])

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
    getHeroesByFilters({
      name: data.hero,
      fullname: data.name,
      alignment: data.alignment,
    }).then((heroes) => {
      setHeroes(heroes)
    })
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
        {heroes.length === 0 && <p>No hero found</p>}
        {heroes.map((hero) => (
          <HeroCard key={hero.id} hero={hero} />
        ))}
      </section>
    </section>
  )
}

export default Search
