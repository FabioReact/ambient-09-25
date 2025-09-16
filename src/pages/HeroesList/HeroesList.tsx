import { useEffect, useState } from "react"
import SelectLetter from "./SelectLetter";
import type { Hero } from "../../types/hero";
import HeroCard from "../../components/HeroCard/HeroCard";
import { getHeroesByLetter } from "../../services/hero";
import IsLoading from "../../components/IsLoading/IsLoading";

const initialLetter = 'a';


const HeroesList = () => {
    const [selectedLetter, setSelectedLetter] = useState(initialLetter);
    const [loading, setLoading] = useState(true);
    const [heroes, setHeroes] = useState<Hero[]|null>(null);
    // useGetHeroesByLetter

    // Fonction pure uniquement
    // 1. Pour un input donné, toujours retourner le même output
    // 2. Pas d'effet de bord
    // 3. Donc aucun appel http

    useEffect(() => {
        const controller = new AbortController();

        getHeroesByLetter(initialLetter, {
            signal: controller.signal
        }).then(result => {
            setHeroes(result);
            setLoading(false);
        })
        return () => {
            // cleanup
            controller.abort();
        }
    }, []);

    const onClickLetter = (letter: string) => {
        setSelectedLetter(letter);
        setLoading(true);
        getHeroesByLetter(letter).then(result => {
            setHeroes(result);
            setLoading(false);
        })
    }

    return (
        <section>
            <h1>Heroes List</h1>
            <p>Selected letter: {selectedLetter}</p>
            <SelectLetter selectedLetter={selectedLetter} onSelect={onClickLetter} />
            <IsLoading loading={loading}>
                <div className="flex flex-wrap justify-center gap-4">
                    {heroes?.map(hero => <HeroCard key={hero.id} hero={hero} />)}
                </div>
            </IsLoading>
        </section>
    )
}

export default HeroesList