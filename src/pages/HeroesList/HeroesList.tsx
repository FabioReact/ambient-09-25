import { useState } from "react"
import SelectLetter from "./SelectLetter";

const HeroesList = () => {
    const [selectedLetter, setSelectedLetter] = useState('a');

    const onClickLetter = (letter: string) => {
        setSelectedLetter(letter);
    }

    return (
        <section>
            <h1>Heroes List</h1>
            <p>Selected letter: {selectedLetter}</p>
            <SelectLetter selectedLetter={selectedLetter} onSelect={onClickLetter} />
            {/* Afficher la liste des héros selon la lettre sélectionnée  */}
        </section>
    )
}

export default HeroesList