import { useState, type PropsWithChildren } from 'react'
import CounterContext from '../context/counter-context'

const CounterContextProvider = ({ children }: PropsWithChildren) => {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter((c) => c + 1)
  }

  return (
    <CounterContext.Provider
      value={{
        counter,
        increment,
      }}
    >
      {children}
    </CounterContext.Provider>
  )
}

export default CounterContextProvider
