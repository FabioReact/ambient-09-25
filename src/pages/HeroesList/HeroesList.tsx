import { useEffect, useState } from "react"
import SelectLetter from "./SelectLetter";
import type { Hero } from "../../types/hero";
import HeroCard from "../../components/HeroCard/HeroCard";

const getAllHeroes = () => {
    return fetch('http://localhost:4000/heroes').then(res => res.json());
}

const getHeroesByLetter = (letter: string, options?: RequestInit): Promise<Hero[]> => {
    return fetch(`http://localhost:4000/heroes?name_like=^${letter}`, {
        signal: options?.signal
    }).then(res => res.json());
}

const initialLetter = 'a';

const HeroesList = () => {
    const [selectedLetter, setSelectedLetter] = useState(initialLetter);
    // const result: Hero[] = [];
    const [heroes, setHeroes] = useState<Hero[]|null>(null);

    // Fonction pure uniquement
    // 1. Pour un input donné, toujours retourner le même output
    // 2. Pas d'effet de bord
    // 3. Donc aucun appel http

    useEffect(() => {
        // getGeroes();
        const controller = new AbortController();

        getHeroesByLetter(initialLetter, {
            signal: controller.signal
        }).then(result => {
            setHeroes(result);
        })

        return () => {
            // cleanup
            controller.abort();
        }
    }, []);

    const onClickLetter = (letter: string) => {
        setSelectedLetter(letter);
        getHeroesByLetter(letter).then(result => {
            setHeroes(result);
        })
    }

    return (
        <section>
            <h1>Heroes List</h1>
            <p>Selected letter: {selectedLetter}</p>
            <SelectLetter selectedLetter={selectedLetter} onSelect={onClickLetter} />
            <div className="flex flex-wrap justify-center gap-4">
                {heroes?.map(hero => <HeroCard key={hero.id} hero={hero} />)}
            </div>
        </section>
    )
}

export default HeroesList