import { useEffect, useState } from "react";

const LearnUseEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Callback appelé uniquement lors de la création du composant");
        return () => {
            // localStorage.setItem("panier", JSON.stringify(count));
            // Cleanup - Free resources
            console.log("Callback appelé uniquement lors de la destruction du composant");
        }
    }, []);

    useEffect(() => {
        console.log('Abonnement à l\'id ', count);
        return () => {
            console.log('Désabonnement à l\'id ', count);
        }
    }, [count]);

    return (
        <section>
            <h1>LearnUseEffect</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
        </section>
    )
}

export default LearnUseEffect