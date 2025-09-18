import { useLocalStorage } from 'usehooks-ts'
import AuthContext from '../context/auth-context'
import { useState, type PropsWithChildren } from 'react'

const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [localStorageToken, setLocalStorageToken, removeLocalStorageToken] = useLocalStorage<string | null>('token', null)
  const [accessToken, setAccessToken] = useState<string | null>(localStorageToken)

  const loginUser = (token: string) => {
    setAccessToken(token)
    setLocalStorageToken(token)
  }

  const logoutUser = () => {
    setAccessToken(null)
    removeLocalStorageToken()
  }

  return <AuthContext.Provider value={{ accessToken, loginUser, logoutUser }}>{children}</AuthContext.Provider>
}

export default AuthContextProvider
