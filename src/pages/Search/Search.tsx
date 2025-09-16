// import { useState } from 'react'
// import { getHeroesByFilters } from '../../services/hero'
// import { HeroAlignment, type Hero } from '../../types/hero'
// import HeroCard from '../../components/HeroCard/HeroCard'
import { useForm, type SubmitHandler } from 'react-hook-form'

type Inputs = {
  name: string
  hero: string
}

const Search = () => {
  const { register, handleSubmit } = useForm<Inputs>()
  // console.log(unTruc)
  // Utiliser react-hook-form
  // Mettre en place de la validation avec zod
  // const [inputValue, setInputValue] = useState('')
  // const renders = useRef(0)
  // const inputRef = useRef<HTMLInputElement>(null)
  // const alignmentRef = useRef<HTMLSelectElement>(null)
  // const [heroes, setHeroes] = useState<Hero[]>([])

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  }

  return (
    <section>
      <h1>Search</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label htmlFor='alignment'>Alignment</label>
          {/* <select name='alignment' id='alignment' ref={alignmentRef}>
            <option value={HeroAlignment.GOOD}>Good</option>
            <option value={HeroAlignment.BAD}>Bad</option>
          </select> */}
        </fieldset>
        <fieldset>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' {...register('name')} />
        </fieldset>
        <fieldset>
          <label htmlFor='hero'>Hero</label>
          <input type='text' id='hero' {...register('hero')} />
        </fieldset>
        <button>Search</button>
      </form>
      {/* <section className='flex flex-wrap justify-center gap-4'>
        {heroes.length === 0 && <p>No hero found</p>}
        {heroes.map((hero) => (
          <HeroCard key={hero.id} hero={hero} />
        ))}
      </section> */}
    </section>
  )
}

export default Search
