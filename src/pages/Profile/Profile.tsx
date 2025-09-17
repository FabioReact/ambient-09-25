import { useAuthContext } from '../../context/auth-context'

const Profile = () => {
  const { accessToken } = useAuthContext()
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
      </div>
    </section>
  )
}

export default Profile
