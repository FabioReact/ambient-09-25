import { useLayoutEffect } from 'react'
import { useAuthContext } from '../../context/auth-context'
import { Navigate } from 'react-router'

const Logout = () => {
  const { logoutUser } = useAuthContext()

  // Dès lors que j'arrive sur cette page, je suis tout de suite, déconnecté

  useLayoutEffect(() => {
    logoutUser()
    return () => {}
  }, [])

  return <Navigate to='/login' replace />
}

export default Logout
