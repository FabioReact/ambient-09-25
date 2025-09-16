import useCounter from "../../hooks/useCounter";

const LearnUseState = () => {
    const { counter, increment, decrement } = useCounter();

    return (
        <section>
            <h1>Learning useState</h1>
            <p>Counter: {counter}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </section>
    )
}

// export { LearnUseState } -> // -> import { LearnUseState as LearnUS } from './LearnUseState'
// export { getUsers, getPosts }
export default LearnUseState // -> import LearnUS from './LearnUseState'