import { useLocalStorage } from 'usehooks-ts'
import AuthContext from '../context/auth-context'
import { useState, type PropsWithChildren } from 'react'

const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [localStorageToken, setLocalStorageToken] = useLocalStorage<string | null>('token', null)
  const [accessToken, setAccessToken] = useState<string | null>(localStorageToken)

  const loginUser = (token: string) => {
    setAccessToken(token)
    setLocalStorageToken(token)
  }

  return <AuthContext.Provider value={{ accessToken, loginUser }}>{children}</AuthContext.Provider>
}

export default AuthContextProvider
