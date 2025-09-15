import { useState } from "react";

const LearnUseState = () => {
    const [counter, setCounter] = useState(0);

    const onIncrement = () => {
        setCounter(c => c + 1);
    }

    const onDecrement = () => {
        setCounter(counter - 1);
    }

    return (
        <section>
            <h1>Learning useState</h1>
            <p>Counter: {counter}</p>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
        </section>
    )
}

// export { LearnUseState } -> // -> import { LearnUseState as LearnUS } from './LearnUseState'
// export { getUsers, getPosts }
export default LearnUseState // -> import LearnUS from './LearnUseState'