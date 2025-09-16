import { useRef, useState } from "react"

// component(Fabio) -> const hero a été détruit renders = 1
// component(FabioD) -> const hero a été de nouveau créé, renders = 0

const Search = () => {
    const [inputValue, setInputValue] = useState('Fabio')
    const renders = useRef(0)
    
    const onSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault()
    }

    console.log('renders', renders.current)

    return (
        <section>
            <h1>Search</h1>
            <form onSubmit={onSubmitHandler}>
                <fieldset>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={inputValue} onChange={(event) => {
                        setInputValue(event.target.value)
                        renders.current += 1
                    }} />
                </fieldset>
                <fieldset>
                    <label htmlFor="hero">Hero</label>
                    <input type="text" id="hero" name="hero" />
                </fieldset>
                <button>Search</button>
            </form>
        </section>
    )
}

export default Search