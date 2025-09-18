import { useLayoutEffect } from 'react'
import { Navigate } from 'react-router'
import { useAppDispatch } from '../../redux/hooks'
import { logoutUser } from '../../redux/reducers/authReducer'

const Logout = () => {
  const dispatch = useAppDispatch()

  // Dès lors que j'arrive sur cette page, je suis tout de suite, déconnecté

  useLayoutEffect(() => {
    dispatch(logoutUser())
    return () => {}
  }, [])

  return <Navigate to='/login' replace />
}

export default Logout
