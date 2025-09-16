import { useState } from 'react'

const useCounter = () => {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter((c) => c + 1)
  }

  const decrement = () => {
    setCounter((c) => c - 1)
  }

  return {
    counter, // équivalent à counter: counter
    increment, // équivalent à increment: increment
    decrement, // decrement: decrement
  }
}

export default useCounter
