import { useCounterContext } from '../../context/counter-context'
import { useHeroContext } from '../../context/hero-context'
import { useAppSelector } from '../../redux/hooks'

const Profile = () => {
  const accessToken = useAppSelector((state) => state.auth.accessToken)
  const { counter, increment } = useCounterContext()
  const { favorites, removeFromFavorites } = useHeroContext()
  return (
    <section>
      <h1>Profile</h1>
      <div>
        <h2>Informations</h2>
        <p>Email: </p>
        <p>Token: {accessToken}</p>
      </div>
      <div>
        <h2>Heroes</h2>
        <p>Counter: {counter}</p>
        <button onClick={increment}>Increment</button>
        <ul>
          {favorites.map((f) => (
            <li key={f.id}>
              <span>#{f.id}</span>
              {f.name}{' '}
              <button onClick={() => removeFromFavorites(f.id)} className='text-red-600'>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Profile
