import {
  useState,
  type PropsWithChildren,
  memo,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from 'react'

// React.memo sert à mémoiser un composant
// Si un composant reçoit les memes props, il ne sera pas recreé, il retourne le composant existant

// useCallback sert à mémoiser le résultat d'une fonction

// useMemo sert à mémoiser une référence à une fonction

const expensiveFunction = (number: number) => {
  let str = ''
  for (let i = 0; i < 30000000; i++) {
    str += 'a'
  }
  return str.length + number
}

const Title = memo(({ children }: PropsWithChildren) => {
  console.log('Render de Title')
  const rendersRef = useRef(1)
  useEffect(() => {
    rendersRef.current = rendersRef.current + 1
  })
  return (
    <h1>
      {children} - Renders: {rendersRef.current}
    </h1>
  )
})

const Button = memo(({ onClick, children }: PropsWithChildren<{ onClick: () => void }>) => {
  console.log('Render de Button', children)
  const rendersRef = useRef(1)
  useEffect(() => {
    rendersRef.current = rendersRef.current + 1
  })
  return <button onClick={onClick}>{children}</button>
})

const Optimisations = () => {
  const [incrementBy, setIncrementBy] = useState(1)
  const [counter, setCounter] = useState(0) // 0 (Détruit le composant Optimisations qui a le state 0) => 1 (Recréation du composant avec le state 1)

  const increment = useCallback(() => {
    setCounter((c) => c + 1)
  }, [])

  const decrement = useCallback(() => () => setCounter((c) => c - 1), [])

  const onIncrementBy = useCallback(() => {
    setCounter((c) => c + incrementBy)
  }, [incrementBy])

  const result = useMemo(() => {
    console.log('Nouveau calcul de expensive function')
    return expensiveFunction(incrementBy)
  }, [incrementBy])

  return (
    <section>
      <Title>Optimisations</Title>
      <p>Counter: {counter}</p>
      <Button onClick={increment}>Increment</Button>
      {/* Incrementer: Props: "Increment" - Ref: 00001  */}
      <Button onClick={decrement}>Decrement</Button>
      {/* Incrementer: Props: "Decrement" - Ref: 20001  */}
      {/* Incrementer: Props: "Decrement" - Ref: 20002  */}
      <Button onClick={onIncrementBy}>Increment by X</Button>
      <div className='bg-amber-300'>
        <label htmlFor='incrementBy'>Increment By</label>
        <input
          type='number'
          value={incrementBy}
          onChange={(e) => setIncrementBy(parseInt(e.target.value))}
        />
      </div>
      <div className='bg-green-500'>
        <p>Result of compute expensive function: {result}</p>
      </div>
    </section>
  )
}

export default Optimisations
