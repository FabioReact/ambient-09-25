import { useAuthContext } from '../../context/auth-context'
import { useCounterContext } from '../../context/counter-context'

const Profile = () => {
  const { accessToken } = useAuthContext()
  const { counter, increment } = useCounterContext()
  return (
    <section>
      <h1>Profile</h1>
      <div>
        <h2>Informations</h2>
        <p>Email: </p>
        <p>Token: {accessToken}</p>
      </div>
      <div>
        <h2>Something Else</h2>
        <p>Counter: {counter}</p>
        <button onClick={increment}>Increment</button>
      </div>
    </section>
  )
}

export default Profile
