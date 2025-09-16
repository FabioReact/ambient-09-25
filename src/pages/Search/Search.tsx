import { useRef, useState } from 'react'
import { getHeroesByFilters } from '../../services/hero'
import { HeroAlignment, type Hero } from '../../types/hero'
import HeroCard from '../../components/HeroCard/HeroCard'

const Search = () => {
  // Utiliser react-hook-form
  // Mettre en place de la validation avec zod
  const [inputValue, setInputValue] = useState('')
  const renders = useRef(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const alignmentRef = useRef<HTMLSelectElement>(null)
  const [heroes, setHeroes] = useState<Hero[]>([])

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    const alignment = alignmentRef.current?.value as HeroAlignment
    getHeroesByFilters({ fullname: inputValue, name: inputRef.current?.value, alignment }).then(
      (heroes) => {
        setHeroes(heroes)
      },
    )
  }

  return (
    <section>
      <h1>Search</h1>
      <form onSubmit={onSubmitHandler}>
        <fieldset>
          <label htmlFor='alignment'>Alignment</label>
          <select name='alignment' id='alignment' ref={alignmentRef}>
            <option value={HeroAlignment.GOOD}>Good</option>
            <option value={HeroAlignment.BAD}>Bad</option>
          </select>
        </fieldset>
        <fieldset>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            value={inputValue}
            onChange={(event) => {
              setInputValue(event.target.value)
              renders.current += 1
            }}
          />
        </fieldset>
        <fieldset>
          <label htmlFor='hero'>Hero</label>
          <input ref={inputRef} type='text' id='hero' name='hero' />
        </fieldset>
        <button>Search</button>
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
