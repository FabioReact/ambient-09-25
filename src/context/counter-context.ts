import { createContext, useContext } from 'react'

type CounterContextType = {
  counter: number
  increment: () => void
}

const CounterContext = createContext<CounterContextType>({
  counter: 0,
  increment: () => {},
})

export const useCounterContext = () => useContext(CounterContext)

export default CounterContext
