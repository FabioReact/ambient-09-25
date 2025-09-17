import { useCounterContext } from '../../context/counter-context'

const Home = () => {
  const { counter, increment } = useCounterContext()
  return (
    <section>
      <h1>Home</h1>
      <p>Counter: {counter}</p>
      <button onClick={increment}>Increment</button>
    </section>
  )
}

export default Home
