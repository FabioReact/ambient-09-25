import { createContext, useContext } from 'react'

type AuthContextType = {
  accessToken: string | null
  loginUser: (token: string) => void
}

const AuthContext = createContext<AuthContextType>({
  accessToken: null,
  loginUser: () => {},
})

export const useAuthContext = () => useContext(AuthContext)

// export const AuthContextProvider = AuthContext.Provider

export default AuthContext
